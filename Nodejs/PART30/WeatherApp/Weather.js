import { get } from 'http';
import readline from 'readline/promises';

const API_KEY = '7f3179385007b631b72722fdc43f5f89';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



const getWeather = async  (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

   try {
   const response = await fetch(url);
  if(!response.ok) {
       throw new Error('City not found');
     }

     const weatherData = await response.json();
  console.log(weatherData);
     // Displaying the weather information

     console.log('\nWeather INformation : ');
     console.log(`City: ${weatherData.name}`);
     console.log(`Temperature: ${weatherData.main.temp}°C`);
      console.log(`Weather: ${weatherData.weather[0].description}`);
      console.log(`Humidity: ${weatherData.main.humidity}%`);
      console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
      console.log(`Visibility: ${weatherData.visibility / 1000} km`);

   }  catch (error) {
     console.error('Error fetching weather data:', error);
   }


}


const city = await rl.question('Enter the city name: ');

await getWeather(city);
rl.close();














//-------------using fetch-----------------------
// import { get } from 'http';
// import readline from 'readline/promises';

// // Node 18+ has built-in fetch
// const API_KEY = '7f3179385007b631b72722fdc43f5f89';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the city name: ').then(city => {
//   const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('City not found');
//       }
//       return response.json();
//     })
//     .then(weatherData => {
//       console.log('\nWeather Information:');
//       console.log(`City: ${weatherData.name}`);
//       console.log(`Temperature: ${weatherData.main.temp}°C`);
//       console.log(`Weather: ${weatherData.weather[0].description}`);
//       console.log(`Humidity: ${weatherData.main.humidity}%`);
//       console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
//       console.log(`Visibility: ${weatherData.visibility / 1000} km`);
//     })
//     .catch(error => {
//       console.error('Error fetching weather data:', error.message);
//     })
//     .finally(() => {
//       rl.close();
//     });
// });



