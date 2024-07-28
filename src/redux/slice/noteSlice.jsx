import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getNotes, setNotes } from "../../utils/utils"; 


const initialState = {
  page: 1,
  notePerPage: 10,
  notes: getNotes() || [
    {
        "id": "ebyit9EF98N92Lu4ReMIW",
        "title": "Title 1",
        "content": "Content 1",
        "timestamp": "28/07/2024 19:29:32"
    },
    {
        "id": "dZ0Pqjiczd05vXz0kHLUb",
        "title": "Title 2",
        "content": "Content 2",
        "timestamp": "28/07/2024 19:29:54"
    },
    {
        "id": "QthJ0KuCYpgMIWCk-m8WM",
        "title": "Title 3",
        "content": "Content 3",
        "timestamp": "28/07/2024 19:30:11"
    },
    {
        "id": "2tPOnR0ZQVjh8aj_Olhqs",
        "title": "Title 4",
        "content": "Content 4",
        "timestamp": "28/07/2024 19:30:33"
    },
    {
        "id": "0bXeGhCkoLh89QOq1N88w",
        "title": "Title 5",
        "content": "Content 5",
        "timestamp": "28/07/2024 19:30:49"
    },
    {
        "id": "9QcoD7x-7Is_ui1ke-pUF",
        "title": "Title 6",
        "content": "Content 6",
        "timestamp": "28/07/2024 19:31:00"
    },
    {
        "id": "4zIxYT9HEpgL6h2S_lg3I",
        "title": "Title 7",
        "content": "Content 7",
        "timestamp": "28/07/2024 19:31:12"
    },
    {
        "id": "HxC_XmafeqxZFkB5ADGzI",
        "title": "Title 8",
        "content": "Content 8",
        "timestamp": "28/07/2024 19:31:23"
    },
    {
        "id": "MvfKvcN3HJ7_ssLpXc62I",
        "title": "Title 9",
        "content": "Content 9",
        "timestamp": "28/07/2024 19:31:51"
    },
    {
        "id": "3y4MOmtVVVX0jFZntQdbj",
        "title": "Title 10",
        "content": "Content 10",
        "timestamp": "28/07/2024 19:32:10"
    },
    {
        "id": "3NwVQqlxyJRltKrv8bCV0",
        "title": "Title 11",
        "content": "Content 11",
        "timestamp": "28/07/2024 19:32:26"
    }
],
  searchTerm: "",
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
        setNotes(state.notes);
      },
      prepare: (noteObject) => {
        return {
          payload: {
            id: nanoid(),
            ...noteObject,
          },
        };
      },
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
      setNotes(state.notes);
    },
    updateNote: (state, action) => {
      const noteObject = action.payload;
      state.notes = state.notes.map((note) =>
        note.id === noteObject.id ? noteObject : note
      );
      setNotes(state.notes);
    },
    setPage: (state, action) => {
      const value = action.payload;
      if (!isNaN(value)) state.page = value;
      else if (value === "previous" && state.page !== 1) state.page -= 1;
      else if (value === "next" && state.page !== Math.ceil(state.notes.length / state.notePerPage)) state.page += 1
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  },
});

export const { addNotes, deleteNote, updateNote, setPage, setSearchTerm  } = noteSlice.actions;

export const notesReducer = noteSlice.reducer;

