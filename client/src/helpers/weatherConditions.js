import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import FoggyIcon from "@mui/icons-material/BlurOn"; // Example, replace with the best match

const WeatherConditions = Object.freeze({
  0: WbSunnyIcon, // Clear sky
  1: WbSunnyIcon, // Mainly clear
  2: WbCloudyIcon, // Partly cloudy
  3: WbCloudyIcon, // Overcast
  45: FoggyIcon, // Fog
  48: FoggyIcon, // Depositing rime fog
  51: GrainIcon, // Light drizzle
  53: GrainIcon, // Moderate drizzle
  55: GrainIcon, // Dense drizzle
  56: GrainIcon, // Freezing drizzle: light
  57: GrainIcon, // Freezing drizzle: dense
  61: WbCloudyIcon, // Rain: slight
  63: WbCloudyIcon, // Rain: moderate
  65: WbCloudyIcon, // Rain: heavy
  66: WbCloudyIcon, // Freezing rain: light
  67: WbCloudyIcon, // Freezing rain: heavy
  71: AcUnitIcon, // Snowfall: slight
  73: AcUnitIcon, // Snowfall: moderate
  75: AcUnitIcon, // Snowfall: heavy
  77: AcUnitIcon, // Snow grains
  80: WbCloudyIcon, // Rain showers: slight
  81: WbCloudyIcon, // Rain showers: moderate
  82: WbCloudyIcon, // Rain showers: violent
  85: AcUnitIcon, // Snow showers: slight
  86: AcUnitIcon, // Snow showers: heavy
  95: ThunderstormIcon, // Thunderstorm: slight or moderate
  96: ThunderstormIcon, // Thunderstorm with slight hail
  99: ThunderstormIcon, // Thunderstorm with heavy hail
});

export default WeatherConditions;
