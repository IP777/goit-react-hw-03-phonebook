(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{124:function(e,t,n){e.exports=n(1423)},129:function(e,t,n){},1423:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(121),c=n.n(o),l=(n(129),n(55)),i=n(122),u=n(27),m=n(28),s=n(29),f=n(30),h=n(123),p=n.n(h),d={marginTop:15,marginBottom:5},b=function(e){var t=e.title,n=e.children;return r.a.createElement("section",null,r.a.createElement("h2",{style:d},t),n)},v=n(18),g=n.n(v),C=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement("ul",{className:g.a.list},t.map((function(e){var t=e.id,a=e.name,o=e.number,c=e.newItem;return r.a.createElement("li",{key:t,className:c?g.a.newComponent:g.a.component},a,": ",o,r.a.createElement("input",{type:"button",value:"Delete",onClick:function(){return n(t)},className:g.a.btn}))})))},y=n(26),E=n(31),_=n(54),S=n.n(_),N=n(8),k=n.n(N),w={color:"#ff0000",display:"block",fontSize:14,fontWeight:300,margin:0,marginBottom:5},O=function(e){var t=e.errorType;return r.a.createElement("span",{style:w},t)},j={name:[E.validations.required(),E.validations.regex(["^[a-zA-Z\u0430-\u044f\u0410-\u042f]+"])],number:"required|string"},F={"name.required":"Please choose a unique username for your account","number.required":"Enter a valid phone number.","name.regex":"Username contains invalid characters, please use only Latin or Cyrillic letters"},I=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",errors:null},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;Object(E.validateAll)({name:a,number:r},j,F).then((function(t){e.props.addContact({name:a,number:r}),e.reset()})).catch((function(t){var n={};t.forEach((function(e){n[e.field]=e.message})),e.setState({errors:n})}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(y.a)({},a,r))},e.handleFake=function(){var t=S.a.name.firstName(),n=S.a.phone.phoneNumberFormat();e.setState({name:t,number:n})},e.reset=function(){e.setState({name:"",number:"",errors:null})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:k.a.form},r.a.createElement("label",{className:k.a.title},"Name",r.a.createElement("input",{className:k.a.formInput,value:t,type:"text",placeholder:"Enter login",onChange:this.handleChange,name:"name"}),a&&r.a.createElement(O,{errorType:a.name})),r.a.createElement("label",{className:k.a.title},"Number",r.a.createElement("input",{className:k.a.formInput,value:n,type:"text",placeholder:"Enter number",onChange:this.handleChange,name:"number"}),a&&r.a.createElement(O,{errorType:a.number})),r.a.createElement("button",{type:"submit",className:k.a.submitBtn},"Add contact"),r.a.createElement("button",{type:"button",className:k.a.submitBtn,onClick:this.handleFake},"Generate fake contact")))}}]),n}(a.Component),A={width:313},x=function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("input",{type:"text",value:t,onChange:n,placeholder:"Search something....",style:A})},B=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.addContact=function(t){var n=t.name;if(e.state.contacts.find((function(e){return e.name===n})))alert("".concat(n," is already in contacts"));else{var a=Object(i.a)({},t,{id:p.a.generate(),newItem:!0});e.setState((function(e){return{contacts:[a].concat(Object(l.a)(e.contacts))}}))}},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(e,t){localStorage.setItem("contact",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("contact");if(e){var t=JSON.parse(e);this.setState((function(){return{contacts:Object(l.a)(t)}}))}}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{title:"Phonebook"},r.a.createElement(I,{addContact:this.addContact})),r.a.createElement(b,{title:"Contacts"},(t.length>2||n)&&r.a.createElement(x,{value:n,onChangeFilter:this.changeFilter}),r.a.createElement(C,{contacts:a,onRemoveContact:this.removeContact})))}}]),n}(a.Component);c.a.render(r.a.createElement(B,null),document.getElementById("root"))},18:function(e,t,n){e.exports={component:"Contacts_component__1EPuG",newComponent:"Contacts_newComponent__jWb63",list:"Contacts_list__3PCi2",btn:"Contacts_btn__1JS-M"}},8:function(e,t,n){e.exports={title:"AddContactForm_title__ih8Fa",formInput:"AddContactForm_formInput__yuVys",submitBtn:"AddContactForm_submitBtn__TwJIT",form:"AddContactForm_form__2NtHt"}}},[[124,1,2]]]);
//# sourceMappingURL=main.da32a5aa.chunk.js.map