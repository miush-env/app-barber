import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./server/.env" }); // ESTA es la ruta correcta

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

export async function connectDB() {
    try {
        await client.connect();
        console.log("🔥 Conectado a MongoDB");
        db = client.db('barber-app-db');
        return db;
    } catch (err) {
        console.error("❌ Error de conexión:", err);
        return null;
    }
}

export function getDB() {
    return db;
}
