// PlantCard component that displays individual plant information
import React, { useState } from "react";

// Function component for a single plant card
function PlantCard({ plant, toggleStock, deletePlant, updatePlant }) {
  // State for edit mode and new price
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);

  // Handle save price
  const handleSave = () => {
    updatePlant(plant.id, parseFloat(newPrice));
    setIsEditing(false);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {isEditing ? (
        <div>
          <input
            type="number"
            step="0.01"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <p>Price: {plant.price}</p>
      )}
      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit Price</button>}
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
