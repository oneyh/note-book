(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1336:function(e,s,a){"use strict";a.r(s);var t=a(15),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_016-redis-主从复制原理、断点续传、无磁盘化复制、过期-key-处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_016-redis-主从复制原理、断点续传、无磁盘化复制、过期-key-处理"}},[e._v("#")]),e._v(" 016. redis 主从复制原理、断点续传、无磁盘化复制、过期 key 处理")]),e._v(" "),t("h2",{attrs:{id:"主从架构的核心原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从架构的核心原理"}},[e._v("#")]),e._v(" 主从架构的核心原理")]),e._v(" "),t("p",[t("img",{attrs:{src:a(429),alt:""}})]),e._v(" "),t("p",[e._v("当启动一个 slave node 的时候，它会发送一个 PSYNC 命令给 master node，")]),e._v(" "),t("ul",[t("li",[e._v("如果是重新连接：master node 仅仅会复制给 slave 部分缺少的数据;")]),e._v(" "),t("li",[e._v("如果是首次连接：会触发一次 full resynchronization（全量同步）")])]),e._v(" "),t("p",[e._v("开始 full resynchronization 的时候，master 会启动一个后台线程，开始生成一份 RDB 快照文件，同时还会将从客户端收到的所有写命令缓存在内存中。RDB 文件生成完毕之后，master 会将这个 RDB 发送给 slave，slave 会先写入本地磁盘，然后再从本地磁盘加载到内存中。然后 master 会将内存中缓存的写命令发送给 slave，slave 也会同步这些数据。")]),e._v(" "),t("p",[e._v("slave node 如果跟 master node 有网络故障，断开了连接，会自动重连。master如果发现有多个 slave node 都来重新连接，仅仅会启动一个 rdb save 操作，用一份数据服务所有 slave node。")]),e._v(" "),t("p",[e._v("在正常情况下异步复制会很简单，来一条，异步复制一条")]),e._v(" "),t("h2",{attrs:{id:"主从复制的断点续传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制的断点续传"}},[e._v("#")]),e._v(" 主从复制的断点续传")]),e._v(" "),t("p",[e._v("从 redis 2.8 开始，就支持主从复制的断点续传，如果主从复制过程中，网络连接断掉了，那么可以接着上次复制的地方，继续复制下去，而不是从头开始复制一份")]),e._v(" "),t("p",[e._v("master node 会在内存中创建一个 backlog，master 和 slave 都会保存一个 replica offset 和 master id，offset 就是保存在 backlog 中的。如果 master 和 slave 网络连接断掉了，slave 会让 master 从上次的 replica offset 开始继续复制，但是如果没有找到对应的 offset，那么就会执行一次 resynchronization")]),e._v(" "),t("h2",{attrs:{id:"无磁盘化复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无磁盘化复制"}},[e._v("#")]),e._v(" 无磁盘化复制")]),e._v(" "),t("p",[e._v("master 在内存中直接创建 rdb，然后通过网络发送给 slave，不会在自己本地落地磁盘了")]),e._v(" "),t("p",[e._v("该功能是通过配置文件配置的，主要涉及到以下两个参数：")]),e._v(" "),t("ul",[t("li",[e._v("repl-diskless-sync：无磁盘同步 默认为 no（关闭状态）")]),e._v(" "),t("li",[e._v("repl-diskless-sync-delay：等待一定时长再开始复制，因为要等更多 slave 重新连接过来")])]),e._v(" "),t("h2",{attrs:{id:"过期-key-处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过期-key-处理"}},[e._v("#")]),e._v(" 过期 key 处理")]),e._v(" "),t("ul",[t("li",[e._v("slave 不会过期 key")]),e._v(" "),t("li",[e._v("只会等待 master 过期 key。")])]),e._v(" "),t("p",[e._v("如果 master 过期了一个 key，或者通过 LRU 淘汰了一个 key，那么会模拟一条 del 命令发送给 slave。")])])}),[],!1,null,null,null);s.default=r.exports},429:function(e,s,a){e.exports=a.p+"assets/img/markdown-img-paste-20190321224205196.5e52ae22.png"}}]);