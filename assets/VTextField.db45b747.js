import{x as X,y as A,d as l,p as Y,G as J,m as j,n as c,L as H,A as K,T as ee,O as q,U as le,W as ne,H as te,a as k,X as ae,Y as ie,F as oe,q as re,Z as se,_ as ue,$ as ce,a0 as de,Q as O,a1 as fe,a2 as z,a3 as G,a4 as W,a5 as w,R as ve,B as me,D as ge,M as ye,a6 as be,a7 as Ce,a8 as ke,a9 as xe,z as he,aa as _e}from"./index.02bdd05e.js";import{a as Ie,m as Ve,f as pe,b as Fe}from"./VInput.ec566b9c.js";const R=X({name:"VFieldLabel",props:{floating:Boolean},setup(e,v){let{slots:t}=v;return A(()=>l(Ie,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},t)),{}}}),$e=Y({focused:Boolean},"focus");function Se(e){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:J();const t=j(e,"focused"),r=c(()=>({[`${v}--focused`]:t.value}));function n(){t.value=!0}function s(){t.value=!1}return{focusClasses:r,isFocused:t,focus:n,blur:s}}const Pe=["underlined","outlined","filled","solo","plain"],Q=Y({appendInnerIcon:H,bgColor:String,clearable:Boolean,clearIcon:{type:H,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:H,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Pe.includes(e)},...K(),...ee()},"v-field"),Z=q()({name:"VField",inheritAttrs:!1,props:{id:String,...$e(),...Q()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{attrs:t,emit:r,slots:n}=v;const{themeClasses:s}=le(e),{loaderClasses:D}=ne(e),{focusClasses:M,isFocused:T,focus:I,blur:V}=Se(e),i=c(()=>e.dirty||e.active),d=c(()=>!e.singleLine&&!!(e.label||n.label)),E=te(),p=c(()=>e.id||`input-${E}`),x=k(),h=k(),L=k(),{backgroundColorClasses:a,backgroundColorStyles:F}=ae(ie(e,"bgColor")),{textColorClasses:C,textColorStyles:$}=oe(c(()=>i.value&&T.value&&!e.error&&!e.disabled?e.color:void 0));re(i,o=>{if(d.value){const f=x.value.$el,m=h.value.$el,g=se(f),y=m.getBoundingClientRect(),_=y.x-g.x,b=y.y-g.y-(g.height/2-y.height/2),u=y.width/.75,P=Math.abs(u-g.width)>1?{maxWidth:ue(u)}:void 0,U=parseFloat(getComputedStyle(f).transitionDuration)*1e3,B=parseFloat(getComputedStyle(m).getPropertyValue("--v-field-label-scale"));f.style.visibility="visible",m.style.visibility="hidden",f.animate([{transform:"translate(0)"},{transform:`translate(${_}px, ${b}px) scale(${B})`,...P}],{duration:U,easing:ce,direction:o?"normal":"reverse"}).finished.then(()=>{f.style.removeProperty("visibility"),m.style.removeProperty("visibility")})}},{flush:"post"});const S=c(()=>({isActive:i,isFocused:T,controlRef:L,blur:V,focus:I}));function N(o){o.target!==document.activeElement&&o.preventDefault(),r("click:control",o)}return A(()=>{var o,f,m;const g=e.variant==="outlined",y=n["prepend-inner"]||e.prependInnerIcon,_=!!(e.clearable||n.clear),b=!!(n["append-inner"]||e.appendInnerIcon||_),u=n.label?n.label({label:e.label,props:{for:p.value}}):e.label;return l("div",w({class:["v-field",{"v-field--active":i.value,"v-field--appended":b,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":y,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--has-label":!!u,[`v-field--variant-${e.variant}`]:!0},s.value,a.value,M.value,D.value],style:[F.value,$.value],onClick:N},t),[l("div",{class:"v-field__overlay"},null),l(de,{name:"v-field",active:e.loading,color:e.error?"error":e.color},{default:n.loader}),y&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(O,{key:"prepend-icon",onClick:t["onClick:prependInner"],icon:e.prependInnerIcon},null),(o=n["prepend-inner"])==null?void 0:o.call(n,S.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&d.value&&l(R,{key:"floating-label",ref:h,class:[C.value],floating:!0},{default:()=>[u]}),l(R,{ref:x,for:p.value},{default:()=>[u]}),(f=n.default)==null?void 0:f.call(n,{...S.value,props:{id:p.value,class:"v-field__input"},focus:I,blur:V})]),_&&l(fe,{key:"clear"},{default:()=>[z(l("div",{class:"v-field__clearable"},[n.clear?n.clear():l(O,{onClick:P=>r("click:clear",P),icon:e.clearIcon},null)]),[[G,e.dirty]])]}),b&&l("div",{key:"append",class:"v-field__append-inner"},[(m=n["append-inner"])==null?void 0:m.call(n,S.value),e.appendInnerIcon&&l(O,{key:"append-icon",onClick:t["onClick:appendInner"],icon:e.appendInnerIcon},null)]),l("div",{class:["v-field__outline",C.value]},[g&&l(W,null,[l("div",{class:"v-field__outline__start"},null),d.value&&l("div",{class:"v-field__outline__notch"},[l(R,{ref:h,floating:!0},{default:()=>[u]})]),l("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&d.value&&l(R,{ref:h,floating:!0},{default:()=>[u]})])])}),{controlRef:L}}});function Be(e){return ve(e,Object.keys(Z.props))}const Te=X({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...me({transition:{component:ge}})},setup(e,v){let{slots:t}=v;const r=c(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return A(()=>l(ye,{transition:e.transition},{default:()=>[z(l("div",{class:"v-counter"},[t.default?t.default({counter:r.value,max:e.max,value:e.value}):r.value]),[[G,e.active]])]})),{}}}),Le=["color","file","time","date","datetime-local","week","month"],Ae=q()({name:"VTextField",directives:{Intersect:be},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...Ve(),...Q()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"click:input":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{attrs:t,emit:r,slots:n}=v;const s=j(e,"modelValue"),D=c(()=>{var a;return typeof e.counterValue=="function"?e.counterValue(s.value):((a=s.value)!=null?a:"").toString().length}),M=c(()=>{if(t.maxlength)return t.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function T(a,F){var C,$;!e.autofocus||!a||(C=F[0].target)==null||($=C.focus)==null||$.call(C)}const I=k(),V=k(),i=k(!1),d=k(),E=c(()=>Le.includes(e.type)||e.persistentPlaceholder||i.value),p=c(()=>e.messages.length?e.messages:i.value||e.persistentHint?e.hint:"");function x(){if(d.value!==document.activeElement){var a;(a=d.value)==null||a.focus()}i.value||(i.value=!0)}function h(a){x(),r("click:control",a)}function L(a){a.stopPropagation(),x(),_e(()=>{s.value="",r("click:clear",a)})}return A(()=>{const a=!!(n.counter||e.counter||e.counterValue),[F,C]=Ce(t),[{modelValue:$,...S}]=pe(e),[N]=Be(e);return l(Fe,w({ref:I,modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":t["onClick:prepend"],"onClick:append":t["onClick:append"]},F,S,{messages:p.value}),{...n,default:o=>{let{id:f,isDisabled:m,isDirty:g,isReadonly:y,isValid:_}=o;return l(Z,w({ref:V,onMousedown:b=>{b.target!==d.value&&b.preventDefault()},"onClick:control":h,"onClick:clear":L,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:"textbox"},N,{id:f.value,active:E.value||g.value,dirty:g.value||e.dirty,focused:i.value,error:_.value===!1}),{...n,default:b=>{var u;let{props:{class:P,...U}}=b;return l(W,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),l("div",{class:P,onClick:B=>r("click:input",B),"data-no-activator":""},[(u=n.default)==null?void 0:u.call(n),z(l("input",w({ref:d,"onUpdate:modelValue":B=>s.value=B,autofocus:e.autofocus,readonly:y.value,disabled:m.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:x,onBlur:()=>i.value=!1},U,C),null),[[ke,s.value],[xe("intersect"),{handler:T},null,{once:!0}]])]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:a?()=>l(W,null,[l("span",null,null),l(Te,{active:e.persistentCounter||i.value,value:D.value,max:M.value},n.counter)]):void 0})}),he({},I,V,d)}});export{Ae as V,Z as a,Te as b,Be as f,Q as m};
