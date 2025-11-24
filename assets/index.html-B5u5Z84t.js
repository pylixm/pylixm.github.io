import{_ as n,c as i,a,o as e}from"./app-Cpl7-wzY.js";const l={};function p(d,s){return e(),i("div",null,[...s[0]||(s[0]=[a(`<p>随着Docker的普及成熟，已经逐渐成为部署项目的首选，今天来和大家分享下如何使用docker部署django技术栈项目。</p><p>我们这里说的Django技术栈为：python3.6、Django2.2、redis、mysql、celery、gunicorn和nginx。在实际的生产项目中，这些组件分布在集群的不同机器，如Nginx、redis和Mysql可能会有单独的团队或部门负责。涉及的部署架构和容器的编排会更为复杂，本文暂不去深究。本文主要介绍，如何使用<code>docker-compose</code>来编排这些组件，这种方式适用于测试环境的部署或者你的个人<code>sideproject</code>的部署。</p><p>本文默认你已经了解<code>docker</code>和<code>docker-compose</code>的一些基本知识，若你不了解，可阅读下面这些资料：</p><ul><li><a href="https://pylixm.cc/posts/2018-05-31-Docker-all.html" target="_blank" rel="noopener noreferrer">Docker知识大全</a></li><li><a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">Docker官方文档</a></li><li><a href="https://docs.docker.com/compose/" target="_blank" rel="noopener noreferrer">Docker Compose文档</a></li></ul><p>下面我们来说下如何部署。</p><h2 id="项目组织结构" tabindex="-1"><a class="header-anchor" href="#项目组织结构"><span>项目组织结构</span></a></h2><p>首先，看下我们的项目组织结构，结构如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── compose</span></span>
<span class="line"><span>│   ├── celery</span></span>
<span class="line"><span>│   │   ├── Dockerfile</span></span>
<span class="line"><span>│   │   ├── celery-beat.sh</span></span>
<span class="line"><span>│   │   └── celery.sh</span></span>
<span class="line"><span>│   ├── mysql</span></span>
<span class="line"><span>│   │   └── my.cnf</span></span>
<span class="line"><span>│   ├── nginx</span></span>
<span class="line"><span>│   │   └── nginx.conf</span></span>
<span class="line"><span>│   └── web</span></span>
<span class="line"><span>│       ├── Dockerfile</span></span>
<span class="line"><span>│       ├── entrypoint.sh</span></span>
<span class="line"><span>│       ├── gunicorn.conf</span></span>
<span class="line"><span>│       └── gunicorn.sh</span></span>
<span class="line"><span>├── docker-compose.yml</span></span>
<span class="line"><span>├── docker_django_demo</span></span>
<span class="line"><span>│   ├── __init__.py</span></span>
<span class="line"><span>│   ├── celery.py</span></span>
<span class="line"><span>│   ├── settings.py</span></span>
<span class="line"><span>│   ├── urls.py</span></span>
<span class="line"><span>│   └── wsgi.py</span></span>
<span class="line"><span>├── env.tpl</span></span>
<span class="line"><span>├── manage.py</span></span>
<span class="line"><span>├── requirements.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了Django的项目文件外，主要增加了<code>compose</code> 配置文件目录和<code>docker-compose.yml</code> 配置文件。</p><ul><li><code>compose</code>目录主要存放各组件的dockerfile文件和启动脚本。</li><li><code>docker-compose.yml</code> 是docker-compose的编排配置文件。</li></ul><h2 id="编写dockerfile-及启动初始化脚本" tabindex="-1"><a class="header-anchor" href="#编写dockerfile-及启动初始化脚本"><span>编写Dockerfile 及启动初始化脚本</span></a></h2><p>在docker-compose中，容器的启动有两种方法，一种是直接使用公共的镜像来启动容器，另一种是通过我们自己编写的Dockerfile。因为我们要安装额外的工具包和初始化相关配置，web和celery组件我们使用自定义的Dockerfile方式。</p><p>web容器的<code>compose/web/Dockerfile</code>:</p><div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-dockerfile"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">FROM</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> python:3.6</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ENV</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> PYTHONUNBUFFERED 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> mkdir /code</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">WORKDIR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ./requirements.txt /code/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> pip install --no-cache-dir -r requirements.txt \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &amp;&amp; rm -rf requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> . /code/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ./compose/web/*.sh /code/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sed -i </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;s/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">//&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> gunicorn.sh \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &amp;&amp; chmod +x gunicorn.sh \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &amp;&amp; sed -i </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;s/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">//&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> entrypoint.sh \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &amp;&amp; chmod +x entrypoint.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ENTRYPOINT</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;/bin/bash&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;entrypoint.sh&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>web容器的其他文件：</p><ul><li><code>compose/web/entrypoint.sh</code> web容器的启动脚本，执行一些初始化或检测逻辑。</li><li><code>compose/web/gunicorn.conf</code> gunicorn配置文件。</li><li><code>compose/web/gunicorn.sh</code> gunicorn的启动脚本。</li></ul><p>celery的Dockerfile:</p><div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-dockerfile"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">FROM</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> python:3.6</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ENV</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> PYTHONUNBUFFERED 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> mkdir /code</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">WORKDIR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ./requirements.txt /code/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ./compose/celery/*.sh /code/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> pip install --no-cache-dir -r requirements.txt \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &amp;&amp; rm -rf requirements.txt &amp;&amp; sh init_env.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> . /code/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">COPY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ./compose/celery/*.sh /code/</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">RUN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sed -i </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;s/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">//&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> celery.sh \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &amp;&amp; chmod +x celery.sh \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &amp;&amp; sed -i </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&#39;s/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">//&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> celery-beat.sh \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    &amp;&amp; chmod +x celery-beat.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>celery的其他文件：</p><ul><li><code>compose/celery/celery.sh</code> celery的启动脚本。</li><li><code>compose/celery/celery-beat.sh</code> celery-beat的启动脚本。</li></ul><h2 id="编写compose启动配置文件" tabindex="-1"><a class="header-anchor" href="#编写compose启动配置文件"><span>编写Compose启动配置文件</span></a></h2><p>docker-compose 配置如下：</p><div class="language-docker-compose line-numbers-mode" data-highlighter="shiki" data-ext="docker-compose" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-docker-compose"><span class="line"><span>version: &#39;2&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    image: redis</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;6379:6379&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  db:</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    image: mysql:5.7.19</span></span>
<span class="line"><span>    # command: --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./compose/mysql/:/etc/mysql/conf.d</span></span>
<span class="line"><span>      - ./db:/var/lib/mysql</span></span>
<span class="line"><span>    # for test</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;127.0.0.1:3307:3306&quot;</span></span>
<span class="line"><span>      # (HOST:CONTAINER)</span></span>
<span class="line"><span>    env_file:</span></span>
<span class="line"><span>      - .env</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  web:</span></span>
<span class="line"><span>    # restart: always</span></span>
<span class="line"><span>    build:</span></span>
<span class="line"><span>      context: .</span></span>
<span class="line"><span>      dockerfile: ./compose/web/Dockerfile</span></span>
<span class="line"><span>    command: sh gunicorn.sh # [&quot;/bin/bash&quot;, &quot;gunicorn.sh&quot;]</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;8080:8002&quot;</span></span>
<span class="line"><span>      # (HOST:CONTAINER)</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./logs:/var/logs/</span></span>
<span class="line"><span>      - ./collect_static:/code/collect_static</span></span>
<span class="line"><span>      - ./static:/code/static</span></span>
<span class="line"><span>      - ./templates:/code/templates</span></span>
<span class="line"><span>      - ./uploads:/code/uploads</span></span>
<span class="line"><span>    env_file: .env</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - redis</span></span>
<span class="line"><span>      - db</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  nginx:</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    image: nginx:1.13.0</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./compose/nginx:/etc/nginx/conf.d/</span></span>
<span class="line"><span>      - ./staticfiles:/code/staticfiles</span></span>
<span class="line"><span>      - ./logs:/var/log/nginx</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;80:80&quot;</span></span>
<span class="line"><span>      # (HOST:CONTAINER)</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - web</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  celery:</span></span>
<span class="line"><span>    build:</span></span>
<span class="line"><span>      context: .</span></span>
<span class="line"><span>      dockerfile: ./compose/celery/Dockerfile</span></span>
<span class="line"><span>    command: sh celery.sh</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./logs:/var/logs/</span></span>
<span class="line"><span>      - ./uploads:/code/uploads</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - redis</span></span>
<span class="line"><span>      - db</span></span>
<span class="line"><span>    env_file: .env</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  celery-beat:</span></span>
<span class="line"><span>    build:</span></span>
<span class="line"><span>      context: .</span></span>
<span class="line"><span>      dockerfile: ./compose/celery/Dockerfile</span></span>
<span class="line"><span>    command: sh celery-beat.sh</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./logs:/var/logs/</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - redis</span></span>
<span class="line"><span>      - db</span></span>
<span class="line"><span>    env_file: .env</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>celery 的worker 和beat这里我们使用同一个镜像Dockerfile, 按照一个镜像一个进程的原则，启动两个容器来分别跑worker和beat进程。</p><h2 id="编译测试" tabindex="-1"><a class="header-anchor" href="#编译测试"><span>编译测试</span></a></h2><p>编写好配置文件之后，编译镜像测试运行：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>docker-compose build </span></span>
<span class="line"><span>docker-compose up  # 前台运行 </span></span>
<span class="line"><span>docker-compose up -d  # 无误后可后台运行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose ps</code> 可以看到启动好的容器：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker-compose</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ps</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">             Name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                           Command</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">               State</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            Ports</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">          </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">--------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dockerdjangodemo_celery-beat_1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> celery-beat.sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                Up</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                              </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dockerdjangodemo_celery_1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> celery.sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                     Up</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                              </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dockerdjangodemo_db_1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            docker-entrypoint.sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mysqld</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      Up</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      127.0.0.1:3307</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">3306/tcp</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dockerdjangodemo_nginx_1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">         nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> daemon</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> off</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">             Up</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      0.0.0.0:80</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">80/tcp</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dockerdjangodemo_redis_1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">         docker-entrypoint.sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> redis</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ...</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Up</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      0.0.0.0:6379</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">6379/tcp</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dockerdjangodemo_web_1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">           /bin/bash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> entrypoint.sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ...</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Up</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      0.0.0.0:8080</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">8002/tcp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>映射端口可根据自己的实际情况调整。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>下面说下在构建过程中的几个需要注意的问题。</p><p><strong>mysql 编码问题</strong></p><p>docker 提供的mysql镜像，默认编码为<code>latin1</code>, 在保存中文时会显示乱码。官方提供了一种修改编码方式的方法，在启动脚本后指定编码格式，文档可见<a href="https://hub.docker.com/_/mysql" target="_blank" rel="noopener noreferrer">这里</a>。mysql容器5.7.19版本可直接在docker-compose.yml 中的command后跟上参数<code>--character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci</code>。这种方式，只是修改server端的编码。可直接使用配置文件覆盖的方式，指定所有的编码格式。</p><p>配置如下：</p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-conf"><span class="line"><span>[mysqld]</span></span>
<span class="line"><span>default-storage-engine=INNODB</span></span>
<span class="line"><span>character-set-server=utf8mb4</span></span>
<span class="line"><span>collation-server=utf8mb4_general_ci</span></span>
<span class="line"><span>init-connect=&#39;SET NAMES utf8mb4&#39;</span></span>
<span class="line"><span>init_connect=&#39;SET collation_connection = utf8mb4_general_ci&#39;</span></span>
<span class="line"><span>skip-character-set-client-handshake  # 跳过客户端的编码配置，客户端直接使用服务端的编码配置</span></span>
<span class="line"><span>bind-address = 0.0.0.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：mysql 5.7.19 配置文件方式成功，5.7.4、5.7.17 均失败，可做参考。</p><p><strong>web等mysql启动完成后再继续</strong></p><p>mysql 容器在启动起来之前是无法接受数据库链接的，在web启动初始化时，若数据库还没有启动好会导致web容器启动失败直接退出。我们可以增加在web容器启动时增加检测脚本，数据库连通之后，再继续。</p><p>脚本如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span>set -o errexit</span></span>
<span class="line"><span>set -o pipefail</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $MYSQL_PASSWORD</span></span>
<span class="line"><span>echo $MYSQL_DATABASE</span></span>
<span class="line"><span>echo $MYSQL_HOST</span></span>
<span class="line"><span>echo $MYSQL_USER</span></span>
<span class="line"><span>echo $MYSQL_PORT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function mysql_ready(){</span></span>
<span class="line"><span>python &lt;&lt; END</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>import pymysql</span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>    conn = pymysql.connect(host=&quot;db&quot;, port=3306, user=&quot;root&quot;, passwd=&quot;$MYSQL_ROOT_PASSWORD&quot;, db=&#39;$MYSQL_DATABASE&#39;, charset=&#39;utf8&#39;)</span></span>
<span class="line"><span>except pymysql.err.OperationalError:</span></span>
<span class="line"><span>    sys.exit(-1)</span></span>
<span class="line"><span>sys.exit(0)</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>until mysql_ready; do</span></span>
<span class="line"><span>  &gt;&amp;2 echo &quot;MySQL is unavailable - sleeping&quot;</span></span>
<span class="line"><span>  sleep 1</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&amp;2 echo &quot;MySQL is up - continuing...&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>到此，使用docker来部署django技术栈服务就完成了，完整的项目代码，大家可参阅 <a href="https://github.com/pylixm/docker-django-demo/tree/docker-compose-production3" target="_blank" rel="noopener noreferrer">docker-django-demo</a>。</p><p>文章开始说了，该部署方式不适合大型网站的线上生产服务，耦合度太高，不好维护等存在着许多问题。但是，部署自己的sideproject或者测试环境，在硬件资源有限的情况的下还是非常不错的。除了减少环境部署搭建的麻烦外，迁移起来也是很方便的。</p><p><a href="https://github.com/pylixm/docker-django-demo/tree/dockerfile-for-mac" target="_blank" rel="noopener noreferrer">demo</a>项目中也有些开发环境下如何使用docker的案例，但是个人一直认为docker更适合部署，在开发环境方便不如直接搭建来的灵活方便。欢迎大家留言，共同讨论docker在开发和部署上的使用心得。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://github.com/pydanny/cookiecutter-django" target="_blank" rel="noopener noreferrer">cookiecutter-django</a></li></ul>`,47)])])}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/pages/b367d0/","title":"使用docker部署django技术栈项目","lang":"zh-CN","frontmatter":{"title":"使用docker部署django技术栈项目","tags":["django","docker"],"permalink":"/pages/b367d0/","createTime":"2023/09/08 17:36:02","description":"随着Docker的普及成熟，已经逐渐成为部署项目的首选，今天来和大家分享下如何使用docker部署django技术栈项目。 我们这里说的Django技术栈为：python3.6、Django2.2、redis、mysql、celery、gunicorn和nginx。在实际的生产项目中，这些组件分布在集群的不同机器，如Nginx、redis和Mysql可...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用docker部署django技术栈项目\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/b367d0/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"使用docker部署django技术栈项目"}],["meta",{"property":"og:description","content":"随着Docker的普及成熟，已经逐渐成为部署项目的首选，今天来和大家分享下如何使用docker部署django技术栈项目。 我们这里说的Django技术栈为：python3.6、Django2.2、redis、mysql、celery、gunicorn和nginx。在实际的生产项目中，这些组件分布在集群的不同机器，如Nginx、redis和Mysql可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"django"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":5.29,"words":1587},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"04.云原生/01.docker/10.Docker-django-mysql.md","headers":[],"categoryList":[{"id":"e467f5","sort":4,"name":"云原生"},{"id":"219fa0","sort":1,"name":"docker"}]}');export{r as comp,t as data};
