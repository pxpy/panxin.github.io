(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{502:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ArticleTopAd"),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" windows")]),s._v(" "),a("p",[s._v("解压到非中文目录")]),s._v(" "),a("p",[s._v("在dos窗口命令行中，进入到nginx文件夹下，并启动nginx，启动命令 start nginx")]),s._v(" "),a("p",[s._v('使用tasklist /fi\n"imagename eq nginx.exe" 该命令是查看是否启动成功。')]),s._v(" "),a("ol",[a("li",[a("p",[s._v("擅长静态的")])]),s._v(" "),a("li",[a("p",[s._v("高并发连接：处理2-3万并发连接数，官方监测能支持5万并发")])]),s._v(" "),a("li",[a("p",[s._v("内存消耗小：开启10个nginx才占150M内存")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/pxpy/img@master/image.2sqn4uvxiwk0.webp",alt:"image"}})]),s._v(" "),a("p",[s._v("反方代理就是请求统一被Nginx接收，nginx反向代理服务器接收到之后，按照一定的规\n则分发给了后端的业务处理服务器进行处理了")]),s._v(" "),a("p",[s._v("反向代理服务器可以隐藏源服务器的存在和特征。它充当互联网云和web服务器之间的中间层，有利于提高安全性。")]),s._v(" "),a("h3",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/Wei_Naijia/article/details/124228897",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("(14条消息) Linux操作系统CentOS7安装Nginx[详细版]_Naijia_OvO的博客-CSDN博客_centos7 安装nginx"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"spingboot项目动静分离和负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spingboot项目动静分离和负载均衡"}},[s._v("#")]),s._v(" SpingBoot项目动静分离和负载均衡")]),s._v(" "),a("p",[s._v("通过请求地址区分静态还是动态请求")]),s._v(" "),a("h3",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[s._v("#")]),s._v(" 前端")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("axios请求全局添加api/")])]),s._v(" "),a("li",[a("p",[s._v("编译Vue脚手架项目")])]),s._v(" "),a("li",[a("p",[s._v("dist文件夹内容，放入nginx的html目录。")])])]),s._v(" "),a("h3",{attrs:{id:"后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[s._v("#")]),s._v(" 后端")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("SpringBoot项目打包为jar文件")])]),s._v(" "),a("li",[a("p",[s._v("一台电脑模拟，需要分别设置端口号为 8080/9090，并启动项目")])]),s._v(" "),a("li",[a("p",[s._v("不同电脑相同的jar包和端口就可以")])])]),s._v(" "),a("h3",{attrs:{id:"配置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[s._v("#")]),s._v(" 配置nginx")]),s._v(" "),a("p",[s._v("编辑nginx.conf文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/pxpy/img@master/image.f6alyxjgxbk.webp",alt:"image"}})]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[s._v("upstream ES1 {\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip_hash;")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server 127.0.0.1:8080 weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("5;")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server 127.0.0.1:9090 weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("5;")]),s._v("\n   }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[s._v("location / {\n    root   html;\n    index  index.html;\n}\n                          \nlocation /api/ {\n    proxy_pass http://ES1/;\n}\n        \nlocation /static/ {\n    root   html;\n    autoindex on;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("我的博客即将同步至腾讯云开发者社区，邀请大家一同入驻：https://cloud.tencent.com/developer/support-plan?invite_code=38dpnhkh4o8wo")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);