(function(y,d){typeof exports=="object"&&typeof module<"u"?d(exports):typeof define=="function"&&define.amd?define(["exports"],d):(y=typeof globalThis<"u"?globalThis:y||self,d(y["react-web-plugin"]={}))})(this,function(y){"use strict";var d={exports:{}},m={},k={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=Symbol.for("react.element"),z=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),B=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),w=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,O={};function h(e,t,o){this.props=e,this.context=t,this.refs=O,this.updater=o||$}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P(){}P.prototype=h.prototype;function b(e,t,o){this.props=e,this.context=t,this.refs=O,this.updater=o||$}var E=b.prototype=new P;E.constructor=b,C(E,h.prototype),E.isPureReactComponent=!0;var I=Array.isArray,T=Object.prototype.hasOwnProperty,R={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function U(e,t,o){var n,u={},i=null,c=null;if(t!=null)for(n in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(i=""+t.key),t)T.call(t,n)&&!N.hasOwnProperty(n)&&(u[n]=t[n]);var l=arguments.length-2;if(l===1)u.children=o;else if(1<l){for(var s=Array(l),a=0;a<l;a++)s[a]=arguments[a+2];u.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)u[n]===void 0&&(u[n]=l[n]);return{$$typeof:_,type:e,key:i,ref:c,props:u,_owner:R.current}}function K(e,t){return{$$typeof:_,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function g(e){return typeof e=="object"&&e!==null&&e.$$typeof===_}function Q(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var D=/\/+/g;function j(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q(""+e.key):t.toString(36)}function v(e,t,o,n,u){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case _:case z:c=!0}}if(c)return c=e,u=u(c),e=n===""?"."+j(c,0):n,I(u)?(o="",e!=null&&(o=e.replace(D,"$&/")+"/"),v(u,t,o,"",function(a){return a})):u!=null&&(g(u)&&(u=K(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(D,"$&/")+"/")+e)),t.push(u)),1;if(c=0,n=n===""?".":n+":",I(e))for(var l=0;l<e.length;l++){i=e[l];var s=n+j(i,l);c+=v(i,t,o,s,u)}else if(s=G(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=n+j(i,l++),c+=v(i,t,o,s,u);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function S(e,t,o){if(e==null)return e;var n=[],u=0;return v(e,n,"","",function(i){return t.call(o,i,u++)}),n}function X(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var f={current:null},x={transition:null},Z={ReactCurrentDispatcher:f,ReactCurrentBatchConfig:x,ReactCurrentOwner:R};function F(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:S,forEach:function(e,t,o){S(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return S(e,function(){t++}),t},toArray:function(e){return S(e,function(t){return t})||[]},only:function(e){if(!g(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=h,r.Fragment=A,r.Profiler=q,r.PureComponent=b,r.StrictMode=V,r.Suspense=J,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,r.act=F,r.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=C({},e.props),u=e.key,i=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,c=R.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)T.call(t,s)&&!N.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=o;else if(1<s){l=Array(s);for(var a=0;a<s;a++)l[a]=arguments[a+2];n.children=l}return{$$typeof:_,type:e.type,key:u,ref:i,props:n,_owner:c}},r.createContext=function(e){return e={$$typeof:B,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M,_context:e},e.Consumer=e},r.createElement=U,r.createFactory=function(e){var t=U.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:H,render:e}},r.isValidElement=g,r.lazy=function(e){return{$$typeof:Y,_payload:{_status:-1,_result:e},_init:X}},r.memo=function(e,t){return{$$typeof:W,type:e,compare:t===void 0?null:t}},r.startTransition=function(e){var t=x.transition;x.transition={};try{e()}finally{x.transition=t}},r.unstable_act=F,r.useCallback=function(e,t){return f.current.useCallback(e,t)},r.useContext=function(e){return f.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return f.current.useDeferredValue(e)},r.useEffect=function(e,t){return f.current.useEffect(e,t)},r.useId=function(){return f.current.useId()},r.useImperativeHandle=function(e,t,o){return f.current.useImperativeHandle(e,t,o)},r.useInsertionEffect=function(e,t){return f.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return f.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return f.current.useMemo(e,t)},r.useReducer=function(e,t,o){return f.current.useReducer(e,t,o)},r.useRef=function(e){return f.current.useRef(e)},r.useState=function(e){return f.current.useState(e)},r.useSyncExternalStore=function(e,t,o){return f.current.useSyncExternalStore(e,t,o)},r.useTransition=function(){return f.current.useTransition()},r.version="18.3.1",k.exports=r;var ee=k.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=ee,re=Symbol.for("react.element"),ne=Symbol.for("react.fragment"),oe=Object.prototype.hasOwnProperty,ue=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ie={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,o){var n,u={},i=null,c=null;o!==void 0&&(i=""+o),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)oe.call(t,n)&&!ie.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)u[n]===void 0&&(u[n]=t[n]);return{$$typeof:re,type:e,key:i,ref:c,props:u,_owner:ue.current}}m.Fragment=ne,m.jsx=L,m.jsxs=L,d.exports=m;var p=d.exports;const ce=({config:e})=>{const[t,o]=React.useState(!1);return React.useEffect(()=>{console.log("Plugin initialized with config:",e)},[e]),p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"fixed bottom-2 right-2 border border-purple-700 px-4 py-2 rounded-md bg-zinc-950 text-zinc-100",onClick:()=>o(n=>!n),children:"Open"}),t?p.jsxs("div",{id:"my-plugin-container",className:"fixed bottom-16 right-2 border border-purple-700 px-4 py-2 rounded-md bg-zinc-950 text-zinc-100",children:[p.jsx("h1",{children:"My Plugin UI"}),p.jsx("p",{children:"This is your plugin's user interface."}),p.jsx("p",{children:"Plugin configuration."}),p.jsx("code",{children:JSON.stringify(e)})]}):null]})};y.Plugin=ce,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});
