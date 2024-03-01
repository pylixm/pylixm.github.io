(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{534:function(e,v,_){"use strict";_.r(v);var t=_(4),a=Object(t.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"go-理论面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#go-理论面试题"}},[e._v("#")]),e._v(" Go 理论面试题")]),e._v(" "),v("h3",{attrs:{id:"基础-golang-中-make-和-new-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础-golang-中-make-和-new-的区别"}},[e._v("#")]),e._v(" [基础]golang 中 make 和 new 的区别？")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("共同点：给变量分配内存")])]),e._v(" "),v("li",[v("p",[e._v("不同点：")]),e._v(" "),v("ul",[v("li",[e._v("1）作用变量类型不同，new给string,int和数组分配内存，make给切片，map，channel分配内存；")]),e._v(" "),v("li",[e._v("2）返回类型不一样，new返回指向变量的指针，make返回变量本身；")]),e._v(" "),v("li",[e._v("[深入理解]3）new 分配的空间被清零。make 分配空间后，会进行初始化；")]),e._v(" "),v("li",[e._v("[深入理解]4) new是在heap（堆），make是在stack（栈），创建make函数时会栈会开辟一块栈帧，栈帧里面有栈基指针和栈顶指针，分别记录栈帧的空间，随着函数的执行完毕，栈里的栈帧会自动清空，这就是和new（）的本质区别，堆里面的不会。")])])])]),e._v(" "),v("h3",{attrs:{id:"基础-数组和切片的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础-数组和切片的区别"}},[e._v("#")]),e._v(" [基础]数组和切片的区别")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("相同点：")]),e._v(" "),v("ul",[v("li",[e._v("1)只能存储一组相同类型的数据结构")]),e._v(" "),v("li",[e._v("2)都是通过下标来访问，并且有容量长度，长度通过 len 获取，容量通过 cap 获取")])])]),e._v(" "),v("li",[v("p",[e._v("区别：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("定义角度：")]),e._v(" "),v("ul",[v("li",[e._v("1）数组是定长，访问和复制不能超过数组定义的长度，否则就会下标越界，切片长度和容量可以自动扩容")]),e._v(" "),v("li",[e._v("2）数组是值类型，切片是引用类型，每个切片都引用了一个底层数组，切片本身不能存储任何数据，都是这底层数组存储数据，所以修改切片的时候修改的是底层数组中的数据。切片一旦扩容，指向一个新的底层数组，内存地址也就随之改变")])])]),e._v(" "),v("li",[v("p",[e._v("使用角度：")]),e._v(" "),v("ul",[v("li",[e._v("1）定义方式不一样")]),e._v(" "),v("li",[e._v("2）初始化方式不一样，数组需要指定大小，大小不改变")]),e._v(" "),v("li",[e._v("3）在函数传递中，数组切片都是值传递。")])])])])])]),e._v(" "),v("h3",{attrs:{id:"基础-go-defer-多个-defer-的执行顺序-defer-在什么时机会修改返回值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础-go-defer-多个-defer-的执行顺序-defer-在什么时机会修改返回值"}},[e._v("#")]),e._v(" [基础]go defer，多个 defer 的执行顺序，defer 在什么时机会修改返回值？")]),e._v(" "),v("p",[e._v("多个 defer 调用顺序是 LIFO（后入先出），defer后的操作可以理解为压入栈中")]),e._v(" "),v("p",[e._v("defer，return，return value（函数返回值） 执行顺序：首先return，其次return value，最后defer。defer可以修改函数最终返回值，修改时机：有名返回值或者函数返回指针 参考：")]),e._v(" "),v("blockquote",[v("p",[e._v("​blog.csdn.net/Cassie_zkq/article/details/108567205")])]),e._v(" "),v("blockquote",[v("p",[e._v("扩展：\n"),v("strong",[e._v("作用")]),e._v("：defer延迟函数，释放资源，收尾工作；如释放锁，关闭文件，关闭链接；捕获panic;\n"),v("strong",[e._v("避坑指南")]),e._v("：defer函数紧跟在资源打开后面，否则defer可能得不到执行，导致内存泄露。")])]),e._v(" "),v("h3",{attrs:{id:"基础-项目中怎么使用select-什么情况下会使用select"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础-项目中怎么使用select-什么情况下会使用select"}},[e._v("#")]),e._v(" [基础]项目中怎么使用select（什么情况下会使用select ）")]),e._v(" "),v("p",[e._v("select 结构组成主要是由 case 语句和执行的函数组成 select 实现的多路复用是，使用实例：")]),e._v(" "),v("p",[e._v("每个线程或者进程都先到注册和接受的 channel（装置）注册，然后阻塞，然后只有一个线程在运输，当注册的线程和进程准备好数据后，装置会根据注册的信息得到相应的数据。")]),e._v(" "),v("p",[e._v("[深入理解/加分项]\ngo 的 select 为 golang 提供了多路 IO 复用机制，和其他 IO 复用一样，用于检测是否有读写事件是否 ready。linux 的系统 IO 模型有 select，poll，epoll，go 的 select 和 linux 系统 select 非常相似。")]),e._v(" "),v("p",[e._v("select 的特性：")]),e._v(" "),v("ul",[v("li",[e._v("1）select 操作至少要有一个 case 语句，出现读写 nil 的 channel 该分支会忽略，在 nil 的 channel 上操作则会报错。")]),e._v(" "),v("li",[e._v("2）select 仅支持管道，而且是单协程操作。")]),e._v(" "),v("li",[e._v("3）每个 case 语句仅能处理一个管道，要么读要么写。")]),e._v(" "),v("li",[e._v("4）多个 case 语句的执行顺序是随机的。")]),e._v(" "),v("li",[e._v("5）存在 default 语句，select 将不会阻塞，但是存在 default 会影响性能。")])]),e._v(" "),v("h3",{attrs:{id:"基础-进程、线程、协程有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础-进程、线程、协程有什么区别"}},[e._v("#")]),e._v(" [基础]进程、线程、协程有什么区别？")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("进程：是应用程序的启动实例，每个进程都有独立的内存空间，不同的进程通过进程间的通信方式来通信。")])]),e._v(" "),v("li",[v("p",[e._v("线程：从属于进程，每个进程至少包含一个线程，线程是 CPU 调度的基本单位，多个线程之间可以共享进程的资源并通过共享内存等线程间的通信方式来通信。")])]),e._v(" "),v("li",[v("p",[e._v("协程：为轻量级线程，与线程相比，协程不受操作系统的调度，协程的调度器由用户应用程序提供，协程调度器按照调度策略把协程调度到线程中运行")])])]),e._v(" "),v("h3",{attrs:{id:"中-高级-go协成-调度-模型是什么-什么是-gmp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中-高级-go协成-调度-模型是什么-什么是-gmp"}},[e._v("#")]),e._v(" [中/高级]Go协成[调度]模型是什么？（什么是 GMP ？）")]),e._v(" "),v("p",[e._v("G 代表着 goroutine，P 代表着上下文处理器，M 代表 thread 线程，在 GPM 模型，有一个全局队列（Global Queue）：存放等待运行的 G，还有一个 P 的本地队列：也是存放等待运行的 G，但数量有限，不超过 "),v("strong",[e._v("256")]),e._v(" 个。")]),e._v(" "),v("p",[e._v("[深入理解/加分项]调度流程：\nGPM 的调度流程从 go func()开始创建一个 goroutine，新建的 goroutine 优先保存在 P 的本地队列中，如果 P 的本地队列已经满了，则会保存到全局队列中。M 会从 P 的队列中取一个可执行状态的 G 来执行，如果 P 的本地队列为空，就会从其他的 MP 组合偷取一个可执行的 G 来执行，当 M 执行某一个 G 时候发生系统调用或者阻塞，M 阻塞，如果这个时候 G 在执行，runtime 会把这个线程 M 从 P 中摘除，然后创建一个新的操作系统线程来服务于这个 P，当 M 系统调用结束时，这个 G 会尝试获取一个空闲的 P 来执行，并放入到这个 P 的本地队列，如果这个线程 M 变成休眠状态，加入到空闲线程中，然后整个 G 就会被放入到全局队列中。")]),e._v(" "),v("p",[e._v("[深入理解/加分项]GPM 个数问题：\n关于 G,P,M 的个数问题，G 的个数理论上是无限制的，但是受内存限制，P 的数量一般建议是逻辑 CPU 数量的 2 倍，M 的数据默认启动的时候是 10000，内核很难支持这么多线程数，所以整个限制客户忽略，M 一般不做设置，设置好 P，M 一般都是要大于 P。")]),e._v(" "),v("p",[e._v("扩展：")]),e._v(" "),v("ul",[v("li",[e._v("Golang并发机制以及它所使用的CSP并发模型 https://github.com/KeKe-Li/data-structures-questions/blob/master/src/chapter05/golang.01.md#golang%E5%B9%B6%E5%8F%91%E6%9C%BA%E5%88%B6%E4%BB%A5%E5%8F%8A%E5%AE%83%E6%89%80%E4%BD%BF%E7%94%A8%E7%9A%84csp%E5%B9%B6%E5%8F%91%E6%A8%A1%E5%9E%8B")])]),e._v(" "),v("h3",{attrs:{id:"中-高级-mutex-是悲观锁还是乐观锁-悲观锁、乐观锁是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中-高级-mutex-是悲观锁还是乐观锁-悲观锁、乐观锁是什么"}},[e._v("#")]),e._v(" [中/高级]Mutex 是悲观锁还是乐观锁？悲观锁、乐观锁是什么？")]),e._v(" "),v("ul",[v("li",[e._v("悲观锁")])]),e._v(" "),v("p",[e._v("悲观锁：当要对数据库中的一条数据进行修改的时候，为了避免同时被其他人修改，最好的办法就是直接对该数据进行加锁以防止并发。这种借助数据库锁机制，在修改数据之前先锁定，再修改的方式被称之为悲观并发控制【Pessimistic Concurrency Control，缩写“PCC”，又名“悲观锁”】。")]),e._v(" "),v("p",[e._v("乐观锁")]),e._v(" "),v("p",[e._v("乐观锁是相对悲观锁而言的，乐观锁假设数据一般情况不会造成冲突，所以在数据进行"),v("em",[e._v("提交更新")]),e._v("的时候，才会正式对数据的冲突与否进行检测，如果冲突，则返回给用户异常信息，让用户决定如何去做。")]),e._v(" "),v("p",[e._v("[加分项]乐观锁适用于读多写少的场景，这样可以提高程序的吞吐量；")]),e._v(" "),v("h3",{attrs:{id:"中-高级-go-gc-是怎么实现的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中-高级-go-gc-是怎么实现的"}},[e._v("#")]),e._v(" [中/高级]go gc 是怎么实现的？")]),e._v(" "),v("p",[e._v("Go 的 GC 回收有三次演进过程，")]),e._v(" "),v("p",[e._v("Go V1.3 之前**普通标记清除（mark and sweep）**方法，整体过程需要启动 STW(停止所有线程 stop the world)，效率极低。")]),e._v(" "),v("p",[e._v("Go V1.5 "),v("strong",[e._v("三色标记法")]),e._v("，堆空间启动写屏障，栈空间不启动，全部扫描之后，需要重新扫描一次栈(需要 STW)，效率普通。")]),e._v(" "),v("p",[e._v("Go V1.8 "),v("strong",[e._v("三色标记法")]),e._v("，混合写屏障机制：栈空间不启动（全部标记成黑色），堆空间启用写屏障，整个过程不要 STW，效率高。")]),e._v(" "),v("p",[e._v("Go1.3 之前的版本所谓标记清除是先启动 STW 暂停，然后执行标记，再执行数据回收，最后停止 STW。Go1.3 版本标记清除做了点优化，流程是：先启动 STW 暂停，然后执行标记，停止 STW，最后再执行数据回收。")]),e._v(" "),v("p",[e._v("Go1.5 三色标记主要是插入屏障和删除屏障，写入屏障的流程：程序开始，全部标记为白色，1）所有的对象放到白色集合，2）遍历一次根节点，得到灰色节点，3）遍历灰色节点，将可达的对象，从白色标记灰色，遍历之后的灰色标记成黑色，4）由于并发特性，此刻外界向在堆中的对象发生添加对象，以及在栈中的对象添加对象，在堆中的对象会触发插入屏障机制，栈中的对象不触发，5）由于堆中对象插入屏障，则会把堆中黑色对象添加的白色对象改成灰色，栈中的黑色对象添加的白色对象依然是白色，6）循环第 5 步，直到没有灰色节点，7）在准备回收白色前，重新遍历扫描一次栈空间，加上 STW 暂停保护栈，防止外界干扰（有新的白色会被添加成黑色）在 STW 中，将栈中的对象一次三色标记，直到没有灰色，8）停止 STW，清除白色。至于删除写屏障，则是遍历灰色节点的时候出现可达的节点被删除，这个时候触发删除写屏障，这个可达的被删除的节点也是灰色，等循环三色标记之后，直到没有灰色节点，然后清理白色，删除写屏障会造成一个对象即使被删除了最后一个指向它的指针也依旧可以活过这一轮，在下一轮 GC 中被清理掉。")]),e._v(" "),v("p",[e._v("GoV1.8 混合写屏障规则是：")]),e._v(" "),v("ul",[v("li",[e._v("1）GC 开始将栈上的对象全部扫描并标记为黑色(之后不再进行第二次重复扫描，无需 STW)，")]),e._v(" "),v("li",[e._v("2）GC 期间，任何在栈上创建的新对象，均为黑色。")]),e._v(" "),v("li",[e._v("3）被删除的对象标记为灰色。")]),e._v(" "),v("li",[e._v("4）被添加的对象标记为灰色。")])]),e._v(" "),v("p",[e._v("扩展问题：")]),e._v(" "),v("ul",[v("li",[e._v("gc执行为什么需要停止所有线程&STW ？是因为程序执行会造成引用变更，导致gc清洗对象引用出现错误，所以只能停止程序所有线程。")]),e._v(" "),v("li",[e._v("为什么 Go 在 GC 时 STW 的时间很短？ - 一剑曾当百万师的回答 - 知乎 https://www.zhihu.com/question/326191221/answer/3215213416")]),e._v(" "),v("li",[e._v("https://golang.design/under-the-hood/zh-cn/part2runtime/ch08gc/history/")]),e._v(" "),v("li",[e._v("https://bbs.huaweicloud.com/blogs/327111")])]),e._v(" "),v("h3",{attrs:{id:"中-高级-知道-golang-的内存逃逸吗-什么情况下会发生内存逃逸"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中-高级-知道-golang-的内存逃逸吗-什么情况下会发生内存逃逸"}},[e._v("#")]),e._v(" [中/高级]知道 golang 的内存逃逸吗？什么情况下会发生内存逃逸？")]),e._v(" "),v("p",[e._v("1)本该分配到栈上的变量，跑到了堆上，这就导致了内存逃逸。2)栈是高地址到低地址，栈上的变量，函数结束后变量会跟着回收掉，不会有额外性能的开销。3)变量从栈逃逸到堆上，如果要回收掉，需要进行 gc，那么 gc 一定会带来额外的性能开销。编程语言不断优化 gc 算法，主要目的都是为了减少 gc 带来的额外性能开销，变量一旦逃逸会导致性能开销变大。")]),e._v(" "),v("p",[e._v("内存逃逸的情况如下：")]),e._v(" "),v("ul",[v("li",[e._v("在方法内把局部变量指针返回 局部变量原本应该在栈中分配，在栈中回收。但是由于返回时被外部引用，因此其生命周期大于栈，则溢出。")]),e._v(" "),v("li",[e._v("发送指针或带有指针的值到 channel 中。 在编译时，是没有办法知道哪个 goroutine 会在 channel 上接收数据。所以编译器没法知道变量什么时候才会被释放。")]),e._v(" "),v("li",[e._v("在一个切片上存储指针或带指针的值。 一个典型的例子就是 []*string 。这会导致切片的内容逃逸。尽管其后面的数组可能是在栈上分配的，但其引用的值一定是在堆上。")]),e._v(" "),v("li",[e._v("slice 的背后数组被重新分配了，因为 append 时可能会超出其容量( cap )。 slice 初始化的地方在编译时是可以知道的，它最开始会在栈上分配。如果切片背后的存储要基于运行时的数据进行扩充，就会在堆上分配。")]),e._v(" "),v("li",[e._v("在 interface 类型上调用方法。 在 interface 类型上调用方法都是动态调度的 —— 方法的真正实现只能在运行时知道。想像一个 io.Reader 类型的变量 r , 调用 r.Read(b) 会使得 r 的值和切片b 的背后存储都逃逸掉，所以会在堆上分配。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);