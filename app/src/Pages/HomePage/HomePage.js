import React from 'react'
import Navbar from '../../Components/Nabar/Navbar';
import "./HomePage.css"
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <div className='homepage-container'>
                <div className='content-container'>
                    <h1>One Platform for all your Healthcare and Products</h1>
                    <p>Revolutionizing Healthcare with Blockchain Technology: A Unified DAPP Platform for Products and Services</p>

                    <button className='connect-wallet-button'>Connect Wallet</button>

                    <visit>**visit</visit>

                    <div className='homepage-cards'>
                        <div className='homepage-card'>
                            <Link to="/healthcare">Healthcare</Link>
                        </div>
                        <div className='homepage-card'>
                            <Link>Telerehabilitation</Link>
                        </div>
                    </div>
                </div>
                <div className='doc-img-wrapper'>
                    <div className='grey-color-circle'>
                        <div className='blue-gey-color-circle'>
                            <div className='blue-color-circle'>
                                <div className='doc-img-wrapper'>
                                    <img src='./Asserts/phone.png'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomePage;