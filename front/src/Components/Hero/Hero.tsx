import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Movie } from "../../assets/interface";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dark-tan-drill-hose.cyclic.app/api/movies");
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // console.log(movies)
  return (
    <div className="bg-red-00 ">
      <Navbar />
      <div className="w-full">
        <img
          src="https://www.livelaw.in/h-upload/2022/05/24/1500x900_419103-kgfcabs1649318906810.jpg"
          alt=""
          className="h-[700px] w-full object-cover absolute -z-10 opacity-40"
        />
        <div className="flex items-center justify-around py-10 px-[5%]">
          <div className="text tracking-tighter">
            <p className="font-bold text-blue-500 text-[55px]">
              BEST WAY OF <br />
              ENTERTAINMENT
            </p>
            <p className="font-semibold text-white text-[30px]">
              MOVIES AS YOU DEMAND AT USD
            </p>
            <p className="font-semibold text-amber-300 text-[30px]">
              10 /MONTH
            </p>
          </div>
          <div className="image relative">
            <img
              src={movies[0]?.image}
              alt="hero"
              className="h-[600px] w-[450px] object-cover rounded-[10px] "
            />
            <button className="bg-gradient-to-r from-blue-500 to-blue-800 h-[50px] w-[170px] rounded-full text-white text-center font-semibold relative left-[30%] -top-6">
              WATCH NOW
            </button>

            <div className="hero-arrow-for">
              <IoIosArrowForward color="blue" size={40} />
            </div>
            <div className="hero-arrow-back">
              <IoIosArrowBack color="blue" size={40} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
