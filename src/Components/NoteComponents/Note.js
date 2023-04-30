import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from '@mui/icons-material/Edit';


function Note({ id,title, text, UpdateNote,deleteNote, }) {
  return (
    <div className="note">
      <div className="note__title">{title}</div>
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
      <EditIcon
         className="note__update"
      //   ocnClik={() =>  updateNote(id)}
          aria-hidden="true"
>
      </EditIcon>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
   
      </div>
    </div>
  );
}

export default Note;
