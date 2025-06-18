type TitleProps = {
  title: string;
  title2: string;
};

const FirstTitle = ({ title, title2 }: TitleProps) => (
  <h1 className="text-3xl lg:text-5xl">
    <span className="bg-background_btn_burgern inline-block rounded-full px-4 text-xl font-bold md:hidden lg:text-4xl">
      ONLINE
    </span>
    <span className="text-6xl lg:text-5xl">
      {title}
      <span className="hidden rounded-full bg-background_btn_burger px-4 text-5xl font-bold md:inline-block">
        ONLINE
      </span>
    </span>
    {title2}
  </h1>
);

export default FirstTitle;
