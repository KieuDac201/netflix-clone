(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{110:function(e,n,t){"use strict";t.r(n);var i,a,c,o,r,s,d,l,p,b,j,u,f,x,h,g,O,v,m,w,k,y,S,_,T,z,C=t(0),U=t.n(C),A=t(33),E=t.n(A),R=t(4),M=(t(46),t(2)),D=t(7),N=t.n(D),L=t(8),P=t(3),I=t(34),F=t.n(I).a.create({baseURL:"https://api.themoviedb.org/3"}),Y="15a2fd8e2e70968f669be994cd2629d3",B={fetchTrending:"/trending/all/week?api_key=".concat(Y,"&language=vi"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(Y,"&with_networks=213"),fetchTopRate:"/movie/top_rated?api_key=".concat(Y,"&language=vi"),fetchActionMovie:"/discover/movie?api_key=".concat(Y,"&with_genres=28"),fetchComedyMovie:"/discover/movie?api_key=".concat(Y,"&with_genres=35"),fetchRomanceMovie:"/discover/movie?api_key=".concat(Y,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(Y,"&with_genres=99")},J=t(14),V=t(15),q=t.n(V),H=t(18),K=t(1),G=P.a.div(i||(i=Object(M.a)(['\n  padding: 50px 10px;\n  min-height: 300px;\n  background: rgb(0, 0, 0);\n  position: relative;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 40%;\n    top: 0;\n    height: 100%;\n    right: 0;\n    background: url("','") no-repeat;\n    background-size: cover;\n    background-position: center;\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 70%;\n    height: 100%;\n    background: rgb(0, 0, 0);\n    background: linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(0, 0, 0, 1) 49%,\n      rgba(40, 40, 40, 1) 73%,\n      rgba(203, 18, 235, 0) 100%\n    );\n    @media (max-width: 768px) {\n      display: none;\n    }\n    z-index: 1;\n  }\n\n  .dac {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10;\n  }\n'])),(function(e){return"https://image.tmdb.org/t/p/w500"+e.img})),W=P.a.div(a||(a=Object(M.a)(["\n  color: #fff;\n  font-weight: bold;\n  position: relative;\n  z-index: 2;\n  width: 45%;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),X=P.a.div(c||(c=Object(M.a)(["\n  font-size: 22px;\n  font-weight: bold;\n  margin-bottom: 24px;\n"]))),Z=P.a.div(o||(o=Object(M.a)(["\n  margin-bottom: 20px;\n  line-height: 1.5;\n  font-weight: normal;\n"]))),Q=P.a.div(r||(r=Object(M.a)(["\n  padding: 15px 30px;\n  border-radius: 4px;\n  display: inline-block;\n  font-weight: bold;\n  background: #fff;\n  color: #000;\n  cursor: pointer;\n"]))),$=P.a.div(s||(s=Object(M.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  color: #fff;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  font-weight: bold;\n  font-size: 24px;\n  cursor: pointer;\n"]))),ee=P.a.div(d||(d=Object(M.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  cursor: pointer;\n  z-index: 5;\n"]))),ne=function(e){var n=e.movie,t=e.setIsShowDetail,i=Object(C.useState)(""),a=Object(R.a)(i,2),c=a[0],o=a[1];return Object(K.jsxs)(G,{img:(null===n||void 0===n?void 0:n.backdrop_path)||(null===n||void 0===n?void 0:n.poster_path),children:[Object(K.jsxs)(W,{children:[Object(K.jsx)(X,{children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)}),Object(K.jsx)(Z,{children:null===n||void 0===n?void 0:n.overview}),Object(K.jsx)(Q,{onClick:function(){console.log(n),c?o(""):(console.log("false"),q()((null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)).then((function(e){if(console.log(e),e){var n=new URLSearchParams(new URL(e).search);o(n.get("v"))}})))},children:"Play"})]}),Object(K.jsx)($,{onClick:function(){return t(!1)},children:Object(K.jsx)(H.a,{})}),c&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ee,{onClick:function(){return o("")}}),Object(K.jsx)(J.a,{videoId:c,opts:{height:"390",width:"100%",playerVars:{autoplay:1}},className:"dac"})]})]})},te=P.a.div(l||(l=Object(M.a)(["\n  .dac {\n    position: fixed;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 999;\n  }\n"]))),ie=P.a.div(p||(p=Object(M.a)(['\n  min-height: 500px;\n  background: url("','") no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 70px 20px 20px 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  @media (max-width: 1000px) {\n    min-height: 350px;\n    padding: 70px 20px 20px 20px;\n  }\n'])),(function(e){return"https://image.tmdb.org/t/p/original"+e.url})),ae=P.a.div(b||(b=Object(M.a)(["\n  font-size: 45px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  color: #fff;\n  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\n\n  @media (max-width: 992px) {\n    font-size: 30px;\n  }\n"]))),ce=P.a.div(j||(j=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 20px;\n"]))),oe=P.a.div(u||(u=Object(M.a)(["\n  padding: 12px 26px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 4px;\n  cursor: pointer;\n"]))),re=P.a.div(f||(f=Object(M.a)(["\n  color: #fff;\n  line-height: 1.5;\n  max-width: 500px;\n  background: rgba(0, 0, 0, 0.15);\n  padding: 5px;\n"]))),se=P.a.div(x||(x=Object(M.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  cursor: pointer;\n  z-index: 5;\n"]))),de=function(){var e=Object(C.useState)(null),n=Object(R.a)(e,2),t=n[0],i=n[1],a=Object(C.useContext)(Ne),c=a.state,o=(a.dispatch,Object(C.useState)("")),r=Object(R.a)(o,2),s=r[0],d=r[1];Object(C.useEffect)((function(){function e(){return(e=Object(L.a)(N.a.mark((function e(){var n,t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get(B.fetchTrending);case 3:n=e.sent,t=Math.floor(Math.random()*n.data.results.length),i(n.data.results[t]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(C.useEffect)((function(){c.dataSearch&&i(c.dataSearch)}),[c.dataSearch]);return t&&Object(K.jsxs)(te,{children:[Object(K.jsxs)(ie,{url:t.backdrop_path,children:[Object(K.jsx)(ae,{children:t.title}),Object(K.jsxs)(ce,{children:[Object(K.jsx)(oe,{onClick:function(){console.log(t),s?d(""):(console.log("false"),q()((null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)).then((function(e){if(console.log(e),e){var n=new URLSearchParams(new URL(e).search);d(n.get("v"))}})))},children:"Play"}),Object(K.jsx)(oe,{children:"My list"})]}),Object(K.jsx)(re,{children:t.overview.length>200?t.overview.slice(0,200)+"...":t.overview})]}),s&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(se,{onClick:function(){return d("")}}),Object(K.jsx)(J.a,{videoId:s,opts:{height:"390",width:"100%",playerVars:{autoplay:1}},className:"dac"})]})]})},le=t(40),pe=t.n(le),be=t(39),je=P.a.form(h||(h=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n"]))),ue=P.a.input(g||(g=Object(M.a)(["\n  padding: 10px 40px 10px 20px;\n  border: 1px solid #000;\n  border-radius: 5px;\n  outline: none;\n"]))),fe=P.a.div(O||(O=Object(M.a)(["\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-40%);\n"]))),xe=P.a.div(v||(v=Object(M.a)(["\n  position: absolute;\n  top: 105%;\n  height: 200px;\n  left: 0;\n  background: #fff;\n  width: 100%;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  overflow-y: scroll;\n  p{\n    margin-top: 30px;\n    font-size: 13px;\n  }\n"]))),he=P.a.div(m||(m=Object(M.a)(["\n  width: 100%;\n  padding: 10px;\n  font-size: 14px;\n  display:flex;\n  :hover{\n    background: #ccc;\n    transition: 0.2s ease;\n  }\n  img{\n    width: 40px;\n    margin-right: 10px;\n  }\n"]))),ge=function(){var e=Object(C.useState)(!1),n=Object(R.a)(e,2),t=n[0],i=n[1],a=Object(be.useClickOutside)(),c=Object(R.a)(a,2),o=c[0],r=c[1],s=Object(C.useState)(""),d=Object(R.a)(s,2),l=d[0],p=d[1],b=Object(C.useState)(!1),j=Object(R.a)(b,2),u=j[0],f=j[1],x=Object(C.useState)([]),h=Object(R.a)(x,2),g=h[0],O=h[1],v=Object(C.useContext)(Ne),m=(v.state,v.dispatch);Object(C.useEffect)((function(){r&&k()}),[r]),Object(C.useEffect)((function(){var e;return l?e=setTimeout(w,1e3):O([]),function(){clearTimeout(e)}}),[l]);var w=function(){var e=Object(L.a)(N.a.mark((function e(){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),0==l.length){e.next=8;break}return e.next=4,F.get("/search/movie?api_key=".concat("15a2fd8e2e70968f669be994cd2629d3","&query=").concat(l)).catch((function(e){return console.log(e)}));case 4:(n=e.sent)&&O(n.data.results),e.next=8;break;case 8:f(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){i(!1),p(""),O([])};return console.log(g),Object(K.jsxs)(je,{ref:o,children:[Object(K.jsx)(ue,{type:"text",placeholder:"search...",onFocus:function(){return i(!0)},value:l,onChange:function(e){return p(e.target.value)}}),Object(K.jsx)(fe,{children:Object(K.jsx)(H.b,{})}),t&&Object(K.jsxs)(xe,{children:[u&&Object(K.jsx)(pe.a,{color:"#ccc",size:30}),!u&&!l&&Object(K.jsx)("p",{children:"type to search"}),g&&g.map((function(e){return Object(K.jsxs)(he,{onClick:function(){return n=e,k(),void m({type:"UPDATE_DATA_SEARCH",data:n});var n},children:[Object(K.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+(e.backdrop_path||e.poster_path||"/kuStRV9ItXESNvuEGDZMsm65yfv.jpg"),alt:e.title||e.name}),Object(K.jsxs)("p",{children:[" ",e.title||e.name]})]},e.id)}))]})]})},Oe=P.a.div(w||(w=Object(M.a)(["\n  position: fixed;\n  z-index: 10;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  padding: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  transition: 0.2s ease;\n"])),(function(e){return e.bg?"15px 30px":"20px 30px"}),(function(e){return e.bg?"#000":"transparent"})),ve=P.a.img(k||(k=Object(M.a)(["\n  width: 80px;\n"]))),me=P.a.img(y||(y=Object(M.a)(["\n  width: 40px;\n"]))),we=function(){var e=Object(C.useState)(!1),n=Object(R.a)(e,2),t=n[0],i=n[1];return Object(C.useEffect)((function(){function e(){window.pageYOffset>50?i(!0):i(!1)}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(K.jsxs)(Oe,{bg:t,children:[Object(K.jsx)(ve,{src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",alt:"logo"}),Object(K.jsx)(ge,{}),Object(K.jsx)(me,{src:"https://baominh.tech/wp-content/uploads/2020/09/nhan-dan-facebook.png",alt:"avata"})]})},ke=t(12),ye=t(41),Se=t.n(ye),_e=(t(108),t(109),t.p+"static/media/500x750.9d64770a.jpg"),Te=t.p+"static/media/500x281.499dcbe4.jpg",ze="https://image.tmdb.org/t/p/w500";function Ce(e){var n=e.className,t=e.style,i=e.onClick;return Object(K.jsx)("div",{className:n,style:Object(ke.a)(Object(ke.a)({},t),{},{display:"none"}),onClick:i})}var Ue={speed:500,infinite:!0,slidesToShow:7,slidesToScroll:3,responsive:[{breakpoint:1600,settings:{slidesToShow:6}},{breakpoint:1250,settings:{slidesToShow:5}},{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3,nextArrow:Object(K.jsx)(Ce,{}),prevArrow:Object(K.jsx)(Ce,{})}},{breakpoint:550,settings:{slidesToShow:2,slidesToScroll:2,nextArrow:Object(K.jsx)(Ce,{}),prevArrow:Object(K.jsx)(Ce,{})}}]},Ae=P.a.div(S||(S=Object(M.a)(["\n  padding: 20px;\n  @media (max-width: 768px) {\n    padding: 10px;\n  }\n"]))),Ee=P.a.div(_||(_=Object(M.a)(["\n  font-size: 25px;\n  font-weight: bold;\n  margin-bottom: 12px;\n  color: #fff;\n\n  @media (max-width: 768px) {\n    font-size: 22px;\n  }\n"]))),Re=P.a.div(T||(T=Object(M.a)(["\n  margin: 10px 10px;\n"]))),Me=P.a.img(z||(z=Object(M.a)(["\n  object-fit: cover;\n  cursor: pointer;\n  padding: 5px;\n\n  &:hover {\n    transform: scale(1.05);\n    transition: 0.2s ease;\n  }\n"]))),De=function(e){var n=e.title,t=e.fetchUrl,i=e.large,a=Object(C.useState)([]),c=Object(R.a)(a,2),o=c[0],r=c[1],s=Object(C.useState)(!1),d=Object(R.a)(s,2),l=d[0],p=d[1],b=Object(C.useState)(null),j=Object(R.a)(b,2),u=j[0],f=j[1];Object(C.useEffect)((function(){function e(){return(e=Object(L.a)(N.a.mark((function e(){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get(t);case 3:n=e.sent,r(n.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(K.jsxs)(Ae,{children:[Object(K.jsx)(Ee,{children:n}),Object(K.jsx)(Re,{children:Object(K.jsx)(Se.a,Object(ke.a)(Object(ke.a)({},Ue),{},{children:o.map((function(e){return Object(K.jsx)(Me,{onClick:function(){return function(e){f(e),p(!0)}(e)},large:i,src:i?e.poster_path?ze+e.poster_path:_e:e.backdrop_path?ze+e.backdrop_path:Te,alt:e.title},e.id)}))}))}),l&&Object(K.jsx)(ne,{movie:u,setIsShowDetail:p})]})},Ne=U.a.createContext(),Le={dataSearch:[]};function Pe(e,n){switch(n.type){case"UPDATE_DATA_SEARCH":return{dataSearch:n.data};default:return Le}}var Ie=function(){var e=Object(C.useReducer)(Pe,Le),n=Object(R.a)(e,2),t=n[0],i=n[1];return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(Ne.Provider,{value:{state:t,dispatch:i},children:[Object(K.jsx)(we,{}),Object(K.jsx)(de,{})]}),Object(K.jsx)(De,{title:"Search result",fetchUrl:B.fetchTrending}),Object(K.jsx)(De,{title:"Top trending",fetchUrl:B.fetchTrending,large:!0}),Object(K.jsx)(De,{title:"Netflix original",fetchUrl:B.fetchNetflixOriginals}),Object(K.jsx)(De,{title:"Top rated",fetchUrl:B.fetchTopRate}),Object(K.jsx)(De,{title:"Action movie",fetchUrl:B.fetchActionMovie}),Object(K.jsx)(De,{title:"Comedy movie",fetchUrl:B.fetchComedyMovie}),Object(K.jsx)(De,{title:"Romance movie",fetchUrl:B.fetchRomanceMovie}),Object(K.jsx)(De,{title:"Document movie",fetchUrl:B.fetchDocumentaries}),Object(K.jsx)("div",{className:"slider-1"})]})};E.a.render(Object(K.jsx)(U.a.StrictMode,{children:Object(K.jsx)(Ie,{})}),document.getElementById("root"))},46:function(e,n,t){}},[[110,1,2]]]);
//# sourceMappingURL=main.392f3caa.chunk.js.map