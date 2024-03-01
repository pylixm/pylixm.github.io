(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{441:function(r,v,e){"use strict";e.r(v);var t=e(4),_=Object(t.a)({},(function(){var r=this,v=r._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[r._v("#")]),r._v(" 简介")]),r._v(" "),v("p",[r._v("LVS是Linux virtual server的缩写，是一个高可用性、高性能的虚拟服务器集群系统。主要针对高可伸缩、高可用网络服务的需求，给出了基于IP层和基于内容请求分发的负载平衡调度解决方法，并在Linux内核中实现了这些方法，将一组服务器构成一个实现可伸缩的、高可用网络服务的虚拟服务器。")]),r._v(" "),v("p",[r._v("这是一个由章文嵩博士发起的一个开源项目，它的官方网是 "),v("code",[r._v("http://www.linuxvirtualserver.org")]),r._v(" 现在 LVS 已经是 Linux 内核标准的一部分。使用 LVS 可以达到的技术目标是：通过 LVS 达到的负载均衡技术和 Linux 操作系统实现一个高性能高可用的 Linux 服务器集群，它具有良好的可靠性、可扩展性和可操作性。")]),r._v(" "),v("p",[r._v("LVS 常常和 keepalive 配合，来作为服务的4层（ISO七层协议的传输层）的负载均衡器使用，本文整理了lvs的一些原理性知识，来更好的理解和使用lvs。如何配置以及keepalive的知识，大家可参考"),v("a",{attrs:{href:"http://www.linuxvirtualserver.org/zh/lvs1.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("lvs官网"),v("OutboundLink")],1),r._v("或其他资料。")]),r._v(" "),v("h2",{attrs:{id:"结构组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结构组成"}},[r._v("#")]),r._v(" 结构组成")]),r._v(" "),v("p",[r._v("LVS集群架构：")]),r._v(" "),v("ul",[v("li",[r._v("负载调度器（load balancer/ Director），它是整个集群对外面的前端机，负责将客户的请求发送到一组后端服务器上执行，而客户端则认为返回来是同一个IP(通常把这个IP成为虚拟ip或VIP)")]),r._v(" "),v("li",[r._v("服务器池（server pool/ Realserver），是一组真正执行客户请求的服务器，执行的服务一般有WEB、MAIL、FTP和DNS等。")]),r._v(" "),v("li",[r._v("共享存储（shared storage），它为服务器池提供一个共享的存储区，这样很容易使得服务器池拥有相同的内容，提供相同的服务。")])]),r._v(" "),v("p",[r._v("LVS软件组成：")]),r._v(" "),v("ul",[v("li",[r._v("ipvs(ip virtual server)：一段代码工作在内核空间，叫ipvs，是真正生效实现调度的代码。")]),r._v(" "),v("li",[r._v("ipvsadm：另外一段是工作在用户空间，叫ipvsadm，负责为ipvs内核框架编写规则，定义谁是集群服务，而谁是后端真实的服务器(Real Server)。")])]),r._v(" "),v("h2",{attrs:{id:"相关术语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关术语"}},[r._v("#")]),r._v(" 相关术语")]),r._v(" "),v("ul",[v("li",[r._v("DS：Director Server。指的是前端负载均衡器节点")]),r._v(" "),v("li",[r._v("RS：Real Server。后端真实的工作服务器")]),r._v(" "),v("li",[r._v("VIP：向外部直接面向用户请求，作为用户请求的目标的IP地址，即lvs物理机外网ip。")]),r._v(" "),v("li",[r._v("DIP：Director Server IP，主要用于和内部主机通讯的IP地址，即lvs物理机内网ip。")]),r._v(" "),v("li",[r._v("RIP：Real Server IP，后端服务器的IP地址")]),r._v(" "),v("li",[r._v("CIP：Client IP，访问客户端的IP地址，即请求的来源ip。")])]),r._v(" "),v("h2",{attrs:{id:"lvs-基本工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lvs-基本工作原理"}},[r._v("#")]),r._v(" LVS 基本工作原理")]),r._v(" "),v("p",[v("img",{attrs:{src:"/static/imgs/lvs/lvs.jpg",alt:""}})]),r._v(" "),v("ul",[v("li",[r._v("1.当用户向"),v("strong",[r._v("负载均衡调度器")]),r._v("（VS或者叫LB）发起请求，调度器将请求发往至内核空间。")]),r._v(" "),v("li",[r._v("2.PREROUTING链首先会接收到用户请求，判断目标IP确定是本机IP，将数据包发往INPUT链。")]),r._v(" "),v("li",[r._v("3.IPVS是工作在INPUT链上的，当用户请求到达INPUT时，IPVS会将用户请求和自己"),v("strong",[r._v("已定义好的集群服务")]),r._v("进行比对，如果用户请求的就是定义的集群服务，那么此时IPVS会强行"),v("strong",[r._v("修改数据包里的目标IP地址及端口")]),r._v("，并将新的数据包发往POSTROUTING链。")]),r._v(" "),v("li",[r._v("4.POSTROUTING链接收数据包后发现目标IP地址刚好是自己的后端服务器，那么此时通过选路，将数据包最终发送给后端的服务器。")])]),r._v(" "),v("h2",{attrs:{id:"四种负载均衡模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四种负载均衡模式"}},[r._v("#")]),r._v(" 四种负载均衡模式")]),r._v(" "),v("p",[r._v("LVS 的负责均衡有四种常用模式，分别为DR模式、NAT模式、TUN模式、FULLNAT模式。")]),r._v(" "),v("h3",{attrs:{id:"nat-模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nat-模式"}},[r._v("#")]),r._v(" NAT 模式")]),r._v(" "),v("p",[r._v("VS/NAT是一种最简单的方式，所有的RealServer只需要将自己的网关指向Director即可。客户端可以是任意操作系统，但此方式下，一个Director能够带动的RealServer比较有限。在VS/NAT的方式下，Director也可以兼为一台RealServer。")]),r._v(" "),v("p",[v("img",{attrs:{src:"/static/imgs/lvs/nat.jpg",alt:""}})]),r._v(" "),v("p",[v("strong",[r._v("工作流程")]),r._v(" 用户请求LVS到达director，director将请求的报文的目的IP有VIP改为RIP，同时将报文的目标端口也改为realserver的相应端口，最后将报文发送到realserver上，realserver将通过网关路由到director，将数据返回给director，director在相应客户端之前，把数据包的源ip有RIP改为VIP，然后响应用户，将数据发送给用户。")]),r._v(" "),v("p",[v("strong",[r._v("特点")])]),r._v(" "),v("ul",[v("li",[r._v("NAT模式修改的是目的ip，可根据目的ip找到realserver，所以VIP和RIP不需要在同一个网段内。")]),r._v(" "),v("li",[r._v("NAT的包的进出都需要经过LVS，所以LVS可能会成为一个系统的瓶颈问题。")])]),r._v(" "),v("h3",{attrs:{id:"fullnat-模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fullnat-模式"}},[r._v("#")]),r._v(" FULLNAT 模式")]),r._v(" "),v("p",[r._v("FULLNAT模式和NAT相似，只是数据包在过lvs时，不只修改目的ip，源ip也一块修改了。")]),r._v(" "),v("p",[v("img",{attrs:{src:"/static/imgs/lvs/fullnat.png",alt:""}})]),r._v(" "),v("p",[v("strong",[r._v("特点")])]),r._v(" "),v("ul",[v("li",[r._v("FULLNAT模式也不需要DIP和RIP在同一网段。")]),r._v(" "),v("li",[r._v("FULLNAT和NAT相比的话：会保证RS的回包一定可到达LVS。")]),r._v(" "),v("li",[r._v("FULLNAT需要更新源IP，所以性能正常比NAT模式下降10%。")])]),r._v(" "),v("h3",{attrs:{id:"dr-模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dr-模式"}},[r._v("#")]),r._v(" DR 模式")]),r._v(" "),v("p",[r._v("VS/DR方式是通过改写请求报文中的MAC地址部分来实现的。Director和RealServer必需在统一个局域网内（相同机房）。 RealServer上绑定的VIP配置在各自Non-ARP的网络设备上(如lo或tunl),Director的VIP地址对外可见，而RealServer的VIP对外是不可见的。RealServer的ip可谓内网IP, 也可为公网IP。")]),r._v(" "),v("p",[v("img",{attrs:{src:"/static/imgs/lvs/dr.png",alt:""}})]),r._v(" "),v("p",[v("strong",[r._v("工作流程")]),r._v(" 用户请求LVS到达director，director将请求的报文的目的MAC地址改为后端的realserver的MAC地址，目的IP为VIP(不变)，源IP为client IP地址(不变)，然后director通过ARP广播将报文发送到realserver，realserver检测到目的地址为自己本地的VIP，如果在同一网段，将请求直接返回给用户，如果用户跟realserver不在同一个网段，则需要通过网关返回给用户。")]),r._v(" "),v("p",[v("strong",[r._v("特点")])]),r._v(" "),v("ul",[v("li",[r._v("RS跟Director Server必须有一个网卡在同一个物理网络中")]),r._v(" "),v("li",[r._v("所有的请求报文经由Director Server，但响应报文不经过Director Server")]),r._v(" "),v("li",[r._v("所有的real server机器上必须配置VIP地址（通常绑定lo）")])]),r._v(" "),v("h3",{attrs:{id:"tun-模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tun-模式"}},[r._v("#")]),r._v(" TUN 模式")]),r._v(" "),v("p",[r._v("IP隧道（IP tunneling）是将一个IP报文封装在另一个IP报文的技术，这可以使得目标为一个IP地址的数据报文能被封装和转发到另一个IP地址。IP隧道技术亦称为IP封装技术（IP encapsulation）。IP隧道主要用于移动主机和虚拟私有网络（Virtual Private Network），在其中隧道都是静态建立的，隧道一端有一个IP地址，另一端也有唯一的IP地址。")]),r._v(" "),v("p",[v("img",{attrs:{src:"/static/imgs/lvs/tun.jpg",alt:""}})]),r._v(" "),v("p",[v("strong",[r._v("工作流程")]),r._v(" 用户请求LVS到达director，director通过IP-TUN加密技术将请求报文的包封装到一个新的IP包里面，目的IP为VIP(不变)，然后director将报文发送到realserver，realserver基于IP-TUN解密，然后解析出来包的目的为VIP，检测网卡是否绑定了VIP，绑定了就处理这个包，如果在同一个网段，将请求直接返回给用户，否则通过网关返回给用户；如果没有绑定VIP就直接丢掉这个包。")]),r._v(" "),v("p",[v("strong",[r._v("特点")])]),r._v(" "),v("ul",[v("li",[r._v("TUNNEL必须在所有的realserver上绑定VIP")]),r._v(" "),v("li",[r._v("realserver直接把包发给client")]),r._v(" "),v("li",[r._v("隧道模式运维起来会比较难，所以一般不用")]),r._v(" "),v("li",[r._v("不支持端口映射")]),r._v(" "),v("li",[r._v("RIP、VIP、DIP全是公网地址")])]),r._v(" "),v("h3",{attrs:{id:"四种模式比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四种模式比较"}},[r._v("#")]),r._v(" 四种模式比较")]),r._v(" "),v("p",[v("img",{attrs:{src:"/static/imgs/lvs/vs.png",alt:""}})]),r._v(" "),v("ul",[v("li",[v("p",[r._v("是否需要VIP和realserver在同一网段\nDR模式因为只修改包的MAC地址，需要通过ARP广播找到realserver，所以VIP和realserver必须在同一个网段，也就是说DR模式需要先确认这个IP是否只能挂在这个LVS下面；其他模式因为都会修改目的地址为realserver的IP地址，所以不需要在同一个网段内")])]),r._v(" "),v("li",[v("p",[r._v("是否需要在realserver上绑定VIP\nrealserver在收到包之后会判断目的地址是否是自己的IP\nDR模式的目的地址没有修改，还是VIP，所以需要在realserver上绑定VIP\nIP TUN模式值是对包重新包装了一层，realserver解析后的包的IP仍然是VIP，所以也需要在realserver上绑定VIP")])]),r._v(" "),v("li",[v("p",[r._v("四种模式的性能比较\nDR模式、IP TUN模式都是在包进入的时候经过LVS，在包返回的时候直接返回给client；所以二者的性能比NAT高，但TUN模式更加复杂，所以性能不如DR 。FULLNAT模式不仅更换目的IP还更换了源IP，所以性能比NAT下降10% 。")])])]),r._v(" "),v("p",[v("strong",[r._v("性能比较大致：DR>TUN>NAT>FULLNAT")])]),r._v(" "),v("h2",{attrs:{id:"十种负载均衡算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十种负载均衡算法"}},[r._v("#")]),r._v(" 十种负载均衡算法")]),r._v(" "),v("h3",{attrs:{id:"静态方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态方法"}},[r._v("#")]),r._v(" 静态方法")]),r._v(" "),v("p",[r._v("仅根据算法本省进行调度：")]),r._v(" "),v("p",[v("strong",[r._v("轮叫调度 rr")])]),r._v(" "),v("p",[r._v("均等地对待每一台服务器，不管服务器上的实际连接数和系统负载")]),r._v(" "),v("p",[v("strong",[r._v("加权轮叫 wrr")])]),r._v(" "),v("p",[r._v("调度器可以自动问询真实服务器的负载情况，并动态调整权值")]),r._v(" "),v("p",[v("strong",[r._v("目标地址散列调度算法 dh")])]),r._v(" "),v("p",[r._v("该算法是根据目标 IP 地址通过散列函数将目标 IP 与服务器建立映射关系，出现服务器不可用或负载过高的情况下，发往该目标 IP 的请求会固定发给该服务器。")]),r._v(" "),v("p",[v("strong",[r._v("源地址散列调度算法 sh")])]),r._v(" "),v("p",[r._v("与目标地址散列调度算法类似，但它是根据源地址散列算法进行静态分配固定的服务器资源。")]),r._v(" "),v("h3",{attrs:{id:"动态方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动态方法"}},[r._v("#")]),r._v(" 动态方法")]),r._v(" "),v("p",[r._v("主要根据每RS当前的负载状态及调度算法进行调度，"),v("code",[r._v("Overhead=value")]),r._v(" 较小的RS将被调度。")]),r._v(" "),v("p",[v("strong",[r._v("最少链接 lc")])]),r._v(" "),v("p",[r._v("动态地将网络请求调度到已建立的连接数最少的服务器上\n如果集群真实的服务器具有相近的系统性能，采用该算法可以较好的实现负载均衡")]),r._v(" "),v("p",[v("strong",[r._v("加权最少链接 wlc")])]),r._v(" "),v("p",[r._v("调度器可以自动问询真实服务器的负载情况，并动态调整权值\n带权重的谁不干活就给谁分配，机器配置好的权重高")]),r._v(" "),v("p",[v("strong",[r._v("基于局部性的最少连接调度算法 lblc")])]),r._v(" "),v("p",[r._v("这个算法是请求数据包的目标 IP 地址的一种调度算法，该算法先根据请求的目标 IP 地址寻找最近的该目标 IP 地址所有使用的服务器，如果这台服务器依然可用，并且有能力处理该请求，调度器会尽量选择相同的服务器，否则会继续选择其它可行的服务器")]),r._v(" "),v("p",[v("strong",[r._v("复杂的基于局部性最少的连接算法 lblcr")])]),r._v(" "),v("p",[r._v("记录的不是要给目标 IP 与一台服务器之间的连接记录，它会维护一个目标 IP 到一组服务器之间的映射关系，防止单点服务器负载过高。")]),r._v(" "),v("p",[v("strong",[r._v("最少期望延迟 sed")])]),r._v(" "),v("p",[r._v("不考虑非活动链接，谁的权重大，优先选择权重大的服务器来接收请求，但权重大的机器会比较忙")]),r._v(" "),v("p",[v("strong",[r._v("永不排队 nq")])]),r._v(" "),v("p",[r._v("无需队列，如果有realserver的连接数为0就直接分配过去")]),r._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[r._v("#")]),r._v(" 参考")]),r._v(" "),v("ul",[v("li",[r._v("http://www.yulongjun.com/lb/20170817-01-lvs-introduction/")]),r._v(" "),v("li",[r._v("https://blog.csdn.net/lcl_xiaowugui/article/details/81701949")]),r._v(" "),v("li",[r._v("https://yq.aliyun.com/articles/87257")]),r._v(" "),v("li",[r._v("https://yq.aliyun.com/articles/53735")])])])}),[],!1,null,null,null);v.default=_.exports}}]);