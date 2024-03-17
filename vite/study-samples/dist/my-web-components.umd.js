(function(E){typeof define=="function"&&define.amd?define(E):E()})(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kt;const E=globalThis,ae=E.ShadowRoot&&(E.ShadyCSS===void 0||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),ze=new WeakMap;let qe=class{constructor(e,s,n){if(this._$cssResult$=!0,n!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(ae&&e===void 0){const n=s!==void 0&&s.length===1;n&&(e=ze.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ze.set(s,e))}return e}toString(){return this.cssText}};const S=r=>new qe(typeof r=="string"?r:r+"",void 0,he),M=(r,...e)=>{const s=r.length===1?r[0]:e.reduce((n,t,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+r[i+1],r[0]);return new qe(s,r,he)},ts=(r,e)=>{if(ae)r.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const n=document.createElement("style"),t=E.litNonce;t!==void 0&&n.setAttribute("nonce",t),n.textContent=s.cssText,r.appendChild(n)}},We=ae?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let s="";for(const n of e.cssRules)s+=n.cssText;return S(s)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ss,defineProperty:rs,getOwnPropertyDescriptor:ns,getOwnPropertyNames:is,getOwnPropertySymbols:os,getPrototypeOf:ls}=Object,C=globalThis,Ye=C.trustedTypes,cs=Ye?Ye.emptyScript:"",ue=C.reactiveElementPolyfillSupport,V=(r,e)=>r,Q={toAttribute(r,e){switch(e){case Boolean:r=r?cs:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let s=r;switch(e){case Boolean:s=r!==null;break;case Number:s=r===null?null:Number(r);break;case Object:case Array:try{s=JSON.parse(r)}catch{s=null}}return s}},pe=(r,e)=>!ss(r,e),Fe={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:pe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);class H extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Fe){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const n=Symbol(),t=this.getPropertyDescriptor(e,n,s);t!==void 0&&rs(this.prototype,e,t)}}static getPropertyDescriptor(e,s,n){const{get:t,set:i}=ns(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get(){return t==null?void 0:t.call(this)},set(o){const c=t==null?void 0:t.call(this);i.call(this,o),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fe}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=ls(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const s=this.properties,n=[...is(s),...os(s)];for(const t of n)this.createProperty(t,s[t])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[n,t]of s)this.elementProperties.set(n,t)}this._$Eh=new Map;for(const[s,n]of this.elementProperties){const t=this._$Eu(s,n);t!==void 0&&this._$Eh.set(t,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const t of n)s.unshift(We(t))}else e!==void 0&&s.push(We(e));return s}static _$Eu(e,s){const n=s.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const n of s.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ts(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var n;return(n=s.hostConnected)==null?void 0:n.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var n;return(n=s.hostDisconnected)==null?void 0:n.call(s)})}attributeChangedCallback(e,s,n){this._$AK(e,n)}_$EC(e,s){var i;const n=this.constructor.elementProperties.get(e),t=this.constructor._$Eu(e,n);if(t!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Q).toAttribute(s,n.type);this._$Em=e,o==null?this.removeAttribute(t):this.setAttribute(t,o),this._$Em=null}}_$AK(e,s){var i;const n=this.constructor,t=n._$Eh.get(e);if(t!==void 0&&this._$Em!==t){const o=n.getPropertyOptions(t),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:Q;this._$Em=t,this[t]=c.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(e,s,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??pe)(this[e],s))return;this.P(e,s,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,s,n){this._$AL.has(e)||this._$AL.set(e,s),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,o]of t)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(n=this._$EO)==null||n.forEach(t=>{var i;return(i=t.hostUpdate)==null?void 0:i.call(t)}),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(n=>{var t;return(t=n.hostUpdated)==null?void 0:t.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(e){}firstUpdated(e){}}H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[V("elementProperties")]=new Map,H[V("finalized")]=new Map,ue==null||ue({ReactiveElement:H}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,G=z.trustedTypes,Je=G?G.createPolicy("lit-html",{createHTML:r=>r}):void 0,de="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,fe="?"+P,as=`<${fe}>`,D=document,q=()=>D.createComment(""),W=r=>r===null||typeof r!="object"&&typeof r!="function",Ke=Array.isArray,Ze=r=>Ke(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ve=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Qe=/>/g,j=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ge=/'/g,ke=/"/g,et=/^(?:script|style|textarea|title)$/i,hs=r=>(e,...s)=>({_$litType$:r,strings:e,values:s}),h=hs(1),g=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),tt=new WeakMap,T=D.createTreeWalker(D,129);function st(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Je!==void 0?Je.createHTML(e):e}const rt=(r,e)=>{const s=r.length-1,n=[];let t,i=e===2?"<svg>":"",o=Y;for(let c=0;c<s;c++){const l=r[c];let p,$,a=-1,v=0;for(;v<l.length&&(o.lastIndex=v,$=o.exec(l),$!==null);)v=o.lastIndex,o===Y?$[1]==="!--"?o=Xe:$[1]!==void 0?o=Qe:$[2]!==void 0?(et.test($[2])&&(t=RegExp("</"+$[2],"g")),o=j):$[3]!==void 0&&(o=j):o===j?$[0]===">"?(o=t??Y,a=-1):$[1]===void 0?a=-2:(a=o.lastIndex-$[2].length,p=$[1],o=$[3]===void 0?j:$[3]==='"'?ke:Ge):o===ke||o===Ge?o=j:o===Xe||o===Qe?o=Y:(o=j,t=void 0);const f=o===j&&r[c+1].startsWith("/>")?" ":"";i+=o===Y?l+as:a>=0?(n.push(p),l.slice(0,a)+de+l.slice(a)+P+f):l+P+(a===-2?c:f)}return[st(r,i+(r[s]||"<?>")+(e===2?"</svg>":"")),n]};class F{constructor({strings:e,_$litType$:s},n){let t;this.parts=[];let i=0,o=0;const c=e.length-1,l=this.parts,[p,$]=rt(e,s);if(this.el=F.createElement(p,n),T.currentNode=this.el.content,s===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(t=T.nextNode())!==null&&l.length<c;){if(t.nodeType===1){if(t.hasAttributes())for(const a of t.getAttributeNames())if(a.endsWith(de)){const v=$[o++],f=t.getAttribute(a).split(P),m=/([.?@])?(.*)/.exec(v);l.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?it:m[1]==="?"?ot:m[1]==="@"?lt:J}),t.removeAttribute(a)}else a.startsWith(P)&&(l.push({type:6,index:i}),t.removeAttribute(a));if(et.test(t.tagName)){const a=t.textContent.split(P),v=a.length-1;if(v>0){t.textContent=G?G.emptyScript:"";for(let f=0;f<v;f++)t.append(a[f],q()),T.nextNode(),l.push({type:2,index:++i});t.append(a[v],q())}}}else if(t.nodeType===8)if(t.data===fe)l.push({type:2,index:i});else{let a=-1;for(;(a=t.data.indexOf(P,a+1))!==-1;)l.push({type:7,index:i}),a+=P.length-1}i++}}static createElement(e,s){const n=D.createElement("template");return n.innerHTML=e,n}}function R(r,e,s=r,n){var o,c;if(e===g)return e;let t=n!==void 0?(o=s._$Co)==null?void 0:o[n]:s._$Cl;const i=W(e)?void 0:e._$litDirective$;return(t==null?void 0:t.constructor)!==i&&((c=t==null?void 0:t._$AO)==null||c.call(t,!1),i===void 0?t=void 0:(t=new i(r),t._$AT(r,s,n)),n!==void 0?(s._$Co??(s._$Co=[]))[n]=t:s._$Cl=t),t!==void 0&&(e=R(r,t._$AS(r,e.values),t,n)),e}class nt{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:n}=this._$AD,t=((e==null?void 0:e.creationScope)??D).importNode(s,!0);T.currentNode=t;let i=T.nextNode(),o=0,c=0,l=n[0];for(;l!==void 0;){if(o===l.index){let p;l.type===2?p=new I(i,i.nextSibling,this,e):l.type===1?p=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(p=new ct(i,this,e)),this._$AV.push(p),l=n[++c]}o!==(l==null?void 0:l.index)&&(i=T.nextNode(),o++)}return T.currentNode=D,t}p(e){let s=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,s),s+=n.strings.length-2):n._$AI(e[s])),s++}}class I{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,n,t){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=n,this.options=t,this._$Cv=(t==null?void 0:t.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=R(this,e,s),W(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==g&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ze(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){var i;const{values:s,_$litType$:n}=e,t=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=F.createElement(st(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===t)this._$AH.p(s);else{const o=new nt(t,this),c=o.u(this.options);o.p(s),this.T(c),this._$AH=o}}_$AC(e){let s=tt.get(e.strings);return s===void 0&&tt.set(e.strings,s=new F(e)),s}k(e){Ke(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let n,t=0;for(const i of e)t===s.length?s.push(n=new I(this.S(q()),this.S(q()),this,this.options)):n=s[t],n._$AI(i),t++;t<s.length&&(this._$AR(n&&n._$AB.nextSibling,t),s.length=t)}_$AR(e=this._$AA.nextSibling,s){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,s);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,n,t,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=s,this._$AM=t,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,s=this,n,t){const i=this.strings;let o=!1;if(i===void 0)e=R(this,e,s,0),o=!W(e)||e!==this._$AH&&e!==g,o&&(this._$AH=e);else{const c=e;let l,p;for(e=i[0],l=0;l<i.length-1;l++)p=R(this,c[n+l],s,l),p===g&&(p=this._$AH[l]),o||(o=!W(p)||p!==this._$AH[l]),p===_?e=_:e!==_&&(e+=(p??"")+i[l+1]),this._$AH[l]=p}o&&!t&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class ot extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class lt extends J{constructor(e,s,n,t,i){super(e,s,n,t,i),this.type=5}_$AI(e,s=this){if((e=R(this,e,s,0)??_)===g)return;const n=this._$AH,t=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==_&&(n===_||t);t&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class ct{constructor(e,s,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const us={P:de,A:P,C:fe,M:1,L:rt,R:nt,D:Ze,V:R,I,H:J,N:ot,U:lt,B:it,F:ct},$e=z.litHtmlPolyfillSupport;$e==null||$e(F,I),(z.litHtmlVersions??(z.litHtmlVersions=[])).push("3.1.2");const at=(r,e,s)=>{const n=(s==null?void 0:s.renderBefore)??e;let t=n._$litPart$;if(t===void 0){const i=(s==null?void 0:s.renderBefore)??null;n._$litPart$=t=new I(e.insertBefore(q(),i),i,void 0,s??{})}return t._$AI(r),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let u=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=at(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return g}};u._$litElement$=!0,u.finalized=!0,(kt=globalThis.litElementHydrateSupport)==null||kt.call(globalThis,{LitElement:u});const _e=globalThis.litElementPolyfillSupport;_e==null||_e({LitElement:u}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=r=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:pe},ds=(r=ps,e,s)=>{const{kind:n,metadata:t}=s;let i=globalThis.litPropertyMetadata.get(t);if(i===void 0&&globalThis.litPropertyMetadata.set(t,i=new Map),i.set(s.name,r),n==="accessor"){const{name:o}=s;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,l,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(n==="setter"){const{name:o}=s;return function(c){const l=this[o];e.call(this,c),this.requestUpdate(o,l,r)}}throw Error("Unsupported decorator location: "+n)};function b(r){return(e,s)=>typeof s=="object"?ds(r,e,s):((n,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(t,i):void 0})(r,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(r){return b({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fs(r){return(e,s)=>{const n=typeof e=="function"?e:e[s];Object.assign(n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=(r,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(r,e){return(s,n,t)=>{const i=o=>{var c;return((c=o.renderRoot)==null?void 0:c.querySelector(r))??null};if(e){const{get:o,set:c}=typeof n=="object"?s:t??(()=>{const l=Symbol();return{get(){return this[l]},set(p){this[l]=p}}})();return ht(s,n,{get(){let l=o.call(this);return l===void 0&&(l=i(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return ht(s,n,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},w=r=>(...e)=>({_$litDirective$:r,values:e});let K=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:vs}=us,pt=(r,e)=>e===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===e,$s=r=>{var e;return((e=r==null?void 0:r._$litType$)==null?void 0:e.h)!=null},dt=r=>r.strings===void 0,ft=()=>document.createComment(""),O=(r,e,s)=>{var i;const n=r._$AA.parentNode,t=e===void 0?r._$AB:e._$AA;if(s===void 0){const o=n.insertBefore(ft(),t),c=n.insertBefore(ft(),t);s=new vs(o,c,r,r.options)}else{const o=s._$AB.nextSibling,c=s._$AM,l=c!==r;if(l){let p;(i=s._$AQ)==null||i.call(s,r),s._$AM=r,s._$AP!==void 0&&(p=r._$AU)!==c._$AU&&s._$AP(p)}if(o!==t||l){let p=s._$AA;for(;p!==o;){const $=p.nextSibling;n.insertBefore(p,t),p=$}}}return s},x=(r,e,s=r)=>(r._$AI(e,s),r),_s={},k=(r,e=_s)=>r._$AH=e,be=r=>r._$AH,me=r=>{var n;(n=r._$AP)==null||n.call(r,!1,!0);let e=r._$AA;const s=r._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},vt=r=>{r._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=(r,e)=>{var n;const s=r._$AN;if(s===void 0)return!1;for(const t of s)(n=t._$AO)==null||n.call(t,e,!1),Z(t,e);return!0},ee=r=>{let e,s;do{if((e=r._$AM)===void 0)break;s=e._$AN,s.delete(r),r=e}while((s==null?void 0:s.size)===0)},$t=r=>{for(let e;e=r._$AM;r=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(r))break;s.add(r),gs(e)}};function bs(r){this._$AN!==void 0?(ee(this),this._$AM=r,$t(this)):this._$AM=r}function ms(r,e=!1,s=0){const n=this._$AH,t=this._$AN;if(t!==void 0&&t.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)Z(n[i],!1),ee(n[i]);else n!=null&&(Z(n,!1),ee(n));else Z(this,r)}const gs=r=>{r.type==y.CHILD&&(r._$AP??(r._$AP=ms),r._$AQ??(r._$AQ=bs))};class ge extends K{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),$t(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,t;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(t=this.disconnected)==null||t.call(this)),s&&(Z(this,e),ee(this))}setValue(e){if(dt(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys=async(r,e)=>{for await(const s of r)if(await e(s)===!1)return};let Ps=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},As=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _t=class extends ge{constructor(){super(...arguments),this._$CK=new Ps(this),this._$CX=new As}render(e,s){return g}update(e,[s,n]){if(this.isConnected||this.disconnected(),s===this._$CJ)return g;this._$CJ=s;let t=0;const{_$CK:i,_$CX:o}=this;return ys(s,async c=>{for(;o.get();)await o.get();const l=i.deref();if(l!==void 0){if(l._$CJ!==s)return!1;n!==void 0&&(c=n(c,t)),l.commitValue(c,t),t++}return!0}),g}commitValue(e,s){this.setValue(e)}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Cs=w(_t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=w(class extends _t{constructor(r){if(super(r),r.type!==y.CHILD)throw Error("asyncAppend can only be used in child expressions")}update(r,e){return this._$Ctt=r,super.update(r,e)}commitValue(r,e){e===0&&vt(this._$Ctt);const s=O(this._$Ctt);x(s,r)}});var Os=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,bt=(r,e,s,n)=>{for(var t=n>1?void 0:n?xs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Os(e,s,t),t};async function*Es(r){for(let e=0;e<r;e++)yield Math.random()>.5?"Heads":"Tails",await new Promise(s=>setTimeout(s,1e3))}let ye=class extends u{constructor(){super(...arguments),this.tosses=Es(10)}render(){return h`
      <ul>${ws(this.tosses,r=>h`<li>${r}</li>`)}</ul>
    `}};bt([U()],ye.prototype,"tosses",2),ye=bt([d("async-append")],ye);var Ss=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,mt=(r,e,s,n)=>{for(var t=n>1?void 0:n?Ds(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Ss(e,s,t),t};async function*js(r){for(;r>0;)yield r--,await new Promise(e=>setTimeout(e,1e3));yield"BOOM"}let Pe=class extends u{constructor(){super(...arguments),this.timer=js(10)}render(){return h`Timer: <span>${Cs(this.timer)}</span>.`}};mt([U()],Pe.prototype,"timer",2),Pe=mt([d("async-replace")],Pe);var Ts=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,X=(r,e,s,n)=>{for(var t=n>1?void 0:n?Rs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Ts(e,s,t),t};let N=class extends u{constructor(){super(...arguments),this.value="button",this.disabled=!1,this.loading=!1,this.type="default"}render(){return console.log(this.loading),h`
      <button 
        .disabled=${this.disabled} 
        @click=${this._onClicked}>
        ${this.loading?"Loading...":this.value}
      </button>
    `}_onClicked(){const r=new CustomEvent("onclicked",{detail:this.value,bubbles:!0,composed:!0});console.log("click event"),this.dispatchEvent(r)}};N.styles=M`
    :host {
      color: blue;
    }
    button:hover {
        color: red;
      }
  `,X([b({type:String})],N.prototype,"value",2),X([b({type:Boolean})],N.prototype,"disabled",2),X([b({type:Boolean})],N.prototype,"loading",2),X([b({type:String})],N.prototype,"type",2),N=X([d("my-button")],N);var Us=Object.defineProperty,Ns=Object.getOwnPropertyDescriptor,te=(r,e,s,n)=>{for(var t=n>1?void 0:n?Ns(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Us(e,s,t),t};let L=class extends u{constructor(){super(...arguments),this.name="anonymous",this._submitEnabled=!1}_inputChanged(r){this._submitEnabled=!!r.target.value}_updateName(){this.name=this._input.value,this._input.value="",this._submitEnabled=!1}render(){return h`<p>Nickname: ${this.name}</p>
        <label>Enter new nickname:
          <input @input=${this._inputChanged}>
        </label>
        <button @click=${this._updateName}
                .disabled=${!this._submitEnabled}>Submit</button>`}};L.styles=M`
    :host {
      font-family: sans-serif;
    }
  `,te([b()],L.prototype,"name",2),te([U()],L.prototype,"_submitEnabled",2),te([ut("input")],L.prototype,"_input",2),L=te([d("mediator-element")],L);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gt=class extends Event{constructor(e,s,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=s,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yn(r){return r}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yt=class{constructor(e,s,n,t){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,o)),this.unsubscribe=o},this.host=e,s.context!==void 0){const i=s;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=s,this.callback=n,this.subscribe=t??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new gt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ms{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,s=!1){const n=s||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:n}]of this.subscriptions)s(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,s,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:s});const{disposer:t}=this.subscriptions.get(e);e(this.value,t)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hs=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Pt=class extends Ms{constructor(e,s,n){var t,i;super(s.context!==void 0?s.initialValue:n),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const l=new Set;for(const[p,{consumerHost:$}]of this.subscriptions)l.has(p)||(l.add(p),$.dispatchEvent(new gt(this.context,p,!0)));o.stopPropagation()},this.host=e,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),(i=(t=this.host).addController)==null||i.call(t,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Hs(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At({context:r}){return(e,s)=>{const n=new WeakMap;if(typeof s=="object")return s.addInitializer(function(){n.set(this,new Pt(this,{context:r}))}),{get(){return e.get.call(this)},set(t){var i;return(i=n.get(this))==null||i.setValue(t),e.set.call(this,t)},init(t){var i;return(i=n.get(this))==null||i.setValue(t),t}};{e.constructor.addInitializer(o=>{n.set(o,new Pt(o,{context:r}))});const t=Object.getOwnPropertyDescriptor(e,s);let i;if(t===void 0){const o=new WeakMap;i={get:function(){return o.get(this)},set:function(c){n.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=t.set;i={...t,set:function(c){n.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,s,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ct({context:r,subscribe:e}){return(s,n)=>{typeof n=="object"?n.addInitializer(function(){new yt(this,{context:r,callback:t=>{this[n.name]=t},subscribe:e})}):s.constructor.addInitializer(t=>{new yt(t,{context:r,callback:i=>{t[n]=i},subscribe:e})})}}const wt=Symbol("parentConsumer");var Is=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,Ot=(r,e,s,n)=>{for(var t=n>1?void 0:n?Ls(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Is(e,s,t),t};let Ae=class extends u{constructor(){super(...arguments),this.value="provide data"}change(){console.log("change"),this.value="provide data1",this.requestUpdate()}render(){return h`
      <p>Child Provider</p>
      <button @click=${this.change}>테마 변경</button>
    `}};Ot([At({context:wt})],Ae.prototype,"value",2),Ae=Ot([d("child-provider")],Ae);var Bs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,xt=(r,e,s,n)=>{for(var t=n>1?void 0:n?Vs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Bs(e,s,t),t};let Ce=class extends u{render(){return h`
      <p>Parent Consumer</p>
      <p>${this.value}</p>
      
    `}};xt([Ct({context:wt,subscribe:!0}),b({attribute:!1})],Ce.prototype,"value",2),Ce=xt([d("parent-consumer")],Ce);const Et=Symbol("themecontext");var zs=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,St=(r,e,s,n)=>{for(var t=n>1?void 0:n?qs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&zs(e,s,t),t};let we=class extends u{render(){return h`<div>Current Theme: ${this.theme11}</div>`}};St([Ct({context:Et,subscribe:!0}),b({attribute:!1})],we.prototype,"theme11",2),we=St([d("theme-consumer")],we);var Ws=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Dt=(r,e,s,n)=>{for(var t=n>1?void 0:n?Ys(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Ws(e,s,t),t};let Oe=class extends u{constructor(){super(...arguments),this.theme="light"}changeTheme(){console.log("changeTheme",this.theme),this.theme=this.theme==="dark"?"light":"dark"}render(){return h`
      <button @click=${this.changeTheme}>테마 변경</button>
      <theme-consumer></theme-consumer>
    `}};Dt([At({context:Et}),b({attribute:!1})],Oe.prototype,"theme",2),Oe=Dt([d("theme-provider")],Oe);var Fs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Ks=(r,e,s,n)=>{for(var t=n>1?void 0:n?Js(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Fs(e,s,t),t};class Zs{constructor(e){this.host=e,e.addController(this)}hostConnected(){console.log("컴포넌트가 DOM에 연결되었습니다.")}hostUpdate(){console.log("컴포넌트 업데이트가 시작되기 전입니다.")}hostUpdated(){console.log("컴포넌트 업데이트가 완료되었습니다.")}hostDisconnected(){console.log("컴포넌트가 DOM에서 연결 해제되었습니다.")}}let jt=class extends u{constructor(){super(),new Zs(this)}render(){return h`<p>안녕하세요, 리액티브 컨트롤러 예제입니다!</p>`}};jt=Ks([d("reactive-controller")],jt);var Xs=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,xe=(r,e,s,n)=>{for(var t=n>1?void 0:n?Qs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Xs(e,s,t),t};let se=class extends u{constructor(){super(),this.hostName="",this.shadowName="",this.addEventListener("click",r=>this.hostName=r.target.localName)}createRenderRoot(){const r=super.createRenderRoot();return r.addEventListener("click",e=>this.shadowName=e.target.localName),r}_pclick(r){console.log("p click")}render(){return h`
      <p><button>Click Me!</button></p>
      <p>Component target: ${this.hostName}</p>
      <p>Shadow target: ${this.shadowName}</p>
      <p @click=${this._pclick}>Click me!</p>
    `}};xe([b()],se.prototype,"hostName",2),xe([b()],se.prototype,"shadowName",2),se=xe([d("create-render-root")],se);const Tt=M`
  :host {
    display: block;
    color: blue;
  }
  p {
    font-size: 20px;
  }
`;var Gs=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,er=(r,e,s,n)=>{for(var t=n>1?void 0:n?ks(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Gs(e,s,t),t};let Ee=class extends u{render(){return h`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `}};Ee.styles=[Tt,M`
      p {
        color: red;
      }
    `],Ee=er([d("child-component")],Ee);var tr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,rr=(r,e,s,n)=>{for(var t=n>1?void 0:n?sr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&tr(e,s,t),t};let Se=class extends u{render(){return h`
      <p>부모 컴포넌트의 스타일</p>
    `}};Se.styles=Tt,Se=rr([d("parent-component")],Se);class nr extends ge{render(e){return Promise.resolve(e).then(s=>{this.setValue(s)}),"Waiting for promise to resolve"}}const ir=w(nr);var or=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,Rt=(r,e,s,n)=>{for(var t=n>1?void 0:n?lr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&or(e,s,t),t};function cr(){return new Promise(r=>{setTimeout(()=>{r("사용자 이름: 뤼튼, 취미: 코딩")},2e3)})}let De=class extends u{constructor(){super(),this.userProfile=cr()}render(){return h`
      <p>${ir(this.userProfile)}</p>
    `}};Rt([b({attribute:!1})],De.prototype,"userProfile",2),De=Rt([d("async-directive")],De);const B={colors:{primary:"#6200EE",primaryVariant:"#3700B3",onPrimary:"#FFFFFF",default:"#FFFFFF",defaultVariant:"#EEEEEE",onDefault:"#000000"},typography:{bodyText:{fontFamily:"Roboto, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},buttonText:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:"500",lineHeight:"16px"}},spacing:{small:"8px",medium:"16px",large:"24px"},borderRadius:{small:"4px",medium:"8px",large:"16px"}};var ar=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,ur=(r,e,s,n)=>{for(var t=n>1?void 0:n?hr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&ar(e,s,t),t};let je=class extends u{render(){return h`
      <button>Click me</button>
    `}};je.styles=M`
    :host(.primary) {
      /* primary 테마 스타일 */
      --button-bg-color: ${S(B.colors.primary)};
      --button-color: ${S(B.colors.onPrimary)};
      --hover: ${S(B.colors.primaryVariant)};
    }
    :host(.default) {
      /* default 테마 스타일 */
      --button-bg-color: ${S(B.colors.default)};
      --button-color: ${S(B.colors.onDefault)};
      --hover: ${S(B.colors.defaultVariant)};
    }
    button {
      background-color: var(--button-bg-color);
      color: var(--button-color);
      padding: 8px 16px;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: var(--hover);
    }
  `,je=ur([d("design-system")],je);var pr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,fr=(r,e,s,n)=>{for(var t=n>1?void 0:n?dr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&pr(e,s,t),t};let Ut=class extends u{_onClicked(){const r=new CustomEvent("my-custom-event",{detail:{more:{msg:"fireddddd"}},bubbles:!0,composed:!0});this.dispatchEvent(r)}render(){return h`
      <button @click="${this._onClicked}">이벤트 발생시키기</button>
    `}};Ut=fr([d("custom-event")],Ut);var vr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,Nt=(r,e,s,n)=>{for(var t=n>1?void 0:n?$r(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&vr(e,s,t),t};let Te=class extends u{constructor(){super(...arguments),this.clicked=""}render(){return h`
      <div @click="${this._clickHandler}">
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
      </div>
      <p>Clicked: ${this.clicked}</p>
    `}_clickHandler(r){this.clicked=r.target===r.currentTarget?"container":r.target.textContent}};Nt([b()],Te.prototype,"clicked",2),Te=Nt([d("event-delegation")],Te);var _r=Object.defineProperty,br=Object.getOwnPropertyDescriptor,Re=(r,e,s,n)=>{for(var t=n>1?void 0:n?br(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&_r(e,s,t),t};let re=class extends u{constructor(){super(...arguments),this.label="Check me!",this.defaultMessage="🙂",this.message=this.defaultMessage}render(){return h`
      <label><input type="checkbox" @click=${this._tryChange}>${this.label}</label>
      <div>${this.message}</div>
    `}_tryChange(r){const e={message:this.message},s=new CustomEvent("checked",{detail:e,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(s),s.defaultPrevented&&r.preventDefault(),this.message=e.message}updated(){clearTimeout(this._resetMessage),this._resetMessage=setTimeout(()=>this.message=this.defaultMessage,1e3)}};Re([b()],re.prototype,"label",2),Re([b()],re.prototype,"message",2),re=Re([d("event-dispatcher-communication")],re);var mr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,Mt=(r,e,s,n)=>{for(var t=n>1?void 0:n?gr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&mr(e,s,t),t};let Ue=class extends u{constructor(){super(...arguments),this.canCheck=!1}render(){return h`
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck?"Allowing":"Preventing"} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`}_checkedHandler(r){this.canCheck||(r.preventDefault(),r.detail.message="✅ Prevented!!")}_clickHandler(){this.canCheck=!this.canCheck}};Mt([b({type:Boolean})],Ue.prototype,"canCheck",2),Ue=Mt([d("my-listener")],Ue);var yr=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,Ht=(r,e,s,n)=>{for(var t=n>1?void 0:n?Pr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&yr(e,s,t),t};let Ne=class extends u{_passiveclick(r){console.log(r.type)}_click(r){console.log(r.type)}render(){return h`
      <div @click=${this._passiveclick}>Passive event</div>
      <div @click=${this._click}>Normal event</div>
    `}};Ht([fs({passive:!0})],Ne.prototype,"_passiveclick",1),Ne=Ht([d("event-passive")],Ne);var Ar=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,wr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Cr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Ar(e,s,t),t};let It=class extends u{render(){return h`
      <button id="mybutton" @click="${r=>console.log(r.target)}">
        click me
      </button>
      <ul @click="${this.handleEvent}">
        <li><button>Item 1</button></li>
        <li><button>Item 2</button></li>
        <li><button>Item 3</button></li>
      </ul>
      `}handleEvent(r){console.log("Origin:",r.composedPath()[0])}};It=wr([d("event-retargeting")],It);var Or=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Er=(r,e,s,n)=>{for(var t=n>1?void 0:n?xr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Or(e,s,t),t};class Sr extends Event{constructor(){super("my-standard-event",{bubbles:!0,composed:!0})}}let Lt=class extends u{fireEvent(){const r=new Sr;this.dispatchEvent(r)}render(){return h`
      <button @click="${this.fireEvent}">이벤트 발생시키기</button>
    `}};Lt=Er([d("standard-event")],Lt);var Dr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Me=(r,e,s,n)=>{for(var t=n>1?void 0:n?jr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Dr(e,s,t),t};let ne=class extends u{constructor(){super(...arguments),this.t1=h`<h1>hello</h1>`,this.t2=h`<h2>world</h2>`}render(){return h`${this.t1}${this.t2}`}};Me([U()],ne.prototype,"t1",2),Me([U()],ne.prototype,"t2",2),ne=Me([d("html-expression")],ne);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt="important",Tr=" !"+Bt,Rr=w(class extends K{constructor(r){var e;if(super(r),r.type!==y.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,s)=>{const n=r[s];return n==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(r,[e]){const{style:s}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in e){const t=e[n];if(t!=null){this.ft.add(n);const i=typeof t=="string"&&t.endsWith(Tr);n.includes("-")||i?s.setProperty(n,i?t.slice(0,-11):t,i?Bt:""):s[n]=t}}return g}}),Ur={backgroundColor:"blue",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer"};var Nr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Hr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Mr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Nr(e,s,t),t};let Vt=class extends u{render(){return h`
      <button style=${Rr(Ur)}>버튼이야</button>
    `}};Vt=Hr([d("json-in-css")],Vt);var Ir=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,zt=(r,e,s,n)=>{for(var t=n>1?void 0:n?Lr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Ir(e,s,t),t};let ie=class extends u{constructor(){super(),this.count=0}connectedCallback(){super.connectedCallback(),console.log("connectedCallback")}disconnectedCallback(){super.disconnectedCallback(),console.log("disconnectedCallback")}shouldUpdate(r){return console.log("shouldUpdate:",r),r.has("count")}willUpdate(r){console.log("willUpdate:",r)}update(r){super.update(r),console.log("update:",r)}firstUpdated(r){console.log("firstUpdated:",r)}updated(r){console.log("updated:",r)}render(){return h`
      <h1>Count: ${this.count}</h1>
      <button @click="${this.incrementCount}">Increment</button>
    `}incrementCount(){this.count+=1}};ie.styles=M`
      :host {
        display: block;
      }
    `,zt([b({type:Number,hasChanged(r,e){return console.log(`hasChanged: ${e} -> ${r}`),e!==r}})],ie.prototype,"count",2),ie=zt([d("life-cycle-first")],ie);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br=w(class extends K{constructor(r){if(super(r),r.type!==y.PROPERTY&&r.type!==y.ATTRIBUTE&&r.type!==y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!dt(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===g||e===_)return e;const s=r.element,n=r.name;if(r.type===y.PROPERTY){if(e===s[n])return g}else if(r.type===y.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(n))return g}else if(r.type===y.ATTRIBUTE&&s.getAttribute(n)===e+"")return g;return k(r),e}});var Vr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,He=(r,e,s,n)=>{for(var t=n>1?void 0:n?zr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Vr(e,s,t),t};let oe=class extends u{constructor(){super(...arguments),this.data={value:"test"}}render(){return h`
      <h3>live directive example</h3>

      Set this value to the inputs below.<br>
      <input id="value" .value=${this.data.value}>
      <button @click=${this.commitValue}>Commit</button>

      With live: will update if out of sync with last rendered value<br>
      <input .value=${Br(this.data.value)} placeholder="type here, click commit">

      Without live: will not update if out of sync with last rendered value<br>
      <input .value=${this.data.value} placeholder="type here, click commit">
    `}commitValue(){this.data={...this.data,value:this.input.value}}};He([U()],oe.prototype,"data",2),He([ut("input#value")],oe.prototype,"input",2),oe=He([d("live-sample")],oe);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=()=>new Wr;let Wr=class{};const Ie=new WeakMap,qt=w(class extends ge{render(r){return _}update(r,[e]){var n;const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=r.options)==null?void 0:n.host,this.rt(this.ct=r.element)),_}rt(r){if(typeof this.Y=="function"){const e=this.ht??globalThis;let s=Ie.get(e);s===void 0&&(s=new WeakMap,Ie.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=Ie.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Yr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,Jr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Fr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Yr(e,s,t),t};let Wt=class extends u{constructor(){super(...arguments),this.buttonRef=qr()}firstUpdated(){const r=this.buttonRef.value;r&&r.addEventListener("click",()=>{console.log("버튼이 클릭되었습니다!")})}render(){return h`
      <button ${qt(this.buttonRef)}>클릭하세요</button>
      <div>
        <input type="text" ${qt(this.setInputRef)} />
        <button @click="${this.logInputValue}">로그 출력</button>
      </div>
      `}setInputRef(r){this.inputRef=r}logInputValue(){this.inputRef&&console.log(this.inputRef.value)}};Wt=Jr([d("with-ref")],Wt);var Kr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Xr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Zr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Kr(e,s,t),t};let Yt=class extends u{firstUpdated(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("button");r&&r.addEventListener("click",()=>{console.log("버튼이 클릭되었습니다!")})}render(){return h`<button>클릭하세요</button>`}};Yt=Xr([d("without-ref")],Yt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=(r,e,s)=>{const n=new Map;for(let t=e;t<=s;t++)n.set(r[t],t);return n},Qr=w(class extends K{constructor(r){if(super(r),r.type!==y.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,s){let n;s===void 0?s=e:e!==void 0&&(n=e);const t=[],i=[];let o=0;for(const c of r)t[o]=n?n(c,o):o,i[o]=s(c,o),o++;return{values:i,keys:t}}render(r,e,s){return this.dt(r,e,s).values}update(r,[e,s,n]){const t=be(r),{values:i,keys:o}=this.dt(e,s,n);if(!Array.isArray(t))return this.ut=o,i;const c=this.ut??(this.ut=[]),l=[];let p,$,a=0,v=t.length-1,f=0,m=i.length-1;for(;a<=v&&f<=m;)if(t[a]===null)a++;else if(t[v]===null)v--;else if(c[a]===o[f])l[f]=x(t[a],i[f]),a++,f++;else if(c[v]===o[m])l[m]=x(t[v],i[m]),v--,m--;else if(c[a]===o[m])l[m]=x(t[a],i[m]),O(r,l[m+1],t[a]),a++,m--;else if(c[v]===o[f])l[f]=x(t[v],i[f]),O(r,t[a],t[v]),v--,f++;else if(p===void 0&&(p=Ft(o,f,m),$=Ft(c,a,v)),p.has(c[a]))if(p.has(c[v])){const A=$.get(o[f]),Ve=A!==void 0?t[A]:null;if(Ve===null){const es=O(r,t[a]);x(es,i[f]),l[f]=es}else l[f]=x(Ve,i[f]),O(r,t[a],Ve),t[A]=null;f++}else me(t[v]),v--;else me(t[a]),a++;for(;f<=m;){const A=O(r,l[m+1]);x(A,i[f]),l[f++]=A}for(;a<=v;){const A=t[a++];A!==null&&me(A)}return this.ut=o,k(r,l),g}});var Gr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,Le=(r,e,s,n)=>{for(var t=n>1?void 0:n?kr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Gr(e,s,t),t};let le=class extends u{constructor(){super(),this.users=[],this.sorted=!1,this.users=[{id:1,name:"김철수",checked:!1},{id:2,name:"박영희",checked:!1},{id:3,name:"이민준",checked:!1}],this.sorted=!1}toggleSort(){this.sorted=!this.sorted,this.sorted?(console.log(1),this.users=[...this.users.sort((r,e)=>r.name.localeCompare(e.name))]):(console.log(2),this.users=[...this.users.sort((r,e)=>e.name.localeCompare(r.name))])}toggleCheckbox(r){const e=this.users.find(s=>s.id===r);e&&(e.checked=!e.checked,this.requestUpdate())}render(){return h`
      <ul>
        ${Qr(this.users,r=>r.id,r=>h`
          <li>
            <input type="checkbox"
                   ?checked=${r.checked}
                   @click=${()=>this.toggleCheckbox(r.id)}>
            ${r.name}
          </li>
        `)}
      </ul>
      <button @click=${this.toggleSort}>목록 정렬</button>
    `}};Le([b({type:Array})],le.prototype,"users",2),Le([b({type:Boolean})],le.prototype,"sorted",2),le=Le([d("repeat-directive")],le);var en=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,sn=(r,e,s,n)=>{for(var t=n>1?void 0:n?tn(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&en(e,s,t),t};let Jt=class extends u{render(){return h`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <p>이곳은 공통 콘텐츠 영역입니다.</p>
        <slot name="footer"></slot>
      </div>
    `}};Jt=sn([d("named-slot-element")],Jt);var rn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,on=(r,e,s,n)=>{for(var t=n>1?void 0:n?nn(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&rn(e,s,t),t};let Kt=class extends u{render(){return h`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `}};Kt=on([d("same-name-slot")],Kt);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,an=(r,e,s,n)=>{for(var t=n>1?void 0:n?cn(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&ln(e,s,t),t};let Zt=class extends u{render(){return h`
      <slot @slotchange="${this.handleSlotChange}"></slot>
    `}handleSlotChange(r){const s=r.target.assignedNodes();console.log("슬롯에 할당된 노드들:"),s.forEach(n=>{n.nodeType===Node.ELEMENT_NODE?console.log("이것은 element입니다.",n.outerHTML):n.nodeType===Node.TEXT_NODE&&console.log("이것은 text 입니다.",n.nodeValue)})}};Zt=an([d("slot-content")],Zt);var hn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,pn=(r,e,s,n)=>{for(var t=n>1?void 0:n?un(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&hn(e,s,t),t};let Xt=class extends u{handleSlotchange(r){const s=r.target.assignedNodes({flatten:!0}).map(n=>n.textContent?n.textContent:"").join("");console.log("slot change event fired:",{allText:s})}render(){return h`<slot @slotchange=${this.handleSlotchange}></slot>`}};Xt=pn([d("slot-change")],Xt);var dn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,vn=(r,e,s,n)=>{for(var t=n>1?void 0:n?fn(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&dn(e,s,t),t};let Qt=class extends u{render(){return h`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `}};Qt=vn([d("slot-init")],Qt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=r=>$s(r)?r._$litType$.h:r.strings,$n=w(class extends K{constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[e]){const s=pt(this.it)?Gt(this.it):null,n=pt(e)?Gt(e):null;if(s!==null&&(n===null||s!==n)){const t=be(r).pop();let i=this.et.get(s);if(i===void 0){const o=document.createDocumentFragment();i=at(_,o),i.setConnected(!1),this.et.set(s,i)}k(i,[t]),O(i,void 0,t)}if(n!==null){if(s===null||s!==n){const t=this.et.get(n);if(t!==void 0){const i=be(t).pop();vt(r),O(r,void 0,i),k(r,[i])}}this.it=e}else this.it=void 0;return this.render(e)}});var _n=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,Be=(r,e,s,n)=>{for(var t=n>1?void 0:n?bn(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&_n(e,s,t),t};const mn=r=>h`<div>Detail View: ${r.detail}</div>`,gn=r=>h`<div>Summary View: ${r.summary}</div>`;let ce=class extends u{constructor(){super(...arguments),this.detail=!0,this.data={detail:"여기에 상세 내용",summary:"여기에 요약 내용"}}render(){return h`
      <button @click="${()=>this.detail=!this.detail}">Toggle Details</button>
      ${$n(this.detail?mn(this.data):gn(this.data))}
    `}};Be([U()],ce.prototype,"detail",2),Be([b({type:Object})],ce.prototype,"data",2),ce=Be([d("template-cache")],ce)});
