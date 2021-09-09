(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a,r=n(1),c=n.n(r),i=n(9),o=n.n(i),s=(n(18),n(12)),u=n(4),d=n(5),l=n(7),b=n(6),m=n(2),j=n(3),p=j.a.h2(a||(a=Object(m.a)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-align: left;\n  text-transform: uppercase;\n"]))),h=n(0);function x(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)(p,{children:e}),n]})}var O,f,g,v,C,y,S=n(11),k=j.a.form(O||(O=Object(m.a)(["\n  max-width: 300px;\n  padding: 10px;\n\n  background-color: #a6d8dd;\n  border: 2px solid #1a223b;\n  border-radius: 5px;  \n  cursor: pointer; \n"]))),w=j.a.button(f||(f=Object(m.a)(["\n  margin-top: 20px;\n  padding: 5px;\n  \n  background-color: #5283ec;\n  cursor: pointer; \n"]))),A=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(S.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.propOnSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(k,{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{children:[" Number",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(h.jsx)("br",{}),Object(h.jsx)(w,{type:"submit",children:"Add contact"})]})}}]),n}(r.Component),D=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",value:e,onChange:n})]})},F=j.a.ol(g||(g=Object(m.a)(["\n  max-width: 300px;\n  cursor: pointer;\n"]))),J=j.a.li(v||(v=Object(m.a)(["\nmargin-bottom: 8px;\n \n"]))),L=j.a.button(C||(C=Object(m.a)(["\n  margin-left: 8px;\n\n  background-color: #5283ec;\n  cursor: pointer; \n"])));function N(t){var e=t.contacts,n=t.onDelete;return Object(h.jsx)(F,{children:e.map((function(t){return Object(h.jsxs)(J,{children:[t.name,": ",t.number,Object(h.jsx)(L,{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})}var z=j.a.div(y||(y=Object(m.a)(["\n  max-width: 300px;\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 50px;\n  background-color: #a6d8dd;\n  border-radius: 10px;  \n"]))),E=n(25),I=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))alert("".concat(e.name," is already in contacts."));else if(t.state.contacts.find((function(t){return t.number===e.number})))alert("This number ".concat(e.number," is already in contacts"));else{var n={id:Object(E.a)(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);console.log(e),e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(h.jsxs)(z,{children:[Object(h.jsx)(x,{title:"Phonebook",children:Object(h.jsx)(A,{propOnSubmit:this.addContact})}),Object(h.jsxs)(x,{title:"Contacts",children:[Object(h.jsx)(D,{value:t,onChange:this.changeFilter}),Object(h.jsx)(N,{contacts:this.getFilterContacts(),onDelete:this.deleteContact})]})]})}}]),n}(r.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a3fc3edb.chunk.js.map