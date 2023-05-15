---
id: "2023-05-15-addressing-practical-attacks-on-core-geth-synchronising-nodes-by-taverna-and-paterson-en"
title: "Addressing Practical Attacks on Core Geth Synchronising Nodes by Taverna and Paterson"
author: Isaac Ardis
featuredImage: practical-attacks.png
tags: [security]
---

A tip of our cooperative hats to security researchers Prof. Kenny Paterson and Massimiliano Taverna of ETH Zurich, whose [research describes](https://appliedcrypto.ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/research/TavernaPaterson-SnappingSnapSync.pdf) a legitimate vulnerability and, impressively, demonstrates theoretically effective code to accompany it.

Having received their well-formed disclosure responsibly in February, it has been our pleasure to work in correspondence with them toward reviewing and reproducing their findings since that time.

Although our many attempts to reproduce their experiment were unsuccessful, the reasons for our differing experimental outcomes are most likely attributable to unaccounted-for implementation details in the core-geth source and non-transferrable experiment parameters. Our experiments, however, did show, in large part, the theoretical efficacy of their design and implementation, and were readily sufficient in affirming their rationale.

While these results gladly lessen our view of the practical risk to the network, we consider it actionable nonetheless to implement their provided patches.

The first of these patches has been included in the main branch of core-geth's code for nearly a month, and we intend to publish a release including the second patch as well early this week.

Today's [release v1.12.11](https://github.com/etclabscore/core-geth/releases/tag/v1.12.11) includes the PRNG patch which, as described, effectively mitigates the SNaP attack vector.

For the public disclosure of the vulnerabilities discovered by Paterson and Taverna please see this [Twitter thread](https://twitter.com/kennyog/status/1658057298634309638).

We thank both Prof. Kenny Paterson and Massimiliano Taverna for their work and collaboration.

--- 

**Thank you for reading this article!**

Learn more about [Ethereum Classic.](https://ethereumclassic.org)

Learn more about the [ETC Cooperative.](https://etccooperative.org)
