---
id: "2023-05-15-addressing-practical-attacks-on-core-geth-synchronising-nodes-by-taverna-and-paterson-cn"
title: "解决Taverna和Paterson对Core Geth同步节点的实际攻击问题"
author: Isaac Ardis
featuredImage: practical-attacks.png
tags: [security]
---

我们向ETH Zurich的安全研究人员Kenny Paterson教授和Massimiliano Taverna致以合作的敬意。他们的研究描述了一种合法的漏洞，并令人印象深刻地展示了与之相配套的理论有效的代码。您可以在[此处](https://appliedcrypto.ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/research/TavernaPaterson-SnappingSnapSync.pdf)找到相关研究内容。

自从在二月份收到他们负责的漏洞报告以来，我们很荣幸能够与他们保持联络，对他们的研究结果进行审查和再现。

尽管我们多次尝试重新进行实验都没有成功，但我们不同的实验结果很可能是由于core-geth源代码中未考虑到的实现细节以及无法转移的实验参数所致。然而，我们的实验在很大程度上展示了他们设计和实施的理论有效性，并且在确认他们的方案合理性方面已经足够可靠。

虽然这些结果令我们对网络的实际风险更加放心，但我们仍然认为采取行动来实施他们提供的修补程序是必要的。

其中一个修补程序已经在core-geth代码的主分支中包含了近一个月的时间，而我们计划在本周初发布的版本中也包含第二个修补程序。

今天的[发布版本v1.12.11](https://github.com/etclabscore/core-geth/releases/tag/v1.12.11)中包含了PRNG修补程序，如描述所示，有效地减轻了SNaP攻击的风险。

关于Paterson和Taverna发现的漏洞的公开披露，请参阅这个[Twitter线程](https://twitter.com/kennyog/status/1658057298634309638).

我们感谢Kenny Paterson教授和Massimiliano Taverna的工作和合作。

--- 

**感谢您阅读本期文章!**

了解更多有关[以太坊经典。](https://ethereumclassic.org)

了解更多有关[ETC合作社。](https://etccooperative.org)
