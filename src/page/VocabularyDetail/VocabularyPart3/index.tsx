import { Row, Col } from "antd";
import { SectionParent } from "../../ToiecTipsDetail/subComponents";
import { vocabularyPart3 } from "../../../data";

const VocabularyPart3 = () => {
  return (
    <div>
      <SectionParent title="1. TOEIC PART 3 FORMAT">
        <p>
          In the Toeic part 3, you will have to hear 13 conversations. Each
          conversation consists of 3 questions. For each question, select the
          best answer that you think fits best according to what you hear.
        </p>
      </SectionParent>
      <SectionParent title="2. Common vocabulary for Toeic part 3">
        <p>
          <i className="my-4 block text-xl text-secondary-color">
            Here are common vocabulary in part 3
          </i>
        </p>
        <div className="my-8">
          <Row gutter={[16, 16]}>
            {vocabularyPart3.map((item) => {
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

export default VocabularyPart3;
