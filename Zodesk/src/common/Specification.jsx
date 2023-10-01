import React from 'react';


function Specification(){
    return (
        <div className='w-full py-6 flex flex-col gap-4 text-[15px] '>
            <p>Thread size: <span className='px-1 border-2 mx-1'>M2</span> <span className='px-1 border-2 mx-1'>M3</span> <span className='px-1 mx-1 border-2'>M5</span></p>
            <p>Length: <span className='px-1 border-2 mx-1'>12"</span> <span className='px-1 border-2 mx-1'>13"</span> <span className='px-1 mx-1 border-2'>Custom Length</span></p>
            <p>Material: <span className='px-1 border-2 mx-1'>SS304</span> <span className='px-1 border-2 mx-1'>SS316</span></p>
            <p>Threading: <span className='px-1 border-2 mx-1'>Fully Threaded</span></p>
            <p>Product ID: <span className='px-1 border-2 mx-1'>65748392890</span></p>

            <div className='relative'>
                <p className='bg-gray-100 my-4 p-1 text-[14px] before:content-none before:bg-blue-800 before:w-2 before:h-10 '>Select all filters to determine the corresponding unit price</p>
            </div>
          
        </div>
    )
}

export default Specification;