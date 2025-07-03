import express from "express";
import DatabaseManager from "../config/db.js";

const router = express.Router();

// Health check route
router.get("/health", (req, res) => {
    try {
        // Check database connection
        const dbManager = DatabaseManager.getInstance();
        const adapter = dbManager.getAdapter();

        const dbStatus = adapter ? "connected" : "disconnected";

        const healthStatus = {
            status: "ok",
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            database: {
                status: dbStatus,
                type: process.env.DATABASE_TYPE ?? "memory",
            },
            memory: {
                used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
                total: Math.round(
                    process.memoryUsage().heapTotal / 1024 / 1024
                ),
            },
        };

        res.status(200).json(healthStatus);
    } catch (error) {
        res.status(503).json({
            status: "error",
            timestamp: new Date().toISOString(),
            error: "Service unavailable",
            errorCaught: error,
        });
    }
});

// Info route
router.get("/info", (req, res) => {
    const info = {
        name: "animalia",
        description: "API for animal facts",
        environment: process.env.NODE_ENV ?? "development",
        node_version: process.version,
        database_type: process.env.DATABASE_TYPE ?? "memory",
        endpoints: {
            facts: "/api/facts",
            users: "/api/users",
            health: "/api/system/health",
            info: "/api/system/info",
        },
    };

    res.json(info);
});

export default router;
