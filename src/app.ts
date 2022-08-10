// configurar variables de entorno
import dotenv from "dotenv";
import Server from "./server/server";

dotenv.config();

// crear servidor y escuchar peticiones
const server = new Server();
server.listen();
