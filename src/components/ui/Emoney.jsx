/* eslint-disable react/prop-types */
function Emoney({ handleChange, errors, formData }) {
  return (
    <div className="emoney">
      <div className="emoney-box">
        <h4>e-money Number</h4>
        <input
          type="num"
          placeholder="238521993"
          value={formData.emoneyNumber}
          onChange={(e) => handleChange(e)}
          name="emoneyNumber"
        />
        {errors.emoneyNumber && (
          <span className="error-message">{errors.emoneyNumber}</span>
        )}
      </div>
      <div className="emoney-box">
        <h4>e-money PIN</h4>
        <input
          type="num"
          placeholder="6891"
          value={formData.emoneyPin}
          onChange={(e) => handleChange(e)}
          name="emoneyPin"
        />
         {errors.emoneyPin && (
          <span className="error-message">{errors.emoneyPin}</span>
        )}
      </div>
    </div>
  );
}

export default Emoney;
