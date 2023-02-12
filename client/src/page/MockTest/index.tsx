import React from "react";
import TestKitList from "../../components/TestKitList";
import { testKitList } from "../../data";
import Section from "../../components/Section";
import PageFrame from "../../components/PageFrame";

const MockTest = () => {
  return (
    <PageFrame>
      <Section title="TOEIC Exam Simulator">
        <TestKitList testKitList={testKitList} />
      </Section>
    </PageFrame>
  );
};

export default MockTest;
