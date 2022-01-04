import "./InputField.css";

// const InputField = () => {
//   return (
//     <fieldset>
//       <legend></legend>
//       <input type="text" />
//     </fieldset>
//   );
// };

// export default InputField;

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

const InputField = () => {
  const [posluga, setPosluga] = useState(null);
  const [label, setLabel] = useState("Ваша електронна пошта");
  const [mail, setMail] = useState("");

  return (
    <fieldset className="field_mail" tabIndex="-1">
      <legend className="legend_mail">{label}</legend>

      <input
        id="email"
        className="inputMail"
        name="email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        onFocus={(e) => console.log(e)}
        type="text"
        autoComplete="off"
        placeholder="Ваша електронна пошта"
      />
    </fieldset>
  );
};

export default InputField;
