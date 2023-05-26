import express from 'express';
import { Connection } from './database/db.js';
import DefaultData from './default.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app= express();
import Router from './routes/route.js';
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);
Connection();
app.listen(8000,()=>{
    console.log("successfully running");
});
DefaultData();