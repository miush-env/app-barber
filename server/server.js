import dotenv from 'dotenv';
dotenv.config({ path: "./server/.env" });

import app from "./app.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () =>
        console.log(`🚀 Servidor corriendo en puerto ${PORT}`)
    );
});
