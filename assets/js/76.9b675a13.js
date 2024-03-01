(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{401:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("到目前为止，Flask 最新版本为"),t("code",[s._v("1.0.3")]),s._v("，我们来以此版本做分析，以便可以快速回忆各组件关系。")]),s._v(" "),t("p",[s._v("基本使用，可参阅"),t("a",{attrs:{href:"http://flask.pocoo.org/docs/1.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("，已非常详尽。")]),s._v(" "),t("p",[s._v("我们知道Flask，是一个"),t("code",[s._v("微")]),s._v("框架，只所以叫"),t("code",[s._v("微")]),s._v("是因为它没有像Django那样把所有的事情都帮你处理了。它只提供给我们web开发很核心的部分，其他的像数据库处理、模板引擎的选择等都交给了外部的插件处理。这也是Flask的一大特点，插件化。我们可以很灵活的组织我们的项目框架。但有选择，就有问题，这是一柄双刃剑。随着Flask插件生态的繁荣，它已经可以满足大多数的项目需求。甚至github的收藏数已超过Django,稳居python web开发框架之首。一切事物都是相对的，框架亦是如此，没有优劣，只有合适与否。")]),s._v(" "),t("p",[s._v("那么Flask的插件是如何运作的，一个基本的Flask开发框架都需要什么模块呢？让我们带着这些问题，展开今天的分析。\n")]),s._v(" "),t("h3",{attrs:{id:"一个最小的flask应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个最小的flask应用"}},[s._v("#")]),s._v(" 一个最小的Flask应用")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask\napp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello_world")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World!'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("分析：")]),s._v(" "),t("ul",[t("li",[s._v("1、首先初始化了Flask引用的实例"),t("code",[s._v("app")]),s._v("，这个实例可以提供给"),t("code",[s._v("wsgi")]),s._v("协议的web服务器来运行。也可通过如上的"),t("code",[s._v("run()")]),s._v("函数自己运行，不过这个只限开发，性能非常低下。")]),s._v(" "),t("li",[s._v("2、接下来，在这个"),t("code",[s._v("app")]),s._v("上注册了路由，和处理函数。我们大部分的业务逻辑应该在这个处理函数中。")]),s._v(" "),t("li",[s._v("3、最后，直接返回数据，并没有涉及模板和数据库。")])]),s._v(" "),t("h3",{attrs:{id:"完整项目分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整项目分析"}},[s._v("#")]),s._v(" 完整项目分析")]),s._v(" "),t("p",[s._v("以 "),t("code",[s._v("cookiecutter")]),s._v(" 模板为例："),t("a",{attrs:{href:"https://github.com/pylixm/flask_boilerplate",target:"_blank",rel:"noopener noreferrer"}},[s._v("flask_boilerplate"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("项目目录结构如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ tree\n.\n├── LICENSE\n├── Procfile  \n├── README.rst\n├── assets   # 静态文件，提供给webpack打包使用\n│   ├── css \n│   │   └── style.css\n│   ├── img\n│   └── js\n│       ├── main.js\n│       ├── plugins.js\n│       └── script.js\n├── autoapp.py  # flask app 启动入口\n├── flask_boilerplate  # flask 代码目录 \n│   ├── __init__.py   \n│   ├── app.py   # flask app 创建代码\n│   ├── commands.py   # flask 命令扩展代码\n│   ├── compat.py   # python 2和3 的兼容代码\n│   ├── database.py   # 数据库 model 代码，可根据复杂程度，分拆多个模块文件\n│   ├── extensions.py   # 扩展统一实例化，方便控制前后顺序，防止循环引用\n│   ├── public   # 蓝图\n│   │   ├── __init__.py \n│   │   ├── forms.py  \n│   │   └── views.py\n│   ├── settings.py   # 项目整体配置\n│   ├── static   # 静态文件，Flask 默认目录\n│   │   └── build\n│   ├── templates   # 模板文件，flask 默认目录\n│   │   ├── 401.html\n│   │   ├── 404.html\n│   │   ├── 500.html\n│   │   ├── footer.html\n│   │   ├── layout.html\n│   │   ├── nav.html\n│   │   ├── public\n│   │   │   ├── about.html\n│   │   │   ├── home.html\n│   │   │   └── register.html\n│   │   └── users\n│   │       └── members.html\n│   ├── user    # 蓝图\n│   │   ├── __init__.py\n│   │   ├── forms.py\n│   │   ├── models.py\n│   │   └── views.py\n│   └── utils.py  工具包\n├── package.json   # npm 配置文件\n├── requirements  # python 模块列表\n│   ├── dev.txt\n│   └── prod.txt\n├── requirements.txt\n├── setup.cfg\n├── tests\n└── webpack.config.js  # webpack配置文件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br")])]),t("p",[s._v("我们先忽略其他最外层的配置文件，从入口"),t("code",[s._v("autoapp.py")]),s._v("分析 ：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Create an application instance."""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("helpers "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" get_debug_flag\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask_boilerplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("app "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" create_app\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask_boilerplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DevConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ProdConfig\n\nCONFIG "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DevConfig "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" get_debug_flag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" ProdConfig\n\napp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" create_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CONFIG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("分析：")]),s._v(" "),t("ul",[t("li",[s._v("1、实例化了Flask 应用，供外部启动使用。")]),s._v(" "),t("li",[s._v("2、使用全局的配置文件"),t("code",[s._v("CONFIG")]),s._v(",并根据是否调式调用不同的配置项。")])]),s._v(" "),t("p",[s._v("我们继续，到"),t("code",[s._v("app")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""The app module, containing the app factory function."""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" render_template\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask_boilerplate "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" commands"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" public"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask_boilerplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("extensions "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bcrypt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" csrf_protect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\\n    debug_toolbar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" login_manager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" migrate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" webpack\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask_boilerplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ProdConfig\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create_app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config_object"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ProdConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""An application factory, as explained here: http://flask.pocoo.org/docs/patterns/appfactories/.\n\n    :param config_object: The configuration object to use.\n    """')]),s._v("\n    app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("from_object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config_object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    register_extensions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    register_blueprints"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    register_errorhandlers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    register_shellcontext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    register_commands"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" app\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("分析：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("create_app")]),s._v(" 函数，在实例化app后，往app上注册了一些基本的扩展和蓝图，以及错误处理和命令上下文等。充分体现了插件的思想。")])]),s._v(" "),t("p",[s._v("那么各模块便体现在 "),t("code",[s._v("register_extensions")]),s._v(" 这个函数中：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("register_extensions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Register Flask extensions."""')]),s._v("\n    bcrypt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    csrf_protect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    login_manager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    debug_toolbar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    migrate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init_app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("可以根据命名开出，其中许多必备的扩展插件，如数据库插件。")]),s._v(" "),t("p",[s._v("除了从功能上来进行扩展外，我们的业务逻辑也可通过"),t("code",[s._v("蓝图")]),s._v("实现插件化, 如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("register_blueprints")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Register Flask blueprints."""')]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register_blueprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("public"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("views"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("blueprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register_blueprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("views"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("blueprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("我们的业务逻辑便在这些蓝图中实现。这样我们整个Flask框架整个开发架构便清晰了：")]),s._v(" "),t("ul",[t("li",[s._v("通过扩展来扩展框架功能")]),s._v(" "),t("li",[s._v("通过蓝图来模块化我们的业务逻辑")])])])}),[],!1,null,null,null);t.default=e.exports}}]);