import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import  connection  from './db.js';
import dalleRoutes from './routes/dalle.routes.js';


import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
dotenv.config();
const app = express();

// database connection
connection();

// middlewares
app.use(cors());
app.use(express.json({ limig: "50mb" }))


// routes
app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))