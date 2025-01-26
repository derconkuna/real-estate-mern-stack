import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className=" flex items-center justify-between bg-gray-200 px-4 sm:px-[7vw] py-4 shadow-md ">
      <Link
        to="/"
        className=" text-3xl font-bold font-sans flex flex-wrap gap-0"
      >
        <span className=" text-gray-600">Nkuna</span>
        <span className=" text-gray-800">Estate</span>
      </Link>

      <form className=" flex items-center bg-slate-100 px-2 rounded-md py-[7px] ">
        <input
          type="text"
          placeholder=" Search "
          className=" bg-transparent focus:outline-none  w-36 sm:w-64 text-gray-600"
        />
        <button>
          <FaSearch />
        </button>
      </form>

      <div className=" flex items-center gap-6 text-lg text-gray-600 font-sans">
        <Link to="/" className=" hidden sm:inline-block">
          <p>Home</p>
        </Link>
        <Link to="/about" className=" hidden sm:inline-block">
          <p>About</p>
        </Link>
        <Link to="/sign-up">SignIn</Link>
      </div>
    </header>
  );
};

export default Header;
