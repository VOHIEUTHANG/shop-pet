import TestKit, { PropsType as TestKitType } from "../TestKit";
import { Row, Col } from "antd";

export type TestKitListType = TestKitType[];
type PropsType = {
  testKitList: TestKitListType;
};

const TestKitList = ({ testKitList }: PropsType) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {testKitList.map((test, index) => {
          return (
            <Col key={index} xs={24} sm={24} md={12} lg={12} xl={8}>
              <TestKit {...test} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TestKitList;
