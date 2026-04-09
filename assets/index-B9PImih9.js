(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function s(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(c){if(c.ep)return;c.ep=!0;const m=s(c);fetch(c.href,m)}})();function Dr(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Fi={exports:{}},Dn={};var _i,od;function ss(){if(od)return _i;od=1;var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function l(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function c(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var h={},w=0;w<10;w++)h["_"+String.fromCharCode(w)]=w;var g=Object.getOwnPropertyNames(h).map(function(v){return h[v]});if(g.join("")!=="0123456789")return!1;var b={};return"abcdefghijklmnopqrst".split("").forEach(function(v){b[v]=v}),Object.keys(Object.assign({},b)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return _i=c()?Object.assign:function(m,h){for(var w,g=l(m),b,v=1;v<arguments.length;v++){w=Object(arguments[v]);for(var A in w)o.call(w,A)&&(g[A]=w[A]);if(a){b=a(w);for(var P=0;P<b.length;P++)s.call(w,b[P])&&(g[b[P]]=w[b[P]])}}return g},_i}var zi={exports:{}},ye={};var id;function gh(){if(id)return ye;id=1;var a=ss(),o=60103,s=60106;ye.Fragment=60107,ye.StrictMode=60108,ye.Profiler=60114;var l=60109,c=60110,m=60112;ye.Suspense=60113;var h=60115,w=60116;if(typeof Symbol=="function"&&Symbol.for){var g=Symbol.for;o=g("react.element"),s=g("react.portal"),ye.Fragment=g("react.fragment"),ye.StrictMode=g("react.strict_mode"),ye.Profiler=g("react.profiler"),l=g("react.provider"),c=g("react.context"),m=g("react.forward_ref"),ye.Suspense=g("react.suspense"),h=g("react.memo"),w=g("react.lazy")}var b=typeof Symbol=="function"&&Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}function A(C){for(var D="https://reactjs.org/docs/error-decoder.html?invariant="+C,z=1;z<arguments.length;z++)D+="&args[]="+encodeURIComponent(arguments[z]);return"Minified React error #"+C+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};function _(C,D,z){this.props=C,this.context=D,this.refs=F,this.updater=z||P}_.prototype.isReactComponent={},_.prototype.setState=function(C,D){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error(A(85));this.updater.enqueueSetState(this,C,D,"setState")},_.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Y(){}Y.prototype=_.prototype;function K(C,D,z){this.props=C,this.context=D,this.refs=F,this.updater=z||P}var N=K.prototype=new Y;N.constructor=K,a(N,_.prototype),N.isPureReactComponent=!0;var H={current:null},B=Object.prototype.hasOwnProperty,ne={key:!0,ref:!0,__self:!0,__source:!0};function R(C,D,z){var G,T={},L=null,M=null;if(D!=null)for(G in D.ref!==void 0&&(M=D.ref),D.key!==void 0&&(L=""+D.key),D)B.call(D,G)&&!ne.hasOwnProperty(G)&&(T[G]=D[G]);var J=arguments.length-2;if(J===1)T.children=z;else if(1<J){for(var X=Array(J),ve=0;ve<J;ve++)X[ve]=arguments[ve+2];T.children=X}if(C&&C.defaultProps)for(G in J=C.defaultProps,J)T[G]===void 0&&(T[G]=J[G]);return{$$typeof:o,type:C,key:L,ref:M,props:T,_owner:H.current}}function U(C,D){return{$$typeof:o,type:C.type,key:D,ref:C.ref,props:C.props,_owner:C._owner}}function $(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function q(C){var D={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(z){return D[z]})}var ce=/\/+/g;function te(C,D){return typeof C=="object"&&C!==null&&C.key!=null?q(""+C.key):D.toString(36)}function de(C,D,z,G,T){var L=typeof C;(L==="undefined"||L==="boolean")&&(C=null);var M=!1;if(C===null)M=!0;else switch(L){case"string":case"number":M=!0;break;case"object":switch(C.$$typeof){case o:case s:M=!0}}if(M)return M=C,T=T(M),C=G===""?"."+te(M,0):G,Array.isArray(T)?(z="",C!=null&&(z=C.replace(ce,"$&/")+"/"),de(T,D,z,"",function(ve){return ve})):T!=null&&($(T)&&(T=U(T,z+(!T.key||M&&M.key===T.key?"":(""+T.key).replace(ce,"$&/")+"/")+C)),D.push(T)),1;if(M=0,G=G===""?".":G+":",Array.isArray(C))for(var J=0;J<C.length;J++){L=C[J];var X=G+te(L,J);M+=de(L,D,z,X,T)}else if(X=v(C),typeof X=="function")for(C=X.call(C),J=0;!(L=C.next()).done;)L=L.value,X=G+te(L,J++),M+=de(L,D,z,X,T);else if(L==="object")throw D=""+C,Error(A(31,D==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":D));return M}function ee(C,D,z){if(C==null)return C;var G=[],T=0;return de(C,G,"","",function(L){return D.call(z,L,T++)}),G}function ae(C){if(C._status===-1){var D=C._result;D=D(),C._status=0,C._result=D,D.then(function(z){C._status===0&&(z=z.default,C._status=1,C._result=z)},function(z){C._status===0&&(C._status=2,C._result=z)})}if(C._status===1)return C._result;throw C._result}var me={current:null};function se(){var C=me.current;if(C===null)throw Error(A(321));return C}var Pe={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:H,IsSomeRendererActing:{current:!1},assign:a};return ye.Children={map:ee,forEach:function(C,D,z){ee(C,function(){D.apply(this,arguments)},z)},count:function(C){var D=0;return ee(C,function(){D++}),D},toArray:function(C){return ee(C,function(D){return D})||[]},only:function(C){if(!$(C))throw Error(A(143));return C}},ye.Component=_,ye.PureComponent=K,ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pe,ye.cloneElement=function(C,D,z){if(C==null)throw Error(A(267,C));var G=a({},C.props),T=C.key,L=C.ref,M=C._owner;if(D!=null){if(D.ref!==void 0&&(L=D.ref,M=H.current),D.key!==void 0&&(T=""+D.key),C.type&&C.type.defaultProps)var J=C.type.defaultProps;for(X in D)B.call(D,X)&&!ne.hasOwnProperty(X)&&(G[X]=D[X]===void 0&&J!==void 0?J[X]:D[X])}var X=arguments.length-2;if(X===1)G.children=z;else if(1<X){J=Array(X);for(var ve=0;ve<X;ve++)J[ve]=arguments[ve+2];G.children=J}return{$$typeof:o,type:C.type,key:T,ref:L,props:G,_owner:M}},ye.createContext=function(C,D){return D===void 0&&(D=null),C={$$typeof:c,_calculateChangedBits:D,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider={$$typeof:l,_context:C},C.Consumer=C},ye.createElement=R,ye.createFactory=function(C){var D=R.bind(null,C);return D.type=C,D},ye.createRef=function(){return{current:null}},ye.forwardRef=function(C){return{$$typeof:m,render:C}},ye.isValidElement=$,ye.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:ae}},ye.memo=function(C,D){return{$$typeof:h,type:C,compare:D===void 0?null:D}},ye.useCallback=function(C,D){return se().useCallback(C,D)},ye.useContext=function(C,D){return se().useContext(C,D)},ye.useDebugValue=function(){},ye.useEffect=function(C,D){return se().useEffect(C,D)},ye.useImperativeHandle=function(C,D,z){return se().useImperativeHandle(C,D,z)},ye.useLayoutEffect=function(C,D){return se().useLayoutEffect(C,D)},ye.useMemo=function(C,D){return se().useMemo(C,D)},ye.useReducer=function(C,D,z){return se().useReducer(C,D,z)},ye.useRef=function(C){return se().useRef(C)},ye.useState=function(C){return se().useState(C)},ye.version="17.0.2",ye}var sd;function ls(){return sd||(sd=1,zi.exports=gh()),zi.exports}var ld;function vh(){if(ld)return Dn;ld=1,ss();var a=ls(),o=60103;if(Dn.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var s=Symbol.for;o=s("react.element"),Dn.Fragment=s("react.fragment")}var l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};function h(w,g,b){var v,A={},P=null,F=null;b!==void 0&&(P=""+b),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(F=g.ref);for(v in g)c.call(g,v)&&!m.hasOwnProperty(v)&&(A[v]=g[v]);if(w&&w.defaultProps)for(v in g=w.defaultProps,g)A[v]===void 0&&(A[v]=g[v]);return{$$typeof:o,type:w,key:P,ref:F,props:A,_owner:l.current}}return Dn.jsx=h,Dn.jsxs=h,Dn}var cd;function yh(){return cd||(cd=1,Fi.exports=vh()),Fi.exports}var p=yh(),Be=ls();const ge=Dr(Be);var Bi={exports:{}},Xe={},Gi={exports:{}},Hi={};var dd;function wh(){return dd||(dd=1,(function(a){var o,s,l,c;if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var h=Date,w=h.now();a.unstable_now=function(){return h.now()-w}}if(typeof window>"u"||typeof MessageChannel!="function"){var g=null,b=null,v=function(){if(g!==null)try{var T=a.unstable_now();g(!0,T),g=null}catch(L){throw setTimeout(v,0),L}};o=function(T){g!==null?setTimeout(o,0,T):(g=T,setTimeout(v,0))},s=function(T,L){b=setTimeout(T,L)},l=function(){clearTimeout(b)},a.unstable_shouldYield=function(){return!1},c=a.unstable_forceFrameRate=function(){}}else{var A=window.setTimeout,P=window.clearTimeout;if(typeof console<"u"){var F=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof F!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var _=!1,Y=null,K=-1,N=5,H=0;a.unstable_shouldYield=function(){return a.unstable_now()>=H},c=function(){},a.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<T?Math.floor(1e3/T):5};var B=new MessageChannel,ne=B.port2;B.port1.onmessage=function(){if(Y!==null){var T=a.unstable_now();H=T+N;try{Y(!0,T)?ne.postMessage(null):(_=!1,Y=null)}catch(L){throw ne.postMessage(null),L}}else _=!1},o=function(T){Y=T,_||(_=!0,ne.postMessage(null))},s=function(T,L){K=A(function(){T(a.unstable_now())},L)},l=function(){P(K),K=-1}}function R(T,L){var M=T.length;T.push(L);e:for(;;){var J=M-1>>>1,X=T[J];if(X!==void 0&&0<q(X,L))T[J]=L,T[M]=X,M=J;else break e}}function U(T){return T=T[0],T===void 0?null:T}function $(T){var L=T[0];if(L!==void 0){var M=T.pop();if(M!==L){T[0]=M;e:for(var J=0,X=T.length;J<X;){var ve=2*(J+1)-1,ke=T[ve],Re=ve+1,We=T[Re];if(ke!==void 0&&0>q(ke,M))We!==void 0&&0>q(We,ke)?(T[J]=We,T[Re]=M,J=Re):(T[J]=ke,T[ve]=M,J=ve);else if(We!==void 0&&0>q(We,M))T[J]=We,T[Re]=M,J=Re;else break e}}return L}return null}function q(T,L){var M=T.sortIndex-L.sortIndex;return M!==0?M:T.id-L.id}var ce=[],te=[],de=1,ee=null,ae=3,me=!1,se=!1,Pe=!1;function C(T){for(var L=U(te);L!==null;){if(L.callback===null)$(te);else if(L.startTime<=T)$(te),L.sortIndex=L.expirationTime,R(ce,L);else break;L=U(te)}}function D(T){if(Pe=!1,C(T),!se)if(U(ce)!==null)se=!0,o(z);else{var L=U(te);L!==null&&s(D,L.startTime-T)}}function z(T,L){se=!1,Pe&&(Pe=!1,l()),me=!0;var M=ae;try{for(C(L),ee=U(ce);ee!==null&&(!(ee.expirationTime>L)||T&&!a.unstable_shouldYield());){var J=ee.callback;if(typeof J=="function"){ee.callback=null,ae=ee.priorityLevel;var X=J(ee.expirationTime<=L);L=a.unstable_now(),typeof X=="function"?ee.callback=X:ee===U(ce)&&$(ce),C(L)}else $(ce);ee=U(ce)}if(ee!==null)var ve=!0;else{var ke=U(te);ke!==null&&s(D,ke.startTime-L),ve=!1}return ve}finally{ee=null,ae=M,me=!1}}var G=c;a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(T){T.callback=null},a.unstable_continueExecution=function(){se||me||(se=!0,o(z))},a.unstable_getCurrentPriorityLevel=function(){return ae},a.unstable_getFirstCallbackNode=function(){return U(ce)},a.unstable_next=function(T){switch(ae){case 1:case 2:case 3:var L=3;break;default:L=ae}var M=ae;ae=L;try{return T()}finally{ae=M}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=G,a.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=ae;ae=T;try{return L()}finally{ae=M}},a.unstable_scheduleCallback=function(T,L,M){var J=a.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,T){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=M+X,T={id:de++,callback:L,priorityLevel:T,startTime:M,expirationTime:X,sortIndex:-1},M>J?(T.sortIndex=M,R(te,T),U(ce)===null&&T===U(te)&&(Pe?l():Pe=!0,s(D,M-J))):(T.sortIndex=X,R(ce,T),se||me||(se=!0,o(z))),T},a.unstable_wrapCallback=function(T){var L=ae;return function(){var M=ae;ae=L;try{return T.apply(this,arguments)}finally{ae=M}}}})(Hi)),Hi}var ud;function bh(){return ud||(ud=1,Gi.exports=wh()),Gi.exports}var pd;function xh(){if(pd)return Xe;pd=1;var a=ls(),o=ss(),s=bh();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!a)throw Error(l(227));var c=new Set,m={};function h(e,t){w(e,t),w(e+"Capture",t)}function w(e,t){for(m[e]=t,e=0;e<t.length;e++)c.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v=Object.prototype.hasOwnProperty,A={},P={};function F(e){return v.call(P,e)?!0:v.call(A,e)?!1:b.test(e)?P[e]=!0:(A[e]=!0,!1)}function _(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,t,n,r){if(t===null||typeof t>"u"||_(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,i,d,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=u}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];N[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function B(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(H,B);N[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(H,B);N[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(H,B);N[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,r){var i=N.hasOwnProperty(t)?N[t]:null,d=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");d||(Y(t,n,i,r)&&(n=null),r||i===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var R=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=60103,$=60106,q=60107,ce=60108,te=60114,de=60109,ee=60110,ae=60112,me=60113,se=60120,Pe=60115,C=60116,D=60121,z=60128,G=60129,T=60130,L=60131;if(typeof Symbol=="function"&&Symbol.for){var M=Symbol.for;U=M("react.element"),$=M("react.portal"),q=M("react.fragment"),ce=M("react.strict_mode"),te=M("react.profiler"),de=M("react.provider"),ee=M("react.context"),ae=M("react.forward_ref"),me=M("react.suspense"),se=M("react.suspense_list"),Pe=M("react.memo"),C=M("react.lazy"),D=M("react.block"),M("react.scope"),z=M("react.opaque.id"),G=M("react.debug_trace_mode"),T=M("react.offscreen"),L=M("react.legacy_hidden")}var J=typeof Symbol=="function"&&Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var ve;function ke(e){if(ve===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||""}return`
`+ve+e}var Re=!1;function We(e,t){if(!e||Re)return"";Re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),d=r.stack.split(`
`),u=i.length-1,f=d.length-1;1<=u&&0<=f&&i[u]!==d[f];)f--;for(;1<=u&&0<=f;u--,f--)if(i[u]!==d[f]){if(u!==1||f!==1)do if(u--,f--,0>f||i[u]!==d[f])return`
`+i[u].replace(" at new "," at ");while(1<=u&&0<=f);break}}}finally{Re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ke(e):""}function Cu(e){switch(e.tag){case 5:return ke(e.type);case 16:return ke("Lazy");case 13:return ke("Suspense");case 19:return ke("SuspenseList");case 0:case 2:case 15:return e=We(e.type,!1),e;case 11:return e=We(e.type.render,!1),e;case 22:return e=We(e.type._render,!1),e;case 1:return e=We(e.type,!0),e;default:return""}}function ln(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case $:return"Portal";case te:return"Profiler";case ce:return"StrictMode";case me:return"Suspense";case se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case de:return(e._context.displayName||"Context")+".Provider";case ae:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Pe:return ln(e.type);case D:return ln(e._render);case C:t=e._payload,e=e._init;try{return ln(e(t))}catch{}}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tu(e){var t=Ts(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){r=""+u,d.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=Tu(e))}function Es(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ts(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,t){var n=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function As(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ps(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Qa(e,t){Ps(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ka(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ka(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ka(e,t,n){(t!=="number"||zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Eu(e){var t="";return a.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Xa(e,t){return e=o({children:void 0},t),(t=Eu(t.children))&&(e.children=t),e}function cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Za(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ls(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Rs(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function js(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var eo={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function Ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function to(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,Ns=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!==eo.svg||"innerHTML"in e)e.innerHTML=t;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Au=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Au.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Ds(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Os(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ds(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Pu=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,t){if(t){if(Pu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function ro(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,dn=null,un=null;function Fs(e){if(e=ar(e)){if(typeof oo!="function")throw Error(l(280));var t=e.stateNode;t&&(t=aa(t),oo(e.stateNode,e.type,t))}}function _s(e){dn?un?un.push(e):un=[e]:dn=e}function zs(){if(dn){var e=dn,t=un;if(un=dn=null,Fs(e),t)for(e=0;e<t.length;e++)Fs(t[e])}}function io(e,t){return e(t)}function Bs(e,t,n,r,i){return e(t,n,r,i)}function so(){}var Gs=io,qt=!1,lo=!1;function co(){(dn!==null||un!==null)&&(so(),zs())}function Iu(e,t,n){if(lo)return e(t,n);lo=!0;try{return Gs(e,t,n)}finally{lo=!1,co()}}function Bn(e,t){var n=e.stateNode;if(n===null)return null;var r=aa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var uo=!1;if(g)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){uo=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{uo=!1}function Lu(e,t,n,r,i,d,u,f,y){var E=Array.prototype.slice.call(arguments,3);try{t.apply(n,E)}catch(W){this.onError(W)}}var Hn=!1,Gr=null,Hr=!1,po=null,Ru={onError:function(e){Hn=!0,Gr=e}};function ju(e,t,n,r,i,d,u,f,y){Hn=!1,Gr=null,Lu.apply(Ru,arguments)}function Mu(e,t,n,r,i,d,u,f,y){if(ju.apply(this,arguments),Hn){if(Hn){var E=Gr;Hn=!1,Gr=null}else throw Error(l(198));Hr||(Hr=!0,po=E)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Us(e){if(Yt(e)!==e)throw Error(l(188))}function Nu(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var d=i.alternate;if(d===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===d.child){for(d=i.child;d;){if(d===n)return Us(i),e;if(d===r)return Us(i),t;d=d.sibling}throw Error(l(188))}if(n.return!==r.return)n=i,r=d;else{for(var u=!1,f=i.child;f;){if(f===n){u=!0,n=i,r=d;break}if(f===r){u=!0,r=i,n=d;break}f=f.sibling}if(!u){for(f=d.child;f;){if(f===n){u=!0,n=d,r=i;break}if(f===r){u=!0,r=d,n=i;break}f=f.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Ws(e){if(e=Nu(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function qs(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Ys,ho,$s,Vs,mo=!1,lt=[],St=null,Ct=null,Tt=null,Un=new Map,Wn=new Map,qn=[],Js="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fo(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Qs(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Yn(e,t,n,r,i,d){return e===null||e.nativeEvent!==d?(e=fo(t,n,r,i,d),t!==null&&(t=ar(t),t!==null&&ho(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Du(e,t,n,r,i){switch(t){case"focusin":return St=Yn(St,e,t,n,r,i),!0;case"dragenter":return Ct=Yn(Ct,e,t,n,r,i),!0;case"mouseover":return Tt=Yn(Tt,e,t,n,r,i),!0;case"pointerover":var d=i.pointerId;return Un.set(d,Yn(Un.get(d)||null,e,t,n,r,i)),!0;case"gotpointercapture":return d=i.pointerId,Wn.set(d,Yn(Wn.get(d)||null,e,t,n,r,i)),!0}return!1}function Ou(e){var t=$t(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Hs(n),t!==null){e.blockedOn=t,Vs(e.lanePriority,function(){s.unstable_runWithPriority(e.priority,function(){$s(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=ar(n),t!==null&&ho(t),e.blockedOn=n,!1;t.shift()}return!0}function Ks(e,t,n){Ur(e)&&n.delete(t)}function Fu(){for(mo=!1;0<lt.length;){var e=lt[0];if(e.blockedOn!==null){e=ar(e.blockedOn),e!==null&&Ys(e);break}for(var t=e.targetContainers;0<t.length;){var n=xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&lt.shift()}St!==null&&Ur(St)&&(St=null),Ct!==null&&Ur(Ct)&&(Ct=null),Tt!==null&&Ur(Tt)&&(Tt=null),Un.forEach(Ks),Wn.forEach(Ks)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,mo||(mo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Fu)))}function Xs(e){function t(i){return $n(i,e)}if(0<lt.length){$n(lt[0],e);for(var n=1;n<lt.length;n++){var r=lt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&$n(St,e),Ct!==null&&$n(Ct,e),Tt!==null&&$n(Tt,e),Un.forEach(t),Wn.forEach(t),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Ou(n),n.blockedOn===null&&qn.shift()}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},go={},Zs={};g&&(Zs=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function qr(e){if(go[e])return go[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zs)return go[e]=t[n];return e}var el=qr("animationend"),tl=qr("animationiteration"),nl=qr("animationstart"),rl=qr("transitionend"),al=new Map,vo=new Map,_u=["abort","abort",el,"animationEnd",tl,"animationIteration",nl,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",rl,"transitionEnd","waiting","waiting"];function yo(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),vo.set(r,t),al.set(r,i),h(i,[r])}}var zu=s.unstable_now;zu();var Se=8;function hn(e){if((1&e)!==0)return Se=15,1;if((2&e)!==0)return Se=14,2;if((4&e)!==0)return Se=13,4;var t=24&e;return t!==0?(Se=12,t):(e&32)!==0?(Se=11,32):(t=192&e,t!==0?(Se=10,t):(e&256)!==0?(Se=9,256):(t=3584&e,t!==0?(Se=8,t):(e&4096)!==0?(Se=7,4096):(t=4186112&e,t!==0?(Se=6,t):(t=62914560&e,t!==0?(Se=5,t):e&67108864?(Se=4,67108864):(e&134217728)!==0?(Se=3,134217728):(t=805306368&e,t!==0?(Se=2,t):(1073741824&e)!==0?(Se=1,1073741824):(Se=8,e))))))}function Bu(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Gu(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(l(358,e))}}function Vn(e,t){var n=e.pendingLanes;if(n===0)return Se=0;var r=0,i=0,d=e.expiredLanes,u=e.suspendedLanes,f=e.pingedLanes;if(d!==0)r=d,i=Se=15;else if(d=n&134217727,d!==0){var y=d&~u;y!==0?(r=hn(y),i=Se):(f&=d,f!==0&&(r=hn(f),i=Se))}else d=n&~u,d!==0?(r=hn(d),i=Se):f!==0&&(r=hn(f),i=Se);if(r===0)return 0;if(r=31-Et(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&u)===0){if(hn(t),i<=Se)return t;Se=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),i=1<<n,r|=e[n],t&=~i;return r}function ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yr(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=mn(24&~t),e===0?Yr(10,t):e;case 10:return e=mn(192&~t),e===0?Yr(8,t):e;case 8:return e=mn(3584&~t),e===0&&(e=mn(4186112&~t),e===0&&(e=512)),e;case 2:return t=mn(805306368&~t),t===0&&(t=268435456),t}throw Error(l(358,e))}function mn(e){return e&-e}function wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-Et(t),e[t]=n}var Et=Math.clz32?Math.clz32:Wu,Hu=Math.log,Uu=Math.LN2;function Wu(e){return e===0?32:31-(Hu(e)/Uu|0)|0}var qu=s.unstable_UserBlockingPriority,Yu=s.unstable_runWithPriority,Vr=!0;function $u(e,t,n,r){qt||so();var i=bo,d=qt;qt=!0;try{Bs(i,e,t,n,r)}finally{(qt=d)||co()}}function Vu(e,t,n,r){Yu(qu,bo.bind(null,e,t,n,r))}function bo(e,t,n,r){if(Vr){var i;if((i=(t&4)===0)&&0<lt.length&&-1<Js.indexOf(e))e=fo(null,e,t,n,r),lt.push(e);else{var d=xo(e,t,n,r);if(d===null)i&&Qs(e,r);else{if(i){if(-1<Js.indexOf(e)){e=fo(d,e,t,n,r),lt.push(e);return}if(Du(d,e,t,n,r))return;Qs(e,r)}Nl(e,t,r,null,n)}}}}function xo(e,t,n,r){var i=ao(r);if(i=$t(i),i!==null){var d=Yt(i);if(d===null)i=null;else{var u=d.tag;if(u===13){if(i=Hs(d),i!==null)return i;i=null}else if(u===3){if(d.stateNode.hydrate)return d.tag===3?d.stateNode.containerInfo:null;i=null}else d!==i&&(i=null)}}return Nl(e,t,r,i,n),null}var At=null,ko=null,Jr=null;function il(){if(Jr)return Jr;var e,t=ko,n=t.length,r,i="value"in At?At.value:At.textContent,d=i.length;for(e=0;e<n&&t[e]===i[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===i[d-r];r++);return Jr=i.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function sl(){return!1}function Qe(e){function t(n,r,i,d,u){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=d,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(d):d[f]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Kr:sl,this.isPropagationStopped=sl,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=Qe(fn),Jn=o({},fn,{view:0,detail:0}),Ju=Qe(Jn),Co,To,Qn,Xr=o({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Co=e.screenX-Qn.screenX,To=e.screenY-Qn.screenY):To=Co=0,Qn=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:To}}),ll=Qe(Xr),Qu=o({},Xr,{dataTransfer:0}),Ku=Qe(Qu),Xu=o({},Jn,{relatedTarget:0}),Eo=Qe(Xu),Zu=o({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),ep=Qe(Zu),tp=o({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),np=Qe(tp),rp=o({},fn,{data:0}),cl=Qe(rp),ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ip[e])?!!t[e]:!1}function Ao(){return sp}var lp=o({},Jn,{key:function(e){if(e.key){var t=ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?op[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cp=Qe(lp),dp=o({},Xr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dl=Qe(dp),up=o({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),pp=Qe(up),hp=o({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),mp=Qe(hp),fp=o({},Xr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gp=Qe(fp),vp=[9,13,27,32],Po=g&&"CompositionEvent"in window,Kn=null;g&&"documentMode"in document&&(Kn=document.documentMode);var yp=g&&"TextEvent"in window&&!Kn,ul=g&&(!Po||Kn&&8<Kn&&11>=Kn),pl=" ",hl=!1;function ml(e,t){switch(e){case"keyup":return vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function wp(e,t){switch(e){case"compositionend":return fl(t);case"keypress":return t.which!==32?null:(hl=!0,pl);case"textInput":return e=t.data,e===pl&&hl?null:e;default:return null}}function bp(e,t){if(gn)return e==="compositionend"||!Po&&ml(e,t)?(e=il(),Jr=ko=At=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ul&&t.locale!=="ko"?null:t.data;default:return null}}var xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xp[e.type]:t==="textarea"}function vl(e,t,n,r){_s(r),t=ea(t,"onChange"),0<t.length&&(n=new So("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,Zn=null;function kp(e){Il(e,0)}function Zr(e){var t=xn(e);if(Es(t))return e}function Sp(e,t){if(e==="change")return t}var yl=!1;if(g){var Io;if(g){var Lo="oninput"in document;if(!Lo){var wl=document.createElement("div");wl.setAttribute("oninput","return;"),Lo=typeof wl.oninput=="function"}Io=Lo}else Io=!1;yl=Io&&(!document.documentMode||9<document.documentMode)}function bl(){Xn&&(Xn.detachEvent("onpropertychange",xl),Zn=Xn=null)}function xl(e){if(e.propertyName==="value"&&Zr(Zn)){var t=[];if(vl(t,Zn,e,ao(e)),e=kp,qt)e(t);else{qt=!0;try{io(e,t)}finally{qt=!1,co()}}}}function Cp(e,t,n){e==="focusin"?(bl(),Xn=t,Zn=n,Xn.attachEvent("onpropertychange",xl)):e==="focusout"&&bl()}function Tp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zr(Zn)}function Ep(e,t){if(e==="click")return Zr(t)}function Ap(e,t){if(e==="input"||e==="change")return Zr(t)}function Pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Pp,Ip=Object.prototype.hasOwnProperty;function er(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Ip.call(t,n[r])||!Ze(e[n[r]],t[n[r]]))return!1;return!0}function kl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sl(e,t){var n=kl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kl(n)}}function Cl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tl(){for(var e=window,t=zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zr(e.document)}return t}function Ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lp=g&&"documentMode"in document&&11>=document.documentMode,vn=null,jo=null,tr=null,Mo=!1;function El(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mo||vn==null||vn!==zr(r)||(r=vn,"selectionStart"in r&&Ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&er(tr,r)||(tr=r,r=ea(jo,"onSelect"),0<r.length&&(t=new So("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}yo("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),yo("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),yo(_u,2);for(var Al="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),No=0;No<Al.length;No++)vo.set(Al[No],0);w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function Pl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mu(r,t,void 0,e),e.currentTarget=null}function Il(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var d=void 0;if(t)for(var u=r.length-1;0<=u;u--){var f=r[u],y=f.instance,E=f.currentTarget;if(f=f.listener,y!==d&&i.isPropagationStopped())break e;Pl(i,f,E),d=y}else for(u=0;u<r.length;u++){if(f=r[u],y=f.instance,E=f.currentTarget,f=f.listener,y!==d&&i.isPropagationStopped())break e;Pl(i,f,E),d=y}}}if(Hr)throw e=po,Hr=!1,po=null,e}function Ce(e,t){var n=Bl(t),r=e+"__bubble";n.has(r)||(Ml(t,e,2,!1),n.add(r))}var Ll="_reactListening"+Math.random().toString(36).slice(2);function Rl(e){e[Ll]||(e[Ll]=!0,c.forEach(function(t){Rp.has(t)||jl(t,!1,e,null),jl(t,!0,e,null)}))}function jl(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,d=n;e==="selectionchange"&&n.nodeType!==9&&(d=n.ownerDocument);var u=Bl(d),f=e+"__"+(t?"capture":"bubble");u.has(f)||(t&&(i|=4),Ml(d,e,i,t),u.add(f))}function Ml(e,t,n,r){var i=vo.get(t);switch(i===void 0?2:i){case 0:i=$u;break;case 1:i=Vu;break;default:i=bo}n=i.bind(null,t,n,e),i=void 0,!uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,i){var d=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var f=r.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(u===4)for(u=r.return;u!==null;){var y=u.tag;if((y===3||y===4)&&(y=u.stateNode.containerInfo,y===i||y.nodeType===8&&y.parentNode===i))return;u=u.return}for(;f!==null;){if(u=$t(f),u===null)return;if(y=u.tag,y===5||y===6){r=d=u;continue e}f=f.parentNode}}r=r.return}Iu(function(){var E=d,W=ao(n),le=[];e:{var O=al.get(e);if(O!==void 0){var Z=So,ie=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":Z=cp;break;case"focusin":ie="focus",Z=Eo;break;case"focusout":ie="blur",Z=Eo;break;case"beforeblur":case"afterblur":Z=Eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ll;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Ku;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=pp;break;case el:case tl:case nl:Z=ep;break;case rl:Z=mp;break;case"scroll":Z=Ju;break;case"wheel":Z=gp;break;case"copy":case"cut":case"paste":Z=np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=dl}var re=(t&4)!==0,S=!re&&e==="scroll",x=re?O!==null?O+"Capture":null:O;re=[];for(var k=E,I;k!==null;){I=k;var j=I.stateNode;if(I.tag===5&&j!==null&&(I=j,x!==null&&(j=Bn(k,x),j!=null&&re.push(rr(k,j,I)))),S)break;k=k.return}0<re.length&&(O=new Z(O,ie,null,n,W),le.push({event:O,listeners:re}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",O&&(t&16)===0&&(ie=n.relatedTarget||n.fromElement)&&($t(ie)||ie[bn]))break e;if((Z||O)&&(O=W.window===W?W:(O=W.ownerDocument)?O.defaultView||O.parentWindow:window,Z?(ie=n.relatedTarget||n.toElement,Z=E,ie=ie?$t(ie):null,ie!==null&&(S=Yt(ie),ie!==S||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(Z=null,ie=E),Z!==ie)){if(re=ll,j="onMouseLeave",x="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(re=dl,j="onPointerLeave",x="onPointerEnter",k="pointer"),S=Z==null?O:xn(Z),I=ie==null?O:xn(ie),O=new re(j,k+"leave",Z,n,W),O.target=S,O.relatedTarget=I,j=null,$t(W)===E&&(re=new re(x,k+"enter",ie,n,W),re.target=I,re.relatedTarget=S,j=re),S=j,Z&&ie)t:{for(re=Z,x=ie,k=0,I=re;I;I=yn(I))k++;for(I=0,j=x;j;j=yn(j))I++;for(;0<k-I;)re=yn(re),k--;for(;0<I-k;)x=yn(x),I--;for(;k--;){if(re===x||x!==null&&re===x.alternate)break t;re=yn(re),x=yn(x)}re=null}else re=null;Z!==null&&Dl(le,O,Z,re,!1),ie!==null&&S!==null&&Dl(le,S,ie,re,!0)}}e:{if(O=E?xn(E):window,Z=O.nodeName&&O.nodeName.toLowerCase(),Z==="select"||Z==="input"&&O.type==="file")var ue=Sp;else if(gl(O))if(yl)ue=Ap;else{ue=Tp;var Q=Cp}else(Z=O.nodeName)&&Z.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(ue=Ep);if(ue&&(ue=ue(e,E))){vl(le,ue,n,W);break e}Q&&Q(e,O,E),e==="focusout"&&(Q=O._wrapperState)&&Q.controlled&&O.type==="number"&&Ka(O,"number",O.value)}switch(Q=E?xn(E):window,e){case"focusin":(gl(Q)||Q.contentEditable==="true")&&(vn=Q,jo=E,tr=null);break;case"focusout":tr=jo=vn=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,El(le,n,W);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":El(le,n,W)}var pe;if(Po)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else gn?ml(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(ul&&n.locale!=="ko"&&(gn||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&gn&&(pe=il()):(At=W,ko="value"in At?At.value:At.textContent,gn=!0)),Q=ea(E,fe),0<Q.length&&(fe=new cl(fe,e,null,n,W),le.push({event:fe,listeners:Q}),pe?fe.data=pe:(pe=fl(n),pe!==null&&(fe.data=pe)))),(pe=yp?wp(e,n):bp(e,n))&&(E=ea(E,"onBeforeInput"),0<E.length&&(W=new cl("onBeforeInput","beforeinput",null,n,W),le.push({event:W,listeners:E}),W.data=pe))}Il(le,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,d=i.stateNode;i.tag===5&&d!==null&&(i=d,d=Bn(e,n),d!=null&&r.unshift(rr(e,d,i)),d=Bn(e,t),d!=null&&r.push(rr(e,d,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dl(e,t,n,r,i){for(var d=t._reactName,u=[];n!==null&&n!==r;){var f=n,y=f.alternate,E=f.stateNode;if(y!==null&&y===r)break;f.tag===5&&E!==null&&(f=E,i?(y=Bn(n,d),y!=null&&u.unshift(rr(n,y,f))):i||(y=Bn(n,d),y!=null&&u.push(rr(n,y,f)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}function ta(){}var Do=null,Oo=null;function Ol(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Fo(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,jp=typeof clearTimeout=="function"?clearTimeout:void 0;function _o(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function _l(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zo=0;function Mp(e){return{$$typeof:z,toString:e,valueOf:e}}var na=Math.random().toString(36).slice(2),Pt="__reactFiber$"+na,ra="__reactProps$"+na,bn="__reactContainer$"+na,zl="__reactEvents$"+na;function $t(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_l(e);e!==null;){if(n=e[Pt])return n;e=_l(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Pt]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function aa(e){return e[ra]||null}function Bl(e){var t=e[zl];return t===void 0&&(t=e[zl]=new Set),t}var Bo=[],kn=-1;function It(e){return{current:e}}function Te(e){0>kn||(e.current=Bo[kn],Bo[kn]=null,kn--)}function Ee(e,t){kn++,Bo[kn]=e.current,e.current=t}var Lt={},De=It(Lt),qe=It(!1),Vt=Lt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},d;for(d in n)i[d]=t[d];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function oa(){Te(qe),Te(De)}function Gl(e,t,n){if(De.current!==Lt)throw Error(l(168));Ee(De,t),Ee(qe,n)}function Hl(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(l(108,ln(t)||"Unknown",i));return o({},n,r)}function ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Vt=De.current,Ee(De,e),Ee(qe,qe.current),!0}function Ul(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=Hl(e,t,Vt),r.__reactInternalMemoizedMergedChildContext=e,Te(qe),Te(De),Ee(De,e)):Te(qe),Ee(qe,n)}var Go=null,Jt=null,Np=s.unstable_runWithPriority,Ho=s.unstable_scheduleCallback,Uo=s.unstable_cancelCallback,Dp=s.unstable_shouldYield,Wl=s.unstable_requestPaint,Wo=s.unstable_now,Op=s.unstable_getCurrentPriorityLevel,sa=s.unstable_ImmediatePriority,ql=s.unstable_UserBlockingPriority,Yl=s.unstable_NormalPriority,$l=s.unstable_LowPriority,Vl=s.unstable_IdlePriority,qo={},Fp=Wl!==void 0?Wl:function(){},vt=null,la=null,Yo=!1,Jl=Wo(),Oe=1e4>Jl?Wo:function(){return Wo()-Jl};function Cn(){switch(Op()){case sa:return 99;case ql:return 98;case Yl:return 97;case $l:return 96;case Vl:return 95;default:throw Error(l(332))}}function Ql(e){switch(e){case 99:return sa;case 98:return ql;case 97:return Yl;case 96:return $l;case 95:return Vl;default:throw Error(l(332))}}function Qt(e,t){return e=Ql(e),Np(e,t)}function or(e,t,n){return e=Ql(e),Ho(e,t,n)}function ct(){if(la!==null){var e=la;la=null,Uo(e)}Kl()}function Kl(){if(!Yo&&vt!==null){Yo=!0;var e=0;try{var t=vt;Qt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),vt=null}catch(n){throw vt!==null&&(vt=vt.slice(e+1)),Ho(sa,ct),n}finally{Yo=!1}}}var _p=R.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=o({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ca=It(null),da=null,Tn=null,ua=null;function $o(){ua=Tn=da=null}function Vo(e){var t=ca.current;Te(ca),e.type._context._currentValue=t}function Xl(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function En(e,t){da=e,ua=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function et(e,t){if(ua!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(ua=e,t=1073741823),t={context:e,observedBits:t,next:null},Tn===null){if(da===null)throw Error(l(308));Tn=t,da.dependencies={lanes:0,firstContext:t,responders:null}}else Tn=Tn.next=t;return e._currentValue}var Rt=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Zl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?i=d=u:d=d.next=u,n=n.next}while(n!==null);d===null?i=d=t:d=d.next=t}else i=d=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:d,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ir(e,t,n,r){var i=e.updateQueue;Rt=!1;var d=i.firstBaseUpdate,u=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var y=f,E=y.next;y.next=null,u===null?d=E:u.next=E,u=y;var W=e.alternate;if(W!==null){W=W.updateQueue;var le=W.lastBaseUpdate;le!==u&&(le===null?W.firstBaseUpdate=E:le.next=E,W.lastBaseUpdate=y)}}if(d!==null){le=i.baseState,u=0,W=E=y=null;do{f=d.lane;var O=d.eventTime;if((r&f)===f){W!==null&&(W=W.next={eventTime:O,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var Z=e,ie=d;switch(f=t,O=n,ie.tag){case 1:if(Z=ie.payload,typeof Z=="function"){le=Z.call(O,le,f);break e}le=Z;break e;case 3:Z.flags=Z.flags&-4097|64;case 0:if(Z=ie.payload,f=typeof Z=="function"?Z.call(O,le,f):Z,f==null)break e;le=o({},le,f);break e;case 2:Rt=!0}}d.callback!==null&&(e.flags|=32,f=i.effects,f===null?i.effects=[d]:f.push(d))}else O={eventTime:O,lane:f,tag:d.tag,payload:d.payload,callback:d.callback,next:null},W===null?(E=W=O,y=le):W=W.next=O,u|=f;if(d=d.next,d===null){if(f=i.shared.pending,f===null)break;d=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);W===null&&(y=le),i.baseState=y,i.firstBaseUpdate=E,i.lastBaseUpdate=W,yr|=u,e.lanes=u,e.memoizedState=le}}function tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(l(191,i));i.call(r)}}}var nc=new a.Component().refs;function pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:o({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ha={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Ot(e),d=jt(r,i);d.payload=t,n!=null&&(d.callback=n),Mt(e,d),Ft(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Ot(e),d=jt(r,i);d.tag=1,d.payload=t,n!=null&&(d.callback=n),Mt(e,d),Ft(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Ot(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),Mt(e,i),Ft(e,r,n)}};function rc(e,t,n,r,i,d,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,d,u):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(i,d):!0}function ac(e,t,n){var r=!1,i=Lt,d=t.contextType;return typeof d=="object"&&d!==null?d=et(d):(i=Ye(t)?Vt:De.current,r=t.contextTypes,d=(r=r!=null)?Sn(e,i):Lt),t=new t(n,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ha,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=d),t}function oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ha.enqueueReplaceState(t,t.state,null)}function Qo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=nc,Jo(e);var d=t.contextType;typeof d=="object"&&d!==null?i.context=et(d):(d=Ye(t)?Vt:De.current,i.context=Sn(e,d)),ir(e,n,i,r),i.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(pa(e,t,d,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ha.enqueueReplaceState(i,i.state,null),ir(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var ma=Array.isArray;function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(d){var u=r.refs;u===nc&&(u=r.refs={}),d===null?delete u[i]:u[i]=d},t._stringRef=i,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function fa(e,t){if(e.type!=="textarea")throw Error(l(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function ic(e){function t(S,x){if(e){var k=S.lastEffect;k!==null?(k.nextEffect=x,S.lastEffect=x):S.firstEffect=S.lastEffect=x,x.nextEffect=null,x.flags=8}}function n(S,x){if(!e)return null;for(;x!==null;)t(S,x),x=x.sibling;return null}function r(S,x){for(S=new Map;x!==null;)x.key!==null?S.set(x.key,x):S.set(x.index,x),x=x.sibling;return S}function i(S,x){return S=Bt(S,x),S.index=0,S.sibling=null,S}function d(S,x,k){return S.index=k,e?(k=S.alternate,k!==null?(k=k.index,k<x?(S.flags=2,x):k):(S.flags=2,x)):x}function u(S){return e&&S.alternate===null&&(S.flags=2),S}function f(S,x,k,I){return x===null||x.tag!==6?(x=ji(k,S.mode,I),x.return=S,x):(x=i(x,k),x.return=S,x)}function y(S,x,k,I){return x!==null&&x.elementType===k.type?(I=i(x,k.props),I.ref=sr(S,x,k),I.return=S,I):(I=Ma(k.type,k.key,k.props,null,S.mode,I),I.ref=sr(S,x,k),I.return=S,I)}function E(S,x,k,I){return x===null||x.tag!==4||x.stateNode.containerInfo!==k.containerInfo||x.stateNode.implementation!==k.implementation?(x=Mi(k,S.mode,I),x.return=S,x):(x=i(x,k.children||[]),x.return=S,x)}function W(S,x,k,I,j){return x===null||x.tag!==7?(x=Nn(k,S.mode,I,j),x.return=S,x):(x=i(x,k),x.return=S,x)}function le(S,x,k){if(typeof x=="string"||typeof x=="number")return x=ji(""+x,S.mode,k),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case U:return k=Ma(x.type,x.key,x.props,null,S.mode,k),k.ref=sr(S,null,x),k.return=S,k;case $:return x=Mi(x,S.mode,k),x.return=S,x}if(ma(x)||X(x))return x=Nn(x,S.mode,k,null),x.return=S,x;fa(S,x)}return null}function O(S,x,k,I){var j=x!==null?x.key:null;if(typeof k=="string"||typeof k=="number")return j!==null?null:f(S,x,""+k,I);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case U:return k.key===j?k.type===q?W(S,x,k.props.children,I,j):y(S,x,k,I):null;case $:return k.key===j?E(S,x,k,I):null}if(ma(k)||X(k))return j!==null?null:W(S,x,k,I,null);fa(S,k)}return null}function Z(S,x,k,I,j){if(typeof I=="string"||typeof I=="number")return S=S.get(k)||null,f(x,S,""+I,j);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case U:return S=S.get(I.key===null?k:I.key)||null,I.type===q?W(x,S,I.props.children,j,I.key):y(x,S,I,j);case $:return S=S.get(I.key===null?k:I.key)||null,E(x,S,I,j)}if(ma(I)||X(I))return S=S.get(k)||null,W(x,S,I,j,null);fa(x,I)}return null}function ie(S,x,k,I){for(var j=null,ue=null,Q=x,pe=x=0,fe=null;Q!==null&&pe<k.length;pe++){Q.index>pe?(fe=Q,Q=null):fe=Q.sibling;var he=O(S,Q,k[pe],I);if(he===null){Q===null&&(Q=fe);break}e&&Q&&he.alternate===null&&t(S,Q),x=d(he,x,pe),ue===null?j=he:ue.sibling=he,ue=he,Q=fe}if(pe===k.length)return n(S,Q),j;if(Q===null){for(;pe<k.length;pe++)Q=le(S,k[pe],I),Q!==null&&(x=d(Q,x,pe),ue===null?j=Q:ue.sibling=Q,ue=Q);return j}for(Q=r(S,Q);pe<k.length;pe++)fe=Z(Q,S,pe,k[pe],I),fe!==null&&(e&&fe.alternate!==null&&Q.delete(fe.key===null?pe:fe.key),x=d(fe,x,pe),ue===null?j=fe:ue.sibling=fe,ue=fe);return e&&Q.forEach(function(Gt){return t(S,Gt)}),j}function re(S,x,k,I){var j=X(k);if(typeof j!="function")throw Error(l(150));if(k=j.call(k),k==null)throw Error(l(151));for(var ue=j=null,Q=x,pe=x=0,fe=null,he=k.next();Q!==null&&!he.done;pe++,he=k.next()){Q.index>pe?(fe=Q,Q=null):fe=Q.sibling;var Gt=O(S,Q,he.value,I);if(Gt===null){Q===null&&(Q=fe);break}e&&Q&&Gt.alternate===null&&t(S,Q),x=d(Gt,x,pe),ue===null?j=Gt:ue.sibling=Gt,ue=Gt,Q=fe}if(he.done)return n(S,Q),j;if(Q===null){for(;!he.done;pe++,he=k.next())he=le(S,he.value,I),he!==null&&(x=d(he,x,pe),ue===null?j=he:ue.sibling=he,ue=he);return j}for(Q=r(S,Q);!he.done;pe++,he=k.next())he=Z(Q,S,pe,he.value,I),he!==null&&(e&&he.alternate!==null&&Q.delete(he.key===null?pe:he.key),x=d(he,x,pe),ue===null?j=he:ue.sibling=he,ue=he);return e&&Q.forEach(function(fh){return t(S,fh)}),j}return function(S,x,k,I){var j=typeof k=="object"&&k!==null&&k.type===q&&k.key===null;j&&(k=k.props.children);var ue=typeof k=="object"&&k!==null;if(ue)switch(k.$$typeof){case U:e:{for(ue=k.key,j=x;j!==null;){if(j.key===ue){switch(j.tag){case 7:if(k.type===q){n(S,j.sibling),x=i(j,k.props.children),x.return=S,S=x;break e}break;default:if(j.elementType===k.type){n(S,j.sibling),x=i(j,k.props),x.ref=sr(S,j,k),x.return=S,S=x;break e}}n(S,j);break}else t(S,j);j=j.sibling}k.type===q?(x=Nn(k.props.children,S.mode,I,k.key),x.return=S,S=x):(I=Ma(k.type,k.key,k.props,null,S.mode,I),I.ref=sr(S,x,k),I.return=S,S=I)}return u(S);case $:e:{for(j=k.key;x!==null;){if(x.key===j)if(x.tag===4&&x.stateNode.containerInfo===k.containerInfo&&x.stateNode.implementation===k.implementation){n(S,x.sibling),x=i(x,k.children||[]),x.return=S,S=x;break e}else{n(S,x);break}else t(S,x);x=x.sibling}x=Mi(k,S.mode,I),x.return=S,S=x}return u(S)}if(typeof k=="string"||typeof k=="number")return k=""+k,x!==null&&x.tag===6?(n(S,x.sibling),x=i(x,k),x.return=S,S=x):(n(S,x),x=ji(k,S.mode,I),x.return=S,S=x),u(S);if(ma(k))return ie(S,x,k,I);if(X(k))return re(S,x,k,I);if(ue&&fa(S,k),typeof k>"u"&&!j)switch(S.tag){case 1:case 22:case 0:case 11:case 15:throw Error(l(152,ln(S.type)||"Component"))}return n(S,x)}}var ga=ic(!0),sc=ic(!1),lr={},dt=It(lr),cr=It(lr),dr=It(lr);function Kt(e){if(e===lr)throw Error(l(174));return e}function Ko(e,t){switch(Ee(dr,t),Ee(cr,e),Ee(dt,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:to(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=to(t,e)}Te(dt),Ee(dt,t)}function An(){Te(dt),Te(cr),Te(dr)}function lc(e){Kt(dr.current);var t=Kt(dt.current),n=to(t,e.type);t!==n&&(Ee(cr,e),Ee(dt,n))}function Xo(e){cr.current===e&&(Te(dt),Te(cr))}var Ae=It(0);function va(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yt=null,Nt=null,ut=!1;function cc(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function dc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Zo(e){if(ut){var t=Nt;if(t){var n=t;if(!dc(e,t)){if(t=wn(n.nextSibling),!t||!dc(e,t)){e.flags=e.flags&-1025|2,ut=!1,yt=e;return}cc(yt,n)}yt=e,Nt=wn(t.firstChild)}else e.flags=e.flags&-1025|2,ut=!1,yt=e}}function uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function ya(e){if(e!==yt)return!1;if(!ut)return uc(e),ut=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Fo(t,e.memoizedProps))for(t=Nt;t;)cc(e,t),t=wn(t.nextSibling);if(uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=yt?wn(e.stateNode.nextSibling):null;return!0}function ei(){Nt=yt=null,ut=!1}var Pn=[];function ti(){for(var e=0;e<Pn.length;e++)Pn[e]._workInProgressVersionPrimary=null;Pn.length=0}var ur=R.ReactCurrentDispatcher,tt=R.ReactCurrentBatchConfig,pr=0,Ie=null,Fe=null,je=null,wa=!1,hr=!1;function $e(){throw Error(l(321))}function ni(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function ri(e,t,n,r,i,d){if(pr=d,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ur.current=e===null||e.memoizedState===null?Bp:Gp,e=n(r,i),hr){d=0;do{if(hr=!1,!(25>d))throw Error(l(301));d+=1,je=Fe=null,t.updateQueue=null,ur.current=Hp,e=n(r,i)}while(hr)}if(ur.current=Sa,t=Fe!==null&&Fe.next!==null,pr=0,je=Fe=Ie=null,wa=!1,t)throw Error(l(300));return e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ie.memoizedState=je=e:je=je.next=e,je}function Zt(){if(Fe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=je===null?Ie.memoizedState:je.next;if(t!==null)je=t,Fe=e;else{if(e===null)throw Error(l(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},je===null?Ie.memoizedState=je=e:je=je.next=e}return je}function pt(e,t){return typeof t=="function"?t(e):t}function mr(e){var t=Zt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,d=n.pending;if(d!==null){if(i!==null){var u=i.next;i.next=d.next,d.next=u}r.baseQueue=i=d,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var f=u=d=null,y=i;do{var E=y.lane;if((pr&E)===E)f!==null&&(f=f.next={lane:0,action:y.action,eagerReducer:y.eagerReducer,eagerState:y.eagerState,next:null}),r=y.eagerReducer===e?y.eagerState:e(r,y.action);else{var W={lane:E,action:y.action,eagerReducer:y.eagerReducer,eagerState:y.eagerState,next:null};f===null?(u=f=W,d=r):f=f.next=W,Ie.lanes|=E,yr|=E}y=y.next}while(y!==null&&y!==i);f===null?d=r:f.next=u,Ze(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=d,t.baseQueue=f,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function fr(e){var t=Zt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,d=t.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do d=e(d,u.action),u=u.next;while(u!==i);Ze(d,t.memoizedState)||(ot=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,r]}function pc(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(pr&e)===e)&&(t._workInProgressVersionPrimary=r,Pn.push(t))),e)return n(t._source);throw Pn.push(t),Error(l(350))}function hc(e,t,n,r){var i=Ge;if(i===null)throw Error(l(349));var d=t._getVersion,u=d(t._source),f=ur.current,y=f.useState(function(){return pc(i,t,n)}),E=y[1],W=y[0];y=je;var le=e.memoizedState,O=le.refs,Z=O.getSnapshot,ie=le.source;le=le.subscribe;var re=Ie;return e.memoizedState={refs:O,source:t,subscribe:r},f.useEffect(function(){O.getSnapshot=n,O.setSnapshot=E;var S=d(t._source);if(!Ze(u,S)){S=n(t._source),Ze(W,S)||(E(S),S=Ot(re),i.mutableReadLanes|=S&i.pendingLanes),S=i.mutableReadLanes,i.entangledLanes|=S;for(var x=i.entanglements,k=S;0<k;){var I=31-Et(k),j=1<<I;x[I]|=S,k&=~j}}},[n,t,r]),f.useEffect(function(){return r(t._source,function(){var S=O.getSnapshot,x=O.setSnapshot;try{x(S(t._source));var k=Ot(re);i.mutableReadLanes|=k&i.pendingLanes}catch(I){x(function(){throw I})}})},[t,r]),Ze(Z,n)&&Ze(ie,t)&&Ze(le,r)||(e={pending:null,dispatch:null,lastRenderedReducer:pt,lastRenderedState:W},e.dispatch=E=si.bind(null,Ie,e),y.queue=e,y.baseQueue=null,W=pc(i,t,n),y.memoizedState=y.baseState=W),W}function mc(e,t,n){var r=Zt();return hc(r,e,t,n)}function gr(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:pt,lastRenderedState:e},e=e.dispatch=si.bind(null,Ie,e),[t.memoizedState,e]}function ba(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fc(e){var t=Xt();return e={current:e},t.memoizedState=e}function xa(){return Zt().memoizedState}function ai(e,t,n,r){var i=Xt();Ie.flags|=e,i.memoizedState=ba(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var i=Zt();r=r===void 0?null:r;var d=void 0;if(Fe!==null){var u=Fe.memoizedState;if(d=u.destroy,r!==null&&ni(r,u.deps)){ba(t,n,d,r);return}}Ie.flags|=e,i.memoizedState=ba(1|t,n,d,r)}function gc(e,t){return ai(516,4,e,t)}function ka(e,t){return oi(516,4,e,t)}function vc(e,t){return oi(4,2,e,t)}function yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wc(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,2,yc.bind(null,t,e),n)}function ii(){}function bc(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ni(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xc(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ni(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zp(e,t){var n=Cn();Qt(98>n?98:n,function(){e(!0)}),Qt(97<n?97:n,function(){var r=tt.transition;tt.transition=1;try{e(!1),t()}finally{tt.transition=r}})}function si(e,t,n){var r=Ke(),i=Ot(e),d={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},u=t.pending;if(u===null?d.next=d:(d.next=u.next,u.next=d),t.pending=d,u=e.alternate,e===Ie||u!==null&&u===Ie)hr=wa=!0;else{if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,y=u(f,n);if(d.eagerReducer=u,d.eagerState=y,Ze(y,f))return}catch{}Ft(e,i,r)}}var Sa={readContext:et,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useOpaqueIdentifier:$e,unstable_isNewReconciler:!1},Bp={readContext:et,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:gc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,2,yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ai(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=si.bind(null,Ie,e),[r.memoizedState,e]},useRef:fc,useState:gr,useDebugValue:ii,useDeferredValue:function(e){var t=gr(e),n=t[0],r=t[1];return gc(function(){var i=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=i}},[e]),n},useTransition:function(){var e=gr(!1),t=e[0];return e=zp.bind(null,e[1]),fc(e),[e,t]},useMutableSource:function(e,t,n){var r=Xt();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},hc(r,e,t,n)},useOpaqueIdentifier:function(){if(ut){var e=!1,t=Mp(function(){throw e||(e=!0,n("r:"+(zo++).toString(36))),Error(l(355))}),n=gr(t)[1];return(Ie.mode&2)===0&&(Ie.flags|=516,ba(5,function(){n("r:"+(zo++).toString(36))},void 0,null)),t}return t="r:"+(zo++).toString(36),gr(t),t},unstable_isNewReconciler:!1},Gp={readContext:et,useCallback:bc,useContext:et,useEffect:ka,useImperativeHandle:wc,useLayoutEffect:vc,useMemo:xc,useReducer:mr,useRef:xa,useState:function(){return mr(pt)},useDebugValue:ii,useDeferredValue:function(e){var t=mr(pt),n=t[0],r=t[1];return ka(function(){var i=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=i}},[e]),n},useTransition:function(){var e=mr(pt)[0];return[xa().current,e]},useMutableSource:mc,useOpaqueIdentifier:function(){return mr(pt)[0]},unstable_isNewReconciler:!1},Hp={readContext:et,useCallback:bc,useContext:et,useEffect:ka,useImperativeHandle:wc,useLayoutEffect:vc,useMemo:xc,useReducer:fr,useRef:xa,useState:function(){return fr(pt)},useDebugValue:ii,useDeferredValue:function(e){var t=fr(pt),n=t[0],r=t[1];return ka(function(){var i=tt.transition;tt.transition=1;try{r(e)}finally{tt.transition=i}},[e]),n},useTransition:function(){var e=fr(pt)[0];return[xa().current,e]},useMutableSource:mc,useOpaqueIdentifier:function(){return fr(pt)[0]},unstable_isNewReconciler:!1},Up=R.ReactCurrentOwner,ot=!1;function Ve(e,t,n,r){t.child=e===null?sc(t,null,n,r):ga(t,e.child,n,r)}function kc(e,t,n,r,i){n=n.render;var d=t.ref;return En(t,i),r=ri(e,t,n,r,d,i),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,wt(e,t,i)):(t.flags|=1,Ve(e,t,r,i),t.child)}function Sc(e,t,n,r,i,d){if(e===null){var u=n.type;return typeof u=="function"&&!Li(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,Cc(e,t,u,r,i,d)):(e=Ma(n.type,null,r,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}return u=e.child,(i&d)===0&&(i=u.memoizedProps,n=n.compare,n=n!==null?n:er,n(i,r)&&e.ref===t.ref)?wt(e,t,d):(t.flags|=1,e=Bt(u,r),e.ref=t.ref,e.return=t,t.child=e)}function Cc(e,t,n,r,i,d){if(e!==null&&er(e.memoizedProps,r)&&e.ref===t.ref)if(ot=!1,(d&i)!==0)(e.flags&16384)!==0&&(ot=!0);else return t.lanes=e.lanes,wt(e,t,d);return ci(e,t,n,r,d)}function li(e,t,n){var r=t.pendingProps,i=r.children,d=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},ja(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},ja(t,d!==null?d.baseLanes:n);else return e=d!==null?d.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},ja(t,e),null;else d!==null?(r=d.baseLanes|n,t.memoizedState=null):r=n,ja(t,r);return Ve(e,t,i,n),t.child}function Tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function ci(e,t,n,r,i){var d=Ye(n)?Vt:De.current;return d=Sn(t,d),En(t,i),n=ri(e,t,n,r,d,i),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,wt(e,t,i)):(t.flags|=1,Ve(e,t,n,i),t.child)}function Ec(e,t,n,r,i){if(Ye(n)){var d=!0;ia(t)}else d=!1;if(En(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),ac(t,n,r),Qo(t,n,r,i),r=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var y=u.context,E=n.contextType;typeof E=="object"&&E!==null?E=et(E):(E=Ye(n)?Vt:De.current,E=Sn(t,E));var W=n.getDerivedStateFromProps,le=typeof W=="function"||typeof u.getSnapshotBeforeUpdate=="function";le||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==r||y!==E)&&oc(t,u,r,E),Rt=!1;var O=t.memoizedState;u.state=O,ir(t,r,u,i),y=t.memoizedState,f!==r||O!==y||qe.current||Rt?(typeof W=="function"&&(pa(t,n,W,r),y=t.memoizedState),(f=Rt||rc(t,n,f,r,O,y,E))?(le||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4)):(typeof u.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=y),u.props=r,u.state=y,u.context=E,r=f):(typeof u.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{u=t.stateNode,Zl(e,t),f=t.memoizedProps,E=t.type===t.elementType?f:at(t.type,f),u.props=E,le=t.pendingProps,O=u.context,y=n.contextType,typeof y=="object"&&y!==null?y=et(y):(y=Ye(n)?Vt:De.current,y=Sn(t,y));var Z=n.getDerivedStateFromProps;(W=typeof Z=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==le||O!==y)&&oc(t,u,r,y),Rt=!1,O=t.memoizedState,u.state=O,ir(t,r,u,i);var ie=t.memoizedState;f!==le||O!==ie||qe.current||Rt?(typeof Z=="function"&&(pa(t,n,Z,r),ie=t.memoizedState),(E=Rt||rc(t,n,E,r,O,ie,y))?(W||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ie,y),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ie,y)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=ie),u.props=r,u.state=ie,u.context=y,r=E):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=256),r=!1)}return di(e,t,n,r,d,i)}function di(e,t,n,r,i,d){Tc(e,t);var u=(t.flags&64)!==0;if(!r&&!u)return i&&Ul(t,n,!1),wt(e,t,d);r=t.stateNode,Up.current=t;var f=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=ga(t,e.child,null,d),t.child=ga(t,null,f,d)):Ve(e,t,f,d),t.memoizedState=r.state,i&&Ul(t,n,!0),t.child}function Ac(e){var t=e.stateNode;t.pendingContext?Gl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gl(e,t.context,!1),Ko(e,t.containerInfo)}var Ca={dehydrated:null,retryLane:0};function Pc(e,t,n){var r=t.pendingProps,i=Ae.current,d=!1,u;return(u=(t.flags&64)!==0)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(d=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Ee(Ae,i&1),e===null?(r.fallback!==void 0&&Zo(t),e=r.children,i=r.fallback,d?(e=Ic(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Ca,e):typeof r.unstable_expectedLoadTime=="number"?(e=Ic(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Ca,t.lanes=33554432,e):(n=Ri({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?d?(r=Rc(e,t,r.children,r.fallback,n),d=t.child,i=e.child.memoizedState,d.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},d.childLanes=e.childLanes&~n,t.memoizedState=Ca,r):(n=Lc(e,t,r.children,n),t.memoizedState=null,n):d?(r=Rc(e,t,r.children,r.fallback,n),d=t.child,i=e.child.memoizedState,d.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},d.childLanes=e.childLanes&~n,t.memoizedState=Ca,r):(n=Lc(e,t,r.children,n),t.memoizedState=null,n)}function Ic(e,t,n,r){var i=e.mode,d=e.child;return t={mode:"hidden",children:t},(i&2)===0&&d!==null?(d.childLanes=0,d.pendingProps=t):d=Ri(t,i,0,null),n=Nn(n,i,r,null),d.return=e,n.return=e,d.sibling=n,e.child=d,n}function Lc(e,t,n,r){var i=e.child;return e=i.sibling,n=Bt(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Rc(e,t,n,r,i){var d=t.mode,u=e.child;e=u.sibling;var f={mode:"hidden",children:n};return(d&2)===0&&t.child!==u?(n=t.child,n.childLanes=0,n.pendingProps=f,u=n.lastEffect,u!==null?(t.firstEffect=n.firstEffect,t.lastEffect=u,u.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Bt(u,f),e!==null?r=Bt(e,r):(r=Nn(r,d,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function jc(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xl(e.return,t)}function ui(e,t,n,r,i,d){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:d}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=i,u.lastEffect=d)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,d=r.tail;if(Ve(e,t,r.children,n),r=Ae.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n);else if(e.tag===19)jc(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Ae,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&va(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ui(t,!1,i,n,d,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&va(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ui(t,!0,n,null,d,t.lastEffect);break;case"together":ui(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Nc,pi,Dc,Oc;Nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},pi=function(){},Dc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kt(dt.current);var d=null;switch(n){case"input":i=Ja(e,i),r=Ja(e,r),d=[];break;case"option":i=Xa(e,i),r=Xa(e,r),d=[];break;case"select":i=o({},i,{value:void 0}),r=o({},r,{value:void 0}),d=[];break;case"textarea":i=Za(e,i),r=Za(e,r),d=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ta)}no(n,r);var u;n=null;for(E in i)if(!r.hasOwnProperty(E)&&i.hasOwnProperty(E)&&i[E]!=null)if(E==="style"){var f=i[E];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(m.hasOwnProperty(E)?d||(d=[]):(d=d||[]).push(E,null));for(E in r){var y=r[E];if(f=i?.[E],r.hasOwnProperty(E)&&y!==f&&(y!=null||f!=null))if(E==="style")if(f){for(u in f)!f.hasOwnProperty(u)||y&&y.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in y)y.hasOwnProperty(u)&&f[u]!==y[u]&&(n||(n={}),n[u]=y[u])}else n||(d||(d=[]),d.push(E,n)),n=y;else E==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,f=f?f.__html:void 0,y!=null&&f!==y&&(d=d||[]).push(E,y)):E==="children"?typeof y!="string"&&typeof y!="number"||(d=d||[]).push(E,""+y):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(m.hasOwnProperty(E)?(y!=null&&E==="onScroll"&&Ce("scroll",e),d||f===y||(d=[])):typeof y=="object"&&y!==null&&y.$$typeof===z?y.toString():(d=d||[]).push(E,y))}n&&(d=d||[]).push("style",n);var E=d;(t.updateQueue=E)&&(t.flags|=4)}},Oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function vr(e,t){if(!ut)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Wp(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ye(t.type)&&oa(),null;case 3:return An(),Te(qe),Te(De),ti(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ya(t)?t.flags|=4:r.hydrate||(t.flags|=256)),pi(t),null;case 5:Xo(t);var i=Kt(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Dc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(l(166));return null}if(e=Kt(dt.current),ya(t)){r=t.stateNode,n=t.type;var d=t.memoizedProps;switch(r[Pt]=t,r[ra]=d,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(e=0;e<nr.length;e++)Ce(nr[e],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":As(r,d),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!d.multiple},Ce("invalid",r);break;case"textarea":Ls(r,d),Ce("invalid",r)}no(n,d),e=null;for(var u in d)d.hasOwnProperty(u)&&(i=d[u],u==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):m.hasOwnProperty(u)&&i!=null&&u==="onScroll"&&Ce("scroll",r));switch(n){case"input":_r(r),Is(r,d,!0);break;case"textarea":_r(r),js(r);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(r.onclick=ta)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(u=i.nodeType===9?i:i.ownerDocument,e===eo.html&&(e=Ms(n)),e===eo.html?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Pt]=t,e[ra]=r,Nc(e,t,!1,!1),t.stateNode=e,u=ro(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),i=r;break;case"iframe":case"object":case"embed":Ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<nr.length;i++)Ce(nr[i],e);i=r;break;case"source":Ce("error",e),i=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=r;break;case"details":Ce("toggle",e),i=r;break;case"input":As(e,r),i=Ja(e,r),Ce("invalid",e);break;case"option":i=Xa(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=o({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":Ls(e,r),i=Za(e,r),Ce("invalid",e);break;default:i=r}no(n,i);var f=i;for(d in f)if(f.hasOwnProperty(d)){var y=f[d];d==="style"?Os(e,y):d==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Ns(e,y)):d==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&_n(e,y):typeof y=="number"&&_n(e,""+y):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(m.hasOwnProperty(d)?y!=null&&d==="onScroll"&&Ce("scroll",e):y!=null&&ne(e,d,y,u))}switch(n){case"input":_r(e),Is(e,r,!1);break;case"textarea":_r(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,d=r.value,d!=null?cn(e,!!r.multiple,d,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ta)}Ol(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));n=Kt(dr.current),Kt(dt.current),ya(t)?(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r)}return null;case 13:return Te(Ae),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&ya(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Ae.current&1)!==0?Me===0&&(Me=3):((Me===0||Me===3)&&(Me=4),Ge===null||(yr&134217727)===0&&(Ln&134217727)===0||jn(Ge,_e))),(r||n)&&(t.flags|=4),null);case 4:return An(),pi(t),e===null&&Rl(t.stateNode.containerInfo),null;case 10:return Vo(t),null;case 17:return Ye(t.type)&&oa(),null;case 19:if(Te(Ae),r=t.memoizedState,r===null)return null;if(d=(t.flags&64)!==0,u=r.rendering,u===null)if(d)vr(r,!1);else{if(Me!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(u=va(e),u!==null){for(t.flags|=64,vr(r,!1),d=u.updateQueue,d!==null&&(t.updateQueue=d,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)d=n,e=r,d.flags&=2,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null,u=d.alternate,u===null?(d.childLanes=0,d.lanes=e,d.child=null,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=u.childLanes,d.lanes=u.lanes,d.child=u.child,d.memoizedProps=u.memoizedProps,d.memoizedState=u.memoizedState,d.updateQueue=u.updateQueue,d.type=u.type,e=u.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Ae,Ae.current&1|2),t.child}e=e.sibling}r.tail!==null&&Oe()>Si&&(t.flags|=64,d=!0,vr(r,!1),t.lanes=33554432)}else{if(!d)if(e=va(u),e!==null){if(t.flags|=64,d=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!ut)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Oe()-r.renderingStartTime>Si&&n!==1073741824&&(t.flags|=64,d=!0,vr(r,!1),t.lanes=33554432);r.isBackwards?(u.sibling=t.child,t.child=u):(n=r.last,n!==null?n.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Oe(),n.sibling=null,t=Ae.current,Ee(Ae,d?t&1|2:t&1),n):null;case 23:case 24:return Ii(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(l(156,t.tag))}function qp(e){switch(e.tag){case 1:Ye(e.type)&&oa();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(An(),Te(qe),Te(De),ti(),t=e.flags,(t&64)!==0)throw Error(l(285));return e.flags=t&-4097|64,e;case 5:return Xo(e),null;case 13:return Te(Ae),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return Te(Ae),null;case 4:return An(),null;case 10:return Vo(e),null;case 23:case 24:return Ii(),null;default:return null}}function hi(e,t){try{var n="",r=t;do n+=Cu(r),r=r.return;while(r);var i=n}catch(d){i=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:i}}function mi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yp=typeof WeakMap=="function"?WeakMap:Map;function Fc(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Aa||(Aa=!0,Ci=r),mi(e,t)},n}function _c(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return mi(e,t),r(i)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this),mi(e,t));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}var $p=typeof WeakSet=="function"?WeakSet:Set;function zc(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){zt(e,n)}else t.current=null}function Vp(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:at(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&_o(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(l(163))}function Jp(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(ed(n,e),rh(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:at(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&tc(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}tc(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Ol(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Xs(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(l(163))}function Bc(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Ds("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Gc(e,t){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Go,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)ed(t,n);else{r=t;try{i()}catch(d){zt(r,d)}}n=n.next}while(n!==e)}break;case 1:if(zc(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(d){zt(t,d)}break;case 5:zc(t);break;case 4:qc(e,t)}}function Hc(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Uc(e){return e.tag===5||e.tag===3||e.tag===4}function Wc(e){e:{for(var t=e.return;t!==null;){if(Uc(t))break e;t=t.return}throw Error(l(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(l(161))}n.flags&16&&(_n(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Uc(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?fi(e,n,t):gi(e,n,t)}function fi(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ta));else if(r!==4&&(e=e.child,e!==null))for(fi(e,t,n),e=e.sibling;e!==null;)fi(e,t,n),e=e.sibling}function gi(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gi(e,t,n),e=e.sibling;e!==null;)gi(e,t,n),e=e.sibling}function qc(e,t){for(var n=t,r=!1,i,d;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(l(160));switch(i=r.stateNode,r.tag){case 5:d=!1;break e;case 3:i=i.containerInfo,d=!0;break e;case 4:i=i.containerInfo,d=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var u=e,f=n,y=f;;)if(Gc(u,y),y.child!==null&&y.tag!==4)y.child.return=y,y=y.child;else{if(y===f)break e;for(;y.sibling===null;){if(y.return===null||y.return===f)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}d?(u=i,f=n.stateNode,u.nodeType===8?u.parentNode.removeChild(f):u.removeChild(f)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,d=!0,n.child.return=n,n=n.child;continue}}else if(Gc(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function vi(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var d=t.updateQueue;if(t.updateQueue=null,d!==null){for(n[ra]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Ps(n,r),ro(e,i),t=ro(e,r),i=0;i<d.length;i+=2){var u=d[i],f=d[i+1];u==="style"?Os(n,f):u==="dangerouslySetInnerHTML"?Ns(n,f):u==="children"?_n(n,f):ne(n,u,f,t)}switch(e){case"input":Qa(n,r);break;case"textarea":Rs(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,d=r.value,d!=null?cn(n,!!r.multiple,d,!1):e!==!!r.multiple&&(r.defaultValue!=null?cn(n,!!r.multiple,r.defaultValue,!0):cn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(l(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Xs(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(ki=Oe(),Bc(t.child,!0)),Yc(t);return;case 19:Yc(t);return;case 17:return;case 23:case 24:Bc(t,t.memoizedState!==null);return}throw Error(l(163))}function Yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $p),t.forEach(function(r){var i=ih.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qp(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Kp=Math.ceil,Ta=R.ReactCurrentDispatcher,yi=R.ReactCurrentOwner,oe=0,Ge=null,Le=null,_e=0,en=0,wi=It(0),Me=0,Ea=null,In=0,yr=0,Ln=0,bi=0,xi=null,ki=0,Si=1/0;function Rn(){Si=Oe()+500}var V=null,Aa=!1,Ci=null,ht=null,Dt=!1,wr=null,br=90,Ti=[],Ei=[],bt=null,xr=0,Ai=null,Pa=-1,xt=0,Ia=0,kr=null,La=!1;function Ke(){return(oe&48)!==0?Oe():Pa!==-1?Pa:Pa=Oe()}function Ot(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return Cn()===99?1:2;if(xt===0&&(xt=In),_p.transition!==0){Ia!==0&&(Ia=xi!==null?xi.pendingLanes:0),e=xt;var t=4186112&~Ia;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=Cn(),(oe&4)!==0&&e===98?e=Yr(12,xt):(e=Bu(e),e=Yr(e,xt)),e}function Ft(e,t,n){if(50<xr)throw xr=0,Ai=null,Error(l(185));if(e=Ra(e,t),e===null)return null;$r(e,t,n),e===Ge&&(Ln|=t,Me===4&&jn(e,_e));var r=Cn();t===1?(oe&8)!==0&&(oe&48)===0?Pi(e):(nt(e,n),oe===0&&(Rn(),ct())):((oe&4)===0||r!==98&&r!==99||(bt===null?bt=new Set([e]):bt.add(e)),nt(e,n)),xi=e}function Ra(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function nt(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,d=e.expirationTimes,u=e.pendingLanes;0<u;){var f=31-Et(u),y=1<<f,E=d[f];if(E===-1){if((y&r)===0||(y&i)!==0){E=t,hn(y);var W=Se;d[f]=10<=W?E+250:6<=W?E+5e3:-1}}else E<=t&&(e.expiredLanes|=y);u&=~y}if(r=Vn(e,e===Ge?_e:0),t=Se,r===0)n!==null&&(n!==qo&&Uo(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==qo&&Uo(n)}t===15?(n=Pi.bind(null,e),vt===null?(vt=[n],la=Ho(sa,Kl)):vt.push(n),n=qo):t===14?n=or(99,Pi.bind(null,e)):(n=Gu(t),n=or(n,$c.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function $c(e){if(Pa=-1,Ia=xt=0,(oe&48)!==0)throw Error(l(327));var t=e.callbackNode;if(_t()&&e.callbackNode!==t)return null;var n=Vn(e,e===Ge?_e:0);if(n===0)return null;var r=n,i=oe;oe|=16;var d=Kc();(Ge!==e||_e!==r)&&(Rn(),Mn(e,r));do try{eh();break}catch(f){Qc(e,f)}while(!0);if($o(),Ta.current=d,oe=i,Le!==null?r=0:(Ge=null,_e=0,r=Me),(In&Ln)!==0)Mn(e,0);else if(r!==0){if(r===2&&(oe|=64,e.hydrate&&(e.hydrate=!1,_o(e.containerInfo)),n=ol(e),n!==0&&(r=Sr(e,n))),r===1)throw t=Ea,Mn(e,0),jn(e,n),nt(e,Oe()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(l(345));case 2:tn(e);break;case 3:if(jn(e,n),(n&62914560)===n&&(r=ki+500-Oe(),10<r)){if(Vn(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fl(tn.bind(null,e),r);break}tn(e);break;case 4:if(jn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var u=31-Et(n);d=1<<u,u=r[u],u>i&&(i=u),n&=~d}if(n=i,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Kp(n/1960))-n,10<n){e.timeoutHandle=Fl(tn.bind(null,e),n);break}tn(e);break;case 5:tn(e);break;default:throw Error(l(329))}}return nt(e,Oe()),e.callbackNode===t?$c.bind(null,e):null}function jn(e,t){for(t&=~bi,t&=~Ln,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function Pi(e){if((oe&48)!==0)throw Error(l(327));if(_t(),e===Ge&&(e.expiredLanes&_e)!==0){var t=_e,n=Sr(e,t);(In&Ln)!==0&&(t=Vn(e,t),n=Sr(e,t))}else t=Vn(e,0),n=Sr(e,t);if(e.tag!==0&&n===2&&(oe|=64,e.hydrate&&(e.hydrate=!1,_o(e.containerInfo)),t=ol(e),t!==0&&(n=Sr(e,t))),n===1)throw n=Ea,Mn(e,0),jn(e,t),nt(e,Oe()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e),nt(e,Oe()),null}function Xp(){if(bt!==null){var e=bt;bt=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,nt(t,Oe())})}ct()}function Vc(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Rn(),ct())}}function Jc(e,t){var n=oe;oe&=-2,oe|=8;try{return e(t)}finally{oe=n,oe===0&&(Rn(),ct())}}function ja(e,t){Ee(wi,en),en|=t,In|=t}function Ii(){en=wi.current,Te(wi)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jp(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&oa();break;case 3:An(),Te(qe),Te(De),ti();break;case 5:Xo(r);break;case 4:An();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Vo(r);break;case 23:case 24:Ii()}n=n.return}Ge=e,Le=Bt(e.current,null),_e=en=In=t,Me=0,Ea=null,bi=Ln=yr=0}function Qc(e,t){do{var n=Le;try{if($o(),ur.current=Sa,wa){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wa=!1}if(pr=0,je=Fe=Ie=null,hr=!1,yi.current=null,n===null||n.return===null){Me=1,Ea=t,Le=null;break}e:{var d=e,u=n.return,f=n,y=t;if(t=_e,f.flags|=2048,f.firstEffect=f.lastEffect=null,y!==null&&typeof y=="object"&&typeof y.then=="function"){var E=y;if((f.mode&2)===0){var W=f.alternate;W?(f.updateQueue=W.updateQueue,f.memoizedState=W.memoizedState,f.lanes=W.lanes):(f.updateQueue=null,f.memoizedState=null)}var le=(Ae.current&1)!==0,O=u;do{var Z;if(Z=O.tag===13){var ie=O.memoizedState;if(ie!==null)Z=ie.dehydrated!==null;else{var re=O.memoizedProps;Z=re.fallback===void 0?!1:re.unstable_avoidThisFallback!==!0?!0:!le}}if(Z){var S=O.updateQueue;if(S===null){var x=new Set;x.add(E),O.updateQueue=x}else S.add(E);if((O.mode&2)===0){if(O.flags|=64,f.flags|=16384,f.flags&=-2981,f.tag===1)if(f.alternate===null)f.tag=17;else{var k=jt(-1,1);k.tag=2,Mt(f,k)}f.lanes|=1;break e}y=void 0,f=t;var I=d.pingCache;if(I===null?(I=d.pingCache=new Yp,y=new Set,I.set(E,y)):(y=I.get(E),y===void 0&&(y=new Set,I.set(E,y))),!y.has(f)){y.add(f);var j=oh.bind(null,d,E,f);E.then(j,j)}O.flags|=4096,O.lanes=t;break e}O=O.return}while(O!==null);y=Error((ln(f.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Me!==5&&(Me=2),y=hi(y,f),O=u;do{switch(O.tag){case 3:d=y,O.flags|=4096,t&=-t,O.lanes|=t;var ue=Fc(O,d,t);ec(O,ue);break e;case 1:d=y;var Q=O.type,pe=O.stateNode;if((O.flags&64)===0&&(typeof Q.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(ht===null||!ht.has(pe)))){O.flags|=4096,t&=-t,O.lanes|=t;var fe=_c(O,d,t);ec(O,fe);break e}}O=O.return}while(O!==null)}Zc(n)}catch(he){t=he,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Kc(){var e=Ta.current;return Ta.current=Sa,e===null?Sa:e}function Sr(e,t){var n=oe;oe|=16;var r=Kc();Ge===e&&_e===t||Mn(e,t);do try{Zp();break}catch(i){Qc(e,i)}while(!0);if($o(),oe=n,Ta.current=r,Le!==null)throw Error(l(261));return Ge=null,_e=0,Me}function Zp(){for(;Le!==null;)Xc(Le)}function eh(){for(;Le!==null&&!Dp();)Xc(Le)}function Xc(e){var t=nd(e.alternate,e,en);e.memoizedProps=e.pendingProps,t===null?Zc(e):Le=t,yi.current=null}function Zc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=Wp(n,t,en),n!==null){Le=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(en&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=qp(t),n!==null){n.flags&=2047,Le=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Me===0&&(Me=5)}function tn(e){var t=Cn();return Qt(99,th.bind(null,e,t)),null}function th(e,t){do _t();while(wr!==null);if((oe&48)!==0)throw Error(l(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,d=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var u=e.eventTimes,f=e.expirationTimes;0<d;){var y=31-Et(d),E=1<<y;i[y]=0,u[y]=-1,f[y]=-1,d&=~E}if(bt!==null&&(r&24)===0&&bt.has(e)&&bt.delete(e),e===Ge&&(Le=Ge=null,_e=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=oe,oe|=32,yi.current=null,Do=Vr,u=Tl(),Ro(u)){if("selectionStart"in u)f={start:u.selectionStart,end:u.selectionEnd};else e:if(f=(f=u.ownerDocument)&&f.defaultView||window,(E=f.getSelection&&f.getSelection())&&E.rangeCount!==0){f=E.anchorNode,d=E.anchorOffset,y=E.focusNode,E=E.focusOffset;try{f.nodeType,y.nodeType}catch{f=null;break e}var W=0,le=-1,O=-1,Z=0,ie=0,re=u,S=null;t:for(;;){for(var x;re!==f||d!==0&&re.nodeType!==3||(le=W+d),re!==y||E!==0&&re.nodeType!==3||(O=W+E),re.nodeType===3&&(W+=re.nodeValue.length),(x=re.firstChild)!==null;)S=re,re=x;for(;;){if(re===u)break t;if(S===f&&++Z===d&&(le=W),S===y&&++ie===E&&(O=W),(x=re.nextSibling)!==null)break;re=S,S=re.parentNode}re=x}f=le===-1||O===-1?null:{start:le,end:O}}else f=null;f=f||{start:0,end:0}}else f=null;Oo={focusedElem:u,selectionRange:f},Vr=!1,kr=null,La=!1,V=r;do try{nh()}catch(he){if(V===null)throw Error(l(330));zt(V,he),V=V.nextEffect}while(V!==null);kr=null,V=r;do try{for(u=e;V!==null;){var k=V.flags;if(k&16&&_n(V.stateNode,""),k&128){var I=V.alternate;if(I!==null){var j=I.ref;j!==null&&(typeof j=="function"?j(null):j.current=null)}}switch(k&1038){case 2:Wc(V),V.flags&=-3;break;case 6:Wc(V),V.flags&=-3,vi(V.alternate,V);break;case 1024:V.flags&=-1025;break;case 1028:V.flags&=-1025,vi(V.alternate,V);break;case 4:vi(V.alternate,V);break;case 8:f=V,qc(u,f);var ue=f.alternate;Hc(f),ue!==null&&Hc(ue)}V=V.nextEffect}}catch(he){if(V===null)throw Error(l(330));zt(V,he),V=V.nextEffect}while(V!==null);if(j=Oo,I=Tl(),k=j.focusedElem,u=j.selectionRange,I!==k&&k&&k.ownerDocument&&Cl(k.ownerDocument.documentElement,k)){for(u!==null&&Ro(k)&&(I=u.start,j=u.end,j===void 0&&(j=I),"selectionStart"in k?(k.selectionStart=I,k.selectionEnd=Math.min(j,k.value.length)):(j=(I=k.ownerDocument||document)&&I.defaultView||window,j.getSelection&&(j=j.getSelection(),f=k.textContent.length,ue=Math.min(u.start,f),u=u.end===void 0?ue:Math.min(u.end,f),!j.extend&&ue>u&&(f=u,u=ue,ue=f),f=Sl(k,ue),d=Sl(k,u),f&&d&&(j.rangeCount!==1||j.anchorNode!==f.node||j.anchorOffset!==f.offset||j.focusNode!==d.node||j.focusOffset!==d.offset)&&(I=I.createRange(),I.setStart(f.node,f.offset),j.removeAllRanges(),ue>u?(j.addRange(I),j.extend(d.node,d.offset)):(I.setEnd(d.node,d.offset),j.addRange(I)))))),I=[],j=k;j=j.parentNode;)j.nodeType===1&&I.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<I.length;k++)j=I[k],j.element.scrollLeft=j.left,j.element.scrollTop=j.top}Vr=!!Do,Oo=Do=null,e.current=n,V=r;do try{for(k=e;V!==null;){var Q=V.flags;if(Q&36&&Jp(k,V.alternate,V),Q&128){I=void 0;var pe=V.ref;if(pe!==null){var fe=V.stateNode;V.tag,I=fe,typeof pe=="function"?pe(I):pe.current=I}}V=V.nextEffect}}catch(he){if(V===null)throw Error(l(330));zt(V,he),V=V.nextEffect}while(V!==null);V=null,Fp(),oe=i}else e.current=n;if(Dt)Dt=!1,wr=e,br=t;else for(V=r;V!==null;)t=V.nextEffect,V.nextEffect=null,V.flags&8&&(Q=V,Q.sibling=null,Q.stateNode=null),V=t;if(r=e.pendingLanes,r===0&&(ht=null),r===1?e===Ai?xr++:(xr=0,Ai=e):xr=0,n=n.stateNode,Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Go,n,void 0,(n.current.flags&64)===64)}catch{}if(nt(e,Oe()),Aa)throw Aa=!1,e=Ci,Ci=null,e;return(oe&8)!==0||ct(),null}function nh(){for(;V!==null;){var e=V.alternate;La||kr===null||((V.flags&8)!==0?qs(V,kr)&&(La=!0):V.tag===13&&Qp(e,V)&&qs(V,kr)&&(La=!0));var t=V.flags;(t&256)!==0&&Vp(e,V),(t&512)===0||Dt||(Dt=!0,or(97,function(){return _t(),null})),V=V.nextEffect}}function _t(){if(br!==90){var e=97<br?97:br;return br=90,Qt(e,ah)}return!1}function rh(e,t){Ti.push(t,e),Dt||(Dt=!0,or(97,function(){return _t(),null}))}function ed(e,t){Ei.push(t,e),Dt||(Dt=!0,or(97,function(){return _t(),null}))}function ah(){if(wr===null)return!1;var e=wr;if(wr=null,(oe&48)!==0)throw Error(l(331));var t=oe;oe|=32;var n=Ei;Ei=[];for(var r=0;r<n.length;r+=2){var i=n[r],d=n[r+1],u=i.destroy;if(i.destroy=void 0,typeof u=="function")try{u()}catch(y){if(d===null)throw Error(l(330));zt(d,y)}}for(n=Ti,Ti=[],r=0;r<n.length;r+=2){i=n[r],d=n[r+1];try{var f=i.create;i.destroy=f()}catch(y){if(d===null)throw Error(l(330));zt(d,y)}}for(f=e.current.firstEffect;f!==null;)e=f.nextEffect,f.nextEffect=null,f.flags&8&&(f.sibling=null,f.stateNode=null),f=e;return oe=t,ct(),!0}function td(e,t,n){t=hi(n,t),t=Fc(e,t,1),Mt(e,t),t=Ke(),e=Ra(e,1),e!==null&&($r(e,1,t),nt(e,t))}function zt(e,t){if(e.tag===3)td(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){td(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=hi(t,e);var i=_c(n,e,1);if(Mt(n,i),i=Ke(),n=Ra(n,1),n!==null)$r(n,1,i),nt(n,i);else if(typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function oh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(_e&n)===n&&(Me===4||Me===3&&(_e&62914560)===_e&&500>Oe()-ki?Mn(e,0):bi|=n),nt(e,t)}function ih(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=Cn()===99?1:2:(xt===0&&(xt=In),t=mn(62914560&~xt),t===0&&(t=4194304))),n=Ke(),e=Ra(e,t),e!==null&&($r(e,t,n),nt(e,n))}var nd;nd=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)ot=!0;else if((n&r)!==0)ot=(e.flags&16384)!==0;else{switch(ot=!1,t.tag){case 3:Ac(t),ei();break;case 5:lc(t);break;case 1:Ye(t.type)&&ia(t);break;case 4:Ko(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Ee(ca,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?Pc(e,t,n):(Ee(Ae,Ae.current&1),t=wt(e,t,n),t!==null?t.sibling:null);Ee(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return Mc(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Ae,Ae.current),r)break;return null;case 23:case 24:return t.lanes=0,li(e,t,n)}return wt(e,t,n)}else ot=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Sn(t,De.current),En(t,n),i=ri(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)){var d=!0;ia(t)}else d=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jo(t);var u=r.getDerivedStateFromProps;typeof u=="function"&&pa(t,r,u,e),i.updater=ha,t.stateNode=i,i._reactInternals=t,Qo(t,r,e,n),t=di(null,t,r,!0,d,n)}else t.tag=0,Ve(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,d=i._init,i=d(i._payload),t.type=i,d=t.tag=lh(i),e=at(i,e),d){case 0:t=ci(null,t,i,e,n);break e;case 1:t=Ec(null,t,i,e,n);break e;case 11:t=kc(null,t,i,e,n);break e;case 14:t=Sc(null,t,i,at(i.type,e),r,n);break e}throw Error(l(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),ci(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Ec(e,t,r,i,n);case 3:if(Ac(t),r=t.updateQueue,e===null||r===null)throw Error(l(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Zl(e,t),ir(t,r,null,n),r=t.memoizedState.element,r===i)ei(),t=wt(e,t,n);else{if(i=t.stateNode,(d=i.hydrate)&&(Nt=wn(t.stateNode.containerInfo.firstChild),yt=t,d=ut=!0),d){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)d=e[i],d._workInProgressVersionPrimary=e[i+1],Pn.push(d);for(n=sc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Ve(e,t,r,n),ei();t=t.child}return t;case 5:return lc(t),e===null&&Zo(t),r=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,u=i.children,Fo(r,i)?u=null:d!==null&&Fo(r,d)&&(t.flags|=16),Tc(e,t),Ve(e,t,u,n),t.child;case 6:return e===null&&Zo(t),null;case 13:return Pc(e,t,n);case 4:return Ko(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ga(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),kc(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,u=t.memoizedProps,d=i.value;var f=t.type._context;if(Ee(ca,f._currentValue),f._currentValue=d,u!==null)if(f=u.value,d=Ze(f,d)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(f,d):1073741823)|0,d===0){if(u.children===i.children&&!qe.current){t=wt(e,t,n);break e}}else for(f=t.child,f!==null&&(f.return=t);f!==null;){var y=f.dependencies;if(y!==null){u=f.child;for(var E=y.firstContext;E!==null;){if(E.context===r&&(E.observedBits&d)!==0){f.tag===1&&(E=jt(-1,n&-n),E.tag=2,Mt(f,E)),f.lanes|=n,E=f.alternate,E!==null&&(E.lanes|=n),Xl(f.return,n),y.lanes|=n;break}E=E.next}}else u=f.tag===10&&f.type===t.type?null:f.child;if(u!==null)u.return=f;else for(u=f;u!==null;){if(u===t){u=null;break}if(f=u.sibling,f!==null){f.return=u.return,u=f;break}u=u.return}f=u}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,d=t.pendingProps,r=d.children,En(t,n),i=et(i,d.unstable_observedBits),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return i=t.type,d=at(i,t.pendingProps),d=at(i.type,d),Sc(e,t,i,d,r,n);case 15:return Cc(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Ye(r)?(e=!0,ia(t)):e=!1,En(t,n),ac(t,r,i),Qo(t,r,i,n),di(null,t,r,!0,e,n);case 19:return Mc(e,t,n);case 23:return li(e,t,n);case 24:return li(e,t,n)}throw Error(l(156,t.tag))};function sh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new sh(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ae)return 11;if(e===Pe)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ma(e,t,n,r,i,d){var u=2;if(r=e,typeof e=="function")Li(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case q:return Nn(n.children,i,d,t);case G:u=8,i|=16;break;case ce:u=8,i|=1;break;case te:return e=rt(12,n,t,i|8),e.elementType=te,e.type=te,e.lanes=d,e;case me:return e=rt(13,n,t,i),e.type=me,e.elementType=me,e.lanes=d,e;case se:return e=rt(19,n,t,i),e.elementType=se,e.lanes=d,e;case T:return Ri(n,i,d,t);case L:return e=rt(24,n,t,i),e.elementType=L,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:u=10;break e;case ee:u=9;break e;case ae:u=11;break e;case Pe:u=14;break e;case C:u=16,r=null;break e;case D:u=22;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=rt(u,n,t,i),t.elementType=e,t.type=r,t.lanes=d,t}function Nn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ri(e,t,n,r){return e=rt(23,e,r,t),e.elementType=T,e.lanes=n,e}function ji(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Mi(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ch(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=wo(0),this.expirationTimes=wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.mutableSourceEagerHydrationData=null}function dh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Na(e,t,n,r){var i=t.current,d=Ke(),u=Ot(i);e:if(n){n=n._reactInternals;t:{if(Yt(n)!==n||n.tag!==1)throw Error(l(170));var f=n;do{switch(f.tag){case 3:f=f.stateNode.context;break t;case 1:if(Ye(f.type)){f=f.stateNode.__reactInternalMemoizedMergedChildContext;break t}}f=f.return}while(f!==null);throw Error(l(171))}if(n.tag===1){var y=n.type;if(Ye(y)){n=Hl(n,y,f);break e}}n=f}else n=Lt;return t.context===null?t.context=n:t.pendingContext=n,t=jt(d,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Mt(i,t),Ft(i,u,d),u}function Ni(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Di(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function uh(){return null}function Oi(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new ch(e,t,n!=null&&n.hydrate===!0),t=rt(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Jo(t),e[bn]=n.current,Rl(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}Oi.prototype.render=function(e){Na(e,this._internalRoot,null,null)},Oi.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Na(null,e,null,function(){t[bn]=null})};function Cr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ph(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Oi(e,0,t?{hydrate:!0}:void 0)}function Da(e,t,n,r,i){var d=n._reactRootContainer;if(d){var u=d._internalRoot;if(typeof i=="function"){var f=i;i=function(){var E=Ni(u);f.call(E)}}Na(t,u,e,i)}else{if(d=n._reactRootContainer=ph(n,r),u=d._internalRoot,typeof i=="function"){var y=i;i=function(){var E=Ni(u);y.call(E)}}Jc(function(){Na(t,u,e,i)})}return Ni(u)}Ys=function(e){if(e.tag===13){var t=Ke();Ft(e,4,t),Di(e,4)}},ho=function(e){if(e.tag===13){var t=Ke();Ft(e,67108864,t),Di(e,67108864)}},$s=function(e){if(e.tag===13){var t=Ke(),n=Ot(e);Ft(e,n,t),Di(e,n)}},Vs=function(e,t){return t()},oo=function(e,t,n){switch(t){case"input":if(Qa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=aa(r);if(!i)throw Error(l(90));Es(r),Qa(r,i)}}}break;case"textarea":Rs(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}},io=Vc,Bs=function(e,t,n,r,i){var d=oe;oe|=4;try{return Qt(98,e.bind(null,t,n,r,i))}finally{oe=d,oe===0&&(Rn(),ct())}},so=function(){(oe&49)===0&&(Xp(),_t())},Gs=function(e,t){var n=oe;oe|=2;try{return e(t)}finally{oe=n,oe===0&&(Rn(),ct())}};function ad(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cr(t))throw Error(l(200));return dh(e,t,null,n)}var hh={Events:[ar,xn,aa,_s,zs,_t,{current:!1}]},Tr={findFiberByHostInstance:$t,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},mh={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ws(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Go=Oa.inject(mh),Jt=Oa}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh,Xe.createPortal=ad,Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):Error(l(268,Object.keys(e)));return e=Ws(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e,t){var n=oe;if((n&48)!==0)return e(t);oe|=1;try{if(e)return Qt(99,e.bind(null,t))}finally{oe=n,ct()}},Xe.hydrate=function(e,t,n){if(!Cr(t))throw Error(l(200));return Da(null,e,t,!0,n)},Xe.render=function(e,t,n){if(!Cr(t))throw Error(l(200));return Da(null,e,t,!1,n)},Xe.unmountComponentAtNode=function(e){if(!Cr(e))throw Error(l(40));return e._reactRootContainer?(Jc(function(){Da(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},Xe.unstable_batchedUpdates=Vc,Xe.unstable_createPortal=function(e,t){return ad(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cr(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Da(e,t,n,!1,r)},Xe.version="17.0.2",Xe}var hd;function kh(){if(hd)return Bi.exports;hd=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Bi.exports=xh(),Bi.exports}var Sh=kh();const Ch=Dr(Sh);function ts(a,o){return ts=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,l){return s.__proto__=l,s},ts(a,o)}function gt(a,o){a.prototype=Object.create(o.prototype),a.prototype.constructor=a,ts(a,o)}var Ui={exports:{}},Wi,md;function Th(){if(md)return Wi;md=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Wi=a,Wi}var qi,fd;function Eh(){if(fd)return qi;fd=1;var a=Th();function o(){}function s(){}return s.resetWarningCache=o,qi=function(){function l(h,w,g,b,v,A){if(A!==a){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}l.isRequired=l;function c(){return l}var m={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:c,element:l,elementType:l,instanceOf:c,node:l,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:s,resetWarningCache:o};return m.PropTypes=m,m},qi}var gd;function Ah(){return gd||(gd=1,Ui.exports=Eh()()),Ui.exports}var Ph=Ah();const vd=Dr(Ph);function Ne(){return Ne=Object.assign?Object.assign.bind():function(a){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var l in s)({}).hasOwnProperty.call(s,l)&&(a[l]=s[l])}return a},Ne.apply(null,arguments)}function Fa(a){return a.charAt(0)==="/"}function Yi(a,o){for(var s=o,l=s+1,c=a.length;l<c;s+=1,l+=1)a[s]=a[l];a.pop()}function Ih(a,o){o===void 0&&(o="");var s=a&&a.split("/")||[],l=o&&o.split("/")||[],c=a&&Fa(a),m=o&&Fa(o),h=c||m;if(a&&Fa(a)?l=s:s.length&&(l.pop(),l=l.concat(s)),!l.length)return"/";var w;if(l.length){var g=l[l.length-1];w=g==="."||g===".."||g===""}else w=!1;for(var b=0,v=l.length;v>=0;v--){var A=l[v];A==="."?Yi(l,v):A===".."?(Yi(l,v),b++):b&&(Yi(l,v),b--)}if(!h)for(;b--;b)l.unshift("..");h&&l[0]!==""&&(!l[0]||!Fa(l[0]))&&l.unshift("");var P=l.join("/");return w&&P.substr(-1)!=="/"&&(P+="/"),P}function yd(a){return a.valueOf?a.valueOf():Object.prototype.valueOf.call(a)}function za(a,o){if(a===o)return!0;if(a==null||o==null)return!1;if(Array.isArray(a))return Array.isArray(o)&&a.length===o.length&&a.every(function(c,m){return za(c,o[m])});if(typeof a=="object"||typeof o=="object"){var s=yd(a),l=yd(o);return s!==a||l!==o?za(s,l):Object.keys(Object.assign({},a,o)).every(function(c){return za(a[c],o[c])})}return!1}var Lh="Invariant failed";function Wt(a,o){throw new Error(Lh)}function jr(a){return a.charAt(0)==="/"?a:"/"+a}function wd(a){return a.charAt(0)==="/"?a.substr(1):a}function Rh(a,o){return a.toLowerCase().indexOf(o.toLowerCase())===0&&"/?#".indexOf(a.charAt(o.length))!==-1}function Jd(a,o){return Rh(a,o)?a.substr(o.length):a}function Qd(a){return a.charAt(a.length-1)==="/"?a.slice(0,-1):a}function jh(a){var o=a||"/",s="",l="",c=o.indexOf("#");c!==-1&&(l=o.substr(c),o=o.substr(0,c));var m=o.indexOf("?");return m!==-1&&(s=o.substr(m),o=o.substr(0,m)),{pathname:o,search:s==="?"?"":s,hash:l==="#"?"":l}}function Je(a){var o=a.pathname,s=a.search,l=a.hash,c=o||"/";return s&&s!=="?"&&(c+=s.charAt(0)==="?"?s:"?"+s),l&&l!=="#"&&(c+=l.charAt(0)==="#"?l:"#"+l),c}function He(a,o,s,l){var c;typeof a=="string"?(c=jh(a),c.state=o):(c=Ne({},a),c.pathname===void 0&&(c.pathname=""),c.search?c.search.charAt(0)!=="?"&&(c.search="?"+c.search):c.search="",c.hash?c.hash.charAt(0)!=="#"&&(c.hash="#"+c.hash):c.hash="",o!==void 0&&c.state===void 0&&(c.state=o));try{c.pathname=decodeURI(c.pathname)}catch(m){throw m instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):m}return s&&(c.key=s),l?c.pathname?c.pathname.charAt(0)!=="/"&&(c.pathname=Ih(c.pathname,l.pathname)):c.pathname=l.pathname:c.pathname||(c.pathname="/"),c}function Mh(a,o){return a.pathname===o.pathname&&a.search===o.search&&a.hash===o.hash&&a.key===o.key&&za(a.state,o.state)}function cs(){var a=null;function o(h){return a=h,function(){a===h&&(a=null)}}function s(h,w,g,b){if(a!=null){var v=typeof a=="function"?a(h,w):a;typeof v=="string"?typeof g=="function"?g(v,b):b(!0):b(v!==!1)}else b(!0)}var l=[];function c(h){var w=!0;function g(){w&&h.apply(void 0,arguments)}return l.push(g),function(){w=!1,l=l.filter(function(b){return b!==g})}}function m(){for(var h=arguments.length,w=new Array(h),g=0;g<h;g++)w[g]=arguments[g];l.forEach(function(b){return b.apply(void 0,w)})}return{setPrompt:o,confirmTransitionTo:s,appendListener:c,notifyListeners:m}}var Kd=!!(typeof window<"u"&&window.document&&window.document.createElement);function Xd(a,o){o(window.confirm(a))}function Nh(){var a=window.navigator.userAgent;return(a.indexOf("Android 2.")!==-1||a.indexOf("Android 4.0")!==-1)&&a.indexOf("Mobile Safari")!==-1&&a.indexOf("Chrome")===-1&&a.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function Dh(){return window.navigator.userAgent.indexOf("Trident")===-1}function Oh(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Fh(a){return a.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var bd="popstate",xd="hashchange";function kd(){try{return window.history.state||{}}catch{return{}}}function _h(a){a===void 0&&(a={}),Kd||Wt();var o=window.history,s=Nh(),l=!Dh(),c=a,m=c.forceRefresh,h=m===void 0?!1:m,w=c.getUserConfirmation,g=w===void 0?Xd:w,b=c.keyLength,v=b===void 0?6:b,A=a.basename?Qd(jr(a.basename)):"";function P(z){var G=z||{},T=G.key,L=G.state,M=window.location,J=M.pathname,X=M.search,ve=M.hash,ke=J+X+ve;return A&&(ke=Jd(ke,A)),He(ke,L,T)}function F(){return Math.random().toString(36).substr(2,v)}var _=cs();function Y(z){Ne(D,z),D.length=o.length,_.notifyListeners(D.location,D.action)}function K(z){Fh(z)||B(P(z.state))}function N(){B(P(kd()))}var H=!1;function B(z){if(H)H=!1,Y();else{var G="POP";_.confirmTransitionTo(z,G,g,function(T){T?Y({action:G,location:z}):ne(z)})}}function ne(z){var G=D.location,T=U.indexOf(G.key);T===-1&&(T=0);var L=U.indexOf(z.key);L===-1&&(L=0);var M=T-L;M&&(H=!0,te(M))}var R=P(kd()),U=[R.key];function $(z){return A+Je(z)}function q(z,G){var T="PUSH",L=He(z,G,F(),D.location);_.confirmTransitionTo(L,T,g,function(M){if(M){var J=$(L),X=L.key,ve=L.state;if(s)if(o.pushState({key:X,state:ve},null,J),h)window.location.href=J;else{var ke=U.indexOf(D.location.key),Re=U.slice(0,ke+1);Re.push(L.key),U=Re,Y({action:T,location:L})}else window.location.href=J}})}function ce(z,G){var T="REPLACE",L=He(z,G,F(),D.location);_.confirmTransitionTo(L,T,g,function(M){if(M){var J=$(L),X=L.key,ve=L.state;if(s)if(o.replaceState({key:X,state:ve},null,J),h)window.location.replace(J);else{var ke=U.indexOf(D.location.key);ke!==-1&&(U[ke]=L.key),Y({action:T,location:L})}else window.location.replace(J)}})}function te(z){o.go(z)}function de(){te(-1)}function ee(){te(1)}var ae=0;function me(z){ae+=z,ae===1&&z===1?(window.addEventListener(bd,K),l&&window.addEventListener(xd,N)):ae===0&&(window.removeEventListener(bd,K),l&&window.removeEventListener(xd,N))}var se=!1;function Pe(z){z===void 0&&(z=!1);var G=_.setPrompt(z);return se||(me(1),se=!0),function(){return se&&(se=!1,me(-1)),G()}}function C(z){var G=_.appendListener(z);return me(1),function(){me(-1),G()}}var D={length:o.length,action:"POP",location:R,createHref:$,push:q,replace:ce,go:te,goBack:de,goForward:ee,block:Pe,listen:C};return D}var Sd="hashchange",zh={hashbang:{encodePath:function(o){return o.charAt(0)==="!"?o:"!/"+wd(o)},decodePath:function(o){return o.charAt(0)==="!"?o.substr(1):o}},noslash:{encodePath:wd,decodePath:jr},slash:{encodePath:jr,decodePath:jr}};function Zd(a){var o=a.indexOf("#");return o===-1?a:a.slice(0,o)}function Er(){var a=window.location.href,o=a.indexOf("#");return o===-1?"":a.substring(o+1)}function Bh(a){window.location.hash=a}function $i(a){window.location.replace(Zd(window.location.href)+"#"+a)}function Gh(a){a===void 0&&(a={}),Kd||Wt();var o=window.history;Oh();var s=a,l=s.getUserConfirmation,c=l===void 0?Xd:l,m=s.hashType,h=m===void 0?"slash":m,w=a.basename?Qd(jr(a.basename)):"",g=zh[h],b=g.encodePath,v=g.decodePath;function A(){var G=v(Er());return w&&(G=Jd(G,w)),He(G)}var P=cs();function F(G){Ne(z,G),z.length=o.length,P.notifyListeners(z.location,z.action)}var _=!1,Y=null;function K(G,T){return G.pathname===T.pathname&&G.search===T.search&&G.hash===T.hash}function N(){var G=Er(),T=b(G);if(G!==T)$i(T);else{var L=A(),M=z.location;if(!_&&K(M,L)||Y===Je(L))return;Y=null,H(L)}}function H(G){if(_)_=!1,F();else{var T="POP";P.confirmTransitionTo(G,T,c,function(L){L?F({action:T,location:G}):B(G)})}}function B(G){var T=z.location,L=$.lastIndexOf(Je(T));L===-1&&(L=0);var M=$.lastIndexOf(Je(G));M===-1&&(M=0);var J=L-M;J&&(_=!0,de(J))}var ne=Er(),R=b(ne);ne!==R&&$i(R);var U=A(),$=[Je(U)];function q(G){var T=document.querySelector("base"),L="";return T&&T.getAttribute("href")&&(L=Zd(window.location.href)),L+"#"+b(w+Je(G))}function ce(G,T){var L="PUSH",M=He(G,void 0,void 0,z.location);P.confirmTransitionTo(M,L,c,function(J){if(J){var X=Je(M),ve=b(w+X),ke=Er()!==ve;if(ke){Y=X,Bh(ve);var Re=$.lastIndexOf(Je(z.location)),We=$.slice(0,Re+1);We.push(X),$=We,F({action:L,location:M})}else F()}})}function te(G,T){var L="REPLACE",M=He(G,void 0,void 0,z.location);P.confirmTransitionTo(M,L,c,function(J){if(J){var X=Je(M),ve=b(w+X),ke=Er()!==ve;ke&&(Y=X,$i(ve));var Re=$.indexOf(Je(z.location));Re!==-1&&($[Re]=X),F({action:L,location:M})}})}function de(G){o.go(G)}function ee(){de(-1)}function ae(){de(1)}var me=0;function se(G){me+=G,me===1&&G===1?window.addEventListener(Sd,N):me===0&&window.removeEventListener(Sd,N)}var Pe=!1;function C(G){G===void 0&&(G=!1);var T=P.setPrompt(G);return Pe||(se(1),Pe=!0),function(){return Pe&&(Pe=!1,se(-1)),T()}}function D(G){var T=P.appendListener(G);return se(1),function(){se(-1),T()}}var z={length:o.length,action:"POP",location:U,createHref:q,push:ce,replace:te,go:de,goBack:ee,goForward:ae,block:C,listen:D};return z}function Cd(a,o,s){return Math.min(Math.max(a,o),s)}function Hh(a){a===void 0&&(a={});var o=a,s=o.getUserConfirmation,l=o.initialEntries,c=l===void 0?["/"]:l,m=o.initialIndex,h=m===void 0?0:m,w=o.keyLength,g=w===void 0?6:w,b=cs();function v(q){Ne($,q),$.length=$.entries.length,b.notifyListeners($.location,$.action)}function A(){return Math.random().toString(36).substr(2,g)}var P=Cd(h,0,c.length-1),F=c.map(function(q){return typeof q=="string"?He(q,void 0,A()):He(q,void 0,q.key||A())}),_=Je;function Y(q,ce){var te="PUSH",de=He(q,ce,A(),$.location);b.confirmTransitionTo(de,te,s,function(ee){if(ee){var ae=$.index,me=ae+1,se=$.entries.slice(0);se.length>me?se.splice(me,se.length-me,de):se.push(de),v({action:te,location:de,index:me,entries:se})}})}function K(q,ce){var te="REPLACE",de=He(q,ce,A(),$.location);b.confirmTransitionTo(de,te,s,function(ee){ee&&($.entries[$.index]=de,v({action:te,location:de}))})}function N(q){var ce=Cd($.index+q,0,$.entries.length-1),te="POP",de=$.entries[ce];b.confirmTransitionTo(de,te,s,function(ee){ee?v({action:te,location:de,index:ce}):v()})}function H(){N(-1)}function B(){N(1)}function ne(q){var ce=$.index+q;return ce>=0&&ce<$.entries.length}function R(q){return q===void 0&&(q=!1),b.setPrompt(q)}function U(q){return b.appendListener(q)}var $={length:F.length,action:"POP",location:F[P],index:P,entries:F,createHref:_,push:Y,replace:K,go:N,goBack:H,goForward:B,canGo:ne,block:R,listen:U};return $}var nn={exports:{}},Vi,Td;function Uh(){return Td||(Td=1,Vi=Array.isArray||function(a){return Object.prototype.toString.call(a)=="[object Array]"}),Vi}var Ed;function Wh(){if(Ed)return nn.exports;Ed=1;var a=Uh();nn.exports=K,nn.exports.parse=s,nn.exports.compile=c,nn.exports.tokensToFunction=w,nn.exports.tokensToRegExp=Y;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function s(N,H){for(var B=[],ne=0,R=0,U="",$=H&&H.delimiter||"/",q;(q=o.exec(N))!=null;){var ce=q[0],te=q[1],de=q.index;if(U+=N.slice(R,de),R=de+ce.length,te){U+=te[1];continue}var ee=N[R],ae=q[2],me=q[3],se=q[4],Pe=q[5],C=q[6],D=q[7];U&&(B.push(U),U="");var z=ae!=null&&ee!=null&&ee!==ae,G=C==="+"||C==="*",T=C==="?"||C==="*",L=ae||$,M=se||Pe,J=ae||(typeof B[B.length-1]=="string"?B[B.length-1]:"");B.push({name:me||ne++,prefix:ae||"",delimiter:L,optional:T,repeat:G,partial:z,asterisk:!!D,pattern:M?b(M):D?".*":l(L,J)})}return R<N.length&&(U+=N.substr(R)),U&&B.push(U),B}function l(N,H){return!H||H.indexOf(N)>-1?"[^"+g(N)+"]+?":g(H)+"|(?:(?!"+g(H)+")[^"+g(N)+"])+?"}function c(N,H){return w(s(N,H),H)}function m(N){return encodeURI(N).replace(/[\/?#]/g,function(H){return"%"+H.charCodeAt(0).toString(16).toUpperCase()})}function h(N){return encodeURI(N).replace(/[?#]/g,function(H){return"%"+H.charCodeAt(0).toString(16).toUpperCase()})}function w(N,H){for(var B=new Array(N.length),ne=0;ne<N.length;ne++)typeof N[ne]=="object"&&(B[ne]=new RegExp("^(?:"+N[ne].pattern+")$",A(H)));return function(R,U){for(var $="",q=R||{},ce=U||{},te=ce.pretty?m:encodeURIComponent,de=0;de<N.length;de++){var ee=N[de];if(typeof ee=="string"){$+=ee;continue}var ae=q[ee.name],me;if(ae==null)if(ee.optional){ee.partial&&($+=ee.prefix);continue}else throw new TypeError('Expected "'+ee.name+'" to be defined');if(a(ae)){if(!ee.repeat)throw new TypeError('Expected "'+ee.name+'" to not repeat, but received `'+JSON.stringify(ae)+"`");if(ae.length===0){if(ee.optional)continue;throw new TypeError('Expected "'+ee.name+'" to not be empty')}for(var se=0;se<ae.length;se++){if(me=te(ae[se]),!B[de].test(me))throw new TypeError('Expected all "'+ee.name+'" to match "'+ee.pattern+'", but received `'+JSON.stringify(me)+"`");$+=(se===0?ee.prefix:ee.delimiter)+me}continue}if(me=ee.asterisk?h(ae):te(ae),!B[de].test(me))throw new TypeError('Expected "'+ee.name+'" to match "'+ee.pattern+'", but received "'+me+'"');$+=ee.prefix+me}return $}}function g(N){return N.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function b(N){return N.replace(/([=!:$\/()])/g,"\\$1")}function v(N,H){return N.keys=H,N}function A(N){return N&&N.sensitive?"":"i"}function P(N,H){var B=N.source.match(/\((?!\?)/g);if(B)for(var ne=0;ne<B.length;ne++)H.push({name:ne,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return v(N,H)}function F(N,H,B){for(var ne=[],R=0;R<N.length;R++)ne.push(K(N[R],H,B).source);var U=new RegExp("(?:"+ne.join("|")+")",A(B));return v(U,H)}function _(N,H,B){return Y(s(N,B),H,B)}function Y(N,H,B){a(H)||(B=H||B,H=[]),B=B||{};for(var ne=B.strict,R=B.end!==!1,U="",$=0;$<N.length;$++){var q=N[$];if(typeof q=="string")U+=g(q);else{var ce=g(q.prefix),te="(?:"+q.pattern+")";H.push(q),q.repeat&&(te+="(?:"+ce+te+")*"),q.optional?q.partial?te=ce+"("+te+")?":te="(?:"+ce+"("+te+"))?":te=ce+"("+te+")",U+=te}}var de=g(B.delimiter||"/"),ee=U.slice(-de.length)===de;return ne||(U=(ee?U.slice(0,-de.length):U)+"(?:"+de+"(?=$))?"),R?U+="$":U+=ne&&ee?"":"(?="+de+"|$)",v(new RegExp("^"+U,A(B)),H)}function K(N,H,B){return a(H)||(B=H||B,H=[]),B=B||{},N instanceof RegExp?P(N,H):a(N)?F(N,H,B):_(N,H,B)}return nn.exports}var qh=Wh();const eu=Dr(qh);var Ji={exports:{}},be={};var Ad;function Yh(){if(Ad)return be;Ad=1;var a=typeof Symbol=="function"&&Symbol.for,o=a?Symbol.for("react.element"):60103,s=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,m=a?Symbol.for("react.profiler"):60114,h=a?Symbol.for("react.provider"):60109,w=a?Symbol.for("react.context"):60110,g=a?Symbol.for("react.async_mode"):60111,b=a?Symbol.for("react.concurrent_mode"):60111,v=a?Symbol.for("react.forward_ref"):60112,A=a?Symbol.for("react.suspense"):60113,P=a?Symbol.for("react.suspense_list"):60120,F=a?Symbol.for("react.memo"):60115,_=a?Symbol.for("react.lazy"):60116,Y=a?Symbol.for("react.block"):60121,K=a?Symbol.for("react.fundamental"):60117,N=a?Symbol.for("react.responder"):60118,H=a?Symbol.for("react.scope"):60119;function B(R){if(typeof R=="object"&&R!==null){var U=R.$$typeof;switch(U){case o:switch(R=R.type,R){case g:case b:case l:case m:case c:case A:return R;default:switch(R=R&&R.$$typeof,R){case w:case v:case _:case F:case h:return R;default:return U}}case s:return U}}}function ne(R){return B(R)===b}return be.AsyncMode=g,be.ConcurrentMode=b,be.ContextConsumer=w,be.ContextProvider=h,be.Element=o,be.ForwardRef=v,be.Fragment=l,be.Lazy=_,be.Memo=F,be.Portal=s,be.Profiler=m,be.StrictMode=c,be.Suspense=A,be.isAsyncMode=function(R){return ne(R)||B(R)===g},be.isConcurrentMode=ne,be.isContextConsumer=function(R){return B(R)===w},be.isContextProvider=function(R){return B(R)===h},be.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===o},be.isForwardRef=function(R){return B(R)===v},be.isFragment=function(R){return B(R)===l},be.isLazy=function(R){return B(R)===_},be.isMemo=function(R){return B(R)===F},be.isPortal=function(R){return B(R)===s},be.isProfiler=function(R){return B(R)===m},be.isStrictMode=function(R){return B(R)===c},be.isSuspense=function(R){return B(R)===A},be.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===l||R===b||R===m||R===c||R===A||R===P||typeof R=="object"&&R!==null&&(R.$$typeof===_||R.$$typeof===F||R.$$typeof===h||R.$$typeof===w||R.$$typeof===v||R.$$typeof===K||R.$$typeof===N||R.$$typeof===H||R.$$typeof===Y)},be.typeOf=B,be}var Pd;function tu(){return Pd||(Pd=1,Ji.exports=Yh()),Ji.exports}tu();function qa(a,o){if(a==null)return{};var s={};for(var l in a)if({}.hasOwnProperty.call(a,l)){if(o.indexOf(l)!==-1)continue;s[l]=a[l]}return s}var Qi,Id;function $h(){if(Id)return Qi;Id=1;var a=tu(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},m={};m[a.ForwardRef]=l,m[a.Memo]=c;function h(_){return a.isMemo(_)?c:m[_.$$typeof]||o}var w=Object.defineProperty,g=Object.getOwnPropertyNames,b=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,A=Object.getPrototypeOf,P=Object.prototype;function F(_,Y,K){if(typeof Y!="string"){if(P){var N=A(Y);N&&N!==P&&F(_,N,K)}var H=g(Y);b&&(H=H.concat(b(Y)));for(var B=h(_),ne=h(Y),R=0;R<H.length;++R){var U=H[R];if(!s[U]&&!(K&&K[U])&&!(ne&&ne[U])&&!(B&&B[U])){var $=v(Y,U);try{w(_,U,$)}catch{}}}}return _}return Qi=F,Qi}$h();var Ki=1073741823,Ld=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function Vh(){var a="__global_unique_id__";return Ld[a]=(Ld[a]||0)+1}function Jh(a,o){return a===o?a!==0||1/a===1/o:a!==a&&o!==o}function Qh(a){var o=[];return{on:function(l){o.push(l)},off:function(l){o=o.filter(function(c){return c!==l})},get:function(){return a},set:function(l,c){a=l,o.forEach(function(m){return m(a,c)})}}}function Kh(a){return Array.isArray(a)?a[0]:a}function Xh(a,o){var s,l,c="__create-react-context-"+Vh()+"__",m=(function(w){gt(g,w);function g(){for(var v,A=arguments.length,P=new Array(A),F=0;F<A;F++)P[F]=arguments[F];return v=w.call.apply(w,[this].concat(P))||this,v.emitter=Qh(v.props.value),v}var b=g.prototype;return b.getChildContext=function(){var A;return A={},A[c]=this.emitter,A},b.componentWillReceiveProps=function(A){if(this.props.value!==A.value){var P=this.props.value,F=A.value,_;Jh(P,F)?_=0:(_=typeof o=="function"?o(P,F):Ki,_|=0,_!==0&&this.emitter.set(A.value,_))}},b.render=function(){return this.props.children},g})(ge.Component);m.childContextTypes=(s={},s[c]=vd.object.isRequired,s);var h=(function(w){gt(g,w);function g(){for(var v,A=arguments.length,P=new Array(A),F=0;F<A;F++)P[F]=arguments[F];return v=w.call.apply(w,[this].concat(P))||this,v.observedBits=void 0,v.state={value:v.getValue()},v.onUpdate=function(_,Y){var K=v.observedBits|0;(K&Y)!==0&&v.setState({value:v.getValue()})},v}var b=g.prototype;return b.componentWillReceiveProps=function(A){var P=A.observedBits;this.observedBits=P??Ki},b.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var A=this.props.observedBits;this.observedBits=A??Ki},b.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},b.getValue=function(){return this.context[c]?this.context[c].get():a},b.render=function(){return Kh(this.props.children)(this.state.value)},g})(ge.Component);return h.contextTypes=(l={},l[c]=vd.object,l),{Provider:m,Consumer:h}}var Zh=ge.createContext||Xh,nu=function(o){var s=Zh();return s.displayName=o,s},ru=nu("Router-History"),Ut=nu("Router"),Ya=(function(a){gt(o,a),o.computeRootMatch=function(c){return{path:"/",url:"/",params:{},isExact:c==="/"}};function o(l){var c;return c=a.call(this,l)||this,c.state={location:l.history.location},c._isMounted=!1,c._pendingLocation=null,l.staticContext||(c.unlisten=l.history.listen(function(m){c._pendingLocation=m})),c}var s=o.prototype;return s.componentDidMount=function(){var c=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(m){c._isMounted&&c.setState({location:m})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},s.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},s.render=function(){return ge.createElement(Ut.Provider,{value:{history:this.props.history,location:this.state.location,match:o.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},ge.createElement(ru.Provider,{children:this.props.children||null,value:this.props.history}))},o})(ge.Component);ge.Component;var em=(function(a){gt(o,a);function o(){return a.apply(this,arguments)||this}var s=o.prototype;return s.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},s.componentDidUpdate=function(c){this.props.onUpdate&&this.props.onUpdate.call(this,this,c)},s.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},s.render=function(){return null},o})(ge.Component),Xi={},tm=1e4,Rd=0;function nm(a){if(Xi[a])return Xi[a];var o=eu.compile(a);return Rd<tm&&(Xi[a]=o,Rd++),o}function jd(a,o){return a===void 0&&(a="/"),o===void 0&&(o={}),a==="/"?a:nm(a)(o,{pretty:!0})}function Mr(a){var o=a.computedMatch,s=a.to,l=a.push,c=l===void 0?!1:l;return ge.createElement(Ut.Consumer,null,function(m){m||Wt();var h=m.history,w=m.staticContext,g=c?h.push:h.replace,b=He(o?typeof s=="string"?jd(s,o.params):Ne({},s,{pathname:jd(s.pathname,o.params)}):s);return w?(g(b),null):ge.createElement(em,{onMount:function(){g(b)},onUpdate:function(A,P){var F=He(P.to);Mh(F,Ne({},b,{key:F.key}))||g(b)},to:s})})}var Md={},rm=1e4,Nd=0;function am(a,o){var s=""+o.end+o.strict+o.sensitive,l=Md[s]||(Md[s]={});if(l[a])return l[a];var c=[],m=eu(a,c,o),h={regexp:m,keys:c};return Nd<rm&&(l[a]=h,Nd++),h}function ds(a,o){o===void 0&&(o={}),(typeof o=="string"||Array.isArray(o))&&(o={path:o});var s=o,l=s.path,c=s.exact,m=c===void 0?!1:c,h=s.strict,w=h===void 0?!1:h,g=s.sensitive,b=g===void 0?!1:g,v=[].concat(l);return v.reduce(function(A,P){if(!P&&P!=="")return null;if(A)return A;var F=am(P,{end:m,strict:w,sensitive:b}),_=F.regexp,Y=F.keys,K=_.exec(a);if(!K)return null;var N=K[0],H=K.slice(1),B=a===N;return m&&!B?null:{path:P,url:P==="/"&&N===""?"/":N,isExact:B,params:Y.reduce(function(ne,R,U){return ne[R.name]=H[U],ne},{})}},null)}function om(a){return ge.Children.count(a)===0}var mt=(function(a){gt(o,a);function o(){return a.apply(this,arguments)||this}var s=o.prototype;return s.render=function(){var c=this;return ge.createElement(Ut.Consumer,null,function(m){m||Wt();var h=c.props.location||m.location,w=c.props.computedMatch?c.props.computedMatch:c.props.path?ds(h.pathname,c.props):m.match,g=Ne({},m,{location:h,match:w}),b=c.props,v=b.children,A=b.component,P=b.render;return Array.isArray(v)&&om(v)&&(v=null),ge.createElement(Ut.Provider,{value:g},g.match?v?typeof v=="function"?v(g):v:A?ge.createElement(A,g):P?P(g):null:typeof v=="function"?v(g):null)})},o})(ge.Component);function us(a){return a.charAt(0)==="/"?a:"/"+a}function im(a,o){return a?Ne({},o,{pathname:us(a)+o.pathname}):o}function sm(a,o){if(!a)return o;var s=us(a);return o.pathname.indexOf(s)!==0?o:Ne({},o,{pathname:o.pathname.substr(s.length)})}function Dd(a){return typeof a=="string"?a:Je(a)}function Zi(a){return function(){Wt()}}function Od(){}ge.Component;var lm=(function(a){gt(o,a);function o(){return a.apply(this,arguments)||this}var s=o.prototype;return s.render=function(){var c=this;return ge.createElement(Ut.Consumer,null,function(m){m||Wt();var h=c.props.location||m.location,w,g;return ge.Children.forEach(c.props.children,function(b){if(g==null&&ge.isValidElement(b)){w=b;var v=b.props.path||b.props.from;g=v?ds(h.pathname,Ne({},b.props,{path:v})):m.match}}),g?ge.cloneElement(w,{location:h,computedMatch:g}):null})},o})(ge.Component),au=ge.useContext;function cm(){return au(ru)}function dm(){return au(Ut).location}var um=(function(a){gt(o,a);function o(){for(var l,c=arguments.length,m=new Array(c),h=0;h<c;h++)m[h]=arguments[h];return l=a.call.apply(a,[this].concat(m))||this,l.history=_h(l.props),l}var s=o.prototype;return s.render=function(){return ge.createElement(Ya,{history:this.history,children:this.props.children})},o})(ge.Component);ge.Component;var ns=function(o,s){return typeof o=="function"?o(s):o},rs=function(o,s){return typeof o=="string"?He(o,null,null,s):o},ps=function(o){return o},On=ge.forwardRef;typeof On>"u"&&(On=ps);function pm(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}var hm=On(function(a,o){var s=a.innerRef,l=a.navigate,c=a.onClick,m=qa(a,["innerRef","navigate","onClick"]),h=m.target,w=Ne({},m,{onClick:function(b){try{c&&c(b)}catch(v){throw b.preventDefault(),v}!b.defaultPrevented&&b.button===0&&(!h||h==="_self")&&!pm(b)&&(b.preventDefault(),l())}});return ps!==On?w.ref=o||s:w.ref=s,ge.createElement("a",w)}),ze=On(function(a,o){var s=a.component,l=s===void 0?hm:s,c=a.replace,m=a.to,h=a.innerRef,w=qa(a,["component","replace","to","innerRef"]);return ge.createElement(Ut.Consumer,null,function(g){g||Wt();var b=g.history,v=rs(ns(m,g.location),g.location),A=v?b.createHref(v):"",P=Ne({},w,{href:A,navigate:function(){var _=ns(m,g.location),Y=Je(g.location)===Je(rs(_)),K=c||Y?b.replace:b.push;K(_)}});return ps!==On?P.ref=o||h:P.innerRef=h,ge.createElement(l,P)})}),ou=function(o){return o},Ba=ge.forwardRef;typeof Ba>"u"&&(Ba=ou);function mm(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return o.filter(function(l){return l}).join(" ")}var fm=Ba(function(a,o){var s=a["aria-current"],l=s===void 0?"page":s,c=a.activeClassName,m=c===void 0?"active":c,h=a.activeStyle,w=a.className,g=a.exact,b=a.isActive,v=a.location,A=a.sensitive,P=a.strict,F=a.style,_=a.to,Y=a.innerRef,K=qa(a,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return ge.createElement(Ut.Consumer,null,function(N){N||Wt();var H=v||N.location,B=rs(ns(_,H),H),ne=B.pathname,R=ne&&ne.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),U=R?ds(H.pathname,{path:R,exact:g,sensitive:A,strict:P}):null,$=!!(b?b(U,H):U),q=typeof w=="function"?w($):w,ce=typeof F=="function"?F($):F;$&&(q=mm(q,m),ce=Ne({},ce,h));var te=Ne({"aria-current":$&&l||null,className:q,style:ce,to:B},K);return ou!==Ba?te.ref=o||Y:te.innerRef=Y,ge.createElement(ze,te)})});const gm=`---
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
`,vm=`---
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
`,ym=`---
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
`,wm=`---
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
`,bm=`<!DOCTYPE html>
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
`,xm=`<!DOCTYPE html>
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
`,km=`<!DOCTYPE html>
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
`,Sm=`<!DOCTYPE html>
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
<meta property="og:image" content="/images/rk-formal.jpg">
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
`,Cm=`<!DOCTYPE html>
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
`,Tm=`<!DOCTYPE html>
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
`;function hs(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var on=hs();function iu(a){on=a}var rn={exec:()=>null};function we(a,o=""){let s=typeof a=="string"?a:a.source,l={replace:(c,m)=>{let h=typeof m=="string"?m:m.source;return h=h.replace(Ue.caret,"$1"),s=s.replace(c,h),l},getRegex:()=>new RegExp(s,o)};return l}var Em=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ue={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}#`),htmlBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}>`)},Am=/^(?:[ \t]*(?:\n|$))+/,Pm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Im=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Or=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Lm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ms=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,su=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,lu=we(su).replace(/bull/g,ms).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Rm=we(su).replace(/bull/g,ms).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),fs=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,jm=/^[^\n]+/,gs=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Mm=we(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",gs).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Nm=we(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ms).getRegex(),$a="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vs=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Dm=we("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",vs).replace("tag",$a).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),cu=we(fs).replace("hr",Or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$a).getRegex(),Om=we(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",cu).getRegex(),ys={blockquote:Om,code:Pm,def:Mm,fences:Im,heading:Lm,hr:Or,html:Dm,lheading:lu,list:Nm,newline:Am,paragraph:cu,table:rn,text:jm},Fd=we("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$a).getRegex(),Fm={...ys,lheading:Rm,table:Fd,paragraph:we(fs).replace("hr",Or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Fd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",$a).getRegex()},_m={...ys,html:we(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vs).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:rn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:we(fs).replace("hr",Or).replace("heading",` *#{1,6} *[^
]`).replace("lheading",lu).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Bm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,du=/^( {2,}|\\)\n(?!\s*$)/,Gm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Fn=/[\p{P}\p{S}]/u,Va=/[\s\p{P}\p{S}]/u,ws=/[^\s\p{P}\p{S}]/u,Hm=we(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Va).getRegex(),uu=/(?!~)[\p{P}\p{S}]/u,Um=/(?!~)[\s\p{P}\p{S}]/u,Wm=/(?:[^\s\p{P}\p{S}]|~)/u,qm=we(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Em?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),pu=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ym=we(pu,"u").replace(/punct/g,Fn).getRegex(),$m=we(pu,"u").replace(/punct/g,uu).getRegex(),hu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Vm=we(hu,"gu").replace(/notPunctSpace/g,ws).replace(/punctSpace/g,Va).replace(/punct/g,Fn).getRegex(),Jm=we(hu,"gu").replace(/notPunctSpace/g,Wm).replace(/punctSpace/g,Um).replace(/punct/g,uu).getRegex(),Qm=we("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ws).replace(/punctSpace/g,Va).replace(/punct/g,Fn).getRegex(),Km=we(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Fn).getRegex(),Xm="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Zm=we(Xm,"gu").replace(/notPunctSpace/g,ws).replace(/punctSpace/g,Va).replace(/punct/g,Fn).getRegex(),ef=we(/\\(punct)/,"gu").replace(/punct/g,Fn).getRegex(),tf=we(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nf=we(vs).replace("(?:-->|$)","-->").getRegex(),rf=we("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",nf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ga=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,af=we(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ga).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),mu=we(/^!?\[(label)\]\[(ref)\]/).replace("label",Ga).replace("ref",gs).getRegex(),fu=we(/^!?\[(ref)\](?:\[\])?/).replace("ref",gs).getRegex(),of=we("reflink|nolink(?!\\()","g").replace("reflink",mu).replace("nolink",fu).getRegex(),_d=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,bs={_backpedal:rn,anyPunctuation:ef,autolink:tf,blockSkip:qm,br:du,code:Bm,del:rn,delLDelim:rn,delRDelim:rn,emStrongLDelim:Ym,emStrongRDelimAst:Vm,emStrongRDelimUnd:Qm,escape:zm,link:af,nolink:fu,punctuation:Hm,reflink:mu,reflinkSearch:of,tag:rf,text:Gm,url:rn},sf={...bs,link:we(/^!?\[(label)\]\((.*?)\)/).replace("label",Ga).getRegex(),reflink:we(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ga).getRegex()},as={...bs,emStrongRDelimAst:Jm,emStrongLDelim:$m,delLDelim:Km,delRDelim:Zm,url:we(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",_d).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:we(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",_d).getRegex()},lf={...as,br:we(du).replace("{2,}","*").getRegex(),text:we(as.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},_a={normal:ys,gfm:Fm,pedantic:_m},Ar={normal:bs,gfm:as,breaks:lf,pedantic:sf},cf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},zd=a=>cf[a];function ft(a,o){if(o){if(Ue.escapeTest.test(a))return a.replace(Ue.escapeReplace,zd)}else if(Ue.escapeTestNoEncode.test(a))return a.replace(Ue.escapeReplaceNoEncode,zd);return a}function Bd(a){try{a=encodeURI(a).replace(Ue.percentDecode,"%")}catch{return null}return a}function Gd(a,o){let s=a.replace(Ue.findPipe,(m,h,w)=>{let g=!1,b=h;for(;--b>=0&&w[b]==="\\";)g=!g;return g?"|":" |"}),l=s.split(Ue.splitPipe),c=0;if(l[0].trim()||l.shift(),l.length>0&&!l.at(-1)?.trim()&&l.pop(),o)if(l.length>o)l.splice(o);else for(;l.length<o;)l.push("");for(;c<l.length;c++)l[c]=l[c].trim().replace(Ue.slashPipe,"|");return l}function Pr(a,o,s){let l=a.length;if(l===0)return"";let c=0;for(;c<l&&a.charAt(l-c-1)===o;)c++;return a.slice(0,l-c)}function df(a,o){if(a.indexOf(o[1])===-1)return-1;let s=0;for(let l=0;l<a.length;l++)if(a[l]==="\\")l++;else if(a[l]===o[0])s++;else if(a[l]===o[1]&&(s--,s<0))return l;return s>0?-2:-1}function uf(a,o=0){let s=o,l="";for(let c of a)if(c==="	"){let m=4-s%4;l+=" ".repeat(m),s+=m}else l+=c,s++;return l}function Hd(a,o,s,l,c){let m=o.href,h=o.title||null,w=a[1].replace(c.other.outputLinkReplace,"$1");l.state.inLink=!0;let g={type:a[0].charAt(0)==="!"?"image":"link",raw:s,href:m,title:h,text:w,tokens:l.inlineTokens(w)};return l.state.inLink=!1,g}function pf(a,o,s){let l=a.match(s.other.indentCodeCompensation);if(l===null)return o;let c=l[1];return o.split(`
`).map(m=>{let h=m.match(s.other.beginningSpace);if(h===null)return m;let[w]=h;return w.length>=c.length?m.slice(c.length):m}).join(`
`)}var Ha=class{options;rules;lexer;constructor(a){this.options=a||on}space(a){let o=this.rules.block.newline.exec(a);if(o&&o[0].length>0)return{type:"space",raw:o[0]}}code(a){let o=this.rules.block.code.exec(a);if(o){let s=o[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:o[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Pr(s,`
`)}}}fences(a){let o=this.rules.block.fences.exec(a);if(o){let s=o[0],l=pf(s,o[3]||"",this.rules);return{type:"code",raw:s,lang:o[2]?o[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):o[2],text:l}}}heading(a){let o=this.rules.block.heading.exec(a);if(o){let s=o[2].trim();if(this.rules.other.endingHash.test(s)){let l=Pr(s,"#");(this.options.pedantic||!l||this.rules.other.endingSpaceChar.test(l))&&(s=l.trim())}return{type:"heading",raw:o[0],depth:o[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(a){let o=this.rules.block.hr.exec(a);if(o)return{type:"hr",raw:Pr(o[0],`
`)}}blockquote(a){let o=this.rules.block.blockquote.exec(a);if(o){let s=Pr(o[0],`
`).split(`
`),l="",c="",m=[];for(;s.length>0;){let h=!1,w=[],g;for(g=0;g<s.length;g++)if(this.rules.other.blockquoteStart.test(s[g]))w.push(s[g]),h=!0;else if(!h)w.push(s[g]);else break;s=s.slice(g);let b=w.join(`
`),v=b.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");l=l?`${l}
${b}`:b,c=c?`${c}
${v}`:v;let A=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,m,!0),this.lexer.state.top=A,s.length===0)break;let P=m.at(-1);if(P?.type==="code")break;if(P?.type==="blockquote"){let F=P,_=F.raw+`
`+s.join(`
`),Y=this.blockquote(_);m[m.length-1]=Y,l=l.substring(0,l.length-F.raw.length)+Y.raw,c=c.substring(0,c.length-F.text.length)+Y.text;break}else if(P?.type==="list"){let F=P,_=F.raw+`
`+s.join(`
`),Y=this.list(_);m[m.length-1]=Y,l=l.substring(0,l.length-P.raw.length)+Y.raw,c=c.substring(0,c.length-F.raw.length)+Y.raw,s=_.substring(m.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:l,tokens:m,text:c}}}list(a){let o=this.rules.block.list.exec(a);if(o){let s=o[1].trim(),l=s.length>1,c={type:"list",raw:"",ordered:l,start:l?+s.slice(0,-1):"",loose:!1,items:[]};s=l?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=l?s:"[*+-]");let m=this.rules.other.listItemRegex(s),h=!1;for(;a;){let g=!1,b="",v="";if(!(o=m.exec(a))||this.rules.block.hr.test(a))break;b=o[0],a=a.substring(b.length);let A=uf(o[2].split(`
`,1)[0],o[1].length),P=a.split(`
`,1)[0],F=!A.trim(),_=0;if(this.options.pedantic?(_=2,v=A.trimStart()):F?_=o[1].length+1:(_=A.search(this.rules.other.nonSpaceChar),_=_>4?1:_,v=A.slice(_),_+=o[1].length),F&&this.rules.other.blankLine.test(P)&&(b+=P+`
`,a=a.substring(P.length+1),g=!0),!g){let Y=this.rules.other.nextBulletRegex(_),K=this.rules.other.hrRegex(_),N=this.rules.other.fencesBeginRegex(_),H=this.rules.other.headingBeginRegex(_),B=this.rules.other.htmlBeginRegex(_),ne=this.rules.other.blockquoteBeginRegex(_);for(;a;){let R=a.split(`
`,1)[0],U;if(P=R,this.options.pedantic?(P=P.replace(this.rules.other.listReplaceNesting,"  "),U=P):U=P.replace(this.rules.other.tabCharGlobal,"    "),N.test(P)||H.test(P)||B.test(P)||ne.test(P)||Y.test(P)||K.test(P))break;if(U.search(this.rules.other.nonSpaceChar)>=_||!P.trim())v+=`
`+U.slice(_);else{if(F||A.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||N.test(A)||H.test(A)||K.test(A))break;v+=`
`+P}F=!P.trim(),b+=R+`
`,a=a.substring(R.length+1),A=U.slice(_)}}c.loose||(h?c.loose=!0:this.rules.other.doubleBlankLine.test(b)&&(h=!0)),c.items.push({type:"list_item",raw:b,task:!!this.options.gfm&&this.rules.other.listIsTask.test(v),loose:!1,text:v,tokens:[]}),c.raw+=b}let w=c.items.at(-1);if(w)w.raw=w.raw.trimEnd(),w.text=w.text.trimEnd();else return;c.raw=c.raw.trimEnd();for(let g of c.items){if(this.lexer.state.top=!1,g.tokens=this.lexer.blockTokens(g.text,[]),g.task){if(g.text=g.text.replace(this.rules.other.listReplaceTask,""),g.tokens[0]?.type==="text"||g.tokens[0]?.type==="paragraph"){g.tokens[0].raw=g.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),g.tokens[0].text=g.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let v=this.lexer.inlineQueue.length-1;v>=0;v--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[v].src)){this.lexer.inlineQueue[v].src=this.lexer.inlineQueue[v].src.replace(this.rules.other.listReplaceTask,"");break}}let b=this.rules.other.listTaskCheckbox.exec(g.raw);if(b){let v={type:"checkbox",raw:b[0]+" ",checked:b[0]!=="[ ]"};g.checked=v.checked,c.loose?g.tokens[0]&&["paragraph","text"].includes(g.tokens[0].type)&&"tokens"in g.tokens[0]&&g.tokens[0].tokens?(g.tokens[0].raw=v.raw+g.tokens[0].raw,g.tokens[0].text=v.raw+g.tokens[0].text,g.tokens[0].tokens.unshift(v)):g.tokens.unshift({type:"paragraph",raw:v.raw,text:v.raw,tokens:[v]}):g.tokens.unshift(v)}}if(!c.loose){let b=g.tokens.filter(A=>A.type==="space"),v=b.length>0&&b.some(A=>this.rules.other.anyLine.test(A.raw));c.loose=v}}if(c.loose)for(let g of c.items){g.loose=!0;for(let b of g.tokens)b.type==="text"&&(b.type="paragraph")}return c}}html(a){let o=this.rules.block.html.exec(a);if(o)return{type:"html",block:!0,raw:o[0],pre:o[1]==="pre"||o[1]==="script"||o[1]==="style",text:o[0]}}def(a){let o=this.rules.block.def.exec(a);if(o){let s=o[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),l=o[2]?o[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=o[3]?o[3].substring(1,o[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):o[3];return{type:"def",tag:s,raw:o[0],href:l,title:c}}}table(a){let o=this.rules.block.table.exec(a);if(!o||!this.rules.other.tableDelimiter.test(o[2]))return;let s=Gd(o[1]),l=o[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=o[3]?.trim()?o[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],m={type:"table",raw:o[0],header:[],align:[],rows:[]};if(s.length===l.length){for(let h of l)this.rules.other.tableAlignRight.test(h)?m.align.push("right"):this.rules.other.tableAlignCenter.test(h)?m.align.push("center"):this.rules.other.tableAlignLeft.test(h)?m.align.push("left"):m.align.push(null);for(let h=0;h<s.length;h++)m.header.push({text:s[h],tokens:this.lexer.inline(s[h]),header:!0,align:m.align[h]});for(let h of c)m.rows.push(Gd(h,m.header.length).map((w,g)=>({text:w,tokens:this.lexer.inline(w),header:!1,align:m.align[g]})));return m}}lheading(a){let o=this.rules.block.lheading.exec(a);if(o){let s=o[1].trim();return{type:"heading",raw:o[0],depth:o[2].charAt(0)==="="?1:2,text:s,tokens:this.lexer.inline(s)}}}paragraph(a){let o=this.rules.block.paragraph.exec(a);if(o){let s=o[1].charAt(o[1].length-1)===`
`?o[1].slice(0,-1):o[1];return{type:"paragraph",raw:o[0],text:s,tokens:this.lexer.inline(s)}}}text(a){let o=this.rules.block.text.exec(a);if(o)return{type:"text",raw:o[0],text:o[0],tokens:this.lexer.inline(o[0])}}escape(a){let o=this.rules.inline.escape.exec(a);if(o)return{type:"escape",raw:o[0],text:o[1]}}tag(a){let o=this.rules.inline.tag.exec(a);if(o)return!this.lexer.state.inLink&&this.rules.other.startATag.test(o[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(o[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(o[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(o[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:o[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:o[0]}}link(a){let o=this.rules.inline.link.exec(a);if(o){let s=o[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let m=Pr(s.slice(0,-1),"\\");if((s.length-m.length)%2===0)return}else{let m=df(o[2],"()");if(m===-2)return;if(m>-1){let h=(o[0].indexOf("!")===0?5:4)+o[1].length+m;o[2]=o[2].substring(0,m),o[0]=o[0].substring(0,h).trim(),o[3]=""}}let l=o[2],c="";if(this.options.pedantic){let m=this.rules.other.pedanticHrefTitle.exec(l);m&&(l=m[1],c=m[3])}else c=o[3]?o[3].slice(1,-1):"";return l=l.trim(),this.rules.other.startAngleBracket.test(l)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?l=l.slice(1):l=l.slice(1,-1)),Hd(o,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},o[0],this.lexer,this.rules)}}reflink(a,o){let s;if((s=this.rules.inline.reflink.exec(a))||(s=this.rules.inline.nolink.exec(a))){let l=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=o[l.toLowerCase()];if(!c){let m=s[0].charAt(0);return{type:"text",raw:m,text:m}}return Hd(s,c,s[0],this.lexer,this.rules)}}emStrong(a,o,s=""){let l=this.rules.inline.emStrongLDelim.exec(a);if(!(!l||!l[1]&&!l[2]&&!l[3]&&!l[4]||l[4]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(l[1]||l[3])||!s||this.rules.inline.punctuation.exec(s))){let c=[...l[0]].length-1,m,h,w=c,g=0,b=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(b.lastIndex=0,o=o.slice(-1*a.length+c);(l=b.exec(o))!==null;){if(m=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!m)continue;if(h=[...m].length,l[3]||l[4]){w+=h;continue}else if((l[5]||l[6])&&c%3&&!((c+h)%3)){g+=h;continue}if(w-=h,w>0)continue;h=Math.min(h,h+w+g);let v=[...l[0]][0].length,A=a.slice(0,c+l.index+v+h);if(Math.min(c,h)%2){let F=A.slice(1,-1);return{type:"em",raw:A,text:F,tokens:this.lexer.inlineTokens(F)}}let P=A.slice(2,-2);return{type:"strong",raw:A,text:P,tokens:this.lexer.inlineTokens(P)}}}}codespan(a){let o=this.rules.inline.code.exec(a);if(o){let s=o[2].replace(this.rules.other.newLineCharGlobal," "),l=this.rules.other.nonSpaceChar.test(s),c=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return l&&c&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:o[0],text:s}}}br(a){let o=this.rules.inline.br.exec(a);if(o)return{type:"br",raw:o[0]}}del(a,o,s=""){let l=this.rules.inline.delLDelim.exec(a);if(l&&(!l[1]||!s||this.rules.inline.punctuation.exec(s))){let c=[...l[0]].length-1,m,h,w=c,g=this.rules.inline.delRDelim;for(g.lastIndex=0,o=o.slice(-1*a.length+c);(l=g.exec(o))!==null;){if(m=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!m||(h=[...m].length,h!==c))continue;if(l[3]||l[4]){w+=h;continue}if(w-=h,w>0)continue;h=Math.min(h,h+w);let b=[...l[0]][0].length,v=a.slice(0,c+l.index+b+h),A=v.slice(c,-c);return{type:"del",raw:v,text:A,tokens:this.lexer.inlineTokens(A)}}}}autolink(a){let o=this.rules.inline.autolink.exec(a);if(o){let s,l;return o[2]==="@"?(s=o[1],l="mailto:"+s):(s=o[1],l=s),{type:"link",raw:o[0],text:s,href:l,tokens:[{type:"text",raw:s,text:s}]}}}url(a){let o;if(o=this.rules.inline.url.exec(a)){let s,l;if(o[2]==="@")s=o[0],l="mailto:"+s;else{let c;do c=o[0],o[0]=this.rules.inline._backpedal.exec(o[0])?.[0]??"";while(c!==o[0]);s=o[0],o[1]==="www."?l="http://"+o[0]:l=o[0]}return{type:"link",raw:o[0],text:s,href:l,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(a){let o=this.rules.inline.text.exec(a);if(o){let s=this.lexer.state.inRawBlock;return{type:"text",raw:o[0],text:o[0],escaped:s}}}},it=class os{tokens;options;state;inlineQueue;tokenizer;constructor(o){this.tokens=[],this.tokens.links=Object.create(null),this.options=o||on,this.options.tokenizer=this.options.tokenizer||new Ha,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:Ue,block:_a.normal,inline:Ar.normal};this.options.pedantic?(s.block=_a.pedantic,s.inline=Ar.pedantic):this.options.gfm&&(s.block=_a.gfm,this.options.breaks?s.inline=Ar.breaks:s.inline=Ar.gfm),this.tokenizer.rules=s}static get rules(){return{block:_a,inline:Ar}}static lex(o,s){return new os(s).lex(o)}static lexInline(o,s){return new os(s).inlineTokens(o)}lex(o){o=o.replace(Ue.carriageReturn,`
`),this.blockTokens(o,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let l=this.inlineQueue[s];this.inlineTokens(l.src,l.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(o,s=[],l=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(o=o.replace(Ue.tabCharGlobal,"    ").replace(Ue.spaceLine,""));o;){let c;if(this.options.extensions?.block?.some(h=>(c=h.call({lexer:this},o,s))?(o=o.substring(c.raw.length),s.push(c),!0):!1))continue;if(c=this.tokenizer.space(o)){o=o.substring(c.raw.length);let h=s.at(-1);c.raw.length===1&&h!==void 0?h.raw+=`
`:s.push(c);continue}if(c=this.tokenizer.code(o)){o=o.substring(c.raw.length);let h=s.at(-1);h?.type==="paragraph"||h?.type==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+c.raw,h.text+=`
`+c.text,this.inlineQueue.at(-1).src=h.text):s.push(c);continue}if(c=this.tokenizer.fences(o)){o=o.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.heading(o)){o=o.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.hr(o)){o=o.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.blockquote(o)){o=o.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.list(o)){o=o.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.html(o)){o=o.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.def(o)){o=o.substring(c.raw.length);let h=s.at(-1);h?.type==="paragraph"||h?.type==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+c.raw,h.text+=`
`+c.raw,this.inlineQueue.at(-1).src=h.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title},s.push(c));continue}if(c=this.tokenizer.table(o)){o=o.substring(c.raw.length),s.push(c);continue}if(c=this.tokenizer.lheading(o)){o=o.substring(c.raw.length),s.push(c);continue}let m=o;if(this.options.extensions?.startBlock){let h=1/0,w=o.slice(1),g;this.options.extensions.startBlock.forEach(b=>{g=b.call({lexer:this},w),typeof g=="number"&&g>=0&&(h=Math.min(h,g))}),h<1/0&&h>=0&&(m=o.substring(0,h+1))}if(this.state.top&&(c=this.tokenizer.paragraph(m))){let h=s.at(-1);l&&h?.type==="paragraph"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+c.raw,h.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):s.push(c),l=m.length!==o.length,o=o.substring(c.raw.length);continue}if(c=this.tokenizer.text(o)){o=o.substring(c.raw.length);let h=s.at(-1);h?.type==="text"?(h.raw+=(h.raw.endsWith(`
`)?"":`
`)+c.raw,h.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):s.push(c);continue}if(o){let h="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,s}inline(o,s=[]){return this.inlineQueue.push({src:o,tokens:s}),s}inlineTokens(o,s=[]){this.tokenizer.lexer=this;let l=o,c=null;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(l))!==null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(l))!==null;)l=l.slice(0,c.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let m;for(;(c=this.tokenizer.rules.inline.blockSkip.exec(l))!==null;)m=c[2]?c[2].length:0,l=l.slice(0,c.index+m)+"["+"a".repeat(c[0].length-m-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);l=this.options.hooks?.emStrongMask?.call({lexer:this},l)??l;let h=!1,w="";for(;o;){h||(w=""),h=!1;let g;if(this.options.extensions?.inline?.some(v=>(g=v.call({lexer:this},o,s))?(o=o.substring(g.raw.length),s.push(g),!0):!1))continue;if(g=this.tokenizer.escape(o)){o=o.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.tag(o)){o=o.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.link(o)){o=o.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.reflink(o,this.tokens.links)){o=o.substring(g.raw.length);let v=s.at(-1);g.type==="text"&&v?.type==="text"?(v.raw+=g.raw,v.text+=g.text):s.push(g);continue}if(g=this.tokenizer.emStrong(o,l,w)){o=o.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.codespan(o)){o=o.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.br(o)){o=o.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.del(o,l,w)){o=o.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.autolink(o)){o=o.substring(g.raw.length),s.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(o))){o=o.substring(g.raw.length),s.push(g);continue}let b=o;if(this.options.extensions?.startInline){let v=1/0,A=o.slice(1),P;this.options.extensions.startInline.forEach(F=>{P=F.call({lexer:this},A),typeof P=="number"&&P>=0&&(v=Math.min(v,P))}),v<1/0&&v>=0&&(b=o.substring(0,v+1))}if(g=this.tokenizer.inlineText(b)){o=o.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(w=g.raw.slice(-1)),h=!0;let v=s.at(-1);v?.type==="text"?(v.raw+=g.raw,v.text+=g.text):s.push(g);continue}if(o){let v="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return s}},Ua=class{options;parser;constructor(a){this.options=a||on}space(a){return""}code({text:a,lang:o,escaped:s}){let l=(o||"").match(Ue.notSpaceStart)?.[0],c=a.replace(Ue.endingNewline,"")+`
`;return l?'<pre><code class="language-'+ft(l)+'">'+(s?c:ft(c,!0))+`</code></pre>
`:"<pre><code>"+(s?c:ft(c,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}def(a){return""}heading({tokens:a,depth:o}){return`<h${o}>${this.parser.parseInline(a)}</h${o}>
`}hr(a){return`<hr>
`}list(a){let o=a.ordered,s=a.start,l="";for(let h=0;h<a.items.length;h++){let w=a.items[h];l+=this.listitem(w)}let c=o?"ol":"ul",m=o&&s!==1?' start="'+s+'"':"";return"<"+c+m+`>
`+l+"</"+c+`>
`}listitem(a){return`<li>${this.parser.parse(a.tokens)}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let o="",s="";for(let c=0;c<a.header.length;c++)s+=this.tablecell(a.header[c]);o+=this.tablerow({text:s});let l="";for(let c=0;c<a.rows.length;c++){let m=a.rows[c];s="";for(let h=0;h<m.length;h++)s+=this.tablecell(m[h]);l+=this.tablerow({text:s})}return l&&(l=`<tbody>${l}</tbody>`),`<table>
<thead>
`+o+`</thead>
`+l+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){let o=this.parser.parseInline(a.tokens),s=a.header?"th":"td";return(a.align?`<${s} align="${a.align}">`:`<${s}>`)+o+`</${s}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${ft(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:o,tokens:s}){let l=this.parser.parseInline(s),c=Bd(a);if(c===null)return l;a=c;let m='<a href="'+a+'"';return o&&(m+=' title="'+ft(o)+'"'),m+=">"+l+"</a>",m}image({href:a,title:o,text:s,tokens:l}){l&&(s=this.parser.parseInline(l,this.parser.textRenderer));let c=Bd(a);if(c===null)return ft(s);a=c;let m=`<img src="${a}" alt="${ft(s)}"`;return o&&(m+=` title="${ft(o)}"`),m+=">",m}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:ft(a.text)}},xs=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},st=class is{options;renderer;textRenderer;constructor(o){this.options=o||on,this.options.renderer=this.options.renderer||new Ua,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new xs}static parse(o,s){return new is(s).parse(o)}static parseInline(o,s){return new is(s).parseInline(o)}parse(o){this.renderer.parser=this;let s="";for(let l=0;l<o.length;l++){let c=o[l];if(this.options.extensions?.renderers?.[c.type]){let h=c,w=this.options.extensions.renderers[h.type].call({parser:this},h);if(w!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(h.type)){s+=w||"";continue}}let m=c;switch(m.type){case"space":{s+=this.renderer.space(m);break}case"hr":{s+=this.renderer.hr(m);break}case"heading":{s+=this.renderer.heading(m);break}case"code":{s+=this.renderer.code(m);break}case"table":{s+=this.renderer.table(m);break}case"blockquote":{s+=this.renderer.blockquote(m);break}case"list":{s+=this.renderer.list(m);break}case"checkbox":{s+=this.renderer.checkbox(m);break}case"html":{s+=this.renderer.html(m);break}case"def":{s+=this.renderer.def(m);break}case"paragraph":{s+=this.renderer.paragraph(m);break}case"text":{s+=this.renderer.text(m);break}default:{let h='Token with "'+m.type+'" type was not found.';if(this.options.silent)return console.error(h),"";throw new Error(h)}}}return s}parseInline(o,s=this.renderer){this.renderer.parser=this;let l="";for(let c=0;c<o.length;c++){let m=o[c];if(this.options.extensions?.renderers?.[m.type]){let w=this.options.extensions.renderers[m.type].call({parser:this},m);if(w!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(m.type)){l+=w||"";continue}}let h=m;switch(h.type){case"escape":{l+=s.text(h);break}case"html":{l+=s.html(h);break}case"link":{l+=s.link(h);break}case"image":{l+=s.image(h);break}case"checkbox":{l+=s.checkbox(h);break}case"strong":{l+=s.strong(h);break}case"em":{l+=s.em(h);break}case"codespan":{l+=s.codespan(h);break}case"br":{l+=s.br(h);break}case"del":{l+=s.del(h);break}case"text":{l+=s.text(h);break}default:{let w='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(w),"";throw new Error(w)}}}return l}},Rr=class{options;block;constructor(a){this.options=a||on}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(a=this.block){return a?it.lex:it.lexInline}provideParser(a=this.block){return a?st.parse:st.parseInline}},hf=class{defaults=hs();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=st;Renderer=Ua;TextRenderer=xs;Lexer=it;Tokenizer=Ha;Hooks=Rr;constructor(...a){this.use(...a)}walkTokens(a,o){let s=[];for(let l of a)switch(s=s.concat(o.call(this,l)),l.type){case"table":{let c=l;for(let m of c.header)s=s.concat(this.walkTokens(m.tokens,o));for(let m of c.rows)for(let h of m)s=s.concat(this.walkTokens(h.tokens,o));break}case"list":{let c=l;s=s.concat(this.walkTokens(c.items,o));break}default:{let c=l;this.defaults.extensions?.childTokens?.[c.type]?this.defaults.extensions.childTokens[c.type].forEach(m=>{let h=c[m].flat(1/0);s=s.concat(this.walkTokens(h,o))}):c.tokens&&(s=s.concat(this.walkTokens(c.tokens,o)))}}return s}use(...a){let o=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(s=>{let l={...s};if(l.async=this.defaults.async||l.async||!1,s.extensions&&(s.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){let m=o.renderers[c.name];m?o.renderers[c.name]=function(...h){let w=c.renderer.apply(this,h);return w===!1&&(w=m.apply(this,h)),w}:o.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let m=o[c.level];m?m.unshift(c.tokenizer):o[c.level]=[c.tokenizer],c.start&&(c.level==="block"?o.startBlock?o.startBlock.push(c.start):o.startBlock=[c.start]:c.level==="inline"&&(o.startInline?o.startInline.push(c.start):o.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(o.childTokens[c.name]=c.childTokens)}),l.extensions=o),s.renderer){let c=this.defaults.renderer||new Ua(this.defaults);for(let m in s.renderer){if(!(m in c))throw new Error(`renderer '${m}' does not exist`);if(["options","parser"].includes(m))continue;let h=m,w=s.renderer[h],g=c[h];c[h]=(...b)=>{let v=w.apply(c,b);return v===!1&&(v=g.apply(c,b)),v||""}}l.renderer=c}if(s.tokenizer){let c=this.defaults.tokenizer||new Ha(this.defaults);for(let m in s.tokenizer){if(!(m in c))throw new Error(`tokenizer '${m}' does not exist`);if(["options","rules","lexer"].includes(m))continue;let h=m,w=s.tokenizer[h],g=c[h];c[h]=(...b)=>{let v=w.apply(c,b);return v===!1&&(v=g.apply(c,b)),v}}l.tokenizer=c}if(s.hooks){let c=this.defaults.hooks||new Rr;for(let m in s.hooks){if(!(m in c))throw new Error(`hook '${m}' does not exist`);if(["options","block"].includes(m))continue;let h=m,w=s.hooks[h],g=c[h];Rr.passThroughHooks.has(m)?c[h]=b=>{if(this.defaults.async&&Rr.passThroughHooksRespectAsync.has(m))return(async()=>{let A=await w.call(c,b);return g.call(c,A)})();let v=w.call(c,b);return g.call(c,v)}:c[h]=(...b)=>{if(this.defaults.async)return(async()=>{let A=await w.apply(c,b);return A===!1&&(A=await g.apply(c,b)),A})();let v=w.apply(c,b);return v===!1&&(v=g.apply(c,b)),v}}l.hooks=c}if(s.walkTokens){let c=this.defaults.walkTokens,m=s.walkTokens;l.walkTokens=function(h){let w=[];return w.push(m.call(this,h)),c&&(w=w.concat(c.call(this,h))),w}}this.defaults={...this.defaults,...l}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,o){return it.lex(a,o??this.defaults)}parser(a,o){return st.parse(a,o??this.defaults)}parseMarkdown(a){return(o,s)=>{let l={...s},c={...this.defaults,...l},m=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&l.async===!1)return m(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof o>"u"||o===null)return m(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return m(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(c.hooks&&(c.hooks.options=c,c.hooks.block=a),c.async)return(async()=>{let h=c.hooks?await c.hooks.preprocess(o):o,w=await(c.hooks?await c.hooks.provideLexer(a):a?it.lex:it.lexInline)(h,c),g=c.hooks?await c.hooks.processAllTokens(w):w;c.walkTokens&&await Promise.all(this.walkTokens(g,c.walkTokens));let b=await(c.hooks?await c.hooks.provideParser(a):a?st.parse:st.parseInline)(g,c);return c.hooks?await c.hooks.postprocess(b):b})().catch(m);try{c.hooks&&(o=c.hooks.preprocess(o));let h=(c.hooks?c.hooks.provideLexer(a):a?it.lex:it.lexInline)(o,c);c.hooks&&(h=c.hooks.processAllTokens(h)),c.walkTokens&&this.walkTokens(h,c.walkTokens);let w=(c.hooks?c.hooks.provideParser(a):a?st.parse:st.parseInline)(h,c);return c.hooks&&(w=c.hooks.postprocess(w)),w}catch(h){return m(h)}}}onError(a,o){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,a){let l="<p>An error occurred:</p><pre>"+ft(s.message+"",!0)+"</pre>";return o?Promise.resolve(l):l}if(o)return Promise.reject(s);throw s}}},an=new hf;function xe(a,o){return an.parse(a,o)}xe.options=xe.setOptions=function(a){return an.setOptions(a),xe.defaults=an.defaults,iu(xe.defaults),xe};xe.getDefaults=hs;xe.defaults=on;xe.use=function(...a){return an.use(...a),xe.defaults=an.defaults,iu(xe.defaults),xe};xe.walkTokens=function(a,o){return an.walkTokens(a,o)};xe.parseInline=an.parseInline;xe.Parser=st;xe.parser=st.parse;xe.Renderer=Ua;xe.TextRenderer=xs;xe.Lexer=it;xe.lexer=it.lex;xe.Tokenizer=Ha;xe.Hooks=Rr;xe.parse=xe;xe.options;xe.setOptions;xe.use;xe.walkTokens;xe.parseInline;st.parse;it.lex;function Fr(a){return`${a}`.toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}xe.setOptions({breaks:!0,gfm:!0});const mf=Object.assign({"./articles/md/10-coding-projects-you-can-add-to-your-resume.md":gm,"./articles/md/from-repo-to-reader.md":vm,"./articles/md/javascript-interview-series-plan.md":ym,"./articles/md/open-source-content-formats-for-dev-creators.md":wm}),ff=Object.assign({"./articles/html/100-claude-code-prompts.html":bm,"./articles/html/ai-content-prompterrr.html":xm,"./articles/html/claude-carousel-generator.html":km,"./articles/html/free-courses-real-skills-zero-rupees.html":Sm,"./articles/html/gemma-complete-guide.html":Cm,"./articles/html/superpowers-deepdive.html":Tm});function gf(a){const s=`
<base href="${typeof window<"u"?`${window.location.origin}/`:"/"}" target="_blank">
<style>
html, body { margin: 0; padding: 0; }
body > * { position: relative; z-index: 1; }
</style>`;return/<head[^>]*>/i.test(a)?a.replace(/<head([^>]*)>/i,`<head$1>${s}`):`<!DOCTYPE html><html><head>${s}</head><body>${a}</body></html>`}function Wa(a){return a.split("/").pop().replace(/\.(md|html)$/,"")}function vf(a){return a.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}function gu(a){const o=a.trim().split(/\s+/).filter(Boolean).length;return`${Math.max(1,Math.round(o/220))} min read`}function ks(a){return a?Array.isArray(a)?a.map(o=>`${o}`.trim()).filter(Boolean):`${a}`.replace(/^\[/,"").replace(/\]$/,"").split(",").map(o=>o.replace(/^["']|["']$/g,"").trim()).filter(Boolean):[]}function vu(a){return`${a}`.trim().toLowerCase()==="true"}function yu(a){if(!a)return"";const o=new Date(a);return Number.isNaN(o.getTime())?a:new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(o)}function yf(a){if(!a.startsWith("---"))return{attributes:{},body:a};const o=a.indexOf(`
---`,3);if(o===-1)return{attributes:{},body:a};const s=a.slice(3,o).trim(),l=a.slice(o+4).trim(),c={};return s.split(`
`).forEach(m=>{const h=m.indexOf(":");if(h===-1)return;const w=m.slice(0,h).trim(),g=m.slice(h+1).trim();c[w]=g.replace(/^["']|["']$/g,"")}),c.tags&&(c.tags=ks(c.tags)),{attributes:c,body:l}}function wf(a,o){return`
        <div class="article-card-markdown-inner">
            <span class="article-preview-type">Markdown</span>
            <h4>${a}</h4>
            <p>${o}</p>
        </div>
    `}function bf([a,o]){const{attributes:s,body:l}=yf(o),c=l.replace(/^#{1,6}\s+/gm,"").replace(/[*_`>#-]/g," ").replace(/\[(.*?)\]\((.*?)\)/g,"$1").replace(/\s+/g," ").trim(),m=l.match(/^#\s+(.+)$/m),h=s.excerpt||c.slice(0,180).trim(),w=s.title||(m?m[1].trim():Wa(a));return{slug:s.slug||Fr(Wa(a)),title:w,date:yu(s.date||""),sortDate:s.date||"",excerpt:h,tags:ks(s.tags),readingTime:gu(c),kind:"markdown",category:s.category||"Article",coverImage:s.cover||"",accent:s.accent||"",featured:vu(s.featured||"false"),bodyHtml:xe.parse(l),previewHtml:wf(w,h)}}function xf([a,o]){const s=gf(o),c=new DOMParser().parseFromString(s,"text/html"),m=c.title||Wa(a),h=c.querySelector('meta[name="description"]')?.content||"",w=c.querySelector('meta[name="keywords"]')?.content||"",g=c.querySelector("p")?.textContent?.trim()||"",b=c.querySelector('meta[property="article:published_time"]')?.content||c.querySelector('meta[name="date"]')?.content||"",v=c.querySelector('meta[name="category"]')?.content||"Article",A=c.querySelector('meta[property="og:image"]')?.content||c.querySelector('meta[name="cover"]')?.content||"",P=c.querySelector('meta[name="theme-color"]')?.content||"",F=vu(c.querySelector('meta[name="featured"]')?.content||"false"),_=h||g||"Standalone HTML article rendered inside the React reader.",Y=vf(c.body?.innerHTML||o);return{slug:Fr(Wa(a)),title:m,date:yu(b),sortDate:b,excerpt:_,tags:ks(w),readingTime:gu(Y),kind:"html",category:v,coverImage:A,accent:P,featured:F,raw:s}}const Ht=[...Object.entries(mf).map(bf),...Object.entries(ff).map(xf)].sort((a,o)=>{if(a.featured!==o.featured)return a.featured?-1:1;const s=a.sortDate?new Date(a.sortDate).getTime():0,l=o.sortDate?new Date(o.sortDate).getTime():0;return s!==l?l-s:a.title.localeCompare(o.title)});function wu(a){return Ht.find(o=>o.slug===a)}function kf(){return Array.from(new Set(Ht.flatMap(a=>a.tags))).sort((a,o)=>a.localeCompare(o))}const bu="rk-theme";function Sf(){if(typeof window>"u")return"dark";const a=window.localStorage.getItem(bu);return a==="light"||a==="dark"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Cf(){const[a,o]=Be.useState(Sf);return Be.useEffect(()=>{document.documentElement.dataset.theme=a,document.documentElement.style.colorScheme=a,document.body.dataset.theme=a,window.localStorage.setItem(bu,a);const s=document.querySelector('meta[name="theme-color"]');s&&s.setAttribute("content",a==="dark"?"#050505":"#ffffff")},[a]),{theme:a,toggleTheme:()=>o(s=>s==="dark"?"light":"dark")}}function Tf({theme:a,onToggleTheme:o}){const s=a==="dark";return p.jsxs("button",{type:"button",className:"theme-toggle",onClick:o,"aria-label":"Toggle color theme",children:[p.jsx("span",{className:"theme-toggle-track",children:p.jsx("span",{className:`theme-toggle-thumb${s?" is-dark":""}`})}),p.jsx("span",{className:"theme-toggle-label",children:s?"Dark":"Light"})]})}const Ef=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Projects",to:"/projects"},{label:"Articles",to:"/articles"},{label:"Contact",to:"/contact"}];function Af({theme:a,onToggleTheme:o}){const[s,l]=Be.useState(!1);return p.jsx("header",{className:"site-header",children:p.jsxs("div",{className:"shell header-shell",children:[p.jsxs(ze,{className:"brand-mark",to:"/",onClick:()=>l(!1),children:[p.jsx("span",{className:"brand-mark-label",children:"Radhakishan Jangid"}),p.jsx("span",{className:"brand-mark-subtitle",children:"Senior software engineer"})]}),p.jsxs("button",{type:"button",className:"menu-toggle","aria-label":"Toggle navigation","aria-expanded":s,onClick:()=>l(c=>!c),children:[p.jsx("span",{}),p.jsx("span",{})]}),p.jsxs("div",{className:`header-panel${s?" is-open":""}`,children:[p.jsx("nav",{className:"primary-nav","aria-label":"Primary",children:Ef.map(c=>p.jsx(fm,{exact:c.to==="/",activeClassName:"is-active",to:c.to,onClick:()=>l(!1),children:c.label},c.to))}),p.jsxs("div",{className:"header-actions",children:[p.jsx(ze,{className:"header-cta",to:"/contact",onClick:()=>l(!1),children:"Let's talk"}),p.jsx(Tf,{theme:a,onToggleTheme:o})]})]})]})})}const Pf=[{id:"github",label:"GitHub",href:"https://github.com/radhakishan404"},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/radhakishanjangid"},{id:"x",label:"X",href:"https://x.com/radhakishan404"},{id:"dev",label:"DEV",href:"https://dev.to/radhakishanjangid404"},{id:"instagram",label:"Instagram",href:"https://www.instagram.com/radhakishanjangid404"},{id:"email",label:"Email",href:"mailto:radhakishanjangid404@gmail.com"}],If=[{label:"radhakishanjangid404@gmail.com",href:"mailto:radhakishanjangid404@gmail.com",external:!1},{label:"GitHub",href:"https://github.com/radhakishan404",external:!0},{label:"LinkedIn",href:"https://www.linkedin.com/in/radhakishanjangid",external:!0},{label:"DEV",href:"https://dev.to/radhakishanjangid404",external:!0}],Lf=[{value:"7+",label:"Years building web products"},{value:"React",label:"Frontend and product UI"},{value:"Node",label:"APIs and backend delivery"}];function Rf({id:a}){switch(a){case"github":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.8c-2.95.64-3.57-1.25-3.57-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.08-.65.08-.65 1.06.08 1.62 1.09 1.62 1.09.95 1.62 2.48 1.16 3.08.88.09-.69.37-1.16.67-1.43-2.36-.27-4.84-1.18-4.84-5.24 0-1.16.42-2.11 1.1-2.85-.11-.27-.48-1.36.11-2.83 0 0 .9-.29 2.95 1.09a10.19 10.19 0 0 1 5.38 0c2.05-1.38 2.95-1.09 2.95-1.09.59 1.47.22 2.56.11 2.83.68.74 1.1 1.69 1.1 2.85 0 4.07-2.49 4.97-4.87 5.23.38.33.72.98.72 1.98v2.94c0 .29.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z"})});case"linkedin":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 1 0 3.24 5a1.96 1.96 0 0 0 3.92-.05ZM20 13.05c0-3.35-1.79-4.91-4.18-4.91a3.62 3.62 0 0 0-3.25 1.79V8.5H9.19V20h3.38v-6.05c0-1.6.3-3.14 2.28-3.14 1.95 0 1.98 1.82 1.98 3.24V20H20v-6.95Z"})});case"x":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"m18.9 2 2.6 3.8-6.02 6.88L22 22h-5.16l-4.04-5.47L8.02 22H2.88l6.38-7.3L2 2h5.25l3.67 4.97L15.28 2h3.62Zm-1.8 17.1h1.43L6.14 4.8H4.6l12.5 14.3Z"})});case"dev":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M7.8 9.4h-1v5.2h1c1.43 0 1.95-.83 1.95-2.61 0-1.84-.54-2.59-1.95-2.59ZM3 6.5h18A1.5 1.5 0 0 1 22.5 8v8A1.5 1.5 0 0 1 21 17.5H3A1.5 1.5 0 0 1 1.5 16V8A1.5 1.5 0 0 1 3 6.5Zm2.8 2v7h2.2c2.72 0 4.05-1.4 4.05-4.5 0-3-1.36-4.5-4.05-4.5H5.8Zm7.2 0v7h4.55v-1.8H15.2v-1h1.95v-1.75H15.2v-.95h2.32V8.5H13Zm5.02 0 1.55 7h2.03l1.4-7h-1.97l-.48 3.77-.5-3.77h-1.74l-.56 3.78-.45-3.78h-1.94Z"})});case"instagram":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9A3.7 3.7 0 0 0 7.5 20.2h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm4.5 3a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.4-.94a1.22 1.22 0 1 1 0 2.44 1.22 1.22 0 0 1 0-2.44Z"})});case"email":return p.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fill:"currentColor",d:"M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.8v.38l9 5.84 9-5.84V7.3H3Zm18 9.4v-6.03l-8.51 5.52a.9.9 0 0 1-.98 0L3 10.67v6.03h18Z"})});default:return null}}function jf(){return p.jsx("aside",{className:"social-rail","aria-label":"Social links",children:Pf.map((a,o)=>p.jsxs("a",{href:a.href,target:a.id==="email"?void 0:"_blank",rel:a.id==="email"?void 0:"noreferrer",className:"social-rail-link",style:{animationDelay:`${o*80}ms`},"aria-label":a.label,title:a.label,children:[p.jsx(Rf,{id:a.id}),p.jsx("span",{children:a.label})]},a.href))})}function Mf({children:a}){const o=dm(),{theme:s,toggleTheme:l}=Cf(),c=o.pathname.match(/^\/articles\/([^/]+)$/);return(c?wu(c[1]):null)?.kind==="html"?p.jsx("div",{className:"site-root site-root-embedded",children:p.jsx("main",{className:"site-main site-main-embedded",children:a},o.pathname)}):p.jsxs("div",{className:"site-root",children:[p.jsx(Af,{theme:s,onToggleTheme:l}),p.jsx(jf,{}),p.jsx("main",{className:"site-main",children:a},o.pathname),p.jsx("footer",{className:"site-footer",children:p.jsx("div",{className:"shell footer-shell",children:p.jsxs("p",{className:"footer-copy",children:["© ",new Date().getFullYear()," Radhakishan Jangid"]})})})]})}const Nf=[{isCurrent:1,title:"Senior Software Engineer",companyName:"Cachetech Advisor Solutions (USA)",companyLink:"https://www.cachetech.com/",location:"Mumbai, India",from:"February 2024",to:"Present",description:"Working with US-based product and engineering teams to build scalable fintech systems, including workflow management, multi-tenancy architecture, and React Native mobile app delivery."},{isCurrent:0,title:"Manager - Software Engineer",companyName:"Edubridge India Pvt Ltd",companyLink:"https://www.edubridgeindia.com/",location:"Mumbai, India",from:"December 2022",to:"January 2024",description:"Led migration from PHP to MERN stack, built a resume builder platform, and shipped microservice-based products with Jenkins + Docker CI/CD pipelines."},{isCurrent:0,title:"Senior Software Engineer",companyName:"TechStalwarts Software Development LLP",companyLink:"http://www.techstalwarts.com/",location:"Mumbai, India",from:"September 2020",to:"November 2022",description:"Handled ecommerce platform delivery across frontend, backend, AWS deployments, and third-party API integrations for high-traffic production systems."},{isCurrent:0,title:"PHP Web Developer",companyName:"Innovins Softtech Solutions Pvt. Ltd",companyLink:"https://www.innovins.com/",location:"Mumbai, India",from:"July 2019",to:"August 2020",description:"Maintained and developed multiple enterprise portals and internal productivity systems, including API and task management features."},{isCurrent:0,title:"PHP Web Developer with CodeIgniter",companyName:"IMPAQ Technologies Pvt. Ltd",companyLink:"http://impaq.co.in/",location:"Mumbai, India",from:"August 2018",to:"June 2019",description:"Delivered CMS and admission workflow modules, including business logic automation and platform maintenance for multiple client projects."}],Df=[{skillName:"Professional skills",skillType:[{title:"Front End Development",description:"Good sense of knowledge for <strong>Front End Development</strong>, building complex user interfaces with high level UX for both web and mobile.",skillsList:[{skillTitle:"JavaScript Development",skillDesc:"Learning Architecting and building web/mobile applications with React, JavaScript/TypeScript."},{skillTitle:"Responsive Design",skillDesc:"adapting and optimizing web pages to work on all screen sizes (mobile and tablet devices)."},{skillTitle:"Design to Web",skillDesc:"Converting design files to interactive, responsive and optimized web applications."}]},{title:"Back End Development",description:"Building Node.js web applications and <strong>RESTful API</strong> servers using technologies like <strong>Express, Core PHP and CodeIgniter</strong>.",skillsList:[{skillTitle:"RESTful API",skillDesc:"Experienced in Design and development of RESTful API servers using Node, PHP and CodeIgniter Framework."},{skillTitle:"Web Development",skillDesc:"Experienced in Design and development of Web Application using React Js, PHP, CodeIgniter and Laravel Framework."},{skillTitle:"E-commerce",skillDesc:"Design and development of E-Commerece using React Js, PHP, CodeIgniter and Laravel Framework."},{skillTitle:"Payment Gateway",skillDesc:"Experienced in working on server side payment systems with both PHP and NodeJS platforms."}]},{title:"Mobile App Development",description:"Learning developing native and hybrid mobile applications using <strong>Ionic Framework</strong> and <strong>React Native Framework</strong>.",skillsList:[{skillTitle:"Hybrid mobile apps",skillDesc:"Learning development of hybrid mobile apps for Android, iOS and Windows Phone based on Ionic 3/Cordova or Ionic 4/Capacitor technologies."},{skillTitle:"Native mobile apps",skillDesc:"Learning development of native mobile apps for Android, iOS using React Native Framework."}]}]}],Of=JSON.parse(`[{"id":11,"title":"Notch Prompter","description":"A notch-aligned native macOS teleprompter built with SwiftUI.","logo":"/images/github.svg","thumbnail":"https://opengraph.githubassets.com/1/radhakishan404/notch-prompter","gitAvailable":true,"tag":"Open Source, GitHub, Application, UX, Front-end","technology":"SwiftUI, macOS, Product Design","date":"2026","isPackage":false,"onlineLink":"https://notch-prompter.vercel.app","sliderImages":[{"image":"https://opengraph.githubassets.com/1/radhakishan404/notch-prompter"},{"image":"/images/project/POS-1.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Notch Prompter is a <strong>native macOS utility</strong> focused on notch-aligned teleprompter usability with a clean and practical UI.","contentList":[{"isLink":true,"link":"https://notch-prompter.vercel.app","text":"Project website"},{"isLink":true,"link":"https://github.com/radhakishan404/notch-prompter","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Native SwiftUI experience"},{"isLink":false,"link":"","text":"Optimized reading layout near notch area"},{"isLink":false,"link":"","text":"Simple interaction model for creators"}]},{"contentTitle":"Responsibilities","contentDescription":"Built this project from idea to public release.","contentList":[{"isLink":false,"link":"","text":"Product concept and UI flow"},{"isLink":false,"link":"","text":"Implementation and testing"},{"isLink":false,"link":"","text":"Release and public showcase"}]}]},{"id":10,"title":"SSHipIt","description":"CD over SSH for Node.js, Next.js and React applications.","logo":"/images/github.svg","thumbnail":"https://opengraph.githubassets.com/1/radhakishan404/sshipit","gitAvailable":true,"tag":"Open Source, GitHub, Node Js, React, JavaScript, DevOps, Back-end, Website","technology":"Node Js, JavaScript, CI/CD, SSH, React, Next.js","date":"2026","isPackage":false,"onlineLink":"https://sshipit.vercel.app/","sliderImages":[{"image":"https://opengraph.githubassets.com/1/radhakishan404/sshipit"},{"image":"/images/project/npm/react-animation-loader.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"SSHipIt is an open source deployment utility to run reliable CD pipelines over SSH for <strong>Node.js, Next.js and React</strong> applications.","contentList":[{"isLink":true,"link":"https://sshipit.vercel.app/","text":"Project website"},{"isLink":true,"link":"https://github.com/radhakishan404/sshipit","text":"GitHub repository"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"SSH-based deployment flow"},{"isLink":false,"link":"","text":"Node.js / Next.js / React support"},{"isLink":false,"link":"","text":"Simple, self-hosted CI/CD pattern"}]},{"contentTitle":"Responsibilities","contentDescription":"Designed and built the project as an open source product.","contentList":[{"isLink":false,"link":"","text":"Architecture and implementation"},{"isLink":false,"link":"","text":"Documentation and onboarding guides"},{"isLink":false,"link":"","text":"Maintenance and enhancements"}]}]},{"id":1,"title":"Nirulas","description":"Nirula's is India's oldest fast food restaurant chain.","logo":"/images/project/nirulas-logo.webp","thumbnail":"/images/project/nirulas-thumb.webp","gitAvailable":false,"tag":"React, Node Js, JavaScript, Front-end, Back-end, REST, UX, Website","technology":"React, Express, Node Js, JavaScript, Redux, Amazon, Google Analytics","date":"November 2020","onlineLink":"https://delivery.nirulas.com/","sliderImages":[{"image":"/images/project/nirulas-slider-5.gif"},{"image":"/images/project/nirulas-slider-1.webp"},{"image":"/images/project/nirulas-slider-2.webp"},{"image":"/images/project/nirulas-slider-3.webp"},{"image":"/images/project/nirulas-slider-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Nirula's is India's oldest fast food restaurant chain. Based in North India and most popular in the <strong>NCR Delhi</strong>. It was Delhi's first fast food restaurant, opening in Connaught Place in 1977. The website was initially build on Angular Js but was later moved to <strong>React and Node Js</strong>. React used on the client-side input handling and Node Js is used for the server-side to handle connectivity between databases. It utilizes some advanced <strong>page transition</strong> and <strong>animations</strong>.","contentList":[{"isLink":true,"link":"https://delivery.nirulas.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Product Listing"},{"isLink":false,"link":"","text":"Add to cart with Animation"},{"isLink":false,"link":"","text":"Coupon Apply"},{"isLink":false,"link":"","text":"Place Order"},{"isLink":false,"link":"","text":"OTP verify"},{"isLink":false,"link":"","text":"Live location fetch"},{"isLink":false,"link":"","text":"Location based delivery"}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete website both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>Node Js Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"Third Party <strong>Google Analytics, Message and Facebook Pixel</strong> API Integration"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Front-end and Back-end</strong>"},{"isLink":false,"link":"","text":"<strong>Deployment</strong> of both React and Node Js Application"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I faced <strong>designing and architecting the base structure</strong> of the application. Building a web app for fast and durable react was a perfect choice for future growth and maintainability. <strong>React Components, React-Redux, and Lazy loading modules</strong> made this whole project lot easier by allowing me to separate the app logic by modules (per feature). One of the biggest challenges during development was maintaining the <strong>product customization and pricing module</strong>. I have created a separate component for the customization and called API based on the product by that I handled the <strong>customization and pricing part in Node JS API</strong>. I <strong>learned</strong> many new things while building this project still I am getting new changes and new phases to work on.","contentList":null}]},{"id":8,"title":"Nirulas POS","description":"Nirula's is India's oldest fast food restaurant chain.","logo":"/images/project/nirulas-logo.webp","thumbnail":"/images/project/POS-1.png","gitAvailable":false,"tag":"React, Node Js, JavaScript, Front-end, Back-end, REST, UX, Website","technology":"React, Express, Node Js, JavaScript, Redux, Amazon, Google Analytics","date":"April 2021","onlineLink":"https://delivery.nirulas.com/","sliderImages":[{"image":"/images/project/POS-1.png"},{"image":"/images/project/POS-2.png"},{"image":"/images/project/POS-3.png"},{"image":"/images/project/POS-4.png"},{"image":"/images/project/POS-5.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Nirula's is India's oldest fast food restaurant chain. Based in North India and most popular in the <strong>NCR Delhi</strong>. It was Delhi's first fast food restaurant, opening in Connaught Place in 1977. The website was initially build on Angular Js but was later moved to <strong>React and Node Js</strong>. React used on the client-side input handling and Node Js is used for the server-side to handle connectivity between databases. It utilizes some advanced <strong>page transition</strong> and <strong>animations</strong>.","contentList":[{"isLink":true,"link":"https://branch.nirulas.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Product Listing"},{"isLink":false,"link":"","text":"Add to cart with Animation"},{"isLink":false,"link":"","text":"Coupon Apply"},{"isLink":false,"link":"","text":"Place Order"},{"isLink":false,"link":"","text":"OTP verify"},{"isLink":false,"link":"","text":"Product Stock"},{"isLink":false,"link":"","text":"Branch Orders"},{"isLink":false,"link":"","text":"Branch Dashboard"}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete website both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>Node Js Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"Third Party <strong>Google Analytics, Message and Facebook Pixel</strong> API Integration"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Front-end and Back-end</strong>"},{"isLink":false,"link":"","text":"<strong>Deployment</strong> of both React and Node Js Application"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I faced <strong>designing and architecting the base structure</strong> of the application. Building a web app for fast and durable react was a perfect choice for future growth and maintainability. <strong>React Components, React-Redux, and Lazy loading modules</strong> made this whole project lot easier by allowing me to separate the app logic by modules (per feature). One of the biggest challenges during development was maintaining the <strong>product customization and pricing module</strong>. I have created a separate component for the customization and called API based on the product by that I handled the <strong>customization and pricing part in Node JS API</strong>. I <strong>learned</strong> many new things while building this project still I am getting new changes and new phases to work on.","contentList":null}]},{"id":2,"title":"Covid-19 Tracker","description":"Covid-19 Tracker is a simple React Native application.","logo":"/images/project/covid/covid-19-logo.webp","thumbnail":"/images/project/covid/covid-19-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, Application, REST, UX, Design, GitHub","technology":"React Native, Expo, Mathdroid Covid API, Novelcovid API, React Navigation","date":"3 April, 2020 - 13 April, 2020","onlineLink":"http://radhakishan.site/covid-download.php","sliderImages":[{"image":"/images/project/covid/covid-slider-1.webp"},{"image":"/images/project/covid/covid-slider-2.webp"},{"image":"/images/project/covid/covid-slider-3.webp"},{"image":"/images/project/covid/covid-slider-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Covid-19 Tracker is a simple <strong>React Native</strong> application that shows you the Current and <strong>Total Infected, Recovered, and Deaths</strong> of people all around the globe and you can see data based on <strong>country selection</strong>.","contentList":[{"isLink":true,"link":"https://radhakishan.site/covid-download.php","text":"Link to download the apk file"},{"isLink":true,"link":"https://github.com/radhakishan404/covid-19-tracker","text":"Source Code"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Country Selector"},{"isLink":false,"link":"","text":"React Native Line and Bar Chart"},{"isLink":false,"link":"","text":"Image gallery"},{"isLink":false,"link":"","text":"Stylish Bottom Navigation Bar"},{"isLink":false,"link":"","text":"Search country and get latest data"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included design and development of a complete application.","contentList":[{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"<strong>API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Application</strong>"}]},{"contentTitle":"Challenges","contentDescription":"This was my first <strong>React Native</strong> Application. I had some problems at the start but later I was able to <strong>understand the problem and solve them</strong>. The biggest challenge for me was the <strong>Image gallery</strong> section for making the images responsive, In the end, I was able to make all images <strong>proper and responsive</strong>.","contentList":null}]},{"id":3,"title":"Health Monitoring System","description":"Health Monitoring System - Patient-Doctor Live Chat!","logo":"/images/project/hms/hms-logo.webp","thumbnail":"/images/project/hms/hms-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, Back-end, REST, UX, Design, PHP, MySql, GitHub","technology":"React Js, React-Redux, PHP, MySql, HTML, CSS, JS, VS Code","date":"1 August, 2020 - 10 August, 2020","onlineLink":"https://healthmonitoring.radhakishan.site/","sliderImages":[{"image":"/images/project/hms/hms-slider-1.webp"},{"image":"/images/project/hms/hms-slider-2.webp"},{"image":"/images/project/hms/hms-slider-3.webp"},{"image":"/images/project/hms/hms-slider-4.webp"},{"image":"/images/project/hms/hms-slider-5.webp"},{"image":"/images/project/hms/hms-slider-6.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>Health Monitoring System</strong> is a simple web project where <strong>patients</strong> can add their <strong>readings</strong> and <strong>doctors</strong> can check patient's readings and can send direct <strong>messages to each other</strong> through the application. Both patients and doctors need to <strong>log in or register</strong> before proceeds. Both patient and doctors can <strong>live chat</strong> with each other.","contentList":[{"isLink":true,"link":"https://healthmonitoring.radhakishan.site/","text":"Link to live demo"},{"isLink":true,"link":"https://github.com/radhakishan404/Health-Monitoring-System-Live-Chat","text":"Front-end Source Code"},{"isLink":true,"link":"https://github.com/radhakishan404/Health-Monitoring-System-Live-Chat/tree/master/health-monitoring-php","text":"API Source Code"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Login, Register, Forget Password"},{"isLink":false,"link":"","text":"Add, Edit, Delete, List (CRUD) for patient readings"},{"isLink":false,"link":"","text":"Chart view for Readings"},{"isLink":false,"link":"","text":"Profile Edit"},{"isLink":false,"link":"","text":"Doctors Message List"},{"isLink":false,"link":"","text":"Live Chat with doctors"},{"isLink":false,"link":"","text":"List of patients"},{"isLink":false,"link":"","text":"Live search of patients"},{"isLink":false,"link":"","text":"Chart view details about patients"},{"isLink":false,"link":"","text":"Direct message to patients"},{"isLink":false,"link":"","text":"Live Chat with Patients"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"First Install Node Js Version 14.8.0 from <a class='text-gradient' href='https://nodejs.org/en/' rel='nofollow'>Here ↩</a>"},{"isLink":false,"link":"","text":"Clone the repo into your disk <br><strong class='code'>$ git clone git@github.com:ruanyf/react-demos.git</strong>"},{"isLink":false,"link":"","text":"Then go to your project directory using this command. <br><strong class='code'>$ cd project-directory</strong>"},{"isLink":false,"link":"","text":"After navigating to your project directory run this command to download all the node modules. <br><strong class='code'>$ npm install</strong>"},{"isLink":false,"link":"","text":"After the installation successful run this command to run the application. This command will start your react app and run it into the browser. <br><strong class='code'>$ npm start</strong>"},{"isLink":false,"link":"","text":"Hooray! Then play with the source files under the directories."},{"isLink":false,"link":"","text":"<strong>Note:</strong> After the start of the project, you have to integrate the <strong>PHP API</strong> for storing the data in the <strong>database</strong>."}]},{"contentTitle":"Responsibilities","contentDescription":"Responsible for the development of the complete project both front-end and back-end which entailed:","contentList":[{"isLink":false,"link":"","text":"Converting the <strong>HTML/CSS to JSX</strong>"},{"isLink":false,"link":"","text":"Design and Architecture of <strong>React Application</strong>"},{"isLink":false,"link":"","text":"Architecture of <strong>PHP Application</strong>"},{"isLink":false,"link":"","text":"<strong>REST API</strong> Integration"},{"isLink":false,"link":"","text":"<strong>UI/UX</strong> Improvements"},{"isLink":false,"link":"","text":"<strong>Implementation of complete Application</strong>"}]},{"contentTitle":"Challenges","contentDescription":"I had only <strong>two main challenges</strong> in this project, one was the creation of a <strong>chat application between patients and doctors</strong>, and the second was the <strong>handling of two different users</strong> (Patients and Doctors) on the same panel. I used some of the online examples for <strong>chat systems</strong> and also my previous experience in other projects.","contentList":null},{"contentTitle":"Resources","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"ReactJS: Refer to <a href='https://reactjs.org/' class='text-gradient'>https://reactjs.org/</a> to understand the concepts of ReactJS."},{"isLink":false,"link":"","text":"React Bootstrap: Refer to <a class='text-gradient' href='https://react-bootstrap.github.io/getting-started/introduction/'>https://react-bootstrap.github.io/getting-started/introduction/</a> to understand how to use React Bootstrap."}]}]},{"id":4,"title":"react-native-stylish-accordion","description":"Simple Stylish React Native Accordion","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/react-native-accordion-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, TypeScript, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, TypeScript, NPM, VS Code","date":"October 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/react-native-stylish-accordion","sliderImages":[{"image":"/images/project/npm/react-native-accordion-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>react-native-stylish-accordion</strong> is a simple <strong>React Native NPM Package</strong> that can be used in your <strong>React Native Expo Version Application</strong>. It has a total of <strong>9 versions</strong>, the latest version <strong>1.0.9</strong>. The file size is only <strong>675 kB</strong>.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-native-stylish-accordion","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/react-native-stylish-accordion","text":"Link to NPM Package"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Colour"},{"isLink":false,"link":"","text":"Custom Icon"},{"isLink":false,"link":"","text":"Custom Transition Time"},{"isLink":false,"link":"","text":"Custom Icon Size"},{"isLink":false,"link":"","text":"Custom Style"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install react-native-stylish-accordion</strong> OR <strong class='code'>$ yarn add react-native-stylish-accordion</strong>"},{"isLink":false,"link":"","text":"Now we need to install react-native-reanimated and react-native-animatable. If you are using Expo, to ensure that you get the compatible versions of the libraries, run: <br><strong class='code'>$ expo install react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"If you are not using Expo, run the following: <br><strong class='code'>$ yarn add react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"<strong>Note</strong>: This is created with the help of <strong>react-native-accordion-view</strong> package."}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>title</strong> (string)"},{"isLink":false,"link":"","text":"<strong>titleStyle</strong> (TextStyle)"},{"isLink":false,"link":"","text":"<strong>iconSize</strong> (number)"},{"isLink":false,"link":"","text":"<strong>headerStyle</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>subContainerStyle</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>style</strong> (ViewStyle)"},{"isLink":false,"link":"","text":"<strong>headerComponent</strong> (ReactNode)"},{"isLink":false,"link":"","text":"<strong>open</strong> (boolean)"},{"isLink":false,"link":"","text":"<strong>onPress</strong> (void)"},{"isLink":false,"link":"","text":"<strong>timingTransition</strong> (number default:400) opening speed"},{"isLink":false,"link":"","text":"<strong>containerRadius</strong> (number)"}]}]},{"id":5,"title":"validate-form-in-expo-style","description":"Simple form validation component with floating label for React-Native inspired by react-native-form-validator","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/validate-form-expo-style-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, NPM, VS Code","date":"November 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/validate-form-in-expo-style","sliderImages":[{"image":"/images/project/npm/validate-form-expo-style-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"ℹ️ <strong>validate-form-in-expo-style</strong> is a Simple form validation component with floating label for React-Native inspired by <a class='text-gradient' href='https://github.com/NewOldMax/react-native-validator-form' rel='nofollow'>react-native-form-validator</a>. You can add <strong>floating label</strong> with this library and can validate form. I created this package for my personal use you can use it in yours too. <br> <br> My bad, that I don't have Mac or IPhone, so this library is tested only in android. Do check it in Mac and let me know if any problem occurs.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/validate-form-in-expo-style","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/validate-form-in-expo-style","text":"Link to NPM Package"},{"isLink":true,"link":"https://youtu.be/y7bkVDu0LVA","text":"Link to Example Video"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Regexp Rules"},{"isLink":false,"link":"","text":"Custom Valid and Invalid Icon"},{"isLink":false,"link":"","text":"Custom Left Icon"},{"isLink":false,"link":"","text":"Custom Error Messages"},{"isLink":false,"link":"","text":"Custom Style"},{"isLink":false,"link":"","text":"Custom Validation"}]},{"contentTitle":"Install","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install validate-form-in-expo-style</strong> OR <strong class='code'>$ yarn add validate-form-in-expo-style</strong>"},{"isLink":false,"link":"","text":"Now we need to install react-native-reanimated and react-native-animatable. If you are using Expo, to ensure that you get the compatible versions of the libraries, run: <br><strong class='code'>$ expo install react-native-reanimated react-native-gesture-handler react-native-redash</strong>"},{"isLink":false,"link":"","text":"If you are not using Expo, run the following: <br><strong class='code'>$ yarn add react-native-reanimated react-native-gesture-handler react-native-redash</strong>"}]},{"contentTitle":"How to use?","contentDescription":"","contentList":[{"isLink":true,"link":"https://www.npmjs.com/package/validate-form-in-expo-style#-how-to-use-","text":"Link to the code example"}]},{"contentTitle":"Supoorted types","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>TextInput</strong>"}]},{"contentTitle":"Default Validation Rules","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>matchRegexp</strong> (To match any regexp validation)"},{"isLink":false,"link":"","text":"<strong>isEmail</strong> (Is email is valid or not)"},{"isLink":false,"link":"","text":"<strong>isEmpty</strong> (Is field is empty or not)"},{"isLink":false,"link":"","text":"<strong>required</strong> (Is field is required or not)"},{"isLink":false,"link":"","text":"<strong>trim</strong> (Trim the value of field)"},{"isLink":false,"link":"","text":"<strong>isNumber</strong> (Is the value is number or not)"},{"isLink":false,"link":"","text":"<strong>isFloat</strong> (Is the value is float or not)"},{"isLink":false,"link":"","text":"<strong>isPositive</strong> (Is the value is positive or not)"},{"isLink":false,"link":"","text":"<strong>minNumber</strong> (Min number to be entered)"},{"isLink":false,"link":"","text":"<strong>maxNumber</strong> (Max number can be entered)"},{"isLink":false,"link":"","text":"<strong>minFloat</strong> (Min float value to be entered)"},{"isLink":false,"link":"","text":"<strong>maxFloat</strong> (Max float value can be entered)"},{"isLink":false,"link":"","text":"<strong>minStringLength</strong> (Minimum length of string to be entered)"},{"isLink":false,"link":"","text":"<strong>maxStringLength</strong> (Maximum length of string can be entered)"},{"isLink":false,"link":"","text":"<strong>isString</strong> (Is value is string or not)"},{"isLink":false,"link":"","text":"Some rules that are added in validationName can accept extra parameter for validation, like: <br> <strong class='code'><div class='highlight javascript'><pre class='editor editor-colors'><div class='line'><span class='source js'><span class='keyword operator comparison js'><span>&lt;</span></span><span>InputText</span></span></div><div class='line'><span class='source js'><span>&nbsp;&nbsp;&nbsp;</span><span class='meta brace curly js'><span>{</span></span><span class='keyword operator js'><span>...</span></span><span>otherProps</span><span class='meta brace curly js'><span>}</span></span></span></div><div class='line'><span class='source js'><span>&nbsp;&nbsp;&nbsp;validateNames</span><span class='keyword operator assignment js'><span>=</span></span><span class='meta brace curly js'><span>{</span></span><span class='meta brace square js'><span>[</span></span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>minNumber:1</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta delimiter object comma js'><span>,</span></span><span>&nbsp;</span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>maxNumber:255</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta delimiter object comma js'><span>,</span></span><span>&nbsp;</span><span class='string quoted single js'><span class='punctuation definition string begin js'><span>'</span></span><span>matchRegexp:^[0-9]$</span><span class='punctuation definition string end js'><span>'</span></span></span><span class='meta brace square js'><span>]</span></span><span class='meta brace curly js'><span>}</span></span></span></div><div class='line'><span class='source js'><span class='keyword operator js'><span>/</span></span><span class='keyword operator comparison js'><span>&gt;</span></span></span></div></pre></div></strong>"}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>Form Props</strong> <br> <table> <thead> <tr> <th>Prop</th> <th>Required</th> <th>Type</th> <th>Default value</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>onSubmit</td> <td>true</td> <td>function</td> <td></td> <td>Callback for form that fires when all validations are passed</td> </tr> <tr> <td>instantValidate</td> <td>false</td> <td>bool</td> <td>true</td> <td>If true, form will be validated after each field change. If false, form will be validated only after clicking submit button.</td> </tr> <tr> <td>onError</td> <td>false</td> <td>function</td> <td></td> <td>Callback for form that fires when some of validations are not passed. It will return array of elements which not valid.</td> </tr> <tr> <td>debounceTime</td> <td>false</td> <td>number</td> <td>0</td> <td>Debounce time for validation i.e. your validation will run after <code>debounceTime</code> ms when you stop changing your input</td> </tr> </tbody> </table>"},{"isLink":false,"link":"","text":"<strong>InputText Props</strong> <br> <table> <thead> <tr> <th>Prop</th> <th>Required</th> <th>Type</th> <th>Default value</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>true</td> <td>string</td> <td></td> <td>Name of input field</td> </tr> <tr> <td>label</td> <td>false</td> <td>string</td> <td></td> <td>Name of input Floating Label</td> </tr> <tr> <td>placeholder</td> <td>false</td> <td>string</td> <td></td> <td>Placeholder of input before any value</td> </tr> <tr> <td>validateNames</td> <td>false</td> <td>array</td> <td></td> <td>Array of validation. See list of default validation rules in above example.</td> </tr> <tr> <td>errorMessages</td> <td>false</td> <td>array</td> <td></td> <td>Array of error messages. Order of messages should be the same as <code>validateNames</code> prop.</td> </tr> <tr> <td>errorStyle</td> <td>false</td> <td>object</td> <td>{ container: { top: 0, left: 0, position: 'absolute' }, text: { color: 'red' }, underlineValidColor: 'gray', underlineInvalidColor: 'red' } }</td> <td>Add your own error styles</td> </tr> <tr> <td>validatorListener</td> <td>false</td> <td>function</td> <td></td> <td>It triggers after each validation. It will return <code>true</code> or <code>false</code></td> </tr> <tr> <td>withRequiredValidator</td> <td>false</td> <td>bool</td> <td></td> <td>Allow to use <code>required</code> validator in any validation trigger, not only form submit</td> </tr> <tr> <td>leftIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display left icon see above example</td> </tr> <tr> <td>invalidIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display error icon on right side see above example</td> </tr> <tr> <td>validIcon</td> <td>false</td> <td>code, image</td> <td></td> <td>Either include image or add Icon tag code to display success icon on right side see above example</td> </tr> <tr> <td>secureTextEntry</td> <td>false</td> <td>bool</td> <td>false</td> <td>If true than show hide icon will get added automatically</td> </tr> </tbody> </table>"}]},{"contentTitle":"Methods","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>Form Methods</strong> <br> <table> <thead> <tr> <th>Name</th> <th>Params</th> <th>Return</th> <th>Descriptipon</th> </tr> </thead> <tbody> <tr> <td>resetValidations</td> <td></td> <td></td> <td>Reset validation messages for all validated inputs</td> </tr> <tr> <td>isFormValid</td> <td>dryRun: bool (default true)</td> <td>Promise</td> <td>Get form validation state in a Promise (<code>true</code> if whole form is valid). Run with <code>dryRun = false</code> to show validation errors on form</td> </tr> </tbody> </table>"},{"isLink":false,"link":"","text":"<strong>InputText Methods</strong> <br> <table> <thead> <tr> <th>Name</th> <th>Params</th> <th>Return</th> <th>Descriptipon</th> </tr> </thead> <tbody> <tr> <td>getErrorMessage</td> <td></td> <td></td> <td>Get error validation message</td> </tr> <tr> <td>validate</td> <td>value: any, includeRequired: bool</td> <td></td> <td>Run validation for current component</td> </tr> <tr> <td>isValid</td> <td></td> <td>bool</td> <td>Return current validation state</td> </tr> <tr> <td>makeInvalid</td> <td></td> <td></td> <td>Set invalid validation state</td> </tr> <tr> <td>makeValid</td> <td></td> <td></td> <td>Set valid validation state</td> </tr> </tbody> </table>"}]}]},{"id":6,"title":"react-animation-loader","description":"Simple animation loader with some css animation and an image with moving animation","logo":"/images/project/npm/npm-logo.webp","thumbnail":"/images/project/npm/react-animation-loader-thumb.webp","gitAvailable":true,"tag":"React, JavaScript, CSS, NPM, UX, Design, NPM Packages, GitHub","technology":"React, JavaScript, CSS, NPM, VS Code","date":"December 2020","isPackage":true,"onlineLink":"https://github.com/radhakishan404/react-animation-loader","sliderImages":[{"image":"/images/project/npm/react-animation-loader-thumb.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"<strong>react-animation-loader</strong> simple animation loader with some <strong>css animation</strong> and an image with moving animation. Check it out. It has a total of <strong>5 versions</strong>, the latest version <strong>1.0.5</strong>. The file size is only <strong>11.3 kB</strong>.","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-animation-loader","text":"Link to source code"},{"isLink":true,"link":"https://www.npmjs.com/package/react-animation-loader","text":"Link to NPM Package"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Custom Colour"},{"isLink":false,"link":"","text":"Custom Image"},{"isLink":false,"link":"","text":"Custom Transition Time"},{"isLink":false,"link":"","text":"Custom Image Size"},{"isLink":false,"link":"","text":"Custom Style"}]},{"contentTitle":"Install","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong class='code'>$ npm install Install</strong> OR <strong class='code'>$ yarn add Install</strong>"}]},{"contentTitle":"Example","contentDescription":"","contentList":[{"isLink":true,"link":"https://github.com/radhakishan404/react-animation-loader#example","text":"Link to code example"}]},{"contentTitle":"Props","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"<strong>isLoading</strong> (bool) (required)"},{"isLink":false,"link":"","text":"<strong>bgColor</strong> (string) (required)"},{"isLink":false,"link":"","text":"<strong>icon</strong> (string)"}]}]},{"id":7,"title":"Stock Money Makers","description":"Stock Money Makers provides the best online stock market courses in india which Includes exclusive banknifty intraday course, technical analysis course, bank nifty option course, stock market courses for beginners & much more.","logo":"/images/project/smm/logo.webp","thumbnail":"/images/project/smm/smm-1.webp","gitAvailable":false,"tag":"PHP, CodeIgniter, jQuery, JavaScript, MySql, HTML5, Mobirise","technology":"PHP, CodeIgniter, jQuery, JavaScript, MySQL, HTML5, Mobirise","date":"February 2020 - March 2020","isPackage":false,"onlineLink":"https://stockmoneymakers.com/","sliderImages":[{"image":"/images/project/smm/smm-1.webp"},{"image":"/images/project/smm/smm-2.webp"},{"image":"/images/project/smm/smm-3.webp"},{"image":"/images/project/smm/smm-4.webp"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Stock Market Trader/Investor/Consultancy/Financial Advisor. Stock Money Makers Team's Main Purpose Is To Help People Learn About The Stock Market.","contentList":[{"isLink":true,"link":"https://stockmoneymakers.com/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Admin Panel"},{"isLink":false,"link":"","text":"Paid Webinar Courses"},{"isLink":false,"link":"","text":"Blogs"},{"isLink":false,"link":"","text":"Course uploading using plupload"},{"isLink":false,"link":"","text":"Payment Gateway"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included <strong>design and development</strong> of a complete website.","contentList":[{"isLink":false,"link":"","text":"Layout, UI and UX design"},{"isLink":false,"link":"","text":"Front End Development"},{"isLink":false,"link":"","text":"Back End Development"},{"isLink":false,"link":"","text":"Integration with Google Analytics"},{"isLink":false,"link":"","text":"Responsive Design"},{"isLink":false,"link":"","text":"User Experience"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I occurred was <strong>designing and architecting</strong> the base structure of front-end. Building a web app with <strong>CodeIgniter</strong> a perfect choice for future growth and maintainability of a <strong>web application</strong>. CodeIgniter Framework made this a whole lot easier by allowing us to separate the <strong>Logic, Modules and View</strong>. One of the biggest challenges during development was uploading <strong>large video course</strong> of the web app in the back-end.","contentList":null}]},{"id":9,"title":"Bright Wood - Buy Furniture Online","description":"This project was created for one of my friend. He was my relative also so I gave me the best website to manage inventory and orders from site. In this project admin can create multiple variant of product with various type of colors and size of the product.","logo":"/images/project/bright-wood-logo.png","thumbnail":"/images/project/bright-wood-1.png","gitAvailable":false,"tag":"PHP, jQuery, JavaScript, MySql, HTML5, Razorpay","technology":"PHP, jQuery, JavaScript, MySQL, HTML5, Razorpay","date":"July 2021 - September 2021","isPackage":false,"onlineLink":"https://brightwood.in/","sliderImages":[{"image":"/images/project/bright-wood-1.png"},{"image":"/images/project/bright-wood-2.png"},{"image":"/images/project/bright-wood-3.png"},{"image":"/images/project/bright-wood-4.png"}],"content":[{"contentTitle":"Technical Specification","contentDescription":"Bright Wood Provide the best furniture in market, There designs are inspired by the new generation with a classic touch. Brightwood is proud to offer a wide range of solid wood furniture at great prices. Our full array of furniture includes living room, dining room, home office, bedroom, and kids furniture.","contentList":[{"isLink":true,"link":"https://brightwood.in/","text":"Link to live demo"}]},{"contentTitle":"Features","contentDescription":"","contentList":[{"isLink":false,"link":"","text":"Admin Panel"},{"isLink":false,"link":"","text":"Furniture Product"},{"isLink":false,"link":"","text":"Category"},{"isLink":false,"link":"","text":"Online Payment Gateway"},{"isLink":false,"link":"","text":"Filtered Product"}]},{"contentTitle":"Responsibilities","contentDescription":"My responsibilities for this project included <strong>design and development</strong> of a complete website.","contentList":[{"isLink":false,"link":"","text":"Layout, UI and UX design"},{"isLink":false,"link":"","text":"Front End Development"},{"isLink":false,"link":"","text":"Back End Development"},{"isLink":false,"link":"","text":"Integration with Google Analytics"},{"isLink":false,"link":"","text":"Responsive Design"},{"isLink":false,"link":"","text":"User Experience"}]},{"contentTitle":"Challenges","contentDescription":"The first challenge that I occurred was <strong>designing and architecting</strong> the base structure of front-end. Building a ecommerece with <strong>PHP</strong> a perfect choice for future growth and maintainability of a <strong>web application</strong>. PHP made this a whole lot easier by allowing us to create website faster. One of the biggest challenges during development was maintaining <strong>Variants of product</strong> of the web app in the back-end.","contentList":null}]}]`),Nr={experience:Nf,skills:Df,project:Of};function sn(a,o){const s=typeof a=="object"?a:{title:a,description:o};Be.useEffect(()=>{const l=typeof window<"u"?window.location.href:"";s.title&&(document.title=s.title);const c=(w,g)=>{if(!g)return;const b=document.querySelector(w);b&&b.setAttribute("content",g)};s.description&&(c('meta[name="description"]',s.description),c('meta[property="og:description"]',s.description),c('meta[name="twitter:description"]',s.description)),s.title&&(c('meta[property="og:title"]',s.title),c('meta[name="twitter:title"]',s.title)),s.image&&(c('meta[property="og:image"]',s.image),c('meta[name="twitter:image"]',s.image)),l&&c('meta[property="og:url"]',l),c('meta[property="og:type"]',s.type||"website"),c('meta[name="twitter:card"]',s.twitterCard||"summary_large_image");const m=document.querySelector('link[rel="canonical"]');m&&l&&m.setAttribute("href",l);const h=document.querySelector('script[data-dynamic-seo="true"]');if(h&&h.remove(),s.structuredData){const w=document.createElement("script");w.type="application/ld+json",w.dataset.dynamicSeo="true",w.text=JSON.stringify(s.structuredData),document.head.appendChild(w)}},[s.description,s.image,s.structuredData,s.title,s.twitterCard,s.type])}function Ff(){const a=new Date("1998-07-26"),o=new Date;let s=o.getFullYear()-a.getFullYear();const l=o.getMonth()-a.getMonth();return(l<0||l===0&&o.getDate()<a.getDate())&&(s-=1),s}function _f(){return sn("About | Radhakishan Jangid","Experience, technical strengths, and current focus areas."),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"About"}),p.jsx("h1",{children:"Engineering depth, product focus, and shipping discipline."}),p.jsxs("p",{className:"lede",children:["I’m Radhakishan Jangid, a ",Ff()," year old software engineer based in Mumbai. My work sits at the intersection of product UI, backend services, and developer-facing systems."]})]}),p.jsxs("section",{className:"info-grid",children:[p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Current position"}),p.jsxs("p",{children:["Senior Software Engineer at ",p.jsx("a",{href:"https://www.cachetech.com/",target:"_blank",rel:"noreferrer",children:"Cachetech Advisor Solutions"}),", working on fintech systems, multi-tenant workflows, and product engineering across web and mobile."]})]}),p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Working style"}),p.jsx("p",{children:"Strong on frontend architecture, pragmatic on backend delivery, and comfortable turning rough product intent into production-ready systems."})]})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading",children:[p.jsx("span",{className:"eyebrow",children:"Experience"}),p.jsx("h2",{children:"Recent roles"})]}),p.jsx("div",{className:"timeline-list",children:Nr.experience.map(a=>p.jsxs("article",{className:"timeline-item",children:[p.jsxs("div",{className:"timeline-meta",children:[p.jsxs("span",{children:[a.from," to ",a.to]}),p.jsx("span",{children:a.location})]}),p.jsxs("div",{children:[p.jsx("h3",{children:a.title}),p.jsx("p",{className:"timeline-company",children:p.jsx("a",{href:a.companyLink,target:"_blank",rel:"noreferrer",children:a.companyName})}),p.jsx("p",{children:a.description})]})]},`${a.companyName}-${a.from}`))})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading",children:[p.jsx("span",{className:"eyebrow",children:"Capabilities"}),p.jsx("h2",{children:"Core skill areas"})]}),p.jsx("div",{className:"capability-grid",children:Nr.skills[0].skillType.map(a=>p.jsxs("article",{className:"surface-card",children:[p.jsx("h3",{children:a.title}),p.jsx("p",{dangerouslySetInnerHTML:{__html:a.description}}),p.jsx("ul",{className:"clean-list",children:a.skillsList.map(o=>p.jsxs("li",{children:[p.jsx("strong",{children:o.skillTitle}),p.jsx("span",{children:o.skillDesc})]},o.skillTitle))})]},a.title))})]})]})}function zf({html:a,title:o}){return p.jsx("iframe",{className:"article-detail-frame",title:o,srcDoc:a,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms"})}const Ss="rk-journal-f7c2a91",Cs="https://api.countapi.xyz",Ud=new Set;function xu(a){let o=0;for(let s=0;s<a.length;s+=1)o=(o<<5)-o+a.charCodeAt(s),o|=0;return 180+Math.abs(o)%620}async function Bf(a){const o=await fetch(`${Cs}/get/${Ss}/${a}`),s=await o.json();return o.ok&&typeof s.value=="number"?s.value:null}async function Gf(a){const o=xu(a),s=new URLSearchParams({namespace:Ss,key:a,value:`${o}`}),l=await fetch(`${Cs}/create?${s.toString()}`),c=await l.json();return l.ok&&typeof c.value=="number"?c.value:o}async function Hf(a){const o=await fetch(`${Cs}/hit/${Ss}/${a}`),s=await o.json();return o.ok&&typeof s.value=="number"?s.value:null}function Uf(a){return typeof a!="number"?"":`${new Intl.NumberFormat("en-US").format(a)} reads`}function ku(a,o=!1){const[s,l]=Be.useState(null);return Be.useEffect(()=>{let c=!0;async function m(){try{let h=await Bf(a);if(h===null&&(h=await Gf(a)),o&&!Ud.has(a)){Ud.add(a);const w=await Hf(a);typeof w=="number"&&(h=w)}c&&l(h)}catch{c&&l(xu(a))}}return m(),()=>{c=!1}},[o,a]),Be.useMemo(()=>({views:s,viewsLabel:Uf(s)}),[s])}function Wf({match:a}){const o=wu(a.params.slug),{views:s,viewsLabel:l}=ku(a.params.slug,!0);return sn({title:o?`${o.title} | Articles | Radhakishan Jangid`:"Article | Radhakishan Jangid",description:o?.excerpt||"Article detail",image:o?.coverImage||"/images/rk-formal.jpg",type:"article",structuredData:o?{"@context":"https://schema.org","@type":"Article",headline:o.title,description:o.excerpt,datePublished:o.sortDate||void 0,author:{"@type":"Person",name:"Radhakishan Jangid"},publisher:{"@type":"Person",name:"Radhakishan Jangid"},mainEntityOfPage:`https://radhakishan404.github.io/articles/${o.slug}`,image:o.coverImage?`https://radhakishan404.github.io${o.coverImage}`:"https://radhakishan404.github.io/images/rk-formal.jpg",keywords:o.tags.join(", "),interactionStatistic:typeof s=="number"?{"@type":"InteractionCounter",interactionType:"https://schema.org/ReadAction",userInteractionCount:s}:void 0}:void 0}),o?o.kind==="html"?p.jsx(zf,{html:o.raw,title:o.title}):p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"article-detail-header",children:[p.jsx(ze,{className:"back-link",to:"/articles",children:"Back to articles"}),p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:o.kind==="html"?"HTML":"Markdown"}),p.jsx("span",{children:o.readingTime}),o.date?p.jsx("span",{children:o.date}):null,l?p.jsx("span",{children:l}):null]}),p.jsx("h1",{children:o.title}),p.jsx("p",{className:"lede article-lede",children:o.excerpt}),o.tags.length?p.jsx("div",{className:"tag-row",children:o.tags.map(c=>p.jsx("span",{className:"tag-chip tag-chip-static",children:c},c))}):null]}),p.jsx("article",{className:"article-prose",dangerouslySetInnerHTML:{__html:o.bodyHtml}})]}):p.jsx(Mr,{to:"/articles"})}function qf({article:a}){const{viewsLabel:o}=ku(a.slug),s=a.coverImage?{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62)), url(${a.coverImage})`}:a.accent?{background:`linear-gradient(135deg, ${a.accent}22 0%, transparent 70%), var(--page-bg)`}:void 0;return p.jsxs("article",{className:"article-card",children:[p.jsx(ze,{className:"article-card-preview",to:`/articles/${a.slug}`,"aria-label":`Open ${a.title}`,children:p.jsxs("div",{className:`article-card-cover${a.coverImage?" has-image":""}`,style:s,children:[p.jsxs("div",{className:"article-card-cover-top",children:[p.jsx("span",{className:"article-cover-category",children:a.category||"Article"}),p.jsx("span",{className:"article-cover-kind",children:a.kind==="html"?"HTML":"Markdown"})]}),p.jsxs("div",{className:"article-card-cover-body",children:[p.jsx("h4",{children:a.title}),p.jsx("p",{children:a.excerpt})]})]})}),p.jsxs("div",{className:"article-card-body",children:[p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:a.category||"Article"}),p.jsx("span",{children:a.readingTime}),a.date?p.jsx("span",{children:a.date}):null,o?p.jsx("span",{children:o}):null]}),p.jsx("h3",{children:p.jsx(ze,{to:`/articles/${a.slug}`,children:a.title})}),p.jsx("p",{children:a.excerpt}),a.tags.length?p.jsx("div",{className:"tag-row",children:a.tags.slice(0,4).map(l=>p.jsx("button",{type:"button",className:"tag-chip tag-chip-static",children:l},l))}):null,p.jsx(ze,{className:"inline-link",to:`/articles/${a.slug}`,children:"Open article"})]})]})}function Yf(){const[a,o]=Be.useState(""),[s,l]=Be.useState("all"),[c,m]=Be.useState("all"),h=kf(),w=a.trim().toLowerCase(),g=Ht.filter(v=>{const A=!w||v.title.toLowerCase().includes(w)||v.excerpt.toLowerCase().includes(w),P=s==="all"||v.kind===s,F=c==="all"||v.tags.includes(c);return A&&P&&F}),b=Ht.find(v=>v.featured)||Ht[0];return sn({title:"Articles | Radhakishan Jangid",description:"AI prompts, developer content systems, carousel workflows, public write-ups, and practical technical articles for developers and creators.",image:b?.coverImage||"/images/rk-formal.jpg",type:"website",structuredData:{"@context":"https://schema.org","@type":"CollectionPage",name:"Articles by Radhakishan Jangid",description:"AI prompts, developer content systems, public write-ups, and practical technical articles.",url:"https://radhakishan404.github.io/articles",mainEntity:g.slice(0,10).map(v=>({"@type":"Article",headline:v.title,url:`https://radhakishan404.github.io/articles/${v.slug}`,datePublished:v.sortDate||void 0}))}}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"articles-hero",children:[p.jsxs("div",{className:"articles-hero-copy",children:[p.jsx("span",{className:"eyebrow",children:"Articles"}),p.jsx("h1",{children:"Prompts, AI workflows, dev content, and creator systems."}),p.jsx("p",{className:"lede",children:"Better articles for AI learners, developers, and tech creators. Less filler, more useful content."}),p.jsxs("div",{className:"article-hero-stats",children:[p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:Ht.length}),p.jsx("span",{children:"Published pieces"})]}),p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:h.length}),p.jsx("span",{children:"Topics covered"})]}),p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:Ht.filter(v=>v.kind==="html").length}),p.jsx("span",{children:"Interactive pages"})]})]})]}),b?p.jsx(ze,{className:"featured-article",to:`/articles/${b.slug}`,children:p.jsx("div",{className:`featured-article-media${b.coverImage?" has-image":""}`,style:b.coverImage?{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0.14), rgba(0,0,0,0.7)), url(${b.coverImage})`}:void 0,children:p.jsxs("div",{className:"featured-article-inner",children:[p.jsx("span",{className:"featured-label",children:"Featured"}),p.jsx("h2",{children:b.title}),p.jsx("p",{children:b.excerpt}),p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:b.category}),p.jsx("span",{children:b.readingTime}),b.date?p.jsx("span",{children:b.date}):null]})]})})}):null]}),p.jsx("section",{className:"surface-card filter-panel",children:p.jsxs("div",{className:"filter-panel-row",children:[p.jsxs("label",{className:"search-field",children:[p.jsx("span",{children:"Search"}),p.jsx("input",{type:"search",value:a,onChange:v=>o(v.target.value),placeholder:"Search title, excerpt, or topic"})]}),p.jsxs("div",{className:"filter-group",children:[p.jsx("span",{children:"Type"}),p.jsx("div",{className:"tag-row",children:["all","markdown","html"].map(v=>p.jsx("button",{type:"button",className:`tag-chip${s===v?" is-active":""}`,onClick:()=>l(v),children:v==="all"?"All":v},v))})]}),h.length?p.jsxs("div",{className:"filter-group",children:[p.jsx("span",{children:"Tags"}),p.jsxs("div",{className:"tag-row",children:[p.jsx("button",{type:"button",className:`tag-chip${c==="all"?" is-active":""}`,onClick:()=>m("all"),children:"All"}),h.map(v=>p.jsx("button",{type:"button",className:`tag-chip${c===v?" is-active":""}`,onClick:()=>m(v),children:v},v))]})]}):null]})}),p.jsx("section",{className:"article-grid article-grid-large",children:g.map(v=>p.jsx(qf,{article:v},v.slug))})]})}var es={},Ir={},Wd;function $f(){if(Wd)return Ir;Wd=1,Object.defineProperty(Ir,"__esModule",{value:!0}),Ir.EmailJSResponseStatus=void 0;var a=(function(){function o(s){this.status=s.status,this.text=s.responseText}return o})();return Ir.EmailJSResponseStatus=a,Ir}var Lr={},qd;function Vf(){if(qd)return Lr;qd=1,Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.UI=void 0;var a=(function(){function o(){}return o.clearAll=function(s){s.classList.remove(this.PROGRESS),s.classList.remove(this.DONE),s.classList.remove(this.ERROR)},o.progressState=function(s){this.clearAll(s),s.classList.add(this.PROGRESS)},o.successState=function(s){s.classList.remove(this.PROGRESS),s.classList.add(this.DONE)},o.errorState=function(s){s.classList.remove(this.PROGRESS),s.classList.add(this.ERROR)},o.PROGRESS="emailjs-sending",o.DONE="emailjs-success",o.ERROR="emailjs-error",o})();return Lr.UI=a,Lr}var Yd;function Jf(){return Yd||(Yd=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.EmailJSResponseStatus=a.sendForm=a.send=a.init=void 0;var o=$f();Object.defineProperty(a,"EmailJSResponseStatus",{enumerable:!0,get:function(){return o.EmailJSResponseStatus}});var s=Vf(),l=null,c="https://api.emailjs.com";function m(A,P,F){return F===void 0&&(F={}),new Promise(function(_,Y){var K=new XMLHttpRequest;K.addEventListener("load",function(H){var B=new o.EmailJSResponseStatus(H.target);B.status===200||B.text==="OK"?_(B):Y(B)}),K.addEventListener("error",function(H){Y(new o.EmailJSResponseStatus(H.target))}),K.open("POST",A,!0);for(var N in F)K.setRequestHeader(N,F[N]);K.send(P)})}function h(A){var P=document&&document.getElementById("g-recaptcha-response");return P&&P.value&&(A["g-recaptcha-response"]=P.value),P=null,A}function w(A){return A[0]!=="#"&&A[0]!=="."?"#"+A:A}function g(A,P){l=A,c=P||"https://api.emailjs.com"}a.init=g;function b(A,P,F,_){var Y={lib_version:"2.6.4",user_id:_||l,service_id:A,template_id:P,template_params:h(F)};return m(c+"/api/v1.0/email/send",JSON.stringify(Y),{"Content-type":"application/json"})}a.send=b;function v(A,P,F,_){if(typeof F=="string"&&(F=document.querySelector(w(F))),!F||F.nodeName!=="FORM")throw"Expected the HTML form element or the style selector of form";s.UI.progressState(F);var Y=new FormData(F);return Y.append("lib_version","2.6.4"),Y.append("service_id",A),Y.append("template_id",P),Y.append("user_id",_||l),m(c+"/api/v1.0/email/send-form",Y).then(function(K){return s.UI.successState(F),K},function(K){return s.UI.errorState(F),Promise.reject(K)})}a.sendForm=v,a.default={init:g,send:b,sendForm:v}})(es)),es}var Qf=Jf();const Kf=Dr(Qf);function Xf(){const[a,o]=Be.useState("idle");sn("Contact | Radhakishan Jangid","Get in touch for engineering work, collaboration, and consulting.");const s=async l=>{l.preventDefault(),o("loading");try{await Kf.sendForm("service_sn6cjfe","template_ai5s6x5",l.target,"user_Di32uXdzGJ3xyE4Kjf5bJ"),o("success"),l.target.reset()}catch{o("error")}};return p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"Contact"}),p.jsx("h1",{children:"Let’s talk about product engineering, frontend systems, or independent builds."}),p.jsx("p",{className:"lede",children:"Email works best, but the form is here if you want to send project details directly from the site."})]}),p.jsxs("section",{className:"contact-grid",children:[p.jsxs("div",{className:"surface-card",children:[p.jsx("h2",{children:"Direct links"}),p.jsx("div",{className:"footer-links contact-links",children:If.map(l=>p.jsx("a",{href:l.href,target:l.external?"_blank":void 0,rel:l.external?"noreferrer":void 0,children:l.label},l.href))})]}),p.jsxs("form",{className:"surface-card contact-form",onSubmit:s,children:[p.jsx("h2",{children:"Send a message"}),p.jsxs("div",{className:"form-grid",children:[p.jsx("input",{name:"from_name",type:"text",placeholder:"Your name",required:!0}),p.jsx("input",{name:"from_email",type:"email",placeholder:"Your email",required:!0})]}),p.jsx("textarea",{name:"from_message",rows:"7",placeholder:"Tell me what you’re building.",required:!0}),p.jsx("button",{type:"submit",className:"button-primary",disabled:a==="loading",children:a==="loading"?"Sending...":"Send message"}),a==="success"?p.jsx("p",{className:"form-status",children:"Message sent. I’ll get back to you soon."}):null,a==="error"?p.jsx("p",{className:"form-status form-status-error",children:"Message failed to send. Email is the safer fallback."}):null]})]})]})}const Zf=new Set(["radhakishan404.github.io","radhakishan404","react-native-stylish-accordion-import"]);function Su(){const[a,o]=Be.useState([]),[s,l]=Be.useState(!0);return Be.useEffect(()=>{let c=!0;async function m(){try{const w=await(await fetch("https://api.github.com/users/radhakishan404/repos?per_page=100&sort=updated")).json();if(!Array.isArray(w)||!c)return;const g=w.filter(b=>!b.fork&&!b.archived&&!Zf.has(b.name)).filter(b=>b.description||b.homepage||b.stargazers_count>0).sort((b,v)=>{const A=b.stargazers_count*5+(b.homepage?2:0),P=v.stargazers_count*5+(v.homepage?2:0);return A!==P?P-A:new Date(v.updated_at)-new Date(b.updated_at)}).slice(0,6);o(g)}catch{}finally{c&&l(!1)}}return m(),()=>{c=!1}},[]),{repos:a,loading:s}}function eg(){const a=Nr.project.slice(0,4),o=Ht.slice(0,3),{repos:s}=Su();return sn({title:"Radhakishan Jangid",description:"Senior software engineer building product systems, frontend experiences, public software projects, and AI-focused technical content.",image:"/images/rk-formal.jpg",type:"website",structuredData:{"@context":"https://schema.org","@graph":[{"@type":"Person",name:"Radhakishan Jangid",jobTitle:"Senior Software Engineer",url:"https://radhakishan404.github.io/",image:"https://radhakishan404.github.io/images/rk-formal.jpg",sameAs:["https://github.com/radhakishan404","https://www.linkedin.com/in/radhakishanjangid","https://dev.to/radhakishanjangid404"]},{"@type":"WebSite",name:"Radhakishan Jangid",url:"https://radhakishan404.github.io/"}]}}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"home-hero",children:[p.jsxs("div",{className:"home-hero-copy motion-rise",children:[p.jsx("span",{className:"eyebrow",children:"Radhakishan Jangid"}),p.jsx("h1",{children:"Senior software engineer building fast, useful products."}),p.jsx("p",{className:"lede",children:"Mumbai based. Focused on React, Node.js, mobile apps, internal systems, and public-facing product builds."}),p.jsxs("div",{className:"hero-actions",children:[p.jsx(ze,{className:"button-primary",to:"/projects",children:"View projects"}),p.jsx(ze,{className:"button-secondary",to:"/articles",children:"Read articles"})]}),p.jsx("div",{className:"hero-stat-row",children:Lf.map(l=>p.jsxs("div",{className:"hero-stat",children:[p.jsx("strong",{children:l.value}),p.jsx("span",{children:l.label})]},l.label))})]}),p.jsxs("div",{className:"portrait-panel motion-rise motion-delay-1",children:[p.jsx("img",{src:"/images/radhakishan-web-2.jpg",alt:"Radhakishan Jangid portrait"}),p.jsxs("div",{className:"portrait-caption",children:[p.jsx("span",{children:"Current focus"}),p.jsx("strong",{children:"React interfaces, backend delivery, AI prototypes, and product execution."})]})]})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Selected work"}),p.jsx("h2",{children:"Featured projects"})]}),p.jsx(ze,{className:"inline-link",to:"/projects",children:"All projects"})]}),p.jsx("div",{className:"project-grid",children:a.map((l,c)=>p.jsxs("article",{className:"surface-card project-card motion-rise",style:{animationDelay:`${c*90}ms`},children:[p.jsx("div",{className:"project-visual",children:p.jsx("img",{src:l.thumbnail,alt:`${l.title} preview`})}),p.jsxs("div",{className:"project-card-top",children:[p.jsx("img",{className:"project-logo",src:l.logo,alt:`${l.title} logo`}),p.jsx("span",{className:"meta-pill",children:l.date||"Case study"})]}),p.jsx("h3",{children:l.title}),p.jsx("p",{children:l.description}),p.jsx("div",{className:"tag-row",children:l.technology.split(",").slice(0,4).map(m=>p.jsx("span",{className:"tag-chip tag-chip-static",children:m.trim()},m))}),p.jsxs("div",{className:"project-card-links",children:[p.jsx(ze,{className:"inline-link",to:`/projects/${Fr(l.title)}`,children:"Case study"}),l.onlineLink?p.jsx("a",{className:"inline-link",href:l.onlineLink,target:"_blank",rel:"noreferrer",children:"Live link"}):null]})]},l.id))})]}),s.length?p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Public work"}),p.jsx("h2",{children:"Recent GitHub projects"})]}),p.jsx("a",{className:"inline-link",href:"https://github.com/radhakishan404?tab=repositories",target:"_blank",rel:"noreferrer",children:"GitHub profile"})]}),p.jsx("div",{className:"public-grid",children:s.slice(0,3).map((l,c)=>p.jsxs("article",{className:"surface-card public-card motion-rise",style:{animationDelay:`${c*100}ms`},children:[p.jsxs("div",{className:"public-card-top",children:[p.jsx("span",{className:"meta-pill",children:"Public"}),p.jsxs("span",{className:"public-star",children:["★ ",l.stargazers_count]})]}),p.jsx("h3",{children:l.name}),p.jsx("p",{children:l.description||"Public GitHub repository."}),p.jsxs("div",{className:"project-card-links",children:[p.jsx("a",{className:"inline-link",href:l.html_url,target:"_blank",rel:"noreferrer",children:"GitHub"}),l.homepage?p.jsx("a",{className:"inline-link",href:l.homepage,target:"_blank",rel:"noreferrer",children:"Live demo"}):null]})]},l.id))})]}):null,p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"Writing"}),p.jsx("h2",{children:"Recent articles"})]}),p.jsx(ze,{className:"inline-link",to:"/articles",children:"All articles"})]}),p.jsx("div",{className:"info-grid",children:o.map((l,c)=>p.jsxs("article",{className:"surface-card compact-article-card motion-rise",style:{animationDelay:`${c*120}ms`},children:[p.jsxs("div",{className:"article-card-meta",children:[p.jsx("span",{className:"meta-pill",children:l.kind==="html"?"HTML":"Markdown"}),p.jsx("span",{children:l.readingTime})]}),p.jsx("h3",{children:l.title}),p.jsx("p",{children:l.excerpt}),p.jsx(ze,{className:"inline-link",to:`/articles/${l.slug}`,children:"Read article"})]},l.slug))})]})]})}function tg({match:a}){const o=Nr.project.find(s=>Fr(s.title)===a.params.topic);return sn(o?`${o.title} | Projects | Radhakishan Jangid`:"Project | Radhakishan Jangid",o?.description||"Project detail"),o?p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx(ze,{className:"back-link",to:"/projects",children:"Back to projects"}),p.jsx("span",{className:"eyebrow",children:"Project"}),p.jsx("h1",{children:o.title}),p.jsx("p",{className:"lede",children:o.description}),p.jsx("div",{className:"tag-row",children:o.technology.split(",").map(s=>p.jsx("span",{className:"tag-chip tag-chip-static",children:s.trim()},s))})]}),p.jsxs("section",{className:"project-detail-layout",children:[p.jsx("div",{className:"project-gallery",children:(o.sliderImages||[]).map((s,l)=>p.jsx("figure",{className:"project-shot",children:p.jsx("img",{src:s.image,alt:`${o.title} screenshot ${l+1}`})},`${o.id}-${l}`))}),p.jsxs("aside",{className:"surface-card project-sidebar",children:[o.onlineLink?p.jsx("a",{className:"button-primary button-block",href:o.onlineLink,target:"_blank",rel:"noreferrer",children:"Visit project"}):null,p.jsxs("div",{className:"sidebar-block",children:[p.jsx("span",{className:"sidebar-label",children:"Date"}),p.jsx("strong",{children:o.date||"Available on request"})]}),p.jsxs("div",{className:"sidebar-block",children:[p.jsx("span",{className:"sidebar-label",children:"Tags"}),p.jsx("p",{children:o.tag})]})]})]}),p.jsx("section",{className:"section-stack project-detail-content",children:(o.content||[]).map(s=>p.jsxs("article",{className:"surface-card",children:[p.jsx("h2",{children:s.contentTitle}),s.contentDescription?p.jsx("p",{dangerouslySetInnerHTML:{__html:s.contentDescription}}):null,s.contentList?.length?p.jsx("ul",{className:"clean-list",children:s.contentList.map(l=>p.jsx("li",{children:l.isLink?p.jsx("a",{href:l.link,target:"_blank",rel:"noreferrer",children:l.text}):p.jsx("span",{dangerouslySetInnerHTML:{__html:l.text}})},`${s.contentTitle}-${l.text}`))}):null]},s.contentTitle))})]}):p.jsx(Mr,{to:"/projects"})}function ng(){const{repos:a,loading:o}=Su();return sn({title:"Projects | Radhakishan Jangid",description:"Selected projects across product UI, web applications, shipped client work, and public software tools.",image:"/images/rk-formal.jpg",type:"website"}),p.jsxs("div",{className:"page-shell shell",children:[p.jsxs("section",{className:"page-hero page-hero-tight",children:[p.jsx("span",{className:"eyebrow",children:"Projects"}),p.jsx("h1",{children:"Projects across product engineering, open source, and shipped client work."}),p.jsx("p",{className:"lede",children:"A cleaner index with visuals, direct links, and detail pages where deeper context already exists."})]}),p.jsxs("section",{className:"section-stack",children:[p.jsx("div",{className:"section-heading",children:p.jsx("h2",{children:"Case studies"})}),p.jsx("div",{className:"project-grid",children:Nr.project.map((s,l)=>p.jsxs("article",{className:"surface-card project-card motion-rise",style:{animationDelay:`${l*70}ms`},children:[p.jsx("div",{className:"project-visual",children:p.jsx("img",{src:s.thumbnail,alt:`${s.title} preview`})}),p.jsxs("div",{className:"project-card-top",children:[p.jsx("img",{className:"project-logo",src:s.logo,alt:`${s.title} logo`}),p.jsx("span",{className:"meta-pill",children:s.gitAvailable?"GitHub":"Project"})]}),p.jsx("h2",{children:s.title}),p.jsx("p",{children:s.description}),p.jsx("div",{className:"tag-row",children:s.tag.split(",").slice(0,4).map(c=>p.jsx("span",{className:"tag-chip tag-chip-static",children:c.trim()},c))}),p.jsxs("div",{className:"project-card-links",children:[p.jsx(ze,{className:"inline-link",to:`/projects/${Fr(s.title)}`,children:"Read detail"}),s.onlineLink?p.jsx("a",{className:"inline-link",href:s.onlineLink,target:"_blank",rel:"noreferrer",children:"Open link"}):null]})]},s.id))})]}),p.jsxs("section",{className:"section-stack",children:[p.jsxs("div",{className:"section-heading section-heading-row",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"GitHub"}),p.jsx("h2",{children:"Public repositories"})]}),p.jsx("a",{className:"inline-link",href:"https://github.com/radhakishan404?tab=repositories",target:"_blank",rel:"noreferrer",children:"View all on GitHub"})]}),p.jsxs("div",{className:"public-grid",children:[a.map((s,l)=>p.jsxs("article",{className:"surface-card public-card motion-rise",style:{animationDelay:`${l*70}ms`},children:[p.jsxs("div",{className:"public-card-top",children:[p.jsx("span",{className:"meta-pill",children:s.language||"Code"}),p.jsxs("span",{className:"public-star",children:["★ ",s.stargazers_count]})]}),p.jsx("h3",{children:s.name}),p.jsx("p",{children:s.description||"Public GitHub repository."}),p.jsx("div",{className:"public-meta",children:p.jsxs("span",{children:["Updated ",new Date(s.updated_at).toLocaleDateString("en-US",{month:"short",year:"numeric"})]})}),p.jsxs("div",{className:"project-card-links",children:[p.jsx("a",{className:"inline-link",href:s.html_url,target:"_blank",rel:"noreferrer",children:"GitHub"}),s.homepage?p.jsx("a",{className:"inline-link",href:s.homepage,target:"_blank",rel:"noreferrer",children:"Live demo"}):null]})]},s.id)),!o&&!a.length?p.jsxs("article",{className:"surface-card public-card",children:[p.jsx("h3",{children:"Public repositories"}),p.jsx("p",{children:"GitHub data is unavailable right now. Refreshing later should bring the latest public projects back in."})]}):null]})]})]})}const $d="G-N8PLTL59Z1";function rg(){if(typeof window>"u"||window.gtag)return;window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)};const a=document.createElement("script");a.async=!0,a.src=`https://www.googletagmanager.com/gtag/js?id=${$d}`,document.head.appendChild(a),window.gtag("js",new Date),window.gtag("config",$d,{send_page_view:!1})}function Vd(a){typeof window>"u"||!window.gtag||window.gtag("event","page_view",{page_location:window.location.href,page_path:a.pathname+a.search,page_title:document.title})}function ag(){const a=cm();return Be.useEffect(()=>(rg(),Vd(a.location),a.listen(s=>{Vd(s)})),[a]),null}function og(){return p.jsx(Mf,{children:p.jsxs(lm,{children:[p.jsx(mt,{exact:!0,path:"/",component:eg}),p.jsx(mt,{exact:!0,path:"/about",component:_f}),p.jsx(mt,{exact:!0,path:"/projects",component:ng}),p.jsx(mt,{exact:!0,path:"/projects/:topic",component:tg}),p.jsx(mt,{exact:!0,path:"/portfolio",render:()=>p.jsx(Mr,{to:"/projects"})}),p.jsx(mt,{exact:!0,path:"/portfolio/:topic",render:({match:a})=>p.jsx(Mr,{to:`/projects/${a.params.topic}`})}),p.jsx(mt,{exact:!0,path:"/articles",component:Yf}),p.jsx(mt,{exact:!0,path:"/articles/:slug",component:Wf}),p.jsx(mt,{exact:!0,path:"/contact",component:Xf}),p.jsx(mt,{render:()=>p.jsx(Mr,{to:"/"})})]})})}function ig(){return p.jsxs(um,{children:[p.jsx(ag,{}),p.jsx(og,{})]})}Ch.render(p.jsx(ge.StrictMode,{children:p.jsx(ig,{})}),document.getElementById("root"));
