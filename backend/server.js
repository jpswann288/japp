require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./api/routes/auth");
const weatherRoutes = require("./api/routes/weather");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
