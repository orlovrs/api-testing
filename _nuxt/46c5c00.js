(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{341:function(e,t,r){"use strict";r.r(t);r(24);var n={filters:{pretty:function(e){return JSON.stringify(e,null,2)}},computed:{body:function(){return this.$store.getters["response/body"]},headers:function(){return this.$store.getters["response/headers"]},code:function(){var code=this.$store.getters["response/statusCode"],text=this.$store.getters["response/statusText"];return text?"".concat(code," (").concat(text,")"):code}}},o=r(66),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{id:"response",size:"xl","ok-only":"",title:"Ответ"}},[r("pre",[r("strong",[e._v("Код: ")]),e._v(e._s(e.code))]),e._v(" "),r("pre",[r("strong",[e._v("Заголовки:")])]),e._v(" "),r("pre",[e._v(e._s(e._f("pretty")(e.headers)))]),e._v(" "),r("pre",[r("strong",[e._v("Тело:")])]),e._v(" "),r("pre",[e._v(e._s(e._f("pretty")(e.body)))])])}),[],!1,null,null,null);t.default=component.exports}}]);