(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{509:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("原文地址：http://www.xiaomastack.com/2014/11/18/salt-api/")])]),t._v(" "),a("p",[t._v("salt-api也用了一段时间了，现在从安装、配置、使用三个方面梳理下知识。\n")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("采用pip安装方便快捷，当然编译安装也很nice。")]),t._v(" "),a("p",[t._v("安装pip采用的编译安装的方式，版本当前最新1.5.6，下载、解压、编译、安装是不变的法则。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[root@saltstack ~]#wget https://pypi.python.org/packages/source/p/pip/pip-1.5.6.tar.gz#md5=01026f87978932060cc86c1dc527903e --no-check-certificate\n[root@saltstack ~]#tar xvfz pip-1.5.6.tar.gz\n[root@saltstack ~]#cd pip-1.5.6\n[root@saltstack pip-1.5.6]#python setup.py build\n[root@saltstack pip-1.5.6]#python setup.py install\n#安装完成后可以用pip freeze查看已安装的packages\n[root@saltstack pip-1.5.6]#pip freeze\n安装CherryPy，版本3.2.3\n\n[root@saltstack ~]#pip install cherrypy==3.2.3\n安装salt-api，版本0.8.3\n\n[root@saltstack ~]#pip install salt-api==0.8.3\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[root@saltstack ~]# cd /etc/pki/tls/certs\n[root@saltstack certs]# make testcert\numask 77 ; \\\n    /usr/bin/openssl genrsa -aes128 2048 > /etc/pki/tls/private/localhost.key\nGenerating RSA private key, 2048 bit long modulus\n...+++\n..................................................................+++\ne is 65537 (0x10001)\nEnter pass phrase:    #键入加密短语，4到8191个字符\nVerifying - Enter pass phrase:    #确认加密短语\numask 77 ; \\\n    /usr/bin/openssl req -utf8 -new -key /etc/pki/tls/private/localhost.key -x509 -days 365 -out /etc/pki/tls/certs/localhost.crt -set_serial 0\nEnter pass phrase for /etc/pki/tls/private/localhost.key:    #再次输入相同的加密短语\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [XX]:CN    #都可以选填\nState or Province Name (full name) []:Shanghai\nLocality Name (eg, city) [Default City]:Shanghai\nOrganization Name (eg, company) [Default Company Ltd]:\nOrganizational Unit Name (eg, section) []:\nCommon Name (eg, your name or your server's hostname) []:\nEmail Address []:1989051805@qq.com\n[root@saltstack certs]# cd ../private/\n[root@saltstack private]# openssl rsa -in localhost.key -out localhost_nopass.key\nEnter pass phrase for localhost.key:    #输入之前的加密短语\nwriting RSA key\n")])])]),a("p",[t._v("如果遇到这样的错误")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[root@saltstack certs]# make testcert\numask 77 ; \\\n    /usr/bin/openssl req -utf8 -new -key /etc/pki/tls/private/localhost.key -x509 -days 365 -out /etc/pki/tls/certs/localhost.crt -set_serial 0\nunable to load Private Key\n139696733648712:error:0906D06C:PEM routines:PEM_read_bio:no start line:pem_lib.c:703:Expecting: ANY PRIVATE KEY\nmake: *** [/etc/pki/tls/certs/localhost.crt]\n")])])]),a("p",[t._v("删掉文件/etc/pki/tls/private/localhost.key文件，然后再make testcert。")]),t._v(" "),a("p",[t._v("为salt-api创建用户并设定密码，用户名没有特别要求，我就用saltapi好了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('[root@saltstack ~]#useradd -M -s /sbin/nologin saltapi\n#由于是测试，故采用了弱密码"password"，正式环境必须采用强密码，多用特殊字符\n[root@saltstack ~]# passwd saltapi\n')])])]),a("p",[t._v("新增加配置文件/etc/salt/master.d/api.conf和/etc/salt/master.d/eauth.conf")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("#该配置文件给予saltapi用户所有模块使用权限，出于安全考虑一般只给予特定模块使用权限\n[root@saltstack master.d]# cat eauth.conf\nexternal_auth:\n  pam:\n    saltapi:\n      - .*\n[root@saltstack master.d]#\n[root@saltstack master.d]# cat api.conf\nrest_cherrypy:\n  port: 8888\n  ssl_crt: /etc/pki/tls/certs/localhost.crt\n  ssl_key: /etc/pki/tls/private/localhost_nopass.key\n[root@saltstack master.d]#\n")])])]),a("p",[t._v("寻找salt-api的启动脚本，我比较懒就不自己写了,在页面https://github.com/saltstack/salt-api/releases下载salt-api的tar.gz包,启动脚本在解压包的这个位置./pkg/rpm/salt-api。")]),t._v(" "),a("p",[t._v("不过提供的脚本貌似有个小的bug，就是使用restart参数时，salt-api能够stop但是不能start，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[root@saltstack ~]# /etc/init.d/salt-api restart\nStopping salt-api daemon:                                  [确定]\nStarting salt-api daemon:                                  [失败]\n")])])]),a("p",[t._v("我估计可能是有些相关资源在下次启动前没有来得及释放造成的，解决方法很简单在脚本的restart函数的stop和start之间加上sleep语句。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("restart() {\n   stop\n   sleep 1\n   start\n}\n")])])]),a("p",[t._v("然后重启就没有问题了")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[root@saltstack ~]# /etc/init.d/salt-api restart\nStopping salt-api daemon:                                  [确定]\nStarting salt-api daemon:                                  [确定]\n[root@saltstack ~]#\n")])])]),a("p",[t._v("最后重启salt-master在启动salt-api并将salt-api加入开机启动，安装就完成了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[root@saltstack ~]# chkconfig salt-api on\n[root@saltstack ~]# /etc/init.d/salt-master restart\nStopping salt-master daemon:                               [确定]\nStarting salt-master daemon:                               [确定]\n[root@saltstack ~]# /etc/init.d/salt-api restart\nStopping salt-api daemon:                                  [确定]\nStarting salt-api daemon:                                  [确定]\n[root@saltstack ~]#\n")])])]),a("h2",{attrs:{id:"使用-基本的使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-基本的使用方法"}},[t._v("#")]),t._v(" 使用（基本的使用方法）")]),t._v(" "),a("p",[t._v("登录获取token")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[root@syndic02 ~]# curl -k https://192.168.186.134:8888/login -H \"Accept: application/x-yaml\" -d username='saltapi' -d password='password' -d eauth='pam'\nreturn:\n- eauth: pam\n  expire: 1416324685.2597771\n  perms:\n  - .*\n  start: 1416281485.2597761\n  token: 6171a922a9718ccb40e94ee7c8eb8768f4eea4e5\n  user: saltapi\n")])])]),a("p",[t._v("获取token后就可以使用token通信")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("#相当于在salt-master本地执行salt \\* test.ping\n[root@syndic02 ~]# curl -k https://192.168.186.134:8888/ -H \"Accept: application/x-yaml\" -H \"X-Auth-Token: 6171a922a9718ccb40e94ee7c8eb8768f4eea4e5\" -d client='local' -d tgt='*' -d fun='test.ping'\nreturn:\n- syndic01: true\n  syndic01-minion02: true\n  syndic02: true\n  syndic02-minion02: true\n \n#相当于在salt-master本地执行salt \\* test.echo 'hello world'\n[root@syndic02 ~]# curl -k https://192.168.186.134:8888/ -H \"Accept: application/x-yaml\" -H \"X-Auth-Token: 6171a922a9718ccb40e94ee7c8eb8768f4eea4e5\" -d client='local' -d tgt='*' -d fun='test.echo' -d arg='hello world'\nreturn:\n- syndic01: hello world\n  syndic01-minion02: hello world\n  syndic02: hello world\n  syndic02-minion02: hello world\n[root@syndic02 ~]#\n")])])]),a("p",[t._v("运维开发这样使用还是不方便的，下面写的是一个salt-api的类(其它的文章也提到过)可以参考。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("#!/usr/bin/env python\n#coding=utf-8\n \nimport urllib2, urllib, json, re\n \nclass saltAPI:\n    def __init__(self):\n        self.__url = 'https://192.168.186.134:8888'       #salt-api监控的地址和端口如:'https://192.168.186.134:8888'\n        self.__user =  'saltapi'             #salt-api用户名\n        self.__password = 'password'          #salt-api用户密码\n        self.__token_id = self.salt_login()\n \n    def salt_login(self):\n        params = {'eauth': 'pam', 'username': self.__user, 'password': self.__password}\n        encode = urllib.urlencode(params)\n        obj = urllib.unquote(encode)\n        headers = {'X-Auth-Token':''}\n        url = self.__url + '/login'\n        req = urllib2.Request(url, obj, headers)\n        opener = urllib2.urlopen(req)\n        content = json.loads(opener.read())\n        try:\n            token = content['return'][0]['token']\n            return token\n        except KeyError:\n            raise KeyError\n \n    def postRequest(self, obj, prefix='/'):\n        url = self.__url + prefix\n        headers = {'X-Auth-Token'   : self.__token_id}\n        req = urllib2.Request(url, obj, headers)\n        opener = urllib2.urlopen(req)\n        content = json.loads(opener.read())\n        return content['return']\n \n    def saltCmd(self, params):\n        obj = urllib.urlencode(params)\n        obj, number = re.subn(\"arg\\d\", 'arg', obj)\n        res = self.postRequest(obj)\n        return res\n \ndef main():\n    #以下是用来测试saltAPI类的部分\n    sapi = saltAPI()\n    params = {'client':'local', 'fun':'test.ping', 'tgt':'*'}\n    #params = {'client':'local', 'fun':'test.ping', 'tgt':'某台服务器的key'}\n    #params = {'client':'local', 'fun':'test.echo', 'tgt':'某台服务器的key', 'arg1':'hello'}\n    #params = {'client':'local', 'fun':'test.ping', 'tgt':'某组服务器的组名', 'expr_form':'nodegroup'}\n    test = sapi.saltCmd(params)\n    print test\n \nif __name__ == '__main__':\n    main()\n")])])]),a("p",[t._v("测试效果")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[root@syndic02 ~]# python salt-api.py\n[{u'syndic02': True, u'syndic02-minion02': True, u'syndic01': True, u'syndic01-minion02': True}]\n[root@syndic02 ~]#\n")])])]),a("p",[t._v("以上只是一些基本的实例，salt-api还可以实现更多功能。")]),t._v(" "),a("h2",{attrs:{id:"_2016-5-30-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2016-5-30-update"}},[t._v("#")]),t._v(" 2016-5-30 update：")]),t._v(" "),a("p",[t._v("当前salt版本："),a("code",[t._v("2016.3")]),t._v("，官网对salt各模块安装配置文档做了整理重拍，更加清晰明了。")]),t._v(" "),a("p",[t._v("前段时间试着按官方的文档搭建了下salt环境，感觉安装更简单了，下面更新下 salt-api的安装：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("# https://docs.saltstack.com/en/latest/ref/netapi/all/salt.netapi.rest_cherrypy.html\n# 1、安装 salt-api \nyum install salt-api \n\n# 2、生成 https ssl 证书\nsalt-call --local tls.create_self_signed_cert\n\n# 3、向master 配置文件中增加：\nrest_cherrypy:\nport: 8000\nssl_crt: /etc/pki/tls/certs/localhost.crt\nssl_key: /etc/pki/tls/certs/localhost.key\n\n# 4、创建salt 用户\n[root@saltstack ~]# useradd -M -s /sbin/nologin salt\n[root@saltstack ~]# passwd salt\n# 修改 master 配置信息\nexternal_auth:\n  pam:\n    saltapi:\n      - .*  \n# 5、增加 api 访问信息\n rest_cherrypy:\n   port: 8888\n   ssl_crt: /etc/pki/tls/certs/localhost.crt\n   ssl_key: /etc/pki/tls/private/localhost_nopass.key\n")])])]),a("p",[t._v("到此，salt-api 安装配置完成。需要注意的是，有时候 yum 和 pip 使用的python 并不是一个，所以有些依赖包安装的时候，尽量统一使用一种包管理管理工具。")])])}),[],!1,null,null,null);a.default=n.exports}}]);