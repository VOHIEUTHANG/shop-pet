import React, { useEffect, useState } from "react";
import axios from "axios";
import PageFrame from "../../../components/PageFrame";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PackageType } from "../../../types";

const TrainingListeningDetail = () => {
  const { partKey } = useParams();
  const [packages, setPackages] = useState<PackageType[]>();

  useEffect(() => {
    axios
      .get(`http://localhost:7777/api/parts/${partKey ?? 1}`)
      .then((result) => {
        setPackages(result.data?.packages);
      })
      .catch((err) => {
        alert(err?.message);
      });
  }, [partKey]);

  return (
    <PageFrame>
      <div>
        <div className="page-name text-center uppercase text-4xl font-semibold mb-8 text-slate-600">
          Part 1 - Photographs
        </div>
        <Row gutter={16}>
          <Col sm={24} lg={16}>
            <div className="border border-slate-200 shadow rounded-md overflow-hidden">
              <ul className="divide-y divide-slate-100">
                {packages?.map((pk) => {
                  return (
                    <li className="group" key={pk._id}>
                      <Link
                        to={`/training/practice/${partKey}/${pk.packageNumber}`}
                      >
                        <div className="flex justify-between p-4 shadow-sm hover:bg-slate-50 transition">
                          <div className="text-name text-lg ">{`Package ${pk.packageNumber}`}</div>
                          <div className="test-process border border-slate-400 rounded-lg px-10 py-1 ">
                            {/* bg-[#b2f8b280] */}
                            0%
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col sm={24} lg={8}>
            <div className="overflow-hidden">
              <ul className="">
                <li>
                  <Link to="/">
                    <div className="flex justify-between items-center px-3 py-3 mb-3 rounded bg-white border border-slate-200">
                      <p>Part 1: Photos</p>
                      <span className="flex items-center">
                        <RightOutlined />
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="flex justify-between items-center px-3 py-3 mb-3 rounded bg-white border border-slate-200">
                      <p>Part 2: Photos</p>
                      <span className="flex items-center">
                        <RightOutlined />
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="flex justify-between items-center px-3 py-3 mb-3 rounded bg-white border border-slate-200">
                      <p>Part 3: Photos</p>
                      <span className="flex items-center">
                        <RightOutlined />
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </PageFrame>
  );
};

export default TrainingListeningDetail;
