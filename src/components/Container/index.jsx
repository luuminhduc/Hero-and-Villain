import React from "react";
import Header from "../Header";

const Container = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mx-auto mt-28 mb-10 lg:max-w-6xl md:max-w-3xl w-full px-3 md:px-0">
        {children}
      </div>
    </div>
  );
};

export default Container;
