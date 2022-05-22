import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phoneNumber = event.target.phoneNumber.value;
        console.log(slot, name, email, phoneNumber);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-[#F6F7F9]">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary mb-3">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-2 ">
                        <input value={format(date, 'PP')} readOnly className="input input-bordered w-full bg-[#3A4256] text-[#ffff] max-w-xs mx-auto" />
                        <select name="slot" className="select input  w-full bg-[#3A4256] text-[#ffff] max-w-xs mx-auto">
                            {
                                slots.map(slot =>
                                    <option key={_id}>{slot}</option>
                                )
                            }
                        </select>
                        <input required type="text" name='name' placeholder="Type Your Name" className="input input-bordered w-full bg-[#3A4256] text-[#ffff] max-w-xs mx-auto" />
                        <input required type="email" name='email' placeholder="Type Email Address" className="input input-bordered w-full bg-[#3A4256] text-[#ffff] max-w-xs mx-auto" />
                        <input required type="text" name='phoneNumber' placeholder="Type Phone Number" className="input input-bordered w-full bg-[#3A4256] text-[#ffff] max-w-xs mx-auto" />
                        <input required type="submit" value="Submit" className="btn btn-secondary bg-gradient-to-r from-primary to-[#0C7592] w-[200px] text-[#ffff] max-w-xs mx-auto" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;