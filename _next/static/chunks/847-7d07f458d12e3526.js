(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[847],{79205:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:u="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:n,strokeWidth:s?24*Number(l)/Number(o):l,className:i("lucide",u),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),s=(e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:s,...u}=n;return(0,r.createElement)(l,{ref:a,iconNode:t,className:i("lucide-".concat(o(e)),s),...u})});return n.displayName="".concat(e),n}},82222:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(79205).Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]])},58293:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(79205).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},32489:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(79205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},99376:function(e,t,n){"use strict";var r=n(35475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},40257:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(44227)},8221:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return a},isEqualNode:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&l.push(n)}let u=t.map(o).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(i(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(a-l.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88003:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return v}});let r=n(47043),o=n(53099),i=n(57437),a=r._(n(54887)),l=o._(n(2265)),s=n(48701),u=n(8221),c=n(63515),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:l="afterInteractive",onError:s,stylesheets:c}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,s);return}let y=()=>{o&&o(),f.add(m)},v=document.createElement("script"),g=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(i?(v.innerHTML=i.__html||"",y()):a?(v.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(v.src=t,d.set(t,g)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();v.setAttribute(e,r)}"worker"===l&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",l),c&&h(c),document.body.appendChild(v)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function v(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:d,stylesheets:p,...h}=e,{updateScripts:y,scripts:v,getIsSsr:g,appDir:b,nonce:w}=(0,l.useContext)(s.HeadManagerContext),_=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;_.current||(o&&e&&f.has(e)&&o(),_.current=!0)},[o,t,n]);let E=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!E.current&&("afterInteractive"===u?m(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),E.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(v[u]=(v[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...h}]),y(v)):g&&g()?f.add(t||n):g&&!g()&&m(e)),b){if(p&&p.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(a.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin}),(0,i.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===u&&n&&a.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let b=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},44227:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s=[],u=!1,c=-1;function d(){u&&r&&(u=!1,r.length?s=r.concat(s):c=-1,s.length&&f())}function f(){if(!u){var e=l(d);u=!0;for(var t=s.length;t;){for(r=s,s=[];++c<t;)r&&r[c].run();c=-1,t=s.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},50911:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},88291:function(e,t,n){"use strict";n.d(t,{Analytics:function(){return u}});var r=n(2265),o=n(40257),i=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function a(){return"undefined"!=typeof window}function l(){return"production"}function s(){return"development"===((a()?window.vam:l())||"production")}function u(e){return(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,r.useEffect)(()=>{var t;!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!a())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=l();return}window.vam=e})(t.mode),i(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=t.scriptSrc?t.scriptSrc:s()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?"".concat(t.basePath,"/insights/script.js"):"/_vercel/insights/script.js";if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),r.dataset.sdkv="1.5.0",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint?r.dataset.endpoint=t.endpoint:t.basePath&&(r.dataset.endpoint="".concat(t.basePath,"/insights")),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{let e=s()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},s()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",basePath:null!==(t=e.basePath)&&void 0!==t?t:function(){if(void 0!==o&&void 0!==o.env)return o.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}(),...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:n,path:r}=e;null==(t=window.va)||t.call(window,"pageview",{route:n,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}},48614:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});var r=n(57437),o=n(2265),i=n(58881),a=n(53576),l=n(64252),s=n(45750);class u extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:n,anchorX:i}=e,a=(0,o.useId)(),l=(0,o.useRef)(null),c=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=(0,o.useContext)(s._);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:o,right:s}=c.current;if(n||!l.current||!e||!t)return;l.current.dataset.motionPopId=a;let u=document.createElement("style");return d&&(u.nonce=d),document.head.appendChild(u),u.sheet&&u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===i?"left: ".concat(o):"right: ".concat(s),"px !important;\n            top: ").concat(r,"px !important;\n          }\n        ")),()=>{document.head.removeChild(u)}},[n]),(0,r.jsx)(u,{isPresent:n,childRef:l,sizeRef:c,children:o.cloneElement(t,{ref:l})})}let d=e=>{let{children:t,initial:n,isPresent:i,onExitComplete:s,custom:u,presenceAffectsLayout:d,mode:p,anchorX:h}=e,m=(0,a.h)(f),y=(0,o.useId)(),v=(0,o.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;s&&s()},[m,s]),g=(0,o.useMemo)(()=>({id:y,initial:n,isPresent:i,custom:u,onExitComplete:v,register:e=>(m.set(e,!1),()=>m.delete(e))}),d?[Math.random(),v]:[i,v]);return(0,o.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[i]),o.useEffect(()=>{i||m.size||!s||s()},[i]),"popLayout"===p&&(t=(0,r.jsx)(c,{isPresent:i,anchorX:h,children:t})),(0,r.jsx)(l.O.Provider,{value:g,children:t})};function f(){return new Map}var p=n(49637);let h=e=>e.key||"";function m(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var y=n(11534);let v=e=>{let{children:t,custom:n,initial:l=!0,onExitComplete:s,presenceAffectsLayout:u=!0,mode:c="sync",propagate:f=!1,anchorX:v="left"}=e,[g,b]=(0,p.oO)(f),w=(0,o.useMemo)(()=>m(t),[t]),_=f&&!g?[]:w.map(h),E=(0,o.useRef)(!0),x=(0,o.useRef)(w),k=(0,a.h)(()=>new Map),[M,S]=(0,o.useState)(w),[A,T]=(0,o.useState)(w);(0,y.L)(()=>{E.current=!1,x.current=w;for(let e=0;e<A.length;e++){let t=h(A[e]);_.includes(t)?k.delete(t):!0!==k.get(t)&&k.set(t,!1)}},[A,_.length,_.join("-")]);let L=[];if(w!==M){let e=[...w];for(let t=0;t<A.length;t++){let n=A[t],r=h(n);_.includes(r)||(e.splice(t,0,n),L.push(n))}return"wait"===c&&L.length&&(e=L),T(m(e)),S(w),null}let{forceRender:C}=(0,o.useContext)(i.p);return(0,r.jsx)(r.Fragment,{children:A.map(e=>{let t=h(e),o=(!f||!!g)&&(w===A||_.includes(t));return(0,r.jsx)(d,{isPresent:o,initial:(!E.current||!!l)&&void 0,custom:n,presenceAffectsLayout:u,mode:c,onExitComplete:o?void 0:()=>{if(!k.has(t))return;k.set(t,!0);let e=!0;k.forEach(t=>{t||(e=!1)}),e&&(null==C||C(),T(x.current),f&&(null==b||b()),s&&s())},anchorX:v,children:e},t)})})}}}]);