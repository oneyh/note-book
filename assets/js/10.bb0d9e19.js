(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1385:function(a,t,i){"use strict";i.r(t);var s=i(15),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding"}},[a._v("#")]),a._v(" padding")]),a._v(" "),s("p",[a._v("本课程中，张鑫旭老师不仅将为大家深入讲解 padding 常用的一些特性")]),a._v(" "),s("ul",[s("li",[a._v("比如与元素尺寸的关系，")]),a._v(" "),s("li",[a._v("负值和百分比值等")]),a._v(" "),s("li",[a._v("更为大家带来一些 padding 的小秘密！")]),a._v(" "),s("li",[a._v("并为大家介绍如何运用 padding 来绘制图形")]),a._v(" "),s("li",[a._v("以及 padding 在布局的一些应用。")])]),a._v(" "),s("p",[a._v("精彩不容错过噢！")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-css-padding-与容器的尺寸"}},[a._v("1. CSS padding 与容器的尺寸")]),s("ul",[s("li",[s("a",{attrs:{href:"#对于-block-水平元素（演示探讨）"}},[a._v("对于 block 水平元素（演示探讨）")])]),s("li",[s("a",{attrs:{href:"#对于-block-水平元素（结论）"}},[a._v("对于 block 水平元素（结论）")])]),s("li",[s("a",{attrs:{href:"#对于-inline-水平元素"}},[a._v("对于 inline 水平元素")])]),s("li",[s("a",{attrs:{href:"#高度可控的分割线（inline）"}},[a._v("高度可控的分割线（inline）")])])])]),s("li",[s("a",{attrs:{href:"#_2-css-padding-负值和百分比值"}},[a._v("2. CSS padding 负值和百分比值")]),s("ul",[s("li",[s("a",{attrs:{href:"#轻松实现一个正方形"}},[a._v("轻松实现一个正方形")])]),s("li",[s("a",{attrs:{href:"#真实案例"}},[a._v("真实案例")])]),s("li",[s("a",{attrs:{href:"#inline-水平元素的-padding-百分比值"}},[a._v("inline 水平元素的 padding 百分比值")])]),s("li",[s("a",{attrs:{href:"#inline-百分比下为什么会有额外的高度？"}},[a._v("inline 百分比下为什么会有额外的高度？")])])])]),s("li",[s("a",{attrs:{href:"#_3-标签元素的内置-padding"}},[a._v("3. 标签元素的内置 padding")]),s("ul",[s("li",[s("a",{attrs:{href:"#ol-ul-列表"}},[a._v("ol/ul 列表")])]),s("li",[s("a",{attrs:{href:"#表单元素的内置-padding"}},[a._v("表单元素的内置 padding")])])])]),s("li",[s("a",{attrs:{href:"#_4-padding-与图形绘制"}},[a._v("4. padding 与图形绘制")]),s("ul",[s("li",[s("a",{attrs:{href:"#实现-3-道杠效果"}},[a._v("实现 3 道杠效果")])]),s("li",[s("a",{attrs:{href:"#实现白眼效果"}},[a._v("实现白眼效果")])])])]),s("li",[s("a",{attrs:{href:"#_5-padding-布局实战"}},[a._v("5. padding 布局实战")]),s("ul",[s("li",[s("a",{attrs:{href:"#使用百分比单位构建固定比例布局结构"}},[a._v("使用百分比单位构建固定比例布局结构")])]),s("li",[s("a",{attrs:{href:"#配合-margin-等高布局"}},[a._v("配合 margin 等高布局")])]),s("li",[s("a",{attrs:{href:"#两栏自适应布局"}},[a._v("两栏自适应布局")])])])])])]),s("p"),a._v(" "),s("p",[a._v("padding 中规中矩，性格温婉平和")]),a._v(" "),s("h2",{attrs:{id:"_1-css-padding-与容器的尺寸"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-padding-与容器的尺寸"}},[a._v("#")]),a._v(" 1. CSS padding 与容器的尺寸")]),a._v(" "),s("blockquote",[s("p",[a._v("了解 padding 与元素尺寸之间关系。")])]),a._v(" "),s("p",[a._v("CSS padding 与容器的尺寸关系复杂，我们直接来看例子来了解")]),a._v(" "),s("h3",{attrs:{id:"对于-block-水平元素（演示探讨）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对于-block-水平元素（演示探讨）"}},[a._v("#")]),a._v(" 对于 block 水平元素（演示探讨）")]),a._v(" "),s("p",[s("img",{attrs:{src:i(655),alt:"image-20200503183345662"}})]),a._v(" "),s("p",[a._v("可以想象成 padding 是人类的脂肪，现在它很瘦")]),a._v(" "),s("p",[s("img",{attrs:{src:i(656),alt:"image-20200503183441543"}})]),a._v(" "),s("p",[a._v("从这点来看："),s("strong",[a._v("padding 是会影响元素尺寸的")])]),a._v(" "),s("p",[s("img",{attrs:{src:i(657),alt:"image-20200503183549495"}})]),a._v(" "),s("p",[a._v("骨架没有变化，红色部分的内容区域收缩。上面的或许过于抽象，下面来看个技术层面的")]),a._v(" "),s("p",[s("img",{attrs:{src:i(658),alt:"image-20200503183719832"}})]),a._v(" "),s("p",[a._v("给文字增加左右的 padding  时，背景绿色区域的宽度并没有变化")]),a._v(" "),s("p",[s("img",{attrs:{src:i(659),alt:"image-20200503183759064"}})]),a._v(" "),s("p",[a._v("从这里来看："),s("strong",[a._v("padding 不会影响元素的尺寸")]),a._v("（其实这句话是不严谨的）")]),a._v(" "),s("p",[s("img",{attrs:{src:i(660),alt:"image-20200503184133004"}})]),a._v(" "),s("p",[a._v("此时：padding 会影响元素的尺寸")]),a._v(" "),s("h3",{attrs:{id:"对于-block-水平元素（结论）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对于-block-水平元素（结论）"}},[a._v("#")]),a._v(" 对于 block 水平元素（结论）")]),a._v(" "),s("ol",[s("li",[a._v("padding 值 暴走，一定会影响尺寸")]),a._v(" "),s("li",[a._v("width 非 auto，padding 影响尺寸")]),a._v(" "),s("li",[a._v("width 为 auto 或box-sizing 为 border-box ，同时 padding 值没有暴走，不影响尺寸")])]),a._v(" "),s("h3",{attrs:{id:"对于-inline-水平元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对于-inline-水平元素"}},[a._v("#")]),a._v(" 对于 inline 水平元素")]),a._v(" "),s("p",[a._v("**结论：**水平 padding 影响尺寸，垂直 padding 不影响尺寸")]),a._v(" "),s("p",[s("img",{attrs:{src:i(661),alt:"image-20200503184448630"}})]),a._v(" "),s("p",[a._v("给四周都加上 padding 会发现只有左右有效果，垂直没有效果")]),a._v(" "),s("p",[s("img",{attrs:{src:i(662),alt:"image-20200503184555090"}})]),a._v(" "),s("p",[a._v("给 容器增加背景色，再看看; 注意这里的数值，现在是没有加 padding 的时候")]),a._v(" "),s("p",[s("img",{attrs:{src:i(663),alt:"image-20200503184735335"}})]),a._v(" "),s("p",[a._v("在父级大小内，只是背景占据大小改变，内容尺寸并未改变，大到超出父级容器大小的时候，就看到尺寸变化了, scrollHeight 滚动高度变化了")]),a._v(" "),s("p",[s("img",{attrs:{src:i(664),alt:"image-20200503185027989"}})]),a._v(" "),s("h3",{attrs:{id:"高度可控的分割线（inline）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高度可控的分割线（inline）"}},[a._v("#")]),a._v(" 高度可控的分割线（inline）")]),a._v(" "),s("blockquote",[s("p",[a._v("利用 padding 对 inline 元素的特性： 水平 padding 影响尺寸，垂直 padding 不影响尺寸")])]),a._v(" "),s("p",[s("img",{attrs:{src:i(665),alt:"image-20200503190115010"}})]),a._v(" "),s("p",[a._v("这里使用 padding ，然后给它添加边框的方法实现可控高度")]),a._v(" "),s("h2",{attrs:{id:"_2-css-padding-负值和百分比值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-padding-负值和百分比值"}},[a._v("#")]),a._v(" 2. CSS padding 负值和百分比值")]),a._v(" "),s("blockquote",[s("p",[a._v("了解 padding 负值和百分比值的表现")])]),a._v(" "),s("ul",[s("li",[a._v("padding 不支持任何形式的负值")]),a._v(" "),s("li",[a._v("padding 百分比均是 "),s("strong",[a._v("相对于宽度计算")]),a._v(" 的")])]),a._v(" "),s("h3",{attrs:{id:"轻松实现一个正方形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轻松实现一个正方形"}},[a._v("#")]),a._v(" 轻松实现一个正方形")]),a._v(" "),s("p",[s("img",{attrs:{src:i(666),alt:"image-20200503190456024"}})]),a._v(" "),s("h3",{attrs:{id:"真实案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#真实案例"}},[a._v("#")]),a._v(" 真实案例")]),a._v(" "),s("p",[a._v("APP 的头图是一个正方形的，但是在手机上面各种分辨率都有，怎么实现呢？")]),a._v(" "),s("p",[s("img",{attrs:{src:i(667),alt:"image-20200503190643776"}})]),a._v(" "),s("p",[a._v("使用的是背景 + padding 来显示正方形的可视区域")]),a._v(" "),s("h3",{attrs:{id:"inline-水平元素的-padding-百分比值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-水平元素的-padding-百分比值"}},[a._v("#")]),a._v(" inline 水平元素的 padding 百分比值")]),a._v(" "),s("ol",[s("li",[a._v("同样相对于宽度计算")]),a._v(" "),s("li",[a._v("默认的高度宽度细节有差异")]),a._v(" "),s("li",[a._v("padding 会断行")])]),a._v(" "),s("p",[s("img",{attrs:{src:i(668),alt:"image-20200503190916652"}})]),a._v(" "),s("p",[a._v("这是由于文字掉下来的缘故导致的，当他能存放文字的时候，就又正常了")]),a._v(" "),s("p",[s("img",{attrs:{src:i(669),alt:"image-20200503191011750"}})]),a._v(" "),s("p",[s("img",{attrs:{src:i(670),alt:"image-20200503191133557"}})]),a._v(" "),s("p",[a._v("把 font-size 设置为 0 ，就能看到高度变小了")]),a._v(" "),s("p",[s("img",{attrs:{src:i(671),alt:"image-20200503191208730"}})]),a._v(" "),s("h3",{attrs:{id:"inline-百分比下为什么会有额外的高度？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-百分比下为什么会有额外的高度？"}},[a._v("#")]),a._v(" inline 百分比下为什么会有额外的高度？")]),a._v(" "),s("p",[a._v("inline 元素的垂直 padding 会让「幽灵空白节点」显现，也就是规范中的「strut」出现")]),a._v(" "),s("h2",{attrs:{id:"_3-标签元素的内置-padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-标签元素的内置-padding"}},[a._v("#")]),a._v(" 3. 标签元素的内置 padding")]),a._v(" "),s("blockquote",[s("p",[a._v("这里有一些你可能不知道的小秘密。")])]),a._v(" "),s("h3",{attrs:{id:"ol-ul-列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ol-ul-列表"}},[a._v("#")]),a._v(" "),s("code",[a._v("ol/ul")]),a._v(" 列表")]),a._v(" "),s("p",[s("img",{attrs:{src:i(672),alt:"image-20200503191639607"}})]),a._v(" "),s("p",[s("img",{attrs:{src:i(673),alt:"image-20200503191705040"}})]),a._v(" "),s("p",[s("img",{attrs:{src:i(674),alt:"image-20200503191729764"}})]),a._v(" "),s("p",[a._v("**经验分享：**平时文字大小 12 或 14 px，padding 的值设置为 22 ~ 25 是比较合适的，可以基本的实现，序号和下面的类容左对齐")]),a._v(" "),s("h3",{attrs:{id:"表单元素的内置-padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单元素的内置-padding"}},[a._v("#")]),a._v(" 表单元素的内置 padding")]),a._v(" "),s("p",[s("strong",[a._v("结论：")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("所有浏览器 input/textarea 输入框内置 padding")])]),a._v(" "),s("li",[s("p",[a._v("所有浏览器 button 按钮内置 padding")])]),a._v(" "),s("li",[s("p",[a._v("部分浏览器 select 下拉内置 padding")]),a._v(" "),s("p",[a._v("如 FireFox、IE8+ 可以设置 padding")])]),a._v(" "),s("li",[s("p",[a._v("所有浏览器 "),s("code",[a._v("radio/chxkbox")]),a._v(" 单复选框无内置 padding")])]),a._v(" "),s("li",[s("p",[a._v("button 按钮元素的 padding 是最难控制")])])]),a._v(" "),s("p",[a._v("在各种浏览器下的 button 按钮 padding 表现不一")]),a._v(" "),s("p",[s("img",{attrs:{src:i(675),alt:"image-20200503192313086"}})]),a._v(" "),s("p",[s("img",{attrs:{src:i(676),alt:"image-20200503192407720"}})]),a._v(" "),s("p",[s("img",{attrs:{src:i(677),alt:"image-20200503192429775"}})]),a._v(" "),s("p",[a._v("所以，建议使用 label 来模拟按钮，达到完全控制；")]),a._v(" "),s("p",[a._v("如果非要用原生的 button，比如表单中 button 可以拥有回车自动提交的功能，那么就可以如下实现：")]),a._v(" "),s("ul",[s("li",[a._v("让原始 button 可访问性不可见：使用定位等方式移除到不可见区域（不是 display:none）")]),a._v(" "),s("li",[a._v("让 label 的 for 属性关联 button")])]),a._v(" "),s("p",[s("img",{attrs:{src:i(678),alt:"image-20200503192553632"}})]),a._v(" "),s("h2",{attrs:{id:"_4-padding-与图形绘制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-padding-与图形绘制"}},[a._v("#")]),a._v(" 4. padding 与图形绘制")]),a._v(" "),s("blockquote",[s("p",[a._v("利用 padding 和其他一些 CSS 来绘制图形。")])]),a._v(" "),s("h3",{attrs:{id:"实现-3-道杠效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-3-道杠效果"}},[a._v("#")]),a._v(" 实现 3 道杠效果")]),a._v(" "),s("p",[s("img",{attrs:{src:i(679),alt:"image-20200503193010355"}})]),a._v(" "),s("p",[a._v("就是上面那个三道杠的的图标")]),a._v(" "),s("p",[s("img",{attrs:{src:i(680),alt:"image-20200503193145665"}})]),a._v(" "),s("h3",{attrs:{id:"实现白眼效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现白眼效果"}},[a._v("#")]),a._v(" 实现白眼效果")]),a._v(" "),s("p",[s("img",{attrs:{src:i(681),alt:"image-20200503193308431"}})]),a._v(" "),s("p",[s("img",{attrs:{src:i(682),alt:"image-20200503193335976"}})]),a._v(" "),s("h2",{attrs:{id:"_5-padding-布局实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-padding-布局实战"}},[a._v("#")]),a._v(" 5. padding 布局实战")]),a._v(" "),s("blockquote",[s("p",[a._v("padding 在布局这块一些比较好的应用。")])]),a._v(" "),s("h3",{attrs:{id:"使用百分比单位构建固定比例布局结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用百分比单位构建固定比例布局结构"}},[a._v("#")]),a._v(" 使用百分比单位构建固定比例布局结构")]),a._v(" "),s("p",[s("img",{attrs:{src:i(683),alt:"image-20200503193512421"}})]),a._v(" "),s("p",[a._v("还有 "),s("code",[a._v("1:2、3:4")]),a._v(" 等也是可以实现的，前面讲解过。")]),a._v(" "),s("h3",{attrs:{id:"配合-margin-等高布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配合-margin-等高布局"}},[a._v("#")]),a._v(" 配合 margin 等高布局")]),a._v(" "),s("p",[a._v("也是前面介绍过的")]),a._v(" "),s("p",[s("img",{attrs:{src:i(684),alt:"image-20200503193653416"}})]),a._v(" "),s("h3",{attrs:{id:"两栏自适应布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两栏自适应布局"}},[a._v("#")]),a._v(" 两栏自适应布局")]),a._v(" "),s("p",[s("img",{attrs:{src:i(685),alt:"image-20200503193741334"}})]),a._v(" "),s("p",[s("img",{attrs:{src:i(686),alt:"image-20200503193802917"}})])])}),[],!1,null,null,null);t.default=e.exports},655:function(a,t,i){a.exports=i.p+"assets/img/image-20200503183345662.82f3eaa9.png"},656:function(a,t,i){a.exports=i.p+"assets/img/image-20200503183441543.2e5f133e.png"},657:function(a,t,i){a.exports=i.p+"assets/img/image-20200503183549495.614e9bca.png"},658:function(a,t,i){a.exports=i.p+"assets/img/image-20200503183719832.4c6177a9.png"},659:function(a,t,i){a.exports=i.p+"assets/img/image-20200503183759064.4e19cb91.png"},660:function(a,t,i){a.exports=i.p+"assets/img/image-20200503184133004.bb810bfd.png"},661:function(a,t,i){a.exports=i.p+"assets/img/image-20200503184448630.f98b67f2.png"},662:function(a,t,i){a.exports=i.p+"assets/img/image-20200503184555090.3b5162da.png"},663:function(a,t,i){a.exports=i.p+"assets/img/image-20200503184735335.bf43154f.png"},664:function(a,t,i){a.exports=i.p+"assets/img/image-20200503185027989.a76608b6.png"},665:function(a,t,i){a.exports=i.p+"assets/img/image-20200503190115010.b6664151.png"},666:function(a,t,i){a.exports=i.p+"assets/img/image-20200503190456024.67c0b764.png"},667:function(a,t,i){a.exports=i.p+"assets/img/image-20200503190643776.f15d1217.png"},668:function(a,t,i){a.exports=i.p+"assets/img/image-20200503190916652.2644f699.png"},669:function(a,t,i){a.exports=i.p+"assets/img/image-20200503191011750.9b30d713.png"},670:function(a,t,i){a.exports=i.p+"assets/img/image-20200503191133557.a9277b59.png"},671:function(a,t,i){a.exports=i.p+"assets/img/image-20200503191208730.b6fd308c.png"},672:function(a,t,i){a.exports=i.p+"assets/img/image-20200503191639607.0ce9cec9.png"},673:function(a,t,i){a.exports=i.p+"assets/img/image-20200503191705040.22d271c3.png"},674:function(a,t,i){a.exports=i.p+"assets/img/image-20200503191729764.6114dd03.png"},675:function(a,t,i){a.exports=i.p+"assets/img/image-20200503192313086.b327811e.png"},676:function(a,t,i){a.exports=i.p+"assets/img/image-20200503192407720.79194d60.png"},677:function(a,t,i){a.exports=i.p+"assets/img/image-20200503192429775.ded38066.png"},678:function(a,t,i){a.exports=i.p+"assets/img/image-20200503192553632.1122eb4e.png"},679:function(a,t,i){a.exports=i.p+"assets/img/image-20200503193010355.a14c6c3a.png"},680:function(a,t,i){a.exports=i.p+"assets/img/image-20200503193145665.551ff291.png"},681:function(a,t,i){a.exports=i.p+"assets/img/image-20200503193308431.b94723ce.png"},682:function(a,t,i){a.exports=i.p+"assets/img/image-20200503193335976.d7bca1ab.png"},683:function(a,t,i){a.exports=i.p+"assets/img/image-20200503193512421.585995a7.png"},684:function(a,t,i){a.exports=i.p+"assets/img/image-20200503193653416.ef77a88a.png"},685:function(a,t,i){a.exports=i.p+"assets/img/image-20200503193741334.c0549432.png"},686:function(a,t,i){a.exports=i.p+"assets/img/image-20200503193802917.6d86b4e6.png"}}]);