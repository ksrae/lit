/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis, me = Y.ShadowRoot && (Y.ShadyCSS === void 0 || Y.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ge = Symbol(), je = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(e, s, n) {
    if (this._$cssResult$ = !0, n !== ge)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = s;
  }
  get styleSheet() {
    let e = this.o;
    const s = this.t;
    if (me && e === void 0) {
      const n = s !== void 0 && s.length === 1;
      n && (e = je.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && je.set(s, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const w = (r) => new rt(typeof r == "string" ? r : r + "", void 0, ge), F = (r, ...e) => {
  const s = r.length === 1 ? r[0] : e.reduce((n, t, o) => n + ((i) => {
    if (i._$cssResult$ === !0)
      return i.cssText;
    if (typeof i == "number")
      return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(t) + r[o + 1], r[0]);
  return new rt(s, r, ge);
}, At = (r, e) => {
  if (me)
    r.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  else
    for (const s of e) {
      const n = document.createElement("style"), t = Y.litNonce;
      t !== void 0 && n.setAttribute("nonce", t), n.textContent = s.cssText, r.appendChild(n);
    }
}, Te = me ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let s = "";
  for (const n of e.cssRules)
    s += n.cssText;
  return w(s);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Pt, defineProperty: Ct, getOwnPropertyDescriptor: Ot, getOwnPropertyNames: wt, getOwnPropertySymbols: Et, getPrototypeOf: St } = Object, A = globalThis, Ne = A.trustedTypes, xt = Ne ? Ne.emptyScript : "", ne = A.reactiveElementPolyfillSupport, R = (r, e) => r, q = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? xt : null;
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
} }, be = (r, e) => !Pt(r, e), Ue = { attribute: !0, type: String, converter: q, reflect: !1, hasChanged: be };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), A.litPropertyMetadata ?? (A.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class N extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, s = Ue) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(e, s), !s.noAccessor) {
      const n = Symbol(), t = this.getPropertyDescriptor(e, n, s);
      t !== void 0 && Ct(this.prototype, e, t);
    }
  }
  static getPropertyDescriptor(e, s, n) {
    const { get: t, set: o } = Ot(this.prototype, e) ?? { get() {
      return this[s];
    }, set(i) {
      this[s] = i;
    } };
    return { get() {
      return t == null ? void 0 : t.call(this);
    }, set(i) {
      const a = t == null ? void 0 : t.call(this);
      o.call(this, i), this.requestUpdate(e, a, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ue;
  }
  static _$Ei() {
    if (this.hasOwnProperty(R("elementProperties")))
      return;
    const e = St(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(R("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(R("properties"))) {
      const s = this.properties, n = [...wt(s), ...Et(s)];
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
        s.unshift(Te(t));
    } else
      e !== void 0 && s.push(Te(e));
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
    return At(e, this.constructor.elementStyles), e;
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
      const i = (((o = n.converter) == null ? void 0 : o.toAttribute) !== void 0 ? n.converter : q).toAttribute(s, n.type);
      this._$Em = e, i == null ? this.removeAttribute(t) : this.setAttribute(t, i), this._$Em = null;
    }
  }
  _$AK(e, s) {
    var o;
    const n = this.constructor, t = n._$Eh.get(e);
    if (t !== void 0 && this._$Em !== t) {
      const i = n.getPropertyOptions(t), a = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : q;
      this._$Em = t, this[t] = a.fromAttribute(s, i.type), this._$Em = null;
    }
  }
  requestUpdate(e, s, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? be)(this[e], s))
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
N.elementStyles = [], N.shadowRootOptions = { mode: "open" }, N[R("elementProperties")] = /* @__PURE__ */ new Map(), N[R("finalized")] = /* @__PURE__ */ new Map(), ne == null || ne({ ReactiveElement: N }), (A.reactiveElementVersions ?? (A.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis, J = H.trustedTypes, Me = J ? J.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ye = "$lit$", y = `lit$${(Math.random() + "").slice(9)}$`, Ae = "?" + y, Dt = `<${Ae}>`, x = document, L = () => x.createComment(""), B = (r) => r === null || typeof r != "object" && typeof r != "function", nt = Array.isArray, ot = (r) => nt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", oe = `[ 	
\f\r]`, M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Re = /-->/g, He = />/g, C = RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ie = /'/g, Le = /"/g, it = /^(?:script|style|textarea|title)$/i, jt = (r) => (e, ...s) => ({ _$litType$: r, strings: e, values: s }), p = jt(1), P = Symbol.for("lit-noChange"), v = Symbol.for("lit-nothing"), Be = /* @__PURE__ */ new WeakMap(), S = x.createTreeWalker(x, 129);
function lt(r, e) {
  if (!Array.isArray(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Me !== void 0 ? Me.createHTML(e) : e;
}
const ct = (r, e) => {
  const s = r.length - 1, n = [];
  let t, o = e === 2 ? "<svg>" : "", i = M;
  for (let a = 0; a < s; a++) {
    const l = r[a];
    let h, _, c = -1, $ = 0;
    for (; $ < l.length && (i.lastIndex = $, _ = i.exec(l), _ !== null); )
      $ = i.lastIndex, i === M ? _[1] === "!--" ? i = Re : _[1] !== void 0 ? i = He : _[2] !== void 0 ? (it.test(_[2]) && (t = RegExp("</" + _[2], "g")), i = C) : _[3] !== void 0 && (i = C) : i === C ? _[0] === ">" ? (i = t ?? M, c = -1) : _[1] === void 0 ? c = -2 : (c = i.lastIndex - _[2].length, h = _[1], i = _[3] === void 0 ? C : _[3] === '"' ? Le : Ie) : i === Le || i === Ie ? i = C : i === Re || i === He ? i = M : (i = C, t = void 0);
    const d = i === C && r[a + 1].startsWith("/>") ? " " : "";
    o += i === M ? l + Dt : c >= 0 ? (n.push(h), l.slice(0, c) + ye + l.slice(c) + y + d) : l + y + (c === -2 ? a : d);
  }
  return [lt(r, o + (r[s] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
class z {
  constructor({ strings: e, _$litType$: s }, n) {
    let t;
    this.parts = [];
    let o = 0, i = 0;
    const a = e.length - 1, l = this.parts, [h, _] = ct(e, s);
    if (this.el = z.createElement(h, n), S.currentNode = this.el.content, s === 2) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (t = S.nextNode()) !== null && l.length < a; ) {
      if (t.nodeType === 1) {
        if (t.hasAttributes())
          for (const c of t.getAttributeNames())
            if (c.endsWith(ye)) {
              const $ = _[i++], d = t.getAttribute(c).split(y), m = /([.?@])?(.*)/.exec($);
              l.push({ type: 1, index: o, name: m[2], strings: d, ctor: m[1] === "." ? ht : m[1] === "?" ? pt : m[1] === "@" ? dt : V }), t.removeAttribute(c);
            } else
              c.startsWith(y) && (l.push({ type: 6, index: o }), t.removeAttribute(c));
        if (it.test(t.tagName)) {
          const c = t.textContent.split(y), $ = c.length - 1;
          if ($ > 0) {
            t.textContent = J ? J.emptyScript : "";
            for (let d = 0; d < $; d++)
              t.append(c[d], L()), S.nextNode(), l.push({ type: 2, index: ++o });
            t.append(c[$], L());
          }
        }
      } else if (t.nodeType === 8)
        if (t.data === Ae)
          l.push({ type: 2, index: o });
        else {
          let c = -1;
          for (; (c = t.data.indexOf(y, c + 1)) !== -1; )
            l.push({ type: 7, index: o }), c += y.length - 1;
        }
      o++;
    }
  }
  static createElement(e, s) {
    const n = x.createElement("template");
    return n.innerHTML = e, n;
  }
}
function D(r, e, s = r, n) {
  var i, a;
  if (e === P)
    return e;
  let t = n !== void 0 ? (i = s._$Co) == null ? void 0 : i[n] : s._$Cl;
  const o = B(e) ? void 0 : e._$litDirective$;
  return (t == null ? void 0 : t.constructor) !== o && ((a = t == null ? void 0 : t._$AO) == null || a.call(t, !1), o === void 0 ? t = void 0 : (t = new o(r), t._$AT(r, s, n)), n !== void 0 ? (s._$Co ?? (s._$Co = []))[n] = t : s._$Cl = t), t !== void 0 && (e = D(r, t._$AS(r, e.values), t, n)), e;
}
class at {
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
    const { el: { content: s }, parts: n } = this._$AD, t = ((e == null ? void 0 : e.creationScope) ?? x).importNode(s, !0);
    S.currentNode = t;
    let o = S.nextNode(), i = 0, a = 0, l = n[0];
    for (; l !== void 0; ) {
      if (i === l.index) {
        let h;
        l.type === 2 ? h = new U(o, o.nextSibling, this, e) : l.type === 1 ? h = new l.ctor(o, l.name, l.strings, this, e) : l.type === 6 && (h = new ut(o, this, e)), this._$AV.push(h), l = n[++a];
      }
      i !== (l == null ? void 0 : l.index) && (o = S.nextNode(), i++);
    }
    return S.currentNode = x, t;
  }
  p(e) {
    let s = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, s), s += n.strings.length - 2) : n._$AI(e[s])), s++;
  }
}
class U {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, s, n, t) {
    this.type = 2, this._$AH = v, this._$AN = void 0, this._$AA = e, this._$AB = s, this._$AM = n, this.options = t, this._$Cv = (t == null ? void 0 : t.isConnected) ?? !0;
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
    e = D(this, e, s), B(e) ? e === v || e == null || e === "" ? (this._$AH !== v && this._$AR(), this._$AH = v) : e !== this._$AH && e !== P && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ot(e) ? this.k(e) : this._(e);
  }
  S(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  _(e) {
    this._$AH !== v && B(this._$AH) ? this._$AA.nextSibling.data = e : this.T(x.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var o;
    const { values: s, _$litType$: n } = e, t = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = z.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === t)
      this._$AH.p(s);
    else {
      const i = new at(t, this), a = i.u(this.options);
      i.p(s), this.T(a), this._$AH = i;
    }
  }
  _$AC(e) {
    let s = Be.get(e.strings);
    return s === void 0 && Be.set(e.strings, s = new z(e)), s;
  }
  k(e) {
    nt(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let n, t = 0;
    for (const o of e)
      t === s.length ? s.push(n = new U(this.S(L()), this.S(L()), this, this.options)) : n = s[t], n._$AI(o), t++;
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
class V {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, s, n, t, o) {
    this.type = 1, this._$AH = v, this._$AN = void 0, this.element = e, this.name = s, this._$AM = t, this.options = o, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = v;
  }
  _$AI(e, s = this, n, t) {
    const o = this.strings;
    let i = !1;
    if (o === void 0)
      e = D(this, e, s, 0), i = !B(e) || e !== this._$AH && e !== P, i && (this._$AH = e);
    else {
      const a = e;
      let l, h;
      for (e = o[0], l = 0; l < o.length - 1; l++)
        h = D(this, a[n + l], s, l), h === P && (h = this._$AH[l]), i || (i = !B(h) || h !== this._$AH[l]), h === v ? e = v : e !== v && (e += (h ?? "") + o[l + 1]), this._$AH[l] = h;
    }
    i && !t && this.j(e);
  }
  j(e) {
    e === v ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ht extends V {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === v ? void 0 : e;
  }
}
class pt extends V {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== v);
  }
}
class dt extends V {
  constructor(e, s, n, t, o) {
    super(e, s, n, t, o), this.type = 5;
  }
  _$AI(e, s = this) {
    if ((e = D(this, e, s, 0) ?? v) === P)
      return;
    const n = this._$AH, t = e === v && n !== v || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, o = e !== v && (n === v || t);
    t && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var s;
    typeof this._$AH == "function" ? this._$AH.call(((s = this.options) == null ? void 0 : s.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ut {
  constructor(e, s, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    D(this, e);
  }
}
const Tt = { P: ye, A: y, C: Ae, M: 1, L: ct, R: at, D: ot, V: D, I: U, H: V, N: pt, U: dt, B: ht, F: ut }, ie = H.litHtmlPolyfillSupport;
ie == null || ie(z, U), (H.litHtmlVersions ?? (H.litHtmlVersions = [])).push("3.1.2");
const $t = (r, e, s) => {
  const n = (s == null ? void 0 : s.renderBefore) ?? e;
  let t = n._$litPart$;
  if (t === void 0) {
    const o = (s == null ? void 0 : s.renderBefore) ?? null;
    n._$litPart$ = t = new U(e.insertBefore(L(), o), o, void 0, s ?? {});
  }
  return t._$AI(r), t;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let u = class extends N {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = $t(s, this.renderRoot, this.renderOptions);
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
    return P;
  }
};
var st;
u._$litElement$ = !0, u.finalized = !0, (st = globalThis.litElementHydrateSupport) == null || st.call(globalThis, { LitElement: u });
const le = globalThis.litElementPolyfillSupport;
le == null || le({ LitElement: u });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f = (r) => (e, s) => {
  s !== void 0 ? s.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = { attribute: !0, type: String, converter: q, reflect: !1, hasChanged: be }, Ut = (r = Nt, e, s) => {
  const { kind: n, metadata: t } = s;
  let o = globalThis.litPropertyMetadata.get(t);
  if (o === void 0 && globalThis.litPropertyMetadata.set(t, o = /* @__PURE__ */ new Map()), o.set(s.name, r), n === "accessor") {
    const { name: i } = s;
    return { set(a) {
      const l = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(i, l, r);
    }, init(a) {
      return a !== void 0 && this.P(i, void 0, r), a;
    } };
  }
  if (n === "setter") {
    const { name: i } = s;
    return function(a) {
      const l = this[i];
      e.call(this, a), this.requestUpdate(i, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function g(r) {
  return (e, s) => typeof s == "object" ? Ut(r, e, s) : ((n, t, o) => {
    const i = t.hasOwnProperty(o);
    return t.constructor.createProperty(o, i ? { ...n, wrapped: !0 } : n), i ? Object.getOwnPropertyDescriptor(t, o) : void 0;
  })(r, e, s);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Pe(r) {
  return g({ ...r, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Mt(r) {
  return (e, s) => {
    const n = typeof e == "function" ? e : e[s];
    Object.assign(n, r);
  };
}
var Rt = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, W = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ht(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Rt(e, s, t), t;
};
let j = class extends u {
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
    const r = new CustomEvent("onclicked", {
      detail: this.value,
      bubbles: !0,
      composed: !0
    });
    console.log("click event"), this.dispatchEvent(r);
  }
};
j.styles = F`
    :host {
      color: blue;
    }
    button:hover {
        color: red;
      }
  `;
W([
  g({ type: String })
], j.prototype, "value", 2);
W([
  g({ type: Boolean })
], j.prototype, "disabled", 2);
W([
  g({ type: Boolean })
], j.prototype, "loading", 2);
W([
  g({ type: String })
], j.prototype, "type", 2);
j = W([
  f("my-button")
], j);
var It = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, Ce = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Lt(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && It(e, s, t), t;
};
let K = class extends u {
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
    return p`
      <p><button>Click Me!</button></p>
      <p>Component target: ${this.hostName}</p>
      <p>Shadow target: ${this.shadowName}</p>
      <p @click=${this._pclick}>Click me!</p>
    `;
  }
};
Ce([
  g()
], K.prototype, "hostName", 2);
Ce([
  g()
], K.prototype, "shadowName", 2);
K = Ce([
  f("create-render-root")
], K);
const ft = F`
  :host {
    display: block;
    color: blue;
  }
  p {
    font-size: 20px;
  }
`;
var Bt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, Ft = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? zt(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Bt(e, s, t), t;
};
let he = class extends u {
  render() {
    return p`
      <p>자식 컴포넌트의 스타일 (부모 스타일 상속)</p>
    `;
  }
};
he.styles = [
  ft,
  F`
      p {
        color: red;
      }
    `
];
he = Ft([
  f("child-component")
], he);
var Vt = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, Yt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Wt(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Vt(e, s, t), t;
};
let pe = class extends u {
  render() {
    return p`
      <p>부모 컴포넌트의 스타일</p>
    `;
  }
};
pe.styles = ft;
pe = Yt([
  f("parent-component")
], pe);
const qt = {
  primary: "#6200EE",
  primaryVariant: "#3700B3",
  onPrimary: "#FFFFFF",
  default: "#FFFFFF",
  defaultVariant: "#EEEEEE",
  onDefault: "#000000"
}, Jt = {
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
}, Kt = {
  small: "8px",
  medium: "16px",
  large: "24px"
}, Qt = {
  small: "4px",
  medium: "8px",
  large: "16px"
}, T = {
  colors: qt,
  typography: Jt,
  spacing: Kt,
  borderRadius: Qt
};
var Zt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, Gt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Xt(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Zt(e, s, t), t;
};
let de = class extends u {
  render() {
    return p`
      <button>Click me</button>
    `;
  }
};
de.styles = F`
    :host(.primary) {
      /* primary 테마 스타일 */
      --button-bg-color: ${w(T.colors.primary)};
      --button-color: ${w(T.colors.onPrimary)};
      --hover: ${w(T.colors.primaryVariant)};
    }
    :host(.default) {
      /* default 테마 스타일 */
      --button-bg-color: ${w(T.colors.default)};
      --button-color: ${w(T.colors.onDefault)};
      --hover: ${w(T.colors.defaultVariant)};
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
de = Gt([
  f("design-system")
], de);
var kt = Object.defineProperty, es = Object.getOwnPropertyDescriptor, ts = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? es(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && kt(e, s, t), t;
};
let ze = class extends u {
  _onClicked() {
    const r = new CustomEvent("my-custom-event", {
      detail: { more: { msg: "fireddddd" } },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(r);
  }
  render() {
    return p`
      <button @click="${this._onClicked}">이벤트 발생시키기</button>
    `;
  }
};
ze = ts([
  f("custom-event")
], ze);
var ss = Object.defineProperty, rs = Object.getOwnPropertyDescriptor, _t = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? rs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && ss(e, s, t), t;
};
let ue = class extends u {
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
  _clickHandler(r) {
    this.clicked = r.target === r.currentTarget ? "container" : r.target.textContent;
  }
};
_t([
  g()
], ue.prototype, "clicked", 2);
ue = _t([
  f("event-delegation")
], ue);
var ns = Object.defineProperty, os = Object.getOwnPropertyDescriptor, Oe = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? os(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && ns(e, s, t), t;
};
let Q = class extends u {
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
  _tryChange(r) {
    const e = { message: this.message }, s = new CustomEvent("checked", { detail: e, bubbles: !0, composed: !0, cancelable: !0 });
    this.dispatchEvent(s), s.defaultPrevented && r.preventDefault(), this.message = e.message;
  }
  // 프로퍼티 업데이트 후 호출되는 메소드, 메시지를 초기화합니다.
  updated() {
    clearTimeout(this._resetMessage), this._resetMessage = setTimeout(() => this.message = this.defaultMessage, 1e3);
  }
};
Oe([
  g()
], Q.prototype, "label", 2);
Oe([
  g()
], Q.prototype, "message", 2);
Q = Oe([
  f("event-dispatcher-communication")
], Q);
var is = Object.defineProperty, ls = Object.getOwnPropertyDescriptor, vt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ls(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && is(e, s, t), t;
};
let $e = class extends u {
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
  _checkedHandler(r) {
    this.canCheck || (r.preventDefault(), r.detail.message = "✅ Prevented!!");
  }
  // 체크 가능 상태를 토글하는 버튼의 클릭 핸들러
  _clickHandler() {
    this.canCheck = !this.canCheck;
  }
};
vt([
  g({ type: Boolean })
], $e.prototype, "canCheck", 2);
$e = vt([
  f("my-listener")
], $e);
var cs = Object.defineProperty, as = Object.getOwnPropertyDescriptor, mt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? as(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && cs(e, s, t), t;
};
let fe = class extends u {
  _passiveclick(r) {
    console.log(r.type);
  }
  _click(r) {
    console.log(r.type);
  }
  render() {
    return p`
      <div @click=${this._passiveclick}>Passive event</div>
      <div @click=${this._click}>Normal event</div>
    `;
  }
};
mt([
  Mt({ passive: !0 })
], fe.prototype, "_passiveclick", 1);
fe = mt([
  f("event-passive")
], fe);
var hs = Object.defineProperty, ps = Object.getOwnPropertyDescriptor, ds = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ps(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && hs(e, s, t), t;
};
let Fe = class extends u {
  // 마치 click event가 있는 것처럼 속이기.
  render() {
    return p`
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
Fe = ds([
  f("event-retargeting")
], Fe);
var us = Object.defineProperty, $s = Object.getOwnPropertyDescriptor, fs = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? $s(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && us(e, s, t), t;
};
class _s extends Event {
  constructor() {
    super("my-standard-event", {
      bubbles: !0,
      // 버블링을 허용
      composed: !0
      // 쉐도우 DOM 경계를 넘어서 전파
    });
  }
}
let Ve = class extends u {
  fireEvent() {
    const r = new _s();
    this.dispatchEvent(r);
  }
  render() {
    return p`
      <button @click="${this.fireEvent}">이벤트 발생시키기</button>
    `;
  }
};
Ve = fs([
  f("standard-event")
], Ve);
var vs = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, we = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ms(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && vs(e, s, t), t;
};
let Z = class extends u {
  constructor() {
    super(...arguments), this.t1 = p`<h1>hello</h1>`, this.t2 = p`<h2>world</h2>`;
  }
  render() {
    return p`${this.t1}${this.t2}`;
  }
};
we([
  Pe()
], Z.prototype, "t1", 2);
we([
  Pe()
], Z.prototype, "t2", 2);
Z = we([
  f("html-expression")
], Z);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ee = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, te = (r) => (...e) => ({ _$litDirective$: r, values: e });
let se = class {
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
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt = "important", gs = " !" + gt, bs = te(class extends se {
  constructor(r) {
    var e;
    if (super(r), r.type !== Ee.ATTRIBUTE || r.name !== "style" || ((e = r.strings) == null ? void 0 : e.length) > 2)
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
        const o = typeof t == "string" && t.endsWith(gs);
        n.includes("-") || o ? s.setProperty(n, o ? t.slice(0, -11) : t, o ? gt : "") : s[n] = t;
      }
    }
    return P;
  }
}), ys = "blue", As = "white", Ps = "10px 20px", Cs = "none", Os = "5px", ws = "pointer", Es = {
  backgroundColor: ys,
  color: As,
  padding: Ps,
  border: Cs,
  borderRadius: Os,
  cursor: ws
};
var Ss = Object.defineProperty, xs = Object.getOwnPropertyDescriptor, Ds = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? xs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Ss(e, s, t), t;
};
let We = class extends u {
  render() {
    return p`
      <button style=${bs(Es)}>버튼이야</button>
    `;
  }
};
We = Ds([
  f("json-in-css")
], We);
var js = Object.defineProperty, Ts = Object.getOwnPropertyDescriptor, bt = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Ts(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && js(e, s, t), t;
};
let X = class extends u {
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
    return p`
      <h1>Count: ${this.count}</h1>
      <button @click="${this.incrementCount}">Increment</button>
    `;
  }
  incrementCount() {
    this.count += 1;
  }
};
X.styles = F`
      :host {
        display: block;
      }
    `;
bt([
  g({
    type: Number,
    hasChanged(r, e) {
      return console.log(`hasChanged: ${e} -> ${r}`), e !== r;
    }
  })
], X.prototype, "count", 2);
X = bt([
  f("life-cycle-first")
], X);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: Ns } = Tt, Ye = (r, e) => e === void 0 ? (r == null ? void 0 : r._$litType$) !== void 0 : (r == null ? void 0 : r._$litType$) === e, Us = (r) => {
  var e;
  return ((e = r == null ? void 0 : r._$litType$) == null ? void 0 : e.h) != null;
}, Ms = (r) => r.strings === void 0, qe = () => document.createComment(""), E = (r, e, s) => {
  var o;
  const n = r._$AA.parentNode, t = e === void 0 ? r._$AB : e._$AA;
  if (s === void 0) {
    const i = n.insertBefore(qe(), t), a = n.insertBefore(qe(), t);
    s = new Ns(i, a, r, r.options);
  } else {
    const i = s._$AB.nextSibling, a = s._$AM, l = a !== r;
    if (l) {
      let h;
      (o = s._$AQ) == null || o.call(s, r), s._$AM = r, s._$AP !== void 0 && (h = r._$AU) !== a._$AU && s._$AP(h);
    }
    if (i !== t || l) {
      let h = s._$AA;
      for (; h !== i; ) {
        const _ = h.nextSibling;
        n.insertBefore(h, t), h = _;
      }
    }
  }
  return s;
}, O = (r, e, s = r) => (r._$AI(e, s), r), Rs = {}, _e = (r, e = Rs) => r._$AH = e, ve = (r) => r._$AH, ce = (r) => {
  var n;
  (n = r._$AP) == null || n.call(r, !1, !0);
  let e = r._$AA;
  const s = r._$AB.nextSibling;
  for (; e !== s; ) {
    const t = e.nextSibling;
    e.remove(), e = t;
  }
}, Hs = (r) => {
  r._$AR();
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = (r, e) => {
  var n;
  const s = r._$AN;
  if (s === void 0)
    return !1;
  for (const t of s)
    (n = t._$AO) == null || n.call(t, e, !1), I(t, e);
  return !0;
}, G = (r) => {
  let e, s;
  do {
    if ((e = r._$AM) === void 0)
      break;
    s = e._$AN, s.delete(r), r = e;
  } while ((s == null ? void 0 : s.size) === 0);
}, yt = (r) => {
  for (let e; e = r._$AM; r = e) {
    let s = e._$AN;
    if (s === void 0)
      e._$AN = s = /* @__PURE__ */ new Set();
    else if (s.has(r))
      break;
    s.add(r), Bs(e);
  }
};
function Is(r) {
  this._$AN !== void 0 ? (G(this), this._$AM = r, yt(this)) : this._$AM = r;
}
function Ls(r, e = !1, s = 0) {
  const n = this._$AH, t = this._$AN;
  if (t !== void 0 && t.size !== 0)
    if (e)
      if (Array.isArray(n))
        for (let o = s; o < n.length; o++)
          I(n[o], !1), G(n[o]);
      else
        n != null && (I(n, !1), G(n));
    else
      I(this, r);
}
const Bs = (r) => {
  r.type == Ee.CHILD && (r._$AP ?? (r._$AP = Ls), r._$AQ ?? (r._$AQ = Is));
};
class zs extends se {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, s, n) {
    super._$AT(e, s, n), yt(this), this.isConnected = e._$AU;
  }
  _$AO(e, s = !0) {
    var n, t;
    e !== this.isConnected && (this.isConnected = e, e ? (n = this.reconnected) == null || n.call(this) : (t = this.disconnected) == null || t.call(this)), s && (I(this, e), G(this));
  }
  setValue(e) {
    if (Ms(this._$Ct))
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
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fs = () => new Vs();
let Vs = class {
};
const ae = /* @__PURE__ */ new WeakMap(), Ws = te(class extends zs {
  render(r) {
    return v;
  }
  update(r, [e]) {
    var n;
    const s = e !== this.Y;
    return s && this.Y !== void 0 && this.rt(void 0), (s || this.lt !== this.ct) && (this.Y = e, this.ht = (n = r.options) == null ? void 0 : n.host, this.rt(this.ct = r.element)), v;
  }
  rt(r) {
    if (typeof this.Y == "function") {
      const e = this.ht ?? globalThis;
      let s = ae.get(e);
      s === void 0 && (s = /* @__PURE__ */ new WeakMap(), ae.set(e, s)), s.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), s.set(this.Y, r), r !== void 0 && this.Y.call(this.ht, r);
    } else
      this.Y.value = r;
  }
  get lt() {
    var r, e;
    return typeof this.Y == "function" ? (r = ae.get(this.ht ?? globalThis)) == null ? void 0 : r.get(this.Y) : (e = this.Y) == null ? void 0 : e.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var Ys = Object.defineProperty, qs = Object.getOwnPropertyDescriptor, Js = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? qs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Ys(e, s, t), t;
};
let Je = class extends u {
  constructor() {
    super(...arguments), this.buttonRef = Fs();
  }
  firstUpdated() {
    const r = this.buttonRef.value;
    r && r.addEventListener("click", () => {
      console.log("버튼이 클릭되었습니다!");
    });
  }
  render() {
    return p`<button ${Ws(this.buttonRef)}>클릭하세요</button>`;
  }
};
Je = Js([
  f("with-ref")
], Je);
var Ks = Object.defineProperty, Qs = Object.getOwnPropertyDescriptor, Zs = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? Qs(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Ks(e, s, t), t;
};
let Ke = class extends u {
  firstUpdated() {
    var e;
    const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector("button");
    r && r.addEventListener("click", () => {
      console.log("버튼이 클릭되었습니다!");
    });
  }
  render() {
    return p`<button>클릭하세요</button>`;
  }
};
Ke = Zs([
  f("without-ref")
], Ke);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qe = (r, e, s) => {
  const n = /* @__PURE__ */ new Map();
  for (let t = e; t <= s; t++)
    n.set(r[t], t);
  return n;
}, Xs = te(class extends se {
  constructor(r) {
    if (super(r), r.type !== Ee.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(r, e, s) {
    let n;
    s === void 0 ? s = e : e !== void 0 && (n = e);
    const t = [], o = [];
    let i = 0;
    for (const a of r)
      t[i] = n ? n(a, i) : i, o[i] = s(a, i), i++;
    return { values: o, keys: t };
  }
  render(r, e, s) {
    return this.dt(r, e, s).values;
  }
  update(r, [e, s, n]) {
    const t = ve(r), { values: o, keys: i } = this.dt(e, s, n);
    if (!Array.isArray(t))
      return this.ut = i, o;
    const a = this.ut ?? (this.ut = []), l = [];
    let h, _, c = 0, $ = t.length - 1, d = 0, m = o.length - 1;
    for (; c <= $ && d <= m; )
      if (t[c] === null)
        c++;
      else if (t[$] === null)
        $--;
      else if (a[c] === i[d])
        l[d] = O(t[c], o[d]), c++, d++;
      else if (a[$] === i[m])
        l[m] = O(t[$], o[m]), $--, m--;
      else if (a[c] === i[m])
        l[m] = O(t[c], o[m]), E(r, l[m + 1], t[c]), c++, m--;
      else if (a[$] === i[d])
        l[d] = O(t[$], o[d]), E(r, t[c], t[$]), $--, d++;
      else if (h === void 0 && (h = Qe(i, d, m), _ = Qe(a, c, $)), h.has(a[c]))
        if (h.has(a[$])) {
          const b = _.get(i[d]), re = b !== void 0 ? t[b] : null;
          if (re === null) {
            const De = E(r, t[c]);
            O(De, o[d]), l[d] = De;
          } else
            l[d] = O(re, o[d]), E(r, t[c], re), t[b] = null;
          d++;
        } else
          ce(t[$]), $--;
      else
        ce(t[c]), c++;
    for (; d <= m; ) {
      const b = E(r, l[m + 1]);
      O(b, o[d]), l[d++] = b;
    }
    for (; c <= $; ) {
      const b = t[c++];
      b !== null && ce(b);
    }
    return this.ut = i, _e(r, l), P;
  }
});
var Gs = Object.defineProperty, ks = Object.getOwnPropertyDescriptor, Se = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ks(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && Gs(e, s, t), t;
};
let k = class extends u {
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
    return p`
      <ul>
        ${Xs(this.users, (r) => r.id, (r) => p`
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
Se([
  g({ type: Array })
], k.prototype, "users", 2);
Se([
  g({ type: Boolean })
], k.prototype, "sorted", 2);
k = Se([
  f("repeat-directive")
], k);
var er = Object.defineProperty, tr = Object.getOwnPropertyDescriptor, sr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? tr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && er(e, s, t), t;
};
let Ze = class extends u {
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
Ze = sr([
  f("named-slot-element")
], Ze);
var rr = Object.defineProperty, nr = Object.getOwnPropertyDescriptor, or = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? nr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && rr(e, s, t), t;
};
let Xe = class extends u {
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
Xe = or([
  f("same-name-slot")
], Xe);
var ir = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, cr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? lr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && ir(e, s, t), t;
};
let Ge = class extends u {
  render() {
    return p`
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
Ge = cr([
  f("slot-content")
], Ge);
var ar = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, pr = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? hr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && ar(e, s, t), t;
};
let ke = class extends u {
  handleSlotchange(r) {
    const s = r.target.assignedNodes({ flatten: !0 }).map((n) => n.textContent ? n.textContent : "").join("");
    console.log("slot change event fired:", { allText: s });
  }
  render() {
    return p`<slot @slotchange=${this.handleSlotchange}></slot>`;
  }
};
ke = pr([
  f("slot-change")
], ke);
var dr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, $r = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? ur(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && dr(e, s, t), t;
};
let et = class extends u {
  // render 메소드를 오버라이드하여 컴포넌트의 HTML 구조를 정의합니다.
  render() {
    return p`
      <p>
        <slot></slot> <!-- 사용자 정의 콘텐츠를 삽입할 수 있는 <slot> 태그 -->
      </p>
    `;
  }
};
et = $r([
  f("slot-init")
], et);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = (r) => Us(r) ? r._$litType$.h : r.strings, fr = te(class extends se {
  constructor(r) {
    super(r), this.et = /* @__PURE__ */ new WeakMap();
  }
  render(r) {
    return [r];
  }
  update(r, [e]) {
    const s = Ye(this.it) ? tt(this.it) : null, n = Ye(e) ? tt(e) : null;
    if (s !== null && (n === null || s !== n)) {
      const t = ve(r).pop();
      let o = this.et.get(s);
      if (o === void 0) {
        const i = document.createDocumentFragment();
        o = $t(v, i), o.setConnected(!1), this.et.set(s, o);
      }
      _e(o, [t]), E(o, void 0, t);
    }
    if (n !== null) {
      if (s === null || s !== n) {
        const t = this.et.get(n);
        if (t !== void 0) {
          const o = ve(t).pop();
          Hs(r), E(r, void 0, o), _e(r, [o]);
        }
      }
      this.it = e;
    } else
      this.it = void 0;
    return this.render(e);
  }
});
var _r = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, xe = (r, e, s, n) => {
  for (var t = n > 1 ? void 0 : n ? vr(e, s) : e, o = r.length - 1, i; o >= 0; o--)
    (i = r[o]) && (t = (n ? i(e, s, t) : i(t)) || t);
  return n && t && _r(e, s, t), t;
};
const mr = (r) => p`<div>Detail View: ${r.detail}</div>`, gr = (r) => p`<div>Summary View: ${r.summary}</div>`;
let ee = class extends u {
  constructor() {
    super(...arguments), this.detail = !0, this.data = { detail: "여기에 상세 내용", summary: "여기에 요약 내용" };
  }
  render() {
    return p`
      <button @click="${() => this.detail = !this.detail}">Toggle Details</button>
      ${fr(
      this.detail ? mr(this.data) : gr(this.data)
    )}
    `;
  }
};
xe([
  Pe()
], ee.prototype, "detail", 2);
xe([
  g({ type: Object })
], ee.prototype, "data", 2);
ee = xe([
  f("template-cache")
], ee);
