(function(t){function e(e){for(var n,a,s=e[0],u=e[1],c=e[2],p=0,h=[];p<s.length;p++)a=s[p],i[a]&&h.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/assembly/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"08ea":function(t,e,r){},"0e9a":function(t,e,r){"use strict";var n=r("72fc"),i=r.n(n);i.a},"0f26":function(t,e,r){},"25c1":function(t,e,r){"use strict";var n=r("0f26"),i=r.n(n);i.a},6916:function(t,e,r){"use strict";var n=r("08ea"),i=r.n(n);i.a},"72fc":function(t,e,r){},a8be:function(t,e,r){"use strict";var n=r("af5b"),i=r.n(n);i.a},af5b:function(t,e,r){},bb93:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),i=r("bb71");r("da64");n["default"].use(i["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-content",[r("router-view")],1)],1)},a=[],s=r("d225"),u=r("308d"),c=r("6bb5"),l=r("4e2b"),p=r("9ab4"),h=r("60a3"),f=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(h["c"]);f=p["a"]([h["a"]],f);var d=f,v=d,g=(r("cf25"),r("2877")),b=r("6544"),m=r.n(b),y=r("7496"),j=r("549c"),w=Object(g["a"])(v,o,a,!1,null,null,null),k=w.exports;m()(w,{VApp:y["a"],VContent:j["a"]});var O=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{id:"app"}},[r("a",{staticClass:"github",attrs:{href:"https://github.com/jsmith/assembly",target:"__blank"}},[t._v("\n    GitHub\n  ")]),r("div",{staticClass:"banner"},[t._v("JACOBS TEXT MAGIC")]),r("div",{staticClass:"row grow"},[r("editor",{staticClass:"input grow col",attrs:{"highlight-line":t.highlightLine,outline:"",autofocus:"",share:""},on:{share:t.copyUrl},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),r("div",{staticClass:"col grow"},[r("editor",{staticClass:"output",style:t.editorStyle,attrs:{outline:"",value:t.output,readonly:""}}),r("div",{staticClass:"dragger-wrapper"},[r("drag-element",{staticClass:"dragger",attrs:{cursor:"ns-resize"},on:{move:t.resizeRightSide}})],1),r("debugger",{style:t.debugStyle,attrs:{program:t.program,debugging:t.debugging},on:{"update:debugging":function(e){t.debugging=e},compile:t.parse,debug:t.debug}})],1)],1),r("v-snackbar",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("Copied URL to clipboard.")])],1)},C=[],L=(r("386d"),r("b0b4")),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor"},[r("div",{ref:"backdrop",staticClass:"backdrop"},[r("div",{staticClass:"highlights",domProps:{innerHTML:t._s(t.html)}})]),r("textarea",t._b({ref:"textarea",staticClass:"textarea",attrs:{"no-resize":""},domProps:{value:t.value},on:{input:t.input,keydown:t.keydown,scroll:t.handleScroll}},"textarea",t.$attrs,!1)),t.share?r("icon",{staticClass:"icon",attrs:{icon:"share",tooltip:"Copy URL"},on:{click:t.appendCb}}):t._e()],1)},E=[],$=(r("c5f6"),r("75fc")),S=(r("28a5"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-tooltip",{attrs:{right:t.right,left:t.left,top:t.top,bottom:t.bottom,"z-index":"100"}},[r("template",{slot:"activator"},[r("v-btn",t._g(t._b({staticClass:"button",attrs:{icon:""}},"v-btn",t.$attrs,!1),t.$listeners),[r("v-icon",{attrs:{color:"#003da7"}},[t._v(t._s(t.icon))])],1)],1),r("span",[t._v(t._s(t.tooltip))])],2)}),M=[],P=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(h["c"]);p["a"]([Object(h["b"])({type:String,required:!0})],P.prototype,"tooltip",void 0),p["a"]([Object(h["b"])({type:String,required:!0})],P.prototype,"icon",void 0),p["a"]([Object(h["b"])({type:Boolean,default:!1})],P.prototype,"right",void 0),p["a"]([Object(h["b"])({type:Boolean,default:!1})],P.prototype,"left",void 0),p["a"]([Object(h["b"])({type:Boolean,default:!0})],P.prototype,"top",void 0),p["a"]([Object(h["b"])({type:Boolean,default:!1})],P.prototype,"bottom",void 0),P=p["a"]([h["a"]],P);var D=P,T=D,U=(r("6916"),r("8336")),z=r("132d"),A=r("3a2f"),B=Object(g["a"])(T,S,M,!1,null,"104f1557",null),R=B.exports;m()(B,{VBtn:U["a"],VIcon:z["a"],VTooltip:A["a"]});var q=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(L["a"])(e,[{key:"input",value:function(t){this.$emit("input",t.target.value)}},{key:"keydown",value:function(t){9===t.which&&(t.preventDefault(),this.$emit("input",this.value+"    "))}},{key:"appendCb",value:function(t){this.share&&this.$emit("share",t)}},{key:"handleScroll",value:function(){this.$refs.backdrop.scrollTop=this.$refs.textarea.scrollTop,this.$refs.backdrop.scrollLeft=this.$refs.textarea.scrollLeft}},{key:"lines",get:function(){return this.value.split("\n")}},{key:"html",get:function(){var t;if(void 0===this.highlightLine)t=this.value;else{var e=this.lines.slice(0,this.highlightLine),r=this.lines.slice(this.highlightLine+1);t=[].concat(Object($["a"])(e),["<mark>".concat(this.lines[this.highlightLine],"</mark>")],Object($["a"])(r)).join("\n")}return t}}]),e}(h["c"]);p["a"]([Object(h["b"])({type:String,required:!0})],q.prototype,"value",void 0),p["a"]([Object(h["b"])(Boolean)],q.prototype,"share",void 0),p["a"]([Object(h["b"])({type:Number,required:!1})],q.prototype,"highlightLine",void 0),q=p["a"]([Object(h["a"])({components:{Icon:R}})],q);var H=q,V=H,I=(r("0e9a"),Object(g["a"])(V,_,E,!1,null,"e86f52f4",null)),J=I.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"debugger"},[r("div",{staticClass:"toolbar"},[r("icon",{staticStyle:{"margin-left":"-18px"},attrs:{tooltip:"Compile To Binary",icon:"build",disabled:t.debugging},on:{click:function(e){return t.$emit("compile")}}}),r("icon",{attrs:{tooltip:"Start Debugging",icon:"bug_report",disabled:t.debugging},on:{click:function(e){return t.$emit("debug")}}}),r("icon",{attrs:{tooltip:"Stop Debugging",icon:"stop",disabled:!t.debugging},on:{click:t.stop}}),r("icon",{attrs:{tooltip:"Next Line",disabled:!t.debugging,icon:"arrow_forward"},on:{click:t.nextLine}})],1),t.debugging?r("vue-json-pretty",{ref:"pretty",staticClass:"json",staticStyle:{height:"calc(100% - 48px)"},attrs:{deep:1,data:t.programData}}):t._e()],1)},Y=[],G=(r("ac6a"),r("5176")),N=r.n(G),Z=(r("96cf"),r("5d73")),K=r.n(Z),F=(r("a481"),r("a4bb")),Q=r.n(F),W=r("e814"),tt=r.n(W),et=r("768b"),rt=(r("4917"),r("6b54"),r("3b2b"),r("6c7b"),regeneratorRuntime.mark(Lt)),nt=function(){return{registers:Array(Math.pow(2,4)).fill(0),memory:Array(Math.pow(2,8)).fill(0),counter:0,time:0,out:[]}},it=nt(),ot=/^([0-9a-zA-Z]+)(.*?)$/,at=function(t){return Object($["a"])(Array(t).keys())},st="([a-zA-Z0-9_]+)",ut="^#define +".concat(st," +").concat(st,"$"),ct=function(t){var e=[];return at(t.registers||0).forEach(function(){e.push("R([0-9]+)")}),t.immediate&&e.push("([0-9]+)"),new RegExp("^".concat(e.join(" +"),"$"))},lt=function(t,e){it.registers[t]=it.memory[e]},pt=function(t,e){it.memory[e]=it.registers[t]},ht=function(t,e){it.memory[it.registers[t]]=it.registers[e]},ft=function(t,e){it.registers[t]=e},dt=function(t,e,r){it.registers[t]=it.registers[e]+it.registers[r]},vt=function(t,e,r){it.registers[t]=it.registers[e]-it.registers[r]},gt=function(t,e){0===it.registers[t]&&(it.counter=e)},bt=function(){return!0},mt=function(t,e,r){it.registers[t]=it.registers[e]*it.registers[r]},yt=function(t,e){it.registers[t]=it.memory[it.registers[e]]},jt=function(t){it.out[it.time]=t},wt={mov1:[{registers:1,immediate:!0},lt],mov2:[{registers:1,immediate:!0},pt],save:[{registers:2},ht],set:[{registers:1,immediate:!0},ft],add:[{registers:3},dt],subt:[{registers:3},vt],jz:[{registers:1,immediate:!0},gt],halt:[{},bt],mul:[{registers:3},mt],load:[{registers:2},yt],readm:[{immediate:!0},jt]},kt={mov1:0,mov2:1,save:2,set:3,add:4,subt:5,jz:6,halt:15,mul:8,load:10,readm:7},Ot=function(t,e){if(t>=Math.pow(16,e))throw Error("Unable to convert ".concat(t," to HEX as it is too big"));var r=t.toString(16);while(r.length<e)r="0"+r;return r},xt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t.trim();var r=t.match(ut);if(r)return e[r[1]]=r[2],null;if(t=t.split("#")[0].trim(),!t)return null;for(var n=Q()(e),i=0;i<n.length;i++){var o=n[i];t=t.replace(new RegExp("\\b".concat(o,"\\b"),"g"),e[o])}var a=t.match(ot);if(!a)throw Error("Unable to parse instruction name for line: ".concat(t));var s=a[1];if(t=a[2].trim(),!(s in wt))throw Error("Unknown instruction: ".concat(s));var u=s,c=kt[u];if(c>15)throw Error("Invalid instruction number: ".concat(c));var l=kt[u]<<12,p=wt[u],h=Object(et["a"])(p,2),f=h[0],d=h[1],v=f.registers,g=void 0===v?0:v,b=f.immediate,m=void 0!==b&&b,y=ct(f);if(a=t.match(y),null===a)throw Error('Unable to parse arguments for "'.concat(s,'": "').concat(t,'"'));var j=a.slice(1).map(function(t){return tt()(t,10)}),w=!0,k=!1,O=void 0;try{for(var x,C=K()(at(g));!(w=(x=C.next()).done);w=!0){var L=x.value;l+=j[L]<<4*(2-L)}}catch(E){k=!0,O=E}finally{try{w||null==C.return||C.return()}finally{if(k)throw O}}m&&(l+=j[j.length-1]);var _=Ot(l,4).toUpperCase();return{evaluate:d,args:j,hex:_}},Ct=function(t){var e=[],r={},n={};return t.split("\n").map(function(t){return xt(t,n)}).forEach(function(t,n){t&&(r[e.length]=n,e.push(t))}),{instructions:e,sourceMap:r}};function Lt(t){var e,r,n,i;return regeneratorRuntime.wrap(function(o){while(1)switch(o.prev=o.next){case 0:N()(it,nt());case 1:return void(o.next=4);case 4:if(!(it.counter>=t.length)){o.next=6;break}return o.abrupt("break",15);case 6:if(e=t[it.counter],it.time++,it.counter++,r=e.evaluate,n=e.args,i=r.apply(void 0,Object($["a"])(n)),!i){o.next=13;break}return o.abrupt("break",15);case 13:o.next=1;break;case 15:case"end":return o.stop()}},rt,this)}var _t=r("d538"),Et=r.n(_t),$t=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.programData=it,t}return Object(l["a"])(e,t),Object(L["a"])(e,[{key:"nextLine",value:function(){if(this.program){var t=this.program.next().done,e=this.$refs.pretty;e&&e.$children.forEach(function(t){return t.$forceUpdate()}),t&&this.stop()}}},{key:"stop",value:function(){this.$emit("update:debugging",!1)}},{key:"start",value:function(){this.debugging&&this.nextLine()}}]),e}(h["c"]);p["a"]([Object(h["b"])({required:!1})],$t.prototype,"program",void 0),p["a"]([Object(h["b"])({type:Boolean,required:!0})],$t.prototype,"debugging",void 0),p["a"]([Object(h["d"])("debugging")],$t.prototype,"start",null),$t=p["a"]([Object(h["a"])({components:{VueJsonPretty:Et.a,Icon:R}})],$t);var St=$t,Mt=St,Pt=(r("a8be"),Object(g["a"])(Mt,X,Y,!1,null,"04947b14",null)),Dt=Pt.exports,Tt=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.previous=null,t.moving=!1,t.in=!1,t.mousemoveListener=function(){return{}},t}return Object(l["a"])(e,t),Object(L["a"])(e,[{key:"move",value:function(t){this.$emit("move",t)}},{key:"render",value:function(t){return t(this.tag,{class:"draggable",on:{mousedown:this.addListeners,mouseup:this.removeListeners,mouseenter:this.onHover,mouseleave:this.afterHover,click:function(t){return t.stopPropagation()}}},this.$slots.default)}},{key:"showCursor",value:function(){document.documentElement&&(document.documentElement.style.cursor=this.cursor)}},{key:"resetCursor",value:function(){document.documentElement&&(document.documentElement.style.cursor="auto")}},{key:"addListeners",value:function(t){for(var e=this,r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];1===t.which&&(this.prevent(t),this.showCursor(),this.moving=!0,this.previous={x:t.clientX,y:t.clientY},this.mousemoveListener=function(t){return e.startMove.apply(e,[t].concat(n))},window.addEventListener("mousemove",this.mousemoveListener),window.addEventListener("mouseup",this.removeListeners))}},{key:"removeListeners",value:function(t){t&&this.prevent(t),this.resetCursor(),this.previous=null,this.moving=!1,window.removeEventListener("mousemove",this.mousemoveListener),window.removeEventListener("mouseup",this.removeListeners),this.mousemoveListener=function(){return{}},this.afterHover()}},{key:"startMove",value:function(t){this.previous?(this.prevent(t),this.previous={x:t.clientX,y:t.clientY},this.$emit("move",t)):this.removeListeners()}},{key:"prevent",value:function(t){t&&t.preventDefault&&t.preventDefault(),t&&t.stopPropagation&&t.stopPropagation()}},{key:"onHover",value:function(){this.moving||(this.in=!0,this.showCursor())}},{key:"afterHover",value:function(){this.moving||(this.in=!1,this.resetCursor())}}]),e}(h["c"]);p["a"]([Object(h["b"])({type:String,default:"div"})],Tt.prototype,"tag",void 0),p["a"]([Object(h["b"])({type:String,default:"auto"})],Tt.prototype,"cursor",void 0),Tt=p["a"]([h["a"]],Tt);var Ut=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.input="",t.output="",t.show=!1,t.offset=0,t.debugging=!1,t.program=null,t.sourceMap=null,t}return Object(l["a"])(e,t),Object(L["a"])(e,[{key:"mounted",value:function(){window.addEventListener("keydown",this.keydown);var t=this.$route.query.text;t&&"string"===typeof t&&(this.input=t)}},{key:"destroyed",value:function(){window.removeEventListener("keydown",this.keydown)}},{key:"keydown",value:function(t){83===t.which&&t.ctrlKey&&(t.preventDefault(),this.parse())}},{key:"parse",value:function(){try{var t=Ct(this.input),e=t.instructions,r=t.sourceMap;return this.sourceMap=r,this.output=e.map(function(t){var e=t.hex;return e}).join("\n"),e}catch(n){return this.output=n.message,null}}},{key:"debug",value:function(){var t=this.parse();t&&(this.program=Lt(t),this.debugging=!0)}},{key:"copyUrl",value:function(){var t=document.createElement("a"),e=this.input?{text:this.input}:{};t.href=this.$router.resolve({path:this.$route.path,query:e}).href;var r=t.protocol+"//"+t.host+t.pathname+t.search+t.hash,n=document.createElement("textarea");n.value=r,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.show=!0}},{key:"resizeRightSide",value:function(t){this.offset+=t.movementY}},{key:"editorStyle",get:function(){return{height:"calc(50% + ".concat(this.offset,"px)")}}},{key:"debugStyle",get:function(){return{height:"calc(50% - ".concat(this.offset,"px)")}}},{key:"highlightLine",get:function(){if(this.debugging&&this.sourceMap)return this.sourceMap[it.counter]}}]),e}(h["c"]);Ut=p["a"]([Object(h["a"])({components:{Editor:J,Debugger:Dt,DragElement:Tt}})],Ut);var zt=Ut,At=zt,Bt=(r("25c1"),r("2db4")),Rt=Object(g["a"])(At,x,C,!1,null,"32093086",null),qt=Rt.exports;m()(Rt,{VSnackbar:Bt["a"]});var Ht=[{path:"/",component:qt}],Vt=new O["a"]({routes:Ht});n["default"].config.productionTip=!1,n["default"].use(O["a"]),new n["default"]({router:Vt,render:function(t){return t(k)}}).$mount("#app")},cf25:function(t,e,r){"use strict";var n=r("bb93"),i=r.n(n);i.a}});
//# sourceMappingURL=app.888427a1.js.map