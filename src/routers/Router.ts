import { Router } from "express";
import userController from "../controllers/userController";
import creteUserController from "../controllers/creteUserController";

const routes = Router()

routes.get("/users", userController.index)
routes.post("/creteUser", creteUserController.create)

export default routes;