import { Router } from "express";
import {
    getRequests,
    createRequest,
    updateRequestById,
    deleteRequestById,
    getRequestById,
} from "../controllers/requests.controller";
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";

const router = Router();

router.get("/", getRequests);

router.get("/:requestId", getRequestById);

router.post("/", [verifyToken, isModerator], createRequest);

router.put("/:requestId", [verifyToken, isModerator], updateRequestById);

router.delete("/:requestId", [verifyToken, isAdmin], deleteRequestById);

export default router;