import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Product from '../Product/Product';

const Home = () => {
    const { products } = useLoaderData()
    console.log(products);
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 container mx-auto'>
            {
                products.map(product => <Product
                    key={product.id}
                    handleDetails={handleDetails}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Home;