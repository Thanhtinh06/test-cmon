import React from "react";
import PlayerTable from "../component/PlayerTable";
import FilteredPlayerTable from "../component/FilteredPlayerTable";

const Home = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="filter">
        <FilteredPlayerTable />
      </div>
      <div className="table-player mt-10">
        <PlayerTable />
      </div>
    </div>
  );
};

export default Home;
