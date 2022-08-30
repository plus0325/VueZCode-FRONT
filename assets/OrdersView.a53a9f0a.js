import{ac as R,ad as T,aQ as O,r as z,q as B,b as D,o as l,c as n,d as t,w as e,V as q,ak as L,S as N,C as P,e as x,f as A,g,ap as V,aR as H,J as _,aS as M,k as o,ao as r,aT as j,aU as E,ag as a,a5 as b,an as v,am as c,R as h,ae as G,af as U}from"./index.4784562d.js";const y=d=>(G("data-v-2bd51bba"),d=d(),U(),d),W={id:"orders"},F=o("Orders"),J=y(()=>a("thead",null,[a("tr",{elevation:"24"},[a("th",null,"\u8A02\u55AE\u7DE8\u865F"),a("th",null,"\u8A02\u55AE\u65E5\u671F"),a("th",null,"\u8A02\u55AE\u91D1\u984D"),a("th",null,"\u8CFC\u8CB7\u5546\u54C1"),a("th",null,"\u8A02\u55AE\u72C0\u614B")])],-1)),Q={key:0},Y=o("mdi-comment-outline"),K=o("\u8A02\u55AE\u78BA\u8A8D\u4E2D "),X={key:1},Z=o("mdi-comment-processing-outline"),$=o("\u5546\u54C1\u51FA\u8CA8\u4E2D "),tt={key:2},et=o("mdi-comment-check-outline"),at=o("\u8A02\u55AE\u5DF2\u5B8C\u6210 "),st={key:3},ot=o("mdi-comment-remove-outline"),lt=o("\u8A02\u55AE\u5DF2\u53D6\u6D88 "),nt={key:0},rt=y(()=>a("td",{colspan:"4"},[a("h3",{class:"text-center"},"\u6C92\u6709\u8A02\u55AE")],-1)),ct=[rt],dt={__name:"OrdersView",setup(d){const w=T(),{avatar:k,account:S,email:C}=O(w),m=z([]),I=B(()=>m.slice(0).reverse());return(async()=>{try{const{data:i}=await L.get("/orders");m.push(...i.result.map(u=>(u.totalPrice=u.products.reduce((p,s)=>p+s.product.price*s.quantity,0),u)))}catch(i){console.log(i),N.fire({title:"ERROR //\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(i,u)=>{const p=D("TitlePart");return l(),n("div",W,[t(P),t(q,null,{default:e(()=>[t(x,null,{default:e(()=>[t(p,null,{text:e(()=>[F]),_:1})]),_:1}),t(A,{class:"justify-center w-100 pt-5"},{default:e(()=>[t(x,{cols:"12",md:"3"},{default:e(()=>[t(g,{class:"text-center mx-auto","max-width":"100%","max-height":"250",tile:"",rounded:"xl"},{default:e(()=>[t(V,{height:"200",cover:"",src:"https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",class:"pa-5",gradient:"to bottom, rgba(0,0,0,.5), rgba(0,0,0,1)"},{default:e(()=>[t(H,{color:"green",size:"100"},{default:e(()=>[t(V,{src:_(k),height:"100%",cover:""},null,8,["src"])]),_:1}),t(M,{class:"pa-2"},{default:e(()=>[o(r(_(S)),1)]),_:1}),t(j,null,{default:e(()=>[o(r(_(C)),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(x,{cols:"12",md:"9"},{default:e(()=>[t(g,{elevation:"24"},{default:e(()=>[t(E,null,{default:e(()=>[J,a("tbody",null,[(l(!0),n(b,null,v(_(I),s=>(l(),n("tr",{key:s._id},[a("td",null,r(s._id),1),a("td",null,r(new Date(s.date).toLocaleDateString()),1),a("td",null,r(s.totalPrice),1),a("td",null,[a("ul",null,[(l(!0),n(b,null,v(s.products,f=>(l(),n("li",{key:f._id},r(f.product.name)+" x "+r(f.quantity),1))),128))])]),s.tone===0?(l(),n("td",Q,[t(h,{size:"x-large",start:"",color:"red"},{default:e(()=>[Y]),_:1}),K])):c("",!0),s.tone===1?(l(),n("td",X,[t(h,{size:"x-large",start:"",color:"yellow"},{default:e(()=>[Z]),_:1}),$])):c("",!0),s.tone===2?(l(),n("td",tt,[t(h,{size:"x-large",start:"",color:"green"},{default:e(()=>[et]),_:1}),at])):c("",!0),s.tone===3?(l(),n("td",st,[t(h,{size:"x-large",start:"",color:"blue"},{default:e(()=>[ot]),_:1}),lt])):c("",!0)]))),128)),m.length===0?(l(),n("tr",nt,ct)):c("",!0)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}};var _t=R(dt,[["__scopeId","data-v-2bd51bba"]]);export{_t as default};