import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import express from "express";
import router from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Specify the frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Allowed headers
  credentials: true // Allow credentials
};

app.use(cors(corsOptions));

// Basic route to check server status
app.get("/", (req, res) => {
  return res.status(200).send("WELCOME");
});

// Route to handle book operations
app.use("/books", router);

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection established");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

export default app;
