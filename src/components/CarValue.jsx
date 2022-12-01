import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  let renderTotalValue = 0;
  cars.forEach((car) => {
    renderTotalValue += car.cost;
  });

  return (
    <div className="car-value">
      <p>Total Value: ${renderTotalValue}</p>
    </div>
  );
};

export default CarValue;
