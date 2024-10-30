


const Header = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
            {/* Logo */}
            <h1 className="text-gray-800 font-bold text-3xl ">Chef&apos;s Table</h1>
            {/* menu start */}
            <ul className="flex gap-6 text-gray-600 font-semibold text-base">
                <li><a href="">Home</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Search</a></li>
            </ul>
            {/* menu end */}
            <div className="flex flex-row justify-between items-center gap-4">
                {/* search */}
                <div className="flex justify-center items-center relative ">
                    <i className="fa-solid fa-magnifying-glass absolute left-6 text-gray-900 text-2xl"></i>
                    <input
                        className="py-4 px-16  bg-gray-100 rounded-full placeholder-gray-800 outline-none w-full"
                        type="text"
                        placeholder="Search for recipes"
                    />
                </div>

                {/* search icon */}
                <div className="bg-green-400 flex items-center justify-center rounded-full w-12 h-12">
                    <i className="fa-regular fa-user text-2xl"></i>
                </div>
            </div>
        </div>


    );
};

export default Header;

