import React from 'react'
import{ BiSearch,BiSolidUser,BiSolidShoppingBag} from 'react-icons/bi';
import icon1 from '../public/group-97.svg'
import icon2 from '../public/group-971.svg'
import Image from 'next/image';
const FirstNav = () => {
  return (
    <div  className='flex font-roboto-condensed   justify-evenly my-5 items-center'>
      <div className='flex items-center justify-start '> 
      <BiSearch className='text-2xl mr-2 text-slate-600 hover:text-slate-900 hover:scale-110 duration-75 delay-75 cursor-pointer' />
      </div>
      <div className=' flex justify-center  items-center cursor-pointer'> 
       <Image src={icon1} alt='icon1' width={35} height={35} />
       <h1 className='text-3xl font-bold text-slate-600 font-serif capitalize mx-1 '> CORAL  </h1>
       <Image src={icon2} alt='icon2' width={35} height={35} />

       </div>
      <div className='flex flex-row items-center justify-end'> 
      <div className='flex flex-wrap  items-center hover:text-slate-900 hover:scale-110 duration-75 delay-75 cursor-pointer font-light text-lg'> <BiSolidUser className='text-xl mr-2 text-slate-600 hover:text-slate-900 hover:scale-110 duration-75 delay-75 cursor-pointer' />  
      
      Account
      </div>
      <div className='flex flex-wrap hover:text-slate-900 hover:scale-110 duration-75 delay-75  ml-7 items-center cursor-pointer font-light text-lg'> <BiSolidShoppingBag className='text-xl mr-2 text-slate-600 hover:text-slate-900 hover:scale-110 duration-75 delay-75 cursor-pointer' />  
      
      Shopping
      </div>
       </div>
      

    </div>
  )
}

export default FirstNav