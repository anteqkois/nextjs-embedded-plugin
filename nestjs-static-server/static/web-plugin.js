var Yr = { exports: {} }, Je = {}, Br = { exports: {} }, m = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Wt() {
  if (yt) return m;
  yt = 1;
  var V = Symbol.for("react.element"), v = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.iterator;
  function re(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, $e = {};
  function ae(n, i, g) {
    this.props = n, this.context = i, this.refs = $e, this.updater = g || J;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(n, i) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, i, "setState");
  }, ae.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function oe() {
  }
  oe.prototype = ae.prototype;
  function A(n, i, g) {
    this.props = n, this.context = i, this.refs = $e, this.updater = g || J;
  }
  var ge = A.prototype = new oe();
  ge.constructor = A, se(ge, ae.prototype), ge.isPureReactComponent = !0;
  var ue = Array.isArray, M = Object.prototype.hasOwnProperty, G = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, i, g) {
    var b, R = {}, k = null, O = null;
    if (i != null) for (b in i.ref !== void 0 && (O = i.ref), i.key !== void 0 && (k = "" + i.key), i) M.call(i, b) && !ce.hasOwnProperty(b) && (R[b] = i[b]);
    var T = arguments.length - 2;
    if (T === 1) R.children = g;
    else if (1 < T) {
      for (var w = Array(T), N = 0; N < T; N++) w[N] = arguments[N + 2];
      R.children = w;
    }
    if (n && n.defaultProps) for (b in T = n.defaultProps, T) R[b] === void 0 && (R[b] = T[b]);
    return { $$typeof: V, type: n, key: k, ref: O, props: R, _owner: G.current };
  }
  function Se(n, i) {
    return { $$typeof: V, type: n.type, key: i, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Te(n) {
    return typeof n == "object" && n !== null && n.$$typeof === V;
  }
  function Be(n) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(g) {
      return i[g];
    });
  }
  var Oe = /\/+/g;
  function q(n, i) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : i.toString(36);
  }
  function X(n, i, g, b, R) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var O = !1;
    if (n === null) O = !0;
    else switch (k) {
      case "string":
      case "number":
        O = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case V:
          case v:
            O = !0;
        }
    }
    if (O) return O = n, R = R(O), n = b === "" ? "." + q(O, 0) : b, ue(R) ? (g = "", n != null && (g = n.replace(Oe, "$&/") + "/"), X(R, i, g, "", function(N) {
      return N;
    })) : R != null && (Te(R) && (R = Se(R, g + (!R.key || O && O.key === R.key ? "" : ("" + R.key).replace(Oe, "$&/") + "/") + n)), i.push(R)), 1;
    if (O = 0, b = b === "" ? "." : b + ":", ue(n)) for (var T = 0; T < n.length; T++) {
      k = n[T];
      var w = b + q(k, T);
      O += X(k, i, g, w, R);
    }
    else if (w = re(n), typeof w == "function") for (n = w.call(n), T = 0; !(k = n.next()).done; ) k = k.value, w = b + q(k, T++), O += X(k, i, g, w, R);
    else if (k === "object") throw i = String(n), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    return O;
  }
  function Y(n, i, g) {
    if (n == null) return n;
    var b = [], R = 0;
    return X(n, b, "", "", function(k) {
      return i.call(g, k, R++);
    }), b;
  }
  function ie(n) {
    if (n._status === -1) {
      var i = n._result;
      i = i(), i.then(function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = g);
      }, function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = g);
      }), n._status === -1 && (n._status = 0, n._result = i);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var l = { current: null }, fe = { transition: null }, Pe = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: fe, ReactCurrentOwner: G };
  function ye() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return m.Children = { map: Y, forEach: function(n, i, g) {
    Y(n, function() {
      i.apply(this, arguments);
    }, g);
  }, count: function(n) {
    var i = 0;
    return Y(n, function() {
      i++;
    }), i;
  }, toArray: function(n) {
    return Y(n, function(i) {
      return i;
    }) || [];
  }, only: function(n) {
    if (!Te(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, m.Component = ae, m.Fragment = de, m.Profiler = pe, m.PureComponent = A, m.StrictMode = H, m.Suspense = $, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, m.act = ye, m.cloneElement = function(n, i, g) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var b = se({}, n.props), R = n.key, k = n.ref, O = n._owner;
    if (i != null) {
      if (i.ref !== void 0 && (k = i.ref, O = G.current), i.key !== void 0 && (R = "" + i.key), n.type && n.type.defaultProps) var T = n.type.defaultProps;
      for (w in i) M.call(i, w) && !ce.hasOwnProperty(w) && (b[w] = i[w] === void 0 && T !== void 0 ? T[w] : i[w]);
    }
    var w = arguments.length - 2;
    if (w === 1) b.children = g;
    else if (1 < w) {
      T = Array(w);
      for (var N = 0; N < w; N++) T[N] = arguments[N + 2];
      b.children = T;
    }
    return { $$typeof: V, type: n.type, key: R, ref: k, props: b, _owner: O };
  }, m.createContext = function(n) {
    return n = { $$typeof: ne, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: te, _context: n }, n.Consumer = n;
  }, m.createElement = ve, m.createFactory = function(n) {
    var i = ve.bind(null, n);
    return i.type = n, i;
  }, m.createRef = function() {
    return { current: null };
  }, m.forwardRef = function(n) {
    return { $$typeof: Z, render: n };
  }, m.isValidElement = Te, m.lazy = function(n) {
    return { $$typeof: L, _payload: { _status: -1, _result: n }, _init: ie };
  }, m.memo = function(n, i) {
    return { $$typeof: ee, type: n, compare: i === void 0 ? null : i };
  }, m.startTransition = function(n) {
    var i = fe.transition;
    fe.transition = {};
    try {
      n();
    } finally {
      fe.transition = i;
    }
  }, m.unstable_act = ye, m.useCallback = function(n, i) {
    return l.current.useCallback(n, i);
  }, m.useContext = function(n) {
    return l.current.useContext(n);
  }, m.useDebugValue = function() {
  }, m.useDeferredValue = function(n) {
    return l.current.useDeferredValue(n);
  }, m.useEffect = function(n, i) {
    return l.current.useEffect(n, i);
  }, m.useId = function() {
    return l.current.useId();
  }, m.useImperativeHandle = function(n, i, g) {
    return l.current.useImperativeHandle(n, i, g);
  }, m.useInsertionEffect = function(n, i) {
    return l.current.useInsertionEffect(n, i);
  }, m.useLayoutEffect = function(n, i) {
    return l.current.useLayoutEffect(n, i);
  }, m.useMemo = function(n, i) {
    return l.current.useMemo(n, i);
  }, m.useReducer = function(n, i, g) {
    return l.current.useReducer(n, i, g);
  }, m.useRef = function(n) {
    return l.current.useRef(n);
  }, m.useState = function(n) {
    return l.current.useState(n);
  }, m.useSyncExternalStore = function(n, i, g) {
    return l.current.useSyncExternalStore(n, i, g);
  }, m.useTransition = function() {
    return l.current.useTransition();
  }, m.version = "18.3.1", m;
}
var Qe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Qe.exports;
var ht;
function Vt() {
  return ht || (ht = 1, function(V, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var de = "18.3.1", H = Symbol.for("react.element"), pe = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), ee = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), $e = Symbol.for("react.offscreen"), ae = Symbol.iterator, oe = "@@iterator";
      function A(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ae && e[ae] || e[oe];
        return typeof r == "function" ? r : null;
      }
      var ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, M = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, G = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {}, ve = null;
      function Se(e) {
        ve = e;
      }
      ce.setExtraStackFrame = function(e) {
        ve = e;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = ce.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Te = !1, Be = !1, Oe = !1, q = !1, X = !1, Y = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: G
      };
      Y.ReactDebugCurrentFrame = ce, Y.ReactCurrentActQueue = M;
      function ie(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("warn", e, a);
        }
      }
      function l(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("error", e, a);
        }
      }
      function fe(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var d = a.map(function(f) {
            return String(f);
          });
          d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
        }
      }
      var Pe = {};
      function ye(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (Pe[c])
            return;
          l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Pe[c] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          ye(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          ye(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          ye(e, "setState");
        }
      }, i = Object.assign, g = {};
      Object.freeze(g);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var R = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              ie("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in R)
          R.hasOwnProperty(O) && k(O, R[O]);
      }
      function T() {
      }
      T.prototype = b.prototype;
      function w(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      var N = w.prototype = new T();
      N.constructor = w, i(N, b.prototype), N.isPureReactComponent = !0;
      function br() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Ze = Array.isArray;
      function Le(e) {
        return Ze(e);
      }
      function Er(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Me(e) {
        try {
          return _e(e), !1;
        } catch {
          return !0;
        }
      }
      function _e(e) {
        return "" + e;
      }
      function ke(e) {
        if (Me(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(e)), _e(e);
      }
      function er(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function je(e) {
        return e.displayName || "Context";
      }
      function le(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case te:
            return "Fragment";
          case pe:
            return "Portal";
          case Z:
            return "Profiler";
          case ne:
            return "StrictMode";
          case U:
            return "Suspense";
          case re:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ee:
              var r = e;
              return je(r) + ".Consumer";
            case $:
              var a = e;
              return je(a._context) + ".Provider";
            case L:
              return er(e, e.render, "ForwardRef");
            case J:
              var o = e.displayName || null;
              return o !== null ? o : le(e.type) || "Memo";
            case se: {
              var c = e, d = c._payload, f = c._init;
              try {
                return le(f(d));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xe = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, rr, tr, We;
      We = {};
      function ze(e) {
        if (xe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function be(e) {
        if (xe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Rr(e, r) {
        var a = function() {
          rr || (rr = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function nr(e, r) {
        var a = function() {
          tr || (tr = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ar(e) {
        if (typeof e.ref == "string" && G.current && e.__self && G.current.stateNode !== e.__self) {
          var r = le(G.current.type);
          We[r] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var Ae = function(e, r, a, o, c, d, f) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: H,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: d
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Cr(e, r, a) {
        var o, c = {}, d = null, f = null, y = null, E = null;
        if (r != null) {
          ze(r) && (f = r.ref, ar(r)), be(r) && (ke(r.key), d = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            xe.call(r, o) && !Ne.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          c.children = a;
        else if (P > 1) {
          for (var j = Array(P), x = 0; x < P; x++)
            j[x] = arguments[x + 2];
          Object.freeze && Object.freeze(j), c.children = j;
        }
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (o in I)
            c[o] === void 0 && (c[o] = I[o]);
        }
        if (d || f) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && Rr(c, W), f && nr(c, W);
        }
        return Ae(e, d, f, y, E, G.current, c);
      }
      function wr(e, r) {
        var a = Ae(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Sr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = i({}, e.props), d = e.key, f = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          ze(r) && (f = r.ref, P = G.current), be(r) && (ke(r.key), d = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            xe.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? c[o] = j[o] : c[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          c.children = a;
        else if (x > 1) {
          for (var I = Array(x), W = 0; W < x; W++)
            I[W] = arguments[W + 2];
          c.children = I;
        }
        return Ae(e.type, d, f, y, E, P, c);
      }
      function Ee(e) {
        return typeof e == "object" && e !== null && e.$$typeof === H;
      }
      var or = ".", Tr = ":";
      function Or(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Ve = !1, ur = /\/+/g;
      function he(e) {
        return e.replace(ur, "$&/");
      }
      function De(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Or("" + e.key)) : r.toString(36);
      }
      function Re(e, r, a, o, c) {
        var d = typeof e;
        (d === "undefined" || d === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (d) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case H:
                case pe:
                  f = !0;
              }
          }
        if (f) {
          var y = e, E = c(y), P = o === "" ? or + De(y, 0) : o;
          if (Le(E)) {
            var j = "";
            P != null && (j = he(P) + "/"), Re(E, r, j, "", function(Nt) {
              return Nt;
            });
          } else E != null && (Ee(E) && (E.key && (!y || y.key !== E.key) && ke(E.key), E = wr(
            E,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (E.key && (!y || y.key !== E.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              he("" + E.key) + "/"
            ) : "") + P
          )), r.push(E));
          return 1;
        }
        var x, I, W = 0, z = o === "" ? or : o + Tr;
        if (Le(e))
          for (var gr = 0; gr < e.length; gr++)
            x = e[gr], I = z + De(x, gr), W += Re(x, r, a, I, c);
        else {
          var Ur = A(e);
          if (typeof Ur == "function") {
            var dt = e;
            Ur === dt.entries && (Ve || ie("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Lt = Ur.call(dt), pt, Mt = 0; !(pt = Lt.next()).done; )
              x = pt.value, I = z + De(x, Mt++), W += Re(x, r, a, I, c);
          } else if (d === "object") {
            var vt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (vt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : vt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return W;
      }
      function Ie(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return Re(e, o, "", "", function(d) {
          return r.call(a, d, c++);
        }), o;
      }
      function Pr(e) {
        var r = 0;
        return Ie(e, function() {
          r++;
        }), r;
      }
      function ir(e, r, a) {
        Ie(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function kr(e) {
        return Ie(e, function(r) {
          return r;
        }) || [];
      }
      function sr(e) {
        if (!Ee(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function cr(e) {
        var r = {
          $$typeof: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: $,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var d = {
            $$typeof: ee,
            _context: r
          };
          Object.defineProperties(d, {
            Provider: {
              get: function() {
                return o || (o = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, l("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                c || (ie("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), c = !0);
              }
            }
          }), r.Consumer = d;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, qe = 0, Ke = 1, fr = 2;
      function jr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(d) {
            if (e._status === qe || e._status === Fe) {
              var f = e;
              f._status = Ke, f._result = d;
            }
          }, function(d) {
            if (e._status === qe || e._status === Fe) {
              var f = e;
              f._status = fr, f._result = d;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = qe, o._result = a;
          }
        }
        if (e._status === Ke) {
          var c = e._result;
          return c === void 0 && l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function xr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: se,
          _payload: r,
          _init: jr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(d) {
                l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = d, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(d) {
                l("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = d, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Ar(e) {
        e != null && e.$$typeof === J ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: L,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var lr;
      lr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === te || e === Z || X || e === ne || e === U || e === re || q || e === $e || Te || Be || Oe || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === J || e.$$typeof === $ || e.$$typeof === ee || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === lr || e.getModuleId !== void 0));
      }
      function u(e, r) {
        t(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: J,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function s() {
        var e = ge.current;
        return e === null && l(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function p(e) {
        var r = s();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function C(e) {
        var r = s();
        return r.useState(e);
      }
      function S(e, r, a) {
        var o = s();
        return o.useReducer(e, r, a);
      }
      function _(e) {
        var r = s();
        return r.useRef(e);
      }
      function h(e, r) {
        var a = s();
        return a.useEffect(e, r);
      }
      function B(e, r) {
        var a = s();
        return a.useInsertionEffect(e, r);
      }
      function D(e, r) {
        var a = s();
        return a.useLayoutEffect(e, r);
      }
      function F(e, r) {
        var a = s();
        return a.useCallback(e, r);
      }
      function Q(e, r) {
        var a = s();
        return a.useMemo(e, r);
      }
      function Ce(e, r, a) {
        var o = s();
        return o.useImperativeHandle(e, r, a);
      }
      function me(e, r) {
        {
          var a = s();
          return a.useDebugValue(e, r);
        }
      }
      function K() {
        var e = s();
        return e.useTransition();
      }
      function He(e) {
        var r = s();
        return r.useDeferredValue(e);
      }
      function Dr() {
        var e = s();
        return e.useId();
      }
      function Ir(e, r, a) {
        var o = s();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ge = 0, zr, qr, Kr, Hr, Gr, Jr, Xr;
      function Qr() {
      }
      Qr.__reactDisabledLog = !0;
      function _t() {
        {
          if (Ge === 0) {
            zr = console.log, qr = console.info, Kr = console.warn, Hr = console.error, Gr = console.group, Jr = console.groupCollapsed, Xr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Qr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Ge++;
        }
      }
      function bt() {
        {
          if (Ge--, Ge === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: i({}, e, {
                value: zr
              }),
              info: i({}, e, {
                value: qr
              }),
              warn: i({}, e, {
                value: Kr
              }),
              error: i({}, e, {
                value: Hr
              }),
              group: i({}, e, {
                value: Gr
              }),
              groupCollapsed: i({}, e, {
                value: Jr
              }),
              groupEnd: i({}, e, {
                value: Xr
              })
            });
          }
          Ge < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Fr = Y.ReactCurrentDispatcher, $r;
      function dr(e, r, a) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              $r = o && o[1] || "";
            }
          return `
` + $r + e;
        }
      }
      var Lr = !1, pr;
      {
        var Et = typeof WeakMap == "function" ? WeakMap : Map;
        pr = new Et();
      }
      function Zr(e, r) {
        if (!e || Lr)
          return "";
        {
          var a = pr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Lr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var d;
        d = Fr.current, Fr.current = null, _t();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (z) {
                o = z;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, j = E.length - 1; P >= 1 && j >= 0 && y[P] !== E[j]; )
              j--;
            for (; P >= 1 && j >= 0; P--, j--)
              if (y[P] !== E[j]) {
                if (P !== 1 || j !== 1)
                  do
                    if (P--, j--, j < 0 || y[P] !== E[j]) {
                      var x = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && pr.set(e, x), x;
                    }
                  while (P >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          Lr = !1, Fr.current = d, bt(), Error.prepareStackTrace = c;
        }
        var I = e ? e.displayName || e.name : "", W = I ? dr(I) : "";
        return typeof e == "function" && pr.set(e, W), W;
      }
      function Rt(e, r, a) {
        return Zr(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function vr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Zr(e, Ct(e));
        if (typeof e == "string")
          return dr(e);
        switch (e) {
          case U:
            return dr("Suspense");
          case re:
            return dr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return Rt(e.render);
            case J:
              return vr(e.type, r, a);
            case se: {
              var o = e, c = o._payload, d = o._init;
              try {
                return vr(d(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var et = {}, rt = Y.ReactDebugCurrentFrame;
      function yr(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          rt.setExtraStackFrame(a);
        } else
          rt.setExtraStackFrame(null);
      }
      function wt(e, r, a, o, c) {
        {
          var d = Function.call.bind(xe);
          for (var f in e)
            if (d(e, f)) {
              var y = void 0;
              try {
                if (typeof e[f] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (yr(c), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), yr(null)), y instanceof Error && !(y.message in et) && (et[y.message] = !0, yr(c), l("Failed %s type: %s", a, y.message), yr(null));
            }
        }
      }
      function Ue(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          Se(a);
        } else
          Se(null);
      }
      var Mr;
      Mr = !1;
      function tt() {
        if (G.current) {
          var e = le(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Tt(e) {
        return e != null ? St(e.__source) : "";
      }
      var nt = {};
      function Ot(e) {
        var r = tt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function at(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Ot(r);
          if (!nt[a]) {
            nt[a] = !0;
            var o = "";
            e && e._owner && e._owner !== G.current && (o = " It was passed a child from " + le(e._owner.type) + "."), Ue(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ue(null);
          }
        }
      }
      function ot(e, r) {
        if (typeof e == "object") {
          if (Le(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Ee(o) && at(o, r);
            }
          else if (Ee(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = A(e);
            if (typeof c == "function" && c !== e.entries)
              for (var d = c.call(e), f; !(f = d.next()).done; )
                Ee(f.value) && at(f.value, r);
          }
        }
      }
      function ut(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === J))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = le(r);
            wt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Mr) {
            Mr = !0;
            var c = le(r);
            l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ue(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ue(null);
              break;
            }
          }
          e.ref !== null && (Ue(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function it(e, r, a) {
        var o = t(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Tt(r);
          d ? c += d : c += tt();
          var f;
          e === null ? f = "null" : Le(e) ? f = "array" : e !== void 0 && e.$$typeof === H ? (f = "<" + (le(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, c);
        }
        var y = Cr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            ot(arguments[E], e);
        return e === te ? Pt(y) : ut(y), y;
      }
      var st = !1;
      function kt(e) {
        var r = it.bind(null, e);
        return r.type = e, st || (st = !0, ie("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ie("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function jt(e, r, a) {
        for (var o = Sr.apply(this, arguments), c = 2; c < arguments.length; c++)
          ot(arguments[c], o.type);
        return ut(o), o;
      }
      function xt(e, r) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && ie("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ct = !1, hr = null;
      function At(e) {
        if (hr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = V && V[r];
            hr = a.call(V, "timers").setImmediate;
          } catch {
            hr = function(c) {
              ct === !1 && (ct = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var d = new MessageChannel();
              d.port1.onmessage = c, d.port2.postMessage(void 0);
            };
          }
        return hr(e);
      }
      var Ye = 0, ft = !1;
      function lt(e) {
        {
          var r = Ye;
          Ye++, M.current === null && (M.current = []);
          var a = M.isBatchingLegacy, o;
          try {
            if (M.isBatchingLegacy = !0, o = e(), !a && M.didScheduleLegacyUpdate) {
              var c = M.current;
              c !== null && (M.didScheduleLegacyUpdate = !1, Vr(c));
            }
          } catch (I) {
            throw mr(r), I;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var d = o, f = !1, y = {
              then: function(I, W) {
                f = !0, d.then(function(z) {
                  mr(r), Ye === 0 ? Nr(z, I, W) : I(z);
                }, function(z) {
                  mr(r), W(z);
                });
              }
            };
            return !ft && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (ft = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (mr(r), Ye === 0) {
              var P = M.current;
              P !== null && (Vr(P), M.current = null);
              var j = {
                then: function(I, W) {
                  M.current === null ? (M.current = [], Nr(E, I, W)) : I(E);
                }
              };
              return j;
            } else {
              var x = {
                then: function(I, W) {
                  I(E);
                }
              };
              return x;
            }
          }
        }
      }
      function mr(e) {
        e !== Ye - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ye = e;
      }
      function Nr(e, r, a) {
        {
          var o = M.current;
          if (o !== null)
            try {
              Vr(o), At(function() {
                o.length === 0 ? (M.current = null, r(e)) : Nr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Wr = !1;
      function Vr(e) {
        if (!Wr) {
          Wr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Wr = !1;
          }
        }
      }
      var Dt = it, It = jt, Ft = kt, $t = {
        map: Ie,
        forEach: ir,
        count: Pr,
        toArray: kr,
        only: sr
      };
      v.Children = $t, v.Component = b, v.Fragment = te, v.Profiler = Z, v.PureComponent = w, v.StrictMode = ne, v.Suspense = U, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, v.act = lt, v.cloneElement = It, v.createContext = cr, v.createElement = Dt, v.createFactory = Ft, v.createRef = br, v.forwardRef = Ar, v.isValidElement = Ee, v.lazy = xr, v.memo = u, v.startTransition = xt, v.unstable_act = lt, v.useCallback = F, v.useContext = p, v.useDebugValue = me, v.useDeferredValue = He, v.useEffect = h, v.useId = Dr, v.useImperativeHandle = Ce, v.useInsertionEffect = B, v.useLayoutEffect = D, v.useMemo = Q, v.useReducer = S, v.useRef = _, v.useState = C, v.useSyncExternalStore = Ir, v.useTransition = K, v.version = de, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qe, Qe.exports)), Qe.exports;
}
process.env.NODE_ENV === "production" ? Br.exports = Wt() : Br.exports = Vt();
var _r = Br.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function Ut() {
  if (mt) return Je;
  mt = 1;
  var V = _r, v = Symbol.for("react.element"), de = Symbol.for("react.fragment"), H = Object.prototype.hasOwnProperty, pe = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(Z, $, ee) {
    var L, U = {}, re = null, J = null;
    ee !== void 0 && (re = "" + ee), $.key !== void 0 && (re = "" + $.key), $.ref !== void 0 && (J = $.ref);
    for (L in $) H.call($, L) && !te.hasOwnProperty(L) && (U[L] = $[L]);
    if (Z && Z.defaultProps) for (L in $ = Z.defaultProps, $) U[L] === void 0 && (U[L] = $[L]);
    return { $$typeof: v, type: Z, key: re, ref: J, props: U, _owner: pe.current };
  }
  return Je.Fragment = de, Je.jsx = ne, Je.jsxs = ne, Je;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function Yt() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && function() {
    var V = _r, v = Symbol.for("react.element"), de = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), Z = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), se = Symbol.iterator, $e = "@@iterator";
    function ae(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = se && t[se] || t[$e];
      return typeof u == "function" ? u : null;
    }
    var oe = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(t) {
      {
        for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          s[p - 1] = arguments[p];
        ge("error", t, s);
      }
    }
    function ge(t, u, s) {
      {
        var p = oe.ReactDebugCurrentFrame, C = p.getStackAddendum();
        C !== "" && (u += "%s", s = s.concat([C]));
        var S = s.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ue = !1, M = !1, G = !1, ce = !1, ve = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Te(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === H || t === te || ve || t === pe || t === ee || t === L || ce || t === J || ue || M || G || typeof t == "object" && t !== null && (t.$$typeof === re || t.$$typeof === U || t.$$typeof === ne || t.$$typeof === Z || t.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Se || t.getModuleId !== void 0));
    }
    function Be(t, u, s) {
      var p = t.displayName;
      if (p)
        return p;
      var C = u.displayName || u.name || "";
      return C !== "" ? s + "(" + C + ")" : s;
    }
    function Oe(t) {
      return t.displayName || "Context";
    }
    function q(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case H:
          return "Fragment";
        case de:
          return "Portal";
        case te:
          return "Profiler";
        case pe:
          return "StrictMode";
        case ee:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Z:
            var u = t;
            return Oe(u) + ".Consumer";
          case ne:
            var s = t;
            return Oe(s._context) + ".Provider";
          case $:
            return Be(t, t.render, "ForwardRef");
          case U:
            var p = t.displayName || null;
            return p !== null ? p : q(t.type) || "Memo";
          case re: {
            var C = t, S = C._payload, _ = C._init;
            try {
              return q(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, Y = 0, ie, l, fe, Pe, ye, n, i;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function b() {
      {
        if (Y === 0) {
          ie = console.log, l = console.info, fe = console.warn, Pe = console.error, ye = console.group, n = console.groupCollapsed, i = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function R() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, t, {
              value: ie
            }),
            info: X({}, t, {
              value: l
            }),
            warn: X({}, t, {
              value: fe
            }),
            error: X({}, t, {
              value: Pe
            }),
            group: X({}, t, {
              value: ye
            }),
            groupCollapsed: X({}, t, {
              value: n
            }),
            groupEnd: X({}, t, {
              value: i
            })
          });
        }
        Y < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = oe.ReactCurrentDispatcher, O;
    function T(t, u, s) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (C) {
            var p = C.stack.trim().match(/\n( *(at )?)/);
            O = p && p[1] || "";
          }
        return `
` + O + t;
      }
    }
    var w = !1, N;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      N = new br();
    }
    function Ze(t, u) {
      if (!t || w)
        return "";
      {
        var s = N.get(t);
        if (s !== void 0)
          return s;
      }
      var p;
      w = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, b();
      try {
        if (u) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (K) {
              p = K;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (K) {
              p = K;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            p = K;
          }
          t();
        }
      } catch (K) {
        if (K && p && typeof K.stack == "string") {
          for (var h = K.stack.split(`
`), B = p.stack.split(`
`), D = h.length - 1, F = B.length - 1; D >= 1 && F >= 0 && h[D] !== B[F]; )
            F--;
          for (; D >= 1 && F >= 0; D--, F--)
            if (h[D] !== B[F]) {
              if (D !== 1 || F !== 1)
                do
                  if (D--, F--, F < 0 || h[D] !== B[F]) {
                    var Q = `
` + h[D].replace(" at new ", " at ");
                    return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), typeof t == "function" && N.set(t, Q), Q;
                  }
                while (D >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        w = !1, k.current = S, R(), Error.prepareStackTrace = C;
      }
      var Ce = t ? t.displayName || t.name : "", me = Ce ? T(Ce) : "";
      return typeof t == "function" && N.set(t, me), me;
    }
    function Le(t, u, s) {
      return Ze(t, !1);
    }
    function Er(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Me(t, u, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ze(t, Er(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case ee:
          return T("Suspense");
        case L:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case $:
            return Le(t.render);
          case U:
            return Me(t.type, u, s);
          case re: {
            var p = t, C = p._payload, S = p._init;
            try {
              return Me(S(C), u, s);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, ke = {}, er = oe.ReactDebugCurrentFrame;
    function je(t) {
      if (t) {
        var u = t._owner, s = Me(t.type, t._source, u ? u.type : null);
        er.setExtraStackFrame(s);
      } else
        er.setExtraStackFrame(null);
    }
    function le(t, u, s, p, C) {
      {
        var S = Function.call.bind(_e);
        for (var _ in t)
          if (S(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var B = Error((p || "React class") + ": " + s + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              h = t[_](u, _, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              h = D;
            }
            h && !(h instanceof Error) && (je(C), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, _, typeof h), je(null)), h instanceof Error && !(h.message in ke) && (ke[h.message] = !0, je(C), A("Failed %s type: %s", s, h.message), je(null));
          }
      }
    }
    var xe = Array.isArray;
    function Ne(t) {
      return xe(t);
    }
    function rr(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, s = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function tr(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function ze(t) {
      if (tr(t))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(t)), We(t);
    }
    var be = oe.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nr, ar, Ae;
    Ae = {};
    function Cr(t) {
      if (_e.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function wr(t) {
      if (_e.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Sr(t, u) {
      if (typeof t.ref == "string" && be.current && u && be.current.stateNode !== u) {
        var s = q(be.current.type);
        Ae[s] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(be.current.type), t.ref), Ae[s] = !0);
      }
    }
    function Ee(t, u) {
      {
        var s = function() {
          nr || (nr = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function or(t, u) {
      {
        var s = function() {
          ar || (ar = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Tr = function(t, u, s, p, C, S, _) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: s,
        props: _,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Or(t, u, s, p, C) {
      {
        var S, _ = {}, h = null, B = null;
        s !== void 0 && (ze(s), h = "" + s), wr(u) && (ze(u.key), h = "" + u.key), Cr(u) && (B = u.ref, Sr(u, C));
        for (S in u)
          _e.call(u, S) && !Rr.hasOwnProperty(S) && (_[S] = u[S]);
        if (t && t.defaultProps) {
          var D = t.defaultProps;
          for (S in D)
            _[S] === void 0 && (_[S] = D[S]);
        }
        if (h || B) {
          var F = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && Ee(_, F), B && or(_, F);
        }
        return Tr(t, h, B, C, p, be.current, _);
      }
    }
    var Ve = oe.ReactCurrentOwner, ur = oe.ReactDebugCurrentFrame;
    function he(t) {
      if (t) {
        var u = t._owner, s = Me(t.type, t._source, u ? u.type : null);
        ur.setExtraStackFrame(s);
      } else
        ur.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Re(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function Ie() {
      {
        if (Ve.current) {
          var t = q(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Pr(t) {
      return "";
    }
    var ir = {};
    function kr(t) {
      {
        var u = Ie();
        if (!u) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (u = `

Check the top-level render call using <` + s + ">.");
        }
        return u;
      }
    }
    function sr(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = kr(u);
        if (ir[s])
          return;
        ir[s] = !0;
        var p = "";
        t && t._owner && t._owner !== Ve.current && (p = " It was passed a child from " + q(t._owner.type) + "."), he(t), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), he(null);
      }
    }
    function cr(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var s = 0; s < t.length; s++) {
            var p = t[s];
            Re(p) && sr(p, u);
          }
        else if (Re(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = ae(t);
          if (typeof C == "function" && C !== t.entries)
            for (var S = C.call(t), _; !(_ = S.next()).done; )
              Re(_.value) && sr(_.value, u);
        }
      }
    }
    function Fe(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var s;
        if (typeof u == "function")
          s = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === U))
          s = u.propTypes;
        else
          return;
        if (s) {
          var p = q(u);
          le(s, t.props, "prop", p, t);
        } else if (u.PropTypes !== void 0 && !De) {
          De = !0;
          var C = q(u);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qe(t) {
      {
        for (var u = Object.keys(t.props), s = 0; s < u.length; s++) {
          var p = u[s];
          if (p !== "children" && p !== "key") {
            he(t), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), he(null);
            break;
          }
        }
        t.ref !== null && (he(t), A("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    var Ke = {};
    function fr(t, u, s, p, C, S) {
      {
        var _ = Te(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Pr();
          B ? h += B : h += Ie();
          var D;
          t === null ? D = "null" : Ne(t) ? D = "array" : t !== void 0 && t.$$typeof === v ? (D = "<" + (q(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, h);
        }
        var F = Or(t, u, s, C, S);
        if (F == null)
          return F;
        if (_) {
          var Q = u.children;
          if (Q !== void 0)
            if (p)
              if (Ne(Q)) {
                for (var Ce = 0; Ce < Q.length; Ce++)
                  cr(Q[Ce], t);
                Object.freeze && Object.freeze(Q);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(Q, t);
        }
        if (_e.call(u, "key")) {
          var me = q(t), K = Object.keys(u).filter(function(Ir) {
            return Ir !== "key";
          }), He = K.length > 0 ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[me + He]) {
            var Dr = K.length > 0 ? "{" + K.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, He, me, Dr, me), Ke[me + He] = !0;
          }
        }
        return t === H ? qe(F) : Fe(F), F;
      }
    }
    function jr(t, u, s) {
      return fr(t, u, s, !0);
    }
    function xr(t, u, s) {
      return fr(t, u, s, !1);
    }
    var Ar = xr, lr = jr;
    Xe.Fragment = H, Xe.jsx = Ar, Xe.jsxs = lr;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Yr.exports = Ut() : Yr.exports = Yt();
var we = Yr.exports;
const Bt = ({ config: V }) => {
  const [v, de] = _r.useState(!1);
  return _r.useEffect(() => {
    console.log("Plugin initialized with config:", V);
  }, [V]), /* @__PURE__ */ we.jsxs(we.Fragment, { children: [
    /* @__PURE__ */ we.jsx(
      "button",
      {
        className: "fixed bottom-2 right-2 border border-purple-700 px-4 py-2 rounded-md text-slate-100",
        onClick: () => de((H) => !H),
        children: "Open"
      }
    ),
    v ? /* @__PURE__ */ we.jsxs(
      "div",
      {
        id: "my-plugin-container",
        className: "fixed bottom-16 right-2 border border-purple-700 px-4 py-2 rounded-md text-slate-100",
        children: [
          /* @__PURE__ */ we.jsx("h1", { children: "My Plugin UI" }),
          /* @__PURE__ */ we.jsx("p", { children: "This is your plugin's user interface." }),
          /* @__PURE__ */ we.jsx("p", { children: "Plugin configuration." }),
          /* @__PURE__ */ we.jsx("code", { children: JSON.stringify(V) })
        ]
      }
    ) : null
  ] });
};
export {
  Bt as Plugin
};
