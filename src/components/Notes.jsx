import React from "react";
import { NoteCard } from "./NoteCard";

export const Notes = ({ notes=[] }) => {

  return (
    <div className="min-h-52 grid max-[700px]:grid-cols-2 min-[700px]:max-lg:grid-cols-3 grid-cols-5 gap-5">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};