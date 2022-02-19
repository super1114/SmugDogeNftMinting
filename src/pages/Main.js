import React, { useEffect, useState } from 'react'
import Footer from '../layouts/Footer'
import memes from '../assets/images/memes.png'
import flag from '../assets/images/flag.jpg'
import photo1 from '../assets/images/1.png'
import photo2 from '../assets/images/2.png'
import photo3 from '../assets/images/3.png'
import photo4 from '../assets/images/4.png'
import photo5 from '../assets/images/5.png'
import photo6 from '../assets/images/6.png'
import '../App.css'
import Web3 from "web3"

import AppContract from "../assets/abi.json";
import metadata from "../assets/metadata.json";

export default function Main() {
    const {ethereum} = window;
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

    const [accounts, setAccounts] = React.useState([]);
    const [networkId, setNetworkId] = React.useState(0);
    const [instance, setInstance] = React.useState(null);
    const [totalSupply, setTotalSupply] = React.useState(0);
    const [mySimpleNFTs, setMySimpleNFTs] = React.useState([]);
    const [percent, setPercent] = React.useState("0%");
    const [statusChange, setStatusChange] = React.useState(false);
    React.useEffect(() => {
        const init = async () => {
            if(instance&&accounts){
                const data = await instance.methods.tokensOfOwner(accounts[0]).call();
                var sims = []; //My simple Doges
                for(var i=0;i<data.length;i++) {
                    if(parseInt(data[i])<690) {
                        sims.push(data[i]);
                    }
                }
                setMySimpleNFTs(sims);
                const ts = await instance.methods.getCurrentSupply().call();
                console.log("ts=", ts);
                setTotalSupply(ts);
                setPercent((ts*100/700).toString()+"%");
            }
        };
        init();
    }, [statusChange]);

    React.useEffect(() => {
        const init = async () => {
            const accounts = await web3.eth.getAccounts();
            const networkId = await web3.eth.net.getId();
            const instance = new web3.eth.Contract(
                AppContract.abi,
                "0x65109A163e67078C7812b4D0Fa6857f4d38d2089"
            );
            setAccounts(accounts);
            setInstance(instance);
            setNetworkId(networkId);
            
            if(instance&&accounts){
                const data = await instance.methods.tokensOfOwner(accounts[0]).call();
                
                var sims = []; //My simple Doges
                for(var i=0;i<data.length;i++) {
                    if(parseInt(data[i])<690) {
                        sims.push(data[i]);
                    }
                }
                setMySimpleNFTs(sims);
                console.log("Account 111", data);
                console.log(data);
                const ts = await instance.methods.getCurrentSupply().call();
                setTotalSupply(ts);
                setPercent((ts*100/700).toString()+"%");
            }
        };
        init();
    }, []);


    const mint = async () => {
        if (networkId == 1666700000 || networkId == 1666700001 || networkId == 1666700002 || networkId == 1666700003) {
            try {
                if (!instance) throw new Error(`No Ethereum Instance.`);
                if (!accounts)
                    throw new Error(`No account selected. Try reauthenticating`);
                const amount = "690";

                const value = web3.utils.toWei(amount, "ether");
                await instance.methods.mintNFTs(0).send({
                    from: accounts[0],
                    value,
                    gas: 250000,
                });
                setStatusChange(!statusChange);
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("Please change your network to harmony testnet");
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: "0x6357D2E0" }],
            });
            setStatusChange(!statusChange);
        }
    }
    const connetWallet = async () => {
        if(typeof(ethereum)=="undefined") window.open("https://metamask.io/download/", "_blank");
        else
        await window.ethereum.request({ method: 'eth_requestAccounts' }).then((data)=> {
            setAccounts(data);
            setStatusChange(!statusChange);
        });
    }

    return (
        <div>
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-4 border-b-2 border-midnight'>
                <div className='meme lg:order-last items-center mt-20 mb-5 lg:mb-0 lg:col-start-3 lg:col-end-4'>
                    <img src={memes} className="w-full relative cursor-pointer mt-20" />
                </div>
                <div className='text-center lg:text-left flex items-center mb-5 lg:mb-0 lg:col-start-1 lg:col-end-3'>
                    <div className='mx-auto px-10 py-10'>
                        <div className='flex text-2xl mb-6'>
                            <span className='text-white'>
                                Hot & Unique SmugHub NFTs in United States
                            </span>
                            <img src={flag} className='h-5 px-2 my-2' />
                        </div>
                        <div className='flex gap-3'>
                            <a href='/mintsection'>
                                <img src={photo1} className='border-2 border-gray' />
                                <div class="lg:pl-2 text-white font-bold flex">
                                    <span>1.2M views</span>&nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    &nbsp;
                                    <span>91%</span>
                                </div>
                            </a>
                            <a href='/mintsection'>
                                <img src={photo2} className='border-2 border-gray' />
                                <div class="lg:pl-2 text-white font-bold flex">
                                    <span>1.5M views</span>&nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    &nbsp;
                                    <span>96%</span>
                                </div>
                            </a>
                            <a href='/mintsection'>
                                <img src={photo3} className='border-2 border-gray' />
                                <div class="lg:pl-2 text-white font-bold flex">
                                    <span>1.1M views</span>&nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    &nbsp;
                                    <span>87%</span>
                                </div>
                            </a>
                        </div>
                        <div className='flex gap-3'>
                            <a href='/mintsection'>
                                <img src={photo4} className='border-2 border-gray' />
                                <div class="lg:pl-2 text-white font-bold flex">
                                    <span>1M views</span>&nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    &nbsp;
                                    <span>89%</span>
                                </div>
                            </a>
                            <a href='/mintsection'>
                                <img src={photo5} className='border-2 border-gray' />
                                <div class="lg:pl-2 text-white font-bold flex">
                                    <span>1.3M views</span>&nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    &nbsp;
                                    <span>93%</span>
                                </div>
                            </a>
                            <a href='/mintsection'>
                                <img src={photo6} className='border-2 border-gray' />
                                <div class="lg:pl-2 text-white font-bold flex">
                                    <span>1.4M views</span>&nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    &nbsp;
                                    <span>95%</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='text-white border-b-2 border-midnight' id='mint'>
                <div className='flex justify-center font-bold text-4xl mt-20'>
                    Own a Smug Doge on the Harmony Blockchain
                </div>
                <div className='flex justify-center font-bold text-xl mt-10'>
                    420 ONE/Smug Doge
                </div>
                <div className='flex justify-center font-bold text-4xl mt-5'>
                    {700-totalSupply} Smug Doge Left
                </div>
                <div className='flex justify-center mt-5 container rounded'>
                    <div className='h-3 bg-green' style={{width:percent}}></div>
                    <div className='h-3 bg-gray1 w-full'></div>
                </div>
                <div className='my-10 flex justify-center'>
                    {
                        accounts.length==0&&<button onClick={() => connetWallet()} className='mint bg-midnight text-white py-2 px-7 rounded hover:bg-orange hover:text-gray'>CONNECT WALLET</button>  
                    }
                    {accounts.length!=0&&<button onClick={() => mint()} className='mint bg-midnight text-white py-2 px-7 rounded hover:bg-orange hover:text-gray'>MINT NOW</button>}
                </div>
            </section>
            <section className='text-white border-b-2 border-midnight'>
                <div className='flex justify-center text-4xl font-bold mt-10'>
                    My minted SmugDoge
                </div>
                {mySimpleNFTs.length==0 && <h1 className="text-white text-center mt-10 text-2xl">You didn't mint any SmugDoge yet</h1>}
                <div className='container grid grid-cols-3 gap-4 mt-10 mb-10'>
                    {mySimpleNFTs.map((item, index)=> {
                        return(
                        <div>
                            <img src={"https://gateway.pinata.cloud/ipfs/QmZLiiPyzZ9V2metcCBWHapNWiWD8U5PvEkVi2LTUDk7Ly/"+(parseInt(item)+1)+".png"} alt slot="svg" />
                            <div className='text-center font-bold text-md'>{metadata[item].attributes[0].trait_type +": " + metadata[item].attributes[0].value}</div>
                            <div className='text-center font-bold text-md'>{metadata[item].attributes[1].trait_type +": " + metadata[item].attributes[1].value}</div>
                            <div className='text-center font-bold text-md'>{metadata[item].attributes[2].trait_type +": " + metadata[item].attributes[2].value}</div>
                            <div className='text-center font-bold text-md'>{metadata[item].attributes[3].trait_type +": " + metadata[item].attributes[3].value}</div>
                            <div className='text-center font-bold text-md'>{metadata[item].attributes[4].trait_type +": " + metadata[item].attributes[4].value}</div>
                        </div>)
                    })}
                </div>
            </section>
            <section className='text-white border-b-2 border-midnight'>
                <div className='flex justify-center text-4xl font-bold mt-10'>
                    Our Community
                </div>
                <div className='flex justify-center gap-4 mt-10 mb-10'>
                    <a href="https://twitter.com/smugdoge" target="_blank" className="px-4 py-2 font-semibold bg-midnight text-white inline-flex items-center space-x-2 rounded hover:bg-orange hover:text-gray">
                        <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        <span>Twitter</span>
                    </a>
                    <a href="https://discord.gg/ES2xGpDtrN" target="_blank" className="px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded bg-midnight hover:bg-orange hover:text-gray">
                        <svg className="w-6 h-6 text-gray-400  fill-current" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" /></svg>
                        <span>Discord</span>
                    </a>
                    <a href="https://t.me/smugdogeone" target="_blank" className="bg-midnight px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:bg-orange hover:text-gray">
                        <svg
                            className="cursor-pointer w-6 h-6 text-gray-400  fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512">
                            <path
                                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                            ></path>
                        </svg>
                        <span>Telegram</span>
                    </a>
                </div>
            </section>
            <section className='text-white border-b-2 border-midnight'>
                <div className='text-4xl font-bold flex justify-center mt-20'>
                    Our Team
                </div>

                <div class="container grid grid-cols-3 gap-8 mb-10 mt-10">
                    <div>
                        <div className="border-2 border-gray">
                            <img src={photo1} alt slot="svg" />
                        </div>
                        <p className="text-center text-2xl text-white mt-4">Project Manager </p>
                    </div>
                    <div>
                        <div className="border-2 border-gray">
                            <img src={photo2} alt slot="svg" />
                        </div>
                        <p className="text-center text-2xl text-white mt-4">Developer </p>
                    </div>
                    <div>
                        <div className="border-2 border-gray">
                            <img src={photo3} alt slot="svg" />
                        </div>
                        <p className="text-center text-2xl text-white mt-4">Artist </p>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}
