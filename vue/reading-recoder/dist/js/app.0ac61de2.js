(function(e){function t(t){for(var r,a,l=t[0],s=t[1],u=t[2],c=0,m=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,a=1;a<o.length;a++){var s=o[a];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},n={app:0},i=[];function a(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"11fc83ae"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=a(e);var u=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(c);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,o[1](u)}n[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var f=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("85ec"),n=o.n(r);n.a},"05a5":function(e,t,o){},1176:function(e,t,o){},"33b5":function(e,t,o){"use strict";var r=o("ad0d"),n=o.n(r);n.a},"56d7":function(e,t,o){"use strict";o.r(t);o("d3b7"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h2",[e._v(" Reading Recorder ")]),o("el-menu",{attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[o("el-menu-item",{attrs:{index:"1"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),o("el-menu-item",{attrs:{index:"2"}},[o("router-link",{attrs:{to:"/search"}},[e._v("Search")])],1),o("el-menu-item",{attrs:{index:"3"}},[o("router-link",{attrs:{to:"/make"}},[e._v(" Make ")])],1),o("el-submenu",{attrs:{index:"4"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Support ")]},proxy:!0}])},[o("el-menu-item",{attrs:{index:"4-1"}},[o("a",{attrs:{href:"https://wings.msn.to/",target:"help"}},[e._v("Author")])]),o("el-menu-item",{attrs:{index:"4-2"}},[o("a",{attrs:{href:"https://www.sbcr.jp/",target:"help"}},[e._v("Publisher")])])],1)],1),o("router-view")],1)},i=[],a={name:"app"},l=a,s=(o("034f"),o("2877")),u=Object(s["a"])(l,n,i,!1,null,null,null),c=u.exports,f=o("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"list"},[o("p",[e._v(" There are "+e._s(e.bookCount)+" books.")]),e._l(e.books,(function(e,t){return o("BookInfo",{key:e.isbn,attrs:{linkable:!0,book:e,index:t+1}})})),o("div",[o("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.bookCount,"page-size":3},on:{"current-change":e.onchange}})],1)],2)},d=[],b=o("2f62"),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"clearfix",class:{linkable:e.linkable},on:{click:e.onclick}},["pdf"===e.book.imagetype?o("div",[o("div",{staticClass:"image"},[o("iframe",{attrs:{src:e.book.image,width:"200",height:"200"}})])]):o("div",[o("div",{staticClass:"image"},[o("img",{attrs:{src:e.book.image}})])]),o("div",{staticClass:"details"},[o("ul",[e.index?o("li",[e._v(e._s(e.index)+". ")]):e._e(),o("li",[e._v(" Title: "+e._s(e.book.title)+" ")]),o("li",[e._v(" Price: "+e._s(e.book.price)+" ")]),o("li",[e._v(" Writer: "+e._s(e.book.author))]),o("li",[e._v(" Publisher: "+e._s(e.book.publisher)+" ")]),o("li",[e._v(" Published: "+e._s(e.book.published)+" ")]),o("li",[e._v(" imagetype: "+e._s(e.book.imagetype)+" ")]),o("li",[o("a",{attrs:{href:e.book.url}},[e._v("Link")])])])])])},k=[],v=(o("a9e3"),o("5530")),g="updateCurrent",y="updateBook",_="deleteBook",x={name:"book-info",props:{index:{type:Number},linkable:{type:Boolean,default:!1},book:{type:Object}},methods:Object(v["a"])({},Object(b["b"])([g]),{onclick:function(){this.linkable&&(this[g](this.book),this.$router.push("/form"))}})},w=x,j=(o("33b5"),Object(s["a"])(w,h,k,!1,null,"1d0fdf41",null)),O=j.exports,B={name:"Home",data:function(){return{books:[]}},components:{BookInfo:O},computed:Object(b["c"])(["bookCount","getRangeByPage"]),methods:{onchange:function(e){this.books=this.getRangeByPage(e)}},mounted:function(){this.books=this.getRangeByPage(1)}},P=B,$=Object(s["a"])(P,p,d,!1,null,null,null),I=$.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"search"}},[o("el-form",{attrs:{inline:!0}},[o("el-form-item",{attrs:{label:"Keyword"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),o("el-form-item",{attrs:{label:"Title"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.title_book,callback:function(t){e.title_book=t},expression:"title_book"}})],1),o("el-form-item",{attrs:{label:"Author"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.author_book,callback:function(t){e.author_book=t},expression:"author_book"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onclick}},[e._v("Search")])],1),e._v(" 検索ヒット件数:"+e._s(e.num_book)+" ")],1),o("hr"),e._l(e.books,(function(e,t){return o("BookInfo",{key:e.isbn,attrs:{linkable:!0,book:e,index:t+1}})}))],2)},C=[],z=(o("a4d3"),o("e01a"),o("d28b"),o("a15b"),o("ac1f"),o("3ca3"),o("5319"),o("ddb0"),{name:"book-search",components:{BookInfo:O},data:function(){return{keyword:"",title_book:"",author_book:"",num_book:0,books:[]}},methods:{onclick:function(){var e=this,t=this.keyword.replace(" ","+").replace("　","+").replace(",","+"),o=this.title_book?"+intitle:"+this.title_book:"",r=this.author_book?"+inauthor:"+this.author_book:"",n="https://www.googleapis.com/books/v1/volumes?q="+t+o+r;this.$http(n).then((function(e){return e.json()})).then((function(t){e.books=[],e.num_book=t.totalItems;var o=!0,r=!1,n=void 0;try{for(var i,a=t.items[Symbol.iterator]();!(o=(i=a.next()).done);o=!0){var l=i.value,s=l.volumeInfo.authors,u=l.saleInfo.listPrice,c=l.volumeInfo.imageLinks;e.books.push({id:l.id,title:l.volumeInfo.title,author:s?s.join(","):"",price:u?u.amount:"-",publisher:l.volumeInfo.publisher,published:l.volumeInfo.publishedDate,image:c?c.smallThumbnail:"",imagetype:"png",url:l.volumeInfo.infoLink})}}catch(f){r=!0,n=f}finally{try{o||null==a.return||a.return()}finally{if(r)throw n}}}))}}}),E=z,T=(o("8c34"),Object(s["a"])(E,S,C,!1,null,"29bf1fe4",null)),R=T.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"form"}},[o("BookInfo",{attrs:{book:e.book}}),o("hr"),o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"開始日"}},[o("el-date-picker",{attrs:{type:"date"},model:{value:e.form.read,callback:function(t){e.$set(e.form,"read",t)},expression:"form.read"}})],1),o("div",[o("div",{domProps:{innerHTML:e._s(e.memomark)}})]),o("el-form-item",{attrs:{label:"メモ",prop:"memo"}},[o("el-input",{attrs:{type:"textarea",size:"large"},model:{value:e.form.memo,callback:function(t){e.$set(e.form,"memo",t)},expression:"form.memo"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onsubmit}},[e._v("Register")]),o("el-button",{attrs:{type:"primary"},on:{click:e.ondelete}},[e._v("Delete")])],1)],1)],1)},D=[],L=o("e0c1"),M=o.n(L),H={name:"book-form",components:{BookInfo:O},data:function(){return{book:{},form:{read:new Date,memo:""},rules:{memo:[]}}},computed:Object(v["a"])({},Object(b["c"])(["current","getBookById"]),{memomark:function(){return M()(this.form.memo)}}),created:function(){this.current||this.$router.push("/"),this.book=Object.assign({},this.current)},mounted:function(){var e=this.getBookById(this.book.id);e&&(this.form.read=e.read,this.form.memo=e.memo)},methods:Object(v["a"])({},Object(b["b"])([y,g,_]),{onsubmit:function(){this[y](Object.assign({},this.book,this.form)),this[g](null),this.$notify({title:"Reading Recorder",message:this.$createElement("p",{style:"color: #009"},"Success!"),duration:2e3}),this.form.read=new Date,this.form.memo="",this.$router.push("/")},ondelete:function(){this[_](Object.assign({},this.book,this.form)),this[g](null),this.$notify({title:"Delete Data",message:this.$createElement("p",{style:"color: #009"},"Success!"),duration:2e3}),this.form.read=new Date,this.form.memo="",this.$router.push("/")}})},N=H,q=(o("e63d"),Object(s["a"])(N,A,D,!1,null,"75dc8754",null)),F=q.exports,J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"make"}},[o("el-form",{attrs:{inline:!0}},[o("el-form-item",{attrs:{label:"Title"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),o("el-form-item",{attrs:{label:"Price"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),o("el-form-item",{attrs:{label:"Writer"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.writer,callback:function(t){e.writer=t},expression:"writer"}})],1),o("el-form-item",{attrs:{label:"Publisher"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.publisher,callback:function(t){e.publisher=t},expression:"publisher"}})],1),o("el-form-item",{attrs:{label:"Published"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.published,callback:function(t){e.published=t},expression:"published"}})],1),o("el-form-item",{attrs:{label:"Url"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onclick}},[e._v("Register")])],1)],1),o("div")],1)},W=[],K={name:"book-make",components:{},data:function(){return{title:"",price:"",writer:"",publisher:"",published:"",url:"",imagetype:"pdf"}},methods:Object(v["a"])({},Object(b["b"])([g]),{onclick:function(){var e={id:this.url,title:this.title,author:this.author,price:this.price?this.price:"-",publisher:this.publisher,published:this.published,image:this.url,imagetype:this.imagetype,url:this.url};this[g](e),this.$router.push("/form")}})},U=K,G=(o("5c0f"),Object(s["a"])(U,J,W,!1,null,"172b9dbf",null)),Q=G.exports;r["default"].use(m["a"]);var V,X,Y=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/search",name:"search",component:R},{path:"/form",name:"form",component:F},{path:"/make",name:"make",component:Q},{path:"*",redirect:"/"}],Z=new m["a"]({mode:"history",base:"/",routes:Y}),ee=Z,te=(o("4de4"),o("7db0"),o("fb6a"),o("ade3")),oe=o("0e44");r["default"].use(b["a"]);var re=new b["a"].Store({strict:!0,state:{books:[],current:null},getters:{bookCount:function(e){return e.books.length},allBooks:function(e){return e.books},getRangeByPage:function(e){return function(t){var o=3;return e.books.slice((t-1)*o,(t-1)*o+o)}},getBookById:function(e){return function(t){return e.books.find((function(e){return e.id==t}))}},current:function(e){return e.current}},mutations:(V={},Object(te["a"])(V,g,(function(e,t){e.current=t})),Object(te["a"])(V,y,(function(e,t){var o=this.getters.getBookById(t.id);o?Object.assign(o,t):e.books.push(t)})),Object(te["a"])(V,_,(function(e,t){var o=this.getters.getBookById(t.id);o&&(e.books=e.books.filter((function(e){return e.id!==o.id})))})),V),actions:(X={},Object(te["a"])(X,g,(function(e,t){var o=e.commit;o(g,t)})),Object(te["a"])(X,y,(function(e,t){var o=e.commit;o(y,t)})),Object(te["a"])(X,_,(function(e,t){var o=e.commit;o(_,t)})),X),plugins:[Object(oe["a"])({key:"reading-recorder",storage:localStorage})],modules:{}}),ne=o("5c96"),ie=o.n(ne),ae=(o("c69f"),o("c3ff")),le=o.n(ae);r["default"].use(ie.a,{locale:le.a}),r["default"].config.productionTip=!1,r["default"].prototype.$http=function(e,t){return fetch(e,t)},new r["default"]({router:ee,store:re,render:function(e){return e(c)}}).$mount("#app")},"5c0f":function(e,t,o){"use strict";var r=o("1176"),n=o.n(r);n.a},"85ec":function(e,t,o){},"8c34":function(e,t,o){"use strict";var r=o("05a5"),n=o.n(r);n.a},ad0d:function(e,t,o){},ae87:function(e,t,o){},c69f:function(e,t,o){},e63d:function(e,t,o){"use strict";var r=o("ae87"),n=o.n(r);n.a}});
//# sourceMappingURL=app.0ac61de2.js.map