import express from 'express';
import connectDB from './db/connectdb.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 8001;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
    });
