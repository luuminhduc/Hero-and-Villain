import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-5 px-3 md:px-0 bg-gray-100 fixed top-0 left-0 w-full">
      <div className="mx-auto flex flex-row justify-between items-center lg:max-w-6xl md:max-w-3xl w-full px-3 md:px-0">
        <NavLink to="/">
          <h1 className="text-3xl font-light">Hero and Villain</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
