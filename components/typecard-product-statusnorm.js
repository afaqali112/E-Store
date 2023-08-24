import { useMemo } from "react";

const TypecardProductStatusnorm = ({
  productImageUrl,
  bagDimensions,
  productPrice,
  productName,
  ribbon = true,
  typecardProductStatusnormPosition,
  typecardProductStatusnormFlex,
  typecardProductStatusnormTop,
  typecardProductStatusnormLeft,
  typecardProductStatusnormWidth,
  topProductWidth,
  topProductAlignSelf,
  bottomProductWidth,
  bottomProductAlignSelf,
  bottomProductTextDecoration,
  divLeft,
  titleProductWidth,
}) => {
  const typecardProductStatusnormStyle = useMemo(() => {
    return {
      position: typecardProductStatusnormPosition,
      flex: typecardProductStatusnormFlex,
      top: typecardProductStatusnormTop,
      left: typecardProductStatusnormLeft,
      width: typecardProductStatusnormWidth,
    };
  }, [
    typecardProductStatusnormPosition,
    typecardProductStatusnormFlex,
    typecardProductStatusnormTop,
    typecardProductStatusnormLeft,
    typecardProductStatusnormWidth,
  ]);

  const topProduct1Style = useMemo(() => {
    return {
      width: topProductWidth,
      alignSelf: topProductAlignSelf,
    };
  }, [topProductWidth, topProductAlignSelf]);

  const bottomProduct1Style = useMemo(() => {
    return {
      width: bottomProductWidth,
      alignSelf: bottomProductAlignSelf,
      textDecoration: bottomProductTextDecoration,
    };
  }, [bottomProductWidth, bottomProductAlignSelf, bottomProductTextDecoration]);

  const div2Style = useMemo(() => {
    return {
      left: divLeft,
    };
  }, [divLeft]);

  const titleProduct1Style = useMemo(() => {
    return {
      width: titleProductWidth,
    };
  }, [titleProductWidth]);

  return (
    <div
      className="relative flex flex-col items-center justify-start gap-[18px] text-center text-xs text-white font-button-small"
      style={typecardProductStatusnormStyle}
    >
      <div className="relative w-[312px] h-[400px]" style={topProduct1Style}>
        <div className="absolute top-[0px] left-[0px] w-[312px] h-[400px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={productImageUrl}
          />
        </div>
        {ribbon && (
          <div className="absolute top-[22px] left-[0px] w-[52px] h-6">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-primary" />
            <div className="absolute h-[66.67%] w-[53.85%] top-[16.67%] left-[23.08%] uppercase font-semibold inline-block">
              hot
            </div>
          </div>
        )}
      </div>
      <div
        className="relative w-[292px] h-[60px] text-left text-base text-dark"
        style={bottomProduct1Style}
      >
        <div className="absolute top-[38px] left-[0px] capitalize text-dark-50">
          {bagDimensions}
        </div>
        <div
          className="absolute top-[38px] left-[232px] capitalize font-semibold text-right"
          style={div2Style}
        >
          {productPrice}
        </div>
        <div
          className="absolute top-[0px] left-[0px] w-[225px] h-[22px]"
          style={titleProduct1Style}
        >
          <div className="absolute top-[0px] left-[0px] capitalize font-semibold">
            {productName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypecardProductStatusnorm;
