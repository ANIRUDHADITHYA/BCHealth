import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';

const checkMetaMaskConnection = async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            return accounts[0];
        } catch (error) {
            console.error('MetaMask connection error:', error);
            return null; // MetaMask not connected
        }
    } else {
        console.error('MetaMask extension not detected.');
        return null; // MetaMask not connected
    }
};

export const Web3Context = createContext();

// Create a provider component
export const Web3Provider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(null);

    // Fetch the current account on component mount
    useEffect(() => {
        const fetchAccount = async () => {
            const account = await checkMetaMaskConnection();
            setCurrentAccount(account);
        };

        fetchAccount();

        // Listen for MetaMask account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);

        return () => {
            // Cleanup event listener
            window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        };
    }, []);

    // Function to handle MetaMask account changes
    const handleAccountsChanged = async (accounts) => {
        if (accounts.length > 0) {
            setCurrentAccount(accounts[0]); // Update current account
        } else {
            setCurrentAccount(null); // No accounts available (logged out)
        }
    };

    // Function to disconnect the wallet
    const disconnectWallet = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.disconnect();
                return true; // Disconnected successfully
            } catch (error) {
                console.error('Error disconnecting from MetaMask:', error);
                return false; // Failed to disconnect
            }
        } else {
            console.error('MetaMask extension not detected.');
            return false; // MetaMask not available
        }
    };

    // Combine Web3 utility functions, current account, and disconnect function into a single object
    const values = {
        currentAccount,
        checkMetaMaskConnection,
        disconnectWallet,
    };

    return <Web3Context.Provider value={values}>{children}</Web3Context.Provider>;
};
