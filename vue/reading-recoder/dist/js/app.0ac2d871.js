(function(e){function t(t){for(var n,a,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d393c40a"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var u=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(c);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"0355":function(e,t,o){"use strict";var n=o("e18a"),r=o.n(n);r.a},"123d":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("d3b7"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h2",[e._v(" Reading Recorder ")]),o("el-menu",{attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[o("el-menu-item",{attrs:{index:"1"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),o("el-menu-item",{attrs:{index:"2"}},[o("router-link",{attrs:{to:"/search"}},[e._v("Search")])],1),o("el-submenu",{attrs:{index:"3"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Support ")]},proxy:!0}])},[o("el-menu-item",{attrs:{index:"3-1"}},[o("a",{attrs:{href:"https://wings.msn.to/",target:"help"}},[e._v("Author")])]),o("el-menu-item",{attrs:{index:"3-2"}},[o("a",{attrs:{href:"https://www.sbcr.jp/",target:"help"}},[e._v("Publisher")])])],1)],1),o("router-view")],1)},i=[],a={name:"app"},s=a,l=(o("034f"),o("2877")),u=Object(l["a"])(s,r,i,!1,null,null,null),c=u.exports,f=o("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=o("8c4f"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"list"},[o("p",[e._v(" There are "+e._s(e.bookCount)+" books.")]),e._l(e.books,(function(e,t){return o("BookInfo",{key:e.isbn,attrs:{linkable:!0,book:e,index:t+1}})})),o("div",[o("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.bookCount,"page-size":3},on:{"current-change":e.onchange}})],1)],2)},b=[],p=o("2f62"),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"clearfix",class:{linkable:e.linkable},on:{click:e.onclick}},[o("div",{staticClass:"image"},[o("img",{attrs:{src:e.book.image}})]),o("div",{staticClass:"details"},[o("ul",[e.index?o("li",[e._v(e._s(e.index)+". ")]):e._e(),o("li",[e._v(" Title: "+e._s(e.book.title)+" ")]),o("li",[e._v(" Price: "+e._s(e.book.price)+" ")]),o("li",[e._v(" Writer: "+e._s(e.book.author))]),o("li",[e._v(" Publisher: "+e._s(e.book.publisher)+" ")]),o("li",[e._v(" Published: "+e._s(e.book.published)+" ")]),o("li",[o("a",{attrs:{href:e.book.url}},[e._v("Google Books Link")])])])])])},k=[],v=(o("a9e3"),o("5530")),g="updateCurrent",y="updateBook",_="deleteBook",w={name:"book-info",props:{index:{type:Number},linkable:{type:Boolean,default:!1},book:{type:Object}},methods:Object(v["a"])({},Object(p["b"])([g]),{onclick:function(){this.linkable&&(this[g](this.book),this.$router.push("/form"))}})},j=w,x=(o("cbfa"),Object(l["a"])(j,h,k,!1,null,"1fb8cc5c",null)),O=x.exports,B={name:"Home",data:function(){return{books:[]}},components:{BookInfo:O},computed:Object(p["c"])(["bookCount","getRangeByPage"]),methods:{onchange:function(e){this.books=this.getRangeByPage(e)}},mounted:function(){this.books=this.getRangeByPage(1)}},I=B,P=Object(l["a"])(I,m,b,!1,null,null,null),$=P.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"search"}},[o("el-form",{attrs:{inline:!0}},[o("el-form-item",{attrs:{label:"Keyword"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),o("el-form-item",{attrs:{label:"Title"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.title_book,callback:function(t){e.title_book=t},expression:"title_book"}})],1),o("el-form-item",{attrs:{label:"Author"}},[o("el-input",{attrs:{type:"text",size:"large"},model:{value:e.author_book,callback:function(t){e.author_book=t},expression:"author_book"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onclick}},[e._v("Search")])],1),e._v(" 検索ヒット件数:"+e._s(e.num_book)+" ")],1),o("hr"),e._l(e.books,(function(e,t){return o("BookInfo",{key:e.isbn,attrs:{linkable:!0,book:e,index:t+1}})}))],2)},C=[],E=(o("a4d3"),o("e01a"),o("d28b"),o("a15b"),o("ac1f"),o("3ca3"),o("5319"),o("ddb0"),{name:"book-search",components:{BookInfo:O},data:function(){return{keyword:"",title_book:"",author_book:"",num_book:0,books:[]}},methods:{onclick:function(){var e=this,t=this.keyword.replace(" ","+").replace("　","+").replace(",","+"),o=this.title_book?"+intitle:"+this.title_book:"",n=this.author_book?"+inauthor:"+this.author_book:"",r="https://www.googleapis.com/books/v1/volumes?q="+t+o+n;this.$http(r).then((function(e){return e.json()})).then((function(t){e.books=[],e.num_book=t.totalItems;var o=!0,n=!1,r=void 0;try{for(var i,a=t.items[Symbol.iterator]();!(o=(i=a.next()).done);o=!0){var s=i.value,l=s.volumeInfo.authors,u=s.saleInfo.listPrice,c=s.volumeInfo.imageLinks;e.books.push({id:s.id,title:s.volumeInfo.title,author:l?l.join(","):"",price:u?u.amount:"-",publisher:s.volumeInfo.publisher,published:s.volumeInfo.publishedDate,image:c?c.smallThumbnail:"",url:s.volumeInfo.infoLink})}}catch(f){n=!0,r=f}finally{try{o||null==a.return||a.return()}finally{if(n)throw r}}}))}}}),R=E,T=(o("0355"),Object(l["a"])(R,S,C,!1,null,"d5c2c7de",null)),A=T.exports,D=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"form"}},[o("BookInfo",{attrs:{book:e.book}}),o("hr"),o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"開始日"}},[o("el-date-picker",{attrs:{type:"date"},model:{value:e.form.read,callback:function(t){e.$set(e.form,"read",t)},expression:"form.read"}})],1),o("el-form-item",{attrs:{label:"感想",prop:"memo"}},[o("el-input",{attrs:{type:"textarea",size:"large"},model:{value:e.form.memo,callback:function(t){e.$set(e.form,"memo",t)},expression:"form.memo"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onsubmit}},[e._v("Register")]),o("el-button",{attrs:{type:"primary"},on:{click:e.ondelete}},[e._v("Delete")])],1)],1)],1)},z=[],L={name:"book-form",components:{BookInfo:O},data:function(){return{book:{},form:{read:new Date,memo:""},rules:{memo:[]}}},computed:Object(p["c"])(["current","getBookById"]),created:function(){this.current||this.$router.push("/"),this.book=Object.assign({},this.current)},mounted:function(){var e=this.getBookById(this.book.id);e&&(this.form.read=e.read,this.form.memo=e.memo)},methods:Object(v["a"])({},Object(p["b"])([y,g,_]),{onsubmit:function(){this[y](Object.assign({},this.book,this.form)),this[g](null),this.$notify({title:"Reading Recorder",message:this.$createElement("p",{style:"color: #009"},"Success!"),duration:2e3}),this.form.read=new Date,this.form.memo="",this.$router.push("/")},ondelete:function(){this[_](Object.assign({},this.book,this.form)),this[g](null),this.$notify({title:"Delete Data",message:this.$createElement("p",{style:"color: #009"},"Success!"),duration:2e3}),this.form.read=new Date,this.form.memo="",this.$router.push("/")}})},M=L,N=(o("8f53"),Object(l["a"])(M,D,z,!1,null,"15078870",null)),q=N.exports;n["default"].use(d["a"]);var H,F,J=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/search",name:"search",component:A},{path:"/form",name:"form",component:q},{path:"*",redirect:"/"}],G=new d["a"]({mode:"history",base:"/",routes:J}),K=G,W=(o("4de4"),o("7db0"),o("fb6a"),o("ade3")),Q=o("0e44");n["default"].use(p["a"]);var U=new p["a"].Store({strict:!0,state:{books:[],current:null},getters:{bookCount:function(e){return e.books.length},allBooks:function(e){return e.books},getRangeByPage:function(e){return function(t){var o=3;return e.books.slice((t-1)*o,(t-1)*o+o)}},getBookById:function(e){return function(t){return e.books.find((function(e){return e.id==t}))}},current:function(e){return e.current}},mutations:(H={},Object(W["a"])(H,g,(function(e,t){e.current=t})),Object(W["a"])(H,y,(function(e,t){var o=this.getters.getBookById(t.id);o?Object.assign(o,t):e.books.push(t)})),Object(W["a"])(H,_,(function(e,t){var o=this.getters.getBookById(t.id);o&&(e.books=e.books.filter((function(e){return e.id!==o.id})))})),H),actions:(F={},Object(W["a"])(F,g,(function(e,t){var o=e.commit;o(g,t)})),Object(W["a"])(F,y,(function(e,t){var o=e.commit;o(y,t)})),Object(W["a"])(F,_,(function(e,t){var o=e.commit;o(_,t)})),F),plugins:[Object(Q["a"])({key:"reading-recorder",storage:localStorage})],modules:{}}),V=o("5c96"),X=o.n(V),Y=(o("c69f"),o("c3ff")),Z=o.n(Y);n["default"].use(X.a,{locale:Z.a}),n["default"].config.productionTip=!1,n["default"].prototype.$http=function(e,t){return fetch(e,t)},new n["default"]({router:K,store:U,render:function(e){return e(c)}}).$mount("#app")},"7b50":function(e,t,o){},"85ec":function(e,t,o){},"8f53":function(e,t,o){"use strict";var n=o("7b50"),r=o.n(n);r.a},c69f:function(e,t,o){},cbfa:function(e,t,o){"use strict";var n=o("123d"),r=o.n(n);r.a},e18a:function(e,t,o){}});
//# sourceMappingURL=app.0ac2d871.js.map