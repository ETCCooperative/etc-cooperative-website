---
id: "2023-05-18-the-etc-cooperative-2022-retrospective-report-cn"
title: "ETC合作社2022年度回顾报告"
author: Donald McIntyre
featuredImage: 2022-retro.png
tags: [公告]
---

我们很高兴发布ETC合作社2022年的回顾报告。

* [ETC合作社2022年度回顾报告](/CN-ETC-Cooperative-Retrospective-2022-FINAL.pdf)

2021年，ETC合作社在2022年4月结束的资金安排之前从Grayscale收到了一笔巨额付款。与之前的日历年相比，我们在最后12个月收到的资金几乎是之前的10倍，使得ETC合作社在2022年底时持有价值超过500万美元的资产（包括市值上的ETC代币）。

由于资金的增加，ETC合作社在整个2022年一直为三名核心开发者提供资金支持，他们除了开发[Core Geth](https://github.com/etclabscore/core-geth)和[Hyperledger Besu](https://github.com/hyperledger/besu)客户端之外，还从事了各种技术项目。所有的技术项目都在2022年的回顾报告中有详细介绍。

2022年2月，通过[Mystique](https://ecips.ethereumclassic.org/ECIPs/ecip-1104)硬分叉顺利进行了网络升级，将以太坊的“伦敦”协议变更引入到以太经典中，但不包括与ETC的固定货币政策冲突的EIP-1559费用市场变更。

7月份，我们与Bitmain和Antpool联手，承诺向ETC生态系统投资价值1000万美元。这笔资金已经通过[ETC Grants DAO](https://etcgrantsdao.io/)项目在2023年1月推出。

9月份，以太坊成功进行了期待已久的共识机制过渡，实现了“合并”。共识机制过渡对该网络来说非常顺利，以太经典网络也接受了大量以太坊矿工的算力。有一段时间，算力暴增了10倍，但现在已经稳定在每秒115-130 TH/s的持续速率。

![ETC哈希率激增](/etc-hash-rate-retro-1.png)

ETC现在是全球最大的工作量证明智能合约区块链，也是Ethash家族中占主导地位的哈希链，因此从51%攻击的角度来看，它是迄今为止最安全的。

在11月份，ETC合作社通过增加一个完整的通信团队进一步巩固了其地位。这个团队非常有效，给我们带来了我们一直缺乏的市场影响力。该团队包括中文翻译，自他们在11月份开始工作以来，合作社的所有沟通都同时进行英文和中文版本，最终有助于弥合ETC在以太经典中的[东西方分歧](https://bobsummerwill.com/2019/10/03/addressing-east-west-disconnect-in-etc/)这个分歧最早在2019年被发现。

我们以非常强势的姿态迎接2023年。

以下是2022年回顾报告的亮点。

## 开发和基础设施

ETC合作社继续为ETC提供关键基础设施的资金支持，包括Core-Geth客户端、Hyperledger Besu客户端、BlockScout区块浏览器和公共RPC端点。

新加入了两名开发人员Isaac Ardis和Chris Ziogas，他们将与Diego López León一起负责客户端开发、升级、维护以及其他以太经典的重要项目，包括：

- [BlockScout](https://blockscout.com/etc/mainnet/)区块浏览器，是ETC最广泛使用的区块浏览器。
- [Safe wallet](https://multisig.etccooperative.org)的实现, 是以太虚拟机领域中最流行的多签名钱包。
- [ETC节点浏览器](https://etclabscore.github.io/nodes-interface/), 用于监控ETC节点的版本和区域覆盖率统计。
- [ETC孤块追踪器](https://classic.orphans.etccore.in), 一个只读用户界面，用于追踪以太经典上的孤块。
跨客户端测试。
- DiscV4 DNS，为以太经典节点提供其他节点的IP地址。
- VHCVHC（交易的验证头上下文）和TABS（总活跃余额综合）[研究](https://ecips.ethereumclassic.org/ECIPs/ecip-1108)
- 支持实施和测试EVM对象格式（EOF）升级。
- 对[Erigon](https://github.com/etccooperative/erigon/tree/devel+classic)和[Geth+ETC](https://github.com/etclabscore/ethereum.go-ethereum/tree/etc-lite-patch)客户端进行研究和实验性工作。
- 维护ETC客户端在[packages on DappNode](https://ethereumclassic.org/blog/2023-04-26-how-run-an-ethereum-classic-node-using-dappnode)上的软件包，这是一家领先的区块链硬件节点提供商。

![ETC节点浏览器](/etc-node-explorer-retro-1.png)

## 传播和市场营销

ETC合作社在2022年的营销和传播策略主要集中在提高使用以太经典（ETC）和合作社在支持ETC生态系统方面的认知。在2022年末，我们采取了措施解决这个情况，通过[聘请一个传播团队。](https://etccooperative.org/posts/2022-11-15-announcing-the-new-etc-cooperative-communications-team-cn).

我们的新团队成员包括Donald McIntyre，一位有着10年区块链经验的资深编辑，将担任高级编辑；Andrew Dick，一位技术传播和营销专家，将担任市场经理；Angelah Liu，拥有全球事务硕士学位，具有Web 3和加密货币场外交易行业经验，将担任社交媒体经理；Emma Todd，采矿专家、公共演讲者，也是MMH Technology Group的首席执行官，将担任活动经理。

2022年的主要传播和营销活动将延续到2023年及以后，包括：

- 我们的几乎所有活动都以英文和中文发布和推广。
- 我们在ETC合作社网站和Medium博客上发布了17篇文章，并在YouTube频道上发布了4个视频。
- 我们为[ETC community website](https://ethereumclassic.org/zh/news)贡献了16篇文章，并为社区的[YouTube频道](https://www.youtube.com/@ETCupdates)贡献了16个视频。
- 处理了由IOHK首席执行官Charles Hoskinson恶意转移到另一个区块链项目的[@eth_classic](https://twitter.com/eth_classic)Twitter账号的争议。
- 我们为[@eth_classic](https://twitter.com/eth_classic)和[@etc_network](https://twitter.com/etc_network)Twitter社区账号贡献了13条推文。
- 我们创建了《ETC周报》，该节目讨论每周的文章。
- 恢复并发送了8封邮件简报。
- 多次参加了今年31次ETC社区电话会议。

## 财务

我们报告称，总体而言，2022财年的实际成本比预算节省了64万美元。主要差异在于较低的开发成本（节省了30万美元）和将资助计划推迟到2023年（25万美元）。

![ETC Coop ](/coop-fin-retro-1.png)

预算开发成本包括再雇佣2名开发人员；然而，经过评估确定，一个由3名核心开发人员和附加承包商组成的团队能够满足合作社目前的需求。

资助计划于2023年1月启动，合作社承诺投入25万美元。

由于在2022财年末雇佣了2名核心开发人员以及一个新的传播团队，F2022的成本较F2021显著增加。

2022年恢复了会议和旅行，团队的几位成员代表ETC合作社和ETC社区参加了全年的各种活动。团队中的大部分成员前往哥伦比亚参加了DevCon 2022，这使得远程团队首次能够亲自一起合作。

2022年3月是ETC合作社从Grayscale获得费用的最后一个月，因为为期两年的协议即将结束。加密货币牛市使得合作社在2022财年开始时有了520万美元的资金（包括市场价值的ETC令牌），为我们提供了几年的时间。

在2022财年末和2023年初，ETC合作社开始将其现金储备的一部分投资于ETC，因为我们认为价格被压低，希望延长可持续发展的时间。

2022财年末，ETC合作社的现金储备为514万4585美元，其中包括328,265美元的ETC令牌。

---

**感谢您阅读本期文章!**

了解更多有关ETC合作社，请访问:  [https://etccooperative.org](https://etccooperative.org/)

了解更多有关ETC，请访问:  [https://ethereumclassic.org](https://ethereumclassic.org/zh/)
