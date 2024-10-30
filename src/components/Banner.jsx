


const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10"
        style={{
            backgroundImage: 'url(https://i.ibb.co/3kYtv41/banner.png)',
        }}>
            <div className="w-full mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
                <h1 className="font-bold text-white md:text-[3.25rem]">Where the best Chef&apos;s cooked!</h1>
                <p className="text-lg text-white font-normal">
                    Welcome to Chef&apos;s Table, where culinary excellence meets a cozy ambiance. 
                    Join us for an unforgettable dining experience!
                </p>
                <div className="flex gap-4 text-xl font-semibold space-x-3">
                    <button className="btn bg-green-400 text-slate-900  rounded-full  border-none">Book a Table</button>
                    <button className="btn btn-outline bg-white hover:bg-green-400 bg-none  rounded-full border-none ">View Menu</button>

                </div>

            </div>
        
           
        </div>
    );
};

export default Banner;