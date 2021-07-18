# block-o-bot [![](https://img.shields.io/badge/Made%20with-%F0%9F%92%96-red)](https://github.com/Nyrok/block-o-bot)
> **A simple script to ban/kick added bots and derank adders.** 
# Requirements
* Client with permissions higher than potentials adders,
* Client with `VIEW_AUDIT_LOGS` permission,
* Client with `BAN_MEMBERS` or `KICK_MEMBERS` permission according to [config.json](https://github.com/Nyrok/block-o-bot/blob/main/config.json) file.
# Install
Download link [here](https://github.com/Nyrok/block-o-bot/archive/refs/heads/main.zip), then open your cmd in there dans type :
`npm install` and `node main` to start after configuring [config.json](https://github.com/Nyrok/block-o-bot/blob/main/config.json) file.
# Configurations
| NEED TO EDIT | [config.json](https://github.com/Nyrok/block-o-bot/blob/main/config.json) | Default | Type
| ------ | ------ | ------ | ------ | 
| token | Token User of the **Client** | "CLIENT_TOKEN" | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String)
| protection | If you want that **Script Works** | true | [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
| method | Method used to punish **bots adding** | "KICK" | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String)
| reason | Reason of **Kick**/**Ban** | "This bot adding isn't allowed." | [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String)
| whitelist | Users to **Whitelist** | [] | [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
# Changelog
> ## **1.0.0**
>    * First Publish.
# Credits
* Nyrok :
  - [Github](https://github.com/Nyrok) ![GitHub followers](https://img.shields.io/github/followers/Nyrok?style=social)
  - [Twitter](https://twitter.com/@Nyrok10) ![Twitter Follow](https://img.shields.io/twitter/follow/Nyrok10?style=social)
> Don't forget to Star this open-source repo ! ![GitHub Repo stars](https://img.shields.io/github/stars/Nyrok/block-o-bot?style=social)
# License
Apache-2.0
