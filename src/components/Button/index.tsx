import React, { useEffect } from "react";
import { Button as ButtonAntd } from "antd";
import { useNavigate } from "react-router-dom";

type PropsType = {
  children: string;
  icon?: React.ReactNode;
  size?: "lg" | "md" | "sm";
  href?: string;
  background?: string;
  type?: "primary" | "link" | "text" | "outline" | "dashed ";
  disabled?: boolean;
  loading?: boolean;
  rounded?: number;
  htmlType?: "submit";
  block?: boolean;
  onClick?: (...rest: any) => void;
};

const Button = (props: PropsType) => {
  const navigate = useNavigate();
  const { children, ...excludeChildrenProp } = props;
  const expectProps: { [key: string]: any } = {};
  const styles: { [key: string]: any } = {};

  for (let key in excludeChildrenProp) {
    const value = excludeChildrenProp[key as keyof typeof excludeChildrenProp];
    switch (key) {
      case "size":
        expectProps.size =
          value === "lg" ? "large" : value === "md" ? "middle" : "small";
        break;
      case "type":
        expectProps.type = value === "outline" ? "ghost" : value;
        break;
      case "background":
        styles.backgroundColor = value;
        break;
      case "rounded":
        styles.borderRadius = value;
        break;
      case "href":
        expectProps.onClick = () => {
          navigate(value as string);
        };
        break;
      default:
        expectProps[key] = value;
    }
  }

  return (
    <ButtonAntd
      className="my-btn flex items-center "
      {...expectProps}
      style={styles}
    >
      {children}
    </ButtonAntd>
  );
};

export default Button;
