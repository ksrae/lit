import{u as h,f as p,t as d,s as g,x as v}from"../custom-element.es.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:p},y=(r=f,o,t)=>{const{kind:n,metadata:s}=t;let e=globalThis.litPropertyMetadata.get(s);if(e===void 0&&globalThis.litPropertyMetadata.set(s,e=new Map),e.set(t.name,r),n==="accessor"){const{name:a}=t;return{set(c){const i=o.get.call(this);o.set.call(this,c),this.requestUpdate(a,i,r)},init(c){return c!==void 0&&this.P(a,void 0,r),c}}}if(n==="setter"){const{name:a}=t;return function(c){const i=this[a];o.call(this,c),this.requestUpdate(a,i,r)}}throw Error("Unsupported decorator location: "+n)};var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,u=(r,o,t,n)=>{for(var s,e=n>1?void 0:n?w(o,t):o,a=r.length-1;a>=0;a--)(s=r[a])&&(e=(n?s(o,t,e):s(e))||e);return n&&e&&b(o,t,e),e};let l=class extends g{constructor(){super(...arguments),this.value=1}render(){return v`
      <p>${this.value}</p>
      <button @click="${this.getNewVal}">Get new value</button>
    `}getNewVal(){this.value=Math.floor(100*Math.random())}};u([function(r){return(o,t)=>typeof t=="object"?y(r,o,t):((n,s,e)=>{const a=s.hasOwnProperty(e);return s.constructor.createProperty(e,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(s,e):void 0})(r,o,t)}({hasChanged(r,o){const t=r%2==1;return console.log(`${r}, ${o}, ${t}`),t}})],l.prototype,"value",2),l=u([d("has-changed")],l);
