(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return d});var n=a(0),r=a.n(n),i=a(150),o=a(148),l=a(157),c=a(149),u=(a(173),{width:"700px",maxWidth:"70%",margin:"auto"}),s={color:"#1F838E"};t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(o.a,null),r.a.createElement("h1",{style:{color:"#1F838E",fontSize:"40px",maxWidth:"70%",width:"700px",margin:"auto",textAlign:"center",paddingTop:"15px",paddingBottom:"15px"}},"Contact ",t.site.siteMetadata.title),r.a.createElement("p",{style:{width:"700px",maxWidth:"70%",textAlign:"center",margin:"auto",fontSize:"20px"}},"If you want to contact us, please shoot us an email. Or go for a bike ride. Or hire Lisa, because she's looking for job offers to do what she loves and be a web developer."),r.a.createElement(l.c,null,r.a.createElement(l.d,{style:u},r.a.createElement(l.f,{for:"Name",style:s},"Name"),r.a.createElement(l.e,{style:{backgroundColor:"#8BD3DB  ",lineHeight:"15px"},type:"textarea",name:"text",placeholder:"name"})),r.a.createElement(l.d,{style:u},r.a.createElement(l.f,{style:s,for:"Email"},"Email"),r.a.createElement(l.e,{style:{backgroundColor:"#8BD3DB  ",lineHeight:"30px"},type:"email",name:"email",id:"Email",placeholder:"email address"})),r.a.createElement(l.d,{style:u},r.a.createElement(l.f,{style:s,for:"Message"},"Message"),r.a.createElement(l.e,{style:{backgroundColor:"#8BD3DB  ",lineHeight:"100px"},type:"textarea",name:"text",id:"exampleText",placeholder:"your message"})),r.a.createElement(l.a,{style:{marginTop:"15px",alignItems:"center",color:"white",backgroundColor:"#8BD3DB ",justifyContent:"center"}},"Submit")),r.a.createElement(c.a,null))};var d="1097489062"},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(145),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(27);a.d(t,"waitForRouteChange",function(){return u.c});var s=a(147),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var g=r.a.createContext({}),p=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},148:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(158);var n=a(8),r=a.n(n),i=a(52),o=a.n(i),l=a(0),c=a.n(l),u=(a(146),a(153),a(156),a(157)),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(o()(o()(a))),a.state={isOpen:!1},a}r()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return c.a.createElement("div",null,c.a.createElement(u.j,{color:"none",light:!0,expand:"md"},c.a.createElement(u.k,{onClick:this.toggle}),c.a.createElement(u.b,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(u.g,{className:"ml-auto",navbar:!0},c.a.createElement(u.h,null,c.a.createElement(u.i,{href:"/"},"Home")),c.a.createElement(u.h,null,c.a.createElement(u.i,{href:"/about/"},"About")),c.a.createElement(u.h,null,c.a.createElement(u.i,{href:"/contact/"},"Contact"))))))},t}(c.a.Component)},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(4);t.a=function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("p",{style:{fontSize:"20px",margin:"auto",textAlign:"center",maxWidth:"70%"}},"© Lisa Jo 2018  designed by Lisa Jo"))}},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(146);a(148),a(149);t.a=function(e,t){var a=e.children;return i.a.createElement(o.StaticQuery,{query:"1019946411",render:function(e){return i.a.createElement("div",null,i.a.createElement("h3",{style:{fontSize:"48px",fontWeight:"bold",textAlign:"left",paddingLeft:"20px",color:"#1F838E",paddingTop:"10px"}},e.site.siteMetadata.title),i.a.createElement("div",{style:{color:"grey",margin:"auto",textAlign:"center"}},a))},data:n})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"The Adventures of Ice and Pan"}}}}},152:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(53),c=a(1),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,a){},156:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJiYXJzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYmFycyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnoiPjwvcGF0aD48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-contact-js-3bbca6bcfdce2346bab9.js.map