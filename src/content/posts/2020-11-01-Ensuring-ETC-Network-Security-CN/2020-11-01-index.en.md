---
id: "2020-11-01-Ensuring-ETC-Network-Security-CN"
title: "Ensuring ETC Network Security"
author: Roy Zou 
featuredImage: etc-network-cn.png
tags: [Research]
---

## 保障ETC网络安保障ETC安全——比较51%攻击防御提案全

![image-cn](/image-cn.png)

**保障ETC安全——比较51%攻击防御提案**

 在2019年到2020年间，ETC遭受了4次51%攻击。最近就发生了三起攻击事件，间隔时间只有几周，导致利益相关方因双重支付和服务中断而损失惨重。在发生这些攻击之后，出现了一些以太坊经典改进方案（ECIPs），针对防御51%攻击提供即时解决方案。

  IOHK和ETC Coop已经建立合作，为ETC利益相关者和更广泛的社区如何抵御51%攻击提供相关技术和建议。为支持该行动，我们创建了一个比较文档，列出并总结了各种51%攻击防御方案。在文档中，ETC社区成员将能够评估每个方案，了解个中忧患，并获得有关ETC社区如何解决ETC网络安全问题的意见。

  ECIP 1100 (指数主观评分改进方案 EMSS) 将在短期内被采纳。EMSS是对Vitalik Buterin提出的指数主观评分 (ESS) 方案的改进版本，旨在使更大的链重组更加困难。然而，我们认为此方案不能提供强大的安全保障，亦不保证能避免进一步的攻击。但最令人忧心的是，既没有人正式研究过MESS，也没有人检验过其安全性。此外，一系列针对MESS的潜在攻击早已存在。

                                                     “检查点"方案是发展方向


  另一方面，“检查点”方案可以通过确定性敲定避免51%攻击。这个方法为ETC核心开发者提供了一个安全的环境，以便创新和实现正在进行的实验性方案，包括MESS, Reducing the dag, Keccak-256等。考虑到ETC价值和用户体验受MESS的低信任度和主观确定性牵制，MESS并不会为利益相关者提供高信任度来将确认时间减低到令人满意的水平。

  ETC网络是Ethash环境中少数的PoW区块链。截至2020年10月8日，以太坊的哈希值约为248.16 TH/s，Nicehash的哈希值约为9.34 TH/s，但是ETC的哈希值只有约3.47 TH/s。这表示ETC的哈希值仅达到以太坊的1.5%和Nicehash的40%左右，而Nicehash只是众多挖矿平台之一。但应注意的是，通用硬件可挖矿的非Ethash网络也可以转向ETC，这意味着ETC是少数的PoW区块链，而不能与上述的以太坊和Nicehash进行比较。

  因此，ETC当前的安全性假设不再成立。根据ETH的PoS时间轴推测ETC的网络安全性也不是可持续的安全策略，且大概其并不能算是提高网络价值的有力证明。

                                                          展望未来


  的确，我们这样做的意义远不止于此。ETC正处于关键时期，我们的决定不仅影响平台的未来，还会影响整个生态系统。任何抵御51%攻击的方案都必须足够稳健，才能使ETC开发者、用户和服务提供商完全信赖交易的安全性。

  目前，我们的重点是减少损失。但是，请牢记我们的长期目标是一个健康且可持续的ETC网络。让我们果断地采取措施来加强网络安全，并共同展望网络发展、社区成长和可持续创新的新时代。

  

来源:https://etccooperative.org/posts/2020-10-20-ensuring-etc-network-security
  社区管理员Yan (微信号 Godel_Labs2）

---
QQ群 :361470220 / 230987631

微博 : @ 以太经典_ETC

Twitter: @etcconsortium

中国以太经典ETC中文网 : https://ethereumclassic.cn

ETCC官网 ： https://etcconsortium.org

感谢哥德尔实验室（www.godel.ai）的大力支持！
---


著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: http://ethereumclassic.cn/2020/10/27/ETC-News.html
