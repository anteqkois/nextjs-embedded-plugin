var w = { exports: {} }, v = {}, g = { exports: {} }, n = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d = Symbol.for("react.element"), L = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), M = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), J = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), k = Symbol.iterator;
function Y(e) {
  return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
}
var C = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, O = Object.assign, P = {};
function y(e, t, o) {
  this.props = e, this.context = t, this.refs = P, this.updater = o || C;
}
y.prototype.isReactComponent = {};
y.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
y.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function I() {
}
I.prototype = y.prototype;
function x(e, t, o) {
  this.props = e, this.context = t, this.refs = P, this.updater = o || C;
}
var b = x.prototype = new I();
b.constructor = x;
O(b, y.prototype);
b.isPureReactComponent = !0;
var $ = Array.isArray, T = Object.prototype.hasOwnProperty, E = { current: null }, N = { key: !0, ref: !0, __self: !0, __source: !0 };
function U(e, t, o) {
  var r, u = {}, i = null, c = null;
  if (t != null) for (r in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (i = "" + t.key), t) T.call(t, r) && !N.hasOwnProperty(r) && (u[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) u.children = o;
  else if (1 < l) {
    for (var s = Array(l), a = 0; a < l; a++) s[a] = arguments[a + 2];
    u.children = s;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) u[r] === void 0 && (u[r] = l[r]);
  return { $$typeof: d, type: e, key: i, ref: c, props: u, _owner: E.current };
}
function G(e, t) {
  return { $$typeof: d, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function R(e) {
  return typeof e == "object" && e !== null && e.$$typeof === d;
}
function K(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(o) {
    return t[o];
  });
}
var j = /\/+/g;
function S(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? K("" + e.key) : t.toString(36);
}
function h(e, t, o, r, u) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var c = !1;
  if (e === null) c = !0;
  else switch (i) {
    case "string":
    case "number":
      c = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case d:
        case L:
          c = !0;
      }
  }
  if (c) return c = e, u = u(c), e = r === "" ? "." + S(c, 0) : r, $(u) ? (o = "", e != null && (o = e.replace(j, "$&/") + "/"), h(u, t, o, "", function(a) {
    return a;
  })) : u != null && (R(u) && (u = G(u, o + (!u.key || c && c.key === u.key ? "" : ("" + u.key).replace(j, "$&/") + "/") + e)), t.push(u)), 1;
  if (c = 0, r = r === "" ? "." : r + ":", $(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var s = r + S(i, l);
    c += h(i, t, o, s, u);
  }
  else if (s = Y(e), typeof s == "function") for (e = s.call(e), l = 0; !(i = e.next()).done; ) i = i.value, s = r + S(i, l++), c += h(i, t, o, s, u);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return c;
}
function _(e, t, o) {
  if (e == null) return e;
  var r = [], u = 0;
  return h(e, r, "", "", function(i) {
    return t.call(o, i, u++);
  }), r;
}
function Q(e) {
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
var f = { current: null }, m = { transition: null }, X = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: m, ReactCurrentOwner: E };
function D() {
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
  if (!R(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
n.Component = y;
n.Fragment = z;
n.Profiler = V;
n.PureComponent = x;
n.StrictMode = A;
n.Suspense = H;
n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X;
n.act = D;
n.cloneElement = function(e, t, o) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = O({}, e.props), u = e.key, i = e.ref, c = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, c = E.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (s in t) T.call(t, s) && !N.hasOwnProperty(s) && (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = o;
  else if (1 < s) {
    l = Array(s);
    for (var a = 0; a < s; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: d, type: e.type, key: u, ref: i, props: r, _owner: c };
};
n.createContext = function(e) {
  return e = { $$typeof: M, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: q, _context: e }, e.Consumer = e;
};
n.createElement = U;
n.createFactory = function(e) {
  var t = U.bind(null, e);
  return t.type = e, t;
};
n.createRef = function() {
  return { current: null };
};
n.forwardRef = function(e) {
  return { $$typeof: B, render: e };
};
n.isValidElement = R;
n.lazy = function(e) {
  return { $$typeof: W, _payload: { _status: -1, _result: e }, _init: Q };
};
n.memo = function(e, t) {
  return { $$typeof: J, type: e, compare: t === void 0 ? null : t };
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
n.unstable_act = D;
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
g.exports = n;
var Z = g.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee = Z, te = Symbol.for("react.element"), re = Symbol.for("react.fragment"), ne = Object.prototype.hasOwnProperty, oe = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
function F(e, t, o) {
  var r, u = {}, i = null, c = null;
  o !== void 0 && (i = "" + o), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (c = t.ref);
  for (r in t) ne.call(t, r) && !ue.hasOwnProperty(r) && (u[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) u[r] === void 0 && (u[r] = t[r]);
  return { $$typeof: te, type: e, key: i, ref: c, props: u, _owner: oe.current };
}
v.Fragment = re;
v.jsx = F;
v.jsxs = F;
w.exports = v;
var p = w.exports;
const ie = ({ config: e }) => {
  const [t, o] = React.useState(!1);
  return React.useEffect(() => {
    console.log("Plugin initialized with config:", e);
  }, [e]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "fixed bottom-2 right-2 border border-purple-700 px-4 py-2 rounded-md bg-zinc-950 text-zinc-100",
        onClick: () => o((r) => !r),
        children: "Open"
      }
    ),
    t ? /* @__PURE__ */ p.jsxs(
      "div",
      {
        id: "my-plugin-container",
        className: "fixed bottom-16 right-2 border border-purple-700 px-4 py-2 rounded-md bg-zinc-950 text-zinc-100",
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
