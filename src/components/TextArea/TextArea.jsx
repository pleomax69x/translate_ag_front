import "./TextArea.css";

const TextArea = () => {
  return (
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
  );
};

export default TextArea;
