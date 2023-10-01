import React, {useState} from 'react';
import logoo from '../images/logoo.png';


function Navbar(){
   

    const price = ["EUR - Euro","GBP - Brithish","AED - Australian","USD - American $"];
    const [selected, setSelected] = useState(price[0]);
    const [isOpen, setIsOpen] = useState(false);

    function handleSelect(option){
        setSelected(option);
        setIsOpen(!isOpen)

    }


    return(
        <div className='w-full px-4 py-2'>
            <div className='flex justify-between items-end '>
                <div className='flex justify-start items-center gap-3'>
                    <div className='flex items-center gap-3'>
                        <img className='w-[40px] h-[30px] object-center ' src={logoo} alt="logo" />
                        <h1 className='text-xl font-bold'>Raedeck</h1>
                    </div>
                    
                    <small className='mt-2 text-[14px]'>Africa's Most Reliable Camera Shop</small>  
                </div>
                <div className='flex items-center gap-4'>
                    <div className='relative cursor-pointer duration-500 transition-all ease-in-out hidden sm:block text-sm' >
                        <span className='text-gray-500 hover:text-black' onClick={()=>setIsOpen(!isOpen)}>
                            {selected}
                        </span>
                        {
                            isOpen?
                            <div className='absolute w-[150px] border-2 shadow-md bg-gray-50  text-center py-6 px-1  rounded-xl right-1 mt-2 duration-700'>
                                <ul>
                                    {price.map((p,i)=>(
                                        <li className='my-1 hover:bg-gray-200 w-full rounded-md py-1' key={i} onClick={()=>handleSelect(p)}>{p}</li>
                                    ))}
                                </ul>           
                            </div>  
                            :
                            ""
                        }



                    </div>
                   
                    <button className='border-2 px-2 py-1 hover:scale-105 border-black hidden sm:block '>Submit RFQ</button>
                </div>
            </div>


          

        </div>
    )
}

export default Navbar;