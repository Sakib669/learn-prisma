import { Router } from "express";
import { destroy, index, search, store, update } from "../controllers/MovieControllers.js";

const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/search", search);
router.patch("/:id", update);
router.delete("/:id", destroy);

export default router;
