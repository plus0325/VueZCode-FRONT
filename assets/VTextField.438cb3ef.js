import{y as X,z as T,d as l,p as H,C as K,m as Y,n as s,I as E,B as ue,D as de,E as q,F as ce,G as ve,H as G,a as P,J as fe,K as ge,L as Q,q as Z,M as me,N as ye,O as he,P as pe,Q as N,R as be,T as J,U as ee,W as j,X as z,Y as le,Z as ne,$ as ae,a0 as O,a1 as te,a2 as Ce,a3 as ke,a4 as Ve,a5 as _e,a6 as xe,a7 as Ie,a8 as $e,a9 as Se,aa as Pe,A as Be,ab as Fe}from"./index.7c3a01de.js";import{a as De,u as Me}from"./VLabel.0b7dd55b.js";const U=X({name:"VFieldLabel",props:{floating:Boolean},setup(e,u){let{slots:t}=u;return T(()=>l(De,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},t)),{}}}),Ae=H({focused:Boolean},"focus");function Re(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();const t=Y(e,"focused"),a=s(()=>({[`${u}--focused`]:t.value}));function n(){t.value=!0}function i(){t.value=!1}return{focusClasses:a,isFocused:t,focus:n,blur:i}}const Te=["underlined","outlined","filled","solo","plain"],ie=H({appendInnerIcon:E,bgColor:String,clearable:Boolean,clearIcon:{type:E,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:E,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Te.includes(e)},...ue(),...de()},"v-field"),se=q()({name:"VField",inheritAttrs:!1,props:{id:String,...Ae(),...ie()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:t,emit:a,slots:n}=u;const{themeClasses:i}=ce(e),{loaderClasses:g}=ve(e),{focusClasses:m,isFocused:k,focus:$,blur:S}=Re(e),d=s(()=>e.dirty||e.active),c=s(()=>!e.singleLine&&!!(e.label||n.label)),B=G(),F=s(()=>e.id||`input-${B}`),h=P(),p=P(),V=P(),{backgroundColorClasses:r,backgroundColorStyles:o}=fe(ge(e,"bgColor")),{textColorClasses:v,textColorStyles:D}=Q(s(()=>d.value&&k.value&&!e.error&&!e.disabled?e.color:void 0));Z(d,f=>{if(c.value){const b=h.value.$el,_=p.value.$el,C=me(b),x=_.getBoundingClientRect(),R=x.x-C.x,M=x.y-C.y-(C.height/2-x.height/2),I=x.width/.75,w=Math.abs(I-C.width)>1?{maxWidth:ye(I)}:void 0,W=parseFloat(getComputedStyle(b).transitionDuration)*1e3,L=parseFloat(getComputedStyle(_).getPropertyValue("--v-field-label-scale"));b.style.visibility="visible",_.style.visibility="hidden",b.animate([{transform:"translate(0)"},{transform:`translate(${R}px, ${M}px) scale(${L})`,...w}],{duration:W,easing:he,direction:f?"normal":"reverse"}).finished.then(()=>{b.style.removeProperty("visibility"),_.style.removeProperty("visibility")})}},{flush:"post"});const y=s(()=>({isActive:d,isFocused:k,controlRef:V,blur:S,focus:$}));function A(f){f.target!==document.activeElement&&f.preventDefault(),a("click:control",f)}return T(()=>{var f,b,_;const C=e.variant==="outlined",x=n["prepend-inner"]||e.prependInnerIcon,R=!!(e.clearable||n.clear),M=!!(n["append-inner"]||e.appendInnerIcon||R),I=n.label?n.label({label:e.label,props:{for:F.value}}):e.label;return l("div",z({class:["v-field",{"v-field--active":d.value,"v-field--appended":M,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":x,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--has-label":!!I,[`v-field--variant-${e.variant}`]:!0},i.value,r.value,m.value,g.value],style:[o.value,D.value],onClick:A},t),[l("div",{class:"v-field__overlay"},null),l(pe,{name:"v-field",active:e.loading,color:e.error?"error":e.color},{default:n.loader}),x&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(N,{key:"prepend-icon",onClick:t["onClick:prependInner"],icon:e.prependInnerIcon},null),(f=n["prepend-inner"])==null?void 0:f.call(n,y.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&c.value&&l(U,{key:"floating-label",ref:p,class:[v.value],floating:!0},{default:()=>[I]}),l(U,{ref:h,for:F.value},{default:()=>[I]}),(b=n.default)==null?void 0:b.call(n,{...y.value,props:{id:F.value,class:"v-field__input"},focus:$,blur:S})]),R&&l(be,{key:"clear"},{default:()=>[J(l("div",{class:"v-field__clearable"},[n.clear?n.clear():l(N,{onClick:w=>a("click:clear",w),icon:e.clearIcon},null)]),[[ee,e.dirty]])]}),M&&l("div",{key:"append",class:"v-field__append-inner"},[(_=n["append-inner"])==null?void 0:_.call(n,y.value),e.appendInnerIcon&&l(N,{key:"append-icon",onClick:t["onClick:appendInner"],icon:e.appendInnerIcon},null)]),l("div",{class:["v-field__outline",v.value]},[C&&l(j,null,[l("div",{class:"v-field__outline__start"},null),c.value&&l("div",{class:"v-field__outline__notch"},[l(U,{ref:p,floating:!0},{default:()=>[I]})]),l("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&c.value&&l(U,{ref:p,floating:!0},{default:()=>[I]})])])}),{controlRef:V}}});function we(e){return le(e,Object.keys(se.props))}const Le=X({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ne({transition:{component:ae,leaveAbsolute:!0,group:!0}})},setup(e,u){let{slots:t}=u;const a=s(()=>O(e.messages)),{textColorClasses:n,textColorStyles:i}=Q(s(()=>e.color));return T(()=>l(te,{transition:e.transition,tag:"div",class:["v-messages",n.value],style:i.value},{default:()=>[e.active&&a.value.map((g,m)=>l("div",{class:"v-messages__message",key:`${m}-${a.value}`},[t.message?t.message({message:g}):g]))]})),{}}}),Ee=H({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validationValue:null});function Ne(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K(),t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:G();const a=Y(e,"modelValue"),n=s(()=>{var o;return(o=e.validationValue)!=null?o:a.value}),i=Me(),g=P([]),m=P(!0),k=s(()=>!!(O(a.value===""?null:a.value).length||O(n.value===""?null:n.value).length)),$=s(()=>!!(e.disabled||i!=null&&i.isDisabled.value)),S=s(()=>!!(e.readonly||i!=null&&i.isReadonly.value)),d=s(()=>e.errorMessages.length?O(e.errorMessages):g.value),c=s(()=>e.error||d.value.length?!1:e.rules.length&&m.value?null:!0),B=P(!1),F=s(()=>({[`${u}--error`]:c.value===!1,[`${u}--dirty`]:k.value,[`${u}--disabled`]:$.value,[`${u}--readonly`]:S.value})),h=s(()=>{var o;return(o=e.name)!=null?o:Ce(t)});ke(()=>{i==null||i.register(h.value,r,p,V,c)}),Ve(()=>{i==null||i.unregister(h.value)}),Z(n,()=>{n.value!=null&&r()});function p(){V(),a.value=null}function V(){m.value=!0,g.value=[]}async function r(){const o=[];B.value=!0;for(const v of e.rules){if(o.length>=(e.maxErrors||1))break;const y=await(typeof v=="function"?v:()=>v)(n.value);if(y!==!0){if(typeof y!="string"){console.warn(`${y} is not a valid value. Rule functions must return boolean true or a string.`);continue}o.push(y)}}return g.value=o,B.value=!1,m.value=!1,g.value}return{errorMessages:d,isDirty:k,isDisabled:$,isReadonly:S,isPristine:m,isValid:c,isValidating:B,reset:p,resetValidation:V,validate:r,validationClasses:F}}const re=H({id:String,appendIcon:E,prependIcon:E,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},..._e(),...Ee()}),oe=q()({name:"VInput",props:{...re()},emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:t,slots:a,emit:n}=u;const{densityClasses:i}=xe(e),g=G(),m=s(()=>e.id||`input-${g}`),{errorMessages:k,isDirty:$,isDisabled:S,isReadonly:d,isPristine:c,isValid:B,isValidating:F,reset:h,resetValidation:p,validate:V,validationClasses:r}=Ne(e,"v-input",m),o=s(()=>({id:m,isDirty:$,isDisabled:S,isReadonly:d,isPristine:c,isValid:B,isValidating:F,reset:h,resetValidation:p,validate:V}));return T(()=>{var v,D,y,A,f;const b=!!(a.prepend||e.prependIcon),_=!!(a.append||e.appendIcon),C=!!((v=e.messages)!=null&&v.length||k.value.length),x=!e.hideDetails||e.hideDetails==="auto"&&C;return l("div",{class:["v-input",`v-input--${e.direction}`,i.value,r.value]},[b&&l("div",{key:"prepend",class:"v-input__prepend"},[e.prependIcon&&l(N,{key:"prepend-icon",onClick:t["onClick:prepend"],icon:e.prependIcon},null),(D=a.prepend)==null?void 0:D.call(a,o.value)]),a.default&&l("div",{class:"v-input__control"},[(y=a.default)==null?void 0:y.call(a,o.value)]),_&&l("div",{key:"append",class:"v-input__append"},[(A=a.append)==null?void 0:A.call(a,o.value),e.appendIcon&&l(N,{key:"append-icon",onClick:t["onClick:append"],icon:e.appendIcon},null)]),x&&l("div",{class:"v-input__details"},[l(Le,{active:C,messages:k.value.length>0?k.value:e.messages},{message:a.message}),(f=a.details)==null?void 0:f.call(a,o.value)])])}),{reset:h,resetValidation:p,validate:V}}});function Ue(e){return le(e,Object.keys(oe.props))}const ze=X({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ne({transition:{component:ae}})},setup(e,u){let{slots:t}=u;const a=s(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return T(()=>l(te,{transition:e.transition},{default:()=>[J(l("div",{class:"v-counter"},[t.default?t.default({counter:a.value,max:e.max,value:e.value}):a.value]),[[ee,e.active]])]})),{}}}),Oe=["color","file","time","date","datetime-local","week","month"],je=q()({name:"VTextField",directives:{Intersect:Ie},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...re(),...ie()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"click:input":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:t,emit:a,slots:n}=u;const i=Y(e,"modelValue"),g=s(()=>{var r;return typeof e.counterValue=="function"?e.counterValue(i.value):((r=i.value)!=null?r:"").toString().length}),m=s(()=>{if(t.maxlength)return t.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function k(r,o){var v,D;!e.autofocus||!r||(v=o[0].target)==null||(D=v.focus)==null||D.call(v)}const $=P(),S=P(),d=P(!1),c=P(),B=s(()=>Oe.includes(e.type)||e.persistentPlaceholder||d.value),F=s(()=>e.messages.length?e.messages:d.value||e.persistentHint?e.hint:"");function h(){if(c.value!==document.activeElement){var r;(r=c.value)==null||r.focus()}d.value||(d.value=!0)}function p(r){h(),a("click:control",r)}function V(r){r.stopPropagation(),h(),Fe(()=>{i.value="",a("click:clear",r)})}return T(()=>{const r=!!(n.counter||e.counter||e.counterValue),[o,v]=$e(t),[{modelValue:D,...y}]=Ue(e),[A]=we(e);return l(oe,z({ref:$,modelValue:i.value,"onUpdate:modelValue":f=>i.value=f,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":t["onClick:prepend"],"onClick:append":t["onClick:append"]},o,y,{messages:F.value}),{...n,default:f=>{let{id:b,isDisabled:_,isDirty:C,isReadonly:x,isValid:R}=f;return l(se,z({ref:S,onMousedown:M=>{M.target!==c.value&&M.preventDefault()},"onClick:control":p,"onClick:clear":V,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:"textbox"},A,{id:b.value,active:B.value||C.value,dirty:C.value||e.dirty,focused:d.value,error:R.value===!1}),{...n,default:M=>{var I;let{props:{class:w,...W}}=M;return l(j,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),l("div",{class:w,onClick:L=>a("click:input",L),"data-no-activator":""},[(I=n.default)==null?void 0:I.call(n),J(l("input",z({ref:c,"onUpdate:modelValue":L=>i.value=L,autofocus:e.autofocus,readonly:x.value,disabled:_.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:h,onBlur:()=>d.value=!1},W,v),null),[[Se,i.value],[Pe("intersect"),{handler:k},null,{once:!0}]])]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?()=>l(j,null,[l("span",null,null),l(ze,{active:e.persistentCounter||d.value,value:g.value,max:m.value},n.counter)]):void 0})}),Be({},$,S,c)}});export{je as V,oe as a,ie as b,we as c,se as d,ze as e,Ue as f,re as m};
