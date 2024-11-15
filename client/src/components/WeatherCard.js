import React from "react";
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";
import weatherCodes from "../helpers/weatherCodes.json";
import WeatherConditions from "../helpers/weatherConditions";

const WeatherCard = ({ weather, current }) => {
  const Icon = WeatherConditions[weather.weather_code];

  return (
    <MuiCard
      sx={{
        width: "100%",
        maxWidth: 200,
        margin: "20px auto",
        backgroundColor: "#d3d3d338",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {Math.round(current.temperature_2m)}°
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Icon fontSize="medium" />

          <Typography variant="body2" color="text.secondary">
            {weatherCodes[weather.weather_code]}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {"H: " +
              Math.round(weather.temperature_2m_max) +
              "° L: " +
              Math.round(weather.temperature_2m_min) +
              "°"}
          </Typography>
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default WeatherCard;
