import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [userIngriedients, setUserIngriedients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setUserIngriedients((prevIngredients) => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient },
    ]);
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
