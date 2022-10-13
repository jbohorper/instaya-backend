import { Router } from "express";
import {
  getPackages,
  createPackage,
  updatePackageById,
  deletePackageById,
  getPackageById,
} from "../controllers/package.controller.js";
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";

const router = Router();

router.get("/", getPackages);

router.get("/:packageId", getPackageById);

router.post("/", [verifyToken, isModerator], createPackage);

router.put("/:packageId", [verifyToken, isModerator], updatePackageById);

router.delete("/:packageId", [verifyToken, isAdmin], deletePackageById);

export default router;