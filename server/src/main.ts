import express from "express";
import configs from "./configs";
import initRoutes from "./routes";
import connectMongoDB from "./database/connectDB";
import QuestionModel from "./models/Question";
require("./models/Question");
require("./models/Package");
require("./models/Part");

import dotenv from "dotenv";
dotenv.config();

const app = express();
configs(app);

initRoutes(app);

const PORT = process.env.PORT ?? 3000;

connectMongoDB((error) => {
  if (!error) {
    app.listen(PORT, async () => {
      console.log(`Server is listening on URL: http://localhost:${PORT}`);
      // const newData = await QuestionModel.create({
      //   audio:
      //     "https://storage.googleapis.com/kstoeic/sound/eco2018_Test06_0101.mp3",
      //   photo:
      //     "https://storage.googleapis.com/kstoeic/images/7354108_1564544432903.png",
      //   answerSheetList: [
      //     {
      //       question: "",
      //       answerList: [
      //         { key: "A", value: "She has some grocery bags", result: false },
      //         { key: "B", value: "She is holding some flowers", result: false },
      //         {
      //           key: "C",
      //           value: "She is reaching out to pick up a vegetable",
      //           result: true,
      //         },
      //         { key: "D", value: "She is washing the fruits", result: false },
      //       ],
      //     },
      //   ],
      // });
      // console.log(newData._id);
    });
  } else {
    console.log(error?.message);
  }
});
