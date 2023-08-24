const TypeinstagramPostStatusno = ({ imageProduct11 }) => {
  return (
    <div className="relative w-[200px] h-[200px] text-center text-29xl text-white font-input-text">
      <div className="absolute top-[0px] left-[0px] w-[200px] h-[200px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageProduct11}
        />
      </div>
      <div className="absolute top-[0px] left-[0px] bg-dark-50 w-[200px] h-[200px] hidden">
        <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_30px)] w-[60px] h-[60px] flex flex-row items-center justify-center">
          <div className="relative flex items-center justify-center w-12 shrink-0">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeinstagramPostStatusno;
