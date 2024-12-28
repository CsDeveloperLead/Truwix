import logo from "./assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

export default function App() {
  return (
    <div className="w-full  px-10 md:px-0 min-h-screen flex flex-col backdrop-blur-md  bg-opacity-10 items-center justify-evenly bg-gradient-to-b from-[#79D7BE] to-[#2e5077] text-white">
      <div className="w-[250px] md:w-[400px] h-[100px] md:h-[200px]">
        <img src={logo} alt="" />
      </div>
      <div className=" w-full md:w-2/3 text-center flex flex-col gap-2 items-center">
        <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#407089] via-[#001A6E] to-[#407089]">
          We believe creativity can solve almost any problem.
        </h1>
        <p className="text-[#023047] font-bold text-3xl">-George Lois</p>
      </div>
      <div className="flex justify-center items-center ">
        <h1 className="w-full md:w-2/3  text-2xl md:text-3xl text-white text-center font-bold">
          Our website is under construction, but our ideas never stop.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 md:gap-10">
        <button className="bg-[#1a1a3d] py-3 rounded-full w-[150px] hover:bg-[#3c3c83] flex gap-4 justify-center items-center">
          <span>
            <FaInstagram />
          </span>
          Instagram
        </button>
        <button className="bg-[#1a1a3d] py-3 rounded-full w-[150px] hover:bg-[#3c3c83] flex gap-4 justify-center items-center">
          <span>
            <FiFacebook />
          </span>
          Facebook
        </button>
      </div>
    </div>
  );
}
