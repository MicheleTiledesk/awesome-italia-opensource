"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{9305:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),r=a(6588),n=(a(6146),a(6493),a(6367)),s=a(7488),o=a(8650),i=a(5600),c=a(9403);const m=JSON.parse('{"data":[{"name":"Pytorch Deep Learning","repository_platform":"github","repository_url":"https://github.com/Atcold/pytorch-Deep-Learning","site_url":"https://atcold.github.io/pytorch-Deep-Learning/","type":"learning","license":"Creative Commons","tags":["python","jupyter notebook","deep learning","pytorch"]},{"name":"Bootstrap Italia","repository_platform":"github","repository_url":"https://github.com/italia/bootstrap-italia","site_url":"https://developers.italia.it","type":"library","license":"BSD-3-Clause","tags":["css","bootstrap","javascript"]},{"name":"Nuvolaris","repository_platform":"github","repository_url":"https://github.com/nuvolaris/nuvolaris","type":"faas","license":"Apache-2.0","tags":["go","python","serverless","startup"]}]}');function p(){const[e,t]=(0,l.useState)(null),[a,r]=(0,l.useState)(null),[p,u]=(0,l.useState)(""),[d,h]=(0,l.useState)(!0);(0,l.useEffect)((()=>{t(y(m)),h(!1),E()}),[]);const y=e=>[...e.data||[]].map((e=>(e.date=new Date(e.date),e))),b=()=>{E()},f=e=>{const t=e.target.value;let l={...a};l.global.value=t,r(l),u(t)},E=()=>{r({global:{value:null,matchMode:n.a6.CONTAINS},name:{operator:n.pg.AND,constraints:[{value:null,matchMode:n.a6.STARTS_WITH}]},type:{operator:n.pg.AND,constraints:[{value:null,matchMode:n.a6.STARTS_WITH}]},license:{operator:n.pg.AND,constraints:[{value:null,matchMode:n.a6.STARTS_WITH}]},tags:{operator:n.pg.AND,constraints:[{value:null,matchMode:n.a6.CONTAINS}]}}),u("")},g=l.createElement("div",{className:"flex justify-content-between"},l.createElement(c.z,{type:"button",icon:"pi pi-filter-slash",label:"Clear",className:"p-button-outlined",onClick:b}),l.createElement("span",{className:"p-input-icon-left"},l.createElement("i",{className:"pi pi-search"}),l.createElement(i.o,{value:p,onChange:f,placeholder:"Keyword Search"})));return l.createElement("div",{className:"datatable-filter-demo"},l.createElement("div",{className:"card"},l.createElement(s.w,{value:e,paginator:!0,showGridlines:!0,className:"p-datatable-customers",rows:20,dataKey:"id",filters:a,filterDisplay:"menu",loading:d,responsiveLayout:"scroll",globalFilterFields:["name","repository_platform"],header:g,emptyMessage:"No projects found."},l.createElement(o.s,{field:"name",header:"Name",body:e=>l.createElement(l.Fragment,null,l.createElement("a",{href:e.site_url},e.name)),filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"20em"}}),l.createElement(o.s,{field:"repository_platform",body:e=>l.createElement(l.Fragment,null,l.createElement("a",{href:e.repository_url},e.repository_platform)),header:"Repository Platform",style:{minWidth:"10em"}}),l.createElement(o.s,{field:"type",header:"Type",filter:!0,filterPlaceholder:"Search by type",style:{minWidth:"10em"}}),l.createElement(o.s,{field:"license",header:"License",filter:!0,filterPlaceholder:"Search by license",style:{minWidth:"20em"}}),l.createElement(o.s,{field:"tags",header:"Tags",filter:!0,filterPlaceholder:"Search by tags",style:{minWidth:"55em"},body:e=>e.tags.join(", ")}))))}var u=a(3291);const d="wrapper_m3th",h="form_input_z9lC",y="subscribe_pLww",b="notice_ltfh";function f(){const[e,t]=(0,u.cI)("xoqbqong");return e.succeeded?l.createElement("p",null,"Thanks for joining!"):l.createElement("div",{className:d},l.createElement("form",{onSubmit:t},l.createElement("div",{className:"form-input"},l.createElement("input",{id:"email",type:"email",name:"email",placeholder:"Email Address",className:h,required:!0}),l.createElement(u.p8,{prefix:"Email",field:"email",errors:e.errors}),l.createElement("button",{type:"submit",disabled:e.submitting,className:y},"Subscribe"),l.createElement("div",{className:b},l.createElement("input",{type:"checkbox",name:"subscribe",value:"newsletter",required:!0}),l.createElement("span",null,"I agree to my email address being stored and uses to recieve monthly newsletter.")))))}function E(){return l.createElement(r.Z,{title:"Home",wrapperClassName:"layout",description:"Italia Opensource is a list of open source projects created by Italian companies or developers. The repository intends to give visibility to open source projects and stimulate the community to contribute to growing the ecosystem."},l.createElement("main",{className:"main"},l.createElement("section",{className:"wrapper"},l.createElement("div",{className:"content"},l.createElement("header",null,l.createElement("h1",null,"Italia Opensource")),l.createElement("section",null,l.createElement("p",null,"Italia Opensource is a list of open source projects created by Italian companies or developers.",l.createElement("br",null),"The repository intends to give visibility to open source projects and stimulate the community to contribute to growing the ecosystem."),l.createElement(p,null)))),l.createElement("section",{className:"wrapper"},l.createElement("div",{className:"content"},l.createElement("header",null,l.createElement("h1",null,"Subscribe Us")),l.createElement("section",null,l.createElement("p",null,"The newsletter will be dedicated to keeping you updated on new open source projects in the Italian community and events around the country.")),l.createElement("footer",null,l.createElement(f,null))))))}}}]);