import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import BookingModal from '../../../Pages/Home/Categories/BookingModal';

const MyWishlists = () => {

    const { user } = useContext(AuthContext);

    const [products, setProducts] = useState([])
    const [modelProduct, setModelProduct] = useState(null)

    const url = `http://localhost:5000/wishlists?email=${user?.email}`;
    console.log(user?.email)

    const { data: wishlists = [] } = useQuery({
        queryKey: ['wishlists', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div>
                <h3 className="text-3xl mb-5">My Wishlist</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Products Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlists?.map((wishlist, i) => <tr key={wishlist._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={wishlist.img} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{wishlist.title}</td>
                                    <td>{wishlist.resalePrice}</td>
                                    <td>
                                        <label
                                            onClick={() => setModelProduct(wishlist)}
                                            htmlFor="booking-modal"
                                            className="btn btn-primary"
                                        >Book Now</label>

                                        {/* {
                                            wishlist.resalePrice && !wishlist.paid &&
                                            <Link to={`/dashboard/wishlistPayment/${wishlist._id}`}>
                                                <button className='btn btn-primary btn-sm'
                                                >Purchase</button>
                                            </Link>
                                        }
                                        {
                                            wishlist.resalePrice && wishlist.paid &&
                                            <span className='text-primary'
                                            >Paid</span>
                                        } */}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                modelProduct &&
                <BookingModal
                    modelProduct={modelProduct}
                    setModelProduct={setModelProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default MyWishlists;