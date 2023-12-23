import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="text-slate-300 py-10 px-[15%] mt-10">
      <div className=" flex justify-between mb-2">
        <div className="">
          <p className="font-bold text-white mb-3">UPCOMING MOVIES</p>
          <p>jawan</p>
          <p>barbie</p>
          <p>nics</p>
        </div>
        <div className="">
          <p className="font-bold text-white mb-3">ADDITIONAL PAGES</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="">
          <div className="logo font-bold text-white mb-3">
            <span className="font-bold text-sky-600 text-xl">MOVIE</span> <br />
            <span className="left-7 relative">World</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          </p>
          <p className="font-bold text-blue-500 flex mt-4">
            <BsFacebook className="h-6 w-6 mr-3" />
            <AiFillTwitterCircle className="h-6 w-6 mr-3" />
            <TiSocialLinkedinCircular className="h-7 w-7 mr-3" />
          </p>
        </div>
      </div>
      <p className="text-center mt-5">Copyright 2023</p>
    </div>
  );
};

export default Footer;
