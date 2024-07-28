import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes, updateNote } from "../redux/slice/noteSlice";
import { useNavigate, useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";

export const NoteForm = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  
  const inputRef = useRef({});
  const navigate = useNavigate();
  const { id } = useParams();
  
  const pageTitle = id ? "Edit Note" : "Add Note"
  useTitle(pageTitle)
  
  if (id) {
    const { title, content } = notes.find((note) => note.id === id);
    inputRef.current = { title, content };
  }
  
  const handleInputChange = (e) => {
    inputRef.current[e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = inputRef.current;
    if (title === "" || content === "") return;
    const date = new Date();
    const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    if (id) {
      dispatch(updateNote({ id: id, ...inputRef.current, timestamp }));
    } else {
      dispatch(addNotes({ ...inputRef.current, timestamp }));
    }
    navigate("/");
    e.target.reset();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="max-w-xl mx-auto mt-5 border border-slate-700 p-[40px] rounded "
    >
      <div className="relative z-0 w-full mb-6 group ">
        <input
          onChange={(e) => handleInputChange(e)}
          defaultValue={inputRef.current.title}
          maxLength={20}
          type="text"
          name="title"
          id="Title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          htmlFor="Title"
          className="text-blue-500 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title
        </label>
      </div>

      <div className="grid md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            onChange={(e) => handleInputChange(e)}
            defaultValue={inputRef.current.content}
            type="text"
            name="content"
            id="content"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            maxLength={500}
            required
          />
          <label
            htmlFor="content"
            className="text-blue-500 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Content
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 hover:scale-110 focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
