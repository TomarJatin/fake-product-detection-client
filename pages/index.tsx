import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  const contractAddress = "0xF2893d1112b11c73e434dD6767240e50bc9465AB";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useContractRead(contract, "getTodo", []);

  return (
    <main >
      <h1>{address}</h1>
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

export default Home;
