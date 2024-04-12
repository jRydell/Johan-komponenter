import "./RadioButton.scss";

const RadioButton = () => {
  return (
    <div className="RadioButton">
      <input type="radio" id="radio-button-1" name="radio-group" />
      <label htmlFor="radio-button-1">This</label>
      <input type="radio" id="radio-button-2" name="radio-group" />
      <label htmlFor="radio-button-2">That</label>
      <input type="radio" id="radio-button-3" name="radio-group" />
      <label htmlFor="radio-button-3">The other</label>
    </div>
  );
};

export default RadioButton;
