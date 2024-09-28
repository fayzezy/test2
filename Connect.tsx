"use client";

import { ConnectButton, MediaRenderer, darkTheme } from "thirdweb/react";
import { client } from "@/app/client";
import { createWallet, inAppWallet, walletConnect } from "thirdweb/wallets";
import { arbitrum, avalanche, base, optimism, zkSync } from "thirdweb/chains";
import { defineChain } from "thirdweb";

const wallets = [
  createWallet("com.trustwallet.app"),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  inAppWallet({
    auth: {
      options: [
        "email",
	      "x",
        "google",
        "apple",
	      "telegram",
        "facebook",
        "phone",
        "discord",
      	"guest",
        "passkey",
        "coinbase",
        "line",
        "farcaster",
      ],
    },
  }),
 
];

export function Conbutton() {

  return (
    <div >
    <div >
      <div >
  
        <ConnectButton
            client={client}
            connectButton={{ label: "Login" }}
            
            chains={[  
              //minnt
              defineChain(1), defineChain(137), base, zkSync, arbitrum, avalanche, optimism,
              defineChain(59144) , defineChain(81457), defineChain(167000), 
              defineChain(8217), defineChain(100), defineChain(250),  

              //testnets
              defineChain({id: 84532,testnet:true}), defineChain({id: 1993,testnet:true}),
              defineChain({id: 80084,testnet:true}),defineChain({id: 325000,testnet:true}),
              defineChain({id: 132902,testnet:true}),defineChain({id: 2522,testnet:true}),
              defineChain({id: 1952959480,testnet:true}),defineChain({id: 161221135,testnet:true}),
              defineChain({id: 978657,testnet:true}),defineChain({id: 14333,testnet:true}),
              defineChain({id: 98985,testnet:true}), defineChain({id: 1513,testnet:true}),
            ]}
            
            wallets={wallets}
            theme={darkTheme({
            colors: {
            primaryButtonBg: "#18191e",
            primaryButtonText: "#818183",
          },
        })}

        connectModal={{
          title: "Login",
		      showThirdwebBranding: false,
        }}
            

        supportedTokens={{ 
          137: [
          {
          address: "0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70", 
          name: "SNFTPRO",
          symbol: "SP" ,
          icon: "/erc20-icons/sp.png",
        },
        {
          address: "0x81773cFEA4f68216c4F20BDaaAAE8F73e7b16DF9", 
          name: "SNFT",
          symbol: "S" ,
          icon: "/erc20-icons/s.png",
        
        },
      ],
    }}

/>


</div>
</div>
</div>  
  );
}