webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={name:"App",data:function(){return{clientHeight:document.documentElement.clientHeight,clientWidth:document.documentElement.clientWidth}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:{height:this.clientHeight+"px",width:this.clientWidth+"px"},attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")(s,o,!1,function(t){n("uiKk")},null,null).exports,l=n("/ocq"),c={name:"HelloWorld",data:function(){return{message:"",websocket:""}},created:function(){this.initWebSocket()},methods:{initWebSocket:function(){this.websocket=new WebSocket("ws://192.168.3.52:8900/ws"),this.websocket.onopen=this.handleOpen,this.websocket.onmessage=this.handleMessage,this.websocket.onerror=this.handleError,this.websocket.onclose=this.handleClose},handleOpen:function(){console.log("与服务器连接成功....")},handleMessage:function(t){console.log(t);var e=document.getElementById("content");e.innerHTML=e.innerHTML+'<p style="text-align: left">'+t.data+"</p>"},handleError:function(){console.log("连接错误")},handleClose:function(){console.log("连接关闭")},handleSendMessage:function(){var t=document.getElementById("content");t.innerHTML=t.innerHTML+'<p style="text-align: right">'+this.message+":[我]</p>",this.websocket.send(this.message)},changePage:function(){this.$router.push({path:"/index"})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticStyle:{margin:"20px 10px 0 10px"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("el-button",{staticStyle:{"margin-top":"10px"},on:{click:t.handleSendMessage}},[t._v("发送")])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"text-align":"left","padding-left":"10px","padding-right":"10px"}},[e("p",[this._v("聊天内容:")]),this._v(" "),e("div",{attrs:{id:"content"}})])}]};var d=n("VU/8")(c,r,!1,function(t){n("Rbr1")},"data-v-767d6750",null).exports,u={data:function(){return{select:""}},created:function(){},methods:{handleClick:function(){console.log(this.select)}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{fixed:"",title:"标题"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",[t._v("返回")])],1),t._v(" "),n("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._v(" "),n("mt-tabbar",[n("mt-tab-item",{attrs:{id:"外卖"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[n("img",{attrs:{slot:"icon",src:""},slot:"icon"}),t._v("\n      外卖\n    ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"订单"}},[n("img",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n      订单\n    ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"发现"}},[n("img",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n      发现\n    ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"我的"}},[n("img",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n      我的\n    ")])],1)],1)},staticRenderFns:[]};var m=n("VU/8")(u,h,!1,function(t){n("d79B")},null,null).exports;i.default.use(l.a);var p=new l.a({routes:[{path:"/",name:"login",component:d},{path:"/index",name:"index",component:m}]}),f=n("zL8q"),g=n.n(f),v=(n("tvR6"),n("Au9i")),_=n.n(v);n("d8/S");i.default.config.productionTip=!1,i.default.use(g.a),i.default.use(_.a),new i.default({el:"#app",router:p,components:{App:a},template:"<App/>"})},Rbr1:function(t,e){},d79B:function(t,e){},"d8/S":function(t,e){},tvR6:function(t,e){},uiKk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.490bfc7ed1a424ad340c.js.map