(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{500:function(e,t,a){e.exports=a.p+"assets/img/support.970aea07.png"},783:function(e,t,a){"use strict";a.r(t);var n=a(10),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"lnbank"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lnbank"}},[e._v("#")]),e._v(" LNbank")]),e._v(" "),t("p",[e._v("A plugin for "),t("a",{attrs:{href:"https://github.com/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server"),t("OutboundLink")],1),e._v(" to use the internal Lightning node in custodial mode:\nIt allows server admins to open up the Lightning node and give users access via custodial layer 3 wallets.\nUsers can create separate Lightning wallets and use them to send and receive Lightning payments.")]),e._v(" "),t("h2",{attrs:{id:"use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),t("ul",[t("li",[e._v("Allow non-admin users to use the internal Lightning node.")]),e._v(" "),t("li",[e._v('"Uncle Jim" mode: Give access to your friends and family.')]),e._v(" "),t("li",[e._v("Use individual LNbank wallets for stores and separate the Lightning accounting.")]),e._v(" "),t("li",[e._v("Use LNbank wallets individually, without having them tied to a store.")]),e._v(" "),t("li",[e._v("Share access to LNbank wallets between multiple users with different access levels.")])]),e._v(" "),t("h2",{attrs:{id:"technicalities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#technicalities"}},[e._v("#")]),e._v(" Technicalities")]),e._v(" "),t("ul",[t("li",[e._v("The LNbank accounts are separated on a database level, not on the layer 2/Lightning implementation level.\nLNbank wallets can be seen as layer 3 sub-accounts.")]),e._v(" "),t("li",[e._v("All LNbank accounts use the internal Lightning node and share the Node ID of that node.")]),e._v(" "),t("li",[e._v("Channels and liquidity are managed by the server admin.")])]),e._v(" "),t("h2",{attrs:{id:"caveats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caveats"}},[e._v("#")]),e._v(" Caveats")]),e._v(" "),t("p",[e._v("Users rely on the server admin as the custodian, be aware of that trust relationship.\nWhen using LNbank on a third-party instance whose owner you don't know, mitigate the risks by following this advise:")]),e._v(" "),t("ul",[t("li",[e._v("Keep only small amount in the LNbank wallets.")]),e._v(" "),t("li",[e._v("Regularly transfer funds to a Lightning node or account owned by yourself.")]),e._v(" "),t("li",[e._v("Switch to an own BTCPay Server instance once you start receiving larger payments.")])]),e._v(" "),t("h2",{attrs:{id:"features-and-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features-and-compatibility"}},[e._v("#")]),e._v(" Features and Compatibility")]),e._v(" "),t("ul",[t("li",[e._v("Send to BOLT11 payment requests, as well as LNURL and Lightning Address.")]),e._v(" "),t("li",[e._v("LNbank offers a "),t("RouterLink",{attrs:{to:"/LNbank/LNDhub/"}},[e._v("LNDhub-compatible")]),e._v(" API, wallets are usable with BlueWallet, Zeus and Alby.")],1),e._v(" "),t("li",[e._v("Use the Greenfield API to create and manage LNbank wallets.")])]),e._v(" "),t("h2",{attrs:{id:"how-to-activate-and-use-lnbank"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-activate-and-use-lnbank"}},[e._v("#")]),e._v(" How to activate and use LNbank")]),e._v(" "),t("h3",{attrs:{id:"server-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-admin"}},[e._v("#")]),e._v(" Server admin")]),e._v(" "),t("ul",[t("li",[e._v("LNbank has to be installed and activated by the server admin via the Plugins menu.")]),e._v(" "),t("li",[e._v('When activated, LNbank is available to users regardless of the "Allow non-admins to use the internal lightning node in\ntheir stores" setting in '),t("code",[e._v("Server Settings > Policies")]),e._v(".")]),e._v(" "),t("li",[e._v("Requirements: BTCPay Server v1.6")])]),e._v(" "),t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[e._v("#")]),e._v(" User")]),e._v(" "),t("ul",[t("li",[e._v("Each user can create an unlimited number of LNbank wallets.")]),e._v(" "),t("li",[e._v("Wallet overview: See your balance and list of transactions with details like payment state and fees.")]),e._v(" "),t("li",[e._v("Receive: Specify an amount and description, either for your accounting only or also attach it to the payment request.")]),e._v(" "),t("li",[e._v("Send: Decode payment requests (BOLT11, LNURL, Lightning Address) and confirm the payment.")]),e._v(" "),t("li",[e._v("Settings: See and edit the wallet details and give access to other users via access keys.")]),e._v(" "),t("li",[e._v("To remove a LNbank wallet, it must be emptied out first and have no balance left.")]),e._v(" "),t("li",[e._v('Connect your LNbank wallet to a store via the store\'s Lightning node setup page. (see the "Use LNbank wallet" option)')])]),e._v(" "),t("h2",{attrs:{id:"support-this-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support-this-plugin"}},[e._v("#")]),e._v(" Support this plugin")]),e._v(" "),t("figure",[t("a",{attrs:{href:"https://github.com/dennisreimann/btcpayserver-plugin-lnbank/blob/master/lightning:LNURL1DP68GURN8GHJ7AMPD3KX2AR0VEEKZAR0WD5XJTNRDAKJ7TNHV4KXCTTTDEHHWM30D3H82UNVWQHKXUN0WAJX2ER9V9E8G6PN8QSKVTEZ",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:a(500),alt:"Support this plugin",title:"Support this plugin"}}),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);