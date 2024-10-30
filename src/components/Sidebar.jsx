
import PropTypes from 'prop-types';
const Sidebar = ({ recipeQueue, handleDeleteRecipe, doneRecipe,calculateTimeCal,totalTime,totalCal }) => {
    return (
        <div className="md:w-2/5 border-2 rounded-xl text-gray-600 p-2 bg-base-100">


            {/* Want to cook table */}

            <div className="overflow-x-auto">
                <h2 className='border-b mx-auto font-semibold text-2xl text-gray-800 text-center p-2 '> Want to Cook: {recipeQueue.length}</h2>
                <table className="table ">
                    {/* head */}

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                    <tbody >
                        {recipeQueue.map((recipe, index) => (
                            <tr key={index} className="hover">
                                <th>{index + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                                <td className='mb-5'>
                                    <button onClick={() => {handleDeleteRecipe(recipe.recipe_id); calculateTimeCal(recipe.preparing_time,recipe.calories)}} className="btn btn-sm bg-green-400 rounded-full px-2 py-2  md:px-6  text-gray-800  font-medium ">Preparing</button>

                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Currently Cooking Table */}


            <div className="overflow-x-auto mt-10">
                <h2 className='border-b mx-auto font-semibold text-2xl text-gray-800 text-center p-2 '> Currently Cooking: {recipeQueue.length}</h2>
                <table className="table ">
                    {/* head */}

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                    <tbody >
                        {doneRecipe.map((recipe, index) => (
                            <tr key={index} className="hover">
                                <th>{index + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                            </tr>


                        ))}

                        <tr className='border-none '>
                        <th></th>
                        <td></td>
                        <td><i className="fa-regular fa-clock mr-2 text-lg"></i>Total Time = {totalTime} Munites</td>
                        <td><i className="fa-solid fa-fire-flame-curved mr-1 text-lg "></i>Total Calories = {totalCal} Cal </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array.isRequired,
    handleDeleteRecipe: PropTypes.func.isRequired,
    calculateTimeCal:PropTypes.func.isRequired,
    doneRecipe: PropTypes.array.isRequired,
    totalTime:PropTypes.array.isRequired,
    totalCal:PropTypes.array.isRequired,


};
export default Sidebar;