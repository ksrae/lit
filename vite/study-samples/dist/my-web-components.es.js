/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = globalThis, re = B.ShadowRoot && (B.ShadyCSS === void 0 || B.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ne = Symbol(), ce = /* @__PURE__ */ new WeakMap();
let Se = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== ne)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (re && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = ce.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && ce.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const A = (n) => new Se(typeof n == "string" ? n : n + "", void 0, ne), H = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, s, i) => r + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[i + 1], n[0]);
  return new Se(t, n, ne);
}, Be = (n, e) => {
  if (re)
    n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else
    for (const t of e) {
      const r = document.createElement("style"), s = B.litNonce;
      s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, n.appendChild(r);
    }
}, ae = re ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules)
    t += r.cssText;
  return A(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ze, defineProperty: Fe, getOwnPropertyDescriptor: Ve, getOwnPropertyNames: We, getOwnPropertySymbols: qe, getPrototypeOf: Je } = Object, b = globalThis, he = b.trustedTypes, Ke = he ? he.emptyScript : "", K = b.reactiveElementPolyfillSupport, D = (n, e) => n, z = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Ke : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, oe = (n, e) => !ze(n, e), pe = { attribute: !0, type: String, converter: z, reflect: !1, hasChanged: oe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), b.litPropertyMetadata ?? (b.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class S extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = pe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Fe(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: i } = Ve(this.prototype, e) ?? { get() {
      return this[t];
    }, set(o) {
      this[t] = o;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(o) {
      const c = s == null ? void 0 : s.call(this);
      i.call(this, o), this.requestUpdate(e, c, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? pe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(D("elementProperties")))
      return;
    const e = Je(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(D("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(D("properties"))) {
      const t = this.properties, r = [...We(t), ...qe(t)];
      for (const s of r)
        this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0)
        for (const [r, s] of t)
          this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const s = this._$Eu(t, r);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const s of r)
        t.unshift(ae(s));
    } else
      e !== void 0 && t.push(ae(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const r of t.keys())
      this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Be(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$EC(e, t) {
    var i;
    const r = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, r);
    if (s !== void 0 && r.reflect === !0) {
      const o = (((i = r.converter) == null ? void 0 : i.toAttribute) !== void 0 ? r.converter : z).toAttribute(t, r.type);
      this._$Em = e, o == null ? this.removeAttribute(s) : this.setAttribute(s, o), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var i;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const o = r.getPropertyOptions(s), c = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((i = o.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? o.converter : z;
      this._$Em = s, this[s] = c.fromAttribute(t, o.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, r) {
    if (e !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(e)), !(r.hasChanged ?? oe)(this[e], t))
        return;
      this.P(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, r) {
    this._$AL.has(e) || this._$AL.set(e, t), r.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, o] of this._$Ep)
          this[i] = o;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0)
        for (const [i, o] of s)
          o.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], o);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((s) => {
        var i;
        return (i = s.hostUpdate) == null ? void 0 : i.call(s);
      }), this.update(t)) : this._$EU();
    } catch (s) {
      throw e = !1, this._$EU(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
S.elementStyles = [], S.shadowRootOptions = { mode: "open" }, S[D("elementProperties")] = /* @__PURE__ */ new Map(), S[D("finalized")] = /* @__PURE__ */ new Map(), K == null || K({ ReactiveElement: S }), (b.reactiveElementVersions ?? (b.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis, F = j.trustedTypes, de = F ? F.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, xe = "$lit$", g = `lit$${(Math.random() + "").slice(9)}$`, Te = "?" + g, Ze = `<${Te}>`, E = document, N = () => E.createComment(""), U = (n) => n === null || typeof n != "object" && typeof n != "function", De = Array.isArray, Xe = (n) => De(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", Z = `[ 	
\f\r]`, T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ue = /-->/g, _e = />/g, y = RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), $e = /'/g, fe = /"/g, je = /^(?:script|style|textarea|title)$/i, Ye = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), p = Ye(1), C = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), ve = /* @__PURE__ */ new WeakMap(), P = E.createTreeWalker(E, 129);
function Ne(n, e) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return de !== void 0 ? de.createHTML(e) : e;
}
const Ge = (n, e) => {
  const t = n.length - 1, r = [];
  let s, i = e === 2 ? "<svg>" : "", o = T;
  for (let c = 0; c < t; c++) {
    const l = n[c];
    let u, $, a = -1, v = 0;
    for (; v < l.length && (o.lastIndex = v, $ = o.exec(l), $ !== null); )
      v = o.lastIndex, o === T ? $[1] === "!--" ? o = ue : $[1] !== void 0 ? o = _e : $[2] !== void 0 ? (je.test($[2]) && (s = RegExp("</" + $[2], "g")), o = y) : $[3] !== void 0 && (o = y) : o === y ? $[0] === ">" ? (o = s ?? T, a = -1) : $[1] === void 0 ? a = -2 : (a = o.lastIndex - $[2].length, u = $[1], o = $[3] === void 0 ? y : $[3] === '"' ? fe : $e) : o === fe || o === $e ? o = y : o === ue || o === _e ? o = T : (o = y, s = void 0);
    const m = o === y && n[c + 1].startsWith("/>") ? " " : "";
    i += o === T ? l + Ze : a >= 0 ? (r.push(u), l.slice(0, a) + xe + l.slice(a) + g + m) : l + g + (a === -2 ? c : m);
  }
  return [Ne(n, i + (n[t] || "<?>") + (e === 2 ? "</svg>" : "")), r];
};
class R {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let i = 0, o = 0;
    const c = e.length - 1, l = this.parts, [u, $] = Ge(e, t);
    if (this.el = R.createElement(u, r), P.currentNode = this.el.content, t === 2) {
      const a = this.el.content.firstChild;
      a.replaceWith(...a.childNodes);
    }
    for (; (s = P.nextNode()) !== null && l.length < c; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes())
          for (const a of s.getAttributeNames())
            if (a.endsWith(xe)) {
              const v = $[o++], m = s.getAttribute(a).split(g), I = /([.?@])?(.*)/.exec(v);
              l.push({ type: 1, index: i, name: I[2], strings: m, ctor: I[1] === "." ? ke : I[1] === "?" ? et : I[1] === "@" ? tt : J }), s.removeAttribute(a);
            } else
              a.startsWith(g) && (l.push({ type: 6, index: i }), s.removeAttribute(a));
        if (je.test(s.tagName)) {
          const a = s.textContent.split(g), v = a.length - 1;
          if (v > 0) {
            s.textContent = F ? F.emptyScript : "";
            for (let m = 0; m < v; m++)
              s.append(a[m], N()), P.nextNode(), l.push({ type: 2, index: ++i });
            s.append(a[v], N());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === Te)
          l.push({ type: 2, index: i });
        else {
          let a = -1;
          for (; (a = s.data.indexOf(g, a + 1)) !== -1; )
            l.push({ type: 7, index: i }), a += g.length - 1;
        }
      i++;
    }
  }
  static createElement(e, t) {
    const r = E.createElement("template");
    return r.innerHTML = e, r;
  }
}
function x(n, e, t = n, r) {
  var o, c;
  if (e === C)
    return e;
  let s = r !== void 0 ? (o = t._$Co) == null ? void 0 : o[r] : t._$Cl;
  const i = U(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== i && ((c = s == null ? void 0 : s._$AO) == null || c.call(s, !1), i === void 0 ? s = void 0 : (s = new i(n), s._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = s : t._$Cl = s), s !== void 0 && (e = x(n, s._$AS(n, e.values), s, r)), e;
}
class Qe {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? E).importNode(t, !0);
    P.currentNode = s;
    let i = P.nextNode(), o = 0, c = 0, l = r[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let u;
        l.type === 2 ? u = new M(i, i.nextSibling, this, e) : l.type === 1 ? u = new l.ctor(i, l.name, l.strings, this, e) : l.type === 6 && (u = new st(i, this, e)), this._$AV.push(u), l = r[++c];
      }
      o !== (l == null ? void 0 : l.index) && (i = P.nextNode(), o++);
    }
    return P.currentNode = E, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class M {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = x(this, e, t), U(e) ? e === _ || e == null || e === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : e !== this._$AH && e !== C && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Xe(e) ? this.k(e) : this._(e);
  }
  S(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  _(e) {
    this._$AH !== _ && U(this._$AH) ? this._$AA.nextSibling.data = e : this.T(E.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var i;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = R.createElement(Ne(r.h, r.h[0]), this.options)), r);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === s)
      this._$AH.p(t);
    else {
      const o = new Qe(s, this), c = o.u(this.options);
      o.p(t), this.T(c), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = ve.get(e.strings);
    return t === void 0 && ve.set(e.strings, t = new R(e)), t;
  }
  k(e) {
    De(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const i of e)
      s === t.length ? t.push(r = new M(this.S(N()), this.S(N()), this, this.options)) : r = t[s], r._$AI(i), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class J {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, i) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = _;
  }
  _$AI(e, t = this, r, s) {
    const i = this.strings;
    let o = !1;
    if (i === void 0)
      e = x(this, e, t, 0), o = !U(e) || e !== this._$AH && e !== C, o && (this._$AH = e);
    else {
      const c = e;
      let l, u;
      for (e = i[0], l = 0; l < i.length - 1; l++)
        u = x(this, c[r + l], t, l), u === C && (u = this._$AH[l]), o || (o = !U(u) || u !== this._$AH[l]), u === _ ? e = _ : e !== _ && (e += (u ?? "") + i[l + 1]), this._$AH[l] = u;
    }
    o && !s && this.j(e);
  }
  j(e) {
    e === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ke extends J {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === _ ? void 0 : e;
  }
}
class et extends J {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _);
  }
}
class tt extends J {
  constructor(e, t, r, s, i) {
    super(e, t, r, s, i), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = x(this, e, t, 0) ?? _) === C)
      return;
    const r = this._$AH, s = e === _ && r !== _ || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, i = e !== _ && (r === _ || s);
    s && this.element.removeEventListener(this.name, this, r), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class st {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    x(this, e);
  }
}
const X = j.litHtmlPolyfillSupport;
X == null || X(R, M), (j.litHtmlVersions ?? (j.litHtmlVersions = [])).push("3.1.2");
const rt = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const i = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new M(e.insertBefore(N(), i), i, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class h extends S {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = rt(t, this.renderRoot, this.renderOptions);
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
    return C;
  }
}
var we;
h._$litElement$ = !0, h.finalized = !0, (we = globalThis.litElementHydrateSupport) == null || we.call(globalThis, { LitElement: h });
const Y = globalThis.litElementPolyfillSupport;
Y == null || Y({ LitElement: h });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const d = (n) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(n, e);
  }) : customElements.define(n, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = { attribute: !0, type: String, converter: z, reflect: !1, hasChanged: oe }, ot = (n = nt, e, t) => {
  const { kind: r, metadata: s } = t;
  let i = globalThis.litPropertyMetadata.get(s);
  if (i === void 0 && globalThis.litPropertyMetadata.set(s, i = /* @__PURE__ */ new Map()), i.set(t.name, n), r === "accessor") {
    const { name: o } = t;
    return { set(c) {
      const l = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(o, l, n);
    }, init(c) {
      return c !== void 0 && this.P(o, void 0, n), c;
    } };
  }
  if (r === "setter") {
    const { name: o } = t;
    return function(c) {
      const l = this[o];
      e.call(this, c), this.requestUpdate(o, l, n);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function f(n) {
  return (e, t) => typeof t == "object" ? ot(n, e, t) : ((r, s, i) => {
    const o = s.hasOwnProperty(i);
    return s.constructor.createProperty(i, o ? { ...r, wrapped: !0 } : r), o ? Object.getOwnPropertyDescriptor(s, i) : void 0;
  })(n, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function it(n) {
  return (e, t) => {
    const r = typeof e == "function" ? e : e[t];
    Object.assign(r, n);
  };
}
var lt = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, L = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ct(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && lt(e, t, s), s;
};
let O = class extends h {
  constructor() {
    super(...arguments), this.value = "button", this.disabled = !1, this.loading = !1, this.type = "default";
  }
  render() {
    return console.log(this.loading), p`
      <button 
        .disabled=${this.disabled} 
        @click=${this._onClicked}>
        ${this.loading ? "Loading..." : this.value}
      </button>
    `;
  }
  _onClicked() {
    const n = new CustomEvent("onclicked", {
      detail: this.value,
      bubbles: !0,
      composed: !0
    });
    console.log("click event"), this.dispatchEvent(n);
  }
};
O.styles = H`
    :host {
      color: blue;
    }
    button:hover {
        color: red;
      }
  `;
L([
  f({ type: String })
], O.prototype, "value", 2);
L([
  f({ type: Boolean })
], O.prototype, "disabled", 2);
L([
  f({ type: Boolean })
], O.prototype, "loading", 2);
L([
  f({ type: String })
], O.prototype, "type", 2);
O = L([
  d("my-button")
], O);
var at = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, ie = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ht(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && at(e, t, s), s;
};
let V = class extends h {
  constructor() {
    super(), this.hostName = "", this.shadowName = "", this.addEventListener(
      "click",
      (n) => this.hostName = n.target.localName
    );
  }
  createRenderRoot() {
    const n = super.createRenderRoot();
    return n.addEventListener(
      "click",
      (e) => this.shadowName = e.target.localName
    ), n;
  }
  _pclick(n) {
    console.log("p click");
  }
  render() {
    return p`
      <p><button>Click Me!</button></p>
      <p>Component target: ${this.hostName}</p>
      <p>Shadow target: ${this.shadowName}</p>
      <p @click=${this._pclick}>Click me!</p>
    `;
  }
};
ie([
  f()
], V.prototype, "hostName", 2);
ie([
  f()
], V.prototype, "shadowName", 2);
V = ie([
  d("create-render-root")
], V);
const Ue = H`
  :host {
    display: block;
    color: blue;
  }
  p {
    font-size: 20px;
  }
`;
var pt = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, ut = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? dt(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && pt(e, t, s), s;
};
let G = class extends h {
  render() {
    return p`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `;
  }
};
G.styles = [
  Ue,
  H`
      p {
        color: red;
      }
    `
];
G = ut([
  d("child-component")
], G);
var _t = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, ft = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? $t(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && _t(e, t, s), s;
};
let Q = class extends h {
  render() {
    return p`
      <p>부모 컴포넌트의 스타일</p>
    `;
  }
};
Q.styles = Ue;
Q = ft([
  d("parent-component")
], Q);
const vt = {
  primary: "#6200EE",
  primaryVariant: "#3700B3",
  onPrimary: "#FFFFFF",
  default: "#FFFFFF",
  defaultVariant: "#EEEEEE",
  onDefault: "#000000"
}, mt = {
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
}, gt = {
  small: "8px",
  medium: "16px",
  large: "24px"
}, bt = {
  small: "4px",
  medium: "8px",
  large: "16px"
}, w = {
  colors: vt,
  typography: mt,
  spacing: gt,
  borderRadius: bt
};
var yt = Object.defineProperty, At = Object.getOwnPropertyDescriptor, Pt = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? At(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && yt(e, t, s), s;
};
let k = class extends h {
  render() {
    return p`
      <button>Click me</button>
    `;
  }
};
k.styles = H`
    :host(.primary) {
      /* primary 테마 스타일 */
      --button-bg-color: ${A(w.colors.primary)};
      --button-color: ${A(w.colors.onPrimary)};
      --hover: ${A(w.colors.primaryVariant)};
    }
    :host(.default) {
      /* default 테마 스타일 */
      --button-bg-color: ${A(w.colors.default)};
      --button-color: ${A(w.colors.onDefault)};
      --hover: ${A(w.colors.defaultVariant)};
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
k = Pt([
  d("design-system")
], k);
var Et = Object.defineProperty, Ct = Object.getOwnPropertyDescriptor, Ot = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ct(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && Et(e, t, s), s;
};
let me = class extends h {
  _onClicked() {
    const n = new CustomEvent("my-custom-event", {
      detail: { more: { msg: "fireddddd" } },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
  render() {
    return p`
      <button @click="${this._onClicked}">이벤트 발생시키기</button>
    `;
  }
};
me = Ot([
  d("custom-event")
], me);
var wt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, Re = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? St(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && wt(e, t, s), s;
};
let ee = class extends h {
  constructor() {
    super(...arguments), this.clicked = "";
  }
  // @property({attribute: false}) clicked = ''; // 이것도 됨.
  // @state() clicked = ''; // 이것도 됨
  // 모든 내부 변수나 상태가 꼭 @property나 @state를 사용해야 하는 것은 아닙니다. 예를 들어, 컴포넌트 내부에서만 사용되고 UI 업데이트와 관련이 없는 임시 변수나 상수 등은 굳이 이러한 데코레이터를 사용하지 않아도 됩니다. 중요한 것은, UI의 업데이트와 관련된 데이터는 반드시 @property나 @state와 같은 반응형 시스템을 통해 관리되어야 한다는 점입니다.
  // 결론적으로, @property({attribute: false})를 사용하는 것이 잘 작동하는 이유는 해당 속성이 HTML attribute로서의 역할을 하지 않고, 단지 컴포넌트 내부에서 관리되는 상태나 데이터로서 기능하기 때문입니다. DOM에 출력되는 변수들은 반응형 업데이트가 필요한 경우 @property나 @state를 사용하여 정의해야 합니다.
  render() {
    return p`
      <div @click="${this._clickHandler}">
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
      </div>
      <p>Clicked: ${this.clicked}</p>
    `;
  }
  _clickHandler(n) {
    this.clicked = n.target === n.currentTarget ? "container" : n.target.textContent;
  }
};
Re([
  f()
], ee.prototype, "clicked", 2);
ee = Re([
  d("event-delegation")
], ee);
var xt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, le = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Tt(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && xt(e, t, s), s;
};
let W = class extends h {
  constructor() {
    super(...arguments), this.label = "Check me!", this.defaultMessage = "🙂", this.message = this.defaultMessage;
  }
  // 컴포넌트의 HTML 구조와 데이터 바인딩을 정의합니다.
  render() {
    return p`
      <label><input type="checkbox" @click=${this._tryChange}>${this.label}</label>
      <div>${this.message}</div>
    `;
  }
  // 체크박스 클릭 시 이벤트를 발생시키는 핸들러
  _tryChange(n) {
    const e = { message: this.message }, t = new CustomEvent("checked", { detail: e, bubbles: !0, composed: !0, cancelable: !0 });
    this.dispatchEvent(t), t.defaultPrevented && n.preventDefault(), this.message = e.message;
  }
  // 프로퍼티 업데이트 후 호출되는 메소드, 메시지를 초기화합니다.
  updated() {
    clearTimeout(this._resetMessage), this._resetMessage = setTimeout(() => this.message = this.defaultMessage, 1e3);
  }
};
le([
  f()
], W.prototype, "label", 2);
le([
  f()
], W.prototype, "message", 2);
W = le([
  d("event-dispatcher-communication")
], W);
var Dt = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, He = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? jt(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && Dt(e, t, s), s;
};
let te = class extends h {
  constructor() {
    super(...arguments), this.canCheck = !1;
  }
  // 컴포넌트의 HTML 구조와 데이터 바인딩을 정의합니다.
  render() {
    return p`
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck ? "Allowing" : "Preventing"} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`;
  }
  // checked 이벤트를 처리하는 핸들러
  // 여기가 핵심이다. slot에서 넘어온 emitter를 받아서 fired를 e.preventDefault()로 막고, event에 직접 값을 집어 넣을 수 있다니 !!
  _checkedHandler(n) {
    this.canCheck || (n.preventDefault(), n.detail.message = "✅ Prevented!!");
  }
  // 체크 가능 상태를 토글하는 버튼의 클릭 핸들러
  _clickHandler() {
    this.canCheck = !this.canCheck;
  }
};
He([
  f({ type: Boolean })
], te.prototype, "canCheck", 2);
te = He([
  d("my-listener")
], te);
var Nt = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, Me = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ut(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && Nt(e, t, s), s;
};
let se = class extends h {
  _passiveclick(n) {
    console.log(n.type);
  }
  _click(n) {
    console.log(n.type);
  }
  render() {
    return p`
      <div @click=${this._passiveclick}>Passive event</div>
      <div @click=${this._click}>Normal event</div>
    `;
  }
};
Me([
  it({ passive: !0 })
], se.prototype, "_passiveclick", 1);
se = Me([
  d("event-passive")
], se);
var Rt = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Mt = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ht(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && Rt(e, t, s), s;
};
let ge = class extends h {
  // 마치 click event가 있는 것처럼 속이기.
  render() {
    return p`
      <button id="mybutton" @click="${(n) => console.log(n.target)}">
        click me
      </button>
      <ul @click="${this.handleEvent}">
        <li><button>Item 1</button></li>
        <li><button>Item 2</button></li>
        <li><button>Item 3</button></li>
      </ul>
      `;
  }
  handleEvent(n) {
    console.log("Origin:", n.composedPath()[0]);
  }
};
ge = Mt([
  d("event-retargeting")
], ge);
var Lt = Object.defineProperty, It = Object.getOwnPropertyDescriptor, Bt = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? It(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && Lt(e, t, s), s;
};
class zt extends Event {
  constructor() {
    super("my-standard-event", {
      bubbles: !0,
      // 버블링을 허용
      composed: !0
      // 쉐도우 DOM 경계를 넘어서 전파
    });
  }
}
let be = class extends h {
  fireEvent() {
    const n = new zt();
    this.dispatchEvent(n);
  }
  render() {
    return p`
      <button @click="${this.fireEvent}">이벤트 발생시키기</button>
    `;
  }
};
be = Bt([
  d("standard-event")
], be);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ft = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Vt = (n) => (...e) => ({ _$litDirective$: n, values: e });
let Wt = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, r) {
    this._$Ct = e, this._$AM = t, this._$Ci = r;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Le = "important", qt = " !" + Le, Jt = Vt(class extends Wt {
  constructor(n) {
    var e;
    if (super(n), n.type !== Ft.ATTRIBUTE || n.name !== "style" || ((e = n.strings) == null ? void 0 : e.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return Object.keys(n).reduce((e, t) => {
      const r = n[t];
      return r == null ? e : e + `${t = t.includes("-") ? t : t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(n, [e]) {
    const { style: t } = n.element;
    if (this.ft === void 0)
      return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const r of this.ft)
      e[r] == null && (this.ft.delete(r), r.includes("-") ? t.removeProperty(r) : t[r] = null);
    for (const r in e) {
      const s = e[r];
      if (s != null) {
        this.ft.add(r);
        const i = typeof s == "string" && s.endsWith(qt);
        r.includes("-") || i ? t.setProperty(r, i ? s.slice(0, -11) : s, i ? Le : "") : t[r] = s;
      }
    }
    return C;
  }
}), Kt = "blue", Zt = "white", Xt = "10px 20px", Yt = "none", Gt = "5px", Qt = "pointer", kt = {
  backgroundColor: Kt,
  color: Zt,
  padding: Xt,
  border: Yt,
  borderRadius: Gt,
  cursor: Qt
};
var es = Object.defineProperty, ts = Object.getOwnPropertyDescriptor, ss = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ts(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && es(e, t, s), s;
};
let ye = class extends h {
  render() {
    return p`
      <button style=${Jt(kt)}>버튼이야</button>
    `;
  }
};
ye = ss([
  d("json-in-css")
], ye);
var rs = Object.defineProperty, ns = Object.getOwnPropertyDescriptor, Ie = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ns(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && rs(e, t, s), s;
};
let q = class extends h {
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
  shouldUpdate(n) {
    return console.log("shouldUpdate:", n), n.has("count");
  }
  // willUpdate: 업데이트가 진행되기 직전에 호출됩니다.
  willUpdate(n) {
    console.log("willUpdate:", n);
  }
  // update: 실제 업데이트 로직을 수행합니다. 대부분의 경우 이 메소드를 직접 사용할 필요는 없습니다.
  update(n) {
    super.update(n), console.log("update:", n);
  }
  // firstUpdated: 컴포넌트가 처음 업데이트될 때 한 번만 호출됩니다.
  firstUpdated(n) {
    console.log("firstUpdated:", n);
  }
  // updated: 업데이트가 완료된 후 호출됩니다.
  updated(n) {
    console.log("updated:", n);
  }
  render() {
    return p`
      <h1>Count: ${this.count}</h1>
      <button @click="${this.incrementCount}">Increment</button>
    `;
  }
  incrementCount() {
    this.count += 1;
  }
};
q.styles = H`
      :host {
        display: block;
      }
    `;
Ie([
  f({
    type: Number,
    hasChanged(n, e) {
      return console.log(`hasChanged: ${e} -> ${n}`), e !== n;
    }
  })
], q.prototype, "count", 2);
q = Ie([
  d("life-cycle-first")
], q);
var os = Object.defineProperty, is = Object.getOwnPropertyDescriptor, ls = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? is(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && os(e, t, s), s;
};
let Ae = class extends h {
  render() {
    return p`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <p>이곳은 공통 콘텐츠 영역입니다.</p>
        <slot name="footer"></slot>
      </div>
    `;
  }
};
Ae = ls([
  d("named-slot-element")
], Ae);
var cs = Object.defineProperty, as = Object.getOwnPropertyDescriptor, hs = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? as(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && cs(e, t, s), s;
};
let Pe = class extends h {
  // 여러 DOM이 같은 slot name을 가지면 순서대로 출력된다.
  render() {
    return p`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
};
Pe = hs([
  d("same-name-slot")
], Pe);
var ps = Object.defineProperty, ds = Object.getOwnPropertyDescriptor, us = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ds(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && ps(e, t, s), s;
};
let Ee = class extends h {
  render() {
    return p`
      <slot @slotchange="${this.handleSlotChange}"></slot>
    `;
  }
  handleSlotChange(n) {
    const t = n.target.assignedNodes();
    console.log("슬롯에 할당된 노드들:"), t.forEach((r) => {
      r.nodeType === Node.ELEMENT_NODE ? console.log("이것은 element입니다.", r.outerHTML) : r.nodeType === Node.TEXT_NODE && console.log("이것은 text 입니다.", r.nodeValue);
    });
  }
};
Ee = us([
  d("slot-content")
], Ee);
var _s = Object.defineProperty, $s = Object.getOwnPropertyDescriptor, fs = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? $s(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && _s(e, t, s), s;
};
let Ce = class extends h {
  handleSlotchange(n) {
    const t = n.target.assignedNodes({ flatten: !0 }).map((r) => r.textContent ? r.textContent : "").join("");
    console.log("slot change event fired:", { allText: t });
  }
  render() {
    return p`<slot @slotchange=${this.handleSlotchange}></slot>`;
  }
};
Ce = fs([
  d("slot-change")
], Ce);
var vs = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, gs = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ms(e, t) : e, i = n.length - 1, o; i >= 0; i--)
    (o = n[i]) && (s = (r ? o(e, t, s) : o(s)) || s);
  return r && s && vs(e, t, s), s;
};
let Oe = class extends h {
  // render 메소드를 오버라이드하여 컴포넌트의 HTML 구조를 정의합니다.
  render() {
    return p`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `;
  }
};
Oe = gs([
  d("slot-init")
], Oe);
