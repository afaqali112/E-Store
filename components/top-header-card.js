const TopHeaderCard = () => {
  return (
    <div className=" flex flex-wrap relative text-dark font-roboto-condensed justify-center items-center">
      <ul className=" flex  flex-row list-none gap-10 capitalize ">
        <li className="text-lg text-slate-600 cursor-pointer hover:scale-110 hover:text-black   duration-100 delay-75">
          home
        </li>
        <li className="text-lg text-slate-600 cursor-pointer hover:scale-110 hover:text-black  duration-100 delay-75">
          Clothing & Shoes
        </li><li className="text-lg text-slate-600 cursor-pointer hover:scale-110 hover:text-black  duration-100 delay-75">
          Wedding & Party
        </li><li className="text-lg text-slate-600 cursor-pointer hover:scale-110 hover:text-black  duration-100 delay-75">
          Toys & Entertainment
        </li>
        <li className="text-lg text-slate-600 cursor-pointer hover:scale-110 hover:text-black  duration-100 delay-75">
          Art & Collectibles
        </li>
      </ul>
    </div>
  );
};

export default TopHeaderCard;
