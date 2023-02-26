import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams, useLocation } from "react-router";
import PageFrame from "../../../components/PageFrame";
import { Row, Col, Divider } from "antd";
import Button from "../../../components/Button";
import { ReloadOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Radio } from "antd";

import { PackageDetailsType, PartType } from "../../../types";

const PracticePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { packageNumber, partKey } = useParams();
  const audioRef = useRef(null);
  const [part, setPart] = useState<PartType>();
  const [currentPackage, setCurrentPackage] = useState<PackageDetailsType>();
  const [currentQuestionNum, setCurentQuestionNum] = useState<number>(1);

  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);

  const [answerStatus, setAnswerStatus] = useState<Boolean | undefined>();
  const [currentAnswerKey, setCurrentAnswerKey] = useState<string>();

  const reset = () => {
    setCurentQuestionNum(1);
    setAnswerStatus(undefined);
    setCurrentAnswerKey(undefined);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:7777/api/packages/${partKey}/${packageNumber}`)
      .then((result) => {
        setCurrentPackage(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [partKey, packageNumber]);

  useEffect(() => {
    axios
      .get(`http://localhost:7777/api/parts/${partKey ?? 1}`)
      .then((result) => {
        setPart(result.data);
      })
      .catch((err) => {
        alert(err?.message);
      });
  }, [partKey]);

  useEffect(() => {
    const checkedRadio = document.querySelector(".ant-radio.ant-radio-checked");
    checkedRadio?.classList.remove("ant-radio-checked");
  }, [answerStatus, currentPackage]);

  const questionsCount = useMemo(
    () => currentPackage?.questions?.length,
    [currentPackage]
  );

  const getCurrentQuestion = (questionNumber: number) => {
    return currentPackage?.questions[questionNumber - 1];
  };

  return (
    <PageFrame>
      <div>
        <div className="page-title"> {`Part ${partKey}: ${part?.name}`}</div>
        <Row gutter={[32, 32]}>
          <Col sm={24} lg={8}>
            <div className="paper">
              <div className="text-center uppercase text-[1.1rem] mt-2">
                Package {packageNumber}
              </div>
              <Divider className="my-4" />
              <div>Questions</div>
              <div className="my-3">
                <ul className="flex gap-2 flex-wrap mb-4">
                  {currentPackage?.questions.map((question, i) => {
                    return (
                      <li key={i}>
                        <div
                          className={`transition ${
                            currentQuestionNum === i + 1
                              ? "bg-secondary-color text-white"
                              : ""
                          } cursor-default w-[30px] h-[30px] flex items-center justify-center rounded-md border border-primary-color`}
                        >
                          {i + 1}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="w-[10px] h-[10px] bg-green inline-block mr-2"></span>
                  <span>Correct: </span>
                  <span>{`${correctCount}/${questionsCount}`}</span>
                </div>
                <div>
                  <span className="w-[10px] h-[10px] bg-red-500 inline-block mr-2"></span>
                  <span>Incorrect: </span>
                  <span>{`${incorrectCount}/${questionsCount}`}</span>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <Button
                  onClick={() => {
                    reset();
                  }}
                  rounded={24}
                  type="outline"
                  icon={<ReloadOutlined />}
                >
                  Restart
                </Button>
              </div>
            </div>
            <div className="paper mt-4">
              <Row gutter={[8, 8]}>
                {part?.packages?.map((pk) => {
                  return (
                    <Col sm={16} xl={8} key={pk._id}>
                      <Link
                        onClick={() => {
                          reset();
                        }}
                        to={`/training/practice/${partKey}/${pk.packageNumber}`}
                        className={` hover:bg-slate-100 hover:color-primary-color ${
                          pk.packageNumber === Number(packageNumber)
                            ? "bg-slate-100 color-primary-color cursor-default"
                            : ""
                        } cursor-pointer package w-full py-3 border border-slate-300 flex items-center justify-center rounded-xl`}
                      >
                        {`Package ${pk.packageNumber}`}
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col sm={24} lg={16}>
            <div className="bg-white rounded border border-slate-200 p-6 ">
              <div className="mb-2 text-lg">Question {currentQuestionNum}</div>
              <div className="flex justify-center">
                <div className="max-w-[60%] max-h-[320px]">
                  <img
                    className="img-styles"
                    src={getCurrentQuestion(currentQuestionNum)?.photo}
                    alt="setActionType"
                  />
                </div>
              </div>
              <div className="flex justify-center my-6">
                <audio
                  autoPlay={true}
                  ref={audioRef}
                  id="main-voice"
                  controls
                  src={getCurrentQuestion(currentQuestionNum)?.audio}
                ></audio>
              </div>
              <div className="mx-8 my-4">
                <Radio.Group className="w-full">
                  <Row gutter={[16, 16]}>
                    {getCurrentQuestion(
                      currentQuestionNum
                    )?.answerSheetList[0].answerList.map((answer) => {
                      return (
                        <Col
                          onClick={function (e) {
                            if (currentAnswerKey === undefined) {
                              setCurrentAnswerKey(answer.key);
                              setAnswerStatus(answer.result);
                              if (answer.result !== false) {
                                setCorrectCount((preValue) => preValue + 1);
                              } else {
                                setIncorrectCount((preValue) => preValue + 1);
                              }
                            }
                          }}
                          key={answer._id}
                          xs={24}
                          sm={12}
                          lg={6}
                        >
                          <Radio
                            checked={false}
                            disabled={
                              currentAnswerKey === undefined
                                ? false
                                : currentAnswerKey === answer.key
                                ? false
                                : true
                            }
                            className={`${
                              currentAnswerKey === answer.key
                                ? answer.result === true
                                  ? "text-green-400 true"
                                  : "text-red-600 false"
                                : ""
                            } ${
                              currentAnswerKey === undefined
                                ? ""
                                : currentAnswerKey === answer.key
                                ? ""
                                : "disable"
                            }`}
                            value={answer.key}
                          >
                            {answer.key.toUpperCase()}
                          </Radio>
                        </Col>
                      );
                    })}
                  </Row>
                </Radio.Group>
              </div>
              {answerStatus !== undefined && (
                <div className="mx-8 my-4">
                  <Divider />
                  <div className="mb-6 flex justify-around">
                    {currentQuestionNum === questionsCount && (
                      <div className="uppercase flex items-center text-md px-4 rounded shadow border bg-green-50 border-gray-light">
                        Correct |
                        <span className="text-green-500 ml-1">
                          {correctCount}
                        </span>
                      </div>
                    )}
                    <Button
                      size="lg"
                      type="outline"
                      onClick={() => {
                        if (currentQuestionNum < Number(questionsCount)) {
                          setCurentQuestionNum((prevalue) => {
                            if (prevalue < Number(questionsCount)) {
                              return prevalue + 1;
                            }
                            return prevalue;
                          });
                          setCurrentAnswerKey(undefined);
                          setAnswerStatus(undefined);
                        } else {
                          const currentLocation = location.pathname;
                          const updateNewLocation: (s: string) => string = (
                            currentLocation: string
                          ) => {
                            const indexOfLastSplashSymbol =
                              currentLocation.lastIndexOf("/");
                            const packageNumber = parseInt(
                              currentLocation.slice(indexOfLastSplashSymbol + 1)
                            );
                            const newLocation =
                              currentLocation.slice(
                                0,
                                indexOfLastSplashSymbol
                              ) +
                              "/" +
                              String(packageNumber + 1);
                            return newLocation;
                          };

                          if (
                            Number(
                              part?.packages[part.packages.length - 1]
                                .packageNumber
                            ) <= Number(packageNumber)
                          ) {
                            console.log("Maximun package !");
                          } else {
                            navigate(updateNewLocation(currentLocation));
                            reset();
                          }
                        }
                      }}
                      rounded={2}
                      icon={<ArrowRightOutlined />}
                    >
                      {currentQuestionNum === questionsCount
                        ? "Next Package"
                        : "Next Question"}
                    </Button>
                    {currentQuestionNum === questionsCount && (
                      <div className="uppercase flex items-center text-md px-4 rounded shadow border bg-red-50 border-gray-light">
                        Incoorrect |
                        <span className="text-red-500 ml-1">
                          {incorrectCount}
                        </span>
                      </div>
                    )}
                  </div>
                  ''
                  <div className="paper shadow">
                    <div>
                      {
                        getCurrentQuestion(currentQuestionNum)
                          ?.answerSheetList[0].question
                      }
                    </div>
                    <ul>
                      {getCurrentQuestion(
                        currentQuestionNum
                      )?.answerSheetList[0].answerList.map((answer) => {
                        return (
                          <li
                            key={answer._id}
                            className={`text-lg  ${
                              currentAnswerKey == answer.key
                                ? "text-red-400"
                                : ""
                            } ${answer.result && "text-green-600"}`}
                          >
                            {answer.key + ". " + answer.value}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </PageFrame>
  );
};

export default PracticePage;
