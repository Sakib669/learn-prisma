import { Router } from "express";
import MovieRoutes from "./movieRoute.js";
const router = Router();

router.use("/api/movie", MovieRoutes);

export default router;
