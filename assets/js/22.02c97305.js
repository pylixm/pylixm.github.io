(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{347:function(e,s,n){"use strict";n.r(s);var a=n(4),t=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("最近常看到"),s("code",[e._v("pipenv")]),e._v("这个管理工具，今天有时间查了下，是 "),s("a",{attrs:{href:"https://www.kennethreitz.org/values",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kennethreitz"),s("OutboundLink")],1),e._v(" 大神的作品，看了下github的仓库，是2017年1月份创建的，仅仅一年的时间变获得了7k+的收藏，最新一次的提交时间为2天前，可见该仓库活跃程度。自己之前写过一篇文章"),s("a",{attrs:{href:"http://www.pylixm.cc/posts/2016-06-19-Virtualenv-install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《使用 pyenv + virtualenv 打造多版本python开发环境》"),s("OutboundLink")],1),e._v(",遗留个问题，一直没有找到合理的同时管理python和python依赖包的工具，试用了下\t"),s("code",[e._v("pipenv")]),e._v("，可以说完美的解决了python版本及包的管理问题。并且"),s("code",[e._v("pipebv")]),e._v(" 还是"),s("code",[e._v("Python.org")]),e._v("正式推荐的python包管理工具。原文如下：")]),e._v(" "),s("blockquote",[s("p",[e._v("Pipenv — the officially recommended Python packaging tool from Python.org, free (as in freedom).")])]),e._v(" "),s("p",[e._v("那么接下来，分享下我的试用过程，供大家参考：\n")]),e._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),s("h3",{attrs:{id:"试用环境及相关文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#试用环境及相关文档"}},[e._v("#")]),e._v(" 试用环境及相关文档")]),e._v(" "),s("p",[s("strong",[e._v("环境")])]),e._v(" "),s("ul",[s("li",[e._v("pipenv 9.0.1")]),e._v(" "),s("li",[e._v("python3.6")]),e._v(" "),s("li",[e._v("python2.7")])]),e._v(" "),s("p",[s("strong",[e._v("文档")])]),e._v(" "),s("ul",[s("li",[e._v("github仓库地址："),s("a",{attrs:{href:"https://github.com/pypa/pipenv",target:"_blank",rel:"noopener noreferrer"}},[e._v("pipenv"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.pipenv.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pipenv 官方文档"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"pipenv-基本概念理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipenv-基本概念理解"}},[e._v("#")]),e._v(" pipenv 基本概念理解")]),e._v(" "),s("ol",[s("li",[e._v("之前我们使用pip + virtualenv 来管理python依赖包，使用 "),s("code",[e._v("--python=")]),e._v("参数来区分python版本（不再使用pyenv,减少包依赖）。而pipenv的思路简单理解便是把pip和virutalenv 2个工具统一起来，使用 "),s("code",[e._v("pipenv")]),e._v(" 来代替。")]),e._v(" "),s("li",[s("code",[e._v("pipenv")]),e._v(" 使用 Pipfile 来代替 requirement.txt 文件记录python包。")]),e._v(" "),s("li",[e._v("增加了"),s("code",[e._v("Pipfile.lock")]),e._v(" 文件来锁定python软件的包名及版本，以及其依赖关系的列表。")]),e._v(" "),s("li",[e._v("它参考了其他语言的包管理工具（bundler, composer, npm, cargo, yarn, etc.），旨在将最好的包管理工具带入python世界。")])]),e._v(" "),s("h2",{attrs:{id:"pipenv-功能试用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipenv-功能试用"}},[e._v("#")]),e._v(" pipenv 功能试用")]),e._v(" "),s("h3",{attrs:{id:"pipenv-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipenv-安装"}},[e._v("#")]),e._v(" pipenv 安装")]),e._v(" "),s("h4",{attrs:{id:"普通安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通安装"}},[e._v("#")]),e._v(" 普通安装")]),e._v(" "),s("p",[s("code",[e._v("pipenv")]),e._v(" 可使用 pip 直接安装。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pip install pipenv \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("作者推荐在"),s("code",[e._v("python3")]),e._v("下边安装，会提高与virtualenv的兼容性。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("The use of Python 3 is highly preferred over Python 2, when installing Pipenv. Compatibility with three virtualenvs is greatly improved when using Python 3 as the installation target.\n\n—Kenneth Reitz\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h4",{attrs:{id:"用户模式安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户模式安装"}},[e._v("#")]),e._v(" 用户模式安装")]),e._v(" "),s("p",[e._v("为防止和系统python库产生影响，可使用此种方案安装。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pip install --user pipenv\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("pip 默认安装包路径为"),s("code",[e._v("/usr/local/lib/python2.7/site-packages")]),e._v("。此模式下，pip安装包保存路径为用户库路径,一般为"),s("code",[e._v("/Users/pylixm/Library/Python/3.6/lib/python/site-packages")]),e._v(", 可使用命令"),s("code",[e._v("python3 -m site --user-site")]),e._v(" 具体查看。如果在安装后你的shell中pipenv不可用，你需要把用户库的二进制目录"),s("code",[e._v("/Users/pylixm/Library/Python/3.6/bin")]),e._v("添加到你的PATH中。")]),e._v(" "),s("h3",{attrs:{id:"pipenv-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipenv-使用"}},[e._v("#")]),e._v(" pipenv 使用")]),e._v(" "),s("h4",{attrs:{id:"初始化虚拟环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化虚拟环境"}},[e._v("#")]),e._v(" 初始化虚拟环境")]),e._v(" "),s("p",[e._v("执行"),s("code",[e._v("pipenv install")]),e._v("，创建虚拟环境，如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("~/laboratory/pip_test_project ⌚ 20:42:10\n$ pipenv install\nCreating a virtualenv for this project…\n⠋New python executable in /Users/pylixm/.local/share/virtualenvs/pip_test_project-MXA0TC90/bin/python2.7\nAlso creating executable in /Users/pylixm/.local/share/virtualenvs/pip_test_project-MXA0TC90/bin/python\nInstalling setuptools, pip, wheel...done.\n\nVirtualenv location: /Users/pylixm/.local/share/virtualenvs/pip_test_project-MXA0TC90\nCreating a Pipfile for this project…\nPipfile.lock not found, creating…\nLocking [dev-packages] dependencies…\nLocking [packages] dependencies…\nUpdated Pipfile.lock (c23e27)!\nInstalling dependencies from Pipfile.lock (c23e27)…\n▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 0/0 — 00:00:00\nTo activate this project's virtualenv, run the following:\n $ pipenv shell\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("p",[e._v("从打印信息可见，它在目录用户目录"),s("code",[e._v(".local")]),e._v("下创建了个和项目同名的虚拟环境(可通过配置环境变量来自定义虚拟环境目录，"),s("code",[e._v("export WORKON_HOME=~/.venvs")]),e._v(")，python使用的是默认的python2.7 。\n可通过参数"),s("code",[e._v("--two")]),e._v(" 和"),s("code",[e._v("--three")]),e._v(" 来泛指python版本，也可通过"),s("code",[e._v("--python 3.5")]),e._v(" 来明确知道python版本，但是这些参数的前提是你系统上有此python版本，否则会报如下错误：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ pipenv --python 3.5\nWarning: Python 3.5 was not found on your system…\nYou can specify specific versions of Python with:\n  $ pipenv --python path/to/python\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("有点像 virtualenv 的 "),s("code",[e._v("--python")]),e._v("参数。")]),e._v(" "),s("p",[e._v("初始化好虚拟环境后，会在项目目录下生成2个文件"),s("code",[e._v("Pipfile")]),e._v("和"),s("code",[e._v("Pipfile.lock")]),e._v("。为pipenv包的配置文件，代替原来的 requirement.txt。项目提交时，可将"),s("code",[e._v("Pipfile")]),e._v(" 文件和"),s("code",[e._v("Pipfile.lock")]),e._v("文件受控提交,待其他开发克隆下载，根据此Pipfile 运行命令"),s("code",[e._v("pipenv install [--dev]")]),e._v("生成自己的虚拟环境。")]),e._v(" "),s("p",[s("code",[e._v("Pipfile.lock")]),e._v(" 文件是通过hash算法将包的名称和版本，及依赖关系生成哈希值，可以保证包的完整性。")]),e._v(" "),s("h4",{attrs:{id:"安装python模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装python模块"}},[e._v("#")]),e._v(" 安装python模块")]),e._v(" "),s("h5",{attrs:{id:"正常安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正常安装"}},[e._v("#")]),e._v(" 正常安装")]),e._v(" "),s("p",[e._v("安装 "),s("code",[e._v("requests")]),e._v(" 模块：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ pipenv install requests\nInstalling requests…\nCollecting requests\n  Using cached requests-2.18.4-py2.py3-none-any.whl\nCollecting certifi>=2017.4.17 (from requests)\n  Using cached certifi-2017.11.5-py2.py3-none-any.whl\nCollecting idna<2.7,>=2.5 (from requests)\n  Using cached idna-2.6-py2.py3-none-any.whl\nCollecting urllib3<1.23,>=1.21.1 (from requests)\n  Using cached urllib3-1.22-py2.py3-none-any.whl\nCollecting chardet<3.1.0,>=3.0.2 (from requests)\n  Using cached chardet-3.0.4-py2.py3-none-any.whl\nInstalling collected packages: certifi, idna, urllib3, chardet, requests\nSuccessfully installed certifi-2017.11.5 chardet-3.0.4 idna-2.6 requests-2.18.4 urllib3-1.22\n\nAdding requests to Pipfile's [packages]…\n  PS: You have excellent taste!\nLocking [dev-packages] dependencies…\nLocking [packages] dependencies…\nUpdated Pipfile.lock (2f8679)! \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br")])]),s("p",[e._v("可通过命令"),s("code",[e._v("pipenv graph")]),e._v(" 查看已安装模块，同时可查看他们直接的相互依赖情况。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ pipenv graph\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("requests")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.18")]),e._v(".4\n  - certifi "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("required: "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017.4")]),e._v(".17, installed: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017.11")]),e._v(".5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  - chardet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("required: "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.1")]),e._v(".0,"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.0")]),e._v(".2, installed: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.0")]),e._v(".4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  - idna "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("required: "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.5")]),e._v(","),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.7")]),e._v(", installed: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  - urllib3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("required: "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.21")]),e._v(".1,"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.23")]),e._v(", installed: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h5",{attrs:{id:"只安装开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只安装开发环境"}},[e._v("#")]),e._v(" 只安装开发环境")]),e._v(" "),s("p",[e._v("可通过以下命令，仅安装在开发环境,")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pipenv install --dev requests --three\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("区别反映在"),s("code",[e._v("Pipfile")]),e._v(" 上为:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('[[source]]\n\nurl = "https://pypi.python.org/simple"\nverify_ssl = true\nname = "pypi"\n\n[dev-packages]\n\n\n[packages]\n\nrequests = "*"\nflask = "==0.10"\n\n[requires]\npython_version = "3.6"\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("p",[e._v("安装包记录是在"),s("code",[e._v("[dev-packages]")]),e._v(" 部分，还是"),s("code",[e._v("[packages]")]),e._v(" 部分。在安装时，指定"),s("code",[e._v("--dev")]),e._v("参数，则只安装"),s("code",[e._v("[dev-packages]")]),e._v("下的包,若安装时不定指定"),s("code",[e._v("--dev")]),e._v("参数，只会安装"),s("code",[e._v("[packages]")]),e._v(" 包下面的模块。")]),e._v(" "),s("p",[s("code",[e._v("[requires]")]),e._v(" 下的python在构建新的虚拟环境时，若没有会自动下载安装。")]),e._v(" "),s("h5",{attrs:{id:"通过-requirements-txt-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-requirements-txt-安装"}},[e._v("#")]),e._v(" 通过 requirements.txt 安装")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pipenv install -r requirements.txt\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这样我们可以重用之前的requirement.txt 文件来构建我们新的开发环境，可以把我们的项目顺利的迁到pipenv。")]),e._v(" "),s("p",[e._v("可通过以下命令生成requirements 文件：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pipenv lock -r [--dev] > requirements.txt\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"运行虚拟环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行虚拟环境"}},[e._v("#")]),e._v(" 运行虚拟环境")]),e._v(" "),s("p",[e._v("可使用以下命令来运行项目：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pipenv run python xxx.py\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("或者启动虚拟环境的shell环境：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("~/laboratory/pip_test_project\n$ pipenv shell --anyway\nSpawning environment shell (/bin/zsh). Use 'exit' to leave.\nsource /Users/pylixm/.local/share/virtualenvs/pip_test_project-MXA0TC90/bin/activate\n\n~/laboratory/pip_test_project \n$ source /Users/pylixm/.local/share/virtualenvs/pip_test_project-MXA0TC90/bin/activate\n(pip_test_project-MXA0TC90)\n~/laboratory/pip_test_project\n$ exit\n\n~/laboratory/pip_test_project\n$ pipenv shell\nShell for UNKNOWN_VIRTUAL_ENVIRONMENT already activated.\nNo action taken to avoid nested environments.\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("p",[e._v("直接运行"),s("code",[e._v("pipenv shell")]),e._v(" 并不会出现shell命令行，是应为没有配置环境变量。还需要进一步研究，貌似需要配置环境变了，一直没找到。")]),e._v(" "),s("p",[s("code",[e._v("pipenv")]),e._v(" 提供了"),s("code",[e._v(".env")]),e._v(" 文件，放在项目目录下，提供项目所需的环境变量，运行"),s("code",[e._v("pipenv shell")]),e._v(" 时，会自动加载。")]),e._v(" "),s("h4",{attrs:{id:"删除虚拟环境及包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除虚拟环境及包"}},[e._v("#")]),e._v(" 删除虚拟环境及包")]),e._v(" "),s("p",[e._v("删除包:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pipenv uninstall reuqests\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("删除虚拟环境：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pipenv --rm \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("pipenv")]),e._v(" 完美的解决了python的包和版本的管理。")]),e._v(" "),s("li",[e._v("并对包之间的依赖关系也管理起来，方便了开发者构建自己的开发运行环境。")])]),e._v(" "),s("p",[e._v("时间有限，以上列举的仅为部分功能，更多的强大功能详见"),s("a",{attrs:{href:"https://docs.pipenv.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.pipenv.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.pipenv.org/"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);