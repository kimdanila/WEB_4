import LinearProgress from "@mui/material/LinearProgress";
function CreateNote({ textHandler,titleHandler, saveHandler,inputTitle, inputText }) {
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
<textarea
        cols="1"
        rows="1"
        value={inputTitle}
        placeholder="Заголовок..."
        onChange={titleHandler}
        maxLength="20"
      ></textarea>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Заметка..."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="note__footer">
      <span className="label">Символов осталось: {charLeft} </span>
       
        <button  className="note__save" onClick={saveHandler} >
          Сохранить
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
}

export default CreateNote;
