import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { Movie } from "../../assets/interface";
import { IoIosArrowForward, IoIosStarOutline } from "react-icons/io";
import Footer from "../Footer/Footer";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dark-tan-drill-hose.cyclic.app/api/movies/${id}`);
        const data = await response.json();
        setMovie(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="py-10 px-[15%] flex text-white">
        {movie && (
          <>
            <div className="left">
              <img
                src={movie.image}
                alt={movie.title}
                className="h-[400px] w-[300px] rounded-xl object-cover"
              />
              <p className="text-lg font-[500] mt-5">
                EPISODES <span className="text-amber-400">121</span>
              </p>
              <p className="text-lg font-[500] mt-3">
                VIDEOS <span className="text-amber-400">24</span>
              </p>
              <p className="text-lg font-[500] mt-3">
                PHOTOS <span className="text-amber-400">85</span>
              </p>
            </div>
            <div className="right ml-5">
              <img
                src={movie.image}
                alt={movie.title}
                className="h-[400px] w-[900px] rounded-xl object-cover"
              />
              <div className="border-l border-blue-500 pl-5">
                <p className="text-lg font-medium mt-5 w-[900px] leading-relaxed ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur vel dignissimos recusandae aliquam dicta cumque
                  doloremque pariatur perferendis dolorem odit in unde veniam
                  iure cum necessitatibus, velit quisquam iste omnis
                  repellendus? Necessitatibus, laborum. Quam deleniti in ducimus
                  repellendus cupiditate expedita praesentium inventore enim
                  dicta delectus voluptate omnis nemo saepe ipsa architecto
                  distinctio molestiae sunt ratione magni dolorem eveniet
                  libero, quos quibusdam consequuntur. Assumenda, iure ipsum
                  iste incidunt doloribus
                </p>
                <p className="text-lg font-[500] mt-3 text-blue-400">
                  Creators:
                  <span className="text-white"> {movie.creator.director}</span>
                </p>
                <p className="text-lg font-[500] mt-2 text-blue-500">
                  Stars:
                  <span className="text-white"> {movie.creator.director}</span>
                </p>
                <p className="font-[500] mt-2 flex items-center gap-1">
                  ⭐ {movie.ratings.imdb}(407) <IoIosStarOutline color="aqua" />
                  Rate Now
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="py-10 px-[15%] text-white">
        <div className="font-bold text-[25px] flex gap-1 mb-8">
          TOP
          <span className=" text-blue-500">CAST</span>
          <div className="cast ml-2">
            <IoIosArrowForward color="blue" />
          </div>
        </div>
        {movie &&
          // <div className="flex flex-wrap gap-5">
          movie.cast.actors.map((cast,index) => (
            <div className=" h-[80px] w-[300px] flex items-center ml-3 bg-red-30 mb-5" key={index}>
              <img
                src={cast.image}
                alt={cast.actor}
                className="h-[50px] w-[50px] rounded-full object-cover border border-blue-500"
              />
              <div className="ml-3">
                <p className="font-semibold text-[17px]">{cast.character}</p>
                <p>{cast.actor}</p>
                <p>9 Episodes, 2023</p>
              </div>
            </div>
          ))}
      </div>
      <Footer/>
    </>
  );
};

export default Details;
