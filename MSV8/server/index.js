import express from 'express';
import connectDB from './db/connectdb.js';
import dotenv from 'dotenv';
import router from './routes/auth.js';
import cors from 'cors';
import adminRouter from './routes/admin.js';
import userRouter from './routes/user.js';
import staffRouter from './routes/staff.js';

dotenv.config();
const app = express();
const PORT = 8001;
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use("/", router);
app.use("/user", userRouter);
app.use("/admin", adminRouter);


app.use("/staff", staffRouter);
app.listen(PORT, async () => {

    await connectDB();
    console.log(`Server is running on port ${PORT}`);
    });
