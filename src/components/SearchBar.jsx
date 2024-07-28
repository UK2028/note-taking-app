import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setPage, setSearchTerm } from "../redux/slice/noteSlice";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
  const inputRef = useRef();

  const [ _, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    inputRef.current = e.target.value;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const term = inputRef.current;
    dispatch(setSearchTerm(term));
    dispatch(setPage(1));
    setSearchParams({page:1, query:term});
    inputRef.current = "";
    e.target.reset();
  };

  return (
    <form className="max-w-md mx-auto mb-5" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          defaultValue={inputRef.current}
          onChange={handleChange}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Title or Content"
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 hover:scale-110 focus:scale-110 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};
