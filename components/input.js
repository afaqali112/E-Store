import { useMemo } from "react";

const Input = ({
  inputPosition,
  inputBorder,
  inputFontWeight,
  inputFontFamily,
  inputFontSize,
  inputBackgroundColor,
  inputTop,
  inputLeft,
}) => {
  const inputStyle = useMemo(() => {
    return {
      position: inputPosition,
      border: inputBorder,
      fontWeight: inputFontWeight,
      fontFamily: inputFontFamily,
      fontSize: inputFontSize,
      backgroundColor: inputBackgroundColor,
      top: inputTop,
      left: inputLeft,
    };
  }, [
    inputPosition,
    inputBorder,
    inputFontWeight,
    inputFontFamily,
    inputFontSize,
    inputBackgroundColor,
    inputTop,
    inputLeft,
  ]);

  return (
    <div
      className="relative w-[643px] h-8 text-left text-base text-black-50 font-input-text"
      style={inputStyle}
    >
      <div className="absolute h-[6.25%] w-[100.31%] top-[96.87%] right-[-0.16%] bottom-[-3.12%] left-[-0.16%] box-border border-t-[2px] border-solid border-dark" />
      <div className="absolute top-[0%] left-[2.33%] capitalize font-semibold">
        Email address...
      </div>
    </div>
  );
};

export default Input;
