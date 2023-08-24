import Image from "next/image";
import Banner from "../public/bannerImg.png"
import  flower1  from "../public/flowerpattern.svg" 
import brand from "../public/brand.png"
import brand1 from "../public/brand1.png"
import brand2 from "../public/brand2.png"
import brand3 from "../public/brand3.png"
import brand4 from "../public/brand4.png"
const brands = [
{
  id:1,
  img:brand
},
{
  id:2,
  img:brand1
},
{
  id:3,
  img:brand2
},
{
  id:4,
  img:brand3
},
{
  id:5,
  img:brand4
},


]

const HeaderSection = () => {
  return (
    <>    <main className="relative flex flex-row mx-28 -top-10  justify-evenly">
    <div className="flex flex-wrap justify-end  absolute h-[100vh]">
      
        <Image src={flower1} className="" alt="Picture of the author" height={1000} width={2500} /> 

    </div>
      
      <div className="flex flex-col items-center justify-center w-[50%] h-[100vh]">
      <h1 className="text-6xl font-bold text-center capitalize"> Best collection</h1>        
      <p className="text-xl px-10  ml-28 py-5 text-start ">You can explore ans shop many differnt collection
from various barands here. </p> 
      <div className=" bg-black text-white px-10 py-3 mr-56  rounded-full hover:scale-110 hover:bg-white hover:text-black cursor-pointer">Shop Now</div>       
        </div>
        <div className="flex flex-col items-center justify-center my-10  ">
        <Image src={Banner} className="" alt="Picture of the author" height={400} width={400} />


          </div>
        
    </main>
    <div className="relative flex flex-row justify-center -top-28 mx-10 items-center my-10">
    {brands.map((item)=>(
      <div className="duration-75 mx-3 hover:scale-110" key={item.id}>
      <Image src={item.img}  alt="Picture of the author" height={200} width={200} />
      </div>
    ))}
      </div>
    </>

  );
};

export default HeaderSection;
