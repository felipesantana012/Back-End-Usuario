
import express from 'express';
import bodyParser from "body-parser";
import "dotenv/config";
import conectarDB from "./config/dbMongoConfig.js";
import routes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(express.json());
conectarDB();
app.use("/", routes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor conectado na porta ${PORT}`);
});
