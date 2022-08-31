import { Router } from "express";
import validateJoi from "../middlewares/joiMiddleware.js";
import { validateUsers } from "../middlewares/battleMiddleware.js";
import { battle } from "../controllers/battleController.js";

const router = Router();

router.post("/battle", validateJoi("battle"), validateUsers, battle);

export default router;
