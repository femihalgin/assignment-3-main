import express from 'express';
import config from 'config';
import routes from './routes/index.js';
import cors from 'cors';
import * as mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();


const port = config.get('server.port');
const host = config.get('server.host');


//mongoose connection
mongoose.connect('mongodb://localhost:27017/Contents');


app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(routes)
//importing route
//routes(app); //register the route


const PORT = 8080;
const HOST = '0.0.0.0';


app.listen(8081, HOST => console.log("Server listening at port 8081"));
