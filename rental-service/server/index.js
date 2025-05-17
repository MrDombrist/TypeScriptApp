import express from "express";
import * as dotenv from "dotenv"
import sequelize from "./config/database.js";
import cors from "cors";
import router from './routes/index.js';
import errorMiddleware from "./middleware/ErrorHandlingMiddleware.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(express.json())

app.use('/', router);

app.get('/', (req, res)=>{
    res.status(200).json({message: 'Ура! Всё заработало!'})
});

app.use(errorMiddleware)

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT , () => console.log(`Сервер запущен на порте  localhost:${PORT}`));
    }
    catch (e){
            console.log(e);
        }
    };

start();
