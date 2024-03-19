(function(x){typeof define=="function"&&define.amd?define(x):x()})(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;const x=globalThis,ae=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),Be=new WeakMap;let Ve=class{constructor(e,s,n){if(this._$cssResult$=!0,n!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(ae&&e===void 0){const n=s!==void 0&&s.length===1;n&&(e=Be.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Be.set(s,e))}return e}toString(){return this.cssText}};const S=r=>new Ve(typeof r=="string"?r:r+"",void 0,he),M=(r,...e)=>{const s=r.length===1?r[0]:e.reduce((n,t,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+r[i+1],r[0]);return new Ve(s,r,he)},Kt=(r,e)=>{if(ae)r.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const n=document.createElement("style"),t=x.litNonce;t!==void 0&&n.setAttribute("nonce",t),n.textContent=s.cssText,r.appendChild(n)}},ze=ae?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let s="";for(const n of e.cssRules)s+=n.cssText;return S(s)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zt,defineProperty:Xt,getOwnPropertyDescriptor:Qt,getOwnPropertyNames:Gt,getOwnPropertySymbols:kt,getPrototypeOf:es}=Object,C=globalThis,qe=C.trustedTypes,ts=qe?qe.emptyScript:"",ue=C.reactiveElementPolyfillSupport,V=(r,e)=>r,Q={toAttribute(r,e){switch(e){case Boolean:r=r?ts:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let s=r;switch(e){case Boolean:s=r!==null;break;case Number:s=r===null?null:Number(r);break;case Object:case Array:try{s=JSON.parse(r)}catch{s=null}}return s}},pe=(r,e)=>!Zt(r,e),We={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:pe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);class H extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=We){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(e,s),!s.noAccessor){const n=Symbol(),t=this.getPropertyDescriptor(e,n,s);t!==void 0&&Xt(this.prototype,e,t)}}static getPropertyDescriptor(e,s,n){const{get:t,set:i}=Qt(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get(){return t==null?void 0:t.call(this)},set(o){const c=t==null?void 0:t.call(this);i.call(this,o),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??We}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=es(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const s=this.properties,n=[...Gt(s),...kt(s)];for(const t of n)this.createProperty(t,s[t])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[n,t]of s)this.elementProperties.set(n,t)}this._$Eh=new Map;for(const[s,n]of this.elementProperties){const t=this._$Eu(s,n);t!==void 0&&this._$Eh.set(t,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const t of n)s.unshift(ze(t))}else e!==void 0&&s.push(ze(e));return s}static _$Eu(e,s){const n=s.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const n of s.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var n;return(n=s.hostConnected)==null?void 0:n.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var n;return(n=s.hostDisconnected)==null?void 0:n.call(s)})}attributeChangedCallback(e,s,n){this._$AK(e,n)}_$EC(e,s){var i;const n=this.constructor.elementProperties.get(e),t=this.constructor._$Eu(e,n);if(t!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Q).toAttribute(s,n.type);this._$Em=e,o==null?this.removeAttribute(t):this.setAttribute(t,o),this._$Em=null}}_$AK(e,s){var i;const n=this.constructor,t=n._$Eh.get(e);if(t!==void 0&&this._$Em!==t){const o=n.getPropertyOptions(t),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:Q;this._$Em=t,this[t]=c.fromAttribute(s,o.type),this._$Em=null}}requestUpdate(e,s,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??pe)(this[e],s))return;this.P(e,s,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,s,n){this._$AL.has(e)||this._$AL.set(e,s),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,o]of t)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(n=this._$EO)==null||n.forEach(t=>{var i;return(i=t.hostUpdate)==null?void 0:i.call(t)}),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(n=>{var t;return(t=n.hostUpdated)==null?void 0:t.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(e){}firstUpdated(e){}}H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[V("elementProperties")]=new Map,H[V("finalized")]=new Map,ue==null||ue({ReactiveElement:H}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,G=z.trustedTypes,Ye=G?G.createPolicy("lit-html",{createHTML:r=>r}):void 0,de="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,fe="?"+P,ss=`<${fe}>`,D=document,q=()=>D.createComment(""),W=r=>r===null||typeof r!="object"&&typeof r!="function",Fe=Array.isArray,Je=r=>Fe(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",$e=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Ze=/>/g,T=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,Qe=/"/g,Ge=/^(?:script|style|textarea|title)$/i,rs=r=>(e,...s)=>({_$litType$:r,strings:e,values:s}),h=rs(1),g=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ke=new WeakMap,j=D.createTreeWalker(D,129);function et(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ye!==void 0?Ye.createHTML(e):e}const tt=(r,e)=>{const s=r.length-1,n=[];let t,i=e===2?"<svg>":"",o=Y;for(let c=0;c<s;c++){const l=r[c];let u,v,a=-1,$=0;for(;$<l.length&&(o.lastIndex=$,v=o.exec(l),v!==null);)$=o.lastIndex,o===Y?v[1]==="!--"?o=Ke:v[1]!==void 0?o=Ze:v[2]!==void 0?(Ge.test(v[2])&&(t=RegExp("</"+v[2],"g")),o=T):v[3]!==void 0&&(o=T):o===T?v[0]===">"?(o=t??Y,a=-1):v[1]===void 0?a=-2:(a=o.lastIndex-v[2].length,u=v[1],o=v[3]===void 0?T:v[3]==='"'?Qe:Xe):o===Qe||o===Xe?o=T:o===Ke||o===Ze?o=Y:(o=T,t=void 0);const f=o===T&&r[c+1].startsWith("/>")?" ":"";i+=o===Y?l+ss:a>=0?(n.push(u),l.slice(0,a)+de+l.slice(a)+P+f):l+P+(a===-2?c:f)}return[et(r,i+(r[s]||"<?>")+(e===2?"</svg>":"")),n]};class F{constructor({strings:e,_$litType$:s},n){let t;this.parts=[];let i=0,o=0;const c=e.length-1,l=this.parts,[u,v]=tt(e,s);if(this.el=F.createElement(u,n),j.currentNode=this.el.content,s===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(t=j.nextNode())!==null&&l.length<c;){if(t.nodeType===1){if(t.hasAttributes())for(const a of t.getAttributeNames())if(a.endsWith(de)){const $=v[o++],f=t.getAttribute(a).split(P),m=/([.?@])?(.*)/.exec($);l.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?rt:m[1]==="?"?nt:m[1]==="@"?it:J}),t.removeAttribute(a)}else a.startsWith(P)&&(l.push({type:6,index:i}),t.removeAttribute(a));if(Ge.test(t.tagName)){const a=t.textContent.split(P),$=a.length-1;if($>0){t.textContent=G?G.emptyScript:"";for(let f=0;f<$;f++)t.append(a[f],q()),j.nextNode(),l.push({type:2,index:++i});t.append(a[$],q())}}}else if(t.nodeType===8)if(t.data===fe)l.push({type:2,index:i});else{let a=-1;for(;(a=t.data.indexOf(P,a+1))!==-1;)l.push({type:7,index:i}),a+=P.length-1}i++}}static createElement(e,s){const n=D.createElement("template");return n.innerHTML=e,n}}function R(r,e,s=r,n){var o,c;if(e===g)return e;let t=n!==void 0?(o=s._$Co)==null?void 0:o[n]:s._$Cl;const i=W(e)?void 0:e._$litDirective$;return(t==null?void 0:t.constructor)!==i&&((c=t==null?void 0:t._$AO)==null||c.call(t,!1),i===void 0?t=void 0:(t=new i(r),t._$AT(r,s,n)),n!==void 0?(s._$Co??(s._$Co=[]))[n]=t:s._$Cl=t),t!==void 0&&(e=R(r,t._$AS(r,e.values),t,n)),e}class st{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:n}=this._$AD,t=((e==null?void 0:e.creationScope)??D).importNode(s,!0);j.currentNode=t;let i=j.nextNode(),o=0,c=0,l=n[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new I(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new ot(i,this,e)),this._$AV.push(u),l=n[++c]}o!==(l==null?void 0:l.index)&&(i=j.nextNode(),o++)}return j.currentNode=D,t}p(e){let s=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,s),s+=n.strings.length-2):n._$AI(e[s])),s++}}class I{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,n,t){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=n,this.options=t,this._$Cv=(t==null?void 0:t.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=R(this,e,s),W(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==g&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Je(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){var i;const{values:s,_$litType$:n}=e,t=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=F.createElement(et(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===t)this._$AH.p(s);else{const o=new st(t,this),c=o.u(this.options);o.p(s),this.T(c),this._$AH=o}}_$AC(e){let s=ke.get(e.strings);return s===void 0&&ke.set(e.strings,s=new F(e)),s}k(e){Fe(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let n,t=0;for(const i of e)t===s.length?s.push(n=new I(this.S(q()),this.S(q()),this,this.options)):n=s[t],n._$AI(i),t++;t<s.length&&(this._$AR(n&&n._$AB.nextSibling,t),s.length=t)}_$AR(e=this._$AA.nextSibling,s){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,s);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,n,t,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=s,this._$AM=t,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,s=this,n,t){const i=this.strings;let o=!1;if(i===void 0)e=R(this,e,s,0),o=!W(e)||e!==this._$AH&&e!==g,o&&(this._$AH=e);else{const c=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=R(this,c[n+l],s,l),u===g&&(u=this._$AH[l]),o||(o=!W(u)||u!==this._$AH[l]),u===_?e=_:e!==_&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}o&&!t&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class rt extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class nt extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class it extends J{constructor(e,s,n,t,i){super(e,s,n,t,i),this.type=5}_$AI(e,s=this){if((e=R(this,e,s,0)??_)===g)return;const n=this._$AH,t=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==_&&(n===_||t);t&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class ot{constructor(e,s,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const ns={P:de,A:P,C:fe,M:1,L:tt,R:st,D:Je,V:R,I,H:J,N:nt,U:it,B:rt,F:ot},ve=z.litHtmlPolyfillSupport;ve==null||ve(F,I),(z.litHtmlVersions??(z.litHtmlVersions=[])).push("3.1.2");const lt=(r,e,s)=>{const n=(s==null?void 0:s.renderBefore)??e;let t=n._$litPart$;if(t===void 0){const i=(s==null?void 0:s.renderBefore)??null;n._$litPart$=t=new I(e.insertBefore(q(),i),i,void 0,s??{})}return t._$AI(r),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=lt(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return g}};p._$litElement$=!0,p.finalized=!0,(Ft=globalThis.litElementHydrateSupport)==null||Ft.call(globalThis,{LitElement:p});const _e=globalThis.litElementPolyfillSupport;_e==null||_e({LitElement:p}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=r=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:pe},os=(r=is,e,s)=>{const{kind:n,metadata:t}=s;let i=globalThis.litPropertyMetadata.get(t);if(i===void 0&&globalThis.litPropertyMetadata.set(t,i=new Map),i.set(s.name,r),n==="accessor"){const{name:o}=s;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,l,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(n==="setter"){const{name:o}=s;return function(c){const l=this[o];e.call(this,c),this.requestUpdate(o,l,r)}}throw Error("Unsupported decorator location: "+n)};function b(r){return(e,s)=>typeof s=="object"?os(r,e,s):((n,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(t,i):void 0})(r,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(r){return b({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ls(r){return(e,s)=>{const n=typeof e=="function"?e:e[s];Object.assign(n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=(r,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(r,e){return(s,n,t)=>{const i=o=>{var c;return((c=o.renderRoot)==null?void 0:c.querySelector(r))??null};if(e){const{get:o,set:c}=typeof n=="object"?s:t??(()=>{const l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return ct(s,n,{get(){let l=o.call(this);return l===void 0&&(l=i(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return ct(s,n,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},w=r=>(...e)=>({_$litDirective$:r,values:e});let K=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:cs}=ns,ht=(r,e)=>e===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===e,as=r=>{var e;return((e=r==null?void 0:r._$litType$)==null?void 0:e.h)!=null},ut=r=>r.strings===void 0,pt=()=>document.createComment(""),O=(r,e,s)=>{var i;const n=r._$AA.parentNode,t=e===void 0?r._$AB:e._$AA;if(s===void 0){const o=n.insertBefore(pt(),t),c=n.insertBefore(pt(),t);s=new cs(o,c,r,r.options)}else{const o=s._$AB.nextSibling,c=s._$AM,l=c!==r;if(l){let u;(i=s._$AQ)==null||i.call(s,r),s._$AM=r,s._$AP!==void 0&&(u=r._$AU)!==c._$AU&&s._$AP(u)}if(o!==t||l){let u=s._$AA;for(;u!==o;){const v=u.nextSibling;n.insertBefore(u,t),u=v}}}return s},E=(r,e,s=r)=>(r._$AI(e,s),r),hs={},k=(r,e=hs)=>r._$AH=e,be=r=>r._$AH,me=r=>{var n;(n=r._$AP)==null||n.call(r,!1,!0);let e=r._$AA;const s=r._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},dt=r=>{r._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=(r,e)=>{var n;const s=r._$AN;if(s===void 0)return!1;for(const t of s)(n=t._$AO)==null||n.call(t,e,!1),Z(t,e);return!0},ee=r=>{let e,s;do{if((e=r._$AM)===void 0)break;s=e._$AN,s.delete(r),r=e}while((s==null?void 0:s.size)===0)},ft=r=>{for(let e;e=r._$AM;r=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(r))break;s.add(r),ds(e)}};function us(r){this._$AN!==void 0?(ee(this),this._$AM=r,ft(this)):this._$AM=r}function ps(r,e=!1,s=0){const n=this._$AH,t=this._$AN;if(t!==void 0&&t.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)Z(n[i],!1),ee(n[i]);else n!=null&&(Z(n,!1),ee(n));else Z(this,r)}const ds=r=>{r.type==y.CHILD&&(r._$AP??(r._$AP=ps),r._$AQ??(r._$AQ=us))};class ge extends K{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),ft(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,t;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(t=this.disconnected)==null||t.call(this)),s&&(Z(this,e),ee(this))}setValue(e){if(ut(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=async(r,e)=>{for await(const s of r)if(await e(s)===!1)return};let $s=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},vs=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $t=class extends ge{constructor(){super(...arguments),this._$CK=new $s(this),this._$CX=new vs}render(e,s){return g}update(e,[s,n]){if(this.isConnected||this.disconnected(),s===this._$CJ)return g;this._$CJ=s;let t=0;const{_$CK:i,_$CX:o}=this;return fs(s,async c=>{for(;o.get();)await o.get();const l=i.deref();if(l!==void 0){if(l._$CJ!==s)return!1;n!==void 0&&(c=n(c,t)),l.commitValue(c,t),t++}return!0}),g}commitValue(e,s){this.setValue(e)}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const _s=w($t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs=w(class extends $t{constructor(r){if(super(r),r.type!==y.CHILD)throw Error("asyncAppend can only be used in child expressions")}update(r,e){return this._$Ctt=r,super.update(r,e)}commitValue(r,e){e===0&&dt(this._$Ctt);const s=O(this._$Ctt);E(s,r)}});var ms=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,vt=(r,e,s,n)=>{for(var t=n>1?void 0:n?gs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&ms(e,s,t),t};async function*ys(r){for(let e=0;e<r;e++)yield Math.random()>.5?"Heads":"Tails",await new Promise(s=>setTimeout(s,1e3))}let ye=class extends p{constructor(){super(...arguments),this.tosses=ys(10)}render(){return h`
      <ul>${bs(this.tosses,r=>h`<li>${r}</li>`)}</ul>
    `}};vt([U()],ye.prototype,"tosses",2),ye=vt([d("async-append")],ye);var Ps=Object.defineProperty,As=Object.getOwnPropertyDescriptor,_t=(r,e,s,n)=>{for(var t=n>1?void 0:n?As(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Ps(e,s,t),t};async function*Cs(r){for(;r>0;)yield r--,await new Promise(e=>setTimeout(e,1e3));yield"BOOM"}let Pe=class extends p{constructor(){super(...arguments),this.timer=Cs(10)}render(){return h`Timer: <span>${_s(this.timer)}</span>.`}};_t([U()],Pe.prototype,"timer",2),Pe=_t([d("async-replace")],Pe);var ws=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,X=(r,e,s,n)=>{for(var t=n>1?void 0:n?Os(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&ws(e,s,t),t};let N=class extends p{constructor(){super(...arguments),this.value="button",this.disabled=!1,this.loading=!1,this.type="default"}render(){return console.log(this.loading),h`
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
  `,X([b({type:String})],N.prototype,"value",2),X([b({type:Boolean})],N.prototype,"disabled",2),X([b({type:Boolean})],N.prototype,"loading",2),X([b({type:String})],N.prototype,"type",2),N=X([d("my-button")],N);var Es=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,te=(r,e,s,n)=>{for(var t=n>1?void 0:n?xs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Es(e,s,t),t};let L=class extends p{constructor(){super(...arguments),this.name="anonymous",this._submitEnabled=!1}_inputChanged(r){this._submitEnabled=!!r.target.value}_updateName(){this.name=this._input.value,this._input.value="",this._submitEnabled=!1}render(){return h`<p>Nickname: ${this.name}</p>
        <label>Enter new nickname:
          <input @input=${this._inputChanged}>
        </label>
        <button @click=${this._updateName}
                .disabled=${!this._submitEnabled}>Submit</button>`}};L.styles=M`
    :host {
      font-family: sans-serif;
    }
  `,te([b()],L.prototype,"name",2),te([U()],L.prototype,"_submitEnabled",2),te([at("input")],L.prototype,"_input",2),L=te([d("mediator-element")],L);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bt=class extends Event{constructor(e,s,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=s,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pn(r){return r}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mt=class{constructor(e,s,n,t){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,o)),this.unsubscribe=o},this.host=e,s.context!==void 0){const i=s;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=s,this.callback=n,this.subscribe=t??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new bt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ss{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,s=!1){const n=s||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:n}]of this.subscriptions)s(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,s,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:s});const{disposer:t}=this.subscriptions.get(e);e(this.value,t)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ds=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},gt=class extends Ss{constructor(e,s,n){var t,i;super(s.context!==void 0?s.initialValue:n),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const l=new Set;for(const[u,{consumerHost:v}]of this.subscriptions)l.has(u)||(l.add(u),v.dispatchEvent(new bt(this.context,u,!0)));o.stopPropagation()},this.host=e,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),(i=(t=this.host).addController)==null||i.call(t,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ds(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ts({context:r}){return(e,s)=>{const n=new WeakMap;if(typeof s=="object")return s.addInitializer(function(){n.set(this,new gt(this,{context:r}))}),{get(){return e.get.call(this)},set(t){var i;return(i=n.get(this))==null||i.setValue(t),e.set.call(this,t)},init(t){var i;return(i=n.get(this))==null||i.setValue(t),t}};{e.constructor.addInitializer(o=>{n.set(o,new gt(o,{context:r}))});const t=Object.getOwnPropertyDescriptor(e,s);let i;if(t===void 0){const o=new WeakMap;i={get:function(){return o.get(this)},set:function(c){n.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=t.set;i={...t,set:function(c){n.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,s,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function js({context:r,subscribe:e}){return(s,n)=>{typeof n=="object"?n.addInitializer(function(){new mt(this,{context:r,callback:t=>{this[n.name]=t},subscribe:e})}):s.constructor.addInitializer(t=>{new mt(t,{context:r,callback:i=>{t[n]=i},subscribe:e})})}}const yt=Symbol("themecontext");var Rs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Pt=(r,e,s,n)=>{for(var t=n>1?void 0:n?Us(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Rs(e,s,t),t};let Ae=class extends p{render(){return h`<div>Current Theme: ${this.theme11}</div>`}};Pt([js({context:yt,subscribe:!0}),b({attribute:!1})],Ae.prototype,"theme11",2),Ae=Pt([d("theme-consumer")],Ae);var Ns=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,At=(r,e,s,n)=>{for(var t=n>1?void 0:n?Ms(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Ns(e,s,t),t};let Ce=class extends p{constructor(){super(...arguments),this.theme="light"}changeTheme(){console.log("changeTheme",this.theme),this.theme=this.theme==="dark"?"light":"dark"}render(){return h`
      <button @click=${this.changeTheme}>테마 변경하자</button>
      <theme-consumer></theme-consumer>
    `}};At([Ts({context:yt}),b({attribute:!1})],Ce.prototype,"theme",2),Ce=At([d("theme-provider")],Ce);var Hs=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,Ls=(r,e,s,n)=>{for(var t=n>1?void 0:n?Is(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Hs(e,s,t),t};class Bs{constructor(e){this.host=e,e.addController(this)}hostConnected(){console.log("컴포넌트가 DOM에 연결되었습니다.")}hostUpdate(){console.log("컴포넌트 업데이트가 시작되기 전입니다.")}hostUpdated(){console.log("컴포넌트 업데이트가 완료되었습니다.")}hostDisconnected(){console.log("컴포넌트가 DOM에서 연결 해제되었습니다.")}}let Ct=class extends p{constructor(){super(),new Bs(this)}render(){return h`<p>안녕하세요, 리액티브 컨트롤러 예제입니다!</p>`}};Ct=Ls([d("reactive-controller")],Ct);var Vs=Object.defineProperty,zs=Object.getOwnPropertyDescriptor,we=(r,e,s,n)=>{for(var t=n>1?void 0:n?zs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Vs(e,s,t),t};let se=class extends p{constructor(){super(),this.hostName="",this.shadowName="",this.addEventListener("click",r=>this.hostName=r.target.localName)}createRenderRoot(){const r=super.createRenderRoot();return r.addEventListener("click",e=>this.shadowName=e.target.localName),r}_pclick(r){console.log("p click")}render(){return h`
      <p><button>Click Me!</button></p>
      <p>Component target: ${this.hostName}</p>
      <p>Shadow target: ${this.shadowName}</p>
      <p @click=${this._pclick}>Click me!</p>
    `}};we([b()],se.prototype,"hostName",2),we([b()],se.prototype,"shadowName",2),se=we([d("create-render-root")],se);const wt=M`
  :host {
    display: block;
    color: blue;
  }
  p {
    font-size: 20px;
  }
`;var qs=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,Ys=(r,e,s,n)=>{for(var t=n>1?void 0:n?Ws(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&qs(e,s,t),t};let Oe=class extends p{render(){return h`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `}};Oe.styles=[wt,M`
      p {
        color: red;
      }
    `],Oe=Ys([d("child-component")],Oe);var Fs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Ks=(r,e,s,n)=>{for(var t=n>1?void 0:n?Js(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Fs(e,s,t),t};let Ee=class extends p{render(){return h`
      <p>부모 컴포넌트의 스타일</p>
    `}};Ee.styles=wt,Ee=Ks([d("parent-component")],Ee);class Zs extends ge{render(e){return Promise.resolve(e).then(s=>{this.setValue(s)}),"Waiting for promise to resolve"}}const Xs=w(Zs);var Qs=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,Ot=(r,e,s,n)=>{for(var t=n>1?void 0:n?Gs(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Qs(e,s,t),t};function ks(){return new Promise(r=>{setTimeout(()=>{r("사용자 이름: 뤼튼, 취미: 코딩")},2e3)})}let xe=class extends p{constructor(){super(),this.userProfile=ks()}render(){return h`
      <p>${Xs(this.userProfile)}</p>
    `}};Ot([b({attribute:!1})],xe.prototype,"userProfile",2),xe=Ot([d("async-directive")],xe);const B={colors:{primary:"#6200EE",primaryVariant:"#3700B3",onPrimary:"#FFFFFF",default:"#FFFFFF",defaultVariant:"#EEEEEE",onDefault:"#000000"},typography:{bodyText:{fontFamily:"Roboto, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},buttonText:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:"500",lineHeight:"16px"}},spacing:{small:"8px",medium:"16px",large:"24px"},borderRadius:{small:"4px",medium:"8px",large:"16px"}};var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,sr=(r,e,s,n)=>{for(var t=n>1?void 0:n?tr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&er(e,s,t),t};let Se=class extends p{render(){return h`
      <button>Click me</button>
    `}};Se.styles=M`
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
  `,Se=sr([d("design-system")],Se);var rr=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,ir=(r,e,s,n)=>{for(var t=n>1?void 0:n?nr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&rr(e,s,t),t};let Et=class extends p{_onClicked(){const r=new CustomEvent("my-custom-event",{detail:{more:{msg:"fireddddd"}},bubbles:!0,composed:!0});this.dispatchEvent(r)}render(){return h`
      <button @click="${this._onClicked}">이벤트 발생시키기</button>
    `}};Et=ir([d("custom-event")],Et);var or=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,xt=(r,e,s,n)=>{for(var t=n>1?void 0:n?lr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&or(e,s,t),t};let De=class extends p{constructor(){super(...arguments),this.clicked=""}render(){return h`
      <div @click="${this._clickHandler}">
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
      </div>
      <p>Clicked: ${this.clicked}</p>
    `}_clickHandler(r){this.clicked=r.target===r.currentTarget?"container":r.target.textContent}};xt([b()],De.prototype,"clicked",2),De=xt([d("event-delegation")],De);var cr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,Te=(r,e,s,n)=>{for(var t=n>1?void 0:n?ar(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&cr(e,s,t),t};let re=class extends p{constructor(){super(...arguments),this.label="Check me!",this.defaultMessage="🙂",this.message=this.defaultMessage}render(){return h`
      <label><input type="checkbox" @click=${this._tryChange}>${this.label}</label>
      <div>${this.message}</div>
    `}_tryChange(r){const e={message:this.message},s=new CustomEvent("checked",{detail:e,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(s),s.defaultPrevented&&r.preventDefault(),this.message=e.message}updated(){clearTimeout(this._resetMessage),this._resetMessage=setTimeout(()=>this.message=this.defaultMessage,1e3)}};Te([b()],re.prototype,"label",2),Te([b()],re.prototype,"message",2),re=Te([d("event-dispatcher-communication")],re);var hr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,St=(r,e,s,n)=>{for(var t=n>1?void 0:n?ur(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&hr(e,s,t),t};let je=class extends p{constructor(){super(...arguments),this.canCheck=!1}render(){return h`
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck?"Allowing":"Preventing"} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`}_checkedHandler(r){this.canCheck||(r.preventDefault(),r.detail.message="✅ Prevented!!")}_clickHandler(){this.canCheck=!this.canCheck}};St([b({type:Boolean})],je.prototype,"canCheck",2),je=St([d("my-listener")],je);var pr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,Dt=(r,e,s,n)=>{for(var t=n>1?void 0:n?dr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&pr(e,s,t),t};let Re=class extends p{_passiveclick(r){console.log(r.type)}_click(r){console.log(r.type)}render(){return h`
      <div @click=${this._passiveclick}>Passive event</div>
      <div @click=${this._click}>Normal event</div>
    `}};Dt([ls({passive:!0})],Re.prototype,"_passiveclick",1),Re=Dt([d("event-passive")],Re);var fr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,vr=(r,e,s,n)=>{for(var t=n>1?void 0:n?$r(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&fr(e,s,t),t};let Tt=class extends p{render(){return h`
      <button id="mybutton" @click="${r=>console.log(r.target)}">
        click me
      </button>
      <ul @click="${this.handleEvent}">
        <li><button>Item 1</button></li>
        <li><button>Item 2</button></li>
        <li><button>Item 3</button></li>
      </ul>
      `}handleEvent(r){console.log("Origin:",r.composedPath()[0])}};Tt=vr([d("event-retargeting")],Tt);var _r=Object.defineProperty,br=Object.getOwnPropertyDescriptor,mr=(r,e,s,n)=>{for(var t=n>1?void 0:n?br(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&_r(e,s,t),t};class gr extends Event{constructor(){super("my-standard-event",{bubbles:!0,composed:!0})}}let jt=class extends p{fireEvent(){const r=new gr;this.dispatchEvent(r)}render(){return h`
      <button @click="${this.fireEvent}">이벤트 발생시키기</button>
    `}};jt=mr([d("standard-event")],jt);var yr=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,Ue=(r,e,s,n)=>{for(var t=n>1?void 0:n?Pr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&yr(e,s,t),t};let ne=class extends p{constructor(){super(...arguments),this.t1=h`<h1>hello</h1>`,this.t2=h`<h2>world</h2>`}render(){return h`${this.t1}${this.t2}`}};Ue([U()],ne.prototype,"t1",2),Ue([U()],ne.prototype,"t2",2),ne=Ue([d("html-expression")],ne);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt="important",Ar=" !"+Rt,Cr=w(class extends K{constructor(r){var e;if(super(r),r.type!==y.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,s)=>{const n=r[s];return n==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(r,[e]){const{style:s}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in e){const t=e[n];if(t!=null){this.ft.add(n);const i=typeof t=="string"&&t.endsWith(Ar);n.includes("-")||i?s.setProperty(n,i?t.slice(0,-11):t,i?Rt:""):s[n]=t}}return g}}),wr={backgroundColor:"blue",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer"};var Or=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,xr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Er(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Or(e,s,t),t};let Ut=class extends p{render(){return h`
      <button style=${Cr(wr)}>버튼이야</button>
    `}};Ut=xr([d("json-in-css")],Ut);var Sr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Nt=(r,e,s,n)=>{for(var t=n>1?void 0:n?Dr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Sr(e,s,t),t};let ie=class extends p{constructor(){super(),this.count=0}connectedCallback(){super.connectedCallback(),console.log("connectedCallback")}disconnectedCallback(){super.disconnectedCallback(),console.log("disconnectedCallback")}shouldUpdate(r){return console.log("shouldUpdate:",r),r.has("count")}willUpdate(r){console.log("willUpdate:",r)}update(r){super.update(r),console.log("update:",r)}firstUpdated(r){console.log("firstUpdated:",r)}updated(r){console.log("updated:",r)}render(){return h`
      <h1>Count: ${this.count}</h1>
      <button @click="${this.incrementCount}">Increment</button>
    `}incrementCount(){this.count+=1}};ie.styles=M`
      :host {
        display: block;
      }
    `,Nt([b({type:Number,hasChanged(r,e){return console.log(`hasChanged: ${e} -> ${r}`),e!==r}})],ie.prototype,"count",2),ie=Nt([d("life-cycle-first")],ie);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=w(class extends K{constructor(r){if(super(r),r.type!==y.PROPERTY&&r.type!==y.ATTRIBUTE&&r.type!==y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ut(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===g||e===_)return e;const s=r.element,n=r.name;if(r.type===y.PROPERTY){if(e===s[n])return g}else if(r.type===y.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(n))return g}else if(r.type===y.ATTRIBUTE&&s.getAttribute(n)===e+"")return g;return k(r),e}});var jr=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,Ne=(r,e,s,n)=>{for(var t=n>1?void 0:n?Rr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&jr(e,s,t),t};let oe=class extends p{constructor(){super(...arguments),this.data={value:"test"}}render(){return h`
      <h3>live directive example</h3>

      Set this value to the inputs below.<br>
      <input id="value" .value=${this.data.value}>
      <button @click=${this.commitValue}>Commit</button>

      With live: will update if out of sync with last rendered value<br>
      <input .value=${Tr(this.data.value)} placeholder="type here, click commit">

      Without live: will not update if out of sync with last rendered value<br>
      <input .value=${this.data.value} placeholder="type here, click commit">
    `}commitValue(){this.data={...this.data,value:this.input.value}}};Ne([U()],oe.prototype,"data",2),Ne([at("input#value")],oe.prototype,"input",2),oe=Ne([d("live-sample")],oe);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur=()=>new Nr;let Nr=class{};const Me=new WeakMap,Mt=w(class extends ge{render(r){return _}update(r,[e]){var n;const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=r.options)==null?void 0:n.host,this.rt(this.ct=r.element)),_}rt(r){if(typeof this.Y=="function"){const e=this.ht??globalThis;let s=Me.get(e);s===void 0&&(s=new WeakMap,Me.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=Me.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Mr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Ir=(r,e,s,n)=>{for(var t=n>1?void 0:n?Hr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Mr(e,s,t),t};let Ht=class extends p{constructor(){super(...arguments),this.buttonRef=Ur()}firstUpdated(){const r=this.buttonRef.value;r&&r.addEventListener("click",()=>{console.log("버튼이 클릭되었습니다!")})}render(){return h`
      <button ${Mt(this.buttonRef)}>클릭하세요</button>
      <div>
        <input type="text" ${Mt(this.setInputRef)} />
        <button @click="${this.logInputValue}">로그 출력</button>
      </div>
      `}setInputRef(r){this.inputRef=r}logInputValue(){this.inputRef&&console.log(this.inputRef.value)}};Ht=Ir([d("with-ref")],Ht);var Lr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Vr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Br(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Lr(e,s,t),t};let It=class extends p{firstUpdated(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("button");r&&r.addEventListener("click",()=>{console.log("버튼이 클릭되었습니다!")})}render(){return h`<button>클릭하세요</button>`}};It=Vr([d("without-ref")],It);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=(r,e,s)=>{const n=new Map;for(let t=e;t<=s;t++)n.set(r[t],t);return n},zr=w(class extends K{constructor(r){if(super(r),r.type!==y.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,s){let n;s===void 0?s=e:e!==void 0&&(n=e);const t=[],i=[];let o=0;for(const c of r)t[o]=n?n(c,o):o,i[o]=s(c,o),o++;return{values:i,keys:t}}render(r,e,s){return this.dt(r,e,s).values}update(r,[e,s,n]){const t=be(r),{values:i,keys:o}=this.dt(e,s,n);if(!Array.isArray(t))return this.ut=o,i;const c=this.ut??(this.ut=[]),l=[];let u,v,a=0,$=t.length-1,f=0,m=i.length-1;for(;a<=$&&f<=m;)if(t[a]===null)a++;else if(t[$]===null)$--;else if(c[a]===o[f])l[f]=E(t[a],i[f]),a++,f++;else if(c[$]===o[m])l[m]=E(t[$],i[m]),$--,m--;else if(c[a]===o[m])l[m]=E(t[a],i[m]),O(r,l[m+1],t[a]),a++,m--;else if(c[$]===o[f])l[f]=E(t[$],i[f]),O(r,t[a],t[$]),$--,f++;else if(u===void 0&&(u=Lt(o,f,m),v=Lt(c,a,$)),u.has(c[a]))if(u.has(c[$])){const A=v.get(o[f]),Le=A!==void 0?t[A]:null;if(Le===null){const Jt=O(r,t[a]);E(Jt,i[f]),l[f]=Jt}else l[f]=E(Le,i[f]),O(r,t[a],Le),t[A]=null;f++}else me(t[$]),$--;else me(t[a]),a++;for(;f<=m;){const A=O(r,l[m+1]);E(A,i[f]),l[f++]=A}for(;a<=$;){const A=t[a++];A!==null&&me(A)}return this.ut=o,k(r,l),g}});var qr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,He=(r,e,s,n)=>{for(var t=n>1?void 0:n?Wr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&qr(e,s,t),t};let le=class extends p{constructor(){super(),this.users=[],this.sorted=!1,this.users=[{id:1,name:"김철수",checked:!1},{id:2,name:"박영희",checked:!1},{id:3,name:"이민준",checked:!1}],this.sorted=!1}toggleSort(){this.sorted=!this.sorted,this.sorted?(console.log(1),this.users=[...this.users.sort((r,e)=>r.name.localeCompare(e.name))]):(console.log(2),this.users=[...this.users.sort((r,e)=>e.name.localeCompare(r.name))])}toggleCheckbox(r){const e=this.users.find(s=>s.id===r);e&&(e.checked=!e.checked,this.requestUpdate())}render(){return h`
      <ul>
        ${zr(this.users,r=>r.id,r=>h`
          <li>
            <input type="checkbox"
                   ?checked=${r.checked}
                   @click=${()=>this.toggleCheckbox(r.id)}>
            ${r.name}
          </li>
        `)}
      </ul>
      <button @click=${this.toggleSort}>목록 정렬</button>
    `}};He([b({type:Array})],le.prototype,"users",2),He([b({type:Boolean})],le.prototype,"sorted",2),le=He([d("repeat-directive")],le);var Yr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,Jr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Fr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Yr(e,s,t),t};let Bt=class extends p{render(){return h`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <p>이곳은 공통 콘텐츠 영역입니다.</p>
        <slot name="footer"></slot>
      </div>
    `}};Bt=Jr([d("named-slot-element")],Bt);var Kr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Xr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Zr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Kr(e,s,t),t};let Vt=class extends p{render(){return h`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `}};Vt=Xr([d("same-name-slot")],Vt);var Qr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,kr=(r,e,s,n)=>{for(var t=n>1?void 0:n?Gr(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&Qr(e,s,t),t};let zt=class extends p{render(){return h`
      <slot @slotchange="${this.handleSlotChange}"></slot>
    `}handleSlotChange(r){const s=r.target.assignedNodes();console.log("슬롯에 할당된 노드들:"),s.forEach(n=>{n.nodeType===Node.ELEMENT_NODE?console.log("이것은 element입니다.",n.outerHTML):n.nodeType===Node.TEXT_NODE&&console.log("이것은 text 입니다.",n.nodeValue)})}};zt=kr([d("slot-content")],zt);var en=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,sn=(r,e,s,n)=>{for(var t=n>1?void 0:n?tn(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&en(e,s,t),t};let qt=class extends p{handleSlotchange(r){const s=r.target.assignedNodes({flatten:!0}).map(n=>n.textContent?n.textContent:"").join("");console.log("slot change event fired:",{allText:s})}render(){return h`<slot @slotchange=${this.handleSlotchange}></slot>`}};qt=sn([d("slot-change")],qt);var rn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,on=(r,e,s,n)=>{for(var t=n>1?void 0:n?nn(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&rn(e,s,t),t};let Wt=class extends p{render(){return h`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `}};Wt=on([d("slot-init")],Wt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=r=>as(r)?r._$litType$.h:r.strings,ln=w(class extends K{constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[e]){const s=ht(this.it)?Yt(this.it):null,n=ht(e)?Yt(e):null;if(s!==null&&(n===null||s!==n)){const t=be(r).pop();let i=this.et.get(s);if(i===void 0){const o=document.createDocumentFragment();i=lt(_,o),i.setConnected(!1),this.et.set(s,i)}k(i,[t]),O(i,void 0,t)}if(n!==null){if(s===null||s!==n){const t=this.et.get(n);if(t!==void 0){const i=be(t).pop();dt(r),O(r,void 0,i),k(r,[i])}}this.it=e}else this.it=void 0;return this.render(e)}});var cn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,Ie=(r,e,s,n)=>{for(var t=n>1?void 0:n?an(e,s):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(t=(n?o(e,s,t):o(t))||t);return n&&t&&cn(e,s,t),t};const hn=r=>h`<div>Detail View: ${r.detail}</div>`,un=r=>h`<div>Summary View: ${r.summary}</div>`;let ce=class extends p{constructor(){super(...arguments),this.detail=!0,this.data={detail:"여기에 상세 내용",summary:"여기에 요약 내용"}}render(){return h`
      <button @click="${()=>this.detail=!this.detail}">Toggle Details</button>
      ${ln(this.detail?hn(this.data):un(this.data))}
    `}};Ie([U()],ce.prototype,"detail",2),Ie([b({type:Object})],ce.prototype,"data",2),ce=Ie([d("template-cache")],ce)});
