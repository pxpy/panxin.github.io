(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{437:function(t,e,p){"use strict";p.r(e);var n=p(2),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("以往Office的安装包都采用的是MSI安装器，允许用户在安装时选择安装的组件，但是微软发布的Office 2016安装包只提供了C2R（ClickToRun）方式，因此默认情况下用户无法选择安装组件，默认会安装所有。太反人类了！大多数人可能只需要其中的Word、PowerPoint和Excel三大件，那么该如何操作呢？ "),e("img",{attrs:{src:"https://panxin.me/wp-content/uploads/2015/10/100615_0215_Office211.jpg",alt:""}})]),t._v(" "),e("p",[t._v("微软在下载中心中提供了Office2016部署工具，通过该工具可实现上述目的。具体操作方法如下：")]),t._v(" "),e("p",[t._v("1、下载Office2016部署工具，"),e("a",{attrs:{href:"https://www.microsoft.com/en-us/download/confirmation.aspx?id=49117",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此下载"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v('2、双击下载的工具，如下图，勾选"Click here to..."，点击"Continue"；')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://panxin.me/wp-content/uploads/2015/10/100615_0215_Office221.jpg",alt:""}})]),t._v(" "),e("p",[t._v("3、该工具会释放两个我们需要的文件（setup.exe和configuration.xml），如下图所示，选择解压的目录，这里选择解压在桌面。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://panxin.me/wp-content/uploads/2015/10/100615_0215_Office231.jpg",alt:""}})]),t._v(" "),e("p",[t._v("4、用虚拟光驱加载你下载的Office2016 ISO镜像。")]),t._v(" "),e("p",[t._v("提示：Win7下你可以使用魔方虚拟光驱（"),e("a",{attrs:{href:"http://down.ruanmei.com/tweakcube/partner/pcmastersetup_u151.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此下载"),e("OutboundLink")],1),t._v("）来加载ISO镜像。")]),t._v(" "),e("p",[t._v("5、用记事本打开第3步解压得到的configuration文件，将其中的内容改为下图所示的样子：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://panxin.me/wp-content/uploads/2015/10/100615_0215_Office241.jpg",alt:""}})]),t._v(" "),e("p",[t._v("• OfficeClientEdition表示架构，如果你想安装32位则改为32；")]),t._v(" "),e("p",[t._v("• SourcePath表示Office2016 ISO镜像加载位置；")]),t._v(" "),e("p",[t._v("• Language表示语言，zh-CN表示中文，如果你安装的是英文，则为en-us；")]),t._v(" "),e("p",[t._v("• ExcludeApp表示不被安装的组件，你可以看到这里面不包括Word、PowerPoint和Excel，我们的目的就是只安装这三个组件。你可以根据自己的需要删除或增加ExcludeApp。")]),t._v(" "),e("p",[t._v("修改好后保存。你可以直接从下面复制代码：")]),t._v(" "),e("Configuration",[e("Add",{attrs:{SourcePath:"D:\\\\",OfficeClientEdition:"64"}},[e("Product",{attrs:{ID:"ProPlusRetail"}},[e("Language",{attrs:{ID:"zh-CN"}}),t._v(" "),e("ExcludeApp",{attrs:{ID:"Access"}}),t._v(" "),e("ExcludeApp",{attrs:{ID:"Groove"}}),t._v(" "),e("ExcludeApp",{attrs:{ID:"InfoPath"}}),t._v(" "),e("ExcludeApp",{attrs:{ID:"Lync"}}),t._v(" "),e("ExcludeApp",{attrs:{ID:"OneNote"}}),t._v(" "),e("ExcludeApp",{attrs:{ID:"Outlook"}}),t._v(" "),e("ExcludeApp",{attrs:{ID:"Publisher"}}),t._v(" "),e("ExcludeApp",{attrs:{ID:"SharePointDesigner"}})],1)],1)],1),t._v(" "),e("p",[t._v("6、以管理员身份CMD，运行下面的命令即可：")]),t._v(" "),e("p",[t._v("setup.exe /configure configuration.xml")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://panxin.me/wp-content/uploads/2015/10/100615_0215_Office251.jpg",alt:""}})]),t._v(" "),e("p",[t._v("在桌面，第一条命令用来将CMD当前路径更改为桌面。你也可以只使用第二条命令，但命令中setup.exe和configuration.xml需替换为文件的完整路径。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://panxin.me/wp-content/uploads/2015/10/100615_0215_Office261.jpg",alt:""}})]),t._v(" "),e("p",[t._v("▲开始安装了，只安装你选择的组件")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);