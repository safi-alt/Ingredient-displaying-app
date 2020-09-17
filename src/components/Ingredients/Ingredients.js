import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [userIngriedients, setUserIngriedients] = useState([]);

  useEffect(() => {
    fetch("https://react-hooks-project-5ea25.firebaseio.com/ingredients.json")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const loadIngredients = [];
        for (const key in responseData) {
          loadIngredients.push({
            id: key,
            title: responseData[key].ingredient.title,
            amount: responseData[key].ingredient.amount,
          });
        }
        setUserIngriedients(loadIngredients);
      });
  }, []);

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
