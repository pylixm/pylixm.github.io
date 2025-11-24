import{_ as n,c as a,a as i,o as e}from"./app-Cpl7-wzY.js";const l={};function p(d,s){return e(),a("div",null,[...s[0]||(s[0]=[i(`<p>Linux 系统中磁盘信息的查看是比较常用的操作，例如，查看磁盘使用情况、查看磁盘分区等待操作。这里总结一些运维中常用到的命令，以备使用查询。</p><h2 id="磁盘的接口" tabindex="-1"><a class="header-anchor" href="#磁盘的接口"><span>磁盘的接口</span></a></h2><p>现在磁盘最常用的可简单分为普通的机械盘和SSD(Solid-state drive或Solid-state disk)两种，他们都已不同的接口协议和主板链接，在了解命令之前，我们先来看下，现在服务器磁盘的接口协议。这样可以更好的了解磁盘。</p><p>现阶段磁盘的接口主要有以下几种：</p><p><strong>ATA</strong>，全称Advanced Technology Attachment，是用传统的40-pin并口数据线连接主板与硬盘的，接口速度最大为133MB/s，因为并口线的抗干扰性太差，且排线占用空间较大，不利计算机内部散热，已逐渐被SATA所取代。</p><p><strong>SATA</strong>，全称Serial ATA，也就是使用串口的ATA接口，因抗干扰性强，且对数据线的长度要求比ATA低很多，支持热插拔等功能，SATA-II的接口速度为300MiB/s，而新的SATA-III标准可达到600MiB/s的传输速度。SATA的数据线也比ATA的细得多，有利于机箱内的空气流通，整理线材也比较方便。</p><p><strong>SCSI</strong>，全称是Small Computer System Interface（小型机系统接口），经历多代的发展，从早期的SCSI-II，到目前的Ultra320 SCSI以及Fiber-Channel（光纤通道），接口型式也多种多样。SCSI硬盘广为工作站级个人计算机以及服务器所使用，因此会使用较为先进的技术，如碟片转速15000rpm的高转速，且资料传输时CPU占用率较低，但是单价也比相同容量的ATA及SATA硬盘更加昂贵。</p><p><strong>SAS</strong>（Serial Attached SCSI）是新一代的SCSI技术，和SATA硬盘相同，都是采取序列式技术以获得更高的传输速度，可达到6Gb/s。此外也透过缩小连接线改善系统内部空间等。</p><p>此外，由于SAS硬盘可以与SATA硬盘共享同样的背板，因此在同一个SAS存储系统中，可以用SATA硬盘来取代部分昂贵的SAS硬盘，节省整体的存储成本。但SATA存储系统并不能连接SAS硬盘。</p><p><strong>FC</strong>（Fibre Channel，光纤通道接口），拥有此接口的硬盘在使用光纤联接时具有热插拔性、高速带宽（4Gb/s或10Gb/s）、远程连接等特点；内部传输速率也比普通硬盘更高。限制于其高昂的售价，通常用于高端服务器领域。</p><p>现在，普通机械盘接口多为SATA，固态盘接口多为SAS。更多磁盘知识可参考<a href="https://zh.wikipedia.org/wiki/%E7%A1%AC%E7%9B%98" target="_blank" rel="noopener noreferrer">Wiki百科</a>。</p><h2 id="磁盘信息查看相关命令" tabindex="-1"><a class="header-anchor" href="#磁盘信息查看相关命令"><span>磁盘信息查看相关命令</span></a></h2><h3 id="lsscsi" tabindex="-1"><a class="header-anchor" href="#lsscsi"><span>lsscsi</span></a></h3><p>该命令只支持 SCSI接口的磁盘。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>-s 显示容量大小。</span></span>
<span class="line"><span>-c 用全称显示默认的信息。</span></span>
<span class="line"><span>-d 显示设备主，次设备号。</span></span>
<span class="line"><span>-g 显示对应的sg设备名。</span></span>
<span class="line"><span>-H 显示主机控制器列表，-Hl,-Hlv。</span></span>
<span class="line"><span>-l 显示相关属性，-ll,-lll=-L。</span></span>
<span class="line"><span>-v 显示设备属性所在目录。</span></span>
<span class="line"><span>-x 以16进制显示lun号。</span></span>
<span class="line"><span>-p 输出DIF,DIX 保护类型。</span></span>
<span class="line"><span>-P 输出有效的保护模式信息。</span></span>
<span class="line"><span>-i 显示udev相关的属性</span></span>
<span class="line"><span>-w 显示WWN</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@localhost</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># lsscsi</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">0:0:0:0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    disk    ATA      ST500DM002-1BD14 KC47  /dev/sda </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">5:0:0:0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    cd/dvd  HL-DT-ST DVD+-RW GHB0N    A100  /dev/sr0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="smartctl" tabindex="-1"><a class="header-anchor" href="#smartctl"><span>smartctl</span></a></h3><p><code>smartctl</code>是磁盘工具包<code>smartmontools</code>中的命令。该工具包有自我监控(Self-Monitoring)、分析(Analysis)和报告(Reporting)三个模块组成，所以缩写为S.M.A.R.T或SMART。可使用系统包管理工具<code>yum</code>安装，我们这里只说<code>smartctl</code>这个命令的使用，其他更多使用大家可参考<a href="https://www.smartmontools.org/wiki/TocDoc" target="_blank" rel="noopener noreferrer">官方文档</a>。</p><p><code>smartctl</code>常用语法如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>语法：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    smartctl  [options]  device</span></span>
<span class="line"><span></span></span>
<span class="line"><span>device：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;/dev/hd[a-t]&quot;    IDE/ATA 磁盘</span></span>
<span class="line"><span>	&quot;/dev/sd[a-z]&quot;    SCSI devices磁盘。注意，对于SATA磁盘，由于是通过libata</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示信息 参数参数：</span></span>
<span class="line"><span>-h  帮助信息</span></span>
<span class="line"><span>-V  版本信息</span></span>
<span class="line"><span>-i  打印基本信息（磁盘设备号、序列号、固件版本…）</span></span>
<span class="line"><span>-a  打印磁盘所有的SMART信息</span></span>
<span class="line"><span>-x  打印所有设备信息</span></span>
<span class="line"><span>-g Name 获取磁盘执行信息：</span></span>
<span class="line"><span>    name 取值 all, aam, apm, lookahead, security, wcache, rcache, wcreorder</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行时行为 参数：</span></span>
<span class="line"><span>-q  TYPE     指定输出的安静模式。</span></span>
<span class="line"><span>TYPE可以有3种选择：</span></span>
<span class="line"><span>      eorsonly    只打印错误日志。</span></span>
<span class="line"><span>      slent       有任何打印。</span></span>
<span class="line"><span>      nserial     不打印序列号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-d  TYPE     指定磁盘的类型。如果没有指定，smartctl会根据磁盘的名字来猜测磁盘类型。</span></span>
<span class="line"><span>             磁盘类型包括： ata, scsi, sat[,auto][,N][+TYPE], usbcypress[,X], usbjmicron[,p][,x][,N], usbsunplus, marvell, areca,N/E, 3ware,N, hpt,L/M/N, megaraid,N, cciss,N, auto, test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-T  TYPE     指定当发生错误时，smartctl的容忍程度，是否继续运行。</span></span>
<span class="line"><span>	 TYPE可以有4种选择：</span></span>
<span class="line"><span>	 conservative      一有错就会退出</span></span>
<span class="line"><span>	 normal        如果必须支持的SMART命令失败，则退出</span></span>
<span class="line"><span>	 permissive     忽略一次必须支持的SMART命令失败</span></span>
<span class="line"><span>	 verypermissive  忽略所有必须支持的SMART命令失败</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-b  TYPE     指定当发生校验错误时，smartctl的动作。</span></span>
<span class="line"><span>     TYPE有3种选择：</span></span>
<span class="line"><span>       warn          发出警告，继续执行</span></span>
<span class="line"><span>       exit           退出smartctl</span></span>
<span class="line"><span>       ignore        不发出告警，继续执行      </span></span>
<span class="line"><span></span></span>
<span class="line"><span>-r  TYPE      smartmontools开发人员相关。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-n  POWERMODE    指定当磁盘处于节能模式时，smartctl是否继续检查，默认是不检查。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	POWERMODE有4种选择：</span></span>
<span class="line"><span>	  never   检查</span></span>
<span class="line"><span>	  sleep    除了sleep模式，检查。</span></span>
<span class="line"><span>	  standby  除了sleep或standby模式，检查。</span></span>
<span class="line"><span>	  idle      除了sleep或standby或idle模式，见车。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SMART功能开关 参数：</span></span>
<span class="line"><span>-s  on/off      打开或关闭磁盘的SMART功能</span></span>
<span class="line"><span>-o  on/off      打开或关闭SMART自动离线检测，该功能每4小时就会自动扫描磁盘是否有缺陷。</span></span>
<span class="line"><span>-S  on/off   打开或关闭“自动保存厂商指定属性”功能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SMART 读和显示数据 参数</span></span>
<span class="line"><span>-H  报告磁盘的是否健康。如果报告不健康，则说明磁盘已经损坏或会在24小时内损坏。</span></span>
<span class="line"><span>-c  显示磁盘支持的普通SMART功能，以及这些功能当前的状态。</span></span>
<span class="line"><span>-A  显示磁盘支持的厂商指定SMART特性。这些特性的编号从1-253，并且有指定的名字。</span></span>
<span class="line"><span>-f  设置输出格式：old, brief, hex[,id|val]</span></span>
<span class="line"><span>-l  TYPE      指定显示的log类型。</span></span>
<span class="line"><span>     TYPE有4种选择：</span></span>
<span class="line"><span>     error             只显示error  log。</span></span>
<span class="line"><span>     selftest    只显示selftest  log</span></span>
<span class="line"><span>     selective 只显示selective  self-test  log</span></span>
<span class="line"><span>     directory 只显示Log  Directory</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-v  N,OPTION    显示厂商指定SMART特性N时，使用厂商相关的显示方式。</span></span>
<span class="line"><span>-F  TYPE     设置smartctl的行为，当出现一些已知但还没有解决的硬件或软件bug时，smartctl应该怎么做。</span></span>
<span class="line"><span>-P  TYPE     设置smartctl是否对磁盘使用数据库中已有的参数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SMART 离线测试、自测试 参数</span></span>
<span class="line"><span>-t  TEST      立刻执行测试，可以和-C参数一起使用。</span></span>
<span class="line"><span>     TEST可以有以下几个选择：</span></span>
<span class="line"><span>     offline  离线测试。可以在挂载文件系统的磁盘上使用</span></span>
<span class="line"><span>     short   短时间测试。可以在挂载文件系统的磁盘上使用。</span></span>
<span class="line"><span>     long   长时间测试。可以在挂载文件系统的磁盘上使用。</span></span>
<span class="line"><span>     conveyance  [ATA only]传输zi测试。可以在挂载文件系统的磁盘上使用。</span></span>
<span class="line"><span>     select, N-M    </span></span>
<span class="line"><span>	 select, N+SIZE  [ATA only]有选择性测试，测试磁盘的部分LBA。N表示LBA编号，M表示结束LBA编号，SIZE表示测试的LBA范围。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-C  在captive模式下运行测试。</span></span>
<span class="line"><span>注意：（1）-C必须配合-t一起使用，但如果是-t offline，则-C不生效。</span></span>
<span class="line"><span>     （2）-C会使得磁盘很忙，所以最好是在没有挂载文件系统的磁盘上使用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>-X  中断no-captive模式下运行的测试。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>smartctl --all /dev/hda     # 打印所有hda设备信息</span></span>
<span class="line"><span>smartctl --smart=on --offlineauto=on --saveauto=on /dev/hda   # 开启hda SMART 支持</span></span>
<span class="line"><span>smartctl --test=long /dev/hda   # 执行扩展磁盘自检</span></span>
<span class="line"><span></span></span>
<span class="line"><span>smartctl --attributes --log=selftest --quietmode=errorsonly /dev/hda  # 打印自检和属性错误</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在3ware RAID控制器上打印第3个ATA磁盘的所有SMART信息</span></span>
<span class="line"><span>smartctl --all --device=3ware,2 /dev/sda</span></span>
<span class="line"><span>smartctl --all --device=3ware,2 /dev/twe0</span></span>
<span class="line"><span>smartctl --all --device=3ware,2 /dev/twa0</span></span>
<span class="line"><span>smartctl --all --device=3ware,2 /dev/twl0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打印连接到第3个PMPort的SATA磁盘的所有SMART信息第一个HighPoint RAID控制器上的第一个通道</span></span>
<span class="line"><span>smartctl --all --device=hpt,1/1/3 /dev/sda</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打印Areca RAID控制器上第一个机箱的第3个ATA磁盘的所有SMART信息</span></span>
<span class="line"><span>smartctl --all --device=areca,3/1 /dev/sg2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打印raid 中，第4块盘的基本信息</span></span>
<span class="line"><span>smartctl -a -d megaraid,3 /dev/sda</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="megacli" tabindex="-1"><a class="header-anchor" href="#megacli"><span>MegaCli</span></a></h3><p>MegaCli是一款管理维护硬件RAID软件，可以通过它来了解当前raid卡的所有信息，包括 raid卡的型号，raid的阵列类型，raid 上各磁盘状态，等等。该工具可从以下链接下载：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>http://www.lsi.com/downloads/Public/RAID%20Controllers/RAID%20Controllers%20Common%20Files/8.07.10_MegaCLI_Linux.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>常用命令</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -LDInfo -Lall -aALL 查raid级别</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpAllInfo -aALL 查raid卡信息</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -PDList -aALL 查看硬盘信息</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpBbuCmd -aAll 查看电池信息</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -FwTermLog -Dsply -aALL 查看raid卡日志</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -adpCount 【显示适配器个数】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpGetTime –aALL 【显示适配器时间】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpAllInfo -aAll 【显示所有适配器信息】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -LDInfo -LALL -aAll 【显示所有逻辑磁盘组信息】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -PDList -aAll 【显示所有的物理信息】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpBbuCmd -GetBbuStatus -aALL |grep ‘Charger Status’ 【查看充电状态】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpBbuCmd -GetBbuStatus -aALL【显示BBU状态信息】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpBbuCmd -GetBbuCapacityInfo -aALL【显示BBU容量信息】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpBbuCmd -GetBbuDesignInfo -aALL 【显示BBU设计参数】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -AdpBbuCmd -GetBbuProperties -aALL 【显示当前BBU属性】</span></span>
<span class="line"><span>#/opt/MegaRAID/MegaCli/MegaCli64 -cfgdsply -aALL 【显示Raid卡型号，Raid设置，Disk相关信息】</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="磁盘分区查看相关命令" tabindex="-1"><a class="header-anchor" href="#磁盘分区查看相关命令"><span>磁盘分区查看相关命令</span></a></h2><p><strong>什么是分区</strong></p><p>分区就是将一个物理的磁盘，按照一定的容量划分为多个逻辑的磁盘，每个逻辑磁盘可以叫做一个分区。</p><p><strong>分区的好处</strong></p><ul><li><p>有效防止数据丢失，分区损坏不影响其他分区的数据。</p></li><li><p>增加磁盘空间使用效率：可以用不同的区块大小来格式化分区，如果有很多1K的文件，而硬盘分区区块大小为4K，那么每存储一个文件将会浪费3K空间。这时我们需要取这些文件大小的平均值进行区块大小的划分。</p></li><li><p>将数据分区和系统分区分开，可防止应分区满而导致系统挂起问题；</p></li></ul><h3 id="df" tabindex="-1"><a class="header-anchor" href="#df"><span>df</span></a></h3><p>可获取硬盘分区占用空间情况。</p><p><strong>常用参数</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>用法：df [options]</span></span>
<span class="line"><span>参数：</span></span>
<span class="line"><span>    -a或--all：包含全部的文件系统；</span></span>
<span class="line"><span>    --block-size=&lt;区块大小&gt;：以指定的区块大小来显示区块数目；</span></span>
<span class="line"><span>    -h或--human-readable：以可读性较高的方式来显示信息；</span></span>
<span class="line"><span>    -H或--si：与-h参数相同，但在计算时是以1000 Bytes为换算单位而非1024 Bytes；</span></span>
<span class="line"><span>    -i或--inodes：显示inode的信息；</span></span>
<span class="line"><span>    -k或--kilobytes：指定区块大小为1024字节；</span></span>
<span class="line"><span>    -l或--local：仅显示本地端的文件系统；</span></span>
<span class="line"><span>    -m或--megabytes：指定区块大小为1048576字节；</span></span>
<span class="line"><span>    --no-sync：在取得磁盘使用信息前，不要执行sync指令，此为预设值；</span></span>
<span class="line"><span>    -P或--portability：使用POSIX的输出格式；</span></span>
<span class="line"><span>    --sync：在取得磁盘使用信息前，先执行sync指令；</span></span>
<span class="line"><span>    -t&lt;文件系统类型&gt;或--type=&lt;文件系统类型&gt;：仅显示指定文件系统类型的磁盘信息；</span></span>
<span class="line"><span>    -T或--print-type：显示文件系统的类型；</span></span>
<span class="line"><span>    -x&lt;文件系统类型&gt;或--exclude-type=&lt;文件系统类型&gt;：不要显示指定文件系统类型的磁盘信息；</span></span>
<span class="line"><span>    --help：显示帮助；</span></span>
<span class="line"><span>    --version：显示版本信息。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="du" tabindex="-1"><a class="header-anchor" href="#du"><span>du</span></a></h3><p>du 也是查看使用空间的命令，但是他更多是关注目录和文件使用的空间查看。注意一点，当文件句柄被进程占用时，即使我们把文件删除了，虽然磁盘空间释放了，但是使用<code>du</code>查看任然占用，需要重启进程来释放文件句柄，<code>du</code>查看才会准确。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>用法： du [选项][文件]</span></span>
<span class="line"><span>常用参数：</span></span>
<span class="line"><span>    -a或-all 显示目录中个别文件的大小。</span></span>
<span class="line"><span>    -b或-bytes 显示目录或文件大小时，以byte为单位。</span></span>
<span class="line"><span>    -c或--total 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。</span></span>
<span class="line"><span>    -k或--kilobytes 以KB(1024bytes)为单位输出。</span></span>
<span class="line"><span>    -m或--megabytes 以MB为单位输出。</span></span>
<span class="line"><span>    -s或--summarize 仅显示总计，只列出最后加总的值。</span></span>
<span class="line"><span>    -h或--human-readable 以K，M，G为单位，提高信息的可读性。</span></span>
<span class="line"><span>    -x或--one-file-xystem 以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。</span></span>
<span class="line"><span>    -L&lt;符号链接&gt;或--dereference&lt;符号链接&gt; 显示选项中所指定符号链接的源文件大小。</span></span>
<span class="line"><span>    -S或--separate-dirs 显示个别目录的大小时，并不含其子目录的大小。</span></span>
<span class="line"><span>    -X&lt;文件&gt;或--exclude-from=&lt;文件&gt; 在&lt;文件&gt;指定目录或文件。</span></span>
<span class="line"><span>    --exclude=&lt;目录或文件&gt; 略过指定的目录或文件。</span></span>
<span class="line"><span>    -D或--dereference-args 显示指定符号链接的源文件大小。</span></span>
<span class="line"><span>    -H或--si 与-h参数相同，但是K，M，G是以1000为换算单位。</span></span>
<span class="line"><span>    -l或--count-links 重复计算硬件链接的文件。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk"><span>fdisk</span></a></h3><p><code>fdisk</code> 可以查看物理磁盘分区情况，也可以用来做分区操作。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>用法: fdisk [选项][设备文件]</span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>    -b&lt;分区大小&gt;：指定每个分区的大小；</span></span>
<span class="line"><span>    -l：列出指定的外围设备的分区表状况；</span></span>
<span class="line"><span>    -s&lt;分区编号&gt;：将指定的分区大小输出到标准输出上，单位为区块；</span></span>
<span class="line"><span>    -u：搭配&quot;-l&quot;参数列表，会用分区数目取代柱面数目，来表示每个分区的起始地址；</span></span>
<span class="line"><span>    -v：显示版本信息。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>系统维护中，常使用 <code>fdisk -l</code> 命令来查看分区情况。fdisk的分区功能的使用，是采用问答式的命令行交互，因为它涉及到系统分区情况，操作时一定要认真仔细。<a href="http://man.linuxde.net/fdisk" target="_blank" rel="noopener noreferrer">fdisk分区实例</a> 是一个简单的分区过程，可作为参考。</p><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount"><span>mount</span></a></h3><p>磁盘分区后，需要使用该命令挂载分区才能使用。除此之外，也常用来挂载CDROM。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>用法： mount(选项)(设备文件名/加载点)</span></span>
<span class="line"><span>常用参数：</span></span>
<span class="line"><span>    -V：显示程序版本；</span></span>
<span class="line"><span>    -l：显示已加载的文件系统列表；</span></span>
<span class="line"><span>    -h：显示帮助信息并退出；</span></span>
<span class="line"><span>    -v：冗长模式，输出指令执行的详细信息；</span></span>
<span class="line"><span>    -n：加载没有写入文件“/etc/mtab”中的文件系统；</span></span>
<span class="line"><span>    -r：将文件系统加载为只读模式；</span></span>
<span class="line"><span>    -a：加载文件“/etc/fstab”中描述的所有文件系统。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span># 挂载分区 /dev/sdb1 到 /data1挂载点</span></span>
<span class="line"><span>mount /dev/sdb1 /data1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 挂载cdrom </span></span>
<span class="line"><span>mount -t auto /dev/cdrom /mnt/cdrom</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="umount" tabindex="-1"><a class="header-anchor" href="#umount"><span>umount</span></a></h3><p>类似mount，是卸载挂载点。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>用法： umount (选项)（文件系统）</span></span>
<span class="line"><span>参数：</span></span>
<span class="line"><span>    -a：卸除/etc/mtab中记录的所有文件系统；</span></span>
<span class="line"><span>    -h：显示帮助；</span></span>
<span class="line"><span>    -n：卸除时不要将信息存入/etc/mtab文件中；</span></span>
<span class="line"><span>    -r：若无法成功卸除，则尝试以只读的方式重新挂入文件系统；</span></span>
<span class="line"><span>    -t&lt;文件系统类型&gt;：仅卸除选项中所指定的文件系统；</span></span>
<span class="line"><span>    -v：执行时显示详细的信息；</span></span>
<span class="line"><span>    -V：显示版本信息。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span># 卸载分区 /dev/sda1</span></span>
<span class="line"><span>umount -v /dev/sda1  # 通过设备名</span></span>
<span class="line"><span>umount -v /data1  # 通过挂载点</span></span>
<span class="line"><span># 执行延迟卸载，有时候磁盘被占用，卸载失败时，可使用此方式</span></span>
<span class="line"><span>umount -vl /data1/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/%E7%A1%AC%E7%9B%98" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/%E7%A1%AC%E7%9B%98</a></li><li><a href="https://zh.wikipedia.org/wiki/%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98</a></li></ul>`,56)])])}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/pages/102e7b/","title":"Linux基础系列 - 磁盘相关知识及操作命令总结","lang":"zh-CN","frontmatter":{"title":"Linux基础系列 - 磁盘相关知识及操作命令总结","tags":["Linux","Linux基础系列","运维知识库"],"permalink":"/pages/102e7b/","createTime":"2023/09/08 17:36:02","description":"Linux 系统中磁盘信息的查看是比较常用的操作，例如，查看磁盘使用情况、查看磁盘分区等待操作。这里总结一些运维中常用到的命令，以备使用查询。 磁盘的接口 现在磁盘最常用的可简单分为普通的机械盘和SSD(Solid-state drive或Solid-state disk)两种，他们都已不同的接口协议和主板链接，在了解命令之前，我们先来看下，现在服务器...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux基础系列 - 磁盘相关知识及操作命令总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/102e7b/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"Linux基础系列 - 磁盘相关知识及操作命令总结"}],["meta",{"property":"og:description","content":"Linux 系统中磁盘信息的查看是比较常用的操作，例如，查看磁盘使用情况、查看磁盘分区等待操作。这里总结一些运维中常用到的命令，以备使用查询。 磁盘的接口 现在磁盘最常用的可简单分为普通的机械盘和SSD(Solid-state drive或Solid-state disk)两种，他们都已不同的接口协议和主板链接，在了解命令之前，我们先来看下，现在服务器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"运维知识库"}],["meta",{"property":"article:tag","content":"Linux基础系列"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":13.1,"words":3929},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"05.运维/01.linux/05.Linux-disk.md","headers":[],"categoryList":[{"id":"8091bd","sort":5,"name":"运维"},{"id":"44c911","sort":1,"name":"linux"}]}');export{r as comp,t as data};
