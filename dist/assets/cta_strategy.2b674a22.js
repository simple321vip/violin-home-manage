import{D as r}from"./index.89c8c085.js";const a=()=>r({url:"/trader/api/v1/strategy_file",method:"GET"}),s=()=>r({url:"/trader/api/v1/strategy_file/load",method:"GET"}),o=t=>r({url:"/trader/api/v1/strategy_file/"+t,method:"PUT"}),i=t=>r({url:"/trader/api/v1/strategy_file/"+t,method:"PATCH"}),d=t=>r({url:"/trader/api/v1/strategy_file/"+t,method:"DELETE"}),g=()=>r({url:"/trader/api/v1/strategies",method:"GET"}),n=t=>r({url:"/trader/api/v1/strategy/"+t.strategy_name,method:"POST",data:t}),l=t=>r({url:"/trader/api/v1/strategy/init/"+t,method:"PUT"}),u=t=>r({url:"/trader/api/v1/strategy/"+t,method:"PUT"}),_=t=>r({url:"/trader/api/v1/strategy/"+t,method:"PATCH"}),y=t=>r({url:"/trader/api/v1/strategy/"+t,method:"DELETE"});export{s as a,g as b,n as c,_ as d,y as e,a as g,l as i,o as l,d as r,u as s,i as u};
