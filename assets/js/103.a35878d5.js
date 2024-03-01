(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{428:function(v,_,t){"use strict";t.r(_);var s=t(4),r=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("《数据结构与算法-王争》学习笔记，记录备查")])]),v._v(" "),_("h2",{attrs:{id:"基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[v._v("#")]),v._v(" 基本概念")]),v._v(" "),_("p",[v._v("队列，一种先进先出的线性数据结构。和栈一样，是一种"),_("strong",[v._v("操作受限的线性表数据结构")]),v._v("。")]),v._v(" "),_("p",[v._v("用数组实现的队列叫做"),_("strong",[v._v("顺序队列")]),v._v("，对链表实现的队列叫做"),_("strong",[v._v("链式队列")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("循环队列")]),v._v("，首位相连的一种顺序队列。")]),v._v(" "),_("p",[_("strong",[v._v("阻塞队列")]),v._v("，在队列基础上加上了阻塞操作，当队列空时，出队阻塞，当队列满时，入队阻塞。")]),v._v(" "),_("p",[_("strong",[v._v("并发队列")]),v._v("，线程安全的队列。两种实现：")]),v._v(" "),_("ul",[_("li",[v._v("简单的使用即为普通队列加了锁。")]),v._v(" "),_("li",[v._v("利用CAS原子操作，可以实现非常高效的并发队列。")])]),v._v(" "),_("h2",{attrs:{id:"操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[v._v("#")]),v._v(" 操作")]),v._v(" "),_("p",[v._v("队列的主要操作有：入队（enqueue）和出队（dequeue）。在队头插入元素，在队尾删除元素。")]),v._v(" "),_("p",[v._v("操作"),_("strong",[v._v("顺序队列")]),v._v("时，出队相当于操作队列尾的元素，为了我们能够保持队列可用，在删除元素之后，我们需要将数据往队尾移动。这样删除元素的时间复杂度为O(n)。插入元素的时间复杂度为O(1)。")]),v._v(" "),_("p",[v._v("在删除时，我们可以"),_("strong",[v._v("暂时不移动元素，待队列满，无法继续入队之后，再把所有的数据往队尾移动一次")]),v._v("。这样出队的时间复杂度为O(1)。")]),v._v(" "),_("p",[v._v("操作"),_("strong",[v._v("链式队列")]),v._v("时，存储结构不是连续的，不必移动元素，所以入队和出队的时间复杂度都是O(1)。")]),v._v(" "),_("p",[_("strong",[v._v("循环队列")]),v._v("可以避免数据的迁移，但是会浪费一个存储元素的空间。循环队列需要注意判空和判满的条件：")]),v._v(" "),_("ul",[_("li",[v._v("判空：head == tail")]),v._v(" "),_("li",[v._v("判满：(tail+1)%n == head (n为队列长度)")])]),v._v(" "),_("h2",{attrs:{id:"应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[v._v("#")]),v._v(" 应用")]),v._v(" "),_("ul",[_("li",[v._v("阻塞队列常用来解决一些因系统性能导致的问题。")]),v._v(" "),_("li",[v._v("循环并发队列常用来解决一些缓存的底层存储问题。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);