import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import "./InputSelect2.css";
import arrowDown from "../../img/arrow_down.svg";

const InputSelect2 = ({ option, lege, cb }) => {
  const [selectLegend, setSelectLegend] = useState(null);
  const [service, setService] = useState(lege.name);

  const handleSelectUpdate = (e) => {
    setSelectLegend(lege.name);
    setCheck((state) => !state);
    let serv = option.find((item) => item.value === e.target.value);
    setService(serv.name);
    // console.log(service.value);
    cb(serv.value);
  };

  const [check, setCheck] = useState(false);
  const handleCheckbox = ({ target: { checked } }) => {
    setCheck(checked);
  };

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setCheck(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [ref]);

  return (
    <fieldset className="field" tabIndex="0" ref={ref}>
      <legend className={clsx("legend", check && "legendOpen")}>
        {selectLegend}
      </legend>

      <input
        className="inputCheck"
        type="checkbox"
        id={lege.value}
        checked={check}
        onChange={handleCheckbox}
      />
      <label className="label" htmlFor={lege.value}>
        {service}
        <img
          className={clsx("arrow_down", check && "openAr")}
          src={arrowDown}
          alt=""
        />
      </label>

      <div className="selector_list">
        {option.map((item, idx) => (
          <label key={idx} className="selector_list_item" htmlFor={item.value}>
            {item.name}
            <input
              className="inputRadio"
              onClick={handleSelectUpdate}
              type="radio"
              id={item.value}
              name={lege.value}
              value={item.value}
            />
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default InputSelect2;
/* <input
        className="input"
        id="name"
        placeholder="poslyga"
        value={name}
        name="name"
        onChange={handleChange}
      /> */

// <fieldset className="field" tabIndex="0" ref={ref}>
//   <legend className={clsx("legend", check && "legendOpen")}>
//     {selectLegend}
//   </legend>

//   <input
//     className="inputCheck"
//     type="checkbox"
//     id="service"
//     checked={check}
//     onChange={handleCheckbox}
//   />
//   <label className="label" htmlFor="service">
//     {service}
//     <img
//       className={clsx("arrow_down", check && "openAr")}
//       src={arrowDown}
//       alt=""
//     />
//   </label>

//   <div className="selector_list">
//     {optionService.map((item) => (
//       <label className="selector_list_item" htmlFor={item.value}>
//         {item.name}
//         <input
//           className="inputRadio"
//           onClick={handleSelect}
//           type="radio"
//           id={item.value}
//           name="service"
//           value={item.value}
//         />
//       </label>
//     ))}

// <label className="selector_list_item" htmlFor="redactirovanie">
//       Redactirovanie
//       <input
//         className="inputRadio"
//         onClick={handleSelect}
//         type="radio"
//         id="redactirovanie"
//         name="usluga"
//         value="redact"
//       />
//     </label>

//     <input
//       className="inputRadio"
//       onClick={handleSelect}
//       type="radio"
//       id="perevod"
//       name="usluga"
//       value="perevod"
//     />
//     <label className="selector_list_item" htmlFor="perevod">
//       Perevod
//     </label>
// </div>
// </fieldset>
