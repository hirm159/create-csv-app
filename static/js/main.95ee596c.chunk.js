(this["webpackJsonpcreate-csv-app"]=this["webpackJsonpcreate-csv-app"]||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(21),i=c.n(r),s=(c(64),c(16)),j=c(17),l=c(20),d=c(19),b=(c(65),c(54)),h=c(10),x=c(118),O=c(115),o=c(114),u=c(116),v=c(121),p=c(117),m=c(52),f=c.n(m),g=c(2),k=[{dataField:"id",text:"id",sort:!1,editable:!1},{dataField:"value",text:"value",sort:!1,editable:!1}],y=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(f.a,{data:e.items,columns:k,keyField:"id",bootstrap4:!0,bordered:!0})})},C=c(53),T=[{id:0,value:""}],L=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={id:0,value:"ClearAll\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304b\u3089\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044"},e.onSubmit=function(){if(0===e.state.value.length)return"";var t={id:T.length+1,value:e.state.value};T.push(t),e.setState({value:""})},e.clear=function(){e.setState({value:""})},e.clearAll=function(){T.length=0,e.setState({value:""})},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)(O.a,{children:Object(g.jsxs)(u.a,{className:"mb-3",children:[Object(g.jsx)(v.a,{type:"text",name:"inputTitle",placeholder:"Input Text",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),Object(g.jsx)(p.a,{size:"lg",variant:"primary",onClick:this.onSubmit,children:"Add"})]})})}),Object(g.jsxs)(o.a,{children:[Object(g.jsx)(O.a,{md:4,children:Object(g.jsx)(p.a,{size:"lg",variant:"warning",onClick:this.clear,children:"InputClear"})}),Object(g.jsx)(O.a,{md:4,children:Object(g.jsx)(p.a,{size:"lg",variant:"danger",onClick:this.clearAll,children:"ClearAll"})}),Object(g.jsx)(O.a,{md:4,children:Object(g.jsx)(C.CSVLink,{data:T,className:"btn btn-dark btn-lg",children:"CreateCsv"})})]}),Object(g.jsx)(o.a,{className:"mt-5",children:Object(g.jsx)(y,{items:T})})]})}}]),c}(a.a.Component),S={marginBottom:"30px"},w=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(g.jsx)(x.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(O.a,{md:12,children:Object(g.jsx)("h1",{style:S,children:"CSV\u4f5c\u6210\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"})}),Object(g.jsx)("div",{className:"row justify-content-center",children:Object(g.jsx)(O.a,{md:8,children:Object(g.jsx)(L,{})})})]})})}}]),c}(a.a.Component),B=c(122),N={marginBottom:"30px"},A=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(g.jsx)(x.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(O.a,{md:12,children:Object(g.jsx)("h1",{style:N,children:"\u30ea\u30f3\u30af\u96c6"})}),Object(g.jsxs)(o.a,{children:[Object(g.jsx)(O.a,{xs:6,children:Object(g.jsx)(B.a,{className:"h-100",children:Object(g.jsxs)(B.a.Body,{children:[Object(g.jsx)(B.a.Title,{children:"TuneMyMusic"}),Object(g.jsx)(B.a.Text,{children:"\u97f3\u697d\u30b5\u30fc\u30d3\u30b9\u9593\u3067\u306e\u30d7\u30ec\u30a4\u30ea\u30b9\u30c8\u8ee2\u9001\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002 \u30b5\u30fc\u30d3\u30b9\u5185\u306bcsv\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u51e6\u7406\u304c\u3042\u308b\u70ba\u3001\u4f5c\u6210\u3057\u305fcsv\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30d7\u30ec\u30a4\u30ea\u30b9\u30c8\u306e\u5b9f\u88c5\u304c\u53ef\u80fd\u3067\u3059\u3002"}),Object(g.jsx)(B.a.Link,{target:"_blank",href:"https://www.tunemymusic.com/jp/",children:"Link"})]})})}),Object(g.jsx)(O.a,{xs:6,children:Object(g.jsx)(B.a,{className:"h-100",children:Object(g.jsxs)(B.a.Body,{children:[Object(g.jsx)(B.a.Title,{children:"React \u516c\u5f0f"}),Object(g.jsx)(B.a.Text,{children:"React\u516c\u5f0f\uff08\u65e5\u672c\u8a9e\u7248\uff09"}),Object(g.jsx)(B.a.Link,{target:"_blank",href:"https://ja.reactjs.org/",children:"Link"})]})})})]}),Object(g.jsx)(o.a,{children:Object(g.jsx)(O.a,{xs:6,children:Object(g.jsx)(B.a,{className:"h-100",children:Object(g.jsxs)(B.a.Body,{children:[Object(g.jsx)(B.a.Title,{children:"MIT\u30e9\u30a4\u30bb\u30f3\u30b9"}),Object(g.jsx)(B.a.Text,{children:"MIT\u30e9\u30a4\u30bb\u30f3\u30b9\u30da\u30fc\u30b8"}),Object(g.jsx)(B.a.Link,{target:"_blank",href:"https://opensource.org/licenses/mit-license.php",children:"Link"})]})})})})]})})}}]),c}(a.a.Component),F=c(119),I=c(120),M=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(g.jsx)(b.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(F.a,{bg:"light",expand:"lg",children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(F.a.Brand,{href:"/",children:"Create-Csv-App"}),Object(g.jsx)(F.a.Text,{children:"version 1.0.0"}),Object(g.jsx)(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(F.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(I.a,{className:"mr-auto",children:[Object(g.jsx)(I.a.Link,{href:"/",children:"Top"}),Object(g.jsx)(I.a.Link,{href:"link",children:"Link"})]})})]})}),Object(g.jsxs)(h.c,{children:[Object(g.jsx)(h.a,{path:"/",exact:!0,component:w}),Object(g.jsx)(h.a,{path:"/link",exact:!0,component:A})]})]})})}}]),c}(n.Component),z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,123)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),z()},65:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.95ee596c.chunk.js.map