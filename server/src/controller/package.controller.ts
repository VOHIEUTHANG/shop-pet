import express from "express";
import PackageModel from "../models/Package";
import { RQT, RST, NT } from "../@types/ControllerType";

class PackageController {
  async getAllPackages(req: RQT, res: RST) {
    try {
      const packageDocs = await PackageModel.find();
      res.json({ data: packageDocs });
    } catch (error) {
      console.log(
        "🚀 ~ file: package.controller.ts ~ line 10 ~ PackageController ~ error",
        error
      );
    }
  }
  async getOnePackageByKey(req: RQT, res: RST) {
    const { packageNumber, partKey } = req.params;
    console.log({ packageNumber, partKey });
    try {
      const packageDocs = await PackageModel.findOne({
        packageNumber,
        partKey,
      }).populate("questions");
      res.json(packageDocs);
    } catch (error) {
      console.log(
        "🚀 ~ file: package.controller.ts ~ line 10 ~ PackageController ~ error",
        error
      );
    }
  }
}

export default new PackageController();
