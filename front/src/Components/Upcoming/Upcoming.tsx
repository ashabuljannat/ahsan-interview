import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Movie } from "../../assets/interface";
import { useEffect, useState } from "react";

const Upcoming = () => {
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

  return (
    <div className="text-center my-10 bg-red-00">
      <div className="text">
        <p className="font-semibold text-blue-500 text-[35px]  tracking-tighter">
          UPCOMING
          <span className=" text-amber-300"> MOVIES</span>
        </p>
        <p className=" text-white mt-5 mb-10">
          We constantly offers new movies
        </p>
      </div>

      <div className="bg-red-00">
        <Swiper
          slidesPerView={3}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            modifier: 3,
            stretch: 30,
          }}
          modules={[EffectCoverflow]}
        >
          {movies?.map((movie) => (
            // <li key={movie.id}>{movie.title}</li>
            <SwiperSlide key={movie.title}>
              <img src={movie.image} alt={movie.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Upcoming;
