import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Layout } from "antd";
const { Content } = Layout;

type PropsType = {
  children: JSX.Element;
};

const MainLayout = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <Content className="grow flex items-stretch overflow-x-hidden">
        {children}
      </Content>
      <Footer />
    </>
  );
};

export default MainLayout;
