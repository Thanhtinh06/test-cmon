import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "./PlayerCard";
import NoItem from "./NoItem";

const PlayerTable = () => {
  const { playerArray } = useSelector((state) => state.managePlayer);
  const renderTable = () => {
    return playerArray.map((player) => {
      return <PlayerCard key={player.id} value={player} />;
    });
  };
  if (playerArray.length > 0) {
    return <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-6 items-center">{renderTable()}</div>;
  }
  return (
    <div className="mt-4">
      <NoItem />
    </div>
  );
};

export default PlayerTable;
