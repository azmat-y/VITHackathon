import express from 'express';
import { PORT, MongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import GuardRoutes from './routes/GuardRoutes.js';
import StudentRoutes from './routes/StudentRoutes.js';
import CompsRoutes from './routes/CompsRoutes.js';
const app = express();

app.use(express.json());

app.use(cors());
app.use('/guard', GuardRoutes);
app.use('/student', StudentRoutes);
app.use('/complaint', CompsRoutes);

mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log("App connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`app is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });