import{_ as x,r as t,o as r,c as m,a as e,d as D,b as C,e as _,f as l,t as b,u as p,w as A,v as w,g as u,F as k,h as E,l as $,i as V,j as H,k as M,n as I,p as N,m as L}from"./index.5d800fae.js";import{h as y}from"./moment.a9f98195.js";import{u as T}from"./tenant.8e26e394.js";const j={},z={class:"section-main",style:{height:"100%"}};function U(a,s){const n=t("router-view");return r(),m("section",z,[e(n)])}var q=x(j,[["render",U]]);const G={class:"nav-main"},J=_("span",null,"\u8BBA\u4E00\u4E2A\u7A0B\u5E8F\u5458\u7684\u5BC2\u5BDE\u4E0E\u5FE7\u4F24",-1),K=l("profile"),O=l("\u9000\u51FA"),P=_("span",null,"\u786E\u8BA4\u4F60\u7684\u767B\u51FA\u64CD\u4F5C\u4E48\uFF1F",-1),Q={class:"dialog-footer"},R=l("\u53D6\u6D88"),W=l("\u786E\u8BA4"),X=D({setup(a){const s=T();s.reflush();const n=C(!1);let c=C(y().format("YYYY\u5E74MM\u6708DD\u65E5  HH:mm:ss"));setInterval(()=>{c.value=y().format("YYYY\u5E74MM\u6708DD\u65E5  HH:mm:ss")},1e3);const F=()=>{E.push({path:"/login"})},d=()=>{n.value=!1,$(s.id).then(()=>{s.logout(),E.push({path:"/login"})})};return(f,o)=>{const v=t("el-avatar"),i=t("el-dropdown-item"),h=t("el-dropdown-menu"),S=t("el-dropdown"),g=t("el-button"),Y=t("el-dialog");return r(),m(k,null,[_("div",G,[l(" \u5F53\u524D\u65F6\u95F4\uFF1A"+b(p(c))+" ",1),J,A(e(S,{trigger:"click"},{dropdown:u(()=>[e(h,null,{default:u(()=>[e(i,null,{default:u(()=>[K]),_:1}),e(i,{onClick:o[0]||(o[0]=B=>n.value=!0)},{default:u(()=>[O]),_:1})]),_:1})]),default:u(()=>[e(v,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),_:1},512),[[w,p(s).account]]),A(_("span",{onClick:F},"\u767B\u5F55",512),[[w,!p(s).account]])]),e(Y,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=B=>n.value=B),title:"\u63D0\u793A",width:"30%"},{footer:u(()=>[_("span",Q,[e(g,{onClick:o[1]||(o[1]=B=>n.value=!1)},{default:u(()=>[R]),_:1}),e(g,{type:"primary",onClick:d},{default:u(()=>[W]),_:1})])]),default:u(()=>[P]),_:1},8,["modelValue"])],64)}}});const Z=D({setup(a){let s=E.options.routes[0].children,n=C("");return V(()=>{n.value=window.innerHeight+"px"}),(c,F)=>{const d=t("el-menu-item"),f=t("el-menu");return r(),m("div",null,[e(f,{router:"",class:"side_Style",style:I({height:p(n)})},{default:u(()=>[(r(!0),m(k,null,H(p(s),(o,v)=>{var i;return r(),M(d,{key:v,index:o.path,title:(i=o.meta)==null?void 0:i.name},{default:u(()=>{var h;return[l(b((h=o.meta)==null?void 0:h.name),1)]}),_:2},1032,["index","title"])}),128))]),_:1},8,["style"])])}}});const ee=a=>(N("data-v-7c0e872a"),a=a(),L(),a),ue={class:"4444"},te=ee(()=>_("span",null,[l(" \u672C\u7F51\u7AD9\u4E0D\u6D89\u53CA\u8272\u60C5\uFF0C\u8D4C\u535A\uFF0C\u6BD2\u54C1\u548C\u653F\u6CBB\u5B97\u6559\u7B49\u5185\u5BB9\uFF0C\u6682\u65F6\u4E3A\u4E2A\u4EBA\u5B66\u4E60\u7528\u9014\u3002 \u8003\u8651\u5230\u6CD5\u5F8B\u98CE\u9669\uFF0C\u9488\u5BF9\u6709\u654F\u611F\u8BCD\u6C47\u8FD8\u8BBE\u6709\u8FC7\u6EE4\u529F\u80FD\uFF0C\u6240\u4EE5\u6682\u65F6\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4E00\u5207\u529F\u80FD\u3002 "),_("br"),l(" \u518D\u6B21\u91CD\u7533\uFF0C\u672C\u7F51\u7AD9\u53EA\u4F5C\u4E3A\u5B66\u4E60\u7F51\u7AD9\u3002\u3002\u3002\u3002\u3002\u3002 ")],-1)),oe=D({setup(a){return(s,n)=>{const c=t("el-aside"),F=t("el-header"),d=t("el-main"),f=t("el-footer"),o=t("el-container");return r(),m("div",ue,[e(o,null,{default:u(()=>[e(c,{width:"150px"},{default:u(()=>[e(Z)]),_:1}),e(o,null,{default:u(()=>[e(F,{style:{"border-bottom-style":"solid","border-bottom-width":"0.5px","border-bottom-color":"rgba(151, 151, 151, 0.3)"}},{default:u(()=>[e(X)]),_:1}),e(d,null,{default:u(()=>[e(q)]),_:1}),e(f,null,{default:u(()=>[te]),_:1})]),_:1})]),_:1})])}}});var ae=x(oe,[["__scopeId","data-v-7c0e872a"]]);export{ae as default};
