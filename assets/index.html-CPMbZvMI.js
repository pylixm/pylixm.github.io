import{_ as t,c as e,a as s,o as n}from"./app-Cpl7-wzY.js";const r={};function i(l,a){return n(),e("div",null,[...a[0]||(a[0]=[s(`<h2 id="saltstack-架构" tabindex="-1"><a class="header-anchor" href="#saltstack-架构"><span>saltstack 架构</span></a></h2><p>saltstack 是基于python开发的一套 c/s架构配置管理工具。底层使用ZeraMQ消息队列的发布与订阅（pub/sub）方式通信，使用SSL证书签发的方式进行认证管理。</p><h2 id="saltstack-组件" tabindex="-1"><a class="header-anchor" href="#saltstack-组件"><span>saltstack 组件</span></a></h2><h3 id="管理对象-target" tabindex="-1"><a class="header-anchor" href="#管理对象-target"><span>管理对象 Target</span></a></h3><p>target 匹配，</p><pre><code>-E , --pcre 正则匹配
-L , --list 列表匹配
-G , --grain grains值匹配
--gran-pcre grains加正则
-N , --nodegroup 组匹配
-R , --range 范围匹配
-C , --compound 综合匹配
-I , --pillar pillar 值匹配
-S , --ipcidr minions 网段匹配
</code></pre><h3 id="grains-组件" tabindex="-1"><a class="header-anchor" href="#grains-组件"><span>Grains 组件</span></a></h3><p>grains 组件是saltstack记录minion的一些静态信息的组件。</p><pre><code># 查看Grains组件的函数
salt &#39;*&#39; sys.list_functions grains 

# 查看具体函数的使用方法
salt &#39;*&#39; sys.doc grains 
</code></pre><p>除了自带的grains外，还可以自己定义，定义方法：</p><ul><li>通过minion 配置文件，将Grains信息配置写在minion配置文件中。</li><li>通过grains 相关模块定义，使用Grains 模块添加或删除grains信息。</li><li>通过python 脚本定义</li></ul><h3 id="pillar-组件" tabindex="-1"><a class="header-anchor" href="#pillar-组件"><span>Pillar 组件</span></a></h3><p>pillar 用来存储和定义配置管理中需要的一些信息。</p><pre><code># 查看pillar组件的函数
salt &#39;*&#39; sys.list_functions pillar 

# 查看具体函数的使用方法
salt &#39;*&#39; sys.doc pillar
</code></pre><h3 id="module-组件" tabindex="-1"><a class="header-anchor" href="#module-组件"><span>Module 组件</span></a></h3><p>用来管理对象操作，是saltstack通过push方式管理的入口。</p><pre><code># 查看所有modules
salt &#39;*&#39; sys.list_modules
# 查看具体module的函数
salt &#39;*&#39; sys.list_functions cmd 
# 查看module的用法
salt &#39;*&#39; sys.doc cmd
</code></pre><h3 id="states-组件" tabindex="-1"><a class="header-anchor" href="#states-组件"><span>States 组件</span></a></h3><p>states sls 文件用来描述和实现配置管理的功能。</p><pre><code># 查看所有states
salt &#39;*&#39; sys.list_states_modules
# 查看具体states的函数
salt &#39;*&#39; sys.list_states_functions file
# 查看states的用法
salt &#39;*&#39; sys.state_doc file
</code></pre><h3 id="return-组件" tabindex="-1"><a class="header-anchor" href="#return-组件"><span>Return 组件</span></a></h3><p>对minion执行的返回结果进行存储或返回给其他程序。</p><pre><code># 查看所有return 
salt &#39;*&#39; sys.list_returners
</code></pre><p>目前saltstack 以支持master和minion端，两种方式return数据到存储服务器。</p><h3 id="job" tabindex="-1"><a class="header-anchor" href="#job"><span>job</span></a></h3><p>saltstack 执行任何一个操作都会在Master上产生一个jid号。master和minion会产生一jid命名的job文件，里面存了此次操作的详细信息。</p><p>job管理的方式：</p><ul><li><code>salt-run</code></li><li>salt自带模块 <code>saltutil</code></li></ul><h3 id="event-和reactor" tabindex="-1"><a class="header-anchor" href="#event-和reactor"><span>Event 和Reactor</span></a></h3><p>event 是对每个事件的一个记录，比job更底层，更加详细。包括认证、minion和master 的链接，key认证，job等。</p><ul><li><code>salt-run state.event pretty=True</code> 查看event事件</li></ul><p>reactor 是对event的监听，基于event的事件来做相应的操作。</p><h3 id="renderer" tabindex="-1"><a class="header-anchor" href="#renderer"><span>Renderer</span></a></h3><p>renderer 是编写state.sls 文件的途径的统一称呼。默认的renderer语法是YAML+ jinja。</p><p>比较流行的方式：</p><ul><li>python</li><li>yaml</li><li>jinja</li></ul>`,36)])])}const p=t(r,[["render",i]]),c=JSON.parse('{"path":"/pages/52bf29/","title":"Saltstack学习笔记-组件篇","lang":"zh-CN","frontmatter":{"title":"Saltstack学习笔记-组件篇","tags":["salt"],"permalink":"/pages/52bf29/","createTime":"2023/09/08 17:36:02","description":"saltstack 架构 saltstack 是基于python开发的一套 c/s架构配置管理工具。底层使用ZeraMQ消息队列的发布与订阅（pub/sub）方式通信，使用SSL证书签发的方式进行认证管理。 saltstack 组件 管理对象 Target target 匹配， Grains 组件 grains 组件是saltstack记录minion...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Saltstack学习笔记-组件篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/52bf29/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"Saltstack学习笔记-组件篇"}],["meta",{"property":"og:description","content":"saltstack 架构 saltstack 是基于python开发的一套 c/s架构配置管理工具。底层使用ZeraMQ消息队列的发布与订阅（pub/sub）方式通信，使用SSL证书签发的方式进行认证管理。 saltstack 组件 管理对象 Target target 匹配， Grains 组件 grains 组件是saltstack记录minion..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"salt"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":2.07,"words":621},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"05.运维/21.salt/04.Salt-plugin.md","headers":[],"categoryList":[{"id":"8091bd","sort":5,"name":"运维"},{"id":"46d221","sort":21,"name":"salt"}]}');export{p as comp,c as data};
