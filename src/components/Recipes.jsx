import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Recipes = ({new_addRecipeToQueue_props}) => {
    //1. recipes.json data gulo fetch korbo, using state
    const [recipes, setRecipes] = useState([]);

    //2. useEffect hook use korbo, fetch kore data gulake state a set kobo.
    useEffect(() => {
        fetch("./recipes.json")
            .then((res) => res.json())
            .then((data) => setRecipes(data)); //**data gulo shob recipes te set hobe
    }, []);

    return (

        <div className="md:w-3/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                recipes.map(rcp => (
                <div key={rcp.recipe_id}
                 className="card bg-base-100 border-2">
                    <figure className="px-7 pt-7 ">
                        <img className="md:h-52 w-full rounded-xl my-0"
                            src={rcp.recipe_image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-gray-800 font-semibold">{rcp.recipe_name}</h2>
                        <p className="text-gray-600 text-base">{rcp.short_description}</p>
                        <h3 className="text-lg text-gray-800 font-medium">Ingredients: {rcp.ingredients.length }</h3>

                        <ul className="ml-8">
                            {
                                rcp.ingredients.map((item, index) => (
                                    <li key={index} className="text-gray-600 list-disc ">
                                        {item}
                                    </li>
                                ))
                            }

                        </ul>

                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <i className="fa-regular fa-clock mr-2 text-xl"></i>
                                <p>{rcp.preparing_time} Minute.</p>
                            </div>

                            <div className="flex items-center">
                                <i className="fa-solid fa-fire-flame-curved mr-1 text-xl "></i>
                                <p>{rcp.calories} Calories.</p>
                            </div>
                        </div>


                        <div className="card-actions ">
                            <button onClick={()=>new_addRecipeToQueue_props(rcp)} className="btn bg-green-400 rounded-full px-8 text-lg text-gray-800 mt-6 font-medium">Want to Cook</button>
                        </div>
                    </div>
                </div>))
            }
            </div>
           
        </div>
    );
};

PropTypes.Recipes = {
    recipes: PropTypes.array.isRequired,
    new_addRecipeToQueue_props: PropTypes.func.isRequired,
};
export default Recipes;