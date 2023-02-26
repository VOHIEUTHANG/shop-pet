import React from "react";
import PageFrame from "../../components/PageFrame";
import VocabularyCard from "../../components/TipsCard";
import { vocabularyCardList } from "../../data";
import "./styles.scss";
import { Col, Row } from "antd";

const Documents = () => {
  return (
    <PageFrame>
      <div className="vocabulary-page">
        <div className="primaty-title text-center uppercase">
          Common Vocabulary
        </div>
        <Row gutter={[16, 16]}>
          {vocabularyCardList.map((data, index) => {
            return (
              <Col key={index} lg={8} md={8} sm={12} xs={24}>
                <VocabularyCard {...data} />
              </Col>
            );
          })}
        </Row>
      </div>
    </PageFrame>
  );
};

export default Documents;
