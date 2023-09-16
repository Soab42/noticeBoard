import moment from "moment";

export function formatReportingMonth(inputDate) {
  // Parse the input date using moment
  const parsedDate = moment(inputDate, "YYYYMM");

  // Format the parsed date as "Month Year"
  const formattedDate = parsedDate.format("MMMM/YYYY");

  return formattedDate;
}

export function formatReportingDate(yearMonth) {
  // Parse the input year and month using moment
  const parsedDate = moment(yearMonth, "YYYYMM");

  // Calculate the first day of the month
  const firstDay = parsedDate.clone().startOf("month");

  // Calculate the last day of the month
  const lastDay = parsedDate.clone().endOf("month");

  // Format the first and last days as needed
  const formattedFirstDay = firstDay.format("DD/MM/YYYY");
  const formattedLastDay = lastDay.format("DD/MM/YYYY");

  return formattedFirstDay + " to " + formattedLastDay;
}

export default function getThisYear(yearMonth) {
  // Parse the input year and month using moment
  const parsedDate = moment(yearMonth, "YYYYMM");
  const thisYearEnd = parsedDate.clone().endOf("month");

  // Calculate the start date of "this year"
  let thisYearStart;
  if (parsedDate.month() >= 6) {
    // If the current month is July or later, "this year" starts on July 1st of the current year
    thisYearStart = moment().month(6).date(1).startOf("day");
  } else {
    // If the current month is before July, "this year" starts on July 1st of the previous year
    thisYearStart = moment()
      .subtract(1, "year")
      .month(6)
      .date(1)
      .startOf("day");
  }

  // Calculate the end date of "this year," which is June 30th of the next year
  //   const thisYearEnd = thisYearStart
  //     .clone()
  //     .add(1, "year")
  //     .subtract(1, "day")
  //     .endOf("day");
  //   const thisYearEnd = lastDay.format("DD/MM/YYYY");

  return {
    start: thisYearStart.format("DD/MM/YYYY"),
    startY: thisYearStart.format("YYYYMM"),
    end: thisYearEnd.format("DD/MM/YYYY"),
    endY: thisYearEnd.format("YYYYMM"),
  };
}
