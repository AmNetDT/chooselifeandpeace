"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{1542:function(e,t,n){n.d(t,{Up:function(){return N},Vv:function(){return R},ch:function(){return b}});var r,o,a,i,c,u,s=n(2265);(r=i||(i={})).INITIAL="initial",r.PENDING="pending",r.REJECTED="rejected",r.RESOLVED="resolved",(o=c||(c={})).LOADING_STATUS="setLoadingStatus",o.RESET_OPTIONS="resetOptions",o.SET_BRAINTREE_INSTANCE="braintreeInstance",(a=u||(u={})).NUMBER="number",a.CVV="cvv",a.EXPIRATION_DATE="expirationDate",a.EXPIRATION_MONTH="expirationMonth",a.EXPIRATION_YEAR="expirationYear",a.POSTAL_CODE="postalCode";var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function f(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var p="data-react-paypal-script-id",v={DATA_JS_SDK_LIBRARY:"dataJsSdkLibrary",DATA_LIBRARY_VALUE:"react-paypal-js",DATA_NAMESPACE:"dataNamespace",DATA_SDK_INTEGRATION_SOURCE:"dataSdkIntegrationSource"},m="paypal";function E(e){return void 0===e&&(e=m),window[e]}function y(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,i=n.charAt(0).toUpperCase().concat(n.substring(1)),c="Unable to render <".concat(t," /> because window.").concat(void 0===a?m:a,".").concat(i," is undefined."),u="string"==typeof o?o:o.join(",");if(!u.includes(n)){var s=[u,n].filter(Boolean).join();c+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(s,"'}}>`.")}return c}function h(e){e[p];var t=d(e,[p+""]);return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(t)))}function A(e,t){var n,r,o,a;switch(t.type){case c.LOADING_STATUS:if("object"==typeof t.value)return l(l({},e),{loadingStatus:t.value.state,loadingStatusErrorMessage:t.value.message});return l(l({},e),{loadingStatus:t.value});case c.RESET_OPTIONS:return o=e.options[p],(null==(a=self.document.querySelector("script[".concat(p,'="').concat(o,'"]')))?void 0:a.parentNode)&&a.parentNode.removeChild(a),l(l({},e),{loadingStatus:i.PENDING,options:l(l(((n={})[v.DATA_SDK_INTEGRATION_SOURCE]=v.DATA_LIBRARY_VALUE,n),t.value),((r={})[p]="".concat(h(t.value)),r))});case c.SET_BRAINTREE_INSTANCE:return l(l({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var S=(0,s.createContext)(null);function N(){var e=function(e){if("function"==typeof(null==e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}((0,s.useContext)(S));return[l(l({},e),{isInitial:e.loadingStatus===i.INITIAL,isPending:e.loadingStatus===i.PENDING,isResolved:e.loadingStatus===i.RESOLVED,isRejected:e.loadingStatus===i.REJECTED}),e.dispatch]}(0,s.createContext)({});var b=function(e){var t,n=e.className,r=e.disabled,o=void 0!==r&&r,a=e.children,i=e.forceReRender,c=d(e,["className","disabled","children","forceReRender"]),u="".concat(void 0===n?"":n," ").concat(o?"paypal-buttons-disabled":"").trim(),p=(0,s.useRef)(null),m=(0,s.useRef)(null),h=N()[0],A=h.isResolved,S=h.options,g=(0,s.useState)(null),P=g[0],T=g[1],I=(0,s.useState)(!0),R=I[0],O=I[1],_=(0,s.useState)(null)[1];function C(){null!==m.current&&m.current.close().catch(function(){})}return(null===(t=m.current)||void 0===t?void 0:t.updateProps)&&m.current.updateProps({message:c.message}),(0,s.useEffect)(function(){if(!1===A)return C;var e=E(S.dataNamespace);if(void 0===e||void 0===e.Buttons)return _(function(){throw Error(y({reactComponentName:b.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:S.components,sdkDataNamespace:S[v.DATA_NAMESPACE]}))}),C;try{m.current=e.Buttons(l(l({},c),{onInit:function(e,t){T(t),"function"==typeof c.onInit&&c.onInit(e,t)}}))}catch(e){return _(function(){throw Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(e))})}return!1===m.current.isEligible()?O(!1):p.current&&m.current.render(p.current).catch(function(e){null!==p.current&&0!==p.current.children.length&&_(function(){throw Error("Failed to render <PayPalButtons /> component. ".concat(e))})}),C},f(f([A],void 0===i?[]:i,!0),[c.fundingSource],!1)),(0,s.useEffect)(function(){null!==P&&(!0===o?P.disable().catch(function(){}):P.enable().catch(function(){}))},[o,P]),s.createElement(s.Fragment,null,R?s.createElement("div",{ref:p,style:o?{opacity:.38}:{},className:u}):a)};function g(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach(function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])}),n}function P(e,t){if("object"!=typeof e||null===e)throw Error("Expected an options object.");var n=e.environment;if(n&&"production"!==n&&"sandbox"!==n)throw Error('The `environment` option must be either "production" or "sandbox".');if(void 0!==t&&"function"!=typeof t)throw Error("Expected PromisePonyfill to be a function.")}b.displayName="PayPalButtons";var T=function(e){var t=e.className,n=e.children,r=d(e,["className","children"]),o=N()[0],a=o.isResolved,i=o.options,c=(0,s.useRef)(null),u=(0,s.useState)(!0),f=u[0],p=u[1],m=(0,s.useState)(null)[1],h=function(e){var t=c.current;if(!t||!e.isEligible())return p(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch(function(e){null!==t&&0!==t.children.length&&m(function(){throw Error("Failed to render <PayPalMarks /> component. ".concat(e))})})};return(0,s.useEffect)(function(){if(!1!==a){var e=E(i[v.DATA_NAMESPACE]);if(void 0===e||void 0===e.Marks)return m(function(){throw Error(y({reactComponentName:T.displayName,sdkComponentKey:"marks",sdkRequestedComponents:i.components,sdkDataNamespace:i[v.DATA_NAMESPACE]}))});h(e.Marks(l({},r)))}},[a,r.fundingSource]),s.createElement(s.Fragment,null,f?s.createElement("div",{ref:c,className:void 0===t?"":t}):n)};T.displayName="PayPalMarks";var I=function(e){var t=e.className,n=e.forceReRender,r=d(e,["className","forceReRender"]),o=N()[0],a=o.isResolved,i=o.options,c=(0,s.useRef)(null),u=(0,s.useRef)(null),p=(0,s.useState)(null)[1];return(0,s.useEffect)(function(){if(!1!==a){var e=E(i[v.DATA_NAMESPACE]);if(void 0===e||void 0===e.Messages)return p(function(){throw Error(y({reactComponentName:I.displayName,sdkComponentKey:"messages",sdkRequestedComponents:i.components,sdkDataNamespace:i[v.DATA_NAMESPACE]}))});u.current=e.Messages(l({},r)),u.current.render(c.current).catch(function(e){null!==c.current&&0!==c.current.children.length&&p(function(){throw Error("Failed to render <PayPalMessages /> component. ".concat(e))})})}},f([a],void 0===n?[]:n,!0)),s.createElement("div",{ref:c,className:void 0===t?"":t})};I.displayName="PayPalMessages";var R=function(e){var t,n=e.options,r=void 0===n?{clientId:"test"}:n,o=e.children,a=e.deferLoading,u=void 0!==a&&a,d=(0,s.useReducer)(A,{options:l(l({},r),((t={})[v.DATA_JS_SDK_LIBRARY]=v.DATA_LIBRARY_VALUE,t[v.DATA_SDK_INTEGRATION_SOURCE]=v.DATA_LIBRARY_VALUE,t[p]="".concat(h(r)),t)),loadingStatus:u?i.INITIAL:i.PENDING}),f=d[0],m=d[1];return(0,s.useEffect)(function(){if(!1===u&&f.loadingStatus===i.INITIAL)return m({type:c.LOADING_STATUS,value:i.PENDING});if(f.loadingStatus===i.PENDING){var e=!0;return(function(e,t){if(void 0===t&&(t=Promise),P(e,t),"undefined"==typeof document)return t.resolve(null);var n,r,o,a,i,c=(r="sandbox"===e.environment?"https://www.sandbox.paypal.com/sdk/js":"https://www.paypal.com/sdk/js",delete e.environment,e.sdkBaseUrl&&(r=e.sdkBaseUrl,delete e.sdkBaseUrl),a=(o=Object.keys(e).filter(function(t){return void 0!==e[t]&&null!==e[t]&&""!==e[t]}).reduce(function(t,n){var r=e[n].toString();return"data"===(n=n.replace(/[A-Z]+(?![a-z])|[A-Z]/g,function(e,t){return(t?"-":"")+e.toLowerCase()})).substring(0,4)||"crossorigin"===n?t.attributes[n]=r:t.queryParams[n]=r,t},{queryParams:{},attributes:{}})).queryParams,i=o.attributes,a["merchant-id"]&&-1!==a["merchant-id"].indexOf(",")&&(i["data-merchant-id"]=a["merchant-id"],a["merchant-id"]="*"),{url:"".concat(r,"?").concat((n="",Object.keys(a).forEach(function(e){0!==n.length&&(n+="&"),n+=e+"="+a[e]}),n)),attributes:i}),u=c.url,s=c.attributes,l=s["data-namespace"]||"paypal",d=window[l];return(s["data-js-sdk-library"]||(s["data-js-sdk-library"]="paypal-js"),function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=g(e,t),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach(function(e){o.dataset[e]!==r.dataset[e]&&(a=!1)}),a?n:null}(u,s)&&d)?t.resolve(d):(function(e,t){void 0===t&&(t=Promise),P(e,t);var n=e.url,r=e.attributes;if("string"!=typeof n||0===n.length)throw Error("Invalid url.");if(void 0!==r&&"object"!=typeof r)throw Error("Expected attributes to be an object.");return new t(function(e,t){var o,a,i,c,u,s;if("undefined"==typeof document)return e();a=(o={url:n,attributes:r,onSuccess:function(){return e()},onError:function(){return t(Error('The script "'.concat(n,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.')))}}).url,i=o.attributes,c=o.onSuccess,u=o.onError,(s=g(a,i)).onerror=u,s.onload=c,document.head.insertBefore(s,document.head.firstElementChild)})})({url:u,attributes:s},t).then(function(){var e=window[l];if(e)return e;throw Error("The window.".concat(l," global variable is not available."))})})(f.options).then(function(){e&&m({type:c.LOADING_STATUS,value:i.RESOLVED})}).catch(function(t){console.error("".concat("Failed to load the PayPal JS SDK script."," ").concat(t)),e&&m({type:c.LOADING_STATUS,value:{state:i.REJECTED,message:String(t)}})}),function(){e=!1}}},[f.options,u,f.loadingStatus]),s.createElement(S.Provider,{value:l(l({},f),{dispatch:m})},o)};function O(){}(0,s.createContext)({cardFieldsForm:null,fields:{},registerField:O,unregisterField:O})},3145:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(8461),o=n.n(r)},7648:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(2972),o=n.n(r)},2119:function(e,t,n){Object.defineProperty(t,"$",{enumerable:!0,get:function(){return o}});let r=n(3079);function o(e){let{createServerReference:t}=n(6671);return t(e,r.callServer)}},8461:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},getImageProps:function(){return c}});let r=n(7043),o=n(5346),a=n(5878),i=r._(n(5084));function c(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=a.Image},7712:function(e,t,n){n.d(t,{j:function(){return a}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},a=(e,t)=>n=>{var a;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:c}=t,u=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],o=null==c?void 0:c[e];if(null===t)return null;let a=r(t)||r(o);return i[e][a]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,u,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...c,...s}[t]):({...c,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);