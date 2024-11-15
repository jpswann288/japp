import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import WeatherCard from "./WeatherCard";

const Card = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(fetchWeather());
        if (fetchWeather.fulfilled.match(resultAction)) {
          const weather = [];
          const current = resultAction.payload.current;
          for (let i = 0; i < 7; i++) {
            const obj = {};
            Object.keys(resultAction.payload.daily).forEach((key) => {
              obj[key] = resultAction.payload.daily[key][i];
            });
            weather.push(obj);
          }
          setData({ weather: weather, current: current });
        } else {
          console.error("Failed to fetch weather:", resultAction.error);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <div>
        <strong>New York</strong> - {data.weather[0].time}
      </div>
      <Grid container spacing={2} sx={{ flexWrap: "wrap", width: "100%" }}>
        {data.weather.length
          ? data.weather.map((obj, index) => (
              <Grid
                item
                xs={1} // Each card takes up 1/7th of the row
                key={index}
              >
                <WeatherCard weather={obj} current={data.current} />
              </Grid>
            ))
          : "No Data Available"}
      </Grid>
    </>
  );
};

export default Card;
