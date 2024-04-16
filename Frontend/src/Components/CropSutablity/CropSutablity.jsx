import { IoAddCircleOutline } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { sidbarrendervalue } from "../../store/atom/sidebarRender";
import { useEffect, useState } from "react";
import axios from "axios";
import Landcard from "./Landcard";

const CropSutablity = () => {
  const setValue = useSetRecoilState(sidbarrendervalue);
  const [landdata,setlanddata]= useState([]);
  function fun() {
    setValue("info");
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/landData');
        console.log(response.data);
        setlanddata(response.data)


      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); 


  return (
    <>
    <div className="d-flex flex-wrap justify-content-center mt-2">
      <button
        onClick={fun}
        className="btn btn-success d-flex align-items-center"
        style={{ gap: "0.5rem" }}>
        ADD DATA
        <IoAddCircleOutline size={20} />
      </button>
    </div>

      <div className="d-flex flex-wrap ">
        {landdata.map((data, index) => (
        <Landcard key={index} data={data} />
        ))}
      </div>

      
    </>
    
  );
};

export default CropSutablity;
