import{d as f,A as b,o as V,c as C,a as e,w as l,u as o,F as B,h as m,e as E,O as F,r,bK as k,bL as h,bM as A,i as w}from"./index.f6920a68.js";const x=m(" \u8A72\u5F53\u30B7\u30B9\u30C6\u30E0\u306E\u3054\u5229\u7528\u306F\u30B7\u30B9\u30C6\u30E0\u7BA1\u7406\u8005\u306B\u8A31\u53EF\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"),U=E("br",null,null,-1),g=m(" \u8A31\u53EF\u304C\u306A\u3051\u308C\u3070\u3001\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u3092\u767B\u9332\u3057\u3066\u3082\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u3054\u5229\u7528\u306F\u3067\u304D\u307E\u305B\u3093\u306E\u3067\u3001\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002 "),v=m("Register"),y=m("Cancel"),R=f({setup(I){const d=F().query,u=b({phone_number:"",code:"",tenant_id:d.tenantId,account:d.account,token:d.token}),i=()=>{k(u).then(_=>{if(_.status==200){const t={id:d.tenantId,account:d.account};h(d.token),A(t);const{href:a}=w.resolve({path:"/"});window.open(a,"_self")}})};return(_,t)=>{const a=r("el-input"),s=r("el-form-item"),c=r("el-button"),p=r("el-form");return V(),C(B,null,[x,U,g,e(p,{model:o(u),"label-width":"120px"},{default:l(()=>[e(s,{label:"phone_number"},{default:l(()=>[e(a,{modelValue:o(u).phone_number,"onUpdate:modelValue":t[0]||(t[0]=n=>o(u).phone_number=n)},null,8,["modelValue"])]),_:1}),e(s,{label:"auth_code"},{default:l(()=>[e(a,{modelValue:o(u).code,"onUpdate:modelValue":t[1]||(t[1]=n=>o(u).code=n)},null,8,["modelValue"])]),_:1}),e(s,{label:"tenantId"},{default:l(()=>[e(a,{modelValue:o(u).tenant_id,"onUpdate:modelValue":t[2]||(t[2]=n=>o(u).tenant_id=n),disabled:!0},null,8,["modelValue"])]),_:1}),e(s,{label:"account"},{default:l(()=>[e(a,{modelValue:o(u).account,"onUpdate:modelValue":t[3]||(t[3]=n=>o(u).account=n),disabled:!0},null,8,["modelValue"])]),_:1}),e(s,{label:"token"},{default:l(()=>[e(a,{modelValue:o(u).token,"onUpdate:modelValue":t[4]||(t[4]=n=>o(u).token=n),disabled:!0},null,8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[e(c,{type:"primary",onClick:i},{default:l(()=>[v]),_:1}),e(c,null,{default:l(()=>[y]),_:1})]),_:1})]),_:1},8,["model"])],64)}}});export{R as default};
