import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

export type TipsCartType = {
  part: number;
  name: string;
  desc: string;
  imgUrl: string;
  href: string;
};
const ToiecCard = ({ part, name, desc, imgUrl, href }: TipsCartType) => {
  return (
    <Link to={href} className="h-full">
      <Card
        className="rounded-md overflow-hidden h-full"
        hoverable
        cover={
          <div className="overflow-hidden group">
            <img
              className="object-cover w-full h-[250px] transition-all ease-in-out duration-500 group-hover:scale-125"
              alt="Photographs"
              src={
                imgUrl ??
                "https://toeic-testpro.com/_next/image/?url=%2Fimages%2Fapp%2Ftoeic%2Fpart-1.png&w=1920&q=75"
              }
            />
          </div>
        }
      >
        <div className="">
          <h3 className="mb-1 font-semibold text-xl">Part {part}</h3>
          <p className="mb-2 font-semibold text-xl line-clamp-1">{name}</p>
          <p className="text-txt-light font-light mt-1 text-base line-clamp-6">
            {desc}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default ToiecCard;
