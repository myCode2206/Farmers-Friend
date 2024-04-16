import React, { useState, useEffect } from 'react';
import { useRecoilState } from "recoil";
import { latitude, longitude } from '../../store/atom/lat_lon';
import axios from 'axios';

const WeatherReport = () => {
    const [latitudeValue, setLatitude] = useRecoilState(latitude);
    const [longitudeValue, setLongitude] = useRecoilState(longitude);
    const [pastWeatherData, setPastWeatherData] = useState([]);
    const [futureWeatherData, setFutureWeatherData] = useState([]);
    const apiKey = 'c56764243280de48868405397084450d'; // Replace 'your_api_key' with your actual OpenWeatherMap API key

    useEffect(() => {
        // Get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    useEffect(() => {
        // Fetch historical weather data for the past 5 days
        if (latitudeValue !== null && longitudeValue !== null) {
            const currentDate = new Date();
            const pastDates = Array.from({ length: 5 }, (_, i) => {
                const date = new Date();
                date.setDate(currentDate.getDate() - i - 1); // Subtract 1 to exclude today
                return date.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
            });

            const requests = pastDates.map(date => {
                const apiUrl = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${latitudeValue}&lon=${longitudeValue}&dt=${date}&appid=${apiKey}`;
                return axios.get(apiUrl);
            });

            axios.all(requests)
                .then(axios.spread((...responses) => {
                    setPastWeatherData(responses.map(response => response.data));
                }))
                .catch(error => {
                    console.error('Error fetching historical weather data:', error);
                });
        }
    }, [latitudeValue, longitudeValue, apiKey]);

    useEffect(() => {
        // Fetch forecast weather data for the next 5 days
        if (latitudeValue !== null && longitudeValue !== null) {
            const apiUrl = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${latitudeValue}&lon=${longitudeValue}&appid=${apiKey}`;

            axios.get(apiUrl)
                .then(response => {
                    setFutureWeatherData(response.data.daily);
                })
                .catch(error => {
                    console.error('Error fetching forecast weather data:', error);
                });
        }
    }, [latitudeValue, longitudeValue, apiKey]);

    return (
        <div>
            {/* Display past weather data */}
            <h2>Past Weather Data (Last 5 Days)</h2>
            <ul>
                {pastWeatherData.map((data, index) => (
                    <li key={index}>
                        Date: {new Date(data.current.dt * 1000).toLocaleDateString()}<br />
                        Temperature: {data.current.temp}°C<br />
                        Humidity: {data.current.humidity}%
                    </li>
                ))}
            </ul>

            {/* Display future weather data */}
            <h2>Future Weather Forecast (Next 5 Days)</h2>
            <ul>
                {futureWeatherData.map((data, index) => (
                    <li key={index}>
                        Date: {new Date(data.dt * 1000).toLocaleDateString()}<br />
                        Temperature: {data.temp.day}°C<br />
                        Humidity: {data.humidity}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherReport;
