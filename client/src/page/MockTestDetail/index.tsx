import React from "react";
import PageFrame from "../../components/PageFrame";
import { useParams } from "react-router-dom";

const MockTestDetail = () => {
  const { partID } = useParams();

  return (
    <PageFrame>
      <div>MockTest detail page - {partID}</div>
    </PageFrame>
  );
};

export default MockTestDetail;
