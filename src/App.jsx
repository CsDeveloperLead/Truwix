import logo from "./assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

export default function App() {
  return (
    <div className="w-full px-10 md:px-0 min-h-screen flex flex-col items-center justify-around bg-gradient-to-b from-black to-[#000024] text-white">
      <div className="w-[250px] md:w-[400px] h-[100px] md:h-[200px]">
        <img src={logo} alt="" />
      </div>
      <div className=" w-full md:w-2/3 text-center flex flex-col gap-6 items-center">
        <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400">
          We believe creativity can solve almost any problem.
        </h1>
        <p className="text-[#9ca3af] text-xl">-George Lois</p>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl text-white text-center font-semibold">
          Our website is under construction, but our ideas never stop.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 md:gap-20">
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
