import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button, } from "@thirdweb-dev/react";
import { NextPage } from "next";
import FormField from "../../components/FormField";
import { useEffect, useState } from "react";

const Retailer: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const [login, setLogin] = useState(false);
  const { data, isLoading, error } = useContractRead(contract, "getRetailerDetails", [address]);
  const [Input, setInput] = useState({
    code: "",
    customer: ""
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
              <FormField
                labelName="Code *"
                placeholder="Enter Code of product here"
                inputType="text"
                value={Input.code}
                handleChange={(e: any) =>
                  handleInputChange("code", e.target.value)
                }
              />
              <FormField
                labelName="Brand *"
                placeholder="Enter brand name here"
                inputType="text"
                value={Input.code}
                handleChange={(e: any) =>
                  handleInputChange("brand", e.target.value)
                }
              />
              <Web3Button
                contractAddress={contractAddress}
                action={(contract) =>
                  contract.call("createCode", [
                    address,
                    Input.code,
                    address,
                    Input.customer
                  ])
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

export default Retailer;
