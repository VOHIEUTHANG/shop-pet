import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import PageFrame from "../../components/PageFrame";
import VocabularyPart1 from "./VocabularyPart1";
import VocabularyPart2 from "./VocabularyPart2";
import VocabularyPart3 from "./VocabularyPart3";

import "./styles.scss";

const VocabularyDetail = () => {
  const { partKey } = useParams();
  console.log(partKey);
  return (
    <PageFrame>
      <div className="vocabulary-page">
        <h3 className="mb-6 text-center uppercase text-3xl">
          Common Vocabulary For TOEIC Part {partKey}
        </h3>
        {Number(partKey) === 1 ? (
          <VocabularyPart1 />
        ) : Number(partKey) === 2 ? (
          <VocabularyPart2 />
        ) : Number(partKey) == 3 ? (
          <VocabularyPart3 />
        ) : (
          <div>Vocabulary for part ${partKey} not found 1</div>
        )}
      </div>
    </PageFrame>
  );
};

export default VocabularyDetail;
