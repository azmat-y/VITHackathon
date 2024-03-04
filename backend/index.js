import express from 'express';
import { PORT, MongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import GuardRoutes from './routes/GuardRoutes.js';
const app = express();

app.use(express.json());

app.use(cors());
app.use('/guard', GuardRoutes);

mongoose
    .connect(MongoDBURL)
    .then(()=>{
        console.log("App connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`app is listening to port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });