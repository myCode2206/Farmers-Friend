
# Farmer-Friend

Welcome to **Farmer-Friend**! This project is designed to help farmers optimize their agricultural practices by providing insights into crop suitability based on land details and climate conditions. It also includes a community forum and chat for farmers to share knowledge and experiences, weather functionality using the OpenWeather API, and an agricultural news section.


## Features

-   **Crop Suitability**: Determine the best crops to grow based on user land details and climate conditions.
-   **Community Forum and Chat**: Engage with other farmers in a dedicated forum and chat to share knowledge, ask questions, and discuss experiences.
-   **Weather Functionality**: Stay informed about the latest weather forecasts using the OpenWeather API.
-   **Agricultural News**: Stay up-to-date with the latest agricultural and farming news to remain informed about industry trends and developments.

## Technology Stack

The project is built using the MERN stack:

-   **MongoDB**: NoSQL database to store and manage data efficiently.
-   **Express**: Web framework to handle server-side logic and routing.
-   **React**: Frontend framework to build a modern, interactive user interface.
-   **Node.js**: Runtime environment to execute server-side code.
- -   **Socket.IO**: Real-time bidirectional event-based communication for community chat functionality.

## Setup and Installation

To set up the project locally, follow these steps:

1.  Clone the repository:
    
    bashCopy code
    
    `git clone https://github.com/mukul-singh-16/Farmers-Friend.git` 
    
2.  Change directory to the project folder:
    
    bashCopy code
    
    `cd Farmers-Friend` 
    

### Frontend Setup:

3.  Navigate to the `frontend` folder:
    
    bashCopy code
    
    `cd frontend` 
    
4.  Install dependencies:
    
    bashCopy code
    
    `npm install` 
    
5.  Start the development server:
    
    bashCopy code
    
    `npm run dev` 
    

The frontend should now be running on your local machine.

### Backend Setup:

6.  Navigate to the `backend` folder:
    
    bashCopy code
    
    `cd ../backend` 
    
7.  Install dependencies:
    
    bashCopy code
    
    `npm install` 
    
8.  Configure environment variables:
    
    -   Create a `.env` file in the `backend` directory.
    -   Add the following variables:
        -   `DB_URI` with the MongoDB URI.
        -   `OPENWEATHER_API_KEY` with your OpenWeather API key.
        -   `NEWS_API_KEY` with your News API key.
9.  Start the backend server:
    
    bashCopy code
    
    `npm start` 
    
10.  To start the chat server, run the following command:
    
    bashCopy code
    
    `node server.js` 
    

The backend server and chat server should now be running on your local machine.


## Usage

-   Navigate to the application in your browser.
-   Create an account or log in to start using the application.
-   Use the Crop Suitability feature to analyze your land and climate data.
-   Participate in the Community Forum and Chat to share and gain knowledge.
-   Stay updated with the latest agricultural news in the News section.
-   Check the latest weather forecasts using the Weather Functionality



## API Integration

-   **OpenWeather API**: This project uses the OpenWeather API for weather-related data. Make sure you obtain an API key from the [OpenWeather website](https://openweathermap.org/api) and set it in your server's `.env` file.
-   **News API**: The project uses the News API to fetch the latest agricultural news. Obtain an API key from the [News API website](https://newsapi.org/s/india-news-api) and set it in your server's `.env` file.



## Contact

If you have any questions or feedback, feel free to reach out to the project maintainers at guptarajat2206@gmail.com.

----------

Let me know if there are any additional specific details or sections you'd like me to include!
