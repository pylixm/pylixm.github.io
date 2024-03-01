(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{483:function(a,t,r){"use strict";r.r(t);var v=r(4),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Raid, 是 "),t("strong",[a._v("Redundant Array of Independent Disks")]),a._v(" 的缩写，中文译为“廉价磁盘冗余阵列”。是一种用普通磁盘来提供快速、高效、安全的磁盘存储技术。")]),a._v(" "),t("h2",{attrs:{id:"分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[a._v("#")]),a._v(" 分类")]),a._v(" "),t("p",[a._v("Raid，分为硬件 Raid 和 软件Raid。硬件Raid使用特殊的控制器来实现，软件Raid则只用操作系统的驱动程序来实现。")]),a._v(" "),t("ul",[t("li",[a._v("入门级Raid卡（控制器），该类型raid卡为集成到主板或价格便宜的raid卡，性能与软件raid类似。若操作系统不支持软raid, 可尝试使用该类型raid卡。")]),a._v(" "),t("li",[a._v("企业级Raid卡（控制器），该类型raid卡功能丰富单价格昂贵。它们具有软件阵列中无法实现的某些功能，并且从未在低成本控制器中实现，如缓存，热交换和备用电池。此外，某些RAID级别（如RAID50和RAID60）只能使用高端控制器创建。")]),a._v(" "),t("li",[a._v("软件Raid，该类型依赖操作系统的驱动程序实现，无需硬件的控制器。比较灵活，但功能相对比较简单。")])]),a._v(" "),t("h2",{attrs:{id:"raid-级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid-级别"}},[a._v("#")]),a._v(" Raid 级别")]),a._v(" "),t("p",[a._v("Raid，有许多中方式来组织阵列中的数据，这种方式叫做"),t("strong",[a._v("Raid 级别")]),a._v("。不同的Raid级别有不同的的访问速度和容错能力。Raid0不具有容错能力。级别1、1E、5、50、6和 10 具有不同程度的容错能力 - 如果阵列中的一个硬盘驱动器发生故障，数据仍然可以在运行中重建，并且不会发生\n访问中断。")]),a._v(" "),t("p",[a._v("各级别关系大致如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005UqHpNly1g1n1q7cabij309607mdg6.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Raid级别2、3和4在理论上已定义，但在实践中很少使用。")]),a._v(" "),t("p",[a._v("各磁盘级别区别大致如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005UqHpNly1g1n1q7e2yuj30wh095mya.jpg",alt:""}})]),a._v(" "),t("p",[a._v("下面详细说下他们的原理及优缺点。")]),a._v(" "),t("h3",{attrs:{id:"raid0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid0"}},[a._v("#")]),a._v(" Raid0")]),a._v(" "),t("p",[a._v("RAID 0可跨任意数量（至少2个）的磁盘分割数据，从而实现更高的数据吞吐量。从多个磁盘读取单个文件，使其可以访问所有磁盘的速度和容量。此RAID级别通常称为条带化，具有提高性能的优势。但是，它不会促进任何类型的冗余和容错，因为它不会复制数据或存储任何校验信息。两个磁盘都显示为单个分区，因此当其中一个磁盘发生故障时，它会破坏阵列并导致数据丢失")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005UqHpNly1g1n3erz0lij30cd08swfa.jpg",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("好处")])]),a._v(" "),t("ul",[t("li",[a._v("RAID 0在读写操作中提供出色的性能。")]),a._v(" "),t("li",[a._v("使用所有存储容量，没有开销。")]),a._v(" "),t("li",[a._v("该技术易于实施。")])]),a._v(" "),t("p",[t("strong",[a._v("缺点")])]),a._v(" "),t("ul",[t("li",[a._v("RAID 0不具有容错能力。如果一个驱动器发生故障，则RAID 0阵列中的所有数据都将丢失。它不应该用于任务关键型系统。")])]),a._v(" "),t("p",[t("strong",[a._v("业务场景")])]),a._v(" "),t("ul",[t("li",[a._v("直播，IPTV，VOD边缘服务器")]),a._v(" "),t("li",[a._v("其他要求速度，可靠性次之的业务")])]),a._v(" "),t("h3",{attrs:{id:"raid1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid1"}},[a._v("#")]),a._v(" Raid1")]),a._v(" "),t("p",[a._v("RAID 1向磁盘驱动器中写入和读取相同的数据。此过程通常称为数据镜像，其主要功能是提供冗余。如果阵列中的任何磁盘发生故障，系统仍可以从其余磁盘访问数据。使用新磁盘替换故障磁盘后，数据将从正常运行的磁盘复制到新磁盘以重建阵列。RAID 1是创建故障转移存储的最简单方法。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005UqHpNly1g1n3j8u529j30cb08ygme.jpg",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("好处")])]),a._v(" "),t("ul",[t("li",[a._v("RAID 1提供出色的读取速度和与单个驱动器相当的写入速度。")]),a._v(" "),t("li",[a._v("如果磁盘发生故障，则无需重建数据，只需将其复制到替换磁盘即可。")]),a._v(" "),t("li",[a._v("RAID 1是一种非常简单的技术。")])]),a._v(" "),t("p",[t("strong",[a._v("缺点")])]),a._v(" "),t("ul",[t("li",[a._v("主要缺点是有效存储容量只是总驱动器容量的一半，因为所有数据都被写入两次。")])]),a._v(" "),t("p",[t("strong",[a._v("业务场景")])]),a._v(" "),t("ul",[t("li",[a._v("对数据可靠性要求比较高的业务")])]),a._v(" "),t("h3",{attrs:{id:"raid5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid5"}},[a._v("#")]),a._v(" Raid5")]),a._v(" "),t("p",[a._v("RAID 5将数据块划分到多个磁盘（如RAID 0），但是，它还存储奇偶校验信息（可以准确描述大量数据的少量数据），用于在磁盘发生故障时恢复数据。此级别提供速度（从多个磁盘访问数据）和冗余，因为奇偶校验数据存储在所有磁盘上。如果阵列中的任何磁盘发生故障，则会从剩余的分布式数据和奇偶校验块中重新创建数据。它使用大约三分之一的可用磁盘容量来存储奇偶校验信息。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005UqHpNly1g1n3t6al85j30cb08w408.jpg",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("好处")])]),a._v(" "),t("ul",[t("li",[a._v("读取数据事务非常快，而写入数据事务稍慢（由于必须计算奇偶校验）。")]),a._v(" "),t("li",[a._v("如果驱动器发生故障，您仍然可以访问所有数据，即使在更换故障驱动器且存储控制器重建新驱动器上的数据时也是如此。")])]),a._v(" "),t("p",[t("strong",[a._v("缺点")])]),a._v(" "),t("ul",[t("li",[a._v("驱动器故障会影响吞吐量，但这仍然是可以接受的。")]),a._v(" "),t("li",[a._v("这是一项复杂的技术。如果使用4TB磁盘的阵列中的一个磁盘发生故障并被替换，则恢复数据（重建时间）可能需要一天或更长时间，具体取决于-阵列上的负载和控制器的速度。如果另一个磁盘在此期间出现故障，数据将永远丢失。")])]),a._v(" "),t("p",[t("strong",[a._v("业务场景")])]),a._v(" "),t("ul",[t("li",[a._v("文件存储服务器和应用服务器。")])]),a._v(" "),t("h3",{attrs:{id:"raid6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid6"}},[a._v("#")]),a._v(" Raid6")]),a._v(" "),t("p",[a._v("Raid 6类似于RAID 5，但它提供了更高的可靠性，因为它存储了额外的奇偶校验块。它允许有2块磁盘同时损坏而不影响整体阵列的数据完整性。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005UqHpNly1g1n41kqwj9j30c808swga.jpg",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("好处")])]),a._v(" "),t("ul",[t("li",[a._v("与RAID 5一样，读取数据事务非常快。")]),a._v(" "),t("li",[a._v("如果两个驱动器发生故障，您仍然可以访问所有数据，即使在更换故障驱动器时也是如此。因此RAID 6比RAID 5更安全。")])]),a._v(" "),t("p",[t("strong",[a._v("缺点")])]),a._v(" "),t("ul",[t("li",[a._v("由于必须计算额外的奇偶校验数据，写入数据事务比RAID 5慢。在一份报告中，我读到写入性能降低了20％。")]),a._v(" "),t("li",[a._v("驱动器故障会影响吞吐量，但这仍然是可以接受的。")]),a._v(" "),t("li",[a._v("这是一项复杂的技术。重建一个驱动器发生故障的阵列可能需要很长时间。")])]),a._v(" "),t("p",[t("strong",[a._v("业务场景")])]),a._v(" "),t("ul",[t("li",[a._v("多用于大型文件存储系统及应用服务器")])]),a._v(" "),t("h3",{attrs:{id:"raid10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid10"}},[a._v("#")]),a._v(" Raid10")]),a._v(" "),t("p",[a._v("RAID 10将RAID 1的镜像与RAID 0的条带化相结合。或者换句话说，它将RAID 1的冗余与RAID 0的性能提升相结合。它最适合需要高性能和安全性的环境。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005UqHpNly1g1n43xvzaij30c908tdha.jpg",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("好处")])]),a._v(" "),t("ul",[t("li",[a._v("如果RAID 10配置中的某个磁盘出现问题，则重建时间非常快，因为所需的只是将幸存镜像中的所有数据复制到新驱动器。对于1 TB的驱动器，这可能只需要30分钟。")])]),a._v(" "),t("p",[t("strong",[a._v("缺点")])]),a._v(" "),t("ul",[t("li",[a._v("一半的存储容量用于镜像，因此与大型RAID 5或RAID 6阵列相比，这是一种昂贵的冗余方式。")])]),a._v(" "),t("p",[t("strong",[a._v("业务场景")])]),a._v(" "),t("ul",[t("li",[a._v("高利用率的数据库服务器或服务器执行大量写入操作。")])]),a._v(" "),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.prepressure.com/library/technology/raid",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.prepressure.com/library/technology/raid"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://datapacket.com/blog/advantages-disadvantages-various-raid-levels/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://datapacket.com/blog/advantages-disadvantages-various-raid-levels/"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.raid-calculator.com/raid-types-reference.aspx",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.raid-calculator.com/raid-types-reference.aspx"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);