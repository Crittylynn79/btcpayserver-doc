(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{366:function(e,t,r){e.exports=r.p+"assets/img/deploy-to-azure.a36cd58d.svg"},367:function(e,t,r){e.exports=r.p+"assets/img/AzureResourceConfig.5eb883b1.png"},368:function(e,t,r){e.exports=r.p+"assets/img/AzureBTCPayServerPublicIP.a2a47f78.png"},720:function(e,t,r){"use strict";r.r(t);var o=r(10),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"azure-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-deployment"}},[e._v("#")]),e._v(" Azure Deployment")]),e._v(" "),t("p",[e._v("This setup is similar to the "),t("RouterLink",{attrs:{to:"/Docker/"}},[e._v("Docker Deployment")]),e._v(", except that the "),t("code",[e._v("docker-compose")]),e._v(" is hosted by "),t("strong",[e._v("Microsoft Azure")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"one-click-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#one-click-setup"}},[e._v("#")]),e._v(" One-click setup")]),e._v(" "),t("p",[e._v("Start by clicking the following button:")]),e._v(" "),t("figure",[t("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fbtcpayserver%2Fbtcpayserver-azure%2Fmaster%2Fazuredeploy.json",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:r(366),alt:"Deploy to Azure",title:"Deploy to Azure"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("You can log into "),t("a",{attrs:{href:"https://azure.microsoft.com/en-us/account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),t("OutboundLink")],1),e._v(" with your Microsoft account.")]),e._v(" "),t("p",[e._v("Final installation steps:")]),e._v(" "),t("p",[e._v("Fill in the remaining options: "),t("img",{attrs:{src:r(367),alt:"Azure Resource Config",title:"Azure Resource Config"}})]),e._v(" "),t("ul",[t("li",[e._v("Click 'Purchase' to confirm")]),e._v(" "),t("li",[e._v("(Wait for Azure deployment)")]),e._v(" "),t("li",[e._v("Type "),t("code",[e._v("ip")]),e._v(" into the search bar and select the first option, "),t("code",[e._v("BTCPayServerPublicIP")])]),e._v(" "),t("li",[e._v("Copy the hostname for your Azure deployment, under "),t("code",[e._v("DNS name")]),e._v(": "),t("img",{attrs:{src:r(368),alt:"Azure BTCPayServerPublicIP",title:"Azure BTCPayServerPublicIP"}})]),e._v(" "),t("li",[e._v("Visit it (all major browsers supported)")]),e._v(" "),t("li",[e._v("Click 'Register' and create an account - This will be your "),t("strong",[e._v("admin")]),e._v(" account!")]),e._v(" "),t("li",[e._v("At your domain registrar, point your domain at this hostname (read more: "),t("RouterLink",{attrs:{to:"/FAQ/Deployment/#how-to-change-your-btcpay-server-domain-name"}},[e._v("How to change your BTCPay Server domain name")]),e._v(")")],1),e._v(" "),t("li",[e._v("Then, visit "),t("code",[e._v("https://EXAMPLE.eastus.cloudapp.azure.com/server/maintenance")])]),e._v(" "),t("li",[e._v("Enter your domain name and click 'Confirm'")]),e._v(" "),t("li",[e._v("(Wait 1-5 minutes)")]),e._v(" "),t("li",[t("strong",[e._v("Done!")]),e._v(" Visit "),t("code",[e._v("https://EXAMPLE.MYSITE.com/stores")]),e._v(" to create your store and begin invoicing.")])]),e._v(" "),t("p",[e._v("For advanced users, you can connect via SSH with the information on "),t("code",[e._v("https://EXAMPLE.MYSITE.com/server/services/ssh")]),e._v(", and:")]),e._v(" "),t("ul",[t("li",[e._v("Run "),t("code",[e._v("docker ps")]),e._v(" and "),t("code",[e._v("docker logs xxx")]),e._v(" to view running processes")]),e._v(" "),t("li",[e._v("Run "),t("code",[e._v("btcpay-down.sh")]),e._v(" and "),t("code",[e._v("btcpay-up.sh")]),e._v(" to stop and start the BTCPayServer")])]),e._v(" "),t("p",[e._v("Approximate Cost (unpruned, Bitcoin-only, after Azure $200 free trial): "),t("strong",[e._v("60 USD per month")])]),e._v(" "),t("p",[e._v("After all your nodes have synced and you've confirmed everything works, follow "),t("RouterLink",{attrs:{to:"/Deployment/AzurePennyPinching/"}},[e._v("this guide")]),e._v(" to fine-tune for savings; costs should drop to "),t("strong",[e._v("30 or 40 USD per month")]),e._v(".")],1),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/xh3Eac66qc4/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=xh3Eac66qc4",title:"BTCPay Server - Azure","data-id":"xh3Eac66qc4"}},[t("iframe",{attrs:{title:"BTCPay Server - Azure","data-src":"https://www.youtube-nocookie.com/embed/xh3Eac66qc4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("p",[e._v("Learn more: "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-azure",target:"_blank",rel:"noopener noreferrer"}},[e._v("btcpayserver/btcpayserver-azure"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);