---
title: Long Term Support
---

Fastify's Long Term Support (LTS) is provided according the schedule laid
out in this document:

1. Major releases, "X" release of [semantic versioning][semver] X.Y.Z release
   versions, are supported for a minimum period of six months from their release
   date. The release date of any specific version can be found at
   [https://github.com/fastify/fastify/releases](https://github.com/fastify/fastify/releases).

2. Major releases will receive security updates for an additional six months
   from the release of the next major release. After this period is expired,
   we will still review and release security fixes as long as they are
   provided by the community and they do not violate other constraints,
   e.g. minimum supported Node.js version.

3. Major releases will be tested and verified against all Node.js
   releases that are supported by the
   [Node.js LTS policy](https://github.com/nodejs/Release) within the
   LTS period of that given Fastify release line.

A "month" is to be a period of 30 consecutive days.

[semver]: https://semver.org/

<a id="lts-schedule"></a>

### Schedule

| Version | Release Date | End Of LTS Date | Node.js              |
| :------ | :----------- | :-------------- | :------------------- |
| 1.0.0   | 2018-03-06   | 2019-09-01      | 6, 8, 9, 10, 11      |
| 2.0.0   | 2019-02-25   | TBD             | 6, 8, 10, 11, 12, 13 |

<a id="supported-os"></a>

### CI tested operating systems

| OS      | Version                | Package Manager           | Node.js   |
|---------|------------------------|---------------------------|-----------|
| Linux   | Ubuntu 16.04           | npm                       | 6,8,10,12 |
| Linux   | Ubuntu 16.04           | pnpm                      | 8,10,12   |
| Linux   | Ubuntu 16.04           | yarn                      | 8,10,12   |
| Windows | Windows Server 2016 R2 | npm                       | 6,8,10,12 |
| MacOS   | macOS X Mojave 10.14   | npm                       | 6,8,10,12 |

Using yarn might require passing the `--ignore-engines` flag.
