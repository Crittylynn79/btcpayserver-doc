(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{763:function(e,t,r){"use strict";r.r(t);var o=r(10),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"electrum-personal-server-eps-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#electrum-personal-server-eps-integration"}},[e._v("#")]),e._v(" Electrum Personal Server (EPS) integration")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/chris-belcher/electrum-personal-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electrum Personal Server or EPS"),t("OutboundLink")],1),e._v(" is a personal version of public Electrum servers like "),t("RouterLink",{attrs:{to:"/ElectrumX/"}},[e._v("ElectrumX")]),e._v(".")],1),e._v(" "),t("p",[t("strong",[e._v("EPS can be integrated into BTCPay Server")]),e._v(" using the optional docker fragment "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/docker-fragments/opt-add-electrum-ps.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("opt-add-electrum-ps.yml"),t("OutboundLink")],1),e._v(". Use EPS when you want to use your own full node (included in BTCPay Server) to verify your own transactions privately when using Electrum Wallet.")]),e._v(" "),t("p",[e._v("The biggest difference with public Electrum servers (eg. ElectrumX), is that "),t("strong",[e._v("EPS is for monitoring only your own wallet(s)")]),e._v('. The "XPUB" (extended public key) of the wallet you use in Electrum must be shared with EPS in order for it to function all all. Other than this, it functions (from an end user perspective) in the same way as ElectrumX etc. It is '),t("strong",[e._v("easy to integrate into BTCPay")]),e._v(" just follow the instructions below.")]),e._v(" "),t("p",[e._v("EPS does not require "),t("code",[e._v("txindex")]),e._v(" and works on a pruned node.")]),e._v(" "),t("h2",{attrs:{id:"about-tor-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-tor-support"}},[e._v("#")]),e._v(" About Tor support")]),e._v(" "),t("p",[e._v("By default your EPS is accessible over Tor. You can run the following command line via SSH on your server to get your Tor address:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /var/lib/docker/volumes/generated_tor_servicesdir/_data/btc-electrum-ps/hostname\n")])])]),t("p",[e._v("You can can also go to your BTCPay Server > Server Settings > Services and find the tor link in "),t("code",[e._v("Other TOR hidden services")]),e._v(".")]),e._v(" "),t("p",[e._v("On the Electrum wallet machine, if you want to connect to your server via Tor, we assume in this tutorial that you run the Tor Browser locally, and thus you will use SOCKS5 port "),t("code",[e._v("9150")]),e._v(". If you run Tor through the command line instead, the local SOCKS5 port is "),t("code",[e._v("9050")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"how-to-enable-electrum-personal-server-eps-in-btcpay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-electrum-personal-server-eps-in-btcpay"}},[e._v("#")]),e._v(" How to enable Electrum Personal Server (EPS) in BTCPay:")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("If you do not use Tor")]),e._v(", EPS is accessible for Electrum Wallets via TCP port 50002. You need to open this port up fully at least to be available within your own network to any PC or Android device running Electrum Wallet, and turn on port forwarding. If you use Tor, you can skip this step.")])]),e._v(" "),t("li",[t("p",[e._v('As EPS is for a single wallet (single user), you must specify the XPUB/YPUB/ZPUB of your wallet as an environment varable before you enable the EPS docker-fragment. In Electrum Wallet go to the "Wallet" menu then select "Information" to copy and paste yours. Set ENV variable for your wallet XPUB and enable the Docker Additional Fragment on your BTCPay node by running the following steps:')])])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),e._v(';opt-add-electrum-ps"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EPS_XPUB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"XPUB_ADD_YOUR_XPUB_YPUB_OR_ZPUB_HERE"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" btcpay-setup.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("WAIT for your Bitcoin full node and EPS server to fully sync:\nYou can check the status of bitcoin core sync by going to your domain for BTCPay server, and it will show you on the front page. Or, you can check from the command line as well, using these commands:\n"),t("code",[e._v("docker logs btcpayserver_bitcoind")]),e._v(" - this will show you the bitcoin core blockchain sync status (and ALL other info about your node, including any errors)\n"),t("code",[e._v("docker logs generated_electrum_ps_1")]),e._v(" - this will show you the EPS sync status. Note: EPS will NOT start syncing until bitcoin full node has finished syncing, you will see errors until that is finished and these can be ignored.")])]),e._v(" "),t("p",[e._v("Once all syncing for both bitcoin and EPS have finished synching, you can proceed to the next step. (Note: Electrum wallets will not connect to an EPS server that has not finished synching)")]),e._v(" "),t("h2",{attrs:{id:"how-to-connect-electrum-wallet-to-eps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-electrum-wallet-to-eps"}},[e._v("#")]),e._v(" How to connect Electrum Wallet to EPS")]),e._v(" "),t("p",[e._v("There are three ways to use your server from Electrum Wallet:")]),e._v(" "),t("ol",[t("li",[e._v("By editing the configuration file")]),e._v(" "),t("li",[e._v("By running Electrum by the command line")]),e._v(" "),t("li",[e._v("Via the user interface (not recommended, bad privacy)")])]),e._v(" "),t("h4",{attrs:{id:"option-1-connect-to-your-eps-server-by-directly-editing-electrum-wallet-config-file-before-even-opening-the-electrum-wallet-gui-recommended-for-full-privacy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-1-connect-to-your-eps-server-by-directly-editing-electrum-wallet-config-file-before-even-opening-the-electrum-wallet-gui-recommended-for-full-privacy"}},[e._v("#")]),e._v(" Option 1: Connect to your EPS Server by directly editing Electrum Wallet config file (before even opening the Electrum wallet GUI - recommended for full privacy):")]),e._v(" "),t("p",[e._v("You can "),t("strong",[e._v("setup your Electrum server")]),e._v(" by editing the configuration file.")]),e._v(" "),t("p",[e._v("In the "),t("a",{attrs:{href:"https://electrum.readthedocs.io/en/latest/faq.html#where-is-my-wallet-file-located",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electrum Wallet folder"),t("OutboundLink")],1),e._v(", open and edit the "),t("code",[e._v("config")]),e._v(" file like this:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Find line: "),t("code",[e._v('"auto_connect": true,')]),e._v(" and switch it to: "),t("code",[e._v('"auto_connect": false,')]),e._v(" - this will prevent your Electrum Wallet from auto-connecting to other 3rd party Electrum Servers at launch time (to obtain block headers and transaction information).")])]),e._v(" "),t("li",[t("p",[e._v("Find line: "),t("code",[e._v('"oneserver": false,')]),e._v(" and switch it to: "),t("code",[e._v('"oneserver": true,')]),e._v(" - ensures that all data is obtained from just one server.")])]),e._v(" "),t("li",[t("p",[e._v("Find or add line: "),t("code",[e._v('"server": "yourserver:50002:s",')]),e._v("and switch it to your own EPS Server's IP address, in the example above this would be: "),t("code",[e._v('"server": "192.168.1.3:50002:s",')]),e._v("- hard code your IP address as the default upon opening the Wallet.")])])]),e._v(" "),t("p",[e._v("These 3 steps strongly recommended for full privacy by locking down Electrum Wallet to one single connection with your private server only ("),t("a",{attrs:{href:"https://github.com/chris-belcher/electrum-personal-server#how-to",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("("),t("strong",[e._v("If you use Tor")]),e._v(") If you run Tor Browser, you can use it as SOCK5 proxy by adding "),t("code",[e._v('"proxy": "socks5:127.0.0.1:9150::",')]),e._v(" to the configuration file.")])]),e._v(" "),t("h4",{attrs:{id:"option-3-connect-to-your-eps-server-by-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-3-connect-to-your-eps-server-by-command-line"}},[e._v("#")]),e._v(" Option 3: Connect to your EPS Server by command line")]),e._v(" "),t("p",[e._v("You can run electrum via command line "),t("code",[e._v("electrum --oneserver --server yourserver:50002:s")]),e._v(".")]),e._v(" "),t("p",[e._v("If you use Tor, add "),t("code",[e._v("-p socks5:localhost:9150")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"option-4-connect-to-your-eps-server-from-electrum-wallet-gui-not-recommended-as-this-will-momentarily-connects-with-other-random-public-electrum-servers-if-you-are-online"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-4-connect-to-your-eps-server-from-electrum-wallet-gui-not-recommended-as-this-will-momentarily-connects-with-other-random-public-electrum-servers-if-you-are-online"}},[e._v("#")]),e._v(" Option 4: Connect to your EPS Server from Electrum Wallet GUI (not recommended as this will momentarily connects with other random public Electrum servers if you are online):")]),e._v(" "),t("ol",[t("li",[e._v("Open Electrum Wallet. When you click the traffic light (green or red) at the bottom of your Electrum Wallet, you will see a screen with a list of all the available Electrum servers that your wallet can connect to, normally with the "),t("code",[e._v("Select Server Automatically")]),e._v(" box already checked:")])]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437521-8a5eb580-01c1-11ea-9ece-0666353a6742.png",alt:"ElectrumWalletServerList",title:"ElectrumWalletServerList"}})]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Now is the time to UNCHECK that "),t("code",[e._v("Select Server Automatically")]),e._v(" setting, which will enable you to enter the IP address or domain or hostname of your EPS Server. In the case below, the EPS server is on the local network at "),t("code",[e._v("192.168.1.3")]),e._v(" so we enter that manually (leave port as 50002) and press "),t("code",[e._v("close")]),e._v(".")])]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68496320-4e276580-0252-11ea-8caf-facc8a246d70.png",alt:"EnterElectrumServerIP",title:"EnterElectrumServerIP"}})]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[e._v("("),t("strong",[e._v("If you use Tor")]),e._v(") Go to proxy, then click on "),t("code",[e._v("Use Tor Proxy at port 9150")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("If all of the above worked well, and your node is healthy and synched, you will get a green traffic light down the bottom right of the wallet screen - that means success!")])])]),e._v(" "),t("h3",{attrs:{id:"reflection-on-what-has-been-achieved"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reflection-on-what-has-been-achieved"}},[e._v("#")]),e._v(" Reflection on what has been achieved:")]),e._v(" "),t("p",[e._v("You are now running your very "),t("strong",[e._v("own private EPS Server")]),e._v(". All Electrum Wallet related data transfer happens directly between your EPS Server and the bitcoin blockchain, without going over any other 3rd party servers. You have attained full bitcoin transaction privacy (at least from the perspective of your blockchain queries and transactions, payment/receive addresses etc - nobody except you and the blockchain can see what you are doing).")]),e._v(" "),t("h3",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting:")]),e._v(" "),t("p",[e._v("So there is one thing you may encounter, where even after you did everything correctly, you still get a red traffic light (which means not connected to any server) in the steps above. Any other troubleshooting tips that people encounter can be added, I would suggest to make a PR to this document directly.")]),e._v(" "),t("ul",[t("li",[e._v("If you get a red traffic light, shutdown Electrum Wallet completely, then go to your Electrum Wallet folder ("),t("a",{attrs:{href:"https://electrum.readthedocs.io/en/latest/faq.html#where-is-my-wallet-file-located",target:"_blank",rel:"noopener noreferrer"}},[e._v("see here"),t("OutboundLink")],1),e._v(" if you don't know where that is).")])]),e._v(" "),t("p",[e._v("Inside the Electrum Wallet folder (in this case below, it is what it looks like on a Mac) locate the "),t("code",[e._v("certs")]),e._v(" directory and delete the certificate for the server you are trying to connect to, in this case "),t("code",[e._v("192.168.1.3")]),e._v(", by dragging it to the Trash.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68497330-9a73a500-0254-11ea-9349-71bdb3bd9511.png",alt:"Certs",title:"Certs"}})]),e._v(" "),t("p",[e._v("Start up Electrum Wallet again, and connect to your "),t("strong",[e._v("EPS server")]),e._v(". If it is fully synched, it will now likely show a green traffic light, and you are good to go.")])])}),[],!1,null,null,null);t.default=n.exports}}]);