webpackJsonp([1],{"6hPc":function(t,e){},"8bXV":function(t,e){},"9iJn":function(t,e){},B3yw:function(t,e){},BtD3:function(t,e,i){t.exports=i.p+"static/img/s-banner4.25b719c.jpg"},Fhh0:function(t,e,i){t.exports=i.p+"static/img/s-banner1.4893772.jpg"},IQxh:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={data:function(){return{}},props:{header:{type:Object}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header-wrap clearfix ",attrs:{id:"header"}},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:t.header.logo,alt:""}})]),t._v(" "),i("div",{staticClass:"header-text-box"},[t._v(t._s(t.header.text))]),t._v(" "),i("div",{staticClass:"author"},[t._v(t._s(t.header.author))]),t._v(" "),i("div",{staticClass:"background"},[i("img",{attrs:{src:t.header.bg,alt:""}})])])])},staticRenderFns:[]};var r=i("VU/8")(a,n,!1,function(t){i("RxoE")},"data-v-8ddf8ab4",null).exports,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-box"},[this._v(this._s(this.footer))])])},staticRenderFns:[]};var c=i("VU/8")({data:function(){return{footer:"Design by 1234567890-"}}},o,!1,function(t){i("6hPc")},"data-v-d3408210",null).exports,l=i("aozt"),d=i.n(l),u={name:"app",data:function(){return{index:"我的首页",about:"关于我",github:"我的github",life:"我的生活",say:"留言",header:{}}},components:{"v-header":r,"v-footer":c},mounted:function(){this.getHeaderList()},methods:{getHeaderList:function(){var t=this;d.a.get("http://localhost:8080/static/data.json").then(function(e){var i=e.data;t.header=i.header}).catch(function(t){alert("失败了"),console.log(t)})}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"app"},[i("v-header",{attrs:{header:t.header}}),t._v(" "),i("div",{staticClass:"tab"},[i("div",{staticClass:"tab-item"},[i("router-link",{attrs:{to:"/index"}},[t._v(t._s(t.index))])],1),t._v(" "),i("div",{staticClass:"tab-item"},[i("router-link",{attrs:{to:"/about"}},[t._v(t._s(t.about))])],1),t._v(" "),i("div",{staticClass:"tab-item"},[i("router-link",{attrs:{to:"/github"}},[t._v(t._s(t.github))])],1),t._v(" "),i("div",{staticClass:"tab-item"},[i("router-link",{attrs:{to:"/life"}},[t._v(t._s(t.life))])],1),t._v(" "),i("div",{staticClass:"tab-item"},[i("router-link",{attrs:{to:"/say"}},[t._v(t._s(t.say))])],1)]),t._v(" "),i("router-view"),t._v(" "),i("v-footer")],1)])},staticRenderFns:[]};var h=i("VU/8")(u,v,!1,function(t){i("B3yw")},"data-v-718f6b1e",null).exports,f=i("zO6J"),_={props:{slides:{type:Array,default:[]},inv:{type:Number,default:1e3}},data:function(){return{nowIndex:0,isShow:!0}},computed:{prevIndex:function(){return 0===this.nowIndex?this.slides.length-1:this.nowIndex-1},nextIndex:function(){return this.nowIndex===this.slides.length-1?0:this.nowIndex+1}},methods:{goto:function(t){var e=this;this.isShow=!1,setTimeout(function(){e.isShow=!0,e.nowIndex=t},10)},run:function(){var t=this;this.invId=setInterval(function(){t.goto(t.nextIndex)},this.inv)},clear:function(){clearInterval(this.invId)}},mounted:function(){this.run()}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-show",on:{mouseover:t.clear,mouseout:t.run}},[i("div",{staticClass:"slide-img"},[i("a",[i("transition",{attrs:{name:"slide-trans"}},[t.isShow?i("img",{attrs:{src:t.slides[t.nowIndex].src}}):t._e()]),t._v(" "),i("transition",{attrs:{name:"slide-trans-old"}},[t.isShow?t._e():i("img",{attrs:{src:t.slides[t.nowIndex].src}})])],1)]),t._v(" "),i("h2",[t._v(t._s(t.slides[t.nowIndex].title))]),t._v(" "),i("ul",{staticClass:"slide-pages"},[i("li",{on:{click:function(e){t.goto(t.prevIndex)}}},[t._v("<")]),t._v(" "),t._l(t.slides,function(e,s){return i("li",{on:{click:function(e){t.goto(s)}}},[i("a",{class:{on:s===t.nowIndex}},[t._v(t._s(s+1))])])}),t._v(" "),i("li",{on:{click:function(e){t.goto(t.nextIndex)}}},[t._v(">")])],2)])},staticRenderFns:[]};var m={data:function(){return{input:"",a:"点击查看文章",nowIndex:0,isShow:!0,invTime:2e3,fadeShow:[],searchBox:[{title:"关于我",path:"/about"},{title:"github",path:"/github"},{title:"我的生活",path:"/life"},{title:"留言板",path:"/say"}],article:[],slides:[{src:i("Fhh0"),title:"1111"},{src:i("WxxC"),title:"2222"},{src:i("htai"),title:"3333"},{src:i("BtD3"),title:"4444"},{src:i("qrt+"),title:"5555"}]}},components:{carousel:i("VU/8")(_,p,!1,function(t){i("paV6")},"data-v-6541f66a",null).exports},mounted:function(){this.getIndexList();for(var t=0;t<this.article.length;t++)this.$set(this.fadeShow,t,!1)},methods:{getIndexList:function(){var t=this;d.a.get("http://localhost:8080/static/data.json").then(function(e){var i=e.data;t.article=i.article,console.log(t.article)}).catch(function(t){alert("失败了"),console.log(t)})},showDetail:function(t){this.$set(this.fadeShow,t,!0)},closeDetail:function(){for(var t=0;t<this.article.length;t++)this.$set(this.fadeShow,t,!1)}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"index"}},[i("div",{staticClass:"banner",attrs:{id:"banner"}},[i("carousel",{attrs:{slides:t.slides,inv:t.invTime}}),t._v(" "),i("div",{staticClass:"search"},[i("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("搜索")]),t._v(" "),i("ul",t._l(t.searchBox,function(e,s){return i("li",{staticClass:"search-box"},[i("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1)}))],1)],1),t._v(" "),i("el-breadcrumb",{staticClass:"article-header",attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",[t._v("推荐文章")])],1),t._v(" "),i("div",{staticClass:"id"},[i("ul",{staticClass:"article"},t._l(t.article,function(e,s){return i("li",{staticClass:"article-item",on:{mouseover:function(e){t.showDetail(s)},mouseout:t.closeDetail}},[i("div",[i("img",{attrs:{src:t.article[s].src,alt:""}})]),t._v(" "),i("p",{staticClass:"article-title"},[t._v(t._s(t.article[s].title))]),t._v(" "),i("p",{staticClass:"article-introduce"},[t._v(t._s(t.article[s].introduce))]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.fadeShow[s]?i("div",{staticClass:"fadeShow"},[i("p",[t._v(t._s(t.a))])]):t._e()])],1)}))])],1)},staticRenderFns:[]};var b=i("VU/8")(m,x,!1,function(t){i("8bXV")},"data-v-165fae0a",null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("i am about")])},staticRenderFns:[]};var C=i("VU/8")({},g,!1,function(t){i("IQxh")},null,null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("i am github")])},staticRenderFns:[]};var y=i("VU/8")({},w,!1,function(t){i("dgoz")},null,null).exports,I={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("i am life")])},staticRenderFns:[]};var U=i("VU/8")({},I,!1,function(t){i("9iJn")},null,null).exports,k={data:function(){return{text:"",day:"",time:"",arr:[{text:"哇哇哇哇哇哇哇哇哇哇哇哇哇哇",day:"2018-03-14 TUE",time:"12:00:00"}],name:"不开心就吃冰棍"}},methods:{zeroPadding:function(t,e){for(var i="",s=0;s<e;s++)i+="0";return(i+t).slice(-e)},tabs:function(){if(""===this.text)alert("请输入");else{var t=new Date;this.day=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+["SUN","MON","TUE","WED","THU","FRI","SAT"][t.getDay()],this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.arr.push({text:this.text,day:this.day,time:this.time}),this.text=""}},dele:function(t){this.arr.splice(t,1)}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"say clearfix"},[i("el-breadcrumb",{staticClass:"article-header",attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/say"}}},[t._v("留言")]),t._v(" "),i("el-breadcrumb-item",[t._v("留言板")])],1),t._v(" "),i("div",{staticClass:"form"},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),i("el-button",{attrs:{type:"success"},on:{click:t.tabs}},[t._v("点击评论")])],1),t._v(" "),i("div",{staticClass:"text"},[t._m(0),t._v(" "),t._l(t.arr,function(e,s){return i("div",{staticClass:"text-child"},[i("div",{staticClass:"username"},[t._v(t._s(t.name))]),t._v(" "),i("div",{staticClass:"text-day"},[t._v(t._s(e.day))]),t._v(" "),i("div",{staticClass:"text-time"},[t._v(t._s(e.time))]),t._v(" "),i("div",{staticClass:"text-say"},[t._v(t._s(e.text))]),t._v(" "),i("div",{staticClass:"text-dele",on:{click:function(e){t.dele(s)}}},[i("i",{staticClass:"el-icon-delete"})])])})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-top"},[e("div",{staticClass:"text-text"},[this._v("\n        评论\n      ")]),this._v(" "),e("div",{staticClass:"text-top-line"})])}]};var S=i("VU/8")(k,E,!1,function(t){i("pbUY")},"data-v-686aa2f0",null).exports,$=i("xUsN"),F=i.n($);i("NuO4");s.default.prototype.$axios=d.a,s.default.use(f.a),s.default.use(F.a),s.default.config.productionTip=!1;var V=[{name:"index",path:"/index",component:b},{name:"about",path:"/about",component:C},{name:"github",path:"/github",component:y},{name:"life",path:"/life",component:U},{name:"say",path:"/say",component:S}],R=new f.a({routes:V});new s.default({el:"#app",router:R,render:function(t){return t(h)}}),R.push("./index")},NuO4:function(t,e){},RxoE:function(t,e){},WxxC:function(t,e,i){t.exports=i.p+"static/img/s-banner2.fc7d13c.jpg"},dgoz:function(t,e){},htai:function(t,e,i){t.exports=i.p+"static/img/s-banner3.db99f7e.jpg"},paV6:function(t,e){},pbUY:function(t,e){},"qrt+":function(t,e,i){t.exports=i.p+"static/img/s-banner5.b9c0de1.jpg"}},["NHnr"]);
//# sourceMappingURL=app.56b087b302d02b106fd1.js.map