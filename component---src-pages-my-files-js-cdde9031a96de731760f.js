(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});n(54);var a=n(0),r=n.n(a),i=n(150);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"My Site's Files"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"relativePath"),r.a.createElement("th",null,"prettySize"),r.a.createElement("th",null,"extension"),r.a.createElement("th",null,"birthTime"))),r.a.createElement("tbody",null,t.allFile.edges.map(function(e,t){var n=e.node;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n.relativePath),r.a.createElement("td",null,n.prettySize),r.a.createElement("td",null,n.extension),r.a.createElement("td",null,n.birthTime))})))))};var l="3953592347"},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return g}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),u=n(145),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var o=n(27);n.d(t,"waitForRouteChange",function(){return o.c});var s=n(147),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(38);n.d(t,"parsePath",function(){return m.a});var g=r.a.createContext({}),f=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},148:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(158);var a=n(8),r=n.n(a),i=n(52),l=n.n(i),u=n(0),c=n.n(u),o=(n(146),n(153),n(156),n(157)),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggle=n.toggle.bind(l()(l()(n))),n.state={isOpen:!1},n}r()(t,e);var n=t.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return c.a.createElement("div",null,c.a.createElement(o.j,{color:"none",light:!0,expand:"md"},c.a.createElement(o.k,{onClick:this.toggle}),c.a.createElement(o.b,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(o.g,{className:"ml-auto",navbar:!0},c.a.createElement(o.h,null,c.a.createElement(o.i,{href:"/"},"Home")),c.a.createElement(o.h,null,c.a.createElement(o.i,{href:"/about/"},"About")),c.a.createElement(o.h,null,c.a.createElement(o.i,{href:"/contact/"},"Contact"))))))},t}(c.a.Component)},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(4);t.a=function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("p",{style:{fontSize:"20px",margin:"auto",textAlign:"center",maxWidth:"70%"}},"© Lisa Jo 2018  designed by Lisa Jo"))}},150:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),l=n(146);n(148),n(149);t.a=function(e,t){var n=e.children;return i.a.createElement(l.StaticQuery,{query:"1019946411",render:function(e){return i.a.createElement("div",null,i.a.createElement("h3",{style:{fontSize:"48px",fontWeight:"bold",textAlign:"left",paddingLeft:"20px",color:"#1F838E",paddingTop:"10px"}},e.site.siteMetadata.title),i.a.createElement("div",{style:{color:"grey",margin:"auto",textAlign:"center"}},n))},data:a})}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"The Adventures of Ice and Pan"}}}}},152:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),u=n(53),c=n(1),o=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},153:function(e,t,n){},156:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJiYXJzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYmFycyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnoiPjwvcGF0aD48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-my-files-js-cdde9031a96de731760f.js.map