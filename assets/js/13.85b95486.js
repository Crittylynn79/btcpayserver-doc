(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{293:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--19-troubleshoot-403-callback.51193927.png"},604:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--01-install-web.4d28e0bd.png"},605:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--02-install-upload.8972740d.png"},606:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--03-enable-plugin.1b4a6c9f.png"},607:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--04-add-new-payment-method.e5a94ee3.png"},608:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--05-payment-method-details.adf89c97.png"},609:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--06-payment-method-configuration-tab.45617db0.png"},610:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--07-account-manage.d477b8b4.png"},611:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--08-add-api-key.a58b2941.png"},612:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--09-permissions-and-select-store.9ccef388.png"},613:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--10-permissions-set.74d76936.png"},614:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--11-copy-api-key.94be9878.png"},615:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--12-copy-store-id.84c19f9f.png"},616:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--13-save-vm-payment-method-form.0a3e52bd.png"},617:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--14-create-webhook.1b6e4881.png"},618:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--15-webhook-payload-url.37a4f55f.png"},619:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--16-webhook-copy-secret.71b0dd07.png"},620:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--16-virtuemart-configuration-save.ee549862.png"},621:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--17-webhook-save.dfd4fca5.png"},622:function(e,t,a){e.exports=a.p+"assets/img/btcpay-vm--18-troubleshoot-copy-callback-url.70d08e31.png"},819:function(e,t,a){"use strict";a.r(t);var o=a(10),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"joomla-virtuemart-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#joomla-virtuemart-integration"}},[e._v("#")]),e._v(" Joomla VirtueMart integration")]),e._v(" "),t("p",[e._v("This document explains how to "),t("strong",[e._v("integrate BTCPay Server into your Joomla VirtueMart store")]),e._v(".\nWatch the video below to go along the document |")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/k7XfybLAky0/hqdefault.jpg)"},attrs:{href:"https://youtu.be/k7XfybLAky0",title:"BTCPay Server - Joomla VirtueMart","data-id":"k7XfybLAky0"}},[t("iframe",{attrs:{title:"BTCPay Server - Joomla VirtueMart","data-src":"https://www.youtube-nocookie.com/embed/k7XfybLAky0?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("Please ensure that you meet the following requirements before installing this plugin.")]),e._v(" "),t("ul",[t("li",[e._v("PHP version 7.4 or newer")]),e._v(" "),t("li",[e._v("The curl, gd, intl, json, and mbstring PHP extensions are available")]),e._v(" "),t("li",[e._v("A VirtueMart 3 / 4 store ("),t("a",{attrs:{href:"https://www.virtuemart.net/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and installation instructions"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("You have a BTCPay Server version 1.3.0 or later, either "),t("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self-hosted")]),e._v(" or "),t("RouterLink",{attrs:{to:"/Deployment/ThirdPartyHosting/"}},[e._v("hosted by a third-party")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("You've a registered account on the instance")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("You've a BTCPay store on the instance")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("You've a wallet connected to your store")])],1)]),e._v(" "),t("h2",{attrs:{id:"1-install-btcpay-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-install-btcpay-plugin"}},[e._v("#")]),e._v(" 1. Install BTCPay Plugin")]),e._v(" "),t("p",[e._v("There are three ways to "),t("strong",[e._v("download BTCPay for VirtueMart plugin")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Via the Admin Dashboard (recommended, see below)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://extensions.joomla.org/extension/vm-payment-btcpay-for-virtuemart/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Joomla Extension Directory (JED)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/btcpayserver/joomla-virtuemart/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"11-install-plugin-from-joomla-admin-dashboard-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#11-install-plugin-from-joomla-admin-dashboard-recommended"}},[e._v("#")]),e._v(" 1.1 Install plugin from Joomla Admin Dashboard (recommended)")]),e._v(" "),t("ol",[t("li",[e._v("Menu: Extensions > Manage > Install")]),e._v(" "),t("li",[e._v('On "Install from Web" tab search for "btcpay"')]),e._v(" "),t("li",[e._v("Click on BTCPay for VirtueMart and [Install] button")]),e._v(" "),t("li",[e._v("Continue with step 1.3")])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(604),alt:"BTCPay Virtuemart: Plugin installation web",title:"BTCPay Virtuemart: Plugin installation web"}})]),e._v(" "),t("h3",{attrs:{id:"12-download-and-install-plugin-from-jed-or-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#12-download-and-install-plugin-from-jed-or-github"}},[e._v("#")]),e._v(" 1.2 Download and install plugin from JED or GitHub")]),e._v(" "),t("ol",[t("li",[e._v("Download the latest BTCPay plugin from "),t("a",{attrs:{href:"https://github.com/btcpayserver/joomla-virtuemart/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://extensions.joomla.org/extension/vm-payment-btcpay-for-virtuemart/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JED"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Menu: Extensions -> Manage -> Install")]),e._v(" "),t("li",[e._v('On tab "Upload Package File" upload the '),t("code",[e._v("btcpayvm.zip")])])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(605),alt:"BTCPay Virtuemart: Plugin installation upload",title:"BTCPay Virtuemart: Plugin installation upload"}})]),e._v(" "),t("h3",{attrs:{id:"13-enable-the-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#13-enable-the-plugin"}},[e._v("#")]),e._v(" 1.3 Enable the plugin")]),e._v(" "),t("ol",[t("li",[e._v("Menu: Extensions -> Plugins")]),e._v(" "),t("li",[e._v('Search for "btcpay"')]),e._v(" "),t("li",[e._v('On "Status" column click the red circle to enable the plugin')])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(606),alt:"BTCPay Virtuemart: Enable plugin",title:"BTCPay Virtuemart: Enable plugin"}})]),e._v(" "),t("h2",{attrs:{id:"2-connecting-virtuemart-and-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-connecting-virtuemart-and-btcpay-server"}},[e._v("#")]),e._v(" 2. Connecting VirtueMart and BTCPay Server")]),e._v(" "),t("p",[e._v("BTCPay for Virtuemart plugin is a "),t("strong",[e._v("bridge between your BTCPay Server (payment processor) and your e-commerce store")]),e._v(".\nNo matter if you're using a self-hosted or third-party solution, the connection process is identical.")]),e._v(" "),t("h3",{attrs:{id:"21-add-btcpay-payment-gateway-in-virtuemart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#21-add-btcpay-payment-gateway-in-virtuemart"}},[e._v("#")]),e._v(" 2.1 Add BTCPay payment gateway in VirtueMart")]),e._v(" "),t("ol",[t("li",[e._v("Menu: VirtueMart -> Payment Methods")]),e._v(" "),t("li",[e._v("Click button "),t("strong",[e._v("[New]")]),e._v(" "),t("img",{attrs:{src:a(607),alt:"BTCPay Virtuemart: Add new payment method",title:"BTCPay Virtuemart: Add new payment method"}})]),e._v(" "),t("li",[e._v('Configure the payment method according to your needs. Make sure on "Payment Method" dropdown you have "BTCPay for VirtueMart" selected and the payment method is published '),t("img",{attrs:{src:a(608),alt:"BTCPay Virtuemart: Payment method details",title:"BTCPay Virtuemart: Payment method details"}})]),e._v(" "),t("li",[e._v("Hit the "),t("strong",[e._v("[Save]")]),e._v(" button (the plugin table will get created)")])]),e._v(" "),t("p",[e._v('Now you can switch to the "Configuration" tab where we can connect to our BTCPay Server instance. First we need to create an API key.')]),e._v(" "),t("figure",[t("img",{attrs:{src:a(609),alt:"BTCPay Virtuemart: Payment method configuration tab",title:"BTCPay Virtuemart: Payment method configuration tab"}})]),e._v(" "),t("h3",{attrs:{id:"22-create-an-api-key-and-configure-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#22-create-an-api-key-and-configure-permissions"}},[e._v("#")]),e._v(" 2.2 Create an API key and configure permissions")]),e._v(" "),t("p",[e._v("On BTCPay Server instance:")]),e._v(" "),t("ol",[t("li",[e._v("Click on "),t("em",[e._v("[Account]")])]),e._v(" "),t("li",[e._v("Click on "),t("em",[e._v("[Manage Account]")]),e._v(" "),t("img",{attrs:{src:a(610),alt:"BTCPay Joomla VirtueMart: Manage Account",title:"BTCPay Joomla VirtueMart: Manage Account"}})]),e._v(" "),t("li",[e._v("Go to the tab "),t("em",[e._v('"API Keys"')])]),e._v(" "),t("li",[e._v("Click "),t("em",[e._v("[Generate Key]")]),e._v(" to select permissions.\n"),t("img",{attrs:{src:a(611),alt:"BTCPay Joomla VirtueMart: API Keys overview",title:"BTCPay Joomla VirtueMart: API Keys overview"}})]),e._v(" "),t("li",[e._v("Add a label. "),t("strong",[e._v("Important:")]),e._v(" click on the "),t("em",[e._v('"Select specific stores"')]),e._v(" link for the following permissions: "),t("code",[e._v("View invoices")]),e._v(", "),t("code",[e._v("Create invoice")]),e._v(", "),t("code",[e._v("Modify invoices")]),e._v(", "),t("code",[e._v("Modify stores webhooks")]),e._v(", "),t("code",[e._v("View your stores")]),e._v(" and select the specific store you created for your VirtueMart site. It should look like when everything is set:\n"),t("img",{attrs:{src:a(612),alt:"BTCPay Joomla VirtueMart: API Keys Permissions",title:"BTCPay Joomla VirtueMart: API Keys Permissions"}})]),e._v(" "),t("li",[e._v("Click on "),t("em",[e._v("[Generate API Key]")]),e._v(" "),t("img",{attrs:{src:a(613),alt:"BTCPay Joomla VirtueMart: API Keys Save",title:"BTCPay Joomla VirtueMart: API Keys Save"}})]),e._v(" "),t("li",[e._v("Copy the generated API Key to your "),t("em",[e._v("VirtueMart BTCPay Payment Method Settings")]),e._v(" form\n"),t("img",{attrs:{src:a(614),alt:"BTCPay Joomla VirtueMart: Copy API Key",title:"BTCPay Joomla VirtueMart: Copy API Key"}})]),e._v(" "),t("li",[e._v("Go to Settings and copy the store ID to your "),t("em",[e._v("VirtueMart BTCPay Payment Method Settings")]),e._v(" form\n"),t("img",{attrs:{src:a(615),alt:"BTCPay Joomla VirtueMart: Copy Store ID",title:"BTCPay Joomla VirtueMart: Copy Store ID"}})]),e._v(" "),t("li",[e._v("On the "),t("em",[e._v("VirtueMart BTCPay Payment Method Settings")]),e._v(" form make sure "),t("strong",[e._v("BTPCay Server URL")]),e._v(", "),t("strong",[e._v("API Key")]),e._v(" and "),t("strong",[e._v("Store ID")]),e._v(" are set and click "),t("strong",[e._v("[Save]")]),e._v(" "),t("img",{attrs:{src:a(616),alt:"BTCPay Joomla VirtueMart: Save VirtueMart Settings form",title:"BTCPay Joomla VirtueMart: Save VirtueMart Settings form"}})])]),e._v(" "),t("h3",{attrs:{id:"23-create-a-webhook-on-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#23-create-a-webhook-on-btcpay-server"}},[e._v("#")]),e._v(" 2.3 Create a webhook on BTCPay Server")]),e._v(" "),t("p",[e._v("Setting up a webhook is important that your gets updates on invoice status changes from BTCPay Server.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("On BTCPay Server instance go to your store settings, tab "),t("strong",[e._v("[Webhooks]")]),e._v(", click "),t("strong",[e._v("[Create Webhook]")]),e._v(" "),t("img",{attrs:{src:a(617),alt:"BTCPay Joomla VirtueMart: Create webhook",title:"BTCPay Joomla VirtueMart: Create webhook"}})])]),e._v(" "),t("li",[t("p",[e._v("From "),t("em",[e._v("VirtueMart BTCPay Payment Method Settings")]),e._v(" copy the "),t("strong",[e._v("Webhook callback URL")]),e._v(" to webhook settings "),t("strong",[e._v("Payload URL")]),e._v(".\n"),t("img",{attrs:{src:a(618),alt:"BTCPay Joomla VirtueMart: Webhook payload URL",title:"BTCPay Joomla VirtueMart: Webhook payload URL"}})])]),e._v(" "),t("li",[t("p",[e._v("On webhook settings click on the eye to reveal webhook secret. Copy that secret to your "),t("em",[e._v("VirtueMart BTCPay Payment Method Settings")]),e._v(" form "),t("strong",[e._v("Webhook Secret")]),e._v(" input and "),t("strong",[e._v("[Save]")]),e._v(" the VirtueMart configuration again.\n"),t("img",{attrs:{src:a(619),alt:"BTCPay Joomla VirtueMart: Webhook payload URL",title:"BTCPay Joomla VirtueMart: Webhook payload URL"}}),e._v(" "),t("img",{attrs:{src:a(620),alt:"BTCPay Joomla VirtueMart: Webhook VM save configuration",title:"BTCPay Joomla VirtueMart: Webhook VM save configuration"}})])]),e._v(" "),t("li",[t("p",[e._v("Back on webhook settings, enable "),t("strong",[e._v("Automatic redelivery")]),e._v(" and click "),t("strong",[e._v("[Add webhook]")]),e._v(" to save the webhook.\n"),t("img",{attrs:{src:a(621),alt:"BTCPay Joomla VirtueMart: Webhook payload URL",title:"BTCPay Joomla VirtueMart: Webhook payload URL"}})])])]),e._v(" "),t("h2",{attrs:{id:"3-test-the-checkout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-test-the-checkout"}},[e._v("#")]),e._v(" 3. Test the checkout")]),e._v(" "),t("p",[e._v("Everything is ready to go now. Do a small test purchase and make sure the order status gets updated according to the BTCPay invoice status. On BTCPay Server invoice details you can see if the webhook events were fired successfully.")]),e._v(" "),t("h2",{attrs:{id:"customizing-virtuemart-btcpay-payment-method-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customizing-virtuemart-btcpay-payment-method-settings"}},[e._v("#")]),e._v(" Customizing VirtueMart BTCPay payment method settings")]),e._v(" "),t("p",[e._v('Your VirtueMart BTCPay payment method settings can be found in menu: VirtueMart -> Payment Methods. Click on the payment method of type "btcpayvm" you created.')]),e._v(" "),t("h3",{attrs:{id:"section-btcpay-server-connection-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#section-btcpay-server-connection-settings"}},[e._v("#")]),e._v(" Section: BTCPay Server connection settings")]),e._v(" "),t("p",[e._v("This is the most important part of the configuration. The data entered here will connect your VirtueMart shop with your counterparty store configured on BTCPay Server.")]),e._v(" "),t("p",[t("strong",[e._v("BTCPay Server URL")])]),e._v(" "),t("p",[e._v("URL to your BTCPay Server instance, including protocol e.g. "),t("code",[e._v("https://btcpay.yourdomain.com")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("API Key")])]),e._v(" "),t("p",[e._v("Your BTCPay API Key as mentioned "),t("a",{attrs:{href:"#22-create-an-api-key-and-configure-permissions"}},[e._v("here")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Store ID")])]),e._v(" "),t("p",[e._v("The store ID of your BTCPay Server store. Can be found on the store settings page. See 8. "),t("a",{attrs:{href:"#22-create-an-api-key-and-configure-permissions"}},[e._v("here")])]),e._v(" "),t("p",[t("strong",[e._v("Webhook Secret")])]),e._v(" "),t("p",[e._v("The wehbook secret which was generated on webhook createion, see "),t("a",{attrs:{href:"#23-create-a-webhook-on-btcpay-server"}},[e._v("here")])]),e._v(" "),t("p",[t("strong",[e._v("Webhook callback URL")])]),e._v(" "),t("p",[e._v("This field is auto-generated by the plugin and helps you when creating the webhook on BTCPay Server. It contains the needed payment method id and parameters to allow processing of callbacks.")]),e._v(" "),t("h3",{attrs:{id:"section-order-states-mapping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#section-order-states-mapping"}},[e._v("#")]),e._v(" Section: Order states mapping")]),e._v(" "),t("p",[e._v("You can adjust the mapping of BTCPay Server invoice status to VirtueMart order states. On the left are the invoice states and on the right the order states. The defaults here should be good to go - but if you need, you can overwrite them.")]),e._v(" "),t("p",[e._v("VirtueMart order statuses are explained "),t("a",{attrs:{href:"https://docs.virtuemart.net/manual/configuration-menu/order-statuses.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("BTCPay server invoice statuses are explained "),t("RouterLink",{attrs:{to:"/Invoices/#invoice-statuses"}},[e._v("here")])],1),e._v(" "),t("h3",{attrs:{id:"section-restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#section-restrictions"}},[e._v("#")]),e._v(" Section: Restrictions")]),e._v(" "),t("p",[e._v("These are VirtueMart provided restrictions you know from other payment plugins. You can restrict the amount or countries when the payment method will be available.")]),e._v(" "),t("h3",{attrs:{id:"section-discounts-and-fees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#section-discounts-and-fees"}},[e._v("#")]),e._v(" Section Discounts and fees")]),e._v(" "),t("p",[e._v("These are VirtueMart provided settings. You can set a fee, cashback and apply tax rules or set a custom logo for the payment method.")]),e._v(" "),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("h3",{attrs:{id:"error-on-checkout-there-was-an-error-processing-the-payment-on-btcpay-server-please-try-again-and-contact-us-if-the-problem-persists-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-on-checkout-there-was-an-error-processing-the-payment-on-btcpay-server-please-try-again-and-contact-us-if-the-problem-persists-"}},[e._v("#")]),e._v(' Error on checkout "There was an error processing the payment on BTCPay Server. Please try again and contact us if the problem persists."')]),e._v(" "),t("p",[e._v("This means something went wrong with creating the invoice on BTCPay Server. It could be either wrong api key, store id or another communication error. You can find the error logs of the plugin in the following directory: "),t("code",[e._v("administrator/logs")]),e._v(" there you will have one or more files called "),t("code",[e._v("btcpayvm.X.log.php")]),e._v(" where "),t("code",[e._v("X")]),e._v(" is a number e.g. "),t("code",[e._v("btcpayvm.0.log.php")]),e._v(" you will find timestamped errors there that should give you a hint what the problem is.")]),e._v(" "),t("p",[t("strong",[e._v("Example")]),e._v(":")]),e._v(" "),t("blockquote",[t("p",[e._v('2022-05-24 21:10:50 ERROR Error during POST to https://btcpay.example.com/api/v1/stores/4kD5bvAF5j8DokHqAzxb6MFDV4ikabcdefghijklm/invoices. Got response (401): {"code":"unauthenticated","message":"Authentication is required for accessing this endpoint"}')])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("This means there is some authentication error. Likely your api key does not have permission create invoices for that store. Make sure you gave the api key the right permissions and you give it to the right store and also entered that in VirtueMart payment configuration form.")])]),e._v(" "),t("li",[t("p",[e._v('Another reason could be that you use a legacy api key. The legacy api keys are located in store settings -> Access Tokens. But you need to create an account api key which is located in Account -> Manage Account -> tab "API Keys". See section '),t("a",{attrs:{href:"#22-create-an-api-key-and-configure-permissions"}},[e._v("2.2 Create an API key and configure permissions")]),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"the-order-states-do-not-update-although-the-invoice-has-been-paid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-order-states-do-not-update-although-the-invoice-has-been-paid"}},[e._v("#")]),e._v(" The order states do not update although the invoice has been paid")]),e._v(" "),t("p",[e._v('Please check the details of your invoice if there were any errors on sending the webhook request. Some hosting providers, firewall setups or Joomla security plugins may block POST requests to your site which lead to a http status of "403 forbidden".')]),e._v(" "),t("p",[e._v("You can check and verify yourself if there is something blocking requests to your site in one of these two ways:")]),e._v(" "),t("p",[t("strong",[e._v("1. Copy webhook callback URL")]),e._v("\ngo to your "),t("em",[e._v("VirtueMart BTCPay Payment Method Settings")]),e._v(' and copy the "Webhook callback URL". e.g. '),t("code",[e._v("https://EXAMPLE.COM/index.php?option=com_virtuemart&view=pluginresponse&task=pluginnotification&pm=2")])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(622),alt:"BTCPay Joomla VirtueMart: Webhook payload URL",title:"BTCPay Joomla VirtueMart: Webhook payload URL"}})]),e._v(" "),t("p",[t("strong",[e._v("2.1 Check using a command line (Linux or MacOS):")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl -vX POST -H "Content-Type: application/json" \\\n    -d \'{"data": "test"}\' WEBHOOK_CALLBACK_URL\n')])])]),t("p",[e._v("(replace "),t("code",[e._v("WEBHOOK_CALLBACK_URL")]),e._v(" with the one copied above)")]),e._v(" "),t("p",[e._v("Result:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".... snip ....\n* upload completely sent off: 16 out of 16 bytes\n< HTTP/1.1 403 Forbidden\n< access-control-allow-origin: *\n< Content-Type: application/json; charset=UTF-8\n< X-Cloud-Trace-Context: 4f07d5b2e5c2f05949d04421a8e2dd6a\n< Date: Thu, 17 Feb 2022 10:06:50 GMT\n< Server: Google Frontend\n< Content-Length: 26\n")])])]),t("p",[e._v('If you see that line "HTTP/1.1 403 Forbidden" or "HTTP/2 403" then something is blocking data sent to your VirtueMart site. You should ask your hosting provider or make sure no firewall or plugin is blocking the requests.')]),e._v(" "),t("p",[t("strong",[e._v("2.2 Check using an online service (if you do not have a command line available:")])]),e._v(" "),t("ul",[t("li",[e._v("Go to "),t("a",{attrs:{href:"https://reqbin.com/post-online",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://reqbin.com/post-online"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("ol",[t("li",[e._v("Enter your callback url (copied from step 1 above): "),t("code",[e._v("https://EXAMPLE.COM/index.php?option=com_virtuemart&view=pluginresponse&task=pluginnotification&pm=2")]),e._v("\n(replace this URL with the webhook callback url from step 1)")])])]),e._v(" "),t("li",[e._v('Make sure "POST" is selected')]),e._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[e._v("Click [Send]")])])])]),e._v(" "),t("figure",[t("img",{attrs:{src:a(293),alt:"BTCPay Joomla VirtueMart: Webhook payload URL forbidden",title:"BTCPay Joomla VirtueMart: Webhook payload URL forbidden"}})]),e._v(" "),t("p",[e._v('If you see "'),t("strong",[e._v("Status 403 (Forbidden)")]),e._v('" then POST requests to your site are blocked for some reason. You should ask your hosting provider or make sure no firewall or plugin is blocking the requests. If you see any other status code (200, 500, ...) a firewall problem seems to not apply, you probably need to further investigate.')]),e._v(" "),t("h2",{attrs:{id:"i-have-troubles-with-using-the-plugin-or-some-other-related-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-have-troubles-with-using-the-plugin-or-some-other-related-questions"}},[e._v("#")]),e._v(" I have troubles with using the plugin or some other related questions")]),e._v(" "),t("p",[e._v("Feel free to join our support channel over at "),t("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://chat.btcpayserver.org/"),t("OutboundLink")],1),e._v(" if you need help or have any further questions.")])])}),[],!1,null,null,null);t.default=r.exports}}]);