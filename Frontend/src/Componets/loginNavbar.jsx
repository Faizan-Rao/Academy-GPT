import logo from "../assets/Image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-black mt-5 md:mt-0 font-urbanist">
        <nav>
          <div className="flex justify-between py-1 my-auto xl:py-1 px-3 xl:px-10">
            <div className="flex space-x-1 md:space-x-10 lg:space-x-12 xl:space-x-20">
              <Link to={"/"}>
                <img
                  className="w-16 h-6 my-auto mt-2 xl:mt-3 md:w-28 xl:w-36 xl:h-9"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="text-white text-xs lg:text-base my-2 flex space-x-2 lg:space-x-4">
              <button className="lg:p-2 py-1 px-2 bg-primary whitespace-nowrap  rounded-md">
                <Link to={"/loginpage"}> Login</Link>
              </button>
              <button className="lg:p-2 px-2   whitespace-nowrap rounded-md">
                <Link to={"/signuppages"}>Sign Up</Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
