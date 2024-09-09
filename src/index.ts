import Server from "./models/server";
import dotenv from 'dotenv';

//Configuramos las variables de ambiente
dotenv.config();

//Puerto del Server
const server = new Server();