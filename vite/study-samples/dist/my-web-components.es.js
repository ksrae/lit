/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis, Q = I.ShadowRoot && (I.ShadyCSS === void 0 || I.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, k = Symbol(), et = /* @__PURE__ */ new WeakMap();
let gt = class {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== k)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Q && t === void 0) {
      const o = e !== void 0 && e.length === 1;
      o && (t = et.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && et.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const b = (r) => new gt(typeof r == "string" ? r : r + "", void 0, k), R = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((o, s, i) => o + ((n) => {
    if (n._$cssResult$ === !0)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[i + 1], r[0]);
  return new gt(e, r, k);
}, wt = (r, t) => {
  if (Q)
    r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const o = document.createElement("style"), s = I.litNonce;
      s !== void 0 && o.setAttribute("nonce", s), o.textContent = e.cssText, r.appendChild(o);
    }
}, st = Q ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules)
    e += o.cssText;
  return b(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ot, defineProperty: xt, getOwnPropertyDescriptor: Tt, getOwnPropertyNames: Ut, getOwnPropertySymbols: Nt, getPrototypeOf: Dt } = Object, m = globalThis, ot = m.trustedTypes, jt = ot ? ot.emptyScript : "", q = m.reactiveElementPolyfillSupport, T = (r, t) => r, z = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? jt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, tt = (r, t) => !Ot(r, t), rt = { attribute: !0, type: String, converter: z, reflect: !1, hasChanged: tt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class w extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = rt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), s = this.getPropertyDescriptor(t, o, e);
      s !== void 0 && xt(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: s, set: i } = Tt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(n) {
      const a = s == null ? void 0 : s.call(this);
      i.call(this, n), this.requestUpdate(t, a, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? rt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(T("elementProperties")))
      return;
    const t = Dt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(T("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(T("properties"))) {
      const e = this.properties, o = [...Ut(e), ...Nt(e)];
      for (const s of o)
        this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [o, s] of e)
          this.elementProperties.set(o, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const s = this._$Eu(e, o);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const s of o)
        e.unshift(st(s));
    } else
      t !== void 0 && e.push(st(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys())
      this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return wt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var i;
    const o = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, o);
    if (s !== void 0 && o.reflect === !0) {
      const n = (((i = o.converter) == null ? void 0 : i.toAttribute) !== void 0 ? o.converter : z).toAttribute(e, o.type);
      this._$Em = t, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var i;
    const o = this.constructor, s = o._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const n = o.getPropertyOptions(s), a = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((i = n.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? n.converter : z;
      this._$Em = s, this[s] = a.fromAttribute(e, n.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? tt)(this[t], e))
        return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, n] of this._$Ep)
          this[i] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0)
        for (const [i, n] of s)
          n.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], n);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (o = this._$EO) == null || o.forEach((s) => {
        var i;
        return (i = s.hostUpdate) == null ? void 0 : i.call(s);
      }), this.update(e)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var s;
      return (s = o.hostUpdated) == null ? void 0 : s.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, w[T("elementProperties")] = /* @__PURE__ */ new Map(), w[T("finalized")] = /* @__PURE__ */ new Map(), q == null || q({ ReactiveElement: w }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis, F = U.trustedTypes, nt = F ? F.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, mt = "$lit$", g = `lit$${(Math.random() + "").slice(9)}$`, yt = "?" + g, Rt = `<${yt}>`, E = document, N = () => E.createComment(""), D = (r) => r === null || typeof r != "object" && typeof r != "function", bt = Array.isArray, Ht = (r) => bt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", J = `[ 	
\f\r]`, x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, it = /-->/g, lt = />/g, y = RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), at = /'/g, ht = /"/g, At = /^(?:script|style|textarea|title)$/i, Mt = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), $ = Mt(1), S = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), ct = /* @__PURE__ */ new WeakMap(), A = E.createTreeWalker(E, 129);
function Et(r, t) {
  if (!Array.isArray(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return nt !== void 0 ? nt.createHTML(t) : t;
}
const Lt = (r, t) => {
  const e = r.length - 1, o = [];
  let s, i = t === 2 ? "<svg>" : "", n = x;
  for (let a = 0; a < e; a++) {
    const l = r[a];
    let c, d, h = -1, f = 0;
    for (; f < l.length && (n.lastIndex = f, d = n.exec(l), d !== null); )
      f = n.lastIndex, n === x ? d[1] === "!--" ? n = it : d[1] !== void 0 ? n = lt : d[2] !== void 0 ? (At.test(d[2]) && (s = RegExp("</" + d[2], "g")), n = y) : d[3] !== void 0 && (n = y) : n === y ? d[0] === ">" ? (n = s ?? x, h = -1) : d[1] === void 0 ? h = -2 : (h = n.lastIndex - d[2].length, c = d[1], n = d[3] === void 0 ? y : d[3] === '"' ? ht : at) : n === ht || n === at ? n = y : n === it || n === lt ? n = x : (n = y, s = void 0);
    const v = n === y && r[a + 1].startsWith("/>") ? " " : "";
    i += n === x ? l + Rt : h >= 0 ? (o.push(c), l.slice(0, h) + mt + l.slice(h) + g + v) : l + g + (h === -2 ? a : v);
  }
  return [Et(r, i + (r[e] || "<?>") + (t === 2 ? "</svg>" : "")), o];
};
class j {
  constructor({ strings: t, _$litType$: e }, o) {
    let s;
    this.parts = [];
    let i = 0, n = 0;
    const a = t.length - 1, l = this.parts, [c, d] = Lt(t, e);
    if (this.el = j.createElement(c, o), A.currentNode = this.el.content, e === 2) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = A.nextNode()) !== null && l.length < a; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes())
          for (const h of s.getAttributeNames())
            if (h.endsWith(mt)) {
              const f = d[n++], v = s.getAttribute(h).split(g), B = /([.?@])?(.*)/.exec(f);
              l.push({ type: 1, index: i, name: B[2], strings: v, ctor: B[1] === "." ? It : B[1] === "?" ? zt : B[1] === "@" ? Ft : W }), s.removeAttribute(h);
            } else
              h.startsWith(g) && (l.push({ type: 6, index: i }), s.removeAttribute(h));
        if (At.test(s.tagName)) {
          const h = s.textContent.split(g), f = h.length - 1;
          if (f > 0) {
            s.textContent = F ? F.emptyScript : "";
            for (let v = 0; v < f; v++)
              s.append(h[v], N()), A.nextNode(), l.push({ type: 2, index: ++i });
            s.append(h[f], N());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === yt)
          l.push({ type: 2, index: i });
        else {
          let h = -1;
          for (; (h = s.data.indexOf(g, h + 1)) !== -1; )
            l.push({ type: 7, index: i }), h += g.length - 1;
        }
      i++;
    }
  }
  static createElement(t, e) {
    const o = E.createElement("template");
    return o.innerHTML = t, o;
  }
}
function O(r, t, e = r, o) {
  var n, a;
  if (t === S)
    return t;
  let s = o !== void 0 ? (n = e._$Co) == null ? void 0 : n[o] : e._$Cl;
  const i = D(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== i && ((a = s == null ? void 0 : s._$AO) == null || a.call(s, !1), i === void 0 ? s = void 0 : (s = new i(r), s._$AT(r, e, o)), o !== void 0 ? (e._$Co ?? (e._$Co = []))[o] = s : e._$Cl = s), s !== void 0 && (t = O(r, s._$AS(r, t.values), s, o)), t;
}
class Bt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: o } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? E).importNode(e, !0);
    A.currentNode = s;
    let i = A.nextNode(), n = 0, a = 0, l = o[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let c;
        l.type === 2 ? c = new H(i, i.nextSibling, this, t) : l.type === 1 ? c = new l.ctor(i, l.name, l.strings, this, t) : l.type === 6 && (c = new Vt(i, this, t)), this._$AV.push(c), l = o[++a];
      }
      n !== (l == null ? void 0 : l.index) && (i = A.nextNode(), n++);
    }
    return A.currentNode = E, s;
  }
  p(t) {
    let e = 0;
    for (const o of this._$AV)
      o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, e), e += o.strings.length - 2) : o._$AI(t[e])), e++;
  }
}
class H {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, o, s) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = o, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = O(this, t, e), D(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== S && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ht(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== p && D(this._$AH) ? this._$AA.nextSibling.data = t : this.T(E.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var i;
    const { values: e, _$litType$: o } = t, s = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = j.createElement(Et(o.h, o.h[0]), this.options)), o);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === s)
      this._$AH.p(e);
    else {
      const n = new Bt(s, this), a = n.u(this.options);
      n.p(e), this.T(a), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = ct.get(t.strings);
    return e === void 0 && ct.set(t.strings, e = new j(t)), e;
  }
  k(t) {
    bt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let o, s = 0;
    for (const i of t)
      s === e.length ? e.push(o = new H(this.S(N()), this.S(N()), this, this.options)) : o = e[s], o._$AI(i), s++;
    s < e.length && (this._$AR(o && o._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class W {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, o, s, i) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = i, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = p;
  }
  _$AI(t, e = this, o, s) {
    const i = this.strings;
    let n = !1;
    if (i === void 0)
      t = O(this, t, e, 0), n = !D(t) || t !== this._$AH && t !== S, n && (this._$AH = t);
    else {
      const a = t;
      let l, c;
      for (t = i[0], l = 0; l < i.length - 1; l++)
        c = O(this, a[o + l], e, l), c === S && (c = this._$AH[l]), n || (n = !D(c) || c !== this._$AH[l]), c === p ? t = p : t !== p && (t += (c ?? "") + i[l + 1]), this._$AH[l] = c;
    }
    n && !s && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class It extends W {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class zt extends W {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class Ft extends W {
  constructor(t, e, o, s, i) {
    super(t, e, o, s, i), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = O(this, t, e, 0) ?? p) === S)
      return;
    const o = this._$AH, s = t === p && o !== p || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, i = t !== p && (o === p || s);
    s && this.element.removeEventListener(this.name, this, o), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Vt {
  constructor(t, e, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    O(this, t);
  }
}
const K = U.litHtmlPolyfillSupport;
K == null || K(j, H), (U.litHtmlVersions ?? (U.litHtmlVersions = [])).push("3.1.2");
const Wt = (r, t, e) => {
  const o = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = o._$litPart$;
  if (s === void 0) {
    const i = (e == null ? void 0 : e.renderBefore) ?? null;
    o._$litPart$ = s = new H(t.insertBefore(N(), i), i, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class u extends w {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Wt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return S;
  }
}
var vt;
u._$litElement$ = !0, u.finalized = !0, (vt = globalThis.litElementHydrateSupport) == null || vt.call(globalThis, { LitElement: u });
const Z = globalThis.litElementPolyfillSupport;
Z == null || Z({ LitElement: u });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _ = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt = { attribute: !0, type: String, converter: z, reflect: !1, hasChanged: tt }, Jt = (r = qt, t, e) => {
  const { kind: o, metadata: s } = e;
  let i = globalThis.litPropertyMetadata.get(s);
  if (i === void 0 && globalThis.litPropertyMetadata.set(s, i = /* @__PURE__ */ new Map()), i.set(e.name, r), o === "accessor") {
    const { name: n } = e;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, l, r);
    }, init(a) {
      return a !== void 0 && this.P(n, void 0, r), a;
    } };
  }
  if (o === "setter") {
    const { name: n } = e;
    return function(a) {
      const l = this[n];
      t.call(this, a), this.requestUpdate(n, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function M(r) {
  return (t, e) => typeof e == "object" ? Jt(r, t, e) : ((o, s, i) => {
    const n = s.hasOwnProperty(i);
    return s.constructor.createProperty(i, n ? { ...o, wrapped: !0 } : o), n ? Object.getOwnPropertyDescriptor(s, i) : void 0;
  })(r, t, e);
}
var Kt = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, L = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? Zt(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && Kt(t, e, s), s;
};
let P = class extends u {
  constructor() {
    super(...arguments), this.value = "button", this.disabled = !1, this.loading = !1, this.type = "default";
  }
  render() {
    return console.log(this.loading), $`
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
P.styles = R`
    :host {
      color: blue;
    }
    button:hover {
        color: red;
      }
  `;
L([
  M({ type: String })
], P.prototype, "value", 2);
L([
  M({ type: Boolean })
], P.prototype, "disabled", 2);
L([
  M({ type: Boolean })
], P.prototype, "loading", 2);
L([
  M({ type: String })
], P.prototype, "type", 2);
P = L([
  _("my-button")
], P);
const St = R`
  :host {
    display: block;
    color: blue;
  }
  p {
    font-size: 20px;
  }
`;
var Xt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Gt = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? Yt(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && Xt(t, e, s), s;
};
let X = class extends u {
  render() {
    return $`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `;
  }
};
X.styles = [
  St,
  R`
      p {
        color: red;
      }
    `
];
X = Gt([
  _("child-component")
], X);
var Qt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, te = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? kt(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && Qt(t, e, s), s;
};
let Y = class extends u {
  render() {
    return $`
      <p>부모 컴포넌트의 스타일</p>
    `;
  }
};
Y.styles = St;
Y = te([
  _("parent-component")
], Y);
const ee = {
  primary: "#6200EE",
  primaryVariant: "#3700B3",
  onPrimary: "#FFFFFF",
  default: "#FFFFFF",
  defaultVariant: "#EEEEEE",
  onDefault: "#000000"
}, se = {
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
}, oe = {
  small: "8px",
  medium: "16px",
  large: "24px"
}, re = {
  small: "4px",
  medium: "8px",
  large: "16px"
}, C = {
  colors: ee,
  typography: se,
  spacing: oe,
  borderRadius: re
};
var ne = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, le = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? ie(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && ne(t, e, s), s;
};
let G = class extends u {
  render() {
    return $`
      <button>Click me</button>
    `;
  }
};
G.styles = R`
    :host(.primary) {
      /* primary 테마 스타일 */
      --button-bg-color: ${b(C.colors.primary)};
      --button-color: ${b(C.colors.onPrimary)};
      --hover: ${b(C.colors.primaryVariant)};
    }
    :host(.default) {
      /* default 테마 스타일 */
      --button-bg-color: ${b(C.colors.default)};
      --button-color: ${b(C.colors.onDefault)};
      --hover: ${b(C.colors.defaultVariant)};
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
G = le([
  _("design-system")
], G);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, he = (r) => (...t) => ({ _$litDirective$: r, values: t });
let ce = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, o) {
    this._$Ct = t, this._$AM = e, this._$Ci = o;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pt = "important", pe = " !" + Pt, de = he(class extends ce {
  constructor(r) {
    var t;
    if (super(r), r.type !== ae.ATTRIBUTE || r.name !== "style" || ((t = r.strings) == null ? void 0 : t.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return Object.keys(r).reduce((t, e) => {
      const o = r[e];
      return o == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${o};`;
    }, "");
  }
  update(r, [t]) {
    const { style: e } = r.element;
    if (this.ft === void 0)
      return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const o of this.ft)
      t[o] == null && (this.ft.delete(o), o.includes("-") ? e.removeProperty(o) : e[o] = null);
    for (const o in t) {
      const s = t[o];
      if (s != null) {
        this.ft.add(o);
        const i = typeof s == "string" && s.endsWith(pe);
        o.includes("-") || i ? e.setProperty(o, i ? s.slice(0, -11) : s, i ? Pt : "") : e[o] = s;
      }
    }
    return S;
  }
}), ue = "blue", $e = "white", _e = "10px 20px", fe = "none", ve = "5px", ge = "pointer", me = {
  backgroundColor: ue,
  color: $e,
  padding: _e,
  border: fe,
  borderRadius: ve,
  cursor: ge
};
var ye = Object.defineProperty, be = Object.getOwnPropertyDescriptor, Ae = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? be(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && ye(t, e, s), s;
};
let pt = class extends u {
  render() {
    return $`
      <button style=${de(me)}>버튼이야</button>
    `;
  }
};
pt = Ae([
  _("json-in-css")
], pt);
var Ee = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, Ct = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? Se(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && Ee(t, e, s), s;
};
let V = class extends u {
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
    return $`
      <h1>Count: ${this.count}</h1>
      <button @click="${this.incrementCount}">Increment</button>
    `;
  }
  incrementCount() {
    this.count += 1;
  }
};
V.styles = R`
      :host {
        display: block;
      }
    `;
Ct([
  M({
    type: Number,
    hasChanged(r, t) {
      return console.log(`hasChanged: ${t} -> ${r}`), t !== r;
    }
  })
], V.prototype, "count", 2);
V = Ct([
  _("life-cycle-first")
], V);
var Pe = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, we = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? Ce(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && Pe(t, e, s), s;
};
let dt = class extends u {
  render() {
    return $`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <p>이곳은 공통 콘텐츠 영역입니다.</p>
        <slot name="footer"></slot>
      </div>
    `;
  }
};
dt = we([
  _("named-slot-element")
], dt);
var Oe = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, Te = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? xe(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && Oe(t, e, s), s;
};
let ut = class extends u {
  // 여러 DOM이 같은 slot name을 가지면 순서대로 출력된다.
  render() {
    return $`
      <div>
        <!-- 이름이 지정된 슬롯을 정의합니다. -->
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
};
ut = Te([
  _("same-name-slot")
], ut);
var Ue = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, De = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? Ne(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && Ue(t, e, s), s;
};
let $t = class extends u {
  render() {
    return $`
      <slot @slotchange="${this.handleSlotChange}"></slot>
    `;
  }
  handleSlotChange(r) {
    const e = r.target.assignedNodes();
    console.log("슬롯에 할당된 노드들:"), e.forEach((o) => {
      o.nodeType === Node.ELEMENT_NODE ? console.log("이것은 element입니다.", o.outerHTML) : o.nodeType === Node.TEXT_NODE && console.log("이것은 text 입니다.", o.nodeValue);
    });
  }
};
$t = De([
  _("slot-content")
], $t);
var je = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, He = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? Re(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && je(t, e, s), s;
};
let _t = class extends u {
  handleSlotchange(r) {
    const e = r.target.assignedNodes({ flatten: !0 }).map((o) => o.textContent ? o.textContent : "").join("");
    console.log("slot change event fired:", { allText: e });
  }
  render() {
    return $`<slot @slotchange=${this.handleSlotchange}></slot>`;
  }
};
_t = He([
  _("slot-change")
], _t);
var Me = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, Be = (r, t, e, o) => {
  for (var s = o > 1 ? void 0 : o ? Le(t, e) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (s = (o ? n(t, e, s) : n(s)) || s);
  return o && s && Me(t, e, s), s;
};
let ft = class extends u {
  // render 메소드를 오버라이드하여 컴포넌트의 HTML 구조를 정의합니다.
  render() {
    return $`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `;
  }
};
ft = Be([
  _("slot-init")
], ft);
