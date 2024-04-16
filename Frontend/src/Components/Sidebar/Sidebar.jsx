/* eslint-disable react/prop-types */
import {
  FaHome,
  FaCog,
  FaPoll,
  FaRegEnvelope,
  FaRegFileAlt,
} from "react-icons/fa";

import {sidbarrendervalue} from  "../../store/atom/sidebarRender"

import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const Sidebar = ({ sidebarToggle }) => {
  const setvalue = useSetRecoilState(sidbarrendervalue);
  return (
    <div
      className={`${
        sidebarToggle ? " hidden " : " block "
      }w-64 bg-gray-800 fixed h-full px-4 px-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link href="" className="px-3" onClick={()=>{setvalue("CropsSutablity")}} > 
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
            CropsSutablity
          </Link>
        </li>
      </ul>
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link href="" className="px-3" onClick={()=>{setvalue("news")}} >
            <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegFileAlt>
            News
          </Link>
        </li>
      </ul>
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
        <Link href="" className="px-3" onClick={()=>{setvalue("chat")}} >
            <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2"></FaPoll>
            community
        </Link>
        </li>
      </ul>
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link href="" className="px-3">
            <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegEnvelope>
            Inbox
          </Link>
        </li>
      </ul>
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3">
            <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
            Setting
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
