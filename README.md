# Blockchain-based Product Ownership Management System

A blockchain-based Product Ownership Management System for anti-counterfeits in the Post Supply Chain.

Live Website - [Counterfiet Product Detection](https://fake-product-detection-client.vercel.app/)
Contract repo - https://github.com/TomarJatin/thirdweb-contracts

## Table of Contents

- Project Overview
- Demo
- Features
- Technologies Used
- Contributing
- License


## Project Overview <a name="description"></a>
+ In today’s world, how do you know if you are buying a genuine product?
+ For more than a decade now, RFID (Radio Frequency IDentification) technology has been quite effective in providing anti-counterfeits measures in the supply chain.
+ We leverage the idea of Bitcoin’s blockchain that anyone can check the proof of possession of balance. Along with this, we plan to use QR codes.
+ We plan to implement a proof-of-concept system employing a blockchain-based decentralized application which gives a customer the entire history of a product (eg - brand info, owner, etc).

### Data Flow
![Data Flow](https://imgur.com/VGIPtDU.png)

### Why blockchain? <a name="why_blockchain"></a>
+ Unlike a normal database, Blockchain has a non-destructive (immutable) way to track data changes over time. This means that data is not editable rather, whenever updates are made, a new block is added to the “block-chain”. This helps track historical data (authenticity and owner data) of a product.
+ Given the amount of data to be dealt with (large amount of products being developed), if you have to keep track of all of them, it is better to have a decentralized and distributed network of nodes so that no entity can tamper with the product data and we also obtain 100% up time.
+ Transparent nature of the Blockchain helps avoid [parallel trade](https://en.wikipedia.org/wiki/Parallel_import).
+ Using Blockchain, authenticity can be checked and ownership of a product can be transferred _decades_ from now; even if the product is discontinued.

## Demo


![Screenshot from 2023-12-05 11-00-56](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/2f4fb134-96a9-426b-b257-419310e56c5a)
  
![Screenshot from 2023-12-05 11-01-06](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/9ae8ed1e-f404-4dd7-b61b-c225aac87f66)

![Screenshot from 2023-12-05 11-01-53](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/ca49511f-e655-4c10-a38f-38620e2fbf79)

![Screenshot from 2023-12-05 11-01-41](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/b0ed96b2-d3e1-479d-8bc5-24725afe8948)

![Screenshot from 2023-12-05 11-03-13](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/3549aad0-d41a-476f-925e-63b6687f650f)

![Screenshot from 2023-12-05 11-01-30](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/43ea996a-2167-439e-ac33-8cbe5038e82a)

![Screenshot from 2023-12-05 11-03-00](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/b8cb2942-d0f1-4f70-94cc-afa3af2511c6)

![Screenshot from 2023-12-05 11-02-38](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/98f37c9a-6116-4e56-8313-a7fd97b8fae6)

![Screenshot from 2023-12-05 11-02-22](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/f73555ff-af0f-477f-b560-d673c5d5cb3c)

![Screenshot from 2023-12-05 11-02-16](https://github.com/TomarJatin/fake-product-detection-client/assets/91650461/357aeb2a-395f-493e-833c-706fb9b19cba)







## Features

- Register a customer, reatiler or manufacturer.
- List your products.
- Manage retailers for a particular product.
- Generate Qr code for a product
- Check entire previous history of a product

## Technologies Used

- Next.js: A JavaScript framewrok for building user interfaces.
- Hardhat: A development environment for Ethereum that allows writing, testing, and deploying smart contracts.
- ThirdWeb: A library that simplifies the interaction with smart contracts using Web3.js and ethers.js.
- Solidity: A contract-oriented programming language for writing smart contracts on the Ethereum platform.

## Contributers
<div>
  <a href="https://github.com/GenMech">
    <img src="https://avatars.githubusercontent.com/u/85284840?v=4" style="border-radius: 80px; width: 100px; height: 100px;" />
  </a>
  <p>Genmech</p>
  <a href="https://github.com/TomarJatin">
    <img src="https://avatars.githubusercontent.com/u/91650461?v=4" style="border-radius: 80px; width: 100px; height: 100px;" />
  </a>
<p>Jatin Tomar</p>
</div>


## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request to this repository.

Before contributing, please familiarize yourself with the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of this license.
