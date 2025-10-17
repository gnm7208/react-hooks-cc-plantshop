// PlantList component that displays a list of plant cards
import React from "react";
import PlantCard from "./PlantCard";

// Function component for the plant list
function PlantList({ plants, searchTerm, toggleStock, deletePlant }) {
  // Filter plants based on search term
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlants.map(plant => (
        <PlantCard key={plant.id} plant={plant} toggleStock={toggleStock} deletePlant={deletePlant} />
      ))}
    </ul>
  );
}

export default PlantList;
