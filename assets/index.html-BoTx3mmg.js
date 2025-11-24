import{_ as a,c as i,b as e,a as l,e as p,w as t,r as d,o as r,d as c}from"./app-Cpl7-wzY.js";const v={};function m(o,s){const n=d("VPLink");return r(),i("div",null,[e("p",null,[p(n,{href:"/pages/39558d/"},{default:t(()=>[...s[0]||(s[0]=[c("其他章节索引页",-1)])]),_:1})]),s[1]||(s[1]=l(`<h1 id="第三章-如何布局-django-项目" tabindex="-1"><a class="header-anchor" href="#第三章-如何布局-django-项目"><span>第三章 如何布局 django 项目</span></a></h1><h2 id="建议布局" tabindex="-1"><a class="header-anchor" href="#建议布局"><span>建议布局</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>&lt;repository_root&gt;/</span></span>
<span class="line"><span>    &lt;django_project_root&gt;/</span></span>
<span class="line"><span>        &lt;configuration_root&gt;/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>repository_root</code> 本层放置文件：</p><ul><li>README.rst</li><li>docs/</li><li>directory</li><li>.gitignore</li><li>requirements.txt</li></ul></li><li><p><code>django_project_root</code> 本目录是django项目根目录</p></li><li><p><code>configuration_root</code> django项目配置目录</p></li></ul><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-python"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">icecreamratings_project</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    .</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gitignore</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Makefile</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    docs</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    README</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">rst</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    requirements</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">txt</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    icecreamratings</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        manage</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">py</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        media</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # Development ONLY!</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        products</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        profiles</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        ratings</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        templates</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        config</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            __init__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">py</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            settings</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            urls</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">py</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            wsgi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>扩展：</strong></p><p>推荐的 cookiecutter 生成的项目目录：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>mysite</span></span>
<span class="line"><span>├── config</span></span>
<span class="line"><span>│   ├── __init__.py</span></span>
<span class="line"><span>│   ├── settings</span></span>
<span class="line"><span>│   │   ├── common.py</span></span>
<span class="line"><span>│   │   ├── __init__.py</span></span>
<span class="line"><span>│   │   ├── local.py</span></span>
<span class="line"><span>│   │   └── production.py</span></span>
<span class="line"><span>│   ├── urls.py</span></span>
<span class="line"><span>│   └── wsgi.py</span></span>
<span class="line"><span>├── CONTRIBUTORS.txt</span></span>
<span class="line"><span>├── docs</span></span>
<span class="line"><span>│   ├── conf.py</span></span>
<span class="line"><span>│   ├── deploy.rst</span></span>
<span class="line"><span>│   ├── docker_ec2.rst</span></span>
<span class="line"><span>│   ├── index.rst</span></span>
<span class="line"><span>│   ├── __init__.py</span></span>
<span class="line"><span>│   ├── install.rst</span></span>
<span class="line"><span>│   ├── make.bat</span></span>
<span class="line"><span>│   └── Makefile</span></span>
<span class="line"><span>├── env.example</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── manage.py</span></span>
<span class="line"><span>├── mysite</span></span>
<span class="line"><span>│   ├── contrib</span></span>
<span class="line"><span>│   │   ├── __init__.py</span></span>
<span class="line"><span>│   │   └── sites</span></span>
<span class="line"><span>│   │       ├── __init__.py</span></span>
<span class="line"><span>│   │       └── migrations</span></span>
<span class="line"><span>│   │           ├── 0001_initial.py</span></span>
<span class="line"><span>│   │           ├── 0002_set_site_domain_and_name.py</span></span>
<span class="line"><span>│   │           └── __init__.py</span></span>
<span class="line"><span>│   ├── __init__.py</span></span>
<span class="line"><span>│   ├── static</span></span>
<span class="line"><span>│   │   ├── css</span></span>
<span class="line"><span>│   │   │   └── project.css</span></span>
<span class="line"><span>│   │   ├── fonts</span></span>
<span class="line"><span>│   │   ├── images</span></span>
<span class="line"><span>│   │   │   └── favicon.ico</span></span>
<span class="line"><span>│   │   ├── js</span></span>
<span class="line"><span>│   │   │   └── project.js</span></span>
<span class="line"><span>│   │   └── sass</span></span>
<span class="line"><span>│   │       └── project.scss</span></span>
<span class="line"><span>│   ├── templates</span></span>
<span class="line"><span>│   │   ├── 404.html</span></span>
<span class="line"><span>│   │   ├── 500.html</span></span>
<span class="line"><span>│   │   ├── account</span></span>
<span class="line"><span>│   │   │   ├── base.html</span></span>
<span class="line"><span>│   │   │   ├── email_confirmed.html</span></span>
<span class="line"><span>│   │   │   ├── email_confirm.html</span></span>
<span class="line"><span>│   │   │   ├── email.html</span></span>
<span class="line"><span>│   │   │   ├── login.html</span></span>
<span class="line"><span>│   │   │   ├── logout.html</span></span>
<span class="line"><span>│   │   │   ├── password_change.html</span></span>
<span class="line"><span>│   │   │   ├── password_reset_done.html</span></span>
<span class="line"><span>│   │   │   ├── password_reset_from_key_done.html</span></span>
<span class="line"><span>│   │   │   ├── password_reset_from_key.html</span></span>
<span class="line"><span>│   │   │   ├── password_reset.html</span></span>
<span class="line"><span>│   │   │   ├── password_set.html</span></span>
<span class="line"><span>│   │   │   ├── signup_closed.html</span></span>
<span class="line"><span>│   │   │   ├── signup.html</span></span>
<span class="line"><span>│   │   │   ├── verification_sent.html</span></span>
<span class="line"><span>│   │   │   └── verified_email_required.html</span></span>
<span class="line"><span>│   │   ├── base.html</span></span>
<span class="line"><span>│   │   ├── pages</span></span>
<span class="line"><span>│   │   │   ├── about.html</span></span>
<span class="line"><span>│   │   │   └── home.html</span></span>
<span class="line"><span>│   │   └── users</span></span>
<span class="line"><span>│   │       ├── user_detail.html</span></span>
<span class="line"><span>│   │       ├── user_form.html</span></span>
<span class="line"><span>│   │       └── user_list.html</span></span>
<span class="line"><span>│   └── users</span></span>
<span class="line"><span>│       ├── adapters.py</span></span>
<span class="line"><span>│       ├── admin.py</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       ├── migrations</span></span>
<span class="line"><span>│       │   ├── 0001_initial.py</span></span>
<span class="line"><span>│       │   └── __init__.py</span></span>
<span class="line"><span>│       ├── models.py</span></span>
<span class="line"><span>│       ├── tests</span></span>
<span class="line"><span>│       │   ├── factories.py</span></span>
<span class="line"><span>│       │   ├── __init__.py</span></span>
<span class="line"><span>│       │   ├── test_admin.py</span></span>
<span class="line"><span>│       │   ├── test_models.py</span></span>
<span class="line"><span>│       │   └── test_views.py</span></span>
<span class="line"><span>│       ├── urls.py</span></span>
<span class="line"><span>│       └── views.py</span></span>
<span class="line"><span>├── pytest.ini</span></span>
<span class="line"><span>├── README.rst</span></span>
<span class="line"><span>├── requirements</span></span>
<span class="line"><span>│   ├── base.txt</span></span>
<span class="line"><span>│   ├── local.txt</span></span>
<span class="line"><span>│   ├── production.txt</span></span>
<span class="line"><span>│   └── test.txt</span></span>
<span class="line"><span>├── setup.cfg</span></span>
<span class="line"><span>└── utility</span></span>
<span class="line"><span>    ├── install_os_dependencies.sh</span></span>
<span class="line"><span>    ├── install_python_dependencies.sh</span></span>
<span class="line"><span>    ├── requirements.apt</span></span>
<span class="line"><span>    └── requirements.apt.xenial</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8))])}const u=a(v,[["render",m]]),k=JSON.parse('{"path":"/pages/73eeea/","title":"Django 最佳实践-读书笔记 - 第三章 如何布局 django 项目","lang":"zh-CN","frontmatter":{"title":"Django 最佳实践-读书笔记 - 第三章 如何布局 django 项目","tags":["Django","Django最佳实践"],"permalink":"/pages/73eeea/","createTime":"2023/09/08 17:36:02","description":"第三章 如何布局 django 项目 建议布局 repository_root 本层放置文件： README.rst docs/ directory .gitignore requirements.txt django_project_root 本目录是django项目根目录 configuration_root django项目配置目录 扩展： 推荐...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Django 最佳实践-读书笔记 - 第三章 如何布局 django 项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/73eeea/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"Django 最佳实践-读书笔记 - 第三章 如何布局 django 项目"}],["meta",{"property":"og:description","content":"第三章 如何布局 django 项目 建议布局 repository_root 本层放置文件： README.rst docs/ directory .gitignore requirements.txt django_project_root 本目录是django项目根目录 configuration_root django项目配置目录 扩展： 推荐..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"Django最佳实践"}],["meta",{"property":"article:tag","content":"Django"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":0.76,"words":228},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"01.开发语言/01.Python/03.Best.Practices.for.Django/03.Best.Practices.for.Django.1.8.3rd-Chapter-3.md","headers":[],"categoryList":[{"id":"59843f","sort":1,"name":"开发语言"},{"id":"9d2a49","sort":1,"name":"Python"},{"id":"34f757","sort":3,"name":"Best.Practices.for.Django"}]}');export{u as comp,k as data};
