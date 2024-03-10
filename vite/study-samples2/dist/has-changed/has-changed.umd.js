(function(A){typeof define=="function"&&define.amd?define(A):A()})(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;const A=globalThis,j=A.ShadowRoot&&(A.ShadyCSS===void 0||A.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),V=new WeakMap;let ht=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&V.set(e,t))}return t}toString(){return this.cssText}};const at=n=>new ht(typeof n=="string"?n:n+"",void 0,W),lt=(n,t)=>{if(j)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=A.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},q=j?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return at(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ct,defineProperty:dt,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ut,getOwnPropertySymbols:$t,getPrototypeOf:_t}=Object,$=globalThis,J=$.trustedTypes,ft=J?J.emptyScript:"",k=$.reactiveElementPolyfillSupport,b=(n,t)=>n,T={toAttribute(n,t){switch(t){case Boolean:n=n?ft:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},D=(n,t)=>!ct(n,t),K={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:D};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&dt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=pt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const a=i==null?void 0:i.call(this);o.call(this,r),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=_t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,s=[...ut(e),...$t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(q(i))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:T).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:T;this._$Em=i,this[i]=a.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??D)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[b("elementProperties")]=new Map,v[b("finalized")]=new Map,k==null||k({ReactiveElement:v}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis,N=w.trustedTypes,G=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,Z="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,F="?"+_,At=`<${F}>`,g=document,P=()=>g.createComment(""),C=n=>n===null||typeof n!="object"&&typeof n!="function",Q=Array.isArray,gt=n=>Q(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",L=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,m=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,st=/^(?:script|style|textarea|title)$/i,mt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),yt=mt(1),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),it=new WeakMap,y=g.createTreeWalker(g,129);function nt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const vt=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":"",r=U;for(let a=0;a<e;a++){const h=n[a];let d,p,l=-1,u=0;for(;u<h.length&&(r.lastIndex=u,p=r.exec(h),p!==null);)u=r.lastIndex,r===U?p[1]==="!--"?r=X:p[1]!==void 0?r=Y:p[2]!==void 0?(st.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=m):p[3]!==void 0&&(r=m):r===m?p[0]===">"?(r=i??U,l=-1):p[1]===void 0?l=-2:(l=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?m:p[3]==='"'?et:tt):r===et||r===tt?r=m:r===X||r===Y?r=U:(r=m,i=void 0);const f=r===m&&n[a+1].startsWith("/>")?" ":"";o+=r===U?h+At:l>=0?(s.push(d),h.slice(0,l)+Z+h.slice(l)+_+f):h+_+(l===-2?a:f)}return[nt(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),s]};class x{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const a=t.length-1,h=this.parts,[d,p]=vt(t,e);if(this.el=x.createElement(d,s),y.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=y.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(Z)){const u=p[r++],f=i.getAttribute(l).split(_),R=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:R[2],strings:f,ctor:R[1]==="."?St:R[1]==="?"?bt:R[1]==="@"?wt:M}),i.removeAttribute(l)}else l.startsWith(_)&&(h.push({type:6,index:o}),i.removeAttribute(l));if(st.test(i.tagName)){const l=i.textContent.split(_),u=l.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let f=0;f<u;f++)i.append(l[f],P()),y.nextNode(),h.push({type:2,index:++o});i.append(l[u],P())}}}else if(i.nodeType===8)if(i.data===F)h.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(_,l+1))!==-1;)h.push({type:7,index:o}),l+=_.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function S(n,t,e=n,s){var r,a;if(t===E)return t;let i=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const o=C(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=S(n,i._$AS(n,t.values),i,s)),t}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??g).importNode(e,!0);y.currentNode=i;let o=y.nextNode(),r=0,a=0,h=s[0];for(;h!==void 0;){if(r===h.index){let d;h.type===2?d=new O(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new Pt(o,this,t)),this._$AV.push(d),h=s[++a]}r!==(h==null?void 0:h.index)&&(o=y.nextNode(),r++)}return y.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),C(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==c&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=x.createElement(nt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const r=new Et(i,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new x(t)),e}k(t){Q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new O(this.S(P()),this.S(P()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=S(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{const a=t;let h,d;for(t=o[0],h=0;h<o.length-1;h++)d=S(this,a[s+h],e,h),d===E&&(d=this._$AH[h]),r||(r=!C(d)||d!==this._$AH[h]),d===c?t=c:t!==c&&(t+=(d??"")+o[h+1]),this._$AH[h]=d}r&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class bt extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class wt extends M{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===E)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const z=w.litHtmlPolyfillSupport;z==null||z(x,O),(w.litHtmlVersions??(w.litHtmlVersions=[])).push("3.1.2");const Ct=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new O(t.insertBefore(P(),o),o,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}H._$litElement$=!0,H.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:H});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:H}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:D},Ot=(n=xt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,n),s==="accessor"){const{name:r}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,h,n)},init(a){return a!==void 0&&this.P(r,void 0,n),a}}}if(s==="setter"){const{name:r}=e;return function(a){const h=this[r];t.call(this,a),this.requestUpdate(r,h,n)}}throw Error("Unsupported decorator location: "+s)};function Ht(n){return(t,e)=>typeof e=="object"?Ot(n,t,e):((s,i,o)=>{const r=i.hasOwnProperty(o);return i.constructor.createProperty(o,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(i,o):void 0})(n,t,e)}var Tt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,rt=(n,t,e,s)=>{for(var i=s>1?void 0:s?Nt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Tt(t,e,i),i};let B=class extends H{constructor(){super(...arguments),this.value=1}render(){return yt`
      <p>${this.value}</p>
      <button @click="${this.getNewVal}">Get new value</button>
    `}getNewVal(){this.value=Math.floor(Math.random()*100)}};rt([Ht({hasChanged(n,t){const e=n%2==1;return console.log(`${n}, ${t}, ${e}`),e}})],B.prototype,"value",2),B=rt([Ut("has-changed")],B)});
