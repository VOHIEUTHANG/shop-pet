import { ArrowUpOutlined } from "@ant-design/icons";
const GoToTop = () => {
  return (
    <a href="#root">
      <div className="w-[50px] h-[50px] rounded-full shadow-[0px_0px_18px_0px_rgba(0,0,0,0.2)]  fixed bg-main bottom-6 right-4 flex items-center justify-center ">
        <ArrowUpOutlined style={{ fontSize: "1rem" }} />
      </div>
    </a>
  );
};

export default GoToTop;
