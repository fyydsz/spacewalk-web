import express from "express";
import apiRoutes from "./routes/v1Routes";
import webhookRoutes from "./routes/webhook"
import cors from "cors"
import { configDotenv } from "dotenv";
configDotenv();

const port = process.env.PORT;

const app = express();
app.disable('etag')

app.use(cors());
app.use(express.json());

app.use("/v1", apiRoutes);
app.use("/webhook", webhookRoutes);
app.get("/", (req, res) => {
  // Send an Easter Egg!
  res.send("Shh... You weren't supposed to find this.")
});

app.use((req, res) => {
  res.status(404).json({ code: 404, message: "Path not found." });
});
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});