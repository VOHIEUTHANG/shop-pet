import { Card as CardAntd } from "antd";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/common";

export type PropsTypes = {
  href: string;
  imgUrl: string;
  price?: number;
  title: string;
  content?: string;
};

const Card = ({ href, imgUrl, price, title, content }: PropsTypes) => {
  return (
    <Link to={href} className="h-full">
      <CardAntd
        className="rounded-md overflow-hidden h-full"
        hoverable
        cover={
          <div className="overflow-hidden group">
            <img
              className="object-cover w-full h-[260px] transition-all ease-in-out duration-500 group-hover:scale-125"
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
          <p className="mb-1 font-semibold text-xl line-clamp-1">{title}</p>
          <p className="text-txt-light mt-1 text-base line-clamp-5">
            {content}
          </p>
          {price && (
            <h3 className="mb-1 text-lg font-semibold text-primary-color-strong">
              Giá {formatCurrency(price)}
            </h3>
          )}
        </div>
      </CardAntd>
    </Link>
  );
};

export default Card;
