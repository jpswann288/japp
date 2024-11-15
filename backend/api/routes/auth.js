// In your routes/auth.js or similar
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/userinfo", async (req, res) => {
  const { access_token } = req.body;

  if (!access_token) {
    return res.status(400).json({ error: "Access token is required" });
  }

  try {
    // Call Google API with the access token to get user info
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    // Return the user data to the frontend
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ error: "Failed to fetch user info" });
  }
});

module.exports = router;
