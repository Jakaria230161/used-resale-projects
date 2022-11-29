import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductOption from './ProductOption';

const CategoryDetails = () => {

    const categoryData = useLoaderData()
    console.log(categoryData)
    const { title } = categoryData;
    console.log(title)

    const [products, setProducts] = useState([])
    const [modelProduct, setModelProduct] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/categories/${title}`)
            .then(res => res.json())
            .then(data => { setProducts(data); console.log(data) })
    }, [title])



    return (
        <section>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductOption
                        key={product._id}
                        product={product}
                        data={categoryData}
                        setModelProduct={setModelProduct}
                    ></ProductOption>)
                }
            </div>
            {
                modelProduct &&
                <BookingModal
                    modelProduct={modelProduct}
                    setModelProduct={setModelProduct}
                ></BookingModal>}
        </section>

    );
};

export default CategoryDetails;