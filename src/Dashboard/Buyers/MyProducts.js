import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    console.log(user?.email)

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
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
                <h3 className="text-3xl mb-5">My Products</h3>
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
                                bookings?.map((booking, i) => <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={booking.img} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{booking.title}</td>
                                    <td>{booking.resalePrice}</td>
                                    <td>
                                        {
                                            booking.resalePrice && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary btn-sm'
                                                >Purchase</button>
                                            </Link>
                                        }
                                        {
                                            booking.resalePrice && booking.paid &&
                                            <span className='text-primary'
                                            >Paid</span>
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;