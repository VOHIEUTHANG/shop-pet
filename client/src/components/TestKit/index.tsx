import { Link } from "react-router-dom";

export type PropsType = {
  href: string;
  name: string;
  descriptions: string;
  backgroundImgUrl?: string;
};

const TestKit = ({ href, name, descriptions, backgroundImgUrl }: PropsType) => {
  let containerClasses = "p-6 shadow-sm rounded-md ";
  const containerStyles: { [key: string]: any } = {};
  if (backgroundImgUrl) {
    containerClasses += `bg-center bg-no-repeat bg-cover`;
    containerStyles.backgroundImage = `url(${backgroundImgUrl})`;
  } else {
    containerClasses +=
      "bg-gradient-to-tr from-primary-color to-secondary-color";
  }

  return (
    <div style={containerStyles} className={containerClasses}>
      <div className="p-2 mb-2">
        <p className="font-semibold text-2xl mb-4 uppercase text-white tracking-wider">
          {name}
        </p>
        <p className="text-white text-lg text-shadow line-clamp-2">
          {descriptions}
        </p>
      </div>
      <div className="flex justify-end">
        <Link to={href}>
          <div className="shadow-sm rounded-xl bg-white px-8 py-3 font-semibold uppercase hover:shadow-2xl transition ease-in-out duration-600 text-primary-color">
            Join
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TestKit;
