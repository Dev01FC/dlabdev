(function(t){function a(a){for(var d,n,o=a[0],r=a[1],l=a[2],f=0,p=[];f<o.length;f++)n=o[f],i[n]&&p.push(i[n][0]),i[n]=0;for(d in r)Object.prototype.hasOwnProperty.call(r,d)&&(t[d]=r[d]);c&&c(a);while(p.length)p.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],d=!0,n=1;n<e.length;n++){var r=e[n];0!==i[r]&&(d=!1)}d&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var d={},i={app:0},s=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d026a715","chunk-2d0a47fe":"1fecc635","chunk-2d0e922d":"0b8768cc","chunk-2d2136fa":"afe94102","chunk-2d2138f6":"5c53083e","chunk-2d224533":"dd05e44d","chunk-2d22c114":"3ef93705"}[t]+".js"}function o(a){if(d[a])return d[a].exports;var e=d[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var d=new Promise(function(a,d){e=i[t]=[a,d]});a.push(e[2]=d);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.src=n(t),s=function(a){r.onerror=r.onload=null,clearTimeout(l);var e=i[t];if(0!==e){if(e){var d=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src,n=new Error("Loading chunk "+t+" failed.\n("+d+": "+s+")");n.type=d,n.request=s,e[1](n)}i[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:r})},12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(a)},o.m=t,o.c=d,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var d in t)o.d(e,d,function(a){return t[a]}.bind(null,d));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/dlabdev/",o.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var f=0;f<r.length;f++)a(r[f]);var c=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("744f"),e("6c7b"),e("7514"),e("20d6"),e("1c4c"),e("6762"),e("cadf"),e("e804"),e("55dd"),e("d04f"),e("c8ce"),e("217b"),e("7f7f"),e("f400"),e("7f25"),e("536b"),e("d9ab"),e("f9ab"),e("32d7"),e("25c9"),e("9f3c"),e("042e"),e("c7c6"),e("f4ff"),e("049f"),e("7872"),e("a69f"),e("0b21"),e("6c1a"),e("c7c62"),e("84b4"),e("c5f6"),e("2e37"),e("fca0"),e("7cdf"),e("ee1d"),e("b1b1"),e("87f3"),e("9278"),e("5df2"),e("04ff"),e("f751"),e("4504"),e("fee7"),e("ffc1"),e("0d6d"),e("9986"),e("8e6e"),e("25db"),e("e4f7"),e("b9a1"),e("64d5"),e("9aea"),e("db97"),e("66c8"),e("57f0"),e("165b"),e("456d"),e("cf6a"),e("fd24"),e("8615"),e("551c"),e("097d"),e("df1b"),e("2397"),e("88ca"),e("ba16"),e("d185"),e("ebde"),e("2d34"),e("f6b3"),e("2251"),e("c698"),e("a19f"),e("9253"),e("9275"),e("3b2b"),e("3846"),e("4917"),e("a481"),e("28a5"),e("386d"),e("6b54"),e("4f7f"),e("8a81"),e("ac4d"),e("8449"),e("9c86"),e("fa83"),e("48c0"),e("a032"),e("aef6"),e("d263"),e("6c37"),e("9ec8"),e("5695"),e("2fdb"),e("d0b0"),e("5df3"),e("b54a"),e("f576"),e("ed50"),e("788d"),e("14b9"),e("f386"),e("f559"),e("1448"),e("673e"),e("242a"),e("c66f"),e("b05c"),e("34ef"),e("6aa2"),e("15ac"),e("af56"),e("b6e4"),e("9c29"),e("63d9"),e("4dda"),e("10ad"),e("c02b"),e("4795"),e("130f"),e("ac6a"),e("96cf");var d=e("2b0e"),i=e("9f7b"),s=e.n(i);e("ab8b"),e("2dd8");d["a"].use(s.a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._m(0),e("div",{attrs:{id:"nav"}}),e("router-view")],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header-area"},[e("div",{staticClass:"prehedaer-area-wrapper"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-8 col-xl-6 offset-xl-2 d-none d-sm-block"},[e("div",{staticClass:"pre-header-left d-sm-flex justify-content-center justify-content-lg-start"},[e("div",{staticClass:"pre-header-item"},[e("a",{attrs:{href:"tel:+31-6-254-26-731"}},[e("i",{staticClass:"fa fa-phone"}),t._v(" +31-6-25426731")])]),e("div",{staticClass:"pre-header-item"},[e("span",[e("i",{staticClass:"fa fa-clock-o"}),t._v(" Ma - Vr: 9:00 - 16:00")])]),e("div",{staticClass:"pre-header-item"},[e("a",{attrs:{href:"mailto:info@dlab.nl"}},[e("i",{staticClass:"fa fa-envelope-o"}),t._v(" info@dlab.nl")])])])]),e("div",{staticClass:"col-lg-4 d-none d-lg-block"},[e("div",{staticClass:"pre-header-right text-center text-md-right"},[e("div",{staticClass:"social-icons"},[e("a",{attrs:{href:"https://www.facebook.com/pg/DLab058/",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook"})]),e("a",{attrs:{href:"https://www.linkedin.com/company/dlab-friesland",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin"})]),e("a",{attrs:{href:"https://www.instagram.com/dlab_lwd/",target:"_blank"}},[e("i",{staticClass:"fa fa-instagram"})])])])])])])]),e("div",{staticClass:"header-bottom header-shape sticky-header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-5 col-lg-2"},[e("div",{staticClass:"logo-area"},[e("a",{attrs:{href:"index.html"}},[e("img",{attrs:{src:"assets/img/DLab_Logo_FC100.png",alt:"Logo"}})])])]),e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("nav",{staticClass:"navigation-area"},[e("ul",{staticClass:"main-menu nav"},[e("li",{staticClass:"dropdown-navbar"},[e("a",{attrs:{href:"index.html"}},[t._v("Home")]),e("ul",{staticClass:"dropdown-nav"},[e("li",[e("a",{attrs:{href:"index.html"}},[t._v("Home 01")])])])]),e("li",{staticClass:"dropdown-navbar"},[e("a",{attrs:{href:"project.html"}},[t._v("Projects")]),e("ul",{staticClass:"dropdown-nav"},[e("li",[e("a",{attrs:{href:"project-fullwidth.html"}},[t._v("Projects Fullwidth")])])])]),e("li",{staticClass:"dropdown-navbar"},[e("a",{attrs:{href:"services.html"}},[t._v("Our Services")]),e("ul",{staticClass:"dropdown-nav"},[e("li",[e("a",{attrs:{href:"services.html"}},[t._v("Our Services 01")])])])]),e("li",{staticClass:"dropdown-navbar"},[e("a",{attrs:{href:"about.html"}},[t._v("About Us")]),e("ul",{staticClass:"dropdown-nav"},[e("li",[e("a",{attrs:{href:"about.html"}},[t._v("About")])])])]),e("li",{staticClass:"dropdown-navbar"},[e("a",{attrs:{href:"shop.html"}},[t._v("Shop")]),e("ul",{staticClass:"dropdown-nav"},[e("li",[e("a",{attrs:{href:"shop.html"}},[t._v("Product Page")])])])]),e("li",{staticClass:"dropdown-navbar"},[e("a",{attrs:{href:"blog.html"}},[t._v("Blog")]),e("ul",{staticClass:"dropdown-nav"},[e("li",[e("a",{attrs:{href:"blog-list-no-sidebar.html"}},[t._v("Blog List No Sidebar")])])])]),e("li",{staticClass:"dropdown-navbar"},[e("a",{attrs:{href:"contact.html"}},[t._v("Contact")]),e("ul",{staticClass:"dropdown-nav"},[e("li",[e("a",{attrs:{href:"contact.html"}},[t._v("Contact")])]),e("li",[e("a",{attrs:{href:"contact-2.html"}},[t._v("Contact 2")])])])])])])]),e("div",{staticClass:"col-7 col-lg-2"},[e("div",{staticClass:"header-action-area"},[e("ul",{staticClass:"action-buttons nav justify-content-end"},[e("li",[e("a",{staticClass:"btn-search",attrs:{href:"#"}},[e("i",{staticClass:"pe-7s-search"}),e("i",{staticClass:"pe-7s-close"})]),e("div",{staticClass:"header-search-box"},[e("form",{attrs:{action:"#"}},[e("div",{staticClass:"search-box-content"},[e("input",{attrs:{type:"search",placeholder:"type here and hit enter"}})])])])]),e("li",[e("a",{staticClass:"btn-cart",attrs:{href:"cart.html"}},[e("i",{staticClass:"pe-7s-cart"})])]),e("li",{staticClass:"d-lg-none"},[e("button",{staticClass:"btn-canvas-open"},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])])])}],r=e("2877"),l={},f=Object(r["a"])(l,n,o,!1,null,null,null),c=f.exports,p=e("8c4f"),h=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"slider-area-wrapper fix"},[e("div",{staticClass:"rev_slider_wrapper fullwidthbanner-container",attrs:{id:"rev_slider_1_1_wrapper","data-alias":"slider-01","data-source":"gallery"}},[e("div",{staticClass:"rev_slider fullwidthabanner",attrs:{id:"rev_slider_1_1","data-version":"5.4.7"}},[e("ul",[e("li",{attrs:{"data-index":"rs-1","data-transition":"random","data-slotamount":"default","data-hideafterloop":"0","data-hideslideonmobile":"off","data-easein":"default","data-easeout":"default","data-masterspeed":"default","data-thumb":"assets/img/slider/h-1/100x50_slider-01-bg.jpg","data-rotate":"0","data-saveperformance":"off","data-title":"Slide"}},[e("img",{staticClass:"rev-slidebg",attrs:{src:"assets/img/slider/h-1/slider-01-01-bg.jpg",alt:"slider","data-bgposition":"center center","data-bgfit":"cover","data-bgrepeat":"no-repeat","data-bgparallax":"off","data-no-retina":""}}),e("div",{staticClass:"tp-caption tp-resizeme",attrs:{id:"slide-1-layer-2","data-x":"['left','left','left','left']","data-hoffset":"['10','50','10','15']","data-y":"['middle','middle','middle','middle']","data-voffset":"['-60','-60','-90','-76']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"text","data-responsive_offset":"on","data-frames":'[{"delay":150,"split":"chars","split_direction":"forward","splitdelay":0.05,"speed":2000,"frame":"0","from":"y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          BuildPlus Template\n                      ")]),e("h1",{staticClass:"tp-caption   tp-resizeme",attrs:{id:"slide-1-layer-3","data-x":"['left','left','left','left']","data-hoffset":"['10','50','10','15']","data-y":"['middle','middle','middle','middle']","data-voffset":"['0','0','-30','-30']","data-fontsize":"['70','70','70','40']","data-lineheight":"['70','70','70','40']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"text","data-responsive_offset":"on","data-frames":'[{"delay":50,"speed":1000,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          We Build "),e("strong",[t._v("The Future")])]),e("div",{staticClass:"tp-caption   tp-resizeme",attrs:{id:"slide-1-layer-4","data-x":"['left','left','left','left']","data-hoffset":"['10','50','10','15']","data-y":"['middle','middle','middle','middle']","data-voffset":"['61','61','31','14']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"text","data-responsive_offset":"on","data-frames":'[{"delay":500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          We build structure & relationship to the last\n                      ")]),e("div",{staticClass:"tp-caption bttn-primary-bg rev-btn  tp-resizeme  transit-md",attrs:{id:"slide-1-layer-8","data-x":"['left','center','left','left']","data-hoffset":"['11','-378','11','16']","data-y":"['top','top','middle','middle']","data-voffset":"['392','391','89','75']","data-fontsize":"['15','16','16','16']","data-fontweight":"['700','600','600','600']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"button","data-responsive_offset":"on","data-frames":'[{"delay":500,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(250,154,0,1);bg:transparent;bw:2 2 2 2;"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[15,15,15,15]","data-paddingright":"[25,25,25,25]","data-paddingbottom":"[15,15,15,15]"}},[t._v("\n                          OUR PROJECTS\n                      ")])]),e("li",{attrs:{"data-index":"rs-2","data-transition":"fade","data-slotamount":"default","data-hideafterloop":"0","data-hideslideonmobile":"off","data-easein":"default","data-easeout":"default","data-masterspeed":"300","data-thumb":"assets/img/slider/h-1/slider-01-02-bg.jpg","data-rotate":"0","data-saveperformance":"off","data-title":"Slide"}},[e("img",{staticClass:"rev-slidebg",attrs:{src:"assets/img/slider/h-1/slider-01-02-bg.jpg",alt:"slider","data-bgposition":"center center","data-bgfit":"cover","data-bgrepeat":"no-repeat","data-bgparallax":"off","data-no-retina":""}}),e("div",{staticClass:"tp-caption cap-big-primary tp-resizeme",attrs:{id:"slide-2-layer-1","data-x":"['center','center','center','center']","data-hoffset":"['0','0','0','0']","data-y":"['middle','middle','middle','middle']","data-voffset":"['-111','-111','-111','-81']","data-fontsize":"['80','80','80','50']","data-lineheight":"['90','90','90','55']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"text","data-responsive_offset":"on","data-frames":'[{"from":"x:-50px;opacity:0;","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          RENOVATE\n                      ")]),e("div",{staticClass:"tp-caption cap-big-white tp-resizeme",attrs:{id:"slide-2-layer-2","data-x":"['center','center','center','center']","data-hoffset":"['0','0','0','0']","data-y":"['middle','middle','middle','middle']","data-voffset":"['-40','-40','-50','-38']","data-fontsize":"['80','80','80','50']","data-lineheight":"['90','90','90','55']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"text","data-responsive_offset":"on","data-frames":'[{"from":"x:50px;opacity:0;","speed":1500,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          YOUR HOME\n                      ")]),e("div",{staticClass:"tp-caption tp-resizeme",attrs:{id:"slide-2-layer-3","data-x":"['center','center','center','center']","data-hoffset":"['0','0','0','0']","data-y":"['middle','middle','middle','middle']","data-voffset":"['29','29','29','29']","data-fontsize":"['20','20','20','18']","data-lineheight":"['26','26','26','24']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"text","data-responsive_offset":"on","data-frames":'[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          We build structure & relationship to the last\n                      ")]),e("div",{staticClass:"tp-caption bttn-white rev-btn tp-resizeme transit-md",attrs:{id:"slide-2-layer-4","data-x":"['center','center','center','center']","data-hoffset":"['0','0','0','0']","data-y":"['middle','middle','middle','middle']","data-voffset":"['86','86','86','86']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"button","data-responsive_offset":"on","data-frames":'[{"from":"y:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(250,154,0,1);bc:rgba(250,154,0,1);bw:2px 2px 2px 2px;"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[13,13,13,13]","data-paddingright":"[20,20,20,20]","data-paddingbottom":"[13,13,13,13]","data-paddingleft":"[20,20,20,20]"}},[t._v("\n                          CONTACT US\n                      ")])]),e("li",{attrs:{"data-index":"rs-3","data-transition":"fade","data-slotamount":"default","data-hideafterloop":"0","data-hideslideonmobile":"off","data-easein":"default","data-easeout":"default","data-masterspeed":"300","data-thumb":"assets/img/slider/h-1/slider-01-03-bg.jpg","data-rotate":"0","data-saveperformance":"off","data-title":"Slide"}},[e("img",{staticClass:"rev-slidebg",attrs:{src:"assets/img/slider/h-1/slider-01-03-bg.jpg",alt:"slider","data-bgposition":"center center","data-bgfit":"cover","data-bgrepeat":"no-repeat","data-bgparallax":"off","data-no-retina":""}}),e("div",{staticClass:"tp-caption cap-big-primary tp-resizeme",attrs:{id:"slide-3-layer-1","data-x":"['left','left','left','left']","data-hoffset":"['20','70','0','20']","data-y":"['middle','middle','middle','middle']","data-voffset":"['-79','-79','-79','-81']","data-fontsize":"['80','80','80','50']","data-lineheight":"['90','90','90','55']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"text","data-responsive_offset":"on","data-frames":'[{"from":"x:-50px;opacity:0;","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          From Concept\n                      ")]),e("div",{staticClass:"tp-caption cap-big-white tp-resizeme",attrs:{id:"slide-3-layer-2","data-x":"['left','left','left','left']","data-hoffset":"['20','70','0','20']","data-y":"['middle','middle','middle','middle']","data-voffset":"['-10','-10','-10','-38']","data-fontsize":"['80','80','80','50']","data-lineheight":"['90','90','90','55']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"text","data-responsive_offset":"on","data-frames":'[{"from":"x:50px;opacity:0;","speed":1500,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          To Creation\n                      ")]),e("div",{staticClass:"tp-caption tp-resizeme",attrs:{id:"slide-3-layer-3","data-x":"['left','left','left','left']","data-hoffset":"['20','70','0','20']","data-y":"['middle','middle','middle','middle']","data-voffset":"['60','60','60','29']","data-fontweight":"['400','400','400','600']","data-width":"['470','470','470','350']","data-height":"none","data-whitespace":"normal","data-type":"text","data-responsive_offset":"on","data-frames":'[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[0,0,0,0]","data-paddingright":"[0,0,0,0]","data-paddingbottom":"[0,0,0,0]","data-paddingleft":"[0,0,0,0]"}},[t._v("\n                          Suspendisse vulputate pulvinar quam a molestie. Etiam feugiat sit amet eros eget imperdiet.\n                      ")]),e("div",{staticClass:"tp-caption bttn-primary-bg rev-btn tp-resizeme transit-md",attrs:{id:"slide-3-layer-6","data-x":"['left','left','left','left']","data-hoffset":"['20','70','0','20']","data-y":"['middle','middle','middle','middle']","data-voffset":"['127','127','127','103']","data-width":"none","data-height":"none","data-whitespace":"nowrap","data-type":"button","data-responsive_offset":"on","data-frames":'[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(250,154,0,1);bg:transparent;bw:2px 2px 2px 2px;-webkit-transition:all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);transition:all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);"}]',"data-textAlign":"['left','left','left','left']","data-paddingtop":"[13,13,13,13]","data-paddingright":"[20,20,20,20]","data-paddingbottom":"[13,13,13,13]","data-paddingleft":"[20,20,20,20]"}},[t._v("\n                          OUR PROJECTS\n                      ")])])]),e("div",{staticClass:"tp-bannertimer"})])])])])}],u={name:"home",components:{}},g=u,b=Object(r["a"])(g,h,m,!1,null,"13b2988c",null),v=b.exports;d["a"].use(p["a"]);var w=new p["a"]({mode:"hash",base:"/dlabdev/",routes:[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/approach",name:"approach",component:function(){return e.e("chunk-2d224533").then(e.bind(null,"e03e"))}},{path:"/services",name:"services",component:function(){return e.e("chunk-2d22c114").then(e.bind(null,"f23e"))}},{path:"/workshops",name:"workshops",component:function(){return e.e("chunk-2d2136fa").then(e.bind(null,"ad56"))}},{path:"/team",name:"team",component:function(){return e.e("chunk-2d0a47fe").then(e.bind(null,"0767"))}},{path:"/book",name:"book",component:function(){return e.e("chunk-2d0e922d").then(e.bind(null,"8bf3"))}},{path:"/projects",name:"projects",component:function(){return e.e("chunk-2d2138f6").then(e.bind(null,"acca"))}}]}),y=e("2f62");d["a"].use(y["a"]);var x=new y["a"].Store({state:{},mutations:{},actions:{}}),C=e("9483");Object(C["a"])("".concat("/dlabdev/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),d["a"].config.productionTip=!1,new d["a"]({router:w,store:x,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.f6758647.js.map