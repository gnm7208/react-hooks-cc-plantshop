// Main App component that renders the entire application
import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// Function component for the root App
function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
