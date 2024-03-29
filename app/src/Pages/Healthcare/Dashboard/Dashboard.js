import React, { useContext } from 'react';
import './Dashboard.css';
import Navbar from '../../../Components/Nabar/Navbar';
import { Web3Context } from '../../../ContextAPI/Web3Context.js.js';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    const { currentAccount, checkMetaMaskConnection } = useContext(Web3Context);

    const handleClick = async () => {
        const isConnected = await checkMetaMaskConnection();
        if (isConnected) {


        } else {
            window.alert("Metamask connection Rejected")
        }
    };

    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="card-container">
                <div className='card-flex'>
                    {currentAccount ?
                        <Link to="/book_appointment" className='dash-card'>
                            <h3>Book an Appointment</h3>
                        </Link> :
                        <div className='dash-card' onClick={handleClick}>
                            <h3>Book an Appointment</h3>
                        </div>
                    }
                    {currentAccount ?
                        <Link to="/manage_appointment" className='dash-card'>
                            <h3>Manage Appointment</h3>
                        </Link> :
                        <div className='dash-card' onClick={handleClick}>
                            <h3>Manage Appointment</h3>
                        </div>
                    }
                    {currentAccount ?
                        <Link to="/medical_records_ehr" className='dash-card' onClick={handleClick}>
                            <h3>View Medical Records (EHR)</h3>
                        </Link> :
                        <div className='dash-card' onClick={handleClick}>
                            <h3>View Medical Records (EHR)</h3>
                        </div>
                    }
                </div>
                <div className='card-flex'>
                    <div className='dash-card'>
                        <h3>Donor / Donee</h3>
                    </div>
                    <div className='dash-card'>
                        <h3>Blood Bank</h3>
                    </div>
                    <div className='dash-card'>
                        <h3>Crowdfunding</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
