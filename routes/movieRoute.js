import { Router } from "express";
import { store } from "../controllers/MovieControllers.js";

const router = Router();

router.post("/", store);

export default router;
