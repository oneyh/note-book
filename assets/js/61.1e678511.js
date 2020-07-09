(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1345:function(t,s,r){"use strict";r.r(s);var a=r(15),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_020-redis-主从架构下如何才能做到-99-99-的高可用性？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_020-redis-主从架构下如何才能做到-99-99-的高可用性？"}},[t._v("#")]),t._v(" 020. redis 主从架构下如何才能做到 99.99% 的高可用性？")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#什么是-99-99-高可用？"}},[t._v("什么是 99.99% 高可用？")])]),a("li",[a("a",{attrs:{href:"#redis-不可用是什么？"}},[t._v("redis 不可用是什么？")])]),a("li",[a("a",{attrs:{href:"#redis-怎么才能做到高可用？"}},[t._v("redis 怎么才能做到高可用？")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"什么是-99-99-高可用？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-99-99-高可用？"}},[t._v("#")]),t._v(" 什么是 99.99% 高可用？")]),t._v(" "),a("ul",[a("li",[t._v("不可用：系统挂掉，很难恢复起来，短时间内都不行，这就不可用")]),t._v(" "),a("li",[t._v("高可用：全年 99.99/99.9/99 % 的时间都能正常提供服务就是高可用")])]),t._v(" "),a("p",[t._v("这里有一个比较学术点的解释："),a("strong",[t._v("可用性的高低")]),t._v(" 是使用 "),a("strong",[t._v("不可用时间")]),t._v(" 占 "),a("strong",[t._v("总时间")]),t._v(" 的比例来衡量。不可用时间是从故障发生到故障恢复的时间。比如，可用性 4 个 9 的系统（99.99%），它一年宕机时间不能超过53分钟（=365"),a("em",[t._v("24")]),t._v("60*(1-0.9999)）。做到高可用系统，需要尽可能的 "),a("strong",[t._v("降低故障发生的次数")]),t._v(" 和 "),a("strong",[t._v("减少故障持续的时间")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"redis-不可用是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-不可用是什么？"}},[t._v("#")]),t._v(" redis 不可用是什么？")]),t._v(" "),a("p",[t._v("单实例不可用？主从架构不可用？不可用的后果是什么？")]),t._v(" "),a("p",[a("img",{attrs:{src:r(434),alt:""}})]),t._v(" "),a("p",[t._v("如上图，简单说就是 master 不可用的时候，后果就很严重")]),t._v(" "),a("h2",{attrs:{id:"redis-怎么才能做到高可用？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-怎么才能做到高可用？"}},[t._v("#")]),t._v(" redis 怎么才能做到高可用？")]),t._v(" "),a("p",[a("img",{attrs:{src:r(435),alt:""}})]),t._v(" "),a("p",[t._v("通过主备切换，在很短的时间内恢复可用状态。redis 哨兵（sentinal node）功能提供了这种支持。")]),t._v(" "),a("p",[t._v("接下来的几个章节都是讲解哨兵相关知识")])])}),[],!1,null,null,null);s.default=e.exports},434:function(t,s,r){t.exports=r.p+"assets/img/markdown-img-paste-2019032321135939.654c4f23.png"},435:function(t,s,r){t.exports=r.p+"assets/img/markdown-img-paste-20190323211722171.7ac83753.png"}}]);