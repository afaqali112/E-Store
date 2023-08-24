
import Image from "next/image";
import Link from "next/link";

const TrendingSection = () => {
  return (
    <section className="flex flex-col  relative  justify-around    ">
      <div className=" flex flex-row  my-5 justify-center">
        <h1 className="  relative text-[inherit] capitalize font-bold text-5xl ">
          subscribe to the newsletter
        </h1>
      </div>
      <nav className=" flex flex-row   my-2 justify-around">
        {/* create sub navigation bar */}
        <div className="  ">
        <ul className=" flex flex-row text-xl first-letter gap-10 ">
          <li className=" ">
            <Link href="/">
              All products
            </Link>
          </li>
          <li className=" ">
            <Link href="/">
              T-Shirts
            </Link>
          </li>
          <li className=" ">
            <Link href="/">
              Hoodies
            </Link>
          </li>
          <li className=" ">
            <Link href="/">
              Jackets
            </Link>
          </li>
          </ul>
        </div>
        <div className="   ">
          <button className="    text-xl font-bold bg-black rounded-full items-center text-center text-white p-2 ">
            <Link className="p-4" href="/">
              Filter
            </Link>
          </button>
        </div>

       
      </nav>
    
        <div className=" grid grid-rows-4   ">
          <div className="  ">
            <Image src="/itemcategory1.png" alt="item1" width={300} height={400} />
            </div>
            <div className="  ">
            <Image src="/itemcategory1.png" alt="item1" width={300} height={400} />
            </div>
            <div className="  ">
            <Image src="/itemcategory1.png" alt="item1" width={300} height={400} />
            </div>
          </div>
      
     
    </section>
  );
};

export default TrendingSection;
