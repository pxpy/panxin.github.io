(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{503:function(t,e,r){"use strict";r.r(e);var s=r(2),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("本次操作以wordpress-3.6.1为例，其它版本，操作上，大同小异\n"),t._v("\n打开“网站\\wp-includes\\default-widgets.php” 搜索如下代码： ")]),e("li",[t._v("<?php wp\\_loginout(); ?>")]),t._v(" 删除以下代码 "),e("li",[e("a",{attrs:{href:"<?php bloginfo('rss2\\_url'); ?>"}},[t._v("<?php \\_e('Entries "),e("abbr",{attrs:{title:"Really Simple Syndication"}},[t._v("RSS")]),t._v("'); ?>")])]),t._v(" "),e("li",[e("a",{attrs:{href:"<?php bloginfo('comments\\_rss2\\_url'); ?>"}},[t._v("<?php \\_e('Comments "),e("abbr",{attrs:{title:"Really Simple Syndication"}},[t._v("RSS")]),t._v("'); ?>")])]),t._v(" <?php /\\*\\* \\* Filter the \"Powered by WordPress\" text in the Meta widget. \\* \\* @since 3.6.0 \\* \\* @param string $title\\_text Default title text for the WordPress.org link. \\*/ echo apply\\_filters( 'widget\\_meta\\_poweredby', sprintf( '"),e("li",[e("a",{attrs:{href:"%s",title:"%s"}},[t._v("%s")])]),t._v("', esc\\_url( \\_\\_( 'https://wordpress.org/' ) ), esc\\_attr\\_\\_( 'Powered by WordPress, state-of-the-art semantic personal publishing platform.' ), \\_x( 'WordPress.org', 'meta widget link text' ) ) ); wp\\_meta(); ?>   第1个"),e("li",[t._v("到")]),t._v("为文章RSS 第2个"),e("li",[t._v("到")]),t._v("为评论RSS 第3段<?php\\*\\*\\*\\*\\*\\*?>为WordPress.org链接 全部删除后的效果 "),e("a",{attrs:{href:"https://pic.panxin.me/2015/10/WordPress-rss.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://pic.panxin.me/2015/10/WordPress-rss.png",alt:"WordPress-rss"}}),e("OutboundLink")],1),t._v(" 转载自"),e("a",{attrs:{href:"http://smxr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("生命线电脑技术"),e("OutboundLink")],1),t._v("，由我适当修改。 地址："),e("a",{attrs:{href:"http://smxr.com/post/114.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://smxr.com/post/114.htm"),e("OutboundLink")],1),e("p")])}),[],!1,null,null,null);e.default=n.exports}}]);