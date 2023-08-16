import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import moment from "moment";
// Utility function to delay execution
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function scrapeData(username, password, memberId) {
  // Launch a headless browser instance
  const browser = await puppeteer.launch({
    headless: "new", // Set to 'true' for production
  });

  try {
    const page = await browser.newPage();

    // Step 1: Login
    await page.goto("https://mfnext.microfin360.com/pmk/#/login");
    // ... (login process)
    console.log("starting Login .....");
    const usernameInput = await page.$("#__BVID__12");
    const passwordInput = await page.$("#__BVID__13");
    const loginButton = await page.$("button.btn:nth-child(3)");

    await usernameInput.type(username);
    await passwordInput.type(password);
    await loginButton.click();

    await delay(3000);
    console.log("login success and starting search member");

    // Step 2: Search for the member
    await page.goto(
      "https://mfnext.microfin360.com/pmk/#/members/members/index"
    );

    // ... (search process)
    console.log("login success and starting search member");
    await page.goto(
      "https://mfnext.microfin360.com/pmk/#/members/members/index"
    );
    const searchInput = await page.$('input[name="txt_name"]');
    const searchButton = await page.$("#custom-search-btn");

    await searchInput.type(memberId);
    await delay(2000);
    await searchButton.click();

    await delay(3000);

    const memberLink = await page.$("td div div span a");
    const href = await memberLink.evaluate((node) => node.getAttribute("href"));

    await page.goto(href);
    console.log("going to member information");
    await delay(3000);

    // Step 3: Get member details
    // ... (member details extraction)
    const indicesToExtract = [0, 2, 3, 4];

    const profile_details = await page.$eval(
      "address.profile_details",
      (addressElement, indices) => {
        const spanElements = Array.from(
          addressElement.querySelectorAll("span")
        );
        const selectedSpans = indices.map((index) => spanElements[index]);
        return selectedSpans.map((span) => span.textContent.trim());
      },
      indicesToExtract
    );
    console.log("profile details collecting");

    await delay(3000);
    // Step 4: Get loan details
    // ... (loan details extraction)
    const ulElement = await page.$('ul[tabindex="0"]');
    const liElements = await ulElement.$$("li.nav-item");
    if (liElements.length > 1) {
      await liElements[2].click();
      console.log("Clicked on the Loan Details li element.");
    } else {
      console.log("Not enough li elements found.");
    }

    await delay(3000);

    const photoUrl = await page.$$eval(
      "img",
      (elements, index) => elements[index].src,
      4
    );
    // Wait for the element to be present
    await page.waitForSelector(".table_member_view");

    // Get the fifth element with the class "table_member_view"
    const elements = await page.$$(".table_member_view");

    const fifthElement = elements[4];
    const lastTBody = await fifthElement.$("tbody > tbody:last-child");
    const trElements = await lastTBody.$$("tr");
    const loan_details = [];
    for (const [index, trElement] of trElements.entries()) {
      const tdElements = await trElement.$$("td");

      if (index === 0) {
        const firstTdText = await tdElements[1].evaluate(
          (element) => element.textContent
        );
        const secondTdText = await tdElements[2].evaluate(
          (element) => element.textContent
        );
        loan_details.push({
          rate: firstTdText.trim(),
          loanAmount: secondTdText.trim(),
        });
      } else if (index === 1) {
        const tdText = await tdElements[0].evaluate(
          (element) => element.textContent
        );
        loan_details.push({ disburseDate: tdText.trim() });
      } else if (index === 2) {
        const secondLastTdText = await tdElements[
          tdElements.length - 2
        ].evaluate((element) => element.textContent);
        const lastTdText = await tdElements[tdElements.length - 1].evaluate(
          (element) => element.textContent
        );
        loan_details.push({
          duration: secondLastTdText.trim(),
          installment: lastTdText.trim(),
        });
      }
    }
    const Loan_button = await lastTBody.$("button");
    await Loan_button.click();
    await delay(3000);
    console.log("getting Loan amount and click loan btn");
    // Step 5: Get loan schedule details
    // ... (loan schedule details extraction)
    const loan_Schedule = await page.$$eval(
      "table.infoTable > tbody > tr",
      (rows, indices) => {
        return rows.map((row) => {
          const cells = Array.from(row.querySelectorAll("td"));
          const tranData = cells.map((cell, i) => {
            if (i === 6) {
              return { date: cell.textContent.trim() };
            } else if (i === 7) {
              return { installment: cell.textContent.trim() };
            }
            return null;
          });
          const filteredTranDat = tranData.filter((item) => item !== null);
          const filteredTranData = filteredTranDat.filter(
            (item) => item.date !== "-" || item.installment !== "-"
          );

          return filteredTranData;
        });
      }
    );
    await browser.close();
    if ((loan_Schedule, loan_details)) {
      //refresh all DataStructure
      //firstly make loanDetails available
      function combineLoanDetails(detailsArray) {
        return detailsArray.reduce((combined, detail) => {
          return { ...combined, ...detail };
        }, {});
      }
      const loanDetails = combineLoanDetails(loan_details);
      //secondly make loanScheduleDetails available
      const loanSchedule = loan_Schedule
        .map((innerArray) => {
          const mergedObject = innerArray.reduce((combined, obj) => {
            return { ...combined, ...obj };
          }, {});

          if (Object.keys(mergedObject).length > 0) {
            return mergedObject;
          }

          return null;
        })
        .filter((obj) => obj !== null);

      //calculate loan schedule details
      const rate = loanDetails?.rate.slice(0, 2);
      for (let i = 0; i < loanSchedule.length; i++) {
        let currentLoan = loanSchedule[i];
        let previousLoan = loanSchedule[i - 1] || {
          closingOutstanding: loanDetails?.loanAmount,
          date: loanDetails?.disburseDate,
        };

        //day Calculation

        function calculateDaysDifference(startDateStr, endDateStr) {
          const startDate = moment(
            startDateStr,
            ["YYYY-MM-DD", "DD/MM/YY"],
            true
          );
          const endDate = moment(endDateStr, ["YYYY-MM-DD", "DD/MM/YY"], true);

          if (!startDate.isValid() || !endDate.isValid()) {
            return NaN;
          }

          const daysDifference = endDate.diff(startDate, "days");
          return daysDifference;
        }

        const days = calculateDaysDifference(
          previousLoan.date,
          currentLoan.date
        );

        currentLoan.interest = (
          previousLoan.closingOutstanding *
          (rate / (365 * 100)) *
          days
        ).toFixed(0); // Example interest calculation
        currentLoan.principle =
          Number(currentLoan?.installment.replace(/,/, "")) -
          Number(currentLoan?.interest);

        // Calculate closing outstanding
        currentLoan.closingOutstanding =
          previousLoan?.closingOutstanding - currentLoan?.principle;
      }
    }

    return {
      photoUrl,
      loanDetails,
      profile_details,
      loanSchedule,
    };
  } catch (error) {
    console.error("An error occurred during scraping:", error);
    await browser.close(); // Ensure browser is closed in case of error
    throw error; // Rethrow the error for handling in the server function
  }
}

export async function GET(request) {
  try {
    const username = request.nextUrl.searchParams.get("username");
    const password = request.nextUrl.searchParams.get("password");
    const memberId = request.nextUrl.searchParams.get("memberId");
    // Scrape data using the provided credentials
    const scrapedData = await scrapeData(username, password, memberId);

    console.log("Data scraping completed successfully");

    return NextResponse.json(scrapedData);
  } catch (error) {
    console.error("An error occurred:", error);

    return NextResponse.json({
      status: "error",
      message: "An error occurred while scraping data.",
    });
  }
}
