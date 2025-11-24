import{_ as n,c as i,a,o as l}from"./app-Cpl7-wzY.js";const e={};function p(t,s){return l(),i("div",null,[...s[0]||(s[0]=[a(`<p>对于windows用户如果用Cygwin模拟unix环境的话，里面没有带curl命令，要自己装，所以建议用Gow来模拟，它已经自带了curl工具，安装后直接在cmd环境中用curl命令就可，因为路径已经自动给你配置好了。</p><p>linux curl是一个利用URL规则在命令行下工作的文件传输工具。它支持文件的上传和下载，所以是综合传输工具，但按传统，习惯称url为下载工具。</p><h2 id="curl命令参数" tabindex="-1"><a class="header-anchor" href="#curl命令参数"><span>curl命令参数</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>　　-a/--append 上传文件时，附加到目标文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-A/--user-agent &lt;string&gt;  设置用户代理发送给服务器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　- anyauth   可以使用“任何”身份验证方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-b/--cookie &lt;name=string/file&gt; cookie字符串或文件读取位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　- basic 使用HTTP基本验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-B/--use-ascii 使用ASCII /文本传输</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-c/--cookie-jar &lt;file&gt; 操作结束后把cookie写入到这个文件中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-C/--continue-at &lt;offset&gt;  断点续转</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-d/--data &lt;data&gt;   HTTP POST方式传送数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--data-ascii &lt;data&gt;  以ascii的方式post数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--data-binary &lt;data&gt; 以二进制的方式post数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--negotiate     使用HTTP身份验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--digest        使用数字身份验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--disable-eprt  禁止使用EPRT或LPRT</span></span>
<span class="line"><span>　　--disable-epsv  禁止使用EPSV</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-D/--dump-header &lt;file&gt; 把header信息写入到该文件中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--egd-file &lt;file&gt; 为随机数据(SSL)设置EGD socket路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--tcp-nodelay   使用TCP_NODELAY选项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-e/--referer 来源网址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-E/--cert &lt;cert[:passwd]&gt; 客户端证书文件和密码 (SSL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--cert-type &lt;type&gt; 证书文件类型 (DER/PEM/ENG) (SSL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--key &lt;key&gt;     私钥文件名 (SSL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--key-type &lt;type&gt; 私钥文件类型 (DER/PEM/ENG) (SSL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--pass  &lt;pass&gt;  私钥密码 (SSL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--engine &lt;eng&gt;  加密引擎使用 (SSL). &quot;--engine list&quot; for list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--cacert &lt;file&gt; CA证书 (SSL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--capath &lt;directory&gt; CA目录 (made using c_rehash) to verify peer against (SSL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ciphers &lt;list&gt;  SSL密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--compressed    要求返回是压缩的形势 (using deflate or gzip)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--connect-timeout &lt;seconds&gt; 设置最大请求时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--create-dirs   建立本地目录的目录层次结构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--crlf          上传是把LF转变成CRLF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-f/--fail          连接失败时不显示http错误</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ftp-create-dirs 如果远程目录不存在，创建远程目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ftp-method [multicwd/nocwd/singlecwd] 控制CWD的使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ftp-pasv      使用 PASV/EPSV 代替端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ftp-skip-pasv-ip 使用PASV的时候,忽略该IP地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ftp-ssl       尝试用 SSL/TLS 来进行ftp数据传输</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ftp-ssl-reqd  要求用 SSL/TLS 来进行ftp数据传输</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-F/--form &lt;name=content&gt; 模拟http表单提交数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-form-string &lt;name=string&gt; 模拟http表单提交数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-g/--globoff 禁用网址序列和范围使用{}和[]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-G/--get 以get的方式来发送数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-h/--help 帮助</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-H/--header &lt;line&gt;自定义头信息传递给服务器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ignore-content-length  忽略的HTTP头信息的长度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-i/--include 输出时包括protocol头信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-I/--head  只显示文档信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　从文件中读取-j/--junk-session-cookies忽略会话Cookie</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　- 界面&lt;interface&gt;指定网络接口/地址使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　- krb4 &lt;级别&gt;启用与指定的安全级别krb4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-j/--junk-session-cookies 读取文件进忽略session cookie</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--interface &lt;interface&gt; 使用指定网络接口/地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--krb4 &lt;level&gt;  使用指定安全级别的krb4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-k/--insecure 允许不使用证书到SSL站点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-K/--config  指定的配置文件读取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-l/--list-only 列出ftp目录下的文件名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--limit-rate &lt;rate&gt; 设置传输速度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--local-port&lt;NUM&gt; 强制使用本地端口号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-m/--max-time &lt;seconds&gt; 设置最大传输时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--max-redirs &lt;num&gt; 设置最大读取的目录数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--max-filesize &lt;bytes&gt; 设置最大下载的文件总量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-M/--manual  显示全手动</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-n/--netrc 从netrc文件中读取用户名和密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--netrc-optional 使用 .netrc 或者 URL来覆盖-n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--ntlm          使用 HTTP NTLM 身份验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-N/--no-buffer 禁用缓冲输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-o/--output 把输出写到该文件中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-O/--remote-name 把输出写到该文件中，保留远程文件的文件名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-p/--proxytunnel   使用HTTP代理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--proxy-anyauth 选择任一代理身份验证方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--proxy-basic   在代理上使用基本身份验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--proxy-digest  在代理上使用数字身份验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--proxy-ntlm    在代理上使用ntlm身份验证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-P/--ftp-port &lt;address&gt; 使用端口地址，而不是使用PASV</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-Q/--quote &lt;cmd&gt;文件传输前，发送命令到服务器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-r/--range &lt;range&gt;检索来自HTTP/1.1或FTP服务器字节范围</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--range-file 读取（SSL）的随机文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-R/--remote-time   在本地生成文件时，保留远程文件时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--retry &lt;num&gt;   传输出现问题时，重试的次数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--retry-delay &lt;seconds&gt;  传输出现问题时，设置重试间隔时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--retry-max-time &lt;seconds&gt; 传输出现问题时，设置最大重试时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-s/--silent静音模式。不输出任何东西</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-S/--show-error   显示错误</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--socks4 &lt;host[:port]&gt; 用socks4代理给定主机和端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--socks5 &lt;host[:port]&gt; 用socks5代理给定主机和端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--stderr &lt;file&gt;</span></span>
<span class="line"><span>-t/--telnet-option &lt;OPT=val&gt; Telnet选项设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--trace &lt;file&gt;  对指定文件进行debug</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--trace-ascii &lt;file&gt; Like --跟踪但没有hex输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--trace-time    跟踪/详细输出时，添加时间戳</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-T/--upload-file &lt;file&gt; 上传文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--url &lt;URL&gt;     Spet URL to work with</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-u/--user &lt;user[:password]&gt;设置服务器的用户和密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-U/--proxy-user &lt;user[:password]&gt;设置代理用户名和密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-v/--verbose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-V/--version 显示版本信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-w/--write-out [format]什么输出完成后</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-x/--proxy &lt;host[:port]&gt;在给定的端口上使用HTTP代理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-X/--request &lt;command&gt;指定什么命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-y/--speed-time 放弃限速所要的时间。默认为30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-Y/--speed-limit 停止传输速度的限制，速度时间&#39;秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-z/--time-cond  传送时间设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-0/--http1.0  使用HTTP 1.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-1/--tlsv1  使用TLSv1（SSL）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-2/--sslv2 使用SSLv2的（SSL）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-3/--sslv3         使用的SSLv3（SSL）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--3p-quote      like -Q for the source URL for 3rd party transfer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--3p-url        使用url，进行第三方传送</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　--3p-user       使用用户名和密码，进行第三方传送</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-4/--ipv4   使用IP4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-6/--ipv6   使用IP6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　-#/--progress-bar 用进度条显示当前的传送状态</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用curl实例" tabindex="-1"><a class="header-anchor" href="#常用curl实例"><span>常用curl实例</span></a></h2><h2 id="_1-抓取页面内容到一个文件中" tabindex="-1"><a class="header-anchor" href="#_1-抓取页面内容到一个文件中"><span>1，抓取页面内容到一个文件中</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -o home.html  http://blog.51yip.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -o home.html  http://blog.51yip.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-用-o-大写的-后面的url要具体到某个文件-不然抓不下来。我们还可以用正则来抓取东西" tabindex="-1"><a class="header-anchor" href="#_2-用-o-大写的-后面的url要具体到某个文件-不然抓不下来。我们还可以用正则来抓取东西"><span>2，用-O（大写的），后面的url要具体到某个文件，不然抓不下来。我们还可以用正则来抓取东西</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -O</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -O</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-模拟表单信息-模拟登录-保存cookie信息" tabindex="-1"><a class="header-anchor" href="#_3-模拟表单信息-模拟登录-保存cookie信息"><span>3，模拟表单信息，模拟登录，保存cookie信息</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -c ./cookie_c.txt -F log=aaaa -F pwd=****** http://blog.51yip.com/wp-login.php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -c ./cookie_c.txt -F log=aaaa -F pwd=****** http://blog.51yip.com/wp-login.php</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-模拟表单信息-模拟登录-保存头信息" tabindex="-1"><a class="header-anchor" href="#_4-模拟表单信息-模拟登录-保存头信息"><span>4，模拟表单信息，模拟登录，保存头信息</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -D ./cookie_D.txt -F log=aaaa -F pwd=****** http://blog.51yip.com/wp-login.php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -D ./cookie_D.txt -F log=aaaa -F pwd=****** http://blog.51yip.com/wp-login.php</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-c(小写)产生的cookie和-D里面的cookie是不一样的。</p><h2 id="_5-使用cookie文件" tabindex="-1"><a class="header-anchor" href="#_5-使用cookie文件"><span>5，使用cookie文件</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -b ./cookie_c.txt  http://blog.51yip.com/wp-admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -b ./cookie_c.txt  http://blog.51yip.com/wp-admin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-断点续传-c-大写的" tabindex="-1"><a class="header-anchor" href="#_6-断点续传-c-大写的"><span>6，断点续传，-C(大写的)</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -C -O</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_7-传送数据-最好用登录页面测试-因为你传值过去后-curl回抓数据-你可以看到你传值有没有成功" tabindex="-1"><a class="header-anchor" href="#_7-传送数据-最好用登录页面测试-因为你传值过去后-curl回抓数据-你可以看到你传值有没有成功"><span>7，传送数据,最好用登录页面测试，因为你传值过去后，curl回抓数据，你可以看到你传值有没有成功</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -d log=aaaa  http://blog.51yip.com/wp-login.php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -d log=aaaa  http://blog.51yip.com/wp-login.php</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-显示抓取错误-下面这个例子-很清楚的表明了。" tabindex="-1"><a class="header-anchor" href="#_8-显示抓取错误-下面这个例子-很清楚的表明了。"><span>8，显示抓取错误，下面这个例子，很清楚的表明了。</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -f http://blog.51yip.com/asdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>curl: (22) The requested URL returned error: 404</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl http://blog.51yip.com/asdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;HTML&gt;&lt;HEAD&gt;&lt;TITLE&gt;404,not found&lt;/TITLE&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>。。。。。。。。。。。。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -f http://blog.51yip.com/asdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>curl: (22) The requested URL returned error: 404</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl http://blog.51yip.com/asdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;HTML&gt;&lt;HEAD&gt;&lt;TITLE&gt;404,not found&lt;/TITLE&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>。。。。。。。。。。。。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-伪造来源地址-有的网站会判断-请求来源地址。" tabindex="-1"><a class="header-anchor" href="#_9-伪造来源地址-有的网站会判断-请求来源地址。"><span>9，伪造来源地址，有的网站会判断，请求来源地址。</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -e http://localhost http://blog.51yip.com/wp-login.php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -e http://localhost http://blog.51yip.com/wp-login.php</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-当我们经常用curl去搞人家东西的时候-人家会把你的ip给屏蔽掉的-这个时候-我们可以用代理" tabindex="-1"><a class="header-anchor" href="#_10-当我们经常用curl去搞人家东西的时候-人家会把你的ip给屏蔽掉的-这个时候-我们可以用代理"><span>10，当我们经常用curl去搞人家东西的时候，人家会把你的IP给屏蔽掉的,这个时候,我们可以用代理</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -x 24.10.28.84:32779 -o home.html http://blog.51yip.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@pylixm mytest]# curl -x 24.10.28.84:32779 -o home.html http://blog.51yip.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-比较大的东西-我们可以分段下载" tabindex="-1"><a class="header-anchor" href="#_11-比较大的东西-我们可以分段下载"><span>11，比较大的东西，我们可以分段下载</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@pylixm mytest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># curl -r 0-100 -o img.part1 http://blog.51yip.com/wp-content/uploads/2010/09/compare_varnish.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">%</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Received</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Xferd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Average</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Speed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">     Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Current</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Dload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Upload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Spent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Left</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Speed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">100</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   101</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  100</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   101</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    105</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@pylixm mytest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># curl -r 100-200 -o img.part2 http://blog.51yip.com/wp-content/uploads/2010/09/compare_varnish.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">%</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Received</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Xferd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Average</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Speed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">     Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Current</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Dload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Upload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Spent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Left</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Speed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">100</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   101</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  100</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   101</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     57</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  0:00:01</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  0:00:01</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@pylixm mytest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># curl -r 200- -o img.part3 http://blog.51yip.com/wp-content/uploads/2010/09/compare_varnish.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">%</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Received</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Xferd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Average</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Speed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">     Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Current</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Dload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Upload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Spent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Left</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Speed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">100</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  104k</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  100</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  104k</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  52793</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  0:00:02</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  0:00:02</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 88961</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@pylixm mytest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># ls </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> part</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> xargs</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> du</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">4.0K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    one.part1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">112K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    three.part3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">4.0K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    two.part2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@pylixm mytest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># curl -r 0-100 -o img.part1 http://blog.51yip.com/wp-content/uploads/2010/09/compare_varnish.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">%</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Received</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Xferd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Average</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Speed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">     Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Current</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Dload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Upload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Spent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Left</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Speed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">100</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   101</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  100</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   101</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    105</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@pylixm mytest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># curl -r 100-200 -o img.part2 http://blog.51yip.com/wp-content/uploads/2010/09/compare_varnish.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">%</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Received</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Xferd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Average</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Speed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">     Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Current</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Dload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Upload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Spent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Left</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Speed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">100</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   101</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  100</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   101</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     57</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  0:00:01</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  0:00:01</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@pylixm mytest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># curl -r 200- -o img.part3 http://blog.51yip.com/wp-content/uploads/2010/09/compare_varnish.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">%</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Received</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> %</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Xferd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Average</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Speed</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">     Time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Current</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Dload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Upload</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   Spent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    Left</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  Speed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">100</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  104k</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  100</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  104k</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  52793</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  0:00:02</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  0:00:02</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --:--:--</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 88961</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">root@pylixm mytest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># ls </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> part</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> xargs</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> du</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">4.0K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    one.part1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">112K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    three.part3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">4.0K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    two.part2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用的时候，把他们cat一下就OK了,cat img.part* &gt;img.jpg</p><h2 id="_12-不会显示下载进度信息" tabindex="-1"><a class="header-anchor" href="#_12-不会显示下载进度信息"><span>12，不会显示下载进度信息</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>[root@pylixm mytest]# curl -s -o aaa.jpg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_13-显示下载进度条" tabindex="-1"><a class="header-anchor" href="#_13-显示下载进度条"><span>13，显示下载进度条</span></a></h2><p>[root@pylixm mytest]# curl -# -O</p><p>######################################################################## 100.0%</p><p>14,通过ftp下载文件</p><p>[zhangy@BlackGhost ~]$ curl -u 用户名:密码 -O http://blog.51yip.com/demo/curtain/bbstudy_files/style.css</p><p>% Total % Received % Xferd Average Speed Time Time Time Current</p><p>Dload Upload Total Spent Left Speed</p><p>101 1934 101 1934 0 0 3184 0 --:--:-- --:--:-- --:--:-- 7136</p><p>[zhangy@BlackGhost ~]$ curl -u 用户名:密码 -O http://blog.51yip.com/demo/curtain/bbstudy_files/style.css</p><p>% Total % Received % Xferd Average Speed Time Time Time Current</p><p>Dload Upload Total Spent Left Speed</p><p>101 1934 101 1934 0 0 3184 0 --:--:-- --:--:-- --:--:-- 7136</p><p>或者用下面的方式</p><p>[zhangy@BlackGhost ~]$ curl -O ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/style.css</p><p>[zhangy@BlackGhost ~]$ curl -O ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/style.css</p><p>15，通过ftp上传</p><p>[zhangy@BlackGhost ~]$ curl -T test.sql ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/</p><p>[zhangy@BlackGhost ~]$ curl -T test.sql ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/</p>`,49)])])}const r=n(e,[["render",p]]),h=JSON.parse('{"path":"/pages/e6c976/","title":"Linux基础系列 - curl 命令详解","lang":"zh-CN","frontmatter":{"title":"Linux基础系列 - curl 命令详解","tags":["linux","curl"],"permalink":"/pages/e6c976/","createTime":"2023/09/08 17:36:02","description":"对于windows用户如果用Cygwin模拟unix环境的话，里面没有带curl命令，要自己装，所以建议用Gow来模拟，它已经自带了curl工具，安装后直接在cmd环境中用curl命令就可，因为路径已经自动给你配置好了。 linux curl是一个利用URL规则在命令行下工作的文件传输工具。它支持文件的上传和下载，所以是综合传输工具，但按传统，习惯称u...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux基础系列 - curl 命令详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-09-30T08:57:49.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pylixm.top/pages/e6c976/"}],["meta",{"property":"og:site_name","content":"底层逻辑"}],["meta",{"property":"og:title","content":"Linux基础系列 - curl 命令详解"}],["meta",{"property":"og:description","content":"对于windows用户如果用Cygwin模拟unix环境的话，里面没有带curl命令，要自己装，所以建议用Gow来模拟，它已经自带了curl工具，安装后直接在cmd环境中用curl命令就可，因为路径已经自动给你配置好了。 linux curl是一个利用URL规则在命令行下工作的文件传输工具。它支持文件的上传和下载，所以是综合传输工具，但按传统，习惯称u..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-30T08:57:49.000Z"}],["meta",{"property":"article:tag","content":"curl"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:modified_time","content":"2025-09-30T08:57:49.000Z"}]]},"readingTime":{"minutes":7.99,"words":2398},"git":{"createdTime":1759222669000,"updatedTime":1759222669000,"contributors":[{"name":"pylixm","username":"pylixm","email":"pyli.xm@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pylixm?v=4","url":"https://github.com/pylixm"}]},"autoDesc":true,"filePathRelative":"05.运维/01.linux/03.Linux-Curl.md","headers":[],"categoryList":[{"id":"8091bd","sort":5,"name":"运维"},{"id":"44c911","sort":1,"name":"linux"}]}');export{r as comp,h as data};
