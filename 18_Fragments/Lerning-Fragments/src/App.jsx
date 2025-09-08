import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const newFoodItem = event.target.value.trim();

      if (!newFoodItem) return; // prevent empty items

      setFoodItems((prevItems) => [...prevItems, newFoodItem]);
      event.target.value = "";
    }
  };

  return (
    <Container>
      <h1 className="food-heading text-center my-3">🥗 Healthy Food List</h1>

      <FoodInput handleKeyDown={handleKeyDown} />

      <ErrorMessage items={foodItems} />

      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
