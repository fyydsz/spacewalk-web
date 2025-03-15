import express from "express";
import apiRoutes from "./routes/apiRoutes";
import cors from "cors"
import { configDotenv } from "dotenv";
configDotenv();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
