import { HiOutlinePlayCircle } from "react-icons/hi2";

const Watch = () => {
  return (
    <div className="w-full mt-10 text-white">
      <img
        src="https://www.livelaw.in/h-upload/2022/05/24/1500x900_419103-kgfcabs1649318906810.jpg"
        alt=""
        className="h-[500px] w-full object-cover absolute -z-10 opacity-20"
      />
      <div className="flex items-center justify-around py-10 px-[5%]">
        <div className="tracking-tighter">
          <p className="font-semibold text-[35px]  tracking-tighter">
            ENJOY IT
            <span className=" text-amber-300"> MOVIES</span>
          </p>
          <p className=" mt-5 mb-10">
            We constantly offers new movies
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-800 h-[50px] w-[170px] rounded-full text-center font-semibold">
            WATCH NOW
          </button>
        </div>
        <div className="image relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdCi9BoHgV-Ym5aEeIBpS1hT87t-_cdeESA&usqp=CAU"
            alt="hero"
            className="h-[400px] w-[450px] object-cover rounded-[10px] "
          />
          <div className="h-[60px] w-[450px] absolute top-[40%] z-10 bg-black opacity-40"></div>
          <div className="h-[60px] w-[450px] absolute top-[40%] z-10 flex items-center justify-center">
            <HiOutlinePlayCircle className="h-10 w-[50px] mr-2" />
            <span className="font-bold text-[25px] ">TRAILER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
