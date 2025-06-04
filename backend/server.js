const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Use environment port or fallback to 3000
const PORT = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("WELCOME TO RABBIT API!");
});

const userRoutes = require("./routes/userroutes");
app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
