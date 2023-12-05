import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button, } from "@thirdweb-dev/react";
import { NextPage } from "next";
import FormField from "../../components/FormField";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Manufacturer: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const router = useRouter();
  const { contract } = useContract(contractAddress);
  const [login, setLogin] = useState(false);
  const { data, isLoading, error } = useContractRead(contract, "manufactureArr", [address]);
  const [Input, setInput] = useState({
    name: "",
    location: ""
  });

  const handleInputChange = (key: string, value: string) => {
    let _input: any = Input;
    _input[key] = value;
    setInput({ ..._input });
  };


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
                        <div className="px-[10%] py-[40px] flex flex-col gap-[20px] ">
                          <div >
                  <h3>Manufacturer Details</h3>
              <p><span>Manufacturer Name: </span> {data[1]}</p>
              <p><span>Manufacturer Location: </span> {data[2]}</p>
            </div>
              <Web3Button
                contractAddress={contractAddress}
                action={() => router.push("/manufacturer/create-qr")
                }
              >
                Create Qr for product
              </Web3Button>
              <Web3Button
                contractAddress={contractAddress}
                action={() => router.push("/manufacturer/add-retailer")
                }
              >
               Add Retailer to Product 
              </Web3Button>
              <Web3Button
                contractAddress={contractAddress}
                action={() => router.push("/manufacturer/create-product")
                }
              >
                Create New Product
              </Web3Button>
            </div>
                      ) : (
                        <div className="px-[10%] py-[40px] flex flex-col gap-[20px] ">
                          <h3>Create Manufacturer Account</h3>
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

export default Manufacturer;
