import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../redux/slice/noteSlice";

export const NoteCard = ({ note }) => {
  const { id, title, content, timestamp } = note;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote({ id }));
  };

  return (
    <div className="min-h-52 flex flex-col justify-between border rounded-lg px-2 py-3 border-2 border-slate-900 ">
      <div className="flex flex-col">
        <div className="flex justify-between max-[460px]:flex-col min-[460px]:lg:flex-row lg:flex-col max-lg:text-sm text-lg font-medium border-b-[1px] border-slate-900">
          <Link to={`/note/${id}`}>
            <div className="truncate">{title}</div>
          </Link>
          <div className="flex max-[460px]:justify-between lg:justify-between items-center max-lg:gap-2">
            <Link to={`/edit/${id}`}>
              <button className="hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="max-md:size-4 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
            </Link>
            <button
              className="hover:scale-125"
              onClick={() => handleDelete(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="max-md:size-4 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Link to={`/note/${id}`}>
          <div className="max-h-28 lg:text-sm max-lg:text-xs my-2 overflow-hidden">{content}</div>
        </Link>
      </div>
      <div className="max-lg:text-xs lg:text-sm border-t-[1px] border-slate-900">{timestamp}</div>
    </div>
  );
};
