import { Col, Row } from "antd";
import React from "react";
import PageFrame from "../../components/PageFrame";
import TipsCard from "../../components/TipsCard";
import { tipsCardList } from "../../data";
const ToiecTips = () => {
  return (
    <PageFrame>
      <div className="toiec-tips">
        <div className="primaty-title text-center uppercase">
          Our Toiec Tips
        </div>
        <Row gutter={[16, 16]}>
          {tipsCardList.map((tip, index) => {
            return (
              <Col key={index} lg={8} md={8} sm={12} xs={24}>
                <TipsCard {...tip} />
              </Col>
            );
          })}
        </Row>
      </div>
    </PageFrame>
  );
};

export default ToiecTips;
