import TypeinstagramPostStatusno from "./typeinstagram-post-statusno";
import Input from "./input";
import TypelineStatusnormalDire from "./typeline-statusnormal-dire";

const NewsletterInstagramContainer = () => {
  return (
    <section className="absolute top-[4833px] left-[205px] bg-black-5 flex flex-col py-[100px] px-[300px] items-center justify-start gap-[70px] text-center text-31xl text-dark font-input-text">
      <div className="self-stretch flex flex-col items-center justify-center gap-[60px]">
        <h1 className="m-0 flex flex-row items-start justify-between text-[inherit] font-inherit">
          <div className="relative capitalize font-medium">
            Follow products and discounts on Instagram
          </div>
        </h1>
        <div className="self-stretch flex flex-row items-center justify-between">
          <TypeinstagramPostStatusno imageProduct11="/imageproduct12@2x.png" />
          <TypeinstagramPostStatusno imageProduct11="/imageproduct111@2x.png" />
          <TypeinstagramPostStatusno imageProduct11="/imageproduct9@2x.png" />
          <TypeinstagramPostStatusno imageProduct11="/imageproduct13@2x.png" />
          <TypeinstagramPostStatusno imageProduct11="/imageproduct10@2x.png" />
          <TypeinstagramPostStatusno imageProduct11="/imageproduct8@2x.png" />
        </div>
      </div>
      <div className="relative w-[760px] h-[165px]">
        <Input
          inputPosition="absolute"
          inputBorder="none"
          inputFontWeight="600"
          inputFontFamily="Roboto"
          inputFontSize="16px"
          inputBackgroundColor="transparent"
          inputTop="133px"
          inputLeft="0px"
        />
        <TypelineStatusnormalDire
          icon={false}
          typelineStatusnormalDirePosition="absolute"
          typelineStatusnormalDireCursor="pointer"
          typelineStatusnormalDireBorder="none"
          typelineStatusnormalDirePadding="0"
          typelineStatusnormalDireBackgroundColor="transparent"
          typelineStatusnormalDireTop="133px"
          typelineStatusnormalDireLeft="669px"
          frameDivBoxSizing="border-box"
          sUBMITDisplay="inline-block"
        />
        <div className="absolute top-[0px] left-[27px] w-[707px] flex flex-row items-start justify-start">
          <h1 className="m-0 flex-1 relative text-[inherit] capitalize font-medium font-inherit">
            Or subscribe to the newsletter
          </h1>
        </div>
      </div>
    </section>
  );
};

export default NewsletterInstagramContainer;
