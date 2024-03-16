/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X = globalThis, Oe = X.ShadowRoot && (X.ShadyCSS === void 0 || X.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Be = /* @__PURE__ */ new WeakMap();
let $t = class {
  constructor(e, s, n) {
    if (this._$cssResult$ = !0, n !== Ee)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = s;
  }
  get styleSheet() {
    let e = this.o;
    const s = this.t;
    if (Oe && e === void 0) {
      const n = s !== void 0 && s.length === 1;
      n && (e = Be.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Be.set(s, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const S = (r) => new $t(typeof r == "string" ? r : r + "", void 0, Ee), I = (r, ...e) => {
  const s = r.length === 1 ? r[0] : e.reduce((n, t, o) => n + ((i) => {
    if (i._$cssResult$ === !0)
      return i.cssText;
    if (typeof i == "number")
      return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(t) + r[o + 1], r[0]);
  return new $t(s, r, Ee);
}, Lt = (r, e) => {
  if (Oe)
    r.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  else
    for (const s of e) {
      const n = document.createElement("style"), t = X.litNonce;
      t !== void 0 && n.setAttribute("nonce", t), n.textContent = s.cssText, r.appendChild(n);
    }
}, Le = Oe ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
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
const { is: Vt, defineProperty: zt, getOwnPropertyDescriptor: Wt, getOwnPropertyNames: Yt, getOwnPropertySymbols: Ft, getPrototypeOf: qt } = Object, O = globalThis, Ve = O.trustedTypes, Jt = Ve ? Ve.emptyScript : "", he = O.reactiveElementPolyfillSupport, V = (r, e) => r, Q = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Jt : null;
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
} }, xe = (r, e) => !Vt(r, e), ze = { attribute: !0, type: String, converter: Q, reflect: !1, hasChanged: xe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), O.litPropertyMetadata ?? (O.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class M extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, s = ze) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(e, s), !s.noAccessor) {
      const n = Symbol(), t = this.getPropertyDescriptor(e, n, s);
      t !== void 0 && zt(this.prototype, e, t);
    }
  }
  static getPropertyDescriptor(e, s, n) {
    const { get: t, set: o } = Wt(this.prototype, e) ?? { get() {
      return this[s];
    }, set(i) {
      this[s] = i;
    } };
    return { get() {
      return t == null ? void 0 : t.call(this);
    }, set(i) {
      const c = t == null ? void 0 : t.call(this);
      o.call(this, i), this.requestUpdate(e, c, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(V("elementProperties")))
      return;
    const e = qt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(V("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(V("properties"))) {
      const s = this.properties, n = [...Yt(s), ...Ft(s)];
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
        s.unshift(Le(t));
    } else
      e !== void 0 && s.push(Le(e));
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
    return Lt(e, this.constructor.elementStyles), e;
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
    var o;
    const n = this.constructor.elementProperties.get(e), t = this.constructor._$Eu(e, n);
    if (t !== void 0 && n.reflect === !0) {
      const i = (((o = n.converter) == null ? void 0 : o.toAttribute) !== void 0 ? n.converter : Q).toAttribute(s, n.type);
      this._$Em = e, i == null ? this.removeAttribute(t) : this.setAttribute(t, i), this._$Em = null;
    }
  }
  _$AK(e, s) {
    var o;
    const n = this.constructor, t = n._$Eh.get(e);
    if (t !== void 0 && this._$Em !== t) {
      const i = n.getPropertyOptions(t), c = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : Q;
      this._$Em = t, this[t] = c.fromAttribute(s, i.type), this._$Em = null;
    }
  }
  requestUpdate(e, s, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? xe)(this[e], s))
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
        for (const [o, i] of this._$Ep)
          this[o] = i;
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0)
        for (const [o, i] of t)
          i.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], i);
    }
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (n = this._$EO) == null || n.forEach((t) => {
        var o;
        return (o = t.hostUpdate) == null ? void 0 : o.call(t);
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
const z = globalThis, G = z.trustedTypes, We = G ? G.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Se = "$lit$", P = `lit$${(Math.random() + "").slice(9)}$`, De = "?" + P, Kt = `<${De}>`, T = document, Y = () => T.createComment(""), F = (r) => r === null || typeof r != "object" && typeof r != "function", ft = Array.isArray, _t = (r) => ft(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", ue = `[ 	
\f\r]`, L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Fe = />/g, x = RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), qe = /'/g, Je = /"/g, vt = /^(?:script|style|textarea|title)$/i, Zt = (r) => (e, ...s) => ({ _$litType$: r, strings: e, values: s }), h = Zt(1), g = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), Ke = /* @__PURE__ */ new WeakMap(), D = T.createTreeWalker(T, 129);
function mt(r, e) {
  if (!Array.isArray(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return We !== void 0 ? We.createHTML(e) : e;
}
const bt = (r, e) => {
  const s = r.length - 1, n = [];
  let t, o = e === 2 ? "<svg>" : "", i = L;
  for (let c = 0; c < s; c++) {
    const l = r[c];
    let p, v, a = -1, f = 0;
    for (; f < l.length && (i.lastIndex = f, v = i.exec(l), v !== null); )
      f = i.lastIndex, i === L ? v[1] === "!--" ? i = Ye : v[1] !== void 0 ? i = Fe : v[2] !== void 0 ? (vt.test(v[2]) && (t = RegExp("</" + v[2], "g")), i = x) : v[3] !== void 0 && (i = x) : i === x ? v[0] === ">" ? (i = t ?? L, a = -1) : v[1] === void 0 ? a = -2 : (a = i.lastIndex - v[2].length, p = v[1], i = v[3] === void 0 ? x : v[3] === '"' ? Je : qe) : i === Je || i === qe ? i = x : i === Ye || i === Fe ? i = L : (i = x, t = void 0);
    const $ = i === x && r[c + 1].startsWith("/>") ? " " : "";
    o += i === L ? l + Kt : a >= 0 ? (n.push(p), l.slice(0, a) + Se + l.slice(a) + P + $) : l + P + (a === -2 ? c : $);
  }
  return [mt(r, o + (r[s] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
class q {
  constructor({ strings: e, _$litType$: s }, n) {
    let t;
    this.parts = [];
    let o = 0, i = 0;
    const c = e.length - 1, l = this.parts, [p, v] = bt(e, s);
    if (this.el = q.createElement(p, n), D.currentNode = this.el.content, s === 2) {
      const a = this.el.content.firstChild;
      a.replaceWith(...a.childNodes);
    }
    for (; (t = D.nextNode()) !== null && l.length < c; ) {
      if (t.nodeType === 1) {
        if (t.hasAttributes())
          for (const a of t.getAttributeNames())
            if (a.endsWith(Se)) {
              const f = v[i++], $ = t.getAttribute(a).split(P), m = /([.?@])?(.*)/.exec(f);
              l.push({ type: 1, index: o, name: m[2], strings: $, ctor: m[1] === "." ? yt : m[1] === "?" ? At : m[1] === "@" ? Pt : J }), t.removeAttribute(a);
            } else
              a.startsWith(P) && (l.push({ type: 6, index: o }), t.removeAttribute(a));
        if (vt.test(t.tagName)) {
          const a = t.textContent.split(P), f = a.length - 1;
          if (f > 0) {
            t.textContent = G ? G.emptyScript : "";
            for (let $ = 0; $ < f; $++)
              t.append(a[$], Y()), D.nextNode(), l.push({ type: 2, index: ++o });
            t.append(a[f], Y());
          }
        }
      } else if (t.nodeType === 8)
        if (t.data === De)
          l.push({ type: 2, index: o });
        else {
          let a = -1;
          for (; (a = t.data.indexOf(P, a + 1)) !== -1; )
            l.push({ type: 7, index: o }), a += P.length - 1;
        }
      o++;
    }
  }
  static createElement(e, s) {
    const n = T.createElement("template");
    return n.innerHTML = e, n;
  }
}
function j(r, e, s = r, n) {
  var i, c;
  if (e === g)
    return e;
  let t = n !== void 0 ? (i = s._$Co) == null ? void 0 : i[n] : s._$Cl;
  const o = F(e) ? void 0 : e._$litDirective$;
  return (t == null ? void 0 : t.constructor) !== o && ((c = t == null ? void 0 : t._$AO) == null || c.call(t, !1), o === void 0 ? t = void 0 : (t = new o(r), t._$AT(r, s, n)), n !== void 0 ? (s._$Co ?? (s._$Co = []))[n] = t : s._$Cl = t), t !== void 0 && (e = j(r, t._$AS(r, e.values), t, n)), e;
}
class gt {
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
    let o = D.nextNode(), i = 0, c = 0, l = n[0];
    for (; l !== void 0; ) {
      if (i === l.index) {
        let p;
        l.type === 2 ? p = new B(o, o.nextSibling, this, e) : l.type === 1 ? p = new l.ctor(o, l.name, l.strings, this, e) : l.type === 6 && (p = new Ct(o, this, e)), this._$AV.push(p), l = n[++c];
      }
      i !== (l == null ? void 0 : l.index) && (o = D.nextNode(), i++);
    }
    return D.currentNode = T, t;
  }
  p(e) {
    let s = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, s), s += n.strings.length - 2) : n._$AI(e[s])), s++;
  }
}
class B {
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
    e = j(this, e, s), F(e) ? e === _ || e == null || e === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : e !== this._$AH && e !== g && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : _t(e) ? this.k(e) : this._(e);
  }
  S(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  _(e) {
    this._$AH !== _ && F(this._$AH) ? this._$AA.nextSibling.data = e : this.T(T.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var o;
    const { values: s, _$litType$: n } = e, t = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = q.createElement(mt(n.h, n.h[0]), this.options)), n);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === t)
      this._$AH.p(s);
    else {
      const i = new gt(t, this), c = i.u(this.options);
      i.p(s), this.T(c), this._$AH = i;
    }
  }
  _$AC(e) {
    let s = Ke.get(e.strings);
    return s === void 0 && Ke.set(e.strings, s = new q(e)), s;
  }
  k(e) {
    ft(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let n, t = 0;
    for (const o of e)
      t === s.length ? s.push(n = new B(this.S(Y()), this.S(Y()), this, this.options)) : n = s[t], n._$AI(o), t++;
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
  constructor(e, s, n, t, o) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = e, this.name = s, this._$AM = t, this.options = o, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = _;
  }
  _$AI(e, s = this, n, t) {
    const o = this.strings;
    let i = !1;
    if (o === void 0)
      e = j(this, e, s, 0), i = !F(e) || e !== this._$AH && e !== g, i && (this._$AH = e);
    else {
      const c = e;
      let l, p;
      for (e = o[0], l = 0; l < o.length - 1; l++)
        p = j(this, c[n + l], s, l), p === g && (p = this._$AH[l]), i || (i = !F(p) || p !== this._$AH[l]), p === _ ? e = _ : e !== _ && (e += (p ?? "") + o[l + 1]), this._$AH[l] = p;
    }
    i && !t && this.j(e);
  }
  j(e) {
    e === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class yt extends J {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === _ ? void 0 : e;
  }
}
class At extends J {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _);
  }
}
class Pt extends J {
  constructor(e, s, n, t, o) {
    super(e, s, n, t, o), this.type = 5;
  }
  _$AI(e, s = this) {
    if ((e = j(this, e, s, 0) ?? _) === g)
      return;
    const n = this._$AH, t = e === _ && n !== _ || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, o = e !== _ && (n === _ || t);
    t && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var s;
    typeof this._$AH == "function" ? this._$AH.call(((s = this.options) == null ? void 0 : s.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Ct {
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
const Xt = { P: Se, A: P, C: De, M: 1, L: bt, R: gt, D: _t, V: j, I: B, H: J, N: At, U: Pt, B: yt, F: Ct }, pe = z.litHtmlPolyfillSupport;
pe == null || pe(q, B), (z.litHtmlVersions ?? (z.litHtmlVersions = [])).push("3.1.2");
const wt = (r, e, s) => {
  const n = (s == null ? void 0 : s.renderBefore) ?? e;
  let t = n._$litPart$;
  if (t === void 0) {
    const o = (s == null ? void 0 : s.renderBefore) ?? null;
    n._$litPart$ = t = new B(e.insertBefore(Y(), o), o, void 0, s ?? {});
  }
  return t._$AI(r), t;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let u = class extends M {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = wt(s, this.renderRoot, this.renderOptions);
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
var dt;
u._$litElement$ = !0, u.finalized = !0, (dt = globalThis.litElementHydrateSupport) == null || dt.call(globalThis, { LitElement: u });
const de = globalThis.litElementPolyfillSupport;
de == null || de({ LitElement: u });
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
const Qt = { attribute: !0, type: String, converter: Q, reflect: !1, hasChanged: xe }, Gt = (r = Qt, e, s) => {
  const { kind: n, metadata: t } = s;
  let o = globalThis.litPropertyMetadata.get(t);
  if (o === void 0 && globalThis.litPropertyMetadata.set(t, o = /* @__PURE__ */ new Map()), o.set(s.name, r), n === "accessor") {
    const { name: i } = s;
    return { set(c) {
      const l = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(i, l, r);
    }, init(c) {
      return c !== void 0 && this.P(i, void 0, r), c;
    } };
  }
  if (n === "setter") {
    const { name: i } = s;
    return function(c) {
      const l = this[i];
      e.call(this, c), this.requestUpdate(i, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function b(r) {
  return (e, s) => typeof s == "object" ? Gt(r, e, s) : ((n, t, o) => {
    const i = t.hasOwnProperty(o);
    return t.constructor.createProperty(o, i ? { ...n, wrapped: !0 } : n), i ? Object.getOwnPropertyDescriptor(t, o) : void 0;
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
function kt(r) {
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
const Ze = (r, e, s) => (s.configurable = !0, s.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(r, e, s), s);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ot(r, e) {
  return (s, n, t) => {
    const o = (i) => {
      var c;
      return ((c = i.renderRoot) == null ? void 0 : c.querySelector(r)) ?? null;
    };
    if (e) {
      const { get: i, set: c } = typeof n == "object" ? s : t ?? (() => {
        const l = Symbol();
        return { get() {
          return this[l];
        }, set(p) {
          this[l] = p;
        } };
      })();
      return Ze(s, n, { get() {
        let l = i.call(this);
        return l === void 0 && (l = o(this), (l !== null || this.hasUpdated) && c.call(this, l)), l;
      } });
    }
    return Ze(s, n, { get() {
      return o(this);
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
const { I: es } = Xt, Xe = (r, e) => e === void 0 ? (r == null ? void 0 : r._$litType$) !== void 0 : (r == null ? void 0 : r._$litType$) === e, ts = (r) => {
  var e;
  return ((e = r == null ? void 0 : r._$litType$) == null ? void 0 : e.h) != null;
}, Et = (r) => r.strings === void 0, Qe = () => document.createComment(""), w = (r, e, s) => {
  var o;
  const n = r._$AA.parentNode, t = e === void 0 ? r._$AB : e._$AA;
  if (s === void 0) {
    const i = n.insertBefore(Qe(), t), c = n.insertBefore(Qe(), t);
    s = new es(i, c, r, r.options);
  } else {
    const i = s._$AB.nextSibling, c = s._$AM, l = c !== r;
    if (l) {
      let p;
      (o = s._$AQ) == null || o.call(s, r), s._$AM = r, s._$AP !== void 0 && (p = r._$AU) !== c._$AU && s._$AP(p);
    }
    if (i !== t || l) {
      let p = s._$AA;
      for (; p !== i; ) {
        const v = p.nextSibling;
        n.insertBefore(p, t), p = v;
      }
    }
  }
  return s;
}, C = (r, e, s = r) => (r._$AI(e, s), r), ss = {}, k = (r, e = ss) => r._$AH = e, _e = (r) => r._$AH, $e = (r) => {
  var n;
  (n = r._$AP) == null || n.call(r, !1, !0);
  let e = r._$AA;
  const s = r._$AB.nextSibling;
  for (; e !== s; ) {
    const t = e.nextSibling;
    e.remove(), e = t;
  }
}, xt = (r) => {
  r._$AR();
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = (r, e) => {
  var n;
  const s = r._$AN;
  if (s === void 0)
    return !1;
  for (const t of s)
    (n = t._$AO) == null || n.call(t, e, !1), W(t, e);
  return !0;
}, ee = (r) => {
  let e, s;
  do {
    if ((e = r._$AM) === void 0)
      break;
    s = e._$AN, s.delete(r), r = e;
  } while ((s == null ? void 0 : s.size) === 0);
}, St = (r) => {
  for (let e; e = r._$AM; r = e) {
    let s = e._$AN;
    if (s === void 0)
      e._$AN = s = /* @__PURE__ */ new Set();
    else if (s.has(r))
      break;
    s.add(r), os(e);
  }
};
function rs(r) {
  this._$AN !== void 0 ? (ee(this), this._$AM = r, St(this)) : this._$AM = r;
}
function ns(r, e = !1, s = 0) {
  const n = this._$AH, t = this._$AN;
  if (t !== void 0 && t.size !== 0)
    if (e)
      if (Array.isArray(n))
        for (let o = s; o < n.length; o++)
          W(n[o], !1), ee(n[o]);
      else
        n != null && (W(n, !1), ee(n));
    else
      W(this, r);
}
const os = (r) => {
  r.type == y.CHILD && (r._$AP ?? (r._$AP = ns), r._$AQ ?? (r._$AQ = rs));
};
class Te extends K {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, s, n) {
    super._$AT(e, s, n), St(this), this.isConnected = e._$AU;
  }
  _$AO(e, s = !0) {
    var n, t;
    e !== this.isConnected && (this.isConnected = e, e ? (n = this.reconnected) == null || n.call(this) : (t = this.disconnected) == null || t.call(this)), s && (W(this, e), ee(this));
  }
  setValue(e) {
    if (Et(this._$Ct))
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
const is = async (r, e) => {
  for await (const s of r)
    if (await e(s) === !1)
      return;
};
class ls {
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
}
let cs = class {
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
let Dt = class extends Te {
  constructor() {
    super(...arguments), this._$CK = new ls(this), this._$CX = new cs();
  }
  render(e, s) {
    return g;
  }
  update(e, [s, n]) {
    if (this.isConnected || this.disconnected(), s === this._$CJ)
      return g;
    this._$CJ = s;
    let t = 0;
    const { _$CK: o, _$CX: i } = this;
    return is(s, async (c) => {
      for (; i.get(); )
        await i.get();
      const l = o.deref();
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
const as = E(Dt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hs = E(class extends Dt {
  constructor(r) {
    if (super(r), r.type !== y.CHILD)
      throw Error("asyncAppend can only be used in child expressions");
  }
  update(r, e) {
    return this._$Ctt = r, super.update(r, e);
  }
  commitValue(r, e) {
    e === 0 && xt(this._$Ctt);
    const s = w(this._$Ctt);
    C(s, r);
  }
});
var us = Object.defineProperty, ps = Object.getOwnPropertyDescriptor, Tt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ps(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && us(e, s, t), t;
};
async function* ds(r) {
  for (let e = 0; e < r; e++)
    yield Math.random() > 0.5 ? "Heads" : "Tails", await new Promise((s) => setTimeout(s, 1e3));
}
let ve = class extends u {
  constructor() {
    super(...arguments), this.tosses = ds(10);
  }
  render() {
    return h`
      <ul>${hs(this.tosses, (r) => h`<li>${r}</li>`)}</ul>
    `;
  }
};
Tt([
  U()
], ve.prototype, "tosses", 2);
ve = Tt([
  d("async-append")
], ve);
var $s = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, jt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? fs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && $s(e, s, t), t;
};
async function* _s(r) {
  for (; r > 0; )
    yield r--, await new Promise((e) => setTimeout(e, 1e3));
  yield "BOOM";
}
let me = class extends u {
  constructor() {
    super(...arguments), this.timer = _s(10);
  }
  render() {
    return h`Timer: <span>${as(this.timer)}</span>.`;
  }
};
jt([
  U()
], me.prototype, "timer", 2);
me = jt([
  d("async-replace")
], me);
var vs = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, Z = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ms(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && vs(e, s, t), t;
};
let R = class extends u {
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
var bs = Object.defineProperty, gs = Object.getOwnPropertyDescriptor, ce = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? gs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && bs(e, s, t), t;
};
let H = class extends u {
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
  Ot("input")
], H.prototype, "_input", 2);
H = ce([
  d("mediator-element")
], H);
var ys = Object.defineProperty, As = Object.getOwnPropertyDescriptor, Ps = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? As(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && ys(e, s, t), t;
};
class Cs {
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
let Ge = class extends u {
  constructor() {
    super(), new Cs(this);
  }
  render() {
    return h`<p>안녕하세요, 리액티브 컨트롤러 예제입니다!</p>`;
  }
};
Ge = Ps([
  d("reactive-controller")
], Ge);
var ws = Object.defineProperty, Os = Object.getOwnPropertyDescriptor, je = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Os(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && ws(e, s, t), t;
};
let te = class extends u {
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
je([
  b()
], te.prototype, "hostName", 2);
je([
  b()
], te.prototype, "shadowName", 2);
te = je([
  d("create-render-root")
], te);
const Rt = I`
  :host {
    display: block;
    color: blue;
  }
  p {
    font-size: 20px;
  }
`;
var Es = Object.defineProperty, xs = Object.getOwnPropertyDescriptor, Ss = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? xs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Es(e, s, t), t;
};
let be = class extends u {
  render() {
    return h`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `;
  }
};
be.styles = [
  Rt,
  I`
      p {
        color: red;
      }
    `
];
be = Ss([
  d("child-component")
], be);
var Ds = Object.defineProperty, Ts = Object.getOwnPropertyDescriptor, js = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ts(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Ds(e, s, t), t;
};
let ge = class extends u {
  render() {
    return h`
      <p>부모 컴포넌트의 스타일</p>
    `;
  }
};
ge.styles = Rt;
ge = js([
  d("parent-component")
], ge);
class Rs extends Te {
  render(e) {
    return Promise.resolve(e).then((s) => {
      this.setValue(s);
    }), "Waiting for promise to resolve";
  }
}
const Us = E(Rs);
var Ns = Object.defineProperty, Ms = Object.getOwnPropertyDescriptor, Ut = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ms(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Ns(e, s, t), t;
};
function Hs() {
  return new Promise((r) => {
    setTimeout(() => {
      r("사용자 이름: 뤼튼, 취미: 코딩");
    }, 2e3);
  });
}
let ye = class extends u {
  constructor() {
    super(), this.userProfile = Hs();
  }
  render() {
    return h`
      <p>${Us(this.userProfile)}</p>
    `;
  }
};
Ut([
  b({ attribute: !1 })
], ye.prototype, "userProfile", 2);
ye = Ut([
  d("async-directive")
], ye);
const Is = {
  primary: "#6200EE",
  primaryVariant: "#3700B3",
  onPrimary: "#FFFFFF",
  default: "#FFFFFF",
  defaultVariant: "#EEEEEE",
  onDefault: "#000000"
}, Bs = {
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
}, Ls = {
  small: "8px",
  medium: "16px",
  large: "24px"
}, Vs = {
  small: "4px",
  medium: "8px",
  large: "16px"
}, N = {
  colors: Is,
  typography: Bs,
  spacing: Ls,
  borderRadius: Vs
};
var zs = Object.defineProperty, Ws = Object.getOwnPropertyDescriptor, Ys = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ws(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && zs(e, s, t), t;
};
let Ae = class extends u {
  render() {
    return h`
      <button>Click me</button>
    `;
  }
};
Ae.styles = I`
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
Ae = Ys([
  d("design-system")
], Ae);
var Fs = Object.defineProperty, qs = Object.getOwnPropertyDescriptor, Js = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? qs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Fs(e, s, t), t;
};
let ke = class extends u {
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
ke = Js([
  d("custom-event")
], ke);
var Ks = Object.defineProperty, Zs = Object.getOwnPropertyDescriptor, Nt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Zs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Ks(e, s, t), t;
};
let Pe = class extends u {
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
Nt([
  b()
], Pe.prototype, "clicked", 2);
Pe = Nt([
  d("event-delegation")
], Pe);
var Xs = Object.defineProperty, Qs = Object.getOwnPropertyDescriptor, Re = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Qs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Xs(e, s, t), t;
};
let se = class extends u {
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
Re([
  b()
], se.prototype, "label", 2);
Re([
  b()
], se.prototype, "message", 2);
se = Re([
  d("event-dispatcher-communication")
], se);
var Gs = Object.defineProperty, ks = Object.getOwnPropertyDescriptor, Mt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ks(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Gs(e, s, t), t;
};
let Ce = class extends u {
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
Mt([
  b({ type: Boolean })
], Ce.prototype, "canCheck", 2);
Ce = Mt([
  d("my-listener")
], Ce);
var er = Object.defineProperty, tr = Object.getOwnPropertyDescriptor, Ht = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? tr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && er(e, s, t), t;
};
let we = class extends u {
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
Ht([
  kt({ passive: !0 })
], we.prototype, "_passiveclick", 1);
we = Ht([
  d("event-passive")
], we);
var sr = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, nr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? rr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && sr(e, s, t), t;
};
let et = class extends u {
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
et = nr([
  d("event-retargeting")
], et);
var or = Object.defineProperty, ir = Object.getOwnPropertyDescriptor, lr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ir(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && or(e, s, t), t;
};
class cr extends Event {
  constructor() {
    super("my-standard-event", {
      bubbles: !0,
      // 버블링을 허용
      composed: !0
      // 쉐도우 DOM 경계를 넘어서 전파
    });
  }
}
let tt = class extends u {
  fireEvent() {
    const r = new cr();
    this.dispatchEvent(r);
  }
  render() {
    return h`
      <button @click="${this.fireEvent}">이벤트 발생시키기</button>
    `;
  }
};
tt = lr([
  d("standard-event")
], tt);
var ar = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, Ue = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? hr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && ar(e, s, t), t;
};
let re = class extends u {
  constructor() {
    super(...arguments), this.t1 = h`<h1>hello</h1>`, this.t2 = h`<h2>world</h2>`;
  }
  render() {
    return h`${this.t1}${this.t2}`;
  }
};
Ue([
  U()
], re.prototype, "t1", 2);
Ue([
  U()
], re.prototype, "t2", 2);
re = Ue([
  d("html-expression")
], re);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It = "important", ur = " !" + It, pr = E(class extends K {
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
        const o = typeof t == "string" && t.endsWith(ur);
        n.includes("-") || o ? s.setProperty(n, o ? t.slice(0, -11) : t, o ? It : "") : s[n] = t;
      }
    }
    return g;
  }
}), dr = "blue", $r = "white", fr = "10px 20px", _r = "none", vr = "5px", mr = "pointer", br = {
  backgroundColor: dr,
  color: $r,
  padding: fr,
  border: _r,
  borderRadius: vr,
  cursor: mr
};
var gr = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, Ar = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? yr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && gr(e, s, t), t;
};
let st = class extends u {
  render() {
    return h`
      <button style=${pr(br)}>버튼이야</button>
    `;
  }
};
st = Ar([
  d("json-in-css")
], st);
var Pr = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, Bt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Cr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Pr(e, s, t), t;
};
let ne = class extends u {
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
Bt([
  b({
    type: Number,
    hasChanged(r, e) {
      return console.log(`hasChanged: ${e} -> ${r}`), e !== r;
    }
  })
], ne.prototype, "count", 2);
ne = Bt([
  d("life-cycle-first")
], ne);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wr = E(class extends K {
  constructor(r) {
    if (super(r), r.type !== y.PROPERTY && r.type !== y.ATTRIBUTE && r.type !== y.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Et(r))
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
var Or = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, Ne = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Er(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Or(e, s, t), t;
};
let oe = class extends u {
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
      <input .value=${wr(this.data.value)} placeholder="type here, click commit">

      Without live: will not update if out of sync with last rendered value<br>
      <input .value=${this.data.value} placeholder="type here, click commit">
    `;
  }
  commitValue() {
    this.data = { ...this.data, value: this.input.value };
  }
};
Ne([
  U()
], oe.prototype, "data", 2);
Ne([
  Ot("input#value")
], oe.prototype, "input", 2);
oe = Ne([
  d("live-sample")
], oe);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xr = () => new Sr();
let Sr = class {
};
const fe = /* @__PURE__ */ new WeakMap(), rt = E(class extends Te {
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
      let s = fe.get(e);
      s === void 0 && (s = /* @__PURE__ */ new WeakMap(), fe.set(e, s)), s.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), s.set(this.Y, r), r !== void 0 && this.Y.call(this.ht, r);
    } else
      this.Y.value = r;
  }
  get lt() {
    var r, e;
    return typeof this.Y == "function" ? (r = fe.get(this.ht ?? globalThis)) == null ? void 0 : r.get(this.Y) : (e = this.Y) == null ? void 0 : e.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var Dr = Object.defineProperty, Tr = Object.getOwnPropertyDescriptor, jr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Tr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Dr(e, s, t), t;
};
let nt = class extends u {
  constructor() {
    super(...arguments), this.buttonRef = xr();
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
      <button ${rt(this.buttonRef)}>클릭하세요</button>
      <div>
        <input type="text" ${rt(this.setInputRef)} />
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
nt = jr([
  d("with-ref")
], nt);
var Rr = Object.defineProperty, Ur = Object.getOwnPropertyDescriptor, Nr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ur(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Rr(e, s, t), t;
};
let ot = class extends u {
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
ot = Nr([
  d("without-ref")
], ot);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = (r, e, s) => {
  const n = /* @__PURE__ */ new Map();
  for (let t = e; t <= s; t++)
    n.set(r[t], t);
  return n;
}, Mr = E(class extends K {
  constructor(r) {
    if (super(r), r.type !== y.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(r, e, s) {
    let n;
    s === void 0 ? s = e : e !== void 0 && (n = e);
    const t = [], o = [];
    let i = 0;
    for (const c of r)
      t[i] = n ? n(c, i) : i, o[i] = s(c, i), i++;
    return { values: o, keys: t };
  }
  render(r, e, s) {
    return this.dt(r, e, s).values;
  }
  update(r, [e, s, n]) {
    const t = _e(r), { values: o, keys: i } = this.dt(e, s, n);
    if (!Array.isArray(t))
      return this.ut = i, o;
    const c = this.ut ?? (this.ut = []), l = [];
    let p, v, a = 0, f = t.length - 1, $ = 0, m = o.length - 1;
    for (; a <= f && $ <= m; )
      if (t[a] === null)
        a++;
      else if (t[f] === null)
        f--;
      else if (c[a] === i[$])
        l[$] = C(t[a], o[$]), a++, $++;
      else if (c[f] === i[m])
        l[m] = C(t[f], o[m]), f--, m--;
      else if (c[a] === i[m])
        l[m] = C(t[a], o[m]), w(r, l[m + 1], t[a]), a++, m--;
      else if (c[f] === i[$])
        l[$] = C(t[f], o[$]), w(r, t[a], t[f]), f--, $++;
      else if (p === void 0 && (p = it(i, $, m), v = it(c, a, f)), p.has(c[a]))
        if (p.has(c[f])) {
          const A = v.get(i[$]), ae = A !== void 0 ? t[A] : null;
          if (ae === null) {
            const Ie = w(r, t[a]);
            C(Ie, o[$]), l[$] = Ie;
          } else
            l[$] = C(ae, o[$]), w(r, t[a], ae), t[A] = null;
          $++;
        } else
          $e(t[f]), f--;
      else
        $e(t[a]), a++;
    for (; $ <= m; ) {
      const A = w(r, l[m + 1]);
      C(A, o[$]), l[$++] = A;
    }
    for (; a <= f; ) {
      const A = t[a++];
      A !== null && $e(A);
    }
    return this.ut = i, k(r, l), g;
  }
});
var Hr = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, Me = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ir(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Hr(e, s, t), t;
};
let ie = class extends u {
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
        ${Mr(this.users, (r) => r.id, (r) => h`
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
Me([
  b({ type: Array })
], ie.prototype, "users", 2);
Me([
  b({ type: Boolean })
], ie.prototype, "sorted", 2);
ie = Me([
  d("repeat-directive")
], ie);
var Br = Object.defineProperty, Lr = Object.getOwnPropertyDescriptor, Vr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Lr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Br(e, s, t), t;
};
let lt = class extends u {
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
lt = Vr([
  d("named-slot-element")
], lt);
var zr = Object.defineProperty, Wr = Object.getOwnPropertyDescriptor, Yr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Wr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && zr(e, s, t), t;
};
let ct = class extends u {
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
ct = Yr([
  d("same-name-slot")
], ct);
var Fr = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, Jr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? qr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Fr(e, s, t), t;
};
let at = class extends u {
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
at = Jr([
  d("slot-content")
], at);
var Kr = Object.defineProperty, Zr = Object.getOwnPropertyDescriptor, Xr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Zr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Kr(e, s, t), t;
};
let ht = class extends u {
  handleSlotchange(r) {
    const s = r.target.assignedNodes({ flatten: !0 }).map((n) => n.textContent ? n.textContent : "").join("");
    console.log("slot change event fired:", { allText: s });
  }
  render() {
    return h`<slot @slotchange=${this.handleSlotchange}></slot>`;
  }
};
ht = Xr([
  d("slot-change")
], ht);
var Qr = Object.defineProperty, Gr = Object.getOwnPropertyDescriptor, kr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Gr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Qr(e, s, t), t;
};
let ut = class extends u {
  // render 메소드를 오버라이드하여 컴포넌트의 HTML 구조를 정의합니다.
  render() {
    return h`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `;
  }
};
ut = kr([
  d("slot-init")
], ut);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = (r) => ts(r) ? r._$litType$.h : r.strings, en = E(class extends K {
  constructor(r) {
    super(r), this.et = /* @__PURE__ */ new WeakMap();
  }
  render(r) {
    return [r];
  }
  update(r, [e]) {
    const s = Xe(this.it) ? pt(this.it) : null, n = Xe(e) ? pt(e) : null;
    if (s !== null && (n === null || s !== n)) {
      const t = _e(r).pop();
      let o = this.et.get(s);
      if (o === void 0) {
        const i = document.createDocumentFragment();
        o = wt(_, i), o.setConnected(!1), this.et.set(s, o);
      }
      k(o, [t]), w(o, void 0, t);
    }
    if (n !== null) {
      if (s === null || s !== n) {
        const t = this.et.get(n);
        if (t !== void 0) {
          const o = _e(t).pop();
          xt(r), w(r, void 0, o), k(r, [o]);
        }
      }
      this.it = e;
    } else
      this.it = void 0;
    return this.render(e);
  }
});
var tn = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, He = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? sn(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && tn(e, s, t), t;
};
const rn = (r) => h`<div>Detail View: ${r.detail}</div>`, nn = (r) => h`<div>Summary View: ${r.summary}</div>`;
let le = class extends u {
  constructor() {
    super(...arguments), this.detail = !0, this.data = { detail: "여기에 상세 내용", summary: "여기에 요약 내용" };
  }
  render() {
    return h`
      <button @click="${() => this.detail = !this.detail}">Toggle Details</button>
      ${en(
      this.detail ? rn(this.data) : nn(this.data)
    )}
    `;
  }
};
He([
  U()
], le.prototype, "detail", 2);
He([
  b({ type: Object })
], le.prototype, "data", 2);
le = He([
  d("template-cache")
], le);
