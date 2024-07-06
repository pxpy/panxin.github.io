(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{470:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ArticleTopAd"),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("是python的一个后端服务框架，类似于java的springBoot")]),s._v(" "),a("p",[s._v("github星星对比\nFastApi\n68.6k")]),s._v(" "),a("p",[s._v("django\n75.8k\nflask\n65.8k")]),s._v(" "),a("h2",{attrs:{id:"后端服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端服务"}},[s._v("#")]),s._v(" 后端服务")]),s._v(" "),a("h2",{attrs:{id:"orm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orm"}},[s._v("#")]),s._v(" ORM")]),s._v(" "),a("h2",{attrs:{id:"日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[s._v("#")]),s._v(" 日志")]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("p",[s._v(".env文件，密码等安全要求高的使用环境变量")]),s._v(" "),a("h2",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("p",[s._v("在requirements.txt里面配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" requirements.txt "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" https://pypi.tuna.tsinghua.edu.cn/simple/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" dockerfile")]),s._v(" "),a("h2",{attrs:{id:"并发性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发性能"}},[s._v("#")]),s._v(" 并发性能")]),s._v(" "),a("p",[s._v("如果不配置，超过服务器资源就会报503\n线程数默认40\n启动参数说明，如果有类似于springboot的配置文件就好了")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("app：指定应用app，"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'脚本名:FastAPI实例对象'")]),s._v("、FastAPI实例对象\n\nhost: 字符串，允许被访问的形式 locahost、127.0.0.1、当前IP、0.0.0.0，默认为127.0.0.1,\n\nport：数字，应用的端口，默认为8000,\n\nuds：字符串，socket服务绑定到UNIX的域名\n\nfd：数字，从此文件描述符绑定到socket\n\nloop："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("asyncio"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("uvloop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，事件循环模式，默认为auto\n\nhttp："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("h11"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("httptools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，HTTP协议实现，默认为auto\n\nws："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("websockets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("wsproto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，WebSocket协议实现，默认为auto\n\nws-max-size：数字，WebSocket最大消息大小（字节），默认值为16777216\n\nlifespan："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，生命周期实施，默认为auto\n\nenv-file："),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("，环境配置文件\n\nlog-config："),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("，日志配置文件。支持的格式：.ini、.json、.yaml，默认为fastapi默认的log配置\n\nlog-level："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("critical"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("warning"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("info"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("trace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，日志级别，默认info\n\naccess-log：boolean，access log日志的开关，默认为True\n\nuse-colors：boolean，彩色日志的开关，（前提需指定log-config），默认为None\n\ninterface："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("asgi3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("asgi2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("wsgi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，选择ASGI3、ASGI2或WSGI作为应用程序接口，默认为auto\n\ndebug：是否使用debug模式，默认False,\n\nreload：boolean，当代码发生更时，是否自动重启，默认False,\n\nreload_dirs：字符串，设置重新加载目录，由源码可见，当没有传这个参数的实时，将取当前工作目录\n\nreload-delay：float，每隔多久检测代码是否有变动，默认0.25秒\n\nworkers：数字，工作进程数。默认为"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WEB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("U CONCURRENCY环境变量（如果可用），或1。对于--reload无效。\n\nproxy-headers：boolean，启用/禁用X-Forwarded-Proto、X-Forwarded-For、X-Forwarded-Port以填充远程地址信息，默认为True\n\nforwarded-allow-ips：字符串，用逗号分隔的IP列表以信任代理标头。默认为"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FORWARDED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("u ALLOW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("u IPS环境变量（如果可用），或 None，为None时，代码里面则取127.0.0.1\n\nroot-path：字符串，为安装在给定URL路径下的应用程序设置ASGI“根路径”。\n\nlimit-concurrency：数字，在发出HTTP503响应之前，允许的最大并发连接数或任务数。默认为None\n\nlimit-max-requests：数字，达到多少请求数则终止进程，默认为None\n\nbacklog：数字，等待处理的最大连接数，默认为2048\n\ntimeout-keep-alive：数字，如果在此超时时间内未收到新数据，则关闭保持活动状态的连接，默认为5\n\nssl-keyfile：字符串，SSL密钥文件，默认为None\n\nssl-certfile：字符串，SSL证书文件，默认为None\n\nssl-keyfile-password：字符串，SSL密钥文件密码，默认为None\n\nssl-version：数字，要使用的SSL版本（详见stdlib SSL模块），默认为2\n\nssl-cert-reqs：数字，是否需要客户端证书（详见stdlib SSL模块），默认为0\n\nssl-ca-certs：字符串，CA证书文件\n\nssl-ciphers：字符串，要使用的CA证书文件密码（详见stdlib SSL模块），默认为TLSv1\n\nheader：字典，自定义响应头信息，键值对的形式，默认为None\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br")])]),a("p",[s._v("workers 建议配置为CPU核心数*2+1\nlimit-concurrency，根据服务器性能，超过配置后报503 Service Unavailable")]),s._v(" "),a("p",[s._v("启动命令参考")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("uvicorn  main:app "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--workers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" --limit-concurrency "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--host")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);