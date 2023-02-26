import Banner from "../../components/Banner";
import Cardlist from "../../components/CardList";
import Section from "../../components/Section";
import TestKitList from "../../components/TestKitList";
import PageFrame from "../../components/PageFrame";
import {
  dogList,
  catList,
  petFoodList,
  petAccessoryList,
  joinGroupList,
} from "../../data";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="container-full">
          <Banner>
            <div className="main-heading my-6 px-8 max-w-[60vw]">
              <h1 className="title px-4 font-bold text-primary-color text-shadow line-clamp-1">
                Dogli Farm & Petshop
              </h1>
              <div className="subtitle px-4 text-white text-shadow line-clamp-3">
                Dogily là thương hiệu đầu tiên tại Việt Nam xây dựng thành công
                hệ sinh thái khép kín gồm các Trang trại nhập khẩu, nhân giống
                chó mèo cảnh, chuỗi siêu thị thú cưng, Phòng khám thú y, dịch vụ
                Spa & Grooming tại Tphcm, Hà Nội & Đà Lạt
              </div>
            </div>
          </Banner>
        </div>
        <PageFrame>
          <Section title="Giống chó cảnh">
            <Cardlist cardList={dogList} />
          </Section>
          <Section title="Giống mèo cảnh">
            <Cardlist cardList={catList} />
          </Section>
          <Section title="Thức ăn thú cưng">
            <Cardlist cardList={petFoodList} />
          </Section>
          <Section title="Phụ kiện thú cưng">
            <Cardlist cardList={petAccessoryList} />
          </Section>
          <Section title="Tham gia với chúng tôi">
            <TestKitList testKitList={joinGroupList} />
          </Section>
        </PageFrame>
      </div>
    </>
  );
};

export default HomePage;
