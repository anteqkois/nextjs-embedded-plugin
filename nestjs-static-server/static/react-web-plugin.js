var g = { exports: {} }, v = {}, C = { exports: {} }, n = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d = Symbol.for("react.element"), A = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), B = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), $ = Symbol.iterator;
function G(e) {
  return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
}
var O = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, P = Object.assign, I = {};
function y(e, t, o) {
  this.props = e, this.context = t, this.refs = I, this.updater = o || O;
}
y.prototype.isReactComponent = {};
y.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
y.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function T() {
}
T.prototype = y.prototype;
function E(e, t, o) {
  this.props = e, this.context = t, this.refs = I, this.updater = o || O;
}
var b = E.prototype = new T();
b.constructor = E;
P(b, y.prototype);
b.isPureReactComponent = !0;
var j = Array.isArray, N = Object.prototype.hasOwnProperty, R = { current: null }, U = { key: !0, ref: !0, __self: !0, __source: !0 };
function D(e, t, o) {
  var r, u = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) N.call(t, r) && !U.hasOwnProperty(r) && (u[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) u.children = o;
  else if (1 < l) {
    for (var c = Array(l), a = 0; a < l; a++) c[a] = arguments[a + 2];
    u.children = c;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) u[r] === void 0 && (u[r] = l[r]);
  return { $$typeof: d, type: e, key: i, ref: s, props: u, _owner: R.current };
}
function K(e, t) {
  return { $$typeof: d, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function k(e) {
  return typeof e == "object" && e !== null && e.$$typeof === d;
}
function Q(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(o) {
    return t[o];
  });
}
var w = /\/+/g;
function S(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Q("" + e.key) : t.toString(36);
}
function h(e, t, o, r, u) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case d:
        case A:
          s = !0;
      }
  }
  if (s) return s = e, u = u(s), e = r === "" ? "." + S(s, 0) : r, j(u) ? (o = "", e != null && (o = e.replace(w, "$&/") + "/"), h(u, t, o, "", function(a) {
    return a;
  })) : u != null && (k(u) && (u = K(u, o + (!u.key || s && s.key === u.key ? "" : ("" + u.key).replace(w, "$&/") + "/") + e)), t.push(u)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", j(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var c = r + S(i, l);
    s += h(i, t, o, c, u);
  }
  else if (c = G(e), typeof c == "function") for (e = c.call(e), l = 0; !(i = e.next()).done; ) i = i.value, c = r + S(i, l++), s += h(i, t, o, c, u);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function _(e, t, o) {
  if (e == null) return e;
  var r = [], u = 0;
  return h(e, r, "", "", function(i) {
    return t.call(o, i, u++);
  }), r;
}
function X(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(o) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
    }, function(o) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var f = { current: null }, m = { transition: null }, Z = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: m, ReactCurrentOwner: R };
function F() {
  throw Error("act(...) is not supported in production builds of React.");
}
n.Children = { map: _, forEach: function(e, t, o) {
  _(e, function() {
    t.apply(this, arguments);
  }, o);
}, count: function(e) {
  var t = 0;
  return _(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return _(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
n.Component = y;
n.Fragment = V;
n.Profiler = M;
n.PureComponent = E;
n.StrictMode = q;
n.Suspense = J;
n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z;
n.act = F;
n.cloneElement = function(e, t, o) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = P({}, e.props), u = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = R.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (c in t) N.call(t, c) && !U.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = o;
  else if (1 < c) {
    l = Array(c);
    for (var a = 0; a < c; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: d, type: e.type, key: u, ref: i, props: r, _owner: s };
};
n.createContext = function(e) {
  return e = { $$typeof: B, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: z, _context: e }, e.Consumer = e;
};
n.createElement = D;
n.createFactory = function(e) {
  var t = D.bind(null, e);
  return t.type = e, t;
};
n.createRef = function() {
  return { current: null };
};
n.forwardRef = function(e) {
  return { $$typeof: H, render: e };
};
n.isValidElement = k;
n.lazy = function(e) {
  return { $$typeof: Y, _payload: { _status: -1, _result: e }, _init: X };
};
n.memo = function(e, t) {
  return { $$typeof: W, type: e, compare: t === void 0 ? null : t };
};
n.startTransition = function(e) {
  var t = m.transition;
  m.transition = {};
  try {
    e();
  } finally {
    m.transition = t;
  }
};
n.unstable_act = F;
n.useCallback = function(e, t) {
  return f.current.useCallback(e, t);
};
n.useContext = function(e) {
  return f.current.useContext(e);
};
n.useDebugValue = function() {
};
n.useDeferredValue = function(e) {
  return f.current.useDeferredValue(e);
};
n.useEffect = function(e, t) {
  return f.current.useEffect(e, t);
};
n.useId = function() {
  return f.current.useId();
};
n.useImperativeHandle = function(e, t, o) {
  return f.current.useImperativeHandle(e, t, o);
};
n.useInsertionEffect = function(e, t) {
  return f.current.useInsertionEffect(e, t);
};
n.useLayoutEffect = function(e, t) {
  return f.current.useLayoutEffect(e, t);
};
n.useMemo = function(e, t) {
  return f.current.useMemo(e, t);
};
n.useReducer = function(e, t, o) {
  return f.current.useReducer(e, t, o);
};
n.useRef = function(e) {
  return f.current.useRef(e);
};
n.useState = function(e) {
  return f.current.useState(e);
};
n.useSyncExternalStore = function(e, t, o) {
  return f.current.useSyncExternalStore(e, t, o);
};
n.useTransition = function() {
  return f.current.useTransition();
};
n.version = "18.3.1";
C.exports = n;
var x = C.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee = x, te = Symbol.for("react.element"), re = Symbol.for("react.fragment"), ne = Object.prototype.hasOwnProperty, oe = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
function L(e, t, o) {
  var r, u = {}, i = null, s = null;
  o !== void 0 && (i = "" + o), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) ne.call(t, r) && !ue.hasOwnProperty(r) && (u[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) u[r] === void 0 && (u[r] = t[r]);
  return { $$typeof: te, type: e, key: i, ref: s, props: u, _owner: oe.current };
}
v.Fragment = re;
v.jsx = L;
v.jsxs = L;
g.exports = v;
var p = g.exports;
const ie = ({ config: e }) => {
  const [t, o] = x.useState(!1);
  return x.useEffect(() => {
    console.log("Plugin initialized with config:", e);
  }, [e]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "fixed bottom-2 right-2 border border-purple-700 px-4 py-2 rounded-md text-slate-100",
        onClick: () => o((r) => !r),
        children: "Open"
      }
    ),
    t ? /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: "my-plugin-container",
        className: "fixed bottom-16 right-2 border border-purple-700 px-4 py-2 rounded-md text-slate-100",
        children: [
          /* @__PURE__ */ p.jsx("h1", { children: "My Plugin UI" }),
          /* @__PURE__ */ p.jsx("p", { children: "This is your plugin's user interface." }),
          /* @__PURE__ */ p.jsx("p", { children: "Plugin configuration." }),
          /* @__PURE__ */ p.jsx("code", { children: JSON.stringify(e) })
        ]
      }
    ) : null
  ] });
};
export {
  ie as Plugin
};
