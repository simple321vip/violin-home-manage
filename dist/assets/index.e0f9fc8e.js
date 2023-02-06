import{_ as L,d as O,e as u,o as D,f as T,h as e,w as a,F as G,x as H,B as Q,g as S,i as b,D as W,b as w,t as _e,c as I,H as U,K as B,u as p,O as z,z as j,P as pe,Q as me,R as fe}from"./index.89c8c085.js";import{p as be,u as q,s as ye,d as ge}from"./bookmark.88786631.js";import"./index.35e25221.js";var ke=function(){var l=document.getSelection();if(!l.rangeCount)return function(){};for(var t=document.activeElement,n=[],i=0;i<l.rangeCount;i++)n.push(l.getRangeAt(i));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return l.removeAllRanges(),function(){l.type==="Caret"&&l.removeAllRanges(),l.rangeCount||n.forEach(function(m){l.addRange(m)}),t&&t.focus()}},ve=ke,K={"text/plain":"Text","text/html":"Url",default:"Text"},he="Copy to clipboard: #{key}, Enter";function Ce(l){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return l.replace(/#{\s*key\s*}/g,t)}function xe(l,t){var n,i,m,d,f,o,v=!1;t||(t={}),n=t.debug||!1;try{m=ve(),d=document.createRange(),f=document.getSelection(),o=document.createElement("span"),o.textContent=l,o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(_){if(_.stopPropagation(),t.format)if(_.preventDefault(),typeof _.clipboardData=="undefined"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var h=K[t.format]||K.default;window.clipboardData.setData(h,l)}else _.clipboardData.clearData(),_.clipboardData.setData(t.format,l);t.onCopy&&(_.preventDefault(),t.onCopy(_.clipboardData))}),document.body.appendChild(o),d.selectNodeContents(o),f.addRange(d);var g=document.execCommand("copy");if(!g)throw new Error("copy command was unsuccessful");v=!0}catch(_){n&&console.error("unable to copy using execCommand: ",_),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",l),t.onCopy&&t.onCopy(window.clipboardData),v=!0}catch(h){n&&console.error("unable to copy using clipboardData: ",h),n&&console.error("falling back to prompt"),i=Ce("message"in t?t.message:he),window.prompt(i,l)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(d):f.removeAllRanges()),o&&document.body.removeChild(o),m()}return v}var we=xe;const De={class:"dashboard"},Ee={class:"dialog-footer"},Ve=b("\u53D6\u6D88"),Se=b("\u63D0\u4EA4"),Te=O({props:{types:null,dialog_form:null,operate_code:null},emits:["on-concel","on-submit"],setup(l,{emit:t}){const n=l,i="140px",m=()=>{t("on-concel")},d=()=>{const f={bk_id:n.dialog_form.bk_id,bk_type_id:n.dialog_form.bk_type_id,comment:n.dialog_form.comment,url:n.dialog_form.url};n.operate_code=="0"?be(f).then(o=>{t("on-submit")}):n.operate_code=="1"?q(f).then(o=>{t("on-submit")}):n.operate_code=="2"&&q(f).then(o=>{t("on-submit")})};return(f,o)=>{const v=u("el-option"),g=u("el-select"),_=u("el-input"),h=u("el-form-item"),C=u("el-form"),R=u("el-button");return D(),T("div",De,[e(C,{model:l.dialog_form},{default:a(()=>[e(h,{label:"\u5206\u7C7B","label-width":i},{default:a(()=>[e(g,{modelValue:l.dialog_form.bk_type_id,"onUpdate:modelValue":o[0]||(o[0]=k=>l.dialog_form.bk_type_id=k),placeholder:""},{default:a(()=>[(D(!0),T(G,null,H(l.types,k=>(D(),Q(v,{key:k.bk_type_id,value:k.bk_type_id,label:k.bk_type_name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),e(h,{label:"\u5907\u6CE8","label-width":i},{default:a(()=>[e(_,{modelValue:l.dialog_form.comment,"onUpdate:modelValue":o[1]||(o[1]=k=>l.dialog_form.comment=k),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(h,{label:"url","label-width":i},{default:a(()=>[e(_,{modelValue:l.dialog_form.url,"onUpdate:modelValue":o[2]||(o[2]=k=>l.dialog_form.url=k),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"]),S("span",Ee,[e(R,{onClick:m},{default:a(()=>[Ve]),_:1}),e(R,{type:"primary",onClick:d},{default:a(()=>[Se]),_:1})])])}}});var $e=L(Te,[["__scopeId","data-v-84f682ae"]]);const Ae=l=>W({url:"/bookmark/api/v1/bookmark_type/insert",method:"PUT",data:l}),Ue=()=>W({url:"/bookmark/api/v1/bookmark_type",method:"GET",data:{}});const Be={class:"dashboard"},Re={class:"dialog-footer"},Fe=b("\u63D0\u4EA4"),Ne=O({emits:["on-update"],setup(l,{emit:t}){const n=w(""),i=()=>{const m={bookmark_type_name:n.value};Ae(m).then(d=>{t("on-update"),n.value=""})};return(m,d)=>{const f=u("el-input"),o=u("el-button");return D(),T("div",Be,[e(f,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=v=>n.value=v),placeholder:"Please input"},null,8,["modelValue"]),S("span",Re,[e(o,{type:"primary",onClick:i},{default:a(()=>[Fe]),_:1})])])}}});var Ie=L(Ne,[["__scopeId","data-v-25eee70b"]]);const Oe={class:"dialog-footer"},Pe=b("\u53D6\u6D88"),ze=b("\u786E\u8BA4"),Le=O({props:{delete_id:null},emits:["on-concel","on-submit"],setup(l,{emit:t}){const n=l,i=()=>{t("on-concel")},m=()=>{t("on-submit",n.delete_id)};return(d,f)=>{const o=u("el-button");return D(),T("span",Oe,[e(o,{onClick:i},{default:a(()=>[Pe]),_:1}),e(o,{type:"primary",onClick:m},{default:a(()=>[ze]),_:1})])}}});const Me={class:"bookmark"},je=b("\u68C0\u7D22"),qe={class:"tag_list"},Ke=b("\u589E\u52A0"),Ge=b("\u81EA\u5B9A\u4E49"),He={class:"create_dialog"},Qe=b("\u65B0\u5EFA"),We=["onClick"],Xe=b("\u7F16\u8F91 "),Je=b(" \u5220\u9664 "),Ye={style:{"margin-top":"20px"}},Ze=b("\u53CD\u9009"),et=b("\u6E05\u9664"),tt=O({setup(l){const t=_e();let n=w("");const i=I({bk_type_ids:[],comment:""}),m=I([]),d=I({bk_id:"-1",bk_type_id:1,bk_type_name:"\u672A\u5206\u7C7B",comment:"",url:""}),f=w(),o=w([]),v=r=>{r?r.forEach(s=>{f.value.toggleRowSelection(s,void 0)}):f.value.clearSelection()};let g=w(!1),_=w(!1),h=w(!1),C=w(!1);const R=()=>{h.value=!0},k=()=>{C.value=!0},X=()=>{C.value=!1,A(),M()},$=I([]),M=()=>{Ue().then(r=>{$.splice(0,$.length),r.data.forEach(s=>{const y=s.split("|"),V={bk_type_id:Number(y[0]),bk_type_name:y[1],clicked:!1};$.push(V)})})},J=()=>{n.value="0",d.bk_id="-1",d.bk_type_id=1,d.bk_type_name="\u672A\u5206\u7C7B",d.comment="",d.url="",g.value=!0},Y=(r,s)=>{Object.assign(d,s),n.value="2",_.value=!0},Z=(r,s)=>{Object.assign(d,s),n.value="1",g.value=!0},ee=r=>{r.clicked?(r.clicked=!1,i.bk_type_ids.forEach(function(s,y,V){s==r.bk_type_id&&V.splice(y,1)})):(r.clicked=!0,i.bk_type_ids.push(r.bk_type_id))},te=r=>{o.value=r},oe=r=>{window.open(r)},A=()=>{const r={comment:i.comment,type_id:i.bk_type_ids};m.splice(0,m.length),ye(r).then(s=>{s.data.forEach((y,V)=>{const F={bk_id:y.bk_id,bk_type_id:y.bk_type_id,bk_type_name:y.bk_type_name,comment:y.comment,url:y.url};m.push(F)})})},le=r=>{ge(r).then(y=>{_.value=!1,A()})},ae=()=>{g.value=!1},ne=()=>{g.value=!1,A()},se=r=>{we(r.url+""),me({title:"",message:fe("i",{style:"color: teal"},"\u590D\u5236\u6210\u529F")})};return A(),M(),(r,s)=>{const y=u("el-input"),V=u("el-form-item"),F=u("el-col"),x=u("el-button"),ce=u("el-row"),re=u("el-tag"),ie=u("el-form"),E=u("el-table-column"),de=u("el-icon"),ue=u("el-table"),P=u("el-dialog");return D(),T("div",Me,[e(ie,null,{default:a(()=>[e(ce,null,{default:a(()=>[e(F,{span:6},{default:a(()=>[e(V,null,{default:a(()=>[e(y,{modelValue:p(i).comment,"onUpdate:modelValue":s[0]||(s[0]=c=>p(i).comment=c),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(F,{span:6},{default:a(()=>[e(x,{type:"primary",onClick:A},{default:a(()=>[je]),_:1})]),_:1})]),_:1}),S("div",qe,[(D(!0),T(G,null,H(p($),c=>(D(),Q(re,{class:"ml-2 click-icon",type:c.clicked?"danger":"info",onClick:N=>ee(c)},{default:a(()=>[b(j(c.bk_type_name),1)]),_:2},1032,["type","onClick"]))),256)),U(e(x,{type:"primary",onClick:k},{default:a(()=>[Ke]),_:1},512),[[B,p(t).tenant.account]]),U(e(x,{type:"primary",onClick:R},{default:a(()=>[Ge]),_:1},512),[[B,p(t).tenant.account]])])]),_:1}),S("div",He,[U(e(x,{type:"primary",onClick:J},{default:a(()=>[Qe]),_:1},512),[[B,p(t).tenant.account]])]),e(ue,{ref_key:"multipleTableRef",ref:f,data:p(m),onSelectionChange:te,style:{width:"100%"}},{default:a(()=>[e(E,{type:"selection",width:"55"}),e(E,{type:"index",label:"index",width:"80"}),e(E,{prop:"bk_type_name",label:"\u5206\u7C7B",width:"100"}),e(E,{prop:"comment",label:"\u540D\u79F0",width:"180"}),e(E,{prop:"facvion",label:"\u56FE\u6807",width:"60"}),e(E,{class:"click-icon",prop:"url",label:"url"},{default:a(c=>[S("span",{style:{cursor:"pointer"},onClick:N=>oe(c.row.url)},j(c.row.url),9,We)]),_:1}),e(E,{label:"\u64CD\u4F5C"},{default:a(c=>[e(de,{size:20,onClick:N=>se(c.row),class:"click-icon"},{default:a(()=>[e(p(pe))]),_:2},1032,["onClick"]),U(e(x,{class:"click-icon",size:"small",onClick:N=>Z(c.$index,c.row)},{default:a(()=>[Xe]),_:2},1032,["onClick"]),[[B,p(t).tenant.account]]),U(e(x,{size:"small",type:"danger",onClick:N=>Y(c.$index,c.row)},{default:a(()=>[Je]),_:2},1032,["onClick"]),[[B,p(t).tenant.account]])]),_:1})]),_:1},8,["data"]),S("div",Ye,[e(x,{onClick:s[1]||(s[1]=c=>v([p(m)[1],p(m)[2]]))},{default:a(()=>[Ze]),_:1}),e(x,{onClick:s[2]||(s[2]=c=>v())},{default:a(()=>[et]),_:1})]),e(P,{modelValue:p(g),"onUpdate:modelValue":s[3]||(s[3]=c=>z(g)?g.value=c:g=c),title:"\u6DFB\u52A0\u4E66\u7B7E"},{default:a(()=>[e($e,{dialog_form:p(d),operate_code:p(n),types:p($),onOnConcel:ae,onOnSubmit:ne},null,8,["dialog_form","operate_code","types"])]),_:1},8,["modelValue"]),e(P,{modelValue:p(_),"onUpdate:modelValue":s[4]||(s[4]=c=>z(_)?_.value=c:_=c)},{default:a(()=>[e(Le,{delete_id:p(d).bk_id,onOnSubmit:le},null,8,["delete_id"])]),_:1},8,["modelValue"]),e(P,{modelValue:p(C),"onUpdate:modelValue":s[5]||(s[5]=c=>z(C)?C.value=c:C=c)},{default:a(()=>[e(Ie,{onOnUpdate:X})]),_:1},8,["modelValue"])])}}});var nt=L(tt,[["__scopeId","data-v-5ccfdbb8"]]);export{nt as default};
