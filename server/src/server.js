import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import api from "./routes/api.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../..");
const frontendDist = path.join(projectRoot, "client", "dist");

app.use(cors({ origin: process.env.CLIENT_ORIGIN ? process.env.CLIENT_ORIGIN.split(",") : true }));
app.use(express.json({ limit: "1mb" }));
app.use("/api", api);

// In production, Express serves the built React application and API from one URL.
app.use(express.static(frontendDist));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(frontendDist, "index.html"), err => {
    if (err) next();
  });
});

app.use((req, res) => res.status(404).json({ message: "Route not found." }));
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "ValidationError") return res.status(400).json({ message: Object.values(err.errors).map(e => e.message).join(", ") });
  if (err.name === "CastError") return res.status(400).json({ message: "Invalid record ID." });
  res.status(500).json({ message: err.message || "Server error." });
});

const port = process.env.PORT || 5000;
try {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI missing. Configure the Render environment variable.");
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => console.log(`HomeChore Fairness running on port ${port}`));
} catch (error) {
  console.error("Startup failed:", error.message);
  process.exit(1);
}
