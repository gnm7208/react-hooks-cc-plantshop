// Header component that displays the app title and logo
import React from "react";

// Function component for the header section
function Header() {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
    </header>
  );
}

export default Header;
