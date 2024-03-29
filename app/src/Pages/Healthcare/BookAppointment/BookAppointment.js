import React from 'react'
import "./BookAppointment.css"
import Navbar from '../../../Components/Nabar/Navbar'

export default function BookAppointment() {
    return (
        <div className='ba-page'>
            <Navbar />
            <div className='bc-wrapper'>
                <div className='bc-container'>
                    <div className='bc_main_container'>
                        <div className='bc_assert_wrapper'>
                            <img src='./Asserts/doctor_appoinment.jpg' alt='appoinment_assert'></img>
                        </div>
                        <div className='bc_content_wrapper'>
                            <h1>Book your Appointment in few Steps</h1>
                            <form action="#" method="post">
                                <div className='bc-input-pair'>
                                    <div className="bc-input-wrapper">
                                        <label for="first_name">First Name</label>
                                        <input type="text" id="first_name" name="first_name" required />
                                    </div>
                                    <div className="bc-input-wrapper">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" id="last_name" name="last_name" required />
                                    </div>
                                </div>
                                <div className="bc-input-wrapper full-wd">
                                    <label for="address">Address</label>
                                    <input type="text" id="address" name="address" required />
                                </div>
                                <div className='bc-input-pair'>
                                    <div className="bc-input-wrapper">
                                        <label for="city">City</label>
                                        <input type="text" id="city" name="city" required />
                                    </div>
                                    <div className="bc-input-wrapper">
                                        <label for="state">State</label>
                                        <input type="text" id="state" name="state" required />
                                    </div>
                                </div>
                                <div className='bc-input-pair'>
                                    <div className="bc-input-wrapper">
                                        <label for="pincode">Pincode</label>
                                        <input type="text" id="pincode" name="pincode" required />
                                    </div>
                                    <div className="bc-input-wrapper">
                                        <label for="country">Country</label>
                                        <input type="text" id="country" name="country" required />
                                    </div>
                                </div>
                                <div className='bc-input-pair'>
                                    <div className="bc-input-wrapper">
                                        <label for="appointment_date">Appointment Date</label>
                                        <input type="date" id="appointment_date" name="appointment_date" required />
                                    </div>
                                    <div className="bc-input-wrapper">
                                        <label for="appointment_time">Appointment Time</label>
                                        <input type="time" id="appointment_time" name="appointment_time" required />
                                    </div>
                                </div>
                                <div className="bc-input-wrapper full-wd">
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required />
                                </div>
                                <div className="bc-input-wrapper submit">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
