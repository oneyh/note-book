(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{1071:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"磁盘管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[s._v("#")]),s._v(" 磁盘管理")]),s._v(" "),t("h2",{attrs:{id:"删除某个时间范围前的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除某个时间范围前的文件"}},[s._v("#")]),s._v(" 删除某个时间范围前的文件")]),s._v(" "),t("p",[s._v("语句写法："),t("code",[s._v('find 对应目录 -mtime +天数 -name "文件名" -exec rm -rf {} \\;')])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("将 /usr/local/backups 目录下所有10天前带"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v("的文件删除\n\n　　"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /usr/local/backups -mtime +10 -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.*"')]),s._v(" -exec "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("find")]),s._v("：linux 的查找命令，用户查找指定条件的文件")]),s._v(" "),t("li",[t("code",[s._v("/usr/local/backups")]),s._v("：想要进行清理的任意目录")]),s._v(" "),t("li",[t("code",[s._v("-mtime")]),s._v("：标准语句写法")]),s._v(" "),t("li",[t("code",[s._v("＋10")]),s._v("：查找10天前的文件，这里用数字代表天数，＋30表示查找30天前的文件")]),s._v(" "),t("li",[t("code",[s._v('"*.*"')]),s._v('：希望查找的数据类型，"'),t("code",[s._v("*.jpg")]),s._v('" 表示查找扩展名为jpg的所有文件，'),t("code",[s._v('"*"')]),s._v(" 表示查找所有文件，这个可以灵活运用，举一反三")]),s._v(" "),t("li",[t("code",[s._v("-exec")]),s._v("：固定写法")]),s._v(" "),t("li",[t("code",[s._v("rm -rf")]),s._v("：强制删除文件，包括目录")]),s._v(" "),t("li",[t("code",[s._v("{} \\;")]),s._v(" ：固定写法，一对大括号+空格+\\")])]),s._v(" "),t("h2",{attrs:{id:"容量查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容量查看"}},[s._v("#")]),s._v(" 容量查看")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("df -hl 查看磁盘剩余空间\n\ndf -h 查看每个根路径的分区大小\n\ndu -sh [目录名] 返回该目录的大小\n\ndu -sm [文件夹] 返回该文件夹总M数\n\ndu -h [目录名] 查看指定文件夹下的所有文件大小（包含子文件夹）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);