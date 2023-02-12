import express from "express";
export default function errorHandler(
  fn: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void
) {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      if (err.name === "BadRequestError") {
        res.status(400).send({ msg: err.message });
      } else {
        res.status(500).send({ msg: "Internal Server Error" });
      }
    });
  };
}
