import express from "express"
import { LoginPage, RegisterPage } from "../controls/authControlers.js";

const Router = express.Router()

Router.get("/login",LoginPage)
Router.post("/Register",RegisterPage)

export default Router;