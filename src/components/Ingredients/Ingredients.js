import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [userIngriedients, setUserIngriedients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    fetch("https://react-hooks-project-5ea25.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify({ ingredient }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngriedients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  return (
    <div className="App">
      <IngredientForm onIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngriedients}
          onRemoveItem={() => {}}
        />
      </section>
    </div>
  );
};

export default Ingredients;
