import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type PropsType = {
  icon?: React.ElementType;
  to: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
  dropDown?: { href: string; title: string }[];
};

const NavTab = ({ icon: Icon, to, children, onClick, dropDown }: PropsType) => {
  const navigate = useNavigate();
  return (
    <div className="relative group">
      <button
        onClick={(e) => {
          onClick && onClick(e);
          navigate(to);
        }}
        className="px-4 h-full py-2 flex items-center transition border-b-2 border-transparent group-hover:border-primary-color group-hover:text-primary-color"
      >
        <span className="uppercase font-semibold text-md tracking-wide whitespace-nowrap">
          {children}
        </span>
        {Icon && <Icon size="1.3rem" />}
      </button>
      <div className="py-4 absolute top-[90%] left-0  bg-white shadow-xl rounded-b-xl transition opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        <ul className="flex flex-col">
          {dropDown?.map((hrefObj, index) => {
            return (
              <Link
                key={index}
                className="rounded-lg tracking-wide px-8 py-3 whitespace-nowrap text-left z-10 hover:bg-amber-200 transition ease-in-out hover:text-gray-dark hover:translate-x-3 uppercase"
                to={hrefObj.href}
              >
                {hrefObj.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavTab;
