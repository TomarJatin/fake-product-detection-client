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
      <div className="w-full flex flex-col items-end px-[5%] pt-[20px]">
      <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
      </div>

      <h1 className="text-[32px] font-bold text-center">Sell to customer</h1>

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
                        <Web3Button
                        className='mt-[40px]'
                contractAddress={contractAddress}
                action={() => router.push('/retailer')
                }
              >
                Login Here
              </Web3Button>
                      )
                    }
                  </div>
                ): null
              }
    </main>
  );
};

export default Sell;
