import xe, { useState as cr, useEffect as dr } from "https://unpkg.com/react@16/umd/react.production.min.js";
var Q = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function vr() {
  if (Se) return I;
  Se = 1;
  var m = xe, R = Symbol.for("react.element"), w = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, $ = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(_, c, P) {
    var p, b = {}, T = null, L = null;
    P !== void 0 && (T = "" + P), c.key !== void 0 && (T = "" + c.key), c.ref !== void 0 && (L = c.ref);
    for (p in c) y.call(c, p) && !Y.hasOwnProperty(p) && (b[p] = c[p]);
    if (_ && _.defaultProps) for (p in c = _.defaultProps, c) b[p] === void 0 && (b[p] = c[p]);
    return { $$typeof: R, type: _, key: T, ref: L, props: b, _owner: $.current };
  }
  return I.Fragment = w, I.jsx = k, I.jsxs = k, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function pr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var m = xe, R = Symbol.for("react.element"), w = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), _ = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), ee = Symbol.iterator, Ce = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var x = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, Ie = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === Y || Ie || e === $ || e === P || e === p || Ae || e === L || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === b || e.$$typeof === k || e.$$typeof === _ || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function h(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case w:
          return "Portal";
        case Y:
          return "Profiler";
        case $:
          return "StrictMode";
        case P:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return te(r) + ".Consumer";
          case k:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return $e(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : h(e.type) || "Memo";
          case T: {
            var o = e, u = o._payload, i = o._init;
            try {
              return h(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, D = 0, ne, ae, ie, oe, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
        D++;
      }
    }
    function Le() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ne
            }),
            info: O({}, e, {
              value: ae
            }),
            warn: O({}, e, {
              value: ie
            }),
            error: O({}, e, {
              value: oe
            }),
            group: O({}, e, {
              value: ue
            }),
            groupCollapsed: O({}, e, {
              value: se
            }),
            groupEnd: O({}, e, {
              value: le
            })
          });
        }
        D < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = x.ReactCurrentDispatcher, B;
    function M(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, U;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Me();
    }
    function ce(e, r) {
      if (!e || q)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var g = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, g), g;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, J.current = u, Le(), Error.prepareStackTrace = o;
      }
      var j = e ? e.displayName || e.name : "", S = j ? M(j) : "";
      return typeof e == "function" && U.set(e, S), S;
    }
    function Ue(e, r, t) {
      return ce(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ve(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case P:
          return M("Suspense");
        case p:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ue(e.render);
          case b:
            return V(e.type, r, t);
          case T: {
            var n = e, o = n._payload, u = n._init;
            try {
              return V(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, de = {}, ve = x.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, o) {
      {
        var u = Function.call.bind(F);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (N(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), N(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, N(o), f("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (qe(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), pe(e);
    }
    var A = x.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be, z;
    z = {};
    function ze(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = h(A.current.type);
        z[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', h(A.current.type), e.ref), z[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          be || (be = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (ge(t), a = "" + t), Ge(r) && (ge(r.key), a = "" + r.key), ze(r) && (d = r.ref, Xe(r, o));
        for (u in r)
          F.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, l), d && Ze(i, l);
        }
        return Qe(e, a, d, o, n, A.current, i);
      }
    }
    var G = x.ReactCurrentOwner, ye = x.ReactDebugCurrentFrame;
    function C(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function Ee() {
      {
        if (G.current) {
          var e = h(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var me = {};
    function tr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + h(e._owner.type) + "."), C(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), C(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Re(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = je(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              H(i.value) && Re(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = h(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var o = h(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            C(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), C(null);
            break;
          }
        }
        e.ref !== null && (C(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
      }
    }
    var Te = {};
    function Oe(e, r, t, n, o, u) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = rr();
          d ? a += d : a += Ee();
          var s;
          e === null ? s = "null" : K(e) ? s = "array" : e !== void 0 && e.$$typeof === R ? (s = "<" + (h(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (K(g)) {
                for (var j = 0; j < g.length; j++)
                  _e(g[j], e);
                Object.freeze && Object.freeze(g);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(g, e);
        }
        if (F.call(r, "key")) {
          var S = h(e), v = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Z = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[S + Z]) {
            var lr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, S, lr, S), Te[S + Z] = !0;
          }
        }
        return e === y ? ar(l) : nr(l), l;
      }
    }
    function ir(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function or(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var ur = or, sr = ir;
    W.Fragment = y, W.jsx = ur, W.jsxs = sr;
  }()), W;
}
process.env.NODE_ENV === "production" ? Q.exports = vr() : Q.exports = pr();
var E = Q.exports;
const hr = ({ config: m }) => {
  const [R, w] = cr(!1);
  return dr(() => {
    console.log("Plugin initialized with config:", m);
  }, [m]), /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx(
      "button",
      {
        className: "fixed bottom-2 right-2 border border-purple-700 px-4 py-2 rounded-md text-slate-100",
        onClick: () => w((y) => !y),
        children: "Open"
      }
    ),
    R ? /* @__PURE__ */ E.jsxs(
      "div",
      {
        id: "my-plugin-container",
        className: "fixed bottom-16 right-2 border border-purple-700 px-4 py-2 rounded-md text-slate-100",
        children: [
          /* @__PURE__ */ E.jsx("h1", { children: "My Plugin UI" }),
          /* @__PURE__ */ E.jsx("p", { children: "This is your plugin's user interface." }),
          /* @__PURE__ */ E.jsx("p", { children: "Plugin configuration." }),
          /* @__PURE__ */ E.jsx("code", { children: JSON.stringify(m) })
        ]
      }
    ) : null
  ] });
};
export {
  hr as Plugin
};
//# sourceMappingURL=web-plugin.js.map
