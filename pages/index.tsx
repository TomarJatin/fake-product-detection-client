import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main >
      <h1 className="text-7xl">yo</h1>
      {/* <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            /> */}
    </main>
  );
};

export default Home;
