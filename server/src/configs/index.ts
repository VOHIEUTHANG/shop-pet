import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

export default function config(app: any) {
  (() => {
    return {
      logger() {
        app.use(
          morgan(
            ":method :url :status :res[content-length] - :response-time ms"
          )
        );
      },
      staticFile() {
        app.use(express.static("public"));
      },
      cors() {
        app.use(cors());
      },
      convertDataType() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
      },
      viewEngine() {
        app.set("view engine", "ejs");
        app.set("views", "./src/views");
      },

      async run() {
        this.logger();
        this.staticFile();
        this.cors();
        this.convertDataType();
        this.viewEngine();
      },
    };
  })().run();
}
