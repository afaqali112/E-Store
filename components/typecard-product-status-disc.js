import { useMemo } from "react";

const TypecardProductStatusDisc = () => {
  

  return (
    <div
      className="relative flex flex-col items-center justify-start gap-[18px] text-center text-xs text-white font-button-small"
    
    >
      <div className="relative w-[312px] h-[400px]" >
        <div className="absolute top-[0px] left-[0px] w-[312px] h-[400px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
           
          />
        </div>
        
      </div>
      <div
        className="relative w-[292px] h-[60px] text-left text-base text-dark-50"
      >
        <div className="absolute top-[38px] left-[0px] capitalize">
        </div>
        <div
          className="absolute top-[38px] left-[232px] capitalize font-semibold text-primary text-right"
        >
        </div>
        <div
          className="absolute top-[40px] left-[168px] text-sm [text-decoration:line-through] capitalize font-semibold text-right"
        >
        </div>
        <div
          className="absolute top-[0px] left-[0px] w-[225px] h-[22px] text-dark"
        >
          <div className="absolute top-[0px] left-[0px] capitalize font-semibold">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypecardProductStatusDisc;
