(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{511:function(s,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("SaltStack 2014.7之前, Minion端的执行结果想存储在外部系统中, 通过使用Returners，我们可以将返回结果存放到我们指定的存储系统中，但是Returners的特性是由minion端直接连接对应的存储中，")]),s._v(" "),t("p",[s._v("使用特定的Returners还可能需要在Minion安装相关的软件包，在大规模的分布式环境中由于网络等限制，该方式可能并不能完全满足我们的需 求。")]),s._v(" "),t("p",[s._v("Salt提供了一种可以直接在Master端将返回存储下来的机制。在Master配置文件中有master_job_cache的选项，默认就是Mysql。我们打开就可以将Job的返回结果直接存入MySQL中。\n"),s._v("\n具体可查看官网介绍：http://docs.saltstack.com/en/latest/topics/jobs/external_cache.html")]),s._v(" "),t("p",[s._v("默认返回结果是保存到cachedir中的，保持24小时。可以使用")]),s._v(" "),t("p",[s._v("In addition to the Default Job Cache, Salt provides two additional mechanisms to send job results to other systems (databases, local syslog, and others):")]),s._v(" "),t("p",[s._v("External Job Cache")]),s._v(" "),t("p",[s._v("Master Job Cache")]),s._v(" "),t("p",[s._v("The major difference between these two mechanism is from where results are returned (from the Salt Master or Salt Minion).")]),s._v(" "),t("p",[s._v("操作如下：")]),s._v(" "),t("p",[s._v("一、在master端安装mysql并创建数据库及表")]),s._v(" "),t("p",[s._v("具体可能参考官网文档：http://docs.saltstack.com/en/latest/ref/returners/all/salt.returners.mysql.html#module-salt.returners.mysql")]),s._v(" "),t("p",[s._v("二、返回数据入库配置有二种方法：")]),s._v(" "),t("p",[s._v("1、在minion端设置：")]),s._v(" "),t("p",[s._v("1） 安装MySQL-python包")]),s._v(" "),t("p",[s._v("2） 修改minion配置文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("mysql.host: ‘192.168.100.120’\nmysql.user: ‘salt’\nmysql.pass: ‘salt’\nmysql.db: ‘salt’\nmysql.port: 3306\nmysql.ssl_ca: /etc/salt/pki/minion/minion.pem\nmysql.ssl_cert: /etc/salt/pki/minion/minion.pem\nmysql.ssl_key: /etc/salt/pki/minion/minion.pub\n")])])]),t("p",[s._v("3）在master端执行命令添加–return mysql")]),s._v(" "),t("p",[s._v("例：salt ‘*’ cmd.run “free -m” –return mysql")]),s._v(" "),t("p",[s._v("或者在master端开启ext_job_cache: mysql，则无需要加–return mysql也可插入表")]),s._v(" "),t("p",[s._v("4） master端无需配置。")]),s._v(" "),t("p",[s._v("注： 即可将return数据插入到表salt_returns中。其他二表无数据。")]),s._v(" "),t("p",[s._v("2、在master端设置：")]),s._v(" "),t("p",[s._v("1） 安装MySQL-python包")]),s._v(" "),t("p",[s._v("如不安装插入mysql的python模块，则会报如下错误")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("2015-07-19 19:47:52,089 [salt.master][CRITICAL][6631] The specified returner used for the external job cache “mysql” does not have a save_load function!\n")])])]),t("p",[s._v("2） 在master配置文件中添加")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("mysql.host: ‘127.0.0.1’\nmysql.user: ‘salt’\nmysql.pass: ‘salt’\nmysql.db: ‘salt’\nmysql.port: 3306\n\nmaster_job_cache: mysql\n")])])]),t("p",[s._v("3） 在master端执行命令")]),s._v(" "),t("p",[s._v("例：salt ‘*’ cmd.run “free -m”即可将jid和return数据插入jids和salt_returns表。")])])}),[],!1,null,null,null);t.default=n.exports}}]);