import{_ as e,c as n,a,o as i}from"./app-Cpl7-wzY.js";const o={};function s(l,t){return i(),n("div",null,[...t[0]||(t[0]=[a(`<h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q &amp; A：</span></a></h3><p>修改minion 的配置文件中master 的值后，启动报错，如下：</p><pre><code>Traceback (most recent call last):
  File &quot;/usr/lib/python2.6/site-packages/salt/scripts.py&quot;, line 81, in minion_process
    minion.start()
  File &quot;/usr/lib/python2.6/site-packages/salt/cli/daemons.py&quot;, line 277, in start
    self.minion.tune_in()
  File &quot;/usr/lib/python2.6/site-packages/salt/minion.py&quot;, line 1648, in tune_in
    self.sync_connect_master()
  File &quot;/usr/lib/python2.6/site-packages/salt/minion.py&quot;, line 720, in sync_connect_master
    self.io_loop.start()
  File &quot;/usr/lib64/python2.6/site-packages/zmq/eventloop/ioloop.py&quot;, line 151, in start
    super(ZMQIOLoop, self).start()
  File &quot;/usr/lib64/python2.6/site-packages/tornado/ioloop.py&quot;, line 809, in start
    self._run_callback(callback)
  File &quot;/usr/lib64/python2.6/site-packages/tornado/ioloop.py&quot;, line 591, in _run_callback
    ret = callback()
  File &quot;/usr/lib64/python2.6/site-packages/tornado/stack_context.py&quot;, line 274, in null_wrapper
    return fn(*args, **kwargs)
  File &quot;/usr/lib64/python2.6/site-packages/tornado/gen.py&quot;, line 963, in &lt;lambda&gt;
    self.future, lambda f: self.run())
  File &quot;/usr/lib64/python2.6/site-packages/tornado/gen.py&quot;, line 879, in run
    yielded = self.gen.send(value)
  File &quot;/usr/lib/python2.6/site-packages/salt/crypt.py&quot;, line 553, in sign_in
    raise SaltSystemExit(&#39;Invalid master key&#39;)
SaltSystemExit: Invalid master key
</code></pre><h3 id="引起原因" tabindex="-1"><a class="header-anchor" href="#引起原因"><span>引起原因</span></a></h3><p>认证key的错误造成。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案：</span></a></h3><ul><li><p>1、删除 <code>/etc/salt/pki</code> 目录，</p></li><li><p>2、重启 minion，在master端认证即可。</p></li></ul>`,7)])])}const p=e(o,[["render",s]]),c=JSON.parse('{"path":"/pages/55e3ee/","title":"salt minion 启动问题","lang":"zh-CN","frontmatter":{"title":"salt minion 启动问题","tags":["QA","salt"],"permalink":"/pages/55e3ee/","createTime":"2023/09/08 17:36:02","description":"Q & A： 修改minion 的配置文件中master 的值后，启动报错，如下： 引起原因 认证key的错误造成。 解决方案： 1、删除 /etc/salt/pki 目录， 2、重启 minion，在master端认证即可。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"salt minion 启动问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/55e3ee/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"salt minion 启动问题"}],["meta",{"property":"og:description","content":"Q & A： 修改minion 的配置文件中master 的值后，启动报错，如下： 引起原因 认证key的错误造成。 解决方案： 1、删除 /etc/salt/pki 目录， 2、重启 minion，在master端认证即可。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"salt"}],["meta",{"property":"article:tag","content":"QA"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":0.62,"words":185},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"05.运维/21.salt/06.Salt-minion.md","headers":[],"categoryList":[{"id":"8091bd","sort":5,"name":"运维"},{"id":"46d221","sort":21,"name":"salt"}]}');export{p as comp,c as data};
