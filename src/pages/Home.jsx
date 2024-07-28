import React from "react";
import { Notes, SearchBar, Pagination } from "../components";
import { useSelector } from "react-redux";
import useTitle from "../hooks/useTitle";
import { getNotesFromState } from "../utils/utils";

export const Home = () => {
  useTitle("Home");

  const { notes, page, notePerPage, searchTerm } =
    useSelector(getNotesFromState);

  const start = (page - 1) * notePerPage;
  const end = page * notePerPage;

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[80vh] max-w-screen-xl mx-auto py-4">
      <SearchBar />
      {searchTerm !== "" && filteredNotes.length === 0 ? (
        <div className="flex justify-center">No Note Found</div>
      ) : (
        <div className="min-h-[440px] flex flex-col justify-between">
          <Notes notes={filteredNotes.slice(start, end)} />
          <Pagination
            notes={filteredNotes}
            page={page}
            notePerPage={notePerPage}
          />
        </div>
      )}
    </div>
  );
};
