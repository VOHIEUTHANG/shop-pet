import { Row, Col } from "antd";
import { SectionParent } from "../../ToiecTipsDetail/subComponents";
import { vocabularyPart2 } from "../../../data";

const vocabularyPart1 = () => {
  return (
    <div>
      <SectionParent title="1. Toeic part 2 format">
        <p>
          The Toeic part 2 includes 25 questions. For each question, you have to
          listen to a question and 3 possible responses. Then you have to choose
          the best response for the question.
        </p>
      </SectionParent>
      <SectionParent title="2. Common vocabulary for Toeic part 2">
        <p>
          <i className="my-4 block text-xl text-secondary-color">
            Here are common vocabulary in part2
          </i>
        </p>
        <div className="my-8">
          <Row gutter={[16, 16]}>
            {vocabularyPart2.map((item) => {
              return (
                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                  <div className="relative flip-wrapper w-full aspect-square">
                    <div className="absolute w-full h-full transition-all duration-500 cursor-pointer">
                      <div className="flipCard text-center capitalize m-0 flex-col bg-white backface-hidden px-2 z-10">
                        {item.word}
                        <p>
                          <i className="text-lg">({item.type})</i>
                        </p>
                      </div>
                      <div className="flipCard px-4 capitalize text-center roate-y-180 bg-white backface-hiddenpx-2">
                        {item.meaning}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </SectionParent>
    </div>
  );
};

export default vocabularyPart1;
