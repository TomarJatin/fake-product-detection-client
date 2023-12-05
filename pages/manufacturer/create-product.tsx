import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  Web3Button,
} from "@thirdweb-dev/react";
import FormField from "../../components/FormField";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const CreateProduct: NextPage = () => {
  const contractAddress = "0x2c9F16B88F3AA7b4eCA45115eDedE00172c9E44f";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const [login, setLogin] = useState(false);
  const { data, isLoading, error } = useContractRead(
    contract,
    "manufactureArr",
    [address]
  );
  const [CreateCodeInput, setCreateCodeInput] = useState({
    code: "",
    brand: "",
    model: "",
    desc: "",
  });

  const handleInputChange = (key: string, value: string) => {
    let _input: any = CreateCodeInput;
    _input[key] = value;
    setCreateCodeInput({ ..._input });
  };

  function getCurrentDateTime() {
    const now = new Date();

    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "short" });
    const year = now.getFullYear();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Add leading zero if needed
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedDateTime = `${formattedDay}-${month}-${year} ${formattedHours}:${formattedMinutes}`;

    return formattedDateTime;
  }

  useEffect(() => {
    console.log("data : ", data);
    if (data && data[0] === address) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [data, address]);

  return (
    <main>
      <h1>CreateProduct</h1>
      <ConnectWallet
        dropdownPosition={{
          side: "bottom",
          align: "center",
        }}
      />

      {!isLoading ? (
        <div>
          {login ? (
            <div className="px-[10%] py-[40px] flex flex-col gap-[20px] ">
              <FormField
                labelName="Code *"
                placeholder="Enter Code of product here"
                inputType="text"
                value={CreateCodeInput.code}
                handleChange={(e: any) =>
                  handleInputChange("code", e.target.value)
                }
              />
              <FormField
                labelName="Brand *"
                placeholder="Enter brand name here"
                inputType="text"
                value={CreateCodeInput.brand}
                handleChange={(e: any) =>
                  handleInputChange("brand", e.target.value)
                }
              />
              <FormField
                labelName="Model *"
                placeholder="Enter Model number here"
                inputType="text"
                value={CreateCodeInput.model}
                handleChange={(e: any) =>
                  handleInputChange("model", e.target.value)
                }
              />
              <FormField
                labelName="Description *"
                placeholder="Enter product description"
                inputType="text"
                isTextArea={true}
                value={CreateCodeInput.desc}
                handleChange={(e: any) =>
                  handleInputChange("desc", e.target.value)
                }
              />
              <Web3Button
                contractAddress={contractAddress}
                action={(contract) =>
                  contract.call("createCode", [
                    address,
                    CreateCodeInput.code,
                    CreateCodeInput.brand,
                    CreateCodeInput.model,
                    1,
                    CreateCodeInput.desc,
                    getCurrentDateTime(),
                  ])
                }
              >
                Submit
              </Web3Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </main>
  );
};

export default CreateProduct;
