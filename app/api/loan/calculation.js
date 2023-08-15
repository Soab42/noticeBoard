function loanCalc() {
  //   // Formated Data for calculation
  function combineLoanDetails(detailsArray) {
    return detailsArray.reduce((combined, detail) => {
      return { ...combined, ...detail };
    }, {});
  }

  const loanData = combineLoanDetails(loan.loan_details);
  const loanSchedule = loan.loan_Schedule
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

  //   console.log(loanData);
  //   console.log(loanSchedule);

  const rate = loanData.rate.slice(0, 2);

  for (let i = 0; i < loanSchedule.length; i++) {
    let currentLoan = loanSchedule[i];
    let previousLoan = loanSchedule[i - 1] || {
      closingOutstanding: loanData.loanAmount,
      date: loanData.disburseDate,
    };

    //day Calculation

    function calculateDaysDifference(startDateStr, endDateStr) {
      const startDate = moment(startDateStr, ["YYYY-MM-DD", "DD/MM/YY"], true);
      const endDate = moment(endDateStr, ["YYYY-MM-DD", "DD/MM/YY"], true);

      if (!startDate.isValid() || !endDate.isValid()) {
        return NaN;
      }

      const daysDifference = endDate.diff(startDate, "days");
      return daysDifference;
    }

    const days = calculateDaysDifference(previousLoan.date, currentLoan.date);

    currentLoan.interest = (
      previousLoan.closingOutstanding *
      (rate / (365 * 100)) *
      days
    ).toFixed(0); // Example interest calculation
    currentLoan.principle =
      Number(currentLoan.installment.replace(/,/, "")) -
      Number(currentLoan.interest);

    // Calculate closing outstanding
    currentLoan.closingOutstanding =
      previousLoan.closingOutstanding - currentLoan.principle;

    // Update lastInstallmentDate for next object
    // console.log("currentLoan", currentLoan);
    // console.log("prevLoan", previousLoan);
  }

  //   console.log(loan.loan_Schedule);

  return loanSchedule;
}
console.log(loanCalc());
