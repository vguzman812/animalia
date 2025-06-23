import Express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import DatabaseManager from "./config/db.js";
import factRoutes from "./routes/factRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import path from "path";

// Initialize port from environment variables or use 8888 as default
const port = process.env["PORT"] || 8888;

// Initialize Express application
const app = Express();

// Middleware for parsing JSON and URL-encoded data
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Middleware for parsing cookies
app.use(cookieParser());

// Define API routes for facts and users
app.use("/api/facts", factRoutes);
app.use("/api/users", userRoutes);

// Check if app is running in production environment
if (process.env["NODE_ENV"] === "production") {
    // Set the static folder for serving frontend files
    app.use(Express.static("dist"));

    // Any undefined route will serve index.html file
    app.get("*", (_req, res) =>
        res.sendFile(path.resolve("dist", "index.html"))
    );
} else {
    // Basic route for the root URL
    app.get("/", (_req, res) => {
        console.log("Hello from /");
        res.send("API running");
    });
}

// Middleware for handling 404 not found errors
app.use(notFound);

// Middleware for handling other errors
app.use(errorHandler);

// Connect, then start
DatabaseManager.getInstance()
    .connect()
    .then(() => {
        console.log("Database connected, starting server…");
        app.listen(port, () => console.log(`Server running on ${port}`));
    })
    .catch((err) => {
        console.error("Failed to connect to DB:", err);
        process.exit(1);
    });
