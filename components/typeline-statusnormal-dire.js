import { useMemo } from "react";

const TypelineStatusnormalDire = ({
  icon = true,
  typelineStatusnormalDirePosition,
  typelineStatusnormalDireCursor,
  typelineStatusnormalDireBorder,
  typelineStatusnormalDirePadding,
  typelineStatusnormalDireBackgroundColor,
  typelineStatusnormalDireTop,
  typelineStatusnormalDireLeft,
  frameDivBoxSizing,
  sUBMITDisplay,
}) => {
  const typelineStatusnormalDireStyle = useMemo(() => {
    return {
      position: typelineStatusnormalDirePosition,
      cursor: typelineStatusnormalDireCursor,
      border: typelineStatusnormalDireBorder,
      padding: typelineStatusnormalDirePadding,
      backgroundColor: typelineStatusnormalDireBackgroundColor,
      top: typelineStatusnormalDireTop,
      left: typelineStatusnormalDireLeft,
    };
  }, [
    typelineStatusnormalDirePosition,
    typelineStatusnormalDireCursor,
    typelineStatusnormalDireBorder,
    typelineStatusnormalDirePadding,
    typelineStatusnormalDireBackgroundColor,
    typelineStatusnormalDireTop,
    typelineStatusnormalDireLeft,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      boxSizing: frameDivBoxSizing,
    };
  }, [frameDivBoxSizing]);

  const sUBMITStyle = useMemo(() => {
    return {
      display: sUBMITDisplay,
    };
  }, [sUBMITDisplay]);

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-[10px] text-center text-base text-black font-input-text"
      style={typelineStatusnormalDireStyle}
    >
      <div
        className="flex flex-row py-0 px-4 items-center justify-center gap-[4px]"
        style={frameDivStyle}
      >
        {icon && (
          <div className="w-5 h-5 flex flex-row items-center justify-center">
            <div className="relative flex items-center justify-center w-4 shrink-0">
              
            </div>
          </div>
        )}
        <div
          className="relative capitalize font-button-small"
          style={sUBMITStyle}
        >
          SUBMIT
        </div>
      </div>
      <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-black" />
    </div>
  );
};

export default TypelineStatusnormalDire;
