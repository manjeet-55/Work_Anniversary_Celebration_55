// EmployeeCard.js
import "../styles/EmployeeCard.css";

// eslint-disable-next-line react/prop-types
function EmployeeCard({ onAddMarble }) {
  return (
    <div className="employee-card">
      <img src="employee1.jpg" alt="Employee 1" />
      <button className="add-marble-btn" onClick={onAddMarble}>
        Add Marble
      </button>
    </div>
  );
}

export default EmployeeCard;
