(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(c){if(c.ep)return;c.ep=!0;const m=i(c);fetch(c.href,m)}})();function Fa(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bs={exports:{}},Fn={};var _s,ld;function ci(){if(ld)return _s;ld=1;var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function l(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function c(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var h={},v=0;v<10;v++)h["_"+String.fromCharCode(v)]=v;var g=Object.getOwnPropertyNames(h).map(function(y){return h[y]});if(g.join("")!=="0123456789")return!1;var b={};return"abcdefghijklmnopqrst".split("").forEach(function(y){b[y]=y}),Object.keys(Object.assign({},b)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return _s=c()?Object.assign:function(m,h){for(var v,g=l(m),b,y=1;y<arguments.length;y++){v=Object(arguments[y]);for(var T in v)o.call(v,T)&&(g[T]=v[T]);if(r){b=r(v);for(var A=0;A<b.length;A++)i.call(v,b[A])&&(g[b[A]]=v[b[A]])}}return g},_s}var Hs={exports:{}},be={};var cd;function Sh(){if(cd)return be;cd=1;var r=ci(),o=60103,i=60106;be.Fragment=60107,be.StrictMode=60108,be.Profiler=60114;var l=60109,c=60110,m=60112;be.Suspense=60113;var h=60115,v=60116;if(typeof Symbol=="function"&&Symbol.for){var g=Symbol.for;o=g("react.element"),i=g("react.portal"),be.Fragment=g("react.fragment"),be.StrictMode=g("react.strict_mode"),be.Profiler=g("react.profiler"),l=g("react.provider"),c=g("react.context"),m=g("react.forward_ref"),be.Suspense=g("react.suspense"),h=g("react.memo"),v=g("react.lazy")}var b=typeof Symbol=="function"&&Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}function T(C){for(var O="https://reactjs.org/docs/error-decoder.html?invariant="+C,B=1;B<arguments.length;B++)O+="&args[]="+encodeURIComponent(arguments[B]);return"Minified React error #"+C+"; visit "+O+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function z(C,O,B){this.props=C,this.context=O,this.refs=j,this.updater=B||A}z.prototype.isReactComponent={},z.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error(T(85));this.updater.enqueueSetState(this,C,O,"setState")},z.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Y(){}Y.prototype=z.prototype;function J(C,O,B){this.props=C,this.context=O,this.refs=j,this.updater=B||A}var D=J.prototype=new Y;D.constructor=J,r(D,z.prototype),D.isPureReactComponent=!0;var G={current:null},_=Object.prototype.hasOwnProperty,ne={key:!0,ref:!0,__self:!0,__source:!0};function R(C,O,B){var H,E={},L=null,N=null;if(O!=null)for(H in O.ref!==void 0&&(N=O.ref),O.key!==void 0&&(L=""+O.key),O)_.call(O,H)&&!ne.hasOwnProperty(H)&&(E[H]=O[H]);var K=arguments.length-2;if(K===1)E.children=B;else if(1<K){for(var X=Array(K),ye=0;ye<K;ye++)X[ye]=arguments[ye+2];E.children=X}if(C&&C.defaultProps)for(H in K=C.defaultProps,K)E[H]===void 0&&(E[H]=K[H]);return{$$typeof:o,type:C,key:L,ref:N,props:E,_owner:G.current}}function U(C,O){return{$$typeof:o,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function $(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function q(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(B){return O[B]})}var ce=/\/+/g;function te(C,O){return typeof C=="object"&&C!==null&&C.key!=null?q(""+C.key):O.toString(36)}function de(C,O,B,H,E){var L=typeof C;(L==="undefined"||L==="boolean")&&(C=null);var N=!1;if(C===null)N=!0;else switch(L){case"string":case"number":N=!0;break;case"object":switch(C.$$typeof){case o:case i:N=!0}}if(N)return N=C,E=E(N),C=H===""?"."+te(N,0):H,Array.isArray(E)?(B="",C!=null&&(B=C.replace(ce,"$&/")+"/"),de(E,O,B,"",function(ye){return ye})):E!=null&&($(E)&&(E=U(E,B+(!E.key||N&&N.key===E.key?"":(""+E.key).replace(ce,"$&/")+"/")+C)),O.push(E)),1;if(N=0,H=H===""?".":H+":",Array.isArray(C))for(var K=0;K<C.length;K++){L=C[K];var X=H+te(L,K);N+=de(L,O,B,X,E)}else if(X=y(C),typeof X=="function")for(C=X.call(C),K=0;!(L=C.next()).done;)L=L.value,X=H+te(L,K++),N+=de(L,O,B,X,E);else if(L==="object")throw O=""+C,Error(T(31,O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O));return N}function ee(C,O,B){if(C==null)return C;var H=[],E=0;return de(C,H,"","",function(L){return O.call(B,L,E++)}),H}function re(C){if(C._status===-1){var O=C._result;O=O(),C._status=0,C._result=O,O.then(function(B){C._status===0&&(B=B.default,C._status=1,C._result=B)},function(B){C._status===0&&(C._status=2,C._result=B)})}if(C._status===1)return C._result;throw C._result}var ge={current:null};function ie(){var C=ge.current;if(C===null)throw Error(T(321));return C}var Pe={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:r};return be.Children={map:ee,forEach:function(C,O,B){ee(C,function(){O.apply(this,arguments)},B)},count:function(C){var O=0;return ee(C,function(){O++}),O},toArray:function(C){return ee(C,function(O){return O})||[]},only:function(C){if(!$(C))throw Error(T(143));return C}},be.Component=z,be.PureComponent=J,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pe,be.cloneElement=function(C,O,B){if(C==null)throw Error(T(267,C));var H=r({},C.props),E=C.key,L=C.ref,N=C._owner;if(O!=null){if(O.ref!==void 0&&(L=O.ref,N=G.current),O.key!==void 0&&(E=""+O.key),C.type&&C.type.defaultProps)var K=C.type.defaultProps;for(X in O)_.call(O,X)&&!ne.hasOwnProperty(X)&&(H[X]=O[X]===void 0&&K!==void 0?K[X]:O[X])}var X=arguments.length-2;if(X===1)H.children=B;else if(1<X){K=Array(X);for(var ye=0;ye<X;ye++)K[ye]=arguments[ye+2];H.children=K}return{$$typeof:o,type:C.type,key:E,ref:L,props:H,_owner:N}},be.createContext=function(C,O){return O===void 0&&(O=null),C={$$typeof:c,_calculateChangedBits:O,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider={$$typeof:l,_context:C},C.Consumer=C},be.createElement=R,be.createFactory=function(C){var O=R.bind(null,C);return O.type=C,O},be.createRef=function(){return{current:null}},be.forwardRef=function(C){return{$$typeof:m,render:C}},be.isValidElement=$,be.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:re}},be.memo=function(C,O){return{$$typeof:h,type:C,compare:O===void 0?null:O}},be.useCallback=function(C,O){return ie().useCallback(C,O)},be.useContext=function(C,O){return ie().useContext(C,O)},be.useDebugValue=function(){},be.useEffect=function(C,O){return ie().useEffect(C,O)},be.useImperativeHandle=function(C,O,B){return ie().useImperativeHandle(C,O,B)},be.useLayoutEffect=function(C,O){return ie().useLayoutEffect(C,O)},be.useMemo=function(C,O){return ie().useMemo(C,O)},be.useReducer=function(C,O,B){return ie().useReducer(C,O,B)},be.useRef=function(C){return ie().useRef(C)},be.useState=function(C){return ie().useState(C)},be.version="17.0.2",be}var dd;function di(){return dd||(dd=1,Hs.exports=Sh()),Hs.exports}var pd;function Ch(){if(pd)return Fn;pd=1,ci();var r=di(),o=60103;if(Fn.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var i=Symbol.for;o=i("react.element"),Fn.Fragment=i("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};function h(v,g,b){var y,T={},A=null,j=null;b!==void 0&&(A=""+b),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(j=g.ref);for(y in g)c.call(g,y)&&!m.hasOwnProperty(y)&&(T[y]=g[y]);if(v&&v.defaultProps)for(y in g=v.defaultProps,g)T[y]===void 0&&(T[y]=g[y]);return{$$typeof:o,type:v,key:A,ref:j,props:T,_owner:l.current}}return Fn.jsx=h,Fn.jsxs=h,Fn}var ud;function Th(){return ud||(ud=1,Bs.exports=Ch()),Bs.exports}var p=Th(),me=di();const ve=Fa(me);var Gs={exports:{}},Xe={},Us={exports:{}},Ws={};var hd;function Ah(){return hd||(hd=1,(function(r){var o,i,l,c;if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var h=Date,v=h.now();r.unstable_now=function(){return h.now()-v}}if(typeof window>"u"||typeof MessageChannel!="function"){var g=null,b=null,y=function(){if(g!==null)try{var E=r.unstable_now();g(!0,E),g=null}catch(L){throw setTimeout(y,0),L}};o=function(E){g!==null?setTimeout(o,0,E):(g=E,setTimeout(y,0))},i=function(E,L){b=setTimeout(E,L)},l=function(){clearTimeout(b)},r.unstable_shouldYield=function(){return!1},c=r.unstable_forceFrameRate=function(){}}else{var T=window.setTimeout,A=window.clearTimeout;if(typeof console<"u"){var j=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof j!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var z=!1,Y=null,J=-1,D=5,G=0;r.unstable_shouldYield=function(){return r.unstable_now()>=G},c=function(){},r.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<E?Math.floor(1e3/E):5};var _=new MessageChannel,ne=_.port2;_.port1.onmessage=function(){if(Y!==null){var E=r.unstable_now();G=E+D;try{Y(!0,E)?ne.postMessage(null):(z=!1,Y=null)}catch(L){throw ne.postMessage(null),L}}else z=!1},o=function(E){Y=E,z||(z=!0,ne.postMessage(null))},i=function(E,L){J=T(function(){E(r.unstable_now())},L)},l=function(){A(J),J=-1}}function R(E,L){var N=E.length;E.push(L);e:for(;;){var K=N-1>>>1,X=E[K];if(X!==void 0&&0<q(X,L))E[K]=L,E[N]=X,N=K;else break e}}function U(E){return E=E[0],E===void 0?null:E}function $(E){var L=E[0];if(L!==void 0){var N=E.pop();if(N!==L){E[0]=N;e:for(var K=0,X=E.length;K<X;){var ye=2*(K+1)-1,Se=E[ye],Me=ye+1,We=E[Me];if(Se!==void 0&&0>q(Se,N))We!==void 0&&0>q(We,Se)?(E[K]=We,E[Me]=N,K=Me):(E[K]=Se,E[ye]=N,K=ye);else if(We!==void 0&&0>q(We,N))E[K]=We,E[Me]=N,K=Me;else break e}}return L}return null}function q(E,L){var N=E.sortIndex-L.sortIndex;return N!==0?N:E.id-L.id}var ce=[],te=[],de=1,ee=null,re=3,ge=!1,ie=!1,Pe=!1;function C(E){for(var L=U(te);L!==null;){if(L.callback===null)$(te);else if(L.startTime<=E)$(te),L.sortIndex=L.expirationTime,R(ce,L);else break;L=U(te)}}function O(E){if(Pe=!1,C(E),!ie)if(U(ce)!==null)ie=!0,o(B);else{var L=U(te);L!==null&&i(O,L.startTime-E)}}function B(E,L){ie=!1,Pe&&(Pe=!1,l()),ge=!0;var N=re;try{for(C(L),ee=U(ce);ee!==null&&(!(ee.expirationTime>L)||E&&!r.unstable_shouldYield());){var K=ee.callback;if(typeof K=="function"){ee.callback=null,re=ee.priorityLevel;var X=K(ee.expirationTime<=L);L=r.unstable_now(),typeof X=="function"?ee.callback=X:ee===U(ce)&&$(ce),C(L)}else $(ce);ee=U(ce)}if(ee!==null)var ye=!0;else{var Se=U(te);Se!==null&&i(O,Se.startTime-L),ye=!1}return ye}finally{ee=null,re=N,ge=!1}}var H=c;r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(E){E.callback=null},r.unstable_continueExecution=function(){ie||ge||(ie=!0,o(B))},r.unstable_getCurrentPriorityLevel=function(){return re},r.unstable_getFirstCallbackNode=function(){return U(ce)},r.unstable_next=function(E){switch(re){case 1:case 2:case 3:var L=3;break;default:L=re}var N=re;re=L;try{return E()}finally{re=N}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=H,r.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var N=re;re=E;try{return L()}finally{re=N}},r.unstable_scheduleCallback=function(E,L,N){var K=r.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?K+N:K):N=K,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,E={id:de++,callback:L,priorityLevel:E,startTime:N,expirationTime:X,sortIndex:-1},N>K?(E.sortIndex=N,R(te,E),U(ce)===null&&E===U(te)&&(Pe?l():Pe=!0,i(O,N-K))):(E.sortIndex=X,R(ce,E),ie||ge||(ie=!0,o(B))),E},r.unstable_wrapCallback=function(E){var L=re;return function(){var N=re;re=L;try{return E.apply(this,arguments)}finally{re=N}}}})(Ws)),Ws}var md;function Eh(){return md||(md=1,Us.exports=Ah()),Us.exports}var gd;function Ih(){if(gd)return Xe;gd=1;var r=di(),o=ci(),i=Eh();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(l(227));var c=new Set,m={};function h(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(m[e]=t,e=0;e<t.length;e++)c.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y=Object.prototype.hasOwnProperty,T={},A={};function j(e){return y.call(A,e)?!0:y.call(T,e)?!1:b.test(e)?A[e]=!0:(T[e]=!0,!1)}function z(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,t,n,a){if(t===null||typeof t>"u"||z(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function J(e,t,n,a,s,d,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=u}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new J(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new J(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new J(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new J(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new J(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new J(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new J(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new J(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new J(e,5,!1,e.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function _(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(G,_);D[t]=new J(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(G,_);D[t]=new J(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(G,_);D[t]=new J(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new J(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new J(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,a){var s=D.hasOwnProperty(t)?D[t]:null,d=s!==null?s.type===0:a?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");d||(Y(t,n,s,a)&&(n=null),a||s===null?j(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,a=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=60103,$=60106,q=60107,ce=60108,te=60114,de=60109,ee=60110,re=60112,ge=60113,ie=60120,Pe=60115,C=60116,O=60121,B=60128,H=60129,E=60130,L=60131;if(typeof Symbol=="function"&&Symbol.for){var N=Symbol.for;U=N("react.element"),$=N("react.portal"),q=N("react.fragment"),ce=N("react.strict_mode"),te=N("react.profiler"),de=N("react.provider"),ee=N("react.context"),re=N("react.forward_ref"),ge=N("react.suspense"),ie=N("react.suspense_list"),Pe=N("react.memo"),C=N("react.lazy"),O=N("react.block"),N("react.scope"),B=N("react.opaque.id"),H=N("react.debug_trace_mode"),E=N("react.offscreen"),L=N("react.legacy_hidden")}var K=typeof Symbol=="function"&&Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var ye;function Se(e){if(ye===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||""}return`
`+ye+e}var Me=!1;function We(e,t){if(!e||Me)return"";Me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var a=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){a=w}e.call(t.prototype)}else{try{throw Error()}catch(w){a=w}e()}}catch(w){if(w&&a&&typeof w.stack=="string"){for(var s=w.stack.split(`
`),d=a.stack.split(`
`),u=s.length-1,f=d.length-1;1<=u&&0<=f&&s[u]!==d[f];)f--;for(;1<=u&&0<=f;u--,f--)if(s[u]!==d[f]){if(u!==1||f!==1)do if(u--,f--,0>f||s[u]!==d[f])return`
`+s[u].replace(" at new "," at ");while(1<=u&&0<=f);break}}}finally{Me=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Se(e):""}function Rp(e){switch(e.tag){case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return Se("Suspense");case 19:return Se("SuspenseList");case 0:case 2:case 15:return e=We(e.type,!1),e;case 11:return e=We(e.type.render,!1),e;case 22:return e=We(e.type._render,!1),e;case 1:return e=We(e.type,!0),e;default:return""}}function dn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case $:return"Portal";case te:return"Profiler";case ce:return"StrictMode";case ge:return"Suspense";case ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case de:return(e._context.displayName||"Context")+".Provider";case re:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Pe:return dn(e.type);case O:return dn(e._render);case C:t=e._payload,e=e._init;try{return dn(e(t))}catch{}}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Ii(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mp(e){var t=Ii(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(u){a=""+u,d.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ba(e){e._valueTracker||(e._valueTracker=Mp(e))}function Pi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ii(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function _a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qr(e,t){var n=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Li(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ri(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Xr(e,t){Ri(e,t);var n=kt(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zr(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zr(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zr(e,t,n){(t!=="number"||_a(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function jp(e){var t="";return r.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function eo(e,t){return e=o({children:void 0},t),(t=jp(t.children))&&(e.children=t),e}function pn(e,t,n,a){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&a&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ji(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Ni(e,t){var n=kt(t.value),a=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Di(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var no={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function Oi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Oi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,Fi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,s)})}:e})(function(e,t){if(e.namespaceURI!==no.svg||"innerHTML"in e)e.innerHTML=t;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Np=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function zi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function Bi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,s=zi(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,s):e[n]=s}}var Dp=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(Dp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function so(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,un=null,hn=null;function _i(e){if(e=sa(e)){if(typeof io!="function")throw Error(l(280));var t=e.stateNode;t&&(t=or(t),io(e.stateNode,e.type,t))}}function Hi(e){un?hn?hn.push(e):hn=[e]:un=e}function Gi(){if(un){var e=un,t=hn;if(hn=un=null,_i(e),t)for(e=0;e<t.length;e++)_i(t[e])}}function lo(e,t){return e(t)}function Ui(e,t,n,a,s){return e(t,n,a,s)}function co(){}var Wi=lo,qt=!1,po=!1;function uo(){(un!==null||hn!==null)&&(co(),Gi())}function Op(e,t,n){if(po)return e(t,n);po=!0;try{return Wi(e,t,n)}finally{po=!1,uo()}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var a=or(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var ho=!1;if(g)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){ho=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{ho=!1}function Fp(e,t,n,a,s,d,u,f,w){var I=Array.prototype.slice.call(arguments,3);try{t.apply(n,I)}catch(W){this.onError(W)}}var Wn=!1,Ga=null,Ua=!1,mo=null,zp={onError:function(e){Wn=!0,Ga=e}};function Bp(e,t,n,a,s,d,u,f,w){Wn=!1,Ga=null,Fp.apply(zp,arguments)}function _p(e,t,n,a,s,d,u,f,w){if(Bp.apply(this,arguments),Wn){if(Wn){var I=Ga;Wn=!1,Ga=null}else throw Error(l(198));Ua||(Ua=!0,mo=I)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yi(e){if(Yt(e)!==e)throw Error(l(188))}function Hp(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,a=t;;){var s=n.return;if(s===null)break;var d=s.alternate;if(d===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===d.child){for(d=s.child;d;){if(d===n)return Yi(s),e;if(d===a)return Yi(s),t;d=d.sibling}throw Error(l(188))}if(n.return!==a.return)n=s,a=d;else{for(var u=!1,f=s.child;f;){if(f===n){u=!0,n=s,a=d;break}if(f===a){u=!0,a=s,n=d;break}f=f.sibling}if(!u){for(f=d.child;f;){if(f===n){u=!0,n=d,a=s;break}if(f===a){u=!0,a=d,n=s;break}f=f.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==a)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function $i(e){if(e=Hp(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Vi(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Ji,go,Ki,Qi,fo=!1,lt=[],St=null,Ct=null,Tt=null,qn=new Map,Yn=new Map,$n=[],Xi="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vo(e,t,n,a,s){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:s,targetContainers:[a]}}function Zi(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Vn(e,t,n,a,s,d){return e===null||e.nativeEvent!==d?(e=vo(t,n,a,s,d),t!==null&&(t=sa(t),t!==null&&go(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Gp(e,t,n,a,s){switch(t){case"focusin":return St=Vn(St,e,t,n,a,s),!0;case"dragenter":return Ct=Vn(Ct,e,t,n,a,s),!0;case"mouseover":return Tt=Vn(Tt,e,t,n,a,s),!0;case"pointerover":var d=s.pointerId;return qn.set(d,Vn(qn.get(d)||null,e,t,n,a,s)),!0;case"gotpointercapture":return d=s.pointerId,Yn.set(d,Vn(Yn.get(d)||null,e,t,n,a,s)),!0}return!1}function Up(e){var t=$t(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=qi(n),t!==null){e.blockedOn=t,Qi(e.lanePriority,function(){i.unstable_runWithPriority(e.priority,function(){Ki(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=So(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=sa(n),t!==null&&go(t),e.blockedOn=n,!1;t.shift()}return!0}function el(e,t,n){Wa(e)&&n.delete(t)}function Wp(){for(fo=!1;0<lt.length;){var e=lt[0];if(e.blockedOn!==null){e=sa(e.blockedOn),e!==null&&Ji(e);break}for(var t=e.targetContainers;0<t.length;){var n=So(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&lt.shift()}St!==null&&Wa(St)&&(St=null),Ct!==null&&Wa(Ct)&&(Ct=null),Tt!==null&&Wa(Tt)&&(Tt=null),qn.forEach(el),Yn.forEach(el)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,fo||(fo=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Wp)))}function tl(e){function t(s){return Jn(s,e)}if(0<lt.length){Jn(lt[0],e);for(var n=1;n<lt.length;n++){var a=lt[n];a.blockedOn===e&&(a.blockedOn=null)}}for(St!==null&&Jn(St,e),Ct!==null&&Jn(Ct,e),Tt!==null&&Jn(Tt,e),qn.forEach(t),Yn.forEach(t),n=0;n<$n.length;n++)a=$n[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)Up(n),n.blockedOn===null&&$n.shift()}function qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},yo={},nl={};g&&(nl=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Ya(e){if(yo[e])return yo[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nl)return yo[e]=t[n];return e}var al=Ya("animationend"),rl=Ya("animationiteration"),ol=Ya("animationstart"),sl=Ya("transitionend"),il=new Map,bo=new Map,qp=["abort","abort",al,"animationEnd",rl,"animationIteration",ol,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",sl,"transitionEnd","waiting","waiting"];function wo(e,t){for(var n=0;n<e.length;n+=2){var a=e[n],s=e[n+1];s="on"+(s[0].toUpperCase()+s.slice(1)),bo.set(a,t),il.set(a,s),h(s,[a])}}var Yp=i.unstable_now;Yp();var Ce=8;function gn(e){if((1&e)!==0)return Ce=15,1;if((2&e)!==0)return Ce=14,2;if((4&e)!==0)return Ce=13,4;var t=24&e;return t!==0?(Ce=12,t):(e&32)!==0?(Ce=11,32):(t=192&e,t!==0?(Ce=10,t):(e&256)!==0?(Ce=9,256):(t=3584&e,t!==0?(Ce=8,t):(e&4096)!==0?(Ce=7,4096):(t=4186112&e,t!==0?(Ce=6,t):(t=62914560&e,t!==0?(Ce=5,t):e&67108864?(Ce=4,67108864):(e&134217728)!==0?(Ce=3,134217728):(t=805306368&e,t!==0?(Ce=2,t):(1073741824&e)!==0?(Ce=1,1073741824):(Ce=8,e))))))}function $p(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Vp(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(l(358,e))}}function Kn(e,t){var n=e.pendingLanes;if(n===0)return Ce=0;var a=0,s=0,d=e.expiredLanes,u=e.suspendedLanes,f=e.pingedLanes;if(d!==0)a=d,s=Ce=15;else if(d=n&134217727,d!==0){var w=d&~u;w!==0?(a=gn(w),s=Ce):(f&=d,f!==0&&(a=gn(f),s=Ce))}else d=n&~u,d!==0?(a=gn(d),s=Ce):f!==0&&(a=gn(f),s=Ce);if(a===0)return 0;if(a=31-At(a),a=n&((0>a?0:1<<a)<<1)-1,t!==0&&t!==a&&(t&u)===0){if(gn(t),s<=Ce)return t;Ce=s}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-At(t),s=1<<n,a|=e[n],t&=~s;return a}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $a(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=fn(24&~t),e===0?$a(10,t):e;case 10:return e=fn(192&~t),e===0?$a(8,t):e;case 8:return e=fn(3584&~t),e===0&&(e=fn(4186112&~t),e===0&&(e=512)),e;case 2:return t=fn(805306368&~t),t===0&&(t=268435456),t}throw Error(l(358,e))}function fn(e){return e&-e}function xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Va(e,t,n){e.pendingLanes|=t;var a=t-1;e.suspendedLanes&=a,e.pingedLanes&=a,e=e.eventTimes,t=31-At(t),e[t]=n}var At=Math.clz32?Math.clz32:Qp,Jp=Math.log,Kp=Math.LN2;function Qp(e){return e===0?32:31-(Jp(e)/Kp|0)|0}var Xp=i.unstable_UserBlockingPriority,Zp=i.unstable_runWithPriority,Ja=!0;function eu(e,t,n,a){qt||co();var s=ko,d=qt;qt=!0;try{Ui(s,e,t,n,a)}finally{(qt=d)||uo()}}function tu(e,t,n,a){Zp(Xp,ko.bind(null,e,t,n,a))}function ko(e,t,n,a){if(Ja){var s;if((s=(t&4)===0)&&0<lt.length&&-1<Xi.indexOf(e))e=vo(null,e,t,n,a),lt.push(e);else{var d=So(e,t,n,a);if(d===null)s&&Zi(e,a);else{if(s){if(-1<Xi.indexOf(e)){e=vo(d,e,t,n,a),lt.push(e);return}if(Gp(d,e,t,n,a))return;Zi(e,a)}Fl(e,t,a,null,n)}}}}function So(e,t,n,a){var s=so(a);if(s=$t(s),s!==null){var d=Yt(s);if(d===null)s=null;else{var u=d.tag;if(u===13){if(s=qi(d),s!==null)return s;s=null}else if(u===3){if(d.stateNode.hydrate)return d.tag===3?d.stateNode.containerInfo:null;s=null}else d!==s&&(s=null)}}return Fl(e,t,a,s,n),null}var Et=null,Co=null,Ka=null;function cl(){if(Ka)return Ka;var e,t=Co,n=t.length,a,s="value"in Et?Et.value:Et.textContent,d=s.length;for(e=0;e<n&&t[e]===s[e];e++);var u=n-e;for(a=1;a<=u&&t[n-a]===s[d-a];a++);return Ka=s.slice(e,1<a?1-a:void 0)}function Qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xa(){return!0}function dl(){return!1}function Ke(e){function t(n,a,s,d,u){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=d,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(d):d[f]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Xa:dl,this.isPropagationStopped=dl,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=Ke(vn),Qn=o({},vn,{view:0,detail:0}),nu=Ke(Qn),Ao,Eo,Xn,Za=o({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Ao=e.screenX-Xn.screenX,Eo=e.screenY-Xn.screenY):Eo=Ao=0,Xn=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),pl=Ke(Za),au=o({},Za,{dataTransfer:0}),ru=Ke(au),ou=o({},Qn,{relatedTarget:0}),Io=Ke(ou),su=o({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),iu=Ke(su),lu=o({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cu=Ke(lu),du=o({},vn,{data:0}),ul=Ke(du),pu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hu[e])?!!t[e]:!1}function Po(){return mu}var gu=o({},Qn,{key:function(e){if(e.key){var t=pu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Po,charCode:function(e){return e.type==="keypress"?Qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fu=Ke(gu),vu=o({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hl=Ke(vu),yu=o({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Po}),bu=Ke(yu),wu=o({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xu=Ke(wu),ku=o({},Za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Su=Ke(ku),Cu=[9,13,27,32],Lo=g&&"CompositionEvent"in window,Zn=null;g&&"documentMode"in document&&(Zn=document.documentMode);var Tu=g&&"TextEvent"in window&&!Zn,ml=g&&(!Lo||Zn&&8<Zn&&11>=Zn),gl=" ",fl=!1;function vl(e,t){switch(e){case"keyup":return Cu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Au(e,t){switch(e){case"compositionend":return yl(t);case"keypress":return t.which!==32?null:(fl=!0,gl);case"textInput":return e=t.data,e===gl&&fl?null:e;default:return null}}function Eu(e,t){if(yn)return e==="compositionend"||!Lo&&vl(e,t)?(e=cl(),Ka=Co=Et=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ml&&t.locale!=="ko"?null:t.data;default:return null}}var Iu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Iu[e.type]:t==="textarea"}function wl(e,t,n,a){Hi(a),t=tr(t,"onChange"),0<t.length&&(n=new To("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ea=null,ta=null;function Pu(e){Ml(e,0)}function er(e){var t=Sn(e);if(Pi(t))return e}function Lu(e,t){if(e==="change")return t}var xl=!1;if(g){var Ro;if(g){var Mo="oninput"in document;if(!Mo){var kl=document.createElement("div");kl.setAttribute("oninput","return;"),Mo=typeof kl.oninput=="function"}Ro=Mo}else Ro=!1;xl=Ro&&(!document.documentMode||9<document.documentMode)}function Sl(){ea&&(ea.detachEvent("onpropertychange",Cl),ta=ea=null)}function Cl(e){if(e.propertyName==="value"&&er(ta)){var t=[];if(wl(t,ta,e,so(e)),e=Pu,qt)e(t);else{qt=!0;try{lo(e,t)}finally{qt=!1,uo()}}}}function Ru(e,t,n){e==="focusin"?(Sl(),ea=t,ta=n,ea.attachEvent("onpropertychange",Cl)):e==="focusout"&&Sl()}function Mu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return er(ta)}function ju(e,t){if(e==="click")return er(t)}function Nu(e,t){if(e==="input"||e==="change")return er(t)}function Du(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Du,Ou=Object.prototype.hasOwnProperty;function na(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++)if(!Ou.call(t,n[a])||!Ze(e[n[a]],t[n[a]]))return!1;return!0}function Tl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Al(e,t){var n=Tl(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tl(n)}}function El(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?El(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Il(){for(var e=window,t=_a();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_a(e.document)}return t}function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fu=g&&"documentMode"in document&&11>=document.documentMode,bn=null,No=null,aa=null,Do=!1;function Pl(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Do||bn==null||bn!==_a(a)||(a=bn,"selectionStart"in a&&jo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),aa&&na(aa,a)||(aa=a,a=tr(No,"onSelect"),0<a.length&&(t=new To("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=bn)))}wo("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),wo("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),wo(qp,2);for(var Ll="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Oo=0;Oo<Ll.length;Oo++)bo.set(Ll[Oo],0);v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zu=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Rl(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,_p(a,t,void 0,e),e.currentTarget=null}function Ml(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],s=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var u=a.length-1;0<=u;u--){var f=a[u],w=f.instance,I=f.currentTarget;if(f=f.listener,w!==d&&s.isPropagationStopped())break e;Rl(s,f,I),d=w}else for(u=0;u<a.length;u++){if(f=a[u],w=f.instance,I=f.currentTarget,f=f.listener,w!==d&&s.isPropagationStopped())break e;Rl(s,f,I),d=w}}}if(Ua)throw e=mo,Ua=!1,mo=null,e}function Te(e,t){var n=Ul(t),a=e+"__bubble";n.has(a)||(Ol(t,e,2,!1),n.add(a))}var jl="_reactListening"+Math.random().toString(36).slice(2);function Nl(e){e[jl]||(e[jl]=!0,c.forEach(function(t){zu.has(t)||Dl(t,!1,e,null),Dl(t,!0,e,null)}))}function Dl(e,t,n,a){var s=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,d=n;e==="selectionchange"&&n.nodeType!==9&&(d=n.ownerDocument);var u=Ul(d),f=e+"__"+(t?"capture":"bubble");u.has(f)||(t&&(s|=4),Ol(d,e,s,t),u.add(f))}function Ol(e,t,n,a){var s=bo.get(t);switch(s===void 0?2:s){case 0:s=eu;break;case 1:s=tu;break;default:s=ko}n=s.bind(null,t,n,e),s=void 0,!ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Fl(e,t,n,a,s){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===s||f.nodeType===8&&f.parentNode===s)break;if(u===4)for(u=a.return;u!==null;){var w=u.tag;if((w===3||w===4)&&(w=u.stateNode.containerInfo,w===s||w.nodeType===8&&w.parentNode===s))return;u=u.return}for(;f!==null;){if(u=$t(f),u===null)return;if(w=u.tag,w===5||w===6){a=d=u;continue e}f=f.parentNode}}a=a.return}Op(function(){var I=d,W=so(n),le=[];e:{var F=il.get(e);if(F!==void 0){var Z=To,se=e;switch(e){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":Z=fu;break;case"focusin":se="focus",Z=Io;break;case"focusout":se="blur",Z=Io;break;case"beforeblur":case"afterblur":Z=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=pl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=ru;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=bu;break;case al:case rl:case ol:Z=iu;break;case sl:Z=xu;break;case"scroll":Z=nu;break;case"wheel":Z=Su;break;case"copy":case"cut":case"paste":Z=cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=hl}var ae=(t&4)!==0,S=!ae&&e==="scroll",x=ae?F!==null?F+"Capture":null:F;ae=[];for(var k=I,P;k!==null;){P=k;var M=P.stateNode;if(P.tag===5&&M!==null&&(P=M,x!==null&&(M=Gn(k,x),M!=null&&ae.push(oa(k,M,P)))),S)break;k=k.return}0<ae.length&&(F=new Z(F,se,null,n,W),le.push({event:F,listeners:ae}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",F&&(t&16)===0&&(se=n.relatedTarget||n.fromElement)&&($t(se)||se[kn]))break e;if((Z||F)&&(F=W.window===W?W:(F=W.ownerDocument)?F.defaultView||F.parentWindow:window,Z?(se=n.relatedTarget||n.toElement,Z=I,se=se?$t(se):null,se!==null&&(S=Yt(se),se!==S||se.tag!==5&&se.tag!==6)&&(se=null)):(Z=null,se=I),Z!==se)){if(ae=pl,M="onMouseLeave",x="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=hl,M="onPointerLeave",x="onPointerEnter",k="pointer"),S=Z==null?F:Sn(Z),P=se==null?F:Sn(se),F=new ae(M,k+"leave",Z,n,W),F.target=S,F.relatedTarget=P,M=null,$t(W)===I&&(ae=new ae(x,k+"enter",se,n,W),ae.target=P,ae.relatedTarget=S,M=ae),S=M,Z&&se)t:{for(ae=Z,x=se,k=0,P=ae;P;P=wn(P))k++;for(P=0,M=x;M;M=wn(M))P++;for(;0<k-P;)ae=wn(ae),k--;for(;0<P-k;)x=wn(x),P--;for(;k--;){if(ae===x||x!==null&&ae===x.alternate)break t;ae=wn(ae),x=wn(x)}ae=null}else ae=null;Z!==null&&zl(le,F,Z,ae,!1),se!==null&&S!==null&&zl(le,S,se,ae,!0)}}e:{if(F=I?Sn(I):window,Z=F.nodeName&&F.nodeName.toLowerCase(),Z==="select"||Z==="input"&&F.type==="file")var pe=Lu;else if(bl(F))if(xl)pe=Nu;else{pe=Mu;var Q=Ru}else(Z=F.nodeName)&&Z.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(pe=ju);if(pe&&(pe=pe(e,I))){wl(le,pe,n,W);break e}Q&&Q(e,F,I),e==="focusout"&&(Q=F._wrapperState)&&Q.controlled&&F.type==="number"&&Zr(F,"number",F.value)}switch(Q=I?Sn(I):window,e){case"focusin":(bl(Q)||Q.contentEditable==="true")&&(bn=Q,No=I,aa=null);break;case"focusout":aa=No=bn=null;break;case"mousedown":Do=!0;break;case"contextmenu":case"mouseup":case"dragend":Do=!1,Pl(le,n,W);break;case"selectionchange":if(Fu)break;case"keydown":case"keyup":Pl(le,n,W)}var ue;if(Lo)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else yn?vl(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(ml&&n.locale!=="ko"&&(yn||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&yn&&(ue=cl()):(Et=W,Co="value"in Et?Et.value:Et.textContent,yn=!0)),Q=tr(I,fe),0<Q.length&&(fe=new ul(fe,e,null,n,W),le.push({event:fe,listeners:Q}),ue?fe.data=ue:(ue=yl(n),ue!==null&&(fe.data=ue)))),(ue=Tu?Au(e,n):Eu(e,n))&&(I=tr(I,"onBeforeInput"),0<I.length&&(W=new ul("onBeforeInput","beforeinput",null,n,W),le.push({event:W,listeners:I}),W.data=ue))}Ml(le,t)})}function oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tr(e,t){for(var n=t+"Capture",a=[];e!==null;){var s=e,d=s.stateNode;s.tag===5&&d!==null&&(s=d,d=Gn(e,n),d!=null&&a.unshift(oa(e,d,s)),d=Gn(e,t),d!=null&&a.push(oa(e,d,s))),e=e.return}return a}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zl(e,t,n,a,s){for(var d=t._reactName,u=[];n!==null&&n!==a;){var f=n,w=f.alternate,I=f.stateNode;if(w!==null&&w===a)break;f.tag===5&&I!==null&&(f=I,s?(w=Gn(n,d),w!=null&&u.unshift(oa(n,w,f))):s||(w=Gn(n,d),w!=null&&u.push(oa(n,w,f)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}function nr(){}var Fo=null,zo=null;function Bl(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Bo(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,Bu=typeof clearTimeout=="function"?clearTimeout:void 0;function _o(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Hl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ho=0;function _u(e){return{$$typeof:B,toString:e,valueOf:e}}var ar=Math.random().toString(36).slice(2),It="__reactFiber$"+ar,rr="__reactProps$"+ar,kn="__reactContainer$"+ar,Gl="__reactEvents$"+ar;function $t(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hl(e);e!==null;){if(n=e[It])return n;e=Hl(e)}return t}e=n,n=e.parentNode}return null}function sa(e){return e=e[It]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function or(e){return e[rr]||null}function Ul(e){var t=e[Gl];return t===void 0&&(t=e[Gl]=new Set),t}var Go=[],Cn=-1;function Pt(e){return{current:e}}function Ae(e){0>Cn||(e.current=Go[Cn],Go[Cn]=null,Cn--)}function Ee(e,t){Cn++,Go[Cn]=e.current,e.current=t}var Lt={},Oe=Pt(Lt),qe=Pt(!1),Vt=Lt;function Tn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var s={},d;for(d in n)s[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ye(e){return e=e.childContextTypes,e!=null}function sr(){Ae(qe),Ae(Oe)}function Wl(e,t,n){if(Oe.current!==Lt)throw Error(l(168));Ee(Oe,t),Ee(qe,n)}function ql(e,t,n){var a=e.stateNode;if(e=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var s in a)if(!(s in e))throw Error(l(108,dn(t)||"Unknown",s));return o({},n,a)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Vt=Oe.current,Ee(Oe,e),Ee(qe,qe.current),!0}function Yl(e,t,n){var a=e.stateNode;if(!a)throw Error(l(169));n?(e=ql(e,t,Vt),a.__reactInternalMemoizedMergedChildContext=e,Ae(qe),Ae(Oe),Ee(Oe,e)):Ae(qe),Ee(qe,n)}var Uo=null,Jt=null,Hu=i.unstable_runWithPriority,Wo=i.unstable_scheduleCallback,qo=i.unstable_cancelCallback,Gu=i.unstable_shouldYield,$l=i.unstable_requestPaint,Yo=i.unstable_now,Uu=i.unstable_getCurrentPriorityLevel,lr=i.unstable_ImmediatePriority,Vl=i.unstable_UserBlockingPriority,Jl=i.unstable_NormalPriority,Kl=i.unstable_LowPriority,Ql=i.unstable_IdlePriority,$o={},Wu=$l!==void 0?$l:function(){},vt=null,cr=null,Vo=!1,Xl=Yo(),Fe=1e4>Xl?Yo:function(){return Yo()-Xl};function An(){switch(Uu()){case lr:return 99;case Vl:return 98;case Jl:return 97;case Kl:return 96;case Ql:return 95;default:throw Error(l(332))}}function Zl(e){switch(e){case 99:return lr;case 98:return Vl;case 97:return Jl;case 96:return Kl;case 95:return Ql;default:throw Error(l(332))}}function Kt(e,t){return e=Zl(e),Hu(e,t)}function ia(e,t,n){return e=Zl(e),Wo(e,t,n)}function ct(){if(cr!==null){var e=cr;cr=null,qo(e)}ec()}function ec(){if(!Vo&&vt!==null){Vo=!0;var e=0;try{var t=vt;Kt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),vt=null}catch(n){throw vt!==null&&(vt=vt.slice(e+1)),Wo(lr,ct),n}finally{Vo=!1}}}var qu=R.ReactCurrentBatchConfig;function rt(e,t){if(e&&e.defaultProps){t=o({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var dr=Pt(null),pr=null,En=null,ur=null;function Jo(){ur=En=pr=null}function Ko(e){var t=dr.current;Ae(dr),e.type._context._currentValue=t}function tc(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function In(e,t){pr=e,ur=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function et(e,t){if(ur!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(ur=e,t=1073741823),t={context:e,observedBits:t,next:null},En===null){if(pr===null)throw Error(l(308));En=t,pr.dependencies={lanes:0,firstContext:t,responders:null}}else En=En.next=t;return e._currentValue}var Rt=!1;function Qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ac(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?s=d=u:d=d.next=u,n=n.next}while(n!==null);d===null?s=d=t:d=d.next=t}else s=d=t;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function la(e,t,n,a){var s=e.updateQueue;Rt=!1;var d=s.firstBaseUpdate,u=s.lastBaseUpdate,f=s.shared.pending;if(f!==null){s.shared.pending=null;var w=f,I=w.next;w.next=null,u===null?d=I:u.next=I,u=w;var W=e.alternate;if(W!==null){W=W.updateQueue;var le=W.lastBaseUpdate;le!==u&&(le===null?W.firstBaseUpdate=I:le.next=I,W.lastBaseUpdate=w)}}if(d!==null){le=s.baseState,u=0,W=I=w=null;do{f=d.lane;var F=d.eventTime;if((a&f)===f){W!==null&&(W=W.next={eventTime:F,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var Z=e,se=d;switch(f=t,F=n,se.tag){case 1:if(Z=se.payload,typeof Z=="function"){le=Z.call(F,le,f);break e}le=Z;break e;case 3:Z.flags=Z.flags&-4097|64;case 0:if(Z=se.payload,f=typeof Z=="function"?Z.call(F,le,f):Z,f==null)break e;le=o({},le,f);break e;case 2:Rt=!0}}d.callback!==null&&(e.flags|=32,f=s.effects,f===null?s.effects=[d]:f.push(d))}else F={eventTime:F,lane:f,tag:d.tag,payload:d.payload,callback:d.callback,next:null},W===null?(I=W=F,w=le):W=W.next=F,u|=f;if(d=d.next,d===null){if(f=s.shared.pending,f===null)break;d=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);W===null&&(w=le),s.baseState=w,s.firstBaseUpdate=I,s.lastBaseUpdate=W,wa|=u,e.lanes=u,e.memoizedState=le}}function rc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],s=a.callback;if(s!==null){if(a.callback=null,a=n,typeof s!="function")throw Error(l(191,s));s.call(a)}}}var oc=new r.Component().refs;function hr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:o({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mr={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Qe(),s=Ot(e),d=Mt(a,s);d.payload=t,n!=null&&(d.callback=n),jt(e,d),Ft(e,s,a)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Qe(),s=Ot(e),d=Mt(a,s);d.tag=1,d.payload=t,n!=null&&(d.callback=n),jt(e,d),Ft(e,s,a)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),a=Ot(e),s=Mt(n,a);s.tag=2,t!=null&&(s.callback=t),jt(e,s),Ft(e,a,n)}};function sc(e,t,n,a,s,d,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,u):t.prototype&&t.prototype.isPureReactComponent?!na(n,a)||!na(s,d):!0}function ic(e,t,n){var a=!1,s=Lt,d=t.contextType;return typeof d=="object"&&d!==null?d=et(d):(s=Ye(t)?Vt:Oe.current,a=t.contextTypes,d=(a=a!=null)?Tn(e,s):Lt),t=new t(n,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mr,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=d),t}function lc(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&mr.enqueueReplaceState(t,t.state,null)}function Xo(e,t,n,a){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=oc,Qo(e);var d=t.contextType;typeof d=="object"&&d!==null?s.context=et(d):(d=Ye(t)?Vt:Oe.current,s.context=Tn(e,d)),la(e,n,s,a),s.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(hr(e,t,d,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&mr.enqueueReplaceState(s,s.state,null),la(e,n,s,a),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4)}var gr=Array.isArray;function ca(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var a=n.stateNode}if(!a)throw Error(l(147,e));var s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var u=a.refs;u===oc&&(u=a.refs={}),d===null?delete u[s]:u[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function fr(e,t){if(e.type!=="textarea")throw Error(l(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function cc(e){function t(S,x){if(e){var k=S.lastEffect;k!==null?(k.nextEffect=x,S.lastEffect=x):S.firstEffect=S.lastEffect=x,x.nextEffect=null,x.flags=8}}function n(S,x){if(!e)return null;for(;x!==null;)t(S,x),x=x.sibling;return null}function a(S,x){for(S=new Map;x!==null;)x.key!==null?S.set(x.key,x):S.set(x.index,x),x=x.sibling;return S}function s(S,x){return S=_t(S,x),S.index=0,S.sibling=null,S}function d(S,x,k){return S.index=k,e?(k=S.alternate,k!==null?(k=k.index,k<x?(S.flags=2,x):k):(S.flags=2,x)):x}function u(S){return e&&S.alternate===null&&(S.flags=2),S}function f(S,x,k,P){return x===null||x.tag!==6?(x=Ns(k,S.mode,P),x.return=S,x):(x=s(x,k),x.return=S,x)}function w(S,x,k,P){return x!==null&&x.elementType===k.type?(P=s(x,k.props),P.ref=ca(S,x,k),P.return=S,P):(P=Nr(k.type,k.key,k.props,null,S.mode,P),P.ref=ca(S,x,k),P.return=S,P)}function I(S,x,k,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==k.containerInfo||x.stateNode.implementation!==k.implementation?(x=Ds(k,S.mode,P),x.return=S,x):(x=s(x,k.children||[]),x.return=S,x)}function W(S,x,k,P,M){return x===null||x.tag!==7?(x=On(k,S.mode,P,M),x.return=S,x):(x=s(x,k),x.return=S,x)}function le(S,x,k){if(typeof x=="string"||typeof x=="number")return x=Ns(""+x,S.mode,k),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case U:return k=Nr(x.type,x.key,x.props,null,S.mode,k),k.ref=ca(S,null,x),k.return=S,k;case $:return x=Ds(x,S.mode,k),x.return=S,x}if(gr(x)||X(x))return x=On(x,S.mode,k,null),x.return=S,x;fr(S,x)}return null}function F(S,x,k,P){var M=x!==null?x.key:null;if(typeof k=="string"||typeof k=="number")return M!==null?null:f(S,x,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case U:return k.key===M?k.type===q?W(S,x,k.props.children,P,M):w(S,x,k,P):null;case $:return k.key===M?I(S,x,k,P):null}if(gr(k)||X(k))return M!==null?null:W(S,x,k,P,null);fr(S,k)}return null}function Z(S,x,k,P,M){if(typeof P=="string"||typeof P=="number")return S=S.get(k)||null,f(x,S,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case U:return S=S.get(P.key===null?k:P.key)||null,P.type===q?W(x,S,P.props.children,M,P.key):w(x,S,P,M);case $:return S=S.get(P.key===null?k:P.key)||null,I(x,S,P,M)}if(gr(P)||X(P))return S=S.get(k)||null,W(x,S,P,M,null);fr(x,P)}return null}function se(S,x,k,P){for(var M=null,pe=null,Q=x,ue=x=0,fe=null;Q!==null&&ue<k.length;ue++){Q.index>ue?(fe=Q,Q=null):fe=Q.sibling;var he=F(S,Q,k[ue],P);if(he===null){Q===null&&(Q=fe);break}e&&Q&&he.alternate===null&&t(S,Q),x=d(he,x,ue),pe===null?M=he:pe.sibling=he,pe=he,Q=fe}if(ue===k.length)return n(S,Q),M;if(Q===null){for(;ue<k.length;ue++)Q=le(S,k[ue],P),Q!==null&&(x=d(Q,x,ue),pe===null?M=Q:pe.sibling=Q,pe=Q);return M}for(Q=a(S,Q);ue<k.length;ue++)fe=Z(Q,S,ue,k[ue],P),fe!==null&&(e&&fe.alternate!==null&&Q.delete(fe.key===null?ue:fe.key),x=d(fe,x,ue),pe===null?M=fe:pe.sibling=fe,pe=fe);return e&&Q.forEach(function(Ht){return t(S,Ht)}),M}function ae(S,x,k,P){var M=X(k);if(typeof M!="function")throw Error(l(150));if(k=M.call(k),k==null)throw Error(l(151));for(var pe=M=null,Q=x,ue=x=0,fe=null,he=k.next();Q!==null&&!he.done;ue++,he=k.next()){Q.index>ue?(fe=Q,Q=null):fe=Q.sibling;var Ht=F(S,Q,he.value,P);if(Ht===null){Q===null&&(Q=fe);break}e&&Q&&Ht.alternate===null&&t(S,Q),x=d(Ht,x,ue),pe===null?M=Ht:pe.sibling=Ht,pe=Ht,Q=fe}if(he.done)return n(S,Q),M;if(Q===null){for(;!he.done;ue++,he=k.next())he=le(S,he.value,P),he!==null&&(x=d(he,x,ue),pe===null?M=he:pe.sibling=he,pe=he);return M}for(Q=a(S,Q);!he.done;ue++,he=k.next())he=Z(Q,S,ue,he.value,P),he!==null&&(e&&he.alternate!==null&&Q.delete(he.key===null?ue:he.key),x=d(he,x,ue),pe===null?M=he:pe.sibling=he,pe=he);return e&&Q.forEach(function(kh){return t(S,kh)}),M}return function(S,x,k,P){var M=typeof k=="object"&&k!==null&&k.type===q&&k.key===null;M&&(k=k.props.children);var pe=typeof k=="object"&&k!==null;if(pe)switch(k.$$typeof){case U:e:{for(pe=k.key,M=x;M!==null;){if(M.key===pe){switch(M.tag){case 7:if(k.type===q){n(S,M.sibling),x=s(M,k.props.children),x.return=S,S=x;break e}break;default:if(M.elementType===k.type){n(S,M.sibling),x=s(M,k.props),x.ref=ca(S,M,k),x.return=S,S=x;break e}}n(S,M);break}else t(S,M);M=M.sibling}k.type===q?(x=On(k.props.children,S.mode,P,k.key),x.return=S,S=x):(P=Nr(k.type,k.key,k.props,null,S.mode,P),P.ref=ca(S,x,k),P.return=S,S=P)}return u(S);case $:e:{for(M=k.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===k.containerInfo&&x.stateNode.implementation===k.implementation){n(S,x.sibling),x=s(x,k.children||[]),x.return=S,S=x;break e}else{n(S,x);break}else t(S,x);x=x.sibling}x=Ds(k,S.mode,P),x.return=S,S=x}return u(S)}if(typeof k=="string"||typeof k=="number")return k=""+k,x!==null&&x.tag===6?(n(S,x.sibling),x=s(x,k),x.return=S,S=x):(n(S,x),x=Ns(k,S.mode,P),x.return=S,S=x),u(S);if(gr(k))return se(S,x,k,P);if(X(k))return ae(S,x,k,P);if(pe&&fr(S,k),typeof k>"u"&&!M)switch(S.tag){case 1:case 22:case 0:case 11:case 15:throw Error(l(152,dn(S.type)||"Component"))}return n(S,x)}}var vr=cc(!0),dc=cc(!1),da={},dt=Pt(da),pa=Pt(da),ua=Pt(da);function Qt(e){if(e===da)throw Error(l(174));return e}function Zo(e,t){switch(Ee(ua,t),Ee(pa,e),Ee(dt,da),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ao(t,e)}Ae(dt),Ee(dt,t)}function Pn(){Ae(dt),Ae(pa),Ae(ua)}function pc(e){Qt(ua.current);var t=Qt(dt.current),n=ao(t,e.type);t!==n&&(Ee(pa,e),Ee(dt,n))}function es(e){pa.current===e&&(Ae(dt),Ae(pa))}var Ie=Pt(0);function yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yt=null,Nt=null,pt=!1;function uc(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function hc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function ts(e){if(pt){var t=Nt;if(t){var n=t;if(!hc(e,t)){if(t=xn(n.nextSibling),!t||!hc(e,t)){e.flags=e.flags&-1025|2,pt=!1,yt=e;return}uc(yt,n)}yt=e,Nt=xn(t.firstChild)}else e.flags=e.flags&-1025|2,pt=!1,yt=e}}function mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function br(e){if(e!==yt)return!1;if(!pt)return mc(e),pt=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Bo(t,e.memoizedProps))for(t=Nt;t;)uc(e,t),t=xn(t.nextSibling);if(mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=yt?xn(e.stateNode.nextSibling):null;return!0}function ns(){Nt=yt=null,pt=!1}var Ln=[];function as(){for(var e=0;e<Ln.length;e++)Ln[e]._workInProgressVersionPrimary=null;Ln.length=0}var ha=R.ReactCurrentDispatcher,tt=R.ReactCurrentBatchConfig,ma=0,Le=null,ze=null,je=null,wr=!1,ga=!1;function $e(){throw Error(l(321))}function rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function os(e,t,n,a,s,d){if(ma=d,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ha.current=e===null||e.memoizedState===null?$u:Vu,e=n(a,s),ga){d=0;do{if(ga=!1,!(25>d))throw Error(l(301));d+=1,je=ze=null,t.updateQueue=null,ha.current=Ju,e=n(a,s)}while(ga)}if(ha.current=Cr,t=ze!==null&&ze.next!==null,ma=0,je=ze=Le=null,wr=!1,t)throw Error(l(300));return e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Le.memoizedState=je=e:je=je.next=e,je}function Zt(){if(ze===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=je===null?Le.memoizedState:je.next;if(t!==null)je=t,ze=e;else{if(e===null)throw Error(l(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},je===null?Le.memoizedState=je=e:je=je.next=e}return je}function ut(e,t){return typeof t=="function"?t(e):t}function fa(e){var t=Zt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var a=ze,s=a.baseQueue,d=n.pending;if(d!==null){if(s!==null){var u=s.next;s.next=d.next,d.next=u}a.baseQueue=s=d,n.pending=null}if(s!==null){s=s.next,a=a.baseState;var f=u=d=null,w=s;do{var I=w.lane;if((ma&I)===I)f!==null&&(f=f.next={lane:0,action:w.action,eagerReducer:w.eagerReducer,eagerState:w.eagerState,next:null}),a=w.eagerReducer===e?w.eagerState:e(a,w.action);else{var W={lane:I,action:w.action,eagerReducer:w.eagerReducer,eagerState:w.eagerState,next:null};f===null?(u=f=W,d=a):f=f.next=W,Le.lanes|=I,wa|=I}w=w.next}while(w!==null&&w!==s);f===null?d=a:f.next=u,Ze(a,t.memoizedState)||(ot=!0),t.memoizedState=a,t.baseState=d,t.baseQueue=f,n.lastRenderedState=a}return[t.memoizedState,n.dispatch]}function va(e){var t=Zt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var a=n.dispatch,s=n.pending,d=t.memoizedState;if(s!==null){n.pending=null;var u=s=s.next;do d=e(d,u.action),u=u.next;while(u!==s);Ze(d,t.memoizedState)||(ot=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,a]}function gc(e,t,n){var a=t._getVersion;a=a(t._source);var s=t._workInProgressVersionPrimary;if(s!==null?e=s===a:(e=e.mutableReadLanes,(e=(ma&e)===e)&&(t._workInProgressVersionPrimary=a,Ln.push(t))),e)return n(t._source);throw Ln.push(t),Error(l(350))}function fc(e,t,n,a){var s=He;if(s===null)throw Error(l(349));var d=t._getVersion,u=d(t._source),f=ha.current,w=f.useState(function(){return gc(s,t,n)}),I=w[1],W=w[0];w=je;var le=e.memoizedState,F=le.refs,Z=F.getSnapshot,se=le.source;le=le.subscribe;var ae=Le;return e.memoizedState={refs:F,source:t,subscribe:a},f.useEffect(function(){F.getSnapshot=n,F.setSnapshot=I;var S=d(t._source);if(!Ze(u,S)){S=n(t._source),Ze(W,S)||(I(S),S=Ot(ae),s.mutableReadLanes|=S&s.pendingLanes),S=s.mutableReadLanes,s.entangledLanes|=S;for(var x=s.entanglements,k=S;0<k;){var P=31-At(k),M=1<<P;x[P]|=S,k&=~M}}},[n,t,a]),f.useEffect(function(){return a(t._source,function(){var S=F.getSnapshot,x=F.setSnapshot;try{x(S(t._source));var k=Ot(ae);s.mutableReadLanes|=k&s.pendingLanes}catch(P){x(function(){throw P})}})},[t,a]),Ze(Z,n)&&Ze(se,t)&&Ze(le,a)||(e={pending:null,dispatch:null,lastRenderedReducer:ut,lastRenderedState:W},e.dispatch=I=cs.bind(null,Le,e),w.queue=e,w.baseQueue=null,W=gc(s,t,n),w.memoizedState=w.baseState=W),W}function vc(e,t,n){var a=Zt();return fc(a,e,t,n)}function ya(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ut,lastRenderedState:e},e=e.dispatch=cs.bind(null,Le,e),[t.memoizedState,e]}function xr(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function yc(e){var t=Xt();return e={current:e},t.memoizedState=e}function kr(){return Zt().memoizedState}function ss(e,t,n,a){var s=Xt();Le.flags|=e,s.memoizedState=xr(1|t,n,void 0,a===void 0?null:a)}function is(e,t,n,a){var s=Zt();a=a===void 0?null:a;var d=void 0;if(ze!==null){var u=ze.memoizedState;if(d=u.destroy,a!==null&&rs(a,u.deps)){xr(t,n,d,a);return}}Le.flags|=e,s.memoizedState=xr(1|t,n,d,a)}function bc(e,t){return ss(516,4,e,t)}function Sr(e,t){return is(516,4,e,t)}function wc(e,t){return is(4,2,e,t)}function xc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kc(e,t,n){return n=n!=null?n.concat([e]):null,is(4,2,xc.bind(null,t,e),n)}function ls(){}function Sc(e,t){var n=Zt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&rs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Cc(e,t){var n=Zt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&rs(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Yu(e,t){var n=An();Kt(98>n?98:n,function(){e(!0)}),Kt(97<n?97:n,function(){var a=tt.transition;tt.transition=1;try{e(!1),t()}finally{tt.transition=a}})}function cs(e,t,n){var a=Qe(),s=Ot(e),d={lane:s,action:n,eagerReducer:null,eagerState:null,next:null},u=t.pending;if(u===null?d.next=d:(d.next=u.next,u.next=d),t.pending=d,u=e.alternate,e===Le||u!==null&&u===Le)ga=wr=!0;else{if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,w=u(f,n);if(d.eagerReducer=u,d.eagerState=w,Ze(w,f))return}catch{}Ft(e,s,a)}}var Cr={readContext:et,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useOpaqueIdentifier:$e,unstable_isNewReconciler:!1},$u={readContext:et,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ss(4,2,xc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Xt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e=a.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=cs.bind(null,Le,e),[a.memoizedState,e]},useRef:yc,useState:ya,useDebugValue:ls,useDeferredValue:function(e){var t=ya(e),n=t[0],a=t[1];return bc(function(){var s=tt.transition;tt.transition=1;try{a(e)}finally{tt.transition=s}},[e]),n},useTransition:function(){var e=ya(!1),t=e[0];return e=Yu.bind(null,e[1]),yc(e),[e,t]},useMutableSource:function(e,t,n){var a=Xt();return a.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},fc(a,e,t,n)},useOpaqueIdentifier:function(){if(pt){var e=!1,t=_u(function(){throw e||(e=!0,n("r:"+(Ho++).toString(36))),Error(l(355))}),n=ya(t)[1];return(Le.mode&2)===0&&(Le.flags|=516,xr(5,function(){n("r:"+(Ho++).toString(36))},void 0,null)),t}return t="r:"+(Ho++).toString(36),ya(t),t},unstable_isNewReconciler:!1},Vu={readContext:et,useCallback:Sc,useContext:et,useEffect:Sr,useImperativeHandle:kc,useLayoutEffect:wc,useMemo:Cc,useReducer:fa,useRef:kr,useState:function(){return fa(ut)},useDebugValue:ls,useDeferredValue:function(e){var t=fa(ut),n=t[0],a=t[1];return Sr(function(){var s=tt.transition;tt.transition=1;try{a(e)}finally{tt.transition=s}},[e]),n},useTransition:function(){var e=fa(ut)[0];return[kr().current,e]},useMutableSource:vc,useOpaqueIdentifier:function(){return fa(ut)[0]},unstable_isNewReconciler:!1},Ju={readContext:et,useCallback:Sc,useContext:et,useEffect:Sr,useImperativeHandle:kc,useLayoutEffect:wc,useMemo:Cc,useReducer:va,useRef:kr,useState:function(){return va(ut)},useDebugValue:ls,useDeferredValue:function(e){var t=va(ut),n=t[0],a=t[1];return Sr(function(){var s=tt.transition;tt.transition=1;try{a(e)}finally{tt.transition=s}},[e]),n},useTransition:function(){var e=va(ut)[0];return[kr().current,e]},useMutableSource:vc,useOpaqueIdentifier:function(){return va(ut)[0]},unstable_isNewReconciler:!1},Ku=R.ReactCurrentOwner,ot=!1;function Ve(e,t,n,a){t.child=e===null?dc(t,null,n,a):vr(t,e.child,n,a)}function Tc(e,t,n,a,s){n=n.render;var d=t.ref;return In(t,s),a=os(e,t,n,a,d,s),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~s,bt(e,t,s)):(t.flags|=1,Ve(e,t,a,s),t.child)}function Ac(e,t,n,a,s,d){if(e===null){var u=n.type;return typeof u=="function"&&!Ms(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,Ec(e,t,u,a,s,d)):(e=Nr(n.type,null,a,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}return u=e.child,(s&d)===0&&(s=u.memoizedProps,n=n.compare,n=n!==null?n:na,n(s,a)&&e.ref===t.ref)?bt(e,t,d):(t.flags|=1,e=_t(u,a),e.ref=t.ref,e.return=t,t.child=e)}function Ec(e,t,n,a,s,d){if(e!==null&&na(e.memoizedProps,a)&&e.ref===t.ref)if(ot=!1,(d&s)!==0)(e.flags&16384)!==0&&(ot=!0);else return t.lanes=e.lanes,bt(e,t,d);return ps(e,t,n,a,d)}function ds(e,t,n){var a=t.pendingProps,s=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden"||a.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},jr(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},jr(t,d!==null?d.baseLanes:n);else return e=d!==null?d.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},jr(t,e),null;else d!==null?(a=d.baseLanes|n,t.memoizedState=null):a=n,jr(t,a);return Ve(e,t,s,n),t.child}function Ic(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function ps(e,t,n,a,s){var d=Ye(n)?Vt:Oe.current;return d=Tn(t,d),In(t,s),n=os(e,t,n,a,d,s),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~s,bt(e,t,s)):(t.flags|=1,Ve(e,t,n,s),t.child)}function Pc(e,t,n,a,s){if(Ye(n)){var d=!0;ir(t)}else d=!1;if(In(t,s),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),ic(t,n,a),Xo(t,n,a,s),a=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var w=u.context,I=n.contextType;typeof I=="object"&&I!==null?I=et(I):(I=Ye(n)?Vt:Oe.current,I=Tn(t,I));var W=n.getDerivedStateFromProps,le=typeof W=="function"||typeof u.getSnapshotBeforeUpdate=="function";le||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==a||w!==I)&&lc(t,u,a,I),Rt=!1;var F=t.memoizedState;u.state=F,la(t,a,u,s),w=t.memoizedState,f!==a||F!==w||qe.current||Rt?(typeof W=="function"&&(hr(t,n,W,a),w=t.memoizedState),(f=Rt||sc(t,n,f,a,F,w,I))?(le||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4)):(typeof u.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=a,t.memoizedState=w),u.props=a,u.state=w,u.context=I,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4),a=!1)}else{u=t.stateNode,nc(e,t),f=t.memoizedProps,I=t.type===t.elementType?f:rt(t.type,f),u.props=I,le=t.pendingProps,F=u.context,w=n.contextType,typeof w=="object"&&w!==null?w=et(w):(w=Ye(n)?Vt:Oe.current,w=Tn(t,w));var Z=n.getDerivedStateFromProps;(W=typeof Z=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==le||F!==w)&&lc(t,u,a,w),Rt=!1,F=t.memoizedState,u.state=F,la(t,a,u,s);var se=t.memoizedState;f!==le||F!==se||qe.current||Rt?(typeof Z=="function"&&(hr(t,n,Z,a),se=t.memoizedState),(I=Rt||sc(t,n,I,a,F,se,w))?(W||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,se,w),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,se,w)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&F===e.memoizedState||(t.flags|=256),t.memoizedProps=a,t.memoizedState=se),u.props=a,u.state=se,u.context=w,a=I):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&F===e.memoizedState||(t.flags|=256),a=!1)}return us(e,t,n,a,d,s)}function us(e,t,n,a,s,d){Ic(e,t);var u=(t.flags&64)!==0;if(!a&&!u)return s&&Yl(t,n,!1),bt(e,t,d);a=t.stateNode,Ku.current=t;var f=u&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&u?(t.child=vr(t,e.child,null,d),t.child=vr(t,null,f,d)):Ve(e,t,f,d),t.memoizedState=a.state,s&&Yl(t,n,!0),t.child}function Lc(e){var t=e.stateNode;t.pendingContext?Wl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wl(e,t.context,!1),Zo(e,t.containerInfo)}var Tr={dehydrated:null,retryLane:0};function Rc(e,t,n){var a=t.pendingProps,s=Ie.current,d=!1,u;return(u=(t.flags&64)!==0)||(u=e!==null&&e.memoizedState===null?!1:(s&2)!==0),u?(d=!0,t.flags&=-65):e!==null&&e.memoizedState===null||a.fallback===void 0||a.unstable_avoidThisFallback===!0||(s|=1),Ee(Ie,s&1),e===null?(a.fallback!==void 0&&ts(t),e=a.children,s=a.fallback,d?(e=Mc(t,e,s,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Tr,e):typeof a.unstable_expectedLoadTime=="number"?(e=Mc(t,e,s,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Tr,t.lanes=33554432,e):(n=js({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?d?(a=Nc(e,t,a.children,a.fallback,n),d=t.child,s=e.child.memoizedState,d.memoizedState=s===null?{baseLanes:n}:{baseLanes:s.baseLanes|n},d.childLanes=e.childLanes&~n,t.memoizedState=Tr,a):(n=jc(e,t,a.children,n),t.memoizedState=null,n):d?(a=Nc(e,t,a.children,a.fallback,n),d=t.child,s=e.child.memoizedState,d.memoizedState=s===null?{baseLanes:n}:{baseLanes:s.baseLanes|n},d.childLanes=e.childLanes&~n,t.memoizedState=Tr,a):(n=jc(e,t,a.children,n),t.memoizedState=null,n)}function Mc(e,t,n,a){var s=e.mode,d=e.child;return t={mode:"hidden",children:t},(s&2)===0&&d!==null?(d.childLanes=0,d.pendingProps=t):d=js(t,s,0,null),n=On(n,s,a,null),d.return=e,n.return=e,d.sibling=n,e.child=d,n}function jc(e,t,n,a){var s=e.child;return e=s.sibling,n=_t(s,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=a),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Nc(e,t,n,a,s){var d=t.mode,u=e.child;e=u.sibling;var f={mode:"hidden",children:n};return(d&2)===0&&t.child!==u?(n=t.child,n.childLanes=0,n.pendingProps=f,u=n.lastEffect,u!==null?(t.firstEffect=n.firstEffect,t.lastEffect=u,u.nextEffect=null):t.firstEffect=t.lastEffect=null):n=_t(u,f),e!==null?a=_t(e,a):(a=On(a,d,s,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,a}function Dc(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),tc(e.return,t)}function hs(e,t,n,a,s,d){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s,lastEffect:d}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=s,u.lastEffect=d)}function Oc(e,t,n){var a=t.pendingProps,s=a.revealOrder,d=a.tail;if(Ve(e,t,a.children,n),a=Ie.current,(a&2)!==0)a=a&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n);else if(e.tag===19)Dc(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ee(Ie,a),(t.mode&2)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&yr(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),hs(t,!1,s,n,d,t.lastEffect);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&yr(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}hs(t,!0,n,null,d,t.lastEffect);break;case"together":hs(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Fc,ms,zc,Bc;Fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ms=function(){},zc=function(e,t,n,a){var s=e.memoizedProps;if(s!==a){e=t.stateNode,Qt(dt.current);var d=null;switch(n){case"input":s=Qr(e,s),a=Qr(e,a),d=[];break;case"option":s=eo(e,s),a=eo(e,a),d=[];break;case"select":s=o({},s,{value:void 0}),a=o({},a,{value:void 0}),d=[];break;case"textarea":s=to(e,s),a=to(e,a),d=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=nr)}ro(n,a);var u;n=null;for(I in s)if(!a.hasOwnProperty(I)&&s.hasOwnProperty(I)&&s[I]!=null)if(I==="style"){var f=s[I];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(m.hasOwnProperty(I)?d||(d=[]):(d=d||[]).push(I,null));for(I in a){var w=a[I];if(f=s?.[I],a.hasOwnProperty(I)&&w!==f&&(w!=null||f!=null))if(I==="style")if(f){for(u in f)!f.hasOwnProperty(u)||w&&w.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in w)w.hasOwnProperty(u)&&f[u]!==w[u]&&(n||(n={}),n[u]=w[u])}else n||(d||(d=[]),d.push(I,n)),n=w;else I==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,f=f?f.__html:void 0,w!=null&&f!==w&&(d=d||[]).push(I,w)):I==="children"?typeof w!="string"&&typeof w!="number"||(d=d||[]).push(I,""+w):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(m.hasOwnProperty(I)?(w!=null&&I==="onScroll"&&Te("scroll",e),d||f===w||(d=[])):typeof w=="object"&&w!==null&&w.$$typeof===B?w.toString():(d=d||[]).push(I,w))}n&&(d=d||[]).push("style",n);var I=d;(t.updateQueue=I)&&(t.flags|=4)}},Bc=function(e,t,n,a){n!==a&&(t.flags|=4)};function ba(e,t){if(!pt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Qu(e,t,n){var a=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ye(t.type)&&sr(),null;case 3:return Pn(),Ae(qe),Ae(Oe),as(),a=t.stateNode,a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:a.hydrate||(t.flags|=256)),ms(t),null;case 5:es(t);var s=Qt(ua.current);if(n=t.type,e!==null&&t.stateNode!=null)zc(e,t,n,a,s),e.ref!==t.ref&&(t.flags|=128);else{if(!a){if(t.stateNode===null)throw Error(l(166));return null}if(e=Qt(dt.current),br(t)){a=t.stateNode,n=t.type;var d=t.memoizedProps;switch(a[It]=t,a[rr]=d,n){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(e=0;e<ra.length;e++)Te(ra[e],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Li(a,d),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Te("invalid",a);break;case"textarea":ji(a,d),Te("invalid",a)}ro(n,d),e=null;for(var u in d)d.hasOwnProperty(u)&&(s=d[u],u==="children"?typeof s=="string"?a.textContent!==s&&(e=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(e=["children",""+s]):m.hasOwnProperty(u)&&s!=null&&u==="onScroll"&&Te("scroll",a));switch(n){case"input":Ba(a),Mi(a,d,!0);break;case"textarea":Ba(a),Di(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=nr)}a=e,t.updateQueue=a,a!==null&&(t.flags|=4)}else{switch(u=s.nodeType===9?s:s.ownerDocument,e===no.html&&(e=Oi(n)),e===no.html?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(n,{is:a.is}):(e=u.createElement(n),n==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,n),e[It]=t,e[rr]=a,Fc(e,t,!1,!1),t.stateNode=e,u=oo(n,a),n){case"dialog":Te("cancel",e),Te("close",e),s=a;break;case"iframe":case"object":case"embed":Te("load",e),s=a;break;case"video":case"audio":for(s=0;s<ra.length;s++)Te(ra[s],e);s=a;break;case"source":Te("error",e),s=a;break;case"img":case"image":case"link":Te("error",e),Te("load",e),s=a;break;case"details":Te("toggle",e),s=a;break;case"input":Li(e,a),s=Qr(e,a),Te("invalid",e);break;case"option":s=eo(e,a);break;case"select":e._wrapperState={wasMultiple:!!a.multiple},s=o({},a,{value:void 0}),Te("invalid",e);break;case"textarea":ji(e,a),s=to(e,a),Te("invalid",e);break;default:s=a}ro(n,s);var f=s;for(d in f)if(f.hasOwnProperty(d)){var w=f[d];d==="style"?Bi(e,w):d==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Fi(e,w)):d==="children"?typeof w=="string"?(n!=="textarea"||w!=="")&&_n(e,w):typeof w=="number"&&_n(e,""+w):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(m.hasOwnProperty(d)?w!=null&&d==="onScroll"&&Te("scroll",e):w!=null&&ne(e,d,w,u))}switch(n){case"input":Ba(e),Mi(e,a,!1);break;case"textarea":Ba(e),Di(e);break;case"option":a.value!=null&&e.setAttribute("value",""+kt(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?pn(e,!!a.multiple,d,!1):a.defaultValue!=null&&pn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=nr)}Bl(n,a)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Bc(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));n=Qt(ua.current),Qt(dt.current),br(t)?(a=t.stateNode,n=t.memoizedProps,a[It]=t,a.nodeValue!==n&&(t.flags|=4)):(a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[It]=t,t.stateNode=a)}return null;case 13:return Ae(Ie),a=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(a=a!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&br(t):n=e.memoizedState!==null,a&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Ie.current&1)!==0?Ne===0&&(Ne=3):((Ne===0||Ne===3)&&(Ne=4),He===null||(wa&134217727)===0&&(Mn&134217727)===0||Nn(He,Be))),(a||n)&&(t.flags|=4),null);case 4:return Pn(),ms(t),e===null&&Nl(t.stateNode.containerInfo),null;case 10:return Ko(t),null;case 17:return Ye(t.type)&&sr(),null;case 19:if(Ae(Ie),a=t.memoizedState,a===null)return null;if(d=(t.flags&64)!==0,u=a.rendering,u===null)if(d)ba(a,!1);else{if(Ne!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(u=yr(e),u!==null){for(t.flags|=64,ba(a,!1),d=u.updateQueue,d!==null&&(t.updateQueue=d,t.flags|=4),a.lastEffect===null&&(t.firstEffect=null),t.lastEffect=a.lastEffect,a=n,n=t.child;n!==null;)d=n,e=a,d.flags&=2,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null,u=d.alternate,u===null?(d.childLanes=0,d.lanes=e,d.child=null,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=u.childLanes,d.lanes=u.lanes,d.child=u.child,d.memoizedProps=u.memoizedProps,d.memoizedState=u.memoizedState,d.updateQueue=u.updateQueue,d.type=u.type,e=u.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Ie,Ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&Fe()>Ts&&(t.flags|=64,d=!0,ba(a,!1),t.lanes=33554432)}else{if(!d)if(e=yr(u),e!==null){if(t.flags|=64,d=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ba(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!pt)return t=t.lastEffect=a.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Fe()-a.renderingStartTime>Ts&&n!==1073741824&&(t.flags|=64,d=!0,ba(a,!1),t.lanes=33554432);a.isBackwards?(u.sibling=t.child,t.child=u):(n=a.last,n!==null?n.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.lastEffect=t.lastEffect,a.renderingStartTime=Fe(),n.sibling=null,t=Ie.current,Ee(Ie,d?t&1|2:t&1),n):null;case 23:case 24:return Rs(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&a.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(l(156,t.tag))}function Xu(e){switch(e.tag){case 1:Ye(e.type)&&sr();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Pn(),Ae(qe),Ae(Oe),as(),t=e.flags,(t&64)!==0)throw Error(l(285));return e.flags=t&-4097|64,e;case 5:return es(e),null;case 13:return Ae(Ie),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return Ae(Ie),null;case 4:return Pn(),null;case 10:return Ko(e),null;case 23:case 24:return Rs(),null;default:return null}}function gs(e,t){try{var n="",a=t;do n+=Rp(a),a=a.return;while(a);var s=n}catch(d){s=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:s}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zu=typeof WeakMap=="function"?WeakMap:Map;function _c(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Ir||(Ir=!0,As=a),fs(e,t)},n}function Hc(e,t,n){n=Mt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=t.value;n.payload=function(){return fs(e,t),a(s)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){typeof a!="function"&&(ht===null?ht=new Set([this]):ht.add(this),fs(e,t));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}var eh=typeof WeakSet=="function"?WeakSet:Set;function Gc(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Bt(e,n)}else t.current=null}function th(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,a=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:rt(t.type,n),a),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&_o(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(l(163))}function nh(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var a=e.create;e.destroy=a()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var s=e;a=s.next,s=s.tag,(s&4)!==0&&(s&1)!==0&&(ad(n,e),dh(n,e)),e=a}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(a=n.elementType===n.type?t.memoizedProps:rt(n.type,t.memoizedProps),e.componentDidUpdate(a,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&rc(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}rc(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Bl(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&tl(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(l(163))}function Uc(e,t){for(var n=e;;){if(n.tag===5){var a=n.stateNode;if(t)a=a.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{a=n.stateNode;var s=n.memoizedProps.style;s=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=zi("display",s)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Wc(e,t){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Uo,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var a=n,s=a.destroy;if(a=a.tag,s!==void 0)if((a&4)!==0)ad(t,n);else{a=t;try{s()}catch(d){Bt(a,d)}}n=n.next}while(n!==e)}break;case 1:if(Gc(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(d){Bt(t,d)}break;case 5:Gc(t);break;case 4:Vc(e,t)}}function qc(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Yc(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:{for(var t=e.return;t!==null;){if(Yc(t))break e;t=t.return}throw Error(l(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var a=!1;break;case 3:t=t.containerInfo,a=!0;break;case 4:t=t.containerInfo,a=!0;break;default:throw Error(l(161))}n.flags&16&&(_n(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Yc(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}a?vs(e,n,t):ys(e,n,t)}function vs(e,t,n){var a=e.tag,s=a===5||a===6;if(s)e=s?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nr));else if(a!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function ys(e,t,n){var a=e.tag,s=a===5||a===6;if(s)e=s?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}function Vc(e,t){for(var n=t,a=!1,s,d;;){if(!a){a=n.return;e:for(;;){if(a===null)throw Error(l(160));switch(s=a.stateNode,a.tag){case 5:d=!1;break e;case 3:s=s.containerInfo,d=!0;break e;case 4:s=s.containerInfo,d=!0;break e}a=a.return}a=!0}if(n.tag===5||n.tag===6){e:for(var u=e,f=n,w=f;;)if(Wc(u,w),w.child!==null&&w.tag!==4)w.child.return=w,w=w.child;else{if(w===f)break e;for(;w.sibling===null;){if(w.return===null||w.return===f)break e;w=w.return}w.sibling.return=w.return,w=w.sibling}d?(u=s,f=n.stateNode,u.nodeType===8?u.parentNode.removeChild(f):u.removeChild(f)):s.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){s=n.stateNode.containerInfo,d=!0,n.child.return=n,n=n.child;continue}}else if(Wc(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(a=!1)}n.sibling.return=n.return,n=n.sibling}}function bs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do(a.tag&3)===3&&(e=a.destroy,a.destroy=void 0,e!==void 0&&e()),a=a.next;while(a!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){a=t.memoizedProps;var s=e!==null?e.memoizedProps:a;e=t.type;var d=t.updateQueue;if(t.updateQueue=null,d!==null){for(n[rr]=a,e==="input"&&a.type==="radio"&&a.name!=null&&Ri(n,a),oo(e,s),t=oo(e,a),s=0;s<d.length;s+=2){var u=d[s],f=d[s+1];u==="style"?Bi(n,f):u==="dangerouslySetInnerHTML"?Fi(n,f):u==="children"?_n(n,f):ne(n,u,f,t)}switch(e){case"input":Xr(n,a);break;case"textarea":Ni(n,a);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!a.multiple,d=a.value,d!=null?pn(n,!!a.multiple,d,!1):e!==!!a.multiple&&(a.defaultValue!=null?pn(n,!!a.multiple,a.defaultValue,!0):pn(n,!!a.multiple,a.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(l(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,tl(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Cs=Fe(),Uc(t.child,!0)),Jc(t);return;case 19:Jc(t);return;case 17:return;case 23:case 24:Uc(t,t.memoizedState!==null);return}throw Error(l(163))}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eh),t.forEach(function(a){var s=hh.bind(null,e,a);n.has(a)||(n.add(a),a.then(s,s))})}}function ah(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var rh=Math.ceil,Ar=R.ReactCurrentDispatcher,ws=R.ReactCurrentOwner,oe=0,He=null,Re=null,Be=0,en=0,xs=Pt(0),Ne=0,Er=null,Rn=0,wa=0,Mn=0,ks=0,Ss=null,Cs=0,Ts=1/0;function jn(){Ts=Fe()+500}var V=null,Ir=!1,As=null,ht=null,Dt=!1,xa=null,ka=90,Es=[],Is=[],wt=null,Sa=0,Ps=null,Pr=-1,xt=0,Lr=0,Ca=null,Rr=!1;function Qe(){return(oe&48)!==0?Fe():Pr!==-1?Pr:Pr=Fe()}function Ot(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return An()===99?1:2;if(xt===0&&(xt=Rn),qu.transition!==0){Lr!==0&&(Lr=Ss!==null?Ss.pendingLanes:0),e=xt;var t=4186112&~Lr;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=An(),(oe&4)!==0&&e===98?e=$a(12,xt):(e=$p(e),e=$a(e,xt)),e}function Ft(e,t,n){if(50<Sa)throw Sa=0,Ps=null,Error(l(185));if(e=Mr(e,t),e===null)return null;Va(e,t,n),e===He&&(Mn|=t,Ne===4&&Nn(e,Be));var a=An();t===1?(oe&8)!==0&&(oe&48)===0?Ls(e):(nt(e,n),oe===0&&(jn(),ct())):((oe&4)===0||a!==98&&a!==99||(wt===null?wt=new Set([e]):wt.add(e)),nt(e,n)),Ss=e}function Mr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function nt(e,t){for(var n=e.callbackNode,a=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,u=e.pendingLanes;0<u;){var f=31-At(u),w=1<<f,I=d[f];if(I===-1){if((w&a)===0||(w&s)!==0){I=t,gn(w);var W=Ce;d[f]=10<=W?I+250:6<=W?I+5e3:-1}}else I<=t&&(e.expiredLanes|=w);u&=~w}if(a=Kn(e,e===He?Be:0),t=Ce,a===0)n!==null&&(n!==$o&&qo(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==$o&&qo(n)}t===15?(n=Ls.bind(null,e),vt===null?(vt=[n],cr=Wo(lr,ec)):vt.push(n),n=$o):t===14?n=ia(99,Ls.bind(null,e)):(n=Vp(t),n=ia(n,Kc.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Kc(e){if(Pr=-1,Lr=xt=0,(oe&48)!==0)throw Error(l(327));var t=e.callbackNode;if(zt()&&e.callbackNode!==t)return null;var n=Kn(e,e===He?Be:0);if(n===0)return null;var a=n,s=oe;oe|=16;var d=ed();(He!==e||Be!==a)&&(jn(),Dn(e,a));do try{ih();break}catch(f){Zc(e,f)}while(!0);if(Jo(),Ar.current=d,oe=s,Re!==null?a=0:(He=null,Be=0,a=Ne),(Rn&Mn)!==0)Dn(e,0);else if(a!==0){if(a===2&&(oe|=64,e.hydrate&&(e.hydrate=!1,_o(e.containerInfo)),n=ll(e),n!==0&&(a=Ta(e,n))),a===1)throw t=Er,Dn(e,0),Nn(e,n),nt(e,Fe()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,a){case 0:case 1:throw Error(l(345));case 2:tn(e);break;case 3:if(Nn(e,n),(n&62914560)===n&&(a=Cs+500-Fe(),10<a)){if(Kn(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){Qe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=_l(tn.bind(null,e),a);break}tn(e);break;case 4:if(Nn(e,n),(n&4186112)===n)break;for(a=e.eventTimes,s=-1;0<n;){var u=31-At(n);d=1<<u,u=a[u],u>s&&(s=u),n&=~d}if(n=s,n=Fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*rh(n/1960))-n,10<n){e.timeoutHandle=_l(tn.bind(null,e),n);break}tn(e);break;case 5:tn(e);break;default:throw Error(l(329))}}return nt(e,Fe()),e.callbackNode===t?Kc.bind(null,e):null}function Nn(e,t){for(t&=~ks,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),a=1<<n;e[n]=-1,t&=~a}}function Ls(e){if((oe&48)!==0)throw Error(l(327));if(zt(),e===He&&(e.expiredLanes&Be)!==0){var t=Be,n=Ta(e,t);(Rn&Mn)!==0&&(t=Kn(e,t),n=Ta(e,t))}else t=Kn(e,0),n=Ta(e,t);if(e.tag!==0&&n===2&&(oe|=64,e.hydrate&&(e.hydrate=!1,_o(e.containerInfo)),t=ll(e),t!==0&&(n=Ta(e,t))),n===1)throw n=Er,Dn(e,0),Nn(e,t),nt(e,Fe()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e),nt(e,Fe()),null}function oh(){if(wt!==null){var e=wt;wt=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,nt(t,Fe())})}ct()}function Qc(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(jn(),ct())}}function Xc(e,t){var n=oe;oe&=-2,oe|=8;try{return e(t)}finally{oe=n,oe===0&&(jn(),ct())}}function jr(e,t){Ee(xs,en),en|=t,Rn|=t}function Rs(){en=xs.current,Ae(xs)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bu(n)),Re!==null)for(n=Re.return;n!==null;){var a=n;switch(a.tag){case 1:a=a.type.childContextTypes,a!=null&&sr();break;case 3:Pn(),Ae(qe),Ae(Oe),as();break;case 5:es(a);break;case 4:Pn();break;case 13:Ae(Ie);break;case 19:Ae(Ie);break;case 10:Ko(a);break;case 23:case 24:Rs()}n=n.return}He=e,Re=_t(e.current,null),Be=en=Rn=t,Ne=0,Er=null,ks=Mn=wa=0}function Zc(e,t){do{var n=Re;try{if(Jo(),ha.current=Cr,wr){for(var a=Le.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}wr=!1}if(ma=0,je=ze=Le=null,ga=!1,ws.current=null,n===null||n.return===null){Ne=1,Er=t,Re=null;break}e:{var d=e,u=n.return,f=n,w=t;if(t=Be,f.flags|=2048,f.firstEffect=f.lastEffect=null,w!==null&&typeof w=="object"&&typeof w.then=="function"){var I=w;if((f.mode&2)===0){var W=f.alternate;W?(f.updateQueue=W.updateQueue,f.memoizedState=W.memoizedState,f.lanes=W.lanes):(f.updateQueue=null,f.memoizedState=null)}var le=(Ie.current&1)!==0,F=u;do{var Z;if(Z=F.tag===13){var se=F.memoizedState;if(se!==null)Z=se.dehydrated!==null;else{var ae=F.memoizedProps;Z=ae.fallback===void 0?!1:ae.unstable_avoidThisFallback!==!0?!0:!le}}if(Z){var S=F.updateQueue;if(S===null){var x=new Set;x.add(I),F.updateQueue=x}else S.add(I);if((F.mode&2)===0){if(F.flags|=64,f.flags|=16384,f.flags&=-2981,f.tag===1)if(f.alternate===null)f.tag=17;else{var k=Mt(-1,1);k.tag=2,jt(f,k)}f.lanes|=1;break e}w=void 0,f=t;var P=d.pingCache;if(P===null?(P=d.pingCache=new Zu,w=new Set,P.set(I,w)):(w=P.get(I),w===void 0&&(w=new Set,P.set(I,w))),!w.has(f)){w.add(f);var M=uh.bind(null,d,I,f);I.then(M,M)}F.flags|=4096,F.lanes=t;break e}F=F.return}while(F!==null);w=Error((dn(f.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ne!==5&&(Ne=2),w=gs(w,f),F=u;do{switch(F.tag){case 3:d=w,F.flags|=4096,t&=-t,F.lanes|=t;var pe=_c(F,d,t);ac(F,pe);break e;case 1:d=w;var Q=F.type,ue=F.stateNode;if((F.flags&64)===0&&(typeof Q.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(ht===null||!ht.has(ue)))){F.flags|=4096,t&=-t,F.lanes|=t;var fe=Hc(F,d,t);ac(F,fe);break e}}F=F.return}while(F!==null)}nd(n)}catch(he){t=he,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function ed(){var e=Ar.current;return Ar.current=Cr,e===null?Cr:e}function Ta(e,t){var n=oe;oe|=16;var a=ed();He===e&&Be===t||Dn(e,t);do try{sh();break}catch(s){Zc(e,s)}while(!0);if(Jo(),oe=n,Ar.current=a,Re!==null)throw Error(l(261));return He=null,Be=0,Ne}function sh(){for(;Re!==null;)td(Re)}function ih(){for(;Re!==null&&!Gu();)td(Re)}function td(e){var t=od(e.alternate,e,en);e.memoizedProps=e.pendingProps,t===null?nd(e):Re=t,ws.current=null}function nd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=Qu(n,t,en),n!==null){Re=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(en&1073741824)!==0||(n.mode&4)===0){for(var a=0,s=n.child;s!==null;)a|=s.lanes|s.childLanes,s=s.sibling;n.childLanes=a}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Xu(t),n!==null){n.flags&=2047,Re=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ne===0&&(Ne=5)}function tn(e){var t=An();return Kt(99,lh.bind(null,e,t)),null}function lh(e,t){do zt();while(xa!==null);if((oe&48)!==0)throw Error(l(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null;var a=n.lanes|n.childLanes,s=a,d=e.pendingLanes&~s;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=s,e.mutableReadLanes&=s,e.entangledLanes&=s,s=e.entanglements;for(var u=e.eventTimes,f=e.expirationTimes;0<d;){var w=31-At(d),I=1<<w;s[w]=0,u[w]=-1,f[w]=-1,d&=~I}if(wt!==null&&(a&24)===0&&wt.has(e)&&wt.delete(e),e===He&&(Re=He=null,Be=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,a=n.firstEffect):a=n:a=n.firstEffect,a!==null){if(s=oe,oe|=32,ws.current=null,Fo=Ja,u=Il(),jo(u)){if("selectionStart"in u)f={start:u.selectionStart,end:u.selectionEnd};else e:if(f=(f=u.ownerDocument)&&f.defaultView||window,(I=f.getSelection&&f.getSelection())&&I.rangeCount!==0){f=I.anchorNode,d=I.anchorOffset,w=I.focusNode,I=I.focusOffset;try{f.nodeType,w.nodeType}catch{f=null;break e}var W=0,le=-1,F=-1,Z=0,se=0,ae=u,S=null;t:for(;;){for(var x;ae!==f||d!==0&&ae.nodeType!==3||(le=W+d),ae!==w||I!==0&&ae.nodeType!==3||(F=W+I),ae.nodeType===3&&(W+=ae.nodeValue.length),(x=ae.firstChild)!==null;)S=ae,ae=x;for(;;){if(ae===u)break t;if(S===f&&++Z===d&&(le=W),S===w&&++se===I&&(F=W),(x=ae.nextSibling)!==null)break;ae=S,S=ae.parentNode}ae=x}f=le===-1||F===-1?null:{start:le,end:F}}else f=null;f=f||{start:0,end:0}}else f=null;zo={focusedElem:u,selectionRange:f},Ja=!1,Ca=null,Rr=!1,V=a;do try{ch()}catch(he){if(V===null)throw Error(l(330));Bt(V,he),V=V.nextEffect}while(V!==null);Ca=null,V=a;do try{for(u=e;V!==null;){var k=V.flags;if(k&16&&_n(V.stateNode,""),k&128){var P=V.alternate;if(P!==null){var M=P.ref;M!==null&&(typeof M=="function"?M(null):M.current=null)}}switch(k&1038){case 2:$c(V),V.flags&=-3;break;case 6:$c(V),V.flags&=-3,bs(V.alternate,V);break;case 1024:V.flags&=-1025;break;case 1028:V.flags&=-1025,bs(V.alternate,V);break;case 4:bs(V.alternate,V);break;case 8:f=V,Vc(u,f);var pe=f.alternate;qc(f),pe!==null&&qc(pe)}V=V.nextEffect}}catch(he){if(V===null)throw Error(l(330));Bt(V,he),V=V.nextEffect}while(V!==null);if(M=zo,P=Il(),k=M.focusedElem,u=M.selectionRange,P!==k&&k&&k.ownerDocument&&El(k.ownerDocument.documentElement,k)){for(u!==null&&jo(k)&&(P=u.start,M=u.end,M===void 0&&(M=P),"selectionStart"in k?(k.selectionStart=P,k.selectionEnd=Math.min(M,k.value.length)):(M=(P=k.ownerDocument||document)&&P.defaultView||window,M.getSelection&&(M=M.getSelection(),f=k.textContent.length,pe=Math.min(u.start,f),u=u.end===void 0?pe:Math.min(u.end,f),!M.extend&&pe>u&&(f=u,u=pe,pe=f),f=Al(k,pe),d=Al(k,u),f&&d&&(M.rangeCount!==1||M.anchorNode!==f.node||M.anchorOffset!==f.offset||M.focusNode!==d.node||M.focusOffset!==d.offset)&&(P=P.createRange(),P.setStart(f.node,f.offset),M.removeAllRanges(),pe>u?(M.addRange(P),M.extend(d.node,d.offset)):(P.setEnd(d.node,d.offset),M.addRange(P)))))),P=[],M=k;M=M.parentNode;)M.nodeType===1&&P.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<P.length;k++)M=P[k],M.element.scrollLeft=M.left,M.element.scrollTop=M.top}Ja=!!Fo,zo=Fo=null,e.current=n,V=a;do try{for(k=e;V!==null;){var Q=V.flags;if(Q&36&&nh(k,V.alternate,V),Q&128){P=void 0;var ue=V.ref;if(ue!==null){var fe=V.stateNode;V.tag,P=fe,typeof ue=="function"?ue(P):ue.current=P}}V=V.nextEffect}}catch(he){if(V===null)throw Error(l(330));Bt(V,he),V=V.nextEffect}while(V!==null);V=null,Wu(),oe=s}else e.current=n;if(Dt)Dt=!1,xa=e,ka=t;else for(V=a;V!==null;)t=V.nextEffect,V.nextEffect=null,V.flags&8&&(Q=V,Q.sibling=null,Q.stateNode=null),V=t;if(a=e.pendingLanes,a===0&&(ht=null),a===1?e===Ps?Sa++:(Sa=0,Ps=e):Sa=0,n=n.stateNode,Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Uo,n,void 0,(n.current.flags&64)===64)}catch{}if(nt(e,Fe()),Ir)throw Ir=!1,e=As,As=null,e;return(oe&8)!==0||ct(),null}function ch(){for(;V!==null;){var e=V.alternate;Rr||Ca===null||((V.flags&8)!==0?Vi(V,Ca)&&(Rr=!0):V.tag===13&&ah(e,V)&&Vi(V,Ca)&&(Rr=!0));var t=V.flags;(t&256)!==0&&th(e,V),(t&512)===0||Dt||(Dt=!0,ia(97,function(){return zt(),null})),V=V.nextEffect}}function zt(){if(ka!==90){var e=97<ka?97:ka;return ka=90,Kt(e,ph)}return!1}function dh(e,t){Es.push(t,e),Dt||(Dt=!0,ia(97,function(){return zt(),null}))}function ad(e,t){Is.push(t,e),Dt||(Dt=!0,ia(97,function(){return zt(),null}))}function ph(){if(xa===null)return!1;var e=xa;if(xa=null,(oe&48)!==0)throw Error(l(331));var t=oe;oe|=32;var n=Is;Is=[];for(var a=0;a<n.length;a+=2){var s=n[a],d=n[a+1],u=s.destroy;if(s.destroy=void 0,typeof u=="function")try{u()}catch(w){if(d===null)throw Error(l(330));Bt(d,w)}}for(n=Es,Es=[],a=0;a<n.length;a+=2){s=n[a],d=n[a+1];try{var f=s.create;s.destroy=f()}catch(w){if(d===null)throw Error(l(330));Bt(d,w)}}for(f=e.current.firstEffect;f!==null;)e=f.nextEffect,f.nextEffect=null,f.flags&8&&(f.sibling=null,f.stateNode=null),f=e;return oe=t,ct(),!0}function rd(e,t,n){t=gs(n,t),t=_c(e,t,1),jt(e,t),t=Qe(),e=Mr(e,1),e!==null&&(Va(e,1,t),nt(e,t))}function Bt(e,t){if(e.tag===3)rd(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){rd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ht===null||!ht.has(a))){e=gs(t,e);var s=Hc(n,e,1);if(jt(n,s),s=Qe(),n=Mr(n,1),n!==null)Va(n,1,s),nt(n,s);else if(typeof a.componentDidCatch=="function"&&(ht===null||!ht.has(a)))try{a.componentDidCatch(t,e)}catch{}break}}n=n.return}}function uh(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Be&n)===n&&(Ne===4||Ne===3&&(Be&62914560)===Be&&500>Fe()-Cs?Dn(e,0):ks|=n),nt(e,t)}function hh(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=An()===99?1:2:(xt===0&&(xt=Rn),t=fn(62914560&~xt),t===0&&(t=4194304))),n=Qe(),e=Mr(e,t),e!==null&&(Va(e,t,n),nt(e,n))}var od;od=function(e,t,n){var a=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)ot=!0;else if((n&a)!==0)ot=(e.flags&16384)!==0;else{switch(ot=!1,t.tag){case 3:Lc(t),ns();break;case 5:pc(t);break;case 1:Ye(t.type)&&ir(t);break;case 4:Zo(t,t.stateNode.containerInfo);break;case 10:a=t.memoizedProps.value;var s=t.type._context;Ee(dr,s._currentValue),s._currentValue=a;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?Rc(e,t,n):(Ee(Ie,Ie.current&1),t=bt(e,t,n),t!==null?t.sibling:null);Ee(Ie,Ie.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&64)!==0){if(a)return Oc(e,t,n);t.flags|=64}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Ie,Ie.current),a)break;return null;case 23:case 24:return t.lanes=0,ds(e,t,n)}return bt(e,t,n)}else ot=!1;switch(t.lanes=0,t.tag){case 2:if(a=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,s=Tn(t,Oe.current),In(t,n),s=os(null,t,a,e,s,n),t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(a)){var d=!0;ir(t)}else d=!1;t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Qo(t);var u=a.getDerivedStateFromProps;typeof u=="function"&&hr(t,a,u,e),s.updater=mr,t.stateNode=s,s._reactInternals=t,Xo(t,a,e,n),t=us(null,t,a,!0,d,n)}else t.tag=0,Ve(null,t,s,n),t=t.child;return t;case 16:s=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,d=s._init,s=d(s._payload),t.type=s,d=t.tag=gh(s),e=rt(s,e),d){case 0:t=ps(null,t,s,e,n);break e;case 1:t=Pc(null,t,s,e,n);break e;case 11:t=Tc(null,t,s,e,n);break e;case 14:t=Ac(null,t,s,rt(s.type,e),a,n);break e}throw Error(l(306,s,""))}return t;case 0:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:rt(a,s),ps(e,t,a,s,n);case 1:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:rt(a,s),Pc(e,t,a,s,n);case 3:if(Lc(t),a=t.updateQueue,e===null||a===null)throw Error(l(282));if(a=t.pendingProps,s=t.memoizedState,s=s!==null?s.element:null,nc(e,t),la(t,a,null,n),a=t.memoizedState.element,a===s)ns(),t=bt(e,t,n);else{if(s=t.stateNode,(d=s.hydrate)&&(Nt=xn(t.stateNode.containerInfo.firstChild),yt=t,d=pt=!0),d){if(e=s.mutableSourceEagerHydrationData,e!=null)for(s=0;s<e.length;s+=2)d=e[s],d._workInProgressVersionPrimary=e[s+1],Ln.push(d);for(n=dc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Ve(e,t,a,n),ns();t=t.child}return t;case 5:return pc(t),e===null&&ts(t),a=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,u=s.children,Bo(a,s)?u=null:d!==null&&Bo(a,d)&&(t.flags|=16),Ic(e,t),Ve(e,t,u,n),t.child;case 6:return e===null&&ts(t),null;case 13:return Rc(e,t,n);case 4:return Zo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=vr(t,null,a,n):Ve(e,t,a,n),t.child;case 11:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:rt(a,s),Tc(e,t,a,s,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{a=t.type._context,s=t.pendingProps,u=t.memoizedProps,d=s.value;var f=t.type._context;if(Ee(dr,f._currentValue),f._currentValue=d,u!==null)if(f=u.value,d=Ze(f,d)?0:(typeof a._calculateChangedBits=="function"?a._calculateChangedBits(f,d):1073741823)|0,d===0){if(u.children===s.children&&!qe.current){t=bt(e,t,n);break e}}else for(f=t.child,f!==null&&(f.return=t);f!==null;){var w=f.dependencies;if(w!==null){u=f.child;for(var I=w.firstContext;I!==null;){if(I.context===a&&(I.observedBits&d)!==0){f.tag===1&&(I=Mt(-1,n&-n),I.tag=2,jt(f,I)),f.lanes|=n,I=f.alternate,I!==null&&(I.lanes|=n),tc(f.return,n),w.lanes|=n;break}I=I.next}}else u=f.tag===10&&f.type===t.type?null:f.child;if(u!==null)u.return=f;else for(u=f;u!==null;){if(u===t){u=null;break}if(f=u.sibling,f!==null){f.return=u.return,u=f;break}u=u.return}f=u}Ve(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,d=t.pendingProps,a=d.children,In(t,n),s=et(s,d.unstable_observedBits),a=a(s),t.flags|=1,Ve(e,t,a,n),t.child;case 14:return s=t.type,d=rt(s,t.pendingProps),d=rt(s.type,d),Ac(e,t,s,d,a,n);case 15:return Ec(e,t,t.type,t.pendingProps,a,n);case 17:return a=t.type,s=t.pendingProps,s=t.elementType===a?s:rt(a,s),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Ye(a)?(e=!0,ir(t)):e=!1,In(t,n),ic(t,a,s),Xo(t,a,s,n),us(null,t,a,!0,e,n);case 19:return Oc(e,t,n);case 23:return ds(e,t,n);case 24:return ds(e,t,n)}throw Error(l(156,t.tag))};function mh(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,a){return new mh(e,t,n,a)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gh(e){if(typeof e=="function")return Ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===re)return 11;if(e===Pe)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nr(e,t,n,a,s,d){var u=2;if(a=e,typeof e=="function")Ms(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case q:return On(n.children,s,d,t);case H:u=8,s|=16;break;case ce:u=8,s|=1;break;case te:return e=at(12,n,t,s|8),e.elementType=te,e.type=te,e.lanes=d,e;case ge:return e=at(13,n,t,s),e.type=ge,e.elementType=ge,e.lanes=d,e;case ie:return e=at(19,n,t,s),e.elementType=ie,e.lanes=d,e;case E:return js(n,s,d,t);case L:return e=at(24,n,t,s),e.elementType=L,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:u=10;break e;case ee:u=9;break e;case re:u=11;break e;case Pe:u=14;break e;case C:u=16,a=null;break e;case O:u=22;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=at(u,n,t,s),t.elementType=e,t.type=a,t.lanes=d,t}function On(e,t,n,a){return e=at(7,e,a,t),e.lanes=n,e}function js(e,t,n,a){return e=at(23,e,a,t),e.elementType=E,e.lanes=n,e}function Ns(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Ds(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fh(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=xo(0),this.expirationTimes=xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xo(0),this.mutableSourceEagerHydrationData=null}function vh(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Dr(e,t,n,a){var s=t.current,d=Qe(),u=Ot(s);e:if(n){n=n._reactInternals;t:{if(Yt(n)!==n||n.tag!==1)throw Error(l(170));var f=n;do{switch(f.tag){case 3:f=f.stateNode.context;break t;case 1:if(Ye(f.type)){f=f.stateNode.__reactInternalMemoizedMergedChildContext;break t}}f=f.return}while(f!==null);throw Error(l(171))}if(n.tag===1){var w=n.type;if(Ye(w)){n=ql(n,w,f);break e}}n=f}else n=Lt;return t.context===null?t.context=n:t.pendingContext=n,t=Mt(d,u),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),jt(s,t),Ft(s,u,d),u}function Os(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fs(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function yh(){return null}function zs(e,t,n){var a=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new fh(e,t,n!=null&&n.hydrate===!0),t=at(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Qo(t),e[kn]=n.current,Nl(e.nodeType===8?e.parentNode:e),a)for(e=0;e<a.length;e++){t=a[e];var s=t._getVersion;s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s)}this._internalRoot=n}zs.prototype.render=function(e){Dr(e,this._internalRoot,null,null)},zs.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Dr(null,e,null,function(){t[kn]=null})};function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bh(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new zs(e,0,t?{hydrate:!0}:void 0)}function Or(e,t,n,a,s){var d=n._reactRootContainer;if(d){var u=d._internalRoot;if(typeof s=="function"){var f=s;s=function(){var I=Os(u);f.call(I)}}Dr(t,u,e,s)}else{if(d=n._reactRootContainer=bh(n,a),u=d._internalRoot,typeof s=="function"){var w=s;s=function(){var I=Os(u);w.call(I)}}Xc(function(){Dr(t,u,e,s)})}return Os(u)}Ji=function(e){if(e.tag===13){var t=Qe();Ft(e,4,t),Fs(e,4)}},go=function(e){if(e.tag===13){var t=Qe();Ft(e,67108864,t),Fs(e,67108864)}},Ki=function(e){if(e.tag===13){var t=Qe(),n=Ot(e);Ft(e,n,t),Fs(e,n)}},Qi=function(e,t){return t()},io=function(e,t,n){switch(t){case"input":if(Xr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var s=or(a);if(!s)throw Error(l(90));Pi(a),Xr(a,s)}}}break;case"textarea":Ni(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}},lo=Qc,Ui=function(e,t,n,a,s){var d=oe;oe|=4;try{return Kt(98,e.bind(null,t,n,a,s))}finally{oe=d,oe===0&&(jn(),ct())}},co=function(){(oe&49)===0&&(oh(),zt())},Wi=function(e,t){var n=oe;oe|=2;try{return e(t)}finally{oe=n,oe===0&&(jn(),ct())}};function id(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Aa(t))throw Error(l(200));return vh(e,t,null,n)}var wh={Events:[sa,Sn,or,Hi,Gi,zt,{current:!1}]},Ea={findFiberByHostInstance:$t,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},xh={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$i(e),e===null?null:e.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||yh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{Uo=Fr.inject(xh),Jt=Fr}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wh,Xe.createPortal=id,Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):Error(l(268,Object.keys(e)));return e=$i(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e,t){var n=oe;if((n&48)!==0)return e(t);oe|=1;try{if(e)return Kt(99,e.bind(null,t))}finally{oe=n,ct()}},Xe.hydrate=function(e,t,n){if(!Aa(t))throw Error(l(200));return Or(null,e,t,!0,n)},Xe.render=function(e,t,n){if(!Aa(t))throw Error(l(200));return Or(null,e,t,!1,n)},Xe.unmountComponentAtNode=function(e){if(!Aa(e))throw Error(l(40));return e._reactRootContainer?(Xc(function(){Or(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1},Xe.unstable_batchedUpdates=Qc,Xe.unstable_createPortal=function(e,t){return id(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Aa(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Or(e,t,n,!1,a)},Xe.version="17.0.2",Xe}var fd;function Ph(){if(fd)return Gs.exports;fd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Gs.exports=Ih(),Gs.exports}var Lh=Ph();const Rh=Fa(Lh);function ai(r,o){return ai=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,l){return i.__proto__=l,i},ai(r,o)}function ft(r,o){r.prototype=Object.create(o.prototype),r.prototype.constructor=r,ai(r,o)}var qs={exports:{}},Ys,vd;function Mh(){if(vd)return Ys;vd=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ys=r,Ys}var $s,yd;function jh(){if(yd)return $s;yd=1;var r=Mh();function o(){}function i(){}return i.resetWarningCache=o,$s=function(){function l(h,v,g,b,y,T){if(T!==r){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}l.isRequired=l;function c(){return l}var m={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:c,element:l,elementType:l,instanceOf:c,node:l,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:i,resetWarningCache:o};return m.PropTypes=m,m},$s}var bd;function Nh(){return bd||(bd=1,qs.exports=jh()()),qs.exports}var Dh=Nh();const wd=Fa(Dh);function De(){return De=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)({}).hasOwnProperty.call(i,l)&&(r[l]=i[l])}return r},De.apply(null,arguments)}function zr(r){return r.charAt(0)==="/"}function Vs(r,o){for(var i=o,l=i+1,c=r.length;l<c;i+=1,l+=1)r[i]=r[l];r.pop()}function Oh(r,o){o===void 0&&(o="");var i=r&&r.split("/")||[],l=o&&o.split("/")||[],c=r&&zr(r),m=o&&zr(o),h=c||m;if(r&&zr(r)?l=i:i.length&&(l.pop(),l=l.concat(i)),!l.length)return"/";var v;if(l.length){var g=l[l.length-1];v=g==="."||g===".."||g===""}else v=!1;for(var b=0,y=l.length;y>=0;y--){var T=l[y];T==="."?Vs(l,y):T===".."?(Vs(l,y),b++):b&&(Vs(l,y),b--)}if(!h)for(;b--;b)l.unshift("..");h&&l[0]!==""&&(!l[0]||!zr(l[0]))&&l.unshift("");var A=l.join("/");return v&&A.substr(-1)!=="/"&&(A+="/"),A}function xd(r){return r.valueOf?r.valueOf():Object.prototype.valueOf.call(r)}function Hr(r,o){if(r===o)return!0;if(r==null||o==null)return!1;if(Array.isArray(r))return Array.isArray(o)&&r.length===o.length&&r.every(function(c,m){return Hr(c,o[m])});if(typeof r=="object"||typeof o=="object"){var i=xd(r),l=xd(o);return i!==r||l!==o?Hr(i,l):Object.keys(Object.assign({},r,o)).every(function(c){return Hr(r[c],o[c])})}return!1}var Fh="Invariant failed";function Wt(r,o){throw new Error(Fh)}function Na(r){return r.charAt(0)==="/"?r:"/"+r}function kd(r){return r.charAt(0)==="/"?r.substr(1):r}function zh(r,o){return r.toLowerCase().indexOf(o.toLowerCase())===0&&"/?#".indexOf(r.charAt(o.length))!==-1}function ep(r,o){return zh(r,o)?r.substr(o.length):r}function tp(r){return r.charAt(r.length-1)==="/"?r.slice(0,-1):r}function Bh(r){var o=r||"/",i="",l="",c=o.indexOf("#");c!==-1&&(l=o.substr(c),o=o.substr(0,c));var m=o.indexOf("?");return m!==-1&&(i=o.substr(m),o=o.substr(0,m)),{pathname:o,search:i==="?"?"":i,hash:l==="#"?"":l}}function Je(r){var o=r.pathname,i=r.search,l=r.hash,c=o||"/";return i&&i!=="?"&&(c+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(c+=l.charAt(0)==="#"?l:"#"+l),c}function Ge(r,o,i,l){var c;typeof r=="string"?(c=Bh(r),c.state=o):(c=De({},r),c.pathname===void 0&&(c.pathname=""),c.search?c.search.charAt(0)!=="?"&&(c.search="?"+c.search):c.search="",c.hash?c.hash.charAt(0)!=="#"&&(c.hash="#"+c.hash):c.hash="",o!==void 0&&c.state===void 0&&(c.state=o));try{c.pathname=decodeURI(c.pathname)}catch(m){throw m instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):m}return i&&(c.key=i),l?c.pathname?c.pathname.charAt(0)!=="/"&&(c.pathname=Oh(c.pathname,l.pathname)):c.pathname=l.pathname:c.pathname||(c.pathname="/"),c}function _h(r,o){return r.pathname===o.pathname&&r.search===o.search&&r.hash===o.hash&&r.key===o.key&&Hr(r.state,o.state)}function pi(){var r=null;function o(h){return r=h,function(){r===h&&(r=null)}}function i(h,v,g,b){if(r!=null){var y=typeof r=="function"?r(h,v):r;typeof y=="string"?typeof g=="function"?g(y,b):b(!0):b(y!==!1)}else b(!0)}var l=[];function c(h){var v=!0;function g(){v&&h.apply(void 0,arguments)}return l.push(g),function(){v=!1,l=l.filter(function(b){return b!==g})}}function m(){for(var h=arguments.length,v=new Array(h),g=0;g<h;g++)v[g]=arguments[g];l.forEach(function(b){return b.apply(void 0,v)})}return{setPrompt:o,confirmTransitionTo:i,appendListener:c,notifyListeners:m}}var np=!!(typeof window<"u"&&window.document&&window.document.createElement);function ap(r,o){o(window.confirm(r))}function Hh(){var r=window.navigator.userAgent;return(r.indexOf("Android 2.")!==-1||r.indexOf("Android 4.0")!==-1)&&r.indexOf("Mobile Safari")!==-1&&r.indexOf("Chrome")===-1&&r.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function Gh(){return window.navigator.userAgent.indexOf("Trident")===-1}function Uh(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Wh(r){return r.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var Sd="popstate",Cd="hashchange";function Td(){try{return window.history.state||{}}catch{return{}}}function qh(r){r===void 0&&(r={}),np||Wt();var o=window.history,i=Hh(),l=!Gh(),c=r,m=c.forceRefresh,h=m===void 0?!1:m,v=c.getUserConfirmation,g=v===void 0?ap:v,b=c.keyLength,y=b===void 0?6:b,T=r.basename?tp(Na(r.basename)):"";function A(B){var H=B||{},E=H.key,L=H.state,N=window.location,K=N.pathname,X=N.search,ye=N.hash,Se=K+X+ye;return T&&(Se=ep(Se,T)),Ge(Se,L,E)}function j(){return Math.random().toString(36).substr(2,y)}var z=pi();function Y(B){De(O,B),O.length=o.length,z.notifyListeners(O.location,O.action)}function J(B){Wh(B)||_(A(B.state))}function D(){_(A(Td()))}var G=!1;function _(B){if(G)G=!1,Y();else{var H="POP";z.confirmTransitionTo(B,H,g,function(E){E?Y({action:H,location:B}):ne(B)})}}function ne(B){var H=O.location,E=U.indexOf(H.key);E===-1&&(E=0);var L=U.indexOf(B.key);L===-1&&(L=0);var N=E-L;N&&(G=!0,te(N))}var R=A(Td()),U=[R.key];function $(B){return T+Je(B)}function q(B,H){var E="PUSH",L=Ge(B,H,j(),O.location);z.confirmTransitionTo(L,E,g,function(N){if(N){var K=$(L),X=L.key,ye=L.state;if(i)if(o.pushState({key:X,state:ye},null,K),h)window.location.href=K;else{var Se=U.indexOf(O.location.key),Me=U.slice(0,Se+1);Me.push(L.key),U=Me,Y({action:E,location:L})}else window.location.href=K}})}function ce(B,H){var E="REPLACE",L=Ge(B,H,j(),O.location);z.confirmTransitionTo(L,E,g,function(N){if(N){var K=$(L),X=L.key,ye=L.state;if(i)if(o.replaceState({key:X,state:ye},null,K),h)window.location.replace(K);else{var Se=U.indexOf(O.location.key);Se!==-1&&(U[Se]=L.key),Y({action:E,location:L})}else window.location.replace(K)}})}function te(B){o.go(B)}function de(){te(-1)}function ee(){te(1)}var re=0;function ge(B){re+=B,re===1&&B===1?(window.addEventListener(Sd,J),l&&window.addEventListener(Cd,D)):re===0&&(window.removeEventListener(Sd,J),l&&window.removeEventListener(Cd,D))}var ie=!1;function Pe(B){B===void 0&&(B=!1);var H=z.setPrompt(B);return ie||(ge(1),ie=!0),function(){return ie&&(ie=!1,ge(-1)),H()}}function C(B){var H=z.appendListener(B);return ge(1),function(){ge(-1),H()}}var O={length:o.length,action:"POP",location:R,createHref:$,push:q,replace:ce,go:te,goBack:de,goForward:ee,block:Pe,listen:C};return O}var Ad="hashchange",Yh={hashbang:{encodePath:function(o){return o.charAt(0)==="!"?o:"!/"+kd(o)},decodePath:function(o){return o.charAt(0)==="!"?o.substr(1):o}},noslash:{encodePath:kd,decodePath:Na},slash:{encodePath:Na,decodePath:Na}};function rp(r){var o=r.indexOf("#");return o===-1?r:r.slice(0,o)}function Ia(){var r=window.location.href,o=r.indexOf("#");return o===-1?"":r.substring(o+1)}function $h(r){window.location.hash=r}function Js(r){window.location.replace(rp(window.location.href)+"#"+r)}function Vh(r){r===void 0&&(r={}),np||Wt();var o=window.history;Uh();var i=r,l=i.getUserConfirmation,c=l===void 0?ap:l,m=i.hashType,h=m===void 0?"slash":m,v=r.basename?tp(Na(r.basename)):"",g=Yh[h],b=g.encodePath,y=g.decodePath;function T(){var H=y(Ia());return v&&(H=ep(H,v)),Ge(H)}var A=pi();function j(H){De(B,H),B.length=o.length,A.notifyListeners(B.location,B.action)}var z=!1,Y=null;function J(H,E){return H.pathname===E.pathname&&H.search===E.search&&H.hash===E.hash}function D(){var H=Ia(),E=b(H);if(H!==E)Js(E);else{var L=T(),N=B.location;if(!z&&J(N,L)||Y===Je(L))return;Y=null,G(L)}}function G(H){if(z)z=!1,j();else{var E="POP";A.confirmTransitionTo(H,E,c,function(L){L?j({action:E,location:H}):_(H)})}}function _(H){var E=B.location,L=$.lastIndexOf(Je(E));L===-1&&(L=0);var N=$.lastIndexOf(Je(H));N===-1&&(N=0);var K=L-N;K&&(z=!0,de(K))}var ne=Ia(),R=b(ne);ne!==R&&Js(R);var U=T(),$=[Je(U)];function q(H){var E=document.querySelector("base"),L="";return E&&E.getAttribute("href")&&(L=rp(window.location.href)),L+"#"+b(v+Je(H))}function ce(H,E){var L="PUSH",N=Ge(H,void 0,void 0,B.location);A.confirmTransitionTo(N,L,c,function(K){if(K){var X=Je(N),ye=b(v+X),Se=Ia()!==ye;if(Se){Y=X,$h(ye);var Me=$.lastIndexOf(Je(B.location)),We=$.slice(0,Me+1);We.push(X),$=We,j({action:L,location:N})}else j()}})}function te(H,E){var L="REPLACE",N=Ge(H,void 0,void 0,B.location);A.confirmTransitionTo(N,L,c,function(K){if(K){var X=Je(N),ye=b(v+X),Se=Ia()!==ye;Se&&(Y=X,Js(ye));var Me=$.indexOf(Je(B.location));Me!==-1&&($[Me]=X),j({action:L,location:N})}})}function de(H){o.go(H)}function ee(){de(-1)}function re(){de(1)}var ge=0;function ie(H){ge+=H,ge===1&&H===1?window.addEventListener(Ad,D):ge===0&&window.removeEventListener(Ad,D)}var Pe=!1;function C(H){H===void 0&&(H=!1);var E=A.setPrompt(H);return Pe||(ie(1),Pe=!0),function(){return Pe&&(Pe=!1,ie(-1)),E()}}function O(H){var E=A.appendListener(H);return ie(1),function(){ie(-1),E()}}var B={length:o.length,action:"POP",location:U,createHref:q,push:ce,replace:te,go:de,goBack:ee,goForward:re,block:C,listen:O};return B}function Ed(r,o,i){return Math.min(Math.max(r,o),i)}function Jh(r){r===void 0&&(r={});var o=r,i=o.getUserConfirmation,l=o.initialEntries,c=l===void 0?["/"]:l,m=o.initialIndex,h=m===void 0?0:m,v=o.keyLength,g=v===void 0?6:v,b=pi();function y(q){De($,q),$.length=$.entries.length,b.notifyListeners($.location,$.action)}function T(){return Math.random().toString(36).substr(2,g)}var A=Ed(h,0,c.length-1),j=c.map(function(q){return typeof q=="string"?Ge(q,void 0,T()):Ge(q,void 0,q.key||T())}),z=Je;function Y(q,ce){var te="PUSH",de=Ge(q,ce,T(),$.location);b.confirmTransitionTo(de,te,i,function(ee){if(ee){var re=$.index,ge=re+1,ie=$.entries.slice(0);ie.length>ge?ie.splice(ge,ie.length-ge,de):ie.push(de),y({action:te,location:de,index:ge,entries:ie})}})}function J(q,ce){var te="REPLACE",de=Ge(q,ce,T(),$.location);b.confirmTransitionTo(de,te,i,function(ee){ee&&($.entries[$.index]=de,y({action:te,location:de}))})}function D(q){var ce=Ed($.index+q,0,$.entries.length-1),te="POP",de=$.entries[ce];b.confirmTransitionTo(de,te,i,function(ee){ee?y({action:te,location:de,index:ce}):y()})}function G(){D(-1)}function _(){D(1)}function ne(q){var ce=$.index+q;return ce>=0&&ce<$.entries.length}function R(q){return q===void 0&&(q=!1),b.setPrompt(q)}function U(q){return b.appendListener(q)}var $={length:j.length,action:"POP",location:j[A],index:A,entries:j,createHref:z,push:Y,replace:J,go:D,goBack:G,goForward:_,canGo:ne,block:R,listen:U};return $}var nn={exports:{}},Ks,Id;function Kh(){return Id||(Id=1,Ks=Array.isArray||function(r){return Object.prototype.toString.call(r)=="[object Array]"}),Ks}var Pd;function Qh(){if(Pd)return nn.exports;Pd=1;var r=Kh();nn.exports=J,nn.exports.parse=i,nn.exports.compile=c,nn.exports.tokensToFunction=v,nn.exports.tokensToRegExp=Y;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(D,G){for(var _=[],ne=0,R=0,U="",$=G&&G.delimiter||"/",q;(q=o.exec(D))!=null;){var ce=q[0],te=q[1],de=q.index;if(U+=D.slice(R,de),R=de+ce.length,te){U+=te[1];continue}var ee=D[R],re=q[2],ge=q[3],ie=q[4],Pe=q[5],C=q[6],O=q[7];U&&(_.push(U),U="");var B=re!=null&&ee!=null&&ee!==re,H=C==="+"||C==="*",E=C==="?"||C==="*",L=re||$,N=ie||Pe,K=re||(typeof _[_.length-1]=="string"?_[_.length-1]:"");_.push({name:ge||ne++,prefix:re||"",delimiter:L,optional:E,repeat:H,partial:B,asterisk:!!O,pattern:N?b(N):O?".*":l(L,K)})}return R<D.length&&(U+=D.substr(R)),U&&_.push(U),_}function l(D,G){return!G||G.indexOf(D)>-1?"[^"+g(D)+"]+?":g(G)+"|(?:(?!"+g(G)+")[^"+g(D)+"])+?"}function c(D,G){return v(i(D,G),G)}function m(D){return encodeURI(D).replace(/[\/?#]/g,function(G){return"%"+G.charCodeAt(0).toString(16).toUpperCase()})}function h(D){return encodeURI(D).replace(/[?#]/g,function(G){return"%"+G.charCodeAt(0).toString(16).toUpperCase()})}function v(D,G){for(var _=new Array(D.length),ne=0;ne<D.length;ne++)typeof D[ne]=="object"&&(_[ne]=new RegExp("^(?:"+D[ne].pattern+")$",T(G)));return function(R,U){for(var $="",q=R||{},ce=U||{},te=ce.pretty?m:encodeURIComponent,de=0;de<D.length;de++){var ee=D[de];if(typeof ee=="string"){$+=ee;continue}var re=q[ee.name],ge;if(re==null)if(ee.optional){ee.partial&&($+=ee.prefix);continue}else throw new TypeError('Expected "'+ee.name+'" to be defined');if(r(re)){if(!ee.repeat)throw new TypeError('Expected "'+ee.name+'" to not repeat, but received `'+JSON.stringify(re)+"`");if(re.length===0){if(ee.optional)continue;throw new TypeError('Expected "'+ee.name+'" to not be empty')}for(var ie=0;ie<re.length;ie++){if(ge=te(re[ie]),!_[de].test(ge))throw new TypeError('Expected all "'+ee.name+'" to match "'+ee.pattern+'", but received `'+JSON.stringify(ge)+"`");$+=(ie===0?ee.prefix:ee.delimiter)+ge}continue}if(ge=ee.asterisk?h(re):te(re),!_[de].test(ge))throw new TypeError('Expected "'+ee.name+'" to match "'+ee.pattern+'", but received "'+ge+'"');$+=ee.prefix+ge}return $}}function g(D){return D.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function b(D){return D.replace(/([=!:$\/()])/g,"\\$1")}function y(D,G){return D.keys=G,D}function T(D){return D&&D.sensitive?"":"i"}function A(D,G){var _=D.source.match(/\((?!\?)/g);if(_)for(var ne=0;ne<_.length;ne++)G.push({name:ne,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return y(D,G)}function j(D,G,_){for(var ne=[],R=0;R<D.length;R++)ne.push(J(D[R],G,_).source);var U=new RegExp("(?:"+ne.join("|")+")",T(_));return y(U,G)}function z(D,G,_){return Y(i(D,_),G,_)}function Y(D,G,_){r(G)||(_=G||_,G=[]),_=_||{};for(var ne=_.strict,R=_.end!==!1,U="",$=0;$<D.length;$++){var q=D[$];if(typeof q=="string")U+=g(q);else{var ce=g(q.prefix),te="(?:"+q.pattern+")";G.push(q),q.repeat&&(te+="(?:"+ce+te+")*"),q.optional?q.partial?te=ce+"("+te+")?":te="(?:"+ce+"("+te+"))?":te=ce+"("+te+")",U+=te}}var de=g(_.delimiter||"/"),ee=U.slice(-de.length)===de;return ne||(U=(ee?U.slice(0,-de.length):U)+"(?:"+de+"(?=$))?"),R?U+="$":U+=ne&&ee?"":"(?="+de+"|$)",y(new RegExp("^"+U,T(_)),G)}function J(D,G,_){return r(G)||(_=G||_,G=[]),_=_||{},D instanceof RegExp?A(D,G):r(D)?j(D,G,_):z(D,G,_)}return nn.exports}var Xh=Qh();const op=Fa(Xh);var Qs={exports:{}},xe={};var Ld;function Zh(){if(Ld)return xe;Ld=1;var r=typeof Symbol=="function"&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,m=r?Symbol.for("react.profiler"):60114,h=r?Symbol.for("react.provider"):60109,v=r?Symbol.for("react.context"):60110,g=r?Symbol.for("react.async_mode"):60111,b=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,T=r?Symbol.for("react.suspense"):60113,A=r?Symbol.for("react.suspense_list"):60120,j=r?Symbol.for("react.memo"):60115,z=r?Symbol.for("react.lazy"):60116,Y=r?Symbol.for("react.block"):60121,J=r?Symbol.for("react.fundamental"):60117,D=r?Symbol.for("react.responder"):60118,G=r?Symbol.for("react.scope"):60119;function _(R){if(typeof R=="object"&&R!==null){var U=R.$$typeof;switch(U){case o:switch(R=R.type,R){case g:case b:case l:case m:case c:case T:return R;default:switch(R=R&&R.$$typeof,R){case v:case y:case z:case j:case h:return R;default:return U}}case i:return U}}}function ne(R){return _(R)===b}return xe.AsyncMode=g,xe.ConcurrentMode=b,xe.ContextConsumer=v,xe.ContextProvider=h,xe.Element=o,xe.ForwardRef=y,xe.Fragment=l,xe.Lazy=z,xe.Memo=j,xe.Portal=i,xe.Profiler=m,xe.StrictMode=c,xe.Suspense=T,xe.isAsyncMode=function(R){return ne(R)||_(R)===g},xe.isConcurrentMode=ne,xe.isContextConsumer=function(R){return _(R)===v},xe.isContextProvider=function(R){return _(R)===h},xe.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===o},xe.isForwardRef=function(R){return _(R)===y},xe.isFragment=function(R){return _(R)===l},xe.isLazy=function(R){return _(R)===z},xe.isMemo=function(R){return _(R)===j},xe.isPortal=function(R){return _(R)===i},xe.isProfiler=function(R){return _(R)===m},xe.isStrictMode=function(R){return _(R)===c},xe.isSuspense=function(R){return _(R)===T},xe.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===l||R===b||R===m||R===c||R===T||R===A||typeof R=="object"&&R!==null&&(R.$$typeof===z||R.$$typeof===j||R.$$typeof===h||R.$$typeof===v||R.$$typeof===y||R.$$typeof===J||R.$$typeof===D||R.$$typeof===G||R.$$typeof===Y)},xe.typeOf=_,xe}var Rd;function sp(){return Rd||(Rd=1,Qs.exports=Zh()),Qs.exports}sp();function $r(r,o){if(r==null)return{};var i={};for(var l in r)if({}.hasOwnProperty.call(r,l)){if(o.indexOf(l)!==-1)continue;i[l]=r[l]}return i}var Xs,Md;function em(){if(Md)return Xs;Md=1;var r=sp(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},m={};m[r.ForwardRef]=l,m[r.Memo]=c;function h(z){return r.isMemo(z)?c:m[z.$$typeof]||o}var v=Object.defineProperty,g=Object.getOwnPropertyNames,b=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,T=Object.getPrototypeOf,A=Object.prototype;function j(z,Y,J){if(typeof Y!="string"){if(A){var D=T(Y);D&&D!==A&&j(z,D,J)}var G=g(Y);b&&(G=G.concat(b(Y)));for(var _=h(z),ne=h(Y),R=0;R<G.length;++R){var U=G[R];if(!i[U]&&!(J&&J[U])&&!(ne&&ne[U])&&!(_&&_[U])){var $=y(Y,U);try{v(z,U,$)}catch{}}}}return z}return Xs=j,Xs}em();var Zs=1073741823,jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function tm(){var r="__global_unique_id__";return jd[r]=(jd[r]||0)+1}function nm(r,o){return r===o?r!==0||1/r===1/o:r!==r&&o!==o}function am(r){var o=[];return{on:function(l){o.push(l)},off:function(l){o=o.filter(function(c){return c!==l})},get:function(){return r},set:function(l,c){r=l,o.forEach(function(m){return m(r,c)})}}}function rm(r){return Array.isArray(r)?r[0]:r}function om(r,o){var i,l,c="__create-react-context-"+tm()+"__",m=(function(v){ft(g,v);function g(){for(var y,T=arguments.length,A=new Array(T),j=0;j<T;j++)A[j]=arguments[j];return y=v.call.apply(v,[this].concat(A))||this,y.emitter=am(y.props.value),y}var b=g.prototype;return b.getChildContext=function(){var T;return T={},T[c]=this.emitter,T},b.componentWillReceiveProps=function(T){if(this.props.value!==T.value){var A=this.props.value,j=T.value,z;nm(A,j)?z=0:(z=typeof o=="function"?o(A,j):Zs,z|=0,z!==0&&this.emitter.set(T.value,z))}},b.render=function(){return this.props.children},g})(ve.Component);m.childContextTypes=(i={},i[c]=wd.object.isRequired,i);var h=(function(v){ft(g,v);function g(){for(var y,T=arguments.length,A=new Array(T),j=0;j<T;j++)A[j]=arguments[j];return y=v.call.apply(v,[this].concat(A))||this,y.observedBits=void 0,y.state={value:y.getValue()},y.onUpdate=function(z,Y){var J=y.observedBits|0;(J&Y)!==0&&y.setState({value:y.getValue()})},y}var b=g.prototype;return b.componentWillReceiveProps=function(T){var A=T.observedBits;this.observedBits=A??Zs},b.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var T=this.props.observedBits;this.observedBits=T??Zs},b.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},b.getValue=function(){return this.context[c]?this.context[c].get():r},b.render=function(){return rm(this.props.children)(this.state.value)},g})(ve.Component);return h.contextTypes=(l={},l[c]=wd.object,l),{Provider:m,Consumer:h}}var sm=ve.createContext||om,ip=function(o){var i=sm();return i.displayName=o,i},lp=ip("Router-History"),Ut=ip("Router"),Vr=(function(r){ft(o,r),o.computeRootMatch=function(c){return{path:"/",url:"/",params:{},isExact:c==="/"}};function o(l){var c;return c=r.call(this,l)||this,c.state={location:l.history.location},c._isMounted=!1,c._pendingLocation=null,l.staticContext||(c.unlisten=l.history.listen(function(m){c._pendingLocation=m})),c}var i=o.prototype;return i.componentDidMount=function(){var c=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(m){c._isMounted&&c.setState({location:m})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},i.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},i.render=function(){return ve.createElement(Ut.Provider,{value:{history:this.props.history,location:this.state.location,match:o.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},ve.createElement(lp.Provider,{children:this.props.children||null,value:this.props.history}))},o})(ve.Component);ve.Component;var im=(function(r){ft(o,r);function o(){return r.apply(this,arguments)||this}var i=o.prototype;return i.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},i.componentDidUpdate=function(c){this.props.onUpdate&&this.props.onUpdate.call(this,this,c)},i.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},i.render=function(){return null},o})(ve.Component),ei={},lm=1e4,Nd=0;function cm(r){if(ei[r])return ei[r];var o=op.compile(r);return Nd<lm&&(ei[r]=o,Nd++),o}function Dd(r,o){return r===void 0&&(r="/"),o===void 0&&(o={}),r==="/"?r:cm(r)(o,{pretty:!0})}function Da(r){var o=r.computedMatch,i=r.to,l=r.push,c=l===void 0?!1:l;return ve.createElement(Ut.Consumer,null,function(m){m||Wt();var h=m.history,v=m.staticContext,g=c?h.push:h.replace,b=Ge(o?typeof i=="string"?Dd(i,o.params):De({},i,{pathname:Dd(i.pathname,o.params)}):i);return v?(g(b),null):ve.createElement(im,{onMount:function(){g(b)},onUpdate:function(T,A){var j=Ge(A.to);_h(j,De({},b,{key:j.key}))||g(b)},to:i})})}var Od={},dm=1e4,Fd=0;function pm(r,o){var i=""+o.end+o.strict+o.sensitive,l=Od[i]||(Od[i]={});if(l[r])return l[r];var c=[],m=op(r,c,o),h={regexp:m,keys:c};return Fd<dm&&(l[r]=h,Fd++),h}function ui(r,o){o===void 0&&(o={}),(typeof o=="string"||Array.isArray(o))&&(o={path:o});var i=o,l=i.path,c=i.exact,m=c===void 0?!1:c,h=i.strict,v=h===void 0?!1:h,g=i.sensitive,b=g===void 0?!1:g,y=[].concat(l);return y.reduce(function(T,A){if(!A&&A!=="")return null;if(T)return T;var j=pm(A,{end:m,strict:v,sensitive:b}),z=j.regexp,Y=j.keys,J=z.exec(r);if(!J)return null;var D=J[0],G=J.slice(1),_=r===D;return m&&!_?null:{path:A,url:A==="/"&&D===""?"/":D,isExact:_,params:Y.reduce(function(ne,R,U){return ne[R.name]=G[U],ne},{})}},null)}function um(r){return ve.Children.count(r)===0}var mt=(function(r){ft(o,r);function o(){return r.apply(this,arguments)||this}var i=o.prototype;return i.render=function(){var c=this;return ve.createElement(Ut.Consumer,null,function(m){m||Wt();var h=c.props.location||m.location,v=c.props.computedMatch?c.props.computedMatch:c.props.path?ui(h.pathname,c.props):m.match,g=De({},m,{location:h,match:v}),b=c.props,y=b.children,T=b.component,A=b.render;return Array.isArray(y)&&um(y)&&(y=null),ve.createElement(Ut.Provider,{value:g},g.match?y?typeof y=="function"?y(g):y:T?ve.createElement(T,g):A?A(g):null:typeof y=="function"?y(g):null)})},o})(ve.Component);function hi(r){return r.charAt(0)==="/"?r:"/"+r}function hm(r,o){return r?De({},o,{pathname:hi(r)+o.pathname}):o}function mm(r,o){if(!r)return o;var i=hi(r);return o.pathname.indexOf(i)!==0?o:De({},o,{pathname:o.pathname.substr(i.length)})}function zd(r){return typeof r=="string"?r:Je(r)}function ti(r){return function(){Wt()}}function Bd(){}ve.Component;var gm=(function(r){ft(o,r);function o(){return r.apply(this,arguments)||this}var i=o.prototype;return i.render=function(){var c=this;return ve.createElement(Ut.Consumer,null,function(m){m||Wt();var h=c.props.location||m.location,v,g;return ve.Children.forEach(c.props.children,function(b){if(g==null&&ve.isValidElement(b)){v=b;var y=b.props.path||b.props.from;g=y?ui(h.pathname,De({},b.props,{path:y})):m.match}}),g?ve.cloneElement(v,{location:h,computedMatch:g}):null})},o})(ve.Component),cp=ve.useContext;function fm(){return cp(lp)}function dp(){return cp(Ut).location}var vm=(function(r){ft(o,r);function o(){for(var l,c=arguments.length,m=new Array(c),h=0;h<c;h++)m[h]=arguments[h];return l=r.call.apply(r,[this].concat(m))||this,l.history=qh(l.props),l}var i=o.prototype;return i.render=function(){return ve.createElement(Vr,{history:this.history,children:this.props.children})},o})(ve.Component);ve.Component;var ri=function(o,i){return typeof o=="function"?o(i):o},oi=function(o,i){return typeof o=="string"?Ge(o,null,null,i):o},mi=function(o){return o},zn=ve.forwardRef;typeof zn>"u"&&(zn=mi);function ym(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var bm=zn(function(r,o){var i=r.innerRef,l=r.navigate,c=r.onClick,m=$r(r,["innerRef","navigate","onClick"]),h=m.target,v=De({},m,{onClick:function(b){try{c&&c(b)}catch(y){throw b.preventDefault(),y}!b.defaultPrevented&&b.button===0&&(!h||h==="_self")&&!ym(b)&&(b.preventDefault(),l())}});return mi!==zn?v.ref=o||i:v.ref=i,ve.createElement("a",v)}),_e=zn(function(r,o){var i=r.component,l=i===void 0?bm:i,c=r.replace,m=r.to,h=r.innerRef,v=$r(r,["component","replace","to","innerRef"]);return ve.createElement(Ut.Consumer,null,function(g){g||Wt();var b=g.history,y=oi(ri(m,g.location),g.location),T=y?b.createHref(y):"",A=De({},v,{href:T,navigate:function(){var z=ri(m,g.location),Y=Je(g.location)===Je(oi(z)),J=c||Y?b.replace:b.push;J(z)}});return mi!==zn?A.ref=o||h:A.innerRef=h,ve.createElement(l,A)})}),pp=function(o){return o},Gr=ve.forwardRef;typeof Gr>"u"&&(Gr=pp);function wm(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.filter(function(l){return l}).join(" ")}var xm=Gr(function(r,o){var i=r["aria-current"],l=i===void 0?"page":i,c=r.activeClassName,m=c===void 0?"active":c,h=r.activeStyle,v=r.className,g=r.exact,b=r.isActive,y=r.location,T=r.sensitive,A=r.strict,j=r.style,z=r.to,Y=r.innerRef,J=$r(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return ve.createElement(Ut.Consumer,null,function(D){D||Wt();var G=y||D.location,_=oi(ri(z,G),G),ne=_.pathname,R=ne&&ne.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),U=R?ui(G.pathname,{path:R,exact:g,sensitive:T,strict:A}):null,$=!!(b?b(U,G):U),q=typeof v=="function"?v($):v,ce=typeof j=="function"?j($):j;$&&(q=wm(q,m),ce=De({},ce,h));var te=De({"aria-current":$&&l||null,className:q,style:ce,to:_},J);return pp!==Gr?te.ref=o||Y:te.innerRef=Y,ve.createElement(_e,te)})});const Br=["> Loading core modules.............. OK","> React 18 ......................... LOADED","> Node.js environment .............. ACTIVE","> 7+ years experience .............. VERIFIED","> Mumbai, India .................... LOCATED","> Building in public ............... ENABLED","All systems operational.","> Launching portfolio..."],km=60;function Sm(r){const i=Math.round(r/100*20);return`[${"#".repeat(i)}${".".repeat(20-i)}]`}function Cm({onComplete:r}){const[o,i]=me.useState(0),[l,c]=me.useState(()=>Br.map(()=>"")),[m,h]=me.useState("booting");me.useEffect(()=>{const g=performance.now();let b;const y=T=>{const A=T-g,j=Math.min(100,Math.round(A/3e3*100));if(i(j),j<100){b=window.requestAnimationFrame(y);return}h("typing")};return b=window.requestAnimationFrame(y),()=>{window.cancelAnimationFrame(b)}},[]),me.useEffect(()=>{if(m!=="typing")return;let g,b=0,y=0;const T=()=>{const A=Br[b];if(y<=A.length){c(j=>{const z=[...j];return z[b]=A.slice(0,y),z}),y+=1,g=window.setTimeout(T,km);return}if(b+=1,y=0,b<Br.length){g=window.setTimeout(T,120);return}h("flicker")};return T(),()=>{window.clearTimeout(g)}},[m]),me.useEffect(()=>{if(m!=="flicker")return;const g=window.setTimeout(()=>{r()},620);return()=>{window.clearTimeout(g)}},[r,m]);const v=me.useMemo(()=>m==="flicker"?"boot-screen is-flicker":"boot-screen",[m]);return p.jsx("div",{className:v,"aria-live":"polite","aria-label":"Boot sequence",children:p.jsxs("div",{className:"boot-screen-inner",children:[p.jsx("p",{className:"boot-brand",children:"RADHAKISHAN JANGID - PORTFOLIO v2.0"}),p.jsx("p",{className:"boot-divider",children:"=================================="}),p.jsxs("p",{className:"boot-progress-line",children:[p.jsx("span",{children:Sm(o)}),p.jsx("span",{children:"Booting system..."})]}),p.jsx("div",{className:"boot-sequence-lines",children:l.map((g,b)=>p.jsx("p",{className:"boot-line",children:g},Br[b]))}),p.jsx("p",{className:"boot-divider",children:"=================================="})]})})}const Tm=`---
title: "10 Coding Projects You Can Add to Your Resume"
date: "2026-04-06T19:10:00+05:30"
tags: [projects, resume, career, developers]
category: "Career Growth"
accent: "#ef7d2f"
cover: "/rk-images/walking-black-suit.png"
excerpt: "Ten practical project directions that look stronger on a resume than another basic to-do app."
featured: false
---

# 10 Coding Projects You Can Add to Your Resume

If your resume still has only a to-do app, calculator, and weather app, you're making life harder for yourself.

Better projects show one of these things:

- real users
- real workflow complexity
- real data
- real product thinking

## 1. AI Content Engine

Build a workflow where a user gives one topic and gets:

- carousel slides
- caption
- CTA
- comment ideas

That shows prompt engineering, product UI, and automation thinking.

## 2. Resume Builder with Export

Not just form inputs. Add:

- templates
- PDF export
- saved drafts
- section reordering

## 3. Interview Prep Dashboard

Track:

- questions solved
- weak topics
- revision streaks
- notes

## 4. Internal Admin Panel

Use:

- auth
- permissions
- tables
- search
- filters

This looks much closer to actual company work.

## 5. Open Source Demo Site

Showcase one tool with:

- problem
- demo
- install steps
- screenshots
- CTA

## 6. AI PDF Summarizer

Upload PDF, extract text, generate:

- summary
- bullet points
- action items

## 7. Booking or Scheduling App

Add:

- slots
- time conflicts
- confirmation flow
- cancellation logic

## 8. Finance or Expense Tracker

Good because it can demonstrate:

- charts
- categories
- exports
- analytics

## 9. Job Application Tracker

Track:

- company
- role
- status
- interview rounds
- notes

## 10. Developer Tool with CLI + UI

This is a strong signal project because it feels more serious than portfolio filler.

Examples:

- deploy helper
- file converter
- code formatter wrapper
- prompt vault

## What makes a project resume-worthy?

The project should answer at least one of these:

- Did you solve a real problem?
- Did you handle non-trivial UX?
- Did you work with real data or APIs?
- Did you think like a product engineer?

If yes, it belongs on the resume.

If not, improve the scope before publishing it.
`,Am=`---
title: "From Repo to Reader"
date: "April 2026"
tags: [react, markdown, content]
category: "Developer Workflow"
cover: "/rk-images/leaning-smile-black-suit.png"
excerpt: "A simple Markdown article showing how repository-backed writing now flows into the site automatically."
---

# From Repo to Reader

This portfolio now supports a filesystem-based article workflow. Add a Markdown file to the \`src/content/articles/md\` folder, rebuild the site, and it appears automatically in the Articles section.

## What This Setup Solves

- The listing page can discover new Markdown files without manually editing a JSON file.
- Each file gets its own permalink under \`/articles/:slug\`.
- Markdown articles render inside the React app, so the reading experience stays consistent with the site design.

## Recommended Authoring Pattern

Use frontmatter when you want cleaner cards and better filtering:

\`\`\`md
---
title: "My Article"
date: "April 2026"
tags: [react, ui]
excerpt: "Optional short summary for the article card."
---
\`\`\`

If frontmatter is missing, the site still works. It falls back to the filename, first heading, and first paragraph.

## HTML Articles

Standalone HTML files also work. Those are rendered in an isolated frame inside the React route so their CSS stays accurate without breaking the rest of the site layout.
`,Em=`---
title: "JavaScript Interview Series Plan for Tech Content"
date: "2026-04-06T18:50:00+05:30"
tags: [javascript, interviews, content, career]
category: "Interview Content"
accent: "#7f88ff"
cover: "/rk-images/black-suit-looking-down.png"
excerpt: "A simple repeatable format for turning JavaScript interview prep into short-form or carousel content."
featured: false
---

# JavaScript Interview Series Plan for Tech Content

If you want interview content that compounds, don&apos;t post random questions.

Build a repeatable series.

## Format

### Slide 1

Episode hook:

- Episode 1 of JavaScript Interview Series
- This question confuses beginners
- Most people answer this wrong

### Slide 2

The actual question.

### Slide 3

Wrong way to think about it.

### Slide 4

Right mental model.

### Slide 5

Short answer or code snippet.

### Slide 6

Real interview tip.

### Slide 7

CTA:

- Want Episode 2?
- Comment JS
- Save for revision

## Best topics to start with

- \`var\` vs \`let\` vs \`const\`
- closures
- event loop
- call / apply / bind
- promises
- hoisting

## Why this format works

- it is serial
- it creates anticipation
- it is easier to save
- it is easier to continue later

This is better than posting one disconnected interview answer every few weeks.
`,Im=`---
title: "Open Source Content Formats That Actually Get Attention"
date: "2026-04-06T19:00:00+05:30"
tags: [open-source, content, creators, tools]
category: "Creator Workflow"
accent: "#2dde98"
cover: "/rk-images/mirror-selfie-black-suit.png"
excerpt: "A better way to create open source showcase posts for developer audiences without making them feel like product ads."
featured: false
---

# Open Source Content Formats That Actually Get Attention

Most dev creators post open source tools badly.

They show too much, explain too much, and make the first slide feel like documentation.

## What works better

### 1. One tool, one benefit, one action

Bad:

"Here is a powerful cross-platform tool with many features..."

Better:

"Record a clean product demo in minutes."

### 2. Lead with the outcome

Don&apos;t start with the implementation.

Start with:

- what problem it solves
- what it saves
- what it looks like in action

### 3. Use an episode or series format

This is easier to continue:

- Open Source #1
- Open Source #2
- Open Source #3

It also trains your audience to expect the next one.

### 4. Make the demo visual

The first frame should already show:

- interface
- main promise
- one clear CTA

### 5. Keep the copy brutally short

For the first poster:

- 1 hook
- 1 tool name
- 1 benefit

That is enough.

## Best open source content buckets

- tools that save time
- tools that make demos look better
- tools that help developers ship faster
- tools that reduce repetitive work

## Best CTA for this format

Use direct CTA:

- Save this tool
- Comment TOOL
- Want part 2?

Simple beats clever here.
`,Pm=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>rk.codex — 100+ Claude Prompt Library</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Cabinet+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet">
<style>
/* ─── RESET & BASE ─── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:16px}
body{
  background:#080808;
  color:#e8e4dc;
  font-family:'Cabinet Grotesk',sans-serif;
  overflow-x:hidden;
  cursor:none;
}

/* ─── CUSTOM CURSOR ─── */
.cursor{
  position:fixed;width:10px;height:10px;
  background:#c8f53d;border-radius:50%;
  pointer-events:none;z-index:9999;
  transform:translate(-50%,-50%);
  transition:transform 0.1s,width 0.2s,height 0.2s;
}
.cursor-ring{
  position:fixed;width:36px;height:36px;
  border:1px solid rgba(200,245,61,0.4);border-radius:50%;
  pointer-events:none;z-index:9998;
  transform:translate(-50%,-50%);
  transition:transform 0.12s ease,width 0.3s,height 0.3s,border-color 0.3s;
}
body:has(a:hover) .cursor-ring,
body:has(button:hover) .cursor-ring,
body:has(.prompt-card:hover) .cursor-ring{
  width:52px;height:52px;border-color:rgba(200,245,61,0.7);
}

/* ─── SCROLLBAR ─── */
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:#111}
::-webkit-scrollbar-thumb{background:#c8f53d;border-radius:4px}

/* ─── PROGRESS BAR ─── */
#progress{
  position:fixed;top:0;left:0;height:2px;
  background:#c8f53d;z-index:500;width:0%;
  transition:width 0.08s linear;
}

/* ─── NAVBAR ─── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:400;
  display:flex;justify-content:space-between;align-items:center;
  padding:0 48px;height:64px;
  background:rgba(8,8,8,0.9);
  backdrop-filter:blur(16px);
  border-bottom:1px solid #1e1e1e;
}
.nav-logo{
  font-family:'Syne',sans-serif;font-weight:800;font-size:22px;
  color:#c8f53d;text-decoration:none;letter-spacing:-0.03em;
}
.nav-logo span{color:#e8e4dc;}
.nav-right{display:flex;align-items:center;gap:32px;}
.nav-count{
  font-family:'DM Mono',monospace;font-size:11px;
  color:#666;letter-spacing:0.1em;
}
.nav-count strong{color:#c8f53d;}
.nav-ig{
  font-family:'DM Mono',monospace;font-size:11px;
  color:#888;text-decoration:none;letter-spacing:0.06em;
  border:1px solid #2a2a2a;padding:6px 14px;border-radius:4px;
  transition:border-color 0.2s,color 0.2s;
}
.nav-ig:hover{border-color:#c8f53d;color:#c8f53d;}

/* ─── HERO ─── */
.hero{
  min-height:100vh;
  display:flex;flex-direction:column;
  justify-content:center;
  padding:120px 48px 80px;
  position:relative;overflow:hidden;
}
.hero-grid-bg{
  position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(200,245,61,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200,245,61,0.04) 1px, transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
}
.hero-eyebrow{
  font-family:'DM Mono',monospace;font-size:11px;
  letter-spacing:0.2em;text-transform:uppercase;
  color:#c8f53d;margin-bottom:28px;
  display:flex;align-items:center;gap:12px;
}
.hero-eyebrow::before{
  content:'';display:block;width:32px;height:1px;background:#c8f53d;
}
.hero h1{
  font-family:'Syne',sans-serif;font-weight:800;
  font-size:clamp(56px,9vw,130px);
  line-height:0.88;letter-spacing:-0.05em;
  margin-bottom:40px;max-width:1000px;
}
.hero h1 .line1{color:#e8e4dc;display:block;}
.hero h1 .line2{color:#c8f53d;display:block;}
.hero h1 .line3{color:#333;display:block;-webkit-text-stroke:1px #333;}
.hero-desc{
  font-size:18px;color:#666;max-width:560px;
  line-height:1.7;margin-bottom:48px;
}
.hero-desc strong{color:#e8e4dc;}
.hero-stats{
  display:flex;gap:48px;flex-wrap:wrap;
}
.stat{border-left:2px solid #c8f53d;padding-left:20px;}
.stat-num{
  font-family:'Syne',sans-serif;font-weight:800;
  font-size:42px;color:#e8e4dc;line-height:1;margin-bottom:4px;
}
.stat-num span{color:#c8f53d;}
.stat-label{
  font-family:'DM Mono',monospace;font-size:11px;
  color:#555;letter-spacing:0.1em;text-transform:uppercase;
}
.hero-scroll{
  position:absolute;bottom:40px;left:48px;
  font-family:'DM Mono',monospace;font-size:11px;
  color:#444;letter-spacing:0.1em;
  display:flex;align-items:center;gap:10px;
}
.hero-scroll::after{
  content:'';display:block;width:24px;height:1px;background:#444;
}

/* ─── FILTER BAR ─── */
.filter-wrap{
  position:sticky;top:64px;z-index:300;
  background:rgba(8,8,8,0.95);backdrop-filter:blur(16px);
  border-bottom:1px solid #1a1a1a;
  padding:16px 48px;
}
.filter-inner{
  display:flex;align-items:center;gap:12px;flex-wrap:wrap;
}
.filter-label{
  font-family:'DM Mono',monospace;font-size:10px;
  color:#444;letter-spacing:0.15em;text-transform:uppercase;
  margin-right:8px;white-space:nowrap;
}
.filter-btn{
  font-family:'DM Mono',monospace;font-size:11px;
  color:#555;background:transparent;
  border:1px solid #222;border-radius:4px;
  padding:6px 14px;cursor:none;
  transition:all 0.2s;white-space:nowrap;
  letter-spacing:0.05em;
}
.filter-btn:hover{color:#e8e4dc;border-color:#444;}
.filter-btn.active{
  background:#c8f53d;color:#080808;
  border-color:#c8f53d;font-weight:700;
}
.search-wrap{
  margin-left:auto;position:relative;
}
.search-input{
  font-family:'DM Mono',monospace;font-size:12px;
  background:#111;color:#e8e4dc;
  border:1px solid #222;border-radius:4px;
  padding:7px 14px 7px 34px;width:220px;
  outline:none;transition:border-color 0.2s;letter-spacing:0.03em;
}
.search-input:focus{border-color:#c8f53d;}
.search-input::placeholder{color:#444;}
.search-icon{
  position:absolute;left:11px;top:50%;
  transform:translateY(-50%);
  font-size:12px;color:#444;pointer-events:none;
}

/* ─── SECTION HEADER ─── */
.section-header{
  padding:64px 48px 32px;
  display:flex;align-items:flex-end;
  justify-content:space-between;gap:20px;
}
.section-header-left{}
.section-eyebrow{
  font-family:'DM Mono',monospace;font-size:10px;
  letter-spacing:0.2em;text-transform:uppercase;
  color:#c8f53d;margin-bottom:10px;
}
.section-title{
  font-family:'Syne',sans-serif;font-weight:800;
  font-size:clamp(28px,3vw,42px);color:#e8e4dc;
  letter-spacing:-0.03em;line-height:1.1;
}
.section-count{
  font-family:'DM Mono',monospace;font-size:48px;
  font-weight:300;color:#1e1e1e;letter-spacing:-0.04em;
}

/* ─── PROMPTS GRID ─── */
.prompts-section{padding:0 48px 80px;}
.prompts-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(340px,1fr));
  gap:14px;
}

/* ─── PROMPT CARD ─── */
.prompt-card{
  background:#0f0f0f;
  border:1px solid #1a1a1a;
  border-radius:10px;
  padding:22px 24px;
  cursor:none;
  transition:border-color 0.25s,transform 0.25s,background 0.25s;
  position:relative;
  overflow:hidden;
}
.prompt-card::before{
  content:'';position:absolute;
  top:0;left:0;right:0;height:2px;
  background:#c8f53d;
  transform:scaleX(0);transform-origin:left;
  transition:transform 0.3s ease;
}
.prompt-card:hover{
  border-color:#2a2a2a;
  background:#121212;
  transform:translateY(-3px);
}
.prompt-card:hover::before{transform:scaleX(1);}
.prompt-card.hidden{display:none;}

.card-top{
  display:flex;align-items:flex-start;
  justify-content:space-between;gap:12px;
  margin-bottom:14px;
}
.card-num{
  font-family:'DM Mono',monospace;font-size:10px;
  color:#333;letter-spacing:0.1em;
  min-width:28px;
}
.card-tags{display:flex;gap:6px;flex-wrap:wrap;}
.tag{
  font-family:'DM Mono',monospace;font-size:9px;
  letter-spacing:0.12em;text-transform:uppercase;
  padding:3px 9px;border-radius:3px;
  background:#1a1a1a;color:#555;
}
.tag.coding{background:rgba(200,245,61,0.08);color:#8aab2a;}
.tag.career{background:rgba(61,200,245,0.08);color:#2a8aab;}
.tag.debug{background:rgba(245,130,61,0.08);color:#ab612a;}
.tag.writing{background:rgba(200,61,245,0.08);color:#8a2aab;}
.tag.review{background:rgba(61,245,130,0.08);color:#2aab61;}
.tag.learning{background:rgba(245,200,61,0.08);color:#ab8a2a;}
.tag.system{background:rgba(245,61,100,0.08);color:#ab2a45;}
.tag.interview{background:rgba(61,100,245,0.08);color:#2a45ab;}
.tag.productivity{background:rgba(245,245,61,0.08);color:#8a8a2a;}
.tag.ai{background:rgba(200,245,61,0.12);color:#c8f53d;}

.card-title{
  font-family:'Syne',sans-serif;font-weight:700;
  font-size:15px;color:#e8e4dc;margin-bottom:10px;
  line-height:1.3;
}
.card-prompt{
  font-family:'DM Mono',monospace;font-size:12px;
  color:#555;line-height:1.7;
  font-style:italic;
  display:-webkit-box;-webkit-line-clamp:3;
  -webkit-box-orient:vertical;overflow:hidden;
}
.card-bottom{
  display:flex;align-items:center;
  justify-content:space-between;
  margin-top:16px;padding-top:14px;
  border-top:1px solid #1a1a1a;
}
.copy-btn{
  font-family:'DM Mono',monospace;font-size:10px;
  color:#444;background:transparent;
  border:1px solid #222;border-radius:3px;
  padding:5px 12px;cursor:none;
  transition:all 0.2s;letter-spacing:0.05em;
}
.copy-btn:hover{color:#c8f53d;border-color:#c8f53d;}
.copy-btn.copied{color:#c8f53d;border-color:#c8f53d;background:rgba(200,245,61,0.08);}
.card-use{
  font-family:'DM Mono',monospace;font-size:10px;
  color:#2a2a2a;letter-spacing:0.05em;
}

/* ─── FULL PROMPT MODAL ─── */
.modal-overlay{
  position:fixed;inset:0;background:rgba(0,0,0,0.85);
  z-index:600;display:none;align-items:center;
  justify-content:center;padding:24px;
  backdrop-filter:blur(8px);
}
.modal-overlay.open{display:flex;}
.modal{
  background:#111;border:1px solid #2a2a2a;
  border-radius:12px;max-width:640px;width:100%;
  max-height:85vh;overflow-y:auto;
  padding:36px;position:relative;
}
.modal-close{
  position:absolute;top:20px;right:20px;
  background:transparent;border:none;
  color:#444;font-size:20px;cursor:none;
  transition:color 0.2s;
}
.modal-close:hover{color:#e8e4dc;}
.modal-tag{
  font-family:'DM Mono',monospace;font-size:10px;
  letter-spacing:0.15em;color:#c8f53d;
  text-transform:uppercase;margin-bottom:14px;
}
.modal-title{
  font-family:'Syne',sans-serif;font-weight:800;
  font-size:24px;color:#e8e4dc;margin-bottom:20px;
  line-height:1.2;
}
.modal-prompt-box{
  background:#0a0a0a;border:1px solid #1e1e1e;
  border-left:3px solid #c8f53d;
  border-radius:0 8px 8px 0;
  padding:20px 24px;margin-bottom:20px;
}
.modal-prompt-text{
  font-family:'DM Mono',monospace;font-size:13px;
  color:#aaa;line-height:1.8;font-style:italic;
}
.modal-why{font-size:15px;color:#666;line-height:1.7;margin-bottom:20px;}
.modal-copy{
  font-family:'DM Mono',monospace;font-size:12px;
  color:#080808;background:#c8f53d;
  border:none;border-radius:6px;
  padding:12px 24px;cursor:none;
  font-weight:700;letter-spacing:0.05em;
  transition:opacity 0.2s;width:100%;
}
.modal-copy:hover{opacity:0.85;}

/* ─── MARQUEE ─── */
.marquee-wrap{
  border-top:1px solid #1a1a1a;
  border-bottom:1px solid #1a1a1a;
  padding:14px 0;overflow:hidden;
  background:#0a0a0a;margin:40px 0 0;
}
.marquee-track{
  display:flex;gap:0;
  animation:marquee 30s linear infinite;
  width:max-content;
}
.marquee-item{
  font-family:'DM Mono',monospace;font-size:11px;
  color:#333;letter-spacing:0.15em;text-transform:uppercase;
  padding:0 32px;white-space:nowrap;
}
.marquee-item span{color:#c8f53d;}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* ─── NO RESULTS ─── */
.no-results{
  grid-column:1/-1;text-align:center;
  padding:80px 20px;
}
.no-results p{
  font-family:'DM Mono',monospace;font-size:13px;
  color:#333;letter-spacing:0.05em;
}

/* ─── FOOTER ─── */
footer{
  border-top:1px solid #1a1a1a;
  padding:60px 48px;
  display:flex;align-items:center;
  justify-content:space-between;flex-wrap:wrap;gap:24px;
}
.footer-left{}
.footer-brand{
  font-family:'Syne',sans-serif;font-weight:800;
  font-size:36px;color:#c8f53d;
  letter-spacing:-0.04em;margin-bottom:8px;
}
.footer-sub{
  font-family:'DM Mono',monospace;font-size:12px;
  color:#444;letter-spacing:0.05em;
}
.footer-right{
  font-family:'DM Mono',monospace;font-size:11px;
  color:#2a2a2a;text-align:right;
}

/* ─── RESPONSIVE ─── */
@media(max-width:768px){
  nav{padding:0 20px;}
  .nav-right .nav-count{display:none;}
  .hero,.prompts-section,.filter-wrap{padding-left:20px;padding-right:20px;}
  .section-header{padding:48px 20px 24px;flex-direction:column;align-items:flex-start;}
  .hero h1{font-size:clamp(48px,12vw,80px);}
  .hero-stats{gap:28px;}
  .prompts-grid{grid-template-columns:1fr;}
  footer{padding:40px 20px;flex-direction:column;}
  .footer-right{text-align:left;}
  .search-wrap{margin-left:0;width:100%;}
  .search-input{width:100%;}
}

/* ─── ENTRANCE ANIMATION ─── */
@keyframes fadeUp{
  from{opacity:0;transform:translateY(20px)}
  to{opacity:1;transform:translateY(0)}
}
.prompt-card{
  animation:fadeUp 0.4s ease both;
}
</style>
</head>
<body>

<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>
<div id="progress"></div>

<!-- MODAL -->
<div class="modal-overlay" id="modalOverlay" onclick="closeModal(event)">
  <div class="modal" id="modal">
    <button class="modal-close" onclick="closeModalDirect()">✕</button>
    <div class="modal-tag" id="modalTag"></div>
    <div class="modal-title" id="modalTitle"></div>
    <div class="modal-prompt-box">
      <div class="modal-prompt-text" id="modalPrompt"></div>
    </div>
    <div class="modal-why" id="modalWhy"></div>
    <button class="modal-copy" id="modalCopyBtn" onclick="copyModalPrompt()">Copy Prompt</button>
  </div>
</div>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">rk<span>.codex</span></a>
  <div class="nav-right">
    <span class="nav-count"><strong id="visibleCount">100</strong> prompts ready</span>
    <a href="https://instagram.com/rk.codex" target="_blank" class="nav-ig">@rk.codex</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-grid-bg"></div>
  <div class="hero-eyebrow">Claude Prompt Library · rk.codex</div>
  <h1>
    <span class="line1">100+ CLAUDE</span>
    <span class="line2">PROMPTS.</span>
    <span class="line3">READY TO USE.</span>
  </h1>
  <p class="hero-desc">
    Every prompt here is <strong>tested, specific, and ready to copy.</strong>
    No fluff. No generic advice. Just the exact prompts that make Claude feel like a senior engineer, career coach, and writing partner — all in one.
  </p>
  <div class="hero-stats">
    <div class="stat">
      <div class="stat-num">100<span>+</span></div>
      <div class="stat-label">Total Prompts</div>
    </div>
    <div class="stat">
      <div class="stat-num">10<span>+</span></div>
      <div class="stat-label">Categories</div>
    </div>
    <div class="stat">
      <div class="stat-num">0<span>₹</span></div>
      <div class="stat-label">Cost. Free Forever</div>
    </div>
  </div>
  <div class="hero-scroll">Scroll to explore</div>
</section>

<!-- MARQUEE -->
<div class="marquee-wrap">
  <div class="marquee-track" id="marqueeTrack"></div>
</div>

<!-- FILTER BAR -->
<div class="filter-wrap">
  <div class="filter-inner">
    <span class="filter-label">Filter</span>
    <button class="filter-btn active" data-filter="all">All (100)</button>
    <button class="filter-btn" data-filter="coding">Coding</button>
    <button class="filter-btn" data-filter="debug">Debugging</button>
    <button class="filter-btn" data-filter="review">Code Review</button>
    <button class="filter-btn" data-filter="career">Career</button>
    <button class="filter-btn" data-filter="interview">Interview</button>
    <button class="filter-btn" data-filter="learning">Learning</button>
    <button class="filter-btn" data-filter="writing">Writing</button>
    <button class="filter-btn" data-filter="system">System Design</button>
    <button class="filter-btn" data-filter="productivity">Productivity</button>
    <button class="filter-btn" data-filter="ai">AI & Prompting</button>
    <div class="search-wrap">
      <span class="search-icon">⌕</span>
      <input class="search-input" id="searchInput" type="text" placeholder="Search prompts...">
    </div>
  </div>
</div>

<!-- PROMPTS -->
<div class="prompts-section">
  <div class="section-header">
    <div class="section-header-left">
      <div class="section-eyebrow">The Collection</div>
      <div class="section-title">Every prompt you'll ever need.</div>
    </div>
    <div class="section-count" id="sectionCount">100</div>
  </div>
  <div class="prompts-grid" id="promptsGrid"></div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-left">
    <div class="footer-brand">rk.codex</div>
    <div class="footer-sub">Daily AI · Dev Tips · Real Workflows · @rk.codex on Instagram</div>
  </div>
  <div class="footer-right">
    Built for developers who want<br>to actually get better. Every day.
  </div>
</footer>

<script>
// ─── PROMPT DATA ───
const prompts = [
  // CODING (15)
  {id:1,title:"Write Clean Code From Scratch",category:"coding",tags:["coding"],prompt:"Act as a senior software engineer. I need to build [describe feature]. My stack is [your stack]. Write clean, production-ready code with comments explaining key decisions. Follow best practices for readability and maintainability.",why:"Setting the role and stack gives Claude the exact context it needs to write code that actually fits your project — not generic boilerplate."},
  {id:2,title:"Refactor Messy Code",category:"coding",tags:["coding"],prompt:"Act as a code quality expert. Refactor the following code to make it cleaner, more readable, and more efficient. Keep the exact same functionality. Explain every change you made and why:\\n\\n[paste your code]",why:"Asking Claude to explain every change turns this into a learning session, not just a fix."},
  {id:3,title:"Build a REST API Endpoint",category:"coding",tags:["coding"],prompt:"Act as a backend engineer specialising in [Node.js / Python / Go]. Write a REST API endpoint for [describe what it does]. Include input validation, error handling, and proper HTTP status codes. Add comments explaining the logic.",why:"Specifying the language and asking for error handling ensures you get production-ready code, not a toy example."},
  {id:4,title:"Write Unit Tests for My Code",category:"coding",tags:["coding"],prompt:"Act as a QA engineer who writes thorough unit tests. Write comprehensive unit tests for the following code using [Jest / Pytest / JUnit]. Cover happy path, edge cases, and error cases. Explain what each test is checking:\\n\\n[paste your code]",why:"Specifying the testing framework and asking for edge cases prevents the most common unit testing mistake — only testing the happy path."},
  {id:5,title:"Convert Code to Another Language",category:"coding",tags:["coding"],prompt:"Convert the following [source language] code to [target language]. Keep the exact same logic and functionality. Add comments where the syntax or approach differs significantly between the two languages:\\n\\n[paste your code]",why:"Asking for comments on differences helps you actually understand the conversion instead of just copy-pasting."},
  {id:6,title:"Explain This Code Simply",category:"coding",tags:["coding","learning"],prompt:"Explain the following code to me as if I'm a junior developer who understands basic programming but not this specific pattern. Break it down line by line for the complex parts, and summarise what the whole thing does in one sentence:\\n\\n[paste your code]",why:"The 'junior developer' framing forces Claude to avoid jargon and actually explain — not just paraphrase."},
  {id:7,title:"Add TypeScript Types",category:"coding",tags:["coding"],prompt:"Act as a TypeScript expert. Add proper TypeScript types and interfaces to the following JavaScript code. Make it strictly typed — no 'any' unless absolutely necessary. Explain the type decisions you made:\\n\\n[paste your JS code]",why:"The 'no any' instruction is critical — without it Claude will take shortcuts that defeat the purpose of TypeScript."},
  {id:8,title:"Optimise Slow Code",category:"coding",tags:["coding"],prompt:"Act as a performance optimisation expert. Analyse the following code for performance bottlenecks. Rewrite it to be faster and more efficient. Show the before and after, explain what was slow and why your solution is faster:\\n\\n[paste your code]",why:"The before/after format makes the improvement tangible and teaches you the reasoning, not just the fix."},
  {id:9,title:"Write a Database Query",category:"coding",tags:["coding"],prompt:"Act as a database expert. Write an optimised [SQL / MongoDB / PostgreSQL] query to [describe what you need]. My table/schema is: [describe it]. The query should handle edge cases and be efficient for large datasets. Explain the query.",why:"Including the schema gives Claude the actual structure it needs — otherwise it guesses and gets it wrong."},
  {id:10,title:"Build a React Component",category:"coding",tags:["coding"],prompt:"Act as a senior React developer. Build a [describe component] React component. Use functional components and hooks. Make it reusable with clear props. Add PropTypes or TypeScript types. Include a usage example below the component.",why:"Asking for a usage example forces Claude to think about how the component is actually consumed, making it more practical."},
  {id:11,title:"Write a Python Script",category:"coding",tags:["coding"],prompt:"Act as a Python developer who writes clean, Pythonic code. Write a script that [describe what it does]. Handle errors gracefully, add docstrings, and make it easy to modify. If libraries are needed, list them and why you chose them.",why:"Asking Claude to justify library choices helps you avoid unnecessary dependencies."},
  {id:12,title:"Create API Documentation",category:"coding",tags:["coding","writing"],prompt:"Act as a technical writer who specialises in API documentation. Write clear, complete API documentation for the following endpoint(s). Include: endpoint URL, method, parameters, request body, response format, error codes, and a working curl example:\\n\\n[paste your API code or describe it]",why:"The curl example is the most important part — it lets any developer test your API immediately."},
  {id:13,title:"Implement a Design Pattern",category:"coding",tags:["coding"],prompt:"Act as a software architect. Show me how to implement the [Observer / Factory / Singleton / Strategy] design pattern in [language]. Use a real-world example relevant to [web development / games / fintech]. Explain when to use it and when NOT to use it.",why:"Asking when NOT to use it prevents over-engineering — the most common mistake when learning design patterns."},
  {id:14,title:"Write Git Commit Messages",category:"coding",tags:["coding","productivity"],prompt:"Act as a developer who follows conventional commit standards. Write clear, meaningful git commit messages for the following changes. Follow the format: type(scope): description. Then write a more detailed commit body explaining what changed and why:\\n\\n[describe or paste your changes]",why:"Good commit messages are a team skill — this prompt helps you build the habit with the right format."},
  {id:15,title:"Generate Boilerplate Project Structure",category:"coding",tags:["coding"],prompt:"Act as a senior architect. Generate a clean folder and file structure for a [type of project] using [tech stack]. Explain what goes in each folder and why. Include a sample package.json or requirements.txt with the essential dependencies only.",why:"The 'essential dependencies only' instruction prevents the bloated starter project problem."},

  // DEBUGGING (12)
  {id:16,title:"Diagnose a Bug (Rubber Duck)",category:"debug",tags:["debug"],prompt:"I have a bug and I need you to help me think through it. Here is what the code is supposed to do: [explain]. Here is what it is actually doing: [explain]. Here is the error message: [paste error]. Walk me through what might be causing this before looking at any code.",why:"Thinking through the problem before seeing the code often reveals the answer faster than just pasting code."},
  {id:17,title:"Fix This Specific Error",category:"debug",tags:["debug"],prompt:"Act as a debugging expert. I'm getting this error: [paste exact error message]. This happens when I [describe what triggers it]. My environment is [language, framework, version]. Here is the relevant code:\\n\\n[paste code]\\n\\nExplain the root cause and provide the fix.",why:"Sharing the exact error message, trigger, and environment eliminates 80% of back-and-forth."},
  {id:18,title:"Debug Async / Promise Issues",category:"debug",tags:["debug","coding"],prompt:"Act as a JavaScript expert specialising in asynchronous code. I have a problem with async/await or Promises. Here is what I expect to happen: [explain]. Here is what actually happens: [explain]. Here is my code:\\n\\n[paste code]\\n\\nFind the async issue and fix it with a clear explanation.",why:"Async bugs are notoriously hard to explain — this structure forces you to articulate expected vs actual behaviour."},
  {id:19,title:"Find Memory Leaks",category:"debug",tags:["debug"],prompt:"Act as a performance engineer who specialises in memory management. Analyse the following code for potential memory leaks. Explain where memory could accumulate, why it's a problem, and how to fix each issue:\\n\\n[paste your code]",why:"Memory leaks are invisible until they crash production — this prompt makes them visible early."},
  {id:20,title:"Debug a CSS Layout Issue",category:"debug",tags:["debug"],prompt:"Act as a CSS expert. I have a layout issue. Here is what I want it to look like: [describe or share a reference]. Here is what it actually looks like: [describe the problem]. Here is my HTML and CSS:\\n\\n[paste code]\\n\\nFind the issue and fix it. Explain why the original CSS was causing the problem.",why:"CSS bugs are almost always about specificity or box model confusion — asking for the 'why' surfaces that."},
  {id:21,title:"Trace Logic Errors Step by Step",category:"debug",tags:["debug"],prompt:"Act as a patient debugger. Walk through the following code step by step, tracing exactly what the value of each variable is at each stage. Show me where the logic goes wrong and why it produces the wrong output:\\n\\n[paste your code and the wrong output it produces]",why:"Variable tracing is the single most effective debugging technique — this prompt makes Claude do it systematically."},
  {id:22,title:"Debug Database Query",category:"debug",tags:["debug"],prompt:"Act as a database administrator. This query is not returning the results I expect. Expected result: [describe]. Actual result: [describe]. My schema: [describe]. The query:\\n\\n[paste query]\\n\\nFind the logical error in the query and fix it.",why:"Database bugs almost always come from a misunderstanding of joins or conditions — explaining expected vs actual forces clarity."},
  {id:23,title:"Fix API Integration Issues",category:"debug",tags:["debug"],prompt:"Act as a backend integration expert. I'm having trouble integrating with [API name]. Here is the error I'm getting: [paste error]. Here is my request code: [paste code]. Here is the API documentation for this endpoint: [paste relevant docs]. What am I doing wrong?",why:"Sharing the API docs alongside your code gives Claude the ground truth it needs to spot the mismatch."},
  {id:24,title:"Debug Authentication Problems",category:"debug",tags:["debug"],prompt:"Act as a security and authentication expert. My authentication is broken. Here is the flow that should happen: [describe]. Here is where it fails: [describe]. Here is the relevant code:\\n\\n[paste auth code]\\n\\nFind the issue. Also flag any security vulnerabilities you notice while reviewing.",why:"Adding the security review request turns a bug fix into a security audit — two for one."},
  {id:25,title:"Explain Error Messages Plainly",category:"debug",tags:["debug","learning"],prompt:"Explain the following error message to me in plain English. Tell me: what it means, what usually causes it, and the most common ways to fix it. Then tell me what questions I should ask to narrow down the exact cause:\\n\\n[paste your error message]",why:"Understanding an error is more valuable than just fixing it — this prompt builds debugging intuition."},
  {id:26,title:"Debug React State Issues",category:"debug",tags:["debug","coding"],prompt:"Act as a React expert. I have a state management bug in my React component. Here is the expected behaviour: [describe]. Here is the actual behaviour: [describe]. Here is my component:\\n\\n[paste component code]\\n\\nFind the state-related bug. Check for stale closures, incorrect dependencies, or wrong update patterns.",why:"React state bugs have specific patterns — naming them forces Claude to look in the right places."},
  {id:27,title:"Systematic Debugging Plan",category:"debug",tags:["debug"],prompt:"Act as a senior engineer helping a junior debug a problem. Instead of giving me the answer, give me a systematic debugging plan. What are the 5 most likely causes? What should I check first, second, and third? What logging should I add? Guide me to find the answer myself.\\n\\nProblem: [describe your bug]",why:"Learning to debug is more valuable than getting the answer — this prompt makes Claude your debugging mentor."},

  // CODE REVIEW (10)
  {id:28,title:"Full Code Review",category:"review",tags:["review"],prompt:"Act as a senior engineer doing a real pull request review. Review the following code critically. Check for: bugs, security vulnerabilities, performance issues, poor naming, missing error handling, and code smells. Be direct and specific — don't sugarcoat issues:\\n\\n[paste your code]",why:"The 'don't sugarcoat' instruction is essential — without it Claude gives diplomatic feedback that isn't actionable."},
  {id:29,title:"Security Audit",category:"review",tags:["review","coding"],prompt:"Act as a cybersecurity expert. Perform a security audit on the following code. Look specifically for: SQL injection, XSS, CSRF, insecure data storage, exposed secrets, improper authentication, and any other vulnerabilities. Rate the severity of each issue (Critical / High / Medium / Low):\\n\\n[paste your code]",why:"The severity rating makes it immediately clear what to fix first and what can wait."},
  {id:30,title:"Performance Review",category:"review",tags:["review"],prompt:"Act as a performance engineer. Review this code specifically for performance issues. Identify: unnecessary re-renders, N+1 queries, inefficient algorithms, blocking operations, and memory issues. For each issue, estimate the performance impact and provide an optimised version:\\n\\n[paste your code]",why:"Estimating impact helps prioritise — not every performance issue is worth fixing immediately."},
  {id:31,title:"Check Code for Best Practices",category:"review",tags:["review"],prompt:"Act as a code quality advocate. Review the following code against industry best practices for [language/framework]. Check for: SOLID principles, DRY violations, proper error handling, consistent naming conventions, and appropriate use of the language's features. Give a score out of 10 with specific reasons:\\n\\n[paste your code]",why:"The score makes the review concrete and gives you a clear target to improve."},
  {id:32,title:"Review for Junior Developers",category:"review",tags:["review","learning"],prompt:"Act as a senior developer mentoring a junior. Review this code, but instead of just listing problems, explain WHY each issue is a problem and HOW to think about writing better code. Make this a teaching review, not just a critique:\\n\\n[paste your code]",why:"The 'why' makes this educational, not just corrective — it builds better developers, not just better code."},
  {id:33,title:"Pre-Deploy Checklist Review",category:"review",tags:["review"],prompt:"Act as a senior engineer doing a pre-deployment review. Check this code against a deployment checklist: error handling, logging, environment variable usage, hardcoded values, TODO comments, commented-out code, and any obvious bugs. Flag anything that should NOT go to production:\\n\\n[paste your code]",why:"This is the review you wish someone did before every deployment that ever went wrong."},
  {id:34,title:"Review API Design",category:"review",tags:["review"],prompt:"Act as an API design expert. Review the following API design for: RESTful conventions, consistent naming, proper use of HTTP methods and status codes, versioning approach, and developer experience. Suggest specific improvements:\\n\\n[paste your API routes and structure]",why:"API design mistakes are expensive to fix after clients are using them — review early."},
  {id:35,title:"Database Schema Review",category:"review",tags:["review"],prompt:"Act as a database architect. Review the following database schema for: normalisation issues, missing indexes, inappropriate data types, naming inconsistencies, missing constraints, and scalability concerns. Provide a revised schema with explanations:\\n\\n[paste your schema]",why:"Schema mistakes compound over time — a review before launch is worth months of painful migrations."},
  {id:36,title:"Review for Accessibility",category:"review",tags:["review"],prompt:"Act as an accessibility expert. Review the following HTML and CSS for accessibility issues. Check for: missing alt text, poor colour contrast, keyboard navigation, ARIA labels, semantic HTML, and screen reader compatibility. Rate compliance with WCAG 2.1 AA standards:\\n\\n[paste your HTML/CSS]",why:"Accessibility is almost always an afterthought — making it a review step changes that."},
  {id:37,title:"Review README and Documentation",category:"review",tags:["review","writing"],prompt:"Act as a developer who is seeing this project for the first time. Review the following README and documentation. Tell me: what's unclear, what's missing, what questions a new developer would have, and what would prevent someone from getting started quickly. Rewrite the weak sections:\\n\\n[paste your README]",why:"'Seeing it for the first time' is the exact perspective that makes documentation reviews valuable."},

  // CAREER (12)
  {id:38,title:"Write a Developer Resume",category:"career",tags:["career"],prompt:"Act as a tech recruiter at a top tech company. Help me write a developer resume for a [job title] role at [type of company]. My background: [your experience]. My top skills: [list them]. Tailor the resume to be ATS-friendly, results-focused, and under one page. Use strong action verbs and quantify impact where possible.",why:"Telling Claude to think like a recruiter (not a writer) changes what it optimises for dramatically."},
  {id:39,title:"Write a LinkedIn Summary",category:"career",tags:["career","writing"],prompt:"Act as a personal branding expert for developers. Write a compelling LinkedIn About section for me. My background: [describe]. My specialisation: [describe]. What I want people to do after reading it: [connect / hire / follow]. Keep it conversational, under 200 words, and end with a clear call to action.",why:"The 'what I want people to do' instruction gives Claude a concrete goal to write towards."},
  {id:40,title:"Write a Cold Email to a Recruiter",category:"career",tags:["career","writing"],prompt:"Act as a career coach for developers. Write a cold outreach email to a recruiter at [company]. I'm interested in [role type]. My strongest selling point is [describe it]. Make it personal, concise (under 100 words), and give them one specific reason to reply. No generic templates.",why:"'One specific reason to reply' forces a hook — the single most important element of cold outreach."},
  {id:41,title:"Negotiate a Salary Offer",category:"career",tags:["career"],prompt:"Act as a salary negotiation coach. I have a job offer from [type of company] for [role]. The offer is [amount]. Based on my research, market rate is [range]. I have [X years] of experience and [key skills/achievements]. Write me a negotiation email that is confident but professional, and asks for [target amount].",why:"Grounding the negotiation in market research makes it a business conversation, not a personal request."},
  {id:42,title:"Prepare for a Behavioural Interview",category:"career",tags:["career","interview"],prompt:"Act as an interview coach. I have a behavioural interview for [role] at [type of company]. The job description mentions they value [key traits]. Help me prepare strong STAR-format answers for these questions: [list 3-5 questions]. Use these real experiences as raw material: [describe your relevant experiences].",why:"Giving real experiences as raw material means you get answers that are genuinely yours, not generic scripts."},
  {id:43,title:"Write a Cover Letter",category:"career",tags:["career","writing"],prompt:"Act as a hiring manager who has read thousands of cover letters. Write a cover letter for a [role] position at [company]. My relevant experience: [describe]. The most important thing this role needs: [from job description]. Make it specific to this company — mention something real about them. Keep it under 250 words.",why:"'Mention something real about them' is what separates a memorable cover letter from a template."},
  {id:44,title:"Plan a Career Switch to Tech",category:"career",tags:["career","learning"],prompt:"Act as a career coach specialising in tech transitions. I currently work as a [current role] and want to become a [target role]. I have [describe any relevant skills]. Create a realistic 6-month roadmap with specific milestones, resources, and portfolio projects I should complete. Be honest about the challenges.",why:"Asking Claude to be honest about challenges gives you a realistic plan, not a motivational poster."},
  {id:45,title:"Review My Portfolio Projects",category:"career",tags:["career","review"],prompt:"Act as a senior developer reviewing a junior developer's portfolio. Review the following project ideas or descriptions and tell me: which are most impressive to hiring managers, which look generic, and how to make each one stand out. My target role is [describe]:\\n\\n[list your projects]",why:"Most developer portfolios have the same 5 projects — this prompt helps you stand out."},
  {id:46,title:"Write a Performance Self-Review",category:"career",tags:["career","writing"],prompt:"Act as a career coach. Help me write a strong performance self-review. My role: [describe]. My biggest achievements this period: [list them with context]. My growth areas: [be honest]. My goals for next period: [describe]. Write it in a confident, professional tone that highlights impact without sounding arrogant.",why:"Self-reviews are notoriously hard to write — this structure makes it systematic and powerful."},
  {id:47,title:"Identify Skill Gaps for Next Role",category:"career",tags:["career","learning"],prompt:"Act as a senior developer and career mentor. Here is my current skill set: [list skills and experience level]. Here is the job description for the role I want: [paste JD]. Identify my specific skill gaps, prioritise them by importance, and give me a realistic plan to close the top 3 gaps in the next 3 months.",why:"Prioritising the gaps prevents the trap of trying to learn everything at once and making no real progress."},
  {id:48,title:"Turn LinkedIn Posts Into Job Leads",category:"career",tags:["career","writing"],prompt:"Act as a personal branding strategist for developers. Help me write 3 LinkedIn posts that demonstrate my expertise in [skill/topic] and would attract attention from recruiters or potential clients. My audience: [describe]. My goal: [job / clients / followers]. Make each post different in format — one insight, one story, one opinion.",why:"Three different formats in one prompt gives you a complete content strategy, not just one post."},
  {id:49,title:"Prepare Questions to Ask Interviewers",category:"career",tags:["career","interview"],prompt:"Act as an experienced developer who has done hundreds of interviews on both sides of the table. I'm interviewing for [role] at [type of company]. Prepare 10 smart questions I should ask my interviewers that will: make me look thoughtful, help me evaluate if this is a good place to work, and uncover red flags. Explain why each question is valuable.",why:"Understanding why each question is valuable helps you adapt in the moment rather than reading a script."},

  // INTERVIEW PREP (10)
  {id:50,title:"Practice DSA Problem Solving",category:"interview",tags:["interview","coding"],prompt:"Act as a technical interviewer at a top tech company. Give me a medium-difficulty DSA problem related to [arrays / trees / graphs / dynamic programming]. Don't give me the solution yet. Help me think through it by asking me guiding questions about the approach. Only reveal the solution after I've given my attempt.",why:"Being walked through the thinking process — not given the answer — is how you actually improve at DSA."},
  {id:51,title:"Explain a DSA Pattern",category:"interview",tags:["interview","learning"],prompt:"Act as a DSA teacher who is exceptional at making complex patterns simple. Explain the [Two Pointers / Sliding Window / BFS / DFS / Dynamic Programming] pattern to me. Use a visual analogy first, then show me the simplest possible code example, then show me 3 problems where this pattern applies. No jargon without explanation.",why:"Visual analogy first is the key instruction — it builds intuition before code, which is how DSA actually sticks."},
  {id:52,title:"Mock Technical Interview",category:"interview",tags:["interview"],prompt:"Act as a strict but fair technical interviewer at a FAANG company. Conduct a 45-minute technical interview with me for a [role] position. Ask me 2 DSA questions, one system design question, and 2 behavioural questions. Give me feedback after each answer on: correctness, communication, and what a strong answer would look like.",why:"Feedback after each answer — not just at the end — makes this genuinely useful for improvement."},
  {id:53,title:"Optimise My DSA Solution",category:"interview",tags:["interview","coding"],prompt:"Act as a competitive programmer. Review my solution to this problem. First, confirm whether it's correct. Then tell me: the time and space complexity, how to improve it to the optimal solution, and what pattern or technique I'm missing. Problem: [describe problem]. My solution:\\n\\n[paste your code]",why:"Knowing the pattern you're missing is more valuable than just getting the optimal solution handed to you."},
  {id:54,title:"System Design Walkthrough",category:"interview",tags:["interview","system"],prompt:"Act as a system design interviewer. Walk me through how to design [YouTube / Twitter / Uber / WhatsApp] from scratch. Start with clarifying questions a good candidate should ask, then guide me through: functional requirements, scale estimation, high-level design, database design, and deep dives. Teach me what to say at each stage.",why:"Learning what to SAY at each stage is exactly what system design interviews test — not just what to think."},
  {id:55,title:"Common Interview Mistakes to Avoid",category:"interview",tags:["interview"],prompt:"Act as an interviewer who has rejected hundreds of candidates. Tell me the top 10 mistakes developers make in technical interviews for [junior / senior] roles. For each mistake, give a specific example of what it looks like and what the correct behaviour should be.",why:"Specific examples of mistakes are far more memorable and actionable than generic advice."},
  {id:56,title:"HR Round Preparation",category:"interview",tags:["interview","career"],prompt:"Act as an HR manager. Ask me the 10 most common HR interview questions for a [role] at a tech company. After I answer each one, give me feedback on: what was strong, what sounded weak or rehearsed, and how to improve my answer. Start with the first question.",why:"Real-time feedback per question is what makes this genuinely good practice — not just a Q&A list."},
  {id:57,title:"Resume Gap Explanation",category:"interview",tags:["interview","career"],prompt:"Act as an interview coach. Help me craft an honest, confident answer to the question: 'I see you have a gap in your employment from [date] to [date] — can you explain that?' My actual reason for the gap: [be honest]. Make the answer genuine, professional, and forward-looking without over-explaining or apologising.",why:"Over-explaining a gap is as bad as hiding it — this prompt calibrates the right level of disclosure."},
  {id:58,title:"Explain Your Project to an Interviewer",category:"interview",tags:["interview"],prompt:"Act as an interview coach. Help me explain my [project name] clearly in an interview. The project does: [describe]. I built it using: [tech stack]. The interesting technical challenge was: [describe]. Help me structure a 2-minute verbal explanation that covers: what it is, why I built it, the hardest technical problem, and what I'd do differently.",why:"The 2-minute constraint is critical — most developers talk for too long and lose the interviewer's attention."},
  {id:59,title:"Negotiate Equity and Benefits",category:"interview",tags:["interview","career"],prompt:"Act as a compensation expert at a tech company. Help me understand and negotiate the equity portion of my job offer. The offer is: [describe base, equity, cliff, vesting]. I'm comparing it to: [other offers or market data]. Explain what questions to ask, what to watch out for, and how to negotiate equity without offending.",why:"Equity is where most developers leave the most money on the table — this prompt addresses that gap."},

  // LEARNING (10)
  {id:60,title:"Learn Any Concept Fast",category:"learning",tags:["learning"],prompt:"Act as an expert teacher in [topic]. Teach me [specific concept] using the Feynman technique — explain it simply enough that a smart 12-year-old could understand it. Then show me how it's used in the real world. Then give me 3 questions to test my understanding.",why:"The Feynman technique + real-world example + self-test questions is the complete learning loop in one prompt."},
  {id:61,title:"Build a Learning Roadmap",category:"learning",tags:["learning"],prompt:"Act as a senior developer and mentor. Create a structured 90-day learning roadmap for someone who wants to learn [skill / technology]. I currently know: [describe current level]. I can spend [X hours per week]. Include specific resources (free preferred), weekly milestones, and a project to build at the end.",why:"Time constraint + current level + project goal gives Claude exactly what it needs to make a realistic plan."},
  {id:62,title:"Explain a Complex Topic With Analogies",category:"learning",tags:["learning"],prompt:"Explain [complex technical concept] using 3 different analogies from everyday life. After each analogy, explain what breaks down about it (where the comparison stops being accurate). Then give me the technical definition. Build from simple to complex.",why:"Explaining where analogies break down is what separates a good explanation from a misleading oversimplification."},
  {id:63,title:"Create Flashcards for Studying",category:"learning",tags:["learning"],prompt:"Act as a learning design expert. Create 20 flashcard-style Q&A pairs for studying [topic]. Format each card as: FRONT: [question] / BACK: [concise answer]. Focus on the concepts that are most commonly misunderstood or most important to remember. Make questions test understanding, not just memorisation.",why:"'Test understanding, not memorisation' is what turns flashcards from trivia into real learning."},
  {id:64,title:"Quiz Me on a Topic",category:"learning",tags:["learning"],prompt:"Act as a strict but encouraging teacher. Quiz me on [topic]. Start with 3 easy questions to build confidence, then move to 5 medium questions, then 2 hard questions that require real understanding. After each answer I give, tell me if I'm right, explain what I got wrong, and fill in any gaps in my knowledge.",why:"The escalating difficulty structure is proven to build genuine competence — not just surface familiarity."},
  {id:65,title:"Summarise a Long Article or Paper",category:"learning",tags:["learning","productivity"],prompt:"Act as a research assistant. Read the following content and give me: a 3-sentence summary of the main point, the 5 most important takeaways I can actually use, any claims that seem questionable or need more evidence, and 2 follow-up questions I should explore next:\\n\\n[paste article or abstract]",why:"The questionable claims section is what separates critical summarisation from passive reading."},
  {id:66,title:"Teach Me a Framework Quickly",category:"learning",tags:["learning","coding"],prompt:"Act as a developer who has been using [React / Next.js / FastAPI / Django] for 5 years. Teach me the 20% of this framework that handles 80% of real-world use cases. Skip theory — show me practical, working code examples for the most common tasks. What should I actually know first?",why:"The 80/20 framing cuts through documentation and gives you what actually matters in practice."},
  {id:67,title:"Turn Notes Into a Study Guide",category:"learning",tags:["learning"],prompt:"Act as a study guide creator. Take my messy notes on [topic] and transform them into a structured, clear study guide. Organise by concept, add any important points I've missed, explain any vague parts, and add a summary at the end. My notes:\\n\\n[paste your notes]",why:"Asking Claude to add missing points turns your notes into a complete reference, not just a cleaned-up version."},
  {id:68,title:"Find Gaps in My Knowledge",category:"learning",tags:["learning"],prompt:"Act as a Socratic teacher. I'm going to explain [topic] to you as I understand it. Ask me probing questions that reveal where my understanding breaks down or where I have misconceptions. Don't correct me directly — ask questions that make me discover the gaps myself. Ready? I'll start:\\n\\n[your explanation of the topic]",why:"The Socratic method reveals the gaps you don't know you have — which is where real learning happens."},
  {id:69,title:"Compare Two Technologies",category:"learning",tags:["learning"],prompt:"Act as a senior architect who has used both [Technology A] and [Technology B] in production. Compare them honestly for [my use case]. Cover: learning curve, performance, ecosystem, long-term viability, and when each is clearly the better choice. Don't give a balanced 'it depends' non-answer — tell me what YOU would choose and why.",why:"'Don't give a non-answer' is the most important instruction here — it forces a concrete recommendation."},

  // WRITING (10)
  {id:70,title:"Write a Technical Blog Post",category:"writing",tags:["writing","coding"],prompt:"Act as a technical writer who also writes for developer blogs like CSS-Tricks and Smashing Magazine. Write a blog post about [topic] for [beginner / intermediate / advanced] developers. Make it practical with code examples, conversational in tone, and give it a hook intro that earns the reader's time. Target length: 800-1000 words.",why:"Naming specific publications Claude should write like gives it a clear quality bar and editorial style to target."},
  {id:71,title:"Write LinkedIn Content",category:"writing",tags:["writing","career"],prompt:"Act as a developer content creator who gets strong engagement on LinkedIn. Write a LinkedIn post about [topic / experience / lesson]. Use a strong first line that stops scrolling. Write in short paragraphs. End with a question that invites comments. No corporate language. Sound like a real person sharing a real experience.",why:"'Sound like a real person' is the most important instruction — LinkedIn's biggest problem is people who don't."},
  {id:72,title:"Write an Instagram Caption",category:"writing",tags:["writing"],prompt:"Act as a social media strategist who specialises in tech content. Write an Instagram caption for a carousel post about [topic]. Include: a hook first line, 3-4 lines of value, a save or share prompt, a CTA to comment a keyword, and 10 relevant hashtags. Tone: direct, real, not salesy.",why:"The specific structural requirements ensure the caption actually drives the engagement actions that matter."},
  {id:73,title:"Simplify Technical Writing",category:"writing",tags:["writing"],prompt:"Act as a plain language editor. Rewrite the following technical content so that a smart non-technical person can understand it. Keep all the important information. Remove jargon or explain it in brackets. Aim for a reading level of a bright 16-year-old:\\n\\n[paste your technical content]",why:"The reading level target gives Claude a concrete standard to write towards."},
  {id:74,title:"Write Email Threads",category:"writing",tags:["writing","productivity"],prompt:"Act as a professional communication expert. Write an email to [audience] about [topic]. The goal of this email is to [describe goal]. Tone: [professional / friendly / urgent]. Keep it under 150 words. Subject line should make them open it immediately. No filler sentences.",why:"'No filler sentences' is the instruction that separates tight, readable emails from the kind people skim past."},
  {id:75,title:"Write a Project Proposal",category:"writing",tags:["writing"],prompt:"Act as a senior developer writing an internal proposal. Write a project proposal for building [describe project]. Cover: the problem it solves, proposed solution, tech stack, timeline, risks, and expected outcome. Make it persuasive but realistic — the audience is technical managers who will ask hard questions.",why:"Writing for 'technical managers who ask hard questions' forces Claude to address objections proactively."},
  {id:76,title:"Write a Post-Mortem Report",category:"writing",tags:["writing"],prompt:"Act as an engineering manager. Write a blameless post-mortem report for the following incident: [describe what happened]. Cover: timeline, root cause, immediate fix, long-term prevention, and lessons learned. Tone should be factual and forward-looking — no blame, only learning.",why:"The blameless frame is industry best practice and produces post-mortems that teams actually read and learn from."},
  {id:77,title:"Write Tweet Threads",category:"writing",tags:["writing"],prompt:"Act as a developer educator who gets strong engagement on Twitter/X. Write a 10-tweet thread about [topic]. First tweet: strong hook that promises clear value. Tweets 2-9: one clear point each, building on the previous. Last tweet: summary and follow CTA. Each tweet must stand alone but reward reading the whole thread.",why:"'Each tweet must stand alone' is what separates a great thread from one that falls apart halfway through."},
  {id:78,title:"Write Product Documentation",category:"writing",tags:["writing","coding"],prompt:"Act as a technical documentation writer at a top developer tools company. Write clear, complete documentation for [feature / product / API]. Structure: overview (one paragraph), when to use it, how it works, step-by-step setup, code examples, common errors and solutions, and FAQ. Target audience: developers seeing this for the first time.",why:"The complete structure prevents the most common documentation failure — explaining how without explaining why or what for."},
  {id:79,title:"Write a YouTube Script",category:"writing",tags:["writing"],prompt:"Act as a YouTube scriptwriter for a developer education channel. Write a script for a [5-7 minute] video about [topic]. Include: a hook that earns attention in the first 15 seconds, clear structure with timestamps, natural spoken language (not written), code sections with commentary, and a strong ending with a CTA. Target audience: [describe].",why:"'Natural spoken language' is the critical instruction — most written content sounds terrible when read aloud."},

  // SYSTEM DESIGN (8)
  {id:80,title:"Design a Scalable System",category:"system",tags:["system"],prompt:"Act as a solutions architect. Help me design a scalable architecture for [describe the system]. Start by asking me the 5 most important clarifying questions before designing anything. Then walk me through: functional requirements, scale estimation, high-level architecture, database choice and schema, API design, and which parts to scale first.",why:"The clarifying questions first approach mirrors how real system design interviews and real projects should start."},
  {id:81,title:"Choose the Right Database",category:"system",tags:["system","coding"],prompt:"Act as a database architect who has worked with relational, NoSQL, and NewSQL systems in production. My use case: [describe]. My scale: [describe users/data volume]. My query patterns: [describe what reads/writes look like]. Recommend the best database solution and explain why you'd reject the alternatives.",why:"Explaining why alternatives were rejected is how you build real database decision-making intuition."},
  {id:82,title:"Design a Caching Strategy",category:"system",tags:["system"],prompt:"Act as a backend architect who specialises in performance. Design a caching strategy for [describe your system]. Consider: what to cache, what not to cache, cache invalidation strategy, TTL values, and which layer (CDN / application / database) each cache should live at. Show me code examples for the implementation.",why:"Cache invalidation is famously hard — explicitly naming it forces Claude to address the hard problem, not just the easy parts."},
  {id:83,title:"Design a Microservices Architecture",category:"system",tags:["system"],prompt:"Act as a microservices architect. Help me break down [monolithic application] into microservices. Tell me: how to identify service boundaries, which services to create, how they should communicate (sync vs async), how to handle data consistency across services, and what to migrate first. Be honest about the added complexity.",why:"'Be honest about the added complexity' is the check on microservices hype — sometimes a monolith is the right answer."},
  {id:84,title:"Design an Authentication System",category:"system",tags:["system","coding"],prompt:"Act as a security architect. Design a complete authentication and authorisation system for [describe your application]. Cover: registration, login, password reset, session management, JWT vs session tokens, refresh token strategy, and role-based access control. Include code examples for the critical parts.",why:"Covering the full auth lifecycle — including password reset and token refresh — is what makes this production-grade."},
  {id:85,title:"Plan a Database Migration",category:"system",tags:["system"],prompt:"Act as a database migration expert. I need to migrate from [current database/schema] to [new database/schema] with zero downtime. My current setup: [describe]. Data size: [describe]. Help me plan the migration strategy step by step, including rollback plan, testing approach, and how to keep data consistent during the migration.",why:"Zero downtime and a rollback plan are the two things that separate a production migration from a disaster."},
  {id:86,title:"Design a Message Queue System",category:"system",tags:["system"],prompt:"Act as a distributed systems engineer. I need to implement asynchronous processing in my application using a message queue. My use case: [describe]. Expected volume: [describe]. Help me: choose between Kafka / RabbitMQ / SQS, design the message schema, plan the consumer architecture, and handle failures and retries.",why:"Failure handling and retries are where message queue implementations most commonly fail in production."},
  {id:87,title:"Estimate System Scale",category:"system",tags:["system","interview"],prompt:"Act as a system design interviewer. Teach me how to do back-of-envelope scale estimations. Walk me through estimating the scale requirements for [Twitter / Instagram / WhatsApp]. Show me what numbers to assume, how to calculate storage/bandwidth/QPS, and how to use these estimates to drive design decisions.",why:"Scale estimation is the most skipped part of system design prep — this prompt makes it concrete and learnable."},

  // PRODUCTIVITY (8)
  {id:88,title:"Break Down a Large Task",category:"productivity",tags:["productivity"],prompt:"Act as a project manager and senior developer. I need to build [describe project or feature] but it feels overwhelming. Break it down into the smallest possible tasks that can each be completed in under 2 hours. Organise them in the right order with dependencies noted. Estimate time for each task.",why:"2-hour task chunks is the magic productivity threshold — large enough to matter, small enough to start without dread."},
  {id:89,title:"Write a Technical Spec",category:"productivity",tags:["productivity","writing"],prompt:"Act as a staff engineer. Write a technical specification document for [describe feature]. Include: background and motivation, goals and non-goals, proposed solution, alternative approaches considered, implementation plan with phases, testing strategy, and open questions. This will be reviewed by other engineers.",why:"Non-goals and open questions are what separate a spec that creates alignment from one that creates arguments."},
  {id:90,title:"Plan a Sprint",category:"productivity",tags:["productivity"],prompt:"Act as an experienced engineering team lead. Help me plan a 2-week sprint for my team. Team size: [X developers]. Current backlog: [list your tasks]. Team velocity: [describe if known]. Prioritise the backlog, create a realistic sprint plan, identify dependencies, and flag risks. Format it as a day-by-day plan.",why:"Flagging risks explicitly prevents the sprint planning optimism that leads to 60% completion rates."},
  {id:91,title:"Write a Daily Standup Update",category:"productivity",tags:["productivity"],prompt:"Help me write a concise, informative daily standup update. Yesterday I worked on: [describe]. Today I'm working on: [describe]. Blockers: [describe or 'none']. Write it in 3-4 bullet points, under 60 words total, in the format my team expects (Yesterday / Today / Blockers). Be direct and specific, not vague.",why:"The 60-word constraint is what standups need most — most are too long because nobody has practiced being concise."},
  {id:92,title:"Create a Learning Schedule",category:"productivity",tags:["productivity","learning"],prompt:"Act as a productivity coach who specialises in developers. I want to learn [skill] while working a full-time job. I have [X hours] per week available. Create a realistic weekly schedule that fits around my work, prevents burnout, includes project-based learning, and has clear weekly milestones I can measure.",why:"Burnout prevention and measurable milestones are what separate a sustainable plan from an ambitious one you abandon in week 3."},
  {id:93,title:"Automate a Repetitive Task",category:"productivity",tags:["productivity","coding"],prompt:"Act as a developer who loves automation. I do the following task repeatedly: [describe the manual task]. Help me automate it. Suggest the best approach (shell script / Python / cron job / tool), then write the actual code to automate it. Make it robust with error handling.",why:"The broad approach question first ensures you get the right tool for the job, not just a script in Claude's preferred language."},
  {id:94,title:"Prioritise a Long To-Do List",category:"productivity",tags:["productivity"],prompt:"Act as a ruthless but empathetic productivity coach. Here is my current task list: [paste your tasks]. Help me prioritise using the Eisenhower Matrix (Urgent+Important / Important+Not Urgent / Urgent+Not Important / Neither). Tell me what to do today, what to schedule, what to delegate, and what to delete.",why:"The Eisenhower Matrix is one of the few prioritisation frameworks that actually forces you to delete things — which is where the productivity gains are."},
  {id:95,title:"Write a Meeting Agenda",category:"productivity",tags:["productivity","writing"],prompt:"Act as a meeting facilitator who believes most meetings are a waste of time. Write an agenda for a [30/60]-minute meeting about [topic]. Include: a clear goal for the meeting, timed agenda items, who is responsible for each item, pre-reads to send in advance, and the decision that needs to be made by the end.",why:"'The decision that needs to be made' is the most important item — meetings without a decision are conversations, not meetings."},

  // AI & PROMPTING (10)
  {id:96,title:"Write Better Prompts",category:"ai",tags:["ai"],prompt:"Act as a prompt engineering expert. I want to get better results from Claude for this task: [describe your goal]. Here is my current prompt: [paste it]. Analyse what's weak about it and rewrite it to be significantly more effective. Explain each change you made and why it improves the output.",why:"Understanding why each change improves the prompt is how you develop prompting intuition, not just get one better prompt."},
  {id:97,title:"Build an AI Workflow",category:"ai",tags:["ai","productivity"],prompt:"Act as an AI workflow architect. I want to automate the following workflow using AI tools: [describe the workflow]. Suggest which AI tools to use at each step, how to chain them together, what to prompt each one with, and how to handle cases where AI output needs human review. Make it practical, not theoretical.",why:"The human review step is what separates a responsible AI workflow from one that quietly produces errors nobody notices."},
  {id:98,title:"Create a Custom Claude Persona",category:"ai",tags:["ai"],prompt:"Help me write a system prompt for a custom Claude assistant that acts as [describe persona — e.g. 'a senior Python developer at a fintech startup who reviews code for security and performance']. Include: the role, expertise level, communication style, what it should always do, and what it should never do. Make it specific enough to be consistently useful.",why:"The 'what it should never do' section is what gives a custom persona real guardrails and consistent behaviour."},
  {id:99,title:"Evaluate AI Tool for Your Use Case",category:"ai",tags:["ai"],prompt:"Act as an AI tools consultant. I need to choose between [Tool A], [Tool B], and [Tool C] for this specific use case: [describe exactly what you need to do]. Evaluate each tool on: capability for my exact task, cost, privacy, ease of integration, and long-term reliability. Give me a clear recommendation with reasoning.",why:"Evaluating 'long-term reliability' forces consideration of whether a tool will still exist in 12 months — critical for production systems."},
  {id:100,title:"Chain Prompts for Complex Tasks",category:"ai",tags:["ai","productivity"],prompt:"Act as a prompt chain designer. I want to use Claude to complete this complex multi-step task: [describe it]. Design a chain of 4-6 sequential prompts where each output feeds into the next prompt as input. Write out each prompt in the chain, explain what it does, and note what the human needs to check at each handoff.",why:"The human handoff points are what make prompt chains safe — they're where you catch AI errors before they compound."},
];

// ─── STATE ───
let activeFilter = 'all';
let searchQuery = '';
let currentModalPrompt = '';

// ─── RENDER ───
function renderPrompts() {
  const grid = document.getElementById('promptsGrid');
  let filtered = prompts.filter(p => {
    const matchFilter = activeFilter === 'all' || p.category === activeFilter;
    const matchSearch = searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.prompt.toLowerCase().includes(searchQuery) ||
      p.tags.some(t => t.includes(searchQuery));
    return matchFilter && matchSearch;
  });

  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results"><p>No prompts found. Try a different search or filter.</p></div>';
  } else {
    filtered.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'prompt-card';
      card.style.animationDelay = (i * 0.03) + 's';
      card.innerHTML = \`
        <div class="card-top">
          <span class="card-num">#\${String(p.id).padStart(3,'0')}</span>
          <div class="card-tags">\${p.tags.map(t=>\`<span class="tag \${t}">\${t}</span>\`).join('')}</div>
        </div>
        <div class="card-title">\${p.title}</div>
        <div class="card-prompt">\${p.prompt.substring(0,180)}…</div>
        <div class="card-bottom">
          <button class="copy-btn" onclick="copyPrompt(event,\${p.id})">Copy prompt</button>
          <span class="card-use">Click to expand →</span>
        </div>
      \`;
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('copy-btn')) openModal(p);
      });
      grid.appendChild(card);
    });
  }

  const count = filtered.length;
  document.getElementById('sectionCount').textContent = count;
  document.getElementById('visibleCount').textContent = count;
}

// ─── FILTER ───
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderPrompts();
  });
});

// ─── SEARCH ───
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase();
  renderPrompts();
});

// ─── COPY ───
function copyPrompt(e, id) {
  e.stopPropagation();
  const p = prompts.find(x => x.id === id);
  navigator.clipboard.writeText(p.prompt).then(() => {
    const btn = e.target;
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy prompt'; btn.classList.remove('copied'); }, 2000);
  });
}

function copyModalPrompt() {
  navigator.clipboard.writeText(currentModalPrompt).then(() => {
    const btn = document.getElementById('modalCopyBtn');
    btn.textContent = 'Copied ✓';
    setTimeout(() => { btn.textContent = 'Copy Prompt'; }, 2000);
  });
}

// ─── MODAL ───
function openModal(p) {
  currentModalPrompt = p.prompt;
  document.getElementById('modalTag').textContent = p.tags.join(' · ').toUpperCase();
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalPrompt').textContent = p.prompt;
  document.getElementById('modalWhy').textContent = '💡 ' + p.why;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// ─── CURSOR ───
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursor.style.left=mx+'px'; cursor.style.top=my+'px'; });
function animRing(){ rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12; cursorRing.style.left=rx+'px'; cursorRing.style.top=ry+'px'; requestAnimationFrame(animRing); }
animRing();

// ─── PROGRESS BAR ───
window.addEventListener('scroll', () => {
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress').style.width = (s/h*100) + '%';
});

// ─── MARQUEE ───
const marqueeItems = ['Role Prompting','Chain of Thought','Code Review','System Design','Debugging','Career Growth','Interview Prep','Writing','Learning','Productivity','AI Workflows','Clean Code','Security Audit','Database Design','Performance'];
const track = document.getElementById('marqueeTrack');
[...marqueeItems,...marqueeItems].forEach(item => {
  const el = document.createElement('span');
  el.className = 'marquee-item';
  el.innerHTML = \`<span>◆</span> \${item} \`;
  track.appendChild(el);
});

// ─── INIT ───
renderPrompts();
<\/script>
</body>
</html>
`,Lm=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Content Prompterrr | rk.codex</title>
<meta name="description" content="A copy-ready prompt system for generating viral developer and AI Instagram carousels with Claude or ChatGPT.">
<meta name="keywords" content="ai, content, prompt engineering, instagram, carousel, claude, chatgpt, creators, developers">
<meta name="date" content="2026-04-06T19:30:00+05:30">
<meta name="category" content="Prompt System">
<meta name="featured" content="true">
<meta name="theme-color" content="#ff6b2c">
    <meta property="og:image" content="/rk-images/walking-black-suit.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0b0b0b;
    --surface: #121212;
    --surface-2: #181818;
    --line: #272727;
    --text: #f2eee8;
    --muted: #9d978d;
    --accent: #ff6b2c;
    --accent-soft: rgba(255, 107, 44, 0.12);
    --radius: 24px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    line-height: 1.65;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(circle at top right, rgba(255,107,44,0.11), transparent 28%),
      radial-gradient(circle at bottom left, rgba(255,255,255,0.04), transparent 24%);
    pointer-events: none;
  }

  .shell {
    width: min(1160px, calc(100vw - 40px));
    margin: 0 auto;
  }

  .topbar {
    position: sticky;
    top: 0;
    z-index: 20;
    backdrop-filter: blur(16px);
    background: rgba(11, 11, 11, 0.84);
    border-bottom: 1px solid var(--line);
  }

  .topbar-inner {
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .brand {
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.03em;
  }

  .brand span { color: var(--accent); }

  .nav {
    display: flex;
    gap: 18px;
    font-size: 0.92rem;
  }

  .nav a {
    color: var(--muted);
    text-decoration: none;
  }

  .hero {
    padding: 72px 0 40px;
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
    gap: 28px;
    align-items: start;
  }

  .eyebrow {
    display: inline-flex;
    min-height: 32px;
    align-items: center;
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0 12px;
    color: var(--muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.74rem;
    margin-bottom: 18px;
  }

  h1, h2, h3, h4 {
    font-family: 'Syne', sans-serif;
    letter-spacing: -0.04em;
    line-height: 0.96;
  }

  h1 {
    font-size: clamp(3rem, 7vw, 5.7rem);
    margin-bottom: 18px;
    max-width: 720px;
  }

  .lede {
    max-width: 650px;
    font-size: 1.1rem;
    color: var(--muted);
  }

  .hero-side {
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 22px;
  }

  .meta-list {
    display: grid;
    gap: 14px;
  }

  .meta-item {
    padding-top: 14px;
    border-top: 1px solid var(--line);
  }

  .meta-item:first-child { padding-top: 0; border-top: 0; }
  .meta-k { display: block; font-size: 0.75rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px; }
  .meta-v { font-weight: 600; }

  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 28px;
    padding-bottom: 72px;
  }

  .main-stack {
    display: grid;
    gap: 22px;
  }

  .panel {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 26px;
  }

  .panel p {
    color: var(--muted);
    margin-top: 14px;
    font-size: 1rem;
  }

  .panel h2 { font-size: clamp(1.8rem, 4vw, 2.6rem); }
  .panel h3 { font-size: 1.35rem; line-height: 1.05; }

  .poster-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    margin-top: 20px;
  }

  .poster {
    aspect-ratio: 4 / 5;
    border-radius: 22px;
    border: 1px solid var(--line);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
  }

  .poster::after {
    content: '';
    position: absolute;
    inset: auto -40% -35% auto;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    filter: blur(0px);
  }

  .poster-dark {
    background:
      linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.48)),
      radial-gradient(circle at top left, rgba(53, 255, 179, 0.15), transparent 28%),
      #101010;
  }

  .poster-light {
    background: #f3eee5;
    color: #121212;
  }

  .poster-light .poster-kicker,
  .poster-light .poster-foot { color: rgba(18,18,18,0.62); }

  .poster-kicker {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--muted);
    position: relative;
    z-index: 1;
  }

  .poster-copy {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 3.4rem);
    line-height: 0.92;
    letter-spacing: -0.05em;
    max-width: 240px;
    position: relative;
    z-index: 1;
  }

  .poster-copy strong { color: var(--accent); }

  .poster-foot {
    position: relative;
    z-index: 1;
    font-size: 0.84rem;
    color: var(--muted);
  }

  .prompt-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;
  }

  .copy-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--line);
    background: var(--surface-2);
    color: var(--text);
    border-radius: 999px;
    min-height: 44px;
    padding: 0 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .copy-button svg { width: 16px; height: 16px; }

  pre {
    overflow: auto;
    padding: 22px;
    border-radius: 22px;
    background: #0e0e0e;
    border: 1px solid var(--line);
    color: #efe7db;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.65;
    white-space: pre-wrap;
  }

  .mini-list {
    display: grid;
    gap: 12px;
    margin-top: 18px;
  }

  .mini-item {
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 16px;
    background: var(--surface-2);
  }

  .mini-item strong {
    display: block;
    margin-bottom: 6px;
    font-size: 0.92rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
  }

  .sidebar {
    display: grid;
    gap: 18px;
    align-content: start;
    position: sticky;
    top: 96px;
  }

  .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
  }

  .chip {
    border: 1px solid var(--line);
    border-radius: 999px;
    min-height: 32px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    color: var(--muted);
    font-size: 0.85rem;
  }

  .side-note {
    color: var(--muted);
    font-size: 0.96rem;
    margin-top: 12px;
  }

  @media (max-width: 960px) {
    .hero, .layout { grid-template-columns: 1fr; }
    .sidebar { position: static; }
  }

  @media (max-width: 680px) {
    .poster-grid { grid-template-columns: 1fr; }
    .nav { display: none; }
    .shell { width: min(100vw - 20px, 1160px); }
    .hero { padding-top: 42px; }
    .panel { padding: 20px; }
  }
</style>
</head>
<body>
  <header class="topbar">
    <div class="shell topbar-inner">
      <div class="brand">rk.<span>codex</span></div>
      <nav class="nav">
        <a href="#prompt">Prompt</a>
        <a href="#angles">Angles</a>
        <a href="#formats">Formats</a>
      </nav>
    </div>
  </header>

  <main class="shell">
    <section class="hero">
      <div>
        <span class="eyebrow">AI Content Engine</span>
        <h1>AI Content Prompterrr for viral developer carousels.</h1>
        <p class="lede">This is the exact long-form system prompt for generating Instagram carousel content in a sharper, more creator-friendly format for AI learners, developers, and tech audiences.</p>
      </div>
      <aside class="hero-side">
        <div class="meta-list">
          <div class="meta-item">
            <span class="meta-k">Best for</span>
            <span class="meta-v">Claude, ChatGPT, Gemini, prompt workflows</span>
          </div>
          <div class="meta-item">
            <span class="meta-k">Use case</span>
            <span class="meta-v">Viral hooks, IG carousels, tech creator content</span>
          </div>
          <div class="meta-item">
            <span class="meta-k">Why this exists</span>
            <span class="meta-v">Turn vague content ideas into save-worthy slides fast</span>
          </div>
        </div>
      </aside>
    </section>

    <section class="layout">
      <div class="main-stack">
        <article class="panel">
          <h2>Reference direction</h2>
          <p>The goal is not generic “AI content”. The goal is creator-grade carousel direction with clear hooks, bolder layout rhythm, and fast reading for developer audiences. These posters are built in the same spirit as the references you shared.</p>
          <div class="poster-grid">
            <div class="poster poster-light">
              <div class="poster-kicker">AI + Productivity</div>
              <div class="poster-copy">YOU&apos;RE USING <strong>CHATGPT</strong> WRONG.</div>
              <div class="poster-foot">Smart devs build systems, not random prompts.</div>
            </div>
            <div class="poster poster-dark">
              <div class="poster-kicker">Open Source #1</div>
              <div class="poster-copy">SHOWCASE YOUR NEXT PRODUCT DEMO.</div>
              <div class="poster-foot">Short, punchy, high-contrast content always scans faster.</div>
            </div>
            <div class="poster poster-dark">
              <div class="poster-kicker">Interview Series</div>
              <div class="poster-copy">EPISODE 1 OF JAVASCRIPT INTERVIEW SERIES.</div>
              <div class="poster-foot">Series format is easier to continue and easier to save.</div>
            </div>
            <div class="poster poster-light">
              <div class="poster-kicker">Resume Projects</div>
              <div class="poster-copy">10 PROJECTS YOU CAN ADD TO YOUR RESUME.</div>
              <div class="poster-foot">Career angle + list format = strong save behavior.</div>
            </div>
          </div>
        </article>

        <article class="panel" id="prompt">
          <div class="prompt-header">
            <div>
              <h2>Copy-ready prompt</h2>
              <p>Exact version, preserved as provided, with a copy button.</p>
            </div>
            <button class="copy-button" type="button" id="copyPrompt">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 7V4.75A2.75 2.75 0 0 1 10.75 2h7.5A2.75 2.75 0 0 1 21 4.75v7.5A2.75 2.75 0 0 1 18.25 15H16v2.25A2.75 2.75 0 0 1 13.25 20h-7.5A2.75 2.75 0 0 1 3 17.25v-7.5A2.75 2.75 0 0 1 5.75 7H8Zm8 8H10.75A2.75 2.75 0 0 1 8 12.25V9H5.75c-.41 0-.75.34-.75.75v7.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V15Zm-6-2.75c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-7.5c0-.41-.34-.75-.75-.75h-7.5c-.41 0-.75.34-.75.75v7.5Z"/></svg>
              <span id="copyLabel">Copy prompt</span>
            </button>
          </div>

<pre id="promptText">You are an elite viral content strategist and Instagram carousel creator focused on developers, AI learners, and tech audience.

Your goal is to generate HIGHLY ENGAGING, VIRAL, and EASY-TO-CONSUME carousel content that performs well on Instagram.

━━━━━━━━━━━━━━━━━━━━━━━
🎯 CORE OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━
Create content that:
- Stops scrolling instantly
- Is easy to understand in 3–5 seconds per slide
- Feels valuable enough to SAVE and SHARE
- Drives comments and engagement

━━━━━━━━━━━━━━━━━━━━━━━
📚 CONTENT CATEGORIES
━━━━━━━━━━━━━━━━━━━━━━━
You must be able to generate content across:

1. AI Learning
- Beginner AI concepts
- AI roadmaps
- Prompt engineering
- AI tools
- AI workflows
- AI vs traditional methods

2. Free Resources / Courses
- Free AI courses
- Developer resources
- Certifications
- Hidden gems (underrated resources)

3. Coding & Interviews
- Interview mistakes
- DSA patterns
- System design basics
- Resume tips
- Job preparation

4. Developer Tools
- AI tools
- Productivity tools
- Chrome extensions
- Websites that save time

5. Hackathons & Projects
- How to win hackathons
- Project ideas
- Execution strategies
- Beginner-friendly builds

6. Career Growth
- Skills that matter
- Developer mindset
- Learning strategies
- Mistakes to avoid

━━━━━━━━━━━━━━━━━━━━━━━
🧠 CONTENT PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━
- Simplicity > Complexity
- Clarity > Completeness
- Engagement > Information overload

Do NOT try to teach everything.
Focus on making content:
- Quick to consume
- Easy to remember
- Emotionally engaging

━━━━━━━━━━━━━━━━━━━━━━━
🎬 CAROUSEL STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━
Generate 5–8 slides.

Slide format:

Slide 1 → HOOK
- Must create curiosity
- Use pattern interrupts
- Examples:
  - “You’re learning AI WRONG…”
  - “No one tells you this…”
  - “This will save you months…”

Slide 2–6 → VALUE
- One idea per slide
- Break down concepts simply
- Use bullets or short phrases
- Avoid explanations longer than 2 lines

Slide 7/8 → CTA
- Save / Comment / Follow
- Use curiosity-based CTA

━━━━━━━━━━━━━━━━━━━━━━━
✍️ WRITING STYLE
━━━━━━━━━━━━━━━━━━━━━━━
- Use Hinglish (Hindi + English mix) where natural
- Conversational tone
- Slightly bold / confident tone
- Avoid robotic or textbook language

GOOD:
"AI se kaam 10x fast ho sakta hai ⚡"

BAD:
"Artificial Intelligence enhances productivity significantly"

━━━━━━━━━━━━━━━━━━━━━━━
🧾 TEXT RULES (STRICT)
━━━━━━━━━━━━━━━━━━━━━━━
- Max 8–10 words per line
- Max 2 lines per slide
- No paragraphs
- Use emojis (but not excessive)
- Make text visually scannable

━━━━━━━━━━━━━━━━━━━━━━━
🔥 VIRAL ELEMENTS TO INCLUDE
━━━━━━━━━━━━━━━━━━━━━━━
- Curiosity gaps
- Relatable pain points
- “You vs Smart people” contrast
- Hidden knowledge / secrets
- Strong claims (but believable)
- Time-saving benefits
- Money/career angle where relevant

━━━━━━━━━━━━━━━━━━━━━━━
🚫 WHAT TO AVOID
━━━━━━━━━━━━━━━━━━━━━━━
- Long explanations
- Technical jargon without simplification
- Boring tone
- Generic advice
- Repetitive points
- Overcrowded slides

━━━━━━━━━━━━━━━━━━━━━━━
📦 OUTPUT FORMAT
━━━━━━━━━━━━━━━━━━━━━━━

1. Topic Title

2. Slides

Slide 1:
[Hook]

Slide 2:
[Value]

...

Slide 7/8:
[CTA]

3. Caption

- Hook
- Short value explanation
- CTA (comment keyword / save)

4. First 2 Comments

- Engagement focused
- Encourage replies

━━━━━━━━━━━━━━━━━━━━━━━
🎯 CTA STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━
Use smart CTA like:
- “Comment ‘AI’”
- “Comment ‘START’”
- “Save this for later”
- “I’ll send you the link”

━━━━━━━━━━━━━━━━━━━━━━━
🧪 VARIATION MODE
━━━━━━━━━━━━━━━━━━━━━━━
When asked, adapt tone:
- More viral → stronger hooks
- More educational → slightly detailed
- More beginner → simpler language

━━━━━━━━━━━━━━━━━━━━━━━
⚡ FINAL RULE
━━━━━━━━━━━━━━━━━━━━━━━
Write like a top Instagram creator, not a teacher.

Every output should feel:
- Shareable
- Save-worthy
- Easy to consume
- Visually clean when turned into slides

━━━━━━━━━━━━━━━━━━━━━━━
💻 ADVANCED TECH CONTENT EXPANSION
━━━━━━━━━━━━━━━━━━━━━━━

You must also generate content around real-world IT industry trends, coding knowledge, and developer growth.

━━━━━━━━━━━━━━━━━━━━━━━
👨‍💻 CODING CONTENT TYPES
━━━━━━━━━━━━━━━━━━━━━━━

1. Coding Tips
- Clean code practices
- Debugging shortcuts
- Productivity hacks
- Code optimization tricks
- Git & workflow tips

2. Coding Questions (Interview Style)
- Beginner to advanced DSA questions
- Pattern-based thinking
- Real interview questions
- “How to think” approach (not just answers)

3. Mistakes Developers Make
- Common beginner mistakes
- Interview mistakes
- Career mistakes
- Learning mistakes

4. System Design (Simple)
- Break down complex systems simply
- Explain using analogies
- Focus on intuition, not heavy theory

━━━━━━━━━━━━━━━━━━━━━━━
🤖 AI AGENTS & FUTURE TECH
━━━━━━━━━━━━━━━━━━━━━━━

Create content about:
- AI agents (what, how, use cases)
- Automation workflows
- “AI replacing tasks” type content
- Future of developers with AI
- Tools like GPT, Claude, APIs, copilots

Make it:
- Practical
- Real-world use case driven
- Not theoretical

━━━━━━━━━━━━━━━━━━━━━━━
📈 TREND-BASED CONTENT (VERY IMPORTANT)
━━━━━━━━━━━━━━━━━━━━━━━

You should generate content based on:
- What’s trending in tech
- What developers are currently talking about
- New tools / updates
- Industry shifts (AI replacing jobs, etc.)

Examples:
- “Developers using AI wrong…”
- “This tool is replacing hours of work…”
- “2026 में developers को ये आना चाहिए…”

━━━━━━━━━━━━━━━━━━━━━━━
🎣 VIRAL HOOK GENERATION MODE
━━━━━━━━━━━━━━━━━━━━━━━

When requested, generate ONLY hooks.

Hooks should:
- Trigger curiosity
- Challenge assumptions
- Feel slightly controversial
- Be short (1 line)

Examples:
- “You’re coding wrong…”
- “AI will replace this role first…”
- “No one tells you this about interviews…”
- “This saves 5 hours daily…”

━━━━━━━━━━━━━━━━━━━━━━━
🧠 THINKING STYLE
━━━━━━━━━━━━━━━━━━━━━━━

Always think:
- “Why would someone stop scrolling for this?”
- “Is this relatable?”
- “Is this saving time / money / effort?”

━━━━━━━━━━━━━━━━━━━━━━━
⚡ CONTENT POSITIONING
━━━━━━━━━━━━━━━━━━━━━━━

Position content as:
- Insider knowledge
- Shortcuts
- Smart strategies
- Not obvious advice

━━━━━━━━━━━━━━━━━━━━━━━
🔥 HIGH-PERFORMANCE FORMATS
━━━━━━━━━━━━━━━━━━━━━━━

Prefer these formats:

1. “You’re doing this wrong…”
2. “Do this instead…”
3. “Top 5 mistakes…”
4. “No one tells you this…”
5. “This will save you hours…”
6. “If I start again, I’d do this…”

━━━━━━━━━━━━━━━━━━━━━━━
🎯 FINAL RULE (VERY IMPORTANT)
━━━━━━━━━━━━━━━━━━━━━━━

Every content piece must feel:
- Practical
- Actionable
- Slightly addictive to read
- Worth saving</pre>
        </article>

        <article class="panel" id="angles">
          <h2>How I&apos;d use this prompt</h2>
          <p>This prompt is strongest when you don&apos;t ask for a generic topic. Give it a clear angle, an audience, and a desired tone. Then let the model build the slides, caption, and comments in one pass.</p>
          <div class="mini-list">
            <div class="mini-item">
              <strong>Angle 1</strong>
              “Write a developer carousel on tools replacing 5 hours of work.”
            </div>
            <div class="mini-item">
              <strong>Angle 2</strong>
              “Make this more viral and sharper for AI beginners in India.”
            </div>
            <div class="mini-item">
              <strong>Angle 3</strong>
              “Turn this into a JavaScript interview series with episode hooks.”
            </div>
          </div>
        </article>

        <article class="panel" id="formats">
          <h2>Content formats that fit your profile</h2>
          <p>Based on the kind of tech content you&apos;re already leaning toward, these formats make sense for your site and creator profile.</p>
          <div class="mini-list">
            <div class="mini-item">
              <strong>AI workflow breakdowns</strong>
              Prompt systems, creator tools, local AI, and practical workflows.
            </div>
            <div class="mini-item">
              <strong>Open source showcase posts</strong>
              Fast slides that introduce one tool, one benefit, one action.
            </div>
            <div class="mini-item">
              <strong>Interview series</strong>
              Episodic content is easier to continue and easier to remember.
            </div>
            <div class="mini-item">
              <strong>Resume and project lists</strong>
              Strong save behavior because the career value is obvious instantly.
            </div>
          </div>
        </article>
      </div>

      <aside class="sidebar">
        <div class="panel">
          <h3>Tags</h3>
          <div class="chip-row">
            <span class="chip">AI</span>
            <span class="chip">Instagram</span>
            <span class="chip">Prompting</span>
            <span class="chip">Carousel</span>
            <span class="chip">Creators</span>
          </div>
          <p class="side-note">Use this as a website article, a prompt vault entry, or a pinned resource for your audience.</p>
        </div>
      </aside>
    </section>
  </main>

<script>
  const copyButton = document.getElementById('copyPrompt');
  const copyLabel = document.getElementById('copyLabel');
  const promptText = document.getElementById('promptText');

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(promptText.textContent);
      copyLabel.textContent = 'Copied';
      setTimeout(() => {
        copyLabel.textContent = 'Copy prompt';
      }, 1600);
    } catch (error) {
      copyLabel.textContent = 'Copy failed';
      setTimeout(() => {
        copyLabel.textContent = 'Copy prompt';
      }, 1600);
    }
  });
<\/script>
</body>
</html>
`,Rm=`<!DOCTYPE html>
<html lang="en" data-theme="dark" data-lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free AI Models in 5 Minutes — Bonsai Setup Guide</title>
<meta name="description" content="A fast setup guide for routing Claude Code or Codex through Bonsai to access free frontier AI models in minutes.">
<meta name="keywords" content="bonsai, free ai models, codex, claude code, gpt-5, gemini, grok, developer tools">
<meta name="date" content="2026-04-13T10:20:00+05:30">
<meta name="category" content="Developer Tools">
<meta name="theme-color" content="#22c55e">
<meta property="article:published_time" content="2026-04-13T10:20:00+05:30">
<meta property="og:image" content="/articles/bonsai-free-models-guide.png">
<style>
:root[data-theme="dark"]{--bg:#080808;--bg2:#101010;--bg3:#181818;--bg4:#1e1e1e;--border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0.12);--text:#efefef;--muted:#666;--muted2:#999;--green:#22c55e;--green-dim:rgba(34,197,94,0.1);--green-border:rgba(34,197,94,0.25);--green-text:#4ade80;--yellow-dim:rgba(234,179,8,0.08);--yellow-border:rgba(234,179,8,0.2);--yellow-text:#fde68a;--code-bg:#0c0c0c;--card-bg:#111;--hero-dot:rgba(255,255,255,0.025);}
:root[data-theme="light"]{--bg:#f7f7f5;--bg2:#efefec;--bg3:#e6e6e2;--bg4:#deded9;--border:rgba(0,0,0,0.07);--border2:rgba(0,0,0,0.13);--text:#111;--muted:#999;--muted2:#555;--green:#16a34a;--green-dim:rgba(22,163,74,0.08);--green-border:rgba(22,163,74,0.25);--green-text:#15803d;--yellow-dim:rgba(180,83,9,0.06);--yellow-border:rgba(180,83,9,0.2);--yellow-text:#92400e;--code-bg:#e8e8e4;--card-bg:#fff;--hero-dot:rgba(0,0,0,0.035);}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',sans-serif;font-size:15px;line-height:1.7;transition:background .2s,color .2s;}

/* HEADER */
header{position:sticky;top:0;z-index:100;background:var(--bg);border-bottom:1px solid var(--border);padding:0 24px;height:46px;display:flex;align-items:center;justify-content:space-between;}
.h-left{display:flex;align-items:center;gap:6px;font-size:13px;}
.h-brand{font-weight:700;font-size:14px;color:var(--text);letter-spacing:-0.01em;}
.h-sep{color:var(--border2);font-size:18px;line-height:1;}
.h-page{color:var(--muted);font-size:13px;}
.h-right{display:flex;align-items:center;gap:8px;}
.lang-pill{display:flex;align-items:center;background:var(--bg3);border:1px solid var(--border2);border-radius:20px;padding:2px;gap:2px;}
.lbtn{padding:3px 11px;border-radius:14px;font-size:11px;font-weight:700;cursor:pointer;color:var(--muted);border:none;background:transparent;letter-spacing:.04em;transition:all .15s;font-family:inherit;}
.lbtn.active{background:var(--green);color:#fff;}
.theme-btn{width:30px;height:30px;border-radius:50%;border:1px solid var(--border2);background:var(--bg3);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--text);transition:background .15s;font-family:inherit;}
.theme-btn:hover{background:var(--bg4);}

/* HERO */
.hero-wrap{position:relative;overflow:hidden;border-bottom:1px solid var(--border);}
.hero-dots{position:absolute;inset:0;background-image:radial-gradient(var(--hero-dot) 1px,transparent 1px);background-size:22px 22px;pointer-events:none;}
.hero-glow{position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:700px;height:320px;background:radial-gradient(ellipse,rgba(34,197,94,0.07) 0%,transparent 65%);pointer-events:none;}
.hero{max-width:760px;margin:0 auto;padding:68px 24px 56px;position:relative;}
.badge-row{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;}
.badge{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border2);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;letter-spacing:.07em;color:var(--muted2);background:var(--bg2);text-transform:uppercase;}
.badge.g{border-color:var(--green-border);color:var(--green-text);background:var(--green-dim);}
.dot{width:5px;height:5px;border-radius:50%;background:var(--green);display:inline-block;}
h1{font-size:clamp(36px,6vw,60px);font-weight:800;line-height:1.08;letter-spacing:-.03em;margin-bottom:20px;}
h1 .acc{color:var(--green);}
.hero-sub{font-size:17px;color:var(--muted2);max-width:500px;margin-bottom:36px;line-height:1.6;}
.hero-link{display:inline-flex;align-items:center;gap:8px;background:var(--bg3);border:1px solid var(--border2);border-radius:8px;padding:8px 16px;font-size:13px;font-family:'SF Mono',monospace;color:var(--green-text);text-decoration:none;margin-bottom:48px;transition:border-color .15s;}
.hero-link:hover{border-color:var(--green-border);}
.stats-row{display:flex;gap:0;border-top:1px solid var(--border);padding-top:32px;}
.stat{flex:1;padding-right:32px;border-right:1px solid var(--border);margin-right:32px;}
.stat:last-child{border-right:none;margin-right:0;}
.sv{font-size:32px;font-weight:800;color:var(--green);letter-spacing:-.03em;line-height:1;}
.sl{font-size:12px;color:var(--muted);margin-top:4px;}

/* PAGE */
.page{max-width:760px;margin:0 auto;padding:0 24px 80px;}
.toc{background:var(--card-bg);border:1px solid var(--border);border-radius:14px;padding:24px 28px;margin:40px 0 52px;}
.toc-lbl{font-size:10px;font-weight:700;letter-spacing:.12em;color:var(--muted);text-transform:uppercase;margin-bottom:16px;}
.toc-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px 32px;}
.toc-item{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--muted2);text-decoration:none;transition:color .15s;}
.toc-item:hover{color:var(--text);}
.tn{font-size:11px;color:var(--green);font-weight:700;min-width:20px;}

/* SECTIONS */
.section{margin-bottom:60px;}
.slabel{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--green);margin-bottom:10px;}
h2{font-size:23px;font-weight:700;margin-bottom:14px;letter-spacing:-.02em;}
p{color:var(--muted2);margin-bottom:12px;font-size:15px;}
.info-box{background:var(--green-dim);border:1px solid var(--green-border);border-radius:10px;padding:13px 18px;font-size:13px;color:var(--green-text);margin:16px 0;line-height:1.6;}
.warn-box{background:var(--yellow-dim);border:1px solid var(--yellow-border);border-radius:10px;padding:13px 18px;font-size:13px;color:var(--yellow-text);margin:16px 0;line-height:1.6;}
.code-block{background:var(--code-bg);border:1px solid var(--border2);border-radius:10px;padding:14px 18px;font-family:'SF Mono','Fira Code',monospace;font-size:13px;margin:10px 0;overflow-x:auto;line-height:1.9;}
.cmd{color:var(--green-text);}
.cmd::before{content:'$ ';color:var(--muted);}
code{font-family:'SF Mono','Fira Code',monospace;font-size:12px;background:var(--bg3);color:var(--green-text);padding:2px 6px;border-radius:4px;border:1px solid var(--border2);}

/* STEPS */
.steps{margin:24px 0;}
.step{display:grid;grid-template-columns:40px 1fr;gap:0 20px;padding:26px 0;border-bottom:1px solid var(--border);}
.step:first-child{border-top:1px solid var(--border);}
.snum{width:34px;height:34px;border-radius:50%;background:var(--green-dim);border:1px solid var(--green-border);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--green-text);margin-top:3px;}
.step-body h3{font-size:15px;font-weight:600;margin-bottom:5px;}
.step-body p{font-size:13px;margin-bottom:8px;}

/* MODELS */
.models-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin:22px 0;}
.model-card{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:14px 16px;transition:border-color .15s;}
.model-card:hover{border-color:var(--green-border);}
.mn{font-size:14px;font-weight:700;margin-bottom:3px;}
.mb{font-size:11px;color:var(--muted);margin-bottom:10px;}
.mt{display:inline-block;background:var(--green-dim);color:var(--green-text);font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;border:1px solid var(--green-border);letter-spacing:.05em;}

/* FAQ */
.faq-item{padding:18px 0;border-bottom:1px solid var(--border);}
.faq-item:first-child{border-top:1px solid var(--border);}
.fq{font-size:14px;font-weight:600;margin-bottom:6px;}
.fa{font-size:13px;color:var(--muted2);}

/* FOOTER */
footer{border-top:1px solid var(--border);padding:24px;max-width:760px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--muted);}
footer a{color:var(--green-text);text-decoration:none;}

/* LANG */
.hi{display:none;}
html[data-lang="hi"] .en{display:none;}
html[data-lang="hi"] .hi{display:inline;}
p.hi,div.hi,h2.hi,h3.hi,span.hi.block{display:none;}
html[data-lang="hi"] p.en,html[data-lang="hi"] div.en,html[data-lang="hi"] h2.en,html[data-lang="hi"] h3.en{display:none;}
html[data-lang="hi"] p.hi,html[data-lang="hi"] div.hi,html[data-lang="hi"] h2.hi,html[data-lang="hi"] h3.hi{display:block;}

@media(max-width:560px){.toc-grid{grid-template-columns:1fr;}.stats-row{flex-wrap:wrap;gap:16px;}.stat{border-right:none;margin-right:0;padding-right:0;}.models-grid{grid-template-columns:1fr 1fr;}.h-page{display:none;}}
</style>
</head>
<body>

<header>
  <div class="h-left">
    <span class="h-brand">rk.codex</span>
    <span class="h-sep">/</span>
    <span class="h-page">bonsai-free-models-guide</span>
  </div>
  <div class="h-right">
    <div class="lang-pill">
      <button class="lbtn active" id="btn-en" onclick="setLang('en')">EN</button>
      <button class="lbtn" id="btn-hi" onclick="setLang('hi')">हि</button>
    </div>
    <button class="theme-btn" id="tbtn" onclick="toggleTheme()" title="Toggle theme">☀</button>
  </div>
</header>

<div class="hero-wrap">
  <div class="hero-dots"></div>
  <div class="hero-glow"></div>
  <div class="hero">
    <div class="badge-row">
      <span class="badge g"><span class="dot"></span> Free</span>
      <span class="badge">No credit card</span>
      <span class="badge">Open source</span>
    </div>

    <h1>
      <span class="en">Free <span class="acc">frontier AI</span><br>models in 5 min.</span>
      <span class="hi">5 minutes mein<br><span class="acc">free AI models.</span></span>
    </h1>

    <p class="hero-sub en">No billing. No monthly fees. One CLI setup — and your Claude Code or Codex gets routed to GPT-5, Claude, Grok, Gemini, and more. For free.</p>
    <p class="hero-sub hi">Koi billing nahi. Koi fees nahi. Bas ek CLI setup — aur tumhara Claude Code ya Codex GPT-5, Claude, Grok, Gemini sab use kar sakta hai. Free mein.</p>

    <a class="hero-link" href="https://www.trybons.ai" target="_blank">→ trybons.ai</a>

    <div class="stats-row">
      <div class="stat"><div class="sv">₹0</div><div class="sl">Cost forever</div></div>
      <div class="stat"><div class="sv">5 min</div><div class="sl">Setup time</div></div>
      <div class="stat"><div class="sv">6+</div><div class="sl">Frontier models</div></div>
    </div>
  </div>
</div>

<div class="page">

  <div class="toc">
    <div class="toc-lbl">On this page</div>
    <div class="toc-grid">
      <a class="toc-item" href="#what"><span class="tn">01</span><span class="en">What is Bonsai?</span><span class="hi">Bonsai kya hai?</span></a>
      <a class="toc-item" href="#models"><span class="tn">02</span><span class="en">Available models</span><span class="hi">Available models</span></a>
      <a class="toc-item" href="#setup"><span class="tn">03</span><span class="en">Setup guide</span><span class="hi">Setup guide</span></a>
      <a class="toc-item" href="#connect"><span class="tn">04</span><span class="en">Connect to agent</span><span class="hi">Agent se connect</span></a>
      <a class="toc-item" href="#data"><span class="tn">05</span><span class="en">Privacy & data</span><span class="hi">Data privacy</span></a>
      <a class="toc-item" href="#faq"><span class="tn">06</span>FAQ</a>
    </div>
  </div>

  <div class="section" id="what">
    <div class="slabel">01 — Overview</div>
    <h2 class="en">What is Bonsai?</h2>
    <h2 class="hi">Bonsai kya hai?</h2>
    <p class="en">Bonsai is a free CLI tool by Boolean Inc. that routes your AI agent's prompts to frontier coding models — GPT-5, Claude Sonnet/Opus, Grok, Gemini Pro/Flash, and Qwen — completely free of charge.</p>
    <p class="hi">Bonsai ek free CLI tool hai Boolean Inc. ka, jo tumhare AI agent ke prompts ko frontier models pe route karta hai — GPT-5, Claude, Grok, Gemini — bilkul free mein.</p>
    <p class="en">The trade-off: Bonsai anonymizes your prompts and uses them for model evaluation and training. You get frontier access, they get anonymized data to improve AI.</p>
    <p class="hi">Trade-off yeh hai: Bonsai tumhare prompts anonymize karke model training ke liye use karta hai. Tumhe free models, unhe anonymized data.</p>
    <div class="info-box">
      <span class="en">All data is fully anonymized and encrypted with AES-256. Your identity is never linked to any prompt.</span>
      <span class="hi">Sabka data fully anonymized hai. AES-256 encryption. Tumhari identity kabhi kisi prompt se linked nahi hoti.</span>
    </div>
  </div>

  <div class="section" id="models">
    <div class="slabel">02 — Available models</div>
    <h2 class="en">Free frontier models</h2>
    <h2 class="hi">Kaun se free models hain?</h2>
    <p class="en">All models run in stealth mode — exact versions hidden, but you always get a leading model from each family.</p>
    <p class="hi">Sab models stealth mode mein — exact version hidden, par best model hi milta hai har family mein.</p>
    <div class="models-grid">
      <div class="model-card"><div class="mn">GPT-5</div><div class="mb">OpenAI · Codex</div><span class="mt">FREE</span></div>
      <div class="model-card"><div class="mn">Claude</div><div class="mb">Anthropic · Sonnet/Opus</div><span class="mt">FREE</span></div>
      <div class="model-card"><div class="mn">Grok</div><div class="mb">xAI · Code Fast 1</div><span class="mt">FREE</span></div>
      <div class="model-card"><div class="mn">Gemini</div><div class="mb">Google · Pro/Flash</div><span class="mt">FREE</span></div>
      <div class="model-card"><div class="mn">Qwen</div><div class="mb">Alibaba · Coder</div><span class="mt">FREE</span></div>
      <div class="model-card"><div class="mn">GLM</div><div class="mb">Z-AI · 4.6/4.5 Air</div><span class="mt">FREE</span></div>
    </div>
  </div>

  <div class="section" id="setup">
    <div class="slabel">03 — Setup guide</div>
    <h2 class="en">Step-by-step setup</h2>
    <h2 class="hi">Step-by-step setup</h2>
    <div class="steps">

      <div class="step">
        <div class="snum">1</div>
        <div class="step-body">
          <h3 class="en">Apply for access</h3>
          <h3 class="hi">Access ke liye apply karo</h3>
          <p class="en">Go to trybons.ai and apply. No credit card needed. Once approved, grab your API key from the dashboard.</p>
          <p class="hi">trybons.ai pe jao aur apply karo. Credit card nahi chahiye. Approve hone ke baad API key lo.</p>
          <a href="https://www.trybons.ai" target="_blank" style="color:var(--green-text);font-size:13px;">trybons.ai →</a>
        </div>
      </div>

      <div class="step">
        <div class="snum">2</div>
        <div class="step-body">
          <h3 class="en">Install the Bonsai CLI</h3>
          <h3 class="hi">Bonsai CLI install karo</h3>
          <p class="en">Open your terminal and run:</p>
          <p class="hi">Terminal mein yeh run karo:</p>
          <div class="code-block"><div class="cmd">npm install -g @bonsai-ai/cli</div></div>
          <p class="en" style="font-size:12px;color:var(--muted);">Requires Node.js. Install from <a href="https://nodejs.org" target="_blank" style="color:var(--green-text);">nodejs.org</a> if needed.</p>
          <p class="hi" style="font-size:12px;color:var(--muted);">Node.js chahiye. <a href="https://nodejs.org" target="_blank" style="color:var(--green-text);">nodejs.org</a> se install karo agar nahi hai.</p>
        </div>
      </div>

      <div class="step">
        <div class="snum">3</div>
        <div class="step-body">
          <h3 class="en">Login with your API key</h3>
          <h3 class="hi">API key se login karo</h3>
          <div class="code-block"><div class="cmd">bonsai login</div></div>
          <p class="en">Paste your API key when prompted. Saved locally — no need to enter again.</p>
          <p class="hi">Prompt mein API key paste karo. Locally save — dubara nahi maangega.</p>
        </div>
      </div>

      <div class="step">
        <div class="snum">4</div>
        <div class="step-body">
          <h3 class="en">Start the Bonsai proxy</h3>
          <h3 class="hi">Bonsai proxy start karo</h3>
          <div class="code-block"><div class="cmd">bonsai start</div></div>
          <p class="en">Starts a local proxy. Keep it running in a terminal tab. Your agent routes through this to reach frontier models.</p>
          <p class="hi">Local proxy start hoti hai. Ek terminal tab mein chalta rakho. Agent isi se frontier models tak pahunchega.</p>
          <div class="info-box"><span class="en">That's it. Three commands and you're live on frontier models.</span><span class="hi">Bas. Teen commands aur setup complete.</span></div>
        </div>
      </div>

    </div>
  </div>

  <div class="section" id="connect">
    <div class="slabel">04 — Connect to your agent</div>
    <h2 class="en">Connect to Codex / Claude Code</h2>
    <h2 class="hi">Codex / Claude Code se connect karo</h2>
    <p class="en">Once <code>bonsai start</code> is running, point your agent to the local proxy endpoint. Authentication and routing happen automatically.</p>
    <p class="hi">Jab <code>bonsai start</code> chal raha ho, agent ko local proxy endpoint pe point karo. Authentication aur routing automatic hai.</p>
    <div class="warn-box">
      <span class="en">Run <code>bonsai start</code> every time before your agent makes calls — otherwise you'll get a connection refused error.</span>
      <span class="hi">Har baar agent use karne se pehle <code>bonsai start</code> run karo — warna "connection refused" error aayega.</span>
    </div>
    <p class="en">For Claude Code, set the API base URL in <code>~/.claude/settings.json</code> to Bonsai's local proxy port.</p>
    <p class="hi">Claude Code ke liye, <code>~/.claude/settings.json</code> mein API base URL ko Bonsai ke proxy port pe set karo.</p>
  </div>

  <div class="section" id="data">
    <div class="slabel">05 — Privacy</div>
    <h2 class="en">What happens to my data?</h2>
    <h2 class="hi">Mera data kahan jaata hai?</h2>
    <p class="en">Bonsai collects your prompts and completions, fully anonymizes them, and uses them for model evaluation and training. This is the trade-off for free access.</p>
    <p class="hi">Bonsai tumhare prompts collect karta hai, anonymize karta hai, aur model training ke liye use karta hai. Yahi hai free access ka trade-off.</p>
    <p class="en">They do NOT collect your identity, name, or email linked to any prompt or code output.</p>
    <p class="hi">Tumhari identity, naam, ya email kabhi bhi prompt se linked nahi hoti.</p>
    <div class="info-box"><span class="en">Avoid sending passwords, private keys, or personal data through Bonsai — treat it like any third-party AI service.</span><span class="hi">Passwords, private keys mat bhejo — isko kisi bhi third-party AI service jaisa treat karo.</span></div>
  </div>

  <div class="section" id="faq">
    <div class="slabel">06 — FAQ</div>
    <h2 class="en">Common questions & errors</h2>
    <h2 class="hi">Aam sawaal aur errors</h2>

    <div class="faq-item">
      <div class="fq"><span class="en">Is this actually free forever?</span><span class="hi">Kya yeh sach mein hamesha free hai?</span></div>
      <div class="fa"><span class="en">Yes — as long as you're okay with anonymized data being used for training. Model names are hidden but you always get a leading model.</span><span class="hi">Haan — anonymized data use karne se agree ho toh. Model names hidden hain par best model hi milta hai.</span></div>
    </div>

    <div class="faq-item">
      <div class="fq"><span class="en">Why are model names hidden?</span><span class="hi">Model names kyun hide hain?</span></div>
      <div class="fa"><span class="en">Stealth mode enables unbiased evaluation. Knowing the model could influence your prompts and skew training data.</span><span class="hi">Unbiased evaluation ke liye. Agar pata ho kaunsa model hai, prompts aur data dono affect ho sakte hain.</span></div>
    </div>

    <div class="faq-item">
      <div class="fq"><code>bonsai: command not found</code></div>
      <div class="fa"><span class="en">npm global bin path isn't in $PATH. Run <code>npm config get prefix</code> and add that /bin to your <code>~/.zshrc</code> or <code>~/.bashrc</code>.</span><span class="hi"><code>npm config get prefix</code> run karo aur us path ka /bin apni shell profile mein add karo.</span></div>
    </div>

    <div class="faq-item">
      <div class="fq"><code>connection refused</code></div>
      <div class="fa"><span class="en"><code>bonsai start</code> isn't running. Start it in a terminal tab before making any agent calls.</span><span class="hi"><code>bonsai start</code> chal nahi raha. Agent calls se pehle terminal mein start karo.</span></div>
    </div>

    <div class="faq-item">
      <div class="fq"><span class="en">Does it work on Windows?</span><span class="hi">Windows pe kaam karta hai?</span></div>
      <div class="fa"><span class="en">Should work via WSL2 or PowerShell. Best results on macOS or Linux.</span><span class="hi">WSL2 ya PowerShell se kaam karna chahiye. Best results macOS/Linux pe.</span></div>
    </div>
  </div>

</div>

<footer>
  <span>Guide by rk.codex</span>
  <a href="https://www.trybons.ai" target="_blank">trybons.ai →</a>
</footer>

<script>
function setLang(l){
  document.documentElement.setAttribute('data-lang',l);
  document.getElementById('btn-en').classList.toggle('active',l==='en');
  document.getElementById('btn-hi').classList.toggle('active',l==='hi');
}
function toggleTheme(){
  const h=document.documentElement;
  const dark=h.getAttribute('data-theme')==='dark';
  h.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('tbtn').textContent=dark?'☽':'☀';
}
<\/script>
</body>
</html>
`,Mm=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Claude Carousel Generator | rk.codex</title>
<meta name="description" content="A clean workflow for generating developer Instagram carousel ideas and layouts with Claude, from hook to slide sequence.">
<meta name="keywords" content="claude, carousel, ai content, developer content, instagram, prompt workflow">
<meta name="date" content="2026-04-06T19:20:00+05:30">
<meta name="category" content="Creator Workflow">
<meta name="theme-color" content="#1f6fff">
    <meta property="og:image" content="/rk-images/leaning-smile-black-suit.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #080c16;
    --surface: #101624;
    --surface-2: #151c2c;
    --line: #27324a;
    --text: #edf2ff;
    --muted: #9daac7;
    --accent: #6da8ff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; line-height: 1.65; }
  .shell { width: min(1120px, calc(100vw - 40px)); margin: 0 auto; }
  .hero { padding: 64px 0 28px; display: grid; grid-template-columns: minmax(0, 1.08fr) 360px; gap: 24px; align-items: start; }
  .eyebrow { display: inline-flex; min-height: 32px; align-items: center; padding: 0 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 0.74rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 18px; }
  h1, h2, h3 { font-family: 'Syne', sans-serif; letter-spacing: -0.04em; line-height: 0.95; }
  h1 { font-size: clamp(3rem, 7vw, 5.2rem); max-width: 760px; margin-bottom: 18px; }
  h2 { font-size: clamp(1.8rem, 4vw, 2.5rem); }
  p { color: var(--muted); }
  .panel { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid var(--line); border-radius: 24px; padding: 24px; }
  .hero-side { display: grid; gap: 14px; }
  .stack { display: grid; gap: 20px; padding-bottom: 72px; }
  .two-col { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 24px; }
  .flow-list, .example-grid { display: grid; gap: 14px; margin-top: 18px; }
  .flow-item { border: 1px solid var(--line); border-radius: 18px; background: var(--surface-2); padding: 16px; }
  .flow-item strong { display: block; margin-bottom: 6px; color: var(--text); }
  .example-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .example-card { aspect-ratio: 4 / 5; border-radius: 20px; padding: 18px; border: 1px solid var(--line); display: flex; flex-direction: column; justify-content: space-between; }
  .example-card.dark { background: radial-gradient(circle at bottom right, rgba(109,168,255,0.18), transparent 30%), #0e1320; }
  .example-card.light { background: #f3efe7; color: #0e1524; }
  .example-card.light .kicker, .example-card.light .foot { color: rgba(14,21,36,0.6); }
  .kicker { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.12em; }
  .big-copy { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 5vw, 3.25rem); line-height: 0.92; letter-spacing: -0.05em; }
  .big-copy strong { color: var(--accent); }
  .foot { color: var(--muted); font-size: 0.84rem; }
  .chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
  .chip { min-height: 32px; display: inline-flex; align-items: center; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line); color: var(--muted); font-size: 0.84rem; }
  @media (max-width: 920px) {
    .hero, .two-col { grid-template-columns: 1fr; }
  }
  @media (max-width: 660px) {
    .example-grid { grid-template-columns: 1fr; }
    .shell { width: min(100vw - 20px, 1120px); }
  }
</style>
</head>
<body>
  <main class="shell">
    <section class="hero">
      <div>
        <span class="eyebrow">Claude Workflow</span>
        <h1>Claude Carousel Generator for dev and AI content.</h1>
        <p>Use Claude for structure first, not design first. Hooks, slide sequence, caption, and comments should be solved before you move to Figma, Canva, or code.</p>
      </div>
      <aside class="hero-side panel">
        <h3>Best use</h3>
        <p>Turn one vague topic into a creator-ready content packet: hook, 5–8 slides, CTA, caption, and engagement comments.</p>
        <div class="chips">
          <span class="chip">Claude</span>
          <span class="chip">Hooks</span>
          <span class="chip">Carousels</span>
          <span class="chip">Developers</span>
        </div>
      </aside>
    </section>

    <section class="stack">
      <article class="panel">
        <h2>How I&apos;d structure the workflow</h2>
        <div class="flow-list">
          <div class="flow-item">
            <strong>1. Start with one clear angle</strong>
            Don&apos;t ask Claude for “a carousel on AI”. Ask for “a save-worthy carousel on mistakes devs make with ChatGPT”.
          </div>
          <div class="flow-item">
            <strong>2. Force short slides</strong>
            The model should optimize for scan speed, not explanation density.
          </div>
          <div class="flow-item">
            <strong>3. Generate supporting pieces together</strong>
            Slide deck, caption, and first comments should come in one response.
          </div>
          <div class="flow-item">
            <strong>4. Only then move to visuals</strong>
            Once the structure works, build the poster language around it.
          </div>
        </div>
      </article>

      <article class="panel">
        <h2>Poster directions that work</h2>
        <p>These are the kinds of layouts that stop the scroll quickly because they prioritize one idea, one dominant phrase, and one clean visual rhythm.</p>
        <div class="example-grid">
          <div class="example-card light">
            <div class="kicker">AI + Productivity</div>
            <div class="big-copy">YOU&apos;RE USING <strong>CLAUDE</strong> TOO RANDOMLY.</div>
            <div class="foot">Turn prompts into systems, not one-off chats.</div>
          </div>
          <div class="example-card dark">
            <div class="kicker">Open Source</div>
            <div class="big-copy">SHOWCASE YOUR PRODUCT DEMO BETTER.</div>
            <div class="foot">Make the value visible in one frame.</div>
          </div>
          <div class="example-card dark">
            <div class="kicker">Interview Series</div>
            <div class="big-copy">JAVASCRIPT INTERVIEW SERIES. EPISODE 1.</div>
            <div class="foot">Turn one topic into recurring content.</div>
          </div>
          <div class="example-card light">
            <div class="kicker">Career Growth</div>
            <div class="big-copy">10 PROJECTS YOU SHOULD ADD TO YOUR RESUME.</div>
            <div class="foot">Lists with career value get saved more.</div>
          </div>
        </div>
      </article>

      <section class="two-col">
        <article class="panel">
          <h2>What to ask Claude for</h2>
          <div class="flow-list">
            <div class="flow-item">
              <strong>Hooks only mode</strong>
              Ask for 20 one-line hooks first, then pick one.
            </div>
            <div class="flow-item">
              <strong>More viral mode</strong>
              Tell it to increase contrast, pain points, and curiosity.
            </div>
            <div class="flow-item">
              <strong>More beginner mode</strong>
              Ask for shorter language, more familiar examples, and simpler CTA.
            </div>
          </div>
        </article>

        <aside class="panel">
          <h3>Good topic buckets</h3>
          <div class="chips">
            <span class="chip">AI tools</span>
            <span class="chip">Coding mistakes</span>
            <span class="chip">Hackathons</span>
            <span class="chip">Prompting</span>
            <span class="chip">Interviews</span>
            <span class="chip">Open source</span>
          </div>
          <p style="margin-top:14px;">For your profile, the strongest mix is AI workflow content + dev career content + open source showcase posts.</p>
        </aside>
      </section>
    </section>
  </main>
</body>
</html>
`,jm=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Courses. Real Skills. Zero Rupees. | rk.codex</title>
<meta name="description" content="A sharp free course library for developers and AI learners who want real skills without wasting money or time.">
<meta name="keywords" content="free courses, ai learning, developer resources, certifications, zero rupees, tech skills">
<meta name="date" content="2026-04-08T14:04:00+05:30">
<meta name="category" content="Free Resources">
<meta name="theme-color" content="#2eff9a">
    <meta property="og:image" content="/rk-images/mirror-selfie-black-suit.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500;700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
/* ── DESIGN TOKENS ── */
:root{
  --bg:#0c0e14;
  --bg2:#11141d;
  --bg3:#161a26;
  --bg4:#1c2130;
  --surface:#1e2436;
  --surface2:#232a3a;
  --border:#2a3248;
  --border2:#323d55;
  --text-primary:#f4f1ea;
  --text-secondary:#b8bfd4;
  --text-muted:#7a8399;
  --text-faint:#4a5570;
  --accent:#2eff9a;
  --accent-dim:#1db870;
  --accent-bg:rgba(46,255,154,.08);
  --accent-border:rgba(46,255,154,.2);
  --blue:#4d9fff;
  --blue-bg:rgba(77,159,255,.08);
  --orange:#ff8c42;
  --orange-bg:rgba(255,140,66,.08);
  --purple:#a78bfa;
  --purple-bg:rgba(167,139,250,.08);
  --red:#ff5f6d;
  --red-bg:rgba(255,95,109,.08);
  --yellow:#fbbf24;
  --yellow-bg:rgba(251,191,36,.08);
  --teal:#2dd4bf;
  --teal-bg:rgba(45,212,191,.08);
  --pink:#f472b6;
  --pink-bg:rgba(244,114,182,.08);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text-primary);font-family:'Manrope',sans-serif;overflow-x:hidden;line-height:1.6}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:var(--bg2)}
::-webkit-scrollbar-thumb{background:var(--accent-dim);border-radius:4px}
#progress{position:fixed;top:0;left:0;height:3px;background:var(--accent);z-index:999;width:0%;transition:width .08s}

/* ── SVG ICONS ── */
.icon{display:inline-block;vertical-align:middle;flex-shrink:0}

/* ── NAVBAR ── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:500;
  height:60px;display:flex;align-items:center;justify-content:space-between;
  padding:0 48px;
  background:rgba(12,14,20,.97);
  backdrop-filter:blur(24px);
  border-bottom:1px solid var(--border);
}
.nav-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:20px;color:var(--accent);text-decoration:none;letter-spacing:-.03em;display:flex;align-items:center;gap:6px}
.nav-logo em{color:var(--text-primary);font-style:normal}
.nav-links{display:flex;gap:32px}
.nav-links a{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-muted);text-decoration:none;letter-spacing:.06em;text-transform:uppercase;transition:color .2s}
.nav-links a:hover{color:var(--accent)}
.nav-right{display:flex;align-items:center;gap:12px}
.nav-pill{font-family:'JetBrains Mono',monospace;font-size:10px;background:var(--accent-bg);color:var(--accent);border:1px solid var(--accent-border);padding:5px 12px;border-radius:20px;letter-spacing:.06em}
.nav-btn{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-primary);background:var(--surface);border:1px solid var(--border2);padding:7px 16px;border-radius:6px;text-decoration:none;transition:all .2s}
.nav-btn:hover{border-color:var(--accent);color:var(--accent)}

/* ── HERO ── */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:100px 48px 80px;position:relative;overflow:hidden}
.hero-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:56px 56px;opacity:.18;mask-image:radial-gradient(ellipse 80% 70% at 50% 30%,black,transparent)}
.hero-glow{position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(46,255,154,.06) 0%,transparent 70%);top:-200px;right:-200px;pointer-events:none}
.hero-glow2{position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(77,159,255,.05) 0%,transparent 70%);bottom:-100px;left:-100px;pointer-events:none}
.hero-chip{display:inline-flex;align-items:center;gap:8px;background:var(--accent-bg);border:1px solid var(--accent-border);border-radius:20px;padding:6px 16px;width:fit-content;margin-bottom:32px}
.chip-pulse{width:7px;height:7px;background:var(--accent);border-radius:50%;animation:pulse 2s ease infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.chip-text{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--accent);letter-spacing:.12em;text-transform:uppercase}
h1{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(52px,7.5vw,108px);line-height:.88;letter-spacing:-.04em;margin-bottom:36px}
.h1-white{display:block;color:var(--text-primary)}
.h1-green{display:block;color:var(--accent)}
.h1-ghost{display:block;color:transparent;-webkit-text-stroke:1.5px var(--border2)}
.hero-p{font-size:17px;color:var(--text-secondary);max-width:560px;line-height:1.75;margin-bottom:44px}
.hero-p strong{color:var(--text-primary);font-weight:700}
.hero-stats{display:flex;gap:0;margin-bottom:44px;flex-wrap:wrap}
.hs{padding:0 40px 0 0;border-right:1px solid var(--border);margin-right:40px}
.hs:last-child{border:none}
.hs-n{font-family:'Syne',sans-serif;font-weight:800;font-size:46px;color:var(--text-primary);line-height:1}
.hs-n span{color:var(--accent)}
.hs-l{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-faint);letter-spacing:.14em;text-transform:uppercase;margin-top:4px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap}
.btn-g{font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;background:var(--accent);color:#0c0e14;border:none;border-radius:8px;padding:13px 26px;cursor:pointer;letter-spacing:.04em;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all .2s}
.btn-g:hover{background:#50ffaa;transform:translateY(-2px)}
.btn-o{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary);background:var(--surface);border:1px solid var(--border2);border-radius:8px;padding:13px 26px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all .2s}
.btn-o:hover{border-color:var(--accent);color:var(--accent)}

/* ── MARQUEE ── */
.mq{border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:11px 0;overflow:hidden;background:var(--bg2)}
.mq-inner{display:flex;animation:scroll 40s linear infinite;width:max-content}
.mq-item{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-faint);letter-spacing:.12em;text-transform:uppercase;padding:0 28px;white-space:nowrap;display:flex;align-items:center;gap:8px}
.mq-dot{width:4px;height:4px;border-radius:50%;background:var(--accent);flex-shrink:0}
@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* ── FILTER BAR ── */
.fbar{position:sticky;top:60px;z-index:400;background:rgba(12,14,20,.97);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);padding:12px 48px}
.fbar-inner{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.fl{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-faint);letter-spacing:.14em;text-transform:uppercase;margin-right:8px;white-space:nowrap}
.fb{font-family:'JetBrains Mono',monospace;font-size:10px;background:transparent;color:var(--text-muted);border:1px solid var(--border);border-radius:20px;padding:5px 13px;cursor:pointer;transition:all .2s;white-space:nowrap;letter-spacing:.04em;display:inline-flex;align-items:center;gap:5px}
.fb:hover{color:var(--text-primary);border-color:var(--border2)}
.fb.on{background:var(--accent-bg);color:var(--accent);border-color:var(--accent-border)}
.fbar-right{margin-left:auto;position:relative}
.srch{font-family:'JetBrains Mono',monospace;font-size:12px;background:var(--bg2);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;padding:8px 14px 8px 38px;width:240px;outline:none;transition:border-color .2s;letter-spacing:.02em}
.srch:focus{border-color:var(--accent)}
.srch::placeholder{color:var(--text-faint)}
.srch-ic{position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none}

/* ── SECTION ── */
.sec{padding:72px 48px}
.sec-ey{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:10px;display:flex;align-items:center;gap:8px}
.sec-ey::before{content:'';display:block;width:20px;height:1px;background:var(--accent)}
.sec-h{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(26px,3vw,44px);color:var(--text-primary);letter-spacing:-.03em;line-height:1.05;margin-bottom:8px}
.sec-sub{font-size:15px;color:var(--text-secondary);margin-bottom:40px;max-width:580px;line-height:1.7}

/* ── ROADMAP TABS ── */
.rm-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:32px}
.rm-tab{font-family:'JetBrains Mono',monospace;font-size:11px;background:var(--bg2);color:var(--text-muted);border:1px solid var(--border);border-radius:6px;padding:9px 18px;cursor:pointer;transition:all .2s;letter-spacing:.04em;display:inline-flex;align-items:center;gap:7px}
.rm-tab:hover{color:var(--text-primary);border-color:var(--border2);background:var(--bg3)}
.rm-tab.on{background:var(--accent-bg);color:var(--accent);border-color:var(--accent-border)}
.rm-body{display:none}
.rm-body.on{display:block}

/* ── GOAL BOX ── */
.goal-box{background:var(--bg2);border:1px solid var(--accent-border);border-left:3px solid var(--accent);border-radius:0 10px 10px 0;padding:18px 22px;margin-bottom:36px;display:flex;align-items:flex-start;gap:12px}
.goal-text{font-size:14px;color:var(--text-secondary);line-height:1.65}
.goal-text strong{color:var(--text-primary)}

/* ── TIMELINE ── */
.timeline{position:relative;padding-left:36px}
.timeline::before{content:'';position:absolute;left:10px;top:12px;bottom:12px;width:2px;background:linear-gradient(to bottom,var(--accent) 0%,var(--blue) 50%,rgba(77,159,255,.1) 100%)}
.phase{margin-bottom:48px;position:relative}
.phase-dot{position:absolute;left:-36px;top:2px;width:24px;height:24px;border-radius:50%;background:var(--bg);border:2px solid var(--accent);display:flex;align-items:center;justify-content:center}
.phase-dot-inner{width:8px;height:8px;border-radius:50%;background:var(--accent)}
.phase-head{display:flex;align-items:center;gap:12px;margin-bottom:6px;flex-wrap:wrap}
.phase-num{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--accent);letter-spacing:.15em;text-transform:uppercase;background:var(--accent-bg);border:1px solid var(--accent-border);padding:2px 8px;border-radius:3px}
.phase-title{font-family:'Syne',sans-serif;font-weight:700;font-size:20px;color:var(--text-primary)}
.phase-dur{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-muted);background:var(--bg2);border:1px solid var(--border);padding:3px 10px;border-radius:12px;letter-spacing:.05em}
.phase-desc{font-size:14px;color:var(--text-secondary);margin-bottom:16px;max-width:680px;line-height:1.65}
.phase-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px}

/* ── COURSE CARD ── */
.cc{background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:16px 18px;text-decoration:none;display:block;transition:all .22s;position:relative;overflow:hidden}
.cc:hover{border-color:var(--border2);background:var(--bg3);transform:translateY(-2px)}
.cc-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:9px;gap:8px}
.cc-plat{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.1em;text-transform:uppercase;padding:3px 9px;border-radius:4px;font-weight:700;white-space:nowrap}
/* Platform colors — all high contrast */
.p-yt{background:#ff000020;color:#ff6b6b;border:1px solid #ff000035}
.p-google{background:#4285f420;color:#74a8ff;border:1px solid #4285f435}
.p-mit{background:#8b000020;color:#ff8a8a;border:1px solid #cc000035}
.p-harvard{background:#a51c3020;color:#ff9999;border:1px solid #a51c3035}
.p-stanford{background:#8c1c1320;color:#ffaaaa;border:1px solid #8c1c1335}
.p-coursera{background:#0056d220;color:#6baeff;border:1px solid #0056d235}
.p-kaggle{background:#20a8e020;color:#5cc8f5;border:1px solid #20a8e035}
.p-github{background:#ffffff10;color:#c9d1d9;border:1px solid #ffffff20}
.p-free{background:#2eff9a15;color:#2eff9a;border:1px solid #2eff9a30}
.p-ms{background:#0078d420;color:#60b0ff;border:1px solid #0078d435}
.p-udacity{background:#02b3e420;color:#60d4f5;border:1px solid #02b3e435}
.p-edx{background:#02262b20;color:#60cccc;border:1px solid #02262b35}
.p-fast{background:#00a8d420;color:#60d4f5;border:1px solid #00a8d435}
.p-book{background:#fbbf2420;color:#fcd34d;border:1px solid #fbbf2435}
.p-odin{background:#d4461820;color:#f8896b;border:1px solid #d4461835}

.cc-free-badge{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:var(--accent);background:var(--accent-bg);border:1px solid var(--accent-border);padding:3px 9px;border-radius:4px;letter-spacing:.06em}
.cc-title{font-family:'Manrope',sans-serif;font-weight:700;font-size:13.5px;color:var(--text-primary);margin-bottom:4px;line-height:1.35}
.cc-by{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-muted);margin-bottom:10px;letter-spacing:.02em}
.cc-tags{display:flex;gap:5px;flex-wrap:wrap}
.cc-tag{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text-faint);background:var(--bg3);border:1px solid var(--border);padding:2px 7px;border-radius:3px;letter-spacing:.03em}
.cc-arr{position:absolute;bottom:14px;right:14px;color:var(--text-faint);transition:all .2s;font-size:13px}
.cc:hover .cc-arr{color:var(--accent);transform:translate(2px,-2px)}

/* ── CATEGORY BLOCKS ── */
.cat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px}
.cat-block{background:var(--bg2);border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:border-color .25s}
.cat-block:hover{border-color:var(--border2)}
.cat-head{padding:18px 20px 14px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px}
.cat-ico{width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.cat-name{font-family:'Syne',sans-serif;font-weight:700;font-size:15px;color:var(--text-primary)}
.cat-cnt{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-muted);margin-top:2px;letter-spacing:.04em}
.cat-body{padding:6px 0 10px}
.cat-link{display:flex;align-items:center;justify-content:space-between;padding:8px 20px;text-decoration:none;transition:background .18s;gap:10px}
.cat-link:hover{background:var(--bg3)}
.cat-link-l{display:flex;align-items:center;gap:9px;min-width:0}
.cat-link-dot{width:5px;height:5px;border-radius:50%;background:var(--border2);flex-shrink:0;transition:background .2s}
.cat-link:hover .cat-link-dot{background:var(--accent)}
.cat-link-name{font-size:13px;color:var(--text-secondary);transition:color .2s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}
.cat-link:hover .cat-link-name{color:var(--text-primary)}
.cat-link-plat{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text-faint);flex-shrink:0;letter-spacing:.04em;border:1px solid var(--border);padding:2px 7px;border-radius:3px}

/* ── TIPS ── */
.tips-sec{padding:72px 48px;background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.tips-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px;margin-top:36px}
.tip-card{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:22px}
.tip-n{font-family:'Syne',sans-serif;font-size:32px;font-weight:800;color:var(--border2);margin-bottom:10px}
.tip-title{font-family:'Syne',sans-serif;font-weight:700;font-size:16px;color:var(--text-primary);margin-bottom:7px}
.tip-desc{font-size:13px;color:var(--text-secondary);line-height:1.65;margin-bottom:13px}
.tip-q{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--accent);background:var(--accent-bg);border:1px solid var(--accent-border);border-radius:6px;padding:10px 13px;word-break:break-all;line-height:1.6}

/* ── DIVIDER ── */
.divider{border:none;border-top:1px solid var(--border)}

/* ── FOOTER ── */
footer{border-top:1px solid var(--border);padding:52px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;background:var(--bg2)}
.foot-l{}
.foot-brand{font-family:'Syne',sans-serif;font-weight:800;font-size:30px;color:var(--accent);letter-spacing:-.04em}
.foot-sub{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-faint);margin-top:5px;letter-spacing:.04em}
.foot-links{display:flex;gap:18px;flex-wrap:wrap}
.foot-links a{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-muted);text-decoration:none;transition:color .2s}
.foot-links a:hover{color:var(--accent)}

/* ── NO RESULTS ── */
.no-res{grid-column:1/-1;text-align:center;padding:60px 20px;font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--text-faint)}

/* ── RESPONSIVE ── */
@media(max-width:900px){
  nav{padding:0 20px}
  .nav-links{display:none}
  .hero,.sec,.fbar,.tips-sec{padding-left:20px;padding-right:20px}
  h1{font-size:clamp(42px,11vw,70px)}
  .hero-stats{gap:20px}
  .hs{padding-right:20px;margin-right:20px}
  footer{padding:40px 20px;flex-direction:column;align-items:flex-start}
  .fbar-right{width:100%;margin-left:0}
  .srch{width:100%}
}

/* ── FADE ── */
.fade{opacity:0;transform:translateY(18px);transition:opacity .55s,transform .55s}
.fade.vis{opacity:1;transform:none}

/* ── COUNT BADGE ── */
.count-badge{font-family:'JetBrains Mono',monospace;font-size:10px;background:var(--surface);border:1px solid var(--border2);color:var(--text-muted);padding:3px 10px;border-radius:12px;margin-left:8px;letter-spacing:.04em}
</style>
</head>
<body>
<div id="progress"></div>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">rk<em>.codex</em></a>
  <div class="nav-links">
    <a href="#roadmaps">Roadmaps</a>
    <a href="#categories">Categories</a>
    <a href="#tricks">Search Tricks</a>
  </div>
  <div class="nav-right">
    <span class="nav-pill">100% FREE</span>
    <a href="https://instagram.com/rk.codex" target="_blank" class="nav-btn">@rk.codex</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  <div class="hero-glow2"></div>
  <div class="hero-chip"><div class="chip-pulse"></div><span class="chip-text">Free Resources · 2026 Edition</span></div>
  <h1>
    <span class="h1-white">FREE COURSES.</span>
    <span class="h1-green">REAL SKILLS.</span>
    <span class="h1-ghost">ZERO RUPEES.</span>
  </h1>
  <p class="hero-p">Every course here is <strong>100% free, verified, and handpicked.</strong> No piracy. No illegal downloads. From Google, MIT, Harvard, Stanford, YouTube, and more — all in one place.</p>
  <div class="hero-stats">
    <div class="hs"><div class="hs-n">500<span>+</span></div><div class="hs-l">Free Courses</div></div>
    <div class="hs"><div class="hs-n">30<span>+</span></div><div class="hs-l">Categories</div></div>
    <div class="hs"><div class="hs-n">5</div><div class="hs-l">Full Roadmaps</div></div>
    <div class="hs"><div class="hs-n">0<span>₹</span></div><div class="hs-l">Cost Forever</div></div>
  </div>
  <div class="hero-btns">
    <a href="#roadmaps" class="btn-g">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      Start a Roadmap
    </a>
    <a href="#categories" class="btn-o">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      Browse Categories
    </a>
  </div>
</section>

<!-- MARQUEE -->
<div class="mq"><div class="mq-inner" id="mq"></div></div>

<!-- FILTER BAR -->
<div class="fbar">
  <div class="fbar-inner">
    <span class="fl">Filter</span>
    <button class="fb on" data-f="all">All</button>
    <button class="fb" data-f="ai">AI &amp; ML</button>
    <button class="fb" data-f="coding">Coding</button>
    <button class="fb" data-f="webdev">Web Dev</button>
    <button class="fb" data-f="data">Data Science</button>
    <button class="fb" data-f="cloud">Cloud</button>
    <button class="fb" data-f="security">Security</button>
    <button class="fb" data-f="mobile">Mobile Dev</button>
    <button class="fb" data-f="design">Design</button>
    <button class="fb" data-f="career">Career</button>
    <button class="fb" data-f="math">Math &amp; CS</button>
    <button class="fb" data-f="marketing">Marketing</button>
    <button class="fb" data-f="finance">Finance</button>
    <button class="fb" data-f="language">Languages</button>
    <button class="fb" data-f="productivity">Productivity</button>
    <div class="fbar-right">
      <svg class="srch-ic" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5570" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input class="srch" id="srch" type="text" placeholder="Search 500+ courses...">
    </div>
  </div>
</div>

<!-- ROADMAPS -->
<section class="sec fade" id="roadmaps">
  <div class="sec-ey">Step-by-Step Learning Paths</div>
  <div class="sec-h">Complete Roadmaps</div>
  <p class="sec-sub">Follow a structured path from zero to job-ready. Every phase has handpicked free courses in the exact right order.</p>

  <div class="rm-tabs">
    <button class="rm-tab on" data-rm="ai">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4z"/><circle cx="12" cy="13" r="2"/></svg>
      AI &amp; Machine Learning
    </button>
    <button class="rm-tab" data-rm="web">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      Full-Stack Web Dev
    </button>
    <button class="rm-tab" data-rm="data">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      Data Science
    </button>
    <button class="rm-tab" data-rm="cloud">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
      Cloud &amp; DevOps
    </button>
    <button class="rm-tab" data-rm="dsa">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      DSA &amp; Interviews
    </button>
  </div>

  <div id="rm-bodies"></div>
</section>

<hr class="divider">

<!-- CATEGORIES -->
<section class="sec fade" id="categories">
  <div class="sec-ey">Browse Everything</div>
  <div class="sec-h">All Courses by Category <span class="count-badge" id="catCount">Loading...</span></div>
  <p class="sec-sub">500+ free courses across 30+ categories. Click any course to go directly to it.</p>
  <div class="cat-grid" id="catGrid"></div>
</section>

<!-- TRICKS -->
<section class="tips-sec fade" id="tricks">
  <div class="sec-ey">The Smart Way</div>
  <div class="sec-h">Secret Google Search Tricks</div>
  <p class="sec-sub">Use these search operators to find thousands more free courses that nobody talks about.</p>
  <div class="tips-grid" id="tipsGrid"></div>
</section>

<!-- FOOTER -->
<footer>
  <div class="foot-l">
    <div class="foot-brand">rk.codex</div>
    <div class="foot-sub">Free knowledge for every developer · Updated 2026</div>
  </div>
  <div class="foot-links">
    <a href="https://instagram.com/rk.codex" target="_blank">Instagram</a>
    <a href="https://freecodecamp.org" target="_blank">freeCodeCamp</a>
    <a href="https://kaggle.com" target="_blank">Kaggle</a>
    <a href="https://ocw.mit.edu" target="_blank">MIT OCW</a>
    <a href="https://cs50.harvard.edu" target="_blank">Harvard CS50</a>
    <a href="https://roadmap.sh" target="_blank">roadmap.sh</a>
  </div>
</footer>

<script>
/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

// Helper to make course objects
const C=(title,by,plat,platClass,tags,url,cat)=>({title,by,plat,platClass,tags,url,cat});

const ROADMAPS = {
  ai:{
    goal:"Go from complete beginner to building real AI applications and LLM-powered tools. Timeline: 6–9 months at 1–2 hrs/day. Salary after: ₹12–50 LPA.",
    phases:[
      {num:"01",title:"Python Fundamentals",dur:"4–6 Weeks",desc:"AI runs on Python. Master variables, loops, functions, OOP, file handling, and APIs before touching any ML library.",
       courses:[
        C("Python for Everybody","U. of Michigan","Coursera","p-coursera",["python","beginner"],"https://www.coursera.org/specializations/python","coding"),
        C("Python Crash Course – Full 4hr Tutorial","freeCodeCamp","YouTube","p-yt",["python","beginner"],"https://www.youtube.com/watch?v=rfscVS0vtbw","coding"),
        C("CS50P – Python by Harvard","Harvard","Harvard","p-harvard",["python","cs"],"https://cs50.harvard.edu/python/","coding"),
        C("Automate the Boring Stuff with Python","Al Sweigart","Free Book","p-book",["python","automation"],"https://automatetheboringstuff.com/","coding"),
        C("Python Tutorial – Official Docs","Python.org","Free","p-free",["python","reference"],"https://docs.python.org/3/tutorial/","coding"),
        C("Learn Python – Codecademy","Codecademy","Free Tier","p-free",["python","interactive"],"https://www.codecademy.com/learn/learn-python-3","coding"),
      ]},
      {num:"02",title:"Math for ML",dur:"3–4 Weeks",desc:"Linear algebra, probability, and statistics. You don't need to be a mathematician — these courses make it visual and practical.",
       courses:[
        C("Mathematics for Machine Learning","Imperial College London","Coursera","p-coursera",["math","ml"],"https://www.coursera.org/specializations/mathematics-machine-learning","math"),
        C("Linear Algebra – Full MIT Course","Gilbert Strang","MIT OCW","p-mit",["linear algebra","math"],"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/","math"),
        C("Statistics & Probability – Khan Academy","Khan Academy","Free","p-free",["statistics","probability"],"https://www.khanacademy.org/math/statistics-probability","math"),
        C("3Blue1Brown – Essence of Linear Algebra","3Blue1Brown","YouTube","p-yt",["linear algebra","visual"],"https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab","math"),
        C("StatQuest – Statistics for ML","Josh Starmer","YouTube","p-yt",["statistics","ml"],"https://www.youtube.com/@statquest","math"),
      ]},
      {num:"03",title:"Machine Learning Core",dur:"6–8 Weeks",desc:"Supervised & unsupervised learning, model evaluation, scikit-learn, and building your first ML models from scratch.",
       courses:[
        C("Machine Learning Specialization","Andrew Ng / Stanford","Coursera","p-coursera",["ml","supervised"],"https://www.coursera.org/specializations/machine-learning-introduction","ai"),
        C("Google ML Crash Course","Google","Google","p-google",["ml","tensorflow"],"https://developers.google.com/machine-learning/crash-course","ai"),
        C("fast.ai – Practical Machine Learning","fast.ai","fast.ai","p-fast",["ml","practical"],"https://www.fast.ai/","ai"),
        C("Intro to Machine Learning","Kaggle","Kaggle","p-kaggle",["ml","sklearn"],"https://www.kaggle.com/learn/intro-to-machine-learning","ai"),
        C("Intermediate Machine Learning","Kaggle","Kaggle","p-kaggle",["ml","feature eng"],"https://www.kaggle.com/learn/intermediate-machine-learning","ai"),
        C("ML with Python – IBM","IBM","Coursera","p-coursera",["ml","python"],"https://www.coursera.org/learn/machine-learning-with-python","ai"),
        C("Scikit-Learn Full Tutorial","freeCodeCamp","YouTube","p-yt",["sklearn","ml"],"https://www.youtube.com/watch?v=pqNCD_5r0IU","ai"),
      ]},
      {num:"04",title:"Deep Learning & Neural Networks",dur:"6–8 Weeks",desc:"CNNs, RNNs, Transformers, PyTorch. Build image classifiers, text generators, and understand how modern AI models actually work.",
       courses:[
        C("Deep Learning Specialization","Andrew Ng","Coursera","p-coursera",["deep learning","neural nets"],"https://www.coursera.org/specializations/deep-learning","ai"),
        C("PyTorch Full Course","freeCodeCamp","YouTube","p-yt",["pytorch","deep learning"],"https://www.youtube.com/watch?v=GIsg-ZUy0MY","ai"),
        C("fast.ai – Practical Deep Learning","fast.ai","fast.ai","p-fast",["deep learning","CNN"],"https://course.fast.ai/","ai"),
        C("CS231n – CNNs for Visual Recognition","Stanford","Stanford","p-stanford",["CNN","computer vision"],"http://cs231n.stanford.edu/","ai"),
        C("CS224N – NLP with Deep Learning","Stanford","Stanford","p-stanford",["NLP","transformers"],"http://web.stanford.edu/class/cs224n/","ai"),
        C("Hugging Face NLP Course","Hugging Face","Free","p-free",["NLP","transformers"],"https://huggingface.co/learn/nlp-course/","ai"),
        C("Andrej Karpathy – Neural Nets from Scratch","Andrej Karpathy","YouTube","p-yt",["neural nets","backprop"],"https://www.youtube.com/watch?v=VMj-3S1tku0","ai"),
      ]},
      {num:"05",title:"LLMs, Agents & AI Apps",dur:"4–6 Weeks",desc:"Build real AI products. LangChain, RAG, vector databases, AI agents, and deploying your own AI-powered applications.",
       courses:[
        C("LangChain Full Course","freeCodeCamp","YouTube","p-yt",["langchain","llm"],"https://www.youtube.com/watch?v=lG7Uxts9SXs","ai"),
        C("Google Generative AI Learning Path","Google","Google","p-google",["gemini","genai"],"https://www.cloudskillsboost.google/paths/183","ai"),
        C("Building LLM Apps – Karpathy","Andrej Karpathy","YouTube","p-yt",["llm","gpt"],"https://www.youtube.com/@AndrejKarpathy","ai"),
        C("Hugging Face Agents Course","Hugging Face","Free","p-free",["agents","ai"],"https://huggingface.co/learn/agents-course/","ai"),
        C("Prompt Engineering Guide","DAIR.AI","Free","p-free",["prompting","llm"],"https://www.promptingguide.ai/","ai"),
        C("DeepLearning.AI Short Courses","Andrew Ng","Free","p-free",["llm","practical"],"https://www.deeplearning.ai/short-courses/","ai"),
        C("RAG from Scratch","LangChain","YouTube","p-yt",["rag","vector db"],"https://www.youtube.com/watch?v=sVcwVQRHIc8","ai"),
      ]},
    ]
  },
  web:{
    goal:"Build full-stack web applications and land a web developer job. Timeline: 5–8 months. Salary range: ₹5–30 LPA.",
    phases:[
      {num:"01",title:"HTML, CSS & JavaScript Basics",dur:"4–6 Weeks",desc:"Build your first websites, understand the DOM, and write your first JavaScript programs. The foundation of everything.",
       courses:[
        C("Responsive Web Design","freeCodeCamp","freeCodeCamp","p-odin",["html","css","responsive"],"https://www.freecodecamp.org/learn/2022/responsive-web-design/","webdev"),
        C("HTML & CSS Full Course – 11 Hours","Dave Gray","YouTube","p-yt",["html","css"],"https://www.youtube.com/watch?v=mU6anWqZJcc","webdev"),
        C("The Odin Project – Foundations","The Odin Project","Free","p-odin",["html","css","js"],"https://www.theodinproject.com/paths/foundations","webdev"),
        C("MDN Learn Web Development","Mozilla","Free","p-free",["html","css","reference"],"https://developer.mozilla.org/en-US/docs/Learn","webdev"),
        C("CS50W – Web Programming","Harvard","Harvard","p-harvard",["web","python","js"],"https://cs50.harvard.edu/web/","webdev"),
        C("Web Dev Bootcamp – Scrimba","Scrimba","Free Tier","p-free",["html","css","interactive"],"https://scrimba.com/learn/htmlandcss","webdev"),
      ]},
      {num:"02",title:"JavaScript Deep Dive",dur:"4–5 Weeks",desc:"ES6+, async/await, closures, the event loop, DOM manipulation. JavaScript mastery separates great developers from average ones.",
       courses:[
        C("JavaScript Algorithms & Data Structures","freeCodeCamp","freeCodeCamp","p-odin",["javascript","dsa"],"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/","webdev"),
        C("JavaScript Full Course – 8 Hours","Bro Code","YouTube","p-yt",["javascript","full"],"https://www.youtube.com/watch?v=lfmg-EJ8gm4","webdev"),
        C("JavaScript.info – The Complete Guide","Ilya Kantor","Free Book","p-book",["javascript","deep dive"],"https://javascript.info/","webdev"),
        C("Eloquent JavaScript","Marijn Haverbeke","Free Book","p-book",["javascript","book"],"https://eloquentjavascript.net/","webdev"),
        C("You Don't Know JS (Book Series)","Kyle Simpson","GitHub","p-github",["javascript","advanced"],"https://github.com/getify/You-Dont-Know-JS","webdev"),
        C("JavaScript30 – 30 Day Challenge","Wes Bos","Free","p-free",["javascript","projects"],"https://javascript30.com/","webdev"),
        C("Async JS – Full Course","freeCodeCamp","YouTube","p-yt",["async","promises","await"],"https://www.youtube.com/watch?v=ZYb_ZU8LNxs","webdev"),
      ]},
      {num:"03",title:"React & Frontend Frameworks",dur:"5–6 Weeks",desc:"Build interactive UIs with React. Hooks, state management, routing, API integration, and modern React patterns.",
       courses:[
        C("React Official Learn Docs","React Team","react.dev","p-free",["react","hooks"],"https://react.dev/learn","webdev"),
        C("React Full Course 2024","Dave Gray","YouTube","p-yt",["react","hooks"],"https://www.youtube.com/watch?v=RVFAyFWO4go","webdev"),
        C("Scrimba – Learn React","Scrimba","Free Tier","p-free",["react","interactive"],"https://scrimba.com/learn/learnreact","webdev"),
        C("Next.js Full Course","freeCodeCamp","YouTube","p-yt",["nextjs","fullstack"],"https://www.youtube.com/watch?v=KjY94sAKLlw","webdev"),
        C("Tailwind CSS Full Course","freeCodeCamp","YouTube","p-yt",["tailwind","css"],"https://www.youtube.com/watch?v=ft30zcMlFa8","webdev"),
        C("TypeScript Full Course","Matt Pocock","YouTube","p-yt",["typescript","types"],"https://www.youtube.com/watch?v=SpwzRDUQ1GI","webdev"),
      ]},
      {num:"04",title:"Backend, APIs & Databases",dur:"5–6 Weeks",desc:"Node.js, Express, REST APIs, SQL, NoSQL. Build the server-side of your applications from scratch.",
       courses:[
        C("Node.js & Express Full Course","freeCodeCamp","YouTube","p-yt",["nodejs","express"],"https://www.youtube.com/watch?v=Oe421EPjeBE","webdev"),
        C("SQL Full Course – 4 Hours","Bro Code","YouTube","p-yt",["sql","database"],"https://www.youtube.com/watch?v=5OdVJbNCSso","webdev"),
        C("MongoDB Full Course","freeCodeCamp","YouTube","p-yt",["mongodb","nosql"],"https://www.youtube.com/watch?v=c2M-rlkkT5o","webdev"),
        C("Full Stack Open – Helsinki University","U. of Helsinki","Free","p-free",["fullstack","react","node"],"https://fullstackopen.com/en/","webdev"),
        C("Backend Roadmap 2026","roadmap.sh","Free","p-free",["backend","roadmap"],"https://roadmap.sh/backend","webdev"),
        C("REST API Design – Best Practices","freeCodeCamp","YouTube","p-yt",["api","rest"],"https://www.youtube.com/watch?v=-MTSQjw5DrM","webdev"),
      ]},
      {num:"05",title:"Git, Deployment & Portfolio",dur:"2–3 Weeks",desc:"Version control, deploying your apps to the internet, and building a portfolio that actually gets you hired.",
       courses:[
        C("Git & GitHub Full Course","freeCodeCamp","YouTube","p-yt",["git","github"],"https://www.youtube.com/watch?v=RGOj5yH7evk","webdev"),
        C("Deploy with Vercel & Netlify","Traversy Media","YouTube","p-yt",["deploy","hosting"],"https://www.youtube.com/watch?v=5I8nFyKHQFs","webdev"),
        C("Docker for Web Developers","TechWorld with Nana","YouTube","p-yt",["docker","devops"],"https://www.youtube.com/watch?v=3c-iBn73dDE","webdev"),
        C("Frontend Roadmap 2026","roadmap.sh","Free","p-free",["frontend","roadmap"],"https://roadmap.sh/frontend","webdev"),
      ]},
    ]
  },
  data:{
    goal:"Become a data analyst or scientist and make data-driven decisions. Timeline: 5–7 months. Salary range: ₹6–35 LPA.",
    phases:[
      {num:"01",title:"Python + Pandas + NumPy",dur:"4–5 Weeks",desc:"Data science runs on Python. Learn data manipulation with Pandas and numerical computing with NumPy. These are non-negotiable.",
       courses:[
        C("Python for Data Science – IBM","IBM","Coursera","p-coursera",["python","data"],"https://www.coursera.org/learn/python-for-applied-data-science-ai","data"),
        C("Pandas Full Course","Keith Galli","YouTube","p-yt",["pandas","data"],"https://www.youtube.com/watch?v=vmEHCJofslg","data"),
        C("NumPy Complete Tutorial","freeCodeCamp","YouTube","p-yt",["numpy","arrays"],"https://www.youtube.com/watch?v=QUT1VHiLmmI","data"),
        C("Kaggle Python Course","Kaggle","Kaggle","p-kaggle",["python","data"],"https://www.kaggle.com/learn/python","data"),
        C("Kaggle Pandas Course","Kaggle","Kaggle","p-kaggle",["pandas","data cleaning"],"https://www.kaggle.com/learn/pandas","data"),
      ]},
      {num:"02",title:"SQL & Data Analysis",dur:"3–4 Weeks",desc:"SQL is the single most used skill in data jobs. Master querying, filtering, joining, and aggregating real datasets.",
       courses:[
        C("SQL Full Course – HackerRank Style","freeCodeCamp","YouTube","p-yt",["sql","queries"],"https://www.youtube.com/watch?v=HXV3zeQKqGY","data"),
        C("Intro to SQL","Kaggle","Kaggle","p-kaggle",["sql","bigquery"],"https://www.kaggle.com/learn/intro-to-sql","data"),
        C("Advanced SQL","Kaggle","Kaggle","p-kaggle",["sql","advanced"],"https://www.kaggle.com/learn/advanced-sql","data"),
        C("Mode Analytics SQL Tutorial","Mode","Free","p-free",["sql","analytics"],"https://mode.com/sql-tutorial/","data"),
        C("SQL for Data Analysis – Udacity","Udacity","Free Tier","p-udacity",["sql","data"],"https://www.udacity.com/course/sql-for-data-analysis--ud198","data"),
      ]},
      {num:"03",title:"Data Visualisation & Statistics",dur:"3–4 Weeks",desc:"Turn raw data into insights. Matplotlib, Seaborn, Tableau, and the statistical thinking behind good analysis.",
       courses:[
        C("Data Visualisation with Python","Kaggle","Kaggle","p-kaggle",["matplotlib","seaborn"],"https://www.kaggle.com/learn/data-visualization","data"),
        C("Tableau Public Training","Tableau","Free","p-free",["tableau","dashboards"],"https://www.tableau.com/learn/training","data"),
        C("StatQuest – Statistics Playlist","StatQuest","YouTube","p-yt",["statistics","distributions"],"https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9","math"),
        C("Google Data Analytics Certificate","Google","Coursera","p-coursera",["analytics","spreadsheets"],"https://www.coursera.org/professional-certificates/google-data-analytics","data"),
        C("Power BI Full Course","freeCodeCamp","YouTube","p-yt",["power bi","dashboards"],"https://www.youtube.com/watch?v=NNSHu0rkew8","data"),
      ]},
      {num:"04",title:"ML for Data Science",dur:"6–8 Weeks",desc:"Build predictive models, understand feature engineering, and evaluate models the way industry actually does it.",
       courses:[
        C("ML with Python – IBM","IBM","Coursera","p-coursera",["ml","python"],"https://www.coursera.org/learn/machine-learning-with-python","ai"),
        C("Kaggle Intro to ML","Kaggle","Kaggle","p-kaggle",["ml","decision trees"],"https://www.kaggle.com/learn/intro-to-machine-learning","ai"),
        C("Feature Engineering","Kaggle","Kaggle","p-kaggle",["features","data"],"https://www.kaggle.com/learn/feature-engineering","data"),
        C("ML Explainability","Kaggle","Kaggle","p-kaggle",["xai","shap"],"https://www.kaggle.com/learn/machine-learning-explainability","ai"),
        C("Time Series with Python","Kaggle","Kaggle","p-kaggle",["time series","forecasting"],"https://www.kaggle.com/learn/time-series","data"),
      ]},
    ]
  },
  cloud:{
    goal:"Become a Cloud or DevOps engineer — one of the highest paying paths in tech. Timeline: 5–7 months. Salary: ₹12–60 LPA.",
    phases:[
      {num:"01",title:"Linux & Networking Basics",dur:"3–4 Weeks",desc:"Everything in cloud runs on Linux. Understand the command line, processes, networking fundamentals, and how the internet works.",
       courses:[
        C("Linux for Beginners","freeCodeCamp","YouTube","p-yt",["linux","cli"],"https://www.youtube.com/watch?v=sWbUDq4S6Y8","cloud"),
        C("Linux Command Line Full Course","Joe Collins","YouTube","p-yt",["linux","terminal"],"https://www.youtube.com/watch?v=oxuRxtrO2Ag","cloud"),
        C("Computer Networking Full Course","freeCodeCamp","YouTube","p-yt",["networking","tcp/ip"],"https://www.youtube.com/watch?v=qiQR5rTSshw","cloud"),
        C("Professor Messer – CompTIA Network+","Professor Messer","Free","p-free",["networking","certif"],"https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/","cloud"),
      ]},
      {num:"02",title:"Cloud Platforms (AWS / GCP / Azure)",dur:"4–6 Weeks",desc:"Learn the core services of the major cloud platforms. All three have free tiers — practice hands-on without spending a rupee.",
       courses:[
        C("AWS Cloud Practitioner – Full Prep","freeCodeCamp","YouTube","p-yt",["aws","clf-c02"],"https://www.youtube.com/watch?v=SOTamWNgDKc","cloud"),
        C("AWS Skill Builder – Free Courses","AWS","AWS","p-free",["aws","hands-on"],"https://skillbuilder.aws/","cloud"),
        C("Google Cloud Free Training","Google","Google","p-google",["gcp","free tier"],"https://cloud.google.com/training/free","cloud"),
        C("Microsoft Learn – Azure AZ-900","Microsoft","Microsoft","p-ms",["azure","certification"],"https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/","cloud"),
        C("Cloud Computing Full Course","freeCodeCamp","YouTube","p-yt",["cloud","concepts"],"https://www.youtube.com/watch?v=M988_fsOSWo","cloud"),
      ]},
      {num:"03",title:"Docker & Kubernetes",dur:"4–5 Weeks",desc:"Containerisation is the most in-demand DevOps skill. Learn to package and orchestrate applications at any scale.",
       courses:[
        C("Docker Full Course","TechWorld with Nana","YouTube","p-yt",["docker","containers"],"https://www.youtube.com/watch?v=3c-iBn73dDE","cloud"),
        C("Kubernetes Full Course","TechWorld with Nana","YouTube","p-yt",["kubernetes","k8s"],"https://www.youtube.com/watch?v=X48VuDVv0do","cloud"),
        C("Docker & Kubernetes – freeCodeCamp","freeCodeCamp","YouTube","p-yt",["docker","k8s"],"https://www.youtube.com/watch?v=Wf2eSG3owoA","cloud"),
        C("Play with Docker – Free Lab","Docker","Free Lab","p-free",["docker","hands-on"],"https://labs.play-with-docker.com/","cloud"),
        C("Kubernetes Playground","Killercoda","Free","p-free",["k8s","hands-on"],"https://killercoda.com/playgrounds/scenario/kubernetes","cloud"),
      ]},
      {num:"04",title:"CI/CD & Infrastructure as Code",dur:"3–4 Weeks",desc:"Automate everything. GitHub Actions, Terraform, Ansible — the DevOps practices modern teams actually use in production.",
       courses:[
        C("GitHub Actions Full Course","TechWorld with Nana","YouTube","p-yt",["github actions","ci/cd"],"https://www.youtube.com/watch?v=R8_veQiYBjI","cloud"),
        C("Terraform Full Course","freeCodeCamp","YouTube","p-yt",["terraform","iac"],"https://www.youtube.com/watch?v=SLB_c_ayRMo","cloud"),
        C("Ansible Full Course","TechWorld with Nana","YouTube","p-yt",["ansible","automation"],"https://www.youtube.com/watch?v=1id6ERvfozo","cloud"),
        C("DevOps Roadmap 2026","roadmap.sh","Free","p-free",["devops","roadmap"],"https://roadmap.sh/devops","cloud"),
      ]},
    ]
  },
  dsa:{
    goal:"Crack technical interviews at top tech companies. From zero DSA to confidently solving medium-hard problems. Timeline: 3–6 months.",
    phases:[
      {num:"01",title:"CS Fundamentals & Big O",dur:"2–3 Weeks",desc:"Understand how computers work, what Big O notation means, and how to think about time and space complexity before writing a single algorithm.",
       courses:[
        C("CS50 – Harvard Intro to CS","Harvard","Harvard","p-harvard",["cs","fundamentals"],"https://cs50.harvard.edu/x/","coding"),
        C("Big O Notation – Full Explanation","freeCodeCamp","YouTube","p-yt",["big o","complexity"],"https://www.youtube.com/watch?v=Mo4vesaut8g","coding"),
        C("Algorithms & Data Structures","freeCodeCamp","YouTube","p-yt",["dsa","beginner"],"https://www.youtube.com/watch?v=RBSGKlAvoiM","coding"),
        C("Data Structures Easy to Advanced","William Fiset","YouTube","p-yt",["dsa","complete"],"https://www.youtube.com/watch?v=RBSGKlAvoiM","coding"),
      ]},
      {num:"02",title:"Core Data Structures",dur:"4–5 Weeks",desc:"Arrays, linked lists, stacks, queues, hash maps, trees, graphs. Understand when and why to use each structure.",
       courses:[
        C("NeetCode – DSA for Beginners","NeetCode","YouTube","p-yt",["dsa","patterns"],"https://www.youtube.com/@NeetCode","coding"),
        C("Striver's A2Z DSA Sheet","Striver","takeUforward","p-free",["dsa","sheet","complete"],"https://takeuforward.org/strivers-a2z-dsa-course/","coding"),
        C("LeetCode Study Plans","LeetCode","Free","p-free",["dsa","practice"],"https://leetcode.com/studyplan/","coding"),
        C("Visualgo – Visualise Algorithms","Visualgo","Free","p-free",["dsa","visual"],"https://visualgo.net/","coding"),
        C("CS61B – Data Structures – UC Berkeley","UC Berkeley","Free","p-free",["dsa","berkeley"],"https://sp21.datastructur.es/","coding"),
      ]},
      {num:"03",title:"Patterns & Algorithms",dur:"4–6 Weeks",desc:"Two pointers, sliding window, BFS/DFS, binary search, dynamic programming — learn the 15 patterns that cover 80% of interview problems.",
       courses:[
        C("Algorithms Part I – Princeton","Princeton / Sedgewick","Coursera","p-coursera",["algorithms","graphs"],"https://www.coursera.org/learn/algorithms-part1","coding"),
        C("Algorithms Part II – Princeton","Princeton / Sedgewick","Coursera","p-coursera",["graphs","trees"],"https://www.coursera.org/learn/algorithms-part2","coding"),
        C("NeetCode 150 – Complete Playlist","NeetCode","NeetCode","p-free",["patterns","150"],"https://neetcode.io/practice","coding"),
        C("Graph Algorithms Full Course","freeCodeCamp","YouTube","p-yt",["graphs","bfs dfs"],"https://www.youtube.com/watch?v=tWVWeAqZ0WU","coding"),
        C("CP Algorithms Reference","CP-Algorithms","Free","p-free",["algorithms","competitive"],"https://cp-algorithms.com/","coding"),
      ]},
      {num:"04",title:"DP, System Design & Mocks",dur:"4–6 Weeks",desc:"Dynamic programming is the hardest topic but fully learnable. Plus system design basics and mock interviews that actually prepare you.",
       courses:[
        C("Dynamic Programming Full Course","freeCodeCamp","YouTube","p-yt",["dp","recursion"],"https://www.youtube.com/watch?v=oBt53YbR9Kk","coding"),
        C("DP Playlist – Aditya Verma","Aditya Verma","YouTube","p-yt",["dp","hindi"],"https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go","coding"),
        C("System Design Primer","Donne Martin","GitHub","p-github",["system design","architecture"],"https://github.com/donnemartin/system-design-primer","coding"),
        C("Pramp – Free Mock Interviews","Pramp","Free","p-free",["mock","interview"],"https://www.pramp.com/","career"),
        C("Interviewing.io – Mock Interviews","Interviewing.io","Free","p-free",["mock","faang"],"https://interviewing.io/","career"),
        C("Tech Interview Handbook","yangshun","GitHub","p-github",["interview","handbook"],"https://www.techinterviewhandbook.org/","career"),
      ]},
    ]
  }
};

const CATEGORIES = [
  {name:"AI & Machine Learning",tag:"ai",color:"var(--accent)",bg:"var(--accent-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4z"/><circle cx="12" cy="13" r="2"/></svg>\`,
   links:[
    {n:"Google ML Crash Course",p:"Google",u:"https://developers.google.com/machine-learning/crash-course"},
    {n:"ML Specialization – Andrew Ng",p:"Coursera",u:"https://www.coursera.org/specializations/machine-learning-introduction"},
    {n:"fast.ai – Practical AI",p:"fast.ai",u:"https://www.fast.ai/"},
    {n:"Kaggle – All ML Courses",p:"Kaggle",u:"https://www.kaggle.com/learn"},
    {n:"Hugging Face NLP Course",p:"HuggingFace",u:"https://huggingface.co/learn/nlp-course/"},
    {n:"Hugging Face Agents Course",p:"HuggingFace",u:"https://huggingface.co/learn/agents-course/"},
    {n:"Google Generative AI Path",p:"Google",u:"https://www.cloudskillsboost.google/paths/183"},
    {n:"Elements of AI – Helsinki",p:"Free",u:"https://www.elementsofai.com/"},
    {n:"CS229 – Stanford ML",p:"Stanford",u:"https://cs229.stanford.edu/"},
    {n:"Deep Learning Specialization",p:"Coursera",u:"https://www.coursera.org/specializations/deep-learning"},
    {n:"Prompt Engineering Guide",p:"DAIR.AI",u:"https://www.promptingguide.ai/"},
    {n:"DeepLearning.AI Short Courses",p:"Free",u:"https://www.deeplearning.ai/short-courses/"},
    {n:"Andrej Karpathy – Neural Nets",p:"YouTube",u:"https://www.youtube.com/@AndrejKarpathy"},
    {n:"MIT 6.S191 – Deep Learning",p:"MIT",u:"https://introtodeeplearning.com/"},
    {n:"CS224N – Stanford NLP",p:"Stanford",u:"http://web.stanford.edu/class/cs224n/"},
    {n:"LangChain Docs + Tutorials",p:"LangChain",u:"https://python.langchain.com/docs/tutorials/"},
    {n:"Llama Index Tutorials",p:"Free",u:"https://docs.llamaindex.ai/en/stable/"},
    {n:"OpenAI API Cookbook",p:"GitHub",u:"https://github.com/openai/openai-cookbook"},
    {n:"Weights & Biases – MLOps",p:"W&B",u:"https://www.wandb.courses/"},
    {n:"Made With ML – MLOps",p:"GitHub",u:"https://madewithml.com/"},
  ]},
  {name:"Python Programming",tag:"coding",color:"var(--blue)",bg:"var(--blue-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>\`,
   links:[
    {n:"Python for Everybody – Michigan",p:"Coursera",u:"https://www.coursera.org/specializations/python"},
    {n:"CS50P – Python by Harvard",p:"Harvard",u:"https://cs50.harvard.edu/python/"},
    {n:"Automate the Boring Stuff",p:"Free Book",u:"https://automatetheboringstuff.com/"},
    {n:"Real Python Tutorials",p:"RealPython",u:"https://realpython.com/"},
    {n:"Python Crash Course – freeCodeCamp",p:"YouTube",u:"https://www.youtube.com/watch?v=rfscVS0vtbw"},
    {n:"Python Official Tutorial",p:"Python.org",u:"https://docs.python.org/3/tutorial/"},
    {n:"Python Design Patterns",p:"GitHub",u:"https://github.com/faif/python-patterns"},
    {n:"Talk Python Training",p:"YouTube",u:"https://www.youtube.com/@TalkPython"},
    {n:"Python OOP Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=JeznW_7DlB0"},
    {n:"Corey Schafer – Python Tutorials",p:"YouTube",u:"https://www.youtube.com/@coreyms"},
    {n:"Python Cookbook – O'Reilly Preview",p:"GitHub",u:"https://github.com/dabeaz/python-cookbook"},
    {n:"FastAPI Official Tutorial",p:"FastAPI",u:"https://fastapi.tiangolo.com/tutorial/"},
    {n:"Django Official Tutorial",p:"Django",u:"https://docs.djangoproject.com/en/stable/intro/tutorial01/"},
    {n:"Flask Official Quickstart",p:"Flask",u:"https://flask.palletsprojects.com/en/stable/quickstart/"},
    {n:"Fluent Python (Free Preview)",p:"GitHub",u:"https://github.com/fluentpython/example-code-2e"},
  ]},
  {name:"JavaScript & TypeScript",tag:"webdev",color:"var(--yellow)",bg:"var(--yellow-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>\`,
   links:[
    {n:"JavaScript.info – Full Guide",p:"Free",u:"https://javascript.info/"},
    {n:"Eloquent JavaScript",p:"Free Book",u:"https://eloquentjavascript.net/"},
    {n:"You Don't Know JS (Series)",p:"GitHub",u:"https://github.com/getify/You-Dont-Know-JS"},
    {n:"JavaScript30 – Build 30 Things",p:"Free",u:"https://javascript30.com/"},
    {n:"freeCodeCamp JS Algorithms",p:"freeCodeCamp",u:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"},
    {n:"TypeScript Official Docs",p:"Free",u:"https://www.typescriptlang.org/docs/"},
    {n:"Total TypeScript – Matt Pocock",p:"YouTube",u:"https://www.youtube.com/@mattpocockuk"},
    {n:"Node.js Official Docs + Guides",p:"Node.js",u:"https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"},
    {n:"JavaScript Visualised – Lydia Hallie",p:"GitHub",u:"https://github.com/lydiahallie/javascript-visualized"},
    {n:"Bun.js Documentation",p:"Free",u:"https://bun.sh/docs"},
    {n:"Deno Official Docs",p:"Free",u:"https://docs.deno.com/"},
    {n:"V8 Engine Internals",p:"YouTube",u:"https://www.youtube.com/watch?v=p-iiEDtpy6I"},
    {n:"Web Dev Simplified – Kyle Cook",p:"YouTube",u:"https://www.youtube.com/@WebDevSimplified"},
    {n:"Fireship – JS Concepts",p:"YouTube",u:"https://www.youtube.com/@Fireship"},
    {n:"Traversy Media – JS Projects",p:"YouTube",u:"https://www.youtube.com/@TraversyMedia"},
  ]},
  {name:"React & Frontend Frameworks",tag:"webdev",color:"var(--teal)",bg:"var(--teal-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>\`,
   links:[
    {n:"React Official Learn Docs",p:"react.dev",u:"https://react.dev/learn"},
    {n:"Next.js Official Tutorial",p:"Next.js",u:"https://nextjs.org/learn"},
    {n:"Scrimba – Learn React Free",p:"Scrimba",u:"https://scrimba.com/learn/learnreact"},
    {n:"Vue.js Official Tutorial",p:"Vue.js",u:"https://vuejs.org/tutorial/"},
    {n:"Svelte Official Tutorial",p:"Svelte",u:"https://svelte.dev/tutorial/basics"},
    {n:"Angular Official Tour of Heroes",p:"Angular",u:"https://angular.dev/tutorials/learn-angular"},
    {n:"Remix Official Docs",p:"Remix",u:"https://remix.run/docs/en/main/start/tutorial"},
    {n:"Astro – Official Docs Tutorial",p:"Astro",u:"https://docs.astro.build/en/tutorial/0-introduction/"},
    {n:"Tailwind CSS Official Docs",p:"Tailwind",u:"https://tailwindcss.com/docs"},
    {n:"shadcn/ui – Components",p:"Free",u:"https://ui.shadcn.com/"},
    {n:"Zustand State Management",p:"GitHub",u:"https://github.com/pmndrs/zustand"},
    {n:"TanStack Query Docs",p:"Free",u:"https://tanstack.com/query/latest/docs/framework/react/overview"},
    {n:"React Testing Library",p:"Free",u:"https://testing-library.com/docs/react-testing-library/intro/"},
    {n:"Theo (T3) – React Deep Dives",p:"YouTube",u:"https://www.youtube.com/@t3dotgg"},
    {n:"Vercel Blog – Frontend Patterns",p:"Vercel",u:"https://vercel.com/blog"},
  ]},
  {name:"Backend Development",tag:"webdev",color:"var(--orange)",bg:"var(--orange-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>\`,
   links:[
    {n:"Node.js Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=Oe421EPjeBE"},
    {n:"Express.js Official Guide",p:"Express.js",u:"https://expressjs.com/en/guide/routing.html"},
    {n:"Full Stack Open – Helsinki",p:"Free",u:"https://fullstackopen.com/en/"},
    {n:"FastAPI Official Tutorial",p:"FastAPI",u:"https://fastapi.tiangolo.com/tutorial/"},
    {n:"Django Girls Tutorial",p:"Free",u:"https://tutorial.djangogirls.org/"},
    {n:"Go Official Tutorial",p:"Go.dev",u:"https://go.dev/tour/welcome/1"},
    {n:"Go Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=un6ZyFkqFKo"},
    {n:"Rust Official Book",p:"Free",u:"https://doc.rust-lang.org/book/"},
    {n:"Spring Boot Official Guides",p:"Spring",u:"https://spring.io/guides"},
    {n:"GraphQL Official Learn",p:"GraphQL",u:"https://graphql.org/learn/"},
    {n:"REST API Best Practices",p:"YouTube",u:"https://www.youtube.com/watch?v=-MTSQjw5DrM"},
    {n:"gRPC Official Docs",p:"Free",u:"https://grpc.io/docs/"},
    {n:"Hono.js – Lightweight Backend",p:"Free",u:"https://hono.dev/docs/"},
    {n:"Backend Roadmap 2026",p:"roadmap.sh",u:"https://roadmap.sh/backend"},
    {n:"Hussein Nasser – Backend Eng",p:"YouTube",u:"https://www.youtube.com/@hnasr"},
  ]},
  {name:"Databases & SQL",tag:"data",color:"var(--purple)",bg:"var(--purple-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>\`,
   links:[
    {n:"SQL Full Course – 4 Hours",p:"YouTube",u:"https://www.youtube.com/watch?v=5OdVJbNCSso"},
    {n:"Kaggle Intro to SQL",p:"Kaggle",u:"https://www.kaggle.com/learn/intro-to-sql"},
    {n:"Kaggle Advanced SQL",p:"Kaggle",u:"https://www.kaggle.com/learn/advanced-sql"},
    {n:"Mode Analytics SQL Tutorial",p:"Free",u:"https://mode.com/sql-tutorial/"},
    {n:"PostgreSQL Tutorial",p:"Free",u:"https://www.postgresqltutorial.com/"},
    {n:"MongoDB University – Free",p:"MongoDB",u:"https://learn.mongodb.com/"},
    {n:"Redis University – Free",p:"Redis",u:"https://university.redis.com/"},
    {n:"CMU 15-445 – Database Systems",p:"CMU",u:"https://15445.courses.cs.cmu.edu/"},
    {n:"MySQL Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=7S_tz1z_5bA"},
    {n:"Prisma ORM Docs",p:"Free",u:"https://www.prisma.io/docs/getting-started"},
    {n:"SQLite Official Docs",p:"Free",u:"https://www.sqlite.org/docs.html"},
    {n:"Supabase Docs + Tutorials",p:"Free",u:"https://supabase.com/docs"},
    {n:"Firebase Official Docs",p:"Google",u:"https://firebase.google.com/docs"},
    {n:"PlanetScale Docs",p:"Free",u:"https://planetscale.com/docs"},
    {n:"Database Design Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=ztHopE5Wnpc"},
  ]},
  {name:"Data Science & Analytics",tag:"data",color:"var(--blue)",bg:"var(--blue-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>\`,
   links:[
    {n:"IBM Data Science Certificate",p:"Coursera",u:"https://www.coursera.org/professional-certificates/ibm-data-science"},
    {n:"Google Data Analytics Certificate",p:"Coursera",u:"https://www.coursera.org/professional-certificates/google-data-analytics"},
    {n:"Kaggle Data Science Track",p:"Kaggle",u:"https://www.kaggle.com/learn"},
    {n:"StatQuest – Statistics & ML",p:"YouTube",u:"https://www.youtube.com/@statquest"},
    {n:"Tableau Public Training",p:"Tableau",u:"https://www.tableau.com/learn/training"},
    {n:"Power BI Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=NNSHu0rkew8"},
    {n:"Data Science Handbook (Python)",p:"GitHub",u:"https://github.com/jakevdp/PythonDataScienceHandbook"},
    {n:"Excel for Data Analysis",p:"YouTube",u:"https://www.youtube.com/watch?v=opJgMj1IUrc"},
    {n:"Metabase – Free Analytics Tool",p:"Free",u:"https://www.metabase.com/learn/"},
    {n:"Apache Spark Official Docs",p:"Free",u:"https://spark.apache.org/docs/latest/"},
    {n:"dbt Official Docs + Courses",p:"dbt",u:"https://courses.getdbt.com/"},
    {n:"Airflow Official Tutorial",p:"Apache",u:"https://airflow.apache.org/docs/apache-airflow/stable/tutorial/"},
    {n:"Looker Studio (Google) Free",p:"Google",u:"https://lookerstudio.google.com/"},
    {n:"Observable – Data Vis Framework",p:"Free",u:"https://observablehq.com/"},
    {n:"Towards Data Science Blog",p:"Medium",u:"https://towardsdatascience.com/"},
  ]},
  {name:"Cloud & DevOps",tag:"cloud",color:"var(--teal)",bg:"var(--teal-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>\`,
   links:[
    {n:"AWS Cloud Practitioner Prep",p:"YouTube",u:"https://www.youtube.com/watch?v=SOTamWNgDKc"},
    {n:"AWS Skill Builder – Free",p:"AWS",u:"https://skillbuilder.aws/"},
    {n:"Google Cloud Free Courses",p:"Google",u:"https://cloud.google.com/training/free"},
    {n:"Microsoft Learn – Azure",p:"Microsoft",u:"https://learn.microsoft.com/en-us/training/"},
    {n:"Docker Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=3c-iBn73dDE"},
    {n:"Kubernetes Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=X48VuDVv0do"},
    {n:"Terraform Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=SLB_c_ayRMo"},
    {n:"GitHub Actions Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=R8_veQiYBjI"},
    {n:"Linux Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=sWbUDq4S6Y8"},
    {n:"Networking Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=qiQR5rTSshw"},
    {n:"DevOps Roadmap 2026",p:"roadmap.sh",u:"https://roadmap.sh/devops"},
    {n:"Ansible Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=1id6ERvfozo"},
    {n:"Helm – Kubernetes Package Mgr",p:"Free",u:"https://helm.sh/docs/"},
    {n:"Prometheus + Grafana Monitoring",p:"YouTube",u:"https://www.youtube.com/watch?v=h4Sl21AKiDg"},
    {n:"SRE Book – Google Free",p:"Google",u:"https://sre.google/sre-book/table-of-contents/"},
  ]},
  {name:"Cybersecurity",tag:"security",color:"var(--red)",bg:"var(--red-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\`,
   links:[
    {n:"CS50 Cybersecurity – Harvard",p:"Harvard",u:"https://cs50.harvard.edu/cybersecurity/"},
    {n:"Google Cybersecurity Certificate",p:"Coursera",u:"https://www.coursera.org/professional-certificates/google-cybersecurity"},
    {n:"TryHackMe – Free Learning Paths",p:"Free",u:"https://tryhackme.com/paths"},
    {n:"Hack The Box – Free Labs",p:"Free",u:"https://www.hackthebox.com/"},
    {n:"Web Security Academy – PortSwigger",p:"PortSwigger",u:"https://portswigger.net/web-security"},
    {n:"OWASP Top 10 Guide",p:"Free",u:"https://owasp.org/www-project-top-ten/"},
    {n:"CompTIA Security+ Prep",p:"YouTube",u:"https://www.youtube.com/watch?v=9Nlehfu4VKA"},
    {n:"Network Security Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=E03gh1huvW4"},
    {n:"Cybrary – Free Security Courses",p:"Free Tier",u:"https://www.cybrary.it/"},
    {n:"Ethical Hacking Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=3Kq1MIfTWCE"},
    {n:"Cryptography – Stanford",p:"Coursera",u:"https://www.coursera.org/learn/crypto"},
    {n:"SANS Reading Room – Free Papers",p:"SANS",u:"https://www.sans.org/white-papers/"},
    {n:"Kali Linux Docs",p:"Free",u:"https://www.kali.org/docs/"},
    {n:"CTF Time – Competitions",p:"Free",u:"https://ctftime.org/"},
    {n:"OpenSecurityTraining2",p:"Free",u:"https://p.ost2.fyi/"},
  ]},
  {name:"Mobile App Development",tag:"mobile",color:"var(--purple)",bg:"var(--purple-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>\`,
   links:[
    {n:"React Native Official Docs",p:"React Native",u:"https://reactnative.dev/docs/getting-started"},
    {n:"Expo Tutorial – React Native",p:"Expo",u:"https://docs.expo.dev/tutorial/introduction/"},
    {n:"Flutter Official Tutorial",p:"Flutter",u:"https://docs.flutter.dev/get-started/codelab"},
    {n:"Flutter Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=CD1Y2DmL5JM"},
    {n:"iOS Dev – Apple Free Tutorials",p:"Apple",u:"https://developer.apple.com/tutorials/swiftui"},
    {n:"Swift Official Docs + Tour",p:"Apple",u:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/"},
    {n:"Android Dev – Jetpack Compose",p:"Google",u:"https://developer.android.com/courses/android-basics-compose/course"},
    {n:"Kotlin Official Docs",p:"JetBrains",u:"https://kotlinlang.org/docs/getting-started.html"},
    {n:"React Native Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=0-S5a0eXPoc"},
    {n:"Firebase for Mobile Apps",p:"Google",u:"https://firebase.google.com/docs"},
    {n:"App Design – Figma Mobile",p:"YouTube",u:"https://www.youtube.com/watch?v=HZuk6Wkx_Eg"},
    {n:"RevenueCat Docs – In-App Purchases",p:"Free",u:"https://www.revenuecat.com/docs/"},
    {n:"Mobile Roadmap 2026",p:"roadmap.sh",u:"https://roadmap.sh/react-native"},
    {n:"Awesome React Native",p:"GitHub",u:"https://github.com/jondot/awesome-react-native"},
    {n:"notJust Dev – React Native",p:"YouTube",u:"https://www.youtube.com/@notjustdev"},
  ]},
  {name:"UI/UX & Product Design",tag:"design",color:"var(--pink)",bg:"var(--pink-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 1 0 4.93 19.07"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/></svg>\`,
   links:[
    {n:"Google UX Design Certificate",p:"Coursera",u:"https://www.coursera.org/professional-certificates/google-ux-design"},
    {n:"Figma Official Tutorials",p:"Figma",u:"https://www.figma.com/resource-library/"},
    {n:"Figma Full Course – 6 Hours",p:"YouTube",u:"https://www.youtube.com/watch?v=HZuk6Wkx_Eg"},
    {n:"Laws of UX",p:"Free",u:"https://lawsofux.com/"},
    {n:"Refactoring UI – Design Tips",p:"Free",u:"https://refactoringui.com/"},
    {n:"Mobbin – Real App Design Patterns",p:"Free Tier",u:"https://mobbin.com/"},
    {n:"Design Systems Repo",p:"GitHub",u:"https://github.com/alexpate/awesome-design-systems"},
    {n:"Adobe XD Tutorials",p:"Adobe",u:"https://helpx.adobe.com/xd/tutorials.html"},
    {n:"Interaction Design Foundation Free",p:"IDF",u:"https://www.interaction-design.org/courses/free"},
    {n:"Kevin Powell – CSS Mastery",p:"YouTube",u:"https://www.youtube.com/@KevinPowell"},
    {n:"Canva Design School",p:"Canva",u:"https://www.canva.com/learn/"},
    {n:"UI Gradients Reference",p:"Free",u:"https://uigradients.com/"},
    {n:"Material Design 3 Guidelines",p:"Google",u:"https://m3.material.io/"},
    {n:"Apple HIG – Design Guidelines",p:"Apple",u:"https://developer.apple.com/design/human-interface-guidelines"},
    {n:"Flux Academy – UI/UX",p:"YouTube",u:"https://www.youtube.com/@FluxWithRanSegall"},
  ]},
  {name:"DSA & Interview Prep",tag:"coding",color:"var(--accent)",bg:"var(--accent-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>\`,
   links:[
    {n:"NeetCode – Complete DSA",p:"YouTube",u:"https://www.youtube.com/@NeetCode"},
    {n:"Striver's A2Z DSA Sheet",p:"takeUforward",u:"https://takeuforward.org/strivers-a2z-dsa-course/"},
    {n:"LeetCode Study Plans",p:"LeetCode",u:"https://leetcode.com/studyplan/"},
    {n:"CS50 – Intro to Computer Science",p:"Harvard",u:"https://cs50.harvard.edu/x/"},
    {n:"Algorithms Part I – Princeton",p:"Coursera",u:"https://www.coursera.org/learn/algorithms-part1"},
    {n:"Algorithms Part II – Princeton",p:"Coursera",u:"https://www.coursera.org/learn/algorithms-part2"},
    {n:"Tech Interview Handbook",p:"GitHub",u:"https://www.techinterviewhandbook.org/"},
    {n:"Blind 75 – Curated Problems",p:"LeetCode",u:"https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions"},
    {n:"NeetCode 150 Practice",p:"Free",u:"https://neetcode.io/practice"},
    {n:"Visualgo – Algorithm Visualiser",p:"Free",u:"https://visualgo.net/"},
    {n:"Aditya Verma – DP Playlist",p:"YouTube",u:"https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go"},
    {n:"CP Algorithms Reference",p:"Free",u:"https://cp-algorithms.com/"},
    {n:"Codeforces – Competitive Programming",p:"Free",u:"https://codeforces.com/"},
    {n:"Pramp – Free Mock Interviews",p:"Free",u:"https://www.pramp.com/"},
    {n:"Interviewing.io",p:"Free",u:"https://interviewing.io/"},
  ]},
  {name:"Computer Science Fundamentals",tag:"math",color:"var(--orange)",bg:"var(--orange-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>\`,
   links:[
    {n:"CS50 – Harvard Intro to CS",p:"Harvard",u:"https://cs50.harvard.edu/x/"},
    {n:"MIT 6.006 – Intro to Algorithms",p:"MIT OCW",u:"https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/"},
    {n:"CMU 15-445 – Database Systems",p:"CMU",u:"https://15445.courses.cs.cmu.edu/"},
    {n:"Operating Systems – OSTEP Book",p:"Free",u:"https://pages.cs.wisc.edu/~remzi/OSTEP/"},
    {n:"Nand to Tetris (Part 1)",p:"Coursera",u:"https://www.coursera.org/learn/build-a-computer"},
    {n:"Structure & Interpretation – SICP",p:"MIT",u:"https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html"},
    {n:"Discrete Mathematics",p:"YouTube",u:"https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz"},
    {n:"Theory of Computation – MIT",p:"MIT OCW",u:"https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/"},
    {n:"Computer Architecture – CMU",p:"CMU",u:"https://www.cs.cmu.edu/~213/"},
    {n:"Compiler Design – LLVM Tutorial",p:"Free",u:"https://llvm.org/docs/tutorial/"},
    {n:"CS61B – Data Structures – Berkeley",p:"Berkeley",u:"https://sp21.datastructur.es/"},
    {n:"Programming Languages – Coursera",p:"Coursera",u:"https://www.coursera.org/learn/programming-languages"},
    {n:"Category Theory – Free Book",p:"Free",u:"https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/"},
    {n:"Computer Networks – Kurose",p:"Free",u:"https://gaia.cs.umass.edu/kurose_ross/lectures.php"},
    {n:"Distributed Systems – MIT 6.824",p:"MIT",u:"https://pdos.csail.mit.edu/6.824/"},
  ]},
  {name:"Mathematics for Tech",tag:"math",color:"var(--yellow)",bg:"var(--yellow-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" stroke-width="2"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>\`,
   links:[
    {n:"Khan Academy – All Math",p:"Khan Academy",u:"https://www.khanacademy.org/math"},
    {n:"MIT OCW – Single Variable Calculus",p:"MIT OCW",u:"https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"},
    {n:"3Blue1Brown – Math Visual Series",p:"YouTube",u:"https://www.youtube.com/@3blue1brown"},
    {n:"Linear Algebra Done Right (Book)",p:"Free",u:"https://linear.axler.net/"},
    {n:"Statistics & Probability – Khan",p:"Khan Academy",u:"https://www.khanacademy.org/math/statistics-probability"},
    {n:"StatQuest – Stats for ML",p:"YouTube",u:"https://www.youtube.com/@statquest"},
    {n:"MIT OCW – Linear Algebra",p:"MIT OCW",u:"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"},
    {n:"Mathematics for ML – Coursera",p:"Coursera",u:"https://www.coursera.org/specializations/mathematics-machine-learning"},
    {n:"Discrete Math – TrevTutor",p:"YouTube",u:"https://www.youtube.com/@Trevtutor"},
    {n:"Probability – Harvard Stats 110",p:"YouTube",u:"https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo"},
    {n:"Calculus Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=HfACrKJ_Y2w"},
    {n:"Brilliant.org (Free Preview)",p:"Free Tier",u:"https://brilliant.org/"},
    {n:"MIT OCW – Multivariable Calculus",p:"MIT OCW",u:"https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/"},
    {n:"Number Theory – Explained",p:"YouTube",u:"https://www.youtube.com/watch?v=6uE6IcCZ4Dk"},
    {n:"Graph Theory – Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=09_LlHjoEiY"},
  ]},
  {name:"Career & Job Prep",tag:"career",color:"var(--accent)",bg:"var(--accent-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>\`,
   links:[
    {n:"Tech Interview Handbook",p:"GitHub",u:"https://www.techinterviewhandbook.org/"},
    {n:"System Design Primer",p:"GitHub",u:"https://github.com/donnemartin/system-design-primer"},
    {n:"Resume Tips – overleaf Template",p:"Free",u:"https://www.overleaf.com/latex/templates/tagged/cv"},
    {n:"LinkedIn Learning (Free Trial)",p:"LinkedIn",u:"https://www.linkedin.com/learning/"},
    {n:"Pramp – Free Mock Interviews",p:"Free",u:"https://www.pramp.com/"},
    {n:"Interviewing.io – FAANG Prep",p:"Free",u:"https://interviewing.io/"},
    {n:"Blind 75 – Problem List",p:"LeetCode",u:"https://leetcode.com/discuss/general-discussion/460599/"},
    {n:"Salary Negotiation – Fearless",p:"YouTube",u:"https://www.youtube.com/watch?v=XY5SeCl_8NE"},
    {n:"Glassdoor – Salary Research",p:"Free",u:"https://www.glassdoor.co.in/"},
    {n:"Levels.fyi – Comp Data",p:"Free",u:"https://www.levels.fyi/"},
    {n:"GitHub Student Developer Pack",p:"GitHub",u:"https://education.github.com/pack"},
    {n:"Open Source Contribution Guide",p:"GitHub",u:"https://opensource.guide/how-to-contribute/"},
    {n:"Google Summer of Code Guide",p:"Google",u:"https://summerofcode.withgoogle.com/"},
    {n:"Dev.to – Developer Community",p:"Free",u:"https://dev.to/"},
    {n:"The Pragmatic Programmer Book",p:"Free Preview",u:"https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/"},
  ]},
  {name:"Digital Marketing",tag:"marketing",color:"var(--orange)",bg:"var(--orange-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>\`,
   links:[
    {n:"Google Digital Marketing Certificate",p:"Coursera",u:"https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce"},
    {n:"Meta Social Media Marketing",p:"Coursera",u:"https://www.coursera.org/professional-certificates/facebook-social-media-marketing"},
    {n:"HubSpot Academy – All Courses",p:"HubSpot",u:"https://academy.hubspot.com/courses"},
    {n:"Google Analytics Academy",p:"Google",u:"https://analytics.google.com/analytics/academy/"},
    {n:"Google Ads Free Certification",p:"Google",u:"https://skillshop.withgoogle.com/"},
    {n:"SEO Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=xsVTqzratPs"},
    {n:"Semrush Academy – Free Courses",p:"Semrush",u:"https://www.semrush.com/academy/"},
    {n:"Ahrefs – SEO Training",p:"YouTube",u:"https://www.youtube.com/@AhrefsTV"},
    {n:"Mailchimp Email Marketing Guides",p:"Free",u:"https://mailchimp.com/resources/"},
    {n:"Content Marketing Institute",p:"Free",u:"https://contentmarketinginstitute.com/education/"},
    {n:"Backlinko – SEO Blog",p:"Free",u:"https://backlinko.com/blog"},
    {n:"Neil Patel – Digital Marketing",p:"YouTube",u:"https://www.youtube.com/@neilpatel"},
    {n:"Growth Hacking Course – GrowthHackers",p:"Free Tier",u:"https://growthhackers.com/"},
    {n:"CXL – Free Marketing Courses",p:"Free Tier",u:"https://cxl.com/institute/"},
    {n:"Marketing Analytics – Coursera",p:"Coursera",u:"https://www.coursera.org/learn/marketing-analytics"},
  ]},
  {name:"Personal Finance & Investing",tag:"finance",color:"var(--accent)",bg:"var(--accent-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>\`,
   links:[
    {n:"Personal Finance – Khan Academy",p:"Khan Academy",u:"https://www.khanacademy.org/college-careers-more/personal-finance"},
    {n:"Yale Financial Markets – Robert Shiller",p:"Coursera",u:"https://www.coursera.org/learn/financial-markets-global"},
    {n:"Zerodha Varsity – Indian Finance",p:"Free",u:"https://zerodha.com/varsity/"},
    {n:"Investopedia – Financial Education",p:"Free",u:"https://www.investopedia.com/financial-term-dictionary-4769738"},
    {n:"MIT 15.401 – Finance Theory",p:"MIT OCW",u:"https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/"},
    {n:"Google Finance – Real Data",p:"Google",u:"https://finance.google.com"},
    {n:"Zerodha – Trading & Investing",p:"Free",u:"https://zerodha.com/varsity/module/introduction-to-stock-markets/"},
    {n:"CFA Institute – Free Resources",p:"CFA",u:"https://www.cfainstitute.org/en/membership/professional-development/refresher-readings"},
    {n:"NISM Study Material – Free",p:"NISM",u:"https://www.nism.ac.in/"},
    {n:"Stock Market Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=p7HKvqRI_Bo"},
    {n:"Warren Buffett Letters Archive",p:"Free",u:"https://www.berkshirehathaway.com/letters/letters.html"},
    {n:"Crypto Fundamentals – Coinbase",p:"Free",u:"https://www.coinbase.com/learn"},
    {n:"Open Corporates – Business Data",p:"Free",u:"https://opencorporates.com/"},
    {n:"Tax for Developers – India",p:"YouTube",u:"https://www.youtube.com/watch?v=m0wsMFM_qZs"},
    {n:"SEBI Investor Education",p:"SEBI",u:"https://investor.sebi.gov.in/"},
  ]},
  {name:"English & Communication",tag:"language",color:"var(--blue)",bg:"var(--blue-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>\`,
   links:[
    {n:"British Council – Free English",p:"Free",u:"https://www.britishcouncil.org/english"},
    {n:"Coursera English Specializations",p:"Coursera",u:"https://www.coursera.org/courses?query=english%20communication"},
    {n:"BBC Learning English",p:"BBC",u:"https://www.bbc.co.uk/learningenglish/"},
    {n:"Duolingo – Language Learning",p:"Free",u:"https://www.duolingo.com/"},
    {n:"Think Fast Talk Smart – Stanford",p:"Stanford",u:"https://www.youtube.com/@StanfordGSB"},
    {n:"TED Talks – Public Speaking",p:"Free",u:"https://www.ted.com/playlists/226/before_public_speaking"},
    {n:"Writing – Coursera Duke",p:"Coursera",u:"https://www.coursera.org/specializations/academic-english"},
    {n:"Purdue OWL – Writing Guide",p:"Free",u:"https://owl.purdue.edu/owl/general_writing/"},
    {n:"Harvard Writing Center",p:"Harvard",u:"https://writingcenter.fas.harvard.edu/pages/resources"},
    {n:"Technical Writing – Google",p:"Google",u:"https://developers.google.com/tech-writing"},
    {n:"Toastmasters – Free Resources",p:"Free",u:"https://www.toastmasters.org/resources"},
    {n:"English Grammar in Use (Preview)",p:"Cambridge",u:"https://www.cambridge.org/elt/blog/2021/01/15/english-grammar-in-use-raymond-murphy/"},
    {n:"Memrise – Vocabulary Building",p:"Free Tier",u:"https://www.memrise.com/"},
    {n:"Anki – Flashcard System",p:"Free",u:"https://apps.ankiweb.net/"},
    {n:"Voice & Accent Training",p:"YouTube",u:"https://www.youtube.com/watch?v=5_WEDfD4DFk"},
  ]},
  {name:"Productivity & Tools",tag:"productivity",color:"var(--yellow)",bg:"var(--yellow-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>\`,
   links:[
    {n:"Getting Things Done – Official",p:"Free",u:"https://gettingthingsdone.com/resources/"},
    {n:"Notion – Official Templates",p:"Free",u:"https://www.notion.so/templates"},
    {n:"Obsidian – Personal Knowledge Mgmt",p:"Free",u:"https://obsidian.md/"},
    {n:"VS Code Tips & Tricks",p:"YouTube",u:"https://www.youtube.com/watch?v=fnPhJHN0jTE"},
    {n:"Git Complete Course",p:"YouTube",u:"https://www.youtube.com/watch?v=RGOj5yH7evk"},
    {n:"Vim Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=H3o4l4GVLW0"},
    {n:"Linux Terminal Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=oxuRxtrO2Ag"},
    {n:"Regex in 100 seconds",p:"YouTube",u:"https://www.youtube.com/watch?v=sXQxhojSdZM"},
    {n:"Make (Integromat) Free Tier",p:"Free Tier",u:"https://www.make.com/en/help/tutorials"},
    {n:"Zapier University",p:"Free",u:"https://zapier.com/university"},
    {n:"Obsidian + Claude MCP Guide",p:"Free",u:"https://github.com/obsidianmd/obsidian-api"},
    {n:"Second Brain – Building PKM",p:"YouTube",u:"https://www.youtube.com/watch?v=OP3dA2GcAh8"},
    {n:"Zettelkasten Method",p:"Free",u:"https://zettelkasten.de/posts/overview/"},
    {n:"Time Management – Cal Newport",p:"YouTube",u:"https://www.youtube.com/@CalNewportMedia"},
    {n:"Excalidraw – Free Diagramming",p:"Free",u:"https://excalidraw.com/"},
  ]},
  {name:"Open Source & Git",tag:"coding",color:"var(--teal)",bg:"var(--teal-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>\`,
   links:[
    {n:"Git Official Docs",p:"Free",u:"https://git-scm.com/doc"},
    {n:"Git & GitHub Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=RGOj5yH7evk"},
    {n:"Pro Git Book – Free",p:"Free Book",u:"https://git-scm.com/book/en/v2"},
    {n:"GitHub Skills – Interactive",p:"GitHub",u:"https://skills.github.com/"},
    {n:"Open Source Contribution Guide",p:"GitHub",u:"https://opensource.guide/how-to-contribute/"},
    {n:"First Contributions Repo",p:"GitHub",u:"https://github.com/firstcontributions/first-contributions"},
    {n:"Good First Issues – Explorer",p:"GitHub",u:"https://goodfirstissues.com/"},
    {n:"GitHub Actions Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=R8_veQiYBjI"},
    {n:"Atlassian Git Tutorials",p:"Free",u:"https://www.atlassian.com/git/tutorials"},
    {n:"Learn Git Branching – Interactive",p:"Free",u:"https://learngitbranching.js.org/"},
    {n:"Oh My Git – Visual Game",p:"Free",u:"https://ohmygit.org/"},
    {n:"GitLab CI/CD Docs",p:"GitLab",u:"https://docs.gitlab.com/ee/ci/"},
    {n:"Conventional Commits Guide",p:"Free",u:"https://www.conventionalcommits.org/"},
    {n:"Semantic Versioning",p:"Free",u:"https://semver.org/"},
    {n:"Open Source Friday – GitHub",p:"GitHub",u:"https://opensourcefriday.com/"},
  ]},
  {name:"System Design",tag:"coding",color:"var(--purple)",bg:"var(--purple-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2"><rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M5 9v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M12 13v2"/></svg>\`,
   links:[
    {n:"System Design Primer",p:"GitHub",u:"https://github.com/donnemartin/system-design-primer"},
    {n:"System Design Interview – Book",p:"GitHub",u:"https://github.com/G-Ke/system-design-interview-alex-xu"},
    {n:"Grokking System Design",p:"Free Preview",u:"https://www.designgurus.io/course/grokking-the-system-design-interview"},
    {n:"High Scalability Blog",p:"Free",u:"http://highscalability.com/"},
    {n:"Martin Kleppmann – DDIA Book",p:"Free Preview",u:"https://dataintensive.net/"},
    {n:"Gaurav Sen – System Design",p:"YouTube",u:"https://www.youtube.com/@gkcs"},
    {n:"System Design Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=i53Gi_K3o7I"},
    {n:"ByteByteGo – System Design",p:"YouTube",u:"https://www.youtube.com/@ByteByteGo"},
    {n:"AWS Architecture Center",p:"AWS",u:"https://aws.amazon.com/architecture/"},
    {n:"Google SRE Book – Free",p:"Google",u:"https://sre.google/sre-book/table-of-contents/"},
    {n:"Distributed Systems – MIT 6.824",p:"MIT",u:"https://pdos.csail.mit.edu/6.824/"},
    {n:"CAP Theorem Explained",p:"YouTube",u:"https://www.youtube.com/watch?v=BHqjEjzAicA"},
    {n:"Microservices Pattern – Chris Richardson",p:"Free",u:"https://microservices.io/patterns/"},
    {n:"Kafka Official Docs",p:"Apache",u:"https://kafka.apache.org/documentation/"},
    {n:"roadmap.sh – System Design",p:"roadmap.sh",u:"https://roadmap.sh/system-design"},
  ]},
  {name:"Testing & QA",tag:"coding",color:"var(--red)",bg:"var(--red-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>\`,
   links:[
    {n:"Jest Official Docs",p:"Jest",u:"https://jestjs.io/docs/getting-started"},
    {n:"Testing Library Docs",p:"Free",u:"https://testing-library.com/"},
    {n:"Playwright Official Tutorial",p:"Microsoft",u:"https://playwright.dev/docs/intro"},
    {n:"Cypress Official Docs",p:"Cypress",u:"https://docs.cypress.io/"},
    {n:"Selenium Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=j7VZsCCnptM"},
    {n:"Pytest Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=cHYq1MRoyI0"},
    {n:"Software Testing – Udacity",p:"Udacity",u:"https://www.udacity.com/course/software-testing--cs258"},
    {n:"Test Driven Development – Kent Beck",p:"YouTube",u:"https://www.youtube.com/watch?v=qkblc5WRn-U"},
    {n:"ISTQB Foundation Study Guide",p:"Free",u:"https://www.istqb.org/certifications/certified-tester-foundation-level"},
    {n:"Performance Testing – k6",p:"k6",u:"https://k6.io/docs/"},
    {n:"API Testing – Postman",p:"Postman",u:"https://learning.postman.com/docs/getting-started/introduction/"},
    {n:"Contract Testing – Pact",p:"Free",u:"https://docs.pact.io/"},
    {n:"Mutation Testing – Stryker",p:"Free",u:"https://stryker-mutator.io/docs/"},
    {n:"Chaos Engineering – Principles",p:"Free",u:"https://principlesofchaos.org/"},
    {n:"QA Roadmap 2026",p:"roadmap.sh",u:"https://roadmap.sh/qa"},
  ]},
  {name:"Blockchain & Web3",tag:"coding",color:"var(--purple)",bg:"var(--purple-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>\`,
   links:[
    {n:"Blockchain Basics – Coursera",p:"Coursera",u:"https://www.coursera.org/learn/blockchain-basics"},
    {n:"CryptoZombies – Solidity Game",p:"Free",u:"https://cryptozombies.io/"},
    {n:"Solidity Official Docs",p:"Free",u:"https://soliditylang.org/docs/"},
    {n:"Ethereum.org Docs + Learn",p:"Ethereum",u:"https://ethereum.org/en/learn/"},
    {n:"Alchemy University – Free",p:"Alchemy",u:"https://university.alchemy.com/"},
    {n:"Buildspace – Web3 Projects",p:"Free",u:"https://buildspace.so/"},
    {n:"Patrick Collins – Solidity Course",p:"YouTube",u:"https://www.youtube.com/watch?v=gyMwXuJrbJQ"},
    {n:"Hardhat Official Tutorial",p:"Free",u:"https://hardhat.org/tutorial"},
    {n:"OpenZeppelin Docs",p:"Free",u:"https://docs.openzeppelin.com/"},
    {n:"Blockchain Roadmap",p:"roadmap.sh",u:"https://roadmap.sh/blockchain"},
    {n:"Web3.js Official Docs",p:"Free",u:"https://docs.web3js.org/"},
    {n:"IPFS Official Docs",p:"Free",u:"https://docs.ipfs.tech/"},
    {n:"DeFi Developer Roadmap",p:"GitHub",u:"https://github.com/OffcierCia/DeFi-Developer-Road-Map"},
    {n:"Chainlink Docs + Tutorials",p:"Free",u:"https://docs.chain.link/"},
    {n:"Moralis – Web3 Development",p:"YouTube",u:"https://www.youtube.com/@MoralisWeb3"},
  ]},
  {name:"Game Development",tag:"coding",color:"var(--orange)",bg:"var(--orange-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2"><rect x="6" y="11" width="4" height="6" rx="1"/><line x1="16" y1="13" x2="20" y2="13"/><line x1="18" y1="11" x2="18" y2="15"/><path d="M15 5l3.5 3.5M9 5L5.5 8.5M5 21l3.5-3.5M19 21l-3.5-3.5"/><circle cx="12" cy="12" r="10"/></svg>\`,
   links:[
    {n:"Unity Official Learn Platform",p:"Unity",u:"https://learn.unity.com/"},
    {n:"Unreal Engine Online Learning",p:"Epic Games",u:"https://www.unrealengine.com/en-US/onlinelearning-courses"},
    {n:"Godot Official Docs + Tutorials",p:"Godot",u:"https://docs.godotengine.org/en/stable/getting_started/step_by_step/"},
    {n:"CS50G – Game Dev Harvard",p:"Harvard",u:"https://cs50.harvard.edu/games/"},
    {n:"Game Design – Coursera Michigan",p:"Coursera",u:"https://www.coursera.org/specializations/game-design"},
    {n:"Brackeys – Unity Tutorials",p:"YouTube",u:"https://www.youtube.com/@Brackeys"},
    {n:"Game Math – 3Blue1Brown",p:"YouTube",u:"https://www.youtube.com/@3blue1brown"},
    {n:"OpenGL Full Tutorial",p:"YouTube",u:"https://www.youtube.com/watch?v=W3gAzLwfIP0"},
    {n:"Phaser.js – 2D Web Games",p:"Free",u:"https://phaser.io/tutorials"},
    {n:"pygame Official Tutorial",p:"Free",u:"https://www.pygame.org/docs/tut/newbieguide.html"},
    {n:"GDevelop – No Code Game Dev",p:"Free",u:"https://wiki.gdevelop.io/gdevelop5/"},
    {n:"LibGDX Java Game Framework",p:"Free",u:"https://libgdx.com/dev/"},
    {n:"Game Programming Patterns Book",p:"Free",u:"https://gameprogrammingpatterns.com/"},
    {n:"Kenney.nl – Free Game Assets",p:"Free",u:"https://kenney.nl/assets"},
    {n:"Itch.io Game Dev Resources",p:"Free",u:"https://itch.io/game-assets/free"},
  ]},
  {name:"Freelancing & Entrepreneurship",tag:"career",color:"var(--yellow)",bg:"var(--yellow-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\`,
   links:[
    {n:"Freelancing Full Guide – freeCodeCamp",p:"YouTube",u:"https://www.youtube.com/watch?v=oxuRxtrO2Ag"},
    {n:"Upwork Success Guide",p:"Free",u:"https://www.upwork.com/resources/"},
    {n:"Toptal Application Tips",p:"Free",u:"https://www.toptal.com/developers/blog"},
    {n:"How to Start a Startup – Stanford",p:"YouTube",u:"https://www.youtube.com/playlist?list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe21"},
    {n:"YC Startup School – Free",p:"Y Combinator",u:"https://www.startupschool.org/"},
    {n:"Indie Hackers – Community",p:"Free",u:"https://www.indiehackers.com/"},
    {n:"Product Hunt – Launch Guide",p:"Free",u:"https://www.producthunt.com/stories"},
    {n:"No-Code Tools Overview",p:"YouTube",u:"https://www.youtube.com/watch?v=3X9SvZ3x1lQ"},
    {n:"Bubble.io Official Docs",p:"Bubble",u:"https://manual.bubble.io/"},
    {n:"Webflow University",p:"Free",u:"https://university.webflow.com/"},
    {n:"Financial Modelling for Startups",p:"YouTube",u:"https://www.youtube.com/watch?v=sTLTLuCCVRE"},
    {n:"Email First Business – ConvertKit",p:"Free",u:"https://convertkit.com/resources"},
    {n:"Seth Godin – Marketing Blog",p:"Free",u:"https://seths.blog/"},
    {n:"Paul Graham Essays",p:"Free",u:"http://paulgraham.com/articles.html"},
    {n:"Stripe Atlas – Startup Formation",p:"Free",u:"https://stripe.com/atlas/guides"},
  ]},
  {name:"Video Editing & Content Creation",tag:"productivity",color:"var(--red)",bg:"var(--red-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>\`,
   links:[
    {n:"DaVinci Resolve Official Training",p:"Blackmagic",u:"https://www.blackmagicdesign.com/products/davinciresolve/training"},
    {n:"Premiere Pro Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=Hls3Tp7JS8E"},
    {n:"CapCut Tutorials",p:"YouTube",u:"https://www.youtube.com/results?search_query=capcut+tutorial"},
    {n:"After Effects Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=vBsQV9PkXpg"},
    {n:"YouTube Algorithm – Creator Academy",p:"YouTube",u:"https://creatoracademy.youtube.com/"},
    {n:"Short Form Content Strategy",p:"YouTube",u:"https://www.youtube.com/watch?v=PeSAMEHIVQU"},
    {n:"Audacity – Audio Editing Free",p:"Audacity",u:"https://support.audacityteam.org/"},
    {n:"Canva Video Editor",p:"Canva",u:"https://www.canva.com/video-editor/"},
    {n:"OBS Studio – Free Recording",p:"OBS",u:"https://obsproject.com/wiki/"},
    {n:"Runway ML – AI Video Editing",p:"Free Tier",u:"https://runwayml.com/"},
    {n:"ElevenLabs – AI Voice (Free Tier)",p:"Free Tier",u:"https://elevenlabs.io/"},
    {n:"Color Grading – Full Guide",p:"YouTube",u:"https://www.youtube.com/watch?v=JWdpT09F-HU"},
    {n:"Podcast Production Guide",p:"YouTube",u:"https://www.youtube.com/watch?v=s01-Y3Dqa9Q"},
    {n:"Motion Design – After Effects",p:"YouTube",u:"https://www.youtube.com/watch?v=vBsQV9PkXpg"},
    {n:"Video SEO for YouTube",p:"YouTube",u:"https://www.youtube.com/watch?v=NU8UE8VFzQ8"},
  ]},
  {name:"3D & Graphics",tag:"design",color:"var(--purple)",bg:"var(--purple-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>\`,
   links:[
    {n:"Blender Official Tutorials",p:"Blender",u:"https://www.blender.org/support/tutorials/"},
    {n:"Blender Guru – Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=nIoXOplUvAw"},
    {n:"Three.js Official Journey (Free Parts)",p:"Three.js",u:"https://threejs.org/manual/"},
    {n:"WebGL Fundamentals",p:"Free",u:"https://webglfundamentals.org/"},
    {n:"Unity Learn Platform",p:"Unity",u:"https://learn.unity.com/"},
    {n:"Adobe Illustrator Official Tutorials",p:"Adobe",u:"https://helpx.adobe.com/illustrator/tutorials.html"},
    {n:"Inkscape Official Docs",p:"Free",u:"https://inkscape.org/learn/"},
    {n:"GIMP Tutorials",p:"Free",u:"https://www.gimp.org/tutorials/"},
    {n:"Stable Diffusion – Getting Started",p:"YouTube",u:"https://www.youtube.com/watch?v=DHaL56P3f9A"},
    {n:"Midjourney Official Docs",p:"Free",u:"https://docs.midjourney.com/"},
    {n:"Procreate – iPad Art Tutorials",p:"YouTube",u:"https://www.youtube.com/results?search_query=procreate+tutorial+beginner"},
    {n:"CSS Art – Full Guide",p:"YouTube",u:"https://www.youtube.com/watch?v=Xc3oaupSTnA"},
    {n:"SVG Essentials – Full Course",p:"YouTube",u:"https://www.youtube.com/watch?v=wc9_56e0TNEM"},
    {n:"Spline – 3D for Web",p:"Free",u:"https://spline.design/"},
    {n:"Rive Animation – Free",p:"Free",u:"https://rive.app/learn-rive/"},
  ]},
  {name:"IoT & Embedded Systems",tag:"coding",color:"var(--teal)",bg:"var(--teal-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/></svg>\`,
   links:[
    {n:"Arduino Official Tutorials",p:"Arduino",u:"https://docs.arduino.cc/learn/"},
    {n:"Raspberry Pi Official Docs",p:"Raspberry Pi",u:"https://www.raspberrypi.com/documentation/"},
    {n:"MIT 6.004 – Computation Structures",p:"MIT OCW",u:"https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"},
    {n:"Electronics Basics – Khan Academy",p:"Khan Academy",u:"https://www.khanacademy.org/science/electrical-engineering"},
    {n:"IoT Full Course – Edureka",p:"YouTube",u:"https://www.youtube.com/watch?v=h0gWfVCSGQQ"},
    {n:"Embedded Systems – Coursera",p:"Coursera",u:"https://www.coursera.org/specializations/embedded-systems-software-and-hardware-architecture"},
    {n:"ESP32 Full Tutorial",p:"YouTube",u:"https://www.youtube.com/watch?v=iASSZoinfNQ"},
    {n:"MQTT Protocol Explained",p:"YouTube",u:"https://www.youtube.com/watch?v=EIxdz-2rhLs"},
    {n:"C for Embedded Systems",p:"YouTube",u:"https://www.youtube.com/watch?v=KJgsSFOSQv0"},
    {n:"FreeRTOS Official Docs",p:"Free",u:"https://www.freertos.org/Documentation/"},
    {n:"STM32 Tutorial Series",p:"YouTube",u:"https://www.youtube.com/watch?v=hyZS2p1tW-g"},
    {n:"TinyML – Harvard",p:"Free",u:"https://pll.harvard.edu/course/introduction-to-embedded-machine-learning"},
    {n:"Home Automation – Home Assistant",p:"Free",u:"https://www.home-assistant.io/docs/"},
    {n:"AWS IoT Core Docs",p:"AWS",u:"https://docs.aws.amazon.com/iot/"},
    {n:"Practical Electronics for Inventors",p:"Free Preview",u:"https://www.mhprofessional.com/9781259587542-usa-practical-electronics-for-inventors-fourth-edition"},
  ]},
  {name:"Hardware & Electronics",tag:"coding",color:"var(--orange)",bg:"var(--orange-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2"><polyline points="6.8 6.8 3 12 6.8 17.2"/><polyline points="17.2 6.8 21 12 17.2 17.2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>\`,
   links:[
    {n:"nand2tetris – Computer from Scratch",p:"Coursera",u:"https://www.coursera.org/learn/build-a-computer"},
    {n:"Khan Academy – Electrical Engineering",p:"Khan Academy",u:"https://www.khanacademy.org/science/electrical-engineering"},
    {n:"MIT 6.002 – Circuits and Electronics",p:"MIT OCW",u:"https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/"},
    {n:"Electronics Tutorial – All About Circuits",p:"Free",u:"https://www.allaboutcircuits.com/textbook/"},
    {n:"FPGA Tutorial – Nandland",p:"Free",u:"https://nandland.com/"},
    {n:"Digital Logic Design",p:"YouTube",u:"https://www.youtube.com/watch?v=M0mx8S05v60"},
    {n:"PCB Design – EasyEDA",p:"Free",u:"https://docs.easyeda.com/en/"},
    {n:"Circuit Simulator – Falstad",p:"Free",u:"https://www.falstad.com/circuit/"},
    {n:"Ben Eater – Build a CPU",p:"YouTube",u:"https://www.youtube.com/@BenEater"},
    {n:"RISC-V Explained",p:"YouTube",u:"https://www.youtube.com/watch?v=Fy8pMqrGd74"},
    {n:"Verilog Full Tutorial",p:"YouTube",u:"https://www.youtube.com/watch?v=ER_R1rkRFHc"},
    {n:"VLSI Design Basics",p:"YouTube",u:"https://www.youtube.com/watch?v=oZqMOCzHYNc"},
    {n:"Oscilloscope Tutorial",p:"YouTube",u:"https://www.youtube.com/watch?v=uU3FhH7_MWo"},
    {n:"Solar & Renewable Energy – Coursera",p:"Coursera",u:"https://www.coursera.org/learn/solar-energy"},
    {n:"3D Printing Beginner Guide",p:"YouTube",u:"https://www.youtube.com/watch?v=7_J1QSWtpFQ"},
  ]},
  {name:"Science & Research Skills",tag:"math",color:"var(--blue)",bg:"var(--blue-bg)",icon:\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>\`,
   links:[
    {n:"MIT OpenCourseWare – Full Library",p:"MIT OCW",u:"https://ocw.mit.edu/"},
    {n:"Coursera – All Free Audit Courses",p:"Coursera",u:"https://www.coursera.org/courses?query=free"},
    {n:"edX – Free Courses Library",p:"edX",u:"https://www.edx.org/course/subject/computer-science"},
    {n:"arXiv.org – Free Research Papers",p:"Free",u:"https://arxiv.org/"},
    {n:"Semantic Scholar – AI Papers",p:"Free",u:"https://www.semanticscholar.org/"},
    {n:"Papers With Code",p:"Free",u:"https://paperswithcode.com/"},
    {n:"Connected Papers – Graph",p:"Free",u:"https://www.connectedpapers.com/"},
    {n:"Zotero – Reference Manager",p:"Free",u:"https://www.zotero.org/"},
    {n:"Latex Tutorial – Overleaf",p:"Free",u:"https://www.overleaf.com/learn"},
    {n:"Research Methods – Coursera",p:"Coursera",u:"https://www.coursera.org/learn/quantitative-methods"},
    {n:"Google Scholar",p:"Google",u:"https://scholar.google.com/"},
    {n:"JSTOR – Free Access",p:"Free",u:"https://www.jstor.org/"},
    {n:"Project MUSE – Humanities",p:"Free",u:"https://muse.jhu.edu/"},
    {n:"Springer Open Access",p:"Free",u:"https://www.springeropen.com/"},
    {n:"PubMed – Medical Research",p:"Free",u:"https://pubmed.ncbi.nlm.nih.gov/"},
  ]},
];

const TIPS = [
  {n:"01",title:"Google Drive Search",desc:"Educators upload complete courses to Google Drive and forget to make them private. Google indexes these public links.",q:"machine learning course site:drive.google.com"},
  {n:"02",title:"GitHub Awesome Lists",desc:"The developer community compiles massive collections of free course links, books, and tools on GitHub. Search any topic.",q:"awesome python learning resources site:github.com"},
  {n:"03",title:"Udemy Free Coupons",desc:"Instructors release 100% off coupons regularly. Reddit communities track them in real-time.",q:'udemy free coupon "react" 2026 site:reddit.com'},
  {n:"04",title:"PDF Textbooks (.edu)",desc:"University websites host textbooks and lecture notes that are publicly accessible. The best CS books — completely free.",q:'"deep learning" textbook filetype:pdf site:edu'},
  {n:"05",title:"Internet Archive",desc:"Archive.org legally hosts thousands of books, courses, and resources you can read or borrow for free online.",q:'site:archive.org "programming" "2024" course'},
  {n:"06",title:"University Lecture Notes",desc:"Stanford, MIT, CMU, and Berkeley publicly post their course materials. Some of the best content in the world, free.",q:'machine learning course notes site:stanford.edu OR site:mit.edu'},
  {n:"07",title:"YouTube + Full Course",desc:"Adding 'full course' to any YouTube search surfaces complete multi-hour courses that replace paid bootcamps.",q:'python full course for beginners 2026 site:youtube.com'},
  {n:"08",title:"Scribd Free Preview",desc:"Scribd has most technical books available for a 30-day free trial — enough to read 2-3 books completely free.",q:'site:scribd.com "javascript" programming guide 2024'},
  {n:"09",title:"SlideShare Lecture Slides",desc:"Professors upload their complete course slide decks to SlideShare. Hundreds of university-level lectures, free.",q:'machine learning lecture slides site:slideshare.net'},
  {n:"10",title:"Notion Free Resources",desc:"Developers share curated resource databases on Notion. Search for community-built learning guides.",q:'notion.site "free courses" developer resources 2026'},
  {n:"11",title:"Dev.to Tutorial Series",desc:"Developers publish complete, structured tutorial series on Dev.to — often better than paid courses.",q:'site:dev.to "complete guide" javascript 2026 series'},
  {n:"12",title:"Hashnode Tech Blogs",desc:"Thousands of developers document their learning on Hashnode. Real-world tutorials with working code.",q:'site:hashnode.dev "tutorial" react complete 2026'},
];

/* ══════════════════════════════════════════
   BUILD UI
══════════════════════════════════════════ */

// Roadmap phases
function buildCC(c){
  return \`<a href="\${c.url}" target="_blank" rel="noopener" class="cc" data-cat="\${c.cat}">
    <div class="cc-top">
      <span class="cc-plat \${c.platClass}">\${c.plat}</span>
      <span class="cc-free-badge">FREE</span>
    </div>
    <div class="cc-title">\${c.title}</div>
    <div class="cc-by">by \${c.by}</div>
    <div class="cc-tags">\${c.tags.map(t=>\`<span class="cc-tag">\${t}</span>\`).join('')}</div>
    <div class="cc-arr">↗</div>
  </a>\`;
}

const rmBodies = document.getElementById('rm-bodies');
Object.entries(ROADMAPS).forEach(([key,rm])=>{
  const div = document.createElement('div');
  div.className = \`rm-body\${key==='ai'?' on':''}\`;
  div.id = \`rm-\${key}\`;
  div.innerHTML = \`<div class="goal-box"><div>
    <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--accent);letter-spacing:.12em;text-transform:uppercase;margin-bottom:6px">Goal</div>
    <div class="goal-text">\${rm.goal}</div>
  </div></div>
  <div class="timeline">\${rm.phases.map(ph=>\`
    <div class="phase">
      <div class="phase-dot"><div class="phase-dot-inner"></div></div>
      <div class="phase-head">
        <span class="phase-num">Phase \${ph.num}</span>
        <span class="phase-title">\${ph.title}</span>
        <span class="phase-dur">\${ph.dur}</span>
      </div>
      <p class="phase-desc">\${ph.desc}</p>
      <div class="phase-grid">\${ph.courses.map(buildCC).join('')}</div>
    </div>
  \`).join('')}</div>\`;
  rmBodies.appendChild(div);
});

// Roadmap tabs
document.querySelectorAll('.rm-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.rm-tab').forEach(t=>t.classList.remove('on'));
    document.querySelectorAll('.rm-body').forEach(b=>b.classList.remove('on'));
    tab.classList.add('on');
    document.getElementById(\`rm-\${tab.dataset.rm}\`).classList.add('on');
    document.getElementById('roadmaps').scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Category blocks
const catGrid = document.getElementById('catGrid');
let totalLinks = 0;
CATEGORIES.forEach(cat=>{
  totalLinks += cat.links.length;
  const block = document.createElement('div');
  block.className = 'cat-block';
  block.dataset.catf = cat.tag;
  block.innerHTML = \`<div class="cat-head">
    <div class="cat-ico" style="background:\${cat.bg}">\${cat.icon}</div>
    <div>
      <div class="cat-name">\${cat.name}</div>
      <div class="cat-cnt">\${cat.links.length} free courses</div>
    </div>
  </div>
  <div class="cat-body">
    \${cat.links.map(l=>\`<a href="\${l.u}" target="_blank" rel="noopener" class="cat-link">
      <div class="cat-link-l"><div class="cat-link-dot"></div><span class="cat-link-name">\${l.n}</span></div>
      <span class="cat-link-plat">\${l.p}</span>
    </a>\`).join('')}
  </div>\`;
  catGrid.appendChild(block);
});
document.getElementById('catCount').textContent = \`\${totalLinks}+ links\`;

// Tips
const tipsGrid = document.getElementById('tipsGrid');
TIPS.forEach(t=>{
  const div = document.createElement('div');
  div.className = 'tip-card';
  div.innerHTML = \`<div class="tip-n">\${t.n}</div>
    <div class="tip-title">\${t.title}</div>
    <div class="tip-desc">\${t.desc}</div>
    <div class="tip-q">\${t.q}</div>\`;
  tipsGrid.appendChild(div);
});

// Filter
document.querySelectorAll('.fb').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.fb').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.f;
    let shown = 0;
    document.querySelectorAll('.cat-block').forEach(block=>{
      const vis = f==='all' || block.dataset.catf===f;
      block.style.display = vis ? '' : 'none';
      if(vis) shown++;
    });
  });
});

// Search
document.getElementById('srch').addEventListener('input',e=>{
  const q = e.target.value.toLowerCase().trim();
  if(!q){
    document.querySelectorAll('.cat-link').forEach(l=>l.style.display='');
    document.querySelectorAll('.cat-block').forEach(b=>b.style.display='');
    return;
  }
  document.querySelectorAll('.cat-block').forEach(block=>{
    let anyVis = false;
    block.querySelectorAll('.cat-link').forEach(link=>{
      const txt = link.querySelector('.cat-link-name').textContent.toLowerCase();
      const vis = txt.includes(q);
      link.style.display = vis ? '' : 'none';
      if(vis) anyVis = true;
    });
    block.style.display = anyVis ? '' : 'none';
  });
});

// Marquee
const mqItems = ['MIT OpenCourseWare','Harvard CS50','Google Certifications','Kaggle Learn','fast.ai','freeCodeCamp','Hugging Face','NeetCode','Stanford Online','LangChain','The Odin Project','roadmap.sh','100% Free','Verified Links','Updated 2026','No Piracy','Real Skills'];
const mq = document.getElementById('mq');
[...mqItems,...mqItems,...mqItems].forEach(item=>{
  const s = document.createElement('span');
  s.className = 'mq-item';
  s.innerHTML = \`<div class="mq-dot"></div>\${item}\`;
  mq.appendChild(s);
});

// Progress
window.addEventListener('scroll',()=>{
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress').style.width = (s/h*100)+'%';
});

// Fade in
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('vis'); });
},{threshold:.05});
document.querySelectorAll('.fade').forEach(el=>obs.observe(el));
<\/script>
</body>
</html>
`,Nm=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Dev Domain Guide — rk.codex</title>
<meta name="description" content="A practical guide to the best free domains for developers, creators, side projects, docs, demos, and personal brands in 2026.">
<meta name="keywords" content="free domain, developer domain, is-a.dev, github pages, personal website, free domain guide, dev tools">
<meta name="date" content="2026-04-11T09:10:00+05:30">
<meta name="category" content="Free Resources">
<meta name="theme-color" content="#16a34a">
<meta property="article:published_time" content="2026-04-11T09:10:00+05:30">
<meta property="og:image" content="/articles/free-domain-guide.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #ffffff;
  --bg2: #f8f8f7;
  --bg3: #f0efed;
  --surface: #ffffff;
  --text: #1a1916;
  --text2: #4a4845;
  --text3: #8a8784;
  --border: #e8e6e3;
  --border2: #d8d5d0;
  --accent: #16a34a;
  --accent-bg: #f0fdf4;
  --accent-border: #bbf7d0;
  --accent-text: #15803d;
  --blue: #2563eb;
  --blue-bg: #eff6ff;
  --blue-border: #bfdbfe;
  --blue-text: #1d4ed8;
  --orange: #ea580c;
  --orange-bg: #fff7ed;
  --orange-border: #fed7aa;
  --orange-text: #c2410c;
  --code-bg: #1e1e1e;
  --code-text: #d4d4d4;
  --shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
}
[data-theme="dark"] {
  --bg: #111110;
  --bg2: #1a1917;
  --bg3: #222120;
  --surface: #1a1917;
  --text: #f0ece4;
  --text2: #b0aca4;
  --text3: #706c64;
  --border: #2e2b27;
  --border2: #3e3b36;
  --accent: #22c55e;
  --accent-bg: #0f2318;
  --accent-border: #166534;
  --accent-text: #4ade80;
  --blue: #60a5fa;
  --blue-bg: #0f1f3d;
  --blue-border: #1e3a5f;
  --blue-text: #93c5fd;
  --orange: #fb923c;
  --orange-bg: #2a1505;
  --orange-border: #7c2d12;
  --orange-text: #fdba74;
  --code-bg: #0d0d0d;
  --code-text: #d4d4d4;
  --shadow: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Geist', system-ui, sans-serif;
  line-height: 1.65;
  transition: background 0.25s, color 0.25s;
}
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg2); }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 4px; }

/* NAV */
nav {
  position: sticky; top: 0; z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 0 24px; height: 52px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background 0.25s, border-color 0.25s;
}
.nav-l { display: flex; align-items: center; gap: 10px; }
.nav-brand {
  font-size: 16px; font-weight: 700;
  color: var(--text); text-decoration: none;
  letter-spacing: -0.02em;
}
.nav-brand span { color: var(--accent); }
.nav-sep { color: var(--border2); }
.nav-title {
  font-family: 'Geist Mono', monospace;
  font-size: 11px; color: var(--text3);
  letter-spacing: 0.03em;
}
.nav-r { display: flex; align-items: center; gap: 8px; }
.theme-btn {
  width: 34px; height: 20px;
  background: var(--bg3); border: 1px solid var(--border2);
  border-radius: 10px; cursor: pointer; position: relative;
  transition: background 0.25s;
}
.theme-btn::after {
  content: ''; position: absolute;
  width: 14px; height: 14px; border-radius: 50%;
  background: var(--text3); top: 2px; left: 2px;
  transition: transform 0.22s ease;
}
[data-theme="dark"] .theme-btn::after { transform: translateX(14px); background: var(--accent); }
.lang-switcher {
  display: flex; gap: 0;
  border: 1px solid var(--border2); border-radius: 6px; overflow: hidden;
}
.lang-btn {
  font-size: 11px; font-weight: 600;
  padding: 4px 10px; cursor: pointer;
  background: transparent; border: none;
  color: var(--text3); transition: all 0.2s;
  font-family: 'Geist', sans-serif;
}
.lang-btn.active { background: var(--text); color: var(--bg); }

/* HERO */
.hero {
  max-width: 720px; margin: 0 auto;
  padding: 56px 24px 40px;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
  text-transform: uppercase; padding: 4px 10px; border-radius: 4px;
  background: var(--accent-bg); color: var(--accent-text);
  border: 1px solid var(--accent-border);
  margin-bottom: 20px;
  font-family: 'Geist Mono', monospace;
}
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }
h1 {
  font-size: clamp(28px, 4.5vw, 44px);
  font-weight: 700; letter-spacing: -0.035em;
  line-height: 1.1; margin-bottom: 16px;
  color: var(--text);
}
.hero-sub {
  font-size: 17px; color: var(--text2);
  max-width: 560px; line-height: 1.7; margin-bottom: 28px;
}
.hero-demo {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 8px; padding: 10px 16px;
  font-family: 'Geist Mono', monospace;
  font-size: 14px; color: var(--text2);
  text-decoration: none; transition: border-color 0.2s, color 0.2s;
}
.hero-demo:hover { border-color: var(--accent); color: var(--accent-text); }
.hero-demo .demo-url { color: var(--accent-text); font-weight: 500; }
.hero-stats {
  display: flex; gap: 0; margin-top: 28px;
  flex-wrap: wrap;
}
.hstat {
  padding: 0 28px 0 0; border-right: 1px solid var(--border);
  margin-right: 28px;
}
.hstat:last-child { border: none; }
.hstat-n { font-size: 26px; font-weight: 700; color: var(--text); letter-spacing: -0.03em; }
.hstat-n span { color: var(--accent); }
.hstat-l { font-size: 12px; color: var(--text3); margin-top: 2px; }

/* DIVIDER */
.divider { border: none; border-top: 1px solid var(--border); margin: 0; }

/* MAIN LAYOUT */
.page-wrap { max-width: 720px; margin: 0 auto; padding: 0 24px 80px; }

/* TOC */
.toc-card {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 10px; padding: 20px 24px; margin: 36px 0;
}
.toc-label {
  font-family: 'Geist Mono', monospace;
  font-size: 10px; color: var(--text3); letter-spacing: 0.12em;
  text-transform: uppercase; margin-bottom: 12px;
}
.toc-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
.toc-list a {
  font-size: 13px; color: var(--text2); text-decoration: none;
  display: flex; align-items: center; gap: 7px;
  padding: 4px 0; transition: color 0.2s;
}
.toc-list a:hover { color: var(--accent-text); }
.toc-n { font-family: 'Geist Mono', monospace; font-size: 10px; color: var(--text3); min-width: 18px; }

/* SECTIONS */
.section { margin: 48px 0; }
.section-tag {
  font-family: 'Geist Mono', monospace;
  font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--accent-text); margin-bottom: 8px;
}
h2 {
  font-size: clamp(20px, 2.8vw, 28px); font-weight: 700;
  letter-spacing: -0.025em; margin-bottom: 14px; color: var(--text);
}
h3 {
  font-size: 17px; font-weight: 600;
  color: var(--text); margin: 24px 0 10px;
  letter-spacing: -0.01em;
}
p { font-size: 15px; color: var(--text2); margin-bottom: 14px; max-width: 660px; line-height: 1.72; }
p:last-child { margin-bottom: 0; }

/* STEP CARD */
.steps { margin: 20px 0; }
.step {
  display: grid; grid-template-columns: 40px 1fr;
  gap: 0 16px; margin-bottom: 4px;
  position: relative;
}
.step + .step .step-content { border-top: 1px solid var(--border); }
.step-left { display: flex; flex-direction: column; align-items: center; padding-top: 18px; }
.step-circle {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--bg); border: 1.5px solid var(--border2);
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; color: var(--text2);
  flex-shrink: 0; z-index: 1; transition: all 0.2s;
  font-family: 'Geist Mono', monospace;
}
.step:hover .step-circle {
  border-color: var(--accent); color: var(--accent-text);
  background: var(--accent-bg);
}
.step-line { width: 1.5px; flex: 1; background: var(--border); margin: 6px 0; }
.step:last-child .step-line { display: none; }
.step-content { padding: 18px 0 22px; }
.step-title { font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 6px; }
.step-body { font-size: 14px; color: var(--text2); line-height: 1.65; }
.step-body p { font-size: 14px; margin-bottom: 8px; }

/* CODE BLOCK */
.code-block {
  background: var(--code-bg); border-radius: 8px;
  overflow: hidden; margin: 12px 0;
}
.code-top {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 14px; border-bottom: 1px solid rgba(255,255,255,0.06);
}
.code-lang {
  font-family: 'Geist Mono', monospace;
  font-size: 10px; color: rgba(255,255,255,0.3);
  letter-spacing: 0.08em; text-transform: uppercase;
}
.copy-btn {
  font-family: 'Geist Mono', monospace;
  font-size: 10px; color: rgba(255,255,255,0.4);
  background: transparent; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px; padding: 3px 8px; cursor: pointer;
  transition: all 0.2s; letter-spacing: 0.04em;
}
.copy-btn:hover { color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.3); }
.copy-btn.done { color: #4ade80; border-color: #4ade80; }
pre { padding: 16px; overflow-x: auto; }
code {
  font-family: 'Geist Mono', monospace;
  font-size: 13px; color: var(--code-text); line-height: 1.75;
  white-space: pre;
}
.ck { color: #c586c0; }
.cs { color: #ce9178; }
.cn { color: #9cdcfe; }
.cv { color: #4ec9b0; }
.cm { color: #6a9955; }

/* INLINE CODE */
:not(pre) > code {
  font-family: 'Geist Mono', monospace;
  font-size: 12.5px; background: var(--bg3);
  color: var(--accent-text); padding: 2px 6px;
  border-radius: 4px; border: 1px solid var(--border);
}

/* CALLOUT */
.callout {
  border-radius: 8px; padding: 14px 16px; margin: 16px 0;
  display: flex; gap: 12px; align-items: flex-start;
}
.callout-icon { font-size: 15px; flex-shrink: 0; margin-top: 1px; }
.callout-text { font-size: 14px; line-height: 1.6; }
.callout.green {
  background: var(--accent-bg); border: 1px solid var(--accent-border);
}
.callout.green .callout-text { color: var(--accent-text); }
.callout.blue {
  background: var(--blue-bg); border: 1px solid var(--blue-border);
}
.callout.blue .callout-text { color: var(--blue-text); }
.callout.orange {
  background: var(--orange-bg); border: 1px solid var(--orange-border);
}
.callout.orange .callout-text { color: var(--orange-text); }

/* DOMAIN TABLE */
.domain-table {
  width: 100%; border-collapse: collapse;
  margin: 16px 0; font-size: 14px;
}
.domain-table th {
  font-family: 'Geist Mono', monospace;
  font-size: 10px; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text3);
  padding: 9px 14px; border-bottom: 1px solid var(--border);
  text-align: left; background: var(--bg2);
}
.domain-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); color: var(--text2); }
.domain-table tr:last-child td { border-bottom: none; }
.domain-table tr:hover td { background: var(--bg2); }
.domain-table .mono { font-family: 'Geist Mono', monospace; font-size: 12.5px; color: var(--accent-text); }
.table-wrap { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; margin: 16px 0; }

/* REPO LINKS */
.repo-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
.repo-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 10px; padding: 16px; text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s; display: block;
}
.repo-card:hover { border-color: var(--accent); box-shadow: var(--shadow-md); }
.repo-card-top { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.repo-icon { color: var(--text3); }
.repo-name { font-size: 13px; font-weight: 600; color: var(--text); font-family: 'Geist Mono', monospace; }
.repo-desc { font-size: 12.5px; color: var(--text3); line-height: 1.5; }
.repo-tag {
  display: inline-block; margin-top: 8px;
  font-size: 10px; font-family: 'Geist Mono', monospace;
  padding: 2px 7px; border-radius: 3px;
  background: var(--accent-bg); color: var(--accent-text);
  border: 1px solid var(--accent-border);
}

/* LANG CONTENT */
.lang-en, .lang-hi { }
.lang-hi { display: none; }
body.hindi .lang-en { display: none; }
body.hindi .lang-hi { display: block; }

/* TAG INLINE */
.tag {
  display: inline-flex; align-items: center;
  font-size: 11px; font-family: 'Geist Mono', monospace;
  padding: 2px 8px; border-radius: 4px; font-weight: 500;
}
.tag.green { background: var(--accent-bg); color: var(--accent-text); }
.tag.blue { background: var(--blue-bg); color: var(--blue-text); }
.tag.orange { background: var(--orange-bg); color: var(--orange-text); }

/* FOOTER */
footer {
  border-top: 1px solid var(--border); padding: 28px 24px;
  max-width: 720px; margin: 0 auto;
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 12px;
}
.foot-l { font-size: 13px; color: var(--text3); }
.foot-l a { color: var(--text3); text-decoration: none; }
.foot-l a:hover { color: var(--accent-text); }
.foot-r { display: flex; gap: 16px; }
.foot-r a { font-size: 13px; color: var(--text3); text-decoration: none; transition: color 0.2s; }
.foot-r a:hover { color: var(--text); }

/* SCROLL REVEAL */
.reveal {
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.shown { opacity: 1; transform: none; }

/* RESPONSIVE */
@media (max-width: 600px) {
  .toc-list { grid-template-columns: 1fr; }
  .repo-cards { grid-template-columns: 1fr; }
  .hero-stats { gap: 16px; }
  .hstat { padding-right: 16px; margin-right: 16px; }
  h1 { font-size: 26px; }
}
</style>
</head>
<body id="body">

<!-- LANGUAGE SELECT MODAL -->
<div id="lang-modal" style="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px">
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:36px;max-width:400px;width:100%;text-align:center;box-shadow:var(--shadow-md)">
    <div style="font-size:32px;margin-bottom:12px">👋</div>
    <div style="font-size:20px;font-weight:700;letter-spacing:-0.02em;color:var(--text);margin-bottom:8px">
      Choose your language
    </div>
    <div style="font-size:14px;color:var(--text3);margin-bottom:24px;line-height:1.6">
      Read the guide in English or Hinglish — your choice.<br>
      <span style="font-size:12px">आप English या Hinglish में guide पढ़ सकते हो।</span>
    </div>
    <div style="display:flex;gap:10px;justify-content:center">
      <button onclick="setLang('en')" style="flex:1;padding:13px 20px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;background:var(--text);color:var(--bg);border:none;font-family:'Geist',sans-serif;transition:opacity 0.2s" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
        English
      </button>
      <button onclick="setLang('hi')" style="flex:1;padding:13px 20px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;background:var(--accent-bg);color:var(--accent-text);border:1px solid var(--accent-border);font-family:'Geist',sans-serif;transition:all 0.2s" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
        Hinglish 🇮🇳
      </button>
    </div>
  </div>
</div>

<!-- NAV -->
<nav>
  <div class="nav-l">
    <a href="#" class="nav-brand">rk<span>.codex</span></a>
    <span class="nav-sep">/</span>
    <span class="nav-title">free-domain-guide</span>
  </div>
  <div class="nav-r">
    <div class="lang-switcher">
      <button class="lang-btn active" id="btn-en" onclick="setLang('en')">EN</button>
      <button class="lang-btn" id="btn-hi" onclick="setLang('hi')">हि</button>
    </div>
    <button class="theme-btn" id="themeBtn" aria-label="Toggle dark mode"></button>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-badge"><div class="badge-dot"></div><span>Free · Open Source · No Credit Card</span></div>

  <div class="lang-en">
    <h1>Get a free developer<br>domain in 10 minutes.</h1>
    <p class="hero-sub">No credit card. No billing. No annual fees. Just a GitHub pull request — and your custom domain is live. This guide shows you exactly how to get yours using <strong>is-a-dev</strong> and <strong>open-domains</strong>.</p>
  </div>
  <div class="lang-hi" style="display:none">
    <h1>10 minutes mein free<br>developer domain lo.</h1>
    <p class="hero-sub">Koi credit card nahi. Koi billing nahi. Koi annual fees nahi. Bas ek GitHub pull request — aur tumhara custom domain live. Yeh guide exactly batayegi kaise <strong>is-a-dev</strong> aur <strong>open-domains</strong> se apna domain milega.</p>
  </div>

  <a href="https://radhakishan404.is-a.dev" target="_blank" class="hero-demo">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    <span>Live example:</span>
    <span class="demo-url">radhakishan404.is-a.dev</span>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
  </a>

  <div class="hero-stats">
    <div class="hstat"><div class="hstat-n">₹<span>0</span></div><div class="hstat-l">Cost forever</div></div>
    <div class="hstat"><div class="hstat-n"><span>10</span> min</div><div class="hstat-l">Setup time</div></div>
    <div class="hstat"><div class="hstat-n"><span>20+</span></div><div class="hstat-l">Free domains available</div></div>
  </div>
</section>

<hr class="divider">

<main class="page-wrap">

  <!-- TOC -->
  <div class="toc-card reveal">
    <div class="toc-label">On this page</div>
    <ol class="toc-list">
      <li><a href="#what"><span class="toc-n">01</span>What are these repos?</a></li>
      <li><a href="#domains"><span class="toc-n">02</span>Available free domains</a></li>
      <li><a href="#is-a-dev"><span class="toc-n">03</span>is-a-dev setup guide</a></li>
      <li><a href="#open-domains"><span class="toc-n">04</span>open-domains setup guide</a></li>
      <li><a href="#github-pages"><span class="toc-n">05</span>Connect to GitHub Pages</a></li>
      <li><a href="#tips"><span class="toc-n">06</span>Tips & common errors</a></li>
    </ol>
  </div>

  <!-- SECTION 1 -->
  <span id="what" style="display:block;position:relative;top:-70px;visibility:hidden"></span>
  <div class="section reveal">
    <div class="section-tag">01 — Overview</div>
    <div class="lang-en">
      <h2>What are these repos?</h2>
      <p>Both <code>is-a-dev/register</code> and <code>open-domains/register</code> are open-source GitHub repositories maintained by the developer community. They let you register a free custom subdomain by submitting a simple JSON file via a GitHub pull request.</p>
      <p>No sign-up. No dashboard. No payment. You just edit a file, raise a PR, and within 24-48 hours your domain is live and pointing to your website.</p>
    </div>
    <div class="lang-hi">
      <h2>Yeh repos kya hain?</h2>
      <p>Dono <code>is-a-dev/register</code> aur <code>open-domains/register</code> open-source GitHub repositories hain jo developer community maintain karti hai. Yeh tumhe ek free custom subdomain register karne dete hain — bas ek simple JSON file GitHub pull request se submit karke.</p>
      <p>Koi sign-up nahi. Koi dashboard nahi. Koi payment nahi. Bas ek file edit karo, PR raise karo, aur 24-48 ghante mein tumhara domain live ho jaata hai.</p>
    </div>

    <div class="repo-cards">
      <a href="https://github.com/is-a-dev/register" target="_blank" class="repo-card">
        <div class="repo-card-top">
          <svg class="repo-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          <span class="repo-name">is-a-dev/register</span>
        </div>
        <div class="repo-desc">Get a .is-a.dev subdomain. Most popular. Trusted by thousands of developers worldwide.</div>
        <span class="repo-tag">Recommended</span>
      </a>
      <a href="https://github.com/open-domains/register" target="_blank" class="repo-card">
        <div class="repo-card-top">
          <svg class="repo-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          <span class="repo-name">open-domains/register</span>
        </div>
        <div class="repo-desc">More domain options — .is-cool.dev, .is-a-fullstack.dev, .is-a-designer.dev, and many more.</div>
        <span class="repo-tag">More Options</span>
      </a>
    </div>
  </div>

  <!-- SECTION 2 -->
  <span id="domains" style="display:block;position:relative;top:-70px;visibility:hidden"></span>
  <div class="section reveal">
    <div class="section-tag">02 — Available Domains</div>
    <div class="lang-en">
      <h2>What free domains can you get?</h2>
      <p>Here are some of the most popular options available. Pick the one that fits your identity as a developer.</p>
    </div>
    <div class="lang-hi">
      <h2>Kaun se free domains mil sakte hain?</h2>
      <p>Yahan kuch popular options hain. Apni developer identity ke hisaab se choose karo.</p>
    </div>

    <div class="table-wrap">
      <table class="domain-table">
        <thead>
          <tr><th>Domain</th><th>Example</th><th>Best for</th><th>Source</th></tr>
        </thead>
        <tbody>
          <tr><td class="mono">.is-a.dev</td><td class="mono">yourname.is-a.dev</td><td>Any developer</td><td><span class="tag green">is-a-dev</span></td></tr>
          <tr><td class="mono">.is-a-fullstack.dev</td><td class="mono">john.is-a-fullstack.dev</td><td>Full stack devs</td><td><span class="tag blue">open-domains</span></td></tr>
          <tr><td class="mono">.is-a-frontend.dev</td><td class="mono">alice.is-a-frontend.dev</td><td>Frontend devs</td><td><span class="tag blue">open-domains</span></td></tr>
          <tr><td class="mono">.is-a-backend.dev</td><td class="mono">raj.is-a-backend.dev</td><td>Backend devs</td><td><span class="tag blue">open-domains</span></td></tr>
          <tr><td class="mono">.is-cool.dev</td><td class="mono">priya.is-cool.dev</td><td>Any project</td><td><span class="tag blue">open-domains</span></td></tr>
          <tr><td class="mono">.is-a-designer.dev</td><td class="mono">maya.is-a-designer.dev</td><td>UI/UX designers</td><td><span class="tag blue">open-domains</span></td></tr>
          <tr><td class="mono">.is-an-engineer.dev</td><td class="mono">dev.is-an-engineer.dev</td><td>Engineers</td><td><span class="tag blue">open-domains</span></td></tr>
          <tr><td class="mono">.is-a-student.dev</td><td class="mono">neo.is-a-student.dev</td><td>Students</td><td><span class="tag blue">open-domains</span></td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout green">
      <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span class="callout-text lang-en">The creator of this guide uses <strong>radhakishan404.is-a.dev</strong> — live example you can visit right now.</span>
      <span class="callout-text lang-hi" style="display:none">Is guide ke creator ka domain hai <strong>radhakishan404.is-a.dev</strong> — abhi visit kar sakte ho.</span>
    </div>
  </div>

  <!-- SECTION 3 — IS-A-DEV -->
  <span id="is-a-dev" style="display:block;position:relative;top:-70px;visibility:hidden"></span>
  <div class="section reveal">
    <div class="section-tag">03 — is-a-dev Setup Guide</div>
    <div class="lang-en"><h2>How to get your .is-a.dev domain</h2><p>Follow these 6 steps exactly. Takes about 10 minutes to set up. Review takes 24–48 hours.</p></div>
    <div class="lang-hi"><h2>Apna .is-a.dev domain kaise lo</h2><p>Yeh 6 steps exactly follow karo. Setup mein lagbhag 10 minutes lagte hain. Review mein 24–48 ghante lagte hain.</p></div>

    <div class="steps">

      <div class="step">
        <div class="step-left"><div class="step-circle">1</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Fork the repository</div>
          <div class="step-title lang-hi" style="display:none">Repository fork karo</div>
          <div class="step-body">
            <p class="lang-en">Go to <a href="https://github.com/is-a-dev/register" target="_blank" style="color:var(--accent-text)">github.com/is-a-dev/register</a> and click the <strong>Fork</strong> button in the top-right corner. This creates a copy of the repo in your own GitHub account. Make sure you are logged into your GitHub account first.</p>
            <p class="lang-hi" style="display:none"><a href="https://github.com/is-a-dev/register" target="_blank" style="color:var(--accent-text)">github.com/is-a-dev/register</a> pe jao aur top-right corner mein <strong>Fork</strong> button click karo. Yeh repo ki ek copy tumhare GitHub account mein bana deta hai. Pehle apne GitHub account mein login karo.</p>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">2</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Go to the domains/ folder</div>
          <div class="step-title lang-hi" style="display:none">domains/ folder mein jao</div>
          <div class="step-body">
            <p class="lang-en">In your forked repo, open the <code>domains/</code> folder. This is where all registered domain files live. Click <strong>Add file → Create new file</strong>.</p>
            <p class="lang-hi" style="display:none">Apne forked repo mein <code>domains/</code> folder open karo. Yahan sab registered domain files rehti hain. <strong>Add file → Create new file</strong> click karo.</p>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">3</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Name your file correctly</div>
          <div class="step-title lang-hi" style="display:none">File ka naam sahi rakho</div>
          <div class="step-body">
            <p class="lang-en">The file name becomes your subdomain. If you want <code>yourname.is-a.dev</code>, name the file <code>yourname.json</code>. Use only lowercase letters, numbers, and hyphens. No spaces.</p>
            <p class="lang-hi" style="display:none">File ka naam hi tumhara subdomain banega. Agar tumhe <code>yourname.is-a.dev</code> chahiye, toh file ka naam <code>yourname.json</code> rakho. Sirf lowercase letters, numbers, aur hyphens use karo. Spaces nahi.</p>
            <div class="callout orange">
              <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span class="callout-text lang-en">Check first if your desired subdomain is already taken by searching in the domains/ folder.</span>
              <span class="callout-text lang-hi" style="display:none">Pehle check karo ki tumhara chahuta subdomain already liya gaya hai ya nahi — domains/ folder mein search karo.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">4</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Add your JSON content</div>
          <div class="step-title lang-hi" style="display:none">JSON content add karo</div>
          <div class="step-body">
            <p class="lang-en">Paste the following JSON into your new file. Replace all placeholder values with your own details.</p>
            <p class="lang-hi" style="display:none">Yeh JSON niche di gayi file mein paste karo. Sab placeholder values apni details se replace karo.</p>

            <div class="code-block">
              <div class="code-top">
                <span class="code-lang">yourname.json</span>
                <button class="copy-btn" onclick="copyCode(this, 'iad-json')">Copy</button>
              </div>
              <pre><code id="iad-json">{
  <span class="cs">"description"</span>: <span class="cn">"Your name — Developer Portfolio"</span>,
  <span class="cs">"repo"</span>: <span class="cn">"https://github.com/yourusername/yourrepo"</span>,
  <span class="cs">"owner"</span>: {
    <span class="cs">"username"</span>: <span class="cn">"yourgithubusername"</span>,
    <span class="cs">"email"</span>: <span class="cn">"your@email.com"</span>
  },
  <span class="cs">"record"</span>: {
    <span class="cs">"CNAME"</span>: <span class="cn">"yourgithubusername.github.io"</span>
  }
}</code></pre>
            </div>

            <div class="callout blue">
              <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <div>
                <span class="callout-text lang-en"><strong>CNAME</strong> is for GitHub Pages sites. If your site is on Vercel or Netlify, the CNAME value will be different — check their custom domain docs for the exact value.</span>
                <span class="callout-text lang-hi" style="display:none"><strong>CNAME</strong> GitHub Pages sites ke liye hai. Agar tumhari site Vercel ya Netlify pe hai, toh CNAME value alag hogi — unke custom domain docs check karo exact value ke liye.</span>
              </div>
            </div>

            <h3 class="lang-en" style="margin-top:16px;font-size:14px">Using Vercel instead of GitHub Pages?</h3>
            <h3 class="lang-hi" style="display:none;margin-top:16px;font-size:14px">GitHub Pages ki jagah Vercel use kar rahe ho?</h3>
            <div class="code-block">
              <div class="code-top">
                <span class="code-lang">for vercel</span>
                <button class="copy-btn" onclick="copyCode(this, 'vercel-json')">Copy</button>
              </div>
              <pre><code id="vercel-json">{
  <span class="cs">"description"</span>: <span class="cn">"Your name — Portfolio"</span>,
  <span class="cs">"repo"</span>: <span class="cn">"https://github.com/yourusername/yourrepo"</span>,
  <span class="cs">"owner"</span>: {
    <span class="cs">"username"</span>: <span class="cn">"yourgithubusername"</span>,
    <span class="cs">"email"</span>: <span class="cn">"your@email.com"</span>
  },
  <span class="cs">"record"</span>: {
    <span class="cs">"CNAME"</span>: <span class="cn">"cname.vercel-dns.com"</span>
  }
}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">5</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Commit and open a Pull Request</div>
          <div class="step-title lang-hi" style="display:none">Commit karo aur Pull Request open karo</div>
          <div class="step-body">
            <p class="lang-en">Scroll down and click <strong>Commit new file</strong>. Then GitHub will show a prompt — click <strong>Open Pull Request</strong>. Add a clear title like: <em>"Register yourname.is-a.dev for my portfolio"</em>. Then click <strong>Create pull request</strong>.</p>
            <p class="lang-hi" style="display:none">Scroll down karo aur <strong>Commit new file</strong> click karo. Phir GitHub ek prompt dikhayega — <strong>Open Pull Request</strong> click karo. Ek clear title add karo jaise: <em>"Register yourname.is-a.dev for my portfolio"</em>. Phir <strong>Create pull request</strong> click karo.</p>
            <div class="callout orange">
              <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span class="callout-text lang-en"><strong>Important:</strong> The is-a-dev team warns against AI-generated PRs. Write your PR description yourself in simple English. Say what your site is about and why you want this domain.</span>
              <span class="callout-text lang-hi" style="display:none"><strong>Important:</strong> is-a-dev team AI-generated PRs accept nahi karte. Apna PR description khud likho simple English mein. Batao tumhari site kiske baare mein hai aur yeh domain kyun chahiye.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">6</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Wait for review and go live</div>
          <div class="step-title lang-hi" style="display:none">Review ka wait karo aur live ho jao</div>
          <div class="step-body">
            <p class="lang-en">Maintainers review your PR within 24–48 hours. If changes are requested, make them quickly. Once your PR is merged, your DNS records go live within a few minutes. Your domain is ready.</p>
            <p class="lang-hi" style="display:none">Maintainers tumhara PR 24–48 ghante mein review karte hain. Agar changes request kiye gaye, unhe jaldi karo. Ek baar PR merge ho jaata hai, tumhare DNS records kuch minutes mein live ho jaate hain. Tumhara domain ready hai.</p>
            <div class="callout green">
              <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span class="callout-text lang-en">After merge, go to your GitHub Pages repo → Settings → Pages → Custom domain, add your new domain, and enable Enforce HTTPS.</span>
              <span class="callout-text lang-hi" style="display:none">Merge ke baad, apne GitHub Pages repo mein jao → Settings → Pages → Custom domain, apna naya domain add karo aur Enforce HTTPS enable karo.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- SECTION 4 — OPEN-DOMAINS -->
  <span id="open-domains" style="display:block;position:relative;top:-70px;visibility:hidden"></span>
  <div class="section reveal">
    <div class="section-tag">04 — open-domains Setup Guide</div>
    <div class="lang-en"><h2>How to get an open-domains subdomain</h2><p>The process is almost identical to is-a-dev. The main difference is the repo URL and the available domain extensions.</p></div>
    <div class="lang-hi"><h2>open-domains subdomain kaise lo</h2><p>Process almost is-a-dev jaisi hi hai. Main difference repo URL aur available domain extensions hain.</p></div>

    <div class="steps">
      <div class="step">
        <div class="step-left"><div class="step-circle">1</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Fork open-domains/register</div>
          <div class="step-title lang-hi" style="display:none">open-domains/register fork karo</div>
          <div class="step-body">
            <p class="lang-en">Go to <a href="https://github.com/open-domains/register" target="_blank" style="color:var(--accent-text)">github.com/open-domains/register</a> and click Fork. Same as before.</p>
            <p class="lang-hi" style="display:none"><a href="https://github.com/open-domains/register" target="_blank" style="color:var(--accent-text)">github.com/open-domains/register</a> pe jao aur Fork click karo. Pehle jaisa hi.</p>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">2</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Choose your domain type and create the file</div>
          <div class="step-title lang-hi" style="display:none">Domain type choose karo aur file banao</div>
          <div class="step-body">
            <p class="lang-en">In the forked repo, navigate to <code>domains/is-cool.dev/</code> (or whichever domain type you want). Create a new file named <code>yourname.json</code> inside that folder.</p>
            <p class="lang-hi" style="display:none">Forked repo mein <code>domains/is-cool.dev/</code> folder mein jao (ya jo bhi domain type tumhe chahiye). Uss folder ke andar <code>yourname.json</code> naam ki naye file banao.</p>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">3</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Add the JSON — same format</div>
          <div class="step-title lang-hi" style="display:none">JSON add karo — same format</div>
          <div class="step-body">
            <p class="lang-en">The JSON structure is the same as is-a-dev. Copy the template from step 4 above and update your details.</p>
            <p class="lang-hi" style="display:none">JSON structure is-a-dev jaisi hi hai. Upar step 4 ka template copy karo aur apni details update karo.</p>
            <div class="code-block">
              <div class="code-top">
                <span class="code-lang">yourname.json</span>
                <button class="copy-btn" onclick="copyCode(this, 'od-json')">Copy</button>
              </div>
              <pre><code id="od-json">{
  <span class="cs">"description"</span>: <span class="cn">"Your name — Developer Portfolio"</span>,
  <span class="cs">"repo"</span>: <span class="cn">"https://github.com/yourusername/yourrepo"</span>,
  <span class="cs">"owner"</span>: {
    <span class="cs">"username"</span>: <span class="cn">"yourgithubusername"</span>,
    <span class="cs">"email"</span>: <span class="cn">"your@email.com"</span>
  },
  <span class="cs">"records"</span>: {
    <span class="cs">"CNAME"</span>: <span class="cn">"yourgithubusername.github.io"</span>
  }
}</code></pre>
            </div>
            <div class="callout blue">
              <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span class="callout-text lang-en">Note: open-domains uses <code>"records"</code> (plural) while is-a-dev uses <code>"record"</code> (singular). Don't mix them up.</span>
              <span class="callout-text lang-hi" style="display:none">Note: open-domains mein <code>"records"</code> (plural) hai jabki is-a-dev mein <code>"record"</code> (singular) hai. Inhe mix mat karo.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">4</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Commit and raise a Pull Request</div>
          <div class="step-title lang-hi" style="display:none">Commit karo aur Pull Request raise karo</div>
          <div class="step-body">
            <p class="lang-en">Same as is-a-dev — commit the file, then open a pull request with a clear description of your site. Wait for the maintainers to review and merge.</p>
            <p class="lang-hi" style="display:none">is-a-dev jaisa hi — file commit karo, phir apni site ki clear description ke saath pull request open karo. Maintainers ke review aur merge ka wait karo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 5 — GITHUB PAGES -->
  <span id="github-pages" style="display:block;position:relative;top:-70px;visibility:hidden"></span>
  <div class="section reveal">
    <div class="section-tag">05 — Connecting to GitHub Pages</div>
    <div class="lang-en"><h2>Connect your new domain to your site</h2><p>Once your PR is merged, do these steps to make your domain actually point to your website.</p></div>
    <div class="lang-hi"><h2>Apna naya domain site se connect karo</h2><p>Ek baar PR merge ho jaaye, yeh steps karo taaki tumhara domain actually tumhari website pe point kare.</p></div>

    <div class="steps">
      <div class="step">
        <div class="step-left"><div class="step-circle">1</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Go to your GitHub Pages repository settings</div>
          <div class="step-title lang-hi" style="display:none">Apne GitHub Pages repository settings mein jao</div>
          <div class="step-body">
            <p class="lang-en">Open your portfolio repo on GitHub. Click <strong>Settings</strong> in the top menu bar. Scroll down to the <strong>Pages</strong> section in the left sidebar.</p>
            <p class="lang-hi" style="display:none">Apna portfolio repo GitHub pe open karo. Top menu bar mein <strong>Settings</strong> click karo. Left sidebar mein <strong>Pages</strong> section tak scroll karo.</p>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">2</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Add your custom domain</div>
          <div class="step-title lang-hi" style="display:none">Custom domain add karo</div>
          <div class="step-body">
            <p class="lang-en">In the <strong>Custom domain</strong> field, type your new domain (e.g. <code>yourname.is-a.dev</code>) and click <strong>Save</strong>. GitHub will verify it automatically — this takes a minute or two.</p>
            <p class="lang-hi" style="display:none"><strong>Custom domain</strong> field mein apna naya domain type karo (jaise <code>yourname.is-a.dev</code>) aur <strong>Save</strong> click karo. GitHub automatically verify karega — isme ek-do minute lagte hain.</p>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-left"><div class="step-circle">3</div><div class="step-line"></div></div>
        <div class="step-content">
          <div class="step-title lang-en">Enable HTTPS</div>
          <div class="step-title lang-hi" style="display:none">HTTPS enable karo</div>
          <div class="step-body">
            <p class="lang-en">Once verification is complete, tick the <strong>Enforce HTTPS</strong> checkbox below the custom domain input. Your site now loads on HTTPS — secure and professional.</p>
            <p class="lang-hi" style="display:none">Verification complete hone ke baad, custom domain input ke neeche <strong>Enforce HTTPS</strong> checkbox tick karo. Tumhari site ab HTTPS pe load hogi — secure aur professional.</p>
            <div class="callout green">
              <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span class="callout-text lang-en">Your site is now live at <code>yourname.is-a.dev</code>. DNS can take up to a few hours to propagate globally — if you see a 404, wait and try again.</span>
              <span class="callout-text lang-hi" style="display:none">Tumhari site ab <code>yourname.is-a.dev</code> pe live hai. DNS globally propagate hone mein kuch ghante lag sakte hain — agar 404 dikhaye, wait karo aur dobara try karo.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 6 — TIPS -->
  <span id="tips" style="display:block;position:relative;top:-70px;visibility:hidden"></span>
  <div class="section reveal">
    <div class="section-tag">06 — Tips & Common Errors</div>
    <div class="lang-en"><h2>Things to keep in mind</h2></div>
    <div class="lang-hi"><h2>Kuch important baatein</h2></div>

    <h3 class="lang-en">Common mistakes to avoid</h3>
    <h3 class="lang-hi" style="display:none">Common mistakes jo avoid karne chahiye</h3>

    <div class="callout orange" style="margin-bottom:10px">
      <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <span class="callout-text lang-en"><strong>Don't use AI to generate your PR.</strong> The is-a-dev team explicitly warns about this and will reject or block AI-generated pull requests. Write it yourself.</span>
        <span class="callout-text lang-hi" style="display:none"><strong>PR generate karne ke liye AI mat use karo.</strong> is-a-dev team explicitly iske baare mein warn karti hai aur AI-generated pull requests reject ya block kar deti hai. Khud likho.</span>
      </div>
    </div>

    <div class="callout orange" style="margin-bottom:10px">
      <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <span class="callout-text lang-en"><strong>Your site must have content.</strong> Empty pages or "coming soon" pages will be rejected. Your portfolio should have something real — even a basic page works.</span>
        <span class="callout-text lang-hi" style="display:none"><strong>Tumhari site mein content hona chahiye.</strong> Empty pages ya "coming soon" pages reject ho jaate hain. Tumhara portfolio mein kuch real hona chahiye — even basic page bhi kaam karta hai.</span>
      </div>
    </div>

    <div class="callout orange" style="margin-bottom:20px">
      <svg class="callout-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <span class="callout-text lang-en"><strong>Don't use Netlify with is-a-dev.</strong> open-domains also has issues with Netlify subdomain verification. Use GitHub Pages or Vercel instead.</span>
        <span class="callout-text lang-hi" style="display:none"><strong>is-a-dev ke saath Netlify mat use karo.</strong> open-domains ko bhi Netlify subdomain verification mein issues hain. GitHub Pages ya Vercel use karo.</span>
      </div>
    </div>

    <h3 class="lang-en">Quick answers</h3>
    <h3 class="lang-hi" style="display:none">Quick answers</h3>

    <div style="display:flex;flex-direction:column;gap:12px;margin-top:4px">
      <div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:14px 16px">
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px" class="lang-en">How long does approval take?</div>
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px;display:none" class="lang-hi">Approval mein kitna time lagta hai?</div>
        <div style="font-size:13.5px;color:var(--text2)" class="lang-en">Usually 24–48 hours. Keep an eye on your PR for review comments and respond quickly if changes are requested.</div>
        <div style="font-size:13.5px;color:var(--text2);display:none" class="lang-hi">Usually 24–48 ghante. Apna PR review comments ke liye dekhte raho aur agar changes request hue toh jaldi respond karo.</div>
      </div>
      <div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:14px 16px">
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px" class="lang-en">Is it really free forever?</div>
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px;display:none" class="lang-hi">Kya yeh sach mein hamesha ke liye free hai?</div>
        <div style="font-size:13.5px;color:var(--text2)" class="lang-en">Yes. Both repos are community-maintained and free. is-a-dev is sponsored by Cloudflare's Project Alexandria, so it's stable and well-supported.</div>
        <div style="font-size:13.5px;color:var(--text2);display:none" class="lang-hi">Haan. Dono repos community-maintained aur free hain. is-a-dev Cloudflare ke Project Alexandria se sponsored hai, toh stable aur well-supported hai.</div>
      </div>
      <div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:14px 16px">
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px" class="lang-en">Can I update or delete my domain later?</div>
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px;display:none" class="lang-hi">Kya main baad mein domain update ya delete kar sakta hoon?</div>
        <div style="font-size:13.5px;color:var(--text2)" class="lang-en">Yes. To update — edit your JSON file in the domains/ folder via another PR. To delete — delete the file via a PR with a note explaining why.</div>
        <div style="font-size:13.5px;color:var(--text2);display:none" class="lang-hi">Haan. Update karne ke liye — domains/ folder mein apni JSON file another PR se edit karo. Delete karne ke liye — ek PR se file delete karo aur reason explain karo.</div>
      </div>
      <div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:14px 16px">
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px" class="lang-en">I see a 404 after my PR was merged. What do I do?</div>
        <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px;display:none" class="lang-hi">PR merge hone ke baad 404 aa raha hai. Kya karoon?</div>
        <div style="font-size:13.5px;color:var(--text2)" class="lang-en">Go to your portfolio repo → Settings → Pages → Custom Domain. Add your domain there and enable Enforce HTTPS. DNS propagation can also take a few hours — wait and try again.</div>
        <div style="font-size:13.5px;color:var(--text2);display:none" class="lang-hi">Apne portfolio repo mein jao → Settings → Pages → Custom Domain. Wahan apna domain add karo aur Enforce HTTPS enable karo. DNS propagation mein kuch ghante lag sakte hain — wait karo aur dobara try karo.</div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="reveal" style="background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:32px;text-align:center;margin:48px 0 0">
    <div style="font-size:22px;font-weight:700;letter-spacing:-0.025em;color:var(--text);margin-bottom:8px" class="lang-en">Got stuck somewhere?</div>
    <div style="font-size:22px;font-weight:700;letter-spacing:-0.025em;color:var(--text);margin-bottom:8px;display:none" class="lang-hi">Kahin atak gaye?</div>
    <div style="font-size:14px;color:var(--text3);margin-bottom:20px" class="lang-en">Comment "DEV" on the Instagram post and I'll help you set this up personally.</div>
    <div style="font-size:14px;color:var(--text3);margin-bottom:20px;display:none" class="lang-hi">Instagram post pe "DEV" comment karo aur main personally help karunga.</div>
    <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
      <a href="https://instagram.com/rk.codex" target="_blank" style="display:inline-flex;align-items:center;gap:7px;background:var(--text);color:var(--bg);padding:11px 22px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;transition:opacity 0.2s" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        @rk.codex
      </a>
      <a href="https://github.com/is-a-dev/register" target="_blank" style="display:inline-flex;align-items:center;gap:7px;background:var(--accent-bg);color:var(--accent-text);padding:11px 22px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--accent-border);transition:opacity 0.2s" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        Open is-a-dev
      </a>
    </div>
  </div>

</main>

<footer>
  <div class="foot-l">Made by <a href="https://instagram.com/rk.codex">@rk.codex</a> · <a href="https://radhakishan404.is-a.dev" target="_blank">radhakishan404.is-a.dev</a></div>
  <div class="foot-r">
    <a href="https://github.com/is-a-dev/register" target="_blank">is-a-dev</a>
    <a href="https://github.com/open-domains/register" target="_blank">open-domains</a>
    <a href="https://instagram.com/rk.codex" target="_blank">Instagram</a>
  </div>
</footer>

<script>
const body = document.getElementById('body');
const html = document.documentElement;

function setLang(lang) {
  const modal = document.getElementById('lang-modal');
  if(modal) modal.style.display = 'none';
  if(lang === 'hi') {
    body.classList.add('hindi');
    document.querySelectorAll('.lang-hi').forEach(el => el.style.display = '');
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById('btn-hi').classList.add('active');
  } else {
    body.classList.remove('hindi');
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = '');
    document.querySelectorAll('.lang-hi').forEach(el => el.style.display = 'none');
    document.getElementById('btn-en').classList.add('active');
    document.getElementById('btn-hi').classList.remove('active');
  }
  localStorage.setItem('rk-lang', lang);
}

document.getElementById('themeBtn').addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('rk-theme', isDark ? 'light' : 'dark');
});

function copyCode(btn, id) {
  const el = document.getElementById(id);
  const text = el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('done');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 2000);
  });
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('shown'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('rk-theme');
  if(savedTheme) html.setAttribute('data-theme', savedTheme);
  else if(window.matchMedia('(prefers-color-scheme: dark)').matches) html.setAttribute('data-theme', 'dark');
  const savedLang = localStorage.getItem('rk-lang');
  if(savedLang) { setLang(savedLang); }
});
<\/script>
</body>
</html>
`,Dm=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Google Gemma — Complete Guide | rk.codex</title>
<meta property="og:image" content="/rk-images/black-suit-looking-down.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0a;
    --surface: #111111;
    --surface2: #1a1a1a;
    --border: #2a2a2a;
    --text: #f0ede8;
    --muted: #888880;
    --accent: #b5f23d;
    --accent2: #3df2c8;
    --accent3: #f2923d;
    --google-blue: #4285f4;
    --google-red: #ea4335;
    --google-yellow: #fbbc04;
    --google-green: #34a853;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Lora', Georgia, serif;
    line-height: 1.75;
    overflow-x: hidden;
  }

  /* NOISE TEXTURE */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }

  /* NAVBAR */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 48px;
    background: rgba(10,10,10,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 18px;
    color: var(--accent);
    text-decoration: none;
    letter-spacing: -0.02em;
  }

  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }

  .nav-links a {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--accent); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 48px 80px;
    position: relative;
    overflow: hidden;
  }

  .hero-tag {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid var(--accent);
    display: inline-block;
    padding: 6px 14px;
    border-radius: 2px;
    margin-bottom: 32px;
    width: fit-content;
  }

  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(52px, 8vw, 110px);
    line-height: 0.9;
    letter-spacing: -0.04em;
    margin-bottom: 32px;
    max-width: 900px;
  }

  .hero h1 .g { color: var(--google-blue); }
  .hero h1 .e { color: var(--google-red); }
  .hero h1 .m { color: var(--google-yellow); }
  .hero h1 .m2 { color: var(--google-blue); }
  .hero h1 .a { color: var(--google-green); }
  .hero h1 .rest { color: var(--text); }

  .hero-sub {
    font-size: 20px;
    color: var(--muted);
    max-width: 600px;
    margin-bottom: 48px;
    font-style: italic;
  }

  .hero-meta {
    display: flex;
    gap: 40px;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: var(--muted);
  }

  .hero-meta span strong {
    display: block;
    color: var(--text);
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .hero-glow {
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(66,133,244,0.08) 0%, transparent 70%);
    top: -100px; right: -200px;
    pointer-events: none;
  }

  /* TOC */
  .toc-section {
    padding: 0 48px 80px;
    position: relative;
    z-index: 1;
  }

  .toc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 12px;
    margin-top: 32px;
  }

  .toc-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 16px 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: border-color 0.2s, background 0.2s;
  }
  .toc-item:hover {
    border-color: var(--accent);
    background: var(--surface2);
  }

  .toc-num {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--accent);
    min-width: 24px;
  }

  .toc-label {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
  }

  /* SECTIONS */
  .section {
    padding: 80px 48px;
    border-top: 1px solid var(--border);
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-tag {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
  }

  h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 32px;
    color: var(--text);
  }

  h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--text);
    margin: 36px 0 14px;
  }

  p {
    font-size: 17px;
    color: #c8c4bc;
    margin-bottom: 20px;
    max-width: 740px;
  }

  /* HIGHLIGHT BOX */
  .highlight-box {
    background: var(--surface);
    border-left: 3px solid var(--accent);
    border-radius: 0 8px 8px 0;
    padding: 24px 28px;
    margin: 32px 0;
  }

  .highlight-box p { margin: 0; color: var(--text); font-size: 16px; }

  /* CARDS GRID */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    margin: 32px 0;
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    transition: border-color 0.25s, transform 0.25s;
  }
  .card:hover { border-color: var(--accent); transform: translateY(-3px); }

  .card-icon {
    font-size: 28px;
    margin-bottom: 14px;
    display: block;
  }

  .card h4 {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 8px;
  }

  .card p {
    font-size: 14px;
    color: var(--muted);
    margin: 0;
  }

  /* COMPARISON TABLE */
  .compare-table {
    width: 100%;
    border-collapse: collapse;
    margin: 32px 0;
    font-size: 15px;
  }

  .compare-table th {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 14px 20px;
    border-bottom: 1px solid var(--border);
    text-align: left;
  }

  .compare-table td {
    padding: 14px 20px;
    border-bottom: 1px solid var(--border);
    color: #c8c4bc;
    vertical-align: top;
  }

  .compare-table tr:last-child td { border-bottom: none; }
  .compare-table tr:hover td { background: var(--surface); }

  .badge-yes {
    background: rgba(181,242,61,0.12);
    color: var(--accent);
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 3px;
    display: inline-block;
  }

  .badge-no {
    background: rgba(242,146,61,0.12);
    color: var(--accent3);
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 3px;
    display: inline-block;
  }

  /* CODE BLOCK */
  .code-block {
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 10px;
    padding: 24px 28px;
    margin: 24px 0;
    overflow-x: auto;
    position: relative;
  }

  .code-block-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .code-block-label::before {
    content: '';
    display: inline-block;
    width: 8px; height: 8px;
    background: var(--accent);
    border-radius: 50%;
  }

  .code-block pre {
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    color: #e6edf3;
    line-height: 1.8;
    white-space: pre-wrap;
  }

  .code-block .cm { color: #8b949e; }
  .code-block .ck { color: #ff7b72; }
  .code-block .cs { color: #a5d6ff; }
  .code-block .cv { color: #79c0ff; }
  .code-block .cn { color: var(--accent); }

  /* STEPS */
  .steps { margin: 32px 0; }

  .step {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
    position: relative;
  }

  .step::after {
    content: '';
    position: absolute;
    left: 19px; top: 44px;
    width: 2px;
    height: calc(100% + 8px);
    background: var(--border);
  }
  .step:last-child::after { display: none; }

  .step-circle {
    min-width: 40px; height: 40px;
    border-radius: 50%;
    background: var(--accent);
    color: #0a0a0a;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .step-content h4 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: var(--text);
    margin-bottom: 6px;
    margin-top: 8px;
  }

  .step-content p { font-size: 15px; color: var(--muted); margin: 0; max-width: 600px; }

  /* MODELS TABLE */
  .models-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 14px;
    margin: 32px 0;
  }

  .model-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: border-color 0.2s;
  }
  .model-card:hover { border-color: var(--accent2); }

  .model-size {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 36px;
    color: var(--accent2);
    margin-bottom: 4px;
  }

  .model-name {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  .model-tag {
    font-size: 12px;
    color: #c8c4bc;
    line-height: 1.4;
  }

  /* YOUTUBE SECTION */
  .yt-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    margin: 32px 0;
  }

  .yt-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    display: block;
    transition: border-color 0.25s, transform 0.25s;
  }
  .yt-card:hover { border-color: #ff0000; transform: translateY(-4px); }

  .yt-thumb {
    width: 100%;
    aspect-ratio: 16/9;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .yt-play {
    width: 52px; height: 52px;
    background: #ff0000;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: transform 0.2s;
  }
  .yt-card:hover .yt-play { transform: scale(1.1); }

  .yt-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #ff0000;
    position: absolute;
    top: 10px; left: 10px;
    background: rgba(0,0,0,0.7);
    padding: 3px 8px;
    border-radius: 3px;
  }

  .yt-info {
    padding: 16px 18px;
  }

  .yt-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--text);
    margin-bottom: 6px;
    line-height: 1.4;
  }

  .yt-channel {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: var(--muted);
  }

  /* USE CASES */
  .usecase-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 32px 0;
  }

  .usecase-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 18px 20px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }

  .usecase-icon {
    font-size: 22px;
    min-width: 32px;
  }

  .usecase-item h5 {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 4px;
  }

  .usecase-item p {
    font-size: 13px;
    color: var(--muted);
    margin: 0;
  }

  /* CALLOUT */
  .callout {
    background: linear-gradient(135deg, rgba(181,242,61,0.06) 0%, rgba(61,242,200,0.06) 100%);
    border: 1px solid rgba(181,242,61,0.2);
    border-radius: 12px;
    padding: 32px;
    margin: 40px 0;
    text-align: center;
  }

  .callout h3 { margin-top: 0; font-size: 28px; }
  .callout p { max-width: 100%; color: var(--muted); margin-bottom: 0; }

  /* INLINE CODE */
  code {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    background: var(--surface2);
    color: var(--accent);
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid var(--border);
  }

  /* DIVIDER */
  .divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 0;
  }

  /* FOOTER */
  footer {
    background: var(--surface);
    border-top: 1px solid var(--border);
    padding: 48px;
    text-align: center;
  }

  .footer-brand {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: var(--accent);
    margin-bottom: 8px;
  }

  .footer-sub {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: var(--muted);
    margin-bottom: 24px;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    list-style: none;
    margin-bottom: 32px;
  }

  .footer-links a {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-links a:hover { color: var(--accent); }

  .footer-copy {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #444;
  }

  /* PROGRESS BAR */
  .progress-bar {
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    background: var(--accent);
    z-index: 200;
    transition: width 0.1s;
  }

  /* SECTION DIVIDER LABEL */
  .full-divider {
    border-top: 1px solid var(--border);
    position: relative;
  }

  /* ANIMATE IN */
  .fade-in {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    nav { padding: 14px 20px; }
    .nav-links { display: none; }
    .hero, .section, .toc-section { padding-left: 20px; padding-right: 20px; }
    .usecase-list { grid-template-columns: 1fr; }
    .hero-meta { gap: 24px; flex-wrap: wrap; }
    footer { padding: 32px 20px; }
    .footer-links { flex-wrap: wrap; gap: 16px; }
  }
</style>
</head>
<body>

<div class="progress-bar" id="progress"></div>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">rk.codex</a>
  <ul class="nav-links">
    <li><a href="#what">What is Gemma</a></li>
    <li><a href="#models">Models</a></li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#usecases">Use Cases</a></li>
    <li><a href="#videos">Videos</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-glow"></div>
  <div class="hero-tag">Complete Deep-Dive Guide · 2026</div>
  <h1>
    <span class="g">G</span><span class="e">E</span><span class="m">M</span><span class="m2">M</span><span class="a">A</span><br>
    <span class="rest">BY GOOGLE.</span>
  </h1>
  <p class="hero-sub">Everything you need to know — from zero to building real AI apps. No fluff. No paid courses. Just the truth.</p>
  <div class="hero-meta">
    <span><strong>Free</strong>Open Source</span>
    <span><strong>Runs Locally</strong>No API Cost</span>
    <span><strong>2B–27B</strong>Model Sizes</span>
    <span><strong>2026</strong>Latest Version</span>
  </div>
</section>

<!-- TABLE OF CONTENTS -->
<div class="toc-section">
  <p class="section-tag">What's Inside</p>
  <div class="toc-grid">
    <a href="#what" class="toc-item"><span class="toc-num">01</span><span class="toc-label">What is Gemma?</span></a>
    <a href="#why" class="toc-item"><span class="toc-num">02</span><span class="toc-label">Why Use Gemma?</span></a>
    <a href="#models" class="toc-item"><span class="toc-num">03</span><span class="toc-label">Gemma Model Sizes</span></a>
    <a href="#vs" class="toc-item"><span class="toc-num">04</span><span class="toc-label">Gemma vs Others</span></a>
    <a href="#setup" class="toc-item"><span class="toc-num">05</span><span class="toc-label">Complete Setup Guide</span></a>
    <a href="#prompting" class="toc-item"><span class="toc-num">06</span><span class="toc-label">How to Prompt Gemma</span></a>
    <a href="#usecases" class="toc-item"><span class="toc-num">07</span><span class="toc-label">Real Use Cases</span></a>
    <a href="#projects" class="toc-item"><span class="toc-num">08</span><span class="toc-label">Project Ideas</span></a>
    <a href="#videos" class="toc-item"><span class="toc-num">09</span><span class="toc-label">YouTube Resources</span></a>
    <a href="#faq" class="toc-item"><span class="toc-num">10</span><span class="toc-label">FAQ</span></a>
  </div>
</div>

<hr class="divider">

<!-- SECTION 1: WHAT IS GEMMA -->
<section class="section fade-in" id="what">
  <p class="section-tag">01 — Introduction</p>
  <h2>What Exactly is Google Gemma?</h2>
  <p>Gemma is a family of <strong style="color:var(--text)">open-source, lightweight AI models</strong> built by Google DeepMind. Released in early 2024 and updated through 2025–2026, Gemma gives developers and researchers direct access to powerful AI models they can run, modify, and deploy — completely for free.</p>
  <p>Think of it as Google giving you a mini version of the same AI technology that powers Gemini — but one you can run on your own laptop, phone, or server without paying anyone a single rupee.</p>

  <div class="highlight-box">
    <p>🔑 <strong>The simplest way to understand Gemma:</strong> It's like having your own private ChatGPT that lives on your computer. No internet. No subscription. No data sharing. Just you and a powerful AI model.</p>
  </div>

  <h3>Where does Gemma come from?</h3>
  <p>Gemma is built by <strong style="color:var(--text)">Google DeepMind</strong> — the same team behind Gemini (Google's most powerful AI). Gemma uses the same research, architecture, and training techniques as Gemini, but it's scaled down to run efficiently on consumer-grade hardware.</p>
  <p>It's released under an open license — meaning developers, students, and companies can use it for both personal and commercial projects without any licensing fees.</p>

  <div class="cards-grid">
    <div class="card">
      <span class="card-icon">🏗️</span>
      <h4>Built on Gemini Technology</h4>
      <p>Same research and architecture as Google's flagship Gemini model — just smaller and open.</p>
    </div>
    <div class="card">
      <span class="card-icon">🔓</span>
      <h4>Truly Open Source</h4>
      <p>Download, modify, fine-tune, and deploy. No hidden restrictions. No API gateway.</p>
    </div>
    <div class="card">
      <span class="card-icon">💻</span>
      <h4>Runs on Consumer Hardware</h4>
      <p>Gemma 2B runs on a basic laptop. No need for expensive cloud GPUs.</p>
    </div>
    <div class="card">
      <span class="card-icon">🔒</span>
      <h4>100% Private by Default</h4>
      <p>Your data never leaves your device. Perfect for sensitive or confidential work.</p>
    </div>
  </div>
</section>

<hr class="divider">

<!-- SECTION 2: WHY GEMMA -->
<section class="section fade-in" id="why">
  <p class="section-tag">02 — The Case for Gemma</p>
  <h2>Why Should You Use Gemma?</h2>
  <p>There are hundreds of AI models available today. So why pick Gemma? Here's the honest answer — Gemma hits a sweet spot that very few models do: <em>it's powerful enough to be genuinely useful, but light enough to run anywhere.</em></p>

  <div class="cards-grid">
    <div class="card">
      <span class="card-icon">💰</span>
      <h4>Zero Cost, Forever</h4>
      <p>No API bills. No subscriptions. Download once, use infinitely. Perfect for students and indie developers.</p>
    </div>
    <div class="card">
      <span class="card-icon">⚡</span>
      <h4>Fast Response Time</h4>
      <p>Running locally means no network latency. Responses are near-instant on modern hardware.</p>
    </div>
    <div class="card">
      <span class="card-icon">🛠️</span>
      <h4>Fully Customizable</h4>
      <p>Fine-tune it on your own data. Make it an expert in your specific domain. No one else can do this with GPT-4.</p>
    </div>
    <div class="card">
      <span class="card-icon">📱</span>
      <h4>Runs on Edge Devices</h4>
      <p>Gemma 2B can even run on Android phones. Build on-device AI apps without any server.</p>
    </div>
    <div class="card">
      <span class="card-icon">🌍</span>
      <h4>Works Offline</h4>
      <p>No internet? No problem. Perfect for remote areas, secure environments, or offline apps.</p>
    </div>
    <div class="card">
      <span class="card-icon">🎓</span>
      <h4>Best for Learning AI</h4>
      <p>Want to understand how LLMs actually work? Gemma is open — you can inspect and learn from everything.</p>
    </div>
  </div>
</section>

<hr class="divider">

<!-- SECTION 3: MODELS -->
<section class="section fade-in" id="models">
  <p class="section-tag">03 — Model Lineup</p>
  <h2>Gemma Model Sizes Explained</h2>
  <p>Gemma comes in different sizes. The number (2B, 7B, 9B, 27B) refers to the number of <strong style="color:var(--text)">parameters</strong> — basically how "smart" and how "heavy" the model is. More parameters = more capable but needs more RAM.</p>

  <div class="models-grid">
    <div class="model-card">
      <div class="model-size">2B</div>
      <div class="model-name">GEMMA 2B</div>
      <div class="model-tag">Runs on 4GB RAM<br>Perfect for laptops & mobile<br>Fastest responses</div>
    </div>
    <div class="model-card">
      <div class="model-size">7B</div>
      <div class="model-name">GEMMA 7B</div>
      <div class="model-tag">Needs 8GB RAM<br>Great balance of speed & quality<br>Best for most developers</div>
    </div>
    <div class="model-card">
      <div class="model-size">9B</div>
      <div class="model-name">GEMMA 2 · 9B</div>
      <div class="model-tag">Needs 10GB RAM<br>Latest generation<br>Significantly smarter than 7B</div>
    </div>
    <div class="model-card">
      <div class="model-size">27B</div>
      <div class="model-name">GEMMA 2 · 27B</div>
      <div class="model-tag">Needs 20GB+ RAM<br>Near GPT-4 quality<br>Best for serious projects</div>
    </div>
  </div>

  <div class="highlight-box">
    <p>💡 <strong>Which one should you pick?</strong> If you have a normal laptop with 8–16GB RAM, start with <code>gemma2:9b</code> via Ollama. It gives the best quality-to-performance ratio for most use cases in 2026.</p>
  </div>

  <h3>Instruction-Tuned vs Base Models</h3>
  <p>Each size comes in two variants. <strong style="color:var(--text)">Base model</strong> is raw — it just predicts the next word. <strong style="color:var(--text)">Instruction-tuned (IT)</strong> model is trained to follow instructions and have conversations. For 99% of use cases, always use the instruction-tuned version.</p>

  <table class="compare-table">
    <thead>
      <tr>
        <th>Variant</th>
        <th>What it does</th>
        <th>When to use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>gemma-2b</code></td>
        <td>Predicts text, no conversation ability</td>
        <td>Research, fine-tuning experiments</td>
      </tr>
      <tr>
        <td><code>gemma-2b-it</code></td>
        <td>Follows instructions, chat-ready</td>
        <td>Chatbots, Q&A, coding help</td>
      </tr>
      <tr>
        <td><code>gemma2-9b-it</code></td>
        <td>Latest, smarter instruction following</td>
        <td>Most production use cases</td>
      </tr>
      <tr>
        <td><code>gemma2-27b-it</code></td>
        <td>Highest quality responses</td>
        <td>Complex reasoning, analysis</td>
      </tr>
    </tbody>
  </table>
</section>

<hr class="divider">

<!-- SECTION 4: VS -->
<section class="section fade-in" id="vs">
  <p class="section-tag">04 — Comparison</p>
  <h2>Gemma vs ChatGPT vs Llama vs Mistral</h2>
  <p>How does Gemma stack up against the most popular AI models? Here's an honest, no-hype comparison.</p>

  <table class="compare-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Gemma</th>
        <th>ChatGPT (GPT-4)</th>
        <th>Llama 3</th>
        <th>Mistral</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cost</td>
        <td><span class="badge-yes">Free</span></td>
        <td><span class="badge-no">Paid API</span></td>
        <td><span class="badge-yes">Free</span></td>
        <td><span class="badge-yes">Free</span></td>
      </tr>
      <tr>
        <td>Runs Locally</td>
        <td><span class="badge-yes">Yes</span></td>
        <td><span class="badge-no">No</span></td>
        <td><span class="badge-yes">Yes</span></td>
        <td><span class="badge-yes">Yes</span></td>
      </tr>
      <tr>
        <td>Privacy</td>
        <td><span class="badge-yes">100% Local</span></td>
        <td><span class="badge-no">Data to OpenAI</span></td>
        <td><span class="badge-yes">100% Local</span></td>
        <td><span class="badge-yes">100% Local</span></td>
      </tr>
      <tr>
        <td>Fine-tuning</td>
        <td><span class="badge-yes">Yes</span></td>
        <td><span class="badge-no">Limited/Paid</span></td>
        <td><span class="badge-yes">Yes</span></td>
        <td><span class="badge-yes">Yes</span></td>
      </tr>
      <tr>
        <td>Raw Intelligence</td>
        <td>Very Good</td>
        <td>Best in class</td>
        <td>Excellent</td>
        <td>Good</td>
      </tr>
      <tr>
        <td>Mobile Deployment</td>
        <td><span class="badge-yes">Yes (2B)</span></td>
        <td><span class="badge-no">No</span></td>
        <td><span class="badge-no">Limited</span></td>
        <td><span class="badge-no">Limited</span></td>
      </tr>
      <tr>
        <td>Google Ecosystem</td>
        <td><span class="badge-yes">Native</span></td>
        <td><span class="badge-no">No</span></td>
        <td><span class="badge-no">No</span></td>
        <td><span class="badge-no">No</span></td>
      </tr>
    </tbody>
  </table>

  <div class="highlight-box">
    <p>🎯 <strong>Bottom line:</strong> If you need maximum intelligence and don't mind paying, use GPT-4. If you want a free, private, locally-running model you can actually build on — Gemma is your best friend.</p>
  </div>
</section>

<hr class="divider">

<!-- SECTION 5: SETUP -->
<section class="section fade-in" id="setup">
  <p class="section-tag">05 — Setup Guide</p>
  <h2>Complete Setup: 3 Ways to Run Gemma</h2>
  <p>There are three main ways to run Gemma depending on your technical level and use case. We'll cover all three — from the easiest to the most advanced.</p>

  <!-- METHOD 1 -->
  <h3>Method 1: Ollama (Easiest — Recommended for Beginners)</h3>
  <p>Ollama lets you run Gemma locally with a single command. It handles everything — downloads, configuration, and serving. This is how 90% of developers run local models.</p>

  <div class="steps">
    <div class="step">
      <div class="step-circle">1</div>
      <div class="step-content">
        <h4>Install Ollama</h4>
        <p>Visit <strong>ollama.com</strong> and download for Mac, Windows, or Linux. It's a simple installer — takes 2 minutes.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">2</div>
      <div class="step-content">
        <h4>Pull the Gemma Model</h4>
        <p>Open your terminal and run the command below. It will download the model automatically (around 5–18GB depending on size).</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">3</div>
      <div class="step-content">
        <h4>Start Chatting</h4>
        <p>Run the second command below and Gemma will open right in your terminal. Start talking to it immediately.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">4</div>
      <div class="step-content">
        <h4>Use the API (Optional)</h4>
        <p>Ollama also runs a local REST API on port 11434. You can use it to connect Gemma to your own apps.</p>
      </div>
    </div>
  </div>

  <div class="code-block">
    <div class="code-block-label">Terminal — Install & Run</div>
    <pre><span class="cm"># Step 1: Pull Gemma model (choose your size)</span>
<span class="cn">ollama pull gemma2:9b</span>       <span class="cm"># Best for most laptops</span>
<span class="cn">ollama pull gemma2:2b</span>       <span class="cm"># If you have less than 8GB RAM</span>
<span class="cn">ollama pull gemma2:27b</span>      <span class="cm"># If you have 20GB+ RAM</span>

<span class="cm"># Step 2: Run it in terminal (chat mode)</span>
<span class="cn">ollama run gemma2:9b</span>

<span class="cm"># Step 3: Call via API from your code</span>
<span class="ck">curl</span> http://localhost:11434/api/generate <span class="cv">-d</span> <span class="cs">'{
  "model": "gemma2:9b",
  "prompt": "Explain machine learning in simple words"
}'</span></pre>
  </div>

  <!-- METHOD 2 -->
  <h3>Method 2: Google Colab (No Installation Needed)</h3>
  <p>If you don't want to install anything, Google Colab lets you run Gemma in the cloud for free using Google's GPUs. Perfect for experimentation and learning.</p>

  <div class="steps">
    <div class="step">
      <div class="step-circle">1</div>
      <div class="step-content">
        <h4>Go to Google Colab</h4>
        <p>Visit <strong>colab.research.google.com</strong> and create a new notebook. Change runtime to GPU (T4 is free).</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">2</div>
      <div class="step-content">
        <h4>Accept Gemma License on Kaggle</h4>
        <p>Go to Kaggle → search "Gemma" → accept the model license. This is required once before using via API.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">3</div>
      <div class="step-content">
        <h4>Install and Load the Model</h4>
        <p>Paste and run the code below in your Colab notebook. The model will load in 2–3 minutes.</p>
      </div>
    </div>
  </div>

  <div class="code-block">
    <div class="code-block-label">Google Colab — Python</div>
    <pre><span class="cm"># Install required libraries</span>
<span class="ck">!pip install</span> <span class="cs">-q keras-nlp keras</span>

<span class="cm"># Load Gemma model</span>
<span class="ck">import</span> keras_nlp

gemma_lm = keras_nlp.models.<span class="cn">GemmaCausalLM</span>.from_preset(<span class="cs">"gemma2_instruct_2b_en"</span>)

<span class="cm"># Generate a response</span>
response = gemma_lm.generate(
    <span class="cs">"What is artificial intelligence? Explain simply."</span>,
    max_length=<span class="cv">256</span>
)
<span class="ck">print</span>(response)</pre>
  </div>

  <!-- METHOD 3 -->
  <h3>Method 3: Hugging Face Transformers (For Developers)</h3>
  <p>For developers who want full control and want to integrate Gemma into Python projects — Hugging Face is the standard approach.</p>

  <div class="code-block">
    <div class="code-block-label">Python — Hugging Face</div>
    <pre><span class="cm"># Install dependencies</span>
<span class="ck">pip install</span> transformers torch accelerate

<span class="cm"># ---- Your Python script ----</span>
<span class="ck">from</span> transformers <span class="ck">import</span> AutoTokenizer, AutoModelForCausalLM
<span class="ck">import</span> torch

<span class="cm"># Load model and tokenizer from Hugging Face</span>
model_id = <span class="cs">"google/gemma-2-9b-it"</span>

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.<span class="cv">bfloat16</span>,
    device_map=<span class="cs">"auto"</span>
)

<span class="cm"># Create a chat message</span>
messages = [
    {<span class="cs">"role"</span>: <span class="cs">"user"</span>, <span class="cs">"content"</span>: <span class="cs">"Write a Python function to reverse a string"</span>}
]

<span class="cm"># Tokenize and generate</span>
input_ids = tokenizer.apply_chat_template(
    messages, return_tensors=<span class="cs">"pt"</span>, return_dict=<span class="cv">True</span>
).to(<span class="cs">"cuda"</span>)

outputs = model.generate(**input_ids, max_new_tokens=<span class="cv">256</span>)
response = tokenizer.decode(outputs[<span class="cv">0</span>], skip_special_tokens=<span class="cv">True</span>)
<span class="ck">print</span>(response)</pre>
  </div>

  <div class="highlight-box">
    <p>⚠️ <strong>Note for Hugging Face:</strong> You need to accept the model license on <a href="https://huggingface.co/google/gemma-2-9b-it" target="_blank" style="color:var(--accent)">Hugging Face → google/gemma-2-9b-it</a> and log in with <code>huggingface-cli login</code> before downloading.</p>
  </div>
</section>

<hr class="divider">

<!-- SECTION 6: PROMPTING -->
<section class="section fade-in" id="prompting">
  <p class="section-tag">06 — Getting the Most Out of It</p>
  <h2>How to Prompt Gemma Effectively</h2>
  <p>Gemma responds much better when you follow a clear prompting structure. Here are the patterns that work best.</p>

  <h3>The 3-Part Prompt Formula</h3>

  <div class="code-block">
    <div class="code-block-label">Prompt Structure</div>
    <pre><span class="cm"># ROLE → Tell Gemma who it is</span>
<span class="cs">"You are an expert Python developer with 10 years of experience."</span>

<span class="cm"># TASK → Tell it exactly what to do</span>
<span class="cs">"Write a REST API endpoint using FastAPI that accepts a user's name
and returns a personalised greeting message."</span>

<span class="cm"># FORMAT → Tell it how to respond</span>
<span class="cs">"Include comments in the code. Keep it under 30 lines. 
Add a brief explanation after the code."</span></pre>
  </div>

  <h3>Good vs Bad Prompts</h3>

  <table class="compare-table">
    <thead>
      <tr><th>❌ Bad Prompt</th><th>✅ Good Prompt</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>"Explain AI"</td>
        <td>"Explain artificial intelligence to a 15-year-old student in under 100 words with a real-life example."</td>
      </tr>
      <tr>
        <td>"Fix my code"</td>
        <td>"You are a Python expert. Find and fix the bug in this code. Explain what was wrong and why."</td>
      </tr>
      <tr>
        <td>"Write an email"</td>
        <td>"Write a professional follow-up email to a recruiter after an interview. Tone: confident but polite. Length: under 100 words."</td>
      </tr>
    </tbody>
  </table>
</section>

<hr class="divider">

<!-- SECTION 7: USE CASES -->
<section class="section fade-in" id="usecases">
  <p class="section-tag">07 — Real World Applications</p>
  <h2>What Can You Actually Build with Gemma?</h2>
  <p>Here are practical, real-world use cases — not theoretical ones.</p>

  <div class="usecase-list">
    <div class="usecase-item">
      <div class="usecase-icon">🤖</div>
      <div>
        <h5>Private AI Chatbot</h5>
        <p>Build a chatbot for yourself or your company. 100% private — no data leaves your server.</p>
      </div>
    </div>
    <div class="usecase-item">
      <div class="usecase-icon">💻</div>
      <div>
        <h5>Coding Assistant</h5>
        <p>Get code suggestions, debug errors, and generate boilerplate — all offline, all free.</p>
      </div>
    </div>
    <div class="usecase-item">
      <div class="usecase-icon">📄</div>
      <div>
        <h5>Document Summarizer</h5>
        <p>Feed in PDFs, reports, or long articles and get clean summaries without any API cost.</p>
      </div>
    </div>
    <div class="usecase-item">
      <div class="usecase-icon">🎓</div>
      <div>
        <h5>Personal Study Tutor</h5>
        <p>Ask it to explain any concept, quiz you on topics, or simplify complex subjects.</p>
      </div>
    </div>
    <div class="usecase-item">
      <div class="usecase-icon">📱</div>
      <div>
        <h5>On-Device Mobile AI</h5>
        <p>Use Gemma 2B on Android apps. Build AI features that work without internet.</p>
      </div>
    </div>
    <div class="usecase-item">
      <div class="usecase-icon">🔍</div>
      <div>
        <h5>RAG Applications</h5>
        <p>Combine Gemma with your own documents to build a knowledge base Q&A system.</p>
      </div>
    </div>
    <div class="usecase-item">
      <div class="usecase-icon">✍️</div>
      <div>
        <h5>Content Generator</h5>
        <p>Auto-generate blog posts, social media captions, emails, and marketing copy.</p>
      </div>
    </div>
    <div class="usecase-item">
      <div class="usecase-icon">🏥</div>
      <div>
        <h5>Healthcare & Legal Tools</h5>
        <p>Industries with strict data rules love local models. Gemma is HIPAA-friendly when self-hosted.</p>
      </div>
    </div>
  </div>
</section>

<hr class="divider">

<!-- SECTION 8: PROJECTS -->
<section class="section fade-in" id="projects">
  <p class="section-tag">08 — Build Something</p>
  <h2>5 Beginner Projects to Start Today</h2>

  <div class="steps">
    <div class="step">
      <div class="step-circle">1</div>
      <div class="step-content">
        <h4>Terminal Chatbot</h4>
        <p>Build a simple Python script that takes user input, sends it to Gemma via Ollama API, and prints the response. Great first project — takes 30 minutes.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">2</div>
      <div class="step-content">
        <h4>Resume Analyser</h4>
        <p>Feed a resume as text to Gemma and ask it to give feedback, suggest improvements, and identify skill gaps. Genuinely useful tool.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">3</div>
      <div class="step-content">
        <h4>Study Notes Summarizer</h4>
        <p>Upload lecture notes or textbook chapters. Gemma summarizes key points, creates flashcards, and generates quiz questions automatically.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">4</div>
      <div class="step-content">
        <h4>Local RAG Chatbot</h4>
        <p>Combine Gemma + LangChain + a local vector database to build a chatbot that answers questions from your own documents and PDFs.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-circle">5</div>
      <div class="step-content">
        <h4>Code Review Bot</h4>
        <p>Paste your GitHub code into Gemma and ask for a full code review — style issues, bugs, improvements, and security concerns.</p>
      </div>
    </div>
  </div>

  <div class="callout">
    <h3>🔥 Challenge for You</h3>
    <p>Pick Project 1 (Terminal Chatbot) and build it today. Share it on LinkedIn or Instagram and tag <strong style="color:var(--accent)">@rk.codex</strong>. It takes under an hour and looks great on your portfolio.</p>
  </div>
</section>

<hr class="divider">

<!-- SECTION 9: YOUTUBE -->
<section class="section fade-in" id="videos">
  <p class="section-tag">09 — Go Deeper</p>
  <h2>Best YouTube Videos to Learn Gemma</h2>
  <p>These are handpicked videos for different levels — from total beginners to developers wanting to fine-tune and deploy.</p>

  <div class="yt-grid">
    <a href="https://www.youtube.com/results?search_query=Google+Gemma+getting+started+tutorial+2024" target="_blank" class="yt-card">
      <div class="yt-thumb">
        <span class="yt-label">▶ BEGINNER</span>
        <div class="yt-play">▶</div>
      </div>
      <div class="yt-info">
        <div class="yt-title">Google Gemma — Getting Started Complete Tutorial</div>
        <div class="yt-channel">Search: "Google Gemma getting started 2024" on YouTube</div>
      </div>
    </a>

    <a href="https://www.youtube.com/results?search_query=Run+Gemma+locally+Ollama+tutorial" target="_blank" class="yt-card">
      <div class="yt-thumb">
        <span class="yt-label">▶ SETUP</span>
        <div class="yt-play">▶</div>
      </div>
      <div class="yt-info">
        <div class="yt-title">Run Gemma Locally with Ollama — Step by Step</div>
        <div class="yt-channel">Search: "Run Gemma locally Ollama tutorial" on YouTube</div>
      </div>
    </a>

    <a href="https://www.youtube.com/results?search_query=Gemma+fine+tuning+tutorial+python" target="_blank" class="yt-card">
      <div class="yt-thumb">
        <span class="yt-label">▶ ADVANCED</span>
        <div class="yt-play">▶</div>
      </div>
      <div class="yt-info">
        <div class="yt-title">Fine-Tuning Gemma on Your Own Data</div>
        <div class="yt-channel">Search: "Gemma fine tuning tutorial python" on YouTube</div>
      </div>
    </a>

    <a href="https://www.youtube.com/results?search_query=Build+RAG+app+Gemma+LangChain" target="_blank" class="yt-card">
      <div class="yt-thumb">
        <span class="yt-label">▶ PROJECT</span>
        <div class="yt-play">▶</div>
      </div>
      <div class="yt-info">
        <div class="yt-title">Build a RAG App with Gemma + LangChain</div>
        <div class="yt-channel">Search: "Build RAG app Gemma LangChain" on YouTube</div>
      </div>
    </a>

    <a href="https://www.youtube.com/results?search_query=Gemma+vs+GPT4+vs+Llama+comparison" target="_blank" class="yt-card">
      <div class="yt-thumb">
        <span class="yt-label">▶ COMPARISON</span>
        <div class="yt-play">▶</div>
      </div>
      <div class="yt-info">
        <div class="yt-title">Gemma vs GPT-4 vs Llama 3 — Full Comparison</div>
        <div class="yt-channel">Search: "Gemma vs GPT4 vs Llama comparison" on YouTube</div>
      </div>
    </a>

    <a href="https://www.youtube.com/results?search_query=Gemma+Google+Colab+tutorial+free+GPU" target="_blank" class="yt-card">
      <div class="yt-thumb">
        <span class="yt-label">▶ FREE GPU</span>
        <div class="yt-play">▶</div>
      </div>
      <div class="yt-info">
        <div class="yt-title">Run Gemma on Google Colab — Free GPU Tutorial</div>
        <div class="yt-channel">Search: "Gemma Google Colab tutorial free GPU" on YouTube</div>
      </div>
    </a>
  </div>

  <div class="highlight-box">
    <p>📚 <strong>Also check out:</strong> The official Google DeepMind blog at <a href="https://blog.google/technology/ai/google-gemma-open-models/" target="_blank" style="color:var(--accent)">blog.google</a> and the Hugging Face model page at <a href="https://huggingface.co/google/gemma-2-9b-it" target="_blank" style="color:var(--accent)">huggingface.co/google/gemma-2-9b-it</a> for the most up-to-date documentation.</p>
  </div>
</section>

<hr class="divider">

<!-- SECTION 10: FAQ -->
<section class="section fade-in" id="faq">
  <p class="section-tag">10 — Common Questions</p>
  <h2>Frequently Asked Questions</h2>

  <h3>Is Gemma really free to use commercially?</h3>
  <p>Yes. Gemma is released under Google's custom open model license which allows commercial use. You can build and sell products using Gemma. Just don't use it to train competing foundation models or use the "Gemma" name in your product name.</p>

  <h3>How good is Gemma compared to ChatGPT?</h3>
  <p>Gemma 2 27B comes close to GPT-3.5 level quality on many benchmarks. It won't beat GPT-4 in raw intelligence, but for most practical tasks — coding help, summarization, writing, Q&A — Gemma 9B is surprisingly capable and completely free.</p>

  <h3>Can I run Gemma on a basic laptop?</h3>
  <p>Yes! Gemma 2B runs on any laptop with 4GB+ RAM. For Gemma 9B you ideally want 16GB RAM. If your laptop is older or lower spec, use Google Colab (free GPU) instead of running it locally.</p>

  <h3>Do I need to know Python to use Gemma?</h3>
  <p>Not for basic usage. With Ollama, you can chat with Gemma directly in your terminal without writing a single line of code. Python is only needed when you want to build apps or integrate Gemma into your own projects.</p>

  <h3>What languages does Gemma support?</h3>
  <p>Gemma is primarily trained on English data and performs best in English. It can understand and respond in many other languages including Hindi, but the quality will be lower than English responses.</p>

  <h3>Can I use Gemma on my phone?</h3>
  <p>Yes — Gemma 2B is small enough to run on Android devices using Google's MediaPipe or via the Ollama mobile server setup. iOS support is growing but still limited in 2026.</p>

  <div class="callout">
    <h3>Still have questions?</h3>
    <p>Drop a comment on the Instagram post or DM <strong style="color:var(--accent)">@rk.codex</strong>. We answer every question. Every single one.</p>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-brand">rk.codex</div>
  <p class="footer-sub">Daily AI tips, tools & workflows for developers who want to grow fast.</p>
  <ul class="footer-links">
    <li><a href="https://instagram.com/rk.codex" target="_blank">Instagram</a></li>
    <li><a href="https://huggingface.co/google/gemma-2-9b-it" target="_blank">Gemma on HuggingFace</a></li>
    <li><a href="https://ollama.com" target="_blank">Ollama</a></li>
    <li><a href="https://colab.research.google.com" target="_blank">Google Colab</a></li>
    <li><a href="https://ai.google.dev/gemma" target="_blank">Official Gemma Docs</a></li>
  </ul>
  <p class="footer-copy">Made with ❤️ by @rk.codex · This guide is free to share · 2026</p>
</footer>

<script>
  // Progress bar
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress').style.width = progress + '%';
  });

  // Fade in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
<\/script>
</body>
</html>
`,Om=`<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hermes Agent — Complete Guide | rk.codex</title>
<meta name="description" content="A practical guide to Hermes Agent: what it is, why it matters, and how to use it for fast, reliable agent workflows.">
<meta name="keywords" content="Hermes Agent, Nous Research, agents, LLM, tools, workflow, prompt engineering">
<meta name="date" content="2026-04-13T12:10:00+05:30">
<meta name="category" content="AI Agents">
<meta name="theme-color" content="#7c6af7">
<meta property="article:published_time" content="2026-04-13T12:10:00+05:30">
<meta property="og:image" content="/articles/hermes-agent-guide.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<style>
/* ── HERMES THEME TOKENS ──
   Matching NousResearch's dark purple palette */
:root {
  --bg:        #0b0b10;
  --bg2:       #111118;
  --bg3:       #16161f;
  --bg4:       #1c1c28;
  --surface:   #13131c;
  --border:    #2a2a3d;
  --border2:   #363650;
  --text:      #eeeef5;
  --text2:     #a0a0c0;
  --text3:     #5a5a7a;
  --text4:     #36364a;
  --accent:    #7c6af7;   /* Hermes purple */
  --accent2:   #9d8fff;
  --accent-bg: rgba(124,106,247,0.08);
  --accent-bd: rgba(124,106,247,0.22);
  --green:     #34d399;
  --green-bg:  rgba(52,211,153,0.08);
  --green-bd:  rgba(52,211,153,0.2);
  --red:       #f87171;
  --red-bg:    rgba(248,113,113,0.08);
  --red-bd:    rgba(248,113,113,0.2);
  --amber:     #fbbf24;
  --amber-bg:  rgba(251,191,36,0.08);
  --amber-bd:  rgba(251,191,36,0.2);
  --code-bg:   #08080e;
  --shadow:    0 1px 4px rgba(0,0,0,0.5);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.6);
}
[data-theme="light"] {
  --bg:        #f7f7fc;
  --bg2:       #eeeef8;
  --bg3:       #e6e6f4;
  --bg4:       #ddddf0;
  --surface:   #ffffff;
  --border:    #d4d4e8;
  --border2:   #bebede;
  --text:      #14141e;
  --text2:     #40405a;
  --text3:     #8080a0;
  --text4:     #c0c0d8;
  --accent:    #5b48e8;
  --accent2:   #7c6af7;
  --accent-bg: rgba(91,72,232,0.07);
  --accent-bd: rgba(91,72,232,0.2);
  --green:     #16a34a;
  --green-bg:  rgba(22,163,74,0.07);
  --green-bd:  rgba(22,163,74,0.2);
  --red:       #dc2626;
  --red-bg:    rgba(220,38,38,0.07);
  --red-bd:    rgba(220,38,38,0.2);
  --amber:     #d97706;
  --amber-bg:  rgba(217,119,6,0.07);
  --amber-bd:  rgba(217,119,6,0.2);
  --code-bg:   #f0f0fa;
  --shadow:    0 1px 4px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.1);
}

*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
html { scroll-behavior:smooth; font-size:16px; }
body {
  background:var(--bg);
  color:var(--text);
  font-family:'Inter',system-ui,sans-serif;
  line-height:1.65;
  transition:background .3s,color .3s;
  overflow-x:hidden;
}
::-webkit-scrollbar { width:4px; }
::-webkit-scrollbar-track { background:var(--bg2); }
::-webkit-scrollbar-thumb { background:var(--accent); border-radius:4px; }

/* ── NAV ── */
nav {
  position:sticky; top:0; z-index:200;
  background:rgba(11,11,16,.93);
  backdrop-filter:blur(18px);
  border-bottom:1px solid var(--border);
  padding:0 28px; height:54px;
  display:flex; align-items:center; justify-content:space-between;
  transition:background .3s,border-color .3s;
}
[data-theme="light"] nav { background:rgba(247,247,252,.93); }

.nav-l { display:flex; align-items:center; gap:10px; }
.logo {
  font-size:16px; font-weight:800;
  color:var(--text); text-decoration:none;
  letter-spacing:-.025em;
}
.logo span { color:var(--accent); }
.sep { color:var(--border2); }
.nav-slug {
  font-family:'JetBrains Mono',monospace;
  font-size:11px; color:var(--text3);
}
.nav-r { display:flex; align-items:center; gap:10px; }

/* lang toggle */
.lang-sw {
  display:flex; border:1px solid var(--border2);
  border-radius:6px; overflow:hidden;
}
.lbtn {
  font-size:11px; font-weight:600;
  padding:4px 11px; cursor:pointer;
  background:transparent; border:none;
  color:var(--text3); font-family:'Inter',sans-serif;
  transition:all .2s;
}
.lbtn.on { background:var(--accent); color:#fff; }

/* theme toggle */
.thm {
  width:36px; height:21px;
  background:var(--bg3); border:1px solid var(--border2);
  border-radius:11px; cursor:pointer; position:relative;
  transition:background .3s;
}
.thm::after {
  content:''; position:absolute;
  width:15px; height:15px; border-radius:50%;
  background:var(--accent); top:2px; left:2px;
  transition:transform .22s ease;
}
[data-theme="light"] .thm::after { transform:translateX(15px); background:var(--accent); }

/* ── HERO ── */
.hero {
  max-width:760px; margin:0 auto;
  padding:60px 28px 48px;
  position:relative;
}
.hero-glyph {
  display:inline-flex; align-items:center; gap:7px;
  font-family:'JetBrains Mono',monospace;
  font-size:10px; letter-spacing:.14em; text-transform:uppercase;
  padding:5px 12px; border-radius:20px;
  background:var(--accent-bg); border:1px solid var(--accent-bd);
  color:var(--accent); margin-bottom:22px;
}
.glyph-dot { width:6px; height:6px; border-radius:50%; background:var(--accent); animation:blink 2s ease infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

h1 {
  font-size:clamp(32px,5.5vw,58px);
  font-weight:800; letter-spacing:-.04em; line-height:1.05;
  margin-bottom:18px; color:var(--text);
}
h1 em { font-style:normal; color:var(--accent); }

.hero-sub {
  font-size:17px; color:var(--text2);
  max-width:580px; line-height:1.72; margin-bottom:30px;
}

.hero-install {
  background:var(--code-bg);
  border:1px solid var(--border);
  border-radius:10px; overflow:hidden; margin-bottom:28px;
}
.install-top {
  display:flex; align-items:center; justify-content:space-between;
  padding:9px 16px; border-bottom:1px solid var(--border);
}
.install-lang {
  font-family:'JetBrains Mono',monospace;
  font-size:10px; color:var(--text3); letter-spacing:.1em;
}
.copy-btn {
  font-family:'JetBrains Mono',monospace;
  font-size:10px; padding:3px 10px; border-radius:4px;
  background:transparent; border:1px solid var(--border2);
  color:var(--text3); cursor:pointer; transition:all .2s;
}
.copy-btn:hover { color:var(--accent); border-color:var(--accent); }
.copy-btn.done { color:var(--green); border-color:var(--green); }
.install-code {
  padding:16px 18px;
  font-family:'JetBrains Mono',monospace;
  font-size:13px; color:var(--accent); line-height:1.7;
  word-break:break-all;
}

.hero-stats {
  display:flex; flex-wrap:wrap; gap:0;
}
.hstat { padding:0 32px 0 0; border-right:1px solid var(--border); margin-right:32px; }
.hstat:last-child { border:none; padding:0; margin:0; }
.hstat-n { font-size:28px; font-weight:800; letter-spacing:-.03em; color:var(--text); line-height:1; }
.hstat-n em { color:var(--accent); font-style:normal; }
.hstat-l { font-size:12px; color:var(--text3); margin-top:3px; }

/* ── LAYOUT ── */
.page { max-width:760px; margin:0 auto; padding:0 28px 90px; }
hr.div { border:none; border-top:1px solid var(--border); margin:0; }

/* ── TOC ── */
.toc {
  background:var(--surface); border:1px solid var(--border);
  border-radius:12px; padding:22px 26px; margin:36px 0;
}
.toc-lbl {
  font-family:'JetBrains Mono',monospace;
  font-size:10px; letter-spacing:.14em; text-transform:uppercase;
  color:var(--text3); margin-bottom:14px;
}
.toc-grid { display:grid; grid-template-columns:1fr 1fr; gap:4px; list-style:none; }
.toc-grid a {
  display:flex; align-items:center; gap:8px;
  font-size:13.5px; color:var(--text2); text-decoration:none;
  padding:5px 0; transition:color .2s;
}
.toc-grid a:hover { color:var(--accent); }
.tn { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--text4); min-width:18px; }

/* ── SECTIONS ── */
.sec { margin:52px 0; }
.sec-tag {
  font-family:'JetBrains Mono',monospace;
  font-size:10px; letter-spacing:.16em; text-transform:uppercase;
  color:var(--accent); margin-bottom:8px;
}
h2 {
  font-size:clamp(22px,3vw,34px); font-weight:800;
  letter-spacing:-.03em; margin-bottom:14px; color:var(--text);
  line-height:1.1;
}
h3 {
  font-size:17px; font-weight:700; color:var(--text);
  margin:26px 0 10px; letter-spacing:-.015em;
}
p { font-size:15px; color:var(--text2); margin-bottom:14px; max-width:680px; line-height:1.75; }
p:last-child { margin-bottom:0; }
strong { color:var(--text); font-weight:600; }

/* ── CALLOUT ── */
.callout {
  border-radius:8px; padding:14px 16px; margin:18px 0;
  display:flex; gap:12px; align-items:flex-start;
}
.callout svg { flex-shrink:0; margin-top:1px; }
.callout-body { font-size:14px; line-height:1.65; }
.ca { background:var(--accent-bg); border:1px solid var(--accent-bd); }
.ca .callout-body { color:var(--accent2); }
.cg { background:var(--green-bg); border:1px solid var(--green-bd); }
.cg .callout-body { color:var(--green); }
.cr { background:var(--red-bg); border:1px solid var(--red-bd); }
.cr .callout-body { color:var(--red); }
.cam { background:var(--amber-bg); border:1px solid var(--amber-bd); }
.cam .callout-body { color:var(--amber); }

/* ── STEPS ── */
.steps { margin:20px 0; }
.step {
  display:grid; grid-template-columns:44px 1fr;
  gap:0 16px; margin-bottom:4px;
}
.step + .step .step-body { border-top:1px solid var(--border); }
.step-l { display:flex; flex-direction:column; align-items:center; padding-top:18px; }
.step-c {
  width:34px; height:34px; border-radius:50%;
  background:var(--bg); border:1.5px solid var(--border2);
  display:flex; align-items:center; justify-content:center;
  font-family:'JetBrains Mono',monospace;
  font-size:13px; font-weight:700; color:var(--text3);
  flex-shrink:0; z-index:1;
  transition:border-color .2s,color .2s,background .2s;
}
.step:hover .step-c { border-color:var(--accent); color:var(--accent); background:var(--accent-bg); }
.step-line { width:1.5px; flex:1; background:var(--border); margin:6px 0; }
.step:last-child .step-line { display:none; }
.step-body { padding:18px 0 24px; }
.step-title { font-size:15px; font-weight:700; color:var(--text); margin-bottom:6px; }
.step-desc { font-size:14px; color:var(--text2); line-height:1.68; }
.step-desc p { font-size:14px; margin-bottom:8px; }
.step-desc p:last-child { margin-bottom:0; }

/* ── CODE BLOCK ── */
.code {
  background:var(--code-bg); border:1px solid var(--border);
  border-radius:9px; overflow:hidden; margin:12px 0;
}
.code-top {
  display:flex; align-items:center; justify-content:space-between;
  padding:8px 14px; border-bottom:1px solid var(--border);
  background:var(--bg2);
}
.code-lang {
  font-family:'JetBrains Mono',monospace;
  font-size:10px; color:var(--text3); letter-spacing:.08em; text-transform:uppercase;
}
pre { padding:16px; overflow-x:auto; }
code {
  font-family:'JetBrains Mono',monospace;
  font-size:13px; color:var(--text2); line-height:1.8;
}
.cm { color:var(--text4); }
.ck { color:#f0a0a0; }
.cs { color:var(--accent); }
.cv { color:var(--green); }
[data-theme="light"] .ck { color:#c0392b; }
[data-theme="light"] .cs { color:var(--accent); }
[data-theme="light"] .cv { color:#16a34a; }

/* ── FEATURE CARDS ── */
.feat-grid {
  display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
  gap:14px; margin:20px 0;
}
.feat-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:12px; padding:20px; transition:border-color .2s,transform .2s;
}
.feat-card:hover { border-color:var(--accent); transform:translateY(-2px); }
.feat-icon {
  width:38px; height:38px; border-radius:9px;
  background:var(--accent-bg); border:1px solid var(--accent-bd);
  display:flex; align-items:center; justify-content:center;
  margin-bottom:12px;
}
.feat-title { font-size:14px; font-weight:700; color:var(--text); margin-bottom:6px; }
.feat-desc { font-size:13px; color:var(--text3); line-height:1.6; }

/* ── PLATFORM CHIPS ── */
.plat-wrap { display:flex; flex-wrap:wrap; gap:8px; margin:16px 0; }
.plat-chip {
  display:inline-flex; align-items:center; gap:7px;
  background:var(--surface); border:1px solid var(--border);
  border-radius:7px; padding:8px 14px;
  font-size:13px; font-weight:500; color:var(--text2);
  transition:border-color .2s,color .2s;
}
.plat-chip:hover { border-color:var(--accent); color:var(--accent); }

/* ── COMPARE TABLE ── */
.table-wrap { overflow-x:auto; border-radius:10px; border:1px solid var(--border); margin:18px 0; }
table { width:100%; border-collapse:collapse; }
th {
  font-family:'JetBrains Mono',monospace;
  font-size:10px; letter-spacing:.1em; text-transform:uppercase;
  color:var(--text3); padding:11px 16px;
  border-bottom:1px solid var(--border); text-align:left;
  background:var(--bg2);
}
td { padding:12px 16px; border-bottom:1px solid var(--border); font-size:14px; color:var(--text2); }
tr:last-child td { border-bottom:none; }
tr:hover td { background:var(--bg3); }
.t-yes { color:var(--green); font-weight:600; }
.t-no  { color:var(--red);   font-weight:600; }
.t-em  { color:var(--text);  font-weight:600; }

/* ── INLINE CODE ── */
:not(pre)>code {
  font-family:'JetBrains Mono',monospace;
  font-size:12.5px; background:var(--bg3);
  color:var(--accent); padding:2px 7px;
  border-radius:4px; border:1px solid var(--border);
}

/* ── LANG VISIBILITY ── */
.en, .hi { }
.hi { display:none; }
body.hindi .en { display:none; }
body.hindi .hi { display:block; }

/* ── CTA ── */
.cta-wrap {
  background:var(--surface); border:1px solid var(--accent-bd);
  border-radius:14px; padding:36px; text-align:center; margin:48px 0 0;
}
.cta-h {
  font-size:clamp(20px,3vw,32px); font-weight:800;
  letter-spacing:-.03em; color:var(--text); margin-bottom:10px;
}
.cta-sub { font-size:15px; color:var(--text3); margin-bottom:24px; }
.btn-row { display:flex; justify-content:center; gap:10px; flex-wrap:wrap; }
.btn-p {
  display:inline-flex; align-items:center; gap:7px;
  background:var(--accent); color:#fff;
  padding:12px 24px; border-radius:8px;
  font-size:14px; font-weight:700; text-decoration:none;
  transition:opacity .2s,transform .2s;
}
.btn-p:hover { opacity:.85; transform:translateY(-1px); }
.btn-s {
  display:inline-flex; align-items:center; gap:7px;
  background:var(--accent-bg); color:var(--accent2);
  padding:12px 24px; border-radius:8px;
  font-size:14px; font-weight:700; text-decoration:none;
  border:1px solid var(--accent-bd); transition:opacity .2s;
}
.btn-s:hover { opacity:.8; }

/* ── FOOTER ── */
footer {
  border-top:1px solid var(--border); padding:28px;
  max-width:760px; margin:0 auto;
  display:flex; justify-content:space-between;
  align-items:center; flex-wrap:wrap; gap:12px;
}
.foot-l { font-size:13px; color:var(--text3); }
.foot-l a { color:var(--text3); text-decoration:none; }
.foot-l a:hover { color:var(--accent); }
.foot-r { display:flex; gap:18px; }
.foot-r a { font-size:13px; color:var(--text3); text-decoration:none; transition:color .2s; }
.foot-r a:hover { color:var(--accent); }

/* ── SCROLL REVEAL ── */
.rv { opacity:0; transform:translateY(18px); transition:opacity .55s,transform .55s; }
.rv.vis { opacity:1; transform:none; }

/* ── ANCHOR OFFSET ── */
.anc { display:block; position:relative; top:-72px; visibility:hidden; }

/* ── RESPONSIVE ── */
@media(max-width:600px){
  nav { padding:0 16px; }
  .nav-slug { display:none; }
  .hero,.page { padding-left:16px; padding-right:16px; }
  .hero { padding-top:48px; }
  .toc-grid { grid-template-columns:1fr; }
  .hstat { padding-right:20px; margin-right:20px; }
  h1 { font-size:28px; }
}
</style>
</head>
<body id="bd">

<!-- LANGUAGE MODAL -->
<div id="lm" style="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px">
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:40px 32px;max-width:380px;width:100%;text-align:center;box-shadow:var(--shadow-lg)">
    <div style="width:52px;height:52px;border-radius:50%;background:var(--accent-bg);border:1px solid var(--accent-bd);display:flex;align-items:center;justify-content:center;margin:0 auto 18px">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="var(--accent)"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round"/></svg>
    </div>
    <div style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:8px;letter-spacing:-.025em">Choose your language</div>
    <div style="font-size:14px;color:var(--text3);margin-bottom:24px;line-height:1.6">Read this guide in English or Hinglish.<br><span style="font-size:12px">English ya Hinglish mein padhna chahte ho?</span></div>
    <div style="display:flex;gap:10px">
      <button onclick="setLang('en')" style="flex:1;padding:13px;border-radius:9px;font-size:15px;font-weight:700;cursor:pointer;background:var(--accent);color:#fff;border:none;font-family:'Inter',sans-serif;transition:opacity .2s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">English</button>
      <button onclick="setLang('hi')" style="flex:1;padding:13px;border-radius:9px;font-size:15px;font-weight:700;cursor:pointer;background:var(--accent-bg);color:var(--accent2);border:1px solid var(--accent-bd);font-family:'Inter',sans-serif;transition:opacity .2s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">Hinglish 🇮🇳</button>
    </div>
  </div>
</div>

<!-- NAV -->
<nav>
  <div class="nav-l">
    <a href="#" class="logo">rk<span>.codex</span></a>
    <span class="sep">/</span>
    <span class="nav-slug">hermes-agent-guide</span>
  </div>
  <div class="nav-r">
    <div class="lang-sw">
      <button class="lbtn on" id="ben" onclick="setLang('en')">EN</button>
      <button class="lbtn" id="bhi" onclick="setLang('hi')">हि</button>
    </div>
    <button class="thm" id="thm" aria-label="Toggle theme"></button>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-glyph"><div class="glyph-dot"></div><span>Nous Research · Open Source · MIT</span></div>

  <div class="en">
    <h1>The AI agent that<br><em>grows with you.</em></h1>
    <p class="hero-sub">Hermes Agent lives on your server, remembers everything, talks to you on Telegram, and gets smarter every single day. This is what personal AI actually looks like.</p>
  </div>
  <div class="hi" style="display:none">
    <h1>Woh AI agent jo<br><em>tumhare saath badhta hai.</em></h1>
    <p class="hero-sub">Hermes Agent tumhare server pe rehta hai, har cheez yaad rakhta hai, Telegram pe baat karta hai, aur har roz thoda aur smart hota jaata hai. Yahi hai real personal AI.</p>
  </div>

  <div class="hero-install">
    <div class="install-top">
      <span class="install-lang">Install — one command</span>
      <button class="copy-btn" onclick="cp(this,'ic')">Copy</button>
    </div>
    <div class="install-code" id="ic">curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash</div>
  </div>

  <div class="hero-stats">
    <div class="hstat"><div class="hstat-n">64<em>k+</em></div><div class="hstat-l">GitHub Stars</div></div>
    <div class="hstat"><div class="hstat-n">200<em>+</em></div><div class="hstat-l">AI Models</div></div>
    <div class="hstat"><div class="hstat-n">$5</div><div class="hstat-l">Min server/month</div></div>
    <div class="hstat"><div class="hstat-n">MIT</div><div class="hstat-l">Free Forever</div></div>
  </div>
</section>

<hr class="div">

<main class="page">

  <!-- TOC -->
  <div class="toc rv">
    <div class="toc-lbl">On this page</div>
    <ol class="toc-grid">
      <li><a href="#what"><span class="tn">01</span><span class="en">What is Hermes?</span><span class="hi" style="display:none">Hermes kya hai?</span></a></li>
      <li><a href="#why"><span class="tn">02</span><span class="en">Why do you need it?</span><span class="hi" style="display:none">Kyun chahiye?</span></a></li>
      <li><a href="#features"><span class="tn">03</span><span class="en">Key features</span><span class="hi" style="display:none">Key features</span></a></li>
      <li><a href="#learning"><span class="tn">04</span><span class="en">The learning loop</span><span class="hi" style="display:none">Learning loop</span></a></li>
      <li><a href="#install"><span class="tn">05</span><span class="en">Installation guide</span><span class="hi" style="display:none">Install guide</span></a></li>
      <li><a href="#setup"><span class="tn">06</span><span class="en">First-time setup</span><span class="hi" style="display:none">Pehli baar setup</span></a></li>
      <li><a href="#models"><span class="tn">07</span><span class="en">Which AI model to use</span><span class="hi" style="display:none">Kaun sa model?</span></a></li>
      <li><a href="#compare"><span class="tn">08</span><span class="en">Vs ChatGPT / Claude</span><span class="hi" style="display:none">ChatGPT se farq</span></a></li>
    </ol>
  </div>

  <!-- 01 WHAT IS HERMES -->
  <span class="anc" id="what"></span>
  <div class="sec rv">
    <div class="sec-tag">01 — Overview</div>
    <div class="en"><h2>What exactly is Hermes Agent?</h2>
      <p>Hermes Agent is an <strong>open-source AI agent</strong> built by Nous Research — the same team behind the famous Hermes series of language models. Unlike ChatGPT or Claude which are web chatbots you visit, Hermes is something you <strong>install and run yourself</strong> on any server or computer.</p>
      <p>Think of it like the difference between going to a restaurant vs having a personal chef. ChatGPT is the restaurant — you visit it, it serves you, and when you leave, it forgets you. Hermes is the personal chef who lives in your house, knows your taste, and gets better at cooking for you over time.</p>
      <p>It is the only AI agent with a <strong>built-in learning loop</strong> — meaning it creates skills from experience and improves those skills every time it uses them.</p>
    </div>
    <div class="hi" style="display:none"><h2>Hermes Agent exactly kya hai?</h2>
      <p>Hermes Agent ek <strong>open-source AI agent</strong> hai jo Nous Research ne banaya hai — wahi team jo famous Hermes language models banaati hai. ChatGPT ya Claude jaisi web chatbots ke unlike, Hermes ek cheez hai jo tum khud kisi bhi server ya computer pe <strong>install karke run karte ho</strong>.</p>
      <p>Isko samjhne ka ek aasaan tarika — restaurant vs personal chef. ChatGPT restaurant hai — tum jaate ho, serve karta hai, aur jaate hi bhool jaata hai. Hermes personal chef hai jo tumhare ghar rehta hai, tumhara taste jaanta hai, aur time ke saath aur better hota jaata hai.</p>
      <p>Yeh pehla aur abhi tak ka akaila AI agent hai jisme <strong>built-in learning loop</strong> hai — matlab experience se skills banata hai aur use karne ke saath unhe improve karta rehta hai.</p>
    </div>

    <div class="callout ca" style="margin-top:20px">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      <div class="callout-body en">
        <strong>Built by Nous Research</strong> — one of the most respected open-source AI labs. Same team that made Hermes 3 and Hermes 4 models used by millions of developers worldwide.
      </div>
      <div class="callout-body hi" style="display:none">
        <strong>Nous Research ne banaya</strong> — ek bohot respected open-source AI lab. Same team jo Hermes 3 aur Hermes 4 models banayi jise duniya bhar ke millions developers use karte hain.
      </div>
    </div>
  </div>

  <!-- 02 WHY -->
  <span class="anc" id="why"></span>
  <div class="sec rv">
    <div class="sec-tag">02 — The Need</div>
    <div class="en"><h2>Why do you actually need this?</h2>
      <p>Current AI tools have a fundamental problem — they are <strong>stateless</strong>. Every conversation starts fresh. They don't know your projects, your preferences, or what you worked on yesterday. You are the memory. You paste context every single time.</p>
    </div>
    <div class="hi" style="display:none"><h2>Tumhe actually yeh kyun chahiye?</h2>
      <p>Current AI tools ka ek fundamental problem hai — yeh <strong>stateless</strong> hote hain. Har conversation fresh start hoti hai. Unhe tumhare projects, preferences, ya kal ka kaam pata nahi. Tum hi memory ho. Har baar context paste karte ho.</p>
    </div>

    <div class="table-wrap" style="margin-top:20px">
      <table>
        <thead><tr>
          <th class="en">Problem with normal AI</th>
          <th class="hi" style="display:none">Normal AI ka problem</th>
          <th class="en">What Hermes does instead</th>
          <th class="hi" style="display:none">Hermes kya karta hai</th>
        </tr></thead>
        <tbody>
          <tr>
            <td class="en">Forgets you after every chat</td>
            <td class="hi t-no" style="display:none">Har chat ke baad bhool jaata hai</td>
            <td class="t-yes en">Persistent memory across all sessions</td>
            <td class="t-yes hi" style="display:none">Sab sessions mein yaad rakhta hai</td>
          </tr>
          <tr>
            <td class="en">Tied to one app or website</td>
            <td class="hi t-no" style="display:none">Ek hi app ya site pe kaam karta hai</td>
            <td class="t-yes en">Telegram, Discord, WhatsApp, Slack, Email</td>
            <td class="t-yes hi" style="display:none">Telegram, Discord, WhatsApp, Slack, Email pe</td>
          </tr>
          <tr>
            <td class="en">Can't work while you're offline</td>
            <td class="hi t-no" style="display:none">Offline pe kuch nahi karta</td>
            <td class="t-yes en">Runs on your server 24/7, works while you sleep</td>
            <td class="t-yes hi" style="display:none">Server pe 24/7 chalta hai, neend mein bhi kaam karta hai</td>
          </tr>
          <tr>
            <td class="en">Same quality day 1 vs day 365</td>
            <td class="hi t-no" style="display:none">Day 1 aur day 365 same quality</td>
            <td class="t-yes en">Gets smarter with every interaction</td>
            <td class="t-yes hi" style="display:none">Har interaction se aur smart hota hai</td>
          </tr>
          <tr>
            <td class="en">Expensive monthly subscriptions</td>
            <td class="hi t-no" style="display:none">Mehenga monthly subscription</td>
            <td class="t-yes en">Free and open source, just pay for AI API</td>
            <td class="t-yes hi" style="display:none">Free aur open source, sirf AI API ka cost</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- 03 FEATURES -->
  <span class="anc" id="features"></span>
  <div class="sec rv">
    <div class="sec-tag">03 — What It Can Do</div>
    <div class="en"><h2>Six things that make Hermes different</h2><p>These are the core capabilities — every one of them is genuinely useful, not just a feature checkbox.</p></div>
    <div class="hi" style="display:none"><h2>Six cheezein jo Hermes ko alag banati hain</h2><p>Yeh core capabilities hain — har ek genuinely useful hai, sirf feature list ke liye nahi.</p></div>

    <div class="feat-grid">
      <div class="feat-card">
        <div class="feat-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div class="feat-title en">Talk from Any App</div>
        <div class="feat-title hi" style="display:none">Kisi bhi App Se Baat Karo</div>
        <div class="feat-desc en">Telegram, Discord, WhatsApp, Slack, Signal, Email, or terminal. Start a task on Telegram, check progress on Discord.</div>
        <div class="feat-desc hi" style="display:none">Telegram, Discord, WhatsApp, Slack, Signal, Email ya terminal. Telegram pe task shuru karo, Discord pe progress check karo.</div>
      </div>
      <div class="feat-card">
        <div class="feat-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
        <div class="feat-title en">Grows Over Time</div>
        <div class="feat-title hi" style="display:none">Time Ke Saath Badhta Hai</div>
        <div class="feat-desc en">Auto-generates skills from experience. If it solves a problem once, it packages that solution as a reusable skill for next time.</div>
        <div class="feat-desc hi" style="display:none">Experience se auto skills banata hai. Ek baar problem solve ki, toh next time ke liye reusable skill bana deta hai.</div>
      </div>
      <div class="feat-card">
        <div class="feat-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="feat-title en">Scheduled Automation</div>
        <div class="feat-title hi" style="display:none">Scheduled Automation</div>
        <div class="feat-desc en">Just say "send me a daily report at 9am" or "run a backup every Sunday." It sets up the cron job and runs it automatically.</div>
        <div class="feat-desc hi" style="display:none">Bas kaho "roz 9am ko report bhejo" ya "har Sunday backup lo." Khud cron job set karke automatically run karta hai.</div>
      </div>
      <div class="feat-card">
        <div class="feat-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/></svg>
        </div>
        <div class="feat-title en">Full Browser Control</div>
        <div class="feat-title hi" style="display:none">Full Browser Control</div>
        <div class="feat-desc en">Web search, browser automation, screenshots, vision, image generation, text-to-speech — all built in.</div>
        <div class="feat-desc hi" style="display:none">Web search, browser automation, screenshots, vision, image generation, TTS — sab built-in hai.</div>
      </div>
      <div class="feat-card">
        <div class="feat-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="feat-title en">Subagents & Delegation</div>
        <div class="feat-title hi" style="display:none">Subagents & Delegation</div>
        <div class="feat-desc en">Can spin up isolated sub-agents to work on tasks in parallel — like managing a team of AI workers for complex jobs.</div>
        <div class="feat-desc hi" style="display:none">Complex tasks ke liye parallel sub-agents spin up kar sakta hai — jaise ek AI team manage karna.</div>
      </div>
      <div class="feat-card">
        <div class="feat-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <div class="feat-title en">Runs Anywhere</div>
        <div class="feat-title hi" style="display:none">Kahin Bhi Chalta Hai</div>
        <div class="feat-desc en">Local machine, Docker, SSH server, cloud GPU, or a $5 VPS. Serverless options too — costs nearly nothing when idle.</div>
        <div class="feat-desc hi" style="display:none">Local machine, Docker, SSH server, cloud GPU, ya $5 VPS. Idle rehne pe almost free — serverless bhi option hai.</div>
      </div>
    </div>
  </div>

  <!-- 04 LEARNING LOOP -->
  <span class="anc" id="learning"></span>
  <div class="sec rv">
    <div class="sec-tag">04 — The Core Idea</div>
    <div class="en"><h2>The learning loop — simply explained</h2>
      <p>This is the thing that makes Hermes genuinely different. Every other AI agent gives you the same quality on day 100 as day 1. Hermes does not. Here is exactly how the loop works.</p>
    </div>
    <div class="hi" style="display:none"><h2>Learning loop — seedha samjho</h2>
      <p>Yahi cheez Hermes ko genuinely different banati hai. Baaki sab AI agents day 1 aur day 100 mein same quality dete hain. Hermes nahi. Exactly yahan samjho loop kaise kaam karta hai.</p>
    </div>

    <div class="steps" style="margin-top:24px">
      <div class="step">
        <div class="step-l"><div class="step-c">1</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">You give it a task</div>
          <div class="step-title hi" style="display:none">Tum ek task dete ho</div>
          <div class="step-desc">
            <p class="en">You say something like — "debug this Python error" or "summarize this article every morning." Hermes starts working on it using the tools and skills it already has.</p>
            <p class="hi" style="display:none">Tum kuch kehte ho jaise — "is Python error ko debug karo" ya "har subah yeh article summarize karo." Hermes apne existing tools aur skills use karke kaam shuru karta hai.</p>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-l"><div class="step-c">2</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">It solves the task and remembers how</div>
          <div class="step-title hi" style="display:none">Task solve karta hai aur yaad rakhta hai kaise</div>
          <div class="step-desc">
            <p class="en">After completing the task, Hermes writes a <strong>skill file</strong> — a reusable solution packed with the exact steps it used. Next time you ask something similar, it reads that skill first.</p>
            <p class="hi" style="display:none">Task complete karne ke baad, Hermes ek <strong>skill file</strong> likhta hai — ek reusable solution jisme exact steps hain jo usne use kiye. Agli baar same cheez poochho, pehle woh skill padhi jaati hai.</p>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-l"><div class="step-c">3</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">The skill improves every time it's used</div>
          <div class="step-title hi" style="display:none">Har use ke saath skill improve hoti hai</div>
          <div class="step-desc">
            <p class="en">Skills are not static. When Hermes uses a skill and finds a better approach, it updates the skill file. So the same task gets done faster and better over time, automatically.</p>
            <p class="hi" style="display:none">Skills static nahi hain. Jab Hermes skill use karta hai aur better approach milti hai, toh skill file update ho jaati hai. Same task automatically time ke saath faster aur better hota jaata hai.</p>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-l"><div class="step-c">4</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">It builds a model of who you are</div>
          <div class="step-title hi" style="display:none">Yeh tumhare baare mein ek model banata hai</div>
          <div class="step-desc">
            <p class="en">Across all your conversations, Hermes builds up a picture of your preferences, your projects, your working style. It can search its own past conversations to recall context you've long forgotten.</p>
            <p class="hi" style="display:none">Tumhari saari conversations mein, Hermes tumhari preferences, projects, working style ka ek picture banata hai. Apni past conversations search kar sakta hai un cheezein yaad karne ke liye jo tum bhool gaye ho.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="callout cg">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <div class="callout-body en">The result: Hermes on day 30 is noticeably better than Hermes on day 1 — and that gap keeps growing. No other free AI agent does this.</div>
      <div class="callout-body hi" style="display:none">Result yeh hai: Day 30 ka Hermes day 1 se clearly better hota hai — aur yeh gap badhta rehta hai. Koi doosra free AI agent yeh nahi karta.</div>
    </div>
  </div>

  <!-- 05 INSTALLATION -->
  <span class="anc" id="install"></span>
  <div class="sec rv">
    <div class="sec-tag">05 — Installation</div>
    <div class="en"><h2>How to install Hermes Agent</h2>
      <p>Works on Linux, macOS, WSL2 (Windows), and Android via Termux. One command installs everything.</p>
    </div>
    <div class="hi" style="display:none"><h2>Hermes Agent kaise install karein</h2>
      <p>Linux, macOS, WSL2 (Windows), aur Android Termux pe kaam karta hai. Ek command mein sab install ho jaata hai.</p>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-l"><div class="step-c">1</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">Run the installer</div>
          <div class="step-title hi" style="display:none">Installer run karo</div>
          <div class="step-desc">
            <p class="en">Open your terminal and run this single command. It auto-detects your platform and installs everything needed.</p>
            <p class="hi" style="display:none">Terminal kholo aur yeh ek command run karo. Automatically tumhara platform detect karta hai aur sab kuch install karta hai.</p>
            <div class="code">
              <div class="code-top"><span class="code-lang">Terminal</span><button class="copy-btn" onclick="cp(this,'c1')">Copy</button></div>
              <pre><code id="c1">curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-l"><div class="step-c">2</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">Run the setup wizard</div>
          <div class="step-title hi" style="display:none">Setup wizard run karo</div>
          <div class="step-desc">
            <p class="en">After installation, run the setup wizard. It asks you step by step for your AI provider API key, messaging platform setup (Telegram, etc.), and other preferences. Takes about 3 minutes.</p>
            <p class="hi" style="display:none">Install ke baad, setup wizard run karo. Yeh step by step poochta hai — AI provider API key, messaging platform setup (Telegram, etc.), aur preferences. Lagbhag 3 minutes lagenge.</p>
            <div class="code">
              <div class="code-top"><span class="code-lang">Terminal</span><button class="copy-btn" onclick="cp(this,'c2')">Copy</button></div>
              <pre><code id="c2">hermes setup</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-l"><div class="step-c">3</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">Start Hermes</div>
          <div class="step-title hi" style="display:none">Hermes start karo</div>
          <div class="step-desc">
            <p class="en">Launch the terminal interface to start chatting immediately. Or run the gateway to connect your messaging apps.</p>
            <p class="hi" style="display:none">Terminal interface launch karo aur turant baat shuru karo. Ya messaging apps connect karne ke liye gateway run karo.</p>
            <div class="code">
              <div class="code-top"><span class="code-lang">Terminal — two options</span><button class="copy-btn" onclick="cp(this,'c3')">Copy</button></div>
              <pre><code id="c3"><span class="cm"># Option 1: Start terminal chat (simplest way)</span>
hermes

<span class="cm"># Option 2: Start messaging gateway (Telegram, Discord etc)</span>
hermes gateway start</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step-l"><div class="step-c">4</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">Alternative — manual install from GitHub</div>
          <div class="step-title hi" style="display:none">Alternative — GitHub se manual install</div>
          <div class="step-desc">
            <p class="en">If you prefer more control or want to develop on Hermes, you can clone and install manually. Requires Python 3.11.</p>
            <p class="hi" style="display:none">Agar zyada control chahiye ya Hermes pe develop karna ho, toh manually clone karke install karo. Python 3.11 chahiye.</p>
            <div class="code">
              <div class="code-top"><span class="code-lang">Git + Python</span><button class="copy-btn" onclick="cp(this,'c4')">Copy</button></div>
              <pre><code id="c4"><span class="cv">git</span> clone https://github.com/NousResearch/hermes-agent.git
<span class="cv">cd</span> hermes-agent

<span class="cm"># Install uv (fast Python package manager)</span>
curl -LsSf https://astral.sh/uv/install.sh | sh

<span class="cm"># Create virtual environment and install</span>
uv venv venv --python 3.11
source venv/bin/activate
uv pip install -e ".[all]"

<span class="cm"># Now run setup</span>
hermes setup</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="callout cam">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div class="callout-body en">Windows native is <strong>not supported</strong>. Use WSL2 on Windows. Android users can use Termux — follow the official Termux guide in the docs.</div>
      <div class="callout-body hi" style="display:none">Windows native <strong>supported nahi</strong> hai. Windows pe WSL2 use karo. Android users Termux use kar sakte hain — official Termux guide docs mein hai.</div>
    </div>
  </div>

  <!-- 06 FIRST TIME SETUP -->
  <span class="anc" id="setup"></span>
  <div class="sec rv">
    <div class="sec-tag">06 — First Session</div>
    <div class="en"><h2>What happens the first time you run it</h2><p>The setup wizard guides you through everything. Here's what you'll be asked and what to answer.</p></div>
    <div class="hi" style="display:none"><h2>Pehli baar run karne pe kya hota hai</h2><p>Setup wizard sab guide karta hai. Yahan bataya hai kya poochha jaayega aur kya answer karna hai.</p></div>

    <div class="steps">
      <div class="step">
        <div class="step-l"><div class="step-c">A</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">Choose your AI provider</div>
          <div class="step-title hi" style="display:none">AI provider choose karo</div>
          <div class="step-desc">
            <p class="en">You pick which AI model powers Hermes. The easiest starting options are <strong>OpenAI</strong> (GPT-4o) or <strong>Nous Portal</strong> (free tier available). You can change this anytime with <code>hermes model</code>.</p>
            <p class="hi" style="display:none">Choose karo kaun sa AI model Hermes ko power karega. Start karne ke liye sabse aasaan options hain <strong>OpenAI</strong> (GPT-4o) ya <strong>Nous Portal</strong> (free tier available). Kabhi bhi <code>hermes model</code> se change kar sakte ho.</p>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-l"><div class="step-c">B</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">Enter your API key</div>
          <div class="step-title hi" style="display:none">API key daalo</div>
          <div class="step-desc">
            <p class="en">Get your API key from the provider you chose (e.g. platform.openai.com → API keys). Paste it when prompted. Stored securely in <code>~/.hermes/.env</code> on your machine.</p>
            <p class="hi" style="display:none">Jo provider choose kiya usse API key lo (jaise platform.openai.com → API keys). Prompt aane par paste karo. Secure <code>~/.hermes/.env</code> mein store hoti hai tumhare machine pe.</p>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-l"><div class="step-c">C</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">Connect Telegram (optional but recommended)</div>
          <div class="step-title hi" style="display:none">Telegram connect karo (optional but recommended)</div>
          <div class="step-desc">
            <p class="en">Go to <a href="https://t.me/BotFather" target="_blank" style="color:var(--accent)">@BotFather</a> on Telegram, create a new bot, copy the bot token. Paste it in setup. Then you can talk to Hermes from your phone anywhere in the world.</p>
            <p class="hi" style="display:none">Telegram pe <a href="https://t.me/BotFather" target="_blank" style="color:var(--accent)">@BotFather</a> pe jao, naya bot banao, bot token copy karo. Setup mein paste karo. Phir duniya mein kahin se bhi phone se Hermes se baat kar sakte ho.</p>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-l"><div class="step-c">D</div><div class="step-line"></div></div>
        <div class="step-body">
          <div class="step-title en">Start your first conversation</div>
          <div class="step-title hi" style="display:none">Pehli conversation shuru karo</div>
          <div class="step-desc">
            <p class="en">Just start talking naturally. Try: <em>"What can you do?"</em> to see all capabilities. Or ask it to do something real — search the web, write a script, set a daily reminder. The more you use it, the smarter it gets.</p>
            <p class="hi" style="display:none">Naturally baat shuru karo. Try karo: <em>"What can you do?"</em> sab capabilities dekhne ke liye. Ya kuch real karne kaho — web search, script likhna, daily reminder set karna. Jitna use karoge, utna smart hoga.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 07 MODELS -->
  <span class="anc" id="models"></span>
  <div class="sec rv">
    <div class="sec-tag">07 — Choosing a Model</div>
    <div class="en"><h2>Which AI model should you use?</h2><p>Hermes works with 200+ models via OpenRouter alone. Here's a simple guide to picking the right one based on your needs and budget.</p></div>
    <div class="hi" style="display:none"><h2>Kaun sa AI model use karna chahiye?</h2><p>Hermes sirf OpenRouter se 200+ models ke saath kaam karta hai. Yahan simple guide hai apni needs aur budget ke hisaab se sahi model choose karne ki.</p></div>

    <div class="table-wrap">
      <table>
        <thead><tr>
          <th>Model</th>
          <th class="en">Best for</th><th class="hi" style="display:none">Best for</th>
          <th class="en">Cost</th><th class="hi" style="display:none">Cost</th>
          <th class="en">Speed</th><th class="hi" style="display:none">Speed</th>
        </tr></thead>
        <tbody>
          <tr><td class="t-em">Nous Portal</td><td class="en">Beginners, free trial</td><td class="hi" style="display:none">Beginners, free trial</td><td class="t-yes">Free tier</td><td class="t-yes">Fast</td></tr>
          <tr><td class="t-em">GPT-4o mini</td><td class="en">Everyday tasks, low cost</td><td class="hi" style="display:none">Everyday tasks, low cost</td><td class="t-yes">Very cheap</td><td class="t-yes">Very fast</td></tr>
          <tr><td class="t-em">GPT-4o</td><td class="en">Complex reasoning, quality</td><td class="hi" style="display:none">Complex reasoning, quality</td><td>Moderate</td><td class="t-yes">Fast</td></tr>
          <tr><td class="t-em">Claude Sonnet</td><td class="en">Long docs, coding</td><td class="hi" style="display:none">Long docs, coding</td><td>Moderate</td><td class="t-yes">Fast</td></tr>
          <tr><td class="t-em">Gemini Flash</td><td class="en">Large context, multimodal</td><td class="hi" style="display:none">Large context, multimodal</td><td class="t-yes">Very cheap</td><td class="t-yes">Very fast</td></tr>
          <tr><td class="t-em">Kimi / Moonshot</td><td class="en">Chinese content, long context</td><td class="hi" style="display:none">Chinese content, long context</td><td class="t-yes">Cheap</td><td>Medium</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout ca">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      <div class="callout-body en">Switch models anytime — just type <code>hermes model</code> in your terminal. No config files to edit, no restart needed. The switch takes effect immediately on the next message.</div>
      <div class="callout-body hi" style="display:none">Kabhi bhi model switch karo — terminal mein bas <code>hermes model</code> type karo. Koi config file edit nahi, koi restart nahi. Next message se turant effect aata hai.</div>
    </div>

    <!-- Platforms -->
    <h3 class="en" style="margin-top:32px">Connect it to your messaging apps</h3>
    <h3 class="hi" style="display:none;margin-top:32px">Messaging apps se connect karo</h3>
    <p class="en">After running <code>hermes gateway start</code>, you can talk to Hermes from any of these platforms.</p>
    <p class="hi" style="display:none">After <code>hermes gateway start</code> run karne ke baad, yeh sab platforms se Hermes se baat kar sakte ho.</p>

    <div class="plat-wrap">
      <div class="plat-chip">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--accent)" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 7.95c-.13.58-.48.72-.97.45l-2.68-1.97-1.29 1.24c-.14.14-.26.26-.54.26l.19-2.73 5-4.52c.22-.19-.05-.3-.34-.1l-6.17 3.88-2.66-.83c-.58-.18-.59-.58.12-.86l10.39-4.01c.48-.17.9.12.75.24z"/></svg>
        Telegram
      </div>
      <div class="plat-chip">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--accent)"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
        Discord
      </div>
      <div class="plat-chip">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--accent)"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.687 8.834a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.522-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.166 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.522-2.522v-2.522h2.522zM15.166 17.687a2.528 2.528 0 0 1-2.522-2.521 2.528 2.528 0 0 1 2.522-2.522h6.313A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.521 2.521h-6.313z"/></svg>
        Slack
      </div>
      <div class="plat-chip">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--accent)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
        WhatsApp
      </div>
      <div class="plat-chip">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Signal
      </div>
      <div class="plat-chip">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email
      </div>
      <div class="plat-chip">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
        CLI Terminal
      </div>
    </div>
  </div>

  <!-- 08 COMPARE -->
  <span class="anc" id="compare"></span>
  <div class="sec rv">
    <div class="sec-tag">08 — Honest Comparison</div>
    <div class="en"><h2>Hermes vs ChatGPT vs Claude</h2><p>An honest side-by-side. Hermes is not better at everything — but for persistent personal AI use, it wins clearly.</p></div>
    <div class="hi" style="display:none"><h2>Hermes vs ChatGPT vs Claude</h2><p>Ek honest comparison. Hermes har cheez mein better nahi — lekin persistent personal AI use ke liye clearly better hai.</p></div>

    <div class="table-wrap">
      <table>
        <thead><tr>
          <th class="en">Feature</th><th class="hi" style="display:none">Feature</th>
          <th>Hermes Agent</th>
          <th>ChatGPT</th>
          <th>Claude</th>
        </tr></thead>
        <tbody>
          <tr>
            <td class="en">Memory across sessions</td><td class="hi" style="display:none">Memory across sessions</td>
            <td class="t-yes">Full persistent</td><td>Basic (paid)</td><td>Projects (paid)</td>
          </tr>
          <tr>
            <td class="en">Self-improving skills</td><td class="hi" style="display:none">Self-improving skills</td>
            <td class="t-yes">Yes, built-in</td><td class="t-no">No</td><td class="t-no">No</td>
          </tr>
          <tr>
            <td class="en">Talk via Telegram/Discord</td><td class="hi" style="display:none">Telegram/Discord se baat</td>
            <td class="t-yes">Yes</td><td class="t-no">No</td><td class="t-no">No</td>
          </tr>
          <tr>
            <td class="en">Run scheduled tasks</td><td class="hi" style="display:none">Scheduled tasks</td>
            <td class="t-yes">Yes (cron)</td><td class="t-no">No</td><td class="t-no">No</td>
          </tr>
          <tr>
            <td class="en">Works offline / on VPS</td><td class="hi" style="display:none">Offline / VPS pe</td>
            <td class="t-yes">Yes</td><td class="t-no">No</td><td class="t-no">No</td>
          </tr>
          <tr>
            <td class="en">Cost</td><td class="hi" style="display:none">Cost</td>
            <td class="t-yes">Free + API</td><td>$20/month+</td><td>$20/month+</td>
          </tr>
          <tr>
            <td class="en">Model flexibility</td><td class="hi" style="display:none">Model flexibility</td>
            <td class="t-yes">200+ models</td><td class="t-no">GPT only</td><td class="t-no">Claude only</td>
          </tr>
          <tr>
            <td class="en">Raw AI intelligence</td><td class="hi" style="display:none">Raw AI intelligence</td>
            <td>Depends on model</td><td class="t-yes">GPT-4o quality</td><td class="t-yes">Excellent</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout cg" style="margin-top:20px">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <div class="callout-body en"><strong>Bottom line:</strong> If you want the smartest one-off answer, use Claude. If you want an AI that truly learns you, runs 24/7, and costs you almost nothing — use Hermes.</div>
      <div class="callout-body hi" style="display:none"><strong>Bottom line:</strong> Agar ek baar ka smartest answer chahiye, Claude use karo. Agar ek AI chahiye jo genuinely tumhe jaane, 24/7 chale, aur almost free ho — Hermes use karo.</div>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta-wrap rv">
    <div style="width:48px;height:48px;border-radius:50%;background:var(--accent-bg);border:1px solid var(--accent-bd);display:flex;align-items:center;justify-content:center;margin:0 auto 16px">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="var(--accent)"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round"/></svg>
    </div>
    <div class="cta-h en">Ready to install Hermes?</div>
    <div class="cta-h hi" style="display:none">Hermes install karne ke liye taiyaar ho?</div>
    <div class="cta-sub en">64,000+ developers already running it. Open source. Free forever. One command.</div>
    <div class="cta-sub hi" style="display:none">64,000+ developers already use kar rahe hain. Open source. Free forever. Ek command.</div>
    <div class="btn-row">
      <a href="https://github.com/NousResearch/hermes-agent" target="_blank" class="btn-p">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        View on GitHub
      </a>
      <a href="https://hermes-agent.nousresearch.com/docs" target="_blank" class="btn-s">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Official Docs
      </a>
      <a href="https://instagram.com/rk.codex" target="_blank" class="btn-s">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        @rk.codex
      </a>
    </div>
  </div>

</main>

<footer>
  <div class="foot-l">Made by <a href="https://instagram.com/rk.codex">@rk.codex</a> · Based on <a href="https://github.com/NousResearch/hermes-agent" target="_blank">NousResearch/hermes-agent</a></div>
  <div class="foot-r">
    <a href="https://hermes-agent.nousresearch.com" target="_blank">Official Site</a>
    <a href="https://hermes-agent.nousresearch.com/docs" target="_blank">Docs</a>
    <a href="https://discord.gg/NousResearch" target="_blank">Discord</a>
  </div>
</footer>

<script>
const html = document.documentElement;
const bd = document.getElementById('bd');

function setLang(l) {
  document.getElementById('lm').style.display = 'none';
  const isHi = l === 'hi';
  bd.classList.toggle('hindi', isHi);
  document.querySelectorAll('.en').forEach(e => e.style.display = isHi ? 'none' : '');
  document.querySelectorAll('.hi').forEach(e => e.style.display = isHi ? '' : 'none');
  document.getElementById('ben').classList.toggle('on', !isHi);
  document.getElementById('bhi').classList.toggle('on', isHi);
  localStorage.setItem('rk-lang', l);
}

document.getElementById('thm').addEventListener('click', () => {
  const d = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', d ? 'light' : 'dark');
  localStorage.setItem('rk-theme', d ? 'light' : 'dark');
});

function cp(btn, id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.textContent.replace(/\\s+/g, ' ').trim()).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('done');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 2000);
  });
}

const obs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); }), { threshold:.07 });
document.querySelectorAll('.rv').forEach(el => obs.observe(el));

window.addEventListener('load', () => {
  const t = localStorage.getItem('rk-theme');
  if(t) html.setAttribute('data-theme', t);
  const l = localStorage.getItem('rk-lang');
  if(l) setLang(l);
});
<\/script>
</body>
</html>
`,Fm=`<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>obra/superpowers — Deep Dive | rk.codex</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Fira+Code:wght@300;400;500&display=swap" rel="stylesheet">
<style>

/* ── THEME VARIABLES ── */
[data-theme="light"] {
  --bg: #faf9f7;
  --bg2: #f2f0ec;
  --bg3: #ebe8e2;
  --surface: #ffffff;
  --text: #1a1814;
  --text2: #4a4641;
  --text3: #8a8480;
  --border: #e2ddd8;
  --border2: #ccc8c2;
  --accent: #c0392b;
  --accent2: #e74c3c;
  --accent-bg: #fdf3f2;
  --accent-border: #f5c6c2;
  --code-bg: #f5f3ef;
  --code-text: #2c2c2c;
  --shadow: rgba(0,0,0,0.07);
  --shadow2: rgba(0,0,0,0.12);
  --star: #e67e22;
}

[data-theme="dark"] {
  --bg: #131210;
  --bg2: #1c1a17;
  --bg3: #242018;
  --surface: #1c1a17;
  --text: #f0ece4;
  --text2: #b8b0a4;
  --text3: #7a7268;
  --border: #2e2a24;
  --border2: #3e3830;
  --accent: #e05c4a;
  --accent2: #f07060;
  --accent-bg: #221814;
  --accent-border: #4a2820;
  --code-bg: #0e0d0b;
  --code-text: #d4cfc8;
  --shadow: rgba(0,0,0,0.3);
  --shadow2: rgba(0,0,0,0.5);
  --star: #f39c12;
}

/* ── RESET ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Instrument Sans', system-ui, sans-serif;
  line-height: 1.7;
  transition: background 0.3s ease, color 0.3s ease;
  overflow-x: hidden;
}
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg2); }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 3px; }

/* ── PROGRESS BAR ── */
#reading-bar {
  position: fixed; top: 0; left: 0; right: 0; height: 2px;
  background: var(--bg2); z-index: 999;
}
#reading-fill {
  height: 100%; width: 0%;
  background: var(--accent);
  transition: width 0.1s linear;
}

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 40px; height: 58px;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s, border-color 0.3s;
}
.nav-left { display: flex; align-items: center; gap: 20px; }
.nav-brand {
  font-family: 'Playfair Display', serif;
  font-size: 18px; font-weight: 700;
  color: var(--text); text-decoration: none;
  letter-spacing: -0.02em;
}
.nav-brand em { color: var(--accent); font-style: normal; }
.nav-sep { color: var(--border2); font-size: 18px; }
.nav-repo {
  font-family: 'Fira Code', monospace;
  font-size: 12px; color: var(--text3);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-repo:hover { color: var(--accent); }

.nav-right { display: flex; align-items: center; gap: 16px; }

.nav-links { display: flex; gap: 24px; list-style: none; }
.nav-links a {
  font-size: 13px; font-weight: 500;
  color: var(--text3); text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.01em;
}
.nav-links a:hover { color: var(--text); }

/* Theme toggle */
.theme-btn {
  width: 38px; height: 22px;
  background: var(--bg3);
  border: 1px solid var(--border2);
  border-radius: 11px;
  cursor: pointer;
  position: relative;
  transition: background 0.3s;
  flex-shrink: 0;
}
.theme-btn::after {
  content: '';
  position: absolute;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--text2);
  top: 2px; left: 2px;
  transition: transform 0.25s ease, background 0.3s;
}
[data-theme="dark"] .theme-btn::after {
  transform: translateX(16px);
  background: var(--accent);
}

/* ── HERO ── */
.hero {
  padding: 130px 40px 80px;
  max-width: 860px;
  margin: 0 auto;
  position: relative;
}
.hero-breadcrumb {
  font-family: 'Fira Code', monospace;
  font-size: 12px; color: var(--text3);
  margin-bottom: 28px;
  display: flex; align-items: center; gap: 8px;
  opacity: 0;
  animation: slideUp 0.6s ease 0.1s forwards;
}
.hero-breadcrumb a { color: var(--text3); text-decoration: none; }
.hero-breadcrumb a:hover { color: var(--accent); }
.hero-breadcrumb span { color: var(--border2); }

.hero-label {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent-bg);
  border: 1px solid var(--accent-border);
  color: var(--accent);
  font-size: 12px; font-weight: 600;
  letter-spacing: 0.06em; text-transform: uppercase;
  padding: 5px 12px; border-radius: 4px;
  margin-bottom: 24px;
  opacity: 0;
  animation: slideUp 0.6s ease 0.2s forwards;
}
.label-dot {
  width: 6px; height: 6px;
  background: var(--accent); border-radius: 50%;
  animation: blink 2s ease infinite;
}
@keyframes blink { 0%,100%{opacity:1}50%{opacity:0.3} }

h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(36px, 5.5vw, 62px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 24px;
  opacity: 0;
  animation: slideUp 0.7s ease 0.3s forwards;
}
h1 em {
  font-style: italic;
  color: var(--accent);
}

.hero-desc {
  font-size: 18px;
  color: var(--text2);
  max-width: 640px;
  line-height: 1.75;
  margin-bottom: 36px;
  opacity: 0;
  animation: slideUp 0.7s ease 0.4s forwards;
}

.hero-meta {
  display: flex; align-items: center;
  flex-wrap: wrap; gap: 20px;
  margin-bottom: 40px;
  opacity: 0;
  animation: slideUp 0.7s ease 0.5s forwards;
}
.meta-pill {
  display: inline-flex; align-items: center; gap: 7px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 7px 14px;
  font-size: 13px; font-weight: 500;
  color: var(--text2);
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.meta-pill:hover {
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: 0 2px 8px var(--shadow);
}
.meta-pill svg { flex-shrink: 0; }
.star-count { color: var(--star); font-weight: 700; }

.hero-byline {
  font-size: 13px; color: var(--text3);
  border-top: 1px solid var(--border);
  padding-top: 20px;
  opacity: 0;
  animation: slideUp 0.7s ease 0.6s forwards;
}
.hero-byline a { color: var(--text2); text-decoration: none; }
.hero-byline a:hover { color: var(--accent); }

/* ── TOC ── */
.toc-wrap {
  max-width: 860px; margin: 0 auto;
  padding: 0 40px 60px;
}
.toc {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px 32px;
  opacity: 0;
  transform: translateY(20px);
}
.toc.in-view { animation: slideUp 0.5s ease forwards; }
.toc-title {
  font-family: 'Playfair Display', serif;
  font-size: 15px; font-weight: 700;
  color: var(--text3); margin-bottom: 16px;
  text-transform: uppercase; letter-spacing: 0.08em;
}
.toc-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 4px 24px; }
.toc-list a {
  display: flex; align-items: center; gap: 8px;
  font-size: 14px; color: var(--text2);
  text-decoration: none; padding: 5px 0;
  border-bottom: 1px solid transparent;
  transition: color 0.2s;
}
.toc-list a:hover { color: var(--accent); }
.toc-num { font-family: 'Fira Code', monospace; font-size: 11px; color: var(--text3); min-width: 22px; }

/* ── MAIN CONTENT ── */
.content {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 40px 80px;
}

/* ── SECTION ── */
.section {
  margin-bottom: 72px;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.section.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-label {
  font-family: 'Fira Code', monospace;
  font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 12px;
  display: flex; align-items: center; gap: 8px;
}
.section-label::after {
  content: '';
  flex: 1; height: 1px; background: var(--accent-border);
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 700; letter-spacing: -0.025em;
  color: var(--text); margin-bottom: 20px;
  line-height: 1.2;
}
h3 {
  font-family: 'Playfair Display', serif;
  font-size: 20px; font-weight: 700;
  color: var(--text); margin-bottom: 12px;
  margin-top: 28px;
}
p {
  font-size: 16.5px; color: var(--text2);
  margin-bottom: 18px; max-width: 700px;
  line-height: 1.78;
}

/* ── CALLOUT ── */
.callout {
  background: var(--accent-bg);
  border-left: 3px solid var(--accent);
  border-radius: 0 8px 8px 0;
  padding: 18px 22px;
  margin: 28px 0;
}
.callout p { margin: 0; font-size: 15.5px; color: var(--text); }
.callout strong { color: var(--accent); }

/* ── PULL QUOTE ── */
.pull-quote {
  font-family: 'Playfair Display', serif;
  font-size: clamp(20px, 2.5vw, 26px);
  font-style: italic;
  color: var(--text);
  line-height: 1.5;
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
  padding: 24px 0;
  margin: 36px 0;
}

/* ── SKILL CARDS ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 14px;
  margin: 28px 0;
}
.skill-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  cursor: default;
  position: relative;
  overflow: hidden;
}
.skill-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.skill-card:hover {
  border-color: var(--accent-border);
  box-shadow: 0 4px 16px var(--shadow);
  transform: translateY(-2px);
}
.skill-card:hover::before { transform: scaleX(1); }
.skill-num {
  font-family: 'Fira Code', monospace;
  font-size: 10px; color: var(--text3);
  margin-bottom: 8px; letter-spacing: 0.08em;
}
.skill-name {
  font-family: 'Playfair Display', serif;
  font-size: 15px; font-weight: 700;
  color: var(--text); margin-bottom: 6px;
}
.skill-desc { font-size: 13px; color: var(--text3); line-height: 1.55; margin: 0; }

/* ── WORKFLOW STEPS ── */
.steps { margin: 28px 0; }
.step {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 0 20px;
  margin-bottom: 0;
  position: relative;
}
.step + .step .step-body { border-top: 1px solid var(--border); }
.step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.step-circle {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 2px solid var(--border2);
  background: var(--surface);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 14px; font-weight: 700;
  color: var(--text2);
  flex-shrink: 0;
  transition: border-color 0.3s, color 0.3s, background 0.3s;
  z-index: 1;
}
.step:hover .step-circle {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-bg);
}
.step-line {
  width: 1px; flex: 1;
  background: var(--border);
  margin: 6px 0;
}
.step:last-child .step-line { display: none; }
.step-body { padding: 20px 0 24px; }
.step-title {
  font-family: 'Playfair Display', serif;
  font-size: 17px; font-weight: 700;
  color: var(--text); margin-bottom: 6px;
}
.step-desc { font-size: 14.5px; color: var(--text2); margin: 0; line-height: 1.65; }

/* ── CODE BLOCK ── */
.code-wrap {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  margin: 24px 0;
  overflow: hidden;
}
.code-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  background: var(--bg2);
}
.code-label {
  font-family: 'Fira Code', monospace;
  font-size: 11px; color: var(--text3);
  letter-spacing: 0.06em;
}
.code-dots { display: flex; gap: 6px; }
.code-dots span {
  width: 10px; height: 10px; border-radius: 50%;
}
.cd1 { background: #ff5f56; }
.cd2 { background: #ffbd2e; }
.cd3 { background: #27c93f; }
pre {
  padding: 20px;
  overflow-x: auto;
}
code {
  font-family: 'Fira Code', monospace;
  font-size: 13px; color: var(--code-text);
  line-height: 1.75;
}
.cm { color: var(--text3); }
.ck { color: #c0392b; }
.cs { color: #27ae60; }
.cv { color: #2980b9; }
[data-theme="dark"] .ck { color: #e07070; }
[data-theme="dark"] .cs { color: #70c080; }
[data-theme="dark"] .cv { color: #70a8e0; }

/* ── PLATFORMS ── */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin: 24px 0;
}
.platform-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px 18px;
  text-decoration: none;
  transition: all 0.2s;
  display: block;
}
.platform-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow);
}
.platform-name {
  font-size: 14px; font-weight: 600;
  color: var(--text); margin-bottom: 4px;
}
.platform-note { font-size: 12px; color: var(--text3); }

/* ── COMPARISON TABLE ── */
.table-wrap {
  overflow-x: auto;
  margin: 24px 0;
  border-radius: 10px;
  border: 1px solid var(--border);
}
table { width: 100%; border-collapse: collapse; }
th {
  font-family: 'Fira Code', monospace;
  font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text3);
  padding: 12px 18px;
  border-bottom: 1px solid var(--border);
  text-align: left;
  background: var(--bg2);
}
td {
  padding: 13px 18px;
  border-bottom: 1px solid var(--border);
  font-size: 14px; color: var(--text2);
}
tr:last-child td { border-bottom: none; }
tr:hover td { background: var(--bg2); }
.t-yes { color: #27ae60; font-weight: 600; }
.t-no { color: var(--accent); font-weight: 600; }
.t-em { font-weight: 600; color: var(--text); }

/* ── AUTHOR BIO ── */
.author-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
  display: flex; gap: 20px; align-items: flex-start;
  margin: 28px 0;
}
.author-avatar {
  width: 52px; height: 52px; border-radius: 50%;
  background: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 22px; font-weight: 700;
  color: white; flex-shrink: 0;
}
.author-name {
  font-family: 'Playfair Display', serif;
  font-size: 17px; font-weight: 700;
  color: var(--text); margin-bottom: 4px;
}
.author-bio { font-size: 14px; color: var(--text2); margin: 0; line-height: 1.6; }
.author-link {
  display: inline-block; margin-top: 10px;
  font-size: 13px; color: var(--accent);
  text-decoration: none;
  font-family: 'Fira Code', monospace;
}
.author-link:hover { text-decoration: underline; }

/* ── CTA SECTION ── */
.cta-block {
  background: var(--text);
  border-radius: 16px;
  padding: 48px 40px;
  text-align: center;
  margin: 60px 0 0;
  position: relative;
  overflow: hidden;
}
.cta-block::before {
  content: '';
  position: absolute;
  top: -40px; right: -40px;
  width: 160px; height: 160px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
}
.cta-block::after {
  content: '';
  position: absolute;
  bottom: -60px; left: -30px;
  width: 200px; height: 200px;
  border-radius: 50%;
  background: rgba(255,255,255,0.03);
}
.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 900;
  color: white; margin-bottom: 12px;
  letter-spacing: -0.03em;
  position: relative; z-index: 1;
}
[data-theme="dark"] .cta-title { color: var(--bg); }
.cta-sub {
  font-size: 16px; color: rgba(255,255,255,0.6);
  margin-bottom: 28px;
  position: relative; z-index: 1;
}
[data-theme="dark"] .cta-sub { color: rgba(0,0,0,0.5); }
.cta-btns {
  display: flex; justify-content: center;
  gap: 12px; flex-wrap: wrap;
  position: relative; z-index: 1;
}
.cta-btn-p {
  font-size: 14px; font-weight: 600;
  background: var(--accent);
  color: white; border: none; border-radius: 8px;
  padding: 13px 26px; cursor: pointer;
  text-decoration: none; display: inline-block;
  transition: opacity 0.2s, transform 0.2s;
}
.cta-btn-p:hover { opacity: 0.88; transform: translateY(-1px); }
.cta-btn-s {
  font-size: 14px; font-weight: 600;
  background: rgba(255,255,255,0.1);
  color: white; border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px; padding: 13px 26px;
  text-decoration: none; display: inline-block;
  transition: background 0.2s;
}
[data-theme="dark"] .cta-btn-s {
  color: var(--bg); border-color: rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.1);
}
.cta-btn-s:hover { background: rgba(255,255,255,0.18); }

/* ── FOOTER ── */
footer {
  border-top: 1px solid var(--border);
  padding: 32px 40px;
  display: flex; align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; gap: 12px;
  max-width: 860px; margin: 0 auto;
}
.foot-l {
  font-size: 13px; color: var(--text3);
  font-family: 'Fira Code', monospace;
}
.foot-l a { color: var(--text3); text-decoration: none; }
.foot-l a:hover { color: var(--accent); }
.foot-r { display: flex; gap: 16px; }
.foot-r a {
  font-size: 13px; color: var(--text3);
  text-decoration: none; transition: color 0.2s;
}
.foot-r a:hover { color: var(--text); }

/* ── HORIZONTAL RULE ── */
hr {
  border: none;
  border-top: 1px solid var(--border);
  margin: 40px 0;
}

/* ── INLINE CODE ── */
:not(pre) > code {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  background: var(--code-bg);
  color: var(--accent);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid var(--border);
}

/* ── LINK STYLE ── */
a.text-link {
  color: var(--accent); text-decoration: underline;
  text-underline-offset: 3px;
}
a.text-link:hover { text-decoration: none; }

/* ── ANIMATIONS ── */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── RESPONSIVE ── */
@media (max-width: 700px) {
  nav { padding: 0 20px; }
  .nav-links { display: none; }
  .hero, .toc-wrap, .content { padding-left: 20px; padding-right: 20px; }
  .toc-list { grid-template-columns: 1fr; }
  .hero { padding-top: 100px; }
  .skills-grid { grid-template-columns: 1fr; }
  .step { grid-template-columns: 40px 1fr; gap: 0 14px; }
  .cta-block { padding: 36px 24px; }
  footer { padding: 24px 20px; }
  .author-card { flex-direction: column; }
}

/* ── SECTION ANCHOR OFFSET (for sticky nav) ── */
.section-anchor {
  display: block;
  position: relative;
  top: -80px;
  visibility: hidden;
}
</style>
</head>
<body>

<!-- Reading progress -->
<div id="reading-bar"><div id="reading-fill"></div></div>

<!-- Nav -->
<nav>
  <div class="nav-left">
    <a href="#" class="nav-brand">rk<em>.codex</em></a>
    <span class="nav-sep">/</span>
    <a href="https://github.com/obra/superpowers" target="_blank" class="nav-repo">obra/superpowers</a>
  </div>
  <ul class="nav-links">
    <li><a href="#what">What is it</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#workflow">Workflow</a></li>
    <li><a href="#install">Install</a></li>
    <li><a href="#author">Author</a></li>
  </ul>
  <div class="nav-right">
    <button class="theme-btn" id="themeBtn" title="Toggle dark mode" aria-label="Toggle dark mode"></button>
  </div>
</nav>

<!-- Hero -->
<section class="hero">
  <div class="hero-breadcrumb">
    <a href="#">rk.codex</a>
    <span>/</span>
    <a href="#">GitHub Deep Dive</a>
    <span>/</span>
    <span>obra/superpowers</span>
  </div>

  <div class="hero-label">
    <div class="label-dot"></div>
    Trending Today · GitHub
  </div>

  <h1>Give your<br>coding agent<br><em>actual superpowers.</em></h1>

  <p class="hero-desc">
    A complete software development workflow for AI coding agents — built on composable skills that trigger automatically. No more vague prompts, no more random output. Just a senior-level methodology your agent follows every single time.
  </p>

  <div class="hero-meta">
    <a href="https://github.com/obra/superpowers" target="_blank" class="meta-pill">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
      View on GitHub
    </a>
    <span class="meta-pill">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      <span class="star-count">140k+</span>&nbsp;stars
    </span>
    <span class="meta-pill">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
      11.9k forks
    </span>
    <span class="meta-pill">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      Updated 2 days ago
    </span>
  </div>

  <div class="hero-byline">
    Written by <a href="https://instagram.com/rk.codex">@rk.codex</a> · April 2026 · 8 min read
  </div>
</section>

<!-- TOC -->
<div class="toc-wrap">
  <div class="toc" id="toc">
    <div class="toc-title">On this page</div>
    <ol class="toc-list">
      <li><a href="#what"><span class="toc-num">01</span>What is Superpowers?</a></li>
      <li><a href="#problem"><span class="toc-num">02</span>The problem it solves</a></li>
      <li><a href="#skills"><span class="toc-num">03</span>The 10 built-in skills</a></li>
      <li><a href="#workflow"><span class="toc-num">04</span>How the workflow works</a></li>
      <li><a href="#install"><span class="toc-num">05</span>How to install it</a></li>
      <li><a href="#platforms"><span class="toc-num">06</span>Supported platforms</a></li>
      <li><a href="#compare"><span class="toc-num">07</span>vs other frameworks</a></li>
      <li><a href="#author"><span class="toc-num">08</span>Who built it</a></li>
    </ol>
  </div>
</div>

<!-- CONTENT -->
<main class="content">

  <!-- SECTION 1 -->
  <span class="section-anchor" id="what"></span>
  <div class="section">
    <div class="section-label">01 — Overview</div>
    <h2>What is Superpowers?</h2>
    <p>
      Superpowers is an open-source <strong>agentic skills framework</strong> built by Jesse Vincent. It gives your AI coding agent — Claude Code, Cursor, Copilot, Codex — a structured set of behaviours it follows automatically every time you start a project.
    </p>
    <p>
      The core idea is simple but powerful: instead of relying on you to prompt your agent correctly every single time, Superpowers bakes in a proven software development methodology that the agent follows on its own. It reads a set of markdown-based <code>SKILL.md</code> files and uses them as its operating instructions.
    </p>

    <div class="pull-quote">
      "Your coding agent just has Superpowers. It doesn't jump into writing code. Instead, it steps back and asks what you're really trying to do."
      <br><span style="font-family:'Instrument Sans',sans-serif;font-size:15px;font-style:normal;color:var(--text3);font-weight:400;margin-top:10px;display:block;">— Jesse Vincent, creator</span>
    </div>

    <p>
      Think of it as hiring a senior engineer who already knows your team's processes. You don't need to explain how to brainstorm, plan, implement, test, and review — they already know. Superpowers does the same thing for AI agents.
    </p>

    <div class="callout">
      <p><strong>In short:</strong> It's a complete development workflow encoded as skills. Your agent reads the skills, internalises the methodology, and applies it automatically — without you needing to paste prompts or remember what to ask.</p>
    </div>
  </div>

  <!-- SECTION 2 -->
  <span class="section-anchor" id="problem"></span>
  <div class="section">
    <div class="section-label">02 — The Problem</div>
    <h2>Why most people get mediocre results from AI agents</h2>
    <p>
      Here's what usually happens when you use a coding agent without a methodology. You describe a feature, the agent starts writing code immediately, goes down a rabbit hole, produces something that half-works, misses edge cases, and you end up spending more time debugging the agent's output than if you'd written it yourself.
    </p>
    <p>
      The problem isn't the model. GPT-4, Claude Sonnet, Gemini — they're all genuinely capable. The problem is the <em>absence of process</em>. A junior developer who jumps straight into code without understanding requirements produces bad results. The same is true for AI agents.
    </p>
    <p>
      What experienced engineers know is that the work before the code is the most important work. Clarifying the problem, designing the solution, writing a plan, reviewing the implementation — these steps are what separate good software from bad software. Superpowers encodes exactly those steps.
    </p>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Without Superpowers</th>
            <th>With Superpowers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Agent jumps straight to code</td>
            <td class="t-em">Agent brainstorms first, asks clarifying questions</td>
          </tr>
          <tr>
            <td>You repeat context every session</td>
            <td class="t-em">Skills load automatically, no repetition needed</td>
          </tr>
          <tr>
            <td>No consistent testing approach</td>
            <td class="t-em">True red/green TDD baked into the workflow</td>
          </tr>
          <tr>
            <td>Single agent does everything</td>
            <td class="t-em">Subagent-driven development for parallel work</td>
          </tr>
          <tr>
            <td>Debugging is guesswork</td>
            <td class="t-em">Systematic 4-phase root cause process</td>
          </tr>
          <tr>
            <td>Plans are vague or missing</td>
            <td class="t-em">Bite-sized tasks (2–5 min each) with file paths and verification</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- SECTION 3 -->
  <span class="section-anchor" id="skills"></span>
  <div class="section">
    <div class="section-label">03 — The Skills</div>
    <h2>The 10 built-in skills</h2>
    <p>
      Skills are the heart of Superpowers. Each skill is a markdown file that defines when the agent should use it, what it does, and how it works. The agent checks for relevant skills before any task — they're mandatory workflows, not optional suggestions.
    </p>

    <div class="skills-grid">
      <div class="skill-card">
        <div class="skill-num">skill · 01</div>
        <div class="skill-name">Brainstorming</div>
        <p class="skill-desc">Triggers before writing code. Refines rough ideas through questions and validates the design in readable chunks before any implementation.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 02</div>
        <div class="skill-name">Using Git Worktrees</div>
        <p class="skill-desc">After design approval, creates an isolated workspace on a new branch. Multiple tasks can run in parallel without clobbering each other.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 03</div>
        <div class="skill-name">Writing Plans</div>
        <p class="skill-desc">Breaks work into 2–5 minute tasks. Every task has exact file paths, complete code, and verification steps — clear enough for any agent to follow.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 04</div>
        <div class="skill-name">Subagent-Driven Dev</div>
        <p class="skill-desc">Dispatches tasks to subagents one by one with two-stage review — spec compliance first, then code quality. Dramatically faster iteration.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 05</div>
        <div class="skill-name">Executing Plans</div>
        <p class="skill-desc">Works through each engineering task systematically when subagent dispatch isn't available. Single-agent fallback that still follows the plan.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 06</div>
        <div class="skill-name">Systematic Debugging</div>
        <p class="skill-desc">4-phase root cause process including root-cause tracing, defense-in-depth, and condition-based waiting. Debugging stops being guesswork.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 07</div>
        <div class="skill-name">Test-Driven Development</div>
        <p class="skill-desc">Emphasises true red/green TDD. YAGNI and DRY principles enforced. The agent writes tests first, implementation second — always.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 08</div>
        <div class="skill-name">Requesting Code Review</div>
        <p class="skill-desc">Structured approach for when the agent needs another pass on its own work or wants to surface potential issues before you see the output.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 09</div>
        <div class="skill-name">Receiving Code Review</div>
        <p class="skill-desc">Handles incoming review feedback — how to process comments, prioritise changes, and respond to reviewer concerns methodically.</p>
      </div>
      <div class="skill-card">
        <div class="skill-num">skill · 10</div>
        <div class="skill-name">Verification Before Done</div>
        <p class="skill-desc">Ensures the agent confirms something is actually fixed or complete — not just that it thinks it is. No premature "done" signals.</p>
      </div>
    </div>

    <p style="margin-top:12px">
      Skills live directly in the repository and update automatically when you update the plugin. You can also write your own custom skills following the <code>SKILL.md</code> format — the agent learns them immediately.
    </p>
  </div>

  <!-- SECTION 4 -->
  <span class="section-anchor" id="workflow"></span>
  <div class="section">
    <div class="section-label">04 — The Workflow</div>
    <h2>How a session actually works</h2>
    <p>
      Here's what happens from the moment you fire up your coding agent with Superpowers installed. This is the complete loop that runs for every non-trivial task.
    </p>

    <div class="steps">
      <div class="step">
        <div class="step-left">
          <div class="step-circle">1</div>
          <div class="step-line"></div>
        </div>
        <div class="step-body">
          <div class="step-title">You describe what you want to build</div>
          <p class="step-desc">Nothing special required. Just describe the feature or task in natural language. Superpowers detects that you're trying to start something and kicks in automatically.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-left">
          <div class="step-circle">2</div>
          <div class="step-line"></div>
        </div>
        <div class="step-body">
          <div class="step-title">Brainstorming skill activates</div>
          <p class="step-desc">Instead of jumping to code, the agent asks clarifying questions, explores alternatives, and presents the design in chunks short enough to actually read. It writes a design doc and asks you to review it.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-left">
          <div class="step-circle">3</div>
          <div class="step-line"></div>
        </div>
        <div class="step-body">
          <div class="step-title">Writing-plans skill activates</div>
          <p class="step-desc">With your approved design, the agent creates a granular implementation plan. Tasks are 2–5 minutes each, with exact file paths, complete code, and verification steps at every stage.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-left">
          <div class="step-circle">4</div>
          <div class="step-line"></div>
        </div>
        <div class="step-body">
          <div class="step-title">Git worktree created</div>
          <p class="step-desc">A fresh isolated workspace is created on a new branch. This means you can run parallel tasks on the same project without them interfering with each other.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-left">
          <div class="step-circle">5</div>
          <div class="step-line"></div>
        </div>
        <div class="step-body">
          <div class="step-title">Subagent-driven development begins</div>
          <p class="step-desc">The agent dispatches tasks one by one to subagents. Each task goes through two-stage review — spec compliance first, code quality second. No task is marked done until it passes verification.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-left">
          <div class="step-circle">6</div>
          <div class="step-line"></div>
        </div>
        <div class="step-body">
          <div class="step-title">Branch finishing and review</div>
          <p class="step-desc">At the end, the agent offers to create a GitHub pull request, merge the worktree back to the source branch, or stop. Everything is logged. Nothing gets silently committed.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 5 -->
  <span class="section-anchor" id="install"></span>
  <div class="section">
    <div class="section-label">05 — Installation</div>
    <h2>How to install Superpowers</h2>
    <p>Installation varies by platform. The fastest way is via the Claude Code plugin marketplace — two commands and you're done.</p>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span class="cd1"></span><span class="cd2"></span><span class="cd3"></span></div>
        <div class="code-label">Claude Code · Terminal</div>
      </div>
      <pre><code><span class="cm"># Add the plugin marketplace</span>
<span class="cv">/plugin</span> marketplace add obra/superpowers-marketplace

<span class="cm"># Install Superpowers</span>
<span class="cv">/plugin</span> install superpowers@superpowers-marketplace

<span class="cm"># Restart Claude Code — you're done.</span>
<span class="cm"># The agent will now read its skills on every session start.</span></code></pre>
    </div>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span class="cd1"></span><span class="cd2"></span><span class="cd3"></span></div>
        <div class="code-label">GitHub Copilot</div>
      </div>
      <pre><code><span class="cv">copilot</span> plugin marketplace add obra/superpowers-marketplace
<span class="cv">copilot</span> plugin install superpowers@superpowers-marketplace</code></pre>
    </div>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span class="cd1"></span><span class="cd2"></span><span class="cd3"></span></div>
        <div class="code-label">Gemini CLI</div>
      </div>
      <pre><code><span class="cm"># Gemini extensions install</span>
<span class="ck">https://github.com/obra/superpowers</span></code></pre>
    </div>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span class="cd1"></span><span class="cd2"></span><span class="cd3"></span></div>
        <div class="code-label">OpenCode (npm package)</div>
      </div>
      <pre><code><span class="cm"># Add one line to opencode.json — skills directory auto-registers</span>
<span class="cm"># Install from git as npm package</span>
<span class="cv">npm</span> install obra/superpowers</code></pre>
    </div>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-dots"><span class="cd1"></span><span class="cd2"></span><span class="cd3"></span></div>
        <div class="code-label">Codex / Manual Setup</div>
      </div>
      <pre><code><span class="cm"># Fetch and follow instructions from:</span>
<span class="cs">https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.codex/INSTALL.md</span></code></pre>
    </div>

    <div class="callout" style="margin-top:24px">
      <p><strong>After installation:</strong> Start a new session and ask for something that should trigger a skill — "help me plan this feature" or "let's debug this issue". The agent will automatically invoke the relevant skill. You'll see the difference immediately.</p>
    </div>
  </div>

  <!-- SECTION 6 -->
  <span class="section-anchor" id="platforms"></span>
  <div class="section">
    <div class="section-label">06 — Platforms</div>
    <h2>Works with every major coding agent</h2>
    <p>Superpowers isn't tied to a single platform. It works across every major AI coding tool — the methodology travels with you.</p>

    <div class="platform-grid">
      <a href="https://claude.ai/code" target="_blank" class="platform-card">
        <div class="platform-name">Claude Code</div>
        <div class="platform-note">Plugin marketplace · Official support</div>
      </a>
      <a href="https://cursor.sh" target="_blank" class="platform-card">
        <div class="platform-name">Cursor</div>
        <div class="platform-note">Built-in plugin marketplace</div>
      </a>
      <a href="https://github.com/features/copilot" target="_blank" class="platform-card">
        <div class="platform-name">GitHub Copilot</div>
        <div class="platform-note">Copilot plugin install</div>
      </a>
      <a href="https://opencode.ai" target="_blank" class="platform-card">
        <div class="platform-name">OpenCode</div>
        <div class="platform-note">One-line npm install</div>
      </a>
      <a href="https://platform.openai.com/codex" target="_blank" class="platform-card">
        <div class="platform-name">OpenAI Codex</div>
        <div class="platform-note">Manual setup via INSTALL.md</div>
      </a>
      <a href="https://gemini.google.com" target="_blank" class="platform-card">
        <div class="platform-name">Gemini CLI</div>
        <div class="platform-note">Extension install from GitHub</div>
      </a>
    </div>
  </div>

  <!-- SECTION 7 -->
  <span class="section-anchor" id="compare"></span>
  <div class="section">
    <div class="section-label">07 — Comparison</div>
    <h2>How it compares to other approaches</h2>
    <p>There are other ways to add structure to AI agents — system prompts, memory tools, context files. Here's how Superpowers differs from the most common alternatives.</p>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Approach</th>
            <th>Auto-triggers</th>
            <th>Covers full dev cycle</th>
            <th>Works across agents</th>
            <th>Extensible</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="t-em">Superpowers</td>
            <td class="t-yes">Yes</td>
            <td class="t-yes">Yes</td>
            <td class="t-yes">Yes</td>
            <td class="t-yes">Yes (write your own)</td>
          </tr>
          <tr>
            <td>System prompts</td>
            <td class="t-no">Manual</td>
            <td class="t-no">Partial</td>
            <td class="t-no">Per-tool</td>
            <td>Limited</td>
          </tr>
          <tr>
            <td>Context files (CLAUDE.md)</td>
            <td class="t-yes">Yes</td>
            <td class="t-no">No</td>
            <td class="t-no">Per-tool</td>
            <td>Limited</td>
          </tr>
          <tr>
            <td>LangChain / CrewAI</td>
            <td class="t-no">Code required</td>
            <td class="t-no">Partial</td>
            <td class="t-no">No</td>
            <td class="t-yes">Yes (Python)</td>
          </tr>
          <tr>
            <td>Memory MCP tools</td>
            <td class="t-yes">Partial</td>
            <td class="t-no">No</td>
            <td class="t-yes">Some</td>
            <td>Limited</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>The key differentiator is that Superpowers covers the <em>entire</em> software development cycle — from brainstorming and planning through implementation, testing, debugging, and review — and does it automatically without you needing to orchestrate anything.</p>
  </div>

  <!-- SECTION 8 -->
  <span class="section-anchor" id="author"></span>
  <div class="section">
    <div class="section-label">08 — The Creator</div>
    <h2>Who built Superpowers</h2>
    <p>
      Superpowers is built by Jesse Vincent and the team at Prime Radiant. Jesse has been a developer for decades — he's the creator of the Keyboardio keyboard and has shipped significant open-source work across hardware and software.
    </p>

    <div class="author-card">
      <div class="author-avatar">J</div>
      <div>
        <div class="author-name">Jesse Vincent</div>
        <p class="author-bio">Creator of Superpowers and Keyboardio. Software and hardware maker. Built Superpowers from his own process of using AI coding agents in production — documenting and systematising what actually worked.</p>
        <a href="https://blog.fsck.com" target="_blank" class="author-link">blog.fsck.com →</a>
      </div>
    </div>

    <p>
      The Discord community for Superpowers is active and welcoming — it's a good place to share what you're building and ask questions. You can file bugs directly via the GitHub issues page, and the team actively reviews pull requests for new skills.
    </p>

    <p>
      If Superpowers has helped you ship something that makes money, Jesse explicitly says he'd appreciate sponsorship of his open-source work. That kind of honesty from a creator is rare and worth supporting.
    </p>
  </div>

  <hr>

  <!-- CTA -->
  <div class="cta-block section">
    <div class="cta-title">Try it in the next 10 minutes.</div>
    <p class="cta-sub">Two commands. Restart. Your agent is different from that point forward.</p>
    <div class="cta-btns">
      <a href="https://github.com/obra/superpowers" target="_blank" class="cta-btn-p">
        View on GitHub →
      </a>
      <a href="https://instagram.com/rk.codex" target="_blank" class="cta-btn-s">
        Follow @rk.codex
      </a>
    </div>
  </div>

</main>

<!-- Footer -->
<footer>
  <div class="foot-l">
    Written by <a href="https://instagram.com/rk.codex">@rk.codex</a> · April 2026 ·
    <a href="https://github.com/obra/superpowers" target="_blank">obra/superpowers</a>
  </div>
  <div class="foot-r">
    <a href="https://github.com/obra/superpowers/issues" target="_blank">Issues</a>
    <a href="https://github.com/obra/superpowers/discussions" target="_blank">Discussions</a>
    <a href="https://instagram.com/rk.codex" target="_blank">Instagram</a>
  </div>
</footer>

<script>
// ── THEME TOGGLE ──
const btn = document.getElementById('themeBtn');
const html = document.documentElement;

// Respect system preference on first load
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) html.setAttribute('data-theme', 'dark');

btn.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
});

// ── READING PROGRESS ──
const fill = document.getElementById('reading-fill');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  fill.style.width = Math.min(100, (scrollTop / docHeight) * 100) + '%';
}, { passive: true });

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.section, .toc').forEach(el => {
  observer.observe(el);
});

// ── SKILL CARDS STAGGER ──
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.skill-card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, border-color 0.2s, box-shadow 0.2s';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 60);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

const grid = document.querySelector('.skills-grid');
if (grid) skillObserver.observe(grid);

// ── STEP CARDS STAGGER ──
const stepObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const steps = entry.target.querySelectorAll('.step');
      steps.forEach((step, i) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-12px)';
        setTimeout(() => {
          step.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
          step.style.opacity = '1';
          step.style.transform = 'translateX(0)';
        }, i * 90);
      });
      stepObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

const stepsEl = document.querySelector('.steps');
if (stepsEl) stepObserver.observe(stepsEl);

// ── PLATFORM CARDS STAGGER ──
const platObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.platform-card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.35s ease, transform 0.35s ease, border-color 0.2s, box-shadow 0.2s';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 70);
      });
      platObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const platGrid = document.querySelector('.platform-grid');
if (platGrid) platObserver.observe(platGrid);

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('.section-anchor');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === \`#\${id}\` ? 'var(--accent)' : '';
      });
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => navObserver.observe(s));
<\/script>
</body>
</html>
`;function gi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ln=gi();function up(r){ln=r}var an={exec:()=>null};function we(r,o=""){let i=typeof r=="string"?r:r.source,l={replace:(c,m)=>{let h=typeof m=="string"?m:m.source;return h=h.replace(Ue.caret,"$1"),i=i.replace(c,h),l},getRegex:()=>new RegExp(i,o)};return l}var zm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ue={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}>`)},Bm=/^(?:[ \t]*(?:\n|$))+/,_m=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Hm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,za=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Gm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fi=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,hp=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,mp=we(hp).replace(/bull/g,fi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Um=we(hp).replace(/bull/g,fi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),vi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Wm=/^[^\n]+/,yi=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,qm=we(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",yi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ym=we(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fi).getRegex(),Jr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",bi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,$m=we("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",bi).replace("tag",Jr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gp=we(vi).replace("hr",za).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jr).getRegex(),Vm=we(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gp).getRegex(),wi={blockquote:Vm,code:_m,def:qm,fences:Hm,heading:Gm,hr:za,html:$m,lheading:mp,list:Ym,newline:Bm,paragraph:gp,table:an,text:Wm},_d=we("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",za).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jr).getRegex(),Jm={...wi,lheading:Um,table:_d,paragraph:we(vi).replace("hr",za).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_d).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jr).getRegex()},Km={...wi,html:we(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",bi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:an,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:we(vi).replace("hr",za).replace("heading",` *#{1,6} *[^
]`).replace("lheading",mp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Qm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fp=/^( {2,}|\\)\n(?!\s*$)/,Zm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Bn=/[\p{P}\p{S}]/u,Kr=/[\s\p{P}\p{S}]/u,xi=/[^\s\p{P}\p{S}]/u,eg=we(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Kr).getRegex(),vp=/(?!~)[\p{P}\p{S}]/u,tg=/(?!~)[\s\p{P}\p{S}]/u,ng=/(?:[^\s\p{P}\p{S}]|~)/u,ag=we(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",zm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),yp=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,rg=we(yp,"u").replace(/punct/g,Bn).getRegex(),og=we(yp,"u").replace(/punct/g,vp).getRegex(),bp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",sg=we(bp,"gu").replace(/notPunctSpace/g,xi).replace(/punctSpace/g,Kr).replace(/punct/g,Bn).getRegex(),ig=we(bp,"gu").replace(/notPunctSpace/g,ng).replace(/punctSpace/g,tg).replace(/punct/g,vp).getRegex(),lg=we("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,xi).replace(/punctSpace/g,Kr).replace(/punct/g,Bn).getRegex(),cg=we(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Bn).getRegex(),dg="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",pg=we(dg,"gu").replace(/notPunctSpace/g,xi).replace(/punctSpace/g,Kr).replace(/punct/g,Bn).getRegex(),ug=we(/\\(punct)/,"gu").replace(/punct/g,Bn).getRegex(),hg=we(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),mg=we(bi).replace("(?:-->|$)","-->").getRegex(),gg=we("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",mg).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ur=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,fg=we(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ur).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),wp=we(/^!?\[(label)\]\[(ref)\]/).replace("label",Ur).replace("ref",yi).getRegex(),xp=we(/^!?\[(ref)\](?:\[\])?/).replace("ref",yi).getRegex(),vg=we("reflink|nolink(?!\\()","g").replace("reflink",wp).replace("nolink",xp).getRegex(),Hd=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ki={_backpedal:an,anyPunctuation:ug,autolink:hg,blockSkip:ag,br:fp,code:Xm,del:an,delLDelim:an,delRDelim:an,emStrongLDelim:rg,emStrongRDelimAst:sg,emStrongRDelimUnd:lg,escape:Qm,link:fg,nolink:xp,punctuation:eg,reflink:wp,reflinkSearch:vg,tag:gg,text:Zm,url:an},yg={...ki,link:we(/^!?\[(label)\]\((.*?)\)/).replace("label",Ur).getRegex(),reflink:we(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ur).getRegex()},si={...ki,emStrongRDelimAst:ig,emStrongLDelim:og,delLDelim:cg,delRDelim:pg,url:we(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Hd).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:we(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Hd).getRegex()},bg={...si,br:we(fp).replace("{2,}","*").getRegex(),text:we(si.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},_r={normal:wi,gfm:Jm,pedantic:Km},Pa={normal:ki,gfm:si,breaks:bg,pedantic:yg},wg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Gd=r=>wg[r];function gt(r,o){if(o){if(Ue.escapeTest.test(r))return r.replace(Ue.escapeReplace,Gd)}else if(Ue.escapeTestNoEncode.test(r))return r.replace(Ue.escapeReplaceNoEncode,Gd);return r}function Ud(r){try{r=encodeURI(r).replace(Ue.percentDecode,"%")}catch{return null}return r}function Wd(r,o){let i=r.replace(Ue.findPipe,(m,h,v)=>{let g=!1,b=h;for(;--b>=0&&v[b]==="\\";)g=!g;return g?"|":" |"}),l=i.split(Ue.splitPipe),c=0;if(l[0].trim()||l.shift(),l.length>0&&!l.at(-1)?.trim()&&l.pop(),o)if(l.length>o)l.splice(o);else for(;l.length<o;)l.push("");for(;c<l.length;c++)l[c]=l[c].trim().replace(Ue.slashPipe,"|");return l}function La(r,o,i){let l=r.length;if(l===0)return"";let c=0;for(;c<l&&r.charAt(l-c-1)===o;)c++;return r.slice(0,l-c)}function xg(r,o){if(r.indexOf(o[1])===-1)return-1;let i=0;for(let l=0;l<r.length;l++)if(r[l]==="\\")l++;else if(r[l]===o[0])i++;else if(r[l]===o[1]&&(i--,i<0))return l;return i>0?-2:-1}function kg(r,o=0){let i=o,l="";for(let c of r)if(c==="	"){let m=4-i%4;l+=" ".repeat(m),i+=m}else l+=c,i++;return l}function qd(r,o,i,l,c){let m=o.href,h=o.title||null,v=r[1].replace(c.other.outputLinkReplace,"$1");l.state.inLink=!0;let g={type:r[0].charAt(0)==="!"?"image":"link",raw:i,href:m,title:h,text:v,tokens:l.inlineTokens(v)};return l.state.inLink=!1,g}function Sg(r,o,i){let l=r.match(i.other.indentCodeCompensation);if(l===null)return o;let c=l[1];return o.split(`
`).map(m=>{let h=m.match(i.other.beginningSpace);if(h===null)return m;let[v]=h;return v.length>=c.length?m.slice(c.length):m}).join(`
`)}var Wr=class{options;rules;lexer;constructor(r){this.options=r||ln}space(r){let o=this.rules.block.newline.exec(r);if(o&&o[0].length>0)return{type:"space",raw:o[0]}}code(r){let o=this.rules.block.code.exec(r);if(o){let i=o[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:o[0],codeBlockStyle:"indented",text:this.options.pedantic?i:La(i,`
`)}}}fences(r){let o=this.rules.block.fences.exec(r);if(o){let i=o[0],l=Sg(i,o[3]||"",this.rules);return{type:"code",raw:i,lang:o[2]?o[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):o[2],text:l}}}heading(r){let o=this.rules.block.heading.exec(r);if(o){let i=o[2].trim();if(this.rules.other.endingHash.test(i)){let l=La(i,"#");(this.options.pedantic||!l||this.rules.other.endingSpaceChar.test(l))&&(i=l.trim())}return{type:"heading",raw:o[0],depth:o[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(r){let o=this.rules.block.hr.exec(r);if(o)return{type:"hr",raw:La(o[0],`
`)}}blockquote(r){let o=this.rules.block.blockquote.exec(r);if(o){let i=La(o[0],`
`).split(`
`),l="",c="",m=[];for(;i.length>0;){let h=!1,v=[],g;for(g=0;g<i.length;g++)if(this.rules.other.blockquoteStart.test(i[g]))v.push(i[g]),h=!0;else if(!h)v.push(i[g]);else break;i=i.slice(g);let b=v.join(`
`),y=b.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");l=l?`${l}
${b}`:b,c=c?`${c}
${y}`:y;let T=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(y,m,!0),this.lexer.state.top=T,i.length===0)break;let A=m.at(-1);if(A?.type==="code")break;if(A?.type==="blockquote"){let j=A,z=j.raw+`
`+i.join(`
`),Y=this.blockquote(z);m[m.length-1]=Y,l=l.substring(0,l.length-j.raw.length)+Y.raw,c=c.substring(0,c.length-j.text.length)+Y.text;break}else if(A?.type==="list"){let j=A,z=j.raw+`
`+i.join(`
`),Y=this.list(z);m[m.length-1]=Y,l=l.substring(0,l.length-A.raw.length)+Y.raw,c=c.substring(0,c.length-j.raw.length)+Y.raw,i=z.substring(m.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:l,tokens:m,text:c}}}list(r){let o=this.rules.block.list.exec(r);if(o){let i=o[1].trim(),l=i.length>1,c={type:"list",raw:"",ordered:l,start:l?+i.slice(0,-1):"",loose:!1,items:[]};i=l?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=l?i:"[*+-]");let m=this.rules.other.listItemRegex(i),h=!1;for(;r;){let g=!1,b="",y="";if(!(o=m.exec(r))||this.rules.block.hr.test(r))break;b=o[0],r=r.substring(b.length);let T=kg(o[2].split(`
`,1)[0],o[1].length),A=r.split(`
`,1)[0],j=!T.trim(),z=0;if(this.options.pedantic?(z=2,y=T.trimStart()):j?z=o[1].length+1:(z=T.search(this.rules.other.nonSpaceChar),z=z>4?1:z,y=T.slice(z),z+=o[1].length),j&&this.rules.other.blankLine.test(A)&&(b+=A+`
`,r=r.substring(A.length+1),g=!0),!g){let Y=this.rules.other.nextBulletRegex(z),J=this.rules.other.hrRegex(z),D=this.rules.other.fencesBeginRegex(z),G=this.rules.other.headingBeginRegex(z),_=this.rules.other.htmlBeginRegex(z),ne=this.rules.other.blockquoteBeginRegex(z);for(;r;){let R=r.split(`
`,1)[0],U;if(A=R,this.options.pedantic?(A=A.replace(this.rules.other.listReplaceNesting,"  "),U=A):U=A.replace(this.rules.other.tabCharGlobal,"    "),D.test(A)||G.test(A)||_.test(A)||ne.test(A)||Y.test(A)||J.test(A))break;if(U.search(this.rules.other.nonSpaceChar)>=z||!A.trim())y+=`
`+U.slice(z);else{if(j||T.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||D.test(T)||G.test(T)||J.test(T))break;y+=`
`+A}j=!A.trim(),b+=R+`
`,r=r.substring(R.length+1),T=U.slice(z)}}c.loose||(h?c.loose=!0:this.rules.other.doubleBlankLine.test(b)&&(h=!0)),c.items.push({type:"list_item",raw:b,task:!!this.options.gfm&&this.rules.other.listIsTask.test(y),loose:!1,text:y,tokens:[]}),c.raw+=b}let v=c.items.at(-1);if(v)v.raw=v.raw.trimEnd(),v.text=v.text.trimEnd();else return;c.raw=c.raw.trimEnd();for(let g of c.items){if(this.lexer.state.top=!1,g.tokens=this.lexer.blockTokens(g.text,[]),g.task){if(g.text=g.text.replace(this.rules.other.listReplaceTask,""),g.tokens[0]?.type==="text"||g.tokens[0]?.type==="paragraph"){g.tokens[0].raw=g.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),g.tokens[0].text=g.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let y=this.lexer.inlineQueue.length-1;y>=0;y--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[y].src)){this.lexer.inlineQueue[y].src=this.lexer.inlineQueue[y].src.replace(this.rules.other.listReplaceTask,"");break}}let b=this.rules.other.listTaskCheckbox.exec(g.raw);if(b){let y={type:"checkbox",raw:b[0]+" ",checked:b[0]!=="[ ]"};g.checked=y.checked,c.loose?g.tokens[0]&&["paragraph","text"].includes(g.tokens[0].type)&&"tokens"in g.tokens[0]&&g.tokens[0].tokens?(g.tokens[0].raw=y.raw+g.tokens[0].raw,g.tokens[0].text=y.raw+g.tokens[0].text,g.tokens[0].tokens.unshift(y)):g.tokens.unshift({type:"paragraph",raw:y.raw,text:y.raw,tokens:[y]}):g.tokens.unshift(y)}}if(!c.loose){let b=g.tokens.filter(T=>T.type==="space"),y=b.length>0&&b.some(T=>this.rules.other.anyLine.test(T.raw));c.loose=y}}if(c.loose)for(let g of c.items){g.loose=!0;for(let b of g.tokens)b.type==="text"&&(b.type="paragraph")}return c}}html(r){let o=this.rules.block.html.exec(r);if(o)return{type:"html",block:!0,raw:o[0],pre:o[1]==="pre"||o[1]==="script"||o[1]==="style",text:o[0]}}def(r){let o=this.rules.block.def.exec(r);if(o){let i=o[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),l=o[2]?o[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=o[3]?o[3].substring(1,o[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):o[3];return{type:"def",tag:i,raw:o[0],href:l,title:c}}}table(r){let o=this.rules.block.table.exec(r);if(!o||!this.rules.other.tableDelimiter.test(o[2]))return;let i=Wd(o[1]),l=o[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=o[3]?.trim()?o[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],m={type:"table",raw:o[0],header:[],align:[],rows:[]};if(i.length===l.length){for(let h of l)this.rules.other.tableAlignRight.test(h)?m.align.push("right"):this.rules.other.tableAlignCenter.test(h)?m.align.push("center"):this.rules.other.tableAlignLeft.test(h)?m.align.push("left"):m.align.push(null);for(let h=0;h<i.length;h++)m.header.push({text:i[h],tokens:this.lexer.inline(i[h]),header:!0,align:m.align[h]});for(let h of c)m.rows.push(Wd(h,m.header.length).map((v,g)=>({text:v,tokens:this.lexer.inline(v),header:!1,align:m.align[g]})));return m}}lheading(r){let o=this.rules.block.lheading.exec(r);if(o){let i=o[1].trim();return{type:"heading",raw:o[0],depth:o[2].charAt(0)==="="?1:2,text:i,tokens:this.lexer.inline(i)}}}paragraph(r){let o=this.rules.block.paragraph.exec(r);if(o){let i=o[1].charAt(o[1].length-1)===`
`?o[1].slice(0,-1):o[1];return{type:"paragraph",raw:o[0],text:i,tokens:this.lexer.inline(i)}}}text(r){let o=this.rules.block.text.exec(r);if(o)return{type:"text",raw:o[0],text:o[0],tokens:this.lexer.inline(o[0])}}escape(r){let o=this.rules.inline.escape.exec(r);if(o)return{type:"escape",raw:o[0],text:o[1]}}tag(r){let o=this.rules.inline.tag.exec(r);if(o)return!this.lexer.state.inLink&&this.rules.other.startATag.test(o[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(o[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(o[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(o[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:o[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:o[0]}}link(r){let o=this.rules.inline.link.exec(r);if(o){let i=o[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let m=La(i.slice(0,-1),"\\");if((i.length-m.length)%2===0)return}else{let m=xg(o[2],"()");if(m===-2)return;if(m>-1){let h=(o[0].indexOf("!")===0?5:4)+o[1].length+m;o[2]=o[2].substring(0,m),o[0]=o[0].substring(0,h).trim(),o[3]=""}}let l=o[2],c="";if(this.options.pedantic){let m=this.rules.other.pedanticHrefTitle.exec(l);m&&(l=m[1],c=m[3])}else c=o[3]?o[3].slice(1,-1):"";return l=l.trim(),this.rules.other.startAngleBracket.test(l)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?l=l.slice(1):l=l.slice(1,-1)),qd(o,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},o[0],this.lexer,this.rules)}}reflink(r,o){let i;if((i=this.rules.inline.reflink.exec(r))||(i=this.rules.inline.nolink.exec(r))){let l=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=o[l.toLowerCase()];if(!c){let m=i[0].charAt(0);return{type:"text",raw:m,text:m}}return qd(i,c,i[0],this.lexer,this.rules)}}emStrong(r,o,i=""){let l=this.rules.inline.emStrongLDelim.exec(r);if(!(!l||!l[1]&&!l[2]&&!l[3]&&!l[4]||l[4]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(l[1]||l[3])||!i||this.rules.inline.punctuation.exec(i))){let c=[...l[0]].length-1,m,h,v=c,g=0,b=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(b.lastIndex=0,o=o.slice(-1*r.length+c);(l=b.exec(o))!==null;){if(m=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!m)continue;if(h=[...m].length,l[3]||l[4]){v+=h;continue}else if((l[5]||l[6])&&c%3&&!((c+h)%3)){g+=h;continue}if(v-=h,v>0)continue;h=Math.min(h,h+v+g);let y=[...l[0]][0].length,T=r.slice(0,c+l.index+y+h);if(Math.min(c,h)%2){let j=T.slice(1,-1);return{type:"em",raw:T,text:j,tokens:this.lexer.inlineTokens(j)}}let A=T.slice(2,-2);return{type:"strong",raw:T,text:A,tokens:this.lexer.inlineTokens(A)}}}}codespan(r){let o=this.rules.inline.code.exec(r);if(o){let i=o[2].replace(this.rules.other.newLineCharGlobal," "),l=this.rules.other.nonSpaceChar.test(i),c=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return l&&c&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:o[0],text:i}}}br(r){let o=this.rules.inline.br.exec(r);if(o)return{type:"br",raw:o[0]}}del(r,o,i=""){let l=this.rules.inline.delLDelim.exec(r);if(l&&(!l[1]||!i||this.rules.inline.punctuation.exec(i))){let c=[...l[0]].length-1,m,h,v=c,g=this.rules.inline.delRDelim;for(g.lastIndex=0,o=o.slice(-1*r.length+c);(l=g.exec(o))!==null;){if(m=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!m||(h=[...m].length,h!==c))continue;if(l[3]||l[4]){v+=h;continue}if(v-=h,v>0)continue;h=Math.min(h,h+v);let b=[...l[0]][0].length,y=r.slice(0,c+l.index+b+h),T=y.slice(c,-c);return{type:"del",raw:y,text:T,tokens:this.lexer.inlineTokens(T)}}}}autolink(r){let o=this.rules.inline.autolink.exec(r);if(o){let i,l;return o[2]==="@"?(i=o[1],l="mailto:"+i):(i=o[1],l=i),{type:"link",raw:o[0],text:i,href:l,tokens:[{type:"text",raw:i,text:i}]}}}url(r){let o;if(o=this.rules.inline.url.exec(r)){let i,l;if(o[2]==="@")i=o[0],l="mailto:"+i;else{let c;do c=o[0],o[0]=this.rules.inline._backpedal.exec(o[0])?.[0]??"";while(c!==o[0]);i=o[0],o[1]==="www."?l="http://"+o[0]:l=o[0]}return{type:"link",raw:o[0],text:i,href:l,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(r){let o=this.rules.inline.text.exec(r);if(o){let i=this.lexer.state.inRawBlock;return{type:"text",raw:o[0],text:o[0],escaped:i}}}},st=class ii{tokens;options;state;inlineQueue;tokenizer;constructor(o){this.tokens=[],this.tokens.links=Object.create(null),this.options=o||ln,this.options.tokenizer=this.options.tokenizer||new Wr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:Ue,block:_r.normal,inline:Pa.normal};this.options.pedantic?(i.block=_r.pedantic,i.inline=Pa.pedantic):this.options.gfm&&(i.block=_r.gfm,this.options.breaks?i.inline=Pa.breaks:i.inline=Pa.gfm),this.tokenizer.rules=i}static get rules(){return{block:_r,inline:Pa}}static lex(o,i){return new ii(i).lex(o)}static lexInline(o,i){return new ii(i).inlineTokens(o)}lex(o){o=o.replace(Ue.carriageReturn,`
`),this.blockTokens(o,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let l=this.inlineQueue[i];this.inlineTokens(l.src,l.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(o,i=[],l=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(o=o.replace(Ue.tabCharGlobal,"    ").replace(Ue.spaceLine,""));o;){let c;if(this.options.extensions?.block?.some(h=>(c=h.call({lexer:this},o,i))?(o=o.substring(c.raw.length),i.push(c),!0):!1))continue;if(c=this.tokenizer.space(o)){o=o.substring(c.raw.length);let h=i.at(-1);c.raw.length===1&&h!==void 0?h.raw+=`
`:i.push(c);continue}if(c=this.tokenizer.code(o)){o=o.substring(c.raw.length);let h=i.at(-1);h?.type==="paragraph"||h?.type==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+c.raw,h.text+=`
`+c.text,this.inlineQueue.at(-1).src=h.text):i.push(c);continue}if(c=this.tokenizer.fences(o)){o=o.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.heading(o)){o=o.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.hr(o)){o=o.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.blockquote(o)){o=o.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.list(o)){o=o.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.html(o)){o=o.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.def(o)){o=o.substring(c.raw.length);let h=i.at(-1);h?.type==="paragraph"||h?.type==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+c.raw,h.text+=`
`+c.raw,this.inlineQueue.at(-1).src=h.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title},i.push(c));continue}if(c=this.tokenizer.table(o)){o=o.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.lheading(o)){o=o.substring(c.raw.length),i.push(c);continue}let m=o;if(this.options.extensions?.startBlock){let h=1/0,v=o.slice(1),g;this.options.extensions.startBlock.forEach(b=>{g=b.call({lexer:this},v),typeof g=="number"&&g>=0&&(h=Math.min(h,g))}),h<1/0&&h>=0&&(m=o.substring(0,h+1))}if(this.state.top&&(c=this.tokenizer.paragraph(m))){let h=i.at(-1);l&&h?.type==="paragraph"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+c.raw,h.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):i.push(c),l=m.length!==o.length,o=o.substring(c.raw.length);continue}if(c=this.tokenizer.text(o)){o=o.substring(c.raw.length);let h=i.at(-1);h?.type==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+c.raw,h.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):i.push(c);continue}if(o){let h="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,i}inline(o,i=[]){return this.inlineQueue.push({src:o,tokens:i}),i}inlineTokens(o,i=[]){this.tokenizer.lexer=this;let l=o,c=null;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(l))!==null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(l))!==null;)l=l.slice(0,c.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let m;for(;(c=this.tokenizer.rules.inline.blockSkip.exec(l))!==null;)m=c[2]?c[2].length:0,l=l.slice(0,c.index+m)+"["+"a".repeat(c[0].length-m-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);l=this.options.hooks?.emStrongMask?.call({lexer:this},l)??l;let h=!1,v="";for(;o;){h||(v=""),h=!1;let g;if(this.options.extensions?.inline?.some(y=>(g=y.call({lexer:this},o,i))?(o=o.substring(g.raw.length),i.push(g),!0):!1))continue;if(g=this.tokenizer.escape(o)){o=o.substring(g.raw.length),i.push(g);continue}if(g=this.tokenizer.tag(o)){o=o.substring(g.raw.length),i.push(g);continue}if(g=this.tokenizer.link(o)){o=o.substring(g.raw.length),i.push(g);continue}if(g=this.tokenizer.reflink(o,this.tokens.links)){o=o.substring(g.raw.length);let y=i.at(-1);g.type==="text"&&y?.type==="text"?(y.raw+=g.raw,y.text+=g.text):i.push(g);continue}if(g=this.tokenizer.emStrong(o,l,v)){o=o.substring(g.raw.length),i.push(g);continue}if(g=this.tokenizer.codespan(o)){o=o.substring(g.raw.length),i.push(g);continue}if(g=this.tokenizer.br(o)){o=o.substring(g.raw.length),i.push(g);continue}if(g=this.tokenizer.del(o,l,v)){o=o.substring(g.raw.length),i.push(g);continue}if(g=this.tokenizer.autolink(o)){o=o.substring(g.raw.length),i.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(o))){o=o.substring(g.raw.length),i.push(g);continue}let b=o;if(this.options.extensions?.startInline){let y=1/0,T=o.slice(1),A;this.options.extensions.startInline.forEach(j=>{A=j.call({lexer:this},T),typeof A=="number"&&A>=0&&(y=Math.min(y,A))}),y<1/0&&y>=0&&(b=o.substring(0,y+1))}if(g=this.tokenizer.inlineText(b)){o=o.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(v=g.raw.slice(-1)),h=!0;let y=i.at(-1);y?.type==="text"?(y.raw+=g.raw,y.text+=g.text):i.push(g);continue}if(o){let y="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return i}},qr=class{options;parser;constructor(r){this.options=r||ln}space(r){return""}code({text:r,lang:o,escaped:i}){let l=(o||"").match(Ue.notSpaceStart)?.[0],c=r.replace(Ue.endingNewline,"")+`
`;return l?'<pre><code class="language-'+gt(l)+'">'+(i?c:gt(c,!0))+`</code></pre>
`:"<pre><code>"+(i?c:gt(c,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:o}){return`<h${o}>${this.parser.parseInline(r)}</h${o}>
`}hr(r){return`<hr>
`}list(r){let o=r.ordered,i=r.start,l="";for(let h=0;h<r.items.length;h++){let v=r.items[h];l+=this.listitem(v)}let c=o?"ol":"ul",m=o&&i!==1?' start="'+i+'"':"";return"<"+c+m+`>
`+l+"</"+c+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let o="",i="";for(let c=0;c<r.header.length;c++)i+=this.tablecell(r.header[c]);o+=this.tablerow({text:i});let l="";for(let c=0;c<r.rows.length;c++){let m=r.rows[c];i="";for(let h=0;h<m.length;h++)i+=this.tablecell(m[h]);l+=this.tablerow({text:i})}return l&&(l=`<tbody>${l}</tbody>`),`<table>
<thead>
`+o+`</thead>
`+l+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let o=this.parser.parseInline(r.tokens),i=r.header?"th":"td";return(r.align?`<${i} align="${r.align}">`:`<${i}>`)+o+`</${i}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${gt(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:o,tokens:i}){let l=this.parser.parseInline(i),c=Ud(r);if(c===null)return l;r=c;let m='<a href="'+r+'"';return o&&(m+=' title="'+gt(o)+'"'),m+=">"+l+"</a>",m}image({href:r,title:o,text:i,tokens:l}){l&&(i=this.parser.parseInline(l,this.parser.textRenderer));let c=Ud(r);if(c===null)return gt(i);r=c;let m=`<img src="${r}" alt="${gt(i)}"`;return o&&(m+=` title="${gt(o)}"`),m+=">",m}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:gt(r.text)}},Si=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},it=class li{options;renderer;textRenderer;constructor(o){this.options=o||ln,this.options.renderer=this.options.renderer||new qr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Si}static parse(o,i){return new li(i).parse(o)}static parseInline(o,i){return new li(i).parseInline(o)}parse(o){this.renderer.parser=this;let i="";for(let l=0;l<o.length;l++){let c=o[l];if(this.options.extensions?.renderers?.[c.type]){let h=c,v=this.options.extensions.renderers[h.type].call({parser:this},h);if(v!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(h.type)){i+=v||"";continue}}let m=c;switch(m.type){case"space":{i+=this.renderer.space(m);break}case"hr":{i+=this.renderer.hr(m);break}case"heading":{i+=this.renderer.heading(m);break}case"code":{i+=this.renderer.code(m);break}case"table":{i+=this.renderer.table(m);break}case"blockquote":{i+=this.renderer.blockquote(m);break}case"list":{i+=this.renderer.list(m);break}case"checkbox":{i+=this.renderer.checkbox(m);break}case"html":{i+=this.renderer.html(m);break}case"def":{i+=this.renderer.def(m);break}case"paragraph":{i+=this.renderer.paragraph(m);break}case"text":{i+=this.renderer.text(m);break}default:{let h='Token with "'+m.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return i}parseInline(o,i=this.renderer){this.renderer.parser=this;let l="";for(let c=0;c<o.length;c++){let m=o[c];if(this.options.extensions?.renderers?.[m.type]){let v=this.options.extensions.renderers[m.type].call({parser:this},m);if(v!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(m.type)){l+=v||"";continue}}let h=m;switch(h.type){case"escape":{l+=i.text(h);break}case"html":{l+=i.html(h);break}case"link":{l+=i.link(h);break}case"image":{l+=i.image(h);break}case"checkbox":{l+=i.checkbox(h);break}case"strong":{l+=i.strong(h);break}case"em":{l+=i.em(h);break}case"codespan":{l+=i.codespan(h);break}case"br":{l+=i.br(h);break}case"del":{l+=i.del(h);break}case"text":{l+=i.text(h);break}default:{let v='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(v),"";throw new Error(v)}}}return l}},ja=class{options;block;constructor(r){this.options=r||ln}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(r=this.block){return r?st.lex:st.lexInline}provideParser(r=this.block){return r?it.parse:it.parseInline}},Cg=class{defaults=gi();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=it;Renderer=qr;TextRenderer=Si;Lexer=st;Tokenizer=Wr;Hooks=ja;constructor(...r){this.use(...r)}walkTokens(r,o){let i=[];for(let l of r)switch(i=i.concat(o.call(this,l)),l.type){case"table":{let c=l;for(let m of c.header)i=i.concat(this.walkTokens(m.tokens,o));for(let m of c.rows)for(let h of m)i=i.concat(this.walkTokens(h.tokens,o));break}case"list":{let c=l;i=i.concat(this.walkTokens(c.items,o));break}default:{let c=l;this.defaults.extensions?.childTokens?.[c.type]?this.defaults.extensions.childTokens[c.type].forEach(m=>{let h=c[m].flat(1/0);i=i.concat(this.walkTokens(h,o))}):c.tokens&&(i=i.concat(this.walkTokens(c.tokens,o)))}}return i}use(...r){let o=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(i=>{let l={...i};if(l.async=this.defaults.async||l.async||!1,i.extensions&&(i.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){let m=o.renderers[c.name];m?o.renderers[c.name]=function(...h){let v=c.renderer.apply(this,h);return v===!1&&(v=m.apply(this,h)),v}:o.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let m=o[c.level];m?m.unshift(c.tokenizer):o[c.level]=[c.tokenizer],c.start&&(c.level==="block"?o.startBlock?o.startBlock.push(c.start):o.startBlock=[c.start]:c.level==="inline"&&(o.startInline?o.startInline.push(c.start):o.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(o.childTokens[c.name]=c.childTokens)}),l.extensions=o),i.renderer){let c=this.defaults.renderer||new qr(this.defaults);for(let m in i.renderer){if(!(m in c))throw new Error(`renderer '${m}' does not exist`);if(["options","parser"].includes(m))continue;let h=m,v=i.renderer[h],g=c[h];c[h]=(...b)=>{let y=v.apply(c,b);return y===!1&&(y=g.apply(c,b)),y||""}}l.renderer=c}if(i.tokenizer){let c=this.defaults.tokenizer||new Wr(this.defaults);for(let m in i.tokenizer){if(!(m in c))throw new Error(`tokenizer '${m}' does not exist`);if(["options","rules","lexer"].includes(m))continue;let h=m,v=i.tokenizer[h],g=c[h];c[h]=(...b)=>{let y=v.apply(c,b);return y===!1&&(y=g.apply(c,b)),y}}l.tokenizer=c}if(i.hooks){let c=this.defaults.hooks||new ja;for(let m in i.hooks){if(!(m in c))throw new Error(`hook '${m}' does not exist`);if(["options","block"].includes(m))continue;let h=m,v=i.hooks[h],g=c[h];ja.passThroughHooks.has(m)?c[h]=b=>{if(this.defaults.async&&ja.passThroughHooksRespectAsync.has(m))return(async()=>{let T=await v.call(c,b);return g.call(c,T)})();let y=v.call(c,b);return g.call(c,y)}:c[h]=(...b)=>{if(this.defaults.async)return(async()=>{let T=await v.apply(c,b);return T===!1&&(T=await g.apply(c,b)),T})();let y=v.apply(c,b);return y===!1&&(y=g.apply(c,b)),y}}l.hooks=c}if(i.walkTokens){let c=this.defaults.walkTokens,m=i.walkTokens;l.walkTokens=function(h){let v=[];return v.push(m.call(this,h)),c&&(v=v.concat(c.call(this,h))),v}}this.defaults={...this.defaults,...l}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,o){return st.lex(r,o??this.defaults)}parser(r,o){return it.parse(r,o??this.defaults)}parseMarkdown(r){return(o,i)=>{let l={...i},c={...this.defaults,...l},m=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&l.async===!1)return m(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof o>"u"||o===null)return m(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return m(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(c.hooks&&(c.hooks.options=c,c.hooks.block=r),c.async)return(async()=>{let h=c.hooks?await c.hooks.preprocess(o):o,v=await(c.hooks?await c.hooks.provideLexer(r):r?st.lex:st.lexInline)(h,c),g=c.hooks?await c.hooks.processAllTokens(v):v;c.walkTokens&&await Promise.all(this.walkTokens(g,c.walkTokens));let b=await(c.hooks?await c.hooks.provideParser(r):r?it.parse:it.parseInline)(g,c);return c.hooks?await c.hooks.postprocess(b):b})().catch(m);try{c.hooks&&(o=c.hooks.preprocess(o));let h=(c.hooks?c.hooks.provideLexer(r):r?st.lex:st.lexInline)(o,c);c.hooks&&(h=c.hooks.processAllTokens(h)),c.walkTokens&&this.walkTokens(h,c.walkTokens);let v=(c.hooks?c.hooks.provideParser(r):r?it.parse:it.parseInline)(h,c);return c.hooks&&(v=c.hooks.postprocess(v)),v}catch(h){return m(h)}}}onError(r,o){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let l="<p>An error occurred:</p><pre>"+gt(i.message+"",!0)+"</pre>";return o?Promise.resolve(l):l}if(o)return Promise.reject(i);throw i}}},rn=new Cg;function ke(r,o){return rn.parse(r,o)}ke.options=ke.setOptions=function(r){return rn.setOptions(r),ke.defaults=rn.defaults,up(ke.defaults),ke};ke.getDefaults=gi;ke.defaults=ln;ke.use=function(...r){return rn.use(...r),ke.defaults=rn.defaults,up(ke.defaults),ke};ke.walkTokens=function(r,o){return rn.walkTokens(r,o)};ke.parseInline=rn.parseInline;ke.Parser=it;ke.parser=it.parse;ke.Renderer=qr;ke.TextRenderer=Si;ke.Lexer=st;ke.lexer=st.lex;ke.Tokenizer=Wr;ke.Hooks=ja;ke.parse=ke;ke.options;ke.setOptions;ke.use;ke.walkTokens;ke.parseInline;it.parse;st.lex;function on(r){return`${r}`.toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}ke.setOptions({breaks:!0,gfm:!0});const Tg=Object.assign({"./articles/md/10-coding-projects-you-can-add-to-your-resume.md":Tm,"./articles/md/from-repo-to-reader.md":Am,"./articles/md/javascript-interview-series-plan.md":Em,"./articles/md/open-source-content-formats-for-dev-creators.md":Im}),Ag=Object.assign({"./articles/html/100-claude-code-prompts.html":Pm,"./articles/html/ai-content-prompterrr.html":Lm,"./articles/html/bonsai-free-models-guide.html":Rm,"./articles/html/claude-carousel-generator.html":Mm,"./articles/html/free-courses-real-skills-zero-rupees.html":jm,"./articles/html/free-domain-guide.html":Nm,"./articles/html/gemma-complete-guide.html":Dm,"./articles/html/hermes-agent-guide.html":Om,"./articles/html/superpowers-deepdive.html":Fm});function Eg(r){const i=`
<base href="${typeof window<"u"?`${window.location.origin}/`:"/"}" target="_blank">
<style>
html, body { margin: 0; padding: 0; }
body > * { position: relative; z-index: 1; }
</style>`;return/<head[^>]*>/i.test(r)?r.replace(/<head([^>]*)>/i,`<head$1>${i}`):`<!DOCTYPE html><html><head>${i}</head><body>${r}</body></html>`}function Yr(r){return r.split("/").pop().replace(/\.(md|html)$/,"")}function kp(r){return`/articles/${r}.png`}function Ig(r){return r.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function Sp(r){const o=r.trim().split(/\s+/).filter(Boolean).length;return`${Math.max(1,Math.round(o/220))} min read`}function Ci(r){return r?Array.isArray(r)?r.map(o=>`${o}`.trim()).filter(Boolean):`${r}`.replace(/^\[/,"").replace(/\]$/,"").split(",").map(o=>o.replace(/^["']|["']$/g,"").trim()).filter(Boolean):[]}function Cp(r){return`${r}`.trim().toLowerCase()==="true"}function Tp(r){if(!r)return"";const o=new Date(r);return Number.isNaN(o.getTime())?r:new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(o)}function Pg(r){if(!r.startsWith("---"))return{attributes:{},body:r};const o=r.indexOf(`
---`,3);if(o===-1)return{attributes:{},body:r};const i=r.slice(3,o).trim(),l=r.slice(o+4).trim(),c={};return i.split(`
`).forEach(m=>{const h=m.indexOf(":");if(h===-1)return;const v=m.slice(0,h).trim(),g=m.slice(h+1).trim();c[v]=g.replace(/^["']|["']$/g,"")}),c.tags&&(c.tags=Ci(c.tags)),{attributes:c,body:l}}function Lg(r,o){return`
        <div class="article-card-markdown-inner">
            <span class="article-preview-type">Markdown</span>
            <h4>${r}</h4>
            <p>${o}</p>
        </div>
    `}function Rg([r,o]){const{attributes:i,body:l}=Pg(o),c=l.replace(/^#{1,6}\s+/gm,"").replace(/[*_`>#-]/g," ").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/\s+/g," ").trim(),m=l.match(/^#\s+(.+)$/m),h=i.excerpt||c.slice(0,180).trim(),v=i.title||(m?m[1].trim():Yr(r)),g=i.slug||on(Yr(r)),b=kp(g);return{slug:g,title:v,date:Tp(i.date||""),sortDate:i.date||"",excerpt:h,tags:Ci(i.tags),readingTime:Sp(c),kind:"markdown",category:i.category||"Article",coverImage:b||i.cover||"",accent:i.accent||"",featured:Cp(i.featured||"false"),bodyHtml:ke.parse(l),previewHtml:Lg(v,h)}}function Mg([r,o]){const i=Eg(o),c=new DOMParser().parseFromString(i,"text/html"),m=c.title||Yr(r),h=c.querySelector('meta[name="description"]')?.content||"",v=c.querySelector('meta[name="keywords"]')?.content||"",g=c.querySelector("p")?.textContent?.trim()||"",b=c.querySelector('meta[property="article:published_time"]')?.content||c.querySelector('meta[name="date"]')?.content||"",y=c.querySelector('meta[name="category"]')?.content||"Article",T=on(Yr(r)),A=kp(T)||c.querySelector('meta[property="og:image"]')?.content||c.querySelector('meta[name="cover"]')?.content||"",j=c.querySelector('meta[name="theme-color"]')?.content||"",z=Cp(c.querySelector('meta[name="featured"]')?.content||"false"),Y=h||g||"Standalone HTML article rendered inside the React reader.",J=Ig(c.body?.innerHTML||o);return{slug:T,title:m,date:Tp(b),sortDate:b,excerpt:Y,tags:Ci(v),readingTime:Sp(J),kind:"html",category:y,coverImage:A,accent:j,featured:z,raw:i}}const Gt=[...Object.entries(Tg).map(Rg),...Object.entries(Ag).map(Mg)].sort((r,o)=>{if(r.featured!==o.featured)return r.featured?-1:1;const i=r.sortDate?new Date(r.sortDate).getTime():0,l=o.sortDate?new Date(o.sortDate).getTime():0;return i!==l?l-i:r.title.localeCompare(o.title)});function Ap(r){return Gt.find(o=>o.slug===r)}function jg(){return Array.from(new Set(Gt.flatMap(r=>r.tags))).sort((r,o)=>r.localeCompare(o))}const sn={hero:"/rk-images/walking-black-suit.png",meta:"/rk-images/walking-black-suit.png",article:"/rk-images/mirror-selfie-black-suit.png",showcase:["/rk-images/walking-black-suit.png","/rk-images/black-suit-looking-down.png","/rk-images/leaning-smile-black-suit.png","/rk-images/mirror-selfie-black-suit.png"]},Ti={icon:"/rk-images/logo-icon.png",stack:"/rk-images/logo stack.png",withName:"/rk-images/logo-with-name.png"},Ng=[{id:"github",label:"GitHub",href:"https://github.com/radhakishan404"},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/radhakishanjangid"},{id:"x",label:"X",href:"https://x.com/radhakishan404"},{id:"dev",label:"DEV",href:"https://dev.to/radhakishanjangid404"},{id:"instagram",label:"Instagram",href:"https://www.instagram.com/radhakishanjangid404"},{id:"email",label:"Email",href:"mailto:radhakishanjangid404@gmail.com"}],Dg=[{label:"radhakishanjangid404@gmail.com",href:"mailto:radhakishanjangid404@gmail.com",external:!1},{label:"GitHub",href:"https://github.com/radhakishan404",external:!0},{label:"LinkedIn",href:"https://www.linkedin.com/in/radhakishanjangid",external:!0},{label:"DEV",href:"https://dev.to/radhakishanjangid404",external:!0}],Yd=[{value:"7+",label:"Years building web products"},{value:"React",label:"Frontend and product UI"},{value:"Node",label:"APIs and backend delivery"}];function Og(r=[]){me.useEffect(()=>{if(typeof window>"u"||typeof document>"u")return;const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new WeakSet,l=!o&&"IntersectionObserver"in window?new IntersectionObserver(v=>{v.forEach(g=>{g.isIntersecting&&(g.target.classList.add("is-revealed"),l.unobserve(g.target))})},{threshold:.16,rootMargin:"0px 0px -12% 0px"}):null,c=v=>{if(!(!(v instanceof HTMLElement)||i.has(v))){if(i.add(v),o||!l){v.classList.add("is-revealed");return}l.observe(v)}},m=()=>{document.querySelectorAll("[data-reveal]").forEach(c)};m();const h=new MutationObserver(m);return h.observe(document.body,{childList:!0,subtree:!0}),()=>{h.disconnect(),l&&l.disconnect()}},r)}const Ep="rk-theme";function Fg(){if(typeof window>"u")return"dark";const r=window.localStorage.getItem(Ep);return r==="light"||r==="dark"?r:"dark"}function zg(){const[r,o]=me.useState(Fg);return me.useEffect(()=>{document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,document.body.dataset.theme=r,window.localStorage.setItem(Ep,r);const i=document.querySelector('meta[name="theme-color"]');i&&i.setAttribute("content",r==="dark"?"#080808":"#f3efdf")},[r]),{theme:r,toggleTheme:()=>o(i=>i==="dark"?"light":"dark")}}function Bg(){const r=me.useRef(null),o=me.useRef({x:0,y:0}),i=me.useRef({x:0,y:0}),l=me.useRef(null);return me.useEffect(()=>{if(typeof window>"u")return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.matchMedia("(hover: none)").matches;if(c||m)return;const h=b=>{o.current={x:b.clientX,y:b.clientY},r.current&&r.current.classList.add("is-visible")},v=()=>{r.current&&r.current.classList.remove("is-visible")},g=()=>{const b=i.current,y=o.current;b.x+=(y.x-b.x)*.14,b.y+=(y.y-b.y)*.14,r.current&&(r.current.style.left=`${b.x}px`,r.current.style.top=`${b.y}px`),l.current=window.requestAnimationFrame(g)};return window.addEventListener("mousemove",h,{passive:!0}),window.addEventListener("mouseout",v),l.current=window.requestAnimationFrame(g),()=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseout",v),l.current&&window.cancelAnimationFrame(l.current)}},[]),p.jsx("div",{ref:r,className:"cursor-glow","aria-hidden":"true"})}function _g({theme:r,onToggleTheme:o}){const i=r==="dark";return p.jsx("button",{type:"button",className:"theme-toggle",onClick:o,"aria-label":"Toggle color theme",children:p.jsxs("span",{className:"theme-toggle-label",children:["[theme: ",i?"dark":"light","]"]})})}const Hg=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Projects",to:"/projects"},{label:"Articles",to:"/articles"},{label:"Contact",to:"/contact"}];function Gg({theme:r,onToggleTheme:o}){const[i,l]=me.useState(!1),c=dp();return me.useEffect(()=>{l(!1)},[c.pathname]),me.useEffect(()=>(document.body.classList.toggle("nav-open",i),()=>{document.body.classList.remove("nav-open")}),[i]),p.jsx("header",{className:"site-header",children:p.jsxs("div",{className:"shell header-shell",children:[p.jsxs(_e,{className:"brand-mark",to:"/",onClick:()=>l(!1),children:[p.jsxs("span",{className:"brand-mark-heading",children:[p.jsx("span",{className:"brand-mark-logo-wrap",children:p.jsx("img",{className:"brand-mark-logo",src:Ti.icon,alt:"Radhakishan logo icon"})}),p.jsxs("span",{className:"brand-mark-label",children:["radhakishan_jangid",p.jsx("span",{className:"brand-cursor","aria-hidden":"true",children:"_"})]})]}),p.jsx("span",{className:"brand-mark-subtitle",children:"// senior software engineer"})]}),p.jsx("button",{type:"button",className:"menu-toggle","aria-label":"Toggle navigation","aria-expanded":i,onClick:()=>l(m=>!m),children:i?"[x]":"[≡]"}),p.jsxs("div",{className:`header-panel${i?" is-open":""}`,children:[p.jsx("nav",{className:"primary-nav","aria-label":"Primary",children:Hg.map(m=>p.jsx(xm,{exact:m.to==="/",activeClassName:"is-active",className:"primary-nav-link",to:m.to,onClick:()=>l(!1),children:m.label},m.to))}),p.jsxs("div",{className:"header-actions",children:[p.jsx(_e,{className:"header-cta",to:"/contact",onClick:()=>l(!1),children:"[ ./contact ]"}),p.jsx(_g,{theme:r,onToggleTheme:o})]})]})]})})}const Ug={github:"gh",linkedin:"li",x:"x",dev:"dev",instagram:"ig",email:"mail"};function Wg({children:r}){const o=dp(),{theme:i,toggleTheme:l}=zg();Og([o.pathname]);const c=o.pathname.match(/^\/articles\/([^/]+)$/);return(c?Ap(c[1]):null)?.kind==="html"?p.jsx("div",{className:"site-root site-root-embedded",children:p.jsx("main",{className:"site-main site-main-embedded",children:r},o.pathname)}):p.jsxs("div",{className:"site-root",children:[p.jsx(Bg,{}),p.jsx(Gg,{theme:i,onToggleTheme:l}),p.jsx("main",{className:"site-main",children:r},o.pathname),p.jsx("footer",{className:"site-footer",children:p.jsxs("div",{className:"shell footer-shell","data-reveal":!0,children:[p.jsx("div",{className:"footer-brand",children:p.jsx("img",{src:Ti.withName,alt:"Radhakishan Jangid logo"})}),p.jsx("p",{className:"footer-line",children:"// ─────────────────────────────────── //"}),p.jsxs("p",{className:"footer-line",children:["//  radhakishan_jangid © ",new Date().getFullYear(),"          //"]}),p.jsx("p",{className:"footer-line",children:"//  built with React + too much coffee //"}),p.jsx("p",{className:"footer-line",children:"// ─────────────────────────────────── //"}),p.jsx("div",{className:"footer-social",children:Ng.map(v=>p.jsxs("a",{href:v.href,target:v.id==="email"?void 0:"_blank",rel:v.id==="email"?void 0:"noreferrer",children:["[",Ug[v.id]||v.id,"]"]},v.id))})]})})]})}const qg=[{isCurrent:1,title:"Senior Software Engineer",companyName:"Cachetech Advisor Solutions (USA)",companyLink:"https://www.cachetech.com/",location:"Mumbai, India",from:"February 2024",to:"Present",description:"Working with US-based product and engineering teams to build scalable fintech systems, including workflow management, multi-tenancy architecture, and React Native mobile app delivery."},{isCurrent:0,title:"Manager - Software Engineer",companyName:"Edubridge India Pvt Ltd",companyLink:"https://www.edubridgeindia.com/",location:"Mumbai, India",from:"December 2022",to:"January 2024",description:"Led migration from PHP to MERN stack, built a resume builder platform, and shipped microservice-based products with Jenkins + Docker CI/CD pipelines."},{isCurrent:0,title:"Senior Software Engineer",companyName:"TechStalwarts Software Development LLP",companyLink:"http://www.techstalwarts.com/",location:"Mumbai, India",from:"September 2020",to:"November 2022",description:"Handled ecommerce platform delivery across frontend, backend, AWS deployments, and third-party API integrations for high-traffic production systems."},{isCurrent:0,title:"PHP Web Developer",companyName:"Innovins Softtech Solutions Pvt. Ltd",companyLink:"https://www.innovins.com/",location:"Mumbai, India",from:"July 2019",to:"August 2020",description:"Maintained and developed multiple enterprise portals and internal productivity systems, including API and task management features."},{isCurrent:0,title:"PHP Web Developer with CodeIgniter",companyName:"IMPAQ Technologies Pvt. Ltd",companyLink:"http://impaq.co.in/",location:"Mumbai, India",from:"August 2018",to:"June 2019",description:"Delivered CMS and admission workflow modules, including business logic automation and platform maintenance for multiple client projects."}],Yg=[{skillName:"Professional skills",skillType:[{title:"Front End Development",description:"Good sense of knowledge for <strong>Front End Development</strong>, building complex user interfaces with high level UX for both web and mobile.",skillsList:[{skillTitle:"JavaScript Development",skillDesc:"Learning Architecting and building web/mobile applications with React, JavaScript/TypeScript."},{skillTitle:"Responsive Design",skillDesc:"adapting and optimizing web pages to work on all screen sizes (mobile and tablet devices)."},{skillTitle:"Design to Web",skillDesc:"Converting design files to interactive, responsive and optimized web applications."}]},{title:"Back End Development",description:"Building Node.js web applications and <strong>RESTful API</strong> servers using technologies like <strong>Express, Core PHP and CodeIgniter</strong>.",skillsList:[{skillTitle:"RESTful API",skillDesc:"Experienced in Design and development of RESTful API servers using Node, PHP and CodeIgniter Framework."},{skillTitle:"Web Development",skillDesc:"Experienced in Design and development of Web Application using React Js, PHP, CodeIgniter and Laravel Framework."},{skillTitle:"E-commerce",skillDesc:"Design and development of E-Commerece using React Js, PHP, CodeIgniter and Laravel Framework."},{skillTitle:"Payment Gateway",skillDesc:"Experienced in working on server side payment systems with both PHP and NodeJS platforms."}]},{title:"Mobile App Development",description:"Learning developing native and hybrid mobile applications using <strong>Ionic Framework</strong> and <strong>React Native Framework</strong>.",skillsList:[{skillTitle:"Hybrid mobile apps",skillDesc:"Learning development of hybrid mobile apps for Android, iOS and Windows Phone based on Ionic 3/Cordova or Ionic 4/Capacitor technologies."},{skillTitle:"Native mobile apps",skillDesc:"Learning development of native mobile apps for Android, iOS using React Native Framework."}]}]}],$g=JSON.parse(`[{"id":12,"title":"MacEdits","description":"Local-first macOS reel editor built with SwiftUI + AVFoundation.","logo":"/images/github.svg","thumbnail":"https://raw.githubusercontent.com/radhakishan404/MacEdits/main/assets/screenshots/home-full.png","gitAvailable":true,"tag":"Open Source, GitHub, Application, UX, Front-end, macOS","technology":"Swift, SwiftUI, AVFoundation, ScreenCaptureKit, macOS","date":"2026","isPackage":false,"onlineLink":"https://github.com/radhakishan404/MacEdits","sliderImages":[{"image":"https://raw.githubusercontent.com/radhakishan404/MacEdits/main/assets/screenshots/home-full.png"},{"image":"https://raw.githubusercontent.com/radhakishan404/MacEdits/main/assets/screenshots/recording-full.png"},{"image":"https://raw.githubusercontent.com/radhakishan404/MacEdits/main/assets/screenshots/editor-full.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"MacEdits is a <strong>local-first macOS creator tool</strong> focused on fast reel editing, screen recording, timeline control, and export workflows without a backend dependency.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/MacEdits","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Recording studio for camera, screen, and screen + camera workflows"},{"isLink":false,"link":"","text":"Timeline editing with trim, split, reorder, and ripple controls"},{"isLink":false,"link":"","text":"Creator-first text, captions, transitions, and export tooling"}]},{"contentTitle":"Responsibilities","contentDescription":"Built and shipped the open source macOS editor from product direction through implementation.","contentList":[{"isLink":false,"link":"","text":"Product concept, workflow design, and feature planning"},{"isLink":false,"link":"","text":"SwiftUI app architecture and AVFoundation-based media workflows"},{"isLink":false,"link":"","text":"Build in public release, documentation, and repository setup"}]}]},{"id":11,"title":"Notch Prompter","description":"A notch-aligned native macOS teleprompter built with SwiftUI.","logo":"/images/github.svg","thumbnail":"https://opengraph.githubassets.com/1/radhakishan404/notch-prompter","gitAvailable":true,"tag":"Open Source, GitHub, Application, UX, Front-end","technology":"SwiftUI, macOS, Product Design","date":"2026","isPackage":false,"onlineLink":"https://notch-prompter.vercel.app","sliderImages":[{"image":"https://opengraph.githubassets.com/1/radhakishan404/notch-prompter"},{"image":"/images/project/POS-1.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Notch Prompter is a <strong>native macOS utility</strong> focused on notch-aligned teleprompter usability with a clean and practical UI.","contentList":[{"isLink":true,"link":"https://notch-prompter.vercel.app","text":"Project website"},{"isLink":true,"link":"https://github.com/radhakishan404/notch-prompter","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Native SwiftUI experience"},{"isLink":false,"link":"","text":"Optimized reading layout near notch area"},{"isLink":false,"link":"","text":"Simple interaction model for creators"}]},{"contentTitle":"Responsibilities","contentDescription":"Built this project from idea to public release.","contentList":[{"isLink":false,"link":"","text":"Product concept and UI flow"},{"isLink":false,"link":"","text":"Implementation and testing"},{"isLink":false,"link":"","text":"Release and public showcase"}]}]},{"id":10,"title":"SSHipIt","description":"CD over SSH for Node.js, Next.js and React applications.","logo":"/images/github.svg","thumbnail":"https://opengraph.githubassets.com/1/radhakishan404/sshipit","gitAvailable":true,"tag":"Open Source, GitHub, Node Js, React, JavaScript, DevOps, Back-end, Website","technology":"Node Js, JavaScript, CI/CD, SSH, React, Next.js","date":"2026","isPackage":false,"onlineLink":"https://sshipit.vercel.app/","sliderImages":[{"image":"https://opengraph.githubassets.com/1/radhakishan404/sshipit"},{"image":"/images/project/npm/react-animation-loader.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"SSHipIt is an open source deployment utility to run reliable CD pipelines over SSH for <strong>Node.js, Next.js and React</strong> applications.","contentList":[{"isLink":true,"link":"https://sshipit.vercel.app/","text":"Project website"},{"isLink":true,"link":"https://github.com/radhakishan404/sshipit","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"SSH-based deployment flow"},{"isLink":false,"link":"","text":"Node.js / Next.js / React support"},{"isLink":false,"link":"","text":"Simple, self-hosted CI/CD pattern"}]},{"contentTitle":"Responsibilities","contentDescription":"Designed and built the project as an open source product.","contentList":[{"isLink":false,"link":"","text":"Architecture and implementation"},{"isLink":false,"link":"","text":"Documentation and onboarding guides"},{"isLink":false,"link":"","text":"Maintenance and enhancements"}]}]},{"id":1,"title":"Nirulas","description":"Nirula's is India's oldest fast food restaurant chain.","logo":"/images/project/nirulas-logo.webp","thumbnail":"/images/project/nirulas-thumb.webp","gitAvailable":false,"tag":"React, Node Js, JavaScript, Front-end, Back-end, REST, UX, Website","technology":"React, Express, Node Js, JavaScript, Redux, Amazon, Google Analytics","date":"November 2020","onlineLink":"https://delivery.nirulas.com/","sliderImages":[{"image":"/images/project/nirulas-slider-5.gif"},{"image":"/images/project/nirulas-slider-1.webp"},{"image":"/images/project/nirulas-slider-2.webp"},{"image":"/images/project/nirulas-slider-3.webp"},{"image":"/images/project/nirulas-slider-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Nirula's is India's oldest fast food restaurant chain. Based in North India and most popular in the <strong>NCR Delhi</strong>. It was Delhi's first fast food restaurant, opening in Connaught Place in 1977. The website was initially build on Angular Js but was later moved to <strong>React and Node Js</strong>. React used on the client-side input handling and Node Js is used for the server-side to handle connectivity between databases. It utilizes some advanced <strong>page transition</strong> and <strong>animations</strong>.","contentList":[{"isLink":true,"link":"https://delivery.nirulas.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Product Listing"},{"isLink":false,"link":"","text":"Add to cart with Animation"},{"isLink":false,"link":"","text":"Coupon Apply"},{"isLink":false,"link":"","text":"Place Order"},{"isLink":false,"link":"","text":"OTP verify"},{"isLink":false,"link":"","text":"Live location fetch"},{"isLink":false,"link":"","text":"Location based delivery"}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete website both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>Node Js Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"Third Party <strong>Google Analytics, Message and Facebook Pixel</strong> API Integration"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Front-end and Back-end</strong>"},{"isLink":false,"link":"","text":"<strong>Deployment</strong> of both React and Node Js Application"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I faced <strong>designing and architecting the base structure</strong> of the application. Building a web app for fast and durable react was a perfect choice for future growth and maintainability. <strong>React Components, React-Redux, and Lazy loading modules</strong> made this whole project lot easier by allowing me to separate the app logic by modules (per feature). One of the biggest challenges during development was maintaining the <strong>product customization and pricing module</strong>. I have created a separate component for the customization and called API based on the product by that I handled the <strong>customization and pricing part in Node JS API</strong>. I <strong>learned</strong> many new things while building this project still I am getting new changes and new phases to work on.","contentList":null}]},{"id":8,"title":"Nirulas POS","description":"Nirula's is India's oldest fast food restaurant chain.","logo":"/images/project/nirulas-logo.webp","thumbnail":"/images/project/POS-1.png","gitAvailable":false,"tag":"React, Node Js, JavaScript, Front-end, Back-end, REST, UX, Website","technology":"React, Express, Node Js, JavaScript, Redux, Amazon, Google Analytics","date":"April 2021","onlineLink":"https://delivery.nirulas.com/","sliderImages":[{"image":"/images/project/POS-1.png"},{"image":"/images/project/POS-2.png"},{"image":"/images/project/POS-3.png"},{"image":"/images/project/POS-4.png"},{"image":"/images/project/POS-5.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Nirula's is India's oldest fast food restaurant chain. Based in North India and most popular in the <strong>NCR Delhi</strong>. It was Delhi's first fast food restaurant, opening in Connaught Place in 1977. The website was initially build on Angular Js but was later moved to <strong>React and Node Js</strong>. React used on the client-side input handling and Node Js is used for the server-side to handle connectivity between databases. It utilizes some advanced <strong>page transition</strong> and <strong>animations</strong>.","contentList":[{"isLink":true,"link":"https://branch.nirulas.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Product Listing"},{"isLink":false,"link":"","text":"Add to cart with Animation"},{"isLink":false,"link":"","text":"Coupon Apply"},{"isLink":false,"link":"","text":"Place Order"},{"isLink":false,"link":"","text":"OTP verify"},{"isLink":false,"link":"","text":"Product Stock"},{"isLink":false,"link":"","text":"Branch Orders"},{"isLink":false,"link":"","text":"Branch Dashboard"}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete website both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>Node Js Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"Third Party <strong>Google Analytics, Message and Facebook Pixel</strong> API Integration"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Front-end and Back-end</strong>"},{"isLink":false,"link":"","text":"<strong>Deployment</strong> of both React and Node Js Application"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I faced <strong>designing and architecting the base structure</strong> of the application. Building a web app for fast and durable react was a perfect choice for future growth and maintainability. <strong>React Components, React-Redux, and Lazy loading modules</strong> made this whole project lot easier by allowing me to separate the app logic by modules (per feature). One of the biggest challenges during development was maintaining the <strong>product customization and pricing module</strong>. I have created a separate component for the customization and called API based on the product by that I handled the <strong>customization and pricing part in Node JS API</strong>. I <strong>learned</strong> many new things while building this project still I am getting new changes and new phases to work on.","contentList":null}]},{"id":2,"title":"Covid-19 Tracker","description":"Covid-19 Tracker is a simple React Native application.","logo":"/images/project/covid/covid-19-logo.webp","thumbnail":"/images/project/covid/covid-19-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, Application, REST, UX, Design, GitHub","technology":"React Native, Expo, Mathdroid Covid API, Novelcovid API, React Navigation","date":"3 April, 2020 - 13 April, 2020","onlineLink":"http://radhakishan.site/covid-download.php","sliderImages":[{"image":"/images/project/covid/covid-slider-1.webp"},{"image":"/images/project/covid/covid-slider-2.webp"},{"image":"/images/project/covid/covid-slider-3.webp"},{"image":"/images/project/covid/covid-slider-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Covid-19 Tracker is a simple <strong>React Native</strong> application that shows you the Current and <strong>Total Infected, Recovered, and Deaths</strong> of people all around the globe and you can see data based on <strong>country selection</strong>.","contentList":[{"isLink":true,"link":"https://radhakishan.site/covid-download.php","text":"Link to download the apk file"},{"isLink":true,"link":"https://github.com/radhakishan404/covid-19-tracker","text":"Source Code"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Country Selector"},{"isLink":false,"link":"","text":"React Native Line and Bar Chart"},{"isLink":false,"link":"","text":"Image gallery"},{"isLink":false,"link":"","text":"Stylish Bottom Navigation Bar"},{"isLink":false,"link":"","text":"Search country and get latest data"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included design and development of a complete application.","contentList":[{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"<strong>API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Application</strong>"}]},{"contentTitle":"Challenges","contentDescription":"This was my first <strong>React Native</strong> Application. I had some problems at the start but later I was able to <strong>understand the problem and solve them</strong>. The biggest challenge for me was the <strong>Image gallery</strong> section for making the images responsive, In the end, I was able to make all images <strong>proper and responsive</strong>.","contentList":null}]},{"id":3,"title":"Health Monitoring System","description":"Health Monitoring System - Patient-Doctor Live Chat!","logo":"/images/project/hms/hms-logo.webp","thumbnail":"/images/project/hms/hms-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, Back-end, REST, UX, Design, PHP, MySql, GitHub","technology":"React Js, React-Redux, PHP, MySql, HTML, CSS, JS, VS Code","date":"1 August, 2020 - 10 August, 2020","onlineLink":"https://healthmonitoring.radhakishan.site/","sliderImages":[{"image":"/images/project/hms/hms-slider-1.webp"},{"image":"/images/project/hms/hms-slider-2.webp"},{"image":"/images/project/hms/hms-slider-3.webp"},{"image":"/images/project/hms/hms-slider-4.webp"},{"image":"/images/project/hms/hms-slider-5.webp"},{"image":"/images/project/hms/hms-slider-6.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>Health Monitoring System</strong> is a simple web project where <strong>patients</strong> can add their <strong>readings</strong> and <strong>doctors</strong> can check patient's readings and can send direct <strong>messages to each other</strong> through the application. Both patients and doctors need to <strong>log in or register</strong> before proceeds. Both patient and doctors can <strong>live chat</strong> with each other.","contentList":[{"isLink":true,"link":"https://healthmonitoring.radhakishan.site/","text":"Link to live demo"},{"isLink":true,"link":"https://github.com/radhakishan404/Health-Monitoring-System-Live-Chat","text":"Front-end Source Code"},{"isLink":true,"link":"https://github.com/radhakishan404/Health-Monitoring-System-Live-Chat/tree/master/health-monitoring-php","text":"API Source Code"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Login, Register, Forget Password"},{"isLink":false,"link":"","text":"Add, Edit, Delete, List (CRUD) for patient readings"},{"isLink":false,"link":"","text":"Chart view for Readings"},{"isLink":false,"link":"","text":"Profile Edit"},{"isLink":false,"link":"","text":"Doctors Message List"},{"isLink":false,"link":"","text":"Live Chat with doctors"},{"isLink":false,"link":"","text":"List of patients"},{"isLink":false,"link":"","text":"Live search of patients"},{"isLink":false,"link":"","text":"Chart view details about patients"},{"isLink":false,"link":"","text":"Direct message to patients"},{"isLink":false,"link":"","text":"Live Chat with Patients"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"First Install Node Js Version 14.8.0 from <a class='text-gradient' href='https://nodejs.org/en/' rel='nofollow'>Here ↩</a>"},{"isLink":false,"link":"","text":"Clone the repo into your disk <br><strong class='code'>$ git clone git@github.com:ruanyf/react-demos.git</strong>"},{"isLink":false,"link":"","text":"Then go to your project directory using this command. <br><strong class='code'>$ cd project-directory</strong>"},{"isLink":false,"link":"","text":"After navigating to your project directory run this command to download all the node modules. <br><strong class='code'>$ npm install</strong>"},{"isLink":false,"link":"","text":"After the installation successful run this command to run the application. This command will start your react app and run it into the browser. <br><strong class='code'>$ npm start</strong>"},{"isLink":false,"link":"","text":"Hooray! Then play with the source files under the directories."},{"isLink":false,"link":"","text":"<strong>Note:</strong> After the start of the project, you have to integrate the <strong>PHP API</strong> for storing the data in the <strong>database</strong>."}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete project both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>PHP Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Application</strong>"}]},{"contentTitle":"Challenges","contentDescription":"I had only <strong>two main challenges</strong> in this project, one was the creation of a <strong>chat application between patients and doctors</strong>, and the second was the <strong>handling of two different users</strong> (Patients and Doctors) on the same panel. I used some of the online examples for <strong>chat systems</strong> and also my previous experience in other projects.","contentList":null},{"contentTitle":"Resources","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"ReactJS: Refer to <a href='https://reactjs.org/' class='text-gradient'>https://reactjs.org/</a> to understand the concepts of ReactJS."},{"isLink":false,"link":"","text":"React Bootstrap: Refer to <a class='text-gradient' href='https://react-bootstrap.github.io/getting-started/introduction/'>https://react-bootstrap.github.io/getting-started/introduction/</a> to understand how to use React Bootstrap."}]}]},{"id":4,"title":"react-native-stylish-accordion","description":"Simple Stylish React Native Accordion","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/react-native-accordion-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, TypeScript, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, TypeScript, NPM, VS Code","date":"October 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/react-native-stylish-accordion","sliderImages":[{"image":"/images/project/npm/react-native-accordion-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>react-native-stylish-accordion</strong> is a simple <strong>React Native NPM Package</strong> that can be used in your <strong>React Native Expo Version Application</strong>. It has a total of <strong>9 versions</strong>, the latest version <strong>1.0.9</strong>. The file size is only <strong>675 kB</strong>.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-native-stylish-accordion","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/react-native-stylish-accordion","text":"Link to NPM Package"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Colour"},{"isLink":false,"link":"","text":"Custom Icon"},{"isLink":false,"link":"","text":"Custom Transition Time"},{"isLink":false,"link":"","text":"Custom Icon Size"},{"isLink":false,"link":"","text":"Custom Style"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install react-native-stylish-accordion</strong> OR <strong class='code'>$ yarn add react-native-stylish-accordion</strong>"},{"isLink":false,"link":"","text":"Now we need to install react-native-reanimated and react-native-animatable. If you are using Expo, to ensure that you get the compatible versions of the libraries, run: <br><strong class='code'>$ expo install react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"If you are not using Expo, run the following: <br><strong class='code'>$ yarn add react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"<strong>Note</strong>: This is created with the help of <strong>react-native-accordion-view</strong> package."}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>title</strong> (string)"},{"isLink":false,"link":"","text":"<strong>titleStyle</strong> (TextStyle)"},{"isLink":false,"link":"","text":"<strong>iconSize</strong> (number)"},{"isLink":false,"link":"","text":"<strong>headerStyle</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>subContainerStyle</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>style</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>headerComponent</strong> (ReactNode)"},{"isLink":false,"link":"","text":"<strong>open</strong> (boolean)"},{"isLink":false,"link":"","text":"<strong>onPress</strong> (void)"},{"isLink":false,"link":"","text":"<strong>timingTransition</strong> (number default:400) opening speed"},{"isLink":false,"link":"","text":"<strong>containerRadius</strong> (number)"}]}]},{"id":5,"title":"validate-form-in-expo-style","description":"Simple form validation component with floating label for React-Native inspired by react-native-form-validator","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/validate-form-expo-style-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, NPM, VS Code","date":"November 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/validate-form-in-expo-style","sliderImages":[{"image":"/images/project/npm/validate-form-expo-style-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"ℹ️ <strong>validate-form-in-expo-style</strong> is a Simple form validation component with floating label for React-Native inspired by <a class='text-gradient' href='https://github.com/NewOldMax/react-native-validator-form' rel='nofollow'>react-native-form-validator</a>. You can add <strong>floating label</strong> with this library and can validate form. I created this package for my personal use you can use it in yours too. <br> <br> My bad, that I don't have Mac or IPhone, so this library is tested only in android. Do check it in Mac and let me know if any problem occurs.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/validate-form-in-expo-style","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/validate-form-in-expo-style","text":"Link to NPM Package"},{"isLink":true,"link":"https://youtu.be/y7bkVDu0LVA","text":"Link to Example Video"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Regexp Rules"},{"isLink":false,"link":"","text":"Custom Valid and Invalid Icon"},{"isLink":false,"link":"","text":"Custom Left Icon"},{"isLink":false,"link":"","text":"Custom Error Messages"},{"isLink":false,"link":"","text":"Custom Style"},{"isLink":false,"link":"","text":"Custom Validation"}]},{"contentTitle":"Install","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install validate-form-in-expo-style</strong> OR <strong class='code'>$ yarn add validate-form-in-expo-style</strong>"},{"isLink":false,"link":"","text":"Now we need to install react-native-reanimated and react-native-animatable. If you are using Expo, to ensure that you get the compatible versions of the libraries, run: <br><strong class='code'>$ expo install react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"If you are not using Expo, run the following: <br><strong class='code'>$ yarn add react-native-reanimated react-native-gesture-handler react-native-redash</strong>"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":true,"link":"https://www.npmjs.com/package/validate-form-in-expo-style#-how-to-use-","text":"Link to the code example"}]},{"contentTitle":"Supoorted types","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>TextInput</strong>"}]},{"contentTitle":"Default Validation Rules","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>matchRegexp</strong> (To match any regexp validation)"},{"isLink":false,"link":"","text":"<strong>isEmail</strong> (Is email is valid or not)"},{"isLink":false,"link":"","text":"<strong>isEmpty</strong> (Is field is empty or not)"},{"isLink":false,"link":"","text":"<strong>required</strong> (Is field is required or not)"},{"isLink":false,"link":"","text":"<strong>trim</strong> (Trim the value of field)"},{"isLink":false,"link":"","text":"<strong>isNumber</strong> (Is the value is number or not)"},{"isLink":false,"link":"","text":"<strong>isFloat</strong> (Is the value is float or not)"},{"isLink":false,"link":"","text":"<strong>isPositive</strong> (Is the value is positive or not)"},{"isLink":false,"link":"","text":"<strong>minNumber</strong> (Min number to be entered)"},{"isLink":false,"link":"","text":"<strong>maxNumber</strong> (Max number can be entered)"},{"isLink":false,"link":"","text":"<strong>minFloat</strong> (Min float value to be entered)"},{"isLink":false,"link":"","text":"<strong>maxFloat</strong> (Max float value can be entered)"},{"isLink":false,"link":"","text":"<strong>minStringLength</strong> (Minimum length of string to be entered)"},{"isLink":false,"link":"","text":"<strong>maxStringLength</strong> (Maximum length of string can be entered)"},{"isLink":false,"link":"","text":"<strong>isString</strong> (Is value is string or not)"},{"isLink":false,"link":"","text":"Some rules that are added in validationName can accept extra parameter for validation, like: <br> <strong class='code'><div class='highlight javascript'><pre class='editor editor-colors'><div class='line'><span class='source js'><span class='keyword operator comparison js'><span>&lt;</span></span><span>InputText</span></span></div><div class='line'><span class='source js'><span>&nbsp;&nbsp;&nbsp;</span><span class='meta brace curly js'><span>{</span></span><span class='keyword operator js'><span>...</span></span><span>otherProps</span><span class='meta brace curly js'><span>}</span></span></span></div><div class='line'><span class='source js'><span>&nbsp;&nbsp;&nbsp;validateNames</span><span class='keyword operator assignment js'><span>=</span></span><span class='meta brace curly js'><span>{</span></span><span class='meta brace square js'><span>[</span></span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>minNumber:1</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta delimiter object comma js'><span>,</span></span><span>&nbsp;</span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>maxNumber:255</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta delimiter object comma js'><span>,</span></span><span>&nbsp;</span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>matchRegexp:^[0-9]$</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta brace square js'><span>]</span></span><span class='meta brace curly js'><span>}</span></span></span></div><div class='line'><span class='source js'><span class='keyword operator js'><span>/</span></span><span class='keyword operator comparison js'><span>&gt;</span></span></span></div></pre></div></strong>"}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>Form Props</strong> <br> <table> <thead> <tr> <th>Prop</th> <th>Required</th> <th>Type</th> <th>Default value</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>onSubmit</td> <td>true</td> <td>function</td> <td></td> <td>Callback for form that fires when all validations are passed</td> </tr> <tr> <td>instantValidate</td> <td>false</td> <td>bool</td> <td>true</td> <td>If true, form will be validated after each field change. If false, form will be validated only after clicking submit button.</td> </tr> <tr> <td>onError</td> <td>false</td> <td>function</td> <td></td> <td>Callback for form that fires when some of validations are not passed. It will return array of elements which not valid.</td> </tr> <tr> <td>debounceTime</td> <td>false</td> <td>number</td> <td>0</td> <td>Debounce time for validation i.e. your validation will run after <code>debounceTime</code> ms when you stop changing your input</td> </tr> </tbody> </table>"},{"isLink":false,"link":"","text":"<strong>InputText Props</strong> <br> <table> <thead> <tr> <th>Prop</th> <th>Required</th> <th>Type</th> <th>Default value</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>true</td> <td>string</td> <td></td> <td>Name of input field</td> </tr> <tr> <td>label</td> <td>false</td> <td>string</td> <td></td> <td>Name of input Floating Label</td> </tr> <tr> <td>placeholder</td> <td>false</td> <td>string</td> <td></td> <td>Placeholder of input before any value</td> </tr> <tr> <td>validateNames</td> <td>false</td> <td>array</td> <td></td> <td>Array of validation. See list of default validation rules in above example.</td> </tr> <tr> <td>errorMessages</td> <td>false</td> <td>array</td> <td></td> <td>Array of error messages. Order of messages should be the same as <code>validateNames</code> prop.</td> </tr> <tr> <td>errorStyle</td> <td>false</td> <td>object</td> <td>{ container: { top: 0, left: 0, position: 'absolute' }, text: { color: 'red' }, underlineValidColor: 'gray', underlineInvalidColor: 'red' } }</td> <td>Add your own error styles</td> </tr> <tr> <td>validatorListener</td> <td>false</td> <td>function</td> <td></td> <td>It triggers after each validation. It will return <code>true</code> or <code>false</code></td> </tr> <tr> <td>withRequiredValidator</td> <td>false</td> <td>bool</td> <td></td> <td>Allow to use <code>required</code> validator in any validation trigger, not only form submit</td> </tr> <tr> <td>leftIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display left icon see above example</td> </tr> <tr> <td>invalidIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display error icon on right side see above example</td> </tr> <tr> <td>validIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display success icon on right side see above example</td> </tr> <tr> <td>secureTextEntry</td> <td>false</td> <td>bool</td> <td>false</td> <td>If true than show hide icon will get added automatically</td> </tr> </tbody> </table>"}]},{"contentTitle":"Methods","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>Form Methods</strong> <br> <table> <thead> <tr> <th>Name</th> <th>Params</th> <th>Return</th> <th>Descriptipon</th> </tr> </thead> <tbody> <tr> <td>resetValidations</td> <td></td> <td></td> <td>Reset validation messages for all validated inputs</td> </tr> <tr> <td>isFormValid</td> <td>dryRun: bool (default true)</td> <td>Promise</td> <td>Get form validation state in a Promise (<code>true</code> if whole form is valid). Run with <code>dryRun = false</code> to show validation errors on form</td> </tr> </tbody> </table>"},{"isLink":false,"link":"","text":"<strong>InputText Methods</strong> <br> <table> <thead> <tr> <th>Name</th> <th>Params</th> <th>Return</th> <th>Descriptipon</th> </tr> </thead> <tbody> <tr> <td>getErrorMessage</td> <td></td> <td></td> <td>Get error validation message</td> </tr> <tr> <td>validate</td> <td>value: any, includeRequired: bool</td> <td></td> <td>Run validation for current component</td> </tr> <tr> <td>isValid</td> <td></td> <td>bool</td> <td>Return current validation state</td> </tr> <tr> <td>makeInvalid</td> <td></td> <td></td> <td>Set invalid validation state</td> </tr> <tr> <td>makeValid</td> <td></td> <td></td> <td>Set valid validation state</td> </tr> </tbody> </table>"}]}]},{"id":6,"title":"react-animation-loader","description":"Simple animation loader with some css animation and an image with moving animation","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/react-animation-loader-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, CSS, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, CSS, NPM, VS Code","date":"December 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/react-animation-loader","sliderImages":[{"image":"/images/project/npm/react-animation-loader-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>react-animation-loader</strong> simple animation loader with some <strong>css animation</strong> and an image with moving animation. Check it out. It has a total of <strong>5 versions</strong>, the latest version <strong>1.0.5</strong>. The file size is only <strong>11.3 kB</strong>.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-animation-loader","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/react-animation-loader","text":"Link to NPM Package"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Colour"},{"isLink":false,"link":"","text":"Custom Image"},{"isLink":false,"link":"","text":"Custom Transition Time"},{"isLink":false,"link":"","text":"Custom Image Size"},{"isLink":false,"link":"","text":"Custom Style"}]},{"contentTitle":"Install","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install Install</strong> OR <strong class='code'>$ yarn add Install</strong>"}]},{"contentTitle":"Example","contentDescription":"","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-animation-loader#example","text":"Link to code example"}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>isLoading</strong> (bool) (required)"},{"isLink":false,"link":"","text":"<strong>bgColor</strong> (string) (required)"},{"isLink":false,"link":"","text":"<strong>icon</strong> (string)"}]}]},{"id":7,"title":"Stock Money Makers","description":"Stock Money Makers provides the best online stock market courses in india which Includes exclusive banknifty intraday course, technical analysis course, bank nifty option course, stock market courses for beginners & much more.","logo":"/images/project/smm/logo.webp","thumbnail":"/images/project/smm/smm-1.webp","gitAvailable":false,"tag":"PHP, CodeIgniter, jQuery, JavaScript, MySql, HTML5, Mobirise","technology":"PHP, CodeIgniter, jQuery, JavaScript, MySQL, HTML5, Mobirise","date":"February 2020 - March 2020","isPackage":false,"onlineLink":"https://stockmoneymakers.com/","sliderImages":[{"image":"/images/project/smm/smm-1.webp"},{"image":"/images/project/smm/smm-2.webp"},{"image":"/images/project/smm/smm-3.webp"},{"image":"/images/project/smm/smm-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Stock Market Trader/Investor/Consultancy/Financial Advisor. Stock Money Makers Team's Main Purpose Is To Help People Learn About The Stock Market.","contentList":[{"isLink":true,"link":"https://stockmoneymakers.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Admin Panel"},{"isLink":false,"link":"","text":"Paid Webinar Courses"},{"isLink":false,"link":"","text":"Blogs"},{"isLink":false,"link":"","text":"Course uploading using plupload"},{"isLink":false,"link":"","text":"Payment Gateway"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included <strong>design and development</strong> of a complete website.","contentList":[{"isLink":false,"link":"","text":"Layout, UI and UX design"},{"isLink":false,"link":"","text":"Front End Development"},{"isLink":false,"link":"","text":"Back End Development"},{"isLink":false,"link":"","text":"Integration with Google Analytics"},{"isLink":false,"link":"","text":"Responsive Design"},{"isLink":false,"link":"","text":"User Experience"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I occurred was <strong>designing and architecting</strong> the base structure of front-end. Building a web app with <strong>CodeIgniter</strong> a perfect choice for future growth and maintainability of a <strong>web application</strong>. CodeIgniter Framework made this a whole lot easier by allowing us to separate the <strong>Logic, Modules and View</strong>. One of the biggest challenges during development was uploading <strong>large video course</strong> of the web app in the back-end.","contentList":null}]},{"id":9,"title":"Bright Wood - Buy Furniture Online","description":"This project was created for one of my friend. He was my relative also so I gave me the best website to manage inventory and orders from site. In this project admin can create multiple variant of product with various type of colors and size of the product.","logo":"/images/project/bright-wood-logo.png","thumbnail":"/images/project/bright-wood-1.png","gitAvailable":false,"tag":"PHP, jQuery, JavaScript, MySql, HTML5, Razorpay","technology":"PHP, jQuery, JavaScript, MySQL, HTML5, Razorpay","date":"July 2021 - September 2021","isPackage":false,"onlineLink":"https://brightwood.in/","sliderImages":[{"image":"/images/project/bright-wood-1.png"},{"image":"/images/project/bright-wood-2.png"},{"image":"/images/project/bright-wood-3.png"},{"image":"/images/project/bright-wood-4.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Bright Wood Provide the best furniture in market, There designs are inspired by the new generation with a classic touch. Brightwood is proud to offer a wide range of solid wood furniture at great prices. Our full array of furniture includes living room, dining room, home office, bedroom, and kids furniture.","contentList":[{"isLink":true,"link":"https://brightwood.in/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Admin Panel"},{"isLink":false,"link":"","text":"Furniture Product"},{"isLink":false,"link":"","text":"Category"},{"isLink":false,"link":"","text":"Online Payment Gateway"},{"isLink":false,"link":"","text":"Filtered Product"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included <strong>design and development</strong> of a complete website.","contentList":[{"isLink":false,"link":"","text":"Layout, UI and UX design"},{"isLink":false,"link":"","text":"Front End Development"},{"isLink":false,"link":"","text":"Back End Development"},{"isLink":false,"link":"","text":"Integration with Google Analytics"},{"isLink":false,"link":"","text":"Responsive Design"},{"isLink":false,"link":"","text":"User Experience"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I occurred was <strong>designing and architecting</strong> the base structure of front-end. Building a ecommerece with <strong>PHP</strong> a perfect choice for future growth and maintainability of a <strong>web application</strong>. PHP made this a whole lot easier by allowing us to create website faster. One of the biggest challenges during development was maintaining <strong>Variants of product</strong> of the web app in the back-end.","contentList":null}]}]`),Oa={experience:qg,skills:Yg,project:$g};function cn(r,o){const i=typeof r=="object"?r:{title:r,description:o};me.useEffect(()=>{const l=typeof window<"u"?window.location.href:"";i.title&&(document.title=i.title);const c=(v,g)=>{if(!g)return;const b=document.querySelector(v);b&&b.setAttribute("content",g)};i.description&&(c('meta[name="description"]',i.description),c('meta[property="og:description"]',i.description),c('meta[name="twitter:description"]',i.description)),i.title&&(c('meta[property="og:title"]',i.title),c('meta[name="twitter:title"]',i.title)),i.image&&(c('meta[property="og:image"]',i.image),c('meta[name="twitter:image"]',i.image)),l&&c('meta[property="og:url"]',l),c('meta[property="og:type"]',i.type||"website"),c('meta[name="twitter:card"]',i.twitterCard||"summary_large_image");const m=document.querySelector('link[rel="canonical"]');m&&l&&m.setAttribute("href",l);const h=document.querySelector('script[data-dynamic-seo="true"]');if(h&&h.remove(),i.structuredData){const v=document.createElement("script");v.type="application/ld+json",v.dataset.dynamicSeo="true",v.text=JSON.stringify(i.structuredData),document.head.appendChild(v)}},[i.description,i.image,i.structuredData,i.title,i.twitterCard,i.type])}function Vg(){const r=new Date("1998-07-26"),o=new Date;let i=o.getFullYear()-r.getFullYear();const l=o.getMonth()-r.getMonth();return(l<0||l===0&&o.getDate()<r.getDate())&&(i-=1),i}function Jg(){return cn("About | Radhakishan Jangid","Experience, technical strengths, and current focus areas."),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight","data-reveal":!0,children:[p.jsx("span",{className:"eyebrow",children:"/* about */"}),p.jsx("h1",{children:"Engineering depth, product focus, and shipping discipline."}),p.jsxs("p",{className:"lede",children:["I’m Radhakishan Jangid, a ",Vg()," year old software engineer based in Mumbai. My work sits at the intersection of product UI, backend services, and developer-facing systems."]})]}),p.jsxs("section",{className:"info-grid","data-reveal":!0,children:[p.jsxs("div",{className:"surface-card","data-reveal":!0,children:[p.jsx("h2",{children:"Current position"}),p.jsxs("p",{children:["Senior Software Engineer at ",p.jsx("a",{href:"https://www.cachetech.com/",target:"_blank",rel:"noreferrer",children:"Cachetech Advisor Solutions"}),", working on fintech systems, multi-tenant workflows, and product engineering across web and mobile."]})]}),p.jsxs("div",{className:"surface-card","data-reveal":!0,children:[p.jsx("h2",{children:"Working style"}),p.jsx("p",{children:"Strong on frontend architecture, pragmatic on backend delivery, and comfortable turning rough product intent into production-ready systems."})]})]}),p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"// ==================== //"}),p.jsxs("section",{className:"section-stack","data-reveal":!0,children:[p.jsxs("div",{className:"section-heading",children:[p.jsx("span",{className:"eyebrow",children:"/* experience */"}),p.jsx("h2",{children:"Recent roles"})]}),p.jsx("div",{className:"timeline-list",children:Oa.experience.map(r=>p.jsxs("article",{className:"timeline-item","data-reveal":!0,children:[p.jsxs("div",{className:"timeline-meta",children:[p.jsxs("span",{children:[r.from," to ",r.to]}),p.jsx("span",{children:r.location})]}),p.jsxs("div",{children:[p.jsx("h3",{children:r.title}),p.jsx("p",{className:"timeline-company",children:p.jsx("a",{href:r.companyLink,target:"_blank",rel:"noreferrer",children:r.companyName})}),p.jsx("p",{children:r.description})]})]},`${r.companyName}-${r.from}`))})]}),p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"/* ────────────────────── */"}),p.jsxs("section",{className:"section-stack","data-reveal":!0,children:[p.jsxs("div",{className:"section-heading",children:[p.jsx("span",{className:"eyebrow",children:"/* capabilities */"}),p.jsx("h2",{children:"Core skill areas"})]}),p.jsx("div",{className:"capability-grid",children:Oa.skills[0].skillType.map(r=>p.jsxs("article",{className:"surface-card","data-reveal":!0,children:[p.jsx("h3",{children:r.title}),p.jsx("p",{dangerouslySetInnerHTML:{__html:r.description}}),p.jsx("ul",{className:"clean-list",children:r.skillsList.map(o=>p.jsxs("li",{children:[p.jsx("strong",{children:o.skillTitle}),p.jsx("span",{children:o.skillDesc})]},o.skillTitle))})]},r.title))})]})]})}function Kg({html:r,title:o}){return p.jsx("iframe",{className:"article-detail-frame",title:o,srcDoc:r,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms"})}const Ai="rk-journal-f7c2a91",Ei="https://api.countapi.xyz",$d=new Set;function Ip(r){let o=0;for(let i=0;i<r.length;i+=1)o=(o<<5)-o+r.charCodeAt(i),o|=0;return 180+Math.abs(o)%620}async function Qg(r){const o=await fetch(`${Ei}/get/${Ai}/${r}`),i=await o.json();return o.ok&&typeof i.value=="number"?i.value:null}async function Xg(r){const o=Ip(r),i=new URLSearchParams({namespace:Ai,key:r,value:`${o}`}),l=await fetch(`${Ei}/create?${i.toString()}`),c=await l.json();return l.ok&&typeof c.value=="number"?c.value:o}async function Zg(r){const o=await fetch(`${Ei}/hit/${Ai}/${r}`),i=await o.json();return o.ok&&typeof i.value=="number"?i.value:null}function ef(r){return typeof r!="number"?"":`${new Intl.NumberFormat("en-US").format(r)} reads`}function Pp(r,o=!1){const[i,l]=me.useState(null);return me.useEffect(()=>{let c=!0;async function m(){try{let h=await Qg(r);if(h===null&&(h=await Xg(r)),o&&!$d.has(r)){$d.add(r);const v=await Zg(r);typeof v=="number"&&(h=v)}c&&l(h)}catch{c&&l(Ip(r))}}return m(),()=>{c=!1}},[o,r]),me.useMemo(()=>({views:i,viewsLabel:ef(i)}),[i])}function tf({match:r}){const o=Ap(r.params.slug),{views:i,viewsLabel:l}=Pp(r.params.slug,!0);return cn({title:o?`${o.title} | Articles | Radhakishan Jangid`:"Article | Radhakishan Jangid",description:o?.excerpt||"Article detail",image:o?.coverImage||sn.article,type:"article",structuredData:o?{"@context":"https://schema.org","@type":"Article",headline:o.title,description:o.excerpt,datePublished:o.sortDate||void 0,author:{"@type":"Person",name:"Radhakishan Jangid"},publisher:{"@type":"Person",name:"Radhakishan Jangid"},mainEntityOfPage:`https://radhakishan404.github.io/articles/${o.slug}`,image:o.coverImage?`https://radhakishan404.github.io${o.coverImage}`:`https://radhakishan404.github.io${sn.article}`,keywords:o.tags.join(", "),interactionStatistic:typeof i=="number"?{"@type":"InteractionCounter",interactionType:"https://schema.org/ReadAction",userInteractionCount:i}:void 0}:void 0}),o?o.kind==="html"?p.jsx(Kg,{html:o.raw,title:o.title}):p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"article-detail-header","data-reveal":!0,children:[p.jsx(_e,{className:"back-link",to:"/articles",children:"[ back_to_articles ]"}),p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:o.kind==="html"?"HTML":"Markdown"}),p.jsx("span",{children:o.readingTime}),o.date?p.jsx("span",{children:o.date}):null,l?p.jsx("span",{children:l}):null]}),p.jsx("h1",{children:o.title}),p.jsx("p",{className:"lede article-lede",children:o.excerpt}),o.tags.length?p.jsx("div",{className:"tag-row",children:o.tags.map(c=>p.jsx("span",{className:"tag-chip tag-chip-static",children:c},c))}):null]}),p.jsx("article",{className:"article-prose","data-reveal":!0,dangerouslySetInnerHTML:{__html:o.bodyHtml}})]}):p.jsx(Da,{to:"/articles"})}function nf({article:r}){const{viewsLabel:o}=Pp(r.slug),i=r.coverImage?{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62)), url(${r.coverImage})`}:r.accent?{background:`linear-gradient(135deg, ${r.accent}22 0%, transparent 70%), var(--page-bg)`}:void 0;return p.jsxs("article",{className:"article-card","data-reveal":!0,children:[p.jsx(_e,{className:"article-card-preview",to:`/articles/${r.slug}`,"aria-label":`Open ${r.title}`,children:p.jsx("div",{className:`article-card-cover${r.coverImage?" has-image":""}`,style:i,children:p.jsxs("div",{className:"article-card-cover-top",children:[p.jsx("span",{className:"article-cover-category",children:r.category||"Article"}),p.jsx("span",{className:"article-cover-kind",children:r.kind==="html"?"HTML":"Markdown"})]})})}),p.jsxs("div",{className:"article-card-body",children:[p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:r.category||"Article"}),p.jsx("span",{children:r.readingTime}),r.date?p.jsx("span",{children:r.date}):null,o?p.jsx("span",{children:o}):null]}),p.jsx("h3",{children:p.jsx(_e,{to:`/articles/${r.slug}`,children:r.title})}),p.jsx("p",{children:r.excerpt}),r.tags.length?p.jsx("div",{className:"tag-row",children:r.tags.slice(0,4).map(l=>p.jsx("button",{type:"button",className:"tag-chip tag-chip-static",children:l},l))}):null,p.jsx(_e,{className:"inline-link",to:`/articles/${r.slug}`,children:"[ open_article ]"})]})]})}function af(){const[r,o]=me.useState(""),[i,l]=me.useState("all"),[c,m]=me.useState("all"),h=jg(),v=r.trim().toLowerCase(),g=Gt.filter(y=>{const T=!v||y.title.toLowerCase().includes(v)||y.excerpt.toLowerCase().includes(v),A=i==="all"||y.kind===i,j=c==="all"||y.tags.includes(c);return T&&A&&j}),b=Gt.find(y=>y.featured)||Gt[0];return cn({title:"Articles | Radhakishan Jangid",description:"AI prompts, developer content systems, carousel workflows, public write-ups, and practical technical articles for developers and creators.",image:b?.coverImage||sn.article,type:"website",structuredData:{"@context":"https://schema.org","@type":"CollectionPage",name:"Articles by Radhakishan Jangid",description:"AI prompts, developer content systems, public write-ups, and practical technical articles.",url:"https://radhakishan404.github.io/articles",mainEntity:g.slice(0,10).map(y=>({"@type":"Article",headline:y.title,url:`https://radhakishan404.github.io/articles/${y.slug}`,datePublished:y.sortDate||void 0}))}}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"articles-hero","data-reveal":!0,children:[p.jsxs("div",{className:"articles-hero-copy",children:[p.jsx("span",{className:"eyebrow",children:"/* articles */"}),p.jsx("h1",{children:"Prompts, AI workflows, dev content, and creator systems."}),p.jsx("p",{className:"lede",children:"Better articles for AI learners, developers, and tech creators. Less filler, more useful content."}),p.jsxs("div",{className:"article-hero-stats",children:[p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:Gt.length}),p.jsx("span",{children:"Published pieces"})]}),p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:h.length}),p.jsx("span",{children:"Topics covered"})]}),p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:Gt.filter(y=>y.kind==="html").length}),p.jsx("span",{children:"Interactive pages"})]})]})]}),b?p.jsx(_e,{className:"featured-article",to:`/articles/${b.slug}`,"data-reveal":!0,children:p.jsx("div",{className:`featured-article-media${b.coverImage?" has-image":""}`,style:b.coverImage?{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.14), rgba(0,0,0,0.7)), url(${b.coverImage})`}:void 0,children:p.jsxs("div",{className:"featured-article-inner",children:[p.jsx("span",{className:"featured-label",children:"Featured"}),p.jsx("h2",{children:b.title}),p.jsx("p",{children:b.excerpt}),p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:b.category}),p.jsx("span",{children:b.readingTime}),b.date?p.jsx("span",{children:b.date}):null]})]})})}):null]}),p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"/* ────────────────────── */"}),p.jsx("section",{className:"surface-card filter-panel","data-reveal":!0,children:p.jsxs("div",{className:"filter-panel-row",children:[p.jsxs("label",{className:"search-field",children:[p.jsx("span",{children:"Search"}),p.jsx("input",{type:"search",value:r,onChange:y=>o(y.target.value),placeholder:"Search title, excerpt, or topic"})]}),p.jsxs("div",{className:"filter-group",children:[p.jsx("span",{children:"Type"}),p.jsx("div",{className:"tag-row",children:["all","markdown","html"].map(y=>p.jsx("button",{type:"button",className:`tag-chip${i===y?" is-active":""}`,onClick:()=>l(y),children:y==="all"?"All":y},y))})]}),h.length?p.jsxs("div",{className:"filter-group",children:[p.jsx("span",{children:"Tags"}),p.jsxs("div",{className:"tag-row",children:[p.jsx("button",{type:"button",className:`tag-chip${c==="all"?" is-active":""}`,onClick:()=>m("all"),children:"All"}),h.map(y=>p.jsx("button",{type:"button",className:`tag-chip${c===y?" is-active":""}`,onClick:()=>m(y),children:y},y))]})]}):null]})}),p.jsx("section",{className:"article-grid article-grid-large","data-reveal":!0,children:g.map(y=>p.jsx(nf,{article:y},y.slug))})]})}var ni={},Ra={},Vd;function rf(){if(Vd)return Ra;Vd=1,Object.defineProperty(Ra,"__esModule",{value:!0}),Ra.EmailJSResponseStatus=void 0;var r=(function(){function o(i){this.status=i.status,this.text=i.responseText}return o})();return Ra.EmailJSResponseStatus=r,Ra}var Ma={},Jd;function of(){if(Jd)return Ma;Jd=1,Object.defineProperty(Ma,"__esModule",{value:!0}),Ma.UI=void 0;var r=(function(){function o(){}return o.clearAll=function(i){i.classList.remove(this.PROGRESS),i.classList.remove(this.DONE),i.classList.remove(this.ERROR)},o.progressState=function(i){this.clearAll(i),i.classList.add(this.PROGRESS)},o.successState=function(i){i.classList.remove(this.PROGRESS),i.classList.add(this.DONE)},o.errorState=function(i){i.classList.remove(this.PROGRESS),i.classList.add(this.ERROR)},o.PROGRESS="emailjs-sending",o.DONE="emailjs-success",o.ERROR="emailjs-error",o})();return Ma.UI=r,Ma}var Kd;function sf(){return Kd||(Kd=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.EmailJSResponseStatus=r.sendForm=r.send=r.init=void 0;var o=rf();Object.defineProperty(r,"EmailJSResponseStatus",{enumerable:!0,get:function(){return o.EmailJSResponseStatus}});var i=of(),l=null,c="https://api.emailjs.com";function m(T,A,j){return j===void 0&&(j={}),new Promise(function(z,Y){var J=new XMLHttpRequest;J.addEventListener("load",function(G){var _=new o.EmailJSResponseStatus(G.target);_.status===200||_.text==="OK"?z(_):Y(_)}),J.addEventListener("error",function(G){Y(new o.EmailJSResponseStatus(G.target))}),J.open("POST",T,!0);for(var D in j)J.setRequestHeader(D,j[D]);J.send(A)})}function h(T){var A=document&&document.getElementById("g-recaptcha-response");return A&&A.value&&(T["g-recaptcha-response"]=A.value),A=null,T}function v(T){return T[0]!=="#"&&T[0]!=="."?"#"+T:T}function g(T,A){l=T,c=A||"https://api.emailjs.com"}r.init=g;function b(T,A,j,z){var Y={lib_version:"2.6.4",user_id:z||l,service_id:T,template_id:A,template_params:h(j)};return m(c+"/api/v1.0/email/send",JSON.stringify(Y),{"Content-type":"application/json"})}r.send=b;function y(T,A,j,z){if(typeof j=="string"&&(j=document.querySelector(v(j))),!j||j.nodeName!=="FORM")throw"Expected the HTML form element or the style selector of form";i.UI.progressState(j);var Y=new FormData(j);return Y.append("lib_version","2.6.4"),Y.append("service_id",T),Y.append("template_id",A),Y.append("user_id",z||l),m(c+"/api/v1.0/email/send-form",Y).then(function(J){return i.UI.successState(j),J},function(J){return i.UI.errorState(j),Promise.reject(J)})}r.sendForm=y,r.default={init:g,send:b,sendForm:y}})(ni)),ni}var lf=sf();const cf=Fa(lf);function df(){const[r,o]=me.useState("idle");cn("Contact | Radhakishan Jangid","Get in touch for engineering work, collaboration, and consulting.");const i=async l=>{l.preventDefault(),o("loading");try{await cf.sendForm("service_sn6cjfe","template_ai5s6x5",l.target,"user_Di32uXdzGJ3xyE4Kjf5bJ"),o("success"),l.target.reset()}catch{o("error")}};return p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight","data-reveal":!0,children:[p.jsx("span",{className:"eyebrow",children:"/* contact */"}),p.jsx("h1",{children:"Let’s talk about product engineering, frontend systems, or independent builds."}),p.jsx("p",{className:"lede",children:"Email works best, but the form is here if you want to send project details directly from the site."})]}),p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"/* ────────────────────── */"}),p.jsxs("section",{className:"contact-grid","data-reveal":!0,children:[p.jsxs("div",{className:"surface-card","data-reveal":!0,children:[p.jsx("h2",{children:"Direct links"}),p.jsx("div",{className:"footer-links contact-links",children:Dg.map(l=>p.jsxs("a",{href:l.href,target:l.external?"_blank":void 0,rel:l.external?"noreferrer":void 0,children:["[",l.label.toLowerCase().replace(/\s+/g,"_"),"]"]},l.href))})]}),p.jsxs("form",{className:"surface-card contact-form",onSubmit:i,"data-reveal":!0,children:[p.jsx("h2",{children:"Send a message"}),p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{name:"from_name",type:"text",placeholder:"your_name",required:!0}),p.jsx("input",{name:"from_email",type:"email",placeholder:"your_email",required:!0})]}),p.jsx("textarea",{name:"from_message",rows:"7",placeholder:"tell_me_what_you_are_building",required:!0}),p.jsx("button",{type:"submit",className:"button-primary",disabled:r==="loading",children:r==="loading"?"[ sending... ]":"[ send_message ]"}),r==="success"?p.jsx("p",{className:"form-status",children:"Message sent. I’ll get back to you soon."}):null,r==="error"?p.jsx("p",{className:"form-status form-status-error",children:"Message failed to send. Email is the safer fallback."}):null]})]})]})}const pf=4200;function uf(){const r=(sn.showcase||[]).slice(0,5),[o,i]=me.useState(0),l=me.useRef(null);me.useEffect(()=>{r.length&&i(0)},[r.length]),me.useEffect(()=>{if(r.length<=1||typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const g=window.setInterval(()=>{i(b=>(b+1)%r.length)},pf);return()=>{window.clearInterval(g)}},[r.length]);const c=v=>{if(typeof window<"u"&&window.matchMedia("(hover: none)").matches)return;const g=v.currentTarget.getBoundingClientRect(),b=((v.clientX-g.left)/g.width-.5)*2,y=((v.clientY-g.top)/g.height-.5)*2;l.current&&(l.current.style.setProperty("--mx",b.toFixed(3)),l.current.style.setProperty("--my",y.toFixed(3)))},m=()=>{l.current&&(l.current.style.setProperty("--mx","0"),l.current.style.setProperty("--my","0"))},h=v=>{const g=(v-o+r.length)%r.length;return g===0?"hero-image-card is-main":g===1?"hero-image-card is-support-1":g===2?"hero-image-card is-support-2":g===3?"hero-image-card is-support-3":g===4?"hero-image-card is-support-4":"hero-image-card is-hidden"};return r.length?p.jsxs("div",{ref:l,className:"hero-image-showcase",onMouseMove:c,onMouseLeave:m,children:[p.jsxs("div",{className:`hero-showcase-stage${r.length<5?" is-compact":""}`,children:[r.map((v,g)=>p.jsx("article",{className:h(g),children:p.jsx("img",{src:v,alt:`Radhakishan portrait ${g+1}`,loading:g===0?"eager":"lazy"})},`${v}-${g}`)),p.jsx("div",{className:"hero-showcase-orb","aria-hidden":"true"})]}),p.jsx("div",{className:"hero-showcase-track","aria-hidden":"true",children:r.map((v,g)=>p.jsx("span",{className:`hero-showcase-dot${g===o?" is-active":""}`},`track-${g}`))})]}):null}function hf({phrases:r=[],typingSpeed:o=80,deletingSpeed:i=40,pauseDuration:l=1800}={}){const[c,m]=me.useState(""),[h,v]=me.useState(0),[g,b]=me.useState(!1);return me.useEffect(()=>{if(!r.length)return;if(typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){m(r[0]);return}const T=r[h]||"";let A;if(!g&&c===T)A=window.setTimeout(()=>{b(!0)},l);else if(g&&c.length===0)b(!1),v(j=>(j+1)%r.length);else{const j=c.length+(g?-1:1),z=T.slice(0,Math.max(0,j));A=window.setTimeout(()=>{m(z)},g?i:o)}return()=>{A&&window.clearTimeout(A)}},[i,g,l,h,r,c,o]),c}const mf=new Set(["radhakishan404.github.io","radhakishan404","react-native-stylish-accordion-import"]);function Lp(){const[r,o]=me.useState([]),[i,l]=me.useState(!0);return me.useEffect(()=>{let c=!0;async function m(){try{const v=await(await fetch("https://api.github.com/users/radhakishan404/repos?per_page=100&sort=updated")).json();if(!Array.isArray(v)||!c)return;const g=v.filter(b=>!b.fork&&!b.archived&&!mf.has(b.name)).filter(b=>b.description||b.homepage||b.stargazers_count>0).sort((b,y)=>{const T=new Date(b.updated_at).getTime(),A=new Date(y.updated_at).getTime();if(T!==A)return A-T;const j=b.stargazers_count*5+(b.homepage?2:0);return y.stargazers_count*5+(y.homepage?2:0)-j}).slice(0,6);o(g)}catch{}finally{c&&l(!1)}}return m(),()=>{c=!1}},[]),{repos:r,loading:i}}function gf(){const r=Oa.project.slice(0,4),o=[...Gt].sort((h,v)=>{const g=h.sortDate?new Date(h.sortDate).getTime():0;return(v.sortDate?new Date(v.sortDate).getTime():0)-g}).slice(0,3),{repos:i}=Lp(),l=[{key:"experience",value:`${Yd[0]?.value} years`},{key:"frontend",value:Yd[1]?.value},{key:"backend",value:"Node.js"}],c=hf({phrases:["Senior software engineer","Full stack builder","React + Node specialist","Product-focused developer"],typingSpeed:80,deletingSpeed:40,pauseDuration:1800}),m=["$ whoami","> Senior SWE, Mumbai","> React · Node · Mobile","> AI prototypes + product"];return cn({title:"Radhakishan Jangid",description:"Senior software engineer building product systems, frontend experiences, public software projects, and AI-focused technical content.",image:sn.hero,type:"website",structuredData:{"@context":"https://schema.org","@graph":[{"@type":"Person",name:"Radhakishan Jangid",jobTitle:"Senior Software Engineer",url:"https://radhakishan404.github.io/",image:`https://radhakishan404.github.io${sn.hero}`,sameAs:["https://github.com/radhakishan404","https://www.linkedin.com/in/radhakishanjangid","https://dev.to/radhakishanjangid404"]},{"@type":"WebSite",name:"Radhakishan Jangid",url:"https://radhakishan404.github.io/"}]}}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"home-hero","data-reveal":!0,children:[p.jsxs("div",{className:"home-hero-copy",children:[p.jsx("span",{className:"eyebrow",children:"// hello, world"}),p.jsxs("h1",{className:"hero-name",children:[p.jsx("span",{children:"RADHAKISHAN"}),p.jsx("span",{children:"JANGID"})]}),p.jsxs("p",{className:"hero-typing",children:[p.jsx("span",{children:c}),p.jsx("span",{className:"typing-cursor","aria-hidden":"true",children:"|"})]}),p.jsx("p",{className:"lede",children:"Mumbai based. Focused on React, Node.js, mobile apps, internal systems, and public-facing product builds."}),p.jsxs("div",{className:"hero-actions",children:[p.jsx(_e,{className:"button-primary",to:"/projects",children:"[ view_projects.sh ]"}),p.jsx(_e,{className:"button-secondary",to:"/articles",children:"[ read_articles.md ]"})]}),p.jsx("div",{className:"hero-stat-row",children:l.map(h=>p.jsxs("div",{className:"hero-stat",children:[p.jsx("span",{children:h.key}),p.jsx("span",{children:"→"}),p.jsx("strong",{children:h.value})]},h.key))})]}),p.jsxs("div",{className:"hero-side","data-reveal":!0,children:[p.jsx(uf,{}),p.jsxs("div",{className:"terminal-card",children:[p.jsx("div",{className:"terminal-brand",children:p.jsx("img",{src:Ti.stack,alt:"Radhakishan logo"})}),p.jsxs("div",{className:"terminal-card-head",children:[p.jsx("span",{className:"terminal-control is-red"}),p.jsx("span",{className:"terminal-control is-yellow"}),p.jsx("span",{className:"terminal-control is-green"})]}),m.map((h,v)=>p.jsxs("p",{className:`terminal-line${v===m.length-1?" is-last":""}`,style:{animationDelay:`${v*260+220}ms`},children:[h,v===m.length-1?p.jsx("span",{className:"terminal-line-cursor",children:"|"}):null]},h))]})]})]}),p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"/* ────────────────────── */"}),p.jsxs("section",{className:"section-stack","data-reveal":!0,children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"/* selected_work */"}),p.jsx("h2",{children:"Featured projects"})]}),p.jsx(_e,{className:"inline-link",to:"/projects",children:"[ all_projects ]"})]}),p.jsx("div",{className:"project-grid project-grid-home",children:r.map(h=>p.jsxs("article",{className:"surface-card project-card","data-reveal":!0,children:[p.jsxs("div",{className:"project-card-path",children:["~/projects/",on(h.title)]}),p.jsx("div",{className:"project-visual",children:p.jsx("img",{src:h.thumbnail,alt:`${h.title} preview`})}),p.jsxs("div",{className:"project-card-top",children:[p.jsx("h3",{children:h.title}),p.jsx("span",{className:"meta-pill",children:h.date||"Case study"})]}),p.jsx("p",{children:h.description}),p.jsx("div",{className:"tag-row",children:h.technology.split(",").slice(0,4).map(v=>p.jsxs("span",{className:"tag-chip tag-chip-static",children:["<",v.trim().toLowerCase(),">"]},v))}),p.jsxs("div",{className:"project-card-links",children:[p.jsx(_e,{className:"inline-link",to:`/projects/${on(h.title)}`,children:"[ case_study ]"}),h.onlineLink?p.jsx("a",{className:"inline-link",href:h.onlineLink,target:"_blank",rel:"noreferrer",children:"[ live_link ]"}):null]})]},h.id))})]}),p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"// ==================== //"}),i.length?p.jsxs("section",{className:"section-stack","data-reveal":!0,children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"/* github_recent */"}),p.jsx("h2",{children:"Recent GitHub projects"})]}),p.jsx("a",{className:"inline-link",href:"https://github.com/radhakishan404?tab=repositories",target:"_blank",rel:"noreferrer",children:"[ github_profile ]"})]}),p.jsx("div",{className:"public-grid",children:i.slice(0,3).map(h=>p.jsxs("article",{className:"surface-card public-card","data-reveal":!0,children:[p.jsxs("div",{className:"public-card-top terminal-window-top",children:[p.jsxs("span",{className:"terminal-window-title",children:[p.jsx("span",{className:"terminal-dot"}),h.name]}),p.jsxs("span",{className:"public-star",children:["★ ",h.stargazers_count]})]}),p.jsx("p",{children:h.description||"Public GitHub repository."}),p.jsx("div",{className:"tag-row",children:p.jsx("span",{className:"meta-pill",children:"[PUBLIC]"})}),p.jsxs("div",{className:"project-card-links",children:[p.jsx("a",{className:"inline-link",href:h.html_url,target:"_blank",rel:"noreferrer",children:"$ git clone"}),h.homepage?p.jsx("a",{className:"inline-link",href:h.homepage,target:"_blank",rel:"noreferrer",children:"[ live_demo ]"}):null]})]},h.id))})]}):null,p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"/* ────────────────────── */"}),p.jsxs("section",{className:"section-stack","data-reveal":!0,children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"/* writing */"}),p.jsx("h2",{children:"Recent articles"})]}),p.jsx(_e,{className:"inline-link",to:"/articles",children:"[ all_articles ]"})]}),p.jsxs("div",{className:"surface-card article-directory","data-reveal":!0,children:[p.jsx("p",{className:"directory-head",children:"drwxr-xr-x  articles/"}),p.jsx("div",{className:"directory-list",children:o.map((h,v)=>{const g=h.kind==="html"?"html":"md",b=v===o.length-1?"└──":"├──";return p.jsxs(_e,{className:"directory-row",to:`/articles/${h.slug}`,children:[p.jsx("span",{className:"directory-branch",children:b}),p.jsxs("span",{className:"directory-kind",children:["[",h.kind==="html"?"HTML":"MD","]"]}),p.jsxs("span",{className:"directory-file",children:[h.slug,".",g]}),p.jsx("span",{className:"directory-time",children:h.readingTime})]},h.slug)})})]})]})]})}function ff({match:r}){const o=Oa.project.find(i=>on(i.title)===r.params.topic);return cn(o?`${o.title} | Projects | Radhakishan Jangid`:"Project | Radhakishan Jangid",o?.description||"Project detail"),o?p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight","data-reveal":!0,children:[p.jsx(_e,{className:"back-link",to:"/projects",children:"[ back_to_projects ]"}),p.jsx("span",{className:"eyebrow",children:"/* project */"}),p.jsx("h1",{children:o.title}),p.jsx("p",{className:"lede",children:o.description}),p.jsx("div",{className:"tag-row",children:o.technology.split(",").map(i=>p.jsx("span",{className:"tag-chip tag-chip-static",children:i.trim()},i))})]}),p.jsxs("section",{className:"project-detail-layout","data-reveal":!0,children:[p.jsx("div",{className:"project-gallery",children:(o.sliderImages||[]).map((i,l)=>p.jsx("figure",{className:"project-shot","data-reveal":!0,children:p.jsx("img",{src:i.image,alt:`${o.title} screenshot ${l+1}`})},`${o.id}-${l}`))}),p.jsxs("aside",{className:"surface-card project-sidebar","data-reveal":!0,children:[o.onlineLink?p.jsx("a",{className:"button-primary button-block",href:o.onlineLink,target:"_blank",rel:"noreferrer",children:"[ visit_project ]"}):null,p.jsxs("div",{className:"sidebar-block",children:[p.jsx("span",{className:"sidebar-label",children:"Date"}),p.jsx("strong",{children:o.date||"Available on request"})]}),p.jsxs("div",{className:"sidebar-block",children:[p.jsx("span",{className:"sidebar-label",children:"Tags"}),p.jsx("p",{children:o.tag})]})]})]}),p.jsx("section",{className:"section-stack project-detail-content","data-reveal":!0,children:(o.content||[]).map(i=>p.jsxs("article",{className:"surface-card","data-reveal":!0,children:[p.jsx("h2",{children:i.contentTitle}),i.contentDescription?p.jsx("p",{dangerouslySetInnerHTML:{__html:i.contentDescription}}):null,i.contentList?.length?p.jsx("ul",{className:"clean-list",children:i.contentList.map(l=>p.jsx("li",{children:l.isLink?p.jsx("a",{href:l.link,target:"_blank",rel:"noreferrer",children:l.text}):p.jsx("span",{dangerouslySetInnerHTML:{__html:l.text}})},`${i.contentTitle}-${l.text}`))}):null]},i.contentTitle))})]}):p.jsx(Da,{to:"/projects"})}function vf(){const{repos:r,loading:o}=Lp();return cn({title:"Projects | Radhakishan Jangid",description:"Selected projects across product UI, web applications, shipped client work, and public software tools.",image:sn.meta,type:"website"}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight","data-reveal":!0,children:[p.jsx("span",{className:"eyebrow",children:"/* projects */"}),p.jsx("h1",{children:"Projects across product engineering, open source, and shipped client work."}),p.jsx("p",{className:"lede",children:"A cleaner index with visuals, direct links, and detail pages where deeper context already exists."})]}),p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"/* ────────────────────── */"}),p.jsxs("section",{className:"section-stack","data-reveal":!0,children:[p.jsx("div",{className:"section-heading",children:p.jsx("h2",{children:"Case studies"})}),p.jsx("div",{className:"project-grid",children:Oa.project.map(i=>p.jsxs("article",{className:"surface-card project-card","data-reveal":!0,children:[p.jsxs("div",{className:"project-card-path",children:["~/projects/",on(i.title)]}),p.jsx("div",{className:"project-visual",children:p.jsx("img",{src:i.thumbnail,alt:`${i.title} preview`})}),p.jsxs("div",{className:"project-card-top",children:[p.jsx("h3",{children:i.title}),p.jsx("span",{className:"meta-pill",children:i.gitAvailable?"GitHub":"Project"})]}),p.jsx("p",{children:i.description}),p.jsx("div",{className:"tag-row",children:i.tag.split(",").slice(0,4).map(l=>p.jsxs("span",{className:"tag-chip tag-chip-static",children:["<",l.trim().toLowerCase(),">"]},l))}),p.jsxs("div",{className:"project-card-links",children:[p.jsx(_e,{className:"inline-link",to:`/projects/${on(i.title)}`,children:"[ read_detail ]"}),i.onlineLink?p.jsx("a",{className:"inline-link",href:i.onlineLink,target:"_blank",rel:"noreferrer",children:"[ open_link ]"}):null]})]},i.id))})]}),p.jsx("div",{className:"ascii-divider","aria-hidden":"true",children:"// ==================== //"}),p.jsxs("section",{className:"section-stack","data-reveal":!0,children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"/* github */"}),p.jsx("h2",{children:"Public repositories"})]}),p.jsx("a",{className:"inline-link",href:"https://github.com/radhakishan404?tab=repositories",target:"_blank",rel:"noreferrer",children:"[ view_all ]"})]}),p.jsxs("div",{className:"public-grid",children:[r.map(i=>p.jsxs("article",{className:"surface-card public-card","data-reveal":!0,children:[p.jsxs("div",{className:"public-card-top terminal-window-top",children:[p.jsxs("span",{className:"terminal-window-title",children:[p.jsx("span",{className:"terminal-dot"}),i.name]}),p.jsxs("span",{className:"public-star",children:["★ ",i.stargazers_count]})]}),p.jsx("p",{children:i.description||"Public GitHub repository."}),p.jsx("div",{className:"public-meta",children:p.jsxs("span",{children:["Updated ",new Date(i.updated_at).toLocaleDateString("en-US",{month:"short",year:"numeric"})]})}),p.jsx("div",{className:"tag-row",children:p.jsx("span",{className:"meta-pill",children:"[PUBLIC]"})}),p.jsxs("div",{className:"project-card-links",children:[p.jsx("a",{className:"inline-link",href:i.html_url,target:"_blank",rel:"noreferrer",children:"$ git clone"}),i.homepage?p.jsx("a",{className:"inline-link",href:i.homepage,target:"_blank",rel:"noreferrer",children:"[ live_demo ]"}):null]})]},i.id)),!o&&!r.length?p.jsxs("article",{className:"surface-card public-card","data-reveal":!0,children:[p.jsx("h3",{children:"Public repositories"}),p.jsx("p",{children:"GitHub data is unavailable right now. Refreshing later should bring the latest public projects back in."})]}):null]})]})]})}const Qd="G-N8PLTL59Z1",Xd="rk-boot-screen-complete";function yf(){if(typeof window>"u"||window.gtag)return;window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)};const r=document.createElement("script");r.async=!0,r.src=`https://www.googletagmanager.com/gtag/js?id=${Qd}`,document.head.appendChild(r),window.gtag("js",new Date),window.gtag("config",Qd,{send_page_view:!1})}function Zd(r){typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.href,page_path:r.pathname+r.search,page_title:document.title})}function bf(){const r=fm();return me.useEffect(()=>(yf(),Zd(r.location),r.listen(i=>{Zd(i)})),[r]),null}function wf(){return p.jsx(Wg,{children:p.jsxs(gm,{children:[p.jsx(mt,{exact:!0,path:"/",component:gf}),p.jsx(mt,{exact:!0,path:"/about",component:Jg}),p.jsx(mt,{exact:!0,path:"/projects",component:vf}),p.jsx(mt,{exact:!0,path:"/projects/:topic",component:ff}),p.jsx(mt,{exact:!0,path:"/portfolio",render:()=>p.jsx(Da,{to:"/projects"})}),p.jsx(mt,{exact:!0,path:"/portfolio/:topic",render:({match:r})=>p.jsx(Da,{to:`/projects/${r.params.topic}`})}),p.jsx(mt,{exact:!0,path:"/articles",component:af}),p.jsx(mt,{exact:!0,path:"/articles/:slug",component:tf}),p.jsx(mt,{exact:!0,path:"/contact",component:df}),p.jsx(mt,{render:()=>p.jsx(Da,{to:"/"})})]})})}function xf(){const[r,o]=me.useState(()=>{if(typeof window>"u")return!0;const l=window.location.pathname.startsWith("/articles"),c=window.sessionStorage.getItem(Xd)==="true",m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return l||c||m}),i=()=>{typeof window<"u"&&window.sessionStorage.setItem(Xd,"true"),o(!0)};return p.jsxs(vm,{children:[r?null:p.jsx(Cm,{onComplete:i}),p.jsxs("div",{className:`app-frame${r?" is-ready":""}`,children:[p.jsx(bf,{}),p.jsx(wf,{})]})]})}Rh.render(p.jsx(ve.StrictMode,{children:p.jsx(xf,{})}),document.getElementById("root"));
