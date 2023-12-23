import { FaPlus } from "react-icons/fa6";

const AddedMovies = () => {
  return (
    <div className="py-10 px-[15%] mt-10">
      <p className="font-bold  text-blue-500 text-[35px] tracking-tighter mb-7 text-center">
        MY ADDED
        <span className=" text-amber-300"> MOVIES</span>
      </p>
      <div className="flex gap-5 text-white ">
        <div className="relative">
          <button className="bg-gradient-to-r from-blue-500 to-blue-800 h-[50px] w-[170px] rounded-full font-semibold flex items-center justify-center absolute top-5 right-2">
            EDIT MOVIES
          </button>
          <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg"
            alt=""
          />
        </div>
        <div className="relative">
          <button className="bg-gradient-to-r from-blue-500 to-blue-800 h-[50px] w-[170px] rounded-full font-semibold flex items-center justify-center absolute top-5 right-2">
            EDIT MOVIES
          </button>
          <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg"
            alt=""
          />
        </div>
        <div className="relative">
          <button className="bg-gradient-to-r from-blue-500 to-blue-800 h-[50px] w-[170px] rounded-full font-semibold flex items-center justify-center absolute top-5 right-2">
            EDIT MOVIES
          </button>
          <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg"
            alt=""
          />
        </div>
        <div className="relative flex items-center justify-center bg-stone-800 h-[350px] w-[250px] m-auto rounded-lg border-dashed border-2 border-slate-300">
          <button className="bg-gradient-to-r from-blue-500 to-blue-800 h-[50px] w-[170px] rounded-full font-semibold flex items-center justify-center gap-1">
          <FaPlus />  ADD MOVIE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedMovies;
