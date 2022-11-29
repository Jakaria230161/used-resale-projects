import React, { useContext, useState } from 'react';
import { GoVerified } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { FcOvertime } from 'react-icons/fc';
import BookingModal from '../Categories/BookingModal';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AdvertisePCard = ({ product }) => {

    const { user } = useContext(AuthContext);

    const [products, setProducts] = useState([])
    const [modelProduct, setModelProduct] = useState(null)

    const { img, location, originalPrice, title, resalePrice, used, date, author } = product

    const handleWishlist = () => {
        const wishlist = {
            img,
            title,
            email: user?.email,
            author,
            resalePrice
        }

        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(`${title} Added Dashboard Wishlist`)
                } else {
                    toast.error(data.message)
                }

            })

        console.log(wishlist)
    }

    return (
        <section>

            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-bold'><MdLocationOn className='inline-block text-pink-600'></MdLocationOn> {location}</p>
                    <hr></hr>
                    <div className='flex justify-between'>
                        <p className='font-bold text-blue-700'>Resale Price : ${resalePrice}</p>
                        <p className=' text-red-600'>Orginal Price : ${originalPrice}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Used : {used}</p>
                        <p><FcOvertime className='text-blue-600 inline-block'></FcOvertime> {date.slice(0, 10)}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <label
                            onClick={handleWishlist}
                            htmlFor="booking-modal"
                            className="btn btn-secondary"
                        >WishList</label>
                        <label
                            onClick={() => setModelProduct(product)}
                            htmlFor="booking-modal"
                            className="btn btn-primary"
                        >Book Now</label>
                    </div>
                    <hr></hr>
                    <div className='flex justify-between my-1'>
                        <p><FaUserCircle className='inline-block'></FaUserCircle> {author.name}</p>
                        {
                            author.varify && <p><GoVerified className='inline-block text-blue-600'></GoVerified> {author.varify}</p>
                        }

                    </div>
                </div>
            </div>
            {
                modelProduct &&
                <BookingModal
                    modelProduct={modelProduct}
                    setModelProduct={setModelProduct}
                ></BookingModal>
            }
        </section>
    );
};

export default AdvertisePCard;