import{D as M,d as V,c as b,b as f,f as z,h as l,w as a,u as r,V as L,F as N,W as j,X as g,e as y,o as i,B as p,Y as m,I as h,Z as O,g as k}from"./index.ca1e8891.js";const U={"Content-Type":"application/json;charsetset=UTF-8"},X=w=>M({url:"/cloud/api/v1/file/list",method:"GET",params:{url:w},headers:U});const Y=k("label",null," _new folder",-1),$=k("label",null," _copy",-1),A=k("label",null," _rename",-1),G=k("label",null," _delete",-1),I=k("label",null," _delete",-1),Z=V({setup(w){const u=j(),R=b([]),n=b(new Set),C=b({isCtrl:!1,isShift:!1}),E=f(),x=f(),d=f(!0);f();const v=f(!1),F=(e,o,t,s)=>{n.has(e)||(x.value=e)},B=(e,o,t,s)=>{n.has(e)||(x.value=void 0)},D=(e,o,t)=>{C.isCtrl?n.has(e)?n.delete(e):n.add(e):(n.clear(),n.add(e))},S=(e,o,t)=>{var c;v.value=!0;let s=(c=u==null?void 0:u.proxy)==null?void 0:c.$refs.contextmenu;n.has(e)||(n.clear(),n.add(e)),t.preventDefault(),s.show({top:t.clientY,left:t.clientX}),window.onclick=()=>{s.hide(),v.value=!1}},_=()=>{},T=({row:e,rowIndex:o})=>{var t;if(n.has(e))return{background:"#B4C7E7"};if(((t=g(x.value))==null?void 0:t.name)==g(e).name)return{background:"#DAE3F3"}};return document.onkeydown=e=>{switch(e.key){case"Control":C.isCtrl=!0;break}},document.onkeyup=e=>{var o;switch(e.key){case"Control":C.isCtrl=!1;break;case"Escape":v.value?(((o=u==null?void 0:u.proxy)==null?void 0:o.$refs.contextmenu).hide(),v.value=!1):n.clear(),C.isCtrl=!0;break}},X("").then(e=>{e.data.forEach(o=>{const t={size:o.size,isDir:o.isDir,name:o.server_filename,path:o.path};R.push(t)})}),(e,o)=>{const t=y("el-table-column"),s=y("FolderOpened"),c=y("el-icon");return i(),z(N,null,[l(r(L),{data:r(R),onCellMouseEnter:F,onCellMouseLeave:B,"row-style":T,onRowContextmenu:S,onRowClick:D,ref_key:"multipleTableRef",ref:E},{default:a(()=>[l(t,{prop:"name",width:"200px"}),l(t,{prop:"isDir",width:"130px"}),l(t,{prop:"size",width:"130px"}),l(t,{prop:"path",width:"130px"})]),_:1},8,["data"]),l(r(O),{"auto-ajust-placement":"",ref:"contextmenu"},{default:a(()=>[d.value?(i(),p(r(m),{key:0,onClick:_},{default:a(()=>[l(c,{class:"contextmenu-icon"},{default:a(()=>[l(s)]),_:1}),Y]),_:1})):h("",!0),d.value?(i(),p(r(m),{key:1,onClick:_},{default:a(()=>[l(c,{class:"contextmenu-icon"},{default:a(()=>[l(s)]),_:1}),$]),_:1})):h("",!0),d.value?(i(),p(r(m),{key:2,onClick:_},{default:a(()=>[l(c,{class:"contextmenu-icon"},{default:a(()=>[l(s)]),_:1}),A]),_:1})):h("",!0),d.value?(i(),p(r(m),{key:3,onClick:_},{default:a(()=>[l(c,{class:"contextmenu-icon"},{default:a(()=>[l(s)]),_:1}),G]),_:1})):h("",!0),d.value?(i(),p(r(m),{key:4,onClick:_},{default:a(()=>[l(c,{class:"contextmenu-icon"},{default:a(()=>[l(s)]),_:1}),I]),_:1})):h("",!0)]),_:1},512)],64)}}});export{Z as default};
