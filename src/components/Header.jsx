import React from "react";
import { Link } from "react-router-dom";

import LOGO from "../assets/UK LOGO.jpg";
import { useHomeNavigate } from "../hooks/useHomeNavigate";

export const Header = () => {

  const handleNavigate = useHomeNavigate()

  return (
    <header>
      <nav className="max-w-screen-xl mx-auto rounded-lg border border-slate-400">
        <div className="flex justify-between items-center">
          <div onClick={handleNavigate} className="flex items-center justify-center sm:gap-2 cursor-pointer">
            <img src={LOGO} alt="Note Logo" className="h-14 max-[400px]:h-6 max-sm:max-h-10 rounded-lg" />
            <span className="max-[400px]:text-xs max-sm:text-lg text-3xl font-semibold">U-Note</span>
          </div>
          <div className="max-[400px]:text-lg max-sm:text-xl text-3xl font-semibold cursor-default">
            Note Taking App
          </div>
          <Link to="/add">
            <div className="max-[400px]:text-xs max-sm:text-sm text-2xl text-white bg-slate-700 rounded-lg px-2 py-2 cursor-pointer hover:ring-4 ring-slate-400">
              Add Note
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};
