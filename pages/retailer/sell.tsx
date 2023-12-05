import React from 'react';
import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button, } from "@thirdweb-dev/react";
import { NextPage } from "next";
import FormField from "../../components/FormField";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Sell: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const router = useRouter();
  const { contract } = useContract(contractAddress);
  const [login, setLogin] = useState(false);
  const { data, isLoading, error } = useContractRead(contract, "getRetailerDetails", [address]);
 const [code, setCode] = useState("");
 const [customer, setCustomer] = useState("");

  useEffect(() => {
    console.log("data : ", data);
    if(data && data[2] === address){
      setLogin(true);
    }
    else{
      setLogin(false);
    }
  }, [data, address]);

  return (
    <main >
      <h1>Sell to customer</h1>
      <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />

              {
                !isLoading ? (
                  <div>
                    {
                      login ? (
                        <div className="px-[10%] py-[40px] flex flex-col gap-[20px] items-center">
              <FormField
                labelName="Code *"
                placeholder="Enter Code of product here"
                inputType="text"
                value={code}
                handleChange={(e: any) =>
                    setCode(e.target.value)
                }
              />
              <FormField
                labelName="Customer *"
                placeholder="Enter Addresss of customer here"
                inputType="text"
                value={customer}
                handleChange={(e: any) =>
                  setCustomer(e.target.value)
                }
              />
              <Web3Button
                contractAddress={contractAddress}
                action={(contract) => {
                    contract.call("initialOwner", [
                        address,
                        code,
                        address,
                        customer
                      ]);
                      router.push("/retailer");
                }
                }
              >
                Submit
              </Web3Button>
            </div>
                      ) : (
                        <div>
                          Login here
                        </div>
                      )
                    }
                  </div>
                ): null
              }
    </main>
  );
};

export default Sell;
