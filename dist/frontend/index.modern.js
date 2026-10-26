var Yx = Object.defineProperty;
var qx = (a, r, i) => r in a ? Yx(a, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[r] = i;
var Nr = (a, r, i) => qx(a, typeof r != "symbol" ? r + "" : r, i);
function Vx(a, r) {
  for (var i = 0; i < r.length; i++) {
    const u = r[i];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const c in u)
        if (c !== "default" && !(c in a)) {
          const f = Object.getOwnPropertyDescriptor(u, c);
          f && Object.defineProperty(a, c, f.get ? f : {
            enumerable: !0,
            get: () => u[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function Pd(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var cd = { exports: {} }, Gi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t0;
function Gx() {
  if (t0) return Gi;
  t0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(u, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var h in c)
        h !== "key" && (f[h] = c[h]);
    } else f = c;
    return c = f.ref, {
      $$typeof: a,
      type: u,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return Gi.Fragment = r, Gi.jsx = i, Gi.jsxs = i, Gi;
}
var n0;
function Xx() {
  return n0 || (n0 = 1, cd.exports = Gx()), cd.exports;
}
var q = Xx(), fd = { exports: {} }, ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a0;
function Qx() {
  if (a0) return ve;
  a0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), x = Symbol.for("react.view_transition"), T = Symbol.iterator;
  function R(z) {
    return z === null || typeof z != "object" ? null : (z = T && z[T] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, A = {};
  function $(z, P, ue) {
    this.props = z, this.context = P, this.refs = A, this.updater = ue || E;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(z, P) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, P, "setState");
  }, $.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function U() {
  }
  U.prototype = $.prototype;
  function L(z, P, ue) {
    this.props = z, this.context = P, this.refs = A, this.updater = ue || E;
  }
  var N = L.prototype = new U();
  N.constructor = L, w(N, $.prototype), N.isPureReactComponent = !0;
  var G = Array.isArray;
  function k() {
  }
  var Q = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function S(z, P, ue) {
    var ce = ue.ref;
    return {
      $$typeof: a,
      type: z,
      key: P,
      ref: ce !== void 0 ? ce : null,
      props: ue
    };
  }
  function I(z, P) {
    return S(z.type, P, z.props);
  }
  function ee(z) {
    return typeof z == "object" && z !== null && z.$$typeof === a;
  }
  function ne(z) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(ue) {
      return P[ue];
    });
  }
  var ie = /\/+/g;
  function W(z, P) {
    return typeof z == "object" && z !== null && z.key != null ? ne("" + z.key) : P.toString(36);
  }
  function V(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(k, k) : (z.status = "pending", z.then(
          function(P) {
            z.status === "pending" && (z.status = "fulfilled", z.value = P);
          },
          function(P) {
            z.status === "pending" && (z.status = "rejected", z.reason = P);
          }
        )), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function te(z, P, ue, ce, Ee) {
    var Re = typeof z;
    (Re === "undefined" || Re === "boolean") && (z = null);
    var Oe = !1;
    if (z === null) Oe = !0;
    else
      switch (Re) {
        case "bigint":
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case a:
            case r:
              Oe = !0;
              break;
            case b:
              return Oe = z._init, te(
                Oe(z._payload),
                P,
                ue,
                ce,
                Ee
              );
          }
      }
    if (Oe)
      return Ee = Ee(z), Oe = ce === "" ? "." + W(z, 0) : ce, G(Ee) ? (ue = "", Oe != null && (ue = Oe.replace(ie, "$&/") + "/"), te(Ee, P, ue, "", function(kt) {
        return kt;
      })) : Ee != null && (ee(Ee) && (Ee = I(
        Ee,
        ue + (Ee.key == null || z && z.key === Ee.key ? "" : ("" + Ee.key).replace(
          ie,
          "$&/"
        ) + "/") + Oe
      )), P.push(Ee)), 1;
    Oe = 0;
    var re = ce === "" ? "." : ce + ":";
    if (G(z))
      for (var de = 0; de < z.length; de++)
        ce = z[de], Re = re + W(ce, de), Oe += te(
          ce,
          P,
          ue,
          Re,
          Ee
        );
    else if (de = R(z), typeof de == "function")
      for (z = de.call(z), de = 0; !(ce = z.next()).done; )
        ce = ce.value, Re = re + W(ce, de++), Oe += te(
          ce,
          P,
          ue,
          Re,
          Ee
        );
    else if (Re === "object") {
      if (typeof z.then == "function")
        return te(
          V(z),
          P,
          ue,
          ce,
          Ee
        );
      throw P = String(z), Error(
        "Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Oe;
  }
  function F(z, P, ue) {
    if (z == null) return z;
    var ce = [], Ee = 0;
    return te(z, ce, "", "", function(Re) {
      return P.call(ue, Re, Ee++);
    }), ce;
  }
  function le(z) {
    if (z._status === -1) {
      var P = z._result, ue = P();
      ue.then(
        function(ce) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = ce, ue.status === void 0 && (ue.status = "fulfilled", ue.value = ce));
        },
        function(ce) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = ce, ue.status === void 0 && (ue.status = "rejected", ue.reason = ce));
        }
      ), z._status === -1 && (z._status = 0, z._result = ue);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var ge = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var P = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(P)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  };
  function Ce(z) {
    var P = Q.T, ue = {};
    ue.types = P !== null ? P.types : null, Q.T = ue;
    try {
      var ce = z(), Ee = Q.S;
      Ee !== null && Ee(ue, ce), typeof ce == "object" && ce !== null && typeof ce.then == "function" && ce.then(k, ge);
    } catch (Re) {
      ge(Re);
    } finally {
      P !== null && ue.types !== null && (P.types = ue.types), Q.T = P;
    }
  }
  function Le(z) {
    var P = Q.T;
    if (P !== null) {
      var ue = P.types;
      ue === null ? P.types = [z] : ue.indexOf(z) === -1 && ue.push(z);
    } else Ce(Le.bind(null, z));
  }
  var et = {
    map: F,
    forEach: function(z, P, ue) {
      F(
        z,
        function() {
          P.apply(this, arguments);
        },
        ue
      );
    },
    count: function(z) {
      var P = 0;
      return F(z, function() {
        P++;
      }), P;
    },
    toArray: function(z) {
      return F(z, function(P) {
        return P;
      }) || [];
    },
    only: function(z) {
      if (!ee(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return ve.Activity = g, ve.Children = et, ve.Component = $, ve.Fragment = i, ve.Profiler = c, ve.PureComponent = L, ve.StrictMode = u, ve.Suspense = m, ve.ViewTransition = x, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return Q.H.useMemoCache(z);
    }
  }, ve.addTransitionType = Le, ve.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, ve.cacheSignal = function() {
    return null;
  }, ve.cloneElement = function(z, P, ue) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var ce = w({}, z.props), Ee = z.key;
    if (P != null)
      for (Re in P.key !== void 0 && (Ee = "" + P.key), P)
        !J.call(P, Re) || Re === "key" || Re === "__self" || Re === "__source" || Re === "ref" && P.ref === void 0 || (ce[Re] = P[Re]);
    var Re = arguments.length - 2;
    if (Re === 1) ce.children = ue;
    else if (1 < Re) {
      for (var Oe = Array(Re), re = 0; re < Re; re++)
        Oe[re] = arguments[re + 2];
      ce.children = Oe;
    }
    return S(z.type, Ee, ce);
  }, ve.createContext = function(z) {
    return z = {
      $$typeof: d,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: f,
      _context: z
    }, z;
  }, ve.createElement = function(z, P, ue) {
    var ce, Ee = {}, Re = null;
    if (P != null)
      for (ce in P.key !== void 0 && (Re = "" + P.key), P)
        J.call(P, ce) && ce !== "key" && ce !== "__self" && ce !== "__source" && (Ee[ce] = P[ce]);
    var Oe = arguments.length - 2;
    if (Oe === 1) Ee.children = ue;
    else if (1 < Oe) {
      for (var re = Array(Oe), de = 0; de < Oe; de++)
        re[de] = arguments[de + 2];
      Ee.children = re;
    }
    if (z && z.defaultProps)
      for (ce in Oe = z.defaultProps, Oe)
        Ee[ce] === void 0 && (Ee[ce] = Oe[ce]);
    return S(z, Re, Ee);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(z) {
    return { $$typeof: h, render: z };
  }, ve.isValidElement = ee, ve.lazy = function(z) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: z },
      _init: le
    };
  }, ve.memo = function(z, P) {
    return {
      $$typeof: y,
      type: z,
      compare: P === void 0 ? null : P
    };
  }, ve.startTransition = Ce, ve.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, ve.use = function(z) {
    return Q.H.use(z);
  }, ve.useActionState = function(z, P, ue) {
    return Q.H.useActionState(z, P, ue);
  }, ve.useCallback = function(z, P) {
    return Q.H.useCallback(z, P);
  }, ve.useContext = function(z) {
    return Q.H.useContext(z);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(z, P) {
    return Q.H.useDeferredValue(z, P);
  }, ve.useEffect = function(z, P) {
    return Q.H.useEffect(z, P);
  }, ve.useEffectEvent = function(z) {
    return Q.H.useEffectEvent(z);
  }, ve.useId = function() {
    return Q.H.useId();
  }, ve.useImperativeHandle = function(z, P, ue) {
    return Q.H.useImperativeHandle(z, P, ue);
  }, ve.useInsertionEffect = function(z, P) {
    return Q.H.useInsertionEffect(z, P);
  }, ve.useLayoutEffect = function(z, P) {
    return Q.H.useLayoutEffect(z, P);
  }, ve.useMemo = function(z, P) {
    return Q.H.useMemo(z, P);
  }, ve.useOptimistic = function(z, P) {
    return Q.H.useOptimistic(z, P);
  }, ve.useReducer = function(z, P, ue) {
    return Q.H.useReducer(z, P, ue);
  }, ve.useRef = function(z) {
    return Q.H.useRef(z);
  }, ve.useState = function(z) {
    return Q.H.useState(z);
  }, ve.useSyncExternalStore = function(z, P, ue) {
    return Q.H.useSyncExternalStore(
      z,
      P,
      ue
    );
  }, ve.useTransition = function() {
    return Q.H.useTransition();
  }, ve.version = "19.3.1", ve;
}
var l0;
function Jd() {
  return l0 || (l0 = 1, fd.exports = Qx()), fd.exports;
}
var C = Jd();
const pe = /* @__PURE__ */ Pd(C), is = /* @__PURE__ */ Vx({
  __proto__: null,
  default: pe
}, [C]), Kx = "https://registry.npmjs.org", Zx = "https://api.npmjs.org/downloads/point/last-week", Ix = "https://registry.npmjs.org/-/v1/search";
function Px({ searchData: a }) {
  const [r, i] = C.useState(""), [u, c] = C.useState([]), [f, d] = C.useState(!1), [h, m] = C.useState("");
  async function y(T) {
    var U;
    const R = T.trim(), [E, w] = await Promise.all([
      fetch(`${Kx}/${encodeURIComponent(R)}/latest`),
      fetch(`${Zx}/${encodeURIComponent(R)}`)
    ]);
    if (!E.ok) throw new Error(`Package "${R}" was not found`);
    const A = await E.json(), $ = w.ok ? await w.json() : {};
    return {
      name: A.name || R,
      version: A.version || "Unknown",
      description: A.description || "No description available",
      license: A.license || "Not specified",
      weeklyDownloads: $.downloads ?? null,
      deprecated: !!A.deprecated,
      homepage: A.homepage || "",
      repository: typeof A.repository == "object" ? (U = A.repository) == null ? void 0 : U.url : A.repository || ""
    };
  }
  async function b(T, R = "packages") {
    const E = [...new Set(T.map((w) => w.trim()).filter(Boolean))].slice(0, 3);
    if (E.length) {
      d(!0), m(""), c([]);
      try {
        if (R === "alternatives") {
          const A = E[0], $ = await fetch(
            `${Ix}?text=${encodeURIComponent(A)}&size=15`
          );
          if (!$.ok)
            throw new Error("Unable to find alternative packages right now.");
          const U = await $.json(), L = ["dayjs", "date-fns", "luxon"], N = (U.objects || []).map((k) => k.package), G = [
            ...L.map((k) => N.find((Q) => Q.name === k)).filter(Boolean),
            ...N.filter(
              (k) => !L.includes(k.name) && k.name.toLowerCase() !== A.toLowerCase()
            )
          ].slice(0, 3).map((k) => {
            var Q, J;
            return {
              name: k.name,
              version: k.version || "Unknown",
              description: k.description || "No description available",
              license: "See npm",
              weeklyDownloads: null,
              deprecated: !1,
              homepage: ((Q = k.links) == null ? void 0 : Q.homepage) || "",
              repository: ((J = k.links) == null ? void 0 : J.repository) || ""
            };
          });
          if (!G.length)
            throw new Error(`No alternatives found for "${A}".`);
          c(G);
          return;
        }
        const w = await Promise.all(E.map(y));
        c(w);
      } catch (w) {
        m(w.message || "Unable to load package information.");
      } finally {
        d(!1);
      }
    }
  }
  function g(T) {
    var A;
    T.preventDefault();
    const R = r.trim();
    if (/\b(alternatives?|packages like|similar to)\b/i.test(R)) {
      const $ = R.match(
        /(?:alternatives?\s+(?:to|for)|packages?\s+(?:like|similar\s+to))\s+(.+)/i
      ), U = (A = $ == null ? void 0 : $[1]) == null ? void 0 : A.trim().split(/\s+/)[0];
      U ? b([U], "alternatives") : m("Enter a package name to find alternatives.");
      return;
    }
    const w = R.replace(/^npm\s+/i, "").split(/[,\s]+/).filter(Boolean);
    b(w);
  }
  C.useEffect(() => {
    var w;
    if (!a) return;
    const T = Array.isArray(a) ? a[0] : a, E = ((T == null ? void 0 : T.entities) || []).map((A) => A.sourceID || A.word).filter(Boolean);
    if (E.length) {
      const A = (T == null ? void 0 : T.query) || "", $ = /\b(alternatives?|packages like|similar to)\b/i.test(A);
      b(
        $ ? [((w = A.match(/(?:to|for|like)\s+([\w@./-]+)/i)) == null ? void 0 : w[1]) || E[0]] : E,
        $ ? "alternatives" : "packages"
      );
    }
  }, [a]);
  const x = (T) => T == null ? "Unavailable" : T.toLocaleString();
  return /* @__PURE__ */ q.jsxs("main", { className: "pc-shell", children: [
    /* @__PURE__ */ q.jsxs("header", { className: "pc-header", children: [
      /* @__PURE__ */ q.jsxs("div", { className: "pc-brand", children: [
        /* @__PURE__ */ q.jsx("span", { className: "pc-logo", children: "N" }),
        /* @__PURE__ */ q.jsxs("div", { children: [
          /* @__PURE__ */ q.jsx("div", { className: "pc-title", children: "Package Compass" }),
          /* @__PURE__ */ q.jsx("div", { className: "pc-subtitle", children: "Make smarter package choices" })
        ] })
      ] }),
      /* @__PURE__ */ q.jsxs("span", { className: "pc-live", children: [
        /* @__PURE__ */ q.jsx("span", {}),
        " LIVE NPM DATA"
      ] })
    ] }),
    /* @__PURE__ */ q.jsxs("section", { className: "pc-hero", children: [
      /* @__PURE__ */ q.jsx("div", { className: "pc-eyebrow", children: "YOUR DEVELOPER TOOLKIT" }),
      /* @__PURE__ */ q.jsxs("h1", { children: [
        "Find your perfect",
        /* @__PURE__ */ q.jsx("br", {}),
        /* @__PURE__ */ q.jsx("span", { children: "package match." })
      ] }),
      /* @__PURE__ */ q.jsx("p", { children: "Explore packages, compare versions and discover what fits your next project." }),
      /* @__PURE__ */ q.jsxs("form", { className: "pc-search", onSubmit: g, children: [
        /* @__PURE__ */ q.jsx("span", { children: "⌕" }),
        /* @__PURE__ */ q.jsx(
          "input",
          {
            value: r,
            onChange: (T) => i(T.target.value),
            placeholder: "Try express, fastify",
            "aria-label": "Package names separated by commas"
          }
        ),
        /* @__PURE__ */ q.jsx("button", { disabled: f || !r.trim(), children: f ? "Loading…" : "Explore ↗" })
      ] }),
      /* @__PURE__ */ q.jsx("div", { className: "pc-hint", children: "Try: react, express, fastify · Up to 3 packages" })
    ] }),
    f && /* @__PURE__ */ q.jsx("div", { className: "pc-message", children: "Fetching the latest package data…" }),
    h && /* @__PURE__ */ q.jsx("div", { className: "pc-error", role: "alert", children: h }),
    !f && !h && u.length === 0 && /* @__PURE__ */ q.jsxs("section", { className: "pc-empty", children: [
      /* @__PURE__ */ q.jsx("div", { className: "pc-empty-icon", children: "⌘" }),
      /* @__PURE__ */ q.jsx("h2", { children: "Your next dependency starts here" }),
      /* @__PURE__ */ q.jsx("p", { children: "Search for an npm package to see its version, usage and key details." }),
      /* @__PURE__ */ q.jsx("div", { className: "pc-examples", children: ["react", "express", "vite"].map((T) => /* @__PURE__ */ q.jsxs("button", { onClick: () => {
        i(T), b([T]);
      }, children: [
        T,
        " ↗"
      ] }, T)) })
    ] }),
    u.length > 0 && /* @__PURE__ */ q.jsxs("section", { className: "pc-results", children: [
      /* @__PURE__ */ q.jsxs("div", { className: "pc-section-heading", children: [
        /* @__PURE__ */ q.jsxs("div", { children: [
          /* @__PURE__ */ q.jsx("div", { className: "pc-eyebrow", children: "REGISTRY RESULTS" }),
          /* @__PURE__ */ q.jsx("h2", { children: u.length > 1 ? "Compare packages" : "Package overview" })
        ] }),
        /* @__PURE__ */ q.jsxs("span", { className: "pc-count", children: [
          u.length,
          " package",
          u.length > 1 ? "s" : ""
        ] })
      ] }),
      /* @__PURE__ */ q.jsx("div", { className: "pc-grid", children: u.map((T) => /* @__PURE__ */ q.jsxs("article", { className: "pc-card", children: [
        /* @__PURE__ */ q.jsxs("div", { className: "pc-card-top", children: [
          /* @__PURE__ */ q.jsx("span", { className: "pc-package-icon", children: T.name.slice(0, 1).toUpperCase() }),
          /* @__PURE__ */ q.jsx("span", { className: T.deprecated ? "pc-badge pc-badge-danger" : "pc-badge", children: T.deprecated ? "Deprecated" : "Published" })
        ] }),
        /* @__PURE__ */ q.jsx("h3", { children: T.name }),
        /* @__PURE__ */ q.jsx("p", { className: "pc-description", children: T.description }),
        /* @__PURE__ */ q.jsxs("div", { className: "pc-version", children: [
          "↗ Latest version ",
          /* @__PURE__ */ q.jsx("strong", { children: T.version })
        ] }),
        /* @__PURE__ */ q.jsxs("div", { className: "pc-stats", children: [
          /* @__PURE__ */ q.jsxs("div", { children: [
            /* @__PURE__ */ q.jsx("span", { children: "WEEKLY DOWNLOADS" }),
            /* @__PURE__ */ q.jsx("strong", { children: x(T.weeklyDownloads) })
          ] }),
          /* @__PURE__ */ q.jsxs("div", { children: [
            /* @__PURE__ */ q.jsx("span", { children: "LICENSE" }),
            /* @__PURE__ */ q.jsx("strong", { children: T.license })
          ] })
        ] }),
        /* @__PURE__ */ q.jsxs("div", { className: "pc-links", children: [
          T.homepage && /* @__PURE__ */ q.jsx("a", { href: T.homepage, target: "_blank", rel: "noreferrer", children: "Homepage ↗" }),
          /* @__PURE__ */ q.jsx("a", { href: `https://www.npmjs.com/package/${encodeURIComponent(T.name)}`, target: "_blank", rel: "noreferrer", children: "npm page ↗" })
        ] })
      ] }, T.name)) }),
      u.length > 1 && /* @__PURE__ */ q.jsxs("div", { className: "pc-table-wrap", children: [
        /* @__PURE__ */ q.jsx("h3", { children: "At a glance" }),
        /* @__PURE__ */ q.jsxs("table", { className: "pc-table", children: [
          /* @__PURE__ */ q.jsx("thead", { children: /* @__PURE__ */ q.jsxs("tr", { children: [
            /* @__PURE__ */ q.jsx("th", { children: "Package" }),
            /* @__PURE__ */ q.jsx("th", { children: "Version" }),
            /* @__PURE__ */ q.jsx("th", { children: "Weekly downloads" }),
            /* @__PURE__ */ q.jsx("th", { children: "License" })
          ] }) }),
          /* @__PURE__ */ q.jsx("tbody", { children: u.map((T) => /* @__PURE__ */ q.jsxs("tr", { children: [
            /* @__PURE__ */ q.jsx("td", { children: T.name }),
            /* @__PURE__ */ q.jsx("td", { children: T.version }),
            /* @__PURE__ */ q.jsx("td", { children: x(T.weeklyDownloads) }),
            /* @__PURE__ */ q.jsx("td", { children: T.license })
          ] }, T.name)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ q.jsxs("footer", { className: "pc-footer", children: [
      /* @__PURE__ */ q.jsx("span", { children: "PACKAGE COMPASS" }),
      /* @__PURE__ */ q.jsx("span", { children: "Powered by the public npm registry" })
    ] }),
    /* @__PURE__ */ q.jsx("style", { children: `
        .pc-shell{font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:var(--hd-text, #e9edf7);background:var(--hd-surface,#10131d);border:1px solid var(--hd-border,#272c3b);border-radius:20px;overflow:hidden;width:100%;max-width:100%;box-sizing:border-box}
        .pc-shell *{box-sizing:border-box}
        .pc-header{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:18px 22px;border-bottom:1px solid var(--hd-border,#272c3b)}
        .pc-brand{display:flex;align-items:center;gap:11px}.pc-logo{display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:#b8f36b;color:#17220b;font-weight:900;font-size:21px}
        .pc-title{font-weight:800;letter-spacing:-.3px}.pc-subtitle{font-size:11px;color:var(--hd-muted,#929bb0);margin-top:3px}
        .pc-live{font-size:9px;font-weight:800;letter-spacing:.7px;color:#a8ed72;white-space:nowrap}.pc-live span{display:inline-block;width:6px;height:6px;border-radius:50%;background:#a8ed72;margin-right:5px}
        .pc-hero{padding:26px 22px 22px;background:radial-gradient(ellipse at 85% 0%,#293d3a 0%,transparent 55%),var(--hd-surface,#10131d)}
        .pc-eyebrow{font-size:9px;font-weight:800;letter-spacing:1.6px;color:#a8ed72}
        .pc-hero h1{font-size:clamp(27px,5vw,42px);line-height:1.08;letter-spacing:-1.8px;margin:12px 0}
        .pc-hero h1 span{color:#b8f36b}.pc-hero>p{font-size:12px;line-height:1.7;color:var(--hd-muted,#a2aabe);max-width:360px}
        .pc-search{display:flex;align-items:center;gap:9px;padding:6px;background:var(--hd-input,#202534);border:1px solid #394252;border-radius:12px;margin-top:20px}
        .pc-search>span{font-size:22px;color:#9da6b9;padding-left:7px}.pc-search input{width:100%;min-width:0;background:transparent;border:0;outline:0;color:inherit;font-size:12px}
        .pc-search input::placeholder{color:#858fa4}.pc-search button{border:0;border-radius:8px;padding:11px 13px;background:#b8f36b;color:#19210e;font-size:11px;font-weight:800;white-space:nowrap;cursor:pointer}.pc-search button:disabled{opacity:.6}
        .pc-hint{font-size:10px;color:#828ca0;margin-top:9px}
        .pc-message,.pc-error{margin:18px 22px;padding:14px;border-radius:10px;font-size:12px;background:#202534;color:#cbd3e5}.pc-error{background:#3a2029;color:#ffc0c9}
        .pc-empty{text-align:center;padding:32px 20px 38px}.pc-empty-icon{margin:auto;width:48px;height:48px;border:1px solid #3b4751;border-radius:15px;display:grid;place-items:center;color:#b8f36b;font-size:25px}
        .pc-empty h2{font-size:16px;margin:16px 0 7px}.pc-empty p{font-size:11px;color:var(--hd-muted,#929bb0);line-height:1.6}
        .pc-examples{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:18px}.pc-examples button{background:transparent;color:inherit;border:1px solid #3a4252;border-radius:20px;padding:7px 13px;font-size:10px;cursor:pointer}
        .pc-results{padding:0 22px 22px}.pc-section-heading{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:10px 0 16px}.pc-section-heading h2{font-size:20px;margin:7px 0 0;letter-spacing:-.5px}
        .pc-count{font-size:10px;border:1px solid #394252;border-radius:20px;padding:6px 9px;color:#c5ccda;white-space:nowrap}
        .pc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:12px}
        .pc-card{min-width:0;padding:16px;border:1px solid #303849;border-radius:14px;background:var(--hd-card,#171c28)}
        .pc-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pc-package-icon{width:35px;height:35px;display:grid;place-items:center;border-radius:11px;background:#29392b;color:#b8f36b;font-size:15px;font-weight:900}
        .pc-badge{font-size:9px;color:#b8f36b;background:#273628;padding:5px 8px;border-radius:6px}.pc-badge-danger{color:#ffb2ba;background:#45262e}
        .pc-card h3{font-size:17px;margin:15px 0 6px;overflow-wrap:anywhere}.pc-description{font-size:11px;line-height:1.6;color:#a5aec1;min-height:35px;overflow-wrap:anywhere}
        .pc-version{font-size:10px;color:#9ca6ba;padding:11px 0;border-bottom:1px solid #303849}.pc-version strong{float:right;color:#dce4f2}
        .pc-stats{display:grid;grid-template-columns:1fr 1fr;gap:9px;padding:14px 0}.pc-stats div{min-width:0}.pc-stats span{display:block;font-size:8px;letter-spacing:.5px;color:#8893a8;margin-bottom:7px}.pc-stats strong{display:block;font-size:12px;overflow-wrap:anywhere}
        .pc-links{display:flex;flex-wrap:wrap;gap:12px;padding-top:11px;border-top:1px solid #303849}.pc-links a{color:#b8f36b;font-size:10px;text-decoration:none}
        .pc-table-wrap{margin-top:20px;border:1px solid #303849;border-radius:12px;padding:14px;overflow-x:auto}.pc-table-wrap h3{font-size:13px;margin:0 0 12px}.pc-table{width:100%;border-collapse:collapse;font-size:10px;text-align:left;white-space:nowrap}.pc-table th{color:#929bb0;font-weight:600}.pc-table th,.pc-table td{padding:10px 8px;border-bottom:1px solid #303849}.pc-table td:first-child{font-weight:700}.pc-footer{display:flex;justify-content:space-between;gap:12px;padding:15px 22px;border-top:1px solid var(--hd-border,#272c3b);font-size:9px;color:#828ca0}.pc-footer span:first-child{letter-spacing:1px;font-weight:800}
        @media(max-width:420px){.pc-header,.pc-hero{padding-left:15px;padding-right:15px}.pc-results{padding-left:15px;padding-right:15px}.pc-live{font-size:8px}.pc-footer{padding:13px 15px;font-size:8px}.pc-search button{padding:10px}.pc-card{padding:13px}}
        @media(prefers-color-scheme:light){.pc-shell{color:var(--hd-text,#202536);background:var(--hd-surface,#fff);border-color:var(--hd-border,#e1e5ed)}.pc-hero{background:radial-gradient(ellipse at 85% 0%,#e8f6df 0%,transparent 55%),var(--hd-surface,#fff)}.pc-hero h1{color:#202536}.pc-hero>p,.pc-subtitle,.pc-hint,.pc-empty p{color:#667085}.pc-search{background:#f5f7fa;border-color:#dce1e9}.pc-search input{color:#202536}.pc-card{background:var(--hd-card,#fafbfc);border-color:#e1e5ed}.pc-description,.pc-version{color:#667085}.pc-version strong,.pc-stats strong{color:#202536}.pc-stats span,.pc-table th{color:#667085}.pc-count,.pc-examples button{color:#344054;border-color:#dce1e9}.pc-table-wrap,.pc-table th,.pc-table td,.pc-links,.pc-version{border-color:#e1e5ed}.pc-footer,.pc-header{border-color:#e1e5ed}.pc-logo{background:#263b20;color:#fff}.pc-live{color:#39751c}.pc-live span{background:#39751c}}
      ` })
  ] });
}
/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Fd = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, Sv = /^[\\/]{2}/;
function Jx(a, r) {
  return r + a.replace(/\\/g, "/");
}
var r0 = "popstate";
function i0(a) {
  return typeof a == "object" && a != null && "pathname" in a && "search" in a && "hash" in a && "state" in a && "key" in a;
}
function Fx(a = {}) {
  function r(u, c) {
    var y;
    let f = (y = c.state) == null ? void 0 : y.masked, { pathname: d, search: h, hash: m } = f || u.location;
    return Ud(
      "",
      { pathname: d, search: h, hash: m },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default",
      f ? {
        pathname: u.location.pathname,
        search: u.location.search,
        hash: u.location.hash
      } : void 0
    );
  }
  function i(u, c) {
    return typeof c == "string" ? c : Vr(c);
  }
  return eE(
    r,
    i,
    null,
    a
  );
}
function at(a, r) {
  if (a === !1 || a === null || typeof a > "u")
    throw new Error(r);
}
function aa(a, r) {
  if (!a) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Wx() {
  return Math.random().toString(36).substring(2, 10);
}
function o0(a, r) {
  return {
    usr: a.state,
    key: a.key,
    idx: r,
    masked: a.mask ? {
      pathname: a.pathname,
      search: a.search,
      hash: a.hash
    } : void 0
  };
}
function Ud(a, r, i = null, u, c) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Zr(r) : r,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || u || Wx(),
    mask: c
  };
}
function Vr({
  pathname: a = "/",
  search: r = "",
  hash: i = ""
}) {
  return r && r !== "?" && (a += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (a += i.charAt(0) === "#" ? i : "#" + i), a;
}
function Zr(a) {
  let r = {};
  if (a) {
    let i = a.indexOf("#");
    i >= 0 && (r.hash = a.substring(i), a = a.substring(0, i));
    let u = a.indexOf("?");
    u >= 0 && (r.search = a.substring(u), a = a.substring(0, u)), a && (r.pathname = a);
  }
  return r;
}
function eE(a, r, i, u = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = u, d = c.history, h = "POP", m = null, y = b();
  y == null && (y = 0, d.replaceState({ ...d.state, idx: y }, ""));
  function b() {
    return (d.state || { idx: null }).idx;
  }
  function g() {
    h = "POP";
    let w = b(), A = w == null ? null : w - y;
    y = w, m && m({ action: h, location: E.location, delta: A });
  }
  function x(w, A) {
    h = "PUSH";
    let $ = i0(w) ? w : Ud(E.location, w, A);
    y = b() + 1;
    let U = o0($, y), L = E.createHref($.mask || $);
    try {
      d.pushState(U, "", L);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError")
        throw N;
      c.location.assign(L);
    }
    f && m && m({ action: h, location: E.location, delta: 1 });
  }
  function T(w, A) {
    h = "REPLACE";
    let $ = i0(w) ? w : Ud(E.location, w, A);
    y = b();
    let U = o0($, y), L = E.createHref($.mask || $);
    d.replaceState(U, "", L), f && m && m({ action: h, location: E.location, delta: 0 });
  }
  function R(w) {
    return tE(c, w);
  }
  let E = {
    get action() {
      return h;
    },
    get location() {
      return a(c, d);
    },
    listen(w) {
      if (m)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(r0, g), m = w, () => {
        c.removeEventListener(r0, g), m = null;
      };
    },
    createHref(w) {
      return r(c, w);
    },
    createURL: R,
    encodeLocation(w) {
      let A = R(w);
      return {
        pathname: A.pathname,
        search: A.search,
        hash: A.hash
      };
    },
    push: x,
    replace: T,
    go(w) {
      return d.go(w);
    }
  };
  return E;
}
function tE(a, r, i = !1) {
  let u = "http://localhost";
  a && (u = a.location.origin !== "null" ? a.location.origin : a.location.href), at(u, "No window.location.(origin|href) available to create URL");
  let c = typeof r == "string" ? r : Vr(r);
  return c = c.replace(/ $/, "%20"), !i && Sv.test(c) && (c = u + c), new URL(c, u);
}
function xv(a, r, i = "/") {
  return nE(a, r, i, !1);
}
function nE(a, r, i, u, c) {
  let f = typeof r == "string" ? Zr(r) : r, d = Ra(f.pathname || "/", i);
  if (d == null)
    return null;
  let h = aE(a), m = null, y = hE(d);
  for (let b = 0; m == null && b < h.length; ++b)
    m = pE(
      h[b],
      y,
      u
    );
  return m;
}
function aE(a) {
  let r = Ev(a);
  return lE(r), r;
}
function Ev(a, r = [], i = [], u = "", c = !1) {
  let f = (d, h, m = c, y) => {
    let b = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(u) && m)
        return;
      at(
        b.relativePath.startsWith(u),
        `Absolute route path "${b.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(u.length);
    }
    let g = Un([u, b.relativePath]), x = i.concat(b);
    d.children && d.children.length > 0 && (at(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      d.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
    ), Ev(
      d.children,
      r,
      x,
      g,
      m
    )), !(d.path == null && !d.index) && r.push({
      path: g,
      score: fE(g, d.index),
      routesMeta: x.map((T, R) => {
        let [E, w] = Rv(
          T.relativePath,
          T.caseSensitive,
          R === x.length - 1
        );
        return {
          ...T,
          matcher: E,
          compiledParams: w
        };
      })
    });
  };
  return a.forEach((d, h) => {
    var m;
    if (d.path === "" || !((m = d.path) != null && m.includes("?")))
      f(d, h);
    else
      for (let y of Cv(d.path))
        f(d, h, !0, y);
  }), r;
}
function Cv(a) {
  let r = a.split("/");
  if (r.length === 0) return [];
  let [i, ...u] = r, c = i.endsWith("?"), f = i.replace(/\?$/, "");
  if (u.length === 0)
    return c ? [f, ""] : [f];
  let d = Cv(u.join("/")), h = [];
  return h.push(
    ...d.map(
      (m) => m === "" ? f : [f, m].join("/")
    )
  ), c && h.push(...d), h.map(
    (m) => a.startsWith("/") && m === "" ? "/" : m
  );
}
function lE(a) {
  a.sort(
    (r, i) => r.score !== i.score ? i.score - r.score : dE(
      r.routesMeta.map((u) => u.childrenIndex),
      i.routesMeta.map((u) => u.childrenIndex)
    )
  );
}
var rE = /^:[\w-]+$/, iE = 3, oE = 2, uE = 1, sE = 10, cE = -2, u0 = (a) => a === "*";
function fE(a, r) {
  let i = a.split("/"), u = i.length;
  return i.some(u0) && (u += cE), r && (u += oE), i.filter((c) => !u0(c)).reduce(
    (c, f) => c + (rE.test(f) ? iE : f === "" ? uE : sE),
    u
  );
}
function dE(a, r) {
  return a.length === r.length && a.slice(0, -1).every((u, c) => u === r[c]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function pE(a, r, i = !1) {
  let { routesMeta: u } = a, c = {}, f = "/", d = [];
  for (let h = 0; h < u.length; ++h) {
    let m = u[h], y = h === u.length - 1, b = f === "/" ? r : r.slice(f.length) || "/", g = {
      path: m.relativePath,
      caseSensitive: m.caseSensitive,
      end: y
    }, x = (
      // Use precomputed matcher if it exists
      m.matcher && m.compiledParams ? Tv(
        g,
        b,
        m.matcher,
        m.compiledParams
      ) : os(g, b)
    ), T = m.route;
    if (!x && y && i && !u[u.length - 1].route.index && (x = os(
      {
        path: m.relativePath,
        caseSensitive: m.caseSensitive,
        end: !1
      },
      b
    )), !x)
      return null;
    Object.assign(c, x.params), d.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: Un([f, x.pathname]),
      pathnameBase: yE(
        Un([f, x.pathnameBase])
      ),
      route: T
    }), x.pathnameBase !== "/" && (f = Un([f, x.pathnameBase]));
  }
  return d;
}
function os(a, r) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [i, u] = Rv(
    a.path,
    a.caseSensitive,
    a.end
  );
  return Tv(a, r, i, u);
}
function Tv(a, r, i, u) {
  let c = r.match(i);
  if (!c) return null;
  let f = c[0], d = Gr(f, 1), h = c.slice(1);
  return {
    params: u.reduce(
      (y, { paramName: b, isOptional: g }, x) => {
        if (b === "*") {
          let R = h[x] || "";
          d = Gr(
            f.slice(0, f.length - R.length),
            1
          );
        }
        const T = h[x];
        return g && !T ? y[b] = void 0 : y[b] = (T || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: f,
    pathnameBase: d,
    pattern: a
  };
}
function Rv(a, r = !1, i = !0) {
  aa(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`
  );
  let u = [], c = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, h, m, y, b) => {
      if (u.push({ paramName: h, isOptional: m != null }), m) {
        let g = b.charAt(y + d.length);
        return g && g !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return a.endsWith("*") ? (u.push({ paramName: "*" }), c += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? c += "\\/*$" : a !== "" && a !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), u];
}
function hE(a) {
  try {
    return a.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return aa(
      !1,
      `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), a;
  }
}
function Ra(a, r) {
  if (r === "/") return a;
  if (!a.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let i = r.endsWith("/") ? r.length - 1 : r.length, u = a.charAt(i);
  return u && u !== "/" ? null : a.slice(i) || "/";
}
function mE(a, r = "/") {
  let {
    pathname: i,
    search: u = "",
    hash: c = ""
  } = typeof a == "string" ? Zr(a) : a, f;
  return i ? (i = wv(i), i.startsWith("/") || i.startsWith("\\") ? f = s0(i.substring(1), "/") : f = s0(i, r)) : f = r, {
    pathname: f,
    search: vE(u),
    hash: bE(c)
  };
}
function s0(a, r) {
  let i = Gr(r).split("/");
  return a.split("/").forEach((c) => {
    c === ".." ? i.length > 1 && i.pop() : c !== "." && i.push(c);
  }), i.length > 1 ? i.join("/") : "/";
}
function dd(a, r, i, u) {
  return `Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    u
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function gE(a) {
  return a.filter(
    (r, i) => i === 0 || r.route.path && r.route.path.length > 0
  );
}
function Ov(a) {
  let r = gE(a);
  return r.map(
    (i, u) => u === r.length - 1 ? i.pathname : i.pathnameBase
  );
}
function Wd(a, r, i, u = !1) {
  let c;
  typeof a == "string" ? c = Zr(a) : (c = { ...a }, at(
    !c.pathname || !c.pathname.includes("?"),
    dd("?", "pathname", "search", c)
  ), at(
    !c.pathname || !c.pathname.includes("#"),
    dd("#", "pathname", "hash", c)
  ), at(
    !c.search || !c.search.includes("#"),
    dd("#", "search", "hash", c)
  ));
  let f = a === "" || c.pathname === "", d = f ? "/" : c.pathname, h;
  if (d == null)
    h = i;
  else {
    let g = r.length - 1;
    if (!u && d.startsWith("..")) {
      let x = d.split("/");
      for (; x[0] === ".."; )
        x.shift(), g -= 1;
      c.pathname = x.join("/");
    }
    h = g >= 0 ? r[g] : "/";
  }
  let m = mE(c, h), y = d && d !== "/" && d.endsWith("/"), b = (f || d === ".") && i.endsWith("/");
  return !m.pathname.endsWith("/") && (y || b) && (m.pathname += "/"), m;
}
var wv = (a) => a.replace(/[\\/]{2,}/g, "/"), Un = (a) => wv(a.join("/"));
function Gr(a, r = 0) {
  let i = a.length;
  for (; i > r && a.charCodeAt(i - 1) === 47; )
    i--;
  return i === a.length ? a : a.slice(0, i);
}
var yE = (a) => Gr(a).replace(/^\/*/, "/"), vE = (a) => !a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a, bE = (a) => !a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a, SE = class {
  constructor(a, r, i, u = !1) {
    this.status = a, this.statusText = r || "", this.internal = u, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function xE(a) {
  return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.internal == "boolean" && "data" in a;
}
function EE(a) {
  let r = a.map((i) => i.route.path).filter(Boolean);
  return Un(r) || "/";
}
var Av = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function zv(a, r) {
  let i = a;
  if (typeof i != "string" || !Fd.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let u = i, c = !1;
  if (Av)
    try {
      let f = new URL(window.location.href), d = Sv.test(i) ? new URL(Jx(i, f.protocol)) : new URL(i), h = Ra(d.pathname, r);
      d.origin === f.origin && h != null ? i = h + d.search + d.hash : c = !0;
    } catch {
      aa(
        !1,
        `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: u,
    isExternal: c,
    to: i
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var c0 = new URL("http://localhost");
function Mv(a) {
  if (a.createURL)
    return a.createURL("/");
  try {
    return new URL(a.createHref("/"), c0);
  } catch {
    return c0;
  }
}
function pd(a, r) {
  return a.origin === r.origin && (a.origin !== "null" || a.protocol === r.protocol && a.host === r.host);
}
function CE(a, r) {
  if (a.startsWith("//"))
    return !0;
  let i = r.protocol.toLowerCase();
  return a.toLowerCase().startsWith(i) ? r.host === "" || a.slice(i.length).startsWith("//") : !1;
}
function _v(a, r, i, u) {
  let c = null;
  try {
    c = a == null ? null : new URL(a, i);
  } catch {
  }
  let f = new URL(r, i), d = c != null && !pd(c, i), h = !pd(f, i);
  if (u === "reject") {
    if (d || h)
      throw new Error("External navigation is not allowed");
  } else if (h && (c == null || !CE(a, c) || !pd(c, f)))
    throw new Error("External navigation is not allowed");
}
var Nv = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Nv
);
var TE = [
  "GET",
  ...Nv
];
new Set(TE);
var RE = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  // eslint-disable-next-line no-script-url
  "javascript:"
];
function OE(a) {
  try {
    return RE.includes(new URL(a).protocol);
  } catch {
    return !1;
  }
}
var Ir = C.createContext(null);
Ir.displayName = "DataRouter";
var ms = C.createContext(null);
ms.displayName = "DataRouterState";
var Dv = C.createContext(!1);
function wE() {
  return C.useContext(Dv);
}
var Bv = C.createContext({
  isTransitioning: !1
});
Bv.displayName = "ViewTransition";
var AE = C.createContext(
  /* @__PURE__ */ new Map()
);
AE.displayName = "Fetchers";
var zE = C.createContext(null);
zE.displayName = "Await";
var On = C.createContext(
  null
);
On.displayName = "Navigation";
var io = C.createContext(
  null
);
io.displayName = "Location";
var wa = C.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
wa.displayName = "Route";
var ep = C.createContext(null);
ep.displayName = "RouteError";
var Uv = "REACT_ROUTER_ERROR", ME = "REDIRECT", _E = "ROUTE_ERROR_RESPONSE";
function NE(a) {
  if (a.startsWith(`${Uv}:${ME}:{`))
    try {
      let r = JSON.parse(a.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function DE(a) {
  if (a.startsWith(
    `${Uv}:${_E}:{`
  ))
    try {
      let r = JSON.parse(a.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new SE(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function BE(a, { relative: r } = {}) {
  at(
    oo(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: u } = C.useContext(On), { hash: c, pathname: f, search: d } = uo(a, { relative: r }), h = f;
  return i !== "/" && (h = f === "/" ? i : Un([i, f])), u.createHref({ pathname: h, search: d, hash: c });
}
function oo() {
  return C.useContext(io) != null;
}
function la() {
  return at(
    oo(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), C.useContext(io).location;
}
var jv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Lv(a) {
  C.useContext(On).static || C.useLayoutEffect(a);
}
function Hv() {
  let { isDataRoute: a } = C.useContext(wa);
  return a ? KE() : UE();
}
function UE() {
  at(
    oo(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = C.useContext(Ir), { basename: r, navigator: i } = C.useContext(On), { matches: u } = C.useContext(wa), { pathname: c } = la(), f = JSON.stringify(Ov(u)), d = C.useRef(!1);
  return Lv(() => {
    d.current = !0;
  }), C.useCallback(
    (m, y = {}) => {
      if (aa(d.current, jv), !d.current) return;
      if (typeof m == "number") {
        i.go(m);
        return;
      }
      let b = Wd(
        m,
        JSON.parse(f),
        c,
        y.relative === "path"
      );
      a == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : Un([r, b.pathname])), _v(
        typeof m == "string" ? m : Vr(m),
        i.createHref(b),
        Mv(i),
        "reject"
      ), (y.replace ? i.replace : i.push)(
        b,
        y.state,
        y
      );
    },
    [
      r,
      i,
      f,
      c,
      a
    ]
  );
}
C.createContext(null);
function uo(a, { relative: r } = {}) {
  let { matches: i } = C.useContext(wa), { pathname: u } = la(), c = JSON.stringify(Ov(i));
  return C.useMemo(
    () => Wd(
      a,
      JSON.parse(c),
      u,
      r === "path"
    ),
    [a, c, u, r]
  );
}
function jE(a, r) {
  return kv(a, r);
}
function kv(a, r, i) {
  var w;
  at(
    oo(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: u } = C.useContext(On), { matches: c } = C.useContext(wa), f = c[c.length - 1], d = f ? f.params : {}, h = f ? f.pathname : "/", m = f ? f.pathnameBase : "/", y = f && f.route;
  {
    let A = y && y.path || "";
    Yv(
      h,
      !y || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`
    );
  }
  let b = la(), g;
  if (r) {
    let A = typeof r == "string" ? Zr(r) : r;
    at(
      m === "/" || ((w = A.pathname) == null ? void 0 : w.startsWith(m)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ), g = A;
  } else
    g = b;
  let x = g.pathname || "/", T = x;
  if (m !== "/") {
    let A = m.replace(/^\//, "").split("/");
    T = "/" + x.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let R = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (A) => Object.assign(A, {
        route: i.manifest[A.route.id] || A.route
      })
    )
  ) : xv(a, { pathname: T });
  aa(
    y || R != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), aa(
    R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let E = YE(
    R && R.map(
      (A) => Object.assign({}, A, {
        params: Object.assign({}, d, A.params),
        pathname: Un([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          u.encodeLocation ? u.encodeLocation(
            A.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : A.pathname
        ]),
        pathnameBase: A.pathnameBase === "/" ? m : Un([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          u.encodeLocation ? u.encodeLocation(
            A.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : A.pathnameBase
        ])
      })
    ),
    c,
    i
  );
  return r && E ? /* @__PURE__ */ C.createElement(
    io.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...g
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    E
  ) : E;
}
function LE() {
  let a = QE(), r = xE(a) ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a), i = a instanceof Error ? a.stack : null, u = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: u }, f = { padding: "2px 4px", backgroundColor: u }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    a
  ), d = /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ C.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ C.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ C.createElement("h3", { style: { fontStyle: "italic" } }, r), i ? /* @__PURE__ */ C.createElement("pre", { style: c }, i) : null, d);
}
var HE = /* @__PURE__ */ C.createElement(LE, null), $v = class extends C.Component {
  constructor(a) {
    super(a), this.state = {
      location: a.location,
      revalidation: a.revalidation,
      error: a.error
    };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  static getDerivedStateFromProps(a, r) {
    return r.location !== a.location || r.revalidation !== "idle" && a.revalidation === "idle" ? {
      error: a.error,
      location: a.location,
      revalidation: a.revalidation
    } : {
      error: a.error !== void 0 ? a.error : r.error,
      location: r.location,
      revalidation: a.revalidation || r.revalidation
    };
  }
  componentDidCatch(a, r) {
    this.props.onError ? this.props.onError(a, r) : console.error(
      "React Router caught the following error during render",
      a
    );
  }
  render() {
    let a = this.state.error;
    if (this.context && typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
      const i = DE(a.digest);
      i && (a = i);
    }
    let r = a !== void 0 ? /* @__PURE__ */ C.createElement(wa.Provider, { value: this.props.routeContext }, /* @__PURE__ */ C.createElement(
      ep.Provider,
      {
        value: a,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ C.createElement(kE, { error: a }, r) : r;
  }
};
$v.contextType = Dv;
var hd = /* @__PURE__ */ new WeakMap();
function kE({
  children: a,
  error: r
}) {
  let { basename: i, navigator: u } = C.useContext(On);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = NE(r.digest);
    if (c) {
      let f = hd.get(r);
      if (f) throw f;
      let d = zv(c.location, i), h = d.absoluteURL || d.to;
      if (_v(
        c.location,
        h,
        Mv(u),
        "allow-explicit"
      ), OE(h))
        throw new Error("Invalid redirect location");
      if (Av && !hd.get(r))
        if (d.isExternal || c.reloadDocument)
          window.location.href = h;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace
            })
          );
          throw hd.set(r, m), m;
        }
      return /* @__PURE__ */ C.createElement("meta", { httpEquiv: "refresh", content: `0;url=${h}` });
    }
  }
  return a;
}
function $E({ routeContext: a, match: r, children: i }) {
  let u = C.useContext(Ir);
  return u && u.static && u.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ C.createElement(wa.Provider, { value: a }, i);
}
function YE(a, r = [], i) {
  let u = i == null ? void 0 : i.state;
  if (a == null) {
    if (!u)
      return null;
    if (u.errors)
      a = u.matches;
    else if (r.length === 0 && !u.initialized && u.matches.length > 0)
      a = u.matches;
    else
      return null;
  }
  let c = a, f = u == null ? void 0 : u.errors;
  if (f != null) {
    let b = c.findIndex(
      (g) => g.route.id && (f == null ? void 0 : f[g.route.id]) !== void 0
    );
    at(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ), c = c.slice(
      0,
      Math.min(c.length, b + 1)
    );
  }
  let d = !1, h = -1;
  if (i && u) {
    d = u.renderFallback;
    for (let b = 0; b < c.length; b++) {
      let g = c[b];
      if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = b), g.route.id) {
        let { loaderData: x, errors: T } = u, R = g.route.loader && !x.hasOwnProperty(g.route.id) && (!T || T[g.route.id] === void 0);
        if (g.route.lazy || R) {
          i.isStatic && (d = !0), h >= 0 ? c = c.slice(0, h + 1) : c = [c[0]];
          break;
        }
      }
    }
  }
  let m = i == null ? void 0 : i.onError, y = u && m ? (b, g) => {
    var x, T;
    m(b, {
      location: u.location,
      params: ((T = (x = u.matches) == null ? void 0 : x[0]) == null ? void 0 : T.params) ?? {},
      pattern: EE(u.matches),
      errorInfo: g
    });
  } : void 0;
  return c.reduceRight(
    (b, g, x) => {
      let T, R = !1, E = null, w = null;
      u && (T = f && g.route.id ? f[g.route.id] : void 0, E = g.route.errorElement || HE, d && (h < 0 && x === 0 ? (Yv(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), R = !0, w = null) : h === x && (R = !0, w = g.route.hydrateFallbackElement || null)));
      let A = r.concat(c.slice(0, x + 1)), $ = () => {
        let U;
        return T ? U = E : R ? U = w : g.route.Component ? U = /* @__PURE__ */ C.createElement(g.route.Component, null) : g.route.element ? U = g.route.element : U = b, /* @__PURE__ */ C.createElement(
          $E,
          {
            match: g,
            routeContext: {
              outlet: b,
              matches: A,
              isDataRoute: u != null
            },
            children: U
          }
        );
      };
      return u && (g.route.ErrorBoundary || g.route.errorElement || x === 0) ? /* @__PURE__ */ C.createElement(
        $v,
        {
          location: u.location,
          revalidation: u.revalidation,
          component: E,
          error: T,
          children: $(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: y
        }
      ) : $();
    },
    null
  );
}
function tp(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qE(a) {
  let r = C.useContext(Ir);
  return at(r, tp(a)), r;
}
function VE(a) {
  let r = C.useContext(ms);
  return at(r, tp(a)), r;
}
function GE(a) {
  let r = C.useContext(wa);
  return at(r, tp(a)), r;
}
function np(a) {
  let r = GE(a), i = r.matches[r.matches.length - 1];
  return at(
    i.route.id,
    `${a} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function XE() {
  return np(
    "useRouteId"
    /* UseRouteId */
  );
}
function QE() {
  var u;
  let a = C.useContext(ep), r = VE(
    "useRouteError"
    /* UseRouteError */
  ), i = np(
    "useRouteError"
    /* UseRouteError */
  );
  return a !== void 0 ? a : (u = r.errors) == null ? void 0 : u[i];
}
function KE() {
  let { router: a } = qE(
    "useNavigate"
    /* UseNavigateStable */
  ), r = np(
    "useNavigate"
    /* UseNavigateStable */
  ), i = C.useRef(!1);
  return Lv(() => {
    i.current = !0;
  }), C.useCallback(
    async (c, f = {}) => {
      aa(i.current, jv), i.current && (typeof c == "number" ? await a.navigate(c) : await a.navigate(c, { fromRouteId: r, ...f }));
    },
    [a, r]
  );
}
var f0 = {};
function Yv(a, r, i) {
  !r && !f0[a] && (f0[a] = !0, aa(!1, i));
}
C.memo(ZE);
function ZE({
  routes: a,
  manifest: r,
  future: i,
  state: u,
  isStatic: c,
  onError: f
}) {
  return kv(a, void 0, {
    manifest: r,
    state: u,
    isStatic: c,
    onError: f
  });
}
function qv(a) {
  at(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function IE({
  basename: a = "/",
  children: r = null,
  location: i,
  navigationType: u = "POP",
  navigator: c,
  static: f = !1,
  useTransitions: d
}) {
  at(
    !oo(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = a.replace(/^\/*/, "/"), m = C.useMemo(
    () => ({
      basename: h,
      navigator: c,
      static: f,
      useTransitions: d,
      future: {}
    }),
    [h, c, f, d]
  );
  typeof i == "string" && (i = Zr(i));
  let {
    pathname: y = "/",
    search: b = "",
    hash: g = "",
    state: x = null,
    key: T = "default",
    mask: R
  } = i, E = C.useMemo(() => {
    let w = Ra(y, h);
    return w == null ? null : {
      location: {
        pathname: w,
        search: b,
        hash: g,
        state: x,
        key: T,
        mask: R
      },
      navigationType: u
    };
  }, [h, y, b, g, x, T, u, R]);
  return aa(
    E != null,
    `<Router basename="${h}"> is not able to match the URL "${y}${b}${g}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ C.createElement(On.Provider, { value: m }, /* @__PURE__ */ C.createElement(io.Provider, { children: r, value: E }));
}
function PE({
  children: a,
  location: r
}) {
  return jE(jd(a), r);
}
function jd(a, r = []) {
  let i = [];
  return C.Children.forEach(a, (u, c) => {
    if (!C.isValidElement(u))
      return;
    let f = [...r, c];
    if (u.type === C.Fragment) {
      i.push.apply(
        i,
        jd(u.props.children, f)
      );
      return;
    }
    at(
      u.type === qv,
      `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), at(
      !u.props.index || !u.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: u.props.id || f.join("-"),
      caseSensitive: u.props.caseSensitive,
      element: u.props.element,
      Component: u.props.Component,
      index: u.props.index,
      path: u.props.path,
      middleware: u.props.middleware,
      loader: u.props.loader,
      action: u.props.action,
      hydrateFallbackElement: u.props.hydrateFallbackElement,
      HydrateFallback: u.props.HydrateFallback,
      errorElement: u.props.errorElement,
      ErrorBoundary: u.props.ErrorBoundary,
      hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
      shouldRevalidate: u.props.shouldRevalidate,
      handle: u.props.handle,
      lazy: u.props.lazy
    };
    u.props.children && (d.children = jd(
      u.props.children,
      f
    )), i.push(d);
  }), i;
}
var es = "get", ts = "application/x-www-form-urlencoded";
function gs(a) {
  return typeof HTMLElement < "u" && a instanceof HTMLElement;
}
function JE(a) {
  return gs(a) && a.tagName.toLowerCase() === "button";
}
function FE(a) {
  return gs(a) && a.tagName.toLowerCase() === "form";
}
function WE(a) {
  return gs(a) && a.tagName.toLowerCase() === "input";
}
function e2(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function t2(a, r) {
  return a.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !e2(a);
}
var Xu = null;
function n2() {
  if (Xu === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Xu = !1;
    } catch {
      Xu = !0;
    }
  return Xu;
}
var a2 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function md(a) {
  return a != null && !a2.has(a) ? (aa(
    !1,
    `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ts}"`
  ), null) : a;
}
function l2(a, r) {
  let i, u, c, f, d;
  if (FE(a)) {
    let h = a.getAttribute("action");
    u = h ? Ra(h, r) : null, i = a.getAttribute("method") || es, c = md(a.getAttribute("enctype")) || ts, f = new FormData(a);
  } else if (JE(a) || WE(a) && (a.type === "submit" || a.type === "image")) {
    let h = a.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = a.getAttribute("formaction") || h.getAttribute("action");
    if (u = m ? Ra(m, r) : null, i = a.getAttribute("formmethod") || h.getAttribute("method") || es, c = md(a.getAttribute("formenctype")) || md(h.getAttribute("enctype")) || ts, f = new FormData(h, a), !n2()) {
      let { name: y, type: b, value: g } = a;
      if (b === "image") {
        let x = y ? `${y}.` : "";
        f.append(`${x}x`, "0"), f.append(`${x}y`, "0");
      } else y && f.append(y, g);
    }
  } else {
    if (gs(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = es, u = null, c = ts, d = a;
  }
  return f && c === "text/plain" && (d = f, f = void 0), { action: u, method: i.toLowerCase(), encType: c, formData: f, body: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ap(a, r) {
  if (a === !1 || a === null || typeof a > "u")
    throw new Error(r);
}
function Vv(a, r, i, u) {
  let c = typeof a == "string" ? new URL(
    a,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : a;
  return i ? c.pathname.endsWith("/") ? c.pathname = `${c.pathname}_.${u}` : c.pathname = `${c.pathname}.${u}` : c.pathname === "/" ? c.pathname = `_root.${u}` : r && Ra(c.pathname, r) === "/" ? c.pathname = `${Gr(r)}/_root.${u}` : c.pathname = `${Gr(c.pathname)}.${u}`, c;
}
async function r2(a, r) {
  if (a.id in r)
    return r[a.id];
  try {
    let i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      a.module
    );
    return r[a.id] = i, i;
  } catch (i) {
    return console.error(
      `Error loading route module \`${a.module}\`, reloading page...`
    ), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function i2(a) {
  return a == null ? !1 : a.href == null ? a.rel === "preload" && typeof a.imageSrcSet == "string" && typeof a.imageSizes == "string" : typeof a.rel == "string" && typeof a.href == "string";
}
async function o2(a, r, i) {
  let u = await Promise.all(
    a.map(async (c) => {
      let f = r.routes[c.route.id];
      if (f) {
        let d = await r2(f, i);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return f2(
    u.flat(1).filter(i2).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function d0(a, r, i, u, c, f) {
  let d = (m, y) => i[y] ? m.route.id !== i[y].route.id : !0, h = (m, y) => {
    var b;
    return (
      // param change, /users/123 -> /users/456
      i[y].pathname !== m.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((b = i[y].route.path) == null ? void 0 : b.endsWith("*")) && i[y].params["*"] !== m.params["*"]
    );
  };
  return f === "assets" ? r.filter(
    (m, y) => d(m, y) || h(m, y)
  ) : f === "data" ? r.filter((m, y) => {
    var g;
    let b = u.routes[m.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (d(m, y) || h(m, y))
      return !0;
    if (m.route.shouldRevalidate) {
      let x = m.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: ((g = i[0]) == null ? void 0 : g.params) || {},
        nextUrl: new URL(a, window.origin),
        nextParams: m.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function u2(a, r, { includeHydrateFallback: i } = {}) {
  return s2(
    a.map((u) => {
      let c = r.routes[u.route.id];
      if (!c) return [];
      let f = [c.module];
      return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), i && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f;
    }).flat(1)
  );
}
function s2(a) {
  return [...new Set(a)];
}
function c2(a) {
  let r = {}, i = Object.keys(a).sort();
  for (let u of i)
    r[u] = a[u];
  return r;
}
function f2(a, r) {
  let i = /* @__PURE__ */ new Set();
  return new Set(r), a.reduce((u, c) => {
    let f = JSON.stringify(c2(c));
    return i.has(f) || (i.add(f), u.push({ key: f, link: c })), u;
  }, []);
}
function lp() {
  let a = C.useContext(Ir);
  return ap(
    a,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), a;
}
function d2() {
  let a = C.useContext(ms);
  return ap(
    a,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), a;
}
var rp = C.createContext(void 0);
rp.displayName = "FrameworkContext";
function ys() {
  let a = C.useContext(rp);
  return ap(
    a,
    "You must render this element inside a <HydratedRouter> element"
  ), a;
}
function p2(a, r) {
  let i = C.useContext(rp), [u, c] = C.useState(!1), [f, d] = C.useState(!1), { onFocus: h, onBlur: m, onMouseEnter: y, onMouseLeave: b, onTouchStart: g } = r, x = C.useRef(null);
  C.useEffect(() => {
    if (a === "render" && d(!0), a === "viewport") {
      let E = (A) => {
        A.forEach(($) => {
          d($.isIntersecting);
        });
      }, w = new IntersectionObserver(E, { threshold: 0.5 });
      return x.current && w.observe(x.current), () => {
        w.disconnect();
      };
    }
  }, [a]), C.useEffect(() => {
    if (u) {
      let E = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(E);
      };
    }
  }, [u]);
  let T = () => {
    c(!0);
  }, R = () => {
    c(!1), d(!1);
  };
  return i ? a !== "intent" ? [f, x, {}] : [
    f,
    x,
    {
      onFocus: Xi(h, T),
      onBlur: Xi(m, R),
      onMouseEnter: Xi(y, T),
      onMouseLeave: Xi(b, R),
      onTouchStart: Xi(g, T)
    }
  ] : [!1, x, {}];
}
function Xi(a, r) {
  return (i) => {
    a && a(i), i.defaultPrevented || r(i);
  };
}
function h2({ page: a, ...r }) {
  let i = wE(), { nonce: u } = ys(), { router: c } = lp(), f = C.useMemo(
    () => xv(c.routes, a, c.basename),
    [c.routes, a, c.basename]
  );
  return f ? (r.nonce == null && u && (r = { ...r, nonce: u }), i ? /* @__PURE__ */ C.createElement(g2, { page: a, matches: f, ...r }) : /* @__PURE__ */ C.createElement(y2, { page: a, matches: f, ...r })) : null;
}
function m2(a) {
  let { manifest: r, routeModules: i } = ys(), [u, c] = C.useState([]);
  return C.useEffect(() => {
    let f = !1;
    return o2(a, r, i).then(
      (d) => {
        f || c(d);
      }
    ), () => {
      f = !0;
    };
  }, [a, r, i]), u;
}
function g2({
  page: a,
  matches: r,
  ...i
}) {
  let u = la(), { future: c } = ys(), { basename: f } = lp(), d = C.useMemo(() => {
    if (a === u.pathname + u.search + u.hash)
      return [];
    let h = Vv(
      a,
      f,
      c.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), m = !1, y = [];
    for (let b of r)
      typeof b.route.shouldRevalidate == "function" ? m = !0 : y.push(b.route.id);
    return m && y.length > 0 && h.searchParams.set("_routes", y.join(",")), [h.pathname + h.search];
  }, [
    f,
    c.v8_trailingSlashAwareDataRequests,
    a,
    u,
    r
  ]);
  return /* @__PURE__ */ C.createElement(C.Fragment, null, d.map((h) => /* @__PURE__ */ C.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...i })));
}
function y2({
  page: a,
  matches: r,
  ...i
}) {
  let u = la(), { future: c, manifest: f, routeModules: d } = ys(), { basename: h } = lp(), { loaderData: m, matches: y } = d2(), b = C.useMemo(
    () => d0(
      a,
      r,
      y,
      f,
      u,
      "data"
    ),
    [a, r, y, f, u]
  ), g = C.useMemo(
    () => d0(
      a,
      r,
      y,
      f,
      u,
      "assets"
    ),
    [a, r, y, f, u]
  ), x = C.useMemo(() => {
    if (a === u.pathname + u.search + u.hash)
      return [];
    let E = /* @__PURE__ */ new Set(), w = !1;
    if (r.forEach(($) => {
      var L;
      let U = f.routes[$.route.id];
      !U || !U.hasLoader || (!b.some((N) => N.route.id === $.route.id) && $.route.id in m && ((L = d[$.route.id]) != null && L.shouldRevalidate) || U.hasClientLoader ? w = !0 : E.add($.route.id));
    }), E.size === 0)
      return [];
    let A = Vv(
      a,
      h,
      c.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return w && E.size > 0 && A.searchParams.set(
      "_routes",
      r.filter(($) => E.has($.route.id)).map(($) => $.route.id).join(",")
    ), [A.pathname + A.search];
  }, [
    h,
    c.v8_trailingSlashAwareDataRequests,
    m,
    u,
    f,
    b,
    r,
    a,
    d
  ]), T = C.useMemo(
    () => u2(g, f),
    [g, f]
  ), R = m2(g);
  return /* @__PURE__ */ C.createElement(C.Fragment, null, x.map((E) => /* @__PURE__ */ C.createElement("link", { key: E, rel: "prefetch", as: "fetch", href: E, ...i })), T.map((E) => /* @__PURE__ */ C.createElement("link", { key: E, rel: "modulepreload", href: E, ...i })), R.map(({ key: E, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ C.createElement(
      "link",
      {
        key: E,
        nonce: i.nonce,
        ...w,
        crossOrigin: w.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function v2(...a) {
  return (r) => {
    a.forEach((i) => {
      typeof i == "function" ? i(r) : i != null && (i.current = r);
    });
  };
}
var b2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  b2 && (window.__reactRouterVersion = // @ts-expect-error
  "7.18.4");
} catch {
}
function S2({
  basename: a,
  children: r,
  useTransitions: i,
  window: u
}) {
  let c = C.useRef();
  c.current == null && (c.current = Fx({ window: u, v5Compat: !0 }));
  let f = c.current, [d, h] = C.useState({
    action: f.action,
    location: f.location
  }), m = C.useCallback(
    (y) => {
      i === !1 ? h(y) : C.startTransition(() => h(y));
    },
    [i]
  );
  return C.useLayoutEffect(() => f.listen(m), [f, m]), /* @__PURE__ */ C.createElement(
    IE,
    {
      basename: a,
      children: r,
      location: d.location,
      navigationType: d.action,
      navigator: f,
      useTransitions: i
    }
  );
}
var Gv = C.forwardRef(
  function({
    onClick: r,
    discover: i = "render",
    prefetch: u = "none",
    relative: c,
    reloadDocument: f,
    replace: d,
    mask: h,
    state: m,
    target: y,
    to: b,
    preventScrollReset: g,
    viewTransition: x,
    defaultShouldRevalidate: T,
    ...R
  }, E) {
    let { basename: w, navigator: A, useTransitions: $ } = C.useContext(On), U = typeof b == "string" && Fd.test(b), L = zv(b, w);
    b = L.to;
    let N = BE(b, { relative: c }), G = la(), k = null;
    if (h) {
      let W = Wd(
        h,
        [],
        G.mask ? G.mask.pathname : "/",
        !0
      );
      w !== "/" && (W.pathname = W.pathname === "/" ? w : Un([w, W.pathname])), k = A.createHref(W);
    }
    let [Q, J, S] = p2(
      u,
      R
    ), I = T2(b, {
      replace: d,
      mask: h,
      state: m,
      target: y,
      preventScrollReset: g,
      relative: c,
      viewTransition: x,
      defaultShouldRevalidate: T,
      useTransitions: $
    });
    function ee(W) {
      r && r(W), W.defaultPrevented || I(W);
    }
    let ne = !(L.isExternal || f), ie = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ C.createElement(
        "a",
        {
          ...R,
          ...S,
          href: (ne ? k : void 0) || L.absoluteURL || N,
          onClick: ne ? ee : r,
          ref: v2(E, J),
          target: y,
          "data-discover": !U && i === "render" ? "true" : void 0
        }
      )
    );
    return Q && !U ? /* @__PURE__ */ C.createElement(C.Fragment, null, ie, /* @__PURE__ */ C.createElement(h2, { page: N })) : ie;
  }
);
Gv.displayName = "Link";
var x2 = C.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: u = "",
    end: c = !1,
    style: f,
    to: d,
    viewTransition: h,
    children: m,
    ...y
  }, b) {
    let g = uo(d, { relative: y.relative }), x = la(), T = C.useContext(ms), { navigator: R, basename: E } = C.useContext(On), w = T != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    z2(g) && h === !0, A = R.encodeLocation ? R.encodeLocation(g).pathname : g.pathname, $ = x.pathname, U = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
    i || ($ = $.toLowerCase(), U = U ? U.toLowerCase() : null, A = A.toLowerCase()), U && E && (U = Ra(U, E) || U);
    const L = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let N = $ === A || !c && $.startsWith(A) && $.charAt(L) === "/", G = U != null && (U === A || !c && U.startsWith(A) && U.charAt(A.length) === "/"), k = {
      isActive: N,
      isPending: G,
      isTransitioning: w
    }, Q = N ? r : void 0, J;
    typeof u == "function" ? J = u(k) : J = [
      u,
      N ? "active" : null,
      G ? "pending" : null,
      w ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof f == "function" ? f(k) : f;
    return /* @__PURE__ */ C.createElement(
      Gv,
      {
        ...y,
        "aria-current": Q,
        className: J,
        ref: b,
        style: S,
        to: d,
        viewTransition: h
      },
      typeof m == "function" ? m(k) : m
    );
  }
);
x2.displayName = "NavLink";
var E2 = C.forwardRef(
  ({
    discover: a = "render",
    fetcherKey: r,
    navigate: i,
    reloadDocument: u,
    replace: c,
    state: f,
    method: d = es,
    action: h,
    onSubmit: m,
    relative: y,
    preventScrollReset: b,
    viewTransition: g,
    defaultShouldRevalidate: x,
    ...T
  }, R) => {
    let { useTransitions: E } = C.useContext(On), w = w2(), A = A2(h, { relative: y }), $ = d.toLowerCase() === "get" ? "get" : "post", U = typeof h == "string" && Fd.test(h), L = (N) => {
      if (m && m(N), N.defaultPrevented) return;
      N.preventDefault();
      let G = N.nativeEvent.submitter, k = (G == null ? void 0 : G.getAttribute("formmethod")) || d, Q = () => w(G || N.currentTarget, {
        fetcherKey: r,
        method: k,
        navigate: i,
        replace: c,
        state: f,
        relative: y,
        preventScrollReset: b,
        viewTransition: g,
        defaultShouldRevalidate: x
      });
      E && i !== !1 ? C.startTransition(() => Q()) : Q();
    };
    return /* @__PURE__ */ C.createElement(
      "form",
      {
        ref: R,
        method: $,
        action: A,
        onSubmit: u ? m : L,
        ...T,
        "data-discover": !U && a === "render" ? "true" : void 0
      }
    );
  }
);
E2.displayName = "Form";
function C2(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Xv(a) {
  let r = C.useContext(Ir);
  return at(r, C2(a)), r;
}
function T2(a, {
  target: r,
  replace: i,
  mask: u,
  state: c,
  preventScrollReset: f,
  relative: d,
  viewTransition: h,
  defaultShouldRevalidate: m,
  useTransitions: y
} = {}) {
  let b = Hv(), g = la(), x = uo(a, { relative: d });
  return C.useCallback(
    (T) => {
      if (t2(T, r)) {
        T.preventDefault();
        let R = i !== void 0 ? i : Vr(g) === Vr(x), E = () => b(a, {
          replace: R,
          mask: u,
          state: c,
          preventScrollReset: f,
          relative: d,
          viewTransition: h,
          defaultShouldRevalidate: m
        });
        y ? C.startTransition(() => E()) : E();
      }
    },
    [
      g,
      b,
      x,
      i,
      u,
      c,
      r,
      a,
      f,
      d,
      h,
      m,
      y
    ]
  );
}
var R2 = 0, O2 = () => `__${String(++R2)}__`;
function w2() {
  let { router: a } = Xv(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = C.useContext(On), i = XE(), u = a.fetch, c = a.navigate;
  return C.useCallback(
    async (f, d = {}) => {
      let { action: h, method: m, encType: y, formData: b, body: g } = l2(
        f,
        r
      );
      if (d.navigate === !1) {
        let x = d.fetcherKey || O2();
        await u(x, i, d.action || h, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: b,
          body: g,
          formMethod: d.method || m,
          formEncType: d.encType || y,
          flushSync: d.flushSync
        });
      } else
        await c(d.action || h, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: b,
          body: g,
          formMethod: d.method || m,
          formEncType: d.encType || y,
          replace: d.replace,
          state: d.state,
          fromRouteId: i,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition
        });
    },
    [u, c, r, i]
  );
}
function A2(a, { relative: r } = {}) {
  let { basename: i } = C.useContext(On), u = C.useContext(wa);
  at(u, "useFormAction must be used inside a RouteContext");
  let [c] = u.matches.slice(-1), f = { ...uo(a || ".", { relative: r }) }, d = la();
  if (a == null) {
    f.search = d.search;
    let h = new URLSearchParams(f.search), m = h.getAll("index");
    if (m.some((b) => b === "")) {
      h.delete("index"), m.filter((g) => g).forEach((g) => h.append("index", g));
      let b = h.toString();
      f.search = b ? `?${b}` : "";
    }
  }
  return (!a || a === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Un([i, f.pathname])), Vr(f);
}
function z2(a, { relative: r } = {}) {
  let i = C.useContext(Bv);
  at(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = Xv(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = uo(a, { relative: r });
  if (!i.isTransitioning)
    return !1;
  let f = Ra(i.currentLocation.pathname, u) || i.currentLocation.pathname, d = Ra(i.nextLocation.pathname, u) || i.nextLocation.pathname;
  return os(c.pathname, d) != null || os(c.pathname, f) != null;
}
var gd = { exports: {} }, zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p0;
function M2() {
  if (p0) return zt;
  p0 = 1;
  var a = Jd();
  function r(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        g += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var u = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal"), f = Symbol.for("react.recoverable"), d = Symbol.for("react.optimistic_key");
  function h(b, g, x) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: T == null ? null : T === d ? d : "" + T,
      children: b,
      containerInfo: g,
      implementation: x
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(b, g) {
    if (b === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, zt.browser = function(b) {
    return { $$typeof: f, _reason: b };
  }, zt.createPortal = function(b, g) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return h(b, g, null, x);
  }, zt.flushSync = function(b) {
    var g = m.T, x = u.p;
    try {
      if (m.T = null, u.p = 2, b) return b();
    } finally {
      m.T = g, u.p = x, u.d.f();
    }
  }, zt.preconnect = function(b, g) {
    typeof b == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, u.d.C(b, g));
  }, zt.prefetchDNS = function(b) {
    typeof b == "string" && u.d.D(b);
  }, zt.preinit = function(b, g) {
    if (typeof b == "string" && g && typeof g.as == "string") {
      var x = g.as, T = y(x, g.crossOrigin), R = typeof g.integrity == "string" ? g.integrity : void 0, E = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      x === "style" ? u.d.S(
        b,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: T,
          integrity: R,
          fetchPriority: E
        }
      ) : x === "script" && u.d.X(b, {
        crossOrigin: T,
        integrity: R,
        fetchPriority: E,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, zt.preinitModule = function(b, g) {
    if (typeof b == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var x = y(
            g.as,
            g.crossOrigin
          );
          u.d.M(b, {
            crossOrigin: x,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
          });
        }
      } else g == null && u.d.M(b);
  }, zt.preload = function(b, g) {
    if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var x = g.as, T = y(x, g.crossOrigin);
      u.d.L(b, x, {
        crossOrigin: T,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, zt.preloadModule = function(b, g) {
    if (typeof b == "string")
      if (g) {
        var x = y(g.as, g.crossOrigin);
        u.d.m(b, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: x,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
        });
      } else u.d.m(b);
  }, zt.requestFormReset = function(b) {
    u.d.r(b);
  }, zt.unstable_batchedUpdates = function(b, g) {
    return b(g);
  }, zt.useFormState = function(b, g, x) {
    return m.H.useFormState(b, g, x);
  }, zt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, zt.version = "19.3.1", zt;
}
var h0;
function Qv() {
  if (h0) return gd.exports;
  h0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), gd.exports = M2(), gd.exports;
}
var Kv = Qv();
const Qu = /* @__PURE__ */ Pd(Kv), eo = {
  black: "#000",
  white: "#fff"
}, Dr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Br = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ur = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, jr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Lr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Qi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, _2 = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Hl(a, ...r) {
  const i = new URL(`https://mui.com/production-error/?code=${a}`);
  return r.forEach((u) => i.searchParams.append("args[]", u)), `Minified MUI error #${a}; visit ${i} for the full message.`;
}
const ta = "$$material";
function us() {
  return us = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var u in i) ({}).hasOwnProperty.call(i, u) && (a[u] = i[u]);
    }
    return a;
  }, us.apply(null, arguments);
}
function N2(a) {
  if (a.sheet)
    return a.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === a)
      return document.styleSheets[r];
}
function D2(a) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a.key), a.nonce !== void 0 && r.setAttribute("nonce", a.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Zv = /* @__PURE__ */ (function() {
  function a(i) {
    var u = this;
    this._insertTag = function(c) {
      var f;
      u.tags.length === 0 ? u.insertionPoint ? f = u.insertionPoint.nextSibling : u.prepend ? f = u.container.firstChild : f = u.before : f = u.tags[u.tags.length - 1].nextSibling, u.container.insertBefore(c, f), u.tags.push(c);
    }, this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var r = a.prototype;
  return r.hydrate = function(u) {
    u.forEach(this._insertTag);
  }, r.insert = function(u) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(D2(this));
    var c = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = N2(c);
      try {
        f.insertRule(u, f.cssRules.length);
      } catch {
      }
    } else
      c.appendChild(document.createTextNode(u));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(u) {
      var c;
      return (c = u.parentNode) == null ? void 0 : c.removeChild(u);
    }), this.tags = [], this.ctr = 0;
  }, a;
})(), Nt = "-ms-", ss = "-moz-", Be = "-webkit-", Iv = "comm", ip = "rule", op = "decl", B2 = "@import", Pv = "@keyframes", U2 = "@layer", j2 = Math.abs, vs = String.fromCharCode, L2 = Object.assign;
function H2(a, r) {
  return Mt(a, 0) ^ 45 ? (((r << 2 ^ Mt(a, 0)) << 2 ^ Mt(a, 1)) << 2 ^ Mt(a, 2)) << 2 ^ Mt(a, 3) : 0;
}
function Jv(a) {
  return a.trim();
}
function k2(a, r) {
  return (a = r.exec(a)) ? a[0] : a;
}
function Ue(a, r, i) {
  return a.replace(r, i);
}
function Ld(a, r) {
  return a.indexOf(r);
}
function Mt(a, r) {
  return a.charCodeAt(r) | 0;
}
function to(a, r, i) {
  return a.slice(r, i);
}
function Pn(a) {
  return a.length;
}
function up(a) {
  return a.length;
}
function Ku(a, r) {
  return r.push(a), a;
}
function $2(a, r) {
  return a.map(r).join("");
}
var bs = 1, Xr = 1, Fv = 0, Kt = 0, ht = 0, Pr = "";
function Ss(a, r, i, u, c, f, d) {
  return { value: a, root: r, parent: i, type: u, props: c, children: f, line: bs, column: Xr, length: d, return: "" };
}
function Ki(a, r) {
  return L2(Ss("", null, null, "", null, null, 0), a, { length: -a.length }, r);
}
function Y2() {
  return ht;
}
function q2() {
  return ht = Kt > 0 ? Mt(Pr, --Kt) : 0, Xr--, ht === 10 && (Xr = 1, bs--), ht;
}
function sn() {
  return ht = Kt < Fv ? Mt(Pr, Kt++) : 0, Xr++, ht === 10 && (Xr = 1, bs++), ht;
}
function na() {
  return Mt(Pr, Kt);
}
function ns() {
  return Kt;
}
function so(a, r) {
  return to(Pr, a, r);
}
function no(a) {
  switch (a) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Wv(a) {
  return bs = Xr = 1, Fv = Pn(Pr = a), Kt = 0, [];
}
function eb(a) {
  return Pr = "", a;
}
function as(a) {
  return Jv(so(Kt - 1, Hd(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function V2(a) {
  for (; (ht = na()) && ht < 33; )
    sn();
  return no(a) > 2 || no(ht) > 3 ? "" : " ";
}
function G2(a, r) {
  for (; --r && sn() && !(ht < 48 || ht > 102 || ht > 57 && ht < 65 || ht > 70 && ht < 97); )
    ;
  return so(a, ns() + (r < 6 && na() == 32 && sn() == 32));
}
function Hd(a) {
  for (; sn(); )
    switch (ht) {
      // ] ) " '
      case a:
        return Kt;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && Hd(ht);
        break;
      // (
      case 40:
        a === 41 && Hd(a);
        break;
      // \
      case 92:
        sn();
        break;
    }
  return Kt;
}
function X2(a, r) {
  for (; sn() && a + ht !== 57; )
    if (a + ht === 84 && na() === 47)
      break;
  return "/*" + so(r, Kt - 1) + "*" + vs(a === 47 ? a : sn());
}
function Q2(a) {
  for (; !no(na()); )
    sn();
  return so(a, Kt);
}
function K2(a) {
  return eb(ls("", null, null, null, [""], a = Wv(a), 0, [0], a));
}
function ls(a, r, i, u, c, f, d, h, m) {
  for (var y = 0, b = 0, g = d, x = 0, T = 0, R = 0, E = 1, w = 1, A = 1, $ = 0, U = "", L = c, N = f, G = u, k = U; w; )
    switch (R = $, $ = sn()) {
      // (
      case 40:
        if (R != 108 && Mt(k, g - 1) == 58) {
          Ld(k += Ue(as($), "&", "&\f"), "&\f") != -1 && (A = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        k += as($);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        k += V2(R);
        break;
      // \
      case 92:
        k += G2(ns() - 1, 7);
        continue;
      // /
      case 47:
        switch (na()) {
          case 42:
          case 47:
            Ku(Z2(X2(sn(), ns()), r, i), m);
            break;
          default:
            k += "/";
        }
        break;
      // {
      case 123 * E:
        h[y++] = Pn(k) * A;
      // } ; \0
      case 125 * E:
      case 59:
      case 0:
        switch ($) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + b:
            A == -1 && (k = Ue(k, /\f/g, "")), T > 0 && Pn(k) - g && Ku(T > 32 ? g0(k + ";", u, i, g - 1) : g0(Ue(k, " ", "") + ";", u, i, g - 2), m);
            break;
          // @ ;
          case 59:
            k += ";";
          // { rule/at-rule
          default:
            if (Ku(G = m0(k, r, i, y, b, c, h, U, L = [], N = [], g), f), $ === 123)
              if (b === 0)
                ls(k, r, G, G, L, f, g, h, N);
              else
                switch (x === 99 && Mt(k, 3) === 110 ? 100 : x) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ls(a, G, G, u && Ku(m0(a, G, G, 0, 0, c, h, U, c, L = [], g), N), c, N, g, h, u ? L : N);
                    break;
                  default:
                    ls(k, G, G, G, [""], N, 0, h, N);
                }
        }
        y = b = T = 0, E = A = 1, U = k = "", g = d;
        break;
      // :
      case 58:
        g = 1 + Pn(k), T = R;
      default:
        if (E < 1) {
          if ($ == 123)
            --E;
          else if ($ == 125 && E++ == 0 && q2() == 125)
            continue;
        }
        switch (k += vs($), $ * E) {
          // &
          case 38:
            A = b > 0 ? 1 : (k += "\f", -1);
            break;
          // ,
          case 44:
            h[y++] = (Pn(k) - 1) * A, A = 1;
            break;
          // @
          case 64:
            na() === 45 && (k += as(sn())), x = na(), b = g = Pn(U = k += Q2(ns())), $++;
            break;
          // -
          case 45:
            R === 45 && Pn(k) == 2 && (E = 0);
        }
    }
  return f;
}
function m0(a, r, i, u, c, f, d, h, m, y, b) {
  for (var g = c - 1, x = c === 0 ? f : [""], T = up(x), R = 0, E = 0, w = 0; R < u; ++R)
    for (var A = 0, $ = to(a, g + 1, g = j2(E = d[R])), U = a; A < T; ++A)
      (U = Jv(E > 0 ? x[A] + " " + $ : Ue($, /&\f/g, x[A]))) && (m[w++] = U);
  return Ss(a, r, i, c === 0 ? ip : h, m, y, b);
}
function Z2(a, r, i) {
  return Ss(a, r, i, Iv, vs(Y2()), to(a, 2, -2), 0);
}
function g0(a, r, i, u) {
  return Ss(a, r, i, op, to(a, 0, u), to(a, u + 1, -1), u);
}
function $r(a, r) {
  for (var i = "", u = up(a), c = 0; c < u; c++)
    i += r(a[c], c, a, r) || "";
  return i;
}
function I2(a, r, i, u) {
  switch (a.type) {
    case U2:
      if (a.children.length) break;
    case B2:
    case op:
      return a.return = a.return || a.value;
    case Iv:
      return "";
    case Pv:
      return a.return = a.value + "{" + $r(a.children, u) + "}";
    case ip:
      a.value = a.props.join(",");
  }
  return Pn(i = $r(a.children, u)) ? a.return = a.value + "{" + i + "}" : "";
}
function P2(a) {
  var r = up(a);
  return function(i, u, c, f) {
    for (var d = "", h = 0; h < r; h++)
      d += a[h](i, u, c, f) || "";
    return d;
  };
}
function J2(a) {
  return function(r) {
    r.root || (r = r.return) && a(r);
  };
}
function tb(a) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return r[i] === void 0 && (r[i] = a(i)), r[i];
  };
}
var F2 = function(r, i, u) {
  for (var c = 0, f = 0; c = f, f = na(), c === 38 && f === 12 && (i[u] = 1), !no(f); )
    sn();
  return so(r, Kt);
}, W2 = function(r, i) {
  var u = -1, c = 44;
  do
    switch (no(c)) {
      case 0:
        c === 38 && na() === 12 && (i[u] = 1), r[u] += F2(Kt - 1, i, u);
        break;
      case 2:
        r[u] += as(c);
        break;
      case 4:
        if (c === 44) {
          r[++u] = na() === 58 ? "&\f" : "", i[u] = r[u].length;
          break;
        }
      // fallthrough
      default:
        r[u] += vs(c);
    }
  while (c = sn());
  return r;
}, eC = function(r, i) {
  return eb(W2(Wv(r), i));
}, y0 = /* @__PURE__ */ new WeakMap(), tC = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var i = r.value, u = r.parent, c = r.column === u.column && r.line === u.line; u.type !== "rule"; )
      if (u = u.parent, !u) return;
    if (!(r.props.length === 1 && i.charCodeAt(0) !== 58 && !y0.get(u)) && !c) {
      y0.set(r, !0);
      for (var f = [], d = eC(i, f), h = u.props, m = 0, y = 0; m < d.length; m++)
        for (var b = 0; b < h.length; b++, y++)
          r.props[y] = f[m] ? d[m].replace(/&\f/g, h[b]) : h[b] + " " + d[m];
    }
  }
}, nC = function(r) {
  if (r.type === "decl") {
    var i = r.value;
    // charcode for l
    i.charCodeAt(0) === 108 && // charcode for b
    i.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function nb(a, r) {
  switch (H2(a, r)) {
    // color-adjust
    case 5103:
      return Be + "print-" + a + a;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Be + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Be + a + ss + a + Nt + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Be + a + Nt + a + a;
    // order
    case 6165:
      return Be + a + Nt + "flex-" + a + a;
    // align-items
    case 5187:
      return Be + a + Ue(a, /(\w+).+(:[^]+)/, Be + "box-$1$2" + Nt + "flex-$1$2") + a;
    // align-self
    case 5443:
      return Be + a + Nt + "flex-item-" + Ue(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return Be + a + Nt + "flex-line-pack" + Ue(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return Be + a + Nt + Ue(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return Be + a + Nt + Ue(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return Be + "box-" + Ue(a, "-grow", "") + Be + a + Nt + Ue(a, "grow", "positive") + a;
    // transition
    case 4554:
      return Be + Ue(a, /([^-])(transform)/g, "$1" + Be + "$2") + a;
    // cursor
    case 6187:
      return Ue(Ue(Ue(a, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return Ue(a, /(image-set\([^]*)/, Be + "$1$`$1");
    // justify-content
    case 4968:
      return Ue(Ue(a, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + Nt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ue(a, /(.+)-inline(.+)/, Be + "$1$2") + a;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pn(a) - 1 - r > 6) switch (Mt(a, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Mt(a, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Ue(a, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + ss + (Mt(a, r + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~Ld(a, "stretch") ? nb(Ue(a, "stretch", "fill-available"), r) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (Mt(a, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Mt(a, Pn(a) - 3 - (~Ld(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Ue(a, ":", ":" + Be) + a;
        // (inline-)?fl(e)x
        case 101:
          return Ue(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (Mt(a, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + Nt + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (Mt(a, r + 11)) {
        // vertical-l(r)
        case 114:
          return Be + a + Nt + Ue(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return Be + a + Nt + Ue(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return Be + a + Nt + Ue(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return Be + a + Nt + a + a;
  }
  return a;
}
var aC = function(r, i, u, c) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case op:
      r.return = nb(r.value, r.length);
      break;
    case Pv:
      return $r([Ki(r, {
        value: Ue(r.value, "@", "@" + Be)
      })], c);
    case ip:
      if (r.length) return $2(r.props, function(f) {
        switch (k2(f, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return $r([Ki(r, {
              props: [Ue(f, /:(read-\w+)/, ":" + ss + "$1")]
            })], c);
          // :placeholder
          case "::placeholder":
            return $r([Ki(r, {
              props: [Ue(f, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), Ki(r, {
              props: [Ue(f, /:(plac\w+)/, ":" + ss + "$1")]
            }), Ki(r, {
              props: [Ue(f, /:(plac\w+)/, Nt + "input-$1")]
            })], c);
        }
        return "";
      });
  }
}, lC = [aC], ab = function(r) {
  var i = r.key;
  if (i === "css") {
    var u = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(u, function(E) {
      var w = E.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(E), E.setAttribute("data-s", ""));
    });
  }
  var c = r.stylisPlugins || lC, f = {}, d, h = [];
  d = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
    function(E) {
      for (var w = E.getAttribute("data-emotion").split(" "), A = 1; A < w.length; A++)
        f[w[A]] = !0;
      h.push(E);
    }
  );
  var m, y = [tC, nC];
  {
    var b, g = [I2, J2(function(E) {
      b.insert(E);
    })], x = P2(y.concat(c, g)), T = function(w) {
      return $r(K2(w), x);
    };
    m = function(w, A, $, U) {
      b = $, T(w ? w + "{" + A.styles + "}" : A.styles), U && (R.inserted[A.name] = !0);
    };
  }
  var R = {
    key: i,
    sheet: new Zv({
      key: i,
      container: d,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: f,
    registered: {},
    insert: m
  };
  return R.sheet.hydrate(h), R;
}, yd = { exports: {} }, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v0;
function rC() {
  if (v0) return ke;
  v0 = 1;
  var a = typeof Symbol == "function" && Symbol.for, r = a ? Symbol.for("react.element") : 60103, i = a ? Symbol.for("react.portal") : 60106, u = a ? Symbol.for("react.fragment") : 60107, c = a ? Symbol.for("react.strict_mode") : 60108, f = a ? Symbol.for("react.profiler") : 60114, d = a ? Symbol.for("react.provider") : 60109, h = a ? Symbol.for("react.context") : 60110, m = a ? Symbol.for("react.async_mode") : 60111, y = a ? Symbol.for("react.concurrent_mode") : 60111, b = a ? Symbol.for("react.forward_ref") : 60112, g = a ? Symbol.for("react.suspense") : 60113, x = a ? Symbol.for("react.suspense_list") : 60120, T = a ? Symbol.for("react.memo") : 60115, R = a ? Symbol.for("react.lazy") : 60116, E = a ? Symbol.for("react.block") : 60121, w = a ? Symbol.for("react.fundamental") : 60117, A = a ? Symbol.for("react.responder") : 60118, $ = a ? Symbol.for("react.scope") : 60119;
  function U(N) {
    if (typeof N == "object" && N !== null) {
      var G = N.$$typeof;
      switch (G) {
        case r:
          switch (N = N.type, N) {
            case m:
            case y:
            case u:
            case f:
            case c:
            case g:
              return N;
            default:
              switch (N = N && N.$$typeof, N) {
                case h:
                case b:
                case R:
                case T:
                case d:
                  return N;
                default:
                  return G;
              }
          }
        case i:
          return G;
      }
    }
  }
  function L(N) {
    return U(N) === y;
  }
  return ke.AsyncMode = m, ke.ConcurrentMode = y, ke.ContextConsumer = h, ke.ContextProvider = d, ke.Element = r, ke.ForwardRef = b, ke.Fragment = u, ke.Lazy = R, ke.Memo = T, ke.Portal = i, ke.Profiler = f, ke.StrictMode = c, ke.Suspense = g, ke.isAsyncMode = function(N) {
    return L(N) || U(N) === m;
  }, ke.isConcurrentMode = L, ke.isContextConsumer = function(N) {
    return U(N) === h;
  }, ke.isContextProvider = function(N) {
    return U(N) === d;
  }, ke.isElement = function(N) {
    return typeof N == "object" && N !== null && N.$$typeof === r;
  }, ke.isForwardRef = function(N) {
    return U(N) === b;
  }, ke.isFragment = function(N) {
    return U(N) === u;
  }, ke.isLazy = function(N) {
    return U(N) === R;
  }, ke.isMemo = function(N) {
    return U(N) === T;
  }, ke.isPortal = function(N) {
    return U(N) === i;
  }, ke.isProfiler = function(N) {
    return U(N) === f;
  }, ke.isStrictMode = function(N) {
    return U(N) === c;
  }, ke.isSuspense = function(N) {
    return U(N) === g;
  }, ke.isValidElementType = function(N) {
    return typeof N == "string" || typeof N == "function" || N === u || N === y || N === f || N === c || N === g || N === x || typeof N == "object" && N !== null && (N.$$typeof === R || N.$$typeof === T || N.$$typeof === d || N.$$typeof === h || N.$$typeof === b || N.$$typeof === w || N.$$typeof === A || N.$$typeof === $ || N.$$typeof === E);
  }, ke.typeOf = U, ke;
}
var b0;
function iC() {
  return b0 || (b0 = 1, yd.exports = rC()), yd.exports;
}
var vd, S0;
function oC() {
  if (S0) return vd;
  S0 = 1;
  var a = iC(), r = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, i = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, u = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, c = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, f = {};
  f[a.ForwardRef] = u, f[a.Memo] = c;
  function d(R) {
    return a.isMemo(R) ? c : f[R.$$typeof] || r;
  }
  var h = Object.defineProperty, m = Object.getOwnPropertyNames, y = Object.getOwnPropertySymbols, b = Object.getOwnPropertyDescriptor, g = Object.getPrototypeOf, x = Object.prototype;
  function T(R, E, w) {
    if (typeof E != "string") {
      if (x) {
        var A = g(E);
        A && A !== x && T(R, A, w);
      }
      var $ = m(E);
      y && ($ = $.concat(y(E)));
      for (var U = d(R), L = d(E), N = 0; N < $.length; ++N) {
        var G = $[N];
        if (!i[G] && !(w && w[G]) && !(L && L[G]) && !(U && U[G])) {
          var k = b(E, G);
          try {
            h(R, G, k);
          } catch {
          }
        }
      }
    }
    return R;
  }
  return vd = T, vd;
}
oC();
var uC = !0;
function lb(a, r, i) {
  var u = "";
  return i.split(" ").forEach(function(c) {
    a[c] !== void 0 ? r.push(a[c] + ";") : c && (u += c + " ");
  }), u;
}
var sp = function(r, i, u) {
  var c = r.key + "-" + i.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (u === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  uC === !1) && r.registered[c] === void 0 && (r.registered[c] = i.styles);
}, cp = function(r, i, u) {
  sp(r, i, u);
  var c = r.key + "-" + i.name;
  if (r.inserted[i.name] === void 0) {
    var f = i;
    do
      r.insert(i === f ? "." + c : "", f, r.sheet, !0), f = f.next;
    while (f !== void 0);
  }
};
function sC(a) {
  for (var r = 0, i, u = 0, c = a.length; c >= 4; ++u, c -= 4)
    i = a.charCodeAt(u) & 255 | (a.charCodeAt(++u) & 255) << 8 | (a.charCodeAt(++u) & 255) << 16 | (a.charCodeAt(++u) & 255) << 24, i = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), i ^= /* k >>> r: */
    i >>> 24, r = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (c) {
    case 3:
      r ^= (a.charCodeAt(u + 2) & 255) << 16;
    case 2:
      r ^= (a.charCodeAt(u + 1) & 255) << 8;
    case 1:
      r ^= a.charCodeAt(u) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var cC = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, fC = /[A-Z]|^ms/g, dC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, rb = function(r) {
  return r.charCodeAt(1) === 45;
}, x0 = function(r) {
  return r != null && typeof r != "boolean";
}, bd = /* @__PURE__ */ tb(function(a) {
  return rb(a) ? a : a.replace(fC, "-$&").toLowerCase();
}), E0 = function(r, i) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof i == "string")
        return i.replace(dC, function(u, c, f) {
          return Jn = {
            name: c,
            styles: f,
            next: Jn
          }, c;
        });
  }
  return cC[r] !== 1 && !rb(r) && typeof i == "number" && i !== 0 ? i + "px" : i;
};
function ao(a, r, i) {
  if (i == null)
    return "";
  var u = i;
  if (u.__emotion_styles !== void 0)
    return u;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var c = i;
      if (c.anim === 1)
        return Jn = {
          name: c.name,
          styles: c.styles,
          next: Jn
        }, c.name;
      var f = i;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            Jn = {
              name: d.name,
              styles: d.styles,
              next: Jn
            }, d = d.next;
        var h = f.styles + ";";
        return h;
      }
      return pC(a, r, i);
    }
    case "function": {
      if (a !== void 0) {
        var m = Jn, y = i(a);
        return Jn = m, ao(a, r, y);
      }
      break;
    }
  }
  var b = i;
  if (r == null)
    return b;
  var g = r[b];
  return g !== void 0 ? g : b;
}
function pC(a, r, i) {
  var u = "";
  if (Array.isArray(i))
    for (var c = 0; c < i.length; c++)
      u += ao(a, r, i[c]) + ";";
  else
    for (var f in i) {
      var d = i[f];
      if (typeof d != "object") {
        var h = d;
        r != null && r[h] !== void 0 ? u += f + "{" + r[h] + "}" : x0(h) && (u += bd(f) + ":" + E0(f, h) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
        for (var m = 0; m < d.length; m++)
          x0(d[m]) && (u += bd(f) + ":" + E0(f, d[m]) + ";");
      else {
        var y = ao(a, r, d);
        switch (f) {
          case "animation":
          case "animationName": {
            u += bd(f) + ":" + y + ";";
            break;
          }
          default:
            u += f + "{" + y + "}";
        }
      }
    }
  return u;
}
var C0 = /label:\s*([^\s;{]+)\s*(;|$)/g, Jn;
function co(a, r, i) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var u = !0, c = "";
  Jn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0)
    u = !1, c += ao(i, r, f);
  else {
    var d = f;
    c += d[0];
  }
  for (var h = 1; h < a.length; h++)
    if (c += ao(i, r, a[h]), u) {
      var m = f;
      c += m[h];
    }
  C0.lastIndex = 0;
  for (var y = "", b; (b = C0.exec(c)) !== null; )
    y += "-" + b[1];
  var g = sC(c) + y;
  return {
    name: g,
    styles: c,
    next: Jn
  };
}
var hC = function(r) {
  return r();
}, ib = is.useInsertionEffect ? is.useInsertionEffect : !1, ob = ib || hC, T0 = ib || C.useLayoutEffect, ub = /* @__PURE__ */ C.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ab({
    key: "css"
  }) : null
), mC = ub.Provider, fp = function(r) {
  return /* @__PURE__ */ C.forwardRef(function(i, u) {
    var c = C.useContext(ub);
    return r(i, c, u);
  });
}, fo = /* @__PURE__ */ C.createContext({}), dp = {}.hasOwnProperty, kd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gC = function(r, i) {
  var u = {};
  for (var c in i)
    dp.call(i, c) && (u[c] = i[c]);
  return u[kd] = r, u;
}, yC = function(r) {
  var i = r.cache, u = r.serialized, c = r.isStringTag;
  return sp(i, u, c), ob(function() {
    return cp(i, u, c);
  }), null;
}, vC = /* @__PURE__ */ fp(function(a, r, i) {
  var u = a.css;
  typeof u == "string" && r.registered[u] !== void 0 && (u = r.registered[u]);
  var c = a[kd], f = [u], d = "";
  typeof a.className == "string" ? d = lb(r.registered, f, a.className) : a.className != null && (d = a.className + " ");
  var h = co(f, void 0, C.useContext(fo));
  d += r.key + "-" + h.name;
  var m = {};
  for (var y in a)
    dp.call(a, y) && y !== "css" && y !== kd && (m[y] = a[y]);
  return m.className = d, i && (m.ref = i), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(yC, {
    cache: r,
    serialized: h,
    isStringTag: typeof c == "string"
  }), /* @__PURE__ */ C.createElement(c, m));
}), bC = vC, R0 = function(r, i) {
  var u = arguments;
  if (i == null || !dp.call(i, "css"))
    return C.createElement.apply(void 0, u);
  var c = u.length, f = new Array(c);
  f[0] = bC, f[1] = gC(r, i);
  for (var d = 2; d < c; d++)
    f[d] = u[d];
  return C.createElement.apply(null, f);
};
(function(a) {
  var r;
  r || (r = a.JSX || (a.JSX = {}));
})(R0 || (R0 = {}));
var SC = /* @__PURE__ */ fp(function(a, r) {
  var i = a.styles, u = co([i], void 0, C.useContext(fo)), c = C.useRef();
  return T0(function() {
    var f = r.key + "-global", d = new r.sheet.constructor({
      key: f,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), h = !1, m = document.querySelector('style[data-emotion="' + f + " " + u.name + '"]');
    return r.sheet.tags.length && (d.before = r.sheet.tags[0]), m !== null && (h = !0, m.setAttribute("data-emotion", f), d.hydrate([m])), c.current = [d, h], function() {
      d.flush();
    };
  }, [r]), T0(function() {
    var f = c.current, d = f[0], h = f[1];
    if (h) {
      f[1] = !1;
      return;
    }
    if (u.next !== void 0 && cp(r, u.next, !0), d.tags.length) {
      var m = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = m, d.flush();
    }
    r.insert("", u, d, !1);
  }, [r, u.name]), null;
});
function pp() {
  for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
    r[i] = arguments[i];
  return co(r);
}
function po() {
  var a = pp.apply(void 0, arguments), r = "animation-" + a.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + a.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var xC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, EC = /* @__PURE__ */ tb(
  function(a) {
    return xC.test(a) || a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91;
  }
  /* Z+1 */
), CC = EC, TC = function(r) {
  return r !== "theme";
}, O0 = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? CC : TC;
}, w0 = function(r, i, u) {
  var c;
  if (i) {
    var f = i.shouldForwardProp;
    c = r.__emotion_forwardProp && f ? function(d) {
      return r.__emotion_forwardProp(d) && f(d);
    } : f;
  }
  return typeof c != "function" && u && (c = r.__emotion_forwardProp), c;
}, RC = function(r) {
  var i = r.cache, u = r.serialized, c = r.isStringTag;
  return sp(i, u, c), ob(function() {
    return cp(i, u, c);
  }), null;
}, OC = function a(r, i) {
  var u = r.__emotion_real === r, c = u && r.__emotion_base || r, f, d;
  i !== void 0 && (f = i.label, d = i.target);
  var h = w0(r, i, u), m = h || O0(c), y = !m("as");
  return function() {
    var b = arguments, g = u && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (f !== void 0 && g.push("label:" + f + ";"), b[0] == null || b[0].raw === void 0)
      g.push.apply(g, b);
    else {
      var x = b[0];
      g.push(x[0]);
      for (var T = b.length, R = 1; R < T; R++)
        g.push(b[R], x[R]);
    }
    var E = fp(function(w, A, $) {
      var U = y && w.as || c, L = "", N = [], G = w;
      if (w.theme == null) {
        G = {};
        for (var k in w)
          G[k] = w[k];
        G.theme = C.useContext(fo);
      }
      typeof w.className == "string" ? L = lb(A.registered, N, w.className) : w.className != null && (L = w.className + " ");
      var Q = co(g.concat(N), A.registered, G);
      L += A.key + "-" + Q.name, d !== void 0 && (L += " " + d);
      var J = y && h === void 0 ? O0(U) : m, S = {};
      for (var I in w)
        y && I === "as" || J(I) && (S[I] = w[I]);
      return S.className = L, $ && (S.ref = $), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(RC, {
        cache: A,
        serialized: Q,
        isStringTag: typeof U == "string"
      }), /* @__PURE__ */ C.createElement(U, S));
    });
    return E.displayName = f !== void 0 ? f : "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")", E.defaultProps = r.defaultProps, E.__emotion_real = E, E.__emotion_base = c, E.__emotion_styles = g, E.__emotion_forwardProp = h, Object.defineProperty(E, "toString", {
      value: function() {
        return "." + d;
      }
    }), E.withComponent = function(w, A) {
      var $ = a(w, us({}, i, A, {
        shouldForwardProp: w0(E, A, !0)
      }));
      return $.apply(void 0, g);
    }, E;
  };
}, wC = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], $d = OC.bind(null);
wC.forEach(function(a) {
  $d[a] = $d(a);
});
const Sd = /* @__PURE__ */ new Map(), AC = (a, r) => {
  const i = ab(a);
  return i.sheet = new r({
    key: i.key,
    nonce: i.sheet.nonce,
    container: i.sheet.container,
    speedy: i.sheet.isSpeedy,
    prepend: i.sheet.prepend,
    insertionPoint: i.sheet.insertionPoint
  }), i;
};
let al;
if (typeof document == "object" && (al = document.querySelector('[name="emotion-insertion-point"]'), !al)) {
  al = document.createElement("meta"), al.setAttribute("name", "emotion-insertion-point"), al.setAttribute("content", "");
  const a = document.querySelector("head");
  a && a.prepend(al);
}
function zC(a, r) {
  if (a || r) {
    class i extends Zv {
      insert(f, d) {
        return this.key && this.key.endsWith("global") && (this.before = al), super.insert(f, d);
      }
    }
    const u = AC({
      key: "css",
      insertionPoint: a ? al : void 0
    }, i);
    if (r) {
      const c = u.insert;
      u.insert = (...f) => (f[1].styles.match(/^@layer\s+[^{]*$/) || (f[1].styles = `@layer mui {${f[1].styles}}`), c(...f));
    }
    return u;
  }
}
function MC(a) {
  const {
    injectFirst: r,
    enableCssLayer: i,
    children: u
  } = a, c = C.useMemo(() => {
    const f = `${r}-${i}`;
    if (typeof document == "object" && Sd.has(f))
      return Sd.get(f);
    const d = zC(r, i);
    return Sd.set(f, d), d;
  }, [r, i]);
  return c ? /* @__PURE__ */ q.jsx(mC, {
    value: c,
    children: u
  }) : u;
}
function _C(a) {
  return a == null || Object.keys(a).length === 0;
}
function sb(a) {
  const {
    styles: r,
    defaultTheme: i = {}
  } = a, u = typeof r == "function" ? (c) => r(_C(c) ? i : c) : r;
  return /* @__PURE__ */ q.jsx(SC, {
    styles: u
  });
}
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function cb(a, r) {
  return $d(a, r);
}
function NC(a, r) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = r(a.__emotion_styles));
}
const A0 = [];
function ll(a) {
  return A0[0] = a, co(A0);
}
var xd = { exports: {} }, Ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z0;
function DC() {
  if (z0) return Ge;
  z0 = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.view_transition"), T = Symbol.for("react.client.reference");
  function R(E) {
    if (typeof E == "object" && E !== null) {
      var w = E.$$typeof;
      switch (w) {
        case a:
          switch (E = E.type, E) {
            case i:
            case c:
            case u:
            case m:
            case y:
            case x:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case d:
                case h:
                case g:
                case b:
                  return E;
                case f:
                  return E;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  return Ge.ContextConsumer = f, Ge.ContextProvider = d, Ge.Element = a, Ge.ForwardRef = h, Ge.Fragment = i, Ge.Lazy = g, Ge.Memo = b, Ge.Portal = r, Ge.Profiler = c, Ge.StrictMode = u, Ge.Suspense = m, Ge.SuspenseList = y, Ge.isContextConsumer = function(E) {
    return R(E) === f;
  }, Ge.isContextProvider = function(E) {
    return R(E) === d;
  }, Ge.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }, Ge.isForwardRef = function(E) {
    return R(E) === h;
  }, Ge.isFragment = function(E) {
    return R(E) === i;
  }, Ge.isLazy = function(E) {
    return R(E) === g;
  }, Ge.isMemo = function(E) {
    return R(E) === b;
  }, Ge.isPortal = function(E) {
    return R(E) === r;
  }, Ge.isProfiler = function(E) {
    return R(E) === c;
  }, Ge.isStrictMode = function(E) {
    return R(E) === u;
  }, Ge.isSuspense = function(E) {
    return R(E) === m;
  }, Ge.isSuspenseList = function(E) {
    return R(E) === y;
  }, Ge.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === i || E === c || E === u || E === m || E === y || E === x || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === b || E.$$typeof === d || E.$$typeof === f || E.$$typeof === h || E.$$typeof === T || E.getModuleId !== void 0);
  }, Ge.typeOf = R, Ge;
}
var M0;
function BC() {
  return M0 || (M0 = 1, xd.exports = /* @__PURE__ */ DC()), xd.exports;
}
var fb = /* @__PURE__ */ BC();
function Fn(a) {
  if (typeof a != "object" || a === null)
    return !1;
  const r = Object.getPrototypeOf(a);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function db(a) {
  if (/* @__PURE__ */ C.isValidElement(a) || fb.isValidElementType(a) || !Fn(a))
    return a;
  const r = {};
  return Object.keys(a).forEach((i) => {
    r[i] = db(a[i]);
  }), r;
}
function cn(a, r, i = {
  clone: !0
}) {
  const u = i.clone ? {
    ...a
  } : a;
  return Fn(a) && Fn(r) && Object.keys(r).forEach((c) => {
    /* @__PURE__ */ C.isValidElement(r[c]) || fb.isValidElementType(r[c]) ? u[c] = r[c] : Fn(r[c]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(a, c) && Fn(a[c]) ? u[c] = cn(a[c], r[c], i) : i.clone ? u[c] = Fn(r[c]) ? db(r[c]) : r[c] : u[c] = r[c];
  }), u;
}
const UC = (a) => {
  const r = Object.keys(a).map((i) => ({
    key: i,
    val: a[i]
  })) || [];
  return r.sort((i, u) => i.val - u.val), r.reduce((i, u) => ({
    ...i,
    [u.key]: u.val
  }), {});
};
function pb(a) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: i = "px",
    step: u = 5,
    ...c
  } = a, f = UC(r), d = Object.keys(f);
  function h(x) {
    return `@media (min-width:${typeof r[x] == "number" ? r[x] : x}${i})`;
  }
  function m(x) {
    return `@media (max-width:${(typeof r[x] == "number" ? r[x] : x) - u / 100}${i})`;
  }
  function y(x, T) {
    const R = d.indexOf(T);
    return `@media (min-width:${typeof r[x] == "number" ? r[x] : x}${i}) and (max-width:${(R !== -1 && typeof r[d[R]] == "number" ? r[d[R]] : T) - u / 100}${i})`;
  }
  function b(x) {
    return d.indexOf(x) + 1 < d.length ? y(x, d[d.indexOf(x) + 1]) : h(x);
  }
  function g(x) {
    const T = d.indexOf(x);
    return T === 0 ? h(d[1]) : T === d.length - 1 ? m(d[T]) : y(x, d[d.indexOf(x) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: f,
    up: h,
    down: m,
    between: y,
    only: b,
    not: g,
    unit: i,
    ...c
  };
}
function _0(a, r) {
  if (!a.containerQueries)
    return r;
  const i = Object.keys(r).filter((u) => u.startsWith("@container")).sort((u, c) => {
    var d, h;
    const f = /min-width:\s*([0-9.]+)/;
    return +(((d = u.match(f)) == null ? void 0 : d[1]) || 0) - +(((h = c.match(f)) == null ? void 0 : h[1]) || 0);
  });
  return i.length ? i.reduce((u, c) => {
    const f = r[c];
    return delete u[c], u[c] = f, u;
  }, {
    ...r
  }) : r;
}
function jC(a, r) {
  return r === "@" || r.startsWith("@") && (a.some((i) => r.startsWith(`@${i}`)) || !!r.match(/^@\d/));
}
function LC(a, r) {
  const i = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i)
    return null;
  const [, u, c] = i, f = Number.isNaN(+u) ? u || 0 : +u;
  return a.containerQueries(c).up(f);
}
function HC(a) {
  const r = (f, d) => f.replace("@media", d ? `@container ${d}` : "@container");
  function i(f, d) {
    f.up = (...h) => r(a.breakpoints.up(...h), d), f.down = (...h) => r(a.breakpoints.down(...h), d), f.between = (...h) => r(a.breakpoints.between(...h), d), f.only = (...h) => r(a.breakpoints.only(...h), d), f.not = (...h) => {
      const m = r(a.breakpoints.not(...h), d);
      return m.includes("not all and") ? m.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : m;
    };
  }
  const u = {}, c = (f) => (i(u, f), u);
  return i(c), {
    ...a,
    containerQueries: c
  };
}
const kC = {
  borderRadius: 4
};
function Fi(a, r) {
  return r ? cn(a, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : a;
}
const xs = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, N0 = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (a) => `@media (min-width:${xs[a]}px)`
}, $C = {
  containerQueries: (a) => ({
    up: (r) => {
      let i = typeof r == "number" ? r : xs[r] || r;
      return typeof i == "number" && (i = `${i}px`), a ? `@container ${a} (min-width:${i})` : `@container (min-width:${i})`;
    }
  })
};
function Oa(a, r, i) {
  const u = a.theme || {};
  if (Array.isArray(r)) {
    const f = u.breakpoints || N0;
    return r.reduce((d, h, m) => (d[f.up(f.keys[m])] = i(r[m]), d), {});
  }
  if (typeof r == "object") {
    const f = u.breakpoints || N0;
    return Object.keys(r).reduce((d, h) => {
      if (jC(f.keys, h)) {
        const m = LC(u.containerQueries ? u : $C, h);
        m && (d[m] = i(r[h], h));
      } else if (Object.keys(f.values || xs).includes(h)) {
        const m = f.up(h);
        d[m] = i(r[h], h);
      } else {
        const m = h;
        d[m] = r[m];
      }
      return d;
    }, {});
  }
  return i(r);
}
function YC(a = {}) {
  var i;
  return ((i = a.keys) == null ? void 0 : i.reduce((u, c) => {
    const f = a.up(c);
    return u[f] = {}, u;
  }, {})) || {};
}
function D0(a, r) {
  return a.reduce((i, u) => {
    const c = i[u];
    return (!c || Object.keys(c).length === 0) && delete i[u], i;
  }, r);
}
function me(a) {
  if (typeof a != "string")
    throw new Error(Hl(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function Es(a, r, i = !0) {
  if (!r || typeof r != "string")
    return null;
  if (a && a.vars && i) {
    const u = `vars.${r}`.split(".").reduce((c, f) => c && c[f] ? c[f] : null, a);
    if (u != null)
      return u;
  }
  return r.split(".").reduce((u, c) => u && u[c] != null ? u[c] : null, a);
}
function cs(a, r, i, u = i) {
  let c;
  return typeof a == "function" ? c = a(i) : Array.isArray(a) ? c = a[i] || u : c = Es(a, i) || u, r && (c = r(c, u, a)), c;
}
function st(a) {
  const {
    prop: r,
    cssProperty: i = a.prop,
    themeKey: u,
    transform: c
  } = a, f = (d) => {
    if (d[r] == null)
      return null;
    const h = d[r], m = d.theme, y = Es(m, u) || {};
    return Oa(d, h, (g) => {
      let x = cs(y, c, g);
      return g === x && typeof g == "string" && (x = cs(y, c, `${r}${g === "default" ? "" : me(g)}`, g)), i === !1 ? x : {
        [i]: x
      };
    });
  };
  return f.propTypes = {}, f.filterProps = [r], f;
}
function qC(a) {
  const r = {};
  return (i) => (r[i] === void 0 && (r[i] = a(i)), r[i]);
}
const VC = {
  m: "margin",
  p: "padding"
}, GC = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, B0 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, XC = qC((a) => {
  if (a.length > 2)
    if (B0[a])
      a = B0[a];
    else
      return [a];
  const [r, i] = a.split(""), u = VC[r], c = GC[i] || "";
  return Array.isArray(c) ? c.map((f) => u + f) : [u + c];
}), hp = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], mp = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...hp, ...mp];
function ho(a, r, i, u) {
  const c = Es(a, r, !0) ?? i;
  return typeof c == "number" || typeof c == "string" ? (f) => typeof f == "string" ? f : typeof c == "string" ? `calc(${f} * ${c})` : c * f : Array.isArray(c) ? (f) => {
    if (typeof f == "string")
      return f;
    const d = Math.abs(f), h = c[d];
    return f >= 0 ? h : typeof h == "number" ? -h : `-${h}`;
  } : typeof c == "function" ? c : () => {
  };
}
function gp(a) {
  return ho(a, "spacing", 8);
}
function mo(a, r) {
  return typeof r == "string" || r == null ? r : a(r);
}
function QC(a, r) {
  return (i) => a.reduce((u, c) => (u[c] = mo(r, i), u), {});
}
function KC(a, r, i, u) {
  if (!r.includes(i))
    return null;
  const c = XC(i), f = QC(c, u), d = a[i];
  return Oa(a, d, f);
}
function hb(a, r) {
  const i = gp(a.theme);
  return Object.keys(a).map((u) => KC(a, r, u, i)).reduce(Fi, {});
}
function it(a) {
  return hb(a, hp);
}
it.propTypes = {};
it.filterProps = hp;
function ot(a) {
  return hb(a, mp);
}
ot.propTypes = {};
ot.filterProps = mp;
function yp(a = 8, r = gp({
  spacing: a
})) {
  if (a.mui)
    return a;
  const i = (...u) => (u.length === 0 ? [1] : u).map((f) => {
    const d = r(f);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" ");
  return i.mui = !0, i;
}
function Cs(...a) {
  const r = a.reduce((u, c) => (c.filterProps.forEach((f) => {
    u[f] = c;
  }), u), {}), i = (u) => Object.keys(u).reduce((c, f) => r[f] ? Fi(c, r[f](u)) : c, {});
  return i.propTypes = {}, i.filterProps = a.reduce((u, c) => u.concat(c.filterProps), []), i;
}
function Rn(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function wn(a, r) {
  return st({
    prop: a,
    themeKey: "borders",
    transform: r
  });
}
const ZC = wn("border", Rn), IC = wn("borderTop", Rn), PC = wn("borderRight", Rn), JC = wn("borderBottom", Rn), FC = wn("borderLeft", Rn), WC = wn("borderColor"), eT = wn("borderTopColor"), tT = wn("borderRightColor"), nT = wn("borderBottomColor"), aT = wn("borderLeftColor"), lT = wn("outline", Rn), rT = wn("outlineColor"), Ts = (a) => {
  if (a.borderRadius !== void 0 && a.borderRadius !== null) {
    const r = ho(a.theme, "shape.borderRadius", 4), i = (u) => ({
      borderRadius: mo(r, u)
    });
    return Oa(a, a.borderRadius, i);
  }
  return null;
};
Ts.propTypes = {};
Ts.filterProps = ["borderRadius"];
Cs(ZC, IC, PC, JC, FC, WC, eT, tT, nT, aT, Ts, lT, rT);
const Rs = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const r = ho(a.theme, "spacing", 8), i = (u) => ({
      gap: mo(r, u)
    });
    return Oa(a, a.gap, i);
  }
  return null;
};
Rs.propTypes = {};
Rs.filterProps = ["gap"];
const Os = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const r = ho(a.theme, "spacing", 8), i = (u) => ({
      columnGap: mo(r, u)
    });
    return Oa(a, a.columnGap, i);
  }
  return null;
};
Os.propTypes = {};
Os.filterProps = ["columnGap"];
const ws = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const r = ho(a.theme, "spacing", 8), i = (u) => ({
      rowGap: mo(r, u)
    });
    return Oa(a, a.rowGap, i);
  }
  return null;
};
ws.propTypes = {};
ws.filterProps = ["rowGap"];
const iT = st({
  prop: "gridColumn"
}), oT = st({
  prop: "gridRow"
}), uT = st({
  prop: "gridAutoFlow"
}), sT = st({
  prop: "gridAutoColumns"
}), cT = st({
  prop: "gridAutoRows"
}), fT = st({
  prop: "gridTemplateColumns"
}), dT = st({
  prop: "gridTemplateRows"
}), pT = st({
  prop: "gridTemplateAreas"
}), hT = st({
  prop: "gridArea"
});
Cs(Rs, Os, ws, iT, oT, uT, sT, cT, fT, dT, pT, hT);
function Yr(a, r) {
  return r === "grey" ? r : a;
}
const mT = st({
  prop: "color",
  themeKey: "palette",
  transform: Yr
}), gT = st({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Yr
}), yT = st({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Yr
});
Cs(mT, gT, yT);
function un(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const vT = st({
  prop: "width",
  transform: un
}), vp = (a) => {
  if (a.maxWidth !== void 0 && a.maxWidth !== null) {
    const r = (i) => {
      var c, f, d, h, m;
      const u = ((d = (f = (c = a.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.values) == null ? void 0 : d[i]) || xs[i];
      return u ? ((m = (h = a.theme) == null ? void 0 : h.breakpoints) == null ? void 0 : m.unit) !== "px" ? {
        maxWidth: `${u}${a.theme.breakpoints.unit}`
      } : {
        maxWidth: u
      } : {
        maxWidth: un(i)
      };
    };
    return Oa(a, a.maxWidth, r);
  }
  return null;
};
vp.filterProps = ["maxWidth"];
const bT = st({
  prop: "minWidth",
  transform: un
}), ST = st({
  prop: "height",
  transform: un
}), xT = st({
  prop: "maxHeight",
  transform: un
}), ET = st({
  prop: "minHeight",
  transform: un
});
st({
  prop: "size",
  cssProperty: "width",
  transform: un
});
st({
  prop: "size",
  cssProperty: "height",
  transform: un
});
const CT = st({
  prop: "boxSizing"
});
Cs(vT, vp, bT, ST, xT, ET, CT);
const go = {
  // borders
  border: {
    themeKey: "borders",
    transform: Rn
  },
  borderTop: {
    themeKey: "borders",
    transform: Rn
  },
  borderRight: {
    themeKey: "borders",
    transform: Rn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Rn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Rn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Rn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ts
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Yr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Yr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Yr
  },
  // spacing
  p: {
    style: ot
  },
  pt: {
    style: ot
  },
  pr: {
    style: ot
  },
  pb: {
    style: ot
  },
  pl: {
    style: ot
  },
  px: {
    style: ot
  },
  py: {
    style: ot
  },
  padding: {
    style: ot
  },
  paddingTop: {
    style: ot
  },
  paddingRight: {
    style: ot
  },
  paddingBottom: {
    style: ot
  },
  paddingLeft: {
    style: ot
  },
  paddingX: {
    style: ot
  },
  paddingY: {
    style: ot
  },
  paddingInline: {
    style: ot
  },
  paddingInlineStart: {
    style: ot
  },
  paddingInlineEnd: {
    style: ot
  },
  paddingBlock: {
    style: ot
  },
  paddingBlockStart: {
    style: ot
  },
  paddingBlockEnd: {
    style: ot
  },
  m: {
    style: it
  },
  mt: {
    style: it
  },
  mr: {
    style: it
  },
  mb: {
    style: it
  },
  ml: {
    style: it
  },
  mx: {
    style: it
  },
  my: {
    style: it
  },
  margin: {
    style: it
  },
  marginTop: {
    style: it
  },
  marginRight: {
    style: it
  },
  marginBottom: {
    style: it
  },
  marginLeft: {
    style: it
  },
  marginX: {
    style: it
  },
  marginY: {
    style: it
  },
  marginInline: {
    style: it
  },
  marginInlineStart: {
    style: it
  },
  marginInlineEnd: {
    style: it
  },
  marginBlock: {
    style: it
  },
  marginBlockStart: {
    style: it
  },
  marginBlockEnd: {
    style: it
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({
      "@media print": {
        display: a
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Rs
  },
  rowGap: {
    style: ws
  },
  columnGap: {
    style: Os
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: un
  },
  maxWidth: {
    style: vp
  },
  minWidth: {
    transform: un
  },
  height: {
    transform: un
  },
  maxHeight: {
    transform: un
  },
  minHeight: {
    transform: un
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function TT(...a) {
  const r = a.reduce((u, c) => u.concat(Object.keys(c)), []), i = new Set(r);
  return a.every((u) => i.size === Object.keys(u).length);
}
function RT(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function OT() {
  function a(i, u, c, f) {
    const d = {
      [i]: u,
      theme: c
    }, h = f[i];
    if (!h)
      return {
        [i]: u
      };
    const {
      cssProperty: m = i,
      themeKey: y,
      transform: b,
      style: g
    } = h;
    if (u == null)
      return null;
    if (y === "typography" && u === "inherit")
      return {
        [i]: u
      };
    const x = Es(c, y) || {};
    return g ? g(d) : Oa(d, u, (R) => {
      let E = cs(x, b, R);
      return R === E && typeof R == "string" && (E = cs(x, b, `${i}${R === "default" ? "" : me(R)}`, R)), m === !1 ? E : {
        [m]: E
      };
    });
  }
  function r(i) {
    const {
      sx: u,
      theme: c = {},
      nested: f
    } = i || {};
    if (!u)
      return null;
    const d = c.unstable_sxConfig ?? go;
    function h(m) {
      let y = m;
      if (typeof m == "function")
        y = m(c);
      else if (typeof m != "object")
        return m;
      if (!y)
        return null;
      const b = YC(c.breakpoints), g = Object.keys(b);
      let x = b;
      return Object.keys(y).forEach((T) => {
        const R = RT(y[T], c);
        if (R != null)
          if (typeof R == "object")
            if (d[T])
              x = Fi(x, a(T, R, c, d));
            else {
              const E = Oa({
                theme: c
              }, R, (w) => ({
                [T]: w
              }));
              TT(E, R) ? x[T] = r({
                sx: R,
                theme: c,
                nested: !0
              }) : x = Fi(x, E);
            }
          else
            x = Fi(x, a(T, R, c, d));
      }), !f && c.modularCssLayers ? {
        "@layer sx": _0(c, D0(g, x))
      } : _0(c, D0(g, x));
    }
    return Array.isArray(u) ? u.map(h) : h(u);
  }
  return r;
}
const rl = OT();
rl.filterProps = ["sx"];
function wT(a, r) {
  var u;
  const i = this;
  if (i.vars) {
    if (!((u = i.colorSchemes) != null && u[a]) || typeof i.getColorSchemeSelector != "function")
      return {};
    let c = i.getColorSchemeSelector(a);
    return c === "&" ? r : ((c.includes("data-") || c.includes(".")) && (c = `*:where(${c.replace(/\s*&$/, "")}) &`), {
      [c]: r
    });
  }
  return i.palette.mode === a ? r : {};
}
function bp(a = {}, ...r) {
  const {
    breakpoints: i = {},
    palette: u = {},
    spacing: c,
    shape: f = {},
    ...d
  } = a, h = pb(i), m = yp(c);
  let y = cn({
    breakpoints: h,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...u
    },
    spacing: m,
    shape: {
      ...kC,
      ...f
    }
  }, d);
  return y = HC(y), y.applyStyles = wT, y = r.reduce((b, g) => cn(b, g), y), y.unstable_sxConfig = {
    ...go,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(g) {
    return rl({
      sx: g,
      theme: this
    });
  }, y;
}
function AT(a) {
  return Object.keys(a).length === 0;
}
function As(a = null) {
  const r = C.useContext(fo);
  return !r || AT(r) ? a : r;
}
const zT = bp();
function Sp(a = zT) {
  return As(a);
}
function Ed(a) {
  const r = ll(a);
  return a !== r && r.styles ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r) : a;
}
function MT({
  styles: a,
  themeId: r,
  defaultTheme: i = {}
}) {
  const u = Sp(i), c = r && u[r] || u;
  let f = typeof a == "function" ? a(c) : a;
  return c.modularCssLayers && (Array.isArray(f) ? f = f.map((d) => Ed(typeof d == "function" ? d(c) : d)) : f = Ed(f)), /* @__PURE__ */ q.jsx(sb, {
    styles: f
  });
}
const _T = (a) => {
  var u;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = ((u = a == null ? void 0 : a.theme) == null ? void 0 : u.unstable_sxConfig) ?? go;
  return Object.keys(a).forEach((c) => {
    i[c] ? r.systemProps[c] = a[c] : r.otherProps[c] = a[c];
  }), r;
};
function mb(a) {
  const {
    sx: r,
    ...i
  } = a, {
    systemProps: u,
    otherProps: c
  } = _T(i);
  let f;
  return Array.isArray(r) ? f = [u, ...r] : typeof r == "function" ? f = (...d) => {
    const h = r(...d);
    return Fn(h) ? {
      ...u,
      ...h
    } : u;
  } : f = {
    ...u,
    ...r
  }, {
    ...c,
    sx: f
  };
}
const U0 = (a) => a, NT = () => {
  let a = U0;
  return {
    configure(r) {
      a = r;
    },
    generate(r) {
      return a(r);
    },
    reset() {
      a = U0;
    }
  };
}, gb = NT();
function yb(a) {
  var r, i, u = "";
  if (typeof a == "string" || typeof a == "number") u += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var c = a.length;
    for (r = 0; r < c; r++) a[r] && (i = yb(a[r])) && (u && (u += " "), u += i);
  } else for (i in a) a[i] && (u && (u += " "), u += i);
  return u;
}
function je() {
  for (var a, r, i = 0, u = "", c = arguments.length; i < c; i++) (a = arguments[i]) && (r = yb(a)) && (u && (u += " "), u += r);
  return u;
}
function DT(a = {}) {
  const {
    themeId: r,
    defaultTheme: i,
    defaultClassName: u = "MuiBox-root",
    generateClassName: c
  } = a, f = cb("div", {
    shouldForwardProp: (h) => h !== "theme" && h !== "sx" && h !== "as"
  })(rl);
  return /* @__PURE__ */ C.forwardRef(function(m, y) {
    const b = Sp(i), {
      className: g,
      component: x = "div",
      ...T
    } = mb(m);
    return /* @__PURE__ */ q.jsx(f, {
      as: x,
      ref: y,
      className: je(g, c ? c(u) : u),
      theme: r && b[r] || b,
      ...T
    });
  });
}
const BT = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function fn(a, r, i = "Mui") {
  const u = BT[r];
  return u ? `${i}-${u}` : `${gb.generate(a)}-${r}`;
}
function Zt(a, r, i = "Mui") {
  const u = {};
  return r.forEach((c) => {
    u[c] = fn(a, c, i);
  }), u;
}
function vb(a) {
  const {
    variants: r,
    ...i
  } = a, u = {
    variants: r,
    style: ll(i),
    isProcessed: !0
  };
  return u.style === i || r && r.forEach((c) => {
    typeof c.style != "function" && (c.style = ll(c.style));
  }), u;
}
const UT = bp();
function Cd(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function jl(a, r) {
  return r && a && typeof a == "object" && a.styles && !a.styles.startsWith("@layer") && (a.styles = `@layer ${r}{${String(a.styles)}}`), a;
}
function jT(a) {
  return a ? (r, i) => i[a] : null;
}
function LT(a, r, i) {
  a.theme = $T(a.theme) ? i : a.theme[r] || a.theme;
}
function rs(a, r, i) {
  const u = typeof r == "function" ? r(a) : r;
  if (Array.isArray(u))
    return u.flatMap((c) => rs(a, c, i));
  if (Array.isArray(u == null ? void 0 : u.variants)) {
    let c;
    if (u.isProcessed)
      c = i ? jl(u.style, i) : u.style;
    else {
      const {
        variants: f,
        ...d
      } = u;
      c = i ? jl(ll(d), i) : d;
    }
    return bb(a, u.variants, [c], i);
  }
  return u != null && u.isProcessed ? i ? jl(ll(u.style), i) : u.style : i ? jl(ll(u), i) : u;
}
function bb(a, r, i = [], u = void 0) {
  var f;
  let c;
  e: for (let d = 0; d < r.length; d += 1) {
    const h = r[d];
    if (typeof h.props == "function") {
      if (c ?? (c = {
        ...a,
        ...a.ownerState,
        ownerState: a.ownerState
      }), !h.props(c))
        continue;
    } else
      for (const m in h.props)
        if (a[m] !== h.props[m] && ((f = a.ownerState) == null ? void 0 : f[m]) !== h.props[m])
          continue e;
    typeof h.style == "function" ? (c ?? (c = {
      ...a,
      ...a.ownerState,
      ownerState: a.ownerState
    }), i.push(u ? jl(ll(h.style(c)), u) : h.style(c))) : i.push(u ? jl(ll(h.style), u) : h.style);
  }
  return i;
}
function HT(a = {}) {
  const {
    themeId: r,
    defaultTheme: i = UT,
    rootShouldForwardProp: u = Cd,
    slotShouldForwardProp: c = Cd
  } = a;
  function f(h) {
    LT(h, r, i);
  }
  return (h, m = {}) => {
    NC(h, (G) => G.filter((k) => k !== rl));
    const {
      name: y,
      slot: b,
      skipVariantsResolver: g,
      skipSx: x,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: T = jT(qT(b)),
      ...R
    } = m, E = y && y.startsWith("Mui") || b ? "components" : "custom", w = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      b && b !== "Root" && b !== "root" || !1
    ), A = x || !1;
    let $ = Cd;
    b === "Root" || b === "root" ? $ = u : b ? $ = c : YT(h) && ($ = void 0);
    const U = cb(h, {
      shouldForwardProp: $,
      label: kT(),
      ...R
    }), L = (G) => {
      if (G.__emotion_real === G)
        return G;
      if (typeof G == "function")
        return function(Q) {
          return rs(Q, G, Q.theme.modularCssLayers ? E : void 0);
        };
      if (Fn(G)) {
        const k = vb(G);
        return function(J) {
          return k.variants ? rs(J, k, J.theme.modularCssLayers ? E : void 0) : J.theme.modularCssLayers ? jl(k.style, E) : k.style;
        };
      }
      return G;
    }, N = (...G) => {
      const k = [], Q = G.map(L), J = [];
      if (k.push(f), y && T && J.push(function(ne) {
        var te, F;
        const W = (F = (te = ne.theme.components) == null ? void 0 : te[y]) == null ? void 0 : F.styleOverrides;
        if (!W)
          return null;
        const V = {};
        for (const le in W)
          V[le] = rs(ne, W[le], ne.theme.modularCssLayers ? "theme" : void 0);
        return T(ne, V);
      }), y && !w && J.push(function(ne) {
        var V, te;
        const ie = ne.theme, W = (te = (V = ie == null ? void 0 : ie.components) == null ? void 0 : V[y]) == null ? void 0 : te.variants;
        return W ? bb(ne, W, [], ne.theme.modularCssLayers ? "theme" : void 0) : null;
      }), A || J.push(rl), Array.isArray(Q[0])) {
        const ee = Q.shift(), ne = new Array(k.length).fill(""), ie = new Array(J.length).fill("");
        let W;
        W = [...ne, ...ee, ...ie], W.raw = [...ne, ...ee.raw, ...ie], k.unshift(W);
      }
      const S = [...k, ...Q, ...J], I = U(...S);
      return h.muiName && (I.muiName = h.muiName), I;
    };
    return U.withConfig && (N.withConfig = U.withConfig), N;
  };
}
function kT(a, r) {
  return void 0;
}
function $T(a) {
  for (const r in a)
    return !1;
  return !0;
}
function YT(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96;
}
function qT(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
function lo(a, r) {
  const i = {
    ...r
  };
  for (const u in a)
    if (Object.prototype.hasOwnProperty.call(a, u)) {
      const c = u;
      if (c === "components" || c === "slots")
        i[c] = {
          ...a[c],
          ...i[c]
        };
      else if (c === "componentsProps" || c === "slotProps") {
        const f = a[c], d = r[c];
        if (!d)
          i[c] = f || {};
        else if (!f)
          i[c] = d;
        else {
          i[c] = {
            ...d
          };
          for (const h in f)
            if (Object.prototype.hasOwnProperty.call(f, h)) {
              const m = h;
              i[c][m] = lo(f[m], d[m]);
            }
        }
      } else i[c] === void 0 && (i[c] = a[c]);
    }
  return i;
}
function VT(a) {
  const {
    theme: r,
    name: i,
    props: u
  } = a;
  return !r || !r.components || !r.components[i] || !r.components[i].defaultProps ? u : lo(r.components[i].defaultProps, u);
}
const Qr = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function GT(a, r, i, u, c) {
  const [f, d] = C.useState(() => c && i ? i(a).matches : u ? u(a).matches : r);
  return Qr(() => {
    if (!i)
      return;
    const h = i(a), m = () => {
      d(h.matches);
    };
    return m(), h.addEventListener("change", m), () => {
      h.removeEventListener("change", m);
    };
  }, [a, i]), f;
}
const XT = {
  ...is
}, Sb = XT.useSyncExternalStore;
function QT(a, r, i, u, c) {
  const f = C.useCallback(() => r, [r]), d = C.useMemo(() => {
    if (c && i)
      return () => i(a).matches;
    if (u !== null) {
      const {
        matches: b
      } = u(a);
      return () => b;
    }
    return f;
  }, [f, a, u, c, i]), [h, m] = C.useMemo(() => {
    if (i === null)
      return [f, () => () => {
      }];
    const b = i(a);
    return [() => b.matches, (g) => (b.addEventListener("change", g), () => {
      b.removeEventListener("change", g);
    })];
  }, [f, i, a]);
  return Sb(m, h, d);
}
function xb(a = {}) {
  const {
    themeId: r
  } = a;
  return function(u, c = {}) {
    let f = As();
    f && r && (f = f[r] || f);
    const d = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: h = !1,
      matchMedia: m = d ? window.matchMedia : null,
      ssrMatchMedia: y = null,
      noSsr: b = !1
    } = VT({
      name: "MuiUseMediaQuery",
      props: c,
      theme: f
    });
    let g = typeof u == "function" ? u(f) : u;
    return g = g.replace(/^@media( ?)/m, ""), g.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Sb !== void 0 ? QT : GT)(g, h, m, y, b);
  };
}
xb();
function KT(a, r = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a, i));
}
function xp(a, r = 0, i = 1) {
  return KT(a, r, i);
}
function ZT(a) {
  a = a.slice(1);
  const r = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let i = a.match(r);
  return i && i[0].length === 1 && (i = i.map((u) => u + u)), i ? `rgb${i.length === 4 ? "a" : ""}(${i.map((u, c) => c < 3 ? parseInt(u, 16) : Math.round(parseInt(u, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function il(a) {
  if (a.type)
    return a;
  if (a.charAt(0) === "#")
    return il(ZT(a));
  const r = a.indexOf("("), i = a.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(Hl(9, a));
  let u = a.substring(r + 1, a.length - 1), c;
  if (i === "color") {
    if (u = u.split(" "), c = u.shift(), u.length === 4 && u[3].charAt(0) === "/" && (u[3] = u[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(c))
      throw new Error(Hl(10, c));
  } else
    u = u.split(",");
  return u = u.map((f) => parseFloat(f)), {
    type: i,
    values: u,
    colorSpace: c
  };
}
const IT = (a) => {
  const r = il(a);
  return r.values.slice(0, 3).map((i, u) => r.type.includes("hsl") && u !== 0 ? `${i}%` : i).join(" ");
}, Ii = (a, r) => {
  try {
    return IT(a);
  } catch {
    return a;
  }
};
function zs(a) {
  const {
    type: r,
    colorSpace: i
  } = a;
  let {
    values: u
  } = a;
  return r.includes("rgb") ? u = u.map((c, f) => f < 3 ? parseInt(c, 10) : c) : r.includes("hsl") && (u[1] = `${u[1]}%`, u[2] = `${u[2]}%`), r.includes("color") ? u = `${i} ${u.join(" ")}` : u = `${u.join(", ")}`, `${r}(${u})`;
}
function Eb(a) {
  a = il(a);
  const {
    values: r
  } = a, i = r[0], u = r[1] / 100, c = r[2] / 100, f = u * Math.min(c, 1 - c), d = (y, b = (y + i / 30) % 12) => c - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let h = "rgb";
  const m = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return a.type === "hsla" && (h += "a", m.push(r[3])), zs({
    type: h,
    values: m
  });
}
function Yd(a) {
  a = il(a);
  let r = a.type === "hsl" || a.type === "hsla" ? il(Eb(a)).values : a.values;
  return r = r.map((i) => (a.type !== "color" && (i /= 255), i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function PT(a, r) {
  const i = Yd(a), u = Yd(r);
  return (Math.max(i, u) + 0.05) / (Math.min(i, u) + 0.05);
}
function Wn(a, r) {
  return a = il(a), r = xp(r), (a.type === "rgb" || a.type === "hsl") && (a.type += "a"), a.type === "color" ? a.values[3] = `/${r}` : a.values[3] = r, zs(a);
}
function Zu(a, r, i) {
  try {
    return Wn(a, r);
  } catch {
    return a;
  }
}
function Ep(a, r) {
  if (a = il(a), r = xp(r), a.type.includes("hsl"))
    a.values[2] *= 1 - r;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] *= 1 - r;
  return zs(a);
}
function Qe(a, r, i) {
  try {
    return Ep(a, r);
  } catch {
    return a;
  }
}
function Cp(a, r) {
  if (a = il(a), r = xp(r), a.type.includes("hsl"))
    a.values[2] += (100 - a.values[2]) * r;
  else if (a.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] += (255 - a.values[i]) * r;
  else if (a.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      a.values[i] += (1 - a.values[i]) * r;
  return zs(a);
}
function Ke(a, r, i) {
  try {
    return Cp(a, r);
  } catch {
    return a;
  }
}
function JT(a, r = 0.15) {
  return Yd(a) > 0.5 ? Ep(a, r) : Cp(a, r);
}
function Iu(a, r, i) {
  try {
    return JT(a, r);
  } catch {
    return a;
  }
}
function j0(...a) {
  return a.reduce((r, i) => i == null ? r : function(...c) {
    r.apply(this, c), i.apply(this, c);
  }, () => {
  });
}
function FT(a, r = 166) {
  let i;
  function u(...c) {
    const f = () => {
      a.apply(this, c);
    };
    clearTimeout(i), i = setTimeout(f, r);
  }
  return u.clear = () => {
    clearTimeout(i);
  }, u;
}
function kl(a) {
  return a && a.ownerDocument || document;
}
function Kr(a) {
  return kl(a).defaultView || window;
}
function L0(a, r) {
  typeof a == "function" ? a(r) : a && (a.current = r);
}
let H0 = 0;
function WT(a) {
  const [r, i] = C.useState(a), u = a || r;
  return C.useEffect(() => {
    r == null && (H0 += 1, i(`mui-${H0}`));
  }, [r]), u;
}
const e5 = {
  ...is
}, k0 = e5.useId;
function Tp(a) {
  if (k0 !== void 0) {
    const r = k0();
    return a ?? r;
  }
  return WT(a);
}
function qr(a) {
  const r = C.useRef(a);
  return Qr(() => {
    r.current = a;
  }), C.useRef((...i) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...i)
  )).current;
}
function ol(...a) {
  const r = C.useRef(void 0), i = C.useCallback((u) => {
    const c = a.map((f) => {
      if (f == null)
        return null;
      if (typeof f == "function") {
        const d = f, h = d(u);
        return typeof h == "function" ? h : () => {
          d(null);
        };
      }
      return f.current = u, () => {
        f.current = null;
      };
    });
    return () => {
      c.forEach((f) => f == null ? void 0 : f());
    };
  }, a);
  return C.useMemo(() => a.every((u) => u == null) ? null : (u) => {
    r.current && (r.current(), r.current = void 0), u != null && (r.current = i(u));
  }, a);
}
const $0 = {};
function Cb(a, r) {
  const i = C.useRef($0);
  return i.current === $0 && (i.current = a(r)), i;
}
const t5 = [];
function n5(a) {
  C.useEffect(a, t5);
}
class Rp {
  constructor() {
    Nr(this, "currentId", null);
    Nr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Nr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Rp();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, i) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, i();
    }, r);
  }
}
function a5() {
  const a = Cb(Rp.create).current;
  return n5(a.disposeEffect), a;
}
function Y0(a) {
  try {
    return a.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function l5(a = window) {
  const r = a.document.documentElement.clientWidth;
  return a.innerWidth - r;
}
const Tb = (a) => {
  const r = C.useRef({});
  return C.useEffect(() => {
    r.current = a;
  }), r.current;
};
function An(a, r, i = void 0) {
  const u = {};
  for (const c in a) {
    const f = a[c];
    let d = "", h = !0;
    for (let m = 0; m < f.length; m += 1) {
      const y = f[m];
      y && (d += (h === !0 ? "" : " ") + r(y), h = !1, i && i[y] && (d += " " + i[y]));
    }
    u[c] = d;
  }
  return u;
}
function r5(a) {
  return typeof a == "string";
}
function i5(a, r, i) {
  return a === void 0 || r5(a) ? r : {
    ...r,
    ownerState: {
      ...r.ownerState,
      ...i
    }
  };
}
function Rb(a, r = []) {
  if (a === void 0)
    return {};
  const i = {};
  return Object.keys(a).filter((u) => u.match(/^on[A-Z]/) && typeof a[u] == "function" && !r.includes(u)).forEach((u) => {
    i[u] = a[u];
  }), i;
}
function q0(a) {
  if (a === void 0)
    return {};
  const r = {};
  return Object.keys(a).filter((i) => !(i.match(/^on[A-Z]/) && typeof a[i] == "function")).forEach((i) => {
    r[i] = a[i];
  }), r;
}
function o5(a) {
  const {
    getSlotProps: r,
    additionalProps: i,
    externalSlotProps: u,
    externalForwardedProps: c,
    className: f
  } = a;
  if (!r) {
    const T = je(i == null ? void 0 : i.className, f, c == null ? void 0 : c.className, u == null ? void 0 : u.className), R = {
      ...i == null ? void 0 : i.style,
      ...c == null ? void 0 : c.style,
      ...u == null ? void 0 : u.style
    }, E = {
      ...i,
      ...c,
      ...u
    };
    return T.length > 0 && (E.className = T), Object.keys(R).length > 0 && (E.style = R), {
      props: E,
      internalRef: void 0
    };
  }
  const d = Rb({
    ...c,
    ...u
  }), h = q0(u), m = q0(c), y = r(d), b = je(y == null ? void 0 : y.className, i == null ? void 0 : i.className, f, c == null ? void 0 : c.className, u == null ? void 0 : u.className), g = {
    ...y == null ? void 0 : y.style,
    ...i == null ? void 0 : i.style,
    ...c == null ? void 0 : c.style,
    ...u == null ? void 0 : u.style
  }, x = {
    ...y,
    ...i,
    ...m,
    ...h
  };
  return b.length > 0 && (x.className = b), Object.keys(g).length > 0 && (x.style = g), {
    props: x,
    internalRef: y.ref
  };
}
function u5(a, r, i) {
  return typeof a == "function" ? a(r, i) : a;
}
function Ms(a) {
  var r;
  return parseInt(C.version, 10) >= 19 ? ((r = a == null ? void 0 : a.props) == null ? void 0 : r.ref) || null : (a == null ? void 0 : a.ref) || null;
}
const Ob = /* @__PURE__ */ C.createContext(null);
function Op() {
  return C.useContext(Ob);
}
const s5 = typeof Symbol == "function" && Symbol.for, c5 = s5 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function f5(a, r) {
  return typeof r == "function" ? r(a) : {
    ...a,
    ...r
  };
}
function d5(a) {
  const {
    children: r,
    theme: i
  } = a, u = Op(), c = C.useMemo(() => {
    const f = u === null ? {
      ...i
    } : f5(u, i);
    return f != null && (f[c5] = u !== null), f;
  }, [i, u]);
  return /* @__PURE__ */ q.jsx(Ob.Provider, {
    value: c,
    children: r
  });
}
const wb = /* @__PURE__ */ C.createContext();
function p5({
  value: a,
  ...r
}) {
  return /* @__PURE__ */ q.jsx(wb.Provider, {
    value: a ?? !0,
    ...r
  });
}
const h5 = () => C.useContext(wb) ?? !1, Ab = /* @__PURE__ */ C.createContext(void 0);
function m5({
  value: a,
  children: r
}) {
  return /* @__PURE__ */ q.jsx(Ab.Provider, {
    value: a,
    children: r
  });
}
function g5(a) {
  const {
    theme: r,
    name: i,
    props: u
  } = a;
  if (!r || !r.components || !r.components[i])
    return u;
  const c = r.components[i];
  return c.defaultProps ? lo(c.defaultProps, u) : !c.styleOverrides && !c.variants ? lo(c, u) : u;
}
function y5({
  props: a,
  name: r
}) {
  const i = C.useContext(Ab);
  return g5({
    props: a,
    name: r,
    theme: {
      components: i
    }
  });
}
function v5(a) {
  const r = As(), i = Tp() || "", {
    modularCssLayers: u
  } = a;
  let c = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !u || r !== null ? c = "" : typeof u == "string" ? c = u.replace(/mui(?!\.)/g, c) : c = `@layer ${c};`, Qr(() => {
    var h, m;
    const f = document.querySelector("head");
    if (!f)
      return;
    const d = f.firstChild;
    if (c) {
      if (d && ((h = d.hasAttribute) != null && h.call(d, "data-mui-layer-order")) && d.getAttribute("data-mui-layer-order") === i)
        return;
      const y = document.createElement("style");
      y.setAttribute("data-mui-layer-order", i), y.textContent = c, f.prepend(y);
    } else
      (m = f.querySelector(`style[data-mui-layer-order="${i}"]`)) == null || m.remove();
  }, [c, i]), c ? /* @__PURE__ */ q.jsx(MT, {
    styles: c
  }) : null;
}
const V0 = {};
function G0(a, r, i, u = !1) {
  return C.useMemo(() => {
    const c = a && r[a] || r;
    if (typeof i == "function") {
      const f = i(c), d = a ? {
        ...r,
        [a]: f
      } : f;
      return u ? () => d : d;
    }
    return a ? {
      ...r,
      [a]: i
    } : {
      ...r,
      ...i
    };
  }, [a, r, i, u]);
}
function zb(a) {
  const {
    children: r,
    theme: i,
    themeId: u
  } = a, c = As(V0), f = Op() || V0, d = G0(u, c, i), h = G0(u, f, i, !0), m = (u ? d[u] : d).direction === "rtl", y = v5(d);
  return /* @__PURE__ */ q.jsx(d5, {
    theme: h,
    children: /* @__PURE__ */ q.jsx(fo.Provider, {
      value: d,
      children: /* @__PURE__ */ q.jsx(p5, {
        value: m,
        children: /* @__PURE__ */ q.jsxs(m5, {
          value: u ? d[u].components : d.components,
          children: [y, r]
        })
      })
    })
  });
}
const X0 = {
  theme: void 0
};
function b5(a) {
  let r, i;
  return function(c) {
    let f = r;
    return (f === void 0 || c.theme !== i) && (X0.theme = c.theme, f = vb(a(X0)), r = f, i = c.theme), f;
  };
}
const wp = "mode", Ap = "color-scheme", S5 = "data-color-scheme";
function x5(a) {
  const {
    defaultMode: r = "system",
    defaultLightColorScheme: i = "light",
    defaultDarkColorScheme: u = "dark",
    modeStorageKey: c = wp,
    colorSchemeStorageKey: f = Ap,
    attribute: d = S5,
    colorSchemeNode: h = "document.documentElement",
    nonce: m
  } = a || {};
  let y = "", b = d;
  if (d === "class" && (b = ".%s"), d === "data" && (b = "[data-%s]"), b.startsWith(".")) {
    const x = b.substring(1);
    y += `${h}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${h}.classList.add('${x}'.replace('%s', colorScheme));`;
  }
  const g = b.match(/\[([^\]]+)\]/);
  if (g) {
    const [x, T] = g[1].split("=");
    T || (y += `${h}.removeAttribute('${x}'.replace('%s', light));
      ${h}.removeAttribute('${x}'.replace('%s', dark));`), y += `
      ${h}.setAttribute('${x}'.replace('%s', colorScheme), ${T ? `${T}.replace('%s', colorScheme)` : '""'});`;
  } else
    y += `${h}.setAttribute('${b}', colorScheme);`;
  return /* @__PURE__ */ q.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? m : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${c}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${u}';
  const light = localStorage.getItem('${f}-light') || '${i}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${y}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function E5() {
}
const C5 = ({
  key: a,
  storageWindow: r
}) => (!r && typeof window < "u" && (r = window), {
  get(i) {
    if (typeof window > "u")
      return;
    if (!r)
      return i;
    let u;
    try {
      u = r.localStorage.getItem(a);
    } catch {
    }
    return u || i;
  },
  set: (i) => {
    if (r)
      try {
        r.localStorage.setItem(a, i);
      } catch {
      }
  },
  subscribe: (i) => {
    if (!r)
      return E5;
    const u = (c) => {
      const f = c.newValue;
      c.key === a && i(f);
    };
    return r.addEventListener("storage", u), () => {
      r.removeEventListener("storage", u);
    };
  }
});
function Td() {
}
function Q0(a) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && a === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Mb(a, r) {
  if (a.mode === "light" || a.mode === "system" && a.systemMode === "light")
    return r("light");
  if (a.mode === "dark" || a.mode === "system" && a.systemMode === "dark")
    return r("dark");
}
function T5(a) {
  return Mb(a, (r) => {
    if (r === "light")
      return a.lightColorScheme;
    if (r === "dark")
      return a.darkColorScheme;
  });
}
function R5(a) {
  const {
    defaultMode: r = "light",
    defaultLightColorScheme: i,
    defaultDarkColorScheme: u,
    supportedColorSchemes: c = [],
    modeStorageKey: f = wp,
    colorSchemeStorageKey: d = Ap,
    storageWindow: h = typeof window > "u" ? void 0 : window,
    storageManager: m = C5,
    noSsr: y = !1
  } = a, b = c.join(","), g = c.length > 1, x = C.useMemo(() => m == null ? void 0 : m({
    key: f,
    storageWindow: h
  }), [m, f, h]), T = C.useMemo(() => m == null ? void 0 : m({
    key: `${d}-light`,
    storageWindow: h
  }), [m, d, h]), R = C.useMemo(() => m == null ? void 0 : m({
    key: `${d}-dark`,
    storageWindow: h
  }), [m, d, h]), [E, w] = C.useState(() => {
    const Q = (x == null ? void 0 : x.get(r)) || r, J = (T == null ? void 0 : T.get(i)) || i, S = (R == null ? void 0 : R.get(u)) || u;
    return {
      mode: Q,
      systemMode: Q0(Q),
      lightColorScheme: J,
      darkColorScheme: S
    };
  }), [A, $] = C.useState(y || !g);
  C.useEffect(() => {
    $(!0);
  }, []);
  const U = T5(E), L = C.useCallback((Q) => {
    w((J) => {
      if (Q === J.mode)
        return J;
      const S = Q ?? r;
      return x == null || x.set(S), {
        ...J,
        mode: S,
        systemMode: Q0(S)
      };
    });
  }, [x, r]), N = C.useCallback((Q) => {
    Q ? typeof Q == "string" ? Q && !b.includes(Q) ? console.error(`\`${Q}\` does not exist in \`theme.colorSchemes\`.`) : w((J) => {
      const S = {
        ...J
      };
      return Mb(J, (I) => {
        I === "light" && (T == null || T.set(Q), S.lightColorScheme = Q), I === "dark" && (R == null || R.set(Q), S.darkColorScheme = Q);
      }), S;
    }) : w((J) => {
      const S = {
        ...J
      }, I = Q.light === null ? i : Q.light, ee = Q.dark === null ? u : Q.dark;
      return I && (b.includes(I) ? (S.lightColorScheme = I, T == null || T.set(I)) : console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)), ee && (b.includes(ee) ? (S.darkColorScheme = ee, R == null || R.set(ee)) : console.error(`\`${ee}\` does not exist in \`theme.colorSchemes\`.`)), S;
    }) : w((J) => (T == null || T.set(i), R == null || R.set(u), {
      ...J,
      lightColorScheme: i,
      darkColorScheme: u
    }));
  }, [b, T, R, i, u]), G = C.useCallback((Q) => {
    E.mode === "system" && w((J) => {
      const S = Q != null && Q.matches ? "dark" : "light";
      return J.systemMode === S ? J : {
        ...J,
        systemMode: S
      };
    });
  }, [E.mode]), k = C.useRef(G);
  return k.current = G, C.useEffect(() => {
    if (typeof window.matchMedia != "function" || !g)
      return;
    const Q = (...S) => k.current(...S), J = window.matchMedia("(prefers-color-scheme: dark)");
    return J.addListener(Q), Q(J), () => {
      J.removeListener(Q);
    };
  }, [g]), C.useEffect(() => {
    if (g) {
      const Q = (x == null ? void 0 : x.subscribe((I) => {
        (!I || ["light", "dark", "system"].includes(I)) && L(I || r);
      })) || Td, J = (T == null ? void 0 : T.subscribe((I) => {
        (!I || b.match(I)) && N({
          light: I
        });
      })) || Td, S = (R == null ? void 0 : R.subscribe((I) => {
        (!I || b.match(I)) && N({
          dark: I
        });
      })) || Td;
      return () => {
        Q(), J(), S();
      };
    }
  }, [N, L, b, r, h, g, x, T, R]), {
    ...E,
    mode: A ? E.mode : void 0,
    systemMode: A ? E.systemMode : void 0,
    colorScheme: A ? U : void 0,
    setMode: L,
    setColorScheme: N
  };
}
const O5 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function w5(a) {
  const {
    themeId: r,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: i = {},
    modeStorageKey: u = wp,
    colorSchemeStorageKey: c = Ap,
    disableTransitionOnChange: f = !1,
    defaultColorScheme: d,
    resolveTheme: h
  } = a, m = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, y = /* @__PURE__ */ C.createContext(void 0), b = () => C.useContext(y) || m, g = {}, x = {};
  function T(A) {
    var ia, Yl, sl, ql;
    const {
      children: $,
      theme: U,
      modeStorageKey: L = u,
      colorSchemeStorageKey: N = c,
      disableTransitionOnChange: G = f,
      storageManager: k,
      storageWindow: Q = typeof window > "u" ? void 0 : window,
      documentNode: J = typeof document > "u" ? void 0 : document,
      colorSchemeNode: S = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: I = !1,
      disableStyleSheetGeneration: ee = !1,
      defaultMode: ne = "system",
      noSsr: ie
    } = A, W = C.useRef(!1), V = Op(), te = C.useContext(y), F = !!te && !I, le = C.useMemo(() => U || (typeof i == "function" ? i() : i), [U]), ge = le[r], Ce = ge || le, {
      colorSchemes: Le = g,
      components: et = x,
      cssVarPrefix: z
    } = Ce, P = Object.keys(Le).filter((yt) => !!Le[yt]).join(","), ue = C.useMemo(() => P.split(","), [P]), ce = typeof d == "string" ? d : d.light, Ee = typeof d == "string" ? d : d.dark, Re = Le[ce] && Le[Ee] ? ne : ((Yl = (ia = Le[Ce.defaultColorScheme]) == null ? void 0 : ia.palette) == null ? void 0 : Yl.mode) || ((sl = Ce.palette) == null ? void 0 : sl.mode), {
      mode: Oe,
      setMode: re,
      systemMode: de,
      lightColorScheme: kt,
      darkColorScheme: jn,
      colorScheme: Ln,
      setColorScheme: Dt
    } = R5({
      supportedColorSchemes: ue,
      defaultLightColorScheme: ce,
      defaultDarkColorScheme: Ee,
      modeStorageKey: L,
      colorSchemeStorageKey: N,
      defaultMode: Re,
      storageManager: k,
      storageWindow: Q,
      noSsr: ie
    });
    let Ie = Oe, be = Ln;
    F && (Ie = te.mode, be = te.colorScheme);
    const gt = C.useMemo(() => {
      var oa;
      const yt = be || Ce.defaultColorScheme, tt = ((oa = Ce.generateThemeVars) == null ? void 0 : oa.call(Ce)) || Ce.vars, Et = {
        ...Ce,
        components: et,
        colorSchemes: Le,
        cssVarPrefix: z,
        vars: tt
      };
      if (typeof Et.generateSpacing == "function" && (Et.spacing = Et.generateSpacing()), yt) {
        const It = Le[yt];
        It && typeof It == "object" && Object.keys(It).forEach((hn) => {
          It[hn] && typeof It[hn] == "object" ? Et[hn] = {
            ...Et[hn],
            ...It[hn]
          } : Et[hn] = It[hn];
        });
      }
      return h ? h(Et) : Et;
    }, [Ce, be, et, Le, z]), $t = Ce.colorSchemeSelector;
    Qr(() => {
      if (be && S && $t && $t !== "media") {
        const yt = $t;
        let tt = $t;
        if (yt === "class" && (tt = ".%s"), yt === "data" && (tt = "[data-%s]"), yt != null && yt.startsWith("data-") && !yt.includes("%s") && (tt = `[${yt}="%s"]`), tt.startsWith("."))
          S.classList.remove(...ue.map((Et) => tt.substring(1).replace("%s", Et))), S.classList.add(tt.substring(1).replace("%s", be));
        else {
          const Et = tt.replace("%s", be).match(/\[([^\]]+)\]/);
          if (Et) {
            const [oa, It] = Et[1].split("=");
            It || ue.forEach((hn) => {
              S.removeAttribute(oa.replace(be, hn));
            }), S.setAttribute(oa, It ? It.replace(/"|'/g, "") : "");
          } else
            S.setAttribute(tt, be);
        }
      }
    }, [be, $t, S, ue]), C.useEffect(() => {
      let yt;
      if (G && W.current && J) {
        const tt = J.createElement("style");
        tt.appendChild(J.createTextNode(O5)), J.head.appendChild(tt), window.getComputedStyle(J.body), yt = setTimeout(() => {
          J.head.removeChild(tt);
        }, 1);
      }
      return () => {
        clearTimeout(yt);
      };
    }, [be, G, J]), C.useEffect(() => (W.current = !0, () => {
      W.current = !1;
    }), []);
    const pn = C.useMemo(() => ({
      allColorSchemes: ue,
      colorScheme: be,
      darkColorScheme: jn,
      lightColorScheme: kt,
      mode: Ie,
      setColorScheme: Dt,
      setMode: re,
      systemMode: de
    }), [ue, be, jn, kt, Ie, Dt, re, de, gt.colorSchemeSelector]);
    let ye = !0;
    (ee || Ce.cssVariables === !1 || F && (V == null ? void 0 : V.cssVarPrefix) === z) && (ye = !1);
    const ul = /* @__PURE__ */ q.jsxs(C.Fragment, {
      children: [/* @__PURE__ */ q.jsx(zb, {
        themeId: ge ? r : void 0,
        theme: gt,
        children: $
      }), ye && /* @__PURE__ */ q.jsx(sb, {
        styles: ((ql = gt.generateStyleSheets) == null ? void 0 : ql.call(gt)) || []
      })]
    });
    return F ? ul : /* @__PURE__ */ q.jsx(y.Provider, {
      value: pn,
      children: ul
    });
  }
  const R = typeof d == "string" ? d : d.light, E = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: T,
    useColorScheme: b,
    getInitColorSchemeScript: (A) => x5({
      colorSchemeStorageKey: c,
      defaultLightColorScheme: R,
      defaultDarkColorScheme: E,
      modeStorageKey: u,
      ...A
    })
  };
}
function A5(a = "") {
  function r(...u) {
    if (!u.length)
      return "";
    const c = u[0];
    return typeof c == "string" && !c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a ? `${a}-` : ""}${c}${r(...u.slice(1))})` : `, ${c}`;
  }
  return (u, ...c) => `var(--${a ? `${a}-` : ""}${u}${r(...c)})`;
}
const K0 = (a, r, i, u = []) => {
  let c = a;
  r.forEach((f, d) => {
    d === r.length - 1 ? Array.isArray(c) ? c[Number(f)] = i : c && typeof c == "object" && (c[f] = i) : c && typeof c == "object" && (c[f] || (c[f] = u.includes(f) ? [] : {}), c = c[f]);
  });
}, z5 = (a, r, i) => {
  function u(c, f = [], d = []) {
    Object.entries(c).forEach(([h, m]) => {
      (!i || i && !i([...f, h])) && m != null && (typeof m == "object" && Object.keys(m).length > 0 ? u(m, [...f, h], Array.isArray(m) ? [...d, h] : d) : r([...f, h], m, d));
    });
  }
  u(a);
}, M5 = (a, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((u) => a.includes(u)) || a[a.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Rd(a, r) {
  const {
    prefix: i,
    shouldSkipGeneratingVar: u
  } = r || {}, c = {}, f = {}, d = {};
  return z5(
    a,
    (h, m, y) => {
      if ((typeof m == "string" || typeof m == "number") && (!u || !u(h, m))) {
        const b = `--${i ? `${i}-` : ""}${h.join("-")}`, g = M5(h, m);
        Object.assign(c, {
          [b]: g
        }), K0(f, h, `var(${b})`, y), K0(d, h, `var(${b}, ${g})`, y);
      }
    },
    (h) => h[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: c,
    vars: f,
    varsWithDefaults: d
  };
}
function _5(a, r = {}) {
  const {
    getSelector: i = w,
    disableCssColorScheme: u,
    colorSchemeSelector: c
  } = r, {
    colorSchemes: f = {},
    components: d,
    defaultColorScheme: h = "light",
    ...m
  } = a, {
    vars: y,
    css: b,
    varsWithDefaults: g
  } = Rd(m, r);
  let x = g;
  const T = {}, {
    [h]: R,
    ...E
  } = f;
  if (Object.entries(E || {}).forEach(([U, L]) => {
    const {
      vars: N,
      css: G,
      varsWithDefaults: k
    } = Rd(L, r);
    x = cn(x, k), T[U] = {
      css: G,
      vars: N
    };
  }), R) {
    const {
      css: U,
      vars: L,
      varsWithDefaults: N
    } = Rd(R, r);
    x = cn(x, N), T[h] = {
      css: U,
      vars: L
    };
  }
  function w(U, L) {
    var G, k;
    let N = c;
    if (c === "class" && (N = ".%s"), c === "data" && (N = "[data-%s]"), c != null && c.startsWith("data-") && !c.includes("%s") && (N = `[${c}="%s"]`), U) {
      if (N === "media")
        return a.defaultColorScheme === U ? ":root" : {
          [`@media (prefers-color-scheme: ${((k = (G = f[U]) == null ? void 0 : G.palette) == null ? void 0 : k.mode) || U})`]: {
            ":root": L
          }
        };
      if (N)
        return a.defaultColorScheme === U ? `:root, ${N.replace("%s", String(U))}` : N.replace("%s", String(U));
    }
    return ":root";
  }
  return {
    vars: x,
    generateThemeVars: () => {
      let U = {
        ...y
      };
      return Object.entries(T).forEach(([, {
        vars: L
      }]) => {
        U = cn(U, L);
      }), U;
    },
    generateStyleSheets: () => {
      var Q, J;
      const U = [], L = a.defaultColorScheme || "light";
      function N(S, I) {
        Object.keys(I).length && U.push(typeof S == "string" ? {
          [S]: {
            ...I
          }
        } : S);
      }
      N(i(void 0, {
        ...b
      }), b);
      const {
        [L]: G,
        ...k
      } = T;
      if (G) {
        const {
          css: S
        } = G, I = (J = (Q = f[L]) == null ? void 0 : Q.palette) == null ? void 0 : J.mode, ee = !u && I ? {
          colorScheme: I,
          ...S
        } : {
          ...S
        };
        N(i(L, {
          ...ee
        }), ee);
      }
      return Object.entries(k).forEach(([S, {
        css: I
      }]) => {
        var ie, W;
        const ee = (W = (ie = f[S]) == null ? void 0 : ie.palette) == null ? void 0 : W.mode, ne = !u && ee ? {
          colorScheme: ee,
          ...I
        } : {
          ...I
        };
        N(i(S, {
          ...ne
        }), ne);
      }), U;
    }
  };
}
function N5(a) {
  return function(i) {
    return a === "media" ? `@media (prefers-color-scheme: ${i})` : a ? a.startsWith("data-") && !a.includes("%s") ? `[${a}="${i}"] &` : a === "class" ? `.${i} &` : a === "data" ? `[data-${i}] &` : `${a.replace("%s", i)} &` : "&";
  };
}
function Z0(a) {
  const {
    defaultProps: r = {},
    mixins: i = {},
    overrides: u = {},
    palette: c = {},
    props: f = {},
    styleOverrides: d = {},
    ...h
  } = a, m = {
    ...h,
    components: {}
  };
  Object.keys(r).forEach((E) => {
    const w = m.components[E] || {};
    w.defaultProps = r[E], m.components[E] = w;
  }), Object.keys(f).forEach((E) => {
    const w = m.components[E] || {};
    w.defaultProps = f[E], m.components[E] = w;
  }), Object.keys(d).forEach((E) => {
    const w = m.components[E] || {};
    w.styleOverrides = d[E], m.components[E] = w;
  }), Object.keys(u).forEach((E) => {
    const w = m.components[E] || {};
    w.styleOverrides = u[E], m.components[E] = w;
  }), m.spacing = yp(a.spacing);
  const y = pb(a.breakpoints || {}), b = m.spacing;
  m.mixins = {
    gutters: (E = {}) => ({
      paddingLeft: b(2),
      paddingRight: b(2),
      ...E,
      [y.up("sm")]: {
        paddingLeft: b(3),
        paddingRight: b(3),
        ...E[y.up("sm")]
      }
    }),
    ...i
  };
  const {
    type: g,
    mode: x,
    ...T
  } = c, R = x || g || "light";
  return m.palette = {
    // theme.palette.text.hint
    text: {
      hint: R === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: R,
    type: R,
    ...T
  }, m;
}
function _b() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: eo.white,
      default: eo.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const D5 = _b();
function Nb() {
  return {
    text: {
      primary: eo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: eo.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const I0 = Nb();
function P0(a, r, i, u) {
  const c = u.light || u, f = u.dark || u * 1.5;
  a[r] || (a.hasOwnProperty(i) ? a[r] = a[i] : r === "light" ? a.light = Cp(a.main, c) : r === "dark" && (a.dark = Ep(a.main, f)));
}
function B5(a = "light") {
  return a === "dark" ? {
    main: Ur[200],
    light: Ur[50],
    dark: Ur[400]
  } : {
    main: Ur[700],
    light: Ur[400],
    dark: Ur[800]
  };
}
function U5(a = "light") {
  return a === "dark" ? {
    main: Br[200],
    light: Br[50],
    dark: Br[400]
  } : {
    main: Br[500],
    light: Br[300],
    dark: Br[700]
  };
}
function j5(a = "light") {
  return a === "dark" ? {
    main: Dr[500],
    light: Dr[300],
    dark: Dr[700]
  } : {
    main: Dr[700],
    light: Dr[400],
    dark: Dr[800]
  };
}
function L5(a = "light") {
  return a === "dark" ? {
    main: jr[400],
    light: jr[300],
    dark: jr[700]
  } : {
    main: jr[700],
    light: jr[500],
    dark: jr[900]
  };
}
function H5(a = "light") {
  return a === "dark" ? {
    main: Lr[400],
    light: Lr[300],
    dark: Lr[700]
  } : {
    main: Lr[800],
    light: Lr[500],
    dark: Lr[900]
  };
}
function k5(a = "light") {
  return a === "dark" ? {
    main: Qi[400],
    light: Qi[300],
    dark: Qi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Qi[500],
    dark: Qi[900]
  };
}
function zp(a) {
  const {
    mode: r = "light",
    contrastThreshold: i = 3,
    tonalOffset: u = 0.2,
    ...c
  } = a, f = a.primary || B5(r), d = a.secondary || U5(r), h = a.error || j5(r), m = a.info || L5(r), y = a.success || H5(r), b = a.warning || k5(r);
  function g(E) {
    return PT(E, I0.text.primary) >= i ? I0.text.primary : D5.text.primary;
  }
  const x = ({
    color: E,
    name: w,
    mainShade: A = 500,
    lightShade: $ = 300,
    darkShade: U = 700
  }) => {
    if (E = {
      ...E
    }, !E.main && E[A] && (E.main = E[A]), !E.hasOwnProperty("main"))
      throw new Error(Hl(11, w ? ` (${w})` : "", A));
    if (typeof E.main != "string")
      throw new Error(Hl(12, w ? ` (${w})` : "", JSON.stringify(E.main)));
    return P0(E, "light", $, u), P0(E, "dark", U, u), E.contrastText || (E.contrastText = g(E.main)), E;
  };
  let T;
  return r === "light" ? T = _b() : r === "dark" && (T = Nb()), cn({
    // A collection of common colors.
    common: {
      ...eo
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: x({
      color: f,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: x({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: x({
      color: h,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: x({
      color: b,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: x({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: x({
      color: y,
      name: "success"
    }),
    // The grey colors.
    grey: _2,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: i,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: x,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: u,
    // The light and dark mode object.
    ...T
  }, c);
}
function $5(a) {
  const r = {};
  return Object.entries(a).forEach((u) => {
    const [c, f] = u;
    typeof f == "object" && (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), r;
}
function Y5(a, r) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [a.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function q5(a) {
  return Math.round(a * 1e5) / 1e5;
}
const J0 = {
  textTransform: "uppercase"
}, F0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function Db(a, r) {
  const {
    fontFamily: i = F0,
    // The default font size of the Material Specification.
    fontSize: u = 14,
    // px
    fontWeightLight: c = 300,
    fontWeightRegular: f = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: h = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: m = 16,
    // Apply the CSS properties to all the variants.
    allVariants: y,
    pxToRem: b,
    ...g
  } = typeof r == "function" ? r(a) : r, x = u / 14, T = b || ((w) => `${w / m * x}rem`), R = (w, A, $, U, L) => ({
    fontFamily: i,
    fontWeight: w,
    fontSize: T(A),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...i === F0 ? {
      letterSpacing: `${q5(U / A)}em`
    } : {},
    ...L,
    ...y
  }), E = {
    h1: R(c, 96, 1.167, -1.5),
    h2: R(c, 60, 1.2, -0.5),
    h3: R(f, 48, 1.167, 0),
    h4: R(f, 34, 1.235, 0.25),
    h5: R(f, 24, 1.334, 0),
    h6: R(d, 20, 1.6, 0.15),
    subtitle1: R(f, 16, 1.75, 0.15),
    subtitle2: R(d, 14, 1.57, 0.1),
    body1: R(f, 16, 1.5, 0.15),
    body2: R(f, 14, 1.43, 0.15),
    button: R(d, 14, 1.75, 0.4, J0),
    caption: R(f, 12, 1.66, 0.4),
    overline: R(f, 12, 2.66, 1, J0),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return cn({
    htmlFontSize: m,
    pxToRem: T,
    fontFamily: i,
    fontSize: u,
    fontWeightLight: c,
    fontWeightRegular: f,
    fontWeightMedium: d,
    fontWeightBold: h,
    ...E
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const V5 = 0.2, G5 = 0.14, X5 = 0.12;
function We(...a) {
  return [`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${V5})`, `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${G5})`, `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${X5})`].join(",");
}
const Q5 = ["none", We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], K5 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Z5 = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function W0(a) {
  return `${Math.round(a)}ms`;
}
function I5(a) {
  if (!a)
    return 0;
  const r = a / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function P5(a) {
  const r = {
    ...K5,
    ...a.easing
  }, i = {
    ...Z5,
    ...a.duration
  };
  return {
    getAutoHeightDuration: I5,
    create: (c = ["all"], f = {}) => {
      const {
        duration: d = i.standard,
        easing: h = r.easeInOut,
        delay: m = 0,
        ...y
      } = f;
      return (Array.isArray(c) ? c : [c]).map((b) => `${b} ${typeof d == "string" ? d : W0(d)} ${h} ${typeof m == "string" ? m : W0(m)}`).join(",");
    },
    ...a,
    easing: r,
    duration: i
  };
}
const J5 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function F5(a) {
  return Fn(a) || typeof a > "u" || typeof a == "string" || typeof a == "boolean" || typeof a == "number" || Array.isArray(a);
}
function Bb(a = {}) {
  const r = {
    ...a
  };
  function i(u) {
    const c = Object.entries(u);
    for (let f = 0; f < c.length; f++) {
      const [d, h] = c[f];
      !F5(h) || d.startsWith("unstable_") ? delete u[d] : Fn(h) && (u[d] = {
        ...h
      }, i(u[d]));
    }
  }
  return i(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function qd(a = {}, ...r) {
  const {
    breakpoints: i,
    mixins: u = {},
    spacing: c,
    palette: f = {},
    transitions: d = {},
    typography: h = {},
    shape: m,
    ...y
  } = a;
  if (a.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  a.generateThemeVars === void 0)
    throw new Error(Hl(20));
  const b = zp(f), g = bp(a);
  let x = cn(g, {
    mixins: Y5(g.breakpoints, u),
    palette: b,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Q5.slice(),
    typography: Db(b, h),
    transitions: P5(d),
    zIndex: {
      ...J5
    }
  });
  return x = cn(x, y), x = r.reduce((T, R) => cn(T, R), x), x.unstable_sxConfig = {
    ...go,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, x.unstable_sx = function(R) {
    return rl({
      sx: R,
      theme: this
    });
  }, x.toRuntimeSource = Bb, x;
}
function Vd(a) {
  let r;
  return a < 1 ? r = 5.11916 * a ** 2 : r = 4.5 * Math.log(a + 1) + 2, Math.round(r * 10) / 1e3;
}
const W5 = [...Array(25)].map((a, r) => {
  if (r === 0)
    return "none";
  const i = Vd(r);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function Ub(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38
  };
}
function jb(a) {
  return a === "dark" ? W5 : [];
}
function eR(a) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: i,
    overlays: u,
    ...c
  } = a, f = zp(r);
  return {
    palette: f,
    opacity: {
      ...Ub(f.mode),
      ...i
    },
    overlays: u || jb(f.mode),
    ...c
  };
}
function tR(a) {
  var r;
  return !!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a[0].match(/sxConfig$/) || // ends with sxConfig
  a[0] === "palette" && !!((r = a[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const nR = (a) => [...[...Array(25)].map((r, i) => `--${a ? `${a}-` : ""}overlays-${i}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`], aR = (a) => (r, i) => {
  const u = a.rootSelector || ":root", c = a.colorSchemeSelector;
  let f = c;
  if (c === "class" && (f = ".%s"), c === "data" && (f = "[data-%s]"), c != null && c.startsWith("data-") && !c.includes("%s") && (f = `[${c}="%s"]`), a.defaultColorScheme === r) {
    if (r === "dark") {
      const d = {};
      return nR(a.cssVarPrefix).forEach((h) => {
        d[h] = i[h], delete i[h];
      }), f === "media" ? {
        [u]: i,
        "@media (prefers-color-scheme: dark)": {
          [u]: d
        }
      } : f ? {
        [f.replace("%s", r)]: d,
        [`${u}, ${f.replace("%s", r)}`]: i
      } : {
        [u]: {
          ...i,
          ...d
        }
      };
    }
    if (f && f !== "media")
      return `${u}, ${f.replace("%s", String(r))}`;
  } else if (r) {
    if (f === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [u]: i
        }
      };
    if (f)
      return f.replace("%s", String(r));
  }
  return u;
};
function lR(a, r) {
  r.forEach((i) => {
    a[i] || (a[i] = {});
  });
}
function X(a, r, i) {
  !a[r] && i && (a[r] = i);
}
function Pi(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : Eb(a);
}
function Ca(a, r) {
  `${r}Channel` in a || (a[`${r}Channel`] = Ii(Pi(a[r])));
}
function rR(a) {
  return typeof a == "number" ? `${a}px` : typeof a == "string" || typeof a == "function" || Array.isArray(a) ? a : "8px";
}
const In = (a) => {
  try {
    return a();
  } catch {
  }
}, iR = (a = "mui") => A5(a);
function Od(a, r, i, u) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const c = u === "dark" ? "dark" : "light";
  if (!i) {
    a[u] = eR({
      ...r,
      palette: {
        mode: c,
        ...r == null ? void 0 : r.palette
      }
    });
    return;
  }
  const {
    palette: f,
    ...d
  } = qd({
    ...i,
    palette: {
      mode: c,
      ...r == null ? void 0 : r.palette
    }
  });
  return a[u] = {
    ...r,
    palette: f,
    opacity: {
      ...Ub(c),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || jb(c)
  }, d;
}
function oR(a = {}, ...r) {
  const {
    colorSchemes: i = {
      light: !0
    },
    defaultColorScheme: u,
    disableCssColorScheme: c = !1,
    cssVarPrefix: f = "mui",
    shouldSkipGeneratingVar: d = tR,
    colorSchemeSelector: h = i.light && i.dark ? "media" : void 0,
    rootSelector: m = ":root",
    ...y
  } = a, b = Object.keys(i)[0], g = u || (i.light && b !== "light" ? "light" : b), x = iR(f), {
    [g]: T,
    light: R,
    dark: E,
    ...w
  } = i, A = {
    ...w
  };
  let $ = T;
  if ((g === "dark" && !("dark" in i) || g === "light" && !("light" in i)) && ($ = !0), !$)
    throw new Error(Hl(21, g));
  const U = Od(A, $, y, g);
  R && !A.light && Od(A, R, void 0, "light"), E && !A.dark && Od(A, E, void 0, "dark");
  let L = {
    defaultColorScheme: g,
    ...U,
    cssVarPrefix: f,
    colorSchemeSelector: h,
    rootSelector: m,
    getCssVar: x,
    colorSchemes: A,
    font: {
      ...$5(U.typography),
      ...U.font
    },
    spacing: rR(y.spacing)
  };
  Object.keys(L.colorSchemes).forEach((J) => {
    const S = L.colorSchemes[J].palette, I = (ee) => {
      const ne = ee.split("-"), ie = ne[1], W = ne[2];
      return x(ee, S[ie][W]);
    };
    if (S.mode === "light" && (X(S.common, "background", "#fff"), X(S.common, "onBackground", "#000")), S.mode === "dark" && (X(S.common, "background", "#000"), X(S.common, "onBackground", "#fff")), lR(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      X(S.Alert, "errorColor", Qe(S.error.light, 0.6)), X(S.Alert, "infoColor", Qe(S.info.light, 0.6)), X(S.Alert, "successColor", Qe(S.success.light, 0.6)), X(S.Alert, "warningColor", Qe(S.warning.light, 0.6)), X(S.Alert, "errorFilledBg", I("palette-error-main")), X(S.Alert, "infoFilledBg", I("palette-info-main")), X(S.Alert, "successFilledBg", I("palette-success-main")), X(S.Alert, "warningFilledBg", I("palette-warning-main")), X(S.Alert, "errorFilledColor", In(() => S.getContrastText(S.error.main))), X(S.Alert, "infoFilledColor", In(() => S.getContrastText(S.info.main))), X(S.Alert, "successFilledColor", In(() => S.getContrastText(S.success.main))), X(S.Alert, "warningFilledColor", In(() => S.getContrastText(S.warning.main))), X(S.Alert, "errorStandardBg", Ke(S.error.light, 0.9)), X(S.Alert, "infoStandardBg", Ke(S.info.light, 0.9)), X(S.Alert, "successStandardBg", Ke(S.success.light, 0.9)), X(S.Alert, "warningStandardBg", Ke(S.warning.light, 0.9)), X(S.Alert, "errorIconColor", I("palette-error-main")), X(S.Alert, "infoIconColor", I("palette-info-main")), X(S.Alert, "successIconColor", I("palette-success-main")), X(S.Alert, "warningIconColor", I("palette-warning-main")), X(S.AppBar, "defaultBg", I("palette-grey-100")), X(S.Avatar, "defaultBg", I("palette-grey-400")), X(S.Button, "inheritContainedBg", I("palette-grey-300")), X(S.Button, "inheritContainedHoverBg", I("palette-grey-A100")), X(S.Chip, "defaultBorder", I("palette-grey-400")), X(S.Chip, "defaultAvatarColor", I("palette-grey-700")), X(S.Chip, "defaultIconColor", I("palette-grey-700")), X(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), X(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), X(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), X(S.LinearProgress, "primaryBg", Ke(S.primary.main, 0.62)), X(S.LinearProgress, "secondaryBg", Ke(S.secondary.main, 0.62)), X(S.LinearProgress, "errorBg", Ke(S.error.main, 0.62)), X(S.LinearProgress, "infoBg", Ke(S.info.main, 0.62)), X(S.LinearProgress, "successBg", Ke(S.success.main, 0.62)), X(S.LinearProgress, "warningBg", Ke(S.warning.main, 0.62)), X(S.Skeleton, "bg", `rgba(${I("palette-text-primaryChannel")} / 0.11)`), X(S.Slider, "primaryTrack", Ke(S.primary.main, 0.62)), X(S.Slider, "secondaryTrack", Ke(S.secondary.main, 0.62)), X(S.Slider, "errorTrack", Ke(S.error.main, 0.62)), X(S.Slider, "infoTrack", Ke(S.info.main, 0.62)), X(S.Slider, "successTrack", Ke(S.success.main, 0.62)), X(S.Slider, "warningTrack", Ke(S.warning.main, 0.62));
      const ee = Iu(S.background.default, 0.8);
      X(S.SnackbarContent, "bg", ee), X(S.SnackbarContent, "color", In(() => S.getContrastText(ee))), X(S.SpeedDialAction, "fabHoverBg", Iu(S.background.paper, 0.15)), X(S.StepConnector, "border", I("palette-grey-400")), X(S.StepContent, "border", I("palette-grey-400")), X(S.Switch, "defaultColor", I("palette-common-white")), X(S.Switch, "defaultDisabledColor", I("palette-grey-100")), X(S.Switch, "primaryDisabledColor", Ke(S.primary.main, 0.62)), X(S.Switch, "secondaryDisabledColor", Ke(S.secondary.main, 0.62)), X(S.Switch, "errorDisabledColor", Ke(S.error.main, 0.62)), X(S.Switch, "infoDisabledColor", Ke(S.info.main, 0.62)), X(S.Switch, "successDisabledColor", Ke(S.success.main, 0.62)), X(S.Switch, "warningDisabledColor", Ke(S.warning.main, 0.62)), X(S.TableCell, "border", Ke(Zu(S.divider, 1), 0.88)), X(S.Tooltip, "bg", Zu(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      X(S.Alert, "errorColor", Ke(S.error.light, 0.6)), X(S.Alert, "infoColor", Ke(S.info.light, 0.6)), X(S.Alert, "successColor", Ke(S.success.light, 0.6)), X(S.Alert, "warningColor", Ke(S.warning.light, 0.6)), X(S.Alert, "errorFilledBg", I("palette-error-dark")), X(S.Alert, "infoFilledBg", I("palette-info-dark")), X(S.Alert, "successFilledBg", I("palette-success-dark")), X(S.Alert, "warningFilledBg", I("palette-warning-dark")), X(S.Alert, "errorFilledColor", In(() => S.getContrastText(S.error.dark))), X(S.Alert, "infoFilledColor", In(() => S.getContrastText(S.info.dark))), X(S.Alert, "successFilledColor", In(() => S.getContrastText(S.success.dark))), X(S.Alert, "warningFilledColor", In(() => S.getContrastText(S.warning.dark))), X(S.Alert, "errorStandardBg", Qe(S.error.light, 0.9)), X(S.Alert, "infoStandardBg", Qe(S.info.light, 0.9)), X(S.Alert, "successStandardBg", Qe(S.success.light, 0.9)), X(S.Alert, "warningStandardBg", Qe(S.warning.light, 0.9)), X(S.Alert, "errorIconColor", I("palette-error-main")), X(S.Alert, "infoIconColor", I("palette-info-main")), X(S.Alert, "successIconColor", I("palette-success-main")), X(S.Alert, "warningIconColor", I("palette-warning-main")), X(S.AppBar, "defaultBg", I("palette-grey-900")), X(S.AppBar, "darkBg", I("palette-background-paper")), X(S.AppBar, "darkColor", I("palette-text-primary")), X(S.Avatar, "defaultBg", I("palette-grey-600")), X(S.Button, "inheritContainedBg", I("palette-grey-800")), X(S.Button, "inheritContainedHoverBg", I("palette-grey-700")), X(S.Chip, "defaultBorder", I("palette-grey-700")), X(S.Chip, "defaultAvatarColor", I("palette-grey-300")), X(S.Chip, "defaultIconColor", I("palette-grey-300")), X(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), X(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), X(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), X(S.LinearProgress, "primaryBg", Qe(S.primary.main, 0.5)), X(S.LinearProgress, "secondaryBg", Qe(S.secondary.main, 0.5)), X(S.LinearProgress, "errorBg", Qe(S.error.main, 0.5)), X(S.LinearProgress, "infoBg", Qe(S.info.main, 0.5)), X(S.LinearProgress, "successBg", Qe(S.success.main, 0.5)), X(S.LinearProgress, "warningBg", Qe(S.warning.main, 0.5)), X(S.Skeleton, "bg", `rgba(${I("palette-text-primaryChannel")} / 0.13)`), X(S.Slider, "primaryTrack", Qe(S.primary.main, 0.5)), X(S.Slider, "secondaryTrack", Qe(S.secondary.main, 0.5)), X(S.Slider, "errorTrack", Qe(S.error.main, 0.5)), X(S.Slider, "infoTrack", Qe(S.info.main, 0.5)), X(S.Slider, "successTrack", Qe(S.success.main, 0.5)), X(S.Slider, "warningTrack", Qe(S.warning.main, 0.5));
      const ee = Iu(S.background.default, 0.98);
      X(S.SnackbarContent, "bg", ee), X(S.SnackbarContent, "color", In(() => S.getContrastText(ee))), X(S.SpeedDialAction, "fabHoverBg", Iu(S.background.paper, 0.15)), X(S.StepConnector, "border", I("palette-grey-600")), X(S.StepContent, "border", I("palette-grey-600")), X(S.Switch, "defaultColor", I("palette-grey-300")), X(S.Switch, "defaultDisabledColor", I("palette-grey-600")), X(S.Switch, "primaryDisabledColor", Qe(S.primary.main, 0.55)), X(S.Switch, "secondaryDisabledColor", Qe(S.secondary.main, 0.55)), X(S.Switch, "errorDisabledColor", Qe(S.error.main, 0.55)), X(S.Switch, "infoDisabledColor", Qe(S.info.main, 0.55)), X(S.Switch, "successDisabledColor", Qe(S.success.main, 0.55)), X(S.Switch, "warningDisabledColor", Qe(S.warning.main, 0.55)), X(S.TableCell, "border", Qe(Zu(S.divider, 1), 0.68)), X(S.Tooltip, "bg", Zu(S.grey[700], 0.92));
    }
    Ca(S.background, "default"), Ca(S.background, "paper"), Ca(S.common, "background"), Ca(S.common, "onBackground"), Ca(S, "divider"), Object.keys(S).forEach((ee) => {
      const ne = S[ee];
      ee !== "tonalOffset" && ne && typeof ne == "object" && (ne.main && X(S[ee], "mainChannel", Ii(Pi(ne.main))), ne.light && X(S[ee], "lightChannel", Ii(Pi(ne.light))), ne.dark && X(S[ee], "darkChannel", Ii(Pi(ne.dark))), ne.contrastText && X(S[ee], "contrastTextChannel", Ii(Pi(ne.contrastText))), ee === "text" && (Ca(S[ee], "primary"), Ca(S[ee], "secondary")), ee === "action" && (ne.active && Ca(S[ee], "active"), ne.selected && Ca(S[ee], "selected")));
    });
  }), L = r.reduce((J, S) => cn(J, S), L);
  const N = {
    prefix: f,
    disableCssColorScheme: c,
    shouldSkipGeneratingVar: d,
    getSelector: aR(L)
  }, {
    vars: G,
    generateThemeVars: k,
    generateStyleSheets: Q
  } = _5(L, N);
  return L.vars = G, Object.entries(L.colorSchemes[L.defaultColorScheme]).forEach(([J, S]) => {
    L[J] = S;
  }), L.generateThemeVars = k, L.generateStyleSheets = Q, L.generateSpacing = function() {
    return yp(y.spacing, gp(this));
  }, L.getColorSchemeSelector = N5(h), L.spacing = L.generateSpacing(), L.shouldSkipGeneratingVar = d, L.unstable_sxConfig = {
    ...go,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, L.unstable_sx = function(S) {
    return rl({
      sx: S,
      theme: this
    });
  }, L.toRuntimeSource = Bb, L;
}
function ev(a, r, i) {
  a.colorSchemes && i && (a.colorSchemes[r] = {
    ...i !== !0 && i,
    palette: zp({
      ...i === !0 ? {} : i.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function ro(a = {}, ...r) {
  const {
    palette: i,
    cssVariables: u = !1,
    colorSchemes: c = i ? void 0 : {
      light: !0
    },
    defaultColorScheme: f = i == null ? void 0 : i.mode,
    ...d
  } = a, h = f || "light", m = c == null ? void 0 : c[h], y = {
    ...c,
    ...i ? {
      [h]: {
        ...typeof m != "boolean" && m,
        palette: i
      }
    } : void 0
  };
  if (u === !1) {
    if (!("colorSchemes" in a))
      return qd(a, ...r);
    let b = i;
    "palette" in a || y[h] && (y[h] !== !0 ? b = y[h].palette : h === "dark" && (b = {
      mode: "dark"
    }));
    const g = qd({
      ...a,
      palette: b
    }, ...r);
    return g.defaultColorScheme = h, g.colorSchemes = y, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...y.light !== !0 && y.light,
      palette: g.palette
    }, ev(g, "dark", y.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...y.dark !== !0 && y.dark,
      palette: g.palette
    }, ev(g, "light", y.light)), g;
  }
  return !i && !("light" in y) && h === "light" && (y.light = !0), oR({
    ...d,
    colorSchemes: y,
    defaultColorScheme: h,
    ...typeof u != "boolean" && u
  }, ...r);
}
const Lb = ro();
function yo() {
  const a = Sp(Lb);
  return a[ta] || a;
}
function uR(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const _s = (a) => uR(a) && a !== "classes", Ze = HT({
  themeId: ta,
  defaultTheme: Lb,
  rootShouldForwardProp: _s
});
function sR({
  theme: a,
  ...r
}) {
  const i = ta in a ? a[ta] : void 0;
  return /* @__PURE__ */ q.jsx(zb, {
    ...r,
    themeId: i ? ta : void 0,
    theme: i || a
  });
}
const Pu = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: cR
} = w5({
  themeId: ta,
  // @ts-ignore ignore module augmentation tests
  theme: () => ro({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Pu.colorSchemeStorageKey,
  modeStorageKey: Pu.modeStorageKey,
  defaultColorScheme: {
    light: Pu.defaultLightColorScheme,
    dark: Pu.defaultDarkColorScheme
  },
  resolveTheme: (a) => {
    const r = {
      ...a,
      typography: Db(a.palette, a.typography)
    };
    return r.unstable_sx = function(u) {
      return rl({
        sx: u,
        theme: this
      });
    }, r;
  }
}), fR = cR;
function dR({
  theme: a,
  ...r
}) {
  const i = C.useMemo(() => {
    if (typeof a == "function")
      return a;
    const u = ta in a ? a[ta] : a;
    return "colorSchemes" in u ? null : "vars" in u ? a : {
      ...a,
      vars: null
    };
  }, [a]);
  return i ? /* @__PURE__ */ q.jsx(sR, {
    theme: i,
    ...r
  }) : /* @__PURE__ */ q.jsx(fR, {
    theme: a,
    ...r
  });
}
function pR() {
  return mb;
}
const Ht = b5;
function dn(a) {
  return y5(a);
}
function hR(a) {
  return fn("MuiSvgIcon", a);
}
Zt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const mR = (a) => {
  const {
    color: r,
    fontSize: i,
    classes: u
  } = a, c = {
    root: ["root", r !== "inherit" && `color${me(r)}`, `fontSize${me(i)}`]
  };
  return An(c, hR, u);
}, gR = Ze("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.color !== "inherit" && r[`color${me(i.color)}`], r[`fontSize${me(i.fontSize)}`]];
  }
})(Ht(({
  theme: a
}) => {
  var r, i, u, c, f, d, h, m, y, b, g, x, T, R;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (c = (r = a.transitions) == null ? void 0 : r.create) == null ? void 0 : c.call(r, "fill", {
      duration: (u = (i = (a.vars ?? a).transitions) == null ? void 0 : i.duration) == null ? void 0 : u.shorter
    }),
    variants: [
      {
        props: (E) => !E.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((d = (f = a.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : d.call(f, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((m = (h = a.typography) == null ? void 0 : h.pxToRem) == null ? void 0 : m.call(h, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((b = (y = a.typography) == null ? void 0 : y.pxToRem) == null ? void 0 : b.call(y, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((a.vars ?? a).palette).filter(([, E]) => E && E.main).map(([E]) => {
        var w, A;
        return {
          props: {
            color: E
          },
          style: {
            color: (A = (w = (a.vars ?? a).palette) == null ? void 0 : w[E]) == null ? void 0 : A.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (x = (g = (a.vars ?? a).palette) == null ? void 0 : g.action) == null ? void 0 : x.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (R = (T = (a.vars ?? a).palette) == null ? void 0 : T.action) == null ? void 0 : R.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Gd = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: c,
    className: f,
    color: d = "inherit",
    component: h = "svg",
    fontSize: m = "medium",
    htmlColor: y,
    inheritViewBox: b = !1,
    titleAccess: g,
    viewBox: x = "0 0 24 24",
    ...T
  } = u, R = /* @__PURE__ */ C.isValidElement(c) && c.type === "svg", E = {
    ...u,
    color: d,
    component: h,
    fontSize: m,
    instanceFontSize: r.fontSize,
    inheritViewBox: b,
    viewBox: x,
    hasSvgAsChild: R
  }, w = {};
  b || (w.viewBox = x);
  const A = mR(E);
  return /* @__PURE__ */ q.jsxs(gR, {
    as: h,
    className: je(A.root, f),
    focusable: "false",
    color: y,
    "aria-hidden": g ? void 0 : !0,
    role: g ? "img" : void 0,
    ref: i,
    ...w,
    ...T,
    ...R && c.props,
    ownerState: E,
    children: [R ? c.props.children : c, g ? /* @__PURE__ */ q.jsx("title", {
      children: g
    }) : null]
  });
});
Gd.muiName = "SvgIcon";
function Ns(a, r) {
  function i(u, c) {
    return /* @__PURE__ */ q.jsx(Gd, {
      "data-testid": `${r}Icon`,
      ref: c,
      ...u,
      children: a
    });
  }
  return i.muiName = Gd.muiName, /* @__PURE__ */ C.memo(/* @__PURE__ */ C.forwardRef(i));
}
function yR(a, r) {
  if (!a)
    return r;
  if (typeof a == "function" || typeof r == "function")
    return (c) => {
      const f = typeof r == "function" ? r(c) : r, d = typeof a == "function" ? a({
        ...c,
        ...f
      }) : a, h = je(c == null ? void 0 : c.className, f == null ? void 0 : f.className, d == null ? void 0 : d.className);
      return {
        ...f,
        ...d,
        ...!!h && {
          className: h
        },
        ...(f == null ? void 0 : f.style) && (d == null ? void 0 : d.style) && {
          style: {
            ...f.style,
            ...d.style
          }
        },
        ...(f == null ? void 0 : f.sx) && (d == null ? void 0 : d.sx) && {
          sx: [...Array.isArray(f.sx) ? f.sx : [f.sx], ...Array.isArray(d.sx) ? d.sx : [d.sx]]
        }
      };
    };
  const i = r, u = je(i == null ? void 0 : i.className, a == null ? void 0 : a.className);
  return {
    ...r,
    ...a,
    ...!!u && {
      className: u
    },
    ...(i == null ? void 0 : i.style) && (a == null ? void 0 : a.style) && {
      style: {
        ...i.style,
        ...a.style
      }
    },
    ...(i == null ? void 0 : i.sx) && (a == null ? void 0 : a.sx) && {
      sx: [...Array.isArray(i.sx) ? i.sx : [i.sx], ...Array.isArray(a.sx) ? a.sx : [a.sx]]
    }
  };
}
function Hb(a, r) {
  if (a == null) return {};
  var i = {};
  for (var u in a) if ({}.hasOwnProperty.call(a, u)) {
    if (r.indexOf(u) !== -1) continue;
    i[u] = a[u];
  }
  return i;
}
function Xd(a, r) {
  return Xd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, u) {
    return i.__proto__ = u, i;
  }, Xd(a, r);
}
function kb(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, Xd(a, r);
}
const tv = {
  disabled: !1
}, fs = pe.createContext(null);
var vR = function(r) {
  return r.scrollTop;
}, Ji = "unmounted", Bl = "exited", Ul = "entering", kr = "entered", Qd = "exiting", ra = /* @__PURE__ */ (function(a) {
  kb(r, a);
  function r(u, c) {
    var f;
    f = a.call(this, u, c) || this;
    var d = c, h = d && !d.isMounting ? u.enter : u.appear, m;
    return f.appearStatus = null, u.in ? h ? (m = Bl, f.appearStatus = Ul) : m = kr : u.unmountOnExit || u.mountOnEnter ? m = Ji : m = Bl, f.state = {
      status: m
    }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(c, f) {
    var d = c.in;
    return d && f.status === Ji ? {
      status: Bl
    } : null;
  };
  var i = r.prototype;
  return i.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, i.componentDidUpdate = function(c) {
    var f = null;
    if (c !== this.props) {
      var d = this.state.status;
      this.props.in ? d !== Ul && d !== kr && (f = Ul) : (d === Ul || d === kr) && (f = Qd);
    }
    this.updateStatus(!1, f);
  }, i.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, i.getTimeouts = function() {
    var c = this.props.timeout, f, d, h;
    return f = d = h = c, c != null && typeof c != "number" && (f = c.exit, d = c.enter, h = c.appear !== void 0 ? c.appear : d), {
      exit: f,
      enter: d,
      appear: h
    };
  }, i.updateStatus = function(c, f) {
    if (c === void 0 && (c = !1), f !== null)
      if (this.cancelNextCallback(), f === Ul) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var d = this.props.nodeRef ? this.props.nodeRef.current : Qu.findDOMNode(this);
          d && vR(d);
        }
        this.performEnter(c);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Bl && this.setState({
      status: Ji
    });
  }, i.performEnter = function(c) {
    var f = this, d = this.props.enter, h = this.context ? this.context.isMounting : c, m = this.props.nodeRef ? [h] : [Qu.findDOMNode(this), h], y = m[0], b = m[1], g = this.getTimeouts(), x = h ? g.appear : g.enter;
    if (!c && !d || tv.disabled) {
      this.safeSetState({
        status: kr
      }, function() {
        f.props.onEntered(y);
      });
      return;
    }
    this.props.onEnter(y, b), this.safeSetState({
      status: Ul
    }, function() {
      f.props.onEntering(y, b), f.onTransitionEnd(x, function() {
        f.safeSetState({
          status: kr
        }, function() {
          f.props.onEntered(y, b);
        });
      });
    });
  }, i.performExit = function() {
    var c = this, f = this.props.exit, d = this.getTimeouts(), h = this.props.nodeRef ? void 0 : Qu.findDOMNode(this);
    if (!f || tv.disabled) {
      this.safeSetState({
        status: Bl
      }, function() {
        c.props.onExited(h);
      });
      return;
    }
    this.props.onExit(h), this.safeSetState({
      status: Qd
    }, function() {
      c.props.onExiting(h), c.onTransitionEnd(d.exit, function() {
        c.safeSetState({
          status: Bl
        }, function() {
          c.props.onExited(h);
        });
      });
    });
  }, i.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, i.safeSetState = function(c, f) {
    f = this.setNextCallback(f), this.setState(c, f);
  }, i.setNextCallback = function(c) {
    var f = this, d = !0;
    return this.nextCallback = function(h) {
      d && (d = !1, f.nextCallback = null, c(h));
    }, this.nextCallback.cancel = function() {
      d = !1;
    }, this.nextCallback;
  }, i.onTransitionEnd = function(c, f) {
    this.setNextCallback(f);
    var d = this.props.nodeRef ? this.props.nodeRef.current : Qu.findDOMNode(this), h = c == null && !this.props.addEndListener;
    if (!d || h) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var m = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback], y = m[0], b = m[1];
      this.props.addEndListener(y, b);
    }
    c != null && setTimeout(this.nextCallback, c);
  }, i.render = function() {
    var c = this.state.status;
    if (c === Ji)
      return null;
    var f = this.props, d = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var h = Hb(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ pe.createElement(fs.Provider, {
        value: null
      }, typeof d == "function" ? d(c, h) : pe.cloneElement(pe.Children.only(d), h))
    );
  }, r;
})(pe.Component);
ra.contextType = fs;
ra.propTypes = {};
function Hr() {
}
ra.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Hr,
  onEntering: Hr,
  onEntered: Hr,
  onExit: Hr,
  onExiting: Hr,
  onExited: Hr
};
ra.UNMOUNTED = Ji;
ra.EXITED = Bl;
ra.ENTERING = Ul;
ra.ENTERED = kr;
ra.EXITING = Qd;
function bR(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Mp(a, r) {
  var i = function(f) {
    return r && C.isValidElement(f) ? r(f) : f;
  }, u = /* @__PURE__ */ Object.create(null);
  return a && C.Children.map(a, function(c) {
    return c;
  }).forEach(function(c) {
    u[c.key] = i(c);
  }), u;
}
function SR(a, r) {
  a = a || {}, r = r || {};
  function i(b) {
    return b in r ? r[b] : a[b];
  }
  var u = /* @__PURE__ */ Object.create(null), c = [];
  for (var f in a)
    f in r ? c.length && (u[f] = c, c = []) : c.push(f);
  var d, h = {};
  for (var m in r) {
    if (u[m])
      for (d = 0; d < u[m].length; d++) {
        var y = u[m][d];
        h[u[m][d]] = i(y);
      }
    h[m] = i(m);
  }
  for (d = 0; d < c.length; d++)
    h[c[d]] = i(c[d]);
  return h;
}
function Ll(a, r, i) {
  return i[r] != null ? i[r] : a.props[r];
}
function xR(a, r) {
  return Mp(a.children, function(i) {
    return C.cloneElement(i, {
      onExited: r.bind(null, i),
      in: !0,
      appear: Ll(i, "appear", a),
      enter: Ll(i, "enter", a),
      exit: Ll(i, "exit", a)
    });
  });
}
function ER(a, r, i) {
  var u = Mp(a.children), c = SR(r, u);
  return Object.keys(c).forEach(function(f) {
    var d = c[f];
    if (C.isValidElement(d)) {
      var h = f in r, m = f in u, y = r[f], b = C.isValidElement(y) && !y.props.in;
      m && (!h || b) ? c[f] = C.cloneElement(d, {
        onExited: i.bind(null, d),
        in: !0,
        exit: Ll(d, "exit", a),
        enter: Ll(d, "enter", a)
      }) : !m && h && !b ? c[f] = C.cloneElement(d, {
        in: !1
      }) : m && h && C.isValidElement(y) && (c[f] = C.cloneElement(d, {
        onExited: i.bind(null, d),
        in: y.props.in,
        exit: Ll(d, "exit", a),
        enter: Ll(d, "enter", a)
      }));
    }
  }), c;
}
var CR = Object.values || function(a) {
  return Object.keys(a).map(function(r) {
    return a[r];
  });
}, TR = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, _p = /* @__PURE__ */ (function(a) {
  kb(r, a);
  function r(u, c) {
    var f;
    f = a.call(this, u, c) || this;
    var d = f.handleExited.bind(bR(f));
    return f.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: d,
      firstRender: !0
    }, f;
  }
  var i = r.prototype;
  return i.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, i.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(c, f) {
    var d = f.children, h = f.handleExited, m = f.firstRender;
    return {
      children: m ? xR(c, h) : ER(c, d, h),
      firstRender: !1
    };
  }, i.handleExited = function(c, f) {
    var d = Mp(this.props.children);
    c.key in d || (c.props.onExited && c.props.onExited(f), this.mounted && this.setState(function(h) {
      var m = us({}, h.children);
      return delete m[c.key], {
        children: m
      };
    }));
  }, i.render = function() {
    var c = this.props, f = c.component, d = c.childFactory, h = Hb(c, ["component", "childFactory"]), m = this.state.contextValue, y = CR(this.state.children).map(d);
    return delete h.appear, delete h.enter, delete h.exit, f === null ? /* @__PURE__ */ pe.createElement(fs.Provider, {
      value: m
    }, y) : /* @__PURE__ */ pe.createElement(fs.Provider, {
      value: m
    }, /* @__PURE__ */ pe.createElement(f, h, y));
  }, r;
})(pe.Component);
_p.propTypes = {};
_p.defaultProps = TR;
const $b = (a) => a.scrollTop;
function ds(a, r) {
  const {
    timeout: i,
    easing: u,
    style: c = {}
  } = a;
  return {
    duration: c.transitionDuration ?? (typeof i == "number" ? i : i[r.mode] || 0),
    easing: c.transitionTimingFunction ?? (typeof u == "object" ? u[r.mode] : u),
    delay: c.transitionDelay
  };
}
function RR(a) {
  return fn("MuiPaper", a);
}
Zt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const OR = (a) => {
  const {
    square: r,
    elevation: i,
    variant: u,
    classes: c
  } = a, f = {
    root: ["root", u, !r && "rounded", u === "elevation" && `elevation${i}`]
  };
  return An(f, RR, c);
}, wR = Ze("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], !i.square && r.rounded, i.variant === "elevation" && r[`elevation${i.elevation}`]];
  }
})(Ht(({
  theme: a
}) => ({
  backgroundColor: (a.vars || a).palette.background.paper,
  color: (a.vars || a).palette.text.primary,
  transition: a.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: r
    }) => !r.square,
    style: {
      borderRadius: a.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), AR = /* @__PURE__ */ C.forwardRef(function(r, i) {
  var T;
  const u = dn({
    props: r,
    name: "MuiPaper"
  }), c = yo(), {
    className: f,
    component: d = "div",
    elevation: h = 1,
    square: m = !1,
    variant: y = "elevation",
    ...b
  } = u, g = {
    ...u,
    component: d,
    elevation: h,
    square: m,
    variant: y
  }, x = OR(g);
  return /* @__PURE__ */ q.jsx(wR, {
    as: d,
    ownerState: g,
    className: je(x.root, f),
    ref: i,
    ...b,
    style: {
      ...y === "elevation" && {
        "--Paper-shadow": (c.vars || c).shadows[h],
        ...c.vars && {
          "--Paper-overlay": (T = c.vars.overlays) == null ? void 0 : T[h]
        },
        ...!c.vars && c.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Wn("#fff", Vd(h))}, ${Wn("#fff", Vd(h))})`
        }
      },
      ...b.style
    }
  });
});
function ea(a, r) {
  const {
    className: i,
    elementType: u,
    ownerState: c,
    externalForwardedProps: f,
    internalForwardedProps: d,
    shouldForwardComponentProp: h = !1,
    ...m
  } = r, {
    component: y,
    slots: b = {
      [a]: void 0
    },
    slotProps: g = {
      [a]: void 0
    },
    ...x
  } = f, T = b[a] || u, R = u5(g[a], c), {
    props: {
      component: E,
      ...w
    },
    internalRef: A
  } = o5({
    className: i,
    ...m,
    externalForwardedProps: a === "root" ? x : void 0,
    externalSlotProps: R
  }), $ = ol(A, R == null ? void 0 : R.ref, r.ref), U = a === "root" ? E || y : E, L = i5(T, {
    ...a === "root" && !y && !b[a] && d,
    ...a !== "root" && !b[a] && d,
    ...w,
    ...U && !h && {
      as: U
    },
    ...U && h && {
      component: U
    },
    ref: $
  }, c);
  return [T, L];
}
class ps {
  constructor() {
    Nr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ps();
  }
  static use() {
    const r = Cb(ps.create).current, [i, u] = C.useState(!1);
    return r.shouldMount = i, r.setShouldMount = u, C.useEffect(r.mountEffect, [i]), r;
  }
  mount() {
    return this.mounted || (this.mounted = MR(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.pulsate(...r);
    });
  }
}
function zR() {
  return ps.use();
}
function MR() {
  let a, r;
  const i = new Promise((u, c) => {
    a = u, r = c;
  });
  return i.resolve = a, i.reject = r, i;
}
function _R(a) {
  const {
    className: r,
    classes: i,
    pulsate: u = !1,
    rippleX: c,
    rippleY: f,
    rippleSize: d,
    in: h,
    onExited: m,
    timeout: y
  } = a, [b, g] = C.useState(!1), x = je(r, i.ripple, i.rippleVisible, u && i.ripplePulsate), T = {
    width: d,
    height: d,
    top: -(d / 2) + f,
    left: -(d / 2) + c
  }, R = je(i.child, b && i.childLeaving, u && i.childPulsate);
  return !h && !b && g(!0), C.useEffect(() => {
    if (!h && m != null) {
      const E = setTimeout(m, y);
      return () => {
        clearTimeout(E);
      };
    }
  }, [m, h, y]), /* @__PURE__ */ q.jsx("span", {
    className: x,
    style: T,
    children: /* @__PURE__ */ q.jsx("span", {
      className: R
    })
  });
}
const Tn = Zt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Kd = 550, NR = 80, DR = po`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, BR = po`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, UR = po`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, jR = Ze("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), LR = Ze(_R, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Tn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${DR};
    animation-duration: ${Kd}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  &.${Tn.ripplePulsate} {
    animation-duration: ${({
  theme: a
}) => a.transitions.duration.shorter}ms;
  }

  & .${Tn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Tn.childLeaving} {
    opacity: 0;
    animation-name: ${BR};
    animation-duration: ${Kd}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  & .${Tn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${UR};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, HR = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: c = !1,
    classes: f = {},
    className: d,
    ...h
  } = u, [m, y] = C.useState([]), b = C.useRef(0), g = C.useRef(null);
  C.useEffect(() => {
    g.current && (g.current(), g.current = null);
  }, [m]);
  const x = C.useRef(!1), T = a5(), R = C.useRef(null), E = C.useRef(null), w = C.useCallback((L) => {
    const {
      pulsate: N,
      rippleX: G,
      rippleY: k,
      rippleSize: Q,
      cb: J
    } = L;
    y((S) => [...S, /* @__PURE__ */ q.jsx(LR, {
      classes: {
        ripple: je(f.ripple, Tn.ripple),
        rippleVisible: je(f.rippleVisible, Tn.rippleVisible),
        ripplePulsate: je(f.ripplePulsate, Tn.ripplePulsate),
        child: je(f.child, Tn.child),
        childLeaving: je(f.childLeaving, Tn.childLeaving),
        childPulsate: je(f.childPulsate, Tn.childPulsate)
      },
      timeout: Kd,
      pulsate: N,
      rippleX: G,
      rippleY: k,
      rippleSize: Q
    }, b.current)]), b.current += 1, g.current = J;
  }, [f]), A = C.useCallback((L = {}, N = {}, G = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: Q = c || N.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = N;
    if ((L == null ? void 0 : L.type) === "mousedown" && x.current) {
      x.current = !1;
      return;
    }
    (L == null ? void 0 : L.type) === "touchstart" && (x.current = !0);
    const S = J ? null : E.current, I = S ? S.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ee, ne, ie;
    if (Q || L === void 0 || L.clientX === 0 && L.clientY === 0 || !L.clientX && !L.touches)
      ee = Math.round(I.width / 2), ne = Math.round(I.height / 2);
    else {
      const {
        clientX: W,
        clientY: V
      } = L.touches && L.touches.length > 0 ? L.touches[0] : L;
      ee = Math.round(W - I.left), ne = Math.round(V - I.top);
    }
    if (Q)
      ie = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3), ie % 2 === 0 && (ie += 1);
    else {
      const W = Math.max(Math.abs((S ? S.clientWidth : 0) - ee), ee) * 2 + 2, V = Math.max(Math.abs((S ? S.clientHeight : 0) - ne), ne) * 2 + 2;
      ie = Math.sqrt(W ** 2 + V ** 2);
    }
    L != null && L.touches ? R.current === null && (R.current = () => {
      w({
        pulsate: k,
        rippleX: ee,
        rippleY: ne,
        rippleSize: ie,
        cb: G
      });
    }, T.start(NR, () => {
      R.current && (R.current(), R.current = null);
    })) : w({
      pulsate: k,
      rippleX: ee,
      rippleY: ne,
      rippleSize: ie,
      cb: G
    });
  }, [c, w, T]), $ = C.useCallback(() => {
    A({}, {
      pulsate: !0
    });
  }, [A]), U = C.useCallback((L, N) => {
    if (T.clear(), (L == null ? void 0 : L.type) === "touchend" && R.current) {
      R.current(), R.current = null, T.start(0, () => {
        U(L, N);
      });
      return;
    }
    R.current = null, y((G) => G.length > 0 ? G.slice(1) : G), g.current = N;
  }, [T]);
  return C.useImperativeHandle(i, () => ({
    pulsate: $,
    start: A,
    stop: U
  }), [$, A, U]), /* @__PURE__ */ q.jsx(jR, {
    className: je(Tn.root, f.root, d),
    ref: E,
    ...h,
    children: /* @__PURE__ */ q.jsx(_p, {
      component: null,
      exit: !0,
      children: m
    })
  });
});
function kR(a) {
  return fn("MuiButtonBase", a);
}
const $R = Zt("MuiButtonBase", ["root", "disabled", "focusVisible"]), YR = (a) => {
  const {
    disabled: r,
    focusVisible: i,
    focusVisibleClassName: u,
    classes: c
  } = a, d = An({
    root: ["root", r && "disabled", i && "focusVisible"]
  }, kR, c);
  return i && u && (d.root += ` ${u}`), d;
}, qR = Ze("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${$R.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Np = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: c,
    centerRipple: f = !1,
    children: d,
    className: h,
    component: m = "button",
    disabled: y = !1,
    disableRipple: b = !1,
    disableTouchRipple: g = !1,
    focusRipple: x = !1,
    focusVisibleClassName: T,
    LinkComponent: R = "a",
    onBlur: E,
    onClick: w,
    onContextMenu: A,
    onDragLeave: $,
    onFocus: U,
    onFocusVisible: L,
    onKeyDown: N,
    onKeyUp: G,
    onMouseDown: k,
    onMouseLeave: Q,
    onMouseUp: J,
    onTouchEnd: S,
    onTouchMove: I,
    onTouchStart: ee,
    tabIndex: ne = 0,
    TouchRippleProps: ie,
    touchRippleRef: W,
    type: V,
    ...te
  } = u, F = C.useRef(null), le = zR(), ge = ol(le.ref, W), [Ce, Le] = C.useState(!1);
  y && Ce && Le(!1), C.useImperativeHandle(c, () => ({
    focusVisible: () => {
      Le(!0), F.current.focus();
    }
  }), []);
  const et = le.shouldMount && !b && !y;
  C.useEffect(() => {
    Ce && x && !b && le.pulsate();
  }, [b, x, Ce, le]);
  const z = Ta(le, "start", k, g), P = Ta(le, "stop", A, g), ue = Ta(le, "stop", $, g), ce = Ta(le, "stop", J, g), Ee = Ta(le, "stop", (ye) => {
    Ce && ye.preventDefault(), Q && Q(ye);
  }, g), Re = Ta(le, "start", ee, g), Oe = Ta(le, "stop", S, g), re = Ta(le, "stop", I, g), de = Ta(le, "stop", (ye) => {
    Y0(ye.target) || Le(!1), E && E(ye);
  }, !1), kt = qr((ye) => {
    F.current || (F.current = ye.currentTarget), Y0(ye.target) && (Le(!0), L && L(ye)), U && U(ye);
  }), jn = () => {
    const ye = F.current;
    return m && m !== "button" && !(ye.tagName === "A" && ye.href);
  }, Ln = qr((ye) => {
    x && !ye.repeat && Ce && ye.key === " " && le.stop(ye, () => {
      le.start(ye);
    }), ye.target === ye.currentTarget && jn() && ye.key === " " && ye.preventDefault(), N && N(ye), ye.target === ye.currentTarget && jn() && ye.key === "Enter" && !y && (ye.preventDefault(), w && w(ye));
  }), Dt = qr((ye) => {
    x && ye.key === " " && Ce && !ye.defaultPrevented && le.stop(ye, () => {
      le.pulsate(ye);
    }), G && G(ye), w && ye.target === ye.currentTarget && jn() && ye.key === " " && !ye.defaultPrevented && w(ye);
  });
  let Ie = m;
  Ie === "button" && (te.href || te.to) && (Ie = R);
  const be = {};
  Ie === "button" ? (be.type = V === void 0 ? "button" : V, be.disabled = y) : (!te.href && !te.to && (be.role = "button"), y && (be["aria-disabled"] = y));
  const gt = ol(i, F), $t = {
    ...u,
    centerRipple: f,
    component: m,
    disabled: y,
    disableRipple: b,
    disableTouchRipple: g,
    focusRipple: x,
    tabIndex: ne,
    focusVisible: Ce
  }, pn = YR($t);
  return /* @__PURE__ */ q.jsxs(qR, {
    as: Ie,
    className: je(pn.root, h),
    ownerState: $t,
    onBlur: de,
    onClick: w,
    onContextMenu: P,
    onFocus: kt,
    onKeyDown: Ln,
    onKeyUp: Dt,
    onMouseDown: z,
    onMouseLeave: Ee,
    onMouseUp: ce,
    onDragLeave: ue,
    onTouchEnd: Oe,
    onTouchMove: re,
    onTouchStart: Re,
    ref: gt,
    tabIndex: y ? -1 : ne,
    type: V,
    ...be,
    ...te,
    children: [d, et ? /* @__PURE__ */ q.jsx(HR, {
      ref: ge,
      center: f,
      ...ie
    }) : null]
  });
});
function Ta(a, r, i, u = !1) {
  return qr((c) => (i && i(c), u || a[r](c), !0));
}
function VR(a) {
  return typeof a.main == "string";
}
function GR(a, r = []) {
  if (!VR(a))
    return !1;
  for (const i of r)
    if (!a.hasOwnProperty(i) || typeof a[i] != "string")
      return !1;
  return !0;
}
function $l(a = []) {
  return ([, r]) => r && GR(r, a);
}
function XR(a) {
  return fn("MuiCircularProgress", a);
}
Zt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const tl = 44, Zd = po`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Id = po`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, QR = typeof Zd != "string" ? pp`
        animation: ${Zd} 1.4s linear infinite;
      ` : null, KR = typeof Id != "string" ? pp`
        animation: ${Id} 1.4s ease-in-out infinite;
      ` : null, ZR = (a) => {
  const {
    classes: r,
    variant: i,
    color: u,
    disableShrink: c
  } = a, f = {
    root: ["root", i, `color${me(u)}`],
    svg: ["svg"],
    circle: ["circle", `circle${me(i)}`, c && "circleDisableShrink"]
  };
  return An(f, XR, r);
}, IR = Ze("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`color${me(i.color)}`]];
  }
})(Ht(({
  theme: a
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: QR || {
      animation: `${Zd} 1.4s linear infinite`
    }
  }, ...Object.entries(a.palette).filter($l()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  }))]
}))), PR = Ze("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (a, r) => r.svg
})({
  display: "block"
  // Keeps the progress centered
}), JR = Ze("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.circle, r[`circle${me(i.variant)}`], i.disableShrink && r.circleDisableShrink];
  }
})(Ht(({
  theme: a
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" && !r.disableShrink,
    style: KR || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Id} 1.4s ease-in-out infinite`
    }
  }]
}))), Yb = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiCircularProgress"
  }), {
    className: c,
    color: f = "primary",
    disableShrink: d = !1,
    size: h = 40,
    style: m,
    thickness: y = 3.6,
    value: b = 0,
    variant: g = "indeterminate",
    ...x
  } = u, T = {
    ...u,
    color: f,
    disableShrink: d,
    size: h,
    thickness: y,
    value: b,
    variant: g
  }, R = ZR(T), E = {}, w = {}, A = {};
  if (g === "determinate") {
    const $ = 2 * Math.PI * ((tl - y) / 2);
    E.strokeDasharray = $.toFixed(3), A["aria-valuenow"] = Math.round(b), E.strokeDashoffset = `${((100 - b) / 100 * $).toFixed(3)}px`, w.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ q.jsx(IR, {
    className: je(R.root, c),
    style: {
      width: h,
      height: h,
      ...w,
      ...m
    },
    ownerState: T,
    ref: i,
    role: "progressbar",
    ...A,
    ...x,
    children: /* @__PURE__ */ q.jsx(PR, {
      className: R.svg,
      ownerState: T,
      viewBox: `${tl / 2} ${tl / 2} ${tl} ${tl}`,
      children: /* @__PURE__ */ q.jsx(JR, {
        className: R.circle,
        style: E,
        ownerState: T,
        cx: tl,
        cy: tl,
        r: (tl - y) / 2,
        fill: "none",
        strokeWidth: y
      })
    })
  });
});
function FR(a) {
  return fn("MuiIconButton", a);
}
const nv = Zt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), WR = (a) => {
  const {
    classes: r,
    disabled: i,
    color: u,
    edge: c,
    size: f,
    loading: d
  } = a, h = {
    root: ["root", d && "loading", i && "disabled", u !== "default" && `color${me(u)}`, c && `edge${me(c)}`, `size${me(f)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return An(h, FR, r);
}, e3 = Ze(Np, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.loading && r.loading, i.color !== "default" && r[`color${me(i.color)}`], i.edge && r[`edge${me(i.edge)}`], r[`size${me(i.size)}`]];
  }
})(Ht(({
  theme: a
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: a.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (a.vars || a).palette.action.active,
  transition: a.transitions.create("background-color", {
    duration: a.transitions.duration.shortest
  }),
  variants: [{
    props: (r) => !r.disableRipple,
    style: {
      "--IconButton-hoverBg": a.vars ? `rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette.action.active, a.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ht(({
  theme: a
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(a.palette).filter($l()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  })), ...Object.entries(a.palette).filter($l()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      "--IconButton-hoverBg": a.vars ? `rgba(${(a.vars || a).palette[r].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn((a.vars || a).palette[r].main, a.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: a.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: a.typography.pxToRem(28)
    }
  }],
  [`&.${nv.disabled}`]: {
    backgroundColor: "transparent",
    color: (a.vars || a).palette.action.disabled
  },
  [`&.${nv.loading}`]: {
    color: "transparent"
  }
}))), t3 = Ze("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (a, r) => r.loadingIndicator
})(({
  theme: a
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (a.vars || a).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), n3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiIconButton"
  }), {
    edge: c = !1,
    children: f,
    className: d,
    color: h = "default",
    disabled: m = !1,
    disableFocusRipple: y = !1,
    size: b = "medium",
    id: g,
    loading: x = null,
    loadingIndicator: T,
    ...R
  } = u, E = Tp(g), w = T ?? /* @__PURE__ */ q.jsx(Yb, {
    "aria-labelledby": E,
    color: "inherit",
    size: 16
  }), A = {
    ...u,
    edge: c,
    color: h,
    disabled: m,
    disableFocusRipple: y,
    loading: x,
    loadingIndicator: w,
    size: b
  }, $ = WR(A);
  return /* @__PURE__ */ q.jsxs(e3, {
    id: x ? E : g,
    className: je($.root, d),
    centerRipple: !0,
    focusRipple: !y,
    disabled: m || x,
    ref: i,
    ...R,
    ownerState: A,
    children: [typeof x == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ q.jsx("span", {
      className: $.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ q.jsx(t3, {
        className: $.loadingIndicator,
        ownerState: A,
        children: x && w
      })
    }), f]
  });
});
function a3(a) {
  return fn("MuiTypography", a);
}
Zt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const l3 = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, r3 = pR(), i3 = (a) => {
  const {
    align: r,
    gutterBottom: i,
    noWrap: u,
    paragraph: c,
    variant: f,
    classes: d
  } = a, h = {
    root: ["root", f, a.align !== "inherit" && `align${me(r)}`, i && "gutterBottom", u && "noWrap", c && "paragraph"]
  };
  return An(h, a3, d);
}, o3 = Ze("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.variant && r[i.variant], i.align !== "inherit" && r[`align${me(i.align)}`], i.noWrap && r.noWrap, i.gutterBottom && r.gutterBottom, i.paragraph && r.paragraph];
  }
})(Ht(({
  theme: a
}) => {
  var r;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(a.typography).filter(([i, u]) => i !== "inherit" && u && typeof u == "object").map(([i, u]) => ({
      props: {
        variant: i
      },
      style: u
    })), ...Object.entries(a.palette).filter($l()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        color: (a.vars || a).palette[i].main
      }
    })), ...Object.entries(((r = a.palette) == null ? void 0 : r.text) || {}).filter(([, i]) => typeof i == "string").map(([i]) => ({
      props: {
        color: `text${me(i)}`
      },
      style: {
        color: (a.vars || a).palette.text[i]
      }
    })), {
      props: ({
        ownerState: i
      }) => i.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), av = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, u3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const {
    color: u,
    ...c
  } = dn({
    props: r,
    name: "MuiTypography"
  }), f = !l3[u], d = r3({
    ...c,
    ...f && {
      color: u
    }
  }), {
    align: h = "inherit",
    className: m,
    component: y,
    gutterBottom: b = !1,
    noWrap: g = !1,
    paragraph: x = !1,
    variant: T = "body1",
    variantMapping: R = av,
    ...E
  } = d, w = {
    ...d,
    align: h,
    color: u,
    className: m,
    component: y,
    gutterBottom: b,
    noWrap: g,
    paragraph: x,
    variant: T,
    variantMapping: R
  }, A = y || (x ? "p" : R[T] || av[T]) || "span", $ = i3(w);
  return /* @__PURE__ */ q.jsx(o3, {
    as: A,
    ref: i,
    className: je($.root, m),
    ...E,
    ownerState: w,
    style: {
      ...h !== "inherit" && {
        "--Typography-textAlign": h
      },
      ...E.style
    }
  });
});
function s3(a) {
  return typeof a == "function" ? a() : a;
}
const c3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const {
    children: u,
    container: c,
    disablePortal: f = !1
  } = r, [d, h] = C.useState(null), m = ol(/* @__PURE__ */ C.isValidElement(u) ? Ms(u) : null, i);
  if (Qr(() => {
    f || h(s3(c) || document.body);
  }, [c, f]), Qr(() => {
    if (d && !f)
      return L0(i, d), () => {
        L0(i, null);
      };
  }, [i, d, f]), f) {
    if (/* @__PURE__ */ C.isValidElement(u)) {
      const y = {
        ref: m
      };
      return /* @__PURE__ */ C.cloneElement(u, y);
    }
    return u;
  }
  return d && /* @__PURE__ */ Kv.createPortal(u, d);
}), f3 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, d3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = yo(), c = {
    enter: u.transitions.duration.enteringScreen,
    exit: u.transitions.duration.leavingScreen
  }, {
    addEndListener: f,
    appear: d = !0,
    children: h,
    easing: m,
    in: y,
    onEnter: b,
    onEntered: g,
    onEntering: x,
    onExit: T,
    onExited: R,
    onExiting: E,
    style: w,
    timeout: A = c,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: $ = ra,
    ...U
  } = r, L = C.useRef(null), N = ol(L, Ms(h), i), G = (ie) => (W) => {
    if (ie) {
      const V = L.current;
      W === void 0 ? ie(V) : ie(V, W);
    }
  }, k = G(x), Q = G((ie, W) => {
    $b(ie);
    const V = ds({
      style: w,
      timeout: A,
      easing: m
    }, {
      mode: "enter"
    });
    ie.style.webkitTransition = u.transitions.create("opacity", V), ie.style.transition = u.transitions.create("opacity", V), b && b(ie, W);
  }), J = G(g), S = G(E), I = G((ie) => {
    const W = ds({
      style: w,
      timeout: A,
      easing: m
    }, {
      mode: "exit"
    });
    ie.style.webkitTransition = u.transitions.create("opacity", W), ie.style.transition = u.transitions.create("opacity", W), T && T(ie);
  }), ee = G(R), ne = (ie) => {
    f && f(L.current, ie);
  };
  return /* @__PURE__ */ q.jsx($, {
    appear: d,
    in: y,
    nodeRef: L,
    onEnter: Q,
    onEntered: J,
    onEntering: k,
    onExit: I,
    onExited: ee,
    onExiting: S,
    addEndListener: ne,
    timeout: A,
    ...U,
    children: (ie, {
      ownerState: W,
      ...V
    }) => /* @__PURE__ */ C.cloneElement(h, {
      style: {
        opacity: 0,
        visibility: ie === "exited" && !y ? "hidden" : void 0,
        ...f3[ie],
        ...w,
        ...h.props.style
      },
      ref: N,
      ...V
    })
  });
});
function p3(a) {
  return fn("MuiBackdrop", a);
}
Zt("MuiBackdrop", ["root", "invisible"]);
const h3 = (a) => {
  const {
    classes: r,
    invisible: i
  } = a;
  return An({
    root: ["root", i && "invisible"]
  }, p3, r);
}, m3 = Ze("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, i.invisible && r.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), g3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: f,
    component: d = "div",
    invisible: h = !1,
    open: m,
    components: y = {},
    componentsProps: b = {},
    slotProps: g = {},
    slots: x = {},
    TransitionComponent: T,
    transitionDuration: R,
    ...E
  } = u, w = {
    ...u,
    component: d,
    invisible: h
  }, A = h3(w), $ = {
    transition: T,
    root: y.Root,
    ...x
  }, U = {
    ...b,
    ...g
  }, L = {
    slots: $,
    slotProps: U
  }, [N, G] = ea("root", {
    elementType: m3,
    externalForwardedProps: L,
    className: je(A.root, f),
    ownerState: w
  }), [k, Q] = ea("transition", {
    elementType: d3,
    externalForwardedProps: L,
    ownerState: w
  });
  return /* @__PURE__ */ q.jsx(k, {
    in: m,
    timeout: R,
    ...E,
    ...Q,
    children: /* @__PURE__ */ q.jsx(N, {
      "aria-hidden": !0,
      ...G,
      classes: A,
      ref: i,
      children: c
    })
  });
});
function y3(a) {
  const {
    badgeContent: r,
    invisible: i = !1,
    max: u = 99,
    showZero: c = !1
  } = a, f = Tb({
    badgeContent: r,
    max: u
  });
  let d = i;
  i === !1 && r === 0 && !c && (d = !0);
  const {
    badgeContent: h,
    max: m = u
  } = d ? f : a, y = h && Number(h) > m ? `${m}+` : h;
  return {
    badgeContent: h,
    invisible: d,
    max: m,
    displayValue: y
  };
}
function v3(a) {
  return fn("MuiBadge", a);
}
const nl = Zt("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), wd = 10, Ad = 4, b3 = (a) => {
  const {
    color: r,
    anchorOrigin: i,
    invisible: u,
    overlap: c,
    variant: f,
    classes: d = {}
  } = a, h = {
    root: ["root"],
    badge: ["badge", f, u && "invisible", `anchorOrigin${me(i.vertical)}${me(i.horizontal)}`, `anchorOrigin${me(i.vertical)}${me(i.horizontal)}${me(c)}`, `overlap${me(c)}`, r !== "default" && `color${me(r)}`]
  };
  return An(h, v3, d);
}, S3 = Ze("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (a, r) => r.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), x3 = Ze("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.badge, r[i.variant], r[`anchorOrigin${me(i.anchorOrigin.vertical)}${me(i.anchorOrigin.horizontal)}${me(i.overlap)}`], i.color !== "default" && r[`color${me(i.color)}`], i.invisible && r.invisible];
  }
})(Ht(({
  theme: a
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: a.typography.fontFamily,
  fontWeight: a.typography.fontWeightMedium,
  fontSize: a.typography.pxToRem(12),
  minWidth: wd * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: wd * 2,
  borderRadius: wd,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: a.transitions.create("transform", {
    easing: a.transitions.easing.easeInOut,
    duration: a.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(a.palette).filter($l(["contrastText"])).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      backgroundColor: (a.vars || a).palette[r].main,
      color: (a.vars || a).palette[r].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: Ad,
      height: Ad * 2,
      minWidth: Ad * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "right" && r.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "right" && r.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "left" && r.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "left" && r.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "right" && r.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "right" && r.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "top" && r.anchorOrigin.horizontal === "left" && r.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchorOrigin.vertical === "bottom" && r.anchorOrigin.horizontal === "left" && r.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${nl.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: a.transitions.create("transform", {
        easing: a.transitions.easing.easeInOut,
        duration: a.transitions.duration.leavingScreen
      })
    }
  }]
})));
function lv(a) {
  return {
    vertical: (a == null ? void 0 : a.vertical) ?? "top",
    horizontal: (a == null ? void 0 : a.horizontal) ?? "right"
  };
}
const E3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiBadge"
  }), {
    anchorOrigin: c,
    className: f,
    classes: d,
    component: h,
    components: m = {},
    componentsProps: y = {},
    children: b,
    overlap: g = "rectangular",
    color: x = "default",
    invisible: T = !1,
    max: R = 99,
    badgeContent: E,
    slots: w,
    slotProps: A,
    showZero: $ = !1,
    variant: U = "standard",
    ...L
  } = u, {
    badgeContent: N,
    invisible: G,
    max: k,
    displayValue: Q
  } = y3({
    max: R,
    invisible: T,
    badgeContent: E,
    showZero: $
  }), J = Tb({
    anchorOrigin: lv(c),
    color: x,
    overlap: g,
    variant: U,
    badgeContent: E
  }), S = G || N == null && U !== "dot", {
    color: I = x,
    overlap: ee = g,
    anchorOrigin: ne,
    variant: ie = U
  } = S ? J : u, W = lv(ne), V = ie !== "dot" ? Q : void 0, te = {
    ...u,
    badgeContent: N,
    invisible: S,
    max: k,
    displayValue: V,
    showZero: $,
    anchorOrigin: W,
    color: I,
    overlap: ee,
    variant: ie
  }, F = b3(te), le = {
    slots: {
      root: (w == null ? void 0 : w.root) ?? m.Root,
      badge: (w == null ? void 0 : w.badge) ?? m.Badge
    },
    slotProps: {
      root: (A == null ? void 0 : A.root) ?? y.root,
      badge: (A == null ? void 0 : A.badge) ?? y.badge
    }
  }, [ge, Ce] = ea("root", {
    elementType: S3,
    externalForwardedProps: {
      ...le,
      ...L
    },
    ownerState: te,
    className: je(F.root, f),
    ref: i,
    additionalProps: {
      as: h
    }
  }), [Le, et] = ea("badge", {
    elementType: x3,
    externalForwardedProps: le,
    ownerState: te,
    className: F.badge
  });
  return /* @__PURE__ */ q.jsxs(ge, {
    ...Ce,
    children: [b, /* @__PURE__ */ q.jsx(Le, {
      ...et,
      children: V
    })]
  });
}), C3 = Zt("MuiBox", ["root"]), T3 = ro(), rv = DT({
  themeId: ta,
  defaultTheme: T3,
  defaultClassName: C3.root,
  generateClassName: gb.generate
});
function R3(a) {
  return fn("MuiButton", a);
}
const Dl = Zt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), O3 = /* @__PURE__ */ C.createContext({}), w3 = /* @__PURE__ */ C.createContext(void 0), A3 = (a) => {
  const {
    color: r,
    disableElevation: i,
    fullWidth: u,
    size: c,
    variant: f,
    loading: d,
    loadingPosition: h,
    classes: m
  } = a, y = {
    root: ["root", d && "loading", f, `${f}${me(r)}`, `size${me(c)}`, `${f}Size${me(c)}`, `color${me(r)}`, i && "disableElevation", u && "fullWidth", d && `loadingPosition${me(h)}`],
    startIcon: ["icon", "startIcon", `iconSize${me(c)}`],
    endIcon: ["icon", "endIcon", `iconSize${me(c)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, b = An(y, R3, m);
  return {
    ...m,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...b
  };
}, qb = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], z3 = Ze(Np, {
  shouldForwardProp: (a) => _s(a) || a === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`${i.variant}${me(i.color)}`], r[`size${me(i.size)}`], r[`${i.variant}Size${me(i.size)}`], i.color === "inherit" && r.colorInherit, i.disableElevation && r.disableElevation, i.fullWidth && r.fullWidth, i.loading && r.loading];
  }
})(Ht(({
  theme: a
}) => {
  const r = a.palette.mode === "light" ? a.palette.grey[300] : a.palette.grey[800], i = a.palette.mode === "light" ? a.palette.grey.A100 : a.palette.grey[700];
  return {
    ...a.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (a.vars || a).shape.borderRadius,
    transition: a.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: a.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Dl.disabled}`]: {
      color: (a.vars || a).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (a.vars || a).shadows[2],
        "&:hover": {
          boxShadow: (a.vars || a).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (a.vars || a).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (a.vars || a).shadows[8]
        },
        [`&.${Dl.focusVisible}`]: {
          boxShadow: (a.vars || a).shadows[6]
        },
        [`&.${Dl.disabled}`]: {
          color: (a.vars || a).palette.action.disabled,
          boxShadow: (a.vars || a).shadows[0],
          backgroundColor: (a.vars || a).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Dl.disabled}`]: {
          border: `1px solid ${(a.vars || a).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(a.palette).filter($l()).map(([u]) => ({
      props: {
        color: u
      },
      style: {
        "--variant-textColor": (a.vars || a).palette[u].main,
        "--variant-outlinedColor": (a.vars || a).palette[u].main,
        "--variant-outlinedBorder": a.vars ? `rgba(${a.vars.palette[u].mainChannel} / 0.5)` : Wn(a.palette[u].main, 0.5),
        "--variant-containedColor": (a.vars || a).palette[u].contrastText,
        "--variant-containedBg": (a.vars || a).palette[u].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (a.vars || a).palette[u].dark,
            "--variant-textBg": a.vars ? `rgba(${a.vars.palette[u].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette[u].main, a.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (a.vars || a).palette[u].main,
            "--variant-outlinedBg": a.vars ? `rgba(${a.vars.palette[u].mainChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette[u].main, a.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": a.vars ? a.vars.palette.Button.inheritContainedBg : r,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": a.vars ? a.vars.palette.Button.inheritContainedHoverBg : i,
            "--variant-textBg": a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette.text.primary, a.palette.action.hoverOpacity),
            "--variant-outlinedBg": a.vars ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})` : Wn(a.palette.text.primary, a.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: a.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: a.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Dl.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Dl.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: a.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: a.transitions.duration.short
        }),
        [`&.${Dl.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), M3 = Ze("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.startIcon, i.loading && r.startIconLoadingStart, r[`iconSize${me(i.size)}`]];
  }
})(({
  theme: a
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: a.transitions.create(["opacity"], {
        duration: a.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...qb]
})), _3 = Ze("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.endIcon, i.loading && r.endIconLoadingEnd, r[`iconSize${me(i.size)}`]];
  }
})(({
  theme: a
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: a.transitions.create(["opacity"], {
        duration: a.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...qb]
})), N3 = Ze("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (a, r) => r.loadingIndicator
})(({
  theme: a
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (a.vars || a).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), iv = Ze("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (a, r) => r.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ju = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = C.useContext(O3), c = C.useContext(w3), f = lo(u, r), d = dn({
    props: f,
    name: "MuiButton"
  }), {
    children: h,
    color: m = "primary",
    component: y = "button",
    className: b,
    disabled: g = !1,
    disableElevation: x = !1,
    disableFocusRipple: T = !1,
    endIcon: R,
    focusVisibleClassName: E,
    fullWidth: w = !1,
    id: A,
    loading: $ = null,
    loadingIndicator: U,
    loadingPosition: L = "center",
    size: N = "medium",
    startIcon: G,
    type: k,
    variant: Q = "text",
    ...J
  } = d, S = Tp(A), I = U ?? /* @__PURE__ */ q.jsx(Yb, {
    "aria-labelledby": S,
    color: "inherit",
    size: 16
  }), ee = {
    ...d,
    color: m,
    component: y,
    disabled: g,
    disableElevation: x,
    disableFocusRipple: T,
    fullWidth: w,
    loading: $,
    loadingIndicator: I,
    loadingPosition: L,
    size: N,
    type: k,
    variant: Q
  }, ne = A3(ee), ie = (G || $ && L === "start") && /* @__PURE__ */ q.jsx(M3, {
    className: ne.startIcon,
    ownerState: ee,
    children: G || /* @__PURE__ */ q.jsx(iv, {
      className: ne.loadingIconPlaceholder,
      ownerState: ee
    })
  }), W = (R || $ && L === "end") && /* @__PURE__ */ q.jsx(_3, {
    className: ne.endIcon,
    ownerState: ee,
    children: R || /* @__PURE__ */ q.jsx(iv, {
      className: ne.loadingIconPlaceholder,
      ownerState: ee
    })
  }), V = c || "", te = typeof $ == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ q.jsx("span", {
      className: ne.loadingWrapper,
      style: {
        display: "contents"
      },
      children: $ && /* @__PURE__ */ q.jsx(N3, {
        className: ne.loadingIndicator,
        ownerState: ee,
        children: I
      })
    })
  ) : null;
  return /* @__PURE__ */ q.jsxs(z3, {
    ownerState: ee,
    className: je(u.className, ne.root, b, V),
    component: y,
    disabled: g || $,
    focusRipple: !T,
    focusVisibleClassName: je(ne.focusVisible, E),
    ref: i,
    type: k,
    id: $ ? S : A,
    ...J,
    classes: ne,
    children: [ie, L !== "end" && te, h, L === "end" && te, W]
  });
});
function D3(a) {
  const r = kl(a);
  return r.body === a ? Kr(a).innerWidth > r.documentElement.clientWidth : a.scrollHeight > a.clientHeight;
}
function Wi(a, r) {
  r ? a.setAttribute("aria-hidden", "true") : a.removeAttribute("aria-hidden");
}
function ov(a) {
  return parseInt(Kr(a).getComputedStyle(a).paddingRight, 10) || 0;
}
function B3(a) {
  const i = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a.tagName), u = a.tagName === "INPUT" && a.getAttribute("type") === "hidden";
  return i || u;
}
function uv(a, r, i, u, c) {
  const f = [r, i, ...u];
  [].forEach.call(a.children, (d) => {
    const h = !f.includes(d), m = !B3(d);
    h && m && Wi(d, c);
  });
}
function zd(a, r) {
  let i = -1;
  return a.some((u, c) => r(u) ? (i = c, !0) : !1), i;
}
function U3(a, r) {
  const i = [], u = a.container;
  if (!r.disableScrollLock) {
    if (D3(u)) {
      const d = l5(Kr(u));
      i.push({
        value: u.style.paddingRight,
        property: "padding-right",
        el: u
      }), u.style.paddingRight = `${ov(u) + d}px`;
      const h = kl(u).querySelectorAll(".mui-fixed");
      [].forEach.call(h, (m) => {
        i.push({
          value: m.style.paddingRight,
          property: "padding-right",
          el: m
        }), m.style.paddingRight = `${ov(m) + d}px`;
      });
    }
    let f;
    if (u.parentNode instanceof DocumentFragment)
      f = kl(u).body;
    else {
      const d = u.parentElement, h = Kr(u);
      f = (d == null ? void 0 : d.nodeName) === "HTML" && h.getComputedStyle(d).overflowY === "scroll" ? d : u;
    }
    i.push({
      value: f.style.overflow,
      property: "overflow",
      el: f
    }, {
      value: f.style.overflowX,
      property: "overflow-x",
      el: f
    }, {
      value: f.style.overflowY,
      property: "overflow-y",
      el: f
    }), f.style.overflow = "hidden";
  }
  return () => {
    i.forEach(({
      value: f,
      el: d,
      property: h
    }) => {
      f ? d.style.setProperty(h, f) : d.style.removeProperty(h);
    });
  };
}
function j3(a) {
  const r = [];
  return [].forEach.call(a.children, (i) => {
    i.getAttribute("aria-hidden") === "true" && r.push(i);
  }), r;
}
class L3 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, i) {
    let u = this.modals.indexOf(r);
    if (u !== -1)
      return u;
    u = this.modals.length, this.modals.push(r), r.modalRef && Wi(r.modalRef, !1);
    const c = j3(i);
    uv(i, r.mount, r.modalRef, c, !0);
    const f = zd(this.containers, (d) => d.container === i);
    return f !== -1 ? (this.containers[f].modals.push(r), u) : (this.containers.push({
      modals: [r],
      container: i,
      restore: null,
      hiddenSiblings: c
    }), u);
  }
  mount(r, i) {
    const u = zd(this.containers, (f) => f.modals.includes(r)), c = this.containers[u];
    c.restore || (c.restore = U3(c, i));
  }
  remove(r, i = !0) {
    const u = this.modals.indexOf(r);
    if (u === -1)
      return u;
    const c = zd(this.containers, (d) => d.modals.includes(r)), f = this.containers[c];
    if (f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(u, 1), f.modals.length === 0)
      f.restore && f.restore(), r.modalRef && Wi(r.modalRef, i), uv(f.container, r.mount, r.modalRef, f.hiddenSiblings, !1), this.containers.splice(c, 1);
    else {
      const d = f.modals[f.modals.length - 1];
      d.modalRef && Wi(d.modalRef, !1);
    }
    return u;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const H3 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function k3(a) {
  const r = parseInt(a.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? a.contentEditable === "true" || (a.nodeName === "AUDIO" || a.nodeName === "VIDEO" || a.nodeName === "DETAILS") && a.getAttribute("tabindex") === null ? 0 : a.tabIndex : r;
}
function $3(a) {
  if (a.tagName !== "INPUT" || a.type !== "radio" || !a.name)
    return !1;
  const r = (u) => a.ownerDocument.querySelector(`input[type="radio"]${u}`);
  let i = r(`[name="${a.name}"]:checked`);
  return i || (i = r(`[name="${a.name}"]`)), i !== a;
}
function Y3(a) {
  return !(a.disabled || a.tagName === "INPUT" && a.type === "hidden" || $3(a));
}
function q3(a) {
  const r = [], i = [];
  return Array.from(a.querySelectorAll(H3)).forEach((u, c) => {
    const f = k3(u);
    f === -1 || !Y3(u) || (f === 0 ? r.push(u) : i.push({
      documentOrder: c,
      tabIndex: f,
      node: u
    }));
  }), i.sort((u, c) => u.tabIndex === c.tabIndex ? u.documentOrder - c.documentOrder : u.tabIndex - c.tabIndex).map((u) => u.node).concat(r);
}
function V3() {
  return !0;
}
function G3(a) {
  const {
    children: r,
    disableAutoFocus: i = !1,
    disableEnforceFocus: u = !1,
    disableRestoreFocus: c = !1,
    getTabbable: f = q3,
    isEnabled: d = V3,
    open: h
  } = a, m = C.useRef(!1), y = C.useRef(null), b = C.useRef(null), g = C.useRef(null), x = C.useRef(null), T = C.useRef(!1), R = C.useRef(null), E = ol(Ms(r), R), w = C.useRef(null);
  C.useEffect(() => {
    !h || !R.current || (T.current = !i);
  }, [i, h]), C.useEffect(() => {
    if (!h || !R.current)
      return;
    const U = kl(R.current);
    return R.current.contains(U.activeElement) || (R.current.hasAttribute("tabIndex") || R.current.setAttribute("tabIndex", "-1"), T.current && R.current.focus()), () => {
      c || (g.current && g.current.focus && (m.current = !0, g.current.focus()), g.current = null);
    };
  }, [h]), C.useEffect(() => {
    if (!h || !R.current)
      return;
    const U = kl(R.current), L = (k) => {
      w.current = k, !(u || !d() || k.key !== "Tab") && U.activeElement === R.current && k.shiftKey && (m.current = !0, b.current && b.current.focus());
    }, N = () => {
      var J, S;
      const k = R.current;
      if (k === null)
        return;
      if (!U.hasFocus() || !d() || m.current) {
        m.current = !1;
        return;
      }
      if (k.contains(U.activeElement) || u && U.activeElement !== y.current && U.activeElement !== b.current)
        return;
      if (U.activeElement !== x.current)
        x.current = null;
      else if (x.current !== null)
        return;
      if (!T.current)
        return;
      let Q = [];
      if ((U.activeElement === y.current || U.activeElement === b.current) && (Q = f(R.current)), Q.length > 0) {
        const I = !!((J = w.current) != null && J.shiftKey && ((S = w.current) == null ? void 0 : S.key) === "Tab"), ee = Q[0], ne = Q[Q.length - 1];
        typeof ee != "string" && typeof ne != "string" && (I ? ne.focus() : ee.focus());
      } else
        k.focus();
    };
    U.addEventListener("focusin", N), U.addEventListener("keydown", L, !0);
    const G = setInterval(() => {
      U.activeElement && U.activeElement.tagName === "BODY" && N();
    }, 50);
    return () => {
      clearInterval(G), U.removeEventListener("focusin", N), U.removeEventListener("keydown", L, !0);
    };
  }, [i, u, c, d, h, f]);
  const A = (U) => {
    g.current === null && (g.current = U.relatedTarget), T.current = !0, x.current = U.target;
    const L = r.props.onFocus;
    L && L(U);
  }, $ = (U) => {
    g.current === null && (g.current = U.relatedTarget), T.current = !0;
  };
  return /* @__PURE__ */ q.jsxs(C.Fragment, {
    children: [/* @__PURE__ */ q.jsx("div", {
      tabIndex: h ? 0 : -1,
      onFocus: $,
      ref: y,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ C.cloneElement(r, {
      ref: E,
      onFocus: A
    }), /* @__PURE__ */ q.jsx("div", {
      tabIndex: h ? 0 : -1,
      onFocus: $,
      ref: b,
      "data-testid": "sentinelEnd"
    })]
  });
}
function X3(a) {
  return typeof a == "function" ? a() : a;
}
function Q3(a) {
  return a ? a.props.hasOwnProperty("in") : !1;
}
const sv = () => {
}, Fu = new L3();
function K3(a) {
  const {
    container: r,
    disableEscapeKeyDown: i = !1,
    disableScrollLock: u = !1,
    closeAfterTransition: c = !1,
    onTransitionEnter: f,
    onTransitionExited: d,
    children: h,
    onClose: m,
    open: y,
    rootRef: b
  } = a, g = C.useRef({}), x = C.useRef(null), T = C.useRef(null), R = ol(T, b), [E, w] = C.useState(!y), A = Q3(h);
  let $ = !0;
  (a["aria-hidden"] === "false" || a["aria-hidden"] === !1) && ($ = !1);
  const U = () => kl(x.current), L = () => (g.current.modalRef = T.current, g.current.mount = x.current, g.current), N = () => {
    Fu.mount(L(), {
      disableScrollLock: u
    }), T.current && (T.current.scrollTop = 0);
  }, G = qr(() => {
    const W = X3(r) || U().body;
    Fu.add(L(), W), T.current && N();
  }), k = () => Fu.isTopModal(L()), Q = qr((W) => {
    x.current = W, W && (y && k() ? N() : T.current && Wi(T.current, $));
  }), J = C.useCallback(() => {
    Fu.remove(L(), $);
  }, [$]);
  C.useEffect(() => () => {
    J();
  }, [J]), C.useEffect(() => {
    y ? G() : (!A || !c) && J();
  }, [y, J, A, c, G]);
  const S = (W) => (V) => {
    var te;
    (te = W.onKeyDown) == null || te.call(W, V), !(V.key !== "Escape" || V.which === 229 || // Wait until IME is settled.
    !k()) && (i || (V.stopPropagation(), m && m(V, "escapeKeyDown")));
  }, I = (W) => (V) => {
    var te;
    (te = W.onClick) == null || te.call(W, V), V.target === V.currentTarget && m && m(V, "backdropClick");
  };
  return {
    getRootProps: (W = {}) => {
      const V = Rb(a);
      delete V.onTransitionEnter, delete V.onTransitionExited;
      const te = {
        ...V,
        ...W
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...te,
        onKeyDown: S(te),
        ref: R
      };
    },
    getBackdropProps: (W = {}) => {
      const V = W;
      return {
        "aria-hidden": !0,
        ...V,
        onClick: I(V),
        open: y
      };
    },
    getTransitionProps: () => {
      const W = () => {
        w(!1), f && f();
      }, V = () => {
        w(!0), d && d(), c && J();
      };
      return {
        onEnter: j0(W, (h == null ? void 0 : h.props.onEnter) ?? sv),
        onExited: j0(V, (h == null ? void 0 : h.props.onExited) ?? sv)
      };
    },
    rootRef: R,
    portalRef: Q,
    isTopModal: k,
    exited: E,
    hasTransition: A
  };
}
function Z3(a) {
  return fn("MuiModal", a);
}
Zt("MuiModal", ["root", "hidden", "backdrop"]);
const I3 = (a) => {
  const {
    open: r,
    exited: i,
    classes: u
  } = a;
  return An({
    root: ["root", !r && i && "hidden"],
    backdrop: ["backdrop"]
  }, Z3, u);
}, P3 = Ze("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, !i.open && i.exited && r.hidden];
  }
})(Ht(({
  theme: a
}) => ({
  position: "fixed",
  zIndex: (a.vars || a).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: r
    }) => !r.open && r.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), J3 = Ze(g3, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (a, r) => r.backdrop
})({
  zIndex: -1
}), F3 = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    name: "MuiModal",
    props: r
  }), {
    BackdropComponent: c = J3,
    BackdropProps: f,
    classes: d,
    className: h,
    closeAfterTransition: m = !1,
    children: y,
    container: b,
    component: g,
    components: x = {},
    componentsProps: T = {},
    disableAutoFocus: R = !1,
    disableEnforceFocus: E = !1,
    disableEscapeKeyDown: w = !1,
    disablePortal: A = !1,
    disableRestoreFocus: $ = !1,
    disableScrollLock: U = !1,
    hideBackdrop: L = !1,
    keepMounted: N = !1,
    onBackdropClick: G,
    onClose: k,
    onTransitionEnter: Q,
    onTransitionExited: J,
    open: S,
    slotProps: I = {},
    slots: ee = {},
    // eslint-disable-next-line react/prop-types
    theme: ne,
    ...ie
  } = u, W = {
    ...u,
    closeAfterTransition: m,
    disableAutoFocus: R,
    disableEnforceFocus: E,
    disableEscapeKeyDown: w,
    disablePortal: A,
    disableRestoreFocus: $,
    disableScrollLock: U,
    hideBackdrop: L,
    keepMounted: N
  }, {
    getRootProps: V,
    getBackdropProps: te,
    getTransitionProps: F,
    portalRef: le,
    isTopModal: ge,
    exited: Ce,
    hasTransition: Le
  } = K3({
    ...W,
    rootRef: i
  }), et = {
    ...W,
    exited: Ce
  }, z = I3(et), P = {};
  if (y.props.tabIndex === void 0 && (P.tabIndex = "-1"), Le) {
    const {
      onEnter: re,
      onExited: de
    } = F();
    P.onEnter = re, P.onExited = de;
  }
  const ue = {
    slots: {
      root: x.Root,
      backdrop: x.Backdrop,
      ...ee
    },
    slotProps: {
      ...T,
      ...I
    }
  }, [ce, Ee] = ea("root", {
    ref: i,
    elementType: P3,
    externalForwardedProps: {
      ...ue,
      ...ie,
      component: g
    },
    getSlotProps: V,
    ownerState: et,
    className: je(h, z == null ? void 0 : z.root, !et.open && et.exited && (z == null ? void 0 : z.hidden))
  }), [Re, Oe] = ea("backdrop", {
    ref: f == null ? void 0 : f.ref,
    elementType: c,
    externalForwardedProps: ue,
    shouldForwardComponentProp: !0,
    additionalProps: f,
    getSlotProps: (re) => te({
      ...re,
      onClick: (de) => {
        G && G(de), re != null && re.onClick && re.onClick(de);
      }
    }),
    className: je(f == null ? void 0 : f.className, z == null ? void 0 : z.backdrop),
    ownerState: et
  });
  return !N && !S && (!Le || Ce) ? null : /* @__PURE__ */ q.jsx(c3, {
    ref: le,
    container: b,
    disablePortal: A,
    children: /* @__PURE__ */ q.jsxs(ce, {
      ...Ee,
      children: [!L && c ? /* @__PURE__ */ q.jsx(Re, {
        ...Oe
      }) : null, /* @__PURE__ */ q.jsx(G3, {
        disableEnforceFocus: E,
        disableAutoFocus: R,
        disableRestoreFocus: $,
        isEnabled: ge,
        open: S,
        children: /* @__PURE__ */ C.cloneElement(y, P)
      })]
    })
  });
});
function W3(a, r, i) {
  const u = r.getBoundingClientRect(), c = i && i.getBoundingClientRect(), f = Kr(r);
  let d;
  if (r.fakeTransform)
    d = r.fakeTransform;
  else {
    const y = f.getComputedStyle(r);
    d = y.getPropertyValue("-webkit-transform") || y.getPropertyValue("transform");
  }
  let h = 0, m = 0;
  if (d && d !== "none" && typeof d == "string") {
    const y = d.split("(")[1].split(")")[0].split(",");
    h = parseInt(y[4], 10), m = parseInt(y[5], 10);
  }
  return a === "left" ? c ? `translateX(${c.right + h - u.left}px)` : `translateX(${f.innerWidth + h - u.left}px)` : a === "right" ? c ? `translateX(-${u.right - c.left - h}px)` : `translateX(-${u.left + u.width - h}px)` : a === "up" ? c ? `translateY(${c.bottom + m - u.top}px)` : `translateY(${f.innerHeight + m - u.top}px)` : c ? `translateY(-${u.top - c.top + u.height - m}px)` : `translateY(-${u.top + u.height - m}px)`;
}
function eO(a) {
  return typeof a == "function" ? a() : a;
}
function Wu(a, r, i) {
  const u = eO(i), c = W3(a, r, u);
  c && (r.style.webkitTransform = c, r.style.transform = c);
}
const tO = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = yo(), c = {
    enter: u.transitions.easing.easeOut,
    exit: u.transitions.easing.sharp
  }, f = {
    enter: u.transitions.duration.enteringScreen,
    exit: u.transitions.duration.leavingScreen
  }, {
    addEndListener: d,
    appear: h = !0,
    children: m,
    container: y,
    direction: b = "down",
    easing: g = c,
    in: x,
    onEnter: T,
    onEntered: R,
    onEntering: E,
    onExit: w,
    onExited: A,
    onExiting: $,
    style: U,
    timeout: L = f,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: N = ra,
    ...G
  } = r, k = C.useRef(null), Q = ol(Ms(m), k, i), J = (F) => (le) => {
    F && (le === void 0 ? F(k.current) : F(k.current, le));
  }, S = J((F, le) => {
    Wu(b, F, y), $b(F), T && T(F, le);
  }), I = J((F, le) => {
    const ge = ds({
      timeout: L,
      style: U,
      easing: g
    }, {
      mode: "enter"
    });
    F.style.webkitTransition = u.transitions.create("-webkit-transform", {
      ...ge
    }), F.style.transition = u.transitions.create("transform", {
      ...ge
    }), F.style.webkitTransform = "none", F.style.transform = "none", E && E(F, le);
  }), ee = J(R), ne = J($), ie = J((F) => {
    const le = ds({
      timeout: L,
      style: U,
      easing: g
    }, {
      mode: "exit"
    });
    F.style.webkitTransition = u.transitions.create("-webkit-transform", le), F.style.transition = u.transitions.create("transform", le), Wu(b, F, y), w && w(F);
  }), W = J((F) => {
    F.style.webkitTransition = "", F.style.transition = "", A && A(F);
  }), V = (F) => {
    d && d(k.current, F);
  }, te = C.useCallback(() => {
    k.current && Wu(b, k.current, y);
  }, [b, y]);
  return C.useEffect(() => {
    if (x || b === "down" || b === "right")
      return;
    const F = FT(() => {
      k.current && Wu(b, k.current, y);
    }), le = Kr(k.current);
    return le.addEventListener("resize", F), () => {
      F.clear(), le.removeEventListener("resize", F);
    };
  }, [b, x, y]), C.useEffect(() => {
    x || te();
  }, [x, te]), /* @__PURE__ */ q.jsx(N, {
    nodeRef: k,
    onEnter: S,
    onEntered: ee,
    onEntering: I,
    onExit: ie,
    onExited: W,
    onExiting: ne,
    addEndListener: V,
    appear: h,
    in: x,
    timeout: L,
    ...G,
    children: (F, {
      ownerState: le,
      ...ge
    }) => /* @__PURE__ */ C.cloneElement(m, {
      ref: Q,
      style: {
        visibility: F === "exited" && !x ? "hidden" : void 0,
        ...U,
        ...m.props.style
      },
      ...ge
    })
  });
});
function nO(a) {
  return fn("MuiDrawer", a);
}
Zt("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Vb = (a, r) => {
  const {
    ownerState: i
  } = a;
  return [r.root, (i.variant === "permanent" || i.variant === "persistent") && r.docked, r.modal];
}, aO = (a) => {
  const {
    classes: r,
    anchor: i,
    variant: u
  } = a, c = {
    root: ["root", `anchor${me(i)}`],
    docked: [(u === "permanent" || u === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${me(i)}`, u !== "temporary" && `paperAnchorDocked${me(i)}`]
  };
  return An(c, nO, r);
}, lO = Ze(F3, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Vb
})(Ht(({
  theme: a
}) => ({
  zIndex: (a.vars || a).zIndex.drawer
}))), rO = Ze("div", {
  shouldForwardProp: _s,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Vb
})({
  flex: "0 0 auto"
}), iO = Ze(AR, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.paper, r[`paperAnchor${me(i.anchor)}`], i.variant !== "temporary" && r[`paperAnchorDocked${me(i.anchor)}`]];
  }
})(Ht(({
  theme: a
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (a.vars || a).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "left" && r.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "top" && r.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "right" && r.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.anchor === "bottom" && r.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(a.vars || a).palette.divider}`
    }
  }]
}))), Gb = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function oO(a) {
  return ["left", "right"].includes(a);
}
function uO({
  direction: a
}, r) {
  return a === "rtl" && oO(r) ? Gb[r] : r;
}
const cv = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiDrawer"
  }), c = yo(), f = h5(), d = {
    enter: c.transitions.duration.enteringScreen,
    exit: c.transitions.duration.leavingScreen
  }, {
    anchor: h = "left",
    BackdropProps: m,
    children: y,
    className: b,
    elevation: g = 16,
    hideBackdrop: x = !1,
    ModalProps: {
      BackdropProps: T,
      ...R
    } = {},
    onClose: E,
    open: w = !1,
    PaperProps: A = {},
    SlideProps: $,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: U,
    transitionDuration: L = d,
    variant: N = "temporary",
    slots: G = {},
    slotProps: k = {},
    ...Q
  } = u, J = C.useRef(!1);
  C.useEffect(() => {
    J.current = !0;
  }, []);
  const S = uO({
    direction: f ? "rtl" : "ltr"
  }, h), ee = {
    ...u,
    anchor: h,
    elevation: g,
    open: w,
    variant: N,
    ...Q
  }, ne = aO(ee), ie = {
    slots: {
      transition: U,
      ...G
    },
    slotProps: {
      paper: A,
      transition: $,
      ...k,
      backdrop: yR(k.backdrop || {
        ...m,
        ...T
      }, {
        transitionDuration: L
      })
    }
  }, [W, V] = ea("root", {
    ref: i,
    elementType: lO,
    className: je(ne.root, ne.modal, b),
    shouldForwardComponentProp: !0,
    ownerState: ee,
    externalForwardedProps: {
      ...ie,
      ...Q,
      ...R
    },
    additionalProps: {
      open: w,
      onClose: E,
      hideBackdrop: x,
      slots: {
        backdrop: ie.slots.backdrop
      },
      slotProps: {
        backdrop: ie.slotProps.backdrop
      }
    }
  }), [te, F] = ea("paper", {
    elementType: iO,
    shouldForwardComponentProp: !0,
    className: je(ne.paper, A.className),
    ownerState: ee,
    externalForwardedProps: ie,
    additionalProps: {
      elevation: N === "temporary" ? g : 0,
      square: !0
    }
  }), [le, ge] = ea("docked", {
    elementType: rO,
    ref: i,
    className: je(ne.root, ne.docked, b),
    ownerState: ee,
    externalForwardedProps: ie,
    additionalProps: Q
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [Ce, Le] = ea("transition", {
    elementType: tO,
    ownerState: ee,
    externalForwardedProps: ie,
    additionalProps: {
      in: w,
      direction: Gb[S],
      timeout: L,
      appear: J.current
    }
  }), et = /* @__PURE__ */ q.jsx(te, {
    ...F,
    children: y
  });
  if (N === "permanent")
    return /* @__PURE__ */ q.jsx(le, {
      ...ge,
      children: et
    });
  const z = /* @__PURE__ */ q.jsx(Ce, {
    ...Le,
    children: et
  });
  return N === "persistent" ? /* @__PURE__ */ q.jsx(le, {
    ...ge,
    children: z
  }) : /* @__PURE__ */ q.jsx(W, {
    ...V,
    children: z
  });
});
function sO(a) {
  return fn("MuiFab", a);
}
const fv = Zt("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), cO = (a) => {
  const {
    color: r,
    variant: i,
    classes: u,
    size: c
  } = a, f = {
    root: ["root", i, `size${me(c)}`, r === "inherit" ? "colorInherit" : r]
  }, d = An(f, sO, u);
  return {
    ...u,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, fO = Ze(Np, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (a) => _s(a) || a === "classes",
  overridesResolver: (a, r) => {
    const {
      ownerState: i
    } = a;
    return [r.root, r[i.variant], r[`size${me(i.size)}`], i.color === "inherit" && r.colorInherit, r[me(i.size)], r[i.color]];
  }
})(Ht(({
  theme: a
}) => {
  var r, i;
  return {
    ...a.typography.button,
    minHeight: 36,
    transition: a.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: a.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (a.vars || a).zIndex.fab,
    boxShadow: (a.vars || a).shadows[6],
    "&:active": {
      boxShadow: (a.vars || a).shadows[12]
    },
    color: a.vars ? a.vars.palette.text.primary : (i = (r = a.palette).getContrastText) == null ? void 0 : i.call(r, a.palette.grey[300]),
    backgroundColor: (a.vars || a).palette.grey[300],
    "&:hover": {
      backgroundColor: (a.vars || a).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (a.vars || a).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${fv.focusVisible}`]: {
      boxShadow: (a.vars || a).shadows[6]
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 40
      }
    }, {
      props: {
        size: "medium"
      },
      style: {
        width: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended"
      },
      style: {
        borderRadius: 48 / 2,
        padding: "0 16px",
        width: "auto",
        minHeight: "auto",
        minWidth: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended",
        size: "small"
      },
      style: {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      }
    }, {
      props: {
        variant: "extended",
        size: "medium"
      },
      style: {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }]
  };
}), Ht(({
  theme: a
}) => ({
  variants: [...Object.entries(a.palette).filter($l(["dark", "contrastText"])).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].contrastText,
      backgroundColor: (a.vars || a).palette[r].main,
      "&:hover": {
        backgroundColor: (a.vars || a).palette[r].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (a.vars || a).palette[r].main
        }
      }
    }
  }))]
})), Ht(({
  theme: a
}) => ({
  [`&.${fv.disabled}`]: {
    color: (a.vars || a).palette.action.disabled,
    boxShadow: (a.vars || a).shadows[0],
    backgroundColor: (a.vars || a).palette.action.disabledBackground
  }
}))), dO = /* @__PURE__ */ C.forwardRef(function(r, i) {
  const u = dn({
    props: r,
    name: "MuiFab"
  }), {
    children: c,
    className: f,
    color: d = "default",
    component: h = "button",
    disabled: m = !1,
    disableFocusRipple: y = !1,
    focusVisibleClassName: b,
    size: g = "large",
    variant: x = "circular",
    ...T
  } = u, R = {
    ...u,
    color: d,
    component: h,
    disabled: m,
    disableFocusRipple: y,
    size: g,
    variant: x
  }, E = cO(R);
  return /* @__PURE__ */ q.jsx(fO, {
    className: je(E.root, f),
    component: h,
    disabled: m,
    focusRipple: !y,
    focusVisibleClassName: je(E.focusVisible, b),
    ownerState: R,
    ref: i,
    ...T,
    classes: E,
    children: c
  });
}), pO = xb({
  themeId: ta
}), hO = Ns(/* @__PURE__ */ q.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), dv = Ns(/* @__PURE__ */ q.jsx("path", {
  d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
}), "FilterList"), mO = Ns([/* @__PURE__ */ q.jsx("path", {
  d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
}, "0"), /* @__PURE__ */ q.jsx("path", {
  d: "M8.5 5H4l5 7-5 7h4.5l5-7z"
}, "1")], "DoubleArrow"), gO = Ns(/* @__PURE__ */ q.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var Md = { exports: {} }, Zi = {}, _d = { exports: {} }, Nd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv;
function yO() {
  return pv || (pv = 1, (function(a) {
    function r(V, te) {
      var F = V.length;
      V.push(te);
      e: for (; 0 < F; ) {
        var le = F - 1 >>> 1, ge = V[le];
        if (0 < c(ge, te))
          V[le] = te, V[F] = ge, F = le;
        else break e;
      }
    }
    function i(V) {
      return V.length === 0 ? null : V[0];
    }
    function u(V) {
      if (V.length === 0) return null;
      var te = V[0], F = V.pop();
      if (F !== te) {
        V[0] = F;
        e: for (var le = 0, ge = V.length, Ce = ge >>> 1; le < Ce; ) {
          var Le = 2 * (le + 1) - 1, et = V[Le], z = Le + 1, P = V[z];
          if (0 > c(et, F))
            z < ge && 0 > c(P, et) ? (V[le] = P, V[z] = F, le = z) : (V[le] = et, V[Le] = F, le = Le);
          else if (z < ge && 0 > c(P, F))
            V[le] = P, V[z] = F, le = z;
          else break e;
        }
      }
      return te;
    }
    function c(V, te) {
      var F = V.sortIndex - te.sortIndex;
      return F !== 0 ? F : V.id - te.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, h = d.now();
      a.unstable_now = function() {
        return d.now() - h;
      };
    }
    var m = [], y = [], b = 1, g = null, x = 3, T = !1, R = !1, E = !1, w = !1, A = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    function L(V) {
      for (var te = i(y); te !== null; ) {
        if (te.callback === null) u(y);
        else if (te.startTime <= V)
          u(y), te.sortIndex = te.expirationTime, r(m, te);
        else break;
        te = i(y);
      }
    }
    function N(V) {
      if (E = !1, L(V), !R)
        if (i(m) !== null)
          R = !0, G || (G = !0, ee());
        else {
          var te = i(y);
          te !== null && W(N, te.startTime - V);
        }
    }
    var G = !1, k = -1, Q = 5, J = -1;
    function S() {
      return w ? !0 : !(a.unstable_now() - J < Q);
    }
    function I() {
      if (w = !1, G) {
        var V = a.unstable_now();
        J = V;
        var te = !0;
        try {
          e: {
            R = !1, E && (E = !1, $(k), k = -1), T = !0;
            var F = x;
            try {
              t: {
                for (L(V), g = i(m); g !== null && !(g.expirationTime > V && S()); ) {
                  var le = g.callback;
                  if (typeof le == "function") {
                    g.callback = null, x = g.priorityLevel;
                    var ge = le(
                      g.expirationTime <= V
                    );
                    if (V = a.unstable_now(), typeof ge == "function") {
                      g.callback = ge, L(V), te = !0;
                      break t;
                    }
                    g === i(m) && u(m), L(V);
                  } else u(m);
                  g = i(m);
                }
                if (g !== null) te = !0;
                else {
                  var Ce = i(y);
                  Ce !== null && W(
                    N,
                    Ce.startTime - V
                  ), te = !1;
                }
              }
              break e;
            } finally {
              g = null, x = F, T = !1;
            }
            te = void 0;
          }
        } finally {
          te ? ee() : G = !1;
        }
      }
    }
    var ee;
    if (typeof U == "function")
      ee = function() {
        U(I);
      };
    else if (typeof MessageChannel < "u") {
      var ne = new MessageChannel(), ie = ne.port2;
      ne.port1.onmessage = I, ee = function() {
        ie.postMessage(null);
      };
    } else
      ee = function() {
        A(I, 0);
      };
    function W(V, te) {
      k = A(function() {
        V(a.unstable_now());
      }, te);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, a.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Q = 0 < V ? Math.floor(1e3 / V) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, a.unstable_next = function(V) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = x;
      }
      var F = x;
      x = te;
      try {
        return V();
      } finally {
        x = F;
      }
    }, a.unstable_requestPaint = function() {
      w = !0;
    }, a.unstable_runWithPriority = function(V, te) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var F = x;
      x = V;
      try {
        return te();
      } finally {
        x = F;
      }
    }, a.unstable_scheduleCallback = function(V, te, F) {
      var le = a.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? le + F : le) : F = le, V) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return ge = F + ge, V = {
        id: b++,
        callback: te,
        priorityLevel: V,
        startTime: F,
        expirationTime: ge,
        sortIndex: -1
      }, F > le ? (V.sortIndex = F, r(y, V), i(m) === null && V === i(y) && (E ? ($(k), k = -1) : E = !0, W(N, F - le))) : (V.sortIndex = ge, r(m, V), R || T || (R = !0, G || (G = !0, ee()))), V;
    }, a.unstable_shouldYield = S, a.unstable_wrapCallback = function(V) {
      var te = x;
      return function() {
        var F = x;
        x = te;
        try {
          return V.apply(this, arguments);
        } finally {
          x = F;
        }
      };
    };
  })(Nd)), Nd;
}
var hv;
function vO() {
  return hv || (hv = 1, _d.exports = yO()), _d.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv;
function bO() {
  if (mv) return Zi;
  mv = 1;
  var a = vO(), r = Jd(), i = Qv();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    for (var t = e, n = t; n && !n.alternate; )
      t = n, (t.flags & 4098) !== 0 && (e = t.return), n = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (f(e) !== e)
      throw Error(u(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var s = o.alternate;
      if (s === null) {
        if (l = o.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (o.child === s.child) {
        for (s = o.child; s; ) {
          if (s === n) return m(o), e;
          if (s === l) return m(o), t;
          s = s.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== l.return) n = o, l = s;
      else {
        for (var p = !1, v = o.child; v; ) {
          if (v === n) {
            p = !0, n = o, l = s;
            break;
          }
          if (v === l) {
            p = !0, l = o, n = s;
            break;
          }
          v = v.sibling;
        }
        if (!p) {
          for (v = s.child; v; ) {
            if (v === n) {
              p = !0, n = s, l = o;
              break;
            }
            if (v === l) {
              p = !0, l = s, n = o;
              break;
            }
            v = v.sibling;
          }
          if (!p) throw Error(u(189));
        }
      }
      if (n.alternate !== l) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function g(e, t, n, l, o, s) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, l, o, s) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && g(
        e.child,
        t,
        n,
        l,
        o,
        s
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function x(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function T(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function R(e) {
    var t = [null, null], n = x(e);
    return n === null || E(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function E(e, t, n, l) {
    for (; n !== null; ) {
      if (n === t) l.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (l.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && E(
        e,
        t,
        n.child,
        l
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function w(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(u(559));
    }
  }
  var A = null, $ = null;
  function U(e, t, n) {
    return e === n ? !0 : e === t ? (A = e, !0) : !1;
  }
  function L(e, t, n) {
    return e === n ? ($ = e, !1) : e === t ? ($ !== null && (A = e), !0) : !1;
  }
  function N(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function G(e, t, n) {
    for (var l = 0, o = e; o; o = n(o)) l++;
    o = 0;
    for (var s = t; s; s = n(s)) o++;
    for (; 0 < l - o; ) e = n(e), l--;
    for (; 0 < o - l; ) t = n(t), o--;
    for (; l--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = n(e), t = n(t);
    }
    return null;
  }
  var k = Object.assign, Q = Symbol.for("react.element"), J = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ie = Symbol.for("react.consumer"), W = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), Ce = Symbol.for("react.activity"), Le = Symbol.for("react.legacy_hidden"), et = Symbol.for("react.memo_cache_sentinel"), z = Symbol.for("react.view_transition"), P = Symbol.for("react.recoverable"), ue = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != "object" ? null : (e = ue && e[ue] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ee = Symbol.for("react.client.reference");
  function Re(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case I:
        return "Fragment";
      case ne:
        return "Profiler";
      case ee:
        return "StrictMode";
      case te:
        return "Suspense";
      case F:
        return "SuspenseList";
      case Ce:
        return "Activity";
      case z:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case W:
          return e.displayName || "Context";
        case ie:
          return (e._context.displayName || "Context") + ".Consumer";
        case V:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case le:
          return t = e.displayName || null, t !== null ? t : Re(e.type) || "Memo";
        case ge:
          t = e._payload, e = e._init;
          try {
            return Re(e(t));
          } catch {
          }
      }
    return null;
  }
  var Oe = Array.isArray, re = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, kt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, jn = [], Ln = -1;
  function Dt(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > Ln || (e.current = jn[Ln], jn[Ln] = null, Ln--);
  }
  function be(e, t) {
    Ln++, jn[Ln] = e.current, e.current = t;
  }
  var gt = Dt(null), $t = Dt(null), pn = Dt(null), ye = Dt(null);
  function ul(e, t) {
    switch (be(pn, t), be($t, e), be(gt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? cy(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = cy(t), e = fy(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Ie(gt), be(gt, e);
  }
  function ia() {
    Ie(gt), Ie($t), Ie(pn);
  }
  function Yl(e) {
    var t = e.memoizedState;
    t !== null && (zr._currentValue = t.memoizedState, be(ye, e)), t = gt.current;
    var n = fy(t, e.type);
    t !== n && (be($t, e), be(gt, n));
  }
  function sl(e) {
    $t.current === e && (Ie(gt), Ie($t)), ye.current === e && (Ie(ye), zr._currentValue = kt);
  }
  var ql, yt;
  function tt(e) {
    if (ql === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ql = t && t[1] || "", yt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ql + e + yt;
  }
  var Et = !1;
  function oa(e, t) {
    if (!e || Et) return "";
    Et = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Z = function() {
                throw Error();
              };
              if (Object.defineProperty(Z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Z, []);
                } catch (ae) {
                  var _ = ae;
                }
                Reflect.construct(e, [], Z);
              } else {
                try {
                  Z.call();
                } catch (ae) {
                  _ = ae;
                }
                Z = !1;
                try {
                  var H = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), Z = !0, new e();
                } finally {
                  Z && (H !== void 0 ? Object.defineProperty(e.prototype, "props", H) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ae) {
                _ = ae;
              }
              (Z = e()) && typeof Z.catch == "function" && Z.catch(function() {
              });
            }
          } catch (ae) {
            if (ae && _ && typeof ae.stack == "string")
              return [ae.stack, _.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = l.DetermineComponentFrameRoot(), p = s[0], v = s[1];
      if (p && v) {
        var O = p.split(`
`), B = v.split(`
`);
        for (o = l = 0; l < O.length && !O[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; o < B.length && !B[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (l === O.length || o === B.length)
          for (l = O.length - 1, o = B.length - 1; 1 <= l && 0 <= o && O[l] !== B[o]; )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (O[l] !== B[o]) {
            if (l !== 1 || o !== 1)
              do
                if (l--, o--, 0 > o || O[l] !== B[o]) {
                  var Y = `
` + O[l].replace(" at new ", " at ");
                  return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), Y;
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      Et = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? tt(n) : "";
  }
  function It(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return tt(e.type);
      case 16:
        return tt("Lazy");
      case 13:
        return e.child !== t && t !== null ? tt("Suspense Fallback") : tt("Suspense");
      case 19:
        return tt("SuspenseList");
      case 0:
      case 15:
        return oa(e.type, !1);
      case 11:
        return oa(e.type.render, !1);
      case 1:
        return oa(e.type, !0);
      case 31:
        return tt("Activity");
      case 30:
        return tt("ViewTransition");
      default:
        return "";
    }
  }
  function hn(e) {
    try {
      var t = "", n = null;
      do
        t += It(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Ds = Object.prototype.hasOwnProperty, Bs = a.unstable_scheduleCallback, Us = a.unstable_cancelCallback, Qb = a.unstable_shouldYield, Kb = a.unstable_requestPaint, Pt = a.unstable_now, Zb = a.unstable_getCurrentPriorityLevel, Dp = a.unstable_ImmediatePriority, Bp = a.unstable_UserBlockingPriority, vo = a.unstable_NormalPriority, Ib = a.unstable_LowPriority, Up = a.unstable_IdlePriority, Pb = a.log, Jb = a.unstable_setDisableYieldValue, Jr = null, Jt = null;
  function Aa(e) {
    if (typeof Pb == "function" && Jb(e), Jt && typeof Jt.setStrictMode == "function")
      try {
        Jt.setStrictMode(Jr, e);
      } catch {
      }
  }
  var Ft = Math.clz32 ? Math.clz32 : e1, Fb = Math.log, Wb = Math.LN2;
  function e1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Fb(e) / Wb | 0) | 0;
  }
  var bo = 256, So = 262144, xo = 4194304;
  function cl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Eo(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var o = 0, s = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var v = l & 134217727;
    return v !== 0 ? (l = v & ~s, l !== 0 ? o = cl(l) : (p &= v, p !== 0 ? o = cl(p) : n || (n = v & ~e, n !== 0 && (o = cl(n))))) : (v = l & ~s, v !== 0 ? o = cl(v) : p !== 0 ? o = cl(p) : n || (n = l & ~e, n !== 0 && (o = cl(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & s) === 0 && (s = o & -o, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function Fr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function jp(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var l = 31 - Ft(n), o = 1 << l;
        t |= e[l], n &= ~o;
      }
    return t;
  }
  function t1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Lp() {
    var e = xo;
    return xo <<= 1, (xo & 62914560) === 0 && (xo = 4194304), e;
  }
  function js(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wr(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function n1(e, t, n, l, o, s) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var v = e.entanglements, O = e.expirationTimes, B = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var Y = 31 - Ft(n), Z = 1 << Y;
      v[Y] = 0, O[Y] = -1;
      var _ = B[Y];
      if (_ !== null)
        for (B[Y] = null, Y = 0; Y < _.length; Y++) {
          var H = _[Y];
          H !== null && (H.lane &= -536870913);
        }
      n &= ~Z;
    }
    l !== 0 && Hp(e, l, 0), s !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(p & ~t));
  }
  function Hp(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Ft(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function kp(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - Ft(n), o = 1 << l;
      o & t | e[l] & t && (e[l] |= t), n &= ~o;
    }
  }
  function $p(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Ls(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Ls(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Hs(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Yp() {
    var e = de.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Zy(e.type));
  }
  function qp(e, t) {
    var n = de.p;
    try {
      return de.p = e, t();
    } finally {
      de.p = n;
    }
  }
  var ua = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + ua, Yt = "__reactProps$" + ua, Vl = "__reactContainer$" + ua, Vp = "__reactEvents$" + ua, a1 = "__reactListeners$" + ua, l1 = "__reactHandles$" + ua, Gp = "__reactResources$" + ua, ei = "__reactMarker$" + ua, Co = "__reactLoad$" + ua;
  function To(e) {
    delete e[Ct], delete e[Yt], delete e[a1], delete e[l1];
  }
  function fl(e) {
    var t;
    if (t = e[Ct]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Vl] || n[Ct]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ay(e); e !== null; ) {
            if (n = e[Ct]) return n;
            e = Ay(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Gl(e) {
    if (e = e[Ct] || e[Vl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ti(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Xl(e) {
    var t = e[Gp];
    return t || (t = e[Gp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function vt(e) {
    e[ei] = !0;
  }
  function Xp(e) {
    e[Co] = void 0;
  }
  var Qp = /* @__PURE__ */ new Set(), Kp = {};
  function dl(e, t) {
    Ql(e, t), Ql(e + "Capture", t);
  }
  function Ql(e, t) {
    for (Kp[e] = t, e = 0; e < t.length; e++)
      Qp.add(t[e]);
  }
  var r1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zp = {}, Ip = {};
  function i1(e) {
    return Ds.call(Ip, e) ? !0 : Ds.call(Zp, e) ? !1 : r1.test(e) ? Ip[e] = !0 : (Zp[e] = !0, !1);
  }
  var Ne = !1;
  function Pp() {
    var e = Ne;
    return Ne = !1, e;
  }
  function Ro(e, t, n) {
    if (i1(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, n);
      }
  }
  function Oo(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, n);
    }
  }
  function sa(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, l);
    }
  }
  function Wt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Jp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function o1(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var o = l.get, s = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(p) {
          n = "" + p, s.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(p) {
          n = "" + p;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ks(e) {
    if (!e._valueTracker) {
      var t = Jp(e) ? "checked" : "value";
      e._valueTracker = o1(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Fp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Jp(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  var u1 = /[\n"\\]/g;
  function mn(e) {
    return e.replace(
      u1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $s(e, t, n, l, o, s, p, v) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Wt(t)) : e.value !== "" + Wt(t) && (e.value = "" + Wt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? p === "number" && e.value == t ? Ys(e, Wt(e.value)) : Ys(e, Wt(t)) : n != null ? Ys(e, Wt(n)) : l != null && e.removeAttribute("value"), o == null && s != null && (e.defaultChecked = !!s), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + Wt(v) : e.removeAttribute("name");
  }
  function Wp(e, t, n, l, o, s, p, v) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        ks(e);
        return;
      }
      n = n != null ? "" + Wt(n) : "", t = t != null ? "" + Wt(t) : n, v || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? o, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = v ? e.checked : !!l, e.defaultChecked = !!l, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), ks(e);
  }
  function Ys(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function Kl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Wt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, l && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function eh(e, t, n) {
    if (t != null && (t = "" + Wt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Wt(n) : "";
  }
  function th(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(u(92));
        if (Oe(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Wt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), ks(e);
  }
  function Zl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var s1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function nh(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || s1.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function ah(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", Ne = !0);
      for (var o in t)
        l = t[o], t.hasOwnProperty(o) && n[o] !== l && (nh(e, o, l), Ne = !0);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && nh(e, s, t[s]);
  }
  function qs(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var c1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), f1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wo(e) {
    return f1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Hn() {
  }
  var Vs = null;
  function Gs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Il = null, Pl = null;
  function lh(e) {
    var t = Gl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Yt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if ($s(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + mn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var o = l[Yt] || null;
                if (!o) throw Error(u(90));
                $s(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && Fp(l);
          }
          break e;
        case "textarea":
          eh(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Kl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Xs = !1;
  function rh(e, t, n) {
    if (Xs) return e(t, n);
    Xs = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Xs = !1, (Il !== null || Pl !== null) && (wu(), Il && (t = Il, e = Pl, Pl = Il = null, lh(t), e)))
        for (t = 0; t < e.length; t++) lh(e[t]);
    }
  }
  function ni(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Yt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        u(231, t, typeof n)
      );
    return n;
  }
  var ca = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qs = !1;
  if (ca)
    try {
      var ai = {};
      Object.defineProperty(ai, "passive", {
        get: function() {
          Qs = !0;
        }
      }), window.addEventListener("test", ai, ai), window.removeEventListener("test", ai, ai);
    } catch {
      Qs = !1;
    }
  var za = null, Ks = null, Ao = null;
  function ih() {
    if (Ao) return Ao;
    var e, t = Ks, n = t.length, l, o = "value" in za ? za.value : za.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (l = 1; l <= p && t[n - l] === o[s - l]; l++) ;
    return Ao = o.slice(e, 1 < l ? 1 - l : void 0);
  }
  function zo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mo() {
    return !0;
  }
  function oh() {
    return !1;
  }
  function Bt(e) {
    function t(n, l, o, s, p) {
      this._reactName = n, this._targetInst = o, this.type = l, this.nativeEvent = s, this.target = p, this.currentTarget = null;
      for (var v in e)
        e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Mo : oh, this.isPropagationStopped = oh, this;
    }
    return k(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mo);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mo);
      },
      persist: function() {
      },
      isPersistent: Mo
    }), t;
  }
  var Ma = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _o = Bt(Ma), li = k({}, Ma, { view: 0, detail: 0 }), d1 = Bt(li), Zs, Is, ri, No = k({}, li, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Js,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ri && (ri && e.type === "mousemove" ? (Zs = e.screenX - ri.screenX, Is = e.screenY - ri.screenY) : Is = Zs = 0, ri = e), Zs);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Is;
    }
  }), uh = Bt(No), p1 = k({}, No, { dataTransfer: 0 }), h1 = Bt(p1), m1 = k({}, li, { relatedTarget: 0 }), Ps = Bt(m1), g1 = k({}, Ma, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), y1 = Bt(g1), v1 = k({}, Ma, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), b1 = Bt(v1), S1 = k({}, Ma, { data: 0 }), sh = Bt(S1), x1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, E1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, C1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function T1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = C1[e]) ? !!t[e] : !1;
  }
  function Js() {
    return T1;
  }
  var R1 = k({}, li, {
    key: function(e) {
      if (e.key) {
        var t = x1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = zo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? E1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Js,
    charCode: function(e) {
      return e.type === "keypress" ? zo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? zo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), O1 = Bt(R1), w1 = k({}, No, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ch = Bt(w1), A1 = k({}, Ma, { submitter: 0 }), z1 = Bt(A1), M1 = k({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Js
  }), _1 = Bt(M1), N1 = k({}, Ma, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), D1 = Bt(N1), B1 = k({}, No, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), U1 = Bt(B1), j1 = k({}, Ma, {
    newState: 0,
    oldState: 0,
    source: 0
  }), L1 = Bt(j1), H1 = [9, 13, 27, 32], Fs = ca && "CompositionEvent" in window, ii = null;
  ca && "documentMode" in document && (ii = document.documentMode);
  var k1 = ca && "TextEvent" in window && !ii, fh = ca && (!Fs || ii && 8 < ii && 11 >= ii), dh = " ", ph = !1;
  function hh(e, t) {
    switch (e) {
      case "keyup":
        return H1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jl = !1;
  function $1(e, t) {
    switch (e) {
      case "compositionend":
        return mh(t);
      case "keypress":
        return t.which !== 32 ? null : (ph = !0, dh);
      case "textInput":
        return e = t.data, e === dh && ph ? null : e;
      default:
        return null;
    }
  }
  function Y1(e, t) {
    if (Jl)
      return e === "compositionend" || !Fs && hh(e, t) ? (e = ih(), Ao = Ks = za = null, Jl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return fh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var q1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function gh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!q1[e.type] : t === "textarea";
  }
  function yh(e, t, n, l) {
    Il ? Pl ? Pl.push(l) : Pl = [l] : Il = l, t = Du(t, "onChange"), 0 < t.length && (n = new _o(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var oi = null, ui = null;
  function V1(e) {
    ly(e, 0);
  }
  function Do(e) {
    var t = ti(e);
    if (Fp(t)) return e;
  }
  function vh(e, t) {
    if (e === "change") return t;
  }
  var bh = !1;
  if (ca) {
    var Ws;
    if (ca) {
      var ec = "oninput" in document;
      if (!ec) {
        var Sh = document.createElement("div");
        Sh.setAttribute("oninput", "return;"), ec = typeof Sh.oninput == "function";
      }
      Ws = ec;
    } else Ws = !1;
    bh = Ws && (!document.documentMode || 9 < document.documentMode);
  }
  function xh() {
    oi && (oi.detachEvent("onpropertychange", Eh), ui = oi = null);
  }
  function Eh(e) {
    if (e.propertyName === "value" && Do(ui)) {
      var t = [];
      yh(
        t,
        ui,
        e,
        Gs(e)
      ), rh(V1, t);
    }
  }
  function G1(e, t, n) {
    e === "focusin" ? (xh(), oi = t, ui = n, oi.attachEvent("onpropertychange", Eh)) : e === "focusout" && xh();
  }
  function X1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Do(ui);
  }
  function Q1(e, t) {
    if (e === "click") return Do(t);
  }
  function K1(e, t) {
    if (e === "input" || e === "change")
      return Do(t);
  }
  function Z1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var en = typeof Object.is == "function" ? Object.is : Z1;
  function si(e, t) {
    if (en(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var o = n[l];
      if (!Ds.call(t, o) || !en(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function tc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ch(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Th(e, t) {
    var n = Ch(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ch(n);
    }
  }
  function Rh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Oh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = tc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = tc(e.document);
    }
    return t;
  }
  function nc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var I1 = ca && "documentMode" in document && 11 >= document.documentMode, Fl = null, ac = null, ci = null, lc = !1;
  function wh(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    lc || Fl == null || Fl !== tc(l) || (l = Fl, "selectionStart" in l && nc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ci && si(ci, l) || (ci = l, l = Du(ac, "onSelect"), 0 < l.length && (t = new _o(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Fl)));
  }
  function pl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Wl = {
    animationend: pl("Animation", "AnimationEnd"),
    animationiteration: pl("Animation", "AnimationIteration"),
    animationstart: pl("Animation", "AnimationStart"),
    transitionrun: pl("Transition", "TransitionRun"),
    transitionstart: pl("Transition", "TransitionStart"),
    transitioncancel: pl("Transition", "TransitionCancel"),
    transitionend: pl("Transition", "TransitionEnd")
  }, rc = {}, Ah = {};
  ca && (Ah = document.createElement("div").style, "AnimationEvent" in window || (delete Wl.animationend.animation, delete Wl.animationiteration.animation, delete Wl.animationstart.animation), "TransitionEvent" in window || delete Wl.transitionend.transition);
  function hl(e) {
    if (rc[e]) return rc[e];
    if (!Wl[e]) return e;
    var t = Wl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Ah)
        return rc[e] = t[n];
    return e;
  }
  var zh = hl("animationend"), Mh = hl("animationiteration"), _h = hl("animationstart"), P1 = hl("transitionrun"), J1 = hl("transitionstart"), F1 = hl("transitioncancel"), Nh = hl("transitionend"), Dh = /* @__PURE__ */ new Map(), ic = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ic.push("scrollEnd");
  function zn(e, t) {
    Dh.set(e, t), dl(t, [e]);
  }
  var W1 = 0;
  function fa(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Dn.identifierPrefix;
    var n = W1++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function Bh(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, n = br;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = e[n[l]];
        if (o != null) {
          if (o === "none") return "none";
          t = t == null ? o : t + (" " + o);
        }
      }
    return t ?? e.default;
  }
  function da(e, t) {
    return e = Bh(e), t = Bh(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Bo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, gn = [], er = 0, oc = 0;
  function Uo() {
    for (var e = er, t = oc = er = 0; t < e; ) {
      var n = gn[t];
      gn[t++] = null;
      var l = gn[t];
      gn[t++] = null;
      var o = gn[t];
      gn[t++] = null;
      var s = gn[t];
      if (gn[t++] = null, l !== null && o !== null) {
        var p = l.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), l.pending = o;
      }
      s !== 0 && Uh(n, o, s);
    }
  }
  function jo(e, t, n, l) {
    gn[er++] = e, gn[er++] = t, gn[er++] = n, gn[er++] = l, oc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function uc(e, t, n, l) {
    return jo(e, t, n, l), Lo(e);
  }
  function ml(e, t) {
    return jo(e, null, null, t), Lo(e);
  }
  function Uh(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var o = !1, s = e.return; s !== null; )
      s.childLanes |= n, l = s.alternate, l !== null && (l.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (o = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, o && t !== null && (o = 31 - Ft(n), e = s.hiddenUpdates, l = e[o], l === null ? e[o] = [t] : l.push(t), t.lane = n | 536870912), s) : null;
  }
  function Lo(e) {
    if (50 < Ni)
      throw Ni = 0, Ou = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var tr = {};
  function eS(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qt(e, t, n, l) {
    return new eS(e, t, n, l);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pa(e, t) {
    var n = e.alternate;
    return n === null ? (n = qt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function jh(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ho(e, t, n, l, o, s) {
    var p = 0;
    if (l = e, typeof l == "function") sc(l) && (p = 1);
    else if (typeof l == "string")
      p = Ax(
        e,
        n,
        gt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Ce:
          return e = qt(31, n, t, o), e.elementType = Ce, e.lanes = s, e;
        case I:
          return gl(n.children, o, s, t);
        case ee:
          p = 8, o |= 24;
          break;
        case ne:
          return e = qt(12, n, t, o | 2), e.elementType = ne, e.lanes = s, e;
        case te:
          return e = qt(13, n, t, o), e.elementType = te, e.lanes = s, e;
        case F:
          return e = qt(19, n, t, o), e.elementType = F, e.lanes = s, e;
        case Le:
        case z:
          return e = o | 32, e = qt(30, n, t, e), e.elementType = z, e.lanes = s, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case W:
                p = 10;
                break e;
              case ie:
                p = 9;
                break e;
              case V:
                p = 11;
                break e;
              case le:
                p = 14;
                break e;
              case ge:
                p = 16, l = null;
                break e;
            }
          p = 29, n = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = qt(p, n, t, o), t.elementType = e, t.type = l, t.lanes = s, t;
  }
  function gl(e, t, n, l) {
    return e = qt(7, e, l, t), e.lanes = n, e;
  }
  function cc(e, t, n) {
    return e = qt(6, e, null, t), e.lanes = n, e;
  }
  function Lh(e) {
    var t = qt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function fc(e, t, n) {
    return t = qt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Hh = /* @__PURE__ */ new WeakMap();
  function yn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Hh.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: hn(t)
      }, Hh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: hn(t)
    };
  }
  var nr = [], ar = 0, ko = null, fi = 0, vn = [], bn = 0, _a = null, kn = 1, $n = "";
  function ha(e, t) {
    nr[ar++] = fi, nr[ar++] = ko, ko = e, fi = t;
  }
  function kh(e, t, n) {
    vn[bn++] = kn, vn[bn++] = $n, vn[bn++] = _a, _a = e;
    var l = kn;
    e = $n;
    var o = 32 - Ft(l) - 1;
    l &= ~(1 << o), n += 1;
    var s = 32 - Ft(t) + o;
    if (30 < s) {
      var p = o - o % 5;
      s = (l & (1 << p) - 1).toString(32), l >>= p, o -= p, kn = 1 << 32 - Ft(t) + o | n << o | l, $n = s + e;
    } else
      kn = 1 << s | n << o | l, $n = e;
  }
  function $o(e) {
    e.return !== null && (ha(e, 1), kh(e, 1, 0));
  }
  function dc(e) {
    for (; e === ko; )
      ko = nr[--ar], nr[ar] = null, fi = nr[--ar], nr[ar] = null;
    for (; e === _a; )
      _a = vn[--bn], vn[bn] = null, $n = vn[--bn], vn[bn] = null, kn = vn[--bn], vn[bn] = null;
  }
  function $h(e, t) {
    vn[bn++] = kn, vn[bn++] = $n, vn[bn++] = _a, kn = t.id, $n = t.overflow, _a = e;
  }
  var bt = null, Pe = null, Te = !1, Na = null, Sn = !1, pc = Error(u(519));
  function Da(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw di(yn(t, e)), pc;
  }
  function Yh(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[Ct] = e, t[Yt] = l, n) {
      case "dialog":
        Ae("cancel", t), Ae("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Bi.length; n++)
          Ae(Bi[n], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ae("error", t), Ae("load", t);
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        Ae("invalid", t), Wp(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), th(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || uy(t.textContent, n) ? (l.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), l.onScroll != null && Ae("scroll", t), l.onScrollEnd != null && Ae("scrollend", t), l.onClick != null && (t.onclick = Hn), t = !0) : t = !1, t || Da(e, !0);
  }
  function Yo(e) {
    for (bt = e.return; bt; )
      switch (bt.tag) {
        case 5:
        case 31:
        case 13:
          Sn = !1;
          return;
        case 27:
        case 3:
          Sn = !0;
          return;
        default:
          bt = bt.return;
      }
  }
  function lr(e) {
    if (e !== bt) return !1;
    if (!Te) return Yo(e), Te = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Gf(e.type, e.memoizedProps)), n = !n), n && Pe && Da(e), Yo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Pe = wy(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Pe = wy(e);
    } else
      t === 27 ? (t = Pe, Ia(e.type) ? (e = Wf, Wf = null, Pe = e) : Pe = t) : Pe = bt ? En(e.stateNode.nextSibling) : null;
    return !0;
  }
  function yl() {
    Pe = bt = null, Te = !1;
  }
  function hc() {
    var e = Na;
    return e !== null && (Xt === null ? Xt = e : Xt.push.apply(
      Xt,
      e
    ), Na = null), e;
  }
  function di(e) {
    Na === null ? Na = [e] : Na.push(e);
  }
  var mc = Dt(null), vl = null, ma = null;
  function Ba(e, t, n) {
    be(mc, t._currentValue), t._currentValue = n;
  }
  function ga(e) {
    e._currentValue = mc.current, Ie(mc);
  }
  function qo(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function gc(e, t, n, l) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var s = o.dependencies;
      if (s !== null) {
        var p = o.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var v = s;
          s = o;
          for (var O = 0; O < t.length; O++)
            if (v.context === t[O]) {
              s.lanes |= n, v = s.alternate, v !== null && (v.lanes |= n), qo(
                s.return,
                n,
                e
              ), l || (p = null);
              break e;
            }
          s = v.next;
        }
      } else if (o.tag === 18) {
        if (p = o.return, p === null) throw Error(u(341));
        p.lanes |= n, s = p.alternate, s !== null && (s.lanes |= n), qo(p, n, e), p = null;
      } else
        o.tag === 13 && o.memoizedState !== null && o.memoizedState.dehydrated === null ? (o.lanes |= n, p = o.alternate, p !== null && (p.lanes |= n), qo(
          o.return,
          n,
          e
        ), p = o.child, p = p !== null ? p.sibling : null) : p = o.child;
      if (p !== null) p.return = o;
      else
        for (p = o; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (o = p.sibling, o !== null) {
            o.return = p.return, p = o;
            break;
          }
          p = p.return;
        }
      o = p;
    }
  }
  function bl(e, t, n, l) {
    e = null;
    for (var o = t, s = !1; o !== null; ) {
      if (!s) {
        if ((o.flags & 524288) !== 0) s = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var p = o.alternate;
        if (p === null) throw Error(u(387));
        if (p = p.memoizedProps, p !== null) {
          var v = o.type;
          en(o.pendingProps.value, p.value) || (e !== null ? e.push(v) : e = [v]);
        }
      } else if (o === ye.current) {
        if (p = o.alternate, p === null) throw Error(u(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(zr) : e = [zr]);
      }
      o = o.return;
    }
    return e !== null && gc(
      t,
      e,
      n,
      l
    ), t.flags |= 262144, e !== null;
  }
  function Vo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!en(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Sl(e) {
    vl = e, ma = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Tt(e) {
    return qh(vl, e);
  }
  function Go(e, t) {
    return vl === null && Sl(e), qh(e, t);
  }
  function qh(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, ma === null) {
      if (e === null) throw Error(u(308));
      ma = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ma = ma.next = t;
    return n;
  }
  var tS = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, nS = a.unstable_scheduleCallback, aS = a.unstable_NormalPriority, ct = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yc() {
    return {
      controller: new tS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pi(e) {
    e.refCount--, e.refCount === 0 && nS(aS, function() {
      e.controller.abort();
    });
  }
  function Vh(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var l = t[e];
        n.indexOf(l) === -1 && n.push(l);
      }
    }
  }
  var hi = null;
  function lS(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var mi = null, vc = 0, xl = 0, rr = null;
  function rS(e, t) {
    if (mi === null) {
      var n = mi = [];
      vc = 0, xl = Uf(), rr = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return vc++, t.then(Gh, Gh), t;
  }
  function Gh() {
    if (--vc === 0 && (hi = null, mi !== null)) {
      rr !== null && (rr.status = "fulfilled");
      var e = mi;
      mi = null, xl = 0, rr = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function iS(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var o = 0; o < n.length; o++) (0, n[o])(t);
      },
      function(o) {
        for (l.status = "rejected", l.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), l;
  }
  var Xh = re.S;
  re.S = function(e, t) {
    if (Lg = Pt(), typeof t == "object" && t !== null && typeof t.then == "function" && rS(e, t), hi !== null)
      for (var n = Cr; n !== null; )
        Vh(n, hi), n = n.next;
    if (n = e.types, n !== null) {
      for (var l = Cr; l !== null; )
        Vh(l, n), l = l.next;
      if (xl !== 0) {
        l = hi, l === null && (l = hi = []);
        for (var o = 0; o < n.length; o++) {
          var s = n[o];
          l.indexOf(s) === -1 && l.push(s);
        }
      }
    }
    Xh !== null && Xh(e, t);
  };
  var El = Dt(null);
  function bc() {
    var e = El.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function Xo(e, t) {
    t === null ? be(El, El.current) : be(El, t.pool);
  }
  function Qh() {
    var e = bc();
    return e === null ? null : { parent: ct._currentValue, pool: e };
  }
  var ir = Error(u(460)), Sc = Error(u(474)), Qo = Error(u(542)), Ko = { then: function() {
  } };
  function Kh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Zh(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Hn, Hn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ph(e), e === void 0 && !("reason" in t) ? Error(u(600)) : e;
      default:
        if (typeof t.status == "string") t.then(Hn, Hn);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Ph(e), e;
        }
        throw Tl = t, ir;
    }
  }
  function Cl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Tl = n, ir) : n;
    }
  }
  var Tl = null;
  function Ih() {
    if (Tl === null) throw Error(u(459));
    var e = Tl;
    return Tl = null, e;
  }
  function Ph(e) {
    if (e === ir || e === Qo)
      throw Error(u(483));
  }
  var or = null, gi = 0;
  function Zo(e) {
    var t = gi;
    return gi += 1, or === null && (or = []), Zh(or, e, t);
  }
  function Ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Io(e, t) {
    throw t.$$typeof === Q ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Jh(e) {
    function t(D, M) {
      if (e) {
        var j = D.deletions;
        j === null ? (D.deletions = [M], D.flags |= 16) : j.push(M);
      }
    }
    function n(D, M) {
      if (!e) return null;
      for (; M !== null; )
        t(D, M), M = M.sibling;
      return null;
    }
    function l(D) {
      for (var M = /* @__PURE__ */ new Map(); D !== null; )
        D.key === null ? M.set(D.index, D) : M.set(D.key, D), D = D.sibling;
      return M;
    }
    function o(D, M) {
      return D = pa(D, M), D.index = 0, D.sibling = null, D;
    }
    function s(D, M, j) {
      return D.index = j, e ? (j = D.alternate, j !== null ? (j = j.index, j < M ? (D.flags |= 2, M) : j) : (D.flags |= 134217730, M)) : (D.flags |= 1048576, M);
    }
    function p(D) {
      return e && D.alternate === null && (D.flags |= 134217730), D;
    }
    function v(D, M, j, K) {
      return M === null || M.tag !== 6 ? (M = cc(j, D.mode, K), M.return = D, M) : (M = o(M, j), M.return = D, M);
    }
    function O(D, M, j, K) {
      var oe = j.type;
      return oe === I ? (D = Y(
        D,
        M,
        j.props.children,
        K,
        j.key
      ), Ua(D, j), D) : M !== null && (M.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === ge && Cl(oe) === M.type) ? (M = o(M, j.props), Ua(M, j), M.return = D, M) : (M = Ho(
        j.type,
        j.key,
        j.props,
        null,
        D.mode,
        K
      ), Ua(M, j), M.return = D, M);
    }
    function B(D, M, j, K) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== j.containerInfo || M.stateNode.implementation !== j.implementation ? (M = fc(j, D.mode, K), M.return = D, M) : (M = o(M, j.children || []), M.return = D, M);
    }
    function Y(D, M, j, K, oe) {
      return M === null || M.tag !== 7 ? (M = gl(
        j,
        D.mode,
        K,
        oe
      ), M.return = D, M) : (M = o(M, j), M.return = D, M);
    }
    function Z(D, M, j) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = cc(
          "" + M,
          D.mode,
          j
        ), M.return = D, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case J:
            return j = Ho(
              M.type,
              M.key,
              M.props,
              null,
              D.mode,
              j
            ), Ua(j, M), j.return = D, j;
          case S:
            return M = fc(
              M,
              D.mode,
              j
            ), M.return = D, M;
          case ge:
            return M = Cl(M), Z(D, M, j);
        }
        if (Oe(M) || ce(M))
          return M = gl(
            M,
            D.mode,
            j,
            null
          ), M.return = D, M;
        if (typeof M.then == "function")
          return Z(D, Zo(M), j);
        if (M.$$typeof === W)
          return Z(
            D,
            Go(D, M),
            j
          );
        Io(D, M);
      }
      return null;
    }
    function _(D, M, j, K) {
      var oe = M !== null ? M.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return oe !== null ? null : v(D, M, "" + j, K);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case J:
            return j.key === oe ? O(D, M, j, K) : null;
          case S:
            return j.key === oe ? B(D, M, j, K) : null;
          case ge:
            return j = Cl(j), _(D, M, j, K);
        }
        if (Oe(j) || ce(j))
          return oe !== null ? null : Y(D, M, j, K, null);
        if (typeof j.then == "function")
          return _(
            D,
            M,
            Zo(j),
            K
          );
        if (j.$$typeof === W)
          return _(
            D,
            M,
            Go(D, j),
            K
          );
        Io(D, j);
      }
      return null;
    }
    function H(D, M, j, K, oe) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return D = D.get(j) || null, v(M, D, "" + K, oe);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case J:
            return D = D.get(
              K.key === null ? j : K.key
            ) || null, O(M, D, K, oe);
          case S:
            return D = D.get(
              K.key === null ? j : K.key
            ) || null, B(M, D, K, oe);
          case ge:
            return K = Cl(K), H(
              D,
              M,
              j,
              K,
              oe
            );
        }
        if (Oe(K) || ce(K))
          return D = D.get(j) || null, Y(M, D, K, oe, null);
        if (typeof K.then == "function")
          return H(
            D,
            M,
            j,
            Zo(K),
            oe
          );
        if (K.$$typeof === W)
          return H(
            D,
            M,
            j,
            Go(M, K),
            oe
          );
        Io(M, K);
      }
      return null;
    }
    function ae(D, M, j, K) {
      for (var oe = null, Me = null, fe = M, he = M = 0, pt = null; fe !== null && he < j.length; he++) {
        fe.index > he ? (pt = fe, fe = null) : pt = fe.sibling;
        var _e = _(
          D,
          fe,
          j[he],
          K
        );
        if (_e === null) {
          fe === null && (fe = pt);
          break;
        }
        e && fe && _e.alternate === null && t(D, fe), M = s(_e, M, he), Me === null ? oe = _e : Me.sibling = _e, Me = _e, fe = pt;
      }
      if (he === j.length)
        return n(D, fe), Te && ha(D, he), oe;
      if (fe === null) {
        for (; he < j.length; he++)
          fe = Z(D, j[he], K), fe !== null && (M = s(
            fe,
            M,
            he
          ), Me === null ? oe = fe : Me.sibling = fe, Me = fe);
        return Te && ha(D, he), oe;
      }
      for (fe = l(fe); he < j.length; he++)
        pt = H(
          fe,
          D,
          he,
          j[he],
          K
        ), pt !== null && (e && (_e = pt.alternate, _e !== null && fe.delete(_e.key === null ? he : _e.key)), M = s(
          pt,
          M,
          he
        ), Me === null ? oe = pt : Me.sibling = pt, Me = pt);
      return e && fe.forEach(function(el) {
        return t(D, el);
      }), Te && ha(D, he), oe;
    }
    function se(D, M, j, K) {
      if (j == null) throw Error(u(151));
      for (var oe = null, Me = null, fe = M, he = M = 0, pt = null, _e = j.next(); fe !== null && !_e.done; he++, _e = j.next()) {
        fe.index > he ? (pt = fe, fe = null) : pt = fe.sibling;
        var el = _(D, fe, _e.value, K);
        if (el === null) {
          fe === null && (fe = pt);
          break;
        }
        e && fe && el.alternate === null && t(D, fe), M = s(el, M, he), Me === null ? oe = el : Me.sibling = el, Me = el, fe = pt;
      }
      if (_e.done)
        return n(D, fe), Te && ha(D, he), oe;
      if (fe === null) {
        for (; !_e.done; he++, _e = j.next())
          _e = Z(D, _e.value, K), _e !== null && (M = s(_e, M, he), Me === null ? oe = _e : Me.sibling = _e, Me = _e);
        return Te && ha(D, he), oe;
      }
      for (fe = l(fe); !_e.done; he++, _e = j.next())
        _e = H(fe, D, he, _e.value, K), _e !== null && (e && (pt = _e.alternate, pt !== null && fe.delete(
          pt.key === null ? he : pt.key
        )), M = s(_e, M, he), Me === null ? oe = _e : Me.sibling = _e, Me = _e);
      return e && fe.forEach(function($x) {
        return t(D, $x);
      }), Te && ha(D, he), oe;
    }
    function xe(D, M, j, K) {
      if (typeof j == "object" && j !== null && j.type === I && j.key === null && j.props.ref === void 0 && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case J:
            e: {
              for (var oe = j.key; M !== null; ) {
                if (M.key === oe) {
                  if (oe = j.type, oe === I) {
                    if (M.tag === 7) {
                      n(
                        D,
                        M.sibling
                      ), K = o(
                        M,
                        j.props.children
                      ), Ua(K, j), K.return = D, D = K;
                      break e;
                    }
                  } else if (M.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === ge && Cl(oe) === M.type) {
                    n(
                      D,
                      M.sibling
                    ), K = o(M, j.props), Ua(K, j), K.return = D, D = K;
                    break e;
                  }
                  n(D, M);
                  break;
                } else t(D, M);
                M = M.sibling;
              }
              j.type === I ? (K = gl(
                j.props.children,
                D.mode,
                K,
                j.key
              ), Ua(K, j), K.return = D, D = K) : (K = Ho(
                j.type,
                j.key,
                j.props,
                null,
                D.mode,
                K
              ), Ua(K, j), K.return = D, D = K);
            }
            return p(D);
          case S:
            e: {
              for (oe = j.key; M !== null; ) {
                if (M.key === oe)
                  if (M.tag === 4 && M.stateNode.containerInfo === j.containerInfo && M.stateNode.implementation === j.implementation) {
                    n(
                      D,
                      M.sibling
                    ), K = o(M, j.children || []), K.return = D, D = K;
                    break e;
                  } else {
                    n(D, M);
                    break;
                  }
                else t(D, M);
                M = M.sibling;
              }
              K = fc(j, D.mode, K), K.return = D, D = K;
            }
            return p(D);
          case ge:
            return j = Cl(j), xe(
              D,
              M,
              j,
              K
            );
        }
        if (Oe(j))
          return ae(
            D,
            M,
            j,
            K
          );
        if (ce(j)) {
          if (oe = ce(j), typeof oe != "function") throw Error(u(150));
          return j = oe.call(j), se(
            D,
            M,
            j,
            K
          );
        }
        if (typeof j.then == "function")
          return xe(
            D,
            M,
            Zo(j),
            K
          );
        if (j.$$typeof === W)
          return xe(
            D,
            M,
            Go(D, j),
            K
          );
        Io(D, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, M !== null && M.tag === 6 ? (n(D, M.sibling), K = o(M, j), K.return = D, D = K) : (n(D, M), K = cc(j, D.mode, K), K.return = D, D = K), p(D)) : n(D, M);
    }
    return function(D, M, j, K) {
      try {
        gi = 0;
        var oe = xe(
          D,
          M,
          j,
          K
        );
        return or = null, oe;
      } catch (fe) {
        if (fe === ir || fe === Qo) throw fe;
        var Me = qt(29, fe, null, D.mode);
        return Me.lanes = K, Me.return = D, Me;
      } finally {
      }
    };
  }
  var Rl = Jh(!0), Fh = Jh(!1), ja = !1;
  function xc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ec(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function La(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ha(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (De & 2) !== 0) {
      var o = l.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), l.pending = t, t = Lo(e), Uh(e, null, n), t;
    }
    return jo(e, l, t, n), Lo(e);
  }
  function yi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, kp(e, n);
    }
  }
  function Cc(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var o = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? o = s = p : s = s.next = p, n = n.next;
        } while (n !== null);
        s === null ? o = s = t : s = s.next = t;
      } else o = s = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Tc = !1;
  function vi() {
    if (Tc) {
      var e = rr;
      if (e !== null) throw e;
    }
  }
  function bi(e, t, n, l) {
    Tc = !1;
    var o = e.updateQueue;
    ja = !1;
    var s = o.firstBaseUpdate, p = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var O = v, B = O.next;
      O.next = null, p === null ? s = B : p.next = B, p = O;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, v = Y.lastBaseUpdate, v !== p && (v === null ? Y.firstBaseUpdate = B : v.next = B, Y.lastBaseUpdate = O));
    }
    if (s !== null) {
      var Z = o.baseState;
      p = 0, Y = B = O = null, v = s;
      do {
        var _ = v.lane & -536870913, H = _ !== v.lane;
        if (H ? (ze & _) === _ : (l & _) === _) {
          _ !== 0 && _ === xl && (Tc = !0), Y !== null && (Y = Y.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ae = e, se = v;
            _ = t;
            var xe = n;
            switch (se.tag) {
              case 1:
                if (ae = se.payload, typeof ae == "function") {
                  Z = ae.call(xe, Z, _);
                  break e;
                }
                Z = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = se.payload, _ = typeof ae == "function" ? ae.call(xe, Z, _) : ae, _ == null) break e;
                Z = k({}, Z, _);
                break e;
              case 2:
                ja = !0;
            }
          }
          _ = v.callback, _ !== null && (e.flags |= 64, H && (e.flags |= 8192), H = o.callbacks, H === null ? o.callbacks = [_] : H.push(_));
        } else
          H = {
            lane: _,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, Y === null ? (B = Y = H, O = Z) : Y = Y.next = H, p |= _;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null)
            break;
          H = v, v = H.next, H.next = null, o.lastBaseUpdate = H, o.shared.pending = null;
        }
      } while (!0);
      Y === null && (O = Z), o.baseState = O, o.firstBaseUpdate = B, o.lastBaseUpdate = Y, s === null && (o.shared.lanes = 0), Xa |= p, e.lanes = p, e.memoizedState = Z;
    }
  }
  function Wh(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function em(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Wh(n[e], t);
  }
  var ka = Dt(null), Po = Dt(0);
  function tm(e, t) {
    e = xa, be(Po, e), be(ka, t), xa = e | t.baseLanes;
  }
  function Rc() {
    be(Po, xa), be(ka, ka.current);
  }
  function Oc() {
    xa = Po.current, Ie(ka), Ie(Po);
  }
  var Rt = Dt(null), _t = null;
  function $a(e) {
    var t = e.alternate;
    be(Ot, Ot.current & 1), be(Rt, e), _t === null && (t === null || ka.current !== null || t.memoizedState !== null) && (_t = e);
  }
  function wc(e) {
    be(Ot, Ot.current), be(Rt, e), _t === null && (_t = e);
  }
  function nm(e) {
    e.tag === 22 ? (be(Ot, Ot.current), be(Rt, e), _t === null && (_t = e)) : Ya();
  }
  function Ya() {
    be(Ot, Ot.current), be(Rt, Rt.current);
  }
  function tn(e) {
    Ie(Rt), _t === e && (_t = null), Ie(Ot);
  }
  var Ot = Dt(0);
  function Si(e, t) {
    be(Rt, Rt.current), be(Ot, t);
  }
  function Ac(e) {
    Ie(Ot), Ie(Rt), _t === e && (_t = null);
  }
  function Jo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Jf(n) || Ff(n)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ya = 0, Se = null, Ve = null, ft = null, Fo = !1, ur = !1, Ol = !1, Wo = 0, xi = 0, sr = null, oS = 0;
  function lt() {
    throw Error(u(321));
  }
  function zc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!en(e[n], t[n])) return !1;
    return !0;
  }
  function Mc(e, t, n, l, o, s) {
    return ya = s, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, re.H = e === null || e.memoizedState === null ? km : $m, Ol = !1, s = n(l, o), Ol = !1, ur && (s = lm(
      t,
      n,
      l,
      o
    )), am(e), s;
  }
  function am(e) {
    re.H = iu;
    var t = Ve !== null && Ve.next !== null;
    if (ya = 0, ft = Ve = Se = null, Fo = !1, xi = 0, sr = null, t) throw Error(u(300));
    e === null || dt || (e = e.dependencies, e !== null && Vo(e) && (dt = !0));
  }
  function lm(e, t, n, l) {
    Se = e;
    var o = 0;
    do {
      if (ur && (sr = null), xi = 0, ur = !1, 25 <= o) throw Error(u(301));
      if (o += 1, ft = Ve = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      re.H = mS, s = t(n, l);
    } while (ur);
    return s;
  }
  function uS() {
    var e = re.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ei(t) : t, e = e.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== e && (Se.flags |= 1024), t;
  }
  function _c() {
    var e = Wo !== 0;
    return Wo = 0, e;
  }
  function Nc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Dc(e) {
    if (Fo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Fo = !1;
    }
    ya = 0, ft = Ve = Se = null, ur = !1, xi = Wo = 0, sr = null;
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ft === null ? Se.memoizedState = ft = e : ft = ft.next = e, ft;
  }
  function ut() {
    if (Ve === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = ft === null ? Se.memoizedState : ft.next;
    if (t !== null)
      ft = t, Ve = e;
    else {
      if (e === null)
        throw Se.alternate === null ? Error(u(467)) : Error(u(310));
      Ve = e, e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null
      }, ft === null ? Se.memoizedState = ft = e : ft = ft.next = e;
    }
    return ft;
  }
  function eu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ei(e) {
    var t = xi;
    return xi += 1, sr === null && (sr = []), e = Zh(sr, e, t), t = Se, (ft === null ? t.memoizedState : ft.next) === null && (t = t.alternate, re.H = t === null || t.memoizedState === null ? km : $m), e;
  }
  function tu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ei(e);
      if (e.$$typeof === P) return;
      if (e.$$typeof === W) return Tt(e);
    }
    throw Error(u(438, String(e)));
  }
  function Bc(e) {
    var t = null, n = Se.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = Se.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = eu(), Se.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = et;
    return t.index++, n;
  }
  function va(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function nu(e) {
    var t = ut();
    return Uc(t, Ve, e);
  }
  function Uc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = n;
    var o = e.baseQueue, s = l.pending;
    if (s !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = s.next, s.next = p;
      }
      t.baseQueue = o = s, l.pending = null;
    }
    if (s = e.baseState, o === null) e.memoizedState = s;
    else {
      t = o.next;
      var v = p = null, O = null, B = t, Y = !1;
      do {
        var Z = B.lane & -536870913;
        if (Z !== B.lane ? (ze & Z) === Z : (ya & Z) === Z) {
          var _ = B.revertLane;
          if (_ === 0)
            O !== null && (O = O.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), Z === xl && (Y = !0);
          else if ((ya & _) === _) {
            B = B.next, _ === xl && (Y = !0);
            continue;
          } else
            Z = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, O === null ? (v = O = Z, p = s) : O = O.next = Z, Se.lanes |= _, Xa |= _;
          Z = B.action, Ol && n(s, Z), s = B.hasEagerState ? B.eagerState : n(s, Z);
        } else
          _ = {
            lane: Z,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, O === null ? (v = O = _, p = s) : O = O.next = _, Se.lanes |= Z, Xa |= Z;
        B = B.next;
      } while (B !== null && B !== t);
      if (O === null ? p = s : O.next = v, !en(s, e.memoizedState) && (dt = !0, Y && (n = rr, n !== null)))
        throw n;
      e.memoizedState = s, e.baseState = p, e.baseQueue = O, l.lastRenderedState = s;
    }
    return o === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function jc(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, o = n.pending, s = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        s = e(s, p.action), p = p.next;
      while (p !== o);
      en(s, t.memoizedState) || (dt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, l];
  }
  function rm(e, t, n) {
    var l = Se, o = ut(), s = Te;
    if (s) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = t();
    var p = !en(
      (Ve || o).memoizedState,
      n
    );
    if (p && (o.memoizedState = n, dt = !0), o = o.queue, kc(um.bind(null, l, o, e), [
      e
    ]), e = o.getSnapshot !== t || p || ft !== null && (ft.memoizedState.tag & 1) !== 0, cr(
      e ? 9 : 8,
      { destroy: void 0 },
      om.bind(null, l, o, n, t),
      null
    ), e) {
      if (l.flags |= 2048, Xe === null) throw Error(u(349));
      s || (ya & 127) !== 0 || im(l, t, n);
    }
    return n;
  }
  function im(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = eu(), Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function om(e, t, n, l) {
    t.value = n, t.getSnapshot = l, sm(t) && cm(e);
  }
  function um(e, t, n) {
    return n(function() {
      sm(t) && cm(e);
    });
  }
  function sm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !en(e, n);
    } catch {
      return !0;
    }
  }
  function cm(e) {
    var t = ml(e, 2);
    t !== null && Qt(t, e, 2);
  }
  function Lc(e) {
    var t = Ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ol) {
        Aa(!0);
        try {
          n();
        } finally {
          Aa(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: va,
      lastRenderedState: e
    }, t;
  }
  function fm(e, t, n, l) {
    return e.baseState = n, Uc(
      e,
      Ve,
      typeof l == "function" ? l : va
    );
  }
  function sS(e, t, n, l, o) {
    if (ru(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          s.listeners.push(p);
        }
      };
      re.T !== null ? n(!0) : s.isTransition = !1, l(s), n = t.pending, n === null ? (s.next = t.pending = s, dm(t, s)) : (s.next = n.next, t.pending = n.next = s);
    }
  }
  function dm(e, t) {
    var n = t.action, l = t.payload, o = e.state;
    if (t.isTransition) {
      var s = re.T, p = {};
      p.types = s !== null ? s.types : null, re.T = p;
      try {
        var v = n(o, l), O = re.S;
        O !== null && O(p, v), pm(e, t, v);
      } catch (B) {
        Hc(e, t, B);
      } finally {
        s !== null && p.types !== null && (s.types = p.types), re.T = s;
      }
    } else
      try {
        s = n(o, l), pm(e, t, s);
      } catch (B) {
        Hc(e, t, B);
      }
  }
  function pm(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        hm(e, t, l);
      },
      function(l) {
        return Hc(e, t, l);
      }
    ) : hm(e, t, n);
  }
  function hm(e, t, n) {
    t.status = "fulfilled", t.value = n, mm(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, dm(e, n)));
  }
  function Hc(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, mm(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function mm(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function gm(e, t) {
    return t;
  }
  function ym(e, t) {
    if (Te) {
      var n = Xe.formState;
      if (n !== null) {
        e: {
          var l = Se;
          if (Te) {
            if (Pe) {
              t: {
                for (var o = Pe, s = Sn; o.nodeType !== 8; ) {
                  if (!s) {
                    o = null;
                    break t;
                  }
                  if (o = En(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                s = o.data, o = s === "F!" || s === "F" ? o : null;
              }
              if (o) {
                Pe = En(
                  o.nextSibling
                ), l = o.data === "F!";
                break e;
              }
            }
            Da(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Ut(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gm,
      lastRenderedState: t
    }, n.queue = l, n = jm.bind(
      null,
      Se,
      l
    ), l.dispatch = n, l = Lc(!1), s = Gc.bind(
      null,
      Se,
      !1,
      l.queue
    ), l = Ut(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = o, n = sS.bind(
      null,
      Se,
      o,
      s,
      n
    ), o.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function vm(e) {
    var t = ut();
    return bm(t, Ve, e);
  }
  function bm(e, t, n) {
    if (t = Uc(
      e,
      t,
      gm
    )[0], e = nu(va)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ei(t);
      } catch (p) {
        throw p === ir ? Qo : p;
      }
    else l = t;
    t = ut();
    var o = t.queue, s = o.dispatch;
    return n !== t.memoizedState && (Se.flags |= 2048, cr(
      9,
      { destroy: void 0 },
      cS.bind(null, o, n),
      null
    )), [l, s, e];
  }
  function cS(e, t) {
    e.action = t;
  }
  function Sm(e) {
    var t = ut(), n = Ve;
    if (n !== null)
      return bm(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function cr(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = Se.updateQueue, t === null && (t = eu(), Se.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function xm() {
    return ut().memoizedState;
  }
  function au(e, t, n, l) {
    var o = Ut();
    Se.flags |= e, o.memoizedState = cr(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function lu(e, t, n, l) {
    var o = ut();
    l = l === void 0 ? null : l;
    var s = o.memoizedState.inst;
    Ve !== null && l !== null && zc(l, Ve.memoizedState.deps) ? o.memoizedState = cr(t, s, n, l) : (Se.flags |= e, o.memoizedState = cr(
      1 | t,
      s,
      n,
      l
    ));
  }
  function Em(e, t) {
    au(8390656, 8, e, t);
  }
  function kc(e, t) {
    lu(2048, 8, e, t);
  }
  function fS(e) {
    Se.flags |= 4;
    var t = Se.updateQueue;
    if (t === null)
      t = eu(), Se.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Cm(e) {
    var t = ut().memoizedState;
    return fS({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Tm(e, t) {
    return lu(4, 2, e, t);
  }
  function Rm(e, t) {
    return lu(4, 4, e, t);
  }
  function Om(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function wm(e, t, n) {
    n = n != null ? n.concat([e]) : null, lu(4, 4, Om.bind(null, t, e), n);
  }
  function $c() {
  }
  function Am(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && zc(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function zm(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && zc(t, l[1]))
      return l[0];
    if (l = e(), Ol) {
      Aa(!0);
      try {
        e();
      } finally {
        Aa(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Yc(e, t, n) {
    return n === void 0 || (ya & 1073741824) !== 0 && (ze & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = kg(), Se.lanes |= e, Xa |= e, n);
  }
  function Mm(e, t, n, l) {
    return en(n, t) ? n : ka.current !== null ? (e = Yc(e, n, l), en(e, t) || (dt = !0), e) : (ya & 106) === 0 || (ya & 1073741824) !== 0 && (ze & 261930) === 0 ? (dt = !0, e.memoizedState = n) : (e = kg(), Se.lanes |= e, Xa |= e, t);
  }
  function _m(e, t, n, l, o) {
    var s = de.p;
    de.p = s !== 0 && 8 > s ? s : 8;
    var p = re.T, v = {};
    v.types = p !== null ? p.types : null, re.T = v, Gc(e, !1, t, n);
    try {
      var O = o(), B = re.S;
      if (B !== null && B(v, O), O !== null && typeof O == "object" && typeof O.then == "function") {
        var Y = iS(
          O,
          l
        );
        Ci(
          e,
          t,
          Y,
          rn(e)
        );
      } else
        Ci(
          e,
          t,
          l,
          rn(e)
        );
    } catch (Z) {
      Ci(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Z },
        rn()
      );
    } finally {
      de.p = s, p !== null && v.types !== null && (p.types = v.types), re.T = p;
    }
  }
  function dS() {
  }
  function qc(e, t, n, l) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Nm(e).queue;
    _m(
      e,
      o,
      t,
      kt,
      n === null ? dS : function() {
        return Dm(e), n(l);
      }
    );
  }
  function Nm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: kt,
      baseState: kt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: kt
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Dm(e) {
    var t = Nm(e);
    t.next === null && (t = e.alternate.memoizedState), Ci(
      e,
      t.next.queue,
      {},
      rn()
    );
  }
  function Vc() {
    return Tt(zr);
  }
  function Bm() {
    return ut().memoizedState;
  }
  function Um() {
    return ut().memoizedState;
  }
  function pS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = rn();
          e = La(n);
          var l = Ha(t, e, n);
          l !== null && (Qt(l, t, n), yi(l, t, n)), t = { cache: yc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function hS(e, t, n) {
    var l = rn();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ru(e) ? Lm(t, n) : (n = uc(e, t, n, l), n !== null && (Qt(n, e, l), Hm(n, t, l)));
  }
  function jm(e, t, n) {
    var l = rn();
    Ci(e, t, n, l);
  }
  function Ci(e, t, n, l) {
    var o = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ru(e)) Lm(t, o);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var p = t.lastRenderedState, v = s(p, n);
          if (o.hasEagerState = !0, o.eagerState = v, en(v, p))
            return jo(e, t, o, 0), Xe === null && Uo(), !1;
        } catch {
        } finally {
        }
      if (n = uc(e, t, o, l), n !== null)
        return Qt(n, e, l), Hm(n, t, l), !0;
    }
    return !1;
  }
  function Gc(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Uf(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ru(e)) {
      if (t) throw Error(u(479));
    } else
      t = uc(
        e,
        n,
        l,
        2
      ), t !== null && Qt(t, e, 2);
  }
  function ru(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function Lm(e, t) {
    ur = Fo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Hm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, kp(e, n);
    }
  }
  var iu = {
    readContext: Tt,
    use: tu,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt,
    useEffectEvent: lt
  }, km = {
    readContext: Tt,
    use: tu,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Tt,
    useEffect: Em,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, au(
        4194308,
        4,
        Om.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return au(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      au(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Ut();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ol) {
        Aa(!0);
        try {
          e();
        } finally {
          Aa(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Ut();
      if (n !== void 0) {
        var o = n(t);
        if (Ol) {
          Aa(!0);
          try {
            n(t);
          } finally {
            Aa(!1);
          }
        }
      } else o = t;
      return l.memoizedState = l.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, l.queue = e, e = e.dispatch = hS.bind(
        null,
        Se,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Lc(e);
      var t = e.queue, n = jm.bind(null, Se, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: $c,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return Yc(n, e, t);
    },
    useTransition: function() {
      var e = Lc(!1);
      return e = _m.bind(
        null,
        Se,
        e.queue,
        !0,
        !1
      ), Ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = Se, o = Ut();
      if (Te) {
        if (n === void 0)
          throw Error(u(407));
        n = n();
      } else {
        if (n = t(), Xe === null)
          throw Error(u(349));
        (ze & 127) !== 0 || im(l, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return o.queue = s, Em(um.bind(null, l, s, e), [
        e
      ]), l.flags |= 2048, cr(
        9,
        { destroy: void 0 },
        om.bind(
          null,
          l,
          s,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Ut(), t = Xe.identifierPrefix;
      if (Te) {
        var n = $n, l = kn;
        n = (l & ~(1 << 32 - Ft(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Wo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = oS++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Vc,
    useFormState: ym,
    useActionState: ym,
    useOptimistic: function(e) {
      var t = Ut();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Gc.bind(
        null,
        Se,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Bc,
    useCacheRefresh: function() {
      return Ut().memoizedState = pS.bind(
        null,
        Se
      );
    },
    useEffectEvent: function(e) {
      var t = Ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((De & 2) !== 0)
          throw Error(u(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, $m = {
    readContext: Tt,
    use: tu,
    useCallback: Am,
    useContext: Tt,
    useEffect: kc,
    useImperativeHandle: wm,
    useInsertionEffect: Tm,
    useLayoutEffect: Rm,
    useMemo: zm,
    useReducer: nu,
    useRef: xm,
    useState: function() {
      return nu(va);
    },
    useDebugValue: $c,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Mm(
        n,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = nu(va)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ei(e),
        t
      ];
    },
    useSyncExternalStore: rm,
    useId: Bm,
    useHostTransitionStatus: Vc,
    useFormState: vm,
    useActionState: vm,
    useOptimistic: function(e, t) {
      var n = ut();
      return fm(n, Ve, e, t);
    },
    useMemoCache: Bc,
    useCacheRefresh: Um,
    useEffectEvent: Cm
  }, mS = {
    readContext: Tt,
    use: tu,
    useCallback: Am,
    useContext: Tt,
    useEffect: kc,
    useImperativeHandle: wm,
    useInsertionEffect: Tm,
    useLayoutEffect: Rm,
    useMemo: zm,
    useReducer: jc,
    useRef: xm,
    useState: function() {
      return jc(va);
    },
    useDebugValue: $c,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Ve === null ? Yc(n, e, t) : Mm(
        n,
        Ve.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = jc(va)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ei(e),
        t
      ];
    },
    useSyncExternalStore: rm,
    useId: Bm,
    useHostTransitionStatus: Vc,
    useFormState: Sm,
    useActionState: Sm,
    useOptimistic: function(e, t) {
      var n = ut();
      return Ve !== null ? fm(n, Ve, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Bc,
    useCacheRefresh: Um,
    useEffectEvent: Cm
  };
  function Xc(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : k({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Qc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = rn(), o = La(l);
      o.payload = t, n != null && (o.callback = n), t = Ha(e, o, l), t !== null && (Qt(t, e, l), yi(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = rn(), o = La(l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ha(e, o, l), t !== null && (Qt(t, e, l), yi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = rn(), l = La(n);
      l.tag = 2, t != null && (l.callback = t), t = Ha(e, l, n), t !== null && (Qt(t, e, n), yi(t, e, n));
    }
  };
  function Ym(e, t, n, l, o, s, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, p) : t.prototype && t.prototype.isPureReactComponent ? !si(n, l) || !si(o, s) : !0;
  }
  function qm(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Qc.enqueueReplaceState(t, t.state, null);
  }
  function wl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = k({}, n));
      for (var o in e)
        n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  function Vm(e) {
    Bo(e);
  }
  function Gm(e) {
    console.error(e);
  }
  function Xm(e) {
    Bo(e);
  }
  function ou(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Qm(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Kc(e, t, n) {
    return n = La(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ou(e, t);
    }, n;
  }
  function Km(e) {
    return e = La(e), e.tag = 3, e;
  }
  function Zm(e, t, n, l) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = l.value;
      e.payload = function() {
        return o(s);
      }, e.callback = function() {
        Qm(t, n, l);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Qm(t, n, l), typeof o != "function" && (Qa === null ? Qa = /* @__PURE__ */ new Set([this]) : Qa.add(this));
      var v = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function gS(e, t, n, l, o) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && bl(
        t,
        n,
        o,
        !0
      ), n = Rt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return _t === null ? Au() : n.alternate === null && rt === 0 && (rt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, l === Ko ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Nf(e, l, o)), !1;
          case 22:
            return n.flags |= 65536, l === Ko ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Nf(e, l, o)), !1;
        }
        throw Error(u(435, n.tag));
      }
      return Nf(e, l, o), Au(), !1;
    }
    if (Te)
      return t = Rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, l !== pc && (e = Error(u(422), { cause: l }), di(yn(e, n)))) : (l !== pc && (t = Error(u(423), {
        cause: l
      }), di(
        yn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, l = yn(l, n), o = Kc(
        e.stateNode,
        l,
        o
      ), Cc(e, o), rt !== 4 && (rt = 2)), !1;
    var s = Error(u(520), { cause: l });
    if (s = yn(s, n), _i === null ? _i = [s] : _i.push(s), rt !== 4 && (rt = 2), t === null) return !0;
    l = yn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Kc(n.stateNode, l, e), Cc(n, e), !1;
        case 1:
          if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Qa === null || !Qa.has(s))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = Km(o), Zm(
              o,
              e,
              n,
              l
            ), Cc(n, o), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Zc = Error(u(461)), dt = !1;
  function mt(e, t, n, l) {
    t.child = e === null ? Fh(t, null, n, l) : Rl(
      t,
      e.child,
      n,
      l
    );
  }
  function Im(e, t, n, l, o) {
    n = n.render;
    var s = t.ref;
    if ("ref" in l) {
      var p = {};
      for (var v in l)
        v !== "ref" && (p[v] = l[v]);
    } else p = l;
    return Sl(t), l = Mc(
      e,
      t,
      n,
      p,
      s,
      o
    ), v = _c(), e !== null && !dt ? (Nc(e, t, o), ba(e, t, o)) : (Te && v && $o(t), t.flags |= 1, mt(e, t, l, o), t.child);
  }
  function Pm(e, t, n, l, o) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !sc(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = s, Jm(
        e,
        t,
        s,
        l,
        o
      )) : (e = Ho(
        n.type,
        null,
        l,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !nf(e, o)) {
      var p = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : si, n(p, l) && e.ref === t.ref)
        return ba(e, t, o);
    }
    return t.flags |= 1, e = pa(s, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Jm(e, t, n, l, o) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (si(s, l) && e.ref === t.ref)
        if (dt = !1, t.pendingProps = l = s, nf(e, o))
          (e.flags & 131072) !== 0 && (dt = !0);
        else
          return t.lanes = e.lanes, ba(e, t, o);
    }
    return Ic(
      e,
      t,
      n,
      l,
      o
    );
  }
  function Fm(e, t, n, l) {
    var o = l.children, s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, o = 0; l !== null; )
            o = o | l.lanes | l.childLanes, l = l.sibling;
          l = o & ~s;
        } else l = 0, t.child = null;
        return Wm(
          e,
          t,
          s,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Xo(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? tm(t, s) : Rc(), nm(t);
      else
        return l = t.lanes = 536870912, Wm(
          e,
          t,
          s !== null ? s.baseLanes | n : n,
          n,
          l
        );
    } else
      s !== null ? (Xo(t, s.cachePool), tm(t, s), Ya(), t.memoizedState = null) : (e !== null && Xo(t, null), Rc(), Ya());
    return mt(e, t, o, n), t.child;
  }
  function Ti(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Wm(e, t, n, l, o) {
    var s = bc();
    return s = s === null ? null : { parent: ct._currentValue, pool: s }, t.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, e !== null && Xo(t, null), Rc(), nm(t), e !== null && bl(e, t, l, !0), t.childLanes = o, null;
  }
  function uu(e, t) {
    return t = su(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function eg(e, t, n) {
    return Rl(t, e.child, null, n), e = uu(t, t.pendingProps), e.flags |= 2, tn(t), t.memoizedState = null, e;
  }
  function yS(e, t, n) {
    var l = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (l.mode === "hidden")
          return e = uu(t, l), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Ti(null, e);
        if (wc(t), (e = Pe) ? (e = Oy(
          e,
          Sn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: _a !== null ? { id: kn, overflow: $n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Lh(e), n.return = t, t.child = n, bt = t, Pe = null)) : e = null, e === null) throw Da(t);
        return t.lanes = 536870912, null;
      }
      return uu(t, l);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var p = s.dehydrated;
      if (wc(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = eg(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (dt || bl(e, t, n, !1), o = (n & e.childLanes) !== 0, dt || o) {
        if (ka.current === null) {
          if (l = Xe, l !== null && (p = $p(l, n), p !== 0 && p !== s.retryLane))
            throw s.retryLane = p, ml(e, p), Qt(l, e, p), Zc;
          Au();
        }
        t = eg(
          e,
          t,
          n
        );
      } else
        e = s.treeContext, Pe = En(p.nextSibling), bt = t, Te = !0, Na = null, Sn = !1, e !== null && $h(t, e), t = uu(t, l), t.flags |= 134221824;
      return t;
    }
    return e = pa(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function fr(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(u(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Ic(e, t, n, l, o) {
    return Sl(t), n = Mc(
      e,
      t,
      n,
      l,
      void 0,
      o
    ), l = _c(), e !== null && !dt ? (Nc(e, t, o), ba(e, t, o)) : (Te && l && $o(t), t.flags |= 1, mt(e, t, n, o), t.child);
  }
  function tg(e, t, n, l, o, s) {
    return Sl(t), t.updateQueue = null, n = lm(
      t,
      l,
      n,
      o
    ), am(e), l = _c(), e !== null && !dt ? (Nc(e, t, s), ba(e, t, s)) : (Te && l && $o(t), t.flags |= 1, mt(e, t, n, s), t.child);
  }
  function ng(e, t, n, l, o) {
    if (Sl(t), t.stateNode === null) {
      var s = tr, p = n.contextType;
      typeof p == "object" && p !== null && (s = Tt(p)), s = new n(l, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Qc, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = l, s.state = t.memoizedState, s.refs = {}, xc(t), p = n.contextType, s.context = typeof p == "object" && p !== null ? Tt(p) : tr, s.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Xc(
        t,
        n,
        p,
        l
      ), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (p = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), p !== s.state && Qc.enqueueReplaceState(s, s.state, null), bi(t, l, s, o), vi(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      s = t.stateNode;
      var v = t.memoizedProps, O = wl(n, v);
      s.props = O;
      var B = s.context, Y = n.contextType;
      p = tr, typeof Y == "object" && Y !== null && (p = Tt(Y));
      var Z = n.getDerivedStateFromProps;
      Y = typeof Z == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, Y || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || B !== p) && qm(
        t,
        s,
        l,
        p
      ), ja = !1;
      var _ = t.memoizedState;
      s.state = _, bi(t, l, s, o), vi(), B = t.memoizedState, v || _ !== B || ja ? (typeof Z == "function" && (Xc(
        t,
        n,
        Z,
        l
      ), B = t.memoizedState), (O = ja || Ym(
        t,
        n,
        O,
        l,
        _,
        B,
        p
      )) ? (Y || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = B), s.props = l, s.state = B, s.context = p, l = O) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      s = t.stateNode, Ec(e, t), p = t.memoizedProps, Y = wl(n, p), s.props = Y, Z = t.pendingProps, _ = s.context, B = n.contextType, O = tr, typeof B == "object" && B !== null && (O = Tt(B)), v = n.getDerivedStateFromProps, (B = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (p !== Z || _ !== O) && qm(
        t,
        s,
        l,
        O
      ), ja = !1, _ = t.memoizedState, s.state = _, bi(t, l, s, o), vi();
      var H = t.memoizedState;
      p !== Z || _ !== H || ja || e !== null && e.dependencies !== null && Vo(e.dependencies) ? (typeof v == "function" && (Xc(
        t,
        n,
        v,
        l
      ), H = t.memoizedState), (Y = ja || Ym(
        t,
        n,
        Y,
        l,
        _,
        H,
        O
      ) || e !== null && e.dependencies !== null && Vo(e.dependencies)) ? (B || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, H, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        l,
        H,
        O
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || p === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = H), s.props = l, s.state = H, s.context = O, l = Y) : (typeof s.componentDidUpdate != "function" || p === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return s = l, fr(e, t), l = (t.flags & 128) !== 0, s || l ? (s = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && l ? (t.child = Rl(
      t,
      e.child,
      null,
      o
    ), t.child = Rl(
      t,
      null,
      n,
      o
    )) : mt(e, t, n, o), t.memoizedState = s.state, e = t.child) : e = ba(
      e,
      t,
      o
    ), e;
  }
  function ag(e, t, n, l) {
    return yl(), t.flags |= 256, mt(e, t, n, l), t.child;
  }
  var Pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Jc(e) {
    return { baseLanes: e, cachePool: Qh() };
  }
  function Fc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= ln), e;
  }
  function lg(e, t, n) {
    var l = t.pendingProps, o = !1, s = (t.flags & 128) !== 0, p;
    if ((p = s) || (p = e !== null && e.memoizedState === null ? !1 : (Ot.current & 2) !== 0), p && (o = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (o ? $a(t) : Ya(), (e = Pe) ? (e = Oy(
          e,
          Sn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: _a !== null ? { id: kn, overflow: $n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Lh(e), n.return = t, t.child = n, bt = t, Pe = null)) : e = null, e === null) throw Da(t);
        return Ff(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return s = l.children, l = l.fallback, o ? (Ya(), o = t.mode, s = su(
        { mode: "hidden", children: s },
        o
      ), l = gl(
        l,
        o,
        n,
        null
      ), s.return = t, l.return = t, s.sibling = l, t.child = s, l = t.child, l.memoizedState = Jc(n), l.childLanes = Fc(
        e,
        p,
        n
      ), t.memoizedState = Pc, Ti(null, l)) : ($a(t), Wc(t, s));
    }
    var v = e.memoizedState;
    if (v !== null) {
      var O = v.dehydrated;
      if (O !== null)
        return vS(
          e,
          t,
          s,
          p,
          l,
          O,
          v,
          n
        );
    }
    return o ? (Ya(), o = l.fallback, s = t.mode, v = e.child, O = v.sibling, l = pa(v, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = v.subtreeFlags & 1206910976, O !== null ? o = pa(O, o) : (o = gl(
      o,
      s,
      n,
      null
    ), o.flags |= 2), o.return = t, l.return = t, l.sibling = o, t.child = l, Ti(null, l), l = t.child, o = e.child.memoizedState, o === null ? o = Jc(n) : (s = o.cachePool, s !== null ? (v = ct._currentValue, s = s.parent !== v ? { parent: v, pool: v } : s) : s = Qh(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: s
    }), l.memoizedState = o, l.childLanes = Fc(
      e,
      p,
      n
    ), t.memoizedState = Pc, Ti(e.child, l)) : ($a(t), n = e.child, e = n.sibling, n = pa(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Wc(e, t) {
    return t = su(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function su(e, t) {
    return e = qt(22, e, null, t), e.lanes = 0, e;
  }
  function cu(e, t, n) {
    return Rl(t, e.child, null, n), e = Wc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function vS(e, t, n, l, o, s, p, v) {
    if (n)
      return t.flags & 256 ? ($a(t), t.flags &= -257, cu(
        e,
        t,
        v
      )) : t.memoizedState !== null ? (Ya(), t.child = e.child, t.flags |= 128, null) : (Ya(), s = o.fallback, p = t.mode, o = su(
        { mode: "visible", children: o.children },
        p
      ), s = gl(
        s,
        p,
        v,
        null
      ), s.flags |= 2, o.return = t, s.return = t, o.sibling = s, t.child = o, Rl(t, e.child, null, v), o = t.child, o.memoizedState = Jc(v), o.childLanes = Fc(
        e,
        l,
        v
      ), t.memoizedState = Pc, Ti(null, o));
    if ($a(t), Ff(s)) {
      if (l = s.nextSibling && s.nextSibling.dataset, l) var O = l.dgst;
      return l = O, l !== "" && (o = Error(u(419)), o.stack = "", o.digest = l, di({ value: o, source: null, stack: null })), cu(
        e,
        t,
        v
      );
    }
    if (dt || bl(e, t, v, !1), l = (v & e.childLanes) !== 0, dt || l) {
      if (ka.current !== null)
        return cu(
          e,
          t,
          v
        );
      if (l = Xe, l !== null && (o = $p(
        l,
        v
      ), o !== 0 && o !== p.retryLane))
        throw p.retryLane = o, ml(e, o), Qt(l, e, o), Zc;
      return Jf(s) || Au(), cu(
        e,
        t,
        v
      );
    }
    return Jf(s) ? (t.flags |= 192, t.child = e.child, null) : (e = p.treeContext, Pe = En(s.nextSibling), bt = t, Te = !0, Na = null, Sn = !1, e !== null && $h(t, e), t = Wc(
      t,
      o.children
    ), t.flags |= 134221824, t);
  }
  function rg(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), qo(e.return, t, n);
  }
  function ig(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && Jo(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function fu(e, t, n, l, o, s) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: o,
      treeForkCount: s
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = n, p.tailMode = o, p.treeForkCount = s);
  }
  function ef(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function tf(e, t, n) {
    var l = t.pendingProps, o = l.revealOrder, s = l.tail;
    l = l.children;
    var p = Ot.current;
    if (t.flags & 128)
      return Si(t, p), null;
    var v = (p & 2) !== 0;
    if (v ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, Si(t, p), o === "backwards" && e !== null ? (ef(e), mt(e, t, l, n), ef(e)) : mt(e, t, l, n), l = Te ? fi : 0, !v && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && rg(e, n, t);
        else if (e.tag === 19)
          rg(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (o) {
      case "backwards":
        n = ig(t.child), n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null, ef(t)), fu(
          t,
          !0,
          o,
          null,
          s,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Jo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        fu(
          t,
          !0,
          n,
          null,
          s,
          l
        );
        break;
      case "together":
        fu(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        n = ig(t.child), n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), fu(
          t,
          !1,
          o,
          n,
          s,
          l
        );
    }
    return t.child;
  }
  function og(e, t, n) {
    var l = t.pendingProps;
    return Ba(t, t.type, l.value), mt(e, t, l.children, n), t.child;
  }
  function ba(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Xa |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (bl(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = pa(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = pa(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function nf(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Vo(e)));
  }
  function bS(e, t, n) {
    switch (t.tag) {
      case 3:
        ul(t, t.stateNode.containerInfo), Ba(t, ct, e.memoizedState.cache), yl();
        break;
      case 27:
      case 5:
        Yl(t);
        break;
      case 4:
        ul(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ba(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, wc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return $a(t), t.flags |= 128, null;
          l = bl(
            e,
            t,
            n,
            !1
          );
          var o = t.child.childLanes;
          return l || (n & o) !== 0 ? lg(e, t, n) : ($a(t), e = ba(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        $a(t);
        break;
      case 19:
        if (t.flags & 128)
          return tf(
            e,
            t,
            n
          );
        if (o = (e.flags & 128) !== 0, l = (n & t.childLanes) !== 0, l || (bl(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), o) {
          if (l)
            return tf(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Si(t, Ot.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Fm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Ba(t, ct, e.memoizedState.cache);
    }
    return ba(e, t, n);
  }
  function ug(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        dt = !0;
      else {
        if (!nf(e, n) && (t.flags & 128) === 0)
          return dt = !1, bS(
            e,
            t,
            n
          );
        dt = (e.flags & 131072) !== 0;
      }
    else
      dt = !1, Te && (t.flags & 1048576) !== 0 && kh(t, fi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Cl(t.elementType), t.type = e, typeof e == "function")
            sc(e) ? (l = wl(e, l), t.tag = 1, t = ng(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Ic(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === V) {
                t.tag = 11, t = Im(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (o === le) {
                t.tag = 14, t = Pm(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (o === W) {
                t.tag = 10, t.type = e, t = og(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = Re(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ic(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, o = wl(
          l,
          t.pendingProps
        ), ng(
          e,
          t,
          l,
          o,
          n
        );
      case 3:
        e: {
          if (ul(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          o = s.element, Ec(e, t), bi(t, l, null, n);
          var p = t.memoizedState;
          if (l = p.cache, Ba(t, ct, l), l !== s.cache && gc(
            t,
            [ct],
            n,
            !0
          ), vi(), l = p.element, s.isDehydrated)
            if (s = {
              element: l,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = ag(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== o) {
              o = yn(
                Error(u(424)),
                t
              ), di(o), t = ag(
                e,
                t,
                l,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Pe = En(e.firstChild), bt = t, Te = !0, Na = null, Sn = !0, n = Fh(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (yl(), l === o) {
              t = ba(
                e,
                t,
                n
              );
              break e;
            }
            mt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return fr(e, t), e === null ? (n = Dy(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Te || (t.stateNode = dy(
          t.type,
          t.pendingProps,
          pn.current,
          t
        )) : t.memoizedState = Dy(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Yl(t), e === null && Te && (l = t.stateNode = zy(
          t.type,
          t.pendingProps,
          pn.current
        ), bt = t, Sn = !0, o = Pe, Ia(t.type) ? (Wf = o, Pe = En(l.firstChild)) : Pe = o), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), fr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((o = l = Pe) && (l = px(
          l,
          t.type,
          t.pendingProps,
          Sn
        ), l !== null ? (t.stateNode = l, bt = t, Pe = En(l.firstChild), Sn = !1, o = !0) : o = !1), o || Da(t)), Yl(t), o = t.type, s = t.pendingProps, p = e !== null ? e.memoizedProps : null, l = s.children, Gf(o, s) ? l = null : p !== null && Gf(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = Mc(
          e,
          t,
          uS,
          null,
          null,
          n
        ), zr._currentValue = o), fr(e, t), mt(e, t, l, n), t.child;
      case 6:
        return e === null && Te && ((e = n = Pe) && (n = hx(
          n,
          t.pendingProps,
          Sn
        ), n !== null ? (t.stateNode = n, bt = t, Pe = null, e = !0) : e = !1), e || Da(t)), null;
      case 13:
        return lg(e, t, n);
      case 4:
        return ul(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Rl(
          t,
          null,
          l,
          n
        ) : mt(e, t, l, n), t.child;
      case 11:
        return Im(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return l = t.pendingProps, fr(e, t), mt(e, t, l, n), t.child;
      case 8:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return og(e, t, n);
      case 9:
        return o = t.type._context, l = t.pendingProps.children, Sl(t), o = Tt(o), l = l(o), t.flags |= 1, mt(e, t, l, n), t.child;
      case 14:
        return Pm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Jm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return tf(e, t, n);
      case 31:
        return yS(e, t, n);
      case 22:
        return Fm(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Sl(t), l = Tt(ct), e === null ? (o = bc(), o === null && (o = Xe, s = yc(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= n), o = s), t.memoizedState = { parent: l, cache: o }, xc(t), Ba(t, ct, o)) : ((e.lanes & n) !== 0 && (Ec(e, t), bi(t, null, null, n), vi()), o = e.memoizedState, s = t.memoizedState, o.parent !== l ? (o = { parent: l, cache: l }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Ba(t, ct, l)) : (l = s.cache, Ba(t, ct, l), l !== o.cache && gc(
          t,
          [ct],
          n,
          !0
        ))), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = t.pendingProps, l.name != null && l.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Te && $o(t), e !== null && e.memoizedProps.name !== l.name ? t.flags |= 4194816 : fr(e, t), mt(e, t, l.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function Sa(e) {
    e.flags |= 4;
  }
  function af(e, t, n, l, o) {
    var s;
    if ((s = (e.mode & 32) !== 0) && (s = n === null ? Ly(t, l) : Ly(t, l) && (l.src !== n.src || l.srcSet !== n.srcSet)), s) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Vg()) e.flags |= 8192;
        else
          throw Tl = Ko, Sc;
    } else e.flags &= -16777217;
  }
  function sg(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Hy(t))
      if (Vg()) e.flags |= 8192;
      else
        throw Tl = Ko, Sc;
  }
  function du(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Lp() : 536870912, e.lanes |= t, gr |= t);
  }
  function Ri(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = e.tail, l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (t = e.tail, n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, l |= o.subtreeFlags & 1206910976, l |= o.flags & 1206910976, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, l |= o.subtreeFlags, l |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function SS(e, t, n) {
    var l = t.pendingProps;
    switch (dc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(t), null;
      case 1:
        return Je(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ga(ct), ia(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (lr(t) ? Sa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hc())), Je(t), null;
      case 26:
        var o = t.type, s = t.memoizedState;
        return e === null ? (Sa(t), s !== null ? (Je(t), sg(t, s)) : (Je(t), af(
          t,
          o,
          null,
          l,
          n
        ))) : s ? s !== e.memoizedState ? (Sa(t), Je(t), sg(t, s)) : (Je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Sa(t), Je(t), af(
          t,
          o,
          e,
          l,
          n
        )), null;
      case 27:
        if (sl(t), n = pn.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Je(t), t.subtreeFlags &= -33554433, null;
          }
          e = gt.current, lr(t) ? Yh(t) : (e = zy(o, l, n), t.stateNode = e, Sa(t));
        }
        return Je(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (sl(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Je(t), t.subtreeFlags &= -33554433, null;
          }
          if (s = gt.current, lr(t))
            Yh(t);
          else {
            var p = ji(
              pn.current
            );
            switch (s) {
              case 1:
                s = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                s = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    s = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    s = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    s = p.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof l.is == "string" ? p.createElement("select", {
                      is: l.is
                    }) : p.createElement("select"), l.multiple ? s.multiple = !0 : l.size && (s.size = l.size);
                    break;
                  default:
                    s = typeof l.is == "string" ? p.createElement(o, { is: l.is }) : p.createElement(o);
                }
            }
            s[Ct] = t, s[Yt] = l;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6)
                s.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t)
                  break e;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            t.stateNode = s;
            e: switch (At(s, o, l), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Sa(t);
          }
        }
        return Je(t), t.subtreeFlags &= -33554433, af(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Sa(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = pn.current, lr(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, o = bt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            e[Ct] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || uy(e.nodeValue, n)), e || Da(t, !0);
          } else
            e = ji(e).createTextNode(
              l
            ), e[Ct] = t, t.stateNode = e;
        }
        return Je(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = lr(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[Ct] = t;
            } else
              yl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), e = !1;
          } else
            n = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (tn(t), t) : (tn(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return Je(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = lr(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[Ct] = t;
            } else
              yl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), o = !1;
          } else
            o = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (tn(t), t) : (tn(t), null);
        }
        return tn(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, o = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool), s = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== o && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), du(t, t.updateQueue), Je(t), null);
      case 4:
        return ia(), e === null && kf(t.stateNode.containerInfo), t.flags |= 67108864, Je(t), null;
      case 10:
        return ga(t.type), Je(t), null;
      case 19:
        if (Ac(t), l = t.memoizedState, l === null) return Je(t), null;
        if (o = (t.flags & 128) !== 0, s = l.rendering, s === null)
          if (o) Ri(l, !1);
          else {
            if (rt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = Jo(e), s !== null) {
                  for (t.flags |= 128, Ri(l, !1), e = s.updateQueue, t.updateQueue = e, du(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    jh(n, e), n = n.sibling;
                  return Si(
                    t,
                    Ot.current & 1 | 2
                  ), Te && ha(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Pt() > Tu && (t.flags |= 128, o = !0, Ri(l, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Jo(s), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, du(t, e), Ri(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !s.alternate && !Te)
                return Je(t), null;
            } else
              2 * Pt() - l.renderingStartTime > Tu && n !== 536870912 && (t.flags |= 128, o = !0, Ri(l, !1), t.lanes = 4194304);
          l.isBackwards ? (s.sibling = t.child, t.child = s) : (e = l.last, e !== null ? e.sibling = s : t.child = s, l.last = s);
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (n = e; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break e;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Pt(), e.sibling = null, s = Ot.current, s = o ? s & 1 | 2 : s & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !n || Te ? Si(t, s) : (n = s, be(Rt, t), be(Ot, n), _t === null && (_t = t)), Te && ha(t, l.treeForkCount), e;
        }
        return Je(t), null;
      case 22:
      case 23:
        return tn(t), Oc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), n = t.updateQueue, n !== null && du(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && Ie(El), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ga(ct), Je(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Je(t), null;
    }
    throw Error(u(156, t.tag));
  }
  function xS(e, t) {
    switch (dc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ga(ct), ia(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return sl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (tn(t), t.alternate === null)
            throw Error(u(340));
          yl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (tn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          yl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ac(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ia(), null;
      case 10:
        return ga(t.type), null;
      case 22:
      case 23:
        return tn(t), Oc(), e !== null && Ie(El), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ga(ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cg(e, t) {
    switch (dc(t), t.tag) {
      case 3:
        ga(ct), ia();
        break;
      case 26:
      case 27:
      case 5:
        sl(t);
        break;
      case 4:
        ia();
        break;
      case 31:
        t.memoizedState !== null && tn(t);
        break;
      case 13:
        tn(t);
        break;
      case 19:
        Ac(t);
        break;
      case 10:
        ga(t.type);
        break;
      case 22:
      case 23:
        tn(t), Oc(), e !== null && Ie(El);
        break;
      case 24:
        ga(ct);
    }
  }
  function Oi(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var s = n.create, p = n.inst;
            l = s(), p.destroy = l;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (v) {
      Ye(t, t.return, v);
    }
  }
  function qa(e, t, n) {
    try {
      var l = t.updateQueue, o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var p = l.inst, v = p.destroy;
            if (v !== void 0) {
              p.destroy = void 0, o = t;
              var O = n, B = v;
              try {
                B();
              } catch (Y) {
                Ye(
                  o,
                  O,
                  Y
                );
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (Y) {
      Ye(t, t.return, Y);
    }
  }
  function fg(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        em(t, n);
      } catch (l) {
        Ye(e, e.return, l);
      }
    }
  }
  function dg(e, t, n) {
    n.props = wl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ye(e, t, l);
    }
  }
  function Yn(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var o = e.stateNode, s = fa(e.memoizedProps, o);
            (o.ref === null || o.ref.name !== s) && (o.ref = by(s)), l = o.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var p = new on(e);
              g(
                e.child,
                !1,
                fx,
                p,
                void 0,
                void 0
              ), e.stateNode = p;
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (v) {
      Ye(e, t, v);
    }
  }
  function wt(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          Ye(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Ye(e, t, o);
        }
      else n.current = null;
  }
  function pu(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        Ry(
          e.stateNode,
          t[n]
        );
  }
  function pg(e) {
    for (var t = e.return; t !== null && (rf(t) && Ry(e.stateNode, t.stateNode), !lf(t)); )
      t = t.return;
  }
  function wi(e) {
    for (var t = e.return; t !== null && (rf(t) && dx(e.stateNode, t.stateNode), !lf(t)); )
      t = t.return;
  }
  function lf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function rf(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function of(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (o) {
      Ye(e, e.return, o);
    }
  }
  function uf(e, t, n) {
    try {
      var l = e.stateNode;
      KS(l, e.type, n, t), l[Yt] = t;
    } catch (o) {
      Ye(e, e.return, o);
    }
  }
  function hg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ia(e.type) || e.tag === 4;
  }
  function sf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || hg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ia(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cf(e, t, n, l) {
    var o = e.tag;
    if (o === 5 || o === 6)
      o = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(o, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(o), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hn)), pu(e, l), Ne = !0;
    else if (o !== 4 && (o === 27 && (pu(e, l), l = null, Ia(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (cf(
        e,
        t,
        n,
        l
      ), e = e.sibling; e !== null; )
        cf(
          e,
          t,
          n,
          l
        ), e = e.sibling;
  }
  function hu(e, t, n, l) {
    var o = e.tag;
    if (o === 5 || o === 6)
      o = e.stateNode, t ? n.insertBefore(o, t) : n.appendChild(o), pu(e, l), Ne = !0;
    else if (o !== 4 && (o === 27 && (pu(e, l), l = null, Ia(e.type) && (n = e.stateNode)), e = e.child, e !== null))
      for (hu(
        e,
        t,
        n,
        l
      ), e = e.sibling; e !== null; )
        hu(
          e,
          t,
          n,
          l
        ), e = e.sibling;
  }
  function mg(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      At(t, l, n), t[Ct] = e, t[Yt] = n;
    } catch (s) {
      Ye(e, e.return, s);
    }
  }
  var mu = !1, nn = null;
  function gg(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (mu = !0);
  }
  var qn = null;
  function yg() {
    var e = qn;
    return qn = null, e;
  }
  var Vt = 0;
  function dr(e, t, n, l, o) {
    return Vt = 0, vg(
      e.child,
      t,
      n,
      l,
      o
    );
  }
  function vg(e, t, n, l, o) {
    for (var s = !1; e !== null; ) {
      if (e.tag === 5) {
        var p = e.stateNode;
        if (l !== null) {
          var v = Kf(p);
          l.push(v), v.view && (s = !0);
        } else
          s || Kf(p).view && (s = !0);
        mu = !0, yy(
          p,
          Vt === 0 ? t : t + "_" + Vt,
          n
        ), Vt++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && o || vg(
        e.child,
        t,
        n,
        l,
        o
      ) && (s = !0));
      e = e.sibling;
    }
    return s;
  }
  function Vn(e, t) {
    for (; e !== null; )
      e.tag === 5 ? vy(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Vn(
        e.child,
        t
      )), e = e.sibling;
  }
  function gu(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (gu(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(u(544));
          var n = t.name;
          t = da(t.default, t.share), t !== "none" && (dr(
            e,
            n,
            t,
            null,
            !1
          ) || Vn(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function ff(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, l = e.memoizedProps, o = fa(l, n), s = da(
        l.default,
        n.paired ? l.share : l.enter
      );
      s !== "none" ? dr(e, o, s, null, !1) ? (gu(e), n.paired || t || Sr(e, l.onEnter)) : Vn(e.child, !1) : gu(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ff(e, t), e = e.sibling;
    else gu(e);
  }
  function df(e) {
    if (nn !== null && nn.size !== 0) {
      var t = nn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var n = e.memoizedProps, l = n.name;
              if (l != null && l !== "auto") {
                var o = t.get(l);
                if (o !== void 0) {
                  var s = da(
                    n.default,
                    n.share
                  );
                  if (s !== "none" && (dr(
                    e,
                    l,
                    s,
                    null,
                    !1
                  ) ? (s = e.stateNode, o.paired = s, s.paired = o, Sr(e, n.onShare)) : Vn(e.child, !1)), t.delete(l), t.size === 0) break;
                }
              }
            }
            df(e);
          }
          e = e.sibling;
        }
    }
  }
  function pf(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = fa(t, e.stateNode), l = nn !== null ? nn.get(n) : void 0, o = da(
        t.default,
        l !== void 0 ? t.share : t.exit
      );
      o !== "none" && (dr(e, n, o, null, !1) ? l !== void 0 ? (o = e.stateNode, l.paired = o, o.paired = l, nn.delete(n), Sr(e, t.onShare)) : Sr(e, t.onExit) : Vn(e.child, !1)), nn !== null && df(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        pf(e), e = e.sibling;
    else
      nn !== null && df(e);
  }
  function bg(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = fa(t, e.stateNode);
        t = da(t.default, t.update), e.flags &= -5, t !== "none" && dr(
          e,
          n,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && bg(e);
      e = e.sibling;
    }
  }
  function hf(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, Vn(e.child, !1));
          }
          hf(e);
        }
        e = e.sibling;
      }
  }
  function yu(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Vn(e.child, !1), hf(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        yu(e), e = e.sibling;
    else hf(e);
  }
  function Sg(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Vn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Sg(e), e = e.sibling;
  }
  function mf(e, t, n, l, o, s, p) {
    for (var v = !1; t !== null; ) {
      if (t.tag === 5) {
        var O = t.stateNode;
        if (s !== null && Vt < s.length) {
          var B = s[Vt], Y = Kf(O);
          (B.view || Y.view) && (v = !0);
          var Z;
          if (Z = (e.flags & 4) === 0)
            if (Y.clip) Z = !0;
            else {
              Z = B.rect;
              var _ = Y.rect;
              Z = Z.y !== _.y || Z.x !== _.x || Z.height !== _.height || Z.width !== _.width;
            }
          Z && (e.flags |= 4), Y.abs ? Y = !B.abs : (B = B.rect, Y = Y.rect, Y = B.height !== Y.height || B.width !== Y.width), Y && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && yy(
          O,
          Vt === 0 ? n : n + "_" + Vt,
          o
        ), v && (e.flags & 4) !== 0 || (qn === null && (qn = []), qn.push(
          O,
          Vt === 0 ? l : l + "_" + Vt,
          t.memoizedProps
        )), Vt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && p ? e.flags |= t.flags & 32 : mf(
        e,
        t.child,
        n,
        l,
        o,
        s,
        p
      ) && (v = !0));
      t = t.sibling;
    }
    return v;
  }
  function xg(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, l = e.stateNode, o = fa(n, l), s = da(n.default, n.update), p;
        p = e.memoizedState, e.memoizedState = null, l = e;
        var v = e.child;
        Vt = 0, o = mf(
          l,
          v,
          o,
          o,
          s,
          p,
          !1
        ), (e.flags & 4) !== 0 && o && Sr(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && xg(e);
      e = e.sibling;
    }
  }
  var St = !1, He = !1, Gn = !1, gf = !1, Eg = typeof WeakSet == "function" ? WeakSet : Set, xt = null, Xn = !1, Ai = !1, vu = !1, yf = !1;
  function ES(e, t, n) {
    if (e = e.containerInfo, qf = Mr, e = Oh(e), nc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var s = o.anchorOffset, p = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, p.nodeType;
            } catch {
              l = null;
              break e;
            }
            var v = 0, O = -1, B = -1, Y = 0, Z = 0, _ = e, H = null;
            t: for (; ; ) {
              for (var ae; _ !== l || s !== 0 && _.nodeType !== 3 || (O = v + s), _ !== p || o !== 0 && _.nodeType !== 3 || (B = v + o), _.nodeType === 3 && (v += _.nodeValue.length), (ae = _.firstChild) !== null; )
                H = _, _ = ae;
              for (; ; ) {
                if (_ === e) break t;
                if (H === l && ++Y === s && (O = v), H === p && ++Z === o && (B = v), (ae = _.nextSibling) !== null) break;
                _ = H, H = _.parentNode;
              }
              _ = ae;
            }
            l = O === -1 || B === -1 ? null : { start: O, end: B };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Vf = { focusedElem: e, selectionRange: l }, Mr = !1, n = (n & 335544064) === n, xt = t, t = n ? 9270 : 1024; xt !== null; ) {
      if (e = xt, n && (l = e.deletions, l !== null))
        for (s = 0; s < l.length; s++)
          n && pf(l[s]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && gg(e), bu(n);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && n && pf(l), bu(n);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            n && gg(e), bu(n);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & t) !== 0 && l !== null ? (l.return = e, xt = l) : (n && bg(e), bu(n));
      }
    }
    nn = null;
  }
  function bu(e) {
    for (; xt !== null; ) {
      var t = xt, n = e, l = t.alternate, o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((o & 1024) !== 0 && l !== null) {
            n = void 0, o = l.memoizedProps, l = l.memoizedState;
            var s = t.stateNode;
            try {
              var p = wl(
                t.type,
                o
              );
              n = s.getSnapshotBeforeUpdate(
                p,
                l
              ), s.__reactInternalSnapshotBeforeUpdate = n;
            } catch (v) {
              Ye(t, t.return, v);
            }
          }
          break;
        case 3:
          if ((o & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, n = l.nodeType, n === 9)
              Pf(l);
            else if (n === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Pf(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && l !== null && (n = fa(
            l.memoizedProps,
            l.stateNode
          ), o = t.memoizedProps, o = da(o.default, o.update), o !== "none" && dr(
            l,
            n,
            o,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((o & 1024) !== 0) throw Error(u(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, xt = l;
        break;
      }
      xt = t.return;
    }
  }
  function Cg(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Qn(e, n), l & 4 && Oi(5, n);
        break;
      case 1:
        if (Qn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Ye(n, n.return, p);
            }
          else {
            var o = wl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              Ye(
                n,
                n.return,
                p
              );
            }
          }
        l & 64 && fg(n), l & 512 && Yn(n, n.return);
        break;
      case 3:
        if (Qn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            em(e, t);
          } catch (p) {
            Ye(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && l & 4 && mg(n);
      case 26:
      case 5:
        Qn(e, n), t === null && l & 4 && of(n), l & 512 && Yn(n, n.return);
        break;
      case 12:
        Qn(e, n);
        break;
      case 31:
        Qn(e, n), l & 4 && wg(e, n);
        break;
      case 13:
        Qn(e, n), l & 4 && Ag(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = BS.bind(
          null,
          n
        ), mx(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || St, !l) {
          var s = t !== null && t.memoizedState !== null || He;
          t = St, o = He, St = l, (He = s) && !o ? (l = 2, (n.subtreeFlags & 8772) !== 0 && (l |= 1), Nn(
            e,
            n,
            l
          )) : Qn(e, n), St = t, He = o;
        }
        break;
      case 30:
        Qn(e, n), l & 512 && Yn(n, n.return);
        break;
      case 7:
        l & 512 && Yn(n, n.return);
      default:
        Qn(e, n);
    }
  }
  function vf(e, t) {
    for (e = e.child; e !== null; )
      Tg(e, t), e = e.sibling;
  }
  function Tg(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode;
          if (t) {
            var l = n.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var o = e.stateNode, s = e.memoizedProps.style, p = s != null && s.hasOwnProperty("display") ? s.display : null;
            o.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
          }
        } catch (O) {
          Ye(e, e.return, O);
        }
        bf(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ne = !0;
        } catch (O) {
          Ye(e, e.return, O);
        }
        break;
      case 18:
        try {
          var v = e.stateNode;
          t ? gy(v, !0) : gy(e.stateNode, !1);
        } catch (O) {
          Ye(e, e.return, O);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && vf(e, t);
        break;
      default:
        vf(e, t);
    }
  }
  function bf(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, l = t;
          switch (n.tag) {
            case 4:
              Tg(n, l);
              break e;
            case 22:
              n.memoizedState === null && bf(n, l);
              break e;
            default:
              bf(n, l);
          }
        }
        e = e.sibling;
      }
  }
  function Rg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Rg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && To(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Fe = null, Gt = !1;
  function Mn(e, t, n) {
    for (n = n.child; n !== null; )
      Og(e, t, n), n = n.sibling;
  }
  function Og(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(Jr, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        He || wt(n, t), Mn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !He && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        He || wt(n, t), wi(n);
        var l = Fe, o = Gt;
        Ia(n.type) && (Fe = n.stateNode, Gt = !1), Mn(
          e,
          t,
          n
        ), My(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Fe = l, Gt = o;
        break;
      case 5:
        He || wt(n, t), wi(n);
      case 6:
        if (n.tag === 6 && wi(n), l = Fe, o = Gt, Fe = null, Mn(
          e,
          t,
          n
        ), Fe = l, Gt = o, Fe !== null)
          if (Gt)
            try {
              (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(n.stateNode), Ne = !0;
            } catch (s) {
              Ye(
                n,
                t,
                s
              );
            }
          else
            try {
              Fe.removeChild(n.stateNode), Ne = !0;
            } catch (s) {
              Ye(
                n,
                t,
                s
              );
            }
        break;
      case 18:
        Fe !== null && (Gt ? (e = Fe, my(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), _r(e)) : my(Fe, n.stateNode));
        break;
      case 4:
        l = Fe, o = Gt, Fe = n.stateNode.containerInfo, Gt = !0, Mn(
          e,
          t,
          n
        ), Fe = l, Gt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qa(2, n, t), He || qa(4, n, t), Mn(
          e,
          t,
          n
        );
        break;
      case 1:
        He || (wt(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && dg(
          n,
          t,
          l
        )), Mn(
          e,
          t,
          n
        );
        break;
      case 21:
        Mn(
          e,
          t,
          n
        );
        break;
      case 22:
        He = (l = He) || n.memoizedState !== null, Mn(
          e,
          t,
          n
        ), He = l;
        break;
      case 30:
        wt(n, t), Mn(
          e,
          t,
          n
        );
        break;
      case 7:
        He || wt(n, t), Mn(
          e,
          t,
          n
        );
        break;
      default:
        Mn(
          e,
          t,
          n
        );
    }
  }
  function wg(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        _r(e);
      } catch (n) {
        Ye(t, t.return, n);
      }
    }
  }
  function Ag(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        _r(e);
      } catch (n) {
        Ye(t, t.return, n);
      }
  }
  function CS(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Eg()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Eg()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Su(e, t) {
    var n = CS(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var o = US.bind(null, e, l);
        l.then(o, o);
      }
    });
  }
  function jt(e, t, n) {
    var l = t.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var s = l[o], p = e, v = t, O = v;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Ia(O.type)) {
                Fe = O.stateNode, Gt = !1;
                break e;
              }
              break;
            case 5:
              Fe = O.stateNode, Gt = !1;
              break e;
            case 3:
            case 4:
              Fe = O.stateNode.containerInfo, Gt = !0;
              break e;
          }
          O = O.return;
        }
        if (Fe === null) throw Error(u(160));
        Og(p, v, s), Fe = null, Gt = !1, p = s.alternate, p !== null && (p.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        zg(t, e, n), t = t.sibling;
  }
  var _n = null;
  function zg(e, t, n) {
    var l = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (o & 4 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var s = 0; s < l.length; s++) {
            var p = l[s];
            p.ref.impl = p.nextImpl;
          }
        jt(t, e, n), Lt(e), o & 4 && (qa(3, e, e.return), Oi(3, e), qa(5, e, e.return));
        break;
      case 1:
        jt(t, e, n), Lt(e), o & 512 && (He || l === null || wt(l, l.return)), o & 64 && St && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (s = _n, jt(t, e, n), Lt(e), o & 512 && (He || l === null || wt(l, l.return)), o & 4)
          if (o = l !== null ? l.memoizedState : null, n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null)
                if (St)
                  e.stateNode = dy(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, n = e.memoizedProps, o = s.ownerDocument || s;
                    t: switch (t) {
                      case "title":
                        l = o.getElementsByTagName("title")[0], (!l || l[ei] || l[Ct] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = o.createElement(t), o.head.insertBefore(
                          l,
                          o.querySelector("head > title")
                        )), At(l, t, n), l[Ct] = e, vt(l), t = l;
                        break e;
                      case "link":
                        if (s = jy(
                          "link",
                          "href",
                          o
                        ).get(t + (n.href || ""))) {
                          for (p = 0; p < s.length; p++)
                            if (l = s[p], l.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              s.splice(p, 1);
                              break t;
                            }
                        }
                        l = o.createElement(t), At(l, t, n), o.head.appendChild(l);
                        break;
                      case "meta":
                        if (s = jy(
                          "meta",
                          "content",
                          o
                        ).get(t + (n.content || ""))) {
                          for (p = 0; p < s.length; p++)
                            if (l = s[p], l.getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              s.splice(p, 1);
                              break t;
                            }
                        }
                        l = o.createElement(t), At(l, t, n), o.head.appendChild(l);
                        break;
                      default:
                        throw Error(u(468, t));
                    }
                    l[Ct] = e, vt(l), t = l;
                  }
                  e.stateNode = t;
                }
              else
                St || ad(s, e.type, e.stateNode);
            else
              e.stateNode = Uy(
                s,
                n,
                e.memoizedProps
              );
          else
            o !== n ? (o === null ? (t = l.stateNode, t === null || He || t.parentNode.removeChild(t)) : o.count--, n === null ? St || ad(s, e.type, e.stateNode) : Uy(s, n, e.memoizedProps)) : n === null && e.stateNode !== null && uf(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        jt(t, e, n), Lt(e), o & 512 && (He || l === null || wt(l, l.return)), l !== null && o & 4 && uf(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (s = Gn, Gn = !1, jt(t, e, n), Gn = s, Lt(e), o & 512 && (He || l === null || wt(l, l.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            Zl(t, ""), Ne = !0;
          } catch (Y) {
            Ye(e, e.return, Y);
          }
        }
        o & 4 && e.stateNode != null && (t = e.memoizedProps, uf(
          e,
          t,
          l !== null ? l.memoizedProps : t
        )), o & 1024 && (gf = !0);
        break;
      case 6:
        if (jt(t, e, n), Lt(e), o & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, Ne = !0;
          } catch (Y) {
            Ye(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (Ne = !1, Uu = null, s = _n, _n = Li(t.containerInfo), jt(t, e, n), _n = s, Lt(e), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            _r(t.containerInfo);
          } catch (Y) {
            Ye(e, e.return, Y);
          }
        gf && (gf = !1, Mg(e)), Ne = !1;
        break;
      case 4:
        o = Gn, Gn = St, l = Pp(), s = _n, _n = Li(
          e.stateNode.containerInfo
        ), jt(t, e, n), Lt(e), _n = s, Ne && Ai && (vu = !0), Ne = l, Gn = o;
        break;
      case 12:
        jt(t, e, n), Lt(e);
        break;
      case 31:
        jt(t, e, n), Lt(e), o & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Su(e, t)));
        break;
      case 13:
        jt(t, e, n), Lt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Cu = Pt()), o & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Su(e, t)));
        break;
      case 22:
        s = e.memoizedState !== null, p = l !== null && l.memoizedState !== null;
        var v = St, O = He, B = Gn;
        St = v || s, Gn = B || s, He = O || p, jt(t, e, n), He = O, Gn = B, St = v, Lt(e), o & 8192 && (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, !s || l === null || p || St || He || (t = p || He, n = St, l = He, St = s || St, He = t, Va(e, 2), St = n, He = l), !s && Gn || vf(e, s)), o & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Su(e, n))));
        break;
      case 19:
        jt(t, e, n), Lt(e), o & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Su(e, t)));
        break;
      case 30:
        o & 512 && (He || l === null || wt(l, l.return)), o = Pp(), s = Ai, p = (n & 335544064) === n, v = e.memoizedProps, Ai = p && da(
          v.default,
          v.update
        ) !== "none", jt(t, e, n), Lt(e), p && l !== null && Ne && (e.flags |= 4), Ai = s, Ne = o;
        break;
      case 21:
        break;
      case 7:
        o & 512 && (He || l === null || wt(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        jt(t, e, n), Lt(e);
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (hg(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var o = e.return; o !== null; ) {
          if (rf(o)) {
            var s = o.stateNode;
            l === null ? l = [s] : l.push(s);
          }
          if (lf(o)) break;
          o = o.return;
        }
        var p = l;
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var v = n.stateNode, O = sf(e);
            hu(
              e,
              O,
              v,
              p
            );
            break;
          case 5:
            var B = n.stateNode;
            n.flags & 32 && (Zl(B, ""), n.flags &= -33);
            var Y = sf(e);
            hu(
              e,
              Y,
              B,
              p
            );
            break;
          case 3:
          case 4:
            var Z = n.stateNode.containerInfo, _ = sf(e);
            cf(
              e,
              _,
              Z,
              p
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (H) {
        Ye(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Mg(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Mr = !0, t.reset(), Mr = !1), e = e.sibling;
      }
  }
  function pr(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        _g(t, e), t = t.sibling;
    else xg(t);
  }
  function _g(e, t) {
    var n = e.alternate;
    if (n === null) ff(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (yf = Xn = !1, yg(), pr(t, e), !Xn && !vu) {
            if (e = qn, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                n = e[l];
                var o = e[l + 1];
                vy(n, e[l + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + o + ")"
                  }
                );
              }
            e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), yf = !0;
          }
          qn = null;
          break;
        case 5:
          pr(t, e);
          break;
        case 4:
          l = Xn, Xn = !1, pr(t, e), Xn && (vu = !0), Xn = l;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? ff(e, !1) : pr(t, e));
          break;
        case 30:
          l = Xn, o = yg(), Xn = !1, pr(t, e), Xn && (e.flags |= 4);
          var s = e.memoizedProps, p = e.stateNode;
          t = fa(s, p), p = fa(n.memoizedProps, p);
          var v = da(s.default, s.update);
          v === "none" ? t = !1 : (s = n.memoizedState, n.memoizedState = null, n = e.child, Vt = 0, t = mf(
            e,
            n,
            t,
            p,
            v,
            s,
            !0
          ), Vt !== (s === null ? 0 : s.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (Sr(
            e,
            e.memoizedProps.onUpdate
          ), qn = o) : o !== null && (o.push.apply(o, qn), qn = o), Xn = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          pr(t, e);
      }
  }
  function Qn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Cg(e, t.alternate, t), t = t.sibling;
  }
  function Va(e, t) {
    for (e = e.child; e !== null; ) {
      var n = e, l = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qa(4, n, n.return), Va(
            n,
            l
          );
          break;
        case 1:
          wt(n, n.return);
          var o = n.stateNode;
          typeof o.componentWillUnmount == "function" && dg(
            n,
            n.return,
            o
          ), Va(
            n,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && My(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          wt(n, n.return), n.tag !== 5 && n.tag !== 27 || wi(n), Va(
            n,
            l
          );
          break;
        case 6:
          wi(n);
          break;
        case 26:
          wt(n, n.return), o = n.stateNode, n.memoizedState !== null || o === null || He || o.parentNode.removeChild(o), Va(
            n,
            l
          );
          break;
        case 22:
          n.memoizedState === null && Va(
            n,
            l
          );
          break;
        case 30:
          wt(n, n.return), Va(
            n,
            l
          );
          break;
        case 7:
          wt(n, n.return);
        default:
          Va(
            n,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Nn(e, t, n) {
    for (n = (t.subtreeFlags & 8772) !== 0 ? n : n & -2, t = t.child; t !== null; ) {
      var l = t.alternate, o = e, s = t, p = s.flags, v = (n & 1) !== 0;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Nn(
            o,
            s,
            n
          ), Oi(4, s);
          break;
        case 1:
          if (Nn(
            o,
            s,
            n
          ), l = s, o = l.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (Y) {
              Ye(l, l.return, Y);
            }
          if (l = s, o = l.updateQueue, o !== null) {
            var O = l.stateNode;
            try {
              var B = o.shared.hiddenCallbacks;
              if (B !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < B.length; o++)
                  Wh(B[o], O);
            } catch (Y) {
              Ye(l, l.return, Y);
            }
          }
          v && p & 64 && fg(s), Yn(s, s.return);
          break;
        case 27:
          (n & 2) !== 0 && mg(s);
        case 5:
          s.tag !== 5 && s.tag !== 27 || pg(s), Nn(
            o,
            s,
            n
          ), v && l === null && p & 4 && of(s), Yn(s, s.return);
          break;
        case 6:
          pg(s);
          break;
        case 26:
          O = s.stateNode, s.memoizedState !== null || O === null || St || ad(
            Li(O.ownerDocument),
            s.type,
            O
          ), Nn(
            o,
            s,
            n
          ), v && l === null && p & 4 && of(s), Yn(s, s.return);
          break;
        case 12:
          Nn(
            o,
            s,
            n
          );
          break;
        case 31:
          Nn(
            o,
            s,
            n
          ), v && p & 4 && wg(o, s);
          break;
        case 13:
          Nn(
            o,
            s,
            n
          ), v && p & 4 && Ag(o, s);
          break;
        case 22:
          s.memoizedState === null && Nn(
            o,
            s,
            n
          ), Yn(s, s.return);
          break;
        case 30:
          Nn(
            o,
            s,
            n
          ), Yn(s, s.return);
          break;
        case 7:
          Yn(s, s.return);
        default:
          Nn(
            o,
            s,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Sf(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && pi(n));
  }
  function xf(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pi(e));
  }
  function xn(e, t, n, l) {
    var o = (n & 335544064) === n;
    if (t.subtreeFlags & (o ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Ng(
          e,
          t,
          n,
          l
        ), t = t.sibling;
    else o && Sg(t);
  }
  function Ng(e, t, n, l) {
    var o = (n & 335544064) === n;
    o && t.alternate === null && t.return !== null && t.return.alternate !== null && yu(t);
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xn(
          e,
          t,
          n,
          l
        ), s & 2048 && Oi(9, t);
        break;
      case 1:
        xn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        xn(
          e,
          t,
          n,
          l
        ), o && yf && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), s & 2048 && (s = null, t.alternate !== null && (s = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== s && (t.refCount++, s != null && pi(s)));
        break;
      case 12:
        if (s & 2048) {
          xn(
            e,
            t,
            n,
            l
          ), s = t.stateNode;
          try {
            var p = t.memoizedProps, v = p.id, O = p.onPostCommit;
            typeof O == "function" && O(
              v,
              t.alternate === null ? "mount" : "update",
              s.passiveEffectDuration,
              -0
            );
          } catch (B) {
            Ye(t, t.return, B);
          }
        } else
          xn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        xn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        xn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        p = t.stateNode, v = t.alternate, t.memoizedState !== null ? (o && v !== null && v.memoizedState === null && yu(v), p._visibility & 2 ? xn(
          e,
          t,
          n,
          l
        ) : zi(
          e,
          t
        )) : (o && v !== null && v.memoizedState !== null && yu(t), p._visibility & 2 ? xn(
          e,
          t,
          n,
          l
        ) : (p._visibility |= 2, hr(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), s & 2048 && Sf(v, t);
        break;
      case 24:
        xn(
          e,
          t,
          n,
          l
        ), s & 2048 && xf(t.alternate, t);
        break;
      case 30:
        o && (s = t.alternate, s !== null && (Vn(s.child, !0), Vn(t.child, !0))), xn(
          e,
          t,
          n,
          l
        );
        break;
      default:
        xn(
          e,
          t,
          n,
          l
        );
    }
  }
  function hr(e, t, n, l, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, p = t, v = n, O = l, B = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          hr(
            s,
            p,
            v,
            O,
            o
          ), Oi(8, p);
          break;
        case 23:
          break;
        case 22:
          var Y = p.stateNode;
          p.memoizedState !== null ? Y._visibility & 2 ? hr(
            s,
            p,
            v,
            O,
            o
          ) : zi(
            s,
            p
          ) : (Y._visibility |= 2, hr(
            s,
            p,
            v,
            O,
            o
          )), o && B & 2048 && Sf(
            p.alternate,
            p
          );
          break;
        case 24:
          hr(
            s,
            p,
            v,
            O,
            o
          ), o && B & 2048 && xf(p.alternate, p);
          break;
        default:
          hr(
            s,
            p,
            v,
            O,
            o
          );
      }
      t = t.sibling;
    }
  }
  function zi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, o = l.flags;
        switch (l.tag) {
          case 22:
            zi(n, l), o & 2048 && Sf(
              l.alternate,
              l
            );
            break;
          case 24:
            zi(n, l), o & 2048 && xf(l.alternate, l);
            break;
          default:
            zi(n, l);
        }
        t = t.sibling;
      }
  }
  var Al = 8192;
  function zl(e, t, n) {
    if (e.subtreeFlags & Al)
      for (e = e.child; e !== null; )
        Dg(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Dg(e, t, n) {
    switch (e.tag) {
      case 26:
        zl(
          e,
          t,
          n
        ), e.flags & Al && (e.memoizedState !== null ? zx(
          n,
          _n,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && $y(n, e)));
        break;
      case 5:
        zl(
          e,
          t,
          n
        ), e.flags & Al && (e = e.stateNode, (t & 335544128) === t && $y(n, e));
        break;
      case 3:
      case 4:
        var l = _n;
        _n = Li(e.stateNode.containerInfo), zl(
          e,
          t,
          n
        ), _n = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Al, Al = 16777216, zl(
          e,
          t,
          n
        ), Al = l) : zl(
          e,
          t,
          n
        ));
        break;
      case 30:
        if ((e.flags & Al) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var o = e.stateNode;
          o.paired = null, nn === null && (nn = /* @__PURE__ */ new Map()), nn.set(l, o);
        }
        zl(
          e,
          t,
          n
        );
        break;
      default:
        zl(
          e,
          t,
          n
        );
    }
  }
  function Bg(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Mi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          xt = l, jg(
            l,
            e
          );
        }
      Bg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ug(e), e = e.sibling;
  }
  function Ug(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Mi(e), e.flags & 2048 && qa(9, e, e.return);
        break;
      case 3:
        Mi(e);
        break;
      case 12:
        Mi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, xu(e)) : Mi(e);
        break;
      default:
        Mi(e);
    }
  }
  function xu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          xt = l, jg(
            l,
            e
          );
        }
      Bg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          qa(8, t, t.return), xu(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, xu(t));
          break;
        default:
          xu(t);
      }
      e = e.sibling;
    }
  }
  function jg(e, t) {
    for (; xt !== null; ) {
      var n = xt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          qa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          pi(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, xt = l;
      else
        e: for (n = e; xt !== null; ) {
          l = xt;
          var o = l.sibling, s = l.return;
          if (Rg(l), l === n) {
            xt = null;
            break e;
          }
          if (o !== null) {
            o.return = s, xt = o;
            break e;
          }
          xt = s;
        }
    }
  }
  var TS = {
    getCacheForType: function(e) {
      var t = Tt(ct), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Tt(ct).controller.signal;
    }
  }, RS = typeof WeakMap == "function" ? WeakMap : Map, De = 0, Xe = null, we = null, ze = 0, $e = 0, an = null, Ga = !1, mr = !1, Ef = !1, xa = 0, rt = 0, Xa = 0, Ml = 0, Eu = 0, ln = 0, gr = 0, _i = null, Xt = null, Cf = !1, Cu = 0, Lg = 0, Tu = 1 / 0, Ru = null, Qa = null, nt = 0, Dn = null, _l = null, Kn = 0, Tf = 0, Rf = null, Hg = null, yr = null, vr = null, br = null, Ni = 0, Ou = null;
  function rn() {
    return (De & 2) !== 0 && ze !== 0 ? ze & -ze : re.T !== null ? Uf() : Yp();
  }
  function kg() {
    if (ln === 0)
      if ((ze & 536870912) === 0 || Te) {
        var e = So;
        So <<= 1, (So & 3932160) === 0 && (So = 262144), ln = e;
      } else ln = 536870912;
    return e = Rt.current, e !== null && (e.flags |= 32), ln;
  }
  function Sr(e, t) {
    if (t != null) {
      var n = e.stateNode, l = n.ref;
      l === null && (l = n.ref = by(
        fa(e.memoizedProps, n)
      )), vr === null && (vr = []), vr.push(t.bind(null, l));
    }
  }
  function Qt(e, t, n) {
    (e === Xe && ($e === 2 || $e === 9) || e.cancelPendingCommit !== null) && (xr(e, 0), Ka(
      e,
      ze,
      ln,
      !1
    )), Wr(e, n), ((De & 2) === 0 || e !== Xe) && (e === Xe && ((De & 2) === 0 && (Ml |= n), rt === 4 && Ka(
      e,
      ze,
      ln,
      !1
    )), Zn(e));
  }
  function $g(e, t, n) {
    if ((De & 6) !== 0) throw Error(u(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Fr(e, t), o = l ? AS(e, t) : wf(e, t, !0), s = l;
    do {
      if (o === 0) {
        mr && !l && Ka(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, s && !OS(n)) {
          o = wf(e, t, !1), s = !1;
          continue;
        }
        if (o === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var v = e;
              o = _i;
              var O = v.current.memoizedState.isDehydrated;
              if (O && (xr(v, p).flags |= 256), p = wf(
                v,
                p,
                !1
              ), p !== 2 && p !== 6) {
                if (Ef && !O) {
                  v.errorRecoveryDisabledLanes |= s, Ml |= s, o = 4;
                  break e;
                }
                s = Xt, Xt = o, s !== null && (Xt === null ? Xt = s : Xt.push.apply(
                  Xt,
                  s
                ));
              }
              o = p;
            }
            if (s = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          xr(e, 0), Ka(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, s = o, s) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              Ka(
                l,
                t,
                ln,
                !Ga
              );
              break e;
            case 2:
              Xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (o = Cu + 300 - Pt(), 10 < o)) {
            if (Ka(
              l,
              t,
              ln,
              !Ga
            ), Eo(l, 0, !0) !== 0) break e;
            Kn = t, l.timeoutHandle = Qf(
              Yg.bind(
                null,
                l,
                n,
                Xt,
                Ru,
                Cf,
                t,
                ln,
                Ml,
                gr,
                Ga,
                s,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break e;
          }
          Yg(
            l,
            n,
            Xt,
            Ru,
            Cf,
            t,
            ln,
            Ml,
            gr,
            Ga,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Zn(e);
  }
  function Yg(e, t, n, l, o, s, p, v, O, B, Y, Z, _, H) {
    e.timeoutHandle = -1;
    var ae = t.subtreeFlags, se = (s & 335544064) === s;
    if (Z = null, (se || ae & 8192 || (ae & 16785408) === 16785408) && (Z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Hn
    }, nn = null, Dg(
      t,
      s,
      Z
    ), se && (ae = Z, se = e.containerInfo, se = (se.nodeType === 9 ? se : se.ownerDocument).__reactViewTransition, se != null && (ae.count++, ae.waitingForViewTransition = !0, ae = $i.bind(ae), se.finished.then(ae, ae))), ae = (s & 62914560) === s ? Cu - Pt() : (s & 4194048) === s ? Lg - Pt() : 0, ae = Mx(
      Z,
      ae
    ), ae !== null)) {
      Kn = s, e.cancelPendingCommit = ae(
        Ig.bind(
          null,
          e,
          t,
          s,
          n,
          l,
          o,
          p,
          v,
          O,
          B,
          Y,
          Z,
          null,
          _,
          H
        )
      ), Ka(e, s, p, !B);
      return;
    }
    Ig(
      e,
      t,
      s,
      n,
      l,
      o,
      p,
      v,
      O,
      B,
      Y,
      Z
    );
  }
  function OS(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var o = n[l], s = o.getSnapshot;
          o = o.value;
          try {
            if (!en(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ka(e, t, n, l) {
    t = jp(e, t), t &= ~Eu, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var s = 31 - Ft(o), p = 1 << s;
      l[s] = -1, o &= ~p;
    }
    n !== 0 && Hp(e, n, t);
  }
  function wu() {
    return (De & 6) === 0 ? (Di(0), !1) : !0;
  }
  function Of() {
    if (we !== null) {
      if ($e === 0)
        var e = we.return;
      else
        e = we, ma = vl = null, Dc(e), or = null, gi = 0, e = we;
      for (; e !== null; )
        cg(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function xr(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, PS(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Kn = 0, Of(), Xe = e, we = n = pa(e.current, null), ze = t, $e = 0, an = null, Ga = !1, mr = Fr(e, t), Ef = !1, gr = ln = Eu = Ml = Xa = rt = 0, Xt = _i = null, Cf = !1, xa = jp(e, t), Uo(), n;
  }
  function qg(e, t) {
    Se = null, re.H = iu, t === ir || t === Qo ? (t = Ih(), $e = 3) : t === Sc ? (t = Ih(), $e = 4) : $e = t === Zc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, an = t, we === null && (rt = 1, ou(
      e,
      yn(t, e.current)
    ));
  }
  function Vg() {
    var e = Rt.current;
    return e === null ? !0 : (ze & 4194048) === ze ? _t === null : (ze & 62914560) === ze || (ze & 536870912) !== 0 ? e === _t : !1;
  }
  function Gg() {
    var e = re.H;
    return re.H = iu, e === null ? iu : e;
  }
  function Xg() {
    var e = re.A;
    return re.A = TS, e;
  }
  function Au() {
    rt = 4, Ga || (ze & 4194048) !== ze && Rt.current !== null || (mr = !0), (Xa & 134217727) === 0 && (Ml & 134217727) === 0 || Xe === null || Ka(
      Xe,
      ze,
      ln,
      !1
    );
  }
  function wf(e, t, n) {
    var l = De;
    De |= 2;
    var o = Gg(), s = Xg();
    (Xe !== e || ze !== t) && (Ru = null, xr(e, t)), t = !1;
    var p = rt;
    e: do
      try {
        if ($e !== 0 && we !== null) {
          var v = we, O = an;
          switch ($e) {
            case 8:
              Of(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var B = $e;
              if ($e = 0, an = null, Er(e, v, O, B), n && mr) {
                p = 0;
                break e;
              }
              break;
            default:
              B = $e, $e = 0, an = null, Er(e, v, O, B);
          }
        }
        wS(), p = rt;
        break;
      } catch (Y) {
        qg(e, Y);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ma = vl = null, De = l, re.H = o, re.A = s, we === null && (Xe = null, ze = 0, Uo()), p;
  }
  function wS() {
    for (; we !== null; ) Qg(we);
  }
  function AS(e, t) {
    var n = De;
    De |= 2;
    var l = Gg(), o = Xg();
    Xe !== e || ze !== t ? (Ru = null, Tu = Pt() + 500, xr(e, t)) : mr = Fr(
      e,
      t
    );
    e: do
      try {
        if ($e !== 0 && we !== null) {
          t = we;
          var s = an;
          t: switch ($e) {
            case 1:
              $e = 0, an = null, Er(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (Kh(s)) {
                $e = 0, an = null, Kg(t);
                break;
              }
              t = function() {
                $e !== 2 && $e !== 9 || Xe !== e || ($e = 7), Zn(e);
              }, s.then(t, t);
              break e;
            case 3:
              $e = 7;
              break e;
            case 4:
              $e = 5;
              break e;
            case 7:
              Kh(s) ? ($e = 0, an = null, Kg(t)) : ($e = 0, an = null, Er(e, t, s, 7));
              break;
            case 5:
              var p = null;
              switch (we.tag) {
                case 26:
                  p = we.memoizedState;
                case 5:
                case 27:
                  var v = we;
                  if (p ? Hy(p) : v.stateNode.complete) {
                    $e = 0, an = null;
                    var O = v.sibling;
                    if (O !== null) we = O;
                    else {
                      var B = v.return;
                      B !== null ? (we = B, zu(B)) : we = null;
                    }
                    break t;
                  }
              }
              $e = 0, an = null, Er(e, t, s, 5);
              break;
            case 6:
              $e = 0, an = null, Er(e, t, s, 6);
              break;
            case 8:
              Of(), rt = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        zS();
        break;
      } catch (Y) {
        qg(e, Y);
      }
    while (!0);
    return ma = vl = null, re.H = l, re.A = o, De = n, we !== null ? 0 : (Xe = null, ze = 0, Uo(), rt);
  }
  function zS() {
    for (; we !== null && !Qb(); )
      Qg(we);
  }
  function Qg(e) {
    var t = ug(e.alternate, e, xa);
    e.memoizedProps = e.pendingProps, t === null ? zu(e) : we = t;
  }
  function Kg(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = tg(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ze
        );
        break;
      case 11:
        t = tg(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ze
        );
        break;
      case 5:
        Dc(t);
        var l = t;
        l === bt && (Te ? (Yo(l), l.tag === 5 && l.stateNode != null && (Pe = l.stateNode)) : (Yo(l), Te = !0));
      default:
        cg(n, t), t = we = jh(t, xa), t = ug(n, t, xa);
    }
    e.memoizedProps = e.pendingProps, t === null ? zu(e) : we = t;
  }
  function Er(e, t, n, l) {
    ma = vl = null, Dc(t), or = null, gi = 0;
    var o = t.return;
    try {
      if (gS(
        e,
        o,
        t,
        n,
        ze
      )) {
        rt = 1, ou(
          e,
          yn(n, e.current)
        ), we = null;
        return;
      }
    } catch (s) {
      if (o !== null) throw we = o, s;
      rt = 1, ou(
        e,
        yn(n, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Te || l === 1 ? e = !0 : mr || (ze & 536870912) !== 0 ? e = !1 : (Ga = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Rt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Zg(t, e)) : zu(t);
  }
  function zu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Zg(
          t,
          Ga
        );
        return;
      }
      e = t.return;
      var n = SS(
        t.alternate,
        t,
        xa
      );
      if (n !== null) {
        we = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    rt === 0 && (rt = 5);
  }
  function Zg(e, t) {
    do {
      var n = xS(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        we = e;
        return;
      }
      we = e = n;
    } while (e !== null);
    rt = 6, we = null;
  }
  function Ig(e, t, n, l, o, s, p, v, O, B, Y, Z) {
    e.cancelPendingCommit = null;
    do
      Mu();
    while (nt !== 0);
    if ((De & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      e === Xe && (we = Xe = null, ze = 0), _l = t, Dn = e, Kn = n, Rf = o, Hg = l, MS(
        e,
        t,
        n,
        p,
        v,
        O,
        Z
      );
    }
  }
  function MS(e, t, n, l, o, s, p) {
    var v = t.lanes | t.childLanes;
    if (Tf = v, v |= oc, n1(
      e,
      n,
      v,
      l,
      o,
      s
    ), vr = null, (n & 335544064) === n ? (br = lS(e), l = 10262) : (br = null, l = 10256), (t.subtreeFlags & l) !== 0 || (t.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, jS(vo, function() {
      return _f(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), mu = !1, l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
      l = re.T, re.T = null, o = de.p, de.p = 2, s = De, De |= 4;
      try {
        ES(e, t, n);
      } finally {
        De = s, de.p = o, re.T = l;
      }
    }
    nt = 1, mu ? yr = nx(
      p,
      e.containerInfo,
      br,
      Af,
      zf,
      NS,
      Mf,
      _f,
      _S
    ) : (Af(), zf(), Mf());
  }
  function _S(e) {
    if (nt !== 0) {
      var t = Dn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function NS() {
    nt === 3 && (nt = 0, _g(_l, Dn), nt = 4);
  }
  function Af() {
    if (nt === 1) {
      nt = 0;
      var e = Dn, t = _l, n = Kn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = re.T, re.T = null;
        var o = de.p;
        de.p = 2;
        var s = De;
        De |= 4;
        try {
          Ai = vu = !1, zg(t, e, n), n = Vf;
          var p = Oh(e.containerInfo), v = n.focusedElem, O = n.selectionRange;
          if (p !== v && v && v.ownerDocument && Rh(
            v.ownerDocument.documentElement,
            v
          )) {
            if (O !== null && nc(v)) {
              var B = O.start, Y = O.end;
              if (Y === void 0 && (Y = B), "selectionStart" in v)
                v.selectionStart = B, v.selectionEnd = Math.min(
                  Y,
                  v.value.length
                );
              else {
                var Z = v.ownerDocument || document, _ = Z && Z.defaultView || window;
                if (_.getSelection) {
                  var H = _.getSelection(), ae = v.textContent.length, se = Math.min(O.start, ae), xe = O.end === void 0 ? se : Math.min(O.end, ae);
                  !H.extend && se > xe && (p = xe, xe = se, se = p);
                  var D = Th(
                    v,
                    se
                  ), M = Th(
                    v,
                    xe
                  );
                  if (D && M && (H.rangeCount !== 1 || H.anchorNode !== D.node || H.anchorOffset !== D.offset || H.focusNode !== M.node || H.focusOffset !== M.offset)) {
                    var j = Z.createRange();
                    j.setStart(D.node, D.offset), H.removeAllRanges(), se > xe ? (H.addRange(j), H.extend(M.node, M.offset)) : (j.setEnd(M.node, M.offset), H.addRange(j));
                  }
                }
              }
            }
            for (Z = [], H = v; H = H.parentNode; )
              H.nodeType === 1 && Z.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < Z.length; v++) {
              var K = Z[v];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Mr = !!qf, Vf = qf = null;
        } finally {
          De = s, de.p = o, re.T = l;
        }
      }
      e.current = t, nt = 2;
    }
  }
  function zf() {
    if (nt === 2) {
      nt = 0;
      var e = Dn, t = _l, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = re.T, re.T = null;
        var l = de.p;
        de.p = 2;
        var o = De;
        De |= 4;
        try {
          Cg(e, t.alternate, t);
        } finally {
          De = o, de.p = l, re.T = n;
        }
      }
      nt = 3;
    }
  }
  function Mf() {
    if (nt === 4 || nt === 3) {
      nt = 0;
      var e = yr;
      yr = null, Kb();
      var t = Dn, n = _l, l = Kn, o = Hg, s = (l & 335544064) === l ? 10262 : 10256;
      if ((n.subtreeFlags & s) !== 0 || (n.flags & s) !== 0 ? nt = 5 : (nt = 0, _l = Dn = null, Pg(t, t.pendingLanes)), s = t.pendingLanes, s === 0 && (Qa = null), Hs(l), n = n.stateNode, Jt && typeof Jt.onCommitFiberRoot == "function")
        try {
          Jt.onCommitFiberRoot(
            Jr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = re.T, s = de.p, de.p = 2, re.T = null;
        try {
          for (var p = t.onRecoverableError, v = 0; v < o.length; v++) {
            var O = o[v];
            p(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          re.T = n, de.p = s;
        }
      }
      if (o = vr, p = br, br = null, o !== null && (vr = null, p === null && (p = []), e !== null))
        for (O = 0; O < o.length; O++)
          n = (0, o[O])(
            p
          ), n !== void 0 && e.finished.finally(n);
      (Kn & 3) !== 0 && Mu(), Zn(t), s = t.pendingLanes, (l & 261930) !== 0 && (s & 42) !== 0 ? t === Ou ? Ni++ : (Ni = 0, Ou = t) : (Ni = 0, Ou = null), Di(0);
    }
  }
  function Pg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pi(t)));
  }
  function Mu() {
    return yr !== null && (yr.skipTransition(), yr = null), Af(), zf(), Mf(), _f();
  }
  function _f() {
    if (nt !== 5) return !1;
    var e = Dn, t = Tf;
    Tf = 0;
    var n = Hs(Kn), l = re.T, o = de.p;
    try {
      de.p = 32 > n ? 32 : n, re.T = null, n = Rf, Rf = null;
      var s = Dn, p = Kn;
      if (nt = 0, _l = Dn = null, Kn = 0, (De & 6) !== 0) throw Error(u(331));
      var v = De;
      if (De |= 4, Ug(s.current), Ng(
        s,
        s.current,
        p,
        n
      ), De = v, Di(0, !1), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        try {
          Jt.onPostCommitFiberRoot(Jr, s);
        } catch {
        }
      return !0;
    } finally {
      de.p = o, re.T = l, Pg(e, t);
    }
  }
  function Jg(e, t, n) {
    t = yn(n, t), t = Kc(e.stateNode, t, 2), e = Ha(e, t, 2), e !== null && (Wr(e, 2), Zn(e));
  }
  function Ye(e, t, n) {
    if (e.tag === 3)
      Jg(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jg(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qa === null || !Qa.has(l))) {
            e = yn(n, e), n = Km(2), l = Ha(t, n, 2), l !== null && (Zm(
              n,
              l,
              t,
              e
            ), Wr(l, 2), Zn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nf(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new RS();
      var o = /* @__PURE__ */ new Set();
      l.set(t, o);
    } else
      o = l.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), l.set(t, o));
    o.has(n) || (Ef = !0, o.add(n), e = DS.bind(null, e, t, n), t.then(e, e));
  }
  function DS(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (ze & n) === n && ((rt === 4 || rt === 3 && (ze & 62914560) === ze && 300 > Pt() - Cu) && (De & 2) === 0 ? xr(e, 0) : Eu |= n, gr === ze && (gr = 0)), Zn(e);
  }
  function Fg(e, t) {
    t === 0 && (t = Lp()), e = ml(e, t), e !== null && (Wr(e, t), Zn(e));
  }
  function BS(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Fg(e, n);
  }
  function US(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    l !== null && l.delete(t), Fg(e, n);
  }
  function jS(e, t) {
    return Bs(e, t);
  }
  var Cr = null, Tr = null, Df = !1, _u = !1, Bf = !1, Za = 0;
  function Zn(e) {
    e !== Tr && e.next === null && (Tr === null ? Cr = Tr = e : Tr = Tr.next = e), _u = !0, Df || (Df = !0, HS());
  }
  function Di(e, t) {
    if (!Bf && _u) {
      Bf = !0;
      do
        for (var n = !1, l = Cr; l !== null; ) {
          if (e !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var s = 0;
            else {
              var p = l.suspendedLanes, v = l.pingedLanes;
              s = (1 << 31 - Ft(42 | e) + 1) - 1, s &= o & ~(p & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, ny(l, s));
          } else
            s = ze, s = Eo(
              l,
              l === Xe ? s : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (s & 3) === 0 || Fr(l, s) || (n = !0, ny(l, s));
          l = l.next;
        }
      while (n);
      Bf = !1;
    }
  }
  function LS() {
    Wg();
  }
  function Wg() {
    _u = Df = !1;
    var e = 0;
    Za !== 0 && IS() && (e = Za);
    for (var t = Pt(), n = null, l = Cr; l !== null; ) {
      var o = l.next, s = ey(l, t);
      s === 0 ? (l.next = null, n === null ? Cr = o : n.next = o, o === null && (Tr = n)) : (n = l, (e !== 0 || (s & 3) !== 0) && (_u = !0)), l = o;
    }
    nt !== 0 && nt !== 5 || Di(e), Za !== 0 && (Za = 0);
  }
  function ey(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var p = 31 - Ft(s), v = 1 << p, O = o[p];
      O === -1 ? ((v & n) === 0 || (v & l) !== 0) && (o[p] = t1(v, t)) : O <= t && (e.expiredLanes |= v), s &= ~v;
    }
    if (t = Xe, n = ze, n = Eo(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && ($e === 2 || $e === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Us(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Fr(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Us(l), Hs(n)) {
        case 2:
        case 8:
          n = Bp;
          break;
        case 32:
          n = vo;
          break;
        case 268435456:
          n = Up;
          break;
        default:
          n = vo;
      }
      return l = ty.bind(null, e), n = Bs(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Us(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function ty(e, t) {
    if (nt !== 0 && nt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Mu() && e.callbackNode !== n)
      return null;
    var l = ze;
    return l = Eo(
      e,
      e === Xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : ($g(e, l, t), ey(e, Pt()), e.callbackNode != null && e.callbackNode === n ? ty.bind(null, e) : null);
  }
  function ny(e, t) {
    if (Mu()) return null;
    $g(e, t, !0);
  }
  function HS() {
    JS(function() {
      (De & 6) !== 0 ? Bs(
        Dp,
        LS
      ) : Wg();
    });
  }
  function Uf() {
    if (Za === 0) {
      var e = xl;
      e === 0 && (e = bo, bo <<= 1, (bo & 261888) === 0 && (bo = 256)), Za = e;
    }
    return Za;
  }
  function ay(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : wo(e);
  }
  function kS(e, t, n, l, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var s = ay(
        (o[Yt] || null).action
      ), p = l.submitter;
      p && (t = (t = p[Yt] || null) ? ay(t.formAction) : p.getAttribute("formAction"), t !== null && (s = t, p = null));
      var v = new _o(
        "action",
        "action",
        null,
        l,
        o
      );
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Za !== 0) {
                  var O = new FormData(o, p);
                  qc(
                    n,
                    {
                      pending: !0,
                      data: O,
                      method: o.method,
                      action: s
                    },
                    null,
                    O
                  );
                }
              } else
                typeof s == "function" && (v.preventDefault(), O = new FormData(o, p), qc(
                  n,
                  {
                    pending: !0,
                    data: O,
                    method: o.method,
                    action: s
                  },
                  s,
                  O
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var jf = 0; jf < ic.length; jf++) {
    var Lf = ic[jf], $S = Lf.toLowerCase(), YS = Lf[0].toUpperCase() + Lf.slice(1);
    zn(
      $S,
      "on" + YS
    );
  }
  zn(zh, "onAnimationEnd"), zn(Mh, "onAnimationIteration"), zn(_h, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(P1, "onTransitionRun"), zn(J1, "onTransitionStart"), zn(F1, "onTransitionCancel"), zn(Nh, "onTransitionEnd"), Ql("onMouseEnter", ["mouseout", "mouseover"]), Ql("onMouseLeave", ["mouseout", "mouseover"]), Ql("onPointerEnter", ["pointerout", "pointerover"]), Ql("onPointerLeave", ["pointerout", "pointerover"]), dl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), dl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), dl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), dl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bi)
  );
  function ly(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], o = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var p = l.length - 1; 0 <= p; p--) {
            var v = l[p], O = v.instance, B = v.currentTarget;
            if (v = v.listener, O !== s && o.isPropagationStopped())
              break e;
            s = v, o.currentTarget = B;
            try {
              s(o);
            } catch (Y) {
              Bo(Y);
            }
            o.currentTarget = null, s = O;
          }
        else
          for (p = 0; p < l.length; p++) {
            if (v = l[p], O = v.instance, B = v.currentTarget, v = v.listener, O !== s && o.isPropagationStopped())
              break e;
            s = v, o.currentTarget = B;
            try {
              s(o);
            } catch (Y) {
              Bo(Y);
            }
            o.currentTarget = null, s = O;
          }
      }
    }
  }
  function Ae(e, t) {
    var n = t[Vp];
    n === void 0 && (n = t[Vp] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (ry(t, e, 2, !1), n.add(l));
  }
  function Hf(e, t, n) {
    var l = 0;
    t && (l |= 4), ry(
      n,
      e,
      l,
      t
    );
  }
  var Nu = "_reactListening" + Math.random().toString(36).slice(2);
  function kf(e) {
    if (!e[Nu]) {
      e[Nu] = !0, Qp.forEach(function(n) {
        n !== "selectionchange" && (qS.has(n) || Hf(n, !1, e), Hf(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Nu] || (t[Nu] = !0, Hf("selectionchange", !1, t));
    }
  }
  function ry(e, t, n, l) {
    switch (Zy(t)) {
      case 2:
        var o = Bx;
        break;
      case 8:
        o = Ux;
        break;
      default:
        o = rd;
    }
    n = o.bind(
      null,
      t,
      n,
      e
    ), o = void 0, !Qs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), l ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
    }) : e.addEventListener(t, n, !1);
  }
  function $f(e, t, n, l, o) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var v = l.stateNode.containerInfo;
          if (v === o) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var O = p.tag;
              if ((O === 3 || O === 4) && p.stateNode.containerInfo === o)
                return;
              p = p.return;
            }
          for (; v !== null; ) {
            if (p = fl(v), p === null) return;
            if (O = p.tag, O === 5 || O === 6 || O === 26 || O === 27) {
              l = s = p;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    rh(function() {
      var B = s, Y = Gs(n), Z = [];
      e: {
        var _ = Dh.get(e);
        if (_ !== void 0) {
          var H = _o, ae = e;
          switch (e) {
            case "keypress":
              if (zo(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = O1;
              break;
            case "focusin":
              ae = "focus", H = Ps;
              break;
            case "focusout":
              ae = "blur", H = Ps;
              break;
            case "beforeblur":
            case "afterblur":
              H = Ps;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = uh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = h1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = _1;
              break;
            case zh:
            case Mh:
            case _h:
              H = y1;
              break;
            case Nh:
              H = D1;
              break;
            case "scroll":
            case "scrollend":
              H = d1;
              break;
            case "wheel":
              H = U1;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = b1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = ch;
              break;
            case "submit":
              H = z1;
              break;
            case "toggle":
            case "beforetoggle":
              H = L1;
          }
          var se = (t & 4) !== 0, xe = !se && (e === "scroll" || e === "scrollend"), D = se ? _ !== null ? _ + "Capture" : null : _;
          se = [];
          for (var M = B, j; M !== null; ) {
            var K = M;
            if (j = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || j === null || D === null || (K = ni(M, D), K != null && se.push(
              Ui(M, K, j)
            )), xe) break;
            M = M.return;
          }
          0 < se.length && (_ = new H(
            _,
            ae,
            null,
            n,
            Y
          ), Z.push({ event: _, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", H && n !== Vs && (ae = n.relatedTarget || n.fromElement) && (fl(ae) || ae[Vl]))
            break e;
          (_ || H) && (ae = Y.window === Y ? Y : (H = Y.ownerDocument) ? H.defaultView || H.parentWindow : window, _ ? (H = n.relatedTarget || n.toElement, _ = B, H = H ? fl(H) : null, H !== null && (xe = f(H), se = H.tag, H !== xe || se !== 5 && se !== 27 && se !== 6) && (H = null)) : (_ = null, H = B), _ !== H && (se = uh, K = "onMouseLeave", D = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (se = ch, K = "onPointerLeave", D = "onPointerEnter", M = "pointer"), xe = _ == null ? ae : ti(_), j = H == null ? ae : ti(H), ae = new se(
            K,
            M + "leave",
            _,
            n,
            Y
          ), ae.target = xe, ae.relatedTarget = j, K = null, fl(Y) === B && (se = new se(
            D,
            M + "enter",
            H,
            n,
            Y
          ), se.target = j, se.relatedTarget = xe, K = se), xe = K, se = _ && H ? G(
            _,
            H,
            VS
          ) : null, _ !== null && iy(
            Z,
            ae,
            _,
            se,
            !1
          ), H !== null && xe !== null && iy(
            Z,
            xe,
            H,
            se,
            !0
          )));
        }
        e: {
          if (_ = B ? ti(B) : window, H = _.nodeName && _.nodeName.toLowerCase(), H === "select" || H === "input" && _.type === "file")
            var oe = vh;
          else if (gh(_))
            if (bh)
              oe = K1;
            else {
              oe = X1;
              var Me = G1;
            }
          else
            H = _.nodeName, !H || H.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? B && qs(B.elementType) && (oe = vh) : oe = Q1;
          if (oe && (oe = oe(e, B))) {
            yh(
              Z,
              oe,
              n,
              Y
            );
            break e;
          }
          Me && Me(e, _, B);
        }
        switch (Me = B ? ti(B) : window, e) {
          case "focusin":
            (gh(Me) || Me.contentEditable === "true") && (Fl = Me, ac = B, ci = null);
            break;
          case "focusout":
            ci = ac = Fl = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, wh(Z, n, Y);
            break;
          case "selectionchange":
            if (I1) break;
          case "keydown":
          case "keyup":
            wh(Z, n, Y);
        }
        var fe;
        if (Fs)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Jl ? hh(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (fh && n.locale !== "ko" && (Jl || he !== "onCompositionStart" ? he === "onCompositionEnd" && Jl && (fe = ih()) : (za = Y, Ks = "value" in za ? za.value : za.textContent, Jl = !0)), Me = Du(B, he), 0 < Me.length && (he = new sh(
          he,
          e,
          null,
          n,
          Y
        ), Z.push({ event: he, listeners: Me }), fe ? he.data = fe : (fe = mh(n), fe !== null && (he.data = fe)))), (fe = k1 ? $1(e, n) : Y1(e, n)) && (he = Du(B, "onBeforeInput"), 0 < he.length && (Me = new sh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Y
        ), Z.push({
          event: Me,
          listeners: he
        }), Me.data = fe)), kS(
          Z,
          e,
          B,
          n,
          Y
        );
      }
      ly(Z, t);
    });
  }
  function Ui(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Du(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var o = e, s = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = ni(e, n), o != null && l.unshift(
        Ui(e, o, s)
      ), o = ni(e, t), o != null && l.push(
        Ui(e, o, s)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function VS(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function iy(e, t, n, l, o) {
    for (var s = t._reactName, p = []; n !== null && n !== l; ) {
      var v = n, O = v.alternate, B = v.stateNode;
      if (v = v.tag, O !== null && O === l) break;
      v !== 5 && v !== 26 && v !== 27 || B === null || (O = B, o ? (B = ni(n, s), B != null && p.unshift(
        Ui(n, B, O)
      )) : o || (B = ni(n, s), B != null && p.push(
        Ui(n, B, O)
      ))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var GS = /\r\n?/g, XS = /\u0000|\uFFFD/g;
  function oy(e) {
    return (typeof e == "string" ? e : "" + e).replace(GS, `
`).replace(XS, "");
  }
  function uy(e, t) {
    return t = oy(t), oy(e) === t;
  }
  function qe(e, t, n, l, o, s) {
    switch (n) {
      case "children":
        if (typeof l == "string")
          t === "body" || t === "textarea" && l === "" || Zl(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          t !== "body" && Zl(e, "" + l);
        else return;
        break;
      case "className":
        Oo(e, "class", l);
        break;
      case "tabIndex":
        Oo(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oo(e, n, l);
        break;
      case "style":
        ah(e, l, s);
        return;
      case "data":
        if (t !== "object") {
          Oo(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = wo(l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (n === "formAction" ? (t !== "input" && qe(e, t, "name", o.name, o, null), qe(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), qe(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), qe(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (qe(e, t, "encType", o.encType, o, null), qe(e, t, "method", o.method, o, null), qe(e, t, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = wo(l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Hn);
        return;
      case "onScroll":
        l != null && Ae("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(u(61));
          if (n = l.__html, n != null) {
            if (o.children != null) throw Error(u(60));
            (s != null ? s.__html : void 0) !== n && (e.innerHTML = n);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = wo(l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Ae("beforetoggle", e), Ae("toggle", e), Ro(e, "popover", l);
        break;
      case "xlinkActuate":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Ro(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = c1.get(n) || n, Ro(e, n, l);
        else return;
    }
    Ne = !0;
  }
  function Yf(e, t, n, l, o, s) {
    switch (n) {
      case "style":
        ah(e, l, s);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(u(61));
          if (n = l.__html, n != null) {
            if (o.children != null) throw Error(u(60));
            (s != null ? s.__html : void 0) !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof l == "string") Zl(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          Zl(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = Hn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Kp.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), s = n.slice(2, o ? n.length - 7 : void 0), t = e[Yt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(s, t, o), typeof l == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(s, l, o);
              break e;
            }
            Ne = !0, n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Ro(e, n, l);
          }
        return;
    }
    Ne = !0;
  }
  function At(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ae("error", e), Ae("load", e);
        var l = !1, o = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var p = n[s];
            if (p != null)
              switch (s) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  qe(e, t, s, p, n, null);
              }
          }
        o && qe(e, t, "srcSet", n.srcSet, n, null), l && qe(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ae("invalid", e);
        var v = s = p = o = null, O = null, B = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var Y = n[l];
            if (Y != null)
              switch (l) {
                case "name":
                  o = Y;
                  break;
                case "type":
                  p = Y;
                  break;
                case "checked":
                  O = Y;
                  break;
                case "defaultChecked":
                  B = Y;
                  break;
                case "value":
                  s = Y;
                  break;
                case "defaultValue":
                  v = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(u(137, t));
                  break;
                default:
                  qe(e, t, l, Y, n, null);
              }
          }
        Wp(
          e,
          s,
          v,
          O,
          B,
          p,
          o,
          !1
        );
        return;
      case "select":
        Ae("invalid", e), l = p = s = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (v = n[o], v != null))
            switch (o) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                p = v;
                break;
              case "multiple":
                l = v;
              default:
                qe(e, t, o, v, n, null);
            }
        t = s, n = p, e.multiple = !!l, t != null ? Kl(e, !!l, t, !1) : n != null && Kl(e, !!l, n, !0);
        return;
      case "textarea":
        Ae("invalid", e), s = o = l = null;
        for (p in n)
          if (n.hasOwnProperty(p) && (v = n[p], v != null))
            switch (p) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                s = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(u(91));
                break;
              default:
                qe(e, t, p, v, n, null);
            }
        th(e, l, o, s);
        return;
      case "option":
        for (O in n)
          if (n.hasOwnProperty(O) && (l = n[O], l != null))
            switch (O) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                qe(e, t, O, l, n, null);
            }
        return;
      case "dialog":
        Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Bi.length; l++)
          Ae(Bi[l], e);
        break;
      case "image":
        Ae("error", e), Ae("load", e);
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ae("error", e), Ae("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in n)
          if (n.hasOwnProperty(B) && (l = n[B], l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                qe(e, t, B, l, n, null);
            }
        return;
      default:
        if (qs(t)) {
          for (Y in n)
            n.hasOwnProperty(Y) && (l = n[Y], l !== void 0 && Yf(
              e,
              t,
              Y,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && (l = n[v], l != null && qe(e, t, v, l, n, null));
  }
  var QS = {};
  function KS(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, s = null, p = null, v = null, O = null, B = null, Y = null;
        for (H in n) {
          var Z = n[H];
          if (n.hasOwnProperty(H) && Z != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = Z;
              default:
                l.hasOwnProperty(H) || qe(e, t, H, null, l, Z);
            }
        }
        for (var _ in l) {
          var H = l[_];
          if (Z = n[_], l.hasOwnProperty(_) && (H != null || Z != null))
            switch (_) {
              case "type":
                H !== Z && (Ne = !0), s = H;
                break;
              case "name":
                H !== Z && (Ne = !0), o = H;
                break;
              case "checked":
                H !== Z && (Ne = !0), B = H;
                break;
              case "defaultChecked":
                H !== Z && (Ne = !0), Y = H;
                break;
              case "value":
                H !== Z && (Ne = !0), p = H;
                break;
              case "defaultValue":
                H !== Z && (Ne = !0), v = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(u(137, t));
                break;
              default:
                H !== Z && qe(
                  e,
                  t,
                  _,
                  H,
                  l,
                  Z
                );
            }
        }
        $s(
          e,
          p,
          v,
          O,
          B,
          Y,
          s,
          o
        );
        return;
      case "select":
        H = p = v = _ = null;
        for (s in n)
          if (O = n[s], n.hasOwnProperty(s) && O != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                H = O;
              default:
                l.hasOwnProperty(s) || qe(
                  e,
                  t,
                  s,
                  null,
                  l,
                  O
                );
            }
        for (o in l)
          if (s = l[o], O = n[o], l.hasOwnProperty(o) && (s != null || O != null))
            switch (o) {
              case "value":
                s !== O && (Ne = !0), _ = s;
                break;
              case "defaultValue":
                s !== O && (Ne = !0), v = s;
                break;
              case "multiple":
                s !== O && (Ne = !0), p = s;
              default:
                s !== O && qe(
                  e,
                  t,
                  o,
                  s,
                  l,
                  O
                );
            }
        t = v, n = p, l = H, _ != null ? Kl(e, !!n, _, !1) : !!l != !!n && (t != null ? Kl(e, !!n, t, !0) : Kl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        H = _ = null;
        for (v in n)
          if (o = n[v], n.hasOwnProperty(v) && o != null && !l.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, v, null, l, o);
            }
        for (p in l)
          if (o = l[p], s = n[p], l.hasOwnProperty(p) && (o != null || s != null))
            switch (p) {
              case "value":
                o !== s && (Ne = !0), _ = o;
                break;
              case "defaultValue":
                o !== s && (Ne = !0), H = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== s && qe(e, t, p, o, l, s);
            }
        eh(e, _, H);
        return;
      case "option":
        for (var ae in n)
          if (_ = n[ae], n.hasOwnProperty(ae) && _ != null && !l.hasOwnProperty(ae))
            switch (ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                qe(
                  e,
                  t,
                  ae,
                  null,
                  l,
                  _
                );
            }
        for (O in l)
          if (_ = l[O], H = n[O], l.hasOwnProperty(O) && _ !== H && (_ != null || H != null))
            switch (O) {
              case "selected":
                _ !== H && (Ne = !0), e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                qe(
                  e,
                  t,
                  O,
                  _,
                  l,
                  H
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var se in n)
          _ = n[se], n.hasOwnProperty(se) && _ != null && !l.hasOwnProperty(se) && qe(e, t, se, null, l, _);
        for (B in l)
          if (_ = l[B], H = n[B], l.hasOwnProperty(B) && _ !== H && (_ != null || H != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(u(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  B,
                  _,
                  l,
                  H
                );
            }
        return;
      default:
        if (qs(t)) {
          for (var xe in n)
            _ = n[xe], n.hasOwnProperty(xe) && _ !== void 0 && !l.hasOwnProperty(xe) && Yf(
              e,
              t,
              xe,
              void 0,
              l,
              _
            );
          for (Y in l)
            _ = l[Y], H = n[Y], !l.hasOwnProperty(Y) || _ === H || _ === void 0 && H === void 0 || Yf(
              e,
              t,
              Y,
              _,
              l,
              H
            );
          return;
        }
    }
    for (var D in n)
      _ = n[D], n.hasOwnProperty(D) && _ != null && !l.hasOwnProperty(D) && qe(e, t, D, null, l, _);
    for (Z in l)
      _ = l[Z], H = n[Z], !l.hasOwnProperty(Z) || _ === H || _ == null && H == null || qe(e, t, Z, _, l, H);
  }
  function sy(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ZS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var o = n[l], s = o.transferSize, p = o.initiatorType, v = o.duration;
        if (s && v && sy(p)) {
          for (p = 0, v = o.responseEnd, l += 1; l < n.length; l++) {
            var O = n[l], B = O.startTime;
            if (B > v) break;
            var Y = O.transferSize, Z = O.initiatorType;
            Y && sy(Z) && (O = O.responseEnd, p += Y * (O < v ? 1 : (v - B) / (O - B)));
          }
          if (--l, t += 8 * (s + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qf = null, Vf = null;
  function ji(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function cy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fy(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function dy(e, t, n, l) {
    return n = ji(
      n
    ).createElement(e), n[Ct] = l, n[Yt] = t, At(n, e, t), vt(n), n;
  }
  function Gf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xf = null;
  function IS() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Xf ? !1 : (Xf = e, !0) : (Xf = null, !1);
  }
  var Qf = typeof setTimeout == "function" ? setTimeout : void 0, PS = typeof clearTimeout == "function" ? clearTimeout : void 0, py = typeof Promise == "function" ? Promise : void 0, hy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Qf, JS = typeof queueMicrotask == "function" ? queueMicrotask : typeof py < "u" ? function(e) {
    return py.resolve(null).then(e).catch(FS);
  } : Qf;
  function FS(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ia(e) {
    return e === "head";
  }
  function my(e, t) {
    var n = t, l = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(o), _r(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          ed(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, ed(n);
          for (var s = n.firstChild; s; ) {
            var p = s.nextSibling, v = s.nodeName;
            s[ei] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = p;
          }
        } else
          n === "body" && ed(e.ownerDocument.body);
      n = o;
    } while (n);
    _r(t);
  }
  function gy(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function yy(e, t, n) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var l = 1;
      else
        for (var o = l = 0; o < t.length; o++) {
          var s = t[o];
          0 < s.width && 0 < s.height && l++;
        }
      l === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
    }
  }
  function vy(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function WS(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function Kf(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return WS(t, n, e);
  }
  function ex(e) {
    return e.documentElement.clientHeight;
  }
  function tx(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function nx(e, t, n, l, o, s, p, v, O) {
    var B = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var Y = B.startViewTransition({
        update: function() {
          var _ = B.defaultView, H = _.navigation && _.navigation.transition, ae = B.fonts.status;
          l();
          var se = [];
          if (ae === "loaded" && (ex(B), B.fonts.status === "loading" && se.push(B.fonts.ready)), ae = se.length, e !== null)
            for (var xe = e.suspenseyImages, D = 0, M = 0; M < xe.length; M++) {
              var j = xe[M];
              if (!j.complete) {
                var K = j.getBoundingClientRect();
                if (0 < K.bottom && 0 < K.right && K.top < _.innerHeight && K.left < _.innerWidth) {
                  if (D += ky(j), D > ju) {
                    se.length = ae;
                    break;
                  }
                  j = new Promise(
                    tx.bind(j)
                  ), se.push(j);
                }
              }
            }
          if (0 < se.length)
            return _ = Promise.race([
              Promise.all(se),
              new Promise(function(oe) {
                return setTimeout(oe, 500);
              })
            ]).then(o, o), (H ? Promise.allSettled([H.finished, _]) : _).then(s, s);
          if (o(), H)
            return H.finished.then(
              s,
              s
            );
          s();
        },
        types: n
      });
      B.__reactViewTransition = Y;
      var Z = [];
      return Y.ready.then(
        function() {
          for (var _ = B.documentElement.getAnimations({
            subtree: !0
          }), H = 0; H < _.length; H++) {
            var ae = _[H], se = ae.effect, xe = se.pseudoElement;
            if (xe != null && xe.startsWith("::view-transition")) {
              Z.push(ae), ae = se.getKeyframes();
              for (var D = xe = void 0, M = !0, j = 0; j < ae.length; j++) {
                var K = ae[j], oe = K.width;
                if (xe === void 0) xe = oe;
                else if (xe !== oe) {
                  M = !1;
                  break;
                }
                if (oe = K.height, D === void 0) D = oe;
                else if (D !== oe) {
                  M = !1;
                  break;
                }
                delete K.width, delete K.height, K.transform === "none" && delete K.transform;
              }
              M && xe !== void 0 && D !== void 0 && (se.setKeyframes(ae), M = getComputedStyle(
                se.target,
                se.pseudoElement
              ), M.width !== xe || M.height !== D) && (M = ae[0], M.width = xe, M.height = D, M = ae[ae.length - 1], M.width = xe, M.height = D, se.setKeyframes(ae));
            }
          }
          p();
        },
        function(_) {
          B.__reactViewTransition === Y && (B.__reactViewTransition = null);
          try {
            if (typeof _ == "object" && _ !== null)
              switch (_.name) {
                case "InvalidStateError":
                  (_.message === "View transition was skipped because document visibility state is hidden." || _.message === "Skipping view transition because document visibility state has become hidden." || _.message === "Skipping view transition because viewport size changed." || _.message === "Transition was aborted because of invalid state") && (_ = null);
              }
            _ !== null && O(_);
          } finally {
            l(), o(), p();
          }
        }
      ), Y.finished.finally(function() {
        for (var _ = 0; _ < Z.length; _++)
          Z[_].cancel();
        B.__reactViewTransition === Y && (B.__reactViewTransition = null), v();
      }), Y;
    } catch {
      return l(), o(), p(), null;
    }
  }
  function Nl(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  Nl.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : k({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, Nl.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), l = [], o = 0; o < n.length; o++) {
      var s = n[o].effect;
      s !== null && s.target === e && s.pseudoElement === t && l.push(n[o]);
    }
    return l;
  }, Nl.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function by(e) {
    return {
      name: e,
      group: new Nl("group", e),
      imagePair: new Nl("image-pair", e),
      old: new Nl("old", e),
      new: new Nl("new", e)
    };
  }
  function on(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  on.prototype.addEventListener = function(e, t, n) {
    var l = null, o = null;
    if (!(n != null && typeof n != "boolean" && (l = n.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var s = this._eventListeners;
      if (xy(s, e, t, n) === -1) {
        var p = this, v = t;
        n != null && typeof n != "boolean" && n.once === !0 && (v = function(O) {
          p.removeEventListener(
            e,
            t,
            n
          ), typeof t == "function" ? t.call(this, O) : t.handleEvent(O);
        }), l !== null && (o = p.removeEventListener.bind(
          p,
          e,
          t,
          n
        ), l.addEventListener("abort", o, { once: !0 }), o = l.removeEventListener.bind(l, "abort", o)), l = Rr(n), s.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: v,
          cleanup: o
        }), g(
          this._fragmentFiber.child,
          !1,
          ax,
          e,
          v,
          l
        );
      }
      this._eventListeners = s;
    }
  };
  function ax(e, t, n, l) {
    return w(e).addEventListener(
      t,
      n,
      l
    ), !1;
  }
  on.prototype.removeEventListener = function(e, t, n) {
    var l = this._eventListeners;
    if (l !== null && (t = xy(
      l,
      e,
      t,
      n
    ), t !== -1)) {
      var o = l[t];
      n = o.attachedListener;
      var s = o.cleanup;
      o = Rr(o.optionsOrUseCapture), g(
        this._fragmentFiber.child,
        !1,
        lx,
        e,
        n,
        o
      ), l.splice(t, 1), s !== null && s();
    }
  };
  function lx(e, t, n, l) {
    return w(e).removeEventListener(
      t,
      n,
      l
    ), !1;
  }
  function Rr(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Sy(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function xy(e, t, n, l) {
    if (e.length === 0) return -1;
    l = Sy(l);
    for (var o = 0; o < e.length; o++) {
      var s = e[o];
      if (s.type === t && s.listener === n && Sy(s.optionsOrUseCapture) === l)
        return o;
    }
    return -1;
  }
  on.prototype.dispatchEvent = function(e) {
    var t = x(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = w(t);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !e.bubbles) {
      var l = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n)
        for (var o = 0; o < n.length; o++) {
          var s = n[o];
          l.addEventListener(
            s.type,
            s.attachedListener,
            Rr(s.optionsOrUseCapture)
          );
        }
      if (t.appendChild(l), e = l.dispatchEvent(e), n)
        for (o = 0; o < n.length; o++)
          s = n[o], l.removeEventListener(
            s.type,
            s.attachedListener,
            Rr(s.optionsOrUseCapture)
          );
      return t.removeChild(l), e;
    }
    return t.dispatchEvent(e);
  }, on.prototype.focus = function(e) {
    g(
      this._fragmentFiber.child,
      !0,
      Ey,
      e,
      void 0,
      void 0
    );
  };
  function Ey(e, t) {
    return e.tag === 6 ? !1 : (e = w(e), gx(e, t));
  }
  on.prototype.focusLast = function(e) {
    var t = [];
    g(
      this._fragmentFiber.child,
      !0,
      Zf,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !Ey(t[n], e); n--) ;
  };
  function Zf(e, t) {
    return t.push(e), !1;
  }
  on.prototype.blur = function() {
    var e = x(
      this._fragmentFiber
    );
    e !== null && (e = w(e), e = ji(e).activeElement, e !== null && g(
      this._fragmentFiber.child,
      !1,
      rx,
      e,
      void 0,
      void 0
    ));
  };
  function rx(e, t) {
    return e.tag === 6 ? !1 : (e = w(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  on.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), g(
      this._fragmentFiber.child,
      !1,
      ix,
      e,
      void 0,
      void 0
    );
  };
  function ix(e, t) {
    return e.tag === 6 || (e = w(e), t.observe(e)), !1;
  }
  on.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), g(
        this._fragmentFiber.child,
        !1,
        ox,
        e,
        void 0,
        void 0
      );
      for (var n = t = 0; n < Bn.length; n++) {
        var l = Bn[n];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : Bn[t++] = l;
      }
      Bn.length = t;
    }
  };
  function ox(e, t) {
    return e.tag === 6 || (e = w(e), t.unobserve(e)), !1;
  }
  var Bn = [], If = !1;
  function ux(e, t, n) {
    Bn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), If || (If = !0, yx(function() {
      If = !1;
      var l = Bn;
      Bn = [];
      for (var o = 0; o < l.length; o++) {
        var s = l[o];
        s.observer.unobserve(s.instance);
      }
    }));
  }
  on.prototype.getClientRects = function() {
    var e = [];
    return g(
      this._fragmentFiber.child,
      !1,
      sx,
      e,
      void 0,
      void 0
    ), e;
  };
  function sx(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = w(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  on.prototype.getRootNode = function(e) {
    var t = x(
      this._fragmentFiber
    );
    return t === null ? this : w(t).getRootNode(e);
  }, on.prototype.compareDocumentPosition = function(e) {
    var t = x(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    g(
      this._fragmentFiber.child,
      !1,
      Zf,
      n,
      void 0,
      void 0
    );
    var l = w(t);
    if (n.length === 0) {
      if (n = l, T(this._fragmentFiber)) {
        e: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break e;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (n = t);
      }
      t = this._fragmentFiber;
      var o = l = n.compareDocumentPosition(e);
      return n === e ? o = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = R(t)[1], n === null ? o = Node.DOCUMENT_POSITION_PRECEDING : (e = w(n).compareDocumentPosition(
        e
      ), o = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), o |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = w(n[0]), o = w(n[n.length - 1]);
    var s = T(this._fragmentFiber) ? t.parentElement : l;
    if (s == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = s.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, s = s.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var p = t.compareDocumentPosition(e), v = o.compareDocumentPosition(e), O = p & Node.DOCUMENT_POSITION_CONTAINED_BY || v & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return v = l && s && p & Node.DOCUMENT_POSITION_FOLLOWING && v & Node.DOCUMENT_POSITION_PRECEDING, t = l && t === e || s && o === e || O || v ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && t === e || !s && o === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : p, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || cx(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function cx(e, t, n, l, o) {
    var s = fl(o);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!s)
        e: {
          for (; s !== null; ) {
            if (s.tag === 7 && (s === t || s.alternate === t)) {
              n = !0;
              break e;
            }
            s = s.return;
          }
          n = !1;
        }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (s === null)
        return s = o.ownerDocument, o === s || o === s.documentElement || o === s.body;
      e: {
        for (s = t, t = x(t); s !== null; ) {
          if (!(s.tag !== 5 && s.tag !== 3 && s.tag !== 27 || s !== t && s.alternate !== t)) {
            s = !0;
            break e;
          }
          s = s.return;
        }
        s = !1;
      }
      return s;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!s) && !(t = s === n) && (t = G(
      n,
      s,
      N
    ), t === null ? t = !1 : (g(
      t,
      !0,
      U,
      s,
      n
    ), s = A, A = null, t = s !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!s) && !(t = s === l) && (t = G(
      l,
      s,
      N
    ), t === null ? t = !1 : (g(
      t,
      !0,
      L,
      s,
      l
    ), s = A, $ = A = null, t = s !== null)), t) : !1;
  }
  function Cy(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  on.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(u(566));
    var t = [];
    g(
      this._fragmentFiber.child,
      !1,
      Zf,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var l = R(
        this._fragmentFiber
      );
      if (l = n ? l[1] || l[0] || x(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        e = w(l), Cy(e, n);
        return;
      }
      if (l = w(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          n = "host" in l ? l.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = n ? t.length - 1 : 0; l !== (n ? -1 : t.length); ) {
      var o = t[l];
      o.tag === 6 ? (o = w(o), Cy(o, n)) : w(o).scrollIntoView(e), l += n ? -1 : 1;
    }
  };
  function fx(e, t) {
    return e = w(e), Ty(e, t), !1;
  }
  function Ty(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Ry(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = n[l];
        e.addEventListener(
          o.type,
          o.attachedListener,
          Rr(o.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(s) {
      for (var p = 0, v = 0; v < Bn.length; v++) {
        var O = Bn[v];
        (O.fragmentInstance !== t || O.observer !== s || O.instance !== e) && (Bn[p++] = O);
      }
      Bn.length = p, s.observe(e);
    }), Ty(e, t));
  }
  function dx(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = n[l];
        e.removeEventListener(
          o.type,
          o.attachedListener,
          Rr(o.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(s) {
      typeof s.rootMargin == "string" ? ux(
        t,
        s,
        e
      ) : s.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function Pf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pf(n), To(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function px(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[ei])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (s !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (s = e.getAttribute("src"), (s !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === s)
          return e;
      } else return e;
      if (e = En(e.nextSibling), e === null) break;
    }
    return null;
  }
  function hx(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = En(e.nextSibling), e === null)) return null;
    return e;
  }
  function Oy(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = En(e.nextSibling), e === null)) return null;
    return e;
  }
  function Jf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ff(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function mx(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function En(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Wf = null;
  function wy(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return En(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ay(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function gx(e, t) {
    function n() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", n, !0);
    }
    return l;
  }
  function yx(e) {
    hy(function() {
      hy(function(t) {
        return e(t);
      });
    });
  }
  function zy(e, t, n) {
    switch (t = ji(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function My(e, t, n) {
    for (var l in n) {
      var o = n[l];
      n.hasOwnProperty(l) && o != null && qe(e, t, l, null, QS, o);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Hn && (e.onclick = null), To(e);
  }
  function ed(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    To(e);
  }
  var Cn = /* @__PURE__ */ new Map(), _y = /* @__PURE__ */ new Set();
  function Li(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ea = de.d;
  de.d = {
    f: vx,
    r: bx,
    D: Sx,
    C: xx,
    L: Ex,
    m: Cx,
    X: Rx,
    S: Tx,
    M: Ox
  };
  function vx() {
    var e = Ea.f(), t = wu();
    return e || t;
  }
  function bx(e) {
    var t = Gl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Dm(t) : Ea.r(e);
  }
  var Or = typeof document > "u" ? null : document;
  function Ny(e, t, n) {
    var l = Or;
    if (l && typeof t == "string" && t) {
      var o = mn(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), _y.has(o) || (_y.add(o), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(o) === null && (t = l.createElement("link"), At(t, "link", e), vt(t), l.head.appendChild(t)));
    }
  }
  function Sx(e) {
    Ea.D(e), Ny("dns-prefetch", e, null);
  }
  function xx(e, t) {
    Ea.C(e, t), Ny("preconnect", e, t);
  }
  function Ex(e, t, n) {
    Ea.L(e, t, n);
    var l = Or;
    if (l && e && t) {
      var o = 'link[rel="preload"][as="' + mn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + mn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + mn(
        n.imageSizes
      ) + '"]')) : o += '[href="' + mn(e) + '"]';
      var s = o;
      switch (t) {
        case "style":
          s = wr(e);
          break;
        case "script":
          s = Ar(e);
      }
      if (!(Cn.has(s) || (e = k(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Cn.set(s, e), l.querySelector(o) !== null || t === "style" && l.querySelector(Hi(s)) || t === "script" && l.querySelector(ki(s))))) {
        var p = l.createElement("link");
        At(p, "link", e), t === "style" && (p[Co] = !0, p.onload = p.onerror = function() {
          Xp(p);
        }), vt(p), l.head.appendChild(p);
      }
    }
  }
  function Cx(e, t) {
    Ea.m(e, t);
    var n = Or;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + mn(l) + '"][href="' + mn(e) + '"]', s = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Ar(e);
      }
      if (!Cn.has(s) && (e = k({ rel: "modulepreload", href: e }, t), Cn.set(s, e), n.querySelector(o) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ki(s)))
              return;
        }
        l = n.createElement("link"), At(l, "link", e), vt(l), n.head.appendChild(l);
      }
    }
  }
  function Tx(e, t, n) {
    Ea.S(e, t, n);
    var l = Or;
    if (l && e) {
      var o = Xl(l).hoistableStyles, s = wr(e);
      t = t || "default";
      var p = o.get(s);
      if (!p) {
        var v = { loading: 0, preload: null };
        if (p = l.querySelector(
          Hi(s)
        ))
          v.loading = 5;
        else {
          e = k(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Cn.get(s)) && td(e, n);
          var O = p = l.createElement("link");
          vt(O), At(O, "link", e), O._p = new Promise(function(B, Y) {
            O.onload = B, O.onerror = Y;
          }), O.addEventListener("load", function() {
            v.loading |= 1;
          }), O.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Bu(p, t, l);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: v
        }, o.set(s, p);
      }
    }
  }
  function Rx(e, t) {
    Ea.X(e, t);
    var n = Or;
    if (n && e) {
      var l = Xl(n).hoistableScripts, o = Ar(e), s = l.get(o);
      s || (s = n.querySelector(ki(o)), s || (e = k({ src: e, async: !0 }, t), (t = Cn.get(o)) && nd(e, t), s = n.createElement("script"), vt(s), At(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(o, s));
    }
  }
  function Ox(e, t) {
    Ea.M(e, t);
    var n = Or;
    if (n && e) {
      var l = Xl(n).hoistableScripts, o = Ar(e), s = l.get(o);
      s || (s = n.querySelector(ki(o)), s || (e = k({ src: e, async: !0, type: "module" }, t), (t = Cn.get(o)) && nd(e, t), s = n.createElement("script"), vt(s), At(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(o, s));
    }
  }
  function Dy(e, t, n, l) {
    var o = (o = pn.current) ? Li(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = wr(n.href), t = Xl(
          o
        ).hoistableStyles, l = t.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = wr(n.href);
          var s = Xl(
            o
          ).hoistableStyles, p = s.get(e);
          if (p || (o = o.ownerDocument || o, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, p), (s = o.querySelector(
            Hi(e)
          )) ? s._p || (p.instance = s, p.state.loading = 5) : (s = Cn.get(e), s || (s = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Cn.set(e, s)), wx(
            o,
            e,
            s,
            p.state
          ))), t && l === null)
            throw Error(u(528, ""));
          return p;
        }
        if (t && l !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Ar(n), t = Xl(
          o
        ).hoistableScripts, l = t.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function wr(e) {
    return 'href="' + mn(e) + '"';
  }
  function Hi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function By(e) {
    return k({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function wx(e, t, n, l) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Co] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[Co] = !0, t.onload = t.onerror = Xp.bind(null, t), At(t, "link", n), vt(t), e.head.appendChild(t);
    l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Ar(e) {
    return '[src="' + mn(e) + '"]';
  }
  function ki(e) {
    return "script[async]" + e;
  }
  function Uy(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + mn(n.href) + '"]'
          );
          if (l)
            return t.instance = l, vt(l), l;
          var o = k({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), vt(l), At(l, "style", o), Bu(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          o = wr(n.href);
          var s = e.querySelector(
            Hi(o)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, vt(s), s;
          l = By(n), (o = Cn.get(o)) && td(l, o), s = (e.ownerDocument || e).createElement("link"), vt(s);
          var p = s;
          return p._p = new Promise(function(v, O) {
            p.onload = v, p.onerror = O;
          }), At(s, "link", l), t.state.loading |= 4, Bu(s, n.precedence, e), t.instance = s;
        case "script":
          return s = Ar(n.src), (o = e.querySelector(
            ki(s)
          )) ? (t.instance = o, vt(o), o) : (l = n, (o = Cn.get(s)) && (l = k({}, n), nd(l, o)), e = e.ownerDocument || e, o = e.createElement("script"), vt(o), At(o, "link", l), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Bu(l, n.precedence, e));
    return t.instance;
  }
  function Bu(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = l.length ? l[l.length - 1] : null, s = o, p = 0; p < l.length; p++) {
      var v = l[p];
      if (v.dataset.precedence === t) s = v;
      else if (s !== o) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function td(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function nd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Uu = null;
  function jy(e, t, n) {
    if (Uu === null) {
      var l = /* @__PURE__ */ new Map(), o = Uu = /* @__PURE__ */ new Map();
      o.set(n, l);
    } else
      o = Uu, l = o.get(n), l || (l = /* @__PURE__ */ new Map(), o.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var s = n[o];
      if (!(s[ei] || s[Ct] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = s.getAttribute(t) || "";
        p = e + p;
        var v = l.get(p);
        v ? v.push(s) : l.set(p, [s]);
      }
    }
    return l;
  }
  function ad(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ax(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Ly(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Hy(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ky(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function $y(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += ky(t), e.suspenseyImages.push(t)), e = _x.bind(e), t.decode().then(e, e));
  }
  function zx(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = wr(l.href), s = t.querySelector(
          Hi(o)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = $i.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = s, vt(s);
          return;
        }
        s = t.ownerDocument || t, l = By(l), (o = Cn.get(o)) && td(l, o), s = s.createElement("link"), vt(s);
        var p = s;
        p._p = new Promise(function(v, O) {
          p.onload = v, p.onerror = O;
        }), At(s, "link", l), n.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = $i.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var ju = 0;
  function Mx(e, t) {
    return e.stylesheets && e.count === 0 && Hu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Hu(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ju === 0 && (ju = 62500 * ZS());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Hu(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > ju ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(o);
      };
    } : null;
  }
  function Yy(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Hu(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function $i() {
    this.count--, Yy(this);
  }
  function _x() {
    this.imgCount--, Yy(this);
  }
  var Lu = null;
  function Hu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Lu = /* @__PURE__ */ new Map(), t.forEach(Nx, e), Lu = null, $i.call(e));
  }
  function Nx(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Lu.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Lu.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < o.length; s++) {
          var p = o[s];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), l = p);
        }
        l && n.set(null, l);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), s = n.get(p) || l, s === l && n.set(null, o), n.set(p, o), this.count++, l = $i.bind(this), o.addEventListener("load", l), o.addEventListener("error", l), s ? s.parentNode.insertBefore(o, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var zr = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: kt,
    _currentValue2: kt,
    _threadCount: 0
  };
  function Dx(e, t, n, l, o, s, p, v, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = js(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = js(0), this.hiddenUpdates = js(null), this.identifierPrefix = l, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qy(e, t, n, l, o, s, p, v, O, B, Y, Z) {
    return e = new Dx(
      e,
      t,
      n,
      p,
      O,
      B,
      Y,
      Z,
      v
    ), t = 1, s === !0 && (t |= 24), s = qt(3, null, null, t), e.current = s, s.stateNode = e, t = yc(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, xc(s), e;
  }
  function Vy(e) {
    return e ? (e = tr, e) : tr;
  }
  function Gy(e, t, n, l, o, s) {
    o = Vy(o), l.context === null ? l.context = o : l.pendingContext = o, l = La(t), l.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (l.callback = s), n = Ha(e, l, t), n !== null && (Qt(n, e, t), yi(n, e, t));
  }
  function Xy(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ld(e, t) {
    Xy(e, t), (e = e.alternate) && Xy(e, t);
  }
  function Qy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ml(e, 67108864);
      t !== null && Qt(t, e, 67108864), ld(e, 67108864);
    }
  }
  function Ky(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = rn();
      t = Ls(t);
      var n = ml(e, t);
      n !== null && Qt(n, e, t), ld(e, t);
    }
  }
  var Mr = !0;
  function Bx(e, t, n, l) {
    var o = re.T;
    re.T = null;
    var s = de.p;
    try {
      de.p = 2, rd(e, t, n, l);
    } finally {
      de.p = s, re.T = o;
    }
  }
  function Ux(e, t, n, l) {
    var o = re.T;
    re.T = null;
    var s = de.p;
    try {
      de.p = 8, rd(e, t, n, l);
    } finally {
      de.p = s, re.T = o;
    }
  }
  function rd(e, t, n, l) {
    if (Mr) {
      var o = id(l);
      if (o === null)
        $f(
          e,
          t,
          l,
          ku,
          n
        ), Iy(e, l);
      else if (Lx(
        o,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (Iy(e, l), t & 4 && -1 < jx.indexOf(e)) {
        for (; o !== null; ) {
          var s = Gl(o);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var p = cl(s.pendingLanes);
                  if (p !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; p; ) {
                      var O = 1 << 31 - Ft(p);
                      v.entanglements[1] |= O, p &= ~O;
                    }
                    Zn(s), (De & 6) === 0 && (Tu = Pt() + 500, Di(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = ml(s, 2), v !== null && Qt(v, s, 2), wu(), ld(s, 2);
            }
          if (s = id(l), s === null && $f(
            e,
            t,
            l,
            ku,
            n
          ), s === o) break;
          o = s;
        }
        o !== null && l.stopPropagation();
      } else
        $f(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function id(e) {
    return e = Gs(e), od(e);
  }
  var ku = null;
  function od(e) {
    if (ku = null, e = fl(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ku = e, null;
  }
  function Zy(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Zb()) {
          case Dp:
            return 2;
          case Bp:
            return 8;
          case vo:
          case Ib:
            return 32;
          case Up:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ud = !1, Pa = null, Ja = null, Fa = null, Yi = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), Wa = [], jx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Iy(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ja = null;
        break;
      case "mouseover":
      case "mouseout":
        Fa = null;
        break;
      case "pointerover":
      case "pointerout":
        Yi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qi.delete(t.pointerId);
    }
  }
  function Vi(e, t, n, l, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: s,
      targetContainers: [o]
    }, t !== null && (t = Gl(t), t !== null && Qy(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Lx(e, t, n, l, o) {
    switch (t) {
      case "focusin":
        return Pa = Vi(
          Pa,
          e,
          t,
          n,
          l,
          o
        ), !0;
      case "dragenter":
        return Ja = Vi(
          Ja,
          e,
          t,
          n,
          l,
          o
        ), !0;
      case "mouseover":
        return Fa = Vi(
          Fa,
          e,
          t,
          n,
          l,
          o
        ), !0;
      case "pointerover":
        var s = o.pointerId;
        return Yi.set(
          s,
          Vi(
            Yi.get(s) || null,
            e,
            t,
            n,
            l,
            o
          )
        ), !0;
      case "gotpointercapture":
        return s = o.pointerId, qi.set(
          s,
          Vi(
            qi.get(s) || null,
            e,
            t,
            n,
            l,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Py(e) {
    var t = fl(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, qp(e.priority, function() {
              Ky(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, qp(e.priority, function() {
              Ky(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function $u(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = id(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Vs = l, n.target.dispatchEvent(l), Vs = null;
      } else
        return t = Gl(n), t !== null && Qy(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Jy(e, t, n) {
    $u(e) && n.delete(t);
  }
  function Hx() {
    ud = !1, Pa !== null && $u(Pa) && (Pa = null), Ja !== null && $u(Ja) && (Ja = null), Fa !== null && $u(Fa) && (Fa = null), Yi.forEach(Jy), qi.forEach(Jy);
  }
  function Yu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ud || (ud = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      Hx
    )));
  }
  var qu = null;
  function Fy(e) {
    qu !== e && (qu = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        qu === e && (qu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], o = e[t + 2];
          if (typeof l != "function") {
            if (od(l || n) === null)
              continue;
            break;
          }
          var s = Gl(n);
          s !== null && (e.splice(t, 3), t -= 3, qc(
            s,
            {
              pending: !0,
              data: o,
              method: n.method,
              action: l
            },
            l,
            o
          ));
        }
      }
    ));
  }
  function _r(e) {
    function t(O) {
      return Yu(O, e);
    }
    Pa !== null && Yu(Pa, e), Ja !== null && Yu(Ja, e), Fa !== null && Yu(Fa, e), Yi.forEach(t), qi.forEach(t);
    for (var n = 0; n < Wa.length; n++) {
      var l = Wa[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Wa.length && (n = Wa[0], n.blockedOn === null); )
      Py(n), n.blockedOn === null && Wa.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var o = n[l], s = n[l + 1], p = o[Yt] || null;
        if (typeof s == "function")
          p || Fy(n);
        else if (p) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (o = s, p = s[Yt] || null)
              v = p.formAction;
            else if (od(o) !== null) continue;
          } else v = p.action;
          typeof v == "function" ? n[l + 1] = v : (n.splice(l, 3), l -= 3), Fy(n);
        }
      }
  }
  function Wy() {
    function e(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(p) {
            return o = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      o !== null && (o(), o = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function sd(e) {
    this._internalRoot = e;
  }
  Vu.prototype.render = sd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var n = t.current, l = rn();
    Gy(n, l, e, t, null, null);
  }, Vu.prototype.unmount = sd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Gy(e.current, 2, null, e, null, null), wu(), t[Vl] = null;
    }
  };
  function Vu(e) {
    this._internalRoot = e;
  }
  Vu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Yp();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wa.length && t !== 0 && t < Wa[n].priority; n++) ;
      Wa.splice(n, 0, e), n === 0 && Py(e);
    }
  };
  var e0 = r.version;
  if (e0 !== "19.3.1")
    throw Error(
      u(
        527,
        e0,
        "19.3.1"
      )
    );
  de.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = y(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var kx = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: re,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gu.isDisabled && Gu.supportsFiber)
      try {
        Jr = Gu.inject(
          kx
        ), Jt = Gu;
      } catch {
      }
  }
  return Zi.createRoot = function(e, t) {
    if (!c(e)) throw Error(u(299));
    var n = !1, l = "", o = Vm, s = Gm, p = Xm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = qy(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      o,
      s,
      p,
      Wy
    ), e[Vl] = t.current, kf(e), new sd(t);
  }, Zi.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(u(299));
    var l = !1, o = "", s = Vm, p = Gm, v = Xm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.formState !== void 0 && (O = n.formState)), t = qy(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      o,
      O,
      s,
      p,
      v,
      Wy
    ), t.context = Vy(null), n = t.current, l = rn(), l = Ls(l), o = La(l), o.callback = null, Ha(n, o, l), n = l, t.current.lanes = n, Wr(t, n), Zn(t), e[Vl] = t.current, kf(e), new Vu(t);
  }, Zi.version = "19.3.1", Zi;
}
var gv;
function SO() {
  if (gv) return Md.exports;
  gv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Md.exports = bO(), Md.exports;
}
var xO = SO();
const EO = /* @__PURE__ */ Pd(xO);
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var u in i) ({}).hasOwnProperty.call(i, u) && (a[u] = i[u]);
    }
    return a;
  }, hs.apply(null, arguments);
}
const Dd = {
  light: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#EEEEEE"
        }
      }
    }
  },
  dark: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#212121"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          backgroundImage: "none"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          backgroundImage: "none"
        }
      }
    }
  },
  lightsOut: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#212121"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          backgroundImage: "none"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          backgroundImage: "none"
        }
      }
    }
  }
}, CO = {
  default: {
    palette: {
      mode: "light"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  light: {
    components: {
      ...Dd.light
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      secondary: {
        main: "#40f0bb"
      },
      mode: "light",
      background: {
        default: "#F5F5F5",
        cardContainer: "#fafafa"
      },
      customShadow: "0px 6px 9px 0px #00000014"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  dark: {
    components: {
      ...Dd.dark
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      mode: "dark",
      background: {
        default: "#303030",
        paper: "#424242",
        cardContainer: "#424242"
      },
      customShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  lightsOut: {
    components: {
      ...Dd.lightsOut
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      mode: "dark",
      background: {
        default: "#000",
        paper: "#000",
        cardContainer: "#000"
      }
    },
    shadows: Array(25).fill("0px 4px 12px #888888"),
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  }
}, yv = (a) => ({
  MuiCard: {
    styleOverrides: {
      root: ({
        theme: r
      }) => {
        var i, u;
        return {
          backgroundColor: r.palette.mode === "dark" ? ((u = (i = a.palette) == null ? void 0 : i.background) == null ? void 0 : u.cardContainer) || "#424242" : void 0,
          backgroundImage: "none"
        };
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: ({
        theme: r
      }) => {
        var i, u;
        return {
          backgroundColor: r.palette.mode === "dark" ? ((u = (i = a.palette) == null ? void 0 : i.background) == null ? void 0 : u.paper) || "#424242" : void 0,
          backgroundImage: "none"
        };
      }
    }
  }
});
class TO extends C.Component {
  constructor(i) {
    super(i);
    Nr(this, "handleReload", () => {
      const {
        reloadPath: i
      } = this.props;
      i && Xb(i) ? window.location.href = i : window.location.reload();
    });
    this.state = {
      themeName: i.themeName || "light",
      hasAppError: !1
    }, this.themeSource = i.theme || CO;
    const u = this.themeSource[this.state.themeName];
    this.theme = ro({
      ...Z0(u),
      components: {
        ...yv(u)
      }
    });
  }
  /*
   * ERROR BOUNDARY CAPABILITIES:
   *   CATCHES:
   *   - Render crashes (e.g., null references during render)
   *   - Missing JS Chunks (ChunkLoadError mid-session)
   *   - Synchronous errors in lifecycle methods/useEffect
   */
  static getDerivedStateFromError(i) {
    return {
      hasAppError: !0
    };
  }
  componentDidCatch(i, u) {
    console.error("HDTheme Error Boundary caught an error:", i, u);
  }
  componentDidUpdate(i) {
    if (this.props.themeName !== i.themeName) {
      const u = this.themeSource[this.props.themeName];
      this.theme = ro({
        ...Z0(u),
        components: {
          ...yv(u)
        }
      }), this.setState({
        themeName: this.props.themeName
      });
    }
  }
  render() {
    return this.state.hasAppError ? /* @__PURE__ */ pe.createElement("div", {
      style: {
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
        color: "#111827",
        margin: "20px auto",
        maxWidth: "600px"
      }
    }, /* @__PURE__ */ pe.createElement("h3", {
      style: {
        marginBottom: "10px",
        fontSize: "1.5rem",
        fontWeight: "500"
      }
    }, "Something went wrong"), /* @__PURE__ */ pe.createElement("p", {
      style: {
        marginBottom: "24px",
        color: "#4b5563",
        fontSize: "1rem"
      }
    }, "The application may have been updated in the background."), /* @__PURE__ */ pe.createElement("button", {
      onClick: this.handleReload,
      style: {
        padding: "10px 24px",
        cursor: "pointer",
        background: "transparent",
        color: "#374151",
        border: "1px solid #d1d5db",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500"
      }
    }, "Reload Application")) : /* @__PURE__ */ pe.createElement(MC, {
      injectFirst: !0
    }, /* @__PURE__ */ pe.createElement(dR, {
      theme: this.theme
    }, this.props.children));
  }
}
function Xb(a) {
  return !(!a || typeof a != "string" || !a.startsWith("/") || a.startsWith("//") || /^[a-zA-Z][a-zA-Z0-9+\-.]*:/i.test(a));
}
function RO(a) {
  if (a && typeof a == "object" && "componentPath" in a) {
    const {
      componentPath: r,
      ...i
    } = a;
    return Object.keys(i).length > 0 ? i : {};
  }
  return a;
}
function OO(a) {
  return {
    setWebsearchHeader: (r) => window.parent.postMessage({
      type: "setWebsearchHeader",
      header: r
    }, "*"),
    secondaryMenu: (r) => a(r),
    searchQuery: (r) => window.parent.postMessage({
      type: "searchQuery",
      query: r
    }, "*"),
    switchFullScreen: (r = !0, i = !1) => window.parent.postMessage({
      type: "switchFullScreen",
      fullScreen: r,
      navigatedViaRoute: i
    }, "*"),
    componentLoaded: () => window.parent.postMessage({
      type: "componentLoaded"
    }, "*"),
    loadAiGeneratedResponse: (r) => new Promise((i, u) => {
      const c = Date.now();
      function f(d) {
        var h, m;
        ((h = d.data) == null ? void 0 : h.type) === "loadAiGeneratedResponseResult" && ((m = d.data) == null ? void 0 : m.requestId) === c && (window.removeEventListener("message", f), d.data.error ? u(new Error(d.data.error)) : i(d.data.response));
      }
      window.addEventListener("message", f), window.parent.postMessage({
        type: "loadAiGeneratedResponse",
        payload: r,
        requestId: c
      }, "*");
    }),
    unload: (r = "") => window.parent.postMessage({
      type: "unload",
      message: r
    }, "*")
  };
}
const wO = {
  outerContainer: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    width: "100%"
  }
};
function AO(a) {
  C.useEffect(() => {
    if (!a) return;
    const r = (i) => {
      (i.key === "/" || i.code === "Slash") && window.parent.postMessage({
        type: "searchShortcutPressed",
        event: {
          key: i.key,
          code: i.code
        }
      }, "*");
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [a]);
}
const zO = Ze(dO)(({
  theme: a
}) => ({
  zIndex: "5",
  position: "fixed",
  bottom: 58,
  right: 10,
  opacity: 0.8,
  width: "48px",
  height: "48px",
  [a.breakpoints.up("lg")]: {
    bottom: 58,
    right: "calc(100% - 1140px)"
  }
})), vv = Ze("div")(({
  theme: a
}) => ({
  display: "flex",
  justifyContent: "space-evenly",
  cursor: "pointer",
  position: "sticky",
  bottom: 0,
  backgroundColor: a.palette.background.default,
  zIndex: 1e3
})), MO = (a) => {
  var U;
  const {
    isMdUp: r
  } = a, [i, u] = C.useState(r), [c, f] = C.useState(!1);
  C.useEffect(() => {
    u(r);
  }, [r]);
  const {
    menu: d,
    componentFullWidth: h,
    fullHeight: m,
    applyBtnMdUp: y,
    applyBtnMdUpOnClick: b,
    applyBtnSmDown: g,
    applyBtnSmDownOnClick: x,
    filters: T,
    noOfFilters: R,
    preventAutoClose: E
  } = a.secondaryMenu, w = () => {
    u(!i), f(!c);
  }, A = (L) => {
    w(), L();
  }, $ = () => {
    w();
  };
  return C.useEffect(() => {
    var L;
    if ((L = a.secondaryMenu) != null && L.menu && document.getElementById("secondaryMenu")) {
      const G = document.getElementById("secondaryMenu").clientHeight > window.innerHeight;
      a.setHeightOverflow(G);
    }
  }, [(U = a.secondaryMenu) == null ? void 0 : U.menu]), /* @__PURE__ */ pe.createElement(pe.Fragment, null, !i && /* @__PURE__ */ pe.createElement(zO, {
    onClick: w,
    color: "primary",
    className: h ? "fabButtonClose" : "fabButton"
  }, T ? R ? /* @__PURE__ */ pe.createElement(E3, {
    badgeContent: R,
    color: "primary"
  }, /* @__PURE__ */ pe.createElement(dv, null)) : /* @__PURE__ */ pe.createElement(dv, null) : /* @__PURE__ */ pe.createElement(hO, null)), r && i && /* @__PURE__ */ pe.createElement(cv, {
    variant: "persistent",
    anchor: "right",
    open: i,
    PaperProps: {
      elevation: 1,
      id: "secondaryMenu",
      sx: {
        boxSizing: "border-box",
        paddingTop: "4px",
        width: i ? "100%" : 0,
        position: "static",
        height: m ? "inherit" : "auto"
      }
    }
  }, d, y && b ? /* @__PURE__ */ pe.createElement(vv, null, /* @__PURE__ */ pe.createElement(Ju, {
    variant: "outlined",
    sx: {
      width: "50%"
    },
    color: "primary",
    onClick: $
  }, "Close"), /* @__PURE__ */ pe.createElement(Ju, {
    variant: "contained",
    sx: {
      width: "50%"
    },
    color: "primary",
    onClick: () => A(b)
  }, "Apply")) : /* @__PURE__ */ pe.createElement(rv, {
    sx: {
      display: "flex",
      padding: "16px",
      cursor: "pointer"
    },
    onClick: w
  }, /* @__PURE__ */ pe.createElement(u3, {
    variant: "caption"
  }, "Hide Menu"), /* @__PURE__ */ pe.createElement(mO, {
    sx: {
      color: "grey",
      width: 16,
      height: 20
    }
  }))), !r && /* @__PURE__ */ pe.createElement(cv, {
    anchor: "right",
    open: c,
    onClose: w,
    PaperProps: {
      sx: {
        width: "80%"
      }
    }
  }, /* @__PURE__ */ pe.createElement("div", {
    tabIndex: 0,
    role: "button",
    onClick: g && x || E ? void 0 : w,
    onKeyDown: g && x || E ? void 0 : w
  }, E && /* @__PURE__ */ pe.createElement(rv, {
    sx: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "10px"
    }
  }, /* @__PURE__ */ pe.createElement(n3, {
    onClick: w,
    edge: "end",
    "aria-label": "close",
    size: "large"
  }, /* @__PURE__ */ pe.createElement(gO, null))), d, g && x && /* @__PURE__ */ pe.createElement(vv, null, /* @__PURE__ */ pe.createElement(Ju, {
    variant: "outlined",
    color: "primary",
    style: {
      width: "50%"
    },
    onClick: $
  }, "Close"), /* @__PURE__ */ pe.createElement(Ju, {
    variant: "contained",
    color: "primary",
    style: {
      width: "50%"
    },
    onClick: () => A(x)
  }, "Apply")))));
};
var _O = /* @__PURE__ */ C.memo(MO);
const NO = ({
  secondaryMenuProps: a,
  isMdUp: r
}) => {
  const [i, u] = C.useState(!1), [c, f] = C.useState({
    scrollPos: 0,
    top: 0
  }), d = C.useRef(null), h = {
    innerContainer: {
      position: "sticky",
      top: 0,
      bottom: "auto",
      display: "flex",
      flexDirection: "column"
    }
  };
  return C.useEffect(() => {
    const m = () => {
      var g;
      const y = (g = d == null ? void 0 : d.current) == null ? void 0 : g.offsetHeight, b = window.innerHeight;
      f((x) => {
        const T = x.scrollPos - window.scrollY;
        let R = x.top + T;
        return R > 0 && (R = 0), R < b - y && (R = b - y), {
          top: R,
          scrollPos: window.scrollY
        };
      });
    };
    return window.addEventListener("scroll", m), () => {
      window.removeEventListener("scroll", m);
    };
  }, []), a && a !== "" && a.menu !== "" ? /* @__PURE__ */ pe.createElement("div", {
    ref: d,
    style: {
      ...h.innerContainer,
      top: i ? c == null ? void 0 : c.top : 0,
      width: r ? "240px" : 0,
      height: "100%"
    }
  }, /* @__PURE__ */ pe.createElement(_O, {
    setHeightOverflow: u,
    secondaryMenu: a,
    isMdUp: r
  })) : null;
};
let Bd = null;
function bv(a, r, i, u, c) {
  const f = document.getElementById("root");
  Bd || (Bd = EO.createRoot(f));
  const d = location.pathname.indexOf(r) < 0 ? "" : location.pathname.slice(0, location.pathname.indexOf(r));
  Bd.render(/* @__PURE__ */ pe.createElement(a, {
    baseURL: r,
    basename: d,
    searchData: i,
    UIOptions: u,
    deployedBackendURL: c
  }));
}
function DO(a, r, i) {
  window.onmessage = function(f) {
    if (f.data.type === "dataRefresh") {
      const d = f.data.searchData && f.data.searchData[0];
      bv(a, r, d, f.data.UIOptions, i);
    }
  }, bv(a, r, {}, {}, i);
  const u = new ResizeObserver((f) => {
    if (f.length > 0) {
      const d = f[0].target.clientHeight;
      window.parent.postMessage({
        type: "resizeIframe",
        height: d
      }, "*");
    }
  }), c = document.getElementById("root");
  c && u.observe(c);
}
const BO = (a) => {
  var U, L;
  const r = C.useRef(!1), i = Hv(), u = la(), c = yo(), f = pO(c.breakpoints.up("md")), [d, h] = C.useState(null), {
    format: m,
    UIOptions: y,
    searchData: b,
    baseURL: g = "",
    basename: x = ""
  } = a, T = m === "fullscreen", R = x + g, {
    componentStyles: E,
    ...w
  } = y || {}, A = C.useMemo(() => OO(h), []);
  AO(T), C.useEffect(() => {
    if (a.searchData && a.searchData.componentPath) {
      const N = a.searchData.componentPath, G = N.startsWith(R) ? N.substring(R.length) : N;
      Xb(G) ? i(G, {
        replace: !0
      }) : console.warn("[withHD] Blocked unsafe componentPath:", N);
    }
  }, [(U = a == null ? void 0 : a.searchData) == null ? void 0 : U.componentPath]), C.useEffect(() => {
    const N = R + u.pathname + u.search;
    r.current ? N && (!(a.searchData && a.searchData.componentPath) || a.searchData && a.searchData.componentPath && N !== a.searchData.componentPath) && window.parent.postMessage({
      type: "updateComponentPath",
      componentPath: N
    }, "*") : r.current = !0;
  }, [u == null ? void 0 : u.pathname, u == null ? void 0 : u.search]);
  const $ = RO(b);
  return /* @__PURE__ */ pe.createElement("div", {
    style: wO.outerContainer
  }, /* @__PURE__ */ pe.createElement("div", {
    style: {
      width: f && T && d && d.menu !== "" ? "calc(100% - 400px)" : "100%",
      maxWidth: f && T && d && d.menu !== "" ? "966px" : "1160px",
      margin: f && T && ((L = y == null ? void 0 : y.componentStyles) == null ? void 0 : L.margin) || ""
    }
  }, /* @__PURE__ */ pe.createElement(a.comp, hs({}, a, {
    UIOptions: w,
    searchData: $,
    messageHandlers: A
  }))), T && /* @__PURE__ */ pe.createElement(NO, {
    secondaryMenuProps: d,
    isMdUp: f
  }));
}, UO = (a) => {
  const r = (i) => {
    let {
      quickPanel: u,
      basename: c,
      searchData: f,
      UIOptions: d,
      ...h
    } = i ? {
      ...i
    } : {};
    u = u || !0, c = c || "", h.search = h.search || ((b) => console.log("New query = ", b));
    const m = f && (typeof f == "object" && !Array.isArray(f) || Array.isArray(f) && f.length > 0);
    let y = !0;
    try {
      y = window.self !== window.top;
    } catch {
      y = !0;
    }
    return /* @__PURE__ */ pe.createElement(C.Fragment, null, m || d && d.sandbox || !y ? /* @__PURE__ */ pe.createElement(S2, {
      basename: c + (i.baseURL || "")
    }, /* @__PURE__ */ pe.createElement(TO, {
      themeName: d && d.themeName,
      theme: d && d.theme,
      reloadPath: `/${c + (i.baseURL || "")}`
    }, /* @__PURE__ */ pe.createElement(PE, null, /* @__PURE__ */ pe.createElement(qv, {
      path: "*",
      element: /* @__PURE__ */ pe.createElement(BO, hs({}, i, {
        comp: a,
        quickPanel: u,
        format: d && d.format,
        searchData: f,
        UIOptions: d,
        basename: c
      }))
    })))) : null, !m && d && d.sandbox ? /* @__PURE__ */ pe.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
        color: "white"
      }
    }, /* @__PURE__ */ pe.createElement("h6", {
      style: {
        margin: "5px"
      }
    }, "No search data received. Component will not be loaded...")) : null);
  };
  return r.initHD = DO, r;
};
function jO(a, r) {
  r === void 0 && (r = {});
  var i = r.insertAt;
  if (!(typeof document > "u")) {
    var u = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", i === "top" && u.firstChild ? u.insertBefore(c, u.firstChild) : u.appendChild(c), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
  }
}
var LO = `/* placeholder animations */
.imgComponentStyles_placeholder__GXJke {
    margin: 0 auto;
    width: 100%;
    height: 18px;
    border-radius: 8px;
    background-color: #eee;
}

@keyframes imgComponentStyles_placeHolderShimmer__5-fnD {
    0% {
        background-position: -468px 0
    }

    100% {
        background-position: 468px 0
    }
}

.imgComponentStyles_animated-background__vGXc6 {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: imgComponentStyles_placeHolderShimmer__5-fnD;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 15%, #b2b2b2 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100%;
    border-radius: 20px;
    position: relative;
}

/* blinking dot */
@keyframes imgComponentStyles_up-right__Y-xzl {
    0% {
        transform: scale(1);
        opacity: .25
    }

    50% {
        transform: scale (1, 5);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: .25;
    }
}

.imgComponentStyles_border__Lvjsc {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    opacity: .25;
}

.imgComponentStyles_dot-animation__T9Onq {
    background-color: white;
    position: relative;
    top: -12px;
    left: 30px;
    -webkit-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -moz-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -o-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
}`;
jO(LO);
const kO = UO(Px);
export {
  kO as default
};
