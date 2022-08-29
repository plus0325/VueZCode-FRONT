import{x as M,L as b,m as R,H as w,n as i,s as T,Y as f,y as G,d,p as j,ag as N,A as q,N as H,O as Q,ah as Y,a as g,a7 as z,a2 as F,a9 as J,Q as K,a5 as h,a8 as W,R as X,v as Z,P as ee,E as p,F as le,ai as D}from"./index.02bdd05e.js";import{a as ae}from"./VInput.ec566b9c.js";const O=Symbol.for("vuetify:selection-control-group"),re=M({name:"VSelectionControlGroup",props:{disabled:Boolean,id:String,inline:Boolean,name:String,falseIcon:b,trueIcon:b,multiple:{type:Boolean,default:null},readonly:Boolean,type:String,modelValue:null},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:v}=l;const a=R(e,"modelValue"),r=w(),n=i(()=>e.id||`v-selection-control-group-${r}`),c=i(()=>e.name||n.value);return T(O,{disabled:f(e,"disabled"),inline:f(e,"inline"),modelValue:a,multiple:i(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),name:c,falseIcon:f(e,"falseIcon"),trueIcon:f(e,"trueIcon"),readonly:f(e,"readonly"),type:f(e,"type")}),G(()=>{var t;return d("div",{class:"v-selection-control-group","aria-labelled-by":e.type==="radio"?n.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(t=v.default)==null?void 0:t.call(v)])}),{}}}),ne=j({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,label:String,falseIcon:b,trueIcon:b,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,trueValue:null,falseValue:null,modelValue:null,type:String,value:null,valueComparator:{type:Function,default:N},...q(),...H()});function te(e){const l=Z(O,void 0),{densityClasses:v}=ee(e),a=R(e,"modelValue"),r=i(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),n=i(()=>e.falseValue!==void 0?e.falseValue:!1),c=i(()=>(l==null?void 0:l.multiple.value)||!!e.multiple||e.multiple==null&&Array.isArray(a.value)),t=i({get(){const u=l?l.modelValue.value:a.value;return c.value?u.some(o=>e.valueComparator(o,r.value)):e.valueComparator(u,r.value)},set(u){if(e.readonly)return;const o=u?r.value:n.value;let s=o;c.value&&(s=u?[...p(a.value),o]:p(a.value).filter(m=>!e.valueComparator(m,r.value))),l?l.modelValue.value=s:a.value=s}}),{textColorClasses:y,textColorStyles:C}=le(i(()=>t.value&&!e.error&&!e.disabled?e.color:void 0)),S=i(()=>{var u,o;return t.value?(u=l==null?void 0:l.trueIcon.value)!=null?u:e.trueIcon:(o=l==null?void 0:l.falseIcon.value)!=null?o:e.falseIcon});return{group:l,densityClasses:v,trueValue:r,falseValue:n,model:t,textColorClasses:y,textColorStyles:C,icon:S}}const oe=Q()({name:"VSelectionControl",directives:{Ripple:Y},inheritAttrs:!1,props:ne(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:v,slots:a}=l;const{densityClasses:r,group:n,icon:c,model:t,textColorClasses:y,textColorStyles:C,trueValue:S}=te(e),u=w(),o=i(()=>e.id||`input-${u}`),s=g(!1),m=g(!1),I=g();function $(V){s.value=!0,(!D||D&&V.target.matches(":focus-visible"))&&(m.value=!0)}function B(){s.value=!1,m.value=!1}return G(()=>{var V,_,A,x;const P=a.label?a.label({label:e.label,props:{for:o.value}}):e.label,k=(V=n==null?void 0:n.type.value)!=null?V:e.type,[U,E]=z(v);return d("div",h({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":(n==null?void 0:n.inline.value)||e.inline},r.value]},U),[d("div",{class:["v-selection-control__wrapper",y.value],style:C.value},[(_=a.default)==null?void 0:_.call(a),F(d("div",{class:["v-selection-control__input"]},[c.value&&d(K,{key:"icon",icon:c.value},null),F(d("input",h({"onUpdate:modelValue":L=>t.value=L,ref:I,disabled:e.disabled,id:o.value,onBlur:B,onFocus:$,"aria-readonly":e.readonly,type:k,value:S.value,name:(A=n==null?void 0:n.name.value)!=null?A:e.name,"aria-checked":k==="checkbox"?t.value:void 0},E),null),[[W,t.value]]),(x=a.input)==null?void 0:x.call(a,{model:t,textColorClasses:y,props:{onFocus:$,onBlur:B,id:o.value}})]),[[J("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),P&&d(ae,{for:o.value},{default:()=>[P]})])}),{isFocused:s,input:I}}});function se(e){return X(e,Object.keys(oe.props))}export{oe as V,re as a,se as f,ne as m};
