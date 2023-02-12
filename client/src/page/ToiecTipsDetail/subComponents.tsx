export const SectionParent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h2 className="text-2xl my-4 font-bold text-primary-color-strong">
        {title}
      </h2>
      <div className="ml-2">{children}</div>
    </div>
  );
};
export const SectionChild = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className="text-xl my-2 font-semibold ">{title}</h3>
      <div className="ml-2">{children}</div>
    </div>
  );
};
