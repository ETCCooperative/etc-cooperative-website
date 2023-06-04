---
id: "2023-06-05-evm-compatibility-on-ethereum-classic-for-solidity-evelopers-en"
title: "EVM Compatibility on Ethereum Classic for Solidity Developers"
author: Donald McIntyre
featuredImage: evm-comp.png
tags: [Announcement]
---

Ethereum Classic (ETC) aims to keep compatibility with the Ethereum Virtual Machine (a.k.a. EVM) by eventually including changes from the latest Ethereum (ETH) network upgrades. This process implies the coordination of network upgrades by the Ethereum Classic blockchain ecosystem.

At the time of this writing, with the activation of the ETC **Mystique** ([ECIP-1104](https://ecips.ethereumclassic.org/ECIPs/ecip-1104)) hard fork, Ethereum Classic supports EVM features up to the ETH [London](https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/london.md) upgrade.

At this moment, we are working on adding support for the ETH [Shanghai](https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md) upgrade, which we expect will be ready by Q3 2023.

For Solidity developers deploying on the Ethereum Classic network, it is important that you to compile your smart contracts by setting the _target_ to **london**.

For example:

```shell
$ solc --evm-version london contract.sol
```

You can find more information about this, and other configuration options, on Solidity's [official documentation](https://docs.soliditylang.org/en/latest/using-the-compiler.html#setting-the-evm-version-to-target) site.

---

**Thank you for reading this article!**

To learn more about the ETC Cooperative go to:  [https://etccooperative.org](https://etccooperative.org/)

To learn more about ETC go to:  [https://ethereumclassic.org](https://ethereumclassic.org/)
