import{_ as a,c as t,a as o,o as n}from"./app-Cpl7-wzY.js";const p={};function r(c,e){return n(),t("div",null,[...e[0]||(e[0]=[o(`<h2 id="django-常用命令" tabindex="-1"><a class="header-anchor" href="#django-常用命令"><span>django 常用命令</span></a></h2><p>创建一个web站点：</p><pre><code>django-admin.py startproject mysite
</code></pre><p>创建apps：</p><pre><code>python manage.py startapp blog
</code></pre><p>数据库模板检测：</p><pre><code>python manage.py validate
</code></pre><p>生成数据库表创建语句：</p><pre><code>python manage.py sqlall books（app名字）
</code></pre><p>创建数据库表：</p><pre><code>python manage.py syncdb
注意：Django 1.7.1及以上的版本需要用以下命令
python manage.py makemigrations # 检查
python manage.py migrate #执行

migrate: 用于执行迁移动作，具有syncdb的功能
makemigrations: 基于当前的model创建新的迁移策略文件
sqlmigrate: 显示迁移的SQL语句，具有sqlall的功能
</code></pre><p>清空数据库（慎用）:</p><pre><code>python manage.py flush
</code></pre><p>创建超级管理员:</p><pre><code>python manage.py createsuperuser
</code></pre><p>收集静态文件：</p><pre><code>python manage.py collectstatic
</code></pre><h2 id="django-celery-常用命令" tabindex="-1"><a class="header-anchor" href="#django-celery-常用命令"><span>django celery 常用命令</span></a></h2><p>默认 queue</p><pre><code>python manage.py celery worker -Q celery
</code></pre><p>高优先级 queue. 10个 workers</p><pre><code>python manage.py celery worker -Q high -c 10
</code></pre><p>低优先级 queue. 2个 workers</p><pre><code>python manage.py celery worker -Q low -c 2
</code></pre><p>Beat 进程</p><pre><code>python manage.py celery beat
</code></pre><h4 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h4><ul><li><a href="http://www.ziqiangxuetang.com/django/django-basic.html" target="_blank" rel="noopener noreferrer">http://www.ziqiangxuetang.com/django/django-basic.html</a></li></ul>`,28)])])}const i=a(p,[["render",r]]),s=JSON.parse('{"path":"/pages/8e6215/","title":"django 相关命令总结","lang":"zh-CN","frontmatter":{"title":"django 相关命令总结","tags":["Django"],"permalink":"/pages/8e6215/","createTime":"2023/09/08 17:36:02","description":"django 常用命令 创建一个web站点： 创建apps： 数据库模板检测： 生成数据库表创建语句： 创建数据库表： 清空数据库（慎用）: 创建超级管理员: 收集静态文件： django celery 常用命令 默认 queue 高优先级 queue. 10个 workers 低优先级 queue. 2个 workers Beat 进程 参考 htt...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"django 相关命令总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/8e6215/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"django 相关命令总结"}],["meta",{"property":"og:description","content":"django 常用命令 创建一个web站点： 创建apps： 数据库模板检测： 生成数据库表创建语句： 创建数据库表： 清空数据库（慎用）: 创建超级管理员: 收集静态文件： django celery 常用命令 默认 queue 高优先级 queue. 10个 workers 低优先级 queue. 2个 workers Beat 进程 参考 htt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"Django"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":0.8,"words":241},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"01.开发语言/01.Python/02.Django/26.Django-cmd.md","headers":[],"categoryList":[{"id":"59843f","sort":1,"name":"开发语言"},{"id":"9d2a49","sort":1,"name":"Python"},{"id":"f8691d","sort":2,"name":"Django"}]}');export{i as comp,s as data};
