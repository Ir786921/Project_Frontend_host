let e,t,n,r,i,a;function o(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function s(e){return e&&e.__esModule?e.default:e}var l,c=globalThis,u={},d={},f=c.parcelRequire10c2;null==f&&((f=function(e){if(e in u)return u[e].exports;if(e in d){var t=d[e];delete d[e];var n={id:e,exports:{}};return u[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){d[e]=t},c.parcelRequire10c2=f);var p=f.register;p("1b2ls",function(e,t){o(e.exports,"Fragment",()=>n,e=>n=e),o(e.exports,"jsx",()=>r,e=>r=e),o(e.exports,"jsxs",()=>i,e=>i=e);var n,r,i,a=f("acw62"),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,i={},a=null,o=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:o,props:i,_owner:u.current}}n=l,r=p,i=p}),p("acw62",function(e,t){e.exports=f("2pUnB")}),p("2pUnB",function(e,t){o(e.exports,"Children",()=>n,e=>n=e),o(e.exports,"Component",()=>r,e=>r=e),o(e.exports,"Fragment",()=>i,e=>i=e),o(e.exports,"Profiler",()=>a,e=>a=e),o(e.exports,"PureComponent",()=>s,e=>s=e),o(e.exports,"StrictMode",()=>l,e=>l=e),o(e.exports,"Suspense",()=>c,e=>c=e),o(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>u,e=>u=e),o(e.exports,"act",()=>d,e=>d=e),o(e.exports,"cloneElement",()=>f,e=>f=e),o(e.exports,"createContext",()=>p,e=>p=e),o(e.exports,"createElement",()=>h,e=>h=e),o(e.exports,"createFactory",()=>m,e=>m=e),o(e.exports,"createRef",()=>g,e=>g=e),o(e.exports,"forwardRef",()=>w,e=>w=e),o(e.exports,"isValidElement",()=>v,e=>v=e),o(e.exports,"lazy",()=>y,e=>y=e),o(e.exports,"memo",()=>b,e=>b=e),o(e.exports,"startTransition",()=>x,e=>x=e),o(e.exports,"unstable_act",()=>S,e=>S=e),o(e.exports,"useCallback",()=>k,e=>k=e),o(e.exports,"useContext",()=>_,e=>_=e),o(e.exports,"useDebugValue",()=>E,e=>E=e),o(e.exports,"useDeferredValue",()=>C,e=>C=e),o(e.exports,"useEffect",()=>T,e=>T=e),o(e.exports,"useId",()=>N,e=>N=e),o(e.exports,"useImperativeHandle",()=>j,e=>j=e),o(e.exports,"useInsertionEffect",()=>I,e=>I=e),o(e.exports,"useLayoutEffect",()=>O,e=>O=e),o(e.exports,"useMemo",()=>P,e=>P=e),o(e.exports,"useReducer",()=>R,e=>R=e),o(e.exports,"useRef",()=>A,e=>A=e),o(e.exports,"useState",()=>M,e=>M=e),o(e.exports,"useSyncExternalStore",()=>L,e=>L=e),o(e.exports,"useTransition",()=>D,e=>D=e),o(e.exports,"version",()=>U,e=>U=e);var n,r,i,a,s,l,c,u,d,f,p,h,m,g,w,v,y,b,x,S,k,_,E,C,T,N,j,I,O,P,R,A,M,L,D,U,F=Symbol.for("react.element"),z=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Y=Symbol.iterator,J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Z={};function ee(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||J}function et(){}function en(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||J}ee.prototype.isReactComponent={},ee.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},ee.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},et.prototype=ee.prototype;var er=en.prototype=new et;er.constructor=en,X(er,ee.prototype),er.isPureReactComponent=!0;var ei=Array.isArray,ea=Object.prototype.hasOwnProperty,eo={current:null},es={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,n){var r,i={},a=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)ea.call(t,r)&&!es.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:F,type:e,key:a,ref:o,props:i,_owner:eo.current}}function ec(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var eu=/\/+/g;function ed(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ef(e,t,n){if(null==e)return e;var r=[],i=0;return function e(t,n,r,i,a){var o,s,l,c=typeof t;("undefined"===c||"boolean"===c)&&(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case F:case z:u=!0}}if(u)return a=a(u=t),t=""===i?"."+ed(u,0):i,ei(a)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(a,n,r,"",function(e){return e})):null!=a&&(ec(a)&&(o=a,s=r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(eu,"$&/")+"/")+t,a={$$typeof:F,type:o.type,key:s,ref:o.ref,props:o.props,_owner:o._owner}),n.push(a)),1;if(u=0,i=""===i?".":i+":",ei(t))for(var d=0;d<t.length;d++){var f=i+ed(c=t[d],d);u+=e(c,n,r,f,a)}else if("function"==typeof(f=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=Y&&l[Y]||l["@@iterator"])?l:null))for(t=f.call(t),d=0;!(c=t.next()).done;)f=i+ed(c=c.value,d++),u+=e(c,n,r,f,a);else if("object"===c)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}(e,r,"","",function(e){return t.call(n,e,i++)}),r}function ep(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var eh={current:null},em={transition:null};function eg(){throw Error("act(...) is not supported in production builds of React.")}n={map:ef,forEach:function(e,t,n){ef(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ef(e,function(){t++}),t},toArray:function(e){return ef(e,function(e){return e})||[]},only:function(e){if(!ec(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r=ee,i=B,a=$,s=en,l=W,c=K,u={ReactCurrentDispatcher:eh,ReactCurrentBatchConfig:em,ReactCurrentOwner:eo},d=eg,f=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X({},e.props),i=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=eo.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ea.call(t,l)&&!es.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:F,type:e.type,key:i,ref:a,props:r,_owner:o}},p=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:V,_context:e},e.Consumer=e},h=el,m=function(e){var t=el.bind(null,e);return t.type=e,t},g=function(){return{current:null}},w=function(e){return{$$typeof:q,render:e}},v=ec,y=function(e){return{$$typeof:Q,_payload:{_status:-1,_result:e},_init:ep}},b=function(e,t){return{$$typeof:G,type:e,compare:void 0===t?null:t}},x=function(e){var t=em.transition;em.transition={};try{e()}finally{em.transition=t}},S=eg,k=function(e,t){return eh.current.useCallback(e,t)},_=function(e){return eh.current.useContext(e)},E=function(){},C=function(e){return eh.current.useDeferredValue(e)},T=function(e,t){return eh.current.useEffect(e,t)},N=function(){return eh.current.useId()},j=function(e,t,n){return eh.current.useImperativeHandle(e,t,n)},I=function(e,t){return eh.current.useInsertionEffect(e,t)},O=function(e,t){return eh.current.useLayoutEffect(e,t)},P=function(e,t){return eh.current.useMemo(e,t)},R=function(e,t,n){return eh.current.useReducer(e,t,n)},A=function(e){return eh.current.useRef(e)},M=function(e){return eh.current.useState(e)},L=function(e,t,n){return eh.current.useSyncExternalStore(e,t,n)},D=function(){return eh.current.useTransition()},U="18.3.1"}),p("Xw6Mv",function(e,t){o(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>$,e=>$=e),o(e.exports,"createPortal",()=>V,e=>V=e),o(e.exports,"createRoot",()=>H,e=>H=e),o(e.exports,"findDOMNode",()=>q,e=>q=e),o(e.exports,"flushSync",()=>K,e=>K=e),o(e.exports,"hydrate",()=>G,e=>G=e),o(e.exports,"hydrateRoot",()=>Q,e=>Q=e),o(e.exports,"render",()=>Y,e=>Y=e),o(e.exports,"unmountComponentAtNode",()=>J,e=>J=e),o(e.exports,"unstable_batchedUpdates",()=>X,e=>X=e),o(e.exports,"unstable_renderSubtreeIntoContainer",()=>Z,e=>Z=e),o(e.exports,"version",()=>ee,e=>ee=e);var n,r,i,a,s,l,c=f("acw62"),u=f("fO90s");function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,h={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(h[e]=t,e=0;e<t.length;e++)p.add(t[e])}var w=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},x={};function S(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new S(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function E(e){return e[1].toUpperCase()}function C(e,t,n,r){var i,a=k.hasOwnProperty(t)?k[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?(i=t,(!!v.call(x,i)||!v.call(b,i)&&(y.test(i)?x[i]=!0:(b[i]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,E);k[t]=new S(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,E);k[t]=new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,E);k[t]=new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});var T=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),j=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),A=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var B=Symbol.iterator;function W(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=B&&e[B]||e["@@iterator"])?e:null}var $,V,H,q,K,G,Q,Y,J,X,Z,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ei=!1;function ea(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s)break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function eo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function es(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=es(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=es(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function eu(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ef(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=eo(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function eh(e,t){ep(e,t);var n=eo(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,eo(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||eu(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ew=Array.isArray;function ev(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(i=0,n=""+eo(n),t=null;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ey(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(d(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eb(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(d(92));if(ew(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:eo(n)}}function ex(e,t){var n=eo(t.value),r=eo(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function eS(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ek(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function e_(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ek(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eE,eC,eT=(eE=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eC=eC||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eC.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return eE(e,t,n,r)})}:eE);function eN(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var ej={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eI=["Webkit","ms","Moz","O"];function eO(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ej.hasOwnProperty(e)&&ej[e]?(""+t).trim():t+"px"}function eP(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=eO(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ej).forEach(function(e){eI.forEach(function(t){ej[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=ej[e]})});var eR=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eA(e,t){if(t){if(eR[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(d(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(d(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(d(62))}}function eM(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eL=null;function eD(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eU=null,eF=null,ez=null;function eB(e){if(e=rQ(e)){if("function"!=typeof eU)throw Error(d(280));var t=e.stateNode;t&&(t=rJ(t),eU(e.stateNode,e.type,t))}}function eW(e){eF?ez?ez.push(e):ez=[e]:eF=e}function e$(){if(eF){var e=eF,t=ez;if(ez=eF=null,eB(e),t)for(e=0;e<t.length;e++)eB(t[e])}}function eV(e,t){return e(t)}function eH(){}var eq=!1;function eK(e,t,n){if(eq)return e(t,n);eq=!0;try{return eV(e,t,n)}finally{eq=!1,(null!==eF||null!==ez)&&(eH(),e$())}}function eG(e,t){var n=e.stateNode;if(null===n)return null;var r=rJ(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(d(231,t,typeof n));return n}var eQ=!1;if(w)try{var eY={};Object.defineProperty(eY,"passive",{get:function(){eQ=!0}}),window.addEventListener("test",eY,eY),window.removeEventListener("test",eY,eY)}catch(e){eQ=!1}function eJ(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var eX=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eX=!0,eZ=e}};function e4(e,t,n,r,i,a,o,s,l){eX=!1,eZ=null,eJ.apply(e2,arguments)}function e3(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e5(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e3(e)!==e)throw Error(d(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e3(e)))throw Error(d(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return e6(i),e;if(a===r)return e6(i),t;a=a.sibling}throw Error(d(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(d(189))}}if(n.alternate!==r)throw Error(d(190))}if(3!==n.tag)throw Error(d(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e7=u.unstable_scheduleCallback,e9=u.unstable_cancelCallback,te=u.unstable_shouldYield,tt=u.unstable_requestPaint,tn=u.unstable_now,tr=u.unstable_getCurrentPriorityLevel,ti=u.unstable_ImmediatePriority,ta=u.unstable_UserBlockingPriority,to=u.unstable_NormalPriority,ts=u.unstable_LowPriority,tl=u.unstable_IdlePriority,tc=null,tu=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/tp|0)|0},tf=Math.log,tp=Math.LN2,th=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tw(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=tg(s):0!=(a&=o)&&(r=tg(a))}else 0!=(o=n&~i)?r=tg(o):0!==a&&(r=tg(a));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!=(4194240&a)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-td(t)),r|=e[n],t&=~i;return r}function tv(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ty(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tb(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tx(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=n}function tS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-td(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var tk=0;function t_(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tE,tC,tT,tN,tj,tI=!1,tO=[],tP=null,tR=null,tA=null,tM=new Map,tL=new Map,tD=[],tU="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tF(e,t){switch(e){case"focusin":case"focusout":tP=null;break;case"dragenter":case"dragleave":tR=null;break;case"mouseover":case"mouseout":tA=null;break;case"pointerover":case"pointerout":tM.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tL.delete(t.pointerId)}}function tz(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&null!==(t=rQ(t))&&tC(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function tB(e){var t=rG(e.target);if(null!==t){var n=e3(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e5(n))){e.blockedOn=t,tj(e.priority,function(){tT(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tW(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rQ(n))&&tC(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eL=r,n.target.dispatchEvent(r),eL=null,t.shift()}return!0}function t$(e,t,n){tW(e)&&n.delete(t)}function tV(){tI=!1,null!==tP&&tW(tP)&&(tP=null),null!==tR&&tW(tR)&&(tR=null),null!==tA&&tW(tA)&&(tA=null),tM.forEach(t$),tL.forEach(t$)}function tH(e,t){e.blockedOn===t&&(e.blockedOn=null,tI||(tI=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,tV)))}function tq(e){function t(t){return tH(t,e)}if(0<tO.length){tH(tO[0],e);for(var n=1;n<tO.length;n++){var r=tO[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tP&&tH(tP,e),null!==tR&&tH(tR,e),null!==tA&&tH(tA,e),tM.forEach(t),tL.forEach(t),n=0;n<tD.length;n++)(r=tD[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tD.length&&null===(n=tD[0]).blockedOn;)tB(n),null===n.blockedOn&&tD.shift()}var tK=T.ReactCurrentBatchConfig,tG=!0;function tQ(e,t,n,r){var i=tk,a=tK.transition;tK.transition=null;try{tk=1,tJ(e,t,n,r)}finally{tk=i,tK.transition=a}}function tY(e,t,n,r){var i=tk,a=tK.transition;tK.transition=null;try{tk=4,tJ(e,t,n,r)}finally{tk=i,tK.transition=a}}function tJ(e,t,n,r){if(tG){var i=tZ(e,t,n,r);if(null===i)rb(e,t,r,tX,n),tF(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return tP=tz(tP,e,t,n,r,i),!0;case"dragenter":return tR=tz(tR,e,t,n,r,i),!0;case"mouseover":return tA=tz(tA,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return tM.set(a,tz(tM.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,tL.set(a,tz(tL.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(tF(e,r),4&t&&-1<tU.indexOf(e)){for(;null!==i;){var a=rQ(i);if(null!==a&&tE(a),null===(a=tZ(e,t,n,r))&&rb(e,t,r,tX,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else rb(e,t,r,null,n)}}var tX=null;function tZ(e,t,n,r){if(tX=null,null!==(e=rG(e=eD(r)))){if(null===(t=e3(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e5(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tX=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case ti:return 1;case ta:return 4;case to:case ts:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t4=null;function t3(){if(t4)return t4;var e,t,n=t2,r=n.length,i="value"in t1?t1.value:t1.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return t4=i.slice(e,1<t?1-t:void 0)}function t5(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t8(){return!1}function t7(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?t6:t8,this.isPropagationStopped=t8,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t9,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t7(nn),ni=en({},nn,{view:0,detail:0}),na=t7(ni),no=en({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nw,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t9=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t9=0,nt=e),t9)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),ns=t7(no),nl=t7(en({},no,{dataTransfer:0})),nc=t7(en({},ni,{relatedTarget:0})),nu=t7(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nd=t7(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nf=t7(en({},nn,{data:0})),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function nw(){return ng}var nv=t7(en({},ni,{key:function(e){if(e.key){var t=np[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t5(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nw,charCode:function(e){return"keypress"===e.type?t5(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t5(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),ny=t7(en({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nb=t7(en({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nw})),nx=t7(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nS=t7(en({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nk=[9,13,27,32],n_=w&&"CompositionEvent"in window,nE=null;w&&"documentMode"in document&&(nE=document.documentMode);var nC=w&&"TextEvent"in window&&!nE,nT=w&&(!n_||nE&&8<nE&&11>=nE),nN=!1;function nj(e,t){switch(e){case"keyup":return -1!==nk.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nI(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nO=!1,nP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nR(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nP[e.type]:"textarea"===t}function nA(e,t,n,r){eW(r),0<(t=rS(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nM=null,nL=null;function nD(e){rh(e,0)}function nU(e){if(ec(rY(e)))return e}function nF(e,t){if("change"===e)return t}var nz=!1;if(w){if(w){var nB="oninput"in document;if(!nB){var nW=document.createElement("div");nW.setAttribute("oninput","return;"),nB="function"==typeof nW.oninput}n=nB}else n=!1;nz=n&&(!document.documentMode||9<document.documentMode)}function n$(){nM&&(nM.detachEvent("onpropertychange",nV),nL=nM=null)}function nV(e){if("value"===e.propertyName&&nU(nL)){var t=[];nA(t,nL,e,eD(e)),eK(nD,t)}}function nH(e,t,n){"focusin"===e?(n$(),nM=t,nL=n,nM.attachEvent("onpropertychange",nV)):"focusout"===e&&n$()}function nq(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nU(nL)}function nK(e,t){if("click"===e)return nU(t)}function nG(e,t){if("input"===e||"change"===e)return nU(t)}var nQ="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nY(e,t){if(nQ(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!v.call(t,i)||!nQ(e[i],t[i]))return!1}return!0}function nJ(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nX(e,t){var n,r=nJ(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nJ(r)}}function nZ(){for(var e=window,t=eu();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=eu(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=w&&"documentMode"in document&&11>=document.documentMode,n2=null,n4=null,n3=null,n5=!1;function n6(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n5||null==n2||n2!==eu(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n3&&nY(n3,r)||(n3=r,0<(r=rS(n4,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n8(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n7={animationend:n8("Animation","AnimationEnd"),animationiteration:n8("Animation","AnimationIteration"),animationstart:n8("Animation","AnimationStart"),transitionend:n8("Transition","TransitionEnd")},n9={},re={};function rt(e){if(n9[e])return n9[e];if(!n7[e])return e;var t,n=n7[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n9[e]=n[t];return e}w&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n7.animationend.animation,delete n7.animationiteration.animation,delete n7.animationstart.animation),"TransitionEvent"in window||delete n7.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ri=rt("animationstart"),ra=rt("transitionend"),ro=new Map,rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rl(e,t){ro.set(e,t),m(t,[e])}for(var rc=0;rc<rs.length;rc++){var ru=rs[rc];rl(ru.toLowerCase(),"on"+(ru[0].toUpperCase()+ru.slice(1)))}rl(rn,"onAnimationEnd"),rl(rr,"onAnimationIteration"),rl(ri,"onAnimationStart"),rl("dblclick","onDoubleClick"),rl("focusin","onFocus"),rl("focusout","onBlur"),rl(ra,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(rd));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,o,s,l){if(e4.apply(this,arguments),eX){if(eX){var c=eZ;eX=!1,eZ=null}else throw Error(d(198));e0||(e0=!0,e1=c)}}(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;rp(i,s,c),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;rp(i,s,c),a=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rH];void 0===n&&(n=t[rH]=new Set);var r=e+"__bubble";n.has(r)||(ry(t,e,2,!1),n.add(r))}function rg(e,t,n){var r=0;t&&(r|=4),ry(n,e,r,t)}var rw="_reactListening"+Math.random().toString(36).slice(2);function rv(e){if(!e[rw]){e[rw]=!0,p.forEach(function(t){"selectionchange"!==t&&(rf.has(t)||rg(t,!1,e),rg(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[rw]||(t[rw]=!0,rg("selectionchange",!1,t))}}function ry(e,t,n,r){switch(t0(t)){case 1:var i=tQ;break;case 4:i=tY;break;default:i=tJ}n=i.bind(null,t,n,e),i=void 0,eQ&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rb(e,t,n,r,i){var a=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=rG(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}eK(function(){var r=a,i=eD(n),o=[];e:{var s=ro.get(e);if(void 0!==s){var l=nr,c=e;switch(e){case"keypress":if(0===t5(n))break e;case"keydown":case"keyup":l=nv;break;case"focusin":c="focus",l=nc;break;case"focusout":c="blur",l=nc;break;case"beforeblur":case"afterblur":l=nc;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=nb;break;case rn:case rr:case ri:l=nu;break;case ra:l=nx;break;case"scroll":l=na;break;case"wheel":l=nS;break;case"copy":case"cut":case"paste":l=nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=ny}var u=0!=(4&t),d=!u&&"scroll"===e,f=u?null!==s?s+"Capture":null:s;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&null!=(m=eG(h,f))&&u.push(rx(h,m,p))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,n,i),o.push({event:s,listeners:u}))}}if(0==(7&t)){if(s="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(s&&n!==eL&&(c=n.relatedTarget||n.fromElement)&&(rG(c)||c[rV]))&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(c=n.relatedTarget||n.toElement,l=r,null!==(c=c?rG(c):null)&&(d=e3(c),c!==d||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=ns,m="onMouseLeave",f="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(u=ny,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:rY(l),p=null==c?s:rY(c),(s=new u(m,h+"leave",l,n,i)).target=d,s.relatedTarget=p,m=null,rG(i)===r&&((u=new u(f,h+"enter",c,n,i)).target=p,u.relatedTarget=d,m=u),d=m,l&&c)t:{for(u=l,f=c,h=0,p=u;p;p=rk(p))h++;for(p=0,m=f;m;m=rk(m))p++;for(;0<h-p;)u=rk(u),h--;for(;0<p-h;)f=rk(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break t;u=rk(u),f=rk(f)}u=null}else u=null;null!==l&&r_(o,s,l,u,!1),null!==c&&null!==d&&r_(o,d,c,u,!0)}e:{if("select"===(l=(s=r?rY(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g,w=nF;else if(nR(s)){if(nz)w=nG;else{w=nq;var v=nH}}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(w=nK);if(w&&(w=w(e,r))){nA(o,w,n,i);break e}v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&eg(s,"number",s.value)}switch(v=r?rY(r):window,e){case"focusin":(nR(v)||"true"===v.contentEditable)&&(n2=v,n4=r,n3=null);break;case"focusout":n3=n4=n2=null;break;case"mousedown":n5=!0;break;case"contextmenu":case"mouseup":case"dragend":n5=!1,n6(o,n,i);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n6(o,n,i)}if(n_)t:{switch(e){case"compositionstart":var y="onCompositionStart";break t;case"compositionend":y="onCompositionEnd";break t;case"compositionupdate":y="onCompositionUpdate";break t}y=void 0}else nO?nj(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(nT&&"ko"!==n.locale&&(nO||"onCompositionStart"!==y?"onCompositionEnd"===y&&nO&&(g=t3()):(t2="value"in(t1=i)?t1.value:t1.textContent,nO=!0)),0<(v=rS(r,y)).length&&(y=new nf(y,e,null,n,i),o.push({event:y,listeners:v}),g?y.data=g:null!==(g=nI(n))&&(y.data=g))),(g=nC?function(e,t){switch(e){case"compositionend":return nI(t);case"keypress":if(32!==t.which)return null;return nN=!0," ";case"textInput":return" "===(e=t.data)&&nN?null:e;default:return null}}(e,n):function(e,t){if(nO)return"compositionend"===e||!n_&&nj(e,t)?(e=t3(),t4=t2=t1=null,nO=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nT&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rS(r,"onBeforeInput")).length&&(i=new nf("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=g)}rh(o,t)})}function rx(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rS(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=eG(e,n))&&r.unshift(rx(e,a,i)),null!=(a=eG(e,t))&&r.push(rx(e,a,i))),e=e.return}return r}function rk(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function r_(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=eG(n,a))&&o.unshift(rx(n,l,s)):i||null!=(l=eG(n,a))&&o.push(rx(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var rE=/\r\n?/g,rC=/\u0000|\uFFFD/g;function rT(e){return("string"==typeof e?e:""+e).replace(rE,"\n").replace(rC,"")}function rN(e,t,n){if(t=rT(t),rT(e)!==t&&n)throw Error(d(425))}function rj(){}var rI=null,rO=null;function rP(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rR="function"==typeof setTimeout?setTimeout:void 0,rA="function"==typeof clearTimeout?clearTimeout:void 0,rM="function"==typeof Promise?Promise:void 0,rL="function"==typeof queueMicrotask?queueMicrotask:void 0!==rM?function(e){return rM.resolve(null).then(e).catch(rD)}:rR;function rD(e){setTimeout(function(){throw e})}function rU(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType){if("/$"===(n=i.data)){if(0===r){e.removeChild(i),tq(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=i}while(n)tq(t)}function rF(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function rz(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rB=Math.random().toString(36).slice(2),rW="__reactFiber$"+rB,r$="__reactProps$"+rB,rV="__reactContainer$"+rB,rH="__reactEvents$"+rB,rq="__reactListeners$"+rB,rK="__reactHandles$"+rB;function rG(e){var t=e[rW];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rV]||n[rW]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=rz(e);null!==e;){if(n=e[rW])return n;e=rz(e)}return t}n=(e=n).parentNode}return null}function rQ(e){return(e=e[rW]||e[rV])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rY(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(d(33))}function rJ(e){return e[r$]||null}var rX=[],rZ=-1;function r0(e){return{current:e}}function r1(e){0>rZ||(e.current=rX[rZ],rX[rZ]=null,rZ--)}function r2(e,t){rX[++rZ]=e.current,e.current=t}var r4={},r3=r0(r4),r5=r0(!1),r6=r4;function r8(e,t){var n=e.type.contextTypes;if(!n)return r4;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function r7(e){return null!=(e=e.childContextTypes)}function r9(){r1(r5),r1(r3)}function ie(e,t,n){if(r3.current!==r4)throw Error(d(168));r2(r3,t),r2(r5,n)}function it(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(d(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case I:return"Fragment";case j:return"Portal";case P:return"Profiler";case O:return"StrictMode";case L:return"Suspense";case D:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case A:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case M:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case U:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case F:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",i));return en({},n,r)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r4,r6=r3.current,r2(r3,e),r2(r5,r5.current),!0}function ii(e,t,n){var r=e.stateNode;if(!r)throw Error(d(169));n?(e=it(e,t,r6),r.__reactInternalMemoizedMergedChildContext=e,r1(r5),r1(r3),r2(r3,e)):r1(r5),r2(r5,n)}var ia=null,io=!1,is=!1;function il(e){null===ia?ia=[e]:ia.push(e)}function ic(){if(!is&&null!==ia){is=!0;var e=0,t=tk;try{var n=ia;for(tk=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}ia=null,io=!1}catch(t){throw null!==ia&&(ia=ia.slice(e+1)),e7(ti,ic),t}finally{tk=t,is=!1}}return null}var iu=[],id=0,ip=null,ih=0,im=[],ig=0,iw=null,iv=1,iy="";function ib(e,t){iu[id++]=ih,iu[id++]=ip,ip=e,ih=t}function ix(e,t,n){im[ig++]=iv,im[ig++]=iy,im[ig++]=iw,iw=e;var r=iv;e=iy;var i=32-td(r)-1;r&=~(1<<i),n+=1;var a=32-td(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,iv=1<<32-td(t)+i|n<<i|r,iy=a+e}else iv=1<<a|n<<i|r,iy=e}function iS(e){null!==e.return&&(ib(e,1),ix(e,1,0))}function ik(e){for(;e===ip;)ip=iu[--id],iu[id]=null,ih=iu[--id],iu[id]=null;for(;e===iw;)iw=im[--ig],im[ig]=null,iy=im[--ig],im[ig]=null,iv=im[--ig],im[ig]=null}var i_=null,iE=null,iC=!1,iT=null;function iN(e,t){var n=s7(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ij(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,i_=e,iE=rF(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,i_=e,iE=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==iw?{id:iv,overflow:iy}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=s7(18,null,null,0)).stateNode=t,n.return=e,e.child=n,i_=e,iE=null,!0);default:return!1}}function iI(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function iO(e){if(iC){var t=iE;if(t){var n=t;if(!ij(e,t)){if(iI(e))throw Error(d(418));t=rF(n.nextSibling);var r=i_;t&&ij(e,t)?iN(r,n):(e.flags=-4097&e.flags|2,iC=!1,i_=e)}}else{if(iI(e))throw Error(d(418));e.flags=-4097&e.flags|2,iC=!1,i_=e}}}function iP(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;i_=e}function iR(e){if(e!==i_)return!1;if(!iC)return iP(e),iC=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rP(e.type,e.memoizedProps)),t&&(t=iE)){if(iI(e))throw iA(),Error(d(418));for(;t;)iN(e,t),t=rF(t.nextSibling)}if(iP(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(d(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){iE=rF(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}iE=null}}else iE=i_?rF(e.stateNode.nextSibling):null;return!0}function iA(){for(var e=iE;e;)e=rF(e.nextSibling)}function iM(){iE=i_=null,iC=!1}function iL(e){null===iT?iT=[e]:iT.push(e)}var iD=T.ReactCurrentBatchConfig;function iU(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var iF=r0(null),iz=null,iB=null,iW=null;function i$(){iW=iB=iz=null}function iV(e){var t=iF.current;r1(iF),e._currentValue=t}function iH(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function iq(e,t){iz=e,iW=iB=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ox=!0),e.firstContext=null)}function iK(e){var t=e._currentValue;if(iW!==e){if(e={context:e,memoizedValue:t,next:null},null===iB){if(null===iz)throw Error(d(308));iB=e,iz.dependencies={lanes:0,firstContext:e}}else iB=iB.next=e}return t}var iG=null;function iQ(e){null===iG?iG=[e]:iG.push(e)}function iY(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,iQ(t)):(n.next=i.next,i.next=n),t.interleaved=n,iJ(e,r)}function iJ(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var iX=!1;function iZ(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function i1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function i2(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&sl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,iJ(e,n)}return null===(i=r.interleaved)?(t.next=t,iQ(r)):(t.next=i.next,i.next=t),r.interleaved=t,iJ(e,n)}function i4(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tS(e,n)}}function i3(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n)null===a?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function i5(e,t,n,r){var i=e.updateQueue;iX=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&(s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l)}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var f=s.lane,p=s.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(f=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=en({},d,f);break e;case 2:iX=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=p,l=d):u=u.next=p,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do o|=i.lane,i=i.next;while(i!==t)}else null===a&&(i.shared.lanes=0);sg|=o,e.lanes=o,e.memoizedState=d}}function i6(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(d(191,i));i.call(r)}}}var i8=(new c.Component).refs;function i7(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var i9={isMounted:function(e){return!!(e=e._reactInternals)&&e3(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=sA(),i=sM(e),a=i1(r,i);a.payload=t,null!=n&&(a.callback=n),null!==(t=i2(e,a,i))&&(sL(t,e,i,r),i4(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=sA(),i=sM(e),a=i1(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=i2(e,a,i))&&(sL(t,e,i,r),i4(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=sA(),r=sM(e),i=i1(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=i2(e,i,r))&&(sL(t,e,r,n),i4(t,e,r))}};function ae(e,t,n,r,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||!nY(n,r)||!nY(i,a)}function at(e,t,n){var r=!1,i=r4,a=t.contextType;return"object"==typeof a&&null!==a?a=iK(a):(i=r7(t)?r6:r3.current,a=(r=null!=(r=t.contextTypes))?r8(e,i):r4),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=i9,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function an(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&i9.enqueueReplaceState(t,t.state,null)}function ar(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=i8,iZ(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=iK(a):(a=r7(t)?r6:r3.current,i.context=r8(e,a)),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(i7(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&i9.enqueueReplaceState(i,i.state,null),i5(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ai(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(d(309));var r=n.stateNode}if(!r)throw Error(d(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:((t=function(e){var t=i.refs;t===i8&&(t=i.refs={}),null===e?delete t[a]:t[a]=e})._stringRef=a,t)}if("string"!=typeof e)throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function aa(e,t){throw Error(d(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ao(e){return(0,e._init)(e._payload)}function as(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=le(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?(t=li(n,e.mode,r)).return=e:(t=i(t,n)).return=e,t}function l(e,t,n,r){var a=n.type;return a===I?u(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===F&&ao(a)===t.type)?(r=i(t,n.props)).ref=ai(e,t,n):(r=lt(n.type,n.key,n.props,null,e.mode,r)).ref=ai(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=la(n,e.mode,r)).return=e:(t=i(t,n.children||[])).return=e,t}function u(e,t,n,r,a){return null===t||7!==t.tag?(t=ln(n,e.mode,r,a)).return=e:(t=i(t,n)).return=e,t}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=li(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case N:return(n=lt(t.type,t.key,t.props,null,e.mode,n)).ref=ai(e,null,t),n.return=e,n;case j:return(t=la(t,e.mode,n)).return=e,t;case F:return f(e,(0,t._init)(t._payload),n)}if(ew(t)||W(t))return(t=ln(t,e.mode,n,null)).return=e,t;aa(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case N:return n.key===i?l(e,t,n,r):null;case j:return n.key===i?c(e,t,n,r):null;case F:return p(e,t,(i=n._init)(n._payload),r)}if(ew(n)||W(n))return null!==i?null:u(e,t,n,r,null);aa(e,n)}return null}function h(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case N:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case j:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case F:return h(e,t,n,(0,r._init)(r._payload),i)}if(ew(r)||W(r))return u(t,e=e.get(n)||null,r,i,null);aa(t,r)}return null}return function s(l,c,u,m){if("object"==typeof u&&null!==u&&u.type===I&&null===u.key&&(u=u.props.children),"object"==typeof u&&null!==u){switch(u.$$typeof){case N:e:{for(var g=u.key,w=c;null!==w;){if(w.key===g){if((g=u.type)===I){if(7===w.tag){n(l,w.sibling),(c=i(w,u.props.children)).return=l,l=c;break e}}else if(w.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===F&&ao(g)===w.type){n(l,w.sibling),(c=i(w,u.props)).ref=ai(l,w,u),c.return=l,l=c;break e}n(l,w);break}t(l,w),w=w.sibling}u.type===I?((c=ln(u.props.children,l.mode,m,u.key)).return=l,l=c):((m=lt(u.type,u.key,u.props,null,l.mode,m)).ref=ai(l,c,u),m.return=l,l=m)}return o(l);case j:e:{for(w=u.key;null!==c;){if(c.key===w){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(c=i(c,u.children||[])).return=l,l=c;break e}n(l,c);break}t(l,c),c=c.sibling}(c=la(u,l.mode,m)).return=l,l=c}return o(l);case F:return s(l,c,(w=u._init)(u._payload),m)}if(ew(u))return function(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var w=p(i,d,s[m],l);if(null===w){null===d&&(d=g);break}e&&d&&null===w.alternate&&t(i,d),o=a(w,o,m),null===u?c=w:u.sibling=w,u=w,d=g}if(m===s.length)return n(i,d),iC&&ib(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=f(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return iC&&ib(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=h(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),iC&&ib(i,m),c}(l,c,u,m);if(W(u))return function(i,o,s,l){var c=W(s);if("function"!=typeof c)throw Error(d(150));if(null==(s=c.call(s)))throw Error(d(151));for(var u=c=null,m=o,g=o=0,w=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(w=m,m=null):w=m.sibling;var y=p(i,m,v.value,l);if(null===y){null===m&&(m=w);break}e&&m&&null===y.alternate&&t(i,m),o=a(y,o,g),null===u?c=y:u.sibling=y,u=y,m=w}if(v.done)return n(i,m),iC&&ib(i,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(i,v.value,l))&&(o=a(v,o,g),null===u?c=v:u.sibling=v,u=v);return iC&&ib(i,g),c}for(m=r(i,m);!v.done;g++,v=s.next())null!==(v=h(m,i,g,v.value,l))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),o=a(v,o,g),null===u?c=v:u.sibling=v,u=v);return e&&m.forEach(function(e){return t(i,e)}),iC&&ib(i,g),c}(l,c,u,m);aa(l,u)}return"string"==typeof u&&""!==u||"number"==typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(c=i(c,u)).return=l):(n(l,c),(c=li(u,l.mode,m)).return=l),o(l=c)):n(l,c)}}var al=as(!0),ac=as(!1),au={},ad=r0(au),af=r0(au),ap=r0(au);function ah(e){if(e===au)throw Error(d(174));return e}function am(e,t){switch(r2(ap,t),r2(af,e),r2(ad,au),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:e_(null,"");break;default:t=e_(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(ad),r2(ad,t)}function ag(){r1(ad),r1(af),r1(ap)}function aw(e){ah(ap.current);var t=ah(ad.current),n=e_(t,e.type);t!==n&&(r2(af,e),r2(ad,n))}function av(e){af.current===e&&(r1(ad),r1(af))}var ay=r0(0);function ab(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ax=[];function aS(){for(var e=0;e<ax.length;e++)ax[e]._workInProgressVersionPrimary=null;ax.length=0}var ak=T.ReactCurrentDispatcher,a_=T.ReactCurrentBatchConfig,aE=0,aC=null,aT=null,aN=null,aj=!1,aI=!1,aO=0,aP=0;function aR(){throw Error(d(321))}function aA(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nQ(e[n],t[n]))return!1;return!0}function aM(e,t,n,r,i,a){if(aE=a,aC=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ak.current=null===e||null===e.memoizedState?ol:oc,e=n(r,i),aI){a=0;do{if(aI=!1,aO=0,25<=a)throw Error(d(301));a+=1,aN=aT=null,t.updateQueue=null,ak.current=ou,e=n(r,i)}while(aI)}if(ak.current=os,t=null!==aT&&null!==aT.next,aE=0,aN=aT=aC=null,aj=!1,t)throw Error(d(300));return e}function aL(){var e=0!==aO;return aO=0,e}function aD(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===aN?aC.memoizedState=aN=e:aN=aN.next=e,aN}function aU(){if(null===aT){var e=aC.alternate;e=null!==e?e.memoizedState:null}else e=aT.next;var t=null===aN?aC.memoizedState:aN.next;if(null!==t)aN=t,aT=e;else{if(null===e)throw Error(d(310));e={memoizedState:(aT=e).memoizedState,baseState:aT.baseState,baseQueue:aT.baseQueue,queue:aT.queue,next:null},null===aN?aC.memoizedState=aN=e:aN=aN.next=e}return aN}function aF(e,t){return"function"==typeof t?t(e):t}function az(e){var t=aU(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=aT,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=o=null,l=null,c=a;do{var u=c.lane;if((aE&u)===u)null!==l&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===l?(s=l=f,o=r):l=l.next=f,aC.lanes|=u,sg|=u}c=c.next}while(null!==c&&c!==a)null===l?o=r:l.next=s,nQ(r,t.memoizedState)||(ox=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do a=i.lane,aC.lanes|=a,sg|=a,i=i.next;while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function aB(e){var t=aU(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i)nQ(a,t.memoizedState)||(ox=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function aW(){}function a$(e,t){var n=aC,r=aU(),i=t(),a=!nQ(r.memoizedState,i);if(a&&(r.memoizedState=i,ox=!0),r=r.queue,a1(aq.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==aN&&1&aN.memoizedState.tag){if(n.flags|=2048,aY(9,aH.bind(null,n,r,i,t),void 0,null),null===sc)throw Error(d(349));0!=(30&aE)||aV(n,t,i)}return i}function aV(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=aC.updateQueue)?(t={lastEffect:null,stores:null},aC.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function aH(e,t,n,r){t.value=n,t.getSnapshot=r,aK(t)&&aG(e)}function aq(e,t,n){return n(function(){aK(t)&&aG(e)})}function aK(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nQ(e,n)}catch(e){return!0}}function aG(e){var t=iJ(e,1);null!==t&&sL(t,e,1,-1)}function aQ(e){var t=aD();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aF,lastRenderedState:e},t.queue=e,e=e.dispatch=or.bind(null,aC,e),[t.memoizedState,e]}function aY(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=aC.updateQueue)?(t={lastEffect:null,stores:null},aC.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function aJ(){return aU().memoizedState}function aX(e,t,n,r){var i=aD();aC.flags|=e,i.memoizedState=aY(1|t,n,void 0,void 0===r?null:r)}function aZ(e,t,n,r){var i=aU();r=void 0===r?null:r;var a=void 0;if(null!==aT){var o=aT.memoizedState;if(a=o.destroy,null!==r&&aA(r,o.deps)){i.memoizedState=aY(t,n,a,r);return}}aC.flags|=e,i.memoizedState=aY(1|t,n,a,r)}function a0(e,t){return aX(8390656,8,e,t)}function a1(e,t){return aZ(2048,8,e,t)}function a2(e,t){return aZ(4,2,e,t)}function a4(e,t){return aZ(4,4,e,t)}function a3(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function a5(e,t,n){return n=null!=n?n.concat([e]):null,aZ(4,4,a3.bind(null,t,e),n)}function a6(){}function a8(e,t){var n=aU();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&aA(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function a7(e,t){var n=aU();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&aA(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function a9(e,t,n){return 0==(21&aE)?(e.baseState&&(e.baseState=!1,ox=!0),e.memoizedState=n):(nQ(n,t)||(n=ty(),aC.lanes|=n,sg|=n,e.baseState=!0),t)}function oe(e,t){var n=tk;tk=0!==n&&4>n?n:4,e(!0);var r=a_.transition;a_.transition={};try{e(!1),t()}finally{tk=n,a_.transition=r}}function ot(){return aU().memoizedState}function on(e,t,n){var r=sM(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oi(e)?oa(t,n):null!==(n=iY(e,t,n,r))&&(sL(n,e,r,sA()),oo(n,t,r))}function or(e,t,n){var r=sM(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oi(e))oa(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,nQ(s,o)){var l=t.interleaved;null===l?(i.next=i,iQ(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch(e){}finally{}null!==(n=iY(e,t,i,r))&&(sL(n,e,r,i=sA()),oo(n,t,r))}}function oi(e){var t=e.alternate;return e===aC||null!==t&&t===aC}function oa(e,t){aI=aj=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oo(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tS(e,n)}}var os={readContext:iK,useCallback:aR,useContext:aR,useEffect:aR,useImperativeHandle:aR,useInsertionEffect:aR,useLayoutEffect:aR,useMemo:aR,useReducer:aR,useRef:aR,useState:aR,useDebugValue:aR,useDeferredValue:aR,useTransition:aR,useMutableSource:aR,useSyncExternalStore:aR,useId:aR,unstable_isNewReconciler:!1},ol={readContext:iK,useCallback:function(e,t){return aD().memoizedState=[e,void 0===t?null:t],e},useContext:iK,useEffect:a0,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,aX(4194308,4,a3.bind(null,t,e),n)},useLayoutEffect:function(e,t){return aX(4194308,4,e,t)},useInsertionEffect:function(e,t){return aX(4,2,e,t)},useMemo:function(e,t){var n=aD();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=aD();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=on.bind(null,aC,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},aD().memoizedState=e},useState:aQ,useDebugValue:a6,useDeferredValue:function(e){return aD().memoizedState=e},useTransition:function(){var e=aQ(!1),t=e[0];return e=oe.bind(null,e[1]),aD().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=aC,i=aD();if(iC){if(void 0===n)throw Error(d(407));n=n()}else{if(n=t(),null===sc)throw Error(d(349));0!=(30&aE)||aV(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,a0(aq.bind(null,r,a,e),[e]),r.flags|=2048,aY(9,aH.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=aD(),t=sc.identifierPrefix;if(iC){var n=iy,r=iv;t=":"+t+"R"+(n=(r&~(1<<32-td(r)-1)).toString(32)+n),0<(n=aO++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=aP++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},oc={readContext:iK,useCallback:a8,useContext:iK,useEffect:a1,useImperativeHandle:a5,useInsertionEffect:a2,useLayoutEffect:a4,useMemo:a7,useReducer:az,useRef:aJ,useState:function(){return az(aF)},useDebugValue:a6,useDeferredValue:function(e){return a9(aU(),aT.memoizedState,e)},useTransition:function(){return[az(aF)[0],aU().memoizedState]},useMutableSource:aW,useSyncExternalStore:a$,useId:ot,unstable_isNewReconciler:!1},ou={readContext:iK,useCallback:a8,useContext:iK,useEffect:a1,useImperativeHandle:a5,useInsertionEffect:a2,useLayoutEffect:a4,useMemo:a7,useReducer:aB,useRef:aJ,useState:function(){return aB(aF)},useDebugValue:a6,useDeferredValue:function(e){var t=aU();return null===aT?t.memoizedState=e:a9(t,aT.memoizedState,e)},useTransition:function(){return[aB(aF)[0],aU().memoizedState]},useMutableSource:aW,useSyncExternalStore:a$,useId:ot,unstable_isNewReconciler:!1};function od(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1);case 11:return e=ea(e.type.render,!1);case 1:return e=ea(e.type,!0);default:return""}}(r),r=r.return;while(r)var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function of(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function op(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var oh="function"==typeof WeakMap?WeakMap:Map;function om(e,t,n){(n=i1(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){s_||(s_=!0,sE=r),op(e,t)},n}function og(e,t,n){(n=i1(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){op(e,t)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){op(e,t),"function"!=typeof r&&(null===sC?sC=new Set([this]):sC.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function ow(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new oh;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s4.bind(null,e,t,n),t.then(e,e))}function ov(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function oy(e,t,n,r,i){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=i1(-1,1)).tag=2,i2(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=i),e}var ob=T.ReactCurrentOwner,ox=!1;function oS(e,t,n,r){t.child=null===e?ac(t,null,n,r):al(t,e.child,n,r)}function ok(e,t,n,r,i){n=n.render;var a=t.ref;return(iq(t,i),r=aM(e,t,n,r,a,i),n=aL(),null===e||ox)?(iC&&n&&iS(t),t.flags|=1,oS(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oW(e,t,i))}function o_(e,t,n,r,i){if(null===e){var a=n.type;return"function"!=typeof a||s9(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=lt(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,oE(e,t,a,r,i))}if(a=e.child,0==(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:nY)(o,r)&&e.ref===t.ref)return oW(e,t,i)}return t.flags|=1,(e=le(a,r)).ref=t.ref,e.return=t,t.child=e}function oE(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(nY(a,r)&&e.ref===t.ref){if(ox=!1,t.pendingProps=r=a,0==(e.lanes&i))return t.lanes=e.lanes,oW(e,t,i);0!=(131072&e.flags)&&(ox=!0)}}return oN(e,t,n,r,i)}function oC(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(sp,sf),sf|=n;else{if(0==(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(sp,sf),sf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,r2(sp,sf),sf|=r}}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,r2(sp,sf),sf|=r;return oS(e,t,i,n),t.child}function oT(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oN(e,t,n,r,i){var a=r7(n)?r6:r3.current;return(a=r8(t,a),iq(t,i),n=aM(e,t,n,r,a,i),r=aL(),null===e||ox)?(iC&&r&&iS(t),t.flags|=1,oS(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oW(e,t,i))}function oj(e,t,n,r,i){if(r7(n)){var a=!0;ir(t)}else a=!1;if(iq(t,i),null===t.stateNode)oB(e,t),at(t,n,r),ar(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;c="object"==typeof c&&null!==c?iK(c):r8(t,c=r7(n)?r6:r3.current);var u=n.getDerivedStateFromProps,d="function"==typeof u||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==r||l!==c)&&an(t,o,r,c),iX=!1;var f=t.memoizedState;o.state=f,i5(t,r,o,i),l=t.memoizedState,s!==r||f!==l||r5.current||iX?("function"==typeof u&&(i7(t,n,u,r),l=t.memoizedState),(s=iX||ae(t,n,s,r,f,l,c))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,i0(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:iU(t.type,s),o.props=c,d=t.pendingProps,f=o.context,l="object"==typeof(l=n.contextType)&&null!==l?iK(l):r8(t,l=r7(n)?r6:r3.current);var p=n.getDerivedStateFromProps;(u="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(s!==d||f!==l)&&an(t,o,r,l),iX=!1,f=t.memoizedState,o.state=f,i5(t,r,o,i);var h=t.memoizedState;s!==d||f!==h||r5.current||iX?("function"==typeof p&&(i7(t,n,p,r),h=t.memoizedState),(c=iX||ae(t,n,c,r,f,h,l)||!1)?(u||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=c):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return oI(e,t,n,r,a,i)}function oI(e,t,n,r,i,a){oT(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&ii(t,n,!1),oW(e,t,a);r=t.stateNode,ob.current=t;var s=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=al(t,e.child,null,a),t.child=al(t,null,s,a)):oS(e,t,s,a),t.memoizedState=r.state,i&&ii(t,n,!0),t.child}function oO(e){var t=e.stateNode;t.pendingContext?ie(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ie(e,t.context,!1),am(e,t.containerInfo)}function oP(e,t,n,r,i){return iM(),iL(i),t.flags|=256,oS(e,t,n,r),t.child}var oR={dehydrated:null,treeContext:null,retryLane:0};function oA(e){return{baseLanes:e,cachePool:null,transitions:null}}function oM(e,t,n){var r,i=t.pendingProps,a=ay.current,o=!1,s=0!=(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!=(2&a)),r?(o=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(a|=1),r2(ay,1&a),null===e)return(iO(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=s):o=lr(s,i,0,null),e=ln(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oA(n),t.memoizedState=oR,e):oL(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,o){if(n)return 256&t.flags?(t.flags&=-257,oD(e,t,o,r=of(Error(d(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=lr({mode:"visible",children:r.children},i,0,null),a=ln(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!=(1&t.mode)&&al(t,e.child,null,o),t.child.memoizedState=oA(o),t.memoizedState=oR,a);if(0==(1&t.mode))return oD(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,oD(e,t,o,r=of(a=Error(d(419)),r,void 0))}if(s=0!=(o&e.childLanes),ox||s){if(null!==(r=sc)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==a.retryLane&&(a.retryLane=i,iJ(e,i),sL(r,e,i,-1))}return sQ(),oD(e,t,o,r=of(Error(d(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=s5.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,iE=rF(i.nextSibling),i_=t,iC=!0,iT=null,null!==e&&(im[ig++]=iv,im[ig++]=iy,im[ig++]=iw,iv=e.id,iy=e.overflow,iw=t),t=oL(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,a,n);if(o){o=i.fallback,s=t.mode,r=(a=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=le(a,l)).subtreeFlags=14680064&a.subtreeFlags,null!==r?o=le(r,o):(o=ln(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=null===(s=e.child.memoizedState)?oA(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=oR,i}return e=(o=e.child).sibling,i=le(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function oL(e,t){return(t=lr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function oD(e,t,n,r){return null!==r&&iL(r),al(t,e.child,null,n),e=oL(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oU(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),iH(e.return,t,n)}function oF(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function oz(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(oS(e,t,r.children,n),0!=(2&(r=ay.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&oU(e,n,t);else if(19===e.tag)oU(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(ay,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(i=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===ab(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oF(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ab(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oF(t,!0,n,null,a);break;case"together":oF(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oB(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function oW(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),sg|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(d(153));if(null!==t.child){for(n=le(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=le(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function o$(e,t){if(!iC)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oV(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}r=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},i=function(){},a=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ah(ad.current);var a,o=null;switch(n){case"input":i=ed(e,i),r=ed(e,r),o=[];break;case"select":i=en({},i,{value:void 0}),r=en({},r,{value:void 0}),o=[];break;case"textarea":i=ey(e,i),r=ey(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=rj)}for(c in eA(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c]){if("style"===c){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(h.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null))}for(c in r){var l=r[c];if(s=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(null!=l||null!=s)){if("style"===c){if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l}else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(o=o||[]).push(c,l)):"children"===c?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(h.hasOwnProperty(c)?(null!=l&&"onScroll"===c&&rm("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},s=function(e,t,n,r){n!==r&&(t.flags|=4)};var oH=!1,oq=!1,oK="function"==typeof WeakSet?WeakSet:Set,oG=null;function oQ(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){s2(e,t,n)}else n.current=null}}function oY(e,t,n){try{n()}catch(n){s2(e,t,n)}}var oJ=!1;function oX(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&oY(t,n,a)}i=i.next}while(i!==r)}}function oZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function o0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function o1(e){return 5===e.tag||3===e.tag||4===e.tag}function o2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||o1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var o4=null,o3=!1;function o5(e,t,n){for(n=n.child;null!==n;)o6(e,t,n),n=n.sibling}function o6(e,t,n){if(tu&&"function"==typeof tu.onCommitFiberUnmount)try{tu.onCommitFiberUnmount(tc,n)}catch(e){}switch(n.tag){case 5:oq||oQ(n,t);case 6:var r=o4,i=o3;o4=null,o5(e,t,n),o4=r,o3=i,null!==o4&&(o3?(e=o4,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):o4.removeChild(n.stateNode));break;case 18:null!==o4&&(o3?(e=o4,n=n.stateNode,8===e.nodeType?rU(e.parentNode,n):1===e.nodeType&&rU(e,n),tq(e)):rU(o4,n.stateNode));break;case 4:r=o4,i=o3,o4=n.stateNode.containerInfo,o3=!0,o5(e,t,n),o4=r,o3=i;break;case 0:case 11:case 14:case 15:if(!oq&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!=(2&a)?oY(n,t,o):0!=(4&a)&&oY(n,t,o)),i=i.next}while(i!==r)}o5(e,t,n);break;case 1:if(!oq&&(oQ(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){s2(n,t,e)}o5(e,t,n);break;case 21:default:o5(e,t,n);break;case 22:1&n.mode?(oq=(r=oq)||null!==n.memoizedState,o5(e,t,n),oq=r):o5(e,t,n)}}function o8(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new oK),t.forEach(function(t){var r=s6.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function o7(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:o4=o.stateNode,o3=!1;break e;case 3:case 4:o4=o.stateNode.containerInfo,o3=!0;break e}o=o.return}if(null===o4)throw Error(d(160));o6(e,a,i),o4=null,o3=!1;var s=i.alternate;null!==s&&(s.return=null),i.return=null}catch(e){s2(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)o9(t,e),t=t.sibling}function o9(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o7(t,e),se(e),4&r){try{oX(3,e,e.return),oZ(3,e)}catch(t){s2(e,e.return,t)}try{oX(5,e,e.return)}catch(t){s2(e,e.return,t)}}break;case 1:o7(t,e),se(e),512&r&&null!==n&&oQ(n,n.return);break;case 5:if(o7(t,e),se(e),512&r&&null!==n&&oQ(n,n.return),32&e.flags){var i=e.stateNode;try{eN(i,"")}catch(t){s2(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,o=null!==n?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===a.type&&null!=a.name&&ep(i,a),eM(s,o);var c=eM(s,a);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];"style"===u?eP(i,f):"dangerouslySetInnerHTML"===u?eT(i,f):"children"===u?eN(i,f):C(i,u,f,c)}switch(s){case"input":eh(i,a);break;case"textarea":ex(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ev(i,!!a.multiple,h,!1):!!a.multiple!==p&&(null!=a.defaultValue?ev(i,!!a.multiple,a.defaultValue,!0):ev(i,!!a.multiple,a.multiple?[]:"",!1))}i[r$]=a}catch(t){s2(e,e.return,t)}}break;case 6:if(o7(t,e),se(e),4&r){if(null===e.stateNode)throw Error(d(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(t){s2(e,e.return,t)}}break;case 3:if(o7(t,e),se(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tq(t.containerInfo)}catch(t){s2(e,e.return,t)}break;case 4:default:o7(t,e),se(e);break;case 13:o7(t,e),se(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,a&&(null===i.alternate||null===i.alternate.memoizedState)&&(sx=tn())),4&r&&o8(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(oq=(c=oq)||u,o7(t,e),oq=c):o7(t,e),se(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!u&&0!=(1&e.mode))for(oG=e,u=e.child;null!==u;){for(f=oG=u;null!==oG;){switch(h=(p=oG).child,p.tag){case 0:case 11:case 14:case 15:oX(4,p,p.return);break;case 1:oQ(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){s2(r,n,e)}}break;case 5:oQ(p,p.return);break;case 22:if(null!==p.memoizedState){sn(f);continue}}null!==h?(h.return=p,oG=h):sn(f)}u=u.sibling}e:for(u=null,f=e;;){if(5===f.tag){if(null===u){u=f;try{i=f.stateNode,c?(a=i.style,"function"==typeof a.setProperty?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,o=null!=(l=f.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=eO("display",o))}catch(t){s2(e,e.return,t)}}}else if(6===f.tag){if(null===u)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(t){s2(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:o7(t,e),se(e),4&r&&o8(e);case 21:}}function se(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(o1(n)){var r=n;break e}n=n.return}throw Error(d(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(eN(i,""),r.flags&=-33);var a=o2(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=o2(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rj));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,s,o);break;default:throw Error(d(161))}}catch(t){s2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function st(e){for(;null!==oG;){var t=oG;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:oq||oZ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!oq){if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:iU(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var a=t.updateQueue;null!==a&&i6(t,a,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}i6(t,o,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var u=c.memoizedState;if(null!==u){var f=u.dehydrated;null!==f&&tq(f)}}}break;default:throw Error(d(163))}oq||512&t.flags&&o0(t)}catch(e){s2(t,t.return,e)}}if(t===e){oG=null;break}if(null!==(n=t.sibling)){n.return=t.return,oG=n;break}oG=t.return}}function sn(e){for(;null!==oG;){var t=oG;if(t===e){oG=null;break}var n=t.sibling;if(null!==n){n.return=t.return,oG=n;break}oG=t.return}}function sr(e){for(;null!==oG;){var t=oG;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oZ(4,t)}catch(e){s2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){s2(t,i,e)}}var a=t.return;try{o0(t)}catch(e){s2(t,a,e)}break;case 5:var o=t.return;try{o0(t)}catch(e){s2(t,o,e)}}}catch(e){s2(t,t.return,e)}if(t===e){oG=null;break}var s=t.sibling;if(null!==s){s.return=t.return,oG=s;break}oG=t.return}}var si=Math.ceil,sa=T.ReactCurrentDispatcher,so=T.ReactCurrentOwner,ss=T.ReactCurrentBatchConfig,sl=0,sc=null,su=null,sd=0,sf=0,sp=r0(0),sh=0,sm=null,sg=0,sw=0,sv=0,sy=null,sb=null,sx=0,sS=1/0,sk=null,s_=!1,sE=null,sC=null,sT=!1,sN=null,sj=0,sI=0,sO=null,sP=-1,sR=0;function sA(){return 0!=(6&sl)?tn():-1!==sP?sP:sP=tn()}function sM(e){return 0==(1&e.mode)?1:0!=(2&sl)&&0!==sd?sd&-sd:null!==iD.transition?(0===sR&&(sR=ty()),sR):0!==(e=tk)?e:e=void 0===(e=window.event)?16:t0(e.type)}function sL(e,t,n,r){if(50<sI)throw sI=0,sO=null,Error(d(185));tx(e,n,r),(0==(2&sl)||e!==sc)&&(e===sc&&(0==(2&sl)&&(sw|=n),4===sh&&sB(e,sd)),sD(e,r),1===n&&0===sl&&0==(1&t.mode)&&(sS=tn()+500,io&&ic()))}function sD(e,t){var n,r,i,a=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-td(a),s=1<<o,l=i[o];-1===l?(0==(s&n)||0!=(s&r))&&(i[o]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var o=tw(e,e===sc?sd:0);if(0===o)null!==a&&e9(a),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(null!=a&&e9(a),1===t)0===e.tag?(i=sW.bind(null,e),io=!0,il(i)):il(sW.bind(null,e)),rL(function(){0==(6&sl)&&ic()}),a=null;else{switch(t_(o)){case 1:a=ti;break;case 4:a=ta;break;case 16:default:a=to;break;case 536870912:a=tl}a=e7(a,sU.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function sU(e,t){if(sP=-1,sR=0,0!=(6&sl))throw Error(d(327));var n=e.callbackNode;if(s0()&&e.callbackNode!==n)return null;var r=tw(e,e===sc?sd:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=sY(e,r);else{t=r;var i=sl;sl|=2;var a=sG();for((sc!==e||sd!==t)&&(sk=null,sS=tn()+500,sq(e,t));;)try{(function(){for(;null!==su&&!te();)sJ(su)})();break}catch(t){sK(e,t)}i$(),sa.current=a,sl=i,null!==su?t=0:(sc=null,sd=0,t=sh)}if(0!==t){if(2===t&&0!==(i=tv(e))&&(r=i,t=sF(e,i)),1===t)throw n=sm,sq(e,0),sB(e,r),sD(e,tn()),n;if(6===t)sB(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!nQ(a(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=sY(e,r))&&0!==(a=tv(e))&&(r=a,t=sF(e,a)),1===t))throw n=sm,sq(e,0),sB(e,r),sD(e,tn()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(d(345));case 2:case 5:sZ(e,sb,sk);break;case 3:if(sB(e,r),(130023424&r)===r&&10<(t=sx+500-tn())){if(0!==tw(e,0))break;if(((i=e.suspendedLanes)&r)!==r){sA(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rR(sZ.bind(null,e,sb,sk),t);break}sZ(e,sb,sk);break;case 4:if(sB(e,r),(4194240&r)===r)break;for(i=-1,t=e.eventTimes;0<r;){var o=31-td(r);a=1<<o,(o=t[o])>i&&(i=o),r&=~a}if(r=i,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*si(r/1960))-r)){e.timeoutHandle=rR(sZ.bind(null,e,sb,sk),r);break}sZ(e,sb,sk);break;default:throw Error(d(329))}}}return sD(e,tn()),e.callbackNode===n?sU.bind(null,e):null}function sF(e,t){var n=sy;return e.current.memoizedState.isDehydrated&&(sq(e,t).flags|=256),2!==(e=sY(e,t))&&(t=sb,sb=n,null!==t&&sz(t)),e}function sz(e){null===sb?sb=e:sb.push.apply(sb,e)}function sB(e,t){for(t&=~sv,t&=~sw,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-td(t),r=1<<n;e[n]=-1,t&=~r}}function sW(e){if(0!=(6&sl))throw Error(d(327));s0();var t=tw(e,0);if(0==(1&t))return sD(e,tn()),null;var n=sY(e,t);if(0!==e.tag&&2===n){var r=tv(e);0!==r&&(t=r,n=sF(e,r))}if(1===n)throw n=sm,sq(e,0),sB(e,t),sD(e,tn()),n;if(6===n)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sZ(e,sb,sk),sD(e,tn()),null}function s$(e,t){var n=sl;sl|=1;try{return e(t)}finally{0===(sl=n)&&(sS=tn()+500,io&&ic())}}function sV(e){null!==sN&&0===sN.tag&&0==(6&sl)&&s0();var t=sl;sl|=1;var n=ss.transition,r=tk;try{if(ss.transition=null,tk=1,e)return e()}finally{tk=r,ss.transition=n,0==(6&(sl=t))&&ic()}}function sH(){sf=sp.current,r1(sp)}function sq(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rA(n)),null!==su)for(n=su.return;null!==n;){var r=n;switch(ik(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r9();break;case 3:ag(),r1(r5),r1(r3),aS();break;case 5:av(r);break;case 4:ag();break;case 13:case 19:r1(ay);break;case 10:iV(r.type._context);break;case 22:case 23:sH()}n=n.return}if(sc=e,su=e=le(e.current,null),sd=sf=t,sh=0,sm=null,sv=sw=sg=0,sb=sy=null,null!==iG){for(t=0;t<iG.length;t++)if(null!==(r=(n=iG[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}iG=null}return e}function sK(e,t){for(;;){var n=su;try{if(i$(),ak.current=os,aj){for(var r=aC.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}aj=!1}if(aE=0,aN=aT=aC=null,aI=!1,aO=0,so.current=null,null===n||null===n.return){sh=1,sm=t,su=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=sd,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l,u=s,f=u.tag;if(0==(1&u.mode)&&(0===f||11===f||15===f)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=ov(o);if(null!==h){h.flags&=-257,oy(h,o,s,a,t),1&h.mode&&ow(a,c,t),t=h,l=c;var m=t.updateQueue;if(null===m){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}if(0==(1&t)){ow(a,c,t),sQ();break e}l=Error(d(426))}else if(iC&&1&s.mode){var w=ov(o);if(null!==w){0==(65536&w.flags)&&(w.flags|=256),oy(w,o,s,a,t),iL(od(l,s));break e}}a=l=od(l,s),4!==sh&&(sh=2),null===sy?sy=[a]:sy.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=om(a,l,t);i3(a,v);break e;case 1:s=l;var y=a.type,b=a.stateNode;if(0==(128&a.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===sC||!sC.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=og(a,s,t);i3(a,x);break e}}a=a.return}while(null!==a)}sX(n)}catch(e){t=e,su===n&&null!==n&&(su=n=n.return);continue}break}}function sG(){var e=sa.current;return sa.current=os,null===e?os:e}function sQ(){(0===sh||3===sh||2===sh)&&(sh=4),null===sc||0==(268435455&sg)&&0==(268435455&sw)||sB(sc,sd)}function sY(e,t){var n=sl;sl|=2;var r=sG();for((sc!==e||sd!==t)&&(sk=null,sq(e,t));;)try{(function(){for(;null!==su;)sJ(su)})();break}catch(t){sK(e,t)}if(i$(),sl=n,sa.current=r,null!==su)throw Error(d(261));return sc=null,sd=0,sh}function sJ(e){var t=l(e.alternate,e,sf);e.memoizedProps=e.pendingProps,null===t?sX(e):su=t,so.current=null}function sX(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var o=t.pendingProps;switch(ik(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oV(t),null;case 1:case 17:return r7(t.type)&&r9(),oV(t),null;case 3:return o=t.stateNode,ag(),r1(r5),r1(r3),aS(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(null===e||null===e.child)&&(iR(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==iT&&(sz(iT),iT=null))),i(e,t),oV(t),null;case 5:av(t);var l=ah(ap.current);if(n=t.type,null!==e&&null!=t.stateNode)a(e,t,n,o,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(null===t.stateNode)throw Error(d(166));return oV(t),null}if(e=ah(ad.current),iR(t)){o=t.stateNode,n=t.type;var c=t.memoizedProps;switch(o[rW]=t,o[r$]=c,e=0!=(1&t.mode),n){case"dialog":rm("cancel",o),rm("close",o);break;case"iframe":case"object":case"embed":rm("load",o);break;case"video":case"audio":for(l=0;l<rd.length;l++)rm(rd[l],o);break;case"source":rm("error",o);break;case"img":case"image":case"link":rm("error",o),rm("load",o);break;case"details":rm("toggle",o);break;case"input":ef(o,c),rm("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!c.multiple},rm("invalid",o);break;case"textarea":eb(o,c),rm("invalid",o)}for(var u in eA(n,c),l=null,c)if(c.hasOwnProperty(u)){var f=c[u];"children"===u?"string"==typeof f?o.textContent!==f&&(!0!==c.suppressHydrationWarning&&rN(o.textContent,f,e),l=["children",f]):"number"==typeof f&&o.textContent!==""+f&&(!0!==c.suppressHydrationWarning&&rN(o.textContent,f,e),l=["children",""+f]):h.hasOwnProperty(u)&&null!=f&&"onScroll"===u&&rm("scroll",o)}switch(n){case"input":el(o),em(o,c,!0);break;case"textarea":el(o),eS(o);break;case"select":case"option":break;default:"function"==typeof c.onClick&&(o.onclick=rj)}o=l,t.updateQueue=o,null!==o&&(t.flags|=4)}else{u=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ek(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=u.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof o.is?e=u.createElement(n,{is:o.is}):(e=u.createElement(n),"select"===n&&(u=e,o.multiple?u.multiple=!0:o.size&&(u.size=o.size))):e=u.createElementNS(e,n),e[rW]=t,e[r$]=o,r(e,t,!1,!1),t.stateNode=e;e:{switch(u=eM(n,o),n){case"dialog":rm("cancel",e),rm("close",e),l=o;break;case"iframe":case"object":case"embed":rm("load",e),l=o;break;case"video":case"audio":for(l=0;l<rd.length;l++)rm(rd[l],e);l=o;break;case"source":rm("error",e),l=o;break;case"img":case"image":case"link":rm("error",e),rm("load",e),l=o;break;case"details":rm("toggle",e),l=o;break;case"input":ef(e,o),l=ed(e,o),rm("invalid",e);break;case"option":default:l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=en({},o,{value:void 0}),rm("invalid",e);break;case"textarea":eb(e,o),l=ey(e,o),rm("invalid",e)}for(c in eA(n,l),f=l)if(f.hasOwnProperty(c)){var p=f[c];"style"===c?eP(e,p):"dangerouslySetInnerHTML"===c?null!=(p=p?p.__html:void 0)&&eT(e,p):"children"===c?"string"==typeof p?("textarea"!==n||""!==p)&&eN(e,p):"number"==typeof p&&eN(e,""+p):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(h.hasOwnProperty(c)?null!=p&&"onScroll"===c&&rm("scroll",e):null!=p&&C(e,c,p,u))}switch(n){case"input":el(e),em(e,o,!1);break;case"textarea":el(e),eS(e);break;case"option":null!=o.value&&e.setAttribute("value",""+eo(o.value));break;case"select":e.multiple=!!o.multiple,null!=(c=o.value)?ev(e,!!o.multiple,c,!1):null!=o.defaultValue&&ev(e,!!o.multiple,o.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=rj)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return oV(t),null;case 6:if(e&&null!=t.stateNode)s(e,t,e.memoizedProps,o);else{if("string"!=typeof o&&null===t.stateNode)throw Error(d(166));if(n=ah(ap.current),ah(ad.current),iR(t)){if(o=t.stateNode,n=t.memoizedProps,o[rW]=t,(c=o.nodeValue!==n)&&null!==(e=i_))switch(e.tag){case 3:rN(o.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rN(o.nodeValue,n,0!=(1&e.mode))}c&&(t.flags|=4)}else(o=(9===n.nodeType?n:n.ownerDocument).createTextNode(o))[rW]=t,t.stateNode=o}return oV(t),null;case 13:if(r1(ay),o=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(iC&&null!==iE&&0!=(1&t.mode)&&0==(128&t.flags))iA(),iM(),t.flags|=98560,c=!1;else if(c=iR(t),null!==o&&null!==o.dehydrated){if(null===e){if(!c)throw Error(d(318));if(!(c=null!==(c=t.memoizedState)?c.dehydrated:null))throw Error(d(317));c[rW]=t}else iM(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;oV(t),c=!1}else null!==iT&&(sz(iT),iT=null),c=!0;if(!c)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(o=null!==o)!=(null!==e&&null!==e.memoizedState)&&o&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ay.current)?0===sh&&(sh=3):sQ())),null!==t.updateQueue&&(t.flags|=4),oV(t),null;case 4:return ag(),i(e,t),null===e&&rv(t.stateNode.containerInfo),oV(t),null;case 10:return iV(t.type._context),oV(t),null;case 19:if(r1(ay),null===(c=t.memoizedState))return oV(t),null;if(o=0!=(128&t.flags),null===(u=c.rendering)){if(o)o$(c,!1);else{if(0!==sh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(u=ab(e))){for(t.flags|=128,o$(c,!1),null!==(o=u.updateQueue)&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;null!==n;)c=n,e=o,c.flags&=14680066,null===(u=c.alternate)?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=u.childLanes,c.lanes=u.lanes,c.child=u.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=u.memoizedProps,c.memoizedState=u.memoizedState,c.updateQueue=u.updateQueue,c.type=u.type,e=u.dependencies,c.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(ay,1&ay.current|2),t.child}e=e.sibling}null!==c.tail&&tn()>sS&&(t.flags|=128,o=!0,o$(c,!1),t.lanes=4194304)}}else{if(!o){if(null!==(e=ab(u))){if(t.flags|=128,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),o$(c,!0),null===c.tail&&"hidden"===c.tailMode&&!u.alternate&&!iC)return oV(t),null}else 2*tn()-c.renderingStartTime>sS&&1073741824!==n&&(t.flags|=128,o=!0,o$(c,!1),t.lanes=4194304)}c.isBackwards?(u.sibling=t.child,t.child=u):(null!==(n=c.last)?n.sibling=u:t.child=u,c.last=u)}if(null!==c.tail)return t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=tn(),t.sibling=null,n=ay.current,r2(ay,o?1&n|2:1&n),t;return oV(t),null;case 22:case 23:return sH(),o=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==o&&(t.flags|=8192),o&&0!=(1&t.mode)?0!=(1073741824&sf)&&(oV(t),6&t.subtreeFlags&&(t.flags|=8192)):oV(t),null;case 24:case 25:return null}throw Error(d(156,t.tag))}(n,t,sf))){su=n;return}}else{if(null!==(n=function(e,t){switch(ik(t),t.tag){case 1:return r7(t.type)&&r9(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ag(),r1(r5),r1(r3),aS(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return av(t),null;case 13:if(r1(ay),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(d(340));iM()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(ay),null;case 4:return ag(),null;case 10:return iV(t.type._context),null;case 22:case 23:return sH(),null;default:return null}}(n,t))){n.flags&=32767,su=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sh=6,su=null;return}}if(null!==(t=t.sibling)){su=t;return}su=t=e}while(null!==t)0===sh&&(sh=5)}function sZ(e,t,n){var r=tk,i=ss.transition;try{ss.transition=null,tk=1,function(e,t,n,r){do s0();while(null!==sN)if(0!=(6&sl))throw Error(d(327));n=e.finishedWork;var i=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-td(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,a),e===sc&&(su=sc=null,sd=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||sT||(sT=!0,o=to,s=function(){return s0(),null},e7(o,s)),a=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||a){a=ss.transition,ss.transition=null;var o,s,l,c,u,f=tk;tk=1;var p=sl;sl|=4,so.current=null,function(e,t){if(rI=tG,n0(e=nZ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i,a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(e){n=null;break e}var s=0,l=-1,c=-1,u=0,f=0,p=e,h=null;t:for(;;){for(;p!==n||0!==a&&3!==p.nodeType||(l=s+a),p!==o||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(i=p.firstChild);)h=p,p=i;for(;;){if(p===e)break t;if(h===n&&++u===a&&(l=s),h===o&&++f===r&&(c=s),null!==(i=p.nextSibling))break;h=(p=h).parentNode}p=i}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(rO={focusedElem:e,selectionRange:n},tG=!1,oG=t;null!==oG;)if(e=(t=oG).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,oG=e;else for(;null!==oG;){t=oG;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,w=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:iU(t.type,g),w);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(d(163))}}catch(e){s2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,oG=e;break}oG=t.return}m=oJ,oJ=!1}(e,n),o9(n,e),function(e){var t=nZ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=nX(n,a);var o=nX(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rO),tG=!!rI,rO=rI=null,e.current=n,l=n,c=e,u=i,oG=l,function e(t,n,r){for(var i=0!=(1&t.mode);null!==oG;){var a=oG,o=a.child;if(22===a.tag&&i){var s=null!==a.memoizedState||oH;if(!s){var l=a.alternate,c=null!==l&&null!==l.memoizedState||oq;l=oH;var u=oq;if(oH=s,(oq=c)&&!u)for(oG=a;null!==oG;)c=(s=oG).child,22===s.tag&&null!==s.memoizedState?sr(a):null!==c?(c.return=s,oG=c):sr(a);for(;null!==o;)oG=o,e(o,n,r),o=o.sibling;oG=a,oH=l,oq=u}st(t,n,r)}else 0!=(8772&a.subtreeFlags)&&null!==o?(o.return=a,oG=o):st(t,n,r)}}(l,c,u),tt(),sl=p,tk=f,ss.transition=a}else e.current=n;if(sT&&(sT=!1,sN=e,sj=i),0===(a=e.pendingLanes)&&(sC=null),function(e){if(tu&&"function"==typeof tu.onCommitFiberRoot)try{tu.onCommitFiberRoot(tc,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),sD(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((i=t[n]).value,{componentStack:i.stack,digest:i.digest});if(s_)throw s_=!1,e=sE,sE=null,e;0!=(1&sj)&&0!==e.tag&&s0(),0!=(1&(a=e.pendingLanes))?e===sO?sI++:(sI=0,sO=e):sI=0,ic()}}(e,t,n,r)}finally{ss.transition=i,tk=r}return null}function s0(){if(null!==sN){var e=t_(sj),t=ss.transition,n=tk;try{if(ss.transition=null,tk=16>e?16:e,null===sN)var r=!1;else{if(e=sN,sN=null,sj=0,0!=(6&sl))throw Error(d(331));var i=sl;for(sl|=4,oG=e.current;null!==oG;){var a=oG,o=a.child;if(0!=(16&oG.flags)){var s=a.deletions;if(null!==s){for(var l=0;l<s.length;l++){var c=s[l];for(oG=c;null!==oG;){var u=oG;switch(u.tag){case 0:case 11:case 15:oX(8,u,a)}var f=u.child;if(null!==f)f.return=u,oG=f;else for(;null!==oG;){var p=(u=oG).sibling,h=u.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[rW],delete n[r$],delete n[rH],delete n[rq],delete n[rK]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(u),u===c){oG=null;break}if(null!==p){p.return=h,oG=p;break}oG=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(null!==g)}}oG=a}}if(0!=(2064&a.subtreeFlags)&&null!==o)o.return=a,oG=o;else for(;null!==oG;){if(a=oG,0!=(2048&a.flags))switch(a.tag){case 0:case 11:case 15:oX(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,oG=v;break}oG=a.return}}var y=e.current;for(oG=y;null!==oG;){var b=(o=oG).child;if(0!=(2064&o.subtreeFlags)&&null!==b)b.return=o,oG=b;else for(o=y;null!==oG;){if(s=oG,0!=(2048&s.flags))try{switch(s.tag){case 0:case 11:case 15:oZ(9,s)}}catch(e){s2(s,s.return,e)}if(s===o){oG=null;break}var x=s.sibling;if(null!==x){x.return=s.return,oG=x;break}oG=s.return}}if(sl=i,ic(),tu&&"function"==typeof tu.onPostCommitFiberRoot)try{tu.onPostCommitFiberRoot(tc,e)}catch(e){}r=!0}return r}finally{tk=n,ss.transition=t}}return!1}function s1(e,t,n){t=om(e,t=od(n,t),1),e=i2(e,t,1),t=sA(),null!==e&&(tx(e,1,t),sD(e,t))}function s2(e,t,n){if(3===e.tag)s1(e,e,n);else for(;null!==t;){if(3===t.tag){s1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===sC||!sC.has(r))){e=og(t,e=od(n,e),1),t=i2(t,e,1),e=sA(),null!==t&&(tx(t,1,e),sD(t,e));break}}t=t.return}}function s4(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=sA(),e.pingedLanes|=e.suspendedLanes&n,sc===e&&(sd&n)===n&&(4===sh||3===sh&&(130023424&sd)===sd&&500>tn()-sx?sq(e,0):sv|=n),sD(e,t)}function s3(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=sA();null!==(e=iJ(e,t))&&(tx(e,t,n),sD(e,n))}function s5(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),s3(e,n)}function s6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}null!==r&&r.delete(t),s3(e,n)}function s8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s7(e,t,n,r){return new s8(e,t,n,r)}function s9(e){return!(!(e=e.prototype)||!e.isReactComponent)}function le(e,t){var n=e.alternate;return null===n?((n=s7(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lt(e,t,n,r,i,a){var o=2;if(r=e,"function"==typeof e)s9(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case I:return ln(n.children,i,a,t);case O:o=8,i|=8;break;case P:return(e=s7(12,n,t,2|i)).elementType=P,e.lanes=a,e;case L:return(e=s7(13,n,t,i)).elementType=L,e.lanes=a,e;case D:return(e=s7(19,n,t,i)).elementType=D,e.lanes=a,e;case z:return lr(n,i,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case R:o=10;break e;case A:o=9;break e;case M:o=11;break e;case U:o=14;break e;case F:o=16,r=null;break e}throw Error(d(130,null==e?e:typeof e,""))}return(t=s7(o,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function ln(e,t,n,r){return(e=s7(7,e,r,t)).lanes=n,e}function lr(e,t,n,r){return(e=s7(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return(e=s7(6,e,null,t)).lanes=n,e}function la(e,t,n){return(t=s7(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lo(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tb(0),this.expirationTimes=tb(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tb(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ls(e,t,n,r,i,a,o,s,l){return e=new lo(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=s7(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},iZ(a),e}function ll(e){if(!e)return r4;e=e._reactInternals;e:{if(e3(e)!==e||1!==e.tag)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r7(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(d(171))}if(1===e.tag){var n=e.type;if(r7(n))return it(e,n,t)}return t}function lc(e,t,n,r,i,a,o,s,l){return(e=ls(n,r,!0,e,i,a,o,s,l)).context=ll(null),n=e.current,(a=i1(r=sA(),i=sM(n))).callback=null!=t?t:null,i2(n,a,i),e.current.lanes=i,tx(e,i,r),sD(e,r),e}function lu(e,t,n,r){var i=t.current,a=sA(),o=sM(i);return n=ll(n),null===t.context?t.context=n:t.pendingContext=n,(t=i1(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=i2(i,t,o))&&(sL(e,i,o,a),i4(e,i,o)),o}function ld(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function lf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function lp(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}l=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r5.current)ox=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return ox=!1,function(e,t,n){switch(t.tag){case 3:oO(t),iM();break;case 5:aw(t);break;case 1:r7(t.type)&&ir(t);break;case 4:am(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;r2(iF,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(ay,1&ay.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return oM(e,t,n);return r2(ay,1&ay.current),null!==(e=oW(e,t,n))?e.sibling:null}r2(ay,1&ay.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return oz(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),r2(ay,ay.current),!r)return null;break;case 22:case 23:return t.lanes=0,oC(e,t,n)}return oW(e,t,n)}(e,t,n);ox=0!=(131072&e.flags)}}else ox=!1,iC&&0!=(1048576&t.flags)&&ix(t,ih,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oB(e,t),e=t.pendingProps;var i=r8(t,r3.current);iq(t,n),i=aM(null,t,r,e,i,n);var a=aL();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r7(r)?(a=!0,ir(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,iZ(t),i.updater=i9,t.stateNode=i,i._reactInternals=t,ar(t,r,e,n),t=oI(null,t,r,!0,a,n)):(t.tag=0,iC&&a&&iS(t),oS(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oB(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return s9(e)?1:0;if(null!=e){if((e=e.$$typeof)===M)return 11;if(e===U)return 14}return 2}(r),e=iU(r,e),i){case 0:t=oN(null,t,r,e,n);break e;case 1:t=oj(null,t,r,e,n);break e;case 11:t=ok(null,t,r,e,n);break e;case 14:t=o_(null,t,r,iU(r.type,e),n);break e}throw Error(d(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iU(r,i),oN(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iU(r,i),oj(e,t,r,i,n);case 3:e:{if(oO(t),null===e)throw Error(d(387));r=t.pendingProps,i=(a=t.memoizedState).element,i0(e,t),i5(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){i=od(Error(d(423)),t),t=oP(e,t,r,n,i);break e}if(r!==i){i=od(Error(d(424)),t),t=oP(e,t,r,n,i);break e}for(iE=rF(t.stateNode.containerInfo.firstChild),i_=t,iC=!0,iT=null,n=ac(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(iM(),r===i){t=oW(e,t,n);break e}oS(e,t,r,n)}t=t.child}return t;case 5:return aw(t),null===e&&iO(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,o=i.children,rP(r,i)?o=null:null!==a&&rP(r,a)&&(t.flags|=32),oT(e,t),oS(e,t,o,n),t.child;case 6:return null===e&&iO(t),null;case 13:return oM(e,t,n);case 4:return am(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=al(t,null,r,n):oS(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iU(r,i),ok(e,t,r,i,n);case 7:return oS(e,t,t.pendingProps,n),t.child;case 8:case 12:return oS(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,r2(iF,r._currentValue),r._currentValue=o,null!==a){if(nQ(a.value,o)){if(a.children===i.children&&!r5.current){t=oW(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){o=a.child;for(var l=s.firstContext;null!==l;){if(l.context===r){if(1===a.tag){(l=i1(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var u=(c=c.shared).pending;null===u?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),iH(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(10===a.tag)o=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(o=a.return))throw Error(d(341));o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),iH(o,n,t),o=a.sibling}else o=a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===t){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}}oS(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,iq(t,n),r=r(i=iK(i)),t.flags|=1,oS(e,t,r,n),t.child;case 14:return i=iU(r=t.type,t.pendingProps),i=iU(r.type,i),o_(e,t,r,i,n);case 15:return oE(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iU(r,i),oB(e,t),t.tag=1,r7(r)?(e=!0,ir(t)):e=!1,iq(t,n),at(t,r,i),ar(t,r,i,n),oI(null,t,r,!0,e,n);case 19:return oz(e,t,n);case 22:return oC(e,t,n)}throw Error(d(156,t.tag))};var lh="function"==typeof reportError?reportError:function(e){console.error(e)};function lm(e){this._internalRoot=e}function lg(e){this._internalRoot=e}function lw(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function lv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function ly(){}function lb(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"==typeof i){var s=i;i=function(){var e=ld(o);s.call(e)}}lu(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var a=r;r=function(){var e=ld(o);a.call(e)}}var o=lc(t,r,e,0,null,!1,!1,"",ly);return e._reactRootContainer=o,e[rV]=o.current,rv(8===e.nodeType?e.parentNode:e),sV(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var s=r;r=function(){var e=ld(l);s.call(e)}}var l=ls(e,0,!1,null,null,!1,!1,"",ly);return e._reactRootContainer=l,e[rV]=l.current,rv(8===e.nodeType?e.parentNode:e),sV(function(){lu(t,l,n,r)}),l}(n,t,e,i,r);return ld(o)}lg.prototype.render=lm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(d(409));lu(e,t,null,null)},lg.prototype.unmount=lm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;sV(function(){lu(null,e,null,null)}),t[rV]=null}},lg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tN();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tD.length&&0!==t&&t<tD[n].priority;n++);tD.splice(n,0,e),0===n&&tB(e)}},tE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tg(t.pendingLanes);0!==n&&(tS(t,1|n),sD(t,tn()),0==(6&sl)&&(sS=tn()+500,ic()))}break;case 13:sV(function(){var t=iJ(e,1);null!==t&&sL(t,e,1,sA())}),lp(e,1)}},tC=function(e){if(13===e.tag){var t=iJ(e,134217728);null!==t&&sL(t,e,134217728,sA()),lp(e,134217728)}},tT=function(e){if(13===e.tag){var t=sM(e),n=iJ(e,t);null!==n&&sL(n,e,t,sA()),lp(e,t)}},tN=function(){return tk},tj=function(e,t){var n=tk;try{return tk=e,t()}finally{tk=n}},eU=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=rJ(r);if(!i)throw Error(d(90));ec(r),eh(r,i)}}}break;case"textarea":ex(e,n);break;case"select":null!=(t=n.value)&&ev(e,!!n.multiple,t,!1)}},eV=s$,eH=sV;var lx={findFiberByHostInstance:rG,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lS={bundleType:lx.bundleType,version:lx.version,rendererPackageName:lx.rendererPackageName,rendererConfig:lx.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:lx.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lk.isDisabled&&lk.supportsFiber)try{tc=lk.inject(lS),tu=lk}catch(e){}}$={usingClientEntryPoint:!1,Events:[rQ,rY,rJ,eW,e$,s$]},V=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lw(t))throw Error(d(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:j,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},H=function(e,t){if(!lw(e))throw Error(d(299));var n=!1,r="",i=lh;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ls(e,1,!1,null,null,n,!1,r,i),e[rV]=t.current,rv(8===e.nodeType?e.parentNode:e),new lm(t)},q=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(d(188));throw Error(d(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},K=function(e){return sV(e)},G=function(e,t,n){if(!lv(t))throw Error(d(200));return lb(null,e,t,!0,n)},Q=function(e,t,n){if(!lw(e))throw Error(d(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",o=lh;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=lc(t,null,e,1,null!=n?n:null,i,!1,a,o),e[rV]=t.current,rv(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lg(t)},Y=function(e,t,n){if(!lv(t))throw Error(d(200));return lb(null,e,t,!1,n)},J=function(e){if(!lv(e))throw Error(d(40));return!!e._reactRootContainer&&(sV(function(){lb(null,null,e,!1,function(){e._reactRootContainer=null,e[rV]=null})}),!0)},X=s$,Z=function(e,t,n,r){if(!lv(n))throw Error(d(200));if(null==e||void 0===e._reactInternals)throw Error(d(38));return lb(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),p("fO90s",function(e,t){e.exports=f("gcnCG")}),p("gcnCG",function(e,t){function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else if(c<i&&0>a(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(o(e.exports,"unstable_now",()=>s,e=>s=e),o(e.exports,"unstable_IdlePriority",()=>l,e=>l=e),o(e.exports,"unstable_ImmediatePriority",()=>c,e=>c=e),o(e.exports,"unstable_LowPriority",()=>u,e=>u=e),o(e.exports,"unstable_NormalPriority",()=>d,e=>d=e),o(e.exports,"unstable_Profiling",()=>f,e=>f=e),o(e.exports,"unstable_UserBlockingPriority",()=>p,e=>p=e),o(e.exports,"unstable_cancelCallback",()=>h,e=>h=e),o(e.exports,"unstable_continueExecution",()=>m,e=>m=e),o(e.exports,"unstable_forceFrameRate",()=>g,e=>g=e),o(e.exports,"unstable_getCurrentPriorityLevel",()=>w,e=>w=e),o(e.exports,"unstable_getFirstCallbackNode",()=>v,e=>v=e),o(e.exports,"unstable_next",()=>y,e=>y=e),o(e.exports,"unstable_pauseExecution",()=>b,e=>b=e),o(e.exports,"unstable_requestPaint",()=>x,e=>x=e),o(e.exports,"unstable_runWithPriority",()=>S,e=>S=e),o(e.exports,"unstable_scheduleCallback",()=>k,e=>k=e),o(e.exports,"unstable_shouldYield",()=>_,e=>_=e),o(e.exports,"unstable_wrapCallback",()=>E,e=>E=e),"object"==typeof performance&&"function"==typeof performance.now){var s,l,c,u,d,f,p,h,m,g,w,v,y,b,x,S,k,_,E,C,T=performance;s=function(){return T.now()}}else{var N=Date,j=N.now();s=function(){return N.now()-j}}var I=[],O=[],P=1,R=null,A=3,M=!1,L=!1,D=!1,U="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,z="undefined"!=typeof setImmediate?setImmediate:null;function B(e){for(var t=r(O);null!==t;){if(null===t.callback)i(O);else if(t.startTime<=e)i(O),t.sortIndex=t.expirationTime,n(I,t);else break;t=r(O)}}function W(e){if(D=!1,B(e),!L){if(null!==r(I))L=!0,Z($);else{var t=r(O);null!==t&&ee(W,t.startTime-e)}}}function $(e,t){L=!1,D&&(D=!1,F(q),q=-1),M=!0;var n=A;try{for(B(t),R=r(I);null!==R&&(!(R.expirationTime>t)||e&&!Q());){var a=R.callback;if("function"==typeof a){R.callback=null,A=R.priorityLevel;var o=a(R.expirationTime<=t);t=s(),"function"==typeof o?R.callback=o:R===r(I)&&i(I),B(t)}else i(I);R=r(I)}if(null!==R)var l=!0;else{var c=r(O);null!==c&&ee(W,c.startTime-t),l=!1}return l}finally{R=null,A=n,M=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var V=!1,H=null,q=-1,K=5,G=-1;function Q(){return!(s()-G<K)}function Y(){if(null!==H){var e=s();G=e;var t=!0;try{t=H(!0,e)}finally{t?C():(V=!1,H=null)}}else V=!1}if("function"==typeof z)C=function(){z(Y)};else if("undefined"!=typeof MessageChannel){var J=new MessageChannel,X=J.port2;J.port1.onmessage=Y,C=function(){X.postMessage(null)}}else C=function(){U(Y,0)};function Z(e){H=e,V||(V=!0,C())}function ee(e,t){q=U(function(){e(s())},t)}l=5,c=1,u=4,d=3,f=null,p=2,h=function(e){e.callback=null},m=function(){L||M||(L=!0,Z($))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},w=function(){return A},v=function(){return r(I)},y=function(e){switch(A){case 1:case 2:case 3:var t=3;break;default:t=A}var n=A;A=t;try{return e()}finally{A=n}},b=function(){},x=function(){},S=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=A;A=e;try{return t()}finally{A=n}},k=function(e,t,i){var a=s();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=i+o,e={id:P++,callback:t,priorityLevel:e,startTime:i,expirationTime:o,sortIndex:-1},i>a?(e.sortIndex=i,n(O,e),null===r(I)&&e===r(O)&&(D?(F(q),q=-1):D=!0,ee(W,i-a))):(e.sortIndex=o,n(I,e),L||M||(L=!0,Z($))),e},_=Q,E=function(e){var t=A;return function(){var n=A;A=t;try{return e.apply(this,arguments)}finally{A=n}}}}),p("30Ie1",function(e,t){o(e.exports,"useSyncExternalStore",()=>n,e=>n=e);var n,r=f("acw62"),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,s=r.useEffect,l=r.useLayoutEffect,c=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return l(function(){i.value=n,i.getSnapshot=t,u(i)&&o({inst:i})},[e,n,t]),s(function(){return u(i)&&o({inst:i}),e(function(){u(i)&&o({inst:i})})},[e]),c(n),n};n=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d}),p("6VZtt",function(e,t){o(e.exports,"useSyncExternalStoreWithSelector",()=>n,e=>n=e);var n,r=f("acw62"),i=f("hfliI"),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useSyncExternalStore,l=r.useRef,c=r.useEffect,u=r.useMemo,d=r.useDebugValue;n=function(e,t,n,r,i){var o=l(null);if(null===o.current){var f={hasValue:!1,value:null};o.current=f}else f=o.current;var p=s(e,(o=u(function(){function e(e){if(!l){if(l=!0,o=e,e=r(e),void 0!==i&&f.hasValue){var t=f.value;if(i(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(o=e,s=n)}var o,s,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,i]))[0],o[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),d(p),p}}),p("hfliI",function(e,t){e.exports=f("30Ie1")}),p("dNL7g",function(e,t){o(e.exports,"AsyncMode",()=>n,e=>n=e),o(e.exports,"ConcurrentMode",()=>r,e=>r=e),o(e.exports,"ContextConsumer",()=>i,e=>i=e),o(e.exports,"ContextProvider",()=>a,e=>a=e),o(e.exports,"Element",()=>s,e=>s=e),o(e.exports,"ForwardRef",()=>l,e=>l=e),o(e.exports,"Fragment",()=>c,e=>c=e),o(e.exports,"Lazy",()=>u,e=>u=e),o(e.exports,"Memo",()=>d,e=>d=e),o(e.exports,"Portal",()=>f,e=>f=e),o(e.exports,"Profiler",()=>p,e=>p=e),o(e.exports,"StrictMode",()=>h,e=>h=e),o(e.exports,"Suspense",()=>m,e=>m=e),o(e.exports,"isAsyncMode",()=>g,e=>g=e),o(e.exports,"isConcurrentMode",()=>w,e=>w=e),o(e.exports,"isContextConsumer",()=>v,e=>v=e),o(e.exports,"isContextProvider",()=>y,e=>y=e),o(e.exports,"isElement",()=>b,e=>b=e),o(e.exports,"isForwardRef",()=>x,e=>x=e),o(e.exports,"isFragment",()=>S,e=>S=e),o(e.exports,"isLazy",()=>k,e=>k=e),o(e.exports,"isMemo",()=>_,e=>_=e),o(e.exports,"isPortal",()=>E,e=>E=e),o(e.exports,"isProfiler",()=>C,e=>C=e),o(e.exports,"isStrictMode",()=>T,e=>T=e),o(e.exports,"isSuspense",()=>N,e=>N=e),o(e.exports,"isValidElementType",()=>j,e=>j=e),o(e.exports,"typeOf",()=>I,e=>I=e);var n,r,i,a,s,l,c,u,d,f,p,h,m,g,w,v,y,b,x,S,k,_,E,C,T,N,j,I,O="function"==typeof Symbol&&Symbol.for,P=O?Symbol.for("react.element"):60103,R=O?Symbol.for("react.portal"):60106,A=O?Symbol.for("react.fragment"):60107,M=O?Symbol.for("react.strict_mode"):60108,L=O?Symbol.for("react.profiler"):60114,D=O?Symbol.for("react.provider"):60109,U=O?Symbol.for("react.context"):60110,F=O?Symbol.for("react.async_mode"):60111,z=O?Symbol.for("react.concurrent_mode"):60111,B=O?Symbol.for("react.forward_ref"):60112,W=O?Symbol.for("react.suspense"):60113,$=O?Symbol.for("react.suspense_list"):60120,V=O?Symbol.for("react.memo"):60115,H=O?Symbol.for("react.lazy"):60116,q=O?Symbol.for("react.block"):60121,K=O?Symbol.for("react.fundamental"):60117,G=O?Symbol.for("react.responder"):60118,Q=O?Symbol.for("react.scope"):60119;function Y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case P:switch(e=e.type){case F:case z:case A:case L:case M:case W:return e;default:switch(e=e&&e.$$typeof){case U:case B:case H:case V:case D:return e;default:return t}}case R:return t}}}function J(e){return Y(e)===z}n=F,r=z,i=U,a=D,s=P,l=B,c=A,u=H,d=V,f=R,p=L,h=M,m=W,g=function(e){return J(e)||Y(e)===F},w=J,v=function(e){return Y(e)===U},y=function(e){return Y(e)===D},b=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===P},x=function(e){return Y(e)===B},S=function(e){return Y(e)===A},k=function(e){return Y(e)===H},_=function(e){return Y(e)===V},E=function(e){return Y(e)===R},C=function(e){return Y(e)===L},T=function(e){return Y(e)===M},N=function(e){return Y(e)===W},j=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===z||e===L||e===M||e===W||e===$||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===V||e.$$typeof===D||e.$$typeof===U||e.$$typeof===B||e.$$typeof===K||e.$$typeof===G||e.$$typeof===Q||e.$$typeof===q)},I=Y}),p("9cCWX",function(e,t){o(e.exports,"ContextConsumer",()=>n,e=>n=e),o(e.exports,"ContextProvider",()=>r,e=>r=e),o(e.exports,"Element",()=>i,e=>i=e),o(e.exports,"ForwardRef",()=>a,e=>a=e),o(e.exports,"Fragment",()=>s,e=>s=e),o(e.exports,"Lazy",()=>l,e=>l=e),o(e.exports,"Memo",()=>c,e=>c=e),o(e.exports,"Portal",()=>u,e=>u=e),o(e.exports,"Profiler",()=>d,e=>d=e),o(e.exports,"StrictMode",()=>f,e=>f=e),o(e.exports,"Suspense",()=>p,e=>p=e),o(e.exports,"SuspenseList",()=>h,e=>h=e),o(e.exports,"isAsyncMode",()=>m,e=>m=e),o(e.exports,"isConcurrentMode",()=>g,e=>g=e),o(e.exports,"isContextConsumer",()=>w,e=>w=e),o(e.exports,"isContextProvider",()=>v,e=>v=e),o(e.exports,"isElement",()=>y,e=>y=e),o(e.exports,"isForwardRef",()=>b,e=>b=e),o(e.exports,"isFragment",()=>x,e=>x=e),o(e.exports,"isLazy",()=>S,e=>S=e),o(e.exports,"isMemo",()=>k,e=>k=e),o(e.exports,"isPortal",()=>_,e=>_=e),o(e.exports,"isProfiler",()=>E,e=>E=e),o(e.exports,"isStrictMode",()=>C,e=>C=e),o(e.exports,"isSuspense",()=>T,e=>T=e),o(e.exports,"isSuspenseList",()=>N,e=>N=e),o(e.exports,"isValidElementType",()=>j,e=>j=e),o(e.exports,"typeOf",()=>I,e=>I=e);var n,r,i,a,s,l,c,u,d,f,p,h,m,g,w,v,y,b,x,S,k,_,E,C,T,N,j,I,O,P=Symbol.for("react.element"),R=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),U=Symbol.for("react.context"),F=Symbol.for("react.server_context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen");function q(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case P:switch(e=e.type){case A:case L:case M:case B:case W:return e;default:switch(e=e&&e.$$typeof){case F:case U:case z:case V:case $:case D:return e;default:return t}}case R:return t}}}O=Symbol.for("react.module.reference"),n=U,r=D,i=P,a=z,s=A,l=V,c=$,u=R,d=L,f=M,p=B,h=W,m=function(){return!1},g=function(){return!1},w=function(e){return q(e)===U},v=function(e){return q(e)===D},y=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===P},b=function(e){return q(e)===z},x=function(e){return q(e)===A},S=function(e){return q(e)===V},k=function(e){return q(e)===$},_=function(e){return q(e)===R},E=function(e){return q(e)===L},C=function(e){return q(e)===M},T=function(e){return q(e)===B},N=function(e){return q(e)===W},j=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===L||e===M||e===B||e===W||e===H||"object"==typeof e&&null!==e&&(e.$$typeof===V||e.$$typeof===$||e.$$typeof===D||e.$$typeof===U||e.$$typeof===z||e.$$typeof===O||void 0!==e.getModuleId)},I=q}),p("3E8gM",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0,configurable:!0}),o(e.exports,"default",()=>u);var n=f("ayMG0"),r=f("acw62"),i=f("i6cHb"),a=f("gc0qX"),s=f("k3T0g"),l=f("2CwQF"),c=f("lzNIT"),u=()=>{let{show:e,setShow:t,crum:o}=(0,r.useContext)(s.default),[u,d]=(0,r.useState)("");return(// Filter tests based on search text
(0,r.useEffect)(()=>{let e=(0,l.AllTest).filter(e=>e.name.toLowerCase().includes(u.toLowerCase()));t(e)},[u,t]),/*#__PURE__*/(0,n.jsx)("div",{className:" container-fluid tw-bg-[#212A31] tw-mt-[74]",children:/*#__PURE__*/(0,n.jsxs)("div",{className:"row flex-xl-nowrap",children:[/*#__PURE__*/(0,n.jsxs)("div",{className:"col-12 col-md-2 tw-bg-[#F3F4F6] tw-p-2",children:[/*#__PURE__*/(0,n.jsx)("div",{className:"tw-flex tw-justify-center tw-items-center tw-w-full tw-p-2",children:/*#__PURE__*/(0,n.jsx)("input",{type:"search",className:"tw-w-full tw-p-2 tw-rounded-md tw-focus:outline-none form-control ds-input",value:u,onChange:e=>d(e.target.value),placeholder:"Search...."})}),/*#__PURE__*/(0,n.jsx)("div",{className:"border tw-mt-2 tw-mb-2"}),/*#__PURE__*/(0,n.jsx)(i.default,{})]}),/*#__PURE__*/(0,n.jsxs)("div",{className:"col-12 col-md-10 tw-p-2",children:[/*#__PURE__*/(0,n.jsxs)("div",{className:"tw-flex tw-justify-between tw-items-center tw-px-4 tw-mb-5",children:[/*#__PURE__*/(0,n.jsx)("h3",{className:"tw-text-white",children:o}),/*#__PURE__*/(0,n.jsxs)(c.Link,{to:"/customtest",className:"tw-no-underline tw-px-4 tw-py-2 tw-text-lg tw-bg-green-500 tw-text-white tw-rounded-md tw-shadow-md",children:["Custom Test \xa0 ",/*#__PURE__*/(0,n.jsx)("i",{className:"fa-solid fa-plus"})]})]}),/*#__PURE__*/(0,n.jsx)("div",{className:" tw-flex md:tw-justify-start tw-justify-center tw-flex-wrap",children:e.map(e=>/*#__PURE__*/(0,n.jsx)(a.default,{id:e.id,name:e.name,desc:e.desc,icon:e.icon},e.id))})]})]})}))}}),p("ayMG0",function(e,t){e.exports=f("1b2ls")}),p("i6cHb",function(e,t){o(e.exports,"default",()=>a);var n=f("ayMG0"),r=f("acw62"),i=f("k3T0g"),a=()=>{let{aptitude:e,Foundation:t,technical:a,show:o,setShow:s,Role:l,Coding:c,setCrum:u,ALLTEST:d,newTest:f}=(0,r.useContext)(i.default),[p,h]=(0,r.useState)({o1:!0,o2:!1,o3:!1,o4:!1,o5:!1});return/*#__PURE__*/(0,n.jsx)(n.Fragment,{children:/*#__PURE__*/(0,n.jsxs)("div",{className:"tw-w-full md:tw-w-68 tw-bg-gray-100 tw-rounded-md",children:[/*#__PURE__*/(0,n.jsx)("h4",{className:"m-2 tw-text-slate-600",children:"Test Type"}),/*#__PURE__*/(0,n.jsx)("br",{}),/*#__PURE__*/(0,n.jsx)("div",{className:"hover:tw-bg-green-500 tw-cursor-pointer",children:/*#__PURE__*/(0,n.jsxs)("p",{className:"hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2",onClick:function(e){s(d),u(e.target.innerText)},children:[/*#__PURE__*/(0,n.jsx)("i",{class:"fa-solid fa-children tw-text-green-300 tw-text-lg"}),"\xa0All Test"," "]})}),/*#__PURE__*/(0,n.jsx)("div",{className:"hover:tw-bg-green-500 tw-cursor-pointer",children:/*#__PURE__*/(0,n.jsxs)("p",{className:"hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2",onClick:function(t){s(e),u(t.target.innerText)},children:[/*#__PURE__*/(0,n.jsx)("i",{class:"fa-solid fa-puzzle-piece tw-text-green-300 tw-text-lg"})," ","\xa0Aptitude & Reasoning"]})}),/*#__PURE__*/(0,n.jsx)("div",{className:"hover:tw-bg-green-500 tw-cursor-pointer",children:/*#__PURE__*/(0,n.jsxs)("p",{className:"hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2",onClick:function(e){s(c),u(e.target.innerText)},children:[/*#__PURE__*/(0,n.jsx)("i",{class:"fa-solid fa-code tw-text-green-300 tw-text-lg"}),"\xa0Coding Programming"]})}),/*#__PURE__*/(0,n.jsx)("div",{className:"hover:tw-bg-green-500 tw-cursor-pointer",children:/*#__PURE__*/(0,n.jsxs)("p",{className:"hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2",onClick:function(e){s(a),u(e.target.innerText)},children:[/*#__PURE__*/(0,n.jsx)("i",{class:"fa-brands fa-windows tw-text-green-300 tw-text-lg"}),"\xa0Technical Assessment"]})}),/*#__PURE__*/(0,n.jsx)("div",{className:"hover:tw-bg-green-500 tw-cursor-pointer",children:/*#__PURE__*/(0,n.jsxs)("p",{className:"hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2",onClick:function(e){s(f),u(e.target.innerText)},children:[/*#__PURE__*/(0,n.jsx)("i",{class:"fa-brands fa-windows tw-text-green-300 tw-text-lg"}),"\xa0Your Tests"]})}),/*#__PURE__*/(0,n.jsx)("div",{className:"hover:tw-bg-green-500 tw-cursor-pointer",children:/*#__PURE__*/(0,n.jsxs)("p",{className:"hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2",onClick:function(e){s(t),u(e.target.innerText)},children:[/*#__PURE__*/(0,n.jsx)("i",{class:"fa-solid fa-children tw-text-green-300 tw-text-lg"}),"\xa0Foundation schools"," "]})}),/*#__PURE__*/(0,n.jsx)("div",{className:"hover:tw-bg-green-500 tw-cursor-pointer",children:/*#__PURE__*/(0,n.jsxs)("p",{className:"hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2",onClick:function(e){s(l),u(e.target.innerText)},children:[/*#__PURE__*/(0,n.jsx)("i",{class:"fa-solid fa-briefcase tw-text-green-300 tw-text-lg"}),"\xa0Domain Specific Roles"," "]})}),/*#__PURE__*/(0,n.jsx)("hr",{})]})})}}),p("k3T0g",function(e,t){o(e.exports,"default",()=>h);var n=f("acw62"),r=f("2CwQF");let i=(0,r.AllTest).filter(e=>"Aptitude & Reasoning"===e.part),a=(0,r.AllTest).filter(e=>"Coding Programming"===e.part),s=(0,r.AllTest).filter(e=>"Technical Assessment"===e.part),l=(0,r.AllTest).filter(e=>"Foundation schools"===e.part),c=(0,r.AllTest).filter(e=>"Domain Specific Roles"===e.part),u=(0,r.AllTest).filter(e=>"Your Tests"===e.part);var d=1;(0,r.AllTest).map(e=>Object.assign(e,{id:d++}));let p=/*#__PURE__*/(0,n.createContext)({ALLTEST:r.AllTest,aptitude:i,technical:s,Foundation:l,newTest:u,Role:c,Coding:a,breadcrum:"All Tests",title:"bdsjgcjsg",duration:" ",instruction:" "});var h=p}),p("2CwQF",function(e,t){o(e.exports,"AllTest",()=>n);let n=[{name:"Time & Work",desc:"Time and Work is one of the most common quantitative aptitude topics which is asked in the Government exams as well as in hiring procesess.",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Number System",desc:"A number system is a way of representing and expressing numerical quantities.It provides a framework for performing mathematical operations",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"HCF & LCM",desc:"Highest Common Factor (HCF) is defined as the Highest Common Factor found in two or more numbers.Least Common Multiple (LCM)",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"A.P",desc:"Arithmetic progression, or arithmetic sequence, is a numerical series in which the difference between consecutive terms is constant.",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Ages",desc:"Ages is defined as the length of time that an individual has existed. Age is expressed in hours, months, years, decades, etc. ",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Percentage",desc:"The term 'percent' or '%' means 'out of a hundred'. In mathematics, Percentage are used like fractions and decimals.....",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Coordinate Geometry",desc:"Coordinate geometry is a field of mathematics that assists in portraying geometric forms on a two-dimensional plane........",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",time:"30 min",level:"Intermediate"},{name:"Compound Interest",desc:"Compound interest (also known as compounding interest) is interest calculated on a loan or deposit depending upon......",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Profit & Loss",desc:"The Profit is the amount gained by selling an item at a price greater than its cost price. In contrast, the loss is the amount lost by selling an item.",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Order & Ranking ",desc:"Order and ranking refer to the arrangement or placement of items, entities, or individuals based on a specific criterion or criteria.",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Number& Series",desc:"Number series refer to a sequence of numbers that follow a specific pattern, rule, or relationship. These series can involve arithmetic.....",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Series Completition",desc:"Series completion refers to the process of identifying or predicting the next item or element in a given sequence or pattern.",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Coding Decoding",desc:"Coding and decoding involve the translation of information from one form to another using specific rules. In coding, information is encoded .......",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Blood Relation",desc:"Blood relation tests involve analyzing and determining the familial relationships between individuals based on their biological connections",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Seating Arrangement",desc:"Seating arrangement refers to the organization or placement of individuals in a specific order or configuration,",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Syllogism",desc:"Syllogism is a verbal reasoning method that involves drawing conclusions from two propositions, known as premises......",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",time:"30 min",level:"Intermediate"},{name:"Venn Diagrams",desc:"Venn diagrams are graphical representations that depict the relationships and overlaps between different sets or groups of objects........",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Data Sufficiency",desc:"Data sufficiency is a problem-solving approach that assesses whether the given information is adequate to answer a specific question .......",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Cube and Cuboid",desc:"A cube is a solid object with six equal square faces, where all edges and angles are of equal length. A cuboid, also known as a rectangular prism....",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"Pattern completion",desc:"Pattern completion refers to the ability to identify missing or incomplete parts of a pattern or sequence and accurately fill in the gaps.....",icon:"fa-solid fa-puzzle-piece tw-text-white tw-text-4xl m-auto",part:"Aptitude & Reasoning",hire:"Any role in which numerical aptitude is important, especially if it involves dealing with financials (budgets, forecasts, business cases, etc.) or interpreting and developing (number-heavy) spreadsheets.",summary:"This numerical reasoning test evaluates candidates’ general aptitude with numbers and their skill in interpreting them for a wide range of applications. This test will help you identify candidates with strong numerical skills.",time:"30 min",level:"Intermediate"},{name:"DBMS",desc:"In these online test on Database Management System, you will be presented with Multiple Choice Questions (MCQs) which will test your skills in Database ...",icon:"fa-solid fa-database tw-text-white tw-text-4xl m-auto",part:"Technical Assessment",time:"30 min",level:"Intermediate"},{name:"Operating System",desc:"Take this Online Operating Systems Concepts Test test and find out how well you score before you appear for your upcoming interviews......................",icon:"fa-brands fa-windows tw-text-white tw-text-4xl m-auto",part:"Technical Assessment",time:"30 min",level:"Intermediate"},{name:"Compute Network",desc:"In these online test on Computer Networks, you will be presented with Multiple Choice Questions (MCQs) which will test your skills in Computer Networks ....",icon:"fa-solid fa-network-wired tw-text-white tw-text-4xl m-auto",part:"Technical Assessment",time:"30 min",level:"Intermediate"},{name:"SQL",desc:"This SQL Online Test simulates a real world online  exams. You will be presented Multiple Choice Questions (MCQs) based on SQL query ........................",icon:"fa-solid fa-s tw-text-white tw-text-4xl m-auto",part:"Technical Assessment",time:"30 min",level:"Intermediate"},{name:"System Design",desc:"Assess your knowledge of system design through this Skill Assessment. It will help you identify gaps in your understanding of major concepts in distributed ...",icon:"fa-solid fa-computer tw-text-white tw-text-4xl m-auto",part:"Technical Assessment",time:"30 min",level:"Intermediate"},{name:"COA",desc:"This online test section contains the next top best multiple-choice type questions answers (MCQs) based on Computer Organization and Architecture.......",icon:"fa-solid fa-memory tw-text-white tw-text-4xl m-auto",part:"Technical Assessment",time:"30 min",level:"Intermediate"},{name:"Data Structure",desc:"This online test section contains the next top best multiple-choice type questions answers (MCQs) based on Data Structure and Algorithms related to Recursion",icon:"fa-solid fa-tree tw-text-white tw-text-4xl m-auto",part:"Technical Assessment",time:"30 min",level:"Intermediate"},{name:"DAA",desc:"These Design and Analysis of Algorithms MCQ with Answers are designed to test your knowledge and understanding of algorithm design and analysis ...",icon:"fa-solid fa-clock tw-text-white tw-text-4xl m-auto",part:"Technical Assessment",time:"30 min",level:"Intermediate"},{name:"C++",desc:"The C++ online test assesses knowledge of programming in the C++ language and commonly used parts of the C++ Standard Library. This test requires solving live ...",icon:"fa-solid fa-c tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"java",desc:"This Java Online Test simulates a real online certification exams. You will be presented Multiple Choice Questions (MCQs) based on Core Java Concepts, ...",icon:"fa-brands fa-java tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"Javascript",desc:"This Javascript Online Test simulates a real online certification exams. You will be presented Multiple Choice Questions (MCQs) based on Javascript ...",icon:"fa-brands fa-js tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"Python",desc:"This Python Online Test simulates a real online certification exams. You will be presented Multiple Choice Questions (MCQs) based on Python Concepts, where you ...",icon:"fa-brands fa-python tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"C#",desc:"This C# Online Test simulates a real online certification exams. You will be presented Multiple Choice Questions (MCQs) based on C# Concepts, where you will ...",icon:"fa-solid fa-c tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"HTML",desc:"The HTML online test assesses knowledge of HTML through a series of live coding questions that test the ability to implement and style a user .........",icon:"fa-brands fa-html5 tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"CSS3",desc:"The css online test assesses knowledge of css through a series of live coding questions that test the ability to implement and style a user .........",icon:"fa-brands fa-css3 tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"React",desc:"ReactJS Online Test is an assessment or evaluation to gauge a developer's proficiency in using the React JavaScript library to build web ...........",icon:"fa-brands fa-react tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"Array in C++",desc:"The C++ online test assesses knowledge of programming in the C++ language and commonly used parts of the C++ Standard Library. So, enhance your skills now!",icon:"fa-solid fa-a tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"OOPS in C++",desc:"C++ Programming questions and answers section on OOPS Concepts for placement interviews and competitive exams: Fully solved C++ Programming problems with ..",icon:"fa-solid fa-o tw-text-white tw-text-4xl m-auto",part:"Coding Programming",time:"30 min",level:"Intermediate"},{name:"Maths For class 8",desc:"Students can practice all topics and chapters with free online mock tests or quizzes for Class 8 Maths. Practice these multiple-choice questions made by our ...",icon:"fa-solid fa-calculator tw-text-white tw-text-4xl m-auto",part:"Foundation schools",time:"30 min",level:"Intermediate"},{name:"Science For class 8",desc:"Students can practice all topics and chapters with free online mock tests or quizzes for Class 8 science. Practice these multiple-choice questions made by our ...",icon:"fa-solid fa-flask-vial tw-text-white tw-text-4xl m-auto",part:"Foundation schools",time:"30 min",level:"Intermediate"},{name:"S.S.T class 8",desc:"Students can practice all topics and chapters with free online mock tests or quizzes for Class 8 socials science. Practice these multiple-choice questions made by our ...",icon:"fa-solid fa-person tw-text-white tw-text-4xl m-auto",part:"Foundation schools",time:"30 min",level:"Intermediate"},{name:"Web Development",desc:"The Web Developer online test assesses knowledge of front-end web development skills (HTML, CSS, and JavaScript) through a series of live coding questions ...",icon:"fa-brands fa-node tw-text-white tw-text-4xl m-auto",part:"Domain Specific Roles",time:"30 min",level:"Intermediate"},{name:"Data Analytics",desc:"The Data Science online test assesses the ability to use tools and techniques to analyze large sets of data, extract information, suggest conclusions, ...",icon:"fa-solid fa-d tw-text-white tw-text-4xl m-auto",part:"Domain Specific Roles",time:"30 min",level:"Intermediate"},{name:"Human Resource HR",desc:"Human Resource Management mock test with old question most imp question 5 year old question. Question multiple choice questions answers ...",icon:"fa-solid fa-h tw-text-white tw-text-4xl m-auto",part:"Domain Specific Roles",time:"30 min",level:"Intermediate"},{name:"Database Adminstration(DBA)",desc:"The purpose of this online test is to help you evaluate your SQL server DBA knowledge yourself. These Multiple Choice Questions (MCQs) on SQL ...        ",icon:"fa-solid fa-b tw-text-white tw-text-4xl m-auto",part:"Domain Specific Roles",time:"30 min",level:"Intermediate"}]}),p("gc0qX",function(e,t){o(e.exports,"default",()=>i);var n=f("ayMG0");f("acw62");var r=f("lzNIT"),i=({name:e,desc:t,icon:i,id:a})=>/*#__PURE__*/(0,n.jsxs)("div",{className:"p-3 tw-group tw-m-4 tw-w-[245] border border-success tw-inline-block tw-text-white tw-rounded-lg hover:tw-shadow-md hover:tw-text-black hover:tw-bg-green-500 group",children:[/*#__PURE__*/(0,n.jsx)("div",{className:" tw-flex tw-justify-center tw-items-center rounded-circle border border-success tw-w-16 tw-h-16 tw-bg-green-500 group-[hover]:tw-bg-white",children:/*#__PURE__*/(0,n.jsx)("i",{className:`${i}`})}),/*#__PURE__*/(0,n.jsx)("br",{}),/*#__PURE__*/(0,n.jsx)("h4",{className:"text-start",children:e}),/*#__PURE__*/(0,n.jsx)("p",{className:"text-start",children:t}),/*#__PURE__*/(0,n.jsx)(r.Link,{to:`/details/${a}`,className:" tw-no-underline tw-flex tw-justify-center tw-items-center",children:/*#__PURE__*/(0,n.jsx)("button",{className:"tw-rounded-md tw-px-8 tw-py-2 tw-shadow-md tw-border-0 tw-bg-green-500 group-hover:tw-text-green-600 group-hover:tw-bg-white",children:"Start test"})})]})}),p("lzNIT",function(e,t){o(e.exports,"createBrowserRouter",()=>h),o(e.exports,"RouterProvider",()=>y),o(e.exports,"Link",()=>k),o(e.exports,"useSearchParams",()=>_),o(e.exports,"useLocation",()=>f("aphAM").useLocation),o(e.exports,"useNavigate",()=>f("aphAM").useNavigate);/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var n,r,i,a,s=f("acw62"),l=f("2vsP7"),c=f("aphAM"),l=f("2vsP7");function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */function d(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}let p=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function h(e,t){var n;let r;return(0,l.createRouter)({basename:null==t?void 0:t.basename,future:u({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,l.createBrowserHistory)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||((r=null==(n=window)?void 0:n.__staticRouterHydrationData)&&r.errors&&(r=u({},r,{errors:function(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)// Hey you!  If you change this, please change the corresponding logic in
// serializeErrors in react-router-dom/server.tsx :)
if(r&&"RouteErrorResponse"===r.__type)n[e]=new l.UNSAFE_ErrorResponseImpl(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){// Attempt to reconstruct the right type of Error (i.e., ReferenceError)
if(r.__subType){let t=window[r.__subType];if("function"==typeof t)try{// @ts-expect-error
let i=new t(r.message);// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
i.stack="",n[e]=i}catch(e){// no-op - fall through and create a normal Error
}}if(null==n[e]){let t=Error(r.message);// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
t.stack="",n[e]=t}}else n[e]=r;return n}(r.errors)})),r),routes:e,mapRouteProperties:c.UNSAFE_mapRouteProperties,window:null==t?void 0:t.window}).initialize()}let m=/*#__PURE__*/s.createContext({isTransitioning:!1}),g=/*#__PURE__*/s.createContext(new Map),w=s.startTransition;class v{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}})}}/**
 * Given a Remix Router instance, render the appropriate UI
 */function y(e){let{fallbackElement:t,router:n,future:r}=e,[i,a]=s.useState(n.state),[o,l]=s.useState(),[u,d]=s.useState({isTransitioning:!1}),[f,p]=s.useState(),[h,y]=s.useState(),[x,S]=s.useState(),k=s.useRef(new Map),{v7_startTransition:_}=r||{},E=s.useCallback(e=>{_&&w?w(e):e()},[_]),C=s.useCallback((e,t)=>{let{deletedFetchers:r,unstable_viewTransitionOpts:i}=t;r.forEach(e=>k.current.delete(e)),e.fetchers.forEach((e,t)=>{void 0!==e.data&&k.current.set(t,e.data)}),i&&null!=n.window&&"function"==typeof n.window.document.startViewTransition?h&&f?(// Interrupting an in-progress transition, cancel and let everything flush
// out, and then kick off a new transition from the interruption state
f.resolve(),h.skipTransition(),S({state:e,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):(// Completed navigation update with opted-in view transitions, let 'er rip
l(e),d({isTransitioning:!0,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):E(()=>a(e))},[n.window,h,f,k,E]);// Need to use a layout effect here so we are subscribed early enough to
// pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
s.useLayoutEffect(()=>n.subscribe(C),[n,C]),// When we start a view transition, create a Deferred we can use for the
// eventual "completed" render
s.useEffect(()=>{u.isTransitioning&&p(new v)},[u.isTransitioning]),// Once the deferred is created, kick off startViewTransition() to update the
// DOM and then wait on the Deferred to resolve (indicating the DOM update has
// happened)
s.useEffect(()=>{if(f&&o&&n.window){let e=f.promise,t=n.window.document.startViewTransition(async()=>{E(()=>a(o)),await e});t.finished.finally(()=>{p(void 0),y(void 0),l(void 0),d({isTransitioning:!1})}),y(t)}},[E,o,f,n.window]),// When the new location finally renders and is committed to the DOM, this
// effect will run to resolve the transition
s.useEffect(()=>{f&&o&&i.location.key===o.location.key&&f.resolve()},[f,h,i.location,o]),// If we get interrupted with a new navigation during a transition, we skip
// the active transition, let it cleanup, then kick it off again here
s.useEffect(()=>{!u.isTransitioning&&x&&(l(x.state),d({isTransitioning:!0,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),S(void 0))},[u.isTransitioning,x]);let T=s.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})}),[n]),N=n.basename||"/",j=s.useMemo(()=>({router:n,navigator:T,static:!1,basename:N}),[n,T,N]);// The fragment and {null} here are important!  We need them to keep React 18's
// useId happy when we are server-rendering since we may have a <script> here
// containing the hydrated server-side staticContext (from StaticRouterProvider).
// useId relies on the component tree structure to generate deterministic id's
// so we need to ensure it remains the same on the client even though
// we don't need the <script> tag
return /*#__PURE__*/s.createElement(s.Fragment,null,/*#__PURE__*/s.createElement(c.UNSAFE_DataRouterContext.Provider,{value:j},/*#__PURE__*/s.createElement(c.UNSAFE_DataRouterStateContext.Provider,{value:i},/*#__PURE__*/s.createElement(g.Provider,{value:k.current},/*#__PURE__*/s.createElement(m.Provider,{value:u},/*#__PURE__*/s.createElement(c.Router,{basename:N,location:i.location,navigationType:i.historyAction,navigator:T},i.initialized?/*#__PURE__*/s.createElement(b,{routes:n.routes,state:i}):t))))),null)}function b(e){let{routes:t,state:n}=e;return(0,c.UNSAFE_useRoutesImpl)(t,void 0,n)}let x="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k=/*#__PURE__*/s.forwardRef(function(e,t){let n,{onClick:r,relative:i,reloadDocument:a,replace:o,state:d,target:f,to:h,preventScrollReset:m,unstable_viewTransition:g}=e,w=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,p),{basename:v}=s.useContext(c.UNSAFE_NavigationContext),y=!1;if("string"==typeof h&&S.test(h)&&(// Render the absolute href server- and client-side
n=h,x))try{let e=new URL(window.location.href),t=new URL(h.startsWith("//")?e.protocol+h:h),n=(0,l.stripBasename)(t.pathname,v);t.origin===e.origin&&null!=n?h=n+t.search+t.hash:y=!0}catch(e){}// Rendered into <a href> for relative URLs
let b=(0,c.useHref)(h,{relative:i}),k=// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */function(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:u}=void 0===t?{}:t,d=(0,c.useNavigate)(),f=(0,c.useLocation)(),p=(0,c.useResolvedPath)(e,{relative:o});return s.useCallback(t=>{0!==t.button||// Ignore everything but left clicks
n&&"_self"!==n||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),d(e,{replace:void 0!==r?r:(0,l.createPath)(f)===(0,l.createPath)(p),state:i,preventScrollReset:a,relative:o,unstable_viewTransition:u}))},[f,d,p,r,i,n,e,a,o,u])}(h,{replace:o,state:d,target:f,preventScrollReset:m,relative:i,unstable_viewTransition:g});return /*#__PURE__*/s.createElement("a",u({},w,{href:n||b,onClick:y||a?r:function(e){r&&r(e),e.defaultPrevented||k(e)},ref:t,target:f}))});/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */function _(e){let t=s.useRef(d(e)),n=s.useRef(!1),r=(0,c.useLocation)(),i=s.useMemo(()=>{var e,i;let a;return e=r.search,i=n.current?null:t.current,a=d(e),i&&// `defaultSearchParams.keys()` to work-around a bug in Firefox related to
// web extensions. Relevant Bugzilla tickets:
// https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
// https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
i.forEach((e,t)=>{a.has(t)||i.getAll(t).forEach(e=>{a.append(t,e)})}),a},[r.search]),a=(0,c.useNavigate)(),o=s.useCallback((e,t)=>{let r=d("function"==typeof e?e(i):e);n.current=!0,a("?"+r,t)},[a,i]);return[i,o]}(n=i||(i={})).UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState",(r=a||(a={})).UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"}),p("2vsP7",function(e,t){var n,r,i,a;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}o(e.exports,"Action",()=>n),o(e.exports,"createMemoryHistory",()=>c),o(e.exports,"createPath",()=>g),o(e.exports,"parsePath",()=>w),o(e.exports,"createBrowserHistory",()=>u),o(e.exports,"createHashHistory",()=>d),o(e.exports,"UNSAFE_invariant",()=>f),o(e.exports,"matchRoutes",()=>x),o(e.exports,"stripBasename",()=>C),o(e.exports,"UNSAFE_convertRouteMatchToUiMatch",()=>S),o(e.exports,"joinPaths",()=>I),o(e.exports,"matchPath",()=>E),o(e.exports,"UNSAFE_getPathContributingMatches",()=>N),o(e.exports,"resolveTo",()=>j),o(e.exports,"AbortedDeferredError",()=>A),o(e.exports,"UNSAFE_ErrorResponseImpl",()=>M),o(e.exports,"isRouteErrorResponse",()=>L),o(e.exports,"IDLE_FETCHER",()=>V),o(e.exports,"IDLE_BLOCKER",()=>H),o(e.exports,"createRouter",()=>Q),/**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */(i=n||(n={})).Pop="POP",/**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */i.Push="PUSH",/**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */i.Replace="REPLACE";let l="popstate";/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */function c(e){let t;void 0===e&&(e={});let{initialEntries:r=["/"],initialIndex:i,v5Compat:a=!1}=e;t=r.map((e,t)=>u(e,"string"==typeof e?null:e.state,0===t?"default":void 0));let o=c(null==i?t.length-1:i),s=n.Pop,l=null;function c(e){return Math.min(Math.max(e,0),t.length-1)}function u(e,n,r){void 0===n&&(n=null);let i=m(t?t[o].pathname:"/",e,n,r);return p("/"===i.pathname.charAt(0),"relative pathnames are not supported in memory history: "+JSON.stringify(e)),i}function d(e){return"string"==typeof e?e:g(e)}return{get index(){return o},get action(){return s},get location(){return t[o]},createHref:d,createURL:e=>new URL(d(e),"http://localhost"),encodeLocation(e){let t="string"==typeof e?w(e):e;return{pathname:t.pathname||"",search:t.search||"",hash:t.hash||""}},push(e,r){s=n.Push;let i=u(e,r);o+=1,t.splice(o,t.length,i),a&&l&&l({action:s,location:i,delta:1})},replace(e,r){s=n.Replace;let i=u(e,r);t[o]=i,a&&l&&l({action:s,location:i,delta:0})},go(e){s=n.Pop;let r=c(o+e),i=t[r];o=r,l&&l({action:s,location:i,delta:e})},listen:e=>(l=e,()=>{l=null})}}/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */function u(e){return void 0===e&&(e={}),v(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return m("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:g(t)},null,e)}/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */function d(e){return void 0===e&&(e={}),v(function(e,t){let{pathname:n="/",search:r="",hash:i=""}=w(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),m("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:g(t))},function(e,t){p("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")},e)}function f(e,t){if(!1===e||null==e)throw Error(t)}function p(e,t){if(!e){// eslint-disable-next-line no-console
"undefined"!=typeof console&&console.warn(t);try{// Welcome to debugging history!
//
// This error is thrown as a convenience, so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw Error(t);// eslint-disable-next-line no-empty
}catch(e){}}}/**
 * For browser-based histories, we combine the state and key into an object
 */function h(e,t){return{usr:e.state,key:e.key,idx:t}}/**
 * Creates a Location object with a unique key from the given Path
 */function m(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?w(t):t,{state:n,// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */function g(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */function w(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v(e,t,r,i){void 0===i&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,c=a.history,u=n.Pop,d=null,p=w();function w(){return(c.state||{idx:null}).idx}function v(){u=n.Pop;let e=w(),t=null==e?null:e-p;p=e,d&&d({action:u,location:b.location,delta:t})}function y(e){// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:g(e);return f(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==p&&(p=0,c.replaceState(s({},c.state,{idx:p}),""));let b={get action(){return u},get location(){return e(a,c)},listen(e){if(d)throw Error("A history only accepts one active listener");return a.addEventListener(l,v),d=e,()=>{a.removeEventListener(l,v),d=null}},createHref:e=>t(a,e),createURL:y,encodeLocation(e){// Encode a Location the same way window.location would
let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){u=n.Push;let i=m(b.location,e,t);r&&r(i,e);let s=h(i,p=w()+1),l=b.createHref(i);// try...catch because iOS limits us to 100 pushState calls :/
try{c.pushState(s,"",l)}catch(e){// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
a.location.assign(l)}o&&d&&d({action:u,location:b.location,delta:1})},replace:function(e,t){u=n.Replace;let i=m(b.location,e,t);r&&r(i,e);let a=h(i,p=w()),s=b.createHref(i);c.replaceState(a,"",s),o&&d&&d({action:u,location:b.location,delta:0})},go:e=>c.go(e)};return b}(a=r||(r={})).data="data",a.deferred="deferred",a.redirect="redirect",a.error="error";let y=new Set(["lazy","caseSensitive","path","id","index","children"]);// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function b(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map((e,i)=>{let a=[...n,i],o="string"==typeof e.id?e.id:a.join("-");if(f(!0!==e.index||!e.children,"Cannot specify children on an index route"),f(!r[o],'Found a route id collision on id "'+o+"\".  Route id's must be globally unique within Data Router usages"),!0===e.index){let n=s({},e,t(e),{id:o});return r[o]=n,n}{let n=s({},e,t(e),{id:o,children:void 0});return r[o]=n,e.children&&(n.children=b(e.children,t,a,r)),n}})}/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */function x(e,t,n){void 0===n&&(n="/");let r=C(("string"==typeof t?w(t):t).pathname||"/",n);if(null==r)return null;let i=function e(t,n,r,i){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i="");let a=(t,a,o)=>{var s;let l,c,u={relativePath:void 0===o?t.path||"":o,caseSensitive:!0===t.caseSensitive,childrenIndex:a,route:t};u.relativePath.startsWith("/")&&(f(u.relativePath.startsWith(i),'Absolute route path "'+u.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),u.relativePath=u.relativePath.slice(i.length));let d=I([i,u.relativePath]),p=r.concat(u);t.children&&t.children.length>0&&(f(// @ts-expect-error
!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+d+'".'),e(t.children,n,p,d)),(null!=t.path||t.index)&&n.push({path:d,score:(s=t.index,c=(l=d.split("/")).length,l.some(_)&&(c+=-2),s&&(c+=2),l.filter(e=>!_(e)).reduce((e,t)=>e+(k.test(t)?3:""===t?1:10),c)),routesMeta:p})};return t.forEach((e,t)=>{var n;// coarse-grain check for optional params
if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of /**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...i]=n,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===i.length)// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return a?[o,""]:[o];let s=e(i.join("/")),l=[];// for absolute paths, ensure `/` instead of empty segment
return(// All child paths with the prefix.  Do this for all children before the
// optional version for all children, so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explode _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
l.push(...s.map(e=>""===e?o:[o,e].join("/"))),a&&l.push(...s),l.map(e=>t.startsWith("/")&&""===e?"/":e))}(e.path))a(e,t,n);else a(e,t)}),n}(e);(function(e){e.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score// Higher score first
:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
n[n.length-1]-r[r.length-1]:// so they sort equally.
0)})})(i);let a=null;for(let e=0;null==a&&e<i.length;++e)a=function(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let e=0;e<n.length;++e){let o=n[e],s=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",c=E({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},l);if(!c)return null;Object.assign(r,c.params);let u=o.route;a.push({// TODO: Can this as be avoided?
params:r,pathname:I([i,c.pathname]),pathnameBase:O(I([i,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(i=I([i,c.pathnameBase]))}return a}(i[e],// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
function(e){try{return decodeURI(e)}catch(t){return p(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(r));return a}function S(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}let k=/^:\w+$/,_=e=>"*"===e;/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */function E(e,t){var n,r,i;let a,o;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[s,l]=(n=e.path,r=e.caseSensitive,i=e.end,void 0===r&&(r=!1),void 0===i&&(i=!0),p("*"===n||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),a=[],o="^"+n.replace(/\/*\*?$/,"")// Ignore trailing / and /*, we'll handle it below
.replace(/^\/*/,"/")// Make sure it has a leading /
.replace(/[\\.*+^${}|()[\]]/g,"\\$&")// Escape special regex chars
.replace(/\/:(\w+)(\?)?/g,(e,t,n)=>(a.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")),n.endsWith("*")?(a.push({paramName:"*"}),o+="*"===n||"/*"===n?"(.*)$"// Already matched the initial /, just match the rest
:"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":""!==n&&"/"!==n&&// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
(o+="(?:(?=\\/|$))"),[new RegExp(o,r?void 0:"i"),a]),c=t.match(s);if(!c)return null;let u=c[0],d=u.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:l.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===r){let e=f[n]||"";d=u.slice(0,u.length-e.length).replace(/(.)\/+$/,"$1")}let a=f[n];return i&&!a?e[r]=void 0:e[r]=function(e,t){try{return decodeURIComponent(e)}catch(n){return p(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(a||"",r),e},{}),pathname:u,pathnameBase:d,pattern:e}}/**
 * @private
 */function C(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function T(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t)+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */function N(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}/**
 * @private
 */function j(e,t,n,r){let i,a;void 0===r&&(r=!1),"string"==typeof e?i=w(e):(f(!(i=s({},e)).pathname||!i.pathname.includes("?"),T("?","pathname","search",i)),f(!i.pathname||!i.pathname.includes("#"),T("#","pathname","hash",i)),f(!i.search||!i.search.includes("#"),T("#","search","hash",i)));let o=""===e||""===i.pathname,l=o?"/":i.pathname;// Routing is relative to the current pathname if explicitly requested.
//
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(r||null==l)a=n;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");// Each leading .. segment means "go up one route" instead of "go up one
// URL segment".  This is a key difference from how <a href> works and a
// major reason we call this a "to" value instead of a "href".
for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}// If there are more ".." segments than parent routes, resolve relative to
// the root / URL.
a=e>=0?t[e]:"/"}let c=/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */function(e,t){let n;void 0===t&&(t="/");let{pathname:r,search:i="",hash:a=""}="string"==typeof e?w(e):e;return{pathname:r?r.startsWith("/")?r:(n=t.replace(/\/+$/,"").split("/"),r.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"):t,search:P(i),hash:R(a)}}(i,a),u=l&&"/"!==l&&l.endsWith("/"),d=(o||"."===l)&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}/**
 * @private
 */let I=e=>e.join("/").replace(/\/\/+/g,"/"),O=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),P=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",R=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class A extends Error{}/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */class M{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */function L(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}let D=["post","put","patch","delete"],U=new Set(D),F=["get",...D],z=new Set(F),B=new Set([301,302,303,307,308]),W=new Set([307,308]),$={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},V={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},H={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},q=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),G="remix-router-transitions";//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */function Q(e){let t,i,a,o;let l=e.window?e.window:"undefined"!=typeof window?window:void 0,c=void 0!==l&&void 0!==l.document&&void 0!==l.document.createElement,u=!c;if(f(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){// If they are still using the deprecated version, wrap it with the new API
let n=e.detectErrorBoundary;t=e=>({hasErrorBoundary:n(e)})}else t=K;// Routes keyed by ID
let d={},h=b(e.routes,t,void 0,d),g=e.basename||"/",w=s({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),v=null,y=new Set,k=null,_=null,E=null,T=null!=e.hydrationData,N=x(h,e.history.location,g),j=null;if(null==N){// If we do not match a user-provided-route, fall back to the root
// to allow the error boundary to take over
let t=eu(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=ec(h);N=n,j={[r.id]:t}}let I=// functions around still then we'll need to run them in initialize()
!N.some(e=>e.route.lazy)&&// And we have to either have no loaders or have been provided hydrationData
(!N.some(e=>e.route.loader)||null!=e.hydrationData),O={historyAction:e.history.action,location:e.history.location,matches:N,initialized:I,navigation:$,// Don't restore on initial updateState() if we were SSR'd
restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||j,fetchers:new Map,blockers:new Map},P=n.Pop,R=!1,A=!1,M=new Map,L=null,D=!1,U=!1,F=[],z=[],B=new Map,Q=0,Z=-1,ee=new Map,et=new Set,ei=new Map,ea=new Map,ef=new Set,ey=new Map,eE=new Map,eC=!1;// Update our state and notify the calling context of the change
function eT(e,t){O=s({},O,e);// Prep fetcher cleanup so we can tell the UI which fetcher data entries
// can be removed
let n=[],r=[];w.v7_fetcherPersist&&O.fetchers.forEach((e,t)=>{"idle"===e.state&&(ef.has(t)?r.push(t):// revalidations and such
n.push(t))}),y.forEach(e=>e(O,{deletedFetchers:r,unstable_viewTransitionOpts:t})),w.v7_fetcherPersist&&(n.forEach(e=>O.fetchers.delete(e)),r.forEach(e=>ez(e)))}// Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
// and setting state.[historyAction/location/matches] to the new route.
// - Location is a required param
// - Navigation will always be set to IDLE_NAVIGATION
// - Can pass any other state in newState
function eN(t,r){var a,o;let l,c;// Deduce if we're in a loading/actionReload state:
// - We have committed actionData in the store
// - The current navigation was a mutation submission
// - We're past the submitting state and into the loading state
// - The location being loaded is not the result of a redirect
let u=null!=O.actionData&&null!=O.navigation.formMethod&&eg(O.navigation.formMethod)&&"loading"===O.navigation.state&&(null==(a=t.state)?void 0:a._isRedirect)!==!0;l=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:u?O.actionData:null;// Always preserve any existing loaderData from re-used routes
let d=r.loaderData?es(O.loaderData,r.loaderData,r.matches||[],r.errors):O.loaderData,f=O.blockers;f.size>0&&(f=new Map(f)).forEach((e,t)=>f.set(t,H));// Always respect the user flag.  Otherwise don't reset on mutation
// submission navigations unless they redirect
let p=!0===R||null!=O.navigation.formMethod&&eg(O.navigation.formMethod)&&(null==(o=t.state)?void 0:o._isRedirect)!==!0;// On POP, enable transitions if they were enabled on the original navigation
if(i&&(h=i,i=void 0),D||P===n.Pop||(P===n.Push?e.history.push(t,t.state):P===n.Replace&&e.history.replace(t,t.state)),P===n.Pop){// Forward takes precedence so they behave like the original navigation
let e=M.get(O.location.pathname);e&&e.has(t.pathname)?c={currentLocation:O.location,nextLocation:t}:M.has(t.pathname)&&// the new location and enable if that location previously enabled
(c={currentLocation:t,nextLocation:O.location})}else if(A){// Store the applied transition on PUSH/REPLACE
let e=M.get(O.location.pathname);e?e.add(t.pathname):(e=new Set([t.pathname]),M.set(O.location.pathname,e)),c={currentLocation:O.location,nextLocation:t}}eT(s({},r,{actionData:l,loaderData:d,historyAction:P,location:t,initialized:!0,navigation:$,revalidation:"idle",restoreScrollPosition:eY(t,r.matches||O.matches),preventScrollReset:p,blockers:f}),c),// Reset stateful navigation vars
P=n.Pop,R=!1,A=!1,D=!1,U=!1,F=[],z=[]}// Trigger a navigation event, which can either be a numerical POP or a PUSH
// replace with an optional submission
async function ej(t,r){if("number"==typeof t){e.history.go(t);return}let i=Y(O.location,O.matches,g,w.v7_prependBasename,t,null==r?void 0:r.fromRouteId,null==r?void 0:r.relative),{path:a,submission:o,error:l}=J(w.v7_normalizeFormMethod,!1,i,r),c=O.location,u=m(O.location,a,r&&r.state);// When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
// URL from window.location, so we need to encode it here so the behavior
// remains the same as POP and non-data-router usages.  new URL() does all
// the same encoding we'd get from a history.pushState/window.location read
// without having to touch history
u=s({},u,e.history.encodeLocation(u));let d=r&&null!=r.replace?r.replace:void 0,f=n.Push;!0===d?f=n.Replace:!1===d||null!=o&&eg(o.formMethod)&&o.formAction===O.location.pathname+O.location.search&&// users don't have to double-click the back button to get to the prior
// location.  If the user redirects to a different location from the
// action/loader this will be ignored and the redirect will be a PUSH
(f=n.Replace);let p=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,h=eK({currentLocation:c,nextLocation:u,historyAction:f});if(h){// Put the blocker into a blocked state
eq(h,{state:"blocked",location:u,proceed(){eq(h,{state:"proceeding",proceed:void 0,reset:void 0,location:u}),// Send the same navigation through
ej(t,r)},reset(){let e=new Map(O.blockers);e.set(h,H),eT({blockers:e})}});return}return await eI(f,u,{submission:o,// Send through the formData serialization error if we have one so we can
// render at the right error boundary after we match routes
pendingError:l,preventScrollReset:p,replace:r&&r.replace,enableViewTransition:r&&r.unstable_viewTransition})}// Start a navigation to the given action/location.  Can optionally provide a
// overrideNavigation which will override the normalLoad in the case of a redirect
// navigation
async function eI(t,n,r){var a,l,c;let u,d;// Abort any in-progress navigations and start a new one. Unset any ongoing
// uninterrupted revalidations unless told otherwise, since we want this
// new navigation to update history normally
o&&o.abort(),o=null,P=t,D=!0===(r&&r.startUninterruptedRevalidation),a=O.location,l=O.matches,k&&E&&(k[eQ(a,l)]=E()),R=!0===(r&&r.preventScrollReset),A=!0===(r&&r.enableViewTransition);let f=i||h,p=r&&r.overrideNavigation,m=x(f,n,g);// Short circuit with a 404 on the root error boundary if we match nothing
if(!m){let e=eu(404,{pathname:n.pathname}),{matches:t,route:r}=ec(f);// Cancel all pending deferred on 404s since we don't keep any routes
eG(),eN(n,{matches:t,loaderData:{},errors:{[r.id]:e}});return}// Short circuit if it's only a hash change and not a revalidation or
// mutation submission.
//
// Ignore on initial page loads because since the initial load will always
// be "same hash".  For example, on /page#hash and submit a <Form method="post">
// which will default to a navigation to /page
if(O.initialized&&!U&&(c=O.location).pathname===n.pathname&&c.search===n.search&&(""===c.hash?""!==n.hash:c.hash===n.hash||""!==n.hash)&&!(r&&r.submission&&eg(r.submission.formMethod))){eN(n,{matches:m});return}// Create a controller/Request for this navigation
o=new AbortController;let w=er(e.history,n,o.signal,r&&r.submission);if(r&&r.pendingError)// with binary FormData so assign here and skip to handleLoaders.  That
// way we handle calling loaders above the boundary etc.  It's not really
// different from an actionError in that sense.
d={[el(m).route.id]:r.pendingError};else if(r&&r.submission&&eg(r.submission.formMethod)){// Call action if we received an action submission
let e=await eO(w,n,r.submission,m,{replace:r.replace});if(e.shortCircuited)return;u=e.pendingActionData,d=e.pendingActionError,p=eS(n,r.submission),// Create a GET request for the loaders
w=new Request(w.url,{signal:w.signal})}// Call loaders
let{shortCircuited:v,loaderData:y,errors:b}=await eP(w,n,m,p,r&&r.submission,r&&r.fetcherSubmission,r&&r.replace,u,d);v||(// Clean up now that the action/loaders have completed.  Don't clean up if
// we short circuited because pendingNavigationController will have already
// been assigned to a new controller for the next navigation
o=null,eN(n,s({matches:m},u?{actionData:u}:{},{loaderData:y,errors:b})))}// Call the action matched by the leaf route for this navigation and handle
// redirects/errors
async function eO(e,i,a,o,s){let l;void 0===s&&(s={}),eU(),eT({navigation:{state:"submitting",location:i,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}});let c=eb(o,i);if(c.route.action||c.route.lazy){if(l=await en("action",e,c,o,d,t,g),e.signal.aborted)return{shortCircuited:!0}}else l={type:r.error,error:eu(405,{method:e.method,pathname:i.pathname,routeId:c.route.id})};if(em(l)){let e;return e=s&&null!=s.replace?s.replace:l.location===O.location.pathname+O.location.search,await eL(O,l,{submission:a,replace:e}),{shortCircuited:!0}}if(eh(l)){// Store off the pending error - we use it to determine which loaders
// to call and will commit it when we complete the navigation
let e=el(o,c.route.id);return!0!==(s&&s.replace)&&(P=n.Push),{// Send back an empty object we can use to clear out any prior actionData
pendingActionData:{},pendingActionError:{[e.route.id]:l.error}}}if(ep(l))throw eu(400,{type:"defer-action"});return{pendingActionData:{[c.route.id]:l.data}}}// Call all applicable loaders for the given matches, handling redirects,
// errors, etc.
async function eP(t,n,r,a,l,c,u,d,f){// Figure out the right navigation we want to use for data loading
let p=a||eS(n,l),m=l||c||ex(p),w=i||h,[v,y]=X(e.history,O,r,m,n,U,F,z,ei,et,w,g,d,f);// Short circuit if we have no loaders to run
if(// Cancel pending deferreds for no-longer-matched routes or routes we're
// about to reload.  Note that if this is an action reload we would have
// already cancelled all pending deferreds so this would be a no-op
eG(e=>!(r&&r.some(t=>t.route.id===e))||v&&v.some(t=>t.route.id===e)),Z=++Q,0===v.length&&0===y.length){let e=e$();return eN(n,s({matches:r,loaderData:{},// Commit pending error if we're short circuiting
errors:f||null},d?{actionData:d}:{},e?{fetchers:new Map(O.fetchers)}:{})),{shortCircuited:!0}}// If this is an uninterrupted revalidation, we remain in our current idle
// state.  If not, we need to switch to our loading state and load data,
// preserving any new action data or existing action data (in the case of
// a revalidation interrupting an actionReload)
if(!D){y.forEach(e=>{let t=O.fetchers.get(e.key),n=ek(void 0,t?t.data:void 0);O.fetchers.set(e.key,n)});let e=d||O.actionData;eT(s({navigation:p},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},y.length>0?{fetchers:new Map(O.fetchers)}:{}))}y.forEach(e=>{B.has(e.key)&&eB(e.key),e.controller&&// (via deleteFetcher) does not abort the triggering navigation that
// triggered the revalidation
B.set(e.key,e.controller)});// Proxy navigation abort through to revalidation fetchers
let b=()=>y.forEach(e=>eB(e.key));o&&o.signal.addEventListener("abort",b);let{results:x,loaderResults:S,fetcherResults:k}=await eD(O.matches,r,v,y,t);if(t.signal.aborted)return{shortCircuited:!0};o&&o.signal.removeEventListener("abort",b),y.forEach(e=>B.delete(e.key));// If any loaders returned a redirect Response, start a new REPLACE navigation
let _=ed(x);if(_){if(_.idx>=v.length){// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
let e=y[_.idx-v.length].key;et.add(e)}return await eL(O,_.result,{replace:u}),{shortCircuited:!0}}// Process and commit output from loaders
let{loaderData:E,errors:C}=eo(O,r,v,S,f,y,k,ey);// Wire up subscribers to update loaderData as promises settle
ey.forEach((e,t)=>{e.subscribe(n=>{// Note: No need to updateState here since the TrackedPromise on
// loaderData is stable across resolve/reject
// Remove this instance if we were aborted or if promises have settled
(n||e.done)&&ey.delete(t)})});let T=e$(),N=eV(Z),j=T||N||y.length>0;return s({loaderData:E,errors:C},j?{fetchers:new Map(O.fetchers)}:{})}function eR(e){return w.v7_fetcherPersist&&(ea.set(e,(ea.get(e)||0)+1),ef.has(e)&&ef.delete(e)),O.fetchers.get(e)||V}// Call the action for the matched fetcher.submit(), and then handle redirects,
// errors, and revalidation
async function eA(n,r,a,s,l,c){var u;if(eU(),ei.delete(n),!s.route.action&&!s.route.lazy){let e=eu(405,{method:c.formMethod,pathname:a,routeId:r});eF(n,r,e);return}let p=(u=O.fetchers.get(n),{state:"submitting",formMethod:c.formMethod,formAction:c.formAction,formEncType:c.formEncType,formData:c.formData,json:c.json,text:c.text,data:u?u.data:void 0});O.fetchers.set(n,p),eT({fetchers:new Map(O.fetchers)});// Call the action for the fetcher
let m=new AbortController,w=er(e.history,a,m.signal,c);B.set(n,m);let v=Q,y=await en("action",w,s,l,d,t,g);if(w.signal.aborted){// We can delete this so long as we weren't aborted by our own fetcher
// re-submit which would have put _new_ controller is in fetchControllers
B.get(n)===m&&B.delete(n);return}if(ef.has(n)){O.fetchers.set(n,e_(void 0)),eT({fetchers:new Map(O.fetchers)});return}if(em(y)){if(B.delete(n),Z>v){// A new navigation was kicked off after our action started, so that
// should take precedence over this redirect navigation.  We already
// set isRevalidationRequired so all loaders for the new route should
// fire unless opted out via shouldRevalidate
let e=e_(void 0);O.fetchers.set(n,e),eT({fetchers:new Map(O.fetchers)});return}{et.add(n);let e=ek(c);return O.fetchers.set(n,e),eT({fetchers:new Map(O.fetchers)}),eL(O,y,{fetcherSubmission:c})}}// Process any non-redirect errors thrown
if(eh(y)){eF(n,r,y.error);return}if(ep(y))throw eu(400,{type:"defer-action"});// Start the data load for current matches, or the next location if we're
// in the middle of a navigation
let b=O.navigation.location||O.location,S=er(e.history,b,m.signal),k=i||h,_="idle"!==O.navigation.state?x(k,O.navigation.location,g):O.matches;f(_,"Didn't find any matches after fetcher action");let E=++Q;ee.set(n,E);let C=ek(c,y.data);O.fetchers.set(n,C);let[T,N]=X(e.history,O,_,c,b,U,F,z,ei,et,k,g,{[s.route.id]:y.data},void 0// No need to send through errors since we short circuit above
);// Put all revalidating fetchers into the loading state, except for the
// current fetcher which we want to keep in it's current loading state which
// contains it's action submission info + action data
N.filter(e=>e.key!==n).forEach(e=>{let t=e.key,n=O.fetchers.get(t),r=ek(void 0,n?n.data:void 0);O.fetchers.set(t,r),B.has(t)&&eB(t),e.controller&&B.set(t,e.controller)}),eT({fetchers:new Map(O.fetchers)});let j=()=>N.forEach(e=>eB(e.key));m.signal.addEventListener("abort",j);let{results:I,loaderResults:R,fetcherResults:A}=await eD(O.matches,_,T,N,S);if(m.signal.aborted)return;m.signal.removeEventListener("abort",j),ee.delete(n),B.delete(n),N.forEach(e=>B.delete(e.key));let M=ed(I);if(M){if(M.idx>=T.length){// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
let e=N[M.idx-T.length].key;et.add(e)}return eL(O,M.result)}// Process and commit output from loaders
let{loaderData:L,errors:D}=eo(O,O.matches,T,R,void 0,N,A,ey);// Since we let revalidations complete even if the submitting fetcher was
// deleted, only put it back to idle if it hasn't been deleted
if(O.fetchers.has(n)){let e=e_(y.data);O.fetchers.set(n,e)}eV(E),"loading"===O.navigation.state&&E>Z?(f(P,"Expected pending action"),o&&o.abort(),eN(O.navigation.location,{matches:_,loaderData:L,errors:D,fetchers:new Map(O.fetchers)})):(// otherwise just update with the fetcher data, preserving any existing
// loaderData for loaders that did not need to reload.  We have to
// manually merge here since we aren't going through completeNavigation
eT({errors:D,loaderData:es(O.loaderData,L,_,D),fetchers:new Map(O.fetchers)}),U=!1)}// Call the matched loader for fetcher.load(), handling redirects, errors, etc.
async function eM(n,r,i,a,o,s){let l=O.fetchers.get(n),c=ek(s,l?l.data:void 0);O.fetchers.set(n,c),eT({fetchers:new Map(O.fetchers)});// Call the loader for this fetcher route match
let u=new AbortController,p=er(e.history,i,u.signal);B.set(n,u);let h=Q,m=await en("loader",p,a,o,d,t,g);if(ep(m)&&(m=await ev(m,p.signal,!0)||m),B.get(n)===u&&B.delete(n),p.signal.aborted)return;if(ef.has(n)){O.fetchers.set(n,e_(void 0)),eT({fetchers:new Map(O.fetchers)});return}// If the loader threw a redirect Response, start a new REPLACE navigation
if(em(m)){if(Z>h){// A new navigation was kicked off after our loader started, so that
// should take precedence over this redirect navigation
let e=e_(void 0);O.fetchers.set(n,e),eT({fetchers:new Map(O.fetchers)});return}et.add(n),await eL(O,m);return}// Process any non-redirect errors thrown
if(eh(m)){eF(n,r,m.error);return}f(!ep(m),"Unhandled fetcher deferred data");// Put the fetcher back into an idle state
let w=e_(m.data);O.fetchers.set(n,w),eT({fetchers:new Map(O.fetchers)})}/**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */async function eL(t,r,i){let{submission:a,fetcherSubmission:u,replace:d}=void 0===i?{}:i;r.revalidate&&(U=!0);let p=m(t.location,r.location,{_isRedirect:!0});if(f(p,"Expected a location on the redirect navigation"),c){let t=!1;if(r.reloadDocument)t=!0;else if(q.test(r.location)){let n=e.history.createURL(r.location);t=n.origin!==l.location.origin||// Hard reload if it's an absolute URL that does not match our basename
null==C(n.pathname,g)}if(t){d?l.location.replace(r.location):l.location.assign(r.location);return}}// There's no need to abort on redirects, since we don't detect the
// redirect until the action/loaders have settled
o=null;let h=!0===d?n.Replace:n.Push,{formMethod:w,formAction:v,formEncType:y}=t.navigation;!a&&!u&&w&&v&&y&&(a=ex(t.navigation));// If this was a 307/308 submission we want to preserve the HTTP method and
// re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
// redirected location
let b=a||u;if(W.has(r.status)&&b&&eg(b.formMethod))await eI(h,p,{submission:s({},b,{formAction:r.location}),// Preserve this flag across redirects
preventScrollReset:R});else{// If we have a navigation submission, we will preserve it through the
// redirect navigation
let e=eS(p,a);await eI(h,p,{overrideNavigation:e,fetcherSubmission:u,// Preserve this flag across redirects
preventScrollReset:R})}}async function eD(n,i,a,o,s){// Call all navigation loaders and revalidating fetcher loaders in parallel,
// then slice off the results into separate arrays so we can handle them
// accordingly
let l=await Promise.all([...a.map(e=>en("loader",s,e,i,d,t,g)),...o.map(n=>n.matches&&n.match&&n.controller?en("loader",er(e.history,n.path,n.controller.signal),n.match,n.matches,d,t,g):{type:r.error,error:eu(404,{pathname:n.path})})]),c=l.slice(0,a.length),u=l.slice(a.length);return await Promise.all([ew(n,a,c,c.map(()=>s.signal),!1,O.loaderData),ew(n,o.map(e=>e.match),u,o.map(e=>e.controller?e.controller.signal:null),!0)]),{results:l,loaderResults:c,fetcherResults:u}}function eU(){// Every interruption triggers a revalidation
U=!0,// Cancel pending route-level deferreds and mark cancelled routes for
// revalidation
F.push(...eG()),// Abort in-flight fetcher loads
ei.forEach((e,t)=>{B.has(t)&&(z.push(t),eB(t))})}function eF(e,t,n){let r=el(O.matches,t);ez(e),eT({errors:{[r.route.id]:n},fetchers:new Map(O.fetchers)})}function ez(e){let t=O.fetchers.get(e);B.has(e)&&!(t&&"loading"===t.state&&ee.has(e))&&eB(e),ei.delete(e),ee.delete(e),et.delete(e),ef.delete(e),O.fetchers.delete(e)}function eB(e){let t=B.get(e);f(t,"Expected fetch controller: "+e),t.abort(),B.delete(e)}function eW(e){for(let t of e){let e=e_(eR(t).data);O.fetchers.set(t,e)}}function e$(){let e=[],t=!1;for(let n of et){let r=O.fetchers.get(n);f(r,"Expected fetcher: "+n),"loading"===r.state&&(et.delete(n),e.push(n),t=!0)}return eW(e),t}function eV(e){let t=[];for(let[n,r]of ee)if(r<e){let e=O.fetchers.get(n);f(e,"Expected fetcher: "+n),"loading"===e.state&&(eB(n),ee.delete(n),t.push(n))}return eW(t),t.length>0}function eH(e){O.blockers.delete(e),eE.delete(e)}// Utility function to update blockers, ensuring valid state transitions
function eq(e,t){let n=O.blockers.get(e)||H;// Poor mans state machine :)
// https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
f("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(O.blockers);r.set(e,t),eT({blockers:r})}function eK(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===eE.size)return;// We ony support a single active blocker at the moment since we don't have
// any compelling use cases for multi-blocker yet
eE.size>1&&p(!1,"A router only supports one blocker at a time");let i=Array.from(eE.entries()),[a,o]=i[i.length-1],s=O.blockers.get(a);if((!s||"proceeding"!==s.state)&&o({currentLocation:t,nextLocation:n,historyAction:r}))return a}function eG(e){let t=[];return ey.forEach((n,r)=>{(!e||e(r))&&(// Cancel the deferred - but do not remove from activeDeferreds here -
// we rely on the subscribers to do that so our tests can assert proper
// cleanup via _internalActiveDeferreds
n.cancel(),t.push(r),ey.delete(r))}),t}function eQ(e,t){return _&&_(e,t.map(e=>S(e,O.loaderData)))||e.key}function eY(e,t){if(k){let n=k[eQ(e,t)];if("number"==typeof n)return n}return null}return a={get basename(){return g},get state(){return O},get routes(){return h},get window(){return l},initialize:// Initialize the router, all side effects should be kicked off from here.
// Implemented as a Fluent API for ease of:
//   let router = createRouter(init).initialize();
function(){if(// If history informs us of a POP navigation, start the navigation but do not update
// state.  We'll update our own state once the navigation completes
v=e.history.listen(t=>{let{action:n,location:r,delta:i}=t;// Ignore this event if it was just us resetting the URL from a
// blocked POP navigation
if(eC){eC=!1;return}p(0===eE.size||null!=i,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let a=eK({currentLocation:O.location,nextLocation:r,historyAction:n});if(a&&null!=i){// Restore the URL to match the current UI, but don't update router state
eC=!0,e.history.go(-1*i),// Put the blocker into a blocked state
eq(a,{state:"blocked",location:r,proceed(){eq(a,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),// Re-do the same POP navigation we just blocked
e.history.go(i)},reset(){let e=new Map(O.blockers);e.set(a,H),eT({blockers:e})}});return}return eI(n,r)}),c){// FIXME: This feels gross.  How can we cleanup the lines between
// scrollRestoration/appliedTransitions persistance?
(function(e,t){try{let n=e.sessionStorage.getItem(G);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(e){// no-op, use default empty object
}})(l,M);let e=()=>(function(e,t){if(t.size>0){let n={};for(let[e,r]of t)n[e]=[...r];try{e.sessionStorage.setItem(G,JSON.stringify(n))}catch(e){p(!1,"Failed to save applied view transitions in sessionStorage ("+e+").")}}})(l,M);l.addEventListener("pagehide",e),L=()=>l.removeEventListener("pagehide",e)}return O.initialized||eI(n.Pop,O.location),a},subscribe:// Subscribe to state updates for the router
function(e){return y.add(e),()=>y.delete(e)},enableScrollRestoration:// Opt in to capturing and reporting scroll positions during navigations,
// used by the <ScrollRestoration> component
function(e,t,n){// Perform initial hydration scroll restoration, since we miss the boat on
// the initial updateState() because we've not yet rendered <ScrollRestoration/>
// and therefore have no savedScrollPositions available
if(k=e,E=t,_=n||null,!T&&O.navigation===$){T=!0;let e=eY(O.location,O.matches);null!=e&&eT({restoreScrollPosition:e})}return()=>{k=null,E=null,_=null}},navigate:ej,fetch:// Trigger a fetcher load/submit for the given fetcher key
function(e,t,n,r){if(u)throw Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");B.has(e)&&eB(e);let a=i||h,o=Y(O.location,O.matches,g,w.v7_prependBasename,n,t,null==r?void 0:r.relative),s=x(a,o,g);if(!s){eF(e,t,eu(404,{pathname:o}));return}let{path:l,submission:c,error:d}=J(w.v7_normalizeFormMethod,!0,o,r);if(d){eF(e,t,d);return}let f=eb(s,l);if(R=!0===(r&&r.preventScrollReset),c&&eg(c.formMethod)){eA(e,t,l,f,s,c);return}// Store off the match so we can call it's shouldRevalidate on subsequent
// revalidations
ei.set(e,{routeId:t,path:l}),eM(e,t,l,f,s,c)},revalidate:// Revalidate all current loaders.  If a navigation is in progress or if this
// is interrupted by a navigation, allow this to "succeed" by calling all
// loaders during the next loader round
function(){// If we're currently submitting an action, we don't need to start a new
// navigation, we'll just let the follow up loader execution call all loaders
if(eU(),eT({revalidation:"loading"}),"submitting"!==O.navigation.state){// If we're currently in an idle state, start a new navigation for the current
// action/location and mark it as uninterrupted, which will skip the history
// update in completeNavigation
if("idle"===O.navigation.state){eI(O.historyAction,O.location,{startUninterruptedRevalidation:!0});return}// Otherwise, if we're currently in a loading state, just start a new
// navigation to the navigation.location but do not trigger an uninterrupted
// revalidation so that history correctly updates once the navigation completes
eI(P||O.historyAction,O.navigation.location,{overrideNavigation:O.navigation})}},// Passthrough to history-aware createHref used by useHref so we get proper
// hash-aware URLs in DOM paths
createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:eR,deleteFetcher:function(e){if(w.v7_fetcherPersist){let t=(ea.get(e)||0)-1;t<=0?(ea.delete(e),ef.add(e)):ea.set(e,t)}else ez(e);eT({fetchers:new Map(O.fetchers)})},dispose:// Clean up a router and it's side effects
function(){v&&v(),L&&L(),y.clear(),o&&o.abort(),O.fetchers.forEach((e,t)=>ez(t)),O.blockers.forEach((e,t)=>eH(t))},getBlocker:function(e,t){let n=O.blockers.get(e)||H;return eE.get(e)!==t&&eE.set(e,t),n},deleteBlocker:eH,_internalFetchControllers:B,_internalActiveDeferreds:ey,_internalSetRoutes:function(e){i=b(e,t,void 0,d={})}}}function Y(e,t,n,r,i,a,o){let s,l;if(null!=a&&"path"!==o){for(let e of(// Grab matches up to the calling route so our route-relative logic is
// relative to the correct source route.  When using relative:path,
// fromRouteId is ignored since that is always relative to the current
// location path
s=[],t))if(s.push(e),e.route.id===a){l=e;break}}else s=t,l=t[t.length-1];// Resolve the relative path
let c=j(i||".",N(s).map(e=>e.pathnameBase),C(e.pathname,n)||e.pathname,"path"===o);return null==i&&(c.search=e.search,c.hash=e.hash),(null==i||""===i||"."===i)&&l&&l.route.index&&!ey(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&"/"!==n&&(c.pathname="/"===c.pathname?n:I([n,c.pathname])),g(c)}// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function J(e,t,n,r){var i;let a,o;// Return location verbatim on non-submission navigations
if(!r||!(null!=r&&("formData"in r&&null!=r.formData||"body"in r&&void 0!==r.body)))return{path:n};if(r.formMethod&&(i=r.formMethod,!z.has(i.toLowerCase())))return{path:n,error:eu(405,{method:r.formMethod})};let s=()=>({path:n,error:eu(400,{type:"invalid-body"})}),l=r.formMethod||"get",c=e?l.toUpperCase():l.toLowerCase(),u=ef(n);if(void 0!==r.body){if("text/plain"===r.formEncType){// text only support POST/PUT/PATCH/DELETE submissions
if(!eg(c))return s();let e="string"==typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"},""):String(r.body);return{path:n,submission:{formMethod:c,formAction:u,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){// json only supports POST/PUT/PATCH/DELETE submissions
if(!eg(c))return s();try{let e="string"==typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:c,formAction:u,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(e){return s()}}}if(f("function"==typeof FormData,"FormData is not available in this environment"),r.formData)a=ei(r.formData),o=r.formData;else if(r.body instanceof FormData)a=ei(r.body),o=r.body;else if(r.body instanceof URLSearchParams)o=ea(a=r.body);else if(null==r.body)a=new URLSearchParams,o=new FormData;else try{a=new URLSearchParams(r.body),o=ea(a)}catch(e){return s()}let d={formMethod:c,formAction:u,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:o,json:void 0,text:void 0};if(eg(d.formMethod))return{path:n,submission:d};// Flatten submission onto URLSearchParams for GET submissions
let p=w(n);return t&&p.search&&ey(p.search)&&a.append("index",""),p.search="?"+a,{path:g(p),submission:d}}function X(e,t,n,r,i,a,o,l,c,u,d,f,p,h){let m=h?Object.values(h)[0]:p?Object.values(p)[0]:void 0,g=e.createURL(t.location),w=e.createURL(i),v=// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
(function(e,t){let n=e;if(t){let r=e.findIndex(e=>e.route.id===t);r>=0&&(n=e.slice(0,r))}return n})(n,h?Object.keys(h)[0]:void 0).filter((e,n)=>{var i,l;let c,u;if(e.route.lazy)return!0;if(null==e.route.loader)return!1;// Always call the loader on new route instances and pending defer cancellations
if(i=t.loaderData,c=!(l=t.matches[n])||// [a, b] -> [a, c]
e.route.id!==l.route.id,u=void 0===i[e.route.id],c||u||o.some(t=>t===e.route.id))return!0;// This is the default implementation for when we revalidate.  If the route
// provides it's own implementation, then we give them full control but
// provide this value so they can leverage it if needed after they check
// their own specific use cases
let d=t.matches[n];return ee(e,s({currentUrl:g,currentParams:d.params,nextUrl:w,nextParams:e.params},r,{actionResult:m,defaultShouldRevalidate:a||// Clicked the same link, resubmitted a GET form
g.pathname+g.search===w.pathname+w.search||// Search params affect all loaders
g.search!==w.search||Z(d,e)}))}),y=[];return c.forEach((e,i)=>{// Don't revalidate if fetcher won't be present in the subsequent render
if(!n.some(t=>t.route.id===e.routeId))return;let o=x(d,e.path,f);// If the fetcher path no longer matches, push it in with null matches so
// we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
// currently only a use-case for Remix HMR where the route tree can change
// at runtime and remove a route previously loaded via a fetcher
if(!o){y.push({key:i,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});return}// Revalidating fetchers are decoupled from the route matches since they
// load from a static href.  They revalidate based on explicit revalidation
// (submission, useRevalidator, or X-Remix-Revalidate)
let c=t.fetchers.get(i),p=eb(o,e.path);!u.has(i)&&(l.includes(i)||(c&&"idle"!==c.state&&void 0===c.data?a:ee(p,s({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:a}))))&&y.push({key:i,routeId:e.routeId,path:e.path,matches:o,match:p,controller:new AbortController})}),[v,y]}function Z(e,t){let n=e.route.path;return e.pathname!==t.pathname||// splat param changed, which is not present in match.path
// e.g. /files/images/avatar.jpg -> files/finances.xls
null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ee(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"==typeof n)return n}return t.defaultShouldRevalidate}/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */async function et(e,t,n){if(!e.lazy)return;let r=await e.lazy();// If the lazy route function was executed and removed by another parallel
// call then we can return - first lazy() to finish wins because the return
// value of lazy is expected to be static
if(!e.lazy)return;let i=n[e.id];f(i,"No route found in manifest");// Update the route in place.  This should be safe because there's no way
// we could yet be sitting on this route as we can't get there without
// resolving lazy() first.
//
// This is different than the HMR "update" use-case where we may actively be
// on the route being updated.  The main concern boils down to "does this
// mutation affect any ongoing navigations or any current state.matches
// values?".  If not, it should be safe to update in place.
let a={};for(let e in r){let t=void 0!==i[e]&&// This property isn't static since it should always be updated based
// on the route updates
"hasErrorBoundary"!==e;p(!t,'Route "'+i.id+'" has a static property "'+e+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+e+'" will be ignored.'),t||y.has(e)||(a[e]=r[e])}// Mutate the route with the provided updates.  Do this first so we pass
// the updated version to mapRouteProperties
Object.assign(i,a),// Mutate the `hasErrorBoundary` property on the route based on the route
// updates and remove the `lazy` function so we don't resolve the lazy
// route again.
Object.assign(i,s({},t(i),{lazy:void 0}))}async function en(e,t,n,i,a,o,s,l){var c,u,d,p;let h,m,g;void 0===l&&(l={});let w=e=>{let r;let i=new Promise((e,t)=>r=t);return g=()=>r(),t.signal.addEventListener("abort",g),Promise.race([e({request:t,params:n.params,context:l.requestContext}),i])};try{let i=n.route[e];if(n.route.lazy){if(i){let e;let t=await Promise.all([// If the handler throws, don't let it immediately bubble out,
// since we need to let the lazy() execution finish so we know if this
// route has a boundary that can handle the error
w(i).catch(t=>{e=t}),et(n.route,o,a)]);if(e)throw e;m=t[0]}else if(// Load lazy route module, then run any returned handler
await et(n.route,o,a),i=n.route[e])// with un-abortable behavior of handler execution on non-lazy or
// previously-lazy-loaded routes
m=await w(i);else{if("action"!==e)// hit the invariant below that errors on returning undefined.
return{type:r.data,data:void 0};let i=new URL(t.url),a=i.pathname+i.search;throw eu(405,{method:t.method,pathname:a,routeId:n.route.id})}}else if(i)m=await w(i);else{let e=new URL(t.url),n=e.pathname+e.search;throw eu(404,{pathname:n})}f(void 0!==m,"You defined "+("action"===e?"an action":"a loader")+" for route "+('"'+n.route.id)+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){h=r.error,m=e}finally{g&&t.signal.removeEventListener("abort",g)}if(null!=(c=m)&&"number"==typeof c.status&&"string"==typeof c.statusText&&"object"==typeof c.headers&&void 0!==c.body){let e,a=m.status;// Process redirects
if(B.has(a)){let e=m.headers.get("Location");// Support relative routing in internal redirects
if(f(e,"Redirects returned/thrown from loaders/actions must have a Location header"),q.test(e)){if(!l.isStaticRequest){// Strip off the protocol+origin for same-origin + same-basename absolute
// redirects. If this is a static request, we can let it go back to the
// browser as-is
let n=new URL(t.url),r=new URL(e.startsWith("//")?n.protocol+e:e),i=null!=C(r.pathname,s);r.origin===n.origin&&i&&(e=r.pathname+r.search+r.hash)}}else e=Y(new URL(t.url),i.slice(0,i.indexOf(n)+1),s,!0,e);// Don't process redirects in the router during static requests requests.
// Instead, throw the Response and let the server handle it with an HTTP
// redirect.  We also update the Location header in place in this flow so
// basename and relative routing is taken into account
if(l.isStaticRequest)throw m.headers.set("Location",e),m;return{type:r.redirect,status:a,location:e,revalidate:null!==m.headers.get("X-Remix-Revalidate"),reloadDocument:null!==m.headers.get("X-Remix-Reload-Document")}}// For SSR single-route requests, we want to hand Responses back directly
// without unwrapping.  We do this with the QueryRouteResponse wrapper
// interface so we can know whether it was returned or thrown
if(l.isRouteRequest)throw{type:h===r.error?r.error:r.data,response:m};let o=m.headers.get("Content-Type");return(e=o&&/\bapplication\/json\b/.test(o)?await m.json():await m.text(),h===r.error)?{type:h,error:new M(a,m.statusText,e),headers:m.headers}:{type:r.data,data:e,statusCode:m.status,headers:m.headers}}return h===r.error?{type:h,error:m}:(u=m)&&"object"==typeof u&&"object"==typeof u.data&&"function"==typeof u.subscribe&&"function"==typeof u.cancel&&"function"==typeof u.resolveData?{type:r.deferred,deferredData:m,statusCode:null==(d=m.init)?void 0:d.status,headers:(null==(p=m.init)?void 0:p.headers)&&new Headers(m.init.headers)}:{type:r.data,data:m}}// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function er(e,t,n,r){let i=e.createURL(ef(t)).toString(),a={signal:n};if(r&&eg(r.formMethod)){let{formMethod:e,formEncType:t}=r;// Didn't think we needed this but it turns out unlike other methods, patch
// won't be properly normalized to uppercase and results in a 405 error.
// See: https://fetch.spec.whatwg.org/#concept-method
a.method=e.toUpperCase(),"application/json"===t?(a.headers=new Headers({"Content-Type":t}),a.body=JSON.stringify(r.json)):"text/plain"===t?a.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?a.body=ei(r.formData):a.body=r.formData}return new Request(i,a)}function ei(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"==typeof r?r:r.name);return t}function ea(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function eo(e,t,n,r,i,a,o,l){var c;let u,d,p,h,m;let{loaderData:g,errors:w}=(c=i,d={},p=null,h=!1,m={},// Process loader results into state.loaderData/state.errors
r.forEach((e,r)=>{let i=n[r].route.id;if(f(!em(e),"Cannot handle redirect results in processLoaderData"),eh(e)){// Look upwards from the matched route for the closest ancestor
// error boundary, defaulting to the root match
let n=el(t,i),r=e.error;c&&(r=Object.values(c)[0],c=void 0),null==(p=p||{})[n.route.id]&&(p[n.route.id]=r),// Clear our any prior loaderData for the throwing route
d[i]=void 0,h||(h=!0,u=L(e.error)?e.error.status:500),e.headers&&(m[i]=e.headers)}else ep(e)?(l.set(i,e.deferredData),d[i]=e.deferredData.data):d[i]=e.data,null==e.statusCode||200===e.statusCode||h||(u=e.statusCode),e.headers&&(m[i]=e.headers)}),c&&(p=c,d[Object.keys(c)[0]]=void 0),{loaderData:d,errors:p,statusCode:u||200,loaderHeaders:m});// Process results from our revalidating fetchers
for(let t=0;t<a.length;t++){let{key:n,match:r,controller:i}=a[t];f(void 0!==o&&void 0!==o[t],"Did not find corresponding fetcher result");let l=o[t];// Process fetcher non-redirect errors
if(!i||!i.signal.aborted){if(eh(l)){let t=el(e.matches,null==r?void 0:r.route.id);w&&w[t.route.id]||(w=s({},w,{[t.route.id]:l.error})),e.fetchers.delete(n)}else if(em(l))// keep this to type narrow to a success result in the else
f(!1,"Unhandled fetcher revalidation redirect");else if(ep(l))// in resolveDeferredResults
f(!1,"Unhandled fetcher deferred data");else{let t=e_(l.data);e.fetchers.set(n,t)}}}return{loaderData:g,errors:w}}function es(e,t,n,r){let i=s({},t);for(let a of n){let n=a.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(i[n]=t[n]):void 0!==e[n]&&a.route.loader&&// wasn't removed by HMR
(i[n]=e[n]),r&&r.hasOwnProperty(n))break}return i}// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function el(e,t){return(t?e.slice(0,e.findIndex(e=>e.route.id===t)+1):[...e]).reverse().find(e=>!0===e.route.hasErrorBoundary)||e[0]}function ec(e){// Prefer a root layout route if present, otherwise shim in a route object
let t=1===e.length?e[0]:e.find(e=>e.index||!e.path||"/"===e.path)||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function eu(e,t){let{pathname:n,routeId:r,method:i,type:a}=void 0===t?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===a?s="defer() is not supported in actions":"invalid-body"===a&&(s="Unable to encode submission body")):403===e?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):404===e?(o="Not Found",s='No route matches URL "'+n+'"'):405===e&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new M(e||500,o,Error(s),!0)}// Find any returned redirect errors, starting from the lowest match
function ed(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(em(n))return{result:n,idx:t}}}function ef(e){let t="string"==typeof e?w(e):e;return g(s({},t,{hash:""}))}function ep(e){return e.type===r.deferred}function eh(e){return e.type===r.error}function em(e){return(e&&e.type)===r.redirect}function eg(e){return U.has(e.toLowerCase())}async function ew(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];// If we don't have a match, then we can have a deferred result to do
// anything with.  This is for revalidating fetchers where the route was
// removed during HMR
if(!l)continue;let c=e.find(e=>e.route.id===l.route.id),u=null!=c&&!Z(c,l)&&(a&&a[l.route.id])!==void 0;if(ep(s)&&(i||u)){// Note: we do not have to touch activeDeferreds here since we race them
// against the signal in resolveDeferredData and they'll get aborted
// there if needed
let e=r[o];f(e,"Expected an AbortSignal for revalidating fetcher deferred result"),await ev(s,e,i).then(e=>{e&&(n[o]=e||n[o])})}}}async function ev(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:r.data,data:e.deferredData.unwrappedData}}catch(e){// Handle any TrackedPromise._error values encountered while unwrapping
return{type:r.error,error:e}}return{type:r.data,data:e.deferredData.data}}}function ey(e){return new URLSearchParams(e).getAll("index").some(e=>""===e)}function eb(e,t){let n="string"==typeof t?w(t).search:t.search;if(e[e.length-1].route.index&&ey(n||""))return e[e.length-1];// Otherwise grab the deepest "path contributing" match (ignoring index and
// pathless layout routes)
let r=N(e);return r[r.length-1]}function ex(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(t&&n&&r){if(null!=i)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(null!=a)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(void 0!==o)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function eS(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ek(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function e_(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}Symbol("deferred")}),p("aphAM",function(e,t){o(e.exports,"UNSAFE_DataRouterContext",()=>c),o(e.exports,"UNSAFE_DataRouterStateContext",()=>u),o(e.exports,"UNSAFE_NavigationContext",()=>d),o(e.exports,"UNSAFE_RouteContext",()=>h),o(e.exports,"useHref",()=>g),o(e.exports,"useResolvedPath",()=>k),o(e.exports,"useLocation",()=>v),o(e.exports,"useNavigate",()=>b),o(e.exports,"useParams",()=>S),o(e.exports,"UNSAFE_useRoutesImpl",()=>_),o(e.exports,"UNSAFE_useRouteId",()=>R),o(e.exports,"useNavigation",()=>A),o(e.exports,"useMatches",()=>M),o(e.exports,"unstable_useBlocker",()=>D),o(e.exports,"Router",()=>F),o(e.exports,"Outlet",()=>U),o(e.exports,"UNSAFE_mapRouteProperties",()=>B);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var n,r,i,a=f("acw62"),s=f("2vsP7");function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
let c=/*#__PURE__*/a.createContext(null),u=/*#__PURE__*/a.createContext(null),d=/*#__PURE__*/a.createContext(null),p=/*#__PURE__*/a.createContext(null),h=/*#__PURE__*/a.createContext({outlet:null,matches:[],isDataRoute:!1}),m=/*#__PURE__*/a.createContext(null);/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */function g(e,t){let{relative:n}=void 0===t?{}:t;w()||(0,s.UNSAFE_invariant)(!1);let{basename:r,navigator:i}=a.useContext(d),{hash:o,pathname:l,search:c}=k(e,{relative:n}),u=l;return"/"!==r&&(u="/"===l?r:(0,s.joinPaths)([r,l])),i.createHref({pathname:u,search:c,hash:o})}/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */function w(){return null!=a.useContext(p)}/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */function v(){return w()||(0,s.UNSAFE_invariant)(!1),a.useContext(p).location}// Mute warnings for calls to useNavigate in SSR environments
function y(e){a.useContext(d).static||// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
a.useLayoutEffect(e)}/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */function b(){let{isDataRoute:e}=a.useContext(h);// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */function(){let{router:e}=I(N.UseNavigateStable),t=P(j.UseNavigateStable),n=a.useRef(!1);return y(()=>{n.current=!0}),a.useCallback(function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,l({fromRouteId:t},i)))},[e,t])}():function(){w()||(0,s.UNSAFE_invariant)(!1);let e=a.useContext(c),{basename:t,navigator:n}=a.useContext(d),{matches:r}=a.useContext(h),{pathname:i}=v(),o=JSON.stringify((0,s.UNSAFE_getPathContributingMatches)(r).map(e=>e.pathnameBase)),l=a.useRef(!1);return y(()=>{l.current=!0}),a.useCallback(function(r,a){// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(void 0===a&&(a={}),!l.current)return;if("number"==typeof r){n.go(r);return}let c=(0,s.resolveTo)(r,JSON.parse(o),i,"path"===a.relative);null==e&&"/"!==t&&(c.pathname="/"===c.pathname?t:(0,s.joinPaths)([t,c.pathname])),(a.replace?n.replace:n.push)(c,a.state,a)},[t,n,o,i,e])}()}let x=/*#__PURE__*/a.createContext(null);/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */function S(){let{matches:e}=a.useContext(h),t=e[e.length-1];return t?t.params:{}}/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */function k(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=a.useContext(h),{pathname:i}=v(),o=JSON.stringify((0,s.UNSAFE_getPathContributingMatches)(r).map(e=>e.pathnameBase));return a.useMemo(()=>(0,s.resolveTo)(e,JSON.parse(o),i,"path"===n),[e,o,i,n])}// Internal implementation with accept optional param for RouterProvider usage
function _(e,t,n){let r;w()||(0,s.UNSAFE_invariant)(!1);let{navigator:i}=a.useContext(d),{matches:o}=a.useContext(h),c=o[o.length-1],u=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let m=v();if(t){var g;let e="string"==typeof t?(0,s.parsePath)(t):t;"/"===f||(null==(g=e.pathname)?void 0:g.startsWith(f))||(0,s.UNSAFE_invariant)(!1),r=e}else r=m;let y=r.pathname||"/",b="/"===f?y:y.slice(f.length)||"/",x=(0,s.matchRoutes)(e,{pathname:b}),S=function(e,t,n){var r,i;if(void 0===t&&(t=[]),void 0===n&&(n=null),null==e){if(null==(i=n)||!i.errors)return null;// boundary.  Use the pre-matched (or shimmed) matches
e=n.matches}let o=e,l=null==(r=n)?void 0:r.errors;if(null!=l){let e=o.findIndex(e=>e.route.id&&(null==l?void 0:l[e.route.id]));e>=0||(0,s.UNSAFE_invariant)(!1),o=o.slice(0,Math.min(o.length,e+1))}return o.reduceRight((e,r,i)=>{let s=r.route.id?null==l?void 0:l[r.route.id]:null,c=null;n&&(c=r.route.errorElement||E);let u=t.concat(o.slice(0,i+1)),d=()=>{let t;return t=s?c:r.route.Component?/*#__PURE__*/a.createElement(r.route.Component,null):r.route.element?r.route.element:e,/*#__PURE__*/a.createElement(T,{match:r,routeContext:{outlet:e,matches:u,isDataRoute:null!=n},children:t})};// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?/*#__PURE__*/a.createElement(C,{location:n.location,revalidation:n.revalidation,component:c,error:s,children:d(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):d()},null)}(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:(0,s.joinPaths)([f,// Re-encode pathnames that were decoded inside matchRoutes
    i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:(0,s.joinPaths)([f,// Re-encode pathnames that were decoded inside matchRoutes
    i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),o,n);return(// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
t&&S?/*#__PURE__*/a.createElement(p.Provider,{value:{location:l({pathname:"/",search:"",hash:"",state:null,key:"default"},r),navigationType:s.Action.Pop}},S):S)}let E=/*#__PURE__*/a.createElement(function(){var e;let t,n,r;let i=(t=a.useContext(m),n=O(j.UseRouteError),r=P(j.UseRouteError),// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
t||(null==(e=n.errors)?void 0:e[r])),o=(0,s.isRouteErrorResponse)(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),l=i instanceof Error?i.stack:null;return /*#__PURE__*/a.createElement(a.Fragment,null,/*#__PURE__*/a.createElement("h2",null,"Unexpected Application Error!"),/*#__PURE__*/a.createElement("h3",{style:{fontStyle:"italic"}},o),l?/*#__PURE__*/a.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},l):null,null)},null);class C extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return(// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
//
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation})}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?/*#__PURE__*/a.createElement(h.Provider,{value:this.props.routeContext},/*#__PURE__*/a.createElement(m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T(e){let{routeContext:t,match:n,children:r}=e,i=a.useContext(c);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),/*#__PURE__*/a.createElement(h.Provider,{value:t},r)}var N=((n=N||{}).UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n),j=((r=j||{}).UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r);function I(e){let t=a.useContext(c);return t||(0,s.UNSAFE_invariant)(!1),t}function O(e){let t=a.useContext(u);return t||(0,s.UNSAFE_invariant)(!1),t}// Internal version with hookName-aware debugging
function P(e){let t;let n=((t=a.useContext(h))||(0,s.UNSAFE_invariant)(!1),t),r=n.matches[n.matches.length-1];return r.route.id||(0,s.UNSAFE_invariant)(!1),r.route.id}/**
 * Returns the ID for the nearest contextual route
 */function R(){return P(j.UseRouteId)}/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */function A(){return O(j.UseNavigation).navigation}/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */function M(){let{matches:e,loaderData:t}=O(j.UseMatches);return a.useMemo(()=>e.map(e=>(0,s.UNSAFE_convertRouteMatchToUiMatch)(e,t)),[e,t])}let L=0;/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */function D(e){let{router:t,basename:n}=I(N.UseBlocker),r=O(j.UseBlocker),[i,o]=a.useState(""),c=a.useCallback(t=>{if("function"!=typeof e)return!!e;if("/"===n)return e(t);// If they provided us a function and we've got an active basename, strip
// it from the locations we expose to the user to match the behavior of
// useLocation
let{currentLocation:r,nextLocation:i,historyAction:a}=t;return e({currentLocation:l({},r,{pathname:(0,s.stripBasename)(r.pathname,n)||r.pathname}),nextLocation:l({},i,{pathname:(0,s.stripBasename)(i.pathname,n)||i.pathname}),historyAction:a})},[n,e]);// Prefer the blocker from `state` not `router.state` since DataRouterContext
// is memoized so this ensures we update on blocker state updates
return(// This effect is in charge of blocker key assignment and deletion (which is
// tightly coupled to the key)
a.useEffect(()=>{let e=String(++L);return o(e),()=>t.deleteBlocker(e)},[t]),// This effect handles assigning the blockerFunction.  This is to handle
// unstable blocker function identities, and happens only after the prior
// effect so we don't get an orphaned blockerFunction in the router with a
// key of "".  Until then we just have the IDLE_BLOCKER.
a.useEffect(()=>{""!==i&&t.getBlocker(i,c)},[t,i,c]),i&&r.blockers.has(i)?r.blockers.get(i):s.IDLE_BLOCKER)}/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */function U(e){var t;let n;return t=e.context,(n=a.useContext(h).outlet)?/*#__PURE__*/a.createElement(x.Provider,{value:t},n):n}/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */function F(e){let{basename:t="/",children:n=null,location:r,navigationType:i=s.Action.Pop,navigator:o,static:l=!1}=e;w()&&(0,s.UNSAFE_invariant)(!1);// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let c=t.replace(/^\/*/,"/"),u=a.useMemo(()=>({basename:c,navigator:o,static:l}),[c,o,l]);"string"==typeof r&&(r=(0,s.parsePath)(r));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:v="default"}=r,y=a.useMemo(()=>{let e=(0,s.stripBasename)(f,c);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:i}},[c,f,h,m,g,v,i]);return null==y?null:/*#__PURE__*/a.createElement(d.Provider,{value:u},/*#__PURE__*/a.createElement(p.Provider,{children:n,value:y}))}a.startTransition;var z=((i=z||{})[i.pending=0]="pending",i[i.success=1]="success",i[i.error=2]="error",i);function B(e){let t={// Note: this check also occurs in createRoutesFromChildren so update
// there if you change this -- please and thank you!
hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:/*#__PURE__*/a.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:/*#__PURE__*/a.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}new Promise(()=>{})}),p("45HU9",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=e.exports.useSpeechRecognition=void 0;var n,r,i,a,o=f("acw62"),s=f("dYC5L"),l=f("efBa6"),c=f("3mWln"),u=h(f("6ubUz")),d=h(f("fOfvk")),p=h(f("cjtvA"));function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function g(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){m(a,r,i,o,s,"next",e)}function s(e){m(a,r,i,o,s,"throw",e)}o(void 0)})}}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}}(e,t)||y(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var x=!!p.default,S=x&&!(0,d.default)();e.exports.useSpeechRecognition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.transcribing,n=void 0===t||t,r=e.clearTranscriptOnListen,i=void 0===r||r,a=e.commands,u=void 0===a?[]:a,d=v((0,o.useState)(k.getRecognitionManager()),1)[0],f=v((0,o.useState)(x),2),p=f[0],h=f[1],m=v((0,o.useState)(S),2),g=m[0],_=m[1],E=v((0,o.useReducer)(c.transcriptReducer,{interimTranscript:d.interimTranscript,finalTranscript:""}),2),C=E[0],T=C.interimTranscript,N=C.finalTranscript,j=E[1],I=v((0,o.useState)(d.listening),2),O=I[0],P=I[1],R=v((0,o.useState)(d.isMicrophoneAvailable),2),A=R[0],M=R[1],L=(0,o.useRef)(u);L.current=u;var D=function(){j((0,l.clearTranscript)())},U=(0,o.useCallback)(function(){d.resetTranscript(),D()},[d]),F=function(e,t,n){var r=("object"===w(e)?e.toString():e).replace(/[&/\\#,+()!$~%.'":*?<>{}]/g,"").replace(/  +/g," ").trim(),i=(0,s.compareTwoStringsUsingDiceCoefficient)(r,t);return i>=n?{command:e,commandWithoutSpecials:r,howSimilar:i,isFuzzyMatch:!0}:null},z=function(e,t){var n=(0,s.commandToRegExp)(e).exec(t);return n?{command:e,parameters:n.slice(1)}:null},B=(0,o.useCallback)(function(e,t){L.current.forEach(function(n){var r=n.command,i=n.callback,a=n.matchInterim,o=n.isFuzzyMatch,s=void 0!==o&&o,l=n.fuzzyMatchingThreshold,c=void 0===l?.8:l,u=n.bestMatchOnly,d=!t&&void 0!==a&&a?e.trim():t.trim(),f=(Array.isArray(r)?r:[r]).map(function(e){return s?F(e,d,c):z(e,d)}).filter(function(e){return e});if(s&&void 0!==u&&u&&f.length>=2){f.sort(function(e,t){return t.howSimilar-e.howSimilar});var p=f[0],h=p.command;i(p.commandWithoutSpecials,d,p.howSimilar,{command:h,resetTranscript:U})}else f.forEach(function(e){if(e.isFuzzyMatch){var t=e.command;i(e.commandWithoutSpecials,d,e.howSimilar,{command:t,resetTranscript:U})}else{var n=e.command,r=e.parameters;i.apply(void 0,((function(e){if(Array.isArray(e))return b(e)})(r)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||y(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([{command:n,resetTranscript:U}]))}})})},[U]),W=(0,o.useCallback)(function(e,t){n&&j((0,l.appendTranscript)(e,t)),B(e,t)},[B,n]),$=(0,o.useCallback)(function(){i&&D()},[i]);return(0,o.useEffect)(function(){var e=k.counter;return k.counter+=1,d.subscribe(e,{onListeningChange:P,onMicrophoneAvailabilityChange:M,onTranscriptChange:W,onClearTranscript:$,onBrowserSupportsSpeechRecognitionChange:h,onBrowserSupportsContinuousListeningChange:_}),function(){d.unsubscribe(e)}},[n,i,d,W,$]),{transcript:(0,s.concatTranscripts)(N,T),interimTranscript:T,finalTranscript:N,listening:O,isMicrophoneAvailable:A,resetTranscript:U,browserSupportsSpeechRecognition:p,browserSupportsContinuousListening:g}};var k={counter:0,applyPolyfill:function(e){a?a.setSpeechRecognition(e):a=new u.default(e);var t=!!e&&(0,s.browserSupportsPolyfills)();x=t,S=t},removePolyfill:function(){a?a.setSpeechRecognition(p.default):a=new u.default(p.default),S=(x=!!p.default)&&!(0,d.default)()},getRecognitionManager:function(){return a||(a=new u.default(p.default)),a},getRecognition:function(){return k.getRecognitionManager().getRecognition()},startListening:(n=g(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t,n,r,i,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=a.length>0&&void 0!==a[0]?a[0]:{}).continuous,r=t.language,i=k.getRecognitionManager(),e.next=4,i.startListening({continuous:n,language:r});case 4:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),stopListening:(r=g(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.getRecognitionManager(),e.next=3,t.stopListening();case 3:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)}),abortListening:(i=g(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.getRecognitionManager(),e.next=3,t.abortListening();case 3:case"end":return e.stop()}},e)})),function(){return i.apply(this,arguments)}),browserSupportsSpeechRecognition:function(){return x},browserSupportsContinuousListening:function(){return S}};e.exports.default=k}),p("dYC5L",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.browserSupportsPolyfills=e.exports.compareTwoStringsUsingDiceCoefficient=e.exports.commandToRegExp=e.exports.concatTranscripts=e.exports.debounce=void 0,e.exports.debounce=function(e,t,n){var r;return function(){var i=this,a=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,a)},t),o&&e.apply(i,a)}},e.exports.concatTranscripts=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(function(e){return e.trim()}).join(" ").trim()};var n=/\s*\((.*?)\)\s*/g,r=/(\(\?:[^)]+\))\?/g,i=/(\(\?)?:\w+/g,a=/\*/g,o=/[-{}[\]+?.,\\^$|#]/g;e.exports.commandToRegExp=function(e){return e instanceof RegExp?RegExp(e.source,"i"):RegExp("^"+(e=e.replace(o,"\\$&").replace(n,"(?:$1)?").replace(i,function(e,t){return t?e:"([^\\s]+)"}).replace(a,"(.*?)").replace(r,"\\s*$1?\\s*"))+"$","i")},e.exports.compareTwoStringsUsingDiceCoefficient=function(e,t){if(e=e.replace(/\s+/g,"").toLowerCase(),t=t.replace(/\s+/g,"").toLowerCase(),!e.length&&!t.length)return 1;// if both are empty strings
if(!e.length||!t.length)return 0;// if only one is empty string
if(e===t)return 1;// identical
if(1===e.length&&1===t.length||e.length<2||t.length<2)return 0;// both are 1-letter strings
for(var n=new Map,r=0;r<e.length-1;r++){var i=e.substring(r,r+2),a=n.has(i)?n.get(i)+1:1;n.set(i,a)}for(var o=0,s=0;s<t.length-1;s++){var l=t.substring(s,s+2),c=n.has(l)?n.get(l):0;c>0&&(n.set(l,c-1),o++)}return 2*o/(e.length+t.length-2)},e.exports.browserSupportsPolyfills=function(){return"undefined"!=typeof window&&void 0!==window.navigator&&void 0!==window.navigator.mediaDevices&&void 0!==window.navigator.mediaDevices.getUserMedia&&(void 0!==window.AudioContext||void 0!==window.webkitAudioContext)}}),p("efBa6",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.appendTranscript=e.exports.clearTranscript=void 0;var n=f("gJ1Uu");e.exports.clearTranscript=function(){return{type:n.CLEAR_TRANSCRIPT}},e.exports.appendTranscript=function(e,t){return{type:n.APPEND_TRANSCRIPT,payload:{interimTranscript:e,finalTranscript:t}}}}),p("gJ1Uu",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.APPEND_TRANSCRIPT=e.exports.CLEAR_TRANSCRIPT=void 0,e.exports.CLEAR_TRANSCRIPT="CLEAR_TRANSCRIPT",e.exports.APPEND_TRANSCRIPT="APPEND_TRANSCRIPT"}),p("3mWln",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.transcriptReducer=void 0;var n=f("gJ1Uu"),r=f("dYC5L");e.exports.transcriptReducer=function(e,t){switch(t.type){case n.CLEAR_TRANSCRIPT:return{interimTranscript:"",finalTranscript:""};case n.APPEND_TRANSCRIPT:return{interimTranscript:t.payload.interimTranscript,finalTranscript:(0,r.concatTranscripts)(e.finalTranscript,t.payload.finalTranscript)};default:throw Error()}}}),p("6ubUz",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n,r=(n=f("fOfvk"))&&n.__esModule?n:{default:n},i=f("dYC5L"),a=f("cjtvA");function o(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function s(e){o(a,r,i,s,l,"next",e)}function l(e){o(a,r,i,s,l,"throw",e)}s(void 0)})}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=/*#__PURE__*/function(){var e,t,n,o,c,u;function d(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,d),this.recognition=null,this.pauseAfterDisconnect=!1,this.interimTranscript="",this.finalTranscript="",this.listening=!1,this.isMicrophoneAvailable=!0,this.subscribers={},this.onStopListening=function(){},this.previousResultWasFinalOnly=!1,this.resetTranscript=this.resetTranscript.bind(this),this.startListening=this.startListening.bind(this),this.stopListening=this.stopListening.bind(this),this.abortListening=this.abortListening.bind(this),this.setSpeechRecognition=this.setSpeechRecognition.bind(this),this.disableRecognition=this.disableRecognition.bind(this),this.setSpeechRecognition(e),(0,r.default)()&&(this.updateFinalTranscript=(0,i.debounce)(this.updateFinalTranscript,250,!0))}return c=[{key:"setSpeechRecognition",value:function(e){var t=!!e&&((0,a.isNative)(e)||(0,i.browserSupportsPolyfills)());t&&(this.disableRecognition(),this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.onresult=this.updateTranscript.bind(this),this.recognition.onend=this.onRecognitionDisconnect.bind(this),this.recognition.onerror=this.onError.bind(this)),this.emitBrowserSupportsSpeechRecognitionChange(t)}},{key:"subscribe",value:function(e,t){this.subscribers[e]=t}},{key:"unsubscribe",value:function(e){delete this.subscribers[e]}},{key:"emitListeningChange",value:function(e){var t=this;this.listening=e,Object.keys(this.subscribers).forEach(function(n){(0,t.subscribers[n].onListeningChange)(e)})}},{key:"emitMicrophoneAvailabilityChange",value:function(e){var t=this;this.isMicrophoneAvailable=e,Object.keys(this.subscribers).forEach(function(n){(0,t.subscribers[n].onMicrophoneAvailabilityChange)(e)})}},{key:"emitTranscriptChange",value:function(e,t){var n=this;Object.keys(this.subscribers).forEach(function(r){(0,n.subscribers[r].onTranscriptChange)(e,t)})}},{key:"emitClearTranscript",value:function(){var e=this;Object.keys(this.subscribers).forEach(function(t){(0,e.subscribers[t].onClearTranscript)()})}},{key:"emitBrowserSupportsSpeechRecognitionChange",value:function(e){var t=this;Object.keys(this.subscribers).forEach(function(n){var r=t.subscribers[n],i=r.onBrowserSupportsSpeechRecognitionChange,a=r.onBrowserSupportsContinuousListeningChange;i(e),a(e)})}},{key:"disconnect",value:function(e){if(this.recognition&&this.listening)switch(e){case"ABORT":this.pauseAfterDisconnect=!0,this.abort();break;case"RESET":this.pauseAfterDisconnect=!1,this.abort();break;default:this.pauseAfterDisconnect=!0,this.stop()}}},{key:"disableRecognition",value:function(){this.recognition&&(this.recognition.onresult=function(){},this.recognition.onend=function(){},this.recognition.onerror=function(){},this.listening&&this.stopListening())}},{key:"onError",value:function(e){e&&e.error&&"not-allowed"===e.error&&(this.emitMicrophoneAvailabilityChange(!1),this.disableRecognition())}},{key:"onRecognitionDisconnect",value:function(){this.onStopListening(),this.listening=!1,this.pauseAfterDisconnect?this.emitListeningChange(!1):this.recognition&&(this.recognition.continuous?this.startListening({continuous:this.recognition.continuous}):this.emitListeningChange(!1)),this.pauseAfterDisconnect=!1}},{key:"updateTranscript",value:function(e){var t=e.results,n=e.resultIndex,a=void 0===n?t.length-1:n;this.interimTranscript="",this.finalTranscript="";for(var o=a;o<t.length;++o)t[o].isFinal&&(!(0,r.default)()||t[o][0].confidence>0)?this.updateFinalTranscript(t[o][0].transcript):this.interimTranscript=(0,i.concatTranscripts)(this.interimTranscript,t[o][0].transcript);var s=!1;""===this.interimTranscript&&""!==this.finalTranscript?(this.previousResultWasFinalOnly&&(s=!0),this.previousResultWasFinalOnly=!0):this.previousResultWasFinalOnly=!1,s||this.emitTranscriptChange(this.interimTranscript,this.finalTranscript)}},{key:"updateFinalTranscript",value:function(e){this.finalTranscript=(0,i.concatTranscripts)(this.finalTranscript,e)}},{key:"resetTranscript",value:function(){this.disconnect("RESET")}},{key:"startListening",value:(e=s(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t,n,r,i,a,o,s=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=void 0!==(n=(t=s.length>0&&void 0!==s[0]?s[0]:{}).continuous)&&n,i=t.language,this.recognition){e.next=3;break}return e.abrupt("return");case 3:if(a=r!==this.recognition.continuous,o=i&&i!==this.recognition.lang,!(a||o)){e.next=11;break}if(!this.listening){e.next=9;break}return e.next=9,this.stopListening();case 9:this.recognition.continuous=a?r:this.recognition.continuous,this.recognition.lang=o?i:this.recognition.lang;case 11:if(this.listening){e.next=22;break}return this.recognition.continuous||(this.resetTranscript(),this.emitClearTranscript()),e.prev=13,e.next=16,this.start();case 16:this.emitListeningChange(!0),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(13),e.t0 instanceof DOMException||this.emitMicrophoneAvailabilityChange(!1);case 22:case"end":return e.stop()}},e,this,[[13,19]])})),function(){return e.apply(this,arguments)})},{key:"abortListening",value:(t=s(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.disconnect("ABORT"),this.emitListeningChange(!1),e.next=4,new Promise(function(e){t.onStopListening=e});case 4:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"stopListening",value:(n=s(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.disconnect("STOP"),this.emitListeningChange(!1),e.next=4,new Promise(function(e){t.onStopListening=e});case 4:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"getRecognition",value:function(){return this.recognition}},{key:"start",value:(o=s(/*#__PURE__*/regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.recognition&&!this.listening)){e.next=4;break}return e.next=3,this.recognition.start();case 3:this.listening=!0;case 4:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)})},{key:"stop",value:function(){this.recognition&&this.listening&&(this.recognition.stop(),this.listening=!1)}},{key:"abort",value:function(){this.recognition&&this.listening&&(this.recognition.abort(),this.listening=!1)}}],l(d.prototype,c),u&&l(d,u),d}();e.exports.default=c}),p("fOfvk",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,e.exports.default=function(){return/(android)/i.test("undefined"!=typeof navigator?navigator.userAgent:"")}}),p("cjtvA",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=e.exports.isNative=void 0;var n="undefined"!=typeof window&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition);e.exports.isNative=function(e){return e===n},e.exports.default=n});var h=f("ayMG0"),m=f("acw62"),g={};o(g,"createRoot",()=>a8,e=>a8=e),o(g,"hydrateRoot",()=>a7,e=>a7=e);var w={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),a8=(w=f("Xw6Mv")).createRoot,a7=w.hydrateRoot;var h=f("ayMG0"),m=f("acw62");f("lzNIT");var v=f("aphAM"),y=f("lzNIT"),b=f("hfliI"),x={};x=f("6VZtt");let S=// Default to a dummy "batch" implementation that just runs the callback
function(e){e()};// Allow injecting another batching function later
const k=()=>S;var m=(f("acw62"),f("acw62"),f("acw62"));const _=Symbol.for("react-redux-context"),E="undefined"!=typeof globalThis?globalThis:/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */{},C=/*#__PURE__*/function(){var e;if(!m.createContext)return{};let t=null!=(e=E[_])?e:E[_]=new Map,n=t.get(m.createContext);return n||(n=m.createContext(null),t.set(m.createContext,n)),n}();function T(e=C){return function(){let t=(0,m.useContext)(e);return t}}const N=/*#__PURE__*/T();let j=()=>{throw Error("uSES not initialized!")};const I=(e,t)=>e===t,O=/*#__PURE__*/function(e=C){let t=e===C?N:T(e);return function(e,n={}){let{equalityFn:r=I,stabilityCheck:i,noopCheck:a}="function"==typeof n?{equalityFn:n}:n,{store:o,subscription:s,getServerState:l,stabilityCheck:c,noopCheck:u}=t();(0,m.useRef)(!0);let d=(0,m.useCallback)({[e.name](t){let n=e(t);return n}}[e.name],[e,c,i]),f=j(s.addNestedSub,o.getState,l||o.getState,d,r);return(0,m.useDebugValue)(f),f}}();var P={};P=f("dNL7g");/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var R={};R[P.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},R[P.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var m=f("acw62");f("9cCWX");const A={notify(){},get:()=>[]};var m=f("acw62");const M=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),L=M?m.useLayoutEffect:m.useEffect;var m=f("acw62"),D=function({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:a="once"}){let o=m.useMemo(()=>{let t=function(e,t){let n;let r=A,i=0,a=!1;// Reasons to keep the subscription active
function o(){c.onStateChange&&c.onStateChange()}function s(){i++,n||(n=t?t.addNestedSub(o):e.subscribe(o),r=// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
function(){let e=k(),t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}function l(){i--,n&&0===i&&(n(),n=void 0,r.clear(),r=A)}let c={addNestedSub:function(e){s();let t=r.subscribe(e),n=!1;// cleanup nested sub
return()=>{n||(n=!0,t(),l())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return a},trySubscribe:function(){a||(a=!0,s())},tryUnsubscribe:function(){a&&(a=!1,l())},getListeners:()=>r};return c}(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:a}},[e,r,i,a]),s=m.useMemo(()=>e.getState(),[e]);return L(()=>{let{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[o,s]),/*#__PURE__*/m.createElement((t||C).Provider,{value:o},n)};function U(e=C){let t=e===C?N:T(e);return function(){let{store:e}=t();// @ts-ignore
return e}}const F=/*#__PURE__*/U(),z=/*#__PURE__*/function(e=C){let t=e===C?F:U(e);return function(){let e=t();// @ts-ignore
return e.dispatch}}();j=x.useSyncExternalStoreWithSelector,b.useSyncExternalStore,S=w.unstable_batchedUpdates;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var B={},W=B={};function $(){throw Error("setTimeout has not been defined")}function V(){throw Error("clearTimeout has not been defined")}function H(e){if(a9===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((a9===$||!a9)&&setTimeout)return a9=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return a9(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return a9.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return a9.call(this,e,0)}}}!function(){try{a9="function"==typeof setTimeout?setTimeout:$}catch(e){a9=$}try{oe="function"==typeof clearTimeout?clearTimeout:V}catch(e){oe=V}}();var q=[],K=!1,G=-1;function Q(){K&&ot&&(K=!1,ot.length?q=ot.concat(q):G=-1,q.length&&Y())}function Y(){if(!K){var e=H(Q);K=!0;for(var t=q.length;t;){for(ot=q,q=[];++G<t;)ot&&ot[G].run();G=-1,t=q.length}ot=null,K=!1,function(e){if(oe===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((oe===V||!oe)&&clearTimeout)return oe=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
oe(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return oe.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return oe.call(this,e)}}}(e)}}// v8 likes predictible objects
function J(e,t){this.fun=e,this.array=t}function X(){}W.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];q.push(new J(e,t)),1!==q.length||K||H(Y)},J.prototype.run=function(){this.fun.apply(null,this.array)},W.title="browser",W.browser=!0,W.env={},W.argv=[],W.version="",W.versions={},W.on=X,W.addListener=X,W.once=X,W.off=X,W.removeListener=X,W.removeAllListeners=X,W.emit=X,W.prependListener=X,W.prependOnceListener=X,W.listeners=function(e){return[]},W.binding=function(e){throw Error("process.binding is not supported")},W.cwd=function(){return"/"},W.chdir=function(e){throw Error("process.chdir is not supported")},W.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(// Surrogate Pair
i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},ee=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){// Surrogate Pair
let a=e[n++],o=e[n++],s=e[n++],l=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},et={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4,d=(15&o)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),r.push(n[c],n[u],n[d],n[f])}return r.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Z(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):ee(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length,o=a?n[e.charAt(t)]:0;++t;let s=t<e.length,l=s?n[e.charAt(t)]:64;++t;let c=t<e.length,u=c?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==l||null==u)throw new en;let d=i<<2|o>>4;if(r.push(d),64!==l){let e=o<<4&240|l>>2;if(r.push(e),64!==u){let e=l<<6&192|u;r.push(e)}}}return r},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class en extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const er=function(e){let t=Z(e);return et.encodeByteArray(t,!0)},ei=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return er(e).replace(/\./g,"")},ea=function(e){try{return et.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},eo=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==c)return c;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,es=()=>{if(void 0===B||void 0===B.env)return;let e=void 0;if(e)return JSON.parse(e)},el=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&ea(e[1]);return t&&JSON.parse(t)},ec=()=>{try{return eo()||es()||el()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eu=e=>{var t,n;return null===(n=null===(t=ec())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ed=()=>{var e;return null===(e=ec())||void 0===e?void 0:e.config},ef=e=>{var t;return null===(t=ec())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function eh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function em(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function eg(){try{return"object"==typeof indexedDB}catch(e){return!1}}/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */function ew(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class ev extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */n){super(t),this.code=e,this.customData=n,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,ev.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ey.prototype.create)}}class ey{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(eb,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${r}).`,s=new ev(r,o,n);return s}}const eb=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function ex(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],a=t[i];if(eS(n)&&eS(a)){if(!ex(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function eS(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function ek(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function e_(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function eE(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class eC{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=eT),void 0===r.error&&(r.error=eT),void 0===r.complete&&(r.complete=eT);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){// nothing
}}),this.observers.push(r),i}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){// Ignore exceptions raised in Observers or missing methods of an
// Observer.
// Log error to console. b/31404806
"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eT(){// do nothing
}/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */function eN(e,t=1e3,n=2){// Calculates an exponentially increasing value.
// Deviation: calculates value from count and a constant interval, so we only need to save value
// and count to restore state.
let r=t*Math.pow(n,e);// Limits backoff to max to avoid effectively permanent backoff.
return Math.min(144e5,r+Math.round(// Deviation: changes multiplication order to improve readability.
.5*r*// A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
// if we add or subtract.
(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ej(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class eI{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class eP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ep;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eO})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=eO){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eO){return this.instances.has(e)}getOptions(e=eO){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eO?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return n||null}normalizeInstanceIdentifier(e=eO){return this.component?this.component.multipleInstances?e:eO:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class eR{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new eP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */const eA=[];(a5=on||(on={}))[a5.DEBUG=0]="DEBUG",a5[a5.VERBOSE=1]="VERBOSE",a5[a5.INFO=2]="INFO",a5[a5.WARN=3]="WARN",a5[a5.ERROR=4]="ERROR",a5[a5.SILENT=5]="SILENT";const eM={debug:on.DEBUG,verbose:on.VERBOSE,info:on.INFO,warn:on.WARN,error:on.ERROR,silent:on.SILENT},eL=on.INFO,eD={[on.DEBUG]:"log",[on.VERBOSE]:"log",[on.INFO]:"info",[on.WARN]:"warn",[on.ERROR]:"error"},eU=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=eD[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eF{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=eL,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=eU,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */eA.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in on))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?eM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,on.DEBUG,...e),this._logHandler(this,on.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,on.VERBOSE,...e),this._logHandler(this,on.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,on.INFO,...e),this._logHandler(this,on.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,on.WARN,...e),this._logHandler(this,on.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,on.ERROR,...e),this._logHandler(this,on.ERROR,...e)}}const ez=(e,t)=>t.some(t=>e instanceof t),eB=new WeakMap,eW=new WeakMap,e$=new WeakMap,eV=new WeakMap,eH=new WeakMap;let eq={get(e,t,n){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return eW.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||e$.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return eK(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eK(n){var r;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(eK(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{// Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
// (see wrapFunction).
t instanceof IDBCursor&&eB.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
eH.set(t,e),t}(n);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(eV.has(n))return eV.get(n);let i="function"==typeof(r=n)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
r.apply(eG(this),e),eK(eB.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return eK(r.apply(eG(this),e))}:function(e,...t){let n=r.call(eG(this),e,...t);return e$.set(n,e.sort?e.sort():[e]),eK(n)}:(r instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(eW.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});// Cache it for later retrieval.
eW.set(e,t)}(r),ez(r,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,eq):r;return i!==n&&(eV.set(n,i),eH.set(i,n)),i}const eG=e=>eH.get(e);/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */function eQ(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=eK(o);return r&&o.addEventListener("upgradeneeded",e=>{r(eK(o.result),e.oldVersion,e.newVersion,eK(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}const eY=["get","getKey","getAll","getAllKeys","count"],eJ=["put","add","delete","clear"],eX=new Map;function eZ(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eX.get(t))return eX.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=eJ.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eY.includes(n)))return;let a=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return eX.set(t,a),a}eq={...a4=eq,get:(e,t,n)=>eZ(e,t)||a4.get(e,t,n),has:(e,t)=>!!eZ(e,t)||a4.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const e1="@firebase/app",e2="0.10.5",e4=new eF("@firebase/app"),e3="[DEFAULT]",e5={[e1]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},e6=new Map,e8=new Map,e7=new Map;/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function e9(e,t){try{e.container.addComponent(t)}catch(n){e4.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function te(e){let t=e.name;if(e7.has(t))return e4.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let n of(e7.set(t,e),e6.values()))e9(n,e);for(let t of e8.values())e9(t,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function tt(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 *
 * @param obj - an object of type FirebaseApp.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */function tn(e){return void 0!==e.settings}const tr=new ey("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eI("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The current SDK version.
 *
 * @public
 */const ta="10.12.2";function to(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:e3,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw tr.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(i)});if(n||(n=ed()),!n)throw tr.create("no-options"/* AppError.NO_OPTIONS */);let a=e6.get(i);if(a){// return the existing app if options and config deep equal the ones in the existing app.
if(ex(n,a.options)&&ex(r,a.config))return a;throw tr.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:i})}let o=new eR(i);for(let e of e7.values())o.addComponent(e);let s=new ti(n,r,o);return e6.set(i,s),s}/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function ts(e=e3){let t=e6.get(e);if(!t&&e===e3&&ed())return to();if(!t)throw tr.create("no-app"/* AppError.NO_APP */,{appName:e});return t}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function tl(e,t,n){var r;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let i=null!==(r=e5[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),e4.warn(e.join(" "));return}te(new eI(`${i}-version`,()=>({library:i,version:t}),"VERSION"/* ComponentType.VERSION */))}const tc="firebase-heartbeat-store";let tu=null;function td(){return tu||(tu=eQ("firebase-heartbeat-database",1,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
if(0===t)try{e.createObjectStore(tc)}catch(e){// Safari/iOS browsers throw occasional exceptions on
// db.createObjectStore() that may be a bug. Avoid blocking
// the rest of the app functionality.
console.warn(e)}}}).catch(e=>{throw tr.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),tu}async function tf(e){try{let t=await td(),n=t.transaction(tc),r=await n.objectStore(tc).get(th(e));return(// We already have the value but tx.done can throw,
// so we need to await it here to catch errors
await n.done,r)}catch(e){if(e instanceof ev)e4.warn(e.message);else{let t=tr.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});e4.warn(t.message)}}}async function tp(e,t){try{let n=await td(),r=n.transaction(tc,"readwrite"),i=r.objectStore(tc);await i.put(t,th(e)),await r.done}catch(e){if(e instanceof ev)e4.warn(e.message);else{let t=tr.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});e4.warn(t.message)}}}function th(e){return`${e.name}!${e.options.appId}`}class tm{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tw(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=tg();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){var e;// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tg(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let n=[],r=e.slice();for(let i of e){// Look for an existing entry with the same user agent.
let e=n.find(e=>e.agent===i.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(i.date),tv(n)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
n.push({agent:i.agent,dates:[i.date]}),tv(n)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
n.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=ei(JSON.stringify({version:2,heartbeats:n}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=r,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],// Do not wait for this, to reduce latency.
this._storage.overwrite(this._heartbeatsCache)),i)}}function tg(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!eg()&&ew().then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await tf(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tp(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tp(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function tv(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return ei(JSON.stringify({version:2,heartbeats:e})).length}function ty(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function tb(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}te(new eI("platform-logger",e=>new e0(e),"PRIVATE"/* ComponentType.PRIVATE */)),te(new eI("heartbeat",e=>new tm(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
tl(e1,e2,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
tl(e1,e2,"esm2017"),// Register platform SDK identifier (no version).
tl("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const tx=new ey("auth","Firebase",tb()),tS=new eF("@firebase/auth");function tk(e,...t){tS.logLevel<=on.ERROR&&tS.error(`Auth (${ta}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(e,...t){throw tN(e,...t)}function tE(e,...t){return tN(e,...t)}function tC(e,t,n){let r=Object.assign(Object.assign({},tb()),{[t]:n}),i=new ey("auth","Firebase",r);return i.create(t,{appName:e.name})}function tT(e){return tC(e,"operation-not-supported-in-this-environment"/* AuthErrorCode.OPERATION_NOT_SUPPORTED */,"Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tN(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return tx.create(e,...t)}function tj(e,t,...n){if(!e)throw tN(t,...n)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function tI(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw tk(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tP(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class tR{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||tI("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eh())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===tP()||"https:"===tP()||em()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(e,t){e.emulator||tI("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void tI("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void tI("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void tI("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Map from errors returned by the server to errors to developer visible errors
 */const tL={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,INVALID_LOGIN_CREDENTIALS:"invalid-credential"/* AuthErrorCode.INVALID_CREDENTIAL */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_CREDENTIAL */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_CREDENTIAL */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_CREDENTIAL */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},tD=new tR(3e4,6e4);function tU(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tF(e,t,n,r,i={}){return tz(e,i,async()=>{let i={},a={};r&&("GET"/* HttpMethod.GET */===t?a=r:i={body:JSON.stringify(r)});let o=ek(Object.assign({key:e.config.apiKey},a)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(s["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),tM.fetch()(tW(e,e.config.apiHost,n,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))})}async function tz(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},tL),t);try{let t=new t$(e),i=await Promise.race([n(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let a=await i.json();if("needConfirmation"in a)throw tV(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,a);if(i.ok&&!("errorMessage"in a))return a;{let t=i.ok?a.errorMessage:a.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===n)throw tV(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,a);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===n)throw tV(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,a);if("USER_DISABLED"/* ServerError.USER_DISABLED */===n)throw tV(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,a);let s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw tC(e,s,o);t_(e,s)}}catch(t){if(t instanceof ev)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
t_(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function tB(e,t,n,r,i={}){let a=await tF(e,t,n,r,i);return"mfaPendingCredential"in a&&t_(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:a}),a}function tW(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?tA(e.config,i):`${e.config.apiScheme}://${i}`}class t${constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(tE(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),tD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tV(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=tE(e,t,r);return(// We know customData is defined on error because errorParams is defined
i.customData._tokenResponse=n,i)}function tH(e){return void 0!==e&&void 0!==e.enterprise}class tq{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The list of providers and their enablement status for reCAPTCHA Enterprise.
         */this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}/**
     * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
     *
     * @param providerStr - The provider whose enforcement state is to be returned.
     * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
     */getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE"/* EnforcementState.ENFORCE */;case"AUDIT":return"AUDIT"/* EnforcementState.AUDIT */;case"OFF":return"OFF"/* EnforcementState.OFF */;default:return"ENFORCEMENT_STATE_UNSPECIFIED"/* EnforcementState.ENFORCEMENT_STATE_UNSPECIFIED */}}(t.enforcementState);return null}/**
     * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
     *
     * @param providerStr - The provider whose enablement state is to be returned.
     * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
     */isProviderEnabled(e){return"ENFORCE"/* EnforcementState.ENFORCE */===this.getProviderEnforcementState(e)||"AUDIT"/* EnforcementState.AUDIT */===this.getProviderEnforcementState(e)}}async function tK(e,t){return tF(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,tU(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tG(e,t){return tF(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function tQ(e,t){return tF(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tY(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function tJ(e,t=!1){let n=ej(e),r=await n.getIdToken(t),i=tZ(r);tj(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a="object"==typeof i.firebase?i.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:tY(tX(i.auth_time)),issuedAtTime:tY(tX(i.iat)),expirationTime:tY(tX(i.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function tX(e){return 1e3*Number(e)}function tZ(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return tk("JWT malformed, contained fewer than 3 sections"),null;try{let e=ea(n);if(!e)return tk("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return tk("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function t0(e){let t=tZ(e);return tj(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tj(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tj(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof ev&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){// Only retry on network errors
(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tY(this.lastLoginAt),this.creationTime=tY(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t3(e){var t;let n=e.auth,r=await e.getIdToken(),i=await t1(e,tQ(n,{idToken:r}));tj(null==i?void 0:i.users.length,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a=i.users[0];e._notifyReloadListener(a);let o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?t6(a.providerUserInfo):[],s=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),l=e.isAnonymous,c=!(e.email&&a.passwordHash)&&!(null==s?void 0:s.length),u={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new t4(a.createdAt,a.lastLoginAt),isAnonymous:!!l&&c};Object.assign(e,u)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function t5(e){let t=ej(e);await t3(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function t6(e){return e.map(e=>{var{providerId:t}=e,n=ty(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t8(e,t){let n=await tz(e,{},async()=>{let n=ek({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=tW(e,r,"/v1/token"/* Endpoint.TOKEN */,`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",tM.fetch()(a,{method:"POST"/* HttpMethod.POST */,headers:o,body:n})});// The response comes back in snake_case. Convert to camel:
return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function t7(e,t){return tF(e,"POST"/* HttpMethod.POST */,"/v2/accounts:revokeToken"/* Endpoint.REVOKE_TOKEN */,tU(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class t9{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){tj(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tj(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tj(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):t0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){tj(0!==e.length,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t=t0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(tj(this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await t8(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new t9;return n&&(tj("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.refreshToken=n),r&&(tj("string"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.accessToken=r),i&&(tj("number"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t9,this.toJSON())}_performRefresh(){return tI("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){tj("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class nt{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ty(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new t2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new t4(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await t1(this,this.stsTokenManager.getToken(this.auth,e));return tj(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tJ(this,e)}reload(){return t5(this)}_assign(e){this!==e&&(tj(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
tj(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await t3(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(tT(this.auth));let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await t1(this,tG(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,a,o,s,l,c;let u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(a=t.photoURL)&&void 0!==a?a:void 0,h=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,w=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:x,stsTokenManager:S}=t;tj(v&&S,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let k=t9.fromJSON(this.name,S);tj("string"==typeof v,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),ne(u,e.name),ne(d,e.name),tj("boolean"==typeof y,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),tj("boolean"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),ne(f,e.name),ne(p,e.name),ne(h,e.name),ne(m,e.name),ne(g,e.name),ne(w,e.name);let _=new nt({uid:v,auth:e,email:d,emailVerified:y,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:h,stsTokenManager:k,createdAt:g,lastLoginAt:w});return x&&Array.isArray(x)&&(_.providerData=x.map(e=>Object.assign({},e))),m&&(_._redirectEventId=m),_}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,n=!1){let r=new t9;r.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let i=new nt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return(// Updates the user info and data and resolves with a user instance.
await t3(i),i)}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromGetAccountInfoResponse(e,t,n){let r=t.users[0];tj(void 0!==r.localId,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=void 0!==r.providerUserInfo?t6(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(null==i?void 0:i.length),o=new t9;o.updateFromIdToken(n);// Initialize the Firebase Auth user.
let s=new nt({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new t4(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null==i?void 0:i.length)};return Object.assign(s,l),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Map;function nr(e){e instanceof Function||tI("Expected a class definition");let t=nn.get(e);return t?t instanceof e||tI("Instance stored in cache mismatched with class"):(t=new e,nn.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,t,n){return`firebase:${e}:${t}:${n}`}ni.type="NONE";class no{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=na(this.userKey,r.apiKey,i),this.fullPersistenceKey=na("persistence"/* KeyName.PERSISTENCE_USER */,r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new no(nr(ni),e,n);// Eliminate any persistences that are not available
let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||nr(ni),a=na(n,e.config.apiKey,e.name),o=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let n of t)try{let t=await n._get(a);if(t){let r=nt._fromJSON(e,t);// throws for unparsable blob (wrong format)
n!==i&&(o=r),i=n;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length&&(i=s[0],o&&// we'll just let it bubble to surface the error.
await i._set(a,o.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(a)}catch(e){}}))),new no(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Determine the browser for the purposes of reporting usage to the API
 */function ns(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(nd(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(nl(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(np(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(nh(t))return"Webos"/* BrowserName.WEBOS */;if(nc(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||nu(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(nf(t))return"Android"/* BrowserName.ANDROID */;let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"/* BrowserName.OTHER */}function nl(e=eh()){return/firefox\//i.test(e)}function nc(e=eh()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nu(e=eh()){return/crios\//i.test(e)}function nd(e=eh()){return/iemobile/i.test(e)}function nf(e=eh()){return/android/i.test(e)}function np(e=eh()){return/blackberry/i.test(e)}function nh(e=eh()){return/webos/i.test(e)}function nm(e=eh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ng(e=eh()){// TODO: implement getBrowserName equivalent for OS.
return nm(e)||nf(e)||nh(e)||np(e)||/windows phone/i.test(e)||nd(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * Determine the SDK version string
 */function nw(e,t=[]){let n;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
n=ns(eh());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
n=`${ns(eh())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${n}/JsCore/${ta}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let n=t=>new Promise((n,r)=>{try{let r=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    n(r)}catch(e){// Sync callback throws.
    r(e)}});// Attach the onAbort if present
n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function ny(e,t={}){return tF(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,tU(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class nb{constructor(e){var t,n,r,i;// Only include custom strength options defined in the response.
let a=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=a.minPasswordLength)&&void 0!==t?t:6,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),void 0!==a.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),void 0!==a.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),void 0!==a.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),void 0!==a.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,a,o;let s={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),// Combine the status into single isValid property.
s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(a=s.containsNumericCharacter)||void 0===a||a),s.isValid&&(s.isValid=null===(o=s.containsNonAlphanumericCharacter)||void 0===o||o),s)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let n;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */n>="a"&&n<="z",/* containsUppercaseCharacter= */n>="A"&&n<="Z",/* containsNumericCharacter= */n>="0"&&n<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(n))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nS(this),this.idTokenSubscription=new nS(this),this.beforeStateQueue=new nv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nr(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await tQ(this,{idToken:e}),n=await nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tn(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}// First check to see if we have a pending redirect event.
let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);// If the stored user (i.e. the old "currentUser") has a redirectId that
// matches the redirect user, then we want to initially sign in with the
// new user object from result.
// TODO(samgho): More thoroughly test all of this
(!n||n===a)&&(null==o?void 0:o.user)&&(r=o.user,i=!0)}// If no user in persistence, there is no current user. Set to null.
if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(tj(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await t3(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(tT(this));// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?ej(e):null;return t&&tj(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&tj(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(tT(this)):(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return tn(this.app)?Promise.reject(tT(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await ny(this),t=new nb(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ey("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}/**
     * Revokes the given access token. Currently only supports Apple OAuth access tokens.
     */async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN"/* TokenType.ACCESS_TOKEN */,token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await t7(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&nr(e)||this._popupRedirectResolver;tj(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await no.create(this,[nr(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(tj(o,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
o.then(()=>{a||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,n,r);return()=>{a=!0,i()}}{let n=e.addObserver(t);return()=>{a=!0,n()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return tj(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=n);// If the App Check service exists, add the App Check token in the headers
let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=r),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){tS.logLevel<=on.WARN&&tS.warn(`Auth (${ta}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class nS{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let n=new eC(e,void 0);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return tj(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nk={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n_(e){return`__${e}${Math.floor(1e6*Math.random())}`}class nE{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=ej(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{tK(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(r=>{if(void 0===r.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new tq(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;tH(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&tH(window.grecaptcha))r(n,e,i);else{var a;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=nk.recaptchaEnterpriseScript;0!==t.length&&(t+=n),(a=t,nk.loadJS(a)).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function nC(e,t,n,r=!1){let i;let a=new nE(e);try{i=await a.verify(n)}catch(e){i=await a.verify(n,!0)}let o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),o}async function nT(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"/* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */))return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await nC(e,t,n,"getOobCode"/* RecaptchaActionName.GET_OOB_CODE */===n);return r(e,i)}});{let i=await nC(e,t,n,"getOobCode"/* RecaptchaActionName.GET_OOB_CODE */===n);return r(e,i)}}function nN(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function nj(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class nI{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return tI("not implemented")}/** @internal */_getIdTokenResponse(e){return tI("not implemented")}/** @internal */_linkToIdToken(e,t){return tI("not implemented")}/** @internal */_getReauthenticationResolver(e){return tI("not implemented")}}// Used for linking an email/password account to an existing idToken. Uses the same request/response
// format as updateEmailPassword.
async function nO(e,t){return tF(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(e,t){return tB(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,tU(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(e,t){return tB(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,tU(e,t))}async function nA(e,t){return tB(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,tU(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class nM extends nI{/** @internal */constructor(/** @internal */e,/** @internal */t,n,/** @internal */r=null){super("password"/* ProviderId.PASSWORD */,n),this._email=e,this._password=t,this._tenantId=r}/** @internal */static _fromEmailAndPassword(e,t){return new nM(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,n=null){return new nM(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,n)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};return nT(e,t,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */,nP);case"emailLink"/* SignInMethod.EMAIL_LINK */:return nR(e,{email:this._email,oobCode:this._password});default:t_(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};return nT(e,n,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */,nO);case"emailLink"/* SignInMethod.EMAIL_LINK */:return nA(e,{idToken:t,email:this._email,oobCode:this._password});default:t_(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(e,t){return tB(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,tU(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class nD extends nI{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new nD(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):t_("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ty(t,["providerId","signInMethod"]);if(!n||!r)return null;let a=new nD(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return nL(e,t)}/** @internal */_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,nL(e,n)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,nL(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ek(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nU(e,t){return tF(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,tU(e,t))}async function nF(e,t){return tB(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tU(e,t))}async function nz(e,t){let n=await tB(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tU(e,t));if(n.temporaryProof)throw tV(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,n);return n}const nB={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function nW(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return tB(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,tU(e,n),nB)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class n$ extends nI{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new n$({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new n$({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return nF(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return nz(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return nW(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new n$({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class nV{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,n,r,i,a,o;let s=e_(eE(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,c=null!==(n=s.oobCode)&&void 0!==n?n:null,u=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);// Validate API key, code and mode.
tj(l&&c&&u,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(a=s.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=s.tenantId)&&void 0!==o?o:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=e_(eE(e)).link,n=t?e_(eE(t)).deep_link_id:null,r=e_(eE(e)).deep_link_id,i=r?e_(eE(r)).link:null;return i||r||n||t||e}(e);try{return new nV(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class nH{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=nH.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return nM._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let n=nV.parseLink(t);return tj(n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),nM._fromEmailAndCode(e,n.code,n.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */nH.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */nH.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */nH.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class nq{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class nK extends nq{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class nG extends nK{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return nD._fromParams({providerId:nG.PROVIDER_ID,signInMethod:nG.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nG.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nG.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nG.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */nG.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */nG.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class nQ extends nK{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return nD._fromParams({providerId:nQ.PROVIDER_ID,signInMethod:nQ.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nQ.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nQ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nQ.credential(t,n)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */nQ.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */nQ.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class nY extends nK{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return nD._fromParams({providerId:nY.PROVIDER_ID,signInMethod:nY.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nY.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nY.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nY.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */nY.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */nY.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class nJ extends nK{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return nD._fromParams({providerId:nJ.PROVIDER_ID,signInMethod:nJ.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return nJ.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return nJ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return nJ.credential(t,n)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nX(e,t){return tB(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,tU(e,t))}/** Always set to {@link SignInMethod}.TWITTER. */nJ.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */nJ.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await nt._fromIdTokenResponse(e,n,r),a=n0(n),o=new nZ({user:i,providerId:a,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,/* reload */!0);let r=n0(n);return new nZ({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function n0(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1 extends ev{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,n1.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new n1(e,t,n,r)}}function n2(e,t,n,r){let i="reauthenticate"/* OperationType.REAUTHENTICATE */===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw n1._fromErrorAndOperation(e,n,t,r);throw n})}async function n4(e,t,n=!1){let r=await t1(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nZ._forOperation(e,"link"/* OperationType.LINK */,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n3(e,t,n=!1){let{auth:r}=e;if(tn(r.app))return Promise.reject(tT(r));let i="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let a=await t1(e,n2(r,i,t,e),n);tj(a.idToken,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o=tZ(a.idToken);tj(o,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:s}=o;return tj(e.uid===s,r,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),nZ._forOperation(e,i,a)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&t_(r,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n5(e,t,n=!1){if(tn(e.app))return Promise.reject(tT(e));let r="signIn"/* OperationType.SIGN_IN */,i=await n2(e,r,t),a=await nZ._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * This method is not supported by {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */async function n6(e,t){return n5(ej(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates the password policy cached in the {@link Auth} instance if a policy is already
 * cached for the project or tenant.
 *
 * @remarks
 * We only fetch the password policy if the password did not meet policy requirements and
 * there is an existing policy cached. A developer must call validatePassword at least
 * once for the cache to be automatically updated.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @private
 */async function n8(e){let t=ej(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * This method is not supported on {@link Auth} instances created with a
 * {@link @firebase/app#FirebaseServerApp}.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */async function n7(e,t,n){if(tn(e.app))return Promise.reject(tT(e));let r=ej(e),i=nT(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */},"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */,nX),a=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&n8(e),t}),o=await nZ._fromIdTokenResponse(r,"signIn"/* OperationType.SIGN_IN */,a);return await r._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n9(e,t){return tF(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates a user's profile data.
 *
 * @param user - The user.
 * @param profile - The profile's `displayName` and `photoURL` to update.
 *
 * @public
 */async function re(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;let r=ej(e),i=await r.getIdToken(),a=await t1(r,n9(r.auth,{idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0}));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;// Update the password provider as well
let o=r.providerData.find(({providerId:e})=>"password"/* ProviderId.PASSWORD */===e);o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}new WeakMap;const rt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class rn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(rt,"1"),this.storage.removeItem(rt),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class rr extends rn{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=eh();return nc(e)||nm(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=ng(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let n=this.storage.getItem(t),r=this.localCache[t];// If local map value does not match, trigger listener with storage event.
// Differentiate this simulated event from the real storage event.
n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let r=this.storage.getItem(n);// Value not synchronized, synchronize manually.
if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);/** Detects Internet Explorer. */(function(){let e=eh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rr.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends rn{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}ri.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface class for receiving messages.
 *
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new ra(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:n});let a=Array.from(i).map(async t=>t(e.origin,r)),o=await Promise.all(a.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:n,response:o})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}ra.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface for sending messages and waiting for a completion response.
 *
 */class rs{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,n=50/* _TimeoutDuration.ACK */){let r,i;let a="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!a)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((o,s)=>{let l=ro("",20);a.port1.start();let c=setTimeout(()=>{s(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},n);i={messageChannel:a,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(c),r=setTimeout(()=>{s(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),s(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(i),a.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[a.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function rl(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){return void 0!==rl().WorkerGlobalScope&&"function"==typeof rl().importScripts}async function ru(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="firebaseLocalStorageDb",rf="firebaseLocalStorage",rp="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class rh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rm(e,t){return e.transaction([rf],t?"readwrite":"readonly").objectStore(rf)}function rg(){let e=indexedDB.open(rd,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(rf,{keyPath:rp})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;// Strange bug that occurs in Firefox when multiple tabs are opened at the
// same time. The only way to recover seems to be deleting the database
// and re-initializing it.
// https://github.com/firebase/firebase-js-sdk/issues/634
n.objectStoreNames.contains(rf)?t(n):(// Need to close the database or else you get a `blocked` event
n.close(),await function(){let e=indexedDB.deleteDatabase(rd);return new rh(e).toPromise()}(),t(await rg()))})})}async function rw(e,t,n){let r=rm(e,!0).put({[rp]:t,value:n});return new rh(r).toPromise()}async function rv(e,t){let n=rm(e,!1).get(t),r=await new rh(n).toPromise();return void 0===r?null:r.value}function ry(e,t){let n=rm(e,!0).delete(t);return new rh(n).toPromise()}class rb{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rg()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return rc()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=ra._getInstance(rc()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await ru(),!this.activeServiceWorker)return;this.sender=new rs(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let n=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rg();return await rw(e,rt,"1"),await ry(e,rt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rw(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>rv(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ry(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=rm(e,!1).getAll();return new rh(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;if(0!==e.length)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function rx(e,t,n){var r,i,a;let o=await n.verify();try{let s;if(tj("string"==typeof o,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),tj("recaptcha"===n.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){let t=s.session;if("phoneNumber"in s){tj("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}},tF(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,tU(e,i)));return n.phoneSessionInfo.sessionInfo}{tj("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;tj(n,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let i=await (a={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}},tF(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,tU(e,a)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await nU(e,{phoneNumber:s.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}rb.type="LOCAL",n_("rcb"),new tR(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class rS{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=rS.PROVIDER_ID,this.auth=ej(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return rx(this.auth,e,ej(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return n$._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return rS.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return rS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?n$._fromTokenResponse(t,n):null}}/** Always set to {@link ProviderId}.PHONE. */rS.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */rS.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk extends nI{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return nL(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nL(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nL(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function r_(e){return n5(e.auth,new rk(e),e.bypassAuthState)}function rE(e){let{auth:t,user:n}=e;return tj(n,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),n3(n,new rk(e),e.bypassAuthState)}async function rC(e){let{auth:t,user:n}=e;return tj(n,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),n4(n,new rk(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class rT{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}let s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return r_;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return rC;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return rE;default:t_(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||tI("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||tI("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=new tR(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class rj extends rT{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,rj.currentPopupAction&&rj.currentPopupAction.cancel(),rj.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return tj(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||tI("Popup operations only handle one event");let e=ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tE(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tE(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rj.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tE(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,rN.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
rj.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const rI=new Map;class rO extends rT{constructor(e,t,n=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,n),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=rI.get(this.auth._key());if(!e){try{let t=await rP(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}rI.set(this.auth._key(),e)}return this.bypassAuthState||rI.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rP(e,t){let n=na("pendingRedirect",t.config.apiKey,t.name),r=nr(e._redirectPersistence);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function rR(e,t){rI.set(e._key(),t)}async function rA(e,t,n=!1){if(tn(e.app))return Promise.reject(tT(e));let r=ej(e),i=t?nr(t):(tj(r._popupRedirectResolver,r,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),r._popupRedirectResolver),a=new rO(r,i,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class rM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return rD(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!rD(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(tE(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rL(e))}saveEventToCache(e){this.cachedEventUids.add(rL(e)),this.lastProcessedEventTime=Date.now()}}function rL(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function rD({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rU(e,t={}){return tF(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rz=/^https?/;async function rB(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await rU(e);for(let e of t)try{if(function(e){let t=tO(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!rz.test(n))return!1;if(rF.test(e))// only contain the IP, no extra character.
return r===e;// Dots in pattern should be escaped.
let i=e.replace(/\./g,"\\."),a=RegExp("^(.+\\."+i+"|"+i+")$","i");return a.test(r)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
t_(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rW=new tR(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function r$(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=rl().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let rV=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rH=new tR(5e3,15e3),rq={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rK=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function rG(e){let t=await (rV=rV||new Promise((t,n)=>{var r,i,a,o;// Function to run when gapi.load is ready.
function s(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
r$(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
r$(),n(tE(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:rW.get()})}if(null===(i=null===(r=rl().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(a=rl().gapi)||void 0===a?void 0:a.load)s();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=n_("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
rl()[t]=()=>{// GApi loader should be ready.
gapi.load?s():n(tE(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},(o=`${nk.gapiScript}?onload=${t}`,nk.loadJS(o)).catch(e=>n(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
rV=null,e)})),n=rl().gapi;return tj(n,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;tj(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let n=t.emulator?tA(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:ta},i=rK.get(e.config.apiHost);i&&(r.eid=i);let a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${ek(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rq,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let i=tE(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),a=rl().setTimeout(()=>{r(i)},rH.get());// Clear timer and resolve pending iframe ready promise.
    function o(){rl().clearTimeout(a),n(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(o).then(o,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rQ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class rY{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const rJ=encodeURIComponent("fac");async function rX(e,t,n,r,i,a){tj(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),tj(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ta,eventId:i};if(t instanceof nq)// TODO set additionalParams from the provider as well?
for(let[n,r]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))o[n]=r;if(t instanceof nK){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];// Sets the App Check token to pass to the widget
let s=await e._getAppCheckToken(),l=s?`#${rJ}=${encodeURIComponent(s)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?tA(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${ek(o).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The special web storage event
 *
 */const rZ="webStorageSupport",r0=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ri,this._completeRedirectFn=rA,this._overrideRedirectResult=rR}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,n,r){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||tI("_initialize() not called before _openPopup()");let a=await rX(e,t,n,tO(),r);return function(e,t,n,r=500,i=600){let a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),s="",l=Object.assign(Object.assign({},rQ),{width:r.toString(),height:i.toString(),top:a,left:o}),c=eh().toLowerCase();n&&(s=nu(c)?"_blank":n),nl(c)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let u=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=eh()){var t;return nm(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==s)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",s),new rY(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let d=window.open(t||"",s,u);tj(d,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{d.focus()}catch(e){}return new rY(d)}(e,a,ro())}async _openRedirect(e,t,n,r){await this._originValidation(e);let i=await rX(e,t,n,tO(),r);return rl().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||tI("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await rG(e),n=new rM(e);return t.register("authEvent",t=>{tj(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let r=n.onEvent(t.authEvent);return{status:r?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(rZ,{type:rZ},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[rZ];void 0!==i&&t(!!i),t_(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rB(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return ng()||nc()||nm()}};class r1{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,n);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return tI("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class r2 extends r1{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new r2(e)}/** @internal */_finalizeEnroll(e,t,n){return tF(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,tU(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return tF(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,tU(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class r4 extends r1{constructor(e,t,n){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=n}/** @internal */static _fromSecret(e,t){return new r4(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new r4(t,e)}/** @internal */async _finalizeEnroll(e,t,n){return tj(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),tF(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,tU(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){tj(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let n={verificationCode:this.otp};return tF(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,tU(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class r3{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,n,r,i,a,o){this.sessionInfo=a,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new r3(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var n;let r=!1;return(r5(e)||r5(t))&&(r=!0),r&&(r5(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),r5(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function r5(e){return void 0===e||(null==e?void 0:e.length)===0}var r6="@firebase/auth",r8="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){tj(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const r9=ef("authIdTokenMaxAge")||300;let ie=null;const it=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>r9)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let i=null==n?void 0:n.token;ie!==i&&(ie=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};nk={loadJS:e=>new Promise((t,n)=>{var r,i;let a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=e=>{let t=tE("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},a6="Browser"/* ClientPlatform.BROWSER */,te(new eI("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;tj(a&&!a.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:n.name});let s={apiKey:a,authDomain:o,clientPlatform:a6,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:nw(a6)},l=new nx(n,r,i,s);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);r.initialize()})),te(new eI("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=ej(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new r7(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),tl(r6,r8,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";case"WebExtension"/* ClientPlatform.WEB_EXTENSION */:return"web-extension";default:return}}(a6)),tl(r6,r8,"esm2017"),tl("firebase","10.12.2","app");const ir="@firebase/installations",ii="0.6.7",ia=`w:${ii}`,io="FIS_v2",is=new ey("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});/** Returns true if error is a FirebaseError that is based on an error from the server. */function il(e){return e instanceof ev&&e.code.includes("request-failed"/* ErrorCode.REQUEST_FAILED */)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function iu(e){return{token:e.token,requestStatus:2/* RequestStatus.COMPLETED */,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function id(e,t){let n=await t.json(),r=n.error;return is.create("request-failed"/* ErrorCode.REQUEST_FAILED */,{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ip({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */async function ih(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=ic(e),i=ip(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={fid:n,authVersion:io,appId:e.appId,sdkVersion:ia},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await ih(()=>fetch(r,s));if(l.ok){let e=await l.json(),t={fid:e.fid||n,registrationStatus:2/* RequestStatus.COMPLETED */,refreshToken:e.refreshToken,authToken:iu(e.authToken)};return t}throw await id("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Returns a promise that resolves after given time passes. */function ig(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Returns a string key that can be used to identify the app. */function iv(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Map;/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */function ib(e,t){let n=iv(e);ix(n,t),function(e,t){let n=(!iS&&"BroadcastChannel"in self&&((iS=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{ix(e.data.key,e.data.fid)}),iS);n&&n.postMessage({key:e,fid:t}),0===iy.size&&iS&&(iS.close(),iS=null)}(n,t)}function ix(e,t){let n=iy.get(e);if(n)for(let e of n)e(t)}let iS=null;const ik="firebase-installations-store";let i_=null;function iE(){return i_||(i_=eQ("firebase-installations-database",1,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
0===t&&e.createObjectStore(ik)}})),i_}/** Assigns or overwrites the record for the given key with the given value. */async function iC(e,t){let n=iv(e),r=await iE(),i=r.transaction(ik,"readwrite"),a=i.objectStore(ik),o=await a.get(n);return await a.put(t,n),await i.done,o&&o.fid===t.fid||ib(e,t.fid),t}/** Removes record(s) from the objectStore that match the given key. */async function iT(e){let t=iv(e),n=await iE(),r=n.transaction(ik,"readwrite");await r.objectStore(ik).delete(t),await r.done}/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */async function iN(e,t){let n=iv(e),r=await iE(),i=r.transaction(ik,"readwrite"),a=i.objectStore(ik),o=await a.get(n),s=t(o);return void 0===s?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&ib(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */async function ij(e){let t;let n=await iN(e.appConfig,n=>{let r=/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */function(e){let t=e||{fid:/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */function(){try{// A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
// bytes. our implementation generates a 17 byte array instead.
let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),// Replace the first 4 random bits with the constant FID header of 0b0111.
e[0]=112+e[0]%16;let n=/** Converts a FID Uint8Array to a base64 string representation. */function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);// Remove the 23rd character that was added because of the extra 4 bits at the
// end of our 17 byte array, and the '=' padding.
return t.substr(0,22)}(e);return iw.test(n)?n:""}catch(e){// FID generation errored
return""}}(),registrationStatus:0/* RequestStatus.NOT_STARTED */};return iR(t)}(n),i=/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */function(e,t){if(0/* RequestStatus.NOT_STARTED */===t.registrationStatus){if(!navigator.onLine){// Registration required but app is offline.
let e=Promise.reject(is.create("app-offline"/* ErrorCode.APP_OFFLINE */));return{installationEntry:t,registrationPromise:e}}// Try registering. Change status to IN_PROGRESS.
let n={fid:t.fid,registrationStatus:1/* RequestStatus.IN_PROGRESS */,registrationTime:Date.now()},r=iI(e,n);return{installationEntry:n,registrationPromise:r}}return 1/* RequestStatus.IN_PROGRESS */===t.registrationStatus?{installationEntry:t,registrationPromise:iO(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}/** This will be executed only once for each new Firebase Installation. */async function iI(e,t){try{let n=await im(e,t);return iC(e.appConfig,n)}catch(n){throw il(n)&&409===n.customData.serverCode?// Generate a new ID next time.
await iT(e.appConfig):await iC(e.appConfig,{fid:t.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}),n}}/** Call if FID registration is pending in another request. */async function iO(e){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let t=await iP(e.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===t.registrationStatus;)// createInstallation request still in progress.
await ig(100),t=await iP(e.appConfig);if(0/* RequestStatus.NOT_STARTED */===t.registrationStatus){// The request timed out or failed in a different call. Try again.
let{installationEntry:t,registrationPromise:n}=await ij(e);return n||t}return t}/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */function iP(e){return iN(e,e=>{if(!e)throw is.create("installation-not-found"/* ErrorCode.INSTALLATION_NOT_FOUND */);return iR(e)})}function iR(e){return 1/* RequestStatus.IN_PROGRESS */===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${ic(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){let n=ip(e);return n.append("Authorization",`${io} ${t}`),n}(e,n),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={installation:{sdkVersion:ia,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await ih(()=>fetch(r,s));if(l.ok){let e=await l.json(),t=iu(e);return t}throw await id("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */async function iM(e,t=!1){let n;let r=await iN(e.appConfig,r=>{var i;if(!iF(r))throw is.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let a=r.authToken;if(!t&&2/* RequestStatus.COMPLETED */===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1/* RequestStatus.IN_PROGRESS */===a.requestStatus)return(// There already is a token request in progress.
n=iL(e,t),r);{// No token or token expired.
if(!navigator.onLine)throw is.create("app-offline"/* ErrorCode.APP_OFFLINE */);let t=/** Returns an updated InstallationEntry with an InProgressAuthToken. */function(e){let t={requestStatus:1/* RequestStatus.IN_PROGRESS */,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=iU(e,t),t}}),i=n?await n:r.authToken;return i}/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */async function iL(e,t){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let n=await iD(e.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===n.authToken.requestStatus;)// generateAuthToken still in progress.
await ig(100),n=await iD(e.appConfig);let r=n.authToken;return 0/* RequestStatus.NOT_STARTED */===r.requestStatus?iM(e,t):r}/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */function iD(e){return iN(e,e=>{if(!iF(e))throw is.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let t=e.authToken;return 1/* RequestStatus.IN_PROGRESS */===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}}):e})}async function iU(e,t){try{let n=await iA(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await iC(e.appConfig,r),n}catch(n){if(il(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))// Generate a new ID next time.
await iT(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}});await iC(e.appConfig,n)}throw n}}function iF(e){return void 0!==e&&2/* RequestStatus.COMPLETED */===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */async function iz(e){let{installationEntry:t,registrationPromise:n}=await ij(e);return n?n.catch(console.error):// token if needed.
iM(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function iB(e,t=!1){await iW(e);// At this point we either have a Registered Installation in the DB, or we've
// already thrown an error.
let n=await iM(e,t);return n.token}async function iW(e){let{registrationPromise:t}=await ij(e);t&&await t}function i$(e){return is.create("missing-app-config-values"/* ErrorCode.MISSING_APP_CONFIG_VALUES */,{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV="installations";te(new eI(iV,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw i$("App Configuration");if(!e.name)throw i$("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw i$(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=tt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC"/* ComponentType.PUBLIC */)),te(new eI("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=tt(t,iV).getImmediate();return{getId:()=>iz(n),getToken:e=>iB(n,e)}},"PRIVATE"/* ComponentType.PRIVATE */)),tl(ir,ii),tl(ir,ii,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Type constant for Firebase Analytics.
 */const iH="analytics",iq="https://www.googletagmanager.com/gtag/js",iK=new eF("@firebase/analytics"),iG=new ey("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Verifies and creates a TrustedScriptURL.
 */function iQ(e){if(!e.startsWith(iq)){let t=iG.create("invalid-gtag-resource"/* AnalyticsError.INVALID_GTAG_RESOURCE */,{gtagURL:e});return iK.warn(t.message),""}return e}/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */function iY(e){return Promise.all(e.map(e=>e.catch(e=>e)))}/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */async function iJ(e,t,n,r,i,a){// If config is already fetched, we know the appId and can use it to look up what FID promise we
/// are waiting for, and wait only on that one.
let o=r[i];try{if(o)await t[o];else{// If config is not fetched yet, wait for all configs (we don't know which one we need) and
// find the appId (if any) corresponding to this measurementId. If there is one, wait on
// that appId's initialization promise. If there is none, promise resolves and gtag
// call goes through.
let e=await iY(n),r=e.find(e=>e.measurementId===i);r&&await t[r.appId]}}catch(e){iK.error(e)}e("config"/* GtagCommand.CONFIG */,i,a)}/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */async function iX(e,t,n,r,i){try{let a=[];// If there's a 'send_to' param, check if any ID specified matches
// an initializeIds() promise we are waiting for.
if(i&&i.send_to){let e=i.send_to;// Make it an array if is isn't, so it can be dealt with the same way.
Array.isArray(e)||(e=[e]);// Checking 'send_to' fields requires having all measurement ID results back from
// the dynamic config fetch.
let r=await iY(n);for(let n of e){// Any fetched dynamic measurement ID that matches this 'send_to' ID
let e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(i)a.push(i);else{// Found an item in 'send_to' that is not associated
// directly with an FID, possibly a group.  Empty this array,
// exit the loop early, and let it get populated below.
a=[];break}}}0===a.length&&(a=Object.values(t)),// Run core gtag function with args after all relevant initialization
// promises have been resolved.
await Promise.all(a),// Workaround for http://b/141370449 - third argument cannot be undefined.
e("event"/* GtagCommand.EVENT */,r,i||{})}catch(e){iK.error(e)}}const iZ=new /**
 * Stubbable retry data storage class.
 */class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */async function i0(e){var t;let{appId:n,apiKey:r}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(a,i);if(200!==o.status&&304!==o.status){let e="";try{// Try to get any error message text from server response.
let n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw iG.create("config-fetch-failed"/* AnalyticsError.CONFIG_FETCH_FAILED */,{httpStatus:o.status,responseMessage:e})}return o.json()}/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */async function i1(e,t=iZ,n){let{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw iG.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!i){if(a)return{measurementId:a,appId:r};throw iG.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new i4;return setTimeout(async()=>{// Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
s.abort()},void 0!==n?n:6e4),i2({appId:r,apiKey:i,measurementId:a},o,s,t)}/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */async function i2(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=iZ// for testing
){var a;let{appId:o,measurementId:s}=e;// Starts with a (potentially zero) timeout to support resumption from stored state.
// Ensures the throttle end time is honored if the last attempt timed out.
// Note the SDK will never make a request if the fetch timeout expires at this point.
try{await new Promise((e,n)=>{// Derives backoff from given end time, normalizing negative numbers to zero.
let i=Math.max(t-Date.now(),0),a=setTimeout(e,i);// Adds listener, rather than sets onabort, because signal is a shared object.
r.addEventListener(()=>{clearTimeout(a),// If the request completes before this timeout, the rejection has no effect.
n(iG.create("fetch-throttle"/* AnalyticsError.FETCH_THROTTLE */,{throttleEndTimeMillis:t}))})})}catch(e){if(s)return iK.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:s};throw e}try{let t=await i0(e);return(// Note the SDK only clears throttle state if response is success or non-retriable.
i.deleteThrottleMetadata(o),t)}catch(c){if(!/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */function(e){if(!(e instanceof ev)||!e.customData)return!1;// Uses string index defined by ErrorData, which FirebaseError implements.
let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(i.deleteThrottleMetadata(o),s)return iK.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:s};throw c}let t=503===Number(null===(a=null==c?void 0:c.customData)||void 0===a?void 0:a.httpStatus)?eN(n,i.intervalMillis,30):eN(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return(// Persists state.
i.setThrottleMetadata(o,l),iK.debug(`Calling attemptFetch again in ${t} millis`),i2(e,l,r,i))}}/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */class i4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */async function i3(e,t,n,r,i){if(i&&i.global){e("event"/* GtagCommand.EVENT */,n,r);return}{let i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event"/* GtagCommand.EVENT */,n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i5(){if(!eg())return iK.warn(iG.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ew()}catch(e){return iK.warn(iG.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations _FirebaseInstallationsInternal instance.
 *
 * @returns Measurement ID.
 */async function i6(e,t,i,a,o,s,l){var c;let u=i1(e);// Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
u.then(t=>{i[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&iK.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>iK.error(e)),// Add to list to track state of all dynamic config promises.
t.push(u);let d=i5().then(e=>e?a.getId():void 0),[f,p]=await Promise.all([u,d]);!/**
 * Returns the script tag in the DOM matching both the gtag url pattern
 * and the provided data layer name.
 */function(e){let t=window.document.getElementsByTagName("script");for(let n of Object.values(t))if(n.src&&n.src.includes(iq)&&n.src.includes(e))return n;return null}(s)&&/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */function(e,t){let n;let r=(window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:iQ})),n),i=document.createElement("script"),a=`${iq}?l=${e}&id=${t}`;i.src=r?null==r?void 0:r.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}(s,f.measurementId),r&&(o("consent"/* GtagCommand.CONSENT */,"default",r),r=void 0),// This command initializes gtag.js and only needs to be called once for the entire web app,
// but since it is idempotent, we can call it multiple times.
// We keep it together with other initialization logic for better code structure.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o("js",new Date);// User config added first. We don't want users to accidentally overwrite
// base Firebase config properties.
let h=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return(// guard against developers accidentally setting properties with prefix `firebase_`
h.origin="firebase",h.update=!0,null!=p&&(h.firebase_id=p),// It should be the first config command called on this GA-ID
// Initialize this GA-ID and set FID on it using the gtag config API.
// Note: This will trigger a page_view event unless 'send_page_view' is set to false in
// `configProperties`.
o("config"/* GtagCommand.CONFIG */,f.measurementId,h),n&&(o("set"/* GtagCommand.SET */,n),n=void 0),f.measurementId)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Analytics Service class.
 */class i8{constructor(e){this.app=e}_delete(){return delete i7[this.app.options.appId],Promise.resolve()}}/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */let i7={},i9=[];/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */const ae={};/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */let at="dataLayer",an=!1;const ar="@firebase/analytics",ai="0.10.4";te(new eI(iH,(e,{options:t})=>{// getImmediate for FirebaseApp will always succeed
let n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return(/**
 * Analytics instance factory.
 * @internal
 */function(e,t,n){!/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */function(){let e=[];if(em()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=iG.create("invalid-analytics-context"/* AnalyticsError.INVALID_ANALYTICS_CONTEXT */,{errorInfo:t});iK.warn(n.message)}}();let r=e.options.appId;if(!r)throw iG.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!e.options.apiKey){if(e.options.measurementId)iK.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw iG.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}if(null!=i7[r])throw iG.create("already-exists"/* AnalyticsError.ALREADY_EXISTS */,{id:r});if(!an){var o,s;let e,t;e=[],Array.isArray(window[at])?e=window[at]:window[at]=e;let{wrappedGtag:n,gtagCore:r}=(o="gtag",t=function(...e){// Must push IArguments object, not an array.
window[at].push(arguments)},window[o]&&"function"==typeof window[o]&&(t=window[o]),window[o]=(s=t,/**
     * Wrapper around gtag that ensures FID is sent with gtag calls.
     * @param command Gtag command type.
     * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
     * @param gtagParams Params if event is EVENT/CONFIG.
     */async function(e,...t){try{// If event, check that relevant initialization promises have completed.
if("event"/* GtagCommand.EVENT */===e){let[e,n]=t;// If EVENT, second arg must be measurementId.
await iX(s,i7,i9,e,n)}else if("config"/* GtagCommand.CONFIG */===e){let[e,n]=t;// If CONFIG, second arg must be measurementId.
await iJ(s,i7,i9,ae,e,n)}else if("consent"/* GtagCommand.CONSENT */===e){let[e,n]=t;// consentAction can be one of 'default' or 'update'.
s("consent"/* GtagCommand.CONSENT */,e,n)}else if("get"/* GtagCommand.GET */===e){let[e,n,r]=t;s("get"/* GtagCommand.GET */,e,n,r)}else if("set"/* GtagCommand.SET */===e){let[e]=t;// If SET, second arg must be params.
s("set"/* GtagCommand.SET */,e)}else s(e,...t)}catch(e){iK.error(e)}}),{gtagCore:t,wrappedGtag:window[o]});a=n,i=r,an=!0}// Async but non-blocking.
// This map reflects the completion state of all promises for each appId.
i7[r]=i6(e,i9,ae,t,i,at,n);let l=new i8(e);return l}(n,r,t))},"PUBLIC"/* ComponentType.PUBLIC */)),te(new eI("analytics-internal",function(e){try{let t=e.getProvider(iH).getImmediate();return{logEvent:(e,n,r)=>{var i;return i=t,void(i=ej(i),i3(a,i7[i.app.options.appId],e,n,r).catch(e=>iK.error(e)))}}}catch(e){throw iG.create("interop-component-reg-failed"/* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */,{reason:e})}},"PRIVATE"/* ComponentType.PRIVATE */)),tl(ar,ai),tl(ar,ai,"esm2017");// Initialize Firebase
const aa=to({apiKey:"AIzaSyDtvnnINiqprs2QXY_5nh0emHijIshQSbs",authDomain:"testapp-d3d3d.firebaseapp.com",projectId:"testapp-d3d3d",storageBucket:"testapp-d3d3d.appspot.com",messagingSenderId:"939768736675",appId:"1:939768736675:web:cd7d6602224d0049238816",measurementId:"G-13DYKHP47Y"});!/* eslint-disable @typescript-eslint/no-explicit-any *//**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(e=ts()){e=ej(e);// Dependencies
let t=tt(e,iH);t.isInitialized()?t.getImmediate():/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(e,t={}){// Dependencies
let n=tt(e,iH);if(n.isInitialized()){let e=n.getImmediate();if(ex(t,n.getOptions()))return e;throw iG.create("already-initialized"/* AnalyticsError.ALREADY_INITIALIZED */)}let r=n.initialize({options:t});return r}(e)}(aa);const ao=/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function(e=ts()){let t=tt(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let n=tt(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if(ex(r,null!=t?t:{}))return e;t_(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let r=n.initialize({options:t});return r}(e,{popupRedirectResolver:r0,persistence:[rb,rr,ri]}),r=ef("authTokenSyncURL");// Only do the Cookie exchange in a secure context
if(r&&"boolean"==typeof isSecureContext&&isSecureContext){// Don't allow urls (XSS possibility), only paths on the same domain
let e=new URL(r,location.origin);if(location.origin===e.origin){let t=it(e.toString());ej(n).beforeAuthStateChanged(t,()=>t(n.currentUser)),ej(n).onIdTokenChanged(e=>t(e),void 0,void 0)}}let i=eu("auth");return i&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,n){let r=ej(e);tj(r._canInitEmulator,r,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),tj(/^https?:\/\//.test(t),r,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let i=!!(null==n?void 0:n.disableWarnings),a=nN(t),{host:o,port:s}=function(e){let t=nN(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);// Strip out "username:password@".
if(i){let e=i[1];return{host:e,port:nj(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:nj(t)}}}(t),l=null===s?"":`:${s}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${i}`),n}();var as={};as=new URL("logo.8926d699.png",import.meta.url).toString(),f("3E8gM");var al=()=>{let e=O(e=>e.User),t=(0,v.useNavigate)(),[n,r]=(0,m.useState)(!1);return console.log(e),/*#__PURE__*/(0,h.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light tw-bg-white tw-shadow-sm m-0 p-0 fixed-top tw-shadow-black/5 tw-z-50",children:[/*#__PURE__*/(0,h.jsxs)("a",{className:"navbar-brand",href:"#Home",children:[/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(as),alt:"",className:"tw-h-16 tw-w-16"}),"\xa0",/*#__PURE__*/(0,h.jsx)("h3",{className:" tw-inline-block",children:"Testify"})]}),/*#__PURE__*/(0,h.jsx)("button",{className:"navbar-toggler tw-bg-blue-600",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:/*#__PURE__*/(0,h.jsx)("span",{className:"navbar-toggler-icon tw-text-white"})}),/*#__PURE__*/(0,h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[/*#__PURE__*/(0,h.jsxs)("ul",{className:"navbar-nav m-auto",children:[/*#__PURE__*/(0,h.jsx)("li",{class:"nav-item active link tw-rounded-lg tw-text-xl p-1 hover:tw-bg-green-400",children:/*#__PURE__*/(0,h.jsxs)(y.Link,{to:"/",className:"nav-link text-black",children:["Home ",/*#__PURE__*/(0,h.jsx)("span",{className:"sr-only"})]})}),/*#__PURE__*/(0,h.jsx)("li",{className:"nav-item active p-1 link tw-rounded-lg text-white hover:tw-bg-green-400 tw-text-xl",children:/*#__PURE__*/(0,h.jsxs)(y.Link,{to:"/About",className:"nav-link text-black",href:"#About",children:["About",/*#__PURE__*/(0,h.jsx)("span",{className:"sr-only"})]})}),/*#__PURE__*/(0,h.jsx)("li",{className:"nav-item disabled p-1 link tw-rounded-lg text-white hover:tw-bg-green-400 tw-text-xl",children:/*#__PURE__*/(0,h.jsxs)("button",{onClick:()=>{e?.uid?t("/test"):swal("Please Login to Access Library"),r(!0)},className:"nav-link text-black",children:["Test Library ",/*#__PURE__*/(0,h.jsx)("span",{className:"sr-only"})]})}),/*#__PURE__*/(0,h.jsx)("li",{className:"nav-item active p-1 link tw-rounded-lg hover:tw-bg-green-400 tw-text-xl",children:/*#__PURE__*/(0,h.jsxs)(y.Link,{to:"/Contact",className:"nav-link text-black",children:["Contact ",/*#__PURE__*/(0,h.jsx)("span",{className:"sr-only"})]})})]}),/*#__PURE__*/(0,h.jsxs)("ul",{style:{listStyleType:"none"},className:" tw-flex tw-justify-center tw-items-center tw-gap-3 ",children:[/*#__PURE__*/(0,h.jsx)("li",{className:" tw-mt-2 tw-text-lg tw-text-emerald-400 tw-outline tw-outline-emerald-400 tw-rounded-md tw-p-2",children:e?.uid?e?.displayName:"User"}),/*#__PURE__*/(0,h.jsx)("li",{className:"tw-flex tw-justify-start tw-items-start",children:e?.uid?/*#__PURE__*/(0,h.jsx)("button",{onClick:function(){ej(ao).signOut().then(()=>{t("/Signup")}).catch(e=>{t("/error")})},className:"tw-px-2 tw-mt-3 tw-py-2 tw-no-underline tw-bg-green-400 tw-text-black tw-rounded-md",children:"SignOut"}):/*#__PURE__*/(0,h.jsx)(y.Link,{to:"/Signup",className:"tw-px-2 tw-mt-3 tw-py-2 tw-no-underline tw-bg-green-400 tw-text-black tw-rounded-md",children:"SignUp"})})]})]})]})};f("lzNIT");var v=f("aphAM"),y=f("lzNIT"),v=f("aphAM"),h=f("ayMG0");f("acw62"),new URL("back1.942570c6.avif",import.meta.url).toString();var y=f("lzNIT"),ac={};ac=new URL("Test_Your_Self-removebg-preview.d92a6c23.png",import.meta.url).toString();var au={};au=new URL("Analysis-removebg-preview.b3a3dd29.png",import.meta.url).toString();var ad={};ad=new URL("progress2-removebg-preview.7907c2ac.png",import.meta.url).toString();var h=f("ayMG0");f("acw62");var h=f("ayMG0");f("acw62");var h=f("ayMG0");f("acw62");var y=f("lzNIT"),af=()=>{let e=O(e=>e.User);return/*#__PURE__*/(0,h.jsxs)("footer",{className:"tw-bg-[#375E97] tw-text-white tw-pt-10 tw-pb-5 tw-px-6",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-container tw-mx-auto tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-gap-8",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-flex tw-flex-col tw-items-start",children:[/*#__PURE__*/(0,h.jsxs)(y.Link,{to:"/",className:"tw-flex tw-items-center tw-space-x-3",children:[/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(as),alt:"Testify Logo",className:"tw-h-12 tw-w-12"}),/*#__PURE__*/(0,h.jsx)("h3",{className:"tw-text-2xl tw-font-semibold",children:"Testify"})]}),/*#__PURE__*/(0,h.jsx)("p",{className:"tw-mt-4 tw-text-gray-400 tw-max-w-xs",children:"Transforming talent acquisition through tech-powered testing solutions."})]}),/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h4",{className:"tw-text-lg tw-font-semibold tw-mb-4",children:"Quick Links"}),/*#__PURE__*/(0,h.jsxs)("ul",{className:"tw-space-y-2",children:[/*#__PURE__*/(0,h.jsx)("li",{children:/*#__PURE__*/(0,h.jsx)(y.Link,{to:"/about",className:"tw-text-gray-400 hover:tw-text-white tw-no-underline",children:"About Us"})}),/*#__PURE__*/(0,h.jsx)("li",{children:/*#__PURE__*/(0,h.jsx)(y.Link,{to:"/services",className:"tw-text-gray-400 hover:tw-text-white tw-no-underline",children:"Services"})}),/*#__PURE__*/(0,h.jsx)("li",{children:/*#__PURE__*/(0,h.jsx)("span",{onClick:()=>{e?.uid?navigate("/test"):swal("Please Login to Access Library")},className:"tw-text-gray-400 tw-cursor-pointer hover:tw-text-white",children:"Test Library"})}),/*#__PURE__*/(0,h.jsx)("li",{children:/*#__PURE__*/(0,h.jsx)(y.Link,{to:"/contact",className:"tw-text-gray-400 hover:tw-text-white tw-no-underline",children:"Contact"})})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h4",{className:"tw-text-lg tw-font-semibold tw-mb-4",children:"Contact Us"}),/*#__PURE__*/(0,h.jsxs)("p",{className:"tw-text-gray-400",children:[/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-phone tw-mr-2"})," +1 (123) 456-7890"]}),/*#__PURE__*/(0,h.jsxs)("p",{className:"tw-text-gray-400",children:[/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-envelope tw-mr-2"})," support@testify.com"]}),/*#__PURE__*/(0,h.jsxs)("p",{className:"tw-text-gray-400",children:[/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-map-marker-alt tw-mr-2"})," 123 Testify St, Innovation City, TX"]})]}),/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h4",{className:"tw-text-lg tw-font-semibold tw-mb-4",children:"Follow Us"}),/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-flex tw-space-x-4",children:[/*#__PURE__*/(0,h.jsx)("a",{href:"https://facebook.com",target:"_blank",className:"tw-text-gray-400 hover:tw-text-blue-500",children:/*#__PURE__*/(0,h.jsx)("i",{className:"fab fa-facebook-f tw-text-2xl"})}),/*#__PURE__*/(0,h.jsx)("a",{href:"https://twitter.com",target:"_blank",className:"tw-text-gray-400 hover:tw-text-blue-400",children:/*#__PURE__*/(0,h.jsx)("i",{className:"fab fa-twitter tw-text-2xl"})}),/*#__PURE__*/(0,h.jsx)("a",{href:"https://linkedin.com",target:"_blank",className:"tw-text-gray-400 hover:tw-text-blue-700",children:/*#__PURE__*/(0,h.jsx)("i",{className:"fab fa-linkedin tw-text-2xl"})}),/*#__PURE__*/(0,h.jsx)("a",{href:"https://instagram.com",target:"_blank",className:"tw-text-gray-400 hover:tw-text-pink-500",children:/*#__PURE__*/(0,h.jsx)("i",{className:"fab fa-instagram tw-text-2xl"})})]})]})]}),/*#__PURE__*/(0,h.jsx)("div",{className:"tw-border-t tw-border-gray-700 tw-mt-8 tw-pt-4 tw-text-center",children:/*#__PURE__*/(0,h.jsxs)("p",{className:"tw-text-gray-500",children:["\xa9 ",new Date().getFullYear()," Testify. All rights reserved."]})})]})},ap=f("k3T0g"),h=f("ayMG0"),m=f("acw62"),ap=f("k3T0g");f("gc0qX");var h=f("ayMG0"),m=f("acw62"),ap=f("k3T0g"),y=f("lzNIT"),v=f("aphAM"),h=f("ayMG0"),m=f("acw62"),ah={};a3=f("acw62"),ah=/******/function(e){/******/// The module cache
/******/var t={};/******//******/// The require function
/******/function n(r){/******//******/// Check if module is in cache
/******/if(t[r])/******/return t[r].exports;/******/// Create a new module (and put it into the cache)
/******/var i=t[r]={/******/i:r,/******/l:!1,/******/exports:{}};/******//******/// Return the exports of the module
/******/return(/******//******/// Execute the module function
/******/e[r].call(i.exports,i,i.exports,n),/******//******/// Flag the module as loaded
/******/i.l=!0,i.exports);/******/}/******//******//******/// Load entry module and return exports
/******/return(/******//******//******/// expose the modules object (__webpack_modules__)
/******/n.m=e,/******//******/// expose the module cache
/******/n.c=t,/******//******/// define getter function for harmony exports
/******/n.d=function(e,t,r){/******/n.o(e,t)||/******/Object.defineProperty(e,t,{enumerable:!0,get:r});/******/},/******//******/// define __esModule on exports
/******/n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),/******/Object.defineProperty(e,"__esModule",{value:!0});/******/},/******//******/// create a fake namespace object
/******/// mode & 1: value is a module id, require it
/******/// mode & 2: merge all properties of value into the ns
/******/// mode & 4: return value when already ns object
/******/// mode & 8|1: behave like require
/******/n.t=function(e,t){/******/if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;/******/var r=Object.create(null);/******/if(/******/n.r(r),/******/Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,(function(t){return e[t]}).bind(null,i));/******/return r;/******/},/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(e){/******/var t=e&&e.__esModule?/******/function(){return e.default}:/******/function(){return e};/******/return /******/n.d(t,"a",t),t;/******/},/******//******/// Object.prototype.hasOwnProperty.call
/******/n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},/******//******/// __webpack_public_path__
/******/n.p="",n(n.s="./src/react-webcam.tsx"));/******/}({/***/"./src/react-webcam.tsx":/*!******************************!*\
  !*** ./src/react-webcam.tsx ***!
  \******************************//*! exports provided: default *//***/function(e,t,n){n.r(t);/* harmony import */var r,i=n(/*! react */"react"),a=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function l(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}"undefined"!=typeof window&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){// First get ahold of the legacy getUserMedia, if present
var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return(// Some browsers just don't implement it - return a rejected promise with an error
// to keep a consistent interface
t?new Promise(function(n,r){t.call(navigator,e,n,r)}):Promise.reject(Error("getUserMedia is not implemented in this browser")))}));var c=/** @class */function(e){function t(t){var n=e.call(this,t)||this;return n.canvas=null,n.ctx=null,n.requestUserMediaId=0,n.unmounted=!1,n.state={hasUserMedia:!1},n}return a(t,e),t.prototype.componentDidMount=function(){var e=this.state,t=this.props;if(this.unmounted=!1,!l()){t.onUserMediaError("getUserMedia not supported");return}e.hasUserMedia||this.requestUserMedia(),t.children&&"function"!=typeof t.children&&console.warn("children must be a function")},t.prototype.componentDidUpdate=function(e){var t=this.props;if(!l()){t.onUserMediaError("getUserMedia not supported");return}var n=JSON.stringify(e.audioConstraints)!==JSON.stringify(t.audioConstraints),r=JSON.stringify(e.videoConstraints)!==JSON.stringify(t.videoConstraints),i=e.minScreenshotWidth!==t.minScreenshotWidth,a=e.minScreenshotHeight!==t.minScreenshotHeight;(r||i||a)&&(this.canvas=null,this.ctx=null),(n||r)&&(this.stopAndCleanup(),this.requestUserMedia())},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},t.stopMediaStream=function(e){e&&(e.getVideoTracks&&e.getAudioTracks?(e.getVideoTracks().map(function(t){e.removeTrack(t),t.stop()}),e.getAudioTracks().map(function(t){e.removeTrack(t),t.stop()})):e.stop())},t.prototype.stopAndCleanup=function(){var e=this.state;e.hasUserMedia&&(t.stopMediaStream(this.stream),e.src&&window.URL.revokeObjectURL(e.src))},t.prototype.getScreenshot=function(e){var t=this.state,n=this.props;if(!t.hasUserMedia)return null;var r=this.getCanvas(e);return r&&r.toDataURL(n.screenshotFormat,n.screenshotQuality)},t.prototype.getCanvas=function(e){var t=this.state,n=this.props;if(!this.video||!t.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var r=this.video.videoWidth,i=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var a=r/i;i=(r=n.minScreenshotWidth||this.video.clientWidth)/a,n.minScreenshotHeight&&i<n.minScreenshotHeight&&(r=(i=n.minScreenshotHeight)*a)}this.canvas=document.createElement("canvas"),this.canvas.width=(null==e?void 0:e.width)||r,this.canvas.height=(null==e?void 0:e.height)||i,this.ctx=this.canvas.getContext("2d")}var o=this.ctx,s=this.canvas;return o&&s&&(// adjust the height and width of the canvas to the given dimensions
s.width=(null==e?void 0:e.width)||s.width,s.height=(null==e?void 0:e.height)||s.height,n.mirrored&&(o.translate(s.width,0),o.scale(-1,1)),o.imageSmoothingEnabled=n.imageSmoothing,o.drawImage(this.video,0,0,(null==e?void 0:e.width)||s.width,(null==e?void 0:e.height)||s.height),n.mirrored&&(o.scale(-1,1),o.translate(-s.width,0))),s},t.prototype.requestUserMedia=function(){var e=this,n=this.props,r=function(r,i){var a={video:void 0===i||i};n.audio&&(a.audio=void 0===r||r),e.requestUserMediaId++;var o=e.requestUserMediaId;navigator.mediaDevices.getUserMedia(a).then(function(n){e.unmounted||o!==e.requestUserMediaId?t.stopMediaStream(n):e.handleUserMedia(null,n)}).catch(function(t){e.handleUserMedia(t)})};if("mediaDevices"in navigator)r(n.audioConstraints,n.videoConstraints);else{var i=function(e){return{optional:[{sourceId:e}]}},a=function(e){var t=e.deviceId;return"string"==typeof t?t:Array.isArray(t)&&t.length>0?t[0]:"object"==typeof t&&t.ideal?t.ideal:null};// @ts-ignore: deprecated api
MediaStreamTrack.getSources(function(e){var t=null,o=null;e.forEach(function(e){"audio"===e.kind?t=e.id:"video"===e.kind&&(o=e.id)});var s=a(n.audioConstraints);s&&(t=s);var l=a(n.videoConstraints);l&&(o=l),r(i(t),i(o))})}},t.prototype.handleUserMedia=function(e,t){var n=this.props;if(e||!t){this.setState({hasUserMedia:!1}),n.onUserMediaError(e);return}this.stream=t;try{this.video&&(this.video.srcObject=t),this.setState({hasUserMedia:!0})}catch(e){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(t)})}n.onUserMedia(t)},t.prototype.render=function(){var e=this,t=this.state,n=this.props,r=n.audio,a=(n.forceScreenshotSourceSize,n.disablePictureInPicture),l=(n.onUserMedia,n.onUserMediaError,n.screenshotFormat,n.screenshotQuality,n.minScreenshotWidth,n.minScreenshotHeight,n.audioConstraints,n.videoConstraints,n.imageSmoothing,n.mirrored),c=n.style,u=void 0===c?{}:c,d=n.children,f=s(n,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),p=l?o(o({},u),{transform:(u.transform||"")+" scaleX(-1)"}):u,h={getScreenshot:this.getScreenshot.bind(this)};return i.createElement(i.Fragment,null,i.createElement("video",o({autoPlay:!0,disablePictureInPicture:a,src:t.src,muted:!r,playsInline:!0,ref:function(t){e.video=t},style:p},f)),d&&d(h))},t.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},t}(i.Component);/* harmony default export */t.default=c;/***/},/***/react:/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************//*! no static exports found *//***/function(e,t){e.exports=a3;/***/}}).default,new URL("Illustrator.b9018d61.png",import.meta.url).toString();var y=f("lzNIT"),v=f("aphAM"),h=f("ayMG0"),m=f("acw62"),am={};am=new URL("Register.173a833e.png",import.meta.url).toString();var ag=()=>{let[e,t]=(0,m.useState)(""),[n,r]=(0,m.useState)(""),[i,a]=(0,m.useState)(""),o=O(e=>e.User);return/*#__PURE__*/(0,h.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,h.jsx)("div",{className:"col-md-6 tw-p-6",children:/*#__PURE__*/(0,h.jsxs)("form",{action:"",className:" tw-p-5 tw-gap-5",children:[/*#__PURE__*/(0,h.jsxs)("fieldset",{className:" tw-bg-slate-100 tw-p-[6] tw-w-3/4 tw-rounded-sm",children:[" ",/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-circle-exclamation"})," \xa0Field marked with ",/*#__PURE__*/(0,h.jsx)("span",{className:" tw-text-red-600 tw-text-lg",children:"*"})," are Required "]}),/*#__PURE__*/(0,h.jsxs)("fieldset",{className:" tw-mt-2 tw-font-semibold",children:["Name ",/*#__PURE__*/(0,h.jsx)("span",{className:" tw-text-red-600 tw-text-lg",children:"*"}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("input",{type:"text",name:"",id:"",className:" tw-w-3/4 tw-p-1  tw-rounded-tr-md tw-rounded-br-md",placeholder:"Enter your Name",value:o?.displayName?o?.displayName:e,onChange:e=>{t(e.target.value)}})]}),/*#__PURE__*/(0,h.jsxs)("fieldset",{className:" tw-mt-2 tw-font-semibold",children:["Email ",/*#__PURE__*/(0,h.jsx)("span",{className:" tw-text-red-600 tw-text-lg",children:"*"})," ",/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("input",{type:"text",className:"tw-w-3/4 tw-p-1  tw-rounded-tr-md tw-rounded-br-md",placeholder:"Enter your email",value:o?.email?o?.email:n,onChange:e=>{r(e.target.value)}})]}),/*#__PURE__*/(0,h.jsxs)("fieldset",{className:"tw-mt-2 tw-font-semibold",children:[" Mobile ",/*#__PURE__*/(0,h.jsx)("span",{className:" tw-text-red-600 tw-text-lg",children:"*"})," ",/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("input",{type:"tel",className:" tw-w-3/4 tw-p-1  tw-rounded-tr-md tw-rounded-br-md",placeholder:"Enter your Mobile phone",value:i,onChange:e=>{a(e.target.value)}})]}),/*#__PURE__*/(0,h.jsx)("button",{type:"submit",className:" tw-mt-8 tw-px-5 tw-py-1 tw-text-center tw-rounded-md tw-bg-green-500",children:"Submit"})]})}),/*#__PURE__*/(0,h.jsx)("div",{className:"col-md-6 tw-flex tw-justify-center tw-items-center",children:/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(am),alt:"img",className:" tw-w-3/4"})})]})},h=f("ayMG0"),m=f("acw62"),aw={};aw=new URL("user.a9ed346f.jpg",import.meta.url).toString(),new URL("Frame.bac1d7d8.png",import.meta.url).toString(),new URL("blur.46815382.png",import.meta.url).toString(),new URL("background.7f45e66b.png",import.meta.url).toString();var av={};av=new URL("good.b624fae2.png",import.meta.url).toString();var ay={};ay=new URL("Bad.669c29f6.png",import.meta.url).toString();var ab=()=>{let e=(0,m.useRef)(null),[t,n]=(0,m.useState)(!1),r=(0,m.useCallback)(async()=>{let t=e?.current?.getScreenshot();n(t)},[e]);return/*#__PURE__*/(0,h.jsxs)("div",{className:"row ",children:[/*#__PURE__*/(0,h.jsx)("div",{className:"col-md-6 tw-p-2 tw-flex tw-justify-center tw-border-r-2 tw-border-black",children:/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-shadow-md tw-w-3/4 tw-bg-white tw-rounded-md",children:[/*#__PURE__*/(0,h.jsx)("h1",{className:" tw-underline tw-bg-gray-200 tw-text-sm tw-p-3 tw-w-full  tw-rounded-tl-md tw-rounded-tr-md  hover:tw-border-b-black",children:"Instructions "}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-2",children:[/*#__PURE__*/(0,h.jsxs)("h4",{className:" tw-text-sm",children:[" ",/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-square"}),"\xa0 Photo Needs to be taken clealy "]}),/*#__PURE__*/(0,h.jsxs)("h4",{className:" tw-text-sm",children:[" ",/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-square"})," \xa0 light need to be proper"]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-2",children:[/*#__PURE__*/(0,h.jsx)("h4",{className:" tw-text-sm tw-text-emerald-500",children:"Good Scenario"}),/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(av),alt:""}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("h4",{className:"tw-text-sm tw-text-red-600",children:"Bad Scenario"}),/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(ay),alt:""})]})]})}),/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-6 tw-border-r-2 tw-border-r-gray-600",children:[/*#__PURE__*/(0,h.jsx)("h4",{className:" tw-px-3 tw-text-sm tw-text-gray-400",children:'Please Center yourself to the screen and press "capture your face" button'}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-3 tw-flex tw-justify-start tw-flex-col md:tw-flex-row tw-gap-9",children:[/*#__PURE__*/(0,h.jsx)(/*@__PURE__*/s(ah),{className:"tw-object-cover tw-w-[300] tw-h-[250] tw-rounded-md tw-border-1 tw-border-solid tw-border-slate-500",screenshotFormat:"image/jpeg",ref:e}),/*#__PURE__*/(0,h.jsx)("img",{src:`${t||/*@__PURE__*/s(aw)}`,className:" tw-border-1 tw-w-[300] tw-h-[250] tw-border-solid tw-border-slate-500 tw-rounded-md"})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-gap-8 tw-p-6",children:[/*#__PURE__*/(0,h.jsx)("button",{className:" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md",onClick:r,children:"Capture your face"}),/*#__PURE__*/(0,h.jsx)("button",{className:" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md",onClick:()=>{n(null)},children:"Retake"})]})]})]})},h=f("ayMG0"),m=f("acw62"),ax={};ax=new URL("GoodID.9b2195c4.png",import.meta.url).toString();var aS={};aS=new URL("Bad1.0a7f3300.png",import.meta.url).toString();var ak={};ak=new URL("Bad2.26fdd25f.png",import.meta.url).toString();var a_=()=>{let e=(0,m.useRef)(null),[t,n]=(0,m.useState)(!1),r=(0,m.useCallback)(async()=>{let t=e?.current?.getScreenshot();n(t)},[e]);return/*#__PURE__*/(0,h.jsxs)("div",{className:"row tw-p-2",children:[/*#__PURE__*/(0,h.jsx)("div",{className:"col-md-5 tw-p-2 tw-flex tw-justify-center tw-border-r-2 tw-border-black",children:/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-shadow-md tw-w-3/4 tw-bg-white tw-rounded-md",children:[/*#__PURE__*/(0,h.jsx)("h1",{className:" tw-underline tw-bg-gray-200 tw-text-sm tw-p-3 tw-w-full  tw-rounded-tl-md tw-rounded-tr-md  hover:tw-border-b-black",children:"Instructions "}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-2",children:[/*#__PURE__*/(0,h.jsxs)("h4",{className:" tw-text-sm",children:[" ",/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-square"}),"\xa0 Photo Needs to be taken clealy "]}),/*#__PURE__*/(0,h.jsxs)("h4",{className:" tw-text-sm",children:[" ",/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-square"})," \xa0 light need to be proper"]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-2",children:[/*#__PURE__*/(0,h.jsx)("h4",{className:" tw-text-sm tw-text-emerald-500",children:"Good Scenario"}),/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(ax),alt:""}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("h4",{className:"tw-text-sm tw-text-red-600",children:"Bad Scenario"}),/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(aS),alt:""}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(ak),alt:""})]})]})}),/*#__PURE__*/(0,h.jsx)("div",{className:"col-md-1",children:/*#__PURE__*/(0,h.jsx)("div",{className:" tw-border-2 tw-border-gray-500 tw-border-solid tw-w-full md:tw-w-[2] tw-h-full tw-rounded-xl "})}),/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-6 tw-border-r-2 tw-border-r-gray-600",children:[/*#__PURE__*/(0,h.jsx)("h4",{className:" tw-px-3 tw-text-sm tw-text-gray-400",children:'Please allign yourself to the Center of screen and press "capture your ID" button'}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-3 tw-flex tw-justify-start tw-flex-col md:tw-flex-row tw-gap-9",children:[/*#__PURE__*/(0,h.jsx)(/*@__PURE__*/s(ah),{className:"tw-object-cover tw-w-[300] tw-h-[250] tw-rounded-md tw-border-1 tw-border-solid tw-border-slate-500",screenshotFormat:"image/jpeg",ref:e}),/*#__PURE__*/(0,h.jsx)("img",{src:`${t||/*@__PURE__*/s(aw)}`,className:" tw-border-1 tw-w-[300] tw-h-[250] tw-border-solid tw-border-slate-500 tw-rounded-md"})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-gap-8 tw-p-6",children:[/*#__PURE__*/(0,h.jsx)("button",{className:" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md",onClick:r,children:"Capture your ID"}),/*#__PURE__*/(0,h.jsx)("button",{className:" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md",onClick:()=>{n(null)},children:"Retake"})]})]})]})},h=f("ayMG0"),m=f("acw62"),y=f("lzNIT"),v=(f("aphAM"),f("aphAM")),ap=f("k3T0g"),aE={};function aC(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function aT(e){return!!e&&!!e[od]}function aN(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===of}(e)||Array.isArray(e)||!!e[ou]||!!(null===(t=e.constructor)||void 0===t?void 0:t[ou])||aA(e)||aM(e))}function aj(e,t,n){void 0===n&&(n=!1),0===aI(e)?(n?Object.keys:op)(e).forEach(function(r){n&&"symbol"==typeof r||t(r,e[r],e)}):e.forEach(function(n,r){return t(r,n,e)})}function aI(e){var t=e[od];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:aA(e)?2:aM(e)?3:0}function aO(e,t){return 2===aI(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function aP(e,t,n){var r=aI(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function aR(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function aA(e){return oo&&e instanceof Map}function aM(e){return os&&e instanceof Set}function aL(e){return e.o||e.t}function aD(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=oh(e);delete t[od];for(var n=op(t),r=0;r<n.length;r++){var i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function aU(e,t){return void 0===t&&(t=!1),az(e)||aT(e)||!aN(e)||(aI(e)>1&&(e.set=e.add=e.clear=e.delete=aF),Object.freeze(e),t&&aj(e,function(e,t){return aU(t,!0)},!0)),e}function aF(){aC(2)}function az(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function aB(e){var t=om[e];return t||aC(18,e),t}function aW(e,t){t&&(aB("Patches"),e.u=[],e.s=[],e.v=t)}function a$(e){aV(e),e.p.forEach(aq),e.p=null}function aV(e){e===oi&&(oi=e.l)}function aH(e){return oi={p:[],l:oi,h:e,m:!0,_:0}}function aq(e){var t=e[od];0===t.i||1===t.i?t.j():t.g=!0}function aK(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.O||aB("ES5").S(t,e,r),r?(n[od].P&&(a$(t),aC(4)),aN(e)&&(e=aG(t,e),t.l||aY(t,e)),t.u&&aB("Patches").M(n[od].t,e,t.u,t.s)):e=aG(t,n,[]),a$(t),t.u&&t.v(t.u,t.s),e!==oc?e:void 0}function aG(e,t,n){if(az(t))return t;var r=t[od];if(!r)return aj(t,function(i,a){return aQ(e,r,t,i,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return aY(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=aD(r.k):r.o,a=i,o=!1;3===r.i&&(a=new Set(i),i.clear(),o=!0),aj(a,function(t,a){return aQ(e,r,i,t,a,n,o)}),aY(e,i,!1),n&&e.u&&aB("Patches").N(r,n,e.u,e.s)}return r.o}function aQ(e,t,n,r,i,a,o){if(aT(i)){var s=aG(e,i,a&&t&&3!==t.i&&!aO(t.R,r)?a.concat(r):void 0);if(aP(n,r,s),!aT(s))return;e.m=!1}else o&&n.add(i);if(aN(i)&&!az(i)){if(!e.h.D&&e._<1)return;aG(e,i),t&&t.A.l||aY(e,i)}}function aY(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&aU(t,n)}function aJ(e,t){var n=e[od];return(n?aL(n):e)[t]}function aX(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function aZ(e){e.P||(e.P=!0,e.l&&aZ(e.l))}function a0(e){e.o||(e.o=aD(e.t))}function a1(e,t,n){var r,i,a,o,s,l,c,u=aA(t)?aB("MapSet").F(t,n):aM(t)?aB("MapSet").T(t,n):e.O?(a=i={i:(r=Array.isArray(t))?1:0,A:n?n.A:oi,P:!1,I:!1,R:{},l:n,t:t,k:null,o:null,j:null,C:!1},o=og,r&&(a=[i],o=ow),l=(s=Proxy.revocable(a,o)).revoke,c=s.proxy,i.k=c,i.j=l,c):aB("ES5").J(t,n);return(n?n.A:oi).p.push(u),u}function a2(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return aD(e)}o(aE,"applyMiddleware",()=>oI,e=>oI=e),o(aE,"combineReducers",()=>oN,e=>oN=e),o(aE,"compose",()=>oj,e=>oj=e),o(aE,"createStore",()=>oT,e=>oT=e),o(aE,"configureStore",()=>oY),o(aE,"createSlice",()=>oX);var a4,a3,a5,a6,a8,a7,a9,oe,ot,on,or,oi,oa="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),oo="undefined"!=typeof Map,os="undefined"!=typeof Set,ol="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,oc=oa?Symbol.for("immer-nothing"):((or={})["immer-nothing"]=!0,or),ou=oa?Symbol.for("immer-draftable"):"__$immer_draftable",od=oa?Symbol.for("immer-state"):"__$immer_state",of=""+Object.prototype.constructor,op="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,oh=Object.getOwnPropertyDescriptors||function(e){var t={};return op(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},om={},og={get:function(e,t){if(t===od)return e;var n,r,i=aL(e);if(!aO(i,t))return(r=aX(i,t))?"value"in r?r.value:null===(n=r.get)||void 0===n?void 0:n.call(e.k):void 0;var a=i[t];return e.I||!aN(a)?a:a===aJ(e.t,t)?(a0(e),e.o[t]=a1(e.A.h,a,e)):a},has:function(e,t){return t in aL(e)},ownKeys:function(e){return Reflect.ownKeys(aL(e))},set:function(e,t,n){var r=aX(aL(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=aJ(aL(e),t),a=null==i?void 0:i[od];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(aR(n,i)&&(void 0!==n||aO(e.t,t)))return!0;a0(e),aZ(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==aJ(e.t,t)||t in e.t?(e.R[t]=!1,a0(e),aZ(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=aL(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){aC(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){aC(12)}},ow={};aj(og,function(e,t){ow[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ow.deleteProperty=function(e,t){return ow.set.call(this,e,t,void 0)},ow.set=function(e,t,n){return og.set.call(this,e[0],t,n,e[0])};var ov=new(function(){function e(e){var t=this;this.O=ol,this.D=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var i,a=n;return n=e,function(e){var r=this;void 0===e&&(e=a);for(var i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return t.produce(e,function(e){var t;return(t=n).call.apply(t,[r,e].concat(o))})}}if("function"!=typeof n&&aC(6),void 0!==r&&"function"!=typeof r&&aC(7),aN(e)){var o=aH(t),s=a1(t,e,void 0),l=!0;try{i=n(s),l=!1}finally{l?a$(o):aV(o)}return"undefined"!=typeof Promise&&i instanceof Promise?i.then(function(e){return aW(o,r),aK(e,o)},function(e){throw a$(o),e}):(aW(o,r),aK(i,o))}if(!e||"object"!=typeof e){if(void 0===(i=n(e))&&(i=e),i===oc&&(i=void 0),t.D&&aU(i,!0),r){var c=[],u=[];aB("Patches").M(e,i,c,u),r(c,u)}return i}aC(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return t.produceWithPatches(n,function(t){return e.apply(void 0,[t].concat(i))})};var r,i,a=t.produce(e,n,function(e,t){r=e,i=t});return"undefined"!=typeof Promise&&a instanceof Promise?a.then(function(e){return[e,r,i]}):[a,r,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){aN(e)||aC(8),aT(e)&&(aT(t=e)||aC(22,t),e=function e(t){if(!aN(t))return t;var n,r=t[od],i=aI(t);if(r){if(!r.P&&(r.i<4||!aB("ES5").K(r)))return r.t;r.I=!0,n=a2(t,i),r.I=!1}else n=a2(t,i);return aj(n,function(t,i){var a;r&&(2===aI(a=r.t)?a.get(t):a[t])===i||aP(n,t,e(i))}),3===i?new Set(n):n}(t));var t,n=aH(this),r=a1(this,e,void 0);return r[od].C=!0,aV(n),r},t.finishDraft=function(e,t){var n=(e&&e[od]).A;return aW(n,t),aK(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!ol&&aC(20),this.O=e},t.applyPatches=function(e,t){for(n=t.length-1;n>=0;n--){var n,r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var i=aB("Patches").$;return aT(e)?i(e,t):this.produce(e,function(e){return i(e,t)})},e}()),oy=ov.produce;function ob(e){return(ob="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ox(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function oS(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ox(Object(n),!0).forEach(function(t){!function(e,t,n){var r;r=function(e,t){if("object"!==ob(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==ob(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===ob(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ox(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */function ok(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}ov.produceWithPatches.bind(ov),ov.setAutoFreeze.bind(ov),ov.setUseProxies.bind(ov),ov.applyPatches.bind(ov),ov.createDraft.bind(ov),ov.finishDraft.bind(ov);// Inlined version of the `symbol-observable` polyfill
var o_="function"==typeof Symbol&&Symbol.observable||"@@observable",oE=function(){return Math.random().toString(36).substring(7).split("").join(".")},oC={INIT:"@@redux/INIT"+oE(),REPLACE:"@@redux/REPLACE"+oE(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+oE()}};/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */function oT(e,t,n){if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(ok(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw Error(ok(1));return n(oT)(e,t)}if("function"!=typeof e)throw Error(ok(2));var r,i=e,a=t,o=[],s=o,l=!1;/**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */function c(){s===o&&(s=o.slice())}/**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */function u(){if(l)throw Error(ok(3));return a}/**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */function d(e){if("function"!=typeof e)throw Error(ok(4));if(l)throw Error(ok(5));var t=!0;return c(),s.push(e),function(){if(t){if(l)throw Error(ok(6));t=!1,c();var n=s.indexOf(e);s.splice(n,1),o=null}}}/**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */function f(e){if(!/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(ok(7));if(void 0===e.type)throw Error(ok(8));if(l)throw Error(ok(9));try{l=!0,a=i(a,e)}finally{l=!1}for(var t=o=s,n=0;n<t.length;n++)(0,t[n])();return e}return(// reducer returns their initial state. This effectively populates
// the initial state tree.
f({type:oC.INIT}),(r={dispatch:f,subscribe:d,getState:u,replaceReducer:/**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */function(e){if("function"!=typeof e)throw Error(ok(10));i=e,// Any reducers that existed in both the new and old rootReducer
// will receive the previous state. This effectively populates
// the new state tree with any relevant data from the old one.
f({type:oC.REPLACE})}})[o_]=/**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */function(){var e;return(e={/**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */subscribe:function(e){if("object"!=typeof e||null===e)throw Error(ok(11));function t(){e.next&&e.next(u())}return t(),{unsubscribe:d(t)}}})[o_]=function(){return this},e}// When a store is created, an "INIT" action is dispatched so that every
,r)}/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */function oN(e){for(var t,n=Object.keys(e),r={},i=0;i<n.length;i++){var a=n[i];"function"==typeof e[a]&&(r[a]=e[a])}var o=Object.keys(r);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:oC.INIT}))throw Error(ok(12));if(void 0===n(void 0,{type:oC.PROBE_UNKNOWN_ACTION()}))throw Error(ok(13))})}(r)}catch(e){t=e}return function(e,n){if(void 0===e&&(e={}),t)throw t;for(var i=!1,a={},s=0;s<o.length;s++){var l=o[s],c=r[l],u=e[l],d=c(u,n);if(void 0===d)throw n&&n.type,Error(ok(14));a[l]=d,i=i||d!==u}return(i=i||o.length!==Object.keys(e).length)?a:e}}/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */function oj(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */function oI(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw Error(ok(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=t.map(function(e){return e(i)});return r=oj.apply(void 0,a)(n.dispatch),oS(oS({},n),{},{dispatch:r})}}}/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */function oO(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return(// The thunk middleware looks for any functions that were passed to `store.dispatch`.
// If this "action" is really a function, call it and return the result.
"function"==typeof i?i(n,r,e):t(i))}}}}var oP=oO();// Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks
oP.withExtraArgument=oO;var oR=(l=function(e,t){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),oA=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},oM=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},oL=Object.defineProperty,oD=Object.defineProperties,oU=Object.getOwnPropertyDescriptors,oF=Object.getOwnPropertySymbols,oz=Object.prototype.hasOwnProperty,oB=Object.prototype.propertyIsEnumerable,oW=function(e,t,n){return t in e?oL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},o$=function(e,t){for(var n in t||(t={}))oz.call(t,n)&&oW(e,n,t[n]);if(oF)for(var r=0,i=oF(t);r<i.length;r++){var n=i[r];oB.call(t,n)&&oW(e,n,t[n])}return e},oV=function(e,t){return oD(e,oU(t))},oH="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?oj:oj.apply(null,arguments)};// src/createAction.ts
function oq(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var i=t.apply(void 0,n);if(!i)throw Error("prepareAction did not return an object");return o$(o$({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var oK=/** @class */function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return oR(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,oM([void 0],e[0].concat(this)))):new(t.bind.apply(t,oM([void 0],e.concat(this))))},t}(Array),oG=/** @class */function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return oR(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,oM([void 0],e[0].concat(this)))):new(t.bind.apply(t,oM([void 0],e.concat(this))))},t}(Array);function oQ(e){return aN(e)?oy(e,function(){}):e}function oY(e){var t,n=function(e){var t,n,r,i;return void 0===(t=e)&&(t={}),r=void 0===(n=t.thunk)||n,t.immutableCheck,t.serializableCheck,t.actionCreatorCheck,i=new oK,r&&("boolean"==typeof r?i.push(oP):i.push(oP.withExtraArgument(r.extraArgument))),i},r=e||{},i=r.reducer,a=void 0===i?void 0:i,o=r.middleware,s=void 0===o?n():o,l=r.devTools,c=void 0===l||l,u=r.preloadedState,d=void 0===u?void 0:u,f=r.enhancers,p=void 0===f?void 0:f;if("function"==typeof a)t=a;else if(// src/isPlainObject.ts
function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}(a))t=oN(a);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=s;"function"==typeof h&&(h=h(n));var m=oI.apply(void 0,h),g=oj;c&&(g=oH(o$({trace:!1},"object"==typeof c&&c)));var w=new oG(m),v=w;Array.isArray(p)?v=oM([m],p):"function"==typeof p&&(v=p(w));var y=g.apply(void 0,v);return oT(t,d,y)}// src/mapBuilders.ts
function oJ(e){var t,n={},r=[],i={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(!r)throw Error("`builder.addCase` cannot be called with an empty action type");if(r in n)throw Error("`builder.addCase` cannot be called with two reducers for the same action type");return n[r]=t,i},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[n,r,t]}function oX(e){var t,n=e.name;if(!n)throw Error("`name` is a required option for createSlice");var r="function"==typeof e.initialState?e.initialState:oQ(e.initialState),i=e.reducers||{},a=Object.keys(i),o={},s={},l={};function c(){var t="function"==typeof e.extraReducers?oJ(e.extraReducers):[e.extraReducers],n=t[0],i=t[1],a=void 0===i?[]:i,o=t[2],l=void 0===o?void 0:o,c=o$(o$({},void 0===n?{}:n),s);return function(e,t,n,r){void 0===n&&(n=[]);var i,a="function"==typeof t?oJ(t):[t,n,void 0],o=a[0],s=a[1],l=a[2];if("function"==typeof e)i=function(){return oQ(e())};else{var c=oQ(e);i=function(){return c}}function u(e,t){void 0===e&&(e=i());var n=oM([o[t.type]],s.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===n.filter(function(e){return!!e}).length&&(n=[l]),n.reduce(function(e,n){if(n){if(aT(e)){var r=n(e,t);return void 0===r?e:r}if(aN(e))return oy(e,function(e){return n(e,t)});var r=n(e,t);if(void 0===r){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e},e)}return u.getInitialState=i,u}(r,function(e){for(var t in c)e.addCase(t,c[t]);for(var n=0;n<a.length;n++){var r=a[n];e.addMatcher(r.matcher,r.reducer)}l&&e.addDefaultCase(l)})}return a.forEach(function(e){var t,r,a=i[e],c=n+"/"+e;"reducer"in a?(t=a.reducer,r=a.prepare):t=a,o[e]=t,s[c]=t,l[e]=r?oq(c,r):oq(c)}),{name:n,reducer:function(e,n){return t||(t=c()),t(e,n)},actions:l,caseReducers:o,getInitialState:function(){return t||(t=c()),t.getInitialState()}}}var oZ=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},o0=["name","message","stack","code"],o1=function(e,t){this.payload=e,this.meta=t},o2=function(e,t){this.payload=e,this.meta=t},o4=function(e){if("object"==typeof e&&null!==e){for(var t={},n=0;n<o0.length;n++){var r=o0[n];"string"==typeof e[r]&&(t[r]=e[r])}return t}return{message:String(e)}};function o3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}!function(){function e(e,t,n){var r=oq(e+"/fulfilled",function(e,t,n,r){return{payload:e,meta:oV(o$({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}}),i=oq(e+"/pending",function(e,t,n){return{payload:void 0,meta:oV(o$({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),a=oq(e+"/rejected",function(e,t,r,i,a){return{payload:i,error:(n&&n.serializeError||o4)(e||"Rejected"),meta:oV(o$({},a||{}),{arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),o="undefined"!=typeof AbortController?AbortController:/** @class */function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(s,l,c){var u,d=(null==n?void 0:n.idGenerator)?n.idGenerator(e):oZ(),f=new o;function p(e){u=e,f.abort()}var h=function(){var o,h;return o=this,h=function(){var o,h,m,g,w,v;return oA(this,function(y){switch(y.label){case 0:var b;if(y.trys.push([0,4,,5]),!(null!==(b=g=null==(o=null==n?void 0:n.condition)?void 0:o.call(n,e,{getState:l,extra:c}))&&"object"==typeof b&&"function"==typeof b.then))return[3/*break*/,2];return[4/*yield*/,g];case 1:g=y.sent(),y.label=2;case 2:if(!1===g||f.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return w=new Promise(function(e,t){return f.signal.addEventListener("abort",function(){return t({name:"AbortError",message:u||"Aborted"})})}),s(i(d,e,null==(h=null==n?void 0:n.getPendingMeta)?void 0:h.call(n,{requestId:d,arg:e},{getState:l,extra:c}))),[4/*yield*/,Promise.race([w,Promise.resolve(t(e,{dispatch:s,getState:l,extra:c,requestId:d,signal:f.signal,abort:p,rejectWithValue:function(e,t){return new o1(e,t)},fulfillWithValue:function(e,t){return new o2(e,t)}})).then(function(t){if(t instanceof o1)throw t;return t instanceof o2?r(t.payload,d,e,t.meta):r(t,d,e)})])];case 3:return m=y.sent(),[3/*break*/,5];case 4:return m=(v=y.sent())instanceof o1?a(null,d,e,v.payload,v.meta):a(v,d,e),[3/*break*/,5];case 5:return n&&!n.dispatchConditionRejection&&a.match(m)&&m.meta.condition||s(m),[2/*return*/,m]}})},new Promise(function(e,t){var n=function(e){try{i(h.next(e))}catch(e){t(e)}},r=function(e){try{i(h.throw(e))}catch(e){t(e)}},i=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(n,r)};i((h=h.apply(o,null)).next())})}();return Object.assign(h,{abort:p,requestId:d,arg:e,unwrap:function(){return h.then(o3)}})}},{pending:i,rejected:a,fulfilled:r,typePrefix:e})}e.withTypes=function(){return e}}();var o5="listenerMiddleware";oq(o5+"/add"),oq(o5+"/removeAll"),oq(o5+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==c?c:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,function(){function e(e,t){var n=i[e];return n?n.enumerable=t:i[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[od];return og.get(t,e)},set:function(t){var n=this[od];og.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][od];if(!i.P)switch(i.i){case 5:r(i)&&aZ(i);break;case 4:n(i)&&aZ(i)}}}function n(e){for(var t=e.t,n=e.k,r=op(n),i=r.length-1;i>=0;i--){var a=r[i];if(a!==od){var o=t[a];if(void 0===o&&!aO(t,a))return!0;var s=n[a],l=s&&s[od];if(l?l.t!==o:!aR(s,o))return!0}}var c=!!t[od];return r.length!==op(t).length+(c?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var i={};om.ES5||(om.ES5={J:function(t,n){var r=Array.isArray(t),i=function(t,n){if(t){for(var r=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(r,""+i,e(i,!0));return r}var a=oh(n);delete a[od];for(var o=op(a),s=0;s<o.length;s++){var l=o[s];a[l]=e(l,t||!!a[l].enumerable)}return Object.create(Object.getPrototypeOf(n),a)}(r,t),a={i:r?5:4,A:n?n.A:oi,P:!1,I:!1,R:{},l:n,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,od,{value:a,writable:!0}),i},S:function(e,n,i){i?aT(n)&&n[od].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[od];if(n){var i=n.t,a=n.k,o=n.R,s=n.i;if(4===s)aj(a,function(t){t!==od&&(void 0!==i[t]||aO(i,t)?o[t]||e(a[t]):(o[t]=!0,aZ(n)))}),aj(i,function(e){void 0!==a[e]||aO(a,e)||(o[e]=!1,aZ(n))});else if(5===s){if(r(n)&&(aZ(n),o.length=!0),a.length<i.length)for(var l=a.length;l<i.length;l++)o[l]=!1;else for(var c=i.length;c<a.length;c++)o[c]=!0;for(var u=Math.min(a.length,i.length),d=0;d<u;d++)a.hasOwnProperty(d)||(o[d]=!0),void 0===o[d]&&e(a[d])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}();const o6=(0,aE.createSlice)({name:"userResponse",initialState:{item:[]},reducers:{addResponse:(e,t)=>{e.item.push(t.payload)}}}),{addResponse:o8}=o6.actions;var o7=o6.reducer;const o9=(0,aE.createSlice)({name:"User",initialState:null,reducers:{addUser:(e,t)=>t.payload,removeUser:(e,t)=>null}}),{addUser:se,removeUser:st}=o9.actions;var sn=o9.reducer;const sr=(0,aE.configureStore)({reducer:{userResponse:o7,User:sn}});var h=f("ayMG0"),m=f("acw62"),si=({targetTime:e})=>{let t=()=>{let t=e-new Date().getTime(),n={};return t>0&&(n={days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}),n},[n,r]=(0,m.useState)(t());(0,m.useEffect)(()=>{let e=setTimeout(()=>{r(t())},1e3);return()=>clearTimeout(e)});let{days:i,hours:a,minutes:o,seconds:s}=n;return/*#__PURE__*/(0,h.jsxs)("div",{children:[i>0&&/*#__PURE__*/(0,h.jsxs)("p",{children:[i," ",1===i?"day":"days"]}),/*#__PURE__*/(0,h.jsxs)("p",{children:[a.toString().padStart(2,"0")," : ",o.toString().padStart(2,"0")," : ",s.toString().padStart(2,"0")]})]})},sa=()=>{let{newInst:e,newDuration:t,newTitle:n,ALLTEST:r}=(0,m.useContext)(ap.default),[i,a]=(0,y.useSearchParams)();var o=parseInt(i.get("v1"));let[s,l]=(0,m.useState)([]),[c,u]=(0,m.useState)(o),[d,f]=(0,m.useState)({});(0,m.useRef)(null),(0,m.useRef)(null);let p=[];s.map(e=>{let t={Question:e.Question,options:[e.option1,e.option2,e.option3,e.option4],correctAnswer:e.Answer,QuestionId:e.quesId};p.push(t)});let[g,w]=(0,m.useState)(!1),[b,x]=(0,m.useState)(o),[S,k]=(0,m.useState)(!1),[_,E]=(0,m.useState)(!1),[C,T]=(0,m.useState)(o+1);var N=1;let j=(0,v.useNavigate)(),[I,P]=(0,m.useState)("0"),[R,A]=(0,m.useState)(" "),M=O(e=>e.userResponse.item);z();let L=window.location.href;console.log(L),console.log(M);let[D,U]=(0,m.useState)([]),{id:F}=(0,v.useParams)(),B=r.filter(e=>e.id==F),W={QuestionNo:o,selectedAnswer:d[o],status:d.hasOwnProperty(o)?" Answered":"not Answered",QuizCategory:B[0]?.name};console.log(W),console.log(d.currentQuestions);let $=()=>{let e=document.documentElement;e.requestFullscreen?(e.requestFullscreen(),j(`/testenv/${F}`)):e.webkitRequestFullscreen?(e.webkitRequestFullscreen(),j(`/testenv/${F}`)):e.msRequestFullscreen&&(e.msRequestFullscreen(),j(`/testenv/${F}`))},V=(e,t)=>{w(!0),a({v1:e.target.innerText}),u(o),T(t),A(" ")},H=new Date().getTime()+9e5;var q=1;(0,m.useEffect)(()=>{$(),Y()},[]);// useEffect(() => {
//  postData();
// }, [path]);
// async function postData() {
//   try {
//     const { markForReview, selectedAnswer, status, QuestionNo } =
//       UserResponse;
//     const response = await fetch("http://localhost:8000/quiz/useranswer", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         markForReview: markForReview,
//         selectedAnswer: selectedAnswer,
//         status: status,
//         QuestionNo: QuestionNo,
//       }),
//     });
//     const result = await response.json();
//     setData(result);
//   } catch (error) {
//     console.error("Error sending data:", error);
//   }
// }
let K=new Date,G=K.getHours();console.log(G),K.getMinutes(),K.getSeconds();let Q=e=>{let{value:t}=e.target,{id:n}=e.target;console.log(n),f({...d,[o]:t})};async function Y(){let e=await fetch("http://localhost:3000/api/aptitude/timework"),t=await e.json();l(t)}if(console.log(d),d.hasOwnProperty(o)){let e=document.getElementById(`key${o}`);e.style.backgroundColor="#4ADE80"}return console.log(),/*#__PURE__*/(0,h.jsx)("div",{className:"container-fluid  p-0",children:/*#__PURE__*/(0,h.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,h.jsx)("h3",{className:"text-center p-2 tw-bg-fuchsia-200",children:B[0]?.name}),/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-3 tw-p-3",children:[/*#__PURE__*/(0,h.jsx)("h4",{children:"Question Platlee"}),/*#__PURE__*/(0,h.jsx)("hr",{}),/*#__PURE__*/(0,h.jsx)("div",{className:" tw-flex tw-gap-4 tw-flex-wrap tw-p-2",children:s.map(e=>/*#__PURE__*/(0,h.jsx)("div",{className:"tw-cursor-pointer tw-w-16 tw-h-16 rounded-circle tw-flex tw-justify-center tw-items-center tw-bg-gray-200 tw-shadow-md",id:`key${N++}`,onClick:()=>{V(event,e.quesId)},children:/*#__PURE__*/(0,h.jsx)("span",{children:q++})},e.quesId))}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("hr",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-start tw-items-center",children:[/*#__PURE__*/(0,h.jsx)("div",{className:" border border-success tw-w-16 tw-h-16 rounded-circle tw-flex tw-justify-center tw-items-center tw-bg-gray-200 tw-shadow-md",children:/*#__PURE__*/(0,h.jsx)("span",{className:" tw-text-lg",children:1})}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-lg",children:"Not Answered"})]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-start tw-items-center",children:[/*#__PURE__*/(0,h.jsx)("div",{className:" border border-success tw-w-16 tw-h-16 rounded-circle tw-flex tw-justify-center tw-items-center tw-bg-green-500 tw-shadow-md",children:/*#__PURE__*/(0,h.jsx)("span",{className:" tw-text-lg",children:1})}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-lg",children:" Answered"})]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-lg",children:"Answered question consider for evaluation"})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-6 tw-p-3",children:[/*#__PURE__*/(0,h.jsxs)("h4",{children:["Question ",o,":"]}),/*#__PURE__*/(0,h.jsx)("hr",{}),/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h5",{className:" tw-text-start",children:s[o]?.Question}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("h5",{children:"Select only one :"})]}),/*#__PURE__*/(0,h.jsx)("br",{}),p[o]?.options.map((e,t)=>h.jsx("div",{children:h.jsx(h.Fragment,{children:h.jsxs("div",{id:"1",className:` tw-m-6 tw-flex tw-gap-6 tw-border-2 tw-border-gray-200 tw-border-solid tw-p-5 tw-rounded-lg hover:tw-shadow-md hover:tw-border-green-600 ${"1"===t?"tw-bg-green-500":"tw-border-gray-200"}`,children:[h.jsx("input",{type:"radio",className:" tw-h-[20px] tw-w-[20px] active:tw-bg-green-500",name:`question_${o}`,id:`question_${o+t}`,value:e,checked:d[o]===e,onChange:()=>Q(event)}),h.jsx("label",{htmlFor:`question_${o+t}`,id:t+1,className:"answer1 tw-text-xl tw-items-center tw-flex tw-justify-center",children:e})]})})},t)),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-2 tw-flex tw-justify-between",children:[/*#__PURE__*/(0,h.jsx)("div",{className:" tw-flex tw-justify-between tw-gap-6",children:/*#__PURE__*/(0,h.jsxs)("div",{children:[" ",/*#__PURE__*/(0,h.jsxs)("button",{onClick:()=>{!function(){f({});let e=document.getElementById(`key${o}`);e.style.backgroundColor="#e5e7eb"}()},className:" tw-px-4 tw-py-2 tw-bg-green-400 tw-rounded-md tw-shadow-md tw-border-0 tw-text-lg",children:[" ","Clear Response"]})]})}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-between tw-gap-6",children:[/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsx)("button",{disabled:0===o,className:" tw-px-6 tw-py-2 tw-bg-green-400 tw-rounded-md tw-shadow-md tw-border-0 tw-text-lg",onClick:()=>{o>0&&a({v1:o-1})},children:"Previous"})}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsx)("button",{disabled:o===s.length-1,className:" tw-px-6 tw-py-2 tw-bg-green-400 tw-rounded-md tw-shadow-md tw-border-0 tw-text-lg",onClick:()=>{o<s.length-1&&(a({v1:o+1}),P(0))},children:"Save & Next"})})]})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-3",children:[/*#__PURE__*/(0,h.jsx)("div",{className:"",children:/*#__PURE__*/(0,h.jsx)(Detection,{})}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-flex-col tw-justify-center tw-gap-3",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-start tw-items-center",children:[" ",/*#__PURE__*/(0,h.jsx)("h3",{children:"User Name"})]}),/*#__PURE__*/(0,h.jsx)("div",{className:"  tw-flex tw-justify-center tw-items-center tw-p-2 tw-bg-gray-200 tw-rounded-md",children:/*#__PURE__*/(0,h.jsxs)("h4",{className:" tw-text-center tw-m-auto",children:[" ",/*#__PURE__*/(0,h.jsx)(si,{targetTime:H})]})}),/*#__PURE__*/(0,h.jsx)("div",{className:" tw-flex tw-justify-center",children:/*#__PURE__*/(0,h.jsx)("button",{className:" tw-bg-green-500 tw-px-6 tw-py-[5px] tw-border-0 tw-text-xl tw-shadow-lg tw-rounded-md",children:"End Test"})})]})]})]})})},h=f("ayMG0"),m=f("acw62");f("lzNIT");var v=f("aphAM"),so=()=>{let[e,t]=(0,m.useState)(!1),[n,r]=(0,m.useState)(" "),i=(0,m.useRef)(null),a=(0,m.useRef)(null),[o,s]=(0,m.useState)(""),l=(0,v.useNavigate)(),c=z();return(0,m.useEffect)(()=>{ej(ao).onAuthStateChanged(e=>{if(e){let{uid:t,email:n,displayName:r}=e;c(se({uid:t,email:n,displayName:r}))}else c(st())},void 0,void 0)},[]),/*#__PURE__*/(0,h.jsx)("div",{className:" tw-h-[700] tw-flex tw-justify-center tw-items-center tw-bg-[#D09683]",children:/*#__PURE__*/(0,h.jsxs)("div",{className:"  tw-p-4 tw-bg-[#44AA97] tw-opacity-85 tw-rounded-md tw-shadow-md tw-w-[450px]",children:[/*#__PURE__*/(0,h.jsxs)("form",{onSubmit:e=>{e.preventDefault()},action:"",className:"  tw-flex tw-justify-center tw-flex-col ",children:[/*#__PURE__*/(0,h.jsx)("h1",{className:" tw-text-start tw-text-[#333333] tw-font-bold tw-text-3xl tw-ml-10",children:e?"SignUp":"Login"}),/*#__PURE__*/(0,h.jsx)("br",{}),e&&/*#__PURE__*/(0,h.jsxs)(h.Fragment,{children:[/*#__PURE__*/(0,h.jsx)("input",{type:"text",value:o,className:" tw-bg-[#333333] tw-w-[350px] tw-m-auto tw-p-2 tw-rounded-md tw-shadow-sm tw-text-white",placeholder:"Full Name",onChange:e=>{s(e.target.value)}}),/*#__PURE__*/(0,h.jsx)("br",{})]}),/*#__PURE__*/(0,h.jsx)("input",{type:"email",ref:i,className:" tw-bg-[#333333] tw-w-[350px] tw-m-auto tw-p-2 tw-rounded-md tw-shadow-sm tw-text-white",placeholder:"Email or Phone Number"}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("input",{type:"password",ref:a,className:" tw-bg-[#333333] tw-w-[350px] tw-m-auto tw-p-2 tw-rounded-md tw-shadow-sm tw-text-white",placeholder:"Password"}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-[#333333] tw-text-lg tw-font-semibold tw-ml-10",children:n}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("button",{className:"  tw-w-[350px] tw-m-auto tw-p-2 tw-rounded-md tw-shadow-sm tw-text-white tw-bg-[#333333]",onClick:function(){let t=function(e,t,n){let r=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/.test(e),i=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(t);return(/^[A-Z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*$/.test(void 0),r)?i?" ":"Password is not valid":"Email ID is not valid"}(i?.current?.value,a?.current?.value);if(r(t),e)n7(ao,i?.current?.value,a?.current?.value).then(e=>{let t=e.user;console.log(t),re(t,{displayName:o}).then(()=>{let{uid:e,email:t,displayName:n}=ao.currentUser;c(se({uid:e,email:t,displayName:n})),l("/")})}).catch(e=>{e.code;let t=e.message;r(t.substring(22,40))})," "===n&&l("/");else{var s,u;(s=i?.current?.value,u=a?.current?.value,tn(ao.app)?Promise.reject(tT(ao)):n6(ej(ao),nH.credential(s,u)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&n8(ao),e})).then(e=>{let t=e.user;console.log(t);// ...
}).catch(e=>{e.code;let t=e.message;r(t.substring(22,40))})," "===n&&l("/")}},children:e?"SignUp":"Login"})]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-gray-600 tw-text-lg tw-ml-10 tw-cursor-pointer",children:[e?"Already registered":"New Here"," ? \xa0",/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-text-white",onClick:function(){t(!e)},children:[" ",e?"login":"Sign up now"]})]})]})})},h=f("ayMG0"),m=f("acw62"),ss={};!// Last Updated On: 2020-08-12 11:18:41 AM UTC
// ________________
// DetectRTC v1.4.1
// Open-Sourced: https://github.com/muaz-khan/DetectRTC
// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------
function(){var e,t,n,r,i,a,o="Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",s="object"==typeof B&&"object"==typeof B.versions&&B.versions.node&&/*node-process*/!1;if(s){var l=B.versions.node.toString().replace("v","");o="Nodejs/"+l+" (NodeOS) AppleWebKit/"+l+" (KHTML, like Gecko) Nodejs/"+l+" Nodejs/"+l}e=void 0!==c?c:window,"undefined"==typeof window&&("undefined"==typeof window&&void 0!==c&&(c.navigator={userAgent:o,getUserMedia:function(){}},/*global window:true */e.window=c),"undefined"==typeof location&&/*global location:true */(e.location={protocol:"file:",href:"",hash:""}),"undefined"==typeof screen&&/*global screen:true */(e.screen={width:0,height:0}));/*global navigator:true */var u=window.navigator;void 0!==u?(void 0!==u.webkitGetUserMedia&&(u.getUserMedia=u.webkitGetUserMedia),void 0!==u.mozGetUserMedia&&(u.getUserMedia=u.mozGetUserMedia)):u={getUserMedia:function(){},userAgent:o};var d=!!/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(u.userAgent||""),f=-1!==u.userAgent.indexOf("Edge")&&(!!u.msSaveOrOpenBlob||!!u.msSaveBlob),p=!!window.opera||u.userAgent.indexOf(" OPR/")>=0,h=u.userAgent.toLowerCase().indexOf("firefox")>-1&&"netscape"in window&&/ rv:/.test(u.userAgent),m=/^((?!chrome|android).)*safari/i.test(u.userAgent),g=!!window.chrome&&!p,w="undefined"!=typeof document&&!!document.documentMode&&!f;// via: https://gist.github.com/cou929/7973956
function v(e,t){var n=0,r=!1,i=window.setInterval(function(){e()&&(window.clearInterval(i),t(r)),n++>50&&(window.clearInterval(i),t(r=!0))},10)}var y={Android:function(){return u.userAgent.match(/Android/i)},BlackBerry:function(){return u.userAgent.match(/BlackBerry|BB10/i)},iOS:function(){return u.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return u.userAgent.match(/Opera Mini/i)},Windows:function(){return u.userAgent.match(/IEMobile/i)},any:function(){return y.Android()||y.BlackBerry()||y.iOS()||y.Opera()||y.Windows()},getOsName:function(){var e="Unknown OS";return y.Android()&&(e="Android"),y.BlackBerry()&&(e="BlackBerry"),y.iOS()&&(e="iOS"),y.Opera()&&(e="Opera Mini"),y.Windows()&&(e="Windows"),e}},b="Unknown OS",x="Unknown OS Version",S=// via: http://jsfiddle.net/ChristianL/AVyND/
function(){for(var e,t=u.appVersion,n=u.userAgent,r="-",i=[{s:"Chrome OS",r:/CrOS/},{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}],a=0;e=i[a];a++)if(e.r.test(n)){r=e.s;break}var o="-";switch(/Windows/.test(r)&&(/Windows (.*)/.test(r)&&(o=/Windows (.*)/.exec(r)[1]),r="Windows"),r){case"Mac OS X":/Mac OS X (10[\.\_\d]+)/.test(n)&&(o=/Mac OS X (10[\.\_\d]+)/.exec(n)[1]);break;case"Android":/Android ([\.\_\d]+)/.test(n)&&(o=/Android ([\.\_\d]+)/.exec(n)[1]);break;case"iOS":/OS (\d+)_(\d+)_?(\d+)?/.test(n)&&(o=/OS (\d+)_(\d+)_?(\d+)?/.exec(t))&&o.length>3&&(o=o[1]+"."+o[2]+"."+(0|o[3]))}return{osName:r,osVersion:o}}();S&&S.osName&&"-"!=S.osName?(b=S.osName,x=S.osVersion):y.any()&&"Android"==(b=y.getOsName())&&(x=!!(n=(t=(t||u.userAgent).toLowerCase()).match(/android\s([0-9\.]*)/))&&n[1]);var s="object"==typeof B&&"object"==typeof B.versions&&B.versions.node;"Unknown OS"===b&&s&&(b="Nodejs",x=B.versions.node.toString().replace("v",""));var k=!1,_=!1;["captureStream","mozCaptureStream","webkitCaptureStream"].forEach(function(e){"undefined"!=typeof document&&"function"==typeof document.createElement&&(!k&&e in document.createElement("canvas")&&(k=!0),!_&&e in document.createElement("video")&&(_=!0))});var E=/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/,C=/([0-9]{1,3}(\.[0-9]{1,3}){3})/,T=/[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}/,N=[],j=[],I=[],O=[];u.mediaDevices&&u.mediaDevices.enumerateDevices&&// Thanks @xdumaine/enumerateDevices
(u.enumerateDevices=function(e){var t=u.mediaDevices.enumerateDevices();t&&t.then?u.mediaDevices.enumerateDevices().then(e).catch(function(){e([])}):e([])});// Media Devices detection
var P=!1;"undefined"!=typeof MediaStreamTrack&&"getSources"in MediaStreamTrack?P=!0:u.mediaDevices&&u.mediaDevices.enumerateDevices&&(P=!0);var R=!1,A=!1,M=!1,L=!1,D=!1,U=window.DetectRTC||{};// ----------
// DetectRTC.browser.name || DetectRTC.browser.version || DetectRTC.browser.fullVersion
U.browser=// this one can also be used:
// https://www.websocket.org/js/stuff.js (DetectBrowser.js)
function(){u.appVersion;var e,t,n,r=u.userAgent,i=u.appName,a=""+parseFloat(u.appVersion),o=parseInt(u.appVersion,10);// In Opera, the true version is after 'Opera' or after 'Version'
if(p){i="Opera";try{o=(a=u.userAgent.split("OPR/")[1].split(" ")[0]).split(".")[0]}catch(e){a="0.0.0.0",o=0}}else w?((t=r.indexOf("rv:"))>0?a=r.substring(t+3):(t=r.indexOf("MSIE"),a=r.substring(t+5)),i="IE"):g?(t=r.indexOf("Chrome"),i="Chrome",a=r.substring(t+7)):m?-1!==r.indexOf("CriOS")?(t=r.indexOf("CriOS"),i="Chrome",a=r.substring(t+6)):-1!==r.indexOf("FxiOS")?(t=r.indexOf("FxiOS"),i="Firefox",a=r.substring(t+6)):(t=r.indexOf("Safari"),i="Safari",a=r.substring(t+7),-1!==(t=r.indexOf("Version"))&&(a=r.substring(t+8)),-1!==u.userAgent.indexOf("Version/")&&(a=u.userAgent.split("Version/")[1].split(" ")[0])):h?(t=r.indexOf("Firefox"),i="Firefox",a=r.substring(t+8)):(e=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(i=r.substring(e,t),a=r.substring(t+1),i.toLowerCase()===i.toUpperCase()&&(i=u.appName));return f&&(i="Edge",a=u.userAgent.split("Edge/")[1]),-1!==(n=a.search(/[; \)]/))&&(a=a.substring(0,n)),isNaN(o=parseInt(""+a,10))&&(a=""+parseFloat(u.appVersion),o=parseInt(u.appVersion,10)),{fullVersion:a,version:o,name:i,isPrivateBrowsing:!1}}(),function(e){var t,n;try{if(window.webkitRequestFileSystem)window.webkitRequestFileSystem(window.TEMPORARY,1,function(){t=!1},function(e){t=!0});else if(window.indexedDB&&/Firefox/.test(window.navigator.userAgent)){try{(n=window.indexedDB.open("test")).onerror=function(){return!0}}catch(e){t=!0}void 0===t&&v(function(){return"done"===n.readyState},function(e){e||(t=!n.result)})}else if(function(e){var t=e.toLowerCase();if(0===t.indexOf("msie")&&0===t.indexOf("trident"))return!1;var n=/(?:msie|rv:)\s?([\d\.]+)/.exec(t);return!!(n&&parseInt(n[1],10)>=10)}(window.navigator.userAgent)){t=!1;try{window.indexedDB||(t=!0)}catch(e){t=!0}}else if(window.localStorage&&/Safari/.test(window.navigator.userAgent)){try{window.localStorage.setItem("test",1)}catch(e){t=!0}void 0===t&&(t=!1,window.localStorage.removeItem("test"))}}catch(e){t=!1}v(function(){return void 0!==t},function(n){e(t)})}(function(e){U.browser.isPrivateBrowsing=!!e}),// DetectRTC.isChrome || DetectRTC.isFirefox || DetectRTC.isEdge
U.browser["is"+U.browser.name]=!0,// -----------
U.osName=b,U.osVersion=x,"object"==typeof B&&"object"==typeof B.versions&&B.versions["node-webkit"];// --------- Detect if system supports WebRTC 1.0 or WebRTC 1.1.
var F=!1;["RTCPeerConnection","webkitRTCPeerConnection","mozRTCPeerConnection","RTCIceGatherer"].forEach(function(e){!F&&e in window&&(F=!0)}),U.isWebRTCSupported=F,//-------
U.isORTCSupported="undefined"!=typeof RTCIceGatherer;// --------- Detect if system supports screen capturing API
var z=!1;U.browser.isChrome&&U.browser.version>=35?z=!0:U.browser.isFirefox&&U.browser.version>=34?z=!0:U.browser.isEdge&&U.browser.version>=17?z=!0:"Android"===U.osName&&U.browser.isChrome&&(z=!0),(u.getDisplayMedia||u.mediaDevices&&u.mediaDevices.getDisplayMedia)&&(z=!0),!/^(https:|chrome-extension:)$/g.test(location.protocol||"")&&("undefined"!=typeof document&&"string"==typeof document.domain&&document.domain.search&&-1===document.domain.search(/localhost|127.0./g)&&(U.browser.isChrome||U.browser.isEdge||U.browser.isOpera)?z=!1:U.browser.isFirefox&&(z=!1)),U.isScreenCapturingSupported=z;// --------- Detect if WebAudio API are supported
var W={isSupported:!1,isCreateMediaStreamSourceSupported:!1};["AudioContext","webkitAudioContext","mozAudioContext","msAudioContext"].forEach(function(e){!W.isSupported&&e in window&&(W.isSupported=!0,window[e]&&"createMediaStreamSource"in window[e].prototype&&(W.isCreateMediaStreamSourceSupported=!0))}),U.isAudioContextSupported=W.isSupported,U.isCreateMediaStreamSourceSupported=W.isCreateMediaStreamSourceSupported;// ---------- Detect if SCTP/RTP channels are supported.
var $=!1;U.browser.isChrome&&U.browser.version>31&&($=!0),U.isRtpDataChannelsSupported=$;var V=!1;U.browser.isFirefox&&U.browser.version>28?V=!0:U.browser.isChrome&&U.browser.version>25?V=!0:U.browser.isOpera&&U.browser.version>=11&&(V=!0),U.isSctpDataChannelsSupported=V,// ---------
U.isMobileDevice=d;// ------
var H=!1;u.getUserMedia?H=!0:u.mediaDevices&&u.mediaDevices.getUserMedia&&(H=!0),U.browser.isChrome&&U.browser.version>=46&&!/^(https:|chrome-extension:)$/g.test(location.protocol||"")&&"undefined"!=typeof document&&"string"==typeof document.domain&&document.domain.search&&-1===document.domain.search(/localhost|127.0./g)&&(H="Requires HTTPs"),"Nodejs"===U.osName&&(H=!1),U.isGetUserMediaSupported=H;var q="";screen.width&&(q+=""+(screen.width?screen.width:"")+" x "+(screen.height?screen.height:"")),U.displayResolution=q,U.displayAspectRatio=(a=function e(t,n){return 0==n?t:e(n,t%n)}(r=screen.width,i=screen.height),r/a/(i/a)).toFixed(2),// ----------
U.isCanvasSupportsStreamCapturing=k,U.isVideoSupportsStreamCapturing=_,"Chrome"==U.browser.name&&U.browser.version>=53&&(U.isCanvasSupportsStreamCapturing||(U.isCanvasSupportsStreamCapturing="Requires chrome flag: enable-experimental-web-platform-features"),U.isVideoSupportsStreamCapturing||(U.isVideoSupportsStreamCapturing="Requires chrome flag: enable-experimental-web-platform-features")),// ------
U.DetectLocalIPAddress=// via: https://github.com/diafygi/webrtc-ips
function(e,t){if(U.isWebRTCSupported){var n=!0,r=!0;(function(e,t){if("undefined"!=typeof document&&"function"==typeof document.getElementById){var n={},r=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(!r){var i=document.getElementById("iframe");if(!i)return;var a=i.contentWindow;r=a.RTCPeerConnection||a.mozRTCPeerConnection||a.webkitRTCPeerConnection}if(r){var o=null;"Chrome"===U.browser&&U.browser.version<58&&(o={optional:[{RtpDataChannels:!0}]});var s=new r({iceServers:[{urls:"stun:stun.l.google.com:19302"}]},o);// create data channel
if(t&&(s.addStream?s.addStream(t):s.addTrack&&t.getTracks()[0]&&s.addTrack(t.getTracks()[0],t)),// listen for candidate events
s.onicecandidate=function(e){e.candidate&&e.candidate.candidate?l(e.candidate.candidate):l();// Pass nothing to tell that ICE-gathering-ended
},!t)try{s.createDataChannel("sctp",{})}catch(e){}U.isPromisesSupported?s.createOffer().then(function(e){s.setLocalDescription(e).then(c)}):s.createOffer(function(e){s.setLocalDescription(e,c,function(){})},function(){})}}function l(t){if(!t){e();// Pass nothing to tell that ICE-gathering-ended
return}var r=C.exec(t);if(r){var i=r[1],a=t.match(E);void 0===n[i]&&e(i,a,!0),n[i]=!0}}function c(){s.localDescription.sdp.split("\n").forEach(function(e){e&&0===e.indexOf("a=candidate:")&&l(e)})}})(function(t){t?t.match(E)?e("Local: "+t,n=!1,r):t.match(T)?e("Public: "+t,n,r=!1):e("Public: "+t,n,r):e()},t)}},U.isWebSocketsSupported="WebSocket"in window&&2===window.WebSocket.CLOSING,U.isWebSocketsBlocked=!U.isWebSocketsSupported,"Nodejs"===U.osName&&(U.isWebSocketsSupported=!0,U.isWebSocketsBlocked=!1),U.checkWebSocketsSupport=function(e){e=e||function(){};try{var t,n=new WebSocket("wss://echo.websocket.org:443/");n.onopen=function(){U.isWebSocketsBlocked=!1,t=(new Date).getTime(),n.send("ping")},n.onmessage=function(){U.WebsocketLatency=(new Date).getTime()-t+"ms",e(),n.close(),n=null},n.onerror=function(){U.isWebSocketsBlocked=!0,e()}}catch(t){U.isWebSocketsBlocked=!0,e()}},// -------
U.load=function(e){!// http://dev.w3.org/2011/webrtc/editor/getusermedia.html#mediadevices
function(e){if(!P||(!u.enumerateDevices&&window.MediaStreamTrack&&window.MediaStreamTrack.getSources&&(u.enumerateDevices=window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)),!u.enumerateDevices&&u.enumerateDevices&&(u.enumerateDevices=u.enumerateDevices.bind(u)),!u.enumerateDevices)){e&&e();return}N=[],j=[],I=[],O=[],R=!1,A=!1,M=!1,L=!1,D=!1;// to prevent duplication
var t={};u.enumerateDevices(function(n){N=[],j=[],I=[],O=[],n.forEach(function(e){var n={};for(var r in e)try{"function"!=typeof e[r]&&(n[r]=e[r])}catch(e){}t[n.deviceId+n.label+n.kind]||("audio"===n.kind&&(n.kind="audioinput"),"video"===n.kind&&(n.kind="videoinput"),n.deviceId||(n.deviceId=n.id),n.id||(n.id=n.deviceId),n.label?("videoinput"!==n.kind||D||(D=!0),"audioinput"!==n.kind||L||(L=!0)):(n.isCustomLabel=!0,"videoinput"===n.kind?n.label="Camera "+(O.length+1):"audioinput"===n.kind?n.label="Microphone "+(j.length+1):"audiooutput"===n.kind?n.label="Speaker "+(I.length+1):n.label="Please invoke getUserMedia once.",void 0!==U&&U.browser.isChrome&&U.browser.version>=46&&!/^(https:|chrome-extension:)$/g.test(location.protocol||"")&&"undefined"!=typeof document&&"string"==typeof document.domain&&document.domain.search&&-1===document.domain.search(/localhost|127.0./g)&&(n.label="HTTPs is required to get label of this "+n.kind+" device.")),"audioinput"===n.kind&&(R=!0,-1===j.indexOf(n)&&j.push(n)),"audiooutput"===n.kind&&(A=!0,-1===I.indexOf(n)&&I.push(n)),"videoinput"===n.kind&&(M=!0,-1===O.indexOf(n)&&O.push(n)),// there is no 'videoouput' in the spec.
N.push(n),t[n.deviceId+n.label+n.kind]=n)}),void 0!==U&&(// to sync latest outputs
U.MediaDevices=N,U.hasMicrophone=R,U.hasSpeakers=A,U.hasWebcam=M,U.isWebsiteHasWebcamPermissions=D,U.isWebsiteHasMicrophonePermissions=L,U.audioInputDevices=j,U.audioOutputDevices=I,U.videoInputDevices=O),e&&e()})}(e=e||function(){})},void 0!==N?U.MediaDevices=N:U.MediaDevices=[],U.hasMicrophone=R,U.hasSpeakers=A,U.hasWebcam=M,U.isWebsiteHasWebcamPermissions=D,U.isWebsiteHasMicrophonePermissions=L,U.audioInputDevices=j,U.audioOutputDevices=I,U.videoInputDevices=O;// ------
var K=!1;"undefined"!=typeof document&&"function"==typeof document.createElement&&"setSinkId"in document.createElement("video")&&(K=!0),U.isSetSinkIdSupported=K;// -----
var G=!1;U.browser.isFirefox&&"undefined"/*&& DetectRTC.browser.version > 39*/!=typeof mozRTCPeerConnection?"getSenders"in mozRTCPeerConnection.prototype&&(G=!0):U.browser.isChrome&&"undefined"!=typeof webkitRTCPeerConnection&&"getSenders"in webkitRTCPeerConnection.prototype&&(G=!0),U.isRTPSenderReplaceTracksSupported=G;//------
var Q=!1;U.browser.isFirefox&&U.browser.version>38&&(Q=!0),U.isRemoteStreamProcessingSupported=Q;//-------
var Y=!1;"undefined"!=typeof MediaStreamTrack&&"applyConstraints"in MediaStreamTrack.prototype&&(Y=!0),U.isApplyConstraintsSupported=Y;//-------
var J=!1;U.browser.isFirefox&&U.browser.version>=43&&// version 44 will support exact multi-monitor selection i.e. you can select any monitor for screen capturing.
(J=!0),U.isMultiMonitorScreenCapturingSupported=J,U.isPromisesSupported="Promise"in window,// version is generated by "grunt"
U.version="1.4.1",void 0===U&&(window.DetectRTC={});var X=window.MediaStream;void 0===X&&"undefined"!=typeof webkitMediaStream&&(X=webkitMediaStream),void 0!==X&&"function"==typeof X?U.MediaStream=Object.keys(X.prototype):U.MediaStream=!1,"undefined"!=typeof MediaStreamTrack?U.MediaStreamTrack=Object.keys(MediaStreamTrack.prototype):U.MediaStreamTrack=!1;var Z=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;void 0!==Z?U.RTCPeerConnection=Object.keys(Z.prototype):U.RTCPeerConnection=!1,window.DetectRTC=U,ss=U,"function"==typeof define&&define.amd&&define("DetectRTC",[],function(){return U})}();var sl={};sl=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r="swal-button";t.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:r,CONFIRM_BUTTON:r+"--confirm",CANCEL_BUTTON:r+"--cancel",DANGER_BUTTON:r+"--danger",BUTTON_LOADING:r+"--loading",BUTTON_LOADER:r+"__loader"},t.default=t.CLASS_NAMES},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getNode=function(e){return document.querySelector("."+e)},t.stringToNode=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild},t.insertAfter=function(e,t){var n=t.nextSibling;t.parentNode.insertBefore(e,n)},t.removeNode=function(e){e.parentElement.removeChild(e)},t.throwErr=function(e){throw"SweetAlert: "+(e=(e=e.replace(/ +(?= )/g,"")).trim())},t.isPlainObject=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype},t.ordinalSuffixOf=function(e){var t=e%10,n=e%100;return 1===t&&11!==n?e+"st":2===t&&12!==n?e+"nd":3===t&&13!==n?e+"rd":e+"th"}},function(e,t,n){function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(25));var i=n(26);t.overlayMarkup=i.default,r(n(27)),r(n(28)),r(n(29));var a=n(0),o=a.default.MODAL_TITLE,s=a.default.MODAL_TEXT,l=a.default.ICON,c=a.default.FOOTER;t.iconMarkup='\n  <div class="'+l+'"></div>',t.titleMarkup='\n  <div class="'+o+'"></div>\n',t.textMarkup='\n  <div class="'+s+'"></div>',t.footerMarkup='\n  <div class="'+c+'"></div>\n'},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.CONFIRM_KEY="confirm",t.CANCEL_KEY="cancel";var i={visible:!0,text:null,value:null,className:"",closeModal:!0},a=Object.assign({},i,{visible:!1,text:"Cancel",value:null}),o=Object.assign({},i,{text:"OK",value:!0});t.defaultButtonList={cancel:a,confirm:o};var s=function(e){switch(e){case t.CONFIRM_KEY:return o;case t.CANCEL_KEY:return a;default:return Object.assign({},i,{text:e.charAt(0).toUpperCase()+e.slice(1),value:e})}},l=function(e,t){var n=s(e);return!0===t?Object.assign({},n,{visible:!0}):"string"==typeof t?Object.assign({},n,{visible:!0,text:t}):r.isPlainObject(t)?Object.assign({visible:!0},n,t):Object.assign({},n,{visible:!1})},c=function(e){for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var i=r[n],o=e[i],s=l(i,o);t[i]=s}return t.cancel||(t.cancel=a),t},u=function(e){var n={};switch(e.length){case 1:n[t.CANCEL_KEY]=Object.assign({},a,{visible:!1});break;case 2:n[t.CANCEL_KEY]=l(t.CANCEL_KEY,e[0]),n[t.CONFIRM_KEY]=l(t.CONFIRM_KEY,e[1]);break;default:r.throwErr("Invalid number of 'buttons' in array ("+e.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};t.getButtonListOpts=function(e){var n=t.defaultButtonList;return"string"==typeof e?n[t.CONFIRM_KEY]=l(t.CONFIRM_KEY,e):Array.isArray(e)?n=u(e):r.isPlainObject(e)?n=c(e):!0===e?n=u([!0,!0]):!1===e?n=u([!1,!1]):void 0===e&&(n=t.defaultButtonList),n}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),a=n(0),o=a.default.MODAL,s=a.default.OVERLAY,l=n(30),c=n(31),u=n(32),d=n(33);t.injectElIntoModal=function(e){var t=r.getNode(o),n=r.stringToNode(e);return t.appendChild(n),n};var f=function(e){e.className=o,e.textContent=""},p=function(e,t){f(e);var n=t.className;n&&e.classList.add(n)};t.initModalContent=function(e){p(r.getNode(o),e),l.default(e.icon),c.initTitle(e.title),c.initText(e.text),d.default(e.content),u.default(e.buttons,e.dangerMode)},t.default=function(){var e=r.getNode(s),t=r.stringToNode(i.modalMarkup);e.appendChild(t)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i={isOpen:!1,promise:null,actions:{},timer:null},a=Object.assign({},i);t.resetState=function(){a=Object.assign({},i)},t.setActionValue=function(e){if("string"==typeof e)return o(r.CONFIRM_KEY,e);for(var t in e)o(t,e[t])};var o=function(e,t){a.actions[e]||(a.actions[e]={}),Object.assign(a.actions[e],{value:t})};t.setActionOptionsFor=function(e,t){var n=(void 0===t?{}:t).closeModal;Object.assign(a.actions[e],{closeModal:void 0===n||n})},t.default=a},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(3),a=n(0),o=a.default.OVERLAY,s=a.default.SHOW_MODAL,l=a.default.BUTTON,c=a.default.BUTTON_LOADING,u=n(5);t.openModal=function(){r.getNode(o).classList.add(s),u.default.isOpen=!0};var d=function(){r.getNode(o).classList.remove(s),u.default.isOpen=!1};t.onAction=function(e){void 0===e&&(e=i.CANCEL_KEY);var t=u.default.actions[e],n=t.value;if(!1===t.closeModal){var a=l+"--"+e;r.getNode(a).classList.add(c)}else d();u.default.promise.resolve(n)},t.getState=function(){var e=Object.assign({},u.default);return delete e.promise,delete e.timer,e},t.stopLoading=function(){for(var e=document.querySelectorAll("."+l),t=0;t<e.length;t++)e[t].classList.remove(c)}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){e.exports=t.sweetAlert=n(9)}).call(t,n(7))},function(e,t,n){(function(t){e.exports=t.swal=n(10)}).call(t,n(7))},function(e,t,n){"undefined"!=typeof window&&n(11),n(16);var r=n(23).default;e.exports=r},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insertAt:"top"};i.transform=void 0,n(14)(r,i),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(13)(void 0)).push([e.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i="/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */";return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=v[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(c(r.parts[a],t))}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(c(r.parts[a],t));v[r.id]={id:r.id,refs:1,parts:o}}}}function i(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function a(e,t){var n=b(e.insertInto);if(!n)throw Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=k[k.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),k.push(t);else{if("bottom"!==e.insertAt)throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=k.indexOf(e);t>=0&&k.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),a(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){if(t.transform&&e.css){if(!(c=t.transform(e.css)))return function(){};e.css=c}if(t.singleton){var n,r,i,c,p,h=S++;r=u.bind(null,n=x||(x=s(t)),h,!1),i=u.bind(null,n,h,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(p=document.createElement("link"),t.attrs.type="text/css",t.attrs.rel="stylesheet",l(p,t.attrs),a(t,p),r=f.bind(null,n=p,t),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(r=d.bind(null,n=s(t)),i=function(){o(n)});return r(e),function(t){t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap)&&r(e=t):i()}}function u(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=_(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var p,h,m,g,w,v={},y=(p=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===h&&(h=p.apply(this,arguments)),h}),b=(m=function(e){return document.querySelector(e)},g={},function(e){return void 0===g[e]&&(g[e]=m.call(this,e)),g[e]}),x=null,S=0,k=[],_=n(15);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=y()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return r(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var s=v[n[o].id];s.refs--,a.push(s)}e&&r(i(e,t),t);for(var o=0;o<a.length;o++){var s=a[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete v[s.id]}}}};var E=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")})},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:"url("+JSON.stringify(0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""))+")"})}},function(e,t,n){var r=n(17);"undefined"==typeof window||window.Promise||(window.Promise=r),n(21),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw TypeError('"this" is null or not defined');var n,r=Object(this),i=r.length>>>0;if(0===i)return!1;for(var a=0|t,o=Math.max(a>=0?a:i-Math.abs(a),0);o<i;){if((n=r[o])===e||"number"==typeof n&&"number"==typeof e&&isNaN(n)&&isNaN(e))return!0;o++}return!1}}),"undefined"!=typeof window&&function(e){e.forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(e,t,n){(function(t){!function(n){function r(){}function i(e){if("object"!=typeof this)throw TypeError("Promises must be constructed via new");if("function"!=typeof e)throw TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function a(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,i._immediateFn(function(){var n,r=1===e._state?t.onFulfilled:t.onRejected;if(null===r)return void(1===e._state?o:s)(t.promise,e._value);try{n=r(e._value)}catch(e){return void s(t.promise,e)}o(t.promise,n)})}function o(e,t){try{if(t===e)throw TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void u(function(){n.apply(t,arguments)},e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function u(e,t){var n=!1;try{e(function(e){n||(n=!0,o(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var d=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return a(this,new c(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){if(0===t.length)return e([]);for(var r=t.length,i=0;i<t.length;i++)(function i(a,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,function(e){i(a,e)},n)}t[a]=o,0==--r&&e(t)}catch(e){n(e)}})(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){d(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(18).setImmediate)},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(19),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){function r(e){delete d[e]}function i(e){if(f)setTimeout(i,0,e);else{var t=d[e];if(t){f=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{r(e),f=!1}}}}if(!e.setImmediate){var a,o,s,l,c,u=1,d={},f=!1,p=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e);h=h&&h.setTimeout?h:e,"[object process]"===({}).toString.call(e.process)?c=function(e){t.nextTick(function(){i(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",o=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&i(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o),c=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){i(e.data)},c=function(e){s.port2.postMessage(e)}):p&&"onreadystatechange"in p.createElement("script")?(l=p.documentElement,c=function(e){var t=p.createElement("script");t.onreadystatechange=function(){i(e),t.onreadystatechange=null,l.removeChild(t),t=null},l.appendChild(t)}):c=function(e){setTimeout(i,0,e)},h.setImmediate=function(e){"function"!=typeof e&&(e=Function(""+e));for(var t=Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return d[u]=r,c(u),u++},h.clearImmediate=r}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(7),n(20))},function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function i(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(){h&&f&&(h=!1,f.length?p=f.concat(p):m=-1,p.length&&o())}function o(){if(!h){var e=i(a);h=!0;for(var t=p.length;t;){for(f=p,p=[];++m<t;)f&&f[m].run();m=-1,t=p.length}f=null,h=!1,function(e){if(u===clearTimeout)return clearTimeout(e);if((u===r||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,u,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{u="function"==typeof clearTimeout?clearTimeout:r}catch(e){u=r}}();var f,p=[],h=!1,m=-1;d.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new s(e,t)),1!==p.length||h||i(o)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){n(22).polyfill()},function(e,t,n){function r(e,t){if(null==e)throw TypeError("Cannot convert first argument to object");for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var a=Object.keys(Object(i)),o=0,s=a.length;o<s;o++){var l=a[o],c=Object.getOwnPropertyDescriptor(i,l);void 0!==c&&c.enumerable&&(n[l]=i[l])}}return n}e.exports={assign:r,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=n(6),a=n(5),o=n(36),s=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if("undefined"!=typeof window){var n=o.getOpts.apply(void 0,e);return new Promise(function(e,t){a.default.promise={resolve:e,reject:t},r.default(n),setTimeout(function(){i.openModal()})})}};s.close=i.onAction,s.getState=i.getState,s.setActionValue=a.setActionValue,s.stopLoading=i.stopLoading,s.setDefaults=o.setDefaults,t.default=s},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0).default.MODAL,a=n(4),o=n(34),s=n(35),l=n(1);t.init=function(e){r.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),o.default(),a.default()),a.initModalContent(e),s.default(e)},t.default=t.init},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).default.MODAL;t.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',t.default=t.modalMarkup},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).default.OVERLAY;t.default='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>'},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).default.ICON;t.errorIconMarkup=function(){var e=r+"--error",t=e+"__line";return'\n    <div class="'+e+'__x-mark">\n      <span class="'+t+" "+t+'--left"></span>\n      <span class="'+t+" "+t+'--right"></span>\n    </div>\n  '},t.warningIconMarkup=function(){var e=r+"--warning";return'\n    <span class="'+e+'__body">\n      <span class="'+e+'__dot"></span>\n    </span>\n  '},t.successIconMarkup=function(){var e=r+"--success";return'\n    <span class="'+e+"__line "+e+'__line--long"></span>\n    <span class="'+e+"__line "+e+'__line--tip"></span>\n\n    <div class="'+e+'__ring"></div>\n    <div class="'+e+'__hide-corners"></div>\n  '}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0).default.CONTENT;t.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=r.default.BUTTON_CONTAINER,a=r.default.BUTTON,o=r.default.BUTTON_LOADER;t.buttonMarkup='\n  <div class="'+i+'">\n\n    <button\n      class="'+a+'"\n    ></button>\n\n    <div class="'+o+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=n(2),a=n(0),o=a.default.ICON,s=a.default.ICON_CUSTOM,l=["error","warning","success","info"],c={error:i.errorIconMarkup(),warning:i.warningIconMarkup(),success:i.successIconMarkup()},u=function(e,t){t.classList.add(o+"--"+e);var n=c[e];n&&(t.innerHTML=n)},d=function(e,t){t.classList.add(s);var n=document.createElement("img");n.src=e,t.appendChild(n)};t.default=function(e){if(e){var t=r.injectElIntoModal(i.iconMarkup);l.includes(e)?u(e,t):d(e,t)}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(4),a=function(e){navigator.userAgent.includes("AppleWebKit")&&(e.style.display="none",e.offsetHeight,e.style.display="")};t.initTitle=function(e){if(e){var t=i.injectElIntoModal(r.titleMarkup);t.textContent=e,a(t)}},t.initText=function(e){if(e){var t=document.createDocumentFragment();e.split("\n").forEach(function(e,n,r){t.appendChild(document.createTextNode(e)),n<r.length-1&&t.appendChild(document.createElement("br"))});var n=i.injectElIntoModal(r.textMarkup);n.appendChild(t),a(n)}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(4),a=n(0),o=a.default.BUTTON,s=a.default.DANGER_BUTTON,l=n(3),c=n(2),u=n(6),d=n(5),f=function(e,t,n){var i=t.text,a=t.value,f=t.className,p=t.closeModal,h=r.stringToNode(c.buttonMarkup),m=h.querySelector("."+o),g=o+"--"+e;m.classList.add(g),f&&(Array.isArray(f)?f:f.split(" ")).filter(function(e){return e.length>0}).forEach(function(e){m.classList.add(e)}),n&&e===l.CONFIRM_KEY&&m.classList.add(s),m.textContent=i;var w={};return w[e]=a,d.setActionValue(w),d.setActionOptionsFor(e,{closeModal:p}),m.addEventListener("click",function(){return u.onAction(e)}),h};t.default=function(e,t){var n=i.injectElIntoModal(c.footerMarkup);for(var r in e){var a=e[r],o=f(r,a,t);a.visible&&n.appendChild(o)}0===n.children.length&&n.remove()}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n(4),a=n(2),o=n(5),s=n(6),l=n(0).default.CONTENT,c=function(e){e.addEventListener("input",function(e){var t=e.target.value;o.setActionValue(t)}),e.addEventListener("keyup",function(e){if("Enter"===e.key)return s.onAction(r.CONFIRM_KEY)}),setTimeout(function(){e.focus(),o.setActionValue("")},0)},u=function(e,t,n){var r=document.createElement(t),i=l+"__"+t;for(var a in r.classList.add(i),n){var o=n[a];r[a]=o}"input"===t&&c(r),e.appendChild(r)};t.default=function(e){if(e){var t=i.injectElIntoModal(a.contentMarkup),n=e.element,r=e.attributes;"string"==typeof n?u(t,n,r):t.appendChild(n)}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2);t.default=function(){var e=r.stringToNode(i.overlayMarkup);document.body.appendChild(e)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(6),a=n(1),o=n(3),s=n(0),l=s.default.MODAL,c=s.default.BUTTON,u=s.default.OVERLAY,d=function(e){e.preventDefault(),g()},f=function(e){e.preventDefault(),w()},p=function(e){if(r.default.isOpen&&"Escape"===e.key)return i.onAction(o.CANCEL_KEY)},h=function(e){if(r.default.isOpen&&"Tab"===e.key)return d(e)},m=function(e){if(r.default.isOpen)return"Tab"===e.key&&e.shiftKey?f(e):void 0},g=function(){var e=a.getNode(c);e&&(e.tabIndex=0,e.focus())},w=function(){var e=a.getNode(l).querySelectorAll("."+c),t=e.length-1,n=e[t];n&&n.focus()},v=function(e){e[e.length-1].addEventListener("keydown",h)},y=function(e){e[0].addEventListener("keydown",m)},b=function(){var e=a.getNode(l).querySelectorAll("."+c);e.length&&(v(e),y(e))},x=function(e){if(a.getNode(u)===e.target)return i.onAction(o.CANCEL_KEY)},S=function(e){var t=a.getNode(u);t.removeEventListener("click",x),e&&t.addEventListener("click",x)},k=function(e){r.default.timer&&clearTimeout(r.default.timer),e&&(r.default.timer=window.setTimeout(function(){return i.onAction(o.CANCEL_KEY)},e))};t.default=function(e){e.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),e.dangerMode?g():w(),b(),S(e.closeOnClickOutside),k(e.timer)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(3),a=n(37),o=n(38),s={title:null,text:null,icon:null,buttons:i.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},l=Object.assign({},s);t.setDefaults=function(e){l=Object.assign({},s,e)};var c=function(e){var t=e&&e.button,n=e&&e.buttons;return void 0!==t&&void 0!==n&&r.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==t?{confirm:t}:n},u=function(e){return r.ordinalSuffixOf(e+1)},d=function(e,t){r.throwErr(u(t)+" argument ('"+e+"') is invalid")},f=function(e,t){var n=e+1,i=t[n];r.isPlainObject(i)||void 0===i||r.throwErr("Expected "+u(n)+" argument ('"+i+"') to be a plain object")},p=function(e,t){var n=e+1,i=t[n];void 0!==i&&r.throwErr("Unexpected "+u(n)+" argument ("+i+")")},h=function(e,t,n,i){var a=typeof t,o=t instanceof Element;if("string"===a){if(0===n)return{text:t};if(1===n)return{text:t,title:i[0]};if(2===n)return f(n,i),{icon:t};d(t,n)}else{if(o&&0===n)return f(n,i),{content:t};if(r.isPlainObject(t))return p(n,i),t;d(t,n)}};t.getOpts=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={};e.forEach(function(t,r){Object.assign(n,h(0,t,r,e))});var r=c(n);n.buttons=i.getButtonListOpts(r),delete n.button,n.content=a.getContentOpts(n.content);var u=Object.assign({},s,l,n);return Object.keys(u).forEach(function(e){o.DEPRECATED_OPTS[e]&&o.logDeprecation(e)}),u}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i={element:"input",attributes:{placeholder:""}};t.getContentOpts=function(e){return r.isPlainObject(e)?Object.assign({},e):e instanceof Element?{element:e}:"input"===e?i:null}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecation=function(e){var n=t.DEPRECATED_OPTS[e],r=n.onlyRename,i=n.replacement,a=n.subOption,o=n.link,s='SweetAlert warning: "'+e+'" option has been '+(r?"renamed":"deprecated")+".";i&&(s+=" Please use"+(a?' "'+a+'" in ':" ")+'"'+i+'" instead.');var l="https://sweetalert.js.org";console.warn(s+=o?" More details: "+l+o:" More details: "+l+"/guides/#upgrading-from-1x")},t.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}]),f("lzNIT");var v=f("aphAM"),y=f("lzNIT"),v=f("aphAM"),h=f("ayMG0"),m=(f("acw62"),f("acw62")),sc={};function su(e){return(su="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(sc,"__esModule",{value:!0}),Object.defineProperty(sc,"useSpeechRecognition",{enumerable:!0,get:function(){return sd.useSpeechRecognition}}),sc.default=void 0;var sd=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==su(e)&&"function"!=typeof e)return{default:e};var t=sf();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}(f("45HU9"));function sf(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return sf=function(){return e},e}var sp=sd.default;sc.default=sp;const sh=/*#__PURE__*/(0,m.lazy)(()=>Promise.resolve(f("3E8gM"))),sm=(0,y.createBrowserRouter)([{path:"/",element:/*#__PURE__*/(0,h.jsx)(()=>{let{ALLTEST:e,Coding:t,Role:n,technical:r,Foundation:i,aptitude:a,breadcrum:o,title:s,duration:l,instruction:c,newTest:u}=(0,m.useContext)(ap.default),[d,f]=(0,m.useState)(e),[p,g]=(0,m.useState)(o),[w,y]=(0,m.useState)(s),[b,x]=(0,m.useState)(l),[S,k]=(0,m.useState)(c),_=(0,v.useLocation)().pathname;console.log(_.slice(0,8));let{id:E}=(0,v.useParams)();return/*#__PURE__*/(0,h.jsx)(ap.default.Provider,{value:{aptitude:a,Foundation:i,technical:r,show:d,setShow:f,Role:n,Coding:t,crum:p,setCrum:g,setNewTitle:y,setNewDuration:x,setNewInst:k,ALLTEST:e,newTitle:w,newInst:S,newDuration:b,newTest:u},children:/*#__PURE__*/(0,h.jsx)(D,{store:sr,children:/*#__PURE__*/(0,h.jsx)("div",{className:"",children:"/Signup"==_?/*#__PURE__*/(0,h.jsx)(so,{}):/*#__PURE__*/(0,h.jsx)(h.Fragment,{children:"/testenv"==_.slice(0,8)?/*#__PURE__*/(0,h.jsx)(v.Outlet,{}):/*#__PURE__*/(0,h.jsxs)(h.Fragment,{children:[/*#__PURE__*/(0,h.jsx)(al,{})," ",/*#__PURE__*/(0,h.jsx)(v.Outlet,{}),"  ",/*#__PURE__*/(0,h.jsx)(af,{})]})})})})})},{}),children:[{path:"/",element:/*#__PURE__*/(0,h.jsx)(()=>/*#__PURE__*/(0,h.jsxs)("div",{className:"container-fluid tw-mt-[74]",children:[/*#__PURE__*/(0,h.jsx)("div",{className:"row",children:/*#__PURE__*/(0,h.jsx)("div",{className:"col-12 tw-flex tw-justify-center tw-bg-gradient-to-tl tw-from-[#2d545e] tw-to-[#e1b382]",children:/*#__PURE__*/(0,h.jsxs)("div",{className:"m-5 p-3 tw-flex tw-justify-center tw-flex-col tw-items-center",children:[/*#__PURE__*/(0,h.jsx)("img",{src:/*@__PURE__*/s(as),alt:"logo",className:"tw-w-96 tw-h-64 tw-object-contain tw-bg-transparent"}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("h1",{className:"text-center tw-text-gray-200",children:"Powerful, Database-based Online Assessment Platform"}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("h6",{className:"text-center tw-text-xl tw-text-gray-300",children:[" ","A one-stop platform for all your assessments needs ",/*#__PURE__*/(0,h.jsx)("br",{}),"Hire best talent using Testify"]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)(y.Link,{to:"/test",className:"btn btn-success tw-w-48",children:"Get Started"})]})})}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-2 ",children:[/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("h1",{className:" tw-text-center tw-font-bold",children:"Hiring made easy."})," "]}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-center tw-contrast-50 md:tw-ml-20",children:"Building assessments is a breeze with Testify. Get started with these simple steps."}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:"row tw-p-4 ",children:[/*#__PURE__*/(0,h.jsx)("div",{className:" offset-md-1 col-md-3 tw-p-2 tw-flex tw-justify-center ",children:/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-flex-col ",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-gear tw-text-8xl tw-m-auto tw-text-[#49A997]"}),/*#__PURE__*/(0,h.jsx)("h5",{className:" text-center tw-mt-2 tw-font-bold",children:"Step 1"}),/*#__PURE__*/(0,h.jsx)("h6",{className:" tw-text-center tw-font-bold",children:"Create high-quality assessments, fast."}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-center tw-contrast-50",children:"Pick the perfect assessment name, select the tests that work for you, and get personal with your own custom questions."})]})}),/*#__PURE__*/(0,h.jsx)("div",{className:" offset-md-1 col-md-3 tw-p-2 tw-flex tw-justify-start",children:/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-start tw-flex-col ",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-envelope-open-text tw-text-8xl tw-m-auto tw-text-[#49A997]"}),/*#__PURE__*/(0,h.jsx)("h5",{className:" text-center tw-mt-2 tw-font-bold",children:"Step 2"}),/*#__PURE__*/(0,h.jsx)("h6",{className:" tw-text-center tw-font-bold",children:"Invite candidates your way."}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-center tw-contrast-50",children:"Connect with candidates by sending email invites directly from Testify, straight from your ATS or sharing a direct link."})]})}),/*#__PURE__*/(0,h.jsx)("div",{className:" offset-md-1 col-md-3 tw-p-2 tw-flex tw-justify-center ",children:/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-flex-col ",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-chart-simple tw-text-8xl tw-m-auto tw-text-[#49A997]"}),/*#__PURE__*/(0,h.jsx)("h5",{className:" text-center tw-mt-2 tw-font-bold",children:"Step 3"}),/*#__PURE__*/(0,h.jsx)("h6",{className:" tw-text-center tw-font-bold",children:"Analyze and decide on the best candidates."}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-center tw-contrast-50",children:"Receive real-time assessment results, compare your candidates instantly, and go in-depth with a candidate review."})]})})]}),/*#__PURE__*/(0,h.jsx)("div",{className:" tw-flex tw-justify-center tw-p-2",children:/*#__PURE__*/(0,h.jsxs)(y.Link,{to:"/test",className:" tw-no-underline tw-px-8 tw-py-2 tw-bg-[#44AA97] tw-mt-10 tw-rounded-md tw-shadow-md tw-border-0 tw-text-slate-200",children:[" ","Try Now for free"]})}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-bg-[#EDFCF7] tw-p-2",children:[/*#__PURE__*/(0,h.jsx)("h1",{className:" tw-text-center tw-font-bold tw-p-4",children:"What Can you Do"}),/*#__PURE__*/(0,h.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:"offset-md-1 col-md-3 tw-p-2 tw-flex-col tw-justify-center tw-gap-6 text-center",children:[/*#__PURE__*/(0,h.jsx)("p",{className:" tw-font-bold tw-text-xl",children:"Test Your Prepration"}),/*#__PURE__*/(0,h.jsx)("img",{className:" tw-h-48",src:/*@__PURE__*/s(ac),alt:"Image"}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-mt-4 tw-text-center tw-contrast-50",children:"Use Our interactive Quizzes to assess and enhance your knowledge and readiness for exams or challenges."})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"offset-md-1 col-md-3 tw-p-2 tw-flex-col tw-justify-center tw-gap-6 text-center",children:[/*#__PURE__*/(0,h.jsx)("p",{className:" tw-font-bold tw-text-xl",children:"Track Your Progress"}),/*#__PURE__*/(0,h.jsx)("img",{className:" tw-h-48 ",src:/*@__PURE__*/s(ad),alt:"Image"}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-mt-4 tw-text-center tw-contrast-50",children:"Users can monitor their progress over time with dashboards, performance reports, and historical data analysis."})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"offset-md-1 col-md-3 tw-p-2 tw-flex-col tw-justify-center tw-gap-6 text-center",children:[/*#__PURE__*/(0,h.jsx)("p",{className:" tw-font-bold tw-text-xl",children:"Analyze Your Mistake"}),/*#__PURE__*/(0,h.jsx)("img",{className:" tw-h-48",src:/*@__PURE__*/s(au),alt:"Image"}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-mt-4 tw-text-center tw-contrast-50",children:"We detailed performance analytics to help you improve and succeed,Automated grading highlighting strengths and areas for improvement."})]})]})]}),/*#__PURE__*/(0,h.jsx)("div",{className:"row p-2",children:/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-12 tw-p-2",children:[/*#__PURE__*/(0,h.jsxs)("h1",{className:" tw-mt-2 text-center tw-text-[32px]",children:["Check your Knowledge on"," ",/*#__PURE__*/(0,h.jsx)("span",{className:" tw-text-[#49A997]",children:"Specific Skill or technology"})]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-flex-col tw-gap-8",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-flex-wrap tw-justify-center tw-gap-6",children:[/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/c.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"C"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/cpp.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"C++"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/java.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Java"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] tw-px-2 group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/nodejs.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Nodejs"})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-flex-wrap tw-justify-center tw-gap-6",children:[/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/mongodb.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Mongodb"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/javascript.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Javascript"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/python.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Python"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/sql.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Sql"})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-flex tw-flex-wrap tw-justify-center tw-gap-6",children:[/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/reactjs.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"React"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/reactjs.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"React"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/machine-learning.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Machine learning"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/data-science.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Data Science"})]}),/*#__PURE__*/(0,h.jsxs)("span",{className:" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl",children:[/*#__PURE__*/(0,h.jsx)("img",{src:"https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/logical-and-analytical-reasoning.png",alt:"C",loading:"lazy",class:"w-4 h-4"}),/*#__PURE__*/(0,h.jsx)("small",{className:"tw-truncate tw-text-sm group-hover:overflow-visible",children:"Aptitude"})]})]})]})]})})]}),{})},{path:"/About",element:/*#__PURE__*/(0,h.jsx)(()=>/*#__PURE__*/(0,h.jsx)("div",{children:"About"}),{})},{path:"/Contact",element:/*#__PURE__*/(0,h.jsx)(()=>/*#__PURE__*/(0,h.jsx)(h.Fragment,{children:/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h1",{children:"Contact Us"}),/*#__PURE__*/(0,h.jsx)("p",{children:"We’d love to hear from you! Whether you have questions, feedback, or a project inquiry, feel free to reach out."})]}),/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h2",{children:"Our Contact Information"}),/*#__PURE__*/(0,h.jsx)("p",{children:"Email: contact@example.com"}),/*#__PURE__*/(0,h.jsx)("p",{children:"Phone: (123) 456-7890"}),/*#__PURE__*/(0,h.jsx)("p",{children:"Address: 123 Main St, City, Country"})]}),/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h2",{children:"Connect with Us"}),/*#__PURE__*/(0,h.jsx)("p",{children:"Follow us on social media for the latest updates:"}),/*#__PURE__*/(0,h.jsxs)("ul",{children:[/*#__PURE__*/(0,h.jsx)("li",{children:/*#__PURE__*/(0,h.jsx)("a",{href:"https://facebook.com",children:"Facebook"})}),/*#__PURE__*/(0,h.jsx)("li",{children:/*#__PURE__*/(0,h.jsx)("a",{href:"https://twitter.com",children:"Twitter"})}),/*#__PURE__*/(0,h.jsx)("li",{children:/*#__PURE__*/(0,h.jsx)("a",{href:"https://instagram.com",children:"Instagram"})}),/*#__PURE__*/(0,h.jsx)("li",{children:/*#__PURE__*/(0,h.jsx)("a",{href:"https://linkedin.com",children:"LinkedIn"})})]})]}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsx)("img",{src:"https://via.placeholder.com/800",alt:"Contact Background"})}),/*#__PURE__*/(0,h.jsxs)("div",{children:[/*#__PURE__*/(0,h.jsx)("h2",{children:"Send Us a Message"}),/*#__PURE__*/(0,h.jsxs)("form",{children:[/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsx)("input",{type:"text",placeholder:"Full Name"})}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsx)("input",{type:"email",placeholder:"Email Address"})}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsx)("input",{type:"tel",placeholder:"Phone Number"})}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsxs)("select",{children:[/*#__PURE__*/(0,h.jsx)("option",{value:"",children:"Select a Topic"}),/*#__PURE__*/(0,h.jsx)("option",{value:"general",children:"General Inquiry"}),/*#__PURE__*/(0,h.jsx)("option",{value:"support",children:"Customer Support"}),/*#__PURE__*/(0,h.jsx)("option",{value:"business",children:"Business Proposal"}),/*#__PURE__*/(0,h.jsx)("option",{value:"feedback",children:"Feedback"})]})}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsx)("textarea",{placeholder:"Your Message"})}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsxs)("label",{children:[/*#__PURE__*/(0,h.jsx)("input",{type:"checkbox"}),"Subscribe to our newsletter"]})}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsxs)("label",{children:[/*#__PURE__*/(0,h.jsx)("input",{type:"checkbox"}),"I agree to the terms and conditions"]})}),/*#__PURE__*/(0,h.jsx)("div",{children:/*#__PURE__*/(0,h.jsx)("button",{type:"submit",children:"Submit"})})]})]})]})}),{})},{path:"/test",element:/*#__PURE__*/(0,h.jsxs)(m.Suspense,{children:[" ",/*#__PURE__*/(0,h.jsx)(sh,{})]})},{path:"/SignUp",element:/*#__PURE__*/(0,h.jsx)(so,{})},{path:"/customtest",element:/*#__PURE__*/(0,h.jsx)(()=>{let{setNewTitle:e,setNewDuration:t,setNewInst:n,ALLTEST:r,newTest:i,newTitle:a,newInst:o}=(0,m.useContext)(ap.default),[s,l]=(0,m.useState)(""),[c,u]=(0,m.useState)(""),[d,f]=(0,m.useState)(""),[p,g]=(0,m.useState)(""),[w,v]=(0,m.useState)(""),[y,b]=(0,m.useState)("");// useEffect(() => {
//  postData();
// }, [path]);
async function x(){try{let e=await fetch(`https://backendformajor.onrender.com/quiz/customtest/${a}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Question:s,option1:c,option2:d,option3:p,option4:w,Answer:y})}),t=await e.json();t&&alert("Data saved succesfully")}catch(e){console.error("Error sending data:",e)}}return/*#__PURE__*/(0,h.jsxs)("div",{className:"container border border-success tw-p-2 tw-shadow-md tw-rounded-md",children:[/*#__PURE__*/(0,h.jsx)("h4",{className:"text-center mt-2 tw-text-emerald-600",children:"Create your own customize test"}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:"m-auto  tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3",children:[/*#__PURE__*/(0,h.jsx)("input",{type:"text",className:" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md",placeholder:"Enter the Title of Test",onChange:t=>{e(t.target.value)}}),/*#__PURE__*/(0,h.jsx)("input",{type:"tel",className:"tw-w-2/5 tw-p-2 tw-rounded-md",placeholder:"Enter the duration of the test",onChange:e=>{t(e.target.value)}})]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-flex-col tw-justify-center tw-rounded-md tw-gap-4",children:[/*#__PURE__*/(0,h.jsx)("textarea",{name:"",id:"",cols:"100",rows:"5",className:"m-auto tw-w-4/5 tw-text-lg tw-p-2 tw-rounded-md",placeholder:"Enter the Instruction for the test in serial number.. ",onChange:e=>{}}),/*#__PURE__*/(0,h.jsx)("input",{type:"text",className:"tw-w-4/5 tw-m-auto tw-p-2 tw-rounded-md",placeholder:"Enter type of test example Coding Programming,Aptitude & Reasoning,Technical Assessment,Foundation schools,Domain Specific Roles",onChange:e=>{n(e.target.value)}})]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-2 border border-success tw-flex tw-flex-col tw-justify-center tw-bg-gray-100 tw-shadow-xl tw-rounded-md",children:[/*#__PURE__*/(0,h.jsx)("textarea",{name:"",id:"",cols:"100",rows:"5",className:"m-auto tw-w-4/5 tw-text-lg tw-p-2 tw-rounded-md",placeholder:"Enter your Questions",value:s,onChange:e=>{l(e.target.value)}}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3",children:[/*#__PURE__*/(0,h.jsx)("input",{type:"text",className:" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md",placeholder:"Enter the option 1",value:c,onChange:e=>{u(e.target.value)}}),/*#__PURE__*/(0,h.jsx)("input",{type:"tel",className:"tw-w-2/5 tw-p-2 tw-rounded-md",placeholder:"Enter the option 2",value:d,onChange:e=>{f(e.target.value)}})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3",children:[/*#__PURE__*/(0,h.jsx)("input",{type:"text",className:" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md",placeholder:"Enter the option 3",value:p,onChange:e=>{g(e.target.value)}}),/*#__PURE__*/(0,h.jsx)("input",{type:"tel",className:"tw-w-2/5 tw-p-2 tw-rounded-md",placeholder:"Enter the option 4",value:w,onChange:e=>{v(e.target.value)}})]}),/*#__PURE__*/(0,h.jsx)("div",{className:" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3",children:/*#__PURE__*/(0,h.jsx)("input",{type:"text",className:" tw-w-[81%] tw-p-2 tw-text-lg tw-rounded-md",placeholder:"Enter the Answer here",value:y,onChange:e=>{b(e.target.value)}})}),/*#__PURE__*/(0,h.jsx)("div",{className:" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3",children:/*#__PURE__*/(0,h.jsx)("button",{className:"tw-bg-green-600 tw-border-0 tw-p-2 tw-rounded-md tw-text-lg tw-text-white tw-shadow-md",onClick:function(){x(),l(""),u(""),f(""),g(""),v(""),b("")},children:"Add Question"})})]}),/*#__PURE__*/(0,h.jsx)("div",{className:"tw-p-4 tw-flex tw-flex-row tw-justify-center tw-mt-3 tw-gap-3",children:/*#__PURE__*/(0,h.jsx)("button",{className:"tw-bg-green-600 tw-border-0 tw-px-4 tw-py-2 tw-rounded-md tw-text-lg tw-text-white",onClick:function(){let t={name:a,icon:"fa-solid fa-pen-to-square tw-text-white tw-text-4xl m-auto",desc:o,part:"Your Tests"};i.push(t),r.push(t),e(" "),n(" ")},children:"Create a Test"})})]})},{})},{path:"/details/:id",element:/*#__PURE__*/(0,h.jsx)(()=>{let{newInst:e,newDuration:t,newTitle:n,ALLTEST:r}=(0,m.useContext)(ap.default),{id:i}=(0,v.useParams)(),a=r.filter(e=>e.id==i);return console.log(a),/*#__PURE__*/(0,h.jsx)("div",{className:"container-fluid tw-bg-[#F5F6F6]",children:/*#__PURE__*/(0,h.jsxs)("div",{className:"row tw-p-2",children:[/*#__PURE__*/(0,h.jsxs)("h1",{className:"text-center tw-font-bold tw-m-6",children:[a[0]?.name,"\xa0:\xa0Find top candidates with our pre-employment assessment"]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-6 tw-flex-col tw-p-4",children:[/*#__PURE__*/(0,h.jsx)(y.Link,{to:"/test",className:"tw-no-underline tw-px-8 tw-py-2 tw-border-0 tw-bg-gray-200 tw-rounded-md tw-text-lg tw-text-green-400",children:"Back to test library"}),/*#__PURE__*/(0,h.jsxs)("h4",{className:"tw-mb-3 tw-mt-5",children:["Description of ",a[0]?.name," test"]}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-xl tw-text-gray-500",children:a[0]?.desc}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-xl tw-text-gray-500",children:a[0]?.summary}),/*#__PURE__*/(0,h.jsx)("p",{className:"tw-text-xl tw-text-gray-500",children:"Candidates who perform well on this test are best fit in moving forward in hiring process."}),/*#__PURE__*/(0,h.jsx)("h3",{children:"Some Instruction before starting test"}),/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-xl tw-text-slate-500",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-circle tw-text-sm tw-text-green-500"})," \xa0Test is of "," "===t?a[0]?.time:t]}),/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-xl tw-text-slate-500",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-circle tw-text-sm tw-text-green-500"})," \xa0Allow Camera and Microphone"]}),/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-xl tw-text-slate-500",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-circle tw-text-sm tw-text-green-500"})," \xa0Do not indulge in unfair means,otherwise disqualified"]}),/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-xl tw-text-slate-500",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-circle tw-text-sm tw-text-green-500"})," \xa0Do not switch tab during test"]}),/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-xl tw-text-slate-500",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-circle tw-text-sm tw-text-green-500"})," \xa0Give test using laptop/pc only"]}),/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-xl tw-text-slate-500",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-circle tw-text-sm tw-text-green-500"})," \xa0This test is A.I Pro Proctored"]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("h3",{children:["Use the ",a[0].name," test to hire"]}),/*#__PURE__*/(0,h.jsx)("p",{className:" tw-text-xl tw-text-slate-500",children:a[0].hire})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-6 tw-flex tw-justify-center tw-items-center tw-gap-1 tw-flex-col",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-items-center tw-gap-1",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-white tw-rounded-tl-md tw-p-3 tw-w-72",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-file-lines tw-text-green-400 tw-text-4xl tw-p-2"}),/*#__PURE__*/(0,h.jsx)("h4",{children:"type"}),/*#__PURE__*/(0,h.jsx)("p",{children:a[0]?.part})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-white tw-rounded-tr-md tw-p-3 tw-w-72",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-regular fa-clock tw-text-green-400 tw-text-4xl tw-p-2"}),/*#__PURE__*/(0,h.jsx)("h4",{children:"Time"}),/*#__PURE__*/(0,h.jsx)("p",{children:a[0]?.time})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-items-center tw-gap-1",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-white tw-rounded-bl-md tw-p-3 tw-w-72",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-regular fa-flag tw-text-green-400 tw-text-4xl tw-p-2"}),/*#__PURE__*/(0,h.jsx)("h4",{children:"Language"}),/*#__PURE__*/(0,h.jsx)("p",{children:"English"})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-white tw-rounded-br-md tw-p-3 tw-w-72",children:[/*#__PURE__*/(0,h.jsx)("i",{class:"fa-solid fa-chart-simple tw-text-green-400 tw-text-4xl tw-p-2"}),/*#__PURE__*/(0,h.jsx)("h4",{children:"Level"}),/*#__PURE__*/(0,h.jsx)("p",{children:a[0]?.level})]})]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)(y.Link,{to:`/verification/${i}`,className:" tw-no-underline tw-px-10 tw-rounded-md tw-shadow-md tw-py-3 hover:tw-bg-green-500 tw-bg-[#31766A] tw-text-white tw-text-lg tw-border-0",children:"Get Started"})]})]})})},{})},{path:"/verification/:id",element:/*#__PURE__*/(0,h.jsx)(()=>{let{id:e}=(0,v.useParams)(),t=O(e=>e.User);console.log(t),(0,m.useRef)(null);//  const capture =  ()=>
//    {
let n=(0,m.useRef)(null),[r,i]=(0,m.useState)(""),[a,o]=(0,m.useState)(!0),[s,l]=(0,m.useState)(!1),[c,u]=(0,m.useState)(!1),[d,f]=(0,m.useState)(!1);return(0,m.useCallback)(async()=>{let e=n?.current?.getScreenshot();f(e)},[n]),/*#__PURE__*/(0,h.jsx)("div",{className:"container-fluid p-4",children:/*#__PURE__*/(0,h.jsx)("div",{className:"row p-0 m-0",children:/*#__PURE__*/(0,h.jsxs)("div",{className:"col-md-12  p-0 m-0",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:"tw-border tw-border-solid tw-rounded-md tw-shadow-md",children:[/*#__PURE__*/(0,h.jsxs)("h1",{className:" tw-bg-gray-200 tw-flex tw-gap-4 tw-text-sm tw-p-2  tw-rounded-tl-md tw-rounded-tr-md  hover:tw-border-b-black",children:[" ",/*#__PURE__*/(0,h.jsxs)("span",{className:"tw-border-2 tw-p-2 tw-border-solid tw-border-gray-200 hover:tw-cursor-pointer  hover:tw-border-b-black",onClick:()=>{u(!1),l(!1),o(!0)},children:[" ","Registration"]}),/*#__PURE__*/(0,h.jsxs)("span",{className:"tw-border-2 tw-p-2 tw-border-solid tw-border-gray-200 hover:tw-cursor-pointer  hover:tw-border-b-black",onClick:()=>{u(!1),l(!0),o(!1)},children:[" ","Capture Image"]}),/*#__PURE__*/(0,h.jsxs)("span",{className:"tw-border-2 tw-p-2 tw-border-solid tw-border-gray-200 hover:tw-cursor-pointer  hover:tw-border-b-black",onClick:()=>{u(!0),l(!1),o(!1)},children:[" ","Capture Card"]})]}),/*#__PURE__*/(0,h.jsx)("div",{className:" tw-p-2"}),a&&/*#__PURE__*/(0,h.jsx)(ag,{}),s&&/*#__PURE__*/(0,h.jsx)(ab,{}),c&&/*#__PURE__*/(0,h.jsx)(a_,{})]}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsx)(y.Link,{to:`/systemcheck/:${e}`,className:"tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md tw-no-underline tw-text-black",children:"Proceed to the test"})]})})})},{})},{path:"/testenv/:id",element:/*#__PURE__*/(0,h.jsx)(sa,{})},{path:"/systemcheck/:id",element:/*#__PURE__*/(0,h.jsx)(()=>{let[e,t]=(0,m.useState)(!0),[n,r]=(0,m.useState)(!1),[i,a]=(0,m.useState)(!1),[o,l]=(0,m.useState)(!1),[c,u]=(0,m.useState)(null),[d,f]=(0,m.useState)(null);(0,v.useLocation)().pathname,(0,m.useRef)(null),(0,m.useRef)(null);let{id:p}=(0,v.useParams)(),[g,w]=(0,m.useState)(0),{transcript:b,listening:x,resetTranscript:S,finalTranscript:k,browserSupportsSpeechRecognition:_}=(0,sc.useSpeechRecognition)(),[E,C]=(0,m.useState)(0);if(!_)return/*#__PURE__*/(0,h.jsx)("span",{children:"Browser doesn't support speech recognition."});(0,m.useEffect)(()=>{let e=()=>{let e=navigator.connection;e&&w(e.downlink)};return e(),navigator.connection&&navigator.connection.addEventListener("change",e),()=>{navigator.connection&&navigator.connection.removeEventListener("change",e)}},[]),sessionStorage.setItem("netspeed",g);// Validate System Compatibility
let T=()=>{sessionStorage.getItem("netspeed");// Browser Check
let e=(e,t)=>{/*@__PURE__*/s(ss).browser.name===e&&/*@__PURE__*/s(ss).browser.version>t||/*@__PURE__*/s(sl)("Please Update Browser or Try a Different Browser")};switch(/*@__PURE__*/s(ss).browser.name){case"Chrome":e("Chrome",80);break;case"Firefox":e("Firefox",60);break;case"Safari":e("Safari",12);break;case"Opera":e("Opera",60);break;case"Edge":e("Edge",80);break;default:/*@__PURE__*/s(sl)("Unsupported Browser")}// Final Approval
},N=async()=>{try{let e=await navigator.mediaDevices.getUserMedia({video:!0});a(!0),u(e)}catch(e){}},j=async()=>{try{let e=await navigator.mediaDevices.getUserMedia({audio:!0});console.log(e),l(!0),f(e)}catch(e){}};return(0,m.useEffect)(()=>{T()},[]),/*#__PURE__*/(0,h.jsx)(h.Fragment,{children:/*#__PURE__*/(0,h.jsx)("div",{className:" tw-bg-[#34495e] tw-m-0",children:/*#__PURE__*/(0,h.jsxs)("div",{className:"row tw-p-2",children:[/*#__PURE__*/(0,h.jsx)("h1",{className:" text-center tw-p-2 tw-text-xl",children:"System Compatibility Check"}),/*#__PURE__*/(0,h.jsx)("br",{}),/*#__PURE__*/(0,h.jsxs)("div",{className:"col-12 tw-p-2",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-w-1/2 tw-m-auto tw-flex tw-flex-wrap tw-gap-6 tw-justify-center",children:[/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-4 tw-outline tw-outline-sky-400 tw-shadow-md tw-bg-[#d7dbdd]",children:[/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-center tw-flex tw-justify-between ",children:[/*#__PURE__*/(0,h.jsx)("span",{children:"Browser"}),/*#__PURE__*/(0,h.jsx)("span",{children:/*#__PURE__*/(0,h.jsx)("i",{className:"fa-brands fa-chrome tw-text-[#a8a9ad]"})})," "]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Name"," ","- "+JSON.stringify(/*@__PURE__*/s(ss).browser.name).slice(1,-1)]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Version ","- "+JSON.stringify(/*@__PURE__*/s(ss).browser.version)]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Status ","- Compatible"," \xa0"," ",/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-square-check tw-text-green-700"})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-4 tw-outline tw-outline-sky-400 tw-bg-[#d7dbdd]",children:[/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-center tw-flex tw-justify-between ",children:[/*#__PURE__*/(0,h.jsx)("span",{children:"Internet"}),/*#__PURE__*/(0,h.jsx)("span",{children:/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-wifi"})})," "]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Speed ","- "+sessionStorage.getItem("netspeed")+" mbps"]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Strength"," ",+(sessionStorage.getItem("netspeed")>2)?"- Strong":"- Weak"]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Status ","- Compatible"," \xa0"," ",/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-square-check tw-text-green-700"})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-4 tw-outline tw-outline-sky-400 tw-bg-[#d7dbdd]",children:[/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-center tw-flex tw-justify-between ",children:[/*#__PURE__*/(0,h.jsx)("span",{children:"OS"}),/*#__PURE__*/(0,h.jsx)("span",{children:/*#__PURE__*/(0,h.jsx)("i",{className:"fa-brands fa-windows"})})," "]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Name ","- "+JSON.stringify(/*@__PURE__*/s(ss).osName,null,2)]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Version"," ","- "+JSON.stringify(/*@__PURE__*/s(ss).osVersion,null,0).slice(1,-1)," "]}),/*#__PURE__*/(0,h.jsxs)("span",{children:["Status ","- Compatible"," \xa0"," ",/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-square-check tw-text-green-700"})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-6 tw-outline tw-outline-sky-400",children:[/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-center tw-flex tw-justify-between ",children:[/*#__PURE__*/(0,h.jsx)("span",{children:"Microphone"}),/*#__PURE__*/(0,h.jsx)("span",{children:/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-microphone"})})," "]}),/*#__PURE__*/(0,h.jsx)("p",{children:"Name and Version"}),/*#__PURE__*/(0,h.jsx)("p",{children:"Status"}),/*#__PURE__*/(0,h.jsx)("button",{onClick:j,type:"button",children:"Get Mic"}),/*#__PURE__*/(0,h.jsx)("button",{onClick:function(){/*@__PURE__*/s(sc).startListening(),C(k.length)},type:"button",children:"test mic"}),!0===o?"granted":/*#__PURE__*/(0,h.jsx)("p",{children:"Please grant camera access to use this feature."}),/*#__PURE__*/(0,h.jsx)("progress",{max:100,value:b.length,className:" tw-w-full tw-h-4  tw-rounded-xl  tw-bg-green-600",children:" "})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-6 tw-outline tw-outline-sky-400",children:[/*#__PURE__*/(0,h.jsxs)("p",{className:" tw-text-center tw-flex tw-justify-between ",children:[/*#__PURE__*/(0,h.jsx)("span",{children:"Camera"}),/*#__PURE__*/(0,h.jsx)("span",{children:/*#__PURE__*/(0,h.jsx)("i",{className:"fa-solid fa-camera"})})," "]}),/*#__PURE__*/(0,h.jsx)("p",{children:"Name and Version"}),/*#__PURE__*/(0,h.jsx)("p",{children:"Status"}),/*#__PURE__*/(0,h.jsx)("button",{onClick:N,type:"button",children:"Get Camera"}),!0===i?"granted":/*#__PURE__*/(0,h.jsx)("p",{children:"Please grant camera access to use this feature."})]})]}),/*#__PURE__*/(0,h.jsxs)("div",{className:" tw-flex tw-justify-center tw-mt-10",children:[" ",/*#__PURE__*/(0,h.jsx)(y.Link,{to:`/testenv/:${p}`,className:" tw-px-6 tw-py-2 tw-text-center tw-rounded-md ",onClick:void 0,children:"Next"})]})]})]})})})},{})},{path:"/getdata/:id",element:/*#__PURE__*/(0,h.jsx)(sa,{})}]}]),sg=/*@__PURE__*/s(g).createRoot(document.getElementById("root"));sg.render(/*#__PURE__*/(0,h.jsx)(y.RouterProvider,{router:sm}));//# sourceMappingURL=index.695bc65a.js.map

//# sourceMappingURL=index.695bc65a.js.map
