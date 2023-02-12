import React from "react";
import { Row, Col } from "antd";
import Card, { PropsTypes as CardType } from "../Card";

export type CardListType = CardType[];

type PropsType = {
  cardList: CardListType;
};

const CardList = ({ cardList }: PropsType) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {cardList.map((test, index) => {
          return (
            <Col key={index} lg={6} md={8} sm={12} xs={24}>
              <Card {...test} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardList;
