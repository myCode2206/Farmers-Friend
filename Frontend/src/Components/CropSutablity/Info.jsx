import React, { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { sidbarrendervalue } from "../../store/atom/sidebarRender";

const Info = () => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [soilType, setSoilType] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const setValue = useSetRecoilState(sidbarrendervalue);
  function fun() {
    setValue("CropsSutablity");
  }
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        alert("Failed to fetch location: " + error.message);
      }
    );
  };

  const styles = {
    formContainer: {
      display: "flex",
      height: "80vh",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    form: {
      border: "2px solid black",
      padding: "10px",
      width: "500px",
    },
  };

  const resetForm = () => {
    setName("");
    setArea("");
    setSoilType("");
    setLatitude(null);
    setLongitude(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/landData", {
        name,
        area,
        soilType,
        latitude,
        longitude,
      });
      resetForm();
      fun();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Add Land Information</h2>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="inpname" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inpname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label">
            Area:
          </label>
          <input
            type="text"
            name="area"
            className="form-control"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="soilType" className="form-label">
            Soil Type:
          </label>
          <select
            name="soilType"
            className="form-control"
            id="soilType"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          >
            <option value="">Select Soil Type</option>
            <option value="Sandy">Sandy</option>
            <option value="Clay">Clay</option>
            <option value="Loam">Loam</option>
            <option value="Peat">Peat</option>
          </select>
        </div>
        <button
          type="button"
          onClick={getLocation}
          className="btn btn-outline-success mr-2"
        >
          Get Location
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Info;
