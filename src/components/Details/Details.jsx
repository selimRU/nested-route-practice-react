import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const product = useLoaderData()
    const { brand, description, price, thumbnail } = product;
    console.log(product);
    return (
        <div className='h-[500px] shadow-md p-4 text-center rounded-md'>
            <img className='object-fit-cover w-[250px] mx-auto h-[200px]' src={thumbnail} alt="" />
            <div className=' space-y-4'>
                <p>{brand}</p>
                <p>{description.length > 40 ? description.slice(0, 40) : description}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Details;