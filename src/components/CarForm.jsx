import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  // const [name, setName] = useState("");
  // const [cost, setCost] = useState(0);
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const action = changeName(name);
  //   console.log(action);
  // }
  const handleChaneName = (name) => {
    const action = changeName(name); // calling the action
    dispatch(action);
  };

  const handleChangeCost = (event) => {
    const number = parseInt(event.target.value) || 0;
    const action = changeCost(number);
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const nameAction = changeName("");
    // dispatch(nameAction);
    // const costAction = changeCost(0);
    // dispatch(costAction);
    const action = addCar({
      name: name,
      cost: cost,
    });
    dispatch(action);
  };

  console.log("This is name ", name);
  console.log("This is cost ", cost);
  console.log(
    "Current state ",
    useSelector((state) => {
      return state;
    })
  );
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label>Name</label>
            {/* <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
             */}
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={(event) => handleChaneName(event.target.value)}
            />
          </div>
          <div className="field">
            <label>Cost</label>
            {/* <input type="text" value={cost} onChange={(event) => setCost(event.target.value)}/> */}
            <input
              className="input is-expanded"
              type="number"
              value={cost || ""}
              onChange={handleChangeCost}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
