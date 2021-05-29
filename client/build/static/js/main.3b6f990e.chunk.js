(this["webpackJsonpgoogle-book-search"]=this["webpackJsonpgoogle-book-search"]||[]).push([[0],{61:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(30),s=n.n(o),r=n(8),i=n(9),l=n(11),h=n(10),d=n(13),u=n(2),j=n(0);var b=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg text-light",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Google Books"}),Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:" Search"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link",children:"Saved"})})]})]})})};var v=function(){return Object(j.jsx)("div",{className:"jumbotron text-center",children:Object(j.jsx)("div",{className:"container text-light",children:Object(j.jsx)("h1",{children:"Google Books Search"})})})},m=n(32);var O=function(e){return Object(j.jsx)("main",Object(m.a)({className:"wrapper"},e))};var k=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(v,{children:[Object(j.jsx)("h1",{children:"404 Page Not Found"}),Object(j.jsx)("h1",{children:Object(j.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},x=n(16);var p=function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"search",children:Object(j.jsx)("h2",{children:"Search for and save Books of Interest"})}),Object(j.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search a Book",id:"search"}),Object(j.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-dark mt-3 mb-5",children:"Search"})]})})})},f=n(15),g=n.n(f),B={getBooks:function(e){return g.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},getBook:function(e){return g.a.get("/api/books/"+e)},deleteBook:function(e){return g.a.delete("/api/books/"+e)},saveBook:function(e){return g.a.post("/api/books",e)}},N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={savedBooks:[]},e.handleSave=function(t){e.state.savedBooks.map((function(e){return e._id})).includes(t._id)?B.deleteBook(t._id).then((function(t){return e.setState({savedBooks:e.state.savedBooks.filter((function(e){return e._id!==t._id}))})})).catch((function(e){return console.error(e)})):B.saveBook(t).then((function(t){return e.setState({savedBooks:e.state.savedBooks.concat([t])})})).catch((function(e){return console.error(e)}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;B.savedBooks().then((function(t){return e.setState({savedBooks:t})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{children:this.props.books.length?Object(j.jsx)("div",{children:this.props.books.map((function(t){return Object(j.jsx)("div",{className:"card mb-3",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-2",children:Object(j.jsx)("img",{alt:t.title,className:"img-fluid",src:t.image})}),Object(j.jsx)("div",{className:"col-md-10",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h5",{className:"card-title",children:[t.title," by ",t.authors]}),Object(j.jsx)("p",{className:"card-text",children:t.description}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:t.link,className:"btn badge-pill btn-outline-dark mt-3",target:"_blank",rel:"noreferrer",children:"View"}),Object(j.jsx)("button",{onClick:function(){return e.handleSave(t)},className:"btn badge-pill btn-outline-warning mt-3 ml-3",children:e.state.savedBooks.map((function(e){return e._id})).includes(t._id)?"Unsave":"Save"})]})]})})]})},t._id)}))}):Object(j.jsx)("h1",{className:"text-center",children:"No Results to Display"})})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:"",books:[]},e.makeBook=function(e){return{_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink}},e.searchBook=function(t){B.getBook(t).then((function(t){return e.setState({books:t.data.items.map((function(t){return e.makeBook(t)}))})})).catch((function(e){return console.error(e)}))},e.handleInputChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(x.a)({},n,a))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchBook(e.state.search)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.searchBook()}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{search:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"Results"}),Object(j.jsx)(N,{books:this.state.books})]})]})}}]),n}(c.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={savedBooks:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;B.savedBooks().then((function(t){return e.setState({savedBooks:t})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"Saved books"}),Object(j.jsx)(N,{books:this.state.savedBooks})]})}}]),n}(a.Component),w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsx)(v,{}),Object(j.jsxs)(O,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(u.a,{exact:!0,path:"/search",component:y}),Object(j.jsx)(u.a,{exact:!0,path:"/saved",component:S}),Object(j.jsx)(u.a,{exact:!0,path:"/noMatch",component:k})]})]})})}}]),n}(a.Component);s.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.3b6f990e.chunk.js.map