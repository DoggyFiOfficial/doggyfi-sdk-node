# Changelog

## 0.1.0-alpha.12 (2025-03-28)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#86](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/86)) ([3b19b4f](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/3b19b4f86da50d75e4e36b9607f0f40349597d23))
* **api:** api update ([#94](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/94)) ([444ccd4](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/444ccd44e599fce6d695e3a5edf8fb13658b52a2))
* **api:** manual updates ([#79](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/79)) ([608becf](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/608becf9f19f0f835bbbfeafc4e6c4c4c4b53986))
* **client:** accept RFC6838 JSON content types ([#87](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/87)) ([ae4f9d2](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/ae4f9d2d642711834b159df7f8d4e1341ad2f4d3))


### Bug Fixes

* avoid type error in certain environments ([#92](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/92)) ([bc4b6e6](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/bc4b6e6261e23691cc5e88535508ca1514285bcd))
* **client:** fix export map for index exports ([#81](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/81)) ([acfcf26](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/acfcf26d2fd544cb4616b31cb312e9f285c2dbca))
* **client:** mark some request bodies as optional ([#82](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/82)) ([5656ef0](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/5656ef08e468f43ac5147f3384a11d3e1d0253ba))
* **exports:** ensure resource imports don't require /index ([#89](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/89)) ([b8cc9a9](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/b8cc9a9be5d5eab4526169250c3653749bd34696))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#93](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/93)) ([30c5552](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/30c55529ccf88b3982ad1c8326ee3c44bab97291))


### Chores

* **exports:** cleaner resource index imports ([#90](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/90)) ([40eb8a7](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/40eb8a7accd0fd9a73a489d4aadf3e1fa3077983))
* **exports:** stop using path fallbacks ([#91](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/91)) ([5b4f034](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/5b4f034a44d4b8bde4387047aec8867090530e64))
* **internal:** codegen related update ([#85](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/85)) ([31e221e](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/31e221e170ecd917f0b0c62e44a145e68b7e810c))
* **internal:** fix devcontainers setup ([#84](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/84)) ([8e9c27d](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/8e9c27d11b6331bf0a5dae0d2131b41bcbcd5062))
* **internal:** remove extra empty newlines ([#88](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/88)) ([9aeb564](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/9aeb5643a5c1df60f82177d2231967a1c680ccfb))

## 0.1.0-alpha.11 (2025-02-06)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** api update ([#76](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/76)) ([9f522e5](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/9f522e54b4ff68ccb68b71b5c8f3b08c550a888b))

## 0.1.0-alpha.10 (2025-02-05)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** api update ([#73](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/73)) ([e500695](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/e500695130a23137430607a9cf097adbd52fbaee))
* **client:** send `X-Stainless-Timeout` header ([#74](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/74)) ([6252c29](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/6252c292dc1b53c09f35263f1e9c36b0cf0c40be))


### Chores

* **internal:** add test ([#72](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/72)) ([00faeab](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/00faeab98f36cd819cd96ad0fd8db022d3f1001c))
* **internal:** codegen related update ([#69](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/69)) ([48d2902](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/48d29021e4439083d7516b3ab030045b008b6aad))
* **internal:** codegen related update ([#71](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/71)) ([173fd50](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/173fd50bcf4becdf59aeae294823177a3e0639e6))

## 0.1.0-alpha.9 (2025-01-10)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* fixes pushTx and namespace issues ([85fb97b](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/85fb97bc133f6c16e9238307a738f8ca9758f76f))
* temporarily removes mint/open examples until we fix api ([cd91752](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/cd917527e7e59c983e412fb6a849504543653857))


### Chores

* **internal:** codegen related update ([#65](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/65)) ([fa2090e](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/fa2090e640e8cd19e6e4d7f8fb63b0dbd3aaea13))

## 0.1.0-alpha.8 (2024-12-24)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* increases timeout on mintDunes cases ([21c8641](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/21c8641c7f88462ecc13f39011da8e3958d40e34))
* makes changes to support mint/open dunes signing + adds examples ([3a4b875](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/3a4b875a3b728bc045038e5022eda9b29c075ff5))

## 0.1.0-alpha.7 (2024-12-23)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* adds line comment to get PR to start ([7951ec9](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/7951ec97bf829d47cb720e862ffdf47ed6669f57))
* adds required param to test case for open dune ([942582f](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/942582f85e8ac617c453d17a92ec6aec1fc511dd))
* fixes premine param on test case ([fd0449e](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/fd0449e81f1d79ee3aed8f172d3ea10e6fdb26af))
* forces divisibility to be a required param ([f556a02](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/f556a021b363c24206c66cba0faa15a03d279347))
* some fixes for test cases not passing ([de12219](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/de12219bc9c0d6c22be74f0331de8900646027d3))

## 0.1.0-alpha.6 (2024-12-23)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** api update ([#27](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/27)) ([c87325f](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/c87325f6ea7cf840fcedf9d87fd9f07d58561ac1))
* **api:** api update ([#36](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/36)) ([7450d45](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/7450d4535b394fc54f5ac1c3fc8cd9db7e5d7ec0))
* **api:** Config update for bigfernepiphyte/dev ([#35](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/35)) ([9a8cd18](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/9a8cd18016ee96309d9e0e6a2137052e1b41004c))
* **api:** OpenAPI spec or Stainless config update by bigfernepiphyte… ([#40](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/40)) ([33de46d](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/33de46da15d92b6cdde81a6bd6b71178abcf24a9))
* **internal:** make git install file structure match npm ([#26](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/26)) ([fce827b](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/fce827b9209581a7f8c20cdc3914553a34d35041))


### Bug Fixes

* **client:** normalize method ([#34](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/34)) ([2be7106](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/2be7106cb1717c07232a435a51c15474a3beaa6f))


### Chores

* **internal:** bump cross-spawn to v7.0.6 ([#29](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/29)) ([9ed6528](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/9ed6528925c77a211a3ab59505a58fa2247ecde0))
* **internal:** codegen related update ([#24](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/24)) ([17827a3](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/17827a369527a0d4f88985c7a1a05a80f16648a3))
* **internal:** codegen related update ([#31](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/31)) ([0680e5d](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/0680e5d0ffb0370425effbf8648954ddf3d44786))
* **internal:** codegen related update ([#32](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/32)) ([0a6859a](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/0a6859ab68bed77aa6e3504bc78fe1c6ab06119e))
* **internal:** codegen related update ([#37](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/37)) ([3f3f4d0](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/3f3f4d0225e7b6adfc92599a96dcf4c10d6f23f3))
* **internal:** codegen related update ([#38](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/38)) ([cfadfab](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/cfadfab361878dd13c30adb668b5f3a68d3bd619))
* **internal:** fix some typos ([#33](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/33)) ([1b870a7](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/1b870a75530c9d1e5c68cddae8554d62f6809980))
* **internal:** remove unnecessary getRequestClient function ([#28](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/28)) ([a23c4ed](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/a23c4ed2cf4e67a5ad9974cc0d8455acea6f08da))
* **internal:** version bump ([#42](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/42)) ([897c1b8](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/897c1b857ce41e58de35d3cf51e21897f78b4c66))
* **internal:** version bump ([#47](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/47)) ([3f73ff3](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/3f73ff370d0c855dd9a6cdf2c1b2479a9a92c103))
* **types:** nicer error class types + jsdocs ([#30](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/30)) ([c220f33](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/c220f3358f5bce5dd182a786bdac8f062bbca723))


### Documentation

* minor formatting changes ([#39](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/39)) ([8e7c0ed](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/8e7c0ed3da6ed3d4767c5e5e9bdb94b37c68f298))

## 0.1.0-alpha.5 (2024-12-23)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Chores

* **internal:** version bump ([#20](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/20)) ([2183177](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/21831776be5972007e10647b6912320fdfd668aa))
* remove redundant word in comment ([#18](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/18)) ([bdd478e](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/bdd478eef547b5ffe122248fc854b0013426b075))


### Documentation

* remove suggestion to use `npm` call out ([#17](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/17)) ([7821a9e](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/7821a9efed28a2d0d4d1bd275de0fc09188f9192))

## 0.1.0-alpha.4 (2024-12-23)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** api update ([#14](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/14)) ([78c253a](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/78c253a4dc863b6f5093e535736a10e875c59f1d))


### Chores

* rebuild project due to codegen change ([#11](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/11)) ([a73c2b7](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/a73c2b7f24d490d94495836597d61691932020f6))
* rebuild project due to codegen change ([#15](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/15)) ([77b309a](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/77b309afc43c23f3c5117613c7f14b1a63da5443))
* rebuild project due to codegen change ([#9](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/9)) ([6ef4ff1](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/6ef4ff12ba3e0a0be19605f1888bc7161d2c1c47))

## 0.1.0-alpha.3 (2024-11-26)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* cleans up example ([#25](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/25)) ([abc3910](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/abc3910ba467e3a9516fa4b6e08ddb5f0a31e041))

## 0.1.0-alpha.2 (2024-11-12)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* Update README.md ([40cdf94](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/40cdf94521b84e1fb8379c7c739adee0e2023f09))

## 0.1.0-alpha.1 (2024-10-25)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** api update ([7ace9a8](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/7ace9a8c1d27a0673d56a5f6fb047062effae9c9))
* **api:** api update ([#1](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/1)) ([ae64664](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/ae64664ed31ebf5195c63fade5322c4b307bbf99))
* **api:** api update ([#4](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/4)) ([0d7a4b6](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/0d7a4b684a223358d55b23b507bb4be984e40eea))
* **api:** api update ([#8](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/8)) ([6102e2a](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/6102e2a5fb83fc24fdb19ca29b4b8b81b7f677bb))
* **api:** manual updates ([#5](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/5)) ([0a72b5f](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/0a72b5f939f08c85a6b45bdcf4067ec72a9093cf))
* **api:** manual updates ([#6](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/issues/6)) ([810cda4](https://github.com/DoggyFiOfficial/doggyfi-sdk-node/commit/810cda466da4c157fcfe2085663cf7a67ce4d81d))
