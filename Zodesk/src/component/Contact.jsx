import React from 'react';
import logoo from '../images/logoo.png';


function Contact(){

    return(
        <div className='w-full px-4'>
            <div className='flex items-center gap-3'>
                <img src={logoo} className='w-[40px] h-[30px] object-contain' alt="" />
                <h1 className='font-bold text-2xl'>Raedeck</h1>
            </div>

            <div className='my-8 '>
                <h1 className='text-[15px] font-bold my-2'>Contact Us</h1>
                {/* Admin contacts */}
                <div className='grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12'>
                <div className='mb-6 border-2 p-2'>
                    <div className='flex flex-col  items-between gap-10 border-t-4 py-3 my-2 border-t-black'>
                        <div>
                                <span className='text-lg font-bold'>Mandy Ben</span>
                                <p className='text-gray-500 text-[14px] font-bold'>Head of customer first</p>
                        </div>
                        <div className='text-[14px] text-gray-600 font-bold'>
                            <a href="" className='underline my-1 py-1'>mandyben12@gmail.com</a>
                            <p>Chat on Whatsapp <span></span>Online</p>
                        </div>
                    </div>
                </div>   
                 {/*End of each contacts  */}

                 <div className='mb-6 border-2 p-2'>
                    <div className='flex flex-col items-between gap-10 border-t-4 py-3 my-2 border-t-black'>
                        <div>
                                <span className='text-lg font-bold'>Mandy Ben</span>
                                <p className='text-gray-500 text-[14px] font-bold'>Head of customer first</p>
                        </div>
                        <div className='text-[14px] text-gray-600 font-bold'>
                            <a href="" className='underline my-1 py-1'>mandyben12@gmail.com</a>
                        </div>
                    </div>
                </div>   
                 {/*End of each contacts  */}

                 <div className='mb-6 border-2 p-2'>
                    <div className='flex flex-col items-between gap-10 border-t-4 py-3 my-2 border-t-black'>
                        <div>
                                <span className='text-lg font-bold'>Mandy Ben</span>
                                <p className='text-gray-500 text-[14px] font-bold'>Head of customer first</p>
                        </div>
                        <div className='text-[14px] text-gray-600 font-bold'>
                            <a href="" className='underline my-1 py-1'>mandyben12@gmail.com</a>
                        </div>
                    </div>
                </div>   
                 {/*End of each contacts  */}

                 <div className='mb-6 border-2 p-2'>
                    <div className='flex flex-col items-between gap-10 border-t-4 py-3 my-2 border-t-black'>
                        <div>
                                <span className='text-lg font-bold'>Mandy Ben</span>
                                <p className='text-gray-500 text-[14px] font-bold'>Head of customer first</p>
                        </div>
                        <div className='text-[14px] text-gray-600 font-bold'>
                            <a href="" className='underline my-1 py-1'>mandyben12@gmail.com</a>
                        </div>
                    </div>
                </div>   
                 {/*End of each contacts  */}


            </div>

            </div>
                
        </div>
    )
}

export default Contact;