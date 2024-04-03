export const getFullMonthName = (month) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[parseInt(month) - 1];
};
export const getYearDifference = (dateString, currentYear) => {
  if (!dateString) return;
  const inputDate = new Date(dateString);
  const inputYear = inputDate.getFullYear();
  const yearDifference = currentYear - inputYear;

  return yearDifference;
};

export const getAnniversary = (anniversaryDate) => {
  const workAnniversaryDate = anniversaryDate?.split("-")[2];
  const workAnniversaryMonth = getFullMonthName(anniversaryDate?.split("-")[1]);
  const workAnniversary = `${workAnniversaryDate} ${workAnniversaryMonth}`;
  return workAnniversary
};
