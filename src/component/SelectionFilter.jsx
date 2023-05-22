import React, { useEffect, useRef } from "react";
import { managePlayerActions } from "../store/managePlayer/slice";
import { useDispatch, useSelector } from "react-redux";

const SelectionFilter = (props) => {
  const { type, data } = props.value;
  const selectRef = useRef("");
  const dispatch = useDispatch();
  const { filterTeam, filterPosition,resetFilter } = useSelector(
    (state) => state.managePlayer
  );


  const handleFilter = () => {
    const selectedIndex = selectRef.current.value;
    const selectedOption = data[selectedIndex];
    if (type === "Teams") {
      dispatch(managePlayerActions.setFilterTeam(selectedOption));
    }
    if (type === "Positions") {
      dispatch(managePlayerActions.setFilterPosition(selectedOption));
    }
  };

  const handleReset = () => {
    selectRef.current.selectedIndex = 0; // Reset the selectedIndex to 0
  };

  useEffect(() => {
    dispatch(
      managePlayerActions.filter({
        teams: filterTeam,
        positions: filterPosition,
      })
    );
  }, [dispatch, filterPosition, filterTeam]);

  useEffect(()=>{
    handleReset()
  },[resetFilter])
  
  const renderOptions = () => {
    return data.map((item, index) => (
      <option value={index} key={index}>
        {item}
      </option>
    ));
  };
  return (
    <div>
      <select
        ref={selectRef}
        onChange={handleFilter}
        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
      >
        <option value="">{type}</option>
        {renderOptions()}
      </select>
    </div>
  );
};

export default SelectionFilter;
