import moment from "moment";

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
  const date = moment(anniversaryDate, "MM/DD/YYYY");

  const formattedDate = date.format("D MMMM");

  return formattedDate;
};

export const calculateAnniversaryNumber = (anniversaryDate) => {
  const date = moment(anniversaryDate, "MM/DD/YYYY");

  const currentYear = moment().year();
  const anniversaryYear = date.year();
  const differenceYears = currentYear - anniversaryYear;

  let message;
  if (differenceYears === 0) {
    message = "Celebrating anniversary this year!";
  } else if (differenceYears > 0) {
    message = `Will be celebrating ${differenceYears} year${
      differenceYears > 1 ? "s" : ""
    } anniversary`;
  } else {
    message = "Anniversary already passed!";
  }

  return message;
};
