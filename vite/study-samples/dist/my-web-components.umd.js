(function(y){typeof define=="function"&&define.amd?define(y):y()})(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie;const y=globalThis,K=y.ShadowRoot&&(y.ShadyCSS===void 0||y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),ce=new WeakMap;let ae=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ce.set(t,e))}return e}toString(){return this.cssText}};const A=n=>new ae(typeof n=="string"?n:n+"",void 0,Z),D=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[i+1],n[0]);return new ae(t,n,Z)},Be=(n,e)=>{if(K)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=y.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,n.appendChild(r)}},he=K?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return A(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ze,defineProperty:Fe,getOwnPropertyDescriptor:Ve,getOwnPropertyNames:We,getOwnPropertySymbols:qe,getPrototypeOf:Je}=Object,m=globalThis,pe=m.trustedTypes,Ke=pe?pe.emptyScript:"",X=m.reactiveElementPolyfillSupport,j=(n,e)=>n,B={toAttribute(n,e){switch(e){case Boolean:n=n?Ke:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Y=(n,e)=>!ze(n,e),de={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Fe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:i}=Ve(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const c=s==null?void 0:s.call(this);i.call(this,o),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const e=Je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const t=this.properties,r=[...We(t),...qe(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(he(s))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Be(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var i;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:B).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var i;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:B;this._$Em=s,this[s]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Y)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[j("elementProperties")]=new Map,S[j("finalized")]=new Map,X==null||X({ReactiveElement:S}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,z=N.trustedTypes,ue=z?z.createPolicy("lit-html",{createHTML:n=>n}):void 0,_e="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,$e="?"+g,Ze=`<${$e}>`,P=document,U=()=>P.createComment(""),R=n=>n===null||typeof n!="object"&&typeof n!="function",fe=Array.isArray,Xe=n=>fe(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",G=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,me=/>/g,C=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,be=/"/g,ye=/^(?:script|style|textarea|title)$/i,Ye=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),p=Ye(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ae=new WeakMap,O=P.createTreeWalker(P,129);function Pe(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ue!==void 0?ue.createHTML(e):e}const Ge=(n,e)=>{const t=n.length-1,r=[];let s,i=e===2?"<svg>":"",o=H;for(let c=0;c<t;c++){const l=n[c];let _,$,a=-1,v=0;for(;v<l.length&&(o.lastIndex=v,$=o.exec(l),$!==null);)v=o.lastIndex,o===H?$[1]==="!--"?o=ve:$[1]!==void 0?o=me:$[2]!==void 0?(ye.test($[2])&&(s=RegExp("</"+$[2],"g")),o=C):$[3]!==void 0&&(o=C):o===C?$[0]===">"?(o=s??H,a=-1):$[1]===void 0?a=-2:(a=o.lastIndex-$[2].length,_=$[1],o=$[3]===void 0?C:$[3]==='"'?be:ge):o===be||o===ge?o=C:o===ve||o===me?o=H:(o=C,s=void 0);const b=o===C&&n[c+1].startsWith("/>")?" ":"";i+=o===H?l+Ze:a>=0?(r.push(_),l.slice(0,a)+_e+l.slice(a)+g+b):l+g+(a===-2?c:b)}return[Pe(n,i+(n[t]||"<?>")+(e===2?"</svg>":"")),r]};class M{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,o=0;const c=e.length-1,l=this.parts,[_,$]=Ge(e,t);if(this.el=M.createElement(_,r),O.currentNode=this.el.content,t===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=O.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(_e)){const v=$[o++],b=s.getAttribute(a).split(g),J=/([.?@])?(.*)/.exec(v);l.push({type:1,index:i,name:J[2],strings:b,ctor:J[1]==="."?ke:J[1]==="?"?et:J[1]==="@"?tt:F}),s.removeAttribute(a)}else a.startsWith(g)&&(l.push({type:6,index:i}),s.removeAttribute(a));if(ye.test(s.tagName)){const a=s.textContent.split(g),v=a.length-1;if(v>0){s.textContent=z?z.emptyScript:"";for(let b=0;b<v;b++)s.append(a[b],U()),O.nextNode(),l.push({type:2,index:++i});s.append(a[v],U())}}}else if(s.nodeType===8)if(s.data===$e)l.push({type:2,index:i});else{let a=-1;for(;(a=s.data.indexOf(g,a+1))!==-1;)l.push({type:7,index:i}),a+=g.length-1}i++}}static createElement(e,t){const r=P.createElement("template");return r.innerHTML=e,r}}function x(n,e,t=n,r){var o,c;if(e===E)return e;let s=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const i=R(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),i===void 0?s=void 0:(s=new i(n),s._$AT(n,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=x(n,s._$AS(n,e.values),s,r)),e}class Qe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??P).importNode(t,!0);O.currentNode=s;let i=O.nextNode(),o=0,c=0,l=r[0];for(;l!==void 0;){if(o===l.index){let _;l.type===2?_=new L(i,i.nextSibling,this,e):l.type===1?_=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(_=new st(i,this,e)),this._$AV.push(_),l=r[++c]}o!==(l==null?void 0:l.index)&&(i=O.nextNode(),o++)}return O.currentNode=P,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class L{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),R(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Xe(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==u&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=M.createElement(Pe(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(t);else{const o=new Qe(s,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new M(e)),t}k(e){fe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const i of e)s===t.length?t.push(r=new L(this.S(U()),this.S(U()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(e,t=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=x(this,e,t,0),o=!R(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const c=e;let l,_;for(e=i[0],l=0;l<i.length-1;l++)_=x(this,c[r+l],t,l),_===E&&(_=this._$AH[l]),o||(o=!R(_)||_!==this._$AH[l]),_===u?e=u:e!==u&&(e+=(_??"")+i[l+1]),this._$AH[l]=_}o&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ke extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class et extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class tt extends F{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??u)===E)return;const r=this._$AH,s=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==u&&(r===u||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class st{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const Q=N.litHtmlPolyfillSupport;Q==null||Q(M,L),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.1.2");const rt=(n,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const i=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new L(e.insertBefore(U(),i),i,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}h._$litElement$=!0,h.finalized=!0,(Ie=globalThis.litElementHydrateSupport)==null||Ie.call(globalThis,{LitElement:h});const k=globalThis.litElementPolyfillSupport;k==null||k({LitElement:h}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:Y},ot=(n=nt,e,t)=>{const{kind:r,metadata:s}=t;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(t.name,n),r==="accessor"){const{name:o}=t;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,l,n)},init(c){return c!==void 0&&this.P(o,void 0,n),c}}}if(r==="setter"){const{name:o}=t;return function(c){const l=this[o];e.call(this,c),this.requestUpdate(o,l,n)}}throw Error("Unsupported decorator location: "+r)};function f(n){return(e,t)=>typeof t=="object"?ot(n,e,t):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(n){return(e,t)=>{const r=typeof e=="function"?e:e[t];Object.assign(r,n)}}var lt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,I=(n,e,t,r)=>{for(var s=r>1?void 0:r?ct(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&lt(e,t,s),s};let w=class extends h{constructor(){super(...arguments),this.value="button",this.disabled=!1,this.loading=!1,this.type="default"}render(){return console.log(this.loading),p`
      <button 
        .disabled=${this.disabled} 
        @click=${this._onClicked}>
        ${this.loading?"Loading...":this.value}
      </button>
    `}_onClicked(){const n=new CustomEvent("onclicked",{detail:this.value,bubbles:!0,composed:!0});console.log("click event"),this.dispatchEvent(n)}};w.styles=D`
    :host {
      color: blue;
    }
    button:hover {
        color: red;
      }
  `,I([f({type:String})],w.prototype,"value",2),I([f({type:Boolean})],w.prototype,"disabled",2),I([f({type:Boolean})],w.prototype,"loading",2),I([f({type:String})],w.prototype,"type",2),w=I([d("my-button")],w);var at=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,ee=(n,e,t,r)=>{for(var s=r>1?void 0:r?ht(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&at(e,t,s),s};let V=class extends h{constructor(){super(),this.hostName="",this.shadowName="",this.addEventListener("click",n=>this.hostName=n.target.localName)}createRenderRoot(){const n=super.createRenderRoot();return n.addEventListener("click",e=>this.shadowName=e.target.localName),n}_pclick(n){console.log("p click")}render(){return p`
      <p><button>Click Me!</button></p>
      <p>Component target: ${this.hostName}</p>
      <p>Shadow target: ${this.shadowName}</p>
      <p @click=${this._pclick}>Click me!</p>
    `}};ee([f()],V.prototype,"hostName",2),ee([f()],V.prototype,"shadowName",2),V=ee([d("create-render-root")],V);const Ce=D`
  :host {
    display: block;
    color: blue;
  }
  p {
    font-size: 20px;
  }
`;var pt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,ut=(n,e,t,r)=>{for(var s=r>1?void 0:r?dt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&pt(e,t,s),s};let te=class extends h{render(){return p`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `}};te.styles=[Ce,D`
      p {
        color: red;
      }
    `],te=ut([d("child-component")],te);var _t=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,ft=(n,e,t,r)=>{for(var s=r>1?void 0:r?$t(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&_t(e,t,s),s};let se=class extends h{render(){return p`
      <p>부모 컴포넌트의 스타일</p>
    `}};se.styles=Ce,se=ft([d("parent-component")],se);const T={colors:{primary:"#6200EE",primaryVariant:"#3700B3",onPrimary:"#FFFFFF",default:"#FFFFFF",defaultVariant:"#EEEEEE",onDefault:"#000000"},typography:{bodyText:{fontFamily:"Roboto, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},buttonText:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:"500",lineHeight:"16px"}},spacing:{small:"8px",medium:"16px",large:"24px"},borderRadius:{small:"4px",medium:"8px",large:"16px"}};var vt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,gt=(n,e,t,r)=>{for(var s=r>1?void 0:r?mt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&vt(e,t,s),s};let re=class extends h{render(){return p`
      <button>Click me</button>
    `}};re.styles=D`
    :host(.primary) {
      /* primary 테마 스타일 */
      --button-bg-color: ${A(T.colors.primary)};
      --button-color: ${A(T.colors.onPrimary)};
      --hover: ${A(T.colors.primaryVariant)};
    }
    :host(.default) {
      /* default 테마 스타일 */
      --button-bg-color: ${A(T.colors.default)};
      --button-color: ${A(T.colors.onDefault)};
      --hover: ${A(T.colors.defaultVariant)};
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
  `,re=gt([d("design-system")],re);var bt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,At=(n,e,t,r)=>{for(var s=r>1?void 0:r?yt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&bt(e,t,s),s};let Ee=class extends h{_onClicked(){const n=new CustomEvent("my-custom-event",{detail:{more:{msg:"fireddddd"}},bubbles:!0,composed:!0});this.dispatchEvent(n)}render(){return p`
      <button @click="${this._onClicked}">이벤트 발생시키기</button>
    `}};Ee=At([d("custom-event")],Ee);var Pt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,Oe=(n,e,t,r)=>{for(var s=r>1?void 0:r?Ct(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Pt(e,t,s),s};let ne=class extends h{constructor(){super(...arguments),this.clicked=""}render(){return p`
      <div @click="${this._clickHandler}">
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
      </div>
      <p>Clicked: ${this.clicked}</p>
    `}_clickHandler(n){this.clicked=n.target===n.currentTarget?"container":n.target.textContent}};Oe([f()],ne.prototype,"clicked",2),ne=Oe([d("event-delegation")],ne);var Et=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,oe=(n,e,t,r)=>{for(var s=r>1?void 0:r?Ot(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Et(e,t,s),s};let W=class extends h{constructor(){super(...arguments),this.label="Check me!",this.defaultMessage="🙂",this.message=this.defaultMessage}render(){return p`
      <label><input type="checkbox" @click=${this._tryChange}>${this.label}</label>
      <div>${this.message}</div>
    `}_tryChange(n){const e={message:this.message},t=new CustomEvent("checked",{detail:e,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&n.preventDefault(),this.message=e.message}updated(){clearTimeout(this._resetMessage),this._resetMessage=setTimeout(()=>this.message=this.defaultMessage,1e3)}};oe([f()],W.prototype,"label",2),oe([f()],W.prototype,"message",2),W=oe([d("event-dispatcher-communication")],W);var wt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,we=(n,e,t,r)=>{for(var s=r>1?void 0:r?St(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&wt(e,t,s),s};let ie=class extends h{constructor(){super(...arguments),this.canCheck=!1}render(){return p`
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck?"Allowing":"Preventing"} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`}_checkedHandler(n){this.canCheck||(n.preventDefault(),n.detail.message="✅ Prevented!!")}_clickHandler(){this.canCheck=!this.canCheck}};we([f({type:Boolean})],ie.prototype,"canCheck",2),ie=we([d("my-listener")],ie);var xt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Se=(n,e,t,r)=>{for(var s=r>1?void 0:r?Tt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&xt(e,t,s),s};let le=class extends h{_passiveclick(n){console.log(n.type)}_click(n){console.log(n.type)}render(){return p`
      <div @click=${this._passiveclick}>Passive event</div>
      <div @click=${this._click}>Normal event</div>
    `}};Se([it({passive:!0})],le.prototype,"_passiveclick",1),le=Se([d("event-passive")],le);var Dt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Nt=(n,e,t,r)=>{for(var s=r>1?void 0:r?jt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Dt(e,t,s),s};let xe=class extends h{render(){return p`
      <button id="mybutton" @click="${n=>console.log(n.target)}">
        click me
      </button>
      <ul @click="${this.handleEvent}">
        <li><button>Item 1</button></li>
        <li><button>Item 2</button></li>
        <li><button>Item 3</button></li>
      </ul>
      `}handleEvent(n){console.log("Origin:",n.composedPath()[0])}};xe=Nt([d("event-retargeting")],xe);var Ut=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,Ht=(n,e,t,r)=>{for(var s=r>1?void 0:r?Rt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Ut(e,t,s),s};class Mt extends Event{constructor(){super("my-standard-event",{bubbles:!0,composed:!0})}}let Te=class extends h{fireEvent(){const n=new Mt;this.dispatchEvent(n)}render(){return p`
      <button @click="${this.fireEvent}">이벤트 발생시키기</button>
    `}};Te=Ht([d("standard-event")],Te);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},It=n=>(...e)=>({_$litDirective$:n,values:e});let Bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De="important",zt=" !"+De,Ft=It(class extends Bt{constructor(n){var e;if(super(n),n.type!==Lt.ATTRIBUTE||n.name!=="style"||((e=n.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((e,t)=>{const r=n[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(n,[e]){const{style:t}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(const r in e){const s=e[r];if(s!=null){this.ft.add(r);const i=typeof s=="string"&&s.endsWith(zt);r.includes("-")||i?t.setProperty(r,i?s.slice(0,-11):s,i?De:""):t[r]=s}}return E}}),Vt={backgroundColor:"blue",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer"};var Wt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Jt=(n,e,t,r)=>{for(var s=r>1?void 0:r?qt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Wt(e,t,s),s};let je=class extends h{render(){return p`
      <button style=${Ft(Vt)}>버튼이야</button>
    `}};je=Jt([d("json-in-css")],je);var Kt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Ne=(n,e,t,r)=>{for(var s=r>1?void 0:r?Zt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Kt(e,t,s),s};let q=class extends h{constructor(){super(),this.count=0}connectedCallback(){super.connectedCallback(),console.log("connectedCallback")}disconnectedCallback(){super.disconnectedCallback(),console.log("disconnectedCallback")}shouldUpdate(n){return console.log("shouldUpdate:",n),n.has("count")}willUpdate(n){console.log("willUpdate:",n)}update(n){super.update(n),console.log("update:",n)}firstUpdated(n){console.log("firstUpdated:",n)}updated(n){console.log("updated:",n)}render(){return p`
      <h1>Count: ${this.count}</h1>
      <button @click="${this.incrementCount}">Increment</button>
    `}incrementCount(){this.count+=1}};q.styles=D`
      :host {
        display: block;
      }
    `,Ne([f({type:Number,hasChanged(n,e){return console.log(`hasChanged: ${e} -> ${n}`),e!==n}})],q.prototype,"count",2),q=Ne([d("life-cycle-first")],q);var Xt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Gt=(n,e,t,r)=>{for(var s=r>1?void 0:r?Yt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Xt(e,t,s),s};let Ue=class extends h{render(){return p`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <p>이곳은 공통 콘텐츠 영역입니다.</p>
        <slot name="footer"></slot>
      </div>
    `}};Ue=Gt([d("named-slot-element")],Ue);var Qt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,es=(n,e,t,r)=>{for(var s=r>1?void 0:r?kt(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Qt(e,t,s),s};let Re=class extends h{render(){return p`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `}};Re=es([d("same-name-slot")],Re);var ts=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,rs=(n,e,t,r)=>{for(var s=r>1?void 0:r?ss(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ts(e,t,s),s};let He=class extends h{render(){return p`
      <slot @slotchange="${this.handleSlotChange}"></slot>
    `}handleSlotChange(n){const t=n.target.assignedNodes();console.log("슬롯에 할당된 노드들:"),t.forEach(r=>{r.nodeType===Node.ELEMENT_NODE?console.log("이것은 element입니다.",r.outerHTML):r.nodeType===Node.TEXT_NODE&&console.log("이것은 text 입니다.",r.nodeValue)})}};He=rs([d("slot-content")],He);var ns=Object.defineProperty,os=Object.getOwnPropertyDescriptor,is=(n,e,t,r)=>{for(var s=r>1?void 0:r?os(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ns(e,t,s),s};let Me=class extends h{handleSlotchange(n){const t=n.target.assignedNodes({flatten:!0}).map(r=>r.textContent?r.textContent:"").join("");console.log("slot change event fired:",{allText:t})}render(){return p`<slot @slotchange=${this.handleSlotchange}></slot>`}};Me=is([d("slot-change")],Me);var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,as=(n,e,t,r)=>{for(var s=r>1?void 0:r?cs(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ls(e,t,s),s};let Le=class extends h{render(){return p`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `}};Le=as([d("slot-init")],Le)});
