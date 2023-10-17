import express from "express";
import "dotenv/config";
import { router } from "./routes";
import TranslationsYup from "./shared/services/TranslationsYup";

const server = express();

server.use(express.json());
server.use(router);

export { server };
