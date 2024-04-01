import "../styles/EmployeeCard.css";
import employees from "../sampleData.json";
import EmployeeAnniversaryCard from "./EmployeeAnniversaryCard.jsx";

function Employees({ addMarble }) {
  const handleAddMarble = (employee) => {
    console.log(`Adding marble for ${employee.fullName}`);
    addMarble();
  };

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
  const currentMonth = getFullMonthName(currentDate.getMonth() + 1); // Months are zero-indexed

  const filteredEmployees = employees.filter((employee) => {
    const anniversaryMonth = employee.workAnniversaryDate.split(" ")[1];
    return anniversaryMonth == currentMonth;
  });
  console.log(filteredEmployees);

  return (
    <div>
      <h1>Upcoming Work anniversaries</h1>
      <div
        style={{
          maxHeight: "70vh",
          overflowY: "scroll",
          display:'flex',
          flexWrap:'wrap',
          padding:'1rem 1rem',
          columnGap:'1rem',
          rowGap:'2rem'
        }}
      >
        {filteredEmployees.map((employee) => (
          <EmployeeAnniversaryCard
            key={employee.email}
            fullName={employee.fullName}
            location={employee.location}
            anniversaryDate={employee.workAnniversaryDate}
            onAddMarble={() => handleAddMarble(employee)}
          />
        ))}
      </div>
    </div>
  );
}

export default Employees;
