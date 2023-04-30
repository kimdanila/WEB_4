import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";
import EdiText from "react-editext";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const data = [
    {
      name: "Active",
      value: notes.filter(
        (note) => !note.completed && new Date(note.expiryTime) > new Date()
      ).length,
    },
    {
      name: "Completed",
      value: notes.filter(
        (note) => note.completed && new Date(note.expiryTime) > new Date()
      ).length,
    },
    {
      name: "Expired",
      value: notes.filter((note) => new Date(note.expiryTime) < new Date())
        .length,
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const titleHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        title: inputTitle,
        text: inputText,
        completed: false,
        expiryTime,
      },
    ]);
    setInputText("");
    setInputTitle("");
    setExpiryTime("");
  };

  const updateNote = (id, newTitle, newText) => {
    const note = notes.find((t) => t.id === id);
    if (new Date(note.expiryTime) > new Date()) {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, title: newTitle, text: newText } : note
      );
      setNotes(updatedNotes);
    }
  };

  const handleCompleteNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, completed: !note.completed } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          completed={note.completed}
          expiryTime={note.expiryTime}
          updateNote={updateNote}
          handleCompleteNote={handleCompleteNote}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        titleHandler={titleHandler}
        saveHandler={saveHandler}
        inputTitle={inputTitle}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;