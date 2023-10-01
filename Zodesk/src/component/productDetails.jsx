import React, {useState} from 'react';
import productData from '../data';
import DescriptionSection from '../common/description';
import Specification from '../common/Specification';
import Pricing from '../common/Pricing';
import Packaging from '../common/packaging';
import Shipping from '../common/Shipping';
import { AiOutlineClose } from 'react-icons/ai';


const ProductDetails = ({productDetails, onHandle}) => {

    const [productD, setProductD] = useState(productData[0]);
    const [details, setDetails] = useState('description');
    const [active, setActive] = useState(false);
    // const [selectedProductFirst, setSelectedProductFirst] = useState(null);
    // const [selectedProductSecond, setSelectedProductSecond] = useState(productDetails);

    

    // const selectProductFirstSet = (productD) => {
    //     setSelectedProductFirst(productD);
    //     setSelectedProductSecond(null);
    // };


    
    // const selectProductSecondSet = () => {
    //     setSelectedProductSecond(product);
    //     setSelectedProductFirst(null);
    // };

    // selectProductSecondSet(productDetails);


    const handleActiveDetails = (content) => {
        setDetails(content);
        setActive(true);
    }

    // const handleProductD = (product) => {
    //     setProductD(product);
    //     setProductD(productDetails);
    // }


    return(
        <div className='w-full  my-2'>
            <div className='flex flex-col md:flex-row gap-4'>
                {/* product image */}
                <div className='w-full md:w-[60%] h-[420px] p-1 flex gap-2 border-2'>
                    <div className='w-[80%] h-full '>
                        <img className='w-full h-full' src={productDetails.img} alt="" />
                    </div>

                    <div className='w-[20%] h-full overflow-hidden '>
                        {productData.map((product, index) =>(
                            <div className='w-full cursor-pointer sm:h-[90px] h-[50px] mb-1 bg-gray-100'>
                                <img className='w-full h-full' src={product.img} alt="" />
                            </div>
                        ))}
                    </div>

                </div>

                {/* product details */}
                <div className='w-full md:w-[40%] px-2  border-2  relative'>
                    <div className='absolute top-2 right-2'>
                        <AiOutlineClose size={15} onClick={()=>onHandle(false)} className='cursor-pointer shadow-sm' />
                    </div>
                    <div className='text-[12px]'>
                        <h1 className='text-xl font-bold'>Threaded Rods</h1>
                        <p>from $0.18  <span>MOQ 100</span></p>
                    </div>
                    <div>
                        <div className='mt-2'>
                            <ul className='grid grid-cols-3 sm:flex sm:flex-wrap text-[12px] justify-between'>
                                <li onClick={()=>handleActiveDetails('description')} className={`cursor-pointer hover:text-white m-1  p-1 border-2 hover:bg-black  text-gray-400 ${active?"text-black font-bold":""}`}>Description</li>
                                <li onClick={()=>handleActiveDetails('specification')} className={`cursor-pointer hover:text-white m-1 p-1 border-2 hover:bg-black  text-gray-400 ${active?"text-black":""}`}>Specification</li>
                                <li onClick={()=>handleActiveDetails('pricing')} className={`cursor-pointer hover:text-white m-1 p-1 border-2 hover:bg-black  text-gray-400 ${active?"text-black":""}`}>Princing</li>
                                <li onClick={()=>handleActiveDetails('packaging')} className={`cursor-pointer hover:text-white m-1 p-1 border-2 hover:bg-black  text-gray-400 ${active?"text-black":""}`}>Packaging</li>
                                <li onClick={()=>handleActiveDetails('shipping')} className={`cursor-pointer hover:text-white m-1 p-1 border-2 hover:bg-black  text-gray-400 ${active?"text-black":""}`}>Shipping </li>
                            </ul>
                            {details === 'description' && <DescriptionSection/>}
                            {details === 'specification' && <Specification/>}
                            {details === 'pricing' && <Pricing/>}
                            {details === 'packaging' && <Packaging/>}
                            {details === 'shipping' &&  <Shipping/>}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetails;
