(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{775:function(e,a,t){"use strict";t.r(a);var s=t(10),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"synchronization-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronization-faq"}},[e._v("#")]),e._v(" Synchronization FAQ")]),e._v(" "),a("p",[e._v("This document covers the most common questions and issues that may occur during BTCPay sync.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#why-does-btcpay-sync"}},[e._v("Why does BTCPay sync?")])]),a("li",[a("a",{attrs:{href:"#can-i-skip-the-synchronization"}},[e._v("Can I skip the synchronization?")])]),a("li",[a("a",{attrs:{href:"#how-do-i-know-that-btcpay-synced-completely"}},[e._v("How do I know that BTCPay synced completely?")])]),a("li",[a("a",{attrs:{href:"#how-can-i-check-the-block-height-of-my-bitcoin-node"}},[e._v("How can I check the block height of my bitcoin node?")])]),a("li",[a("a",{attrs:{href:"#btcpay-server-takes-forever-to-synchronize"}},[e._v("BTCPay Server takes forever to synchronize")]),a("ul",[a("li",[a("a",{attrs:{href:"#cause-1-not-enough-cpu"}},[e._v("Cause 1: Not enough CPU")])]),a("li",[a("a",{attrs:{href:"#cause-2-using-swap-memory"}},[e._v("Cause 2: Using swap memory")])])])]),a("li",[a("a",{attrs:{href:"#btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[e._v("BTCPay Server keeps showing that my node is always starting")]),a("ul",[a("li",[a("a",{attrs:{href:"#cause-1-you-do-not-have-enough-ram"}},[e._v("Cause 1: You do not have enough RAM")])]),a("li",[a("a",{attrs:{href:"#cause-2-you-do-not-have-enough-storage"}},[e._v("Cause 2: You do not have enough storage")])]),a("li",[a("a",{attrs:{href:"#cause-3-you-accidentally-disabled-pruning"}},[e._v("Cause 3: You accidentally disabled pruning")])]),a("li",[a("a",{attrs:{href:"#cause-4-your-bitcoin-data-directory-is-corrupted"}},[e._v("Cause 4: Your bitcoin data directory is corrupted")])]),a("li",[a("a",{attrs:{href:"#cause-5-your-last-wallet-synchronisation-goes-beyond-pruned-data"}},[e._v("Cause 5: Your last wallet synchronisation goes beyond pruned data")])])])]),a("li",[a("a",{attrs:{href:"#im-running-a-full-node-and-have-a-synched-blockchain-can-btcpay-use-it-so-that-it-doesnt-have-to-do-a-full-sync"}},[e._v("I'm running a full node and have a synched blockchain, can BTCPay use it so that it doesn't have to do a full sync?")])]),a("li",[a("a",{attrs:{href:"#how-to-enable-bitcoin-node-pruning"}},[e._v("How to enable Bitcoin node pruning?")])]),a("li",[a("a",{attrs:{href:"#how-to-disable-bitcoin-node-pruning"}},[e._v("How to disable Bitcoin node pruning?")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"why-does-btcpay-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-does-btcpay-sync"}},[e._v("#")]),e._v(" Why does BTCPay sync?")]),e._v(" "),a("p",[e._v("After deployment, your BTCPay Server needs to sync the entire blockchain and validate all the consensus rules. Depending on your machine specifications, bandwidth and number of altcoins you added, this process may take between 1-5 days.")]),e._v(" "),a("p",[e._v("It may seem tedious, but it's a critical step of running your own full node and not having to trust or rely on anyone. Your node will not only download ~300GB of data (less if you're using a pruned node) but also validate all the rules of the consensus. You can find more information about the importance of blockchain synchronization in "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=OrYDehC-8TU",target:"_blank",rel:"noopener noreferrer"}},[e._v("this video"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If you are only interested in learning about BTCPay Server i.e. simply "),a("RouterLink",{attrs:{to:"/TryItOut/"}},[e._v("trying it out")]),e._v(" without deploying your own instance, you can avoid sync by using a "),a("RouterLink",{attrs:{to:"/Deployment/ThirdPartyHosting/"}},[e._v("Third-Party host")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"can-i-skip-the-synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-skip-the-synchronization"}},[e._v("#")]),e._v(" Can I skip the synchronization?")]),e._v(" "),a("p",[e._v("You can't skip synchronization if you are deploying a BTCPay Server, but you can drastically decrease the time it takes. If you're comfortable with using the command line, you can use FastSync to synchronize your node faster. Be sure to "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/tree/master/contrib/FastSync",target:"_blank",rel:"noopener noreferrer"}},[e._v("read this FastSync document"),a("OutboundLink")],1),e._v(" to understand the potential trust issues involved with this feature.")]),e._v(" "),a("p",[e._v("To use FastSync, make sure your deployment has a "),a("a",{attrs:{href:"#how-to-enable-bitcoin-node-pruning"}},[e._v("pruning option enabled")]),e._v(" by using an "),a("code",[e._v("opt-save-storage")]),e._v(" environment variable, otherwise bitcoind will not be able to sync. First step is to "),a("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-ssh-into-my-btcpay-running-on-vps"}},[e._v("ssh into")]),e._v(" your BTCPayServer instance and run the following commands:")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("/btcpayserver-docker/\nbtcpay-down.sh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" contrib/FastSync\n./load-utxo-set.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Once FastSync has completed")]),e._v("\nbtcpay-up.sh\n")])])]),a("p",[e._v("After FastSync is complete and you have brought back up your instance, refresh your BTCPay domain and wait for remaining blockchain synchronization. You can also follow "),a("a",{attrs:{href:"https://youtube.com/watch?v=VNMnd-dX9Q8?t=1730",target:"_blank",rel:"noopener noreferrer"}},[e._v("this video"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If your FastSync returns "),a("code",[e._v("You need to delete your Bitcoin Core wallet")]),e._v(" after you load the uxto set, or you find this error: "),a("code",[e._v("Last wallet synchronisation goes beyond pruned data")]),e._v(", see the cause of "),a("a",{attrs:{href:"#btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[e._v("BTCPay Server keeps showing that my node is always starting")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"how-do-i-know-that-btcpay-synced-completely"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-know-that-btcpay-synced-completely"}},[e._v("#")]),e._v(" How do I know that BTCPay synced completely?")]),e._v(" "),a("p",[e._v("When you do not see a pop-up message in the bottom right corner, which shows the sync progress, that means that your server is fully synced and you can "),a("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("begin using it")]),e._v(".")],1),e._v(" "),a("p",[e._v("If you want to check that your BTCPay Server Bitcoin node is synchronized with the most recent block in the Bitcoin blockchain, "),a("a",{attrs:{href:"#how-can-i-check-the-block-height-of-my-bitcoin-node"}},[e._v("check your node height")]),e._v(" matches the current block height using any blockchain explorer.")]),e._v(" "),a("h2",{attrs:{id:"how-can-i-check-the-block-height-of-my-bitcoin-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-check-the-block-height-of-my-bitcoin-node"}},[e._v("#")]),e._v(" How can I check the block height of my bitcoin node?")]),e._v(" "),a("p",[e._v("To verify the sync status of your Bitcoin node, you can use bitcoin-cli commands inside your server's Bitcoin container. SSH into your server and navigate to the directory where you "),a("RouterLink",{attrs:{to:"/Troubleshooting/#23-bitcoin-node-logs"}},[e._v("view Bitcoin logs")]),e._v(" run the command: "),a("code",[e._v("bitcoin-cli.sh getblockcount")]),e._v(" to view the current block of your server's Bitcoin node.")],1),e._v(" "),a("h2",{attrs:{id:"btcpay-server-takes-forever-to-synchronize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-takes-forever-to-synchronize"}},[e._v("#")]),e._v(" BTCPay Server takes forever to synchronize")]),e._v(" "),a("p",[e._v("Synchronizing a Full Bitcoin node should take between 1 and 5 days. It should sync quickly at first and more slowly at the end.")]),e._v(" "),a("p",[e._v("If the node appears to not be syncing, verify:")]),e._v(" "),a("ul",[a("li",[e._v("Not enough CPU")]),e._v(" "),a("li",[e._v("Using swap memory")])]),e._v(" "),a("h3",{attrs:{id:"cause-1-not-enough-cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cause-1-not-enough-cpu"}},[e._v("#")]),e._v(" Cause 1: Not enough CPU")]),e._v(" "),a("p",[e._v("We recommend 2 CPU while synchronizing; however some hosting providers throttle your CPU if you use too much.")]),e._v(" "),a("p",[e._v("Check with")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" stats\n")])])]),a("p",[e._v("If you see more than 100% CPU usage, while being very slow to sync:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("8e7ac41e6e2a        btcpayserver_bitcoind               100%               560.5MiB / 3.853GiB   14.20%              4.17\n")])])]),a("p",[e._v("Then you need to scale up your machine specification.")]),e._v(" "),a("p",[e._v("If you see very low CPU usage (less than 10%) during synchronization:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("8e7ac41e6e2a        btcpayserver_bitcoind               10%               560.5MiB / 3.853GiB   14.20%              4.17\n")])])]),a("p",[e._v("Your hosting provider might throttle your CPU. Please make sure your host supports the high use of CPU for an extended period.")]),e._v(" "),a("p",[e._v("If they don't allow it, shut down your server until they stop throttling you. Then you can limit the CPU via docker, and restart the server:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" update btcpayserver_bitcoind "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--cpus")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('".8"')]),e._v("\n")])])]),a("h3",{attrs:{id:"cause-2-using-swap-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cause-2-using-swap-memory"}},[e._v("#")]),e._v(" Cause 2: Using swap memory")]),e._v(" "),a("p",[e._v("If you are synching and don't have enough memory, your server may use swap memory to continue operating:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v("\n")])])]),a("p",[e._v("If you see swap memory usage:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("              total        used        "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v("      shared  buff/cache   available\nMem:           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G        0M         66M        0G        0M\nSwap:          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(".0G        200M      800M\n")])])]),a("p",[e._v("Then it means you need to scale up your server by adding more memory.")]),e._v(" "),a("h2",{attrs:{id:"btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[e._v("#")]),e._v(" BTCPay Server keeps showing that my node is always starting")]),e._v(" "),a("p",[e._v("Possible cause:")]),e._v(" "),a("ul",[a("li",[e._v("You do not have enough RAM")]),e._v(" "),a("li",[e._v("You do not have enough storage")]),e._v(" "),a("li",[e._v("You accidentally disabled pruning")]),e._v(" "),a("li",[e._v("Your bitcoin data directory is corrupted")]),e._v(" "),a("li",[e._v("Your last wallet synchronisation goes beyond pruned data")])]),e._v(" "),a("h3",{attrs:{id:"cause-1-you-do-not-have-enough-ram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cause-1-you-do-not-have-enough-ram"}},[e._v("#")]),e._v(" Cause 1: You do not have enough RAM")]),e._v(" "),a("p",[e._v("Check your RAM:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v("\n")])])]),a("p",[e._v("If you see that you have no "),a("code",[e._v("free")]),e._v(" or very little "),a("code",[e._v("available")]),e._v(" memory:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("              total        used        "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v("      shared  buff/cache   available\nMem:           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G        0M         66M        0G        0M\nSwap:            0B          0B          0B\n")])])]),a("p",[e._v("Then you need more memory. If you have already synched your node, you can add some swap memory. If you haven't, your server specs are too limited.")]),e._v(" "),a("p",[e._v("If you have already synched, you can add 2G of swap memory with:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("fallocate "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-l")]),e._v(" 2G /mnt/swapfile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("600")]),e._v(" /mnt/swapfile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkswap")]),e._v(" /mnt/swapfile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("swapon")]),e._v(" /mnt/swapfile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/mnt/swapfile   none    swap    sw    0   0"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" /etc/fstab\n")])])]),a("h3",{attrs:{id:"cause-2-you-do-not-have-enough-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cause-2-you-do-not-have-enough-storage"}},[e._v("#")]),e._v(" Cause 2: You do not have enough storage")]),e._v(" "),a("p",[e._v("Check the storage of your machine:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("df")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v("\n")])])]),a("p",[e._v("If you see you don't have any storage left (/dev/sda1 in my case)")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Filesystem      Size  Used Avail Use% Mounted on\nudev            "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G     "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("% /dev\ntmpfs           395M   41M  354M  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v("% /run\n/dev/sda1       125G  125G  0G   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("% /\ntmpfs           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G     "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("% /dev/shm\ntmpfs           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(".0M     "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(".0M   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("% /run/lock\ntmpfs           "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G     "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("% /sys/fs/cgroup\n/dev/sdb1       "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(".8G   18M  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(".4G   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/Docker/#generated-docker-compose"}},[e._v("Choose the docker fragment")]),e._v(" for the amount of storage you aim to keep. Then "),a("RouterLink",{attrs:{to:"/Docker/#how-i-can-prune-my-nodes"}},[e._v("prune your node")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"cause-3-you-accidentally-disabled-pruning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cause-3-you-accidentally-disabled-pruning"}},[e._v("#")]),e._v(" Cause 3: You accidentally disabled pruning")]),e._v(" "),a("p",[e._v("If you have recently tried to modify your environment variables using the "),a("code",[e._v('export BTCPAYGEN_ADDITIONAL_FRAGMENTS="xyz"')]),e._v(" command to add an additional fragment, but forgot to include your current ones, you may have disabled pruning.")]),e._v(" "),a("p",[e._v("If you don't have enough memory to store the entire Bitcoin blockchain and you don't have an "),a("code",[e._v("opt-save-storage")]),e._v(" listed when you "),a("RouterLink",{attrs:{to:"/FAQ/Deployment/#how-can-i-modify-or-deactivate-environment-variables"}},[e._v("print the complete list of options")]),e._v(" that you are running, it is very likely you have disabled pruning.")],1),e._v(" "),a("p",[e._v("You can verify by checking your Bitcoind logs:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--tail")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" btcpayserver_bitcoind\n")])])]),a("p",[e._v("If you see:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Block files have previously been pruned.\nYou need to rebuild the database using "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-reindex")]),e._v(" to go back to unpruned mode.\nThis will redownload the entire blockchain.\nPlease restart with "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-reindex")]),e._v(" or -reindex-chainstate to recover.\n")])])]),a("p",[e._v("You can simply "),a("a",{attrs:{href:"#how-to-enable-bitcoin-node-pruning"}},[e._v("re-enable pruning")]),e._v(" to solve the issue.")]),e._v(" "),a("h3",{attrs:{id:"cause-4-your-bitcoin-data-directory-is-corrupted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cause-4-your-bitcoin-data-directory-is-corrupted"}},[e._v("#")]),e._v(" Cause 4: Your bitcoin data directory is corrupted")]),e._v(" "),a("p",[e._v("Check the logs of your node:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--tail")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" btcpayserver_bitcoind\n")])])]),a("p",[e._v("If you see:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Please restart with "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-reindex")]),e._v(" or -reindex-chainstate to recover.\n")])])]),a("p",[e._v("Then your bitcoin data directory has been corrupted. It may be physical damage or failure of the hard drive.\nTo reindex your node:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("btcpay-down.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete 'blocks' and 'chainstate' folders")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-rf")]),e._v(" /var/lib/docker/volumes/generated_bitcoin_datadir/_data/blocks\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-rf")]),e._v(" /var/lib/docker/volumes/generated_bitcoin_datadir/_data/chainstate\nbtcpay-up.sh\n")])])]),a("h3",{attrs:{id:"cause-5-your-last-wallet-synchronisation-goes-beyond-pruned-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cause-5-your-last-wallet-synchronisation-goes-beyond-pruned-data"}},[e._v("#")]),e._v(" Cause 5: Your last wallet synchronisation goes beyond pruned data")]),e._v(" "),a("p",[e._v("This can happen if you use FastSync or import an already synched blockchain. It means that the bitcoin core wallet needs to be removed because it was created before the utxoset, likely because BTCPay Server started without the utxoset at the first boot. To verify this case, "),a("RouterLink",{attrs:{to:"/Troubleshooting/#21-btcpay-logs"}},[e._v("check the bitcoind log")]),e._v(" for this:")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Error: Prune: last wallet synchronisation goes beyond pruned data. You need to "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-reindex")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("download the whole blockchain again "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" of pruned "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("If you see this error and agree to remove the wallet to finish syncing, use "),a("code",[e._v("docker volume rm generated_bitcoin_wallet_datadir")]),e._v(" after you run "),a("code",[e._v("btcpay-down.sh")]),e._v(" and before you run "),a("code",[e._v("btcpay-up.sh")]),e._v("\nWARNING: Do not delete this wallet if you have any funds on it.")]),e._v(" "),a("h2",{attrs:{id:"im-running-a-full-node-and-have-a-synched-blockchain-can-btcpay-use-it-so-that-it-doesnt-have-to-do-a-full-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#im-running-a-full-node-and-have-a-synched-blockchain-can-btcpay-use-it-so-that-it-doesnt-have-to-do-a-full-sync"}},[e._v("#")]),e._v(" I'm running a full node and have a synched blockchain, can BTCPay use it so that it doesn't have to do a full sync?")]),e._v(" "),a("p",[e._v("Yes you can! However, before you do that, you'll want to stop bitcoind from updating docker's volume for it, as that job will be taken over by BTCPay Server.")]),e._v(" "),a("p",[e._v("If you want to run BTCPay Server inside a docker-compose, and that you have the data directory ("),a("code",[e._v(".bitcoin")]),e._v(") of a fully synched node on your docker host, then you can reuse it easily for BTCPay Server.")]),e._v(" "),a("p",[e._v("To do that, follow the following steps :")]),e._v(" "),a("ul",[a("li",[e._v("Do the normal setup according to "),a("RouterLink",{attrs:{to:"/Docker/"}},[e._v("this instruction")]),e._v(". Note the "),a("code",[e._v("opt-save-storage")]),e._v(" environment variable, which is used to enable various pruning levels. If you do not want to prune your exiting data directory, then omit the following line in your BTCPay docker deployment: "),a("code",[e._v('export BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-save-storage-s"')]),e._v(".")],1),e._v(" "),a("li",[e._v("Once "),a("code",[e._v("btcpay-setup.sh")]),e._v(" is over, turn down the docker compose with "),a("code",[e._v("btcpay-down.sh")]),e._v(".")]),e._v(" "),a("li",[e._v("Login as root with "),a("code",[e._v("sudo su -")]),e._v(".")]),e._v(" "),a("li",[e._v("Open the docker's volume for bitcoind : "),a("code",[e._v("cd /var/lib/docker/volumes/generated_bitcoin_datadir/")]),e._v(", and check its content with "),a("code",[e._v("ls -la")]),e._v(". You should see only one directory named "),a("code",[e._v("_data")]),e._v(".")]),e._v(" "),a("li",[e._v("Now remove the "),a("code",[e._v("_data")]),e._v("directory : "),a("code",[e._v("rm -r _data")]),e._v(". If for any reason you want to keep this directory and its content you can also rename it instead : "),a("code",[e._v("mv _data/ _data.old/")])]),e._v(" "),a("li",[e._v("Now create a "),a("a",{attrs:{href:"https://www.cyberciti.biz/faq/creating-soft-link-or-symbolic-link/",target:"_blank",rel:"noopener noreferrer"}},[e._v("symbolic link"),a("OutboundLink")],1),e._v(" between "),a("code",[e._v("/var/lib/docker/volumes/generated_bitcoin_datadir/_data")]),e._v(" and your data directory ("),a("code",[e._v(".bitcoin")]),e._v(") on your host: "),a("code",[e._v("ln -s path/to/.bitcoin /var/lib/docker/volumes/generated_bitcoin_datadir/_data")])]),e._v(" "),a("li",[e._v("Check that the link has been done with a "),a("code",[e._v("ls -la")])]),e._v(" "),a("li",[e._v("Start your docker-compose again with "),a("code",[e._v("btcpay-up.sh")])])]),e._v(" "),a("p",[e._v("Your BTCPay Server should now be fully synched.")]),e._v(" "),a("p",[e._v("If after this BTCPay Server keeps showing that your node is always starting, see the cause of "),a("a",{attrs:{href:"#btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[e._v("BTCPay Server keeps showing that my node is always starting")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"how-to-enable-bitcoin-node-pruning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-bitcoin-node-pruning"}},[e._v("#")]),e._v(" How to enable Bitcoin node pruning?")]),e._v(" "),a("p",[e._v("This will prune your Bitcoin full node to a maximum of 100GB (of blocks):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"opt-save-storage"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./btcpay-setup.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n")])])]),a("p",[e._v("Other pruning options are "),a("RouterLink",{attrs:{to:"/Docker/#generated-docker-compose"}},[e._v("documented here")]),e._v(". See "),a("RouterLink",{attrs:{to:"/FAQ/Deployment/#how-can-i-modify-or-deactivate-environment-variables"}},[e._v("this example")]),e._v(" for use with other additional fragments.")],1),e._v(" "),a("h2",{attrs:{id:"how-to-disable-bitcoin-node-pruning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-disable-bitcoin-node-pruning"}},[e._v("#")]),e._v(" How to disable Bitcoin node pruning?")]),e._v(" "),a("p",[e._v("To disable pruning of your Bitcoin node in BTCPay, first ensure you have enough memory to store the entire blockchain and BTCPayServer on your system. Then disable the "),a("code",[e._v("opt-save-storage")]),e._v(" environment variable. See "),a("RouterLink",{attrs:{to:"/FAQ/Deployment/#how-can-i-modify-or-deactivate-environment-variables"}},[e._v("this example")]),e._v(" to view your fragment list and select only one for removal. The following example will remove "),a("strong",[e._v("all")]),e._v(" additional fragments:")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./btcpay-setup.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n")])])]),a("p",[e._v("Then run the following commands to recreate a non-pruned Bitcoin node:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("btcpay-down.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete 'blocks' and 'chainstate' folders")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-rf")]),e._v(" /var/lib/docker/volumes/generated_bitcoin_datadir/_data/blocks\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-rf")]),e._v(" /var/lib/docker/volumes/generated_bitcoin_datadir/_data/chainstate\nbtcpay-up.sh\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);