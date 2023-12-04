import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Retailer: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  // const { data, isLoading, error } = useContractRead(contract, "getTodo", []);

  return (
    <main >
      <h1>Retailers</h1>
      <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />

            {/* <Web3Button
              contractAddress={contractAddress}
              action={(contract) => contract.call("setTodo", input)}
              accentColor="#1ce"
            >
              Set Todo
            </Web3Button> */}
    </main>
  );
};

export default Retailer;
