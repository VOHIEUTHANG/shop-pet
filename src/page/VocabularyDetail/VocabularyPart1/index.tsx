import { Row, Col } from "antd";
import { SectionParent } from "../../ToiecTipsDetail/subComponents";
import { vocabularyPart1People, vocabularyPart1Objects } from "../../../data";

const vocabularyPart1 = () => {
  return (
    <div>
      <SectionParent title="1.Photos of people">
        <p>
          Photos of people account for about 75 percent of the number of
          questions in the Toeic part 1. Therefore, answering all questions with
          photos of people correctly means that you achieve 75 percent of marks
          in this part.
        </p>
        <p>
          <i className="my-4 block text-xl text-secondary-color">
            Here are common vocabulary to describe photos of people:
          </i>
        </p>
        <div className="my-8">
          <Row gutter={[16, 16]}>
            {vocabularyPart1People.map((item) => {
              return (
                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                  <div className="relative flip-wrapper w-full aspect-square">
                    <div className="absolute w-full h-full transition-all duration-500 cursor-pointer">
                      <div className="flipCard capitalize m-0 flex-col bg-white backface-hidden px-2 z-10">
                        {item.word}
                        <p>
                          <i className="text-lg">({item.type})</i>
                        </p>
                      </div>
                      <div className="flipCard capitalize roate-y-180 bg-white backface-hiddenpx-2">
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
      <SectionParent title="1.Photos of objects">
        <p>
          Photos of objects occupy about 25% of the number of questions in the
          Toeic part 1. To gain a maximum score in this part, it’s recommended
          to learn the following vocabulary.
        </p>
        <p>
          <i className="my-4 block text-xl text-secondary-color">
            Here are common vocabulary to describe photos of objects:
          </i>
        </p>
        <div className="my-8">
          <Row gutter={[16, 16]}>
            {vocabularyPart1Objects.map((item) => {
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
                      <div className="flipCard capitalize text-center roate-y-180 bg-white backface-hiddenpx-2">
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
