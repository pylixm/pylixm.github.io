(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{385:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("RouterLink",{attrs:{to:"/01.开发语言/01.Python/03.Best.Practices.for.Django/2016-05-22-Best.Practices.for.Django.1.8.3rd-Index.html"}},[s._v("其他章节索引页")])],1),s._v(" "),t("h1",{attrs:{id:"第五章-settings-和-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五章-settings-和-requirements"}},[s._v("#")]),s._v(" 第五章 Settings 和 Requirements")]),s._v(" "),t("h2",{attrs:{id:"避免本地未受控的-settings-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免本地未受控的-settings-文件"}},[s._v("#")]),s._v(" 避免本地未受控的 settings 文件")]),s._v(" "),t("ul",[t("li",[s._v("代码维护困难")]),s._v(" "),t("li",[s._v("多人开发时，勿提交local settings 文件，造成配置混乱。")])]),s._v(" "),t("h2",{attrs:{id:"使用多分配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用多分配置文件"}},[s._v("#")]),s._v(" 使用多分配置文件")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("settings"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n    __init__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    local"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    staging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    production"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用：")]),s._v(" "),t("p",[s._v("方法一：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("python manage.py shell --settings=twoscoops.settings.local\npython manage.py runserver --settings=twoscoops.settings.local\n")])])]),t("p",[s._v("方法二：")]),s._v(" "),t("p",[s._v("通过设置"),t("code",[s._v("DJANGO_SETTINGS_MODULE")]),s._v(" 和 "),t("code",[s._v("PYTHONPATH")]),s._v("环境变量来代替 "),t("code",[s._v("--settings")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("方法三：")]),s._v(" "),t("p",[s._v("设置 virtualenv 的postactivate 脚本，在启动环境时，配置"),t("code",[s._v("DJANGO_SETTINGS_MODULE")]),s._v(" 和 "),t("code",[s._v("PYTHONPATH")]),s._v("环境变量。")]),s._v(" "),t("h2",{attrs:{id:"多开发配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多开发配置文件"}},[s._v("#")]),s._v(" 多开发配置文件")]),s._v(" "),t("p",[s._v("多人开发时，可提交自己的开发配置文件。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("settings"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n    __init__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    dev_audreyr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    dev_pydanny"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    local"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"将秘钥等安全性高的变量放到环境变量中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将秘钥等安全性高的变量放到环境变量中"}},[s._v("#")]),s._v(" 将秘钥等安全性高的变量放到环境变量中")]),s._v(" "),t("p",[s._v("注意：")]),s._v(" "),t("p",[s._v("Apache 有自己的环境变量系统，需要注意区分。")]),s._v(" "),t("h3",{attrs:{id:"设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[s._v("#")]),s._v(" 设置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SOME_SECRET_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1c3-cr3am-15-yummy\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUDREY_FREEZER_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("y34h-r1ght-d0nt-t0uch-my-1c3-cr34m\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取"}},[s._v("#")]),s._v(" 获取")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("environ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SOME_SECRET_KEY"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1c3-cr3am-15-yummy"')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("配置文件使用：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# Top of settings/production.py\nimport os\nSOME_SECRET_KEY = os.environ["SOME_SECRET_KEY"]\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"在settings配置文件中不要使用绝对路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在settings配置文件中不要使用绝对路径"}},[s._v("#")]),s._v(" 在settings配置文件中不要使用绝对路径")]),s._v(" "),t("h2",{attrs:{id:"requirements-管理思路和-settings一致"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements-管理思路和-settings一致"}},[s._v("#")]),s._v(" Requirements 管理思路和 settings一致")])])}),[],!1,null,null,null);t.default=e.exports}}]);