import { Router } from "express";
import { index, store, update } from "../controllers/MovieControllers.js";

const router = Router();

router.post("/", store);
router.get("/", index);
router.patch("/:id", update);

export default router;
