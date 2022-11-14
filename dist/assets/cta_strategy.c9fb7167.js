import{c as H,a as T,b as G,i as Y,s as j,d as J,e as K}from"./cta_strategy.c3cae35c.js";import{s as S}from"./strategy.a42656b4.js";import{_ as Q,d as U,b as k,A as M,r as s,o as d,c as v,a as e,w as t,u as i,F as N,k as P,m as b,h as R,E as I,x as C,s as W,e as X,G as Z,M as g}from"./index.f6920a68.js";const ee={class:"strategy_form"},te=R("Create"),ae=R("Reset"),le=U({emits:["on-create"],setup(E,{expose:x,emit:p}){const f=S(),w=k("default"),y=k(),r=M({strategy_name:"",class_name:"",vt_symbol:"",setting:{interval:""}});x({clear_form:()=>{r.strategy_name="",r.class_name="",r.vt_symbol="",r.setting.interval=""}});const B=M({strategy_name:[{required:!0,message:"Please input strategy name",trigger:"blur"},{min:8,max:30,message:"Length should be 8 to 30",trigger:"blur"}],interval:[{required:!0,message:"Please select interval",trigger:"change"}],class_name:[{required:!0,message:"Please select class_name"}],vt_symbol:[{required:!0,message:"Please select vt_symbol"}]}),F=async _=>{!_||await _.validate((a,c)=>{a?H(r).then(m=>{p("on-create")}):I({message:C("p",null,[C("i",{style:"color: teal"},"error submit!"+c)])})})},o=_=>{!_||_.resetFields()};return(_,a)=>{const c=s("el-input"),m=s("el-form-item"),n=s("el-option"),h=s("el-select"),V=s("el-button"),z=s("el-form");return d(),v("div",ee,[e(z,{ref_key:"ruleFormRef",ref:y,model:i(r),rules:i(B),"label-width":"140px",class:"strategy-ruleForm",size:w.value,"status-icon":""},{default:t(()=>[e(m,{label:"strategy_name",prop:"strategy_name"},{default:t(()=>[e(c,{modelValue:i(r).strategy_name,"onUpdate:modelValue":a[0]||(a[0]=u=>i(r).strategy_name=u),placeholder:"demo_strategy_symbol"},null,8,["modelValue"])]),_:1}),e(m,{label:"vt_symbol",prop:"vt_symbol"},{default:t(()=>[e(h,{modelValue:i(r).vt_symbol,"onUpdate:modelValue":a[1]||(a[1]=u=>i(r).vt_symbol=u),placeholder:"select a vt_symbol"},{default:t(()=>[(d(!0),v(N,null,P(i(f).subscribe_vt_symbols,u=>(d(),b(n,{value:u},null,8,["value"]))),256))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"class_name",prop:"class_name"},{default:t(()=>[e(h,{modelValue:i(r).class_name,"onUpdate:modelValue":a[2]||(a[2]=u=>i(r).class_name=u),placeholder:"select a class_name"},{default:t(()=>[(d(!0),v(N,null,P(i(f).class_names,u=>(d(),b(n,{value:u},null,8,["value"]))),256))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"setting:"}),e(m,{label:"",prop:"setting"},{default:t(()=>[e(h,{modelValue:i(r).setting.interval,"onUpdate:modelValue":a[3]||(a[3]=u=>i(r).setting.interval=u),placeholder:"select a interval"},{default:t(()=>[e(n,{label:"interval:1DAILY",value:"1440"}),e(n,{label:"interval:4HOUR",value:"240"}),e(n,{label:"interval:1HOUR",value:"60"}),e(n,{label:"interval:30MIN",value:"30"}),e(n,{label:"interval:15MIN",value:"15"}),e(n,{label:"interval:5MIN",value:"5"}),e(n,{label:"interval:1MIN",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(V,{type:"primary",onClick:a[4]||(a[4]=u=>F(y.value))},{default:t(()=>[te]),_:1}),e(V,{onClick:a[5]||(a[5]=u=>o(y.value))},{default:t(()=>[ae]),_:1})]),_:1})]),_:1},8,["model","rules","size"])])}}});var se=Q(le,[["__scopeId","data-v-67ac96c4"]]);const oe={class:"startegy"},ne={class:"create_dialog"},re=R("\u65B0\u5EFA\u7B56\u7565"),ue={key:0,style:{cursor:"pointer"}},_e={key:0,style:{cursor:"pointer"}},ie={key:0,style:{cursor:"pointer"}},pe=U({setup(E){const x=S();let p=k(!1);const f=M([]),w=k(),y=()=>{p.value=!1,G().then(o=>{f.length=0,o.data.forEach((_,a)=>{f.push(_)})})},r=()=>{p.value=!0,w.value.clear_form()},$=o=>{Y(o.strategy_name).then(_=>{o.status=1,j(o.strategy_name).then(a=>{o.status=2})})},B=o=>{J(o.strategy_name).then(_=>{o.status=3})},F=o=>{K(o.strategy_name).then(_=>{y()})};return W(()=>{y(),T().then(o=>{x.$patch({class_names:o.data.class_names})}).catch(o=>{I({message:C("p",null,[C("i",{style:"color: teal"},"\u8BFB\u53D6\u7B56\u7565\u6587\u4EF6\u5931\u8D25")])})})}),(o,_)=>{const a=s("el-button"),c=s("el-table-column"),m=s("Cloudy"),n=s("el-icon"),h=s("Sunrise"),V=s("Sunny"),z=s("Moon"),u=s("VideoPlay"),q=s("VideoPause"),A=s("Delete"),L=s("el-table"),O=s("el-dialog");return d(),v("div",oe,[X("div",ne,[e(a,{type:"primary",onClick:r},{default:t(()=>[re]),_:1})]),e(L,{ref:"multipleTableRef",data:i(f),style:{width:"100%"}},{default:t(()=>[e(c,{type:"selection",width:"55"}),e(c,{type:"index",label:"index",width:"80"}),e(c,{prop:"strategy_name",label:"\u7B56\u7565\u540D",width:"200"}),e(c,{prop:"class_name",label:"\u7B56\u7565\u7C7B\u540D",width:"200"}),e(c,{prop:"vt_symbol",label:"\u5408\u7EA6",width:"140"}),e(c,{prop:"status",label:"\u72B6\u6001",width:"60"},{default:t(l=>[l.row.status==0?(d(),b(n,{key:0,size:20},{default:t(()=>[e(m)]),_:1})):g("",!0),l.row.status==1?(d(),b(n,{key:1,size:20,color:"yellow"},{default:t(()=>[e(h)]),_:1})):g("",!0),l.row.status==2?(d(),b(n,{key:2,size:20,color:"gold"},{default:t(()=>[e(V)]),_:1})):g("",!0),l.row.status==3?(d(),b(n,{key:3,size:20,color:"blue"},{default:t(()=>[e(z)]),_:1})):g("",!0)]),_:1}),e(c,{prop:"url",label:"\u5F00\u59CB",width:"60"},{default:t(l=>[l.row.status==0||l.row.status==3?(d(),v("span",ue,[e(n,{size:20,onClick:D=>$(l.row)},{default:t(()=>[e(u)]),_:2},1032,["onClick"])])):g("",!0)]),_:1}),e(c,{prop:"url",label:"\u505C\u6B62",width:"60"},{default:t(l=>[l.row.status==2?(d(),v("span",_e,[e(n,{size:20,onClick:D=>B(l.row)},{default:t(()=>[e(q)]),_:2},1032,["onClick"])])):g("",!0)]),_:1}),e(c,{prop:"url",label:"\u5220\u9664",width:"60"},{default:t(l=>[l.row.status==0||l.row.status==3?(d(),v("span",ie,[e(n,{size:20,onClick:D=>F(l.row)},{default:t(()=>[e(A)]),_:2},1032,["onClick"])])):g("",!0)]),_:1})]),_:1},8,["data"]),e(O,{modelValue:i(p),"onUpdate:modelValue":_[0]||(_[0]=l=>Z(p)?p.value=l:p=l)},{default:t(()=>[e(se,{ref_key:"dialogRef",ref:w,onOnCreate:y},null,512)]),_:1},8,["modelValue"])])}}});export{pe as default};
