(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{64515:function(e,t,s){Promise.resolve().then(s.bind(s,86463))},86463:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var n=s(57437),r=s(94276),a=s(2265),o=s(45699);let i={some:0,all:1};var l=s(62035),c=s(48771),d=s(45647);function u(e,t){[...t].reverse().forEach(s=>{let n=e.getVariant(s);n&&(0,c.C)(e,n),e.variantChildren&&e.variantChildren.forEach(e=>{u(e,t)})})}function m(){let e=!1,t=new Set,s={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(s,n){(0,l.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let r=[];return t.forEach(e=>{r.push((0,d.d)(e,s,{transitionOverride:n}))}),Promise.all(r)},set:s=>((0,l.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(s)?u(e,s):"string"==typeof s?u(e,[s]):(0,c.C)(e,s)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,s.stop()})};return s}var h=s(53576),f=s(11534);let x=function(){let e=(0,h.h)(m);return(0,f.L)(e.mount,[]),e};var p=s(82222),y=s(13041),g=s(11239);let v=(0,s(79205).Z)("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]),w=[{name:"Letvik's Smart Customer Support",description:"Your personal AI assistant that talks just like you would.",icon:(0,n.jsx)(p.Z,{className:"w-12 h-12 text-yellow-400"}),launchDate:"Launching This March!",features:["Speaks in your brand's voice","Follows your sales playbook","Works on Facebook, Instagram, and WhatsApp","Available 24/7 to help customers","Learns and improves over time"],benefits:["Faster response times for happier customers","Consistent messaging across all platforms","Frees up your team for more important tasks","Increases sales by always being available"]},{name:"AI-Powered Calling System",description:"Make smarter calls that get results.",icon:(0,n.jsx)(y.Z,{className:"w-12 h-12 text-yellow-400"}),features:["Automatically schedules the best time to call","Understands and responds to customer tone","Handles common questions and objections","Seamlessly transfers to human agents when needed","Works in multiple languages"],benefits:["Reach more customers in less time","Improve call success rates","Reduce training time for new sales reps","Gather valuable insights from every call"]},{name:"Workflow Automation",description:"Let AI handle your repetitive tasks.",icon:(0,n.jsx)(g.Z,{className:"w-12 h-12 text-yellow-400"}),features:["Automates data entry and processing","Creates and sends personalized emails","Manages appointment scheduling","Generates reports automatically","Integrates with your existing tools"],benefits:["Save hours on routine tasks","Reduce errors in data handling","Improve team productivity","Focus on growth instead of busywork"]},{name:"AI-Driven Analytics",description:"Turn your data into actionable insights.",icon:(0,n.jsx)(v,{className:"w-12 h-12 text-yellow-400"}),features:["Analyzes customer interactions across all channels","Identifies trends and patterns in your data","Predicts customer behavior and needs","Provides easy-to-understand reports","Offers real-time dashboards for quick decision-making"],benefits:["Make data-driven decisions with confidence","Understand your customers better","Spot opportunities for growth and improvement","Measure and improve the effectiveness of your strategies"]}],k=()=>{let[e,t]=(0,a.useState)(!1);return(0,n.jsx)(r.E.div,{className:"w-24 h-24 bg-[#4ff0b7] rounded-lg cursor-pointer",initial:{scale:.4},animate:{scale:e?.8:1},transition:{scale:{type:"spring",stiffness:e?1e3:500},default:{ease:"circInOut",duration:1}},whileHover:{scale:1.1},onMouseDown:()=>t(!0),onMouseUp:()=>t(!1),onMouseLeave:()=>t(!1),tabIndex:0,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&t(!0)},onKeyUp:()=>t(!1)})},b=e=>{let{children:t,color:s}=e,l=(0,a.useRef)(null),c=function(e,{root:t,margin:s,amount:n,once:r=!1,initial:l=!1}={}){let[c,d]=(0,a.useState)(l);return(0,a.useEffect)(()=>{if(!e.current||r&&c)return;let a={root:t&&t.current||void 0,margin:s,amount:n};return function(e,t,{root:s,margin:n,amount:r="some"}={}){let a=(0,o.IG)(e),l=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let s=l.get(e.target);if(!!s!==e.isIntersecting){if(e.isIntersecting){let s=t(e.target,e);"function"==typeof s?l.set(e.target,s):c.unobserve(e.target)}else"function"==typeof s&&(s(e),l.delete(e.target))}})},{root:s,rootMargin:n,threshold:"number"==typeof r?r:i[r]});return a.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(d(!0),r?void 0:()=>d(!1)),a)},[t,e,s,r,n]),c}(l,{once:!0}),d=x();return(0,a.useEffect)(()=>{c&&d.start({opacity:1,x:0})},[c,d]),(0,n.jsx)(r.E.div,{ref:l,className:"min-h-screen flex items-center justify-center",initial:{opacity:0,x:-100},animate:d,transition:{duration:.9,ease:[.17,.55,.55,1]},children:(0,n.jsx)("pre",{className:"text-5xl ".concat(s),children:t})})};function j(){let[e,t]=(0,a.useState)(null);return(0,n.jsxs)("div",{className:"container mx-auto px-6 py-20",children:[(0,n.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-12 text-center text-gradient",children:"Our Products"}),(0,n.jsx)("p",{className:"text-xl text-center text-gray-300 mb-12",children:"At Letvik, we create smart tools that help your business work better. Our products are like having extra team members who never sleep, always remember, and keep getting smarter."}),(0,n.jsxs)("div",{className:"flex justify-center space-x-4 mb-12",children:[(0,n.jsx)(k,{}),(0,n.jsx)(k,{}),(0,n.jsx)(k,{})]}),(0,n.jsx)("div",{className:"space-y-16",children:w.map((s,a)=>(0,n.jsxs)(r.E.div,{className:"glass p-8 rounded-lg",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*a},children:[(0,n.jsxs)("div",{className:"flex items-center mb-6",children:[s.icon,(0,n.jsx)("h2",{className:"text-3xl font-semibold ml-4",children:s.name})]}),s.launchDate&&(0,n.jsx)("p",{className:"text-yellow-400 font-semibold mb-4",children:s.launchDate}),(0,n.jsx)("p",{className:"text-xl mb-6",children:s.description}),(0,n.jsx)(r.E.button,{className:"text-yellow-400 hover:text-yellow-300 transition-colors font-semibold",onClick:()=>t(e===a?null:a),whileHover:{scale:1.05},whileTap:{scale:.95},children:e===a?"Hide Details":"Show Details"}),(0,n.jsxs)(r.E.div,{className:"mt-6 grid gap-8 md:grid-cols-2",initial:!1,animate:{height:e===a?"auto":0,opacity:e===a?1:0},transition:{duration:.3},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-semibold mb-4 text-yellow-400",children:"Key Features"}),(0,n.jsx)("ul",{className:"space-y-2",children:s.features.map((e,t)=>(0,n.jsxs)(r.E.li,{className:"flex items-center",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.1*t},children:[(0,n.jsx)("svg",{className:"w-5 h-5 mr-2 text-green-500 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),(0,n.jsx)("span",{children:e})]},t))})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-semibold mb-4 text-yellow-400",children:"Benefits for Your Business"}),(0,n.jsx)("ul",{className:"space-y-2",children:s.benefits.map((e,t)=>(0,n.jsxs)(r.E.li,{className:"flex items-center",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.1*t},children:[(0,n.jsx)("svg",{className:"w-5 h-5 mr-2 text-blue-500 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:e})]},t))})]})]})]},s.name))}),(0,n.jsx)(b,{color:"text-[#ff0088]",children:"Scroll"}),(0,n.jsx)(b,{color:"text-[#dd00ee]",children:"to"}),(0,n.jsx)(b,{color:"text-[#9911ff]",children:"trigger"}),(0,n.jsx)(b,{color:"text-[#0d63f8]",children:"animations!"}),(0,n.jsxs)("div",{className:"mt-16 text-center",children:[(0,n.jsx)("p",{className:"text-2xl font-semibold text-gradient mb-4",children:"At Letvik, We Automate, so You Can Innovate. \uD83D\uDE80"}),(0,n.jsx)("p",{className:"text-xl text-gray-300",children:"Our AI-powered tools work together to make your business smarter, faster, and more efficient."})]})]})}},79205:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(2265);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,n.forwardRef)((e,t)=>{let{color:s="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:d,iconNode:u,...m}=e;return(0,n.createElement)("svg",{ref:t,...o,width:r,height:r,stroke:s,strokeWidth:l?24*Number(i)/Number(r):i,className:a("lucide",c),...m},[...u.map(e=>{let[t,s]=e;return(0,n.createElement)(t,s)}),...Array.isArray(d)?d:[d]])}),l=(e,t)=>{let s=(0,n.forwardRef)((s,o)=>{let{className:l,...c}=s;return(0,n.createElement)(i,{ref:o,iconNode:t,className:a("lucide-".concat(r(e)),l),...c})});return s.displayName="".concat(e),s}},82222:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});let n=(0,s(79205).Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]])},13041:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});let n=(0,s(79205).Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},11239:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});let n=(0,s(79205).Z)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])}},function(e){e.O(0,[276,971,117,744],function(){return e(e.s=64515)}),_N_E=e.O()}]);