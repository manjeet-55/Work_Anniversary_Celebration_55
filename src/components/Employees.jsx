// EmployeeCards.js
import "../styles/EmployeeCard.css";
import employees from "../sampleData.json";
import EmployeeAnniversaryCard from "./EmployeeAnniversaryCard.jsx";

function Employees() {
  const handleAddMarble = (employee) => {
    console.log(`Adding marble for ${employee.fullName}`);
    // Add your logic to add marble here
  };

  // Get current date
  const currentDate = new Date();
  const getFullMonthName = (month) => {
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
  // const currentDay = currentDate.getDate();
  const currentMonth = getFullMonthName(currentDate.getMonth() + 1); // Months are zero-indexed

  // Filter employees whose work anniversary is in the current week
  const filteredEmployees = employees.filter((employee) => {
    const anniversaryMonth = employee.workAnniversaryDate.split(" ")[1];
    console.log(anniversaryMonth, currentMonth);
    return anniversaryMonth == currentMonth;
  });
  console.log(filteredEmployees);

  return (
    <div className='parent-component'>
      <h1>Employees Celebrating Work Anniversary Today</h1>
      {filteredEmployees.map((employee) => (
        <EmployeeAnniversaryCard
          key={employee.email}
          fullName={employee.fullName}
          location={employee.location}
          onAddMarble={() => handleAddMarble(employee)}
        />
      ))}
    </div>
  );
}

export default Employees;
