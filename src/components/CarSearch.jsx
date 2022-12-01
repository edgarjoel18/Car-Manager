import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();

  const term = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTerm = (event) => {
    event.preventDefault();
    const action = changeSearchTerm(event.target.value);
    dispatch(action);
  };
  console.log("Search Term: ", term);
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          className="input"
          value={term}
          onChange={handleSearchTerm}
        />
      </div>
    </div>
  );
};

export default CarSearch;
