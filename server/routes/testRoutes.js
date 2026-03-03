import { Router } from "express";
import { getDB } from "../config/database.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection("barber").find().toArray();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Error al consultar MongoDB" });
    }
});

export default router;
