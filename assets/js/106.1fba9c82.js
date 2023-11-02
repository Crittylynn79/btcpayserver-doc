(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{724:function(e,r,t){"use strict";t.r(r);var a=t(10),o=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"dynamic-dns-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-dns-service"}},[e._v("#")]),e._v(" Dynamic DNS Service")]),e._v(" "),r("h2",{attrs:{id:"motivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),r("p",[r("strong",[e._v("Dynamic DNS")]),e._v(" is needed if:")]),e._v(" "),r("ul",[r("li",[e._v("You are running BTCPay Server with a hosting provider that does not provide a default domain for your server")]),e._v(" "),r("li",[e._v("You don't want to buy your own domain name (e.g. "),r("code",[e._v("mybusiness.com")]),e._v(")")]),e._v(" "),r("li",[e._v("You need to access your BTCPay Server over internet via HTTPS. (Your BTCPayServer is accessed by other internet users)")])]),e._v(" "),r("p",[e._v("Then you want to use "),r("strong",[e._v("BTCPayServer Dynamic DNS service")]),e._v(".")]),e._v(" "),r("p",[e._v("You "),r("strong",[e._v("don't need")]),e._v(" Dynamic DNS Service if:")]),e._v(" "),r("ul",[r("li",[e._v("You host BTCPay Server at home and only access it via the local network (just using HTTP locally or using Tor is fine)")]),e._v(" "),r("li",[e._v("Your BTCPay Server should be only accessed by yourself (just use Tor browser and the Tor address of you instance)")]),e._v(" "),r("li",[e._v("Your hosting provider provides a domain name for your server by default (i.e. Lunanode for example provides a subdomain of "),r("code",[e._v(".lndyn.com")]),e._v(" for free, and Azure provides for "),r("code",[e._v(".azurewebsites.net")]),e._v(")")])]),e._v(" "),r("p",[e._v("A "),r("strong",[e._v("Dynamic DNS Providers")]),e._v(" allows you to have a free domain like "),r("code",[e._v("example.ddns.net")]),e._v(" for your server.\nAdditionally Dynamic DNS Providers expose a simple API to update the DNS record automatically when your BTCPay Server instance changes its external IP address.")]),e._v(" "),r("p",[e._v("BTCPay Server, when configured to use Dynamic DNS, will periodically check and update the DNS record if an external IP change is detected.")]),e._v(" "),r("h2",{attrs:{id:"how-to-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How to use")]),e._v(" "),r("h3",{attrs:{id:"step-1-create-the-domain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-the-domain"}},[e._v("#")]),e._v(" Step 1: Create the domain")]),e._v(" "),r("p",[e._v("First, create an account on a Dynamic DNS provider, the most popular providers are:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.noip.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("noip"),r("OutboundLink")],1),e._v(" (free)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.duckdns.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("duckdns"),r("OutboundLink")],1),e._v(" (free)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.zoneedit.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zoneedit"),r("OutboundLink")],1),e._v(" (free)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dyn.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dyndns"),r("OutboundLink")],1),e._v(" (not free)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://domains.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("google"),r("OutboundLink")],1),e._v(" (not free)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.easydns.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("easydns"),r("OutboundLink")],1),e._v(" (not free)")])]),e._v(" "),r("p",[e._v("Once you've created an account, you can create a free domain name through their website.")]),e._v(" "),r("h3",{attrs:{id:"step-2-configure-dynamic-dns-on-btcpay-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-dynamic-dns-on-btcpay-server"}},[e._v("#")]),e._v(" Step 2: Configure Dynamic DNS on BTCPay Server")]),e._v(" "),r("p",[e._v("You need to be administrator of your instance.\nGo to Server Settings > Services > Dynamic DNS.")]),e._v(" "),r("ul",[r("li",[e._v("Add a Dynamic DNS")]),e._v(" "),r("li",[e._v("Select your Dynamic DNS provider")]),e._v(" "),r("li",[e._v("Enter the domain you created in step 1")]),e._v(" "),r("li",[e._v("Add the login and password you created in step 1")]),e._v(" "),r("li",[e._v("Check the "),r("code",[e._v("enabled")]),e._v(" box and save")])]),e._v(" "),r("h3",{attrs:{id:"step-3-configure-your-btcpay-docker-install-to-provide-https-certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3-configure-your-btcpay-docker-install-to-provide-https-certificates"}},[e._v("#")]),e._v(" Step 3: Configure your BTCPay docker install to provide HTTPS certificates")]),e._v(" "),r("p",[e._v("If you are using a docker deployment, you also need to update your BTCPayServer install.\nConnect via SSH to your instance and run:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAY_ADDITIONAL_HOSTS")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example.ddns.net"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" btcpay-setup.sh "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n")])])]),r("p",[e._v("If you have any other hosts in "),r("code",[e._v("BTCPAY_ADDITIONAL_HOSTS")]),e._v(", just separate them with "),r("code",[e._v(",")]),e._v(".")])])}),[],!1,null,null,null);r.default=o.exports}}]);