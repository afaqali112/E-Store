import { useMemo } from "react";

const TypeitemLargCategoryStatu = ({
  imageSize,
  productImageSize,
  jacketImageUrl,
  productLabel,
  ribbon = true,
  typeitemLargCategoryStatuPosition,
  typeitemLargCategoryStatuWidth,
  typeitemLargCategoryStatuHeight,
  typeitemLargCategoryStatuTop,
  typeitemLargCategoryStatuLeft,
  img18Width,
  img18Height,
  backgroundBackgroundColor,
  hotHeight,
  hotWidth,
  hotTextAlign,
  bottomCategoryWidth,
}) => {
  const typeitemLargCategoryStatuStyle = useMemo(() => {
    return {
      position: typeitemLargCategoryStatuPosition,
      width: typeitemLargCategoryStatuWidth,
      height: typeitemLargCategoryStatuHeight,
      top: typeitemLargCategoryStatuTop,
      left: typeitemLargCategoryStatuLeft,
    };
  }, [
    typeitemLargCategoryStatuPosition,
    typeitemLargCategoryStatuWidth,
    typeitemLargCategoryStatuHeight,
    typeitemLargCategoryStatuTop,
    typeitemLargCategoryStatuLeft,
  ]);

  const img18Style = useMemo(() => {
    return {
      width: img18Width,
      height: img18Height,
    };
  }, [img18Width, img18Height]);

  const background1Style = useMemo(() => {
    return {
      backgroundColor: backgroundBackgroundColor,
    };
  }, [backgroundBackgroundColor]);

  const hot1Style = useMemo(() => {
    return {
      height: hotHeight,
      width: hotWidth,
      textAlign: hotTextAlign,
    };
  }, [hotHeight, hotWidth, hotTextAlign]);

  const bottomCategoryStyle = useMemo(() => {
    return {
      width: bottomCategoryWidth,
    };
  }, [bottomCategoryWidth]);

  return (
    <div
      className="relative w-[648px] h-[648px] text-center text-xs text-white font-button-small"
      style={typeitemLargCategoryStatuStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] w-[648px] h-[648px]"
        style={img18Style}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageSize}
        />
      </div>
      {ribbon && (
        <div className="absolute top-[22px] left-[0px] w-[52px] h-6">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-primary"
            style={background1Style}
          />
          <div
            className="absolute h-[66.67%] w-[53.85%] top-[16.67%] left-[23.08%] uppercase font-semibold inline-block"
            style={hot1Style}
          >
            {productImageSize}
          </div>
        </div>
      )}
      <div
        className="absolute bottom-[0px] left-[0px] bg-black box-border w-[648px] hidden flex-row py-[15px] px-3.5 items-center justify-between text-left text-base border-[1px] border-solid border-black"
        style={bottomCategoryStyle}
      >
        <div className="relative capitalize font-semibold">
          {jacketImageUrl}
        </div>
        <div className="relative capitalize font-semibold text-right">
          {productLabel}
        </div>
      </div>
    </div>
  );
};

export default TypeitemLargCategoryStatu;
