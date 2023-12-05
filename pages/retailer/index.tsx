import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button, } from "@thirdweb-dev/react";
import { NextPage } from "next";
import FormField from "../../components/FormField";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Retailer: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const router = useRouter();
  const { contract } = useContract(contractAddress);
  const [login, setLogin] = useState(false);
  const { data, isLoading, error } = useContractRead(contract, "getRetailerDetails", [address]);
  const [Input, setInput] = useState({
    name: "",
    location: ""
  })

  useEffect(() => {
    console.log("data : ", data);
    if(data && data[2] === address){
      setLogin(true);
    }
    else{
      setLogin(false);
    }
  }, [data, address]);

  const handleInputChange = (key: string, value: string) => {
    let _input: any = Input;
    _input[key] = value;
    setInput({ ..._input });
  };

  return (
    <main >
      <h1>Retailers</h1>
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
                        <div className="px-[10%] py-[40px] flex flex-col gap-[20px] ">
                          <div >
                  <h3>Retailer Details</h3>
              <p><span>Retailer Name: </span> {data[0]}</p>
              <p><span>Retailer Location: </span> {data[1]}</p>
            </div>
              <Web3Button
                contractAddress={contractAddress}
                action={() => router.push("/retailer/sell")
                }
              >
                Sell Product to Customer
              </Web3Button>
            </div>
                      ) : (
                        <div className="px-[10%] py-[40px] flex flex-col gap-[20px] ">
              <FormField
                labelName="Name *"
                placeholder="Enter your name here"
                inputType="text"
                value={Input.name}
                handleChange={(e: any) =>
                  handleInputChange("name", e.target.value)
                }
              />
              <FormField
                labelName="Location *"
                placeholder="Enter your location here"
                inputType="text"
                value={Input.location}
                handleChange={(e: any) =>
                  handleInputChange("location", e.target.value)
                }
              />
              <Web3Button
                contractAddress={contractAddress}
                action={(contract) =>
                  contract.call("createRetailer", [
                    address,
                    address,
                    Input.name,
                    Input.location
                  ])
                }
              >
                Submit
              </Web3Button>
            </div>
                      )
                    }
                  </div>
                ): null
              }
    </main>
  );
};

export default Retailer;
