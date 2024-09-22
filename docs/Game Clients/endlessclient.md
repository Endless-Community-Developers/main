---
layout: page
title: EndlessClient
permalink: /endlessclient/
parent: Clients
---

# EndlessClient

### About Client

EndlessClient is an open-source client written in C# for Endless Online

### Contributing 

This is a general guide for contributing to the EndlessClient project. Pull requests that do not meet the minimum of these requirements will not be accepted, and you will be referred to the document. This is an evolving document and is subject to change without notice.

Note from Ethan Moffat: All contributions are welcome! I'd rather work with a contributor to meet these requirements than not have any contributions at all, so please be open to receiving feedback if you open a PR.

**Project Link:** [EndlessClient Contribution Guide](https://github.com/ethanmoffat/EndlessClient/blob/master/contributing.md)

### Check it out on GitHub

**Project Link:** [Main Branch](https://github.com/ethanmoffat/EndlessClient)

### Dependencies

Source builds require Visual Studio, the .Net 6.0 SDK, and the .Net 3.1 runtime (for building content with the MonoGame content builder pipeline tool). Other dependencies are installed via Nuget. MonoGame no longer needs to be installed ahead of time!

.Net 6.0 runtime is required to run the pre-built binary.

### Pre-built binary

**Project Links:** [Releases](https://github.com/ethanmoffat/EndlessClient/releases)

### How to play

Download the appropriate release for your platform, then copy the data directories (data, gfx, jbox, mfx, sfx) from whichever client you normally use to EndlessClient's unzipped location. Run EndlessClient by double-clicking the icon (any platform) or running ./EndlessClient (Linux).

### Building EndlessClient from source

Please refer to the GitHub read me file for instructions on how to build the project. 