import { Router } from "express";
import MovieRoutes from "./movieRoute.js";
import CastRoutes from "./castRoute.js";
const router = Router();

router.use("/api/movie", MovieRoutes);
router.use("/api/cast", CastRoutes);

export default router;
