import{r as u,K as T,j as l,$ as x}from"./app-Cv2-jaqd.js";import{B as z}from"./button-DaIiWlee.js";let U={data:""},B=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||U,K=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Y=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,v=(e,t)=>{let r="",o="",s="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":o+=a[1]=="f"?v(n,a):a+"{"+v(n,a[1]=="k"?"":t)+"}":typeof n=="object"?o+=v(n,t?t.replace(/([^,])+/g,i=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,i):i?i+" "+c:c)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=v.p?v.p(a,n):a+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+o},y={},M=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+M(e[r]);return t}return e},Z=(e,t,r,o,s)=>{let a=M(e),n=y[a]||(y[a]=(c=>{let d=0,p=11;for(;d<c.length;)p=101*p+c.charCodeAt(d++)>>>0;return"go"+p})(a));if(!y[n]){let c=a!==e?e:(d=>{let p,f,h=[{}];for(;p=K.exec(d.replace(Y,""));)p[4]?h.shift():p[3]?(f=p[3].replace(L," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][p[1]]=p[2].replace(L," ").trim();return h[0]})(e);y[n]=v(s?{["@keyframes "+n]:c}:c,r?"":"."+n)}let i=r&&y.g?y.g:null;return r&&(y.g=y[n]),((c,d,p,f)=>{f?d.data=d.data.replace(f,c):d.data.indexOf(c)===-1&&(d.data=p?c+d.data:d.data+c)})(y[n],t,o,i),n},q=(e,t,r)=>e.reduce((o,s,a)=>{let n=t[a];if(n&&n.call){let i=n(r),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=c?"."+c:i&&typeof i=="object"?i.props?"":v(i,""):i===!1?"":i}return o+s+(n??"")},"");function D(e){let t=this||{},r=e.call?e(t.p):e;return Z(r.unshift?r.raw?q(r,[].slice.call(arguments,1),t.p):r.reduce((o,s)=>Object.assign(o,s&&s.call?s(t.p):s),{}):r,B(t.target),t.g,t.o,t.k)}let P,S,I;D.bind({g:1});let b=D.bind({k:1});function W(e,t,r,o){v.p=t,P=e,S=r,I=o}function w(e,t){let r=this||{};return function(){let o=arguments;function s(a,n){let i=Object.assign({},a),c=i.className||s.className;r.p=Object.assign({theme:S&&S()},i),r.o=/ *go\d+/.test(c),i.className=D.apply(r,o)+(c?" "+c:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),I&&d[0]&&I(i),P(d,i)}return t?t(s):s}}var G=e=>typeof e=="function",O=(e,t)=>G(e)?e(t):e,J=(()=>{let e=0;return()=>(++e).toString()})(),R=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Q=20,_=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Q)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return _(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},$=[],C={toasts:[],pausedAt:void 0},j=e=>{C=_(C,e),$.forEach(t=>{t(C)})},V={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},X=(e={})=>{let[t,r]=u.useState(C);u.useEffect(()=>($.push(r),()=>{let s=$.indexOf(r);s>-1&&$.splice(s,1)}),[t]);let o=t.toasts.map(s=>{var a,n,i;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((a=e[s.type])==null?void 0:a.removeDelay)||(e==null?void 0:e.removeDelay),duration:s.duration||((n=e[s.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||V[s.type],style:{...e.style,...(i=e[s.type])==null?void 0:i.style,...s.style}}});return{...t,toasts:o}},ee=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||J()}),k=e=>(t,r)=>{let o=ee(t,e,r);return j({type:2,toast:o}),o.id},m=(e,t)=>k("blank")(e,t);m.error=k("error");m.success=k("success");m.loading=k("loading");m.custom=k("custom");m.dismiss=e=>{j({type:3,toastId:e})};m.remove=e=>j({type:4,toastId:e});m.promise=(e,t,r)=>{let o=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(s=>{let a=t.success?O(t.success,s):void 0;return a?m.success(a,{id:o,...r,...r==null?void 0:r.success}):m.dismiss(o),s}).catch(s=>{let a=t.error?O(t.error,s):void 0;a?m.error(a,{id:o,...r,...r==null?void 0:r.error}):m.dismiss(o)}),e};var te=(e,t)=>{j({type:1,toast:{id:e,height:t}})},re=()=>{j({type:5,time:Date.now()})},N=new Map,ae=1e3,se=(e,t=ae)=>{if(N.has(e))return;let r=setTimeout(()=>{N.delete(e),j({type:4,toastId:e})},t);N.set(e,r)},oe=e=>{let{toasts:t,pausedAt:r}=X(e);u.useEffect(()=>{if(r)return;let a=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let c=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(c<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),c)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,r]);let o=u.useCallback(()=>{r&&j({type:6,time:Date.now()})},[r]),s=u.useCallback((a,n)=>{let{reverseOrder:i=!1,gutter:c=8,defaultPosition:d}=n||{},p=t.filter(g=>(g.position||d)===(a.position||d)&&g.height),f=p.findIndex(g=>g.id===a.id),h=p.filter((g,A)=>A<f&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[h+1]:[0,h]).reduce((g,A)=>g+(A.height||0)+c,0)},[t]);return u.useEffect(()=>{t.forEach(a=>{if(a.dismissed)se(a.id,a.removeDelay);else{let n=N.get(a.id);n&&(clearTimeout(n),N.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:te,startPause:re,endPause:o,calculateOffset:s}}},ie=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ne=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ce=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ie} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ne} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,de=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ue=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${de} 1s linear infinite;
`,pe=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,me=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,he=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${me} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,fe=w("div")`
  position: absolute;
`,ge=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xe=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ye=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,be=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement(ye,null,t):t:r==="blank"?null:u.createElement(ge,null,u.createElement(ue,{...o}),r!=="loading"&&u.createElement(fe,null,r==="error"?u.createElement(ce,{...o}):u.createElement(he,{...o})))},ve=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,we=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,je="0%{opacity:0;} 100%{opacity:1;}",Ne="0%{opacity:1;} 100%{opacity:0;}",ke=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ee=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$e=(e,t)=>{let r=e.includes("top")?1:-1,[o,s]=R()?[je,Ne]:[ve(r),we(r)];return{animation:t?`${b(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ce=u.memo(({toast:e,position:t,style:r,children:o})=>{let s=e.height?$e(e.position||t||"top-center",e.visible):{opacity:0},a=u.createElement(be,{toast:e}),n=u.createElement(Ee,{...e.ariaProps},O(e.message,e));return u.createElement(ke,{className:e.className,style:{...s,...r,...e.style}},typeof o=="function"?o({icon:a,message:n}):u.createElement(u.Fragment,null,a,n))});W(u.createElement);var Oe=({id:e,className:t,style:r,onHeightUpdate:o,children:s})=>{let a=u.useCallback(n=>{if(n){let i=()=>{let c=n.getBoundingClientRect().height;o(e,c)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return u.createElement("div",{ref:a,className:t,style:r},s)},De=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...s}},Ae=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,ze=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:s,containerStyle:a,containerClassName:n})=>{let{toasts:i,handlers:c}=oe(r);return u.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},i.map(d=>{let p=d.position||t,f=c.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),h=De(p,f);return u.createElement(Oe,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Ae:"",style:h},d.type==="custom"?O(d.message,d):s?s(d):u.createElement(Ce,{toast:d,position:p}))}))},Ue=m;/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),F=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=u.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:a,iconNode:n,...i},c)=>u.createElement("svg",{ref:c,...Ie,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:F("lucide",s),...i},[...n.map(([d,p])=>u.createElement(d,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(e,t)=>{const r=u.forwardRef(({className:o,...s},a)=>u.createElement(Le,{ref:a,iconNode:t,className:F(`lucide-${Se(e)}`,o),...s}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Pe=H("ShoppingCart",Me);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],_e=H("User",Re);function Fe(){const[e,t]=u.useState(!1),[r,o]=u.useState(!1),s=T().props.auth.user;return l.jsx("header",{className:"bg-white shadow-sm",children:l.jsxs("div",{className:"container mx-auto px-4 py-4 flex items-center justify-between",children:[l.jsx(x,{href:"/",className:"text-2xl font-bold text-primary",children:"RaihanShop"}),l.jsxs("nav",{className:"hidden md:flex space-x-4",children:[l.jsx(x,{href:"/",className:"text-gray-600 hover:text-primary",children:"Home"}),l.jsx(x,{href:"/products",className:"text-gray-600 hover:text-primary",children:"Products"}),l.jsx(x,{href:"/about",className:"text-gray-600 hover:text-primary",children:"About"}),l.jsx(x,{href:"/contact",className:"text-gray-600 hover:text-primary",children:"Contact"})]}),l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsxs("div",{className:"relative",children:[l.jsx(z,{variant:"ghost",size:"icon",onClick:()=>o(!r),"aria-label":"User menu",children:l.jsx(_e,{className:"h-6 w-6"})}),r&&l.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10",children:s?l.jsxs(l.Fragment,{children:[l.jsx(x,{href:"/transactions",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Daftar Transaksiku"}),l.jsx(x,{href:"/logout",method:"post",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Logout"})]}):l.jsxs(l.Fragment,{children:[l.jsx(x,{href:"/login",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Login"}),l.jsx(x,{href:"/register",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Register"})]})})]}),s&&s.carts.length>0&&l.jsxs("div",{className:"relative",children:[l.jsxs(z,{variant:"ghost",size:"icon",onClick:()=>t(!e),"aria-label":"Shopping cart",children:[l.jsx(Pe,{className:"h-6 w-6"}),l.jsx("span",{className:"absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full",children:s.carts.length})]}),e&&l.jsx("div",{className:"absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-10",children:l.jsxs("div",{className:"p-4",children:[l.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Your Cart"}),l.jsx("ul",{className:"space-y-2",children:s.carts.map(a=>l.jsxs("li",{className:"flex justify-between items-center",children:[l.jsx("span",{children:a.product.name}),l.jsxs("span",{children:["Rp."," ",a.product.price.toFixed(2)]})]}))}),l.jsx("div",{className:"mt-4",children:l.jsx(z,{asChild:!0,className:"w-full",children:l.jsx(x,{href:"/checkout",children:"Checkout"})})})]})})]})]})]})})}function Be({children:e}){return l.jsxs("html",{lang:"en",children:[l.jsx(ze,{position:"top-center",reverseOrder:!1}),l.jsxs("body",{children:[l.jsx(Fe,{}),e]})]})}export{Be as R,H as c,Ue as k};
