import React from "react";
import PageFrame from "../../../components/PageFrame";
import { useParams } from "react-router-dom";

const TrainingReadingDetail = () => {
  const { partID } = useParams();

  return (
    <PageFrame>
      <div>Training detail page - {partID}</div>
    </PageFrame>
  );
};

export default TrainingReadingDetail;
