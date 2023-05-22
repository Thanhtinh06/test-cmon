import React from "react";

const PlayerCard = (props) => {
  const { image, name, team, positions } = props.value;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-zinc-50 font-nunito">
      <img className="w-[90%] h-[480px] rounded-lg mx-auto mt-6 shadow-lg shadow-stone-400" src={image} alt={name} />
      <div className="px-6 py-4 flex flex-col items-start">
        <div className="font-bold text-xl mb-2 text-stone-700">{name}</div>
        <div className="px-6 pb-4">
          <div>
            <span className="text-gray-500">Team: </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {team}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Position: </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {positions}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
