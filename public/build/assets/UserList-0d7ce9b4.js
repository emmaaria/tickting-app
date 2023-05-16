import{r,j as i,a as e,b as n,d as c}from"./app-31f74cba.js";import{A as h}from"./AuthenticatedLayout-e684b6e8.js";import"./ApplicationLogo-f649d2be.js";import"./transition-f15bb056.js";function u({auth:s,users:t}){const[l,m]=r.useState(t.data?t.data:[]),[d,o]=r.useState(t.links?t.links:[]);return i(h,{user:s.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Users"}),children:[e(n,{title:"Users"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:i("div",{className:"card border-info",children:[e("div",{className:"card-header",children:"User List"}),e("div",{className:"card-body",children:i("table",{className:"table",children:[e("thead",{children:i("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Email"}),e("th",{children:"Mobile"}),e("th",{children:"Department"}),e("th",{})]})}),e("tbody",{children:l&&l.length>0&&l.map(a=>i("tr",{children:[e("td",{children:a.username}),e("td",{children:a.email}),e("td",{children:a.phone}),e("td",{children:"مركز الخدمة 1"}),e("td",{children:i("div",{className:"actions float-end",children:[e("a",{href:"#",className:"text-info",title:"عرض",children:e("i",{className:"fa fa-eye","aria-hidden":"true"})}),e("a",{href:"#",className:"text-warning",title:"تعديل",children:e("i",{className:"fa fa-pen","aria-hidden":"true"})}),e("a",{href:"#",className:"text-danger",title:"حذف",children:e("i",{className:"fa fa-trash","aria-hidden":"true"})})]})})]},a.id))})]})}),e("div",{className:"card-footer",children:e("nav",{"aria-label":"list users",children:e("ul",{className:"pagination m-0",children:d.map(a=>e("li",{className:`page-item ${a.active===!0?"active":""}`,children:e(c,{href:a.url,dangerouslySetInnerHTML:{__html:a.label},className:"page-link"})},a.label))})})})]})})})]})}export{u as default};
