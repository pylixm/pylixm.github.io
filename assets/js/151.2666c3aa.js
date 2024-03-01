(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{474:function(t,e,r){"use strict";r.r(e);var v=r(4),i=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("VictoriaMetrics 架构简单，可靠性高，在性能，成本，可扩展性方面表现出色，社区活跃，且和 Prometheus 生态绑定紧密。如果单机版本的 Prometheus 无法在容量上满足贵司的需求，可以使用 VictoriaMetrics 作为时序数据库。")]),t._v(" "),e("p",[t._v("VictoriaMetrics 提供单机版和集群版。如果您的每秒写入数据点数小于100万（这个数量是个什么概念呢，如果只是做机器设备的监控，每个机器差不多采集200个指标，采集频率是10秒的话每台机器每秒采集20个指标左右，100万/20=5万台机器），VictoriaMetrics 官方默认推荐您使用单机版，单机版可以通过增加服务器的CPU核心数，增加内存，增加IOPS来获得线性的性能提升。且单机版易于配置和运维。")]),t._v(" "),e("p",[t._v("对比其他一些主流的监控方案、时序数据库，VictoriaMetrics具有如下优势：")]),t._v(" "),e("ul",[e("li",[t._v("远程存储：可作为单一或多个Prometheus的远程存储")]),t._v(" "),e("li",[t._v("安装简单：单节点架构一条命令就可以部署完毕（集群方式稍微复杂一些，但也很好理解）")]),t._v(" "),e("li",[t._v("兼容性：PromQL兼容和增强的MetricsQL")]),t._v(" "),e("li",[t._v("Grafana兼容：VM可替换Grafana的Prometheus数据源（经测试，线上数据源直接替换后100%兼容）")]),t._v(" "),e("li",[t._v("低内存：更低的内存占用，官方对比Prometheus，可以释放7倍左右内存空间（线上对比大概4倍）")]),t._v(" "),e("li",[t._v("高压缩比：提供存储数据高压缩，官方说可以比Prometheus减少7倍的存储空间（线上对比大概是4~5倍）")]),t._v(" "),e("li",[t._v("高性能：查询性能比Prometheus更快")]),t._v(" "),e("li",[t._v("支持水平扩容&HA：基于VM集群版实现")]),t._v(" "),e("li",[t._v("支持多租户：主要针对集群版")])]),t._v(" "),e("h2",{attrs:{id:"架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),e("p",[t._v("VictoriaMetrics分为"),e("strong",[t._v("单节点")]),t._v("和"),e("strong",[t._v("集群")]),t._v("两个方案。两种方案都提供了二进制文件、docker、helm以及operator等部署方式。")]),t._v(" "),e("p",[e("strong",[t._v("单机架构")])]),t._v(" "),e("p",[t._v("对于数据采集点对于小于100w/s的场景，官方推荐使用单节点版，单节点版相当于一个all-in-one的二进制包，包含了大部分的功能，但不支持告警，租户。")]),t._v(" "),e("p",[e("strong",[t._v("多集群架构")])]),t._v(" "),e("p",[t._v("多集群的架构图如图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/imgs/vm-arch.png",alt:""}})]),t._v(" "),e("p",[t._v("VictorMetrics集群部分主要包含了以下几个组件：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("vmstorage")]),t._v("：它是一个有状态的组件，主要负责存储原始数据并返回指定标签过滤器在给定时间范围内的查询数据，集群部署的必选组件，默认端口为8482。")]),t._v(" "),e("li",[e("code",[t._v("vminsert")]),t._v("：无状态的服务组件，主要负责接收摄取的数据并根据指标名称和标签的哈希值分散从存储到部署了vmstorage的节点中去，集群部署的必选组件，默认端口为8480。")]),t._v(" "),e("li",[e("code",[t._v("vmselect")]),t._v("：无状态的额服务组件，面向外部终端的查询组件，根据收到的请求去各个vmstorage节点中获取数据，集群部署的必选组件，默认端口为8481。")]),t._v(" "),e("li",[e("code",[t._v("vmagent")]),t._v("：主要负责数据指标的抓取，并将它们存储在VictoriaMetrics或其他支持remote write协议的Prometheus兼容的存储系统中，会占用本地磁盘缓存。它是一个可选组件，位于图1的Writers那层Load balancer与各个采集源之间，类似于Prometheus中pushgateway的地位。是一个可选组件，默认占用端口8429。其组件作用如图2所示：")]),t._v(" "),e("li",[e("code",[t._v("vmalert")]),t._v("：报警相关组件，不如果不需要告警功能可以不使用该组件，默认端口为 8880")])]),t._v(" "),e("p",[e("code",[t._v("vmagent")]),t._v(" 的主要目的是用来收集指标数据然后存储到 VM 以及 Prometheus 兼容的存储系统中（支持 remote_write 协议即可）。")]),t._v(" "),e("p",[t._v("下图是 vmagent 的一个简单架构图，可以看出该组件也实现了 metrics 的 push 功能，此外还有很多其他特性：")]),t._v(" "),e("ul",[e("li",[t._v("替换 prometheus 的 scraping target")]),t._v(" "),e("li",[t._v("支持基于 prometheus relabeling 的模式添加、移除、修改 labels，可以方便在数据发送到远端存储之前进行数据的过滤")]),t._v(" "),e("li",[t._v("支持多种数据协议，influx line 协议，graphite 文本协议，opentsdb 协议，prometheus remote write 协议，json lines 协议，csv 数据")]),t._v(" "),e("li",[t._v("支持收集数据的同时，并复制到多种远端存储系统")]),t._v(" "),e("li",[t._v("支持不可靠远端存储（通过本地存储 -remoteWrite.tmpDataPath )，同时支持最大磁盘占用")]),t._v(" "),e("li",[t._v("相比 prometheus 使用较少的内存、cpu、磁盘 io 以及网络带宽")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/imgs/vm-agent-arch.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),e("ul",[e("li",[t._v("https://docs.victoriametrics.com/")]),t._v(" "),e("li",[t._v("https://docs.victoriametrics.com/Quick-Start.html")]),t._v(" "),e("li",[t._v("https://docs.victoriametrics.com/Cluster-VictoriaMetrics.html#url-format")])])])}),[],!1,null,null,null);e.default=i.exports}}]);