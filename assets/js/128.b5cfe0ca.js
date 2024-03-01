(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{453:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v('kubeadm version\nkubeadm version: &version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.8", GitCommit:"4a3b558c52eb6995b3c5c1db5e54111bd0645a64", GitTreeState:"clean", BuildDate:"2021-12-15T14:50:58Z", GoVersion:"go1.16.12", Compiler:"gc", Platform:"linux/amd64"}')])]),s._v(" "),a("h2",{attrs:{id:"查看证书是否过期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看证书是否过期"}},[s._v("#")]),s._v(" 查看证书是否过期")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# openssl 查看")]),s._v("\nopenssl x509 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-in")]),s._v(" /etc/kubernetes/pki/apiserver.crt "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-noout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-text")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' Not '")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubeadm 查看")]),s._v("\nroot@k8s-master-147:~"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubeadm certs check-expiration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("check-expiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Reading configuration from the cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("check-expiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" FYI: You can "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("look")]),s._v(" at this config "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" with "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl -n kube-system get cm kubeadm-config -o yaml'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("check-expiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Error reading configuration from the Cluster. Falling back to default configuration\n\nCERTIFICATE                         EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED\nadmin.conf                          Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v(" 08:48 UTC   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       ca                      no\napiserver                           Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v(" 08:48 UTC   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       ca                      no\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MISSING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" apiserver-etcd-client\napiserver-kubelet-client            Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v(" 08:48 UTC   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       ca                      no\ncontroller-manager.conf             Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v(" 08:48 UTC   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       ca                      no\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MISSING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" etcd-healthcheck-client\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MISSING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" etcd-peer\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MISSING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" etcd-server\nfront-proxy-client                  Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v(" 08:48 UTC   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       front-proxy-ca          no\nscheduler.conf                      Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v(" 08:48 UTC   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       ca                      no\n\nCERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED\nca                      Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2032")]),s._v(" 08:48 UTC   8y              no\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MISSING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" etcd-ca\nfront-proxy-ca          Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2032")]),s._v(" 08:48 UTC   8y              no\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k3s 查看 替换可参考 k3s 官方： https://docs.k3s.io/zh/cli/certificate#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89-ca-%E8%AF%81%E4%B9%A6")]),s._v("\nkubectl get secret "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system k3s-serving "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{.data.tls\\.crt}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" base64 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" openssl x509 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-noout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-text")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Not\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[s._v("#")]),s._v(" 备份")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rp")]),s._v(" /etc/kubernetes /etc/kubernetes.bak\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除配置文件重新生成")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/kubernetes/*.conf /tmp/\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"重新生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新生成"}},[s._v("#")]),s._v(" 重新生成")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新生成证书和配置文件")]),s._v("\nkubeadm certs renew all\nkubeadm init phase kubeconfig all\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"重启master-kubelet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启master-kubelet"}},[s._v("#")]),s._v(" 重启master kubelet")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl restart kubelet\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/kubernetes/admin.conf ~/.kube/config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"官方文档参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方文档参考"}},[s._v("#")]),s._v(" 官方文档参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/zh-cn/docs/setup/best-practices/certificates/",target:"_blank",rel:"noopener noreferrer"}},[s._v("K8S所需要的PKI证书和要求"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/#kubeconfig-additional-users",target:"_blank",rel:"noopener noreferrer"}},[s._v("kubeadm管理证书"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);