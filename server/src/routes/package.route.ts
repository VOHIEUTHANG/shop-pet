import express from "express";
import PackageController from "../controller/package.controller";
const router = express.Router();

router.get("/", PackageController.getAllPackages);
router.get("/:partKey/:packageNumber", PackageController.getOnePackageByKey);

export default router;
