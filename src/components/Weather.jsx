import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ImLocation2 } from "react-icons/im";
import ClockLoader from "react-spinners/ClockLoader";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;


const Weather = ({ enteredCity, clicked}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [empty, setEmpty] = useState(false);

  const [errorText, setErrorText] = useState(false);

  
    
  

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${enteredCity}&days=3`);
        
        const data = await response.json();

        // Update the state with the API response data
        // console.log(data);
        if(response.status == 400){
          setErrorText(true);
        }
        

        setWeatherData(data);
      } catch (error) {
        setErrorText(true);
        // console.error(error);
      }
    };

    // Fetch data when clicked prop changes
    if (clicked) {
      if (enteredCity.length === 0) {
        setEmpty(true);
      } else fetchData();
    }
   
  }, [clicked]);

  return (
    <>
      {empty && <p>Please enter the city name</p>}
      {errorText && <p>Please enter the right city name</p>}

      {/* loader when weather hasn't come */}
      {!empty && !errorText && !weatherData && (
        <ClockLoader
          loading={true}
          size={250}
          color="white"
          aria-label="Loading Spinner"
        />
      )}

      {/*  component when weather  data is available */}
      {!empty && !errorText && weatherData && (
        <div className="w-[700px] h-[500px] z-10 bg-gradient-to-b from-purple-950 from-20% via-purple-900 via-60% to-purple-800 to-80% rounded-3xl">
          <h1 className="text-center text-4xl  font-bold p-4">
            Weather Information
          </h1>

          <hr />

          <h2 className="flex mt-3 gap-x-2 text-2xl items-center justify-center">
            <ImLocation2 />
            {`${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`}
          </h2>

          <div className="flex flex-col gap-y-5 ">
            <div className="upper  flex flex-row justify-around gap-x-8 items-center">
              {/* Temperature starts */}
              <div className="temperature w-[180px]  mt-4  p-4 flex flex-col gap-y-2">
                <h2 className="bg-slate-900 w-32  rounded-md p-2  text-neutral-600-700">
                  Temperature
                </h2>
                <h3 className="-ml-2 text-2xl">{`${weatherData.current.temp_c}°C / ${weatherData.current.temp_f}°F`}</h3>
              </div>
              {/* temperature ends */}

              {/* Humidity starts */}
              <div className="humidity w-[180px]  mt-4 mr-2 p-4 flex flex-col gap-y-2  ">
                <h2 className="bg-slate-900 rounded-md p-2  text-center text-neutral-600-700">
                  Humidity
                </h2>
                <h3 className="text-white text-2xl text-center ">
                  {weatherData.current.humidity}%
                </h3>
              </div>
              {/* humidity ends */}
            </div>

            <div className="lower  flex flex-row justify-around gap-x-8 items-center ">
              {/* windspeed */}
              <div className="windspeed w-[180px] mt-4  p-4 flex flex-col gap-y-2">
                <h2 className="bg-slate-900 w-32 text-center rounded-md p-2  text-neutral-600-700">
                  WindSpeed
                </h2>
                <h3 className=" text-2xl text-center -ml-2">{`${weatherData.current.wind_kph}kph / ${weatherData.current.wind_mph}mph`}</h3>
              </div>
              {/* windspeed ends */}

              {/* icon and condition */}
              <div className="icons  w-[190px] flex flex-col justify-center items-center  ">
                <h2 className="bg-slate-900    w-32 text-center  rounded-md p-2  text-neutral-600-700">
                  Weather Description
                </h2>

                <span className="flex -mt-2 flex-row gap-x-1 items-center justify-center">
                  <p className="">{weatherData.current.condition.text}</p>
                  <img
                    className="w-24"
                    src={weatherData.current.condition.icon}
                    alt="weather-image"
                  />
                </span>
              </div>
              {/* icons and condition ends */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Weather.propTypes = {
  enteredCity: PropTypes.string,
  clicked: PropTypes.bool,

};

export default Weather;