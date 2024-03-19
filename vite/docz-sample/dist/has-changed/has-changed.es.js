import{u,f as p,t as d,s as g,x as v}from"../custom-element.es.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},y=(o=f,e,r)=>{const{kind:s,metadata:n}=r;let t=globalThis.litPropertyMetadata.get(n);if(t===void 0&&globalThis.litPropertyMetadata.set(n,t=new Map),t.set(r.name,o),s==="accessor"){const{name:a}=r;return{set(i){const c=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,c,o)},init(i){return i!==void 0&&this.P(a,void 0,o),i}}}if(s==="setter"){const{name:a}=r;return function(i){const c=this[a];e.call(this,i),this.requestUpdate(a,c,o)}}throw Error("Unsupported decorator location: "+s)};var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,h=(o,e,r,s)=>{for(var n,t=s>1?void 0:s?w(e,r):e,a=o.length-1;a>=0;a--)(n=o[a])&&(t=(s?n(e,r,t):n(t))||t);return s&&t&&b(e,r,t),t};let l=class extends g{constructor(){super(...arguments),this.value=1}render(){return v`
      <p>${this.value}</p>
      <button @click="${this.getNewVal}">Get new value</button>
    `}getNewVal(){this.value=Math.floor(100*Math.random())}};h([function(o){return(e,r)=>typeof r=="object"?y(o,e,r):((s,n,t)=>{const a=n.hasOwnProperty(t);return n.constructor.createProperty(t,a?{...s,wrapped:!0}:s),a?Object.getOwnPropertyDescriptor(n,t):void 0})(o,e,r)}({hasChanged:(o,e)=>!0})],l.prototype,"value",2),l=h([d("has-changed")],l);
