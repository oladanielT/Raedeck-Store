import React from 'react';

function Request(){



    return(
        <div className='w-full  my-8 px-4'>
            {/* request form */}
            <div className='w-full my-8  grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div className=' col-span-1 p-7 border-2 flex flex-col'>
                        <h1 className='my-5 text-2xl font-bold'>Request for Quotation</h1>
                        <form action="" className='flex flex-col gap-2'>
                            <input className='focus:outline-none w-full' type="text" name="" placeholder='What are you looking for?' id="" />
                            <input type="text" name="" placeholder='Quantity' id="" className='focus:outline-none w-full' />
                            <input type="text" name="" placeholder='Your Name' id="" className='focus:outline-none w-full' />
                            <input type="text" name="" placeholder='Email Address' id="" className='focus:outline-none w-full' />
                            <div className='gap-4 sm:flex mt-4 mb-1 items-center'>
                                <span className='w-full my-2 h-[45px] md:hidden flex justify-center items-center gap-1 bg-gray-100 '><input type="file" name="" id="" className='hidden'/><span className='font-bold'>Upload file</span> (optional)</span>
                                <button className='w-full h-[45px] py-2 bg-black text-white'>Submit</button>                       
                            </div>


                        </form>
                        <p className='text-center text-[14px]'><span className='font-bold'>success</span> You will receive a reply shortly.</p>
                    </div>

                    {/* image uploade */}
                    <div className='border-2 col-span-2 hidden md:flex items-center justify-center'>
                        <div>
                            <input type="file" name="" id="" />
                        </div>
                </div>
            </div>

            <div className='w-full my-4 px-6 text-sm py-3 bg-yellow-200 flex justify-between items-center'>
                <p className='text-center'><span className='font-bold'>We are Africa's most reliable sourcing agent -- </span>easy to work with and hard to come by.</p>
                <button className='border-black border-2 p-2 hidden lg:block '>Send us an email</button>
            </div>
            <button className='w-full py-2 border-2 border-black lg:hidden'>Send us an email</button>
   
        </div>
    )
}

export default Request;
