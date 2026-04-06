(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(c){if(c.ep)return;c.ep=!0;const h=l(c);fetch(c.href,h)}})();function Or(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ma={exports:{}},On={};var Da,ru;function ao(){if(ru)return Da;ru=1;var i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function o(h){if(h==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(h)}function c(){try{if(!Object.assign)return!1;var h=new String("abc");if(h[5]="de",Object.getOwnPropertyNames(h)[0]==="5")return!1;for(var f={},k=0;k<10;k++)f["_"+String.fromCharCode(k)]=k;var g=Object.getOwnPropertyNames(f).map(function(v){return f[v]});if(g.join("")!=="0123456789")return!1;var w={};return"abcdefghijklmnopqrst".split("").forEach(function(v){w[v]=v}),Object.keys(Object.assign({},w)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Da=c()?Object.assign:function(h,f){for(var k,g=o(h),w,v=1;v<arguments.length;v++){k=Object(arguments[v]);for(var C in k)s.call(k,C)&&(g[C]=k[C]);if(i){w=i(k);for(var L=0;L<w.length;L++)l.call(k,w[L])&&(g[w[L]]=k[w[L]])}}return g},Da}var za={exports:{}},ye={};var iu;function pf(){if(iu)return ye;iu=1;var i=ao(),s=60103,l=60106;ye.Fragment=60107,ye.StrictMode=60108,ye.Profiler=60114;var o=60109,c=60110,h=60112;ye.Suspense=60113;var f=60115,k=60116;if(typeof Symbol=="function"&&Symbol.for){var g=Symbol.for;s=g("react.element"),l=g("react.portal"),ye.Fragment=g("react.fragment"),ye.StrictMode=g("react.strict_mode"),ye.Profiler=g("react.profiler"),o=g("react.provider"),c=g("react.context"),h=g("react.forward_ref"),ye.Suspense=g("react.suspense"),f=g("react.memo"),k=g("react.lazy")}var w=typeof Symbol=="function"&&Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}function C(T){for(var O="https://reactjs.org/docs/error-decoder.html?invariant="+T,F=1;F<arguments.length;F++)O+="&args[]="+encodeURIComponent(arguments[F]);return"Minified React error #"+T+"; visit "+O+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};function z(T,O,F){this.props=T,this.context=O,this.refs=D,this.updater=F||L}z.prototype.isReactComponent={},z.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error(C(85));this.updater.enqueueSetState(this,T,O,"setState")},z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function V(){}V.prototype=z.prototype;function Z(T,O,F){this.props=T,this.context=O,this.refs=D,this.updater=F||L}var _=Z.prototype=new V;_.constructor=Z,i(_,z.prototype),_.isPureReactComponent=!0;var $={current:null},G=Object.prototype.hasOwnProperty,ne={key:!0,ref:!0,__self:!0,__source:!0};function N(T,O,F){var H,E={},R=null,A=null;if(O!=null)for(H in O.ref!==void 0&&(A=O.ref),O.key!==void 0&&(R=""+O.key),O)G.call(O,H)&&!ne.hasOwnProperty(H)&&(E[H]=O[H]);var J=arguments.length-2;if(J===1)E.children=F;else if(1<J){for(var X=Array(J),ve=0;ve<J;ve++)X[ve]=arguments[ve+2];E.children=X}if(T&&T.defaultProps)for(H in J=T.defaultProps,J)E[H]===void 0&&(E[H]=J[H]);return{$$typeof:s,type:T,key:R,ref:A,props:E,_owner:$.current}}function U(T,O){return{$$typeof:s,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function q(T){return typeof T=="object"&&T!==null&&T.$$typeof===s}function W(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(F){return O[F]})}var ce=/\/+/g;function te(T,O){return typeof T=="object"&&T!==null&&T.key!=null?W(""+T.key):O.toString(36)}function ue(T,O,F,H,E){var R=typeof T;(R==="undefined"||R==="boolean")&&(T=null);var A=!1;if(T===null)A=!0;else switch(R){case"string":case"number":A=!0;break;case"object":switch(T.$$typeof){case s:case l:A=!0}}if(A)return A=T,E=E(A),T=H===""?"."+te(A,0):H,Array.isArray(E)?(F="",T!=null&&(F=T.replace(ce,"$&/")+"/"),ue(E,O,F,"",function(ve){return ve})):E!=null&&(q(E)&&(E=U(E,F+(!E.key||A&&A.key===E.key?"":(""+E.key).replace(ce,"$&/")+"/")+T)),O.push(E)),1;if(A=0,H=H===""?".":H+":",Array.isArray(T))for(var J=0;J<T.length;J++){R=T[J];var X=H+te(R,J);A+=ue(R,O,F,X,E)}else if(X=v(T),typeof X=="function")for(T=X.call(T),J=0;!(R=T.next()).done;)R=R.value,X=H+te(R,J++),A+=ue(R,O,F,X,E);else if(R==="object")throw O=""+T,Error(C(31,O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O));return A}function ee(T,O,F){if(T==null)return T;var H=[],E=0;return ue(T,H,"","",function(R){return O.call(F,R,E++)}),H}function ie(T){if(T._status===-1){var O=T._result;O=O(),T._status=0,T._result=O,O.then(function(F){T._status===0&&(F=F.default,T._status=1,T._result=F)},function(F){T._status===0&&(T._status=2,T._result=F)})}if(T._status===1)return T._result;throw T._result}var he={current:null};function oe(){var T=he.current;if(T===null)throw Error(C(321));return T}var Le={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:$,IsSomeRendererActing:{current:!1},assign:i};return ye.Children={map:ee,forEach:function(T,O,F){ee(T,function(){O.apply(this,arguments)},F)},count:function(T){var O=0;return ee(T,function(){O++}),O},toArray:function(T){return ee(T,function(O){return O})||[]},only:function(T){if(!q(T))throw Error(C(143));return T}},ye.Component=z,ye.PureComponent=Z,ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Le,ye.cloneElement=function(T,O,F){if(T==null)throw Error(C(267,T));var H=i({},T.props),E=T.key,R=T.ref,A=T._owner;if(O!=null){if(O.ref!==void 0&&(R=O.ref,A=$.current),O.key!==void 0&&(E=""+O.key),T.type&&T.type.defaultProps)var J=T.type.defaultProps;for(X in O)G.call(O,X)&&!ne.hasOwnProperty(X)&&(H[X]=O[X]===void 0&&J!==void 0?J[X]:O[X])}var X=arguments.length-2;if(X===1)H.children=F;else if(1<X){J=Array(X);for(var ve=0;ve<X;ve++)J[ve]=arguments[ve+2];H.children=J}return{$$typeof:s,type:T.type,key:E,ref:R,props:H,_owner:A}},ye.createContext=function(T,O){return O===void 0&&(O=null),T={$$typeof:c,_calculateChangedBits:O,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider={$$typeof:o,_context:T},T.Consumer=T},ye.createElement=N,ye.createFactory=function(T){var O=N.bind(null,T);return O.type=T,O},ye.createRef=function(){return{current:null}},ye.forwardRef=function(T){return{$$typeof:h,render:T}},ye.isValidElement=q,ye.lazy=function(T){return{$$typeof:k,_payload:{_status:-1,_result:T},_init:ie}},ye.memo=function(T,O){return{$$typeof:f,type:T,compare:O===void 0?null:O}},ye.useCallback=function(T,O){return oe().useCallback(T,O)},ye.useContext=function(T,O){return oe().useContext(T,O)},ye.useDebugValue=function(){},ye.useEffect=function(T,O){return oe().useEffect(T,O)},ye.useImperativeHandle=function(T,O,F){return oe().useImperativeHandle(T,O,F)},ye.useLayoutEffect=function(T,O){return oe().useLayoutEffect(T,O)},ye.useMemo=function(T,O){return oe().useMemo(T,O)},ye.useReducer=function(T,O,F){return oe().useReducer(T,O,F)},ye.useRef=function(T){return oe().useRef(T)},ye.useState=function(T){return oe().useState(T)},ye.version="17.0.2",ye}var su;function oo(){return su||(su=1,za.exports=pf()),za.exports}var au;function ff(){if(au)return On;au=1,ao();var i=oo(),s=60103;if(On.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var l=Symbol.for;s=l("react.element"),On.Fragment=l("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,h={key:!0,ref:!0,__self:!0,__source:!0};function f(k,g,w){var v,C={},L=null,D=null;w!==void 0&&(L=""+w),g.key!==void 0&&(L=""+g.key),g.ref!==void 0&&(D=g.ref);for(v in g)c.call(g,v)&&!h.hasOwnProperty(v)&&(C[v]=g[v]);if(k&&k.defaultProps)for(v in g=k.defaultProps,g)C[v]===void 0&&(C[v]=g[v]);return{$$typeof:s,type:k,key:L,ref:D,props:C,_owner:o.current}}return On.jsx=f,On.jsxs=f,On}var ou;function hf(){return ou||(ou=1,Ma.exports=ff()),Ma.exports}var p=hf(),Xe=oo();const ge=Or(Xe);var Fa={exports:{}},Ze={},Ga={exports:{}},Ha={};var lu;function mf(){return lu||(lu=1,(function(i){var s,l,o,c;if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var f=Date,k=f.now();i.unstable_now=function(){return f.now()-k}}if(typeof window>"u"||typeof MessageChannel!="function"){var g=null,w=null,v=function(){if(g!==null)try{var E=i.unstable_now();g(!0,E),g=null}catch(R){throw setTimeout(v,0),R}};s=function(E){g!==null?setTimeout(s,0,E):(g=E,setTimeout(v,0))},l=function(E,R){w=setTimeout(E,R)},o=function(){clearTimeout(w)},i.unstable_shouldYield=function(){return!1},c=i.unstable_forceFrameRate=function(){}}else{var C=window.setTimeout,L=window.clearTimeout;if(typeof console<"u"){var D=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof D!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var z=!1,V=null,Z=-1,_=5,$=0;i.unstable_shouldYield=function(){return i.unstable_now()>=$},c=function(){},i.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<E?Math.floor(1e3/E):5};var G=new MessageChannel,ne=G.port2;G.port1.onmessage=function(){if(V!==null){var E=i.unstable_now();$=E+_;try{V(!0,E)?ne.postMessage(null):(z=!1,V=null)}catch(R){throw ne.postMessage(null),R}}else z=!1},s=function(E){V=E,z||(z=!0,ne.postMessage(null))},l=function(E,R){Z=C(function(){E(i.unstable_now())},R)},o=function(){L(Z),Z=-1}}function N(E,R){var A=E.length;E.push(R);e:for(;;){var J=A-1>>>1,X=E[J];if(X!==void 0&&0<W(X,R))E[J]=R,E[A]=X,A=J;else break e}}function U(E){return E=E[0],E===void 0?null:E}function q(E){var R=E[0];if(R!==void 0){var A=E.pop();if(A!==R){E[0]=A;e:for(var J=0,X=E.length;J<X;){var ve=2*(J+1)-1,be=E[ve],Ne=ve+1,Ue=E[Ne];if(be!==void 0&&0>W(be,A))Ue!==void 0&&0>W(Ue,be)?(E[J]=Ue,E[Ne]=A,J=Ne):(E[J]=be,E[ve]=A,J=ve);else if(Ue!==void 0&&0>W(Ue,A))E[J]=Ue,E[Ne]=A,J=Ne;else break e}}return R}return null}function W(E,R){var A=E.sortIndex-R.sortIndex;return A!==0?A:E.id-R.id}var ce=[],te=[],ue=1,ee=null,ie=3,he=!1,oe=!1,Le=!1;function T(E){for(var R=U(te);R!==null;){if(R.callback===null)q(te);else if(R.startTime<=E)q(te),R.sortIndex=R.expirationTime,N(ce,R);else break;R=U(te)}}function O(E){if(Le=!1,T(E),!oe)if(U(ce)!==null)oe=!0,s(F);else{var R=U(te);R!==null&&l(O,R.startTime-E)}}function F(E,R){oe=!1,Le&&(Le=!1,o()),he=!0;var A=ie;try{for(T(R),ee=U(ce);ee!==null&&(!(ee.expirationTime>R)||E&&!i.unstable_shouldYield());){var J=ee.callback;if(typeof J=="function"){ee.callback=null,ie=ee.priorityLevel;var X=J(ee.expirationTime<=R);R=i.unstable_now(),typeof X=="function"?ee.callback=X:ee===U(ce)&&q(ce),T(R)}else q(ce);ee=U(ce)}if(ee!==null)var ve=!0;else{var be=U(te);be!==null&&l(O,be.startTime-R),ve=!1}return ve}finally{ee=null,ie=A,he=!1}}var H=c;i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(E){E.callback=null},i.unstable_continueExecution=function(){oe||he||(oe=!0,s(F))},i.unstable_getCurrentPriorityLevel=function(){return ie},i.unstable_getFirstCallbackNode=function(){return U(ce)},i.unstable_next=function(E){switch(ie){case 1:case 2:case 3:var R=3;break;default:R=ie}var A=ie;ie=R;try{return E()}finally{ie=A}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=H,i.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var A=ie;ie=E;try{return R()}finally{ie=A}},i.unstable_scheduleCallback=function(E,R,A){var J=i.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?J+A:J):A=J,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=A+X,E={id:ue++,callback:R,priorityLevel:E,startTime:A,expirationTime:X,sortIndex:-1},A>J?(E.sortIndex=A,N(te,E),U(ce)===null&&E===U(te)&&(Le?o():Le=!0,l(O,A-J))):(E.sortIndex=X,N(ce,E),oe||he||(oe=!0,s(F))),E},i.unstable_wrapCallback=function(E){var R=ie;return function(){var A=ie;ie=R;try{return E.apply(this,arguments)}finally{ie=A}}}})(Ha)),Ha}var cu;function gf(){return cu||(cu=1,Ga.exports=mf()),Ga.exports}var uu;function vf(){if(uu)return Ze;uu=1;var i=oo(),s=ao(),l=gf();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!i)throw Error(o(227));var c=new Set,h={};function f(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(h[e]=t,e=0;e<t.length;e++)c.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v=Object.prototype.hasOwnProperty,C={},L={};function D(e){return v.call(L,e)?!0:v.call(C,e)?!1:w.test(e)?L[e]=!0:(C[e]=!0,!1)}function z(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||z(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Z(e,t,n,r,a,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new Z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new Z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new Z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new Z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new Z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new Z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new Z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new Z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new Z(e,5,!1,e.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($,G);_[t]=new Z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($,G);_[t]=new Z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($,G);_[t]=new Z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new Z(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new Z(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,r){var a=_.hasOwnProperty(t)?_[t]:null,u=a!==null?a.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");u||(V(t,n,a,r)&&(n=null),r||a===null?D(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var N=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=60103,q=60106,W=60107,ce=60108,te=60114,ue=60109,ee=60110,ie=60112,he=60113,oe=60120,Le=60115,T=60116,O=60121,F=60128,H=60129,E=60130,R=60131;if(typeof Symbol=="function"&&Symbol.for){var A=Symbol.for;U=A("react.element"),q=A("react.portal"),W=A("react.fragment"),ce=A("react.strict_mode"),te=A("react.profiler"),ue=A("react.provider"),ee=A("react.context"),ie=A("react.forward_ref"),he=A("react.suspense"),oe=A("react.suspense_list"),Le=A("react.memo"),T=A("react.lazy"),O=A("react.block"),A("react.scope"),F=A("react.opaque.id"),H=A("react.debug_trace_mode"),E=A("react.offscreen"),R=A("react.legacy_hidden")}var J=typeof Symbol=="function"&&Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var ve;function be(e){if(ve===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||""}return`
`+ve+e}var Ne=!1;function Ue(e,t){if(!e||Ne)return"";Ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),u=r.stack.split(`
`),d=a.length-1,m=u.length-1;1<=d&&0<=m&&a[d]!==u[m];)m--;for(;1<=d&&0<=m;d--,m--)if(a[d]!==u[m]){if(d!==1||m!==1)do if(d--,m--,0>m||a[d]!==u[m])return`
`+a[d].replace(" at new "," at ");while(1<=d&&0<=m);break}}}finally{Ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?be(e):""}function xd(e){switch(e.tag){case 5:return be(e.type);case 16:return be("Lazy");case 13:return be("Suspense");case 19:return be("SuspenseList");case 0:case 2:case 15:return e=Ue(e.type,!1),e;case 11:return e=Ue(e.type.render,!1),e;case 22:return e=Ue(e.type._render,!1),e;case 1:return e=Ue(e.type,!0),e;default:return""}}function ln(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case q:return"Portal";case te:return"Profiler";case ce:return"StrictMode";case he:return"Suspense";case oe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case ie:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Le:return ln(e.type);case O:return ln(e._render);case T:t=e._payload,e=e._init;try{return ln(e(t))}catch{}}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function So(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e){var t=So(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){r=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=kd(e))}function To(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=So(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,t){var n=t.checked;return s({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Po(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Qi(e,t){Po(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zi(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Co(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zi(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function wd(e){var t="";return i.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Xi(e,t){return e=s({children:void 0},t),(t=wd(t.children))&&(e.children=t),e}function cn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return s({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function jo(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ro(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var es={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function No(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?No(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,Io=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!==es.svg||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Ao(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function _o(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Ao(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Sd=s({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ns(e,t){if(t){if(Sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function rs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,un=null,dn=null;function Oo(e){if(e=ir(e)){if(typeof ss!="function")throw Error(o(280));var t=e.stateNode;t&&(t=ii(t),ss(e.stateNode,e.type,t))}}function Mo(e){un?dn?dn.push(e):dn=[e]:un=e}function Do(){if(un){var e=un,t=dn;if(dn=un=null,Oo(e),t)for(e=0;e<t.length;e++)Oo(t[e])}}function as(e,t){return e(t)}function zo(e,t,n,r,a){return e(t,n,r,a)}function os(){}var Fo=as,Wt=!1,ls=!1;function cs(){(un!==null||dn!==null)&&(os(),Do())}function Td(e,t,n){if(ls)return e(t,n);ls=!0;try{return Fo(e,t,n)}finally{ls=!1,cs()}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var us=!1;if(g)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){us=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{us=!1}function Ed(e,t,n,r,a,u,d,m,y){var P=Array.prototype.slice.call(arguments,3);try{t.apply(n,P)}catch(B){this.onError(B)}}var $n=!1,Hr=null,$r=!1,ds=null,Pd={onError:function(e){$n=!0,Hr=e}};function Cd(e,t,n,r,a,u,d,m,y){$n=!1,Hr=null,Ed.apply(Pd,arguments)}function Ld(e,t,n,r,a,u,d,m,y){if(Cd.apply(this,arguments),$n){if($n){var P=Hr;$n=!1,Hr=null}else throw Error(o(198));$r||($r=!0,ds=P)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Go(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ho(e){if(Vt(e)!==e)throw Error(o(188))}function jd(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return Ho(a),e;if(u===r)return Ho(a),t;u=u.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=u;else{for(var d=!1,m=a.child;m;){if(m===n){d=!0,n=a,r=u;break}if(m===r){d=!0,r=a,n=u;break}m=m.sibling}if(!d){for(m=u.child;m;){if(m===n){d=!0,n=u,r=a;break}if(m===r){d=!0,r=u,n=a;break}m=m.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function $o(e){if(e=jd(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Uo(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Bo,ps,Wo,Vo,fs=!1,lt=[],St=null,Tt=null,Et=null,Un=new Map,Bn=new Map,Wn=[],qo="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hs(e,t,n,r,a){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:a,targetContainers:[r]}}function Yo(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function Vn(e,t,n,r,a,u){return e===null||e.nativeEvent!==u?(e=hs(t,n,r,a,u),t!==null&&(t=ir(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Rd(e,t,n,r,a){switch(t){case"focusin":return St=Vn(St,e,t,n,r,a),!0;case"dragenter":return Tt=Vn(Tt,e,t,n,r,a),!0;case"mouseover":return Et=Vn(Et,e,t,n,r,a),!0;case"pointerover":var u=a.pointerId;return Un.set(u,Vn(Un.get(u)||null,e,t,n,r,a)),!0;case"gotpointercapture":return u=a.pointerId,Bn.set(u,Vn(Bn.get(u)||null,e,t,n,r,a)),!0}return!1}function Nd(e){var t=qt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=Go(n),t!==null){e.blockedOn=t,Vo(e.lanePriority,function(){l.unstable_runWithPriority(e.priority,function(){Wo(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=ir(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function Jo(e,t,n){Ur(e)&&n.delete(t)}function Id(){for(fs=!1;0<lt.length;){var e=lt[0];if(e.blockedOn!==null){e=ir(e.blockedOn),e!==null&&Bo(e);break}for(var t=e.targetContainers;0<t.length;){var n=ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&lt.shift()}St!==null&&Ur(St)&&(St=null),Tt!==null&&Ur(Tt)&&(Tt=null),Et!==null&&Ur(Et)&&(Et=null),Un.forEach(Jo),Bn.forEach(Jo)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,fs||(fs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Id)))}function Qo(e){function t(a){return qn(a,e)}if(0<lt.length){qn(lt[0],e);for(var n=1;n<lt.length;n++){var r=lt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&qn(St,e),Tt!==null&&qn(Tt,e),Et!==null&&qn(Et,e),Un.forEach(t),Bn.forEach(t),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)Nd(n),n.blockedOn===null&&Wn.shift()}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},ms={},Zo={};g&&(Zo=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function Wr(e){if(ms[e])return ms[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zo)return ms[e]=t[n];return e}var Xo=Wr("animationend"),Ko=Wr("animationiteration"),el=Wr("animationstart"),tl=Wr("transitionend"),nl=new Map,gs=new Map,Ad=["abort","abort",Xo,"animationEnd",Ko,"animationIteration",el,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",tl,"transitionEnd","waiting","waiting"];function vs(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],a=e[n+1];a="on"+(a[0].toUpperCase()+a.slice(1)),gs.set(r,t),nl.set(r,a),f(a,[r])}}var _d=l.unstable_now;_d();var Se=8;function fn(e){if((1&e)!==0)return Se=15,1;if((2&e)!==0)return Se=14,2;if((4&e)!==0)return Se=13,4;var t=24&e;return t!==0?(Se=12,t):(e&32)!==0?(Se=11,32):(t=192&e,t!==0?(Se=10,t):(e&256)!==0?(Se=9,256):(t=3584&e,t!==0?(Se=8,t):(e&4096)!==0?(Se=7,4096):(t=4186112&e,t!==0?(Se=6,t):(t=62914560&e,t!==0?(Se=5,t):e&67108864?(Se=4,67108864):(e&134217728)!==0?(Se=3,134217728):(t=805306368&e,t!==0?(Se=2,t):(1073741824&e)!==0?(Se=1,1073741824):(Se=8,e))))))}function Od(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Md(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(o(358,e))}}function Yn(e,t){var n=e.pendingLanes;if(n===0)return Se=0;var r=0,a=0,u=e.expiredLanes,d=e.suspendedLanes,m=e.pingedLanes;if(u!==0)r=u,a=Se=15;else if(u=n&134217727,u!==0){var y=u&~d;y!==0?(r=fn(y),a=Se):(m&=u,m!==0&&(r=fn(m),a=Se))}else u=n&~d,u!==0?(r=fn(u),a=Se):m!==0&&(r=fn(m),a=Se);if(r===0)return 0;if(r=31-Pt(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&d)===0){if(fn(t),a<=Se)return t;Se=a}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),a=1<<n,r|=e[n],t&=~a;return r}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vr(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=hn(24&~t),e===0?Vr(10,t):e;case 10:return e=hn(192&~t),e===0?Vr(8,t):e;case 8:return e=hn(3584&~t),e===0&&(e=hn(4186112&~t),e===0&&(e=512)),e;case 2:return t=hn(805306368&~t),t===0&&(t=268435456),t}throw Error(o(358,e))}function hn(e){return e&-e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-Pt(t),e[t]=n}var Pt=Math.clz32?Math.clz32:Fd,Dd=Math.log,zd=Math.LN2;function Fd(e){return e===0?32:31-(Dd(e)/zd|0)|0}var Gd=l.unstable_UserBlockingPriority,Hd=l.unstable_runWithPriority,Yr=!0;function $d(e,t,n,r){Wt||os();var a=xs,u=Wt;Wt=!0;try{zo(a,e,t,n,r)}finally{(Wt=u)||cs()}}function Ud(e,t,n,r){Hd(Gd,xs.bind(null,e,t,n,r))}function xs(e,t,n,r){if(Yr){var a;if((a=(t&4)===0)&&0<lt.length&&-1<qo.indexOf(e))e=hs(null,e,t,n,r),lt.push(e);else{var u=ks(e,t,n,r);if(u===null)a&&Yo(e,r);else{if(a){if(-1<qo.indexOf(e)){e=hs(u,e,t,n,r),lt.push(e);return}if(Rd(u,e,t,n,r))return;Yo(e,r)}Il(e,t,r,null,n)}}}}function ks(e,t,n,r){var a=is(r);if(a=qt(a),a!==null){var u=Vt(a);if(u===null)a=null;else{var d=u.tag;if(d===13){if(a=Go(u),a!==null)return a;a=null}else if(d===3){if(u.stateNode.hydrate)return u.tag===3?u.stateNode.containerInfo:null;a=null}else u!==a&&(a=null)}}return Il(e,t,r,a,n),null}var Ct=null,ws=null,Jr=null;function il(){if(Jr)return Jr;var e,t=ws,n=t.length,r,a="value"in Ct?Ct.value:Ct.textContent,u=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===a[u-r];r++);return Jr=a.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function sl(){return!1}function Je(e){function t(n,r,a,u,d){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zr:sl,this.isPropagationStopped=sl,this}return s(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=Je(mn),Jn=s({},mn,{view:0,detail:0}),Bd=Je(Jn),Ss,Ts,Qn,Xr=s({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Ss=e.screenX-Qn.screenX,Ts=e.screenY-Qn.screenY):Ts=Ss=0,Qn=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:Ts}}),al=Je(Xr),Wd=s({},Xr,{dataTransfer:0}),Vd=Je(Wd),qd=s({},Jn,{relatedTarget:0}),Es=Je(qd),Yd=s({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=Je(Yd),Qd=s({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zd=Je(Qd),Xd=s({},mn,{data:0}),ol=Je(Xd),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tp[e])?!!t[e]:!1}function Ps(){return np}var rp=s({},Jn,{key:function(e){if(e.key){var t=Kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ip=Je(rp),sp=s({},Xr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ll=Je(sp),ap=s({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),op=Je(ap),lp=s({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cp=Je(lp),up=s({},Xr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dp=Je(up),pp=[9,13,27,32],Cs=g&&"CompositionEvent"in window,Zn=null;g&&"documentMode"in document&&(Zn=document.documentMode);var fp=g&&"TextEvent"in window&&!Zn,cl=g&&(!Cs||Zn&&8<Zn&&11>=Zn),ul=" ",dl=!1;function pl(e,t){switch(e){case"keyup":return pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function hp(e,t){switch(e){case"compositionend":return fl(t);case"keypress":return t.which!==32?null:(dl=!0,ul);case"textInput":return e=t.data,e===ul&&dl?null:e;default:return null}}function mp(e,t){if(gn)return e==="compositionend"||!Cs&&pl(e,t)?(e=il(),Jr=ws=Ct=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cl&&t.locale!=="ko"?null:t.data;default:return null}}var gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gp[e.type]:t==="textarea"}function ml(e,t,n,r){Mo(r),t=ei(t,"onChange"),0<t.length&&(n=new bs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,Kn=null;function vp(e){Cl(e,0)}function Kr(e){var t=wn(e);if(To(t))return e}function yp(e,t){if(e==="change")return t}var gl=!1;if(g){var Ls;if(g){var js="oninput"in document;if(!js){var vl=document.createElement("div");vl.setAttribute("oninput","return;"),js=typeof vl.oninput=="function"}Ls=js}else Ls=!1;gl=Ls&&(!document.documentMode||9<document.documentMode)}function yl(){Xn&&(Xn.detachEvent("onpropertychange",xl),Kn=Xn=null)}function xl(e){if(e.propertyName==="value"&&Kr(Kn)){var t=[];if(ml(t,Kn,e,is(e)),e=vp,Wt)e(t);else{Wt=!0;try{as(e,t)}finally{Wt=!1,cs()}}}}function xp(e,t,n){e==="focusin"?(yl(),Xn=t,Kn=n,Xn.attachEvent("onpropertychange",xl)):e==="focusout"&&yl()}function kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kr(Kn)}function wp(e,t){if(e==="click")return Kr(t)}function bp(e,t){if(e==="input"||e==="change")return Kr(t)}function Sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Sp,Tp=Object.prototype.hasOwnProperty;function er(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Tp.call(t,n[r])||!Ke(e[n[r]],t[n[r]]))return!1;return!0}function kl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wl(e,t){var n=kl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kl(n)}}function bl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sl(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ep=g&&"documentMode"in document&&11>=document.documentMode,vn=null,Ns=null,tr=null,Is=!1;function Tl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Is||vn==null||vn!==Fr(r)||(r=vn,"selectionStart"in r&&Rs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&er(tr,r)||(tr=r,r=ei(Ns,"onSelect"),0<r.length&&(t=new bs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}vs("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),vs("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),vs(Ad,2);for(var El="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),As=0;As<El.length;As++)gs.set(El[As],0);k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function Pl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ld(r,t,void 0,e),e.currentTarget=null}function Cl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var d=r.length-1;0<=d;d--){var m=r[d],y=m.instance,P=m.currentTarget;if(m=m.listener,y!==u&&a.isPropagationStopped())break e;Pl(a,m,P),u=y}else for(d=0;d<r.length;d++){if(m=r[d],y=m.instance,P=m.currentTarget,m=m.listener,y!==u&&a.isPropagationStopped())break e;Pl(a,m,P),u=y}}}if($r)throw e=ds,$r=!1,ds=null,e}function Te(e,t){var n=zl(t),r=e+"__bubble";n.has(r)||(Nl(t,e,2,!1),n.add(r))}var Ll="_reactListening"+Math.random().toString(36).slice(2);function jl(e){e[Ll]||(e[Ll]=!0,c.forEach(function(t){Pp.has(t)||Rl(t,!1,e,null),Rl(t,!0,e,null)}))}function Rl(e,t,n,r){var a=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,u=n;e==="selectionchange"&&n.nodeType!==9&&(u=n.ownerDocument);var d=zl(u),m=e+"__"+(t?"capture":"bubble");d.has(m)||(t&&(a|=4),Nl(u,e,a,t),d.add(m))}function Nl(e,t,n,r){var a=gs.get(t);switch(a===void 0?2:a){case 0:a=$d;break;case 1:a=Ud;break;default:a=xs}n=a.bind(null,t,n,e),a=void 0,!us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,a){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var m=r.stateNode.containerInfo;if(m===a||m.nodeType===8&&m.parentNode===a)break;if(d===4)for(d=r.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;d=d.return}for(;m!==null;){if(d=qt(m),d===null)return;if(y=d.tag,y===5||y===6){r=u=d;continue e}m=m.parentNode}}r=r.return}Td(function(){var P=u,B=is(n),le=[];e:{var M=nl.get(e);if(M!==void 0){var K=bs,ae=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":K=ip;break;case"focusin":ae="focus",K=Es;break;case"focusout":ae="blur",K=Es;break;case"beforeblur":case"afterblur":K=Es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=al;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=op;break;case Xo:case Ko:case el:K=Jd;break;case tl:K=cp;break;case"scroll":K=Bd;break;case"wheel":K=dp;break;case"copy":case"cut":case"paste":K=Zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=ll}var re=(t&4)!==0,S=!re&&e==="scroll",x=re?M!==null?M+"Capture":null:M;re=[];for(var b=P,j;b!==null;){j=b;var I=j.stateNode;if(j.tag===5&&I!==null&&(j=I,x!==null&&(I=Gn(b,x),I!=null&&re.push(rr(b,I,j)))),S)break;b=b.return}0<re.length&&(M=new K(M,ae,null,n,B),le.push({event:M,listeners:re}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",M&&(t&16)===0&&(ae=n.relatedTarget||n.fromElement)&&(qt(ae)||ae[kn]))break e;if((K||M)&&(M=B.window===B?B:(M=B.ownerDocument)?M.defaultView||M.parentWindow:window,K?(ae=n.relatedTarget||n.toElement,K=P,ae=ae?qt(ae):null,ae!==null&&(S=Vt(ae),ae!==S||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(K=null,ae=P),K!==ae)){if(re=al,I="onMouseLeave",x="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(re=ll,I="onPointerLeave",x="onPointerEnter",b="pointer"),S=K==null?M:wn(K),j=ae==null?M:wn(ae),M=new re(I,b+"leave",K,n,B),M.target=S,M.relatedTarget=j,I=null,qt(B)===P&&(re=new re(x,b+"enter",ae,n,B),re.target=j,re.relatedTarget=S,I=re),S=I,K&&ae)t:{for(re=K,x=ae,b=0,j=re;j;j=yn(j))b++;for(j=0,I=x;I;I=yn(I))j++;for(;0<b-j;)re=yn(re),b--;for(;0<j-b;)x=yn(x),j--;for(;b--;){if(re===x||x!==null&&re===x.alternate)break t;re=yn(re),x=yn(x)}re=null}else re=null;K!==null&&Al(le,M,K,re,!1),ae!==null&&S!==null&&Al(le,S,ae,re,!0)}}e:{if(M=P?wn(P):window,K=M.nodeName&&M.nodeName.toLowerCase(),K==="select"||K==="input"&&M.type==="file")var de=yp;else if(hl(M))if(gl)de=bp;else{de=kp;var Q=xp}else(K=M.nodeName)&&K.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(de=wp);if(de&&(de=de(e,P))){ml(le,de,n,B);break e}Q&&Q(e,M,P),e==="focusout"&&(Q=M._wrapperState)&&Q.controlled&&M.type==="number"&&Zi(M,"number",M.value)}switch(Q=P?wn(P):window,e){case"focusin":(hl(Q)||Q.contentEditable==="true")&&(vn=Q,Ns=P,tr=null);break;case"focusout":tr=Ns=vn=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,Tl(le,n,B);break;case"selectionchange":if(Ep)break;case"keydown":case"keyup":Tl(le,n,B)}var pe;if(Cs)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else gn?pl(e,n)&&(me="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(me="onCompositionStart");me&&(cl&&n.locale!=="ko"&&(gn||me!=="onCompositionStart"?me==="onCompositionEnd"&&gn&&(pe=il()):(Ct=B,ws="value"in Ct?Ct.value:Ct.textContent,gn=!0)),Q=ei(P,me),0<Q.length&&(me=new ol(me,e,null,n,B),le.push({event:me,listeners:Q}),pe?me.data=pe:(pe=fl(n),pe!==null&&(me.data=pe)))),(pe=fp?hp(e,n):mp(e,n))&&(P=ei(P,"onBeforeInput"),0<P.length&&(B=new ol("onBeforeInput","beforeinput",null,n,B),le.push({event:B,listeners:P}),B.data=pe))}Cl(le,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,u=a.stateNode;a.tag===5&&u!==null&&(a=u,u=Gn(e,n),u!=null&&r.unshift(rr(e,u,a)),u=Gn(e,t),u!=null&&r.push(rr(e,u,a))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Al(e,t,n,r,a){for(var u=t._reactName,d=[];n!==null&&n!==r;){var m=n,y=m.alternate,P=m.stateNode;if(y!==null&&y===r)break;m.tag===5&&P!==null&&(m=P,a?(y=Gn(n,u),y!=null&&d.unshift(rr(n,y,m))):a||(y=Gn(n,u),y!=null&&d.push(rr(n,y,m)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}function ti(){}var _s=null,Os=null;function _l(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Ms(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,Cp=typeof clearTimeout=="function"?clearTimeout:void 0;function Ds(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Ml(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zs=0;function Lp(e){return{$$typeof:F,toString:e,valueOf:e}}var ni=Math.random().toString(36).slice(2),Lt="__reactFiber$"+ni,ri="__reactProps$"+ni,kn="__reactContainer$"+ni,Dl="__reactEvents$"+ni;function qt(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ml(e);e!==null;){if(n=e[Lt])return n;e=Ml(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Lt]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function ii(e){return e[ri]||null}function zl(e){var t=e[Dl];return t===void 0&&(t=e[Dl]=new Set),t}var Fs=[],bn=-1;function jt(e){return{current:e}}function Ee(e){0>bn||(e.current=Fs[bn],Fs[bn]=null,bn--)}function Pe(e,t){bn++,Fs[bn]=e.current,e.current=t}var Rt={},Oe=jt(Rt),Be=jt(!1),Yt=Rt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},u;for(u in n)a[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function We(e){return e=e.childContextTypes,e!=null}function si(){Ee(Be),Ee(Oe)}function Fl(e,t,n){if(Oe.current!==Rt)throw Error(o(168));Pe(Oe,t),Pe(Be,n)}function Gl(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in e))throw Error(o(108,ln(t)||"Unknown",a));return s({},n,r)}function ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Yt=Oe.current,Pe(Oe,e),Pe(Be,Be.current),!0}function Hl(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Gl(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,Ee(Be),Ee(Oe),Pe(Oe,e)):Ee(Be),Pe(Be,n)}var Gs=null,Jt=null,jp=l.unstable_runWithPriority,Hs=l.unstable_scheduleCallback,$s=l.unstable_cancelCallback,Rp=l.unstable_shouldYield,$l=l.unstable_requestPaint,Us=l.unstable_now,Np=l.unstable_getCurrentPriorityLevel,oi=l.unstable_ImmediatePriority,Ul=l.unstable_UserBlockingPriority,Bl=l.unstable_NormalPriority,Wl=l.unstable_LowPriority,Vl=l.unstable_IdlePriority,Bs={},Ip=$l!==void 0?$l:function(){},vt=null,li=null,Ws=!1,ql=Us(),Me=1e4>ql?Us:function(){return Us()-ql};function Tn(){switch(Np()){case oi:return 99;case Ul:return 98;case Bl:return 97;case Wl:return 96;case Vl:return 95;default:throw Error(o(332))}}function Yl(e){switch(e){case 99:return oi;case 98:return Ul;case 97:return Bl;case 96:return Wl;case 95:return Vl;default:throw Error(o(332))}}function Qt(e,t){return e=Yl(e),jp(e,t)}function sr(e,t,n){return e=Yl(e),Hs(e,t,n)}function ct(){if(li!==null){var e=li;li=null,$s(e)}Jl()}function Jl(){if(!Ws&&vt!==null){Ws=!0;var e=0;try{var t=vt;Qt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),vt=null}catch(n){throw vt!==null&&(vt=vt.slice(e+1)),Hs(oi,ct),n}finally{Ws=!1}}}var Ap=N.ReactCurrentBatchConfig;function it(e,t){if(e&&e.defaultProps){t=s({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ci=jt(null),ui=null,En=null,di=null;function Vs(){di=En=ui=null}function qs(e){var t=ci.current;Ee(ci),e.type._context._currentValue=t}function Ql(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Pn(e,t){ui=e,di=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(st=!0),e.firstContext=null)}function et(e,t){if(di!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(di=e,t=1073741823),t={context:e,observedBits:t,next:null},En===null){if(ui===null)throw Error(o(308));En=t,ui.dependencies={lanes:0,firstContext:t,responders:null}}else En=En.next=t;return e._currentValue}var Nt=!1;function Ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Zl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Xl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?a=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?a=u=t:u=u.next=t}else a=u=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ar(e,t,n,r){var a=e.updateQueue;Nt=!1;var u=a.firstBaseUpdate,d=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var y=m,P=y.next;y.next=null,d===null?u=P:d.next=P,d=y;var B=e.alternate;if(B!==null){B=B.updateQueue;var le=B.lastBaseUpdate;le!==d&&(le===null?B.firstBaseUpdate=P:le.next=P,B.lastBaseUpdate=y)}}if(u!==null){le=a.baseState,d=0,B=P=y=null;do{m=u.lane;var M=u.eventTime;if((r&m)===m){B!==null&&(B=B.next={eventTime:M,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var K=e,ae=u;switch(m=t,M=n,ae.tag){case 1:if(K=ae.payload,typeof K=="function"){le=K.call(M,le,m);break e}le=K;break e;case 3:K.flags=K.flags&-4097|64;case 0:if(K=ae.payload,m=typeof K=="function"?K.call(M,le,m):K,m==null)break e;le=s({},le,m);break e;case 2:Nt=!0}}u.callback!==null&&(e.flags|=32,m=a.effects,m===null?a.effects=[u]:m.push(u))}else M={eventTime:M,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},B===null?(P=B=M,y=le):B=B.next=M,d|=m;if(u=u.next,u===null){if(m=a.shared.pending,m===null)break;u=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);B===null&&(y=le),a.baseState=y,a.firstBaseUpdate=P,a.lastBaseUpdate=B,yr|=d,e.lanes=d,e.memoizedState=le}}function Kl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(o(191,a));a.call(r)}}}var ec=new i.Component().refs;function pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:s({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fi={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),a=Mt(e),u=It(r,a);u.payload=t,n!=null&&(u.callback=n),At(e,u),Dt(e,a,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),a=Mt(e),u=It(r,a);u.tag=1,u.payload=t,n!=null&&(u.callback=n),At(e,u),Dt(e,a,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Mt(e),a=It(n,r);a.tag=2,t!=null&&(a.callback=t),At(e,a),Dt(e,r,n)}};function tc(e,t,n,r,a,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,d):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(a,u):!0}function nc(e,t,n){var r=!1,a=Rt,u=t.contextType;return typeof u=="object"&&u!==null?u=et(u):(a=We(t)?Yt:Oe.current,r=t.contextTypes,u=(r=r!=null)?Sn(e,a):Rt),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=u),t}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fi.enqueueReplaceState(t,t.state,null)}function Js(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=ec,Ys(e);var u=t.contextType;typeof u=="object"&&u!==null?a.context=et(u):(u=We(t)?Yt:Oe.current,a.context=Sn(e,u)),ar(e,n,a,r),a.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(pi(e,t,u,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&fi.enqueueReplaceState(a,a.state,null),ar(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4)}var hi=Array.isArray;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var d=r.refs;d===ec&&(d=r.refs={}),u===null?delete d[a]:d[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function mi(e,t){if(e.type!=="textarea")throw Error(o(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function ic(e){function t(S,x){if(e){var b=S.lastEffect;b!==null?(b.nextEffect=x,S.lastEffect=x):S.firstEffect=S.lastEffect=x,x.nextEffect=null,x.flags=8}}function n(S,x){if(!e)return null;for(;x!==null;)t(S,x),x=x.sibling;return null}function r(S,x){for(S=new Map;x!==null;)x.key!==null?S.set(x.key,x):S.set(x.index,x),x=x.sibling;return S}function a(S,x){return S=Gt(S,x),S.index=0,S.sibling=null,S}function u(S,x,b){return S.index=b,e?(b=S.alternate,b!==null?(b=b.index,b<x?(S.flags=2,x):b):(S.flags=2,x)):x}function d(S){return e&&S.alternate===null&&(S.flags=2),S}function m(S,x,b,j){return x===null||x.tag!==6?(x=Na(b,S.mode,j),x.return=S,x):(x=a(x,b),x.return=S,x)}function y(S,x,b,j){return x!==null&&x.elementType===b.type?(j=a(x,b.props),j.ref=or(S,x,b),j.return=S,j):(j=Ai(b.type,b.key,b.props,null,S.mode,j),j.ref=or(S,x,b),j.return=S,j)}function P(S,x,b,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Ia(b,S.mode,j),x.return=S,x):(x=a(x,b.children||[]),x.return=S,x)}function B(S,x,b,j,I){return x===null||x.tag!==7?(x=_n(b,S.mode,j,I),x.return=S,x):(x=a(x,b),x.return=S,x)}function le(S,x,b){if(typeof x=="string"||typeof x=="number")return x=Na(""+x,S.mode,b),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case U:return b=Ai(x.type,x.key,x.props,null,S.mode,b),b.ref=or(S,null,x),b.return=S,b;case q:return x=Ia(x,S.mode,b),x.return=S,x}if(hi(x)||X(x))return x=_n(x,S.mode,b,null),x.return=S,x;mi(S,x)}return null}function M(S,x,b,j){var I=x!==null?x.key:null;if(typeof b=="string"||typeof b=="number")return I!==null?null:m(S,x,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return b.key===I?b.type===W?B(S,x,b.props.children,j,I):y(S,x,b,j):null;case q:return b.key===I?P(S,x,b,j):null}if(hi(b)||X(b))return I!==null?null:B(S,x,b,j,null);mi(S,b)}return null}function K(S,x,b,j,I){if(typeof j=="string"||typeof j=="number")return S=S.get(b)||null,m(x,S,""+j,I);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return S=S.get(j.key===null?b:j.key)||null,j.type===W?B(x,S,j.props.children,I,j.key):y(x,S,j,I);case q:return S=S.get(j.key===null?b:j.key)||null,P(x,S,j,I)}if(hi(j)||X(j))return S=S.get(b)||null,B(x,S,j,I,null);mi(x,j)}return null}function ae(S,x,b,j){for(var I=null,de=null,Q=x,pe=x=0,me=null;Q!==null&&pe<b.length;pe++){Q.index>pe?(me=Q,Q=null):me=Q.sibling;var fe=M(S,Q,b[pe],j);if(fe===null){Q===null&&(Q=me);break}e&&Q&&fe.alternate===null&&t(S,Q),x=u(fe,x,pe),de===null?I=fe:de.sibling=fe,de=fe,Q=me}if(pe===b.length)return n(S,Q),I;if(Q===null){for(;pe<b.length;pe++)Q=le(S,b[pe],j),Q!==null&&(x=u(Q,x,pe),de===null?I=Q:de.sibling=Q,de=Q);return I}for(Q=r(S,Q);pe<b.length;pe++)me=K(Q,S,pe,b[pe],j),me!==null&&(e&&me.alternate!==null&&Q.delete(me.key===null?pe:me.key),x=u(me,x,pe),de===null?I=me:de.sibling=me,de=me);return e&&Q.forEach(function(Ht){return t(S,Ht)}),I}function re(S,x,b,j){var I=X(b);if(typeof I!="function")throw Error(o(150));if(b=I.call(b),b==null)throw Error(o(151));for(var de=I=null,Q=x,pe=x=0,me=null,fe=b.next();Q!==null&&!fe.done;pe++,fe=b.next()){Q.index>pe?(me=Q,Q=null):me=Q.sibling;var Ht=M(S,Q,fe.value,j);if(Ht===null){Q===null&&(Q=me);break}e&&Q&&Ht.alternate===null&&t(S,Q),x=u(Ht,x,pe),de===null?I=Ht:de.sibling=Ht,de=Ht,Q=me}if(fe.done)return n(S,Q),I;if(Q===null){for(;!fe.done;pe++,fe=b.next())fe=le(S,fe.value,j),fe!==null&&(x=u(fe,x,pe),de===null?I=fe:de.sibling=fe,de=fe);return I}for(Q=r(S,Q);!fe.done;pe++,fe=b.next())fe=K(Q,S,pe,fe.value,j),fe!==null&&(e&&fe.alternate!==null&&Q.delete(fe.key===null?pe:fe.key),x=u(fe,x,pe),de===null?I=fe:de.sibling=fe,de=fe);return e&&Q.forEach(function(df){return t(S,df)}),I}return function(S,x,b,j){var I=typeof b=="object"&&b!==null&&b.type===W&&b.key===null;I&&(b=b.props.children);var de=typeof b=="object"&&b!==null;if(de)switch(b.$$typeof){case U:e:{for(de=b.key,I=x;I!==null;){if(I.key===de){switch(I.tag){case 7:if(b.type===W){n(S,I.sibling),x=a(I,b.props.children),x.return=S,S=x;break e}break;default:if(I.elementType===b.type){n(S,I.sibling),x=a(I,b.props),x.ref=or(S,I,b),x.return=S,S=x;break e}}n(S,I);break}else t(S,I);I=I.sibling}b.type===W?(x=_n(b.props.children,S.mode,j,b.key),x.return=S,S=x):(j=Ai(b.type,b.key,b.props,null,S.mode,j),j.ref=or(S,x,b),j.return=S,S=j)}return d(S);case q:e:{for(I=b.key;x!==null;){if(x.key===I)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){n(S,x.sibling),x=a(x,b.children||[]),x.return=S,S=x;break e}else{n(S,x);break}else t(S,x);x=x.sibling}x=Ia(b,S.mode,j),x.return=S,S=x}return d(S)}if(typeof b=="string"||typeof b=="number")return b=""+b,x!==null&&x.tag===6?(n(S,x.sibling),x=a(x,b),x.return=S,S=x):(n(S,x),x=Na(b,S.mode,j),x.return=S,S=x),d(S);if(hi(b))return ae(S,x,b,j);if(X(b))return re(S,x,b,j);if(de&&mi(S,b),typeof b>"u"&&!I)switch(S.tag){case 1:case 22:case 0:case 11:case 15:throw Error(o(152,ln(S.type)||"Component"))}return n(S,x)}}var gi=ic(!0),sc=ic(!1),lr={},ut=jt(lr),cr=jt(lr),ur=jt(lr);function Zt(e){if(e===lr)throw Error(o(174));return e}function Qs(e,t){switch(Pe(ur,t),Pe(cr,e),Pe(ut,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ts(t,e)}Ee(ut),Pe(ut,t)}function Cn(){Ee(ut),Ee(cr),Ee(ur)}function ac(e){Zt(ur.current);var t=Zt(ut.current),n=ts(t,e.type);t!==n&&(Pe(cr,e),Pe(ut,n))}function Zs(e){cr.current===e&&(Ee(ut),Ee(cr))}var Ce=jt(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yt=null,_t=null,dt=!1;function oc(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Xs(e){if(dt){var t=_t;if(t){var n=t;if(!lc(e,t)){if(t=xn(n.nextSibling),!t||!lc(e,t)){e.flags=e.flags&-1025|2,dt=!1,yt=e;return}oc(yt,n)}yt=e,_t=xn(t.firstChild)}else e.flags=e.flags&-1025|2,dt=!1,yt=e}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function yi(e){if(e!==yt)return!1;if(!dt)return cc(e),dt=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Ms(t,e.memoizedProps))for(t=_t;t;)oc(e,t),t=xn(t.nextSibling);if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=yt?xn(e.stateNode.nextSibling):null;return!0}function Ks(){_t=yt=null,dt=!1}var Ln=[];function ea(){for(var e=0;e<Ln.length;e++)Ln[e]._workInProgressVersionPrimary=null;Ln.length=0}var dr=N.ReactCurrentDispatcher,tt=N.ReactCurrentBatchConfig,pr=0,je=null,De=null,Ie=null,xi=!1,fr=!1;function Ve(){throw Error(o(321))}function ta(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function na(e,t,n,r,a,u){if(pr=u,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,dr.current=e===null||e.memoizedState===null?Op:Mp,e=n(r,a),fr){u=0;do{if(fr=!1,!(25>u))throw Error(o(301));u+=1,Ie=De=null,t.updateQueue=null,dr.current=Dp,e=n(r,a)}while(fr)}if(dr.current=Si,t=De!==null&&De.next!==null,pr=0,Ie=De=je=null,xi=!1,t)throw Error(o(300));return e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?je.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Kt(){if(De===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ie===null?je.memoizedState:Ie.next;if(t!==null)Ie=t,De=e;else{if(e===null)throw Error(o(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ie===null?je.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function pt(e,t){return typeof t=="function"?t(e):t}function hr(e){var t=Kt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=De,a=r.baseQueue,u=n.pending;if(u!==null){if(a!==null){var d=a.next;a.next=u.next,u.next=d}r.baseQueue=a=u,n.pending=null}if(a!==null){a=a.next,r=r.baseState;var m=d=u=null,y=a;do{var P=y.lane;if((pr&P)===P)m!==null&&(m=m.next={lane:0,action:y.action,eagerReducer:y.eagerReducer,eagerState:y.eagerState,next:null}),r=y.eagerReducer===e?y.eagerState:e(r,y.action);else{var B={lane:P,action:y.action,eagerReducer:y.eagerReducer,eagerState:y.eagerState,next:null};m===null?(d=m=B,u=r):m=m.next=B,je.lanes|=P,yr|=P}y=y.next}while(y!==null&&y!==a);m===null?u=r:m.next=d,Ke(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=m,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function mr(e){var t=Kt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,u=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do u=e(u,d.action),d=d.next;while(d!==a);Ke(u,t.memoizedState)||(st=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function uc(e,t,n){var r=t._getVersion;r=r(t._source);var a=t._workInProgressVersionPrimary;if(a!==null?e=a===r:(e=e.mutableReadLanes,(e=(pr&e)===e)&&(t._workInProgressVersionPrimary=r,Ln.push(t))),e)return n(t._source);throw Ln.push(t),Error(o(350))}function dc(e,t,n,r){var a=Ge;if(a===null)throw Error(o(349));var u=t._getVersion,d=u(t._source),m=dr.current,y=m.useState(function(){return uc(a,t,n)}),P=y[1],B=y[0];y=Ie;var le=e.memoizedState,M=le.refs,K=M.getSnapshot,ae=le.source;le=le.subscribe;var re=je;return e.memoizedState={refs:M,source:t,subscribe:r},m.useEffect(function(){M.getSnapshot=n,M.setSnapshot=P;var S=u(t._source);if(!Ke(d,S)){S=n(t._source),Ke(B,S)||(P(S),S=Mt(re),a.mutableReadLanes|=S&a.pendingLanes),S=a.mutableReadLanes,a.entangledLanes|=S;for(var x=a.entanglements,b=S;0<b;){var j=31-Pt(b),I=1<<j;x[j]|=S,b&=~I}}},[n,t,r]),m.useEffect(function(){return r(t._source,function(){var S=M.getSnapshot,x=M.setSnapshot;try{x(S(t._source));var b=Mt(re);a.mutableReadLanes|=b&a.pendingLanes}catch(j){x(function(){throw j})}})},[t,r]),Ke(K,n)&&Ke(ae,t)&&Ke(le,r)||(e={pending:null,dispatch:null,lastRenderedReducer:pt,lastRenderedState:B},e.dispatch=P=aa.bind(null,je,e),y.queue=e,y.baseQueue=null,B=uc(a,t,n),y.memoizedState=y.baseState=B),B}function pc(e,t,n){var r=Kt();return dc(r,e,t,n)}function gr(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:pt,lastRenderedState:e},e=e.dispatch=aa.bind(null,je,e),[t.memoizedState,e]}function ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fc(e){var t=Xt();return e={current:e},t.memoizedState=e}function wi(){return Kt().memoizedState}function ra(e,t,n,r){var a=Xt();je.flags|=e,a.memoizedState=ki(1|t,n,void 0,r===void 0?null:r)}function ia(e,t,n,r){var a=Kt();r=r===void 0?null:r;var u=void 0;if(De!==null){var d=De.memoizedState;if(u=d.destroy,r!==null&&ta(r,d.deps)){ki(t,n,u,r);return}}je.flags|=e,a.memoizedState=ki(1|t,n,u,r)}function hc(e,t){return ra(516,4,e,t)}function bi(e,t){return ia(516,4,e,t)}function mc(e,t){return ia(4,2,e,t)}function gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vc(e,t,n){return n=n!=null?n.concat([e]):null,ia(4,2,gc.bind(null,t,e),n)}function sa(){}function yc(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xc(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ta(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _p(e,t){var n=Tn();Qt(98>n?98:n,function(){e(!0)}),Qt(97<n?97:n,function(){var r=tt.transition;tt.transition=1;try{e(!1),t()}finally{tt.transition=r}})}function aa(e,t,n){var r=Qe(),a=Mt(e),u={lane:a,action:n,eagerReducer:null,eagerState:null,next:null},d=t.pending;if(d===null?u.next=u:(u.next=d.next,d.next=u),t.pending=u,d=e.alternate,e===je||d!==null&&d===je)fr=xi=!0;else{if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var m=t.lastRenderedState,y=d(m,n);if(u.eagerReducer=d,u.eagerState=y,Ke(y,m))return}catch{}Dt(e,a,r)}}var Si={readContext:et,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useOpaqueIdentifier:Ve,unstable_isNewReconciler:!1},Op={readContext:et,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ra(4,2,gc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=aa.bind(null,je,e),[r.memoizedState,e]},useRef:fc,useState:gr,useDebugValue:sa,useDeferredValue:function(e){var t=gr(e),n=t[0],r=t[1];return hc(function(){var a=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=a}},[e]),n},useTransition:function(){var e=gr(!1),t=e[0];return e=_p.bind(null,e[1]),fc(e),[e,t]},useMutableSource:function(e,t,n){var r=Xt();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},dc(r,e,t,n)},useOpaqueIdentifier:function(){if(dt){var e=!1,t=Lp(function(){throw e||(e=!0,n("r:"+(zs++).toString(36))),Error(o(355))}),n=gr(t)[1];return(je.mode&2)===0&&(je.flags|=516,ki(5,function(){n("r:"+(zs++).toString(36))},void 0,null)),t}return t="r:"+(zs++).toString(36),gr(t),t},unstable_isNewReconciler:!1},Mp={readContext:et,useCallback:yc,useContext:et,useEffect:bi,useImperativeHandle:vc,useLayoutEffect:mc,useMemo:xc,useReducer:hr,useRef:wi,useState:function(){return hr(pt)},useDebugValue:sa,useDeferredValue:function(e){var t=hr(pt),n=t[0],r=t[1];return bi(function(){var a=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=a}},[e]),n},useTransition:function(){var e=hr(pt)[0];return[wi().current,e]},useMutableSource:pc,useOpaqueIdentifier:function(){return hr(pt)[0]},unstable_isNewReconciler:!1},Dp={readContext:et,useCallback:yc,useContext:et,useEffect:bi,useImperativeHandle:vc,useLayoutEffect:mc,useMemo:xc,useReducer:mr,useRef:wi,useState:function(){return mr(pt)},useDebugValue:sa,useDeferredValue:function(e){var t=mr(pt),n=t[0],r=t[1];return bi(function(){var a=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=a}},[e]),n},useTransition:function(){var e=mr(pt)[0];return[wi().current,e]},useMutableSource:pc,useOpaqueIdentifier:function(){return mr(pt)[0]},unstable_isNewReconciler:!1},zp=N.ReactCurrentOwner,st=!1;function qe(e,t,n,r){t.child=e===null?sc(t,null,n,r):gi(t,e.child,n,r)}function kc(e,t,n,r,a){n=n.render;var u=t.ref;return Pn(t,a),r=na(e,t,n,r,u,a),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~a,xt(e,t,a)):(t.flags|=1,qe(e,t,r,a),t.child)}function wc(e,t,n,r,a,u){if(e===null){var d=n.type;return typeof d=="function"&&!ja(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=d,bc(e,t,d,r,a,u)):(e=Ai(n.type,null,r,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}return d=e.child,(a&u)===0&&(a=d.memoizedProps,n=n.compare,n=n!==null?n:er,n(a,r)&&e.ref===t.ref)?xt(e,t,u):(t.flags|=1,e=Gt(d,r),e.ref=t.ref,e.return=t,t.child=e)}function bc(e,t,n,r,a,u){if(e!==null&&er(e.memoizedProps,r)&&e.ref===t.ref)if(st=!1,(u&a)!==0)(e.flags&16384)!==0&&(st=!0);else return t.lanes=e.lanes,xt(e,t,u);return la(e,t,n,r,u)}function oa(e,t,n){var r=t.pendingProps,a=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},Ii(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},Ii(t,u!==null?u.baseLanes:n);else return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Ii(t,e),null;else u!==null?(r=u.baseLanes|n,t.memoizedState=null):r=n,Ii(t,r);return qe(e,t,a,n),t.child}function Sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function la(e,t,n,r,a){var u=We(n)?Yt:Oe.current;return u=Sn(t,u),Pn(t,a),n=na(e,t,n,r,u,a),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~a,xt(e,t,a)):(t.flags|=1,qe(e,t,n,a),t.child)}function Tc(e,t,n,r,a){if(We(n)){var u=!0;ai(t)}else u=!1;if(Pn(t,a),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),nc(t,n,r),Js(t,n,r,a),r=!0;else if(e===null){var d=t.stateNode,m=t.memoizedProps;d.props=m;var y=d.context,P=n.contextType;typeof P=="object"&&P!==null?P=et(P):(P=We(n)?Yt:Oe.current,P=Sn(t,P));var B=n.getDerivedStateFromProps,le=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function";le||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==r||y!==P)&&rc(t,d,r,P),Nt=!1;var M=t.memoizedState;d.state=M,ar(t,r,d,a),y=t.memoizedState,m!==r||M!==y||Be.current||Nt?(typeof B=="function"&&(pi(t,n,B,r),y=t.memoizedState),(m=Nt||tc(t,n,m,r,M,y,P))?(le||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4)):(typeof d.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=y),d.props=r,d.state=y,d.context=P,r=m):(typeof d.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{d=t.stateNode,Zl(e,t),m=t.memoizedProps,P=t.type===t.elementType?m:it(t.type,m),d.props=P,le=t.pendingProps,M=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=et(y):(y=We(n)?Yt:Oe.current,y=Sn(t,y));var K=n.getDerivedStateFromProps;(B=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==le||M!==y)&&rc(t,d,r,y),Nt=!1,M=t.memoizedState,d.state=M,ar(t,r,d,a);var ae=t.memoizedState;m!==le||M!==ae||Be.current||Nt?(typeof K=="function"&&(pi(t,n,K,r),ae=t.memoizedState),(P=Nt||tc(t,n,P,r,M,ae,y))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,ae,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,ae,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=ae),d.props=r,d.state=ae,d.context=y,r=P):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=256),r=!1)}return ca(e,t,n,r,u,a)}function ca(e,t,n,r,a,u){Sc(e,t);var d=(t.flags&64)!==0;if(!r&&!d)return a&&Hl(t,n,!1),xt(e,t,u);r=t.stateNode,zp.current=t;var m=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=gi(t,e.child,null,u),t.child=gi(t,null,m,u)):qe(e,t,m,u),t.memoizedState=r.state,a&&Hl(t,n,!0),t.child}function Ec(e){var t=e.stateNode;t.pendingContext?Fl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fl(e,t.context,!1),Qs(e,t.containerInfo)}var Ti={dehydrated:null,retryLane:0};function Pc(e,t,n){var r=t.pendingProps,a=Ce.current,u=!1,d;return(d=(t.flags&64)!==0)||(d=e!==null&&e.memoizedState===null?!1:(a&2)!==0),d?(u=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(a|=1),Pe(Ce,a&1),e===null?(r.fallback!==void 0&&Xs(t),e=r.children,a=r.fallback,u?(e=Cc(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Ti,e):typeof r.unstable_expectedLoadTime=="number"?(e=Cc(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Ti,t.lanes=33554432,e):(n=Ra({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?u?(r=jc(e,t,r.children,r.fallback,n),u=t.child,a=e.child.memoizedState,u.memoizedState=a===null?{baseLanes:n}:{baseLanes:a.baseLanes|n},u.childLanes=e.childLanes&~n,t.memoizedState=Ti,r):(n=Lc(e,t,r.children,n),t.memoizedState=null,n):u?(r=jc(e,t,r.children,r.fallback,n),u=t.child,a=e.child.memoizedState,u.memoizedState=a===null?{baseLanes:n}:{baseLanes:a.baseLanes|n},u.childLanes=e.childLanes&~n,t.memoizedState=Ti,r):(n=Lc(e,t,r.children,n),t.memoizedState=null,n)}function Cc(e,t,n,r){var a=e.mode,u=e.child;return t={mode:"hidden",children:t},(a&2)===0&&u!==null?(u.childLanes=0,u.pendingProps=t):u=Ra(t,a,0,null),n=_n(n,a,r,null),u.return=e,n.return=e,u.sibling=n,e.child=u,n}function Lc(e,t,n,r){var a=e.child;return e=a.sibling,n=Gt(a,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function jc(e,t,n,r,a){var u=t.mode,d=e.child;e=d.sibling;var m={mode:"hidden",children:n};return(u&2)===0&&t.child!==d?(n=t.child,n.childLanes=0,n.pendingProps=m,d=n.lastEffect,d!==null?(t.firstEffect=n.firstEffect,t.lastEffect=d,d.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Gt(d,m),e!==null?r=Gt(e,r):(r=_n(r,u,a,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Rc(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ql(e.return,t)}function ua(e,t,n,r,a,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,lastEffect:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=n,d.tailMode=a,d.lastEffect=u)}function Nc(e,t,n){var r=t.pendingProps,a=r.revealOrder,u=r.tail;if(qe(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rc(e,n);else if(e.tag===19)Rc(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pe(Ce,r),(t.mode&2)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&vi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ua(t,!1,a,n,u,t.lastEffect);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&vi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ua(t,!0,n,null,u,t.lastEffect);break;case"together":ua(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Ic,da,Ac,_c;Ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},da=function(){},Ac=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Zt(ut.current);var u=null;switch(n){case"input":a=Ji(e,a),r=Ji(e,r),u=[];break;case"option":a=Xi(e,a),r=Xi(e,r),u=[];break;case"select":a=s({},a,{value:void 0}),r=s({},r,{value:void 0}),u=[];break;case"textarea":a=Ki(e,a),r=Ki(e,r),u=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ti)}ns(n,r);var d;n=null;for(P in a)if(!r.hasOwnProperty(P)&&a.hasOwnProperty(P)&&a[P]!=null)if(P==="style"){var m=a[P];for(d in m)m.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(h.hasOwnProperty(P)?u||(u=[]):(u=u||[]).push(P,null));for(P in r){var y=r[P];if(m=a?.[P],r.hasOwnProperty(P)&&y!==m&&(y!=null||m!=null))if(P==="style")if(m){for(d in m)!m.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&m[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(u||(u=[]),u.push(P,n)),n=y;else P==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,m=m?m.__html:void 0,y!=null&&m!==y&&(u=u||[]).push(P,y)):P==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(P,""+y):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(h.hasOwnProperty(P)?(y!=null&&P==="onScroll"&&Te("scroll",e),u||m===y||(u=[])):typeof y=="object"&&y!==null&&y.$$typeof===F?y.toString():(u=u||[]).push(P,y))}n&&(u=u||[]).push("style",n);var P=u;(t.updateQueue=P)&&(t.flags|=4)}},_c=function(e,t,n,r){n!==r&&(t.flags|=4)};function vr(e,t){if(!dt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fp(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return We(t.type)&&si(),null;case 3:return Cn(),Ee(Be),Ee(Oe),ea(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:r.hydrate||(t.flags|=256)),da(t),null;case 5:Zs(t);var a=Zt(ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Ac(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(o(166));return null}if(e=Zt(ut.current),yi(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[Lt]=t,r[ri]=u,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(e=0;e<nr.length;e++)Te(nr[e],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Eo(r,u),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},Te("invalid",r);break;case"textarea":Lo(r,u),Te("invalid",r)}ns(n,u),e=null;for(var d in u)u.hasOwnProperty(d)&&(a=u[d],d==="children"?typeof a=="string"?r.textContent!==a&&(e=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(e=["children",""+a]):h.hasOwnProperty(d)&&a!=null&&d==="onScroll"&&Te("scroll",r));switch(n){case"input":zr(r),Co(r,u,!0);break;case"textarea":zr(r),Ro(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=ti)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(d=a.nodeType===9?a:a.ownerDocument,e===es.html&&(e=No(n)),e===es.html?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[Lt]=t,e[ri]=r,Ic(e,t,!1,!1),t.stateNode=e,d=rs(n,r),n){case"dialog":Te("cancel",e),Te("close",e),a=r;break;case"iframe":case"object":case"embed":Te("load",e),a=r;break;case"video":case"audio":for(a=0;a<nr.length;a++)Te(nr[a],e);a=r;break;case"source":Te("error",e),a=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),a=r;break;case"details":Te("toggle",e),a=r;break;case"input":Eo(e,r),a=Ji(e,r),Te("invalid",e);break;case"option":a=Xi(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=s({},r,{value:void 0}),Te("invalid",e);break;case"textarea":Lo(e,r),a=Ki(e,r),Te("invalid",e);break;default:a=r}ns(n,a);var m=a;for(u in m)if(m.hasOwnProperty(u)){var y=m[u];u==="style"?_o(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Io(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&zn(e,y):typeof y=="number"&&zn(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(h.hasOwnProperty(u)?y!=null&&u==="onScroll"&&Te("scroll",e):y!=null&&ne(e,u,y,d))}switch(n){case"input":zr(e),Co(e,r,!1);break;case"textarea":zr(e),Ro(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?cn(e,!!r.multiple,u,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ti)}_l(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)_c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));n=Zt(ur.current),Zt(ut.current),yi(t)?(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r)}return null;case 13:return Ee(Ce),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&yi(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Ce.current&1)!==0?Ae===0&&(Ae=3):((Ae===0||Ae===3)&&(Ae=4),Ge===null||(yr&134217727)===0&&(Rn&134217727)===0||In(Ge,ze))),(r||n)&&(t.flags|=4),null);case 4:return Cn(),da(t),e===null&&jl(t.stateNode.containerInfo),null;case 10:return qs(t),null;case 17:return We(t.type)&&si(),null;case 19:if(Ee(Ce),r=t.memoizedState,r===null)return null;if(u=(t.flags&64)!==0,d=r.rendering,d===null)if(u)vr(r,!1);else{if(Ae!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(d=vi(e),d!==null){for(t.flags|=64,vr(r,!1),u=d.updateQueue,u!==null&&(t.updateQueue=u,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)u=n,e=r,u.flags&=2,u.nextEffect=null,u.firstEffect=null,u.lastEffect=null,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pe(Ce,Ce.current&1|2),t.child}e=e.sibling}r.tail!==null&&Me()>ba&&(t.flags|=64,u=!0,vr(r,!1),t.lanes=33554432)}else{if(!u)if(e=vi(d),e!==null){if(t.flags|=64,u=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!d.alternate&&!dt)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Me()-r.renderingStartTime>ba&&n!==1073741824&&(t.flags|=64,u=!0,vr(r,!1),t.lanes=33554432);r.isBackwards?(d.sibling=t.child,t.child=d):(n=r.last,n!==null?n.sibling=d:t.child=d,r.last=d)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Me(),n.sibling=null,t=Ce.current,Pe(Ce,u?t&1|2:t&1),n):null;case 23:case 24:return La(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(o(156,t.tag))}function Gp(e){switch(e.tag){case 1:We(e.type)&&si();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Cn(),Ee(Be),Ee(Oe),ea(),t=e.flags,(t&64)!==0)throw Error(o(285));return e.flags=t&-4097|64,e;case 5:return Zs(e),null;case 13:return Ee(Ce),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return Ee(Ce),null;case 4:return Cn(),null;case 10:return qs(e),null;case 23:case 24:return La(),null;default:return null}}function pa(e,t){try{var n="",r=t;do n+=xd(r),r=r.return;while(r);var a=n}catch(u){a=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:a}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hp=typeof WeakMap=="function"?WeakMap:Map;function Oc(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ci||(Ci=!0,Sa=r),fa(e,t)},n}function Mc(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return fa(e,t),r(a)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this),fa(e,t));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}var $p=typeof WeakSet=="function"?WeakSet:Set;function Dc(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Ft(e,n)}else t.current=null}function Up(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:it(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Ds(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(o(163))}function Bp(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var a=e;r=a.next,a=a.tag,(a&4)!==0&&(a&1)!==0&&(Xc(n,e),Xp(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:it(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Kl(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Kl(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&_l(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Qo(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(o(163))}function zc(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var a=n.memoizedProps.style;a=a!=null&&a.hasOwnProperty("display")?a.display:null,r.style.display=Ao("display",a)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Fc(e,t){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Gs,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,a=r.destroy;if(r=r.tag,a!==void 0)if((r&4)!==0)Xc(t,n);else{r=t;try{a()}catch(u){Ft(r,u)}}n=n.next}while(n!==e)}break;case 1:if(Dc(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(u){Ft(t,u)}break;case 5:Dc(t);break;case 4:Uc(e,t)}}function Gc(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Hc(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:{for(var t=e.return;t!==null;){if(Hc(t))break e;t=t.return}throw Error(o(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(o(161))}n.flags&16&&(zn(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Hc(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?ha(e,n,t):ma(e,n,t)}function ha(e,t,n){var r=e.tag,a=r===5||r===6;if(a)e=a?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ti));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ma(e,t,n){var r=e.tag,a=r===5||r===6;if(a)e=a?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}function Uc(e,t){for(var n=t,r=!1,a,u;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(o(160));switch(a=r.stateNode,r.tag){case 5:u=!1;break e;case 3:a=a.containerInfo,u=!0;break e;case 4:a=a.containerInfo,u=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var d=e,m=n,y=m;;)if(Fc(d,y),y.child!==null&&y.tag!==4)y.child.return=y,y=y.child;else{if(y===m)break e;for(;y.sibling===null;){if(y.return===null||y.return===m)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}u?(d=a,m=n.stateNode,d.nodeType===8?d.parentNode.removeChild(m):d.removeChild(m)):a.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){a=n.stateNode.containerInfo,u=!0,n.child.return=n,n=n.child;continue}}else if(Fc(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function ga(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var a=e!==null?e.memoizedProps:r;e=t.type;var u=t.updateQueue;if(t.updateQueue=null,u!==null){for(n[ri]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Po(n,r),rs(e,a),t=rs(e,r),a=0;a<u.length;a+=2){var d=u[a],m=u[a+1];d==="style"?_o(n,m):d==="dangerouslySetInnerHTML"?Io(n,m):d==="children"?zn(n,m):ne(n,d,m,t)}switch(e){case"input":Qi(n,r);break;case"textarea":jo(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,u=r.value,u!=null?cn(n,!!r.multiple,u,!1):e!==!!r.multiple&&(r.defaultValue!=null?cn(n,!!r.multiple,r.defaultValue,!0):cn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(o(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Qo(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(wa=Me(),zc(t.child,!0)),Bc(t);return;case 19:Bc(t);return;case 17:return;case 23:case 24:zc(t,t.memoizedState!==null);return}throw Error(o(163))}function Bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $p),t.forEach(function(r){var a=tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Wp(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Vp=Math.ceil,Ei=N.ReactCurrentDispatcher,va=N.ReactCurrentOwner,se=0,Ge=null,Re=null,ze=0,en=0,ya=jt(0),Ae=0,Pi=null,jn=0,yr=0,Rn=0,xa=0,ka=null,wa=0,ba=1/0;function Nn(){ba=Me()+500}var Y=null,Ci=!1,Sa=null,ft=null,Ot=!1,xr=null,kr=90,Ta=[],Ea=[],kt=null,wr=0,Pa=null,Li=-1,wt=0,ji=0,br=null,Ri=!1;function Qe(){return(se&48)!==0?Me():Li!==-1?Li:Li=Me()}function Mt(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return Tn()===99?1:2;if(wt===0&&(wt=jn),Ap.transition!==0){ji!==0&&(ji=ka!==null?ka.pendingLanes:0),e=wt;var t=4186112&~ji;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=Tn(),(se&4)!==0&&e===98?e=Vr(12,wt):(e=Od(e),e=Vr(e,wt)),e}function Dt(e,t,n){if(50<wr)throw wr=0,Pa=null,Error(o(185));if(e=Ni(e,t),e===null)return null;qr(e,t,n),e===Ge&&(Rn|=t,Ae===4&&In(e,ze));var r=Tn();t===1?(se&8)!==0&&(se&48)===0?Ca(e):(nt(e,n),se===0&&(Nn(),ct())):((se&4)===0||r!==98&&r!==99||(kt===null?kt=new Set([e]):kt.add(e)),nt(e,n)),ka=e}function Ni(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function nt(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,a=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var m=31-Pt(d),y=1<<m,P=u[m];if(P===-1){if((y&r)===0||(y&a)!==0){P=t,fn(y);var B=Se;u[m]=10<=B?P+250:6<=B?P+5e3:-1}}else P<=t&&(e.expiredLanes|=y);d&=~y}if(r=Yn(e,e===Ge?ze:0),t=Se,r===0)n!==null&&(n!==Bs&&$s(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==Bs&&$s(n)}t===15?(n=Ca.bind(null,e),vt===null?(vt=[n],li=Hs(oi,Jl)):vt.push(n),n=Bs):t===14?n=sr(99,Ca.bind(null,e)):(n=Md(t),n=sr(n,Wc.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Wc(e){if(Li=-1,ji=wt=0,(se&48)!==0)throw Error(o(327));var t=e.callbackNode;if(zt()&&e.callbackNode!==t)return null;var n=Yn(e,e===Ge?ze:0);if(n===0)return null;var r=n,a=se;se|=16;var u=Jc();(Ge!==e||ze!==r)&&(Nn(),An(e,r));do try{Jp();break}catch(m){Yc(e,m)}while(!0);if(Vs(),Ei.current=u,se=a,Re!==null?r=0:(Ge=null,ze=0,r=Ae),(jn&Rn)!==0)An(e,0);else if(r!==0){if(r===2&&(se|=64,e.hydrate&&(e.hydrate=!1,Ds(e.containerInfo)),n=rl(e),n!==0&&(r=Sr(e,n))),r===1)throw t=Pi,An(e,0),In(e,n),nt(e,Me()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(o(345));case 2:tn(e);break;case 3:if(In(e,n),(n&62914560)===n&&(r=wa+500-Me(),10<r)){if(Yn(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Qe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ol(tn.bind(null,e),r);break}tn(e);break;case 4:if(In(e,n),(n&4186112)===n)break;for(r=e.eventTimes,a=-1;0<n;){var d=31-Pt(n);u=1<<d,d=r[d],d>a&&(a=d),n&=~u}if(n=a,n=Me()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Vp(n/1960))-n,10<n){e.timeoutHandle=Ol(tn.bind(null,e),n);break}tn(e);break;case 5:tn(e);break;default:throw Error(o(329))}}return nt(e,Me()),e.callbackNode===t?Wc.bind(null,e):null}function In(e,t){for(t&=~xa,t&=~Rn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function Ca(e){if((se&48)!==0)throw Error(o(327));if(zt(),e===Ge&&(e.expiredLanes&ze)!==0){var t=ze,n=Sr(e,t);(jn&Rn)!==0&&(t=Yn(e,t),n=Sr(e,t))}else t=Yn(e,0),n=Sr(e,t);if(e.tag!==0&&n===2&&(se|=64,e.hydrate&&(e.hydrate=!1,Ds(e.containerInfo)),t=rl(e),t!==0&&(n=Sr(e,t))),n===1)throw n=Pi,An(e,0),In(e,t),nt(e,Me()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e),nt(e,Me()),null}function qp(){if(kt!==null){var e=kt;kt=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,nt(t,Me())})}ct()}function Vc(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Nn(),ct())}}function qc(e,t){var n=se;se&=-2,se|=8;try{return e(t)}finally{se=n,se===0&&(Nn(),ct())}}function Ii(e,t){Pe(ya,en),en|=t,jn|=t}function La(){en=ya.current,Ee(ya)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cp(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&si();break;case 3:Cn(),Ee(Be),Ee(Oe),ea();break;case 5:Zs(r);break;case 4:Cn();break;case 13:Ee(Ce);break;case 19:Ee(Ce);break;case 10:qs(r);break;case 23:case 24:La()}n=n.return}Ge=e,Re=Gt(e.current,null),ze=en=jn=t,Ae=0,Pi=null,xa=Rn=yr=0}function Yc(e,t){do{var n=Re;try{if(Vs(),dr.current=Si,xi){for(var r=je.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}xi=!1}if(pr=0,Ie=De=je=null,fr=!1,va.current=null,n===null||n.return===null){Ae=1,Pi=t,Re=null;break}e:{var u=e,d=n.return,m=n,y=t;if(t=ze,m.flags|=2048,m.firstEffect=m.lastEffect=null,y!==null&&typeof y=="object"&&typeof y.then=="function"){var P=y;if((m.mode&2)===0){var B=m.alternate;B?(m.updateQueue=B.updateQueue,m.memoizedState=B.memoizedState,m.lanes=B.lanes):(m.updateQueue=null,m.memoizedState=null)}var le=(Ce.current&1)!==0,M=d;do{var K;if(K=M.tag===13){var ae=M.memoizedState;if(ae!==null)K=ae.dehydrated!==null;else{var re=M.memoizedProps;K=re.fallback===void 0?!1:re.unstable_avoidThisFallback!==!0?!0:!le}}if(K){var S=M.updateQueue;if(S===null){var x=new Set;x.add(P),M.updateQueue=x}else S.add(P);if((M.mode&2)===0){if(M.flags|=64,m.flags|=16384,m.flags&=-2981,m.tag===1)if(m.alternate===null)m.tag=17;else{var b=It(-1,1);b.tag=2,At(m,b)}m.lanes|=1;break e}y=void 0,m=t;var j=u.pingCache;if(j===null?(j=u.pingCache=new Hp,y=new Set,j.set(P,y)):(y=j.get(P),y===void 0&&(y=new Set,j.set(P,y))),!y.has(m)){y.add(m);var I=ef.bind(null,u,P,m);P.then(I,I)}M.flags|=4096,M.lanes=t;break e}M=M.return}while(M!==null);y=Error((ln(m.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ae!==5&&(Ae=2),y=pa(y,m),M=d;do{switch(M.tag){case 3:u=y,M.flags|=4096,t&=-t,M.lanes|=t;var de=Oc(M,u,t);Xl(M,de);break e;case 1:u=y;var Q=M.type,pe=M.stateNode;if((M.flags&64)===0&&(typeof Q.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(ft===null||!ft.has(pe)))){M.flags|=4096,t&=-t,M.lanes|=t;var me=Mc(M,u,t);Xl(M,me);break e}}M=M.return}while(M!==null)}Zc(n)}catch(fe){t=fe,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Jc(){var e=Ei.current;return Ei.current=Si,e===null?Si:e}function Sr(e,t){var n=se;se|=16;var r=Jc();Ge===e&&ze===t||An(e,t);do try{Yp();break}catch(a){Yc(e,a)}while(!0);if(Vs(),se=n,Ei.current=r,Re!==null)throw Error(o(261));return Ge=null,ze=0,Ae}function Yp(){for(;Re!==null;)Qc(Re)}function Jp(){for(;Re!==null&&!Rp();)Qc(Re)}function Qc(e){var t=eu(e.alternate,e,en);e.memoizedProps=e.pendingProps,t===null?Zc(e):Re=t,va.current=null}function Zc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=Fp(n,t,en),n!==null){Re=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(en&1073741824)!==0||(n.mode&4)===0){for(var r=0,a=n.child;a!==null;)r|=a.lanes|a.childLanes,a=a.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Gp(t),n!==null){n.flags&=2047,Re=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ae===0&&(Ae=5)}function tn(e){var t=Tn();return Qt(99,Qp.bind(null,e,t)),null}function Qp(e,t){do zt();while(xr!==null);if((se&48)!==0)throw Error(o(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null;var r=n.lanes|n.childLanes,a=r,u=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;for(var d=e.eventTimes,m=e.expirationTimes;0<u;){var y=31-Pt(u),P=1<<y;a[y]=0,d[y]=-1,m[y]=-1,u&=~P}if(kt!==null&&(r&24)===0&&kt.has(e)&&kt.delete(e),e===Ge&&(Re=Ge=null,ze=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(a=se,se|=32,va.current=null,_s=Yr,d=Sl(),Rs(d)){if("selectionStart"in d)m={start:d.selectionStart,end:d.selectionEnd};else e:if(m=(m=d.ownerDocument)&&m.defaultView||window,(P=m.getSelection&&m.getSelection())&&P.rangeCount!==0){m=P.anchorNode,u=P.anchorOffset,y=P.focusNode,P=P.focusOffset;try{m.nodeType,y.nodeType}catch{m=null;break e}var B=0,le=-1,M=-1,K=0,ae=0,re=d,S=null;t:for(;;){for(var x;re!==m||u!==0&&re.nodeType!==3||(le=B+u),re!==y||P!==0&&re.nodeType!==3||(M=B+P),re.nodeType===3&&(B+=re.nodeValue.length),(x=re.firstChild)!==null;)S=re,re=x;for(;;){if(re===d)break t;if(S===m&&++K===u&&(le=B),S===y&&++ae===P&&(M=B),(x=re.nextSibling)!==null)break;re=S,S=re.parentNode}re=x}m=le===-1||M===-1?null:{start:le,end:M}}else m=null;m=m||{start:0,end:0}}else m=null;Os={focusedElem:d,selectionRange:m},Yr=!1,br=null,Ri=!1,Y=r;do try{Zp()}catch(fe){if(Y===null)throw Error(o(330));Ft(Y,fe),Y=Y.nextEffect}while(Y!==null);br=null,Y=r;do try{for(d=e;Y!==null;){var b=Y.flags;if(b&16&&zn(Y.stateNode,""),b&128){var j=Y.alternate;if(j!==null){var I=j.ref;I!==null&&(typeof I=="function"?I(null):I.current=null)}}switch(b&1038){case 2:$c(Y),Y.flags&=-3;break;case 6:$c(Y),Y.flags&=-3,ga(Y.alternate,Y);break;case 1024:Y.flags&=-1025;break;case 1028:Y.flags&=-1025,ga(Y.alternate,Y);break;case 4:ga(Y.alternate,Y);break;case 8:m=Y,Uc(d,m);var de=m.alternate;Gc(m),de!==null&&Gc(de)}Y=Y.nextEffect}}catch(fe){if(Y===null)throw Error(o(330));Ft(Y,fe),Y=Y.nextEffect}while(Y!==null);if(I=Os,j=Sl(),b=I.focusedElem,d=I.selectionRange,j!==b&&b&&b.ownerDocument&&bl(b.ownerDocument.documentElement,b)){for(d!==null&&Rs(b)&&(j=d.start,I=d.end,I===void 0&&(I=j),"selectionStart"in b?(b.selectionStart=j,b.selectionEnd=Math.min(I,b.value.length)):(I=(j=b.ownerDocument||document)&&j.defaultView||window,I.getSelection&&(I=I.getSelection(),m=b.textContent.length,de=Math.min(d.start,m),d=d.end===void 0?de:Math.min(d.end,m),!I.extend&&de>d&&(m=d,d=de,de=m),m=wl(b,de),u=wl(b,d),m&&u&&(I.rangeCount!==1||I.anchorNode!==m.node||I.anchorOffset!==m.offset||I.focusNode!==u.node||I.focusOffset!==u.offset)&&(j=j.createRange(),j.setStart(m.node,m.offset),I.removeAllRanges(),de>d?(I.addRange(j),I.extend(u.node,u.offset)):(j.setEnd(u.node,u.offset),I.addRange(j)))))),j=[],I=b;I=I.parentNode;)I.nodeType===1&&j.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<j.length;b++)I=j[b],I.element.scrollLeft=I.left,I.element.scrollTop=I.top}Yr=!!_s,Os=_s=null,e.current=n,Y=r;do try{for(b=e;Y!==null;){var Q=Y.flags;if(Q&36&&Bp(b,Y.alternate,Y),Q&128){j=void 0;var pe=Y.ref;if(pe!==null){var me=Y.stateNode;Y.tag,j=me,typeof pe=="function"?pe(j):pe.current=j}}Y=Y.nextEffect}}catch(fe){if(Y===null)throw Error(o(330));Ft(Y,fe),Y=Y.nextEffect}while(Y!==null);Y=null,Ip(),se=a}else e.current=n;if(Ot)Ot=!1,xr=e,kr=t;else for(Y=r;Y!==null;)t=Y.nextEffect,Y.nextEffect=null,Y.flags&8&&(Q=Y,Q.sibling=null,Q.stateNode=null),Y=t;if(r=e.pendingLanes,r===0&&(ft=null),r===1?e===Pa?wr++:(wr=0,Pa=e):wr=0,n=n.stateNode,Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Gs,n,void 0,(n.current.flags&64)===64)}catch{}if(nt(e,Me()),Ci)throw Ci=!1,e=Sa,Sa=null,e;return(se&8)!==0||ct(),null}function Zp(){for(;Y!==null;){var e=Y.alternate;Ri||br===null||((Y.flags&8)!==0?Uo(Y,br)&&(Ri=!0):Y.tag===13&&Wp(e,Y)&&Uo(Y,br)&&(Ri=!0));var t=Y.flags;(t&256)!==0&&Up(e,Y),(t&512)===0||Ot||(Ot=!0,sr(97,function(){return zt(),null})),Y=Y.nextEffect}}function zt(){if(kr!==90){var e=97<kr?97:kr;return kr=90,Qt(e,Kp)}return!1}function Xp(e,t){Ta.push(t,e),Ot||(Ot=!0,sr(97,function(){return zt(),null}))}function Xc(e,t){Ea.push(t,e),Ot||(Ot=!0,sr(97,function(){return zt(),null}))}function Kp(){if(xr===null)return!1;var e=xr;if(xr=null,(se&48)!==0)throw Error(o(331));var t=se;se|=32;var n=Ea;Ea=[];for(var r=0;r<n.length;r+=2){var a=n[r],u=n[r+1],d=a.destroy;if(a.destroy=void 0,typeof d=="function")try{d()}catch(y){if(u===null)throw Error(o(330));Ft(u,y)}}for(n=Ta,Ta=[],r=0;r<n.length;r+=2){a=n[r],u=n[r+1];try{var m=a.create;a.destroy=m()}catch(y){if(u===null)throw Error(o(330));Ft(u,y)}}for(m=e.current.firstEffect;m!==null;)e=m.nextEffect,m.nextEffect=null,m.flags&8&&(m.sibling=null,m.stateNode=null),m=e;return se=t,ct(),!0}function Kc(e,t,n){t=pa(n,t),t=Oc(e,t,1),At(e,t),t=Qe(),e=Ni(e,1),e!==null&&(qr(e,1,t),nt(e,t))}function Ft(e,t){if(e.tag===3)Kc(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Kc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=pa(t,e);var a=Mc(n,e,1);if(At(n,a),a=Qe(),n=Ni(n,1),n!==null)qr(n,1,a),nt(n,a);else if(typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function ef(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(ze&n)===n&&(Ae===4||Ae===3&&(ze&62914560)===ze&&500>Me()-wa?An(e,0):xa|=n),nt(e,t)}function tf(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=Tn()===99?1:2:(wt===0&&(wt=jn),t=hn(62914560&~wt),t===0&&(t=4194304))),n=Qe(),e=Ni(e,t),e!==null&&(qr(e,t,n),nt(e,n))}var eu;eu=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)st=!0;else if((n&r)!==0)st=(e.flags&16384)!==0;else{switch(st=!1,t.tag){case 3:Ec(t),Ks();break;case 5:ac(t);break;case 1:We(t.type)&&ai(t);break;case 4:Qs(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var a=t.type._context;Pe(ci,a._currentValue),a._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?Pc(e,t,n):(Pe(Ce,Ce.current&1),t=xt(e,t,n),t!==null?t.sibling:null);Pe(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return Nc(e,t,n);t.flags|=64}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Pe(Ce,Ce.current),r)break;return null;case 23:case 24:return t.lanes=0,oa(e,t,n)}return xt(e,t,n)}else st=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=Sn(t,Oe.current),Pn(t,n),a=na(null,t,r,e,a,n),t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)){var u=!0;ai(t)}else u=!1;t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ys(t);var d=r.getDerivedStateFromProps;typeof d=="function"&&pi(t,r,d,e),a.updater=fi,t.stateNode=a,a._reactInternals=t,Js(t,r,e,n),t=ca(null,t,r,!0,u,n)}else t.tag=0,qe(null,t,a,n),t=t.child;return t;case 16:a=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,u=a._init,a=u(a._payload),t.type=a,u=t.tag=rf(a),e=it(a,e),u){case 0:t=la(null,t,a,e,n);break e;case 1:t=Tc(null,t,a,e,n);break e;case 11:t=kc(null,t,a,e,n);break e;case 14:t=wc(null,t,a,it(a.type,e),r,n);break e}throw Error(o(306,a,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),la(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),Tc(e,t,r,a,n);case 3:if(Ec(t),r=t.updateQueue,e===null||r===null)throw Error(o(282));if(r=t.pendingProps,a=t.memoizedState,a=a!==null?a.element:null,Zl(e,t),ar(t,r,null,n),r=t.memoizedState.element,r===a)Ks(),t=xt(e,t,n);else{if(a=t.stateNode,(u=a.hydrate)&&(_t=xn(t.stateNode.containerInfo.firstChild),yt=t,u=dt=!0),u){if(e=a.mutableSourceEagerHydrationData,e!=null)for(a=0;a<e.length;a+=2)u=e[a],u._workInProgressVersionPrimary=e[a+1],Ln.push(u);for(n=sc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else qe(e,t,r,n),Ks();t=t.child}return t;case 5:return ac(t),e===null&&Xs(t),r=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,d=a.children,Ms(r,a)?d=null:u!==null&&Ms(r,u)&&(t.flags|=16),Sc(e,t),qe(e,t,d,n),t.child;case 6:return e===null&&Xs(t),null;case 13:return Pc(e,t,n);case 4:return Qs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gi(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),kc(e,t,r,a,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,a=t.pendingProps,d=t.memoizedProps,u=a.value;var m=t.type._context;if(Pe(ci,m._currentValue),m._currentValue=u,d!==null)if(m=d.value,u=Ke(m,u)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(m,u):1073741823)|0,u===0){if(d.children===a.children&&!Be.current){t=xt(e,t,n);break e}}else for(m=t.child,m!==null&&(m.return=t);m!==null;){var y=m.dependencies;if(y!==null){d=m.child;for(var P=y.firstContext;P!==null;){if(P.context===r&&(P.observedBits&u)!==0){m.tag===1&&(P=It(-1,n&-n),P.tag=2,At(m,P)),m.lanes|=n,P=m.alternate,P!==null&&(P.lanes|=n),Ql(m.return,n),y.lanes|=n;break}P=P.next}}else d=m.tag===10&&m.type===t.type?null:m.child;if(d!==null)d.return=m;else for(d=m;d!==null;){if(d===t){d=null;break}if(m=d.sibling,m!==null){m.return=d.return,d=m;break}d=d.return}m=d}qe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,u=t.pendingProps,r=u.children,Pn(t,n),a=et(a,u.unstable_observedBits),r=r(a),t.flags|=1,qe(e,t,r,n),t.child;case 14:return a=t.type,u=it(a,t.pendingProps),u=it(a.type,u),wc(e,t,a,u,r,n);case 15:return bc(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,We(r)?(e=!0,ai(t)):e=!1,Pn(t,n),nc(t,r,a),Js(t,r,a,n),ca(null,t,r,!0,e,n);case 19:return Nc(e,t,n);case 23:return oa(e,t,n);case 24:return oa(e,t,n)}throw Error(o(156,t.tag))};function nf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new nf(e,t,n,r)}function ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rf(e){if(typeof e=="function")return ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===Le)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ai(e,t,n,r,a,u){var d=2;if(r=e,typeof e=="function")ja(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case W:return _n(n.children,a,u,t);case H:d=8,a|=16;break;case ce:d=8,a|=1;break;case te:return e=rt(12,n,t,a|8),e.elementType=te,e.type=te,e.lanes=u,e;case he:return e=rt(13,n,t,a),e.type=he,e.elementType=he,e.lanes=u,e;case oe:return e=rt(19,n,t,a),e.elementType=oe,e.lanes=u,e;case E:return Ra(n,a,u,t);case R:return e=rt(24,n,t,a),e.elementType=R,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:d=10;break e;case ee:d=9;break e;case ie:d=11;break e;case Le:d=14;break e;case T:d=16,r=null;break e;case O:d=22;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=rt(d,n,t,a),t.elementType=e,t.type=r,t.lanes=u,t}function _n(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ra(e,t,n,r){return e=rt(23,e,r,t),e.elementType=E,e.lanes=n,e}function Na(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Ia(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sf(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.mutableSourceEagerHydrationData=null}function af(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _i(e,t,n,r){var a=t.current,u=Qe(),d=Mt(a);e:if(n){n=n._reactInternals;t:{if(Vt(n)!==n||n.tag!==1)throw Error(o(170));var m=n;do{switch(m.tag){case 3:m=m.stateNode.context;break t;case 1:if(We(m.type)){m=m.stateNode.__reactInternalMemoizedMergedChildContext;break t}}m=m.return}while(m!==null);throw Error(o(171))}if(n.tag===1){var y=n.type;if(We(y)){n=Gl(n,y,m);break e}}n=m}else n=Rt;return t.context===null?t.context=n:t.pendingContext=n,t=It(u,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),At(a,t),Dt(a,d,u),d}function Aa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _a(e,t){tu(e,t),(e=e.alternate)&&tu(e,t)}function of(){return null}function Oa(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new sf(e,t,n!=null&&n.hydrate===!0),t=rt(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Ys(t),e[kn]=n.current,jl(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var a=t._getVersion;a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a)}this._internalRoot=n}Oa.prototype.render=function(e){_i(e,this._internalRoot,null,null)},Oa.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;_i(null,e,null,function(){t[kn]=null})};function Tr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lf(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Oa(e,0,t?{hydrate:!0}:void 0)}function Oi(e,t,n,r,a){var u=n._reactRootContainer;if(u){var d=u._internalRoot;if(typeof a=="function"){var m=a;a=function(){var P=Aa(d);m.call(P)}}_i(t,d,e,a)}else{if(u=n._reactRootContainer=lf(n,r),d=u._internalRoot,typeof a=="function"){var y=a;a=function(){var P=Aa(d);y.call(P)}}qc(function(){_i(t,d,e,a)})}return Aa(d)}Bo=function(e){if(e.tag===13){var t=Qe();Dt(e,4,t),_a(e,4)}},ps=function(e){if(e.tag===13){var t=Qe();Dt(e,67108864,t),_a(e,67108864)}},Wo=function(e){if(e.tag===13){var t=Qe(),n=Mt(e);Dt(e,n,t),_a(e,n)}},Vo=function(e,t){return t()},ss=function(e,t,n){switch(t){case"input":if(Qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ii(r);if(!a)throw Error(o(90));To(r),Qi(r,a)}}}break;case"textarea":jo(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}},as=Vc,zo=function(e,t,n,r,a){var u=se;se|=4;try{return Qt(98,e.bind(null,t,n,r,a))}finally{se=u,se===0&&(Nn(),ct())}},os=function(){(se&49)===0&&(qp(),zt())},Fo=function(e,t){var n=se;se|=2;try{return e(t)}finally{se=n,se===0&&(Nn(),ct())}};function nu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tr(t))throw Error(o(200));return af(e,t,null,n)}var cf={Events:[ir,wn,ii,Mo,Do,zt,{current:!1}]},Er={findFiberByHostInstance:qt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},uf={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$o(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{Gs=Mi.inject(uf),Jt=Mi}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cf,Ze.createPortal=nu,Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):Error(o(268,Object.keys(e)));return e=$o(t),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e,t){var n=se;if((n&48)!==0)return e(t);se|=1;try{if(e)return Qt(99,e.bind(null,t))}finally{se=n,ct()}},Ze.hydrate=function(e,t,n){if(!Tr(t))throw Error(o(200));return Oi(null,e,t,!0,n)},Ze.render=function(e,t,n){if(!Tr(t))throw Error(o(200));return Oi(null,e,t,!1,n)},Ze.unmountComponentAtNode=function(e){if(!Tr(e))throw Error(o(40));return e._reactRootContainer?(qc(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1},Ze.unstable_batchedUpdates=Vc,Ze.unstable_createPortal=function(e,t){return nu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Tr(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Oi(e,t,n,!1,r)},Ze.version="17.0.2",Ze}var du;function yf(){if(du)return Fa.exports;du=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Fa.exports=vf(),Fa.exports}var xf=yf();const kf=Or(xf);function eo(i,s){return eo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,o){return l.__proto__=o,l},eo(i,s)}function gt(i,s){i.prototype=Object.create(s.prototype),i.prototype.constructor=i,eo(i,s)}var $a={exports:{}},Ua,pu;function wf(){if(pu)return Ua;pu=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ua=i,Ua}var Ba,fu;function bf(){if(fu)return Ba;fu=1;var i=wf();function s(){}function l(){}return l.resetWarningCache=s,Ba=function(){function o(f,k,g,w,v,C){if(C!==i){var L=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw L.name="Invariant Violation",L}}o.isRequired=o;function c(){return o}var h={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:c,element:o,elementType:o,instanceOf:c,node:o,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:l,resetWarningCache:s};return h.PropTypes=h,h},Ba}var hu;function Sf(){return hu||(hu=1,$a.exports=bf()()),$a.exports}var Tf=Sf();const mu=Or(Tf);function _e(){return _e=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var o in l)({}).hasOwnProperty.call(l,o)&&(i[o]=l[o])}return i},_e.apply(null,arguments)}function Di(i){return i.charAt(0)==="/"}function Wa(i,s){for(var l=s,o=l+1,c=i.length;o<c;l+=1,o+=1)i[l]=i[o];i.pop()}function Ef(i,s){s===void 0&&(s="");var l=i&&i.split("/")||[],o=s&&s.split("/")||[],c=i&&Di(i),h=s&&Di(s),f=c||h;if(i&&Di(i)?o=l:l.length&&(o.pop(),o=o.concat(l)),!o.length)return"/";var k;if(o.length){var g=o[o.length-1];k=g==="."||g===".."||g===""}else k=!1;for(var w=0,v=o.length;v>=0;v--){var C=o[v];C==="."?Wa(o,v):C===".."?(Wa(o,v),w++):w&&(Wa(o,v),w--)}if(!f)for(;w--;w)o.unshift("..");f&&o[0]!==""&&(!o[0]||!Di(o[0]))&&o.unshift("");var L=o.join("/");return k&&L.substr(-1)!=="/"&&(L+="/"),L}function gu(i){return i.valueOf?i.valueOf():Object.prototype.valueOf.call(i)}function Fi(i,s){if(i===s)return!0;if(i==null||s==null)return!1;if(Array.isArray(i))return Array.isArray(s)&&i.length===s.length&&i.every(function(c,h){return Fi(c,s[h])});if(typeof i=="object"||typeof s=="object"){var l=gu(i),o=gu(s);return l!==i||o!==s?Fi(l,o):Object.keys(Object.assign({},i,s)).every(function(c){return Fi(i[c],s[c])})}return!1}var Pf="Invariant failed";function Bt(i,s){throw new Error(Pf)}function Ir(i){return i.charAt(0)==="/"?i:"/"+i}function vu(i){return i.charAt(0)==="/"?i.substr(1):i}function Cf(i,s){return i.toLowerCase().indexOf(s.toLowerCase())===0&&"/?#".indexOf(i.charAt(s.length))!==-1}function Vu(i,s){return Cf(i,s)?i.substr(s.length):i}function qu(i){return i.charAt(i.length-1)==="/"?i.slice(0,-1):i}function Lf(i){var s=i||"/",l="",o="",c=s.indexOf("#");c!==-1&&(o=s.substr(c),s=s.substr(0,c));var h=s.indexOf("?");return h!==-1&&(l=s.substr(h),s=s.substr(0,h)),{pathname:s,search:l==="?"?"":l,hash:o==="#"?"":o}}function Ye(i){var s=i.pathname,l=i.search,o=i.hash,c=s||"/";return l&&l!=="?"&&(c+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(c+=o.charAt(0)==="#"?o:"#"+o),c}function He(i,s,l,o){var c;typeof i=="string"?(c=Lf(i),c.state=s):(c=_e({},i),c.pathname===void 0&&(c.pathname=""),c.search?c.search.charAt(0)!=="?"&&(c.search="?"+c.search):c.search="",c.hash?c.hash.charAt(0)!=="#"&&(c.hash="#"+c.hash):c.hash="",s!==void 0&&c.state===void 0&&(c.state=s));try{c.pathname=decodeURI(c.pathname)}catch(h){throw h instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):h}return l&&(c.key=l),o?c.pathname?c.pathname.charAt(0)!=="/"&&(c.pathname=Ef(c.pathname,o.pathname)):c.pathname=o.pathname:c.pathname||(c.pathname="/"),c}function jf(i,s){return i.pathname===s.pathname&&i.search===s.search&&i.hash===s.hash&&i.key===s.key&&Fi(i.state,s.state)}function lo(){var i=null;function s(f){return i=f,function(){i===f&&(i=null)}}function l(f,k,g,w){if(i!=null){var v=typeof i=="function"?i(f,k):i;typeof v=="string"?typeof g=="function"?g(v,w):w(!0):w(v!==!1)}else w(!0)}var o=[];function c(f){var k=!0;function g(){k&&f.apply(void 0,arguments)}return o.push(g),function(){k=!1,o=o.filter(function(w){return w!==g})}}function h(){for(var f=arguments.length,k=new Array(f),g=0;g<f;g++)k[g]=arguments[g];o.forEach(function(w){return w.apply(void 0,k)})}return{setPrompt:s,confirmTransitionTo:l,appendListener:c,notifyListeners:h}}var Yu=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ju(i,s){s(window.confirm(i))}function Rf(){var i=window.navigator.userAgent;return(i.indexOf("Android 2.")!==-1||i.indexOf("Android 4.0")!==-1)&&i.indexOf("Mobile Safari")!==-1&&i.indexOf("Chrome")===-1&&i.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function Nf(){return window.navigator.userAgent.indexOf("Trident")===-1}function If(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Af(i){return i.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var yu="popstate",xu="hashchange";function ku(){try{return window.history.state||{}}catch{return{}}}function _f(i){i===void 0&&(i={}),Yu||Bt();var s=window.history,l=Rf(),o=!Nf(),c=i,h=c.forceRefresh,f=h===void 0?!1:h,k=c.getUserConfirmation,g=k===void 0?Ju:k,w=c.keyLength,v=w===void 0?6:w,C=i.basename?qu(Ir(i.basename)):"";function L(F){var H=F||{},E=H.key,R=H.state,A=window.location,J=A.pathname,X=A.search,ve=A.hash,be=J+X+ve;return C&&(be=Vu(be,C)),He(be,R,E)}function D(){return Math.random().toString(36).substr(2,v)}var z=lo();function V(F){_e(O,F),O.length=s.length,z.notifyListeners(O.location,O.action)}function Z(F){Af(F)||G(L(F.state))}function _(){G(L(ku()))}var $=!1;function G(F){if($)$=!1,V();else{var H="POP";z.confirmTransitionTo(F,H,g,function(E){E?V({action:H,location:F}):ne(F)})}}function ne(F){var H=O.location,E=U.indexOf(H.key);E===-1&&(E=0);var R=U.indexOf(F.key);R===-1&&(R=0);var A=E-R;A&&($=!0,te(A))}var N=L(ku()),U=[N.key];function q(F){return C+Ye(F)}function W(F,H){var E="PUSH",R=He(F,H,D(),O.location);z.confirmTransitionTo(R,E,g,function(A){if(A){var J=q(R),X=R.key,ve=R.state;if(l)if(s.pushState({key:X,state:ve},null,J),f)window.location.href=J;else{var be=U.indexOf(O.location.key),Ne=U.slice(0,be+1);Ne.push(R.key),U=Ne,V({action:E,location:R})}else window.location.href=J}})}function ce(F,H){var E="REPLACE",R=He(F,H,D(),O.location);z.confirmTransitionTo(R,E,g,function(A){if(A){var J=q(R),X=R.key,ve=R.state;if(l)if(s.replaceState({key:X,state:ve},null,J),f)window.location.replace(J);else{var be=U.indexOf(O.location.key);be!==-1&&(U[be]=R.key),V({action:E,location:R})}else window.location.replace(J)}})}function te(F){s.go(F)}function ue(){te(-1)}function ee(){te(1)}var ie=0;function he(F){ie+=F,ie===1&&F===1?(window.addEventListener(yu,Z),o&&window.addEventListener(xu,_)):ie===0&&(window.removeEventListener(yu,Z),o&&window.removeEventListener(xu,_))}var oe=!1;function Le(F){F===void 0&&(F=!1);var H=z.setPrompt(F);return oe||(he(1),oe=!0),function(){return oe&&(oe=!1,he(-1)),H()}}function T(F){var H=z.appendListener(F);return he(1),function(){he(-1),H()}}var O={length:s.length,action:"POP",location:N,createHref:q,push:W,replace:ce,go:te,goBack:ue,goForward:ee,block:Le,listen:T};return O}var wu="hashchange",Of={hashbang:{encodePath:function(s){return s.charAt(0)==="!"?s:"!/"+vu(s)},decodePath:function(s){return s.charAt(0)==="!"?s.substr(1):s}},noslash:{encodePath:vu,decodePath:Ir},slash:{encodePath:Ir,decodePath:Ir}};function Qu(i){var s=i.indexOf("#");return s===-1?i:i.slice(0,s)}function Pr(){var i=window.location.href,s=i.indexOf("#");return s===-1?"":i.substring(s+1)}function Mf(i){window.location.hash=i}function Va(i){window.location.replace(Qu(window.location.href)+"#"+i)}function Df(i){i===void 0&&(i={}),Yu||Bt();var s=window.history;If();var l=i,o=l.getUserConfirmation,c=o===void 0?Ju:o,h=l.hashType,f=h===void 0?"slash":h,k=i.basename?qu(Ir(i.basename)):"",g=Of[f],w=g.encodePath,v=g.decodePath;function C(){var H=v(Pr());return k&&(H=Vu(H,k)),He(H)}var L=lo();function D(H){_e(F,H),F.length=s.length,L.notifyListeners(F.location,F.action)}var z=!1,V=null;function Z(H,E){return H.pathname===E.pathname&&H.search===E.search&&H.hash===E.hash}function _(){var H=Pr(),E=w(H);if(H!==E)Va(E);else{var R=C(),A=F.location;if(!z&&Z(A,R)||V===Ye(R))return;V=null,$(R)}}function $(H){if(z)z=!1,D();else{var E="POP";L.confirmTransitionTo(H,E,c,function(R){R?D({action:E,location:H}):G(H)})}}function G(H){var E=F.location,R=q.lastIndexOf(Ye(E));R===-1&&(R=0);var A=q.lastIndexOf(Ye(H));A===-1&&(A=0);var J=R-A;J&&(z=!0,ue(J))}var ne=Pr(),N=w(ne);ne!==N&&Va(N);var U=C(),q=[Ye(U)];function W(H){var E=document.querySelector("base"),R="";return E&&E.getAttribute("href")&&(R=Qu(window.location.href)),R+"#"+w(k+Ye(H))}function ce(H,E){var R="PUSH",A=He(H,void 0,void 0,F.location);L.confirmTransitionTo(A,R,c,function(J){if(J){var X=Ye(A),ve=w(k+X),be=Pr()!==ve;if(be){V=X,Mf(ve);var Ne=q.lastIndexOf(Ye(F.location)),Ue=q.slice(0,Ne+1);Ue.push(X),q=Ue,D({action:R,location:A})}else D()}})}function te(H,E){var R="REPLACE",A=He(H,void 0,void 0,F.location);L.confirmTransitionTo(A,R,c,function(J){if(J){var X=Ye(A),ve=w(k+X),be=Pr()!==ve;be&&(V=X,Va(ve));var Ne=q.indexOf(Ye(F.location));Ne!==-1&&(q[Ne]=X),D({action:R,location:A})}})}function ue(H){s.go(H)}function ee(){ue(-1)}function ie(){ue(1)}var he=0;function oe(H){he+=H,he===1&&H===1?window.addEventListener(wu,_):he===0&&window.removeEventListener(wu,_)}var Le=!1;function T(H){H===void 0&&(H=!1);var E=L.setPrompt(H);return Le||(oe(1),Le=!0),function(){return Le&&(Le=!1,oe(-1)),E()}}function O(H){var E=L.appendListener(H);return oe(1),function(){oe(-1),E()}}var F={length:s.length,action:"POP",location:U,createHref:W,push:ce,replace:te,go:ue,goBack:ee,goForward:ie,block:T,listen:O};return F}function bu(i,s,l){return Math.min(Math.max(i,s),l)}function zf(i){i===void 0&&(i={});var s=i,l=s.getUserConfirmation,o=s.initialEntries,c=o===void 0?["/"]:o,h=s.initialIndex,f=h===void 0?0:h,k=s.keyLength,g=k===void 0?6:k,w=lo();function v(W){_e(q,W),q.length=q.entries.length,w.notifyListeners(q.location,q.action)}function C(){return Math.random().toString(36).substr(2,g)}var L=bu(f,0,c.length-1),D=c.map(function(W){return typeof W=="string"?He(W,void 0,C()):He(W,void 0,W.key||C())}),z=Ye;function V(W,ce){var te="PUSH",ue=He(W,ce,C(),q.location);w.confirmTransitionTo(ue,te,l,function(ee){if(ee){var ie=q.index,he=ie+1,oe=q.entries.slice(0);oe.length>he?oe.splice(he,oe.length-he,ue):oe.push(ue),v({action:te,location:ue,index:he,entries:oe})}})}function Z(W,ce){var te="REPLACE",ue=He(W,ce,C(),q.location);w.confirmTransitionTo(ue,te,l,function(ee){ee&&(q.entries[q.index]=ue,v({action:te,location:ue}))})}function _(W){var ce=bu(q.index+W,0,q.entries.length-1),te="POP",ue=q.entries[ce];w.confirmTransitionTo(ue,te,l,function(ee){ee?v({action:te,location:ue,index:ce}):v()})}function $(){_(-1)}function G(){_(1)}function ne(W){var ce=q.index+W;return ce>=0&&ce<q.entries.length}function N(W){return W===void 0&&(W=!1),w.setPrompt(W)}function U(W){return w.appendListener(W)}var q={length:D.length,action:"POP",location:D[L],index:L,entries:D,createHref:z,push:V,replace:Z,go:_,goBack:$,goForward:G,canGo:ne,block:N,listen:U};return q}var nn={exports:{}},qa,Su;function Ff(){return Su||(Su=1,qa=Array.isArray||function(i){return Object.prototype.toString.call(i)=="[object Array]"}),qa}var Tu;function Gf(){if(Tu)return nn.exports;Tu=1;var i=Ff();nn.exports=Z,nn.exports.parse=l,nn.exports.compile=c,nn.exports.tokensToFunction=k,nn.exports.tokensToRegExp=V;var s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function l(_,$){for(var G=[],ne=0,N=0,U="",q=$&&$.delimiter||"/",W;(W=s.exec(_))!=null;){var ce=W[0],te=W[1],ue=W.index;if(U+=_.slice(N,ue),N=ue+ce.length,te){U+=te[1];continue}var ee=_[N],ie=W[2],he=W[3],oe=W[4],Le=W[5],T=W[6],O=W[7];U&&(G.push(U),U="");var F=ie!=null&&ee!=null&&ee!==ie,H=T==="+"||T==="*",E=T==="?"||T==="*",R=ie||q,A=oe||Le,J=ie||(typeof G[G.length-1]=="string"?G[G.length-1]:"");G.push({name:he||ne++,prefix:ie||"",delimiter:R,optional:E,repeat:H,partial:F,asterisk:!!O,pattern:A?w(A):O?".*":o(R,J)})}return N<_.length&&(U+=_.substr(N)),U&&G.push(U),G}function o(_,$){return!$||$.indexOf(_)>-1?"[^"+g(_)+"]+?":g($)+"|(?:(?!"+g($)+")[^"+g(_)+"])+?"}function c(_,$){return k(l(_,$),$)}function h(_){return encodeURI(_).replace(/[\/?#]/g,function($){return"%"+$.charCodeAt(0).toString(16).toUpperCase()})}function f(_){return encodeURI(_).replace(/[?#]/g,function($){return"%"+$.charCodeAt(0).toString(16).toUpperCase()})}function k(_,$){for(var G=new Array(_.length),ne=0;ne<_.length;ne++)typeof _[ne]=="object"&&(G[ne]=new RegExp("^(?:"+_[ne].pattern+")$",C($)));return function(N,U){for(var q="",W=N||{},ce=U||{},te=ce.pretty?h:encodeURIComponent,ue=0;ue<_.length;ue++){var ee=_[ue];if(typeof ee=="string"){q+=ee;continue}var ie=W[ee.name],he;if(ie==null)if(ee.optional){ee.partial&&(q+=ee.prefix);continue}else throw new TypeError('Expected "'+ee.name+'" to be defined');if(i(ie)){if(!ee.repeat)throw new TypeError('Expected "'+ee.name+'" to not repeat, but received `'+JSON.stringify(ie)+"`");if(ie.length===0){if(ee.optional)continue;throw new TypeError('Expected "'+ee.name+'" to not be empty')}for(var oe=0;oe<ie.length;oe++){if(he=te(ie[oe]),!G[ue].test(he))throw new TypeError('Expected all "'+ee.name+'" to match "'+ee.pattern+'", but received `'+JSON.stringify(he)+"`");q+=(oe===0?ee.prefix:ee.delimiter)+he}continue}if(he=ee.asterisk?f(ie):te(ie),!G[ue].test(he))throw new TypeError('Expected "'+ee.name+'" to match "'+ee.pattern+'", but received "'+he+'"');q+=ee.prefix+he}return q}}function g(_){return _.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function w(_){return _.replace(/([=!:$\/()])/g,"\\$1")}function v(_,$){return _.keys=$,_}function C(_){return _&&_.sensitive?"":"i"}function L(_,$){var G=_.source.match(/\((?!\?)/g);if(G)for(var ne=0;ne<G.length;ne++)$.push({name:ne,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return v(_,$)}function D(_,$,G){for(var ne=[],N=0;N<_.length;N++)ne.push(Z(_[N],$,G).source);var U=new RegExp("(?:"+ne.join("|")+")",C(G));return v(U,$)}function z(_,$,G){return V(l(_,G),$,G)}function V(_,$,G){i($)||(G=$||G,$=[]),G=G||{};for(var ne=G.strict,N=G.end!==!1,U="",q=0;q<_.length;q++){var W=_[q];if(typeof W=="string")U+=g(W);else{var ce=g(W.prefix),te="(?:"+W.pattern+")";$.push(W),W.repeat&&(te+="(?:"+ce+te+")*"),W.optional?W.partial?te=ce+"("+te+")?":te="(?:"+ce+"("+te+"))?":te=ce+"("+te+")",U+=te}}var ue=g(G.delimiter||"/"),ee=U.slice(-ue.length)===ue;return ne||(U=(ee?U.slice(0,-ue.length):U)+"(?:"+ue+"(?=$))?"),N?U+="$":U+=ne&&ee?"":"(?="+ue+"|$)",v(new RegExp("^"+U,C(G)),$)}function Z(_,$,G){return i($)||(G=$||G,$=[]),G=G||{},_ instanceof RegExp?L(_,$):i(_)?D(_,$,G):z(_,$,G)}return nn.exports}var Hf=Gf();const Zu=Or(Hf);var Ya={exports:{}},ke={};var Eu;function $f(){if(Eu)return ke;Eu=1;var i=typeof Symbol=="function"&&Symbol.for,s=i?Symbol.for("react.element"):60103,l=i?Symbol.for("react.portal"):60106,o=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,h=i?Symbol.for("react.profiler"):60114,f=i?Symbol.for("react.provider"):60109,k=i?Symbol.for("react.context"):60110,g=i?Symbol.for("react.async_mode"):60111,w=i?Symbol.for("react.concurrent_mode"):60111,v=i?Symbol.for("react.forward_ref"):60112,C=i?Symbol.for("react.suspense"):60113,L=i?Symbol.for("react.suspense_list"):60120,D=i?Symbol.for("react.memo"):60115,z=i?Symbol.for("react.lazy"):60116,V=i?Symbol.for("react.block"):60121,Z=i?Symbol.for("react.fundamental"):60117,_=i?Symbol.for("react.responder"):60118,$=i?Symbol.for("react.scope"):60119;function G(N){if(typeof N=="object"&&N!==null){var U=N.$$typeof;switch(U){case s:switch(N=N.type,N){case g:case w:case o:case h:case c:case C:return N;default:switch(N=N&&N.$$typeof,N){case k:case v:case z:case D:case f:return N;default:return U}}case l:return U}}}function ne(N){return G(N)===w}return ke.AsyncMode=g,ke.ConcurrentMode=w,ke.ContextConsumer=k,ke.ContextProvider=f,ke.Element=s,ke.ForwardRef=v,ke.Fragment=o,ke.Lazy=z,ke.Memo=D,ke.Portal=l,ke.Profiler=h,ke.StrictMode=c,ke.Suspense=C,ke.isAsyncMode=function(N){return ne(N)||G(N)===g},ke.isConcurrentMode=ne,ke.isContextConsumer=function(N){return G(N)===k},ke.isContextProvider=function(N){return G(N)===f},ke.isElement=function(N){return typeof N=="object"&&N!==null&&N.$$typeof===s},ke.isForwardRef=function(N){return G(N)===v},ke.isFragment=function(N){return G(N)===o},ke.isLazy=function(N){return G(N)===z},ke.isMemo=function(N){return G(N)===D},ke.isPortal=function(N){return G(N)===l},ke.isProfiler=function(N){return G(N)===h},ke.isStrictMode=function(N){return G(N)===c},ke.isSuspense=function(N){return G(N)===C},ke.isValidElementType=function(N){return typeof N=="string"||typeof N=="function"||N===o||N===w||N===h||N===c||N===C||N===L||typeof N=="object"&&N!==null&&(N.$$typeof===z||N.$$typeof===D||N.$$typeof===f||N.$$typeof===k||N.$$typeof===v||N.$$typeof===Z||N.$$typeof===_||N.$$typeof===$||N.$$typeof===V)},ke.typeOf=G,ke}var Pu;function Xu(){return Pu||(Pu=1,Ya.exports=$f()),Ya.exports}Xu();function Wi(i,s){if(i==null)return{};var l={};for(var o in i)if({}.hasOwnProperty.call(i,o)){if(s.indexOf(o)!==-1)continue;l[o]=i[o]}return l}var Ja,Cu;function Uf(){if(Cu)return Ja;Cu=1;var i=Xu(),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};h[i.ForwardRef]=o,h[i.Memo]=c;function f(z){return i.isMemo(z)?c:h[z.$$typeof]||s}var k=Object.defineProperty,g=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,L=Object.prototype;function D(z,V,Z){if(typeof V!="string"){if(L){var _=C(V);_&&_!==L&&D(z,_,Z)}var $=g(V);w&&($=$.concat(w(V)));for(var G=f(z),ne=f(V),N=0;N<$.length;++N){var U=$[N];if(!l[U]&&!(Z&&Z[U])&&!(ne&&ne[U])&&!(G&&G[U])){var q=v(V,U);try{k(z,U,q)}catch{}}}}return z}return Ja=D,Ja}Uf();var Qa=1073741823,Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function Bf(){var i="__global_unique_id__";return Lu[i]=(Lu[i]||0)+1}function Wf(i,s){return i===s?i!==0||1/i===1/s:i!==i&&s!==s}function Vf(i){var s=[];return{on:function(o){s.push(o)},off:function(o){s=s.filter(function(c){return c!==o})},get:function(){return i},set:function(o,c){i=o,s.forEach(function(h){return h(i,c)})}}}function qf(i){return Array.isArray(i)?i[0]:i}function Yf(i,s){var l,o,c="__create-react-context-"+Bf()+"__",h=(function(k){gt(g,k);function g(){for(var v,C=arguments.length,L=new Array(C),D=0;D<C;D++)L[D]=arguments[D];return v=k.call.apply(k,[this].concat(L))||this,v.emitter=Vf(v.props.value),v}var w=g.prototype;return w.getChildContext=function(){var C;return C={},C[c]=this.emitter,C},w.componentWillReceiveProps=function(C){if(this.props.value!==C.value){var L=this.props.value,D=C.value,z;Wf(L,D)?z=0:(z=typeof s=="function"?s(L,D):Qa,z|=0,z!==0&&this.emitter.set(C.value,z))}},w.render=function(){return this.props.children},g})(ge.Component);h.childContextTypes=(l={},l[c]=mu.object.isRequired,l);var f=(function(k){gt(g,k);function g(){for(var v,C=arguments.length,L=new Array(C),D=0;D<C;D++)L[D]=arguments[D];return v=k.call.apply(k,[this].concat(L))||this,v.observedBits=void 0,v.state={value:v.getValue()},v.onUpdate=function(z,V){var Z=v.observedBits|0;(Z&V)!==0&&v.setState({value:v.getValue()})},v}var w=g.prototype;return w.componentWillReceiveProps=function(C){var L=C.observedBits;this.observedBits=L??Qa},w.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var C=this.props.observedBits;this.observedBits=C??Qa},w.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},w.getValue=function(){return this.context[c]?this.context[c].get():i},w.render=function(){return qf(this.props.children)(this.state.value)},g})(ge.Component);return f.contextTypes=(o={},o[c]=mu.object,o),{Provider:h,Consumer:f}}var Jf=ge.createContext||Yf,Ku=function(s){var l=Jf();return l.displayName=s,l},ed=Ku("Router-History"),Ut=Ku("Router"),Vi=(function(i){gt(s,i),s.computeRootMatch=function(c){return{path:"/",url:"/",params:{},isExact:c==="/"}};function s(o){var c;return c=i.call(this,o)||this,c.state={location:o.history.location},c._isMounted=!1,c._pendingLocation=null,o.staticContext||(c.unlisten=o.history.listen(function(h){c._pendingLocation=h})),c}var l=s.prototype;return l.componentDidMount=function(){var c=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(h){c._isMounted&&c.setState({location:h})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},l.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},l.render=function(){return ge.createElement(Ut.Provider,{value:{history:this.props.history,location:this.state.location,match:s.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},ge.createElement(ed.Provider,{children:this.props.children||null,value:this.props.history}))},s})(ge.Component);ge.Component;var Qf=(function(i){gt(s,i);function s(){return i.apply(this,arguments)||this}var l=s.prototype;return l.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},l.componentDidUpdate=function(c){this.props.onUpdate&&this.props.onUpdate.call(this,this,c)},l.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},l.render=function(){return null},s})(ge.Component),Za={},Zf=1e4,ju=0;function Xf(i){if(Za[i])return Za[i];var s=Zu.compile(i);return ju<Zf&&(Za[i]=s,ju++),s}function Ru(i,s){return i===void 0&&(i="/"),s===void 0&&(s={}),i==="/"?i:Xf(i)(s,{pretty:!0})}function Ar(i){var s=i.computedMatch,l=i.to,o=i.push,c=o===void 0?!1:o;return ge.createElement(Ut.Consumer,null,function(h){h||Bt();var f=h.history,k=h.staticContext,g=c?f.push:f.replace,w=He(s?typeof l=="string"?Ru(l,s.params):_e({},l,{pathname:Ru(l.pathname,s.params)}):l);return k?(g(w),null):ge.createElement(Qf,{onMount:function(){g(w)},onUpdate:function(C,L){var D=He(L.to);jf(D,_e({},w,{key:D.key}))||g(w)},to:l})})}var Nu={},Kf=1e4,Iu=0;function eh(i,s){var l=""+s.end+s.strict+s.sensitive,o=Nu[l]||(Nu[l]={});if(o[i])return o[i];var c=[],h=Zu(i,c,s),f={regexp:h,keys:c};return Iu<Kf&&(o[i]=f,Iu++),f}function co(i,s){s===void 0&&(s={}),(typeof s=="string"||Array.isArray(s))&&(s={path:s});var l=s,o=l.path,c=l.exact,h=c===void 0?!1:c,f=l.strict,k=f===void 0?!1:f,g=l.sensitive,w=g===void 0?!1:g,v=[].concat(o);return v.reduce(function(C,L){if(!L&&L!=="")return null;if(C)return C;var D=eh(L,{end:h,strict:k,sensitive:w}),z=D.regexp,V=D.keys,Z=z.exec(i);if(!Z)return null;var _=Z[0],$=Z.slice(1),G=i===_;return h&&!G?null:{path:L,url:L==="/"&&_===""?"/":_,isExact:G,params:V.reduce(function(ne,N,U){return ne[N.name]=$[U],ne},{})}},null)}function th(i){return ge.Children.count(i)===0}var ht=(function(i){gt(s,i);function s(){return i.apply(this,arguments)||this}var l=s.prototype;return l.render=function(){var c=this;return ge.createElement(Ut.Consumer,null,function(h){h||Bt();var f=c.props.location||h.location,k=c.props.computedMatch?c.props.computedMatch:c.props.path?co(f.pathname,c.props):h.match,g=_e({},h,{location:f,match:k}),w=c.props,v=w.children,C=w.component,L=w.render;return Array.isArray(v)&&th(v)&&(v=null),ge.createElement(Ut.Provider,{value:g},g.match?v?typeof v=="function"?v(g):v:C?ge.createElement(C,g):L?L(g):null:typeof v=="function"?v(g):null)})},s})(ge.Component);function uo(i){return i.charAt(0)==="/"?i:"/"+i}function nh(i,s){return i?_e({},s,{pathname:uo(i)+s.pathname}):s}function rh(i,s){if(!i)return s;var l=uo(i);return s.pathname.indexOf(l)!==0?s:_e({},s,{pathname:s.pathname.substr(l.length)})}function Au(i){return typeof i=="string"?i:Ye(i)}function Xa(i){return function(){Bt()}}function _u(){}ge.Component;var ih=(function(i){gt(s,i);function s(){return i.apply(this,arguments)||this}var l=s.prototype;return l.render=function(){var c=this;return ge.createElement(Ut.Consumer,null,function(h){h||Bt();var f=c.props.location||h.location,k,g;return ge.Children.forEach(c.props.children,function(w){if(g==null&&ge.isValidElement(w)){k=w;var v=w.props.path||w.props.from;g=v?co(f.pathname,_e({},w.props,{path:v})):h.match}}),g?ge.cloneElement(k,{location:f,computedMatch:g}):null})},s})(ge.Component),td=ge.useContext;function sh(){return td(ed)}function ah(){return td(Ut).location}var oh=(function(i){gt(s,i);function s(){for(var o,c=arguments.length,h=new Array(c),f=0;f<c;f++)h[f]=arguments[f];return o=i.call.apply(i,[this].concat(h))||this,o.history=_f(o.props),o}var l=s.prototype;return l.render=function(){return ge.createElement(Vi,{history:this.history,children:this.props.children})},s})(ge.Component);ge.Component;var to=function(s,l){return typeof s=="function"?s(l):s},no=function(s,l){return typeof s=="string"?He(s,null,null,l):s},po=function(s){return s},Mn=ge.forwardRef;typeof Mn>"u"&&(Mn=po);function lh(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}var ch=Mn(function(i,s){var l=i.innerRef,o=i.navigate,c=i.onClick,h=Wi(i,["innerRef","navigate","onClick"]),f=h.target,k=_e({},h,{onClick:function(w){try{c&&c(w)}catch(v){throw w.preventDefault(),v}!w.defaultPrevented&&w.button===0&&(!f||f==="_self")&&!lh(w)&&(w.preventDefault(),o())}});return po!==Mn?k.ref=s||l:k.ref=l,ge.createElement("a",k)}),Fe=Mn(function(i,s){var l=i.component,o=l===void 0?ch:l,c=i.replace,h=i.to,f=i.innerRef,k=Wi(i,["component","replace","to","innerRef"]);return ge.createElement(Ut.Consumer,null,function(g){g||Bt();var w=g.history,v=no(to(h,g.location),g.location),C=v?w.createHref(v):"",L=_e({},k,{href:C,navigate:function(){var z=to(h,g.location),V=Ye(g.location)===Ye(no(z)),Z=c||V?w.replace:w.push;Z(z)}});return po!==Mn?L.ref=s||f:L.innerRef=f,ge.createElement(o,L)})}),nd=function(s){return s},Gi=ge.forwardRef;typeof Gi>"u"&&(Gi=nd);function uh(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return s.filter(function(o){return o}).join(" ")}var dh=Gi(function(i,s){var l=i["aria-current"],o=l===void 0?"page":l,c=i.activeClassName,h=c===void 0?"active":c,f=i.activeStyle,k=i.className,g=i.exact,w=i.isActive,v=i.location,C=i.sensitive,L=i.strict,D=i.style,z=i.to,V=i.innerRef,Z=Wi(i,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return ge.createElement(Ut.Consumer,null,function(_){_||Bt();var $=v||_.location,G=no(to(z,$),$),ne=G.pathname,N=ne&&ne.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),U=N?co($.pathname,{path:N,exact:g,sensitive:C,strict:L}):null,q=!!(w?w(U,$):U),W=typeof k=="function"?k(q):k,ce=typeof D=="function"?D(q):D;q&&(W=uh(W,h),ce=_e({},ce,f));var te=_e({"aria-current":q&&o||null,className:W,style:ce,to:G},Z);return nd!==Gi?te.ref=s||V:te.innerRef=V,ge.createElement(Fe,te)})});const ph=`---
title: "10 Coding Projects You Can Add to Your Resume"
date: "2026-04-06"
tags: [projects, resume, career, developers]
category: "Career Growth"
accent: "#ef7d2f"
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
`,fh=`---
title: "From Repo to Reader"
date: "April 2026"
tags: [react, markdown, content]
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
`,hh=`---
title: "JavaScript Interview Series Plan for Tech Content"
date: "2026-04-04"
tags: [javascript, interviews, content, career]
category: "Interview Content"
accent: "#7f88ff"
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
`,mh=`---
title: "Open Source Content Formats That Actually Get Attention"
date: "2026-04-05"
tags: [open-source, content, creators, tools]
category: "Creator Workflow"
accent: "#2dde98"
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
`,gh=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Content Prompterrr | rk.codex</title>
<meta name="description" content="A copy-ready prompt system for generating viral developer and AI Instagram carousels with Claude or ChatGPT.">
<meta name="keywords" content="ai, content, prompt engineering, instagram, carousel, claude, chatgpt, creators, developers">
<meta name="date" content="2026-04-06">
<meta name="category" content="Prompt System">
<meta name="featured" content="true">
<meta name="theme-color" content="#ff6b2c">
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
`,vh=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Claude Carousel Generator | rk.codex</title>
<meta name="description" content="A clean workflow for generating developer Instagram carousel ideas and layouts with Claude, from hook to slide sequence.">
<meta name="keywords" content="claude, carousel, ai content, developer content, instagram, prompt workflow">
<meta name="date" content="2026-04-06">
<meta name="category" content="Creator Workflow">
<meta name="theme-color" content="#1f6fff">
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
`,yh=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Google Gemma — Complete Guide | rk.codex</title>
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
`;function fo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var an=fo();function rd(i){an=i}var rn={exec:()=>null};function xe(i,s=""){let l=typeof i=="string"?i:i.source,o={replace:(c,h)=>{let f=typeof h=="string"?h:h.source;return f=f.replace($e.caret,"$1"),l=l.replace(c,f),o},getRegex:()=>new RegExp(l,s)};return o}var xh=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),$e={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}>`)},kh=/^(?:[ \t]*(?:\n|$))+/,wh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Mr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Sh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ho=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,id=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,sd=xe(id).replace(/bull/g,ho).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Th=xe(id).replace(/bull/g,ho).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),mo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Eh=/^[^\n]+/,go=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ph=xe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",go).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ch=xe(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ho).getRegex(),qi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Lh=xe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",vo).replace("tag",qi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ad=xe(mo).replace("hr",Mr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qi).getRegex(),jh=xe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ad).getRegex(),yo={blockquote:jh,code:wh,def:Ph,fences:bh,heading:Sh,hr:Mr,html:Lh,lheading:sd,list:Ch,newline:kh,paragraph:ad,table:rn,text:Eh},Ou=xe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Mr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qi).getRegex(),Rh={...yo,lheading:Th,table:Ou,paragraph:xe(mo).replace("hr",Mr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ou).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qi).getRegex()},Nh={...yo,html:xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:rn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:xe(mo).replace("hr",Mr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",sd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ih=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ah=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,od=/^( {2,}|\\)\n(?!\s*$)/,_h=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Dn=/[\p{P}\p{S}]/u,Yi=/[\s\p{P}\p{S}]/u,xo=/[^\s\p{P}\p{S}]/u,Oh=xe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Yi).getRegex(),ld=/(?!~)[\p{P}\p{S}]/u,Mh=/(?!~)[\s\p{P}\p{S}]/u,Dh=/(?:[^\s\p{P}\p{S}]|~)/u,zh=xe(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",xh?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),cd=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Fh=xe(cd,"u").replace(/punct/g,Dn).getRegex(),Gh=xe(cd,"u").replace(/punct/g,ld).getRegex(),ud="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Hh=xe(ud,"gu").replace(/notPunctSpace/g,xo).replace(/punctSpace/g,Yi).replace(/punct/g,Dn).getRegex(),$h=xe(ud,"gu").replace(/notPunctSpace/g,Dh).replace(/punctSpace/g,Mh).replace(/punct/g,ld).getRegex(),Uh=xe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,xo).replace(/punctSpace/g,Yi).replace(/punct/g,Dn).getRegex(),Bh=xe(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Dn).getRegex(),Wh="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Vh=xe(Wh,"gu").replace(/notPunctSpace/g,xo).replace(/punctSpace/g,Yi).replace(/punct/g,Dn).getRegex(),qh=xe(/\\(punct)/,"gu").replace(/punct/g,Dn).getRegex(),Yh=xe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Jh=xe(vo).replace("(?:-->|$)","-->").getRegex(),Qh=xe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Jh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Hi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Zh=xe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Hi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dd=xe(/^!?\[(label)\]\[(ref)\]/).replace("label",Hi).replace("ref",go).getRegex(),pd=xe(/^!?\[(ref)\](?:\[\])?/).replace("ref",go).getRegex(),Xh=xe("reflink|nolink(?!\\()","g").replace("reflink",dd).replace("nolink",pd).getRegex(),Mu=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ko={_backpedal:rn,anyPunctuation:qh,autolink:Yh,blockSkip:zh,br:od,code:Ah,del:rn,delLDelim:rn,delRDelim:rn,emStrongLDelim:Fh,emStrongRDelimAst:Hh,emStrongRDelimUnd:Uh,escape:Ih,link:Zh,nolink:pd,punctuation:Oh,reflink:dd,reflinkSearch:Xh,tag:Qh,text:_h,url:rn},Kh={...ko,link:xe(/^!?\[(label)\]\((.*?)\)/).replace("label",Hi).getRegex(),reflink:xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Hi).getRegex()},ro={...ko,emStrongRDelimAst:$h,emStrongLDelim:Gh,delLDelim:Bh,delRDelim:Vh,url:xe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Mu).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:xe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Mu).getRegex()},em={...ro,br:xe(od).replace("{2,}","*").getRegex(),text:xe(ro.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},zi={normal:yo,gfm:Rh,pedantic:Nh},Cr={normal:ko,gfm:ro,breaks:em,pedantic:Kh},tm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Du=i=>tm[i];function mt(i,s){if(s){if($e.escapeTest.test(i))return i.replace($e.escapeReplace,Du)}else if($e.escapeTestNoEncode.test(i))return i.replace($e.escapeReplaceNoEncode,Du);return i}function zu(i){try{i=encodeURI(i).replace($e.percentDecode,"%")}catch{return null}return i}function Fu(i,s){let l=i.replace($e.findPipe,(h,f,k)=>{let g=!1,w=f;for(;--w>=0&&k[w]==="\\";)g=!g;return g?"|":" |"}),o=l.split($e.splitPipe),c=0;if(o[0].trim()||o.shift(),o.length>0&&!o.at(-1)?.trim()&&o.pop(),s)if(o.length>s)o.splice(s);else for(;o.length<s;)o.push("");for(;c<o.length;c++)o[c]=o[c].trim().replace($e.slashPipe,"|");return o}function Lr(i,s,l){let o=i.length;if(o===0)return"";let c=0;for(;c<o&&i.charAt(o-c-1)===s;)c++;return i.slice(0,o-c)}function nm(i,s){if(i.indexOf(s[1])===-1)return-1;let l=0;for(let o=0;o<i.length;o++)if(i[o]==="\\")o++;else if(i[o]===s[0])l++;else if(i[o]===s[1]&&(l--,l<0))return o;return l>0?-2:-1}function rm(i,s=0){let l=s,o="";for(let c of i)if(c==="	"){let h=4-l%4;o+=" ".repeat(h),l+=h}else o+=c,l++;return o}function Gu(i,s,l,o,c){let h=s.href,f=s.title||null,k=i[1].replace(c.other.outputLinkReplace,"$1");o.state.inLink=!0;let g={type:i[0].charAt(0)==="!"?"image":"link",raw:l,href:h,title:f,text:k,tokens:o.inlineTokens(k)};return o.state.inLink=!1,g}function im(i,s,l){let o=i.match(l.other.indentCodeCompensation);if(o===null)return s;let c=o[1];return s.split(`
`).map(h=>{let f=h.match(l.other.beginningSpace);if(f===null)return h;let[k]=f;return k.length>=c.length?h.slice(c.length):h}).join(`
`)}var $i=class{options;rules;lexer;constructor(i){this.options=i||an}space(i){let s=this.rules.block.newline.exec(i);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(i){let s=this.rules.block.code.exec(i);if(s){let l=s[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?l:Lr(l,`
`)}}}fences(i){let s=this.rules.block.fences.exec(i);if(s){let l=s[0],o=im(l,s[3]||"",this.rules);return{type:"code",raw:l,lang:s[2]?s[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):s[2],text:o}}}heading(i){let s=this.rules.block.heading.exec(i);if(s){let l=s[2].trim();if(this.rules.other.endingHash.test(l)){let o=Lr(l,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(l=o.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:l,tokens:this.lexer.inline(l)}}}hr(i){let s=this.rules.block.hr.exec(i);if(s)return{type:"hr",raw:Lr(s[0],`
`)}}blockquote(i){let s=this.rules.block.blockquote.exec(i);if(s){let l=Lr(s[0],`
`).split(`
`),o="",c="",h=[];for(;l.length>0;){let f=!1,k=[],g;for(g=0;g<l.length;g++)if(this.rules.other.blockquoteStart.test(l[g]))k.push(l[g]),f=!0;else if(!f)k.push(l[g]);else break;l=l.slice(g);let w=k.join(`
`),v=w.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${w}`:w,c=c?`${c}
${v}`:v;let C=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,h,!0),this.lexer.state.top=C,l.length===0)break;let L=h.at(-1);if(L?.type==="code")break;if(L?.type==="blockquote"){let D=L,z=D.raw+`
`+l.join(`
`),V=this.blockquote(z);h[h.length-1]=V,o=o.substring(0,o.length-D.raw.length)+V.raw,c=c.substring(0,c.length-D.text.length)+V.text;break}else if(L?.type==="list"){let D=L,z=D.raw+`
`+l.join(`
`),V=this.list(z);h[h.length-1]=V,o=o.substring(0,o.length-L.raw.length)+V.raw,c=c.substring(0,c.length-D.raw.length)+V.raw,l=z.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:h,text:c}}}list(i){let s=this.rules.block.list.exec(i);if(s){let l=s[1].trim(),o=l.length>1,c={type:"list",raw:"",ordered:o,start:o?+l.slice(0,-1):"",loose:!1,items:[]};l=o?`\\d{1,9}\\${l.slice(-1)}`:`\\${l}`,this.options.pedantic&&(l=o?l:"[*+-]");let h=this.rules.other.listItemRegex(l),f=!1;for(;i;){let g=!1,w="",v="";if(!(s=h.exec(i))||this.rules.block.hr.test(i))break;w=s[0],i=i.substring(w.length);let C=rm(s[2].split(`
`,1)[0],s[1].length),L=i.split(`
`,1)[0],D=!C.trim(),z=0;if(this.options.pedantic?(z=2,v=C.trimStart()):D?z=s[1].length+1:(z=C.search(this.rules.other.nonSpaceChar),z=z>4?1:z,v=C.slice(z),z+=s[1].length),D&&this.rules.other.blankLine.test(L)&&(w+=L+`
`,i=i.substring(L.length+1),g=!0),!g){let V=this.rules.other.nextBulletRegex(z),Z=this.rules.other.hrRegex(z),_=this.rules.other.fencesBeginRegex(z),$=this.rules.other.headingBeginRegex(z),G=this.rules.other.htmlBeginRegex(z),ne=this.rules.other.blockquoteBeginRegex(z);for(;i;){let N=i.split(`
`,1)[0],U;if(L=N,this.options.pedantic?(L=L.replace(this.rules.other.listReplaceNesting,"  "),U=L):U=L.replace(this.rules.other.tabCharGlobal,"    "),_.test(L)||$.test(L)||G.test(L)||ne.test(L)||V.test(L)||Z.test(L))break;if(U.search(this.rules.other.nonSpaceChar)>=z||!L.trim())v+=`
`+U.slice(z);else{if(D||C.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||_.test(C)||$.test(C)||Z.test(C))break;v+=`
`+L}D=!L.trim(),w+=N+`
`,i=i.substring(N.length+1),C=U.slice(z)}}c.loose||(f?c.loose=!0:this.rules.other.doubleBlankLine.test(w)&&(f=!0)),c.items.push({type:"list_item",raw:w,task:!!this.options.gfm&&this.rules.other.listIsTask.test(v),loose:!1,text:v,tokens:[]}),c.raw+=w}let k=c.items.at(-1);if(k)k.raw=k.raw.trimEnd(),k.text=k.text.trimEnd();else return;c.raw=c.raw.trimEnd();for(let g of c.items){if(this.lexer.state.top=!1,g.tokens=this.lexer.blockTokens(g.text,[]),g.task){if(g.text=g.text.replace(this.rules.other.listReplaceTask,""),g.tokens[0]?.type==="text"||g.tokens[0]?.type==="paragraph"){g.tokens[0].raw=g.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),g.tokens[0].text=g.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let v=this.lexer.inlineQueue.length-1;v>=0;v--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[v].src)){this.lexer.inlineQueue[v].src=this.lexer.inlineQueue[v].src.replace(this.rules.other.listReplaceTask,"");break}}let w=this.rules.other.listTaskCheckbox.exec(g.raw);if(w){let v={type:"checkbox",raw:w[0]+" ",checked:w[0]!=="[ ]"};g.checked=v.checked,c.loose?g.tokens[0]&&["paragraph","text"].includes(g.tokens[0].type)&&"tokens"in g.tokens[0]&&g.tokens[0].tokens?(g.tokens[0].raw=v.raw+g.tokens[0].raw,g.tokens[0].text=v.raw+g.tokens[0].text,g.tokens[0].tokens.unshift(v)):g.tokens.unshift({type:"paragraph",raw:v.raw,text:v.raw,tokens:[v]}):g.tokens.unshift(v)}}if(!c.loose){let w=g.tokens.filter(C=>C.type==="space"),v=w.length>0&&w.some(C=>this.rules.other.anyLine.test(C.raw));c.loose=v}}if(c.loose)for(let g of c.items){g.loose=!0;for(let w of g.tokens)w.type==="text"&&(w.type="paragraph")}return c}}html(i){let s=this.rules.block.html.exec(i);if(s)return{type:"html",block:!0,raw:s[0],pre:s[1]==="pre"||s[1]==="script"||s[1]==="style",text:s[0]}}def(i){let s=this.rules.block.def.exec(i);if(s){let l=s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=s[2]?s[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):s[3];return{type:"def",tag:l,raw:s[0],href:o,title:c}}}table(i){let s=this.rules.block.table.exec(i);if(!s||!this.rules.other.tableDelimiter.test(s[2]))return;let l=Fu(s[1]),o=s[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=s[3]?.trim()?s[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:s[0],header:[],align:[],rows:[]};if(l.length===o.length){for(let f of o)this.rules.other.tableAlignRight.test(f)?h.align.push("right"):this.rules.other.tableAlignCenter.test(f)?h.align.push("center"):this.rules.other.tableAlignLeft.test(f)?h.align.push("left"):h.align.push(null);for(let f=0;f<l.length;f++)h.header.push({text:l[f],tokens:this.lexer.inline(l[f]),header:!0,align:h.align[f]});for(let f of c)h.rows.push(Fu(f,h.header.length).map((k,g)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:h.align[g]})));return h}}lheading(i){let s=this.rules.block.lheading.exec(i);if(s){let l=s[1].trim();return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:l,tokens:this.lexer.inline(l)}}}paragraph(i){let s=this.rules.block.paragraph.exec(i);if(s){let l=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:l,tokens:this.lexer.inline(l)}}}text(i){let s=this.rules.block.text.exec(i);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(i){let s=this.rules.inline.escape.exec(i);if(s)return{type:"escape",raw:s[0],text:s[1]}}tag(i){let s=this.rules.inline.tag.exec(i);if(s)return!this.lexer.state.inLink&&this.rules.other.startATag.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:s[0]}}link(i){let s=this.rules.inline.link.exec(i);if(s){let l=s[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(l)){if(!this.rules.other.endAngleBracket.test(l))return;let h=Lr(l.slice(0,-1),"\\");if((l.length-h.length)%2===0)return}else{let h=nm(s[2],"()");if(h===-2)return;if(h>-1){let f=(s[0].indexOf("!")===0?5:4)+s[1].length+h;s[2]=s[2].substring(0,h),s[0]=s[0].substring(0,f).trim(),s[3]=""}}let o=s[2],c="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(o);h&&(o=h[1],c=h[3])}else c=s[3]?s[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(l)?o=o.slice(1):o=o.slice(1,-1)),Gu(s,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},s[0],this.lexer,this.rules)}}reflink(i,s){let l;if((l=this.rules.inline.reflink.exec(i))||(l=this.rules.inline.nolink.exec(i))){let o=(l[2]||l[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=s[o.toLowerCase()];if(!c){let h=l[0].charAt(0);return{type:"text",raw:h,text:h}}return Gu(l,c,l[0],this.lexer,this.rules)}}emStrong(i,s,l=""){let o=this.rules.inline.emStrongLDelim.exec(i);if(!(!o||!o[1]&&!o[2]&&!o[3]&&!o[4]||o[4]&&l.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[3])||!l||this.rules.inline.punctuation.exec(l))){let c=[...o[0]].length-1,h,f,k=c,g=0,w=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(w.lastIndex=0,s=s.slice(-1*i.length+c);(o=w.exec(s))!==null;){if(h=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!h)continue;if(f=[...h].length,o[3]||o[4]){k+=f;continue}else if((o[5]||o[6])&&c%3&&!((c+f)%3)){g+=f;continue}if(k-=f,k>0)continue;f=Math.min(f,f+k+g);let v=[...o[0]][0].length,C=i.slice(0,c+o.index+v+f);if(Math.min(c,f)%2){let D=C.slice(1,-1);return{type:"em",raw:C,text:D,tokens:this.lexer.inlineTokens(D)}}let L=C.slice(2,-2);return{type:"strong",raw:C,text:L,tokens:this.lexer.inlineTokens(L)}}}}codespan(i){let s=this.rules.inline.code.exec(i);if(s){let l=s[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(l),c=this.rules.other.startingSpaceChar.test(l)&&this.rules.other.endingSpaceChar.test(l);return o&&c&&(l=l.substring(1,l.length-1)),{type:"codespan",raw:s[0],text:l}}}br(i){let s=this.rules.inline.br.exec(i);if(s)return{type:"br",raw:s[0]}}del(i,s,l=""){let o=this.rules.inline.delLDelim.exec(i);if(o&&(!o[1]||!l||this.rules.inline.punctuation.exec(l))){let c=[...o[0]].length-1,h,f,k=c,g=this.rules.inline.delRDelim;for(g.lastIndex=0,s=s.slice(-1*i.length+c);(o=g.exec(s))!==null;){if(h=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!h||(f=[...h].length,f!==c))continue;if(o[3]||o[4]){k+=f;continue}if(k-=f,k>0)continue;f=Math.min(f,f+k);let w=[...o[0]][0].length,v=i.slice(0,c+o.index+w+f),C=v.slice(c,-c);return{type:"del",raw:v,text:C,tokens:this.lexer.inlineTokens(C)}}}}autolink(i){let s=this.rules.inline.autolink.exec(i);if(s){let l,o;return s[2]==="@"?(l=s[1],o="mailto:"+l):(l=s[1],o=l),{type:"link",raw:s[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}url(i){let s;if(s=this.rules.inline.url.exec(i)){let l,o;if(s[2]==="@")l=s[0],o="mailto:"+l;else{let c;do c=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])?.[0]??"";while(c!==s[0]);l=s[0],s[1]==="www."?o="http://"+s[0]:o=s[0]}return{type:"link",raw:s[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(i){let s=this.rules.inline.text.exec(i);if(s){let l=this.lexer.state.inRawBlock;return{type:"text",raw:s[0],text:s[0],escaped:l}}}},at=class io{tokens;options;state;inlineQueue;tokenizer;constructor(s){this.tokens=[],this.tokens.links=Object.create(null),this.options=s||an,this.options.tokenizer=this.options.tokenizer||new $i,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let l={other:$e,block:zi.normal,inline:Cr.normal};this.options.pedantic?(l.block=zi.pedantic,l.inline=Cr.pedantic):this.options.gfm&&(l.block=zi.gfm,this.options.breaks?l.inline=Cr.breaks:l.inline=Cr.gfm),this.tokenizer.rules=l}static get rules(){return{block:zi,inline:Cr}}static lex(s,l){return new io(l).lex(s)}static lexInline(s,l){return new io(l).inlineTokens(s)}lex(s){s=s.replace($e.carriageReturn,`
`),this.blockTokens(s,this.tokens);for(let l=0;l<this.inlineQueue.length;l++){let o=this.inlineQueue[l];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(s,l=[],o=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(s=s.replace($e.tabCharGlobal,"    ").replace($e.spaceLine,""));s;){let c;if(this.options.extensions?.block?.some(f=>(c=f.call({lexer:this},s,l))?(s=s.substring(c.raw.length),l.push(c),!0):!1))continue;if(c=this.tokenizer.space(s)){s=s.substring(c.raw.length);let f=l.at(-1);c.raw.length===1&&f!==void 0?f.raw+=`
`:l.push(c);continue}if(c=this.tokenizer.code(s)){s=s.substring(c.raw.length);let f=l.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.at(-1).src=f.text):l.push(c);continue}if(c=this.tokenizer.fences(s)){s=s.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.heading(s)){s=s.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.hr(s)){s=s.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.blockquote(s)){s=s.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.list(s)){s=s.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.html(s)){s=s.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.def(s)){s=s.substring(c.raw.length);let f=l.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.raw,this.inlineQueue.at(-1).src=f.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title},l.push(c));continue}if(c=this.tokenizer.table(s)){s=s.substring(c.raw.length),l.push(c);continue}if(c=this.tokenizer.lheading(s)){s=s.substring(c.raw.length),l.push(c);continue}let h=s;if(this.options.extensions?.startBlock){let f=1/0,k=s.slice(1),g;this.options.extensions.startBlock.forEach(w=>{g=w.call({lexer:this},k),typeof g=="number"&&g>=0&&(f=Math.min(f,g))}),f<1/0&&f>=0&&(h=s.substring(0,f+1))}if(this.state.top&&(c=this.tokenizer.paragraph(h))){let f=l.at(-1);o&&f?.type==="paragraph"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):l.push(c),o=h.length!==s.length,s=s.substring(c.raw.length);continue}if(c=this.tokenizer.text(s)){s=s.substring(c.raw.length);let f=l.at(-1);f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):l.push(c);continue}if(s){let f="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,l}inline(s,l=[]){return this.inlineQueue.push({src:s,tokens:l}),l}inlineTokens(s,l=[]){this.tokenizer.lexer=this;let o=s,c=null;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(o))!==null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(o))!==null;)o=o.slice(0,c.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let h;for(;(c=this.tokenizer.rules.inline.blockSkip.exec(o))!==null;)h=c[2]?c[2].length:0,o=o.slice(0,c.index+h)+"["+"a".repeat(c[0].length-h-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=this.options.hooks?.emStrongMask?.call({lexer:this},o)??o;let f=!1,k="";for(;s;){f||(k=""),f=!1;let g;if(this.options.extensions?.inline?.some(v=>(g=v.call({lexer:this},s,l))?(s=s.substring(g.raw.length),l.push(g),!0):!1))continue;if(g=this.tokenizer.escape(s)){s=s.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.tag(s)){s=s.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.link(s)){s=s.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.reflink(s,this.tokens.links)){s=s.substring(g.raw.length);let v=l.at(-1);g.type==="text"&&v?.type==="text"?(v.raw+=g.raw,v.text+=g.text):l.push(g);continue}if(g=this.tokenizer.emStrong(s,o,k)){s=s.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.codespan(s)){s=s.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.br(s)){s=s.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.del(s,o,k)){s=s.substring(g.raw.length),l.push(g);continue}if(g=this.tokenizer.autolink(s)){s=s.substring(g.raw.length),l.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(s))){s=s.substring(g.raw.length),l.push(g);continue}let w=s;if(this.options.extensions?.startInline){let v=1/0,C=s.slice(1),L;this.options.extensions.startInline.forEach(D=>{L=D.call({lexer:this},C),typeof L=="number"&&L>=0&&(v=Math.min(v,L))}),v<1/0&&v>=0&&(w=s.substring(0,v+1))}if(g=this.tokenizer.inlineText(w)){s=s.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(k=g.raw.slice(-1)),f=!0;let v=l.at(-1);v?.type==="text"?(v.raw+=g.raw,v.text+=g.text):l.push(g);continue}if(s){let v="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return l}},Ui=class{options;parser;constructor(i){this.options=i||an}space(i){return""}code({text:i,lang:s,escaped:l}){let o=(s||"").match($e.notSpaceStart)?.[0],c=i.replace($e.endingNewline,"")+`
`;return o?'<pre><code class="language-'+mt(o)+'">'+(l?c:mt(c,!0))+`</code></pre>
`:"<pre><code>"+(l?c:mt(c,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}def(i){return""}heading({tokens:i,depth:s}){return`<h${s}>${this.parser.parseInline(i)}</h${s}>
`}hr(i){return`<hr>
`}list(i){let s=i.ordered,l=i.start,o="";for(let f=0;f<i.items.length;f++){let k=i.items[f];o+=this.listitem(k)}let c=s?"ol":"ul",h=s&&l!==1?' start="'+l+'"':"";return"<"+c+h+`>
`+o+"</"+c+`>
`}listitem(i){return`<li>${this.parser.parse(i.tokens)}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let s="",l="";for(let c=0;c<i.header.length;c++)l+=this.tablecell(i.header[c]);s+=this.tablerow({text:l});let o="";for(let c=0;c<i.rows.length;c++){let h=i.rows[c];l="";for(let f=0;f<h.length;f++)l+=this.tablecell(h[f]);o+=this.tablerow({text:l})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+s+`</thead>
`+o+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){let s=this.parser.parseInline(i.tokens),l=i.header?"th":"td";return(i.align?`<${l} align="${i.align}">`:`<${l}>`)+s+`</${l}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${mt(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:s,tokens:l}){let o=this.parser.parseInline(l),c=zu(i);if(c===null)return o;i=c;let h='<a href="'+i+'"';return s&&(h+=' title="'+mt(s)+'"'),h+=">"+o+"</a>",h}image({href:i,title:s,text:l,tokens:o}){o&&(l=this.parser.parseInline(o,this.parser.textRenderer));let c=zu(i);if(c===null)return mt(l);i=c;let h=`<img src="${i}" alt="${mt(l)}"`;return s&&(h+=` title="${mt(s)}"`),h+=">",h}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:mt(i.text)}},wo=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}checkbox({raw:i}){return i}},ot=class so{options;renderer;textRenderer;constructor(s){this.options=s||an,this.options.renderer=this.options.renderer||new Ui,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new wo}static parse(s,l){return new so(l).parse(s)}static parseInline(s,l){return new so(l).parseInline(s)}parse(s){this.renderer.parser=this;let l="";for(let o=0;o<s.length;o++){let c=s[o];if(this.options.extensions?.renderers?.[c.type]){let f=c,k=this.options.extensions.renderers[f.type].call({parser:this},f);if(k!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(f.type)){l+=k||"";continue}}let h=c;switch(h.type){case"space":{l+=this.renderer.space(h);break}case"hr":{l+=this.renderer.hr(h);break}case"heading":{l+=this.renderer.heading(h);break}case"code":{l+=this.renderer.code(h);break}case"table":{l+=this.renderer.table(h);break}case"blockquote":{l+=this.renderer.blockquote(h);break}case"list":{l+=this.renderer.list(h);break}case"checkbox":{l+=this.renderer.checkbox(h);break}case"html":{l+=this.renderer.html(h);break}case"def":{l+=this.renderer.def(h);break}case"paragraph":{l+=this.renderer.paragraph(h);break}case"text":{l+=this.renderer.text(h);break}default:{let f='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return l}parseInline(s,l=this.renderer){this.renderer.parser=this;let o="";for(let c=0;c<s.length;c++){let h=s[c];if(this.options.extensions?.renderers?.[h.type]){let k=this.options.extensions.renderers[h.type].call({parser:this},h);if(k!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(h.type)){o+=k||"";continue}}let f=h;switch(f.type){case"escape":{o+=l.text(f);break}case"html":{o+=l.html(f);break}case"link":{o+=l.link(f);break}case"image":{o+=l.image(f);break}case"checkbox":{o+=l.checkbox(f);break}case"strong":{o+=l.strong(f);break}case"em":{o+=l.em(f);break}case"codespan":{o+=l.codespan(f);break}case"br":{o+=l.br(f);break}case"del":{o+=l.del(f);break}case"text":{o+=l.text(f);break}default:{let k='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(k),"";throw new Error(k)}}}return o}},Nr=class{options;block;constructor(i){this.options=i||an}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}emStrongMask(i){return i}provideLexer(i=this.block){return i?at.lex:at.lexInline}provideParser(i=this.block){return i?ot.parse:ot.parseInline}},sm=class{defaults=fo();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ot;Renderer=Ui;TextRenderer=wo;Lexer=at;Tokenizer=$i;Hooks=Nr;constructor(...i){this.use(...i)}walkTokens(i,s){let l=[];for(let o of i)switch(l=l.concat(s.call(this,o)),o.type){case"table":{let c=o;for(let h of c.header)l=l.concat(this.walkTokens(h.tokens,s));for(let h of c.rows)for(let f of h)l=l.concat(this.walkTokens(f.tokens,s));break}case"list":{let c=o;l=l.concat(this.walkTokens(c.items,s));break}default:{let c=o;this.defaults.extensions?.childTokens?.[c.type]?this.defaults.extensions.childTokens[c.type].forEach(h=>{let f=c[h].flat(1/0);l=l.concat(this.walkTokens(f,s))}):c.tokens&&(l=l.concat(this.walkTokens(c.tokens,s)))}}return l}use(...i){let s=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(l=>{let o={...l};if(o.async=this.defaults.async||o.async||!1,l.extensions&&(l.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){let h=s.renderers[c.name];h?s.renderers[c.name]=function(...f){let k=c.renderer.apply(this,f);return k===!1&&(k=h.apply(this,f)),k}:s.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=s[c.level];h?h.unshift(c.tokenizer):s[c.level]=[c.tokenizer],c.start&&(c.level==="block"?s.startBlock?s.startBlock.push(c.start):s.startBlock=[c.start]:c.level==="inline"&&(s.startInline?s.startInline.push(c.start):s.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(s.childTokens[c.name]=c.childTokens)}),o.extensions=s),l.renderer){let c=this.defaults.renderer||new Ui(this.defaults);for(let h in l.renderer){if(!(h in c))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let f=h,k=l.renderer[f],g=c[f];c[f]=(...w)=>{let v=k.apply(c,w);return v===!1&&(v=g.apply(c,w)),v||""}}o.renderer=c}if(l.tokenizer){let c=this.defaults.tokenizer||new $i(this.defaults);for(let h in l.tokenizer){if(!(h in c))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let f=h,k=l.tokenizer[f],g=c[f];c[f]=(...w)=>{let v=k.apply(c,w);return v===!1&&(v=g.apply(c,w)),v}}o.tokenizer=c}if(l.hooks){let c=this.defaults.hooks||new Nr;for(let h in l.hooks){if(!(h in c))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let f=h,k=l.hooks[f],g=c[f];Nr.passThroughHooks.has(h)?c[f]=w=>{if(this.defaults.async&&Nr.passThroughHooksRespectAsync.has(h))return(async()=>{let C=await k.call(c,w);return g.call(c,C)})();let v=k.call(c,w);return g.call(c,v)}:c[f]=(...w)=>{if(this.defaults.async)return(async()=>{let C=await k.apply(c,w);return C===!1&&(C=await g.apply(c,w)),C})();let v=k.apply(c,w);return v===!1&&(v=g.apply(c,w)),v}}o.hooks=c}if(l.walkTokens){let c=this.defaults.walkTokens,h=l.walkTokens;o.walkTokens=function(f){let k=[];return k.push(h.call(this,f)),c&&(k=k.concat(c.call(this,f))),k}}this.defaults={...this.defaults,...o}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,s){return at.lex(i,s??this.defaults)}parser(i,s){return ot.parse(i,s??this.defaults)}parseMarkdown(i){return(s,l)=>{let o={...l},c={...this.defaults,...o},h=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&o.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof s>"u"||s===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(c.hooks&&(c.hooks.options=c,c.hooks.block=i),c.async)return(async()=>{let f=c.hooks?await c.hooks.preprocess(s):s,k=await(c.hooks?await c.hooks.provideLexer(i):i?at.lex:at.lexInline)(f,c),g=c.hooks?await c.hooks.processAllTokens(k):k;c.walkTokens&&await Promise.all(this.walkTokens(g,c.walkTokens));let w=await(c.hooks?await c.hooks.provideParser(i):i?ot.parse:ot.parseInline)(g,c);return c.hooks?await c.hooks.postprocess(w):w})().catch(h);try{c.hooks&&(s=c.hooks.preprocess(s));let f=(c.hooks?c.hooks.provideLexer(i):i?at.lex:at.lexInline)(s,c);c.hooks&&(f=c.hooks.processAllTokens(f)),c.walkTokens&&this.walkTokens(f,c.walkTokens);let k=(c.hooks?c.hooks.provideParser(i):i?ot.parse:ot.parseInline)(f,c);return c.hooks&&(k=c.hooks.postprocess(k)),k}catch(f){return h(f)}}}onError(i,s){return l=>{if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,i){let o="<p>An error occurred:</p><pre>"+mt(l.message+"",!0)+"</pre>";return s?Promise.resolve(o):o}if(s)return Promise.reject(l);throw l}}},sn=new sm;function we(i,s){return sn.parse(i,s)}we.options=we.setOptions=function(i){return sn.setOptions(i),we.defaults=sn.defaults,rd(we.defaults),we};we.getDefaults=fo;we.defaults=an;we.use=function(...i){return sn.use(...i),we.defaults=sn.defaults,rd(we.defaults),we};we.walkTokens=function(i,s){return sn.walkTokens(i,s)};we.parseInline=sn.parseInline;we.Parser=ot;we.parser=ot.parse;we.Renderer=Ui;we.TextRenderer=wo;we.Lexer=at;we.lexer=at.lex;we.Tokenizer=$i;we.Hooks=Nr;we.parse=we;we.options;we.setOptions;we.use;we.walkTokens;we.parseInline;ot.parse;at.lex;function Dr(i){return`${i}`.toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}we.setOptions({breaks:!0,gfm:!0});const am=Object.assign({"./articles/md/10-coding-projects-you-can-add-to-your-resume.md":ph,"./articles/md/from-repo-to-reader.md":fh,"./articles/md/javascript-interview-series-plan.md":hh,"./articles/md/open-source-content-formats-for-dev-creators.md":mh}),om=Object.assign({"./articles/html/ai-content-prompterrr.html":gh,"./articles/html/claude-carousel-generator.html":vh,"./articles/html/gemma-complete-guide.html":yh});function lm(i){const l=`
<base href="${typeof window<"u"?`${window.location.origin}/`:"/"}" target="_blank">
<style>
html, body { margin: 0; padding: 0; }
body > * { position: relative; z-index: 1; }
</style>`;return/<head[^>]*>/i.test(i)?i.replace(/<head([^>]*)>/i,`<head$1>${l}`):`<!DOCTYPE html><html><head>${l}</head><body>${i}</body></html>`}function Bi(i){return i.split("/").pop().replace(/\.(md|html)$/,"")}function cm(i){return i.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function fd(i){const s=i.trim().split(/\s+/).filter(Boolean).length;return`${Math.max(1,Math.round(s/220))} min read`}function bo(i){return i?Array.isArray(i)?i.map(s=>`${s}`.trim()).filter(Boolean):`${i}`.replace(/^\[/,"").replace(/\]$/,"").split(",").map(s=>s.replace(/^["']|["']$/g,"").trim()).filter(Boolean):[]}function hd(i){return`${i}`.trim().toLowerCase()==="true"}function md(i){if(!i)return"";const s=new Date(i);return Number.isNaN(s.getTime())?i:new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(s)}function um(i){if(!i.startsWith("---"))return{attributes:{},body:i};const s=i.indexOf(`
---`,3);if(s===-1)return{attributes:{},body:i};const l=i.slice(3,s).trim(),o=i.slice(s+4).trim(),c={};return l.split(`
`).forEach(h=>{const f=h.indexOf(":");if(f===-1)return;const k=h.slice(0,f).trim(),g=h.slice(f+1).trim();c[k]=g.replace(/^["']|["']$/g,"")}),c.tags&&(c.tags=bo(c.tags)),{attributes:c,body:o}}function dm(i,s){return`
        <div class="article-card-markdown-inner">
            <span class="article-preview-type">Markdown</span>
            <h4>${i}</h4>
            <p>${s}</p>
        </div>
    `}function pm([i,s]){const{attributes:l,body:o}=um(s),c=o.replace(/^#{1,6}\s+/gm,"").replace(/[*_`>#-]/g," ").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/\s+/g," ").trim(),h=o.match(/^#\s+(.+)$/m),f=l.excerpt||c.slice(0,180).trim(),k=l.title||(h?h[1].trim():Bi(i));return{slug:l.slug||Dr(Bi(i)),title:k,date:md(l.date||""),sortDate:l.date||"",excerpt:f,tags:bo(l.tags),readingTime:fd(c),kind:"markdown",category:l.category||"Article",coverImage:l.cover||"",accent:l.accent||"",featured:hd(l.featured||"false"),bodyHtml:we.parse(o),previewHtml:dm(k,f)}}function fm([i,s]){const l=lm(s),c=new DOMParser().parseFromString(l,"text/html"),h=c.title||Bi(i),f=c.querySelector('meta[name="description"]')?.content||"",k=c.querySelector('meta[name="keywords"]')?.content||"",g=c.querySelector("p")?.textContent?.trim()||"",w=c.querySelector('meta[property="article:published_time"]')?.content||c.querySelector('meta[name="date"]')?.content||"",v=c.querySelector('meta[name="category"]')?.content||"Article",C=c.querySelector('meta[property="og:image"]')?.content||c.querySelector('meta[name="cover"]')?.content||"",L=c.querySelector('meta[name="theme-color"]')?.content||"",D=hd(c.querySelector('meta[name="featured"]')?.content||"false"),z=f||g||"Standalone HTML article rendered inside the React reader.",V=cm(c.body?.innerHTML||s);return{slug:Dr(Bi(i)),title:h,date:md(w),sortDate:w,excerpt:z,tags:bo(k),readingTime:fd(V),kind:"html",category:v,coverImage:C,accent:L,featured:D,raw:l}}const $t=[...Object.entries(am).map(pm),...Object.entries(om).map(fm)].sort((i,s)=>{if(i.featured!==s.featured)return i.featured?-1:1;const l=i.sortDate?new Date(i.sortDate).getTime():0,o=s.sortDate?new Date(s.sortDate).getTime():0;return l!==o?o-l:i.title.localeCompare(s.title)});function gd(i){return $t.find(s=>s.slug===i)}function hm(){return Array.from(new Set($t.flatMap(i=>i.tags))).sort((i,s)=>i.localeCompare(s))}const vd="rk-theme";function mm(){if(typeof window>"u")return"dark";const i=window.localStorage.getItem(vd);return i==="light"||i==="dark"?i:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function gm(){const[i,s]=Xe.useState(mm);return Xe.useEffect(()=>{document.documentElement.dataset.theme=i,document.documentElement.style.colorScheme=i,document.body.dataset.theme=i,window.localStorage.setItem(vd,i);const l=document.querySelector('meta[name="theme-color"]');l&&l.setAttribute("content",i==="dark"?"#050505":"#ffffff")},[i]),{theme:i,toggleTheme:()=>s(l=>l==="dark"?"light":"dark")}}function vm({theme:i,onToggleTheme:s}){const l=i==="dark";return p.jsxs("button",{type:"button",className:"theme-toggle",onClick:s,"aria-label":"Toggle color theme",children:[p.jsx("span",{className:"theme-toggle-track",children:p.jsx("span",{className:`theme-toggle-thumb${l?" is-dark":""}`})}),p.jsx("span",{className:"theme-toggle-label",children:l?"Dark":"Light"})]})}const ym=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Projects",to:"/projects"},{label:"Articles",to:"/articles"},{label:"Contact",to:"/contact"}];function xm({theme:i,onToggleTheme:s}){const[l,o]=Xe.useState(!1);return p.jsx("header",{className:"site-header",children:p.jsxs("div",{className:"shell header-shell",children:[p.jsxs(Fe,{className:"brand-mark",to:"/",onClick:()=>o(!1),children:[p.jsx("span",{className:"brand-mark-label",children:"Radhakishan Jangid"}),p.jsx("span",{className:"brand-mark-subtitle",children:"Senior software engineer"})]}),p.jsxs("button",{type:"button",className:"menu-toggle","aria-label":"Toggle navigation","aria-expanded":l,onClick:()=>o(c=>!c),children:[p.jsx("span",{}),p.jsx("span",{})]}),p.jsxs("div",{className:`header-panel${l?" is-open":""}`,children:[p.jsx("nav",{className:"primary-nav","aria-label":"Primary",children:ym.map(c=>p.jsx(dh,{exact:c.to==="/",activeClassName:"is-active",to:c.to,onClick:()=>o(!1),children:c.label},c.to))}),p.jsxs("div",{className:"header-actions",children:[p.jsx(Fe,{className:"header-cta",to:"/contact",onClick:()=>o(!1),children:"Let's talk"}),p.jsx(vm,{theme:i,onToggleTheme:s})]})]})]})})}const km=[{id:"github",label:"GitHub",href:"https://github.com/radhakishan404"},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/radhakishanjangid"},{id:"x",label:"X",href:"https://x.com/radhakishan404"},{id:"dev",label:"DEV",href:"https://dev.to/radhakishanjangid404"},{id:"instagram",label:"Instagram",href:"https://www.instagram.com/radhakishanjangid404"},{id:"email",label:"Email",href:"mailto:radhakishanjangid404@gmail.com"}],wm=[{label:"radhakishanjangid404@gmail.com",href:"mailto:radhakishanjangid404@gmail.com",external:!1},{label:"GitHub",href:"https://github.com/radhakishan404",external:!0},{label:"LinkedIn",href:"https://www.linkedin.com/in/radhakishanjangid",external:!0},{label:"DEV",href:"https://dev.to/radhakishanjangid404",external:!0}],bm=[{value:"7+",label:"Years building web products"},{value:"React",label:"Frontend and product UI"},{value:"Node",label:"APIs and backend delivery"}];function Sm({id:i}){switch(i){case"github":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.8c-2.95.64-3.57-1.25-3.57-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.08-.65.08-.65 1.06.08 1.62 1.09 1.62 1.09.95 1.62 2.48 1.16 3.08.88.09-.69.37-1.16.67-1.43-2.36-.27-4.84-1.18-4.84-5.24 0-1.16.42-2.11 1.1-2.85-.11-.27-.48-1.36.11-2.83 0 0 .9-.29 2.95 1.09a10.19 10.19 0 0 1 5.38 0c2.05-1.38 2.95-1.09 2.95-1.09.59 1.47.22 2.56.11 2.83.68.74 1.1 1.69 1.1 2.85 0 4.07-2.49 4.97-4.87 5.23.38.33.72.98.72 1.98v2.94c0 .29.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z"})});case"linkedin":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 1 0 3.24 5a1.96 1.96 0 0 0 3.92-.05ZM20 13.05c0-3.35-1.79-4.91-4.18-4.91a3.62 3.62 0 0 0-3.25 1.79V8.5H9.19V20h3.38v-6.05c0-1.6.3-3.14 2.28-3.14 1.95 0 1.98 1.82 1.98 3.24V20H20v-6.95Z"})});case"x":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"m18.9 2 2.6 3.8-6.02 6.88L22 22h-5.16l-4.04-5.47L8.02 22H2.88l6.38-7.3L2 2h5.25l3.67 4.97L15.28 2h3.62Zm-1.8 17.1h1.43L6.14 4.8H4.6l12.5 14.3Z"})});case"dev":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M7.8 9.4h-1v5.2h1c1.43 0 1.95-.83 1.95-2.61 0-1.84-.54-2.59-1.95-2.59ZM3 6.5h18A1.5 1.5 0 0 1 22.5 8v8A1.5 1.5 0 0 1 21 17.5H3A1.5 1.5 0 0 1 1.5 16V8A1.5 1.5 0 0 1 3 6.5Zm2.8 2v7h2.2c2.72 0 4.05-1.4 4.05-4.5 0-3-1.36-4.5-4.05-4.5H5.8Zm7.2 0v7h4.55v-1.8H15.2v-1h1.95v-1.75H15.2v-.95h2.32V8.5H13Zm5.02 0 1.55 7h2.03l1.4-7h-1.97l-.48 3.77-.5-3.77h-1.74l-.56 3.78-.45-3.78h-1.94Z"})});case"instagram":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9A3.7 3.7 0 0 0 7.5 20.2h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm4.5 3a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.4-.94a1.22 1.22 0 1 1 0 2.44 1.22 1.22 0 0 1 0-2.44Z"})});case"email":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.8v.38l9 5.84 9-5.84V7.3H3Zm18 9.4v-6.03l-8.51 5.52a.9.9 0 0 1-.98 0L3 10.67v6.03h18Z"})});default:return null}}function Tm(){return p.jsx("aside",{className:"social-rail","aria-label":"Social links",children:km.map((i,s)=>p.jsxs("a",{href:i.href,target:i.id==="email"?void 0:"_blank",rel:i.id==="email"?void 0:"noreferrer",className:"social-rail-link",style:{animationDelay:`${s*80}ms`},"aria-label":i.label,title:i.label,children:[p.jsx(Sm,{id:i.id}),p.jsx("span",{children:i.label})]},i.href))})}function Em({children:i}){const s=ah(),{theme:l,toggleTheme:o}=gm(),c=s.pathname.match(/^\/articles\/([^/]+)$/);return(c?gd(c[1]):null)?.kind==="html"?p.jsx("div",{className:"site-root site-root-embedded",children:p.jsx("main",{className:"site-main site-main-embedded",children:i},s.pathname)}):p.jsxs("div",{className:"site-root",children:[p.jsx(xm,{theme:l,onToggleTheme:o}),p.jsx(Tm,{}),p.jsx("main",{className:"site-main",children:i},s.pathname),p.jsx("footer",{className:"site-footer",children:p.jsx("div",{className:"shell footer-shell",children:p.jsxs("p",{className:"footer-copy",children:["© ",new Date().getFullYear()," Radhakishan Jangid"]})})})]})}const Pm=[{isCurrent:1,title:"Senior Software Engineer",companyName:"Cachetech Advisor Solutions (USA)",companyLink:"https://www.cachetech.com/",location:"Mumbai, India",from:"February 2024",to:"Present",description:"Working with US-based product and engineering teams to build scalable fintech systems, including workflow management, multi-tenancy architecture, and React Native mobile app delivery."},{isCurrent:0,title:"Manager - Software Engineer",companyName:"Edubridge India Pvt Ltd",companyLink:"https://www.edubridgeindia.com/",location:"Mumbai, India",from:"December 2022",to:"January 2024",description:"Led migration from PHP to MERN stack, built a resume builder platform, and shipped microservice-based products with Jenkins + Docker CI/CD pipelines."},{isCurrent:0,title:"Senior Software Engineer",companyName:"TechStalwarts Software Development LLP",companyLink:"http://www.techstalwarts.com/",location:"Mumbai, India",from:"September 2020",to:"November 2022",description:"Handled ecommerce platform delivery across frontend, backend, AWS deployments, and third-party API integrations for high-traffic production systems."},{isCurrent:0,title:"PHP Web Developer",companyName:"Innovins Softtech Solutions Pvt. Ltd",companyLink:"https://www.innovins.com/",location:"Mumbai, India",from:"July 2019",to:"August 2020",description:"Maintained and developed multiple enterprise portals and internal productivity systems, including API and task management features."},{isCurrent:0,title:"PHP Web Developer with CodeIgniter",companyName:"IMPAQ Technologies Pvt. Ltd",companyLink:"http://impaq.co.in/",location:"Mumbai, India",from:"August 2018",to:"June 2019",description:"Delivered CMS and admission workflow modules, including business logic automation and platform maintenance for multiple client projects."}],Cm=[{skillName:"Professional skills",skillType:[{title:"Front End Development",description:"Good sense of knowledge for <strong>Front End Development</strong>, building complex user interfaces with high level UX for both web and mobile.",skillsList:[{skillTitle:"JavaScript Development",skillDesc:"Learning Architecting and building web/mobile applications with React, JavaScript/TypeScript."},{skillTitle:"Responsive Design",skillDesc:"adapting and optimizing web pages to work on all screen sizes (mobile and tablet devices)."},{skillTitle:"Design to Web",skillDesc:"Converting design files to interactive, responsive and optimized web applications."}]},{title:"Back End Development",description:"Building Node.js web applications and <strong>RESTful API</strong> servers using technologies like <strong>Express, Core PHP and CodeIgniter</strong>.",skillsList:[{skillTitle:"RESTful API",skillDesc:"Experienced in Design and development of RESTful API servers using Node, PHP and CodeIgniter Framework."},{skillTitle:"Web Development",skillDesc:"Experienced in Design and development of Web Application using React Js, PHP, CodeIgniter and Laravel Framework."},{skillTitle:"E-commerce",skillDesc:"Design and development of E-Commerece using React Js, PHP, CodeIgniter and Laravel Framework."},{skillTitle:"Payment Gateway",skillDesc:"Experienced in working on server side payment systems with both PHP and NodeJS platforms."}]},{title:"Mobile App Development",description:"Learning developing native and hybrid mobile applications using <strong>Ionic Framework</strong> and <strong>React Native Framework</strong>.",skillsList:[{skillTitle:"Hybrid mobile apps",skillDesc:"Learning development of hybrid mobile apps for Android, iOS and Windows Phone based on Ionic 3/Cordova or Ionic 4/Capacitor technologies."},{skillTitle:"Native mobile apps",skillDesc:"Learning development of native mobile apps for Android, iOS using React Native Framework."}]}]}],Lm=JSON.parse(`[{"id":11,"title":"Notch Prompter","description":"A notch-aligned native macOS teleprompter built with SwiftUI.","logo":"/images/github.svg","thumbnail":"https://opengraph.githubassets.com/1/radhakishan404/notch-prompter","gitAvailable":true,"tag":"Open Source, GitHub, Application, UX, Front-end","technology":"SwiftUI, macOS, Product Design","date":"2026","isPackage":false,"onlineLink":"https://notch-prompter.vercel.app","sliderImages":[{"image":"https://opengraph.githubassets.com/1/radhakishan404/notch-prompter"},{"image":"/images/project/POS-1.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Notch Prompter is a <strong>native macOS utility</strong> focused on notch-aligned teleprompter usability with a clean and practical UI.","contentList":[{"isLink":true,"link":"https://notch-prompter.vercel.app","text":"Project website"},{"isLink":true,"link":"https://github.com/radhakishan404/notch-prompter","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Native SwiftUI experience"},{"isLink":false,"link":"","text":"Optimized reading layout near notch area"},{"isLink":false,"link":"","text":"Simple interaction model for creators"}]},{"contentTitle":"Responsibilities","contentDescription":"Built this project from idea to public release.","contentList":[{"isLink":false,"link":"","text":"Product concept and UI flow"},{"isLink":false,"link":"","text":"Implementation and testing"},{"isLink":false,"link":"","text":"Release and public showcase"}]}]},{"id":10,"title":"SSHipIt","description":"CD over SSH for Node.js, Next.js and React applications.","logo":"/images/github.svg","thumbnail":"https://opengraph.githubassets.com/1/radhakishan404/sshipit","gitAvailable":true,"tag":"Open Source, GitHub, Node Js, React, JavaScript, DevOps, Back-end, Website","technology":"Node Js, JavaScript, CI/CD, SSH, React, Next.js","date":"2026","isPackage":false,"onlineLink":"https://sshipit.vercel.app/","sliderImages":[{"image":"https://opengraph.githubassets.com/1/radhakishan404/sshipit"},{"image":"/images/project/npm/react-animation-loader.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"SSHipIt is an open source deployment utility to run reliable CD pipelines over SSH for <strong>Node.js, Next.js and React</strong> applications.","contentList":[{"isLink":true,"link":"https://sshipit.vercel.app/","text":"Project website"},{"isLink":true,"link":"https://github.com/radhakishan404/sshipit","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"SSH-based deployment flow"},{"isLink":false,"link":"","text":"Node.js / Next.js / React support"},{"isLink":false,"link":"","text":"Simple, self-hosted CI/CD pattern"}]},{"contentTitle":"Responsibilities","contentDescription":"Designed and built the project as an open source product.","contentList":[{"isLink":false,"link":"","text":"Architecture and implementation"},{"isLink":false,"link":"","text":"Documentation and onboarding guides"},{"isLink":false,"link":"","text":"Maintenance and enhancements"}]}]},{"id":1,"title":"Nirulas","description":"Nirula's is India's oldest fast food restaurant chain.","logo":"/images/project/nirulas-logo.webp","thumbnail":"/images/project/nirulas-thumb.webp","gitAvailable":false,"tag":"React, Node Js, JavaScript, Front-end, Back-end, REST, UX, Website","technology":"React, Express, Node Js, JavaScript, Redux, Amazon, Google Analytics","date":"November 2020","onlineLink":"https://delivery.nirulas.com/","sliderImages":[{"image":"/images/project/nirulas-slider-5.gif"},{"image":"/images/project/nirulas-slider-1.webp"},{"image":"/images/project/nirulas-slider-2.webp"},{"image":"/images/project/nirulas-slider-3.webp"},{"image":"/images/project/nirulas-slider-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Nirula's is India's oldest fast food restaurant chain. Based in North India and most popular in the <strong>NCR Delhi</strong>. It was Delhi's first fast food restaurant, opening in Connaught Place in 1977. The website was initially build on Angular Js but was later moved to <strong>React and Node Js</strong>. React used on the client-side input handling and Node Js is used for the server-side to handle connectivity between databases. It utilizes some advanced <strong>page transition</strong> and <strong>animations</strong>.","contentList":[{"isLink":true,"link":"https://delivery.nirulas.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Product Listing"},{"isLink":false,"link":"","text":"Add to cart with Animation"},{"isLink":false,"link":"","text":"Coupon Apply"},{"isLink":false,"link":"","text":"Place Order"},{"isLink":false,"link":"","text":"OTP verify"},{"isLink":false,"link":"","text":"Live location fetch"},{"isLink":false,"link":"","text":"Location based delivery"}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete website both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>Node Js Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"Third Party <strong>Google Analytics, Message and Facebook Pixel</strong> API Integration"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Front-end and Back-end</strong>"},{"isLink":false,"link":"","text":"<strong>Deployment</strong> of both React and Node Js Application"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I faced <strong>designing and architecting the base structure</strong> of the application. Building a web app for fast and durable react was a perfect choice for future growth and maintainability. <strong>React Components, React-Redux, and Lazy loading modules</strong> made this whole project lot easier by allowing me to separate the app logic by modules (per feature). One of the biggest challenges during development was maintaining the <strong>product customization and pricing module</strong>. I have created a separate component for the customization and called API based on the product by that I handled the <strong>customization and pricing part in Node JS API</strong>. I <strong>learned</strong> many new things while building this project still I am getting new changes and new phases to work on.","contentList":null}]},{"id":8,"title":"Nirulas POS","description":"Nirula's is India's oldest fast food restaurant chain.","logo":"/images/project/nirulas-logo.webp","thumbnail":"/images/project/POS-1.png","gitAvailable":false,"tag":"React, Node Js, JavaScript, Front-end, Back-end, REST, UX, Website","technology":"React, Express, Node Js, JavaScript, Redux, Amazon, Google Analytics","date":"April 2021","onlineLink":"https://delivery.nirulas.com/","sliderImages":[{"image":"/images/project/POS-1.png"},{"image":"/images/project/POS-2.png"},{"image":"/images/project/POS-3.png"},{"image":"/images/project/POS-4.png"},{"image":"/images/project/POS-5.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Nirula's is India's oldest fast food restaurant chain. Based in North India and most popular in the <strong>NCR Delhi</strong>. It was Delhi's first fast food restaurant, opening in Connaught Place in 1977. The website was initially build on Angular Js but was later moved to <strong>React and Node Js</strong>. React used on the client-side input handling and Node Js is used for the server-side to handle connectivity between databases. It utilizes some advanced <strong>page transition</strong> and <strong>animations</strong>.","contentList":[{"isLink":true,"link":"https://branch.nirulas.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Product Listing"},{"isLink":false,"link":"","text":"Add to cart with Animation"},{"isLink":false,"link":"","text":"Coupon Apply"},{"isLink":false,"link":"","text":"Place Order"},{"isLink":false,"link":"","text":"OTP verify"},{"isLink":false,"link":"","text":"Product Stock"},{"isLink":false,"link":"","text":"Branch Orders"},{"isLink":false,"link":"","text":"Branch Dashboard"}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete website both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>Node Js Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"Third Party <strong>Google Analytics, Message and Facebook Pixel</strong> API Integration"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Front-end and Back-end</strong>"},{"isLink":false,"link":"","text":"<strong>Deployment</strong> of both React and Node Js Application"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I faced <strong>designing and architecting the base structure</strong> of the application. Building a web app for fast and durable react was a perfect choice for future growth and maintainability. <strong>React Components, React-Redux, and Lazy loading modules</strong> made this whole project lot easier by allowing me to separate the app logic by modules (per feature). One of the biggest challenges during development was maintaining the <strong>product customization and pricing module</strong>. I have created a separate component for the customization and called API based on the product by that I handled the <strong>customization and pricing part in Node JS API</strong>. I <strong>learned</strong> many new things while building this project still I am getting new changes and new phases to work on.","contentList":null}]},{"id":2,"title":"Covid-19 Tracker","description":"Covid-19 Tracker is a simple React Native application.","logo":"/images/project/covid/covid-19-logo.webp","thumbnail":"/images/project/covid/covid-19-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, Application, REST, UX, Design, GitHub","technology":"React Native, Expo, Mathdroid Covid API, Novelcovid API, React Navigation","date":"3 April, 2020 - 13 April, 2020","onlineLink":"http://radhakishan.site/covid-download.php","sliderImages":[{"image":"/images/project/covid/covid-slider-1.webp"},{"image":"/images/project/covid/covid-slider-2.webp"},{"image":"/images/project/covid/covid-slider-3.webp"},{"image":"/images/project/covid/covid-slider-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Covid-19 Tracker is a simple <strong>React Native</strong> application that shows you the Current and <strong>Total Infected, Recovered, and Deaths</strong> of people all around the globe and you can see data based on <strong>country selection</strong>.","contentList":[{"isLink":true,"link":"https://radhakishan.site/covid-download.php","text":"Link to download the apk file"},{"isLink":true,"link":"https://github.com/radhakishan404/covid-19-tracker","text":"Source Code"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Country Selector"},{"isLink":false,"link":"","text":"React Native Line and Bar Chart"},{"isLink":false,"link":"","text":"Image gallery"},{"isLink":false,"link":"","text":"Stylish Bottom Navigation Bar"},{"isLink":false,"link":"","text":"Search country and get latest data"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included design and development of a complete application.","contentList":[{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"<strong>API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Application</strong>"}]},{"contentTitle":"Challenges","contentDescription":"This was my first <strong>React Native</strong> Application. I had some problems at the start but later I was able to <strong>understand the problem and solve them</strong>. The biggest challenge for me was the <strong>Image gallery</strong> section for making the images responsive, In the end, I was able to make all images <strong>proper and responsive</strong>.","contentList":null}]},{"id":3,"title":"Health Monitoring System","description":"Health Monitoring System - Patient-Doctor Live Chat!","logo":"/images/project/hms/hms-logo.webp","thumbnail":"/images/project/hms/hms-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, Back-end, REST, UX, Design, PHP, MySql, GitHub","technology":"React Js, React-Redux, PHP, MySql, HTML, CSS, JS, VS Code","date":"1 August, 2020 - 10 August, 2020","onlineLink":"https://healthmonitoring.radhakishan.site/","sliderImages":[{"image":"/images/project/hms/hms-slider-1.webp"},{"image":"/images/project/hms/hms-slider-2.webp"},{"image":"/images/project/hms/hms-slider-3.webp"},{"image":"/images/project/hms/hms-slider-4.webp"},{"image":"/images/project/hms/hms-slider-5.webp"},{"image":"/images/project/hms/hms-slider-6.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>Health Monitoring System</strong> is a simple web project where <strong>patients</strong> can add their <strong>readings</strong> and <strong>doctors</strong> can check patient's readings and can send direct <strong>messages to each other</strong> through the application. Both patients and doctors need to <strong>log in or register</strong> before proceeds. Both patient and doctors can <strong>live chat</strong> with each other.","contentList":[{"isLink":true,"link":"https://healthmonitoring.radhakishan.site/","text":"Link to live demo"},{"isLink":true,"link":"https://github.com/radhakishan404/Health-Monitoring-System-Live-Chat","text":"Front-end Source Code"},{"isLink":true,"link":"https://github.com/radhakishan404/Health-Monitoring-System-Live-Chat/tree/master/health-monitoring-php","text":"API Source Code"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Login, Register, Forget Password"},{"isLink":false,"link":"","text":"Add, Edit, Delete, List (CRUD) for patient readings"},{"isLink":false,"link":"","text":"Chart view for Readings"},{"isLink":false,"link":"","text":"Profile Edit"},{"isLink":false,"link":"","text":"Doctors Message List"},{"isLink":false,"link":"","text":"Live Chat with doctors"},{"isLink":false,"link":"","text":"List of patients"},{"isLink":false,"link":"","text":"Live search of patients"},{"isLink":false,"link":"","text":"Chart view details about patients"},{"isLink":false,"link":"","text":"Direct message to patients"},{"isLink":false,"link":"","text":"Live Chat with Patients"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"First Install Node Js Version 14.8.0 from <a class='text-gradient' href='https://nodejs.org/en/' rel='nofollow'>Here ↩</a>"},{"isLink":false,"link":"","text":"Clone the repo into your disk <br><strong class='code'>$ git clone git@github.com:ruanyf/react-demos.git</strong>"},{"isLink":false,"link":"","text":"Then go to your project directory using this command. <br><strong class='code'>$ cd project-directory</strong>"},{"isLink":false,"link":"","text":"After navigating to your project directory run this command to download all the node modules. <br><strong class='code'>$ npm install</strong>"},{"isLink":false,"link":"","text":"After the installation successful run this command to run the application. This command will start your react app and run it into the browser. <br><strong class='code'>$ npm start</strong>"},{"isLink":false,"link":"","text":"Hooray! Then play with the source files under the directories."},{"isLink":false,"link":"","text":"<strong>Note:</strong> After the start of the project, you have to integrate the <strong>PHP API</strong> for storing the data in the <strong>database</strong>."}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete project both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>PHP Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Application</strong>"}]},{"contentTitle":"Challenges","contentDescription":"I had only <strong>two main challenges</strong> in this project, one was the creation of a <strong>chat application between patients and doctors</strong>, and the second was the <strong>handling of two different users</strong> (Patients and Doctors) on the same panel. I used some of the online examples for <strong>chat systems</strong> and also my previous experience in other projects.","contentList":null},{"contentTitle":"Resources","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"ReactJS: Refer to <a href='https://reactjs.org/' class='text-gradient'>https://reactjs.org/</a> to understand the concepts of ReactJS."},{"isLink":false,"link":"","text":"React Bootstrap: Refer to <a class='text-gradient' href='https://react-bootstrap.github.io/getting-started/introduction/'>https://react-bootstrap.github.io/getting-started/introduction/</a> to understand how to use React Bootstrap."}]}]},{"id":4,"title":"react-native-stylish-accordion","description":"Simple Stylish React Native Accordion","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/react-native-accordion-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, TypeScript, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, TypeScript, NPM, VS Code","date":"October 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/react-native-stylish-accordion","sliderImages":[{"image":"/images/project/npm/react-native-accordion-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>react-native-stylish-accordion</strong> is a simple <strong>React Native NPM Package</strong> that can be used in your <strong>React Native Expo Version Application</strong>. It has a total of <strong>9 versions</strong>, the latest version <strong>1.0.9</strong>. The file size is only <strong>675 kB</strong>.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-native-stylish-accordion","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/react-native-stylish-accordion","text":"Link to NPM Package"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Colour"},{"isLink":false,"link":"","text":"Custom Icon"},{"isLink":false,"link":"","text":"Custom Transition Time"},{"isLink":false,"link":"","text":"Custom Icon Size"},{"isLink":false,"link":"","text":"Custom Style"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install react-native-stylish-accordion</strong> OR <strong class='code'>$ yarn add react-native-stylish-accordion</strong>"},{"isLink":false,"link":"","text":"Now we need to install react-native-reanimated and react-native-animatable. If you are using Expo, to ensure that you get the compatible versions of the libraries, run: <br><strong class='code'>$ expo install react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"If you are not using Expo, run the following: <br><strong class='code'>$ yarn add react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"<strong>Note</strong>: This is created with the help of <strong>react-native-accordion-view</strong> package."}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>title</strong> (string)"},{"isLink":false,"link":"","text":"<strong>titleStyle</strong> (TextStyle)"},{"isLink":false,"link":"","text":"<strong>iconSize</strong> (number)"},{"isLink":false,"link":"","text":"<strong>headerStyle</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>subContainerStyle</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>style</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>headerComponent</strong> (ReactNode)"},{"isLink":false,"link":"","text":"<strong>open</strong> (boolean)"},{"isLink":false,"link":"","text":"<strong>onPress</strong> (void)"},{"isLink":false,"link":"","text":"<strong>timingTransition</strong> (number default:400) opening speed"},{"isLink":false,"link":"","text":"<strong>containerRadius</strong> (number)"}]}]},{"id":5,"title":"validate-form-in-expo-style","description":"Simple form validation component with floating label for React-Native inspired by react-native-form-validator","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/validate-form-expo-style-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, NPM, VS Code","date":"November 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/validate-form-in-expo-style","sliderImages":[{"image":"/images/project/npm/validate-form-expo-style-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"ℹ️ <strong>validate-form-in-expo-style</strong> is a Simple form validation component with floating label for React-Native inspired by <a class='text-gradient' href='https://github.com/NewOldMax/react-native-validator-form' rel='nofollow'>react-native-form-validator</a>. You can add <strong>floating label</strong> with this library and can validate form. I created this package for my personal use you can use it in yours too. <br> <br> My bad, that I don't have Mac or IPhone, so this library is tested only in android. Do check it in Mac and let me know if any problem occurs.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/validate-form-in-expo-style","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/validate-form-in-expo-style","text":"Link to NPM Package"},{"isLink":true,"link":"https://youtu.be/y7bkVDu0LVA","text":"Link to Example Video"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Regexp Rules"},{"isLink":false,"link":"","text":"Custom Valid and Invalid Icon"},{"isLink":false,"link":"","text":"Custom Left Icon"},{"isLink":false,"link":"","text":"Custom Error Messages"},{"isLink":false,"link":"","text":"Custom Style"},{"isLink":false,"link":"","text":"Custom Validation"}]},{"contentTitle":"Install","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install validate-form-in-expo-style</strong> OR <strong class='code'>$ yarn add validate-form-in-expo-style</strong>"},{"isLink":false,"link":"","text":"Now we need to install react-native-reanimated and react-native-animatable. If you are using Expo, to ensure that you get the compatible versions of the libraries, run: <br><strong class='code'>$ expo install react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"If you are not using Expo, run the following: <br><strong class='code'>$ yarn add react-native-reanimated react-native-gesture-handler react-native-redash</strong>"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":true,"link":"https://www.npmjs.com/package/validate-form-in-expo-style#-how-to-use-","text":"Link to the code example"}]},{"contentTitle":"Supoorted types","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>TextInput</strong>"}]},{"contentTitle":"Default Validation Rules","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>matchRegexp</strong> (To match any regexp validation)"},{"isLink":false,"link":"","text":"<strong>isEmail</strong> (Is email is valid or not)"},{"isLink":false,"link":"","text":"<strong>isEmpty</strong> (Is field is empty or not)"},{"isLink":false,"link":"","text":"<strong>required</strong> (Is field is required or not)"},{"isLink":false,"link":"","text":"<strong>trim</strong> (Trim the value of field)"},{"isLink":false,"link":"","text":"<strong>isNumber</strong> (Is the value is number or not)"},{"isLink":false,"link":"","text":"<strong>isFloat</strong> (Is the value is float or not)"},{"isLink":false,"link":"","text":"<strong>isPositive</strong> (Is the value is positive or not)"},{"isLink":false,"link":"","text":"<strong>minNumber</strong> (Min number to be entered)"},{"isLink":false,"link":"","text":"<strong>maxNumber</strong> (Max number can be entered)"},{"isLink":false,"link":"","text":"<strong>minFloat</strong> (Min float value to be entered)"},{"isLink":false,"link":"","text":"<strong>maxFloat</strong> (Max float value can be entered)"},{"isLink":false,"link":"","text":"<strong>minStringLength</strong> (Minimum length of string to be entered)"},{"isLink":false,"link":"","text":"<strong>maxStringLength</strong> (Maximum length of string can be entered)"},{"isLink":false,"link":"","text":"<strong>isString</strong> (Is value is string or not)"},{"isLink":false,"link":"","text":"Some rules that are added in validationName can accept extra parameter for validation, like: <br> <strong class='code'><div class='highlight javascript'><pre class='editor editor-colors'><div class='line'><span class='source js'><span class='keyword operator comparison js'><span>&lt;</span></span><span>InputText</span></span></div><div class='line'><span class='source js'><span>&nbsp;&nbsp;&nbsp;</span><span class='meta brace curly js'><span>{</span></span><span class='keyword operator js'><span>...</span></span><span>otherProps</span><span class='meta brace curly js'><span>}</span></span></span></div><div class='line'><span class='source js'><span>&nbsp;&nbsp;&nbsp;validateNames</span><span class='keyword operator assignment js'><span>=</span></span><span class='meta brace curly js'><span>{</span></span><span class='meta brace square js'><span>[</span></span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>minNumber:1</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta delimiter object comma js'><span>,</span></span><span>&nbsp;</span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>maxNumber:255</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta delimiter object comma js'><span>,</span></span><span>&nbsp;</span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>matchRegexp:^[0-9]$</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta brace square js'><span>]</span></span><span class='meta brace curly js'><span>}</span></span></span></div><div class='line'><span class='source js'><span class='keyword operator js'><span>/</span></span><span class='keyword operator comparison js'><span>&gt;</span></span></span></div></pre></div></strong>"}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>Form Props</strong> <br> <table> <thead> <tr> <th>Prop</th> <th>Required</th> <th>Type</th> <th>Default value</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>onSubmit</td> <td>true</td> <td>function</td> <td></td> <td>Callback for form that fires when all validations are passed</td> </tr> <tr> <td>instantValidate</td> <td>false</td> <td>bool</td> <td>true</td> <td>If true, form will be validated after each field change. If false, form will be validated only after clicking submit button.</td> </tr> <tr> <td>onError</td> <td>false</td> <td>function</td> <td></td> <td>Callback for form that fires when some of validations are not passed. It will return array of elements which not valid.</td> </tr> <tr> <td>debounceTime</td> <td>false</td> <td>number</td> <td>0</td> <td>Debounce time for validation i.e. your validation will run after <code>debounceTime</code> ms when you stop changing your input</td> </tr> </tbody> </table>"},{"isLink":false,"link":"","text":"<strong>InputText Props</strong> <br> <table> <thead> <tr> <th>Prop</th> <th>Required</th> <th>Type</th> <th>Default value</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>true</td> <td>string</td> <td></td> <td>Name of input field</td> </tr> <tr> <td>label</td> <td>false</td> <td>string</td> <td></td> <td>Name of input Floating Label</td> </tr> <tr> <td>placeholder</td> <td>false</td> <td>string</td> <td></td> <td>Placeholder of input before any value</td> </tr> <tr> <td>validateNames</td> <td>false</td> <td>array</td> <td></td> <td>Array of validation. See list of default validation rules in above example.</td> </tr> <tr> <td>errorMessages</td> <td>false</td> <td>array</td> <td></td> <td>Array of error messages. Order of messages should be the same as <code>validateNames</code> prop.</td> </tr> <tr> <td>errorStyle</td> <td>false</td> <td>object</td> <td>{ container: { top: 0, left: 0, position: 'absolute' }, text: { color: 'red' }, underlineValidColor: 'gray', underlineInvalidColor: 'red' } }</td> <td>Add your own error styles</td> </tr> <tr> <td>validatorListener</td> <td>false</td> <td>function</td> <td></td> <td>It triggers after each validation. It will return <code>true</code> or <code>false</code></td> </tr> <tr> <td>withRequiredValidator</td> <td>false</td> <td>bool</td> <td></td> <td>Allow to use <code>required</code> validator in any validation trigger, not only form submit</td> </tr> <tr> <td>leftIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display left icon see above example</td> </tr> <tr> <td>invalidIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display error icon on right side see above example</td> </tr> <tr> <td>validIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display success icon on right side see above example</td> </tr> <tr> <td>secureTextEntry</td> <td>false</td> <td>bool</td> <td>false</td> <td>If true than show hide icon will get added automatically</td> </tr> </tbody> </table>"}]},{"contentTitle":"Methods","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>Form Methods</strong> <br> <table> <thead> <tr> <th>Name</th> <th>Params</th> <th>Return</th> <th>Descriptipon</th> </tr> </thead> <tbody> <tr> <td>resetValidations</td> <td></td> <td></td> <td>Reset validation messages for all validated inputs</td> </tr> <tr> <td>isFormValid</td> <td>dryRun: bool (default true)</td> <td>Promise</td> <td>Get form validation state in a Promise (<code>true</code> if whole form is valid). Run with <code>dryRun = false</code> to show validation errors on form</td> </tr> </tbody> </table>"},{"isLink":false,"link":"","text":"<strong>InputText Methods</strong> <br> <table> <thead> <tr> <th>Name</th> <th>Params</th> <th>Return</th> <th>Descriptipon</th> </tr> </thead> <tbody> <tr> <td>getErrorMessage</td> <td></td> <td></td> <td>Get error validation message</td> </tr> <tr> <td>validate</td> <td>value: any, includeRequired: bool</td> <td></td> <td>Run validation for current component</td> </tr> <tr> <td>isValid</td> <td></td> <td>bool</td> <td>Return current validation state</td> </tr> <tr> <td>makeInvalid</td> <td></td> <td></td> <td>Set invalid validation state</td> </tr> <tr> <td>makeValid</td> <td></td> <td></td> <td>Set valid validation state</td> </tr> </tbody> </table>"}]}]},{"id":6,"title":"react-animation-loader","description":"Simple animation loader with some css animation and an image with moving animation","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/react-animation-loader-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, CSS, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, CSS, NPM, VS Code","date":"December 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/react-animation-loader","sliderImages":[{"image":"/images/project/npm/react-animation-loader-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>react-animation-loader</strong> simple animation loader with some <strong>css animation</strong> and an image with moving animation. Check it out. It has a total of <strong>5 versions</strong>, the latest version <strong>1.0.5</strong>. The file size is only <strong>11.3 kB</strong>.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-animation-loader","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/react-animation-loader","text":"Link to NPM Package"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Colour"},{"isLink":false,"link":"","text":"Custom Image"},{"isLink":false,"link":"","text":"Custom Transition Time"},{"isLink":false,"link":"","text":"Custom Image Size"},{"isLink":false,"link":"","text":"Custom Style"}]},{"contentTitle":"Install","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install Install</strong> OR <strong class='code'>$ yarn add Install</strong>"}]},{"contentTitle":"Example","contentDescription":"","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-animation-loader#example","text":"Link to code example"}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>isLoading</strong> (bool) (required)"},{"isLink":false,"link":"","text":"<strong>bgColor</strong> (string) (required)"},{"isLink":false,"link":"","text":"<strong>icon</strong> (string)"}]}]},{"id":7,"title":"Stock Money Makers","description":"Stock Money Makers provides the best online stock market courses in india which Includes exclusive banknifty intraday course, technical analysis course, bank nifty option course, stock market courses for beginners & much more.","logo":"/images/project/smm/logo.webp","thumbnail":"/images/project/smm/smm-1.webp","gitAvailable":false,"tag":"PHP, CodeIgniter, jQuery, JavaScript, MySql, HTML5, Mobirise","technology":"PHP, CodeIgniter, jQuery, JavaScript, MySQL, HTML5, Mobirise","date":"February 2020 - March 2020","isPackage":false,"onlineLink":"https://stockmoneymakers.com/","sliderImages":[{"image":"/images/project/smm/smm-1.webp"},{"image":"/images/project/smm/smm-2.webp"},{"image":"/images/project/smm/smm-3.webp"},{"image":"/images/project/smm/smm-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Stock Market Trader/Investor/Consultancy/Financial Advisor. Stock Money Makers Team's Main Purpose Is To Help People Learn About The Stock Market.","contentList":[{"isLink":true,"link":"https://stockmoneymakers.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Admin Panel"},{"isLink":false,"link":"","text":"Paid Webinar Courses"},{"isLink":false,"link":"","text":"Blogs"},{"isLink":false,"link":"","text":"Course uploading using plupload"},{"isLink":false,"link":"","text":"Payment Gateway"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included <strong>design and development</strong> of a complete website.","contentList":[{"isLink":false,"link":"","text":"Layout, UI and UX design"},{"isLink":false,"link":"","text":"Front End Development"},{"isLink":false,"link":"","text":"Back End Development"},{"isLink":false,"link":"","text":"Integration with Google Analytics"},{"isLink":false,"link":"","text":"Responsive Design"},{"isLink":false,"link":"","text":"User Experience"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I occurred was <strong>designing and architecting</strong> the base structure of front-end. Building a web app with <strong>CodeIgniter</strong> a perfect choice for future growth and maintainability of a <strong>web application</strong>. CodeIgniter Framework made this a whole lot easier by allowing us to separate the <strong>Logic, Modules and View</strong>. One of the biggest challenges during development was uploading <strong>large video course</strong> of the web app in the back-end.","contentList":null}]},{"id":9,"title":"Bright Wood - Buy Furniture Online","description":"This project was created for one of my friend. He was my relative also so I gave me the best website to manage inventory and orders from site. In this project admin can create multiple variant of product with various type of colors and size of the product.","logo":"/images/project/bright-wood-logo.png","thumbnail":"/images/project/bright-wood-1.png","gitAvailable":false,"tag":"PHP, jQuery, JavaScript, MySql, HTML5, Razorpay","technology":"PHP, jQuery, JavaScript, MySQL, HTML5, Razorpay","date":"July 2021 - September 2021","isPackage":false,"onlineLink":"https://brightwood.in/","sliderImages":[{"image":"/images/project/bright-wood-1.png"},{"image":"/images/project/bright-wood-2.png"},{"image":"/images/project/bright-wood-3.png"},{"image":"/images/project/bright-wood-4.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Bright Wood Provide the best furniture in market, There designs are inspired by the new generation with a classic touch. Brightwood is proud to offer a wide range of solid wood furniture at great prices. Our full array of furniture includes living room, dining room, home office, bedroom, and kids furniture.","contentList":[{"isLink":true,"link":"https://brightwood.in/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Admin Panel"},{"isLink":false,"link":"","text":"Furniture Product"},{"isLink":false,"link":"","text":"Category"},{"isLink":false,"link":"","text":"Online Payment Gateway"},{"isLink":false,"link":"","text":"Filtered Product"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included <strong>design and development</strong> of a complete website.","contentList":[{"isLink":false,"link":"","text":"Layout, UI and UX design"},{"isLink":false,"link":"","text":"Front End Development"},{"isLink":false,"link":"","text":"Back End Development"},{"isLink":false,"link":"","text":"Integration with Google Analytics"},{"isLink":false,"link":"","text":"Responsive Design"},{"isLink":false,"link":"","text":"User Experience"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I occurred was <strong>designing and architecting</strong> the base structure of front-end. Building a ecommerece with <strong>PHP</strong> a perfect choice for future growth and maintainability of a <strong>web application</strong>. PHP made this a whole lot easier by allowing us to create website faster. One of the biggest challenges during development was maintaining <strong>Variants of product</strong> of the web app in the back-end.","contentList":null}]}]`),_r={experience:Pm,skills:Cm,project:Lm};function on(i,s){const l=typeof i=="object"?i:{title:i,description:s};Xe.useEffect(()=>{l.title&&(document.title=l.title);const o=(h,f)=>{if(!f)return;const k=document.querySelector(h);k&&k.setAttribute("content",f)};l.description&&(o('meta[name="description"]',l.description),o('meta[property="og:description"]',l.description),o('meta[name="twitter:description"]',l.description)),l.title&&(o('meta[property="og:title"]',l.title),o('meta[name="twitter:title"]',l.title)),l.image&&(o('meta[property="og:image"]',l.image),o('meta[name="twitter:image"]',l.image));const c=document.querySelector('link[rel="canonical"]');c&&typeof window<"u"&&c.setAttribute("href",window.location.href)},[l.description,l.image,l.title])}function jm(){const i=new Date("1998-07-26"),s=new Date;let l=s.getFullYear()-i.getFullYear();const o=s.getMonth()-i.getMonth();return(o<0||o===0&&s.getDate()<i.getDate())&&(l-=1),l}function Rm(){return on("About | Radhakishan Jangid","Experience, technical strengths, and current focus areas."),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"About"}),p.jsx("h1",{children:"Engineering depth, product focus, and shipping discipline."}),p.jsxs("p",{className:"lede",children:["I’m Radhakishan Jangid, a ",jm()," year old software engineer based in Mumbai. My work sits at the intersection of product UI, backend services, and developer-facing systems."]})]}),p.jsxs("section",{className:"info-grid",children:[p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Current position"}),p.jsxs("p",{children:["Senior Software Engineer at ",p.jsx("a",{href:"https://www.cachetech.com/",target:"_blank",rel:"noreferrer",children:"Cachetech Advisor Solutions"}),", working on fintech systems, multi-tenant workflows, and product engineering across web and mobile."]})]}),p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Working style"}),p.jsx("p",{children:"Strong on frontend architecture, pragmatic on backend delivery, and comfortable turning rough product intent into production-ready systems."})]})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading",children:[p.jsx("span",{className:"eyebrow",children:"Experience"}),p.jsx("h2",{children:"Recent roles"})]}),p.jsx("div",{className:"timeline-list",children:_r.experience.map(i=>p.jsxs("article",{className:"timeline-item",children:[p.jsxs("div",{className:"timeline-meta",children:[p.jsxs("span",{children:[i.from," to ",i.to]}),p.jsx("span",{children:i.location})]}),p.jsxs("div",{children:[p.jsx("h3",{children:i.title}),p.jsx("p",{className:"timeline-company",children:p.jsx("a",{href:i.companyLink,target:"_blank",rel:"noreferrer",children:i.companyName})}),p.jsx("p",{children:i.description})]})]},`${i.companyName}-${i.from}`))})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading",children:[p.jsx("span",{className:"eyebrow",children:"Capabilities"}),p.jsx("h2",{children:"Core skill areas"})]}),p.jsx("div",{className:"capability-grid",children:_r.skills[0].skillType.map(i=>p.jsxs("article",{className:"surface-card",children:[p.jsx("h3",{children:i.title}),p.jsx("p",{dangerouslySetInnerHTML:{__html:i.description}}),p.jsx("ul",{className:"clean-list",children:i.skillsList.map(s=>p.jsxs("li",{children:[p.jsx("strong",{children:s.skillTitle}),p.jsx("span",{children:s.skillDesc})]},s.skillTitle))})]},i.title))})]})]})}function Nm({html:i,title:s}){return p.jsx("iframe",{className:"article-detail-frame",title:s,srcDoc:i,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms"})}function Im({match:i}){const s=gd(i.params.slug);return on({title:s?`${s.title} | Articles | Radhakishan Jangid`:"Article | Radhakishan Jangid",description:s?.excerpt||"Article detail",image:s?.coverImage||"/images/500%20X%20500%20Transparent.png"}),s?s.kind==="html"?p.jsx(Nm,{html:s.raw,title:s.title}):p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"article-detail-header",children:[p.jsx(Fe,{className:"back-link",to:"/articles",children:"Back to articles"}),p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:s.kind==="html"?"HTML":"Markdown"}),p.jsx("span",{children:s.readingTime}),s.date?p.jsx("span",{children:s.date}):null]}),p.jsx("h1",{children:s.title}),p.jsx("p",{className:"lede article-lede",children:s.excerpt}),s.tags.length?p.jsx("div",{className:"tag-row",children:s.tags.map(l=>p.jsx("span",{className:"tag-chip tag-chip-static",children:l},l))}):null]}),p.jsx("article",{className:"article-prose",dangerouslySetInnerHTML:{__html:s.bodyHtml}})]}):p.jsx(Ar,{to:"/articles"})}function Am({article:i}){const s=i.coverImage?{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62)), url(${i.coverImage})`}:i.accent?{background:`linear-gradient(135deg, ${i.accent}22 0%, transparent 70%), var(--page-bg)`}:void 0;return p.jsxs("article",{className:"article-card",children:[p.jsx(Fe,{className:"article-card-preview",to:`/articles/${i.slug}`,"aria-label":`Open ${i.title}`,children:p.jsxs("div",{className:`article-card-cover${i.coverImage?" has-image":""}`,style:s,children:[p.jsxs("div",{className:"article-card-cover-top",children:[p.jsx("span",{className:"article-cover-category",children:i.category||"Article"}),p.jsx("span",{className:"article-cover-kind",children:i.kind==="html"?"HTML":"Markdown"})]}),p.jsxs("div",{className:"article-card-cover-body",children:[p.jsx("h4",{children:i.title}),p.jsx("p",{children:i.excerpt})]})]})}),p.jsxs("div",{className:"article-card-body",children:[p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:i.category||"Article"}),p.jsx("span",{children:i.readingTime}),i.date?p.jsx("span",{children:i.date}):null]}),p.jsx("h3",{children:p.jsx(Fe,{to:`/articles/${i.slug}`,children:i.title})}),p.jsx("p",{children:i.excerpt}),i.tags.length?p.jsx("div",{className:"tag-row",children:i.tags.slice(0,4).map(l=>p.jsx("button",{type:"button",className:"tag-chip tag-chip-static",children:l},l))}):null,p.jsx(Fe,{className:"inline-link",to:`/articles/${i.slug}`,children:"Open article"})]})]})}function _m(){const[i,s]=Xe.useState(""),[l,o]=Xe.useState("all"),[c,h]=Xe.useState("all"),f=hm(),k=i.trim().toLowerCase(),g=$t.filter(v=>{const C=!k||v.title.toLowerCase().includes(k)||v.excerpt.toLowerCase().includes(k),L=l==="all"||v.kind===l,D=c==="all"||v.tags.includes(c);return C&&L&&D}),w=$t.find(v=>v.featured)||$t[0];return on("Articles | Radhakishan Jangid","AI prompts, developer content systems, public write-ups, and practical technical articles."),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"articles-hero",children:[p.jsxs("div",{className:"articles-hero-copy",children:[p.jsx("span",{className:"eyebrow",children:"Articles"}),p.jsx("h1",{children:"Prompts, AI workflows, dev content, and creator systems."}),p.jsx("p",{className:"lede",children:"Better articles for AI learners, developers, and tech creators. Less filler, more useful content."}),p.jsxs("div",{className:"article-hero-stats",children:[p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:$t.length}),p.jsx("span",{children:"Published pieces"})]}),p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:f.length}),p.jsx("span",{children:"Topics covered"})]}),p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:$t.filter(v=>v.kind==="html").length}),p.jsx("span",{children:"Interactive pages"})]})]})]}),w?p.jsx(Fe,{className:"featured-article",to:`/articles/${w.slug}`,children:p.jsx("div",{className:`featured-article-media${w.coverImage?" has-image":""}`,style:w.coverImage?{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.14), rgba(0,0,0,0.7)), url(${w.coverImage})`}:void 0,children:p.jsxs("div",{className:"featured-article-inner",children:[p.jsx("span",{className:"featured-label",children:"Featured"}),p.jsx("h2",{children:w.title}),p.jsx("p",{children:w.excerpt}),p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:w.category}),p.jsx("span",{children:w.readingTime}),w.date?p.jsx("span",{children:w.date}):null]})]})})}):null]}),p.jsx("section",{className:"surface-card filter-panel",children:p.jsxs("div",{className:"filter-panel-row",children:[p.jsxs("label",{className:"search-field",children:[p.jsx("span",{children:"Search"}),p.jsx("input",{type:"search",value:i,onChange:v=>s(v.target.value),placeholder:"Search title, excerpt, or topic"})]}),p.jsxs("div",{className:"filter-group",children:[p.jsx("span",{children:"Type"}),p.jsx("div",{className:"tag-row",children:["all","markdown","html"].map(v=>p.jsx("button",{type:"button",className:`tag-chip${l===v?" is-active":""}`,onClick:()=>o(v),children:v==="all"?"All":v},v))})]}),f.length?p.jsxs("div",{className:"filter-group",children:[p.jsx("span",{children:"Tags"}),p.jsxs("div",{className:"tag-row",children:[p.jsx("button",{type:"button",className:`tag-chip${c==="all"?" is-active":""}`,onClick:()=>h("all"),children:"All"}),f.map(v=>p.jsx("button",{type:"button",className:`tag-chip${c===v?" is-active":""}`,onClick:()=>h(v),children:v},v))]})]}):null]})}),p.jsx("section",{className:"article-grid article-grid-large",children:g.map(v=>p.jsx(Am,{article:v},v.slug))})]})}var Ka={},jr={},Hu;function Om(){if(Hu)return jr;Hu=1,Object.defineProperty(jr,"__esModule",{value:!0}),jr.EmailJSResponseStatus=void 0;var i=(function(){function s(l){this.status=l.status,this.text=l.responseText}return s})();return jr.EmailJSResponseStatus=i,jr}var Rr={},$u;function Mm(){if($u)return Rr;$u=1,Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.UI=void 0;var i=(function(){function s(){}return s.clearAll=function(l){l.classList.remove(this.PROGRESS),l.classList.remove(this.DONE),l.classList.remove(this.ERROR)},s.progressState=function(l){this.clearAll(l),l.classList.add(this.PROGRESS)},s.successState=function(l){l.classList.remove(this.PROGRESS),l.classList.add(this.DONE)},s.errorState=function(l){l.classList.remove(this.PROGRESS),l.classList.add(this.ERROR)},s.PROGRESS="emailjs-sending",s.DONE="emailjs-success",s.ERROR="emailjs-error",s})();return Rr.UI=i,Rr}var Uu;function Dm(){return Uu||(Uu=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.EmailJSResponseStatus=i.sendForm=i.send=i.init=void 0;var s=Om();Object.defineProperty(i,"EmailJSResponseStatus",{enumerable:!0,get:function(){return s.EmailJSResponseStatus}});var l=Mm(),o=null,c="https://api.emailjs.com";function h(C,L,D){return D===void 0&&(D={}),new Promise(function(z,V){var Z=new XMLHttpRequest;Z.addEventListener("load",function($){var G=new s.EmailJSResponseStatus($.target);G.status===200||G.text==="OK"?z(G):V(G)}),Z.addEventListener("error",function($){V(new s.EmailJSResponseStatus($.target))}),Z.open("POST",C,!0);for(var _ in D)Z.setRequestHeader(_,D[_]);Z.send(L)})}function f(C){var L=document&&document.getElementById("g-recaptcha-response");return L&&L.value&&(C["g-recaptcha-response"]=L.value),L=null,C}function k(C){return C[0]!=="#"&&C[0]!=="."?"#"+C:C}function g(C,L){o=C,c=L||"https://api.emailjs.com"}i.init=g;function w(C,L,D,z){var V={lib_version:"2.6.4",user_id:z||o,service_id:C,template_id:L,template_params:f(D)};return h(c+"/api/v1.0/email/send",JSON.stringify(V),{"Content-type":"application/json"})}i.send=w;function v(C,L,D,z){if(typeof D=="string"&&(D=document.querySelector(k(D))),!D||D.nodeName!=="FORM")throw"Expected the HTML form element or the style selector of form";l.UI.progressState(D);var V=new FormData(D);return V.append("lib_version","2.6.4"),V.append("service_id",C),V.append("template_id",L),V.append("user_id",z||o),h(c+"/api/v1.0/email/send-form",V).then(function(Z){return l.UI.successState(D),Z},function(Z){return l.UI.errorState(D),Promise.reject(Z)})}i.sendForm=v,i.default={init:g,send:w,sendForm:v}})(Ka)),Ka}var zm=Dm();const Fm=Or(zm);function Gm(){const[i,s]=Xe.useState("idle");on("Contact | Radhakishan Jangid","Get in touch for engineering work, collaboration, and consulting.");const l=async o=>{o.preventDefault(),s("loading");try{await Fm.sendForm("service_sn6cjfe","template_ai5s6x5",o.target,"user_Di32uXdzGJ3xyE4Kjf5bJ"),s("success"),o.target.reset()}catch{s("error")}};return p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"Contact"}),p.jsx("h1",{children:"Let’s talk about product engineering, frontend systems, or independent builds."}),p.jsx("p",{className:"lede",children:"Email works best, but the form is here if you want to send project details directly from the site."})]}),p.jsxs("section",{className:"contact-grid",children:[p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Direct links"}),p.jsx("div",{className:"footer-links contact-links",children:wm.map(o=>p.jsx("a",{href:o.href,target:o.external?"_blank":void 0,rel:o.external?"noreferrer":void 0,children:o.label},o.href))})]}),p.jsxs("form",{className:"surface-card contact-form",onSubmit:l,children:[p.jsx("h2",{children:"Send a message"}),p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{name:"from_name",type:"text",placeholder:"Your name",required:!0}),p.jsx("input",{name:"from_email",type:"email",placeholder:"Your email",required:!0})]}),p.jsx("textarea",{name:"from_message",rows:"7",placeholder:"Tell me what you’re building.",required:!0}),p.jsx("button",{type:"submit",className:"button-primary",disabled:i==="loading",children:i==="loading"?"Sending...":"Send message"}),i==="success"?p.jsx("p",{className:"form-status",children:"Message sent. I’ll get back to you soon."}):null,i==="error"?p.jsx("p",{className:"form-status form-status-error",children:"Message failed to send. Email is the safer fallback."}):null]})]})]})}const Hm=new Set(["radhakishan404.github.io","radhakishan404","react-native-stylish-accordion-import"]);function yd(){const[i,s]=Xe.useState([]),[l,o]=Xe.useState(!0);return Xe.useEffect(()=>{let c=!0;async function h(){try{const k=await(await fetch("https://api.github.com/users/radhakishan404/repos?per_page=100&sort=updated")).json();if(!Array.isArray(k)||!c)return;const g=k.filter(w=>!w.fork&&!w.archived&&!Hm.has(w.name)).filter(w=>w.description||w.homepage||w.stargazers_count>0).sort((w,v)=>{const C=w.stargazers_count*5+(w.homepage?2:0),L=v.stargazers_count*5+(v.homepage?2:0);return C!==L?L-C:new Date(v.updated_at)-new Date(w.updated_at)}).slice(0,6);s(g)}catch{}finally{c&&o(!1)}}return h(),()=>{c=!1}},[]),{repos:i,loading:l}}function $m(){const i=_r.project.slice(0,4),s=$t.slice(0,3),{repos:l}=yd();return on("Radhakishan Jangid","Senior software engineer building product systems, frontend experiences, and public software projects."),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"home-hero",children:[p.jsxs("div",{className:"home-hero-copy motion-rise",children:[p.jsx("span",{className:"eyebrow",children:"Radhakishan Jangid"}),p.jsx("h1",{children:"Senior software engineer building fast, useful products."}),p.jsx("p",{className:"lede",children:"Mumbai based. Focused on React, Node.js, mobile apps, internal systems, and public-facing product builds."}),p.jsxs("div",{className:"hero-actions",children:[p.jsx(Fe,{className:"button-primary",to:"/projects",children:"View projects"}),p.jsx(Fe,{className:"button-secondary",to:"/articles",children:"Read articles"})]}),p.jsx("div",{className:"hero-stat-row",children:bm.map(o=>p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:o.value}),p.jsx("span",{children:o.label})]},o.label))})]}),p.jsxs("div",{className:"portrait-panel motion-rise motion-delay-1",children:[p.jsx("img",{src:"/images/radhakishan-web-2.jpg",alt:"Radhakishan Jangid portrait"}),p.jsxs("div",{className:"portrait-caption",children:[p.jsx("span",{children:"Current focus"}),p.jsx("strong",{children:"React interfaces, backend delivery, AI prototypes, and product execution."})]})]})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Selected work"}),p.jsx("h2",{children:"Featured projects"})]}),p.jsx(Fe,{className:"inline-link",to:"/projects",children:"All projects"})]}),p.jsx("div",{className:"project-grid",children:i.map((o,c)=>p.jsxs("article",{className:"surface-card project-card motion-rise",style:{animationDelay:`${c*90}ms`},children:[p.jsx("div",{className:"project-visual",children:p.jsx("img",{src:o.thumbnail,alt:`${o.title} preview`})}),p.jsxs("div",{className:"project-card-top",children:[p.jsx("img",{className:"project-logo",src:o.logo,alt:`${o.title} logo`}),p.jsx("span",{className:"meta-pill",children:o.date||"Case study"})]}),p.jsx("h3",{children:o.title}),p.jsx("p",{children:o.description}),p.jsx("div",{className:"tag-row",children:o.technology.split(",").slice(0,4).map(h=>p.jsx("span",{className:"tag-chip tag-chip-static",children:h.trim()},h))}),p.jsxs("div",{className:"project-card-links",children:[p.jsx(Fe,{className:"inline-link",to:`/projects/${Dr(o.title)}`,children:"Case study"}),o.onlineLink?p.jsx("a",{className:"inline-link",href:o.onlineLink,target:"_blank",rel:"noreferrer",children:"Live link"}):null]})]},o.id))})]}),l.length?p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Public work"}),p.jsx("h2",{children:"Recent GitHub projects"})]}),p.jsx("a",{className:"inline-link",href:"https://github.com/radhakishan404?tab=repositories",target:"_blank",rel:"noreferrer",children:"GitHub profile"})]}),p.jsx("div",{className:"public-grid",children:l.slice(0,3).map((o,c)=>p.jsxs("article",{className:"surface-card public-card motion-rise",style:{animationDelay:`${c*100}ms`},children:[p.jsxs("div",{className:"public-card-top",children:[p.jsx("span",{className:"meta-pill",children:"Public"}),p.jsxs("span",{className:"public-star",children:["★ ",o.stargazers_count]})]}),p.jsx("h3",{children:o.name}),p.jsx("p",{children:o.description||"Public GitHub repository."}),p.jsxs("div",{className:"project-card-links",children:[p.jsx("a",{className:"inline-link",href:o.html_url,target:"_blank",rel:"noreferrer",children:"GitHub"}),o.homepage?p.jsx("a",{className:"inline-link",href:o.homepage,target:"_blank",rel:"noreferrer",children:"Live demo"}):null]})]},o.id))})]}):null,p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Writing"}),p.jsx("h2",{children:"Recent articles"})]}),p.jsx(Fe,{className:"inline-link",to:"/articles",children:"All articles"})]}),p.jsx("div",{className:"info-grid",children:s.map((o,c)=>p.jsxs("article",{className:"surface-card compact-article-card motion-rise",style:{animationDelay:`${c*120}ms`},children:[p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:o.kind==="html"?"HTML":"Markdown"}),p.jsx("span",{children:o.readingTime})]}),p.jsx("h3",{children:o.title}),p.jsx("p",{children:o.excerpt}),p.jsx(Fe,{className:"inline-link",to:`/articles/${o.slug}`,children:"Read article"})]},o.slug))})]})]})}function Um({match:i}){const s=_r.project.find(l=>Dr(l.title)===i.params.topic);return on(s?`${s.title} | Projects | Radhakishan Jangid`:"Project | Radhakishan Jangid",s?.description||"Project detail"),s?p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx(Fe,{className:"back-link",to:"/projects",children:"Back to projects"}),p.jsx("span",{className:"eyebrow",children:"Project"}),p.jsx("h1",{children:s.title}),p.jsx("p",{className:"lede",children:s.description}),p.jsx("div",{className:"tag-row",children:s.technology.split(",").map(l=>p.jsx("span",{className:"tag-chip tag-chip-static",children:l.trim()},l))})]}),p.jsxs("section",{className:"project-detail-layout",children:[p.jsx("div",{className:"project-gallery",children:(s.sliderImages||[]).map((l,o)=>p.jsx("figure",{className:"project-shot",children:p.jsx("img",{src:l.image,alt:`${s.title} screenshot ${o+1}`})},`${s.id}-${o}`))}),p.jsxs("aside",{className:"surface-card project-sidebar",children:[s.onlineLink?p.jsx("a",{className:"button-primary button-block",href:s.onlineLink,target:"_blank",rel:"noreferrer",children:"Visit project"}):null,p.jsxs("div",{className:"sidebar-block",children:[p.jsx("span",{className:"sidebar-label",children:"Date"}),p.jsx("strong",{children:s.date||"Available on request"})]}),p.jsxs("div",{className:"sidebar-block",children:[p.jsx("span",{className:"sidebar-label",children:"Tags"}),p.jsx("p",{children:s.tag})]})]})]}),p.jsx("section",{className:"section-stack project-detail-content",children:(s.content||[]).map(l=>p.jsxs("article",{className:"surface-card",children:[p.jsx("h2",{children:l.contentTitle}),l.contentDescription?p.jsx("p",{dangerouslySetInnerHTML:{__html:l.contentDescription}}):null,l.contentList?.length?p.jsx("ul",{className:"clean-list",children:l.contentList.map(o=>p.jsx("li",{children:o.isLink?p.jsx("a",{href:o.link,target:"_blank",rel:"noreferrer",children:o.text}):p.jsx("span",{dangerouslySetInnerHTML:{__html:o.text}})},`${l.contentTitle}-${o.text}`))}):null]},l.contentTitle))})]}):p.jsx(Ar,{to:"/projects"})}function Bm(){const{repos:i,loading:s}=yd();return on("Projects | Radhakishan Jangid","Selected work across product UI, web applications, and public software tools."),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"Projects"}),p.jsx("h1",{children:"Projects across product engineering, open source, and shipped client work."}),p.jsx("p",{className:"lede",children:"A cleaner index with visuals, direct links, and detail pages where deeper context already exists."})]}),p.jsxs("section",{className:"section-stack",children:[p.jsx("div",{className:"section-heading",children:p.jsx("h2",{children:"Case studies"})}),p.jsx("div",{className:"project-grid",children:_r.project.map((l,o)=>p.jsxs("article",{className:"surface-card project-card motion-rise",style:{animationDelay:`${o*70}ms`},children:[p.jsx("div",{className:"project-visual",children:p.jsx("img",{src:l.thumbnail,alt:`${l.title} preview`})}),p.jsxs("div",{className:"project-card-top",children:[p.jsx("img",{className:"project-logo",src:l.logo,alt:`${l.title} logo`}),p.jsx("span",{className:"meta-pill",children:l.gitAvailable?"GitHub":"Project"})]}),p.jsx("h2",{children:l.title}),p.jsx("p",{children:l.description}),p.jsx("div",{className:"tag-row",children:l.tag.split(",").slice(0,4).map(c=>p.jsx("span",{className:"tag-chip tag-chip-static",children:c.trim()},c))}),p.jsxs("div",{className:"project-card-links",children:[p.jsx(Fe,{className:"inline-link",to:`/projects/${Dr(l.title)}`,children:"Read detail"}),l.onlineLink?p.jsx("a",{className:"inline-link",href:l.onlineLink,target:"_blank",rel:"noreferrer",children:"Open link"}):null]})]},l.id))})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"GitHub"}),p.jsx("h2",{children:"Public repositories"})]}),p.jsx("a",{className:"inline-link",href:"https://github.com/radhakishan404?tab=repositories",target:"_blank",rel:"noreferrer",children:"View all on GitHub"})]}),p.jsxs("div",{className:"public-grid",children:[i.map((l,o)=>p.jsxs("article",{className:"surface-card public-card motion-rise",style:{animationDelay:`${o*70}ms`},children:[p.jsxs("div",{className:"public-card-top",children:[p.jsx("span",{className:"meta-pill",children:l.language||"Code"}),p.jsxs("span",{className:"public-star",children:["★ ",l.stargazers_count]})]}),p.jsx("h3",{children:l.name}),p.jsx("p",{children:l.description||"Public GitHub repository."}),p.jsx("div",{className:"public-meta",children:p.jsxs("span",{children:["Updated ",new Date(l.updated_at).toLocaleDateString("en-US",{month:"short",year:"numeric"})]})}),p.jsxs("div",{className:"project-card-links",children:[p.jsx("a",{className:"inline-link",href:l.html_url,target:"_blank",rel:"noreferrer",children:"GitHub"}),l.homepage?p.jsx("a",{className:"inline-link",href:l.homepage,target:"_blank",rel:"noreferrer",children:"Live demo"}):null]})]},l.id)),!s&&!i.length?p.jsxs("article",{className:"surface-card public-card",children:[p.jsx("h3",{children:"Public repositories"}),p.jsx("p",{children:"GitHub data is unavailable right now. Refreshing later should bring the latest public projects back in."})]}):null]})]})]})}const Bu="G-N8PLTL59Z1";function Wm(){if(typeof window>"u"||window.gtag)return;window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)};const i=document.createElement("script");i.async=!0,i.src=`https://www.googletagmanager.com/gtag/js?id=${Bu}`,document.head.appendChild(i),window.gtag("js",new Date),window.gtag("config",Bu,{send_page_view:!1})}function Wu(i){typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.href,page_path:i.pathname+i.search,page_title:document.title})}function Vm(){const i=sh();return Xe.useEffect(()=>(Wm(),Wu(i.location),i.listen(l=>{Wu(l)})),[i]),null}function qm(){return p.jsx(Em,{children:p.jsxs(ih,{children:[p.jsx(ht,{exact:!0,path:"/",component:$m}),p.jsx(ht,{exact:!0,path:"/about",component:Rm}),p.jsx(ht,{exact:!0,path:"/projects",component:Bm}),p.jsx(ht,{exact:!0,path:"/projects/:topic",component:Um}),p.jsx(ht,{exact:!0,path:"/portfolio",render:()=>p.jsx(Ar,{to:"/projects"})}),p.jsx(ht,{exact:!0,path:"/portfolio/:topic",render:({match:i})=>p.jsx(Ar,{to:`/projects/${i.params.topic}`})}),p.jsx(ht,{exact:!0,path:"/articles",component:_m}),p.jsx(ht,{exact:!0,path:"/articles/:slug",component:Im}),p.jsx(ht,{exact:!0,path:"/contact",component:Gm}),p.jsx(ht,{render:()=>p.jsx(Ar,{to:"/"})})]})})}function Ym(){return p.jsxs(oh,{children:[p.jsx(Vm,{}),p.jsx(qm,{})]})}kf.render(p.jsx(ge.StrictMode,{children:p.jsx(Ym,{})}),document.getElementById("root"));
