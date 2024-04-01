// MarbleBall.js
import "../styles/MarbleBall.css";

// eslint-disable-next-line react/prop-types
function MarbleBall({ onAnimationEnd }) {
  return (
    <div className="marble" onAnimationEnd={onAnimationEnd}>
      {/* Marble ball */}
      Marble
    </div>
  );
}

export default MarbleBall;
