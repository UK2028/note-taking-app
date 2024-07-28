import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { getNotesFromState } from "../utils/utils";
import { deleteNote } from "../redux/slice/noteSlice";

export const NotePage = () => {
  useTitle("View Note")
  const { id: noteId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { notes } = useSelector(getNotesFromState);

  const { id, title, content, timestamp } = notes.find(
    (note) => note.id === noteId
  );

  const handleDelete = (id) => {
    dispatch(deleteNote({id}));
    navigate('/') 
  }

  return (
    <div className="flex justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full my-5">
      <div className="p-4 w-full max-w-2xl max-h-full border border-2 rounded-lg">
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex flex-col justify-between border-b rounded-t">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl max-[500px]:text-lg font-semibold text-gray-900">{title}</h3>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="py-3 px-3 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm max-[500px]:text-xs ms-auto inline-flex justify-center items-center border border-2"
              >
                Home
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <span className="text-base max-[500px]:text-sm leading-relaxed text-gray-500 w-full">
                {timestamp}
              </span>
            </div>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base max-[500px]:text-sm leading-relaxed text-gray-500 w-full">
              {content}
            </p>
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button
              type="button"
              onClick={() => navigate(`/edit/${id}`)}
              className="text-white bg-slate-700 hover:bg-slate-800 hover:scale-110 focus:scale-110 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm max-[500px]:text-xs px-5 py-2.5 text-center"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => handleDelete(id)}
              className="py-2.5 px-5 ms-3 text-sm max-[500px]:text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-700 hover:scale-110 focus:scale-110 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
