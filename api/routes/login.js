import express from "express";
import { getLogin, addLogin } from "../controllers/login.js"

const routerLogin = express.Router();

routerLogin.get("/", getLogin);

routerLogin.post("/", addLogin);


export default routerLogin;