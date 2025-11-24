import{_ as t,c as o,a as n,o as r}from"./app-Cpl7-wzY.js";const a={};function i(s,e){return r(),o("div",null,[...e[0]||(e[0]=[n(`<h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q &amp; A：</span></a></h3><p>今天在搭建测试环境时遇到问题，如下</p><pre><code>*** WARNING: you are running uWSGI without its master process manager ***
your processes number limit is 65535
your memory page size is 4096 bytes
detected max file descriptor number: 65536
lock engine: pthread robust mutexes
thunder lock: disabled (you can enable it with --thunder-lock)
uwsgi socket 0 bound to TCP address 0.0.0.0:8002 fd 3
Python version: 2.6.6 (r266:84292, Jan 22 2014, 09:42:36)  [GCC 4.4.7 20120313 (Red Hat 4.4.7-4)]
Set PythonHome to /usr/local/cms_env
&#39;import site&#39; failed; use -v for traceback
Python main interpreter initialized at 0x2841d20
python threads support enabled
your server socket listen backlog is limited to 100 connections
your mercy for graceful operations on workers is 60 seconds
mapped 1123328 bytes (1097 KB) for 16 cores
*** Operational MODE: preforking+threaded ***
Traceback (most recent call last):
  File &quot;./cms/wsgi.py&quot;, line 16, in &lt;module&gt;
    import os
ImportError: No module named os
unable to load app 0 (mountpoint=&#39;&#39;) (callable not found or import error)
*** no app loaded. going in full dynamic mode ***
*** uWSGI is running in multiple interpreter mode ***
spawned uWSGI worker 1 (pid: 16882, cores: 2)
spawned uWSGI worker 2 (pid: 16886, cores: 2)
spawned uWSGI worker 3 (pid: 16887, cores: 2)
spawned uWSGI worker 4 (pid: 16888, cores: 2)
spawned uWSGI worker 5 (pid: 16891, cores: 2)
</code></pre><p>导致uwsgi 启动失败。仔细查看以上日志，python 的版本为2.6，自己明明已经升级为2.7了。在命令行打印python版本也是2.7，如下：</p><pre><code>Python 2.7.10 (default, Nov 20 2015, 19:10:34) 
[GCC 4.4.7 20120313 (Red Hat 4.4.7-11)] on linux2
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt; 
</code></pre><p>如何应该是虚拟环境的路径问题，导致python的路径出错。查看文档，虚拟环境的路径 使用 home/virtualenv（http://uwsgi-docs.readthedocs.org/en/latest/Python.html?highlight=virtualenv） 来定义。我的配置文件如下：</p><pre><code>[uwsgi]
socket = 0.0.0.0:80
chdir = /usr/local/mysite/
module = mysite.wsgi:application
virtualenv = /usr/local/mysite_env
processes = 8
threads = 2
daemonize = /usr/local/mysite/mysite.log
pid-file = /usr/local/mysite/mysite_uwsgi.pid
vacuum = True
buffer-size = 32768
</code></pre><p>仔细核对应该没有什么问题。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案：</span></a></h3><p>经过查询，果然有人遇到和我一样的错误。参考其，解决办法，果然得到了解决。</p><p>大致原因如下：</p><p>uwsgi的版本是在python2.6下编译安装的，所以调用时，它默认使用了2.6。 重新卸载uwsgi，在python2.7下编译安装，即可解决此类问题。</p><p>另： 在 virtualenv 下安装的uwsgi 直接使用uwsgi或 绝对路径即可，注意与 /usr/bin/uwsgi /usr/local/bin/uwsgi 两路径下的版本区别。</p><hr><h4 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考：</span></a></h4><p><a href="http://stackoverflow.com/questions/25757552/importerror-no-module-named-os-uwsgi-django-linux" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/25757552/importerror-no-module-named-os-uwsgi-django-linux</a></p>`,16)])])}const d=t(a,[["render",i]]),c=JSON.parse('{"path":"/pages/c871fa/","title":"Django uwsgi 启动问题 ImportError No module named os","lang":"zh-CN","frontmatter":{"title":"Django uwsgi 启动问题 ImportError No module named os","tags":["QA","Django"],"permalink":"/pages/c871fa/","createTime":"2023/09/08 17:36:02","description":"Q & A： 今天在搭建测试环境时遇到问题，如下 导致uwsgi 启动失败。仔细查看以上日志，python 的版本为2.6，自己明明已经升级为2.7了。在命令行打印python版本也是2.7，如下： 如何应该是虚拟环境的路径问题，导致python的路径出错。查看文档，虚拟环境的路径 使用 home/virtualenv（http://uwsgi-doc...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Django uwsgi 启动问题 ImportError No module named os\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/c871fa/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"Django uwsgi 启动问题 ImportError No module named os"}],["meta",{"property":"og:description","content":"Q & A： 今天在搭建测试环境时遇到问题，如下 导致uwsgi 启动失败。仔细查看以上日志，python 的版本为2.6，自己明明已经升级为2.7了。在命令行打印python版本也是2.7，如下： 如何应该是虚拟环境的路径问题，导致python的路径出错。查看文档，虚拟环境的路径 使用 home/virtualenv（http://uwsgi-doc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"Django"}],["meta",{"property":"article:tag","content":"QA"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":1.84,"words":553},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"01.开发语言/01.Python/02.Django/34.Django-uwsgi.md","headers":[],"categoryList":[{"id":"59843f","sort":1,"name":"开发语言"},{"id":"9d2a49","sort":1,"name":"Python"},{"id":"f8691d","sort":2,"name":"Django"}]}');export{d as comp,c as data};
