"use client";

import { useEffect, useState } from "react";

function Meals() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    );
    const data = await res.json();
    // console.log(data.meals);
    setRecipe(data.meals);
  };

  console.log(recipe);

  const handler = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <>
      <div className="mt-12">
        <input
          onChange={handler}
          type="text"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter text here"
        />

        <button onClick={()=> loadData()} className="bg-red-400 p-2 rounded">
          Search
        </button>

        <div className="mt-12 grid grid-cols-3 gap-12">
          {recipe?.length > 0 &&
            recipe?.map((meal) => (
              <div key={meal.idMeal} className="border-2 p-4">
                <h6>{meal.strMeal}</h6>
                <p>{meal.strInstructions}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Meals;
