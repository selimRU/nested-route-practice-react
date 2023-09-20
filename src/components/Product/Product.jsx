import React from 'react';

const Product = ({ product, handleDetails }) => {
    console.log(product);
    const { brand, description, id, price, thumbnail } = product;
    return (
        <div className='h-[500px] shadow-md p-4 text-center rounded-md'>
            <img className='object-fit-cover w-[250px] mx-auto h-[200px]' src={thumbnail} alt="" />
            <div className=' space-y-4'>
                <p>{brand}</p>
                <p>{description.length > 40 ? description.slice(0, 40) : description}</p>
                <p>{price}</p>
            </div>
            <button onClick={() => handleDetails(id)} className=' bg-red-400 text-white px-5 py-2 rounded-md my-4'>Details</button>
        </div>
    );
};

export default Product;