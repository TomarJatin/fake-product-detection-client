import React from "react";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  Web3Button,
} from "@thirdweb-dev/react";
import { NextPage } from "next";
import FormField from "../../components/FormField";
import { useEffect, useState } from "react";

const Verify: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const [code, setCode] = useState("");
  const { data, isLoading, error } = useContractRead(
    contract,
    "getNotOwnedCodeDetails",
    [code]
  );
  const [showDetails, setShowDetails] = useState(false);

  const verifyDetails = () => {
    setShowDetails(true);
  };

  return (
    <main>
      <div className="w-full flex flex-col items-end px-[5%] pt-[20px]">
      <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
      </div>

      <h1 className="text-[32px] font-bold text-center">Verify Product Details</h1>

      <div className="px-[10%] py-[40px] flex flex-col gap-[20px] items-center">
        <FormField
          labelName="Code *"
          placeholder="Enter Code of product here"
          inputType="text"
          value={code}
          handleChange={(e: any) => setCode(e.target.value)}
        />

        <Web3Button contractAddress={contractAddress} action={verifyDetails}>
          Verify
        </Web3Button>
        {showDetails && (
          <div className="w-full">
            {
              data && data[0] !== "" ? (
                <div >
                  <h3>Product Details</h3>
              <p><span>Product Brand: </span> {data[0]}</p>
              <p><span>Product Model: </span> {data[1]}</p>
              <p><span>Product Description: </span> {data[3]}</p>
              <p><span>Product Manufacturer: </span> {data[4]}</p>
              <p><span>Product Manuf Address: </span> {data[5]}</p>
              <p><span>Mfg Date: </span> {data[6]}</p>
            </div>
              ): (
                <p>There is no such code</p>
              )
            }
          </div>
        )}
      </div>
    </main>
  );
};

export default Verify;
