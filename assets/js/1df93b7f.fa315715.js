"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{8423:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7294),r=a(6588),s=(a(6146),a(6493),a(6367)),n=a(7488),o=a(8650),i=a(5600),c=a(9403);const m=JSON.parse('{"data":[{"name":"Nuvolaris","repository_platform":"github","repository_url":"https://github.com/nuvolaris/nuvolaris","type":"faas","license":"Apache-2.0","tags":["go","python","serverless","startup"]}]}');function p(){const[e,t]=(0,l.useState)(null),[a,r]=(0,l.useState)(null),[p,u]=(0,l.useState)(""),[d,h]=(0,l.useState)(!0);(0,l.useEffect)((()=>{t(f(m)),h(!1),b()}),[]);const f=e=>[...e.data||[]].map((e=>(e.date=new Date(e.date),e))),y=()=>{b()},g=e=>{const t=e.target.value;let l={...a};l.global.value=t,r(l),u(t)},b=()=>{r({global:{value:null,matchMode:s.a6.CONTAINS},name:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},type:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},license:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},tags:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.CONTAINS}]}}),u("")},v=l.createElement("div",{className:"flex justify-content-between"},l.createElement(c.z,{type:"button",icon:"pi pi-filter-slash",label:"Clear",className:"p-button-outlined",onClick:y}),l.createElement("span",{className:"p-input-icon-left"},l.createElement("i",{className:"pi pi-search"}),l.createElement(i.o,{value:p,onChange:g,placeholder:"Keyword Search"})));return l.createElement("div",{className:"datatable-filter-demo"},l.createElement("div",{className:"card"},l.createElement(n.w,{value:e,paginator:!0,showGridlines:!0,className:"p-datatable-customers",rows:20,dataKey:"id",filters:a,filterDisplay:"menu",loading:d,responsiveLayout:"scroll",globalFilterFields:["name","repository_platform"],header:v,emptyMessage:"No projects found."},l.createElement(o.s,{field:"name",header:"Name",body:e=>l.createElement(l.Fragment,null,l.createElement("a",{href:e.site_url},e.name)),filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"20em"}}),l.createElement(o.s,{field:"repository_platform",body:e=>l.createElement(l.Fragment,null,l.createElement("a",{href:e.repository_url},e.repository_platform)),header:"Repository Platform",style:{minWidth:"10em"}}),l.createElement(o.s,{field:"type",header:"Type",filter:!0,filterPlaceholder:"Search by type",style:{minWidth:"10em"}}),l.createElement(o.s,{field:"license",header:"License",filter:!0,filterPlaceholder:"Search by license",style:{minWidth:"20em"}}),l.createElement(o.s,{field:"tags",header:"Tags",filter:!0,filterPlaceholder:"Search by tags",style:{minWidth:"55em"},body:e=>e.tags.join(", ")}))))}function u(){return l.createElement(r.Z,{title:"Home",description:"Italia Opensource is a list of open source projects created by Italian companies or developers. The repository intends to give visibility to open source projects and stimulate the community to contribute to growing the ecosystem."},l.createElement("main",null,l.createElement(p,null)))}}}]);