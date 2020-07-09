(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1382:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"line-height-行高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#line-height-行高"}},[t._v("#")]),t._v(" line-height 行高")]),t._v(" "),e("p",[t._v("简介：本课程将带领大家深入理解")]),t._v(" "),e("ul",[e("li",[t._v("line-height 的定义")]),t._v(" "),e("li",[t._v("line-height 与恒内框盒子模型的关系")]),t._v(" "),e("li",[t._v("高度机理")]),t._v(" "),e("li",[t._v("各类属性值")]),t._v(" "),e("li",[t._v("图片的表现等内容，")])]),t._v(" "),e("p",[t._v("同时张鑫旭老师将倾情分享一些实际开发中应用的经验！")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-line-height-的定义"}},[t._v("1. line-height 的定义")]),e("ul",[e("li",[e("a",{attrs:{href:"#什么是基线"}},[t._v("什么是基线")])]),e("li",[e("a",{attrs:{href:"#为何是基线"}},[t._v("为何是基线")])]),e("li",[e("a",{attrs:{href:"#需要两行吗？"}},[t._v("需要两行吗？")])]),e("li",[e("a",{attrs:{href:"#一些直观的展示图"}},[t._v("一些直观的展示图")])]),e("li",[e("a",{attrs:{href:"#何为-line-height-可以让单行文本垂直居中？"}},[t._v("何为 line-height 可以让单行文本垂直居中？")])])])]),e("li",[e("a",{attrs:{href:"#_2-line-height-与行内框盒子模型"}},[t._v("2. line-height 与行内框盒子模型")])]),e("li",[e("a",{attrs:{href:"#_3-line-height-的高度机制原理"}},[t._v("3. line-height 的高度机制原理")]),e("ul",[e("li",[e("a",{attrs:{href:"#文本占据的高度"}},[t._v("文本占据的高度")])]),e("li",[e("a",{attrs:{href:"#内容区域高度"}},[t._v("内容区域高度")])]),e("li",[e("a",{attrs:{href:"#行间距"}},[t._v("行间距")])]),e("li",[e("a",{attrs:{href:"#半行间距"}},[t._v("半行间距")])]),e("li",[e("a",{attrs:{href:"#总结"}},[t._v("总结")])])])]),e("li",[e("a",{attrs:{href:"#_4-line-height-各类属性值"}},[t._v("4. line-height 各类属性值")]),e("ul",[e("li",[e("a",{attrs:{href:"#line-height-支持属性值"}},[t._v("line-height 支持属性值")])]),e("li",[e("a",{attrs:{href:"#normal"}},[t._v("normal")])]),e("li",[e("a",{attrs:{href:"#number"}},[t._v("number")])]),e("li",[e("a",{attrs:{href:"#length"}},[t._v("length")])]),e("li",[e("a",{attrs:{href:"#percent"}},[t._v("percent")])]),e("li",[e("a",{attrs:{href:"#inherit"}},[t._v("inherit")])]),e("li",[e("a",{attrs:{href:"#各种类型设置有什么区别？"}},[t._v("各种类型设置有什么区别？")])]),e("li",[e("a",{attrs:{href:"#body-全局数值行高使用经验"}},[t._v("body 全局数值行高使用经验")])])])]),e("li",[e("a",{attrs:{href:"#_5-line-height-与图片的表现"}},[t._v("5. line-height 与图片的表现")]),e("ul",[e("li",[e("a",{attrs:{href:"#行高与图文混排"}},[t._v("行高与图文混排")])]),e("li",[e("a",{attrs:{href:"#隐匿文本节点"}},[t._v("隐匿文本节点")])]),e("li",[e("a",{attrs:{href:"#行高与图片-隐匿文本节点"}},[t._v("行高与图片-隐匿文本节点")])]),e("li",[e("a",{attrs:{href:"#如何消除图片底部间隙？"}},[t._v("如何消除图片底部间隙？")])]),e("li",[e("a",{attrs:{href:"#小图片和大文字"}},[t._v("小图片和大文字")])])])]),e("li",[e("a",{attrs:{href:"#_6-line-height-的实际应用"}},[t._v("6. line-height 的实际应用")]),e("ul",[e("li",[e("a",{attrs:{href:"#图片水平垂直居中"}},[t._v("图片水平垂直居中")])]),e("li",[e("a",{attrs:{href:"#多行文本水平垂直居中"}},[t._v("多行文本水平垂直居中")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"_1-line-height-的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-line-height-的定义"}},[t._v("#")]),t._v(" 1. line-height 的定义")]),t._v(" "),e("p",[e("strong",[t._v("定义")]),t._v("：两行文字基线之间的距离")]),t._v(" "),e("ol",[e("li",[t._v("什么是基线？")]),t._v(" "),e("li",[t._v("为何是基线？")]),t._v(" "),e("li",[t._v("需要两行吗？")])]),t._v(" "),e("h3",{attrs:{id:"什么是基线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是基线"}},[t._v("#")]),t._v(" 什么是基线")]),t._v(" "),e("p",[e("img",{attrs:{src:a(573),alt:"image-20200502132240817"}})]),t._v(" "),e("p",[t._v("如上图，在中学，写英文的本子，为了让我们写英文字母整齐使用的")]),t._v(" "),e("h3",{attrs:{id:"为何是基线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为何是基线"}},[t._v("#")]),t._v(" 为何是基线")]),t._v(" "),e("p",[t._v("可以是中线？可以是底线？个人觉得是可以的，那么为什么是基线？")]),t._v(" "),e("p",[e("strong",[t._v("这是因为：")]),t._v(" 基线乃 "),e("code",[t._v("* 线")]),t._v("（任意线）定义之根本")]),t._v(" "),e("p",[t._v("比如：文本的上边缘线、下边缘线等，都是基于基线来定义的")]),t._v(" "),e("p",[e("img",{attrs:{src:a(574),alt:"image-20200502132641544"}})]),t._v(" "),e("p",[t._v("上图是针对不同的预先体系，它的基线是不一样的")]),t._v(" "),e("h3",{attrs:{id:"需要两行吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需要两行吗？"}},[t._v("#")]),t._v(" 需要两行吗？")]),t._v(" "),e("p",[t._v("一行文字也是有行高的！两行的定义已经决定了一行的表现！")]),t._v(" "),e("p",[t._v("本章稍后章节"),e("a",{attrs:{href:"#_3-line-height-%E7%9A%84%E9%AB%98%E5%BA%A6%E6%9C%BA%E5%88%B6%E5%8E%9F%E7%90%86"}},[t._v("3. line-height 的高度机制原理")]),t._v(" 详细讲解")]),t._v(" "),e("h3",{attrs:{id:"一些直观的展示图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些直观的展示图"}},[t._v("#")]),t._v(" 一些直观的展示图")]),t._v(" "),e("p",[t._v("仔细看这些图，能让你更清楚的明白基线与行高是什么东西")]),t._v(" "),e("p",[e("img",{attrs:{src:a(575),alt:"image-20200502133545553"}})]),t._v(" "),e("p",[t._v("不同字体之间的基线也不太一样，如下图和上图的比较，上图的偏下，下图的偏上")]),t._v(" "),e("p",[e("img",{attrs:{src:a(576),alt:"image-20200502133653592"}})]),t._v(" "),e("p",[t._v("行高与基线的直观展示")]),t._v(" "),e("p",[e("img",{attrs:{src:a(577),alt:"image-20200502133830852"}})]),t._v(" "),e("h3",{attrs:{id:"何为-line-height-可以让单行文本垂直居中？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何为-line-height-可以让单行文本垂直居中？"}},[t._v("#")]),t._v(" 何为 "),e("code",[t._v("line-height")]),t._v(" 可以让单行文本垂直居中？")]),t._v(" "),e("p",[e("img",{attrs:{src:a(578),alt:"image-20200502134200649"}})]),t._v(" "),e("p",[t._v("实际上不是不是完全的垂直居中了，下面使用图片来展示")]),t._v(" "),e("p",[e("img",{attrs:{src:a(579),alt:"image-20200502134248228"}})]),t._v(" "),e("p",[t._v("字体为 14 px 的时候，看起来是垂直居中的，但是吧字体大小变得更大")]),t._v(" "),e("p",[e("img",{attrs:{src:a(580),alt:"image-20200502134418697"}})]),t._v(" "),e("p",[t._v("可以发现，没有垂直居中了；而只有字体大小为 0 时，才会真正的垂直居中")]),t._v(" "),e("p",[t._v("问题：为什么会这样表现呢？这就与 「行内框盒子模型」有关了")]),t._v(" "),e("h2",{attrs:{id:"_2-line-height-与行内框盒子模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-line-height-与行内框盒子模型"}},[t._v("#")]),t._v(" 2. line-height 与行内框盒子模型")]),t._v(" "),e("blockquote",[e("p",[t._v("行内框盒子模型- CSS 进阶必备知识")])]),t._v(" "),e("p",[t._v("所有内联元素的样式表现都与行内框盒子模型有关！")]),t._v(" "),e("p",[t._v("例如：浮动的图文环绕效果")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("普通文字，这里有个"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("em"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("em")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标签"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("上面的代码包含了 "),e("strong",[t._v("4")]),t._v(" 种盒子：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("内容区域（content area）")]),t._v(" "),e("p",[t._v("是一种围绕文字看不见的盒子，盒子大小与 "),e("code",[t._v("font-size")]),t._v("大小相关")]),t._v(" "),e("p",[t._v("大神理解：选中文字出现的蓝色背景应该就是这个盒子")]),t._v(" "),e("p",[e("img",{attrs:{src:a(581),alt:"image-20200502140957477"}})])]),t._v(" "),e("li",[e("p",[t._v("内联盒子（inline boxes）")]),t._v(" "),e("p",[e("img",{attrs:{src:a(582),alt:"image-20200502141124865"}})])]),t._v(" "),e("li",[e("p",[t._v("行框盒子（line boxes）")]),t._v(" "),e("p",[t._v("每一行就是一个 行框盒子。每个行框盒子又是由一个一个内联盒子组成")]),t._v(" "),e("p",[e("img",{attrs:{src:a(583),alt:"image-20200502141233495"}})]),t._v(" "),e("p",[t._v("无论是否是由于宽度不足导致整个 P 标签换行，只要是两行就是两个行框盒子，")])]),t._v(" "),e("li",[e("p",[t._v("包含盒子（containing box）")]),t._v(" "),e("p",[e("code",[t._v("<p>")]),t._v(" 标签所在的位置，此盒子由一行一行的行框盒子组成")]),t._v(" "),e("p",[e("img",{attrs:{src:a(584),alt:"image-20200502141434195"}})])])]),t._v(" "),e("p",[t._v("汇总下:")]),t._v(" "),e("ol",[e("li",[t._v("内容区域（content area）")]),t._v(" "),e("li",[t._v("内联盒子（inline boxes）")]),t._v(" "),e("li",[t._v("行框盒子（line boxes）")]),t._v(" "),e("li",[t._v("包含盒子（containing box）")])]),t._v(" "),e("p",[t._v("由下向上包含，其中 2 和 1 的关系，说不清")]),t._v(" "),e("p",[t._v("疑问：了解行内框盒子模型，对理解 line-height 有什么现实意义？请看下一小节")]),t._v(" "),e("h2",{attrs:{id:"_3-line-height-的高度机制原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-line-height-的高度机制原理"}},[t._v("#")]),t._v(" 3. line-height 的高度机制原理")]),t._v(" "),e("blockquote",[e("p",[t._v("深入理解内联元素的高度表现")])]),t._v(" "),e("h3",{attrs:{id:"文本占据的高度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本占据的高度"}},[t._v("#")]),t._v(" 文本占据的高度")]),t._v(" "),e("p",[e("img",{attrs:{src:a(585),alt:"image-20200502141854500"}})]),t._v(" "),e("p",[t._v("那么整个高度是从哪里来的呢？它不是由文字撑开得到的，而是由 line-height 决定的，下面进行实践")]),t._v(" "),e("p",[e("img",{attrs:{src:a(586),alt:"image-20200502142106071"}})]),t._v(" "),e("ul",[e("li",[t._v("test1：虽然他的文字很大，但是它的高度就是中间那一根线，其实是没有高度的，那一根线是边框的高度")]),t._v(" "),e("li",[t._v("test2：虽然它的文字大小为 0，但是它的高度很高")])]),t._v(" "),e("p",[t._v("所以 "),e("strong",[t._v("内联元素的高度是由 line-height")]),t._v(" 决定的！")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("第 1 小节的问题：")]),t._v(" line-height 明明是两基线距离，单行文字哪来行高？还控制了高度？")])]),t._v(" "),e("p",[t._v("要回答这个问题，我们需要提前知道的知识点有：")]),t._v(" "),e("ol",[e("li",[t._v("行高由于其继承性，影响无处不在，即使单行文本也不例外")]),t._v(" "),e("li",[t._v("行高只是幕后黑手，"),e("strong",[t._v("高度的表现不是行高")]),t._v("，而是 "),e("strong",[t._v("内容区域")]),t._v(" 和 "),e("strong",[t._v("行间距")])])]),t._v(" "),e("h3",{attrs:{id:"内容区域高度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容区域高度"}},[t._v("#")]),t._v(" 内容区域高度")]),t._v(" "),e("p",[t._v("只不过，正好他们碰巧了")]),t._v(" "),e("p",[e("img",{attrs:{src:a(587),alt:"image-20200502142738782"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/./image-20200502142924487.png",alt:"image-20200502142924487"}})]),t._v(" "),e("p",[t._v("在宋体下："),e("code",[t._v("font-size")]),t._v("+  行间距 = "),e("code",[t._v("line-height")]),t._v("，其他字体则可能不是")]),t._v(" "),e("h3",{attrs:{id:"行间距"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#行间距"}},[t._v("#")]),t._v(" 行间距")]),t._v(" "),e("p",[t._v("下面计算，是在宋体的情况下，可以这样计算：")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 240px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("360px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n则 行间距 = 360px -240px = 120px\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"半行间距"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#半行间距"}},[t._v("#")]),t._v(" 半行间距")]),t._v(" "),e("p",[t._v("行间距上下拆分，就有了「半行间距」 ，"),e("code",[t._v("半行间距计算公式 = 行高 - 内容区域高度 / 2")])]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/image-20200502143551462.png",alt:"image-20200502143551462"}})]),t._v(" "),e("p",[t._v("在微软雅黑字体下，它的半行间距就是 21.5px 。至于那个 317 ，在 Chrome 浏览器开发模式中（F12）可以查看")]),t._v(" "),e("p",[e("img",{attrs:{src:a(588),alt:"image-20200502143809785"}})]),t._v(" "),e("p",[t._v("在宋体的下，它的内容区域高度就是 240px，可以明显的看到它的行半间距明显比微软雅黑要高出不少")]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("ul",[e("li",[t._v("行高决定内联盒子高度")]),t._v(" "),e("li",[t._v("行间距墙头草，可大可（甚至负值），保证高度正好等于行高。")])]),t._v(" "),e("p",[t._v("行高需要两根基线，但是由于 "),e("code",[t._v("内容区域 + 行间距 = 行高")]),t._v("，所以看起来就像行高决定了它的高度")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("问题 2")]),t._v("：如果有多个不同行高的内联盒子？这时候高度会怎么表现")])]),t._v(" "),e("p",[t._v("网上乃至各大教程讲解：由行高最高的那个盒子决定。")]),t._v(" "),e("p",[t._v("这个结论，只对了一半：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(589),alt:"image-20200502144706302"}})]),t._v(" "),e("p",[t._v("上面这个例子，其中有一个匿名内联盒子，和一个 em 的内联盒子，P 的高度刚好久等于行高")]),t._v(" "),e("p",[e("img",{attrs:{src:a(590),alt:"image-20200502144855354"}})]),t._v(" "),e("p",[t._v("而这个例子来看，内联盒子还是行高 80px，但是给了一个往上的偏移，整个 P 的高度就变成 98 px 了。")]),t._v(" "),e("p",[t._v("所以："),e("strong",[t._v("由行高最高的那个盒子决定")]),t._v("，是不准确的；（至于 vertical-align 则是内联元素中非常重要的东西，下一节讲解）")]),t._v(" "),e("p",[t._v("多行文本（行多个行框盒子的包含容器）的高度就是 "),e("strong",[t._v("单行文本高度累加")])]),t._v(" "),e("blockquote",[e("p",[t._v("问题 3：若行框盒子里面混入 inline-block 水平元素（如图片），高度如何表现呢？")])]),t._v(" "),e("p",[t._v("该问题下节课讲解")]),t._v(" "),e("h2",{attrs:{id:"_4-line-height-各类属性值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-line-height-各类属性值"}},[t._v("#")]),t._v(" 4. line-height 各类属性值")]),t._v(" "),e("blockquote",[e("p",[t._v("深入理解 line-height 不同类别值的不同表现")])]),t._v(" "),e("h3",{attrs:{id:"line-height-支持属性值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#line-height-支持属性值"}},[t._v("#")]),t._v(" line-height 支持属性值")]),t._v(" "),e("ol",[e("li",[t._v("normal")]),t._v(" "),e("li",[e("code",[t._v("<number>")]),t._v("：这种尖括号括起来的表示一种类别")]),t._v(" "),e("li",[e("code",[t._v("<length>")])]),t._v(" "),e("li",[e("code",[t._v("<percent>")])]),t._v(" "),e("li",[t._v("inherit")])]),t._v(" "),e("h3",{attrs:{id:"normal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#normal"}},[t._v("#")]),t._v(" "),e("code",[t._v("normal")])]),t._v(" "),e("p",[t._v("默认属性值，正常；对应的具体行高的数值，是跟着用户的浏览器走，且与元素字体关联")]),t._v(" "),e("p",[t._v("在 Chrome 浏览器下，微软雅黑字体的 normal 约等于 1.32")]),t._v(" "),e("p",[e("img",{attrs:{src:a(591),alt:"image-20200502150624429"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(592),alt:"image-20200502150732803"}})]),t._v(" "),e("p",[t._v("由于行高极其不确定的状态下，一般开发中都会在 body 中重置行高。")]),t._v(" "),e("h3",{attrs:{id:"number"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" "),e("code",[t._v("number")])]),t._v(" "),e("p",[t._v("使用数值作为行高值。例如 "),e("code",[t._v("line-height: 1.5;")]),t._v(" 则行高像素值，是根据当前元素的 font-size 大小计算。")]),t._v(" "),e("p",[t._v("例如：假设文字大小（font-size） 20 px，则实际的行高像素值是 "),e("code",[t._v("line-height")]),t._v(" = "),e("code",[t._v("1.5 * 20px")]),t._v(" = "),e("code",[t._v("30px")])]),t._v(" "),e("h3",{attrs:{id:"length"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#length"}},[t._v("#")]),t._v(" "),e("code",[t._v("length")])]),t._v(" "),e("p",[t._v("使用具体的长度值作为行高值。例如")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5em；  // 相对单位\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5rem； // 相对单位\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20pt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"percent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#percent"}},[t._v("#")]),t._v(" "),e("code",[t._v("percent")])]),t._v(" "),e("p",[t._v("使用百分比作为行高值。例如 "),e("code",[t._v("line-height:150%")]),t._v(".")]),t._v(" "),e("p",[t._v("相对于设置了该 "),e("code",[t._v("line-height")]),t._v(" 属性的元素的 "),e("code",[t._v("font-size")]),t._v(" 大小计算")]),t._v(" "),e("p",[t._v("假设文字大小是 20px，则实际的行高像素值是："),e("code",[t._v("line-height = 150% * 20px = 30px")])]),t._v(" "),e("h3",{attrs:{id:"inherit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inherit"}},[t._v("#")]),t._v(" "),e("code",[t._v("inherit")])]),t._v(" "),e("p",[t._v("行高继承。ie8+")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("inherit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("有些元素的行高是默认是继承的，而有些则不是")]),t._v(" "),e("p",[t._v("比如 input 框等元素默认行高是 normal，使用 inherit 可以让文本框样式可控性更强")]),t._v(" "),e("h3",{attrs:{id:"各种类型设置有什么区别？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#各种类型设置有什么区别？"}},[t._v("#")]),t._v(" 各种类型设置有什么区别？")]),t._v(" "),e("p",[t._v("下面几种设置有啥区别？")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.5\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.5rem\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.5em"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("计算无差别。应用元素有差别")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("line-height: 1.5")]),t._v("：所有可继承元素根据 font-size 重计算行高")]),t._v(" "),e("li",[e("code",[t._v("line-height: 150%、1.5em")]),t._v("：当前元素根据 font-size 计算行高，继承给下面的元素（所有的子元素不会重新按照自己的 font-size 计算）")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(593),alt:"image-20200502152225478"}})]),t._v(" "),e("p",[t._v("父级为 1.5，文字会根据自身的 font-size 大小重新计算行高，那么这里两行则是 90 + 90 = 180 px")]),t._v(" "),e("p",[t._v("父级为 "),e("code",[t._v("150%")]),t._v("，父级的字体大小是 24 像素，那么下面的子元素的行高则为 "),e("code",[t._v("1.5 * 24 = 36")]),t._v("，而不是按照它自身的 font-size 进行计算，所以他们会重叠在一起")]),t._v(" "),e("h3",{attrs:{id:"body-全局数值行高使用经验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body-全局数值行高使用经验"}},[t._v("#")]),t._v(" body 全局数值行高使用经验")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 14px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ？"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("如果是博客类，以阅读为主的，至少要设置为 1.5")]),t._v(" "),e("li",[t._v("如果是面向用户的网页，重阅读的场景")])]),t._v(" "),e("p",[t._v("作者的经验是：匹配 20 像素的使用经验  ---\x3e 方便心算")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("line-height = 20px / 14px 约等于 1.42857\n\n\nbody")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 14px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.42857？"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("在 Chrome 浏览器中，1.42857 会被还原为 19 px，所以向上舍入\n\nbody")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 14px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4286"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("此时，使用大字号字体，也不会发生重叠的问题，一举两得")]),t._v(" "),e("h2",{attrs:{id:"_5-line-height-与图片的表现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-line-height-与图片的表现"}},[t._v("#")]),t._v(" 5. line-height 与图片的表现")]),t._v(" "),e("blockquote",[e("p",[t._v("深入探讨行高和图片的样式表现")])]),t._v(" "),e("blockquote",[e("p",[t._v("问题 1：行高会不会影响图片实际占据的高度？")])]),t._v(" "),e("p",[t._v("比如说，将行高 100 修改为 200，图片实际占据的高度会不会变化？")]),t._v(" "),e("p",[e("img",{attrs:{src:a(594),alt:"image-20200502153618169"}})]),t._v(" "),e("p",[t._v("改变容器行高，会看到图片底部的间隙变化；")]),t._v(" "),e("p",[t._v("那意思是说：行高会影响图片实际占据的高度？其实这是不对的")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("结论是：行高 "),e("strong",[t._v("不会")]),t._v(" 影响图片实际高度")])]),t._v(" "),e("p",[t._v("下面再继续探讨，验证这个结论")]),t._v(" "),e("h3",{attrs:{id:"行高与图文混排"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#行高与图文混排"}},[t._v("#")]),t._v(" 行高与图文混排")]),t._v(" "),e("p",[e("img",{attrs:{src:a(595),alt:"image-20200502153922938"}})]),t._v(" "),e("p",[t._v("可以看到默认情况下，文字与图片是下边缘对齐的，是因为基于基线对齐的；")]),t._v(" "),e("p",[e("img",{attrs:{src:a(596),alt:"image-20200502154109800"}})]),t._v(" "),e("p",[t._v("改变行高，给文字样式添加背景色，并内联块化（不内联块，看不到实际的行高），就会看到白色区域就是 90px ，但是文字的基线还是与图片底部对齐的（默认对齐方式是基线对齐）")]),t._v(" "),e("p",[t._v("一开始默认的样子，图片下面就有一点间隙，就是因为文字有默认的行高，为了基线对齐，就出现了间隙")]),t._v(" "),e("p",[e("img",{attrs:{src:a(597),alt:"image-20200502154446919"}})]),t._v(" "),e("p",[t._v("为啥只有图片没有文字的时候，表现形式与有问题一样呢？这就需要了解 隐匿文本节点了")]),t._v(" "),e("h3",{attrs:{id:"隐匿文本节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐匿文本节点"}},[t._v("#")]),t._v(" 隐匿文本节点")]),t._v(" "),e("p",[t._v("这个概念是作者自己抽象出来的，因为 CSS 是一门很感性的语言")]),t._v(" "),e("p",[e("img",{attrs:{src:a(598),alt:"image-20200502154839852"}})]),t._v(" "),e("p",[t._v("在前面讲解的过绝对定位的时候，图片为什么能跟随在中心线？就是因为有隐匿文本节点的原因，它无法通过 js 或则，也看不到")]),t._v(" "),e("h3",{attrs:{id:"行高与图片-隐匿文本节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#行高与图片-隐匿文本节点"}},[t._v("#")]),t._v(" 行高与图片-隐匿文本节点")]),t._v(" "),e("p",[e("img",{attrs:{src:a(599),alt:"image-20200502155017562"}})]),t._v(" "),e("p",[t._v("这也是如此。了解这个原理之后，面对图文混合排版的时候，你就能更好的处理一些场景")]),t._v(" "),e("h3",{attrs:{id:"如何消除图片底部间隙？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何消除图片底部间隙？"}},[t._v("#")]),t._v(" 如何消除图片底部间隙？")]),t._v(" "),e("p",[t._v("推荐三种方法：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("图片块状化 - 无基线对齐")]),t._v(" "),e("p",[t._v("因为 block 元素是没有"),e("code",[t._v("vertical-align: baseline;")]),t._v(" 的")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("图片底线对齐")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bottom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("默认是基线对齐，改为底线对齐，就可以了")])]),t._v(" "),e("li",[e("p",[t._v("行高足够小 - 基线位置上移")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("box")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("当行高足够小的时候，文字的基线就会上移，空隙就消除了")])])]),t._v(" "),e("h3",{attrs:{id:"小图片和大文字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小图片和大文字"}},[t._v("#")]),t._v(" 小图片和大文字")]),t._v(" "),e("p",[e("img",{attrs:{src:a(600),alt:"image-20200502155842226"}})]),t._v(" "),e("p",[t._v("因为图片很小，很难对大的文字造成影响，基本上高度受行高控制")]),t._v(" "),e("ol",[e("li",[t._v("不要故事闹事，故意把文字 "),e("code",[t._v("vertical-align= -100")])]),t._v(" "),e("li",[t._v("不是 IE6 浏览器")])]),t._v(" "),e("p",[t._v("容器行高设置后，剩下的就是图文的 "),e("code",[t._v("vertical-align")]),t._v(" 垂直对齐了")]),t._v(" "),e("h2",{attrs:{id:"_6-line-height-的实际应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-line-height-的实际应用"}},[t._v("#")]),t._v(" 6. line-height 的实际应用")]),t._v(" "),e("p",[t._v("一些基础的就不讲解了，这里讲解一些实用的特殊的干货")]),t._v(" "),e("blockquote",[e("p",[t._v("实际应用：大小不固定的图片、多行文字垂直居中")])]),t._v(" "),e("h3",{attrs:{id:"图片水平垂直居中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片水平垂直居中"}},[t._v("#")]),t._v(" 图片水平垂直居中")]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/image-20200502160804588.png",alt:"./image-20200502160804588"}})]),t._v(" "),e("p",[t._v("近似的达到垂直居中，这个就是 "),e("code",[t._v("vertical-align middle")]),t._v(" 的知识点了，简单的提一下，middle 是基线往上 "),e("code",[t._v("二分之一x")]),t._v(" 高度")]),t._v(" "),e("h3",{attrs:{id:"多行文本水平垂直居中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多行文本水平垂直居中"}},[t._v("#")]),t._v(" 多行文本水平垂直居中")]),t._v(" "),e("p",[t._v("单行文本前面讲解过了，直接行高垂直居中")]),t._v(" "),e("p",[e("img",{attrs:{src:a(601),alt:"image-20200502161001739"}})]),t._v(" "),e("blockquote",[e("p",[t._v("实际应用：代替 height、避免 IE6/7 下的 haslayout")])]),t._v(" "),e("p",[t._v("简单讲解下，IE6/7 很快会被淘汰")]),t._v(" "),e("p",[e("img",{attrs:{src:a(602),alt:"image-20200502161348329"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(603),alt:"image-20200502161406264"}})]),t._v(" "),e("p",[t._v("在 iE6 下 line-height 可以代替 height，解决它不受控制的兼容性；")]),t._v(" "),e("p",[t._v("所以：在高级浏览器中，要实现一个单行文字垂直居中，只需要使用 line-height 就可以了")]),t._v(" "),e("p",[e("img",{attrs:{src:a(604),alt:"image-20200502161616945"}})])])}),[],!1,null,null,null);s.default=n.exports},573:function(t,s,a){t.exports=a.p+"assets/img/image-20200502132240817.860b1500.png"},574:function(t,s,a){t.exports=a.p+"assets/img/image-20200502132641544.81ae7ea3.png"},575:function(t,s,a){t.exports=a.p+"assets/img/image-20200502133545553.e00c6575.png"},576:function(t,s,a){t.exports=a.p+"assets/img/image-20200502133653592.dc265bd2.png"},577:function(t,s,a){t.exports=a.p+"assets/img/image-20200502133830852.57b5c3a4.png"},578:function(t,s,a){t.exports=a.p+"assets/img/image-20200502134200649.32910552.png"},579:function(t,s,a){t.exports=a.p+"assets/img/image-20200502134248228.a18f0ac2.png"},580:function(t,s,a){t.exports=a.p+"assets/img/image-20200502134418697.a1f58601.png"},581:function(t,s,a){t.exports=a.p+"assets/img/image-20200502140957477.c5f0be75.png"},582:function(t,s,a){t.exports=a.p+"assets/img/image-20200502141124865.9c9d3e6e.png"},583:function(t,s,a){t.exports=a.p+"assets/img/image-20200502141233495.36de5234.png"},584:function(t,s,a){t.exports=a.p+"assets/img/image-20200502141434195.13a3e141.png"},585:function(t,s,a){t.exports=a.p+"assets/img/image-20200502141854500.a3792e19.png"},586:function(t,s,a){t.exports=a.p+"assets/img/image-20200502142106071.fa25c0da.png"},587:function(t,s,a){t.exports=a.p+"assets/img/image-20200502142738782.57ea24c2.png"},588:function(t,s,a){t.exports=a.p+"assets/img/image-20200502143809785.d3bcfc41.png"},589:function(t,s,a){t.exports=a.p+"assets/img/image-20200502144706302.b7c2ed56.png"},590:function(t,s,a){t.exports=a.p+"assets/img/image-20200502144855354.b4c69db0.png"},591:function(t,s,a){t.exports=a.p+"assets/img/image-20200502150624429.a34b0911.png"},592:function(t,s,a){t.exports=a.p+"assets/img/image-20200502150732803.6a605a79.png"},593:function(t,s,a){t.exports=a.p+"assets/img/image-20200502152225478.94e56acf.png"},594:function(t,s,a){t.exports=a.p+"assets/img/image-20200502153618169.33e712d2.png"},595:function(t,s,a){t.exports=a.p+"assets/img/image-20200502153922938.5dad56dd.png"},596:function(t,s,a){t.exports=a.p+"assets/img/image-20200502154109800.887e9015.png"},597:function(t,s,a){t.exports=a.p+"assets/img/image-20200502154446919.b374b4e3.png"},598:function(t,s,a){t.exports=a.p+"assets/img/image-20200502154839852.33bea3e9.png"},599:function(t,s,a){t.exports=a.p+"assets/img/image-20200502155017562.f02106be.png"},600:function(t,s,a){t.exports=a.p+"assets/img/image-20200502155842226.eec2964c.png"},601:function(t,s,a){t.exports=a.p+"assets/img/image-20200502161001739.30ebbb33.png"},602:function(t,s,a){t.exports=a.p+"assets/img/image-20200502161348329.d7e671e9.png"},603:function(t,s,a){t.exports=a.p+"assets/img/image-20200502161406264.75f60928.png"},604:function(t,s,a){t.exports=a.p+"assets/img/image-20200502161616945.0ab517a5.png"}}]);