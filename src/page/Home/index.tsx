import Banner from "../../components/Banner";
import Cardlist from "../../components/CardList";
import Section from "../../components/Section";
import TestKitList from "../../components/TestKitList";
import PageFrame from "../../components/PageFrame";
import {
  dogList as mockSkeleton,
  petFoodList,
  petAccessoryList,
  joinGroupList,
} from "../../data";
import { useGetListAnimalQuery, IAnimal } from "../../apis/animals";
import { PropsTypes } from "../../components/Card";
import { random } from "lodash";
import { useEffect, useState } from "react";

const HomePage = () => {

  const types = {
    DOG: "Dog",
    CAT: "Cat"
  }
  const { data: rawDataDogs, isLoading: isLoadingDog } = useGetListAnimalQuery(types.DOG);
  const { data: rawDataCats, isLoading: isLoadingCat } = useGetListAnimalQuery(types.CAT);

  const [isNewLoadingDog, setNewLoadingDog] = useState(isLoadingDog);
  const [isNewLoadingCat, setNewLoadingCat] = useState(isLoadingCat);


  const dogListStandard: PropsTypes[] = (rawDataDogs ?? []).map((dog: IAnimal) => ({
    href: `animal-detail/${dog._id}`,
    content: dog.description,
    title: dog.name,
    isSkeleton: false,
    imgUrl: dog.photos[0].small,
    price: random(1200, 2000)
  } as PropsTypes));

  const catListStandard: PropsTypes[] = (rawDataCats ?? []).map((cat: IAnimal) => ({
    href: `animal-detail/${cat._id}`,
    content: cat.description,
    title: cat.name,
    isSkeleton: false,
    imgUrl: cat.photos[0].small,
    price: random(1200, 2000)
  } as PropsTypes));

  console.log({catListStandard})

  useEffect(() => {
    const delayLoadingDog = setTimeout(() => {
      if (!isLoadingDog) {
        setNewLoadingDog(isLoadingDog);
      }
    }, 1000);

    const delayLoadingCat = setTimeout(() => {
      if (!isLoadingCat) {
        setNewLoadingCat(isLoadingCat);
      }
    }, 1000);

    return () => {
      clearTimeout(delayLoadingDog);
      clearTimeout(delayLoadingCat);
    }
  }, [isLoadingDog, isLoadingCat])

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
            <Cardlist cardList={isNewLoadingDog ? mockSkeleton : dogListStandard} />
          </Section>
          <Section title="Giống mèo cảnh">
            <Cardlist cardList={isNewLoadingCat ? mockSkeleton : catListStandard} />
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
