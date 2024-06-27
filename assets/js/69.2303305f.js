(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{482:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ArticleTopAd"),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("往往需要输出实际执行的SQL，便于分析。")]),t._v(" "),a("h2",{attrs:{id:"默认的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认的格式"}},[t._v("#")]),t._v(" 默认的格式")]),t._v(" "),a("p",[t._v("Mybatis 配置：")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mybatis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### 开启打印sql配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-impl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.apache.ibatis.logging.stdout.StdOutImpl\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### 开启驼峰配置")]),t._v("\n    map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("underscore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("camel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("case：true\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("MybatisPlus 配置：")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mybatis-plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### 开启打印sql配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-impl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.apache.ibatis.logging.stdout.StdOutImpl\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### 开启驼峰配置")]),t._v("\n    map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("underscore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("camel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("case：true\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("输出的是?占位的SQL")]),t._v(" "),a("h2",{attrs:{id:"_1-mybatis-拦截器-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mybatis-拦截器-插件"}},[t._v("#")]),t._v(" 1. mybatis 拦截器/插件")]),t._v(" "),a("p",[t._v("需要修改代码")]),t._v(" "),a("p",[t._v("https://juejin.cn/post/7252342216843821116")]),t._v(" "),a("p",[t._v("https://github.com/jd-opensource/sql-analysis?tab=readme-ov-file")]),t._v(" "),a("h2",{attrs:{id:"_2-java-agent-探针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-agent-探针"}},[t._v("#")]),t._v(" 2. java agent/探针")]),t._v(" "),a("p",[t._v("不需要修改代码，修改下启动命令就可以\n有bytebuddy\n使用bytebuddy则让我们更高效的处理字节码，相比于asm，javaassist，bytebuddy更强大高效")]),t._v(" "),a("h2",{attrs:{id:"_3-idea插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-idea插件"}},[t._v("#")]),t._v(" 3. idea插件")]),t._v(" "),a("h3",{attrs:{id:"类型一-格式化日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型一-格式化日志"}},[t._v("#")]),t._v(" 类型一：格式化日志")]),t._v(" "),a("p",[t._v("mybatis开启日志，通过拦截控制台中的日志，自动提取 mybatis 打印的 SQL，并格式化所有参数\nhttps://plugins.jetbrains.com/plugin/15543-mybatis-sql-print")]),t._v(" "),a("h3",{attrs:{id:"类型二-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型二-agent"}},[t._v("#")]),t._v(" 类型二：agent")]),t._v(" "),a("p",[t._v("在启动命令添加Java agent\nhttps://plugins.jetbrains.com/plugin/24079-printsql")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);