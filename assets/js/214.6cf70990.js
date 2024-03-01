(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{538:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("最近工作中与数据库打交道越来越多，操作数据频繁，感觉到了许多mysql操作的不便利性。想起了几年前使用的 "),t("code",[s._v("postgreSQL")]),s._v(", 重新整理安装下，记录备查。")]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("mysql")]),s._v("和 "),t("code",[s._v("postgreSQL")]),s._v(" 的对比可见知乎的这个问题"),t("a",{attrs:{href:"https://www.zhihu.com/question/20010554",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostgreSQL 与 MySQL 相比，优势何在？"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("看了下postgreSQL的发行版本，除了核心版本外还有针对大数据分析和虚拟化技术的分支版本，发展紧跟时代步伐，详见官方"),t("a",{attrs:{href:"https://www.postgresql.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("。对于postgreSQL的安装官方提供了许多方法，支持yum 安装、rpm安装、源码编译安装等方式。我这里采用yum 源安装，其他方式可参考"),t("a",{attrs:{href:"https://www.postgresql.org/download/linux/redhat/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。安装步骤如下：\n")]),s._v(" "),t("h2",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),t("p",[s._v("检查系统是否安装了postgresSQL。若安装了需要卸载，清理干净，防止造成安装时不必要的问题。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否安装 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" postgres    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查PostgreSQL 是否已经安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qal")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" postgres   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查PostgreSQL 安装位置")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" postgresql94-contrib-9.4.4-1PGDG.rhel6.x86_64 postgresql94-server-9.4.4-1PGDG.rhel6.x86_64  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" postgresql94-libs-9.4.4-1PGDG.rhel6.x86_64 postgresql94-9.4.4-1PGDG.rhel6.x86_64 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"安装yum-源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装yum-源"}},[s._v("#")]),s._v(" 安装yum 源")]),s._v(" "),t("p",[s._v("在官方文档选择自己系统对应的参数，获取到yum源的正确连接，执行安装。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://download.postgresql.org/pub/repos/yum/10/redhat/rhel-7-x86_64/pgdg-centos10-10-1.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"安装客户端和服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装客户端和服务端"}},[s._v("#")]),s._v(" 安装客户端和服务端")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql10\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql10-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"初始化数据库-启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化数据库-启动服务"}},[s._v("#")]),s._v(" 初始化数据库，启动服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("/usr/pgsql-10/bin/postgresql-10-setup initdb\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" postgresql-10\nsystemctl start postgresql-10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("说明：")])]),s._v(" "),t("ul",[t("li",[s._v("1、数据库默认路径："),t("code",[s._v("/var/lib/pgsql/10/data")]),s._v(" ;")]),s._v(" "),t("li",[s._v("2、修改默认初始化路径，使用"),t("code",[s._v("postgreSQL")]),s._v("自带的初始化命令"),t("code",[s._v("initdb")]),s._v("，如下操作：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#mkdir /opt/PostgreSQL\n#mkdir /opt/PostgreSQL/data\n#chmod 755 /opt/PostgreSQL/data\n#chown postgres:postgres /opt/PostgreSQL/data\n#su - postgres\n#./initdb --encoding=UTF-8  --local=zh_CN.UTF8 --username=postgres --pwprompt --pgdata=/opt/PostgreSQL/data/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"连接数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库"}},[s._v("#")]),s._v(" 连接数据库")]),s._v(" "),t("p",[s._v("postgresql10 在Linux的安装，默认创建了"),t("code",[s._v("postgres")]),s._v("用户，无需再次创建，直接su 即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@pylixm-web ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su - postgres")]),s._v("\nbash-4.2$ psql\npsql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nType "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"help"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" help.\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \\l")]),s._v("\n                                  List of databases\n   Name    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  Owner   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Encoding "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   Collate   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    Ctype    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   Access privileges\n-----------+----------+----------+-------------+-------------+-----------------------\n postgres  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" postgres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" UTF8     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n template0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" postgres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" UTF8     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c/postgres          +\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CTc/postgres\n template1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" postgres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" UTF8     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" en_US.UTF-8 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c/postgres          +\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CTc/postgres\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \\du")]),s._v("\n                                   List of roles\n Role name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         Attributes                         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Member of\n-----------+------------------------------------------------------------+-----------\n postgres  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Superuser, Create role, Create DB, Replication, Bypass RLS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h2",{attrs:{id:"数据库登录权限设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库登录权限设置"}},[s._v("#")]),s._v(" 数据库登录权限设置")]),s._v(" "),t("p",[t("code",[s._v("/var/lib/pgsql/10/data/pg_hba.conf")]),s._v(" 权限相关配置:")]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# TYPE  DATABASE        USER            ADDRESS                 METHOD\n\n# "local" is for Unix domain socket connections only \nlocal   all             all                                     peer 或 trust\n# IPv4 local connections:\n#host    all             all             127.0.0.1/32            ident\nhost    all             all             0.0.0.0/0               password\n# IPv6 local connections:\n#host    all             all             ::1/128                 ident\nhost    all             all             ::1/128                 password\n# Allow replication connections from localhost, by a user with the\n# replication privilege.\n#local   replication     all                                     peer\n#host    replication     all             127.0.0.1/32            ident\n#host    replication     all             ::1/128                 ident\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("strong",[s._v("说明：")]),s._v(" 设置 trust，本地可以使用psql -U postgres直接登录服务器；设置 peer，本地可以使用psql -h 127.0.0.1 -d postgres -U postgres直接登录服务器; password ，使用用户名密码 登录 ；")]),s._v(" "),t("p",[t("code",[s._v("/var/lib/pgsql/10/data/postgresql.conf")]),s._v(" 数据库相关配置:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("listen_addresses = '*'\nposrt = 5432 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("说明：")]),s._v(" 监听任意IP, 允许任意ip连接数据库。")]),s._v(" "),t("p",[s._v("更多权限说明，见"),t("a",{attrs:{href:"https://www.postgresql.org/docs/10/static/auth-methods.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"防火墙设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防火墙设置"}},[s._v("#")]),s._v(" 防火墙设置")]),s._v(" "),t("p",[s._v("此时，数据库可以在本地访问，要想在外部访问，还需要增加防火墙策略或直接关闭防火墙（不建议）。")]),s._v(" "),t("p",[s._v("centos 7 默认防火墙为 "),t("a",{attrs:{href:"http://blog.csdn.net/gg_18826075157/article/details/72834694",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("firewalld")]),t("OutboundLink")],1),s._v(", 我们改用熟悉的"),t("code",[s._v("iptables")]),s._v("操作如下：\n1、关闭firewall：\nsystemctl stop firewalld.service #停止firewall\nsystemctl disable firewalld.service #禁止firewall开机启动\nfirewall-cmd --state #查看默认防火墙状态（关闭后显示notrunning，开启后显示running）")]),s._v(" "),t("p",[s._v("2、iptables防火墙")]),s._v(" "),t("p",[t("code",[s._v("yum install iptables iptables-services")]),s._v("  ## 安装")]),s._v(" "),t("p",[t("code",[s._v("vim /etc/sysconfig/iptables")]),s._v("#编辑防火墙配置文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# sampleconfiguration for iptables service\n# you can edit thismanually or use system-config-firewall\n# please do not askus to add additional ports/services to this default configuration\n*filter\n:INPUT ACCEPT [0:0]\n:FORWARD ACCEPT[0:0]\n:OUTPUT ACCEPT[0:0]\n-A INPUT -m state--state RELATED,ESTABLISHED -j ACCEPT\n-A INPUT -p icmp -jACCEPT\n-A INPUT -i lo -jACCEPT\n-A INPUT -p tcp -mstate --state NEW -m tcp --dport 22 -j ACCEPT\n-A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -jACCEPT\n-A INPUT -p tcp -m state --state NEW -m tcp --dport 5432-j ACCEPT\n-A INPUT -j REJECT--reject-with icmp-host-prohibited\n-A FORWARD -jREJECT --reject-with icmp-host-prohibited\nCOMMIT\n:wq! #保存退出\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("code",[s._v("systemctl restart iptables.service")]),s._v(" #最后重启防火墙使配置生效\n"),t("code",[s._v("systemctl enable iptables.service")]),s._v(" #设置防火墙开机启动")]),s._v(" "),t("p",[t("strong",[s._v("注：")]),s._v(" 若你使用的服务器为公有云产品，以上防火墙配置可能无限，有些公有云在控制台的安全组设置端口策略，如阿里云产品。")]),s._v(" "),t("p",[s._v("致此，我们已经安装并配置好数据库了，可以开心的使用了。更多进阶，可参考德哥文章"),t("a",{attrs:{href:"https://yq.aliyun.com/articles/79330",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostgreSQL 10.0 解读"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.cnblogs.com/qiyebao/p/4562557.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.cnblogs.com/qiyebao/p/4562557.html"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://www.linuxidc.com/Linux/2015-05/117473.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.linuxidc.com/Linux/2015-05/117473.htm"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://my.oschina.net/myaniu/blog/181543",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://my.oschina.net/myaniu/blog/181543"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);