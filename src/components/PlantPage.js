// PlantPage component that manages the main plant management functionality
import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// Function component for the main plant page
function PlantPage() {
  // State for storing the list of plants
  const [plants, setPlants] = useState([]);
  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from the server on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data.map(plant => ({ ...plant, inStock: true }))));
  }, []);

  // Function to add a new plant to the list
  const addPlant = (newPlant) => {
    setPlants([...plants, { ...newPlant, inStock: true }]);
  };

  // Function to toggle the stock status of a plant
  const toggleStock = (id) => {
    setPlants(plants.map(plant =>
      plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
    ));
  };

  // Function to delete a plant from the list and server
  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setPlants(plants.filter(plant => plant.id !== id));
      });
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} searchTerm={searchTerm} toggleStock={toggleStock} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
