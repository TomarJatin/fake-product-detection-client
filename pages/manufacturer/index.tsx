import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const Manufacturer: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const [login, setLogin] = useState(false);
  const { data, isLoading, error } = useContractRead(contract, "manufactureArr", [address]);

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
      <h1>Manufacturer</h1>
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
                        <div>Logged In</div>
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

export default Manufacturer;
