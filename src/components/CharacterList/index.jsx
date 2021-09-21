import React from "react";
import { useSelector } from "react-redux";
import CharacterItem from "../CharacterItem";

const CharacterList = () => {
  const { characterList } = useSelector((state) => state.characterReducer);
  return (
    <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
      {characterList.length > 0 &&
        characterList.map((item, idx) => (
          <CharacterItem key={idx} item={item} />
        ))}
    </div>
  );
};

export default CharacterList;
