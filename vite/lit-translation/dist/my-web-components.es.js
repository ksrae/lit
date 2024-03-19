const Qt = (n, t) => {
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
const W = globalThis, ct = W.ShadowRoot && (W.ShadyCSS === void 0 || W.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, dt = Symbol(), $t = /* @__PURE__ */ new WeakMap();
let Ot = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== dt)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (ct && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = $t.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && $t.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (n) => new Ot(typeof n == "string" ? n : n + "", void 0, dt), Yt = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, o) => s + ((r) => {
    if (r._$cssResult$ === !0)
      return r.cssText;
    if (typeof r == "number")
      return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[o + 1], n[0]);
  return new Ot(e, n, dt);
}, Xt = (n, t) => {
  if (ct)
    n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const s = document.createElement("style"), i = W.litNonce;
      i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
    }
}, pt = ct ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return Ft(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: te, defineProperty: ee, getOwnPropertyDescriptor: se, getOwnPropertyNames: ie, getOwnPropertySymbols: ne, getPrototypeOf: re } = Object, g = globalThis, _t = g.trustedTypes, oe = _t ? _t.emptyScript : "", Y = g.reactiveElementPolyfillSupport, O = (n, t) => n, nt = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? oe : null;
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
} }, Rt = (n, t) => !te(n, t), At = { attribute: !0, type: String, converter: nt, reflect: !1, hasChanged: Rt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), g.litPropertyMetadata ?? (g.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class w extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = At) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ee(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = se(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(r) {
      const c = i == null ? void 0 : i.call(this);
      o.call(this, r), this.requestUpdate(t, c, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? At;
  }
  static _$Ei() {
    if (this.hasOwnProperty(O("elementProperties")))
      return;
    const t = re(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(O("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
      const e = this.properties, s = [...ie(e), ...ne(e)];
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
        e.unshift(pt(i));
    } else
      t !== void 0 && e.push(pt(t));
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
    return Xt(t, this.constructor.elementStyles), t;
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
      const r = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : nt).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), c = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((o = r.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? r.converter : nt;
      this._$Em = i, this[i] = c.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? Rt)(this[t], e))
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
w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, w[O("elementProperties")] = /* @__PURE__ */ new Map(), w[O("finalized")] = /* @__PURE__ */ new Map(), Y == null || Y({ ReactiveElement: w }), (g.reactiveElementVersions ?? (g.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, q = R.trustedTypes, ft = q ? q.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, Lt = "$lit$", A = `lit$${(Math.random() + "").slice(9)}$`, kt = "?" + A, he = `<${kt}>`, E = document, I = () => E.createComment(""), D = (n) => n === null || typeof n != "object" && typeof n != "function", It = Array.isArray, le = (n) => It(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", X = `[ 	
\f\r]`, U = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, gt = /-->/g, vt = />/g, v = RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), mt = /'/g, yt = /"/g, Dt = /^(?:script|style|textarea|title)$/i, ae = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), ce = ae(1), x = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), bt = /* @__PURE__ */ new WeakMap(), y = E.createTreeWalker(E, 129);
function jt(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return ft !== void 0 ? ft.createHTML(t) : t;
}
const de = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", r = U;
  for (let c = 0; c < e; c++) {
    const h = n[c];
    let l, d, a = -1, u = 0;
    for (; u < h.length && (r.lastIndex = u, d = r.exec(h), d !== null); )
      u = r.lastIndex, r === U ? d[1] === "!--" ? r = gt : d[1] !== void 0 ? r = vt : d[2] !== void 0 ? (Dt.test(d[2]) && (i = RegExp("</" + d[2], "g")), r = v) : d[3] !== void 0 && (r = v) : r === v ? d[0] === ">" ? (r = i ?? U, a = -1) : d[1] === void 0 ? a = -2 : (a = r.lastIndex - d[2].length, l = d[1], r = d[3] === void 0 ? v : d[3] === '"' ? yt : mt) : r === yt || r === mt ? r = v : r === gt || r === vt ? r = U : (r = v, i = void 0);
    const p = r === v && n[c + 1].startsWith("/>") ? " " : "";
    o += r === U ? h + he : a >= 0 ? (s.push(l), h.slice(0, a) + Lt + h.slice(a) + A + p) : h + A + (a === -2 ? c : p);
  }
  return [jt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
let rt = class Vt {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const c = t.length - 1, h = this.parts, [l, d] = de(t, e);
    if (this.el = Vt.createElement(l, s), y.currentNode = this.el.content, e === 2) {
      const a = this.el.content.firstChild;
      a.replaceWith(...a.childNodes);
    }
    for (; (i = y.nextNode()) !== null && h.length < c; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const a of i.getAttributeNames())
            if (a.endsWith(Lt)) {
              const u = d[r++], p = i.getAttribute(a).split(A), S = /([.?@])?(.*)/.exec(u);
              h.push({ type: 1, index: o, name: S[2], strings: p, ctor: S[1] === "." ? $e : S[1] === "?" ? pe : S[1] === "@" ? _e : K }), i.removeAttribute(a);
            } else
              a.startsWith(A) && (h.push({ type: 6, index: o }), i.removeAttribute(a));
        if (Dt.test(i.tagName)) {
          const a = i.textContent.split(A), u = a.length - 1;
          if (u > 0) {
            i.textContent = q ? q.emptyScript : "";
            for (let p = 0; p < u; p++)
              i.append(a[p], I()), y.nextNode(), h.push({ type: 2, index: ++o });
            i.append(a[u], I());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === kt)
          h.push({ type: 2, index: o });
        else {
          let a = -1;
          for (; (a = i.data.indexOf(A, a + 1)) !== -1; )
            h.push({ type: 7, index: o }), a += A.length - 1;
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
  var r, c;
  if (t === x)
    return t;
  let i = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const o = D(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((c = i == null ? void 0 : i._$AO) == null || c.call(i, !1), o === void 0 ? i = void 0 : (i = new o(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = H(n, i._$AS(n, t.values), i, s)), t;
}
let ue = class {
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
    let o = y.nextNode(), r = 0, c = 0, h = s[0];
    for (; h !== void 0; ) {
      if (r === h.index) {
        let l;
        h.type === 2 ? l = new ut(o, o.nextSibling, this, t) : h.type === 1 ? l = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (l = new Ae(o, this, t)), this._$AV.push(l), h = s[++c];
      }
      r !== (h == null ? void 0 : h.index) && (o = y.nextNode(), r++);
    }
    return y.currentNode = E, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}, ut = class Bt {
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
    t = H(this, t, e), D(t) ? t === _ || t == null || t === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : le(t) ? this.k(t) : this._(t);
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
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = rt.createElement(jt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i)
      this._$AH.p(e);
    else {
      const r = new ue(i, this), c = r.u(this.options);
      r.p(e), this.T(c), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = bt.get(t.strings);
    return e === void 0 && bt.set(t.strings, e = new rt(t)), e;
  }
  k(t) {
    It(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t)
      i === e.length ? e.push(s = new Bt(this.S(I()), this.S(I()), this, this.options)) : s = e[i], s._$AI(o), i++;
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
}, K = class {
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
      const c = t;
      let h, l;
      for (t = o[0], h = 0; h < o.length - 1; h++)
        l = H(this, c[s + h], e, h), l === x && (l = this._$AH[h]), r || (r = !D(l) || l !== this._$AH[h]), l === _ ? t = _ : t !== _ && (t += (l ?? "") + o[h + 1]), this._$AH[h] = l;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}, $e = class extends K {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === _ ? void 0 : t;
  }
}, pe = class extends K {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== _);
  }
}, _e = class extends K {
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
}, Ae = class {
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
const tt = R.litHtmlPolyfillSupport;
tt == null || tt(rt, ut), (R.litHtmlVersions ?? (R.litHtmlVersions = [])).push("3.1.2");
const fe = (n, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new ut(t.insertBefore(I(), o), o, void 0, e ?? {});
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = fe(e, this.renderRoot, this.renderOptions);
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
var Mt;
L._$litElement$ = !0, L.finalized = !0, (Mt = globalThis.litElementHydrateSupport) == null || Mt.call(globalThis, { LitElement: L });
const et = globalThis.litElementPolyfillSupport;
et == null || et({ LitElement: L });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ge = (n) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(n, t);
  }) : customElements.define(n, t);
}, ot = "langChanged";
function ve(n, t, e) {
  return Object.entries(ht(t || {})).reduce((s, [i, o]) => s.replace(new RegExp(`{{[  ]*${i}[  ]*}}`, "gm"), String(ht(o))), n);
}
function me(n, t) {
  const e = n.split(".");
  let s = t.strings;
  for (; s != null && e.length > 0; )
    s = s[e.shift()];
  return s != null ? s.toString() : null;
}
function ht(n) {
  return typeof n == "function" ? n() : n;
}
const ye = () => ({
  loader: () => Promise.resolve({}),
  empty: (n) => `[${n}]`,
  lookup: me,
  interpolate: ve,
  translationCache: {}
});
let j = ye();
function be(n) {
  return j = Object.assign(Object.assign({}, j), n);
}
function Ee(n) {
  window.dispatchEvent(new CustomEvent(ot, { detail: n }));
}
function Ce(n, t, e = j) {
  Ee({
    previousStrings: e.strings,
    previousLang: e.lang,
    lang: e.lang = n,
    strings: e.strings = t
  });
}
function Se(n, t) {
  const e = (s) => n(s.detail);
  return window.addEventListener(ot, e, t), () => window.removeEventListener(ot, e);
}
async function Et(n, t = j) {
  const e = await t.loader(n, t);
  t.translationCache = {}, Ce(n, e, t);
}
function we(n, t, e = j) {
  let s = e.translationCache[n] || (e.translationCache[n] = e.lookup(n, e) || e.empty(n, e));
  return t = t != null ? ht(t) : null, t != null ? e.interpolate(s, t, e) : s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, xe = (n) => (...t) => ({ _$litDirective$: n, values: t });
let Wt = class {
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
var st;
const Z = window, N = Z.trustedTypes, Ct = N ? N.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, lt = "$lit$", f = `lit$${(Math.random() + "").slice(9)}$`, qt = "?" + f, He = `<${qt}>`, C = document, G = () => C.createComment(""), V = (n) => n === null || typeof n != "object" && typeof n != "function", Zt = Array.isArray, Ne = (n) => Zt(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", it = `[ 	
\f\r]`, M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, St = /-->/g, wt = />/g, m = RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), xt = /'/g, Ht = /"/g, Gt = /^(?:script|style|textarea|title)$/i, T = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), Nt = /* @__PURE__ */ new WeakMap(), b = C.createTreeWalker(C, 129, null, !1);
function Jt(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Ct !== void 0 ? Ct.createHTML(t) : t;
}
const Te = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", r = M;
  for (let c = 0; c < e; c++) {
    const h = n[c];
    let l, d, a = -1, u = 0;
    for (; u < h.length && (r.lastIndex = u, d = r.exec(h), d !== null); )
      u = r.lastIndex, r === M ? d[1] === "!--" ? r = St : d[1] !== void 0 ? r = wt : d[2] !== void 0 ? (Gt.test(d[2]) && (i = RegExp("</" + d[2], "g")), r = m) : d[3] !== void 0 && (r = m) : r === m ? d[0] === ">" ? (r = i ?? M, a = -1) : d[1] === void 0 ? a = -2 : (a = r.lastIndex - d[2].length, l = d[1], r = d[3] === void 0 ? m : d[3] === '"' ? Ht : xt) : r === Ht || r === xt ? r = m : r === St || r === wt ? r = M : (r = m, i = void 0);
    const p = r === m && n[c + 1].startsWith("/>") ? " " : "";
    o += r === M ? h + He : a >= 0 ? (s.push(l), h.slice(0, a) + lt + h.slice(a) + f + p) : h + f + (a === -2 ? (s.push(void 0), c) : p);
  }
  return [Jt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class B {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const c = t.length - 1, h = this.parts, [l, d] = Te(t, e);
    if (this.el = B.createElement(l, s), b.currentNode = this.el.content, e === 2) {
      const a = this.el.content, u = a.firstChild;
      u.remove(), a.append(...u.childNodes);
    }
    for (; (i = b.nextNode()) !== null && h.length < c; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const a = [];
          for (const u of i.getAttributeNames())
            if (u.endsWith(lt) || u.startsWith(f)) {
              const p = d[r++];
              if (a.push(u), p !== void 0) {
                const S = i.getAttribute(p.toLowerCase() + lt).split(f), z = /([.?@])?(.*)/.exec(p);
                h.push({ type: 1, index: o, name: z[2], strings: S, ctor: z[1] === "." ? Ue : z[1] === "?" ? Oe : z[1] === "@" ? Re : F });
              } else
                h.push({ type: 6, index: o });
            }
          for (const u of a)
            i.removeAttribute(u);
        }
        if (Gt.test(i.tagName)) {
          const a = i.textContent.split(f), u = a.length - 1;
          if (u > 0) {
            i.textContent = N ? N.emptyScript : "";
            for (let p = 0; p < u; p++)
              i.append(a[p], G()), b.nextNode(), h.push({ type: 2, index: ++o });
            i.append(a[u], G());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === qt)
          h.push({ type: 2, index: o });
        else {
          let a = -1;
          for (; (a = i.data.indexOf(f, a + 1)) !== -1; )
            h.push({ type: 7, index: o }), a += f.length - 1;
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
  var i, o, r, c;
  if (t === T)
    return t;
  let h = s !== void 0 ? (i = e._$Co) === null || i === void 0 ? void 0 : i[s] : e._$Cl;
  const l = V(t) ? void 0 : t._$litDirective$;
  return (h == null ? void 0 : h.constructor) !== l && ((o = h == null ? void 0 : h._$AO) === null || o === void 0 || o.call(h, !1), l === void 0 ? h = void 0 : (h = new l(n), h._$AT(n, e, s)), s !== void 0 ? ((r = (c = e)._$Co) !== null && r !== void 0 ? r : c._$Co = [])[s] = h : e._$Cl = h), h !== void 0 && (t = P(n, h._$AS(n, t.values), h, s)), t;
}
class Pe {
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
    let r = b.nextNode(), c = 0, h = 0, l = i[0];
    for (; l !== void 0; ) {
      if (c === l.index) {
        let d;
        l.type === 2 ? d = new Q(r, r.nextSibling, this, t) : l.type === 1 ? d = new l.ctor(r, l.name, l.strings, this, t) : l.type === 6 && (d = new Le(r, this, t)), this._$AV.push(d), l = i[++h];
      }
      c !== (l == null ? void 0 : l.index) && (r = b.nextNode(), c++);
    }
    return b.currentNode = C, o;
  }
  v(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class Q {
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
    t = P(this, t, e), V(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== T && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : Ne(t) ? this.T(t) : this._(t);
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
    const { values: s, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = B.createElement(Jt(i.h, i.h[0]), this.options)), i);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o)
      this._$AH.v(s);
    else {
      const r = new Pe(o, this), c = r.u(this.options);
      r.v(s), this.$(c), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Nt.get(t.strings);
    return e === void 0 && Nt.set(t.strings, e = new B(t)), e;
  }
  T(t) {
    Zt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t)
      i === e.length ? e.push(s = new Q(this.k(G()), this.k(G()), this, this.options)) : s = e[i], s._$AI(o), i++;
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
class F {
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
      t = P(this, t, e, 0), r = !V(t) || t !== this._$AH && t !== T, r && (this._$AH = t);
    else {
      const c = t;
      let h, l;
      for (t = o[0], h = 0; h < o.length - 1; h++)
        l = P(this, c[s + h], e, h), l === T && (l = this._$AH[h]), r || (r = !V(l) || l !== this._$AH[h]), l === $ ? t = $ : t !== $ && (t += (l ?? "") + o[h + 1]), this._$AH[h] = l;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ue extends F {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
const Me = N ? N.emptyScript : "";
class Oe extends F {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== $ ? this.element.setAttribute(this.name, Me) : this.element.removeAttribute(this.name);
  }
}
class Re extends F {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = P(this, t, e, 0)) !== null && s !== void 0 ? s : $) === T)
      return;
    const i = this._$AH, o = t === $ && i !== $ || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, r = t !== $ && (i === $ || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Le {
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
const Tt = Z.litHtmlPolyfillSupport;
Tt == null || Tt(B, Q), ((st = Z.litHtmlVersions) !== null && st !== void 0 ? st : Z.litHtmlVersions = []).push("2.8.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke = (n) => n.strings === void 0;
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
}, J = (n) => {
  let t, e;
  do {
    if ((t = n._$AM) === void 0)
      break;
    e = t._$AN, e.delete(n), n = t;
  } while ((e == null ? void 0 : e.size) === 0);
}, Kt = (n) => {
  for (let t; t = n._$AM; n = t) {
    let e = t._$AN;
    if (e === void 0)
      t._$AN = e = /* @__PURE__ */ new Set();
    else if (e.has(n))
      break;
    e.add(n), je(t);
  }
};
function Ie(n) {
  this._$AN !== void 0 ? (J(this), this._$AM = n, Kt(this)) : this._$AM = n;
}
function De(n, t = !1, e = 0) {
  const s = this._$AH, i = this._$AN;
  if (i !== void 0 && i.size !== 0)
    if (t)
      if (Array.isArray(s))
        for (let o = e; o < s.length; o++)
          k(s[o], !1), J(s[o]);
      else
        s != null && (k(s, !1), J(s));
    else
      k(this, n);
}
const je = (n) => {
  var t, e, s, i;
  n.type == zt.CHILD && ((t = (s = n)._$AP) !== null && t !== void 0 || (s._$AP = De), (e = (i = n)._$AQ) !== null && e !== void 0 || (i._$AQ = Ie));
};
class Ve extends Wt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, e, s) {
    super._$AT(t, e, s), Kt(this), this.isConnected = t._$AU;
  }
  _$AO(t, e = !0) {
    var s, i;
    t !== this.isConnected && (this.isConnected = t, t ? (s = this.reconnected) === null || s === void 0 || s.call(this) : (i = this.disconnected) === null || i === void 0 || i.call(this)), e && (k(this, t), J(this));
  }
  setValue(t) {
    if (ke(this._$Ct))
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
class Be extends Ve {
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
    this.langChangedSubscription == null && (this.langChangedSubscription = Se(this.langChanged.bind(this)));
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
class ze extends Be {
  render(t, e, s) {
    return this.renderValue(() => we(t, e, s));
  }
}
const Pt = xe(ze);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ut extends Wt {
  constructor(t) {
    if (super(t), this.et = $, t.type !== zt.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === $ || t == null)
      return this.ft = void 0, this.et = t;
    if (t === T)
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
Ut.directiveName = "unsafeHTML", Ut.resultType = 1;
var We = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, Ze = (n, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? qe(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = (s ? r(t, e, i) : r(i)) || i);
  return s && i && We(t, e, i), i;
};
async function Ge(n) {
  return (await Qt(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-fvz3N14s.js"), "../locales/ko.json": () => import("./ko-JhvMs9rT.js") }), `../locales/${n}.json`)).default;
}
be({
  loader: Ge
});
let at = class extends L {
  async connectedCallback() {
    super.connectedCallback(), await Et("ko");
  }
  render() {
    return ce`
      <div>
        <p>${Pt("hello")}</p>
        <p>${Pt("welcome")}</p>
        <button @click="${() => this.changeLocale("en")}">English</button>
        <button @click="${() => this.changeLocale("ko")}">한국어</button>
      </div>
    `;
  }
  changeLocale(n) {
    Et(n);
  }
};
at.styles = Yt`/* 스타일 정의 */`;
at = Ze([
  ge("lit-translate")
], at);
