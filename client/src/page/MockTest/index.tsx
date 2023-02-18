import React from "react";
import CardList from "../../components/CardList";
import { petFoodList } from "../../data";
import Section from "../../components/Section";
import PageFrame from "../../components/PageFrame";

const MockTest = () => {
  return (
    <PageFrame>
      <Section title="TOEIC Exam Simulator">
        <CardList cardList={petFoodList} />
      </Section>
    </PageFrame>
  );
};

export default MockTest;
