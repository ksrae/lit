/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, xe = X.ShadowRoot && (X.ShadyCSS === void 0 || X.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Se = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let bt = class {
  constructor(e, s, n) {
    if (this._$cssResult$ = !0, n !== Se)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = s;
  }
  get styleSheet() {
    let e = this.o;
    const s = this.t;
    if (xe && e === void 0) {
      const n = s !== void 0 && s.length === 1;
      n && (e = Ve.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(s, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const S = (r) => new bt(typeof r == "string" ? r : r + "", void 0, Se), I = (r, ...e) => {
  const s = r.length === 1 ? r[0] : e.reduce((n, t, i) => n + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(t) + r[i + 1], r[0]);
  return new bt(s, r, Se);
}, Kt = (r, e) => {
  if (xe)
    r.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  else
    for (const s of e) {
      const n = document.createElement("style"), t = X.litNonce;
      t !== void 0 && n.setAttribute("nonce", t), n.textContent = s.cssText, r.appendChild(n);
    }
}, ze = xe ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let s = "";
  for (const n of e.cssRules)
    s += n.cssText;
  return S(s);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zt, defineProperty: Xt, getOwnPropertyDescriptor: Qt, getOwnPropertyNames: Gt, getOwnPropertySymbols: kt, getPrototypeOf: es } = Object, O = globalThis, qe = O.trustedTypes, ts = qe ? qe.emptyScript : "", he = O.reactiveElementPolyfillSupport, V = (r, e) => r, Q = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? ts : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let s = r;
  switch (e) {
    case Boolean:
      s = r !== null;
      break;
    case Number:
      s = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        s = JSON.parse(r);
      } catch {
        s = null;
      }
  }
  return s;
} }, De = (r, e) => !Zt(r, e), We = { attribute: !0, type: String, converter: Q, reflect: !1, hasChanged: De };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), O.litPropertyMetadata ?? (O.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class M extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, s = We) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(e, s), !s.noAccessor) {
      const n = Symbol(), t = this.getPropertyDescriptor(e, n, s);
      t !== void 0 && Xt(this.prototype, e, t);
    }
  }
  static getPropertyDescriptor(e, s, n) {
    const { get: t, set: i } = Qt(this.prototype, e) ?? { get() {
      return this[s];
    }, set(o) {
      this[s] = o;
    } };
    return { get() {
      return t == null ? void 0 : t.call(this);
    }, set(o) {
      const c = t == null ? void 0 : t.call(this);
      i.call(this, o), this.requestUpdate(e, c, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? We;
  }
  static _$Ei() {
    if (this.hasOwnProperty(V("elementProperties")))
      return;
    const e = es(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(V("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(V("properties"))) {
      const s = this.properties, n = [...Gt(s), ...kt(s)];
      for (const t of n)
        this.createProperty(t, s[t]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const s = litPropertyMetadata.get(e);
      if (s !== void 0)
        for (const [n, t] of s)
          this.elementProperties.set(n, t);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [s, n] of this.elementProperties) {
      const t = this._$Eu(s, n);
      t !== void 0 && this._$Eh.set(t, s);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const s = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const t of n)
        s.unshift(ze(t));
    } else
      e !== void 0 && s.push(ze(e));
    return s;
  }
  static _$Eu(e, s) {
    const n = s.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((s) => this.enableUpdating = s), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((s) => s(this));
  }
  addController(e) {
    var s;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((s = e.hostConnected) == null || s.call(e));
  }
  removeController(e) {
    var s;
    (s = this._$EO) == null || s.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
    for (const n of s.keys())
      this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Kt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((s) => {
      var n;
      return (n = s.hostConnected) == null ? void 0 : n.call(s);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var n;
      return (n = s.hostDisconnected) == null ? void 0 : n.call(s);
    });
  }
  attributeChangedCallback(e, s, n) {
    this._$AK(e, n);
  }
  _$EC(e, s) {
    var i;
    const n = this.constructor.elementProperties.get(e), t = this.constructor._$Eu(e, n);
    if (t !== void 0 && n.reflect === !0) {
      const o = (((i = n.converter) == null ? void 0 : i.toAttribute) !== void 0 ? n.converter : Q).toAttribute(s, n.type);
      this._$Em = e, o == null ? this.removeAttribute(t) : this.setAttribute(t, o), this._$Em = null;
    }
  }
  _$AK(e, s) {
    var i;
    const n = this.constructor, t = n._$Eh.get(e);
    if (t !== void 0 && this._$Em !== t) {
      const o = n.getPropertyOptions(t), c = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((i = o.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? o.converter : Q;
      this._$Em = t, this[t] = c.fromAttribute(s, o.type), this._$Em = null;
    }
  }
  requestUpdate(e, s, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? De)(this[e], s))
        return;
      this.P(e, s, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, s, n) {
    this._$AL.has(e) || this._$AL.set(e, s), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (s) {
      Promise.reject(s);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, o] of this._$Ep)
          this[i] = o;
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0)
        for (const [i, o] of t)
          o.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], o);
    }
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (n = this._$EO) == null || n.forEach((t) => {
        var i;
        return (i = t.hostUpdate) == null ? void 0 : i.call(t);
      }), this.update(s)) : this._$EU();
    } catch (t) {
      throw e = !1, this._$EU(), t;
    }
    e && this._$AE(s);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var s;
    (s = this._$EO) == null || s.forEach((n) => {
      var t;
      return (t = n.hostUpdated) == null ? void 0 : t.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((s) => this._$EC(s, this[s]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
M.elementStyles = [], M.shadowRootOptions = { mode: "open" }, M[V("elementProperties")] = /* @__PURE__ */ new Map(), M[V("finalized")] = /* @__PURE__ */ new Map(), he == null || he({ ReactiveElement: M }), (O.reactiveElementVersions ?? (O.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis, G = z.trustedTypes, Ye = G ? G.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Te = "$lit$", A = `lit$${(Math.random() + "").slice(9)}$`, je = "?" + A, ss = `<${je}>`, T = document, W = () => T.createComment(""), Y = (r) => r === null || typeof r != "object" && typeof r != "function", mt = Array.isArray, gt = (r) => mt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ue = `[ 	
\f\r]`, B = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Fe = /-->/g, Je = />/g, x = RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, Ze = /"/g, yt = /^(?:script|style|textarea|title)$/i, rs = (r) => (e, ...s) => ({ _$litType$: r, strings: e, values: s }), h = rs(1), g = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), Xe = /* @__PURE__ */ new WeakMap(), D = T.createTreeWalker(T, 129);
function Pt(r, e) {
  if (!Array.isArray(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const At = (r, e) => {
  const s = r.length - 1, n = [];
  let t, i = e === 2 ? "<svg>" : "", o = B;
  for (let c = 0; c < s; c++) {
    const l = r[c];
    let u, v, a = -1, $ = 0;
    for (; $ < l.length && (o.lastIndex = $, v = o.exec(l), v !== null); )
      $ = o.lastIndex, o === B ? v[1] === "!--" ? o = Fe : v[1] !== void 0 ? o = Je : v[2] !== void 0 ? (yt.test(v[2]) && (t = RegExp("</" + v[2], "g")), o = x) : v[3] !== void 0 && (o = x) : o === x ? v[0] === ">" ? (o = t ?? B, a = -1) : v[1] === void 0 ? a = -2 : (a = o.lastIndex - v[2].length, u = v[1], o = v[3] === void 0 ? x : v[3] === '"' ? Ze : Ke) : o === Ze || o === Ke ? o = x : o === Fe || o === Je ? o = B : (o = x, t = void 0);
    const f = o === x && r[c + 1].startsWith("/>") ? " " : "";
    i += o === B ? l + ss : a >= 0 ? (n.push(u), l.slice(0, a) + Te + l.slice(a) + A + f) : l + A + (a === -2 ? c : f);
  }
  return [Pt(r, i + (r[s] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
class F {
  constructor({ strings: e, _$litType$: s }, n) {
    let t;
    this.parts = [];
    let i = 0, o = 0;
    const c = e.length - 1, l = this.parts, [u, v] = At(e, s);
    if (this.el = F.createElement(u, n), D.currentNode = this.el.content, s === 2) {
      const a = this.el.content.firstChild;
      a.replaceWith(...a.childNodes);
    }
    for (; (t = D.nextNode()) !== null && l.length < c; ) {
      if (t.nodeType === 1) {
        if (t.hasAttributes())
          for (const a of t.getAttributeNames())
            if (a.endsWith(Te)) {
              const $ = v[o++], f = t.getAttribute(a).split(A), m = /([.?@])?(.*)/.exec($);
              l.push({ type: 1, index: i, name: m[2], strings: f, ctor: m[1] === "." ? wt : m[1] === "?" ? Ot : m[1] === "@" ? Et : J }), t.removeAttribute(a);
            } else
              a.startsWith(A) && (l.push({ type: 6, index: i }), t.removeAttribute(a));
        if (yt.test(t.tagName)) {
          const a = t.textContent.split(A), $ = a.length - 1;
          if ($ > 0) {
            t.textContent = G ? G.emptyScript : "";
            for (let f = 0; f < $; f++)
              t.append(a[f], W()), D.nextNode(), l.push({ type: 2, index: ++i });
            t.append(a[$], W());
          }
        }
      } else if (t.nodeType === 8)
        if (t.data === je)
          l.push({ type: 2, index: i });
        else {
          let a = -1;
          for (; (a = t.data.indexOf(A, a + 1)) !== -1; )
            l.push({ type: 7, index: i }), a += A.length - 1;
        }
      i++;
    }
  }
  static createElement(e, s) {
    const n = T.createElement("template");
    return n.innerHTML = e, n;
  }
}
function j(r, e, s = r, n) {
  var o, c;
  if (e === g)
    return e;
  let t = n !== void 0 ? (o = s._$Co) == null ? void 0 : o[n] : s._$Cl;
  const i = Y(e) ? void 0 : e._$litDirective$;
  return (t == null ? void 0 : t.constructor) !== i && ((c = t == null ? void 0 : t._$AO) == null || c.call(t, !1), i === void 0 ? t = void 0 : (t = new i(r), t._$AT(r, s, n)), n !== void 0 ? (s._$Co ?? (s._$Co = []))[n] = t : s._$Cl = t), t !== void 0 && (e = j(r, t._$AS(r, e.values), t, n)), e;
}
class Ct {
  constructor(e, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: s }, parts: n } = this._$AD, t = ((e == null ? void 0 : e.creationScope) ?? T).importNode(s, !0);
    D.currentNode = t;
    let i = D.nextNode(), o = 0, c = 0, l = n[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let u;
        l.type === 2 ? u = new L(i, i.nextSibling, this, e) : l.type === 1 ? u = new l.ctor(i, l.name, l.strings, this, e) : l.type === 6 && (u = new xt(i, this, e)), this._$AV.push(u), l = n[++c];
      }
      o !== (l == null ? void 0 : l.index) && (i = D.nextNode(), o++);
    }
    return D.currentNode = T, t;
  }
  p(e) {
    let s = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, s), s += n.strings.length - 2) : n._$AI(e[s])), s++;
  }
}
class L {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, s, n, t) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = e, this._$AB = s, this._$AM = n, this.options = t, this._$Cv = (t == null ? void 0 : t.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const s = this._$AM;
    return s !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = s.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, s = this) {
    e = j(this, e, s), Y(e) ? e === _ || e == null || e === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : e !== this._$AH && e !== g && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : gt(e) ? this.k(e) : this._(e);
  }
  S(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  _(e) {
    this._$AH !== _ && Y(this._$AH) ? this._$AA.nextSibling.data = e : this.T(T.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var i;
    const { values: s, _$litType$: n } = e, t = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = F.createElement(Pt(n.h, n.h[0]), this.options)), n);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === t)
      this._$AH.p(s);
    else {
      const o = new Ct(t, this), c = o.u(this.options);
      o.p(s), this.T(c), this._$AH = o;
    }
  }
  _$AC(e) {
    let s = Xe.get(e.strings);
    return s === void 0 && Xe.set(e.strings, s = new F(e)), s;
  }
  k(e) {
    mt(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let n, t = 0;
    for (const i of e)
      t === s.length ? s.push(n = new L(this.S(W()), this.S(W()), this, this.options)) : n = s[t], n._$AI(i), t++;
    t < s.length && (this._$AR(n && n._$AB.nextSibling, t), s.length = t);
  }
  _$AR(e = this._$AA.nextSibling, s) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, s); e && e !== this._$AB; ) {
      const t = e.nextSibling;
      e.remove(), e = t;
    }
  }
  setConnected(e) {
    var s;
    this._$AM === void 0 && (this._$Cv = e, (s = this._$AP) == null || s.call(this, e));
  }
}
class J {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, s, n, t, i) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = e, this.name = s, this._$AM = t, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = _;
  }
  _$AI(e, s = this, n, t) {
    const i = this.strings;
    let o = !1;
    if (i === void 0)
      e = j(this, e, s, 0), o = !Y(e) || e !== this._$AH && e !== g, o && (this._$AH = e);
    else {
      const c = e;
      let l, u;
      for (e = i[0], l = 0; l < i.length - 1; l++)
        u = j(this, c[n + l], s, l), u === g && (u = this._$AH[l]), o || (o = !Y(u) || u !== this._$AH[l]), u === _ ? e = _ : e !== _ && (e += (u ?? "") + i[l + 1]), this._$AH[l] = u;
    }
    o && !t && this.j(e);
  }
  j(e) {
    e === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class wt extends J {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === _ ? void 0 : e;
  }
}
class Ot extends J {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _);
  }
}
class Et extends J {
  constructor(e, s, n, t, i) {
    super(e, s, n, t, i), this.type = 5;
  }
  _$AI(e, s = this) {
    if ((e = j(this, e, s, 0) ?? _) === g)
      return;
    const n = this._$AH, t = e === _ && n !== _ || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== _ && (n === _ || t);
    t && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var s;
    typeof this._$AH == "function" ? this._$AH.call(((s = this.options) == null ? void 0 : s.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class xt {
  constructor(e, s, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    j(this, e);
  }
}
const ns = { P: Te, A, C: je, M: 1, L: At, R: Ct, D: gt, V: j, I: L, H: J, N: Ot, U: Et, B: wt, F: xt }, pe = z.litHtmlPolyfillSupport;
pe == null || pe(F, L), (z.litHtmlVersions ?? (z.litHtmlVersions = [])).push("3.1.2");
const St = (r, e, s) => {
  const n = (s == null ? void 0 : s.renderBefore) ?? e;
  let t = n._$litPart$;
  if (t === void 0) {
    const i = (s == null ? void 0 : s.renderBefore) ?? null;
    n._$litPart$ = t = new L(e.insertBefore(W(), i), i, void 0, s ?? {});
  }
  return t._$AI(r), t;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let p = class extends M {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var s;
    const e = super.createRenderRoot();
    return (s = this.renderOptions).renderBefore ?? (s.renderBefore = e.firstChild), e;
  }
  update(e) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = St(s, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return g;
  }
};
var _t;
p._$litElement$ = !0, p.finalized = !0, (_t = globalThis.litElementHydrateSupport) == null || _t.call(globalThis, { LitElement: p });
const de = globalThis.litElementPolyfillSupport;
de == null || de({ LitElement: p });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const d = (r) => (e, s) => {
  s !== void 0 ? s.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const is = { attribute: !0, type: String, converter: Q, reflect: !1, hasChanged: De }, os = (r = is, e, s) => {
  const { kind: n, metadata: t } = s;
  let i = globalThis.litPropertyMetadata.get(t);
  if (i === void 0 && globalThis.litPropertyMetadata.set(t, i = /* @__PURE__ */ new Map()), i.set(s.name, r), n === "accessor") {
    const { name: o } = s;
    return { set(c) {
      const l = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(o, l, r);
    }, init(c) {
      return c !== void 0 && this.P(o, void 0, r), c;
    } };
  }
  if (n === "setter") {
    const { name: o } = s;
    return function(c) {
      const l = this[o];
      e.call(this, c), this.requestUpdate(o, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function b(r) {
  return (e, s) => typeof s == "object" ? os(r, e, s) : ((n, t, i) => {
    const o = t.hasOwnProperty(i);
    return t.constructor.createProperty(i, o ? { ...n, wrapped: !0 } : n), o ? Object.getOwnPropertyDescriptor(t, i) : void 0;
  })(r, e, s);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function U(r) {
  return b({ ...r, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ls(r) {
  return (e, s) => {
    const n = typeof e == "function" ? e : e[s];
    Object.assign(n, r);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qe = (r, e, s) => (s.configurable = !0, s.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(r, e, s), s);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Dt(r, e) {
  return (s, n, t) => {
    const i = (o) => {
      var c;
      return ((c = o.renderRoot) == null ? void 0 : c.querySelector(r)) ?? null;
    };
    if (e) {
      const { get: o, set: c } = typeof n == "object" ? s : t ?? (() => {
        const l = Symbol();
        return { get() {
          return this[l];
        }, set(u) {
          this[l] = u;
        } };
      })();
      return Qe(s, n, { get() {
        let l = o.call(this);
        return l === void 0 && (l = i(this), (l !== null || this.hasUpdated) && c.call(this, l)), l;
      } });
    }
    return Qe(s, n, { get() {
      return i(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, E = (r) => (...e) => ({ _$litDirective$: r, values: e });
let K = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, s, n) {
    this._$Ct = e, this._$AM = s, this._$Ci = n;
  }
  _$AS(e, s) {
    return this.update(e, s);
  }
  update(e, s) {
    return this.render(...s);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: cs } = ns, Ge = (r, e) => e === void 0 ? (r == null ? void 0 : r._$litType$) !== void 0 : (r == null ? void 0 : r._$litType$) === e, as = (r) => {
  var e;
  return ((e = r == null ? void 0 : r._$litType$) == null ? void 0 : e.h) != null;
}, Tt = (r) => r.strings === void 0, ke = () => document.createComment(""), w = (r, e, s) => {
  var i;
  const n = r._$AA.parentNode, t = e === void 0 ? r._$AB : e._$AA;
  if (s === void 0) {
    const o = n.insertBefore(ke(), t), c = n.insertBefore(ke(), t);
    s = new cs(o, c, r, r.options);
  } else {
    const o = s._$AB.nextSibling, c = s._$AM, l = c !== r;
    if (l) {
      let u;
      (i = s._$AQ) == null || i.call(s, r), s._$AM = r, s._$AP !== void 0 && (u = r._$AU) !== c._$AU && s._$AP(u);
    }
    if (o !== t || l) {
      let u = s._$AA;
      for (; u !== o; ) {
        const v = u.nextSibling;
        n.insertBefore(u, t), u = v;
      }
    }
  }
  return s;
}, C = (r, e, s = r) => (r._$AI(e, s), r), hs = {}, k = (r, e = hs) => r._$AH = e, ve = (r) => r._$AH, fe = (r) => {
  var n;
  (n = r._$AP) == null || n.call(r, !1, !0);
  let e = r._$AA;
  const s = r._$AB.nextSibling;
  for (; e !== s; ) {
    const t = e.nextSibling;
    e.remove(), e = t;
  }
}, jt = (r) => {
  r._$AR();
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = (r, e) => {
  var n;
  const s = r._$AN;
  if (s === void 0)
    return !1;
  for (const t of s)
    (n = t._$AO) == null || n.call(t, e, !1), q(t, e);
  return !0;
}, ee = (r) => {
  let e, s;
  do {
    if ((e = r._$AM) === void 0)
      break;
    s = e._$AN, s.delete(r), r = e;
  } while ((s == null ? void 0 : s.size) === 0);
}, Rt = (r) => {
  for (let e; e = r._$AM; r = e) {
    let s = e._$AN;
    if (s === void 0)
      e._$AN = s = /* @__PURE__ */ new Set();
    else if (s.has(r))
      break;
    s.add(r), ds(e);
  }
};
function us(r) {
  this._$AN !== void 0 ? (ee(this), this._$AM = r, Rt(this)) : this._$AM = r;
}
function ps(r, e = !1, s = 0) {
  const n = this._$AH, t = this._$AN;
  if (t !== void 0 && t.size !== 0)
    if (e)
      if (Array.isArray(n))
        for (let i = s; i < n.length; i++)
          q(n[i], !1), ee(n[i]);
      else
        n != null && (q(n, !1), ee(n));
    else
      q(this, r);
}
const ds = (r) => {
  r.type == y.CHILD && (r._$AP ?? (r._$AP = ps), r._$AQ ?? (r._$AQ = us));
};
class Re extends K {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, s, n) {
    super._$AT(e, s, n), Rt(this), this.isConnected = e._$AU;
  }
  _$AO(e, s = !0) {
    var n, t;
    e !== this.isConnected && (this.isConnected = e, e ? (n = this.reconnected) == null || n.call(this) : (t = this.disconnected) == null || t.call(this)), s && (q(this, e), ee(this));
  }
  setValue(e) {
    if (Tt(this._$Ct))
      this._$Ct._$AI(e, this);
    else {
      const s = [...this._$Ct._$AH];
      s[this._$Ci] = e, this._$Ct._$AI(s, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fs = async (r, e) => {
  for await (const s of r)
    if (await e(s) === !1)
      return;
};
let $s = class {
  constructor(e) {
    this.Y = e;
  }
  disconnect() {
    this.Y = void 0;
  }
  reconnect(e) {
    this.Y = e;
  }
  deref() {
    return this.Y;
  }
}, vs = class {
  constructor() {
    this.Z = void 0, this.q = void 0;
  }
  get() {
    return this.Z;
  }
  pause() {
    this.Z ?? (this.Z = new Promise((e) => this.q = e));
  }
  resume() {
    var e;
    (e = this.q) == null || e.call(this), this.Z = this.q = void 0;
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Ut = class extends Re {
  constructor() {
    super(...arguments), this._$CK = new $s(this), this._$CX = new vs();
  }
  render(e, s) {
    return g;
  }
  update(e, [s, n]) {
    if (this.isConnected || this.disconnected(), s === this._$CJ)
      return g;
    this._$CJ = s;
    let t = 0;
    const { _$CK: i, _$CX: o } = this;
    return fs(s, async (c) => {
      for (; o.get(); )
        await o.get();
      const l = i.deref();
      if (l !== void 0) {
        if (l._$CJ !== s)
          return !1;
        n !== void 0 && (c = n(c, t)), l.commitValue(c, t), t++;
      }
      return !0;
    }), g;
  }
  commitValue(e, s) {
    this.setValue(e);
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
};
const _s = E(Ut);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bs = E(class extends Ut {
  constructor(r) {
    if (super(r), r.type !== y.CHILD)
      throw Error("asyncAppend can only be used in child expressions");
  }
  update(r, e) {
    return this._$Ctt = r, super.update(r, e);
  }
  commitValue(r, e) {
    e === 0 && jt(this._$Ctt);
    const s = w(this._$Ctt);
    C(s, r);
  }
});
var ms = Object.defineProperty, gs = Object.getOwnPropertyDescriptor, Nt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? gs(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && ms(e, s, t), t;
};
async function* ys(r) {
  for (let e = 0; e < r; e++)
    yield Math.random() > 0.5 ? "Heads" : "Tails", await new Promise((s) => setTimeout(s, 1e3));
}
let _e = class extends p {
  constructor() {
    super(...arguments), this.tosses = ys(10);
  }
  render() {
    return h`
      <ul>${bs(this.tosses, (r) => h`<li>${r}</li>`)}</ul>
    `;
  }
};
Nt([
  U()
], _e.prototype, "tosses", 2);
_e = Nt([
  d("async-append")
], _e);
var Ps = Object.defineProperty, As = Object.getOwnPropertyDescriptor, Mt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? As(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Ps(e, s, t), t;
};
async function* Cs(r) {
  for (; r > 0; )
    yield r--, await new Promise((e) => setTimeout(e, 1e3));
  yield "BOOM";
}
let be = class extends p {
  constructor() {
    super(...arguments), this.timer = Cs(10);
  }
  render() {
    return h`Timer: <span>${_s(this.timer)}</span>.`;
  }
};
Mt([
  U()
], be.prototype, "timer", 2);
be = Mt([
  d("async-replace")
], be);
var ws = Object.defineProperty, Os = Object.getOwnPropertyDescriptor, Z = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Os(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && ws(e, s, t), t;
};
let R = class extends p {
  constructor() {
    super(...arguments), this.value = "button", this.disabled = !1, this.loading = !1, this.type = "default";
  }
  render() {
    return console.log(this.loading), h`
      <button 
        .disabled=${this.disabled} 
        @click=${this._onClicked}>
        ${this.loading ? "Loading..." : this.value}
      </button>
    `;
  }
  _onClicked() {
    const r = new CustomEvent("onclicked", {
      detail: this.value,
      bubbles: !0,
      composed: !0
    });
    console.log("click event"), this.dispatchEvent(r);
  }
};
R.styles = I`
    :host {
      color: blue;
    }
    button:hover {
        color: red;
      }
  `;
Z([
  b({ type: String })
], R.prototype, "value", 2);
Z([
  b({ type: Boolean })
], R.prototype, "disabled", 2);
Z([
  b({ type: Boolean })
], R.prototype, "loading", 2);
Z([
  b({ type: String })
], R.prototype, "type", 2);
R = Z([
  d("my-button")
], R);
var Es = Object.defineProperty, xs = Object.getOwnPropertyDescriptor, ce = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? xs(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Es(e, s, t), t;
};
let H = class extends p {
  constructor() {
    super(...arguments), this.name = "anonymous", this._submitEnabled = !1;
  }
  // 입력 필드에 입력이 있을 때마다 호출되는 이벤트 핸들러입니다.
  _inputChanged(r) {
    this._submitEnabled = !!r.target.value;
  }
  // 사용자가 제출 버튼을 클릭했을 때 호출되는 메서드입니다.
  _updateName() {
    this.name = this._input.value, this._input.value = "", this._submitEnabled = !1;
  }
  // 컴포넌트의 HTML 구조와 데이터 바인딩을 정의합니다.
  render() {
    return h`<p>Nickname: ${this.name}</p>
        <label>Enter new nickname:
          <input @input=${this._inputChanged}>
        </label>
        <button @click=${this._updateName}
                .disabled=${!this._submitEnabled}>Submit</button>`;
  }
};
H.styles = I`
    :host {
      font-family: sans-serif;
    }
  `;
ce([
  b()
], H.prototype, "name", 2);
ce([
  U()
], H.prototype, "_submitEnabled", 2);
ce([
  Dt("input")
], H.prototype, "_input", 2);
H = ce([
  d("mediator-element")
], H);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Ht = class extends Event {
  constructor(e, s, n) {
    super("context-request", { bubbles: !0, composed: !0 }), this.context = e, this.callback = s, this.subscribe = n ?? !1;
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let et = class {
  constructor(e, s, n, t) {
    if (this.subscribe = !1, this.provided = !1, this.value = void 0, this.t = (i, o) => {
      this.unsubscribe && (this.unsubscribe !== o && (this.provided = !1, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = i, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = !0, this.callback && this.callback(i, o)), this.unsubscribe = o;
    }, this.host = e, s.context !== void 0) {
      const i = s;
      this.context = i.context, this.callback = i.callback, this.subscribe = i.subscribe ?? !1;
    } else
      this.context = s, this.callback = n, this.subscribe = t ?? !1;
    this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
  }
  dispatchRequest() {
    this.host.dispatchEvent(new Ht(this.context, this.t, this.subscribe));
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ss {
  get value() {
    return this.o;
  }
  set value(e) {
    this.setValue(e);
  }
  setValue(e, s = !1) {
    const n = s || !Object.is(e, this.o);
    this.o = e, n && this.updateObservers();
  }
  constructor(e) {
    this.subscriptions = /* @__PURE__ */ new Map(), this.updateObservers = () => {
      for (const [s, { disposer: n }] of this.subscriptions)
        s(this.o, n);
    }, e !== void 0 && (this.value = e);
  }
  addCallback(e, s, n) {
    if (!n)
      return void e(this.value);
    this.subscriptions.has(e) || this.subscriptions.set(e, { disposer: () => {
      this.subscriptions.delete(e);
    }, consumerHost: s });
    const { disposer: t } = this.subscriptions.get(e);
    e(this.value, t);
  }
  clearCallbacks() {
    this.subscriptions.clear();
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Ds = class extends Event {
  constructor(e) {
    super("context-provider", { bubbles: !0, composed: !0 }), this.context = e;
  }
}, tt = class extends Ss {
  constructor(e, s, n) {
    var t, i;
    super(s.context !== void 0 ? s.initialValue : n), this.onContextRequest = (o) => {
      const c = o.composedPath()[0];
      o.context === this.context && c !== this.host && (o.stopPropagation(), this.addCallback(o.callback, c, o.subscribe));
    }, this.onProviderRequest = (o) => {
      const c = o.composedPath()[0];
      if (o.context !== this.context || c === this.host)
        return;
      const l = /* @__PURE__ */ new Set();
      for (const [u, { consumerHost: v }] of this.subscriptions)
        l.has(u) || (l.add(u), v.dispatchEvent(new Ht(this.context, u, !0)));
      o.stopPropagation();
    }, this.host = e, s.context !== void 0 ? this.context = s.context : this.context = s, this.attachListeners(), (i = (t = this.host).addController) == null || i.call(t, this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest), this.host.addEventListener("context-provider", this.onProviderRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new Ds(this.context));
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ts({ context: r }) {
  return (e, s) => {
    const n = /* @__PURE__ */ new WeakMap();
    if (typeof s == "object")
      return s.addInitializer(function() {
        n.set(this, new tt(this, { context: r }));
      }), { get() {
        return e.get.call(this);
      }, set(t) {
        var i;
        return (i = n.get(this)) == null || i.setValue(t), e.set.call(this, t);
      }, init(t) {
        var i;
        return (i = n.get(this)) == null || i.setValue(t), t;
      } };
    {
      e.constructor.addInitializer((o) => {
        n.set(o, new tt(o, { context: r }));
      });
      const t = Object.getOwnPropertyDescriptor(e, s);
      let i;
      if (t === void 0) {
        const o = /* @__PURE__ */ new WeakMap();
        i = { get: function() {
          return o.get(this);
        }, set: function(c) {
          n.get(this).setValue(c), o.set(this, c);
        }, configurable: !0, enumerable: !0 };
      } else {
        const o = t.set;
        i = { ...t, set: function(c) {
          n.get(this).setValue(c), o == null || o.call(this, c);
        } };
      }
      return void Object.defineProperty(e, s, i);
    }
  };
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function js({ context: r, subscribe: e }) {
  return (s, n) => {
    typeof n == "object" ? n.addInitializer(function() {
      new et(this, { context: r, callback: (t) => {
        this[n.name] = t;
      }, subscribe: e });
    }) : s.constructor.addInitializer((t) => {
      new et(t, { context: r, callback: (i) => {
        t[n] = i;
      }, subscribe: e });
    });
  };
}
const It = Symbol("themecontext");
var Rs = Object.defineProperty, Us = Object.getOwnPropertyDescriptor, Lt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Us(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Rs(e, s, t), t;
};
let me = class extends p {
  render() {
    return h`<div>Current Theme: ${this.theme11}</div>`;
  }
};
Lt([
  js({ context: It, subscribe: !0 }),
  b({ attribute: !1 })
], me.prototype, "theme11", 2);
me = Lt([
  d("theme-consumer")
], me);
var Ns = Object.defineProperty, Ms = Object.getOwnPropertyDescriptor, Bt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ms(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Ns(e, s, t), t;
};
let ge = class extends p {
  constructor() {
    super(...arguments), this.theme = "light";
  }
  // 초기 테마 설정
  changeTheme() {
    console.log("changeTheme", this.theme), this.theme = this.theme === "dark" ? "light" : "dark";
  }
  render() {
    return h`
      <button @click=${this.changeTheme}>테마 변경하자</button>
      <theme-consumer></theme-consumer>
    `;
  }
};
Bt([
  Ts({ context: It }),
  b({ attribute: !1 })
], ge.prototype, "theme", 2);
ge = Bt([
  d("theme-provider")
], ge);
var Hs = Object.defineProperty, Is = Object.getOwnPropertyDescriptor, Ls = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Is(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Hs(e, s, t), t;
};
class Bs {
  constructor(e) {
    this.host = e, e.addController(this);
  }
  hostConnected() {
    console.log("컴포넌트가 DOM에 연결되었습니다.");
  }
  hostUpdate() {
    console.log("컴포넌트 업데이트가 시작되기 전입니다.");
  }
  hostUpdated() {
    console.log("컴포넌트 업데이트가 완료되었습니다.");
  }
  hostDisconnected() {
    console.log("컴포넌트가 DOM에서 연결 해제되었습니다.");
  }
}
let st = class extends p {
  constructor() {
    super(), new Bs(this);
  }
  render() {
    return h`<p>안녕하세요, 리액티브 컨트롤러 예제입니다!</p>`;
  }
};
st = Ls([
  d("reactive-controller")
], st);
var Vs = Object.defineProperty, zs = Object.getOwnPropertyDescriptor, Ue = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? zs(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Vs(e, s, t), t;
};
let te = class extends p {
  constructor() {
    super(), this.hostName = "", this.shadowName = "", this.addEventListener(
      "click",
      (r) => this.hostName = r.target.localName
    );
  }
  createRenderRoot() {
    const r = super.createRenderRoot();
    return r.addEventListener(
      "click",
      (e) => this.shadowName = e.target.localName
    ), r;
  }
  _pclick(r) {
    console.log("p click");
  }
  render() {
    return h`
      <p><button>Click Me!</button></p>
      <p>Component target: ${this.hostName}</p>
      <p>Shadow target: ${this.shadowName}</p>
      <p @click=${this._pclick}>Click me!</p>
    `;
  }
};
Ue([
  b()
], te.prototype, "hostName", 2);
Ue([
  b()
], te.prototype, "shadowName", 2);
te = Ue([
  d("create-render-root")
], te);
const Vt = I`
  :host {
    display: block;
    color: blue;
  }
  p {
    font-size: 20px;
  }
`;
var qs = Object.defineProperty, Ws = Object.getOwnPropertyDescriptor, Ys = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ws(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && qs(e, s, t), t;
};
let ye = class extends p {
  render() {
    return h`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `;
  }
};
ye.styles = [
  Vt,
  I`
      p {
        color: red;
      }
    `
];
ye = Ys([
  d("child-component")
], ye);
var Fs = Object.defineProperty, Js = Object.getOwnPropertyDescriptor, Ks = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Js(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Fs(e, s, t), t;
};
let Pe = class extends p {
  render() {
    return h`
      <p>부모 컴포넌트의 스타일</p>
    `;
  }
};
Pe.styles = Vt;
Pe = Ks([
  d("parent-component")
], Pe);
class Zs extends Re {
  render(e) {
    return Promise.resolve(e).then((s) => {
      this.setValue(s);
    }), "Waiting for promise to resolve";
  }
}
const Xs = E(Zs);
var Qs = Object.defineProperty, Gs = Object.getOwnPropertyDescriptor, zt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Gs(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Qs(e, s, t), t;
};
function ks() {
  return new Promise((r) => {
    setTimeout(() => {
      r("사용자 이름: 뤼튼, 취미: 코딩");
    }, 2e3);
  });
}
let Ae = class extends p {
  constructor() {
    super(), this.userProfile = ks();
  }
  render() {
    return h`
      <p>${Xs(this.userProfile)}</p>
    `;
  }
};
zt([
  b({ attribute: !1 })
], Ae.prototype, "userProfile", 2);
Ae = zt([
  d("async-directive")
], Ae);
const er = {
  primary: "#6200EE",
  primaryVariant: "#3700B3",
  onPrimary: "#FFFFFF",
  default: "#FFFFFF",
  defaultVariant: "#EEEEEE",
  onDefault: "#000000"
}, tr = {
  bodyText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px"
  },
  buttonText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px"
  }
}, sr = {
  small: "8px",
  medium: "16px",
  large: "24px"
}, rr = {
  small: "4px",
  medium: "8px",
  large: "16px"
}, N = {
  colors: er,
  typography: tr,
  spacing: sr,
  borderRadius: rr
};
var nr = Object.defineProperty, ir = Object.getOwnPropertyDescriptor, or = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ir(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && nr(e, s, t), t;
};
let Ce = class extends p {
  render() {
    return h`
      <button>Click me</button>
    `;
  }
};
Ce.styles = I`
    :host(.primary) {
      /* primary 테마 스타일 */
      --button-bg-color: ${S(N.colors.primary)};
      --button-color: ${S(N.colors.onPrimary)};
      --hover: ${S(N.colors.primaryVariant)};
    }
    :host(.default) {
      /* default 테마 스타일 */
      --button-bg-color: ${S(N.colors.default)};
      --button-color: ${S(N.colors.onDefault)};
      --hover: ${S(N.colors.defaultVariant)};
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
  `;
Ce = or([
  d("design-system")
], Ce);
var lr = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, ar = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? cr(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && lr(e, s, t), t;
};
let rt = class extends p {
  _onClicked() {
    const r = new CustomEvent("my-custom-event", {
      detail: { more: { msg: "fireddddd" } },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(r);
  }
  render() {
    return h`
      <button @click="${this._onClicked}">이벤트 발생시키기</button>
    `;
  }
};
rt = ar([
  d("custom-event")
], rt);
var hr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, qt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ur(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && hr(e, s, t), t;
};
let we = class extends p {
  constructor() {
    super(...arguments), this.clicked = "";
  }
  // @property({attribute: false}) clicked = ''; // 이것도 됨.
  // @state() clicked = ''; // 이것도 됨
  // 모든 내부 변수나 상태가 꼭 @property나 @state를 사용해야 하는 것은 아닙니다. 예를 들어, 컴포넌트 내부에서만 사용되고 UI 업데이트와 관련이 없는 임시 변수나 상수 등은 굳이 이러한 데코레이터를 사용하지 않아도 됩니다. 중요한 것은, UI의 업데이트와 관련된 데이터는 반드시 @property나 @state와 같은 반응형 시스템을 통해 관리되어야 한다는 점입니다.
  // 결론적으로, @property({attribute: false})를 사용하는 것이 잘 작동하는 이유는 해당 속성이 HTML attribute로서의 역할을 하지 않고, 단지 컴포넌트 내부에서 관리되는 상태나 데이터로서 기능하기 때문입니다. DOM에 출력되는 변수들은 반응형 업데이트가 필요한 경우 @property나 @state를 사용하여 정의해야 합니다.
  render() {
    return h`
      <div @click="${this._clickHandler}">
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
      </div>
      <p>Clicked: ${this.clicked}</p>
    `;
  }
  _clickHandler(r) {
    this.clicked = r.target === r.currentTarget ? "container" : r.target.textContent;
  }
};
qt([
  b()
], we.prototype, "clicked", 2);
we = qt([
  d("event-delegation")
], we);
var pr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, Ne = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? dr(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && pr(e, s, t), t;
};
let se = class extends p {
  constructor() {
    super(...arguments), this.label = "Check me!", this.defaultMessage = "🙂", this.message = this.defaultMessage;
  }
  // 컴포넌트의 HTML 구조와 데이터 바인딩을 정의합니다.
  render() {
    return h`
      <label><input type="checkbox" @click=${this._tryChange}>${this.label}</label>
      <div>${this.message}</div>
    `;
  }
  // 체크박스 클릭 시 이벤트를 발생시키는 핸들러
  _tryChange(r) {
    const e = { message: this.message }, s = new CustomEvent("checked", { detail: e, bubbles: !0, composed: !0, cancelable: !0 });
    this.dispatchEvent(s), s.defaultPrevented && r.preventDefault(), this.message = e.message;
  }
  // 프로퍼티 업데이트 후 호출되는 메소드, 메시지를 초기화합니다.
  updated() {
    clearTimeout(this._resetMessage), this._resetMessage = setTimeout(() => this.message = this.defaultMessage, 1e3);
  }
};
Ne([
  b()
], se.prototype, "label", 2);
Ne([
  b()
], se.prototype, "message", 2);
se = Ne([
  d("event-dispatcher-communication")
], se);
var fr = Object.defineProperty, $r = Object.getOwnPropertyDescriptor, Wt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? $r(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && fr(e, s, t), t;
};
let Oe = class extends p {
  constructor() {
    super(...arguments), this.canCheck = !1;
  }
  // 컴포넌트의 HTML 구조와 데이터 바인딩을 정의합니다.
  render() {
    return h`
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck ? "Allowing" : "Preventing"} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`;
  }
  // checked 이벤트를 처리하는 핸들러
  // 여기가 핵심이다. slot에서 넘어온 emitter를 받아서 fired를 e.preventDefault()로 막고, event에 직접 값을 집어 넣을 수 있다니 !!
  _checkedHandler(r) {
    this.canCheck || (r.preventDefault(), r.detail.message = "✅ Prevented!!");
  }
  // 체크 가능 상태를 토글하는 버튼의 클릭 핸들러
  _clickHandler() {
    this.canCheck = !this.canCheck;
  }
};
Wt([
  b({ type: Boolean })
], Oe.prototype, "canCheck", 2);
Oe = Wt([
  d("my-listener")
], Oe);
var vr = Object.defineProperty, _r = Object.getOwnPropertyDescriptor, Yt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? _r(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && vr(e, s, t), t;
};
let Ee = class extends p {
  _passiveclick(r) {
    console.log(r.type);
  }
  _click(r) {
    console.log(r.type);
  }
  render() {
    return h`
      <div @click=${this._passiveclick}>Passive event</div>
      <div @click=${this._click}>Normal event</div>
    `;
  }
};
Yt([
  ls({ passive: !0 })
], Ee.prototype, "_passiveclick", 1);
Ee = Yt([
  d("event-passive")
], Ee);
var br = Object.defineProperty, mr = Object.getOwnPropertyDescriptor, gr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? mr(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && br(e, s, t), t;
};
let nt = class extends p {
  // 마치 click event가 있는 것처럼 속이기.
  render() {
    return h`
      <button id="mybutton" @click="${(r) => console.log(r.target)}">
        click me
      </button>
      <ul @click="${this.handleEvent}">
        <li><button>Item 1</button></li>
        <li><button>Item 2</button></li>
        <li><button>Item 3</button></li>
      </ul>
      `;
  }
  handleEvent(r) {
    console.log("Origin:", r.composedPath()[0]);
  }
};
nt = gr([
  d("event-retargeting")
], nt);
var yr = Object.defineProperty, Pr = Object.getOwnPropertyDescriptor, Ar = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Pr(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && yr(e, s, t), t;
};
class Cr extends Event {
  constructor() {
    super("my-standard-event", {
      bubbles: !0,
      // 버블링을 허용
      composed: !0
      // 쉐도우 DOM 경계를 넘어서 전파
    });
  }
}
let it = class extends p {
  fireEvent() {
    const r = new Cr();
    this.dispatchEvent(r);
  }
  render() {
    return h`
      <button @click="${this.fireEvent}">이벤트 발생시키기</button>
    `;
  }
};
it = Ar([
  d("standard-event")
], it);
var wr = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, Me = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Or(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && wr(e, s, t), t;
};
let re = class extends p {
  constructor() {
    super(...arguments), this.t1 = h`<h1>hello</h1>`, this.t2 = h`<h2>world</h2>`;
  }
  render() {
    return h`${this.t1}${this.t2}`;
  }
};
Me([
  U()
], re.prototype, "t1", 2);
Me([
  U()
], re.prototype, "t2", 2);
re = Me([
  d("html-expression")
], re);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ft = "important", Er = " !" + Ft, xr = E(class extends K {
  constructor(r) {
    var e;
    if (super(r), r.type !== y.ATTRIBUTE || r.name !== "style" || ((e = r.strings) == null ? void 0 : e.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return Object.keys(r).reduce((e, s) => {
      const n = r[s];
      return n == null ? e : e + `${s = s.includes("-") ? s : s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${n};`;
    }, "");
  }
  update(r, [e]) {
    const { style: s } = r.element;
    if (this.ft === void 0)
      return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const n of this.ft)
      e[n] == null && (this.ft.delete(n), n.includes("-") ? s.removeProperty(n) : s[n] = null);
    for (const n in e) {
      const t = e[n];
      if (t != null) {
        this.ft.add(n);
        const i = typeof t == "string" && t.endsWith(Er);
        n.includes("-") || i ? s.setProperty(n, i ? t.slice(0, -11) : t, i ? Ft : "") : s[n] = t;
      }
    }
    return g;
  }
}), Sr = "blue", Dr = "white", Tr = "10px 20px", jr = "none", Rr = "5px", Ur = "pointer", Nr = {
  backgroundColor: Sr,
  color: Dr,
  padding: Tr,
  border: jr,
  borderRadius: Rr,
  cursor: Ur
};
var Mr = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, Ir = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Hr(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Mr(e, s, t), t;
};
let ot = class extends p {
  render() {
    return h`
      <button style=${xr(Nr)}>버튼이야</button>
    `;
  }
};
ot = Ir([
  d("json-in-css")
], ot);
var Lr = Object.defineProperty, Br = Object.getOwnPropertyDescriptor, Jt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Br(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Lr(e, s, t), t;
};
let ne = class extends p {
  constructor() {
    super(), this.count = 0;
  }
  connectedCallback() {
    super.connectedCallback(), console.log("connectedCallback");
  }
  disconnectedCallback() {
    super.disconnectedCallback(), console.log("disconnectedCallback");
  }
  // shouldUpdate: 업데이트를 진행할지 결정합니다.
  shouldUpdate(r) {
    return console.log("shouldUpdate:", r), r.has("count");
  }
  // willUpdate: 업데이트가 진행되기 직전에 호출됩니다.
  willUpdate(r) {
    console.log("willUpdate:", r);
  }
  // update: 실제 업데이트 로직을 수행합니다. 대부분의 경우 이 메소드를 직접 사용할 필요는 없습니다.
  update(r) {
    super.update(r), console.log("update:", r);
  }
  // firstUpdated: 컴포넌트가 처음 업데이트될 때 한 번만 호출됩니다.
  firstUpdated(r) {
    console.log("firstUpdated:", r);
  }
  // updated: 업데이트가 완료된 후 호출됩니다.
  updated(r) {
    console.log("updated:", r);
  }
  render() {
    return h`
      <h1>Count: ${this.count}</h1>
      <button @click="${this.incrementCount}">Increment</button>
    `;
  }
  incrementCount() {
    this.count += 1;
  }
};
ne.styles = I`
      :host {
        display: block;
      }
    `;
Jt([
  b({
    type: Number,
    hasChanged(r, e) {
      return console.log(`hasChanged: ${e} -> ${r}`), e !== r;
    }
  })
], ne.prototype, "count", 2);
ne = Jt([
  d("life-cycle-first")
], ne);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vr = E(class extends K {
  constructor(r) {
    if (super(r), r.type !== y.PROPERTY && r.type !== y.ATTRIBUTE && r.type !== y.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Tt(r))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(r) {
    return r;
  }
  update(r, [e]) {
    if (e === g || e === _)
      return e;
    const s = r.element, n = r.name;
    if (r.type === y.PROPERTY) {
      if (e === s[n])
        return g;
    } else if (r.type === y.BOOLEAN_ATTRIBUTE) {
      if (!!e === s.hasAttribute(n))
        return g;
    } else if (r.type === y.ATTRIBUTE && s.getAttribute(n) === e + "")
      return g;
    return k(r), e;
  }
});
var zr = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, He = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? qr(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && zr(e, s, t), t;
};
let ie = class extends p {
  constructor() {
    super(...arguments), this.data = { value: "test" };
  }
  render() {
    return h`
      <h3>live directive example</h3>

      Set this value to the inputs below.<br>
      <input id="value" .value=${this.data.value}>
      <button @click=${this.commitValue}>Commit</button>

      With live: will update if out of sync with last rendered value<br>
      <input .value=${Vr(this.data.value)} placeholder="type here, click commit">

      Without live: will not update if out of sync with last rendered value<br>
      <input .value=${this.data.value} placeholder="type here, click commit">
    `;
  }
  commitValue() {
    this.data = { ...this.data, value: this.input.value };
  }
};
He([
  U()
], ie.prototype, "data", 2);
He([
  Dt("input#value")
], ie.prototype, "input", 2);
ie = He([
  d("live-sample")
], ie);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wr = () => new Yr();
let Yr = class {
};
const $e = /* @__PURE__ */ new WeakMap(), lt = E(class extends Re {
  render(r) {
    return _;
  }
  update(r, [e]) {
    var n;
    const s = e !== this.Y;
    return s && this.Y !== void 0 && this.rt(void 0), (s || this.lt !== this.ct) && (this.Y = e, this.ht = (n = r.options) == null ? void 0 : n.host, this.rt(this.ct = r.element)), _;
  }
  rt(r) {
    if (typeof this.Y == "function") {
      const e = this.ht ?? globalThis;
      let s = $e.get(e);
      s === void 0 && (s = /* @__PURE__ */ new WeakMap(), $e.set(e, s)), s.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), s.set(this.Y, r), r !== void 0 && this.Y.call(this.ht, r);
    } else
      this.Y.value = r;
  }
  get lt() {
    var r, e;
    return typeof this.Y == "function" ? (r = $e.get(this.ht ?? globalThis)) == null ? void 0 : r.get(this.Y) : (e = this.Y) == null ? void 0 : e.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var Fr = Object.defineProperty, Jr = Object.getOwnPropertyDescriptor, Kr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Jr(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Fr(e, s, t), t;
};
let ct = class extends p {
  constructor() {
    super(...arguments), this.buttonRef = Wr();
  }
  // queryselector 대신 사용한다.
  firstUpdated() {
    const r = this.buttonRef.value;
    r && r.addEventListener("click", () => {
      console.log("버튼이 클릭되었습니다!");
    });
  }
  render() {
    return h`
      <button ${lt(this.buttonRef)}>클릭하세요</button>
      <div>
        <input type="text" ${lt(this.setInputRef)} />
        <button @click="${this.logInputValue}">로그 출력</button>
      </div>
      `;
  }
  // ref 콜백 함수: 입력 요소의 참조를 inputRef에 저장합니다.
  // 돔 전체를 전달한다. firstUpdated 보다 더 빠르게 정의된다.
  setInputRef(r) {
    this.inputRef = r;
  }
  // 버튼 클릭 이벤트 핸들러: 현재 입력 필드의 값을 콘솔에 출력합니다.
  logInputValue() {
    this.inputRef && console.log(this.inputRef.value);
  }
};
ct = Kr([
  d("with-ref")
], ct);
var Zr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, Qr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Xr(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && Zr(e, s, t), t;
};
let at = class extends p {
  firstUpdated() {
    var e;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector("button");
    r && r.addEventListener("click", () => {
      console.log("버튼이 클릭되었습니다!");
    });
  }
  render() {
    return h`<button>클릭하세요</button>`;
  }
};
at = Qr([
  d("without-ref")
], at);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = (r, e, s) => {
  const n = /* @__PURE__ */ new Map();
  for (let t = e; t <= s; t++)
    n.set(r[t], t);
  return n;
}, Gr = E(class extends K {
  constructor(r) {
    if (super(r), r.type !== y.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(r, e, s) {
    let n;
    s === void 0 ? s = e : e !== void 0 && (n = e);
    const t = [], i = [];
    let o = 0;
    for (const c of r)
      t[o] = n ? n(c, o) : o, i[o] = s(c, o), o++;
    return { values: i, keys: t };
  }
  render(r, e, s) {
    return this.dt(r, e, s).values;
  }
  update(r, [e, s, n]) {
    const t = ve(r), { values: i, keys: o } = this.dt(e, s, n);
    if (!Array.isArray(t))
      return this.ut = o, i;
    const c = this.ut ?? (this.ut = []), l = [];
    let u, v, a = 0, $ = t.length - 1, f = 0, m = i.length - 1;
    for (; a <= $ && f <= m; )
      if (t[a] === null)
        a++;
      else if (t[$] === null)
        $--;
      else if (c[a] === o[f])
        l[f] = C(t[a], i[f]), a++, f++;
      else if (c[$] === o[m])
        l[m] = C(t[$], i[m]), $--, m--;
      else if (c[a] === o[m])
        l[m] = C(t[a], i[m]), w(r, l[m + 1], t[a]), a++, m--;
      else if (c[$] === o[f])
        l[f] = C(t[$], i[f]), w(r, t[a], t[$]), $--, f++;
      else if (u === void 0 && (u = ht(o, f, m), v = ht(c, a, $)), u.has(c[a]))
        if (u.has(c[$])) {
          const P = v.get(o[f]), ae = P !== void 0 ? t[P] : null;
          if (ae === null) {
            const Be = w(r, t[a]);
            C(Be, i[f]), l[f] = Be;
          } else
            l[f] = C(ae, i[f]), w(r, t[a], ae), t[P] = null;
          f++;
        } else
          fe(t[$]), $--;
      else
        fe(t[a]), a++;
    for (; f <= m; ) {
      const P = w(r, l[m + 1]);
      C(P, i[f]), l[f++] = P;
    }
    for (; a <= $; ) {
      const P = t[a++];
      P !== null && fe(P);
    }
    return this.ut = o, k(r, l), g;
  }
});
var kr = Object.defineProperty, en = Object.getOwnPropertyDescriptor, Ie = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? en(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && kr(e, s, t), t;
};
let oe = class extends p {
  constructor() {
    super(), this.users = [], this.sorted = !1, this.users = [
      { id: 1, name: "김철수", checked: !1 },
      { id: 2, name: "박영희", checked: !1 },
      { id: 3, name: "이민준", checked: !1 }
    ], this.sorted = !1;
  }
  toggleSort() {
    this.sorted = !this.sorted, this.sorted ? (console.log(1), this.users = [...this.users.sort((r, e) => r.name.localeCompare(e.name))]) : (console.log(2), this.users = [...this.users.sort((r, e) => e.name.localeCompare(r.name))]);
  }
  toggleCheckbox(r) {
    const e = this.users.find((s) => s.id === r);
    e && (e.checked = !e.checked, this.requestUpdate());
  }
  render() {
    return h`
      <ul>
        ${Gr(this.users, (r) => r.id, (r) => h`
          <li>
            <input type="checkbox"
                   ?checked=${r.checked}
                   @click=${() => this.toggleCheckbox(r.id)}>
            ${r.name}
          </li>
        `)}
      </ul>
      <button @click=${this.toggleSort}>목록 정렬</button>
    `;
  }
};
Ie([
  b({ type: Array })
], oe.prototype, "users", 2);
Ie([
  b({ type: Boolean })
], oe.prototype, "sorted", 2);
oe = Ie([
  d("repeat-directive")
], oe);
var tn = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, rn = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? sn(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && tn(e, s, t), t;
};
let ut = class extends p {
  render() {
    return h`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <p>이곳은 공통 콘텐츠 영역입니다.</p>
        <slot name="footer"></slot>
      </div>
    `;
  }
};
ut = rn([
  d("named-slot-element")
], ut);
var nn = Object.defineProperty, on = Object.getOwnPropertyDescriptor, ln = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? on(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && nn(e, s, t), t;
};
let pt = class extends p {
  // 여러 DOM이 같은 slot name을 가지면 순서대로 출력된다.
  render() {
    return h`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
};
pt = ln([
  d("same-name-slot")
], pt);
var cn = Object.defineProperty, an = Object.getOwnPropertyDescriptor, hn = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? an(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && cn(e, s, t), t;
};
let dt = class extends p {
  render() {
    return h`
      <slot @slotchange="${this.handleSlotChange}"></slot>
    `;
  }
  handleSlotChange(r) {
    const s = r.target.assignedNodes();
    console.log("슬롯에 할당된 노드들:"), s.forEach((n) => {
      n.nodeType === Node.ELEMENT_NODE ? console.log("이것은 element입니다.", n.outerHTML) : n.nodeType === Node.TEXT_NODE && console.log("이것은 text 입니다.", n.nodeValue);
    });
  }
};
dt = hn([
  d("slot-content")
], dt);
var un = Object.defineProperty, pn = Object.getOwnPropertyDescriptor, dn = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? pn(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && un(e, s, t), t;
};
let ft = class extends p {
  handleSlotchange(r) {
    const s = r.target.assignedNodes({ flatten: !0 }).map((n) => n.textContent ? n.textContent : "").join("");
    console.log("slot change event fired:", { allText: s });
  }
  render() {
    return h`<slot @slotchange=${this.handleSlotchange}></slot>`;
  }
};
ft = dn([
  d("slot-change")
], ft);
var fn = Object.defineProperty, $n = Object.getOwnPropertyDescriptor, vn = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? $n(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && fn(e, s, t), t;
};
let $t = class extends p {
  // render 메소드를 오버라이드하여 컴포넌트의 HTML 구조를 정의합니다.
  render() {
    return h`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `;
  }
};
$t = vn([
  d("slot-init")
], $t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt = (r) => as(r) ? r._$litType$.h : r.strings, _n = E(class extends K {
  constructor(r) {
    super(r), this.et = /* @__PURE__ */ new WeakMap();
  }
  render(r) {
    return [r];
  }
  update(r, [e]) {
    const s = Ge(this.it) ? vt(this.it) : null, n = Ge(e) ? vt(e) : null;
    if (s !== null && (n === null || s !== n)) {
      const t = ve(r).pop();
      let i = this.et.get(s);
      if (i === void 0) {
        const o = document.createDocumentFragment();
        i = St(_, o), i.setConnected(!1), this.et.set(s, i);
      }
      k(i, [t]), w(i, void 0, t);
    }
    if (n !== null) {
      if (s === null || s !== n) {
        const t = this.et.get(n);
        if (t !== void 0) {
          const i = ve(t).pop();
          jt(r), w(r, void 0, i), k(r, [i]);
        }
      }
      this.it = e;
    } else
      this.it = void 0;
    return this.render(e);
  }
});
var bn = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, Le = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? mn(e, s) : e, i = r.length - 1, o; i >= 0; i--)
    (o = r[i]) && (t = (n ? o(e, s, t) : o(t)) || t);
  return n && t && bn(e, s, t), t;
};
const gn = (r) => h`<div>Detail View: ${r.detail}</div>`, yn = (r) => h`<div>Summary View: ${r.summary}</div>`;
let le = class extends p {
  constructor() {
    super(...arguments), this.detail = !0, this.data = { detail: "여기에 상세 내용", summary: "여기에 요약 내용" };
  }
  render() {
    return h`
      <button @click="${() => this.detail = !this.detail}">Toggle Details</button>
      ${_n(
      this.detail ? gn(this.data) : yn(this.data)
    )}
    `;
  }
};
Le([
  U()
], le.prototype, "detail", 2);
Le([
  b({ type: Object })
], le.prototype, "data", 2);
le = Le([
  d("template-cache")
], le);
