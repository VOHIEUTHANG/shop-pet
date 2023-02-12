import express from "express";
import PartController from "../controller/part.controller";
const router = express.Router();

router.get("/", PartController.getAll);
router.get("/:partKey", PartController.getOnePartByKey);

export default router;
