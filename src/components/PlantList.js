import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm, toggleStock, deletePlant }) {
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
