import React, { useContext } from 'react'
import "./Navbar.css";
import { Web3Context } from '../../ContextAPI/Web3Context.js';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { currentAccount, checkMetaMaskConnection, disconnectWallet } = useContext(Web3Context);


    const handleClick = async () => {
        const isConnected = await checkMetaMaskConnection();
        if (isConnected) {


        } else {
            window.alert("Metamask connection Rejected")
        }
    };
    return (
        <div className='home-navbar'>
            <Link className='home-nav-logo-container' to="/">
                <i class="fa-solid fa-stethoscope"></i>
                <h5>BCHeathcare</h5>
            </Link>
            <ul className='home-nav-items-container'>
                <li>Contact</li>
                <li><span>Book Appointment</span></li>


                {currentAccount ?
                    <li class="tooltip">
                        <connect>
                            <waddress>{currentAccount.slice(0, 8)}</waddress>
                        </connect>
                        <div class="tooltiptext">
                            <Link to="/profile">Profile</Link>
                            <h5 onClick={disconnectWallet}>Disconnect</h5>
                        </div>
                    </li> :
                    <li >
                        <connect>
                            <connectbtn onClick={handleClick}>Connect Wallet</connectbtn>
                        </connect>
                    </li>
                }

            </ul>
        </div>
    )
}
