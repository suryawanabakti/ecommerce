import{r as m,j as e,K as f,b as j,S as y}from"./app-Cv2-jaqd.js";import{c as b,a as g,B as C}from"./button-DaIiWlee.js";import{I as c}from"./input-Fz-xJGx1.js";import{P as v}from"./index-VvxZFla7.js";import{C as N,a as w,b as P,d as F,c as R,e as q}from"./card-Ct3ZmZrM.js";import{R as S}from"./Layout-CgDvdH2X.js";import"./index-CCBoxUMk.js";var D="Label",x=m.forwardRef((a,n)=>e.jsx(v.label,{...a,ref:n,onMouseDown:r=>{var d;r.target.closest("button, input, select, textarea")||((d=a.onMouseDown)==null||d.call(a,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));x.displayName=D;var h=x;const k=g("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),i=m.forwardRef(({className:a,...n},r)=>e.jsx(h,{ref:r,className:b(k(),a),...n}));i.displayName=h.displayName;function H(){const a=f().props.auth.user,[n,r]=m.useState({name:a.name,email:a.email,address:a.alamat,nohp:a.nohp,carts:a.carts}),l=s=>{const{name:o,value:t}=s.target;r(p=>({...p,[o]:t}))},d=a.carts.reduce((s,o)=>s+o.product.price*o.qty,0),u=async()=>{try{const o=(await j.post("/transactions",{carts:a.carts})).data.token;window.snap.pay(o,{onSuccess:function(t){console.log("Payment success:",t),y.visit("/transactions")},onPending:function(t){console.log("Waiting for payment:",t)},onError:function(t){console.error("Payment failed:",t)},onClose:function(){location.reload(),console.log("Payment popup closed")}})}catch(s){console.error("Payment error:",s)}};return e.jsx(S,{children:e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsxs(N,{children:[e.jsxs(w,{children:[e.jsx(P,{children:"Checkout"}),e.jsx(F,{children:"Complete your order"})]}),e.jsx(R,{children:e.jsx("form",{onSubmit:u,children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"name",children:"Name"}),e.jsx(c,{id:"name",name:"name",value:n.name,onChange:l,required:!0})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"email",children:"Email"}),e.jsx(c,{id:"email",name:"email",type:"email",value:n.email,onChange:l,required:!0})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"address",children:"Address"}),e.jsx(c,{id:"address",name:"address",value:n.address,onChange:l,required:!0})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"nohp",children:"No.HP"}),e.jsx(c,{id:"nohp",name:"nohp",value:n.nohp,onChange:l,required:!0})]})]})})}),e.jsxs(q,{className:"flex flex-col items-start",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Order Summary"}),a.carts.map(s=>e.jsxs("div",{className:"flex justify-between w-full mb-2",children:[e.jsxs("span",{children:[s.product.name," (x",s.qty,")"]}),e.jsxs("span",{children:["Rp.",(s.product.price*s.qty).toFixed(2)]})]},s.id)),e.jsxs("div",{className:"flex justify-between w-full border-t pt-2 mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Total:"}),e.jsxs("span",{className:"font-semibold",children:["Rp. ",d.toFixed(2)]})]}),e.jsx(C,{className:"w-full mt-4",type:"submit",onClick:u,children:"Place Order"})]})]})})})}export{H as default};
