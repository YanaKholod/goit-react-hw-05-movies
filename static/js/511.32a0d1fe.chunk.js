"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[511],{687:function(n,t,e){e.d(t,{E3:function(){return s},Hx:function(){return d},Mc:function(){return p},_k:function(){return i},uV:function(){return f}});var r=e(861),a=e(757),c=e.n(a),o="https://api.themoviedb.org",u="28027c59bdca8e7ee28a28ecaf4d25ca",i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},511:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,o,u,i,s,p=e(861),f=e(439),d=e(757),x=e.n(d),h=e(791),l=e(689),m=e(687),v=e(168),g=e(444),w={Wrapper:g.ZP.div(r||(r=(0,v.Z)(["\n    margin-top: 30px;\n    padding-right: 80px;\n    padding-left: 80px;\n    padding-bottom: 40px;\n  "]))),CastHeader:g.ZP.h3(a||(a=(0,v.Z)(["\n    font-size: 25px;\n    font-weight: 500;\n    text-align: center;\n  "]))),CastList:g.ZP.ul(c||(c=(0,v.Z)(["\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    flex-wrap: wrap;\n  "]))),CastItem:g.ZP.li(o||(o=(0,v.Z)(["\n    width: calc((100% - 4 * 40px) / 5);\n    height: 400px;\n    word-wrap: break-word;\n  "]))),CastInfo:g.ZP.div(u||(u=(0,v.Z)(["\n    margin-top: 20px;\n    max-width: 220px;\n  "]))),CastName:g.ZP.div(i||(i=(0,v.Z)(["\n    margin-bottom: 10px;\n  "]))),NoCastText:g.ZP.p(s||(s=(0,v.Z)(["\n    margin: 30px auto 0 auto;\n    text-align: center;\n    padding: 20px;\n    background-color: #f8f8f8;\n    border-radius: 5px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n    max-width: 500px;\n  "])))},Z=e(184),k=function(){var n=(0,l.UO)().movieId,t=(0,h.useState)([]),e=(0,f.Z)(t,2),r=e[0],a=e[1];return(0,h.useEffect)((function(){var t=function(){var t=(0,p.Z)(x().mark((function t(){var e,r;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.uV)(n);case 3:e=t.sent,r=e.cast,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,Z.jsxs)(w.Wrapper,{children:[(0,Z.jsx)(w.CastHeader,{children:"Cast"}),r.length?(0,Z.jsx)(w.CastList,{children:r.map((function(n){return(0,Z.jsxs)(w.CastItem,{className:"cast-card",children:[n.profile_path?(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name," profile")}):(0,Z.jsx)("img",{src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(n.name," profile")}),(0,Z.jsxs)(w.CastInfo,{children:[(0,Z.jsx)(w.CastName,{children:n.name}),(0,Z.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))}):(0,Z.jsx)(w.NoCastText,{children:"We don't have any information about the cast yet."})]})}},861:function(n,t,e){function r(n,t,e,r,a,c,o){try{var u=n[c](o),i=u.value}catch(s){return void e(s)}u.done?t(i):Promise.resolve(i).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,c){var o=n.apply(t,e);function u(n){r(o,a,c,u,i,"next",n)}function i(n){r(o,a,c,u,i,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=511.32a0d1fe.chunk.js.map