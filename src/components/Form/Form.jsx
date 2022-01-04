import { useState, useRef, useEffect } from "react";
// import clsx from "clsx";
import "./Form.css";
// import arrowDown from "../../img/arrow_down.svg";
import InputSelect2 from "../InputSelect2/InputSelect2";

const Form = () => {
  // const [selectLegend, setSelectLegend] = useState(null);
  // const [service, setService] = useState("Послуга");

  const [mailLabel, setMailLabel] = useState();
  const [mail, setMail] = useState("");

  const [nameLabel, setNameLabel] = useState();
  const [name, setName] = useState("");

  const [commentLabel, setCommentLabel] = useState();
  const [comment, setComment] = useState("");

  const [languageLabel, setLanguageLabel] = useState();
  const [language, setLanguage] = useState("");

  const groupService = { name: "Послуга", value: "service" };
  const groupService2 = { name: "Мова", value: "language" };
  const groupService3 = { name: "Мовна пара", value: "language" };

  const [service, setService] = useState("");
  // const opt = []
  // const opt2 = []
  // if(service === 'proofreading'){
  //   opt
  // }

  const optionService = [
    { name: "Редагування", value: "proofreading" },
    { name: "Переклад", value: "translation" },
  ];

  const optionTranslate = [
    { name: "Українська/російська — англійська", value: "toEn" },
    { name: "Англійська — українська", value: "EnToUk" },
    { name: "Англійська — російська", value: "EnToRu" },
    { name: "Російська — українська", value: "RuToUk" },
    { name: "Українська — російська", value: "UkToRu" },
  ];

  const optionRedact = [
    { name: "Українська", value: "uk" },
    { name: "Російська", value: "ru" },
    { name: "Англійська", value: "en" },
    { name: "Англійська (носій)", value: "enNative" },
  ];

  useEffect(() => {
    if (mail.length > 0) {
      setMailLabel("Ваша електронна пошта");
    }
    if (mail.length === 0) {
      setMailLabel("");
    }
  }, [mail]);

  useEffect(() => {
    if (name.length > 0) {
      setNameLabel("Ваше ім'я");
    }
    if (name.length === 0) {
      setNameLabel("");
    }
  }, [name]);
  useEffect(() => {
    if (comment.length > 0) {
      setCommentLabel("Коментар або покликання");
    }
    if (comment.length === 0) {
      setCommentLabel("");
    }
  }, [comment]);

  useEffect(() => {
    if (language.length > 0) {
      setLanguageLabel("Коментар або покликання");
    }
    if (language.length === 0) {
      setLanguageLabel("");
    }
  }, [language]);

  //   const handleRedact = () => {
  //     setSelectLegend("Послуга");
  //     setService("Редагування");
  //     setCheck((state) => !state);
  //   };
  //   const handlePerevod = () => {
  //     setSelectLegend("Послуга");
  //     setService("Переклад");
  //     setCheck((state) => !state);
  //   };

  // const handleSelect = (e) => {
  //   setSelectLegend("Послуга");
  //   setCheck((state) => !state);

  //   switch (e.target.value) {
  //     case "proofreading":
  //       setService("Редагування");
  //       break;
  //     case "translation":
  //       setService("Переклад");
  //       break;

  //     default:
  //       break;
  //   }
  // };

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
    <form>
      <div className="makeOrder__item">
        <InputSelect2
          option={optionService}
          lege={groupService}
          cb={setService}
        />

        <div className="area">
          <textarea className="area_text"></textarea>
          <div className="area_download">
            <span className="placeholder">Введіть текст або </span>

            <label className="input_download-label">
              завантажте файл
              <input
                type="file"
                className="input_download"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip"
              />
            </label>
          </div>
        </div>

        <fieldset className="text_field" tabIndex="-1">
          <legend className="text_field-legend">{mailLabel}</legend>

          <input
            id="email"
            className="text_field-input"
            name="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="text"
            autoComplete="off"
            placeholder="Ваша електронна пошта"
          />
        </fieldset>

        <fieldset className="text_field" tabIndex="-1">
          <legend className="text_field-legend">{nameLabel}</legend>

          <input
            id="name"
            className="text_field-input"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            autoComplete="off"
            placeholder="Ваше ім'я"
          />
        </fieldset>

        <fieldset className="text_field" tabIndex="-1">
          <legend className="text_field-legend">{commentLabel}</legend>

          <input
            id="comment"
            className="text_field-input"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            autoComplete="off"
            placeholder="Коментар або покликання"
          />
        </fieldset>

        {!service && <InputSelect2 option={[]} lege={[]} />}

        {service && <InputSelect2 option={optionRedact} lege={groupService3} />}

        {/* <fieldset className="field" tabIndex="0" ref={ref}>
          <legend className={clsx("legend", check && "legendOpen")}>
            {selectLegend}
          </legend>

          <input
            className="inputCheck"
            type="checkbox"
            id="service"
            checked={check}
            onChange={handleCheckbox}
          />
          <label className="label" htmlFor="service">
            {service}
            <img
              className={clsx("arrow_down", check && "openAr")}
              src={arrowDown}
              alt=""
            />
          </label>

          <div className="selector_list">
            {optionTranslate.map((item, idx) => (
              <label
                key={idx}
                className="selector_list_item"
                htmlFor={item.value}
              >
                {item.name}
                <input
                  className="inputRadio"
                  onClick={handleSelect}
                  type="radio"
                  id={item.value}
                  name="service"
                  value={item.value}
                />
              </label>
            ))}
          </div>
        </fieldset> */}
      </div>

      <div className="makeOrder__item">
        {/* <button className="btn" type="submit">
          Замовити
        </button> */}
      </div>
    </form>
  );
};

export default Form;
/* <input
        className="input"
        id="name"
        placeholder="poslyga"
        value={name}
        name="name"
        onChange={handleChange}
      /> */
