---
id: "2023-01-31-etclabscore_core-geth-docker-tag-version-fmt-deprecation-en"
title: "Core-Geth / Docker Build Tag Formatting: Pattern Change and Deprecation Notice"
author: Isaac
featuredImage: core-geth.png
tags: [notice developer docker deprecations]
---

<img align="right" width="200" src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png" />

🛈 This is a **deprecation notice** about **tag formatting for Docker builds** in the Docker Hub registry.

> _TL;DR:_ For Docker builds, use `etclabscore/core-geth:v1.12.9` instead of `etclabscore/core-geth:version-1.12.9`.

---

[Core-Geth](https://github.com/etclabscore/core-geth) has automated builds in the Docker Hub registry at [hub.docker.com/r/etclabscore/core-geth](https://hub.docker.com/r/etclabscore/core-geth).

Currently, [the builds for tagged releases](https://hub.docker.com/r/etclabscore/core-geth/builds)
are labeled as `version-1.12.9`.\
 Onward, these tagged builds will be labeled instead as `v1.12.9`.

Similarly, builds for the `alltools` images will move to `alltools-v1.12.9`, rather than `alltools.version-1.12.9`.

### Rationale

1. The label formatting before was kind of weird.
2. This change moves the label formatting
   - nearer to [common conventions](https://semver.org/#is-v123-a-semantic-version), and
   - nearer to [ethereum/go-ethereum](https://hub.docker.com/r/ethereum/client-go/tags)'s registry tag labeling scheme, eg.\
     [ethereum/client-go:alltools-v1.10.26](https://hub.docker.com/layers/ethereum/client-go/alltools-v1.10.26/images/sha256-81ddbedb3ec385b2766e9ff7ef8e0b270c27a40745a246a7ae6a57fcc2221779?context=explore) v. [etclabscore/core-geth:alltools-v1.12.9](https://hub.docker.com/layers/etclabscore/core-geth/alltools-v1.12.9/images/sha256-5dcf3196fe0cd0e41a504153738e207b963372360a857856ad8e6b9eab1fea78?context=explore)

### Schedule

From `v1.12.9`..`v1.12.11`, builds for both patterns will exist.\
From `v1.12.12` and beyond, only builds labeled `vX.Y.Z` will exist.

| Version   | Prior Format                            | New Format                       |
| --------- | --------------------------------------- | -------------------------------- |
| v1.12.8   | `etclabscore/core-geth:version-1.12.8`  | :x:                              |
| v1.12.9\* | `etclabscore/core-geth:version-1.12.9`  | `etclabscore/core-geth:v1.12.9`  |
| v1.12.10  | `etclabscore/core-geth:version-1.12.10` | `etclabscore/core-geth:v1.12.10` |
| v1.12.11  | `etclabscore/core-geth:version-1.12.11` | `etclabscore/core-geth:v1.12.11` |
| v1.12.12  | :x:                                     | `etclabscore/core-geth:v1.12.12` |

- \* `v1.12.9` is, at the time of writing, the latest Core-Geth release.

For more information, see

- https://hub.docker.com/r/etclabscore/core-geth/tags
- https://hub.docker.com/r/ethereum/client-go/tags
- https://github.com/etclabscore/core-geth/releases
- https://semver.org
