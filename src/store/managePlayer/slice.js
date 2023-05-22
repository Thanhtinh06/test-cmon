import { createSlice } from "@reduxjs/toolkit";

const playerArray = [
  {
    id: 1,
    name: "Erling Haaland",
    positions: ["forward"],
    team: "Manchester City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "Thibaut Courois",
    positions: ["goalkeeper"],
    team: "Real Madrid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg",
  },
];

const positions = (() => {
  const result = [];
  for (let player of playerArray) {
    for (let position of player.positions) {
      result.push(position);
    }
  }
  return result;
})();

const teams = (() => {
  const result = [];
  for (let player of playerArray) {
    result.push(player.team);
  }
  return result;
})();

const initialState = {
  playerArray,
  positions,
  teams,
  filterTeam: "",
  filterPosition: "",
  resetFilter: false,
  search: "",
};

export const { reducer: managePlayerReducer, actions: managePlayerActions } =
  createSlice({
    name: "managePlayer",
    initialState,
    reducers: {
      setFilterTeam: (state, action) => {
        state.filterTeam = action.payload;
      },
      setFilterPosition: (state, action) => {
        state.filterPosition = action.payload;
      },
      filter: (state, action) => {
        const { teams, positions } = action.payload;
        state.resetFilter = false;

        state.playerArray = playerArray.filter((player) => {
          const teamMatch = !teams || teams === player.team;
          const positionMatch =
            !positions || player.positions.includes(positions);
          return teamMatch && positionMatch;
        });

        //if input search has value

        if (state.search) {
          state.playerArray = state.playerArray.filter((player) =>
            player.name.toLowerCase().includes(state.search)
          );
        }
      },
      resetFilter: (state, action) => {
        state.filterTeam = "";
        state.filterPosition = "";
        state.resetFilter = true;
        console.log("pos", state.filterPosition);
        console.log("team", state.filterTeam);
        console.log("arr", state.playerArray);
      },
      search: (state, action) => {
        const { filterTeam, filterPosition } = state;
        state.search = action.payload.toLowerCase();

        state.playerArray = playerArray.filter((player) =>
          player.name.toLowerCase().includes(state.search)
        );

        //if filters have value
        if (filterTeam || filterPosition) {
          state.playerArray = state.playerArray.filter((player) => {
            const teamMatch = !filterTeam || filterTeam === player.team;
            const positionMatch =
              !filterPosition || player.positions.includes(filterPosition);
            return teamMatch && positionMatch;
          });
        }
      },
    },
  });
