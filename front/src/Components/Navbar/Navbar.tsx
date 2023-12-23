import { TbUser } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between my-5 px-[15%]">
      <div className="logo">
        <span className="font-bold text-sky-500 text-xl">MOVIE</span> <br />
        <span className="left-7 relative">World</span>
      </div>
      <div className="h-10 w-[550px] rounded-[10px] flex bg-white items-center">
        <CiSearch className="h-6 w-[50px] text-black" />
        <input
          type="text"
          name=""
          id=""
          className="h-10 w-[435px] rounded-[10px]"
          placeholder="Search movies"
        />
        <form className="">
          <select
            name="items"
            id="items"
            className="h-8 w-[60px] rounded-[6px] bg-slate-300 outline-none  text-black"
          >
            <option value="volvo">All</option>
            <option value="saab">Games</option>
            <option value="opel">Action</option>
          </select>
        </form>
      </div>
      <span className="font-semibold text-amber-400">Get Pro</span>
      <span>Movies</span>
      <span>Watch-list</span>
      <form className="px-3">
        <select
          name="lang"
          id="lang"
          className="h-10 w-[60px] rounded-full outline-none bg-gradient-to-r from-blue-500 to-blue-800 px-2"
        >
          <option value="volvo">EN</option>
          <option value="saab">BN</option>
          <option value="opel">IN</option>
        </select>
      </form>

      <button>
        <TbUser />
      </button>
    </div>
  );
};

export default Navbar;
