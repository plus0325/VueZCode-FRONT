import{P as O,at as W,D as q,bo as K,n as F,aB as U,bt as j,a as R,bu as Z,s as C,z as M,d as o,a6 as G,aP as H,ab as B,bv as J,y as Q,N as k,b4 as X,O as Y,au as ee,ax as ae,bi as te,ay as le,B as ne,az as ie,bl as se,bw as ue,W as re,aN as E,bx as oe,q as p,Z as I,by as $,j as P,bz as z}from"./index.4784562d.js";const de=O()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...W({width:"auto"}),...q({transition:{component:K}})},emits:{"update:modelValue":e=>!0},setup(e,x){let{attrs:u,slots:h}=x;const t=F(e,"modelValue"),{dimensionStyles:g}=U(e),{scopeId:_}=j(),r=R();function S(v){var y,n;const s=v.relatedTarget,c=v.target;if(s!==c&&(y=r.value)!=null&&y.contentEl&&(n=r.value)!=null&&n.isTop&&![document,r.value.contentEl].includes(c)&&!r.value.contentEl.contains(c)){const L=[...r.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(D=>!D.hasAttribute("disabled"));if(!L.length)return;const b=L[0],A=L[L.length-1];s===b?A.focus():b.focus()}}return Z&&C(()=>t.value&&e.retainFocus,v=>{v?document.addEventListener("focusin",S):document.removeEventListener("focusin",S)},{immediate:!0}),C(t,async v=>{if(await B(),v){var y;(y=r.value.contentEl)==null||y.focus({preventScroll:!0})}else{var n;(n=r.value.activatorEl)==null||n.focus({preventScroll:!0})}}),M(()=>o(H,G({modelValue:t.value,"onUpdate:modelValue":v=>t.value=v,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}],style:g.value,transition:e.transition,ref:r,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(t.value)},"z-index":2400},_,u),{default:h.default,activator:h.activator})),{}}});function ve(){const e=R([]);J(()=>e.value=[]);function x(u,h){e.value[h]=u}return{refs:e,updateRef:x}}const fe=Q({name:"VPagination",props:{start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:k,default:"$first"},prevIcon:{type:k,default:"$prev"},nextIcon:{type:k,default:"$next"},lastIcon:{type:k,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...X(),...Y(),...ee(),...ae(),...te(),...le({tag:"nav"}),...ne(),...ie({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,x){let{slots:u,emit:h}=x;const t=F(e,"modelValue"),{t:g,n:_}=se(),{isRtl:r}=ue(),{themeClasses:S}=re(e),v=R(-1);E(void 0,{scoped:!0});const{resizeRef:y}=oe(a=>{if(!a.length)return;const{target:l,contentRect:i}=a[0],d=l.querySelector(".v-pagination__list > *");if(!d)return;const f=i.width,V=d.getBoundingClientRect().width+10;v.value=Math.max(0,Math.floor((f-96)/V))}),n=p(()=>parseInt(e.length,10)),s=p(()=>parseInt(e.start,10)),c=p(()=>{var a;return e.totalVisible?Math.min(parseInt((a=e.totalVisible)!=null?a:"",10),n.value):v.value>=0?v.value:n.value}),L=p(()=>{if(n.value<=0)return[];if(c.value<=2)return[t.value];if(n.value<=c.value)return $(n.value,s.value);const a=c.value%2===0,l=a?c.value/2:Math.floor(c.value/2),i=a?l:l+1,d=n.value-l;if(i-t.value>=0)return[...$(Math.max(1,c.value-1),s.value),e.ellipsis,n.value];if(t.value-d>=0){const f=c.value-1,V=n.value-f+s.value;return[s.value,e.ellipsis,...$(f,V)]}else{const f=Math.max(1,c.value-3),V=f===1?t.value:t.value-Math.ceil(f/2)+s.value;return[s.value,e.ellipsis,...$(f,V),e.ellipsis,n.value]}});function b(a,l,i){a.preventDefault(),t.value=l,i&&h(i,l)}const{refs:A,updateRef:D}=ve();E({VBtn:{border:I(e,"border"),density:I(e,"density"),size:I(e,"size"),variant:I(e,"variant")}});const N=p(()=>L.value.map((a,l)=>{const i=d=>D(d,l);if(typeof a=="string")return{isActive:!1,page:a,props:{ref:i,ellipsis:!0,icon:!0,disabled:!0}};{const d=a===t.value;return{isActive:d,page:_(a),props:{ref:i,ellipsis:!1,icon:!0,disabled:!!e.disabled||e.length<2,elevation:e.elevation,rounded:e.rounded,color:d?e.color:void 0,ariaCurrent:d,ariaLabel:g(d?e.currentPageAriaLabel:e.pageAriaLabel,l+1),onClick:f=>b(f,a)}}}})),m=p(()=>{const a=!!e.disabled||t.value<=s.value,l=!!e.disabled||t.value>=s.value+n.value-1;return{first:e.showFirstLastPage?{icon:r.value?e.lastIcon:e.firstIcon,onClick:i=>b(i,s.value,"first"),disabled:a,ariaLabel:g(e.firstAriaLabel),ariaDisabled:a}:void 0,prev:{icon:r.value?e.nextIcon:e.prevIcon,onClick:i=>b(i,t.value-1,"prev"),disabled:a,ariaLabel:g(e.previousAriaLabel),ariaDisabled:a},next:{icon:r.value?e.prevIcon:e.nextIcon,onClick:i=>b(i,t.value+1,"next"),disabled:l,ariaLabel:g(e.nextAriaLabel),ariaDisabled:l},last:e.showFirstLastPage?{icon:r.value?e.firstIcon:e.lastIcon,onClick:i=>b(i,s.value+n.value-1,"last"),disabled:l,ariaLabel:g(e.lastAriaLabel),ariaDisabled:l}:void 0}});function w(){var a;const l=t.value-s.value;(a=A.value[l])==null||a.$el.focus()}function T(a){a.key===z.left&&!e.disabled&&t.value>e.start?(t.value=t.value-1,B(w)):a.key===z.right&&!e.disabled&&t.value<s.value+n.value-1&&(t.value=t.value+1,B(w))}return M(()=>o(e.tag,{ref:y,class:["v-pagination",S.value],role:"navigation","aria-label":g(e.ariaLabel),onKeydown:T,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[u.first?u.first(m.value.first):o(P,m.value.first,null)]),o("li",{class:"v-pagination__prev","data-test":"v-pagination-prev"},[u.prev?u.prev(m.value.prev):o(P,m.value.prev,null)]),N.value.map((a,l)=>o("li",{key:`${l}_${a.page}`,class:["v-pagination__item",{"v-pagination__item--is-active":a.isActive}],"data-test":"v-pagination-item"},[u.item?u.item(a):o(P,a.props,{default:()=>[a.page]})])),o("li",{class:"v-pagination__next","data-test":"v-pagination-next"},[u.next?u.next(m.value.next):o(P,m.value.next,null)]),e.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[u.last?u.last(m.value.last):o(P,m.value.last,null)])])]})),{}}});export{fe as V,de as a};
