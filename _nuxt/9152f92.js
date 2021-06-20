(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7,8,15],{338:function(e,t,r){"use strict";r.r(t);r(77);var n={props:{id:{type:String,required:!0},title:{type:String,required:!0},mode:{type:String,default:"add"},headerKey:{type:String,default:null}},data:function(){return{header:{key:null,value:null}}},computed:{isKeyValid:function(){var e=this;return"add"===this.mode?!!this.header.key&&!this.$store.getters["request/headers"].some((function(t){return t.key===e.header.key})):!!this.header.key&&!this.$store.getters["request/headers"].some((function(t){return t.key===e.header.key&&t.key!==e.headerKey}))},isValueValid:function(){return!!this.header.value},isHeaderValid:function(){return this.isKeyValid&&this.isValueValid},error:function(){var e=this;if("add"===this.mode){if(this.$store.getters["request/headers"].some((function(t){return t.key===e.header.key})))return"Заголовок с таким ключом уже существует"}else if(this.$store.getters["request/headers"].some((function(t){return t.key===e.header.key&&t.key!==e.headerKey})))return"Заголовок с таким ключом уже существует";return"Не должно быть пустым"}},methods:{resetHeader:function(){var e=this;if("add"===this.mode)this.header.key=null,this.header.value=null;else{var header=this.$store.getters["request/headers"].find((function(t){return t.key===e.headerKey}));this.header.key=header.key,this.header.value=header.value}},handleOk:function(e){e.preventDefault(),this.submit()},submit:function(){var e=this;this.isHeaderValid&&("add"===this.mode?this.$store.dispatch("request/setHeader",this.header):this.$store.dispatch("request/updateHeader",{key:this.headerKey,header:this.header}),this.$nextTick((function(){e.$bvModal.hide(e.id)})))}}},d=r(66),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{id:e.id,title:e.title},on:{show:e.resetHeader,ok:e.handleOk}},[r("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.submit.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"Имя","label-for":"key","invalid-feedback":e.error,state:e.isKeyValid}},[r("b-form-input",{attrs:{id:"key",state:e.isKeyValid,required:""},model:{value:e.header.key,callback:function(t){e.$set(e.header,"key",t)},expression:"header.key"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Значение","label-for":"value","invalid-feedback":"Не должно быть пустым",state:e.isValueValid}},[r("b-form-input",{attrs:{id:"value",state:e.isValueValid,required:""},model:{value:e.header.value,callback:function(t){e.$set(e.header,"value",t)},expression:"header.value"}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports},339:function(e,t,r){"use strict";r.r(t);var n={components:{HeaderModal:r(338).default},props:{headerKey:{type:String,required:!0}}},d=r(66),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(t){return e.$bvModal.show("edit-header-"+e.headerKey)}}},[r("b-icon",{attrs:{icon:"pencil-fill"}})],1),e._v(" "),r("HeaderModal",{attrs:{id:"edit-header-"+e.headerKey,title:"Изменить заголовок",mode:"edit","header-key":e.headerKey}})],1)}),[],!1,null,null,null);t.default=component.exports},340:function(e,t,r){"use strict";r.r(t);var n={props:{headerKey:{type:String,required:!0}}},d=r(66),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(t){return e.$store.dispatch("request/deleteHeader",e.headerKey)}}},[r("b-icon",{attrs:{icon:"trash-fill"}})],1)}),[],!1,null,null,null);t.default=component.exports},345:function(e,t,r){"use strict";r.r(t);var n=r(339),d={components:{DeleteHeaderButton:r(340).default,EditHeaderButton:n.default},computed:{headers:function(){return this.$store.getters["request/headers"]}}},l=r(66),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("table",{staticClass:"table table-striped table-hover"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("Имя")]),e._v(" "),r("th",{attrs:{scope:"col"}},[e._v("Значение")]),e._v(" "),r("th",{staticStyle:{width:"20%"},attrs:{scope:"col"}},[e._v("Действия")])])]),e._v(" "),r("tbody",e._l(e.headers,(function(header,t){return r("tr",{key:t},[r("td",[e._v(e._s(header.key))]),e._v(" "),r("td",[e._v(e._s(header.value))]),e._v(" "),r("td",[r("EditHeaderButton",{attrs:{"header-key":header.key}}),e._v(" "),r("DeleteHeaderButton",{attrs:{"header-key":header.key}})],1)])})),0)])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);