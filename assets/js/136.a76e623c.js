(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{766:function(e,t,r){"use strict";r.r(t);var a=r(10),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"electrumx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#electrumx"}},[e._v("#")]),e._v(" ElectrumX")]),e._v(" "),t("p",[e._v("This document explains how to "),t("strong",[e._v("connect Electrum Wallet to an ElectrumX Server")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker version of BTCPay Server"),t("OutboundLink")],1),e._v(" (since Nov 7th 2019, version 1.0.3.137) supports full integration with "),t("a",{attrs:{href:"https://electrumx.readthedocs.io/en/latest/features.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElectrumX"),t("OutboundLink")],1),e._v(" is the most widely implemented software used for Electrum public servers that your local Electrum wallet relies upon to get all the details of, or broadcast transactions to the bitcoin blockchain. Skip to Section 2 below, to read more on what this all means, and how to set it up on your BTCPay stack.")]),e._v(" "),t("h2",{attrs:{id:"how-to-integrate-electrumx-into-your-btcpay-server-and-connect-your-electrum-wallet-to-it-for-your-complete-privacy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-integrate-electrumx-into-your-btcpay-server-and-connect-your-electrum-wallet-to-it-for-your-complete-privacy"}},[e._v("#")]),e._v(" How to integrate ElectrumX into your BTCPay Server and connect your Electrum Wallet to it for your complete privacy")]),e._v(" "),t("h3",{attrs:{id:"only-available-in-btcpay-docker-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#only-available-in-btcpay-docker-version"}},[e._v("#")]),e._v(" (only available in BTCPay docker version)")]),e._v(" "),t("p",[e._v("Before we proceed, it is important to understand how your Electrum wallet on your PC/Mac functions so well/fast, without having its own bitcoin full node. In actual fact, Electrum Wallet relies on a community effort to maintain a bunch of servers all around the world with a bitcoin full node that do this job for you! They are called Electrum Servers, and you can be a part of that community to make that network even stronger, lets see how.")]),e._v(" "),t("p",[e._v("When you click the little traffic light at the bottom of your Electrum Wallet here:")]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437133-5636c500-01c0-11ea-822c-6e72bd6d60ea.png",alt:"ElectrumWalletMainScreenLight",title:"ElectrumWalletMainScreenLight"}})]),e._v(" "),t("p",[e._v('You will see this screen with a list of all the available Electrum servers that your wallet can connect to, normally with "Select Server Automatically" already checked:')]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437521-8a5eb580-01c1-11ea-9ece-0666353a6742.png",alt:"ElectrumWalletServerList",title:"ElectrumWalletServerList"}})]),e._v(" "),t("p",[e._v('While using Electrum Wallet with "Select Server Automatically" on is the easiest, every transaction that you make/browse/broadcast in your Electrum Wallet will be done via someone else\'s server - this is a privacy risk, that will be mitigated by setting up and using your own ElectrumX Server.')]),e._v(" "),t("h2",{attrs:{id:"section-21-enable-your-own-electrumx-server-fully-integrated-with-your-btcpay-servers-full-bitcoin-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#section-21-enable-your-own-electrumx-server-fully-integrated-with-your-btcpay-servers-full-bitcoin-node"}},[e._v("#")]),e._v(" Section 2.1 Enable Your Own ElectrumX Server (fully integrated with your BTCPay Server's full bitcoin node)")]),e._v(" "),t("h3",{attrs:{id:"prerequisites-mandatory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-mandatory"}},[e._v("#")]),e._v(" Prerequisites (mandatory):")]),e._v(" "),t("ol",[t("li",[e._v("Docker only: Only the "),t("RouterLink",{attrs:{to:"/Docker/"}},[e._v("Docker version of BTCPay Server")]),e._v(" is supported.")],1),e._v(" "),t("li",[e._v("Unpruned BTCPay node: Make sure your BTCPay implementation is NOT "),t("RouterLink",{attrs:{to:"/FAQ/Synchronization/#can-i-skip-the-synchronization"}},[e._v("pruned")]),e._v(" (i.e. you have synched and stored from genesis block. Check that you do NOT use the opt-save-storage "),t("RouterLink",{attrs:{to:"/Docker/#generated-docker-compose"}},[e._v("Environment Variable")]),e._v(")")],1),e._v(" "),t("li",[e._v("Drive space: At least 400GB of drive space on the device where your docker volumes are stored is required (as at the writing of this documentation on 9th Nov 2019, the total hard drive space used is 333GB - with full node and ElectrumX enabled - and of course this will grow further over time).")]),e._v(" "),t("li",[e._v("Additional Fragments: You are familiar with how to use BTCPay's "),t("RouterLink",{attrs:{to:"/Docker/#environment-variables"}},[e._v("Additional Fragment")]),e._v(" feature as part of your environment variable setup.")],1),e._v(" "),t("li",[e._v("Server architecture: The (official) "),t("a",{attrs:{href:"https://github.com/lukechilds/docker-electrumx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElectrumX docker"),t("OutboundLink")],1),e._v(" used here is only tested on a BTCPay Server running on x86_64 architecture. So far it is tested extensively on Ubuntu 18.04 and Debian Buster. Unless it is overhauled and tested well on Raspberry Pi (and other architectures) it likely will not work.")]),e._v(" "),t("li",[e._v("Basic Linux command line knowledge: is assumed.")])]),e._v(" "),t("h3",{attrs:{id:"how-will-enabling-electrumx-server-affect-an-existing-btcpay-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-will-enabling-electrumx-server-affect-an-existing-btcpay-implementation"}},[e._v("#")]),e._v(" How will enabling ElectrumX Server affect an existing BTCPay implementation?:")]),e._v(" "),t("p",[e._v("Fundamentally, setting up ElectrumX in BTCPay server is simple, and will not affect the rest of your implementation. The only pre-requisites are as above. The "),t("a",{attrs:{href:"https://github.com/lukechilds/docker-electrumx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElectrumX official docker release"),t("OutboundLink")],1),e._v(" is enabled in BTCPay by activating the "),t("RouterLink",{attrs:{to:"/Docker/#generated-docker-compose"}},[e._v("additional fragment")]),e._v(" called "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/docker-fragments/opt-add-electrumx.yml",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("opt-add-electumx")]),t("OutboundLink")],1),e._v(". This fragment will not only enable and start the ElectrumX server, it will also enable "),t("code",[e._v("txindex=1")]),e._v(" in your bitcoin full node. "),t("code",[e._v("txindex=1")]),e._v(" (Transaction Index=ON) is a bitcoin core feature required for ElectrumX to be able to serve your Electrum Wallet detailed transaction data for any transaction, directly from the blockchain, without getting it from any third party server.")],1),e._v(" "),t("p",[e._v("If you have been running your BTCPay Server for a while but haven't had "),t("code",[e._v("txindex=1")]),e._v(" set until now, then it might take a few hours to build the index, this is no issue and it should not involve downtime of more than a few hours - better to set this to run overnight though when nobody will be using your node. Note: If you want to rebuild the index from scratch, launch bitcoind once with the "),t("code",[e._v("reindex=1")]),e._v(" option (warning: this reindex option may take a VERY long time, and is not enabled out of the box as you likely dont need it, and hence is not in scope of this document).")]),e._v(" "),t("h3",{attrs:{id:"steps-to-enable-electrumx-server-in-btcpay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-enable-electrumx-server-in-btcpay"}},[e._v("#")]),e._v(" Steps to enable ElectrumX Server in BTCPay:")]),e._v(" "),t("p",[e._v("Here are all the steps to "),t("strong",[e._v("enable ElectrumX Server in your BTCPay node")]),e._v(' (read carefully as you may need to adjust for your specific setup, especially if you use other custom or conflicting "fragments" (pruning, less-memory etc. To reiterate, you should NOT proceed further here if you run a pruned BTCPay node.')]),e._v(" "),t("ol",[t("li",[t("p",[e._v("ElectrumX Server is accessible for Electrum Wallets via TCP port 50002. You need to open this port up fully at least to be available within your own network to any PC or Android device running Electrum Wallet, and turn on port forwarding (you can also port forward 50002 from your Internet/WAN, to enable other Electrum Wallet users from the Internet to query your server).")])]),e._v(" "),t("li",[t("p",[e._v("Enable the Docker Additional Fragment on your BTCPay node by running the following commands (this is assuming a brand new BTCPay installation with LND and ElectrumX, please tweak accordingly using the "),t("RouterLink",{attrs:{to:"/Docker/#generated-docker-compose"}},[e._v("relevant documentation")]),e._v(":")],1)]),e._v(" "),t("li",[t("p",[e._v("Follow the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker#full-installation-for-technical-users",target:"_blank",rel:"noopener noreferrer"}},[e._v("normal setup and install of BTCPay Server"),t("OutboundLink")],1),e._v(", then after this command "),t("code",[e._v("cd btcpayserver-docker")]),e._v(", follow the below instructions instead of those in the link. If you already have a BTCPay Server running, then just follow from the next step.")])]),e._v(" "),t("li",[t("p",[e._v("Set your environment variables:")])])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAY_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"YOURHOST.com"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NBITCOIN_NETWORK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mainnet"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_CRYPTO1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"btc"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_REVERSEPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_LIGHTNING")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lnd"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LIGHTNING_ALIAS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MY_LN"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LETSENCRYPT_EMAIL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"you@example.com"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"opt-add-electrumx;opt-more-memory"')]),e._v("\n")])])]),t("p",[e._v("You can run all of that as one command after you tweak it to your needs. The main part for our purposes in this guide of course is "),t("code",[e._v('BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-add-electrumx"')]),e._v(". Note: "),t("code",[e._v("opt-more-memory")]),e._v(" can be removed if you like, but I really recommend it if your system has more than 1GB of RAM/memory that you can assign to BTCPay server, it will speed synching your node and the general performance of ElectrumX up drastically.")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[e._v("Set up or reconfigure BTCPay Server with ElectrumX:")]),e._v(" "),t("p",[t("code",[e._v("cd ~/BTCPayServer/btcpayserver-docker && . ./btcpay-setup.sh -i")])]),e._v(" "),t("p",[e._v('This will setup (or re-setup) your server with everything needed including ElectrumX, and it all should "just work". But, it will trigger at least a couple of hours of syncing the '),t("code",[e._v("txindex")]),e._v(", and if it is a new server, could be a couple of days depending on your hardware.")])]),e._v(" "),t("li",[t("p",[e._v("WAIT for your node to fully sync:\nYou can check the status of bitcoin core sync by going to your domain for BTCPay server, and it will show you on the front page. Or, you can check from the command line as well, using these commands:")]),e._v(" "),t("p",[t("code",[e._v("docker logs btcpayserver_bitcoind")]),e._v(" - this will show you the bitcoin core blockchain sync status (and ALL other info about your node, including any errors)")]),e._v(" "),t("p",[t("code",[e._v("docker logs generated_electrumx_1")]),e._v(" - this will show you the ElectrumX sync status. Note: ElectrumX will NOT start syncing until bitcoin full node has finished syncing, you will see errors until that is finished and these can be ignored.")])])]),e._v(" "),t("p",[e._v("Once all syncing for both bitcoin and ElectrumX has finished you can proceed to the next step. (Note: Electrum wallets will not connect to an Electrum server that has not finished synching)")]),e._v(" "),t("h2",{attrs:{id:"section-22-connect-your-electrum-wallet-desktop-or-android-to-your-electrumx-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#section-22-connect-your-electrum-wallet-desktop-or-android-to-your-electrumx-server"}},[e._v("#")]),e._v(" Section 2.2 Connect your Electrum Wallet (Desktop or Android) to your ElectrumX Server")]),e._v(" "),t("h3",{attrs:{id:"connect-to-electrumx-from-electrum-wallet-on-your-macpclinux-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-electrumx-from-electrum-wallet-on-your-macpclinux-machine"}},[e._v("#")]),e._v(" Connect to ElectrumX from Electrum Wallet on your Mac/PC/Linux Machine:")]),e._v(" "),t("p",[e._v('Read all of this first before proceeding. You may wish to do just the "Protip" below instead of the manual steps in the Electrum Wallet GUI.')]),e._v(" "),t("p",[e._v("Open Electrum Wallet. When you click the traffic light at the bottom of your Electrum Wallet:")]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437133-5636c500-01c0-11ea-822c-6e72bd6d60ea.png",alt:"ElectrumWalletMainScreenLight",title:"ElectrumWalletMainScreenLight"}})]),e._v(" "),t("p",[e._v("You will see this screen with a list of all the available Electrum servers that your wallet can connect to, normally with "),t("code",[e._v("Select Server Automatically")]),e._v(" already checked:")]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437521-8a5eb580-01c1-11ea-9ece-0666353a6742.png",alt:"ElectrumWalletServerList",title:"ElectrumWalletServerList"}})]),e._v(" "),t("p",[e._v("Now is the time to UNCHECK that "),t("code",[e._v("Select Server Automatically")]),e._v(" setting, which will enable you to enter the IP address or domain or hostname of your ElectrumX Server. In the case below, the ElectrumX server is on the local network at "),t("code",[e._v("192.168.1.3")]),e._v(" so we enter that manually (leave port as 50002) and press "),t("code",[e._v("close")]),e._v(".")]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68496320-4e276580-0252-11ea-8caf-facc8a246d70.png",alt:"EnterElectrumXServerIP",title:"EnterElectrumXServerIP"}})]),e._v(" "),t("p",[e._v("If all of the above worked well, and your node is healthy, you will get a green traffic light down the bottom right of the wallet interface as pictured here - that means success!:")]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437133-5636c500-01c0-11ea-822c-6e72bd6d60ea.png",alt:"ElectrumWalletMainScreenLight",title:"ElectrumWalletMainScreenLight"}})]),e._v(" "),t("h4",{attrs:{id:"protip-optionally-perform-the-above-steps-directly-in-electrum-wallet-config-file-before-even-opening-the-wallet-gui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protip-optionally-perform-the-above-steps-directly-in-electrum-wallet-config-file-before-even-opening-the-wallet-gui"}},[e._v("#")]),e._v(" Protip - optionally perform the above steps directly in Electrum Wallet config file before even opening the wallet GUI:")]),e._v(" "),t("p",[e._v("If you prefer to avoid connecting to other servers from the outset when you open Electrum Wallet, do the following before you open Electrum Wallet GUI.")]),e._v(" "),t("p",[e._v("In the Electrum Wallet folder ("),t("a",{attrs:{href:"https://electrum.readthedocs.io/en/latest/faq.html#where-is-my-wallet-file-located",target:"_blank",rel:"noopener noreferrer"}},[e._v("see here"),t("OutboundLink")],1),e._v(" if you don't know where that is), open and edit the "),t("code",[e._v("config")]),e._v(" file like this:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Find line: "),t("code",[e._v('"auto_connect": true,')]),e._v(" and switch it to: "),t("code",[e._v('"auto_connect": false,')]),e._v(" - this will prevent your Electrum Wallet from auto-connecting to other 3rd party Electrum Servers at launch time (to obtain block headers and transaction information).")])]),e._v(" "),t("li",[t("p",[e._v("Find line: "),t("code",[e._v('"oneserver": false,')]),e._v(" and switch it to: "),t("code",[e._v('"oneserver": true,')]),e._v(" - ensures that all data is obtained from just one server.")])]),e._v(" "),t("li",[t("p",[e._v("Find or add line: "),t("code",[e._v('"server": "SOMEIPADDRESS:50002:s",')]),e._v("and switch it to your own ElectrumX Server's IP address, in the example above this would be: "),t("code",[e._v('"server": "192.168.1.3:50002:s",')]),e._v("- hard code your IP address as the default upon opening the Wallet.")])])]),e._v(" "),t("p",[e._v("These 3 steps optional but recommended for full privacy by locking down Electrum Wallet to one single connection with your private server ("),t("a",{attrs:{href:"https://github.com/chris-belcher/electrum-personal-server#how-to",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("h3",{attrs:{id:"reflection-on-what-has-been-achieved"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reflection-on-what-has-been-achieved"}},[e._v("#")]),e._v(" Reflection on what has been achieved:")]),e._v(" "),t("p",[e._v("You are now running your very "),t("strong",[e._v("own private ElectrumX Server")]),e._v(". All Electrum Wallet related data transfer happens directly between your ElectrumX Server and the bitcoin blockchain, without going over any other 3rd party servers. You have attained full bitcoin transaction privacy (at least from the perspective of your blockchain queries and transactions, payment/receive addresses etc - nobody except you and the blockchain can see what you are doing).")]),e._v(" "),t("h3",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting:")]),e._v(" "),t("p",[e._v("So there is one thing you may encounter, where even after you did everything correctly, you still get a red traffic light (which means not connected to any server) in the steps above. Any other troubleshooting tips that people encounter can be added, I would suggest to make a PR to this document directly.")]),e._v(" "),t("ul",[t("li",[e._v("If you get a red traffic light, shutdown Electrum Wallet completely, then go to your Electrum Wallet folder ("),t("a",{attrs:{href:"https://electrum.readthedocs.io/en/latest/faq.html#where-is-my-wallet-file-located",target:"_blank",rel:"noopener noreferrer"}},[e._v("see here"),t("OutboundLink")],1),e._v(" if you don't know where that is).")])]),e._v(" "),t("p",[e._v("Inside the Electrum Wallet folder (in this case below, it is what it looks like on a Mac) locate the "),t("code",[e._v("certs")]),e._v(" directory and delete the certificate for the server you are trying to connect to, in this case "),t("code",[e._v("192.168.1.3")]),e._v(", by dragging it to the Trash.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68497330-9a73a500-0254-11ea-9349-71bdb3bd9511.png",alt:"Certs",title:"Certs"}})]),e._v(" "),t("p",[e._v("Start up Electrum Wallet again, and connect to your ElectrumX server. If it is fully synched, it will now likely show a green traffic light, and you are good to go.")])])}),[],!1,null,null,null);t.default=o.exports}}]);