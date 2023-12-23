import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdCheckmark,
} from "react-icons/io";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { Movie } from "../../assets/interface";
import { useEffect, useState } from "react";

const WatchList = () => {
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
    <div className="py-10 px-[15%] mt-10">
      <p className="font-bold text-white text-[35px] tracking-tighter mb-7">
        YOUR
        <span className=" text-amber-300"> WATCH-LIST</span>
      </p>
      <div className="bg-red-00">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          scrollbar={{ draggable: true }}
        >
          {movies?.map((movie) => (
            // <li key={movie.id}>{movie.title}</li>
            <SwiperSlide key={movie.title}>
              <img src={movie.image} alt={movie.title} />

              <div className="flex flex-col items-start text-white">
                <p className="font-bold text-[25px] my-3">{movie.title}</p>
                <p>⭐ {movie.ratings.imdb}(407)</p>
                <button className="bg-gradient-to-r from-blue-500 to-blue-800 h-[50px] w-[170px] rounded-full font-semibold flex items-center justify-center gap-1 my-2">
                  <IoMdCheckmark />
                  WATCH LIST
                </button>
                <div className="flex items-center justify-center">
                  <HiOutlinePlayCircle className="h-8 w-8 mr-2" />
                  <span>TRAILER</span>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <IoIosArrowBack />
            </div>
            <div className="swiper-button-next slider-arrow">
              <IoIosArrowForward />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default WatchList;
