(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{338:function(t,a,e){t.exports=e.p+"assets/img/transifex-alert.6ee8f6a0.png"},710:function(t,a,e){"use strict";e.r(a);var s=e(10),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"translating-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#translating-btcpay-server"}},[t._v("#")]),t._v(" Translating BTCPay Server")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#why-translations-matter"}},[t._v("Why translations matter")])]),a("li",[a("a",{attrs:{href:"#requirements"}},[t._v("Requirements")])]),a("li",[a("a",{attrs:{href:"#step-1-view-existing-translations"}},[t._v("Step 1: View Existing Translations")])]),a("li",[a("a",{attrs:{href:"#step-2-start-new-translation"}},[t._v("Step 2: Start New Translation")])]),a("li",[a("a",{attrs:{href:"#step-3-translation"}},[t._v("Step 3: Translation")])]),a("li",[a("a",{attrs:{href:"#translation-tips"}},[t._v("Translation Tips")]),a("ul",[a("li",[a("a",{attrs:{href:"#-variables-"}},[t._v("Variables")])]),a("li",[a("a",{attrs:{href:"#-notifications-"}},[t._v("Notifications")])])])]),a("li",[a("a",{attrs:{href:"#get-help-ask-questions"}},[t._v("Get help, ask questions")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"why-translations-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-translations-matter"}},[t._v("#")]),t._v(" Why translations matter")]),t._v(" "),a("p",[t._v("Translating BTCPay Server into multiple languages lets us reach a broader user base for the software and also decreases friction in the invoice checkout for customers that might not understand English perfectly.")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("BTCPay Server uses a translation platform called Transifex to allow contributors to translate it into more languages.")]),t._v(" "),a("p",[t._v("The community is currently working on translating the "),a("a",{attrs:{href:"https://www.transifex.com/btcpayserver/btcpayserver/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("invoice checkout page"),a("OutboundLink")],1),t._v(" and the "),a("a",{attrs:{href:"https://www.transifex.com/btcpayserver/btcpayserver-website/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("After a translation has been made on Transifex, the submittal process is completely automated and merged periodically into the BTCPay repository. Translations provided outside of Transifex, such as pull requests in Github will not be accepted.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"step-1-view-existing-translations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-view-existing-translations"}},[t._v("#")]),t._v(" Step 1: View Existing Translations")]),t._v(" "),a("p",[t._v("First verify the language translation you would like to complete has not been started already. If it has already been started, you can complete the remaining strings. If you don't see the language you are looking for, make a request to add it to the project and to be a translator for it.")]),t._v(" "),a("h2",{attrs:{id:"step-2-start-new-translation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-start-new-translation"}},[t._v("#")]),t._v(" Step 2: Start New Translation")]),t._v(" "),a("p",[t._v("Look for the language you would like to translate. Some languages have the option for several regions. If your language request was denied, the reason is likely that the language is already being translated.")]),t._v(" "),a("h2",{attrs:{id:"step-3-translation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-translation"}},[t._v("#")]),t._v(" Step 3: Translation")]),t._v(" "),a("p",[t._v("Line 1: Translate your Country-Code.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Example for Brazilian Portuguese\n 'en' translates to 'pt-BR'\n")])])]),a("p",[t._v("Line 2: The name of your language, in your language.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This is the language name that will appear in user interface language dropdowns.")])]),t._v(" "),a("p",[t._v("Example for French\n'English' translates to 'Français'")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"translation-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#translation-tips"}},[t._v("#")]),t._v(" Translation Tips")]),t._v(" "),a("h3",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Variables")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{{Words}} like this will be replaced by a variable depending on user choices.\n{{btcDue}} Example: 10\n{{cryptoCode}} Example: BTC\n")])])]),a("p",[t._v("They should not be translated, but they need to remain in the correct place in your translated string because their placement will vary by language.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('French Example:\n"Return to StoreName" translates to "Retourner sur {{storeName}}"\n\nJapanese Example:\n"Return to StoreName" translates to "{{storeName}} に戻る"\n')])])]),a("h3",{attrs:{id:"notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notifications"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Notifications")])]),t._v(" "),a("p",[t._v("To stay up to date with new strings - enable alerts for new strings needing to be translated by enabling the watch language feature in Transifex.")]),t._v(" "),a("p",[t._v('Click on the "eye" icon (in red in the following screenshot).')]),t._v(" "),a("figure",[a("img",{attrs:{src:e(338),alt:"Transifex Alerts",title:"Transifex Alerts"}})]),t._v(" "),a("p",[t._v("You have to click it for the each project you wish to follow.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"get-help-ask-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-help-ask-questions"}},[t._v("#")]),t._v(" Get help, ask questions")]),t._v(" "),a("p",[t._v("If you have any questions about translating, join the "),a("a",{attrs:{href:"https://chat.btcpayserver.org/btcpayserver/channels/translations",target:"_blank",rel:"noopener noreferrer"}},[t._v("#Translations channel"),a("OutboundLink")],1),t._v(" on Mattermost.")])])}),[],!1,null,null,null);a.default=r.exports}}]);