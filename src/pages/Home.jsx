import { useState, useEffect } from 'react';

function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:8888/.netlify/functions/getWeather'
        : '/.netlify/functions/getWeather';

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      {weather && (
        <div className="weather-info">
          <h3>Weather in {weather.city}</h3>
          <p>Temp: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      )}
      <div className="home-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img 
                src="/profile_photo.jpg" 
                alt="Profile" 
                className="profile-image" 
              />
            </div>
            <div className="col-md-8">
              <h1>Welcome to My Portfolio</h1>
              <p className="lead">Hi, I'm Nithin Nedumparambil</p>
              <p className="description">
                I am an Applied Computer Science student interested in leveraging data to solve real world problems. 
                Interested in data science and data analytics roles after graduation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
