// MarbleBall.js
import "../styles/MarbleBall.css";

// eslint-disable-next-line react/prop-types
function MarbleBall({ onAnimationEnd }) {
  return (
    <div className="marble" onAnimationEnd={onAnimationEnd}>
    </div>
  );
}

export default MarbleBall;
