import{r as e,j as t,N as r,F as a,I as n,C as o,a as s,A as i,S as c,R as l,H as d,b as u,c as m}from"./vendor.63438330.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var p={header:"_header_1rsmu_1",fadeIn:"_fadeIn_1rsmu_1",headerWrapper:"_headerWrapper_1rsmu_11",nav:"_nav_1rsmu_18",link:"_link_1rsmu_35",selectedLink:"_selectedLink_1rsmu_44",menuIcon:"_menuIcon_1rsmu_48"};const h=[{title:"Home",path:"/"},{title:"Quotes",path:"/quotes"},{title:"Authors",path:"/authors"},{title:"About",path:"/about"}],_=t.exports.jsx,f=t.exports.jsxs,g=t.exports.Fragment;function b({toggleSidebar:e}){return _("header",{className:p.header,children:f("div",{className:["wrapper",p.headerWrapper].join(" "),children:[_("img",{src:"/memento-verborum/assets/logo.73709272.svg",alt:"the logo of momento verborum"}),_("nav",{className:p.nav,children:_("ul",{children:h.map((e=>_("li",{children:_(r,{exact:!0,to:e.path,className:p.link,activeClassName:p.selectedLink,children:e.title})},e.title)))})}),_(a,{className:p.menuIcon,onClick:e})]})})}var v={sidebarWrapper:"_sidebarWrapper_1oaji_1",active:"_active_1oaji_10",sidebar:"_sidebar_1oaji_1",link:"_link_1oaji_36",selectedLink:"_selectedLink_1oaji_44",closeIcon:"_closeIcon_1oaji_48"};function N({isOpen:e,toggleSidebar:t}){const a=e?[v.sidebarWrapper,v.active].join(" "):v.sidebarWrapper;return _("div",{className:a,children:_("nav",{className:v.sidebar,children:f("ul",{children:[_("li",{children:_(n,{className:v.closeIcon,onClick:t})}),h.map((e=>_("li",{children:_(r,{exact:!0,to:e.path,className:v.link,activeClassName:v.selectedLink,children:e.title})},e.title)))]})})})}function k(){const[t,r]=e.exports.useState(!1),a=()=>r(!t);return f(g,{children:[_(N,{isOpen:t,toggleSidebar:a}),_(b,{toggleSidebar:a})]})}var x="_bouncer_1uows_1",y="_ball_1uows_10";function j(){return _("div",{className:x,children:Array.from(Array(4).keys()).map((e=>_("div",{className:y},e)))})}var I="_quote_tqb0u_2",q="_quoteContent_tqb0u_6",L="_author_tqb0u_70";function S({isLoading:e,data:t}){return _("div",{className:I,children:_(o,{in:!e,classNames:"quote",timeout:500,children:_("div",{className:"wrapper",children:e?_(j,{}):f(g,{children:[_("blockquote",{className:q,children:t.content}),f("p",{className:L,children:["~ ",t.author]})]})})})})}var w="_coloredBackground_1xujr_1";var W={footer:"_footer_1un9t_1",fadeIn:"_fadeIn_1un9t_1",footerWrapper:"_footerWrapper_1un9t_11",text:"_text_1un9t_23",link:"_link_1un9t_41"};function A(){return _("footer",{className:W.footer,children:f("div",{className:["wrapper",W.footerWrapper].join(" "),children:[f("p",{className:W.text,children:["Memento Verborum ♥ 2021",_("a",{className:W.link,target:"_blank",href:"https://github.com/yegorkravchenko/memento-verborum",children:_(i,{})})]}),_("p",{className:W.text,children:'"Verba volant, scripta manent"'})]})})}const C=[{path:"/",component:function(){const[t,r]=e.exports.useState({}),[a,n,o]=(t=>{const[r,a]=e.exports.useState(!0),[n,o]=e.exports.useState("");return[async()=>{try{a(!0),await t()}catch(e){o(e.message),console.log(e.message)}finally{a(!1)}},r,n]})((async()=>{const e=await class{static async getRandom(){return await s.get("https://api.quotable.io/random")}}.getRandom();r(e.data)}));return e.exports.useEffect((()=>{a()}),[]),_(g,{children:f("div",{className:w,children:[_(k,{}),_("main",{children:_(S,{isLoading:n,data:t})}),_(A,{})]})})},exact:!0},{path:"/quotes",component:function(){return _(g,{children:_("h1",{children:"Quotes"})})},exact:!0},{path:"/authors",component:function(){return _(g,{children:_("h1",{children:"Authors"})})},exact:!0},{path:"/about",component:function(){return _(g,{children:_("h1",{children:"About Page"})})},exact:!0},{path:"",component:function(){return _(g,{children:_("p",{children:"The requested page was not found."})})},exact:!1}];function E(){return _(c,{children:C.map((e=>_(l,{path:e.path,component:e.component,exact:e.exact},e.path)))})}function M(){return _(d,{children:_(E,{})})}u.render(_(m.StrictMode,{children:_(M,{})}),document.getElementById("root"));
