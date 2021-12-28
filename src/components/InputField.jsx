import { useState } from "react";
import "./InputField.css";

const InputField = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <fieldset className="field">
      <legend className="legend">posluga</legend>

      <input className="input" type="checkbox" id="service" />

      {/* <input
        className="input"
        id="name"
        placeholder="poslyga"
        value={name}
        name="name"
        onChange={handleChange}
      /> */}
      <label className="label" htmlFor="service">
        redactirovanie
      </label>

      <div className="selector_list">
        <label for="redactirovanie">
          Redactirovanie
          <input
            type="radio"
            id="redactirovanie"
            name="usluga"
            value="redact"
          />
        </label>

        <input type="radio" id="perevod" name="usluga" value="perevod" />
        <label for="perevod">Perevod</label>
      </div>
    </fieldset>
  );
};

export default InputField;
