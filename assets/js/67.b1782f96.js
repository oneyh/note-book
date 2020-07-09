(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1419:function(r,a,s){"use strict";s.r(a);var t=s(15),i=Object(t.a)({},(function(){var r=this,a=r.$createElement,t=r._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"横向扩容机制浅析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#横向扩容机制浅析"}},[r._v("#")]),r._v(" 横向扩容机制浅析")]),r._v(" "),t("p",[r._v("图解横向扩容过程，如何超出扩容极限，以及如何提升容错性")]),r._v(" "),t("ol",[t("li",[t("p",[r._v("primary&replica 自动负载均衡，6个shard，3 primary，3 replica")])]),r._v(" "),t("li",[t("p",[r._v("每个 node 有更少的 shard，IO/CPU/Memory 资源给每个 shard 分配更多，每个 shard 性能更好")])]),r._v(" "),t("li",[t("p",[r._v("扩容的极限，6个 shard（3 primary，3 replica），最多扩容到 6台 机器，每个 shard 可以占用单台服务器的所有资源，性能最好")])]),r._v(" "),t("li",[t("p",[r._v("超出扩容极限，动态修改 replica 数量，9个 shard（3primary，6 replica），扩容到 9台 机器，比 3台 机器时，拥有 3倍 的读吞吐量")])]),r._v(" "),t("li",[t("p",[r._v("3台 机器下，9个 shard（3 primary，6 replica），资源更少，但是容错性更好，最多容纳 2台机器宕机，6个 shard 只能容纳 1台 机器宕机")])]),r._v(" "),t("li",[t("p",[r._v("这里的这些知识点，你综合起来看，就是说，一方面告诉你扩容的原理，怎么扩容，怎么提升系统整体吞吐量；另一方面要考虑到系统的容错性，怎么保证提高容错性，让尽可能多的服务器宕机，保证数据不丢失")])])]),r._v(" "),t("p",[t("img",{attrs:{src:s(895),alt:""}})]),r._v(" "),t("p",[r._v("自己总结：")]),r._v(" "),t("ol",[t("li",[r._v("横向扩容简单，只需要增加 replica 的数量即可，es 会完成副本的同步")]),r._v(" "),t("li",[r._v("rep 会可接受读请求，分担 master 的压力")]),r._v(" "),t("li",[r._v("当副本在每台机器上都存在的时候，容错性增加，但是空间增多，这就是以空间换取性能和容错性")])]),r._v(" "),t("h2",{attrs:{id:"纠错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纠错"}},[r._v("#")]),r._v(" 纠错")]),r._v(" "),t("p",[r._v("前面的讲解中，有一个地方说错了：3台 机器，6个 shard，不能有机器宕机；这个说错了。")]),r._v(" "),t("p",[r._v("看下图：就是一个排列的问题，3 台机器上怎么才能保证至少 2台机器上至少存在一份数据。这个是可以做到的")]),r._v(" "),t("p",[t("img",{attrs:{src:s(896),alt:""}})])])}),[],!1,null,null,null);a.default=i.exports},895:function(r,a,s){r.exports=s.p+"assets/img/markdown-img-paste-20190101145206937.82d6c913.png"},896:function(r,a,s){r.exports=s.p+"assets/img/markdown-img-paste-20190101150125942.6469c9a5.png"}}]);