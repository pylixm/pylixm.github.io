(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{503:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("当我们在 Linux 系统中执行"),t("code",[s._v("ip a")]),s._v(" 或 "),t("code",[s._v("ifconfig")]),s._v(" 命令时，我们可以看到系统的网卡信息。如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@pylixm-27-192 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": lo: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("LOOPBACK,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" qdisc noqueue state UNKNOWN group default qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/8 scope "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lo\n       valid_lft forever preferred_lft forever\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": eth0: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("BROADCAST,MULTICAST,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" qdisc pfifo_fast state UP group default qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ether 00:16:3e:02:3e:d7 brd ff:ff:ff:ff:ff:ff\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".90.158/20 brd "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".95.255 scope global dynamic eth0\n       valid_lft 298248735sec preferred_lft 298248735sec\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@pylixm-27-192 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ifconfig")]),s._v("\neth0: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flags")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("416")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\n        inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".90.158  netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".240.0  broadcast "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".95.255\n        ether 00:16:3e:02:3e:d7  txqueuelen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46225179")]),s._v("  bytes "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32277903077")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.0")]),s._v(" GiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  overruns "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  frame "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        TX packets "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32412060")]),s._v("  bytes "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22789919573")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.2")]),s._v(" GiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" overruns "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  carrier "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  collisions "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nlo: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flags")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("UP,LOOPBACK,RUNNING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n        inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1  netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.0")]),s._v(".0.0\n        loop  txqueuelen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Local Loopback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5440800")]),s._v("  bytes "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9157089685")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.5")]),s._v(" GiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  overruns "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  frame "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        TX packets "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5440800")]),s._v("  bytes "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9157089685")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.5")]),s._v(" GiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" overruns "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  carrier "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  collisions "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("类似"),t("code",[s._v("eth0")]),s._v("的便是物理网卡对应的系统接口，这里只有一个"),t("code",[s._v("eth0")]),s._v(" 说明我的机器只有一个物理网卡。"),t("code",[s._v("lo")]),s._v(" 大家肯定多少有所耳闻，它是一个虚拟的网络接口，并没有对应的物理网卡，我们知道它的地址是"),t("code",[s._v("127.0.0.1")]),s._v("，主要作为本地地址使用。在程序开发中，我们常常把服务启动在这个地址上，通过浏览器来访问"),t("code",[s._v("127.0.0.1")]),s._v("或其解析的"),t("code",[s._v("localhost")]),s._v(" 来访问本地的服务进行调试。")]),s._v(" "),t("p",[s._v("上面说的这种用法属于本地系统内部服务交互的一个典型用法。"),t("strong",[s._v("lo除了作为内部服务交互的接口外，还可作为 IP 的暂存接口使用")]),s._v("。一个典型的应用场景「LVS DR模式」：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在 DR 模式中，RS 需要在 non-arp 的网卡上配置 vip，lo 即可作为这个 non-arp 网卡配合内核参数"),t("code",[s._v("arp_ignore=1")]),s._v("将 ARP 包仅限定真实网卡信息本身，即只回答目标 IP 地址是来访网络接口本地地址的 ARP 查询请求，说白了，就是只回 LVS 服务器的 ARP 包，避免 vip 冲突。")])]),s._v(" "),t("li",[t("p",[s._v("RS 回包，利用参数"),t("code",[s._v("arp_announce=2")]),s._v("发送 ARP 报文时，使用了本地真实网卡的 ip 地址，这样顺利拿到客户机的 mac 地址。IP 层并没有变化，还是源地址为 VIP，目标地址为客户端 IP。")])])]),s._v(" "),t("p",[s._v("LVS DR 的原理，可阅读下边文章，写的比较清晰明了：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://my.oschina.net/u/2487485/blog/780346",title:"关于LVS-DR中一次数据的完整旅行",target:"_blank",rel:"noopener noreferrer"}},[s._v("关于 LVS-DR 中一次数据的完整旅行"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://dockone.io/article/10052",title:"LVS那些你不知道的秘密",target:"_blank",rel:"noopener noreferrer"}},[s._v("LVS 那些你不知道的秘密"),t("OutboundLink")],1)])]),s._v(" "),t("p",[t("strong",[s._v("另外，这个 lo 绑定 ip 时有坑，在我们不使用时需要及时清理。否则，当我们访问解析为 lo 绑定的 ip 的域名的时候，请求会达到本地的 lo 网卡，本地有这个 ip 对应的服务还好，若没有，那请求直接报错。")])]),s._v(" "),t("p",[s._v("总结下，lo 网卡的主要功能：")]),s._v(" "),t("ul",[t("li",[s._v("作为本地系统服务的内部交互接口。")]),s._v(" "),t("li",[s._v("作为 ip 的暂存虚拟网卡。")])]),s._v(" "),t("p",[s._v("欢迎留言，讨论 lo 的其他有意思的功能。")])])}),[],!1,null,null,null);t.default=e.exports}}]);