import React, { useState, useEffect } from "react";
import chip from '../img/chip.png'
import contactless from '../img/wifi-signal.png'
import visa from '../img/visa.png'

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
            <h1 className="wallet-title">Wallet</h1>

            <button id="loginButton" className="button-connection">{loginButtonText}</button>
            <p id="userWallet" className="text-lg text-gray-600 my-2 ethAdresse"></p>
        
            <div class="card-container">
                <div class="card1">
                    <img class="chip" src={chip}alt=""/>
                    <img class="contactless" src={contactless} alt=""/>
                    <img class="visa" src={visa} alt="" />
                    <p id="test" class="card-number">{userWalletAddress}</p>
                    <div class="arrow">
                    </div>
                    <p class="card-name">Ethereum</p>
                    <p class="bank-name">CryptoBank</p>
                </div>
            </div>

            <p className="card-text">
            the button below, allows ed you connect to your allet metamask, there will soon be the possibility to choose any wallet        </p>
        </div>
    );
};

export default Wallet;
