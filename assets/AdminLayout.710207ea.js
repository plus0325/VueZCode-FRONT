import{az as q,aA as F,a4 as U,n as b,a as H,y as Z,aB as J,aC as K,aD as G,aE as j,aF as Q,B as ee,F as te,aG as ae,J as ne,K as k,aH as oe,aI as le,aJ as ie,aK as ue,m as re,aL as se,q as W,a3 as ce,aM as ve,z as de,N as $,d as u,X as me,aN as he,W as Y,ac as fe,aw as ge,b as we,o as ye,c as be,w as C,aO as _e,aP as D,ay as R,a2 as O,ak as Ee,V as Me}from"./index.7c3a01de.js";const Te=100,xe=20;function X(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let d=e.length-1;d>0;d--){if(e[d].t===e[d-1].t)continue;const t=X(s),h=(e[d].d-e[d-1].d)/(e[d].t-e[d-1].t);s+=(h-t)*Math.abs(h),d===e.length-1&&(s*=.5)}return X(s)*1e3}function Be(){const e={};function s(h){Array.from(h.changedTouches).forEach(a=>{var r;((r=e[a.identifier])!=null?r:e[a.identifier]=new q(xe)).push([h.timeStamp,a])})}function d(h){Array.from(h.changedTouches).forEach(a=>{delete e[a.identifier]})}function t(h){var a;const r=(a=e[h])==null?void 0:a.values().reverse();if(!r)throw new Error(`No samples for touch id ${h}`);const _=r[0],x=[],M=[];for(const c of r){if(_[0]-c[0]>Te)break;x.push({t:c[0],d:c[1].clientX}),M.push({t:c[0],d:c[1].clientY})}return{x:z(x),y:z(M),get direction(){const{x:c,y:f}=this,[l,m]=[Math.abs(c),Math.abs(f)];return l>m&&c>=0?"right":l>m&&c<=0?"left":m>l&&f>=0?"down":m>l&&f<=0?"up":Se()}}}return{addMovement:s,endTouch:d,getVelocity:t}}function Se(){throw new Error}function Ve(e){let{isActive:s,isTemporary:d,width:t,touchless:h,position:a}=e;F(()=>{window.addEventListener("touchstart",N,{passive:!0}),window.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})}),U(()=>{window.removeEventListener("touchstart",N),window.removeEventListener("touchmove",E),window.removeEventListener("touchend",V)});const r=b(()=>a.value!=="bottom"),{addMovement:_,endTouch:x,getVelocity:M}=Be();let c=!1;const f=H(!1),l=H(0),m=H(0);let S;function T(n,i){return(a.value==="left"?n:a.value==="right"?document.documentElement.clientWidth-n:a.value==="bottom"?document.documentElement.clientHeight-n:B())-(i?t.value:0)}function w(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const o=a.value==="left"?(n-m.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-n-m.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-n-m.value)/t.value:B();return i?Math.max(0,Math.min(1,o)):o}function N(n){if(h.value)return;const i=n.changedTouches[0].clientX,o=n.changedTouches[0].clientY,g=25,y=a.value==="left"?i<g:a.value==="right"?i>document.documentElement.clientWidth-g:a.value==="bottom"?o>document.documentElement.clientHeight-g:B(),v=s.value&&(a.value==="left"?i<t.value:a.value==="right"?i>document.documentElement.clientWidth-t.value:a.value==="bottom"?o>document.documentElement.clientHeight-t.value:B());(y||v||s.value&&d.value)&&(c=!0,S=[i,o],m.value=T(r.value?i:o,s.value),l.value=w(r.value?i:o),x(n),_(n))}function E(n){const i=n.changedTouches[0].clientX,o=n.changedTouches[0].clientY;if(c){if(!n.cancelable){c=!1;return}const y=Math.abs(i-S[0]),v=Math.abs(o-S[1]);(r.value?y>v&&y>3:v>y&&v>3)?(f.value=!0,c=!1):(r.value?v:y)>3&&(c=!1)}if(!f.value)return;n.preventDefault(),_(n);const g=w(r.value?i:o,!1);l.value=Math.max(0,Math.min(1,g)),g>1?m.value=T(r.value?i:o,!0):g<0&&(m.value=T(r.value?i:o,!1))}function V(n){if(c=!1,!f.value)return;_(n),f.value=!1;const i=M(n.changedTouches[0].identifier),o=Math.abs(i.x),g=Math.abs(i.y);(r.value?o>g&&o>400:g>o&&g>3)?s.value=i.direction===({left:"right",right:"left",bottom:"up"}[a.value]||B()):s.value=l.value>.5}const L=b(()=>f.value?{transform:a.value==="left"?`translateX(calc(-100% + ${l.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${l.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${l.value*t.value}px))`:B(),transition:"none"}:void 0);return{isDragging:f,dragProgress:l,dragStyles:L}}function B(){throw new Error}const ke=Z({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:72},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"left",validator:e=>["left","right","bottom"].includes(e)},...J(),...K(),...G(),...j(),...Q({tag:"nav"}),...ee()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:d,slots:t}=s;const{themeClasses:h}=te(e),{borderClasses:a}=ae(e),{backgroundColorClasses:r,backgroundColorStyles:_}=ne(k(e,"color")),{elevationClasses:x}=oe(e),{mobile:M}=le(),{roundedClasses:c}=ie(e),f=ue(),l=re(e,"modelValue",null,v=>!!v),m=H(!1),{ssrBootStyles:S}=se(),T=b(()=>e.rail&&e.expandOnHover&&m.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),w=b(()=>!e.permanent&&(M.value||e.temporary));e.disableResizeWatcher||W(w,v=>!e.permanent&&(l.value=!v)),!e.disableRouteWatcher&&f&&W(f.currentRoute,()=>w.value&&(l.value=!1)),W(()=>e.permanent,v=>{v&&(l.value=!0)}),ce(()=>{e.modelValue!=null||w.value||(l.value=e.permanent||!M.value)});const N=H(),{isDragging:E,dragProgress:V,dragStyles:L}=Ve({isActive:l,isTemporary:w,width:T,touchless:k(e,"touchless"),position:k(e,"location")}),n=b(()=>{const v=w.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):T.value;return E.value?v*V.value:v}),{layoutItemStyles:i,layoutRect:o,layoutItemScrimStyles:g}=ve({id:e.name,order:b(()=>parseInt(e.order,10)),position:k(e,"location"),layoutSize:n,elementSize:T,active:b(()=>l.value||E.value),disableTransitions:b(()=>E.value),absolute:k(e,"absolute")}),y=b(()=>({...E.value?{opacity:V.value*.2,transition:"none"}:void 0,...o.value?{left:$(o.value.left),right:$(o.value.right),top:$(o.value.top),bottom:$(o.value.bottom)}:void 0,...g.value}));return de(()=>{var v,P,p,I;const A=t.image||e.image;return u(Y,null,[u(e.tag,me({ref:N,onMouseenter:()=>m.value=!0,onMouseleave:()=>m.value=!1,class:["v-navigation-drawer",{"v-navigation-drawer--bottom":e.location==="bottom","v-navigation-drawer--end":e.location==="right","v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":m.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--start":e.location==="left","v-navigation-drawer--temporary":w.value,"v-navigation-drawer--active":l.value},h.value,r.value,a.value,x.value,c.value],style:[_.value,i.value,L.value,S.value]},d),{default:()=>[A&&u("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(v=t.image)==null?void 0:v.call(t,{image:e.image}):u("img",{src:e.image,alt:""},null)]),t.prepend&&u("div",{class:"v-navigation-drawer__prepend"},[(P=t.prepend)==null?void 0:P.call(t)]),u("div",{class:"v-navigation-drawer__content"},[(p=t.default)==null?void 0:p.call(t)]),t.append&&u("div",{class:"v-navigation-drawer__append"},[(I=t.append)==null?void 0:I.call(t)])]}),u(he,{name:"fade-transition"},{default:()=>[w.value&&(E.value||l.value)&&u("div",{class:"v-navigation-drawer__scrim",style:y.value,onClick:()=>l.value=!1},null)]})])}),{}}}),Re={__name:"AdminLayout",setup(e){const s=fe(),{avatar:d,account:t}=ge(s);return(h,a)=>{const r=we("router-view");return ye(),be(Y,null,[u(ke,{"expand-on-hover":"",rail:"",permanent:""},{default:C(()=>[u(D,null,{default:C(()=>[u(R,{"prepend-avatar":O(d),title:O(t)},null,8,["prepend-avatar","title"]),u(Ee),u(D,null,{default:C(()=>[u(R,{to:"/admin/products",title:"\u5546\u54C1\u7BA1\u7406","prepend-icon":"mdi-shopping"}),u(R,{to:"/admin/orders",title:"\u8A02\u55AE\u7BA1\u7406","prepend-icon":"mdi-format-list-checkbox"}),u(R,{to:"/admin/users/all",title:"\u6703\u54E1\u7BA1\u7406","prepend-icon":"mdi-account-check"}),u(R,{to:"/",title:"\u56DE\u524D\u53F0","prepend-icon":"mdi-home"})]),_:1})]),_:1})]),_:1}),u(_e,null,{default:C(()=>[u(Me,{fluid:"",class:"pa-10"},{default:C(()=>[u(r)]),_:1})]),_:1})],64)}}};export{Re as default};
