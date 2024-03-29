// web3Utils.js
import Web3 from 'web3';

export const checkMetaMaskConnection = async () => {
    if (window.ethereum) {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            return true; // MetaMask connected
        } catch (error) {
            // User denied account access...
            console.error('MetaMask connection error:', error);
            return false; // MetaMask not connected
        }
    } else {
        console.error('MetaMask extension not detected.');
        return false; // MetaMask not connected
    }
};

export const getWeb3Instance = () => {
    if (window.ethereum) {
        return new Web3(window.ethereum);
    } else {
        console.error('MetaMask extension not detected.');
        return null; // Unable to create Web3 instance
    }
};

export const getCurrentAccount = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Get the current account
            const accounts = await web3.eth.getAccounts();
            return accounts[0]; // Return the first account (if exists)
        } catch (error) {
            console.error('MetaMask connection error:', error);
            return null; // Unable to fetch account
        }
    } else {
        console.error('MetaMask extension not detected.');
        return null; // MetaMask not available
    }
};
