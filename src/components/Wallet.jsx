import React from "react";
import '../App.css';

const Wallet = () =>{

    function connectWallet(){
        alert("Hello")
    }

    return(
        <div className="wallet" id="Wallet">
            <h1>Wallet</h1>
            <button onClick={connectWallet}>Connect</button>
        </div>
    );
}

export default Wallet;