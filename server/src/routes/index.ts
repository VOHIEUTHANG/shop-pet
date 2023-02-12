import packageRouter from "./package.route";
import partRouter from "./part.route";
export default function initRoutes(app: any) {
  app.use("/api/packages/", packageRouter);
  app.use("/api/parts/", partRouter);
}
