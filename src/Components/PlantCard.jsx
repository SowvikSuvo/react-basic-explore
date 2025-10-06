import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  console.log(plant);

  const { name, image, price, category, id } = plant;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="h-50 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="tree" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>Price: {price}$</p>
        <div className="card-actions justify-end">
          <Link
            state={plant}
            to={`/plant-details/${id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
