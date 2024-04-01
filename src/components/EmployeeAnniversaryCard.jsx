// EmployeeAnniversaryCard.js
import "../styles/EmployeeAnniversaryCard.css";

// eslint-disable-next-line react/prop-types
function EmployeeAnniversaryCard({ fullName, location, onAddMarble }) {
  return (
    <div className='employee-anniversary-card'>
      <div className='header'>
        <h2>{fullName}</h2>
        <p className='location'>{location}</p>
      </div>
      <div className='content'>
        <p>Celebrating Work Anniversary!</p>
        <button className='add-marble-btn' onClick={onAddMarble}>
          Add Marble
        </button>
      </div>
    </div>
  );
}

export default EmployeeAnniversaryCard;
