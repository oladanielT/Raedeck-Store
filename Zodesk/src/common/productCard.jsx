import React, { useState } from 'react';


const ProductCard = (props) => {
    const {product, index, active, pageSize, onDetails} = props;
    // const [productD, setProductD] = useState({});
    

    function handleSet(product){
        // setProductD(product[index]);
        onDetails(product)
    }


    return(
                <div onClick={()=>handleSet(product)} className={`border-2 w-[200px] flex flex-col items-center duration-300 px-2 py-2 text-[12px] rounded-sm hover:border-b-black ${index === active % pageSize?"border-b-black":""}`}>
                    <div className='w-full h-[120px] bg-gray-200 rounded-sm mb-1'>
                        <img className='w-full h-[120px]' src={product.img} alt="" />
                    </div>
                    <h2 className='font-bold'>{product.name}</h2>
                    <h4>USD <small className='font-bold'>${product.price}</small></h4>
                    <p>{product.model}</p>
                </div>  

    )
}

export default ProductCard;