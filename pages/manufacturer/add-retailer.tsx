import React from 'react';
import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button, } from "@thirdweb-dev/react";
import { NextPage } from "next";
import FormField from "../../components/FormField";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const AddRetailer: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const router = useRouter();
  const { contract } = useContract(contractAddress);
  const [login, setLogin] = useState(false);
  const { data, isLoading, error } = useContractRead(contract, "manufactureArr", [address]);
 const [code, setCode] = useState("");
 const [retailer, setRetailer] = useState("");

  useEffect(() => {
    console.log("data : ", data);
    if(data && data[0] === address){
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

      <h1 className="text-[32px] font-bold text-center">Add Retailer</h1>

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
                labelName="Retailer *"
                placeholder="Enter Addresss of retailer here"
                inputType="text"
                value={retailer}
                handleChange={(e: any) =>
                    setRetailer(e.target.value)
                }
              />
              <Web3Button
                contractAddress={contractAddress}
                action={(contract) => {
                    contract.call("addRetailerToCode", [
                        address,
                        code,
                        retailer
                      ]);
                      router.push("/manufacturer");
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
                action={() => router.push('/manufacturer')
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

export default AddRetailer;
