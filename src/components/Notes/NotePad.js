import React, { useState, useEffect } from "react";
import Header from "./Header";
import NoteTable from "./NoteTable";
import AddNoteForm from "./AddNoteForm";
import EditNoteForm from "./EditNoteForm";
import './Notes.min.css'
import Navigation from "../Navigation/Navigation";

  // Creating initial notes and setting intial state.
  export const notesData = [
    {
      id: 1,
      title: "Want to save something?",
      body:
        "Try it out and then reload the page"
    },
    {
      id: 2,
      title: "The save is Local, ... ",
      body:
        "so when you reupload the page it will appear, but if you clear cache you will lose it"
    }
  ];

export default function NotePad() {


  const [notes, setNotes] = useState(notesData);

   // run once
  useEffect(() => {
    getLocalNotes();
  }, []);

  // useEffect
  useEffect(() => {
    saveLocalNotes();
  }, [notes]);

  // functions
  

  // saving it locally
  const saveLocalNotes = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  const getLocalNotes = () => {
    if (localStorage.getItem("notes") === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      const notesLocal = JSON.parse(localStorage.getItem("notes"));
      setNotes(notesLocal);
    }
  };

  const addNote = note => {
    // A work-around for generating unique IDs
    note.id = notes.length + 1;
    // Append note to existing notes array.
    setNotes([...notes, note]);
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, title: "", body: "" };
  const [currentNote, setCurrentNote] = useState(initialFormState);
  const editRow = note => {
    setEditing(true);
    setCurrentNote({ id: note.id, title: note.title, body: note.body });
  };

  const updateNote = (id, updatedNote) => {
    setEditing(false);
    setNotes(notes.map(note => (note.id === id ? updatedNote : note)));
  };

  return (
    
    <div className='section_notepad'>
      <Header />
      <div className="section">
        <div className="container">
          <div className="columns is-variable is-5">
            {editing ? (
              <EditNoteForm
                editing={editing}
                setEditing={setEditing}
                currentNote={currentNote}
                updateNote={updateNote}
              />
            ) : (
              <AddNoteForm addNote={addNote} />
            )}
            <NoteTable
              notes={notes}
              editRow={editRow}
              deleteNote={deleteNote}
              key={notes.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}