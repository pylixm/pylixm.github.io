(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{357:function(s,e,n){"use strict";n.r(e);var a=n(4),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Selenium 库不必多说，是Python 生态中的神器，在动态网页爬取和自动化测试中有广泛的应用。之前公司前辈，用它搞了个抢会议室的脚本，今天加了点功能，优化了下。有些问题，总结记录下，分享出来，希望对你有帮助。")]),s._v(" "),e("h2",{attrs:{id:"关于驱动的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于驱动的问题"}},[s._v("#")]),s._v(" 关于驱动的问题")]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("Selenium")]),s._v("时，需要用到浏览器驱动。常用的浏览器驱动有 chromedriver 和 geckodriver，分别对应chrome浏览器和firefox浏览器。"),e("code",[s._v("Phantomjs")]),s._v("不再建议使用，它已经停止开发，可见这里 "),e("a",{attrs:{href:"phantomjs"}},[s._v("issue")]),s._v("。新版本的"),e("code",[s._v("Selenium")]),s._v("也计划不再对它进行支撑，已标记为过时。"),e("code",[s._v("Phantomjs")]),s._v(" 被广泛应用，无非是它的无头模式（静默不会显式的启动浏览器窗口），随着各大浏览器的无头模式的发布，它已经变得不再那么必要。")]),s._v(" "),e("p",[s._v("在选用浏览器和驱动的时候，针对Linux环境，强烈建议 chrome 和chromefriver。下边是我测试的日志，相同的启动方式，感受下速度。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# chrome \n2020-07-14 18:55:29 - start set driver\n2020-07-14 18:55:31 - driver set success\n2020-07-14 18:55:31 - start login\n2020-07-14 18:55:32 - get url succ at 2020-07-14 18:55:32\n2020-07-14 18:55:33 - Login succ at 2020-07-14 18:55:33\n2020-07-14 18:55:33 - login success~\n2020-07-14 18:55:33 - get date info\n2020-07-14 18:55:33 - targetday is: 2020-07-28\n2020-07-14 18:55:33 - target calendar is: [[0, 0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19], [20, 21, 22, 23, 24, 25, 26], [27, 28, 29, 30, 31, 0, 0]]\n2020-07-14 18:55:33 - weeknum is 5, targetdayweekday is 2, monthcount is 0\n2020-07-14 18:55:36 - <selenium.webdriver.remote.webelement.WebElement (session="8f38492d2a48f310c52eb9df69311ca1", element="274676f7-5929-4e0c-aeb2-11e311abf9bc")>\n2020-07-14 18:55:40 - Success to book meetingroom !\n2020-07-14 18:55:40 - finish\n\n# firefox \n2020-07-14 18:58:48 - start set driver\n2020-07-14 18:59:02 - driver set success\n2020-07-14 18:59:02 - start login\n2020-07-14 18:59:28 - get url succ at 2020-07-14 18:59:28\n2020-07-14 18:59:33 - Login succ at 2020-07-14 18:59:33\n2020-07-14 18:59:33 - login success~\n2020-07-14 18:59:33 - get date info\n2020-07-14 18:59:33 - targetday is: 2020-07-28\n2020-07-14 18:59:33 - target calendar is: [[0, 0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19], [20, 21, 22, 23, 24, 25, 26], [27, 28, 29, 30, 31, 0, 0]]\n2020-07-14 18:59:33 - weeknum is 5, targetdayweekday is 2, monthcount is 0\n2020-07-14 18:59:37 - Message: Unable to locate element: [id="o_date"]\n> 直接加载不出元素，卡死\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("h2",{attrs:{id:"在centos-7-上部署selenium相关服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在centos-7-上部署selenium相关服务"}},[s._v("#")]),s._v(" 在CentOS 7 上部署selenium相关服务")]),s._v(" "),e("p",[e("strong",[s._v("chrome浏览器及驱动安装")])]),s._v(" "),e("p",[s._v("浏览器安装：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("yum 安装的时候注意看下，chrome 的版本，安装驱动的时候需要。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("============================================================================================================================================================================================================================================\n Package                                                     Arch                                       Version                                              Repository                                                                Size\n============================================================================================================================================================================================================================================\nInstalling:\n google-chrome-stable                                        x86_64                                     83.0.4103.116-1                                      /google-chrome-stable_current_x86_64                                     225 M\n ....\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("驱动安装：")]),s._v(" "),e("p",[s._v("直接从如下地址，找到对应浏览器版本的驱动下载解压即可。")]),s._v(" "),e("p",[s._v("https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm")]),s._v(" "),e("p",[e("strong",[s._v("firefox浏览器即驱动安装")])]),s._v(" "),e("p",[s._v("浏览器安装：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 直接yum 安装即可\nyum install firefox \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("驱动安装：")]),s._v(" "),e("p",[s._v("直接从如下地址，找到对应浏览器版本的驱动下载解压即可。")]),s._v(" "),e("p",[s._v("https://github.com/mozilla/geckodriver/releases")]),s._v(" "),e("p",[s._v("下载时，注意版本对应关系:")]),s._v(" "),e("p",[e("img",{attrs:{src:"/static/imgs/selenium/selenium_firefox.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[s._v("#")]),s._v(" 扩展阅读")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.browserstack.com/guide/run-selenium-tests-using-firefox-driver",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to run Selenium tests on Firefox using Firefox Driver"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=t.exports}}]);