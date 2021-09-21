import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CharacterList from "../../components/CharacterList";
import {
  fetchCharacter,
  updateCount,
} from "../../redux/action/characterAction/actions";
import {
  startLoading,
  stopLoading,
} from "../../redux/action/loadingAction/actions";

const Home = () => {
  const { start, end, characterList } = useSelector(
    (state) => state.characterReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getListOfCharacter();
    // eslint-disable-next-line
  }, [end]);

  const getListOfCharacter = async () => {
    if (end < 700) {
      if (!characterList.map((el) => +el.id).includes(+start)) {
        await dispatch(startLoading());
        for (let i = start; i <= end; i++) {
          await dispatch(fetchCharacter(i));
        }
        await dispatch(stopLoading());
      }
    }
  };

  console.log(characterList);

  return (
    <div className="">
      <CharacterList />
      <div className="text-center mt-10">
        <button
          onClick={() => dispatch(updateCount())}
          className="px-6 py-2 rounded-sm bg-amber-600 text-white cursor-pointer"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Home;
