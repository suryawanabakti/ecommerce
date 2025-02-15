import{j as e,S as l,$ as r,L as t}from"./app-Cv2-jaqd.js";import{B as i}from"./button-DaIiWlee.js";import{k as c,R as d}from"./Layout-CgDvdH2X.js";function o(){return e.jsx("section",{className:"bg-gray-100",children:e.jsxs("div",{className:"container mx-auto px-4 py-16 flex flex-col md:flex-row items-center",children:[e.jsxs("div",{className:"md:w-1/2 mb-8 md:mb-0",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Welcome to RaihanShop"}),e.jsx("p",{className:"text-xl mb-6",children:"Discover our eco-friendly products that make a difference."}),e.jsx(i,{size:"lg",onClick:()=>l.visit("/products"),children:"Shop Now"})]}),e.jsx("div",{className:"md:w-1/2",children:e.jsx("img",{src:"https://polbangtan-gowa.ac.id/storage/2022/04/gerbang.jpg",alt:"Eco-friendly products",width:600,height:400,className:"rounded-lg shadow-md"})})]})})}function n({products:a}){return e.jsx("section",{className:"py-16",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Featured Products"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",children:a.map(s=>e.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[e.jsx(r,{href:`/products/${s.id}`,children:e.jsx("img",{src:"/storage/"+s.image||"/placeholder.svg",alt:s.name,width:300,height:200,className:"w-full h-48 object-cover"})}),e.jsxs("div",{className:"p-4",children:[e.jsx(r,{href:`/products/${s.id}`,children:e.jsx("h3",{className:"text-lg font-semibold mb-2 hover:text-primary",children:s.name})}),e.jsxs("p",{className:"text-gray-600 mb-4",children:["Rp. ",s.price.toFixed(2)]}),e.jsx(i,{className:"w-full",onClick:()=>{l.post("/carts",{product_id:s.id},{preserveScroll:!0,onSuccess:()=>c.success("Berhasil tambah ke keranjang")})},children:"Add to Cart"})]})]},s.id))})]})})}function j({products:a}){return e.jsxs(d,{children:[e.jsx(t,{title:"Home"}),e.jsxs("main",{children:[e.jsx(o,{}),e.jsx(n,{products:a})]})]})}export{j as default};
