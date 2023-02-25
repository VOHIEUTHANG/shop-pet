import NavTab from "../../components/NavTab";
import logoUrl from "../../assets/images/logos/logo-full.png";
import { Link } from "react-router-dom";
import { Input, ConfigProvider } from "antd";
import Avatar from "../../components/Avatar";
const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const Header = () => {
  const isLogin = false;
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
            {isLogin ? (
              <Avatar/>
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
