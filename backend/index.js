const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import axios for making HTTP requests

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put("https://api.chatengine.io/users/", {
      username: username,
      secret: username,
      first_name: username
    }, {
      headers: { "private-key": "4222794e-8d27-4ec3-8843-ed947ea5a8e7" }
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      // If there's an error response, extract status code and data
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle non-HTTP error (e.g., network failure)
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
