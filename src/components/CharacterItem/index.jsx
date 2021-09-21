import React from "react";
import { NavLink } from "react-router-dom";

const CharacterItem = ({ item }) => {
  const { image, name } = item;
  return (
    <div className="bg-gray-100 p-5 rounded-sm border border-solid border-gray-200">
      <img src={image.url} alt="" />
      <div className="mt-3">
        <h2 className="text-xl font-light mb-3">{name}</h2>
        <NavLink to={`/${item.id}`}>
          <button className="px-4 py-1 rounded-sm text-sm bg-teal-600 text-white">
            Detail
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CharacterItem;
