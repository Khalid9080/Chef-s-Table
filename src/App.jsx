import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  // Manage the queue of recipes to be cooked
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [doneRecipe, setDoneRecipe] = useState([]);
  const [totalTime,setTotaltime]=useState(0);
  const [totalCal, setTotalcal]=useState(0);

  const handleDeleteRecipe = (id) => {
    const newRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);
  
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQueue(updatedQueue);
  
    if (newRecipe) {
      setDoneRecipe([...doneRecipe, newRecipe]);
    }
  };

  const calculateTimeCal=(time,cal)=>{
    setTotaltime(totalTime+time)
    setTotalcal (totalCal+cal)
  }
  

  // Function to add a recipe to the queue if it doesn't already exist
  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find((rcp) => rcp.recipe_id === recipe.recipe_id);
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe already added to the queue");
    }
  };
  console.log(recipeQueue);

  return (
    <div className="container mx-auto">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Our Recipes Section */}
      <OurRecipes />

      {/* Recipes Card Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Recipes card */}
        <Recipes new_addRecipeToQueue_props={addRecipeToQueue} />

        {/* Sidebar Card */}
        <Sidebar totalCal={totalCal} totalTime={totalTime} calculateTimeCal={calculateTimeCal}  doneRecipe={doneRecipe} handleDeleteRecipe={handleDeleteRecipe} new_addRecipeToQueue_props={addRecipeToQueue}  recipeQueue={recipeQueue}/>
      </section>
    </div>
  );
};

export default App;
