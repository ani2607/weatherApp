import PropTypes from "prop-types";
import ForecastUi from "./ForecastUi";
import { useState, useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import ClockLoader from "react-spinners/ClockLoader";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Forecast = ({ enteredCity, clicked}) => {
  const [foreCastData, setForeCastData] = useState(null);
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
        else{

          setForeCastData(data);
        }
      } catch (error) {
        setErrorText(true);
      }
    };

    if (clicked) {
      if (enteredCity.length === 0) {
        setEmpty(true);
      } else fetchData();
    }

    
  }, [clicked]);

  let data = null;
  if (foreCastData) {
    // console.log(foreCastData);
    data = foreCastData.forecast.forecastday;
    // console.log(typeof(data[0].date));
    // console.log(data);
  }

  return (
    <>
      {empty && <p>Please enter the city name</p>}
      {errorText && <p>Please enter the right city name</p>}
      {(!empty && !errorText && foreCastData) == null ? (
        <ClockLoader
          loading={true}
          size={250}
          color="white"
          aria-label="Loading Spinner"
        />
      ) : (
        <>
          {!empty && !errorText && (
            <h1 className="text-center text-5xl mb-8 font-bold ">
              Weather Forecast
            </h1>
          )}
          {foreCastData && !errorText && (
            <h2 className="flex mt-3 mb-10 gap-x-2 text-2xl items-center justify-center">
              <ImLocation2 />
              {`${foreCastData.location.name}, ${foreCastData.location.region}, ${foreCastData.location.country}`}
            </h2>
          )}
          <div className="flex justify-center items-center gap-x-8 b">
            {foreCastData &&
              data.map((value, key) => {
                return (
                  <ForecastUi
                    
                    key={key}
                    date={value.date}
                    day={value.day}
                    timeZone={foreCastData.location.tz_id}
                  />
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Forecast;

Forecast.propTypes = {
  enteredCity: PropTypes.string,
  clicked: PropTypes.bool,
 
};