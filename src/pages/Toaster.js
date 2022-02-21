import React, { useState, useEffect } from 'react'
import photo1 from "../assets/images/main.png"
import photo2 from "../assets/images/m1.png"
import photo3 from "../assets/images/m2.png"
import photo4 from "../assets/images/m3.png"
import photo5 from "../assets/images/m4.png"
import photo6 from "../assets/images/m5.png"
import photo7 from "../assets/images/m6.png"
import photo8 from "../assets/images/m7.png"
import photo9 from "../assets/images/m8.png"
import photo10 from "../assets/images/m9.png"
import Footer from '../layouts/Footer'
import AppContract from "../assets/abi.json";
import Web3 from "web3"

export default function Dashboard() {
  const {ethereum} = window;
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

    const [accounts, setAccounts] = React.useState([]);
    const [networkId, setNetworkId] = React.useState(0);
    const [instance, setInstance] = React.useState(null);
    const [statusChange, setStatusChange] = React.useState(false);
    const [mintedNFTs, setMintedNFTs] = useState([]);
    const [myMemes, setMyMemes] = React.useState([]);
    React.useEffect(() => {
        const init = async () => {
            if(instance&&accounts){
                const data = await instance.methods.tokensOfOwner(accounts[0]).call();
                var sims = []; //My simple Doges
                for(var i=0;i<data.length;i++) {
                    if(parseInt(data[i])>690) {
                        sims.push(data[i]);
                    }
                }
                setMyMemes(sims);
                console.log("MYNFTS",data);
                var arr = [];
                var aa;
                for(var i = 691;i<=700;i++) {
                  aa = await instance.methods.tokenMinted(i).call();
                  arr.push(aa);
                }
                setMintedNFTs(arr);
            }
        };
        init();
    }, [statusChange]);

    React.useEffect(() => {
        const init = async () => {
            console.log("Account changed");
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
                    if(parseInt(data[i])>=690) {
                        sims.push(data[i]);
                    }
                }
                setMyMemes(sims);
                var arr = [];
                var aa;
                for(var i = 691;i<=700;i++) {
                  aa = await instance.methods.tokenMinted(i).call();
                  arr.push(aa);
                }
                setMintedNFTs(arr);
            }
        };
        init();
    }, []);
    const connetWallet = async () => {
        if(typeof(ethereum)=="undefined") window.open("https://metamask.io/download/", "_blank");
        else
        await window.ethereum.request({ method: 'eth_requestAccounts' }).then((data)=> {
            setAccounts(data);
            setStatusChange(!statusChange);
        });
    }

  const mint = async (index) => {
   
    if(accounts.length==0) await connetWallet();
    if (networkId == 1666700000 || networkId == 1666700001 || networkId == 1666700002 || networkId == 1666700003) {
      try {
        if (!instance) throw new Error(`No Ethereum Instance.`);
          if (!accounts)
              throw new Error(`No account selected. Try reauthenticating`);
          var amount = "0";
          if(index==700) amount = "2718";
          else amount = "1000";
          const value = web3.utils.toWei(amount, "ether");
          if(index==0) {
            for(var i=691; i<700; i++) {
              if(mintedNFTs.indexOf(i.toString())>-1) continue;
              await instance.methods.mintNFTs(i).send({
                  from: accounts[0],
                  value,
                  gas: 250000,
              });
              break;
            }
          }else {
            await instance.methods.mintNFTs(index).send({
                from: accounts[0],
                value,
                gas: 250000,
            });
          }
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
  return (
    <div className='w-full h-full text-white'>
      <div className='pt-10 bg-black'>
        <div className='container px-10 mx-auto text-center'>
          <h1 className='text-3xl'>You discoverd SECRET SMUG NFT. Under this page 10 special  and unique NFT's for minting with price 690 ONE (9 pics) and 2718 ONE (1pic).</h1>
        </div>
        <div className='container flex justify-center px-10 mx-auto w-full md:flex-row items-center'>
          <div
            className="w-full rounded-md md:text-left py-5 mt-5 border-2 border-gray bg-metal">
            <div className="flex justify-center items-center mt-4 pt-4">
              <img className="w-full" src={photo1} />
            </div>
            <div className='text-center'>
              
              {!mintedNFTs[9]&&<button className="text-white text-2xl font-bold bg-black mt-3 px-4 py-2 text-center rounded-md" onClick={()=> {
                mint(700);
              }}>Mint in 2718 ONE</button>}
              {mintedNFTs[9]&&<button className='text-white text-2xl font-bold bg-black mt-3 px-4 py-2 text-center rounded-md'>Already minted</button>}
            </div>
          </div>
        </div>
      </div>
      <section className="pt-8 bg-black">
        <div className="container mx-auto flex justify-center">
          <button className='text-white text-2xl font-bold bg-metal  mt-3 px-4 py-2 text-center rounded-md' onClick={()=> {
            mint(0);
          }}>Mint meme in 1000 ONE</button>
        </div>
      </section>
      <section className="pt-8 bg-black">
        <div className="container mx-auto flex justify-center">
          <div className="m-8 px-5 bg-metal">
            <h1 className='text-white text-center font-bold text-2xl pt-2'>My minted Memes</h1>
            {myMemes.length==0 && <h1 className="text-white text-center mt-10 text-2xl">You didn't mint any meme token yet</h1>}
            <div className="grid grid-cols-3 gap-8 mt-10 mb-5">
            {myMemes.map((item, index)=> {
                return(
                  <div className="border-2 border-gray-700">
                    <img src={"https://gateway.pinata.cloud/ipfs/QmZLiiPyzZ9V2metcCBWHapNWiWD8U5PvEkVi2LTUDk7Ly/"+item+".png"} slot="svg" />
                  </div>)
            })}
            </div>
          </div>
        </div>
        <hr className="border-b border-gray opacity-25 my-0 py-0" />
      </section>
      <Footer />
    </div>
  )
}
