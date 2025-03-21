import fetch from 'node-fetch';

export const handler = async function() {
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  const city = 'Halifax'; 

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    );
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        city: data.name,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching weather data' })
    };
  }
};