const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require("./config/db");
const router = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const profileRoutes = require("./routes/profileRoutes");
require("dotenv").config();
const app = express();

// connect mongodb database
connect();

// Configure CORS to allow requests from the specified origin
app.use(
  cors({
    origin: ["https://blog-app-client-murex-zeta.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use("/", router);
app.use("/", postRoutes);
app.use("/", profileRoutes);
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log("Your app is running", PORT);
});
