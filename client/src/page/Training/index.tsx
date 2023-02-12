import Cardlist from "../../components/CardList";
import Section from "../../components/Section";
import { listeningTestList, readingTestList, testKitList } from "../../data";
import PageFrame from "../../components/PageFrame";

const TrainingPage = () => {
  return (
    <PageFrame>
      <Section title="Listening">
        <Cardlist cardList={listeningTestList} />
      </Section>
      <Section title="Reading">
        <Cardlist cardList={readingTestList} />
      </Section>
    </PageFrame>
  );
};

export default TrainingPage;
