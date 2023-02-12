import React, { useState, useEffect } from "react";
import '../App.css';

const Wallet = () => {
    const [userWalletAddress, setUserWalletAddress] = useState(null);
    const [loginButtonText, setLoginButtonText] = useState("Connect to your wallet");

    useEffect(() => {
        toggleButton();
    }, []);

    const toggleButton = () => {
        if (!window.ethereum) {
        setLoginButtonText("Voter wallet n'est pas installé");
        return false;
            }
        document.getElementById("loginButton").addEventListener("click", loginWithMetaMask);
    };

    const loginWithMetaMask = async () => {
        const accounts = await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .catch(e => {
            console.error(e.message);
    });

        setUserWalletAddress(accounts[0]);
        setLoginButtonText("Se Déconnecter du Wallet");
        document.getElementById("loginButton").removeEventListener("click", loginWithMetaMask);
        setTimeout(() => {
            document.getElementById("loginButton").addEventListener("click", signOutOfMetaMask);
        });
    };

    const signOutOfMetaMask = () => {
        setUserWalletAddress(null);
        setLoginButtonText("Connect to your wallet");
        document.getElementById("loginButton").removeEventListener("click", signOutOfMetaMask);
        setTimeout(() => {
            document.getElementById("loginButton").addEventListener("click", loginWithMetaMask);
        });
    };

    return (
        <div className="wallet" id="Wallet">
            <h1>Wallet</h1>
            <button id="loginButton" className="button-connection">{loginButtonText}</button>
            <p id="userWallet" className="text-lg text-gray-600 my-2">{userWalletAddress}</p>
        </div>
    );
};

export default Wallet;
