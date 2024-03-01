(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{491:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("rsync 是一个快速的、多功能的本地和远端的文件同步工具。官方网站：https://rsync.samba.org/ ，可以在上边找到使用方法和提bug。")]),s._v(" "),a("p",[s._v("rsync 支持增量的同步文件，它使用特有的“rsync 算法”计算文件的不同，只同步差异的部分，所以它的同步非常快。\nrsync 支持远端的文件同步，使用原生的rsync传输协议，也可通过SSH协议传输，是"),a("code",[s._v("rcp")]),s._v("和"),a("code",[s._v("scp")]),s._v("理想的替代品。")]),s._v(" "),a("p",[s._v("在现在的许多Linux发行版本上都默认安装了，若没有按照，可使用 "),a("code",[s._v("yum install rsync")]),s._v(" 安装。")]),s._v(" "),a("h2",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("p",[s._v("rsync 可以分为3种传输数据的常用场景：")]),s._v(" "),a("ul",[a("li",[s._v("本地的文件复制")]),s._v(" "),a("li",[s._v("远端主机的文件传输")]),s._v(" "),a("li",[s._v("作为daemon服务的方式提供服务")])]),s._v(" "),a("p",[s._v("下面咱们来逐一介绍。")]),s._v(" "),a("h3",{attrs:{id:"本机复制内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本机复制内容"}},[s._v("#")]),s._v(" 本机复制内容")]),s._v(" "),a("p",[s._v("本机复制很简单，类似"),a("code",[s._v("cp")]),s._v("，命令如下。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" source.txt destination.txt \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以加些参数，来定制化，如添加 "),a("code",[s._v("-P")]),s._v("来显示进度。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" source.txt destination.txt\nsource.txt\n          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00kB/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xfer"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1, to-check=0/1)")]),s._v("\n\nsent "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("138")]),s._v(" bytes  received "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v(" bytes  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360.00")]),s._v(" bytes/sec\ntotal size is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v("  speedup is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.29")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("其他常用的参数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-v --verbose 详细模式输出，传输时的进度等信息。\n-z --compress 传输时进行压缩以提高传输效率,\n--compress-level=NUM可按级别压缩\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"远端同步内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远端同步内容"}},[s._v("#")]),s._v(" 远端同步内容")]),s._v(" "),a("p",[s._v("远端主机的文件传输，类似"),a("code",[s._v("scp")]),s._v("和"),a("code",[s._v("rcp")]),s._v("。用法如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" host:destination\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" host:source destination\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将本地文件同步到远端：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认rsync协议")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" source.txt root@192.168.33.12:/root/dst.txt\nroot@192.168.33.12"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s password:\nsource.txt\n\nsent 143 bytes  received 42 bytes  33.64 bytes/sec\ntotal size is 52  speedup is 0.28\n\n# 指定ssh 协议\n$ rsync -v -e \"ssh -p 22\" source.txt root@192.168.33.12:/root/dst.txt\nroot@192.168.33.12'")]),s._v("s password:\nsource.txt\n\nsent "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("91")]),s._v(" bytes  received "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v(" bytes  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.71")]),s._v(" bytes/sec\ntotal size is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v("  speedup is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.37")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("常用的参数：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--archive")]),s._v(" 归档模式，表示以递归方式传输文件，并保持所有文件属性，等价于-rtopgDl\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" 对子目录以递归模式，即目录下的所有目录都同样传输，注意是小写的r.\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" 保持文件属性信息\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" 保持文件权限\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" 保持文件属组信息\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" 显示同步的过程及传输时的进度等信息\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" 保持设备文件信息\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" 保持软连接\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-avzP")]),s._v(" 提示：这里的 相当于 -vzrtopgDlP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("还多了Dl功能"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("生产环境常用 \n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-avz")]),s._v(" 定时任务就不用输出过程了可以-az\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 使用的信道协议，指定替代rsh的shell程序，例如：ssh\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PATTERN 指定排除不需要传输的文件模式（和tar参数一样）--exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file（文件名所在的目录文件）（和tar参数一样）--delete 无差异同步，即全部同步。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("该场景下，要注意下面几个问题：")]),s._v(" "),a("ul",[a("li",[s._v("1、同步的2台主机必须都有"),a("code",[s._v("rsync")]),s._v("命令，否则无法同步。")]),s._v(" "),a("li",[s._v("2、同步文件时，注意带宽消耗，尽量在流量小的时间段做文件的同步。")])]),s._v(" "),a("h3",{attrs:{id:"以服务形式同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以服务形式同步"}},[s._v("#")]),s._v(" 以服务形式同步")]),s._v(" "),a("p",[s._v("该场景应该是使用最广泛的一种，我们实际开发中，常常搭建"),a("code",[s._v("rsync")]),s._v("服务来作为文件的暂存服务器或备份服务器。rsync daemon 模式下，支持用户名认证和读写的权限控制。")]),s._v(" "),a("p",[s._v("该场景下，"),a("code",[s._v("rsync")]),s._v("分为服务端和客户端。服务端以daemon形式对外提供服务，客户端即其他安卓"),a("code",[s._v("rsync")]),s._v("命令的服务器。")]),s._v(" "),a("p",[s._v("服务端，只需添加些配置即可。默认的配置文件在 "),a("code",[s._v("/etc/rsyncd.conf")]),s._v("，可按如下说明修改配置：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置参考 https://www.linuxidc.com/Linux/2016-12/138768.htm")]),s._v("\npid "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/run/rsyncd.pid "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程 pid 文件所在位置")]),s._v("\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("888")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听端口，默认是873")]),s._v("\naddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".33.12 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器监听的IP地址, 默认为出口ip")]),s._v("\nuid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 守护进程所属的uid，默认是nobody，最好新建用户，并配置相关目录权限。")]),s._v("\ngid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rysnc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 守护进程的gid")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chroot，即改变程序执行时所参考的根目录位置，在传输文件之前，服务器守护程序在将chroot 到文件系统中的目录中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这样做的好处是可能保护系统被安装漏洞侵袭的可能。缺点是需要超级用户权限。另外对符号链接文件，将会排除在外")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#也就是说，你在 rsync服务器上，如果有符号链接，你在备份服务器上运行客户端的同步数据时，只会把符号链接名同步下来，并不会同步符号链接的内容")]),s._v("\nuse "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" only "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" no "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只读选择，只让客户端从服务器上读取文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" only "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只写选择，只让客户端到服务器上写入")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许访问的IP，可以指定单个IP，也可以指定整个网段，能提高安全性。格式是 ip 与 ip 之间、ip 和网段之间、网段和网段之间要用空格隔开；")]),s._v("\nhosts allow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/255.255.255.0 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".1.0/255.255.255.0 \nmax connections "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#客户端最多连接数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当用户登录时会看到这个信息。比如显示当前时间、公告等")]),s._v("\nmotd "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /etc/rsyncd/rsyncd.motd\nlog "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/log/rsync.log "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rsync 服务器的日志；")]),s._v("\ntransfer logging "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#记录传输文件的日志")]),s._v("\nlog "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" %t %a %m %f %b "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志格式")]),s._v("\nsyslog facility "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" local3 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志级别")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过该选项可以覆盖客户指定的IP超时时间。可以确保rsync服务器不会永远等待一个崩溃的客户端。超时单位为秒钟，0表示没有超时定义，这也是默认值。对于匿名rsync服务器来说，一个理想的数字是600。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#模块定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主要是定义服务器哪个目录要被同步。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每个模块都要以[name]形式。这个名字就是在 rsync 客户端看到的名字。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#但是服务器真正同步的数据是通过 path 指定的。可以依次创建多个模块。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每个模块要指定认证用户、密码文件、排除，并不是必须的。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" backup "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#模块名，以下配置都属于此模块")]),s._v("\npath "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /opt/backup "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件目录所在位置")]),s._v("\nlist "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" no "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当查看服务器上提供了哪些目录时是否列出来，no比较安全")]),s._v("\nignore errors "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#忽略I/O错误")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定由空格或逗号分隔的用户名列表，只有这些用户才允许连接该模块。这里的用户和系统用户没有任何关系，是 rsyncd.secrets 中的用户名！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#如果"auth users"被设置，那么客户端发出对该模块的连接请求以后会被rsync请求challenged进行验证身份。')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里使用的 challenge/response 认证协议。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#用户的名和密码以明文方式存放在"secrets file"选项指定的文件中。默认情况下无需密码就可以连接模块(也就是匿名方式)。')]),s._v("\nauth "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" deanwu\nsecrets "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /etc/rsyncd/rsyncd.secrets "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码文件")]),s._v("\n\nexclude "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" error_log httpd.pid "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#忽略的文件或目录")]),s._v("\ncomment this is my log "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本模块注释，可选")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("p",[s._v("配置好后，启动服务端，若使用yum安装，服务为"),a("code",[s._v("systemd")]),s._v("管理的话，直接 "),a("code",[s._v("systemctl start rsyncd")]),s._v("即可。若不是，则需手动启动，如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/local/rsync/bin/rsync "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--daemon")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/rsyncd.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("服务器端启动后，客户端可执行如下命令拉取或推送文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 拉取文件\n rsync -vzrtp --progress --port 888 192.168.33.12::backup/source.txt  source.txt\n\n# 推送文件\n rsync -vzrtp --progress --port 888  source.txt 192.168.33.12::backup/source.txt \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("若配置了用户和密码，则需要将密码明文保存到文件"),a("code",[s._v("/etc/rsyncd/rsyncd.pass")]),s._v("并附相关权限"),a("code",[s._v("chmod 600 /etc/rsync.pass")]),s._v(", 在执行时指定密码文件。如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 拉取文件\nrsync -vzrtp --progress --port 888 --password-file=/etc/rsyncd/rsyncd.pass rsync@192.168.33.12::backup  source.txt\n\n# 推送文件\nrsync -vzrtp --progress --port 888 --password-file=/etc/rsyncd/rsyncd.pass source.txt  rsync@192.168.33.12::backup/source.txt \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("除了可以同步文件外，还可以对整个目录做同步。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 拉取目录\nrsync -vzrtp --progress --port 888 --password-file=/etc/rsyncd/rsyncd.pass rsync@192.168.33.12::backup  source/\n\n# 推送目录\nrsync -vzrtp --progress --port 888 --password-file=/etc/rsyncd/rsyncd.pass source/ rsync@192.168.33.12::backup/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("到这里，"),a("code",[s._v("rsync")]),s._v("便介绍完成了。我们了解了几种"),a("code",[s._v("rsync")]),s._v("常用的场景，这些已经涵盖了我们实际开发中能够用到它的大部分场景。如果还有什么不明白的地方，可以翻阅其文档，或留言交流。")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("https://zh.wikipedia.org/wiki/Rsync\nhttps://rsync.samba.org/\nhttps://linux.die.net/man/1/rsync\nhttps://wiki.archlinux.org/index.php/Rsync_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)")])])}),[],!1,null,null,null);a.default=e.exports}}]);