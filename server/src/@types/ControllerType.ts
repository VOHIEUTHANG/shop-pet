import express from "express";
type ReqType = express.Request;
type ResType = express.Response;
type NextFc = express.NextFunction;

export { ReqType as RQT, ResType as RST, NextFc as NT };
