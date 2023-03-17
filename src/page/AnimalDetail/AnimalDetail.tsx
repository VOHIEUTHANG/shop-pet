import "./styles.scss";
import { Button, Carousel, Col, Row, Image } from "antd";
import { useParams } from "react-router-dom";
import { useGetAnimalByIdQuery, IAnimal } from "../../apis/animals";
import MessengerIcon from "../../components/Messenger";
import CartIcon from "../../components/IconCart";


const AnimalDetail = () => {
    const { animalId } = useParams();
    const { data, isLoading } = useGetAnimalByIdQuery(animalId as string) as { data: IAnimal, isLoading: boolean };
    console.log({ data, isLoading });
    return (
        <>
        {
            !isLoading ? (
            <div className="w-full my-10">
                <Row className="animal-row">
                    <Col span={12}>
                        <Carousel className="mb-10">
                            {
                                (data.photos ?? []).map(photo => (
                                    <Image rootClassName="w-full"
                                    src={photo.full} style={{ objectFit: "cover" }}
                                    className="rounded-2xl"
                                    width={600}
                                    height={400}
                                    key={photo.full}
                                    />
                                ))
                            }
                        </Carousel>
                        <div className="flex justify-evenly">
                            <Button type="primary" className="btn-main btn-messenger flex justify-center items-center" icon={<MessengerIcon/>} >
                                Liên Hệ Ngay
                            </Button>
                            <Button type="primary" className="btn-main btn-add-cart flex justify-center items-center" icon={<CartIcon/>} >
                                Thêm Giỏ Hàng
                            </Button>
                        </div>
                    </Col>
                    <Col span={12} className="px-4">
                        <div>
                            <div className="title-detail">
                                <span>
                                    {data.description}
                                </span>
                            </div>
                            <div className="animal-property mt-4">
                                <span style={{ fontWeight: 700, color: "#ff00ff", fontSize: "1.2rem" }}>
                                    Property
                                </span>
                                <div className="w-full mt-4">
                                    <Row>
                                        <Col className="w-64 property-index">
                                            <span>
                                                Name: {data.name}
                                            </span>
                                        </Col>
                                        <Col className="w-64 property-index">
                                            <span>
                                                Breed: {data.breeds?.primary}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="w-64 property-index">
                                            <span>
                                                Gender: {data.gender}
                                            </span>
                                        </Col>
                                        <Col className="w-64 property-index">
                                            <span>
                                                Size: {data.size}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="w-64 property-index">
                                            <span>
                                                Type: {data.type}
                                            </span>
                                        </Col>
                                        <Col className="w-64 property-index">
                                            <span>
                                                Age: {data.age}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
            </div>
            )
            : (
                <>
                </>
            )
        }
        </>
    )
}

export default AnimalDetail;