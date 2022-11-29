import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { GoVerified } from 'react-icons/go';

const AllSeller = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allUser/Seller`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteDoctor = seller => {
        fetch(`http://localhost:5000/sellers/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${seller.name} deleted successfully`)
                }
            })
    }


    const handleMakeVerify = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make verified successful.')
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl mt-4">All Seller</h2>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify Seller</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>

                                <td>{
                                    seller?.varify !== 'verified' ? <button
                                        onClick={() => handleMakeVerify(seller._id)} className='btn btn-xs btn-primary'>Make Verify</button> : <GoVerified></GoVerified>
                                }</td>


                                <td><button onClick={() => handleDeleteDoctor(seller)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;