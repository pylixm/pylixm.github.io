import{_ as n,c as a,a as i,o as e}from"./app-Cpl7-wzY.js";const l={};function p(r,s){return e(),a("div",null,[...s[0]||(s[0]=[i(`<p>之前启动celery时，使用nohup 方式启动。这种方式是不安全的，今天使者使用supervisor来管理监控celery，记录如下，备查。</p><h3 id="_0x00-安装-supervisor" tabindex="-1"><a class="header-anchor" href="#_0x00-安装-supervisor"><span>0x00 安装 supervisor</span></a></h3><pre><code>pip install supervisor
</code></pre><h3 id="_0x01-配置文件" tabindex="-1"><a class="header-anchor" href="#_0x01-配置文件"><span>0x01 配置文件</span></a></h3><pre><code>echo_supervisord_conf &gt; /etc/supervisord.conf
</code></pre><p>在配置文件最后添加如下配置：</p><pre><code>[program:celeryd]

command=python manage.py celery worker -l info #此处可使用绝对路径

stdout_logfile=/path/to/your/logs/celeryd.log

stderr_logfile=/path/to/your/logs/celeryd.log

autostart=true

autorestart=true

startsecs=10

stopwaitsecs=600
</code></pre><p>配置文件其他配置详解：</p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-conf"><span class="line"><span>[unix_http_server]            </span></span>
<span class="line"><span>file=/tmp/supervisor.sock   ; socket文件的路径，supervisorctl用XML_RPC和supervisord通信就是通过它进行</span></span>
<span class="line"><span>                              的。如果不设置的话，supervisorctl也就不能用了  </span></span>
<span class="line"><span>                              不设置的话，默认为none。 非必须设置        </span></span>
<span class="line"><span>;chmod=0700                 ; 这个简单，就是修改上面的那个socket文件的权限为0700</span></span>
<span class="line"><span>                              不设置的话，默认为0700。 非必须设置</span></span>
<span class="line"><span>;chown=nobody:nogroup       ; 这个一样，修改上面的那个socket文件的属组为user.group</span></span>
<span class="line"><span>                              不设置的话，默认为启动supervisord进程的用户及属组。非必须设置</span></span>
<span class="line"><span>;username=user              ; 使用supervisorctl连接的时候，认证的用户</span></span>
<span class="line"><span>                               不设置的话，默认为不需要用户。 非必须设置</span></span>
<span class="line"><span>;password=123               ; 和上面的用户名对应的密码，可以直接使用明码，也可以使用SHA加密</span></span>
<span class="line"><span>                              如：{SHA}82ab876d1387bfafe46cc1c8a2ef074eae50cb1d</span></span>
<span class="line"><span>                              默认不设置。。。非必须设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;[inet_http_server]         ; 侦听在TCP上的socket，Web Server和远程的supervisorctl都要用到他</span></span>
<span class="line"><span>                              不设置的话，默认为不开启。非必须设置</span></span>
<span class="line"><span>;port=127.0.0.1:9001        ; 这个是侦听的IP和端口，侦听所有IP用 :9001或*:9001。</span></span>
<span class="line"><span>                              这个必须设置，只要上面的[inet_http_server]开启了，就必须设置它</span></span>
<span class="line"><span>;username=user              ; 这个和上面的uinx_http_server一个样。非必须设置</span></span>
<span class="line"><span>;password=123               ; 这个也一个样。非必须设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[supervisord]                ;这个主要是定义supervisord这个服务端进程的一些参数的</span></span>
<span class="line"><span>                              这个必须设置，不设置，supervisor就不用干活了</span></span>
<span class="line"><span>logfile=/tmp/supervisord.log ; 这个是supervisord这个主进程的日志路径，注意和子进程的日志不搭嘎。</span></span>
<span class="line"><span>                               默认路径$CWD/supervisord.log，$CWD是当前目录。。非必须设置</span></span>
<span class="line"><span>logfile_maxbytes=50MB        ; 这个是上面那个日志文件的最大的大小，当超过50M的时候，会生成一个新的日 </span></span>
<span class="line"><span>                               志文件。当设置为0时，表示不限制文件大小</span></span>
<span class="line"><span>                               默认值是50M，非必须设置。              </span></span>
<span class="line"><span>logfile_backups=10           ; 日志文件保持的数量，上面的日志文件大于50M时，就会生成一个新文件。文件</span></span>
<span class="line"><span>                               数量大于10时，最初的老文件被新文件覆盖，文件数量将保持为10</span></span>
<span class="line"><span>                               当设置为0时，表示不限制文件的数量。</span></span>
<span class="line"><span>                               默认情况下为10。。。非必须设置</span></span>
<span class="line"><span>loglevel=info                ; 日志级别，有critical, error, warn, info, debug, trace, or blather等</span></span>
<span class="line"><span>                               默认为info。。。非必须设置项</span></span>
<span class="line"><span>pidfile=/tmp/supervisord.pid ; supervisord的pid文件路径。</span></span>
<span class="line"><span>                               默认为$CWD/supervisord.pid。。。非必须设置</span></span>
<span class="line"><span>nodaemon=false               ; 如果是true，supervisord进程将在前台运行</span></span>
<span class="line"><span>                               默认为false，也就是后台以守护进程运行。。。非必须设置</span></span>
<span class="line"><span>minfds=1024                  ; 这个是最少系统空闲的文件描述符，低于这个值supervisor将不会启动。</span></span>
<span class="line"><span>                               系统的文件描述符在这里设置cat /proc/sys/fs/file-max</span></span>
<span class="line"><span>                               默认情况下为1024。。。非必须设置</span></span>
<span class="line"><span>minprocs=200                 ; 最小可用的进程描述符，低于这个值supervisor也将不会正常启动。</span></span>
<span class="line"><span>                              ulimit  -u这个命令，可以查看linux下面用户的最大进程数</span></span>
<span class="line"><span>                              默认为200。。。非必须设置</span></span>
<span class="line"><span>;umask=022                   ; 进程创建文件的掩码</span></span>
<span class="line"><span>                               默认为022。。非必须设置项</span></span>
<span class="line"><span>;user=chrism                 ; 这个参数可以设置一个非root用户，当我们以root用户启动supervisord之后。</span></span>
<span class="line"><span>                               我这里面设置的这个用户，也可以对supervisord进行管理</span></span>
<span class="line"><span>                               默认情况是不设置。。。非必须设置项</span></span>
<span class="line"><span>;identifier=supervisor       ; 这个参数是supervisord的标识符，主要是给XML_RPC用的。当你有多个</span></span>
<span class="line"><span>                               supervisor的时候，而且想调用XML_RPC统一管理，就需要为每个</span></span>
<span class="line"><span>                               supervisor设置不同的标识符了</span></span>
<span class="line"><span>                               默认是supervisord。。。非必需设置</span></span>
<span class="line"><span>;directory=/tmp              ; 这个参数是当supervisord作为守护进程运行的时候，设置这个参数的话，启动</span></span>
<span class="line"><span>                               supervisord进程之前，会先切换到这个目录</span></span>
<span class="line"><span>                               默认不设置。。。非必须设置</span></span>
<span class="line"><span>;nocleanup=true              ; 这个参数当为false的时候，会在supervisord进程启动的时候，把以前子进程</span></span>
<span class="line"><span>                               产生的日志文件(路径为AUTO的情况下)清除掉。有时候咱们想要看历史日志，当 </span></span>
<span class="line"><span>                               然不想日志被清除了。所以可以设置为true</span></span>
<span class="line"><span>                               默认是false，有调试需求的同学可以设置为true。。。非必须设置</span></span>
<span class="line"><span>;childlogdir=/tmp            ; 当子进程日志路径为AUTO的时候，子进程日志文件的存放路径。</span></span>
<span class="line"><span>                               默认路径是这个东西，执行下面的这个命令看看就OK了，处理的东西就默认路径</span></span>
<span class="line"><span>                               python -c &quot;import tempfile;print tempfile.gettempdir()&quot;</span></span>
<span class="line"><span>                               非必须设置</span></span>
<span class="line"><span>;environment=KEY=&quot;value&quot;     ; 这个是用来设置环境变量的，supervisord在linux中启动默认继承了linux的</span></span>
<span class="line"><span>                               环境变量，在这里可以设置supervisord进程特有的其他环境变量。</span></span>
<span class="line"><span>                               supervisord启动子进程时，子进程会拷贝父进程的内存空间内容。 所以设置的</span></span>
<span class="line"><span>                               这些环境变量也会被子进程继承。</span></span>
<span class="line"><span>                               小例子：environment=name=&quot;haha&quot;,age=&quot;hehe&quot;</span></span>
<span class="line"><span>                               默认为不设置。。。非必须设置</span></span>
<span class="line"><span>;strip_ansi=false            ; 这个选项如果设置为true，会清除子进程日志中的所有ANSI 序列。什么是ANSI</span></span>
<span class="line"><span>                               序列呢？就是我们的\\n,\\t这些东西。</span></span>
<span class="line"><span>                               默认为false。。。非必须设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; the below section must remain in the config file for RPC</span></span>
<span class="line"><span>; (supervisorctl/web interface) to work, additional interfaces may be</span></span>
<span class="line"><span>; added by defining them in separate rpcinterface: sections</span></span>
<span class="line"><span>[rpcinterface:supervisor]    ;这个选项是给XML_RPC用的，当然你如果想使用supervisord或者web server 这 </span></span>
<span class="line"><span>                              个选项必须要开启的</span></span>
<span class="line"><span>supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[supervisorctl]              ;这个主要是针对supervisorctl的一些配置  </span></span>
<span class="line"><span>serverurl=unix:///tmp/supervisor.sock ; 这个是supervisorctl本地连接supervisord的时候，本地UNIX socket</span></span>
<span class="line"><span>                                        路径，注意这个是和前面的[unix_http_server]对应的</span></span>
<span class="line"><span>                                        默认值就是unix:///tmp/supervisor.sock。。非必须设置</span></span>
<span class="line"><span>;serverurl=http://127.0.0.1:9001 ; 这个是supervisorctl远程连接supervisord的时候，用到的TCP socket路径</span></span>
<span class="line"><span>                                   注意这个和前面的[inet_http_server]对应</span></span>
<span class="line"><span>                                   默认就是http://127.0.0.1:9001。。。非必须项</span></span>
<span class="line"><span>                               </span></span>
<span class="line"><span>;username=chris              ; 用户名</span></span>
<span class="line"><span>                               默认空。。非必须设置</span></span>
<span class="line"><span>;password=123                ; 密码</span></span>
<span class="line"><span>                              默认空。。非必须设置</span></span>
<span class="line"><span>;prompt=mysupervisor         ; 输入用户名密码时候的提示符</span></span>
<span class="line"><span>                               默认supervisor。。非必须设置</span></span>
<span class="line"><span>;history_file=~/.sc_history  ; 这个参数和shell中的history类似，我们可以用上下键来查找前面执行过的命令</span></span>
<span class="line"><span>                               默认是no file的。。所以我们想要有这种功能，必须指定一个文件。。。非</span></span>
<span class="line"><span>                               必须设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; The below sample program section shows all possible program subsection values,</span></span>
<span class="line"><span>; create one or more &#39;real&#39; program: sections to be able to control them under</span></span>
<span class="line"><span>; supervisor.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;[program:theprogramname]      ;这个就是咱们要管理的子进程了，&quot;:&quot;后面的是名字，最好别乱写和实际进程</span></span>
<span class="line"><span>                                有点关联最好。这样的program我们可以设置一个或多个，一个program就是</span></span>
<span class="line"><span>                                要被管理的一个进程</span></span>
<span class="line"><span>;command=/bin/cat              ; 这个就是我们的要启动进程的命令路径了，可以带参数</span></span>
<span class="line"><span>                                例子：/home/test.py -a &#39;hehe&#39;</span></span>
<span class="line"><span>                                有一点需要注意的是，我们的command只能是那种在终端运行的进程，不能是</span></span>
<span class="line"><span>                                守护进程。这个想想也知道了，比如说command=service httpd start。</span></span>
<span class="line"><span>                                httpd这个进程被linux的service管理了，我们的supervisor再去启动这个命令</span></span>
<span class="line"><span>                                这已经不是严格意义的子进程了。</span></span>
<span class="line"><span>                                这个是个必须设置的项</span></span>
<span class="line"><span>;process_name=%(program_name)s ; 这个是进程名，如果我们下面的numprocs参数为1的话，就不用管这个参数</span></span>
<span class="line"><span>                                 了，它默认值%(program_name)s也就是上面的那个program冒号后面的名字，</span></span>
<span class="line"><span>                                 但是如果numprocs为多个的话，那就不能这么干了。想想也知道，不可能每个</span></span>
<span class="line"><span>                                 进程都用同一个进程名吧。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                </span></span>
<span class="line"><span>;numprocs=1                    ; 启动进程的数目。当不为1时，就是进程池的概念，注意process_name的设置</span></span>
<span class="line"><span>                                 默认为1    。。非必须设置</span></span>
<span class="line"><span>;directory=/tmp                ; 进程运行前，会前切换到这个目录</span></span>
<span class="line"><span>                                 默认不设置。。。非必须设置</span></span>
<span class="line"><span>;umask=022                     ; 进程掩码，默认none，非必须</span></span>
<span class="line"><span>;priority=999                  ; 子进程启动关闭优先级，优先级低的，最先启动，关闭的时候最后关闭</span></span>
<span class="line"><span>                                 默认值为999 。。非必须设置</span></span>
<span class="line"><span>;autostart=true                ; 如果是true的话，子进程将在supervisord启动后被自动启动</span></span>
<span class="line"><span>                                 默认就是true   。。非必须设置</span></span>
<span class="line"><span>;autorestart=unexpected        ; 这个是设置子进程挂掉后自动重启的情况，有三个选项，false,unexpected</span></span>
<span class="line"><span>                                 和true。如果为false的时候，无论什么情况下，都不会被重新启动，</span></span>
<span class="line"><span>                                 如果为unexpected，只有当进程的退出码不在下面的exitcodes里面定义的退 </span></span>
<span class="line"><span>                                 出码的时候，才会被自动重启。当为true的时候，只要子进程挂掉，将会被无</span></span>
<span class="line"><span>                                 条件的重启</span></span>
<span class="line"><span>;startsecs=1                   ; 这个选项是子进程启动多少秒之后，此时状态如果是running，则我们认为启</span></span>
<span class="line"><span>                                 动成功了</span></span>
<span class="line"><span>                                 默认值为1 。。非必须设置</span></span>
<span class="line"><span>;startretries=3                ; 当进程启动失败后，最大尝试启动的次数。。当超过3次后，supervisor将把</span></span>
<span class="line"><span>                                 此进程的状态置为FAIL</span></span>
<span class="line"><span>                                 默认值为3 。。非必须设置</span></span>
<span class="line"><span>;exitcodes=0,2                 ; 注意和上面的的autorestart=unexpected对应。。exitcodes里面的定义的</span></span>
<span class="line"><span>                                 退出码是expected的。</span></span>
<span class="line"><span>;stopsignal=QUIT               ; 进程停止信号，可以为TERM, HUP, INT, QUIT, KILL, USR1, or USR2等信号</span></span>
<span class="line"><span>                                  默认为TERM 。。当用设定的信号去干掉进程，退出码会被认为是expected</span></span>
<span class="line"><span>                                  非必须设置</span></span>
<span class="line"><span>;stopwaitsecs=10               ; 这个是当我们向子进程发送stopsignal信号后，到系统返回信息</span></span>
<span class="line"><span>                                 给supervisord，所等待的最大时间。 超过这个时间，supervisord会向该</span></span>
<span class="line"><span>                                 子进程发送一个强制kill的信号。</span></span>
<span class="line"><span>                                 默认为10秒。。非必须设置</span></span>
<span class="line"><span>;stopasgroup=false             ; 这个东西主要用于，supervisord管理的子进程，这个子进程本身还有</span></span>
<span class="line"><span>                                 子进程。那么我们如果仅仅干掉supervisord的子进程的话，子进程的子进程</span></span>
<span class="line"><span>                                 有可能会变成孤儿进程。所以咱们可以设置可个选项，把整个该子进程的</span></span>
<span class="line"><span>                                 整个进程组都干掉。 设置为true的话，一般killasgroup也会被设置为true。</span></span>
<span class="line"><span>                                 需要注意的是，该选项发送的是stop信号</span></span>
<span class="line"><span>                                 默认为false。。非必须设置。。</span></span>
<span class="line"><span>;killasgroup=false             ; 这个和上面的stopasgroup类似，不过发送的是kill信号</span></span>
<span class="line"><span>;user=chrism                   ; 如果supervisord是root启动，我们在这里设置这个非root用户，可以用来</span></span>
<span class="line"><span>                                 管理该program</span></span>
<span class="line"><span>                                 默认不设置。。。非必须设置项</span></span>
<span class="line"><span>;redirect_stderr=true          ; 如果为true，则stderr的日志会被写入stdout日志文件中</span></span>
<span class="line"><span>                                 默认为false，非必须设置</span></span>
<span class="line"><span>;stdout_logfile=/a/path        ; 子进程的stdout的日志路径，可以指定路径，AUTO，none等三个选项。</span></span>
<span class="line"><span>                                 设置为none的话，将没有日志产生。设置为AUTO的话，将随机找一个地方</span></span>
<span class="line"><span>                                 生成日志文件，而且当supervisord重新启动的时候，以前的日志文件会被</span></span>
<span class="line"><span>                                 清空。当 redirect_stderr=true的时候，sterr也会写进这个日志文件</span></span>
<span class="line"><span>;stdout_logfile_maxbytes=1MB   ; 日志文件最大大小，和[supervisord]中定义的一样。默认为50</span></span>
<span class="line"><span>;stdout_logfile_backups=10     ; 和[supervisord]定义的一样。默认10</span></span>
<span class="line"><span>;stdout_capture_maxbytes=1MB   ; 这个东西是设定capture管道的大小，当值不为0的时候，子进程可以从stdout</span></span>
<span class="line"><span>                                 发送信息，而supervisor可以根据信息，发送相应的event。</span></span>
<span class="line"><span>                                 默认为0，为0的时候表达关闭管道。。。非必须项</span></span>
<span class="line"><span>;stdout_events_enabled=false   ; 当设置为ture的时候，当子进程由stdout向文件描述符中写日志的时候，将</span></span>
<span class="line"><span>                                 触发supervisord发送PROCESS_LOG_STDOUT类型的event</span></span>
<span class="line"><span>                                 默认为false。。。非必须设置</span></span>
<span class="line"><span>;stderr_logfile=/a/path        ; 这个东西是设置stderr写的日志路径，当redirect_stderr=true。这个就不用</span></span>
<span class="line"><span>                                 设置了，设置了也是白搭。因为它会被写入stdout_logfile的同一个文件中</span></span>
<span class="line"><span>                                 默认为AUTO，也就是随便找个地存，supervisord重启被清空。。非必须设置</span></span>
<span class="line"><span>;stderr_logfile_maxbytes=1MB   ; 这个出现好几次了，就不重复了</span></span>
<span class="line"><span>;stderr_logfile_backups=10     ; 这个也是</span></span>
<span class="line"><span>;stderr_capture_maxbytes=1MB   ; 这个一样，和stdout_capture一样。 默认为0，关闭状态</span></span>
<span class="line"><span>;stderr_events_enabled=false   ; 这个也是一样，默认为false</span></span>
<span class="line"><span>;environment=A=&quot;1&quot;,B=&quot;2&quot;       ; 这个是该子进程的环境变量，和别的子进程是不共享的</span></span>
<span class="line"><span>;serverurl=AUTO                ; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>; The below sample eventlistener section shows all possible</span></span>
<span class="line"><span>; eventlistener subsection values, create one or more &#39;real&#39;</span></span>
<span class="line"><span>; eventlistener: sections to be able to handle event notifications</span></span>
<span class="line"><span>; sent by supervisor.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;[eventlistener:theeventlistenername] ;这个东西其实和program的地位是一样的，也是suopervisor启动的子进</span></span>
<span class="line"><span>                                       程，不过它干的活是订阅supervisord发送的event。他的名字就叫</span></span>
<span class="line"><span>                                       listener了。我们可以在listener里面做一系列处理，比如报警等等</span></span>
<span class="line"><span>                                       楼主这两天干的活，就是弄的这玩意</span></span>
<span class="line"><span>;command=/bin/eventlistener    ; 这个和上面的program一样，表示listener的可执行文件的路径</span></span>
<span class="line"><span>;process_name=%(program_name)s ; 这个也一样，进程名，当下面的numprocs为多个的时候，才需要。否则默认就</span></span>
<span class="line"><span>                                 OK了</span></span>
<span class="line"><span>;numprocs=1                    ; 相同的listener启动的个数</span></span>
<span class="line"><span>;events=EVENT                  ; event事件的类型，也就是说，只有写在这个地方的事件类型。才会被发送</span></span>
<span class="line"><span>                      </span></span>
<span class="line"><span>                                 </span></span>
<span class="line"><span>;buffer_size=10                ; 这个是event队列缓存大小，单位不太清楚，楼主猜测应该是个吧。当buffer</span></span>
<span class="line"><span>                                 超过10的时候，最旧的event将会被清除，并把新的event放进去。</span></span>
<span class="line"><span>                                 默认值为10。。非必须选项</span></span>
<span class="line"><span>;directory=/tmp                ; 进程执行前，会切换到这个目录下执行</span></span>
<span class="line"><span>                                 默认为不切换。。。非必须</span></span>
<span class="line"><span>;umask=022                     ; 淹没，默认为none，不说了</span></span>
<span class="line"><span>;priority=-1                   ; 启动优先级，默认-1，也不扯了</span></span>
<span class="line"><span>;autostart=true                ; 是否随supervisord启动一起启动，默认true</span></span>
<span class="line"><span>;autorestart=unexpected        ; 是否自动重启，和program一个样，分true,false,unexpected等，注意</span></span>
<span class="line"><span>                                  unexpected和exitcodes的关系</span></span>
<span class="line"><span>;startsecs=1                   ; 也是一样，进程启动后跑了几秒钟，才被认定为成功启动，默认1</span></span>
<span class="line"><span>;startretries=3                ; 失败最大尝试次数，默认3</span></span>
<span class="line"><span>;exitcodes=0,2                 ; 期望或者说预料中的进程退出码，</span></span>
<span class="line"><span>;stopsignal=QUIT               ; 干掉进程的信号，默认为TERM，比如设置为QUIT，那么如果QUIT来干这个进程</span></span>
<span class="line"><span>                                 那么会被认为是正常维护，退出码也被认为是expected中的</span></span>
<span class="line"><span>;stopwaitsecs=10               ; max num secs to wait b4 SIGKILL (default 10)</span></span>
<span class="line"><span>;stopasgroup=false             ; send stop signal to the UNIX process group (default false)</span></span>
<span class="line"><span>;killasgroup=false             ; SIGKILL the UNIX process group (def false)</span></span>
<span class="line"><span>;user=chrism                   ;设置普通用户，可以用来管理该listener进程。</span></span>
<span class="line"><span>                                默认为空。。非必须设置</span></span>
<span class="line"><span>;redirect_stderr=true          ; 为true的话，stderr的log会并入stdout的log里面</span></span>
<span class="line"><span>                                默认为false。。。非必须设置</span></span>
<span class="line"><span>;stdout_logfile=/a/path        ; 这个不说了，好几遍了</span></span>
<span class="line"><span>;stdout_logfile_maxbytes=1MB   ; 这个也是</span></span>
<span class="line"><span>;stdout_logfile_backups=10     ; 这个也是</span></span>
<span class="line"><span>;stdout_events_enabled=false   ; 这个其实是错的，listener是不能发送event</span></span>
<span class="line"><span>;stderr_logfile=/a/path        ; 这个也是</span></span>
<span class="line"><span>;stderr_logfile_maxbytes=1MB   ; 这个也是</span></span>
<span class="line"><span>;stderr_logfile_backups        ; 这个不说了</span></span>
<span class="line"><span>;stderr_events_enabled=false   ; 这个也是错的，listener不能发送event</span></span>
<span class="line"><span>;environment=A=&quot;1&quot;,B=&quot;2&quot;       ; 这个是该子进程的环境变量</span></span>
<span class="line"><span>                                 默认为空。。。非必须设置</span></span>
<span class="line"><span>;serverurl=AUTO                ; override serverurl computation (childutils)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; The below sample group section shows all possible group values,</span></span>
<span class="line"><span>; create one or more &#39;real&#39; group: sections to create &quot;heterogeneous&quot;</span></span>
<span class="line"><span>; process groups.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;[group:thegroupname]  ;这个东西就是给programs分组，划分到组里面的program。我们就不用一个一个去操作了</span></span>
<span class="line"><span>                         我们可以对组名进行统一的操作。 注意：program被划分到组里面之后，就相当于原来</span></span>
<span class="line"><span>                         的配置从supervisor的配置文件里消失了。。。supervisor只会对组进行管理，而不再</span></span>
<span class="line"><span>                         会对组里面的单个program进行管理了</span></span>
<span class="line"><span>;programs=progname1,progname2  ; 组成员，用逗号分开</span></span>
<span class="line"><span>                                 这个是个必须的设置项</span></span>
<span class="line"><span>;priority=999                  ; 优先级，相对于组和组之间说的</span></span>
<span class="line"><span>                                 默认999。。非必须选项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; The [include] section can just contain the &quot;files&quot; setting.  This</span></span>
<span class="line"><span>; setting can list multiple files (separated by whitespace or</span></span>
<span class="line"><span>; newlines).  It can also contain wildcards.  The filenames are</span></span>
<span class="line"><span>; interpreted as relative to this file.  Included files *cannot*</span></span>
<span class="line"><span>; include files themselves.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;[include]                         ;这个东西挺有用的，当我们要管理的进程很多的时候，写在一个文件里面</span></span>
<span class="line"><span>                                    就有点大了。我们可以把配置信息写到多个文件中，然后include过来</span></span>
<span class="line"><span>;files = relative/directory/*.ini</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0x02-启动关闭supervisor" tabindex="-1"><a class="header-anchor" href="#_0x02-启动关闭supervisor"><span>0x02 启动关闭supervisor</span></a></h3><pre><code># 启动
supervisord
# 进入supervisor命令行
supervisorctl 
# 直接执行启动
supervisorctl start celery
# 关闭没有发现好的方法只能kill了
kill your-supervisor-pid
</code></pre><h3 id="_0x03-配置启停脚本" tabindex="-1"><a class="header-anchor" href="#_0x03-配置启停脚本"><span>0x03 配置启停脚本</span></a></h3><p>启停脚本地址：https://github.com/Supervisor/initscripts</p><ul><li><p>使用redhat-init-mingalevme，将脚本保存为 /etc/init.d/supervisord</p></li><li><p>设置自启动</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    chkconfig</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> supervisord</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    chkconfig</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> supervisord</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> on</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启停命令</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    service</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> supervisord</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #supervisorctl 命令</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    supervisorctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> xxx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    supervisorctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> xxx</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #重新加载配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    supervisorctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qa" tabindex="-1"><a class="header-anchor" href="#qa"><span>QA</span></a></h3><p>1、FATAL Exited too quickly (process log may have details</p><p>原因：配置文件命令行问题，错误前配置：python manage.py celery worker -l info &gt;celery.log</p><p>改正：python manage.py celery worker -l info</p><p>2、问题：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-bash"><span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@localhost </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">~</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># echo_supervisord_conf </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /etc/supervisord.conf</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    Traceback</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (most </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">recent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> call</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> last</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">):</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      File</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/bin/echo_supervisord_conf</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> line</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 5,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> in</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">modul</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        from</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pkg_resources</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> import</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> load_entry_point</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      File</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg/pkg_resources.py</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> line</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 2603,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> in</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">modul</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      File</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg/pkg_resources.py</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> line</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 666,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> in</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> require</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      File</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg/pkg_resources.py</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> line</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 565,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> in</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> resolve</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    pkg_resources.DistributionNotFound:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> meld</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">3&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0.6.5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方法： 注释掉 <code>/usr/local/lib/python2.7/site-packages/setuptools-0.6c11-py2.7.egg/require.txt</code> 文件中的 <code>meld3&gt;=0.6.5</code></p><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考：</span></a></h3><ul><li><a href="https://micropyramid.com/blog/celery-with-supervisor/" target="_blank" rel="noopener noreferrer">https://micropyramid.com/blog/celery-with-supervisor/</a></li><li><a href="http://www.marswj.com/post/45/Installation-and-configuration-of-supervisor-in-CentOS" target="_blank" rel="noopener noreferrer">http://www.marswj.com/post/45/Installation-and-configuration-of-supervisor-in-CentOS</a></li></ul>`,26)])])}const c=n(l,[["render",p]]),t=JSON.parse('{"path":"/pages/11c3d5/","title":"使用 supervisor 来监控 django celery - Supervisor","lang":"zh-CN","frontmatter":{"title":"使用 supervisor 来监控 django celery - Supervisor","tags":["Supervisor","Django","Celery"],"permalink":"/pages/11c3d5/","createTime":"2023/09/08 17:36:02","description":"之前启动celery时，使用nohup 方式启动。这种方式是不安全的，今天使者使用supervisor来管理监控celery，记录如下，备查。 0x00 安装 supervisor 0x01 配置文件 在配置文件最后添加如下配置： 配置文件其他配置详解： 0x02 启动关闭supervisor 0x03 配置启停脚本 启停脚本地址：https://gi...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 supervisor 来监控 django celery - Supervisor\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/11c3d5/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"使用 supervisor 来监控 django celery - Supervisor"}],["meta",{"property":"og:description","content":"之前启动celery时，使用nohup 方式启动。这种方式是不安全的，今天使者使用supervisor来管理监控celery，记录如下，备查。 0x00 安装 supervisor 0x01 配置文件 在配置文件最后添加如下配置： 配置文件其他配置详解： 0x02 启动关闭supervisor 0x03 配置启停脚本 启停脚本地址：https://gi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"Celery"}],["meta",{"property":"article:tag","content":"Django"}],["meta",{"property":"article:tag","content":"Supervisor"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":14.33,"words":4299},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"01.开发语言/01.Python/02.Django/31.Django-supervisor-celery.md","headers":[],"categoryList":[{"id":"59843f","sort":1,"name":"开发语言"},{"id":"9d2a49","sort":1,"name":"Python"},{"id":"f8691d","sort":2,"name":"Django"}]}');export{c as comp,t as data};
