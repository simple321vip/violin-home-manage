import{D as e,N as c,c as a}from"./index.89c8c085.js";const v=()=>e({url:"/trader/api/v1/accounts",method:"GET"}),d=s=>e({url:"/trader/api/v1/tick/"+s,method:"GET"}),y=()=>e({url:"/trader/api/v1/ticks",method:"GET"}),h=s=>e({url:"/trader/api/v1/order",method:"POST",data:s}),g=s=>e({url:"/trader/api/v1/subscribe/"+s,method:"GET"}),o=()=>e({url:"/trader/api/v1/subscribe/vt_symbols",method:"GET"}),p=s=>e({url:"/trader/api/v1/subscribe/"+s,method:"DELETE"}),n=()=>e({url:"/trader/api/v1/vt_symbols",method:"GET"}),b=()=>e({url:"/trader/api/v1/exchanges",method:"GET"}),E=c("strategy",()=>{const s=a({class_names:[],vt_symbols:new Map,subscribe_vt_symbols:[],exchanges:[]});return{strategy:s,select_exchanges:async()=>{s.exchanges.length==0&&b().then(t=>{s.exchanges=t.data.exchanges})},select_vt_symbols:async()=>{s.vt_symbols.size==0&&n().then(t=>{Object.keys(t.data.vt_symbols).forEach(r=>{s.vt_symbols.set(r,t.data.vt_symbols[r])})})},select_subscribe_vt_symbols:async()=>{s.subscribe_vt_symbols.length==0&&o().then(t=>{s.subscribe_vt_symbols=t.data.subscribe_vt_symbols})}}});export{g as a,v as b,p as c,d,h as e,y as g,E as s};
