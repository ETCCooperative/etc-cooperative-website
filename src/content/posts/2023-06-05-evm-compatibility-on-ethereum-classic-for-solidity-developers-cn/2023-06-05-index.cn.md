---
id: "2023-06-05-evm-compatibility-on-ethereum-classic-for-solidity-evelopers-cn"
title: "以太坊经典上的EVM兼容性，面向Solidity开发人员"
author: Donald McIntyre
featuredImage: evm-comp.png
tags: [Announcement]
---

以太坊经典旨在通过最终包含来自最新以太坊网络升级的变更，保持与以太坊虚拟机（Ethereum Virtual Machine，简称EVM）的兼容性。这个过程涉及以太坊经典区块链生态系统协调网络升级。

截至本文撰写时，随着ETC激活**Mystique** ([ECIP-1104](https://ecips.ethereumclassic.org/ECIPs/ecip-1104))硬分叉，以太坊经典支持ETH[伦敦](https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/london.md)升级的EVM功能。

目前，我们正在努力添加对ETH[上海](https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md)升级的支持，预计将在2023年第三季度完成。

对于在以太坊经典网络上部署的Solidity开发人员，重要的是要通过将 _目标设置_ 为**伦敦**来编译您的智能合约。

例如:

```shell
$ solc --evm-version london contract.sol
```

您可以在Solidity的[官方文档](https://docs.soliditylang.org/en/latest/using-the-compiler.html#setting-the-evm-version-to-target)网站上找到更多关于此以及其他配置选项的信息。

---

**感谢您阅读本期文章!**

了解更多有关ETC合作社，欢迎访问:  [https://etccooperative.org](https://etccooperative.org/)

了解更多有关ETC，欢迎访问:  [https://ethereumclassic.org](https://ethereumclassic.org/)
