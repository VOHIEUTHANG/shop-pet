import React from "react";
import { useParams } from "react-router-dom";
import PageFrame from "../../components/PageFrame";
import TipsPart1 from "./TipsPart1";
import TipsPart2 from "./TipsPart2";
import TipsPart3 from "./TipsPart3";
import "./styles.scss";

const ToiecTipsPart1 = () => {
  const { partKey } = useParams();

  return (
    <PageFrame>
      <div className="tips-detail">
        {Number(partKey) === 1 ? (
          <TipsPart1 />
        ) : Number(partKey) === 2 ? (
          <TipsPart2 />
        ) : Number(partKey) === 3 ? (
          <TipsPart3 />
        ) : (
          <div>NOT FOUND TIPS PAGE FOR PART {partKey}</div>
        )}
      </div>
    </PageFrame>
  );
};

export default ToiecTipsPart1;
