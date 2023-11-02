(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{486:function(e,t,i){e.exports=i.p+"assets/img/Invoices.d261efe1.png"},487:function(e,t,i){e.exports=i.p+"assets/img/InvoiceFiltering.71317a76.gif"},779:function(e,t,i){"use strict";i.r(t);var a=i(10),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"what-is-an-invoice-in-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-invoice-in-btcpay-server"}},[e._v("#")]),e._v(" What is an invoice in BTCPay Server?")]),e._v(" "),t("p",[e._v("An "),t("strong",[e._v("invoice")]),e._v(" is a document issued by the seller to a buyer to collect payment.")]),e._v(" "),t("p",[e._v("In BTCPay Server, an invoice represents a document that must be paid within a "),t("strong",[e._v("defined time interval")]),e._v(" at a fixed exchange rate. Invoices have expiration because they lock the exchange rate within a specified time frame to protect the receiver from price fluctuations.")]),e._v(" "),t("figure",[t("img",{attrs:{src:i(486),alt:"Invoices",title:"Invoices"}})]),e._v(" "),t("p",[e._v("The core of BTCPay Server is the ability to act as a bitcoin invoice management system. An invoice is an essential tool for keeping track and managing a received payment.")]),e._v(" "),t("p",[e._v("Unless you use a built in "),t("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("Wallet")]),e._v(" to receive payments manually, all payments within a store will be shown on the "),t("code",[e._v("Invoices")]),e._v(" page. This page cumulatively sorts payments by date and is a central piece for invoice management and payment troubleshooting.")],1),e._v(" "),t("h2",{attrs:{id:"invoice-statuses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoice-statuses"}},[e._v("#")]),e._v(" Invoice statuses")]),e._v(" "),t("p",[e._v("Table below lists and describes common invoice statuses in BTCPay and suggests common actions.\nActions are just recommendations.\nIt's up to users to define best course of action for their use-case and business.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Invoice Status")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Action")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("New")])]),e._v(" "),t("td",[e._v("Not paid, invoice timer still has not expired")]),e._v(" "),t("td",[e._v("None")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("New (paidPartial)")])]),e._v(" "),t("td",[e._v("Paid, not in full, invoice timer still has not expired")]),e._v(" "),t("td",[e._v("None")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Expired")])]),e._v(" "),t("td",[e._v("Not paid, invoice timer expired")]),e._v(" "),t("td",[e._v("None")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Expired (paidPartial)")]),e._v(" **")]),e._v(" "),t("td",[e._v("Paid, not in full amount, and expired")]),e._v(" "),t("td",[e._v("Contact buyer to arrange a refund or ask for them to pay their due. Optionally mark invoice as settled or invalid")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Expired (paidLate)")])]),e._v(" "),t("td",[e._v("Paid, in full amount, after the invoice timer has expired")]),e._v(" "),t("td",[e._v("Contact buyer to arrange a refund or process order if late confirmations are acceptable.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Settled (paidOver)")])]),e._v(" "),t("td",[e._v("Paid more than the invoice amount, settled, received sufficient amount of confirmations")]),e._v(" "),t("td",[e._v("Contact buyer to arrange a refund for the extra amount, or optionally wait for buyer to contact you")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Processing")])]),e._v(" "),t("td",[e._v("Paid in full, but has not received sufficient amount of confirmations specified in the store settings")]),e._v(" "),t("td",[e._v("Wait for confirmations (The invoice should become - settled)")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Processing (paidOver)")])]),e._v(" "),t("td",[e._v("Paid more than the invoice amount, not received sufficient amount of confirmations")]),e._v(" "),t("td",[e._v("Wait to be settled then contact buyer to arrange a refund for the extra amount, or optionally wait for buyer to contact you")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Settled")])]),e._v(" "),t("td",[e._v("Paid, in full, received sufficient amount of confirmations in store")]),e._v(" "),t("td",[e._v("Fulfil the order")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Settled (marked)")])]),e._v(" "),t("td",[e._v("Status was manually changed to settled from an processing or invalid status")]),e._v(" "),t("td",[e._v("Store admin has marked the payment as settled")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Invalid*")])]),e._v(" "),t("td",[e._v("Paid, but failed to receive sufficient amount of confirmations within the time specified in store settings")]),e._v(" "),t("td",[e._v("Check the transaction on a blockchain explorer, if it received sufficient confirmations, mark as settled")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Invalid (marked)")])]),e._v(" "),t("td",[e._v("Status was manually changed to invalid from a settled or expired status")]),e._v(" "),t("td",[e._v("Store admin has marked the payment as invalid")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Invalid (paidOver)")])]),e._v(" "),t("td",[e._v("Paid more than the invoice amount, but failed to receive sufficient amount of confirmations within the time specified in store settings")]),e._v(" "),t("td",[e._v("Check the transaction on a blockchain explorer, if it received sufficient confirmations, mark as settled")])])])]),e._v(" "),t("ul",[t("li",[t("ul",[t("li",[e._v("Invoices paid via the "),t("RouterLink",{attrs:{to:"/LightningNetwork/"}},[e._v("Lightning Network")]),e._v(" immediately go to a settled state, as their settlement is instant.")],1)])]),e._v(" "),t("li",[e._v("** Paid Partial invoice usually happens when a buyer pays the invoice from the exchange wallet which takes a fee for their service and deducts it from a total. In some cases, it happens when buyer enters an incorrect amount in their wallet.")]),e._v(" "),t("li",[e._v("*** Invalid - If you're receiving a lot of invalid invoices in your store, you may want to "),t("RouterLink",{attrs:{to:"/FAQ/Stores/#payment-invalid-if-transactions-fails-to-confirm-minutes-after-invoice-expiration"}},[e._v("adjust invalid invoice time in store settings")]),e._v(".")],1)]),e._v(" "),t("h3",{attrs:{id:"invoice-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoice-details"}},[e._v("#")]),e._v(" Invoice details")]),e._v(" "),t("p",[e._v("The invoice details page contains all information related to an invoice.")]),e._v(" "),t("p",[e._v("Invoice information is created automatically based on invoice status, exchange rate, etc. Product information is created automatically if the invoice was created with product information such as in the Point of Sale app. Read about collecting Buyer information "),t("RouterLink",{attrs:{to:"/FAQ/Stores/#how-to-collect-additional-buyer-information"}},[e._v("here")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"invoice-filtering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoice-filtering"}},[e._v("#")]),e._v(" Invoice filtering")]),e._v(" "),t("p",[e._v("Invoices can be filtered via the quick filters located next to the search button or the advanced filters, which can be toggled by clicking the (Help) link on the top. Users can "),t("strong",[e._v("filter invoices")]),e._v(" by store, order id, item id, status, or date.")]),e._v(" "),t("figure",[t("img",{attrs:{src:i(487),alt:"Invoice Filtering",title:"Invoice Filtering"}})]),e._v(" "),t("h3",{attrs:{id:"invoice-export"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoice-export"}},[e._v("#")]),e._v(" Invoice export")]),e._v(" "),t("p",[e._v("BTCPay Server Invoices can be exported in CSV or JSON format. For more information about invoice export and accounting, "),t("RouterLink",{attrs:{to:"/Reporting/"}},[e._v("see this page")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"refunding-an-invoice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refunding-an-invoice"}},[e._v("#")]),e._v(" Refunding an invoice")]),e._v(" "),t("p",[e._v("If for any reason you would like to issue a refund, you can easily create a refund from the invoice view. Check our "),t("RouterLink",{attrs:{to:"/Refund/"}},[e._v("refunding documentation")]),e._v(" for more information.")],1),e._v(" "),t("h2",{attrs:{id:"archiving-invoices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#archiving-invoices"}},[e._v("#")]),e._v(" Archiving invoices")]),e._v(" "),t("p",[e._v("As a result of the no address re-use feature of BTCPay Server, it's common to see many expired invoices in your store's invoice page. To hide them from your view, select them in the list and mark them as "),t("strong",[e._v("archived")]),e._v(". Invoices that have been marked as archived are not deleted. Payment to an archived invoice will still be detected by your BTCPay Server (paidLate status). You can view the store's archived invoices at any time by selecting archived invoices from the search filter dropdown.")])])}),[],!1,null,null,null);t.default=n.exports}}]);