import {   useEffect, useState } from "react";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast/Forecast";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import Footer from "./components/Footer"


function App() {



  const [weather, setWeather] = useState(false); // state for showing weather component
  const [forecast, setForecast] = useState(false); // state for showing forecast component
  const [city,setCity] = useState(''); // state for input 
  const [loading , setLoading] = useState(false);

 

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 5000);
  },[])

  const showWeather = () => {
    // console.log(weather)
    setWeather((prev) => !prev);
    // setWeather(true)
  };

  const showForecast = () => {
    setForecast((prev) => !prev);
  };


  return (
    <>
    {loading ? (<ClimbingBoxLoader  color="#510a66" size={30} style={{"display":"flex"}}/> )


          : 

    <div className="flex flex-col gap-y-[85px] justify-center items-center ">
      <h1 className="text-white text-5xl italic bold mt-12">WEATHER APP</h1>
      <div className="uppper flex flex-row gap-5 -mt-6 ">
        <input
          type="text"
          required
          value={city}
        
          onChange={(e)=>{
            setCity(e.target.value); 
          }}
          // onClick={cityName}
          placeholder="Enter your city name"
          className="outline-none p-4 
			rounded-full w-[300px] bg-gray-900
			 text-white text-xl
			 border border-indigo-950
			"
        />
        {/* <button
          onClick={toggleMic}
          className="mic bg-gradient-to-r from-purple-950 from-20% via-purple-900 via-60% to-purple-800 to-80%  rounded-full h-14 w-14 text-center p-3"
        >
          {click && <BsFillMicFill color="black" size="30px" />}

          {!click && <BsFillMicMuteFill color="black" size="30px" />}
        </button> */}

        <button
          onClick={showWeather}
          className="bg-gradient-to-r from-purple-950 from-20% via-purple-900 via-60% to-purple-800 to-80% text-white w-[200px] rounded-full text-lg"
        >
          Get Weather
        </button>

        <button
          onClick={showForecast}
          className="bg-gradient-to-r from-purple-950 from-20% via-purple-900 via-60% to-purple-800 to-80% text-white w-[200px] rounded-full text-lg"
        >
          Show Forecast
        </button>
      </div>

      <div className="lower text-white text-xl">


        
        
        {weather && <Weather enteredCity={city}  clicked = {weather} />}
        <br />
        {forecast && <Forecast enteredCity={city}  clicked = {forecast} />}
        
      </div>


      <footer className="text-white p-2 text-xl">
      <Footer/>
      </footer>
    </div>
    }
    </>
  );
}

export default App;