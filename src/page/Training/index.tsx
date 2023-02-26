import Cardlist from "../../components/CardList";
import Section from "../../components/Section";
import { dogList, catList } from "../../data";
import PageFrame from "../../components/PageFrame";

const TrainingPage = () => {
  return (
    <PageFrame>
      <Section title="Listening">
        <Cardlist cardList={dogList} />
      </Section>
      <Section title="Reading">
        <Cardlist cardList={catList} />
      </Section>
    </PageFrame>
  );
};

export default TrainingPage;
