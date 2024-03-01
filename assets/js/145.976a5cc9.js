(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{470:function(e,t,r){"use strict";r.r(t);var o=r(4),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"容器化监控方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器化监控方案"}},[e._v("#")]),e._v(" 容器化监控方案")]),e._v(" "),t("h2",{attrs:{id:"方案调研"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案调研"}},[e._v("#")]),e._v(" 方案调研")]),e._v(" "),t("p",[e._v("目前容器化监控的几种方案：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/kubernetes-retired/heapster",target:"_blank",rel:"noopener noreferrer"}},[e._v("Heapster"),t("OutboundLink")],1),e._v(" + ElasticSearch + Kibana")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/kubernetes-retired/heapster",target:"_blank",rel:"noopener noreferrer"}},[e._v("Heapster"),t("OutboundLink")],1),e._v(" + influxdb + grafana")])]),e._v(" "),t("p",[e._v("Heapster 通过 cAdvisor 组件收集 Node 和 容器的监控数据；")]),e._v(" "),t("p",[e._v("kubernetes 1.13 彻底移除对 Heapster 的使用，Heapster 仓库也归档，不再更新维护。")]),e._v(" "),t("ul",[t("li",[e._v("基于 Prometheus 生态的监控方案;")])]),e._v(" "),t("p",[e._v("Prometheus 在2016加入 CNCF ( Cloud Native Computing Foundation )。目前，业界容器化监控 Prometheus 已成为标准、首选。")]),e._v(" "),t("p",[e._v("基于 Prometheus，主要有以下两套方案：")]),e._v(" "),t("ul",[t("li",[e._v("在集群中手动部署 Prometheus 的各种组件 ;\n"),t("ul",[t("li",[e._v("采集项：\n"),t("ul",[t("li",[e._v("node-exporter 采集node监控")]),e._v(" "),t("li",[e._v("cAdvisor 容器级别的监控指标")]),e._v(" "),t("li",[e._v("kube-state-metrics 采集pod相关监控指标")])])]),e._v(" "),t("li",[e._v("存储：\n"),t("ul",[t("li",[e._v("临时 prometheus")]),e._v(" "),t("li",[e._v("持久化 influxdb /VictorMetric")])])]),e._v(" "),t("li",[e._v("报警：\n"),t("ul",[t("li",[e._v("alermanager")]),e._v(" "),t("li",[e._v("n9e")])])])])])]),e._v(" "),t("p",[e._v("手动部署可参考文档：https://docs.prometheus.cool/Kubernetes/Prometheus-Statefulsets-1/")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/prometheus-operator/kube-prometheus",target:"_blank",rel:"noopener noreferrer"}},[e._v("kube-prometheus"),t("OutboundLink")],1),e._v("，基于CoreOS 之前发布的 Prometheus Operator 来实现部署维护；")])]),e._v(" "),t("p",[e._v("该存储库收集了 Kubernetes 清单、Grafana仪表板和Prometheus 规则以及文档和脚本，以使用 Prometheus Operator提供易于操作的端到端 Kubernetes 集群监控与Prometheus。")]),e._v(" "),t("p",[e._v("部署可参考文档：http://gitlab.bokecc.com/opgroup/dev/cc_dev_docs/blob/master/dev/container/k8s_operator.md")]),e._v(" "),t("p",[e._v("k8s 官方 Operator 文档：https://kubernetes.io/zh/docs/concepts/extend-kubernetes/operator/")]),e._v(" "),t("p",[e._v("Operator Hub 文档：https://operatorhub.io/")]),e._v(" "),t("p",[e._v("Prometheus Operator 文档：https://prometheus-operator.dev/")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Operator好处")]),e._v("\n因为是prometheus主动去拉取的，所以在k8s里pod因为调度的原因导致pod的ip会发生变化，人工不可能去维持，自动发现有基于DNS的，但是新增还是有点麻烦。")])]),e._v(" "),t("blockquote",[t("p",[e._v("Prometheus-operator的本职就是一组用户自定义的CRD资源以及Controller的实现，Prometheus Operator这个controller有BRAC权限下去负责监听这些自定义资源的变化，并且根据这些资源的定义自动化的完成如Prometheus Server自身以及配置的自动化管理工作。")])]),e._v(" "),t("blockquote",[t("p",[e._v("在Kubernetes中我们使用Deployment、DamenSet、StatefulSet来管理应用Workload，使用Service、Ingress来管理应用的访问方式，使用ConfigMap和Secret来管理应用配置。我们在集群中对这些资源的创建，更新，删除的动作都会被转换为事件(Event)，Kubernetes的Controller Manager负责监听这些事件并触发相应的任务来满足用户的期望。这种方式我们成为声明式，用户只需要关心应用程序的最终状态，其它的都通过Kubernetes来帮助我们完成，通过这种方式可以大大简化应用的配置管理复杂度。")])]),e._v(" "),t("blockquote",[t("p",[e._v("而除了这些原生的Resource资源以外，Kubernetes还允许用户添加自己的自定义资源(Custom Resource)。并且通过实现自定义Controller来实现对Kubernetes的扩展，不需要用户去二开k8s也能达到给k8s添加功能和对象。")])]),e._v(" "),t("blockquote",[t("p",[e._v("因为svc的负载均衡，所以在K8S里监控metrics基本最小单位都是一个svc背后的pod为target，所以prometheus-operator创建了对应的CRD: kind: ServiceMonitor ，创建的ServiceMonitor里声明需要监控选中的svc的label以及metrics的url路径的和namespaces即可")])]),e._v(" "),t("h2",{attrs:{id:"prometheus-方案详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-方案详解"}},[e._v("#")]),e._v(" Prometheus 方案详解")]),e._v(" "),t("h3",{attrs:{id:"数据采集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据采集"}},[e._v("#")]),e._v(" 数据采集")]),e._v(" "),t("p",[e._v("日常监控：")]),e._v(" "),t("ul",[t("li",[e._v("基础设置，cpu/mem/disk/net")]),e._v(" "),t("li",[e._v("业务信息，port/process/trace/link")]),e._v(" "),t("li",[e._v("自定义，特有指标")])]),e._v(" "),t("p",[e._v("容器需要采集或监控的数据指标：")]),e._v(" "),t("ul",[t("li",[e._v("基础设施，服务器节点（node节点）")]),e._v(" "),t("li",[e._v("k8s 基础组件健康情况")]),e._v(" "),t("li",[e._v("k8s 整体资源的饱和度")]),e._v(" "),t("li",[e._v("自定义")])]),e._v(" "),t("p",[e._v("采集方案如下：")]),e._v(" "),t("ul",[t("li",[e._v("基础设置\n"),t("ul",[t("li",[e._v("node 主机信息 ---\x3e node-exporter")]),e._v(" "),t("li",[e._v("各组件监控及资源使用情况、容器性能（如容器的CPU、内存、文件和网络的使用情况），cAdvisor ---\x3e state-metrics")])])]),e._v(" "),t("li",[e._v("业务信息：\n"),t("ul",[t("li",[e._v("容器健康状态，Probes ---\x3e state-metrics")]),e._v(" "),t("li",[e._v("健康探测（link/trace）---\x3e 外部探测（自建、阿里云）")])])]),e._v(" "),t("li",[e._v("自定义，---\x3e 自己暴露 metrics 接口")])]),e._v(" "),t("h3",{attrs:{id:"数据存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据存储"}},[e._v("#")]),e._v(" 数据存储")]),e._v(" "),t("p",[e._v("Prometheus 作为收据收集和临时存储使用，因为单点不具备扩容能力，不适合做持久化存储。")]),e._v(" "),t("p",[e._v("持久化存储，目前业界有两种比较成熟的开源方案：")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://thanos.io/v0.24/thanos/getting-started.md/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thanos"),t("OutboundLink")],1),e._v(" "),t("img",{attrs:{src:"/imgs/thanos-arch.png",alt:""}})])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://cortexmetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cortex"),t("OutboundLink")],1),e._v(" "),t("img",{attrs:{src:"/imgs/cortex-arch.png",alt:""}})])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://docs.victoriametrics.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VictoriaMetric"),t("OutboundLink")],1),e._v("  （只支持写，不支持读"),t("a",{attrs:{href:"https://prometheus.io/docs/operating/integrations/#remote-endpoints-and-storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),t("OutboundLink")],1),e._v("）")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"/imgs/vm-cluster-arch.png",alt:""}})]),e._v(" "),t("p",[e._v("Thanos vs VictoriaMetric 两种方案对比，可参考文档：\nhttps://blog.csdn.net/alex_yangchuansheng/article/details/108271368")]),e._v(" "),t("p",[e._v("https://github.com/VictoriaMetrics/VictoriaMetrics/wiki/FAQ#what-is-the-difference-between-victoriametrics-and-thanos")]),e._v(" "),t("p",[e._v("Cortex vs VictoriaMetric: https://github.com/VictoriaMetrics/VictoriaMetrics/wiki/FAQ#what-is-the-difference-between-victoriametrics-and-cortex")]),e._v(" "),t("p",[e._v("总结如下：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("架构上：vm 组件少，架构简单，不依赖第三方组件。Thanos 最少可部署三个基础组件Sidecar、Store[6] Gateway、Query，需要外部对象存储。Cortex 基础组件：Nginx/gateway、Distributor、Ingester、Query，依赖第三方组件如Consul、Memcache等。")])]),e._v(" "),t("li",[t("p",[e._v("数据高可用上：vm 通过 Prometheus RemoteApi 实时推送数据，只可能会丢失几秒钟的数据，Prometheus v2.8.0+ 会从WAL中同步数据，理论上不会丢失数据。\n"),t("a",{attrs:{href:"https://docs.victoriametrics.com/Cluster-VictoriaMetrics.html#replication-and-data-safety",target:"_blank",rel:"noopener noreferrer"}},[e._v("vm"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://github.com/cortexproject/cortex/blob/fe56f1420099aa1bf1ce09316c186e05bddee879/docs/architecture.md#hashing",target:"_blank",rel:"noopener noreferrer"}},[e._v("cortex"),t("OutboundLink")],1),e._v(" 都支持副本，保证集群节点有问题时，数据的可用性。Thanos 数据存储在对象存储，依赖对象存储的高可用性。")])]),e._v(" "),t("li",[t("p",[e._v("功能兼容性丰富度：都兼容Prometheus PromQL / 多租户等。除了 Prometheus remote_write 协议之外，还接受多种流行数据摄取协议中的数据 - InfluxDB、OpenTSDB、Graphite、CSV、JSON、本机二进制文件。")])]),e._v(" "),t("li",[t("p",[e._v("性能：vm 查询走本地磁盘相对高效，vmselect 聚合多节点副本，实现去重。Cortex 经过其他大厂生产验证， VM 查询性能 > Cortex 参考"),t("a",{attrs:{href:"https://docs.victoriametrics.com/CaseStudies.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("。Thanos 查询短时间的数据时，性能高，因为数据在Prometheus实例上，查询长时间的数据时，因为数据块在对象存储，受网络环境影响比较大。")])])]),e._v(" "),t("h3",{attrs:{id:"报警"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报警"}},[e._v("#")]),e._v(" 报警")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("alertmanager")])]),e._v(" "),t("li",[t("p",[e._v("n9e")])])]),e._v(" "),t("h3",{attrs:{id:"与现有监控结合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与现有监控结合"}},[e._v("#")]),e._v(" 与现有监控结合")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("n9e")])]),e._v(" "),t("li",[t("p",[e._v("grafana")]),e._v(" "),t("ul",[t("li",[e._v("admin账号密码配置: https://www.ancii.com/at6lje4j8/")]),e._v(" "),t("li",[e._v("直接 修改 helm 配置values 文件")])])])]),e._v(" "),t("h3",{attrs:{id:"部署高可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署高可用"}},[e._v("#")]),e._v(" 部署高可用")]),e._v(" "),t("p",[e._v("多 Prometheus 副本，接后端 VictoriaMetric 聚合去重查询。")]),e._v(" "),t("h2",{attrs:{id:"扩展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[e._v("#")]),e._v(" 扩展阅读")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("https://prometheus-operator.dev/docs/prologue/introduction/")])]),e._v(" "),t("li",[t("p",[e._v("https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/")])]),e._v(" "),t("li",[t("p",[e._v("https://www.kubernetes.org.cn/2432.html")])]),e._v(" "),t("li",[t("p",[e._v("https://docs.prometheus.cool/")])]),e._v(" "),t("li",[t("p",[e._v("https://blog.csdn.net/weixin_33720452/article/details/91875529")])]),e._v(" "),t("li",[t("p",[e._v("thanos: http://www.xuyasong.com/?p=1925")])]),e._v(" "),t("li",[t("p",[e._v("victoria:")]),e._v(" "),t("ul",[t("li",[e._v("https://blog.csdn.net/weixin_26711867/article/details/108971299")]),e._v(" "),t("li",[e._v("https://medium.com/miro-engineering/prometheus-high-availability-and-fault-tolerance-strategy-long-term-storage-with-victoriametrics-82f6f3f0409e")])])]),e._v(" "),t("li",[t("p",[e._v("thanos vs victoria : https://blog.csdn.net/alex_yangchuansheng/article/details/108271368")])]),e._v(" "),t("li",[t("p",[e._v("victoriaMetric 存储机制：https://zhuanlan.zhihu.com/p/368912946")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);