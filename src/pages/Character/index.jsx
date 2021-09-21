import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Character = () => {
  const params = useParams();
  const { id } = params;

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://superheroapi.com/api/1438141713222051/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(character);

  const render = () => {
    const { image, appearance, biography, name, powerstats, connections } =
      character;
    return (
      <div className="md:grid grid-cols-2 gap-10">
        <img className="mb-5 md:mb-0" src={image.url} alt="" />
        <div>
          <h3 className="text-3xl font-bold mb-2">{name}</h3>
          <div className="flex flex-wrap">
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Gender:</span>{" "}
              {appearance.gender}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Race:</span>{" "}
              {appearance.race}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Height:</span>{" "}
              {appearance.height[1]}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Weight:</span>{" "}
              {appearance.weight[1]}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Aligment:</span>{" "}
              {biography.alignment}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Full name:</span>{" "}
              {biography["full-name"]}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Place of birth:</span>{" "}
              {biography["place-of-birth"]}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Place of birth:</span>{" "}
              {biography["place-of-birth"]}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Relative:</span>{" "}
              {connections.relatives}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Combat:</span>{" "}
              {powerstats.combat}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Durability:</span>{" "}
              {powerstats.durability}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Intelligence:</span>{" "}
              {powerstats.intelligence}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Power:</span>{" "}
              {powerstats.power}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Speed:</span>{" "}
              {powerstats.speed}
            </p>
            <p className="mr-3 mb-3 bg-gray-100 px-3 py-1 rounded-sm">
              <span className="font-semibold mb-2">Stregth:</span>{" "}
              {powerstats.strength}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return character ? render() : "";
};

export default Character;
