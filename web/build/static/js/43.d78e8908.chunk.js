(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1760:function(e,t,r){"use strict";r.r(t);var n=r(24),a=r(48),s=r.n(a),u=r(255),c=r(156),o=r(9),p=r.n(o);function i(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.post("/user/register",t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}t.default=Object(u.a)({namespace:"register",state:{status:void 0},effects:{submit:s.a.mark(function e(t,r){var n,a,u,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=r.call,u=r.put,console.log(n),e.next=5,a(i,n);case 5:return c=e.sent,e.next=8,u({type:"registerHandle",payload:c});case 8:case"end":return e.stop()}},e)})},reducers:{registerHandle:function(e,t){var r=t.payload;return Object(n.a)({},e,{status:r.status})}}})}}]);