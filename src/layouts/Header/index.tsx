import React from "react";
import NavTab from "../../components/NavTab";
import logoUrl from "../../assets/images/logos/logo-full.png";
import { Link } from "react-router-dom";
import { Input, ConfigProvider } from "antd";
import Avatar from "../../components/Avatar";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../auth/authSlice";
import { Space, Badge, Dropdown, Divider } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Button from "../../components/Button";
import { isEmpty } from 'lodash'; 
import { Image } from "antd";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = [
    {
      key: 1,
      label: (
        <div className="p-1 flex justify-between items-center gap-10">
          <Image
            preview={false}
            style={{ borderRadius: 10 }}
            width={50}
            src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/5x6NTLa0UfN3dKE6zio8pl/609b46ba90fa804a124d151c90311d16/cGV4ZWxzLWNoZXZhbm9uLXBob3RvZ3JhcGh5LTExMDgwOTlfXzFfLmpwZw/990w-660h/c%C3%A1ch-nu%C3%B4i-ch%C3%B3.jpg"
          />
          <Space direction="vertical" size={2}>
            <p style={{ textAlign: "right" }}>Chó Phú Quốc</p>
            <p>1.220.000 VND x 1</p>
          </Space>
        </div>
      ),
    },
    {
      key: 2,
      label: (
        <div className="p-1 flex justify-between items-center gap-10">
          <Image
            preview={false}
            style={{ borderRadius: 10 }}
            width={50}
            src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/20/975861/5-Giong-Cho-Long-Xu-.jpg"
          />
          <Space direction="vertical" size={2}>
            <p style={{ textAlign: "right" }}>Mèo múp</p>
            <p>200.000 VND x 3</p>
          </Space>
        </div>
      ),
    },
    {
      key: 3,
      label: (
        <div className="p-1 flex justify-between items-center gap-10">
          <Image
            preview={false}
            style={{ borderRadius: 10 }}
            width={50}
            src="https://lh4.googleusercontent.com/sd8RP2IdpQC_39IJ9DEPq_LUQkp97u2Pki38oxGLbI8SDAYy3Tx8O1Gomhqm2ErhtxemRyFifDIZqORfSI0b_O4Yn-2tf8sCCwnUZzgHOrwqCFLhCQtjaTFhKcIyWheOZcMBq9_1"
          />
          <Space direction="vertical" size={2}>
            <p style={{ textAlign: "right" }}>Vẹt ấn độ</p>
            <p>120.000 VND x 2</p>
          </Space>
        </div>
      ),
    },
  ];
  return (
    <header id="header" className=" bg-main shadow sticky top-0 z-50">
      <div className="container">
        <div className="header-wrapper flex h-auto items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img className="max-h-[70px]" src={logoUrl} alt="" />
            </Link>
          </div>
          <div className="pt-4 pb-2 header-center flex flex-col justify-between gap-3">
            <div className="search w-full">
              <ConfigProvider>
                <Search
                  size="large"
                  placeholder="Tìm kiếm ..."
                  onSearch={onSearch}
                  enterButton
                />
              </ConfigProvider>
            </div>
            <div className="nav h-full">
              <ul className="nav-list flex">
                <NavTab
                  dropDown={[
                    { href: "/training/listening/1", title: "Chó Husky" },
                    {
                      href: "/training/listening/2",
                      title: "Chó Shipa",
                    },
                    {
                      href: "/training/listening/3",
                      title: "Chó Alabai",
                    },
                    { href: "/training/listening/4", title: "Chó Phú Quốc" },
                    {
                      href: "/training/reading/5",
                      title: "Chó Alaska",
                    },
                    {
                      href: "/training/reading/6",
                      title: "Chó Bắc Hà",
                    },
                    {
                      href: "/training/reading/part-7",
                      title: "Chó Beggie",
                    },
                  ]}
                  to="/training"
                >
                  Chó Cưng
                </NavTab>
                <NavTab
                  dropDown={[
                    { href: "/mock-test/mini", title: "Mèo Anh lông ngắn" },
                    {
                      href: "/mock-test/full",
                      title: "Mèo ba tư",
                    },
                    {
                      href: "/mock-test/full",
                      title: "Mèo Scottish tai cụp",
                    },
                    {
                      href: "/mock-test/full",
                      title: "Mèo toyger ",
                    },
                  ]}
                  to="/mock-test"
                >
                  Mèo cưng
                </NavTab>
                <NavTab
                  dropDown={[
                    { href: "/mock-test/mini", title: "Vẹt" },
                    {
                      href: "/mock-test/full",
                      title: "Sóc",
                    },
                    {
                      href: "/mock-test/full",
                      title: "Thỏ",
                    },
                    {
                      href: "/mock-test/full",
                      title: "Rồng nam mỹ",
                    },
                  ]}
                  to="/toiec-tips"
                >
                  Thú cưng khác
                </NavTab>
                <NavTab
                  dropDown={[
                    { href: "/mock-test/mini", title: "Thức ăn cho chó" },
                    {
                      href: "/mock-test/full",
                      title: "Thức ăn cho mèo",
                    },
                    {
                      href: "/mock-test/full",
                      title: "Thức ăn khác",
                    },
                  ]}
                  to="/toiec-tips"
                >
                  Thức ăn
                </NavTab>
                <NavTab
                  dropDown={[
                    { href: "/mock-test/mini", title: "Quần áo" },
                    {
                      href: "/mock-test/full",
                      title: "Dây xích",
                    },
                    {
                      href: "/mock-test/full",
                      title: "Chỗ ở",
                    },
                    {
                      href: "/mock-test/full",
                      title: "Dụng cụ khác",
                    },
                  ]}
                  to="/vocabulary"
                >
                  Phụ kiện
                </NavTab>
              </ul>
            </div>
          </div>

          <div className="user">
            {!isEmpty(currentUser) ? (
              <Space size="large">
                <Avatar name={currentUser.fullName} avatar={currentUser.imgUrl}/>
                <Dropdown
                  placement="bottomRight"
                  overlayStyle={{ minWidth: 200 }}
                  menu={{ items: cartItems }}
                  dropdownRender={(menu) => (
                    <div>
                      {React.cloneElement(menu as React.ReactElement)}
                      <Divider style={{ margin: 0 }} />
                      <div className="flex p-3 items-end flex-col gap-2">
                        <div>
                          <span className="text-right mr-2">Tổng</span>
                          <span className="text-base text-primary-color">
                            1.400.000 VND
                          </span>
                        </div>
                        <Button rounded={4} size="md" type="outline">
                          Mua hàng
                        </Button>
                      </div>
                    </div>
                  )}
                >
                  <Badge count={5}>
                    <ShoppingCartOutlined style={{ fontSize: 28 }} />
                  </Badge>
                </Dropdown>
              </Space>
            ) : (
              <div>
                <Link
                  className="hover:underline font-semibold uppercase hover:text-primary-color"
                  to="/user/login"
                >
                  Đăng nhập
                </Link>
                <span> / </span>
                <Link
                  className="hover:underline font-semibold uppercase hover:text-primary-color"
                  to="/user/register"
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
