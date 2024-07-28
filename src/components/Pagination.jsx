import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/slice/noteSlice";
import { useSearchParams } from "react-router-dom";

export const Pagination = ({ notes = [], page = 1, notePerPage = 10 }) => {
  
  const dispatch = useDispatch();
  const [ searchParams, setSearchParams ] =  useSearchParams();

  useEffect(()=>{
    const queryTerm = searchParams.get("query");
    queryTerm ? setSearchParams({page:page, query:queryTerm}) : setSearchParams({page:page, query:""})
  },[page])

  if (notes.length <= notePerPage ) {
    return <></>;
  }

  const pageList = [];

  for (let i = 1; i <= Math.ceil(notes.length / notePerPage); i++) {
    pageList.push(i);
  }

  const lastPage = Math.ceil(notes.length / notePerPage);

  const handleClick = (e) => {
    const value = e.target.dataset.value;
    if (value === undefined) return;
    else if (!isNaN(value)) dispatch(setPage(+value));
    else if (
      (page !== 1 && value === "previous") ||
      (page !== lastPage && value === "next")
    )
      dispatch(setPage(value));
  };

  const arrow =
    "flex items-center justify-center px-3 max-[500px]:px-1 h-8 max-[500px]:size-4 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer";

  return (
    <div className="flex justify-center mt-2 select-none" onClick={handleClick}>
      <ul className="flex items-center gap-1 max-[500px]:flex-wrap max-[500px]:justify-center -space-x-px h-8 max-[500px]:text-xs max-lg:text-sm lg:text-lg">
        <li style={page === 1 ? { visibility: "hidden" } : {}}>
          <span data-value={"previous"} className={`${arrow} rounded-s-lg`}>
            <svg
              data-value={"previous"}
              className="max-[500px]:size-2 size-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                data-value={"previous"}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </li>
        {pageList.map((i) => (
          <li key={i}>
            <span
              data-value={i}
              className={`flex items-center justify-center px-3 h-8 max-[500px]:size-4  leading-tight cursor-pointer ${
                page === i
                  ? "text-slate-100 border border-slate-300 bg-slate-400 hover:bg-slate-200 hover:text-slate-500"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {i}
            </span>
          </li>
        ))}
        <li style={page === lastPage ? { visibility: "hidden" } : {}}>
          <span data-value={"next"} className={`${arrow} rounded-e-lg`}>
            <svg
              data-value={"next"}
              className="max-[500px]:size-2 size-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                data-value={"next"}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  );
};
