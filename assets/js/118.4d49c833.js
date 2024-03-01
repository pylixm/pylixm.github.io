(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{443:function(s,n,t){"use strict";t.r(n);var a=t(4),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("使用mongodb 有段时间了，由于是在内网使用，便没有设置权限，一直是裸奔。")]),s._v(" "),n("p",[s._v("最近有时间，研究了下mongodb 3.2 的用户权限配置，网上有许多用户权限配置的文章，不过大多是之前版本，有些出入，特记录备查。\n")]),s._v(" "),n("h2",{attrs:{id:"环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),n("p",[s._v("MongoDB shell version: 3.2.6")]),s._v(" "),n("p",[s._v("CentOS release 6.8 (Final)")]),s._v(" "),n("h2",{attrs:{id:"设置方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置方法"}},[s._v("#")]),s._v(" 设置方法")]),s._v(" "),n("h3",{attrs:{id:"用户权限设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用户权限设置"}},[s._v("#")]),s._v(" 用户权限设置")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("1、进入mongodb的shell ： "),n("code",[s._v("mongo")])])]),s._v(" "),n("li",[n("p",[s._v("2、切换数据库： "),n("code",[s._v("use admin")])])])]),s._v(" "),n("p",[s._v("从3.0 版本起，默认只有 "),n("code",[s._v("local")]),s._v(" 库，没有"),n("code",[s._v("admin")]),s._v(" 库，需要我们自己来创建。")]),s._v(" "),n("ul",[n("li",[s._v("3、添加用户，指定用户的角色和数据库：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("db.createUser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("  \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" user: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(",  \n    customData："),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("description:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"superuser"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    pwd: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(",  \n    roles: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" role: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),s._v(", db: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n\nuser字段，为新用户的名字；\n\npwd字段，用户的密码；\n\ncusomData字段，为任意内容，例如可以为用户全名介绍；\n\nroles字段，指定用户的角色，可以用一个空数组给新用户设定空角色。在roles字段,可以指定内置角色和用户定义的角色。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("4、查看创建的用户 ： "),n("code",[s._v("show users")]),s._v(" 或 "),n("code",[s._v("db.system.users.find()")])])]),s._v(" "),n("li",[n("p",[s._v("5、启用用户权限：")])])]),s._v(" "),n("p",[s._v("修改配置文件，增加配置：")]),s._v(" "),n("div",{staticClass:"language-mongo line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("security:\n  authorization: enabled\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("重新启动mongodb， "),n("code",[s._v("/etc/init.d/mongod restart")])]),s._v(" "),n("ul",[n("li",[s._v("6、用户验证使用：")])]),s._v(" "),n("p",[s._v("启用用户验证后，再次登录mongo shell ，执行 "),n("code",[s._v("show dbs")]),s._v(" 等命令会提示“没有权限”。此时，需要用户验证登录。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("db.auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),n("h4",{attrs:{id:"内建的角色"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内建的角色"}},[s._v("#")]),s._v(" 内建的角色")]),s._v(" "),n("ol",[n("li",[s._v("数据库用户角色：read、readWrite;")]),s._v(" "),n("li",[s._v("数据库管理角色：dbAdmin、dbOwner、userAdmin；")]),s._v(" "),n("li",[s._v("集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；")]),s._v(" "),n("li",[s._v("备份恢复角色：backup、restore；")]),s._v(" "),n("li",[s._v("所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase")]),s._v(" "),n("li",[s._v("超级用户角色：root"),n("br"),s._v("\n// 这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）")]),s._v(" "),n("li",[s._v("内部角色：__system")])]),s._v(" "),n("p",[s._v("官方详情角色说明 --\x3e "),n("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/built-in-roles/#built-in-roles",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),n("OutboundLink")],1)]),s._v(" "),n("h4",{attrs:{id:"配置文件示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件示例"}},[s._v("#")]),s._v(" 配置文件示例")]),s._v(" "),n("p",[s._v("官方详解 --\x3e "),n("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/configuration-options/",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处为配置文件可配置的内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Mongod config file ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#MongoDB configuration files use the YAML format.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#The following example configuration file contains several mongod settings.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########Example Start########")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#systemLog:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   destination: file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   path: "/var/log/mongodb/mongodb.log"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   logAppend: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#storage:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   journal:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      enabled: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#processManagement:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   fork: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#net:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   bindIp: 127.0.0.1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   port: 27017")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#setParameter:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   enableLocalhostAuthBypass: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########Example End########")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########Core Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("systemLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   verbosity: 0    #Default: 0; 1 to 5 increases the verbosity level to include Debug messages.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   quiet: <boolean>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   traceAllException: <boolean>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   syslogFacility: user")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/mongodb/log/mongod.log"')]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logAppend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   logRotate: <string>    #rename or reopen")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("destination")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" file\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   timeStampFormat: iso8601-local")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   component:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      accessControl:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         verbosity: 0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      command:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         verbosity: 0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      # COMMENT additional component verbosity settings omitted for brevity")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      storage:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         verbosity: 0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         journal:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#            verbosity: <int>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      write:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         verbosity: 0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########ProcessManagement Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("processManagement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pidFilePath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/mongodb/log/mongod.pid"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########Net Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("net")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   bindIp: <string>    #Default All interfaces.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   maxIncomingConnections: 65536")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   wireObjectCheck: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   ipv6: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   unixDomainSocket:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      enabled: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#      pathPrefix: "/tmp"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      filePermissions: 0700")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   http:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      enabled: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      JSONPEnabled: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      RESTInterfaceEnabled: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   ssl:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      sslOnNormalPorts: <boolean>  # deprecated since 2.6")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      mode: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      PEMKeyFile: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      PEMKeyPassword: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      clusterFile: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      clusterPassword: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      CAFile: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      CRLFile: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      allowConnectionsWithoutCertificates: <boolean>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      allowInvalidCertificates: <boolean>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      allowInvalidHostnames: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      FIPSMode: <boolean>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########security Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#security:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   keyFile: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   clusterAuthMode: keyFile")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   authorization: disable")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   javascriptEnabled:  true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########security.sasl Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   sasl:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      hostName: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      serviceName: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      saslauthdSocketPath: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########setParameter Option")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("setParameter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enableLocalhostAuthBypass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   <parameter1>: <value1>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   <parameter2>: <value2>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########storage Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dbPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/db"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   indexBuildRetry: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   repairPath: "/data/db/_tmp"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   journal:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      enabled: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   directoryPerDB: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   syncPeriodSecs: 60")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("engine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mmapv1"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Valid options include mmapv1 and wiredTiger.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########storage.mmapv1 Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   mmapv1:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      preallocDataFiles: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      nsSize: 16")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      quota:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         enforced: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         maxFilesPerDB: 8")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      smallFiles: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      journal:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         debugFlags: <int>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         commitIntervalMs: 100   # 100 or 30")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########storage.wiredTiger Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   wiredTiger:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      engineConfig:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         cacheSizeGB: <number>  #Default: the maximum of half of physical RAM or 1 gigabyte")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         statisticsLogDelaySecs: 0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#         journalCompressor: "snappy"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         directoryForIndexes: false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      collectionConfig:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#         blockCompressor: "snappy"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      indexConfig:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         prefixCompression: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##########operationProfiling Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#operationProfiling:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   slowOpThresholdMs: 100")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   mode: "off"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##########replication Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#replication:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   oplogSizeMB: <int>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   replSetName: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   secondaryIndexPrefetch: all")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##########sharding Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sharding:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   clusterRole: <string>    #configsvr or shardsvr")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   archiveMovedChunks: True")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########auditLog Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#auditLog:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   destination: <string>   #syslog/console/file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   format: <string>   #JSON/BSON")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   path: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   filter: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#########snmp Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#snmp:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   subagent: <boolean>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   master: <boolean>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########mongos-only Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#replication:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   localPingThresholdMs: 15")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sharding:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   autoSplit: true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   configDB: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   chunkSize: 64")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########Windows Service Options")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#processManagement:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   windowsService:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      serviceName: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      displayName: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      description: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      serviceUser: <string>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      servicePassword: <string>")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br"),n("span",{staticClass:"line-number"},[s._v("165")]),n("br"),n("span",{staticClass:"line-number"},[s._v("166")]),n("br"),n("span",{staticClass:"line-number"},[s._v("167")]),n("br"),n("span",{staticClass:"line-number"},[s._v("168")]),n("br"),n("span",{staticClass:"line-number"},[s._v("169")]),n("br"),n("span",{staticClass:"line-number"},[s._v("170")]),n("br"),n("span",{staticClass:"line-number"},[s._v("171")]),n("br"),n("span",{staticClass:"line-number"},[s._v("172")]),n("br"),n("span",{staticClass:"line-number"},[s._v("173")]),n("br"),n("span",{staticClass:"line-number"},[s._v("174")]),n("br"),n("span",{staticClass:"line-number"},[s._v("175")]),n("br"),n("span",{staticClass:"line-number"},[s._v("176")]),n("br"),n("span",{staticClass:"line-number"},[s._v("177")]),n("br"),n("span",{staticClass:"line-number"},[s._v("178")]),n("br"),n("span",{staticClass:"line-number"},[s._v("179")]),n("br"),n("span",{staticClass:"line-number"},[s._v("180")]),n("br"),n("span",{staticClass:"line-number"},[s._v("181")]),n("br"),n("span",{staticClass:"line-number"},[s._v("182")]),n("br"),n("span",{staticClass:"line-number"},[s._v("183")]),n("br"),n("span",{staticClass:"line-number"},[s._v("184")]),n("br"),n("span",{staticClass:"line-number"},[s._v("185")]),n("br"),n("span",{staticClass:"line-number"},[s._v("186")]),n("br"),n("span",{staticClass:"line-number"},[s._v("187")]),n("br"),n("span",{staticClass:"line-number"},[s._v("188")]),n("br"),n("span",{staticClass:"line-number"},[s._v("189")]),n("br")])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考：")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://bbs.51cto.com/thread-1164186-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://bbs.51cto.com/thread-1164186-1-1.html"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"http://bbs.51cto.com/thread-1146654-1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://bbs.51cto.com/thread-1146654-1.html"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"http://blog.csdn.net/lk10207160511/article/details/50281883",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://blog.csdn.net/lk10207160511/article/details/50281883"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=e.exports}}]);