import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data.map(plant => ({ ...plant, inStock: true }))));
  }, []);

  const addPlant = (newPlant) => {
    setPlants([...plants, { ...newPlant, inStock: true }]);
  };

  const toggleStock = (id) => {
    setPlants(plants.map(plant => 
      plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
    ));
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} searchTerm={searchTerm} toggleStock={toggleStock} />
    </main>
  );
}

export default PlantPage;
