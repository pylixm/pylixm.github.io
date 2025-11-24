import{_ as t,c as o,a as n,o as s}from"./app-Cpl7-wzY.js";const a={};function r(p,e){return s(),o("div",null,[...e[0]||(e[0]=[n(`<h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q &amp; A：</span></a></h3><p>今天在使用python直接链接数据库时报错 <code>_mysql_exceptions.OperationalError: (2002, &quot;Can&#39;t connect to local MySQL server through socket &#39;/var/lib/mysql/mysql.sock&#39; (2)&quot;)</code></p><p>代码：</p><pre><code>db = MySQLdb.connect(host=&#39;localhost&#39;,
                     port=3306,
                     user=&#39;root&#39;,
                     passwd=&#39;root&#39;,
                     db=&#39;mydb&#39;)
</code></pre><p>错误：</p><pre><code>Traceback (most recent call last):
  File &quot;./data_db.py&quot;, line 5, in &lt; module&gt;
    db=&#39;mydb&#39;)
  File &quot;/usr/local/env/lib/python2.7/site-packages/MySQLdb/__init__.py&quot;, line 81, in Connect
  File &quot;/usr/local/env/lib/python2.7/site-packages/MySQLdb/connections.py&quot;, line 187, in __init__
_mysql_exceptions.OperationalError: (2002, &quot;Can&#39;t connect to local MySQL server through socket &#39;/var/lib/mysql/mysql.sock&#39; (2)&quot;)
</code></pre><h3 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因：</span></a></h3><p>从网上查找原因找到如下描述：</p><p>因为我们连接mysql的时候，host用的是localhost, 实际用的是UNIX Domain Socket（具体见参考文献(1)）来进行通信的。</p><p>我们知道，UNIX Domain Socket的地址是一个socket类型的文件在文件系统中的路径，如果这个路径不存在的话，连接的时候就会失败。</p><p>上面提示的错误原因是”Can’t connect to local MySQL server through socket ‘/var/lib/mysql/mysql.sock’ (2)”，</p><p>从字面意思上来看，是说无法通过’/var/lib/mysql/mysql.sock’这个socket来连接本地的mysql sever，这时候问题基本就比较明显了，</p><p>应该是mysql配置的本地连接的socket不是’/var/lib/mysql/mysql.sock’这个路径的原因。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案：</span></a></h3><p>（1）在python MySQLdb连接的时候，指定所用的unix_socket</p><pre><code>db = MySQLdb.connect(host=&#39;localhost&#39;,
                     port=3306,
                     user=&#39;root&#39;,
                     passwd=&#39;root&#39;,
                     db=&#39;mydb&#39;,
                     unix_socket=&#39;/tmp/mysql.sock&#39;)
</code></pre><p>（2）修改本地mysql server的UNIX Domain Socket</p><pre><code># The following options will be passed to all MySQL clients
[client]
#password       = your_password
port            = 3306
socket          = /var/lib/mysql/mysql.sock
 
# The MySQL server
[mysqld]
bind-address = your ip
port            = 3306
socket          = /var/lib/mysql/mysql.sock
</code></pre><p>（3）修改本地mysql server支持远程访问（具体见参考文献(2)），采用普通socket进行连接</p><p>db = MySQLdb.connect(host=&#39;your ip&#39;, port=3306, user=&#39;root&#39;, passwd=&#39;root&#39;, db=&#39;mysite&#39;)</p><h4 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h4><ul><li><a href="http://www.wuzesheng.com/?p=2234" target="_blank" rel="noopener noreferrer">http://www.wuzesheng.com/?p=2234</a></li></ul>`,22)])])}const c=t(a,[["render",r]]),i=JSON.parse(`{"path":"/pages/eafe5a/","title":"python的MySQLdb模块 连接 mysql 错误","lang":"zh-CN","frontmatter":{"title":"python的MySQLdb模块 连接 mysql 错误","tags":["Mysql"],"permalink":"/pages/eafe5a/","createTime":"2023/09/08 17:36:02","description":"Q & A： 今天在使用python直接链接数据库时报错 _mysql_exceptions.OperationalError: (2002, \\"Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2)\\") 代码： 错误： 原因： 从网上查找原因...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"python的MySQLdb模块 连接 mysql 错误\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/eafe5a/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"python的MySQLdb模块 连接 mysql 错误"}],["meta",{"property":"og:description","content":"Q & A： 今天在使用python直接链接数据库时报错 _mysql_exceptions.OperationalError: (2002, \\"Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2)\\") 代码： 错误： 原因： 从网上查找原因..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":1.39,"words":416},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"08.数据库/01.mysql/02.Mysql-python.md","headers":[],"categoryList":[{"id":"750c15","sort":8,"name":"数据库"},{"id":"067b77","sort":1,"name":"mysql"}]}`);export{c as comp,i as data};
