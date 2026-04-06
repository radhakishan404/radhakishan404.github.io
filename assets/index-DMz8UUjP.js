(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=l(c);fetch(c.href,h)}})();function Dr(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Oo={exports:{}},Dn={};var zo,ru;function ss(){if(ru)return zo;ru=1;var i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function s(h){if(h==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(h)}function c(){try{if(!Object.assign)return!1;var h=new String("abc");if(h[5]="de",Object.getOwnPropertyNames(h)[0]==="5")return!1;for(var f={},w=0;w<10;w++)f["_"+String.fromCharCode(w)]=w;var g=Object.getOwnPropertyNames(f).map(function(v){return f[v]});if(g.join("")!=="0123456789")return!1;var x={};return"abcdefghijklmnopqrst".split("").forEach(function(v){x[v]=v}),Object.keys(Object.assign({},x)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return zo=c()?Object.assign:function(h,f){for(var w,g=s(h),x,v=1;v<arguments.length;v++){w=Object(arguments[v]);for(var P in w)a.call(w,P)&&(g[P]=w[P]);if(i){x=i(w);for(var I=0;I<x.length;I++)l.call(w,x[I])&&(g[x[I]]=w[x[I]])}}return g},zo}var Fo={exports:{}},ye={};var iu;function dh(){if(iu)return ye;iu=1;var i=ss(),a=60103,l=60106;ye.Fragment=60107,ye.StrictMode=60108,ye.Profiler=60114;var s=60109,c=60110,h=60112;ye.Suspense=60113;var f=60115,w=60116;if(typeof Symbol=="function"&&Symbol.for){var g=Symbol.for;a=g("react.element"),l=g("react.portal"),ye.Fragment=g("react.fragment"),ye.StrictMode=g("react.strict_mode"),ye.Profiler=g("react.profiler"),s=g("react.provider"),c=g("react.context"),h=g("react.forward_ref"),ye.Suspense=g("react.suspense"),f=g("react.memo"),w=g("react.lazy")}var x=typeof Symbol=="function"&&Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}function P(T){for(var D="https://reactjs.org/docs/error-decoder.html?invariant="+T,F=1;F<arguments.length;F++)D+="&args[]="+encodeURIComponent(arguments[F]);return"Minified React error #"+T+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function z(T,D,F){this.props=T,this.context=D,this.refs=O,this.updater=F||I}z.prototype.isReactComponent={},z.prototype.setState=function(T,D){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error(P(85));this.updater.enqueueSetState(this,T,D,"setState")},z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function q(){}q.prototype=z.prototype;function X(T,D,F){this.props=T,this.context=D,this.refs=O,this.updater=F||I}var M=X.prototype=new q;M.constructor=X,i(M,z.prototype),M.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,ne={key:!0,ref:!0,__self:!0,__source:!0};function R(T,D,F){var B,E={},j=null,N=null;if(D!=null)for(B in D.ref!==void 0&&(N=D.ref),D.key!==void 0&&(j=""+D.key),D)H.call(D,B)&&!ne.hasOwnProperty(B)&&(E[B]=D[B]);var J=arguments.length-2;if(J===1)E.children=F;else if(1<J){for(var Z=Array(J),ve=0;ve<J;ve++)Z[ve]=arguments[ve+2];E.children=Z}if(T&&T.defaultProps)for(B in J=T.defaultProps,J)E[B]===void 0&&(E[B]=J[B]);return{$$typeof:a,type:T,key:j,ref:N,props:E,_owner:G.current}}function U(T,D){return{$$typeof:a,type:T.type,key:D,ref:T.ref,props:T.props,_owner:T._owner}}function V(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function W(T){var D={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(F){return D[F]})}var ce=/\/+/g;function te(T,D){return typeof T=="object"&&T!==null&&T.key!=null?W(""+T.key):D.toString(36)}function ue(T,D,F,B,E){var j=typeof T;(j==="undefined"||j==="boolean")&&(T=null);var N=!1;if(T===null)N=!0;else switch(j){case"string":case"number":N=!0;break;case"object":switch(T.$$typeof){case a:case l:N=!0}}if(N)return N=T,E=E(N),T=B===""?"."+te(N,0):B,Array.isArray(E)?(F="",T!=null&&(F=T.replace(ce,"$&/")+"/"),ue(E,D,F,"",function(ve){return ve})):E!=null&&(V(E)&&(E=U(E,F+(!E.key||N&&N.key===E.key?"":(""+E.key).replace(ce,"$&/")+"/")+T)),D.push(E)),1;if(N=0,B=B===""?".":B+":",Array.isArray(T))for(var J=0;J<T.length;J++){j=T[J];var Z=B+te(j,J);N+=ue(j,D,F,Z,E)}else if(Z=v(T),typeof Z=="function")for(T=Z.call(T),J=0;!(j=T.next()).done;)j=j.value,Z=B+te(j,J++),N+=ue(j,D,F,Z,E);else if(j==="object")throw D=""+T,Error(P(31,D==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":D));return N}function ee(T,D,F){if(T==null)return T;var B=[],E=0;return ue(T,B,"","",function(j){return D.call(F,j,E++)}),B}function ie(T){if(T._status===-1){var D=T._result;D=D(),T._status=0,T._result=D,D.then(function(F){T._status===0&&(F=F.default,T._status=1,T._result=F)},function(F){T._status===0&&(T._status=2,T._result=F)})}if(T._status===1)return T._result;throw T._result}var fe={current:null};function se(){var T=fe.current;if(T===null)throw Error(P(321));return T}var Ie={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:i};return ye.Children={map:ee,forEach:function(T,D,F){ee(T,function(){D.apply(this,arguments)},F)},count:function(T){var D=0;return ee(T,function(){D++}),D},toArray:function(T){return ee(T,function(D){return D})||[]},only:function(T){if(!V(T))throw Error(P(143));return T}},ye.Component=z,ye.PureComponent=X,ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ie,ye.cloneElement=function(T,D,F){if(T==null)throw Error(P(267,T));var B=i({},T.props),E=T.key,j=T.ref,N=T._owner;if(D!=null){if(D.ref!==void 0&&(j=D.ref,N=G.current),D.key!==void 0&&(E=""+D.key),T.type&&T.type.defaultProps)var J=T.type.defaultProps;for(Z in D)H.call(D,Z)&&!ne.hasOwnProperty(Z)&&(B[Z]=D[Z]===void 0&&J!==void 0?J[Z]:D[Z])}var Z=arguments.length-2;if(Z===1)B.children=F;else if(1<Z){J=Array(Z);for(var ve=0;ve<Z;ve++)J[ve]=arguments[ve+2];B.children=J}return{$$typeof:a,type:T.type,key:E,ref:j,props:B,_owner:N}},ye.createContext=function(T,D){return D===void 0&&(D=null),T={$$typeof:c,_calculateChangedBits:D,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider={$$typeof:s,_context:T},T.Consumer=T},ye.createElement=R,ye.createFactory=function(T){var D=R.bind(null,T);return D.type=T,D},ye.createRef=function(){return{current:null}},ye.forwardRef=function(T){return{$$typeof:h,render:T}},ye.isValidElement=V,ye.lazy=function(T){return{$$typeof:w,_payload:{_status:-1,_result:T},_init:ie}},ye.memo=function(T,D){return{$$typeof:f,type:T,compare:D===void 0?null:D}},ye.useCallback=function(T,D){return se().useCallback(T,D)},ye.useContext=function(T,D){return se().useContext(T,D)},ye.useDebugValue=function(){},ye.useEffect=function(T,D){return se().useEffect(T,D)},ye.useImperativeHandle=function(T,D,F){return se().useImperativeHandle(T,D,F)},ye.useLayoutEffect=function(T,D){return se().useLayoutEffect(T,D)},ye.useMemo=function(T,D){return se().useMemo(T,D)},ye.useReducer=function(T,D,F){return se().useReducer(T,D,F)},ye.useRef=function(T){return se().useRef(T)},ye.useState=function(T){return se().useState(T)},ye.version="17.0.2",ye}var au;function ls(){return au||(au=1,Fo.exports=dh()),Fo.exports}var ou;function ph(){if(ou)return Dn;ou=1,ss();var i=ls(),a=60103;if(Dn.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var l=Symbol.for;a=l("react.element"),Dn.Fragment=l("react.fragment")}var s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,h={key:!0,ref:!0,__self:!0,__source:!0};function f(w,g,x){var v,P={},I=null,O=null;x!==void 0&&(I=""+x),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(O=g.ref);for(v in g)c.call(g,v)&&!h.hasOwnProperty(v)&&(P[v]=g[v]);if(w&&w.defaultProps)for(v in g=w.defaultProps,g)P[v]===void 0&&(P[v]=g[v]);return{$$typeof:a,type:w,key:I,ref:O,props:P,_owner:s.current}}return Dn.jsx=f,Dn.jsxs=f,Dn}var su;function hh(){return su||(su=1,Oo.exports=ph()),Oo.exports}var p=hh(),Ze=ls();const ge=Dr(Ze);var Ho={exports:{}},Xe={},Bo={exports:{}},Go={};var lu;function fh(){return lu||(lu=1,(function(i){var a,l,s,c;if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var f=Date,w=f.now();i.unstable_now=function(){return f.now()-w}}if(typeof window>"u"||typeof MessageChannel!="function"){var g=null,x=null,v=function(){if(g!==null)try{var E=i.unstable_now();g(!0,E),g=null}catch(j){throw setTimeout(v,0),j}};a=function(E){g!==null?setTimeout(a,0,E):(g=E,setTimeout(v,0))},l=function(E,j){x=setTimeout(E,j)},s=function(){clearTimeout(x)},i.unstable_shouldYield=function(){return!1},c=i.unstable_forceFrameRate=function(){}}else{var P=window.setTimeout,I=window.clearTimeout;if(typeof console<"u"){var O=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof O!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var z=!1,q=null,X=-1,M=5,G=0;i.unstable_shouldYield=function(){return i.unstable_now()>=G},c=function(){},i.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<E?Math.floor(1e3/E):5};var H=new MessageChannel,ne=H.port2;H.port1.onmessage=function(){if(q!==null){var E=i.unstable_now();G=E+M;try{q(!0,E)?ne.postMessage(null):(z=!1,q=null)}catch(j){throw ne.postMessage(null),j}}else z=!1},a=function(E){q=E,z||(z=!0,ne.postMessage(null))},l=function(E,j){X=P(function(){E(i.unstable_now())},j)},s=function(){I(X),X=-1}}function R(E,j){var N=E.length;E.push(j);e:for(;;){var J=N-1>>>1,Z=E[J];if(Z!==void 0&&0<W(Z,j))E[J]=j,E[N]=Z,N=J;else break e}}function U(E){return E=E[0],E===void 0?null:E}function V(E){var j=E[0];if(j!==void 0){var N=E.pop();if(N!==j){E[0]=N;e:for(var J=0,Z=E.length;J<Z;){var ve=2*(J+1)-1,be=E[ve],Re=ve+1,Ue=E[Re];if(be!==void 0&&0>W(be,N))Ue!==void 0&&0>W(Ue,be)?(E[J]=Ue,E[Re]=N,J=Re):(E[J]=be,E[ve]=N,J=ve);else if(Ue!==void 0&&0>W(Ue,N))E[J]=Ue,E[Re]=N,J=Re;else break e}}return j}return null}function W(E,j){var N=E.sortIndex-j.sortIndex;return N!==0?N:E.id-j.id}var ce=[],te=[],ue=1,ee=null,ie=3,fe=!1,se=!1,Ie=!1;function T(E){for(var j=U(te);j!==null;){if(j.callback===null)V(te);else if(j.startTime<=E)V(te),j.sortIndex=j.expirationTime,R(ce,j);else break;j=U(te)}}function D(E){if(Ie=!1,T(E),!se)if(U(ce)!==null)se=!0,a(F);else{var j=U(te);j!==null&&l(D,j.startTime-E)}}function F(E,j){se=!1,Ie&&(Ie=!1,s()),fe=!0;var N=ie;try{for(T(j),ee=U(ce);ee!==null&&(!(ee.expirationTime>j)||E&&!i.unstable_shouldYield());){var J=ee.callback;if(typeof J=="function"){ee.callback=null,ie=ee.priorityLevel;var Z=J(ee.expirationTime<=j);j=i.unstable_now(),typeof Z=="function"?ee.callback=Z:ee===U(ce)&&V(ce),T(j)}else V(ce);ee=U(ce)}if(ee!==null)var ve=!0;else{var be=U(te);be!==null&&l(D,be.startTime-j),ve=!1}return ve}finally{ee=null,ie=N,fe=!1}}var B=c;i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(E){E.callback=null},i.unstable_continueExecution=function(){se||fe||(se=!0,a(F))},i.unstable_getCurrentPriorityLevel=function(){return ie},i.unstable_getFirstCallbackNode=function(){return U(ce)},i.unstable_next=function(E){switch(ie){case 1:case 2:case 3:var j=3;break;default:j=ie}var N=ie;ie=j;try{return E()}finally{ie=N}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=B,i.unstable_runWithPriority=function(E,j){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var N=ie;ie=E;try{return j()}finally{ie=N}},i.unstable_scheduleCallback=function(E,j,N){var J=i.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?J+N:J):N=J,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=N+Z,E={id:ue++,callback:j,priorityLevel:E,startTime:N,expirationTime:Z,sortIndex:-1},N>J?(E.sortIndex=N,R(te,E),U(ce)===null&&E===U(te)&&(Ie?s():Ie=!0,l(D,N-J))):(E.sortIndex=Z,R(ce,E),se||fe||(se=!0,a(F))),E},i.unstable_wrapCallback=function(E){var j=ie;return function(){var N=ie;ie=j;try{return E.apply(this,arguments)}finally{ie=N}}}})(Go)),Go}var cu;function mh(){return cu||(cu=1,Bo.exports=fh()),Bo.exports}var uu;function gh(){if(uu)return Xe;uu=1;var i=ls(),a=ss(),l=mh();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!i)throw Error(s(227));var c=new Set,h={};function f(e,t){w(e,t),w(e+"Capture",t)}function w(e,t){for(h[e]=t,e=0;e<t.length;e++)c.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v=Object.prototype.hasOwnProperty,P={},I={};function O(e){return v.call(I,e)?!0:v.call(P,e)?!1:x.test(e)?I[e]=!0:(P[e]=!0,!1)}function z(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,t,n,r){if(t===null||typeof t>"u"||z(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,n,r,o,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(G,H);M[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(G,H);M[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(G,H);M[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,r){var o=M.hasOwnProperty(t)?M[t]:null,u=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");u||(q(t,n,o,r)&&(n=null),r||o===null?O(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=60103,V=60106,W=60107,ce=60108,te=60114,ue=60109,ee=60110,ie=60112,fe=60113,se=60120,Ie=60115,T=60116,D=60121,F=60128,B=60129,E=60130,j=60131;if(typeof Symbol=="function"&&Symbol.for){var N=Symbol.for;U=N("react.element"),V=N("react.portal"),W=N("react.fragment"),ce=N("react.strict_mode"),te=N("react.profiler"),ue=N("react.provider"),ee=N("react.context"),ie=N("react.forward_ref"),fe=N("react.suspense"),se=N("react.suspense_list"),Ie=N("react.memo"),T=N("react.lazy"),D=N("react.block"),N("react.scope"),F=N("react.opaque.id"),B=N("react.debug_trace_mode"),E=N("react.offscreen"),j=N("react.legacy_hidden")}var J=typeof Symbol=="function"&&Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var ve;function be(e){if(ve===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||""}return`
`+ve+e}var Re=!1;function Ue(e,t){if(!e||Re)return"";Re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),u=r.stack.split(`
`),d=o.length-1,m=u.length-1;1<=d&&0<=m&&o[d]!==u[m];)m--;for(;1<=d&&0<=m;d--,m--)if(o[d]!==u[m]){if(d!==1||m!==1)do if(d--,m--,0>m||o[d]!==u[m])return`
`+o[d].replace(" at new "," at ");while(1<=d&&0<=m);break}}}finally{Re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?be(e):""}function wd(e){switch(e.tag){case 5:return be(e.type);case 16:return be("Lazy");case 13:return be("Suspense");case 19:return be("SuspenseList");case 0:case 2:case 15:return e=Ue(e.type,!1),e;case 11:return e=Ue(e.type.render,!1),e;case 22:return e=Ue(e.type._render,!1),e;case 1:return e=Ue(e.type,!0),e;default:return""}}function ln(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case V:return"Portal";case te:return"Profiler";case ce:return"StrictMode";case fe:return"Suspense";case se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case ie:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Ie:return ln(e.type);case D:return ln(e._render);case T:t=e._payload,e=e._init;try{return ln(e(t))}catch{}}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Ss(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xd(e){var t=Ss(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(d){r=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=xd(e))}function Ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ss(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,t){var n=t.checked;return a({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Es(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cs(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Qi(e,t){Cs(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xi(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xi(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function kd(e){var t="";return i.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Zi(e,t){return e=a({children:void 0},t),(t=kd(t.children))&&(e.children=t),e}function cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return a({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Is(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function As(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function js(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var ea={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function Rs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,Ls=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!==ea.svg||"innerHTML"in e)e.innerHTML=t;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Ns(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function Ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ns(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sd=a({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,t){if(t){if(Sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aa=null,un=null,dn=null;function Ds(e){if(e=ir(e)){if(typeof aa!="function")throw Error(s(280));var t=e.stateNode;t&&(t=ii(t),aa(e.stateNode,e.type,t))}}function _s(e){un?dn?dn.push(e):dn=[e]:un=e}function Os(){if(un){var e=un,t=dn;if(dn=un=null,Ds(e),t)for(e=0;e<t.length;e++)Ds(t[e])}}function oa(e,t){return e(t)}function zs(e,t,n,r,o){return e(t,n,r,o)}function sa(){}var Fs=oa,Wt=!1,la=!1;function ca(){(un!==null||dn!==null)&&(sa(),Os())}function Td(e,t,n){if(la)return e(t,n);la=!0;try{return Fs(e,t,n)}finally{la=!1,ca()}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ua=!1;if(g)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{ua=!1}function Ed(e,t,n,r,o,u,d,m,y){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch($){this.onError($)}}var Gn=!1,Br=null,Gr=!1,da=null,Cd={onError:function(e){Gn=!0,Br=e}};function Pd(e,t,n,r,o,u,d,m,y){Gn=!1,Br=null,Ed.apply(Cd,arguments)}function Id(e,t,n,r,o,u,d,m,y){if(Pd.apply(this,arguments),Gn){if(Gn){var C=Br;Gn=!1,Br=null}else throw Error(s(198));Gr||(Gr=!0,da=C)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bs(e){if(qt(e)!==e)throw Error(s(188))}function Ad(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return Bs(o),e;if(u===r)return Bs(o),t;u=u.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=u;else{for(var d=!1,m=o.child;m;){if(m===n){d=!0,n=o,r=u;break}if(m===r){d=!0,r=o,n=u;break}m=m.sibling}if(!d){for(m=u.child;m;){if(m===n){d=!0,n=u,r=o;break}if(m===r){d=!0,r=u,n=o;break}m=m.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Gs(e){if(e=Ad(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Us(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var $s,pa,Ws,qs,ha=!1,lt=[],St=null,Tt=null,Et=null,Un=new Map,$n=new Map,Wn=[],Vs="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fa(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:o,targetContainers:[r]}}function Ys(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function qn(e,t,n,r,o,u){return e===null||e.nativeEvent!==u?(e=fa(t,n,r,o,u),t!==null&&(t=ir(t),t!==null&&pa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jd(e,t,n,r,o){switch(t){case"focusin":return St=qn(St,e,t,n,r,o),!0;case"dragenter":return Tt=qn(Tt,e,t,n,r,o),!0;case"mouseover":return Et=qn(Et,e,t,n,r,o),!0;case"pointerover":var u=o.pointerId;return Un.set(u,qn(Un.get(u)||null,e,t,n,r,o)),!0;case"gotpointercapture":return u=o.pointerId,$n.set(u,qn($n.get(u)||null,e,t,n,r,o)),!0}return!1}function Rd(e){var t=Vt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Hs(n),t!==null){e.blockedOn=t,qs(e.lanePriority,function(){l.unstable_runWithPriority(e.priority,function(){Ws(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=ir(n),t!==null&&pa(t),e.blockedOn=n,!1;t.shift()}return!0}function Js(e,t,n){Ur(e)&&n.delete(t)}function Ld(){for(ha=!1;0<lt.length;){var e=lt[0];if(e.blockedOn!==null){e=ir(e.blockedOn),e!==null&&$s(e);break}for(var t=e.targetContainers;0<t.length;){var n=xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&lt.shift()}St!==null&&Ur(St)&&(St=null),Tt!==null&&Ur(Tt)&&(Tt=null),Et!==null&&Ur(Et)&&(Et=null),Un.forEach(Js),$n.forEach(Js)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,ha||(ha=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ld)))}function Qs(e){function t(o){return Vn(o,e)}if(0<lt.length){Vn(lt[0],e);for(var n=1;n<lt.length;n++){var r=lt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&Vn(St,e),Tt!==null&&Vn(Tt,e),Et!==null&&Vn(Et,e),Un.forEach(t),$n.forEach(t),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)Rd(n),n.blockedOn===null&&Wn.shift()}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},ma={},Xs={};g&&(Xs=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function Wr(e){if(ma[e])return ma[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xs)return ma[e]=t[n];return e}var Zs=Wr("animationend"),Ks=Wr("animationiteration"),el=Wr("animationstart"),tl=Wr("transitionend"),nl=new Map,ga=new Map,Nd=["abort","abort",Zs,"animationEnd",Ks,"animationIteration",el,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",tl,"transitionEnd","waiting","waiting"];function va(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];o="on"+(o[0].toUpperCase()+o.slice(1)),ga.set(r,t),nl.set(r,o),f(o,[r])}}var Md=l.unstable_now;Md();var Se=8;function hn(e){if((1&e)!==0)return Se=15,1;if((2&e)!==0)return Se=14,2;if((4&e)!==0)return Se=13,4;var t=24&e;return t!==0?(Se=12,t):(e&32)!==0?(Se=11,32):(t=192&e,t!==0?(Se=10,t):(e&256)!==0?(Se=9,256):(t=3584&e,t!==0?(Se=8,t):(e&4096)!==0?(Se=7,4096):(t=4186112&e,t!==0?(Se=6,t):(t=62914560&e,t!==0?(Se=5,t):e&67108864?(Se=4,67108864):(e&134217728)!==0?(Se=3,134217728):(t=805306368&e,t!==0?(Se=2,t):(1073741824&e)!==0?(Se=1,1073741824):(Se=8,e))))))}function Dd(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function _d(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(s(358,e))}}function Yn(e,t){var n=e.pendingLanes;if(n===0)return Se=0;var r=0,o=0,u=e.expiredLanes,d=e.suspendedLanes,m=e.pingedLanes;if(u!==0)r=u,o=Se=15;else if(u=n&134217727,u!==0){var y=u&~d;y!==0?(r=hn(y),o=Se):(m&=u,m!==0&&(r=hn(m),o=Se))}else u=n&~d,u!==0?(r=hn(u),o=Se):m!==0&&(r=hn(m),o=Se);if(r===0)return 0;if(r=31-Ct(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&d)===0){if(hn(t),o<=Se)return t;Se=o}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),o=1<<n,r|=e[n],t&=~o;return r}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qr(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=fn(24&~t),e===0?qr(10,t):e;case 10:return e=fn(192&~t),e===0?qr(8,t):e;case 8:return e=fn(3584&~t),e===0&&(e=fn(4186112&~t),e===0&&(e=512)),e;case 2:return t=fn(805306368&~t),t===0&&(t=268435456),t}throw Error(s(358,e))}function fn(e){return e&-e}function ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-Ct(t),e[t]=n}var Ct=Math.clz32?Math.clz32:Fd,Od=Math.log,zd=Math.LN2;function Fd(e){return e===0?32:31-(Od(e)/zd|0)|0}var Hd=l.unstable_UserBlockingPriority,Bd=l.unstable_runWithPriority,Yr=!0;function Gd(e,t,n,r){Wt||sa();var o=wa,u=Wt;Wt=!0;try{zs(o,e,t,n,r)}finally{(Wt=u)||ca()}}function Ud(e,t,n,r){Bd(Hd,wa.bind(null,e,t,n,r))}function wa(e,t,n,r){if(Yr){var o;if((o=(t&4)===0)&&0<lt.length&&-1<Vs.indexOf(e))e=fa(null,e,t,n,r),lt.push(e);else{var u=xa(e,t,n,r);if(u===null)o&&Ys(e,r);else{if(o){if(-1<Vs.indexOf(e)){e=fa(u,e,t,n,r),lt.push(e);return}if(jd(u,e,t,n,r))return;Ys(e,r)}Ll(e,t,r,null,n)}}}}function xa(e,t,n,r){var o=ia(r);if(o=Vt(o),o!==null){var u=qt(o);if(u===null)o=null;else{var d=u.tag;if(d===13){if(o=Hs(u),o!==null)return o;o=null}else if(d===3){if(u.stateNode.hydrate)return u.tag===3?u.stateNode.containerInfo:null;o=null}else u!==o&&(o=null)}}return Ll(e,t,r,o,n),null}var Pt=null,ka=null,Jr=null;function il(){if(Jr)return Jr;var e,t=ka,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,u=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===o[u-r];r++);return Jr=o.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function al(){return!1}function Je(e){function t(n,r,o,u,d){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Xr:al,this.isPropagationStopped=al,this}return a(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Je(mn),Jn=a({},mn,{view:0,detail:0}),$d=Je(Jn),Sa,Ta,Qn,Zr=a({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Sa=e.screenX-Qn.screenX,Ta=e.screenY-Qn.screenY):Ta=Sa=0,Qn=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ta}}),ol=Je(Zr),Wd=a({},Zr,{dataTransfer:0}),qd=Je(Wd),Vd=a({},Jn,{relatedTarget:0}),Ea=Je(Vd),Yd=a({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=Je(Yd),Qd=a({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=Je(Qd),Zd=a({},mn,{data:0}),sl=Je(Zd),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tp[e])?!!t[e]:!1}function Ca(){return np}var rp=a({},Jn,{key:function(e){if(e.key){var t=Kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ca,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ip=Je(rp),ap=a({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ll=Je(ap),op=a({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ca}),sp=Je(op),lp=a({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cp=Je(lp),up=a({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dp=Je(up),pp=[9,13,27,32],Pa=g&&"CompositionEvent"in window,Xn=null;g&&"documentMode"in document&&(Xn=document.documentMode);var hp=g&&"TextEvent"in window&&!Xn,cl=g&&(!Pa||Xn&&8<Xn&&11>=Xn),ul=" ",dl=!1;function pl(e,t){switch(e){case"keyup":return pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function fp(e,t){switch(e){case"compositionend":return hl(t);case"keypress":return t.which!==32?null:(dl=!0,ul);case"textInput":return e=t.data,e===ul&&dl?null:e;default:return null}}function mp(e,t){if(gn)return e==="compositionend"||!Pa&&pl(e,t)?(e=il(),Jr=ka=Pt=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cl&&t.locale!=="ko"?null:t.data;default:return null}}var gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gp[e.type]:t==="textarea"}function ml(e,t,n,r){_s(r),t=ei(t,"onChange"),0<t.length&&(n=new ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,Kn=null;function vp(e){Pl(e,0)}function Kr(e){var t=kn(e);if(Ts(t))return e}function yp(e,t){if(e==="change")return t}var gl=!1;if(g){var Ia;if(g){var Aa="oninput"in document;if(!Aa){var vl=document.createElement("div");vl.setAttribute("oninput","return;"),Aa=typeof vl.oninput=="function"}Ia=Aa}else Ia=!1;gl=Ia&&(!document.documentMode||9<document.documentMode)}function yl(){Zn&&(Zn.detachEvent("onpropertychange",wl),Kn=Zn=null)}function wl(e){if(e.propertyName==="value"&&Kr(Kn)){var t=[];if(ml(t,Kn,e,ia(e)),e=vp,Wt)e(t);else{Wt=!0;try{oa(e,t)}finally{Wt=!1,ca()}}}}function wp(e,t,n){e==="focusin"?(yl(),Zn=t,Kn=n,Zn.attachEvent("onpropertychange",wl)):e==="focusout"&&yl()}function xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kr(Kn)}function kp(e,t){if(e==="click")return Kr(t)}function bp(e,t){if(e==="input"||e==="change")return Kr(t)}function Sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Sp,Tp=Object.prototype.hasOwnProperty;function er(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Tp.call(t,n[r])||!Ke(e[n[r]],t[n[r]]))return!1;return!0}function xl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kl(e,t){var n=xl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xl(n)}}function bl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sl(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ep=g&&"documentMode"in document&&11>=document.documentMode,vn=null,Ra=null,tr=null,La=!1;function Tl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;La||vn==null||vn!==Fr(r)||(r=vn,"selectionStart"in r&&ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&er(tr,r)||(tr=r,r=ei(Ra,"onSelect"),0<r.length&&(t=new ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}va("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),va("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),va(Nd,2);for(var El="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Na=0;Na<El.length;Na++)ga.set(El[Na],0);w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cp=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function Cl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Id(r,t,void 0,e),e.currentTarget=null}function Pl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var d=r.length-1;0<=d;d--){var m=r[d],y=m.instance,C=m.currentTarget;if(m=m.listener,y!==u&&o.isPropagationStopped())break e;Cl(o,m,C),u=y}else for(d=0;d<r.length;d++){if(m=r[d],y=m.instance,C=m.currentTarget,m=m.listener,y!==u&&o.isPropagationStopped())break e;Cl(o,m,C),u=y}}}if(Gr)throw e=da,Gr=!1,da=null,e}function Te(e,t){var n=zl(t),r=e+"__bubble";n.has(r)||(Rl(t,e,2,!1),n.add(r))}var Il="_reactListening"+Math.random().toString(36).slice(2);function Al(e){e[Il]||(e[Il]=!0,c.forEach(function(t){Cp.has(t)||jl(t,!1,e,null),jl(t,!0,e,null)}))}function jl(e,t,n,r){var o=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,u=n;e==="selectionchange"&&n.nodeType!==9&&(u=n.ownerDocument);var d=zl(u),m=e+"__"+(t?"capture":"bubble");d.has(m)||(t&&(o|=4),Rl(u,e,o,t),d.add(m))}function Rl(e,t,n,r){var o=ga.get(t);switch(o===void 0?2:o){case 0:o=Gd;break;case 1:o=Ud;break;default:o=wa}n=o.bind(null,t,n,e),o=void 0,!ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,o){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var m=r.stateNode.containerInfo;if(m===o||m.nodeType===8&&m.parentNode===o)break;if(d===4)for(d=r.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===o||y.nodeType===8&&y.parentNode===o))return;d=d.return}for(;m!==null;){if(d=Vt(m),d===null)return;if(y=d.tag,y===5||y===6){r=u=d;continue e}m=m.parentNode}}r=r.return}Td(function(){var C=u,$=ia(n),le=[];e:{var _=nl.get(e);if(_!==void 0){var K=ba,oe=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":K=ip;break;case"focusin":oe="focus",K=Ea;break;case"focusout":oe="blur",K=Ea;break;case"beforeblur":case"afterblur":K=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=sp;break;case Zs:case Ks:case el:K=Jd;break;case tl:K=cp;break;case"scroll":K=$d;break;case"wheel":K=dp;break;case"copy":case"cut":case"paste":K=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=ll}var re=(t&4)!==0,S=!re&&e==="scroll",k=re?_!==null?_+"Capture":null:_;re=[];for(var b=C,A;b!==null;){A=b;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,k!==null&&(L=Hn(b,k),L!=null&&re.push(rr(b,L,A)))),S)break;b=b.return}0<re.length&&(_=new K(_,oe,null,n,$),le.push({event:_,listeners:re}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",_&&(t&16)===0&&(oe=n.relatedTarget||n.fromElement)&&(Vt(oe)||oe[xn]))break e;if((K||_)&&(_=$.window===$?$:(_=$.ownerDocument)?_.defaultView||_.parentWindow:window,K?(oe=n.relatedTarget||n.toElement,K=C,oe=oe?Vt(oe):null,oe!==null&&(S=qt(oe),oe!==S||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(K=null,oe=C),K!==oe)){if(re=ol,L="onMouseLeave",k="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(re=ll,L="onPointerLeave",k="onPointerEnter",b="pointer"),S=K==null?_:kn(K),A=oe==null?_:kn(oe),_=new re(L,b+"leave",K,n,$),_.target=S,_.relatedTarget=A,L=null,Vt($)===C&&(re=new re(k,b+"enter",oe,n,$),re.target=A,re.relatedTarget=S,L=re),S=L,K&&oe)t:{for(re=K,k=oe,b=0,A=re;A;A=yn(A))b++;for(A=0,L=k;L;L=yn(L))A++;for(;0<b-A;)re=yn(re),b--;for(;0<A-b;)k=yn(k),A--;for(;b--;){if(re===k||k!==null&&re===k.alternate)break t;re=yn(re),k=yn(k)}re=null}else re=null;K!==null&&Nl(le,_,K,re,!1),oe!==null&&S!==null&&Nl(le,S,oe,re,!0)}}e:{if(_=C?kn(C):window,K=_.nodeName&&_.nodeName.toLowerCase(),K==="select"||K==="input"&&_.type==="file")var de=yp;else if(fl(_))if(gl)de=bp;else{de=xp;var Q=wp}else(K=_.nodeName)&&K.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(de=kp);if(de&&(de=de(e,C))){ml(le,de,n,$);break e}Q&&Q(e,_,C),e==="focusout"&&(Q=_._wrapperState)&&Q.controlled&&_.type==="number"&&Xi(_,"number",_.value)}switch(Q=C?kn(C):window,e){case"focusin":(fl(Q)||Q.contentEditable==="true")&&(vn=Q,Ra=C,tr=null);break;case"focusout":tr=Ra=vn=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,Tl(le,n,$);break;case"selectionchange":if(Ep)break;case"keydown":case"keyup":Tl(le,n,$)}var pe;if(Pa)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else gn?pl(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(cl&&n.locale!=="ko"&&(gn||me!=="onCompositionStart"?me==="onCompositionEnd"&&gn&&(pe=il()):(Pt=$,ka="value"in Pt?Pt.value:Pt.textContent,gn=!0)),Q=ei(C,me),0<Q.length&&(me=new sl(me,e,null,n,$),le.push({event:me,listeners:Q}),pe?me.data=pe:(pe=hl(n),pe!==null&&(me.data=pe)))),(pe=hp?fp(e,n):mp(e,n))&&(C=ei(C,"onBeforeInput"),0<C.length&&($=new sl("onBeforeInput","beforeinput",null,n,$),le.push({event:$,listeners:C}),$.data=pe))}Pl(le,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,u=o.stateNode;o.tag===5&&u!==null&&(o=u,u=Hn(e,n),u!=null&&r.unshift(rr(e,u,o)),u=Hn(e,t),u!=null&&r.push(rr(e,u,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nl(e,t,n,r,o){for(var u=t._reactName,d=[];n!==null&&n!==r;){var m=n,y=m.alternate,C=m.stateNode;if(y!==null&&y===r)break;m.tag===5&&C!==null&&(m=C,o?(y=Hn(n,u),y!=null&&d.unshift(rr(n,y,m))):o||(y=Hn(n,u),y!=null&&d.push(rr(n,y,m)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}function ti(){}var Ma=null,Da=null;function Ml(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function _a(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0;function Oa(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function _l(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var za=0;function Ip(e){return{$$typeof:F,toString:e,valueOf:e}}var ni=Math.random().toString(36).slice(2),It="__reactFiber$"+ni,ri="__reactProps$"+ni,xn="__reactContainer$"+ni,Ol="__reactEvents$"+ni;function Vt(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_l(e);e!==null;){if(n=e[It])return n;e=_l(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[It]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function ii(e){return e[ri]||null}function zl(e){var t=e[Ol];return t===void 0&&(t=e[Ol]=new Set),t}var Fa=[],bn=-1;function At(e){return{current:e}}function Ee(e){0>bn||(e.current=Fa[bn],Fa[bn]=null,bn--)}function Ce(e,t){bn++,Fa[bn]=e.current,e.current=t}var jt={},De=At(jt),$e=At(!1),Yt=jt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},u;for(u in n)o[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function ai(){Ee($e),Ee(De)}function Fl(e,t,n){if(De.current!==jt)throw Error(s(168));Ce(De,t),Ce($e,n)}function Hl(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(s(108,ln(t)||"Unknown",o));return a({},n,r)}function oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Yt=De.current,Ce(De,e),Ce($e,$e.current),!0}function Bl(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Hl(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,Ee($e),Ee(De),Ce(De,e)):Ee($e),Ce($e,n)}var Ha=null,Jt=null,Ap=l.unstable_runWithPriority,Ba=l.unstable_scheduleCallback,Ga=l.unstable_cancelCallback,jp=l.unstable_shouldYield,Gl=l.unstable_requestPaint,Ua=l.unstable_now,Rp=l.unstable_getCurrentPriorityLevel,si=l.unstable_ImmediatePriority,Ul=l.unstable_UserBlockingPriority,$l=l.unstable_NormalPriority,Wl=l.unstable_LowPriority,ql=l.unstable_IdlePriority,$a={},Lp=Gl!==void 0?Gl:function(){},vt=null,li=null,Wa=!1,Vl=Ua(),_e=1e4>Vl?Ua:function(){return Ua()-Vl};function Tn(){switch(Rp()){case si:return 99;case Ul:return 98;case $l:return 97;case Wl:return 96;case ql:return 95;default:throw Error(s(332))}}function Yl(e){switch(e){case 99:return si;case 98:return Ul;case 97:return $l;case 96:return Wl;case 95:return ql;default:throw Error(s(332))}}function Qt(e,t){return e=Yl(e),Ap(e,t)}function ar(e,t,n){return e=Yl(e),Ba(e,t,n)}function ct(){if(li!==null){var e=li;li=null,Ga(e)}Jl()}function Jl(){if(!Wa&&vt!==null){Wa=!0;var e=0;try{var t=vt;Qt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),vt=null}catch(n){throw vt!==null&&(vt=vt.slice(e+1)),Ba(si,ct),n}finally{Wa=!1}}}var Np=R.ReactCurrentBatchConfig;function it(e,t){if(e&&e.defaultProps){t=a({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ci=At(null),ui=null,En=null,di=null;function qa(){di=En=ui=null}function Va(e){var t=ci.current;Ee(ci),e.type._context._currentValue=t}function Ql(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Cn(e,t){ui=e,di=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function et(e,t){if(di!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(di=e,t=1073741823),t={context:e,observedBits:t,next:null},En===null){if(ui===null)throw Error(s(308));En=t,ui.dependencies={lanes:0,firstContext:t,responders:null}}else En=En.next=t;return e._currentValue}var Rt=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Xl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Zl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?o=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?o=u=t:u=u.next=t}else o=u=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function or(e,t,n,r){var o=e.updateQueue;Rt=!1;var u=o.firstBaseUpdate,d=o.lastBaseUpdate,m=o.shared.pending;if(m!==null){o.shared.pending=null;var y=m,C=y.next;y.next=null,d===null?u=C:d.next=C,d=y;var $=e.alternate;if($!==null){$=$.updateQueue;var le=$.lastBaseUpdate;le!==d&&(le===null?$.firstBaseUpdate=C:le.next=C,$.lastBaseUpdate=y)}}if(u!==null){le=o.baseState,d=0,$=C=y=null;do{m=u.lane;var _=u.eventTime;if((r&m)===m){$!==null&&($=$.next={eventTime:_,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var K=e,oe=u;switch(m=t,_=n,oe.tag){case 1:if(K=oe.payload,typeof K=="function"){le=K.call(_,le,m);break e}le=K;break e;case 3:K.flags=K.flags&-4097|64;case 0:if(K=oe.payload,m=typeof K=="function"?K.call(_,le,m):K,m==null)break e;le=a({},le,m);break e;case 2:Rt=!0}}u.callback!==null&&(e.flags|=32,m=o.effects,m===null?o.effects=[u]:m.push(u))}else _={eventTime:_,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},$===null?(C=$=_,y=le):$=$.next=_,d|=m;if(u=u.next,u===null){if(m=o.shared.pending,m===null)break;u=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);$===null&&(y=le),o.baseState=y,o.firstBaseUpdate=C,o.lastBaseUpdate=$,yr|=d,e.lanes=d,e.memoizedState=le}}function Kl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(s(191,o));o.call(r)}}}var ec=new i.Component().refs;function pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:a({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hi={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=_t(e),u=Lt(r,o);u.payload=t,n!=null&&(u.callback=n),Nt(e,u),Ot(e,o,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=_t(e),u=Lt(r,o);u.tag=1,u.payload=t,n!=null&&(u.callback=n),Nt(e,u),Ot(e,o,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=_t(e),o=Lt(n,r);o.tag=2,t!=null&&(o.callback=t),Nt(e,o),Ot(e,r,n)}};function tc(e,t,n,r,o,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,d):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,u):!0}function nc(e,t,n){var r=!1,o=jt,u=t.contextType;return typeof u=="object"&&u!==null?u=et(u):(o=We(t)?Yt:De.current,r=t.contextTypes,u=(r=r!=null)?Sn(e,o):jt),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=u),t}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hi.enqueueReplaceState(t,t.state,null)}function Ja(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=ec,Ya(e);var u=t.contextType;typeof u=="object"&&u!==null?o.context=et(u):(u=We(t)?Yt:De.current,o.context=Sn(e,u)),or(e,n,o,r),o.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(pi(e,t,u,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hi.enqueueReplaceState(o,o.state,null),or(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4)}var fi=Array.isArray;function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(u){var d=r.refs;d===ec&&(d=r.refs={}),u===null?delete d[o]:d[o]=u},t._stringRef=o,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function mi(e,t){if(e.type!=="textarea")throw Error(s(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function ic(e){function t(S,k){if(e){var b=S.lastEffect;b!==null?(b.nextEffect=k,S.lastEffect=k):S.firstEffect=S.lastEffect=k,k.nextEffect=null,k.flags=8}}function n(S,k){if(!e)return null;for(;k!==null;)t(S,k),k=k.sibling;return null}function r(S,k){for(S=new Map;k!==null;)k.key!==null?S.set(k.key,k):S.set(k.index,k),k=k.sibling;return S}function o(S,k){return S=Ht(S,k),S.index=0,S.sibling=null,S}function u(S,k,b){return S.index=b,e?(b=S.alternate,b!==null?(b=b.index,b<k?(S.flags=2,k):b):(S.flags=2,k)):k}function d(S){return e&&S.alternate===null&&(S.flags=2),S}function m(S,k,b,A){return k===null||k.tag!==6?(k=Lo(b,S.mode,A),k.return=S,k):(k=o(k,b),k.return=S,k)}function y(S,k,b,A){return k!==null&&k.elementType===b.type?(A=o(k,b.props),A.ref=sr(S,k,b),A.return=S,A):(A=Ni(b.type,b.key,b.props,null,S.mode,A),A.ref=sr(S,k,b),A.return=S,A)}function C(S,k,b,A){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=No(b,S.mode,A),k.return=S,k):(k=o(k,b.children||[]),k.return=S,k)}function $(S,k,b,A,L){return k===null||k.tag!==7?(k=Mn(b,S.mode,A,L),k.return=S,k):(k=o(k,b),k.return=S,k)}function le(S,k,b){if(typeof k=="string"||typeof k=="number")return k=Lo(""+k,S.mode,b),k.return=S,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case U:return b=Ni(k.type,k.key,k.props,null,S.mode,b),b.ref=sr(S,null,k),b.return=S,b;case V:return k=No(k,S.mode,b),k.return=S,k}if(fi(k)||Z(k))return k=Mn(k,S.mode,b,null),k.return=S,k;mi(S,k)}return null}function _(S,k,b,A){var L=k!==null?k.key:null;if(typeof b=="string"||typeof b=="number")return L!==null?null:m(S,k,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return b.key===L?b.type===W?$(S,k,b.props.children,A,L):y(S,k,b,A):null;case V:return b.key===L?C(S,k,b,A):null}if(fi(b)||Z(b))return L!==null?null:$(S,k,b,A,null);mi(S,b)}return null}function K(S,k,b,A,L){if(typeof A=="string"||typeof A=="number")return S=S.get(b)||null,m(k,S,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case U:return S=S.get(A.key===null?b:A.key)||null,A.type===W?$(k,S,A.props.children,L,A.key):y(k,S,A,L);case V:return S=S.get(A.key===null?b:A.key)||null,C(k,S,A,L)}if(fi(A)||Z(A))return S=S.get(b)||null,$(k,S,A,L,null);mi(k,A)}return null}function oe(S,k,b,A){for(var L=null,de=null,Q=k,pe=k=0,me=null;Q!==null&&pe<b.length;pe++){Q.index>pe?(me=Q,Q=null):me=Q.sibling;var he=_(S,Q,b[pe],A);if(he===null){Q===null&&(Q=me);break}e&&Q&&he.alternate===null&&t(S,Q),k=u(he,k,pe),de===null?L=he:de.sibling=he,de=he,Q=me}if(pe===b.length)return n(S,Q),L;if(Q===null){for(;pe<b.length;pe++)Q=le(S,b[pe],A),Q!==null&&(k=u(Q,k,pe),de===null?L=Q:de.sibling=Q,de=Q);return L}for(Q=r(S,Q);pe<b.length;pe++)me=K(Q,S,pe,b[pe],A),me!==null&&(e&&me.alternate!==null&&Q.delete(me.key===null?pe:me.key),k=u(me,k,pe),de===null?L=me:de.sibling=me,de=me);return e&&Q.forEach(function(Bt){return t(S,Bt)}),L}function re(S,k,b,A){var L=Z(b);if(typeof L!="function")throw Error(s(150));if(b=L.call(b),b==null)throw Error(s(151));for(var de=L=null,Q=k,pe=k=0,me=null,he=b.next();Q!==null&&!he.done;pe++,he=b.next()){Q.index>pe?(me=Q,Q=null):me=Q.sibling;var Bt=_(S,Q,he.value,A);if(Bt===null){Q===null&&(Q=me);break}e&&Q&&Bt.alternate===null&&t(S,Q),k=u(Bt,k,pe),de===null?L=Bt:de.sibling=Bt,de=Bt,Q=me}if(he.done)return n(S,Q),L;if(Q===null){for(;!he.done;pe++,he=b.next())he=le(S,he.value,A),he!==null&&(k=u(he,k,pe),de===null?L=he:de.sibling=he,de=he);return L}for(Q=r(S,Q);!he.done;pe++,he=b.next())he=K(Q,S,pe,he.value,A),he!==null&&(e&&he.alternate!==null&&Q.delete(he.key===null?pe:he.key),k=u(he,k,pe),de===null?L=he:de.sibling=he,de=he);return e&&Q.forEach(function(uh){return t(S,uh)}),L}return function(S,k,b,A){var L=typeof b=="object"&&b!==null&&b.type===W&&b.key===null;L&&(b=b.props.children);var de=typeof b=="object"&&b!==null;if(de)switch(b.$$typeof){case U:e:{for(de=b.key,L=k;L!==null;){if(L.key===de){switch(L.tag){case 7:if(b.type===W){n(S,L.sibling),k=o(L,b.props.children),k.return=S,S=k;break e}break;default:if(L.elementType===b.type){n(S,L.sibling),k=o(L,b.props),k.ref=sr(S,L,b),k.return=S,S=k;break e}}n(S,L);break}else t(S,L);L=L.sibling}b.type===W?(k=Mn(b.props.children,S.mode,A,b.key),k.return=S,S=k):(A=Ni(b.type,b.key,b.props,null,S.mode,A),A.ref=sr(S,k,b),A.return=S,S=A)}return d(S);case V:e:{for(L=b.key;k!==null;){if(k.key===L)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){n(S,k.sibling),k=o(k,b.children||[]),k.return=S,S=k;break e}else{n(S,k);break}else t(S,k);k=k.sibling}k=No(b,S.mode,A),k.return=S,S=k}return d(S)}if(typeof b=="string"||typeof b=="number")return b=""+b,k!==null&&k.tag===6?(n(S,k.sibling),k=o(k,b),k.return=S,S=k):(n(S,k),k=Lo(b,S.mode,A),k.return=S,S=k),d(S);if(fi(b))return oe(S,k,b,A);if(Z(b))return re(S,k,b,A);if(de&&mi(S,b),typeof b>"u"&&!L)switch(S.tag){case 1:case 22:case 0:case 11:case 15:throw Error(s(152,ln(S.type)||"Component"))}return n(S,k)}}var gi=ic(!0),ac=ic(!1),lr={},ut=At(lr),cr=At(lr),ur=At(lr);function Xt(e){if(e===lr)throw Error(s(174));return e}function Qa(e,t){switch(Ce(ur,t),Ce(cr,e),Ce(ut,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}Ee(ut),Ce(ut,t)}function Pn(){Ee(ut),Ee(cr),Ee(ur)}function oc(e){Xt(ur.current);var t=Xt(ut.current),n=ta(t,e.type);t!==n&&(Ce(cr,e),Ce(ut,n))}function Xa(e){cr.current===e&&(Ee(ut),Ee(cr))}var Pe=At(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yt=null,Mt=null,dt=!1;function sc(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Za(e){if(dt){var t=Mt;if(t){var n=t;if(!lc(e,t)){if(t=wn(n.nextSibling),!t||!lc(e,t)){e.flags=e.flags&-1025|2,dt=!1,yt=e;return}sc(yt,n)}yt=e,Mt=wn(t.firstChild)}else e.flags=e.flags&-1025|2,dt=!1,yt=e}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function yi(e){if(e!==yt)return!1;if(!dt)return cc(e),dt=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!_a(t,e.memoizedProps))for(t=Mt;t;)sc(e,t),t=wn(t.nextSibling);if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Mt=wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=yt?wn(e.stateNode.nextSibling):null;return!0}function Ka(){Mt=yt=null,dt=!1}var In=[];function eo(){for(var e=0;e<In.length;e++)In[e]._workInProgressVersionPrimary=null;In.length=0}var dr=R.ReactCurrentDispatcher,tt=R.ReactCurrentBatchConfig,pr=0,Ae=null,Oe=null,Le=null,wi=!1,hr=!1;function qe(){throw Error(s(321))}function to(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function no(e,t,n,r,o,u){if(pr=u,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,dr.current=e===null||e.memoizedState===null?Dp:_p,e=n(r,o),hr){u=0;do{if(hr=!1,!(25>u))throw Error(s(301));u+=1,Le=Oe=null,t.updateQueue=null,dr.current=Op,e=n(r,o)}while(hr)}if(dr.current=Si,t=Oe!==null&&Oe.next!==null,pr=0,Le=Oe=Ae=null,wi=!1,t)throw Error(s(300));return e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?Ae.memoizedState=Le=e:Le=Le.next=e,Le}function Kt(){if(Oe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Le===null?Ae.memoizedState:Le.next;if(t!==null)Le=t,Oe=e;else{if(e===null)throw Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Le===null?Ae.memoizedState=Le=e:Le=Le.next=e}return Le}function pt(e,t){return typeof t=="function"?t(e):t}function fr(e){var t=Kt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Oe,o=r.baseQueue,u=n.pending;if(u!==null){if(o!==null){var d=o.next;o.next=u.next,u.next=d}r.baseQueue=o=u,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var m=d=u=null,y=o;do{var C=y.lane;if((pr&C)===C)m!==null&&(m=m.next={lane:0,action:y.action,eagerReducer:y.eagerReducer,eagerState:y.eagerState,next:null}),r=y.eagerReducer===e?y.eagerState:e(r,y.action);else{var $={lane:C,action:y.action,eagerReducer:y.eagerReducer,eagerState:y.eagerState,next:null};m===null?(d=m=$,u=r):m=m.next=$,Ae.lanes|=C,yr|=C}y=y.next}while(y!==null&&y!==o);m===null?u=r:m.next=d,Ke(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=m,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function mr(e){var t=Kt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,u=t.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do u=e(u,d.action),d=d.next;while(d!==o);Ke(u,t.memoizedState)||(at=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function uc(e,t,n){var r=t._getVersion;r=r(t._source);var o=t._workInProgressVersionPrimary;if(o!==null?e=o===r:(e=e.mutableReadLanes,(e=(pr&e)===e)&&(t._workInProgressVersionPrimary=r,In.push(t))),e)return n(t._source);throw In.push(t),Error(s(350))}function dc(e,t,n,r){var o=He;if(o===null)throw Error(s(349));var u=t._getVersion,d=u(t._source),m=dr.current,y=m.useState(function(){return uc(o,t,n)}),C=y[1],$=y[0];y=Le;var le=e.memoizedState,_=le.refs,K=_.getSnapshot,oe=le.source;le=le.subscribe;var re=Ae;return e.memoizedState={refs:_,source:t,subscribe:r},m.useEffect(function(){_.getSnapshot=n,_.setSnapshot=C;var S=u(t._source);if(!Ke(d,S)){S=n(t._source),Ke($,S)||(C(S),S=_t(re),o.mutableReadLanes|=S&o.pendingLanes),S=o.mutableReadLanes,o.entangledLanes|=S;for(var k=o.entanglements,b=S;0<b;){var A=31-Ct(b),L=1<<A;k[A]|=S,b&=~L}}},[n,t,r]),m.useEffect(function(){return r(t._source,function(){var S=_.getSnapshot,k=_.setSnapshot;try{k(S(t._source));var b=_t(re);o.mutableReadLanes|=b&o.pendingLanes}catch(A){k(function(){throw A})}})},[t,r]),Ke(K,n)&&Ke(oe,t)&&Ke(le,r)||(e={pending:null,dispatch:null,lastRenderedReducer:pt,lastRenderedState:$},e.dispatch=C=oo.bind(null,Ae,e),y.queue=e,y.baseQueue=null,$=uc(o,t,n),y.memoizedState=y.baseState=$),$}function pc(e,t,n){var r=Kt();return dc(r,e,t,n)}function gr(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:pt,lastRenderedState:e},e=e.dispatch=oo.bind(null,Ae,e),[t.memoizedState,e]}function xi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hc(e){var t=Zt();return e={current:e},t.memoizedState=e}function ki(){return Kt().memoizedState}function ro(e,t,n,r){var o=Zt();Ae.flags|=e,o.memoizedState=xi(1|t,n,void 0,r===void 0?null:r)}function io(e,t,n,r){var o=Kt();r=r===void 0?null:r;var u=void 0;if(Oe!==null){var d=Oe.memoizedState;if(u=d.destroy,r!==null&&to(r,d.deps)){xi(t,n,u,r);return}}Ae.flags|=e,o.memoizedState=xi(1|t,n,u,r)}function fc(e,t){return ro(516,4,e,t)}function bi(e,t){return io(516,4,e,t)}function mc(e,t){return io(4,2,e,t)}function gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vc(e,t,n){return n=n!=null?n.concat([e]):null,io(4,2,gc.bind(null,t,e),n)}function ao(){}function yc(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&to(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wc(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&to(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mp(e,t){var n=Tn();Qt(98>n?98:n,function(){e(!0)}),Qt(97<n?97:n,function(){var r=tt.transition;tt.transition=1;try{e(!1),t()}finally{tt.transition=r}})}function oo(e,t,n){var r=Qe(),o=_t(e),u={lane:o,action:n,eagerReducer:null,eagerState:null,next:null},d=t.pending;if(d===null?u.next=u:(u.next=d.next,d.next=u),t.pending=u,d=e.alternate,e===Ae||d!==null&&d===Ae)hr=wi=!0;else{if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var m=t.lastRenderedState,y=d(m,n);if(u.eagerReducer=d,u.eagerState=y,Ke(y,m))return}catch{}Ot(e,o,r)}}var Si={readContext:et,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useOpaqueIdentifier:qe,unstable_isNewReconciler:!1},Dp={readContext:et,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ro(4,2,gc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ro(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=oo.bind(null,Ae,e),[r.memoizedState,e]},useRef:hc,useState:gr,useDebugValue:ao,useDeferredValue:function(e){var t=gr(e),n=t[0],r=t[1];return fc(function(){var o=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=o}},[e]),n},useTransition:function(){var e=gr(!1),t=e[0];return e=Mp.bind(null,e[1]),hc(e),[e,t]},useMutableSource:function(e,t,n){var r=Zt();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},dc(r,e,t,n)},useOpaqueIdentifier:function(){if(dt){var e=!1,t=Ip(function(){throw e||(e=!0,n("r:"+(za++).toString(36))),Error(s(355))}),n=gr(t)[1];return(Ae.mode&2)===0&&(Ae.flags|=516,xi(5,function(){n("r:"+(za++).toString(36))},void 0,null)),t}return t="r:"+(za++).toString(36),gr(t),t},unstable_isNewReconciler:!1},_p={readContext:et,useCallback:yc,useContext:et,useEffect:bi,useImperativeHandle:vc,useLayoutEffect:mc,useMemo:wc,useReducer:fr,useRef:ki,useState:function(){return fr(pt)},useDebugValue:ao,useDeferredValue:function(e){var t=fr(pt),n=t[0],r=t[1];return bi(function(){var o=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=o}},[e]),n},useTransition:function(){var e=fr(pt)[0];return[ki().current,e]},useMutableSource:pc,useOpaqueIdentifier:function(){return fr(pt)[0]},unstable_isNewReconciler:!1},Op={readContext:et,useCallback:yc,useContext:et,useEffect:bi,useImperativeHandle:vc,useLayoutEffect:mc,useMemo:wc,useReducer:mr,useRef:ki,useState:function(){return mr(pt)},useDebugValue:ao,useDeferredValue:function(e){var t=mr(pt),n=t[0],r=t[1];return bi(function(){var o=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=o}},[e]),n},useTransition:function(){var e=mr(pt)[0];return[ki().current,e]},useMutableSource:pc,useOpaqueIdentifier:function(){return mr(pt)[0]},unstable_isNewReconciler:!1},zp=R.ReactCurrentOwner,at=!1;function Ve(e,t,n,r){t.child=e===null?ac(t,null,n,r):gi(t,e.child,n,r)}function xc(e,t,n,r,o){n=n.render;var u=t.ref;return Cn(t,o),r=no(e,t,n,r,u,o),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,wt(e,t,o)):(t.flags|=1,Ve(e,t,r,o),t.child)}function kc(e,t,n,r,o,u){if(e===null){var d=n.type;return typeof d=="function"&&!jo(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=d,bc(e,t,d,r,o,u)):(e=Ni(n.type,null,r,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}return d=e.child,(o&u)===0&&(o=d.memoizedProps,n=n.compare,n=n!==null?n:er,n(o,r)&&e.ref===t.ref)?wt(e,t,u):(t.flags|=1,e=Ht(d,r),e.ref=t.ref,e.return=t,t.child=e)}function bc(e,t,n,r,o,u){if(e!==null&&er(e.memoizedProps,r)&&e.ref===t.ref)if(at=!1,(u&o)!==0)(e.flags&16384)!==0&&(at=!0);else return t.lanes=e.lanes,wt(e,t,u);return lo(e,t,n,r,u)}function so(e,t,n){var r=t.pendingProps,o=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},Li(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},Li(t,u!==null?u.baseLanes:n);else return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Li(t,e),null;else u!==null?(r=u.baseLanes|n,t.memoizedState=null):r=n,Li(t,r);return Ve(e,t,o,n),t.child}function Sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function lo(e,t,n,r,o){var u=We(n)?Yt:De.current;return u=Sn(t,u),Cn(t,o),n=no(e,t,n,r,u,o),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,wt(e,t,o)):(t.flags|=1,Ve(e,t,n,o),t.child)}function Tc(e,t,n,r,o){if(We(n)){var u=!0;oi(t)}else u=!1;if(Cn(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),nc(t,n,r),Ja(t,n,r,o),r=!0;else if(e===null){var d=t.stateNode,m=t.memoizedProps;d.props=m;var y=d.context,C=n.contextType;typeof C=="object"&&C!==null?C=et(C):(C=We(n)?Yt:De.current,C=Sn(t,C));var $=n.getDerivedStateFromProps,le=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function";le||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==r||y!==C)&&rc(t,d,r,C),Rt=!1;var _=t.memoizedState;d.state=_,or(t,r,d,o),y=t.memoizedState,m!==r||_!==y||$e.current||Rt?(typeof $=="function"&&(pi(t,n,$,r),y=t.memoizedState),(m=Rt||tc(t,n,m,r,_,y,C))?(le||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4)):(typeof d.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=y),d.props=r,d.state=y,d.context=C,r=m):(typeof d.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{d=t.stateNode,Xl(e,t),m=t.memoizedProps,C=t.type===t.elementType?m:it(t.type,m),d.props=C,le=t.pendingProps,_=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=et(y):(y=We(n)?Yt:De.current,y=Sn(t,y));var K=n.getDerivedStateFromProps;($=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==le||_!==y)&&rc(t,d,r,y),Rt=!1,_=t.memoizedState,d.state=_,or(t,r,d,o);var oe=t.memoizedState;m!==le||_!==oe||$e.current||Rt?(typeof K=="function"&&(pi(t,n,K,r),oe=t.memoizedState),(C=Rt||tc(t,n,C,r,_,oe,y))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,oe,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,oe,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=oe),d.props=r,d.state=oe,d.context=y,r=C):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=256),r=!1)}return co(e,t,n,r,u,o)}function co(e,t,n,r,o,u){Sc(e,t);var d=(t.flags&64)!==0;if(!r&&!d)return o&&Bl(t,n,!1),wt(e,t,u);r=t.stateNode,zp.current=t;var m=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=gi(t,e.child,null,u),t.child=gi(t,null,m,u)):Ve(e,t,m,u),t.memoizedState=r.state,o&&Bl(t,n,!0),t.child}function Ec(e){var t=e.stateNode;t.pendingContext?Fl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fl(e,t.context,!1),Qa(e,t.containerInfo)}var Ti={dehydrated:null,retryLane:0};function Cc(e,t,n){var r=t.pendingProps,o=Pe.current,u=!1,d;return(d=(t.flags&64)!==0)||(d=e!==null&&e.memoizedState===null?!1:(o&2)!==0),d?(u=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(o|=1),Ce(Pe,o&1),e===null?(r.fallback!==void 0&&Za(t),e=r.children,o=r.fallback,u?(e=Pc(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Ti,e):typeof r.unstable_expectedLoadTime=="number"?(e=Pc(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Ti,t.lanes=33554432,e):(n=Ro({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?u?(r=Ac(e,t,r.children,r.fallback,n),u=t.child,o=e.child.memoizedState,u.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},u.childLanes=e.childLanes&~n,t.memoizedState=Ti,r):(n=Ic(e,t,r.children,n),t.memoizedState=null,n):u?(r=Ac(e,t,r.children,r.fallback,n),u=t.child,o=e.child.memoizedState,u.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},u.childLanes=e.childLanes&~n,t.memoizedState=Ti,r):(n=Ic(e,t,r.children,n),t.memoizedState=null,n)}function Pc(e,t,n,r){var o=e.mode,u=e.child;return t={mode:"hidden",children:t},(o&2)===0&&u!==null?(u.childLanes=0,u.pendingProps=t):u=Ro(t,o,0,null),n=Mn(n,o,r,null),u.return=e,n.return=e,u.sibling=n,e.child=u,n}function Ic(e,t,n,r){var o=e.child;return e=o.sibling,n=Ht(o,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Ac(e,t,n,r,o){var u=t.mode,d=e.child;e=d.sibling;var m={mode:"hidden",children:n};return(u&2)===0&&t.child!==d?(n=t.child,n.childLanes=0,n.pendingProps=m,d=n.lastEffect,d!==null?(t.firstEffect=n.firstEffect,t.lastEffect=d,d.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Ht(d,m),e!==null?r=Ht(e,r):(r=Mn(r,u,o,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function jc(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ql(e.return,t)}function uo(e,t,n,r,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,lastEffect:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=n,d.tailMode=o,d.lastEffect=u)}function Rc(e,t,n){var r=t.pendingProps,o=r.revealOrder,u=r.tail;if(Ve(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n);else if(e.tag===19)jc(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Pe,r),(t.mode&2)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&vi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),uo(t,!1,o,n,u,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&vi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}uo(t,!0,n,null,u,t.lastEffect);break;case"together":uo(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Lc,po,Nc,Mc;Lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},po=function(){},Nc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Xt(ut.current);var u=null;switch(n){case"input":o=Ji(e,o),r=Ji(e,r),u=[];break;case"option":o=Zi(e,o),r=Zi(e,r),u=[];break;case"select":o=a({},o,{value:void 0}),r=a({},r,{value:void 0}),u=[];break;case"textarea":o=Ki(e,o),r=Ki(e,r),u=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ti)}na(n,r);var d;n=null;for(C in o)if(!r.hasOwnProperty(C)&&o.hasOwnProperty(C)&&o[C]!=null)if(C==="style"){var m=o[C];for(d in m)m.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(h.hasOwnProperty(C)?u||(u=[]):(u=u||[]).push(C,null));for(C in r){var y=r[C];if(m=o?.[C],r.hasOwnProperty(C)&&y!==m&&(y!=null||m!=null))if(C==="style")if(m){for(d in m)!m.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&m[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(u||(u=[]),u.push(C,n)),n=y;else C==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,m=m?m.__html:void 0,y!=null&&m!==y&&(u=u||[]).push(C,y)):C==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(C,""+y):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(h.hasOwnProperty(C)?(y!=null&&C==="onScroll"&&Te("scroll",e),u||m===y||(u=[])):typeof y=="object"&&y!==null&&y.$$typeof===F?y.toString():(u=u||[]).push(C,y))}n&&(u=u||[]).push("style",n);var C=u;(t.updateQueue=C)&&(t.flags|=4)}},Mc=function(e,t,n,r){n!==r&&(t.flags|=4)};function vr(e,t){if(!dt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fp(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return We(t.type)&&ai(),null;case 3:return Pn(),Ee($e),Ee(De),eo(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:r.hydrate||(t.flags|=256)),po(t),null;case 5:Xa(t);var o=Xt(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Nc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(s(166));return null}if(e=Xt(ut.current),yi(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[It]=t,r[ri]=u,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(e=0;e<nr.length;e++)Te(nr[e],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Es(r,u),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},Te("invalid",r);break;case"textarea":Is(r,u),Te("invalid",r)}na(n,u),e=null;for(var d in u)u.hasOwnProperty(d)&&(o=u[d],d==="children"?typeof o=="string"?r.textContent!==o&&(e=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(e=["children",""+o]):h.hasOwnProperty(d)&&o!=null&&d==="onScroll"&&Te("scroll",r));switch(n){case"input":zr(r),Ps(r,u,!0);break;case"textarea":zr(r),js(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=ti)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(d=o.nodeType===9?o:o.ownerDocument,e===ea.html&&(e=Rs(n)),e===ea.html?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[It]=t,e[ri]=r,Lc(e,t,!1,!1),t.stateNode=e,d=ra(n,r),n){case"dialog":Te("cancel",e),Te("close",e),o=r;break;case"iframe":case"object":case"embed":Te("load",e),o=r;break;case"video":case"audio":for(o=0;o<nr.length;o++)Te(nr[o],e);o=r;break;case"source":Te("error",e),o=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),o=r;break;case"details":Te("toggle",e),o=r;break;case"input":Es(e,r),o=Ji(e,r),Te("invalid",e);break;case"option":o=Zi(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=a({},r,{value:void 0}),Te("invalid",e);break;case"textarea":Is(e,r),o=Ki(e,r),Te("invalid",e);break;default:o=r}na(n,o);var m=o;for(u in m)if(m.hasOwnProperty(u)){var y=m[u];u==="style"?Ms(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Ls(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&zn(e,y):typeof y=="number"&&zn(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(h.hasOwnProperty(u)?y!=null&&u==="onScroll"&&Te("scroll",e):y!=null&&ne(e,u,y,d))}switch(n){case"input":zr(e),Ps(e,r,!1);break;case"textarea":zr(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?cn(e,!!r.multiple,u,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ti)}Ml(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Mc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));n=Xt(ur.current),Xt(ut.current),yi(t)?(r=t.stateNode,n=t.memoizedProps,r[It]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r)}return null;case 13:return Ee(Pe),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&yi(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Pe.current&1)!==0?Ne===0&&(Ne=3):((Ne===0||Ne===3)&&(Ne=4),He===null||(yr&134217727)===0&&(jn&134217727)===0||Ln(He,ze))),(r||n)&&(t.flags|=4),null);case 4:return Pn(),po(t),e===null&&Al(t.stateNode.containerInfo),null;case 10:return Va(t),null;case 17:return We(t.type)&&ai(),null;case 19:if(Ee(Pe),r=t.memoizedState,r===null)return null;if(u=(t.flags&64)!==0,d=r.rendering,d===null)if(u)vr(r,!1);else{if(Ne!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(d=vi(e),d!==null){for(t.flags|=64,vr(r,!1),u=d.updateQueue,u!==null&&(t.updateQueue=u,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)u=n,e=r,u.flags&=2,u.nextEffect=null,u.firstEffect=null,u.lastEffect=null,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Pe,Pe.current&1|2),t.child}e=e.sibling}r.tail!==null&&_e()>So&&(t.flags|=64,u=!0,vr(r,!1),t.lanes=33554432)}else{if(!u)if(e=vi(d),e!==null){if(t.flags|=64,u=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!d.alternate&&!dt)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*_e()-r.renderingStartTime>So&&n!==1073741824&&(t.flags|=64,u=!0,vr(r,!1),t.lanes=33554432);r.isBackwards?(d.sibling=t.child,t.child=d):(n=r.last,n!==null?n.sibling=d:t.child=d,r.last=d)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=_e(),n.sibling=null,t=Pe.current,Ce(Pe,u?t&1|2:t&1),n):null;case 23:case 24:return Ao(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(s(156,t.tag))}function Hp(e){switch(e.tag){case 1:We(e.type)&&ai();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Pn(),Ee($e),Ee(De),eo(),t=e.flags,(t&64)!==0)throw Error(s(285));return e.flags=t&-4097|64,e;case 5:return Xa(e),null;case 13:return Ee(Pe),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return Ee(Pe),null;case 4:return Pn(),null;case 10:return Va(e),null;case 23:case 24:return Ao(),null;default:return null}}function ho(e,t){try{var n="",r=t;do n+=wd(r),r=r.return;while(r);var o=n}catch(u){o=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:o}}function fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bp=typeof WeakMap=="function"?WeakMap:Map;function Dc(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pi||(Pi=!0,To=r),fo(e,t)},n}function _c(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return fo(e,t),r(o)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this),fo(e,t));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}var Gp=typeof WeakSet=="function"?WeakSet:Set;function Oc(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Ft(e,n)}else t.current=null}function Up(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:it(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Oa(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(s(163))}function $p(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var o=e;r=o.next,o=o.tag,(o&4)!==0&&(o&1)!==0&&(Zc(n,e),Zp(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:it(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Kl(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Kl(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Ml(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Qs(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(s(163))}function zc(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var o=n.memoizedProps.style;o=o!=null&&o.hasOwnProperty("display")?o.display:null,r.style.display=Ns("display",o)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Fc(e,t){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ha,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,o=r.destroy;if(r=r.tag,o!==void 0)if((r&4)!==0)Zc(t,n);else{r=t;try{o()}catch(u){Ft(r,u)}}n=n.next}while(n!==e)}break;case 1:if(Oc(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(u){Ft(t,u)}break;case 5:Oc(t);break;case 4:Uc(e,t)}}function Hc(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:{for(var t=e.return;t!==null;){if(Bc(t))break e;t=t.return}throw Error(s(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(s(161))}n.flags&16&&(zn(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Bc(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?mo(e,n,t):go(e,n,t)}function mo(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ti));else if(r!==4&&(e=e.child,e!==null))for(mo(e,t,n),e=e.sibling;e!==null;)mo(e,t,n),e=e.sibling}function go(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(go(e,t,n),e=e.sibling;e!==null;)go(e,t,n),e=e.sibling}function Uc(e,t){for(var n=t,r=!1,o,u;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(s(160));switch(o=r.stateNode,r.tag){case 5:u=!1;break e;case 3:o=o.containerInfo,u=!0;break e;case 4:o=o.containerInfo,u=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var d=e,m=n,y=m;;)if(Fc(d,y),y.child!==null&&y.tag!==4)y.child.return=y,y=y.child;else{if(y===m)break e;for(;y.sibling===null;){if(y.return===null||y.return===m)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}u?(d=o,m=n.stateNode,d.nodeType===8?d.parentNode.removeChild(m):d.removeChild(m)):o.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){o=n.stateNode.containerInfo,u=!0,n.child.return=n,n=n.child;continue}}else if(Fc(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function vo(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var o=e!==null?e.memoizedProps:r;e=t.type;var u=t.updateQueue;if(t.updateQueue=null,u!==null){for(n[ri]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Cs(n,r),ra(e,o),t=ra(e,r),o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?Ms(n,m):d==="dangerouslySetInnerHTML"?Ls(n,m):d==="children"?zn(n,m):ne(n,d,m,t)}switch(e){case"input":Qi(n,r);break;case"textarea":As(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,u=r.value,u!=null?cn(n,!!r.multiple,u,!1):e!==!!r.multiple&&(r.defaultValue!=null?cn(n,!!r.multiple,r.defaultValue,!0):cn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(s(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Qs(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(bo=_e(),zc(t.child,!0)),$c(t);return;case 19:$c(t);return;case 17:return;case 23:case 24:zc(t,t.memoizedState!==null);return}throw Error(s(163))}function $c(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gp),t.forEach(function(r){var o=th.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Wp(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var qp=Math.ceil,Ei=R.ReactCurrentDispatcher,yo=R.ReactCurrentOwner,ae=0,He=null,je=null,ze=0,en=0,wo=At(0),Ne=0,Ci=null,An=0,yr=0,jn=0,xo=0,ko=null,bo=0,So=1/0;function Rn(){So=_e()+500}var Y=null,Pi=!1,To=null,ht=null,Dt=!1,wr=null,xr=90,Eo=[],Co=[],xt=null,kr=0,Po=null,Ii=-1,kt=0,Ai=0,br=null,ji=!1;function Qe(){return(ae&48)!==0?_e():Ii!==-1?Ii:Ii=_e()}function _t(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return Tn()===99?1:2;if(kt===0&&(kt=An),Np.transition!==0){Ai!==0&&(Ai=ko!==null?ko.pendingLanes:0),e=kt;var t=4186112&~Ai;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=Tn(),(ae&4)!==0&&e===98?e=qr(12,kt):(e=Dd(e),e=qr(e,kt)),e}function Ot(e,t,n){if(50<kr)throw kr=0,Po=null,Error(s(185));if(e=Ri(e,t),e===null)return null;Vr(e,t,n),e===He&&(jn|=t,Ne===4&&Ln(e,ze));var r=Tn();t===1?(ae&8)!==0&&(ae&48)===0?Io(e):(nt(e,n),ae===0&&(Rn(),ct())):((ae&4)===0||r!==98&&r!==99||(xt===null?xt=new Set([e]):xt.add(e)),nt(e,n)),ko=e}function Ri(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function nt(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var m=31-Ct(d),y=1<<m,C=u[m];if(C===-1){if((y&r)===0||(y&o)!==0){C=t,hn(y);var $=Se;u[m]=10<=$?C+250:6<=$?C+5e3:-1}}else C<=t&&(e.expiredLanes|=y);d&=~y}if(r=Yn(e,e===He?ze:0),t=Se,r===0)n!==null&&(n!==$a&&Ga(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==$a&&Ga(n)}t===15?(n=Io.bind(null,e),vt===null?(vt=[n],li=Ba(si,Jl)):vt.push(n),n=$a):t===14?n=ar(99,Io.bind(null,e)):(n=_d(t),n=ar(n,Wc.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Wc(e){if(Ii=-1,Ai=kt=0,(ae&48)!==0)throw Error(s(327));var t=e.callbackNode;if(zt()&&e.callbackNode!==t)return null;var n=Yn(e,e===He?ze:0);if(n===0)return null;var r=n,o=ae;ae|=16;var u=Jc();(He!==e||ze!==r)&&(Rn(),Nn(e,r));do try{Jp();break}catch(m){Yc(e,m)}while(!0);if(qa(),Ei.current=u,ae=o,je!==null?r=0:(He=null,ze=0,r=Ne),(An&jn)!==0)Nn(e,0);else if(r!==0){if(r===2&&(ae|=64,e.hydrate&&(e.hydrate=!1,Oa(e.containerInfo)),n=rl(e),n!==0&&(r=Sr(e,n))),r===1)throw t=Ci,Nn(e,0),Ln(e,n),nt(e,_e()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(s(345));case 2:tn(e);break;case 3:if(Ln(e,n),(n&62914560)===n&&(r=bo+500-_e(),10<r)){if(Yn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Dl(tn.bind(null,e),r);break}tn(e);break;case 4:if(Ln(e,n),(n&4186112)===n)break;for(r=e.eventTimes,o=-1;0<n;){var d=31-Ct(n);u=1<<d,d=r[d],d>o&&(o=d),n&=~u}if(n=o,n=_e()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*qp(n/1960))-n,10<n){e.timeoutHandle=Dl(tn.bind(null,e),n);break}tn(e);break;case 5:tn(e);break;default:throw Error(s(329))}}return nt(e,_e()),e.callbackNode===t?Wc.bind(null,e):null}function Ln(e,t){for(t&=~xo,t&=~jn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function Io(e){if((ae&48)!==0)throw Error(s(327));if(zt(),e===He&&(e.expiredLanes&ze)!==0){var t=ze,n=Sr(e,t);(An&jn)!==0&&(t=Yn(e,t),n=Sr(e,t))}else t=Yn(e,0),n=Sr(e,t);if(e.tag!==0&&n===2&&(ae|=64,e.hydrate&&(e.hydrate=!1,Oa(e.containerInfo)),t=rl(e),t!==0&&(n=Sr(e,t))),n===1)throw n=Ci,Nn(e,0),Ln(e,t),nt(e,_e()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e),nt(e,_e()),null}function Vp(){if(xt!==null){var e=xt;xt=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,nt(t,_e())})}ct()}function qc(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Rn(),ct())}}function Vc(e,t){var n=ae;ae&=-2,ae|=8;try{return e(t)}finally{ae=n,ae===0&&(Rn(),ct())}}function Li(e,t){Ce(wo,en),en|=t,An|=t}function Ao(){en=wo.current,Ee(wo)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pp(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:Pn(),Ee($e),Ee(De),eo();break;case 5:Xa(r);break;case 4:Pn();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:Va(r);break;case 23:case 24:Ao()}n=n.return}He=e,je=Ht(e.current,null),ze=en=An=t,Ne=0,Ci=null,xo=jn=yr=0}function Yc(e,t){do{var n=je;try{if(qa(),dr.current=Si,wi){for(var r=Ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wi=!1}if(pr=0,Le=Oe=Ae=null,hr=!1,yo.current=null,n===null||n.return===null){Ne=1,Ci=t,je=null;break}e:{var u=e,d=n.return,m=n,y=t;if(t=ze,m.flags|=2048,m.firstEffect=m.lastEffect=null,y!==null&&typeof y=="object"&&typeof y.then=="function"){var C=y;if((m.mode&2)===0){var $=m.alternate;$?(m.updateQueue=$.updateQueue,m.memoizedState=$.memoizedState,m.lanes=$.lanes):(m.updateQueue=null,m.memoizedState=null)}var le=(Pe.current&1)!==0,_=d;do{var K;if(K=_.tag===13){var oe=_.memoizedState;if(oe!==null)K=oe.dehydrated!==null;else{var re=_.memoizedProps;K=re.fallback===void 0?!1:re.unstable_avoidThisFallback!==!0?!0:!le}}if(K){var S=_.updateQueue;if(S===null){var k=new Set;k.add(C),_.updateQueue=k}else S.add(C);if((_.mode&2)===0){if(_.flags|=64,m.flags|=16384,m.flags&=-2981,m.tag===1)if(m.alternate===null)m.tag=17;else{var b=Lt(-1,1);b.tag=2,Nt(m,b)}m.lanes|=1;break e}y=void 0,m=t;var A=u.pingCache;if(A===null?(A=u.pingCache=new Bp,y=new Set,A.set(C,y)):(y=A.get(C),y===void 0&&(y=new Set,A.set(C,y))),!y.has(m)){y.add(m);var L=eh.bind(null,u,C,m);C.then(L,L)}_.flags|=4096,_.lanes=t;break e}_=_.return}while(_!==null);y=Error((ln(m.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ne!==5&&(Ne=2),y=ho(y,m),_=d;do{switch(_.tag){case 3:u=y,_.flags|=4096,t&=-t,_.lanes|=t;var de=Dc(_,u,t);Zl(_,de);break e;case 1:u=y;var Q=_.type,pe=_.stateNode;if((_.flags&64)===0&&(typeof Q.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(ht===null||!ht.has(pe)))){_.flags|=4096,t&=-t,_.lanes|=t;var me=_c(_,u,t);Zl(_,me);break e}}_=_.return}while(_!==null)}Xc(n)}catch(he){t=he,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function Jc(){var e=Ei.current;return Ei.current=Si,e===null?Si:e}function Sr(e,t){var n=ae;ae|=16;var r=Jc();He===e&&ze===t||Nn(e,t);do try{Yp();break}catch(o){Yc(e,o)}while(!0);if(qa(),ae=n,Ei.current=r,je!==null)throw Error(s(261));return He=null,ze=0,Ne}function Yp(){for(;je!==null;)Qc(je)}function Jp(){for(;je!==null&&!jp();)Qc(je)}function Qc(e){var t=eu(e.alternate,e,en);e.memoizedProps=e.pendingProps,t===null?Xc(e):je=t,yo.current=null}function Xc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=Fp(n,t,en),n!==null){je=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(en&1073741824)!==0||(n.mode&4)===0){for(var r=0,o=n.child;o!==null;)r|=o.lanes|o.childLanes,o=o.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Hp(t),n!==null){n.flags&=2047,je=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ne===0&&(Ne=5)}function tn(e){var t=Tn();return Qt(99,Qp.bind(null,e,t)),null}function Qp(e,t){do zt();while(wr!==null);if((ae&48)!==0)throw Error(s(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null;var r=n.lanes|n.childLanes,o=r,u=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var d=e.eventTimes,m=e.expirationTimes;0<u;){var y=31-Ct(u),C=1<<y;o[y]=0,d[y]=-1,m[y]=-1,u&=~C}if(xt!==null&&(r&24)===0&&xt.has(e)&&xt.delete(e),e===He&&(je=He=null,ze=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(o=ae,ae|=32,yo.current=null,Ma=Yr,d=Sl(),ja(d)){if("selectionStart"in d)m={start:d.selectionStart,end:d.selectionEnd};else e:if(m=(m=d.ownerDocument)&&m.defaultView||window,(C=m.getSelection&&m.getSelection())&&C.rangeCount!==0){m=C.anchorNode,u=C.anchorOffset,y=C.focusNode,C=C.focusOffset;try{m.nodeType,y.nodeType}catch{m=null;break e}var $=0,le=-1,_=-1,K=0,oe=0,re=d,S=null;t:for(;;){for(var k;re!==m||u!==0&&re.nodeType!==3||(le=$+u),re!==y||C!==0&&re.nodeType!==3||(_=$+C),re.nodeType===3&&($+=re.nodeValue.length),(k=re.firstChild)!==null;)S=re,re=k;for(;;){if(re===d)break t;if(S===m&&++K===u&&(le=$),S===y&&++oe===C&&(_=$),(k=re.nextSibling)!==null)break;re=S,S=re.parentNode}re=k}m=le===-1||_===-1?null:{start:le,end:_}}else m=null;m=m||{start:0,end:0}}else m=null;Da={focusedElem:d,selectionRange:m},Yr=!1,br=null,ji=!1,Y=r;do try{Xp()}catch(he){if(Y===null)throw Error(s(330));Ft(Y,he),Y=Y.nextEffect}while(Y!==null);br=null,Y=r;do try{for(d=e;Y!==null;){var b=Y.flags;if(b&16&&zn(Y.stateNode,""),b&128){var A=Y.alternate;if(A!==null){var L=A.ref;L!==null&&(typeof L=="function"?L(null):L.current=null)}}switch(b&1038){case 2:Gc(Y),Y.flags&=-3;break;case 6:Gc(Y),Y.flags&=-3,vo(Y.alternate,Y);break;case 1024:Y.flags&=-1025;break;case 1028:Y.flags&=-1025,vo(Y.alternate,Y);break;case 4:vo(Y.alternate,Y);break;case 8:m=Y,Uc(d,m);var de=m.alternate;Hc(m),de!==null&&Hc(de)}Y=Y.nextEffect}}catch(he){if(Y===null)throw Error(s(330));Ft(Y,he),Y=Y.nextEffect}while(Y!==null);if(L=Da,A=Sl(),b=L.focusedElem,d=L.selectionRange,A!==b&&b&&b.ownerDocument&&bl(b.ownerDocument.documentElement,b)){for(d!==null&&ja(b)&&(A=d.start,L=d.end,L===void 0&&(L=A),"selectionStart"in b?(b.selectionStart=A,b.selectionEnd=Math.min(L,b.value.length)):(L=(A=b.ownerDocument||document)&&A.defaultView||window,L.getSelection&&(L=L.getSelection(),m=b.textContent.length,de=Math.min(d.start,m),d=d.end===void 0?de:Math.min(d.end,m),!L.extend&&de>d&&(m=d,d=de,de=m),m=kl(b,de),u=kl(b,d),m&&u&&(L.rangeCount!==1||L.anchorNode!==m.node||L.anchorOffset!==m.offset||L.focusNode!==u.node||L.focusOffset!==u.offset)&&(A=A.createRange(),A.setStart(m.node,m.offset),L.removeAllRanges(),de>d?(L.addRange(A),L.extend(u.node,u.offset)):(A.setEnd(u.node,u.offset),L.addRange(A)))))),A=[],L=b;L=L.parentNode;)L.nodeType===1&&A.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<A.length;b++)L=A[b],L.element.scrollLeft=L.left,L.element.scrollTop=L.top}Yr=!!Ma,Da=Ma=null,e.current=n,Y=r;do try{for(b=e;Y!==null;){var Q=Y.flags;if(Q&36&&$p(b,Y.alternate,Y),Q&128){A=void 0;var pe=Y.ref;if(pe!==null){var me=Y.stateNode;Y.tag,A=me,typeof pe=="function"?pe(A):pe.current=A}}Y=Y.nextEffect}}catch(he){if(Y===null)throw Error(s(330));Ft(Y,he),Y=Y.nextEffect}while(Y!==null);Y=null,Lp(),ae=o}else e.current=n;if(Dt)Dt=!1,wr=e,xr=t;else for(Y=r;Y!==null;)t=Y.nextEffect,Y.nextEffect=null,Y.flags&8&&(Q=Y,Q.sibling=null,Q.stateNode=null),Y=t;if(r=e.pendingLanes,r===0&&(ht=null),r===1?e===Po?kr++:(kr=0,Po=e):kr=0,n=n.stateNode,Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ha,n,void 0,(n.current.flags&64)===64)}catch{}if(nt(e,_e()),Pi)throw Pi=!1,e=To,To=null,e;return(ae&8)!==0||ct(),null}function Xp(){for(;Y!==null;){var e=Y.alternate;ji||br===null||((Y.flags&8)!==0?Us(Y,br)&&(ji=!0):Y.tag===13&&Wp(e,Y)&&Us(Y,br)&&(ji=!0));var t=Y.flags;(t&256)!==0&&Up(e,Y),(t&512)===0||Dt||(Dt=!0,ar(97,function(){return zt(),null})),Y=Y.nextEffect}}function zt(){if(xr!==90){var e=97<xr?97:xr;return xr=90,Qt(e,Kp)}return!1}function Zp(e,t){Eo.push(t,e),Dt||(Dt=!0,ar(97,function(){return zt(),null}))}function Zc(e,t){Co.push(t,e),Dt||(Dt=!0,ar(97,function(){return zt(),null}))}function Kp(){if(wr===null)return!1;var e=wr;if(wr=null,(ae&48)!==0)throw Error(s(331));var t=ae;ae|=32;var n=Co;Co=[];for(var r=0;r<n.length;r+=2){var o=n[r],u=n[r+1],d=o.destroy;if(o.destroy=void 0,typeof d=="function")try{d()}catch(y){if(u===null)throw Error(s(330));Ft(u,y)}}for(n=Eo,Eo=[],r=0;r<n.length;r+=2){o=n[r],u=n[r+1];try{var m=o.create;o.destroy=m()}catch(y){if(u===null)throw Error(s(330));Ft(u,y)}}for(m=e.current.firstEffect;m!==null;)e=m.nextEffect,m.nextEffect=null,m.flags&8&&(m.sibling=null,m.stateNode=null),m=e;return ae=t,ct(),!0}function Kc(e,t,n){t=ho(n,t),t=Dc(e,t,1),Nt(e,t),t=Qe(),e=Ri(e,1),e!==null&&(Vr(e,1,t),nt(e,t))}function Ft(e,t){if(e.tag===3)Kc(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Kc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=ho(t,e);var o=_c(n,e,1);if(Nt(n,o),o=Qe(),n=Ri(n,1),n!==null)Vr(n,1,o),nt(n,o);else if(typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function eh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(ze&n)===n&&(Ne===4||Ne===3&&(ze&62914560)===ze&&500>_e()-bo?Nn(e,0):xo|=n),nt(e,t)}function th(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=Tn()===99?1:2:(kt===0&&(kt=An),t=fn(62914560&~kt),t===0&&(t=4194304))),n=Qe(),e=Ri(e,t),e!==null&&(Vr(e,t,n),nt(e,n))}var eu;eu=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)at=!0;else if((n&r)!==0)at=(e.flags&16384)!==0;else{switch(at=!1,t.tag){case 3:Ec(t),Ka();break;case 5:oc(t);break;case 1:We(t.type)&&oi(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var o=t.type._context;Ce(ci,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?Cc(e,t,n):(Ce(Pe,Pe.current&1),t=wt(e,t,n),t!==null?t.sibling:null);Ce(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return Rc(e,t,n);t.flags|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ce(Pe,Pe.current),r)break;return null;case 23:case 24:return t.lanes=0,so(e,t,n)}return wt(e,t,n)}else at=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=Sn(t,De.current),Cn(t,n),o=no(null,t,r,e,o,n),t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)){var u=!0;oi(t)}else u=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ya(t);var d=r.getDerivedStateFromProps;typeof d=="function"&&pi(t,r,d,e),o.updater=hi,t.stateNode=o,o._reactInternals=t,Ja(t,r,e,n),t=co(null,t,r,!0,u,n)}else t.tag=0,Ve(null,t,o,n),t=t.child;return t;case 16:o=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,u=o._init,o=u(o._payload),t.type=o,u=t.tag=rh(o),e=it(o,e),u){case 0:t=lo(null,t,o,e,n);break e;case 1:t=Tc(null,t,o,e,n);break e;case 11:t=xc(null,t,o,e,n);break e;case 14:t=kc(null,t,o,it(o.type,e),r,n);break e}throw Error(s(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),lo(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Tc(e,t,r,o,n);case 3:if(Ec(t),r=t.updateQueue,e===null||r===null)throw Error(s(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,Xl(e,t),or(t,r,null,n),r=t.memoizedState.element,r===o)Ka(),t=wt(e,t,n);else{if(o=t.stateNode,(u=o.hydrate)&&(Mt=wn(t.stateNode.containerInfo.firstChild),yt=t,u=dt=!0),u){if(e=o.mutableSourceEagerHydrationData,e!=null)for(o=0;o<e.length;o+=2)u=e[o],u._workInProgressVersionPrimary=e[o+1],In.push(u);for(n=ac(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Ve(e,t,r,n),Ka();t=t.child}return t;case 5:return oc(t),e===null&&Za(t),r=t.type,o=t.pendingProps,u=e!==null?e.memoizedProps:null,d=o.children,_a(r,o)?d=null:u!==null&&_a(r,u)&&(t.flags|=16),Sc(e,t),Ve(e,t,d,n),t.child;case 6:return e===null&&Za(t),null;case 13:return Cc(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gi(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),xc(e,t,r,o,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,d=t.memoizedProps,u=o.value;var m=t.type._context;if(Ce(ci,m._currentValue),m._currentValue=u,d!==null)if(m=d.value,u=Ke(m,u)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(m,u):1073741823)|0,u===0){if(d.children===o.children&&!$e.current){t=wt(e,t,n);break e}}else for(m=t.child,m!==null&&(m.return=t);m!==null;){var y=m.dependencies;if(y!==null){d=m.child;for(var C=y.firstContext;C!==null;){if(C.context===r&&(C.observedBits&u)!==0){m.tag===1&&(C=Lt(-1,n&-n),C.tag=2,Nt(m,C)),m.lanes|=n,C=m.alternate,C!==null&&(C.lanes|=n),Ql(m.return,n),y.lanes|=n;break}C=C.next}}else d=m.tag===10&&m.type===t.type?null:m.child;if(d!==null)d.return=m;else for(d=m;d!==null;){if(d===t){d=null;break}if(m=d.sibling,m!==null){m.return=d.return,d=m;break}d=d.return}m=d}Ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,u=t.pendingProps,r=u.children,Cn(t,n),o=et(o,u.unstable_observedBits),r=r(o),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return o=t.type,u=it(o,t.pendingProps),u=it(o.type,u),kc(e,t,o,u,r,n);case 15:return bc(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,We(r)?(e=!0,oi(t)):e=!1,Cn(t,n),nc(t,r,o),Ja(t,r,o,n),co(null,t,r,!0,e,n);case 19:return Rc(e,t,n);case 23:return so(e,t,n);case 24:return so(e,t,n)}throw Error(s(156,t.tag))};function nh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new nh(e,t,n,r)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rh(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===Ie)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,r,o,u){var d=2;if(r=e,typeof e=="function")jo(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case W:return Mn(n.children,o,u,t);case B:d=8,o|=16;break;case ce:d=8,o|=1;break;case te:return e=rt(12,n,t,o|8),e.elementType=te,e.type=te,e.lanes=u,e;case fe:return e=rt(13,n,t,o),e.type=fe,e.elementType=fe,e.lanes=u,e;case se:return e=rt(19,n,t,o),e.elementType=se,e.lanes=u,e;case E:return Ro(n,o,u,t);case j:return e=rt(24,n,t,o),e.elementType=j,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:d=10;break e;case ee:d=9;break e;case ie:d=11;break e;case Ie:d=14;break e;case T:d=16,r=null;break e;case D:d=22;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=rt(d,n,t,o),t.elementType=e,t.type=r,t.lanes=u,t}function Mn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=rt(23,e,r,t),e.elementType=E,e.lanes=n,e}function Lo(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ih(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.mutableSourceEagerHydrationData=null}function ah(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mi(e,t,n,r){var o=t.current,u=Qe(),d=_t(o);e:if(n){n=n._reactInternals;t:{if(qt(n)!==n||n.tag!==1)throw Error(s(170));var m=n;do{switch(m.tag){case 3:m=m.stateNode.context;break t;case 1:if(We(m.type)){m=m.stateNode.__reactInternalMemoizedMergedChildContext;break t}}m=m.return}while(m!==null);throw Error(s(171))}if(n.tag===1){var y=n.type;if(We(y)){n=Hl(n,y,m);break e}}n=m}else n=jt;return t.context===null?t.context=n:t.pendingContext=n,t=Lt(u,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Nt(o,t),Ot(o,d,u),d}function Mo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Do(e,t){tu(e,t),(e=e.alternate)&&tu(e,t)}function oh(){return null}function _o(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new ih(e,t,n!=null&&n.hydrate===!0),t=rt(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Ya(t),e[xn]=n.current,Al(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var o=t._getVersion;o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=n}_o.prototype.render=function(e){Mi(e,this._internalRoot,null,null)},_o.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Mi(null,e,null,function(){t[xn]=null})};function Tr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sh(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new _o(e,0,t?{hydrate:!0}:void 0)}function Di(e,t,n,r,o){var u=n._reactRootContainer;if(u){var d=u._internalRoot;if(typeof o=="function"){var m=o;o=function(){var C=Mo(d);m.call(C)}}Mi(t,d,e,o)}else{if(u=n._reactRootContainer=sh(n,r),d=u._internalRoot,typeof o=="function"){var y=o;o=function(){var C=Mo(d);y.call(C)}}Vc(function(){Mi(t,d,e,o)})}return Mo(d)}$s=function(e){if(e.tag===13){var t=Qe();Ot(e,4,t),Do(e,4)}},pa=function(e){if(e.tag===13){var t=Qe();Ot(e,67108864,t),Do(e,67108864)}},Ws=function(e){if(e.tag===13){var t=Qe(),n=_t(e);Ot(e,n,t),Do(e,n)}},qs=function(e,t){return t()},aa=function(e,t,n){switch(t){case"input":if(Qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ii(r);if(!o)throw Error(s(90));Ts(r),Qi(r,o)}}}break;case"textarea":As(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}},oa=qc,zs=function(e,t,n,r,o){var u=ae;ae|=4;try{return Qt(98,e.bind(null,t,n,r,o))}finally{ae=u,ae===0&&(Rn(),ct())}},sa=function(){(ae&49)===0&&(Vp(),zt())},Fs=function(e,t){var n=ae;ae|=2;try{return e(t)}finally{ae=n,ae===0&&(Rn(),ct())}};function nu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tr(t))throw Error(s(200));return ah(e,t,null,n)}var lh={Events:[ir,kn,ii,_s,Os,zt,{current:!1}]},Er={findFiberByHostInstance:Vt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},ch={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gs(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||oh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Ha=_i.inject(ch),Jt=_i}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lh,Xe.createPortal=nu,Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):Error(s(268,Object.keys(e)));return e=Gs(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e,t){var n=ae;if((n&48)!==0)return e(t);ae|=1;try{if(e)return Qt(99,e.bind(null,t))}finally{ae=n,ct()}},Xe.hydrate=function(e,t,n){if(!Tr(t))throw Error(s(200));return Di(null,e,t,!0,n)},Xe.render=function(e,t,n){if(!Tr(t))throw Error(s(200));return Di(null,e,t,!1,n)},Xe.unmountComponentAtNode=function(e){if(!Tr(e))throw Error(s(40));return e._reactRootContainer?(Vc(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1},Xe.unstable_batchedUpdates=qc,Xe.unstable_createPortal=function(e,t){return nu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Tr(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Di(e,t,n,!1,r)},Xe.version="17.0.2",Xe}var du;function vh(){if(du)return Ho.exports;du=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),Ho.exports=gh(),Ho.exports}var yh=vh();const wh=Dr(yh);function ts(i,a){return ts=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,s){return l.__proto__=s,l},ts(i,a)}function gt(i,a){i.prototype=Object.create(a.prototype),i.prototype.constructor=i,ts(i,a)}var Uo={exports:{}},$o,pu;function xh(){if(pu)return $o;pu=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $o=i,$o}var Wo,hu;function kh(){if(hu)return Wo;hu=1;var i=xh();function a(){}function l(){}return l.resetWarningCache=a,Wo=function(){function s(f,w,g,x,v,P){if(P!==i){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}s.isRequired=s;function c(){return s}var h={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:l,resetWarningCache:a};return h.PropTypes=h,h},Wo}var fu;function bh(){return fu||(fu=1,Uo.exports=kh()()),Uo.exports}var Sh=bh();const mu=Dr(Sh);function Me(){return Me=Object.assign?Object.assign.bind():function(i){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)({}).hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},Me.apply(null,arguments)}function Oi(i){return i.charAt(0)==="/"}function qo(i,a){for(var l=a,s=l+1,c=i.length;s<c;l+=1,s+=1)i[l]=i[s];i.pop()}function Th(i,a){a===void 0&&(a="");var l=i&&i.split("/")||[],s=a&&a.split("/")||[],c=i&&Oi(i),h=a&&Oi(a),f=c||h;if(i&&Oi(i)?s=l:l.length&&(s.pop(),s=s.concat(l)),!s.length)return"/";var w;if(s.length){var g=s[s.length-1];w=g==="."||g===".."||g===""}else w=!1;for(var x=0,v=s.length;v>=0;v--){var P=s[v];P==="."?qo(s,v):P===".."?(qo(s,v),x++):x&&(qo(s,v),x--)}if(!f)for(;x--;x)s.unshift("..");f&&s[0]!==""&&(!s[0]||!Oi(s[0]))&&s.unshift("");var I=s.join("/");return w&&I.substr(-1)!=="/"&&(I+="/"),I}function gu(i){return i.valueOf?i.valueOf():Object.prototype.valueOf.call(i)}function Fi(i,a){if(i===a)return!0;if(i==null||a==null)return!1;if(Array.isArray(i))return Array.isArray(a)&&i.length===a.length&&i.every(function(c,h){return Fi(c,a[h])});if(typeof i=="object"||typeof a=="object"){var l=gu(i),s=gu(a);return l!==i||s!==a?Fi(l,s):Object.keys(Object.assign({},i,a)).every(function(c){return Fi(i[c],a[c])})}return!1}var Eh="Invariant failed";function $t(i,a){throw new Error(Eh)}function Lr(i){return i.charAt(0)==="/"?i:"/"+i}function vu(i){return i.charAt(0)==="/"?i.substr(1):i}function Ch(i,a){return i.toLowerCase().indexOf(a.toLowerCase())===0&&"/?#".indexOf(i.charAt(a.length))!==-1}function qu(i,a){return Ch(i,a)?i.substr(a.length):i}function Vu(i){return i.charAt(i.length-1)==="/"?i.slice(0,-1):i}function Ph(i){var a=i||"/",l="",s="",c=a.indexOf("#");c!==-1&&(s=a.substr(c),a=a.substr(0,c));var h=a.indexOf("?");return h!==-1&&(l=a.substr(h),a=a.substr(0,h)),{pathname:a,search:l==="?"?"":l,hash:s==="#"?"":s}}function Ye(i){var a=i.pathname,l=i.search,s=i.hash,c=a||"/";return l&&l!=="?"&&(c+=l.charAt(0)==="?"?l:"?"+l),s&&s!=="#"&&(c+=s.charAt(0)==="#"?s:"#"+s),c}function Be(i,a,l,s){var c;typeof i=="string"?(c=Ph(i),c.state=a):(c=Me({},i),c.pathname===void 0&&(c.pathname=""),c.search?c.search.charAt(0)!=="?"&&(c.search="?"+c.search):c.search="",c.hash?c.hash.charAt(0)!=="#"&&(c.hash="#"+c.hash):c.hash="",a!==void 0&&c.state===void 0&&(c.state=a));try{c.pathname=decodeURI(c.pathname)}catch(h){throw h instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):h}return l&&(c.key=l),s?c.pathname?c.pathname.charAt(0)!=="/"&&(c.pathname=Th(c.pathname,s.pathname)):c.pathname=s.pathname:c.pathname||(c.pathname="/"),c}function Ih(i,a){return i.pathname===a.pathname&&i.search===a.search&&i.hash===a.hash&&i.key===a.key&&Fi(i.state,a.state)}function cs(){var i=null;function a(f){return i=f,function(){i===f&&(i=null)}}function l(f,w,g,x){if(i!=null){var v=typeof i=="function"?i(f,w):i;typeof v=="string"?typeof g=="function"?g(v,x):x(!0):x(v!==!1)}else x(!0)}var s=[];function c(f){var w=!0;function g(){w&&f.apply(void 0,arguments)}return s.push(g),function(){w=!1,s=s.filter(function(x){return x!==g})}}function h(){for(var f=arguments.length,w=new Array(f),g=0;g<f;g++)w[g]=arguments[g];s.forEach(function(x){return x.apply(void 0,w)})}return{setPrompt:a,confirmTransitionTo:l,appendListener:c,notifyListeners:h}}var Yu=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ju(i,a){a(window.confirm(i))}function Ah(){var i=window.navigator.userAgent;return(i.indexOf("Android 2.")!==-1||i.indexOf("Android 4.0")!==-1)&&i.indexOf("Mobile Safari")!==-1&&i.indexOf("Chrome")===-1&&i.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function jh(){return window.navigator.userAgent.indexOf("Trident")===-1}function Rh(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Lh(i){return i.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var yu="popstate",wu="hashchange";function xu(){try{return window.history.state||{}}catch{return{}}}function Nh(i){i===void 0&&(i={}),Yu||$t();var a=window.history,l=Ah(),s=!jh(),c=i,h=c.forceRefresh,f=h===void 0?!1:h,w=c.getUserConfirmation,g=w===void 0?Ju:w,x=c.keyLength,v=x===void 0?6:x,P=i.basename?Vu(Lr(i.basename)):"";function I(F){var B=F||{},E=B.key,j=B.state,N=window.location,J=N.pathname,Z=N.search,ve=N.hash,be=J+Z+ve;return P&&(be=qu(be,P)),Be(be,j,E)}function O(){return Math.random().toString(36).substr(2,v)}var z=cs();function q(F){Me(D,F),D.length=a.length,z.notifyListeners(D.location,D.action)}function X(F){Lh(F)||H(I(F.state))}function M(){H(I(xu()))}var G=!1;function H(F){if(G)G=!1,q();else{var B="POP";z.confirmTransitionTo(F,B,g,function(E){E?q({action:B,location:F}):ne(F)})}}function ne(F){var B=D.location,E=U.indexOf(B.key);E===-1&&(E=0);var j=U.indexOf(F.key);j===-1&&(j=0);var N=E-j;N&&(G=!0,te(N))}var R=I(xu()),U=[R.key];function V(F){return P+Ye(F)}function W(F,B){var E="PUSH",j=Be(F,B,O(),D.location);z.confirmTransitionTo(j,E,g,function(N){if(N){var J=V(j),Z=j.key,ve=j.state;if(l)if(a.pushState({key:Z,state:ve},null,J),f)window.location.href=J;else{var be=U.indexOf(D.location.key),Re=U.slice(0,be+1);Re.push(j.key),U=Re,q({action:E,location:j})}else window.location.href=J}})}function ce(F,B){var E="REPLACE",j=Be(F,B,O(),D.location);z.confirmTransitionTo(j,E,g,function(N){if(N){var J=V(j),Z=j.key,ve=j.state;if(l)if(a.replaceState({key:Z,state:ve},null,J),f)window.location.replace(J);else{var be=U.indexOf(D.location.key);be!==-1&&(U[be]=j.key),q({action:E,location:j})}else window.location.replace(J)}})}function te(F){a.go(F)}function ue(){te(-1)}function ee(){te(1)}var ie=0;function fe(F){ie+=F,ie===1&&F===1?(window.addEventListener(yu,X),s&&window.addEventListener(wu,M)):ie===0&&(window.removeEventListener(yu,X),s&&window.removeEventListener(wu,M))}var se=!1;function Ie(F){F===void 0&&(F=!1);var B=z.setPrompt(F);return se||(fe(1),se=!0),function(){return se&&(se=!1,fe(-1)),B()}}function T(F){var B=z.appendListener(F);return fe(1),function(){fe(-1),B()}}var D={length:a.length,action:"POP",location:R,createHref:V,push:W,replace:ce,go:te,goBack:ue,goForward:ee,block:Ie,listen:T};return D}var ku="hashchange",Mh={hashbang:{encodePath:function(a){return a.charAt(0)==="!"?a:"!/"+vu(a)},decodePath:function(a){return a.charAt(0)==="!"?a.substr(1):a}},noslash:{encodePath:vu,decodePath:Lr},slash:{encodePath:Lr,decodePath:Lr}};function Qu(i){var a=i.indexOf("#");return a===-1?i:i.slice(0,a)}function Cr(){var i=window.location.href,a=i.indexOf("#");return a===-1?"":i.substring(a+1)}function Dh(i){window.location.hash=i}function Vo(i){window.location.replace(Qu(window.location.href)+"#"+i)}function _h(i){i===void 0&&(i={}),Yu||$t();var a=window.history;Rh();var l=i,s=l.getUserConfirmation,c=s===void 0?Ju:s,h=l.hashType,f=h===void 0?"slash":h,w=i.basename?Vu(Lr(i.basename)):"",g=Mh[f],x=g.encodePath,v=g.decodePath;function P(){var B=v(Cr());return w&&(B=qu(B,w)),Be(B)}var I=cs();function O(B){Me(F,B),F.length=a.length,I.notifyListeners(F.location,F.action)}var z=!1,q=null;function X(B,E){return B.pathname===E.pathname&&B.search===E.search&&B.hash===E.hash}function M(){var B=Cr(),E=x(B);if(B!==E)Vo(E);else{var j=P(),N=F.location;if(!z&&X(N,j)||q===Ye(j))return;q=null,G(j)}}function G(B){if(z)z=!1,O();else{var E="POP";I.confirmTransitionTo(B,E,c,function(j){j?O({action:E,location:B}):H(B)})}}function H(B){var E=F.location,j=V.lastIndexOf(Ye(E));j===-1&&(j=0);var N=V.lastIndexOf(Ye(B));N===-1&&(N=0);var J=j-N;J&&(z=!0,ue(J))}var ne=Cr(),R=x(ne);ne!==R&&Vo(R);var U=P(),V=[Ye(U)];function W(B){var E=document.querySelector("base"),j="";return E&&E.getAttribute("href")&&(j=Qu(window.location.href)),j+"#"+x(w+Ye(B))}function ce(B,E){var j="PUSH",N=Be(B,void 0,void 0,F.location);I.confirmTransitionTo(N,j,c,function(J){if(J){var Z=Ye(N),ve=x(w+Z),be=Cr()!==ve;if(be){q=Z,Dh(ve);var Re=V.lastIndexOf(Ye(F.location)),Ue=V.slice(0,Re+1);Ue.push(Z),V=Ue,O({action:j,location:N})}else O()}})}function te(B,E){var j="REPLACE",N=Be(B,void 0,void 0,F.location);I.confirmTransitionTo(N,j,c,function(J){if(J){var Z=Ye(N),ve=x(w+Z),be=Cr()!==ve;be&&(q=Z,Vo(ve));var Re=V.indexOf(Ye(F.location));Re!==-1&&(V[Re]=Z),O({action:j,location:N})}})}function ue(B){a.go(B)}function ee(){ue(-1)}function ie(){ue(1)}var fe=0;function se(B){fe+=B,fe===1&&B===1?window.addEventListener(ku,M):fe===0&&window.removeEventListener(ku,M)}var Ie=!1;function T(B){B===void 0&&(B=!1);var E=I.setPrompt(B);return Ie||(se(1),Ie=!0),function(){return Ie&&(Ie=!1,se(-1)),E()}}function D(B){var E=I.appendListener(B);return se(1),function(){se(-1),E()}}var F={length:a.length,action:"POP",location:U,createHref:W,push:ce,replace:te,go:ue,goBack:ee,goForward:ie,block:T,listen:D};return F}function bu(i,a,l){return Math.min(Math.max(i,a),l)}function Oh(i){i===void 0&&(i={});var a=i,l=a.getUserConfirmation,s=a.initialEntries,c=s===void 0?["/"]:s,h=a.initialIndex,f=h===void 0?0:h,w=a.keyLength,g=w===void 0?6:w,x=cs();function v(W){Me(V,W),V.length=V.entries.length,x.notifyListeners(V.location,V.action)}function P(){return Math.random().toString(36).substr(2,g)}var I=bu(f,0,c.length-1),O=c.map(function(W){return typeof W=="string"?Be(W,void 0,P()):Be(W,void 0,W.key||P())}),z=Ye;function q(W,ce){var te="PUSH",ue=Be(W,ce,P(),V.location);x.confirmTransitionTo(ue,te,l,function(ee){if(ee){var ie=V.index,fe=ie+1,se=V.entries.slice(0);se.length>fe?se.splice(fe,se.length-fe,ue):se.push(ue),v({action:te,location:ue,index:fe,entries:se})}})}function X(W,ce){var te="REPLACE",ue=Be(W,ce,P(),V.location);x.confirmTransitionTo(ue,te,l,function(ee){ee&&(V.entries[V.index]=ue,v({action:te,location:ue}))})}function M(W){var ce=bu(V.index+W,0,V.entries.length-1),te="POP",ue=V.entries[ce];x.confirmTransitionTo(ue,te,l,function(ee){ee?v({action:te,location:ue,index:ce}):v()})}function G(){M(-1)}function H(){M(1)}function ne(W){var ce=V.index+W;return ce>=0&&ce<V.entries.length}function R(W){return W===void 0&&(W=!1),x.setPrompt(W)}function U(W){return x.appendListener(W)}var V={length:O.length,action:"POP",location:O[I],index:I,entries:O,createHref:z,push:q,replace:X,go:M,goBack:G,goForward:H,canGo:ne,block:R,listen:U};return V}var nn={exports:{}},Yo,Su;function zh(){return Su||(Su=1,Yo=Array.isArray||function(i){return Object.prototype.toString.call(i)=="[object Array]"}),Yo}var Tu;function Fh(){if(Tu)return nn.exports;Tu=1;var i=zh();nn.exports=X,nn.exports.parse=l,nn.exports.compile=c,nn.exports.tokensToFunction=w,nn.exports.tokensToRegExp=q;var a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function l(M,G){for(var H=[],ne=0,R=0,U="",V=G&&G.delimiter||"/",W;(W=a.exec(M))!=null;){var ce=W[0],te=W[1],ue=W.index;if(U+=M.slice(R,ue),R=ue+ce.length,te){U+=te[1];continue}var ee=M[R],ie=W[2],fe=W[3],se=W[4],Ie=W[5],T=W[6],D=W[7];U&&(H.push(U),U="");var F=ie!=null&&ee!=null&&ee!==ie,B=T==="+"||T==="*",E=T==="?"||T==="*",j=ie||V,N=se||Ie,J=ie||(typeof H[H.length-1]=="string"?H[H.length-1]:"");H.push({name:fe||ne++,prefix:ie||"",delimiter:j,optional:E,repeat:B,partial:F,asterisk:!!D,pattern:N?x(N):D?".*":s(j,J)})}return R<M.length&&(U+=M.substr(R)),U&&H.push(U),H}function s(M,G){return!G||G.indexOf(M)>-1?"[^"+g(M)+"]+?":g(G)+"|(?:(?!"+g(G)+")[^"+g(M)+"])+?"}function c(M,G){return w(l(M,G),G)}function h(M){return encodeURI(M).replace(/[\/?#]/g,function(G){return"%"+G.charCodeAt(0).toString(16).toUpperCase()})}function f(M){return encodeURI(M).replace(/[?#]/g,function(G){return"%"+G.charCodeAt(0).toString(16).toUpperCase()})}function w(M,G){for(var H=new Array(M.length),ne=0;ne<M.length;ne++)typeof M[ne]=="object"&&(H[ne]=new RegExp("^(?:"+M[ne].pattern+")$",P(G)));return function(R,U){for(var V="",W=R||{},ce=U||{},te=ce.pretty?h:encodeURIComponent,ue=0;ue<M.length;ue++){var ee=M[ue];if(typeof ee=="string"){V+=ee;continue}var ie=W[ee.name],fe;if(ie==null)if(ee.optional){ee.partial&&(V+=ee.prefix);continue}else throw new TypeError('Expected "'+ee.name+'" to be defined');if(i(ie)){if(!ee.repeat)throw new TypeError('Expected "'+ee.name+'" to not repeat, but received `'+JSON.stringify(ie)+"`");if(ie.length===0){if(ee.optional)continue;throw new TypeError('Expected "'+ee.name+'" to not be empty')}for(var se=0;se<ie.length;se++){if(fe=te(ie[se]),!H[ue].test(fe))throw new TypeError('Expected all "'+ee.name+'" to match "'+ee.pattern+'", but received `'+JSON.stringify(fe)+"`");V+=(se===0?ee.prefix:ee.delimiter)+fe}continue}if(fe=ee.asterisk?f(ie):te(ie),!H[ue].test(fe))throw new TypeError('Expected "'+ee.name+'" to match "'+ee.pattern+'", but received "'+fe+'"');V+=ee.prefix+fe}return V}}function g(M){return M.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function x(M){return M.replace(/([=!:$\/()])/g,"\\$1")}function v(M,G){return M.keys=G,M}function P(M){return M&&M.sensitive?"":"i"}function I(M,G){var H=M.source.match(/\((?!\?)/g);if(H)for(var ne=0;ne<H.length;ne++)G.push({name:ne,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return v(M,G)}function O(M,G,H){for(var ne=[],R=0;R<M.length;R++)ne.push(X(M[R],G,H).source);var U=new RegExp("(?:"+ne.join("|")+")",P(H));return v(U,G)}function z(M,G,H){return q(l(M,H),G,H)}function q(M,G,H){i(G)||(H=G||H,G=[]),H=H||{};for(var ne=H.strict,R=H.end!==!1,U="",V=0;V<M.length;V++){var W=M[V];if(typeof W=="string")U+=g(W);else{var ce=g(W.prefix),te="(?:"+W.pattern+")";G.push(W),W.repeat&&(te+="(?:"+ce+te+")*"),W.optional?W.partial?te=ce+"("+te+")?":te="(?:"+ce+"("+te+"))?":te=ce+"("+te+")",U+=te}}var ue=g(H.delimiter||"/"),ee=U.slice(-ue.length)===ue;return ne||(U=(ee?U.slice(0,-ue.length):U)+"(?:"+ue+"(?=$))?"),R?U+="$":U+=ne&&ee?"":"(?="+ue+"|$)",v(new RegExp("^"+U,P(H)),G)}function X(M,G,H){return i(G)||(H=G||H,G=[]),H=H||{},M instanceof RegExp?I(M,G):i(M)?O(M,G,H):z(M,G,H)}return nn.exports}var Hh=Fh();const Xu=Dr(Hh);var Jo={exports:{}},xe={};var Eu;function Bh(){if(Eu)return xe;Eu=1;var i=typeof Symbol=="function"&&Symbol.for,a=i?Symbol.for("react.element"):60103,l=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,h=i?Symbol.for("react.profiler"):60114,f=i?Symbol.for("react.provider"):60109,w=i?Symbol.for("react.context"):60110,g=i?Symbol.for("react.async_mode"):60111,x=i?Symbol.for("react.concurrent_mode"):60111,v=i?Symbol.for("react.forward_ref"):60112,P=i?Symbol.for("react.suspense"):60113,I=i?Symbol.for("react.suspense_list"):60120,O=i?Symbol.for("react.memo"):60115,z=i?Symbol.for("react.lazy"):60116,q=i?Symbol.for("react.block"):60121,X=i?Symbol.for("react.fundamental"):60117,M=i?Symbol.for("react.responder"):60118,G=i?Symbol.for("react.scope"):60119;function H(R){if(typeof R=="object"&&R!==null){var U=R.$$typeof;switch(U){case a:switch(R=R.type,R){case g:case x:case s:case h:case c:case P:return R;default:switch(R=R&&R.$$typeof,R){case w:case v:case z:case O:case f:return R;default:return U}}case l:return U}}}function ne(R){return H(R)===x}return xe.AsyncMode=g,xe.ConcurrentMode=x,xe.ContextConsumer=w,xe.ContextProvider=f,xe.Element=a,xe.ForwardRef=v,xe.Fragment=s,xe.Lazy=z,xe.Memo=O,xe.Portal=l,xe.Profiler=h,xe.StrictMode=c,xe.Suspense=P,xe.isAsyncMode=function(R){return ne(R)||H(R)===g},xe.isConcurrentMode=ne,xe.isContextConsumer=function(R){return H(R)===w},xe.isContextProvider=function(R){return H(R)===f},xe.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===a},xe.isForwardRef=function(R){return H(R)===v},xe.isFragment=function(R){return H(R)===s},xe.isLazy=function(R){return H(R)===z},xe.isMemo=function(R){return H(R)===O},xe.isPortal=function(R){return H(R)===l},xe.isProfiler=function(R){return H(R)===h},xe.isStrictMode=function(R){return H(R)===c},xe.isSuspense=function(R){return H(R)===P},xe.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===s||R===x||R===h||R===c||R===P||R===I||typeof R=="object"&&R!==null&&(R.$$typeof===z||R.$$typeof===O||R.$$typeof===f||R.$$typeof===w||R.$$typeof===v||R.$$typeof===X||R.$$typeof===M||R.$$typeof===G||R.$$typeof===q)},xe.typeOf=H,xe}var Cu;function Zu(){return Cu||(Cu=1,Jo.exports=Bh()),Jo.exports}Zu();function Wi(i,a){if(i==null)return{};var l={};for(var s in i)if({}.hasOwnProperty.call(i,s)){if(a.indexOf(s)!==-1)continue;l[s]=i[s]}return l}var Qo,Pu;function Gh(){if(Pu)return Qo;Pu=1;var i=Zu(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};h[i.ForwardRef]=s,h[i.Memo]=c;function f(z){return i.isMemo(z)?c:h[z.$$typeof]||a}var w=Object.defineProperty,g=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,P=Object.getPrototypeOf,I=Object.prototype;function O(z,q,X){if(typeof q!="string"){if(I){var M=P(q);M&&M!==I&&O(z,M,X)}var G=g(q);x&&(G=G.concat(x(q)));for(var H=f(z),ne=f(q),R=0;R<G.length;++R){var U=G[R];if(!l[U]&&!(X&&X[U])&&!(ne&&ne[U])&&!(H&&H[U])){var V=v(q,U);try{w(z,U,V)}catch{}}}}return z}return Qo=O,Qo}Gh();var Xo=1073741823,Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function Uh(){var i="__global_unique_id__";return Iu[i]=(Iu[i]||0)+1}function $h(i,a){return i===a?i!==0||1/i===1/a:i!==i&&a!==a}function Wh(i){var a=[];return{on:function(s){a.push(s)},off:function(s){a=a.filter(function(c){return c!==s})},get:function(){return i},set:function(s,c){i=s,a.forEach(function(h){return h(i,c)})}}}function qh(i){return Array.isArray(i)?i[0]:i}function Vh(i,a){var l,s,c="__create-react-context-"+Uh()+"__",h=(function(w){gt(g,w);function g(){for(var v,P=arguments.length,I=new Array(P),O=0;O<P;O++)I[O]=arguments[O];return v=w.call.apply(w,[this].concat(I))||this,v.emitter=Wh(v.props.value),v}var x=g.prototype;return x.getChildContext=function(){var P;return P={},P[c]=this.emitter,P},x.componentWillReceiveProps=function(P){if(this.props.value!==P.value){var I=this.props.value,O=P.value,z;$h(I,O)?z=0:(z=typeof a=="function"?a(I,O):Xo,z|=0,z!==0&&this.emitter.set(P.value,z))}},x.render=function(){return this.props.children},g})(ge.Component);h.childContextTypes=(l={},l[c]=mu.object.isRequired,l);var f=(function(w){gt(g,w);function g(){for(var v,P=arguments.length,I=new Array(P),O=0;O<P;O++)I[O]=arguments[O];return v=w.call.apply(w,[this].concat(I))||this,v.observedBits=void 0,v.state={value:v.getValue()},v.onUpdate=function(z,q){var X=v.observedBits|0;(X&q)!==0&&v.setState({value:v.getValue()})},v}var x=g.prototype;return x.componentWillReceiveProps=function(P){var I=P.observedBits;this.observedBits=I??Xo},x.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var P=this.props.observedBits;this.observedBits=P??Xo},x.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},x.getValue=function(){return this.context[c]?this.context[c].get():i},x.render=function(){return qh(this.props.children)(this.state.value)},g})(ge.Component);return f.contextTypes=(s={},s[c]=mu.object,s),{Provider:h,Consumer:f}}var Yh=ge.createContext||Vh,Ku=function(a){var l=Yh();return l.displayName=a,l},ed=Ku("Router-History"),Ut=Ku("Router"),qi=(function(i){gt(a,i),a.computeRootMatch=function(c){return{path:"/",url:"/",params:{},isExact:c==="/"}};function a(s){var c;return c=i.call(this,s)||this,c.state={location:s.history.location},c._isMounted=!1,c._pendingLocation=null,s.staticContext||(c.unlisten=s.history.listen(function(h){c._pendingLocation=h})),c}var l=a.prototype;return l.componentDidMount=function(){var c=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(h){c._isMounted&&c.setState({location:h})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},l.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},l.render=function(){return ge.createElement(Ut.Provider,{value:{history:this.props.history,location:this.state.location,match:a.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},ge.createElement(ed.Provider,{children:this.props.children||null,value:this.props.history}))},a})(ge.Component);ge.Component;var Jh=(function(i){gt(a,i);function a(){return i.apply(this,arguments)||this}var l=a.prototype;return l.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},l.componentDidUpdate=function(c){this.props.onUpdate&&this.props.onUpdate.call(this,this,c)},l.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},l.render=function(){return null},a})(ge.Component),Zo={},Qh=1e4,Au=0;function Xh(i){if(Zo[i])return Zo[i];var a=Xu.compile(i);return Au<Qh&&(Zo[i]=a,Au++),a}function ju(i,a){return i===void 0&&(i="/"),a===void 0&&(a={}),i==="/"?i:Xh(i)(a,{pretty:!0})}function Nr(i){var a=i.computedMatch,l=i.to,s=i.push,c=s===void 0?!1:s;return ge.createElement(Ut.Consumer,null,function(h){h||$t();var f=h.history,w=h.staticContext,g=c?f.push:f.replace,x=Be(a?typeof l=="string"?ju(l,a.params):Me({},l,{pathname:ju(l.pathname,a.params)}):l);return w?(g(x),null):ge.createElement(Jh,{onMount:function(){g(x)},onUpdate:function(P,I){var O=Be(I.to);Ih(O,Me({},x,{key:O.key}))||g(x)},to:l})})}var Ru={},Zh=1e4,Lu=0;function Kh(i,a){var l=""+a.end+a.strict+a.sensitive,s=Ru[l]||(Ru[l]={});if(s[i])return s[i];var c=[],h=Xu(i,c,a),f={regexp:h,keys:c};return Lu<Zh&&(s[i]=f,Lu++),f}function us(i,a){a===void 0&&(a={}),(typeof a=="string"||Array.isArray(a))&&(a={path:a});var l=a,s=l.path,c=l.exact,h=c===void 0?!1:c,f=l.strict,w=f===void 0?!1:f,g=l.sensitive,x=g===void 0?!1:g,v=[].concat(s);return v.reduce(function(P,I){if(!I&&I!=="")return null;if(P)return P;var O=Kh(I,{end:h,strict:w,sensitive:x}),z=O.regexp,q=O.keys,X=z.exec(i);if(!X)return null;var M=X[0],G=X.slice(1),H=i===M;return h&&!H?null:{path:I,url:I==="/"&&M===""?"/":M,isExact:H,params:q.reduce(function(ne,R,U){return ne[R.name]=G[U],ne},{})}},null)}function ef(i){return ge.Children.count(i)===0}var ft=(function(i){gt(a,i);function a(){return i.apply(this,arguments)||this}var l=a.prototype;return l.render=function(){var c=this;return ge.createElement(Ut.Consumer,null,function(h){h||$t();var f=c.props.location||h.location,w=c.props.computedMatch?c.props.computedMatch:c.props.path?us(f.pathname,c.props):h.match,g=Me({},h,{location:f,match:w}),x=c.props,v=x.children,P=x.component,I=x.render;return Array.isArray(v)&&ef(v)&&(v=null),ge.createElement(Ut.Provider,{value:g},g.match?v?typeof v=="function"?v(g):v:P?ge.createElement(P,g):I?I(g):null:typeof v=="function"?v(g):null)})},a})(ge.Component);function ds(i){return i.charAt(0)==="/"?i:"/"+i}function tf(i,a){return i?Me({},a,{pathname:ds(i)+a.pathname}):a}function nf(i,a){if(!i)return a;var l=ds(i);return a.pathname.indexOf(l)!==0?a:Me({},a,{pathname:a.pathname.substr(l.length)})}function Nu(i){return typeof i=="string"?i:Ye(i)}function Ko(i){return function(){$t()}}function Mu(){}ge.Component;var rf=(function(i){gt(a,i);function a(){return i.apply(this,arguments)||this}var l=a.prototype;return l.render=function(){var c=this;return ge.createElement(Ut.Consumer,null,function(h){h||$t();var f=c.props.location||h.location,w,g;return ge.Children.forEach(c.props.children,function(x){if(g==null&&ge.isValidElement(x)){w=x;var v=x.props.path||x.props.from;g=v?us(f.pathname,Me({},x.props,{path:v})):h.match}}),g?ge.cloneElement(w,{location:f,computedMatch:g}):null})},a})(ge.Component),td=ge.useContext;function af(){return td(ed)}function of(){return td(Ut).location}var sf=(function(i){gt(a,i);function a(){for(var s,c=arguments.length,h=new Array(c),f=0;f<c;f++)h[f]=arguments[f];return s=i.call.apply(i,[this].concat(h))||this,s.history=Nh(s.props),s}var l=a.prototype;return l.render=function(){return ge.createElement(qi,{history:this.history,children:this.props.children})},a})(ge.Component);ge.Component;var ns=function(a,l){return typeof a=="function"?a(l):a},rs=function(a,l){return typeof a=="string"?Be(a,null,null,l):a},ps=function(a){return a},_n=ge.forwardRef;typeof _n>"u"&&(_n=ps);function lf(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}var cf=_n(function(i,a){var l=i.innerRef,s=i.navigate,c=i.onClick,h=Wi(i,["innerRef","navigate","onClick"]),f=h.target,w=Me({},h,{onClick:function(x){try{c&&c(x)}catch(v){throw x.preventDefault(),v}!x.defaultPrevented&&x.button===0&&(!f||f==="_self")&&!lf(x)&&(x.preventDefault(),s())}});return ps!==_n?w.ref=a||l:w.ref=l,ge.createElement("a",w)}),Fe=_n(function(i,a){var l=i.component,s=l===void 0?cf:l,c=i.replace,h=i.to,f=i.innerRef,w=Wi(i,["component","replace","to","innerRef"]);return ge.createElement(Ut.Consumer,null,function(g){g||$t();var x=g.history,v=rs(ns(h,g.location),g.location),P=v?x.createHref(v):"",I=Me({},w,{href:P,navigate:function(){var z=ns(h,g.location),q=Ye(g.location)===Ye(rs(z)),X=c||q?x.replace:x.push;X(z)}});return ps!==_n?I.ref=a||f:I.innerRef=f,ge.createElement(s,I)})}),nd=function(a){return a},Hi=ge.forwardRef;typeof Hi>"u"&&(Hi=nd);function uf(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return a.filter(function(s){return s}).join(" ")}var df=Hi(function(i,a){var l=i["aria-current"],s=l===void 0?"page":l,c=i.activeClassName,h=c===void 0?"active":c,f=i.activeStyle,w=i.className,g=i.exact,x=i.isActive,v=i.location,P=i.sensitive,I=i.strict,O=i.style,z=i.to,q=i.innerRef,X=Wi(i,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return ge.createElement(Ut.Consumer,null,function(M){M||$t();var G=v||M.location,H=rs(ns(z,G),G),ne=H.pathname,R=ne&&ne.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),U=R?us(G.pathname,{path:R,exact:g,sensitive:P,strict:I}):null,V=!!(x?x(U,G):U),W=typeof w=="function"?w(V):w,ce=typeof O=="function"?O(V):O;V&&(W=uf(W,h),ce=Me({},ce,f));var te=Me({"aria-current":V&&s||null,className:W,style:ce,to:H},X);return nd!==Hi?te.ref=a||q:te.innerRef=q,ge.createElement(Fe,te)})});const pf=`---
title: "10 Coding Projects You Can Add to Your Resume"
date: "2026-04-06T19:10:00+05:30"
tags: [projects, resume, career, developers]
category: "Career Growth"
accent: "#ef7d2f"
cover: "/images/rk-formal.jpg"
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
`,hf=`---
title: "From Repo to Reader"
date: "April 2026"
tags: [react, markdown, content]
category: "Developer Workflow"
cover: "/images/radhakishan-web-2.jpg"
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
`,ff=`---
title: "JavaScript Interview Series Plan for Tech Content"
date: "2026-04-06T18:50:00+05:30"
tags: [javascript, interviews, content, career]
category: "Interview Content"
accent: "#7f88ff"
cover: "/images/radhakishan-web-3.jpg"
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
`,mf=`---
title: "Open Source Content Formats That Actually Get Attention"
date: "2026-04-06T19:00:00+05:30"
tags: [open-source, content, creators, tools]
category: "Creator Workflow"
accent: "#2dde98"
cover: "/images/rk-formal.jpg"
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
`,gf=`<!DOCTYPE html>
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
`,vf=`<!DOCTYPE html>
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
<meta property="og:image" content="/images/rk-formal.jpg">
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
`,yf=`<!DOCTYPE html>
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
<meta property="og:image" content="/images/radhakishan-web-2.jpg">
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
`,wf=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Google Gemma — Complete Guide | rk.codex</title>
<meta property="og:image" content="/images/rk-formal.jpg">
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
`;function hs(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var on=hs();function rd(i){on=i}var rn={exec:()=>null};function we(i,a=""){let l=typeof i=="string"?i:i.source,s={replace:(c,h)=>{let f=typeof h=="string"?h:h.source;return f=f.replace(Ge.caret,"$1"),l=l.replace(c,f),s},getRegex:()=>new RegExp(l,a)};return s}var xf=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ge={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}>`)},kf=/^(?:[ \t]*(?:\n|$))+/,bf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Sf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_r=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Tf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fs=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,id=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ad=we(id).replace(/bull/g,fs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ef=we(id).replace(/bull/g,fs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ms=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Cf=/^[^\n]+/,gs=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Pf=we(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",gs).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),If=we(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fs).getRegex(),Vi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vs=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Af=we("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",vs).replace("tag",Vi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),od=we(ms).replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vi).getRegex(),jf=we(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",od).getRegex(),ys={blockquote:jf,code:bf,def:Pf,fences:Sf,heading:Tf,hr:_r,html:Af,lheading:ad,list:If,newline:kf,paragraph:od,table:rn,text:Cf},Du=we("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vi).getRegex(),Rf={...ys,lheading:Ef,table:Du,paragraph:we(ms).replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Du).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vi).getRegex()},Lf={...ys,html:we(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vs).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:rn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:we(ms).replace("hr",_r).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ad).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Nf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Mf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,sd=/^( {2,}|\\)\n(?!\s*$)/,Df=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,On=/[\p{P}\p{S}]/u,Yi=/[\s\p{P}\p{S}]/u,ws=/[^\s\p{P}\p{S}]/u,_f=we(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Yi).getRegex(),ld=/(?!~)[\p{P}\p{S}]/u,Of=/(?!~)[\s\p{P}\p{S}]/u,zf=/(?:[^\s\p{P}\p{S}]|~)/u,Ff=we(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",xf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),cd=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Hf=we(cd,"u").replace(/punct/g,On).getRegex(),Bf=we(cd,"u").replace(/punct/g,ld).getRegex(),ud="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Gf=we(ud,"gu").replace(/notPunctSpace/g,ws).replace(/punctSpace/g,Yi).replace(/punct/g,On).getRegex(),Uf=we(ud,"gu").replace(/notPunctSpace/g,zf).replace(/punctSpace/g,Of).replace(/punct/g,ld).getRegex(),$f=we("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ws).replace(/punctSpace/g,Yi).replace(/punct/g,On).getRegex(),Wf=we(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,On).getRegex(),qf="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Vf=we(qf,"gu").replace(/notPunctSpace/g,ws).replace(/punctSpace/g,Yi).replace(/punct/g,On).getRegex(),Yf=we(/\\(punct)/,"gu").replace(/punct/g,On).getRegex(),Jf=we(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Qf=we(vs).replace("(?:-->|$)","-->").getRegex(),Xf=we("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Qf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Bi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Zf=we(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Bi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dd=we(/^!?\[(label)\]\[(ref)\]/).replace("label",Bi).replace("ref",gs).getRegex(),pd=we(/^!?\[(ref)\](?:\[\])?/).replace("ref",gs).getRegex(),Kf=we("reflink|nolink(?!\\()","g").replace("reflink",dd).replace("nolink",pd).getRegex(),_u=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,xs={_backpedal:rn,anyPunctuation:Yf,autolink:Jf,blockSkip:Ff,br:sd,code:Mf,del:rn,delLDelim:rn,delRDelim:rn,emStrongLDelim:Hf,emStrongRDelimAst:Gf,emStrongRDelimUnd:$f,escape:Nf,link:Zf,nolink:pd,punctuation:_f,reflink:dd,reflinkSearch:Kf,tag:Xf,text:Df,url:rn},em={...xs,link:we(/^!?\[(label)\]\((.*?)\)/).replace("label",Bi).getRegex(),reflink:we(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Bi).getRegex()},is={...xs,emStrongRDelimAst:Uf,emStrongLDelim:Bf,delLDelim:Wf,delRDelim:Vf,url:we(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",_u).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:we(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",_u).getRegex()},tm={...is,br:we(sd).replace("{2,}","*").getRegex(),text:we(is.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},zi={normal:ys,gfm:Rf,pedantic:Lf},Pr={normal:xs,gfm:is,breaks:tm,pedantic:em},nm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ou=i=>nm[i];function mt(i,a){if(a){if(Ge.escapeTest.test(i))return i.replace(Ge.escapeReplace,Ou)}else if(Ge.escapeTestNoEncode.test(i))return i.replace(Ge.escapeReplaceNoEncode,Ou);return i}function zu(i){try{i=encodeURI(i).replace(Ge.percentDecode,"%")}catch{return null}return i}function Fu(i,a){let l=i.replace(Ge.findPipe,(h,f,w)=>{let g=!1,x=f;for(;--x>=0&&w[x]==="\\";)g=!g;return g?"|":" |"}),s=l.split(Ge.splitPipe),c=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),a)if(s.length>a)s.splice(a);else for(;s.length<a;)s.push("");for(;c<s.length;c++)s[c]=s[c].trim().replace(Ge.slashPipe,"|");return s}function Ir(i,a,l){let s=i.length;if(s===0)return"";let c=0;for(;c<s&&i.charAt(s-c-1)===a;)c++;return i.slice(0,s-c)}function rm(i,a){if(i.indexOf(a[1])===-1)return-1;let l=0;for(let s=0;s<i.length;s++)if(i[s]==="\\")s++;else if(i[s]===a[0])l++;else if(i[s]===a[1]&&(l--,l<0))return s;return l>0?-2:-1}function im(i,a=0){let l=a,s="";for(let c of i)if(c==="	"){let h=4-l%4;s+=" ".repeat(h),l+=h}else s+=c,l++;return s}function Hu(i,a,l,s,c){let h=a.href,f=a.title||null,w=i[1].replace(c.other.outputLinkReplace,"$1");s.state.inLink=!0;let g={type:i[0].charAt(0)==="!"?"image":"link",raw:l,href:h,title:f,text:w,tokens:s.inlineTokens(w)};return s.state.inLink=!1,g}function am(i,a,l){let s=i.match(l.other.indentCodeCompensation);if(s===null)return a;let c=s[1];return a.split(`
`).map(h=>{let f=h.match(l.other.beginningSpace);if(f===null)return h;let[w]=f;return w.length>=c.length?h.slice(c.length):h}).join(`
`)}var Gi=class{options;rules;lexer;constructor(i){this.options=i||on}space(i){let a=this.rules.block.newline.exec(i);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(i){let a=this.rules.block.code.exec(i);if(a){let l=a[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?l:Ir(l,`
`)}}}fences(i){let a=this.rules.block.fences.exec(i);if(a){let l=a[0],s=am(l,a[3]||"",this.rules);return{type:"code",raw:l,lang:a[2]?a[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):a[2],text:s}}}heading(i){let a=this.rules.block.heading.exec(i);if(a){let l=a[2].trim();if(this.rules.other.endingHash.test(l)){let s=Ir(l,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(l=s.trim())}return{type:"heading",raw:a[0],depth:a[1].length,text:l,tokens:this.lexer.inline(l)}}}hr(i){let a=this.rules.block.hr.exec(i);if(a)return{type:"hr",raw:Ir(a[0],`
`)}}blockquote(i){let a=this.rules.block.blockquote.exec(i);if(a){let l=Ir(a[0],`
`).split(`
`),s="",c="",h=[];for(;l.length>0;){let f=!1,w=[],g;for(g=0;g<l.length;g++)if(this.rules.other.blockquoteStart.test(l[g]))w.push(l[g]),f=!0;else if(!f)w.push(l[g]);else break;l=l.slice(g);let x=w.join(`
`),v=x.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${x}`:x,c=c?`${c}
${v}`:v;let P=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,h,!0),this.lexer.state.top=P,l.length===0)break;let I=h.at(-1);if(I?.type==="code")break;if(I?.type==="blockquote"){let O=I,z=O.raw+`
`+l.join(`
`),q=this.blockquote(z);h[h.length-1]=q,s=s.substring(0,s.length-O.raw.length)+q.raw,c=c.substring(0,c.length-O.text.length)+q.text;break}else if(I?.type==="list"){let O=I,z=O.raw+`
`+l.join(`
`),q=this.list(z);h[h.length-1]=q,s=s.substring(0,s.length-I.raw.length)+q.raw,c=c.substring(0,c.length-O.raw.length)+q.raw,l=z.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:h,text:c}}}list(i){let a=this.rules.block.list.exec(i);if(a){let l=a[1].trim(),s=l.length>1,c={type:"list",raw:"",ordered:s,start:s?+l.slice(0,-1):"",loose:!1,items:[]};l=s?`\\d{1,9}\\${l.slice(-1)}`:`\\${l}`,this.options.pedantic&&(l=s?l:"[*+-]");let h=this.rules.other.listItemRegex(l),f=!1;for(;i;){let g=!1,x="",v="";if(!(a=h.exec(i))||this.rules.block.hr.test(i))break;x=a[0],i=i.substring(x.length);let P=im(a[2].split(`
`,1)[0],a[1].length),I=i.split(`
`,1)[0],O=!P.trim(),z=0;if(this.options.pedantic?(z=2,v=P.trimStart()):O?z=a[1].length+1:(z=P.search(this.rules.other.nonSpaceChar),z=z>4?1:z,v=P.slice(z),z+=a[1].length),O&&this.rules.other.blankLine.test(I)&&(x+=I+`
`,i=i.substring(I.length+1),g=!0),!g){let q=this.rules.other.nextBulletRegex(z),X=this.rules.other.hrRegex(z),M=this.rules.other.fencesBeginRegex(z),G=this.rules.other.headingBeginRegex(z),H=this.rules.other.htmlBeginRegex(z),ne=this.rules.other.blockquoteBeginRegex(z);for(;i;){let R=i.split(`
`,1)[0],U;if(I=R,this.options.pedantic?(I=I.replace(this.rules.other.listReplaceNesting,"  "),U=I):U=I.replace(this.rules.other.tabCharGlobal,"    "),M.test(I)||G.test(I)||H.test(I)||ne.test(I)||q.test(I)||X.test(I))break;if(U.search(this.rules.other.nonSpaceChar)>=z||!I.trim())v+=`
`+U.slice(z);else{if(O||P.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||M.test(P)||G.test(P)||X.test(P))break;v+=`
`+I}O=!I.trim(),x+=R+`
`,i=i.substring(R.length+1),P=U.slice(z)}}c.loose||(f?c.loose=!0:this.rules.other.doubleBlankLine.test(x)&&(f=!0)),c.items.push({type:"list_item",raw:x,task:!!this.options.gfm&&this.rules.other.listIsTask.test(v),loose:!1,text:v,tokens:[]}),c.raw+=x}let w=c.items.at(-1);if(w)w.raw=w.raw.trimEnd(),w.text=w.text.trimEnd();else return;c.raw=c.raw.trimEnd();for(let g of c.items){if(this.lexer.state.top=!1,g.tokens=this.lexer.blockTokens(g.text,[]),g.task){if(g.text=g.text.replace(this.rules.other.listReplaceTask,""),g.tokens[0]?.type==="text"||g.tokens[0]?.type==="paragraph"){g.tokens[0].raw=g.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),g.tokens[0].text=g.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let v=this.lexer.inlineQueue.length-1;v>=0;v--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[v].src)){this.lexer.inlineQueue[v].src=this.lexer.inlineQueue[v].src.replace(this.rules.other.listReplaceTask,"");break}}let x=this.rules.other.listTaskCheckbox.exec(g.raw);if(x){let v={type:"checkbox",raw:x[0]+" ",checked:x[0]!=="[ ]"};g.checked=v.checked,c.loose?g.tokens[0]&&["paragraph","text"].includes(g.tokens[0].type)&&"tokens"in g.tokens[0]&&g.tokens[0].tokens?(g.tokens[0].raw=v.raw+g.tokens[0].raw,g.tokens[0].text=v.raw+g.tokens[0].text,g.tokens[0].tokens.unshift(v)):g.tokens.unshift({type:"paragraph",raw:v.raw,text:v.raw,tokens:[v]}):g.tokens.unshift(v)}}if(!c.loose){let x=g.tokens.filter(P=>P.type==="space"),v=x.length>0&&x.some(P=>this.rules.other.anyLine.test(P.raw));c.loose=v}}if(c.loose)for(let g of c.items){g.loose=!0;for(let x of g.tokens)x.type==="text"&&(x.type="paragraph")}return c}}html(i){let a=this.rules.block.html.exec(i);if(a)return{type:"html",block:!0,raw:a[0],pre:a[1]==="pre"||a[1]==="script"||a[1]==="style",text:a[0]}}def(i){let a=this.rules.block.def.exec(i);if(a){let l=a[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=a[2]?a[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=a[3]?a[3].substring(1,a[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):a[3];return{type:"def",tag:l,raw:a[0],href:s,title:c}}}table(i){let a=this.rules.block.table.exec(i);if(!a||!this.rules.other.tableDelimiter.test(a[2]))return;let l=Fu(a[1]),s=a[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=a[3]?.trim()?a[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:a[0],header:[],align:[],rows:[]};if(l.length===s.length){for(let f of s)this.rules.other.tableAlignRight.test(f)?h.align.push("right"):this.rules.other.tableAlignCenter.test(f)?h.align.push("center"):this.rules.other.tableAlignLeft.test(f)?h.align.push("left"):h.align.push(null);for(let f=0;f<l.length;f++)h.header.push({text:l[f],tokens:this.lexer.inline(l[f]),header:!0,align:h.align[f]});for(let f of c)h.rows.push(Fu(f,h.header.length).map((w,g)=>({text:w,tokens:this.lexer.inline(w),header:!1,align:h.align[g]})));return h}}lheading(i){let a=this.rules.block.lheading.exec(i);if(a){let l=a[1].trim();return{type:"heading",raw:a[0],depth:a[2].charAt(0)==="="?1:2,text:l,tokens:this.lexer.inline(l)}}}paragraph(i){let a=this.rules.block.paragraph.exec(i);if(a){let l=a[1].charAt(a[1].length-1)===`
`?a[1].slice(0,-1):a[1];return{type:"paragraph",raw:a[0],text:l,tokens:this.lexer.inline(l)}}}text(i){let a=this.rules.block.text.exec(i);if(a)return{type:"text",raw:a[0],text:a[0],tokens:this.lexer.inline(a[0])}}escape(i){let a=this.rules.inline.escape.exec(i);if(a)return{type:"escape",raw:a[0],text:a[1]}}tag(i){let a=this.rules.inline.tag.exec(i);if(a)return!this.lexer.state.inLink&&this.rules.other.startATag.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:a[0]}}link(i){let a=this.rules.inline.link.exec(i);if(a){let l=a[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(l)){if(!this.rules.other.endAngleBracket.test(l))return;let h=Ir(l.slice(0,-1),"\\");if((l.length-h.length)%2===0)return}else{let h=rm(a[2],"()");if(h===-2)return;if(h>-1){let f=(a[0].indexOf("!")===0?5:4)+a[1].length+h;a[2]=a[2].substring(0,h),a[0]=a[0].substring(0,f).trim(),a[3]=""}}let s=a[2],c="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(s);h&&(s=h[1],c=h[3])}else c=a[3]?a[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(l)?s=s.slice(1):s=s.slice(1,-1)),Hu(a,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},a[0],this.lexer,this.rules)}}reflink(i,a){let l;if((l=this.rules.inline.reflink.exec(i))||(l=this.rules.inline.nolink.exec(i))){let s=(l[2]||l[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=a[s.toLowerCase()];if(!c){let h=l[0].charAt(0);return{type:"text",raw:h,text:h}}return Hu(l,c,l[0],this.lexer,this.rules)}}emStrong(i,a,l=""){let s=this.rules.inline.emStrongLDelim.exec(i);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&l.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!l||this.rules.inline.punctuation.exec(l))){let c=[...s[0]].length-1,h,f,w=c,g=0,x=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(x.lastIndex=0,a=a.slice(-1*i.length+c);(s=x.exec(a))!==null;){if(h=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!h)continue;if(f=[...h].length,s[3]||s[4]){w+=f;continue}else if((s[5]||s[6])&&c%3&&!((c+f)%3)){g+=f;continue}if(w-=f,w>0)continue;f=Math.min(f,f+w+g);let v=[...s[0]][0].length,P=i.slice(0,c+s.index+v+f);if(Math.min(c,f)%2){let O=P.slice(1,-1);return{type:"em",raw:P,text:O,tokens:this.lexer.inlineTokens(O)}}let I=P.slice(2,-2);return{type:"strong",raw:P,text:I,tokens:this.lexer.inlineTokens(I)}}}}codespan(i){let a=this.rules.inline.code.exec(i);if(a){let l=a[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(l),c=this.rules.other.startingSpaceChar.test(l)&&this.rules.other.endingSpaceChar.test(l);return s&&c&&(l=l.substring(1,l.length-1)),{type:"codespan",raw:a[0],text:l}}}br(i){let a=this.rules.inline.br.exec(i);if(a)return{type:"br",raw:a[0]}}del(i,a,l=""){let s=this.rules.inline.delLDelim.exec(i);if(s&&(!s[1]||!l||this.rules.inline.punctuation.exec(l))){let c=[...s[0]].length-1,h,f,w=c,g=this.rules.inline.delRDelim;for(g.lastIndex=0,a=a.slice(-1*i.length+c);(s=g.exec(a))!==null;){if(h=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!h||(f=[...h].length,f!==c))continue;if(s[3]||s[4]){w+=f;continue}if(w-=f,w>0)continue;f=Math.min(f,f+w);let x=[...s[0]][0].length,v=i.slice(0,c+s.index+x+f),P=v.slice(c,-c);return{type:"del",raw:v,text:P,tokens:this.lexer.inlineTokens(P)}}}}autolink(i){let a=this.rules.inline.autolink.exec(i);if(a){let l,s;return a[2]==="@"?(l=a[1],s="mailto:"+l):(l=a[1],s=l),{type:"link",raw:a[0],text:l,href:s,tokens:[{type:"text",raw:l,text:l}]}}}url(i){let a;if(a=this.rules.inline.url.exec(i)){let l,s;if(a[2]==="@")l=a[0],s="mailto:"+l;else{let c;do c=a[0],a[0]=this.rules.inline._backpedal.exec(a[0])?.[0]??"";while(c!==a[0]);l=a[0],a[1]==="www."?s="http://"+a[0]:s=a[0]}return{type:"link",raw:a[0],text:l,href:s,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(i){let a=this.rules.inline.text.exec(i);if(a){let l=this.lexer.state.inRawBlock;return{type:"text",raw:a[0],text:a[0],escaped:l}}}},ot=class as{tokens;options;state;inlineQueue;tokenizer;constructor(a){this.tokens=[],this.tokens.links=Object.create(null),this.options=a||on,this.options.tokenizer=this.options.tokenizer||new Gi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let l={other:Ge,block:zi.normal,inline:Pr.normal};this.options.pedantic?(l.block=zi.pedantic,l.inline=Pr.pedantic):this.options.gfm&&(l.block=zi.gfm,this.options.breaks?l.inline=Pr.breaks:l.inline=Pr.gfm),this.tokenizer.rules=l}static get rules(){return{block:zi,inline:Pr}}static lex(a,l){return new as(l).lex(a)}static lexInline(a,l){return new as(l).inlineTokens(a)}lex(a){a=a.replace(Ge.carriageReturn,`
`),this.blockTokens(a,this.tokens);for(let l=0;l<this.inlineQueue.length;l++){let s=this.inlineQueue[l];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(a,l=[],s=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(a=a.replace(Ge.tabCharGlobal,"    ").replace(Ge.spaceLine,""));a;){let c;if(this.options.extensions?.block?.some(f=>(c=f.call({lexer:this},a,l))?(a=a.substring(c.raw.length),l.push(c),!0):!1))continue;if(c=this.tokenizer.space(a)){a=a.substring(c.raw.length);let f=l.at(-1);c.raw.length===1&&f!==void 0?f.raw+=`
`:l.push(c);continue}if(c=this.tokenizer.code(a)){a=a.substring(c.raw.length);let f=l.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.at(-1).src=f.text):l.push(c);continue}if(c=this.tokenizer.fences(a)){a=a.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.heading(a)){a=a.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.hr(a)){a=a.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.blockquote(a)){a=a.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.list(a)){a=a.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.html(a)){a=a.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.def(a)){a=a.substring(c.raw.length);let f=l.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.raw,this.inlineQueue.at(-1).src=f.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title},l.push(c));continue}if(c=this.tokenizer.table(a)){a=a.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.lheading(a)){a=a.substring(c.raw.length),l.push(c);continue}let h=a;if(this.options.extensions?.startBlock){let f=1/0,w=a.slice(1),g;this.options.extensions.startBlock.forEach(x=>{g=x.call({lexer:this},w),typeof g=="number"&&g>=0&&(f=Math.min(f,g))}),f<1/0&&f>=0&&(h=a.substring(0,f+1))}if(this.state.top&&(c=this.tokenizer.paragraph(h))){let f=l.at(-1);s&&f?.type==="paragraph"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):l.push(c),s=h.length!==a.length,a=a.substring(c.raw.length);continue}if(c=this.tokenizer.text(a)){a=a.substring(c.raw.length);let f=l.at(-1);f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):l.push(c);continue}if(a){let f="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,l}inline(a,l=[]){return this.inlineQueue.push({src:a,tokens:l}),l}inlineTokens(a,l=[]){this.tokenizer.lexer=this;let s=a,c=null;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!==null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!==null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let h;for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!==null;)h=c[2]?c[2].length:0,s=s.slice(0,c.index+h)+"["+"a".repeat(c[0].length-h-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let f=!1,w="";for(;a;){f||(w=""),f=!1;let g;if(this.options.extensions?.inline?.some(v=>(g=v.call({lexer:this},a,l))?(a=a.substring(g.raw.length),l.push(g),!0):!1))continue;if(g=this.tokenizer.escape(a)){a=a.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.tag(a)){a=a.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.link(a)){a=a.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.reflink(a,this.tokens.links)){a=a.substring(g.raw.length);let v=l.at(-1);g.type==="text"&&v?.type==="text"?(v.raw+=g.raw,v.text+=g.text):l.push(g);continue}if(g=this.tokenizer.emStrong(a,s,w)){a=a.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.codespan(a)){a=a.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.br(a)){a=a.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.del(a,s,w)){a=a.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.autolink(a)){a=a.substring(g.raw.length),l.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(a))){a=a.substring(g.raw.length),l.push(g);continue}let x=a;if(this.options.extensions?.startInline){let v=1/0,P=a.slice(1),I;this.options.extensions.startInline.forEach(O=>{I=O.call({lexer:this},P),typeof I=="number"&&I>=0&&(v=Math.min(v,I))}),v<1/0&&v>=0&&(x=a.substring(0,v+1))}if(g=this.tokenizer.inlineText(x)){a=a.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(w=g.raw.slice(-1)),f=!0;let v=l.at(-1);v?.type==="text"?(v.raw+=g.raw,v.text+=g.text):l.push(g);continue}if(a){let v="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return l}},Ui=class{options;parser;constructor(i){this.options=i||on}space(i){return""}code({text:i,lang:a,escaped:l}){let s=(a||"").match(Ge.notSpaceStart)?.[0],c=i.replace(Ge.endingNewline,"")+`
`;return s?'<pre><code class="language-'+mt(s)+'">'+(l?c:mt(c,!0))+`</code></pre>
`:"<pre><code>"+(l?c:mt(c,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}def(i){return""}heading({tokens:i,depth:a}){return`<h${a}>${this.parser.parseInline(i)}</h${a}>
`}hr(i){return`<hr>
`}list(i){let a=i.ordered,l=i.start,s="";for(let f=0;f<i.items.length;f++){let w=i.items[f];s+=this.listitem(w)}let c=a?"ol":"ul",h=a&&l!==1?' start="'+l+'"':"";return"<"+c+h+`>
`+s+"</"+c+`>
`}listitem(i){return`<li>${this.parser.parse(i.tokens)}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let a="",l="";for(let c=0;c<i.header.length;c++)l+=this.tablecell(i.header[c]);a+=this.tablerow({text:l});let s="";for(let c=0;c<i.rows.length;c++){let h=i.rows[c];l="";for(let f=0;f<h.length;f++)l+=this.tablecell(h[f]);s+=this.tablerow({text:l})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+a+`</thead>
`+s+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){let a=this.parser.parseInline(i.tokens),l=i.header?"th":"td";return(i.align?`<${l} align="${i.align}">`:`<${l}>`)+a+`</${l}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${mt(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:a,tokens:l}){let s=this.parser.parseInline(l),c=zu(i);if(c===null)return s;i=c;let h='<a href="'+i+'"';return a&&(h+=' title="'+mt(a)+'"'),h+=">"+s+"</a>",h}image({href:i,title:a,text:l,tokens:s}){s&&(l=this.parser.parseInline(s,this.parser.textRenderer));let c=zu(i);if(c===null)return mt(l);i=c;let h=`<img src="${i}" alt="${mt(l)}"`;return a&&(h+=` title="${mt(a)}"`),h+=">",h}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:mt(i.text)}},ks=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}checkbox({raw:i}){return i}},st=class os{options;renderer;textRenderer;constructor(a){this.options=a||on,this.options.renderer=this.options.renderer||new Ui,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ks}static parse(a,l){return new os(l).parse(a)}static parseInline(a,l){return new os(l).parseInline(a)}parse(a){this.renderer.parser=this;let l="";for(let s=0;s<a.length;s++){let c=a[s];if(this.options.extensions?.renderers?.[c.type]){let f=c,w=this.options.extensions.renderers[f.type].call({parser:this},f);if(w!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(f.type)){l+=w||"";continue}}let h=c;switch(h.type){case"space":{l+=this.renderer.space(h);break}case"hr":{l+=this.renderer.hr(h);break}case"heading":{l+=this.renderer.heading(h);break}case"code":{l+=this.renderer.code(h);break}case"table":{l+=this.renderer.table(h);break}case"blockquote":{l+=this.renderer.blockquote(h);break}case"list":{l+=this.renderer.list(h);break}case"checkbox":{l+=this.renderer.checkbox(h);break}case"html":{l+=this.renderer.html(h);break}case"def":{l+=this.renderer.def(h);break}case"paragraph":{l+=this.renderer.paragraph(h);break}case"text":{l+=this.renderer.text(h);break}default:{let f='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return l}parseInline(a,l=this.renderer){this.renderer.parser=this;let s="";for(let c=0;c<a.length;c++){let h=a[c];if(this.options.extensions?.renderers?.[h.type]){let w=this.options.extensions.renderers[h.type].call({parser:this},h);if(w!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(h.type)){s+=w||"";continue}}let f=h;switch(f.type){case"escape":{s+=l.text(f);break}case"html":{s+=l.html(f);break}case"link":{s+=l.link(f);break}case"image":{s+=l.image(f);break}case"checkbox":{s+=l.checkbox(f);break}case"strong":{s+=l.strong(f);break}case"em":{s+=l.em(f);break}case"codespan":{s+=l.codespan(f);break}case"br":{s+=l.br(f);break}case"del":{s+=l.del(f);break}case"text":{s+=l.text(f);break}default:{let w='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(w),"";throw new Error(w)}}}return s}},Rr=class{options;block;constructor(i){this.options=i||on}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}emStrongMask(i){return i}provideLexer(i=this.block){return i?ot.lex:ot.lexInline}provideParser(i=this.block){return i?st.parse:st.parseInline}},om=class{defaults=hs();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=st;Renderer=Ui;TextRenderer=ks;Lexer=ot;Tokenizer=Gi;Hooks=Rr;constructor(...i){this.use(...i)}walkTokens(i,a){let l=[];for(let s of i)switch(l=l.concat(a.call(this,s)),s.type){case"table":{let c=s;for(let h of c.header)l=l.concat(this.walkTokens(h.tokens,a));for(let h of c.rows)for(let f of h)l=l.concat(this.walkTokens(f.tokens,a));break}case"list":{let c=s;l=l.concat(this.walkTokens(c.items,a));break}default:{let c=s;this.defaults.extensions?.childTokens?.[c.type]?this.defaults.extensions.childTokens[c.type].forEach(h=>{let f=c[h].flat(1/0);l=l.concat(this.walkTokens(f,a))}):c.tokens&&(l=l.concat(this.walkTokens(c.tokens,a)))}}return l}use(...i){let a=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(l=>{let s={...l};if(s.async=this.defaults.async||s.async||!1,l.extensions&&(l.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){let h=a.renderers[c.name];h?a.renderers[c.name]=function(...f){let w=c.renderer.apply(this,f);return w===!1&&(w=h.apply(this,f)),w}:a.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=a[c.level];h?h.unshift(c.tokenizer):a[c.level]=[c.tokenizer],c.start&&(c.level==="block"?a.startBlock?a.startBlock.push(c.start):a.startBlock=[c.start]:c.level==="inline"&&(a.startInline?a.startInline.push(c.start):a.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(a.childTokens[c.name]=c.childTokens)}),s.extensions=a),l.renderer){let c=this.defaults.renderer||new Ui(this.defaults);for(let h in l.renderer){if(!(h in c))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let f=h,w=l.renderer[f],g=c[f];c[f]=(...x)=>{let v=w.apply(c,x);return v===!1&&(v=g.apply(c,x)),v||""}}s.renderer=c}if(l.tokenizer){let c=this.defaults.tokenizer||new Gi(this.defaults);for(let h in l.tokenizer){if(!(h in c))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let f=h,w=l.tokenizer[f],g=c[f];c[f]=(...x)=>{let v=w.apply(c,x);return v===!1&&(v=g.apply(c,x)),v}}s.tokenizer=c}if(l.hooks){let c=this.defaults.hooks||new Rr;for(let h in l.hooks){if(!(h in c))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let f=h,w=l.hooks[f],g=c[f];Rr.passThroughHooks.has(h)?c[f]=x=>{if(this.defaults.async&&Rr.passThroughHooksRespectAsync.has(h))return(async()=>{let P=await w.call(c,x);return g.call(c,P)})();let v=w.call(c,x);return g.call(c,v)}:c[f]=(...x)=>{if(this.defaults.async)return(async()=>{let P=await w.apply(c,x);return P===!1&&(P=await g.apply(c,x)),P})();let v=w.apply(c,x);return v===!1&&(v=g.apply(c,x)),v}}s.hooks=c}if(l.walkTokens){let c=this.defaults.walkTokens,h=l.walkTokens;s.walkTokens=function(f){let w=[];return w.push(h.call(this,f)),c&&(w=w.concat(c.call(this,f))),w}}this.defaults={...this.defaults,...s}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,a){return ot.lex(i,a??this.defaults)}parser(i,a){return st.parse(i,a??this.defaults)}parseMarkdown(i){return(a,l)=>{let s={...l},c={...this.defaults,...s},h=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&s.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof a>"u"||a===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof a!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(a)+", string expected"));if(c.hooks&&(c.hooks.options=c,c.hooks.block=i),c.async)return(async()=>{let f=c.hooks?await c.hooks.preprocess(a):a,w=await(c.hooks?await c.hooks.provideLexer(i):i?ot.lex:ot.lexInline)(f,c),g=c.hooks?await c.hooks.processAllTokens(w):w;c.walkTokens&&await Promise.all(this.walkTokens(g,c.walkTokens));let x=await(c.hooks?await c.hooks.provideParser(i):i?st.parse:st.parseInline)(g,c);return c.hooks?await c.hooks.postprocess(x):x})().catch(h);try{c.hooks&&(a=c.hooks.preprocess(a));let f=(c.hooks?c.hooks.provideLexer(i):i?ot.lex:ot.lexInline)(a,c);c.hooks&&(f=c.hooks.processAllTokens(f)),c.walkTokens&&this.walkTokens(f,c.walkTokens);let w=(c.hooks?c.hooks.provideParser(i):i?st.parse:st.parseInline)(f,c);return c.hooks&&(w=c.hooks.postprocess(w)),w}catch(f){return h(f)}}}onError(i,a){return l=>{if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,i){let s="<p>An error occurred:</p><pre>"+mt(l.message+"",!0)+"</pre>";return a?Promise.resolve(s):s}if(a)return Promise.reject(l);throw l}}},an=new om;function ke(i,a){return an.parse(i,a)}ke.options=ke.setOptions=function(i){return an.setOptions(i),ke.defaults=an.defaults,rd(ke.defaults),ke};ke.getDefaults=hs;ke.defaults=on;ke.use=function(...i){return an.use(...i),ke.defaults=an.defaults,rd(ke.defaults),ke};ke.walkTokens=function(i,a){return an.walkTokens(i,a)};ke.parseInline=an.parseInline;ke.Parser=st;ke.parser=st.parse;ke.Renderer=Ui;ke.TextRenderer=ks;ke.Lexer=ot;ke.lexer=ot.lex;ke.Tokenizer=Gi;ke.Hooks=Rr;ke.parse=ke;ke.options;ke.setOptions;ke.use;ke.walkTokens;ke.parseInline;st.parse;ot.lex;function Or(i){return`${i}`.toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}ke.setOptions({breaks:!0,gfm:!0});const sm=Object.assign({"./articles/md/10-coding-projects-you-can-add-to-your-resume.md":pf,"./articles/md/from-repo-to-reader.md":hf,"./articles/md/javascript-interview-series-plan.md":ff,"./articles/md/open-source-content-formats-for-dev-creators.md":mf}),lm=Object.assign({"./articles/html/100-claude-code-prompts.html":gf,"./articles/html/ai-content-prompterrr.html":vf,"./articles/html/claude-carousel-generator.html":yf,"./articles/html/gemma-complete-guide.html":wf});function cm(i){const l=`
<base href="${typeof window<"u"?`${window.location.origin}/`:"/"}" target="_blank">
<style>
html, body { margin: 0; padding: 0; }
body > * { position: relative; z-index: 1; }
</style>`;return/<head[^>]*>/i.test(i)?i.replace(/<head([^>]*)>/i,`<head$1>${l}`):`<!DOCTYPE html><html><head>${l}</head><body>${i}</body></html>`}function $i(i){return i.split("/").pop().replace(/\.(md|html)$/,"")}function um(i){return i.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function hd(i){const a=i.trim().split(/\s+/).filter(Boolean).length;return`${Math.max(1,Math.round(a/220))} min read`}function bs(i){return i?Array.isArray(i)?i.map(a=>`${a}`.trim()).filter(Boolean):`${i}`.replace(/^\[/,"").replace(/\]$/,"").split(",").map(a=>a.replace(/^["']|["']$/g,"").trim()).filter(Boolean):[]}function fd(i){return`${i}`.trim().toLowerCase()==="true"}function md(i){if(!i)return"";const a=new Date(i);return Number.isNaN(a.getTime())?i:new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(a)}function dm(i){if(!i.startsWith("---"))return{attributes:{},body:i};const a=i.indexOf(`
---`,3);if(a===-1)return{attributes:{},body:i};const l=i.slice(3,a).trim(),s=i.slice(a+4).trim(),c={};return l.split(`
`).forEach(h=>{const f=h.indexOf(":");if(f===-1)return;const w=h.slice(0,f).trim(),g=h.slice(f+1).trim();c[w]=g.replace(/^["']|["']$/g,"")}),c.tags&&(c.tags=bs(c.tags)),{attributes:c,body:s}}function pm(i,a){return`
        <div class="article-card-markdown-inner">
            <span class="article-preview-type">Markdown</span>
            <h4>${i}</h4>
            <p>${a}</p>
        </div>
    `}function hm([i,a]){const{attributes:l,body:s}=dm(a),c=s.replace(/^#{1,6}\s+/gm,"").replace(/[*_`>#-]/g," ").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/\s+/g," ").trim(),h=s.match(/^#\s+(.+)$/m),f=l.excerpt||c.slice(0,180).trim(),w=l.title||(h?h[1].trim():$i(i));return{slug:l.slug||Or($i(i)),title:w,date:md(l.date||""),sortDate:l.date||"",excerpt:f,tags:bs(l.tags),readingTime:hd(c),kind:"markdown",category:l.category||"Article",coverImage:l.cover||"",accent:l.accent||"",featured:fd(l.featured||"false"),bodyHtml:ke.parse(s),previewHtml:pm(w,f)}}function fm([i,a]){const l=cm(a),c=new DOMParser().parseFromString(l,"text/html"),h=c.title||$i(i),f=c.querySelector('meta[name="description"]')?.content||"",w=c.querySelector('meta[name="keywords"]')?.content||"",g=c.querySelector("p")?.textContent?.trim()||"",x=c.querySelector('meta[property="article:published_time"]')?.content||c.querySelector('meta[name="date"]')?.content||"",v=c.querySelector('meta[name="category"]')?.content||"Article",P=c.querySelector('meta[property="og:image"]')?.content||c.querySelector('meta[name="cover"]')?.content||"",I=c.querySelector('meta[name="theme-color"]')?.content||"",O=fd(c.querySelector('meta[name="featured"]')?.content||"false"),z=f||g||"Standalone HTML article rendered inside the React reader.",q=um(c.body?.innerHTML||a);return{slug:Or($i(i)),title:h,date:md(x),sortDate:x,excerpt:z,tags:bs(w),readingTime:hd(q),kind:"html",category:v,coverImage:P,accent:I,featured:O,raw:l}}const Gt=[...Object.entries(sm).map(hm),...Object.entries(lm).map(fm)].sort((i,a)=>{if(i.featured!==a.featured)return i.featured?-1:1;const l=i.sortDate?new Date(i.sortDate).getTime():0,s=a.sortDate?new Date(a.sortDate).getTime():0;return l!==s?s-l:i.title.localeCompare(a.title)});function gd(i){return Gt.find(a=>a.slug===i)}function mm(){return Array.from(new Set(Gt.flatMap(i=>i.tags))).sort((i,a)=>i.localeCompare(a))}const vd="rk-theme";function gm(){if(typeof window>"u")return"dark";const i=window.localStorage.getItem(vd);return i==="light"||i==="dark"?i:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function vm(){const[i,a]=Ze.useState(gm);return Ze.useEffect(()=>{document.documentElement.dataset.theme=i,document.documentElement.style.colorScheme=i,document.body.dataset.theme=i,window.localStorage.setItem(vd,i);const l=document.querySelector('meta[name="theme-color"]');l&&l.setAttribute("content",i==="dark"?"#050505":"#ffffff")},[i]),{theme:i,toggleTheme:()=>a(l=>l==="dark"?"light":"dark")}}function ym({theme:i,onToggleTheme:a}){const l=i==="dark";return p.jsxs("button",{type:"button",className:"theme-toggle",onClick:a,"aria-label":"Toggle color theme",children:[p.jsx("span",{className:"theme-toggle-track",children:p.jsx("span",{className:`theme-toggle-thumb${l?" is-dark":""}`})}),p.jsx("span",{className:"theme-toggle-label",children:l?"Dark":"Light"})]})}const wm=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Projects",to:"/projects"},{label:"Articles",to:"/articles"},{label:"Contact",to:"/contact"}];function xm({theme:i,onToggleTheme:a}){const[l,s]=Ze.useState(!1);return p.jsx("header",{className:"site-header",children:p.jsxs("div",{className:"shell header-shell",children:[p.jsxs(Fe,{className:"brand-mark",to:"/",onClick:()=>s(!1),children:[p.jsx("span",{className:"brand-mark-label",children:"Radhakishan Jangid"}),p.jsx("span",{className:"brand-mark-subtitle",children:"Senior software engineer"})]}),p.jsxs("button",{type:"button",className:"menu-toggle","aria-label":"Toggle navigation","aria-expanded":l,onClick:()=>s(c=>!c),children:[p.jsx("span",{}),p.jsx("span",{})]}),p.jsxs("div",{className:`header-panel${l?" is-open":""}`,children:[p.jsx("nav",{className:"primary-nav","aria-label":"Primary",children:wm.map(c=>p.jsx(df,{exact:c.to==="/",activeClassName:"is-active",to:c.to,onClick:()=>s(!1),children:c.label},c.to))}),p.jsxs("div",{className:"header-actions",children:[p.jsx(Fe,{className:"header-cta",to:"/contact",onClick:()=>s(!1),children:"Let's talk"}),p.jsx(ym,{theme:i,onToggleTheme:a})]})]})]})})}const km=[{id:"github",label:"GitHub",href:"https://github.com/radhakishan404"},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/radhakishanjangid"},{id:"x",label:"X",href:"https://x.com/radhakishan404"},{id:"dev",label:"DEV",href:"https://dev.to/radhakishanjangid404"},{id:"instagram",label:"Instagram",href:"https://www.instagram.com/radhakishanjangid404"},{id:"email",label:"Email",href:"mailto:radhakishanjangid404@gmail.com"}],bm=[{label:"radhakishanjangid404@gmail.com",href:"mailto:radhakishanjangid404@gmail.com",external:!1},{label:"GitHub",href:"https://github.com/radhakishan404",external:!0},{label:"LinkedIn",href:"https://www.linkedin.com/in/radhakishanjangid",external:!0},{label:"DEV",href:"https://dev.to/radhakishanjangid404",external:!0}],Sm=[{value:"7+",label:"Years building web products"},{value:"React",label:"Frontend and product UI"},{value:"Node",label:"APIs and backend delivery"}];function Tm({id:i}){switch(i){case"github":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.8c-2.95.64-3.57-1.25-3.57-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.08-.65.08-.65 1.06.08 1.62 1.09 1.62 1.09.95 1.62 2.48 1.16 3.08.88.09-.69.37-1.16.67-1.43-2.36-.27-4.84-1.18-4.84-5.24 0-1.16.42-2.11 1.1-2.85-.11-.27-.48-1.36.11-2.83 0 0 .9-.29 2.95 1.09a10.19 10.19 0 0 1 5.38 0c2.05-1.38 2.95-1.09 2.95-1.09.59 1.47.22 2.56.11 2.83.68.74 1.1 1.69 1.1 2.85 0 4.07-2.49 4.97-4.87 5.23.38.33.72.98.72 1.98v2.94c0 .29.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z"})});case"linkedin":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 1 0 3.24 5a1.96 1.96 0 0 0 3.92-.05ZM20 13.05c0-3.35-1.79-4.91-4.18-4.91a3.62 3.62 0 0 0-3.25 1.79V8.5H9.19V20h3.38v-6.05c0-1.6.3-3.14 2.28-3.14 1.95 0 1.98 1.82 1.98 3.24V20H20v-6.95Z"})});case"x":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"m18.9 2 2.6 3.8-6.02 6.88L22 22h-5.16l-4.04-5.47L8.02 22H2.88l6.38-7.3L2 2h5.25l3.67 4.97L15.28 2h3.62Zm-1.8 17.1h1.43L6.14 4.8H4.6l12.5 14.3Z"})});case"dev":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M7.8 9.4h-1v5.2h1c1.43 0 1.95-.83 1.95-2.61 0-1.84-.54-2.59-1.95-2.59ZM3 6.5h18A1.5 1.5 0 0 1 22.5 8v8A1.5 1.5 0 0 1 21 17.5H3A1.5 1.5 0 0 1 1.5 16V8A1.5 1.5 0 0 1 3 6.5Zm2.8 2v7h2.2c2.72 0 4.05-1.4 4.05-4.5 0-3-1.36-4.5-4.05-4.5H5.8Zm7.2 0v7h4.55v-1.8H15.2v-1h1.95v-1.75H15.2v-.95h2.32V8.5H13Zm5.02 0 1.55 7h2.03l1.4-7h-1.97l-.48 3.77-.5-3.77h-1.74l-.56 3.78-.45-3.78h-1.94Z"})});case"instagram":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9A3.7 3.7 0 0 0 7.5 20.2h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm4.5 3a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.4-.94a1.22 1.22 0 1 1 0 2.44 1.22 1.22 0 0 1 0-2.44Z"})});case"email":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.8v.38l9 5.84 9-5.84V7.3H3Zm18 9.4v-6.03l-8.51 5.52a.9.9 0 0 1-.98 0L3 10.67v6.03h18Z"})});default:return null}}function Em(){return p.jsx("aside",{className:"social-rail","aria-label":"Social links",children:km.map((i,a)=>p.jsxs("a",{href:i.href,target:i.id==="email"?void 0:"_blank",rel:i.id==="email"?void 0:"noreferrer",className:"social-rail-link",style:{animationDelay:`${a*80}ms`},"aria-label":i.label,title:i.label,children:[p.jsx(Tm,{id:i.id}),p.jsx("span",{children:i.label})]},i.href))})}function Cm({children:i}){const a=of(),{theme:l,toggleTheme:s}=vm(),c=a.pathname.match(/^\/articles\/([^/]+)$/);return(c?gd(c[1]):null)?.kind==="html"?p.jsx("div",{className:"site-root site-root-embedded",children:p.jsx("main",{className:"site-main site-main-embedded",children:i},a.pathname)}):p.jsxs("div",{className:"site-root",children:[p.jsx(xm,{theme:l,onToggleTheme:s}),p.jsx(Em,{}),p.jsx("main",{className:"site-main",children:i},a.pathname),p.jsx("footer",{className:"site-footer",children:p.jsx("div",{className:"shell footer-shell",children:p.jsxs("p",{className:"footer-copy",children:["© ",new Date().getFullYear()," Radhakishan Jangid"]})})})]})}const Pm=[{isCurrent:1,title:"Senior Software Engineer",companyName:"Cachetech Advisor Solutions (USA)",companyLink:"https://www.cachetech.com/",location:"Mumbai, India",from:"February 2024",to:"Present",description:"Working with US-based product and engineering teams to build scalable fintech systems, including workflow management, multi-tenancy architecture, and React Native mobile app delivery."},{isCurrent:0,title:"Manager - Software Engineer",companyName:"Edubridge India Pvt Ltd",companyLink:"https://www.edubridgeindia.com/",location:"Mumbai, India",from:"December 2022",to:"January 2024",description:"Led migration from PHP to MERN stack, built a resume builder platform, and shipped microservice-based products with Jenkins + Docker CI/CD pipelines."},{isCurrent:0,title:"Senior Software Engineer",companyName:"TechStalwarts Software Development LLP",companyLink:"http://www.techstalwarts.com/",location:"Mumbai, India",from:"September 2020",to:"November 2022",description:"Handled ecommerce platform delivery across frontend, backend, AWS deployments, and third-party API integrations for high-traffic production systems."},{isCurrent:0,title:"PHP Web Developer",companyName:"Innovins Softtech Solutions Pvt. Ltd",companyLink:"https://www.innovins.com/",location:"Mumbai, India",from:"July 2019",to:"August 2020",description:"Maintained and developed multiple enterprise portals and internal productivity systems, including API and task management features."},{isCurrent:0,title:"PHP Web Developer with CodeIgniter",companyName:"IMPAQ Technologies Pvt. Ltd",companyLink:"http://impaq.co.in/",location:"Mumbai, India",from:"August 2018",to:"June 2019",description:"Delivered CMS and admission workflow modules, including business logic automation and platform maintenance for multiple client projects."}],Im=[{skillName:"Professional skills",skillType:[{title:"Front End Development",description:"Good sense of knowledge for <strong>Front End Development</strong>, building complex user interfaces with high level UX for both web and mobile.",skillsList:[{skillTitle:"JavaScript Development",skillDesc:"Learning Architecting and building web/mobile applications with React, JavaScript/TypeScript."},{skillTitle:"Responsive Design",skillDesc:"adapting and optimizing web pages to work on all screen sizes (mobile and tablet devices)."},{skillTitle:"Design to Web",skillDesc:"Converting design files to interactive, responsive and optimized web applications."}]},{title:"Back End Development",description:"Building Node.js web applications and <strong>RESTful API</strong> servers using technologies like <strong>Express, Core PHP and CodeIgniter</strong>.",skillsList:[{skillTitle:"RESTful API",skillDesc:"Experienced in Design and development of RESTful API servers using Node, PHP and CodeIgniter Framework."},{skillTitle:"Web Development",skillDesc:"Experienced in Design and development of Web Application using React Js, PHP, CodeIgniter and Laravel Framework."},{skillTitle:"E-commerce",skillDesc:"Design and development of E-Commerece using React Js, PHP, CodeIgniter and Laravel Framework."},{skillTitle:"Payment Gateway",skillDesc:"Experienced in working on server side payment systems with both PHP and NodeJS platforms."}]},{title:"Mobile App Development",description:"Learning developing native and hybrid mobile applications using <strong>Ionic Framework</strong> and <strong>React Native Framework</strong>.",skillsList:[{skillTitle:"Hybrid mobile apps",skillDesc:"Learning development of hybrid mobile apps for Android, iOS and Windows Phone based on Ionic 3/Cordova or Ionic 4/Capacitor technologies."},{skillTitle:"Native mobile apps",skillDesc:"Learning development of native mobile apps for Android, iOS using React Native Framework."}]}]}],Am=JSON.parse(`[{"id":11,"title":"Notch Prompter","description":"A notch-aligned native macOS teleprompter built with SwiftUI.","logo":"/images/github.svg","thumbnail":"https://opengraph.githubassets.com/1/radhakishan404/notch-prompter","gitAvailable":true,"tag":"Open Source, GitHub, Application, UX, Front-end","technology":"SwiftUI, macOS, Product Design","date":"2026","isPackage":false,"onlineLink":"https://notch-prompter.vercel.app","sliderImages":[{"image":"https://opengraph.githubassets.com/1/radhakishan404/notch-prompter"},{"image":"/images/project/POS-1.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Notch Prompter is a <strong>native macOS utility</strong> focused on notch-aligned teleprompter usability with a clean and practical UI.","contentList":[{"isLink":true,"link":"https://notch-prompter.vercel.app","text":"Project website"},{"isLink":true,"link":"https://github.com/radhakishan404/notch-prompter","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Native SwiftUI experience"},{"isLink":false,"link":"","text":"Optimized reading layout near notch area"},{"isLink":false,"link":"","text":"Simple interaction model for creators"}]},{"contentTitle":"Responsibilities","contentDescription":"Built this project from idea to public release.","contentList":[{"isLink":false,"link":"","text":"Product concept and UI flow"},{"isLink":false,"link":"","text":"Implementation and testing"},{"isLink":false,"link":"","text":"Release and public showcase"}]}]},{"id":10,"title":"SSHipIt","description":"CD over SSH for Node.js, Next.js and React applications.","logo":"/images/github.svg","thumbnail":"https://opengraph.githubassets.com/1/radhakishan404/sshipit","gitAvailable":true,"tag":"Open Source, GitHub, Node Js, React, JavaScript, DevOps, Back-end, Website","technology":"Node Js, JavaScript, CI/CD, SSH, React, Next.js","date":"2026","isPackage":false,"onlineLink":"https://sshipit.vercel.app/","sliderImages":[{"image":"https://opengraph.githubassets.com/1/radhakishan404/sshipit"},{"image":"/images/project/npm/react-animation-loader.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"SSHipIt is an open source deployment utility to run reliable CD pipelines over SSH for <strong>Node.js, Next.js and React</strong> applications.","contentList":[{"isLink":true,"link":"https://sshipit.vercel.app/","text":"Project website"},{"isLink":true,"link":"https://github.com/radhakishan404/sshipit","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"SSH-based deployment flow"},{"isLink":false,"link":"","text":"Node.js / Next.js / React support"},{"isLink":false,"link":"","text":"Simple, self-hosted CI/CD pattern"}]},{"contentTitle":"Responsibilities","contentDescription":"Designed and built the project as an open source product.","contentList":[{"isLink":false,"link":"","text":"Architecture and implementation"},{"isLink":false,"link":"","text":"Documentation and onboarding guides"},{"isLink":false,"link":"","text":"Maintenance and enhancements"}]}]},{"id":1,"title":"Nirulas","description":"Nirula's is India's oldest fast food restaurant chain.","logo":"/images/project/nirulas-logo.webp","thumbnail":"/images/project/nirulas-thumb.webp","gitAvailable":false,"tag":"React, Node Js, JavaScript, Front-end, Back-end, REST, UX, Website","technology":"React, Express, Node Js, JavaScript, Redux, Amazon, Google Analytics","date":"November 2020","onlineLink":"https://delivery.nirulas.com/","sliderImages":[{"image":"/images/project/nirulas-slider-5.gif"},{"image":"/images/project/nirulas-slider-1.webp"},{"image":"/images/project/nirulas-slider-2.webp"},{"image":"/images/project/nirulas-slider-3.webp"},{"image":"/images/project/nirulas-slider-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Nirula's is India's oldest fast food restaurant chain. Based in North India and most popular in the <strong>NCR Delhi</strong>. It was Delhi's first fast food restaurant, opening in Connaught Place in 1977. The website was initially build on Angular Js but was later moved to <strong>React and Node Js</strong>. React used on the client-side input handling and Node Js is used for the server-side to handle connectivity between databases. It utilizes some advanced <strong>page transition</strong> and <strong>animations</strong>.","contentList":[{"isLink":true,"link":"https://delivery.nirulas.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Product Listing"},{"isLink":false,"link":"","text":"Add to cart with Animation"},{"isLink":false,"link":"","text":"Coupon Apply"},{"isLink":false,"link":"","text":"Place Order"},{"isLink":false,"link":"","text":"OTP verify"},{"isLink":false,"link":"","text":"Live location fetch"},{"isLink":false,"link":"","text":"Location based delivery"}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete website both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>Node Js Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"Third Party <strong>Google Analytics, Message and Facebook Pixel</strong> API Integration"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Front-end and Back-end</strong>"},{"isLink":false,"link":"","text":"<strong>Deployment</strong> of both React and Node Js Application"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I faced <strong>designing and architecting the base structure</strong> of the application. Building a web app for fast and durable react was a perfect choice for future growth and maintainability. <strong>React Components, React-Redux, and Lazy loading modules</strong> made this whole project lot easier by allowing me to separate the app logic by modules (per feature). One of the biggest challenges during development was maintaining the <strong>product customization and pricing module</strong>. I have created a separate component for the customization and called API based on the product by that I handled the <strong>customization and pricing part in Node JS API</strong>. I <strong>learned</strong> many new things while building this project still I am getting new changes and new phases to work on.","contentList":null}]},{"id":8,"title":"Nirulas POS","description":"Nirula's is India's oldest fast food restaurant chain.","logo":"/images/project/nirulas-logo.webp","thumbnail":"/images/project/POS-1.png","gitAvailable":false,"tag":"React, Node Js, JavaScript, Front-end, Back-end, REST, UX, Website","technology":"React, Express, Node Js, JavaScript, Redux, Amazon, Google Analytics","date":"April 2021","onlineLink":"https://delivery.nirulas.com/","sliderImages":[{"image":"/images/project/POS-1.png"},{"image":"/images/project/POS-2.png"},{"image":"/images/project/POS-3.png"},{"image":"/images/project/POS-4.png"},{"image":"/images/project/POS-5.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Nirula's is India's oldest fast food restaurant chain. Based in North India and most popular in the <strong>NCR Delhi</strong>. It was Delhi's first fast food restaurant, opening in Connaught Place in 1977. The website was initially build on Angular Js but was later moved to <strong>React and Node Js</strong>. React used on the client-side input handling and Node Js is used for the server-side to handle connectivity between databases. It utilizes some advanced <strong>page transition</strong> and <strong>animations</strong>.","contentList":[{"isLink":true,"link":"https://branch.nirulas.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Product Listing"},{"isLink":false,"link":"","text":"Add to cart with Animation"},{"isLink":false,"link":"","text":"Coupon Apply"},{"isLink":false,"link":"","text":"Place Order"},{"isLink":false,"link":"","text":"OTP verify"},{"isLink":false,"link":"","text":"Product Stock"},{"isLink":false,"link":"","text":"Branch Orders"},{"isLink":false,"link":"","text":"Branch Dashboard"}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete website both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>Node Js Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"Third Party <strong>Google Analytics, Message and Facebook Pixel</strong> API Integration"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Front-end and Back-end</strong>"},{"isLink":false,"link":"","text":"<strong>Deployment</strong> of both React and Node Js Application"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I faced <strong>designing and architecting the base structure</strong> of the application. Building a web app for fast and durable react was a perfect choice for future growth and maintainability. <strong>React Components, React-Redux, and Lazy loading modules</strong> made this whole project lot easier by allowing me to separate the app logic by modules (per feature). One of the biggest challenges during development was maintaining the <strong>product customization and pricing module</strong>. I have created a separate component for the customization and called API based on the product by that I handled the <strong>customization and pricing part in Node JS API</strong>. I <strong>learned</strong> many new things while building this project still I am getting new changes and new phases to work on.","contentList":null}]},{"id":2,"title":"Covid-19 Tracker","description":"Covid-19 Tracker is a simple React Native application.","logo":"/images/project/covid/covid-19-logo.webp","thumbnail":"/images/project/covid/covid-19-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, Application, REST, UX, Design, GitHub","technology":"React Native, Expo, Mathdroid Covid API, Novelcovid API, React Navigation","date":"3 April, 2020 - 13 April, 2020","onlineLink":"http://radhakishan.site/covid-download.php","sliderImages":[{"image":"/images/project/covid/covid-slider-1.webp"},{"image":"/images/project/covid/covid-slider-2.webp"},{"image":"/images/project/covid/covid-slider-3.webp"},{"image":"/images/project/covid/covid-slider-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Covid-19 Tracker is a simple <strong>React Native</strong> application that shows you the Current and <strong>Total Infected, Recovered, and Deaths</strong> of people all around the globe and you can see data based on <strong>country selection</strong>.","contentList":[{"isLink":true,"link":"https://radhakishan.site/covid-download.php","text":"Link to download the apk file"},{"isLink":true,"link":"https://github.com/radhakishan404/covid-19-tracker","text":"Source Code"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Country Selector"},{"isLink":false,"link":"","text":"React Native Line and Bar Chart"},{"isLink":false,"link":"","text":"Image gallery"},{"isLink":false,"link":"","text":"Stylish Bottom Navigation Bar"},{"isLink":false,"link":"","text":"Search country and get latest data"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included design and development of a complete application.","contentList":[{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"<strong>API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Application</strong>"}]},{"contentTitle":"Challenges","contentDescription":"This was my first <strong>React Native</strong> Application. I had some problems at the start but later I was able to <strong>understand the problem and solve them</strong>. The biggest challenge for me was the <strong>Image gallery</strong> section for making the images responsive, In the end, I was able to make all images <strong>proper and responsive</strong>.","contentList":null}]},{"id":3,"title":"Health Monitoring System","description":"Health Monitoring System - Patient-Doctor Live Chat!","logo":"/images/project/hms/hms-logo.webp","thumbnail":"/images/project/hms/hms-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, Back-end, REST, UX, Design, PHP, MySql, GitHub","technology":"React Js, React-Redux, PHP, MySql, HTML, CSS, JS, VS Code","date":"1 August, 2020 - 10 August, 2020","onlineLink":"https://healthmonitoring.radhakishan.site/","sliderImages":[{"image":"/images/project/hms/hms-slider-1.webp"},{"image":"/images/project/hms/hms-slider-2.webp"},{"image":"/images/project/hms/hms-slider-3.webp"},{"image":"/images/project/hms/hms-slider-4.webp"},{"image":"/images/project/hms/hms-slider-5.webp"},{"image":"/images/project/hms/hms-slider-6.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>Health Monitoring System</strong> is a simple web project where <strong>patients</strong> can add their <strong>readings</strong> and <strong>doctors</strong> can check patient's readings and can send direct <strong>messages to each other</strong> through the application. Both patients and doctors need to <strong>log in or register</strong> before proceeds. Both patient and doctors can <strong>live chat</strong> with each other.","contentList":[{"isLink":true,"link":"https://healthmonitoring.radhakishan.site/","text":"Link to live demo"},{"isLink":true,"link":"https://github.com/radhakishan404/Health-Monitoring-System-Live-Chat","text":"Front-end Source Code"},{"isLink":true,"link":"https://github.com/radhakishan404/Health-Monitoring-System-Live-Chat/tree/master/health-monitoring-php","text":"API Source Code"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Login, Register, Forget Password"},{"isLink":false,"link":"","text":"Add, Edit, Delete, List (CRUD) for patient readings"},{"isLink":false,"link":"","text":"Chart view for Readings"},{"isLink":false,"link":"","text":"Profile Edit"},{"isLink":false,"link":"","text":"Doctors Message List"},{"isLink":false,"link":"","text":"Live Chat with doctors"},{"isLink":false,"link":"","text":"List of patients"},{"isLink":false,"link":"","text":"Live search of patients"},{"isLink":false,"link":"","text":"Chart view details about patients"},{"isLink":false,"link":"","text":"Direct message to patients"},{"isLink":false,"link":"","text":"Live Chat with Patients"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"First Install Node Js Version 14.8.0 from <a class='text-gradient' href='https://nodejs.org/en/' rel='nofollow'>Here ↩</a>"},{"isLink":false,"link":"","text":"Clone the repo into your disk <br><strong class='code'>$ git clone git@github.com:ruanyf/react-demos.git</strong>"},{"isLink":false,"link":"","text":"Then go to your project directory using this command. <br><strong class='code'>$ cd project-directory</strong>"},{"isLink":false,"link":"","text":"After navigating to your project directory run this command to download all the node modules. <br><strong class='code'>$ npm install</strong>"},{"isLink":false,"link":"","text":"After the installation successful run this command to run the application. This command will start your react app and run it into the browser. <br><strong class='code'>$ npm start</strong>"},{"isLink":false,"link":"","text":"Hooray! Then play with the source files under the directories."},{"isLink":false,"link":"","text":"<strong>Note:</strong> After the start of the project, you have to integrate the <strong>PHP API</strong> for storing the data in the <strong>database</strong>."}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete project both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>PHP Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Application</strong>"}]},{"contentTitle":"Challenges","contentDescription":"I had only <strong>two main challenges</strong> in this project, one was the creation of a <strong>chat application between patients and doctors</strong>, and the second was the <strong>handling of two different users</strong> (Patients and Doctors) on the same panel. I used some of the online examples for <strong>chat systems</strong> and also my previous experience in other projects.","contentList":null},{"contentTitle":"Resources","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"ReactJS: Refer to <a href='https://reactjs.org/' class='text-gradient'>https://reactjs.org/</a> to understand the concepts of ReactJS."},{"isLink":false,"link":"","text":"React Bootstrap: Refer to <a class='text-gradient' href='https://react-bootstrap.github.io/getting-started/introduction/'>https://react-bootstrap.github.io/getting-started/introduction/</a> to understand how to use React Bootstrap."}]}]},{"id":4,"title":"react-native-stylish-accordion","description":"Simple Stylish React Native Accordion","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/react-native-accordion-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, TypeScript, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, TypeScript, NPM, VS Code","date":"October 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/react-native-stylish-accordion","sliderImages":[{"image":"/images/project/npm/react-native-accordion-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>react-native-stylish-accordion</strong> is a simple <strong>React Native NPM Package</strong> that can be used in your <strong>React Native Expo Version Application</strong>. It has a total of <strong>9 versions</strong>, the latest version <strong>1.0.9</strong>. The file size is only <strong>675 kB</strong>.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-native-stylish-accordion","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/react-native-stylish-accordion","text":"Link to NPM Package"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Colour"},{"isLink":false,"link":"","text":"Custom Icon"},{"isLink":false,"link":"","text":"Custom Transition Time"},{"isLink":false,"link":"","text":"Custom Icon Size"},{"isLink":false,"link":"","text":"Custom Style"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install react-native-stylish-accordion</strong> OR <strong class='code'>$ yarn add react-native-stylish-accordion</strong>"},{"isLink":false,"link":"","text":"Now we need to install react-native-reanimated and react-native-animatable. If you are using Expo, to ensure that you get the compatible versions of the libraries, run: <br><strong class='code'>$ expo install react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"If you are not using Expo, run the following: <br><strong class='code'>$ yarn add react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"<strong>Note</strong>: This is created with the help of <strong>react-native-accordion-view</strong> package."}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>title</strong> (string)"},{"isLink":false,"link":"","text":"<strong>titleStyle</strong> (TextStyle)"},{"isLink":false,"link":"","text":"<strong>iconSize</strong> (number)"},{"isLink":false,"link":"","text":"<strong>headerStyle</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>subContainerStyle</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>style</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>headerComponent</strong> (ReactNode)"},{"isLink":false,"link":"","text":"<strong>open</strong> (boolean)"},{"isLink":false,"link":"","text":"<strong>onPress</strong> (void)"},{"isLink":false,"link":"","text":"<strong>timingTransition</strong> (number default:400) opening speed"},{"isLink":false,"link":"","text":"<strong>containerRadius</strong> (number)"}]}]},{"id":5,"title":"validate-form-in-expo-style","description":"Simple form validation component with floating label for React-Native inspired by react-native-form-validator","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/validate-form-expo-style-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, NPM, VS Code","date":"November 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/validate-form-in-expo-style","sliderImages":[{"image":"/images/project/npm/validate-form-expo-style-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"ℹ️ <strong>validate-form-in-expo-style</strong> is a Simple form validation component with floating label for React-Native inspired by <a class='text-gradient' href='https://github.com/NewOldMax/react-native-validator-form' rel='nofollow'>react-native-form-validator</a>. You can add <strong>floating label</strong> with this library and can validate form. I created this package for my personal use you can use it in yours too. <br> <br> My bad, that I don't have Mac or IPhone, so this library is tested only in android. Do check it in Mac and let me know if any problem occurs.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/validate-form-in-expo-style","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/validate-form-in-expo-style","text":"Link to NPM Package"},{"isLink":true,"link":"https://youtu.be/y7bkVDu0LVA","text":"Link to Example Video"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Regexp Rules"},{"isLink":false,"link":"","text":"Custom Valid and Invalid Icon"},{"isLink":false,"link":"","text":"Custom Left Icon"},{"isLink":false,"link":"","text":"Custom Error Messages"},{"isLink":false,"link":"","text":"Custom Style"},{"isLink":false,"link":"","text":"Custom Validation"}]},{"contentTitle":"Install","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install validate-form-in-expo-style</strong> OR <strong class='code'>$ yarn add validate-form-in-expo-style</strong>"},{"isLink":false,"link":"","text":"Now we need to install react-native-reanimated and react-native-animatable. If you are using Expo, to ensure that you get the compatible versions of the libraries, run: <br><strong class='code'>$ expo install react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"If you are not using Expo, run the following: <br><strong class='code'>$ yarn add react-native-reanimated react-native-gesture-handler react-native-redash</strong>"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":true,"link":"https://www.npmjs.com/package/validate-form-in-expo-style#-how-to-use-","text":"Link to the code example"}]},{"contentTitle":"Supoorted types","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>TextInput</strong>"}]},{"contentTitle":"Default Validation Rules","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>matchRegexp</strong> (To match any regexp validation)"},{"isLink":false,"link":"","text":"<strong>isEmail</strong> (Is email is valid or not)"},{"isLink":false,"link":"","text":"<strong>isEmpty</strong> (Is field is empty or not)"},{"isLink":false,"link":"","text":"<strong>required</strong> (Is field is required or not)"},{"isLink":false,"link":"","text":"<strong>trim</strong> (Trim the value of field)"},{"isLink":false,"link":"","text":"<strong>isNumber</strong> (Is the value is number or not)"},{"isLink":false,"link":"","text":"<strong>isFloat</strong> (Is the value is float or not)"},{"isLink":false,"link":"","text":"<strong>isPositive</strong> (Is the value is positive or not)"},{"isLink":false,"link":"","text":"<strong>minNumber</strong> (Min number to be entered)"},{"isLink":false,"link":"","text":"<strong>maxNumber</strong> (Max number can be entered)"},{"isLink":false,"link":"","text":"<strong>minFloat</strong> (Min float value to be entered)"},{"isLink":false,"link":"","text":"<strong>maxFloat</strong> (Max float value can be entered)"},{"isLink":false,"link":"","text":"<strong>minStringLength</strong> (Minimum length of string to be entered)"},{"isLink":false,"link":"","text":"<strong>maxStringLength</strong> (Maximum length of string can be entered)"},{"isLink":false,"link":"","text":"<strong>isString</strong> (Is value is string or not)"},{"isLink":false,"link":"","text":"Some rules that are added in validationName can accept extra parameter for validation, like: <br> <strong class='code'><div class='highlight javascript'><pre class='editor editor-colors'><div class='line'><span class='source js'><span class='keyword operator comparison js'><span>&lt;</span></span><span>InputText</span></span></div><div class='line'><span class='source js'><span>&nbsp;&nbsp;&nbsp;</span><span class='meta brace curly js'><span>{</span></span><span class='keyword operator js'><span>...</span></span><span>otherProps</span><span class='meta brace curly js'><span>}</span></span></span></div><div class='line'><span class='source js'><span>&nbsp;&nbsp;&nbsp;validateNames</span><span class='keyword operator assignment js'><span>=</span></span><span class='meta brace curly js'><span>{</span></span><span class='meta brace square js'><span>[</span></span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>minNumber:1</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta delimiter object comma js'><span>,</span></span><span>&nbsp;</span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>maxNumber:255</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta delimiter object comma js'><span>,</span></span><span>&nbsp;</span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>matchRegexp:^[0-9]$</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta brace square js'><span>]</span></span><span class='meta brace curly js'><span>}</span></span></span></div><div class='line'><span class='source js'><span class='keyword operator js'><span>/</span></span><span class='keyword operator comparison js'><span>&gt;</span></span></span></div></pre></div></strong>"}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>Form Props</strong> <br> <table> <thead> <tr> <th>Prop</th> <th>Required</th> <th>Type</th> <th>Default value</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>onSubmit</td> <td>true</td> <td>function</td> <td></td> <td>Callback for form that fires when all validations are passed</td> </tr> <tr> <td>instantValidate</td> <td>false</td> <td>bool</td> <td>true</td> <td>If true, form will be validated after each field change. If false, form will be validated only after clicking submit button.</td> </tr> <tr> <td>onError</td> <td>false</td> <td>function</td> <td></td> <td>Callback for form that fires when some of validations are not passed. It will return array of elements which not valid.</td> </tr> <tr> <td>debounceTime</td> <td>false</td> <td>number</td> <td>0</td> <td>Debounce time for validation i.e. your validation will run after <code>debounceTime</code> ms when you stop changing your input</td> </tr> </tbody> </table>"},{"isLink":false,"link":"","text":"<strong>InputText Props</strong> <br> <table> <thead> <tr> <th>Prop</th> <th>Required</th> <th>Type</th> <th>Default value</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>true</td> <td>string</td> <td></td> <td>Name of input field</td> </tr> <tr> <td>label</td> <td>false</td> <td>string</td> <td></td> <td>Name of input Floating Label</td> </tr> <tr> <td>placeholder</td> <td>false</td> <td>string</td> <td></td> <td>Placeholder of input before any value</td> </tr> <tr> <td>validateNames</td> <td>false</td> <td>array</td> <td></td> <td>Array of validation. See list of default validation rules in above example.</td> </tr> <tr> <td>errorMessages</td> <td>false</td> <td>array</td> <td></td> <td>Array of error messages. Order of messages should be the same as <code>validateNames</code> prop.</td> </tr> <tr> <td>errorStyle</td> <td>false</td> <td>object</td> <td>{ container: { top: 0, left: 0, position: 'absolute' }, text: { color: 'red' }, underlineValidColor: 'gray', underlineInvalidColor: 'red' } }</td> <td>Add your own error styles</td> </tr> <tr> <td>validatorListener</td> <td>false</td> <td>function</td> <td></td> <td>It triggers after each validation. It will return <code>true</code> or <code>false</code></td> </tr> <tr> <td>withRequiredValidator</td> <td>false</td> <td>bool</td> <td></td> <td>Allow to use <code>required</code> validator in any validation trigger, not only form submit</td> </tr> <tr> <td>leftIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display left icon see above example</td> </tr> <tr> <td>invalidIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display error icon on right side see above example</td> </tr> <tr> <td>validIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display success icon on right side see above example</td> </tr> <tr> <td>secureTextEntry</td> <td>false</td> <td>bool</td> <td>false</td> <td>If true than show hide icon will get added automatically</td> </tr> </tbody> </table>"}]},{"contentTitle":"Methods","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>Form Methods</strong> <br> <table> <thead> <tr> <th>Name</th> <th>Params</th> <th>Return</th> <th>Descriptipon</th> </tr> </thead> <tbody> <tr> <td>resetValidations</td> <td></td> <td></td> <td>Reset validation messages for all validated inputs</td> </tr> <tr> <td>isFormValid</td> <td>dryRun: bool (default true)</td> <td>Promise</td> <td>Get form validation state in a Promise (<code>true</code> if whole form is valid). Run with <code>dryRun = false</code> to show validation errors on form</td> </tr> </tbody> </table>"},{"isLink":false,"link":"","text":"<strong>InputText Methods</strong> <br> <table> <thead> <tr> <th>Name</th> <th>Params</th> <th>Return</th> <th>Descriptipon</th> </tr> </thead> <tbody> <tr> <td>getErrorMessage</td> <td></td> <td></td> <td>Get error validation message</td> </tr> <tr> <td>validate</td> <td>value: any, includeRequired: bool</td> <td></td> <td>Run validation for current component</td> </tr> <tr> <td>isValid</td> <td></td> <td>bool</td> <td>Return current validation state</td> </tr> <tr> <td>makeInvalid</td> <td></td> <td></td> <td>Set invalid validation state</td> </tr> <tr> <td>makeValid</td> <td></td> <td></td> <td>Set valid validation state</td> </tr> </tbody> </table>"}]}]},{"id":6,"title":"react-animation-loader","description":"Simple animation loader with some css animation and an image with moving animation","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/react-animation-loader-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, CSS, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, CSS, NPM, VS Code","date":"December 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/react-animation-loader","sliderImages":[{"image":"/images/project/npm/react-animation-loader-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>react-animation-loader</strong> simple animation loader with some <strong>css animation</strong> and an image with moving animation. Check it out. It has a total of <strong>5 versions</strong>, the latest version <strong>1.0.5</strong>. The file size is only <strong>11.3 kB</strong>.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-animation-loader","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/react-animation-loader","text":"Link to NPM Package"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Colour"},{"isLink":false,"link":"","text":"Custom Image"},{"isLink":false,"link":"","text":"Custom Transition Time"},{"isLink":false,"link":"","text":"Custom Image Size"},{"isLink":false,"link":"","text":"Custom Style"}]},{"contentTitle":"Install","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install Install</strong> OR <strong class='code'>$ yarn add Install</strong>"}]},{"contentTitle":"Example","contentDescription":"","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-animation-loader#example","text":"Link to code example"}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>isLoading</strong> (bool) (required)"},{"isLink":false,"link":"","text":"<strong>bgColor</strong> (string) (required)"},{"isLink":false,"link":"","text":"<strong>icon</strong> (string)"}]}]},{"id":7,"title":"Stock Money Makers","description":"Stock Money Makers provides the best online stock market courses in india which Includes exclusive banknifty intraday course, technical analysis course, bank nifty option course, stock market courses for beginners & much more.","logo":"/images/project/smm/logo.webp","thumbnail":"/images/project/smm/smm-1.webp","gitAvailable":false,"tag":"PHP, CodeIgniter, jQuery, JavaScript, MySql, HTML5, Mobirise","technology":"PHP, CodeIgniter, jQuery, JavaScript, MySQL, HTML5, Mobirise","date":"February 2020 - March 2020","isPackage":false,"onlineLink":"https://stockmoneymakers.com/","sliderImages":[{"image":"/images/project/smm/smm-1.webp"},{"image":"/images/project/smm/smm-2.webp"},{"image":"/images/project/smm/smm-3.webp"},{"image":"/images/project/smm/smm-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Stock Market Trader/Investor/Consultancy/Financial Advisor. Stock Money Makers Team's Main Purpose Is To Help People Learn About The Stock Market.","contentList":[{"isLink":true,"link":"https://stockmoneymakers.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Admin Panel"},{"isLink":false,"link":"","text":"Paid Webinar Courses"},{"isLink":false,"link":"","text":"Blogs"},{"isLink":false,"link":"","text":"Course uploading using plupload"},{"isLink":false,"link":"","text":"Payment Gateway"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included <strong>design and development</strong> of a complete website.","contentList":[{"isLink":false,"link":"","text":"Layout, UI and UX design"},{"isLink":false,"link":"","text":"Front End Development"},{"isLink":false,"link":"","text":"Back End Development"},{"isLink":false,"link":"","text":"Integration with Google Analytics"},{"isLink":false,"link":"","text":"Responsive Design"},{"isLink":false,"link":"","text":"User Experience"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I occurred was <strong>designing and architecting</strong> the base structure of front-end. Building a web app with <strong>CodeIgniter</strong> a perfect choice for future growth and maintainability of a <strong>web application</strong>. CodeIgniter Framework made this a whole lot easier by allowing us to separate the <strong>Logic, Modules and View</strong>. One of the biggest challenges during development was uploading <strong>large video course</strong> of the web app in the back-end.","contentList":null}]},{"id":9,"title":"Bright Wood - Buy Furniture Online","description":"This project was created for one of my friend. He was my relative also so I gave me the best website to manage inventory and orders from site. In this project admin can create multiple variant of product with various type of colors and size of the product.","logo":"/images/project/bright-wood-logo.png","thumbnail":"/images/project/bright-wood-1.png","gitAvailable":false,"tag":"PHP, jQuery, JavaScript, MySql, HTML5, Razorpay","technology":"PHP, jQuery, JavaScript, MySQL, HTML5, Razorpay","date":"July 2021 - September 2021","isPackage":false,"onlineLink":"https://brightwood.in/","sliderImages":[{"image":"/images/project/bright-wood-1.png"},{"image":"/images/project/bright-wood-2.png"},{"image":"/images/project/bright-wood-3.png"},{"image":"/images/project/bright-wood-4.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Bright Wood Provide the best furniture in market, There designs are inspired by the new generation with a classic touch. Brightwood is proud to offer a wide range of solid wood furniture at great prices. Our full array of furniture includes living room, dining room, home office, bedroom, and kids furniture.","contentList":[{"isLink":true,"link":"https://brightwood.in/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Admin Panel"},{"isLink":false,"link":"","text":"Furniture Product"},{"isLink":false,"link":"","text":"Category"},{"isLink":false,"link":"","text":"Online Payment Gateway"},{"isLink":false,"link":"","text":"Filtered Product"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included <strong>design and development</strong> of a complete website.","contentList":[{"isLink":false,"link":"","text":"Layout, UI and UX design"},{"isLink":false,"link":"","text":"Front End Development"},{"isLink":false,"link":"","text":"Back End Development"},{"isLink":false,"link":"","text":"Integration with Google Analytics"},{"isLink":false,"link":"","text":"Responsive Design"},{"isLink":false,"link":"","text":"User Experience"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I occurred was <strong>designing and architecting</strong> the base structure of front-end. Building a ecommerece with <strong>PHP</strong> a perfect choice for future growth and maintainability of a <strong>web application</strong>. PHP made this a whole lot easier by allowing us to create website faster. One of the biggest challenges during development was maintaining <strong>Variants of product</strong> of the web app in the back-end.","contentList":null}]}]`),Mr={experience:Pm,skills:Im,project:Am};function sn(i,a){const l=typeof i=="object"?i:{title:i,description:a};Ze.useEffect(()=>{const s=typeof window<"u"?window.location.href:"";l.title&&(document.title=l.title);const c=(w,g)=>{if(!g)return;const x=document.querySelector(w);x&&x.setAttribute("content",g)};l.description&&(c('meta[name="description"]',l.description),c('meta[property="og:description"]',l.description),c('meta[name="twitter:description"]',l.description)),l.title&&(c('meta[property="og:title"]',l.title),c('meta[name="twitter:title"]',l.title)),l.image&&(c('meta[property="og:image"]',l.image),c('meta[name="twitter:image"]',l.image)),s&&c('meta[property="og:url"]',s),c('meta[property="og:type"]',l.type||"website"),c('meta[name="twitter:card"]',l.twitterCard||"summary_large_image");const h=document.querySelector('link[rel="canonical"]');h&&s&&h.setAttribute("href",s);const f=document.querySelector('script[data-dynamic-seo="true"]');if(f&&f.remove(),l.structuredData){const w=document.createElement("script");w.type="application/ld+json",w.dataset.dynamicSeo="true",w.text=JSON.stringify(l.structuredData),document.head.appendChild(w)}},[l.description,l.image,l.structuredData,l.title,l.twitterCard,l.type])}function jm(){const i=new Date("1998-07-26"),a=new Date;let l=a.getFullYear()-i.getFullYear();const s=a.getMonth()-i.getMonth();return(s<0||s===0&&a.getDate()<i.getDate())&&(l-=1),l}function Rm(){return sn("About | Radhakishan Jangid","Experience, technical strengths, and current focus areas."),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"About"}),p.jsx("h1",{children:"Engineering depth, product focus, and shipping discipline."}),p.jsxs("p",{className:"lede",children:["I’m Radhakishan Jangid, a ",jm()," year old software engineer based in Mumbai. My work sits at the intersection of product UI, backend services, and developer-facing systems."]})]}),p.jsxs("section",{className:"info-grid",children:[p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Current position"}),p.jsxs("p",{children:["Senior Software Engineer at ",p.jsx("a",{href:"https://www.cachetech.com/",target:"_blank",rel:"noreferrer",children:"Cachetech Advisor Solutions"}),", working on fintech systems, multi-tenant workflows, and product engineering across web and mobile."]})]}),p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Working style"}),p.jsx("p",{children:"Strong on frontend architecture, pragmatic on backend delivery, and comfortable turning rough product intent into production-ready systems."})]})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading",children:[p.jsx("span",{className:"eyebrow",children:"Experience"}),p.jsx("h2",{children:"Recent roles"})]}),p.jsx("div",{className:"timeline-list",children:Mr.experience.map(i=>p.jsxs("article",{className:"timeline-item",children:[p.jsxs("div",{className:"timeline-meta",children:[p.jsxs("span",{children:[i.from," to ",i.to]}),p.jsx("span",{children:i.location})]}),p.jsxs("div",{children:[p.jsx("h3",{children:i.title}),p.jsx("p",{className:"timeline-company",children:p.jsx("a",{href:i.companyLink,target:"_blank",rel:"noreferrer",children:i.companyName})}),p.jsx("p",{children:i.description})]})]},`${i.companyName}-${i.from}`))})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading",children:[p.jsx("span",{className:"eyebrow",children:"Capabilities"}),p.jsx("h2",{children:"Core skill areas"})]}),p.jsx("div",{className:"capability-grid",children:Mr.skills[0].skillType.map(i=>p.jsxs("article",{className:"surface-card",children:[p.jsx("h3",{children:i.title}),p.jsx("p",{dangerouslySetInnerHTML:{__html:i.description}}),p.jsx("ul",{className:"clean-list",children:i.skillsList.map(a=>p.jsxs("li",{children:[p.jsx("strong",{children:a.skillTitle}),p.jsx("span",{children:a.skillDesc})]},a.skillTitle))})]},i.title))})]})]})}function Lm({html:i,title:a}){return p.jsx("iframe",{className:"article-detail-frame",title:a,srcDoc:i,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms"})}function Nm({match:i}){const a=gd(i.params.slug);return sn({title:a?`${a.title} | Articles | Radhakishan Jangid`:"Article | Radhakishan Jangid",description:a?.excerpt||"Article detail",image:a?.coverImage||"/images/rk-formal.jpg",type:"article",structuredData:a?{"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.excerpt,datePublished:a.sortDate||void 0,author:{"@type":"Person",name:"Radhakishan Jangid"},publisher:{"@type":"Person",name:"Radhakishan Jangid"},mainEntityOfPage:`https://radhakishan404.github.io/articles/${a.slug}`,image:a.coverImage?`https://radhakishan404.github.io${a.coverImage}`:"https://radhakishan404.github.io/images/rk-formal.jpg",keywords:a.tags.join(", ")}:void 0}),a?a.kind==="html"?p.jsx(Lm,{html:a.raw,title:a.title}):p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"article-detail-header",children:[p.jsx(Fe,{className:"back-link",to:"/articles",children:"Back to articles"}),p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:a.kind==="html"?"HTML":"Markdown"}),p.jsx("span",{children:a.readingTime}),a.date?p.jsx("span",{children:a.date}):null]}),p.jsx("h1",{children:a.title}),p.jsx("p",{className:"lede article-lede",children:a.excerpt}),a.tags.length?p.jsx("div",{className:"tag-row",children:a.tags.map(l=>p.jsx("span",{className:"tag-chip tag-chip-static",children:l},l))}):null]}),p.jsx("article",{className:"article-prose",dangerouslySetInnerHTML:{__html:a.bodyHtml}})]}):p.jsx(Nr,{to:"/articles"})}function Mm({article:i}){const a=i.coverImage?{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62)), url(${i.coverImage})`}:i.accent?{background:`linear-gradient(135deg, ${i.accent}22 0%, transparent 70%), var(--page-bg)`}:void 0;return p.jsxs("article",{className:"article-card",children:[p.jsx(Fe,{className:"article-card-preview",to:`/articles/${i.slug}`,"aria-label":`Open ${i.title}`,children:p.jsxs("div",{className:`article-card-cover${i.coverImage?" has-image":""}`,style:a,children:[p.jsxs("div",{className:"article-card-cover-top",children:[p.jsx("span",{className:"article-cover-category",children:i.category||"Article"}),p.jsx("span",{className:"article-cover-kind",children:i.kind==="html"?"HTML":"Markdown"})]}),p.jsxs("div",{className:"article-card-cover-body",children:[p.jsx("h4",{children:i.title}),p.jsx("p",{children:i.excerpt})]})]})}),p.jsxs("div",{className:"article-card-body",children:[p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:i.category||"Article"}),p.jsx("span",{children:i.readingTime}),i.date?p.jsx("span",{children:i.date}):null]}),p.jsx("h3",{children:p.jsx(Fe,{to:`/articles/${i.slug}`,children:i.title})}),p.jsx("p",{children:i.excerpt}),i.tags.length?p.jsx("div",{className:"tag-row",children:i.tags.slice(0,4).map(l=>p.jsx("button",{type:"button",className:"tag-chip tag-chip-static",children:l},l))}):null,p.jsx(Fe,{className:"inline-link",to:`/articles/${i.slug}`,children:"Open article"})]})]})}function Dm(){const[i,a]=Ze.useState(""),[l,s]=Ze.useState("all"),[c,h]=Ze.useState("all"),f=mm(),w=i.trim().toLowerCase(),g=Gt.filter(v=>{const P=!w||v.title.toLowerCase().includes(w)||v.excerpt.toLowerCase().includes(w),I=l==="all"||v.kind===l,O=c==="all"||v.tags.includes(c);return P&&I&&O}),x=Gt.find(v=>v.featured)||Gt[0];return sn({title:"Articles | Radhakishan Jangid",description:"AI prompts, developer content systems, carousel workflows, public write-ups, and practical technical articles for developers and creators.",image:x?.coverImage||"/images/rk-formal.jpg",type:"website",structuredData:{"@context":"https://schema.org","@type":"CollectionPage",name:"Articles by Radhakishan Jangid",description:"AI prompts, developer content systems, public write-ups, and practical technical articles.",url:"https://radhakishan404.github.io/articles",mainEntity:g.slice(0,10).map(v=>({"@type":"Article",headline:v.title,url:`https://radhakishan404.github.io/articles/${v.slug}`,datePublished:v.sortDate||void 0}))}}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"articles-hero",children:[p.jsxs("div",{className:"articles-hero-copy",children:[p.jsx("span",{className:"eyebrow",children:"Articles"}),p.jsx("h1",{children:"Prompts, AI workflows, dev content, and creator systems."}),p.jsx("p",{className:"lede",children:"Better articles for AI learners, developers, and tech creators. Less filler, more useful content."}),p.jsxs("div",{className:"article-hero-stats",children:[p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:Gt.length}),p.jsx("span",{children:"Published pieces"})]}),p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:f.length}),p.jsx("span",{children:"Topics covered"})]}),p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:Gt.filter(v=>v.kind==="html").length}),p.jsx("span",{children:"Interactive pages"})]})]})]}),x?p.jsx(Fe,{className:"featured-article",to:`/articles/${x.slug}`,children:p.jsx("div",{className:`featured-article-media${x.coverImage?" has-image":""}`,style:x.coverImage?{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.14), rgba(0,0,0,0.7)), url(${x.coverImage})`}:void 0,children:p.jsxs("div",{className:"featured-article-inner",children:[p.jsx("span",{className:"featured-label",children:"Featured"}),p.jsx("h2",{children:x.title}),p.jsx("p",{children:x.excerpt}),p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:x.category}),p.jsx("span",{children:x.readingTime}),x.date?p.jsx("span",{children:x.date}):null]})]})})}):null]}),p.jsx("section",{className:"surface-card filter-panel",children:p.jsxs("div",{className:"filter-panel-row",children:[p.jsxs("label",{className:"search-field",children:[p.jsx("span",{children:"Search"}),p.jsx("input",{type:"search",value:i,onChange:v=>a(v.target.value),placeholder:"Search title, excerpt, or topic"})]}),p.jsxs("div",{className:"filter-group",children:[p.jsx("span",{children:"Type"}),p.jsx("div",{className:"tag-row",children:["all","markdown","html"].map(v=>p.jsx("button",{type:"button",className:`tag-chip${l===v?" is-active":""}`,onClick:()=>s(v),children:v==="all"?"All":v},v))})]}),f.length?p.jsxs("div",{className:"filter-group",children:[p.jsx("span",{children:"Tags"}),p.jsxs("div",{className:"tag-row",children:[p.jsx("button",{type:"button",className:`tag-chip${c==="all"?" is-active":""}`,onClick:()=>h("all"),children:"All"}),f.map(v=>p.jsx("button",{type:"button",className:`tag-chip${c===v?" is-active":""}`,onClick:()=>h(v),children:v},v))]})]}):null]})}),p.jsx("section",{className:"article-grid article-grid-large",children:g.map(v=>p.jsx(Mm,{article:v},v.slug))})]})}var es={},Ar={},Bu;function _m(){if(Bu)return Ar;Bu=1,Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.EmailJSResponseStatus=void 0;var i=(function(){function a(l){this.status=l.status,this.text=l.responseText}return a})();return Ar.EmailJSResponseStatus=i,Ar}var jr={},Gu;function Om(){if(Gu)return jr;Gu=1,Object.defineProperty(jr,"__esModule",{value:!0}),jr.UI=void 0;var i=(function(){function a(){}return a.clearAll=function(l){l.classList.remove(this.PROGRESS),l.classList.remove(this.DONE),l.classList.remove(this.ERROR)},a.progressState=function(l){this.clearAll(l),l.classList.add(this.PROGRESS)},a.successState=function(l){l.classList.remove(this.PROGRESS),l.classList.add(this.DONE)},a.errorState=function(l){l.classList.remove(this.PROGRESS),l.classList.add(this.ERROR)},a.PROGRESS="emailjs-sending",a.DONE="emailjs-success",a.ERROR="emailjs-error",a})();return jr.UI=i,jr}var Uu;function zm(){return Uu||(Uu=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.EmailJSResponseStatus=i.sendForm=i.send=i.init=void 0;var a=_m();Object.defineProperty(i,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var l=Om(),s=null,c="https://api.emailjs.com";function h(P,I,O){return O===void 0&&(O={}),new Promise(function(z,q){var X=new XMLHttpRequest;X.addEventListener("load",function(G){var H=new a.EmailJSResponseStatus(G.target);H.status===200||H.text==="OK"?z(H):q(H)}),X.addEventListener("error",function(G){q(new a.EmailJSResponseStatus(G.target))}),X.open("POST",P,!0);for(var M in O)X.setRequestHeader(M,O[M]);X.send(I)})}function f(P){var I=document&&document.getElementById("g-recaptcha-response");return I&&I.value&&(P["g-recaptcha-response"]=I.value),I=null,P}function w(P){return P[0]!=="#"&&P[0]!=="."?"#"+P:P}function g(P,I){s=P,c=I||"https://api.emailjs.com"}i.init=g;function x(P,I,O,z){var q={lib_version:"2.6.4",user_id:z||s,service_id:P,template_id:I,template_params:f(O)};return h(c+"/api/v1.0/email/send",JSON.stringify(q),{"Content-type":"application/json"})}i.send=x;function v(P,I,O,z){if(typeof O=="string"&&(O=document.querySelector(w(O))),!O||O.nodeName!=="FORM")throw"Expected the HTML form element or the style selector of form";l.UI.progressState(O);var q=new FormData(O);return q.append("lib_version","2.6.4"),q.append("service_id",P),q.append("template_id",I),q.append("user_id",z||s),h(c+"/api/v1.0/email/send-form",q).then(function(X){return l.UI.successState(O),X},function(X){return l.UI.errorState(O),Promise.reject(X)})}i.sendForm=v,i.default={init:g,send:x,sendForm:v}})(es)),es}var Fm=zm();const Hm=Dr(Fm);function Bm(){const[i,a]=Ze.useState("idle");sn("Contact | Radhakishan Jangid","Get in touch for engineering work, collaboration, and consulting.");const l=async s=>{s.preventDefault(),a("loading");try{await Hm.sendForm("service_sn6cjfe","template_ai5s6x5",s.target,"user_Di32uXdzGJ3xyE4Kjf5bJ"),a("success"),s.target.reset()}catch{a("error")}};return p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"Contact"}),p.jsx("h1",{children:"Let’s talk about product engineering, frontend systems, or independent builds."}),p.jsx("p",{className:"lede",children:"Email works best, but the form is here if you want to send project details directly from the site."})]}),p.jsxs("section",{className:"contact-grid",children:[p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Direct links"}),p.jsx("div",{className:"footer-links contact-links",children:bm.map(s=>p.jsx("a",{href:s.href,target:s.external?"_blank":void 0,rel:s.external?"noreferrer":void 0,children:s.label},s.href))})]}),p.jsxs("form",{className:"surface-card contact-form",onSubmit:l,children:[p.jsx("h2",{children:"Send a message"}),p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{name:"from_name",type:"text",placeholder:"Your name",required:!0}),p.jsx("input",{name:"from_email",type:"email",placeholder:"Your email",required:!0})]}),p.jsx("textarea",{name:"from_message",rows:"7",placeholder:"Tell me what you’re building.",required:!0}),p.jsx("button",{type:"submit",className:"button-primary",disabled:i==="loading",children:i==="loading"?"Sending...":"Send message"}),i==="success"?p.jsx("p",{className:"form-status",children:"Message sent. I’ll get back to you soon."}):null,i==="error"?p.jsx("p",{className:"form-status form-status-error",children:"Message failed to send. Email is the safer fallback."}):null]})]})]})}const Gm=new Set(["radhakishan404.github.io","radhakishan404","react-native-stylish-accordion-import"]);function yd(){const[i,a]=Ze.useState([]),[l,s]=Ze.useState(!0);return Ze.useEffect(()=>{let c=!0;async function h(){try{const w=await(await fetch("https://api.github.com/users/radhakishan404/repos?per_page=100&sort=updated")).json();if(!Array.isArray(w)||!c)return;const g=w.filter(x=>!x.fork&&!x.archived&&!Gm.has(x.name)).filter(x=>x.description||x.homepage||x.stargazers_count>0).sort((x,v)=>{const P=x.stargazers_count*5+(x.homepage?2:0),I=v.stargazers_count*5+(v.homepage?2:0);return P!==I?I-P:new Date(v.updated_at)-new Date(x.updated_at)}).slice(0,6);a(g)}catch{}finally{c&&s(!1)}}return h(),()=>{c=!1}},[]),{repos:i,loading:l}}function Um(){const i=Mr.project.slice(0,4),a=Gt.slice(0,3),{repos:l}=yd();return sn({title:"Radhakishan Jangid",description:"Senior software engineer building product systems, frontend experiences, public software projects, and AI-focused technical content.",image:"/images/rk-formal.jpg",type:"website",structuredData:{"@context":"https://schema.org","@graph":[{"@type":"Person",name:"Radhakishan Jangid",jobTitle:"Senior Software Engineer",url:"https://radhakishan404.github.io/",image:"https://radhakishan404.github.io/images/rk-formal.jpg",sameAs:["https://github.com/radhakishan404","https://www.linkedin.com/in/radhakishanjangid","https://dev.to/radhakishanjangid404"]},{"@type":"WebSite",name:"Radhakishan Jangid",url:"https://radhakishan404.github.io/"}]}}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"home-hero",children:[p.jsxs("div",{className:"home-hero-copy motion-rise",children:[p.jsx("span",{className:"eyebrow",children:"Radhakishan Jangid"}),p.jsx("h1",{children:"Senior software engineer building fast, useful products."}),p.jsx("p",{className:"lede",children:"Mumbai based. Focused on React, Node.js, mobile apps, internal systems, and public-facing product builds."}),p.jsxs("div",{className:"hero-actions",children:[p.jsx(Fe,{className:"button-primary",to:"/projects",children:"View projects"}),p.jsx(Fe,{className:"button-secondary",to:"/articles",children:"Read articles"})]}),p.jsx("div",{className:"hero-stat-row",children:Sm.map(s=>p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:s.value}),p.jsx("span",{children:s.label})]},s.label))})]}),p.jsxs("div",{className:"portrait-panel motion-rise motion-delay-1",children:[p.jsx("img",{src:"/images/radhakishan-web-2.jpg",alt:"Radhakishan Jangid portrait"}),p.jsxs("div",{className:"portrait-caption",children:[p.jsx("span",{children:"Current focus"}),p.jsx("strong",{children:"React interfaces, backend delivery, AI prototypes, and product execution."})]})]})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Selected work"}),p.jsx("h2",{children:"Featured projects"})]}),p.jsx(Fe,{className:"inline-link",to:"/projects",children:"All projects"})]}),p.jsx("div",{className:"project-grid",children:i.map((s,c)=>p.jsxs("article",{className:"surface-card project-card motion-rise",style:{animationDelay:`${c*90}ms`},children:[p.jsx("div",{className:"project-visual",children:p.jsx("img",{src:s.thumbnail,alt:`${s.title} preview`})}),p.jsxs("div",{className:"project-card-top",children:[p.jsx("img",{className:"project-logo",src:s.logo,alt:`${s.title} logo`}),p.jsx("span",{className:"meta-pill",children:s.date||"Case study"})]}),p.jsx("h3",{children:s.title}),p.jsx("p",{children:s.description}),p.jsx("div",{className:"tag-row",children:s.technology.split(",").slice(0,4).map(h=>p.jsx("span",{className:"tag-chip tag-chip-static",children:h.trim()},h))}),p.jsxs("div",{className:"project-card-links",children:[p.jsx(Fe,{className:"inline-link",to:`/projects/${Or(s.title)}`,children:"Case study"}),s.onlineLink?p.jsx("a",{className:"inline-link",href:s.onlineLink,target:"_blank",rel:"noreferrer",children:"Live link"}):null]})]},s.id))})]}),l.length?p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Public work"}),p.jsx("h2",{children:"Recent GitHub projects"})]}),p.jsx("a",{className:"inline-link",href:"https://github.com/radhakishan404?tab=repositories",target:"_blank",rel:"noreferrer",children:"GitHub profile"})]}),p.jsx("div",{className:"public-grid",children:l.slice(0,3).map((s,c)=>p.jsxs("article",{className:"surface-card public-card motion-rise",style:{animationDelay:`${c*100}ms`},children:[p.jsxs("div",{className:"public-card-top",children:[p.jsx("span",{className:"meta-pill",children:"Public"}),p.jsxs("span",{className:"public-star",children:["★ ",s.stargazers_count]})]}),p.jsx("h3",{children:s.name}),p.jsx("p",{children:s.description||"Public GitHub repository."}),p.jsxs("div",{className:"project-card-links",children:[p.jsx("a",{className:"inline-link",href:s.html_url,target:"_blank",rel:"noreferrer",children:"GitHub"}),s.homepage?p.jsx("a",{className:"inline-link",href:s.homepage,target:"_blank",rel:"noreferrer",children:"Live demo"}):null]})]},s.id))})]}):null,p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Writing"}),p.jsx("h2",{children:"Recent articles"})]}),p.jsx(Fe,{className:"inline-link",to:"/articles",children:"All articles"})]}),p.jsx("div",{className:"info-grid",children:a.map((s,c)=>p.jsxs("article",{className:"surface-card compact-article-card motion-rise",style:{animationDelay:`${c*120}ms`},children:[p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:s.kind==="html"?"HTML":"Markdown"}),p.jsx("span",{children:s.readingTime})]}),p.jsx("h3",{children:s.title}),p.jsx("p",{children:s.excerpt}),p.jsx(Fe,{className:"inline-link",to:`/articles/${s.slug}`,children:"Read article"})]},s.slug))})]})]})}function $m({match:i}){const a=Mr.project.find(l=>Or(l.title)===i.params.topic);return sn(a?`${a.title} | Projects | Radhakishan Jangid`:"Project | Radhakishan Jangid",a?.description||"Project detail"),a?p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx(Fe,{className:"back-link",to:"/projects",children:"Back to projects"}),p.jsx("span",{className:"eyebrow",children:"Project"}),p.jsx("h1",{children:a.title}),p.jsx("p",{className:"lede",children:a.description}),p.jsx("div",{className:"tag-row",children:a.technology.split(",").map(l=>p.jsx("span",{className:"tag-chip tag-chip-static",children:l.trim()},l))})]}),p.jsxs("section",{className:"project-detail-layout",children:[p.jsx("div",{className:"project-gallery",children:(a.sliderImages||[]).map((l,s)=>p.jsx("figure",{className:"project-shot",children:p.jsx("img",{src:l.image,alt:`${a.title} screenshot ${s+1}`})},`${a.id}-${s}`))}),p.jsxs("aside",{className:"surface-card project-sidebar",children:[a.onlineLink?p.jsx("a",{className:"button-primary button-block",href:a.onlineLink,target:"_blank",rel:"noreferrer",children:"Visit project"}):null,p.jsxs("div",{className:"sidebar-block",children:[p.jsx("span",{className:"sidebar-label",children:"Date"}),p.jsx("strong",{children:a.date||"Available on request"})]}),p.jsxs("div",{className:"sidebar-block",children:[p.jsx("span",{className:"sidebar-label",children:"Tags"}),p.jsx("p",{children:a.tag})]})]})]}),p.jsx("section",{className:"section-stack project-detail-content",children:(a.content||[]).map(l=>p.jsxs("article",{className:"surface-card",children:[p.jsx("h2",{children:l.contentTitle}),l.contentDescription?p.jsx("p",{dangerouslySetInnerHTML:{__html:l.contentDescription}}):null,l.contentList?.length?p.jsx("ul",{className:"clean-list",children:l.contentList.map(s=>p.jsx("li",{children:s.isLink?p.jsx("a",{href:s.link,target:"_blank",rel:"noreferrer",children:s.text}):p.jsx("span",{dangerouslySetInnerHTML:{__html:s.text}})},`${l.contentTitle}-${s.text}`))}):null]},l.contentTitle))})]}):p.jsx(Nr,{to:"/projects"})}function Wm(){const{repos:i,loading:a}=yd();return sn({title:"Projects | Radhakishan Jangid",description:"Selected projects across product UI, web applications, shipped client work, and public software tools.",image:"/images/rk-formal.jpg",type:"website"}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"Projects"}),p.jsx("h1",{children:"Projects across product engineering, open source, and shipped client work."}),p.jsx("p",{className:"lede",children:"A cleaner index with visuals, direct links, and detail pages where deeper context already exists."})]}),p.jsxs("section",{className:"section-stack",children:[p.jsx("div",{className:"section-heading",children:p.jsx("h2",{children:"Case studies"})}),p.jsx("div",{className:"project-grid",children:Mr.project.map((l,s)=>p.jsxs("article",{className:"surface-card project-card motion-rise",style:{animationDelay:`${s*70}ms`},children:[p.jsx("div",{className:"project-visual",children:p.jsx("img",{src:l.thumbnail,alt:`${l.title} preview`})}),p.jsxs("div",{className:"project-card-top",children:[p.jsx("img",{className:"project-logo",src:l.logo,alt:`${l.title} logo`}),p.jsx("span",{className:"meta-pill",children:l.gitAvailable?"GitHub":"Project"})]}),p.jsx("h2",{children:l.title}),p.jsx("p",{children:l.description}),p.jsx("div",{className:"tag-row",children:l.tag.split(",").slice(0,4).map(c=>p.jsx("span",{className:"tag-chip tag-chip-static",children:c.trim()},c))}),p.jsxs("div",{className:"project-card-links",children:[p.jsx(Fe,{className:"inline-link",to:`/projects/${Or(l.title)}`,children:"Read detail"}),l.onlineLink?p.jsx("a",{className:"inline-link",href:l.onlineLink,target:"_blank",rel:"noreferrer",children:"Open link"}):null]})]},l.id))})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"GitHub"}),p.jsx("h2",{children:"Public repositories"})]}),p.jsx("a",{className:"inline-link",href:"https://github.com/radhakishan404?tab=repositories",target:"_blank",rel:"noreferrer",children:"View all on GitHub"})]}),p.jsxs("div",{className:"public-grid",children:[i.map((l,s)=>p.jsxs("article",{className:"surface-card public-card motion-rise",style:{animationDelay:`${s*70}ms`},children:[p.jsxs("div",{className:"public-card-top",children:[p.jsx("span",{className:"meta-pill",children:l.language||"Code"}),p.jsxs("span",{className:"public-star",children:["★ ",l.stargazers_count]})]}),p.jsx("h3",{children:l.name}),p.jsx("p",{children:l.description||"Public GitHub repository."}),p.jsx("div",{className:"public-meta",children:p.jsxs("span",{children:["Updated ",new Date(l.updated_at).toLocaleDateString("en-US",{month:"short",year:"numeric"})]})}),p.jsxs("div",{className:"project-card-links",children:[p.jsx("a",{className:"inline-link",href:l.html_url,target:"_blank",rel:"noreferrer",children:"GitHub"}),l.homepage?p.jsx("a",{className:"inline-link",href:l.homepage,target:"_blank",rel:"noreferrer",children:"Live demo"}):null]})]},l.id)),!a&&!i.length?p.jsxs("article",{className:"surface-card public-card",children:[p.jsx("h3",{children:"Public repositories"}),p.jsx("p",{children:"GitHub data is unavailable right now. Refreshing later should bring the latest public projects back in."})]}):null]})]})]})}const $u="G-N8PLTL59Z1";function qm(){if(typeof window>"u"||window.gtag)return;window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)};const i=document.createElement("script");i.async=!0,i.src=`https://www.googletagmanager.com/gtag/js?id=${$u}`,document.head.appendChild(i),window.gtag("js",new Date),window.gtag("config",$u,{send_page_view:!1})}function Wu(i){typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.href,page_path:i.pathname+i.search,page_title:document.title})}function Vm(){const i=af();return Ze.useEffect(()=>(qm(),Wu(i.location),i.listen(l=>{Wu(l)})),[i]),null}function Ym(){return p.jsx(Cm,{children:p.jsxs(rf,{children:[p.jsx(ft,{exact:!0,path:"/",component:Um}),p.jsx(ft,{exact:!0,path:"/about",component:Rm}),p.jsx(ft,{exact:!0,path:"/projects",component:Wm}),p.jsx(ft,{exact:!0,path:"/projects/:topic",component:$m}),p.jsx(ft,{exact:!0,path:"/portfolio",render:()=>p.jsx(Nr,{to:"/projects"})}),p.jsx(ft,{exact:!0,path:"/portfolio/:topic",render:({match:i})=>p.jsx(Nr,{to:`/projects/${i.params.topic}`})}),p.jsx(ft,{exact:!0,path:"/articles",component:Dm}),p.jsx(ft,{exact:!0,path:"/articles/:slug",component:Nm}),p.jsx(ft,{exact:!0,path:"/contact",component:Bm}),p.jsx(ft,{render:()=>p.jsx(Nr,{to:"/"})})]})})}function Jm(){return p.jsxs(sf,{children:[p.jsx(Vm,{}),p.jsx(Ym,{})]})}wh.render(p.jsx(ge.StrictMode,{children:p.jsx(Jm,{})}),document.getElementById("root"));
