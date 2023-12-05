import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button, } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const router = useRouter();
  const { contract } = useContract(contractAddress);
  // const { data, isLoading, error } = useContractRead(contract, "getTodo", []);

  return (
    <main >
      
      <div className="w-full flex flex-col items-end px-[5%] pt-[20px]">
      <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
      </div>
            {
              address ? (
                <div className="px-[10%] py-[40px] flex flex-col gap-[20px] ">
              <Web3Button
                contractAddress={contractAddress}
                action={() => router.push("/customer")
                }
              >
                Customer
              </Web3Button>
              <Web3Button
                contractAddress={contractAddress}
                action={() => router.push("/retailer")
                }
              >
                Retailer
              </Web3Button>
              <Web3Button
                contractAddress={contractAddress}
                action={() => router.push("/manufacturer")
                }
              >
                Manufacturer
              </Web3Button>
            </div>
              ): null
            }
    </main>
  );
};

export default Home;
