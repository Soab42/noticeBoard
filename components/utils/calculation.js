export function getThisYearData(data) {
  const ThisYearReceiptData = {};
  const ThisYearPaymentData = {};

  // Iterate through each reporting month (e.g., '202307', '202308', ...)
  for (const reportingMonth in data) {
    if (data.hasOwnProperty(reportingMonth)) {
      const reportingMonthReceiptData =
        data[reportingMonth].nayabazarzone.dhanmondi.receiptData;
      const reportingMonthPaymentData =
        data[reportingMonth].nayabazarzone.dhanmondi.paymentData;

      // Iterate through each name in the receipt data
      for (const name in reportingMonthReceiptData) {
        if (reportingMonthReceiptData.hasOwnProperty(name)) {
          // If the name exists in the ThisYearReceiptData, add the value; otherwise, initialize it
          if (checkName(name)) {
            ThisYearReceiptData[name] =
              (ThisYearReceiptData[name] || 0) +
              reportingMonthReceiptData[name];
          }
          // console.log(reportingMonthReceiptData);
          // ThisYearReceiptData[name] = reportingMonthReceiptData[name];
        }
      }
      // Iterate through each name in the receipt data
      for (const name in reportingMonthPaymentData) {
        if (reportingMonthPaymentData.hasOwnProperty(name)) {
          // If the name exists in the ThisYearReceiptData, add the value; otherwise, initialize it
          if (checkName(name)) {
            ThisYearPaymentData[name] =
              (ThisYearPaymentData[name] || 0) +
              reportingMonthPaymentData[name];
          }
        }
      }
    }
  }
  return { ThisYearReceiptData, ThisYearPaymentData };
}

function checkName(name) {
  if (name === "Cash_in_Hand") return false;
  if (name === "Cash_at_Bank") return false;
  return true;
}

export function getOpeningCashBank(datas, thisYear) {
  // console.log(thisYear);
  const data = datas[thisYear]?.nayabazarzone?.dhanmondi?.receiptData;
  return { Cash_at_Bank: data?.Cash_at_Bank, Cash_in_Hand: data?.Cash_in_Hand };
}
export function getClosingCashBank(datas, thisYear) {
  // console.log(thisYear);
  const data = datas[thisYear]?.nayabazarzone?.dhanmondi?.paymentData;
  return { Cash_at_Bank: data?.Cash_at_Bank, Cash_in_Hand: data?.Cash_in_Hand };
}
