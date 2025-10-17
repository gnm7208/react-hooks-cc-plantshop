// PlantCard component that displays individual plant information
import React from "react";

// Function component for a single plant card
function PlantCard({ plant, toggleStock, deletePlant }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.inStock ? (
        <button className="primary" onClick={() => toggleStock(plant.id)}>In Stock</button>
      ) : (
        <button onClick={() => toggleStock(plant.id)}>Out of Stock</button>
      )}
      <button onClick={() => deletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
