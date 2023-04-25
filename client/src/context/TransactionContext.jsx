import React,{useEffect,useState} from "react";
import {ethers} from 'ethers';

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext =React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider =  new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getsigner();
    const trancactionContract = new ethers.Contract(contractAddress,contractABI,signer);
    
    console.log((
        provider,
        signer,
        trancactionContract

    ));
}

export const TransactionProvider = ({children}) => {

    const checkIfWalletIsConnected = async() => {
        if(!ethereum) return alert("Please install metamask");

        const accounts= await ethereum.request({method:'eth_accounts'});

        console.log(accounts);
    }
    useEffect(() => {
      checkIfWalletIsConnected();
    }, [])
    
    return(
        <TransactionContext.Provider value ={{value:'test'}}>
            {children}
        </TransactionContext.Provider>
    )
}