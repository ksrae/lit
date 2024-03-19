const Yt = (n, t) => {
  const e = n[t];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((s, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis, dt = W.ShadowRoot && (W.ShadyCSS === void 0 || W.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ut = Symbol(), _t = /* @__PURE__ */ new WeakMap();
let Lt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== ut)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (dt && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = _t.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && _t.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Xt = (n) => new Lt(typeof n == "string" ? n : n + "", void 0, ut), te = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, o) => s + ((r) => {
    if (r._$cssResult$ === !0)
      return r.cssText;
    if (typeof r == "number")
      return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[o + 1], n[0]);
  return new Lt(e, n, ut);
}, ee = (n, t) => {
  if (dt)
    n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const s = document.createElement("style"), i = W.litNonce;
      i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
    }
}, At = dt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return Xt(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: se, defineProperty: ie, getOwnPropertyDescriptor: ne, getOwnPropertyNames: re, getOwnPropertySymbols: oe, getPrototypeOf: le } = Object, g = globalThis, ft = g.trustedTypes, he = ft ? ft.emptyScript : "", et = g.reactiveElementPolyfillSupport, O = (n, t) => n, Z = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? he : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, $t = (n, t) => !se(n, t), gt = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: $t };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), g.litPropertyMetadata ?? (g.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class w extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = gt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ie(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = ne(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(r) {
      const a = i == null ? void 0 : i.call(this);
      o.call(this, r), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? gt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(O("elementProperties")))
      return;
    const t = le(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(O("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
      const e = this.properties, s = [...re(e), ...oe(e)];
      for (const i of s)
        this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [s, i] of e)
          this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s)
        e.unshift(At(i));
    } else
      t !== void 0 && e.push(At(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const s of e.keys())
      this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ee(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : Z).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((o = r.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? r.converter : Z;
      this._$Em = i, this[i] = a.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? $t)(this[t], e))
        return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
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
    var s;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, r] of this._$Ep)
          this[o] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0)
        for (const [o, r] of i)
          r.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], r);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
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
w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, w[O("elementProperties")] = /* @__PURE__ */ new Map(), w[O("finalized")] = /* @__PURE__ */ new Map(), et == null || et({ ReactiveElement: w }), (g.reactiveElementVersions ?? (g.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, G = R.trustedTypes, vt = G ? G.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, kt = "$lit$", A = `lit$${(Math.random() + "").slice(9)}$`, It = "?" + A, ae = `<${It}>`, E = document, I = () => E.createComment(""), D = (n) => n === null || typeof n != "object" && typeof n != "function", Dt = Array.isArray, ce = (n) => Dt(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", st = `[ 	
\f\r]`, U = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, mt = /-->/g, yt = />/g, v = RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), bt = /'/g, Et = /"/g, jt = /^(?:script|style|textarea|title)$/i, de = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), ue = de(1), x = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), Ct = /* @__PURE__ */ new WeakMap(), y = E.createTreeWalker(E, 129);
function Vt(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return vt !== void 0 ? vt.createHTML(t) : t;
}
const $e = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", r = U;
  for (let a = 0; a < e; a++) {
    const l = n[a];
    let h, d, c = -1, u = 0;
    for (; u < l.length && (r.lastIndex = u, d = r.exec(l), d !== null); )
      u = r.lastIndex, r === U ? d[1] === "!--" ? r = mt : d[1] !== void 0 ? r = yt : d[2] !== void 0 ? (jt.test(d[2]) && (i = RegExp("</" + d[2], "g")), r = v) : d[3] !== void 0 && (r = v) : r === v ? d[0] === ">" ? (r = i ?? U, c = -1) : d[1] === void 0 ? c = -2 : (c = r.lastIndex - d[2].length, h = d[1], r = d[3] === void 0 ? v : d[3] === '"' ? Et : bt) : r === Et || r === bt ? r = v : r === mt || r === yt ? r = U : (r = v, i = void 0);
    const p = r === v && n[a + 1].startsWith("/>") ? " " : "";
    o += r === U ? l + ae : c >= 0 ? (s.push(h), l.slice(0, c) + kt + l.slice(c) + A + p) : l + A + (c === -2 ? a : p);
  }
  return [Vt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
let lt = class Bt {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const a = t.length - 1, l = this.parts, [h, d] = $e(t, e);
    if (this.el = Bt.createElement(h, s), y.currentNode = this.el.content, e === 2) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (i = y.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const c of i.getAttributeNames())
            if (c.endsWith(kt)) {
              const u = d[r++], p = i.getAttribute(c).split(A), S = /([.?@])?(.*)/.exec(u);
              l.push({ type: 1, index: o, name: S[2], strings: p, ctor: S[1] === "." ? _e : S[1] === "?" ? Ae : S[1] === "@" ? fe : Y }), i.removeAttribute(c);
            } else
              c.startsWith(A) && (l.push({ type: 6, index: o }), i.removeAttribute(c));
        if (jt.test(i.tagName)) {
          const c = i.textContent.split(A), u = c.length - 1;
          if (u > 0) {
            i.textContent = G ? G.emptyScript : "";
            for (let p = 0; p < u; p++)
              i.append(c[p], I()), y.nextNode(), l.push({ type: 2, index: ++o });
            i.append(c[u], I());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === It)
          l.push({ type: 2, index: o });
        else {
          let c = -1;
          for (; (c = i.data.indexOf(A, c + 1)) !== -1; )
            l.push({ type: 7, index: o }), c += A.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const s = E.createElement("template");
    return s.innerHTML = t, s;
  }
};
function H(n, t, e = n, s) {
  var r, a;
  if (t === x)
    return t;
  let i = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const o = D(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), o === void 0 ? i = void 0 : (i = new o(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = H(n, i._$AS(n, t.values), i, s)), t;
}
let pe = class {
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
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? E).importNode(e, !0);
    y.currentNode = i;
    let o = y.nextNode(), r = 0, a = 0, l = s[0];
    for (; l !== void 0; ) {
      if (r === l.index) {
        let h;
        l.type === 2 ? h = new pt(o, o.nextSibling, this, t) : l.type === 1 ? h = new l.ctor(o, l.name, l.strings, this, t) : l.type === 6 && (h = new ge(o, this, t)), this._$AV.push(h), l = s[++a];
      }
      r !== (l == null ? void 0 : l.index) && (o = y.nextNode(), r++);
    }
    return y.currentNode = E, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}, pt = class zt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
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
    t = H(this, t, e), D(t) ? t === _ || t == null || t === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ce(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== _ && D(this._$AH) ? this._$AA.nextSibling.data = t : this.T(E.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = lt.createElement(Vt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i)
      this._$AH.p(e);
    else {
      const r = new pe(i, this), a = r.u(this.options);
      r.p(e), this.T(a), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Ct.get(t.strings);
    return e === void 0 && Ct.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    Dt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t)
      i === e.length ? e.push(s = new zt(this.S(I()), this.S(I()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}, Y = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = _;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let r = !1;
    if (o === void 0)
      t = H(this, t, e, 0), r = !D(t) || t !== this._$AH && t !== x, r && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = o[0], l = 0; l < o.length - 1; l++)
        h = H(this, a[s + l], e, l), h === x && (h = this._$AH[l]), r || (r = !D(h) || h !== this._$AH[l]), h === _ ? t = _ : t !== _ && (t += (h ?? "") + o[l + 1]), this._$AH[l] = h;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}, _e = class extends Y {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === _ ? void 0 : t;
  }
}, Ae = class extends Y {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== _);
  }
}, fe = class extends Y {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = H(this, t, e, 0) ?? _) === x)
      return;
    const s = this._$AH, i = t === _ && s !== _ || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== _ && (s === _ || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}, ge = class {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    H(this, t);
  }
};
const it = R.litHtmlPolyfillSupport;
it == null || it(lt, pt), (R.litHtmlVersions ?? (R.litHtmlVersions = [])).push("3.1.2");
const ve = (n, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new pt(t.insertBefore(I(), o), o, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let L = class extends w {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ve(e, this.renderRoot, this.renderOptions);
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
    return x;
  }
};
var Rt;
L._$litElement$ = !0, L.finalized = !0, (Rt = globalThis.litElementHydrateSupport) == null || Rt.call(globalThis, { LitElement: L });
const nt = globalThis.litElementPolyfillSupport;
nt == null || nt({ LitElement: L });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const me = (n) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(n, t);
  }) : customElements.define(n, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: $t }, be = (n = ye, t, e) => {
  const { kind: s, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), o.set(e.name, n), s === "accessor") {
    const { name: r } = e;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(r, l, n);
    }, init(a) {
      return a !== void 0 && this.P(r, void 0, n), a;
    } };
  }
  if (s === "setter") {
    const { name: r } = e;
    return function(a) {
      const l = this[r];
      t.call(this, a), this.requestUpdate(r, l, n);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function Ee(n) {
  return (t, e) => typeof e == "object" ? be(n, t, e) : ((s, i, o) => {
    const r = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, r ? { ...s, wrapped: !0 } : s), r ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ce(n) {
  return Ee({ ...n, state: !0, attribute: !1 });
}
const ht = "langChanged";
function Se(n, t, e) {
  return Object.entries(at(t || {})).reduce((s, [i, o]) => s.replace(new RegExp(`{{[  ]*${i}[  ]*}}`, "gm"), String(at(o))), n);
}
function we(n, t) {
  const e = n.split(".");
  let s = t.strings;
  for (; s != null && e.length > 0; )
    s = s[e.shift()];
  return s != null ? s.toString() : null;
}
function at(n) {
  return typeof n == "function" ? n() : n;
}
const xe = () => ({
  loader: () => Promise.resolve({}),
  empty: (n) => `[${n}]`,
  lookup: we,
  interpolate: Se,
  translationCache: {}
});
let j = xe();
function He(n) {
  return j = Object.assign(Object.assign({}, j), n);
}
function Te(n) {
  window.dispatchEvent(new CustomEvent(ht, { detail: n }));
}
function Ne(n, t, e = j) {
  Te({
    previousStrings: e.strings,
    previousLang: e.lang,
    lang: e.lang = n,
    strings: e.strings = t
  });
}
function Pe(n, t) {
  const e = (s) => n(s.detail);
  return window.addEventListener(ht, e, t), () => window.removeEventListener(ht, e);
}
async function St(n, t = j) {
  const e = await t.loader(n, t);
  t.translationCache = {}, Ne(n, e, t);
}
function q(n, t, e = j) {
  let s = e.translationCache[n] || (e.translationCache[n] = e.lookup(n, e) || e.empty(n, e));
  return t = t != null ? at(t) : null, t != null ? e.interpolate(s, t, e) : s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Ue = (n) => (...t) => ({ _$litDirective$: n, values: t });
let qt = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
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
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var rt;
const J = window, T = J.trustedTypes, wt = T ? T.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ct = "$lit$", f = `lit$${(Math.random() + "").slice(9)}$`, Zt = "?" + f, Me = `<${Zt}>`, C = document, K = () => C.createComment(""), V = (n) => n === null || typeof n != "object" && typeof n != "function", Gt = Array.isArray, Oe = (n) => Gt(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ot = `[ 	
\f\r]`, M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, xt = /-->/g, Ht = />/g, m = RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Tt = /'/g, Nt = /"/g, Jt = /^(?:script|style|textarea|title)$/i, N = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), Pt = /* @__PURE__ */ new WeakMap(), b = C.createTreeWalker(C, 129, null, !1);
function Kt(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return wt !== void 0 ? wt.createHTML(t) : t;
}
const Re = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", r = M;
  for (let a = 0; a < e; a++) {
    const l = n[a];
    let h, d, c = -1, u = 0;
    for (; u < l.length && (r.lastIndex = u, d = r.exec(l), d !== null); )
      u = r.lastIndex, r === M ? d[1] === "!--" ? r = xt : d[1] !== void 0 ? r = Ht : d[2] !== void 0 ? (Jt.test(d[2]) && (i = RegExp("</" + d[2], "g")), r = m) : d[3] !== void 0 && (r = m) : r === m ? d[0] === ">" ? (r = i ?? M, c = -1) : d[1] === void 0 ? c = -2 : (c = r.lastIndex - d[2].length, h = d[1], r = d[3] === void 0 ? m : d[3] === '"' ? Nt : Tt) : r === Nt || r === Tt ? r = m : r === xt || r === Ht ? r = M : (r = m, i = void 0);
    const p = r === m && n[a + 1].startsWith("/>") ? " " : "";
    o += r === M ? l + Me : c >= 0 ? (s.push(h), l.slice(0, c) + ct + l.slice(c) + f + p) : l + f + (c === -2 ? (s.push(void 0), a) : p);
  }
  return [Kt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class B {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const a = t.length - 1, l = this.parts, [h, d] = Re(t, e);
    if (this.el = B.createElement(h, s), b.currentNode = this.el.content, e === 2) {
      const c = this.el.content, u = c.firstChild;
      u.remove(), c.append(...u.childNodes);
    }
    for (; (i = b.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const c = [];
          for (const u of i.getAttributeNames())
            if (u.endsWith(ct) || u.startsWith(f)) {
              const p = d[r++];
              if (c.push(u), p !== void 0) {
                const S = i.getAttribute(p.toLowerCase() + ct).split(f), z = /([.?@])?(.*)/.exec(p);
                l.push({ type: 1, index: o, name: z[2], strings: S, ctor: z[1] === "." ? ke : z[1] === "?" ? De : z[1] === "@" ? je : tt });
              } else
                l.push({ type: 6, index: o });
            }
          for (const u of c)
            i.removeAttribute(u);
        }
        if (Jt.test(i.tagName)) {
          const c = i.textContent.split(f), u = c.length - 1;
          if (u > 0) {
            i.textContent = T ? T.emptyScript : "";
            for (let p = 0; p < u; p++)
              i.append(c[p], K()), b.nextNode(), l.push({ type: 2, index: ++o });
            i.append(c[u], K());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Zt)
          l.push({ type: 2, index: o });
        else {
          let c = -1;
          for (; (c = i.data.indexOf(f, c + 1)) !== -1; )
            l.push({ type: 7, index: o }), c += f.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const s = C.createElement("template");
    return s.innerHTML = t, s;
  }
}
function P(n, t, e = n, s) {
  var i, o, r, a;
  if (t === N)
    return t;
  let l = s !== void 0 ? (i = e._$Co) === null || i === void 0 ? void 0 : i[s] : e._$Cl;
  const h = V(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((o = l == null ? void 0 : l._$AO) === null || o === void 0 || o.call(l, !1), h === void 0 ? l = void 0 : (l = new h(n), l._$AT(n, e, s)), s !== void 0 ? ((r = (a = e)._$Co) !== null && r !== void 0 ? r : a._$Co = [])[s] = l : e._$Cl = l), l !== void 0 && (t = P(n, l._$AS(n, t.values), l, s)), t;
}
class Le {
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
    var e;
    const { el: { content: s }, parts: i } = this._$AD, o = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : C).importNode(s, !0);
    b.currentNode = o;
    let r = b.nextNode(), a = 0, l = 0, h = i[0];
    for (; h !== void 0; ) {
      if (a === h.index) {
        let d;
        h.type === 2 ? d = new X(r, r.nextSibling, this, t) : h.type === 1 ? d = new h.ctor(r, h.name, h.strings, this, t) : h.type === 6 && (d = new Ve(r, this, t)), this._$AV.push(d), h = i[++l];
      }
      a !== (h == null ? void 0 : h.index) && (r = b.nextNode(), a++);
    }
    return b.currentNode = C, o;
  }
  v(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class X {
  constructor(t, e, s, i) {
    var o;
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cp = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
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
    t = P(this, t, e), V(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== N && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : Oe(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== $ && V(this._$AH) ? this._$AA.nextSibling.data = t : this.$(C.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: s, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = B.createElement(Kt(i.h, i.h[0]), this.options)), i);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o)
      this._$AH.v(s);
    else {
      const r = new Le(o, this), a = r.u(this.options);
      r.v(s), this.$(a), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Pt.get(t.strings);
    return e === void 0 && Pt.set(t.strings, e = new B(t)), e;
  }
  T(t) {
    Gt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t)
      i === e.length ? e.push(s = new X(this.k(K()), this.k(K()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class tt {
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = $;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let r = !1;
    if (o === void 0)
      t = P(this, t, e, 0), r = !V(t) || t !== this._$AH && t !== N, r && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = o[0], l = 0; l < o.length - 1; l++)
        h = P(this, a[s + l], e, l), h === N && (h = this._$AH[l]), r || (r = !V(h) || h !== this._$AH[l]), h === $ ? t = $ : t !== $ && (t += (h ?? "") + o[l + 1]), this._$AH[l] = h;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ke extends tt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
const Ie = T ? T.emptyScript : "";
class De extends tt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== $ ? this.element.setAttribute(this.name, Ie) : this.element.removeAttribute(this.name);
  }
}
class je extends tt {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = P(this, t, e, 0)) !== null && s !== void 0 ? s : $) === N)
      return;
    const i = this._$AH, o = t === $ && i !== $ || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, r = t !== $ && (i === $ || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ve {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    P(this, t);
  }
}
const Ut = J.litHtmlPolyfillSupport;
Ut == null || Ut(B, X), ((rt = J.litHtmlVersions) !== null && rt !== void 0 ? rt : J.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Be = (n) => n.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = (n, t) => {
  var e, s;
  const i = n._$AN;
  if (i === void 0)
    return !1;
  for (const o of i)
    (s = (e = o)._$AO) === null || s === void 0 || s.call(e, t, !1), k(o, t);
  return !0;
}, Q = (n) => {
  let t, e;
  do {
    if ((t = n._$AM) === void 0)
      break;
    e = t._$AN, e.delete(n), n = t;
  } while ((e == null ? void 0 : e.size) === 0);
}, Qt = (n) => {
  for (let t; t = n._$AM; n = t) {
    let e = t._$AN;
    if (e === void 0)
      t._$AN = e = /* @__PURE__ */ new Set();
    else if (e.has(n))
      break;
    e.add(n), qe(t);
  }
};
function ze(n) {
  this._$AN !== void 0 ? (Q(this), this._$AM = n, Qt(this)) : this._$AM = n;
}
function We(n, t = !1, e = 0) {
  const s = this._$AH, i = this._$AN;
  if (i !== void 0 && i.size !== 0)
    if (t)
      if (Array.isArray(s))
        for (let o = e; o < s.length; o++)
          k(s[o], !1), Q(s[o]);
      else
        s != null && (k(s, !1), Q(s));
    else
      k(this, n);
}
const qe = (n) => {
  var t, e, s, i;
  n.type == Wt.CHILD && ((t = (s = n)._$AP) !== null && t !== void 0 || (s._$AP = We), (e = (i = n)._$AQ) !== null && e !== void 0 || (i._$AQ = ze));
};
class Ze extends qt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, e, s) {
    super._$AT(t, e, s), Qt(this), this.isConnected = t._$AU;
  }
  _$AO(t, e = !0) {
    var s, i;
    t !== this.isConnected && (this.isConnected = t, t ? (s = this.reconnected) === null || s === void 0 || s.call(this) : (i = this.disconnected) === null || i === void 0 || i.call(this)), e && (k(this, t), Q(this));
  }
  setValue(t) {
    if (Be(this._$Ct))
      this._$Ct._$AI(t, this);
    else {
      const e = [...this._$Ct._$AH];
      e[this._$Ci] = t, this._$Ct._$AI(e, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
class Ge extends Ze {
  constructor() {
    super(...arguments), this.langChangedSubscription = null, this.getValue = () => "";
  }
  /**
   * Sets up the directive by setting the getValue property and subscribing.
   * When subclassing LangChangedDirectiveBase this function should be call in the render function.
   * @param getValue
   */
  renderValue(t) {
    return this.getValue = t, this.subscribe(), this.getValue();
  }
  /**
   * Called when the lang changed event is dispatched.
   * @param e
   */
  langChanged(t) {
    this.setValue(this.getValue(t));
  }
  /**
   * Subscribes to the lang changed event.
   */
  subscribe() {
    this.langChangedSubscription == null && (this.langChangedSubscription = Pe(this.langChanged.bind(this)));
  }
  /**
   * Unsubscribes from the lang changed event.
   */
  unsubscribe() {
    this.langChangedSubscription != null && this.langChangedSubscription();
  }
  /**
   * Unsubscribes when disconnected.
   */
  disconnected() {
    this.unsubscribe();
  }
  /**
   * Subscribes when reconnected.
   */
  reconnected() {
    this.subscribe();
  }
}
class Je extends Ge {
  render(t, e, s) {
    return this.renderValue(() => q(t, e, s));
  }
}
const Mt = Ue(Je);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ot extends qt {
  constructor(t) {
    if (super(t), this.et = $, t.type !== Wt.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === $ || t == null)
      return this.ft = void 0, this.et = t;
    if (t === N)
      return t;
    if (typeof t != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.et)
      return this.ft;
    this.et = t;
    const e = [t];
    return e.raw = e, this.ft = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
Ot.directiveName = "unsafeHTML", Ot.resultType = 1;
var Ke = Object.defineProperty, Qe = Object.getOwnPropertyDescriptor, Ft = (n, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Qe(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = (s ? r(t, e, i) : r(i)) || i);
  return s && i && Ke(t, e, i), i;
};
async function Fe(n) {
  return (await Yt(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-Bz08Mjkc.js"), "../locales/ko.json": () => import("./ko-Dr360dNV.js") }), `../locales/${n}.json`)).default;
}
He({
  loader: Fe
});
let F = class extends L {
  constructor() {
    super(...arguments), this.count = 0;
  }
  async connectedCallback() {
    super.connectedCallback(), await St("ko"), console.log("hello:::", q("hello", { extra: q("world") }));
  }
  render() {
    return ue`
      <div>
        <p>${Mt("hello", { extra: () => q("world") })}</p>
        <p>${Mt("welcome")}</p>
        <button @click="${() => this.changeLocale("en")}">English</button>
        <button @click="${() => this.changeLocale("ko")}">한국어</button>
      </div>
    `;
  }
  changeLocale(n) {
    St(n);
  }
};
F.styles = te`/* 스타일 정의 */`;
Ft([
  Ce()
], F.prototype, "count", 2);
F = Ft([
  me("lit-translate")
], F);
