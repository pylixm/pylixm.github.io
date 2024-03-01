(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{528:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"项目简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目简介"}},[s._v("#")]),s._v(" 项目简介")]),s._v(" "),a("p",[s._v("随身wifi 可以刷debian 得益于项目 OpenStick ：")]),s._v(" "),a("p",[s._v("项目地址：https://github.com/OpenStick/OpenStick\n项目介绍和文档：https://www.kancloud.cn/handsomehacker/openstick/2636505")]),s._v(" "),a("p",[s._v("并不是所有随身wifi 都可以刷，之前有前辈做了脑图，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/wifi-category.jpg",alt:""}})]),s._v(" "),a("p",[s._v("这个分类算是比较全的，我买到的型号是版印是 "),a("code",[s._v("JZ02_v10")]),s._v(" 我用 openstick 原包刷是成功进入debian 系统的。")]),s._v(" "),a("p",[s._v("这个版本，直接刷会少好多内部命令，可以使用 moki 工具恢复一个bin （一个 uz801 的备份包：https://www.123pan.com/s/2NsbVv-wpECd.html 提取码：cway） 备份进去之后再刷。")]),s._v(" "),a("p",[s._v("其他和其他410 版本基本一致，大致可分为如下几个步骤：")]),s._v(" "),a("h2",{attrs:{id:"第一、准备软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一、准备软件"}},[s._v("#")]),s._v(" 第一、准备软件")]),s._v(" "),a("ul",[a("li",[s._v("1、9008免签名驱动")]),s._v(" "),a("li",[s._v("2、MiKo (备份固件，以免成砖块)")]),s._v(" "),a("li",[s._v("3、随身WiFi助手或其他刷机助手")])]),s._v(" "),a("p",[s._v("工具包：https://pan.baidu.com/s/1Qg6Ndqalqgea6ZOreNAdcQ?pwd=d6jf")]),s._v(" "),a("ul",[a("li",[s._v("4、Debian刷机包")])]),s._v(" "),a("p",[s._v("开源包：https://github.com/OpenStick/OpenStick/releases/tag/v1")]),s._v(" "),a("p",[s._v("其他老大编译包：")]),s._v(" "),a("ul",[a("li",[s._v("提高cpu频率的包：https://www.coolapk.com/feed/41957632?shareKey=NzZhOGM5MmQxNjBmNjQwOWY3ODg~&shareUid=3207856&shareFrom=com.coolapk.market_13.0.2")]),s._v(" "),a("li",[s._v("随身wifi + debian 切换：https://www.kancloud.cn/a813630449/ufi_car/2795165")])]),s._v(" "),a("h2",{attrs:{id:"第二、备份固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二、备份固件"}},[s._v("#")]),s._v(" 第二、备份固件")]),s._v(" "),a("p",[s._v("用miko备份，全区备份即可，工具包中有miko。")]),s._v(" "),a("p",[s._v("备份：\n"),a("img",{attrs:{src:"/imgs/miko-backup-1.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/imgs/miko-backup-2.png",alt:""}})]),s._v(" "),a("p",[s._v("还原：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/miko-restore-1.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"/imgs/miko-restore-2.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"第三、刷机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三、刷机"}},[s._v("#")]),s._v(" 第三、刷机")]),s._v(" "),a("p",[s._v("备份好之后把棒子拔下来，重新插上。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("进入fastboot模式:")]),s._v(" "),a("ul",[a("li",[s._v("方法一，命令："),a("code",[s._v("adb reboot bootloader")])]),s._v(" "),a("li",[s._v("方法二，刷机工具。")])])]),s._v(" "),a("li",[a("p",[s._v("先刷base包：进入base目录（非支持版本，可选择 genaric 版本），点击flash.bat")])]),s._v(" "),a("li",[a("p",[s._v("再刷debian包：进入debian目录（刷之前可替换 对应版本 boot.img 文件），点击flash.bat")])])]),s._v(" "),a("p",[s._v("刷机完成后，把棒子拔下来，重新插拔。")]),s._v(" "),a("h2",{attrs:{id:"第四、设置驱动和网络共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四、设置驱动和网络共享"}},[s._v("#")]),s._v(" 第四、设置驱动和网络共享")]),s._v(" "),a("p",[s._v("情况一：rndis 未识别设备")]),s._v(" "),a("p",[s._v("打开设备管理器，这里会有一个驱动异常的rndis设备，右键，选择更新驱动，浏览我的电脑，以查找驱动程序")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304281119967.png",alt:"image-20230428111940899"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304281121286.png",alt:"image-20230428112110215"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304281121364.png",alt:"image-20230428112132290"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304281121236.png",alt:"image-20230428112153161"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304281122596.png",alt:"image-20230428112203527"}})]),s._v(" "),a("p",[s._v("找到Microsoft，然后选择基于RNDIS网络共享设备（不同的系统可能不一样，但大同小异）。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304281122177.png",alt:"image-20230428112216090"}})]),s._v(" "),a("p",[s._v("安装完驱动设备就可以被正常识别了，然后打开ssh（xshell、WindTerm等等都可以）。")]),s._v(" "),a("p",[s._v("情况二：adb interface 设备")]),s._v(" "),a("p",[s._v("有时候会识别为 Android ADB interface ,选择 "),a("code",[s._v("Composite USB Device")]),s._v(" 即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/adb-insterface.jpg",alt:""}})]),s._v(" "),a("p",[s._v("驱动更新后会有新的网卡创建，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/network-interface.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"第五、ssh登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第五、ssh登录"}},[s._v("#")]),s._v(" 第五、SSH登录")]),s._v(" "),a("p",[s._v("ssh 等了时，openstick 地址和用户名密码如下，其他镜像包，参考他们的文档，可能略有不同。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("登录地址：ssh "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".68.1 \n\n用户名：user \n\n密码：1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"第六、连接网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第六、连接网络"}},[s._v("#")]),s._v(" 第六、连接网络")]),s._v(" "),a("p",[s._v("在终端输入"),a("code",[s._v("nmtui")]),s._v("，点击"),a("code",[s._v("Activate a connection")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304272242452.png",alt:"image-20230427224246380"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304272243459.png",alt:"image-20230427224331397"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304272245861.png",alt:"image-20230427224554796"}})]),s._v(" "),a("p",[s._v("在wifi名称前面带有*，就表示连接成功了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304272246098.png",alt:"image-20230427224634036"}})]),s._v(" "),a("p",[s._v("这样就可以通过wifi 链接了，无需通过电脑的虚拟网卡，wifi可单独插电当服务器使用了。")]),s._v(" "),a("p",[s._v("下边是一些针对 Debian 系统的设置，可参考。")]),s._v(" "),a("h2",{attrs:{id:"第七、安装软件-设定镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第七、安装软件-设定镜像源"}},[s._v("#")]),s._v(" 第七、安装软件+设定镜像源")]),s._v(" "),a("h3",{attrs:{id:"a安装系统常用软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a安装系统常用软件"}},[s._v("#")]),s._v(" a安装系统常用软件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建一个空mobian.list文件： 禁用 mobian 源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list.d/mobian.list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新APT软件包：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装常用的软件包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" dnsutils "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" lrzsz "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" gdisk exfat-fuse exfat-utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"b设定阿里镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b设定阿里镜像源"}},[s._v("#")]),s._v(" b设定阿里镜像源")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打开/etc/apt/sources.list文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/apt/sources.list\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#粘贴以下内容")]),s._v("\ndeb https://mirrors.aliyun.com/debian/ bullseye main non-free contrib\ndeb-src https://mirrors.aliyun.com/debian/ bullseye main non-free contrib\ndeb https://mirrors.aliyun.com/debian-security/ bullseye-security main\ndeb-src https://mirrors.aliyun.com/debian-security/ bullseye-security main\ndeb https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib\ndeb-src https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib\ndeb https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib\ndeb-src https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"c设定镜像后再次更新apt软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c设定镜像后再次更新apt软件包"}},[s._v("#")]),s._v(" c设定镜像后再次更新APT软件包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 该命令会更新本地的软件包列表，会连接到远程软件源并检查可用的更新。\nsudo apt update\n\n# 这个命令会下载并安装系统中已经安装的软件包的最新版本，如果有新的依赖项则也会一并下载安装。\nsudo apt-get upgrade\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"第八、配置系统时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第八、配置系统时间"}},[s._v("#")]),s._v(" 第八、配置系统时间")]),s._v(" "),a("p",[a("code",[s._v("dpkg-reconfigure tzdata")]),s._v(" 选6.然后选70（亚洲 上海）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304272307023.png",alt:"image-20230427230735949"}})]),s._v(" "),a("h2",{attrs:{id:"第九、把debian-设置中文环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第九、把debian-设置中文环境"}},[s._v("#")]),s._v(" 第九、把Debian 设置中文环境")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("要支持区域设置，首先要安装locales软件包：\napt-get install locales\n\n然后配置locales软件包：\ndpkg-reconfigure locales\n\n在界面中钩选487. zh_CN.UTF-8 UTF-8\n输入487\n\n然后输入3\n\n#重启设备\nreboot\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304272310153.png",alt:"image-20230427231005088"}})]),s._v(" "),a("p",[s._v("设备重启后，再输入nmtui，就可以看到中文界面了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://typeora.oss-cn-shenzhen.aliyuncs.com/img/202304272313849.png",alt:"image-20230427231335786"}})]),s._v(" "),a("h2",{attrs:{id:"第十、安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第十、安装docker"}},[s._v("#")]),s._v(" 第十、安装docker")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" get.docker.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" get-docker.sh "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装脚本")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" get-docker.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--mirror")]),s._v(" Aliyun "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行安装脚本")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入开机启动")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker服务")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建docker组")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-aG")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前用户加入docker组")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/docker "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建配置目录")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" newgrp "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新docker组信息")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\\n  "registry-mirrors": ["https://fgyenivd.mirror.aliyuncs.com"]\\n}\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/docker/daemon.json "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置阿里云镜像加速")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载所有系统服务配置")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker服务")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动 docker服务")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("blockquote",[a("p",[s._v("启动docker：sudo systemctl start docker")]),s._v(" "),a("p",[s._v("停止docker：sudo systemctl stop docker")]),s._v(" "),a("p",[s._v("重启docker：suto systemctl restart docker")]),s._v(" "),a("p",[s._v("开机启动docker：sudo systemctl enable docker")]),s._v(" "),a("p",[s._v("查看docker状态：sudo systemctl status docker")]),s._v(" "),a("p",[s._v("查看docker启动情况：docker version")]),s._v(" "),a("p",[s._v("查看docker是否已经开机启动：sudo systemctl is-enabled docker")])]),s._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_41099712/article/details/130711724",target:"_blank",rel:"noopener noreferrer"}},[s._v("高通410 随身WIFI刷入Debian系统(玩法合集)"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://cway.top/post/1063.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("jz02 v10刷debian"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_44774198/article/details/129812022",target:"_blank",rel:"noopener noreferrer"}},[s._v("随身WiFi（棒子）折腾日记（不断更新完善...）"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.bilibili.com/read/cv18292427/",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决随身WiFi报错的问题"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_36724501/article/details/127716153",target:"_blank",rel:"noopener noreferrer"}},[s._v("随身WIFI刷真Linux(Debian)系统搭配拓展坞做超低功耗服务器"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);