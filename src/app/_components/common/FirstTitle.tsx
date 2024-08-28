type TitleProps = {
  title: string;
  title2: string;
};

const FirstTitle = ({ title, title2 }: TitleProps) => (
  <h1 className="text-4xl lg:text-5xl">
    <span className="inline-block rounded-full bg-background_span px-4 text-xl font-bold md:hidden lg:text-4xl">
      ONLINE
    </span>
    <span className="text-7xl lg:text-5xl">
      {title}
      <span className="hidden rounded-full bg-background_btn px-4 text-5xl font-bold md:inline-block">
        ONLINE
      </span>
    </span>
    {title2}
  </h1>
);

export default FirstTitle;
