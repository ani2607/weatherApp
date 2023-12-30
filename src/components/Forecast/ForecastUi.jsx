import PropTypes from "prop-types";

const ForecastUi = ({ date, day, timeZone }) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const dateDisplayed = date.slice(8);

  return (
    <div className="bg-gradient-to-r from-purple-950 from-20% via-purple-900 via-60% to-purple-800 to-80% p-6 w-[202px] h-[700px] flex flex-col flex-wrap text-center rounded-full gap-y-3">
      {/* date */}
      <div className="date text-xl">{`${dateDisplayed}-${month}-${year}`}</div>
      {/* icon and condition */}
      <div className="icon flex justify-center items-center p-2 mb-4 mt-2">
        <img src={`${day.condition.icon}`} alt="image" />
        <p>{day.condition.text}</p>
      </div>

      {/* conditions1 */}
      <div className="condition1 flex flex-col gap-y-3">
        <div className="temp">
          <p className="text-zinc-400 mb-1">Temperature</p>
          <p className="text-sm">{`${day.avgtemp_c}°C / ${day.avgtemp_f}°F`}</p>
        </div>

        <div className="humidity ">
          <p>
            {" "}
            <span className="text-zinc-400">Humidity </span> {day.avghumidity}%
          </p>
        </div>

        <div className="windspeed">
          <p className="text-zinc-400 mb-1">Wind Speed</p>
          <p className="text-sm">{`${day.avgtemp_c}°C / ${day.avgtemp_f}°F`}</p>
        </div>

        <div className="maxtemp">
          <p className="text-zinc-400 mb-1">Max Temperature</p>
          <p className="text-sm">{`${day.maxtemp_c}°C / ${day.maxtemp_f}°F`}</p>
        </div>
        <div className="mintemp">
          <p className="text-zinc-400 mb-1">Min Temperature</p>
          <p className="text-sm">{`${day.mintemp_c}°C / ${day.mintemp_f}°F`}</p>
        </div>
        <div className="precipitation">
          <p className="text-zinc-400 mb-1">Precipitation</p>
          <p className="text-sm">
            {`${day.totalprecip_mm}mm / ${day.totalprecip_in}in`}
          </p>
        </div>

        <div className="timeZone ">
          <p>
            {" "}
            <span className="text-zinc-400">TimeZone </span> <br /> {timeZone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForecastUi;

ForecastUi.propTypes = {
  date: PropTypes.string,
  day: PropTypes.object,
  timeZone: PropTypes.string,
};

// Forecast.propTypes = {
//     enteredCity: PropTypes.string,
//     clicked: PropTypes.bool,
//   };