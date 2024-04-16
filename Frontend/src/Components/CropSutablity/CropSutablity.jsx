import React from 'react';
import { useState } from 'react';
import { useRecoilState } from "recoil";
import { latitude, longitude } from '../../store/atom/lat_lon';

const CropSutablity = () => {
    const [soilType, setSoilType] = useState('');
    const [temperature, setTemperature] = useState(0); // Default temperature
    const [latitudeValue, setLatitude] = useRecoilState(latitude);
    const [longitudeValue, setLongitude] = useRecoilState(longitude);

    const handleTemperatureChange = (e) => {
        setTemperature(parseInt(e.target.value));
    };

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the form data to your backend or perform any other action
        console.log('Form submitted with data:', { soilType, temperature, latitudeValue, longitudeValue });
        // Reset form fields
        // setSoilType('');
        // setTemperature(25); // Reset temperature to default
    };

    return (
        <div className='m-5'>
            <h2 className="text-center">Enter Land Details</h2>
            <form onSubmit={handleSubmit}>
                <div className='m-auto'>
                    <label>Soil Type:</label>
                    <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
                        <option value="">Select Soil Type</option>
                        <option value="Sandy">Sandy</option>
                        <option value="Clay">Clay</option>
                        <option value="Loam">Loam</option>
                        <option value="Peat">Peat</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div>
                    <label>Temperature: {temperature}°C</label>
                    <input
                        type="range"
                        min="-10"
                        max="50"
                        value={temperature}
                        onChange={handleTemperatureChange}
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <button type="button" onClick={getLocation}>Get Location</button>
                </div>
                <button type="submit">Submit</button>
            </form>
            <h1>
                Soil type is {soilType}
                <br />
                location :- latitude id  {latitudeValue}  longitude id {longitudeValue}  
                <br/>
                Temperature is {temperature}
            </h1>
        </div>
    );
};

export default CropSutablity;
