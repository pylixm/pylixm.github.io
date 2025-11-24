import{_ as e,c as a,a as s,o as n}from"./app-Cpl7-wzY.js";const o={};function r(p,t){return n(),a("div",null,[...t[0]||(t[0]=[s(`<blockquote><p>原文地址：http://www.xiaomastack.com/2014/11/18/salt-api/</p></blockquote><p>salt-api也用了一段时间了，现在从安装、配置、使用三个方面梳理下知识。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>采用pip安装方便快捷，当然编译安装也很nice。</p><p>安装pip采用的编译安装的方式，版本当前最新1.5.6，下载、解压、编译、安装是不变的法则。</p><pre><code>[root@saltstack ~]#wget https://pypi.python.org/packages/source/p/pip/pip-1.5.6.tar.gz#md5=01026f87978932060cc86c1dc527903e --no-check-certificate
[root@saltstack ~]#tar xvfz pip-1.5.6.tar.gz
[root@saltstack ~]#cd pip-1.5.6
[root@saltstack pip-1.5.6]#python setup.py build
[root@saltstack pip-1.5.6]#python setup.py install
#安装完成后可以用pip freeze查看已安装的packages
[root@saltstack pip-1.5.6]#pip freeze
安装CherryPy，版本3.2.3

[root@saltstack ~]#pip install cherrypy==3.2.3
安装salt-api，版本0.8.3

[root@saltstack ~]#pip install salt-api==0.8.3
</code></pre><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><pre><code>[root@saltstack ~]# cd /etc/pki/tls/certs
[root@saltstack certs]# make testcert
umask 77 ; \\
    /usr/bin/openssl genrsa -aes128 2048 &gt; /etc/pki/tls/private/localhost.key
Generating RSA private key, 2048 bit long modulus
...+++
..................................................................+++
e is 65537 (0x10001)
Enter pass phrase:    #键入加密短语，4到8191个字符
Verifying - Enter pass phrase:    #确认加密短语
umask 77 ; \\
    /usr/bin/openssl req -utf8 -new -key /etc/pki/tls/private/localhost.key -x509 -days 365 -out /etc/pki/tls/certs/localhost.crt -set_serial 0
Enter pass phrase for /etc/pki/tls/private/localhost.key:    #再次输入相同的加密短语
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter &#39;.&#39;, the field will be left blank.
-----
Country Name (2 letter code) [XX]:CN    #都可以选填
State or Province Name (full name) []:Shanghai
Locality Name (eg, city) [Default City]:Shanghai
Organization Name (eg, company) [Default Company Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (eg, your name or your server&#39;s hostname) []:
Email Address []:1989051805@qq.com
[root@saltstack certs]# cd ../private/
[root@saltstack private]# openssl rsa -in localhost.key -out localhost_nopass.key
Enter pass phrase for localhost.key:    #输入之前的加密短语
writing RSA key
</code></pre><p>如果遇到这样的错误</p><pre><code>[root@saltstack certs]# make testcert
umask 77 ; \\
    /usr/bin/openssl req -utf8 -new -key /etc/pki/tls/private/localhost.key -x509 -days 365 -out /etc/pki/tls/certs/localhost.crt -set_serial 0
unable to load Private Key
139696733648712:error:0906D06C:PEM routines:PEM_read_bio:no start line:pem_lib.c:703:Expecting: ANY PRIVATE KEY
make: *** [/etc/pki/tls/certs/localhost.crt]
</code></pre><p>删掉文件/etc/pki/tls/private/localhost.key文件，然后再make testcert。</p><p>为salt-api创建用户并设定密码，用户名没有特别要求，我就用saltapi好了。</p><pre><code>[root@saltstack ~]#useradd -M -s /sbin/nologin saltapi
#由于是测试，故采用了弱密码&quot;password&quot;，正式环境必须采用强密码，多用特殊字符
[root@saltstack ~]# passwd saltapi
</code></pre><p>新增加配置文件/etc/salt/master.d/api.conf和/etc/salt/master.d/eauth.conf</p><pre><code>#该配置文件给予saltapi用户所有模块使用权限，出于安全考虑一般只给予特定模块使用权限
[root@saltstack master.d]# cat eauth.conf
external_auth:
  pam:
    saltapi:
      - .*
[root@saltstack master.d]#
[root@saltstack master.d]# cat api.conf
rest_cherrypy:
  port: 8888
  ssl_crt: /etc/pki/tls/certs/localhost.crt
  ssl_key: /etc/pki/tls/private/localhost_nopass.key
[root@saltstack master.d]#
</code></pre><p>寻找salt-api的启动脚本，我比较懒就不自己写了,在页面https://github.com/saltstack/salt-api/releases下载salt-api的tar.gz包,启动脚本在解压包的这个位置./pkg/rpm/salt-api。</p><p>不过提供的脚本貌似有个小的bug，就是使用restart参数时，salt-api能够stop但是不能start，如下：</p><pre><code>[root@saltstack ~]# /etc/init.d/salt-api restart
Stopping salt-api daemon:                                  [确定]
Starting salt-api daemon:                                  [失败]
</code></pre><p>我估计可能是有些相关资源在下次启动前没有来得及释放造成的，解决方法很简单在脚本的restart函数的stop和start之间加上sleep语句。</p><pre><code>restart() {
   stop
   sleep 1
   start
}
</code></pre><p>然后重启就没有问题了</p><pre><code>[root@saltstack ~]# /etc/init.d/salt-api restart
Stopping salt-api daemon:                                  [确定]
Starting salt-api daemon:                                  [确定]
[root@saltstack ~]#
</code></pre><p>最后重启salt-master在启动salt-api并将salt-api加入开机启动，安装就完成了。</p><pre><code>[root@saltstack ~]# chkconfig salt-api on
[root@saltstack ~]# /etc/init.d/salt-master restart
Stopping salt-master daemon:                               [确定]
Starting salt-master daemon:                               [确定]
[root@saltstack ~]# /etc/init.d/salt-api restart
Stopping salt-api daemon:                                  [确定]
Starting salt-api daemon:                                  [确定]
[root@saltstack ~]#
</code></pre><h2 id="使用-基本的使用方法" tabindex="-1"><a class="header-anchor" href="#使用-基本的使用方法"><span>使用（基本的使用方法）</span></a></h2><p>登录获取token</p><pre><code>[root@syndic02 ~]# curl -k https://192.168.186.134:8888/login -H &quot;Accept: application/x-yaml&quot; -d username=&#39;saltapi&#39; -d password=&#39;password&#39; -d eauth=&#39;pam&#39;
return:
- eauth: pam
  expire: 1416324685.2597771
  perms:
  - .*
  start: 1416281485.2597761
  token: 6171a922a9718ccb40e94ee7c8eb8768f4eea4e5
  user: saltapi
</code></pre><p>获取token后就可以使用token通信</p><pre><code>#相当于在salt-master本地执行salt \\* test.ping
[root@syndic02 ~]# curl -k https://192.168.186.134:8888/ -H &quot;Accept: application/x-yaml&quot; -H &quot;X-Auth-Token: 6171a922a9718ccb40e94ee7c8eb8768f4eea4e5&quot; -d client=&#39;local&#39; -d tgt=&#39;*&#39; -d fun=&#39;test.ping&#39;
return:
- syndic01: true
  syndic01-minion02: true
  syndic02: true
  syndic02-minion02: true
 
#相当于在salt-master本地执行salt \\* test.echo &#39;hello world&#39;
[root@syndic02 ~]# curl -k https://192.168.186.134:8888/ -H &quot;Accept: application/x-yaml&quot; -H &quot;X-Auth-Token: 6171a922a9718ccb40e94ee7c8eb8768f4eea4e5&quot; -d client=&#39;local&#39; -d tgt=&#39;*&#39; -d fun=&#39;test.echo&#39; -d arg=&#39;hello world&#39;
return:
- syndic01: hello world
  syndic01-minion02: hello world
  syndic02: hello world
  syndic02-minion02: hello world
[root@syndic02 ~]#
</code></pre><p>运维开发这样使用还是不方便的，下面写的是一个salt-api的类(其它的文章也提到过)可以参考。</p><pre><code>#!/usr/bin/env python
#coding=utf-8
 
import urllib2, urllib, json, re
 
class saltAPI:
    def __init__(self):
        self.__url = &#39;https://192.168.186.134:8888&#39;       #salt-api监控的地址和端口如:&#39;https://192.168.186.134:8888&#39;
        self.__user =  &#39;saltapi&#39;             #salt-api用户名
        self.__password = &#39;password&#39;          #salt-api用户密码
        self.__token_id = self.salt_login()
 
    def salt_login(self):
        params = {&#39;eauth&#39;: &#39;pam&#39;, &#39;username&#39;: self.__user, &#39;password&#39;: self.__password}
        encode = urllib.urlencode(params)
        obj = urllib.unquote(encode)
        headers = {&#39;X-Auth-Token&#39;:&#39;&#39;}
        url = self.__url + &#39;/login&#39;
        req = urllib2.Request(url, obj, headers)
        opener = urllib2.urlopen(req)
        content = json.loads(opener.read())
        try:
            token = content[&#39;return&#39;][0][&#39;token&#39;]
            return token
        except KeyError:
            raise KeyError
 
    def postRequest(self, obj, prefix=&#39;/&#39;):
        url = self.__url + prefix
        headers = {&#39;X-Auth-Token&#39;   : self.__token_id}
        req = urllib2.Request(url, obj, headers)
        opener = urllib2.urlopen(req)
        content = json.loads(opener.read())
        return content[&#39;return&#39;]
 
    def saltCmd(self, params):
        obj = urllib.urlencode(params)
        obj, number = re.subn(&quot;arg\\d&quot;, &#39;arg&#39;, obj)
        res = self.postRequest(obj)
        return res
 
def main():
    #以下是用来测试saltAPI类的部分
    sapi = saltAPI()
    params = {&#39;client&#39;:&#39;local&#39;, &#39;fun&#39;:&#39;test.ping&#39;, &#39;tgt&#39;:&#39;*&#39;}
    #params = {&#39;client&#39;:&#39;local&#39;, &#39;fun&#39;:&#39;test.ping&#39;, &#39;tgt&#39;:&#39;某台服务器的key&#39;}
    #params = {&#39;client&#39;:&#39;local&#39;, &#39;fun&#39;:&#39;test.echo&#39;, &#39;tgt&#39;:&#39;某台服务器的key&#39;, &#39;arg1&#39;:&#39;hello&#39;}
    #params = {&#39;client&#39;:&#39;local&#39;, &#39;fun&#39;:&#39;test.ping&#39;, &#39;tgt&#39;:&#39;某组服务器的组名&#39;, &#39;expr_form&#39;:&#39;nodegroup&#39;}
    test = sapi.saltCmd(params)
    print test
 
if __name__ == &#39;__main__&#39;:
    main()
</code></pre><p>测试效果</p><pre><code>[root@syndic02 ~]# python salt-api.py
[{u&#39;syndic02&#39;: True, u&#39;syndic02-minion02&#39;: True, u&#39;syndic01&#39;: True, u&#39;syndic01-minion02&#39;: True}]
[root@syndic02 ~]#
</code></pre><p>以上只是一些基本的实例，salt-api还可以实现更多功能。</p><h2 id="_2016-5-30-update" tabindex="-1"><a class="header-anchor" href="#_2016-5-30-update"><span>2016-5-30 update：</span></a></h2><p>当前salt版本：<code>2016.3</code>，官网对salt各模块安装配置文档做了整理重拍，更加清晰明了。</p><p>前段时间试着按官方的文档搭建了下salt环境，感觉安装更简单了，下面更新下 salt-api的安装：</p><pre><code># https://docs.saltstack.com/en/latest/ref/netapi/all/salt.netapi.rest_cherrypy.html
# 1、安装 salt-api 
yum install salt-api 

# 2、生成 https ssl 证书
salt-call --local tls.create_self_signed_cert

# 3、向master 配置文件中增加：
rest_cherrypy:
port: 8000
ssl_crt: /etc/pki/tls/certs/localhost.crt
ssl_key: /etc/pki/tls/certs/localhost.key

# 4、创建salt 用户
[root@saltstack ~]# useradd -M -s /sbin/nologin salt
[root@saltstack ~]# passwd salt
# 修改 master 配置信息
external_auth:
  pam:
    saltapi:
      - .*  
# 5、增加 api 访问信息
 rest_cherrypy:
   port: 8888
   ssl_crt: /etc/pki/tls/certs/localhost.crt
   ssl_key: /etc/pki/tls/private/localhost_nopass.key
</code></pre><p>到此，salt-api 安装配置完成。需要注意的是，有时候 yum 和 pip 使用的python 并不是一个，所以有些依赖包安装的时候，尽量统一使用一种包管理管理工具。</p>`,39)])])}const i=e(o,[["render",r]]),c=JSON.parse('{"path":"/pages/5b27d6/","title":"SaltStack学习笔记2-- salt-api安装配置(转载)","lang":"zh-CN","frontmatter":{"title":"SaltStack学习笔记2-- salt-api安装配置(转载)","tags":["salt"],"permalink":"/pages/5b27d6/","createTime":"2023/09/08 17:36:02","description":"原文地址：http://www.xiaomastack.com/2014/11/18/salt-api/ salt-api也用了一段时间了，现在从安装、配置、使用三个方面梳理下知识。 安装 采用pip安装方便快捷，当然编译安装也很nice。 安装pip采用的编译安装的方式，版本当前最新1.5.6，下载、解压、编译、安装是不变的法则。 配置 如果遇到这样...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SaltStack学习笔记2-- salt-api安装配置(转载)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/5b27d6/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"SaltStack学习笔记2-- salt-api安装配置(转载)"}],["meta",{"property":"og:description","content":"原文地址：http://www.xiaomastack.com/2014/11/18/salt-api/ salt-api也用了一段时间了，现在从安装、配置、使用三个方面梳理下知识。 安装 采用pip安装方便快捷，当然编译安装也很nice。 安装pip采用的编译安装的方式，版本当前最新1.5.6，下载、解压、编译、安装是不变的法则。 配置 如果遇到这样..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"salt"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":5.12,"words":1537},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"05.运维/21.salt/02.Salt-api.md","headers":[],"categoryList":[{"id":"8091bd","sort":5,"name":"运维"},{"id":"46d221","sort":21,"name":"salt"}]}');export{i as comp,c as data};
