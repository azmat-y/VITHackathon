import express from 'express';
import { PORT, MongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());
