import Image from "next/image";
import item1 from "../public/itemcategory1.png";
import item2 from "../public/itemcategory2.png";
import item3 from "../public/itemcategory3.png";
import item4 from "../public/itemcategory4.png";
import item5 from "../public/imagecategory.png";
const ExploreNewAndPopularStylesCont = () => {
  return (
    <section className="flex flex-row  h-[40rem] ">
    
 
      <div className="  mt-4">
        

     <h1 className=" text-3xl font-bold  mt-52 mb-10 -rotate-90">Explore New and Popular Styles</h1>
      </div>
    
    <div className="mt-16 relative -ml-36">

      <div className="grid grid-cols-5 grid-flow-col h-[50vh] w-[150vh] gap-3">
        <div className="group  relative  overflow-hidden  cursor-pointer row-span-2 col-span-2">
        <Image className="hover:blur-md duration-300 delay-75" src={item5} alt="item5"  />
<div className="group flex flex-col text-center  items-center justify-center absolute translate-y-[15rem]     group-hover:translate-y-0 duration-500 transition-all  delay-75 top-1/2 left-16   overflow-hidden   ">
  
        <span className="  text-center  font-bold  ">lorem 
         dfsdfs fdsfdsfd dfsfddsfds fds </span>
</div>
         
          </div>
          <div className=" group  relative  cursor-pointer overflow-hidden  ">
          <Image className="hover:blur-md duration-300 delay-75" src={item1} alt="item1" />
          <div className="group flex flex-col text-center  items-center justify-center absolute translate-y-[15rem]     group-hover:translate-y-0 duration-500 transition-all  delay-75 top-1/2   overflow-hidden   ">
  
  <span className="  text-center  font-bold  ">lorem 
   dfsdfs fdsfdsfd dfsfddsfds fds </span>
</div>
          </div>
        
          <div className=" group  relative  cursor-pointer overflow-hidden  ">
          <Image className="hover:blur-md duration-300 delay-75" src={item2} alt="item2" />
          <div className="group flex flex-col text-center  items-center justify-center absolute translate-y-[15rem]     group-hover:translate-y-0 duration-500 transition-all  delay-75 top-1/2    overflow-hidden   ">
  
        <span className="  text-center  font-bold  ">lorem 
         dfsdfs fdsfdsfd dfsfddsfds fds </span>
</div>
          </div>
          <div className=" group  relative cursor-pointer overflow-hidden ">
          <Image className="hover:blur-md duration-300 delay-75" src={item3} alt="item3" />
          <div className="group flex flex-col text-center  items-center justify-center absolute translate-y-[15rem]     group-hover:translate-y-0 duration-500 transition-all  delay-75 top-1/2     overflow-hidden   ">
  
        <span className="  text-center  font-bold  ">lorem 
         dfsdfs fdsfdsfd dfsfddsfds fds </span>
</div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden">
  <Image className="hover:blur-md focus-within:blur-md duration-300 delay-75" src={item4} alt="item4" />
  <div className="group flex flex-col text-center  items-center justify-center absolute translate-y-[15rem] group-hover:translate-y-0 focus-within:translate-y-0 duration-500 transition-all delay-75 top-1/2 overflow-hidden">
    <span className="text-center font-bold">lorem dfsdfs fdsfdsfd dfsfddsfds fds</span>
  </div>
</div>


          
        </div>
    </div>
      
        </section>
  );
};

export default ExploreNewAndPopularStylesCont;
