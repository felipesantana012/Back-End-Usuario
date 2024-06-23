
import express from 'express';
import bodyParser from "body-parser";
import "dotenv/config";
import dbMongoConfig from "./config/dbMongoConfig";
import routes from './routes/index';

const app = express();
app.use(bodyParser.json());
app.use(express.json());
dbMongoConfig();
app.use("/", routes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor conectado na porta ${PORT}`);
});
