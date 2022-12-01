import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
  let term;
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    term = searchTerm;
    // return data; // get the carsSlice
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    const action = removeCar(car.id);
    console.log("Deleing car: ", car);
    dispatch(action);
  };

  console.log("Current Search Term from Car List: ", term);

  const renderCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(term.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  // const renderCars = cars.map((car) => {
  //   if (term.length > 0) {
  //     return (
  //       <div key={car.id} className="panel">
  //         <p>
  //           <strong>
  //             {car.name} - ${car.cost}
  //           </strong>
  //         </p>
  //         <button
  //           className="button is-danger"
  //           onClick={() => handleCarDelete(car)}
  //         >
  //           Delete
  //         </button>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div key={car.id} className="panel">
  //       <p>
  //         {car.name} - ${car.cost}
  //       </p>
  //       <button
  //         className="button is-danger"
  //         onClick={() => handleCarDelete(car)}
  //       >
  //         Delete
  //       </button>
  //     </div>
  //   );
  // });

  return (
    <div className="car-list">
      {renderCars}
      <hr />
    </div>
  );
};

export default CarList;
