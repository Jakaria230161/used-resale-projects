import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ modelProduct, setModelProduct }) => {
    const { _id, img, title, resalePrice } = modelProduct;
    console.log(modelProduct)

    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const resalePrice = form.resalePrice.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value

        const booking = {
            productId: _id,
            img,
            title,
            user: name,
            resalePrice,
            email,
            phone,
            meetingLocation
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    //close the mode
                    setModelProduct(null)
                    toast.success('Booking Confrimed')
                    // refetch();
                } else {
                    toast.error(data.message)
                }

            })
    }



    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name="resalePrice" type="text" disabled value={resalePrice} className="input w-full input-bordered " />

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;