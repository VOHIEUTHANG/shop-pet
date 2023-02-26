import { Layout } from "antd";
import logoSrc from "../../assets/images/logos/logo.png";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
const { Footer: FooterLayout } = Layout;

const Footer = () => {
  return (
    <FooterLayout>
      <div className="container">
        <div className="grid grid-cols-3 gap-2">
          <div className="col flex items-center">
            <span className="mr-2">Follow me at</span>
            <a
              href="https://github.com/VOHIEUTHANG"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={30} />
            </a>
          </div>
          <div className="col flex justify-center">
            <div className="ul flex items-center">
              <li className="p-4 uppercase text-md whitespace-nowrap">
                <Link to="/training">Chó cưng</Link>
              </li>
              <li className="p-4 uppercase text-md whitespace-nowrap">
                <Link to="/mock-test">Mèo cưng</Link>
              </li>
              <li className="p-4 uppercase text-md whitespace-nowrap">
                <Link to="/toiec-tips">Thức ăn thú cưng</Link>
              </li>
              <li className="p-4 uppercase text-md whitespace-nowrap">
                <Link to="/Documents">Phụ kiện thú cưng</Link>
              </li>
            </div>
          </div>
          <div className="col">
            <div className="flex justify-end">
              <Link to="/">
                <img width="60px" src={logoSrc} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterLayout>
  );
};

export default Footer;
