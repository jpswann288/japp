import React from "react";
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";
import weatherCodes from "../helpers/weatherCodes.json";
import WeatherConditions from "../helpers/weatherConditions";

const WeatherCard = ({ weather, current }) => {
  const Icon = WeatherConditions[weather.weather_code];
  const date = new Date(weather.time.replace(/-/g, "/"));
  const options = { weekday: "short" }; // 'short' gives abbreviated day name
  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(date);

  const isToday = () => {
    const today = new Date();
    const weatherDate = new Date(weather.time.replace(/-/g, "/"));

    // Ensure both dates are compared without time influence
    return (
      today.toISOString().slice(0, 10) ===
      weatherDate.toISOString().slice(0, 10)
    );
  };

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
        {isToday() && (
          <Typography variant="h5" component="div">
            {Math.round(current.temperature_2m)}°
          </Typography>
        )}
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
      <Box
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "8px 0", // Add padding for spacing
        }}
      >
        {isToday() ? "Today" : dayOfWeek}
      </Box>
    </MuiCard>
  );
};

export default WeatherCard;
