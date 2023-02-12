import express from "express";
import PackageModel from "../models/Package";
import PartModel from "../models/Part";

type ReqType = express.Request;
type ResType = express.Response;

class PartController {
  async getAll(req: ReqType, res: ResType) {
    try {
      const partDoc = await PartModel.find();
      res.status(200).json({ data: partDoc });
    } catch (error) {
      console.log(
        "🚀 ~ file: part.controller.ts ~ line 9 ~ PartController ~ error",
        error
      );
    }
  }
  async getOnePartByKey(req: ReqType, res: ResType) {
    const partKey = req.params.partKey;
    try {
      const part = await PartModel.findOne({ partKey }).populate("packages");
      res.status(200).json(part);
    } catch (error: any) {
      console.log(
        "🚀 ~ file: part.controller.ts ~ line 9 ~ PartController ~ error",
        error?.message
      );
    }
  }
}

export default new PartController();
