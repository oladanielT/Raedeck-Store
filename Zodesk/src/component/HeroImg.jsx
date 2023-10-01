import React, {useState, useEffect} from 'react';
import ProductCard from '../common/productCard';
import productData from '../data';
import ProductDetails from './productDetails';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';



function HeroImg(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const pageSize = 5;
    const [autoPlay, setAutoPlay] = useState(true);
    const [showProductDetails, setProductDetailShow] = useState(false);
    const [productDetails, setProductDetails] = useState({});

    const startIndex = currentIndex%productData.length;
    const endIndex = (currentIndex + pageSize) % productData.length;

    // const startIndex = (  )

    const displayedCard = startIndex < endIndex ? productData.slice(startIndex, endIndex)
    : [...productData.slice(startIndex), ...productData.slice(0, endIndex)];



    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
        setAutoPlay(false);
      };

      const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => {
                const next = prevIndex === 0;
                return next ? productData.length - 1: prevIndex - 1; 
            }
        );
        setAutoPlay(false);
      };

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if(autoPlay){
    //              handleNext();
    //         }
         
          
    //     }, 3000); // Change the interval time as needed (e.g., 5000ms = 5 seconds)
      
    //     return () => {
    //       clearInterval(intervalId); // Clear the interval on component unmount
    //     };
    //   }, []);

      const handleProductD = (product) =>{
        setProductDetailShow(true);
        setProductDetails(product);
      }


    return(
        <div className='w-full p-4'>
            <div className='flex flex-col'>
                {/* hero image */}
                {showProductDetails?
                <ProductDetails onHandle={setProductDetailShow}  productDetails={productDetails}/>
                :
                    <div className='w-full h-[350px] border-2'>
                        <img className='w-full h-[350px] object-cover' src="https://images.unsplash.com/photo-1488235331161-a610983be307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="hero img" />
                    </div>
            }
      

                <div>
                    <div className='flex justify-between items-end p-2 mt-4 border-2'>
                        {/* content head */}
                        <div>
                            <h1 className='font-bold'>High in Demand</h1>
                            <p className='text-[14px]'>Selling like it's the last one on earth.</p>  
                        </div>

                        {/* next/previous button */}
                        <div  className='flex items-center gap-3'>
                            <AiOutlineLeft onClick={handlePrevious} size={25} className='p-1 cursor-pointer  rounded-lg border-2'/>
                            <AiOutlineRight onClick={handleNext} size={25} className='p-1 cursor-pointer  rounded-lg border-2'/>
                        </div>

                    </div>
                </div>

                     {/* product containers */}
                <div className=' my-4'>
                    <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-hidden h-[230px] gap-2 md:gap-4 w-full`}>
                        {displayedCard.map((product,index)=>(
                            <ProductCard onDetails={handleProductD}  key={index} product={product} index={index} pageSize={pageSize} active={currentIndex} /> 
                        ))}
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default HeroImg;