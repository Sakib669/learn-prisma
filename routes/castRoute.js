import { Router } from "express";
import { destroy, index, store, update } from "../controllers/CastControllers.js";

const router = Router();

router.post("/", store);
router.get("/", index);
router.patch("/:id", update);
router.delete("/:id", destroy);

export default router;
